// https://www.redditstatic.com/desktop2x/Governance~Reddit.815f4cd5c6d4987165b7.js
// Retrieved at 6/6/2022, 3:30:05 PM by Reddit Dataminer v1.0.0
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
				experimentName: b.Ub
			}), e => e === b.rd);
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
				return P
			})), n.d(t, "g", (function() {
				return A
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
				return H
			})), n.d(t, "b", (function() {
				return W
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
				P = "GET_ALL_EMOJIS_PENDING",
				A = "GET_ALL_EMOJIS_LOADED",
				C = "GET_ALL_EMOJIS_FAILED",
				R = Object(p.a)(P),
				N = Object(p.a)(A),
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
				}, H = (e, t) => async (n, s, a) => {
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
				}, W = "EMOJI_CUSTOM_SIZE_UPDATED", Q = Object(p.a)(W), $ = (e, t) => async (n, s, a) => {
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
				P = Object(s.a)(m.s),
				A = Object(s.a)(m.t),
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
					n(P());
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
					f.ok ? (n(A({
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
				return P
			})), n.d(t, "d", (function() {
				return A
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
				P = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
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
				P = Object(d.a)(j),
				A = e => async (t, n) => {
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
					if (await t(A(e))) return;
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
					if (await s(A(e))) return [];
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
					return p ? (s(P({
						subredditId: e,
						chatSettings: n
					})), s(k(t, b)), n) : (l && s(T({
						subredditId: e,
						error: l
					})), s(P({
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
				P = n("./src/reddit/actions/postCreation/general.ts");
			const A = Object(d.a)(D.u),
				C = Object(d.a)(D.v),
				R = Object(d.a)(D.t),
				N = e => async (t, n) => {
					t(A());
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
						P = !1,
						A = !1;
					const C = e => {
						if (!A && n && D) {
							A = !0;
							const r = c(),
								s = Date.now() - S,
								a = Object(h.c)(h.a.PostComposer);
							P ? (async e => {
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
								const c = !(null == n || !n.id) && Object(w.p)(e, {
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
						})), P = !0, s && s();
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
					n(Object(P.d)({
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
				P = n("./src/reddit/selectors/postDraft.ts"),
				A = n("./src/reddit/selectors/scheduledPosts/index.ts"),
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
				B = Object(s.a)(k.cb),
				q = Object(s.a)(k.J),
				V = Object(s.a)(k.a),
				H = Object(s.a)(k.F),
				W = e => `/r/${e}/about/${N.s}`,
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
					} = c.creations.api.post.submit, u = Object(P.g)(c);
					if (d || u) return;
					n(H(e)), c = s();
					const l = Object(D.a)(c),
						p = v.d.rteVideoPoster(c),
						b = $(c),
						f = l === r.Wb.MEDIA;
					b && (p || f) && (await n(L.f(b)), $(s())) || (e === j.r.Draft ? await n(Object(i.r)(t.draftId)) : e === j.r.ScheduledPost && Object(A.r)(c) ? await n(z(t)) : e === j.r.ScheduledPost ? await n(Y(t)) : await n(X(t)))
				}, z = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const o = n(),
						c = Object(D.db)(o),
						d = Object(D.eb)(o, e),
						i = Object(D.h)(o),
						p = Object(A.r)(o);
					if (!(d && i.id && c && Object(E.f)(p))) return;
					const b = i.id,
						f = Object(A.a)(o, {
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
					})), void t(Object(l.a)(W(i.name), !1));
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
						p = Object(A.b)(o);
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
						return e && Object(a.a)(Object(I.o)(Object(O.d)(e))(o)), void t(Object(l.a)(W(i.name), !1))
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
						P = n();
					_.B(P, I, S, e.correlationId)
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
					experimentName: b.Ve
				}),
				D = Object(r.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				P = () => u(e => p()([w, T, e => e.tracking.reCaptchaEnterprise.load === r.a.New], t => t(e)))(async e => {
					e(D.requested());
					try {
						await d.b.loadScript(), e(D.succeeded())
					} catch (t) {
						throw e(D.failed()), t
					}
				}),
				A = Object(r.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				C = e => u(e => p()([w, T, e => e.tracking.reCaptchaEnterprise.load === r.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === r.a.New], t => t(e)))(async t => {
					t(A.requested());
					try {
						const n = await d.b.execute(e);
						return t(A.succeeded({
							token: n
						})), n
					} catch (n) {
						throw t(A.failed()), n
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
							await t(P());
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
				return P
			})), n.d(t, "a", (function() {
				return A
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
					e(w()), e(Object(c.f)(Object(c.e)(a.r(), p.b.Error, a.s(), P(t))))
				},
				P = e => {
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
				A = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const a = n();
					if (!Object(b.h)(a, {
							subredditId: e
						})) return t(P({
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
				return A
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
				P = n("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const A = "SUBREDDIT__CREATE_SET_INITIAL_CROSSPOST",
				C = "SUBREDDIT__CREATE_PENDING",
				R = "SUBREDDIT__CREATE_SUCCEEDED",
				N = "SUBREDDIT__CREATE_FAILED",
				k = "SUBREDDIT__CREATE_CLEARED",
				x = Object(a.a)(C),
				L = Object(a.a)(R),
				U = Object(a.a)(N),
				M = Object(a.a)(k),
				G = Object(a.a)(A),
				F = e => async (t, n, a) => {
					let {
						apiContext: v
					} = a;
					var O;
					const A = n(),
						{
							name: C,
							type: R,
							crosspostId: N
						} = e;
					if (Object(w.j)(A)) return;
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
						Object(D.a)(Object(_.d)(R, e, a)(A)), t(L({
							subredditName: C
						}));
						const f = await Object(I.b)(A);
						if (N) {
							const e = Object(j.G)(A, {
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
						await t(Object(r.b)(`${n.path}`)), f ? f === p.xe.NewModule && t(Object(i.h)({
							tooltipId: u.MOD_WELCOME_TOOLTIP_ID
						})) : (t(Object(c.h)(b.a.POST_FLOW_UPSELL_MODAL_ID)), Object(D.a)(Object(_.g)()(A))), Object(E.b)(E.a.SubredditCreation), t(Object(P.f)(a, null !== (O = Object(T.bb)(A)) && void 0 !== O ? O : Object(S.i)(A)))
					} else k.error && Object(D.a)(Object(_.h)(k.error.type, C)(A)), t(U({
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
				return P
			})), n.d(t, "i", (function() {
				return A
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
				P = function(e, t, n) {
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
				A = function(e) {
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
							r.startsWith(e) && n(A(r, t))
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
					}))(b)), Object(d.Cb)(), Object(d.Bb)(S), a(g()), n && n()
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
					onClearSearchQuery: P,
					onRemoveRecentSearch: A,
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
					k(Object(E.y)(E.a.RECENT, e, T, T, f))
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
						f.isTypeaheadSuggestion ? P() : C(f.searchQuery), R(f.searchQuery, f, T), N(), L()
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
						e.stopPropagation(), e.preventDefault(), A(f)
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
				P = n("./src/reddit/components/PostTitle/index.tsx"),
				A = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
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
					}), s.a.createElement("span", null, s.a.createElement(P.a, {
						className: Object(c.a)(j.a.listItemText, j.a.mTrending, b.a.text, b.a.trending),
						redditStyle: !0,
						size: P.b.Small
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
				return I ? s.a.createElement(A.a, {
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
					w(Object(E.y)(E.a.TYPEAHEAD, e, o, S, a))
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
				H = n("./src/reddit/helpers/chooseVariant/index.ts"),
				W = n("./node_modules/reselect/es/index.js"),
				Q = n("./src/reddit/selectors/experiments/utils.ts");
			const $ = Object(W.a)(e => Object(H.c)(e, {
					experimentEligibilitySelector: H.a,
					experimentName: V.cc
				}), Q.a),
				K = Object(W.a)($, e => e === V.zc.Treatment1 || e === V.zc.Treatment2),
				z = Object(W.a)($, e => e === V.zc.Treatment1);
			Object(W.a)($, e => e === V.zc.Treatment2);
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
					P = Object(a.e)(e => Object(de.e)(e, {
						pageLayer: S
					})),
					A = Object(a.e)(e => Object(ue.a)(e)),
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
						multireddit: P,
						searchItem: o,
						...A ? {
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
					onUpdateSearchQuery: P
				} = e, A = Object(a.d)(), [C, R] = Object(r.useState)(null), [N, k] = Object(r.useState)(n), [M, G] = Object(r.useState)(new Array(ye).fill(!1)), F = !!(null === (t = g.searchQuery) || void 0 === t ? void 0 : t.trim()), q = u || d, V = 0 === f.length && !u && (!F || h >= 0), H = {
					width: N ? `${N}px` : "inherit",
					marginTop: "7px",
					overflow: "auto"
				};
				v && (H.zIndex = B.g), Object(r.useEffect)(() => {
					k(n)
				}, [n]), Object(r.useLayoutEffect)(() => {
					if (!d && i && document.getElementById(he)) {
						const e = W();
						G(e), o.forEach((t, n) => {
							e[n] && A((e, n) => Object(L.v)({
								state: n(),
								trendingSearch: t,
								telemetrySource: x.a.Typeahead
							}))
						})
					}
				}, [d, i, A]);
				const W = () => {
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
					style: H,
					onDropdownMounted: () => {
						if (!d && o.length > 0) {
							const e = W();
							G(e), o.forEach((t, n) => {
								e[n] && A((e, n) => Object(L.v)({
									state: n(),
									trendingSearch: t,
									telemetrySource: x.a.Typeahead,
									offset: p.length
								}))
							})
						}
					},
					onScroll: () => {
						const e = W();
						o.forEach((t, n) => {
							M[n] || !e[n] || t.post && t.post.isSponsored || A((e, n) => Object(L.v)({
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
					onUpdateSearchQuery: P,
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
					onUpdateSearchQuery: P,
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
				P = n("./src/reddit/constants/localStorage.ts");
			const A = {};
			var C = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case D.a:
						return t.payload[P.b.CATEGORIES_RANKING_STORE] || e;
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
				return ew
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
			const P = {};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
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
					badges: A
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
				H = n("./src/reddit/actions/pages/search/index.ts"),
				W = n("./src/reddit/actions/pages/subreddit.ts"),
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
					case H.c: {
						const {
							authorFlair: n
						} = t.payload;
						if (n) {
							return Object(N.merge)(e, n)
						}
						return e
					}
					case L.w:
					case W.SUBREDDIT_LOADED:
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
			};
			var re = function() {
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
			var se = function() {
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
				ae = Object(S.c)({
					error: re,
					pending: se
				}),
				oe = Object(S.c)({
					api: ae
				});
			var ce = function() {
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
			const de = {};
			var ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
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
				ue = Object(S.c)({
					error: ce,
					pending: ie
				});
			const le = {};
			var pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
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
			const be = {};
			var fe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
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
				he = Object(S.c)({
					api: ue,
					availability: pe,
					order: fe
				}),
				ye = n("./node_modules/lodash/merge.js"),
				ge = n.n(ye);
			const me = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const n = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${n}`
			};
			var ve = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : me(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : me(e.endsAt)), e),
				Oe = n("./src/reddit/models/Gold/Award.ts"),
				Ee = n("./src/reddit/actions/discoveryUnit.ts"),
				_e = n("./src/reddit/actions/frontpage/constants.ts"),
				Ie = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				Se = n("./src/reddit/actions/multireddit/constants.ts"),
				je = n("./src/reddit/actions/pages/countrySite/constants.ts"),
				we = n("./src/reddit/actions/pages/modListing/constants.ts"),
				Te = n("./src/reddit/actions/pages/multireddit/constants.ts"),
				De = n("./src/reddit/actions/pages/postCreation.ts"),
				Pe = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Ae = n("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				Ce = n("./src/lib/makeActionCreator/index.ts"),
				Re = (n("./src/config.ts"), n("./src/lib/constants/index.ts"));
			n("./src/lib/makeApiRequest/index.ts"), n("./src/reddit/helpers/addRedesignIdentifier/index.ts"), n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(Ce.a)("RECOMMENDED_POSTS_LOADED"), Object(Ce.a)("RECOMMENDED_POSTS_FAILED");
			var Ne = n("./src/reddit/actions/search.ts");
			const ke = Oe.m,
				xe = (e => t => {
					for (let n = 0; n < e.length; n++) t = e[n](t);
					return t
				})([ve]),
				Le = (e, t) => {
					const n = t.reduce((e, t) => (e[t.id] = xe(t), e), {});
					return ge()({
						...e
					}, n)
				};
			var Ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case ee.G: {
						const {
							awards: n
						} = t.payload;
						return Le(e, n)
					}
					case ee.M: {
						const n = t.payload.awards.reduce((e, t) => (e[t.id] = {
							...xe(t),
							isEnabled: !0
						}, e), {});
						return ge()({
							...e
						}, n)
					}
					case ee.b: {
						const {
							awards: n
						} = t.payload, r = n.reduce((e, t) => (e[t.award.id] = xe(t.award), e), {});
						return ge()({
							...e
						}, r)
					}
					case ee.i: {
						const {
							award: n
						} = t.payload;
						return n && n.id ? e[n.id] ? ge()({
							...e
						}, {
							[n.id]: xe(n)
						}) : {
							...e,
							[n.id]: xe(n)
						} : e
					}
					case ee.kb: {
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
					case L.w:
					case U.b:
					case je.b:
					case je.f:
					case De.PAGE_LOADED:
					case Ee.e:
					case _e.f:
					case we.e:
					case we.h:
					case G.f:
					case G.m:
					case G.p:
					case G.v:
					case Se.r:
					case F.f:
					case _e.b:
					case Te.b:
					case H.c:
					case B.b:
					case B.e:
					case Q.b:
					case Q.e:
					case Pe.b:
					case Pe.e:
					case Ae.b:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case V.c:
					case V.e:
					case V.i:
					case V.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Ne.e:
					case $.i:
					case W.SUBREDDIT_LOADED: {
						const n = {},
							r = t.payload.posts || [],
							s = t.payload.comments || [];
						for (const e in r) {
							const t = r[e].allAwardings || [];
							for (const e of t) n[e.id] = xe(Object(Oe.h)(e))
						}
						for (const e in s) {
							const t = s[e],
								{
									associatedAward: r,
									allAwardings: a = []
								} = t;
							for (const e of a) n[e.id] = xe(Object(Oe.h)(e));
							r && (n[r.id] = xe(r))
						}
						return Object.keys(n).forEach(t => {
							var r;
							0 === (null === (r = e[t]) || void 0 === r ? void 0 : r.coinPrice) && delete n[t]
						}), ge()({
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
						}), ge()({
							...e
						}, n)
					}
					case Ie.s: {
						const {
							freeAwardEvent: r
						} = t.payload;
						return Le(e, (null === (n = null == r ? void 0 : r.freeAwards) || void 0 === n ? void 0 : n.awards) || [])
					}
					case Ie.h: {
						const {
							awards: n
						} = t.payload;
						return Le(e, n || [])
					}
					default:
						return e
				}
			};
			const Me = {};
			var Ge = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
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
				Fe = Object(S.c)({
					pending: Ge
				});
			const Be = {};
			var qe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
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
				Ve = Object(S.c)({
					api: Fe,
					order: qe
				});
			const He = {};
			var We = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He,
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
				Qe = Object(S.c)({
					order: We
				}),
				$e = Object(S.c)({
					blacklist: ne,
					create: oe,
					manageable: he,
					models: Ue,
					sortedUsable: Ve,
					tags: Qe
				}),
				Ke = n("./src/reddit/actions/badge.ts");
			const ze = {};
			var Ye = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ze,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ke.d:
					case Ke.e: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case Ke.c: {
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
			const Xe = {};
			var Je = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ke.d: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ke.e:
						case Ke.c: {
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
				Ze = Object(S.c)({
					error: Ye,
					pending: Je
				});
			const et = {};
			var tt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : et,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ke.g:
					case Ke.h: {
						const {
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: void 0
						}
					}
					case Ke.f: {
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
			const nt = {};
			var rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ke.g: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ke.h:
						case Ke.f: {
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
				st = Object(S.c)({
					error: tt,
					pending: rt
				}),
				at = Object(S.c)({
					subreddit: Ze,
					user: st
				});
			const ot = {};
			var ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ot,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.i:
						case Ke.e:
						case Ke.h:
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
				dt = Object(S.c)({
					api: at,
					models: ct
				}),
				it = n("./src/reddit/actions/blockedRedditors.ts");
			const ut = {
				message: ""
			};
			var lt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case it.c:
					case it.d:
						return e;
					case it.b:
						return t.payload;
					default:
						return e
				}
			};
			var pt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.d:
							return !0;
						case it.c:
						case it.b:
							return !1;
						default:
							return e
					}
				},
				bt = Object(S.c)({
					error: lt,
					pending: pt
				});
			const ft = {
				ids: []
			};
			var ht = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ft,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case it.e:
							const n = e.ids.slice();
							return n.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: n
							};
						case it.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				yt = Object(S.c)({
					api: bt,
					list: ht
				}),
				gt = n("./src/reddit/actions/userBlocks.ts");
			const mt = {};
			var vt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gt.f:
					case gt.e: {
						const {
							userId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case gt.d: {
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
			const Ot = {};
			var Et = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case gt.f: {
							const {
								userId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case gt.e:
						case gt.d: {
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
				_t = Object(S.c)({
					error: vt,
					pending: Et
				}),
				It = Object(S.c)({
					api: _t
				});
			const St = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : St,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case y.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case W.SUBREDDIT_PENDING:
						case Te.c:
						case _e.c:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				wt = n("./src/reddit/actions/chat/init.ts");
			var Tt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wt.a:
							return !0;
						default:
							return e
					}
				},
				Dt = n("./src/lib/omitKey/index.ts"),
				Pt = n("./src/reddit/actions/pages/chatSettings.ts");
			const At = {};
			var Ct = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : At,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Pt.b: {
						const {
							subredditId: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Pt.a:
					case Pt.c:
					case Pt.d: {
						const {
							subredditId: n
						} = t.payload;
						return Object(Dt.a)(e, n)
					}
					default:
						return e
				}
			};
			const Rt = {};
			var Nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pt.a:
						case Pt.b:
						case Pt.c:
						case Pt.d: {
							const {
								subredditId: n
							} = t.payload, r = t.type === Pt.c;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				kt = Object(S.c)({
					error: Ct,
					pending: Nt
				}),
				xt = Object(S.c)({
					fetch: kt
				});
			const Lt = {};
			var Ut, Mt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Pt.a:
						case Pt.d: {
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
				Gt = Object(S.c)({
					api: xt,
					models: Mt
				}),
				Ft = (n("./src/chat/actions/message/unreadCount.ts"), n("./src/chat/endpoints/sendbird/index.ts"), n("./src/reddit/actions/tabBadging.ts"));
			n("./src/reddit/selectors/chat.ts"), n("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(Ut || (Ut = {}));
			const {
				SYNC: Bt,
				REQUEST_FAILED: qt,
				REQUEST_PENDING: Vt,
				REQUEST_SUCCESS: Ht
			} = Ut;
			Object(Ce.a)(Bt), Object(Ce.a)(qt), Object(Ce.a)(Vt), Object(Ce.a)(Ht);
			Re.kb;
			const Wt = {
				apiError: null
			};
			var Qt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ut.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...Wt,
							apiError: e
						}
					}
					case Ut.REQUEST_SUCCESS:
					case Ut.REQUEST_PENDING:
						return Wt;
					default:
						return e
				}
			};
			var $t = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ut.REQUEST_PENDING:
							return !0;
						case Ut.REQUEST_FAILED:
						case Ut.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				Kt = Object(S.c)({
					error: Qt,
					pending: $t
				});
			const zt = {
				hasNewMessages: !1,
				unreadMessages: 0
			};
			var Yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ut.SYNC:
						case Ut.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				Xt = Object(S.c)({
					api: Kt,
					count: Yt
				}),
				Jt = Object(S.c)({
					isInited: Tt,
					subredditSettingsPage: Gt,
					unread: Xt
				}),
				Zt = n("./src/reddit/actions/commentsListTruncated/constants.ts");
			var en = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zt.a:
							return !1;
						case Zt.b:
							return !0;
						default:
							return e
					}
				},
				tn = n("./src/reddit/actions/communityFlairs/constants.ts");
			const nn = {};
			var rn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case tn.a: {
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
				sn = n("./src/reddit/actions/connection/constants.ts");
			const an = {
				showBanner: !1,
				online: !0
			};
			var on = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : an,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sn.a:
							return {
								online: !1, showBanner: !0
							};
						case sn.b:
							return {
								online: !0, showBanner: !0
							};
						case sn.c:
							return {
								...e, showBanner: !1
							};
						default:
							return e
					}
				},
				cn = n("./src/reddit/actions/contentControls/constants.ts");
			const dn = {};
			var un = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cn.a: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case cn.c:
					case cn.b: {
						const {
							subredditName: n
						} = t.payload;
						return Object(Dt.a)(e, n)
					}
					default:
						return e
				}
			};
			const ln = {};
			var pn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ln,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cn.c:
						case cn.a:
						case cn.b: {
							const {
								subredditName: n
							} = t.payload, r = t.type === cn.c;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				bn = Object(S.c)({
					error: un,
					pending: pn
				}),
				fn = Object(S.c)({
					fetch: bn
				}),
				hn = n("./src/lib/safeGet/index.ts");
			const yn = {};
			var gn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cn.b: {
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
						case cn.d: {
							const {
								subredditName: n,
								partialUpdates: r
							} = t.payload, s = Object(hn.a)(e, n);
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
				mn = Object(S.c)({
					api: fn,
					models: gn
				}),
				vn = n("./src/reddit/actions/contentGate.ts"),
				On = n("./src/reddit/actions/preferences.ts");
			const En = {};
			var _n = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : En,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vn.b: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(hn.a)(e, n)) {
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
					case vn.c: {
						const {
							subredditDescription: n,
							subredditName: r,
							isContributorRequestsDisabled: s,
							isContributorRequestTimestamp: a,
							subredditId: o
						} = t.payload;
						if (r) {
							if (Object(hn.a)(e, r)) {
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
					case vn.g: {
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
								...Object(hn.a)(e, n) || {},
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: r,
								quarantineMessage: s,
								quarantineMessageHtml: a,
								quarantineMessageRTJson: o
							}
						} : e
					}
					case vn.a: {
						const {
							interstitialWarningMessage: n,
							interstitialWarningMessageHtml: r,
							interstitialWarningMessageRTJson: s,
							subredditName: a
						} = t.payload;
						return a ? {
							...e,
							[a]: {
								...Object(hn.a)(e, a) || {},
								interstitialWarningMessage: n,
								interstitialWarningMessageHtml: r,
								interstitialWarningMessageRTJson: s
							}
						} : e
					}
					case vn.k: {
						const {
							subredditName: n,
							banMessage: r
						} = t.payload;
						if (n) {
							if (Object(hn.a)(e, n)) {
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
					case vn.l: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(hn.a)(e, n)) {
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
					case vn.m: {
						const {
							subredditName: n
						} = t.payload;
						if (n) {
							if (Object(hn.a)(e, n)) {
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
					case vn.d:
					case vn.e:
					case vn.f: {
						const {
							profileName: n
						} = t.payload, r = Re.kc + n.toLocaleLowerCase(), s = Object(hn.a)(e, r) || {}, a = {
							profileDeleted: t.type === vn.e,
							profileSuspended: t.type === vn.f,
							profileBlockedForLegalReason: t.type === vn.d
						};
						return {
							...e,
							[r]: {
								...s,
								...a
							}
						}
					}
					case On.q:
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
			const In = {};
			var Sn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : In,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.w:
						case F.b:
						case F.f:
							return {
								...e, ...t.payload.continueThreads
							};
						default:
							return e
					}
				},
				jn = Object(S.c)({
					models: Sn
				}),
				wn = n("./src/reddit/actions/cooldownTime.ts");
			var Tn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wn.b:
					case wn.c:
						return null;
					case wn.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Dn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wn.b:
							return !0;
						case wn.a:
						case wn.c:
							return !1;
						default:
							return e
					}
				},
				Pn = Object(S.c)({
					error: Tn,
					pending: Dn
				});
			var An = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wn.d: {
							const {
								expiresAt: n
							} = t.payload;
							return "number" == typeof n && n !== e ? n : e
						}
						default:
							return e
					}
				},
				Cn = Object(S.c)({
					api: Pn,
					expiresAt: An
				}),
				Rn = n("./src/reddit/actions/postCollection/constants.ts");
			var Nn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.c:
					case Rn.d:
					case Rn.c:
					case Rn.s:
					case Rn.r:
						return null;
					case Rn.b:
					case Rn.n:
						return t.payload;
					default:
						return e
				}
			};
			var kn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Rn.c:
						case Rn.r:
							return !0;
						case Rn.d:
						case Rn.b:
						case Rn.s:
						case Rn.n:
							return !1;
						default:
							return e
					}
				},
				xn = Object(S.c)({
					error: Nn,
					pending: kn
				}),
				Ln = Object(S.c)({
					createOrUpdate: xn
				}),
				Un = n("./src/reddit/actions/postDraft.ts");
			const Mn = {};
			var Gn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Un.c:
					case Un.b: {
						const {
							draftId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Un.a: {
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
			const Fn = {};
			var Bn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Un.b: {
							const {
								draftId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Un.c:
						case Un.a: {
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
				qn = Object(S.c)({
					error: Gn,
					pending: Bn
				});
			var Vn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Un.d:
						return t.payload;
					case Un.f:
					case Un.e:
						return null;
					default:
						return e
				}
			};
			var Hn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Un.f:
							return !0;
						case Un.e:
						case Un.d:
							return !1;
						default:
							return e
					}
				},
				Wn = Object(S.c)({
					error: Vn,
					pending: Hn
				});
			const Qn = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var $n = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Un.l:
					case Un.j:
						return Qn;
					case Un.i: {
						const e = t.payload;
						return {
							...Qn,
							apiError: e
						}
					}
					case Un.m: {
						const e = t.payload;
						return {
							...Qn,
							validationError: e
						}
					}
					case Un.k: {
						const e = t.payload;
						return {
							...Qn,
							submitValidationError: e
						}
					}
					case Un.h:
						return {
							...Qn, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var Kn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Un.j:
							return !0;
						case Un.l:
						case Un.i:
						case Un.m:
						case Un.k:
						case Un.h:
							return !1;
						default:
							return e
					}
				},
				zn = Object(S.c)({
					error: $n,
					pending: Kn
				}),
				Yn = Object(S.c)({
					deleteDraft: qn,
					listing: Wn,
					save: zn
				}),
				Xn = n("./src/reddit/actions/postCreation/constants.ts");
			const Jn = {};
			var Zn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.G: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Xn.p: {
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
				er = Object(S.c)({
					pending: Zn
				});
			var tr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.u:
					case Xn.v:
					case Xn.d:
					case Xn.e:
					case Xn.f:
					case Xn.i:
					case Xn.j:
					case Xn.n:
					case Xn.O:
						return null;
					case Xn.t:
						return t.payload;
					default:
						return e
				}
			};
			var nr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.u:
							return !0;
						case Xn.v:
						case Xn.t:
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
					converting: er,
					mediaUpload: rr
				});
			const ar = {};
			var or = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ar,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.PAGE_LOADED:
					case De.PAGE_PENDING: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case De.PAGE_FAILED: {
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
			const cr = {};
			var dr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.PAGE_PENDING: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case De.PAGE_LOADED: {
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
			const ir = {};
			var ur = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ir,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.PAGE_PENDING: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case De.PAGE_LOADED:
						case De.PAGE_FAILED: {
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
				lr = Object(S.c)({
					error: or,
					fetched: dr,
					pending: ur
				}),
				pr = n("./src/reddit/actions/scheduledPosts/constants.ts");
			const br = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var fr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : br,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.P:
					case pr.h:
					case pr.k:
					case pr.b:
					case pr.d:
					case Xn.w:
					case Xn.c:
					case Xn.d:
					case Xn.e:
					case Xn.f:
					case Xn.i:
					case Xn.j:
					case Xn.n:
					case Xn.O:
					case Xn.E:
						return br;
					case Xn.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return n ? br : e
					}
					case Xn.o: {
						const e = t.payload;
						return {
							...br,
							apiError: e
						}
					}
					case Xn.cb: {
						const e = t.payload;
						return {
							...br,
							validationError: e
						}
					}
					case Xn.K:
					case Xn.J: {
						const e = t.payload;
						return {
							...br,
							submitValidationError: e
						}
					}
					case Xn.a:
						return {
							...br, needsCaptcha: !0
						};
					case Xn.y:
						return {
							...br, pollError: t.payload
						};
					default:
						return e
				}
			};
			var hr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.w:
							return !0;
						case Xn.P:
						case pr.h:
						case Xn.o:
						case Xn.cb:
						case Xn.J:
						case Xn.K:
						case Xn.y:
						case Xn.a:
							return !1;
						default:
							return e
					}
				},
				yr = Object(S.c)({
					error: fr,
					pending: hr
				});
			var gr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.x:
					case Xn.H:
						return null;
					case Xn.m:
						return t.payload;
					default:
						return e
				}
			};
			var mr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.x:
							return !0;
						case Xn.m:
						case Xn.l:
							return !1;
						default:
							return e
					}
				},
				vr = Object(S.c)({
					error: gr,
					pending: mr
				}),
				Or = Object(S.c)({
					submit: yr,
					update: vr
				});
			var Er = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.O:
					case Xn.M:
					case Xn.N:
						return null;
					default:
						return e
				}
			};
			var _r = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.N:
							return !0;
						case Xn.M:
						case Xn.O:
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
					change: Ir
				}),
				jr = Object(S.c)({
					collection: Ln,
					draft: Yn,
					editor: sr,
					page: lr,
					post: Or,
					subreddit: Sr
				}),
				wr = n("./node_modules/lodash/omit.js"),
				Tr = n.n(wr),
				Dr = n("./src/reddit/actions/pages/postDraft.ts");
			const Pr = {};
			var Ar = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pr,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Un.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Pr
					}
					case Un.c: {
						const n = e,
							{
								draftId: r
							} = t.payload;
						return Tr()(n, r)
					}
					case Xn.P: {
						const {
							draftId: n
						} = t.payload;
						return n ? Tr()(e, n) : e
					}
					case Dr.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Cr = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Rr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				},
				Nr = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
				};
			var kr = n("./src/reddit/models/PostDraft/index.ts");
			var xr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.d:
							return t.payload || "";
						case Xn.E:
							return "";
						case u.b: {
							if (Cr(t) !== Re.Nb.POST_CREATION) return "";
							const n = Rr(t);
							return n && n.url ? n.url || "" : e
						}
						case Un.g: {
							const e = t.payload;
							return e.kind === kr.b.Link && e.body || ""
						}
						case pr.b:
						case pr.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Lr = n("./src/reddit/models/PostCreationForm/index.ts"),
				Ur = n("./src/reddit/models/ScheduledPost/index.ts");
			const Mr = e => e ? e.replace(/\+/g, " ") : "";
			var Gr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.e:
						return t.payload || "";
					case Xn.E:
					case Xn.I:
						return "";
					case Xn.Q:
						return t.payload.editorMode === Lr.i.MARKDOWN ? t.payload.content || "" : e;
					case u.b: {
						if (Cr(t) !== Re.Nb.POST_CREATION) return "";
						const n = Rr(t);
						return n && n.text ? Mr(n.text) : e
					}
					case Un.g: {
						const e = t.payload;
						return e.kind === kr.b.Markdown && e.body || ""
					}
					case pr.b:
					case pr.n: {
						const e = t.payload;
						return e.contentType === Ur.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Fr = {
				items: [],
				selectedKey: null
			};
			var Br = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fr,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.f:
							return t.payload || Fr;
						case Xn.E:
							return Fr;
						case u.b:
							return Cr(t) !== Re.Nb.POST_CREATION ? Fr : e;
						case Un.g:
							return Fr;
						case pr.b:
						case pr.n:
							return Fr;
						default:
							return e
					}
				},
				qr = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				Vr = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Hr = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const Wr = qr.a.createInitial;
			var Qr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wr(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case Xn.E:
							return qr.a.createInitial();
						case Xn.Q: {
							const n = t.payload;
							return n.editorMode === Lr.i.RICH_TEXT && n.editorKey === Lr.h.POST_CREATION ? qr.a.createInitial(n.content) : e
						}
						case u.b:
							return Cr(t) !== Re.Nb.POST_CREATION ? qr.a.createInitial() : e;
						case Un.g: {
							const e = t.payload;
							return e.kind === kr.b.RichText ? qr.a.createInitial(e.body) : qr.a.createInitial()
						}
						case pr.b:
						case pr.n: {
							const e = t.payload,
								n = Object(Vr.c)(e.mediaAssets);
							return qr.a.createInitial(e.contentType === Ur.a.RTJSON ? Object(Hr.b)(e.body) : void 0, n || void 0)
						}
						default:
							return e
					}
				},
				$r = Object(S.c)({
					link: xr,
					markdown: Gr,
					media: Br,
					rte: Qr
				});
			var Kr = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.b:
							return t.payload || null;
						case Xn.E:
						case Un.g:
						case pr.b:
						case pr.n:
						case Xn.O:
							return null;
						case u.b:
							return Cr(t) === Re.Nb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				zr = n("./src/reddit/selectors/scheduledPosts/index.ts");
			var Yr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.c:
						return t.payload || null;
					case pr.b:
					case pr.n: {
						const e = t.payload;
						return Object(zr.n)({
							scheduledPost: e
						}) || null
					}
					case Xn.E:
						return null;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION ? e : null;
					case Un.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var Xr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.q:
						return t.payload.type || null;
					case pr.b:
					case pr.n:
					case Xn.i:
					case Xn.E:
					case u.b:
						return null;
					default:
						return e
				}
			};
			var Jr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.S:
						return t.payload || !1;
					case pr.b:
					case pr.n:
						return "CHAT" === t.payload.discussionType;
					case Xn.E:
						return !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case Un.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var Zr = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.ab: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case Xn.E:
						return !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case pr.b:
					case pr.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var es = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.U:
						return t.payload || !1;
					case Xn.E:
						return !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case Un.g:
						return t.payload.isNSFW || !1;
					case pr.b:
					case pr.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var ts = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.V:
						return t.payload || !1;
					case Xn.E:
						return !1;
					case Xn.O: {
						const {
							name: n
						} = t.payload;
						return !!n && e
					}
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case Un.g:
						return t.payload.isOriginalContent || !1;
					case pr.b:
					case pr.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var ns = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.W:
						return t.payload || !1;
					case pr.b:
					case pr.n:
						return !!t.payload.poll;
					case Xn.E:
						return !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					default:
						return e
				}
			};
			var rs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.ab: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case Xn.E:
						return !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case pr.b:
					case pr.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var ss = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pr.b:
					case pr.n:
					case Xn.E:
						return !1;
					case Un.n:
						return t.payload;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case Un.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var as = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.X:
						return t.payload || !1;
					case Xn.E:
						return !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case Un.g:
						return t.payload.isSpoiler || !1;
					case pr.b:
					case pr.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var os = function() {
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
					case Xn.i:
					case Xn.q:
					case Xn.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var cs = function() {
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
					case Xn.i:
					case Xn.q:
					case Xn.E:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var ds = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.N:
						case Xn.O:
							return t.payload;
						case Xn.M:
						case u.b:
							return null;
						default:
							return e
					}
				},
				is = n("./src/reddit/actions/polls.ts");
			var us = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case is.a:
							return {
								...t.payload
							};
						case pr.b:
						case pr.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case d.h:
						case Xn.E:
							return null;
						case u.b:
							return Cr(t) !== Re.Nb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				ls = n("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				ps = n("./src/reddit/helpers/scheduledPosts/index.ts");
			var bs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r, s, a;
				switch (t.type) {
					case Xn.ab: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case Xn.E:
					case Un.g:
					case Xn.O:
						return null;
					case u.b:
						if (Cr(t) === Re.Nb.POST_CREATION) {
							const o = null === (a = (null !== (s = null === (r = null === (n = t.payload) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.match.queryParams) && void 0 !== s ? s : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (o && Object(Ur.n)(o)) {
								const t = Object(ls.c)();
								return {
									...e,
									...t,
									frequencyOption: o,
									recurrenceInfo: {
										...ls.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(ls.b)(new Date(t.submitDate), o)
									}
								}
							}
							return e
						}
						return null;
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
						return {
							...Object(ps.h)(e)
						}
					}
					default:
						return e
				}
			};
			var fs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				const {
					type: n,
					payload: r
				} = t;
				switch (n) {
					case Xn.Y:
						return r || !1;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case pr.b:
					case pr.n:
					case Un.g:
						return !1;
					default:
						return e
				}
			};
			var hs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.g:
						return t.payload || "";
					case u.b:
						return Cr(t) !== Re.Nb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var ys = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b:
						return Cr(t) !== Re.Nb.POST_CREATION ? null : e;
					case Xn.E:
						return null;
					case pr.b:
					case pr.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var gs = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.E:
						return !0;
					case Xn.Z:
						return t.payload;
					case u.b:
						return Cr(t) !== Re.Nb.POST_CREATION || e;
					case Un.g:
						return t.payload.sendReplies;
					case pr.b:
					case pr.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var ms = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.ab: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case Xn.E:
					case Un.g:
					case Xn.O:
						return null;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION ? e : null;
					case pr.b:
					case pr.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const vs = Re.Wb.POST;
			var Os = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vs,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.E:
						return vs;
					case Xn.r:
						return Re.Wb.CROSSPOST;
					case Xn.i:
						return t.payload.submissionType || vs;
					case u.b: {
						if (Cr(t) !== Re.Nb.POST_CREATION) return vs;
						const n = Rr(t);
						if (!n) return e;
						const {
							title: r = "",
							url: s,
							text: a = "",
							media: o = !1,
							selftext: c = !1,
							type: d = ""
						} = n, i = r && !a && !c;
						return o ? Re.Wb.MEDIA : void 0 !== s || i ? Re.Wb.LINK_ONLY : a || c ? Re.Wb.POST : d === Re.xb ? Re.Wb.POLL : e
					}
					case Un.g: {
						const e = t.payload;
						return kr.a[e.kind]
					}
					case pr.b:
					case pr.n: {
						const e = t.payload;
						return e.poll ? Re.Wb.POLL : e.url ? Re.Wb.LINK_ONLY : Re.Wb.POST
					}
					default:
						return e
				}
			};
			var Es = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.ab: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case Xn.E:
						case Un.g:
						case Xn.O:
							return null;
						case u.b:
							return Cr(t) === Re.Nb.POST_CREATION ? e : null;
						case pr.b:
						case pr.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				_s = n("./src/reddit/models/Poll/index.ts");
			const Is = e => e ? e.replace(/\+/g, " ") : "",
				Ss = e => `Should ${e||"username"} become the top moderator?`,
				js = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var ws = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.r:
						return t.payload.postTitle || "";
					case Xn.j:
						return t.payload || "";
					case Xn.D: {
						const {
							title: n
						} = t.payload;
						return e || (n || "")
					}
					case Xn.E:
						return "";
					case u.b: {
						if (Cr(t) !== Re.Nb.POST_CREATION) return "";
						const n = Rr(t);
						return n && n.title ? Is(n.title) : e
					}
					case Un.g:
						return t.payload.title;
					case Xn.q: {
						const {
							oldType: n,
							type: r
						} = t.payload;
						return r === _s.a.ReplaceTopMod ? Ss("") : r === _s.a.Spinoff ? js("") : n === _s.a.ReplaceTopMod || n === _s.a.Spinoff ? "" : e
					}
					case d.c: {
						const {
							username: e
						} = t.payload;
						return Ss(e)
					}
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return js(e)
					}
					case Xn.i: {
						const {
							extra: n
						} = t.payload;
						return !n || n.govType !== _s.a.ReplaceTopMod && n.govType !== _s.a.Spinoff ? e : ""
					}
					case pr.b:
					case pr.n:
						return t.payload.title;
					default:
						return e
				}
			};
			const Ts = {
				name: "",
				theme: "theme_1",
				token: null
			};
			var Ds = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ts,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.bb:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Ps = Object(S.c)({
					body: $r,
					eventSchedule: Kr,
					flair: Yr,
					govType: Xr,
					isChatPost: Jr,
					isContestMode: Zr,
					isNSFW: es,
					isOC: ts,
					isPostAsMetaMod: rs,
					isPoll: ns,
					isPublicLink: ss,
					isSpoiler: as,
					newSubreddit: os,
					newTopMod: cs,
					nextSubreddit: ds,
					polls: us,
					postSchedule: bs,
					postToTwitter: fs,
					recaptcha: hs,
					scheduledPostId: ys,
					sendReplies: gs,
					stickyPosition: ms,
					submissionType: Os,
					suggestedSort: Es,
					title: ws,
					tournament: Ds
				});
			const As = e => e ? e.replace(/\+/g, " ") : "";
			var Cs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b: {
						if (Cr(t) !== Re.Nb.POST_CREATION) return null;
						const n = Rr(t);
						return n && n.text && As(n.text) ? Lr.i.MARKDOWN : e
					}
					case Xn.H: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case Xn.I:
						return null;
					case Xn.Q: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case pr.b:
					case pr.n:
						return t.payload.contentType === Ur.a.RTJSON ? Lr.i.RICH_TEXT : Lr.i.MARKDOWN;
					default:
						return e
				}
			};
			const Rs = {
					title: [],
					body: [],
					link: [],
					flair: []
				},
				Ns = (e, t) => {
					const n = (t.fields || []).filter(e => {
						let {
							field: t
						} = e;
						return Object(Lr.w)(t)
					});
					if (!n.length) return e;
					const r = n.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
					return {
						...e,
						...r
					}
				};
			var ks = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rs,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.c:
					case Xn.d:
					case Xn.e:
						return e[Re.wb.BODY] ? {
							...e,
							[Re.wb.BODY]: []
						} : e;
					case Xn.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return e[Re.wb.BODY] && n ? {
							...e,
							[Re.wb.BODY]: []
						} : e
					}
					case Xn.j:
						return e[Re.wb.TITLE] ? {
							...e,
							[Re.wb.TITLE]: []
						} : e;
					case Xn.L: {
						const n = t.payload;
						return {
							...e,
							[n]: []
						}
					}
					case Xn.n: {
						const n = t.payload;
						return n ? {
							...e,
							[n]: []
						} : Rs
					}
					case Xn.K:
					case Xn.J: {
						const n = t.payload;
						return Ns(e, n)
					}
					case u.b:
						return Cr(t) !== Re.Nb.POST_CREATION ? Rs : e;
					default:
						return e
				}
			};
			var xs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.b:
					case Xn.c:
					case Xn.d:
					case Xn.e:
					case Xn.f:
					case Xn.j:
					case Xn.i:
					case Xn.U:
					case Xn.V:
					case Xn.X:
					case Un.n:
					case Xn.Z:
					case Xn.ab:
						return !0;
					case Xn.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return !!n || e
					}
					case Xn.P:
					case pr.h:
						return !1;
					case Xn.R:
						return t.payload;
					case u.b:
						return Cr(t) === Re.Nb.POST_CREATION && e;
					case Xn.E:
					case Un.l:
					case Un.g:
						return !1;
					default:
						return e
				}
			};
			const Ls = Lr.r.Post;
			var Us = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ls,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.w:
							return Lr.r.Post;
						case Xn.F:
							return t.payload;
						case Un.j:
							return Lr.r.Draft;
						case u.b:
							return Cr(t) !== Re.Nb.POST_CREATION ? Ls : e;
						default:
							return e
					}
				},
				Ms = Object(S.c)({
					editorMode: Cs,
					fieldValidation: ks,
					isChanged: xs,
					submitMode: Us
				});
			var Gs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.H:
						return t.payload.editorMode === Lr.i.MARKDOWN ? t.payload.postContent || "" : e;
					case Xn.I:
						return "";
					case Xn.Q:
						return t.payload.editorMode === Lr.i.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const Fs = qr.a.createInitial;
			var Bs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fs(),
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.I:
							return qr.a.createInitial();
						case Xn.H: {
							const n = t.payload;
							return n.editorMode === Lr.i.RICH_TEXT && "object" == typeof n.postContent ? qr.a.createInitial(n.postContent, n.mediaMetadata) : e
						}
						case Xn.Q: {
							const n = t.payload;
							return n.editorMode === Lr.i.RICH_TEXT && n.editorKey === Lr.h.POST_EDITING ? qr.a.createInitial(n.content) : e
						}
						default:
							return e
					}
				},
				qs = Object(S.c)({
					markdown: Gs,
					rte: Bs
				});
			var Vs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.H: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case Xn.I:
							return null;
						default:
							return e
					}
				},
				Hs = Object(S.c)({
					draft: qs,
					postId: Vs
				});
			var Ws = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.C:
					case Xn.B:
						return !1;
					case Xn.z:
						return !0;
					default:
						return e
				}
			};
			var Qs = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.z:
						case Xn.B:
							return !1;
						case Xn.C:
							return !0;
						default:
							return e
					}
				},
				$s = Object(S.c)({
					error: Ws,
					pending: Qs
				});
			var Ks = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.A: {
						const {
							isChanged: e
						} = t.payload;
						return e
					}
					case Xn.j:
					case Xn.d:
					case Xn.e:
					case Xn.i:
					case Xn.r:
					case Un.g:
						return !0;
					case Xn.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return !!n || e
					}
					default:
						return e
				}
			};
			const zs = {};
			var Ys = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zs,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xn.B: {
						const {
							recSubsDict: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Xs = [];
			var Js = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xs,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xn.B: {
							const {
								recSubsOrder: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				Zs = Object(S.c)({
					api: $s,
					isInputChanged: Ks,
					model: Ys,
					order: Js
				}),
				ea = Object(S.c)({
					api: jr,
					drafts: Ar,
					formData: Ps,
					formState: Ms,
					postEditing: Hs,
					subredditRec: Zs
				}),
				ta = n("./src/reddit/actions/dashboard/constants.ts");
			const na = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var ra = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : na,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ta.a:
						return {
							...e, selectedComponent: t.payload
						};
					case ta.d: {
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
					case ta.c: {
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
			var sa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ee.b:
					case Ee.c:
						return null;
					case Ee.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var aa = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ee.c:
						return !1;
					case Ee.b:
						return !0;
					default:
						return e
				}
			};
			var oa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ee.c:
							return !0;
						case Ee.b:
						case Ee.a:
							return !1;
						default:
							return e
					}
				},
				ca = Object(S.c)({
					error: sa,
					loaded: aa,
					pending: oa
				}),
				da = Object(S.c)({
					list: ca
				}),
				ia = n("./node_modules/lodash/isEmpty.js"),
				ua = n.n(ia);
			const la = {};
			var pa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : la,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ee.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							return ua()(n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				ba = n("./node_modules/lodash/forOwn.js"),
				fa = n.n(ba),
				ha = n("./src/reddit/helpers/name/index.ts");
			const ya = {};
			var ga = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ya,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ee.b: {
							const {
								discoveryUnits: n
							} = t.payload;
							if (ua()(n)) return e;
							const r = {};
							return fa()(n, e => {
								r[Object(ha.h)(e.unitName)] = e.id
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				ma = Object(S.c)({
					api: da,
					models: pa,
					nameToId: ga
				}),
				va = n("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const Oa = [];
			var Ea = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case va.a: {
							const {
								subredditId: n
							} = t.payload;
							return [...e, n]
						}
						default:
							return e
					}
				},
				_a = n("./src/reddit/actions/economics/banners/constants.ts");
			const Ia = {
				dismissedBanners: {}
			};
			var Sa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ia,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _a.c: {
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
						case _a.d: {
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
						case _a.a:
						case _a.b: {
							const {
								subredditId: n,
								bannerType: r
							} = t.payload, s = e.dismissedBanners[n] || {}, a = t.type === _a.a;
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
				ja = n("./src/reddit/models/Badge/managementPage.ts");
			const wa = {
				badgeType: ja.a.Cosmetic,
				view: ja.c.Gallery
			};
			var Ta = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wa,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.c: {
						const {
							badge: n,
							initialView: r
						} = t.payload;
						return n || r ? {
							...e,
							badgeType: n ? Object(ja.d)(n.placement) : e.badgeType,
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
						return wa;
					default:
						return e
				}
			};
			var Da = function() {
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
				Pa = n("./src/reddit/actions/economics/powerups/constants.ts");

			function Aa(e, t) {
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

			function Ca(e) {
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
						emotes: s.map(e => Aa(e, t))
					}
				}), n
			}
			const Ra = {};

			function Na(e, t, n) {
				if (!e[t]) return e;
				const r = e[t].findIndex(e => e.title === t);
				return -1 === r ? e : {
					...e,
					[t]: e[t].map((e, s) => s !== r ? e : {
						title: e.title,
						emotes: {
							...e.emotes,
							[n.name]: Aa(n, t)
						}
					})
				}
			}
			var ka = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ra,
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
					case Pa.b: {
						const {
							subredditId: n,
							emoji: r
						} = t.payload;
						return Na(e, n, r)
					}
					default:
						return e
				}
			};
			const xa = {};
			var La = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xa,
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
				Ua = n("./src/reddit/actions/economics/me/constants.ts");
			const Ma = {
				fetched: !1,
				data: {}
			};
			var Ga = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ma,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ua.a:
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
				Fa = n("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const Ba = {
				fetched: !1,
				data: null
			};
			var qa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ba,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ua.b:
							return {
								fetched: !0, data: e.data
							};
						case Ua.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				Va = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Ha = Object(S.c)({
					banners: Sa,
					currentBadgeManagementScreen: Ta,
					currentModalArgs: Da,
					emotes: ka,
					gifs: La,
					me: Ga,
					paymentSystems: Fa.b,
					pointsCopy: qa,
					subredditPremium: Va.b
				}),
				Wa = n("./src/reddit/actions/emailVerificationTooltip.ts");
			const Qa = {
				isShowing: !1,
				triggerSource: "none"
			};
			var $a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wa.b:
							return {
								...e, isShowing: !e.isShowing
							};
						case Wa.a:
							return {
								...e, triggerSource: t.payload
							};
						default:
							return e
					}
				},
				Ka = n("./src/reddit/actions/emoji.ts");
			const za = {};
			var Ya = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : za,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ka.h: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ka.g:
						case Ka.f: {
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
				Xa = Object(S.c)({
					pending: Ya
				}),
				Ja = Object(S.c)({
					list: Xa
				});
			const Za = {};
			var eo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Za,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ka.f:
						case Ka.c:
							return e;
						case Ka.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Ka.d: {
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
						case Ka.i: {
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
						case Ka.e: {
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
				to = Object(S.c)({
					api: Ja,
					models: eo
				}),
				no = n("./src/reddit/actions/experiments.ts");
			const ro = /^experiment_(.*)$/i,
				so = e => {
					const t = e.match(ro);
					if (null !== t) return t[1]
				},
				ao = {};
			var oo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ao,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.b: {
							const n = Rr(t);
							if (!n) return e;
							const r = {};
							for (const e in n) {
								const t = so(e);
								t && (r[t.toLowerCase()] = n[e] || "")
							}
							return ua()(r) ? e : {
								...e,
								...r
							}
						}
						case no.b: {
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
				co = n("./src/reddit/actions/externalAccount.ts");
			const io = {};
			var uo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : io,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case co.e:
					case co.f: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case co.d: {
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
			const lo = {};
			var po = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case co.e: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case co.f:
						case co.d: {
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
				bo = Object(S.c)({
					error: uo,
					pending: po
				});
			const fo = {};
			var ho = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case co.l:
					case co.k: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case co.j: {
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
			const yo = {};
			var go = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case co.b: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case co.c:
						case co.a: {
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
				mo = Object(S.c)({
					error: ho,
					pending: go
				});
			const vo = {};
			var Oo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case co.i:
					case co.h: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case co.g: {
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
			const Eo = {};
			var _o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case co.h: {
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
			const Io = {};
			var So = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Io,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case co.i: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case co.h:
						case co.g: {
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
				jo = Object(S.c)({
					error: Oo,
					fetched: _o,
					pending: So
				});
			const wo = {};
			var To = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case co.l:
					case co.k: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case co.j: {
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
			const Do = {};
			var Po = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Do,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case co.l: {
							const {
								username: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case co.k:
						case co.j: {
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
				Ao = Object(S.c)({
					error: To,
					pending: Po
				}),
				Co = Object(S.c)({
					connect: bo,
					disconnect: mo,
					user: Ao,
					subreddit: jo
				});
			const Ro = {};
			var No = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ro,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case co.h: {
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
			const ko = {};
			var xo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ko,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case co.k: {
							const {
								username: n,
								accountsData: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case co.c: {
							const {
								username: n,
								provider: r
							} = t.payload, s = e[n];
							return s && s[r] ? {
								...e,
								[n]: Tr()(s, r)
							} : e
						}
						default:
							return e
					}
				},
				Lo = Object(S.c)({
					api: Co,
					user: xo,
					subreddit: No
				}),
				Uo = n("./src/reddit/featureFlags/index.ts");
			const Mo = new Set(["0", "disabled", "false", "off", ""]);
			var Go = e => !Mo.has(e.toLowerCase());
			const Fo = Uo.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				Bo = Uo.a.reduce((e, t) => (e[t] = null, e), {});
			var qo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.b: {
							const n = Rr(t);
							if (void 0 !== n) {
								const t = {};
								for (const e in n) {
									const r = Object(Uo.g)(e);
									if (r) {
										const s = Fo[r.toLowerCase()];
										if (s) {
											const r = n[e],
												a = "string" != typeof r || Go(r);
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
						case Uo.b: {
							const {
								featureName: n,
								currentValue: r
							} = t.payload;
							return r === e[n] ? e : {
								...e,
								[n]: r
							}
						}
						case Uo.c: {
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
				Vo = Object(S.c)({
					overrides: qo
				}),
				Ho = n("./src/reddit/actions/focusedVerticals/constants.ts");
			const Wo = {
				focusedVerticalGqlError: null
			};
			var Qo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ho.h:
					case Ho.g:
					case Ho.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case Ho.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const $o = {
				focusedVerticalGqlPending: !1
			};
			var Ko = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ho.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case Ho.e:
						case Ho.g:
						case Ho.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				zo = Object(S.c)({
					error: Qo,
					pending: Ko
				});
			var Yo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ho.g:
					case Ho.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const Xo = {
				dismissed: !0
			};
			var Jo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ho.j:
						return {
							dismissed: !1
						};
					case Ho.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var Zo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ho.g:
					case Ho.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var ec = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ho.g:
					case Ho.c:
					case Ho.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var tc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ho.g:
						case Ho.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				nc = Object(S.c)({
					api: zo,
					components: Jo,
					interactedSubredditIds: Zo,
					recommendedSubredditIds: tc,
					category: Yo,
					lastLoadedEnv: ec
				});
			Object(Ce.a)("FONTS_FONT_FILES_PARSED");
			const rc = [];
			var sc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var ac = function() {
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
			var oc = function() {
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
			var cc = function() {
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
				dc = Object(S.c)({
					error: ac,
					pending: oc,
					showLoader: cc
				});
			var ic = function() {
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
			var uc = function() {
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
			var lc = function() {
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
			var pc = function() {
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
			var bc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.J:
						return !0;
					default:
						return e
				}
			};
			var fc = function() {
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
			const hc = Oe.n;
			var yc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.mb:
							return t.payload;
						case ee.K: {
							const {
								award: e
							} = t.payload;
							return e || hc
						}
						default:
							return e
					}
				},
				gc = Object(S.c)({
					api: dc,
					correlationId: ic,
					gildModalThingId: lc,
					isAnonymous: pc,
					isIframed: bc,
					message: fc,
					gildedThing: uc,
					selectedAward: yc
				});
			var mc = function() {
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
			var vc = function() {
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
				Oc = Object(S.c)({
					error: mc,
					pending: vc
				});
			var Ec = function() {
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
				_c = Object(S.c)({
					api: Oc,
					givePremiumModalAccountName: Ec
				}),
				Ic = n("./src/reddit/actions/header.ts"),
				Sc = n("./src/reddit/actions/overlayEvents.ts");
			var jc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ic.a:
							return !1;
						case Ic.b:
							return !0;
						case Ic.c:
							return !e;
						case Sc.b:
							return !1;
						default:
							return e
					}
				},
				wc = Object(S.c)({
					isSubscriptionsDropdownOpen: jc
				});
			var Tc = function() {
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
				Dc = n("./src/reddit/actions/imageUploads.ts");
			const Pc = {};
			var Ac = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Dc.d: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case Dc.c:
					case Dc.e:
					case Dc.b: {
						const n = t.payload;
						return e[n.id] ? {
							...e,
							[n.id]: n
						} : e
					}
					case Dc.a: {
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
			var Cc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case _e.b: {
						const r = t.payload;
						return ua()(r) ? e : (null === (n = r.notifications) || void 0 === n ? void 0 : n.position) || null
					}
					default:
						return e
				}
			};
			const Rc = {
				notifications: null,
				id: null
			};
			var Nc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r;
					switch (t.type) {
						case _e.b: {
							const s = t.payload;
							return ua()(s) ? e : {
								...e,
								notifications: (null === (n = s.notifications) || void 0 === n ? void 0 : n.notifications) || null,
								id: null === (r = s.notifications) || void 0 === r ? void 0 : r.id
							}
						}
						default:
							return e
					}
				},
				kc = n("./src/reddit/actions/inAppNotifications/constants.ts");
			var xc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kc.a:
							return !0;
						default:
							return e
					}
				},
				Lc = Object(S.c)({
					inFeedPosition: Cc,
					notifications: Nc,
					shouldHideInAppNotifications: xc
				}),
				Uc = n("./src/reddit/actions/interceptedAction.ts");
			var Mc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Uc.a:
							return t.payload;
						case Uc.b:
							return null;
						default:
							return e
					}
				},
				Gc = n("./src/reddit/actions/changeUsername.ts");
			var Fc = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Gc.a:
							return !1;
						case Gc.b:
							return !0;
						default:
							return e
					}
				},
				Bc = n("./src/reddit/actions/moderatingSubreddits.ts");
			var qc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bc.a: {
							if (e) return e;
							const n = t.payload;
							return Object.keys(n).some(e => !0 === n[e].posts)
						}
						case W.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case De.PAGE_LOADED: {
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
				Vc = n("./src/reddit/actions/jsApi.ts");
			const Hc = [];
			var Wc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vc.a: {
							const n = t.payload;
							return -1 === e.indexOf(n) && (e = [...e, n]).sort(), e
						}
						default:
							return e
					}
				},
				Qc = n("./src/reddit/actions/langSite/index.ts");
			const $c = {
				bannerClosedTime: 0
			};
			var Kc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $c,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qc.a:
							return {
								...e, bannerClosedTime: Date.now()
							};
						default:
							return e
					}
				},
				zc = n("./src/reddit/actions/leaderboard/constants.ts");
			const Yc = {};
			var Xc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zc.a: {
						const {
							subredditId: n,
							data: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case zc.b:
					case zc.c: {
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
			const Jc = {};
			var Zc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zc.a:
						case zc.c: {
							const {
								subredditId: n
							} = t.payload, {
								[n]: r,
								...s
							} = e;
							return s
						}
						case zc.b: {
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
				ed = Object(S.c)({
					error: Xc,
					pending: Zc
				});
			const td = {};
			var nd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : td,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case zc.c: {
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
				rd = Object(S.c)({
					api: ed,
					models: nd
				});
			var sd = function() {
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
			const ad = {};
			var od = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ad,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case H.b:
					case H.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Re.cc.Users) ? e : {
							...e,
							[n]: null
						}
					}
					case Ne.c:
					case H.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.cc.Users) || s && s.authors ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const cd = {};
			var dd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.d:
						case H.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.cc.Users) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ne.e:
						case Ne.c:
						case H.c:
						case H.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.cc.Users) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				id = Object(S.c)({
					error: od,
					pending: dd
				});
			const ud = {};
			var ld = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ud,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Re.cc.Users)) return e;
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
			const pd = {};
			var bd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							key: n,
							authorOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(Re.cc.Users) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case H.c: {
						const {
							key: n,
							authorOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.cc.Users) ? e : {
							...e,
							[n]: r
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
						case Ne.e:
						case H.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.cc.Users) ? e : r.authors ? {
								...e,
								[n]: {
									token: r.authors
								}
							} : Object(Dt.a)(e, n)
						}
						default:
							return e
					}
				},
				yd = Object(S.c)({
					api: id,
					identifiers: bd,
					fetchedTokens: ld,
					loadMore: hd
				});
			const gd = {};
			var md = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case H.b:
					case H.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Re.cc.Comments) ? e : {
							...e,
							[n]: null
						}
					}
					case Ne.c:
					case H.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.cc.Comments) || s && s.comments ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const vd = {};
			var Od = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.d:
						case H.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.cc.Comments) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ne.e:
						case Ne.c:
						case H.c:
						case H.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.cc.Comments) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Ed = Object(S.c)({
					error: md,
					pending: Od
				});
			const _d = {};
			var Id = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Re.cc.Comments)) return e;
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
			const Sd = {};
			var jd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							key: n,
							commentOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(Re.cc.Comments) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case H.c: {
						const {
							key: n,
							commentOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.cc.Comments) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const wd = {};
			var Td = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.e:
						case H.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.cc.Comments) ? e : r.comments ? {
								...e,
								[n]: {
									token: r.comments
								}
							} : Object(Dt.a)(e, n)
						}
						default:
							return e
					}
				},
				Dd = Object(S.c)({
					api: Ed,
					identifiers: jd,
					fetchedTokens: Id,
					loadMore: Td
				});
			const Pd = {};
			var Ad = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case H.b:
					case H.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Re.cc.Subreddits) ? e : {
							...e,
							[n]: null
						}
					}
					case Ne.c:
					case H.a: {
						const {
							key: n,
							error: r,
							success: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Re.cc.Subreddits) || s && s.communities ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Cd = {};
			var Rd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.d:
						case H.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.cc.Subreddits) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ne.e:
						case Ne.c:
						case H.c:
						case H.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.cc.Subreddits) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				Nd = Object(S.c)({
					error: Ad,
					pending: Rd
				});
			const kd = {};
			var xd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Re.cc.Subreddits)) return e;
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
			const Ld = {};
			var Ud = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ld,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							key: n,
							communityOrder: r,
							type: s
						} = t.payload;
						return -1 !== s.indexOf(Re.cc.Subreddits) && e[n] ? {
							...e,
							[n]: e[n].concat(r)
						} : e
					}
					case H.c: {
						const {
							key: n,
							communityOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.cc.Subreddits) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Md = {};
			var Gd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Md,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.e:
						case H.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.cc.Subreddits) ? e : r.communities ? {
								...e,
								[n]: {
									token: r.communities
								}
							} : Object(Dt.a)(e, n)
						}
						default:
							return e
					}
				},
				Fd = Object(S.c)({
					api: Nd,
					identifiers: Ud,
					fetchedTokens: xd,
					loadMore: Gd
				});
			const Bd = {};
			var qd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case H.b:
					case H.c: {
						const {
							key: n,
							type: r
						} = t.payload;
						return -1 === r.indexOf(Re.cc.Subreddits) && -1 === r.indexOf(Re.cc.Users) ? e : {
							...e,
							[n]: null
						}
					}
					case Ne.c:
					case H.a: {
						const {
							key: n,
							error: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.cc.Subreddits) && -1 === s.indexOf(Re.cc.Users) ? e : {
							...e,
							[n]: r
						}
					}
					case Ee.f:
					case Ee.e: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Ee.d: {
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
			const Vd = {};
			var Hd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.d:
						case H.b: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.cc.Subreddits) && -1 === r.indexOf(Re.cc.Users) ? e : {
								...e,
								[n]: !0
							}
						}
						case Ne.e:
						case Ne.c:
						case H.c:
						case H.a: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.cc.Subreddits) && -1 === r.indexOf(Re.cc.Users) ? e : {
								...e,
								[n]: !1
							}
						}
						case Ee.f: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Ee.e:
						case Ee.d: {
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
				Wd = Object(S.c)({
					error: qd,
					pending: Hd
				});
			const Qd = {};
			var $d = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							fetchedToken: n,
							key: r,
							type: s
						} = t.payload;
						if (-1 === s.indexOf(Re.cc.Subreddits) && -1 === s.indexOf(Re.cc.Users)) return e;
						const a = e[r];
						return {
							...e,
							[r]: {
								...a,
								[n]: !0
							}
						}
					}
					case Ee.e: {
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
			const Kd = {};
			var zd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.e: {
						const {
							key: n,
							listingOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.cc.Subreddits) && -1 === s.indexOf(Re.cc.Users) ? e : {
							...e,
							[n]: e[n].concat(r)
						}
					}
					case H.c: {
						const {
							key: n,
							listingOrder: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.cc.Subreddits) && -1 === s.indexOf(Re.cc.Users) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Yd = {};
			var Xd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.e:
						case H.c: {
							const {
								key: n,
								tokens: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.cc.Subreddits) && -1 === s.indexOf(Re.cc.Users) ? e : r.listings ? {
								...e,
								[n]: {
									token: r.listings
								}
							} : Object(Dt.a)(e, n)
						}
						case Ee.e: {
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
				Jd = Object(S.c)({
					api: Wd,
					identifiers: zd,
					fetchedTokens: $d,
					loadMore: Xd
				});
			const Zd = {};
			var ei = n("./src/reddit/actions/eventPosts/constants.ts"),
				ti = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				ni = n("./src/reddit/actions/pages/topic.ts");
			const ri = {};
			var si = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ri,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.c:
						case je.b:
						case je.g:
						case je.f:
						case _e.c:
						case _e.b:
						case Te.c:
						case Te.b:
						case W.SUBREDDIT_PENDING:
						case W.SUBREDDIT_LOADED:
						case _e.g:
						case _e.f:
						case we.e:
						case we.f:
						case we.i:
						case we.h:
						case Se.s:
						case Se.r:
						case ti.b:
						case ti.c:
						case q.PROFILE_POSTS_PENDING:
						case q.PROFILE_POSTS_LOADED:
						case q.MORE_POSTS_PENDING:
						case q.MORE_POSTS_LOADED:
						case Q.f:
						case Q.e:
						case Pe.f:
						case Pe.e:
						case $.j:
						case ni.TOPIC_DATA_PENDING:
						case ni.TOPIC_DATA_LOADED:
						case ni.MORE_POSTS_PENDING:
						case ni.MORE_POSTS_LOADED:
						case $.i:
						case ei.e:
						case ei.c:
						case ei.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: null
							}
						}
						case H.b:
						case H.c:
						case Ne.d:
						case Ne.e: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.cc.Posts) ? e : {
								...e,
								[n]: null
							}
						}
						case je.a:
						case je.e:
						case _e.a:
						case Te.a:
						case W.SUBREDDIT_FAILED:
						case _e.e:
						case we.g:
						case Se.q:
						case ti.a:
						case $.h:
						case Q.d:
						case Pe.d:
						case q.PROFILE_POSTS_FAILED:
						case q.MORE_POSTS_FAILED:
						case ni.TOPIC_DATA_FAILED:
						case ni.MORE_POSTS_FAILED:
						case ei.b: {
							const {
								key: n,
								error: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case H.a:
						case Ne.c: {
							const {
								error: n,
								key: r,
								success: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Re.cc.Posts) || s && s.posts ? e : {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				ai = n("./src/reddit/actions/linkedPosts/constants.ts"),
				oi = n("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				ci = n("./src/reddit/actions/subreddit/constants.ts");
			const di = {};
			var ii = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : di,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.c:
						case je.g:
						case _e.c:
						case Te.c:
						case q.PROFILE_POSTS_PENDING:
						case Pe.f:
						case W.SUBREDDIT_PENDING:
						case _e.g:
						case we.f:
						case we.i:
						case Se.s:
						case ti.c:
						case Q.f:
						case q.MORE_POSTS_PENDING:
						case $.j:
						case ni.MORE_POSTS_PENDING:
						case ei.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case H.b:
						case Ne.d: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.cc.Posts) ? e : {
								...e,
								[n]: !0
							}
						}
						case je.b:
						case je.a:
						case je.f:
						case je.e:
						case _e.b:
						case _e.a:
						case Te.a:
						case Te.b:
						case Pe.d:
						case Pe.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED:
						case W.SUBREDDIT_LOADED:
						case W.SUBREDDIT_FAILED:
						case _e.f:
						case _e.e:
						case ai.b:
						case ai.c:
						case we.e:
						case we.d:
						case we.h:
						case we.g:
						case Se.r:
						case Se.q:
						case Q.d:
						case Q.e:
						case q.MORE_POSTS_FAILED:
						case q.MORE_POSTS_LOADED:
						case oi.a:
						case oi.b:
						case ci.j:
						case ti.b:
						case ti.a:
						case $.i:
						case $.h:
						case ni.MORE_POSTS_LOADED:
						case ni.MORE_POSTS_FAILED:
						case ei.c:
						case ei.b:
						case ei.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						case ci.r: {
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
						case H.c:
						case H.a:
						case Ne.e:
						case Ne.c: {
							const {
								key: n,
								type: r
							} = t.payload;
							return -1 === r.indexOf(Re.cc.Posts) ? e : {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				ui = Object(S.c)({
					error: si,
					pending: ii
				});
			const li = {};
			var pi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : li,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _e.b:
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
				bi = n("./src/reddit/actions/postList.ts"),
				fi = n("./node_modules/lodash/omitBy.js"),
				hi = n.n(fi);

			function yi(e, t) {
				return t = t.toLowerCase(), hi()(e, (e, n) => n === t || n.startsWith(`${t}--[`))
			}
			const gi = {};
			var mi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bi.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case bi.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? Tr()(e, [n]) : e
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return yi(e, t.payload);
					default:
						return e
				}
			};
			const vi = {};
			var Oi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.b:
						case we.e:
						case _e.b:
						case Te.b:
						case W.SUBREDDIT_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case ni.TOPIC_DATA_LOADED: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: {}
							}
						}
						case je.f:
						case _e.f:
						case we.h:
						case Se.r:
						case Q.e:
						case q.MORE_POSTS_LOADED:
						case $.i:
						case ni.MORE_POSTS_LOADED: {
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
						case Ne.e: {
							const {
								fetchedToken: n,
								key: r,
								type: s
							} = t.payload;
							if (s.indexOf(Re.cc.Posts) > -1) {
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
							return yi(e, t.payload);
						default:
							return e
					}
				},
				Ei = n("./src/reddit/actions/post.ts");
			const _i = {};
			var Ii = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.c:
						case _e.c:
						case we.f:
						case Te.c:
						case q.PROFILE_POSTS_PENDING:
						case W.SUBREDDIT_PENDING:
						case Pe.f:
						case q.PROFILE_POSTS_PENDING:
						case ni.TOPIC_DATA_PENDING: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: []
							}
						}
						case Ee.e:
						case ai.c:
						case we.e:
						case oi.b:
						case _e.b:
						case je.b:
						case Te.b:
						case W.SUBREDDIT_LOADED:
						case ci.j:
						case ti.b:
						case Pe.e:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case ni.TOPIC_DATA_LOADED:
						case ei.c: {
							const {
								key: n,
								postIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case ci.r: {
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
						case je.f:
						case _e.f:
						case we.h:
						case Se.r:
						case q.MORE_POSTS_LOADED:
						case Q.e:
						case $.i:
						case ni.MORE_POSTS_LOADED:
						case ei.d: {
							const {
								key: n,
								postIds: r
							} = t.payload;
							return {
								...e,
								[n]: e[n].concat(r)
							}
						}
						case H.c: {
							const {
								key: n,
								postOrder: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.cc.Posts) ? e : {
								...e,
								[n]: r
							}
						}
						case Ne.e: {
							const {
								key: n,
								postOrder: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Re.cc.Posts) ? e : {
								...e,
								[n]: e[n].concat(r)
							}
						}
						case Ei.o: {
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
							return yi(e, t.payload);
						default:
							return e
					}
				},
				Si = n("./src/lib/makeListingKey/index.ts");
			const ji = {};
			var wi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ji,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.SUBREDDIT_LOADED: {
						const {
							key: n,
							listingSort: r
						} = t.payload;
						return r && !Object(Si.b)(n) ? {
							...e,
							[n]: {
								sort: r,
								hasChanged: !1
							}
						} : e
					}
					case On.a:
					case On.q: {
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
			const Ti = {};
			var Di = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ti,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.b:
					case je.f:
					case _e.b:
					case Te.b:
					case W.SUBREDDIT_LOADED:
					case Pe.e:
					case q.PROFILE_POSTS_LOADED:
					case _e.f:
					case we.e:
					case we.h:
					case Se.r:
					case Q.e:
					case q.MORE_POSTS_LOADED:
					case $.i:
					case ni.TOPIC_DATA_LOADED:
					case ni.MORE_POSTS_LOADED: {
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
						} : Object(Dt.a)(e, n)
					}
					case Ne.e:
					case H.c: {
						const {
							key: n,
							tokens: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Re.cc.Posts) ? e : r.posts ? {
							...e,
							[n]: {
								token: r.posts
							}
						} : Object(Dt.a)(e, n)
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return yi(e, t.payload);
					default:
						return e
				}
			};
			const Pi = {};
			var Ai = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ei.c:
						case ei.d: {
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
				Ci = Object(S.c)({
					api: ui,
					correlationIds: pi,
					endMarkers: mi,
					fetchedTokens: Oi,
					ids: Ii,
					listingSort: wi,
					loadMore: Di,
					pageInfo: Ai,
					treatment: ((e, t) => (function() {
						let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zd,
							r = arguments.length > 1 ? arguments[1] : void 0;
						switch (r.type) {
							case H.c:
							case Ne.e: {
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
					}))(Re.cc.Posts, Re.bc.Posts)
				}),
				Ri = Object(S.c)({
					activeKey: sd,
					authorOrder: yd,
					commentOrder: Dd,
					communityOrder: Fd,
					listingOrder: Jd,
					postOrder: Ci
				});
			var Ni = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _e.b: {
						const n = t.payload;
						return ua()(n.announcements) ? e : n.announcements || null
					}
					default:
						return e
				}
			};
			var ki = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _e.b: {
						const n = t.payload;
						return ua()(n.featuredLiveThread) ? e : n.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var xi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _e.b:
						return !0;
					default:
						return e
				}
			};
			var Li = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Ui = Object(S.c)({
					announcements: Ni,
					featured: ki,
					isFrontpageLoaded: xi,
					shouldShowAnnouncements: Li
				}),
				Mi = n("./src/reddit/actions/media.ts");
			const Gi = {},
				Fi = {};
			var Bi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mi.b: {
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
			const qi = {};
			var Vi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mi.e: {
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
				Hi = Object(S.c)({
					currentSlideIndex: Bi,
					isGalleryTileLayout: Vi
				});
			var Wi = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Mi.c:
						return t.payload;
					default:
						return e
				}
			};
			var Qi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mi.d:
							return t.payload;
						default:
							return e
					}
				},
				$i = Object(S.c)({
					isMuted: Wi,
					volume: Qi
				}),
				Ki = n("./src/reddit/actions/meta.ts");
			const zi = {
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
			var Yi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ki.b:
							return t.payload;
						case Ki.a:
							return {
								...e, ...t.payload
							};
						case Ki.e:
							return {
								...e, locale: t.payload
							};
						case Ki.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case Ki.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case Ki.d:
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
				Xi = n("./src/reddit/actions/subredditModeration/constants.ts");
			const Ji = {};
			var Zi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ji,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case F.b:
					case F.f:
					case De.PAGE_LOADED: {
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
					case we.e:
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
					case Xi.kb: {
						const {
							subredditId: n
						} = t.payload;
						return Object(Dt.a)(e, n)
					}
					case Xi.db: {
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
			var eu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case we.b:
					case we.k:
						return null;
					case we.a:
					case we.j:
						return t.payload;
					default:
						return e
				}
			};
			var tu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case we.b:
						case we.k:
							return !0;
						case we.c:
						case we.a:
						case we.l:
						case we.j:
							return !1;
						default:
							return e
					}
				},
				nu = Object(S.c)({
					error: eu,
					pending: tu
				});
			const ru = [];
			var su = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ru,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case we.e: {
							const n = t.payload,
								{
									filteredSubreddits: r
								} = n;
							return r || e
						}
						case we.j: {
							const n = t.payload;
							return [...e, n]
						}
						case we.k:
						case we.a: {
							const n = t.payload;
							return e.filter(e => e !== n)
						}
						default:
							return e
					}
				},
				au = Object(S.c)({
					api: nu,
					names: su
				}),
				ou = Object(S.c)({
					filteredSubreddits: au
				}),
				cu = n("./src/reddit/actions/modMode.ts");
			var du = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cu.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const iu = {};
			var uu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iu,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case L.x: {
						const {
							moreCommentsId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case L.w: {
						const {
							moreCommentsItem: n
						} = t.payload;
						return {
							...e,
							[n.id]: null
						}
					}
					case L.v: {
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
			const lu = {};
			var pu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.x: {
							const {
								moreCommentsId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case L.v:
						case L.w: {
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
				bu = Object(S.c)({
					error: uu,
					pending: pu
				});
			const fu = {};
			var hu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fu,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L.w:
						case F.b:
						case F.f:
							return {
								...e, ...t.payload.moreComments
							};
						default:
							return e
					}
				},
				yu = Object(S.c)({
					api: bu,
					models: hu
				});
			var gu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.b:
					case Se.c:
						return null;
					case Se.a:
						return t.payload;
					default:
						return e
				}
			};
			var mu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.a:
					case Se.c:
						return !0;
					case Se.b:
						return !1;
					default:
						return e
				}
			};
			var vu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Te.b:
						case Se.a:
						case Se.c:
							return null;
						case Se.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				Ou = Object(S.c)({
					error: gu,
					fetched: mu,
					pending: vu
				});
			var Eu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.f:
					case Se.g:
						return null;
					case Se.e:
						return t.payload;
					default:
						return e
				}
			};
			var _u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.e:
					case Se.g:
						return !0;
					case Se.f:
						return !1;
					default:
						return e
				}
			};
			var Iu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.e:
						case Se.g:
							return !1;
						case Se.f:
							return !0;
						default:
							return e
					}
				},
				Su = Object(S.c)({
					error: Eu,
					fetched: _u,
					pending: Iu
				});
			var ju = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.i:
					case Se.j:
						return null;
					case Se.h:
						return t.payload;
					default:
						return e
				}
			};
			var wu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.h:
					case Se.j:
						return !0;
					case Se.i:
						return !1;
					default:
						return e
				}
			};
			var Tu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.h:
						case Se.j:
							return !1;
						case Se.i:
							return !0;
						default:
							return e
					}
				},
				Du = Object(S.c)({
					error: ju,
					fetched: wu,
					pending: Tu
				});
			var Pu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.l:
					case Se.m:
						return null;
					case Se.k:
						return t.payload;
					default:
						return e
				}
			};
			var Au = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.k:
					case Se.m:
						return !0;
					case Se.l:
						return !1;
					default:
						return e
				}
			};
			var Cu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.k:
						case Se.m:
							return !1;
						case Se.l:
							return !0;
						default:
							return e
					}
				},
				Ru = Object(S.c)({
					error: Pu,
					fetched: Au,
					pending: Cu
				});
			var Nu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.o:
					case Se.p:
						return null;
					case Se.n:
						return t.payload;
					default:
						return e
				}
			};
			var ku = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.n:
					case Se.p:
						return !0;
					case Se.o:
						return !1;
					default:
						return e
				}
			};
			var xu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.n:
						case Se.p:
							return !1;
						case Se.o:
							return !0;
						default:
							return e
					}
				},
				Lu = Object(S.c)({
					error: Nu,
					fetched: ku,
					pending: xu
				});
			var Uu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.t:
						return !1;
					case Se.u:
						return !0;
					default:
						return e
				}
			};
			var Mu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.t:
							return !0;
						case Se.u:
							return !1;
						default:
							return e
					}
				},
				Gu = Object(S.c)({
					fetched: Uu,
					pending: Mu
				});
			var Fu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.A:
					case Se.B:
						return null;
					case Se.z:
						return t.payload;
					default:
						return e
				}
			};
			var Bu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.A:
					case Se.z:
						return !1;
					case Se.B:
						return !0;
					default:
						return e
				}
			};
			var qu = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.A:
							return !0;
						case Se.B:
						case Se.z:
							return !1;
						default:
							return e
					}
				},
				Vu = Object(S.c)({
					error: Fu,
					fetched: Bu,
					pending: qu
				});
			var Hu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.w:
					case Se.x:
						return null;
					case Se.v:
						return t.payload;
					default:
						return e
				}
			};
			var Wu = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Se.v:
					case Se.x:
						return !0;
					case Se.w:
						return !1;
					default:
						return e
				}
			};
			var Qu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.v:
						case Se.x:
							return null;
						case Se.w:
							const {
								id: n
							} = t.payload;
							return n;
						default:
							return e
					}
				},
				$u = Object(S.c)({
					error: Hu,
					fetched: Wu,
					pending: Qu
				}),
				Ku = Object(S.c)({
					addSubreddit: Ou,
					create: Su,
					deleteMulti: Du,
					duplicate: Ru,
					edit: Lu,
					forUser: Gu,
					recommendations: Vu,
					removeSubreddit: $u
				}),
				zu = n("./node_modules/lodash/isEqual.js"),
				Yu = n.n(zu),
				Xu = n("./node_modules/lodash/union.js"),
				Ju = n.n(Xu);

			function Zu(e, t, n) {
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
			var el = n("./src/reddit/actions/profile/constants.ts");
			const tl = {};
			var nl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Te.b:
						case Se.r:
						case Se.u:
						case el.h: {
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
								a[t] = Ju()(s, n).sort((e, t) => o[e].displayText.toLowerCase() > o[t].displayText.toLowerCase() ? 1 : -1)
							}
							return Yu()(e, a) ? e : a
						}
						case Se.g:
						case Se.m: {
							const {
								userId: n,
								multireddit: r
							} = t.payload, s = e[n] ? e[n].slice() : [], a = Zu(s, r.url, (e, t) => e > t ? 1 : -1);
							return s.splice(a, 0, r.url), {
								...e,
								[n]: s
							}
						}
						case Se.j: {
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
				rl = n("./src/reddit/actions/subscription/constants.ts"),
				sl = n("./src/reddit/models/Multireddit/index.ts");
			const al = {};
			var ol = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : al,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Te.b:
					case Se.r:
					case Se.u:
					case el.h:
					case H.c: {
						let n = {};
						for (const r in t.payload.multireddits) {
							const s = {
									...t.payload.multireddits[r]
								},
								a = e[r];
							a && !Object(sl.g)(s) && (s.subredditIds = a.subredditIds, s.profileIds = a.profileIds), r in e && Yu()(e[s.url], s) || (n = {
								...n,
								[r]: s
							})
						}
						return ua()(n) ? e : {
							...e,
							...n
						}
					}
					case Se.g:
					case Se.m: {
						const {
							multireddit: n
						} = t.payload;
						return {
							...e,
							[n.url]: n
						}
					}
					case Se.j: {
						const n = t.payload,
							r = {
								...e
							};
						return delete r[n], r
					}
					case Se.p: {
						const n = t.payload;
						return {
							...e,
							[n.url]: n
						}
					}
					case Se.x: {
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
					case rl.d: {
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
					case rl.e: {
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
					case Se.c: {
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
			const cl = {};
			var dl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cl,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.B: {
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
				il = Object(S.c)({
					api: Ku,
					byUserId: nl,
					models: ol,
					recommendations: dl
				}),
				ul = n("./src/reddit/actions/notificationBanner.ts");
			var ll = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ul.b:
							return t.payload.notificationBannerId;
						case ul.a:
							return null;
						default:
							return e
					}
				},
				pl = n("./src/reddit/actions/notificationsInbox/constants.ts");
			var bl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pl.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case pl.e:
					case pl.b:
						return !1;
					default:
						return e
				}
			};
			var fl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pl.e:
							return !0;
						case pl.a:
						case pl.b:
							return !1;
						default:
							return e
					}
				},
				hl = Object(S.c)({
					error: bl,
					pending: fl
				});
			var yl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pl.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var gl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pl.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const ml = [];
			var vl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ml,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pl.b: {
						const n = t.payload && t.payload.nodes;
						return [...e, ...n]
					}
					case pl.f: {
						const n = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== n)
					}
					case pl.d: {
						const n = t.payload && t.payload.id,
							r = t.payload && t.payload.now,
							s = e.findIndex(e => e.id === n);
						return -1 === s ? e : [...e.slice(0, s), {
							...e[s],
							readAt: r
						}, ...e.slice(s + 1)]
					}
					case pl.c: {
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
			var Ol = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pl.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				El = Object(S.c)({
					api: hl,
					earlierDividerIndex: yl,
					notifications: vl,
					pageInfo: Ol,
					markAllAsReadTimestamp: gl
				}),
				_l = n("./src/reddit/actions/nps.ts");
			const Il = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Sl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Il,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _l.c:
							return {
								...Il, pending: !0
							};
						case _l.a:
							return Il;
						case _l.b: {
							const {
								dest: e
							} = t.payload;
							return {
								...Il,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				jl = n("./src/reddit/actions/accountGender/constants.ts"),
				wl = n("./src/reddit/actions/onboarding/constants.ts");
			const Tl = {
				success: !1,
				failure: !1
			};
			var Dl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jl.b:
						return {
							...Tl, success: !0
						};
					case jl.c:
						return {
							...Tl, failure: !0
						};
					case wl.a:
						return {
							...Tl
						};
					default:
						return e
				}
			};
			var Pl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case _e.b:
					case wl.c: {
						const e = t.payload;
						return (null == e ? void 0 : e.interestTopicRecommendations) && !ua()(null === (n = null == e ? void 0 : e.interestTopicRecommendations) || void 0 === n ? void 0 : n.interests) ? e.interestTopicRecommendations : null
					}
					default:
						return e
				}
			};
			var Al = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wl.b:
							return !0;
						default:
							return e
					}
				},
				Cl = Object(S.c)({
					genderUpdateState: Dl,
					interestTopicRecommendationsState: Pl,
					shouldSkipOnboardingState: Al
				});
			const Rl = e => {
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
			const Nl = e => {
					const t = {};
					for (const n of e) t[n.experimentName.toLowerCase()] = Rl(n);
					return t
				},
				kl = {};
			var xl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case no.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, n = e ? e.experiments : [];
						return Nl(n)
					}
					default:
						return e
				}
			};
			var Ll = Object(S.c)({
					byName: xl,
					canonicalUrl: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case no.a: {
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
				Ul = Object(S.c)({
					experiments: Ll
				}),
				Ml = n("./node_modules/history/esm/history.js"),
				Gl = n("./src/reddit/constants/history.ts");
			n("./src/reddit/helpers/isRobotIndexableMeta.ts");
			const Fl = {
					allowNavigationCallback: null,
					currentPage: null,
					lastPage: null,
					referrers: {},
					sessionReferrer: null,
					metas: {}
				},
				Bl = (e, t) => ({
					key: e,
					locationState: {},
					meta: null,
					queryParams: {},
					routeMatch: null,
					status: 404,
					url: t,
					urlParams: {}
				}),
				ql = (e, t, n, r) => {
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
			var Vl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fl,
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
						const c = Object(Ml.e)(a),
							d = s ? ql(o, c, s, a) : Bl(o, c);
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
					case _e.b:
					case u.a:
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
									[Gl.b.FeedCorrelationId]: n
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const Hl = {};
			var Wl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hl,
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
			const Ql = {};
			var $l = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ql,
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
				Kl = Object(S.c)({
					error: Wl,
					pending: $l
				}),
				zl = Object(S.c)({
					voting: Kl
				}),
				Yl = n("./node_modules/lodash/mapValues.js"),
				Xl = n.n(Yl),
				Jl = n("./src/reddit/reducers/posts/models/helpers.ts"),
				Zl = n("./src/reddit/actions/economics/predictions/constants.ts");
			const ep = e => {
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
			var tp = e => {
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
							type: _s.a.GA,
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
						type: _s.a.GA,
						isPrediction: d,
						userSelection: f
					}
				},
				np = n("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				rp = n("./src/reddit/models/Prediction/index.ts");

			function sp(e, t) {
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
			const ap = {};
			var op = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ap,
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
					case _e.b:
					case W.SUBREDDIT_LOADED:
					case $.i:
					case _e.f:
					case F.b:
					case F.f:
					case Zl.o: {
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
						const r = Xl()(t.payload.posts, Object(Jl.i)([Jl.p])),
							s = {};
						return Object.keys(r).forEach(e => {
							var t, n;
							const a = r[e];
							if (a.pollData && (s[e] = tp(a)), null === (n = null === (t = a.predictionTournament) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.length) {
								const {
									tournamentId: e,
									predictions: t
								} = a.predictionTournament;
								t.forEach(t => {
									s[t.id] = sp(t, {
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
					case Zl.q:
					case Zl.p: {
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
					case Zl.b: {
						const {
							postId: n,
							prediction: r
						} = t.payload;
						return e[n] && Object(rp.c)(e[n]) ? {
							...e,
							[n]: {
								...e[n],
								...Object(np.b)(r)
							}
						} : e
					}
					default:
						return e
				}
			};
			const cp = {};
			var dp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.k: {
						const {
							[_s.b.ByVoters]: n, pollId: r
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
					case _e.b:
					case W.SUBREDDIT_LOADED:
					case $.i:
					case _e.f:
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
										[_s.b.ByVoters]: s,
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
							const s = ep(r[t].pollData);
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
			const ip = {};
			var up = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ip,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.k: {
							const {
								[_s.b.ByVotingPower]: n, pollId: r
							} = t.payload.pollResults;
							return {
								...e,
								[r]: n
							}
						}
						case _e.b:
						case W.SUBREDDIT_LOADED:
						case $.i:
						case _e.f:
						case F.b:
						case F.f: {
							const {
								governance: n
							} = t.payload;
							if (n) {
								const t = Object.keys(n).reduce((e, t) => {
									const r = n[t],
										{
											[_s.b.ByVotingPower]: s,
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
				lp = Object(S.c)({
					byVoters: dp,
					byVotingPower: up
				});
			const pp = {};
			var bp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pp,
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
				fp = Object(S.c)({
					api: zl,
					models: op,
					results: lp,
					rewards: bp
				});
			const hp = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var yp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rn.i:
					case Rn.j:
						return {
							...e, reorderError: null
						};
					case Rn.h:
						return {
							...e, reorderError: t.payload
						};
					case Rn.l:
					case Rn.m:
						return {
							...e, updateDescriptionError: null
						};
					case Rn.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Rn.p:
					case Rn.q:
						return {
							...e, updateLayoutError: null
						};
					case Rn.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const gp = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var mp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Rn.i:
							return {
								...e, reorderPending: !0
							};
						case Rn.h:
						case Rn.j:
							return {
								...e, reorderPending: !1
							};
						case Rn.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Rn.k:
						case Rn.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Rn.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Rn.o:
						case Rn.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				vp = Object(S.c)({
					error: yp,
					pending: mp
				}),
				Op = n("./src/reddit/helpers/path/index.ts");
			const Ep = {},
				_p = e => {
					const {
						protocol: t,
						domain: n
					} = e;
					return e => {
						const r = Object(Op.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${n}${r}`
						}
					}
				};
			var Ip = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ep,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.b:
					case je.f:
					case De.PAGE_LOADED:
					case we.e:
					case we.h:
					case B.b:
					case B.e:
					case Pe.e:
					case Pe.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case _e.b:
					case Te.b:
					case W.SUBREDDIT_LOADED:
					case F.b:
					case F.f:
					case Ei.j:
					case Se.r:
					case _e.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Ne.e:
					case Ae.b:
					case H.c:
					case Rn.f: {
						const {
							collections: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						let s = n;
						if (r) {
							const e = _p(r);
							s = Xl()(n, e)
						}
						return {
							...e,
							...s
						}
					}
					case Rn.d: {
						const {
							collection: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						const s = n.id;
						let a = n;
						if (r) {
							a = _p(r)(n)
						}
						return {
							...e,
							[s]: a
						}
					}
					case Rn.g: {
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
					case Rn.a: {
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
					case Rn.e: {
						const {
							collectionId: n
						} = t.payload, r = {
							...e
						};
						return delete r[n], r
					}
					case Rn.s: {
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
					case Rn.j: {
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
					case Rn.m: {
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
					case Rn.q: {
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
			const Sp = {};
			var jp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case De.PAGE_LOADED:
						case Rn.f: {
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
						case Rn.d: {
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
						case Rn.e: {
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
				wp = Object(S.c)({
					models: Ip,
					subredditToIds: jp,
					api: vp
				}),
				Tp = n("./src/reddit/actions/postFlair.ts"),
				Dp = n("./src/reddit/models/Flair/index.ts");
			const Pp = {},
				Ap = {
					displaySettings: {
						isEnabled: !1,
						position: Dp.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				Cp = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					return 0 === n.length ? e : n.reduce((e, n) => (e[n] = {
						...Ap,
						...e[n],
						...t[n]
					}, e), {
						...e
					})
				};
			var Rp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.b:
						case je.f:
						case De.PAGE_LOADED:
						case _e.f:
						case we.e:
						case we.h:
						case Se.r:
						case ti.b:
						case F.b:
						case F.f:
						case _e.b:
						case Te.b:
						case H.c:
						case W.SUBREDDIT_LOADED:
						case B.b:
						case B.e:
						case V.c:
						case V.i:
						case V.e:
						case V.g:
						case Q.e:
						case Ae.b:
						case Ae.b:
						case Pe.b:
						case Pe.e:
						case q.MORE_POSTS_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Ne.e:
						case Ne.e:
						case $.i:
							return Cp(e, t.payload.postFlair);
						case Tp.c: {
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
						case Tp.a: {
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
						case Tp.f: {
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
						case Tp.b: {
							const {
								subredditId: n,
								templateId: r
							} = t.payload, s = e[n], {
								templates: a,
								templateIds: o
							} = s, c = Tr()(a, r), d = o.filter(e => e !== r);
							return {
								...e,
								[n]: {
									...s,
									templates: c,
									templateIds: d
								}
							}
						}
						case Tp.e:
						case Tp.d: {
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
							return Cp(e, n.postFlair)
						}
						default:
							return e
					}
				},
				Np = n("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const kp = {
				pending: !1,
				items: {}
			};
			var xp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Np.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Np.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			var Lp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ei.c:
							return t.payload;
						default:
							return e
					}
				},
				Up = n("./src/reddit/actions/embedAndImage.ts");
			const Mp = {};
			var Gp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Up.b: {
							const {
								postId: n
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: !1
							} : e
						}
						case Up.a: {
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
				Fp = Object(S.c)({
					loadable: Gp
				});
			const Bp = {};
			var qp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ei.d: {
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
			var Vp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ei.e: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Hp = [];
			var Wp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ei.n:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case Ei.b:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case Ei.f:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const Qp = {};
			var $p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case we.e:
					case we.h:
					case _e.b:
					case W.SUBREDDIT_LOADED:
					case _e.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Ne.e:
					case H.c:
						return x()({
							...e
						}, t.payload.postInstances, (e, t) => {
							if (e) return e.concat(t)
						});
					default:
						return e
				}
			};
			var Kp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ei.a:
							return t.payload;
						default:
							return e
					}
				},
				zp = n("./src/reddit/actions/isTrackingCrossposts.ts");
			const Yp = {};
			var Xp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case zp.a: {
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
			const Jp = {};
			var Zp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jp,
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
						case _e.b:
						case W.SUBREDDIT_LOADED:
						case $.i:
						case _e.f:
						case F.b:
						case F.f:
						case Zl.o: {
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
				eb = n("./src/reddit/actions/bulkActions/constants.ts"),
				tb = n("./src/reddit/actions/constants.ts"),
				nb = n("./src/reddit/actions/flairManagement/constants.ts"),
				rb = n("./src/reddit/actions/googleQASchema/constants.ts"),
				sb = n("./src/reddit/actions/imageOCRAltText/constants.ts"),
				ab = n("./src/reddit/actions/subredditTopContent.ts"),
				ob = n("./src/reddit/helpers/isPost.ts"),
				cb = n("./node_modules/lodash/pickBy.js"),
				db = n.n(cb);

			function ib(e, t) {
				const n = db()(t, (function(t) {
					let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return !e[n] || !Yu()(e[n], t)
				}));
				return Object.keys(n).length > 0 ? {
					...e,
					...n
				} : e
			}
			var ub = n("./src/reddit/models/Gold/Gild/index.tsx"),
				lb = n("./src/reddit/models/Media/index.ts"),
				pb = n("./src/reddit/models/ModQueue/index.ts"),
				bb = n("./src/reddit/models/Post/index.ts"),
				fb = n("./src/reddit/models/Vote/index.ts"),
				hb = n("./src/reddit/actions/subredditDuplicates.ts");
			const yb = {};
			var gb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b:
						if (Cr(t) === (Re.Nb.COMMENTS || Re.Nb.DUPLICATES)) {
							const n = Rr(t),
								r = Nr(t);
							if (n && n.instanceId && r && r.partialPostId) {
								const t = n.instanceId,
									s = Object(bb.u)(r.partialPostId);
								if (e[s] && e[t]) return {
									...e,
									[s]: Object(Jl.c)(e[s], e[t])
								}
							}
						}
						return e;
					case F.b:
					case F.f: {
						const n = Object(Jl.h)(t.payload.meta);
						return {
							...e,
							...Xl()(t.payload.posts, Object(Jl.i)([n, Jl.d, Jl.n, Jl.o, Jl.p, Object(Jl.a)(e), Object(Jl.b)(e), Object(Jl.k)(e), Object(Jl.l)(e), Object(Jl.j)(e)]))
						}
					}
					case Ei.j:
						return ib(e, t.payload);
					case hb.a:
						return ib(e, t.payload.posts);
					case je.b:
					case je.f:
					case De.PAGE_LOADED:
					case ai.c:
					case oi.b:
					case we.e:
					case we.h:
					case B.b:
					case B.e:
					case Pe.e:
					case Pe.b:
					case q.PROFILE_POSTS_LOADED:
					case q.MORE_POSTS_LOADED:
					case W.SUBREDDIT_LOADED:
					case _e.b:
					case Te.b:
					case ti.b:
					case Se.r:
					case _e.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case ci.j:
					case $.i:
					case Ae.b:
					case ni.TOPIC_DATA_LOADED:
					case ni.MORE_POSTS_LOADED:
					case ei.c:
					case ei.d:
					case Zl.o: {
						const n = Object(Jl.h)(t.payload.meta);
						return {
							...e,
							...Xl()(t.payload.posts, Object(Jl.i)([n, Jl.d, Jl.n, Jl.o, Jl.p, Object(Jl.m)(e), Object(Jl.k)(e), Object(Jl.j)(e)]))
						}
					}
					case ci.r: {
						if (!t.payload || !t.payload.length) return e;
						const n = {};
						for (const r of t.payload) {
							const t = r,
								s = Object(Jl.h)(t.meta);
							Object.assign(n, Xl()(t.posts, Object(Jl.i)([s, Jl.d, Jl.n, Jl.o, Object(Jl.m)(e), Object(Jl.k)(e), Object(Jl.j)(e)])))
						}
						return {
							...e,
							...n
						}
					}
					case ti.b: {
						const n = Object(Jl.h)(t.payload.meta),
							r = e[t.payload.postId];
						return {
							...e,
							...Xl()(t.payload.posts, Object(Jl.i)([n, Jl.d, Jl.n, Jl.o, Object(Jl.m)(e), Object(Jl.k)(e), Object(Jl.j)(e)])),
							[t.payload.postId]: {
								...r,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ee.e:
					case Ne.e:
					case H.c: {
						const n = Object(Jl.h)(t.payload.meta),
							r = Xl()(t.payload.posts, Object(Jl.i)([n, Jl.n, Jl.d, Jl.o, Object(Jl.j)(e)]));
						return x()({
							...e
						}, r, (e, t) => ({
							...t,
							...e
						}))
					}
					case Ei.k: {
						const n = t.payload;
						return x()({
							...e
						}, n, (e, t) => ({
							...e,
							...t
						}))
					}
					case tb.a: {
						const {
							id: n,
							vote: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: Object(fb.c)(s, r)
						} : e
					}
					case U.b:
					case L.K: {
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
					case Ei.h: {
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
					case Ei.i: {
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
					case L.B: {
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
							...n.reduce((e, t) => (e[t.post.id] = Object(Jl.i)([Jl.n])(Object(Vr.f)(t.post)), e), {})
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
								...Object(ub.a)(o, r, s),
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
							[r]: Object(ub.b)(s, n)
						} : e
					}
					case Xi.r: {
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
							...Xl()(r, Object(Jl.i)([Jl.n, Jl.o]))
						}
					}
					case eb.b:
					case G.s: {
						const {
							operation: n,
							ids: r,
							username: s,
							options: a
						} = t.payload, o = r.filter(e => Object(ob.a)(e)), c = Object(pb.d)(e, n, o, s, a);
						return x()({
							...e
						}, c, (e, t) => ({
							...e,
							...t
						}))
					}
					case Rn.t: {
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
					case Rn.e: {
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
					case Rn.g: {
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
					case ei.f: {
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
					case ei.a: {
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
					case Ho.g: {
						const n = t.payload.subredditTopContent;
						return n && n.posts && Object.keys(n.posts) ? {
							...Xl()(n.posts, Object(Jl.i)([Jl.n, Jl.o])),
							...e
						} : e
					}
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case ab.b:
						return {
							...Xl()(t.payload.posts, Object(Jl.i)([Jl.n, Jl.o])), ...e
						};
					case Ei.m: {
						const {
							postId: n,
							richtextContent: r
						} = t.payload, s = e[n];
						return s && s.media && Object(lb.K)(s.media) ? {
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
					case nb.a: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case nb.b: {
						const n = t.payload;
						return Object(Dt.a)(e, n)
					}
					case y.o: {
						const n = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...n
						}
					}
					case sb.b: {
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
					case Zl.t: {
						const {
							tournamentPostId: n,
							predictionId: r,
							selectedOptionId: s
						} = t.payload;
						if (!e[r] && !e[n]) return e;
						const a = {
							...e
						};
						return a[r] && (a[r] = Object(Jl.e)({
							post: e[r],
							selectedOptionId: s
						})), a[n] && (a[n] = Object(Jl.f)({
							post: e[n],
							selectedOptionId: s,
							predictionId: r
						})), a
					}
					case Zl.b: {
						const {
							postId: n,
							prediction: r
						} = t.payload;
						return {
							...e,
							[n]: Object(Jl.q)(e[n], Object(np.a)(r))
						}
					}
					case sb.a:
						return {
							...e
						};
					case rb.b: {
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
					case rb.a:
						return {
							...e
						};
					case ai.a: {
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
			var mb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ei.g:
							return t.payload;
						default:
							return e
					}
				},
				vb = n("./src/reddit/actions/postLevelCrowdControl.ts");
			const Ob = {};
			var Eb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ob,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vb.a: {
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
			const _b = [];
			var Ib = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _b,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ei.l: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case _e.b:
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
				Sb = n("./node_modules/uuid/v4.js"),
				jb = n.n(Sb);
			const wb = jb()();
			var Tb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.PAGE_LOADED:
					case pr.h:
					case pr.a:
					case pr.m:
					case pr.f:
						return jb()();
					default:
						return e
				}
			};
			var Db = function() {
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
			var Pb = function() {
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
			var Ab = function() {
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
				Cb = Object(S.c)({
					creationToken: Tb,
					error: Db,
					pending: Pb,
					pendingUpdate: Ab
				});
			const Rb = {};
			var Nb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pr.c: {
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
			const kb = {
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

			function xb(e) {
				const t = {};
				return function() {
					let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case kb[e].POSTS_LOADED:
						case pr.f: {
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
						case pr.i:
						case pr.l: {
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
						case pr.h: {
							const {
								subredditId: e
							} = r.payload;
							return Object.keys(n).reduce((t, r) => (r !== e && (t[r] = n[r]), t), {})
						}
						case kb[e].MUTATION_SUCCEEDED: {
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
			const Lb = {};

			function Ub(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lb,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case kb[e].POSTS_LOADED:
						case pr.f: {
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
						case pr.h: {
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
			var Mb = n("./node_modules/lodash/uniq.js"),
				Gb = n.n(Mb);
			const Fb = {};

			function Bb(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fb,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case kb[e].POSTS_LOADED:
						case pr.f: {
							const {
								subredditInfoById: r
							} = n.payload, s = r.id, a = r.scheduledPosts[kb[e].postIdsKey];
							return {
								...t,
								[s]: Gb()([...t[s] || [], ...a])
							}
						}
						case pr.i:
						case pr.l: {
							const {
								subredditId: e,
								scheduledPostId: r
							} = n.payload, s = t[e] || [];
							return {
								...t,
								[e]: s.filter(e => e !== r)
							}
						}
						case pr.h: {
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
			var qb = Object(S.c)({
					models: xb("recurringPosts"),
					pageInfo: Ub("recurringPosts"),
					postOrder: Bb("recurringPosts"),
					editModal: Nb
				}),
				Vb = Object(S.c)({
					models: xb("standalonePosts"),
					pageInfo: Ub("standalonePosts"),
					postOrder: Bb("standalonePosts")
				}),
				Hb = Object(S.c)({
					api: Cb,
					standalonePosts: Vb,
					recurringPosts: qb
				});
			var Wb = function() {
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
			var Qb = function() {
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
				$b = Object(S.c)({
					error: Wb,
					pending: Qb
				});
			const Kb = [];
			var zb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kb,
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
							return Kb;
						default:
							return e
					}
				},
				Yb = Object(S.c)({
					api: $b,
					list: zb
				}),
				Xb = n("./src/reddit/actions/video.ts");
			const Jb = {};
			var Zb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xb.e: {
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
			const ef = {};
			var tf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xb.a: {
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
			const nf = {};
			var rf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xb.b: {
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
			const sf = {};
			var af = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xb.c: {
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
			const of = {
				mutedInFeed: !0
			};
			var cf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : of ,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xb.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var df = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xb.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Xb.d:
						return null;
					default:
						return e
				}
			};
			const uf = {};
			var lf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xb.o: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case Xb.e: {
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
			const pf = {};
			var bf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xb.h: {
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
					case Xb.f: {
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
			const ff = {};
			var hf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ff,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xb.j: {
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
			const yf = {};
			var gf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xb.p: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case Xb.g: {
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
					case Xb.i: {
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
			const Of = {};
			var Ef = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Of,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xb.m: {
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
				_f = n("./src/reddit/constants/video.ts");
			const If = {};
			var Sf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : If,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xb.n: {
							const {
								postId: n,
								time: r
							} = t.payload;
							return e[n] && Math.abs(Math.floor(r.currentTime) - Math.floor(e[n].currentTime)) < _f.m ? e : {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				jf = Object(S.c)({
					autoPlayed: Zb,
					buffering: tf,
					consumed: rf,
					continuousViewStartedAt: af,
					feed: cf,
					fullscreen: df,
					loadable: lf,
					loadTimes: bf,
					metadata: hf,
					paused: gf,
					playing: vf,
					started: Ef,
					time: Sf
				}),
				wf = Object(S.c)({
					embedAndImage: Fp,
					expanded: qp,
					focus: Vp,
					followed: Wp,
					instances: $p,
					isAnimatingUpvote: Kp,
					isTrackingCrossposts: Xp,
					metaMap: Zp,
					models: gb,
					modToMemberShare: mb,
					crowdControl: Lp,
					postLevelCrowdControl: Eb,
					recent: Ib,
					scheduledPosts: Hb,
					topAwarded: Yb,
					video: jf,
					carousel: xp
				}),
				Tf = n("./src/lib/reducers/addAuthentication/index.ts");
			const Df = {};
			var Pf = Object(Tf.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Df,
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
						case L.G: {
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
				}), Df),
				Af = Object(S.c)({
					data: Pf
				});
			const Cf = {};
			var Rf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cf,
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
			const Nf = {};
			var kf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nf,
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
				xf = Object(S.c)({
					error: Rf,
					pending: kf
				});
			const Lf = {};
			var Uf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lf,
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
			const Mf = {};
			var Gf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mf,
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
				Ff = Object(S.c)({
					error: Uf,
					pending: Gf
				}),
				Bf = Object(S.c)({
					fetch: xf,
					purchase: Ff
				});
			var qf = function() {
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
			const Vf = {};
			var Hf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vf,
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
				Wf = Object(S.c)({
					api: Bf,
					currentlyPurchasing: qf,
					models: Hf
				});
			const Qf = {};
			var $f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qf,
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
			const Kf = {};
			var zf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kf,
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
				Yf = Object(S.c)({
					error: $f,
					pending: zf
				});
			const Xf = {};
			var Jf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xf,
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
				Zf = n("./src/reddit/actions/comment/list.ts");
			const eh = {};
			var th = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zf.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Zf.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? Tr()(e, n) : e
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
			const sh = {};
			var ah = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sh,
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
							} : Object(Dt.a)(e, n)
						}
						default:
							return e
					}
				},
				oh = Object(S.c)({
					api: Yf,
					endMarkers: th,
					fetchedTokens: rh,
					commentIds: Jf,
					loadMore: ah
				}),
				ch = n("./src/reddit/actions/pages/profileModSettings.ts");
			var dh = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ch.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				ih = Object(S.c)({
					pending: dh
				}),
				uh = Object(S.c)({
					api: ih
				});
			const lh = {};
			var ph = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return t.type, e
			};
			const bh = {};
			var fh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bh,
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
			const hh = {};
			var yh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hh,
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
				gh = Object(S.c)({
					error: fh,
					pending: yh
				});
			const mh = {};
			var vh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mh,
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
			const Oh = {};
			var Eh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oh,
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
							} : Oh
						}
						default:
							return e
					}
				},
				_h = Object(S.c)({
					api: gh,
					ids: vh,
					pageInfo: Eh
				}),
				Ih = n("./src/reddit/constants/posts.ts");
			const Sh = {};
			var jh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.c:
						case Ne.e:
							return {
								...e, ...t.payload.profileAboutInfo
							};
						case el.k: {
							const n = t.payload;
							return n.profile ? {
								...e,
								[n.profile.id]: n.about
							} : e
						}
						case rl.h: {
							const {
								identifiers: n,
								userIsSubscriber: r
							} = t.payload, s = n.filter(e => e.type === Ih.a.PROFILE);
							return s.length ? s.reduce((e, t) => (e[t.id] = {
								...e[t.id],
								userIsSubscriber: r
							}, e), {
								...e
							}) : e
						}
						case On.n: {
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
				wh = n("./src/reddit/models/Subreddit/index.ts");
			const Th = {};
			var Dh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Th,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.b:
					case je.f:
					case _e.f:
					case F.b:
					case F.f:
					case _e.b:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case Pe.b:
					case Pe.e:
					case q.PROFILE_POSTS_LOADED:
					case Ae.b:
					case we.e:
					case we.h:
					case Se.u:
					case el.h:
					case ti.b:
					case Ne.e:
					case $.i:
					case el.m:
					case Q.b:
					case Q.e:
					case H.c:
					case De.PAGE_LOADED:
					case Un.e:
					case Dr.PAGE_LOADED:
					case W.SUBREDDIT_LOADED:
					case Te.b:
					case "RECOMMENDED_POSTS_LOADED":
					case rl.c:
						return Object(N.merge)(e, t.payload.profiles);
					case Ne.h: {
						const {
							typeaheadSuggestions: n
						} = t.payload, r = Object.values(n).reduce((e, t) => Object(wh.i)(t) ? {
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
					case el.l:
					case el.k: {
						const {
							profile: n
						} = t.payload;
						return n ? Object(N.merge)(e, {
							[n.id]: n
						}) : e
					}
					case On.n: {
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
					case On.l:
					case On.k: {
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
			const Ph = {};
			var Ah = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ph,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case el.c:
						case el.f: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[(n || "").toLowerCase()]: !0
							}
						}
						case el.a:
						case el.b:
						case el.d:
						case el.e: {
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
				Ch = Object(S.c)({
					pending: Ah
				});
			const Rh = {};
			var Nh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case el.b: {
						const {
							profileName: n,
							data: r
						} = t.payload, s = r.map(e => e.id);
						return {
							...e,
							[(n || "").toLowerCase()]: s
						}
					}
					case el.e:
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
			const kh = {};
			var xh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case el.e: {
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
				Lh = Object(S.c)({
					api: Ch,
					models: Nh,
					pageInfo: xh
				});
			const Uh = {};
			var Mh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case el.i: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case el.g:
						case el.h: {
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
				Gh = Object(S.c)({
					pending: Mh
				});
			const Fh = {};
			var Bh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case el.h: {
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
				qh = Object(S.c)({
					api: Gh,
					pageInfo: Bh
				}),
				Vh = n("./src/reddit/actions/pinnedPost.ts");
			const Hh = {};
			var Wh = Object(Tf.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Vh.a: {
						const {
							pinned: n,
							profileId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case Vh.d: {
						const {
							postId: n,
							profileId: r
						} = t.payload, s = e[r] || [];
						return {
							...e,
							[r]: [...s, n].slice(-Re.cb)
						}
					}
					case Vh.g: {
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
			}), Hh);
			const Qh = {};
			var $h = Object(Tf.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Vh.a: {
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
			}), Qh);
			const Kh = {};
			var zh = Object(Tf.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Vh.c:
						case Vh.f: {
							const {
								postId: n,
								profileId: r
							} = t.payload, s = e[r] || [];
							return {
								...e,
								[r]: [...s, n]
							}
						}
						case Vh.b:
						case Vh.e:
						case Vh.d:
						case Vh.g: {
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
				}), Kh),
				Yh = Object(S.c)({
					data: Wh,
					initialData: $h,
					pending: zh
				}),
				Xh = n("./src/reddit/actions/trophyCase.ts");
			const Jh = {};
			var Zh, ey, ty = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xh.a: {
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
				ny = Object(S.c)({
					about: jh,
					models: Dh,
					moderated: Lh,
					multireddits: qh,
					pinnedPosts: Yh,
					trophyCases: ty
				});
			n("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Zh || (Zh = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(ey || (ey = {}));
			var ry, sy, ay;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(ry || (ry = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(sy || (sy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(ay || (ay = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(ry || (ry = {}));
			Object(Ce.a)("PROMO__SHOW_PROMO"), Object(Ce.a)("PROMO__HIDE_PROMO");
			const oy = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var cy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oy,
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
				dy = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const iy = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: dy.d,
					viewer_streams_refresh: dy.c,
					viewer_streams_refresh_slop: dy.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var uy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dy.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case dy.x: {
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
					case dy.G:
						return {
							...e, isPending: !0
						};
					case dy.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case dy.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var ly = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dy.L:
						return {
							...e, [dy.b]: t.payload.error
						};
					case dy.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case dy.z: {
						const {
							[dy.b]: t, ...n
						} = e;
						return n
					}
					case dy.y: {
						const {
							[t.payload.model.post.id]: n, ...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const py = (e, t, n, r) => ({
				...e,
				[t]: {
					...e[t],
					isPending: n,
					...r && {
						utcTimeStamp: r
					}
				}
			});
			var by = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dy.N:
						return py(e, t.payload, !0);
					case dy.O:
						return py(e, dy.b, !0);
					case dy.y:
						return py(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case dy.z:
						return py(e, dy.b, !1, t.payload.utcTimeStamp);
					case dy.M:
						return py(e, t.payload.streamId, !1);
					case dy.L:
						return py(e, dy.b, !1);
					default:
						return e
				}
			};
			const fy = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var hy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dy.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case dy.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case dy.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				yy = Object(S.c)({
					config: uy,
					error: ly,
					pending: by,
					recommendedViewerSubreddits: hy
				});
			const gy = {};
			var my = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dy.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case dy.F:
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
			const vy = {
				cursor: dy.W,
				timestamps: {},
				visitOrder: []
			};
			var Oy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dy.P:
						return vy;
					case dy.X: {
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
						return Ey(e, t.payload.id);
					case dy.E:
						return Ey(e, t.payload);
					case Ei.k: {
						const n = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return _y(e, n)
					}
					case dy.V: {
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
			const Ey = (e, t) => {
					const n = e.visitOrder.indexOf(t);
					if (-1 === n) return e;
					const r = n > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: r
					}
				},
				_y = (e, t) => {
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
				Iy = {
					ended: [],
					removed: []
				};

			function Sy(e) {
				return [...new Set(e)]
			}
			var jy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Iy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dy.t:
						return {
							...e, ended: Sy(e.ended.concat(t.payload))
						};
					case dy.u:
						return {
							...e, removed: Sy(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const wy = {};
			var Ty = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dy.z:
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
			const Dy = {},
				Py = (e, t) => {
					const n = Object.keys(e).reduce((t, n) => ({
						...t,
						[n]: {
							...e[n],
							rank: dy.m
						}
					}), {});
					return t.reduce((e, t, n) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: dy.l - n
						}
					}), n)
				},
				Ay = (e, t) => {
					const n = t.post.id,
						r = e[n] ? e[n].rank : dy.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: r
						}
					}
				};
			var Cy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dy.y:
						return Ay(e, t.payload.model);
					case dy.z:
						return Py(e, t.payload.models);
					case dy.D: {
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
			const Ry = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var Ny = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ry,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dy.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case dy.A:
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
			const ky = {
				reported: []
			};
			var xy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ky,
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
			const Ly = {
				isIntroFinished: !1
			};
			var Uy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ly,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dy.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const My = {
				reportedStreams: []
			};
			var Gy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : My,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dy.C:
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
				Fy = Object(S.c)({
					api: yy,
					history: Oy,
					hlsStreams: jy,
					listings: Ty,
					models: Cy,
					preloads: Ny,
					reports: xy,
					theaterSettings: Uy,
					userSettings: Gy,
					automuteLevels: my
				}),
				By = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				qy = n("./src/reddit/actions/session.ts");
			const Vy = [],
				Hy = (e, t) => Yu()(e, t) ? e : t;
			var Wy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qy.c:
					case qy.d:
						return Vy;
					case By.d:
						return Hy(e, t.subreddits);
					case By.f: {
						const {
							payload: n
						} = t, r = [n, ...e];
						return Array.from(new Set(r)).slice(0, By.c)
					}
					case By.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, By.c)
					}
					default:
						return e
				}
			};
			const Qy = {};
			var $y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qy,
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
				Ky = n("./src/reddit/actions/pages/report/constants.ts");
			var zy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ky.a:
						return t.payload;
					default:
						return e
				}
			};
			var Yy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ky.b:
						return t.payload;
					case Ky.c:
					case Ky.d:
						return !1;
					default:
						return e
				}
			};
			var Xy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ky.d:
						return !0;
					case Ky.c:
					case Ky.b:
						return !1;
					default:
						return e
				}
			};
			var Jy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ky.c:
							return !0;
						case Ky.b:
						case Ky.d:
							return !1;
						default:
							return e
					}
				},
				Zy = Object(S.c)({
					error: Yy,
					pending: Xy,
					success: Jy
				}),
				eg = n("./src/reddit/actions/reportPageRules/constants.ts");
			const tg = [];
			var ng = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case eg.a:
							return t.payload;
						default:
							return e
					}
				},
				rg = Object(S.c)({
					reportPageApi: Zy,
					reportPageRules: ng,
					initialReason: zy
				}),
				sg = n("./src/reddit/actions/reportRules.ts");
			const ag = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var og = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ag,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case sg.b:
						return {
							...e, sitewideRules: t.payload
						};
					case sg.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Ce.a)("REQUEST_HOST_SET");
			var cg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			const dg = "RUN_TIME_ENV_VARS__IS_STAGING",
				ig = (Object(Ce.a)(dg), {
					staging: !1,
					startTimeInMillis: (new Date).getTime()
				});
			var ug = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ig,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dg:
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				lg = n("./src/reddit/components/SearchDropdown/index.tsx");
			var pg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.g:
						return !0;
					case Sc.b: {
						const {
							event: n
						} = t.payload, r = n.target, s = document.getElementById(lg.b), a = document.getElementById(lg.a);
						return !(!r || !((null == s ? void 0 : s.contains(r)) || (null == a ? void 0 : a.contains(r)))) && e
					}
					case Ne.f:
					case Sc.a:
					case Sc.c:
						return !1;
					default:
						return e
				}
			};
			var bg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.c:
					case Ne.i: {
						const {
							searchQuery: e
						} = t.payload;
						return e || ""
					}
					default:
						return e
				}
			};
			const fg = Object.create(null);
			var hg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Ne.h: {
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
				yg = n("./src/reddit/models/Search/index.ts");
			const gg = {};
			var mg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.h: {
							const {
								typeaheadSuggestions: n
							} = t.payload, r = {};
							return Object.keys(n).forEach(e => {
								const t = n[e];
								return r[e] = Object(yg.e)(t)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				vg = Object(S.c)({
					idsByQuery: hg,
					models: mg
				});
			const Og = {};
			var Eg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Og,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.c: {
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
				_g = Object(S.c)({
					isDropdownOpen: pg,
					isSubredditSearchEnabled: function() {
						let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case Ne.a:
								return !1;
							case Ne.b:
								return !0;
							default:
								return e
						}
					},
					searchQuery: bg,
					typeahead: vg,
					viewTreatment: Eg
				}),
				Ig = n("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Sg = {};
			var jg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.c: {
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
						if (d === Ig.c.Trending) {
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
			const wg = {};
			var Tg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case H.c: {
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
			const Dg = {};
			var Pg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case H.c: {
							const {
								key: n,
								searchDiscoveryUnitOrder: r
							} = t.payload;
							return r ? {
								...e,
								[n]: r
							} : Dg
						}
						default:
							return e
					}
				},
				Ag = Object(S.c)({
					headerContent: jg,
					models: Tg,
					order: Pg
				}),
				Cg = n("./src/reddit/actions/searchQueryId/index.tsx");
			const Rg = {};
			Object(Ce.a)("SEO__CRAWLER_RECEIVED");
			var Ng = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				kg = n("./src/reddit/actions/seo/linksModule.ts");
			const xg = {};
			var Lg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kg.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case kg.c:
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
				Ug = n("./src/reddit/actions/seo/topicLinks.ts");
			const Mg = {};
			var Gg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ug.a:
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
				Fg = Object(S.c)({
					crawler: Ng,
					linksModule: Lg,
					topicLinks: Gg
				}),
				Bg = n("./src/reddit/actions/shortcuts/constants.ts");
			var qg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bg.a:
						return t.payload;
					case u.b:
						return null;
					default:
						return e
				}
			};
			var Vg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bg.b:
							return t.payload || null;
						default:
							return e
					}
				},
				Hg = n("./src/reddit/constants/shortcuts.ts"),
				Wg = n("./src/reddit/helpers/history/index.ts");
			const Qg = Hg.d.Global,
				$g = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(Wg.b)(Gl.b.IsOverlay) ? Hg.d.Lightbox : Hg.d.CommentPage;
						case "rpan":
							return Object(Wg.b)(Gl.b.IsOverlay) ? Hg.d.Lightbox : Qg;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return Hg.d.Listing;
						case "modQueuePages":
							return Hg.d.Modqueue;
						default:
							return Qg
					}
				};
			var Kg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.b:
							const n = t.payload;
							if (n.routeMatch) {
								const e = n.routeMatch.route.meta;
								return $g(e)
							}
							return Qg;
						default:
							return e
					}
				},
				zg = Object(S.c)({
					activeCommentId: qg,
					activePostId: Vg,
					namespace: Kg
				});
			var Yg = function() {
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
				Xg = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Jg = Object(S.c)({
					firstFetch: Yg,
					models: Xg.b
				}),
				Zg = n("./src/reddit/actions/streaming/modSettings.ts");
			var em = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zg.b:
					case Zg.c:
						return null;
					case Zg.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var tm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zg.b:
							return !0;
						case Zg.c:
						case Zg.a:
							return !1;
						default:
							return e
					}
				},
				nm = Object(S.c)({
					error: em,
					pending: tm
				}),
				rm = n("./src/reddit/actions/streaming/constants.ts");
			const sm = {};
			var am = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case rm.a: {
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
				om = Object(S.c)({
					api: nm,
					modSettings: am
				}),
				cm = n("./src/reddit/models/StructuredStyles/index.ts");
			const dm = {};
			var im = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.h:
						case b.b:
						case b.d:
							return t.payload.styles;
						case b.e:
							return dm;
						case b.c: {
							const n = t.payload;
							return {
								...e,
								...n
							}
						}
						case b.k: {
							const e = t.payload;
							return Object(cm.h)(e.styles)
						}
						default:
							return e
					}
				},
				um = n("./src/reddit/actions/exportImportStyles.ts");
			var lm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case um.c:
					case um.b:
						return null;
					case um.a:
						return t.payload;
					default:
						return e
				}
			};
			var pm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case um.c:
							return !0;
						case um.b:
						case um.a:
							return !1;
						default:
							return e
					}
				},
				bm = Object(S.c)({
					error: lm,
					pending: pm
				}),
				fm = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				hm = n("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const ym = {};
			var gm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ym,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case H.c:
						case Ne.e:
						case De.PAGE_LOADED:
						case Dr.PAGE_LOADED: {
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
						case fm.b: {
							const {
								flairId: n,
								template: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case fm.a: {
							const {
								flairId: n
							} = t.payload;
							return Object(Dt.a)(e, n)
						}
						case Tp.b: {
							const {
								templateId: n
							} = t.payload;
							return Object(Dt.a)(e, n)
						}
						case b.k:
							return ym;
						case hm.b: {
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
				mm = Object(S.c)({
					models: gm
				});
			const vm = {};
			var Om = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vm,
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
						return vm;
					default:
						return e
				}
			};
			var Em = function() {
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
			var _m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.d:
						return t.payload.subredditId;
					case b.e:
						return null;
					case u.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case On.g:
						return null;
					default:
						return e
				}
			};
			const Im = {};
			var Sm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Im,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case De.PAGE_LOADED:
						case Dr.PAGE_LOADED: {
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
						case Ne.e:
						case H.c: {
							const {
								payload: n
							} = t;
							if (!n.structuredStyles || !n.structuredStyles.data) return e;
							if (!n.subredditName) return e;
							let r;
							if (fa()(n.subreddits, (e, t) => {
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
								r = Object(cm.h)(n.styles);
							return {
								...e,
								[n.subredditId]: r
							}
						}
						case el.k: {
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
						case On.l: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return ib(e, {
									[n.subredditId]: {
										bannerBackgroundImage: n.imageUrl
									}
								})
							}
							return e
						}
						case On.k: {
							const n = t.payload;
							if ("profileBanner" === n.key) {
								return ib(e, {
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
				jm = Object(S.c)({
					draft: im,
					exportStyles: bm,
					flairTemplate: mm,
					imagePreviews: Om,
					isBladeEditorDirty: Em,
					isEditing: _m,
					models: Sm
				});
			Object(Ce.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var wm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				Tm = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const Dm = {};
			var Pm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Tm.c:
					case Tm.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Tm.a: {
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
			const Am = {};
			var Cm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Am,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tm.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Tm.b:
						case Tm.a: {
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
				Rm = Object(S.c)({
					error: Pm,
					pending: Cm
				});
			const Nm = {};
			var km = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tm.b: {
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
				xm = Object(S.c)({
					api: Rm,
					models: km
				}),
				Lm = n("./src/reddit/actions/category/constants.ts"),
				Um = n("./src/reddit/actions/subredditMention/constants.ts");
			const Mm = {};
			var Gm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Um.d:
					case F.b:
					case F.f:
					case H.c:
					case W.SUBREDDIT_FAILED:
					case W.SUBREDDIT_LOADED:
					case De.PAGE_LOADED:
					case Dr.PAGE_LOADED:
					case B.b:
					case B.e:
					case Pe.b:
					case Pe.a:
					case Pe.e:
					case Pe.d:
					case q.PROFILE_POSTS_LOADED:
					case Q.b:
					case Q.e:
					case Ne.e:
					case ni.TOPIC_DATA_LOADED:
					case ci.u: {
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
					case Ka.a: {
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
					case rl.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === Ih.a.SUBREDDIT);
						return s.length ? s.reduce((e, t) => Object(N.setIn)(e, [t.id, "userIsSubscriber"], r), e) : e
					}
					case Ho.g:
					case Lm.f:
					case ci.g:
					case ci.o:
					case Xn.B: {
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
					case Ka.b: {
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
					case Tm.b: {
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
			const Fm = {};
			var Bm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fm,
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
			var qm = function() {
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
				Vm = Object(S.c)({
					error: Bm,
					pending: qm
				}),
				Hm = n("./src/reddit/actions/subredditCreation.ts");
			const Wm = {
				apiError: null
			};
			var Qm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Hm.b: {
						const {
							error: n
						} = t.payload;
						return {
							...e,
							apiError: n
						}
					}
					case Hm.a:
					case Hm.c:
					case Hm.e:
						return Wm;
					default:
						return e
				}
			};
			var $m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Hm.d: {
						const {
							crosspostId: e
						} = t.payload;
						return e || null
					}
					case Hm.a:
					case Hm.c:
					case Hm.e:
						return null;
					default:
						return e
				}
			};
			var Km = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Hm.e: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case Hm.c:
					case Hm.b:
						return null;
					default:
						return e
				}
			};
			var zm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Hm.c:
							return !0;
						case Hm.e:
						case Hm.b:
							return !1;
						default:
							return e
					}
				},
				Ym = Object(S.c)({
					error: Qm,
					lastCreatedSubredditId: Km,
					initialCrosspost: $m,
					pending: zm
				});
			var Xm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ci.w:
							return !0;
						case ci.x:
						case ci.v:
							return !1;
						default:
							return e
					}
				},
				Jm = Object(S.c)({
					pending: Xm
				});
			const Zm = {};
			var ev = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zm,
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
			const tv = {};
			var nv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tv,
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
				rv = Object(S.c)({
					error: ev,
					pending: nv
				});
			const sv = {};
			var av = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ci.f:
						case ci.g:
							return {
								...e, [t.payload.key]: !1
							};
						case ci.h:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				ov = Object(S.c)({
					pending: av
				});
			var cv = function() {
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
			var dv = function() {
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
				iv = Object(S.c)({
					error: cv,
					pending: dv
				});
			var uv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ci.k: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case ci.m:
					case ci.l:
						return null;
					default:
						return e
				}
			};
			var lv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ci.m:
							return !0;
						case ci.l:
						case ci.k:
							return !1;
						default:
							return e
					}
				},
				pv = Object(S.c)({
					error: uv,
					pending: lv
				}),
				bv = n("./src/reddit/actions/subredditRules/constants.ts");
			var fv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bv.c:
							return !0;
						case bv.a:
						case bv.b:
							return !1;
						default:
							return e
					}
				},
				hv = n("./src/reddit/actions/subredditSettings.ts");
			var yv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hv.e:
							return !0;
						case hv.f:
						case hv.d:
							return !1;
						default:
							return e
					}
				},
				gv = Object(S.c)({
					pending: yv
				});
			const mv = {};
			var vv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ci.n:
						case ci.o:
							return {
								...e, [t.payload.key]: !1
							};
						case ci.p:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				Ov = Object(S.c)({
					pending: vv
				}),
				Ev = n("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const _v = {};
			var Iv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _v,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ev.c:
					case Ev.b: {
						const n = t.payload,
							{
								subredditName: r
							} = n.options;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Ev.a: {
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
			const Sv = {};
			var jv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ev.c: {
							const n = t.payload,
								{
									subredditName: r
								} = n.options;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Ev.b:
						case Ev.a: {
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
				wv = Object(S.c)({
					error: Iv,
					pending: jv
				});
			const Tv = {};
			var Dv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ab.c:
					case ab.b: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case ab.a: {
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
			const Pv = {};
			var Av = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ab.c: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case ab.b:
						case ab.a: {
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
				Cv = Object(S.c)({
					error: Dv,
					pending: Av
				}),
				Rv = Object(S.c)({
					about: Vm,
					create: Ym,
					inlineEditing: Jm,
					models: rv,
					onboarding: ov,
					productOffers: iv,
					rankings: pv,
					rules: fv,
					settings: gv,
					similar: Ov,
					topContent: Cv,
					wiki: wv
				}),
				Nv = n("./node_modules/lodash/isNil.js"),
				kv = n.n(Nv);
			const xv = {};
			var Lv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.d: {
							const {
								subredditId: n,
								forceState: r
							} = t.payload;
							return {
								...e,
								[n]: kv()(r) ? !e[n] : r
							}
						}
						default:
							return e
					}
				},
				Uv = Object(S.c)({
					meta: Lv
				});
			const Mv = {};
			var Gv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lm.f: {
						const {
							categoryId: n,
							subredditIds: r
						} = t.payload;
						return ua()(r) ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Fv = {
				pending: !1,
				items: {}
			};
			var Bv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Np.c:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Np.d:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const qv = {};
			var Vv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.c: {
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
				Hv = n("./src/reddit/actions/countrySites/subredditCountrySiteSettings.ts");
			const Wv = {};
			var Qv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Hv.b:
						case Hv.c:
						case Hv.a: {
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
				$v = n("./src/reddit/actions/subredditCrosspostable.ts");
			var Kv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $v.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case $v.c:
					case $v.b:
						return null;
					default:
						return e
				}
			};
			var zv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $v.c:
							return !0;
						case $v.b:
						case $v.a:
							return !1;
						default:
							return e
					}
				},
				Yv = Object(S.c)({
					errors: Kv,
					pending: zv
				});
			const Xv = {};
			var Jv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $v.b: {
							const {
								subredditIds: n
							} = t.payload;
							return Yu()(e, n) ? e : n
						}
						default:
							return e
					}
				},
				Zv = Object(S.c)({
					api: Yv,
					ids: Jv
				});
			const eO = {};
			var tO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hb.a: {
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
							return ib(o, {
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
				nO = Object(S.c)({
					models: tO
				});
			const rO = {};
			var sO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rO,
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
			const aO = {};
			var oO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aO,
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
			const cO = {};
			var dO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cO,
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
			const iO = {};
			var uO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iO,
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
				lO = Object(S.c)({
					assets: sO,
					communityRaw: oO,
					distributions: dO,
					releaseNotes: uO
				}),
				pO = n("./node_modules/lodash/isEqualWith.js"),
				bO = n.n(pO),
				fO = n("./src/lib/forceHttps/index.ts");
			const hO = {},
				yO = (e, t) => {
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
						return a.icon.url ? o.icon.url = Object(fO.a)(a.icon.url) : s && s.icon.url ? o.icon = s.icon : o.icon.url = "", s && s.allowChatPostCreation && (o.allowChatPostCreation = !0), Object(N.set)(n, r, o)
					}, e) : e
				},
				gO = (e, t) => {
					return !bO()(e, t, (e, t, n) => {
						if ("subscribers" === n) return !0
					})
				},
				mO = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					for (let s = 0; s < n.length; s++) {
						const a = n[s],
							o = e[a],
							c = t[a];
						o && !gO(o, c) || (r[a] = {
							...o,
							...c
						})
					}
					return Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var vO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rl.c:
						return yO(e, t.payload.subreddits || {});
					case je.b:
					case je.f:
					case By.b:
					case Um.d:
					case Lm.f:
					case _e.f:
					case Ho.g:
					case ai.c:
					case oi.b:
					case we.e:
					case we.h:
					case G.k:
					case Se.r:
					case Se.u:
					case el.h:
					case ti.b:
					case F.b:
					case F.f:
					case _e.b:
					case Te.b:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case Pe.b:
					case Pe.e:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case el.e:
					case H.c:
					case W.SUBREDDIT_LOADED:
					case De.PAGE_LOADED:
					case Un.e:
					case Dr.PAGE_LOADED:
					case el.m:
					case Q.b:
					case Q.e:
					case Ae.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ne.e:
					case $.c:
					case $.f:
					case $.i:
					case ci.a:
					case ci.g:
					case ci.o:
					case ni.TOPIC_DATA_LOADED:
					case ni.MORE_POSTS_LOADED:
					case Xn.B:
						return mO(e, t.payload.subreddits || {});
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
						return mO(e, r)
					}
					case Ne.h: {
						const {
							typeaheadSuggestions: n
						} = t.payload;
						return mO(e, n.subreddits || {})
					}
					case Se.B: {
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
						return mO(e, n)
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
					case hv.f: {
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
					case Tm.b: {
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
			var OO = function() {
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
			var EO = function() {
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
			var _O = function() {
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
				IO = Object(S.c)({
					errors: OO,
					fetched: EO,
					pending: _O
				});
			var SO = function() {
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
				jO = Object(S.c)({
					api: IO,
					order: SO
				});
			const wO = {};
			var TO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hv.a: {
						const n = t.payload;
						return Object(N.merge)(e, n)
					}
					case hv.b: {
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
			const DO = {};
			var PO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ci.g: {
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
			const AO = {};
			var CO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AO,
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
			const RO = {};
			var NO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RO,
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
			const kO = {},
				xO = (e, t, n) => {
					const r = null == e ? void 0 : e[t],
						s = null == r ? void 0 : r.emotes;
					if (!s) return e;
					const a = Aa(n, t),
						o = [...s, a];
					return {
						...e,
						[t]: {
							...r,
							emotes: o
						}
					}
				},
				LO = (e, t, n) => {
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
			var UO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.pb: {
						const {
							powerups: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: Ca(n)
						}
					}
					case Pa.b: {
						const {
							subredditId: n,
							emoji: r
						} = t.payload, s = e[n];
						return {
							...e,
							[n]: xO(s, n, r)
						}
					}
					case Pa.c: {
						const {
							subredditId: n,
							emojiId: r
						} = t.payload, s = e[n];
						return {
							...e,
							[n]: LO(s, n, r)
						}
					}
					default:
						return e
				}
			};
			const MO = {},
				GO = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var FO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.pb: {
							const {
								topSupporters: n,
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: n.sort(GO)
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
								[n]: c.sort(GO)
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
									[n]: [t, ...e[n]].sort(GO)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				BO = n("./src/lib/makeProductOfferKey/index.ts");
			const qO = {};
			var VO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.cb:
					case ee.pb: {
						const {
							subredditId: n,
							productOffers: r
						} = t.payload;
						if (!(null == r ? void 0 : r.length)) return e;
						const s = r.reduce((e, t) => {
							const r = Object(BO.a)(t.type, n);
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
			const HO = {};
			var WO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HO,
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
				QO = n("./src/reddit/models/NewCommunityProgress/index.ts");
			const $O = {},
				KO = e => e.filter(e => {
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
						return QO.e.includes(t)
					})
				});
			var zO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $O,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ci.y: {
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
						const s = KO(r.cards);
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
			const YO = {};
			var XO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r;
				switch (t.type) {
					case ci.y: {
						const {
							id: n,
							questions: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case _e.f:
					case _e.b: {
						const {
							subreddits: r
						} = t.payload, s = {};
						for (const e of Object.keys(r)) {
							const t = r[e];
							((null === (n = t.answerableQuestions) || void 0 === n ? void 0 : n.length) || 0) > 0 && (s[e] = t.answerableQuestions)
						}
						return 0 === Object.keys(s).length ? e : Object(N.assign)(e, s)
					}
					case ci.d: {
						const {
							subredditId: n,
							questionId: s
						} = t.payload, a = null !== (r = e[n]) && void 0 !== r ? r : [];
						return Object(N.setIn)(e, [n], a.filter(e => e.id !== s))
					}
					case ci.e:
						return YO;
					default:
						return e
				}
			};
			const JO = {};
			var ZO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ci.b: {
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
			const eE = {};
			var tE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ci.c: {
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
				nE = n("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const rE = {};
			var sE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nE.a: {
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
			const aE = {};
			var oE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bv.b: {
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
					case bv.e: {
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
					case bv.f: {
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
					case bv.g:
					case bv.d: {
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
			const cE = {};
			var dE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case hv.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case hv.f: {
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
					case On.n: {
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
			const iE = {};
			var uE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ci.o: {
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
			const lE = {};
			var pE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ci.y: {
						const {
							id: n,
							survey: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case ci.z: {
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
			const bE = {};
			var fE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ho.g: {
						const {
							subredditTopContent: n
						} = t.payload;
						return {
							...e,
							...n.subredditTopContent
						}
					}
					case ab.b: {
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
			const hE = [];
			var yE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _e.b:
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
			const gE = {};
			var mE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Um.d:
						case Xn.B:
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
				vE = Object(S.c)({
					about: Gm,
					api: Rv,
					appliedFilters: Uv,
					byCategory: Gv,
					carousel: Bv,
					communityInfo: Vv,
					countrySiteSettings: Qv,
					crosspostable: Zv,
					duplicates: nO,
					gov: lO,
					models: vO,
					moderated: jO,
					notificationSettings: TO,
					onboarding: PO,
					powerupRecentSupporters: CO,
					powerups: NO,
					powerupsEmojis: UO,
					powerupTopSupporters: FO,
					productOffers: VO,
					products: WO,
					progressModule: zO,
					questions: XO,
					rankings: ZO,
					rankingsPageInfo: tE,
					related: sE,
					rules: oE,
					settings: dE,
					similar: uE,
					survey: pE,
					topContent: fE,
					trending: yE,
					unavailableModels: mE
				});
			const OE = {};
			var EE = Object(Tf.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OE,
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
							return ge()({
								...e
							}, s)
						}
						case Ei.o: {
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
				}), OE),
				_E = Object(S.c)({
					data: EE
				}),
				IE = n("./node_modules/lodash/values.js"),
				SE = n.n(IE);
			const jE = [];
			var wE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rl.d: {
						const {
							makeFavorite: n,
							multiredditsModelsState: r,
							multiredditPath: s
						} = t.payload;
						if (n) {
							const t = [...e],
								n = Zu(t, s, (e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(n, 0, s), t
						}
						return e.filter(e => e !== s)
					}
					case Se.u: {
						const {
							multireddits: e
						} = t.payload;
						return SE()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case rl.e: {
						const {
							follow: n,
							multiredditPath: r
						} = t.payload;
						return n ? e : e.filter(e => e !== r)
					}
					case Se.j: {
						const n = t.payload;
						return e.filter(e => e !== n)
					}
					default:
						return e
				}
			};
			var TE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rl.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case rl.b:
					case rl.c:
						return null;
					default:
						return e
				}
			};
			var DE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rl.b:
					case rl.c:
						return !0;
					case rl.a:
						return !1;
					default:
						return e
				}
			};
			var PE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case rl.b:
							return !0;
						case rl.c:
						case rl.a:
							return !1;
						default:
							return e
					}
				},
				AE = Object(S.c)({
					errors: TE,
					fetched: DE,
					pending: PE
				});
			const CE = [];
			var RE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rl.c: {
						const {
							profiles: e,
							favoriteProfileIds: n,
							favoriteSubredditIds: r
						} = t.payload;
						let s;
						return (s = n && n.length ? n : r ? r.filter(t => !!e[t]) : []).sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), s
					}
					case rl.f: {
						const {
							makeFavorite: n,
							identifier: r,
							profileModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== Ih.a.PROFILE) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = Zu(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case rl.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === Ih.a.PROFILE && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const NE = [];
			var kE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rl.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: n
						} = t.payload, r = n ? n.filter(t => !!e[t]) : [];
						return r.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), r
					}
					case rl.f: {
						const {
							makeFavorite: n,
							identifier: r,
							subredditModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== Ih.a.SUBREDDIT) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = Zu(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case rl.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === Ih.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const xE = [],
				LE = e => (t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1;
			var UE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.u: {
							const {
								multireddits: n
							} = t.payload, r = SE()(n).map(e => {
								let {
									url: t
								} = e;
								return t.toLowerCase()
							}).sort(LE(n));
							return Yu()(e, r) ? e : r
						}
						case Te.b: {
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
								d = Ju()(e, o).sort(LE(c));
							return Yu()(e, d) ? e : d
						}
						case rl.e: {
							const {
								follow: n,
								multiredditPath: r,
								multiredditsModelsState: s
							} = t.payload;
							return n ? [...e, r].sort(LE(s)) : e.filter(e => e !== r)
						}
						case Se.j: {
							const n = t.payload;
							return e.filter(e => e !== n)
						}
						case Se.g:
						case Se.m: {
							const {
								multireddit: n,
								multiredditsModelsState: r
							} = t.payload, s = {
								...r,
								[n.url]: n
							};
							return [...e, n.url].sort(LE(s))
						}
						default:
							return e
					}
				},
				ME = n("./node_modules/lodash/difference.js"),
				GE = n.n(ME);
			const FE = [];
			var BE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case el.n: {
						const {
							profileOrder: n
						} = t.payload;
						return Gb()([...e, ...n])
					}
					case rl.c: {
						const {
							profiles: e
						} = t.payload, n = Object.keys(e);
						return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
					}
					case rl.h: {
						const {
							identifiers: n,
							profileModels: r,
							userIsSubscriber: s
						} = t.payload, a = n.filter(e => e.type === Ih.a.PROFILE);
						if (!a.length) return e;
						const o = a.map(e => e.id);
						return s ? Gb()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : GE()(e, o)
					}
					default:
						return e
				}
			};
			const qE = [];
			var VE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case el.n: {
							const {
								subredditOrder: n
							} = t.payload;
							return Gb()([...e, ...n])
						}
						case rl.c: {
							const {
								subreddits: e
							} = t.payload, n = Object.keys(e);
							return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
						}
						case rl.h: {
							const {
								identifiers: n,
								subredditModels: r,
								userIsSubscriber: s
							} = t.payload, a = n.filter(e => e.type === Ih.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const o = a.map(e => e.id);
							return s ? Gb()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : GE()(e, o)
						}
						default:
							return e
					}
				},
				HE = Object(S.c)({
					api: AE,
					favoriteMultiOrder: wE,
					favoriteProfileOrder: RE,
					favoriteSubredditOrder: kE,
					multiredditOrder: UE,
					profileOrder: BE,
					subredditOrder: VE
				}),
				WE = n("./src/reddit/actions/survey/constants.ts");
			var QE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case WE.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var $E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case WE.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var KE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case WE.b:
						return !e;
					default:
						return e
				}
			};
			var zE = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case WE.i:
							return !e;
						default:
							return e
					}
				},
				YE = Object(S.c)({
					activeDemoTrigger: QE,
					demoTriggerThreshold: $E,
					isDemoEnabled: KE,
					isSampleFactorEnabled: zE
				});
			var XE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ft.a:
							const {
								hasUnreadMessages: n
							} = t.payload;
							return n;
						default:
							return e
					}
				},
				JE = n("./src/reddit/actions/tags/constants.ts");
			const ZE = {
				pending: !1,
				error: !1
			};
			var e_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case JE.l:
						return {
							...e, pending: !0
						};
					case JE.m:
						return {
							error: !1, pending: !1
						};
					case JE.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const t_ = {
				pending: !1,
				error: !1
			};
			var n_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case JE.o:
						return {
							...e, pending: !0
						};
					case JE.p:
						return {
							error: !1, pending: !1
						};
					case JE.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const r_ = {
				pending: !1,
				error: !1
			};
			var s_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case JE.t:
						return {
							...e, pending: !0
						};
					case JE.s:
					case JE.r:
					case JE.e:
					case JE.j:
						return {
							error: !1, pending: !1
						};
					case JE.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const a_ = {
				pending: !1,
				error: !1
			};
			var o_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case JE.v:
						return {
							...e, pending: !0
						};
					case JE.w:
						return {
							error: !1, pending: !1
						};
					case JE.u:
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
						case JE.g:
							return {
								...e, pending: !0
							};
						case JE.h:
							return {
								error: !1, pending: !1
							};
						case JE.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				i_ = Object(S.c)({
					create: e_,
					deleteTag: n_,
					fetch: s_,
					update: o_,
					updatePrimaryTag: d_
				});
			const u_ = {
				global: [],
				recommendedGlobal: []
			};
			var l_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case JE.w:
						case JE.r:
						case JE.e:
						case JE.j: {
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
				p_ = n("./node_modules/lodash/uniqWith.js"),
				b_ = n.n(p_),
				f_ = n("./src/reddit/models/Option/index.ts");
			const h_ = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var y_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case JE.d: {
							const {
								option: n
							} = t.payload;
							return {
								...e,
								selectedOptions: b_()([...e.selectedOptions || [], {
									...n
								}], f_.a)
							}
						}
						case JE.c: {
							const {
								option: n
							} = t.payload, r = e.selectedOptions.findIndex(e => Object(f_.a)(e, n));
							return e.selectedOptions.splice(r, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case JE.b: {
							const {
								input: n
							} = t.payload;
							return {
								...e,
								tagInput: n
							}
						}
						case JE.a: {
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
				g_ = n("./src/reddit/helpers/tags/index.ts");
			const m_ = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var v_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case JE.j: {
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
						case JE.w:
						case JE.s:
						case JE.r: {
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
									[c]: Object(g_.a)(a[c] || {})
								}
							}
						}
						case JE.p: {
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
						case JE.e: {
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
						case JE.h: {
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
				O_ = n("./src/reddit/reducers/tags/selected/index.ts"),
				E_ = Object(S.c)({
					api: i_,
					availableGlobalTagOrder: l_,
					models: v_,
					selected: O_.b,
					creation: y_
				}),
				__ = n("./src/reddit/actions/redditEmbed.ts"),
				I_ = n("./src/reddit/actions/theme.ts"),
				S_ = n("./src/reddit/actions/users.ts"),
				j_ = n("./src/reddit/models/Theme/index.ts");
			const w_ = {
				current: j_.c,
				cached: {}
			};
			var T_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I_.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? j_.b : j_.c,
								cached: {}
							}
						}
						case vn.b:
						case vn.c:
						case vn.k:
						case vn.l:
						case vn.g:
						case vn.a:
						case vn.m:
						case je.b:
						case je.f:
						case we.e:
						case we.h:
						case F.a:
						case F.e:
						case F.b:
						case F.f:
						case F.d:
						case F.h:
						case _e.b:
						case W.SUBREDDIT_LOADED:
						case Te.b:
						case Te.a:
						case _e.f:
						case __.b:
						case $.i:
						case Ne.e:
						case H.c:
						case On.j:
						case De.PAGE_LOADED:
						case Dr.PAGE_LOADED:
						case S_.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: j_.b,
									cached: {}
								} : {
									current: j_.c,
									cached: {}
								}
							}
							return e;
						case B.d:
						case B.e:
						case Pe.a:
						case Pe.b:
						case Pe.d:
						case Pe.e:
						case q.PROFILE_POSTS_FAILED:
						case q.PROFILE_POSTS_LOADED: {
							const {
								account: n
							} = t.payload;
							return n ? n.nightmode ? {
								current: j_.b,
								cached: {}
							} : {
								current: j_.c,
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
									current: j_.b,
									cached: {}
								} : {
									current: j_.c,
									cached: {}
								}
							}
							return e;
						case On.i: {
							if (!t.payload) return e;
							const {
								nightmode: n
							} = t.payload;
							return n ? {
								current: j_.b,
								cached: {}
							} : {
								current: j_.c,
								cached: {}
							}
						}
						case b.d:
							return {
								current: j_.c, cached: {}
							};
						case b.e:
							return t.payload.nightmodeTempUpdated ? {
								current: j_.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				D_ = n("./src/reddit/actions/toaster.ts");
			const P_ = [];
			var A_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case D_.c: {
							const n = t.payload,
								r = [];
							let s = !1;
							for (const t of e) {
								const e = t.id === n.id ? n : t;
								r.push(e), s = s || e === n
							}
							return s || r.push(n), r
						}
						case D_.b: {
							const n = t.payload;
							return e.filter(e => e.id !== n)
						}
						default:
							return e
					}
				},
				C_ = n("./src/reddit/actions/tooltip.ts");
			var R_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C_.c:
						case C_.b:
						case C_.e:
						case C_.a: {
							const {
								args: e
							} = t.payload;
							return e || null
						}
						default:
							return e
					}
				},
				N_ = n("./src/reddit/components/ModWelcomeTooltip/index.tsx");
			var k_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C_.c: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case C_.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? e : n
						}
						case C_.b: {
							const {
								tooltipId: n
							} = t.payload;
							return null !== e ? e : n || null
						}
						case C_.e: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : e
						}
						case ee.K:
						case C_.d:
						case u.b:
						case Sc.b:
						case Sc.c:
						case Sc.a:
							return t.type === u.b && e === N_.MOD_WELCOME_TOOLTIP_ID ? e : null;
						default:
							return e
					}
				},
				x_ = Object(S.c)({
					params: R_,
					tooltipId: k_
				}),
				L_ = n("./src/reddit/actions/tracing.ts");
			const U_ = {
				traceId: void 0
			};
			var M_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case L_.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				G_ = n("./src/lib/asyncActions/index.ts"),
				F_ = n("./src/reddit/actions/reCaptchaEnterprise.ts");
			const B_ = Object(G_.c)(F_.c.requestedActionType, F_.c.succeededActionType, F_.c.failedActionType),
				q_ = Object(G_.c)(F_.a.requestedActionType, F_.a.succeededActionType, F_.a.failedActionType),
				V_ = Object(G_.c)(F_.d.requestedActionType, F_.d.succeededActionType, F_.d.failedActionType);
			var H_ = Object(S.c)({
					load: B_,
					execute: q_,
					send: V_
				}),
				W_ = n("./src/reddit/actions/tracking.ts");
			const Q_ = {};
			var $_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W_.a: {
							const {
								routeKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case W_.b: {
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
				K_ = Object(S.c)({
					reCaptchaEnterprise: H_,
					viewportDataLoaded: $_
				}),
				z_ = n("./src/reddit/actions/trafficStats/constants.ts");
			var Y_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case z_.c:
						return !0;
					case z_.b:
					case z_.a:
						return !1;
					default:
						return e
				}
			};
			var X_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case z_.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case z_.c:
							return null;
						default:
							return e
					}
				},
				J_ = Object(S.c)({
					pending: Y_,
					trafficStats: X_
				});
			var Z_ = function() {
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
			var eI = function() {
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
				tI = Object(S.c)({
					error: Z_,
					pending: eI
				});
			var nI = function() {
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
			var rI = function() {
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
			var sI = function() {
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
				aI = Object(S.c)({
					api: tI,
					contentId: nI,
					initialRecipient: rI,
					publicAddress: sI
				}),
				oI = Object(S.c)({
					communityPoints: aI
				}),
				cI = n("./src/reddit/actions/search/trending.ts");
			const dI = {};
			var iI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
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
				uI = Object(S.c)({
					models: iI
				});
			var lI = n("./src/reddit/routes/premium/index.ts");
			const pI = {};
			var bI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xh.a: {
							const {
								trophies: n
							} = t.payload;
							return Object.values(n).forEach(e => {
								"t6_bf" === e.awardId && (e.url = lI.b)
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				fI = n("./src/reddit/actions/upload.ts"),
				hI = n("./src/reddit/models/Upload/index.ts");
			const yI = {};
			var gI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case fI.d: {
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
						case fI.h: {
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
						case fI.c: {
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
						case fI.e: {
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
						case fI.g: {
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
						case fI.b: {
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
						case fI.a: {
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
						case fI.f: {
							const {
								key: n
							} = t.payload, r = e[n];
							return r.metadata.localUrl && window.URL.revokeObjectURL(r.metadata.localUrl), Tr()(e, n)
						}
						default:
							return e
					}
				},
				mI = n("./src/reddit/actions/upvotePrompt.ts");
			var vI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case mI.a:
						return ++e;
					default:
						return e
				}
			};
			const OI = {};

			function EI(e, t) {
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
			var _I = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.d:
					case d.a:
					case c.f:
					case d.t: {
						const {
							wallet: n
						} = t.payload;
						return EI(e, n)
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
			Object(Ce.a)("INBOX__COUNT_UPDATE");
			var II = n("./src/reddit/actions/pages/appeal/constants.ts"),
				SI = n("./src/reddit/actions/pages/userDataRequest/index.ts"),
				jI = n("./src/reddit/actions/sso/constants.ts"),
				wI = n("./src/reddit/endpoints/profile/info.ts");
			const TI = (e, t) => {
				const {
					gender: n,
					...r
				} = {
					...e
				};
				if (!t || Yu()(r, t)) return e;
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
			var DI = Object(Tf.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, s;
				switch (t.type) {
					case II.a:
					case II.b:
					case Ky.b:
					case Ky.c:
					case vn.b:
					case vn.c:
					case vn.g:
					case vn.a:
					case vn.k:
					case vn.l:
					case vn.m:
					case we.e:
					case we.h:
					case we.g:
					case Se.q:
					case Se.r:
					case F.a:
					case F.e:
					case F.b:
					case F.f:
					case _e.a:
					case _e.b:
					case Te.a:
					case Te.b:
					case W.SUBREDDIT_FAILED:
					case el.l:
					case B.b:
					case B.a:
					case B.e:
					case B.d:
					case V.c:
					case V.i:
					case Pe.e:
					case Pe.d:
					case Pe.b:
					case Pe.a:
					case q.PROFILE_POSTS_LOADED:
					case q.PROFILE_POSTS_FAILED:
					case W.SUBREDDIT_LOADED:
					case H.a:
					case H.c:
					case De.PAGE_LOADED:
					case Dr.PAGE_LOADED:
					case Ne.c:
					case Ne.e:
					case __.a:
					case __.b:
					case On.j:
					case SI.b:
					case S_.c:
					case ni.TOPIC_DATA_LOADED:
						return TI(e, t.payload.account);
					case S_.o:
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
						return n ? TI(e, n.account) : e
					}
					case S_.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case r.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case On.l:
					case On.k: {
						const n = t.payload;
						return e && "profileIcon" === n.key ? {
							...e,
							accountIcon: n.imageUrl
						} : e
					}
					case ee.B:
					case ee.s: {
						const {
							coins: n
						} = t.payload;
						return e ? {
							...e,
							coins: n
						} : e
					}
					case ee.eb: {
						const {
							userName: n,
							karma: r
						} = t.payload;
						return n.toLowerCase() !== (e && Object(z.e)(e).toLowerCase()) ? e : e && {
							...e,
							karma: {
								...wI.a,
								...null == e ? void 0 : e.karma,
								...r
							}
						}
					}
					case Ie.A: {
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
					case Zl.q: {
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
					case jI.a: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...r, n]
						} : e
					}
					case jI.b: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: r.filter(e => e !== n)
						} : e
					}
					case Gc.c: {
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
					case jl.a:
					case jl.b: {
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
					case S_.l: {
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
			var PI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case S_.n:
					case S_.o:
						return null;
					case S_.m:
						return t.payload;
					default:
						return e
				}
			};
			var AI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case S_.n:
							return !0;
						case S_.o:
						case S_.m:
							return !1;
						default:
							return e
					}
				},
				CI = Object(S.c)({
					error: PI,
					pending: AI
				}),
				RI = Object(S.c)({
					api: CI
				});
			var NI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case S_.j:
						return !0;
					default:
						return e
				}
			};
			var kI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case S_.i:
							return !0;
						case S_.j:
						case S_.h:
							return !1;
						default:
							return e
					}
				},
				xI = Object(S.c)({
					pending: kI,
					emailSent: NI
				}),
				LI = Object(S.c)({
					api: xI
				}),
				UI = Object(S.c)({
					changeEmail: RI,
					sendResetEmail: LI
				}),
				MI = n("./src/reddit/models/WhitelistAndBlocked.ts");
			const GI = {};
			var FI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gt.f:
						return {
							...e, new: MI.a.pending
						};
					case gt.d:
						return {
							...e, new: MI.a.error
						};
					case gt.e:
						return {
							...e, new: MI.a.waitingForRequest
						};
					case gt.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: MI.a.pending
						}
					}
					case gt.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: MI.a.error
						}
					}
					case gt.c: {
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
			const BI = [];
			var qI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case gt.e:
							return [t.payload, ...e];
						case gt.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case On.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				VI = Object(S.c)({
					api: FI,
					data: qI
				}),
				HI = n("./src/reddit/actions/chat/constants.ts"),
				WI = n("./src/reddit/actions/chat/userSettings.ts");
			const QI = HI.a.anybody;
			var $I = function() {
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
				KI = Object(S.c)({
					invitePolicy: $I
				});
			const zI = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var YI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.PAGE_LOADED: {
						const {
							drafts: n
						} = t.payload;
						return e && Yu()(e, n) ? e : {
							...e,
							...n
						}
					}
					case Xn.P: {
						const {
							response: {
								draftsCount: n
							}
						} = t.payload;
						return zI(e, n)
					}
					case Un.e: {
						const {
							postDraftIds: n
						} = t.payload;
						return zI(e, n.length)
					}
					case Un.c:
					case Un.l: {
						const {
							draftsCount: n
						} = t.payload;
						return zI(e, n)
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
						case no.a: {
							const e = t.payload.experimentVariants;
							return Nl(e)
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
				nS = Object(S.c)({
					byName: JI,
					localPersisted: tS
				});
			var rS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case On.f:
						return !0;
					case On.e:
						return !1;
					default:
						return e
				}
			};
			var sS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case On.j:
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
						case S_.b:
							return t.payload;
						default:
							return e
					}
				},
				cS = n("./src/reddit/actions/notifications/constants.ts"),
				dS = n("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var iS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dS.a:
					case dS.d:
					case dS.h:
					case cS.a:
						return t.payload && t.payload.error || null;
					case dS.c:
					case dS.f:
					case dS.j:
					case cS.c:
					case cS.b:
						return null;
					default:
						return e
				}
			};
			var uS = function() {
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
			var lS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cS.c:
						case dS.j:
							return !0;
						case cS.b:
						case cS.a:
						case dS.i:
						case dS.h:
							return !1;
						default:
							return e
					}
				},
				pS = Object(S.c)({
					error: iS,
					loaded: uS,
					pending: lS
				});
			var bS = function() {
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
			var fS = function() {
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
				yS = Object(S.c)({
					error: bS,
					loaded: fS,
					pending: hS
				}),
				gS = Object(S.c)({
					getPreferences: pS,
					setPreferences: yS
				});
			const mS = {
				byId: {},
				allIds: []
			};
			var vS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dS.b: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case dS.g: {
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
			var ES = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dS.b: {
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
				_S = Object(S.c)({
					sections: ES,
					rows: vS
				}),
				IS = n("./src/lib/notifications/constants.ts");
			var SS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case IS.j:
						return !0;
					case IS.b:
					case IS.d:
					case IS.e:
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
			var wS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cS.b:
					case cS.f:
					case cS.d: {
						const {
							preferences: n
						} = t.payload;
						return ua()(n) ? e : n
					}
					default:
						return e
				}
			};
			const TS = {
				byId: {},
				allIds: []
			};
			var DS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dS.e: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case dS.g: {
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
			var AS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dS.e: {
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
				CS = Object(S.c)({
					sections: AS,
					rows: DS
				});
			var RS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dS.i:
						return t.payload && t.payload.pageInfo;
					default:
						return e
				}
			};
			const NS = [];
			var kS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dS.i: {
							const n = t.payload && t.payload.nodes;
							return [...e, ...n]
						}
						case dS.k: {
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
				xS = Object(S.c)({
					subreddits: kS,
					pageInfo: RS
				}),
				LS = Object(S.c)({
					api: gS,
					subscribedSubredditsSettings: xS,
					emailSettingsLayout: _S,
					isNotificationPromptVisible: SS,
					preferences: wS,
					pushSettingsLayout: CS
				});
			const US = {};
			var MS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : US,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.i:
					case Ke.h: {
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
			const GS = {},
				FS = (e, t) => `${e}_${t||new Date}`;
			var BS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.Ab: {
						const n = t.payload.powerups;
						if (n) {
							const {
								allocation: t
							} = n, r = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[FS(t.subredditInfo.id, t.allocatedAt)]: t
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
							[FS(t.subredditInfo.id, t.allocatedAt)]: t
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
							const t = FS(n, s),
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
						} = t.payload, s = FS(n, r), a = e[s];
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
			var qS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.Ab: {
						const n = t.payload.powerups;
						return n ? Tr()({
							...e,
							...n
						}, "allocation") : e
					}
					case ee.pb: {
						const {
							userPowerups: n
						} = t.payload;
						return n ? Tr()({
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
			var VS, HS = function() {
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
				WS = Object(S.c)({
					allocationByKey: BS,
					data: qS,
					fetched: HS
				}),
				QS = n("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(VS || (VS = {}));
			const $S = {
				status: VS.UNFETCHED,
				subscriptions: []
			};
			var KS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $S,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.Eb:
						return {
							...e, status: VS.PENDING
						};
					case ee.Db: {
						const {
							subscriptions: n
						} = t.payload;
						return n ? {
							...e,
							subscriptions: n,
							status: VS.LOADED
						} : e
					}
					case ee.Cb:
						return {
							...e, status: VS.FAILED
						};
					default:
						return e
				}
			};
			var zS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case S_.d:
						return t.payload;
					default:
						return e
				}
			};
			var YS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qy.a:
					case qy.b:
					case qy.c:
					case qy.e:
						return t.payload;
					case qy.d:
						return null;
					default:
						return e
				}
			};
			var XS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qy.f:
						return !0;
					default:
						return e
				}
			};
			var JS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case S_.k:
						return t.payload;
					default:
						return e
				}
			};
			var ZS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case no.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var ej = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case no.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				tj = Object(S.c)({
					isEmployee: ZS,
					isLoggedIn: ej
				});
			var nj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case On.r: {
							const {
								topContentDismissal: n
							} = t.payload;
							return e && Yu()(e, n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				rj = n("./src/reddit/actions/userWhitelist.ts");
			const sj = {};
			var aj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rj.e:
						return {
							...e, new: MI.a.pending
						};
					case rj.d:
						return {
							...e, new: MI.a.error
						};
					case rj.f:
						return {
							...e, new: MI.a.waitingForRequest
						};
					case rj.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: MI.a.pending
						}
					}
					case rj.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: MI.a.error
						}
					}
					case rj.c: {
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
			const oj = [];
			var cj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case rj.f:
							return [t.payload, ...e];
						case rj.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case On.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				dj = Object(S.c)({
					api: aj,
					data: cj
				}),
				ij = Object(S.c)({
					account: DI,
					accountSettings: UI,
					blocked: VI,
					chatSettings: KI,
					drafts: YI,
					experiments: nS,
					isCustomizeFlyoutShowing: rS,
					topContentDismissalPrefsSet: nj,
					language: sS,
					loid: oS,
					notificationPrefs: LS,
					ownedBadges: MS,
					powerups: WS,
					prefs: QS.c,
					productOfferSubscriptions: KS,
					reddaid: zS,
					session: YS,
					sessionRefreshFailed: XS,
					sessionTracker: JS,
					temporaryGQL: tj,
					wallets: _I,
					whitelist: dj
				});
			var uj = function() {
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
			var lj = function() {
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
			var pj = function() {
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
			var bj = function() {
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
				fj = Object(S.c)({
					error: uj,
					pending: lj,
					success: pj,
					userDataExportEligibility: bj
				}),
				hj = Object(S.c)({
					userDataRequestPageApi: fj
				});
			const yj = {};
			var gj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case S_.g:
					case S_.f: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case S_.e: {
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
			var mj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case S_.g:
							return !0;
						case S_.f:
						case S_.e:
							return !1;
						default:
							return e
					}
				},
				vj = Object(S.c)({
					error: gj,
					pending: mj
				});
			const Oj = {};
			var Ej = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ke.e: {
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
					case Ke.b: {
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
					case Ke.a: {
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
			const _j = {},
				Ij = (e, t) => {
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					return n.forEach(n => {
						const s = e[n],
							a = t[n];
						s && Yu()(s, a) || (r[n.toLowerCase()] = a)
					}), Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var Sj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _j,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case S_.f: {
							const {
								data: n
							} = t.payload;
							return Ij(e, n)
						}
						case el.k: {
							const {
								user: n
							} = t.payload;
							return Ij(e, {
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
							return o ? Ij(e, {
								[n.toLowerCase()]: {
									...r,
									awardedLastMonth: {
										totalCount: a,
										topAward: o
									}
								}
							}) : e
						}
						case ee.eb: {
							const {
								userName: n,
								karma: r
							} = t.payload, s = e[n.toLowerCase()];
							if (!s) return e;
							const a = {
								...wI.a,
								...r
							};
							return Ij(e, {
								[n.toLowerCase()]: {
									...s,
									karma: a
								}
							})
						}
						case On.l:
						case On.k: {
							const {
								imageUrl: n,
								key: r,
								username: s
							} = t.payload;
							if ("profileIcon" !== r) return e;
							const a = s.toLowerCase(),
								o = e[a];
							return o ? Ij(e, {
								[a]: {
									...o,
									accountIcon: n
								}
							}) : e
						}
						case S_.c:
							const n = t.payload.account;
							if (!n || !e) return e;
							const r = Object(z.e)(n).toLowerCase(),
								s = e[r];
							return s ? Ij(e, {
								[r]: {
									...s,
									accountIcon: n.accountIcon,
									snoovatarFullBodyAsset: n.snoovatarFullBodyAsset
								}
							}) : e;
						case On.n: {
							const {
								additional: n,
								settings: r
							} = t.payload;
							if (n.enableFollowers === n.prevEnableFollowers) return e;
							const s = r.currentUserName.toLowerCase(),
								a = e[s];
							return a ? Ij(e, {
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
				jj = n("./src/reddit/actions/usernameAvailable.ts");
			const wj = {};
			var Tj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jj.a: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: jj.b.Available
						}
					}
					case jj.c: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: jj.b.Error
						}
					}
					case jj.d: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: jj.b.Pending
						}
					}
					case jj.e: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: jj.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const Dj = {};
			var Pj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.gb: {
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
			var Aj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				Cj = Object(S.c)({
					allocationByKey: Pj,
					fetched: Aj
				});
			var Rj = function() {
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
			var Nj = function() {
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
				kj = Object(S.c)({
					error: Rj,
					pending: Nj
				});
			var xj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.yb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const Lj = {};
			var Uj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lj,
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
			const Mj = {};
			var Gj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mj,
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
							return Tr()(e, [n])
						}
						default:
							return e
					}
				},
				Fj = Object(S.c)({
					api: kj,
					currentPostId: xj,
					currentRank: Uj,
					list: Gj
				}),
				Bj = Object(S.c)({
					api: vj,
					appliedBadges: Ej,
					models: Sj,
					nameAvailable: Tj,
					topAwarders: Fj,
					powerups: Cj
				});
			const qj = {};
			var Vj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r, s;
					switch (t.type) {
						case F.b:
						case F.f:
						case W.SUBREDDIT_LOADED:
						case $.i:
						case H.c:
						case De.PAGE_LOADED:
						case Dr.PAGE_LOADED: {
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
				Hj = n("./src/reddit/actions/widgets/constants.ts");
			const Wj = {};
			var Qj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case F.b:
						case F.f:
						case H.c:
						case $.i:
						case W.SUBREDDIT_LOADED:
						case De.PAGE_LOADED: {
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
						case Hj.g: {
							const n = t.payload;
							return "menu" !== n.widget.kind ? e : {
								...e,
								[n.subredditId]: n.widgetId
							}
						}
						case Hj.h: {
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
				$j = n("./src/reddit/helpers/widgets/index.tsx");
			const Kj = {};
			var zj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kj,
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
					case Hj.b: {
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
								styles: Object($j.g)()
							}
						}), t
					}
					case Hj.e: {
						const n = t.payload;
						return {
							...e,
							...n.widgets.items
						}
					}
					case Hj.i:
					case Hj.g: {
						const n = t.payload;
						return {
							...e,
							[n.widget.id]: n.widget
						}
					}
					case Hj.h: {
						const n = t.payload,
							r = {
								...e
							};
						return delete r[n.widgetId], r
					}
					case F.b:
					case F.f:
					case W.SUBREDDIT_LOADED:
					case $.i:
					case H.c:
					case De.PAGE_LOADED:
					case Dr.PAGE_LOADED: {
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
					case rl.h: {
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
					case hv.f: {
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
			const Yj = {};
			var Xj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case F.f:
					case $.i:
					case De.PAGE_LOADED: {
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
			const Jj = {};
			var Zj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.SUBREDDIT_LOADED:
					case De.PAGE_LOADED:
					case Dr.PAGE_LOADED: {
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
					case Hj.e:
					case Hj.b: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgets.layout.sidebar.order
						}
					}
					case Hj.f: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.widgetIds
						}
					}
					case Hj.g: {
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
					case Hj.h: {
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
					case W.SUBREDDIT_LOADED:
					case H.c:
					case $.i:
					case De.PAGE_LOADED:
					case Dr.PAGE_LOADED: {
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
			const ew = {
				accountManagerModalData: a,
				activeModal: h,
				ads: O,
				apiRequestState: I,
				appBadges: C,
				authorFlair: Z,
				awards: $e,
				badges: dt,
				blockedRedditors: yt,
				blockUser: It,
				brandSafety: jt,
				chat: Jt,
				cooldownTimer: Cn,
				commentsListTruncated: en,
				communityFlairs: rn,
				connection: on,
				contentControls: mn,
				contentGate: _n,
				continueThreads: jn,
				creations: ea,
				dashboard: ra,
				discoveryUnits: ma,
				dismissedTruncationList: Ea,
				economics: Ha,
				emailVerificationTooltip: $a,
				emojis: to,
				experimentOverrides: oo,
				externalAccount: Lo,
				featureFlags: Vo,
				focusedVerticals: nc,
				fontFiles: sc,
				gild: gc,
				header: wc,
				htmlResponseStreaming: Tc,
				imageUploads: Ac,
				inAppNotifications: Lc,
				interceptedAction: Mc,
				isChangeUsernameTooltipShowing: Fc,
				isModeratorWithPostPerms: qc,
				jsApi: Wc,
				langSite: Kc,
				leaderboard: rd,
				listings: Ri,
				live: Ui,
				mediaEmbed: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mi.a:
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
				mediaGalleries: Hi,
				mediaPlayback: $i,
				meta: Yi,
				moderatingSubreddits: Zi,
				modListingPage: ou,
				modModeEnabled: du,
				moreComments: yu,
				multireddits: il,
				notificationBannerId: ll,
				notificationsInbox: El,
				nps: Sl,
				onboarding: Cl,
				page: Ul,
				platform: Vl,
				postCollection: wp,
				polls: fp,
				postFlair: Rp,
				posts: wf,
				postStickiedComments: Af,
				givePremium: _c,
				products: Wf,
				profileCommentsPage: oh,
				profilePrivatePage: _h,
				profileModSettingsPage: uh,
				profilePostsPage: ph,
				profiles: ny,
				promos: cy,
				publicAccessNetwork: Fy,
				recentSubreddits: Wy,
				recommendations: $y,
				reportPage: rg,
				reportRules: og,
				requestHost: cg,
				runTimeEnvVars: ug,
				search: _g,
				searchDiscoveryUnits: Ag,
				searchQueryId: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Cg.a:
							return t.payload;
						case Cg.b:
							return Rg;
						default:
							return e
					}
				},
				seo: Fg,
				shortcuts: zg,
				sidebarPromotedPosts: Jg,
				streaming: om,
				structuredStyles: jm,
				stylesheets: wm,
				subredditAutocomplete: xm,
				subreddits: vE,
				subredditStickyPosts: _E,
				subscriptions: HE,
				survey: YE,
				tabBadged: XE,
				tags: E_,
				themes: T_,
				toaster: A_,
				tooltip: x_,
				tracing: M_,
				tracking: K_,
				trafficStats: J_,
				transfers: oI,
				trending: uI,
				trophies: bI,
				uploads: gI,
				user: ij,
				userDataRequestPage: hj,
				upvotePromptCountPerSess: vI,
				users: Bj,
				widgets: Object(S.c)({
					idCardIds: Vj,
					menuIds: Qj,
					models: zj,
					moderatorIds: Xj,
					sidebar: Zj
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
				experimentName: r.nc
			}), e => e === r.rd)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.815f4cd5c6d4987165b7.js.map