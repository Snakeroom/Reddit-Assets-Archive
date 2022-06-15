// https://www.redditstatic.com/desktop2x/Governance~Reddit.9abbf04f70b393cb930b.js
// Retrieved at 6/15/2022, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit"], {
		"./assets/fonts/NotoMono/font.less": function(e, t, n) {},
		"./src/lib/asyncActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
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
			var d;
			! function(e) {
				e[e.New = 0] = "New", e[e.Pending = 1] = "Pending", e[e.Succeeded = 2] = "Succeeded", e[e.Failed = 3] = "Failed"
			}(d || (d = {}));
			const i = (e, t, n) => (function() {
				let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.New,
					s = arguments.length > 1 ? arguments[1] : void 0;
				switch (s.type) {
					case e:
						return r === d.New ? d.Pending : r;
					case t:
						return r === d.Pending ? d.Succeeded : r;
					case n:
						return r === d.Pending ? d.Failed : r;
					default:
						return r
				}
			})
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t),
					a = new r.BigNumber(n.dividedBy(s)),
					o = new r.BigNumber("100").multipliedBy(a);
				return new r.BigNumber(o).toNumber()
			}
		},
		"./src/lib/intlList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/react/index.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function a(e, t) {
				for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
				if (s(t), !e) {
					let e;
					if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let n = 0;
						(e = new Error(t.replace(/%s/g, () => String(r[n++])))).name = "Invariant Violation"
					}
					throw e.framesToPop = 1, e
				}
			}
			const o = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				c = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			t.c = function(e, t, n) {
				const s = e.length;
				if (0 === s) return "";
				if (1 === s) return e[0];
				const d = e[s - 1];
				let i = e[0];
				for (let a = 1; a < s - 1; ++a) switch (n) {
					case c.SEMICOLON:
						i = r.fbt._("{previous items}; {following items}", [r.fbt._param("previous items", i), r.fbt._param("following items", e[a])], {
							hk: "4hs4xq"
						});
						break;
					default:
						i = r.fbt._("{previous items}, {following items}", [r.fbt._param("previous items", i), r.fbt._param("following items", e[a])], {
							hk: "2z8RMb"
						})
				}
				return function(e, t, n, s) {
					switch (n) {
						case o.AND:
							return r.fbt._("{list of items} and {last item }", [r.fbt._param("list of items", e), r.fbt._param("last item ", t)], {
								hk: "1ylan1"
							});
						case o.OR:
							return r.fbt._("{list of items} or {last item}", [r.fbt._param("list of items", e), r.fbt._param("last item", t)], {
								hk: "3q8AmB"
							});
						case o.NONE:
							switch (s) {
								case c.SEMICOLON:
									return r.fbt._("{previous item}; {last item}", [r.fbt._param("previous item", e), r.fbt._param("last item", t)], {
										hk: "1h77rJ"
									});
								default:
									return r.fbt._("{list of items}, {last item}", [r.fbt._param("list of items", e), r.fbt._param("last item", t)], {
										hk: "3Q0iaX"
									})
							}
							default:
								a(!1, "Invalid conjunction %s provided to intlList", n)
					}
				}(i, d, t || o.AND, n || c.COMMA)
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
				return f
			}));
			n("./src/lib/reCaptchaEnterprise/reCaptcha.css");
			var r = n("./src/config.ts"),
				s = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const a = e => "object" == typeof e && null !== e,
				o = () => "undefined" != typeof window && a(window) && a(window.grecaptcha) && a(window.grecaptcha.enterprise),
				c = () => o() ? window.grecaptcha.enterprise : void 0,
				d = e => `https://www.google.com/recaptcha/enterprise.js?render=${e}`,
				i = e => Object(s.a)(d(e), o),
				u = e => new Promise(t => e.ready(t));
			var l, p = n("./node_modules/ts-error/lib/cjs.js"),
				b = n.n(p);
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
			const h = new class {
				constructor() {
					var e = this;
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.a.reCaptchaEnterprise.siteKey,
						n = arguments.length > 1 ? arguments[1] : void 0;
					this.siteKey = t, this.isReady = !1, this.hasSiteKey = () => !!this.siteKey, this.hasClient = () => !!this.instance, this.setInstance = e => {
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
					}, this.loadScript = async function() {
						let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						if (!e.instance || t) {
							e.ensureSiteKey(), await i(e.siteKey);
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
				return d
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "j", (function() {
				return O
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts");
			const o = "BADGE__BADGE_APPLICATION_SUCCESS",
				c = "BADGE__BADGE_APPLICATION_FAILURE",
				d = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				i = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				u = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				l = "BADGE__USER_BADGES_FETCH_SUCCESS",
				p = "BADGE__USER_BADGES_FETCH_FAILURE",
				b = "BADGE__USER_BADGES_FETCH_PENDING",
				f = Object(r.a)(o),
				h = Object(r.a)(c),
				y = (Object(r.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(r.a)(d)),
				g = Object(r.a)(i),
				m = Object(r.a)(u),
				v = (Object(r.a)(l), Object(r.a)(p), Object(r.a)(b), e => {
					let {
						badgeIds: t,
						subredditId: n
					} = e;
					return async (e, r, o) => {
						let {
							apiContext: c
						} = o;
						const d = r(),
							i = d.user.account;
						if (i) {
							const r = (d.users.appliedBadges[i.id] || {})[n] || [],
								o = t.length ? t[0] : r[0],
								u = !!t.length;
							e(f({
								badgeIds: t,
								subredditId: n,
								userId: i.id
							}));
							const l = await Object(a.a)(c(), n, o, u);
							l.ok || (e(h({
								badgeIds: t,
								subredditId: n,
								error: l.error,
								previousBadgeIds: r,
								userId: i.id
							})), Object(s.a)(e, l.error))
						}
					}
				}),
				O = e => {
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
				return d
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "h", (function() {
				return f
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
			const d = "BLOCKED_REDDITORS_LIST__ADD",
				i = "BLOCKED_REDDITORS_LIST__REMOVE",
				u = "BLOCKED_REDDITORS_LIST__FAILED",
				l = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				b = Object(r.a)(d),
				f = Object(r.a)(i),
				h = Object(r.a)(u),
				y = Object(r.a)(l),
				g = Object(r.a)(p),
				m = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const s = t(),
						a = Object(c.a)(s);
					if (Object(c.b)(s) || a.timestamp && Date.now() - a.timestamp < 36e6) return;
					let d = !1,
						i = "";
					do {
						e(g());
						const t = {
								after: i,
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
									d = e, i = t || ""
								}
							} else d = !1
						} else {
							d = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(h({
								message: t
							}))
						}
					} while (d)
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
				return d
			})), n.d(t, "d", (function() {
				return i
			}));
			const r = "CATEGORY__LIST_PENDING",
				s = "CATEGORY__LIST_LOADED",
				a = "CATEGORY__LIST_FAILED",
				o = "CATEGORY__SUBREDDITS_PENDING",
				c = "CATEGORY__SUBREDDITS_LOADED",
				d = "CATEGORY__SUBREDDITS_FAILED",
				i = "CATEGORY__RANK_SET"
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
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/endpoints/chat/userSettings.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			var d = n("./src/reddit/models/Toast/index.ts"),
				i = n("./src/telemetry/index.ts"),
				u = n("./src/reddit/actions/chat/constants.ts");
			const l = Object(s.a)("USER_SETTINGS__FETCH_PENDING"),
				p = Object(s.a)("USER_SETTINGS__FETCH_FAILURE"),
				b = "USER_SETTINGS__UPDATE_SUCCESS",
				f = Object(s.a)(b),
				h = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					e(l());
					const s = await Object(o.b)(r());
					if (s.ok) {
						const t = {
							...s.body
						};
						e(f({
							invitePolicy: u.a[t.invite_policy]
						}))
					} else e(p(s.error))
				}, y = Object(s.a)("USER_SETTINGS__SAVE_PENDING"), g = Object(s.a)("USER_SETTINGS__SAVE_FAILURE"), m = e => Object.keys(u.a).find(t => u.a[t] === e), v = e => async (t, n, s) => {
					let {
						apiContext: l
					} = s;
					const p = n(),
						{
							invitePolicy: b
						} = e,
						h = m(b);
					if (h) {
						t(y());
						const e = m(p.user.chatSettings.invitePolicy),
							n = await Object(o.e)(h, l());
						if (Object(i.a)(((e, t) => n => ({
								source: "settings_privacy",
								action: "save",
								noun: "receive_chat_invites",
								setting: {
									value: e,
									oldValue: t
								},
								...Object(c.n)(n)
							}))(h, e)(p)), n.ok) {
							const e = u.a[h];
							t(f({
								invitePolicy: e
							})), t(Object(a.f)({
								kind: d.b.SuccessCommunity,
								text: r.fbt._("Changes saved", null, {
									hk: "4eTtdy"
								})
							}))
						} else t(g(n.error))
					}
				}, O = () => async (e, t, n) => {
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
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/helpers/trackers/commentList.ts");
			const a = "COMMENTLIST__MARKED_END",
				o = "COMMENTLIST__UNMARKED_END",
				c = Object(r.a)(a),
				d = Object(r.a)(o),
				i = (e, t) => async (n, r) => {
					const a = r();
					e in a.profileCommentsPage.fetchedTokens ? e in a.profileCommentsPage.commentIds ? n(d({
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
				return i
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return l
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
				d = n("./src/reddit/selectors/user.ts");
			const i = "FETCH_COOLDOWN_TIMER__PENDING",
				u = "FETCH_COOLDOWN_TIMER__SUCCESS",
				l = "FETCH_COOLDOWN_TIMER__FAILED",
				p = Object(r.a)(i),
				b = Object(r.a)(u),
				f = Object(r.a)(l),
				h = "SET__COOLDOWN_TIMER",
				y = Object(r.a)(h),
				g = () => async (e, t, n) => {
					let {
						gqlRealtime2Context: r
					} = n;
					const s = t(),
						a = Object(d.Q)(s),
						i = !!Object(c.b)(s),
						{
							expiresAt: u,
							api: {
								pending: l
							}
						} = s.cooldownTimer,
						h = u <= Date.now();
					if (!a || !r || !h || !i || l) return;
					e(p());
					const g = await o(r());
					if (g.ok && g.body) {
						const t = g.body.data.act.data.find(e => e.data.nextAvailablePixelTimestamp),
							n = (null == t ? void 0 : t.data.nextAvailablePixelTimestamp) || null;
						e(y({
							expiresAt: n
						})), e(b())
					} else e(f({
						error: null == g ? void 0 : g.error
					}))
				}
		},
		"./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "f", (function() {
				return w
			}));
			var r = n("./node_modules/@sentry/minimal/esm/index.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/redditGQL/operations/GetSubredditCountrySiteSettings.json"),
				c = n("./src/redditGQL/operations/UpdateSubredditCountrySiteSettings.json");
			const d = e => ({
				input: {
					subredditId: e.subredditId,
					countryCode: e.countryCode || "",
					languageCode: e.languageCode || ""
				}
			});
			var i = async (e, t) => Object(a.a)(e, {
				...c,
				variables: d(t)
			}), u = n("./node_modules/fbt/lib/FbtPublic.js"), l = n("./src/reddit/models/Toast/index.ts"), p = n("./node_modules/reselect/es/index.js"), b = n("./src/reddit/constants/experiments.ts"), f = n("./src/reddit/helpers/chooseVariant/index.ts"), h = n("./src/reddit/selectors/user.ts");
			const y = Object(p.a)(e => Object(f.c)(e, {
				experimentEligibilitySelector: h.Q,
				experimentName: b.ac
			}), e => e === b.ud);
			var g = n("./src/reddit/actions/toaster.ts");
			const m = "SUBREDDIT_COUNTRY_SITE__LOADED",
				v = "SUBREDDIT_COUNTRY_SITE__CHANGED",
				O = "SUBREDDIT_COUNTRY_SITE__UPDATE_SUCCESS",
				E = Object(s.a)(m),
				_ = Object(s.a)(O),
				I = Object(s.a)(v),
				S = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					var c;
					if (!e) return;
					const d = await (async (e, t) => Object(a.a)(e, {
							...o,
							variables: {
								subredditId: t
							}
						}))(s(), e),
						i = d.body;
					d && d.ok && i && t(E({
						subredditId: e,
						subredditCountrySite: null === (c = i.data) || void 0 === c ? void 0 : c.subredditInfoById.countrySiteSettings
					}))
				}, j = (e, t) => async (n, r, s) => {
					let {
						gqlContext: a
					} = s;
					if (!e) return;
					const o = await i(a(), {
						subredditId: e,
						countryCode: t.countryCode,
						languageCode: t.languageCode
					});
					if (!o.ok) return n(Object(g.f)({
						kind: l.b.Error,
						text: u.fbt._("Something went wrong", null, {
							hk: "2PnKbu"
						}),
						duration: 5e3
					}));
					const c = o.body;
					n(_({
						subredditId: e,
						subredditCountrySite: c.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
					}))
				}, w = (e, t) => async (n, s, a) => {
					let {
						gqlContext: o
					} = a;
					if (!e || !y(s())) return;
					const c = {
							subredditId: e,
							countryCode: "",
							languageCode: t
						},
						d = await i(o(), c);
					if (d.ok) {
						const t = d.body;
						n(_({
							subredditId: e,
							subredditCountrySite: t.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
						}))
					} else r.l(e => {
						e.setExtra("subredditCountryLanginfo", c), r.c(d.error)
					})
				}
		},
		"./src/reddit/actions/crosspostSubredditRec/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return u
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
			const d = Object(r.a)("CROSSPOST_RECOMMENDATIONS__SHOULD_TRY_TO_RENDER"),
				i = Object(r.a)("CROSSPOST_RECOMMENDATIONS__STOP_TRYING_TO_RENDER"),
				u = e => async (t, n) => {
					const r = n();
					if (!Object(a.b)(r)) return;
					const o = e.title,
						c = Object(a.d)(e),
						d = Object(a.c)(e);
					t(Object(s.j)(o, c, d, t => {
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
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				a = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/emoji.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return I
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "g", (function() {
				return P
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "q", (function() {
				return M
			})), n.d(t, "p", (function() {
				return F
			})), n.d(t, "l", (function() {
				return B
			})), n.d(t, "m", (function() {
				return q
			})), n.d(t, "j", (function() {
				return V
			})), n.d(t, "k", (function() {
				return W
			})), n.d(t, "b", (function() {
				return H
			})), n.d(t, "n", (function() {
				return $
			})), n.d(t, "e", (function() {
				return K
			})), n.d(t, "o", (function() {
				return Y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/forEach.js"),
				a = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/lib/uploadToS3/index.ts"),
				u = n("./src/reddit/constants/headers.ts");
			const l = async (e, t) => Object(c.a)(Object(d.a)(e, [u.a]), {
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
				b = n("./src/reddit/actions/imageUploads.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/helpers/getGenericUploadError.ts"),
				y = n("./src/reddit/helpers/getS3KeyFromUrl/index.ts"),
				g = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/reddit/models/Emoji/index.ts"),
				v = n("./src/reddit/models/Image/index.tsx"),
				O = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/emojis.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts");
			const I = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				S = Object(p.a)(I),
				j = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				w = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				T = Object(p.a)(j),
				D = Object(p.a)(w),
				A = "GET_ALL_EMOJIS_PENDING",
				P = "GET_ALL_EMOJIS_LOADED",
				C = "GET_ALL_EMOJIS_FAILED",
				R = Object(p.a)(A),
				N = Object(p.a)(P),
				k = Object(p.a)(C),
				x = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				L = Object(p.a)(x),
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
							l = Object(_.U)(a, {
								subredditId: n
							}).name;
						e(Object(b.k)(t));
						const p = t.file,
							f = await Object(g.h)(p),
							h = await (async (e, t, n, r) => Object(c.a)(Object(d.a)(e, [u.a]), {
								endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
								method: o.jb.POST,
								data: {
									filepath: n,
									mimetype: r
								}
							}))(s.apiContext(), l, p.name, f);
						let y = !1;
						if (h.ok) {
							const n = await (async (e, t, n) => Object(i.a)(n, t))(s.apiContext(), h.body.s3UploadLease, p);
							if (n.ok) {
								if (!r().imageUploads[t.id]) return Object(v.d)(t), !1;
								const s = decodeURIComponent(n.body.PostResponse.Location),
									a = h.body.websocketUrl,
									o = Object(v.n)(t, s, a);
								e(Object(b.j)(o)), y = !0
							} else {
								const r = Object(v.k)(t, n.error);
								e(Object(b.i)(r))
							}
						} else {
							const n = Object(v.k)(t, h.error);
							e(Object(b.i)(n))
						}
						return y
					}
				},
				G = (e, t) => async (n, r, s) => {
					const {
						imageData: a,
						subredditId: i,
						emojiName: l,
						settings: p
					} = e, h = Object(y.a)(a.url), g = r(), m = Object(_.U)(g, {
						subredditId: i
					}).name, O = await (async (e, t, n, r, s) => Object(c.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: o.jb.POST,
						data: {
							s3_key: n,
							name: r,
							mod_flair_only: s.modFlairOnly,
							post_flair_allowed: s.postFlairAllowed,
							user_flair_allowed: s.userFlairAllowed
						}
					}))(s.apiContext(), m, h, l, p);
					if (!O.ok) {
						const r = Object(v.k)(a, O.error);
						n(Object(b.i)(r)), n(Object(f.f)(U(e))), t && t.close()
					}
					return O.ok
				}, F = e => async (t, n, r) => {
					const {
						imageData: s,
						subredditId: a,
						emojiName: o,
						settings: c
					} = e;
					if (t(Object(b.k)(s)), !s.websocketUrl) return t(Object(f.f)({
						text: "Could not upload emoji"
					}));
					let d;
					const i = new WebSocket(s.websocketUrl);
					return i.onopen = async () => {
						d = await G(e, i)(t, n, r)
					}, i.onmessage = n => {
						const r = JSON.parse(n.data);
						if ("success" === r.type) {
							d = !0;
							const e = r.payload.emoji_url,
								n = Object(v.o)(s, e);
							t(Object(b.l)(n));
							const i = Object(m.e)(o, n.url, a, c);
							t(S(i)), t(B(a))
						} else {
							const n = Object(h.a)(o),
								r = Object(v.k)(s, n);
							t(Object(b.i)(r)), t(Object(f.f)(U(e)))
						}
						i.close()
					}, i.onerror = n => {
						d = !1;
						const r = Object(h.a)(o),
							a = Object(v.k)(s, r);
						t(Object(b.i)(a)), t(Object(f.f)(U(e))), i.close()
					}, d
				}, B = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const a = n();
					if (Object(E.a)(a, e)) return;
					const o = Object(_.U)(a, {
						subredditId: e
					}).name;
					t(R(e));
					const c = await l(s(), o);
					if (c.ok) {
						const n = c.body;
						t(N({
							subredditId: e,
							data: n
						}))
					} else t(k({
						subredditId: e,
						error: c.error
					}))
				}, q = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					n().emojis[e] || await t(B(e))
				}, V = (e, t) => async (n, s, a) => {
					let {
						apiContext: i
					} = a;
					const l = s(),
						p = Object(_.U)(l, {
							subredditId: t
						}).name,
						b = await (async (e, t, n) => Object(c.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${n}/emoji/${t}`,
							method: o.jb.DELETE,
							type: "json"
						}))(i(), e, p);
					if (b.ok) {
						n(T({
							emojiName: e,
							subredditId: t
						})), n(f.f({
							kind: O.b.SuccessCommunityGreen,
							text: r.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else n(D(b.error)), n(f.f({
						kind: O.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, W = (e, t) => async (n, s, a) => {
					let {
						apiContext: i
					} = a;
					const l = s(),
						p = Object(_.U)(l, {
							subredditId: e
						}).name;
					if ((await (async (e, t, n) => Object(c.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: o.jb.POST,
							data: {
								subreddit: t,
								enable: n
							}
						}))(i(), p, t)).ok) {
						n(L({
							subredditId: e,
							emojisEnabled: t
						}))
					} else n(f.f({
						kind: O.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, H = "EMOJI_CUSTOM_SIZE_UPDATED", Q = Object(p.a)(H), $ = (e, t) => async (n, s, a) => {
					let {
						apiContext: i
					} = a;
					const l = s(),
						p = Object(_.U)(l, {
							subredditId: e
						}).name;
					(await (async (e, t, n) => Object(c.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji_custom_size`,
						method: o.jb.POST,
						data: n
					}))(i(), p, t)).ok ? n(Q({
						subredditId: e,
						emojiCustomSize: t
					})) : n(f.f({
						kind: O.b.Error,
						text: r.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, K = "EMOJI_PERMISSIONS_UPDATED", z = Object(p.a)(K), Y = (e, t, n, s) => async (a, i, l) => {
					let {
						apiContext: p
					} = l;
					const b = i(),
						h = Object(_.U)(b, {
							subredditId: s
						}).name;
					(await (async (e, t, n, r) => Object(c.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${n}/emoji_permissions.json`,
						method: o.jb.POST,
						data: {
							name: t,
							post_flair_allowed: r.postFlairAllowed,
							user_flair_allowed: r.userFlairAllowed,
							mod_flair_only: r.modFlairOnly
						}
					}))(p(), e, h, n)).ok ? (a(z({
						emojiName: e,
						isSnoomoji: t,
						settings: n,
						subredditId: s
					})), a(f.f({
						kind: O.b.SuccessCommunityGreen,
						text: r.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : a(f.f({
						kind: O.b.Error,
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
				return l
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/loadWithRetries/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/StructuredStyles/index.ts"),
				i = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/selectors/subreddit.ts");
			const l = "STRUCTURED_STYLES__EXPORT_THEME_PENDING",
				p = "STRUCTURED_STYLES__EXPORT_THEME_LOADED",
				b = "STRUCTURED_STYLES__EXPORT_THEME_FAILED",
				f = Object(a.a)(l),
				h = Object(a.a)(p),
				y = Object(a.a)(b),
				g = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				m = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				v = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				O = e => async (t, a) => {
					t(f());
					const o = a(),
						d = Object(u.U)(o, {
							subredditId: e
						}).name,
						l = o.structuredStyles.models[e],
						p = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ExportTheme")]).then(n.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						b = await p(l, d);
					b.ok ? (t(h()), t(Object(c.f)({
						kind: i.b.SuccessMod,
						text: r.fbt._("Theme successfully exported", null, {
							hk: "24KHqI"
						})
					}))) : (t(y(b.error)), t(Object(c.f)({
						kind: i.b.Error,
						text: r.fbt._("Sorry, theme failed to export", null, {
							hk: "2MC4jC"
						})
					})))
				}, E = e => async (t, a) => {
					t(g());
					const u = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ImportTheme")]).then(n.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						l = await u(e);
					l.ok ? (t(m()), t(Object(c.f)({
						kind: i.b.SuccessMod,
						text: r.fbt._("Theme successfully imported", null, {
							hk: "42FErS"
						})
					})), 0 !== Object.keys(l.attributes).length && t(Object(o.d)(Object(d.j)(l.attributes)))) : (t(v(l.error)), t(Object(c.f)({
						kind: i.b.Error,
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
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
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
				return d
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "r", (function() {
				return O
			})), n.d(t, "s", (function() {
				return E
			})), n.d(t, "t", (function() {
				return _
			})), n.d(t, "u", (function() {
				return I
			})), n.d(t, "v", (function() {
				return S
			})), n.d(t, "w", (function() {
				return j
			})), n.d(t, "x", (function() {
				return w
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				a = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				o = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				c = "POLL_VOTE_SUCCESS",
				d = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				i = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				y = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				g = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				m = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				v = "GOVERNANCE__TRANSFER_FAILURE",
				O = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				E = "GOVERNANCE__TRANSFER_PENDING",
				_ = "GOVERNANCE__TRANSFER_SUCCESS",
				I = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				S = "GOVERNANCE__WALLETS_FETCH_PENDING",
				j = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				w = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = n("./src/reddit/models/Toast/index.ts");

			function o(e, t) {
				e(Object(r.f)({
					duration: 5e3,
					kind: a.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "h", (function() {
				return U
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/config.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/redditGQL/operations/PollVote.json"),
				b = n("./src/reddit/endpoints/governance/requester.ts");
			var f = n("./src/reddit/endpoints/governance/wallet.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/crypto/points.ts"),
				m = n("./src/reddit/actions/governance/constants.ts"),
				v = n("./src/reddit/actions/governance/errorToast.ts");
			const O = Object(s.a)(m.b),
				E = Object(s.a)(m.c),
				_ = Object(s.a)(m.e),
				I = (Object(s.a)(m.f), Object(s.a)(m.g), Object(s.a)(m.h)),
				S = Object(s.a)(m.i),
				j = Object(s.a)(m.j),
				w = Object(s.a)(m.k),
				T = Object(s.a)(m.q),
				D = Object(s.a)(m.r),
				A = Object(s.a)(m.s),
				P = Object(s.a)(m.t),
				C = Object(s.a)(m.u),
				R = Object(s.a)(m.v),
				N = Object(s.a)(m.w),
				k = Object(s.a)(m.x),
				x = (e, t) => async (n, r, s) => {
					let a, {
							apiContext: o,
							gqlContext: d
						} = s,
						f = r().polls.models[e];
					if (n(j({
							pollId: e
						})), (a = f.type === l.a.GA ? await ((e, t, n) => Object(u.a)(e, {
								...p,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(d(), e, t) : await
							function(e, t, n, r) {
								return Object(b.a)(e, {
									method: "put",
									endpoint: `${i.a.metaUrl}/polls/${t}/${n}/votes/me/${r}`
								})
							}(o(), f.subredditId, e, t)).ok) {
						if (f.type === l.a.GA) {
							const {
								options: e
							} = a.body.data.updatePostPollVoteState.poll;
							n(_({
								pollId: f.id,
								optionId: t,
								options: e
							}))
						} else n(w(a.body));
						const s = r();
						if ((f = s.polls.models[e]) && Object(l.d)(f)) {
							const {
								postId: e
							} = f, t = s.posts.models[e];
							t && t.voteState === y.a.notVoted && n(Object(c.kb)(e))
						}
					} else n(S({
						pollId: e,
						error: a.error || a.errors[0].message
					})), Object(v.a)(n, a.error || a.errors[0].messsage)
				}, L = (e, t) => async (n, s, c) => {
					let {
						apiContext: u
					} = c;
					var l;
					n(A());
					const p = s().transfers.communityPoints.contentId || void 0,
						f = await
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
					}(u(), {
						...e,
						contentId: p
					});
					f.ok ? (n(P({
						...f.body,
						subredditId: e.subredditId
					})), n(Object(d.f)({
						kind: h.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(a.a)(e.amount)), r.fbt._param("tokenName", (null === (l = Object(g.b)(s(), e.subredditId)) || void 0 === l ? void 0 : l.name) || ""), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(o.f)())) : (n(T({
						error: f.error
					})), Object(v.a)(n, f.error))
				}, U = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					t(R());
					const a = await Object(f.a)(s(), e);
					a.ok ? t(N(a.body)) : t(C({
						error: a.error
					}))
				}
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
				return d
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return p
			}));
			const r = "HARBERGER_TAX__BANNER_MANAGE_MODAL_OPENED",
				s = "HARBERGER_TAX__BANNER_PURCHASE_MODAL_OPENED",
				a = "HARBERGER_TAX__BANNER_CRYPTO_MANAGE_MODAL_OPENED",
				o = "HARBERGER_TAX__BANNER_CRYPTO_PURCHASE_MODAL_OPENED",
				c = "HARBERGER_TAX__BANNER_PURCHASE_FAILURE",
				d = "HARBERGER_TAX__BANNER_PURCHASE_PENDING",
				i = "HARBERGER_TAX__BANNER_PURCHASE_SUCCESS",
				u = "HARBERGER_TAX__BANNER_UPDATE_FAILURE",
				l = "HARBERGER_TAX__BANNER_UPDATE_PENDING",
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
			const r = "LINKED_POSTS__POSTS_LOADED",
				s = "LINKED_POSTS__POSTS_FAILED",
				a = "LINKED_POSTS__ELIGIBILITY_LOADED"
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
				return d
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "l", (function() {
				return f
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
				return O
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "A", (function() {
				return I
			})), n.d(t, "B", (function() {
				return S
			})), n.d(t, "z", (function() {
				return j
			})), n.d(t, "y", (function() {
				return w
			})), n.d(t, "v", (function() {
				return T
			})), n.d(t, "w", (function() {
				return D
			})), n.d(t, "x", (function() {
				return A
			})), n.d(t, "d", (function() {
				return P
			}));
			const r = "MULTIREDDIT__MORE_POSTS_FAILED",
				s = "MULTIREDDIT__MORE_POSTS_LOADED",
				a = "MULTIREDDIT__MORE_POSTS_PENDING",
				o = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				c = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				d = "MULTIREDDIT__CREATE_FAILURE",
				i = "MULTIREDDIT__CREATE_PENDING",
				u = "MULTIREDDIT__CREATE_SUCCESS",
				l = "MULTIREDDIT__DELETE_PENDING",
				p = "MULTIREDDIT__DELETE_SUCCESS",
				b = "MULTIREDDIT__DELETE_FAILURE",
				f = "MULTIREDDIT__DUPLICATE_PENDING",
				h = "MULTIREDDIT__DUPLICATE_SUCCESS",
				y = "MULTIREDDIT__DUPLICATE_FAILURE",
				g = "MULTIREDDIT__EDIT_FAILURE",
				m = "MULTIREDDIT__EDIT_PENDING",
				v = "MULTIREDDIT__EDIT_SUCCESS",
				O = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				E = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				_ = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				I = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				S = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				j = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				w = 10,
				T = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				D = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				A = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var P;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(P || (P = {}))
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
				return d
			}));
			const r = "PUSH__GET_PREFERENCES_PENDING",
				s = "PUSH__GET_PREFERENCES_LOADED",
				a = "PUSH__GET_PREFERENCES_FAILED",
				o = "PUSH__SET_PREFERENCES_PENDING",
				c = "PUSH__SET_PREFERENCES_LOADED",
				d = "PUSH__SET_PREFERENCES_FAILED"
		},
		"./src/reddit/actions/nps.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return O
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/config.ts"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts");
			var i = n("./node_modules/@r/frames/compiled.js"),
				u = n("./node_modules/lodash/debounce.js"),
				l = n.n(u),
				p = function(e) {
					document.body.appendChild(function(e) {
						let t;
						const n = l()((function() {
							t && t.contentWindow && i.postMessage(t.contentWindow, "resize.asknicely")
						}), 500);
						return function() {
							return t = function() {
								const t = document.createElement("iframe");
								return t.src = e, t.setAttribute("allowTransparency", "true"), t.style.display = "block", t.style.width = "100%", t.style.height = "1px", t.style.background = "transparent", t.style.border = "none", t
							}(), i.listen("embedjail"), i.receiveMessage(t.contentWindow, "open.embedjail", (function(e) {
								var r;
								r = e.detail, t.style.width = r.dimensions.width, t.style.height = r.dimensions.height, t.style.display = "block", t.style.position = "fixed", t.style.bottom = 0, t.style.zIndex = 2147483647, window.addEventListener("resize", n)
							})), i.receiveMessage(t.contentWindow, "close.embedjail", (function(e) {
								t.parentElement.removeChild(t), i.stopListening("asknicely"), window.removeEventListener("resize", n), t = void 0
							})), window.addEventListener("message", (function(e) {
								"https://live.asknice.ly" !== e.origin && "https://reddit.asknice.ly" !== e.origin || e.data && t && t.contentWindow && i.postMessage(t.contentWindow, e.data + ".asknicely")
							})), t
						}
					}(e)())
				};
			const b = "NPS__URL_PENDING",
				f = "NPS__URL_LOADED",
				h = "NPS__URL_FAILED",
				y = Object(r.a)(b),
				g = Object(r.a)(f),
				m = Object(r.a)(h);
			let v = !1;
			const O = () => async (e, t, n) => {
				const r = t();
				if (r.nps.pending) return;
				if (v) return;
				e(y());
				const i = r.platform.currentPage && r.platform.currentPage.queryParams.feature || "",
					u = !!r.user.account,
					l = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [d.a]), {
						data: {
							feature: t,
							app_name: "web2x"
						},
						endpoint: `${n?s.a.oauthUrl:s.a.apiUrl}/api/jail/asknicely${n?"":".json"}`,
						method: a.jb.GET,
						traceRequestName: "get_nps_survey"
					}))(n.apiContext(), i, u);
				if (l.ok) {
					const t = l.body;
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
				return E
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "e", (function() {
				return w
			}));
			var r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/reddit/actions/pages/subreddit.ts"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/pageTitle/index.ts"),
				c = n("./src/config.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/platform.ts"),
				u = n("./src/reddit/endpoints/me/index.ts"),
				l = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				p = n("./src/reddit/actions/pages/appeal/constants.ts");
			const b = `${c.a.redditHelpUrl}/en/categories/rules-reporting/account-and-community-restrictions/my-account-was-suspended-or-locked`,
				f = Object(d.a)(p.b),
				h = Object(d.a)(p.a);
			var y = n("./src/reddit/actions/redditEmbed.ts"),
				g = n("./src/reddit/actions/users.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				v = n("./src/lib/makeListingKey/index.ts"),
				O = n("./src/lib/matchRoute/index.ts");
			const E = e => async t => {
				await t(Object(y.c)(e, !0))
			}, _ = () => async e => {
				await e((() => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					const s = t(),
						a = await Object(u.a)(r());
					if (a.ok && a.body)
						if (a.body.account)
							if (s.user.account && s.user.account.isFPR) {
								const e = b;
								window.location.href = e
							} else e(f(a.body));
					else Object(l.a)(e, s);
					else e(h(a.error))
				})())
			}, I = (e, t, n) => async (o, c, d) => {
				let {
					routes: i
				} = d;
				const u = c(),
					l = (t || u.platform.currentPage).routeMatch.match,
					p = Object(O.a)(l.url, i);
				if (!p) return;
				const b = e.metaKey || e.ctrlKey || 1 === e.button;
				if (p.route && p.route.meta && (p.route.meta.name === a.Nb.INDEX || p.route.meta.name === a.Nb.MULTIREDDIT || p.route.meta.name === a.Nb.SUBREDDIT)) b ? window.open(l.url) : n ? o(Object(r.b)(l.url)) : await o(p.route.action(l, !0));
				else if (p.match && p.match.params && p.match.params.subredditName) {
					const {
						subredditName: e
					} = p.match.params, t = `/r/${e}/`;
					if (b) window.open(t);
					else if (n) o(Object(r.b)(t));
					else {
						const n = Object(v.a)(e, a.W.HOT);
						await o(Object(r.b)(t)), o(Object(s.subredditDataRequested)(n, e, {}))
					}
				}
			}, S = () => async (e, t) => {
				const n = t();
				e(i.m({
					title: o.b()
				})), Object(m.Q)(n) || await e(g.t())
			}, j = () => async e => e(i.m({
				title: o.b()
			})), w = e => async (t, r) => {
				const s = r();
				t(i.m({
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
				return j
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "f", (function() {
				return R
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/difference.js"),
				a = n.n(s),
				o = n("./src/telemetry/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/redditGQL/operations/GetSubredditChatSettings.json"),
				p = n("./src/lib/makeGqlRequest/index.ts");
			var b = (e, t) => Object(p.a)(e, {
					...l,
					variables: t
				}),
				f = n("./src/redditGQL/operations/UpdateSubredditChatSettings.json");
			var h = (e, t) => Object(p.a)(e, {
					...f,
					variables: t
				}),
				y = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./src/telemetry/models/Event.ts");
			var m = n("./src/reddit/models/ChatSettingsPage/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/chat.ts"),
				E = n("./src/reddit/selectors/chatSettingsPage.ts");
			const _ = "FETCH_CHAT_SETTINGS__LOADED",
				I = "FETCH_CHAT_SETTINGS__FAILED",
				S = "FETCH_CHAT_SETTINGS__PENDING",
				j = "UPDATE_CHAT_SETTINGS__LOADED",
				w = Object(d.a)(_),
				T = Object(d.a)(I),
				D = Object(d.a)(S),
				A = Object(d.a)(j),
				P = e => async (t, n) => {
					const r = {
						subredditId: e
					};
					return !!Object(E.b)(n(), r) || (t(D(r)), !1)
				}, C = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const a = {
						subredditId: e
					};
					if (await t(P(e))) return;
					let o = null;
					const d = await b(s(), a);
					if (d.ok) {
						const t = d.body || {},
							r = t.data && t.data.subredditInfoById,
							s = r && r.chatSettings,
							c = !Object(O.a)(n(), a),
							i = Object(m.c)(s, e, c);
						o = {
							...a,
							chatSettings: i
						}
					}
					if (o) t(w(o));
					else {
						const n = d.error || {
							type: c.I.UNKNOWN_ERROR
						};
						t(T({
							...a,
							error: n
						})), i.c.withScope(t => {
							t.setExtra("info", {
								subredditId: e,
								responseBody: d.body,
								responseOk: d.ok
							}), i.c.captureMessage("Missing subreddit chat settings!")
						})
					}
				}, R = (e, t, n) => async (s, o, d) => {
					let {
						gqlContext: i
					} = d;
					if (await s(P(e))) return [];
					let l, p = !1;
					const b = a()(n, t),
						f = Object(m.b)(b);
					if (f && f.length) {
						const t = {
								subredditId: e,
								subredditChatSettings: f
							},
							n = await h(i(), {
								input: t
							});
						if (n.ok) {
							const e = (n.body || {}).data.updateSubredditChatSettings;
							p = !!e && e.ok
						} else l = n && n.error || {
							type: c.I.UNKNOWN_ERROR
						}
					}
					return p ? (s(A({
						subredditId: e,
						chatSettings: n
					})), s(k(t, b)), n) : (l && s(T({
						subredditId: e,
						error: l
					})), s(A({
						subredditId: e,
						chatSettings: t
					})), s(Object(u.f)({
						duration: u.a,
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
						subreddit: Object(y.gb)(e),
						setting: {
							oldValue: t,
							value: n
						},
						...Object(y.n)(e)
					})
				}, k = (e, t) => async (n, r) => {
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
		"./src/reddit/actions/pages/profileModSettings.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "PROFILE_MOD_SETTINGS_LOADED", (function() {
				return u
			})), n.d(t, "profileModSettingsRequested", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/preferences.ts"),
				a = n("./src/reddit/actions/profile/index.ts"),
				o = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = n("./src/reddit/helpers/trackers/screenview.ts"),
				d = n("./src/reddit/models/User/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const u = "PAGE__PROFILE_MOD_SETTINGS_LOADED",
				l = Object(r.a)(u),
				p = e => async (t, n) => {
					const r = [t(s.A()), t(Object(a.d)(e.params.profileName))];
					await Promise.all(r);
					const u = Object(i.k)(n());
					u ? (await t(Object(a.b)(Object(d.e)(u))), t(l()), Object(c.p)(n(), !0)) : Object(o.a)(t, n())
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
				return u
			})), n.d(t, "b", (function() {
				return l
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
				d = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/selectors/userDataRequest.ts");
			const u = "USER_DATA_REQUEST_PAGE_LOADING",
				l = "USER_DATA_REQUEST_PAGE_LOADED",
				p = "USER_DATA_REQUEST_PAGE_FAILED",
				b = Object(r.a)(u),
				f = Object(r.a)(l),
				h = Object(r.a)(p),
				y = () => async (e, t, n) => {
					let {
						apiContext: r,
						gqlContext: u
					} = n;
					const l = t(),
						p = Object(d.k)(l),
						y = Object(i.b)(l);
					if (p && y.success) return;
					e(b());
					const g = await Object(s.a)(r());
					if (!g.ok || !g.body) return void e(h(g.error));
					if (!g.body.account) return void Object(c.a)(e, l);
					const m = await (e => Object(a.a)(e, {
						...o
					}))(u());
					if (!m.ok) return void e(h());
					const v = g.body,
						O = m.body;
					e(f({
						account: v.account,
						userDataExportEligibility: O.data.identity.userDataExportEligibility.isUserEligibleForDataExport
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
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return N
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "c", (function() {
				return M
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "d", (function() {
				return F
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/uuid/v4.js"),
				a = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/formatApiError/index.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/actions/upload.ts"),
				l = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/helpers/correlationIdTracker.ts"),
				y = n("./src/reddit/helpers/imagePreview/index.ts"),
				g = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/reddit/models/Upload/index.ts"),
				v = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/telemetry/index.ts");
			const E = e => ({
				...v.n(e),
				screen: v.Y(e),
				profile: v.Q(e),
				subreddit: v.gb(e)
			});
			var _ = n("./src/reddit/helpers/trackers/postComposer.ts"),
				I = n("./src/reddit/models/Gold/Powerups/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				w = n("./src/reddit/selectors/gold/powerups/index.ts"),
				T = n("./src/reddit/selectors/postCreations.ts"),
				D = n("./src/reddit/actions/postCreation/constants.ts"),
				A = n("./src/reddit/actions/postCreation/general.ts");
			const P = Object(d.a)(D.u),
				C = Object(d.a)(D.v),
				R = Object(d.a)(D.t),
				N = e => async (t, n) => {
					t(P());
					const r = e.map(e => {
						let {
							url: n,
							uploadKey: r
						} = e;
						const s = Object(g.b)(Object(g.d)(n), "poster.png");
						return t(U(s, r))
					});
					await Promise.all(r);
					const s = n().uploads,
						a = e.map(e => {
							let {
								uploadKey: t
							} = e;
							return s[t]
						}).find(e => e.status !== m.a.SUCCESS);
					t(a ? R(a.error) : C())
				}, k = (e, t) => ({
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
			const x = "RTE",
				L = "GALLERY",
				U = (e, t, n, s) => async (a, c, d) => {
					let {
						apiContext: i
					} = d;
					const l = Object(T.h)(c()),
						S = Date.now();
					let j = null,
						D = !1,
						A = !1,
						P = !1;
					const C = e => {
						if (!P && n && D) {
							P = !0;
							const r = c(),
								s = Date.now() - S,
								a = Object(h.c)(h.a.PostComposer);
							A ? (async e => {
								let {
									state: t,
									uploadKey: n,
									assetId: r,
									isCanceled: s,
									fileSource: a,
									uploadDuration: o,
									correlationId: c
								} = e;
								const d = t.uploads[n],
									i = s || d.status === m.a.CANCELED,
									{
										file: u,
										url: l,
										metadata: p,
										error: b
									} = d,
									f = p.mimetype || u.type,
									h = f.startsWith("video/"),
									y = d.status === m.a.SUCCESS;
								let g = "";
								b ? g = JSON.stringify(b) : i && (g = "canceled");
								const _ = {
									width: p.width,
									height: p.height,
									duration: p.videoDuration && Math.round(1e3 * p.videoDuration)
								};
								Object(O.a)({
									source: "post_composer",
									action: "upload",
									correlationId: c,
									noun: h ? "video" : "image",
									...E(t),
									actionInfo: {
										...v.d(t),
										success: y,
										...g ? {
											reason: g
										} : {}
									},
									media: {
										mimetype: f,
										uploadDuration: o,
										source: a,
										fileName: u.name,
										size: u.size,
										type: h ? "video" : "image",
										...r ? {
											id: r
										} : {},
										...l ? {
											url: l
										} : {},
										..._
									}
								})
							})({
								state: r,
								uploadKey: t,
								assetId: j,
								isCanceled: e,
								fileSource: n,
								uploadDuration: s,
								correlationId: a
							}) : _.D(r, t)
						}
					};
					return await a(Object(u.l)(e, t, async d => {
						D = !0, Object(u.k)(d.id, () => {
							C(!0)
						});
						const {
							error: h,
							metadata: m
						} = await async function(e, t, n) {
							const s = n && n.allowedPostTypes,
								a = n && n.name,
								c = await Object(g.h)(t) || t.type,
								d = Object(g.c)(t) || void 0;
							if (!d) return k("UNSUPPORTED_BROWSER");
							const i = {
								localUrl: d,
								mimetype: c
							};
							if (!c || !Object(g.j)(c)) return {
								error: {
									type: o.T
								}
							};
							if (c.startsWith("image/")) {
								if (s && !s.images) {
									const e = r.fbt._("Images are not allowed in r/{subredditName}", [r.fbt._param("subredditName", a)], {
										hk: "3C2E7Q"
									});
									return k(o.T, e)
								}
								if ("image/gif" === c) {
									if (t.size > o.Z) return k(o.L)
								} else if (t.size > o.bb) return k(o.R);
								const e = await Object(y.a)(d);
								i.width = e.width, i.height = e.height
							} else if (c.startsWith("video/")) {
								const c = !(null == n || !n.id) && Object(w.o)(e, {
										subredditId: n.id,
										benefit: I.a.HdVideo
									}),
									l = c ? 2 * o.fb : o.fb;
								if (t.size > l) return k(o.pc);
								let p;
								try {
									p = await Object(g.i)(d, !0)
								} catch (u) {
									return k(o.T)
								}
								if (s) {
									const {
										videos: e,
										images: t
									} = s;
									if (t && !e && p.duration > o.gb) {
										const e = r.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [r.fbt._param("subredditName", a)], {
											hk: "46ULiz"
										});
										return k(o.T, e)
									}
									if (!t && !e) {
										const e = r.fbt._("Videos are not allowed in r/{subredditName}", [r.fbt._param("subredditName", a)], {
											hk: "4uTUZb"
										});
										return k(o.T, e)
									}
								}
								const b = c ? 2 * o.eb : o.eb;
								if (p.duration > b) {
									const e = r.fbt._("Video is too long. Maximum video length is {duration} minutes.", [r.fbt._param("duration", (b / 60).toString())], {
										hk: "20nB6Q"
									});
									return k(o.T, e)
								}
								if (p.duration < o.mb) {
									const e = r.fbt._("Video is too short. Minimum video length is {duration} seconds.", [r.fbt._param("duration", o.mb.toString())], {
										hk: "49PSW8"
									});
									return k(o.T, e)
								}
								if (0 === p.height || 0 === p.width) {
									const e = r.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return k(o.T, e)
								}
								if (p.height < o.nb || p.width < o.ob) {
									const e = r.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [r.fbt._param("min_video_width", o.ob.toString()), r.fbt._param("min_video_height", o.nb.toString())], {
										hk: "2HSUGl"
									});
									return k(o.T, e)
								}
								if (t.size / p.duration < o.lb) {
									const e = r.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [r.fbt._param("min_bitrate", (o.lb / o.U).toString())], {
										hk: "1ehgDE"
									});
									return k(o.T, e)
								}
								i.height = p.height, i.width = p.width, i.videoDuration = p.duration, i.videoFirstFrameUrl = p.firstFrame.dataUrl
							}
							return {
								metadata: i
							}
						}(c(), e, l);
						if (h || !m) return {
							error: h
						};
						a(Object(u.m)({
							key: t,
							metadata: {
								fileSource: n,
								...m
							}
						})), A = !0, s && s();
						const v = e.name,
							O = await (async (e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: o.jb.POST,
								data: {
									filepath: t,
									mimetype: n
								}
							}))(i(), v, m.mimetype);
						return O.ok ? (j = O.body.asset.asset_id, {
							uploadLease: O.body.args
						}) : {
							error: O.error || void 0
						}
					}, !0)), C(!1), c().uploads[t] || null
				}, M = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const a = n().uploads[e];
					a && !Object(m.c)(a) && await t(U(a.file, a.key, a.metadata.fileSource, void 0))
				}, G = (e, t, n) => async (s, o) => {
					const d = e.map((e, r) => new Promise(async r => {
							const o = Object(m.d)(n, a()().slice(-6));
							await s(U(e, o, t, () => r({
								uploadKey: o,
								isValid: !0
							}))), r({
								uploadKey: o,
								isValid: !1
							})
						})),
						u = await Promise.all(d),
						l = u.map(e => e.uploadKey);
					return s(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (n, s) => {
							const {
								uploads: a
							} = s(), o = e.map(e => a[e]).filter(e => e.status === m.a.FAILED && !e.metadata.mimetype).map(e => e.error), d = o.length > t ? t - 1 : o.length, u = o.length - d;
							o.slice(0, d).forEach(e => n(Object(i.f)({
								duration: i.a,
								kind: j.b.Error,
								text: Object(c.a)(e)
							}))), u > 0 && n(Object(i.f)({
								duration: i.a,
								kind: j.b.Error,
								text: r.fbt._({
									"*": "Couldn't add {number} more files",
									_1: "Couldn't add 1 more file"
								}, [r.fbt._plural(u, "number")], {
									hk: "2fQwvl"
								})
							}))
						}
					}(l)), u.filter(e => e.isValid).map(e => e.uploadKey)
				}, F = (e, t) => async (n, s) => {
					const a = s(),
						o = Object(T.W)(a),
						{
							items: c
						} = o,
						d = !c.length && 1 === e.length,
						p = Object(T.N)(a) && !d;
					let b = !1,
						f = e;
					if (p) {
						if (Object(S.x)(o)) return void n(Object(i.f)({
							kind: j.b.Error,
							text: r.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						f.some(e => Object(g.m)(e.type)) && n(Object(i.f)({
							duration: i.a,
							kind: j.b.Error,
							text: r.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), f = f.filter(e => Object(g.l)(e.type));
						const e = Math.max(0, l.b - c.length);
						f.length > e && (n(Object(i.f)({
							kind: j.b.Error,
							text: r.fbt._("You have hit the limit of {images_limit} images", [r.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), f = f.slice(0, e))
					} else f = f.slice(0, 1), b = !0, n(Object(u.j)(L, !0));
					const h = await n(G(f, t, L));
					if (!h.length) return;
					const y = h.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						m = 0 === c.length;
					n(Object(A.d)({
						...o,
						items: b ? y : [...c, ...y],
						selectedKey: m ? h[0] : h[h.length - 1]
					}))
				}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return q
			})), n.d(t, "a", (function() {
				return K
			})), n.d(t, "b", (function() {
				return X
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				c = n("./src/reddit/actions/governance/index.ts"),
				d = n("./src/reddit/actions/pages/subreddit.ts"),
				i = n("./src/reddit/actions/postDraft.ts"),
				u = n("./src/reddit/actions/scheduledPosts/index.ts"),
				l = n("./src/reddit/actions/urlRequested.ts"),
				p = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				b = n("./src/config.ts"),
				f = n("./src/lib/convertToCamelCase/index.ts"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				y = n("./src/reddit/endpoints/post/create.ts");
			var g = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				m = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				v = n("./src/reddit/featureFlags/index.ts"),
				O = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				E = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				_ = n("./src/reddit/helpers/trackers/postComposer.ts"),
				I = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				S = n("./src/reddit/models/Poll/index.ts"),
				j = n("./src/reddit/models/PostCreationForm/index.ts"),
				w = n("./src/reddit/models/User/index.ts"),
				T = n("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				D = n("./src/reddit/selectors/postCreations.ts"),
				A = n("./src/reddit/selectors/postDraft.ts"),
				P = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				R = n("./src/reddit/models/Post/index.ts"),
				N = n("./src/reddit/models/ScheduledPost/index.ts"),
				k = n("./src/reddit/actions/postCreation/constants.ts"),
				x = n("./src/reddit/actions/postCreation/general.ts"),
				L = n("./src/reddit/actions/postCreation/mediaUpload.ts");
			const U = Object(s.a)(k.w),
				M = Object(s.a)(k.P),
				G = Object(s.a)(k.o),
				F = Object(s.a)(k.y),
				B = Object(s.a)(k.db),
				q = Object(s.a)(k.J),
				V = Object(s.a)(k.a),
				W = Object(s.a)(k.F),
				H = e => `/r/${e}/about/${N.s}`,
				Q = (e, t) => {
					const n = e || {
							duration: r.B,
							options: []
						},
						{
							govType: s,
							newSubreddit: a,
							newTopMod: o
						} = Object(D.u)(t),
						c = {
							...n
						};
					return s && (c.type = s), c.type === S.a.ReplaceTopMod ? (c.params = {
						userName: o
					}, c.options = S.f[S.a.ReplaceTopMod]()) : c.type === S.a.Spinoff ? (c.params = {
						subreddit: a
					}, c.options = S.f[S.a.Spinoff](a)) : c.options = c.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), c
				},
				$ = e => {
					const t = e.uploads,
						n = Object(D.W)(e),
						s = Object(D.a)(e),
						a = Object(D.gb)(e);
					if (s === r.Wb.POST) return p.a.getPendingThumbnailUploads(a, t);
					if (s === r.Wb.MEDIA && n && n.items.length) {
						const {
							video: e
						} = n.items[0];
						if (e && e.thumbnail && !t[j.n]) return [{
							...e.thumbnail,
							uploadKey: j.n
						}]
					}
				},
				K = (e, t) => async (n, s, a) => {
					let {
						apiContext: o
					} = a, c = s();
					const {
						pending: d
					} = c.creations.api.post.submit, u = Object(A.g)(c);
					if (d || u) return;
					n(W(e)), c = s();
					const l = Object(D.a)(c),
						p = v.d.rteVideoPoster(c),
						b = $(c),
						f = l === r.Wb.MEDIA;
					b && (p || f) && (await n(L.f(b)), $(s())) || (e === j.r.Draft ? await n(Object(i.r)(t.draftId)) : e === j.r.ScheduledPost && Object(P.r)(c) ? await n(z(t)) : e === j.r.ScheduledPost ? await n(Y(t)) : await n(X(t)))
				}, z = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const o = n(),
						c = Object(D.db)(o),
						d = Object(D.eb)(o, e),
						i = Object(D.h)(o),
						p = Object(P.r)(o);
					if (!(d && i.id && c && Object(E.f)(p))) return;
					const b = i.id,
						f = Object(P.a)(o, {
							subredditId: b,
							scheduledPostId: p
						});
					if (f && Object(a.a)(Object(I.r)(f)(o)), t(U(d)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(D.x)(n()))) return;
					const {
						isPoll: h,
						polls: y
					} = Object(D.u)(o), v = Q(y, o), O = {
						...Object(g.e)({
							poll: h ? v : void 0,
							submission: d,
							schedule: c,
							subredditId: i.id,
							scheduledPostId: p
						})
					}, _ = await Object(m.a)(s(), O);
					if (_.ok) return t(Object(u.e)({
						subredditId: i.id
					})), void t(Object(l.a)(H(i.name), !1));
					const S = _.error;
					t(G(S))
				}, Y = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const o = n(),
						c = Object(D.db)(o),
						d = Object(D.eb)(o, e),
						i = Object(D.h)(o),
						p = Object(P.b)(o);
					if (!d || !i.id || !c) return;
					if (t(U(d)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(D.x)(n()))) return;
					const {
						isPoll: b,
						polls: f
					} = Object(D.u)(o), h = Q(f, o), y = {
						duration: h.duration,
						options: h.options
					}, m = {
						...Object(g.d)({
							poll: b ? y : void 0,
							submission: d,
							schedule: c,
							subredditId: i.id
						}),
						creationToken: p
					}, v = await Object(g.a)(s(), m);
					if (v.ok) {
						t(Object(u.e)({
							subredditId: i.id
						}));
						const e = v.body.data.createScheduledPost.scheduledPost;
						return e && Object(a.a)(Object(I.o)(Object(O.d)(e))(o)), void t(Object(l.a)(H(i.name), !1))
					}
					const E = v.error;
					t(G(E))
				}, X = e => async (t, n, s) => {
					let {
						apiContext: a
					} = s;
					const i = n(),
						u = Object(D.eb)(i, e),
						{
							isPoll: p,
							polls: g
						} = Object(D.u)(i),
						m = Q(g, i);
					if (!u) return;
					if (t(U(u)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(D.x)(n()))) return;
					let O;
					const E = p && v.d.spPolls(i);
					if ((O = E ? await
							function(e, t, n) {
								const s = t.destSubreddit.id;
								return Object(h.a)(e, {
									method: r.jb.POST,
									endpoint: `${b.a.metaUrl}/polls/${s}`,
									type: "json",
									data: {
										poll: n,
										subredditId: s,
										...Object(f.a)(Object(y.d)(t))
									}
								}).then(async e => {
									const n = e.ok ? {
											...e,
											body: {
												json: {
													data: e.body
												}
											}
										} : e,
										r = await Object(y.e)(n, t);
									if (r.ok) {
										return {
											body: {
												...r.body,
												poll: e.body.poll
											},
											ok: !0,
											status: e.status
										}
									}
									return {
										error: r.body,
										ok: !1,
										status: e.status
									}
								})
							}(a(), u, m) : p ? await Object(y.b)(a(), {
								...u,
								kind: j.p.POLL,
								poll: m
							}) : u.kind === j.p.GALLERY ? await Object(y.a)(a(), u) : await Object(y.c)(a(), u)).ok) {
						const e = Object(C.k)(i),
							n = O.body;
						t(M({
							draftId: u.draftId,
							response: n
						})), E && t(Object(c.c)({
							poll: n.poll
						}));
						const r = Object(T.b)(i);
						u.kind !== j.p.LINK && u.kind !== j.p.RICH_TEXT && u.kind !== j.p.MARKDOWN || p || !r || t(Object(o.c)());
						const s = (n.path || `/user/${Object(w.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(d.subredditInvalidateListing)(u.destSubreddit.name)), t(Object(l.a)(s, !1))
					} else {
						if (p) {
							const e = O.error;
							t(F(e))
						}
						const e = O.error;
						e.type === r.I.BAD_CAPTCHA_ERROR ? t(V()) : e.type === r.I.VALIDATION_ERROR ? t(B(e)) : e.type === r.I.SUBMIT_VALIDATION_ERROR ? t(q(e)) : t(G(e))
					}
					const I = Object(x.o)(u.kind),
						S = O.ok && O.body && O.body.id && Object(R.u)(O.body.id),
						A = n();
					_.B(A, I, S, e.correlationId)
				}
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
				return d
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "h", (function() {
				return g
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				o = n("./src/reddit/endpoints/governance/products/badges.ts");
			const c = "PRODUCT__BADGE_PURCHASE_OPENED",
				d = "PRODUCT__BADGE_PURCHASE_SUCCESS",
				i = "PRODUCT__BADGE_PURCHASE_FAILURE",
				u = "PRODUCT__BADGE_PURCHASE_PENDING",
				l = "PRODUCT__FETCH_SUCCESS",
				p = "PRODUCT__FETCH_FAILURE",
				b = "PRODUCT__FETCH_PENDING",
				f = (Object(r.a)(c), Object(r.a)(d)),
				h = Object(r.a)(i),
				y = Object(r.a)(u),
				g = (Object(r.a)(l), Object(r.a)(p), Object(r.a)(b), e => {
					let {
						productId: t
					} = e;
					return async (e, n, r) => {
						let {
							apiContext: c
						} = r;
						const d = n(),
							i = d.products.models[t],
							u = d.user.account,
							l = !!d.products.api.purchase.pending[t];
						if (i && i.price && !l) {
							e(y({
								productId: t
							}));
							const n = await Object(o.c)(c(), {
								price: i.price,
								products: [{
									productId: t,
									quantity: "1"
								}],
								subredditId: i.subredditId
							});
							let r;
							if (n.ok && u && (r = await Object(a.c)(c(), i.subredditId, u.id)), n.ok) {
								if (r && r.ok) {
									const {
										badges: t,
										userOwnedBadges: s
									} = r.body;
									e(f({
										product: i,
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
				return D
			})), n.d(t, "a", (function() {
				return P
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
			var d = n("./src/lib/reCaptchaEnterprise/index.ts"),
				i = n("./src/lib/sentry/index.ts");

			function u(e) {
				return t => async (n, r, s) => {
					const a = r();
					if (e(a)) return t(n, r, s)
				}
			}
			var l = n("./node_modules/lodash/every.js"),
				p = n.n(l),
				b = n("./src/reddit/constants/experiments.ts"),
				f = n("./node_modules/os-browserify/browser.js"),
				h = n.n(f);
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
			var O = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/redditGQL/operations/VerifyRecaptchaToken.json");
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
				j = n("./src/reddit/selectors/meta.ts");
			const w = e => _.d.reCaptchaEnterprise(e) && !Object(j.d)(e),
				T = e => !!Object(S.c)(e, {
					experimentEligibilitySelector: Object(I.d)(Object(I.b)(...a.d)),
					experimentName: b.Ye
				}),
				D = Object(r.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				A = () => u(e => p()([w, T, e => e.tracking.reCaptchaEnterprise.load === r.a.New], t => t(e)))(async e => {
					e(D.requested());
					try {
						await d.b.loadScript(), e(D.succeeded())
					} catch (t) {
						throw e(D.failed()), t
					}
				}),
				P = Object(r.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				C = e => u(e => p()([w, T, e => e.tracking.reCaptchaEnterprise.load === r.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === r.a.New], t => t(e)))(async t => {
					t(P.requested());
					try {
						const n = await d.b.execute(e);
						return t(P.succeeded({
							token: n
						})), n
					} catch (n) {
						throw t(P.failed()), n
					}
				}),
				R = Object(r.b)("SEND_RECAPTCHA_TOKEN"),
				N = e => u(e => p()([w, T, e => e.tracking.reCaptchaEnterprise.send === r.a.New && e.tracking.reCaptchaEnterprise.execute === r.a.Succeeded && e.tracking.reCaptchaEnterprise.load === r.a.Succeeded], t => t(e)))(async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					t(R.requested());
					try {
						await (async (e, t) => {
							const n = await Object(O.a)(e, {
								...E,
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
				k = (e, t) => Object(I.g)(t) ? (e => `STAGING__${e}`)(e) : e,
				x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.a.PageLoad;
					return u(e => p()([w, T, e => e.tracking.reCaptchaEnterprise.load === r.a.New], t => t(e)))(async (t, n) => {
						const r = n();
						try {
							await t(A());
							const n = await t(C({
								action: k(e, r)
							}));
							n && await t(N(n))
						} catch (a) {
							if (a instanceof GraphQLRequestError_GraphQLRequestError && "object" == typeof a.response.error && null !== a.response.error && a.response.error.type === s.i) return;
							i.c.withScope(e => {
								Object(i.a)(e, {
									serverLogging: !1
								}), i.c.captureException(a)
							})
						}
					})
				}
		},
		"./src/reddit/actions/reactionAwards/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			const r = "AVAILABLE_REACTION_AWARDS_PENDING",
				s = "AVAILABLE_REACTION_AWARDS_LOADED",
				a = "AVAILABLE_REACTION_AWARDS_FAILED",
				o = "GIVE_REACTION_AWARD_PENDING",
				c = "GIVE_REACTION_AWARD_SUCCESS",
				d = "GIVE_REACTION_AWARD_FAILURE"
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
				return d
			})), n.d(t, "g", (function() {
				return i
			}));
			const r = "REPORT__PENDING",
				s = "REPORT__LOADED",
				a = "REPORT__FAILED",
				o = "REPORT_FLOW__TARGET_SET",
				c = "REPORT_FLOW__OPENED_FROM_MODAL_PAGE",
				d = "REPORT_FLOW__OPEN_CATEGORY",
				i = "REPORT_FLOW__USER_IS_MOD_SET"
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
				return i
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts");
			const i = "SITEWIDE_RULES_LOADED",
				u = "LIVESTREAMING_RULES_LOADED",
				l = Object(s.a)(i),
				p = Object(s.a)(u),
				b = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					if (!t().user) return;
					const s = await (e => Object(o.a)(Object(c.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: a.jb.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							n = h(t.sitewide_rules);
						e(l(n))
					}
				}, f = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					if (!t().user) return;
					const s = await (e => Object(o.a)(Object(c.a)(e, [d.a]), {
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
		"./src/reddit/actions/scheduledPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return s
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "m", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "s", (function() {
				return S
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "w", (function() {
				return w
			})), n.d(t, "t", (function() {
				return T
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = "SCHEDULED_POSTS_REQUESTED",
				a = "SCHEDULED_POSTS_LOADED",
				o = "STANDALONE_SCHEDULED_POSTS_LOADED",
				c = "RECURRING_SCHEDULED_POSTS_LOADED",
				d = "SCHEDULED_POSTS_FAILED",
				i = "SCHEDULED_POST_CREATION_SUCCEEDED",
				u = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				l = "SCHEDULED_POST_MUTATE_REQUESTED",
				p = "SCHEDULED_POST_MUTATE_FAILED",
				b = "STANDALONE_POST_MUTATE_SUCCESS",
				f = "RECURRING_POST_MUTATE_SUCCESS",
				h = "RECURRING_POST__EDIT_MODAL_LOAD",
				y = "RECURRING_POST__EDIT_LOAD",
				g = "STANDALONE_POST__EDIT_LOAD",
				m = "SCHEDULED_POST__DELETE_SUCCESS",
				v = () => r.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				O = () => r.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				E = () => r.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				_ = () => r.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				I = () => r.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				S = () => r.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				j = () => r.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				w = () => r.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				T = () => r.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return v
			})), n.d(t, "a", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/telemetry/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/scheduledPosts/index.ts"),
				d = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				l = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				p = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				b = n("./src/reddit/models/ScheduledPost/index.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/routes/postCreation/index.ts"),
				y = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const g = Object(o.a)(d.n),
				m = Object(o.a)(d.b),
				v = (e, t) => async (n, r, a) => {
					const o = Object(y.a)(r(), {
						scheduledPostId: t,
						subredditId: e
					});
					o && (await n(Object(s.b)(Object(h.c)(o.subreddit.name, o.collectionId))), n((Object(b.q)(o) ? m : g)(o)))
				}, O = (e, t) => {
					Object(b.q)(t) ? e(Object(c.d)({
						scheduledPost: t
					})) : e(Object(c.h)({
						scheduledPost: t
					}))
				}, E = (e, t, n) => async (s, o, h) => {
					let {
						gqlContext: g
					} = h;
					s(Object(c.g)());
					const m = Object(y.a)(o(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (m && Object(b.q)(m) && Object(a.a)(Object(p.u)()(o(), m)), !m) return void s(Object(c.f)({
						message: r.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(n).length) return void O(s, m);
					const v = await Object(u.a)(g(), {
							...n,
							id: t
						}),
						_ = v.body;
					if (!(v.ok && _ && _.data && _.data.updateScheduledPost && _.data.updateScheduledPost.ok && _.data.updateScheduledPost.scheduledPost)) return s(Object(c.f)({
						message: v.error && v.error.fields && v.error.fields.length && v.error.fields[0].msg || r.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void s(Object(i.f)(Object(i.e)(d.t(), f.b.Error, d.s(), E(e, t, n))));
					s(Object(i.f)(Object(i.e)(d.w(), f.b.SuccessCommunity))), O(s, Object(l.d)(_.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return m
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return R
			}));
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				o = n("./src/reddit/actions/scheduledPosts/edit.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				i = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				u = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				l = n("./src/reddit/models/ScheduledPost/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				f = n("./src/telemetry/index.ts");
			const h = 25,
				y = 1e4,
				g = Object(s.a)(a.g),
				m = Object(s.a)(a.k),
				v = Object(s.a)(a.j),
				O = Object(s.a)(a.o),
				E = Object(s.a)(a.d),
				_ = Object(s.a)(a.f),
				I = Object(s.a)(a.m),
				S = Object(s.a)(a.a),
				j = Object(s.a)(a.c),
				w = Object(s.a)(a.e),
				T = Object(s.a)(a.h),
				D = (e, t) => {
					e(w()), e(Object(c.f)(Object(c.e)(a.r(), p.b.Error, a.s(), A(t))))
				},
				A = e => {
					let {
						subredditId: t,
						includeStandalone: n = {
							standaloneFirst: h
						},
						includeRecurring: r = {
							recurringFirst: y
						},
						...s
					} = e;
					return async (e, a, o) => {
						let {
							gqlContext: c
						} = o;
						if (Object(b.h)(a(), {
								subredditId: t
							})) return;
						e(g());
						const u = {
								subredditId: t,
								includeRecurring: r,
								includeStandalone: n,
								...s
							},
							l = await Object(d.b)(c(), u);
						Object(d.f)(l, u) ? C(e, Object(i.e)(l.body.data), u) : D(e, u)
					}
				},
				P = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const a = n();
					if (!Object(b.h)(a, {
							subredditId: e
						})) return t(A({
						subredditId: e
					}));
					if (!Object(b.g)(a, {
							subredditId: e,
							type: l.g.standalonePosts
						})) return;
					const o = Object(b.c)(a, {
						subredditId: e,
						type: l.g.standalonePosts
					});
					if (!o) return;
					t(g());
					const c = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: h,
								standaloneAfter: o
							}
						},
						u = await Object(d.b)(s(), c);
					u.ok ? C(t, Object(i.e)(u.body.data), c) : t(w())
				}, C = (e, t, n) => {
					Object(i.b)(t) ? e(_(t)) : Object(i.a)(t) ? e(S(t)) : Object(i.c)(t) ? e(I(t)) : D(e, n)
				}, R = (e, t) => async (n, s, a) => {
					const c = {},
						d = s();
					switch (e) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isContestMode":
						case "isPostAsMetaMod":
						case "isSpoiler":
							c[e] = !t[e];
							break;
						case "isSticky":
							const n = !!t.sticky && "NONE" !== t.sticky;
							c.sticky = n ? "NONE" : "SECOND";
							break;
						default:
							return Object(r.a)(e)
					}
					Object(f.a)(Object(u.t)(e, c[e], Object(l.q)(t))(d)), n(Object(o.a)(t.subreddit.id, t.id, c))
				}
		},
		"./src/reddit/actions/search/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return y
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./node_modules/uuid/v4.js"),
				a = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				c = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/extractQueryParams/index.ts"));
			var d = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				p = n("./src/reddit/models/Search/index.ts");
			var b = (e, t) => {
				const n = {
					withAds: 1,
					ad: Object(c.a)(window.location.href).get("ad"),
					subplacement: t
				};
				return Object(d.a)(Object(i.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/trending_searches_v1.json`,
					method: o.jb.GET,
					data: n
				})
			};
			const f = "PAGE__TRENDING_SEARCHES_LOADED",
				h = Object(r.a)(f),
				y = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const o = await b(s(), e);
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
											post: s ? Object(l.a)(s) : null,
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
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
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
				d = n("./src/redditGQL/operations/FetchSubredditStreamingModSettings.json"),
				i = n("./src/redditGQL/operations/UpdateSubredditStreamingModSettings.json"),
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts");
			const p = Object(s.a)(a.a),
				b = "STREAMING_MOD_SETTINGS__UPDATE_PENDING",
				f = "STREAMING_MOD_SETTINGS__UPDATE_LOADED",
				h = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				y = Object(s.a)(b),
				g = Object(s.a)(f),
				m = Object(s.a)(h),
				v = e => async (t, n, s) => {
					let {
						gqlContext: a
					} = s;
					const i = Object(l.U)(n(), {
						subredditId: e
					});
					if (void 0 === i) {
						const e = r.fbt._("Invalid subreddit", null, {
								hk: "2iUXvs"
							}),
							n = Object(o.e)(e, u.b.Error);
						return await t(Object(o.f)({
							...n,
							duration: o.a
						})), {
							reason: e
						}
					}
					const b = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: {
							subredditId: t
						}
					}))(a(), e);
					if (!b.ok) {
						const e = r.fbt._("Could not fetch settings for {subredditName}", [r.fbt._param("subredditName", i.name)], {
								hk: "2G8rnU"
							}),
							n = Object(o.e)(e, u.b.Error);
						return await t(Object(o.f)({
							...n,
							duration: o.a
						})), {
							reason: e
						}
					}
					const f = b.body.data.subredditInfoById;
					return await t(p({
						subredditId: e,
						modSettings: f.liveStreamingInfo
					})), {}
				}, O = (e, t) => async (n, r, s) => {
					let {
						gqlContext: a
					} = s;
					await n(E(t, e, a())), n(v(t))
				}, E = (e, t, n) => async (n, s, a) => {
					let {
						gqlContext: d
					} = a;
					n(y({
						subredditId: e
					}));
					const l = await ((e, t) => Object(c.a)(e, {
						...i,
						variables: t
					}))(d(), {
						input: {
							subredditId: e,
							liveStreamingModeratorSettings: t
						}
					});
					if (!l.ok || !l.body.data.updateSubredditLiveStreamingModeratorSettings.ok) {
						const t = l.error && l.error.fields ? l.error.fields[0].msg : r.fbt._("Could not update community broadcasting settings", null, {
								hk: "3Uw7zu"
							}),
							s = Object(o.e)(t, u.b.Error);
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
						b = Object(o.e)(p, u.b.SuccessCommunity);
					await n(Object(o.f)({
						...b,
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
					await r(E(e, {
						whitelistedRedditors: c
					}, o())), await r(v(e))
				}, I = (e, t, n) => async (r, s, a) => {
					let {
						gqlContext: o
					} = a;
					const c = n.whitelistedUsers.filter(e => e.name !== t).map(e => ({
						redditorName: e.name
					}));
					await r(E(e, {
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
				var d;
				const i = await Object(s.a)(o(), {
					subredditIds: [e],
					count: t
				});
				if (!i.ok) return;
				const u = i.body;
				(null === (d = u.data.subredditRecommendations.recommendations) || void 0 === d ? void 0 : d.length) && n(c({
					subredditId: e,
					relatedSubreddits: u.data.subredditRecommendations.recommendations.reduce((e, t) => {
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
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditsCarousel.json");
			const o = (e, t, n, r, o) => async (c, d, u) => {
				let {
					gqlContext: l
				} = u;
				var b, f;
				if (d().subreddits.carousel.pending) return;
				const h = await ((e, t) => Object(s.a)(e, {
					...a,
					variables: t
				}))(l(), {
					subredditIds: e,
					hasNames: t || !1,
					subredditNames: n || [],
					hasPostIds: r || !1,
					postIds: o || []
				});
				if (!h.ok) return;
				const y = h.body;
				y.data && y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"] && c(i(null === (b = y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"]) || void 0 === b ? void 0 : b.reduce((e, n) => ((null == n ? void 0 : n.id) && (e[t ? n.name.toLowerCase() : n.id] = n), e), {}))), (null === (f = y.data) || void 0 === f ? void 0 : f.postsInfoByIds) && c(p(y.data.postsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[null == t ? void 0 : t.id] = t), e), {})))
			}, c = "SUBREDDITS_CAROUSEL__LOADED", d = "SUBREDDITS_CAROUSEL__PENDING", i = Object(r.a)(c), u = (Object(r.a)(d), "POST_CAROUSEL__LOADED"), l = "POST_CAROUSEL__PENDING", p = Object(r.a)(u);
			Object(r.a)(l)
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
		"./src/reddit/actions/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return P
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "i", (function() {
				return B
			}));
			var r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/postCreation/submit.ts"),
				i = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/ModWelcomeTooltip/index.tsx"),
				l = n("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				p = n("./src/reddit/constants/experiments.ts"),
				b = n("./src/reddit/constants/modals.ts"),
				f = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				y = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
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
			var v = n("./src/lib/makeGqlRequest/index.ts"),
				O = n("./src/redditGQL/operations/ValidateCreateSubreddit.json");
			var E = n("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				I = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				S = n("./src/reddit/selectors/meta.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				D = n("./src/telemetry/index.ts"),
				A = n("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const P = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				C = "SUBREDDIT__CREATE_PENDING",
				R = "SUBREDDIT__CREATE_SUCCEEDED",
				N = "SUBREDDIT__CREATE_FAILED",
				k = "SUBREDDIT__CREATE_CLEARED",
				x = Object(a.a)(C),
				L = Object(a.a)(R),
				U = Object(a.a)(N),
				M = Object(a.a)(k),
				G = Object(a.a)(P),
				F = e => async (t, n, a) => {
					let {
						apiContext: v
					} = a;
					var O;
					const P = n(),
						{
							name: C,
							type: R,
							crosspostId: N
						} = e;
					if (Object(w.j)(P)) return;
					t(x({
						subredditName: C
					}));
					const k = await ((e, t) => Object(f.a)(Object(h.a)(e, [y.a]), {
						endpoint: Object(g.a)(`${e.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: s.jb.POST,
						data: m(t)
					}))(v(), e);
					if (k.ok) {
						const n = k.body,
							a = n.fullname;
						Object(D.a)(Object(_.d)(R, e, a)(P)), t(L({
							subredditName: C
						}));
						const f = await Object(I.b)(P);
						if (N) {
							const e = Object(j.G)(P, {
								postId: N
							});
							t(Object(o.h)(e.title)), t(Object(o.g)({
								submissionType: s.Wb.CROSSPOST
							})), await t(Object(d.b)({
								destSubreddit: {
									...n,
									isProfile: !1
								},
								sourcePostId: N,
								postFieldValidationPending: Promise.resolve()
							})), Object(l.b)(N)
						}
						await t(Object(r.b)(`${n.path}`)), f ? f === p.Ae.NewModule && t(Object(i.h)({
							tooltipId: u.MOD_WELCOME_TOOLTIP_ID
						})) : (t(Object(c.h)(b.a.POST_FLOW_UPSELL_MODAL_ID)), Object(D.a)(Object(_.g)()(P))), Object(E.b)(E.a.SubredditCreation), t(Object(A.f)(a, null !== (O = Object(T.bb)(P)) && void 0 !== O ? O : Object(S.i)(P)))
					} else k.error && Object(D.a)(Object(_.h)(k.error.type, C)(P)), t(U({
						subredditName: C,
						error: k.error
					}))
				}, B = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const a = n(),
						o = {
							name: e
						},
						c = await ((e, t) => Object(v.a)(e, {
							...O,
							variables: t
						}))(s(), {
							input: o
						});
					let d = null;
					if (c.ok) {
						d = c.body.data.validateCreateSubredditInput.fieldErrors
					}
					if (d) {
						const n = {
							fields: [{
								field: d[0].field,
								msg: d[0].message
							}],
							type: d[0].code
						};
						t(U({
							subredditName: e,
							error: n
						})), n && Object(D.a)(Object(_.h)(n.type, e)(a))
					} else await t(M())
				}
		},
		"./src/reddit/actions/subredditCrosspostable.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
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
				d = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const u = "SUBREDDIT_CROSSPOSTABLE__PENDING",
				l = "SUBREDDIT_CROSSPOSTABLE__LOADED",
				p = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				b = (Object(r.a)(u), Object(r.a)(l)),
				f = Object(r.a)(p),
				h = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					await e(s.f());
					const {
						api: u,
						ids: l
					} = t().subreddits.crosspostable;
					if (u.pending || Object.keys(l).length) return;
					const p = await ((e, t) => Object(o.a)(Object(c.a)(e, [d.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: a.jb.GET
					}))(r(), {
						sr_detail: !1
					});
					if (p.ok) {
						const n = t(),
							r = p.body && p.body.length ? p.body.map(e => Object(i.F)(n, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
						e(b({
							subredditIds: r
						}))
					} else e(f({
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
				return d
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "d", (function() {
				return f
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/preferences.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/redditGQL/operations/SubredditTopContent.json"),
				c = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const d = "SUBREDDIT_TOP_CONTENT__PENDING",
				i = "SUBREDDIT_TOP_CONTENT__LOADED",
				u = "SUBREDDIT_TOP_CONTENT__FAILED",
				l = Object(r.a)(d),
				p = Object(r.a)(i),
				b = Object(r.a)(u),
				f = e => async (t, n, r) => {
					const d = e.toLowerCase(),
						i = n(),
						{
							api: u,
							topContent: f
						} = i.subreddits;
					if (u.topContent.pending[d] || f[d]) return;
					t(l({
						subredditName: d
					})), t(Object(s.A)());
					const h = await ((e, t) => Object(a.a)(e, {
						...o,
						variables: t
					}))(r.gqlContext(), {
						subredditName: d
					});
					if (h.ok) {
						const e = h.body.data.subreddit;
						if (e) {
							const n = Object(c.c)(e);
							n && t(p({
								...n,
								subredditName: d
							}))
						}
					} else t(b({
						subredditName: d,
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
		"./src/reddit/actions/upload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "l", (function() {
				return A
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "j", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/get.js"),
				s = n.n(r),
				a = n("./node_modules/uuid/v4.js"),
				o = n.n(a),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/lib/uploadToS3/index.ts"),
				i = n("./src/reddit/models/Upload/index.ts");
			const u = "UPLOAD_PENDING",
				l = "UPLOAD_UPLOADING",
				p = "UPLOAD_METADATA_CHANGED",
				b = "UPLOAD_PROGRESS",
				f = "UPLOAD_SUCCESS",
				h = "UPLOAD_FAILED",
				y = "UPLOAD_CANCELED",
				g = "UPLOAD_REMOVED",
				m = Object(c.a)(u),
				v = Object(c.a)(l),
				O = Object(c.a)(p),
				E = Object(c.a)(b),
				_ = Object(c.a)(f),
				I = Object(c.a)(h),
				S = Object(c.a)(y),
				j = Object(c.a)(g),
				w = new Map,
				T = (e, t) => {
					const n = w.get(e) || [];
					n.push(t), w.set(e, n)
				},
				D = (e, t) => {
					const n = w.get(e);
					n && n.forEach(n => n(e, t)), w.delete(e)
				},
				A = function(e, t, n) {
					let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (a, c, u) => {
						let {
							apiContext: l
						} = u;
						const p = t;
						if (c().uploads[p] && Object(i.c)(c().uploads[p])) return;
						const b = o()(),
							f = () => {
								const e = c().uploads[p];
								return !e || e.id !== b || e.status === i.a.CANCELED
							};
						a(m({
							key: p,
							id: b,
							file: e
						}));
						const {
							uploadLease: h,
							error: y
						} = await n(c().uploads[p]);
						if (f()) return;
						if (y || !h) return void a(I({
							key: p,
							error: y
						}));
						let g;
						T(b, () => {
							g && g.abort()
						}), a(v({
							key: p
						}));
						const O = await Object(d.a)(e, h, e => (g = e, r && e.on("progress", e => {
							if (!f() && "upload" === e.direction) {
								const t = {
									percent: e.percent,
									total: e.total,
									uploaded: e.loaded
								};
								a(E({
									key: p,
									progress: t
								}))
							}
						}), e));
						if (g = null, !f())
							if (O.ok) {
								const e = decodeURIComponent(O.body.PostResponse.Location);
								a(_({
									key: p,
									url: e
								}))
							} else {
								const e = s()(O, "body.Error.Message.0"),
									t = {
										type: "ERROR",
										...e ? {
											fields: [{
												field: "0",
												msg: e
											}]
										} : {}
									};
								a(I({
									key: p,
									error: t
								}))
							}
					}
				},
				P = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (n, r) => {
						const s = r().uploads[e];
						s && (D(s.id, t), n(t ? j({
							key: e
						}) : S({
							key: e
						})))
					}
				},
				C = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (n, r) => {
						Object.keys(r().uploads).forEach(r => {
							r.startsWith(e) && n(P(r, t))
						})
					}
				}
		},
		"./src/reddit/actions/upvotePrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/config.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const u = "upvote_prompt";
			var l = n("./src/reddit/selectors/upvotePrompt.ts"),
				p = n("./src/telemetry/index.ts");
			const b = "INCREMENT_SEEN_COUNT_PER_SESS",
				f = (e, t, n) => async (a, o) => {
					const b = o(),
						f = Object(d.z)(),
						m = Date.now(),
						v = f && m - f < 18e4,
						O = Object(l.c)(b, {
							postId: e
						}),
						E = b.upvotePromptCountPerSess,
						_ = (() => {
							const e = Object(d.y)();
							if (!e) return [];
							const t = Date.now();
							return e.filter(e => t - e < 864e5)
						})();
					if (!e || !O || v || E >= 4 || _.length >= 1) return;
					const I = y(b, t);
					if (!I) return;
					a(Object(c.f)({
						text: I,
						buttonText: r.fbt._("UPVOTE POST", null, {
							hk: "1u7UnZ"
						}),
						customIconAsset: `${s.a.assetPath}/img/snoo-upvote.png`,
						duration: l.a,
						buttonAction: h(e),
						onClose: () => Object(p.a)((e => ({
							source: u,
							action: "click",
							noun: "close",
							...Object(i.n)(e)
						}))(b))
					}));
					const S = [..._, Date.now()].slice(Math.max(_.length + 1 - 1, 0));
					Object(p.a)((e => ({
						source: u,
						action: "view",
						noun: u,
						...Object(i.n)(e)
					}))(b)), Object(d.Db)(), Object(d.Cb)(S), a(g()), n && n()
				}, h = e => async (t, n) => {
					Object(p.a)((e => ({
						source: u,
						action: "click",
						noun: "upvote",
						...Object(i.n)(e)
					}))(n())), Object(l.c)(n(), {
						postId: e
					}) && t(Object(o.kb)(e))
				}, y = (e, t) => {
					return t ? r.fbt._("If you enjoyed that post, upvote it so that more redditors will see it too.", null, {
						hk: "1Y6B4I"
					}) : r.fbt._("If you enjoyed this post, upvote it so that more redditors will see it too.", null, {
						hk: "HR9Ye"
					})
				}, g = Object(a.a)(b)
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "g", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/blockedRedditors.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/accounts/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				i = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				u = n("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				p = "USER_BLOCK__LOADED",
				b = "USER_BLOCK__FAILED",
				f = Object(s.a)(l),
				h = Object(s.a)(p),
				y = Object(s.a)(b),
				g = e => async (t, n, s) => {
					let {
						apiContext: u
					} = s;
					const l = n();
					if (l.blockUser.api.pending[e]) return;
					t(f({
						username: e
					}));
					const p = await Object(c.a)(u(), e),
						b = `error-block-${e}`;
					if (p.ok) p.body.name && t(h(p.body)), p.body.id && t(Object(a.f)(p.body.id)), t(o.g(b)), t(o.f({
						kind: d.b.SuccessCommunity,
						text: r.fbt._("{username} is now blocked", [r.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
								type: p.error ? p.error.type : "Unknown error",
								username: e
							},
							s = Object(i.e)(l) && "REBLOCK_RATE_LIMIT" === p.body.reason;
						t(y(n)), t(s ? o.f({
							id: b,
							kind: d.b.Error,
							text: r.fbt._("You can't block u/{username} for 24 hours after unblocking them", [r.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: g(e)
						}) : o.f({
							id: b,
							kind: d.b.Error,
							text: r.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: g(e)
						}))
					}
				}, m = "USER_UNBLOCK__PENDING", v = "USER_UNBLOCK__SUCCESS", O = "USER_UNBLOCK__FAILED", E = Object(s.a)(m), _ = Object(s.a)(v), I = Object(s.a)(O), S = e => async (t, n, s) => {
					let {
						apiContext: i
					} = s;
					const l = n(),
						p = Object(u.k)(l),
						b = p ? p.id : void 0,
						f = l.user.blocked.data.filter(t => t.name === e)[0];
					b && (t(E({
						name: e
					})), (await Object(c.c)(i(), b, e)).ok ? (t(_({
						name: e
					})), f && f.id && t(Object(a.h)(f.id)), t(o.f({
						kind: d.b.SuccessCommunity,
						text: r.fbt._("{username} is now unblocked", [r.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(o.f({
						kind: d.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(I({
						name: e
					}))))
				}
		},
		"./src/reddit/actions/userWhitelist.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "h", (function() {
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/endpoints/accounts/index.ts"),
				c = n("./src/reddit/models/Toast/index.ts");
			const d = "USER_WHITELIST__PENDING",
				i = "USER_WHITELIST__SUCCESS",
				u = "USER_WHITELIST__FAILED",
				l = Object(s.a)(d),
				p = Object(s.a)(i),
				b = Object(s.a)(u),
				f = e => async (t, n, s) => {
					let {
						apiContext: d
					} = s;
					t(l());
					const i = await Object(o.e)(d(), e);
					i.ok ? i.body.name && (t(p(i.body)), t(a.f({
						kind: c.b.SuccessCommunity,
						text: r.fbt._("Changes saved", null, {
							hk: "3cOmlv"
						})
					}))) : (t(b()), t(a.f({
						kind: c.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}, h = "USER_UNWHITELIST__PENDING", y = "USER_UNWHITELIST__SUCCESS", g = "USER_UNWHITELIST__FAILED", m = Object(s.a)(h), v = Object(s.a)(y), O = Object(s.a)(g), E = e => async (t, n, s) => {
					let {
						apiContext: d
					} = s;
					t(m({
						name: e
					})), (await Object(o.d)(d(), e)).ok ? (t(v({
						name: e
					})), t(a.f({
						kind: c.b.SuccessCommunity,
						text: r.fbt._("Changes saved", null, {
							hk: "2o6UcC"
						})
					}))) : (t(O({
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
				return d
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return f
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/endpoints/usernameAvailable/index.ts");
			! function(e) {
				e[e.Available = 0] = "Available", e[e.Error = 1] = "Error", e[e.Pending = 2] = "Pending", e[e.Unavailable = 3] = "Unavailable"
			}(r || (r = {}));
			const o = "USERNAME_AVAILABLE__AVAILABLE",
				c = "USERNAME_AVAILABLE__FAILURE",
				d = "USERNAME_AVAILABLE__PENDING",
				i = "USERNAME_AVAILABLE__UNAVAILABLE",
				u = Object(s.a)(o),
				l = Object(s.a)(c),
				p = Object(s.a)(d),
				b = Object(s.a)(i),
				f = e => {
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
							n.ok ? n.body ? e(u({
								username: t
							})) : e(b({
								username: t
							})) : e(l({
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
				d = n.n(c);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: n,
					crosspost: r,
					forceShowNSFW: c,
					isMeta: i,
					post: u,
					redditStyle: l,
					removeLink: p,
					templatePlaceholderImage: b,
					thumbnailContainerClassName: f,
					url: h,
					usePreview: y
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(d.a.thumbnailContainer, t)
				}, s.a.createElement(o.a, {
					className: Object(a.a)(d.a.thumbnail, n),
					containerClassName: f,
					crosspost: r,
					forceShowNSFW: c,
					isMeta: i,
					post: u,
					redditStyle: l,
					removeLink: p,
					templatePlaceholderImage: b,
					url: p ? void 0 : h,
					usePreview: y
				}))
			}
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, n) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
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
		"./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3n88GuUHAnxPu6a--3e0sz",
				item: "_1TJuQGHgWvq2fnkVcPN7d0"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/index.m.less": function(e, t, n) {
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
				paddingBottom: "_2C3hDQLC8D1ZRSBAx93g1c",
				multiPlusButton: "_3mvXSuBIpYAdAsBJSB-1G5",
				multiPlusIcon: "_2T11xMsmkdwP6G_mY6eUBW",
				pin: "_2FVCfsIPxXtl6S-c69sXO4",
				disabled: "_371yhrlWAj7dxOsk1PWqG4",
				selector: "h-jI8r2f9ozTNqu_2TBeY"
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
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.tsx"),
				b = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				f = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/selectors/platform.ts"),
				y = n("./src/reddit/components/ModWelcomeTooltip/index.m.less"),
				g = n.n(y);
			const m = Object(u.a)(p.a),
				v = "ModProgressModule--ModWelcomeTooltip";
			t.default = Object(d.a)(e => {
				const t = Object(o.e)(h.d),
					n = v,
					d = Object(o.d)(),
					u = e => {
						e.stopPropagation(), d(Object(i.h)({
							tooltipId: n
						}))
					};
				return Object(s.useEffect)(() => {
					e.isOpen ? setTimeout(() => Object(b.a)(), 500) : setTimeout(() => Object(b.b)(), 500)
				}, [d, e.isOpen]), t ? a.a.createElement(m, {
					className: g.a.Tooltip,
					isOpen: e.isOpen,
					targetPosition: ["left", "top"],
					tooltipPosition: ["right", "top"],
					tooltipId: n,
					componentWrapper: t => a.a.createElement("div", {
						className: Object(c.a)(g.a.Overlay, {
							[g.a.isOverlayOpen]: e.isOpen
						}),
						onClick: u
					}, a.a.createElement("div", {
						className: Object(c.a)(g.a.DropdownPadding, {
							[g.a.isOverlayOpen]: e.isOpen
						}),
						onClick: u
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
						color: Object(f.a)(e).linkText
					},
					href: "https://www.reddit.com/r/ModCertification101/",
					rel: "noopener noreferrer",
					target: "_blank"
				}, r.fbt._("Mod Certification Program", null, {
					hk: "1FTpvR"
				})), "."), a.a.createElement(l.t, {
					className: g.a.Button,
					onClick: u
				}, r.fbt._("Let's go", null, {
					hk: "4hWwxv"
				})))) : null
			})
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = 20,
				s = 180
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
				mNightmode: "TiWmxUzfBQADxToVGHQeM",
				nsfwSection: "_1f4QVsU6jdEkvigYTcqIG7",
				listItemButton: "_1jKZytiaP074XAKQIdEzzq",
				chevron: "_19DndzbKSqGxpzJ7gycTJL",
				triggerItem: "_4V8jUxy7iuElvae9SRoVI"
			}
		},
		"./src/reddit/components/SearchDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return fe
			})), n.d(t, "a", (function() {
				return he
			})), n.d(t, "d", (function() {
				return ye
			})), n.d(t, "c", (function() {
				return ve
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = e => e.endsWith("/") ? e : `${e}/`,
				l = n("./src/lib/makeSearchKey/index.ts"),
				p = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				b = n.n(p),
				f = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				y = n("./src/reddit/helpers/clickSourceData/index.ts"),
				g = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/models/Search/index.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/helpers/trackers/searchResults.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				I = n("./src/reddit/selectors/telemetry.ts"),
				S = n("./src/reddit/components/SearchDropdown/index.m.less"),
				j = n.n(S);
			const w = Object(o.a)(f.b);

			function T(e) {
				let {
					activeTooltipId: t,
					className: n,
					focusedItem: o,
					nightmode: p,
					recentSearch: f,
					searchOriginPage: S,
					indexOfItem: T,
					toggleTooltip: D,
					onClearSearchQuery: A,
					onRemoveRecentSearch: P,
					onUpdateSearchQuery: C,
					onSendSearchClickRecentEvent: R,
					onCloseDropdown: N
				} = e;
				const k = Object(_.a)(),
					{
						nsfwSessionSetting: x,
						refreshNsfwSessionSettingExpiryTime: L
					} = Object(h.b)(),
					U = Object(a.e)(O.kb);
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: f.searchQuery,
						rawQuery: f.rawQuery || f.searchQuery,
						searchQuery: f.searchQuery,
						structureType: I.c.Recent
					};
					k(Object(E.x)(E.a.RECENT, e, T, T, f))
				}, []);
				const M = e => e.subredditOrProfileRestrictedName ? `${e.subredditOrProfileRestrictedName} ${e.searchQuery}` : e.searchQuery,
					{
						url: G,
						qs: F
					} = Object(g.a)({
						includeNsfwResults: U && x,
						multireddit: null,
						searchItem: f,
						searchOptions: {
							source: l.a.Recent
						},
						subreddit: null
					}),
					B = M(f);
				let q;
				o && (q = M(o));
				return s.a.createElement(i.a, {
					"aria-label": f.searchQuery,
					className: Object(c.a)(j.a.listItem, b.a.item, n, {
						[j.a.mFocused]: !(!o || o.section !== v.c.recent || q !== B)
					}),
					onClick: () => {
						f.isTypeaheadSuggestion ? A() : C(f.searchQuery), R(f.searchQuery, f, T), N(), L()
					},
					key: B,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: G && u(G) || "",
						search: F,
						state: Object(y.c)(y.a.SEARCH_DROPDOWN, S, f.isProfile || f.isSubreddit)
					}
				}, f.displayInfo && f.isTypeaheadSuggestion ? f.displayInfo.iconUrl ? s.a.createElement("div", {
					className: j.a.subredditIcon,
					style: {
						backgroundImage: `url('${f.displayInfo.iconUrl}')`
					}
				}) : s.a.createElement(m.a, {
					name: "community",
					isFilled: !p,
					className: Object(c.a)(j.a.defaultCommunityIcon, {
						[j.a.mNightmode]: p
					})
				}) : s.a.createElement(m.a, {
					name: "search"
				}), s.a.createElement("span", {
					className: b.a.text
				}, B), s.a.createElement("div", {
					onMouseEnter: () => D(B),
					onMouseLeave: () => D(null),
					id: B
				}, s.a.createElement(m.a, {
					name: "clear",
					onMouseUp: e => {
						e.stopPropagation(), e.preventDefault(), P(f)
					}
				}), s.a.createElement(w, {
					className: j.a.fixedTextTooltip,
					isOpen: t === B,
					text: d.fbt._("Remove", null, {
						hk: "2P57BY"
					}),
					tooltipId: B,
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				})))
			}
			var D = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				A = n("./src/reddit/components/PostTitle/index.tsx"),
				P = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				C = n("./src/reddit/constants/adEvents.ts"),
				R = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				N = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				k = n("./src/reddit/helpers/correlationIdTracker.ts"),
				x = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				L = n("./src/reddit/helpers/trackers/discoveryUnit.ts");

			function U(e) {
				let {
					className: t,
					focusedItem: n,
					id: r,
					trendingItem: o,
					searchOriginPage: p,
					onUpdateSearchQuery: f,
					onCloseDropdown: h,
					onSetRecentSearch: O,
					fireAdPixelsOfType: E
				} = e;
				const _ = Object(a.d)(),
					I = !(!o.post || !o.post.isSponsored),
					{
						url: S,
						qs: w
					} = Object(g.a)({
						multireddit: null,
						searchItem: o,
						searchOptions: {
							source: I ? l.a.PromotedTrend : l.a.Trending
						},
						subreddit: null
					}),
					T = s.a.createElement(i.a, {
						id: r,
						"aria-label": o.searchQuery,
						className: Object(c.a)(j.a.listItem, j.a.mTrending, b.a.item, b.a.trending, t, {
							[j.a.mFocused]: !(!n || n.section !== v.c.trending || o.searchQuery !== n.searchQuery)
						}),
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
							if (O(e), Object(k.d)(k.a.SearchResults), (e => _((t, n) => Object(L.u)({
									state: n(),
									trendingSearch: e,
									telemetrySource: x.a.Typeahead
								})))(o), I) {
								const {
									post: e
								} = o;
								e && E(e, C.a.Click)
							}
							h()
						},
						key: `trending-${o.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: S && u(S) || "",
							search: w,
							state: Object(y.c)(y.a.TYPEAHEAD, p)
						}
					}, s.a.createElement("div", {
						className: b.a.trendingContent
					}, I && s.a.createElement("div", {
						className: b.a.promoted
					}, d.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), s.a.createElement("div", null, s.a.createElement(m.a, {
						name: "popular",
						className: j.a.trendingIcon
					}), s.a.createElement("span", null, s.a.createElement(A.a, {
						className: Object(c.a)(j.a.listItemText, j.a.mTrending, b.a.text, b.a.trending),
						redditStyle: !0,
						size: A.b.Small
					}, o.searchQuery)), o.post && s.a.createElement("div", {
						className: j.a.postTitle
					}, o.post.title)), o.subredditInfo && s.a.createElement(R.a, {
						className: Object(c.a)(b.a.relatedSubredditMetaData, j.a.listItemSubtext, {
							[j.a.mNoPostTitle]: !o.post
						}),
						iconUrl: o.subredditInfo.icon || void 0,
						suffix: d.fbt._("{subreddit name} and more", [d.fbt._param("subreddit name", o.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), o.post && Object(N.a)(o.post) && s.a.createElement(D.a, {
						post: o.post,
						removeLink: !0,
						usePreview: I
					}));
				return I ? s.a.createElement(P.a, {
					post: o.post
				}, T) : T
			}
			var M = n("./src/reddit/components/Flair/index.tsx"),
				G = n("./src/reddit/models/Flair/index.ts");

			function F(e) {
				let {
					className: t,
					focusedItem: n,
					item: a,
					indexOfItem: o,
					nightmode: l,
					searchOriginPage: p,
					subredditSuggestions: f,
					onSendSearchClickTypeaheadEvent: h,
					onSetRecentSearch: g,
					onClearSearchQuery: v,
					onCloseDropdown: O,
					relativePosition: S
				} = e;
				const w = Object(_.a)(),
					T = !a.isProfile || a.enableFollowers;
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: a.searchQuery,
						rawQuery: a.rawQuery || a.searchQuery,
						searchQuery: a.searchQuery,
						structureType: I.c.Search
					};
					w(Object(E.x)(E.a.TYPEAHEAD, e, o, S, a))
				}, []);
				return s.a.createElement(i.a, {
					"aria-label": a.searchQuery,
					className: Object(c.a)(j.a.listItem, j.a.mTypeahead, b.a.item, t, {
						[j.a.mFocused]: !(!n || n.searchQuery !== a.searchQuery)
					}),
					onClick: () => {
						g(a), h(a.searchQuery, a, o, S, f), v(!1), O(!1)
					},
					key: a.searchQuery,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: `/${u(a.isProfile?a.searchQuery.replace("u/","user/"):a.searchQuery)}`,
						state: Object(y.c)(y.a.TYPEAHEAD, p)
					}
				}, a.displayInfo && a.displayInfo.iconUrl ? s.a.createElement("div", {
					className: j.a.subredditIcon,
					style: {
						backgroundImage: `url('${a.displayInfo.iconUrl}')`
					}
				}) : s.a.createElement(m.a, {
					name: "community",
					isFilled: !l,
					className: Object(c.a)(j.a.defaultCommunityIcon, {
						[j.a.mNightmode]: l
					})
				}), s.a.createElement("div", null, a.displayInfo && a.displayInfo.subredditOrProfileName && s.a.createElement("div", {
					className: Object(c.a)(j.a.listItemText, j.a.mTypeahead, b.a.text)
				}, a.displayInfo.subredditOrProfileName), s.a.createElement("div", null, a.displayInfo && null != a.displayInfo.subscribers && T && s.a.createElement("div", {
					className: Object(c.a)(j.a.listItemSubtext, b.a.subText)
				}, d.fbt._({
					"*": "{members count} members",
					_1: "1 member"
				}, [d.fbt._plural(a.displayInfo.subscribers, "members count")], {
					hk: "1uMCes"
				})), a.displayInfo && a.displayInfo.isNSFW && s.a.createElement(M.b, {
					flair: {
						type: G.f.Nsfw,
						text: d.fbt._("nsfw", null, {
							hk: "2nrY5X"
						})
					}
				}))))
			}
			var B = n("./src/reddit/constants/zIndex.ts"),
				q = n("./src/reddit/controls/Dropdown/index.tsx"),
				V = n("./src/reddit/constants/experiments.ts"),
				W = n("./src/reddit/helpers/chooseVariant/index.ts"),
				H = n("./node_modules/reselect/es/index.js"),
				Q = n("./src/reddit/selectors/experiments/utils.ts");
			const $ = Object(H.a)(e => Object(W.c)(e, {
					experimentEligibilitySelector: W.a,
					experimentName: V.ic
				}), Q.a),
				K = Object(H.a)($, e => e === V.Ec.Treatment1 || e === V.Ec.Treatment2),
				z = Object(H.a)($, e => e === V.Ec.Treatment1);
			Object(H.a)($, e => e === V.Ec.Treatment2);
			var Y = n("./src/reddit/hooks/useLocalStorage.ts");
			const X = () => {
				const e = Object(a.e)(z),
					[t, n] = Object(Y.a)("nsfw_typeahead_expanded", e);
				return {
					get nsfwTypeaheadExpanded() {
						return t
					},
					setNsfwTypeaheadExpanded: e => {
						n(e)
					}
				}
			};
			var J = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Z = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				ee = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				te = n.n(ee),
				ne = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				re = n.n(ne),
				se = n("./node_modules/lodash/pick.js"),
				ae = n.n(se),
				oe = n("./src/reddit/constants/history.ts"),
				ce = n("./src/reddit/constants/parameters.ts"),
				de = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				ie = n("./src/reddit/hooks/usePageLayer.ts"),
				ue = n("./src/reddit/selectors/experiments/serpTabPreserved.ts");

			function le(e) {
				let {
					className: t,
					searchOriginPage: n,
					searchItem: o,
					position: u,
					onTriggerSearch: p
				} = e;
				var f;
				const y = (null === (f = o.searchQuery) || void 0 === f ? void 0 : f.trim()) || "",
					v = Object(_.a)(),
					S = Object(ie.a)(),
					w = Object(de.Z)(S),
					T = Object(a.e)(e => Object(de.db)(e, {
						pageLayer: S
					})),
					D = Object(a.e)(e => Object(de.t)(e, {
						pageLayer: S
					})),
					A = Object(a.e)(e => Object(de.e)(e, {
						pageLayer: S
					})),
					P = Object(a.e)(e => Object(ue.a)(e)),
					C = Object(a.e)(O.kb),
					{
						nsfwSessionSetting: R
					} = Object(h.b)(),
					N = Object(l.e)({
						...ae()(w || {}, ce.t),
						q: o.searchQuery,
						restrict_sr: T ? "1" : ""
					}),
					{
						url: k,
						qs: L
					} = Object(g.a)({
						subreddit: D,
						multireddit: A,
						searchItem: o,
						...P ? {
							searchOptions: N
						} : {},
						shouldSearchSubreddit: T,
						includeNsfwResults: C && R
					}),
					U = {
						...N,
						id: (null == D ? void 0 : D.id) || "",
						eventType: Boolean(T) ? "subreddit" : void 0
					};
				return Object(r.useEffect)(() => {
					v(Object(E.t)(U, T, u, S || void 0))
				}, []), s.a.createElement(i.a, {
					onClick: function(e) {
						v(Object(E.o)(I.a.FullSearchButton, N, T, x.a.Typeahead, S || void 0)), p(e)
					},
					to: {
						pathname: k,
						state: {
							[oe.b.SearchOriginPage]: n
						},
						search: L
					},
					className: Object(c.a)(j.a.listItem, b.a.item, t),
					"data-testid": "search-trigger-item"
				}, s.a.createElement(m.a, {
					name: "search"
				}), s.a.createElement("span", {
					className: b.a.text
				}, d.fbt._("Search for “", null, {
					hk: "28KVrM"
				}), d.fbt._("{search query}", [d.fbt._param("search query", y)], {
					hk: "4vP3YT"
				}), "”"))
			}
			const {
				fbt: pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), be = "typeahead_nsfw_toggle", fe = "SearchDropdown", he = "SearchDropdownContent", ye = 5, ge = Object(o.a)(q.a);

			function me(e) {
				let {
					typeaheadSuggestions: t,
					focusedItemIndex: n,
					nightmode: o,
					searchItem: d,
					searchOriginPage: i,
					onClearSearchQuery: u,
					onClose: l,
					onSendSearchClickTypeaheadEvent: p,
					onSetRecentSearch: b
				} = e;
				const f = Object(_.a)(),
					h = Object(r.useMemo)(() => t.filter(e => e.isSubreddit), [t]),
					y = Object(a.e)(O.kb),
					g = Object(a.e)(K),
					{
						nsfwTypeaheadExpanded: m,
						setNsfwTypeaheadExpanded: v
					} = X(),
					I = e => {
						const t = m ? E.a.COLLAPSE_NSFW : E.a.EXPAND_NSFW;
						f(Object(E.s)(t, e)), v(!m)
					};
				return y && g ? function() {
					const e = [],
						r = [];
					t.forEach(t => {
						var n;
						(null === (n = t.displayInfo) || void 0 === n ? void 0 : n.isNSFW) ? r.push(t): e.push(t)
					});
					const a = e.length,
						f = r.length > 0;
					return s.a.createElement(s.a.Fragment, null, e.map((e, r) => s.a.createElement(F, {
						focusedItem: t[n],
						indexOfItem: r,
						relativePosition: r,
						subredditSuggestions: h,
						item: e,
						key: e.id,
						onClearSearchQuery: u,
						onSendSearchClickTypeaheadEvent: p,
						onSetRecentSearch: b,
						nightmode: o,
						onCloseDropdown: l,
						searchOriginPage: i
					})), f && s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
						className: Object(c.a)(j.a.nsfwSection, !m && j.a.borderBottom),
						"data-testid": be,
						onClick: () => I(d)
					}, s.a.createElement("p", {
						className: Object(c.a)(j.a.listItemText, j.a.mTypeahead)
					}, pe._("NSFW results", null, {
						hk: "17BDhb"
					})), s.a.createElement("p", {
						className: j.a.listItemButton
					}, m ? s.a.createElement(s.a.Fragment, null, pe._("Collapse", null, {
						hk: "4nBun"
					}), s.a.createElement(Z.a, {
						className: j.a.chevron
					})) : s.a.createElement(s.a.Fragment, null, pe._("Expand", null, {
						hk: "11NQXp"
					}), s.a.createElement(J.a, {
						className: j.a.chevron
					})))), m && r.map((e, r) => s.a.createElement(F, {
						focusedItem: t[n],
						indexOfItem: a + r,
						relativePosition: r,
						subredditSuggestions: h,
						item: e,
						key: e.id,
						onClearSearchQuery: u,
						onSendSearchClickTypeaheadEvent: p,
						onSetRecentSearch: b,
						nightmode: o,
						onCloseDropdown: l,
						searchOriginPage: i
					})), s.a.createElement(le, {
						className: Object(c.a)(j.a.triggerItem),
						key: d.searchQuery,
						searchOriginPage: i,
						searchItem: d,
						position: t.length,
						onTriggerSearch: l
					})))
				}() : s.a.createElement(s.a.Fragment, null, t.map((e, r) => s.a.createElement(F, {
					focusedItem: t[n],
					indexOfItem: r,
					relativePosition: r,
					subredditSuggestions: h,
					item: e,
					key: e.id,
					onClearSearchQuery: u,
					onSendSearchClickTypeaheadEvent: p,
					onSetRecentSearch: b,
					nightmode: o,
					onCloseDropdown: l,
					searchOriginPage: i
				})), s.a.createElement(le, {
					key: d.searchQuery,
					searchOriginPage: i,
					searchItem: d,
					position: t.length,
					onTriggerSearch: l
				}))
			}

			function ve(e) {
				var t;
				const {
					containerWidth: n,
					trendingItems: o,
					isTrendingPending: d,
					isOpen: i,
					isTypeaheadPending: u,
					itemList: l,
					recentSearches: p,
					typeaheadSuggestions: f,
					focusedItemIndex: h,
					nightmode: y,
					searchItem: g,
					searchOriginPage: m,
					isFixed: v = !0,
					isOverlay: O = !0,
					fireAdPixelsOfType: E,
					onClearSearchQuery: _,
					onClose: I,
					onRemoveRecentSearch: S,
					onSendSearchClickRecentEvent: w,
					onSetRecentSearch: D,
					onUpdateSearchQuery: A
				} = e, P = Object(a.d)(), [C, R] = Object(r.useState)(null), [N, k] = Object(r.useState)(n), [M, G] = Object(r.useState)(new Array(ye).fill(!1)), F = !!(null === (t = g.searchQuery) || void 0 === t ? void 0 : t.trim()), q = u || d, V = 0 === f.length && !u && (!F || h >= 0), W = {
					width: N ? `${N}px` : "inherit",
					marginTop: "7px",
					overflow: "auto"
				};
				v && (W.zIndex = B.g), Object(r.useEffect)(() => {
					k(n)
				}, [n]), Object(r.useLayoutEffect)(() => {
					if (!d && i && document.getElementById(he)) {
						const e = H();
						G(e), o.forEach((t, n) => {
							e[n] && P((e, n) => Object(L.v)({
								state: n(),
								trendingSearch: t,
								telemetrySource: x.a.Typeahead
							}))
						})
					}
				}, [d, i, P]);
				const H = () => {
					const e = new Array(o.length).fill(!1);
					return o.forEach((t, n) => {
						if (t.id) {
							const r = document.getElementById(`${fe}-${t.id}`),
								s = document.getElementById(he);
							if (r && s) {
								const t = r.getBoundingClientRect(),
									a = s.getBoundingClientRect();
								t.top < a.bottom && t.bottom > a.top && (e[n] = !0)
							}
						}
					}), e
				};
				return s.a.createElement(ge, {
					className: Object(c.a)(j.a.dropdown, te.a.listContainer),
					id: he,
					isFixed: v,
					isOpen: i,
					isOverlay: O,
					tooltipId: fe,
					noFocus: !0,
					style: W,
					onDropdownMounted: () => {
						if (!d && o.length > 0) {
							const e = H();
							G(e), o.forEach((t, n) => {
								e[n] && P((e, n) => Object(L.v)({
									state: n(),
									trendingSearch: t,
									telemetrySource: x.a.Typeahead,
									offset: p.length
								}))
							})
						}
					},
					onScroll: () => {
						const e = H();
						o.forEach((t, n) => {
							M[n] || !e[n] || t.post && t.post.isSponsored || P((e, n) => Object(L.v)({
								state: n(),
								trendingSearch: t,
								telemetrySource: x.a.Typeahead,
								offset: p.length
							}))
						}), G(e)
					}
				}, V && s.a.createElement(s.a.Fragment, null, p.map((e, t) => s.a.createElement(T, {
					searchOriginPage: m,
					activeTooltipId: C,
					focusedItem: l[h],
					indexOfItem: t,
					key: e.id,
					onClearSearchQuery: _,
					onRemoveRecentSearch: S,
					onSendSearchClickRecentEvent: w,
					onSetRecentSearch: D,
					onUpdateSearchQuery: A,
					recentSearch: e,
					toggleTooltip: R,
					nightmode: y,
					onCloseDropdown: I
				})), !d && o.length ? s.a.createElement("div", {
					className: Object(c.a)(b.a.title, j.a.listItemTitle, {
						[j.a.mWithBorder]: !!p.length
					})
				}, pe._("Trending today", null, {
					hk: "3nAMpY"
				})) : null, o.map(e => s.a.createElement(U, {
					id: `${fe}-${e.id}`,
					key: e.id,
					focusedItem: l[h],
					searchOriginPage: m,
					fireAdPixelsOfType: E,
					onCloseDropdown: I,
					onSetRecentSearch: D,
					onUpdateSearchQuery: A,
					trendingItem: e
				}))), q && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(c.a)(j.a.loadingItem, re.a.item)
				}), s.a.createElement("div", {
					className: Object(c.a)(j.a.loadingItem, re.a.item)
				}), s.a.createElement("div", {
					className: Object(c.a)(j.a.loadingItem, re.a.item)
				}), s.a.createElement("div", {
					className: Object(c.a)(j.a.loadingItem, re.a.item)
				}), s.a.createElement("div", {
					className: Object(c.a)(j.a.loadingItem, re.a.item)
				})), F && !u && s.a.createElement(me, e))
			}
		},
		"./src/reddit/components/SubredditForkingCTA/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			})), n.d(t, "a", (function() {
				return D
			}));
			var r = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				s = n.n(r),
				a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				c = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/constants/comments.ts"),
				u = n("./src/reddit/models/Subreddit/index.ts"),
				l = n("./src/reddit/selectors/comments.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				f = n("./node_modules/reselect/es/index.js"),
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
					importAsync: () => n.e("SubredditForkingCTA").then(n.bind(null, "./src/reddit/components/SubredditForkingCTA/SubredditForkingCTA.tsx")),
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
				O = [{
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
				E = "subreddit-forking.dismissals",
				_ = (e, t) => {
					const n = Object(b.k)(e),
						r = Object(y.a)(t.postId),
						s = Object(p.G)(e, t),
						a = Object(l.o)(e, {
							...t,
							commentsPageKey: r
						}),
						o = Object(l.k)(e, {
							...t,
							commentsPageKey: r
						}).reduce((t, n) => {
							var r;
							const s = Object(l.l)(e, {
								commentLink: n
							});
							return n.type !== i.a.Comment && 0 !== (null === (r = a[n.id]) || void 0 === r ? void 0 : r.depth) || t.push(s), t
						}, []).sort((e, t) => t.score - e.score).slice(0, 5);
					return (null == n ? void 0 : n.id) === s.authorId || !!o.find(e => e.authorId === (null == n ? void 0 : n.id))
				},
				I = e => {
					let t = Object(h.b)(E);
					const n = Object.entries(t || {});
					n.length >= 99 && (t = n.sort((e, t) => {
						let [, n] = e, [, r] = t;
						return r - n
					}).splice(0, 99).reduce((e, t) => {
						let [n, r] = t;
						return e[n] = r, e
					}, {})), Object(h.d)(E, {
						...t,
						[e]: Date.now()
					}, Date.now() + 2592e3)
				},
				S = (e, t) => {
					var n;
					if (!Object(b.Q)(e)) return !1;
					if (null === (n = Object(h.b)(E)) || void 0 === n ? void 0 : n[t.postId]) return !1;
					const r = Object(p.G)(e, t),
						s = Object(p.U)(e, {
							...t,
							disallowProfile: !0
						});
					if ((null == s ? void 0 : s.type) !== u.g.Public || s.isNSFW || s.isQuarantined || (null == r ? void 0 : r.isNSFW) || (null == r ? void 0 : r.source)) return !1;
					const a = O.find(e => {
						let {
							low: t,
							high: n
						} = e;
						return n >= s.subscribers && s.subscribers > t
					});
					return !(!a || !r.numComments || a.threshold > r.numComments) && !!_(e, t)
				},
				j = () => Object(f.c)({
					shouldLoadCTA: S
				}),
				w = Object(d.b)(j),
				T = e => {
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
				D = Object(o.memo)(w(Object(m.c)(T)))
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const i = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.jb.POST
			}), u = async (e, t, n) => Object(a.a)(Object(o.a)(e, [c.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.jb.POST
			}), l = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
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
			}), b = async (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				endpoint: Object(d.a)(`${r.a.oauthUrl}/user/${t}/about`),
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
				return b
			})), n.d(t, "e", (function() {
				return f
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
				d = n("./src/redditGQL/operations/UpdateChatMessagesAsRead.json"),
				i = n("./src/reddit/constants/headers.ts"),
				u = n("./src/redditGQL/operations/CreateChatChannelInviteLink.json"),
				l = n("./src/redditGQL/types.ts");
			const p = e => Boolean(e && e.data && (null == e ? void 0 : e.errors)),
				b = e => Object(a.a)(Object(c.a)(e, [i.a]), {
					endpoint: `${r.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.jb.GET
				}),
				f = async (e, t) => Object(a.a)(Object(c.a)(t, [i.a]), {
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
						...d,
						variables: {
							input: n
						}
					})
				}, y = e => Object(o.a)(e, {
					...u,
					variables: {
						input: {
							customType: l.b.Direct
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
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return o
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "l", (function() {
				return i
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "n", (function() {
				return m
			}));
			var r, s = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function c(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case r.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184";
					case r.ArbitrumNitroDevnet:
						return "https://meta-api.reddit.com/ethereum/nitroDevnet";
					default:
						return `https://meta-api.reddit.com/ethereum/${e}`
				}
			}

			function d(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "homestead";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "rinkeby";
					case r.ArbitrumRinkeby:
						return 5391184;
					case r.ArbitrumNitroDevnet:
						return 421612;
					default: {
						const [, t] = e.split(":");
						return t
					}
				}
			}

			function i(e) {
				return e === r.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(e, t, n) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function p(e, t, n) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:5391184", e.ArbitrumNitroDevnet = "ethereum:421612", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(r || (r = {}));
			const b = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				f = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				y = e => ({
					type: "subscribe",
					subredditId: e
				}),
				g = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function m(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
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
				return d
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

			function d(e, t) {
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
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.jb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							r = {
								[t.subredditId]: n
							};
						return {
							...e,
							body: r
						}
					}
					return e
				})
			}

			function c(e, t) {
				return Object(a.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}`,
					method: s.jb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/endpoints/post/create.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return I
			}));
			var r = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/helpers/name/index.ts"),
				l = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				p = n("./src/reddit/models/Poll/index.ts"),
				b = n("./src/reddit/models/Post/index.ts"),
				f = n("./src/reddit/models/PostCreationForm/index.ts"),
				h = n("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function y(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const g = e => {
					switch (e.kind) {
						case f.p.CROSSPOST:
							return f.p.CROSSPOST;
						case f.p.LINK:
							return f.p.LINK;
						case f.p.POLL:
							return f.p.POLL;
						case f.p.MEDIA:
							return e.makeGif ? f.p.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				m = e => {
					switch (e.kind) {
						case f.p.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case f.p.MARKDOWN:
							return {
								text: e.markdown
							};
						case f.p.LINK:
						case f.p.MEDIA:
							return {
								url: e.url
							};
						case f.p.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case f.p.POLL:
							return e.poll.type === p.a.Prediction ? {
								duration: 999999,
								end_timestamp: y(e.poll.endDate),
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
				v = e => {
					const t = Object(u.h)(e.destSubreddit.name);
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
						discussion_type: e.isChatPost ? b.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== f.p.POLL ? {
							kind: g(e),
							original_content: e.isOC
						} : {},
						post_to_twitter: e.postToTwitter,
						sendreplies: e.sendReplies,
						...e.gRecaptchaResponse ? {
							"g-recaptcha-response": e.gRecaptchaResponse
						} : {},
						resubmit: e.resubmit,
						...m(e),
						...e.kind === f.p.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === f.p.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(i.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === f.j.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				O = e => {
					const t = /comments\/(\w+)\/.*$/.exec(e),
						n = t && t[1];
					return n ? `${s.Ib.Post}_${n}` : ""
				},
				E = async (e, t) => {
					if (!e.ok) return Object(l.b)(e);
					const n = e.body.json.data;
					let s = n.url;
					s || t.kind !== f.p.MEDIA || (s = await ((e, t) => new Promise(n => {
						const r = new WebSocket(e),
							s = e => {
								r.close(), clearTimeout(a), n(e)
							},
							a = setTimeout(() => {
								s("")
							}, t);
						r.onmessage = e => {
							const t = JSON.parse(e.data),
								n = "success" === t.type ? t.payload.redirect : "";
							s(n)
						}, r.onerror = e => {
							s("")
						}
					}))(n.websocket_url, 3e4));
					const a = n.id || O(s),
						o = Object(r.parse)(s).path,
						c = n.drafts_count;
					return {
						...e,
						body: {
							id: a,
							path: o,
							draftsCount: c
						}
					}
				}, _ = (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
					endpoint: Object(h.a)(Object(d.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
					method: s.jb.POST,
					data: v(t),
					type: "json"
				}).then(e => E(e, t)), I = (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
					endpoint: Object(h.a)(Object(d.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
					method: s.jb.POST,
					data: {
						...v(t),
						items: t.galleryItems.map(e => ({
							caption: e.caption,
							outbound_url: e.url,
							media_id: e.assetId
						}))
					},
					type: "json"
				}).then(e => E(e, t));
			t.c = (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
				endpoint: Object(h.a)(Object(d.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: s.jb.POST,
				data: v(t)
			}).then(async e => await E(e, t))
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "a", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/helpers/richTextJson/index.ts"),
				o = n("./src/reddit/models/Post/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/models/ScheduledPost/index.ts"),
				i = n("./src/redditGQL/operations/CreateScheduledPost.json"),
				u = n("./src/redditGQL/operations/SubredditScheduledPosts.json");
			const l = (e, t) => Object(r.a)(e, {
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
					const n = e.body;
					return !!(n.data && n.data.subredditInfoById && n.data.subredditInfoById.scheduledPosts && n.data.subredditInfoById.scheduledPosts[t] && n.data.subredditInfoById.scheduledPosts[t].edges)
				},
				b = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => p(e, d.g.standalonePosts))(e)) && !(t.includeRecurring && !(e => p(e, d.g.recurringPosts))(e))),
				f = e => {
					let {
						poll: t,
						schedule: n,
						submission: r,
						subredditId: a
					} = e;
					return {
						collectionId: r.collectionId || "",
						discussionType: r.isChatPost ? o.b.Chat : o.b.Comment,
						isContestMode: r.isContestMode,
						isPostAsMetaMod: r.isPostAsMetaMod,
						isSpoiler: r.isSpoiler,
						isNsfw: r.isNSFW,
						poll: t && E(t),
						title: r.title,
						isOriginalContent: r.isOC,
						flair: r.flair ? {
							id: r.flair.templateId,
							text: Object(s.g)(r.flair)
						} : {},
						sticky: r.sticky,
						subredditId: a,
						suggestedCommentSort: r.suggestedSort,
						isSendReplies: r.sendReplies,
						...h(n),
						...v(r),
						assetIds: O(r)
					}
				},
				h = e => ({
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
				g = e => {
					let {
						poll: t,
						schedule: n,
						scheduledPostId: r,
						submission: s,
						subredditId: a
					} = e;
					const o = f({
						poll: t,
						schedule: n,
						submission: s,
						subredditId: a
					});
					return {
						id: r,
						...o,
						flair: Object.keys(o.flair || {}).length ? {
							...o.flair
						} : {
							id: "",
							text: ""
						}
					}
				},
				m = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				v = e => {
					switch (e.kind) {
						case c.p.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case c.p.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case c.p.LINK:
							return {
								content: {}, link: {
									url: m(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				O = e => {
					let t = [];
					if (e.document) {
						const n = e.document || [];
						t = Object(a.d)(n)
					}
					return t
				},
				E = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				_ = (e, t) => Object(r.a)(e, {
					...i,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/redditGQL/operations/UpdateScheduledPost.json"),
				s = n("./src/lib/makeGqlRequest/index.ts");
			const a = (e, t) => Object(s.a)(e, {
				...r,
				variables: {
					input: t
				}
			})
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
					searchItem: d,
					searchOptions: i,
					shouldSearchSubreddit: u,
					includeNsfwResults: l
				} = e;
				const p = [];
				if (d.isTypeaheadSuggestion) t = `/${d.isProfile?d.searchQuery.replace("u/","user/"):d.searchQuery}`;
				else {
					if (p.push(`${a.p}=${Object(s.b)(d.rawQuery||d.searchQuery)}`), t = "/search/", d.section !== o.c.trending && d.section !== o.c.recent || i && i.source && p.push(`source=${i.source}`), n && u ? (t = `/r/${n.name}${t}`, p.push(`${a.s}=1`), p.push(`${a.A}=${n.isNSFW?"1":""}`)) : !n && d.subredditOrProfileRestrictedName && (t = `/${d.subredditOrProfileRestrictedName}${t}`, p.push(`${a.s}=1`)), c) {
						t = `/user/${c.url.split("/")[2]}/m/${c.name}${t}`, p.push(`${a.s}=1`), p.push(`${a.A}=${c.isNSFW?"1":""}`), p.push(`${a.j}=1`)
					}
					l && p.push(`${a.i}=1`), (null == i ? void 0 : i.t) && i.t !== r.ic.ALL && p.push(`${a.C}=${i.t}`), (null == i ? void 0 : i.sort) && p.push(`${a.x}=${i.sort}`), (null == i ? void 0 : i.type) && (i.type.includes(r.cc.Posts) || p.push(`${a.D}=${i.type[0]}`))
				}
				return {
					url: t,
					qs: p.join("&")
				}
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function a(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : r.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function o(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "d", (function() {
				return h
			}));
			const r = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: b(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: e.subredditInfoById.scheduledPosts.recurringPosts.edges.map(e => e.node.id)
				} : {},
				s = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
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
							...r(e),
							...s(e)
						}
					}
				}),
				o = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				c = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				d = e => o(e) && c(e),
				i = e => !o(e) && c(e),
				u = e => o(e) && !c(e),
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
				h = e => (e => !!e.frequency && !!e.interval)(e) ? f(e) : p(e)
		},
		"./src/reddit/helpers/isArrayEqual.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/isEqual.js"),
				s = n.n(r),
				a = n("./node_modules/lodash/xorWith.js"),
				o = n.n(a);
			t.a = (e, t) => {
				const n = o()(e, t, s.a);
				return !(!n || 0 !== n.length)
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
				return d
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
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

			function d(e, t) {
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

			function i() {
				return d(a, () => "undefined" != typeof Stripe)
			}

			function u() {
				return d(o, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function l() {
				return Promise.all(Object.keys(c).map(e => {
					const t = "__" + e;
					return d(c[e], () => void 0 !== window[t]).then(() => {
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
			const d = new RegExp("^/desktopapi/v1/(duplicates/[^/]+|frontpage|news|search|subreddits/(all|popular))(/|$)"),
				i = new RegExp("^/desktopapi/v1/(search|subreddits|postcomments|collection_postcomments|submitpage)(/|$)"),
				u = new RegExp("^/desktopapi/v1/(subreddits|postcomments|collection_postcomments)/?$"),
				l = (new RegExp("^/desktopapi/v1/(postcomments)(/+|$)"), new RegExp("^/desktopapi/v1/frontpage/?$")),
				p = new RegExp("^/desktopapi/v1/submitpage(/|$)");
			var b = (e, t, n) => {
					const r = new Set;
					e.user.session && !e.user.session.unsafeLoggedOut && (e.user.account || (r.add("identity"), r.add("prefs"), r.add("prefsAccount")), (e => !d.test(e.pathname || ""))(t) && r.add("identity")), !e.live.isFrontpageLoaded && (e => l.test(e.pathname || ""))(t) && r.add("featuredLiveThread");
					const s = t.pathname || "";
					if (i.test(s) || u.test(s)) {
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
							d = s || o || "",
							i = Object(c.F)(e, d);
						i && e.structuredStyles.models[i] || r.add("structuredStyles"), e.user.prefs.subreddit[i] || r.add("prefsSubreddit")
					}
					return [...r].join(",")
				},
				f = n("./src/reddit/selectors/user.ts");
			t.a = e => t => {
				const n = s.a.parse(t.endpoint, !0),
					{
						host: r,
						protocol: c
					} = n;
				if (`${c}//${r}` === a.a.gatewayUrl) {
					const r = {},
						s = e.getState();
					Object(f.kb)(s) && (r.allow_over18 = 1), Object(f.o)(s) && (r.gated_optin = 1), Object(f.nb)(s) && (r.quarantine_optin = 1), r.include = b(e.getState(), n, t), t.endpoint = Object(o.a)(t.endpoint, r)
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
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "g", (function() {
				return O
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/intlList/index.ts"),
				a = n("./src/lib/timezone/index.ts"),
				o = n("./src/reddit/helpers/isArrayEqual.ts"),
				c = n("./src/reddit/helpers/ordinal/index.ts"),
				d = n("./src/reddit/models/ScheduledPost/index.ts");
			const i = e => {
					return `${e.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				u = (e, t) => {
					if (e && t) {
						const n = Object(a.f)(p(e, t)),
							s = i(n);
						return r.fbt._("At {time}", [r.fbt._param("time", s)], {
							hk: "25s5Tg"
						})
					}
					return r.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				l = e => e.slice(0, 5),
				p = (e, t) => `${e}T${l(t)}:00`,
				b = e => {
					const [t, n] = e.split("T");
					return [t, l(n)]
				},
				f = e => {
					const [t, n] = b(e);
					if (t && n) {
						const e = Object(a.f)(p(t, n));
						return i(e)
					}
					return ""
				},
				h = e => {
					const t = Object(a.d)(e);
					let n, r = e;
					if (t) {
						n = t.offset, r = `(GMT${Object(a.e)(t.offset)}) ${e.replace("/"," - ").replace(/_/g," ")}`
					}
					return {
						name: e,
						displayText: r,
						offset: n
					}
				},
				y = e => "string" == typeof e,
				g = e => {
					const t = new Date,
						n = e - t.getDay();
					return t.setDate(t.getDate() + n), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				m = e => {
					const t = (e => {
						const [t, n] = b(e);
						if (t && n) {
							return Object(a.f)(p(t, n)).toLocaleTimeString(void 0, {
								hour: "numeric",
								minute: "numeric"
							})
						}
						return ""
					})(e.publishAt);
					if (e.frequency === d.d.Hourly) return 2 === e.interval ? r.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? r.fbt._("Every {hour interval} hours", [r.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : r.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === d.d.Daily) return 2 === e.interval ? r.fbt._("Every other day at {start time}", [r.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? r.fbt._("Every {day interval} days at {start time}", [r.fbt._param("day interval", e.interval.toString()), r.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : r.fbt._("Every day at {start time}", [r.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === d.d.Weekly) {
						const n = (e => Object(s.c)(e.map(d.l).sort((e, t) => e - t).map(g), s.a.AND, s.b.COMMA))(e.byWeekDays);
						return 2 === e.interval ? r.fbt._("Every other week on {days of week } at {start time}", [r.fbt._param("days of week ", n), r.fbt._param("start time", t)], {
							hk: "43xwaa"
						}) : e.interval > 1 ? r.fbt._("Every {interval} weeks on {days of week} at {start time}", [r.fbt._param("interval", e.interval.toString()), r.fbt._param("days of week", n), r.fbt._param("start time", t)], {
							hk: "2IVbH"
						}) : r.fbt._("Every week on {days of week} at {start time}", [r.fbt._param("days of week", n), r.fbt._param("start time", t)], {
							hk: "2Zl0L"
						})
					}
					const n = (e => Object(s.c)(e.sort((e, t) => e - t).map(c.a), s.a.AND, s.b.COMMA))(e.byMonthDays);
					return 2 === e.interval ? r.fbt._({
						"*": "Every other month on the {days of month} days at {start time}",
						_1: "Every other month on the {days of month} day at {start time}"
					}, [r.fbt._param("days of month", n), r.fbt._plural(e.byMonthDays.length), r.fbt._param("start time", t)], {
						hk: "okH9o"
					}) : e.interval > 1 ? r.fbt._({
						"*": "Every {interval} months on the {days of month} days at {start time}",
						_1: "Every {interval} months on the {days of month} day at {start time}"
					}, [r.fbt._param("interval", e.interval.toString()), r.fbt._param("days of month", n), r.fbt._plural(e.byMonthDays.length), r.fbt._param("start time", t)], {
						hk: "KqN3x"
					}) : r.fbt._({
						"*": "Every month on the {days of month} days at {start time}",
						_1: "Every month on the {days of month} day at {start time}"
					}, [r.fbt._param("days of month", n), r.fbt._plural(e.byMonthDays.length), r.fbt._param("start time", t)], {
						hk: "1jBuYc"
					})
				},
				v = e => {
					let t = null;
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = d.b);
					const n = Object(a.f)(e.publishAt),
						r = Object(d.r)(n.getDay()),
						s = n.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== r && (t = d.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== s && (t = d.b), {
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
				O = (e, t) => {
					if (!e && t || e && !t) return !1;
					if (!e && !t) return !0;
					for (const n in e) {
						if (!t) return !1;
						if (e.hasOwnProperty(n)) {
							if (Array.isArray(e[n]) && (!Array.isArray(t[n]) || !Object(o.a)(e[n], t[n]))) return !1;
							if (e[n] !== t[n]) return !1
						}
					}
					return !0
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
					...s.n(e),
					listing: s.y(e, t),
					subreddit: s.gb(e)
				})
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
				return d
			}));
			const r = "new_community_setup",
				s = "ncp_v3_module",
				a = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var o, c, d;
			! function(e) {
				e.INITIAL = "INITIAL", e.ACTIONED = "ACTIONED", e.DISMISSED = "DISMISSED", e.COMPLETED = "COMPLETED"
			}(o || (o = {})),
			function(e) {
				e[e.FILLED = 0] = "FILLED", e[e.NUMBERED = 1] = "NUMBERED"
			}(c || (c = {})),
			function(e) {
				e.HIDE_BUTTON_CLICK = "HIDE_BUTTON_CLICK", e.CTA_BUTTON_CLICK = "CTA_BUTTON_CLICK"
			}(d || (d = {}))
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
				d = Object(r.c)({
					error: a,
					loaded: o,
					pending: c
				});
			const i = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
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
			const l = {};
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
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
			const b = {};
			var f = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
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
					error: u,
					loaded: p,
					pending: f
				}),
				y = Object(r.c)({
					list: d,
					subreddits: h
				}),
				g = n("./node_modules/lodash/isEmpty.js"),
				m = n.n(g);
			const v = [];
			var O = function() {
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
			const E = {};
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
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
				j = n("./src/reddit/helpers/name/index.ts");
			const w = {};
			var T = function() {
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
								r[Object(j.h)(e.name)] = e.id
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				D = n("./src/reddit/actions/global/constants.ts"),
				A = n("./src/reddit/constants/localStorage.ts");
			const P = {};
			var C = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.a:
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
				ids: O,
				models: _,
				nameToId: T,
				ranking: C
			})
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				a = n("./src/reddit/actions/economics/me/constants.ts");
			const o = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.a: {
							const n = t.payload.claimPoints || {},
								r = Object.keys(n).reduce((t, r) => (t[r] = {
									...e[r],
									availableClaims: n[r]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (r[t] = r[t] || {
									availableClaims: []
								}, r[t].isClaiming = !0)
							}), r
						}
						case s.b:
						case s.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === s.b
								}
							};
						default:
							return e
					}
				},
				d = n("./src/reddit/actions/governance/constants.ts");
			const i = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function l(e) {
				var t, n, r, s, a;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					c = null == o ? void 0 : o.contracts,
					d = null == c ? void 0 : c.unlocked,
					i = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					l = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					p = (null == d ? void 0 : d.decimals) || 0,
					b = "1" + "0".repeat(p);
				return {
					blockchainProvider: i,
					contractAddress: (null == d ? void 0 : d.address) || "",
					contracts: c,
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
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.a: {
						const {
							subredditId: n,
							meta: r
						} = t.payload;
						return {
							...e,
							[n]: l(r)
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.n: {
						const {
							subredditId: n,
							wallets: r
						} = t.payload, s = Object.keys(r).reduce((t, s) => {
							return {
								...t,
								[s]: {
									...e[s] || {},
									[n]: r[s]
								}
							}
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
			t.a = Object(r.c)({
				claims: c,
				points: p,
				publicWallets: f
			})
		},
		"./src/reddit/reducers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return ow
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
				d = n("./src/reddit/actions/governance/constants.ts"),
				i = n("./src/reddit/actions/harbergerTax/constants.ts"),
				u = n("./src/reddit/actions/platform.ts"),
				l = n("./src/reddit/actions/product.ts"),
				p = n("./src/reddit/actions/reportFlow/constants.ts"),
				b = n("./src/reddit/actions/structuredStyles/constants.ts"),
				f = n("./src/reddit/constants/modals.ts");
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
						case u.b:
						case p.f:
							return t.type === u.b && (null == e ? void 0 : e.id) === f.a.POST_FLOW_UPSELL_MODAL_ID ? e : null;
						case b.e:
							return (null == e ? void 0 : e.id) === f.a.BLADE_UNSAVED_CHANGES ? null : e;
						case b.d:
							return (null == e ? void 0 : e.id) === f.a.BLADE_NIGHTMODE ? null : e;
						case o.a:
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
						case c.c:
							return {
								id: f.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT
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
			var O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
						t = arguments.length > 1 ? arguments[1] : void 0;
					if (!t.payload) return e;
					switch (t.type) {
						case y.d:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case y.b:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
						case y.n:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case y.k:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case y.e:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case y.j:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case y.i:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case y.g:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case y.f:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case y.h:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case y.l: {
							const {
								postId: n,
								eventType: r,
								vendorMetadata: s
							} = t.payload;
							return v(e, n, s, `adVideoWatchedPercent${r}`)
						}
						case y.m: {
							const {
								postId: n,
								eventType: r,
								vendorMetadata: s
							} = t.payload;
							return v(e, n, s, `adVideoWatchedSeconds${r}`)
						}
						case y.w:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case y.y:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case y.x:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case g.b:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case y.s:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						case y.c: {
							const {
								postId: n,
								vendorMetadata: r,
								eventType: s
							} = t.payload;
							return v(e, n, r, `adGalleryItemImpression${s}`)
						}
						default:
							return e
					}
				},
				E = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/apiRequestState.ts"));
			const _ = {};
			var I = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.d:
						case E.a:
						case E.b: {
							const n = t.payload;
							return {
								...e,
								[n.apiRequestId]: n
							}
						}
						case E.c: {
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
				j = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			var w = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.a:
						return t.payload && t.payload.error || null;
					case j.b:
					case j.c:
						return null;
					default:
						return e
				}
			};
			var T = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.c:
							return !0;
						case j.a:
						case j.b:
							return !1;
						default:
							return e
					}
				},
				D = Object(S.c)({
					error: w,
					pending: T
				});
			const A = {};
			var P = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.d:
						case j.b: {
							const n = t.payload;
							return {
								...e,
								...n
							}
						}
						case j.c:
						case j.a:
						default:
							return e
					}
				},
				C = Object(S.c)({
					api: D,
					badges: P
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
				k = n("./node_modules/lodash/mergeWith.js"),
				x = n.n(k),
				L = n("./src/reddit/actions/comment/constants.ts"),
				U = n("./src/reddit/actions/comment/websocket/constants.ts"),
				M = n("./src/reddit/actions/grantUserFlair/constants.ts"),
				G = n("./src/reddit/actions/modQueue/constants.ts"),
				F = n("./src/reddit/actions/pages/constants.ts"),
				B = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				q = n("./src/reddit/actions/pages/profilePosts.ts"),
				V = n("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				W = n("./src/reddit/actions/pages/search/index.ts"),
				H = n("./src/reddit/actions/pages/subreddit.ts"),
				Q = n("./src/reddit/actions/profileConversations.ts"),
				$ = n("./src/reddit/actions/subreddit.ts"),
				K = n("./src/reddit/actions/userFlair/constants.ts"),
				z = n("./src/reddit/models/User/index.ts");
			const Y = {};
			var X = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case U.b:
					case U.c: {
						const n = t.payload,
							{
								authorFlair: r
							} = n;
						if (r) {
							return x()({
								...e
							}, r, (e, t, n) => {
								if ("richtext" === n) return t
							})
						}
						return e
					}
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case W.c: {
						const {
							authorFlair: n
						} = t.payload;
						if (n) {
							return Object(N.merge)(e, n)
						}
						return e
					}
					case L.y:
					case H.SUBREDDIT_LOADED:
					case F.f:
					case B.b:
					case B.e:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case Q.e:
					case $.i:
						return J(e, t.payload);
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v:
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
					d = Object(z.e)(n),
					i = c.applied,
					u = c.displaySettings && c.displaySettings.isUserEnabled;
				return d && i && u ? Object(N.merge)(a, {
					[o]: {
						[d]: i
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
				},
				oe = Object(S.c)({
					availability: ae
				});
			var ce = function() {
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
			var de = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.b:
						case ee.i:
						case ee.g:
							return !1;
						case ee.h:
							return !0;
						default:
							return e
					}
				},
				ie = Object(S.c)({
					error: ce,
					pending: de
				}),
				ue = Object(S.c)({
					api: ie
				});
			var le = function() {
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
			const pe = {};
			var be = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pe,
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
						case ee.M:
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
				fe = Object(S.c)({
					error: le,
					pending: be
				});
			const he = {};
			var ye = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.M: {
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
			const ge = {};
			var me = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
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
				ve = Object(S.c)({
					api: fe,
					availability: ye,
					order: me
				}),
				Oe = n("./node_modules/lodash/merge.js"),
				Ee = n.n(Oe);
			const _e = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const n = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${n}`
			};
			var Ie = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : _e(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : _e(e.endsAt)), e),
				Se = n("./src/reddit/models/Gold/Award.ts"),
				je = n("./src/reddit/actions/discoveryUnit.ts"),
				we = n("./src/reddit/actions/frontpage/constants.ts"),
				Te = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				De = n("./src/reddit/actions/multireddit/constants.ts"),
				Ae = n("./src/reddit/actions/pages/countrySite/constants.ts"),
				Pe = n("./src/reddit/actions/pages/modListing/constants.ts"),
				Ce = n("./src/reddit/actions/pages/multireddit/constants.ts"),
				Re = n("./src/reddit/actions/pages/postCreation.ts"),
				Ne = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				ke = n("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				xe = n("./src/lib/makeActionCreator/index.ts"),
				Le = (n("./src/config.ts"), n("./src/lib/constants/index.ts"));
			n("./src/lib/makeApiRequest/index.ts"), n("./src/reddit/helpers/addRedesignIdentifier/index.ts"), n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(xe.a)("RECOMMENDED_POSTS_LOADED"), Object(xe.a)("RECOMMENDED_POSTS_FAILED");
			var Ue = n("./src/reddit/actions/search.ts");
			const Me = Se.m,
				Ge = (e => t => {
					for (let n = 0; n < e.length; n++) t = e[n](t);
					return t
				})([Ie]),
				Fe = (e, t) => {
					const n = t.reduce((e, t) => (e[t.id] = Ge(t), e), {});
					return Ee()({
						...e
					}, n)
				};
			var Be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case re.b: {
						const {
							availableAwards: n = []
						} = t.payload;
						return Fe({
							...e
						}, n)
					}
					case ee.G: {
						const {
							awards: n
						} = t.payload;
						return Fe(e, n)
					}
					case ee.M: {
						const n = t.payload.awards.reduce((e, t) => (e[t.id] = {
							...Ge(t),
							isEnabled: !0
						}, e), {});
						return Ee()({
							...e
						}, n)
					}
					case ee.b: {
						const {
							awards: n
						} = t.payload, r = n.reduce((e, t) => (e[t.award.id] = Ge(t.award), e), {});
						return Ee()({
							...e
						}, r)
					}
					case ee.i: {
						const {
							award: n
						} = t.payload;
						return n && n.id ? e[n.id] ? Ee()({
							...e
						}, {
							[n.id]: Ge(n)
						}) : {
							...e,
							[n.id]: Ge(n)
						} : e
					}
					case ee.jb: {
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
					case F.b:
					case L.y:
					case U.b:
					case Ae.b:
					case Ae.f:
					case Re.PAGE_LOADED:
					case je.e:
					case we.f:
					case Pe.e:
					case Pe.h:
					case G.f:
					case G.m:
					case G.p:
					case G.v:
					case De.r:
					case F.f:
					case we.b:
					case Ce.b:
					case W.c:
					case B.b:
					case B.e:
					case Q.b:
					case Q.e:
					case Ne.b:
					case Ne.e:
					case ke.b:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case V.c:
					case V.e:
					case V.i:
					case V.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Ue.e:
					case $.i:
					case H.SUBREDDIT_LOADED: {
						const n = {},
							r = t.payload.posts || [],
							s = t.payload.comments || [];
						for (const e in r) {
							const t = r[e].allAwardings || [];
							for (const e of t) n[e.id] = Ge(Object(Se.h)(e))
						}
						for (const e in s) {
							const t = s[e],
								{
									associatedAward: r,
									allAwardings: a = []
								} = t;
							for (const e of a) n[e.id] = Ge(Object(Se.h)(e));
							r && (n[r.id] = Ge(r))
						}
						return Object.keys(n).forEach(t => {
							var r;
							0 === (null === (r = e[t]) || void 0 === r ? void 0 : r.coinPrice) && delete n[t]
						}), Ee()({
							...e
						}, n)
					}
					case ee.sb: {
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
						}), Ee()({
							...e
						}, n)
					}
					case Te.s: {
						const {
							freeAwardEvent: r
						} = t.payload;
						return Fe(e, (null === (n = null == r ? void 0 : r.freeAwards) || void 0 === n ? void 0 : n.awards) || [])
					}
					case Te.h: {
						const {
							awards: n
						} = t.payload;
						return Fe(e, n || [])
					}
					default:
						return e
				}
			};
			const qe = {};
			var Ve = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qe,
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
				We = Object(S.c)({
					pending: Ve
				});
			const He = {};
			var Qe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He,
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
					api: We,
					order: Qe
				});
			const Ke = {};
			var ze = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke,
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
				Ye = Object(S.c)({
					order: ze
				}),
				Xe = Object(S.c)({
					blacklist: ne,
					create: ue,
					manageable: ve,
					models: Be,
					sortedUsable: $e,
					tags: Ye,
					chatReactions: oe
				}),
				Je = n("./src/reddit/actions/badge.ts");
			const Ze = {};
			var et = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ze,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Je.d:
					case Je.e: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case Je.c: {
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
			const tt = {};
			var nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Je.d: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Je.e:
						case Je.c: {
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
				rt = Object(S.c)({
					error: et,
					pending: nt
				});
			const st = {};
			var at = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : st,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Je.g:
					case Je.h: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case Je.f: {
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
			const ot = {};
			var ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ot,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Je.g: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Je.h:
						case Je.f: {
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
				dt = Object(S.c)({
					error: at,
					pending: ct
				}),
				it = Object(S.c)({
					subreddit: rt,
					user: dt
				});
			const ut = {};
			var lt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.i:
						case Je.e:
						case Je.h:
						case l.d: {
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
				pt = Object(S.c)({
					api: it,
					models: lt
				}),
				bt = n("./src/reddit/actions/blockedRedditors.ts");
			const ft = {
				message: ""
			};
			var ht = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ft,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bt.c:
					case bt.d:
						return e;
					case bt.b:
						return t.payload;
					default:
						return e
				}
			};
			var yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bt.d:
							return !0;
						case bt.c:
						case bt.b:
							return !1;
						default:
							return e
					}
				},
				gt = Object(S.c)({
					error: ht,
					pending: yt
				});
			const mt = {
				ids: []
			};
			var vt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bt.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case bt.e:
							const n = e.ids.slice();
							return n.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: n
							};
						case bt.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				Ot = Object(S.c)({
					api: gt,
					list: vt
				}),
				Et = n("./src/reddit/actions/userBlocks.ts");
			const _t = {};
			var It = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _t,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Et.f:
					case Et.e: {
						const {
							userId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Et.d: {
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
			const St = {};
			var jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : St,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Et.f: {
							const {
								userId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Et.e:
						case Et.d: {
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
				wt = Object(S.c)({
					error: It,
					pending: jt
				}),
				Tt = Object(S.c)({
					api: wt
				});
			const Dt = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var At = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case y.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case H.SUBREDDIT_PENDING:
						case Ce.c:
						case we.c:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				Pt = n("./src/reddit/actions/chat/init.ts");
			var Ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pt.a:
							return !0;
						default:
							return e
					}
				},
				Rt = n("./src/lib/omitKey/index.ts"),
				Nt = n("./src/reddit/actions/pages/chatSettings.ts");
			const kt = {};
			var xt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Nt.b: {
						const {
							subredditId: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Nt.a:
					case Nt.c:
					case Nt.d: {
						const {
							subredditId: n
						} = t.payload;
						return Object(Rt.a)(e, n)
					}
					default:
						return e
				}
			};
			const Lt = {};
			var Ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Nt.a:
						case Nt.b:
						case Nt.c:
						case Nt.d: {
							const {
								subredditId: n
							} = t.payload, r = t.type === Nt.c;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Mt = Object(S.c)({
					error: xt,
					pending: Ut
				}),
				Gt = Object(S.c)({
					fetch: Mt
				});
			const Ft = {};
			var Bt, qt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ft,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Nt.a:
						case Nt.d: {
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
				Vt = Object(S.c)({
					api: Gt,
					models: qt
				}),
				Wt = (n("./src/chat/actions/message/unreadCount.ts"), n("./src/chat/endpoints/sendbird/index.ts"), n("./src/reddit/actions/tabBadging.ts"));
			n("./src/reddit/selectors/chat.ts"), n("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(Bt || (Bt = {}));
			const {
				SYNC: Ht,
				REQUEST_FAILED: Qt,
				REQUEST_PENDING: $t,
				REQUEST_SUCCESS: Kt
			} = Bt;
			Object(xe.a)(Ht), Object(xe.a)(Qt), Object(xe.a)($t), Object(xe.a)(Kt);
			Le.kb;
			const zt = {
				apiError: null
			};
			var Yt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bt.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...zt,
							apiError: e
						}
					}
					case Bt.REQUEST_SUCCESS:
					case Bt.REQUEST_PENDING:
						return zt;
					default:
						return e
				}
			};
			var Xt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bt.REQUEST_PENDING:
							return !0;
						case Bt.REQUEST_FAILED:
						case Bt.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				Jt = Object(S.c)({
					error: Yt,
					pending: Xt
				});
			const Zt = {
				hasNewMessages: !1,
				unreadMessages: 0
			};
			var en = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bt.SYNC:
						case Bt.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				tn = Object(S.c)({
					api: Jt,
					count: en
				}),
				nn = Object(S.c)({
					isInited: Ct,
					subredditSettingsPage: Vt,
					unread: tn
				}),
				rn = n("./src/reddit/actions/commentsListTruncated/constants.ts");
			var sn = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case rn.a:
							return !1;
						case rn.b:
							return !0;
						default:
							return e
					}
				},
				an = n("./src/reddit/actions/communityFlairs/constants.ts");
			const on = {};
			var cn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : on,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case an.a: {
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
				dn = n("./src/reddit/actions/connection/constants.ts");
			const un = {
				showBanner: !1,
				online: !0
			};
			var ln = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : un,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dn.a:
							return {
								online: !1, showBanner: !0
							};
						case dn.b:
							return {
								online: !0, showBanner: !0
							};
						case dn.c:
							return {
								...e, showBanner: !1
							};
						default:
							return e
					}
				},
				pn = n("./src/reddit/actions/contentControls/constants.ts");
			const bn = {};
			var fn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pn.a: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case pn.c:
					case pn.b: {
						const {
							subredditName: n
						} = t.payload;
						return Object(Rt.a)(e, n)
					}
					default:
						return e
				}
			};
			const hn = {};
			var yn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pn.c:
						case pn.a:
						case pn.b: {
							const {
								subredditName: n
							} = t.payload, r = t.type === pn.c;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				gn = Object(S.c)({
					error: fn,
					pending: yn
				}),
				mn = Object(S.c)({
					fetch: gn
				}),
				vn = n("./src/lib/safeGet/index.ts");
			const On = {};
			var En = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : On,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pn.b: {
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
						case pn.d: {
							const {
								subredditName: n,
								partialUpdates: r
							} = t.payload, s = Object(vn.a)(e, n);
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
				_n = Object(S.c)({
					api: mn,
					models: En
				}),
				In = n("./src/reddit/actions/contentGate.ts"),
				Sn = n("./src/reddit/actions/preferences.ts");
			const jn = {};
			var wn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case In.b: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(vn.a)(e, n)) {
								const t = {
									[n]: {
										goldSubreddit: !0
									}
								};
								return x()({
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
					case In.c: {
						const {
							subredditDescription: n,
							subredditName: r,
							isContributorRequestsDisabled: s,
							isContributorRequestTimestamp: a,
							subredditId: o
						} = t.payload;
						if (r) {
							if (Object(vn.a)(e, r)) {
								const t = {
									[r]: {
										privateSubreddit: !0,
										subredditDescription: n,
										isContributorRequestsDisabled: s,
										isContributorRequestTimestamp: a,
										subredditId: o
									}
								};
								return x()({
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
					case In.g: {
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
								...Object(vn.a)(e, n) || {},
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: r,
								quarantineMessage: s,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: o
							}
						} : e
					}
					case In.a: {
						const {
							interstitialWarningMessage: n,
							interstitialWarningMessageHtml: r,
							interstitialWarningMessageRTJson: s,
							subredditName: a
						} = t.payload;
						return a ? {
							...e,
							[a]: {
								...Object(vn.a)(e, a) || {},
								interstitialWarningMessage: n,
								interstitialWarningMessageHtml: r,
								interstitialWarningMessageRTJson: s
							}
						} : e
					}
					case In.k: {
						const {
							subredditName: n,
							banMessage: r
						} = t.payload;
						if (n) {
							if (Object(vn.a)(e, n)) {
								const t = {
									[n]: {
										subredditBanned: !0,
										subredditBanMessage: r
									}
								};
								return x()({
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
					case In.l: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(vn.a)(e, n)) {
								const t = {
									[n]: {
										subredditBlockedForLegalReason: !0
									}
								};
								return x()({
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
					case In.m: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(vn.a)(e, n)) {
								const t = {
									[n]: {
										subredditDoesNotExist: !0
									}
								};
								return x()({
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
					case In.d:
					case In.e:
					case In.f: {
						const {
							profileName: n
						} = t.payload, r = Le.kc + n.toLocaleLowerCase(), s = Object(vn.a)(e, r) || {}, a = {
							profileDeleted: t.type === In.e,
							profileSuspended: t.type === In.f,
							profileBlockedForLegalReason: t.type === In.d
						};
						return {
							...e,
							[r]: {
								...s,
								...a
							}
						}
					}
					case Sn.q:
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
			const Tn = {};
			var Dn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.y:
						case F.b:
						case F.f:
							return {
								...e, ...t.payload.continueThreads
							};
						default:
							return e
					}
				},
				An = Object(S.c)({
					models: Dn
				}),
				Pn = n("./src/reddit/actions/cooldownTime.ts");
			var Cn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pn.b:
					case Pn.c:
						return null;
					case Pn.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Rn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pn.b:
							return !0;
						case Pn.a:
						case Pn.c:
							return !1;
						default:
							return e
					}
				},
				Nn = Object(S.c)({
					error: Cn,
					pending: Rn
				});
			var kn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pn.d: {
							const {
								expiresAt: n
							} = t.payload;
							return "number" == typeof n && n !== e ? n : e
						}
						default:
							return e
					}
				},
				xn = Object(S.c)({
					api: Nn,
					expiresAt: kn
				}),
				Ln = n("./src/reddit/actions/postCollection/constants.ts");
			var Un = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c:
					case Ln.d:
					case Ln.c:
					case Ln.s:
					case Ln.r:
						return null;
					case Ln.b:
					case Ln.n:
						return t.payload;
					default:
						return e
				}
			};
			var Mn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ln.c:
						case Ln.r:
							return !0;
						case Ln.d:
						case Ln.b:
						case Ln.s:
						case Ln.n:
							return !1;
						default:
							return e
					}
				},
				Gn = Object(S.c)({
					error: Un,
					pending: Mn
				}),
				Fn = Object(S.c)({
					createOrUpdate: Gn
				}),
				Bn = n("./src/reddit/actions/postDraft.ts");
			const qn = {};
			var Vn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bn.c:
					case Bn.b: {
						const {
							draftId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Bn.a: {
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
			const Wn = {};
			var Hn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bn.b: {
							const {
								draftId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Bn.c:
						case Bn.a: {
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
				Qn = Object(S.c)({
					error: Vn,
					pending: Hn
				});
			var $n = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bn.d:
						return t.payload;
					case Bn.f:
					case Bn.e:
						return null;
					default:
						return e
				}
			};
			var Kn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bn.f:
							return !0;
						case Bn.e:
						case Bn.d:
							return !1;
						default:
							return e
					}
				},
				zn = Object(S.c)({
					error: $n,
					pending: Kn
				});
			const Yn = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var Xn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bn.l:
					case Bn.j:
						return Yn;
					case Bn.i: {
						const e = t.payload;
						return {
							...Yn,
							apiError: e
						}
					}
					case Bn.m: {
						const e = t.payload;
						return {
							...Yn,
							validationError: e
						}
					}
					case Bn.k: {
						const e = t.payload;
						return {
							...Yn,
							submitValidationError: e
						}
					}
					case Bn.h:
						return {
							...Yn, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var Jn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bn.j:
							return !0;
						case Bn.l:
						case Bn.i:
						case Bn.m:
						case Bn.k:
						case Bn.h:
							return !1;
						default:
							return e
					}
				},
				Zn = Object(S.c)({
					error: Xn,
					pending: Jn
				}),
				er = Object(S.c)({
					deleteDraft: Qn,
					listing: zn,
					save: Zn
				}),
				tr = n("./src/reddit/actions/postCreation/constants.ts");
			const nr = {};
			var rr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nr,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.G: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case tr.p: {
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
				sr = Object(S.c)({
					pending: rr
				});
			var ar = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.u:
					case tr.v:
					case tr.d:
					case tr.e:
					case tr.f:
					case tr.i:
					case tr.j:
					case tr.n:
					case tr.O:
						return null;
					case tr.t:
						return t.payload;
					default:
						return e
				}
			};
			var or = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.u:
							return !0;
						case tr.v:
						case tr.t:
							return !1;
						default:
							return e
					}
				},
				cr = Object(S.c)({
					error: ar,
					pending: or
				}),
				dr = Object(S.c)({
					converting: sr,
					mediaUpload: cr
				});
			const ir = {};
			var ur = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ir,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Re.PAGE_LOADED:
					case Re.PAGE_PENDING: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Re.PAGE_FAILED: {
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
			const lr = {};
			var pr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Re.PAGE_PENDING: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case Re.PAGE_LOADED: {
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
			const br = {};
			var fr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : br,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Re.PAGE_PENDING: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Re.PAGE_LOADED:
						case Re.PAGE_FAILED: {
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
				hr = Object(S.c)({
					error: ur,
					fetched: pr,
					pending: fr
				}),
				yr = n("./src/reddit/actions/scheduledPosts/constants.ts");
			const gr = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var mr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.P:
					case yr.h:
					case yr.k:
					case yr.b:
					case yr.d:
					case tr.w:
					case tr.c:
					case tr.d:
					case tr.e:
					case tr.f:
					case tr.i:
					case tr.j:
					case tr.n:
					case tr.O:
					case tr.E:
						return gr;
					case tr.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return n ? gr : e
					}
					case tr.o: {
						const e = t.payload;
						return {
							...gr,
							apiError: e
						}
					}
					case tr.db: {
						const e = t.payload;
						return {
							...gr,
							validationError: e
						}
					}
					case tr.K:
					case tr.J: {
						const e = t.payload;
						return {
							...gr,
							submitValidationError: e
						}
					}
					case tr.a:
						return {
							...gr, needsCaptcha: !0
						};
					case tr.y:
						return {
							...gr, pollError: t.payload
						};
					default:
						return e
				}
			};
			var vr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.w:
							return !0;
						case tr.P:
						case yr.h:
						case tr.o:
						case tr.db:
						case tr.J:
						case tr.K:
						case tr.y:
						case tr.a:
							return !1;
						default:
							return e
					}
				},
				Or = Object(S.c)({
					error: mr,
					pending: vr
				});
			var Er = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.x:
					case tr.H:
						return null;
					case tr.m:
						return t.payload;
					default:
						return e
				}
			};
			var _r = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.x:
							return !0;
						case tr.m:
						case tr.l:
							return !1;
						default:
							return e
					}
				},
				Ir = Object(S.c)({
					error: Er,
					pending: _r
				}),
				Sr = Object(S.c)({
					submit: Or,
					update: Ir
				});
			var jr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.O:
					case tr.M:
					case tr.N:
						return null;
					default:
						return e
				}
			};
			var wr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.N:
							return !0;
						case tr.M:
						case tr.O:
							return !1;
						default:
							return e
					}
				},
				Tr = Object(S.c)({
					error: jr,
					pending: wr
				}),
				Dr = Object(S.c)({
					change: Tr
				}),
				Ar = Object(S.c)({
					collection: Fn,
					draft: er,
					editor: dr,
					page: hr,
					post: Sr,
					subreddit: Dr
				}),
				Pr = n("./node_modules/lodash/omit.js"),
				Cr = n.n(Pr),
				Rr = n("./src/reddit/actions/pages/postDraft.ts");
			const Nr = {};
			var kr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bn.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Nr
					}
					case Bn.c: {
						const n = e,
							{
								draftId: r
							} = t.payload;
						return Cr()(n, r)
					}
					case tr.P: {
						const {
							draftId: n
						} = t.payload;
						return n ? Cr()(e, n) : e
					}
					case Rr.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const xr = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Lr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				},
				Ur = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
				};
			var Mr = n("./src/reddit/models/PostDraft/index.ts");
			var Gr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.d:
							return t.payload || "";
						case tr.E:
							return "";
						case u.b: {
							if (xr(t) !== Le.Nb.POST_CREATION) return "";
							const n = Lr(t);
							return n && n.url ? n.url || "" : e
						}
						case Bn.g: {
							const e = t.payload;
							return e.kind === Mr.b.Link && e.body || ""
						}
						case yr.b:
						case yr.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Fr = n("./src/reddit/models/PostCreationForm/index.ts"),
				Br = n("./src/reddit/models/ScheduledPost/index.ts");
			const qr = e => e ? e.replace(/\+/g, " ") : "";
			var Vr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.e:
						return t.payload || "";
					case tr.E:
					case tr.I:
						return "";
					case tr.Q:
						return t.payload.editorMode === Fr.i.MARKDOWN ? t.payload.content || "" : e;
					case u.b: {
						if (xr(t) !== Le.Nb.POST_CREATION) return "";
						const n = Lr(t);
						return n && n.text ? qr(n.text) : e
					}
					case Bn.g: {
						const e = t.payload;
						return e.kind === Mr.b.Markdown && e.body || ""
					}
					case yr.b:
					case yr.n: {
						const e = t.payload;
						return e.contentType === Br.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Wr = {
				items: [],
				selectedKey: null
			};
			var Hr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wr,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.f:
							return t.payload || Wr;
						case tr.E:
							return Wr;
						case u.b:
							return xr(t) !== Le.Nb.POST_CREATION ? Wr : e;
						case Bn.g:
							return Wr;
						case yr.b:
						case yr.n:
							return Wr;
						default:
							return e
					}
				},
				Qr = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				$r = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Kr = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const zr = Qr.a.createInitial;
			var Yr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zr(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case tr.E:
							return Qr.a.createInitial();
						case tr.Q: {
							const n = t.payload;
							return n.editorMode === Fr.i.RICH_TEXT && n.editorKey === Fr.h.POST_CREATION ? Qr.a.createInitial(n.content) : e
						}
						case u.b:
							return xr(t) !== Le.Nb.POST_CREATION ? Qr.a.createInitial() : e;
						case Bn.g: {
							const e = t.payload;
							return e.kind === Mr.b.RichText ? Qr.a.createInitial(e.body) : Qr.a.createInitial()
						}
						case yr.b:
						case yr.n: {
							const e = t.payload,
								n = Object($r.c)(e.mediaAssets);
							return Qr.a.createInitial(e.contentType === Br.a.RTJSON ? Object(Kr.b)(e.body) : void 0, n || void 0)
						}
						default:
							return e
					}
				},
				Xr = Object(S.c)({
					link: Gr,
					markdown: Vr,
					media: Hr,
					rte: Yr
				});
			var Jr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.b:
							return t.payload || null;
						case tr.E:
						case Bn.g:
						case yr.b:
						case yr.n:
						case tr.O:
							return null;
						case u.b:
							return xr(t) === Le.Nb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				Zr = n("./src/reddit/selectors/scheduledPosts/index.ts");
			var es = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.c:
						return t.payload || null;
					case yr.b:
					case yr.n: {
						const e = t.payload;
						return Object(Zr.n)({
							scheduledPost: e
						}) || null
					}
					case tr.E:
						return null;
					case u.b:
						return xr(t) === Le.Nb.POST_CREATION ? e : null;
					case Bn.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var ts = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.q:
						return t.payload.type || null;
					case yr.b:
					case yr.n:
					case tr.i:
					case tr.E:
					case u.b:
						return null;
					default:
						return e
				}
			};
			var ns = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.S:
						return t.payload || !1;
					case yr.b:
					case yr.n:
						return "CHAT" === t.payload.discussionType;
					case tr.E:
						return !1;
					case u.b:
						return xr(t) === Le.Nb.POST_CREATION && e;
					case Bn.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var rs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.ab: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case tr.E:
						return !1;
					case u.b:
						return xr(t) === Le.Nb.POST_CREATION && e;
					case yr.b:
					case yr.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var ss = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.U:
						return t.payload || !1;
					case tr.E:
						return !1;
					case u.b:
						return xr(t) === Le.Nb.POST_CREATION && e;
					case Bn.g:
						return t.payload.isNSFW || !1;
					case yr.b:
					case yr.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var as = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.V:
						return t.payload || !1;
					case tr.E:
						return !1;
					case tr.O: {
						const {
							name: n
						} = t.payload;
						return !!n && e
					}
					case u.b:
						return xr(t) === Le.Nb.POST_CREATION && e;
					case Bn.g:
						return t.payload.isOriginalContent || !1;
					case yr.b:
					case yr.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var os = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.W:
						return t.payload || !1;
					case yr.b:
					case yr.n:
						return !!t.payload.poll;
					case tr.E:
						return !1;
					case u.b:
						return xr(t) === Le.Nb.POST_CREATION && e;
					default:
						return e
				}
			};
			var cs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.ab: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case tr.E:
						return !1;
					case u.b:
						return xr(t) === Le.Nb.POST_CREATION && e;
					case yr.b:
					case yr.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var ds = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yr.b:
					case yr.n:
					case tr.E:
						return !1;
					case Bn.n:
						return t.payload;
					case u.b:
						return xr(t) === Le.Nb.POST_CREATION && e;
					case Bn.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var is = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.X:
						return t.payload || !1;
					case tr.E:
						return !1;
					case u.b:
						return xr(t) === Le.Nb.POST_CREATION && e;
					case Bn.g:
						return t.payload.isSpoiler || !1;
					case yr.b:
					case yr.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var us = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case u.b:
					case tr.i:
					case tr.q:
					case tr.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var ls = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case u.b:
					case tr.i:
					case tr.q:
					case tr.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var ps = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.N:
						case tr.O:
							return t.payload;
						case tr.M:
						case u.b:
							return null;
						default:
							return e
					}
				},
				bs = n("./src/reddit/actions/polls.ts");
			var fs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bs.a:
							return {
								...t.payload
							};
						case yr.b:
						case yr.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case d.h:
						case tr.E:
							return null;
						case u.b:
							return xr(t) !== Le.Nb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				hs = n("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				ys = n("./src/reddit/helpers/scheduledPosts/index.ts");
			var gs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r, s, a;
				switch (t.type) {
					case tr.ab: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case tr.E:
					case Bn.g:
					case tr.O:
						return null;
					case u.b:
						if (xr(t) === Le.Nb.POST_CREATION) {
							const o = null === (a = (null !== (s = null === (r = null === (n = t.payload) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.match.queryParams) && void 0 !== s ? s : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (o && Object(Br.n)(o)) {
								const t = Object(hs.c)();
								return {
									...e,
									...t,
									frequencyOption: o,
									recurrenceInfo: {
										...hs.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(hs.b)(new Date(t.submitDate), o)
									}
								}
							}
							return e
						}
						return null;
					case yr.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case yr.b: {
						const e = t.payload;
						return {
							...Object(ys.h)(e)
						}
					}
					default:
						return e
				}
			};
			var ms = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				const {
					type: n,
					payload: r
				} = t;
				switch (n) {
					case tr.Y:
						return r || !1;
					case u.b:
						return xr(t) === Le.Nb.POST_CREATION && e;
					case yr.b:
					case yr.n:
					case Bn.g:
						return !1;
					default:
						return e
				}
			};
			var vs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.g:
						return t.payload || "";
					case u.b:
						return xr(t) !== Le.Nb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var Os = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b:
						return xr(t) !== Le.Nb.POST_CREATION ? null : e;
					case tr.E:
						return null;
					case yr.b:
					case yr.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var Es = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.E:
						return !0;
					case tr.Z:
						return t.payload;
					case u.b:
						return xr(t) !== Le.Nb.POST_CREATION || e;
					case Bn.g:
						return t.payload.sendReplies;
					case yr.b:
					case yr.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var _s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.ab: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case tr.E:
					case Bn.g:
					case tr.O:
						return null;
					case u.b:
						return xr(t) === Le.Nb.POST_CREATION ? e : null;
					case yr.b:
					case yr.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const Is = Le.Wb.POST;
			var Ss = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Is,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.E:
						return Is;
					case tr.r:
						return Le.Wb.CROSSPOST;
					case tr.i:
						return t.payload.submissionType || Is;
					case u.b: {
						if (xr(t) !== Le.Nb.POST_CREATION) return Is;
						const n = Lr(t);
						if (!n) return e;
						const {
							title: r = "",
							url: s,
							text: a = "",
							media: o = !1,
							selftext: c = !1,
							type: d = ""
						} = n, i = r && !a && !c;
						return o ? Le.Wb.MEDIA : void 0 !== s || i ? Le.Wb.LINK_ONLY : a || c ? Le.Wb.POST : d === Le.xb ? Le.Wb.POLL : e
					}
					case Bn.g: {
						const e = t.payload;
						return Mr.a[e.kind]
					}
					case yr.b:
					case yr.n: {
						const e = t.payload;
						return e.poll ? Le.Wb.POLL : e.url ? Le.Wb.LINK_ONLY : Le.Wb.POST
					}
					default:
						return e
				}
			};
			var js = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.ab: {
						const {
							suggestedSort: e
						} = t.payload;
						return e || null
					}
					case tr.E:
					case Bn.g:
					case tr.O:
						return null;
					case u.b:
						return xr(t) === Le.Nb.POST_CREATION ? e : null;
					case yr.b:
					case yr.n:
						return t.payload.suggestedCommentSort || null;
					default:
						return e
				}
			};
			const ws = {
				theme: n("./src/reddit/models/Talk/index.ts").a.PERIWINKLE,
				topics: []
			};
			var Ts = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ws,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.bb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Ds = n("./src/reddit/models/Poll/index.ts");
			const As = e => e ? e.replace(/\+/g, " ") : "",
				Ps = e => `Should ${e||"username"} become the top moderator?`,
				Cs = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Rs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.r:
						return t.payload.postTitle || "";
					case tr.j:
						return t.payload || "";
					case tr.D: {
						const {
							title: n
						} = t.payload;
						return e || (n || "")
					}
					case tr.E:
						return "";
					case u.b: {
						if (xr(t) !== Le.Nb.POST_CREATION) return "";
						const n = Lr(t);
						return n && n.title ? As(n.title) : e
					}
					case Bn.g:
						return t.payload.title;
					case tr.q: {
						const {
							oldType: n,
							type: r
						} = t.payload;
						return r === Ds.a.ReplaceTopMod ? Ps("") : r === Ds.a.Spinoff ? Cs("") : n === Ds.a.ReplaceTopMod || n === Ds.a.Spinoff ? "" : e
					}
					case d.c: {
						const {
							username: e
						} = t.payload;
						return Ps(e)
					}
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return Cs(e)
					}
					case tr.i: {
						const {
							extra: n
						} = t.payload;
						return !n || n.govType !== Ds.a.ReplaceTopMod && n.govType !== Ds.a.Spinoff ? e : ""
					}
					case yr.b:
					case yr.n:
						return t.payload.title;
					default:
						return e
				}
			};
			const Ns = {
				name: "",
				theme: "theme_1",
				token: null
			};
			var ks = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ns,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.cb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				xs = Object(S.c)({
					body: Xr,
					eventSchedule: Jr,
					flair: es,
					govType: ts,
					isChatPost: ns,
					isContestMode: rs,
					isNSFW: ss,
					isOC: as,
					isPostAsMetaMod: cs,
					isPoll: os,
					isPublicLink: ds,
					isSpoiler: is,
					newSubreddit: us,
					newTopMod: ls,
					nextSubreddit: ps,
					polls: fs,
					postSchedule: gs,
					postToTwitter: ms,
					recaptcha: vs,
					scheduledPostId: Os,
					sendReplies: Es,
					stickyPosition: _s,
					submissionType: Ss,
					suggestedSort: js,
					title: Rs,
					tournament: ks,
					talk: Ts
				});
			const Ls = e => e ? e.replace(/\+/g, " ") : "";
			var Us = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b: {
						if (xr(t) !== Le.Nb.POST_CREATION) return null;
						const n = Lr(t);
						return n && n.text && Ls(n.text) ? Fr.i.MARKDOWN : e
					}
					case tr.H: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case tr.I:
						return null;
					case tr.Q: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case yr.b:
					case yr.n:
						return t.payload.contentType === Br.a.RTJSON ? Fr.i.RICH_TEXT : Fr.i.MARKDOWN;
					default:
						return e
				}
			};
			const Ms = {
					title: [],
					body: [],
					link: [],
					flair: []
				},
				Gs = (e, t) => {
					const n = (t.fields || []).filter(e => {
						let {
							field: t
						} = e;
						return Object(Fr.w)(t)
					});
					if (!n.length) return e;
					const r = n.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
					return {
						...e,
						...r
					}
				};
			var Fs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ms,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.c:
					case tr.d:
					case tr.e:
						return e[Le.wb.BODY] ? {
							...e,
							[Le.wb.BODY]: []
						} : e;
					case tr.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return e[Le.wb.BODY] && n ? {
							...e,
							[Le.wb.BODY]: []
						} : e
					}
					case tr.j:
						return e[Le.wb.TITLE] ? {
							...e,
							[Le.wb.TITLE]: []
						} : e;
					case tr.L: {
						const n = t.payload;
						return {
							...e,
							[n]: []
						}
					}
					case tr.n: {
						const n = t.payload;
						return n ? {
							...e,
							[n]: []
						} : Ms
					}
					case tr.K:
					case tr.J: {
						const n = t.payload;
						return Gs(e, n)
					}
					case u.b:
						return xr(t) !== Le.Nb.POST_CREATION ? Ms : e;
					default:
						return e
				}
			};
			var Bs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.b:
					case tr.c:
					case tr.d:
					case tr.e:
					case tr.f:
					case tr.j:
					case tr.i:
					case tr.U:
					case tr.V:
					case tr.X:
					case Bn.n:
					case tr.Z:
					case tr.ab:
						return !0;
					case tr.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return !!n || e
					}
					case tr.P:
					case yr.h:
						return !1;
					case tr.R:
						return t.payload;
					case u.b:
						return xr(t) === Le.Nb.POST_CREATION && e;
					case tr.E:
					case Bn.l:
					case Bn.g:
						return !1;
					default:
						return e
				}
			};
			const qs = Fr.r.Post;
			var Vs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.w:
							return Fr.r.Post;
						case tr.F:
							return t.payload;
						case Bn.j:
							return Fr.r.Draft;
						case u.b:
							return xr(t) !== Le.Nb.POST_CREATION ? qs : e;
						default:
							return e
					}
				},
				Ws = Object(S.c)({
					editorMode: Us,
					fieldValidation: Fs,
					isChanged: Bs,
					submitMode: Vs
				});
			var Hs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.H:
						return t.payload.editorMode === Fr.i.MARKDOWN ? t.payload.postContent || "" : e;
					case tr.I:
						return "";
					case tr.Q:
						return t.payload.editorMode === Fr.i.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const Qs = Qr.a.createInitial;
			var $s = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qs(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.I:
							return Qr.a.createInitial();
						case tr.H: {
							const n = t.payload;
							return n.editorMode === Fr.i.RICH_TEXT && "object" == typeof n.postContent ? Qr.a.createInitial(n.postContent, n.mediaMetadata) : e
						}
						case tr.Q: {
							const n = t.payload;
							return n.editorMode === Fr.i.RICH_TEXT && n.editorKey === Fr.h.POST_EDITING ? Qr.a.createInitial(n.content) : e
						}
						default:
							return e
					}
				},
				Ks = Object(S.c)({
					markdown: Hs,
					rte: $s
				});
			var zs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.H: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case tr.I:
							return null;
						default:
							return e
					}
				},
				Ys = Object(S.c)({
					draft: Ks,
					postId: zs
				});
			var Xs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.C:
					case tr.B:
						return !1;
					case tr.z:
						return !0;
					default:
						return e
				}
			};
			var Js = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.z:
						case tr.B:
							return !1;
						case tr.C:
							return !0;
						default:
							return e
					}
				},
				Zs = Object(S.c)({
					error: Xs,
					pending: Js
				});
			var ea = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.A: {
						const {
							isChanged: e
						} = t.payload;
						return e
					}
					case tr.j:
					case tr.d:
					case tr.e:
					case tr.i:
					case tr.r:
					case Bn.g:
						return !0;
					case tr.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return !!n || e
					}
					default:
						return e
				}
			};
			const ta = {};
			var na = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ta,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tr.B: {
						const {
							recSubsDict: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const ra = [];
			var sa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ra,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tr.B: {
							const {
								recSubsOrder: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				aa = Object(S.c)({
					api: Zs,
					isInputChanged: ea,
					model: na,
					order: sa
				}),
				oa = Object(S.c)({
					api: Ar,
					drafts: kr,
					formData: xs,
					formState: Ws,
					postEditing: Ys,
					subredditRec: aa
				}),
				ca = n("./src/reddit/actions/dashboard/constants.ts");
			const da = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var ia = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : da,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ca.a:
						return {
							...e, selectedComponent: t.payload
						};
					case ca.d: {
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
					case ca.c: {
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
			var ua = function() {
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
			var la = function() {
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
			var pa = function() {
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
				ba = Object(S.c)({
					error: ua,
					loaded: la,
					pending: pa
				}),
				fa = Object(S.c)({
					list: ba
				}),
				ha = n("./node_modules/lodash/isEmpty.js"),
				ya = n.n(ha);
			const ga = {};
			var ma = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ga,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							return ya()(n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				va = n("./node_modules/lodash/forOwn.js"),
				Oa = n.n(va),
				Ea = n("./src/reddit/helpers/name/index.ts");
			const _a = {};
			var Ia = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							if (ya()(n)) return e;
							const r = {};
							return Oa()(n, e => {
								r[Object(Ea.h)(e.unitName)] = e.id
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				Sa = Object(S.c)({
					api: fa,
					models: ma,
					nameToId: Ia
				}),
				ja = n("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const wa = [];
			var Ta = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ja.a: {
							const {
								subredditId: n
							} = t.payload;
							return [...e, n]
						}
						default:
							return e
					}
				},
				Da = n("./src/reddit/actions/economics/banners/constants.ts");
			const Aa = {
				dismissedBanners: {}
			};
			var Pa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Aa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Da.c: {
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
						case Da.d: {
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
						case Da.a:
						case Da.b: {
							const {
								subredditId: n,
								bannerType: r
							} = t.payload, s = e.dismissedBanners[n] || {}, a = t.type === Da.a;
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
				Ca = n("./src/reddit/models/Badge/managementPage.ts");
			const Ra = {
				badgeType: Ca.a.Cosmetic,
				view: Ca.c.Gallery
			};
			var Na = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ra,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.c: {
						const {
							badge: n,
							initialView: r
						} = t.payload;
						return n || r ? {
							...e,
							badgeType: n ? Object(Ca.d)(n.placement) : e.badgeType,
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
						return Ra;
					default:
						return e
				}
			};
			var ka = function() {
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
				xa = n("./src/reddit/actions/economics/powerups/constants.ts");

			function La(e, t) {
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

			function Ua(e) {
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
						emotes: s.map(e => La(e, t))
					}
				}), n
			}
			const Ma = {};

			function Ga(e, t, n) {
				if (!e[t]) return e;
				const r = e[t].findIndex(e => e.title === t);
				return -1 === r ? e : {
					...e,
					[t]: e[t].map((e, s) => s !== r ? e : {
						title: e.title,
						emotes: {
							...e.emotes,
							[n.name]: La(n, t)
						}
					})
				}
			}
			var Fa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ma,
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
					case ee.ob: {
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
					case xa.b: {
						const {
							subredditId: n,
							emoji: r
						} = t.payload;
						return Ga(e, n, r)
					}
					default:
						return e
				}
			};
			const Ba = {};
			var qa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ba,
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
				Va = n("./src/reddit/actions/economics/me/constants.ts");
			const Wa = {
				fetched: !1,
				data: {}
			};
			var Ha = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Va.a:
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
				Qa = n("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const $a = {
				fetched: !1,
				data: null
			};
			var Ka = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Va.b:
							return {
								fetched: !0, data: e.data
							};
						case Va.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				za = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Ya = Object(S.c)({
					banners: Pa,
					currentBadgeManagementScreen: Na,
					currentModalArgs: ka,
					emotes: Fa,
					gifs: qa,
					me: Ha,
					paymentSystems: Qa.b,
					pointsCopy: Ka,
					subredditPremium: za.b
				}),
				Xa = n("./src/reddit/actions/emailVerificationTooltip.ts");
			const Ja = {
				isShowing: !1,
				triggerSource: "none"
			};
			var Za = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ja,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xa.b:
							return {
								...e, isShowing: !e.isShowing
							};
						case Xa.a:
							return {
								...e, triggerSource: t.payload
							};
						default:
							return e
					}
				},
				eo = n("./src/reddit/actions/emoji.ts");
			const to = {};
			var no = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : to,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eo.h: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case eo.g:
						case eo.f: {
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
				ro = Object(S.c)({
					pending: no
				}),
				so = Object(S.c)({
					list: ro
				});
			const ao = {};
			var oo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ao,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eo.f:
						case eo.c:
							return e;
						case eo.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case eo.d: {
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
						case eo.i: {
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
						case eo.e: {
							const {
								emojiName: n,
								isSnoomoji: r,
								settings: s,
								subredditId: a
							} = t.payload, o = r ? "snoomojis" : "emojis", c = e[a][o], d = {
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
									[o]: d
								}
							}
						}
						default:
							return e
					}
				},
				co = Object(S.c)({
					api: so,
					models: oo
				}),
				io = n("./src/reddit/actions/experiments.ts");
			const uo = /^experiment_(.*)$/i,
				lo = e => {
					const t = e.match(uo);
					if (null !== t) return t[1]
				},
				po = {};
			var bo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : po,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.b: {
							const n = Lr(t);
							if (!n) return e;
							const r = {};
							for (const e in n) {
								const t = lo(e);
								t && (r[t.toLowerCase()] = n[e] || "")
							}
							return ya()(r) ? e : {
								...e,
								...r
							}
						}
						case io.b: {
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
				fo = n("./src/reddit/actions/externalAccount.ts");
			const ho = {};
			var yo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ho,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fo.e:
					case fo.f: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case fo.d: {
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
			const go = {};
			var mo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : go,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fo.e: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case fo.f:
						case fo.d: {
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
				vo = Object(S.c)({
					error: yo,
					pending: mo
				});
			const Oo = {};
			var Eo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fo.l:
					case fo.k: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case fo.j: {
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
			const _o = {};
			var Io = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fo.b: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case fo.c:
						case fo.a: {
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
				So = Object(S.c)({
					error: Eo,
					pending: Io
				});
			const jo = {};
			var wo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fo.i:
					case fo.h: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case fo.g: {
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
			const To = {};
			var Do = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : To,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fo.h: {
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
			const Ao = {};
			var Po = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ao,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fo.i: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case fo.h:
						case fo.g: {
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
				Co = Object(S.c)({
					error: wo,
					fetched: Do,
					pending: Po
				});
			const Ro = {};
			var No = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ro,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fo.l:
					case fo.k: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case fo.j: {
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
			const ko = {};
			var xo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ko,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fo.l: {
							const {
								username: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case fo.k:
						case fo.j: {
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
				Lo = Object(S.c)({
					error: No,
					pending: xo
				}),
				Uo = Object(S.c)({
					connect: vo,
					disconnect: So,
					user: Lo,
					subreddit: Co
				});
			const Mo = {};
			var Go = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fo.h: {
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
			const Fo = {};
			var Bo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fo.k: {
							const {
								username: n,
								accountsData: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case fo.c: {
							const {
								username: n,
								provider: r
							} = t.payload, s = e[n];
							return s && s[r] ? {
								...e,
								[n]: Cr()(s, r)
							} : e
						}
						default:
							return e
					}
				},
				qo = Object(S.c)({
					api: Uo,
					user: Bo,
					subreddit: Go
				}),
				Vo = n("./src/reddit/featureFlags/index.ts");
			const Wo = new Set(["0", "disabled", "false", "off", ""]);
			var Ho = e => !Wo.has(e.toLowerCase());
			const Qo = Vo.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				$o = Vo.a.reduce((e, t) => (e[t] = null, e), {});
			var Ko = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.b: {
							const n = Lr(t);
							if (void 0 !== n) {
								const t = {};
								for (const e in n) {
									const r = Object(Vo.g)(e);
									if (r) {
										const s = Qo[r.toLowerCase()];
										if (s) {
											const r = n[e],
												a = "string" != typeof r || Ho(r);
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
						case Vo.b: {
							const {
								featureName: n,
								currentValue: r
							} = t.payload;
							return r === e[n] ? e : {
								...e,
								[n]: r
							}
						}
						case Vo.c: {
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
				zo = Object(S.c)({
					overrides: Ko
				}),
				Yo = n("./src/reddit/actions/focusedVerticals/constants.ts");
			const Xo = {
				focusedVerticalGqlError: null
			};
			var Jo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Yo.h:
					case Yo.g:
					case Yo.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case Yo.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const Zo = {
				focusedVerticalGqlPending: !1
			};
			var ec = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Yo.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case Yo.e:
						case Yo.g:
						case Yo.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				tc = Object(S.c)({
					error: Jo,
					pending: ec
				});
			var nc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Yo.g:
					case Yo.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const rc = {
				dismissed: !0
			};
			var sc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Yo.j:
						return {
							dismissed: !1
						};
					case Yo.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var ac = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Yo.g:
					case Yo.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var oc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Yo.g:
					case Yo.c:
					case Yo.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var cc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Yo.g:
						case Yo.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				dc = Object(S.c)({
					api: tc,
					components: sc,
					interactedSubredditIds: ac,
					recommendedSubredditIds: cc,
					category: nc,
					lastLoadedEnv: oc
				});
			Object(xe.a)("FONTS_FONT_FILES_PARSED");
			const ic = [];
			var uc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ic,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var lc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.p:
						return t.payload;
					case ee.e:
					case u.b:
					case ee.K:
					case ee.s:
						return null;
					default:
						return e
				}
			};
			var pc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.e:
					case u.b:
					case ee.s:
					case ee.p:
						return !1;
					case ee.q:
						return !0;
					default:
						return e
				}
			};
			var bc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.q:
						case ee.e:
						case u.b:
						case ee.s:
						case ee.p:
							return !1;
						case ee.u:
							return !0;
						default:
							return e
					}
				},
				fc = Object(S.c)({
					error: lc,
					pending: pc,
					showLoader: bc
				});
			var hc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var yc = function() {
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
			var gc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				const n = t.payload;
				switch (t.type) {
					case ee.J:
					case ee.K:
						return n.thingId;
					case ee.s:
					case u.b:
					case ee.e:
						return null;
					default:
						return e
				}
			};
			var mc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.r:
						return t.payload;
					case ee.K:
						return !1;
					default:
						return e
				}
			};
			var vc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.J:
						return !0;
					default:
						return e
				}
			};
			var Oc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.v:
						return t.payload;
					case ee.K:
						return "";
					default:
						return e
				}
			};
			const Ec = Se.n;
			var _c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ec,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.lb:
							return t.payload;
						case ee.K: {
							const {
								award: e
							} = t.payload;
							return e || Ec
						}
						default:
							return e
					}
				},
				Ic = Object(S.c)({
					api: fc,
					correlationId: hc,
					gildModalThingId: gc,
					isAnonymous: mc,
					isIframed: vc,
					message: Oc,
					gildedThing: yc,
					selectedAward: _c
				});
			var Sc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.w:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg || "An unknown error occurred";
					case ee.f:
					case u.b:
					case ee.L:
					case ee.B:
						return null;
					default:
						return e
				}
			};
			var jc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.f:
						case u.b:
						case ee.B:
						case ee.w:
							return !1;
						case ee.x:
							return !0;
						default:
							return e
					}
				},
				wc = Object(S.c)({
					error: Sc,
					pending: jc
				});
			var Tc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.L: {
							const {
								profileName: e
							} = t.payload;
							return e
						}
						case u.b:
						case ee.f:
						case ee.B:
							return "";
						default:
							return e
					}
				},
				Dc = Object(S.c)({
					api: wc,
					givePremiumModalAccountName: Tc
				}),
				Ac = n("./src/reddit/actions/header.ts"),
				Pc = n("./src/reddit/actions/overlayEvents.ts");
			var Cc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ac.a:
							return !1;
						case Ac.b:
							return !0;
						case Ac.c:
							return !e;
						case Pc.b:
							return !1;
						default:
							return e
					}
				},
				Rc = Object(S.c)({
					isSubscriptionsDropdownOpen: Cc
				});
			var Nc = function() {
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
				kc = n("./src/reddit/actions/imageUploads.ts");
			const xc = {};
			var Lc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kc.d: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case kc.c:
					case kc.e:
					case kc.b: {
						const n = t.payload;
						return e[n.id] ? {
							...e,
							[n.id]: n
						} : e
					}
					case kc.a: {
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
			var Uc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case we.b: {
						const r = t.payload;
						return ya()(r) ? e : (null === (n = r.notifications) || void 0 === n ? void 0 : n.position) || null
					}
					default:
						return e
				}
			};
			const Mc = {
				notifications: null,
				id: null
			};
			var Gc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r;
					switch (t.type) {
						case we.b: {
							const s = t.payload;
							return ya()(s) ? e : {
								...e,
								notifications: (null === (n = s.notifications) || void 0 === n ? void 0 : n.notifications) || null,
								id: null === (r = s.notifications) || void 0 === r ? void 0 : r.id
							}
						}
						default:
							return e
					}
				},
				Fc = n("./src/reddit/actions/inAppNotifications/constants.ts");
			var Bc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fc.a:
							return !0;
						default:
							return e
					}
				},
				qc = Object(S.c)({
					inFeedPosition: Uc,
					notifications: Gc,
					shouldHideInAppNotifications: Bc
				}),
				Vc = n("./src/reddit/actions/interceptedAction.ts");
			var Wc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vc.a:
							return t.payload;
						case Vc.b:
							return null;
						default:
							return e
					}
				},
				Hc = n("./src/reddit/actions/changeUsername.ts");
			var Qc = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Hc.a:
							return !1;
						case Hc.b:
							return !0;
						default:
							return e
					}
				},
				$c = n("./src/reddit/actions/moderatingSubreddits.ts");
			var Kc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $c.a: {
							if (e) return e;
							const n = t.payload;
							return Object.keys(n).some(e => !0 === n[e].posts)
						}
						case H.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case Re.PAGE_LOADED: {
							if (e) return e;
							const {
								payload: n
							} = t;
							return n.subredditPermissions && n.subreddits ? !!n.subredditPermissions.posts : e
						}
						case G.i:
						case G.f:
						case G.m:
						case G.p:
						case G.v: {
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
				zc = n("./src/reddit/actions/jsApi.ts");
			const Yc = [];
			var Xc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zc.a: {
							const n = t.payload;
							return -1 === e.indexOf(n) && (e = [...e, n]).sort(), e
						}
						default:
							return e
					}
				},
				Jc = n("./src/reddit/actions/langSite/index.ts");
			const Zc = {
				bannerClosedTime: 0
			};
			var ed = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jc.a:
							return {
								...e, bannerClosedTime: Date.now()
							};
						default:
							return e
					}
				},
				td = n("./src/reddit/actions/leaderboard/constants.ts");
			const nd = {};
			var rd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case td.a: {
						const {
							subredditId: n,
							data: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case td.b:
					case td.c: {
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
			const sd = {};
			var ad = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case td.a:
						case td.c: {
							const {
								subredditId: n
							} = t.payload, {
								[n]: r,
								...s
							} = e;
							return s
						}
						case td.b: {
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
				od = Object(S.c)({
					error: rd,
					pending: ad
				});
			const cd = {};
			var dd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case td.c: {
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
				id = Object(S.c)({
					api: od,
					models: dd
				});
			var ud = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b: {
						const {
							listingKey: n
						} = t.payload;
						return n || e
					}
					default:
						return e
				}
			};
			const ld = {};
			var pd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ld,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.d:
					case Ue.e:
					case W.b:
					case W.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Le.cc.Users) ? e : {
							...e,
							[n]: null
						}
					}
					case Ue.c:
					case W.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Le.cc.Users) || s && s.authors ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const bd = {};
			var fd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.d:
						case W.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Le.cc.Users) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ue.e:
						case Ue.c:
						case W.c:
						case W.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Le.cc.Users) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				hd = Object(S.c)({
					error: pd,
					pending: fd
				});
			const yd = {};
			var gd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Le.cc.Users)) return e;
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
			const md = {};
			var vd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : md,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.e: {
						const {
							key: n,
							authorOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(Le.cc.Users) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case W.c: {
						const {
							key: n,
							authorOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Le.cc.Users) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Od = {};
			var Ed = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Od,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.e:
						case W.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Le.cc.Users) ? e : r.authors ? {
								...e,
								[n]: {
									token: r.authors
								}
							} : Object(Rt.a)(e, n)
						}
						default:
							return e
					}
				},
				_d = Object(S.c)({
					api: hd,
					identifiers: vd,
					fetchedTokens: gd,
					loadMore: Ed
				});
			const Id = {};
			var Sd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Id,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.d:
					case Ue.e:
					case W.b:
					case W.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Le.cc.Comments) ? e : {
							...e,
							[n]: null
						}
					}
					case Ue.c:
					case W.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Le.cc.Comments) || s && s.comments ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const jd = {};
			var wd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.d:
						case W.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Le.cc.Comments) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ue.e:
						case Ue.c:
						case W.c:
						case W.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Le.cc.Comments) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Td = Object(S.c)({
					error: Sd,
					pending: wd
				});
			const Dd = {};
			var Ad = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Le.cc.Comments)) return e;
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
			const Pd = {};
			var Cd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.e: {
						const {
							key: n,
							commentOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(Le.cc.Comments) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case W.c: {
						const {
							key: n,
							commentOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Le.cc.Comments) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Rd = {};
			var Nd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.e:
						case W.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Le.cc.Comments) ? e : r.comments ? {
								...e,
								[n]: {
									token: r.comments
								}
							} : Object(Rt.a)(e, n)
						}
						default:
							return e
					}
				},
				kd = Object(S.c)({
					api: Td,
					identifiers: Cd,
					fetchedTokens: Ad,
					loadMore: Nd
				});
			const xd = {};
			var Ld = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.d:
					case Ue.e:
					case W.b:
					case W.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Le.cc.Subreddits) ? e : {
							...e,
							[n]: null
						}
					}
					case Ue.c:
					case W.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Le.cc.Subreddits) || s && s.communities ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Ud = {};
			var Md = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ud,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.d:
						case W.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Le.cc.Subreddits) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ue.e:
						case Ue.c:
						case W.c:
						case W.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Le.cc.Subreddits) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Gd = Object(S.c)({
					error: Ld,
					pending: Md
				});
			const Fd = {};
			var Bd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Le.cc.Subreddits)) return e;
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
			const qd = {};
			var Vd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.e: {
						const {
							key: n,
							communityOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(Le.cc.Subreddits) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case W.c: {
						const {
							key: n,
							communityOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Le.cc.Subreddits) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Wd = {};
			var Hd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.e:
						case W.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Le.cc.Subreddits) ? e : r.communities ? {
								...e,
								[n]: {
									token: r.communities
								}
							} : Object(Rt.a)(e, n)
						}
						default:
							return e
					}
				},
				Qd = Object(S.c)({
					api: Gd,
					identifiers: Vd,
					fetchedTokens: Bd,
					loadMore: Hd
				});
			const $d = {};
			var Kd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.d:
					case Ue.e:
					case W.b:
					case W.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Le.cc.Subreddits) && -1 === r.indexOf(Le.cc.Users) ? e : {
							...e,
							[n]: null
						}
					}
					case Ue.c:
					case W.a: {
						const {
							key: n,
							error: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Le.cc.Subreddits) && -1 === s.indexOf(Le.cc.Users) ? e : {
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
			const zd = {};
			var Yd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.d:
						case W.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Le.cc.Subreddits) && -1 === r.indexOf(Le.cc.Users) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ue.e:
						case Ue.c:
						case W.c:
						case W.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Le.cc.Subreddits) && -1 === r.indexOf(Le.cc.Users) ? e : {
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
				Xd = Object(S.c)({
					error: Kd,
					pending: Yd
				});
			const Jd = {};
			var Zd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Le.cc.Subreddits) && -1 === s.indexOf(Le.cc.Users)) return e;
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
			const ei = {};
			var ti = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ei,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.e: {
						const {
							key: n,
							listingOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Le.cc.Subreddits) && -1 === s.indexOf(Le.cc.Users) ? e : {
							...e,
							[n]: e[n].concat(r)
						}
					}
					case W.c: {
						const {
							key: n,
							listingOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Le.cc.Subreddits) && -1 === s.indexOf(Le.cc.Users) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const ni = {};
			var ri = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ni,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.e:
						case W.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Le.cc.Subreddits) && -1 === s.indexOf(Le.cc.Users) ? e : r.listings ? {
								...e,
								[n]: {
									token: r.listings
								}
							} : Object(Rt.a)(e, n)
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
				si = Object(S.c)({
					api: Xd,
					identifiers: ti,
					fetchedTokens: Zd,
					loadMore: ri
				});
			const ai = {};
			var oi = n("./src/reddit/actions/eventPosts/constants.ts"),
				ci = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				di = n("./src/reddit/actions/pages/topic.ts");
			const ii = {};
			var ui = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ii,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ae.c:
						case Ae.b:
						case Ae.g:
						case Ae.f:
						case we.c:
						case we.b:
						case Ce.c:
						case Ce.b:
						case H.SUBREDDIT_PENDING:
						case H.SUBREDDIT_LOADED:
						case we.g:
						case we.f:
						case Pe.e:
						case Pe.f:
						case Pe.i:
						case Pe.h:
						case De.s:
						case De.r:
						case ci.b:
						case ci.c:
						case q.PROFILE_POSTS_PENDING:
						case q.PROFILE_POSTS_LOADED:
						case q.MORE_POSTS_PENDING:
						case q.MORE_POSTS_LOADED:
						case Q.f:
						case Q.e:
						case Ne.f:
						case Ne.e:
						case $.j:
						case di.TOPIC_DATA_PENDING:
						case di.TOPIC_DATA_LOADED:
						case di.MORE_POSTS_PENDING:
						case di.MORE_POSTS_LOADED:
						case $.i:
						case oi.e:
						case oi.c:
						case oi.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: null
							}
						}
						case W.b:
						case W.c:
						case Ue.d:
						case Ue.e: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Le.cc.Posts) ? e : {
								...e,
								[n]: null
							}
						}
						case Ae.a:
						case Ae.e:
						case we.a:
						case Ce.a:
						case H.SUBREDDIT_FAILED:
						case we.e:
						case Pe.g:
						case De.q:
						case ci.a:
						case $.h:
						case Q.d:
						case Ne.d:
						case q.PROFILE_POSTS_FAILED:
						case q.MORE_POSTS_FAILED:
						case di.TOPIC_DATA_FAILED:
						case di.MORE_POSTS_FAILED:
						case oi.b: {
							const {
								key: n,
								error: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case W.a:
						case Ue.c: {
							const {
								error: n,
								key: r,
								success: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Le.cc.Posts) || s && s.posts ? e : {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				li = n("./src/reddit/actions/linkedPosts/constants.ts"),
				pi = n("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				bi = n("./src/reddit/actions/subreddit/constants.ts");
			const fi = {};
			var hi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ae.c:
						case Ae.g:
						case we.c:
						case Ce.c:
						case q.PROFILE_POSTS_PENDING:
						case Ne.f:
						case H.SUBREDDIT_PENDING:
						case we.g:
						case Pe.f:
						case Pe.i:
						case De.s:
						case ci.c:
						case Q.f:
						case q.MORE_POSTS_PENDING:
						case $.j:
						case di.MORE_POSTS_PENDING:
						case oi.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case W.b:
						case Ue.d: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Le.cc.Posts) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ae.b:
						case Ae.a:
						case Ae.f:
						case Ae.e:
						case we.b:
						case we.a:
						case Ce.a:
						case Ce.b:
						case Ne.d:
						case Ne.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED:
						case H.SUBREDDIT_LOADED:
						case H.SUBREDDIT_FAILED:
						case we.f:
						case we.e:
						case li.b:
						case li.c:
						case Pe.e:
						case Pe.d:
						case Pe.h:
						case Pe.g:
						case De.r:
						case De.q:
						case Q.d:
						case Q.e:
						case q.MORE_POSTS_FAILED:
						case q.MORE_POSTS_LOADED:
						case pi.a:
						case pi.b:
						case bi.j:
						case ci.b:
						case ci.a:
						case $.i:
						case $.h:
						case di.MORE_POSTS_LOADED:
						case di.MORE_POSTS_FAILED:
						case oi.c:
						case oi.b:
						case oi.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						case bi.r: {
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
						case W.c:
						case W.a:
						case Ue.e:
						case Ue.c: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Le.cc.Posts) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				yi = Object(S.c)({
					error: ui,
					pending: hi
				});
			const gi = {};
			var mi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case we.b:
						case H.SUBREDDIT_LOADED: {
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
				vi = n("./src/reddit/actions/postList.ts"),
				Oi = n("./node_modules/lodash/omitBy.js"),
				Ei = n.n(Oi);

			function _i(e, t) {
				return t = t.toLowerCase(), Ei()(e, (e, n) => n === t || n.startsWith(`${t}--[`))
			}
			const Ii = {};
			var Si = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ii,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vi.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case vi.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? Cr()(e, [n]) : e
					}
					case H.SUBREDDIT_INVALIDATE_LISTING:
						return _i(e, t.payload);
					default:
						return e
				}
			};
			const ji = {};
			var wi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ji,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ae.b:
						case Pe.e:
						case we.b:
						case Ce.b:
						case H.SUBREDDIT_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case di.TOPIC_DATA_LOADED: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: {}
							}
						}
						case Ae.f:
						case we.f:
						case Pe.h:
						case De.r:
						case Q.e:
						case q.MORE_POSTS_LOADED:
						case $.i:
						case di.MORE_POSTS_LOADED: {
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
						case Ue.e: {
							const {
								fetchedToken: n,
								key: r,
								type: s
							} = t.payload;
							if (s.indexOf(Le.cc.Posts) > -1) {
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
						case H.SUBREDDIT_INVALIDATE_LISTING:
							return _i(e, t.payload);
						default:
							return e
					}
				},
				Ti = n("./src/reddit/actions/post.ts");
			const Di = {};
			var Ai = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Di,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ae.c:
						case we.c:
						case Pe.f:
						case Ce.c:
						case q.PROFILE_POSTS_PENDING:
						case H.SUBREDDIT_PENDING:
						case Ne.f:
						case q.PROFILE_POSTS_PENDING:
						case di.TOPIC_DATA_PENDING: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: []
							}
						}
						case je.e:
						case li.c:
						case Pe.e:
						case pi.b:
						case we.b:
						case Ae.b:
						case Ce.b:
						case H.SUBREDDIT_LOADED:
						case bi.j:
						case ci.b:
						case Ne.e:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case di.TOPIC_DATA_LOADED:
						case oi.c: {
							const {
								key: n,
								postIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case bi.r: {
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
						case Ae.f:
						case we.f:
						case Pe.h:
						case De.r:
						case q.MORE_POSTS_LOADED:
						case Q.e:
						case $.i:
						case di.MORE_POSTS_LOADED:
						case oi.d: {
							const {
								key: n,
								postIds: r
							} = t.payload;
							return {
								...e,
								[n]: e[n].concat(r)
							}
						}
						case W.c: {
							const {
								key: n,
								postOrder: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Le.cc.Posts) ? e : {
								...e,
								[n]: r
							}
						}
						case Ue.e: {
							const {
								key: n,
								postOrder: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Le.cc.Posts) ? e : {
								...e,
								[n]: e[n].concat(r)
							}
						}
						case Ti.o: {
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
						case H.SUBREDDIT_INVALIDATE_LISTING:
							return _i(e, t.payload);
						default:
							return e
					}
				},
				Pi = n("./src/lib/makeListingKey/index.ts");
			const Ci = {};
			var Ri = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ci,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.SUBREDDIT_LOADED: {
						const {
							key: n,
							listingSort: r
						} = t.payload;
						return r && !Object(Pi.b)(n) ? {
							...e,
							[n]: {
								sort: r,
								hasChanged: !1
							}
						} : e
					}
					case Sn.a:
					case Sn.q: {
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
			const Ni = {};
			var ki = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ni,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ae.b:
					case Ae.f:
					case we.b:
					case Ce.b:
					case H.SUBREDDIT_LOADED:
					case Ne.e:
					case q.PROFILE_POSTS_LOADED:
					case we.f:
					case Pe.e:
					case Pe.h:
					case De.r:
					case Q.e:
					case q.MORE_POSTS_LOADED:
					case $.i:
					case di.TOPIC_DATA_LOADED:
					case di.MORE_POSTS_LOADED: {
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
						} : Object(Rt.a)(e, n)
					}
					case Ue.e:
					case W.c: {
						const {
							key: n,
							tokens: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Le.cc.Posts) ? e : r.posts ? {
							...e,
							[n]: {
								token: r.posts
							}
						} : Object(Rt.a)(e, n)
					}
					case H.SUBREDDIT_INVALIDATE_LISTING:
						return _i(e, t.payload);
					default:
						return e
				}
			};
			const xi = {};
			var Li = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oi.c:
						case oi.d: {
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
				Ui = Object(S.c)({
					api: yi,
					correlationIds: mi,
					endMarkers: Si,
					fetchedTokens: wi,
					ids: Ai,
					listingSort: Ri,
					loadMore: ki,
					pageInfo: Li,
					treatment: ((e, t) => (function() {
						let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ai,
							r = arguments.length > 1 ? arguments[1] : void 0;
						switch (r.type) {
							case W.c:
							case Ue.e: {
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
					}))(Le.cc.Posts, Le.bc.Posts)
				}),
				Mi = Object(S.c)({
					activeKey: ud,
					authorOrder: _d,
					commentOrder: kd,
					communityOrder: Qd,
					listingOrder: si,
					postOrder: Ui
				});
			var Gi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case we.b: {
						const n = t.payload;
						return ya()(n.announcements) ? e : n.announcements || null
					}
					default:
						return e
				}
			};
			var Fi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case we.b: {
						const n = t.payload;
						return ya()(n.featuredLiveThread) ? e : n.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Bi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case we.b:
						return !0;
					default:
						return e
				}
			};
			var qi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Vi = Object(S.c)({
					announcements: Gi,
					featured: Fi,
					isFrontpageLoaded: Bi,
					shouldShowAnnouncements: qi
				}),
				Wi = n("./src/reddit/actions/media.ts");
			const Hi = {},
				Qi = {};
			var $i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wi.b: {
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
			const Ki = {};
			var zi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ki,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wi.e: {
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
				Yi = Object(S.c)({
					currentSlideIndex: $i,
					isGalleryTileLayout: zi
				});
			var Xi = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Wi.c:
						return t.payload;
					default:
						return e
				}
			};
			var Ji = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wi.d:
							return t.payload;
						default:
							return e
					}
				},
				Zi = Object(S.c)({
					isMuted: Xi,
					volume: Ji
				}),
				eu = n("./src/reddit/actions/meta.ts");
			const tu = {
				ampCid: void 0,
				city: "",
				country: "",
				crawler: void 0,
				domain: "",
				isBot: !1,
				isSessionSeo: !1,
				locale: "",
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
			var nu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eu.b:
							return t.payload;
						case eu.a:
							return {
								...e, ...t.payload
							};
						case eu.e:
							return {
								...e, locale: t.payload
							};
						case eu.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case eu.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case eu.d:
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
				ru = n("./src/reddit/actions/subredditModeration/constants.ts");
			const su = {};
			var au = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : su,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.SUBREDDIT_LOADED:
					case F.b:
					case F.f:
					case Re.PAGE_LOADED: {
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
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v: {
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
					case $.f:
					case Pe.e:
					case G.k: {
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
					case ru.kb: {
						const {
							subredditId: n
						} = t.payload;
						return Object(Rt.a)(e, n)
					}
					case ru.db: {
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
			var ou = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.b:
					case Pe.k:
						return null;
					case Pe.a:
					case Pe.j:
						return t.payload;
					default:
						return e
				}
			};
			var cu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pe.b:
						case Pe.k:
							return !0;
						case Pe.c:
						case Pe.a:
						case Pe.l:
						case Pe.j:
							return !1;
						default:
							return e
					}
				},
				du = Object(S.c)({
					error: ou,
					pending: cu
				});
			const iu = [];
			var uu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pe.e: {
							const n = t.payload,
								{
									filteredSubreddits: r
								} = n;
							return r || e
						}
						case Pe.j: {
							const n = t.payload;
							return [...e, n]
						}
						case Pe.k:
						case Pe.a: {
							const n = t.payload;
							return e.filter(e => e !== n)
						}
						default:
							return e
					}
				},
				lu = Object(S.c)({
					api: du,
					names: uu
				}),
				pu = Object(S.c)({
					filteredSubreddits: lu
				}),
				bu = n("./src/reddit/actions/modMode.ts");
			var fu = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bu.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const hu = {};
			var yu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.z: {
						const {
							moreCommentsId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case L.y: {
						const {
							moreCommentsItem: n
						} = t.payload;
						return {
							...e,
							[n.id]: null
						}
					}
					case L.x: {
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
			const gu = {};
			var mu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.z: {
							const {
								moreCommentsId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case L.x:
						case L.y: {
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
				vu = Object(S.c)({
					error: yu,
					pending: mu
				});
			const Ou = {};
			var Eu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ou,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.y:
						case F.b:
						case F.f:
							return {
								...e, ...t.payload.moreComments
							};
						default:
							return e
					}
				},
				_u = Object(S.c)({
					api: vu,
					models: Eu
				});
			var Iu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.b:
					case De.c:
						return null;
					case De.a:
						return t.payload;
					default:
						return e
				}
			};
			var Su = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.a:
					case De.c:
						return !0;
					case De.b:
						return !1;
					default:
						return e
				}
			};
			var ju = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ce.b:
						case De.a:
						case De.c:
							return null;
						case De.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				wu = Object(S.c)({
					error: Iu,
					fetched: Su,
					pending: ju
				});
			var Tu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.f:
					case De.g:
						return null;
					case De.e:
						return t.payload;
					default:
						return e
				}
			};
			var Du = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.e:
					case De.g:
						return !0;
					case De.f:
						return !1;
					default:
						return e
				}
			};
			var Au = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.e:
						case De.g:
							return !1;
						case De.f:
							return !0;
						default:
							return e
					}
				},
				Pu = Object(S.c)({
					error: Tu,
					fetched: Du,
					pending: Au
				});
			var Cu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.i:
					case De.j:
						return null;
					case De.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ru = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.h:
					case De.j:
						return !0;
					case De.i:
						return !1;
					default:
						return e
				}
			};
			var Nu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.h:
						case De.j:
							return !1;
						case De.i:
							return !0;
						default:
							return e
					}
				},
				ku = Object(S.c)({
					error: Cu,
					fetched: Ru,
					pending: Nu
				});
			var xu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.l:
					case De.m:
						return null;
					case De.k:
						return t.payload;
					default:
						return e
				}
			};
			var Lu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.k:
					case De.m:
						return !0;
					case De.l:
						return !1;
					default:
						return e
				}
			};
			var Uu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.k:
						case De.m:
							return !1;
						case De.l:
							return !0;
						default:
							return e
					}
				},
				Mu = Object(S.c)({
					error: xu,
					fetched: Lu,
					pending: Uu
				});
			var Gu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.o:
					case De.p:
						return null;
					case De.n:
						return t.payload;
					default:
						return e
				}
			};
			var Fu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.n:
					case De.p:
						return !0;
					case De.o:
						return !1;
					default:
						return e
				}
			};
			var Bu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.n:
						case De.p:
							return !1;
						case De.o:
							return !0;
						default:
							return e
					}
				},
				qu = Object(S.c)({
					error: Gu,
					fetched: Fu,
					pending: Bu
				});
			var Vu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.t:
						return !1;
					case De.u:
						return !0;
					default:
						return e
				}
			};
			var Wu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.t:
							return !0;
						case De.u:
							return !1;
						default:
							return e
					}
				},
				Hu = Object(S.c)({
					fetched: Vu,
					pending: Wu
				});
			var Qu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.A:
					case De.B:
						return null;
					case De.z:
						return t.payload;
					default:
						return e
				}
			};
			var $u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.A:
					case De.z:
						return !1;
					case De.B:
						return !0;
					default:
						return e
				}
			};
			var Ku = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.A:
							return !0;
						case De.B:
						case De.z:
							return !1;
						default:
							return e
					}
				},
				zu = Object(S.c)({
					error: Qu,
					fetched: $u,
					pending: Ku
				});
			var Yu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.w:
					case De.x:
						return null;
					case De.v:
						return t.payload;
					default:
						return e
				}
			};
			var Xu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.v:
					case De.x:
						return !0;
					case De.w:
						return !1;
					default:
						return e
				}
			};
			var Ju = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.v:
						case De.x:
							return null;
						case De.w:
							const {
								id: n
							} = t.payload;
							return n;
						default:
							return e
					}
				},
				Zu = Object(S.c)({
					error: Yu,
					fetched: Xu,
					pending: Ju
				}),
				el = Object(S.c)({
					addSubreddit: wu,
					create: Pu,
					deleteMulti: ku,
					duplicate: Mu,
					edit: qu,
					forUser: Hu,
					recommendations: zu,
					removeSubreddit: Zu
				}),
				tl = n("./node_modules/lodash/isEqual.js"),
				nl = n.n(tl),
				rl = n("./node_modules/lodash/union.js"),
				sl = n.n(rl);

			function al(e, t, n) {
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
			var ol = n("./src/reddit/actions/profile/constants.ts");
			const cl = {};
			var dl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ce.b:
						case De.r:
						case De.u:
						case ol.h: {
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
								a[t] = sl()(s, n).sort((e, t) => o[e].displayText.toLowerCase() > o[t].displayText.toLowerCase() ? 1 : -1)
							}
							return nl()(e, a) ? e : a
						}
						case De.g:
						case De.m: {
							const {
								userId: n,
								multireddit: r
							} = t.payload, s = e[n] ? e[n].slice() : [], a = al(s, r.url, (e, t) => e > t ? 1 : -1);
							return s.splice(a, 0, r.url), {
								...e,
								[n]: s
							}
						}
						case De.j: {
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
				il = n("./src/reddit/actions/subscription/constants.ts"),
				ul = n("./src/reddit/models/Multireddit/index.ts");
			const ll = {};
			var pl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ll,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ce.b:
					case De.r:
					case De.u:
					case ol.h:
					case W.c: {
						let n = {};
						for (const r in t.payload.multireddits) {
							const s = {
									...t.payload.multireddits[r]
								},
								a = e[r];
							a && !Object(ul.g)(s) && (s.subredditIds = a.subredditIds, s.profileIds = a.profileIds), r in e && nl()(e[s.url], s) || (n = {
								...n,
								[r]: s
							})
						}
						return ya()(n) ? e : {
							...e,
							...n
						}
					}
					case De.g:
					case De.m: {
						const {
							multireddit: n
						} = t.payload;
						return {
							...e,
							[n.url]: n
						}
					}
					case De.j: {
						const n = t.payload,
							r = {
								...e
							};
						return delete r[n], r
					}
					case De.p: {
						const n = t.payload;
						return {
							...e,
							[n.url]: n
						}
					}
					case De.x: {
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
					case il.d: {
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
					case il.e: {
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
					case De.c: {
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
			const bl = {};
			var fl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.B: {
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
				hl = Object(S.c)({
					api: el,
					byUserId: dl,
					models: pl,
					recommendations: fl
				}),
				yl = n("./src/reddit/actions/notificationBanner.ts");
			var gl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yl.b:
							return t.payload.notificationBannerId;
						case yl.a:
							return null;
						default:
							return e
					}
				},
				ml = n("./src/reddit/actions/notificationsInbox/constants.ts");
			var vl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ml.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case ml.e:
					case ml.b:
						return !1;
					default:
						return e
				}
			};
			var Ol = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ml.e:
							return !0;
						case ml.a:
						case ml.b:
							return !1;
						default:
							return e
					}
				},
				El = Object(S.c)({
					error: vl,
					pending: Ol
				});
			var _l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ml.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var Il = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ml.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const Sl = [];
			var jl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ml.b: {
						const n = t.payload && t.payload.nodes;
						return [...e, ...n]
					}
					case ml.f: {
						const n = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== n)
					}
					case ml.d: {
						const n = t.payload && t.payload.id,
							r = t.payload && t.payload.now,
							s = e.findIndex(e => e.id === n);
						return -1 === s ? e : [...e.slice(0, s), {
							...e[s],
							readAt: r
						}, ...e.slice(s + 1)]
					}
					case ml.c: {
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
			var wl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ml.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				Tl = Object(S.c)({
					api: El,
					earlierDividerIndex: _l,
					notifications: jl,
					pageInfo: wl,
					markAllAsReadTimestamp: Il
				}),
				Dl = n("./src/reddit/actions/nps.ts");
			const Al = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Pl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Al,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Dl.c:
							return {
								...Al, pending: !0
							};
						case Dl.a:
							return Al;
						case Dl.b: {
							const {
								dest: e
							} = t.payload;
							return {
								...Al,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				Cl = n("./src/reddit/actions/accountGender/constants.ts"),
				Rl = n("./src/reddit/actions/onboarding/constants.ts");
			const Nl = {
				success: !1,
				failure: !1
			};
			var kl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cl.b:
						return {
							...Nl, success: !0
						};
					case Cl.c:
						return {
							...Nl, failure: !0
						};
					case Rl.a:
						return {
							...Nl
						};
					default:
						return e
				}
			};
			var xl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case we.b:
					case Rl.c: {
						const e = t.payload;
						return (null == e ? void 0 : e.interestTopicRecommendations) && !ya()(null === (n = null == e ? void 0 : e.interestTopicRecommendations) || void 0 === n ? void 0 : n.interests) ? e.interestTopicRecommendations : null
					}
					default:
						return e
				}
			};
			var Ll = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Rl.b:
							return !0;
						default:
							return e
					}
				},
				Ul = Object(S.c)({
					genderUpdateState: kl,
					interestTopicRecommendationsState: xl,
					shouldSkipOnboardingState: Ll
				});
			const Ml = e => {
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
			const Gl = e => {
					const t = {};
					for (const n of e) t[n.experimentName.toLowerCase()] = Ml(n);
					return t
				},
				Fl = {};
			var Bl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case io.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, n = e ? e.experiments : [];
						return Gl(n)
					}
					default:
						return e
				}
			};
			var ql = Object(S.c)({
					byName: Bl,
					canonicalUrl: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case io.a: {
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
				Vl = Object(S.c)({
					experiments: ql
				}),
				Wl = n("./node_modules/history/esm/history.js"),
				Hl = n("./src/reddit/constants/history.ts");
			n("./src/reddit/helpers/isRobotIndexableMeta.ts");
			const Ql = {
					allowNavigationCallback: null,
					currentPage: null,
					lastPage: null,
					referrers: {},
					sessionReferrer: null,
					metas: {}
				},
				$l = (e, t) => ({
					key: e,
					locationState: {},
					meta: null,
					queryParams: {},
					routeMatch: null,
					status: 404,
					url: t,
					urlParams: {}
				}),
				Kl = (e, t, n, r) => {
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
			var zl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ql,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b: {
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
						const c = Object(Wl.e)(a),
							d = s ? Kl(o, c, s, a) : $l(o, c);
						let {
							referrers: i
						} = e;
						if ("PUSH" === r.action) {
							const e = n && n.url || "";
							i = {
								...i,
								[o]: e
							}
						} else if ("REPLACE" === r.action && n && i[n.key]) {
							const {
								[n.key]: e, ...t
							} = i;
							i = {
								...t,
								[o]: e
							}
						}
						return {
							...e,
							referrers: i,
							currentPage: d,
							lastPage: n
						}
					}
					case u.f: {
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
					case u.g: {
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
					case F.b:
					case F.f:
						return !e.currentPage || t.payload.postMeta, e;
					case u.c:
						return e;
					case u.e: {
						const {
							allowNavigationCallback: n
						} = t.payload;
						return {
							...e,
							allowNavigationCallback: n
						}
					}
					case u.d:
						return {
							...e, allowNavigationCallback: null
						};
					case we.b:
					case u.a:
					case H.SUBREDDIT_LOADED: {
						const {
							correlationId: n
						} = t.payload;
						return e.currentPage ? {
							...e,
							currentPage: {
								...e.currentPage,
								locationState: {
									...e.currentPage.locationState,
									[Hl.b.FeedCorrelationId]: n
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const Yl = {};
			var Xl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.k: {
						const {
							pollId: n
						} = t.payload.pollResults, {
							[n]: r,
							...s
						} = e;
						return s
					}
					case d.j: {
						const {
							pollId: n
						} = t.payload, {
							[n]: r,
							...s
						} = e;
						return s
					}
					case d.i: {
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
			const Jl = {};
			var Zl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.k: {
							const {
								pollId: n
							} = t.payload.pollResults;
							return {
								...e,
								[n]: !1
							}
						}
						case d.i: {
							const {
								pollId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						case d.j: {
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
				ep = Object(S.c)({
					error: Xl,
					pending: Zl
				}),
				tp = Object(S.c)({
					voting: ep
				}),
				np = n("./node_modules/lodash/mapValues.js"),
				rp = n.n(np),
				sp = n("./src/reddit/reducers/posts/models/helpers.ts"),
				ap = n("./src/reddit/actions/economics/predictions/constants.ts");
			const op = e => {
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
			var cp = e => {
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
							isPrediction: d,
							options: i,
							resolvedOptionId: u,
							totalStakeAmount: l,
							totalVoteCount: p,
							tournamentId: b,
							userSelection: f,
							userWonAmount: h,
							voteUpdatesRemained: y,
							votingEndTimestamp: g,
							predictionStatus: m
						}
					} = e;
					if (d) {
						return {
							id: t,
							createdAt: s,
							creatorId: n,
							subredditId: r.id,
							endsAt: g,
							voteUpdatesRemained: y,
							postId: t,
							title: a,
							options: i,
							totalVoters: p,
							type: Ds.a.GA,
							isNSFW: o,
							isPrediction: d,
							isSpoiler: c,
							totalStakeAmount: l || 0,
							tournamentId: b,
							userSelection: f,
							userWonAmount: h,
							resolvedOptionId: u,
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
						options: i,
						totalVoters: p,
						type: Ds.a.GA,
						isPrediction: d,
						userSelection: f
					}
				},
				dp = n("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				ip = n("./src/reddit/models/Prediction/index.ts");

			function up(e, t) {
				let {
					wonAmount: n,
					id: r,
					title: s,
					totalVoteCount: a,
					totalStakeAmount: o,
					status: c,
					selectedOptionId: d,
					...i
				} = e, {
					tournamentId: u,
					subredditId: l,
					creatorId: p
				} = t;
				return {
					id: r,
					isPrediction: !0,
					predictionStatus: c,
					title: s || "",
					creatorId: p,
					tournamentId: u,
					subredditId: l,
					userSelection: d,
					userWonAmount: n,
					postId: r,
					totalStakeAmount: o || 0,
					totalVoteCount: a || 0,
					totalVoters: a || 0,
					...i
				}
			}
			const lp = {};
			var pp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.h: {
						const {
							poll: n
						} = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case we.b:
					case H.SUBREDDIT_LOADED:
					case $.i:
					case we.f:
					case F.b:
					case F.f:
					case ap.o: {
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
						const r = rp()(t.payload.posts, Object(sp.i)([sp.p])),
							s = {};
						return Object.keys(r).forEach(e => {
							var t, n;
							const a = r[e];
							if (a.pollData && (s[e] = cp(a)), null === (n = null === (t = a.predictionTournament) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.length) {
								const {
									tournamentId: e,
									predictions: t
								} = a.predictionTournament;
								t.forEach(t => {
									s[t.id] = up(t, {
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
					case ap.q:
					case ap.p: {
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
					case ap.b: {
						const {
							postId: n,
							prediction: r
						} = t.payload;
						return e[n] && Object(ip.c)(e[n]) ? {
							...e,
							[n]: {
								...e[n],
								...Object(dp.b)(r)
							}
						} : e
					}
					default:
						return e
				}
			};
			const bp = {};
			var fp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.k: {
						const {
							[Ds.b.ByVoters]: n, pollId: r
						} = t.payload.pollResults;
						return {
							...e,
							[r]: n
						}
					}
					case d.e: {
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
					case we.b:
					case H.SUBREDDIT_LOADED:
					case $.i:
					case we.f:
					case F.b:
					case F.f: {
						const {
							governance: n,
							posts: r
						} = t.payload;
						if (n) {
							const t = Object.keys(n).reduce((e, t) => {
								const r = n[t],
									{
										[Ds.b.ByVoters]: s,
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
							const s = op(r[t].pollData);
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
			const hp = {};
			var yp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.k: {
							const {
								[Ds.b.ByVotingPower]: n, pollId: r
							} = t.payload.pollResults;
							return {
								...e,
								[r]: n
							}
						}
						case we.b:
						case H.SUBREDDIT_LOADED:
						case $.i:
						case we.f:
						case F.b:
						case F.f: {
							const {
								governance: n
							} = t.payload;
							if (n) {
								const t = Object.keys(n).reduce((e, t) => {
									const r = n[t],
										{
											[Ds.b.ByVotingPower]: s,
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
				gp = Object(S.c)({
					byVoters: fp,
					byVotingPower: yp
				});
			const mp = {};
			var vp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.k: {
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
				Op = Object(S.c)({
					api: tp,
					models: pp,
					results: gp,
					rewards: vp
				});
			const Ep = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var _p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ep,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ln.i:
					case Ln.j:
						return {
							...e, reorderError: null
						};
					case Ln.h:
						return {
							...e, reorderError: t.payload
						};
					case Ln.l:
					case Ln.m:
						return {
							...e, updateDescriptionError: null
						};
					case Ln.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Ln.p:
					case Ln.q:
						return {
							...e, updateLayoutError: null
						};
					case Ln.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const Ip = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var Sp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ln.i:
							return {
								...e, reorderPending: !0
							};
						case Ln.h:
						case Ln.j:
							return {
								...e, reorderPending: !1
							};
						case Ln.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Ln.k:
						case Ln.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Ln.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Ln.o:
						case Ln.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				jp = Object(S.c)({
					error: _p,
					pending: Sp
				}),
				wp = n("./src/reddit/helpers/path/index.ts");
			const Tp = {},
				Dp = e => {
					const {
						protocol: t,
						domain: n
					} = e;
					return e => {
						const r = Object(wp.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${n}${r}`
						}
					}
				};
			var Ap = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ae.b:
					case Ae.f:
					case Re.PAGE_LOADED:
					case Pe.e:
					case Pe.h:
					case B.b:
					case B.e:
					case Ne.e:
					case Ne.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case H.SUBREDDIT_LOADED:
					case we.b:
					case Ce.b:
					case H.SUBREDDIT_LOADED:
					case F.b:
					case F.f:
					case Ti.j:
					case De.r:
					case we.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Ue.e:
					case ke.b:
					case W.c:
					case Ln.f: {
						const {
							collections: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						let s = n;
						if (r) {
							const e = Dp(r);
							s = rp()(n, e)
						}
						return {
							...e,
							...s
						}
					}
					case Ln.d: {
						const {
							collection: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						const s = n.id;
						let a = n;
						if (r) {
							a = Dp(r)(n)
						}
						return {
							...e,
							[s]: a
						}
					}
					case Ln.g: {
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
					case Ln.a: {
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
					case Ln.e: {
						const {
							collectionId: n
						} = t.payload, r = {
							...e
						};
						return delete r[n], r
					}
					case Ln.s: {
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
					case Ln.j: {
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
					case Ln.m: {
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
					case Ln.q: {
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
			const Pp = {};
			var Cp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Re.PAGE_LOADED:
						case Ln.f: {
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
						case Ln.d: {
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
						case Ln.e: {
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
				Rp = Object(S.c)({
					models: Ap,
					subredditToIds: Cp,
					api: jp
				}),
				Np = n("./src/reddit/actions/postFlair.ts"),
				kp = n("./src/reddit/models/Flair/index.ts");
			const xp = {},
				Lp = {
					displaySettings: {
						isEnabled: !1,
						position: kp.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				Up = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					return 0 === n.length ? e : n.reduce((e, n) => (e[n] = {
						...Lp,
						...e[n],
						...t[n]
					}, e), {
						...e
					})
				};
			var Mp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ae.b:
						case Ae.f:
						case Re.PAGE_LOADED:
						case we.f:
						case Pe.e:
						case Pe.h:
						case De.r:
						case ci.b:
						case F.b:
						case F.f:
						case we.b:
						case Ce.b:
						case W.c:
						case H.SUBREDDIT_LOADED:
						case B.b:
						case B.e:
						case V.c:
						case V.i:
						case V.e:
						case V.g:
						case Q.e:
						case ke.b:
						case ke.b:
						case Ne.b:
						case Ne.e:
						case q.MORE_POSTS_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Ue.e:
						case Ue.e:
						case $.i:
							return Up(e, t.payload.postFlair);
						case Np.c: {
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
						case Np.a: {
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
						case Np.f: {
							const {
								subredditId: n,
								template: r
							} = t.payload, s = e[n], {
								templates: a,
								templateIds: o
							} = s, c = {
								...a,
								[r.id]: r
							}, d = [...o];
							return d.includes(r.id) || d.push(r.id), {
								...e,
								[n]: {
									...s,
									templates: c,
									templateIds: d
								}
							}
						}
						case Np.b: {
							const {
								subredditId: n,
								templateId: r
							} = t.payload, s = e[n], {
								templates: a,
								templateIds: o
							} = s, c = Cr()(a, r), d = o.filter(e => e !== r);
							return {
								...e,
								[n]: {
									...s,
									templates: c,
									templateIds: d
								}
							}
						}
						case Np.e:
						case Np.d: {
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
						case G.i:
						case G.f:
						case G.m:
						case G.p:
						case G.v: {
							const {
								response: n
							} = t.payload;
							return Up(e, n.postFlair)
						}
						default:
							return e
					}
				},
				Gp = n("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const Fp = {
				pending: !1,
				items: {}
			};
			var Bp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Gp.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Gp.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			var qp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ti.c:
							return t.payload;
						default:
							return e
					}
				},
				Vp = n("./src/reddit/actions/embedAndImage.ts");
			const Wp = {};
			var Hp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vp.b: {
							const {
								postId: n
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: !1
							} : e
						}
						case Vp.a: {
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
				Qp = Object(S.c)({
					loadable: Hp
				});
			const $p = {};
			var Kp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $p,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ti.d: {
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
			var zp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ti.e: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Yp = [];
			var Xp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ti.n:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case Ti.b:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case Ti.f:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const Jp = {};
			var Zp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pe.e:
					case Pe.h:
					case we.b:
					case H.SUBREDDIT_LOADED:
					case we.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Ue.e:
					case W.c:
						return x()({
							...e
						}, t.payload.postInstances, (e, t) => {
							if (e) return e.concat(t)
						});
					default:
						return e
				}
			};
			var eb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ti.a:
							return t.payload;
						default:
							return e
					}
				},
				tb = n("./src/reddit/actions/isTrackingCrossposts.ts");
			const nb = {};
			var rb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tb.a: {
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
			const sb = {};
			var ab = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.h: {
							const {
								poll: n
							} = t.payload;
							return {
								...e,
								[n.postId]: n.id
							}
						}
						case we.b:
						case H.SUBREDDIT_LOADED:
						case $.i:
						case we.f:
						case F.b:
						case F.f:
						case ap.o: {
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
				ob = n("./src/reddit/actions/bulkActions/constants.ts"),
				cb = n("./src/reddit/actions/constants.ts"),
				db = n("./src/reddit/actions/flairManagement/constants.ts"),
				ib = n("./src/reddit/actions/googleQASchema/constants.ts"),
				ub = n("./src/reddit/actions/imageOCRAltText/constants.ts"),
				lb = n("./src/reddit/actions/subredditTopContent.ts"),
				pb = n("./src/reddit/helpers/isPost.ts"),
				bb = n("./node_modules/lodash/pickBy.js"),
				fb = n.n(bb);

			function hb(e, t) {
				const n = fb()(t, (function(t) {
					let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return !e[n] || !nl()(e[n], t)
				}));
				return Object.keys(n).length > 0 ? {
					...e,
					...n
				} : e
			}
			var yb = n("./src/reddit/models/Gold/Gild/index.tsx"),
				gb = n("./src/reddit/models/Media/index.ts"),
				mb = n("./src/reddit/models/ModQueue/index.ts"),
				vb = n("./src/reddit/models/Post/index.ts"),
				Ob = n("./src/reddit/models/Vote/index.ts"),
				Eb = n("./src/reddit/actions/subredditDuplicates.ts");
			const _b = {};
			var Ib = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _b,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b:
						if (xr(t) === (Le.Nb.COMMENTS || Le.Nb.DUPLICATES)) {
							const n = Lr(t),
								r = Ur(t);
							if (n && n.instanceId && r && r.partialPostId) {
								const t = n.instanceId,
									s = Object(vb.u)(r.partialPostId);
								if (e[s] && e[t]) return {
									...e,
									[s]: Object(sp.c)(e[s], e[t])
								}
							}
						}
						return e;
					case F.b:
					case F.f: {
						const n = Object(sp.h)(t.payload.meta);
						return {
							...e,
							...rp()(t.payload.posts, Object(sp.i)([n, sp.d, sp.n, sp.o, sp.p, Object(sp.a)(e), Object(sp.b)(e), Object(sp.k)(e), Object(sp.l)(e), Object(sp.j)(e)]))
						}
					}
					case Ti.j:
						return hb(e, t.payload);
					case Eb.a:
						return hb(e, t.payload.posts);
					case Ae.b:
					case Ae.f:
					case Re.PAGE_LOADED:
					case li.c:
					case pi.b:
					case Pe.e:
					case Pe.h:
					case B.b:
					case B.e:
					case Ne.e:
					case Ne.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case H.SUBREDDIT_LOADED:
					case we.b:
					case Ce.b:
					case ci.b:
					case De.r:
					case we.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case bi.j:
					case $.i:
					case ke.b:
					case di.TOPIC_DATA_LOADED:
					case di.MORE_POSTS_LOADED:
					case oi.c:
					case oi.d:
					case ap.o: {
						const n = Object(sp.h)(t.payload.meta);
						return {
							...e,
							...rp()(t.payload.posts, Object(sp.i)([n, sp.d, sp.n, sp.o, sp.p, Object(sp.m)(e), Object(sp.k)(e), Object(sp.j)(e)]))
						}
					}
					case bi.r: {
						if (!t.payload || !t.payload.length) return e;
						const n = {};
						for (const r of t.payload) {
							const t = r,
								s = Object(sp.h)(t.meta);
							Object.assign(n, rp()(t.posts, Object(sp.i)([s, sp.d, sp.n, sp.o, Object(sp.m)(e), Object(sp.k)(e), Object(sp.j)(e)])))
						}
						return {
							...e,
							...n
						}
					}
					case ci.b: {
						const n = Object(sp.h)(t.payload.meta),
							r = e[t.payload.postId];
						return {
							...e,
							...rp()(t.payload.posts, Object(sp.i)([n, sp.d, sp.n, sp.o, Object(sp.m)(e), Object(sp.k)(e), Object(sp.j)(e)])),
							[t.payload.postId]: {
								...r,
								numDuplicates: t.payload.count
							}
						}
					}
					case je.e:
					case Ue.e:
					case W.c: {
						const n = Object(sp.h)(t.payload.meta),
							r = rp()(t.payload.posts, Object(sp.i)([n, sp.n, sp.d, sp.o, Object(sp.j)(e)]));
						return x()({
							...e
						}, r, (e, t) => ({
							...t,
							...e
						}))
					}
					case Ti.k: {
						const n = t.payload;
						return x()({
							...e
						}, n, (e, t) => ({
							...e,
							...t
						}))
					}
					case cb.a: {
						const {
							id: n,
							vote: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: Object(Ob.c)(s, r)
						} : e
					}
					case U.b:
					case L.M: {
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
					case Ti.h: {
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
					case Ti.i: {
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
					case L.D: {
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
					case ee.sb: {
						const {
							topAwardedPosts: n
						} = t.payload;
						return {
							...e,
							...n.reduce((e, t) => (e[t.post.id] = Object(sp.i)([sp.n])(Object($r.f)(t.post)), e), {})
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
								...Object(yb.a)(o, r, s),
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
							[r]: Object(yb.b)(s, n)
						} : e
					}
					case ru.r: {
						const {
							posts: n
						} = t.payload;
						return x()({
							...e
						}, n)
					}
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v: {
						const {
							response: n
						} = t.payload, {
							posts: r
						} = n;
						return {
							...e,
							...rp()(r, Object(sp.i)([sp.n, sp.o]))
						}
					}
					case ob.b:
					case G.s: {
						const {
							operation: n,
							ids: r,
							username: s,
							options: a
						} = t.payload, o = r.filter(e => Object(pb.a)(e)), c = Object(mb.d)(e, n, o, s, a);
						return x()({
							...e
						}, c, (e, t) => ({
							...e,
							...t
						}))
					}
					case Ln.t: {
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
					case Ln.e: {
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
					case Ln.g: {
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
					case oi.f: {
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
					case oi.a: {
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
					case Yo.g: {
						const n = t.payload.subredditTopContent;
						return n && n.posts && Object.keys(n.posts) ? {
							...rp()(n.posts, Object(sp.i)([sp.n, sp.o])),
							...e
						} : e
					}
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case lb.b:
						return {
							...rp()(t.payload.posts, Object(sp.i)([sp.n, sp.o])), ...e
						};
					case Ti.m: {
						const {
							postId: n,
							richtextContent: r
						} = t.payload, s = e[n];
						return s && s.media && Object(gb.K)(s.media) ? {
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
					case db.a: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case db.b: {
						const n = t.payload;
						return Object(Rt.a)(e, n)
					}
					case y.o: {
						const n = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...n
						}
					}
					case ub.b: {
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
					case ap.t: {
						const {
							tournamentPostId: n,
							predictionId: r,
							selectedOptionId: s
						} = t.payload;
						if (!e[r] && !e[n]) return e;
						const a = {
							...e
						};
						return a[r] && (a[r] = Object(sp.e)({
							post: e[r],
							selectedOptionId: s
						})), a[n] && (a[n] = Object(sp.f)({
							post: e[n],
							selectedOptionId: s,
							predictionId: r
						})), a
					}
					case ap.b: {
						const {
							postId: n,
							prediction: r
						} = t.payload;
						return {
							...e,
							[n]: Object(sp.q)(e[n], Object(dp.a)(r))
						}
					}
					case ub.a:
						return {
							...e
						};
					case ib.b: {
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
					case ib.a:
						return {
							...e
						};
					case li.a: {
						const {
							postId: n,
							isEligibleForLinkedPosts: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								isEligibleForLinkedPosts: r
							}
						}
					}
					case y.t:
					case y.q: {
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
			var Sb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ti.g:
							return t.payload;
						default:
							return e
					}
				},
				jb = n("./src/reddit/actions/postLevelCrowdControl.ts");
			const wb = {};
			var Tb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jb.a: {
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
			const Db = [];
			var Ab = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Db,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ti.l: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case we.b:
						case H.SUBREDDIT_LOADED: {
							const {
								recentPostIds: n
							} = t.payload;
							return n && n.length ? n : e
						}
						default:
							return e
					}
				},
				Pb = n("./node_modules/uuid/v4.js"),
				Cb = n.n(Pb);
			const Rb = Cb()();
			var Nb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Re.PAGE_LOADED:
					case yr.h:
					case yr.a:
					case yr.m:
					case yr.f:
						return Cb()();
					default:
						return e
				}
			};
			var kb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yr.d:
					case yr.o:
					case yr.k:
					case yr.g:
					case yr.a:
					case yr.m:
					case yr.f:
						return null;
					case yr.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case yr.e:
						return "error";
					default:
						return e
				}
			};
			var xb = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yr.g:
						return !0;
					case yr.m:
					case yr.a:
					case yr.f:
					case yr.e:
						return !1;
					default:
						return e
				}
			};
			var Lb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case yr.k:
							return !0;
						case yr.j:
						case yr.e:
						case yr.o:
						case yr.d:
							return !1;
						default:
							return e
					}
				},
				Ub = Object(S.c)({
					creationToken: Nb,
					error: kb,
					pending: xb,
					pendingUpdate: Lb
				});
			const Mb = {};
			var Gb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yr.c: {
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
			const Fb = {
				standalonePosts: {
					POSTS_LOADED: yr.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: yr.o
				},
				recurringPosts: {
					POSTS_LOADED: yr.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: yr.d
				}
			};

			function Bb(e) {
				const t = {};
				return function() {
					let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case Fb[e].POSTS_LOADED:
						case yr.f: {
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
						case yr.i:
						case yr.l: {
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
						case yr.h: {
							const {
								subredditId: e
							} = r.payload;
							return Object.keys(n).reduce((t, r) => (r !== e && (t[r] = n[r]), t), {})
						}
						case Fb[e].MUTATION_SUCCEEDED: {
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
			const qb = {};

			function Vb(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qb,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case Fb[e].POSTS_LOADED:
						case yr.f: {
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
						case yr.h: {
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
			var Wb = n("./node_modules/lodash/uniq.js"),
				Hb = n.n(Wb);
			const Qb = {};

			function $b(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qb,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case Fb[e].POSTS_LOADED:
						case yr.f: {
							const {
								subredditInfoById: r
							} = n.payload, s = r.id, a = r.scheduledPosts[Fb[e].postIdsKey];
							return {
								...t,
								[s]: Hb()([...t[s] || [], ...a])
							}
						}
						case yr.i:
						case yr.l: {
							const {
								subredditId: e,
								scheduledPostId: r
							} = n.payload, s = t[e] || [];
							return {
								...t,
								[e]: s.filter(e => e !== r)
							}
						}
						case yr.h: {
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
			var Kb = Object(S.c)({
					models: Bb("recurringPosts"),
					pageInfo: Vb("recurringPosts"),
					postOrder: $b("recurringPosts"),
					editModal: Gb
				}),
				zb = Object(S.c)({
					models: Bb("standalonePosts"),
					pageInfo: Vb("standalonePosts"),
					postOrder: $b("standalonePosts")
				}),
				Yb = Object(S.c)({
					api: Ub,
					standalonePosts: zb,
					recurringPosts: Kb
				});
			var Xb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.rb:
						return t.payload;
					case ee.tb:
					case ee.sb:
						return null;
					default:
						return e
				}
			};
			var Jb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.sb:
						case ee.rb:
							return !1;
						case ee.tb:
							return !0;
						default:
							return e
					}
				},
				Zb = Object(S.c)({
					error: Xb,
					pending: Jb
				});
			const ef = [];
			var tf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.sb: {
							const {
								topAwardedPosts: e
							} = t.payload;
							return e.filter(e => !(e.post.isNsfw || e.post.isArchived || e.post.isHidden || e.post.removedBy || e.post.removedByCategory && "NONE" !== e.post.removedByCategory)).map(e => ({
								postId: e.post.id,
								rank: e.rank,
								score: e.score
							}))
						}
						case ee.rb:
						case ee.tb:
							return ef;
						default:
							return e
					}
				},
				nf = Object(S.c)({
					api: Zb,
					list: tf
				}),
				rf = n("./src/reddit/actions/video.ts");
			const sf = {};
			var af = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rf.e: {
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
			const of = {};
			var cf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : of ,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rf.a: {
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
			const df = {};
			var uf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : df,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rf.b: {
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
			const lf = {};
			var pf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rf.c: {
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
			const bf = {
				mutedInFeed: !0
			};
			var ff = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rf.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var hf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rf.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case rf.d:
						return null;
					default:
						return e
				}
			};
			const yf = {};
			var gf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rf.o: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case rf.e: {
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
			const mf = {};
			var vf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rf.h: {
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
					case rf.f: {
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
			const Of = {};
			var Ef = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Of,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rf.j: {
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
			const _f = {};
			var If = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _f,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rf.p: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case rf.g: {
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
			const Sf = {};
			var jf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rf.i: {
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
			const wf = {};
			var Tf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case rf.m: {
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
				Df = n("./src/reddit/constants/video.ts");
			const Af = {};
			var Pf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Af,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case rf.n: {
							const {
								postId: n,
								time: r
							} = t.payload;
							return e[n] && Math.abs(Math.floor(r.currentTime) - Math.floor(e[n].currentTime)) < Df.m ? e : {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Cf = Object(S.c)({
					autoPlayed: af,
					buffering: cf,
					consumed: uf,
					continuousViewStartedAt: pf,
					feed: ff,
					fullscreen: hf,
					loadable: gf,
					loadTimes: vf,
					metadata: Ef,
					paused: If,
					playing: jf,
					started: Tf,
					time: Pf
				}),
				Rf = Object(S.c)({
					embedAndImage: Qp,
					expanded: Kp,
					focus: zp,
					followed: Xp,
					instances: Zp,
					isAnimatingUpvote: eb,
					isTrackingCrossposts: rb,
					metaMap: ab,
					models: Ib,
					modToMemberShare: Sb,
					crowdControl: qp,
					postLevelCrowdControl: Tb,
					recent: Ab,
					scheduledPosts: Yb,
					topAwarded: nf,
					video: Cf,
					carousel: Bp
				}),
				Nf = n("./src/lib/reducers/addAuthentication/index.ts");
			const kf = {};
			var xf = Object(Nf.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case F.b:
						case F.f: {
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
						case L.I: {
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
				}), kf),
				Lf = Object(S.c)({
					data: xf
				});
			const Uf = {};
			var Mf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.f:
					case l.g: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case l.e: {
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
			const Gf = {};
			var Ff = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.f: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case l.g:
						case l.e: {
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
				Bf = Object(S.c)({
					error: Mf,
					pending: Ff
				});
			const qf = {};
			var Vf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.d: {
						const {
							product: n
						} = t.payload;
						return {
							...e,
							[n.id]: void 0
						}
					}
					case l.c:
					case i.f:
					case i.g:
					case i.i:
					case i.j: {
						const {
							productId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case l.a:
					case i.d:
					case i.h: {
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
			const Wf = {};
			var Hf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.c:
						case i.f: {
							const {
								productId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case l.d: {
							const {
								product: n
							} = t.payload;
							return {
								...e,
								[n.id]: !1
							}
						}
						case l.a:
						case i.d:
						case i.g: {
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
				Qf = Object(S.c)({
					error: Vf,
					pending: Hf
				}),
				$f = Object(S.c)({
					fetch: Bf,
					purchase: Qf
				});
			var Kf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.b:
						return t.payload.productId;
					case r.b:
						return null;
					default:
						return e
				}
			};
			const zf = {};
			var Yf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zf,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.i:
						case l.g: {
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
				Xf = Object(S.c)({
					api: $f,
					currentlyPurchasing: Kf,
					models: Yf
				});
			const Jf = {};
			var Zf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.f:
					case B.e:
					case B.c:
					case B.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case B.d:
					case B.a: {
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
			const eh = {};
			var th = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case B.f:
						case B.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case B.e:
						case B.d:
						case B.b:
						case B.a: {
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
				nh = Object(S.c)({
					error: Zf,
					pending: th
				});
			const rh = {};
			var sh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case B.e: {
							const {
								key: n,
								commentIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case B.b: {
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
				ah = n("./src/reddit/actions/comment/list.ts");
			const oh = {};
			var ch = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ah.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case ah.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? Cr()(e, n) : e
					}
					default:
						return e
				}
			};
			const dh = {};
			var ih = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.e: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: {}
						}
					}
					case B.b: {
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
			const uh = {};
			var lh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case B.e:
						case B.b: {
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
							} : Object(Rt.a)(e, n)
						}
						default:
							return e
					}
				},
				ph = Object(S.c)({
					api: nh,
					endMarkers: ch,
					fetchedTokens: ih,
					commentIds: sh,
					loadMore: lh
				}),
				bh = n("./src/reddit/actions/pages/profileModSettings.ts");
			var fh = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bh.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				hh = Object(S.c)({
					pending: fh
				}),
				yh = Object(S.c)({
					api: hh
				});
			const gh = {};
			var mh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return t.type, e
			};
			const vh = {};
			var Oh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.a:
					case V.d: {
						const {
							listingKey: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case V.b:
					case V.c:
					case V.i:
					case V.f:
					case V.e:
					case V.g: {
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
			const Eh = {};
			var _h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.b:
						case V.f: {
							const {
								listingKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case V.a:
						case V.d:
						case V.c:
						case V.i:
						case V.e:
						case V.g: {
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
				Ih = Object(S.c)({
					error: Oh,
					pending: _h
				});
			const Sh = {};
			var jh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.c:
					case V.i:
					case V.e:
					case V.g: {
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
			const wh = {};
			var Th = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.i:
						case V.c:
						case V.e:
						case V.g: {
							const {
								pageInfo: n,
								listingKey: r
							} = t.payload;
							return n ? {
								...e,
								[r]: n
							} : wh
						}
						default:
							return e
					}
				},
				Dh = Object(S.c)({
					api: Ih,
					ids: jh,
					pageInfo: Th
				}),
				Ah = n("./src/reddit/constants/posts.ts");
			const Ph = {};
			var Ch = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ph,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.c:
						case Ue.e:
							return {
								...e, ...t.payload.profileAboutInfo
							};
						case ol.l: {
							const n = t.payload;
							return n.profile ? {
								...e,
								[n.profile.id]: n.about
							} : e
						}
						case il.h: {
							const {
								identifiers: n,
								userIsSubscriber: r
							} = t.payload, s = n.filter(e => e.type === Ah.a.PROFILE);
							return s.length ? s.reduce((e, t) => (e[t.id] = {
								...e[t.id],
								userIsSubscriber: r
							}, e), {
								...e
							}) : e
						}
						case Sn.n: {
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
				},
				Rh = n("./src/reddit/models/Subreddit/index.ts");
			const Nh = {};
			var kh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ae.b:
					case Ae.f:
					case we.f:
					case F.b:
					case F.f:
					case we.b:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case Ne.b:
					case Ne.e:
					case q.PROFILE_POSTS_LOADED:
					case ke.b:
					case Pe.e:
					case Pe.h:
					case De.u:
					case ol.h:
					case ci.b:
					case Ue.e:
					case $.i:
					case ol.o:
					case Q.b:
					case Q.e:
					case W.c:
					case Re.PAGE_LOADED:
					case Bn.e:
					case Rr.PAGE_LOADED:
					case H.SUBREDDIT_LOADED:
					case Ce.b:
					case "RECOMMENDED_POSTS_LOADED":
					case il.c:
						return Object(N.merge)(e, t.payload.profiles);
					case Ue.h: {
						const {
							typeaheadSuggestions: n
						} = t.payload, r = Object.values(n).reduce((e, t) => Object(Rh.i)(t) ? {
							...e,
							[t.id]: t
						} : e, {});
						return Object.keys(r).length ? Object(N.merge)(e, r) : e
					}
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v:
					case G.k: {
						const {
							response: n
						} = t.payload, r = n && n.profiles;
						return Object(N.merge)(e, r)
					}
					case ol.n:
					case ol.l: {
						const {
							profile: n
						} = t.payload;
						return n ? Object(N.merge)(e, {
							[n.id]: n
						}) : e
					}
					case Sn.n: {
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
					case Sn.l:
					case Sn.k: {
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
			const xh = {};
			var Lh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ol.c:
						case ol.f: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[(n || "").toLowerCase()]: !0
							}
						}
						case ol.a:
						case ol.b:
						case ol.d:
						case ol.e: {
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
				Uh = Object(S.c)({
					pending: Lh
				});
			const Mh = {};
			var Gh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ol.b: {
						const {
							profileName: n,
							data: r
						} = t.payload, s = r.map(e => e.id);
						return {
							...e,
							[(n || "").toLowerCase()]: s
						}
					}
					case ol.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g: {
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
			const Fh = {};
			var Bh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ol.e: {
							const {
								pageInfo: n,
								profileName: r
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						case V.c:
						case V.i: {
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
				qh = Object(S.c)({
					api: Uh,
					models: Gh,
					pageInfo: Bh
				});
			const Vh = {};
			var Wh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ol.i: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case ol.g:
						case ol.h: {
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
				Hh = Object(S.c)({
					pending: Wh
				});
			const Qh = {};
			var $h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ol.h: {
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
				Kh = Object(S.c)({
					api: Hh,
					pageInfo: $h
				}),
				zh = n("./src/reddit/actions/pinnedPost.ts");
			const Yh = {};
			var Xh = Object(Nf.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zh.a: {
						const {
							pinned: n,
							profileId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case zh.d: {
						const {
							postId: n,
							profileId: r
						} = t.payload, s = e[r] || [];
						return {
							...e,
							[r]: [...s, n].slice(-Le.cb)
						}
					}
					case zh.g: {
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
			}), Yh);
			const Jh = {};
			var Zh = Object(Nf.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zh.a: {
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
			}), Jh);
			const ey = {};
			var ty = Object(Nf.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zh.c:
						case zh.f: {
							const {
								postId: n,
								profileId: r
							} = t.payload, s = e[r] || [];
							return {
								...e,
								[r]: [...s, n]
							}
						}
						case zh.b:
						case zh.e:
						case zh.d:
						case zh.g: {
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
				}), ey),
				ny = Object(S.c)({
					data: Xh,
					initialData: Zh,
					pending: ty
				}),
				ry = n("./src/reddit/actions/trophyCase.ts");
			const sy = {};
			var ay, oy, cy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ry.a: {
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
				dy = Object(S.c)({
					about: Ch,
					models: kh,
					moderated: qh,
					multireddits: Kh,
					pinnedPosts: ny,
					trophyCases: cy
				});
			n("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(ay || (ay = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(oy || (oy = {}));
			var iy, uy, ly;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(iy || (iy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(uy || (uy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(ly || (ly = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(iy || (iy = {}));
			Object(xe.a)("PROMO__SHOW_PROMO"), Object(xe.a)("PROMO__HIDE_PROMO");
			const py = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var by = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : py,
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
				fy = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const hy = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: fy.d,
					viewer_streams_refresh: fy.c,
					viewer_streams_refresh_slop: fy.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var yy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fy.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case fy.x: {
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
					case fy.G:
						return {
							...e, isPending: !0
						};
					case fy.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case fy.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var gy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fy.L:
						return {
							...e, [fy.b]: t.payload.error
						};
					case fy.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case fy.z: {
						const {
							[fy.b]: t, ...n
						} = e;
						return n
					}
					case fy.y: {
						const {
							[t.payload.model.post.id]: n, ...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const my = (e, t, n, r) => ({
				...e,
				[t]: {
					...e[t],
					isPending: n,
					...r && {
						utcTimeStamp: r
					}
				}
			});
			var vy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fy.N:
						return my(e, t.payload, !0);
					case fy.O:
						return my(e, fy.b, !0);
					case fy.y:
						return my(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case fy.z:
						return my(e, fy.b, !1, t.payload.utcTimeStamp);
					case fy.M:
						return my(e, t.payload.streamId, !1);
					case fy.L:
						return my(e, fy.b, !1);
					default:
						return e
				}
			};
			const Oy = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var Ey = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fy.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case fy.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case fy.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				_y = Object(S.c)({
					config: yy,
					error: gy,
					pending: vy,
					recommendedViewerSubreddits: Ey
				});
			const Iy = {};
			var Sy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Iy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fy.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case fy.F:
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
			const jy = {
				cursor: fy.W,
				timestamps: {},
				visitOrder: []
			};
			var wy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fy.P:
						return jy;
					case fy.X: {
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
						return Ty(e, t.payload.id);
					case fy.E:
						return Ty(e, t.payload);
					case Ti.k: {
						const n = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return Dy(e, n)
					}
					case fy.V: {
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
			const Ty = (e, t) => {
					const n = e.visitOrder.indexOf(t);
					if (-1 === n) return e;
					const r = n > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: r
					}
				},
				Dy = (e, t) => {
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
				Ay = {
					ended: [],
					removed: []
				};

			function Py(e) {
				return [...new Set(e)]
			}
			var Cy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ay,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fy.t:
						return {
							...e, ended: Py(e.ended.concat(t.payload))
						};
					case fy.u:
						return {
							...e, removed: Py(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const Ry = {};
			var Ny = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ry,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fy.z:
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
			const ky = {},
				xy = (e, t) => {
					const n = Object.keys(e).reduce((t, n) => ({
						...t,
						[n]: {
							...e[n],
							rank: fy.m
						}
					}), {});
					return t.reduce((e, t, n) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: fy.l - n
						}
					}), n)
				},
				Ly = (e, t) => {
					const n = t.post.id,
						r = e[n] ? e[n].rank : fy.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: r
						}
					}
				};
			var Uy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ky,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fy.y:
						return Ly(e, t.payload.model);
					case fy.z:
						return xy(e, t.payload.models);
					case fy.D: {
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
			const My = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var Gy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : My,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fy.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case fy.A:
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
			const Fy = {
				reported: []
			};
			var By = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fy,
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
			const qy = {
				isIntroFinished: !1
			};
			var Vy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fy.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Wy = {
				reportedStreams: []
			};
			var Hy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fy.C:
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
				Qy = Object(S.c)({
					api: _y,
					history: wy,
					hlsStreams: Cy,
					listings: Ny,
					models: Uy,
					preloads: Gy,
					reports: By,
					theaterSettings: Vy,
					userSettings: Hy,
					automuteLevels: Sy
				}),
				$y = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				Ky = n("./src/reddit/actions/session.ts");
			const zy = [],
				Yy = (e, t) => nl()(e, t) ? e : t;
			var Xy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ky.c:
					case Ky.d:
						return zy;
					case $y.d:
						return Yy(e, t.subreddits);
					case $y.f: {
						const {
							payload: n
						} = t, r = [n, ...e];
						return Array.from(new Set(r)).slice(0, $y.c)
					}
					case $y.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, $y.c)
					}
					default:
						return e
				}
			};
			const Jy = {};
			var Zy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jy,
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
				eg = n("./src/reddit/actions/pages/report/constants.ts");
			var tg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case eg.a:
						return t.payload;
					default:
						return e
				}
			};
			var ng = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case eg.b:
						return t.payload;
					case eg.c:
					case eg.d:
						return !1;
					default:
						return e
				}
			};
			var rg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case eg.d:
						return !0;
					case eg.c:
					case eg.b:
						return !1;
					default:
						return e
				}
			};
			var sg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eg.c:
							return !0;
						case eg.b:
						case eg.d:
							return !1;
						default:
							return e
					}
				},
				ag = Object(S.c)({
					error: ng,
					pending: rg,
					success: sg
				}),
				og = n("./src/reddit/actions/reportPageRules/constants.ts");
			const cg = [];
			var dg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case og.a:
							return t.payload;
						default:
							return e
					}
				},
				ig = Object(S.c)({
					reportPageApi: ag,
					reportPageRules: dg,
					initialReason: tg
				}),
				ug = n("./src/reddit/actions/reportRules.ts");
			const lg = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var pg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ug.b:
						return {
							...e, sitewideRules: t.payload
						};
					case ug.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(xe.a)("REQUEST_HOST_SET");
			var bg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			const fg = "RUN_TIME_ENV_VARS__IS_STAGING",
				hg = (Object(xe.a)(fg), {
					staging: !1,
					startTimeInMillis: (new Date).getTime()
				});
			var yg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fg:
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				gg = n("./src/reddit/components/SearchDropdown/index.tsx");
			var mg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.g:
						return !0;
					case Pc.b: {
						const {
							event: n
						} = t.payload, r = n.target, s = document.getElementById(gg.b), a = document.getElementById(gg.a);
						return !(!r || !((null == s ? void 0 : s.contains(r)) || (null == a ? void 0 : a.contains(r)))) && e
					}
					case Ue.f:
					case Pc.a:
					case Pc.c:
						return !1;
					default:
						return e
				}
			};
			var vg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.c:
					case Ue.i: {
						const {
							searchQuery: e
						} = t.payload;
						return e || ""
					}
					default:
						return e
				}
			};
			const Og = Object.create(null);
			var Eg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Og,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Ue.h: {
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
				_g = n("./src/reddit/models/Search/index.ts");
			const Ig = {};
			var Sg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ig,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.h: {
							const {
								typeaheadSuggestions: n
							} = t.payload, r = {};
							return Object.keys(n).forEach(e => {
								const t = n[e];
								return r[e] = Object(_g.e)(t)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				jg = Object(S.c)({
					idsByQuery: Eg,
					models: Sg
				});
			const wg = {};
			var Tg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.c: {
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
				Dg = Object(S.c)({
					isDropdownOpen: mg,
					isSubredditSearchEnabled: function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case Ue.a:
								return !1;
							case Ue.b:
								return !0;
							default:
								return e
						}
					},
					searchQuery: vg,
					typeahead: jg,
					viewTreatment: Tg
				}),
				Ag = n("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Pg = {};
			var Cg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.c: {
						const {
							key: n,
							listingOrder: r,
							postOrder: s,
							posts: a,
							searchQuery: o,
							subreddits: c,
							viewTreatment: d
						} = t.payload, i = {
							subredditIcons: [],
							displayText: null,
							subredditOccurrences: 0,
							searchQuery: o
						};
						if (d === Ag.c.Trending) {
							const e = [];
							if (r && r.map(t => {
									!e.includes(t.id) && c[t.id] && (e.push(t.id), i.subredditIcons.push({
										url: c[t.id].icon.url,
										subredditName: c[t.id].name
									}), i.displayText || (i.displayText = c[t.id].displayText))
								}), s)
								for (let t = 0; t < s.length; t++) {
									const n = a[s[t]],
										r = n && n.belongsTo ? n.belongsTo.id : void 0;
									r && !e.includes(r) && c[r] && (e.push(r), i.subredditIcons.push({
										url: c[r].icon.url,
										subredditName: c[r].name
									}))
								}
							c && (i.subredditOccurrences = Object.keys(c).length - 1)
						}
						return {
							...e,
							[n]: i
						}
					}
					default:
						return e
				}
			};
			const Rg = {};
			var Ng = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.c: {
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
			const kg = {};
			var xg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.c: {
							const {
								key: n,
								searchDiscoveryUnitOrder: r
							} = t.payload;
							return r ? {
								...e,
								[n]: r
							} : kg
						}
						default:
							return e
					}
				},
				Lg = Object(S.c)({
					headerContent: Cg,
					models: Ng,
					order: xg
				}),
				Ug = n("./src/reddit/actions/searchQueryId/index.tsx");
			const Mg = {};
			Object(xe.a)("SEO__CRAWLER_RECEIVED");
			var Gg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				Fg = n("./src/reddit/actions/seo/linksModule.ts");
			const Bg = {};
			var qg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fg.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case Fg.c:
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
				Vg = n("./src/reddit/actions/seo/topicLinks.ts");
			const Wg = {};
			var Hg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vg.a:
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
				Qg = Object(S.c)({
					crawler: Gg,
					linksModule: qg,
					topicLinks: Hg
				}),
				$g = n("./src/reddit/actions/shortcuts/constants.ts");
			var Kg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $g.a:
						return t.payload;
					case u.b:
						return null;
					default:
						return e
				}
			};
			var zg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $g.b:
							return t.payload || null;
						default:
							return e
					}
				},
				Yg = n("./src/reddit/constants/shortcuts.ts"),
				Xg = n("./src/reddit/helpers/history/index.ts");
			const Jg = Yg.d.Global,
				Zg = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(Xg.b)(Hl.b.IsOverlay) ? Yg.d.Lightbox : Yg.d.CommentPage;
						case "rpan":
							return Object(Xg.b)(Hl.b.IsOverlay) ? Yg.d.Lightbox : Jg;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return Yg.d.Listing;
						case "modQueuePages":
							return Yg.d.Modqueue;
						default:
							return Jg
					}
				};
			var em = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.b:
							const n = t.payload;
							if (n.routeMatch) {
								const e = n.routeMatch.route.meta;
								return Zg(e)
							}
							return Jg;
						default:
							return e
					}
				},
				tm = Object(S.c)({
					activeCommentId: Kg,
					activePostId: zg,
					namespace: em
				});
			var nm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					if (e) return e;
					switch (t.type) {
						case y.q:
						case y.r:
							return !0;
						default:
							return e
					}
				},
				rm = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				sm = Object(S.c)({
					firstFetch: nm,
					models: rm.b
				}),
				am = n("./src/reddit/actions/streaming/modSettings.ts");
			var om = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case am.b:
					case am.c:
						return null;
					case am.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var cm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case am.b:
							return !0;
						case am.c:
						case am.a:
							return !1;
						default:
							return e
					}
				},
				dm = Object(S.c)({
					error: om,
					pending: cm
				}),
				im = n("./src/reddit/actions/streaming/constants.ts");
			const um = {};
			var lm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : um,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case im.a: {
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
				pm = Object(S.c)({
					api: dm,
					modSettings: lm
				}),
				bm = n("./src/reddit/models/StructuredStyles/index.ts");
			const fm = {};
			var hm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.h:
						case b.b:
						case b.d:
							return t.payload.styles;
						case b.e:
							return fm;
						case b.c: {
							const n = t.payload;
							return {
								...e,
								...n
							}
						}
						case b.k: {
							const e = t.payload;
							return Object(bm.h)(e.styles)
						}
						default:
							return e
					}
				},
				ym = n("./src/reddit/actions/exportImportStyles.ts");
			var gm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ym.c:
					case ym.b:
						return null;
					case ym.a:
						return t.payload;
					default:
						return e
				}
			};
			var mm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ym.c:
							return !0;
						case ym.b:
						case ym.a:
							return !1;
						default:
							return e
					}
				},
				vm = Object(S.c)({
					error: gm,
					pending: mm
				}),
				Om = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				Em = n("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const _m = {};
			var Im = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _m,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case W.c:
						case Ue.e:
						case Re.PAGE_LOADED:
						case Rr.PAGE_LOADED: {
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
						case Om.b: {
							const {
								flairId: n,
								template: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case Om.a: {
							const {
								flairId: n
							} = t.payload;
							return Object(Rt.a)(e, n)
						}
						case Np.b: {
							const {
								templateId: n
							} = t.payload;
							return Object(Rt.a)(e, n)
						}
						case b.k:
							return _m;
						case Em.b: {
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
				Sm = Object(S.c)({
					models: Im
				});
			const jm = {};
			var wm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.f: {
						const n = t.payload;
						return {
							...e,
							[n.imageKey]: n.uploadId
						}
					}
					case b.k:
					case b.e:
						return jm;
					default:
						return e
				}
			};
			var Tm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var Dm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.d:
						return t.payload.subredditId;
					case b.e:
						return null;
					case u.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case Sn.g:
						return null;
					default:
						return e
				}
			};
			const Am = {};
			var Pm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Am,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case Re.PAGE_LOADED:
						case Rr.PAGE_LOADED: {
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
						case Ue.e:
						case W.c: {
							const {
								payload: n
							} = t;
							if (!n.structuredStyles || !n.structuredStyles.data) return e;
							if (!n.subredditName) return e;
							let r;
							if (Oa()(n.subreddits, (e, t) => {
									if (e.name.toLowerCase() === n.subredditName.toLowerCase()) return r = t, !1
								}), !r) return e;
							const s = n.structuredStyles.data.style;
							return {
								...e,
								[r]: s
							}
						}
						case b.m: {
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
						case b.h: {
							const n = t.payload;
							return {
								...e,
								[n.subredditId]: n.styles
							}
						}
						case b.k: {
							const n = t.payload,
								r = Object(bm.h)(n.styles);
							return {
								...e,
								[n.subredditId]: r
							}
						}
						case ol.l: {
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
						case Sn.l: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return hb(e, {
									[n.subredditId]: {
										bannerBackgroundImage: n.imageUrl
									}
								})
							}
							return e
						}
						case Sn.k: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return hb(e, {
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
				Cm = Object(S.c)({
					draft: hm,
					exportStyles: vm,
					flairTemplate: Sm,
					imagePreviews: wm,
					isBladeEditorDirty: Tm,
					isEditing: Dm,
					models: Pm
				});
			Object(xe.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var Rm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				Nm = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const km = {};
			var xm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : km,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Nm.c:
					case Nm.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Nm.a: {
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
			const Lm = {};
			var Um = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Nm.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Nm.b:
						case Nm.a: {
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
				Mm = Object(S.c)({
					error: xm,
					pending: Um
				});
			const Gm = {};
			var Fm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Nm.b: {
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
				Bm = Object(S.c)({
					api: Mm,
					models: Fm
				}),
				qm = n("./src/reddit/actions/category/constants.ts"),
				Vm = n("./src/reddit/actions/subredditMention/constants.ts");
			const Wm = {};
			var Hm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Vm.d:
					case F.b:
					case F.f:
					case W.c:
					case H.SUBREDDIT_FAILED:
					case H.SUBREDDIT_LOADED:
					case Re.PAGE_LOADED:
					case Rr.PAGE_LOADED:
					case B.b:
					case B.e:
					case Ne.b:
					case Ne.a:
					case Ne.e:
					case Ne.d:
					case q.PROFILE_POSTS_LOADED:
					case Q.b:
					case Q.e:
					case Ue.e:
					case di.TOPIC_DATA_LOADED:
					case bi.u: {
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
					case eo.a: {
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
					case il.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === Ah.a.SUBREDDIT);
						return s.length ? s.reduce((e, t) => Object(N.setIn)(e, [t.id, "userIsSubscriber"], r), e) : e
					}
					case Yo.g:
					case qm.f:
					case bi.g:
					case bi.o:
					case tr.B: {
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
					case eo.b: {
						const n = t.payload,
							{
								emojiCustomSize: r,
								subredditId: s
							} = n,
							a = e[s];
						if (!a) return e;
						const o = {
							...a
						};
						if (r) {
							const {
								width: e,
								height: t
							} = r;
							o.emojisCustomSize = [e, t]
						} else delete o.emojisCustomSize;
						return {
							...e,
							[s]: o
						}
					}
					case $.c: {
						const {
							data: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case Nm.b: {
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
			const Qm = {};
			var $m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $.b:
					case $.c: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case $.a: {
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
			var Km = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				zm = Object(S.c)({
					error: $m,
					pending: Km
				}),
				Ym = n("./src/reddit/actions/subredditCreation.ts");
			const Xm = {
				apiError: null
			};
			var Jm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ym.b: {
						const {
							error: n
						} = t.payload;
						return {
							...e,
							apiError: n
						}
					}
					case Ym.a:
					case Ym.c:
					case Ym.e:
						return Xm;
					default:
						return e
				}
			};
			var Zm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ym.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case Ym.a:
					case Ym.c:
					case Ym.e:
						return null;
					default:
						return e
				}
			};
			var ev = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ym.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case Ym.c:
					case Ym.b:
						return null;
					default:
						return e
				}
			};
			var tv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ym.c:
							return !0;
						case Ym.e:
						case Ym.b:
							return !1;
						default:
							return e
					}
				},
				nv = Object(S.c)({
					error: Jm,
					lastCreatedSubredditId: ev,
					initialCrosspost: Zm,
					pending: tv
				});
			var rv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bi.w:
							return !0;
						case bi.x:
						case bi.v:
							return !1;
						default:
							return e
					}
				},
				sv = Object(S.c)({
					pending: rv
				});
			const av = {};
			var ov = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : av,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $.l:
					case $.m: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case $.k: {
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
			const cv = {};
			var dv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.l: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case $.m:
						case $.k: {
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
				iv = Object(S.c)({
					error: ov,
					pending: dv
				});
			const uv = {};
			var lv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bi.f:
						case bi.g:
							return {
								...e, [t.payload.key]: !1
							};
						case bi.h:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				pv = Object(S.c)({
					pending: lv
				});
			var bv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var fv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				hv = Object(S.c)({
					error: bv,
					pending: fv
				});
			var yv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bi.k: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case bi.m:
					case bi.l:
						return null;
					default:
						return e
				}
			};
			var gv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bi.m:
							return !0;
						case bi.l:
						case bi.k:
							return !1;
						default:
							return e
					}
				},
				mv = Object(S.c)({
					error: yv,
					pending: gv
				}),
				vv = n("./src/reddit/actions/subredditRules/constants.ts");
			var Ov = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case vv.c:
							return !0;
						case vv.a:
						case vv.b:
							return !1;
						default:
							return e
					}
				},
				Ev = n("./src/reddit/actions/subredditSettings.ts");
			var _v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ev.e:
							return !0;
						case Ev.f:
						case Ev.d:
							return !1;
						default:
							return e
					}
				},
				Iv = Object(S.c)({
					pending: _v
				});
			const Sv = {};
			var jv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bi.n:
						case bi.o:
							return {
								...e, [t.payload.key]: !1
							};
						case bi.p:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				wv = Object(S.c)({
					pending: jv
				}),
				Tv = n("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const Dv = {};
			var Av = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Tv.c:
					case Tv.b: {
						const n = t.payload,
							{
								subredditName: r
							} = n.options;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Tv.a: {
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
			const Pv = {};
			var Cv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tv.c: {
							const n = t.payload,
								{
									subredditName: r
								} = n.options;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Tv.b:
						case Tv.a: {
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
				Rv = Object(S.c)({
					error: Av,
					pending: Cv
				});
			const Nv = {};
			var kv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lb.c:
					case lb.b: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case lb.a: {
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
			const xv = {};
			var Lv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lb.c: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case lb.b:
						case lb.a: {
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
				Uv = Object(S.c)({
					error: kv,
					pending: Lv
				}),
				Mv = Object(S.c)({
					about: zm,
					create: nv,
					inlineEditing: sv,
					models: iv,
					onboarding: pv,
					productOffers: hv,
					rankings: mv,
					rules: Ov,
					settings: Iv,
					similar: wv,
					topContent: Uv,
					wiki: Rv
				}),
				Gv = n("./node_modules/lodash/isNil.js"),
				Fv = n.n(Gv);
			const Bv = {};
			var qv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.d: {
							const {
								subredditId: n,
								forceState: r
							} = t.payload;
							return {
								...e,
								[n]: Fv()(r) ? !e[n] : r
							}
						}
						default:
							return e
					}
				},
				Vv = Object(S.c)({
					meta: qv
				});
			const Wv = {};
			var Hv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qm.f: {
						const {
							categoryId: n,
							subredditIds: r
						} = t.payload;
						return ya()(r) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Qv = {
				pending: !1,
				items: {}
			};
			var $v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Gp.c:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Gp.d:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const Kv = {};
			var zv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.c: {
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
				Yv = n("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const Xv = {};
			var Jv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Yv.b:
						case Yv.c:
						case Yv.a: {
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
				Zv = n("./src/reddit/actions/subredditCrosspostable.ts");
			var eO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zv.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Zv.c:
					case Zv.b:
						return null;
					default:
						return e
				}
			};
			var tO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zv.c:
							return !0;
						case Zv.b:
						case Zv.a:
							return !1;
						default:
							return e
					}
				},
				nO = Object(S.c)({
					errors: eO,
					pending: tO
				});
			const rO = {};
			var sO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zv.b: {
							const {
								subredditIds: n
							} = t.payload;
							return nl()(e, n) ? e : n
						}
						default:
							return e
					}
				},
				aO = Object(S.c)({
					api: nO,
					ids: sO
				});
			const oO = {};
			var cO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Eb.a: {
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
							return hb(o, {
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
				dO = Object(S.c)({
					models: cO
				});
			const iO = {};
			var uO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.a: {
						const {
							assets: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case i.g:
					case i.j: {
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
			const lO = {};
			var pO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.a: {
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
			const bO = {};
			var fO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.a: {
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
			const hO = {};
			var yO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.p: {
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
				gO = Object(S.c)({
					assets: uO,
					communityRaw: pO,
					distributions: fO,
					releaseNotes: yO
				}),
				mO = n("./node_modules/lodash/isEqualWith.js"),
				vO = n.n(mO),
				OO = n("./src/lib/forceHttps/index.ts");
			const EO = {},
				_O = (e, t) => {
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
						return a.icon.url ? o.icon.url = Object(OO.a)(a.icon.url) : s && s.icon.url ? o.icon = s.icon : o.icon.url = "", s && s.allowChatPostCreation && (o.allowChatPostCreation = !0), Object(N.set)(n, r, o)
					}, e) : e
				},
				IO = (e, t) => {
					return !vO()(e, t, (e, t, n) => {
						if ("subscribers" === n) return !0
					})
				},
				SO = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					for (let s = 0; s < n.length; s++) {
						const a = n[s],
							o = e[a],
							c = t[a];
						o && !IO(o, c) || (r[a] = {
							...o,
							...c
						})
					}
					return Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var jO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case il.c:
						return _O(e, t.payload.subreddits || {});
					case Ae.b:
					case Ae.f:
					case $y.b:
					case Vm.d:
					case qm.f:
					case we.f:
					case Yo.g:
					case li.c:
					case pi.b:
					case Pe.e:
					case Pe.h:
					case G.k:
					case De.r:
					case De.u:
					case ol.h:
					case ci.b:
					case F.b:
					case F.f:
					case we.b:
					case Ce.b:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case Ne.b:
					case Ne.e:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case ol.e:
					case W.c:
					case H.SUBREDDIT_LOADED:
					case Re.PAGE_LOADED:
					case Bn.e:
					case Rr.PAGE_LOADED:
					case ol.o:
					case Q.b:
					case Q.e:
					case ke.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ue.e:
					case $.c:
					case $.f:
					case $.i:
					case bi.a:
					case bi.g:
					case bi.o:
					case di.TOPIC_DATA_LOADED:
					case di.MORE_POSTS_LOADED:
					case tr.B:
						return SO(e, t.payload.subreddits || {});
					case G.f:
					case G.i:
					case G.m:
					case G.p:
					case G.v: {
						const {
							response: n
						} = t.payload, {
							subreddits: r
						} = n;
						return SO(e, r)
					}
					case Ue.h: {
						const {
							typeaheadSuggestions: n
						} = t.payload;
						return SO(e, n.subreddits || {})
					}
					case De.B: {
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
						return SO(e, n)
					}
					case b.m: {
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
					case Ev.f: {
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
					case Nm.b: {
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
			var wO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var TO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var DO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				AO = Object(S.c)({
					errors: wO,
					fetched: TO,
					pending: DO
				});
			var PO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.f: {
							const {
								subreddits: e
							} = t.payload, n = Object.keys(e);
							return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
						}
						default:
							return e
					}
				},
				CO = Object(S.c)({
					api: AO,
					order: PO
				});
			const RO = {};
			var NO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ev.a: {
						const n = t.payload;
						return Object(N.merge)(e, n)
					}
					case Ev.b: {
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
			const kO = {};
			var xO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bi.g: {
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
			const LO = {};
			var UO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.ob: {
						const {
							recentSupporters: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case ee.S:
					case ee.V: {
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
									displayName: Object(z.e)(s),
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
			const MO = {};
			var GO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case ee.pb:
					case ee.ob: {
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
					case ee.I: {
						const {
							subredditsPowerupsInfo: n
						} = t.payload, r = n.reduce((e, t) => {
							let {
								id: n,
								powerups: r
							} = t;
							return {
								...e,
								[n]: r
							}
						}, {});
						return {
							...e,
							...r
						}
					}
					case ee.S:
					case ee.V: {
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
			const FO = {},
				BO = (e, t, n) => {
					const r = null == e ? void 0 : e[t],
						s = null == r ? void 0 : r.emotes;
					if (!s) return e;
					const a = La(n, t),
						o = [...s, a];
					return {
						...e,
						[t]: {
							...r,
							emotes: o
						}
					}
				},
				qO = (e, t, n) => {
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
			var VO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.ob: {
						const {
							powerups: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: Ua(n)
						}
					}
					case xa.b: {
						const {
							subredditId: n,
							emoji: r
						} = t.payload, s = e[n];
						return {
							...e,
							[n]: BO(s, n, r)
						}
					}
					case xa.c: {
						const {
							subredditId: n,
							emojiId: r
						} = t.payload, s = e[n];
						return {
							...e,
							[n]: qO(s, n, r)
						}
					}
					default:
						return e
				}
			};
			const WO = {},
				HO = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var QO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.ob: {
							const {
								topSupporters: n,
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: n.sort(HO)
							}
						}
						case ee.S:
						case ee.V: {
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
								[n]: c.sort(HO)
							};
							if (r > 0) {
								const t = {
									score: r,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: a ? null : {
										id: s.id,
										displayName: Object(z.e)(s),
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
									[n]: [t, ...e[n]].sort(HO)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				$O = n("./src/lib/makeProductOfferKey/index.ts");
			const KO = {};
			var zO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.cb:
					case ee.ob: {
						const {
							subredditId: n,
							productOffers: r
						} = t.payload;
						if (!(null == r ? void 0 : r.length)) return e;
						const s = r.reduce((e, t) => {
							const r = Object($O.a)(t.type, n);
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
			const YO = {};
			var XO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.g: {
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
				JO = n("./src/reddit/models/NewCommunityProgress/index.ts");
			const ZO = {},
				eE = e => e.filter(e => {
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
						return JO.e.includes(t)
					})
				});
			var tE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bi.y: {
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
						const s = eE(r.cards);
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
			const nE = {};
			var rE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r;
				switch (t.type) {
					case bi.y: {
						const {
							id: n,
							questions: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case we.f:
					case we.b: {
						const {
							subreddits: r
						} = t.payload, s = {};
						for (const e of Object.keys(r)) {
							const t = r[e];
							((null === (n = t.answerableQuestions) || void 0 === n ? void 0 : n.length) || 0) > 0 && (s[e] = t.answerableQuestions)
						}
						return 0 === Object.keys(s).length ? e : Object(N.assign)(e, s)
					}
					case bi.d: {
						const {
							subredditId: n,
							questionId: s
						} = t.payload, a = null !== (r = e[n]) && void 0 !== r ? r : [];
						return Object(N.setIn)(e, [n], a.filter(e => e.id !== s))
					}
					case bi.e:
						return nE;
					default:
						return e
				}
			};
			const sE = {};
			var aE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bi.b: {
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
			const oE = {};
			var cE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bi.c: {
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
				dE = n("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const iE = {};
			var uE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dE.a: {
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
			const lE = {};
			var pE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vv.b: {
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
					case vv.e: {
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
					case vv.f: {
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
					case vv.g:
					case vv.d: {
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
			const bE = {};
			var fE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ev.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case Ev.f: {
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
					case Sn.n: {
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
			const hE = {};
			var yE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bi.o: {
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
			const gE = {};
			var mE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bi.y: {
						const {
							id: n,
							survey: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case bi.z: {
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
			const vE = {};
			var OE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Yo.g: {
						const {
							subredditTopContent: n
						} = t.payload;
						return {
							...e,
							...n.subredditTopContent
						}
					}
					case lb.b: {
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
			const EE = [];
			var _E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case we.b:
					case H.SUBREDDIT_LOADED: {
						const {
							trendingSubredditIds: n
						} = t.payload;
						return n && n.length ? n : e
					}
					default:
						return e
				}
			};
			const IE = {};
			var SE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vm.d:
						case tr.B:
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
				jE = Object(S.c)({
					about: Hm,
					api: Mv,
					appliedFilters: Vv,
					byCategory: Hv,
					carousel: $v,
					communityInfo: zv,
					countrySiteSettings: Jv,
					crosspostable: aO,
					duplicates: dO,
					gov: gO,
					models: jO,
					moderated: CO,
					notificationSettings: NO,
					onboarding: xO,
					powerupRecentSupporters: UO,
					powerups: GO,
					powerupsEmojis: VO,
					powerupTopSupporters: QO,
					productOffers: zO,
					products: XO,
					progressModule: tE,
					questions: rE,
					rankings: aE,
					rankingsPageInfo: cE,
					related: uE,
					rules: pE,
					settings: fE,
					similar: yE,
					survey: mE,
					topContent: OE,
					trending: _E,
					unavailableModels: SE
				});
			const wE = {};
			var TE = Object(Nf.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.SUBREDDIT_LOADED: {
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
							return Ee()({
								...e
							}, s)
						}
						case Ti.o: {
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
				}), wE),
				DE = Object(S.c)({
					data: TE
				}),
				AE = n("./node_modules/lodash/values.js"),
				PE = n.n(AE);
			const CE = [];
			var RE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case il.d: {
						const {
							makeFavorite: n,
							multiredditsModelsState: r,
							multiredditPath: s
						} = t.payload;
						if (n) {
							const t = [...e],
								n = al(t, s, (e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(n, 0, s), t
						}
						return e.filter(e => e !== s)
					}
					case De.u: {
						const {
							multireddits: e
						} = t.payload;
						return PE()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case il.e: {
						const {
							follow: n,
							multiredditPath: r
						} = t.payload;
						return n ? e : e.filter(e => e !== r)
					}
					case De.j: {
						const n = t.payload;
						return e.filter(e => e !== n)
					}
					default:
						return e
				}
			};
			var NE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case il.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case il.b:
					case il.c:
						return null;
					default:
						return e
				}
			};
			var kE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case il.b:
					case il.c:
						return !0;
					case il.a:
						return !1;
					default:
						return e
				}
			};
			var xE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case il.b:
							return !0;
						case il.c:
						case il.a:
							return !1;
						default:
							return e
					}
				},
				LE = Object(S.c)({
					errors: NE,
					fetched: kE,
					pending: xE
				});
			const UE = [];
			var ME = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case il.c: {
						const {
							profiles: e,
							favoriteProfileIds: n,
							favoriteSubredditIds: r
						} = t.payload;
						let s;
						return (s = n && n.length ? n : r ? r.filter(t => !!e[t]) : []).sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), s
					}
					case il.f: {
						const {
							makeFavorite: n,
							identifier: r,
							profileModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== Ah.a.PROFILE) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = al(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case il.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === Ah.a.PROFILE && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const GE = [];
			var FE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case il.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: n
						} = t.payload, r = n ? n.filter(t => !!e[t]) : [];
						return r.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), r
					}
					case il.f: {
						const {
							makeFavorite: n,
							identifier: r,
							subredditModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== Ah.a.SUBREDDIT) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = al(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case il.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === Ah.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const BE = [],
				qE = e => (t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1;
			var VE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.u: {
							const {
								multireddits: n
							} = t.payload, r = PE()(n).map(e => {
								let {
									url: t
								} = e;
								return t.toLowerCase()
							}).sort(qE(n));
							return nl()(e, r) ? e : r
						}
						case Ce.b: {
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
								d = sl()(e, o).sort(qE(c));
							return nl()(e, d) ? e : d
						}
						case il.e: {
							const {
								follow: n,
								multiredditPath: r,
								multiredditsModelsState: s
							} = t.payload;
							return n ? [...e, r].sort(qE(s)) : e.filter(e => e !== r)
						}
						case De.j: {
							const n = t.payload;
							return e.filter(e => e !== n)
						}
						case De.g:
						case De.m: {
							const {
								multireddit: n,
								multiredditsModelsState: r
							} = t.payload, s = {
								...r,
								[n.url]: n
							};
							return [...e, n.url].sort(qE(s))
						}
						default:
							return e
					}
				},
				WE = n("./node_modules/lodash/difference.js"),
				HE = n.n(WE);
			const QE = [];
			var $E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ol.p: {
						const {
							profileOrder: n
						} = t.payload;
						return Hb()([...e, ...n])
					}
					case il.c: {
						const {
							profiles: e
						} = t.payload, n = Object.keys(e);
						return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
					}
					case il.h: {
						const {
							identifiers: n,
							profileModels: r,
							userIsSubscriber: s
						} = t.payload, a = n.filter(e => e.type === Ah.a.PROFILE);
						if (!a.length) return e;
						const o = a.map(e => e.id);
						return s ? Hb()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : HE()(e, o)
					}
					default:
						return e
				}
			};
			const KE = [];
			var zE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ol.p: {
							const {
								subredditOrder: n
							} = t.payload;
							return Hb()([...e, ...n])
						}
						case il.c: {
							const {
								subreddits: e
							} = t.payload, n = Object.keys(e);
							return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
						}
						case il.h: {
							const {
								identifiers: n,
								subredditModels: r,
								userIsSubscriber: s
							} = t.payload, a = n.filter(e => e.type === Ah.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const o = a.map(e => e.id);
							return s ? Hb()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : HE()(e, o)
						}
						default:
							return e
					}
				},
				YE = Object(S.c)({
					api: LE,
					favoriteMultiOrder: RE,
					favoriteProfileOrder: ME,
					favoriteSubredditOrder: FE,
					multiredditOrder: VE,
					profileOrder: $E,
					subredditOrder: zE
				}),
				XE = n("./src/reddit/actions/survey/constants.ts");
			var JE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case XE.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var ZE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case XE.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var e_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case XE.b:
						return !e;
					default:
						return e
				}
			};
			var t_ = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case XE.i:
							return !e;
						default:
							return e
					}
				},
				n_ = Object(S.c)({
					activeDemoTrigger: JE,
					demoTriggerThreshold: ZE,
					isDemoEnabled: e_,
					isSampleFactorEnabled: t_
				});
			var r_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wt.a:
							const {
								hasUnreadMessages: n
							} = t.payload;
							return n;
						default:
							return e
					}
				},
				s_ = n("./src/reddit/actions/tags/constants.ts");
			const a_ = {
				pending: !1,
				error: !1
			};
			var o_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s_.l:
						return {
							...e, pending: !0
						};
					case s_.m:
						return {
							error: !1, pending: !1
						};
					case s_.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const c_ = {
				pending: !1,
				error: !1
			};
			var d_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s_.o:
						return {
							...e, pending: !0
						};
					case s_.p:
						return {
							error: !1, pending: !1
						};
					case s_.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const i_ = {
				pending: !1,
				error: !1
			};
			var u_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s_.t:
						return {
							...e, pending: !0
						};
					case s_.s:
					case s_.r:
					case s_.e:
					case s_.j:
						return {
							error: !1, pending: !1
						};
					case s_.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const l_ = {
				pending: !1,
				error: !1
			};
			var p_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s_.v:
						return {
							...e, pending: !0
						};
					case s_.w:
						return {
							error: !1, pending: !1
						};
					case s_.u:
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
			var f_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s_.g:
							return {
								...e, pending: !0
							};
						case s_.h:
							return {
								error: !1, pending: !1
							};
						case s_.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				h_ = Object(S.c)({
					create: o_,
					deleteTag: d_,
					fetch: u_,
					update: p_,
					updatePrimaryTag: f_
				});
			const y_ = {
				global: [],
				recommendedGlobal: []
			};
			var g_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s_.w:
						case s_.r:
						case s_.e:
						case s_.j: {
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
				m_ = n("./node_modules/lodash/uniqWith.js"),
				v_ = n.n(m_),
				O_ = n("./src/reddit/models/Option/index.ts");
			const E_ = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var __ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s_.d: {
							const {
								option: n
							} = t.payload;
							return {
								...e,
								selectedOptions: v_()([...e.selectedOptions || [], {
									...n
								}], O_.a)
							}
						}
						case s_.c: {
							const {
								option: n
							} = t.payload, r = e.selectedOptions.findIndex(e => Object(O_.a)(e, n));
							return e.selectedOptions.splice(r, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case s_.b: {
							const {
								input: n
							} = t.payload;
							return {
								...e,
								tagInput: n
							}
						}
						case s_.a: {
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
				I_ = n("./src/reddit/helpers/tags/index.ts");
			const S_ = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var j_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s_.j: {
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
						case s_.w:
						case s_.s:
						case s_.r: {
							const {
								primaryTag: n,
								globalSubredditTags: r,
								subredditScopedTags: s,
								itemTags: a,
								suggestedItemTags: o,
								subredditId: c,
								geoPlace: d
							} = t.payload, i = {
								...e.subredditPrimaryTagId
							};
							return n ? i[c] = n.tag.id : delete i[c], {
								subredditPrimaryTagId: i,
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
								geoPlaces: d ? Object(N.set)(e.geoPlaces, c, d) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[c]: {
										...o[c] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[c]: Object(I_.a)(a[c] || {})
								}
							}
						}
						case s_.p: {
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
						case s_.e: {
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
						case s_.h: {
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
				w_ = n("./src/reddit/reducers/tags/selected/index.ts"),
				T_ = Object(S.c)({
					api: h_,
					availableGlobalTagOrder: g_,
					models: j_,
					selected: w_.b,
					creation: __
				}),
				D_ = n("./src/reddit/actions/redditEmbed.ts"),
				A_ = n("./src/reddit/actions/theme.ts"),
				P_ = n("./src/reddit/actions/users.ts"),
				C_ = n("./src/reddit/models/Theme/index.ts");
			const R_ = {
				current: C_.c,
				cached: {}
			};
			var N_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A_.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? C_.b : C_.c,
								cached: {}
							}
						}
						case In.b:
						case In.c:
						case In.k:
						case In.l:
						case In.g:
						case In.a:
						case In.m:
						case Ae.b:
						case Ae.f:
						case Pe.e:
						case Pe.h:
						case F.a:
						case F.e:
						case F.b:
						case F.f:
						case F.d:
						case F.h:
						case we.b:
						case H.SUBREDDIT_LOADED:
						case Ce.b:
						case Ce.a:
						case we.f:
						case D_.b:
						case $.i:
						case Ue.e:
						case W.c:
						case Sn.j:
						case Re.PAGE_LOADED:
						case Rr.PAGE_LOADED:
						case P_.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: C_.b,
									cached: {}
								} : {
									current: C_.c,
									cached: {}
								}
							}
							return e;
						case B.d:
						case B.e:
						case Ne.a:
						case Ne.b:
						case Ne.d:
						case Ne.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED: {
							const {
								account: n
							} = t.payload;
							return n ? n.nightmode ? {
								current: C_.b,
								cached: {}
							} : {
								current: C_.c,
								cached: {}
							} : e
						}
						case G.h:
						case G.j:
						case G.i:
						case G.g:
						case G.f:
						case G.n:
						case G.m:
						case G.p:
						case G.q:
						case G.w:
						case G.v:
							if (t.payload && t.payload.response && t.payload.response.preferences && "nightmode" in t.payload.response.preferences) {
								const {
									nightmode: e
								} = t.payload.response.preferences;
								return e ? {
									current: C_.b,
									cached: {}
								} : {
									current: C_.c,
									cached: {}
								}
							}
							return e;
						case Sn.i: {
							if (!t.payload) return e;
							const {
								nightmode: n
							} = t.payload;
							return n ? {
								current: C_.b,
								cached: {}
							} : {
								current: C_.c,
								cached: {}
							}
						}
						case b.d:
							return {
								current: C_.c, cached: {}
							};
						case b.e:
							return t.payload.nightmodeTempUpdated ? {
								current: C_.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				k_ = n("./src/reddit/actions/toaster.ts");
			const x_ = [];
			var L_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k_.c: {
							const n = t.payload,
								r = [];
							let s = !1;
							for (const t of e) {
								const e = t.id === n.id ? n : t;
								r.push(e), s = s || e === n
							}
							return s || r.push(n), r
						}
						case k_.b: {
							const n = t.payload;
							return e.filter(e => e.id !== n)
						}
						default:
							return e
					}
				},
				U_ = n("./src/reddit/actions/tooltip.ts");
			var M_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case U_.c:
						case U_.b:
						case U_.e:
						case U_.a: {
							const {
								args: e
							} = t.payload;
							return e || null
						}
						default:
							return e
					}
				},
				G_ = n("./src/reddit/components/ModWelcomeTooltip/index.tsx");
			var F_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case U_.c: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case U_.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? e : n
						}
						case U_.b: {
							const {
								tooltipId: n
							} = t.payload;
							return null !== e ? e : n || null
						}
						case U_.e: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : e
						}
						case ee.K:
						case U_.d:
						case u.b:
						case Pc.b:
						case Pc.c:
						case Pc.a:
							return t.type === u.b && e === G_.MOD_WELCOME_TOOLTIP_ID ? e : null;
						default:
							return e
					}
				},
				B_ = Object(S.c)({
					params: M_,
					tooltipId: F_
				}),
				q_ = n("./src/reddit/actions/tracing.ts");
			const V_ = {
				traceId: void 0
			};
			var W_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case q_.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				H_ = n("./src/lib/asyncActions/index.ts"),
				Q_ = n("./src/reddit/actions/reCaptchaEnterprise.ts");
			const $_ = Object(H_.c)(Q_.c.requestedActionType, Q_.c.succeededActionType, Q_.c.failedActionType),
				K_ = Object(H_.c)(Q_.a.requestedActionType, Q_.a.succeededActionType, Q_.a.failedActionType),
				z_ = Object(H_.c)(Q_.d.requestedActionType, Q_.d.succeededActionType, Q_.d.failedActionType);
			var Y_ = Object(S.c)({
					load: $_,
					execute: K_,
					send: z_
				}),
				X_ = n("./src/reddit/actions/tracking.ts");
			const J_ = {};
			var Z_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case X_.a: {
							const {
								routeKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case X_.b: {
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
				eI = Object(S.c)({
					reCaptchaEnterprise: Y_,
					viewportDataLoaded: Z_
				}),
				tI = n("./src/reddit/actions/trafficStats/constants.ts");
			var nI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tI.c:
						return !0;
					case tI.b:
					case tI.a:
						return !1;
					default:
						return e
				}
			};
			var rI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tI.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case tI.c:
							return null;
						default:
							return e
					}
				},
				sI = Object(S.c)({
					pending: nI,
					trafficStats: rI
				});
			var aI = function() {
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
			var oI = function() {
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
				cI = Object(S.c)({
					error: aI,
					pending: oI
				});
			var dI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.r:
						return (t.payload ? t.payload.contentId : null) || null;
					case r.b:
					case d.t:
						return null;
					default:
						return e
				}
			};
			var iI = function() {
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
			var uI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.r:
							return t.payload && t.payload.publicAddress || null;
						case r.b:
						case d.t:
							return null;
						default:
							return e
					}
				},
				lI = Object(S.c)({
					api: cI,
					contentId: dI,
					initialRecipient: iI,
					publicAddress: uI
				}),
				pI = Object(S.c)({
					communityPoints: lI
				}),
				bI = n("./src/reddit/actions/search/trending.ts");
			const fI = {};
			var hI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.SUBREDDIT_LOADED:
						case bI.a: {
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
				yI = Object(S.c)({
					models: hI
				});
			var gI = n("./src/reddit/routes/premium/index.ts");
			const mI = {};
			var vI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ry.a: {
							const {
								trophies: n
							} = t.payload;
							return Object.values(n).forEach(e => {
								"t6_bf" === e.awardId && (e.url = gI.b)
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				OI = n("./src/reddit/actions/upload.ts"),
				EI = n("./src/reddit/models/Upload/index.ts");
			const _I = {};
			var II = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _I,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case OI.d: {
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
									status: EI.a.PENDING
								}
							}
						}
						case OI.h: {
							const {
								key: n
							} = t.payload, r = e[n];
							return {
								...e,
								[n]: {
									...r,
									status: EI.a.UPLOADING
								}
							}
						}
						case OI.c: {
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
						case OI.e: {
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
						case OI.g: {
							const {
								key: n,
								url: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									status: EI.a.SUCCESS,
									url: r
								}
							}
						}
						case OI.b: {
							const {
								key: n,
								error: r
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									status: EI.a.FAILED,
									error: r
								}
							}
						}
						case OI.a: {
							const {
								key: n
							} = t.payload, r = e[n];
							return {
								...e,
								[n]: {
									...r,
									status: EI.a.CANCELED
								}
							}
						}
						case OI.f: {
							const {
								key: n
							} = t.payload, r = e[n];
							return r.metadata.localUrl && window.URL.revokeObjectURL(r.metadata.localUrl), Cr()(e, n)
						}
						default:
							return e
					}
				},
				SI = n("./src/reddit/actions/upvotePrompt.ts");
			var jI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case SI.a:
						return ++e;
					default:
						return e
				}
			};
			const wI = {};

			function TI(e, t) {
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
			var DI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.d:
					case d.a:
					case c.f:
					case d.t: {
						const {
							wallet: n
						} = t.payload;
						return TI(e, n)
					}
					case d.w: {
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
			Object(xe.a)("INBOX__COUNT_UPDATE");
			var AI = n("./src/reddit/actions/pages/appeal/constants.ts"),
				PI = n("./src/reddit/actions/pages/userDataRequest/index.ts"),
				CI = n("./src/reddit/actions/sso/constants.ts"),
				RI = n("./src/reddit/endpoints/profile/info.ts");
			const NI = (e, t) => {
				const {
					gender: n,
					...r
				} = {
					...e
				};
				if (!t || nl()(r, t)) return e;
				const {
					karma: s
				} = t;
				return {
					...t,
					karma: {
						...RI.a,
						...null == r ? void 0 : r.karma,
						...s
					},
					gender: n
				}
			};
			var kI = Object(Nf.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, s;
				switch (t.type) {
					case AI.a:
					case AI.b:
					case eg.b:
					case eg.c:
					case In.b:
					case In.c:
					case In.g:
					case In.a:
					case In.k:
					case In.l:
					case In.m:
					case Pe.e:
					case Pe.h:
					case Pe.g:
					case De.q:
					case De.r:
					case F.a:
					case F.e:
					case F.b:
					case F.f:
					case we.a:
					case we.b:
					case Ce.a:
					case Ce.b:
					case H.SUBREDDIT_FAILED:
					case ol.n:
					case B.b:
					case B.a:
					case B.e:
					case B.d:
					case V.c:
					case V.i:
					case Ne.e:
					case Ne.d:
					case Ne.b:
					case Ne.a:
					case q.PROFILE_POSTS_LOADED:
					case q.PROFILE_POSTS_FAILED:
					case H.SUBREDDIT_LOADED:
					case W.a:
					case W.c:
					case Re.PAGE_LOADED:
					case Rr.PAGE_LOADED:
					case Ue.c:
					case Ue.e:
					case D_.a:
					case D_.b:
					case Sn.j:
					case PI.b:
					case P_.c:
					case di.TOPIC_DATA_LOADED:
						return NI(e, t.payload.account);
					case P_.o:
						return e ? {
							...e,
							email: t.payload
						} : e;
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v:
					case G.h:
					case G.e:
					case G.l:
					case G.o:
					case G.u: {
						const {
							response: n
						} = t.payload;
						return n ? NI(e, n.account) : e
					}
					case P_.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case r.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case Sn.l:
					case Sn.k: {
						const n = t.payload;
						return e && "profileIcon" === n.key ? {
							...e,
							accountIcon: n.imageUrl
						} : e
					}
					case ee.B:
					case ol.j: {
						const {
							coins: n
						} = t.payload;
						return e ? {
							...e,
							coins: n
						} : e
					}
					case ol.m: {
						const {
							userName: n,
							karma: r
						} = t.payload;
						return n.toLowerCase() !== (e && Object(z.e)(e).toLowerCase()) ? e : e && {
							...e,
							karma: {
								...RI.a,
								...null == e ? void 0 : e.karma,
								...r
							}
						}
					}
					case Te.A: {
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
					case ap.q: {
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
					case CI.a: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...r, n]
						} : e
					}
					case CI.b: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: r.filter(e => e !== n)
						} : e
					}
					case Hc.c: {
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
					case Cl.a:
					case Cl.b: {
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
					case P_.l: {
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
			var xI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P_.n:
					case P_.o:
						return null;
					case P_.m:
						return t.payload;
					default:
						return e
				}
			};
			var LI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P_.n:
							return !0;
						case P_.o:
						case P_.m:
							return !1;
						default:
							return e
					}
				},
				UI = Object(S.c)({
					error: xI,
					pending: LI
				}),
				MI = Object(S.c)({
					api: UI
				});
			var GI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P_.j:
						return !0;
					default:
						return e
				}
			};
			var FI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P_.i:
							return !0;
						case P_.j:
						case P_.h:
							return !1;
						default:
							return e
					}
				},
				BI = Object(S.c)({
					pending: FI,
					emailSent: GI
				}),
				qI = Object(S.c)({
					api: BI
				}),
				VI = Object(S.c)({
					changeEmail: MI,
					sendResetEmail: qI
				}),
				WI = n("./src/reddit/models/WhitelistAndBlocked.ts");
			const HI = {};
			var QI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Et.f:
						return {
							...e, new: WI.a.pending
						};
					case Et.d:
						return {
							...e, new: WI.a.error
						};
					case Et.e:
						return {
							...e, new: WI.a.waitingForRequest
						};
					case Et.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: WI.a.pending
						}
					}
					case Et.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: WI.a.error
						}
					}
					case Et.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: WI.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const $I = [];
			var KI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $I,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Et.e:
							return [t.payload, ...e];
						case Et.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case Sn.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				zI = Object(S.c)({
					api: QI,
					data: KI
				}),
				YI = n("./src/reddit/actions/chat/constants.ts"),
				XI = n("./src/reddit/actions/chat/userSettings.ts");
			const JI = YI.a.anybody;
			var ZI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case XI.a:
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
				eS = Object(S.c)({
					invitePolicy: ZI
				});
			const tS = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var nS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Re.PAGE_LOADED: {
						const {
							drafts: n
						} = t.payload;
						return e && nl()(e, n) ? e : {
							...e,
							...n
						}
					}
					case tr.P: {
						const {
							response: {
								draftsCount: n
							}
						} = t.payload;
						return tS(e, n)
					}
					case Bn.e: {
						const {
							postDraftIds: n
						} = t.payload;
						return tS(e, n.length)
					}
					case Bn.c:
					case Bn.l: {
						const {
							draftsCount: n
						} = t.payload;
						return tS(e, n)
					}
					default:
						return e
				}
			};
			const rS = {};
			var sS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case io.a: {
							const e = t.payload.experimentVariants;
							return Gl(e)
						}
						default:
							return e
					}
				},
				aS = n("./src/reddit/actions/global/constants.ts");
			const oS = {};
			var cS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case aS.a: {
							const n = t.payload;
							return null === n.local_persisted_experiments_store || void 0 === n.local_persisted_experiments_store ? e : n.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				dS = Object(S.c)({
					byName: sS,
					localPersisted: cS
				});
			var iS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Sn.f:
						return !0;
					case Sn.e:
						return !1;
					default:
						return e
				}
			};
			var uS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Sn.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const lS = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var pS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P_.b:
							return t.payload;
						default:
							return e
					}
				},
				bS = n("./src/reddit/actions/notifications/constants.ts"),
				fS = n("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var hS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fS.a:
					case fS.d:
					case fS.h:
					case bS.a:
						return t.payload && t.payload.error || null;
					case fS.c:
					case fS.f:
					case fS.j:
					case bS.c:
					case bS.b:
						return null;
					default:
						return e
				}
			};
			var yS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bS.c:
						return !1;
					case bS.b:
						return !0;
					default:
						return e
				}
			};
			var gS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bS.c:
						case fS.j:
							return !0;
						case bS.b:
						case bS.a:
						case fS.i:
						case fS.h:
							return !1;
						default:
							return e
					}
				},
				mS = Object(S.c)({
					error: hS,
					loaded: yS,
					pending: gS
				});
			var vS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case bS.f:
					case bS.e:
						return null;
					default:
						return e
				}
			};
			var OS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bS.f:
						return !1;
					case bS.e:
						return !0;
					default:
						return e
				}
			};
			var ES = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bS.f:
							return !0;
						case bS.e:
						case bS.d:
							return !1;
						default:
							return e
					}
				},
				_S = Object(S.c)({
					error: vS,
					loaded: OS,
					pending: ES
				}),
				IS = Object(S.c)({
					getPreferences: mS,
					setPreferences: _S
				});
			const SS = {
				byId: {},
				allIds: []
			};
			var jS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fS.b: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case fS.g: {
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
			const wS = {
				byId: {},
				allIds: []
			};
			var TS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fS.b: {
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
				DS = Object(S.c)({
					sections: TS,
					rows: jS
				}),
				AS = n("./src/lib/notifications/constants.ts");
			var PS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case AS.j:
						return !0;
					case AS.b:
					case AS.d:
					case AS.e:
						return !1;
					default:
						return e
				}
			};
			const CS = {
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
			var RS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bS.b:
					case bS.f:
					case bS.d: {
						const {
							preferences: n
						} = t.payload;
						return ya()(n) ? e : n
					}
					default:
						return e
				}
			};
			const NS = {
				byId: {},
				allIds: []
			};
			var kS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fS.e: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case fS.g: {
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
			const xS = {
				byId: {},
				allIds: []
			};
			var LS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fS.e: {
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
				US = Object(S.c)({
					sections: LS,
					rows: kS
				});
			var MS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case fS.i:
						return t.payload && t.payload.pageInfo;
					default:
						return e
				}
			};
			const GS = [];
			var FS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fS.i: {
							const n = t.payload && t.payload.nodes;
							return [...e, ...n]
						}
						case fS.k: {
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
				BS = Object(S.c)({
					subreddits: FS,
					pageInfo: MS
				}),
				qS = Object(S.c)({
					api: IS,
					subscribedSubredditsSettings: BS,
					emailSettingsLayout: DS,
					isNotificationPromptVisible: PS,
					preferences: RS,
					pushSettingsLayout: US
				});
			const VS = {};
			var WS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.i:
					case Je.h: {
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
					case l.d: {
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
			const HS = {},
				QS = (e, t) => `${e}_${t||new Date}`;
			var $S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.zb: {
						const n = t.payload.powerups;
						if (n) {
							const {
								allocation: t
							} = n, r = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[QS(t.subredditInfo.id, t.allocatedAt)]: t
							}), {});
							return {
								...e,
								...r
							}
						}
						return e
					}
					case ee.ob: {
						const {
							userPowerups: n
						} = t.payload, r = ((null == n ? void 0 : n.allocation) || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
							...e,
							[QS(t.subredditInfo.id, t.allocatedAt)]: t
						}), {});
						return {
							...e,
							...r
						}
					}
					case ee.U: {
						const {
							subredditId: n,
							powerupsCount: r,
							allocatedAt: s
						} = t.payload;
						if (r < 0) {
							const t = QS(n, s),
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
					case ee.P: {
						const {
							subredditId: n,
							allocatedAt: r
						} = t.payload, s = QS(n, r), a = e[s];
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
			var KS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.zb: {
						const n = t.payload.powerups;
						return n ? Cr()({
							...e,
							...n
						}, "allocation") : e
					}
					case ee.ob: {
						const {
							userPowerups: n
						} = t.payload;
						return n ? Cr()({
							...e,
							...n
						}, "allocation") : e
					}
					case ee.U: {
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
					case ee.V: {
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
			var zS, YS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.yb:
						case ee.Ab:
							return !1;
						case ee.zb:
							return !0;
						default:
							return e
					}
				},
				XS = Object(S.c)({
					allocationByKey: $S,
					data: KS,
					fetched: YS
				}),
				JS = n("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(zS || (zS = {}));
			const ZS = {
				status: zS.UNFETCHED,
				subscriptions: []
			};
			var ej = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.Db:
						return {
							...e, status: zS.PENDING
						};
					case ee.Cb: {
						const {
							subscriptions: n
						} = t.payload;
						return n ? {
							...e,
							subscriptions: n,
							status: zS.LOADED
						} : e
					}
					case ee.Bb:
						return {
							...e, status: zS.FAILED
						};
					default:
						return e
				}
			};
			var tj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P_.d:
						return t.payload;
					default:
						return e
				}
			};
			var nj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ky.a:
					case Ky.b:
					case Ky.c:
					case Ky.e:
						return t.payload;
					case Ky.d:
						return null;
					default:
						return e
				}
			};
			var rj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ky.f:
						return !0;
					default:
						return e
				}
			};
			var sj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P_.k:
						return t.payload;
					default:
						return e
				}
			};
			var aj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case io.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var oj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case io.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				cj = Object(S.c)({
					isEmployee: aj,
					isLoggedIn: oj
				});
			var dj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Sn.r: {
							const {
								topContentDismissal: n
							} = t.payload;
							return e && nl()(e, n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				ij = n("./src/reddit/actions/userWhitelist.ts");
			const uj = {};
			var lj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ij.e:
						return {
							...e, new: WI.a.pending
						};
					case ij.d:
						return {
							...e, new: WI.a.error
						};
					case ij.f:
						return {
							...e, new: WI.a.waitingForRequest
						};
					case ij.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: WI.a.pending
						}
					}
					case ij.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: WI.a.error
						}
					}
					case ij.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: WI.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const pj = [];
			var bj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ij.f:
							return [t.payload, ...e];
						case ij.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case Sn.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				fj = Object(S.c)({
					api: lj,
					data: bj
				}),
				hj = Object(S.c)({
					account: kI,
					accountSettings: VI,
					blocked: zI,
					chatSettings: eS,
					drafts: nS,
					experiments: dS,
					isCustomizeFlyoutShowing: iS,
					topContentDismissalPrefsSet: dj,
					language: uS,
					loid: pS,
					notificationPrefs: qS,
					ownedBadges: WS,
					powerups: XS,
					prefs: JS.c,
					productOfferSubscriptions: ej,
					reddaid: tj,
					session: nj,
					sessionRefreshFailed: rj,
					sessionTracker: sj,
					temporaryGQL: cj,
					wallets: DI,
					whitelist: fj
				});
			var yj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case PI.a:
						return t.payload || null;
					case PI.b:
					case PI.c:
						return null;
					default:
						return e
				}
			};
			var gj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case PI.c:
						return !0;
					case PI.b:
					case PI.a:
						return !1;
					default:
						return e
				}
			};
			var mj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case PI.b:
						return !0;
					case PI.a:
					case PI.c:
						return !1;
					default:
						return e
				}
			};
			var vj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case PI.b:
							return t.payload.userDataExportEligibility;
						case PI.a:
						case PI.c:
							return !1;
						default:
							return e
					}
				},
				Oj = Object(S.c)({
					error: yj,
					pending: gj,
					success: mj,
					userDataExportEligibility: vj
				}),
				Ej = Object(S.c)({
					userDataRequestPageApi: Oj
				});
			const _j = {};
			var Ij = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _j,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P_.g:
					case P_.f: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case P_.e: {
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
			var Sj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P_.g:
							return !0;
						case P_.f:
						case P_.e:
							return !1;
						default:
							return e
					}
				},
				jj = Object(S.c)({
					error: Ij,
					pending: Sj
				});
			const wj = {};
			var Tj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Je.e: {
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
					case Je.b: {
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
					case Je.a: {
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
			const Dj = {},
				Aj = (e, t) => {
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					return n.forEach(n => {
						const s = e[n],
							a = t[n];
						s && nl()(s, a) || (r[n.toLowerCase()] = a)
					}), Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var Pj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P_.f: {
							const {
								data: n
							} = t.payload;
							return Aj(e, n)
						}
						case ol.l: {
							const {
								user: n
							} = t.payload;
							return Aj(e, {
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
							return o ? Aj(e, {
								[n.toLowerCase()]: {
									...r,
									awardedLastMonth: {
										totalCount: a,
										topAward: o
									}
								}
							}) : e
						}
						case ol.m: {
							const {
								userName: n,
								karma: r
							} = t.payload, s = e[n.toLowerCase()];
							if (!s) return e;
							const a = {
								...RI.a,
								...r
							};
							return Aj(e, {
								[n.toLowerCase()]: {
									...s,
									karma: a
								}
							})
						}
						case Sn.l:
						case Sn.k: {
							const {
								imageUrl: n,
								key: r,
								username: s
							} = t.payload;
							if ("profileIcon" !== r) return e;
							const a = s.toLowerCase(),
								o = e[a];
							return o ? Aj(e, {
								[a]: {
									...o,
									accountIcon: n
								}
							}) : e
						}
						case P_.c:
							const n = t.payload.account;
							if (!n || !e) return e;
							const r = Object(z.e)(n).toLowerCase(),
								s = e[r];
							return s ? Aj(e, {
								[r]: {
									...s,
									accountIcon: n.accountIcon,
									snoovatarFullBodyAsset: n.snoovatarFullBodyAsset
								}
							}) : e;
						case Sn.n: {
							const {
								additional: n,
								settings: r
							} = t.payload;
							if (n.enableFollowers === n.prevEnableFollowers) return e;
							const s = r.currentUserName.toLowerCase(),
								a = e[s];
							return a ? Aj(e, {
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
				Cj = n("./src/reddit/actions/usernameAvailable.ts");
			const Rj = {};
			var Nj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Cj.a: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: Cj.b.Available
						}
					}
					case Cj.c: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: Cj.b.Error
						}
					}
					case Cj.d: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: Cj.b.Pending
						}
					}
					case Cj.e: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: Cj.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const kj = {};
			var xj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.fb: {
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
			var Lj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.eb:
						case ee.gb:
							return !1;
						case ee.fb:
							return !0;
						default:
							return e
					}
				},
				Uj = Object(S.c)({
					allocationByKey: xj,
					fetched: Lj
				});
			var Mj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.ub:
						return t.payload;
					case ee.wb:
					case ee.vb:
						return null;
					default:
						return e
				}
			};
			var Gj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.vb:
						case ee.ub:
							return !1;
						case ee.wb:
							return !0;
						default:
							return e
					}
				},
				Fj = Object(S.c)({
					error: Mj,
					pending: Gj
				});
			var Bj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.xb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const qj = {};
			var Vj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.vb: {
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
			const Wj = {};
			var Hj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.vb: {
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
							return Cr()(e, [n])
						}
						default:
							return e
					}
				},
				Qj = Object(S.c)({
					api: Fj,
					currentPostId: Bj,
					currentRank: Vj,
					list: Hj
				}),
				$j = Object(S.c)({
					api: jj,
					appliedBadges: Tj,
					models: Pj,
					nameAvailable: Nj,
					topAwarders: Qj,
					powerups: Uj
				});
			const Kj = {};
			var zj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r, s;
					switch (t.type) {
						case F.b:
						case F.f:
						case H.SUBREDDIT_LOADED:
						case $.i:
						case W.c:
						case Re.PAGE_LOADED:
						case Rr.PAGE_LOADED: {
							const {
								structuredStyles: a
							} = t.payload;
							if (!(null === (s = null === (r = null === (n = null == a ? void 0 : a.data) || void 0 === n ? void 0 : n.content) || void 0 === r ? void 0 : r.widgets) || void 0 === s ? void 0 : s.layout)) return e;
							const o = a.data.content.widgets.layout.idCardWidget,
								c = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== c.length) return e;
							const d = c[0];
							return {
								...e,
								[d]: o
							}
						}
						default:
							return e
					}
				},
				Yj = n("./src/reddit/actions/widgets/constants.ts");
			const Xj = {};
			var Jj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case F.b:
						case F.f:
						case W.c:
						case $.i:
						case H.SUBREDDIT_LOADED:
						case Re.PAGE_LOADED: {
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
						case Yj.g: {
							const n = t.payload;
							return "menu" !== n.widget.kind ? e : {
								...e,
								[n.subredditId]: n.widgetId
							}
						}
						case Yj.h: {
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
				Zj = n("./src/reddit/helpers/widgets/index.tsx");
			const ew = {};
			var tw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.SUBREDDIT_LOADED: {
						const n = t.payload,
							r = n.structuredStyles && n.structuredStyles.data && n.structuredStyles.data.content;
						if (!r) return e;
						const s = r.widgets;
						return {
							...e,
							...s.items
						}
					}
					case Yj.b: {
						const n = t.payload;
						return {
							...e,
							...n.widgets.items
						}
					}
					case b.k: {
						const t = {
							...e
						};
						return Object.keys(t).forEach(e => {
							t[e] = {
								...t[e],
								styles: Object(Zj.g)()
							}
						}), t
					}
					case Yj.e: {
						const n = t.payload;
						return {
							...e,
							...n.widgets.items
						}
					}
					case Yj.i:
					case Yj.g: {
						const n = t.payload;
						return {
							...e,
							[n.widget.id]: n.widget
						}
					}
					case Yj.h: {
						const n = t.payload,
							r = {
								...e
							};
						return delete r[n.widgetId], r
					}
					case F.b:
					case F.f:
					case H.SUBREDDIT_LOADED:
					case $.i:
					case W.c:
					case Re.PAGE_LOADED:
					case Rr.PAGE_LOADED: {
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
					case il.h: {
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
					case Ev.f: {
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
			const nw = {};
			var rw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.SUBREDDIT_LOADED:
					case F.f:
					case $.i:
					case Re.PAGE_LOADED: {
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
			const sw = {};
			var aw = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sw,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.SUBREDDIT_LOADED:
					case Re.PAGE_LOADED:
					case Rr.PAGE_LOADED: {
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
					case Yj.e:
					case Yj.b: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgets.layout.sidebar.order
						}
					}
					case Yj.f: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgetIds
						}
					}
					case Yj.g: {
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
					case Yj.h: {
						const n = t.payload;
						if (!e[n.subredditId]) return e;
						const r = e[n.subredditId].filter(e => e !== n.widgetId);
						return {
							...e,
							[n.subredditId]: r
						}
					}
					case F.b:
					case F.f:
					case H.SUBREDDIT_LOADED:
					case W.c:
					case $.i:
					case Re.PAGE_LOADED:
					case Rr.PAGE_LOADED: {
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
			const ow = {
				accountManagerModalData: a,
				activeModal: h,
				ads: O,
				apiRequestState: I,
				appBadges: C,
				authorFlair: Z,
				awards: Xe,
				badges: pt,
				blockedRedditors: Ot,
				blockUser: Tt,
				brandSafety: At,
				chat: nn,
				cooldownTimer: xn,
				commentsListTruncated: sn,
				communityFlairs: cn,
				connection: ln,
				contentControls: _n,
				contentGate: wn,
				continueThreads: An,
				creations: oa,
				dashboard: ia,
				discoveryUnits: Sa,
				dismissedTruncationList: Ta,
				economics: Ya,
				emailVerificationTooltip: Za,
				emojis: co,
				experimentOverrides: bo,
				externalAccount: qo,
				featureFlags: zo,
				focusedVerticals: dc,
				fontFiles: uc,
				gild: Ic,
				header: Rc,
				htmlResponseStreaming: Nc,
				imageUploads: Lc,
				inAppNotifications: qc,
				interceptedAction: Wc,
				isChangeUsernameTooltipShowing: Qc,
				isModeratorWithPostPerms: Kc,
				jsApi: Xc,
				langSite: ed,
				leaderboard: id,
				listings: Mi,
				live: Vi,
				mediaEmbed: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wi.a:
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
				mediaGalleries: Yi,
				mediaPlayback: Zi,
				meta: nu,
				moderatingSubreddits: au,
				modListingPage: pu,
				modModeEnabled: fu,
				moreComments: _u,
				multireddits: hl,
				notificationBannerId: gl,
				notificationsInbox: Tl,
				nps: Pl,
				onboarding: Ul,
				page: Vl,
				platform: zl,
				postCollection: Rp,
				polls: Op,
				postFlair: Mp,
				posts: Rf,
				postStickiedComments: Lf,
				givePremium: Dc,
				products: Xf,
				profileCommentsPage: ph,
				profilePrivatePage: Dh,
				profileModSettingsPage: yh,
				profilePostsPage: mh,
				profiles: dy,
				promos: by,
				publicAccessNetwork: Qy,
				recentSubreddits: Xy,
				recommendations: Zy,
				reportPage: ig,
				reportRules: pg,
				requestHost: bg,
				runTimeEnvVars: yg,
				search: Dg,
				searchDiscoveryUnits: Lg,
				searchQueryId: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ug.a:
							return t.payload;
						case Ug.b:
							return Mg;
						default:
							return e
					}
				},
				seo: Qg,
				shortcuts: tm,
				sidebarPromotedPosts: sm,
				streaming: pm,
				structuredStyles: Cm,
				stylesheets: Rm,
				subredditAutocomplete: Bm,
				subreddits: jE,
				subredditStickyPosts: DE,
				subscriptions: YE,
				survey: n_,
				tabBadged: r_,
				tags: T_,
				themes: N_,
				toaster: L_,
				tooltip: B_,
				tracing: W_,
				tracking: eI,
				trafficStats: sI,
				transfers: pI,
				trending: yI,
				trophies: vI,
				uploads: II,
				user: hj,
				userDataRequestPage: Ej,
				upvotePromptCountPerSess: jI,
				users: $j,
				widgets: Object(S.c)({
					idCardIds: zj,
					menuIds: Jj,
					models: tw,
					moderatorIds: rw,
					sidebar: aw
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
				d = {
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
			t.a = d
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
					return Object(a.c)(n)(e, t)
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
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
				features: {
					crypto: c.a
				}
			});
			const d = (e, t) => {
				var n, r, s;
				return t ? null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === s ? void 0 : s[t] : void 0
			};

			function i() {
				const e = Object(s.fb)(),
					t = Object(r.e)(t => Object(s.r)(t, {
						pageLayer: e
					})),
					n = Object(r.e)(e => d(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const u = (e, t) => {
				var n;
				const r = null === (n = d(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return r === a.a.Ethereum || r === a.a.Rinkeby || r === a.a.EthTraderEthereum || r === a.a.EthTraderRinkeby || r === a.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
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
				d = n("./src/reddit/selectors/subreddit.ts");
			const i = [],
				u = e => e.emojis.models,
				l = Object(a.a)(u, (e, t) => t.subredditId, (e, t) => {
					const n = e[t];
					return n ? [...s()(n.emojis), ...s()(n.snoomojis)] : i
				}),
				p = Object(a.a)(l, c.c, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, n, r) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !n) && (!(!e.userFlairAllowed && r === o.d.UserFlair) && !(!e.postFlairAllowed && r === o.d.LinkFlair)))),
				b = Object(a.a)(u, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				f = (e, t) => Object(d.w)(e, {
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
					return u(e)[n] || h
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
				experimentName: r.sc
			}), e => e === r.ud)
		},
		"./src/reddit/selectors/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return o
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "q", (function() {
				return f
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "r", (function() {
				return O
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "b", (function() {
				return w
			}));
			var r = n("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				s = n("./src/reddit/models/Flair/index.ts"),
				a = n("./src/reddit/models/ScheduledPost/index.ts");
			const o = (e, t) => {
					let {
						subredditId: n
					} = t;
					return ((e, t) => {
						let {
							subredditId: n,
							type: r
						} = t;
						return !!e.posts.scheduledPosts[r].models[n]
					})(e, {
						subredditId: n,
						type: a.g.standalonePosts
					})
				},
				c = (e, t) => {
					let {
						subredditId: n,
						type: r
					} = t;
					return !!e.posts.scheduledPosts[r].pageInfo[n] && e.posts.scheduledPosts[r].pageInfo[n].hasNextPage
				},
				d = (e, t) => {
					let {
						subredditId: n,
						type: r
					} = t;
					return e.posts.scheduledPosts[r].pageInfo[n] ? e.posts.scheduledPosts[r].pageInfo[n].endCursor : null
				},
				i = e => e.posts.scheduledPosts.api.pending,
				u = e => e.posts.scheduledPosts.api.pendingUpdate,
				l = e => e.posts.scheduledPosts.api.error,
				p = {},
				b = [],
				f = (e, t) => {
					let {
						subredditId: n
					} = t;
					return (e.posts.scheduledPosts.standalonePosts.postOrder[n] || b).filter(t => !!(e.posts.scheduledPosts.standalonePosts.models[n] || p)[t]).map(t => e.posts.scheduledPosts.standalonePosts.models[n][t])
				},
				h = (e, t) => {
					let {
						subredditId: n
					} = t;
					return (e.posts.scheduledPosts.recurringPosts.postOrder[n] || b).filter(t => !!(e.posts.scheduledPosts.recurringPosts.models[n] || p)[t]).map(t => e.posts.scheduledPosts.recurringPosts.models[n][t])
				},
				y = (e, t) => {
					let {
						subredditId: n,
						scheduledPostId: r,
						type: s
					} = t;
					return (e.posts.scheduledPosts[s].models[n] || p)[r] || void 0
				},
				g = (e, t) => {
					let {
						subredditId: n,
						scheduledPostId: r
					} = t;
					return y(e, {
						subredditId: n,
						scheduledPostId: r,
						type: a.g.standalonePosts
					})
				},
				m = (e, t) => {
					let {
						subredditId: n,
						scheduledPostId: r
					} = t;
					const s = y(e, {
						subredditId: n,
						scheduledPostId: r,
						type: a.g.recurringPosts
					});
					return s || s
				},
				v = (e, t) => {
					let {
						subredditId: n,
						scheduledPostId: r
					} = t;
					return g(e, {
						subredditId: n,
						scheduledPostId: r
					}) || m(e, {
						subredditId: n,
						scheduledPostId: r
					})
				},
				O = e => e.creations.formData.scheduledPostId,
				E = e => {
					let {
						scheduledPost: t
					} = e;
					return (e => {
						let {
							flair: t,
							isNsfw: n,
							isSpoiler: a,
							isOriginalContent: o
						} = e;
						const c = [];
						return o && c.push({
							text: "OC",
							type: s.f.Oc
						}), t && c.push(...Object(r.b)(t)), a && c.push({
							text: "spoiler",
							type: s.f.Spoiler
						}), n && c.push({
							text: "nsfw",
							type: s.f.Nsfw
						}), c
					})(t)
				},
				_ = e => {
					let {
						scheduledPost: t
					} = e;
					const n = E({
							scheduledPost: t
						}),
						r = n.find(e => e.type === s.f.Richtext);
					return r || (n.find(e => e.type === s.f.Text) || null)
				},
				I = e => e.posts.scheduledPosts[a.g.recurringPosts].editModal.scheduledPostId,
				S = e => e.posts.scheduledPosts[a.g.recurringPosts].editModal.subredditId,
				j = e => e.posts.scheduledPosts.api.pendingUpdate,
				w = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/reddit/selectors/upvotePrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/models/User/index.ts"),
				a = n("./src/reddit/models/Vote/index.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const d = 5e3,
				i = 12e3,
				u = 6 * r.pb,
				l = (e, t) => {
					const n = Object(o.G)(e, t),
						r = Object(c.P)(e);
					let d = !1;
					const i = Object(c.k)(e);
					if (i) {
						d = (Object(s.d)(i) || (new Date).getTime()) > (new Date).getTime() - u
					}
					const l = n && !n.isArchived && (1 === (null == n ? void 0 : n.score) || 0 === (null == n ? void 0 : n.score)) && (null == n ? void 0 : n.voteState) === a.a.notVoted;
					return r && d && l
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
		"./src/redditGQL/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"1e0a4bfe5ac9"}')
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
		"./src/redditGQL/operations/GetSubredditCountrySiteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"abd8b9be540b"}')
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"074eb98957ec"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"d5f4502401d3"}')
		},
		"./src/redditGQL/operations/SubredditsCarousel.json": function(e) {
			e.exports = JSON.parse('{"id":"a818d17baafc"}')
		},
		"./src/redditGQL/operations/UpdateChatMessagesAsRead.json": function(e) {
			e.exports = JSON.parse('{"id":"bfc6fe51708d"}')
		},
		"./src/redditGQL/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"f5276d63e133"}')
		},
		"./src/redditGQL/operations/UpdateSubredditChatSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"bdb05b8c7a65"}')
		},
		"./src/redditGQL/operations/UpdateSubredditCountrySiteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c21fac68db2d"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.9abbf04f70b393cb930b.js.map