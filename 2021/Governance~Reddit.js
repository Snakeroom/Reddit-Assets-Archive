// https://www.redditstatic.com/desktop2x/Governance~Reddit.274ce44f5efb27cf53db.js
// Retrieved at 3/30/2021, 3:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit"], {
		"./assets/fonts/NotoMono/font.less": function(e, t, r) {},
		"./node_modules/@r/frames/compiled.js": function(e, t, r) {
			"use strict";
			(function(e) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = arguments,
					s = ".*",
					a = ".postMessage",
					n = {
						targetOrigin: "*"
					},
					c = /\..+$/;

				function o(e) {
					return new RegExp("\\.(?:" + e.join("|") + ")$")
				}

				function d(e) {
					return new RegExp("^http(s)?:\\/\\/" + e.join("|") + "$", "i")
				}
				var i = [s],
					u = d(i),
					l = [a],
					p = o(l),
					b = {},
					f = !1;

				function y(t, r, s) {
					e.addEventListener ? e.addEventListener(t, r, s) : e.attachEvent && e.attachEvent("on" + t, r)
				}

				function m(t, r) {
					e.removeEventListener ? e.removeEventListener(t, r) : e.detachEvent && e.detachEvent("on" + t, r)
				}

				function E(e) {
					return /\*/.test(e)
				}
				var O = t.postMessage = function(e, t, r) {
						var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						c.test(t) || (t += a);
						var o = s;
						Object.keys(n).forEach((function(e) {
							o[e] = n[e]
						})), e.postMessage(JSON.stringify({
							type: t,
							data: r,
							defaultedOptions: o
						}), o.targetOrigin)
					},
					_ = t.receiveMessage = function(e, t, r, s) {
						"string" == typeof e && (s = r, r = t, t = e, e = null), s = s || void 0;
						var a = function(t) {
							for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++) n[c - 1] = arguments[c];
							e && e !== t.source && e.contentWindow !== t.source || r.apply(s, [t].concat(n))
						};
						return y(t, a), {
							off: function() {
								m(t, a)
							}
						}
					},
					h = (t.receiveMessageOnce = function(e, t, s, a) {
						var n = _(e, t, (function() {
							s && s.apply(void 0, r), n.off()
						}), a);
						return n
					}, t.removePostMessageOrigin = function(e) {
						var t = i.indexOf(e); - 1 !== t && (i.splice(t, 1), u = d(i))
					}),
					I = e.CustomEvent;
				if ("undefined" != typeof window && "function" != typeof I) {
					var g = {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					(I = function(e, t) {
						t = t || g;
						var r = document.createEvent("CustomEvent");
						return r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r
					}).prototype = e.Event.prototype
				}
				t.addPostMessageOrigin = function(e) {
					E(e) ? i = [s] : -1 === i.indexOf(e) && (h(s), i.push(e), u = d(i))
				};

				function S(t) {
					if (t.origin === e.location.origin || u.test(t.origin) || "null" === t.origin) {
						var r = {};
						try {
							r = JSON.parse(t.data)
						} catch (t) {}
						var s = r.type;
						if (p.test(s)) {
							var a = s.split(".", 2)[1];
							if (b[a]) b[a].targets.forEach((function(e) {
								return O(e, s, r.data, r.options)
							}));
							var n = new I(s, {
								detail: r.data
							});
							n.source = t.source, e.dispatchEvent(n)
						}
					}
				}
				var D = t.listen = function(e) {
					-1 === l.indexOf(e) && (l.push(e), p = o(l)), f || (y("message", S), f = !0)
				};
				t.stopListening = function(e) {
					var t = l.indexOf(e); - 1 !== t && (l.splice(t, 1), l.length ? p = o(l) : (m("message", S), f = !1))
				}, t.proxy = function(e, t) {
					D(e), Array.isArray(t) || (t = [t]);
					var r = b[e];
					r ? r.targets = [].concat(r.targets, t) : r = {
						targets: t
					}, b[e] = r
				}
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/lodash/isEqualWith.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseIsEqual.js");
			e.exports = function(e, t, r) {
				var a = (r = "function" == typeof r ? r : void 0) ? r(e, t) : void 0;
				return void 0 === a ? s(e, t, void 0, r) : !!a
			}
		},
		"./node_modules/lodash/negate.js": function(e, t) {
			var r = "Expected a function";
			e.exports = function(e) {
				if ("function" != typeof e) throw new TypeError(r);
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0:
							return !e.call(this);
						case 1:
							return !e.call(this, t[0]);
						case 2:
							return !e.call(this, t[0], t[1]);
						case 3:
							return !e.call(this, t[0], t[1], t[2])
					}
					return !e.apply(this, t)
				}
			}
		},
		"./node_modules/lodash/omitBy.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseIteratee.js"),
				a = r("./node_modules/lodash/negate.js"),
				n = r("./node_modules/lodash/pickBy.js");
			e.exports = function(e, t) {
				return n(e, a(s(t)))
			}
		},
		"./node_modules/lodash/union.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseFlatten.js"),
				a = r("./node_modules/lodash/_baseRest.js"),
				n = r("./node_modules/lodash/_baseUniq.js"),
				c = r("./node_modules/lodash/isArrayLikeObject.js"),
				o = a((function(e) {
					return n(s(e, 1, c, !0))
				}));
			e.exports = o
		},
		"./node_modules/lodash/xorWith.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_arrayFilter.js"),
				a = r("./node_modules/lodash/_baseRest.js"),
				n = r("./node_modules/lodash/_baseXor.js"),
				c = r("./node_modules/lodash/isArrayLikeObject.js"),
				o = r("./node_modules/lodash/last.js"),
				d = a((function(e) {
					var t = o(e);
					return t = "function" == typeof t ? t : void 0, n(s(e, c), void 0, t)
				}));
			e.exports = d
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, t, r) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var s = r("./node_modules/ts-error/lib/helpers.js"),
				a = s.setPrototypeOf,
				n = s.getPrototypeOf,
				c = s.defineProperty,
				o = s.objectCreate,
				d = "[object Error]" === (new Error).toString(),
				i = "";

			function u(e) {
				var t, r = this.constructor,
					s = r.name || (null === (t = r.toString().match(/^function\s*([^\s(]+)/)) ? i || "Error" : t[1]),
					o = "Error" === s,
					l = o ? i : s,
					p = Error.apply(this, arguments);
				if (a(p, n(this)), !(p instanceof r && p instanceof u)) {
					p = this;
					Error.apply(this, arguments), c(p, "message", {
						configurable: !0,
						enumerable: !1,
						value: e,
						writable: !0
					})
				}
				if (c(p, "name", {
						configurable: !0,
						enumerable: !1,
						value: l,
						writable: !0
					}), Error.captureStackTrace && Error.captureStackTrace(p, o ? u : r), void 0 === p.stack) {
					var b = new Error(e);
					b.name = p.name, p.stack = b.stack
				}
				return d && c(p, "toString", {
					configurable: !0,
					enumerable: !1,
					value: function() {
						return (this.name || "Error") + (void 0 === this.message ? "" : ": " + this.message)
					},
					writable: !0
				}), p
			}
			i = u.name || "ExtendableError", u.prototype = o(Error.prototype, {
				constructor: {
					value: Error,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t.ExtendableError = u, t.default = t.ExtendableError
		},
		"./node_modules/ts-error/lib/helpers.js": function(e, t, r) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var s = "function" == typeof Object.setPrototypeOf,
				a = "function" == typeof Object.getPrototypeOf,
				n = "function" == typeof Object.defineProperty,
				c = "function" == typeof Object.create,
				o = "function" == typeof Object.prototype.hasOwnProperty;
			t.setPrototypeOf = function(e, t) {
				s ? Object.setPrototypeOf(e, t) : e.__proto__ = t
			};
			t.getPrototypeOf = function(e) {
				return a ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var d = !1;
			t.defineProperty = function e(t, r, s) {
				if (n && !d) try {
					Object.defineProperty(t, r, s)
				} catch (a) {
					d = !0, e(t, r, s)
				} else t[r] = s.value
			};
			var i = function(e, t) {
				return o ? e.hasOwnProperty(e, t) : void 0 === e[t]
			};
			t.hasOwnProperty = i;
			t.objectCreate = function(e, t) {
				if (c) return Object.create(e, t);
				var r = function() {};
				r.prototype = e;
				var s = new r;
				if (void 0 === t) return s;
				if ("null" == typeof t) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof t)
					for (var a in t) i(t, a) && (s[a] = t[a].value);
				return s
			}
		},
		"./src/graphql/operations/CrowdControlLevelInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"975a7920607d"}')
		},
		"./src/graphql/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/graphql/operations/FetchSubredditStreamingModSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"df4f7fe92d1f"}')
		},
		"./src/graphql/operations/GetSubredditChatSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"63d6a697b823"}')
		},
		"./src/graphql/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"4787b154b63b"}')
		},
		"./src/graphql/operations/UpdateSubredditChatSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"bdb05b8c7a65"}')
		},
		"./src/graphql/operations/UpdateSubredditStreamingModSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"1f690708b8b1"}')
		},
		"./src/graphql/operations/UserDataExportEligibility.json": function(e) {
			e.exports = JSON.parse('{"id":"3817c69d7a39"}')
		},
		"./src/graphql/operations/VerifyRecaptchaToken.json": function(e) {
			e.exports = JSON.parse('{"id":"c1242f999b6c"}')
		},
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
			const a = e => `${e}_REQUESTED`,
				n = e => `${e}_SUCCEEDED`,
				c = e => `${e}_FAILED`;

			function o(e) {
				const t = a(e),
					r = n(e),
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
			const i = (e, t, r) => (s = d.New, a) => {
				switch (a.type) {
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
		"./src/lib/forceHttps/index.ts": function(e, t, r) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, r) {
			"use strict";

			function s(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/makeProductOfferKey/index.ts": function(e, t, r) {
			"use strict";

			function s(e, t) {
				return `${e}_${t}`
			}
			r.d(t, "a", (function() {
				return s
			}))
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
				a = r("./src/reddit/helpers/loadThirdPartyScript.ts");
			const n = e => "object" == typeof e && null !== e,
				c = () => "undefined" != typeof window && n(window) && n(window.grecaptcha) && n(window.grecaptcha.enterprise),
				o = () => c() ? window.grecaptcha.enterprise : void 0,
				d = e => `https://www.google.com/recaptcha/enterprise.js?render=${e}`,
				i = e => Object(a.a)(d(e), c),
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
			const y = new class {
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
			t.b = y
		},
		"./src/lib/reCaptchaEnterprise/reCaptcha.css": function(e, t, r) {},
		"./src/reddit/actions/apiRequestHeaders.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "API_REQUEST_HEADERS__set";
			Object(s.a)(a)
		},
		"./src/reddit/actions/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				n = Object(s.a)(a)
		},
		"./src/reddit/actions/badge.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "k", (function() {
				return D
			})), r.d(t, "l", (function() {
				return T
			})), r.d(t, "m", (function() {
				return v
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/governance/errorToast.ts"),
				n = r("./src/reddit/endpoints/governance/badges.ts");
			const c = "BADGE__BADGE_MODAL_OPENED",
				o = "BADGE__BADGE_APPLICATION_SUCCESS",
				d = "BADGE__BADGE_APPLICATION_FAILURE",
				i = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				u = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				l = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				p = "BADGE__USER_BADGES_FETCH_SUCCESS",
				b = "BADGE__USER_BADGES_FETCH_FAILURE",
				f = "BADGE__USER_BADGES_FETCH_PENDING",
				y = Object(s.a)(c),
				m = Object(s.a)(o),
				E = Object(s.a)(d),
				O = (Object(s.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(s.a)(i)),
				_ = Object(s.a)(u),
				h = Object(s.a)(l),
				I = Object(s.a)(p),
				g = Object(s.a)(b),
				S = Object(s.a)(f),
				D = ({
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
						r(m({
							badgeIds: e,
							subredditId: t,
							userId: d.id
						}));
						const l = await Object(n.a)(c(), t, i, u);
						l.ok || (r(E({
							badgeIds: e,
							subredditId: t,
							error: l.error,
							previousBadgeIds: s,
							userId: d.id
						})), Object(a.a)(r, l.error))
					}
				}, T = ({
					subredditId: e,
					userIds: t
				}) => async (r, s, {
					apiContext: a
				}) => {
					r(h({
						subredditId: e
					}));
					const c = await Object(n.b)(a(), e, t);
					c.ok ? r(O({
						...c.body,
						subredditId: e
					})) : r(_({
						subredditId: e,
						error: c.error
					}))
				}, v = ({
					subredditId: e
				}) => async (t, r, {
					apiContext: s
				}) => {
					const a = r().user.account;
					if (a) {
						t(S({
							subredditId: e
						}));
						const r = await Object(n.c)(s(), e, a.id);
						r.ok ? t(I({
							...r.body,
							subredditId: e
						})) : t(g({
							subredditId: e,
							error: r.error
						}))
					}
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
				return O
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/graphql/operations/FetchBlockedRedditorsInfo.json"),
				n = r("./src/lib/makeGqlRequest/index.ts");
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
				y = Object(s.a)(u),
				m = Object(s.a)(l),
				E = Object(s.a)(p),
				O = () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t(),
						a = Object(o.a)(s);
					if (Object(o.b)(s) || a.timestamp && Date.now() - a.timestamp < 36e6) return;
					let n = !1,
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
								if (e(m(s.map(e => e.node.id))), r) {
									const {
										hasNextPage: e,
										endCursor: t
									} = r;
									n = e, d = t || ""
								}
							} else n = !1
						} else {
							n = !1;
							const t = s.error ? s.error.type : "unknown error";
							e(y({
								message: t
							}))
						}
					} while (n)
				}
		},
		"./src/reddit/actions/chat/constants.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.anybody = "Everyone", e.account_age_30_days = "Accounts older than 30 days", e.nobody = "Nobody"
				}(s || (s = {}))
		},
		"./src/reddit/actions/chat/userSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "c", (function() {
				return g
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/config.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				u = r("./src/reddit/constants/headers.ts");
			var l = r("./src/reddit/selectors/telemetry.ts");
			var p = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/telemetry/index.ts"),
				f = r("./src/reddit/actions/chat/constants.ts");
			const y = Object(a.a)("USER_SETTINGS__FETCH_PENDING"),
				m = Object(a.a)("USER_SETTINGS__FETCH_FAILURE"),
				E = "USER_SETTINGS__UPDATE_SUCCESS",
				O = Object(a.a)(E),
				_ = () => async (e, t, {
					apiContext: r
				}) => {
					e(y());
					const s = await (e => Object(d.a)(Object(i.a)(e, [u.a]), {
						endpoint: `${c.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
						method: o.cb.GET
					}))(r());
					if (s.ok) {
						const t = {
							...s.body
						};
						e(O({
							invitePolicy: f.a[t.invite_policy]
						}))
					} else e(m(s.error))
				}, h = Object(a.a)("USER_SETTINGS__SAVE_PENDING"), I = Object(a.a)("USER_SETTINGS__SAVE_FAILURE"), g = e => async (t, r, {
					apiContext: a
				}) => {
					const y = r(),
						{
							invitePolicy: m
						} = e,
						E = Object.keys(f.a).find(e => f.a[e] === m);
					if (E) {
						t(h());
						const e = await (async (e, t) => Object(d.a)(Object(i.a)(t, [u.a]), {
							endpoint: `${c.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
							method: o.cb.PUT,
							data: JSON.stringify({
								invite_policy: e
							})
						}))(E, a());
						if (Object(b.a)((e => t => ({
								source: "settings_privacy",
								action: "save",
								noun: "receive_chat_invites",
								setting: {
									value: e,
									oldValue: e
								},
								...Object(l.defaults)(t)
							}))(E)(y)), e.ok) {
							const e = f.a[E];
							t(O({
								invitePolicy: e
							})), t(Object(n.f)({
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
				return y
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "i", (function() {
				return _
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "h", (function() {
				return v
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/toaster.ts"),
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
					method: o.cb.POST,
					endpoint: `${e.apiUrl}/api/claimgold`,
					data: s
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(l.a)(e)
				})
			}, b = r("./src/reddit/helpers/genericServerError/index.ts"), f = r("./src/reddit/selectors/claimgold.ts");
			const y = "CLAIMGOLD__OPEN_CLAIMGOLD_MODAL",
				m = "CLAIMGOLD__CLOSE_CLAIMGOLD_MODAL",
				E = Object(a.a)(y),
				O = Object(a.a)(m),
				_ = () => async (e, t) => {
					const r = t();
					Object(f.b)(r) ? e(O()) : e(E())
				}, h = "CLAIMGOLD_UPDATE_CODE", I = Object(a.a)(h), g = "CLAIM_GOLD__TRIGGER_LOADER", S = "CLAIM_GOLD__CLAIM_GOLD_PENDING", D = "CLAIM_GOLD__CLAIM_GOLD_SUCCESSFUL", T = "CLAIM_GOLD__CLAIM_GOLD_FAILED", v = () => async (e, t, {
					apiContext: r
				}) => {
					const s = {
						code: t().claimGold.code
					};
					e(j());
					try {
						const t = await p(r(), s);
						t.error ? e(P(t)) : e(L())
					} catch (a) {
						e(P(a))
					}
				}, w = Object(a.a)(g), A = Object(a.a)(S), j = () => async (e, t) => {
					e(A()), window.setTimeout(() => {
						t().claimGold.api.pending && e(w())
					}, 2e3)
				}, R = Object(a.a)(T), P = e => async (t, r) => {
					await t(R({
						...e,
						error: e.error || Object(b.a)()
					}));
					const s = r().claimGold.api.error;
					s && t(Object(n.f)({
						kind: c.b.Error,
						duration: n.a,
						text: s
					}))
				}, C = Object(a.a)(D), L = () => async (e, t) => {
					e(C()), e(Object(n.f)({
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
				return n
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/helpers/trackers/commentList.ts");
			const n = "COMMENTLIST__MARKED_END",
				c = "COMMENTLIST__UNMARKED_END",
				o = Object(s.a)(n),
				d = Object(s.a)(c),
				i = (e, t) => async (r, s) => {
					const n = s();
					e in n.profileCommentsPage.fetchedTokens ? e in n.profileCommentsPage.commentIds ? r(d({
						listingKey: e
					})) : Object(a.a)(n, e) : r(o({
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
				return a
			}));
			const s = "COMMENTS_LIST__EXPANDED",
				a = "COMMENTS_LIST__TRUNCATED"
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
				return a
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			}));
			const s = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				a = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				n = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				c = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return n
			}));
			const s = "ECONOMICS__ME__ME_DATA_SUCCESS",
				a = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				n = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return n
			}));
			const s = 120,
				a = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				n = "ON_DELETE_CUSTOM_EMOJI_SUCCESS"
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "EMBEDS__UNLOADABLE",
				n = "EMBEDS__LOADABLE",
				c = Object(s.a)(a),
				o = Object(s.a)(n)
		},
		"./src/reddit/actions/emoji.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return S
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "g", (function() {
				return R
			})), r.d(t, "f", (function() {
				return P
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "q", (function() {
				return M
			})), r.d(t, "p", (function() {
				return F
			})), r.d(t, "l", (function() {
				return B
			})), r.d(t, "m", (function() {
				return q
			})), r.d(t, "j", (function() {
				return H
			})), r.d(t, "k", (function() {
				return V
			})), r.d(t, "b", (function() {
				return K
			})), r.d(t, "n", (function() {
				return $
			})), r.d(t, "e", (function() {
				return X
			})), r.d(t, "o", (function() {
				return z
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/forEach.js"),
				n = r.n(a),
				c = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/lib/uploadToS3/index.ts"),
				u = r("./src/reddit/constants/headers.ts");
			const l = async (e, t) => Object(o.a)(Object(d.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/v1/${t}/emojis/all`,
				method: c.cb.GET,
				type: "json"
			}).then(e => (e.ok && (e.body = (e => {
				let t;
				const r = n()(e, (e, r) => ("snoomojis" !== r && (t = r), n()(e, (t, r) => {
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
				y = r("./src/reddit/helpers/getGenericUploadError.ts"),
				m = r("./src/reddit/helpers/getS3KeyFromUrl/index.ts"),
				E = r("./src/reddit/helpers/media/index.ts"),
				O = r("./src/reddit/models/Emoji/index.ts"),
				_ = r("./src/reddit/models/Image/index.tsx"),
				h = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/emojis.ts"),
				g = r("./src/reddit/selectors/subreddit.ts");
			const S = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				D = Object(p.a)(S),
				T = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				v = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				w = Object(p.a)(T),
				A = Object(p.a)(v),
				j = "GET_ALL_EMOJIS_PENDING",
				R = "GET_ALL_EMOJIS_LOADED",
				P = "GET_ALL_EMOJIS_FAILED",
				C = Object(p.a)(j),
				L = Object(p.a)(R),
				N = Object(p.a)(P),
				k = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				x = Object(p.a)(k),
				U = e => ({
					text: s.fbt._("Failed to save emoji", null, {
						hk: "3i6FC2"
					}),
					buttonText: s.fbt._("Retry", null, {
						hk: "1XMjgA"
					}),
					buttonAction: F(e)
				}),
				M = ({
					imageData: e,
					subredditId: t
				}) => async (r, s, a) => {
					const n = s(),
						l = Object(g.T)(n, {
							subredditId: t
						}).name;
					r(Object(b.k)(e));
					const p = e.file,
						f = await Object(E.g)(p),
						y = await (async (e, t, r, s) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
							method: c.cb.POST,
							data: {
								filepath: r,
								mimetype: s
							}
						}))(a.apiContext(), l, p.name, f);
					let m = !1;
					if (y.ok) {
						const t = await (async (e, t, r) => Object(i.a)(r, t))(a.apiContext(), y.body.s3UploadLease, p);
						if (t.ok) {
							if (!s().imageUploads[e.id]) return Object(_.d)(e), !1;
							const a = decodeURIComponent(t.body.PostResponse.Location),
								n = y.body.websocketUrl,
								c = Object(_.n)(e, a, n);
							r(Object(b.j)(c)), m = !0
						} else {
							const s = Object(_.k)(e, t.error);
							r(Object(b.i)(s))
						}
					} else {
						const t = Object(_.k)(e, y.error);
						r(Object(b.i)(t))
					}
					return m
				}, G = (e, t) => async (r, s, a) => {
					const {
						imageData: n,
						subredditId: i,
						emojiName: l,
						settings: p
					} = e, y = Object(m.a)(n.url), E = s(), O = Object(g.T)(E, {
						subredditId: i
					}).name, h = await (async (e, t, r, s, a) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: c.cb.POST,
						data: {
							s3_key: r,
							name: s,
							mod_flair_only: a.modFlairOnly,
							post_flair_allowed: a.postFlairAllowed,
							user_flair_allowed: a.userFlairAllowed
						}
					}))(a.apiContext(), O, y, l, p);
					if (!h.ok) {
						const s = Object(_.k)(n, h.error);
						r(Object(b.i)(s)), r(Object(f.f)(U(e))), t && t.close()
					}
					return h.ok
				}, F = e => async (t, r, s) => {
					const {
						imageData: a,
						subredditId: n,
						emojiName: c,
						settings: o
					} = e;
					if (t(Object(b.k)(a)), !a.websocketUrl) return t(Object(f.f)({
						text: "Could not upload emoji"
					}));
					let d;
					const i = new WebSocket(a.websocketUrl);
					return i.onopen = async () => {
						d = await G(e, i)(t, r, s)
					}, i.onmessage = r => {
						const s = JSON.parse(r.data);
						if ("success" === s.type) {
							d = !0;
							const e = s.payload.emoji_url,
								r = Object(_.o)(a, e);
							t(Object(b.l)(r));
							const i = Object(O.e)(c, r.url, n, o);
							t(D(i)), t(B(n))
						} else {
							const r = Object(y.a)(c),
								s = Object(_.k)(a, r);
							t(Object(b.i)(s)), t(Object(f.f)(U(e)))
						}
						i.close()
					}, i.onerror = r => {
						d = !1;
						const s = Object(y.a)(c),
							n = Object(_.k)(a, s);
						t(Object(b.i)(n)), t(Object(f.f)(U(e))), i.close()
					}, d
				}, B = e => async (t, r, {
					apiContext: s
				}) => {
					const a = r();
					if (Object(I.a)(a, e)) return;
					const n = Object(g.T)(a, {
						subredditId: e
					}).name;
					t(C(e));
					const c = await l(s(), n);
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
				}, q = e => async (t, r, {
					apiContext: s
				}) => {
					r().emojis[e] || await t(B(e))
				}, H = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const i = a(),
						l = Object(g.T)(i, {
							subredditId: t
						}).name,
						p = await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${r}/emoji/${t}`,
							method: c.cb.DELETE,
							type: "json"
						}))(n(), e, l);
					if (p.ok) {
						r(w({
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
				}, V = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const i = a(),
						l = Object(g.T)(i, {
							subredditId: e
						}).name;
					if ((await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: c.cb.POST,
							data: {
								subreddit: t,
								enable: r
							}
						}))(n(), l, t)).ok) {
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
				}, K = "EMOJI_CUSTOM_SIZE_UPDATED", W = Object(p.a)(K), $ = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const i = a(),
						l = Object(g.T)(i, {
							subredditId: e
						}).name;
					(await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji_custom_size`,
						method: c.cb.POST,
						data: r
					}))(n(), l, t)).ok ? r(W({
						subredditId: e,
						emojiCustomSize: t
					})) : r(f.f({
						kind: h.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, X = "EMOJI_PERMISSIONS_UPDATED", Q = Object(p.a)(X), z = (e, t, r, a) => async (n, i, {
					apiContext: l
				}) => {
					const p = i(),
						b = Object(g.T)(p, {
							subredditId: a
						}).name;
					(await (async (e, t, r, s) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${r}/emoji_permissions.json`,
						method: c.cb.POST,
						data: {
							name: t,
							post_flair_allowed: s.postFlairAllowed,
							user_flair_allowed: s.userFlairAllowed,
							mod_flair_only: s.modFlairOnly
						}
					}))(l(), e, b, r)).ok ? (n(Q({
						emojiName: e,
						isSnoomoji: t,
						settings: r,
						subredditId: a
					})), n(f.f({
						kind: h.b.SuccessCommunityGreen,
						text: s.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : n(f.f({
						kind: h.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}
		},
		"./src/reddit/actions/experiments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			r("./src/reddit/endpoints/user/index.ts"), r("./src/reddit/models/Post/index.ts"), r("./src/reddit/selectors/telemetry.ts");
			const a = "EXPERIMENTS__REQUEST_LOADED",
				n = (Object(s.a)("EXPERIMENTS__REQUEST_PENDING"), Object(s.a)("EXPERIMENTS__REQUEST_FAILED"), Object(s.a)(a), "EXPERIMENTS__SET_EXPERIMENT_OVERRIDE"),
				c = Object(s.a)(n)
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
				a = r("./src/lib/loadWithRetries/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/structuredStyles/index.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/models/StructuredStyles/index.ts"),
				i = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/selectors/subreddit.ts");
			const l = "STRUCTURED_STYLES__EXPORT_THEME_PENDING",
				p = "STRUCTURED_STYLES__EXPORT_THEME_LOADED",
				b = "STRUCTURED_STYLES__EXPORT_THEME_FAILED",
				f = Object(n.a)(l),
				y = Object(n.a)(p),
				m = Object(n.a)(b),
				E = Object(n.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				O = Object(n.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				_ = Object(n.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				h = e => async (t, n) => {
					t(f());
					const c = n(),
						d = Object(u.T)(c, {
							subredditId: e
						}).name,
						l = c.structuredStyles.models[e],
						p = await Object(a.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ExportTheme")]).then(r.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						b = await p(l, d);
					b.ok ? (t(y()), t(Object(o.f)({
						kind: i.b.SuccessMod,
						text: s.fbt._("Theme successfully exported", null, {
							hk: "24KHqI"
						})
					}))) : (t(m(b.error)), t(Object(o.f)({
						kind: i.b.Error,
						text: s.fbt._("Sorry, theme failed to export", null, {
							hk: "2MC4jC"
						})
					})))
				}, I = e => async (t, n) => {
					t(E());
					const u = await Object(a.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ImportTheme")]).then(r.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						l = await u(e);
					l.ok ? (t(O()), t(Object(o.f)({
						kind: i.b.SuccessMod,
						text: s.fbt._("Theme successfully imported", null, {
							hk: "42FErS"
						})
					})), 0 !== Object.keys(l.attributes).length && t(Object(c.d)(Object(d.j)(l.attributes)))) : (t(_(l.error)), t(Object(o.f)({
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
				return a
			}));
			const s = "FLAIR_PREVIEW_EXAMPLE_POST_CREATED",
				a = "FLAIR_PREVIEW_EXAMPLE_POST_DELETED"
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
				a = r("./src/reddit/actions/login.ts"),
				n = r("./src/reddit/constants/experiments.ts"),
				c = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/activeModalId.ts"),
				d = r("./src/reddit/selectors/experiments/googleOneTap.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const u = "GOOGLE_ONE_TAP_ENABLED",
				l = Object(s.a)(u),
				p = () => async (e, t) => {
					const r = t(),
						s = Object(i.J)(r),
						a = Object(d.b)(r);
					s && Object(d.d)(a) && e(l())
				}, b = () => async (e, t) => {
					const r = t(),
						s = Object(i.J)(r),
						n = Object(d.b)(r),
						c = !!Object(o.a)(r);
					s || c || !Object(d.e)(n) && !Object(d.d)(n) || e(Object(a.e)())
				}, f = e => {
					Object(c.d)(e, {
						experimentName: n.N
					})
				}
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return n
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
				return y
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "p", (function() {
				return O
			})), r.d(t, "q", (function() {
				return _
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "s", (function() {
				return I
			})), r.d(t, "t", (function() {
				return g
			})), r.d(t, "u", (function() {
				return S
			})), r.d(t, "v", (function() {
				return D
			})), r.d(t, "w", (function() {
				return T
			})), r.d(t, "x", (function() {
				return v
			}));
			const s = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				a = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				n = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				c = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				o = "POLL_VOTE_SUCCESS",
				d = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				i = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				y = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				m = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				E = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				O = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				_ = "GOVERNANCE__TRANSFER_FAILURE",
				h = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				I = "GOVERNANCE__TRANSFER_PENDING",
				g = "GOVERNANCE__TRANSFER_SUCCESS",
				S = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				D = "GOVERNANCE__WALLETS_FETCH_PENDING",
				T = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				v = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				n = r("./src/reddit/models/Toast/index.ts");

			function c(e, t) {
				e(Object(s.f)({
					duration: 5e3,
					kind: n.b.Error,
					text: Object(a.a)(t)
				}))
			}
		},
		"./src/reddit/actions/harbergerTax/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
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
				a = "HARBERGER_TAX__BANNER_PURCHASE_MODAL_OPENED",
				n = "HARBERGER_TAX__BANNER_CRYPTO_MANAGE_MODAL_OPENED",
				c = "HARBERGER_TAX__BANNER_CRYPTO_PURCHASE_MODAL_OPENED",
				o = "HARBERGER_TAX__BANNER_PURCHASE_FAILURE",
				d = "HARBERGER_TAX__BANNER_PURCHASE_PENDING",
				i = "HARBERGER_TAX__BANNER_PURCHASE_SUCCESS",
				u = "HARBERGER_TAX__BANNER_UPDATE_FAILURE",
				l = "HARBERGER_TAX__BANNER_UPDATE_PENDING",
				p = "HARBERGER_TAX__BANNER_UPDATE_SUCCESS"
		},
		"./src/reddit/actions/isTrackingCrossposts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/endpoints/post/index.tsx");
			const n = "TRACKING_CROSSPOSTS_LOADED",
				c = Object(s.a)(n),
				o = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = await Object(a.e)(s(), {
						postId: e
					});
					if (n.ok) {
						const {
							isTrackingCrossposts: r
						} = n.body.data.postInfoById;
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
				return a
			})), r.d(t, "c", (function() {
				return n
			}));
			const s = "LEADERBOARD__LEADERBOARD_FETCH_FAILURE",
				a = "LEADERBOARD__LEADERBOARD_FETCH_PENDING",
				n = "LEADERBOARD__LEADERBOARD_FETCH_SUCCESS"
		},
		"./src/reddit/actions/meta.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "META__GEO_CHANGED",
				n = Object(s.a)(a),
				c = "META__META_RECEIVED",
				o = (Object(s.a)(c), "META__SET_LOCALE");
			Object(s.a)(o)
		},
		"./src/reddit/actions/multireddit/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return s
			})), r.d(t, "r", (function() {
				return a
			})), r.d(t, "s", (function() {
				return n
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
				return y
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "o", (function() {
				return O
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "A", (function() {
				return S
			})), r.d(t, "B", (function() {
				return D
			})), r.d(t, "z", (function() {
				return T
			})), r.d(t, "y", (function() {
				return v
			})), r.d(t, "v", (function() {
				return w
			})), r.d(t, "w", (function() {
				return A
			})), r.d(t, "x", (function() {
				return j
			})), r.d(t, "d", (function() {
				return R
			}));
			const s = "MULTIREDDIT__MORE_POSTS_FAILED",
				a = "MULTIREDDIT__MORE_POSTS_LOADED",
				n = "MULTIREDDIT__MORE_POSTS_PENDING",
				c = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				o = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				d = "MULTIREDDIT__CREATE_FAILURE",
				i = "MULTIREDDIT__CREATE_PENDING",
				u = "MULTIREDDIT__CREATE_SUCCESS",
				l = "MULTIREDDIT__DELETE_PENDING",
				p = "MULTIREDDIT__DELETE_SUCCESS",
				b = "MULTIREDDIT__DELETE_FAILURE",
				f = "MULTIREDDIT__DUPLICATE_PENDING",
				y = "MULTIREDDIT__DUPLICATE_SUCCESS",
				m = "MULTIREDDIT__DUPLICATE_FAILURE",
				E = "MULTIREDDIT__EDIT_FAILURE",
				O = "MULTIREDDIT__EDIT_PENDING",
				_ = "MULTIREDDIT__EDIT_SUCCESS",
				h = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				I = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				g = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				S = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				D = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				T = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				v = 10,
				w = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				A = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				j = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
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
				return a
			})), r.d(t, "c", (function() {
				return n
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
				a = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				n = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
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
				return a
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			const s = "PUSH__GET_PREFERENCES_PENDING",
				a = "PUSH__GET_PREFERENCES_LOADED",
				n = "PUSH__GET_PREFERENCES_FAILED",
				c = "PUSH__SET_PREFERENCES_PENDING",
				o = "PUSH__SET_PREFERENCES_LOADED",
				d = "PUSH__SET_PREFERENCES_FAILED"
		},
		"./src/reddit/actions/notificationsInbox/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "f", (function() {
				return i
			}));
			const s = "INBOX_NOTIFICATIONS__PENDING",
				a = "INBOX_NOTIFICATIONS__LOADED",
				n = "INBOX_NOTIFICATIONS__FAILED",
				c = "INBOX_NOTIFS_SET_OVERFLOW_MENU_ID",
				o = "INBOX_NOTIFICATIONS__REMOVE_NOTIFICATION",
				d = "INBOX_NOTIFS__MARK_AS_READ",
				i = "INBOX_NOTIFS__SET_EARLIER_DIVIDER_INDEX"
		},
		"./src/reddit/actions/nps.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "d", (function() {
				return h
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
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
				y = "NPS__URL_FAILED",
				m = Object(s.a)(b),
				E = Object(s.a)(f),
				O = Object(s.a)(y);
			let _ = !1;
			const h = () => async (e, t, r) => {
				const s = t();
				if (s.nps.pending) return;
				if (_) return;
				e(m());
				const i = s.platform.currentPage && s.platform.currentPage.queryParams.feature || "",
					u = !!s.user.account,
					l = await ((e, t, r) => Object(c.a)(Object(o.a)(e, [d.a]), {
						data: {
							feature: t,
							app_name: "web2x"
						},
						endpoint: `${r?a.a.oauthUrl:a.a.apiUrl}/api/jail/asknicely${r?"":".json"}`,
						method: n.cb.GET,
						traceRequestName: "get_nps_survey"
					}))(r.apiContext(), i, u);
				if (l.ok) {
					const t = l.body;
					t.dest ? (e(E(t)), p(t.dest), _ = !0) : e(O())
				} else e(O())
			}
		},
		"./src/reddit/actions/pages/appeal/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "APPEAL_PAGE_LOADED",
				a = "APPEAL_PAGE_FAILED"
		},
		"./src/reddit/actions/pages/chatSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "f", (function() {
				return C
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/difference.js"),
				n = r.n(a),
				c = r("./src/telemetry/index.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/graphql/operations/GetSubredditChatSettings.json"),
				p = r("./src/lib/makeGqlRequest/index.ts");
			var b = (e, t) => Object(p.a)(e, {
					...l,
					variables: t
				}),
				f = r("./src/graphql/operations/UpdateSubredditChatSettings.json");
			var y = (e, t) => Object(p.a)(e, {
					...f,
					variables: t
				}),
				m = r("./src/reddit/selectors/telemetry.ts"),
				E = r("./src/telemetry/models/Event.ts");
			var O = r("./src/reddit/models/ChatSettingsPage/index.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/selectors/chat.ts"),
				I = r("./src/reddit/selectors/chatSettingsPage.ts");
			const g = "FETCH_CHAT_SETTINGS__LOADED",
				S = "FETCH_CHAT_SETTINGS__FAILED",
				D = "FETCH_CHAT_SETTINGS__PENDING",
				T = "UPDATE_CHAT_SETTINGS__LOADED",
				v = Object(d.a)(g),
				w = Object(d.a)(S),
				A = Object(d.a)(D),
				j = Object(d.a)(T),
				R = e => async (t, r) => {
					const s = {
						subredditId: e
					};
					return !!Object(I.b)(r(), s) || (t(A(s)), !1)
				}, P = e => async (t, r, {
					gqlContext: s
				}) => {
					const a = {
						subredditId: e
					};
					if (await t(R(e))) return;
					let n = null;
					const c = await b(s(), a);
					if (c.ok) {
						const t = c.body || {},
							s = t.data && t.data.subredditInfoById,
							o = s && s.chatSettings,
							d = !Object(h.c)(r(), a),
							i = Object(O.c)(o, e, d);
						n = {
							...a,
							chatSettings: i
						}
					}
					if (n) t(v(n));
					else {
						const r = c.error || {
							type: o.E.UNKNOWN_ERROR
						};
						t(w({
							...a,
							error: r
						})), i.c.withScope(t => {
							t.setExtra("info", {
								subredditId: e,
								responseBody: c.body,
								responseOk: c.ok
							}), i.c.captureMessage("Missing subreddit chat settings!")
						})
					}
				}, C = (e, t, r) => async (a, c, {
					gqlContext: d
				}) => {
					if (await a(R(e))) return [];
					let i, l = !1;
					const p = n()(r, t),
						b = Object(O.b)(p);
					if (b && b.length) {
						const t = {
								subredditId: e,
								subredditChatSettings: b
							},
							r = await y(d(), {
								input: t
							});
						if (r.ok) {
							const e = (r.body || {}).data.updateSubredditChatSettings;
							l = !!e && e.ok
						} else i = r && r.error || {
							type: o.E.UNKNOWN_ERROR
						}
					}
					return l ? (a(j({
						subredditId: e,
						chatSettings: r
					})), a(N(t, p)), r) : (i && a(w({
						subredditId: e,
						error: i
					})), a(j({
						subredditId: e,
						chatSettings: t
					})), a(Object(u.f)({
						duration: u.a,
						id: "CHAT_SETTING_UPDATE_ERROR",
						kind: _.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3HpR6h"
						})
					})), t)
				}, L = {
					start_chatting_opt_out: (e, t, r) => ({
						source: E.b.Chat,
						action: E.a.OptOut,
						noun: "down_to_chat_subreddit",
						subreddit: Object(m.subreddit)(e),
						setting: {
							oldValue: t,
							value: r
						},
						...Object(m.defaults)(e)
					})
				}, N = (e, t) => async (r, s) => {
					t.forEach(t => {
						if (t && t.settingId) {
							const r = L[t.settingId],
								a = e.find(e => e.settingId === t.settingId);
							if (r && a) {
								const e = r(s(), a.state, t.state);
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
				a = r("./src/reddit/actions/preferences.ts"),
				n = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				o = r("./src/reddit/helpers/trackers/screenview.ts"),
				d = r("./src/reddit/models/User/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const u = "PAGE__PROFILE_MOD_SETTINGS_LOADED",
				l = Object(s.a)(u),
				p = e => async (t, r) => {
					const s = [t(a.z()), t(Object(n.d)(e.params.profileName))];
					await Promise.all(s);
					const u = Object(i.i)(r());
					u ? (await t(Object(n.b)(Object(d.e)(u))), t(l()), Object(o.p)(r(), !0)) : Object(c.a)(t, r())
				}
		},
		"./src/reddit/actions/pages/report/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "a", (function() {
				return c
			}));
			const s = "REPORT_PAGE__FAILED",
				a = "REPORT_PAGE__PENDING",
				n = "REPORT_PAGE__LOADED",
				c = "REPORT_PAGE_INITIAL_REASON__SET"
		},
		"./src/reddit/actions/pages/subredditWiki/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "PAGE__SUBREDDIT_WIKI_PAGE_PENDING",
				a = "PAGE__SUBREDDIT_WIKI_PAGE_LOADED",
				n = "PAGE__SUBREDDIT_WIKI_PAGE_FAILED"
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
				return m
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/endpoints/me/index.ts"),
				n = r("./src/graphql/operations/UserDataExportEligibility.json"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				i = r("./src/reddit/selectors/userDataRequest.ts");
			const u = "USER_DATA_REQUEST_PAGE_LOADING",
				l = "USER_DATA_REQUEST_PAGE_LOADED",
				p = "USER_DATA_REQUEST_PAGE_FAILED",
				b = Object(s.a)(u),
				f = Object(s.a)(l),
				y = Object(s.a)(p),
				m = () => async (e, t, {
					apiContext: r,
					gqlContext: s
				}) => {
					const u = t(),
						l = Object(d.i)(u),
						p = Object(i.b)(u);
					if (l && p.success) return;
					e(b());
					const m = await Object(a.a)(r());
					if (!m.ok || !m.body) return void e(y(m.error));
					if (!m.body.account) return void Object(o.a)(e, u);
					const E = await (e => Object(c.a)(e, {
						...n
					}))(s());
					if (!E.ok) return void e(y());
					const O = m.body,
						_ = E.body;
					e(f({
						account: O.account,
						userDataExportEligibility: _.data.identity.userDataExportEligibility.isUserEligibleForDataExport
					}))
				}
		},
		"./src/reddit/actions/polls.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "POLLS__POLL_CREATION_UPDATED",
				n = Object(s.a)(a)
		},
		"./src/reddit/actions/postLevelCrowdControl.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/endpoints/crowdControl/index.ts");
			const n = "POST_LEVEL_CC_LOADED",
				c = Object(s.a)(n),
				o = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = await Object(a.b)(s(), e);
					if (n.ok) {
						const r = n.body.data.postInfoById.crowdControlLevel;
						t(c({
							[e]: r
						}))
					}
				}
		},
		"./src/reddit/actions/postList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = (r("./src/reddit/actions/embedAndImage.ts"), r("./src/reddit/actions/video.ts"), r("./src/reddit/helpers/trackers/postList.ts"));
			r("./src/reddit/constants/postLayout.ts"), r("./src/reddit/models/Media/index.ts"), r("./src/reddit/selectors/platform.ts"), r("./src/reddit/selectors/posts.ts");
			r("./src/reddit/selectors/video.ts");
			const n = "POSTLIST__MARKED_END",
				c = "POSTLIST__UNMARKED_END",
				o = Object(s.a)(n),
				d = Object(s.a)(c),
				i = (e, t) => async (r, s) => {
					const n = s();
					e in n.listings.postOrder.fetchedTokens ? e in n.listings.postOrder.ids ? r(d({
						listingKey: e
					})) : a.j(n, e) : r(o({
						listingKey: e,
						listingName: t
					}))
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
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
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
					const y = await (async (e, t, r) => Object(n.a)(Object(c.a)(e, [o.a]), {
						endpoint: Object(d.a)(`${e.apiUrl}/api/presence`),
						method: a.cb.POST,
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
							a = {};
						return t.forEach(e => {
							a[e] = s.has(e)
						}), {
							presentUsers: a
						}
					}))(p(), Array.from(f), r);
					s(l(y))
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
				return f
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "j", (function() {
				return g
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/governance/errorToast.ts"),
				n = r("./src/reddit/endpoints/governance/badges.ts"),
				c = r("./src/reddit/endpoints/governance/products/badges.ts");
			const o = "PRODUCT__BADGE_PURCHASE_OPENED",
				d = "PRODUCT__BADGE_PURCHASE_SUCCESS",
				i = "PRODUCT__BADGE_PURCHASE_FAILURE",
				u = "PRODUCT__BADGE_PURCHASE_PENDING",
				l = "PRODUCT__FETCH_SUCCESS",
				p = "PRODUCT__FETCH_FAILURE",
				b = "PRODUCT__FETCH_PENDING",
				f = Object(s.a)(o),
				y = Object(s.a)(d),
				m = Object(s.a)(i),
				E = Object(s.a)(u),
				O = Object(s.a)(l),
				_ = Object(s.a)(p),
				h = Object(s.a)(b),
				I = ({
					productId: e
				}) => async (t, r, {
					apiContext: s
				}) => {
					const o = r(),
						d = o.products.models[e],
						i = o.user.account,
						u = !!o.products.api.purchase.pending[e];
					if (d && d.price && !u) {
						t(E({
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
						if (r.ok && i && (o = await Object(n.c)(s(), d.subredditId, i.id)), r.ok) {
							if (o && o.ok) {
								const {
									badges: e,
									userOwnedBadges: s
								} = o.body;
								t(y({
									product: d,
									badges: e,
									userOwnedBadges: s,
									wallet: r.body.wallet
								}))
							}
						} else t(m({
							productId: e,
							error: r.error
						})), Object(a.a)(t, r.error)
					}
				}, g = ({
					subredditId: e
				}) => async (t, r, {
					apiContext: s
				}) => {
					t(h({
						subredditId: e
					}));
					const a = await Object(c.a)(s(), e);
					a.ok ? t(O({
						subredditId: e,
						products: a.body
					})) : t(_({
						subredditId: e,
						error: a.error
					}))
				}
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return A
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "b", (function() {
				return L
			}));
			var s = r("./src/lib/asyncActions/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/constants/euCookiePolicy.ts"),
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
				return t => async (r, s, a) => {
					const n = s();
					if (e(n)) return t(r, s, a)
				}
			}
			var l = r("./node_modules/lodash/every.js"),
				p = r.n(l),
				b = r("./src/reddit/constants/experiments.ts"),
				f = r("./src/graphql/operations/VerifyRecaptchaToken.json"),
				y = r("./node_modules/os-browserify/browser.js"),
				m = r.n(y);
			const E = /\s+at.*(?:\(|\s)(.*)\)?/,
				O = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				_ = void 0 === m.a.homedir ? "" : m.a.homedir();
			const h = e => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
			class AggregateError_AggregateError extends Error {
				constructor(e) {
					if (!Array.isArray(e)) throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
					let t = (e = [...e].map(e => e instanceof Error ? e : null !== e && "object" == typeof e ? Object.assign(new Error(e.message), e) : new Error(e))).map(e => "string" == typeof e.stack ? h(function(e, t = {}) {
						return t = {
							pretty: !1,
							...t
						}, e.replace(/\\/g, "/").split("\n").filter(e => {
							const t = e.match(E);
							if (null === t || !t[1]) return !0;
							const r = t[1];
							return !r.includes(".app/Contents/Resources/electron.asar") && !r.includes(".app/Contents/Resources/default_app.asar") && !O.test(r)
						}).filter(e => "" !== e.trim()).map(e => t.pretty ? e.replace(E, (e, t) => e.replace(t, t.replace(_, "~"))) : e).join("\n")
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
						const a = s.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
						return e.replace(a, s.indent.repeat(t))
					}(t, 4)), this.name = "AggregateError", Object.defineProperty(this, "_errors", {
						value: e
					})
				}*[Symbol.iterator]() {
					for (const e of this._errors) yield e
				}
			}
			var I = r("./src/lib/makeGqlRequest/index.ts");
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
			var g = r("./src/reddit/featureFlags/index.ts"),
				S = r("./src/reddit/featureFlags/utils.ts"),
				D = r("./src/reddit/helpers/chooseVariant/index.ts"),
				T = r("./src/reddit/selectors/meta.ts");
			const v = e => g.d.reCaptchaEnterprise(e) && !Object(T.d)(e),
				w = e => !!Object(D.c)(e, {
					experimentEligibilitySelector: Object(S.d)(Object(S.b)(...n.c)),
					experimentName: b.Mc
				}),
				A = Object(s.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				j = Object(s.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				R = Object(s.b)("SEND_RECAPTCHA_TOKEN"),
				P = e => u(e => p()([v, w, e => e.tracking.reCaptchaEnterprise.send === s.a.New && e.tracking.reCaptchaEnterprise.execute === s.a.Succeeded && e.tracking.reCaptchaEnterprise.load === s.a.Succeeded], t => t(e)))(async (t, r, {
					gqlContext: s
				}) => {
					t(R.requested());
					try {
						await (async (e, t) => {
							const r = await Object(I.a)(e, {
								...f,
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
								errors: a
							} = r.body.data.verifyRecaptchaToken;
							if (a && a.length > 0) throw new AggregateError_AggregateError(a);
							if (!s) throw new RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError
						})(s(), e), t(R.succeeded())
					} catch (a) {
						throw t(R.failed()), a
					}
				}),
				C = (e, t) => Object(S.g)(t) ? (e => `STAGING__${e}`)(e) : e,
				L = (e = d.a.PageLoad) => u(e => p()([v, w, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async (t, r) => {
					const n = r();
					try {
						await t((() => u(e => p()([v, w, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async e => {
							e(A.requested());
							try {
								await d.b.loadScript(), e(A.succeeded())
							} catch (t) {
								throw e(A.failed()), t
							}
						}))());
						const r = await t((e => u(e => p()([v, w, e => e.tracking.reCaptchaEnterprise.load === s.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === s.a.New], t => t(e)))(async t => {
							t(j.requested());
							try {
								const r = await d.b.execute(e);
								return t(j.succeeded({
									token: r
								})), r
							} catch (r) {
								throw t(j.failed()), r
							}
						}))({
							action: C(e, n)
						}));
						r && await t(P(r))
					} catch (c) {
						if (c instanceof GraphQLRequestError_GraphQLRequestError && "object" == typeof c.response.error && null !== c.response.error && c.response.error.type === a.i) return;
						i.c.withScope(e => {
							Object(i.a)(e, {
								serverLogging: !1
							}), i.c.captureException(c)
						})
					}
				})
		},
		"./src/reddit/actions/reportFlow/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return n
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
				a = "REPORT__LOADED",
				n = "REPORT__FAILED",
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
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts");
			const i = "SITEWIDE_RULES_LOADED",
				u = "LIVESTREAMING_RULES_LOADED",
				l = Object(a.a)(i),
				p = Object(a.a)(u),
				b = () => async (e, t, {
					apiContext: r
				}) => {
					if (!t().user) return;
					const s = await (e => Object(c.a)(Object(o.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: n.cb.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							r = y(t.sitewide_rules);
						e(l(r))
					}
				}, f = () => async (e, t, {
					apiContext: r
				}) => {
					if (!t().user) return;
					const s = await (e => Object(c.a)(Object(o.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/livestream_rules.json`,
						method: n.cb.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							r = y(t.livestream_rules);
						e(p(r))
					}
				}, y = e => {
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
				return a
			})), r.d(t, "f", (function() {
				return n
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
				return y
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "r", (function() {
				return _
			})), r.d(t, "u", (function() {
				return h
			})), r.d(t, "p", (function() {
				return I
			})), r.d(t, "q", (function() {
				return g
			})), r.d(t, "v", (function() {
				return S
			})), r.d(t, "s", (function() {
				return D
			})), r.d(t, "x", (function() {
				return T
			})), r.d(t, "w", (function() {
				return v
			})), r.d(t, "t", (function() {
				return w
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			const a = "SCHEDULED_POSTS_REQUESTED",
				n = "SCHEDULED_POSTS_LOADED",
				c = "STANDALONE_SCHEDULED_POSTS_LOADED",
				o = "RECURRING_SCHEDULED_POSTS_LOADED",
				d = "SCHEDULED_POSTS_FAILED",
				i = "SCHEDULED_POST_CREATION_SUCCEEDED",
				u = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				l = "SCHEDULED_POST_MUTATE_REQUESTED",
				p = "SCHEDULED_POST_MUTATE_FAILED",
				b = "STANDALONE_POST_MUTATE_SUCCESS",
				f = "RECURRING_POST_MUTATE_SUCCESS",
				y = "RECURRING_POST__EDIT_MODAL_LOAD",
				m = "RECURRING_POST__EDIT_LOAD",
				E = "STANDALONE_POST__EDIT_LOAD",
				O = "SCHEDULED_POST__DELETE_SUCCESS",
				_ = () => s.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				h = () => s.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				I = () => s.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				g = () => s.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				S = () => s.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				D = () => s.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				T = () => s.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				v = () => s.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				w = () => s.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/search/trending.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return m
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./node_modules/uuid/v4.js"),
				n = r.n(a),
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
					method: c.cb.GET,
					data: t
				})
			};
			const f = "PAGE__TRENDING_SEARCHES_LOADED",
				y = Object(s.a)(f),
				m = () => async (e, t, {
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
										a = r.results.data.children.length > 0 ? r.results.data.children[0].data : null,
										c = {
											id: n()(),
											post: a ? Object(l.a)(a) : null,
											rawQuery: r.query_string,
											searchQuery: r.display_string,
											section: p.c.trending,
											isWhitelisted: r.is_subreddit_whitelisted,
											subredditInfo: a ? {
												icon: a.sr_detail.community_icon || a.sr_detail.icon_img,
												displayText: a.sr_detail.display_name_prefixed
											} : null,
											subredditOccurrences: r.subreddit_occurences - 1,
											type: p.b.text
										};
									t.push(c)
								}
							}
							return t
						})(s);
						return e(y({
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
				return a
			}));
			const s = "SHORTCUTS__ACTIVE_COMMENT_SET",
				a = "SHORTCUTS__ACTIVE_POST_SET"
		},
		"./src/reddit/actions/sso/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			}));
			const s = "LINKED_IDENTITY__ADD",
				a = "LINKED_IDENTITY__REMOVE"
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
				return y
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return S
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/streaming/constants.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/graphql/operations/FetchSubredditStreamingModSettings.json"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/graphql/operations/UpdateSubredditStreamingModSettings.json"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const p = Object(a.a)(n.a),
				b = "STREAMING_MOD_SETTINGS__UPDATE_PENDING",
				f = "STREAMING_MOD_SETTINGS__UPDATE_LOADED",
				y = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				m = Object(a.a)(b),
				E = Object(a.a)(f),
				O = Object(a.a)(y),
				_ = e => async (t, r, {
					gqlContext: a
				}) => {
					const n = Object(l.T)(r(), {
						subredditId: e
					});
					if (void 0 === n) {
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
					const i = await ((e, t) => Object(d.a)(e, {
						...o,
						variables: {
							subredditId: t
						}
					}))(a(), e);
					if (!i.ok) {
						const e = s.fbt._("Could not fetch settings for {subredditName}", [s.fbt._param("subredditName", n.name)], {
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
					gqlContext: a
				}) => {
					await r(I(t, e, a())), r(_(t))
				}, I = (e, t, r) => async (r, a, {
					gqlContext: n
				}) => {
					r(m({
						subredditId: e
					}));
					const o = await ((e, t) => Object(d.a)(e, {
						...i,
						variables: t
					}))(n(), {
						input: {
							subredditId: e,
							liveStreamingModeratorSettings: t
						}
					});
					if (!o.ok || !o.body.data.updateSubredditLiveStreamingModeratorSettings.ok) {
						const t = o.error && o.error.fields ? o.error.fields[0].msg : s.fbt._("Could not update community broadcasting settings", null, {
								hk: "3Uw7zu"
							}),
							a = Object(c.e)(t, u.b.Error);
						await r(Object(c.f)({
							...a,
							duration: c.a
						})), r(O({
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
				}, g = (e, t, r) => async (s, a, {
					gqlContext: n
				}) => {
					const c = [...r.whitelistedUsers.map(e => ({
						redditorName: e.name
					})), {
						redditorName: t
					}];
					await s(I(e, {
						whitelistedRedditors: c
					}, n())), await s(_(e))
				}, S = (e, t, r) => async (s, a, {
					gqlContext: n
				}) => {
					const c = r.whitelistedUsers.filter(e => e.name !== t).map(e => ({
						redditorName: e.name
					}));
					await s(I(e, {
						whitelistedRedditors: c
					}, n())), await s(_(e))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				a = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				n = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/subredditCreation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return y
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "f", (function() {
				return S
			}));
			var s = r("./src/config.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = e => ({
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
			var l = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/telemetry/index.ts");
			const y = "SUBREDDIT__CREATE_PENDING",
				m = "SUBREDDIT__CREATE_SUCCEEDED",
				E = "SUBREDDIT__CREATE_FAILED",
				O = "SUBREDDIT__CREATE_CLEARED",
				_ = Object(a.a)(y),
				h = Object(a.a)(m),
				I = Object(a.a)(E),
				g = Object(a.a)(O),
				S = e => async (t, r, {
					apiContext: a
				}) => {
					const y = r(),
						{
							name: m,
							type: E
						} = e;
					if (Object(b.k)(y)) return;
					t(_({
						subredditName: m
					}));
					const O = await ((e, t) => Object(c.a)(Object(o.a)(e, [d.a]), {
						endpoint: Object(i.a)(`${e.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: n.cb.POST,
						data: u(t)
					}))(a(), e);
					if (O.ok) {
						const r = O.body,
							a = r.fullname;
						Object(f.a)(Object(p.c)(E, e, a)(y)), t(h({
							subredditName: m
						})), window.location.href = `${s.a.redditUrl}${r.path}new`, Object(l.b)(l.a.SubredditCreation)
					} else O.error && Object(f.a)(Object(p.d)(O.error.type)(y)), t(I({
						subredditName: m,
						error: O.error
					}))
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
				return y
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/subscription/index.ts"),
				n = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/selectors/subreddit.ts");
			const u = "SUBREDDIT_CROSSPOSTABLE__PENDING",
				l = "SUBREDDIT_CROSSPOSTABLE__LOADED",
				p = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				b = (Object(s.a)(u), Object(s.a)(l)),
				f = Object(s.a)(p),
				y = () => async (e, t, {
					apiContext: r
				}) => {
					await e(a.e());
					const {
						api: s,
						ids: u
					} = t().subreddits.crosspostable;
					if (s.pending || Object.keys(u).length) return;
					const l = await ((e, t) => Object(c.a)(Object(o.a)(e, [d.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: n.cb.GET
					}))(r(), {
						sr_detail: !1
					});
					if (l.ok) {
						const r = t(),
							s = l.body && l.body.length ? l.body.map(e => Object(i.F)(r, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
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
				return a
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return c
			}));
			const s = "SUBREDDIT_MENTION_LOADED",
				a = "SUBREDDIT__MODEL_SUCCEEDED",
				n = "SUBREDDIT__MODEL_PENDING",
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
				a = r("./src/reddit/actions/preferences.ts"),
				n = r("./src/graphql/operations/SubredditTopContent.json"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
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
					})), t(Object(a.z)());
					const y = await ((e, t) => Object(c.a)(e, {
						...n,
						variables: t
					}))(s.gqlContext(), {
						subredditName: d
					});
					if (y.ok) {
						const e = y.body.data.subreddit;
						if (e) {
							const r = Object(o.c)(e);
							r && t(p({
								...r,
								subredditName: d
							}))
						}
					} else t(b({
						subredditName: d,
						error: y.error
					}))
				}
		},
		"./src/reddit/actions/theme.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "THEME_CHANGED",
				n = (Object(s.a)(a), "BOOTUP_THEME"),
				c = Object(s.a)(n)
		},
		"./src/reddit/actions/tracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "TRACKING__VIEWPORT_DATA_LOADED",
				n = "TRACKING__VIEWPORT_DATA_UNLOADED",
				c = Object(s.a)(a);
			Object(s.a)(n)
		},
		"./src/reddit/actions/trafficStats/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "SUBREDDIT__TRAFFIC_STATS_LOADED",
				a = "SUBREDDIT__TRAFFIC_STATS_PENDING",
				n = "SUBREDDIT__TRAFFIC_STATS_FAILED"
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
				return y
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "m", (function() {
				return h
			})), r.d(t, "k", (function() {
				return w
			})), r.d(t, "l", (function() {
				return A
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "j", (function() {
				return R
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/get.js"),
				a = r.n(s),
				n = r("./node_modules/uuid/v4.js"),
				c = r.n(n),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/uploadToS3/index.ts"),
				i = r("./src/reddit/models/Upload/index.ts");
			const u = "UPLOAD_PENDING",
				l = "UPLOAD_UPLOADING",
				p = "UPLOAD_METADATA_CHANGED",
				b = "UPLOAD_PROGRESS",
				f = "UPLOAD_SUCCESS",
				y = "UPLOAD_FAILED",
				m = "UPLOAD_CANCELED",
				E = "UPLOAD_REMOVED",
				O = Object(o.a)(u),
				_ = Object(o.a)(l),
				h = Object(o.a)(p),
				I = Object(o.a)(b),
				g = Object(o.a)(f),
				S = Object(o.a)(y),
				D = Object(o.a)(m),
				T = Object(o.a)(E),
				v = new Map,
				w = (e, t) => {
					const r = v.get(e) || [];
					r.push(t), v.set(e, r)
				},
				A = (e, t, r, s = !1) => async (n, o, {
					apiContext: u
				}) => {
					const l = t;
					if (o().uploads[l] && Object(i.c)(o().uploads[l])) return;
					const p = c()(),
						b = () => {
							const e = o().uploads[l];
							return !e || e.id !== p || e.status === i.a.CANCELED
						};
					n(O({
						key: l,
						id: p,
						file: e
					}));
					const {
						uploadLease: f,
						error: y
					} = await r(o().uploads[l]);
					if (b()) return;
					if (y || !f) return void n(S({
						key: l,
						error: y
					}));
					let m;
					w(p, () => {
						m && m.abort()
					}), n(_({
						key: l
					}));
					const E = await Object(d.a)(e, f, e => (m = e, s && e.on("progress", e => {
						if (!b() && "upload" === e.direction) {
							const t = {
								percent: e.percent,
								total: e.total,
								uploaded: e.loaded
							};
							n(I({
								key: l,
								progress: t
							}))
						}
					}), e));
					if (m = null, !b())
						if (E.ok) {
							const e = decodeURIComponent(E.body.PostResponse.Location);
							n(g({
								key: l,
								url: e
							}))
						} else {
							const e = a()(E, "body.Error.Message.0"),
								t = {
									type: "ERROR",
									...e ? {
										fields: [{
											field: "0",
											msg: e
										}]
									} : {}
								};
							n(S({
								key: l,
								error: t
							}))
						}
				}, j = (e, t = !1) => (r, s) => {
					const a = s().uploads[e];
					a && (((e, t) => {
						const r = v.get(e);
						r && r.forEach(r => r(e, t)), v.delete(e)
					})(a.id, t), r(t ? T({
						key: e
					}) : D({
						key: e
					})))
				}, R = (e, t = !1) => (r, s) => {
					Object.keys(s().uploads).forEach(s => {
						s.startsWith(e) && r(j(s, t))
					})
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
				return m
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "g", (function() {
				return S
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/blockedRedditors.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/endpoints/accounts/index.ts"),
				d = r("./src/reddit/models/Toast/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const u = "USER_BLOCK__PENDING",
				l = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				b = Object(a.a)(u),
				f = Object(a.a)(l),
				y = Object(a.a)(p),
				m = e => async (t, r, {
					apiContext: a
				}) => {
					if (r().blockUser.api.pending[e]) return;
					t(b({
						username: e
					}));
					const i = await Object(o.a)(a(), e),
						u = `error-block-${e}`;
					if (i.ok) i.body.name && t(f(i.body)), i.body.id && t(Object(n.f)(i.body.id)), t(c.g(u)), t(c.f({
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
						t(y(r)), t(c.f({
							id: u,
							kind: d.b.Error,
							text: s.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: m(e)
						}))
					}
				}, E = "USER_UNBLOCK__PENDING", O = "USER_UNBLOCK__SUCCESS", _ = "USER_UNBLOCK__FAILED", h = Object(a.a)(E), I = Object(a.a)(O), g = Object(a.a)(_), S = e => async (t, r, {
					apiContext: a
				}) => {
					const u = r(),
						l = Object(i.i)(u),
						p = l ? l.id : void 0,
						b = u.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(h({
						name: e
					})), (await Object(o.c)(a(), p, e)).ok ? (t(I({
						name: e
					})), b && b.id && t(Object(n.h)(b.id)), t(c.f({
						kind: d.b.SuccessCommunity,
						text: s.fbt._("{username} is now unblocked", [s.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(c.f({
						kind: d.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(g({
						name: e
					}))))
				}
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
				return y
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "h", (function() {
				return I
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/endpoints/accounts/index.ts"),
				o = r("./src/reddit/models/Toast/index.ts");
			const d = "USER_WHITELIST__PENDING",
				i = "USER_WHITELIST__SUCCESS",
				u = "USER_WHITELIST__FAILED",
				l = Object(a.a)(d),
				p = Object(a.a)(i),
				b = Object(a.a)(u),
				f = e => async (t, r, {
					apiContext: a
				}) => {
					t(l());
					const d = await Object(c.e)(a(), e);
					d.ok ? d.body.name && (t(p(d.body)), t(n.f({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "3cOmlv"
						})
					}))) : (t(b()), t(n.f({
						kind: o.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}, y = "USER_UNWHITELIST__PENDING", m = "USER_UNWHITELIST__SUCCESS", E = "USER_UNWHITELIST__FAILED", O = Object(a.a)(y), _ = Object(a.a)(m), h = Object(a.a)(E), I = e => async (t, r, {
					apiContext: a
				}) => {
					t(O({
						name: e
					})), (await Object(c.d)(a(), e)).ok ? (t(_({
						name: e
					})), t(n.f({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "2o6UcC"
						})
					}))) : (t(h({
						name: e
					})), t(n.f({
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
			var s, a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/usernameAvailable/index.ts");
			! function(e) {
				e[e.Available = 0] = "Available", e[e.Error = 1] = "Error", e[e.Pending = 2] = "Pending", e[e.Unavailable = 3] = "Unavailable"
			}(s || (s = {}));
			const c = "USERNAME_AVAILABLE__AVAILABLE",
				o = "USERNAME_AVAILABLE__FAILURE",
				d = "USERNAME_AVAILABLE__PENDING",
				i = "USERNAME_AVAILABLE__UNAVAILABLE",
				u = Object(a.a)(c),
				l = Object(a.a)(o),
				p = Object(a.a)(d),
				b = Object(a.a)(i),
				f = ({
					username: e
				}) => async (t, r, {
					apiContext: a
				}) => {
					const c = r().users.nameAvailable;
					if (!c[e] || c[e] === s.Error) {
						t(p({
							username: e
						}));
						const r = await Object(n.a)(a(), {
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
		"./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/timezone/index.ts"),
				a = r("./src/reddit/models/ScheduledPost/index.ts");
			const n = {
					frequency: a.d.Hourly,
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
				o = (e, t, r = n) => {
					const s = Object(a.q)(e.getDay()),
						c = e.getDate();
					let o = r ? {
						...r
					} : null;
					switch (t) {
						case a.d.Monthly:
							o = {
								...n,
								...r,
								frequency: t,
								byMonthDays: [c]
							};
							break;
						case a.d.Weekly:
							o = {
								...n,
								...r,
								frequency: t,
								byWeekDays: [s]
							};
							break;
						case a.d.Daily:
						case a.d.Hourly:
							o = {
								...n,
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
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return p
			}));
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const i = a.a.createContext(() => {});

			function u({
				children: e
			}) {
				const t = Object(n.f)(),
					r = Object(s.useCallback)(e => {
						{
							const r = t.getState(),
								s = e(r);
							Object(o.a)({
								...c.defaults(r),
								...s
							})
						}
					}, [t]);
				return a.a.createElement(i.Provider, {
					value: r
				}, e ? a.a.Children.only(e) : null)
			}

			function l() {
				return Object(s.useContext)(i)
			}

			function p(e) {
				function t(t) {
					const r = l();
					return a.a.createElement(e, d({}, t, {
						sendEvent: r
					}))
				}
				const r = e.name || e.displayName;
				return t.displayName = `Tracked(${r})`, t.WrappedComponent = e, t
			}
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, r) {
			"use strict";
			var s, a;
			r.d(t, "d", (function() {
					return s
				})), r.d(t, "c", (function() {
					return a
				})), r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return c
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(s || (s = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(a || (a = {}));
			const n = "SHORTCUT_FOCUSABLE_DIV",
				c = [9, 13, 32]
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "b", (function() {
				return p
			}));
			var s = r("./src/config.ts"),
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts");
			const d = async (e, t) => Object(n.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: a.cb.POST
			}), i = async (e, t, r) => Object(n.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: r,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: a.cb.POST
			}), u = async (e, t) => Object(n.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: a.cb.POST
			}), l = async (e, t) => Object(n.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: a.cb.POST
			}), p = async (e, t) => Object(n.a)(Object(c.a)(e, [o.a]), {
				endpoint: `${s.a.oauthUrl}/user/${t}/about`,
				method: a.cb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/crowdControl/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			}));
			var s, a = r("./src/graphql/operations/CrowdControlLevelInfo.json"),
				n = r("./src/lib/makeGqlRequest/index.ts");
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
				return n
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");
			async function n(e, t, r) {
				const n = Object(a.a)(e, {
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
					c = await n;
				if (c.ok) {
					const e = {},
						t = {},
						r = c.body;
					return Object.keys(r).forEach(s => {
						const a = r[s];
						t[s] = a, e[a.userId] || (e[a.userId] = []), e[a.userId].push(a.id)
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
				const n = await Object(a.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/badges/${t}?users=${r}`
				});
				if (n.ok) {
					const e = {},
						t = [],
						r = n.body;
					return Object.keys(r).forEach(s => {
						const a = r[s];
						e[s] = a, t.push(a.id)
					}), {
						...n,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return n
			}

			function o(e, t, r, n = !0) {
				return Object(a.a)(e, {
					method: "patch",
					endpoint: `${s.a.metaUrl}/badges/${t}/${r}`,
					data: {
						selected: n
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			var s = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function n(e, t) {
				return Object(a.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function c(e, t) {
				return Object(a.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function o(e, t) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
					data: t
				})
			}

			function d(e, t) {
				return Object(a.a)(e, {
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
		"./src/reddit/endpoints/usernameAvailable/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				n = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts");
			const o = (e, t) => Object(a.a)(Object(n.a)(e, [c.a]), {
				method: s.cb.GET,
				endpoint: `${e.apiUrl}/api/username_available.json?user=${t.username}`,
				type: "json"
			})
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/constants/index.ts");
			t.a = () => ({
				type: a.E.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js");

			function a(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function n(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(a).join(" ") : s.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function c(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/isArrayEqual.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/isEqual.js"),
				a = r.n(s),
				n = r("./node_modules/lodash/xorWith.js"),
				c = r.n(n);
			t.a = (e, t) => {
				const r = c()(e, t, a.a);
				return !(!r || 0 !== r.length)
			}
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
				a = r("./src/lib/fastdom/index.ts");
			const n = "https://js.stripe.com/v3/",
				c = "https://www.paypalobjects.com/api/checkout.js",
				o = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${s.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function d(e, t) {
				return t() ? Promise.resolve() : new Promise((r, s) => a.a.write(() => {
					t() && r();
					const s = document.head;
					let a = s.querySelector(`script[src='${e}']`);
					a || ((a = document.createElement("script")).src = e, s.appendChild(a)), a.addEventListener("load", (function e() {
						this.removeEventListener("load", e), r()
					}))
				}))
			}

			function i() {
				return d(n, () => "undefined" != typeof Stripe)
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
				a = r.n(s),
				n = r("./src/config.ts"),
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
					const a = t.pathname || "";
					if (i.test(a) || u.test(a)) {
						const a = ((e, t) => {
								if (p.test(e.pathname || "")) {
									const {
										subreddit: e
									} = t.data;
									return e
								}
							})(t, r),
							n = e.platform.currentPage,
							c = n && n.urlParams.subredditName,
							d = a || c || "",
							i = Object(o.F)(e, d);
						i && e.structuredStyles.models[i] || s.add("structuredStyles"), e.user.prefs.subreddit[i] || s.add("prefsSubreddit")
					}
					return [...s].join(",")
				},
				f = r("./src/reddit/selectors/user.ts");
			t.a = e => t => {
				const r = a.a.parse(t.endpoint, !0),
					{
						host: s,
						protocol: o
					} = r;
				if (`${o}//${s}` === n.a.gatewayUrl) {
					const s = {},
						a = Object(f.cb)(e.getState()) ? "1" : "";
					s.allow_over18 = a, s.include = b(e.getState(), r, t), t.endpoint = Object(c.a)(t.endpoint, s)
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
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/history/esm/history.js"), r("./src/reddit/actions/platform.ts");
			var s = r("./src/config.ts");
			t.a = (e, t) => {
				const r = t.platform.currentPage && t.platform.currentPage.url;
				let a = `${s.a.accountManagerOrigin}/login/`;
				const n = window.location.origin;
				r && (a += `?dest=${encodeURIComponent(`${n}${r}`)}`), window.location.href = a
			}
		},
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "g", (function() {
				return D
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			r("./node_modules/react/index.js");
			const a = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function n(e, t, ...r) {
				if (a(t), !e) {
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
					const a = e.length;
					if (0 === a) return "";
					if (1 === a) return e[0];
					const d = e[a - 1];
					let i = e[0];
					for (let n = 1; n < a - 1; ++n) switch (r) {
						case o.SEMICOLON:
							i = s.fbt._("{previous items}; {following items}", [s.fbt._param("previous items", i), s.fbt._param("following items", e[n])], {
								hk: "4hs4xq"
							});
							break;
						default:
							i = s.fbt._("{previous items}, {following items}", [s.fbt._param("previous items", i), s.fbt._param("following items", e[n])], {
								hk: "2z8RMb"
							})
					}
					return function(e, t, r, a) {
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
								switch (a) {
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
									n(!1, "Invalid conjunction %s provided to intlList", r)
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
						const r = Object(i.f)(m(e, t)),
							a = b(r);
						return s.fbt._("Submit post at {time}", [s.fbt._param("time", a)], {
							hk: "IZ3L"
						})
					}
					return s.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				y = e => e.slice(0, 5),
				m = (e, t) => `${e}T${y(t)}:00`,
				E = e => {
					const [t, r] = e.split("T");
					return [t, y(r)]
				},
				O = e => {
					const [t, r] = E(e);
					if (t && r) {
						const e = Object(i.f)(m(t, r));
						return b(e)
					}
					return ""
				},
				_ = e => {
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
				g = e => {
					const t = (e => {
						const [t, r] = E(e);
						if (t && r) {
							return Object(i.f)(m(t, r)).toLocaleTimeString(void 0, {
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
				S = e => {
					let t = null;
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = p.b);
					const r = Object(i.f)(e.publishAt),
						s = Object(p.q)(r.getDay()),
						a = r.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== s && (t = p.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== a && (t = p.b), {
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
				D = (e, t) => {
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
				return n
			}));
			var s = r("./src/telemetry/index.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			const n = (e, t) => {
				Object(s.a)({
					action: "view",
					source: "commentlist",
					noun: "bottom",
					...a.defaults(e),
					listing: a.listing(e, t),
					subreddit: a.subreddit(e)
				})
			}
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "x", (function() {
				return _
			})), r.d(t, "w", (function() {
				return h
			})), r.d(t, "s", (function() {
				return I
			})), r.d(t, "p", (function() {
				return g
			})), r.d(t, "q", (function() {
				return S
			})), r.d(t, "z", (function() {
				return D
			})), r.d(t, "r", (function() {
				return T
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "u", (function() {
				return w
			})), r.d(t, "t", (function() {
				return A
			})), r.d(t, "o", (function() {
				return j
			})), r.d(t, "n", (function() {
				return R
			})), r.d(t, "y", (function() {
				return P
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "j", (function() {
				return L
			})), r.d(t, "l", (function() {
				return N
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "m", (function() {
				return M
			})), r.d(t, "h", (function() {
				return F
			})), r.d(t, "e", (function() {
				return B
			})), r.d(t, "f", (function() {
				return q
			})), r.d(t, "b", (function() {
				return H
			})), r.d(t, "v", (function() {
				return V
			})), r.d(t, "g", (function() {
				return K
			}));
			var s = r("./src/reddit/constants/tracking.ts"),
				a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/helpers/media/index.ts"),
				c = r("./src/reddit/models/PostCreationForm/index.ts"),
				o = r("./src/reddit/models/PostDraft/index.ts"),
				d = r("./src/reddit/selectors/postDraft.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				u = r("./src/reddit/selectors/user.ts"),
				l = r("./src/telemetry/index.ts"),
				p = r("./src/telemetry/models/PostComposer.ts"),
				b = r("./src/telemetry/models/PostDraft.ts");
			const f = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				y = e => ({
					source: "post_composer",
					action: s.c.CLICK,
					...i.defaults(e),
					screen: i.screen(e),
					correlationId: Object(a.c)(a.a.PostComposer)
				}),
				m = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === c.h.MARKDOWN ? "markdown" : "rte"
				},
				E = e => {
					Object(l.a)({
						noun: "cancel",
						...y(e)
					})
				},
				O = e => {
					Object(l.a)({
						noun: "discard",
						...y(e)
					})
				},
				_ = e => {
					Object(l.a)({
						noun: "subreddit_choice",
						subreddit: i.subreddit(e),
						...y(e),
						actionInfo: i.chatPostActionInfo(e)
					})
				},
				h = e => {
					Object(l.a)({
						noun: "subreddit_selector",
						...y(e)
					})
				},
				I = (e, t) => {
					Object(l.a)({
						noun: "post_type_selector",
						postComposer: {
							type: f[t]
						},
						...y(e)
					})
				},
				g = () => e => ({
					noun: "add_option",
					...y(e)
				}),
				S = () => e => ({
					noun: "voting_length",
					...y(e)
				}),
				D = (e, t, r) => {
					"image_upload" === t || "video_upload" === t ? Object(l.a)({
						noun: t,
						...y(e)
					}) : Object(l.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: r ? "on" : "off"
						},
						...y(e)
					})
				},
				T = (e, t, r) => {
					Object(l.a)({
						noun: "post",
						subreddit: i.subreddit(e),
						postComposer: {
							type: t,
							...m(e, t)
						},
						post: r ? i.post(e, r) : null,
						...y(e)
					})
				},
				v = (e, t) => {
					const r = t === c.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(l.a)({
						noun: r,
						...y(e)
					})
				},
				w = (e, t) => {
					Object(l.a)({
						noun: "save",
						subreddit: i.subreddit(e),
						postComposer: {
							type: t,
							...m(e, t)
						},
						...y(e)
					})
				},
				A = (e, t) => {
					const r = e.uploads[t];
					r.error && Object(l.a)({
						...y(e),
						noun: "media",
						action: s.c.REJECT,
						actionInfo: {
							...i.actionInfo(e),
							reason: JSON.stringify(r.error)
						}
					})
				},
				j = (e, t) => {
					t.forEach(t => {
						const r = Object(n.f)(t.type);
						r && Object(l.a)({
							...y(e),
							action: s.c.DRAG,
							noun: r
						})
					})
				},
				R = (e, t, r) => {
					Object(l.a)({
						...y(e),
						noun: "input",
						postComposer: {
							inputType: r
						},
						action: t,
						actionInfo: i.chatPostActionInfo(e)
					})
				},
				P = (e, t, r) => {
					Object(l.a)({
						...y(e),
						noun: r,
						action: Object(p.getToggleAction)(t),
						actionInfo: i.chatPostActionInfo(e)
					})
				},
				C = e => k("input", e),
				L = () => k("add"),
				N = () => k("remove"),
				k = (e, t) => r => ({
					...y(r),
					noun: e,
					postComposer: {
						inputType: t,
						type: f.imageOnly
					},
					action: s.c.CLICK
				}),
				x = e => {
					Object(l.a)({
						...y(e),
						noun: "hide_oc_description",
						action: s.c.CLICK
					})
				},
				U = (e, t) => {
					if (t) {
						const r = i.subredditById(e, t);
						if (r) return {
							subreddit: r
						};
						const s = i.profileById(e, t);
						if (s) return {
							profile: s
						}
					}
				},
				M = (e, t) => {
					const {
						draftId: r,
						destSubreddit: s
					} = t, a = Object(u.i)(e), n = Object(d.d)(e, {
						draftId: r
					}), c = {
						authorId: a ? a.id : void 0,
						createdTimestamp: n ? n.created : void 0,
						id: r || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case o.b.Link:
							c.type = b.DraftType.Link, c.urlLength = t.body.length;
							break;
						case o.b.Markdown:
							c.type = b.DraftType.Self, c.bodyTextLength = t.body.length;
							break;
						case o.b.RichText:
							c.type = b.DraftType.RichText, t.documentStats && (c.bodyTextLength = t.documentStats.textLength, c.numberRteImages = t.documentStats.rteImagesCount, c.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case o.b.Image:
							c.type = b.DraftType.Image;
							break;
						case o.b.Video:
							c.type = b.DraftType.Video
					}
					return {
						postDraft: c,
						...U(e, s.id)
					}
				},
				G = (e, t) => {
					const r = Object(u.i)(e),
						s = {
							authorId: r ? r.id : void 0,
							createdTimestamp: t.created,
							id: t.id,
							nsfw: t.isNSFW,
							originalContent: t.isOriginalContent,
							spoiler: t.isSpoiler,
							titleLength: t.title.length
						};
					switch (t.kind) {
						case o.b.Link:
							s.type = b.DraftType.Link, s.urlLength = (t.body || "").length;
							break;
						case o.b.Markdown:
							s.type = b.DraftType.Self, s.bodyTextLength = (t.body || "").length;
							break;
						case o.b.RichText:
							s.type = b.DraftType.RichText
					}
					return {
						postDraft: s,
						...U(e, t.subredditId)
					}
				},
				F = (e, t) => {
					Object(l.a)({
						noun: "draft_load",
						...y(e),
						...M(e, t)
					})
				},
				B = (e, t) => {
					Object(l.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...y(e),
						...M(e, t)
					})
				},
				q = (e, t) => {
					Object(l.a)({
						noun: "draft_delete",
						...y(e),
						...G(e, t)
					})
				},
				H = e => {
					Object(l.a)({
						...y(e),
						noun: "social_connect_link",
						action: s.c.CLICK
					})
				},
				V = (e, t) => {
					Object(l.a)({
						...y(e),
						noun: "twitter_share_checkbox",
						action: Object(p.getToggleAction)(t)
					})
				},
				K = (e, t, r) => {
					Object(l.a)({
						...y(e),
						...M(e, t),
						noun: "draft_share",
						action: r ? s.c.ENABLE : s.c.DISABLE
					})
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return D
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "q", (function() {
				return v
			})), r.d(t, "r", (function() {
				return w
			})), r.d(t, "o", (function() {
				return A
			})), r.d(t, "s", (function() {
				return j
			})), r.d(t, "c", (function() {
				return R
			})), r.d(t, "l", (function() {
				return P
			})), r.d(t, "p", (function() {
				return C
			})), r.d(t, "i", (function() {
				return L
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "g", (function() {
				return k
			})), r.d(t, "b", (function() {
				return U
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "n", (function() {
				return G
			})), r.d(t, "m", (function() {
				return F
			})), r.d(t, "t", (function() {
				return H
			})), r.d(t, "w", (function() {
				return V
			})), r.d(t, "e", (function() {
				return K
			})), r.d(t, "d", (function() {
				return $
			})), r.d(t, "u", (function() {
				return X
			})), r.d(t, "v", (function() {
				return Q
			})), r.d(t, "h", (function() {
				return z
			}));
			var s = r("./node_modules/lodash/pick.js"),
				a = r.n(s),
				n = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makePostDraftPageKey/index.ts"),
				o = r("./src/reddit/constants/parameters.ts"),
				d = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = r("./src/reddit/helpers/routeKey/index.ts"),
				u = r("./src/reddit/helpers/trackers/postComposer.ts"),
				l = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = r("./src/reddit/models/Comment/index.ts"),
				b = r("./src/reddit/models/Post/index.ts"),
				f = r("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				y = r("./src/reddit/selectors/profile.ts"),
				m = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/lib/makePostCreationPageKey/index.ts"),
				O = r("./src/lib/makeSearchKey/index.ts"),
				_ = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/helpers/trackers/searchResults.ts"),
				I = r("./src/reddit/selectors/postDraft.ts"),
				g = r("./src/reddit/selectors/telemetry.ts"),
				S = r("./src/telemetry/index.ts");
			const D = (e, t, r, s, u, f) => {
					const {
						route: y
					} = e, {
						name: m
					} = y.meta;
					if (!m) return;
					const _ = t.platform.currentPage;
					switch (m) {
						case n.Db.COMMENTS: {
							const {
								partialCommentId: a,
								partialPostId: n
							} = e.match.params, c = Object(b.r)(n), o = Object(i.a)(e, t, t.posts.models[c]);
							if (!o) return;
							const u = a && Object(p.f)(a),
								{
									sortToUse: l
								} = Object(d.a)(t, c),
								f = !0;
							Object(S.a)(R(o, c, u, r, s, l, f)(t));
							break
						}
						case n.Db.INDEX:
						case n.Db.LISTING:
						case n.Db.MULTIREDDIT:
						case n.Db.SUBREDDIT: {
							const a = Object(i.c)(e, t);
							if (!a.listingKey) return;
							const {
								params: c,
								queryParams: o
							} = e.match, {
								sort: d = (a.sort ? a.sort : n.P.HOT)
							} = c, u = o.t;
							Object(S.a)(T(a.listingKey, d, r, s, u)(t));
							break
						}
						case n.Db.TOPIC: {
							const a = Object(i.c)(e, t);
							if (!a.listingKey) return;
							const {
								params: c
							} = e.match, o = a.sort ? a.sort : n.Q, {
								sort: d = o
							} = c;
							Object(S.a)(T(a.listingKey, d, r, s)(t));
							break
						}
						case n.Db.PROFILE_OVERVIEW: {
							const a = Object(i.d)(e, t);
							if (!a) return;
							const {
								params: c,
								queryParams: o
							} = e.match, {
								sort: d = n.vb
							} = c, u = o.t;
							Object(S.a)(v(a, d, r, s, u)(t));
							break
						}
						case n.Db.PROFILE_POSTS: {
							const a = Object(i.d)(e, t);
							if (!a) return;
							const {
								queryParams: c
							} = e.match, {
								sort: o = n.vb,
								t: d = n.wb
							} = c;
							Object(S.a)(w(a, o, r, s, d)(t));
							break
						}
						case n.Db.PROFILE_COMMENTS: {
							const a = Object(i.d)(e, t);
							if (!a) return;
							const {
								queryParams: c
							} = e.match, {
								sort: o = n.vb,
								t: d = n.wb
							} = c;
							Object(S.a)(A(a, o, r, s, d)(t));
							break
						}
						case n.Db.PROFILE_PRIVATE: {
							const a = Object(i.d)(e, t);
							if (!a) return;
							Object(S.a)(j(a)(s, r)(t));
							break
						}
						case n.Db.PROFILE_MODERATION:
							f && C(t, !0);
							break;
						case n.Db.SETTINGS: {
							const a = e;
							Object(S.a)(q(r, s)(t)), a.match.params.page === n.Qb.Profile && Object(l.j)(t);
							break
						}
						case n.Db.POST_CREATION:
							if (f && u) {
								const e = Object(E.a)(u);
								Object(S.a)(P(e, r, s)(t))
							}
							break;
						case n.Db.POST_DRAFT: {
							const {
								draftId: a
							} = e.match.params, n = Object(c.a)(e.match.params);
							if (!n) return;
							x(t, n, a, r, s);
							break
						}
						case n.Db.SUBREDDIT_WIKI:
							Object(S.a)(W(r, s)(t));
							break;
						case n.Db.COINS:
							Object(S.a)(U(r, s)(t)), Object(S.a)(M()(t));
							break;
						case n.Db.PREMIUM:
							Object(S.a)(G(r, s)(t)), Object(S.a)(F()(t));
							break;
						case n.Db.APPEAL:
							Object(S.a)(B(r, s)(t));
							break;
						case n.Db.INBOX_PAGES:
							f && k(t);
							break;
						case n.Db.MODERATION_PAGES:
							f && L(t, !0, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case n.Db.COLLECTION_COMMENTS:
							f && Q(t, !0);
							break;
						case n.Db.MODQUEUE_PAGES:
							f && N(t, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case n.Db.SUBREDDIT_LEADERBOARD:
							f && Object(S.a)(K()(t));
							break;
						case n.Db.SEARCH_RESULTS:
							if (f) {
								const n = Object(i.e)(e);
								if (!n) return;
								Object(S.a)(X(n, Object(O.c)(a()(_ && _.queryParams || {}, o.t)), r, s, _)(t))
							}
							break;
						case n.Db.PUBLIC_ACCESS_NETWORK:
							f && Object(S.a)(H()(t));
							break;
						case n.Db.GEOTAGGING:
							f && Object(S.a)($()(t));
							break;
						case n.Db.SUBREDDIT_CREATION:
							f && Object(S.a)(V()(t));
							break;
						case n.Db.MOD_LISTING:
							f && z(t, !0)
					}
				},
				T = (e, t, r, s, a, n) => c => {
					const {
						api: o
					} = c.listings.postOrder, d = !o.error[e] && !o.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(c),
						actionInfo: g.actionInfo(c, {
							success: d
						}),
						customFeed: g.customFeed(c),
						listing: g.listing(c, e, {
							sort: t,
							sortTime: a
						}),
						subreddit: g.subreddit(c),
						timer: g.timer(r, s),
						userSubreddit: g.userSubreddit(c),
						adblock: g.adblock(c),
						postFlair: {
							title: n
						}
					}
				},
				v = (e, t, r, s, a) => n => {
					const c = g.listing(n, e);
					c && (c.sort = t, a && (c.sortTime = a));
					const {
						api: o
					} = n.listings.postOrder, d = !o.error[e] && !o.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(n),
						actionInfo: g.actionInfo(n, {
							success: d
						}),
						profile: g.profile(n),
						snoovatar: g.snoovatar(n),
						subreddit: g.subreddit(n),
						timer: g.timer(r, s),
						userSubreddit: g.userSubreddit(n),
						adblock: g.adblock(n)
					}
				},
				w = (e, t, r, s, a) => n => {
					const c = g.listing(n, e);
					c && (c.sort = t, a && (c.sortTime = a));
					const {
						api: o
					} = n.listings.postOrder, d = !o.error[e] && !o.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(n),
						actionInfo: g.actionInfo(n, {
							success: d
						}),
						profile: g.profile(n),
						subreddit: g.subreddit(n),
						timer: g.timer(r, s),
						userSubreddit: g.userSubreddit(n),
						adblock: g.adblock(n)
					}
				},
				A = (e, t, r, s, a) => n => {
					const c = g.profileComments(n, e);
					c && (c.sort = t, a && (c.sortTime = a));
					const {
						api: o
					} = n.profileCommentsPage, d = !o.error[e] && !o.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(n),
						actionInfo: g.actionInfo(n, {
							success: d
						}),
						profile: g.profile(n),
						subreddit: g.subreddit(n),
						timer: g.timer(r, s),
						userSubreddit: g.userSubreddit(n),
						adblock: g.adblock(n)
					}
				},
				j = e => (t, r) => s => {
					const a = !s.profilePrivatePage.api.error[e] && !s.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(s),
						actionInfo: g.actionInfo(s, {
							success: a
						}),
						profile: g.profile(s),
						subreddit: g.subreddit(s),
						timer: g.timer(r, t),
						userSubreddit: g.userSubreddit(s),
						adblock: g.adblock(s)
					}
				},
				R = (e, t, r, s, a, n, c) => o => {
					const {
						api: d
					} = o.pages.comments, i = !d.error[e] && !d.pending[e], u = Object(f.c)(o, {
						postId: t,
						isForceSelected: c
					}), l = {
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(o),
						actionInfo: g.actionInfo(o, {
							success: i,
							reason: u || void 0
						}),
						post: g.post(o, t),
						profile: g.profile(o),
						subreddit: g.subreddit(o),
						timer: g.timer(s, a),
						userSubreddit: g.userSubreddit(o),
						adblock: g.adblock(o),
						postEvent: g.postEventI13nSelector(o, {
							postId: t
						}),
						postCollection: g.postCollectionI13nSelector(o, {
							postId: t
						}),
						listing: g.listing(o, void 0, {
							sort: n
						})
					};
					return r && (l.comment = g.comment(o, r)), l
				},
				P = (e, t, r) => s => {
					const a = s.creations.api.page.fetched[e],
						n = s.platform.currentPage ? s.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(s),
						actionInfo: g.actionInfo(s, {
							success: a
						}),
						post: n ? g.post(s, n) : void 0,
						subreddit: g.subreddit(s),
						timer: g.timer(t, r),
						userSubreddit: g.userSubreddit(s),
						adblock: g.adblock(s)
					}
				},
				C = (e, t) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(e),
						actionInfo: g.actionInfo(e, {
							success: t
						})
					})
				},
				L = (e, t, r, s) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(e),
						actionInfo: g.actionInfo(e, {
							success: t
						}),
						profile: g.profileById(e, Object(y.m)(e, s)),
						subreddit: g.subredditById(e, Object(m.F)(e, r)),
						userSubreddit: g.userSubreddit(e),
						adblock: g.adblock(e)
					})
				},
				N = (e, t, r) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(e),
						profile: g.profileById(e, Object(y.m)(e, r)),
						subreddit: g.subredditById(e, Object(m.F)(e, t)),
						userSubreddit: g.userSubreddit(e),
						adblock: g.adblock(e)
					})
				},
				k = e => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(e),
						actionInfo: g.actionInfo(e)
					})
				},
				x = (e, t, r, s, a) => {
					const n = e.creations.api.page.pending[t],
						c = !e.creations.api.page.error[t] && !n && !!r,
						o = Object(I.h)(e, r);
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(e),
						actionInfo: g.actionInfo(e, {
							success: c
						}),
						subreddit: g.subreddit(e),
						timer: g.timer(s, a),
						userSubreddit: g.userSubreddit(e),
						adblock: g.adblock(e),
						...o ? Object(u.m)(e, o) : {}
					})
				},
				U = (e, t) => r => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(_.c)(_.a.GoldPayment),
					...g.defaults(r),
					timer: g.timer(e, t),
					adblock: g.adblock(r)
				}),
				M = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...g.defaults(e)
				}),
				G = (e, t) => r => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(_.c)(_.a.GoldPayment),
					...g.defaults(r),
					timer: g.timer(e, t),
					adblock: g.adblock(r)
				}),
				F = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...g.defaults(e)
				}),
				B = (e, t) => r => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...g.defaults(r),
					timer: g.timer(e, t)
				}),
				q = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...g.defaults(r),
					timer: g.timer(e, t)
				}),
				H = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: g.subreddit(e),
					...g.defaults(e)
				}),
				V = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...g.defaults(e)
				}),
				K = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...g.defaults(e)
				}),
				W = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...g.defaults(r),
					customFeed: g.customFeed(r),
					subreddit: g.subreddit(r),
					timer: g.timer(e, t),
					userSubreddit: g.userSubreddit(r),
					adblock: g.adblock(r)
				}),
				$ = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...g.defaults(e)
				}),
				X = (e, t, r, s, a, c) => o => {
					let d = !0;
					if (t.type.indexOf(n.Pb.Posts) > -1) {
						const {
							api: t
						} = o.listings.listingOrder;
						d = d && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(n.Pb.Subreddits) > -1 || t.type.indexOf(n.Pb.Users) > -1) {
						const {
							api: t
						} = o.listings.postOrder;
						d = d && !t.error[e] && !t.pending[e]
					}
					const i = g.paneName(o, a),
						u = g.structureType(o, a),
						l = o.platform.currentPage && o.platform.currentPage.urlParams && o.platform.currentPage.urlParams.subredditName ? g.subredditByName(o, o.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						...h.c(o, t),
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(o),
						actionInfo: g.actionInfo(o, {
							success: d,
							paneName: i
						}),
						timer: g.timer(r, s),
						search: {
							...g.search(o, t, !0, a || void 0),
							...!!c && {
								originElement: c
							},
							queryId: Object(_.c)(_.a.SearchResults),
							structureType: u,
							subredditId: t.restrict_sr && l && l.id ? l.id : void 0,
							subredditName: t.restrict_sr && l && l.name ? l.name : void 0
						},
						...!!c && {
							correlationId: Object(_.c)(_.a.SearchResults)
						},
						userPreferences: {
							hideNsfw: !o.user.prefs.over18
						}
					}
				},
				Q = (e, t) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(e),
						actionInfo: g.actionInfo(e, {
							success: t
						})
					})
				},
				z = (e, t) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(e),
						actionInfo: g.actionInfo(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return l
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "p", (function() {
				return b
			})), r.d(t, "r", (function() {
				return f
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "t", (function() {
				return m
			})), r.d(t, "s", (function() {
				return E
			})), r.d(t, "u", (function() {
				return O
			})), r.d(t, "w", (function() {
				return _
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "x", (function() {
				return D
			})), r.d(t, "v", (function() {
				return T
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "k", (function() {
				return w
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "j", (function() {
				return j
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "o", (function() {
				return P
			})), r.d(t, "n", (function() {
				return C
			})), r.d(t, "l", (function() {
				return L
			})), r.d(t, "m", (function() {
				return N
			})), r.d(t, "b", (function() {
				return k
			}));
			var s = r("./src/lib/constants/index.ts"),
				a = r("./src/reddit/constants/posts.ts"),
				n = r("./src/reddit/constants/tracking.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				o = r("./src/reddit/selectors/posts.ts"),
				d = r("./src/reddit/selectors/telemetry.ts");
			const i = "search",
				u = "search_results_best",
				l = (e, t) => {
					const r = d.subreddit(e);
					return {
						screen: d.screen(e),
						subreddit: r && t && t.restrict_sr ? r : null
					}
				},
				p = (e, t) => r => {
					const s = t;
					return s.structureType = "related", {
						action: e,
						correlationId: Object(c.c)(c.a.SearchResults),
						noun: "related_search",
						source: i,
						search: d.search(r, s),
						...l(r)
					}
				},
				b = (e, t, r, s) => a => ({
					...l(a, r),
					source: i,
					action: "click",
					noun: t,
					actionInfo: d.actionInfo(a, s ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: s ? d.discoveryUnit(s) : null,
					search: d.search(a, r),
					post: d.post(a, e),
					media: d.media(a, e)
				}),
				f = (e, t, r, s, a) => n => ({
					...A(n, e, t, a, s, r),
					noun: "ad"
				}),
				y = (e, t, r) => a => {
					let n = !0;
					if (t.type.indexOf(s.Pb.Posts) > -1) {
						const {
							api: t
						} = a.listings.listingOrder;
						n = n && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(s.Pb.Subreddits) > -1 || t.type.indexOf(s.Pb.Users) > -1) {
						const {
							api: t
						} = a.listings.postOrder;
						n = n && !t.error[e] && !t.pending[e]
					}
					return {
						...l(a, t),
						source: i,
						action: "view",
						noun: "search_results_post",
						actionInfo: d.actionInfo(a, {
							success: n,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: d.discoveryUnit(r),
						search: d.search(a, t)
					}
				},
				m = (e, t) => r => ({
					action: "view",
					actionInfo: d.actionInfo(r),
					metaSearch: d.metaSearch(t),
					noun: e,
					screen: d.screen(r),
					search: d.smartSearch(r, t),
					source: i
				}),
				E = (e, t) => r => ({
					action: "click",
					actionInfo: d.actionInfo(r),
					noun: e,
					metaSearch: d.metaSearch(t),
					screen: d.screen(r),
					search: d.smartSearch(r, t),
					source: i
				}),
				O = (e, t, r) => s => ({
					source: i,
					action: "click",
					noun: d.SearchDropdownNouns.Recent,
					actionInfo: d.actionInfo(s, {
						paneName: "subreddit_dropdown",
						position: r + 1
					}),
					search: {
						query: e,
						originPageType: s.platform.currentPage ? d.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0,
						queryId: Object(c.c)(c.a.SearchResults)
					},
					...h(s, t)
				}),
				_ = (e, t, r, s) => a => {
					const n = s.filter(e => e.id);
					return {
						source: i,
						action: "click",
						noun: d.SearchDropdownNouns.Typeahead,
						actionInfo: d.actionInfo(a, {
							position: r + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: a.platform.currentPage ? d.getPageTypeFromCurrentPage(a.platform.currentPage) : void 0,
							queryId: Object(c.c)(c.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: n.map(e => e.id),
							numberSubreddits: n.length
						},
						...h(a, t)
					}
				},
				h = (e, t) => {
					const r = t.isSubreddit && t.id ? d.subredditForSearch(e, t.id) : void 0,
						s = t.isProfile && t.id ? d.profileForSearch(e, t.id) : void 0,
						a = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? r || a : void 0,
						profile: t.isProfile ? s || a : void 0
					}
				},
				I = (e, t, r) => s => ({
					action: t,
					actionInfo: d.actionInfo(s),
					noun: e,
					screen: d.screen(s),
					search: d.search(s, r),
					source: u
				});
			var g;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(g || (g = {}));
			const S = (e, t) => r => ({
					...l(r, t),
					source: i,
					action: "click",
					noun: e,
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(r),
					search: d.search(r, t)
				}),
				D = (e, t) => r => ({
					...l(r, t),
					source: i,
					action: "click",
					noun: e,
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(r),
					search: d.search(r, t)
				}),
				T = (e, t) => r => ({
					action: "click",
					correlationId: Object(c.c)(c.a.SearchResults),
					noun: e ? s.Ob.ToSubreddit : s.Ob.ToGlobal,
					search: d.search(r, t),
					source: i
				}),
				v = (e, t, r, s) => a => ({
					...l(a, r),
					source: i,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(a, {
						relativePosition: d.getRelativePostOrder(a, t, e)
					}),
					search: {
						...d.search(a, r),
						...!!s && {
							originElement: s
						}
					},
					post: d.post(a, t)
				}),
				w = (e, t, r, s, a) => n => A(n, e, t, r, s, a),
				A = (e, t, r, s, a, o) => {
					const u = d.paneName(e, s),
						l = d.postRelativePosition(e, t, a, o),
						p = d.amountOfElementsBeforePost(e, r, a, o, u),
						b = null !== l ? p + l : null,
						f = d.structureType(e, s),
						y = {
							...d.search(e, r, !0, s || void 0),
							structureType: f,
							queryId: Object(c.c)(c.a.SearchResults)
						};
					return {
						source: i,
						action: n.c.CLICK,
						noun: "post",
						actionInfo: s ? {
							pageType: d.getPageTypeFromCurrentPage(s),
							paneName: u,
							position: b,
							relativePosition: l
						} : d.actionInfo(e, {
							paneName: u,
							position: b,
							relativePosition: l
						}),
						search: y,
						post: d.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: o ? d.discoveryUnit(o) : null
					}
				},
				j = (e, t, r, s, a, n) => c => R(c, e, t, r, s, a, n),
				R = (e, t, r, s, u, l, p) => {
					if (!s) {
						s = Object(o.D)(e, {
							postId: l
						}).belongsTo
					}
					const b = d.paneName(e, r);
					let f, y;
					if (l) {
						f = d.postRelativePosition(e, l, u, p);
						const r = d.amountOfElementsBeforePost(e, t, u, p, b);
						y = null !== f ? r + f : null
					} else {
						f = d.communityRelativePosition(e, s.id, u, p);
						const t = d.amountOfElementsBeforeCommunity(e, u, p);
						y = null !== f ? t + f : null
					}
					const m = d.structureType(e, r),
						E = {
							...d.search(e, t, !0, r || void 0),
							structureType: m,
							queryId: Object(c.c)(c.a.SearchResults)
						};
					return {
						source: i,
						action: n.c.CLICK,
						noun: s.type,
						search: E,
						subreddit: s.type === a.a.SUBREDDIT ? d.subredditForSearch(e, s.id) : void 0,
						profile: s.type === a.a.PROFILE ? d.profileForSearch(e, s.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: p ? d.discoveryUnit(p) : null,
						actionInfo: r ? {
							pageType: d.getPageTypeFromCurrentPage(r),
							paneName: b,
							position: y,
							relativePosition: f
						} : d.actionInfo(e, {
							paneName: b,
							position: y,
							relativePosition: f
						}),
						post: l ? d.post(e, l) : void 0
					}
				},
				P = (e, t) => r => ({
					...l(r, e),
					source: i,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(r),
					search: {
						...d.search(r, e),
						...!!t && {
							originElement: t
						}
					},
					subreddit: d.subreddit(r)
				}),
				C = (e, t, r, s, a) => c => ({
					...A(c, t, r, s, e, a),
					action: n.c.VIEW
				}),
				L = (e, t, r, s) => a => ({
					...l(a, r),
					source: i,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(a, {
						relativePosition: d.getRelativePostOrder(a, t, e),
						position: d.getAbsoluteOrder(a, t, e)
					}),
					search: {
						...d.search(a, r),
						...!!s && {
							originElement: s
						}
					},
					post: d.post(a, t)
				}),
				N = (e, t, r) => s => ({
					...l(s),
					source: i,
					action: "click",
					noun: `search_result_${e}`,
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(s),
					search: {
						...d.search(s, t),
						...!!r && {
							originElement: r
						}
					},
					[e]: d[e](s)
				}),
				k = (e, t) => r => ({
					...l(r, t),
					source: i,
					action: e,
					noun: "covid_banner",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(r),
					search: d.search(r, t)
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			var s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			const n = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...a.defaults(t),
					actionInfo: a.actionInfo(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(s.d)(s.a.SubredditCreation, !0)
				}),
				c = (e, t, r) => n => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...a.defaults(n),
					actionInfo: a.actionInfo(n, {
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
					...a.defaults(e),
					actionInfo: a.actionInfo(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				d = e => t => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...a.defaults(t),
					actionInfo: a.actionInfo(t, {
						reason: e
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				})
		},
		"./src/reddit/models/ChatSettingsPage/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "c", (function() {
					return a
				})), r.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Unknown = "unknown", e.Toggle = "BOOLEAN"
				}(s || (s = {}));
			const a = (e, t, r = !1) => e && Array.isArray(e) && e.length ? e.reduce((e, a) => {
					if (a && a.id && a.type && a.title && a.hasOwnProperty("state")) switch (a.type) {
						case s.Toggle:
							e.push({
								settingType: s.Toggle,
								settingId: a.id,
								subredditId: t,
								description: a.description,
								descriptionUrl: a.descriptionUrl,
								groupName: a.groupName,
								isEditable: !r && a.isEditable,
								state: "true" === String(a.state).toLowerCase(),
								title: a.title
							});
							break;
						default:
							e.push({
								settingType: s.Unknown,
								settingId: a.id,
								subredditId: t,
								description: a.description,
								descriptionUrl: a.descriptionUrl,
								groupName: a.groupName,
								isEditable: !r && a.isEditable,
								state: a.state,
								title: a.title
							})
					}
					return e
				}, []) : [],
				n = e => e.reduce((e, t) => (t.isEditable && e.push({
					id: t.settingId,
					state: String(t.state)
				}), e), [])
		},
		"./src/reddit/models/Emoji/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			}));
			const s = 24,
				a = 64e3,
				n = 128,
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
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var a;
			! function(e) {
				e.HIDE_BUTTON_CLICK = "HIDE_BUTTON_CLICK", e.CTA_BUTTON_CLICK = "CTA_BUTTON_CLICK"
			}(a || (a = {}))
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
		"./src/reddit/reducers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return SD
			}));
			var s = r("./src/reddit/actions/modal.ts");
			const a = {};
			var n = (e = a, t) => {
					switch (t.type) {
						case s.e:
							if (!t.payload.actionSource && !t.payload.redirectUrl) return a;
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				c = r("./node_modules/redux/es/redux.js"),
				o = r("./src/reddit/actions/actionBarAnimation/constants.ts");
			const d = {};
			var i = (e = d, t) => {
				switch (t.type) {
					case o.a: {
						const {
							commentDiscount: r
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
			const u = {};
			var l = (e = u, t) => {
					switch (t.type) {
						case o.a: {
							const {
								upvoteDiscount: r
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
				p = Object(c.c)({
					commentDiscount: i,
					upvoteDiscount: l
				}),
				b = r("./src/reddit/actions/authorFlair.ts"),
				f = r("./src/reddit/actions/badge.ts"),
				y = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				m = r("./src/reddit/actions/governance/constants.ts"),
				E = r("./src/reddit/actions/harbergerTax/constants.ts"),
				O = r("./src/reddit/actions/platform.ts"),
				_ = r("./src/reddit/actions/product.ts"),
				h = r("./src/reddit/actions/reportFlow/constants.ts"),
				I = r("./src/reddit/actions/structuredStyles/constants.ts"),
				g = r("./src/reddit/constants/modals.ts");
			var S = (e = null, t) => {
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
						case O.a:
						case h.f:
							return null;
						case I.e:
							return (null == e ? void 0 : e.id) === g.a.BLADE_UNSAVED_CHANGES ? null : e;
						case I.d:
							return (null == e ? void 0 : e.id) === g.a.BLADE_NIGHTMODE ? null : e;
						case b.a:
							return (null == e ? void 0 : e.id) === g.a.USER_FLAIR_MODAL_ID ? null : {
								id: g.a.USER_FLAIR_MODAL_ID
							};
						case f.c:
							return {
								id: g.a.BADGE_PICKER
							};
						case _.b:
							return {
								id: g.a.BADGE_PURCHASE
							};
						case m.d:
							return {
								id: g.a.GOVERNANCE_OPT_OUT
							};
						case m.r:
							return {
								id: g.a.TRANSFER_POINTS
							};
						case m.o:
							return {
								id: g.a.GOVERNANCE_RELEASE_NOTES
							};
						case E.e:
							return {
								id: g.a.HARBERGER_TAX_BANNER_PURCHASE
							};
						case E.c:
							return {
								id: g.a.HARBERGER_TAX_BANNER_MANAGE
							};
						case E.b:
							return {
								id: g.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE
							};
						case E.a:
							return {
								id: g.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE
							};
						case m.x:
							return {
								id: g.a.WALLET_REGISTRATION_MODAL
							};
						case y.c:
							return {
								id: g.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT
							};
						default:
							return e
					}
				},
				D = r("./src/reddit/actions/ads/constants.ts"),
				T = r("./src/reddit/actions/unload/constants.ts");
			const v = {};

			function w(e, t, r, s) {
				const a = e[t];
				return {
					...e,
					[t]: {
						...a,
						[s]: r
					}
				}
			}
			var A = (e = v, t) => {
					if (!t.payload) return e;
					switch (t.type) {
						case D.d:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case D.b:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
						case D.n:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case D.k:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case D.e:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case D.j:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case D.i:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case D.g:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case D.f:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case D.h:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case D.l: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: a
							} = t.payload;
							return w(e, r, a, `adVideoWatchedPercent${s}`)
						}
						case D.m: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: a
							} = t.payload;
							return w(e, r, a, `adVideoWatchedSeconds${s}`)
						}
						case D.w:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case D.y:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case D.x:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case T.b:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case D.s:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						case D.c:
							return w(e, t.payload.postId, t.payload.vendorMetadata, "adGalleryItemImpression");
						default:
							return e
					}
				},
				j = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/apiRequestState.ts"));
			const R = {};
			var P = (e = R, t) => {
					switch (t.type) {
						case j.d:
						case j.a:
						case j.b: {
							const r = t.payload;
							return {
								...e,
								[r.apiRequestId]: r
							}
						}
						case j.c: {
							const r = t.payload;
							if (!(r in e)) return e;
							if (1 === Object.keys(e).length) return R;
							const s = {
								...e
							};
							return delete s[r], s
						}
						default:
							return e
					}
				},
				C = r("./src/reddit/actions/appBadgeIndicators/constants.ts");
			var L = (e = null, t) => {
				switch (t.type) {
					case C.a:
						return t.payload && t.payload.error || null;
					case C.b:
					case C.c:
						return null;
					default:
						return e
				}
			};
			var N = (e = !1, t) => {
					switch (t.type) {
						case C.c:
							return !0;
						case C.a:
						case C.b:
							return !1;
						default:
							return e
					}
				},
				k = Object(c.c)({
					error: L,
					pending: N
				});
			const x = {};
			var U = (e = x, t) => {
					switch (t.type) {
						case C.d:
						case C.b: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case C.c:
						case C.a:
						default:
							return e
					}
				},
				M = Object(c.c)({
					api: k,
					badges: U
				});
			var G = (e = null, t) => {
					switch (t.type) {
						case b.a:
							return t.payload;
						default:
							return e
					}
				},
				F = r("./node_modules/icepick/icepick.js"),
				B = r("./node_modules/lodash/mergeWith.js"),
				q = r.n(B),
				H = r("./src/reddit/actions/comment/constants.ts"),
				V = r("./src/reddit/actions/comment/websocket/constants.ts"),
				K = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				W = r("./src/reddit/actions/modQueue/constants.ts"),
				$ = r("./src/reddit/actions/pages/constants.ts"),
				X = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				Q = r("./src/reddit/actions/pages/profilePosts.ts"),
				z = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				J = r("./src/reddit/actions/pages/search.ts"),
				Y = r("./src/reddit/actions/pages/subreddit.ts"),
				Z = r("./src/reddit/actions/profileConversations.ts"),
				ee = r("./src/reddit/actions/subreddit.ts"),
				te = r("./src/reddit/actions/userFlair/constants.ts"),
				re = r("./src/reddit/models/User/index.ts");
			const se = {};
			var ae = (e = se, t) => {
				switch (t.type) {
					case V.b:
					case V.c: {
						const r = t.payload,
							{
								authorFlair: s,
								isChatSort: a
							} = r;
						if (s && a) {
							return q()({
								...e
							}, s, (e, t, r) => {
								if ("richtext" === r) return t
							})
						}
						return e
					}
					case z.c:
					case z.i:
					case z.e:
					case z.g:
					case J.SEARCH_RESULTS_RECEIVED: {
						const {
							authorFlair: r
						} = t.payload;
						if (r) {
							return Object(F.merge)(e, r)
						}
						return e
					}
					case H.u:
					case Y.SUBREDDIT_LOADED:
					case $.f:
					case X.b:
					case X.e:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case Z.e:
					case ee.i:
						return ne(e, t.payload);
					case W.i:
					case W.f:
					case W.m:
					case W.p:
					case W.v:
						return ne(e, t.payload.response);
					case te.r: {
						const {
							subredditId: r,
							userName: s,
							applied: a,
							displaySettings: {
								isUserEnabled: n
							}
						} = t.payload;
						return Object(F.setIn)(e, [r, s], n ? a : null)
					}
					case K.h:
					case K.b: {
						const {
							subredditId: r,
							userName: s,
							applied: a
						} = t.payload;
						return e[r] && e[r][s] ? Object(F.setIn)(e, [r, s], a) : e
					}
					case te.a: {
						const {
							subredditId: r,
							userName: s,
							applied: a,
							displaySettings: {
								isEnabled: n
							}
						} = t.payload;
						return Object(F.setIn)(e, [r, s], n ? a : null)
					}
					default:
						return e
				}
			};
			const ne = (e, {
				account: t,
				authorFlair: r,
				userFlair: s
			}) => {
				const a = Object(F.merge)(e, r);
				if (!s || !t) return a;
				const n = Object.keys(s)[0];
				if (!n) return a;
				const c = s[n],
					o = Object(re.e)(t),
					d = c.applied,
					i = c.displaySettings && c.displaySettings.isUserEnabled;
				return o && d && i ? Object(F.merge)(a, {
					[n]: {
						[o]: d
					}
				}) : a
			};
			var ce = Object(c.c)({
					inContext: G,
					models: ae
				}),
				oe = r("./src/reddit/actions/gold/constants.ts");
			const de = {};
			var ie = (e = de, t) => {
				switch (t.type) {
					case oe.e: {
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
			var ue = (e = null, t) => {
				switch (t.type) {
					case oe.i:
					case oe.j:
						return null;
					case oe.h:
						return t.payload;
					default:
						return e
				}
			};
			var le = (e = !1, t) => {
					switch (t.type) {
						case O.a:
						case oe.j:
						case oe.h:
							return !1;
						case oe.i:
							return !0;
						default:
							return e
					}
				},
				pe = Object(c.c)({
					error: ue,
					pending: le
				}),
				be = Object(c.c)({
					api: pe
				});
			var fe = (e = null, t) => {
				switch (t.type) {
					case oe.I:
					case oe.H:
						return null;
					case oe.G:
						return t.payload;
					default:
						return e
				}
			};
			const ye = {};
			var me = (e = ye, t) => {
					switch (t.type) {
						case oe.I: {
							const {
								subredditOrProfileId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case oe.e:
						case oe.H:
						case oe.M:
						case oe.G: {
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
				Ee = Object(c.c)({
					error: fe,
					pending: me
				});
			const Oe = {};
			var _e = (e = Oe, t) => {
				switch (t.type) {
					case oe.M: {
						const {
							awards: r,
							subredditOrProfileId: s
						} = t.payload, a = {};
						return r.forEach(e => {
							a[e.id] = e.isEnabled
						}), {
							...e,
							[s]: a
						}
					}
					case oe.m: {
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
					case oe.p: {
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
			const he = {};
			var Ie = (e = he, t) => {
					switch (t.type) {
						case oe.H: {
							const {
								awards: r,
								subredditOrProfileId: s
							} = t.payload, a = r.map(e => e.id);
							return {
								...e,
								[s]: a
							}
						}
						case oe.j: {
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
				ge = Object(c.c)({
					api: Ee,
					availability: _e,
					order: Ie
				}),
				Se = r("./node_modules/lodash/merge.js"),
				De = r.n(Se);
			const Te = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const r = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${r}`
			};
			var ve = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : Te(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : Te(e.endsAt)), e),
				we = r("./src/reddit/models/Gold/Award.ts"),
				Ae = r("./src/reddit/actions/discoveryUnit.ts"),
				je = r("./src/reddit/actions/frontpage/constants.ts"),
				Re = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				Pe = r("./src/reddit/actions/multireddit/constants.ts"),
				Ce = r("./src/reddit/actions/pages/modListing/constants.ts"),
				Le = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				Ne = r("./src/reddit/actions/pages/postCreation.ts"),
				ke = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				xe = r("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				Ue = r("./src/lib/makeActionCreator/index.ts"),
				Me = (r("./src/config.ts"), r("./src/lib/constants/index.ts"));
			r("./src/lib/makeApiRequest/index.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(Ue.a)("RECOMMENDED_POSTS_LOADED"), Object(Ue.a)("RECOMMENDED_POSTS_FAILED");
			var Ge = r("./src/reddit/actions/search.ts");
			const Fe = we.m,
				Be = (e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				})([ve]),
				qe = (e, t) => {
					const r = t.reduce((e, t) => (e[t.id] = Be(t), e), {});
					return De()({
						...e
					}, r)
				};
			var He = (e = Fe, t) => {
				var r;
				switch (t.type) {
					case oe.H: {
						const {
							awards: r
						} = t.payload;
						return qe(e, r)
					}
					case oe.M: {
						const r = t.payload.awards.reduce((e, t) => (e[t.id] = {
							...Be(t),
							isEnabled: !0
						}, e), {});
						return De()({
							...e
						}, r)
					}
					case oe.c: {
						const {
							awards: r
						} = t.payload, s = r.reduce((e, t) => (e[t.award.id] = Be(t.award), e), {});
						return De()({
							...e
						}, s)
					}
					case oe.j: {
						const {
							award: r
						} = t.payload;
						return r && r.id ? e[r.id] ? De()({
							...e
						}, {
							[r.id]: Be(r)
						}) : {
							...e,
							[r.id]: Be(r)
						} : e
					}
					case oe.db: {
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
					case $.b:
					case H.u:
					case V.b:
					case Ne.PAGE_LOADED:
					case Ae.e:
					case je.f:
					case Ce.e:
					case Ce.h:
					case W.f:
					case W.m:
					case W.p:
					case W.v:
					case Pe.r:
					case $.f:
					case je.b:
					case Le.b:
					case J.SEARCH_RESULTS_RECEIVED:
					case X.b:
					case X.e:
					case Z.b:
					case Z.e:
					case ke.b:
					case ke.e:
					case xe.b:
					case Q.MORE_POSTS_LOADED:
					case Q.PROFILE_POSTS_LOADED:
					case z.c:
					case z.e:
					case z.i:
					case z.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Ge.c:
					case ee.i:
					case Y.SUBREDDIT_LOADED: {
						const r = {},
							s = t.payload.posts || [],
							a = t.payload.comments || [];
						for (const e in s) {
							const t = s[e].allAwardings || [];
							for (const e of t) r[e.id] = Be(Object(we.h)(e))
						}
						for (const e in a) {
							const t = a[e],
								{
									associatedAward: s,
									allAwardings: n = []
								} = t;
							for (const e of n) r[e.id] = Be(Object(we.h)(e));
							s && (r[s.id] = Be(s))
						}
						return Object.keys(r).forEach(t => {
							var s;
							0 === (null === (s = e[t]) || void 0 === s ? void 0 : s.coinPrice) && delete r[t]
						}), De()({
							...e
						}, r)
					}
					case oe.mb: {
						const r = {},
							{
								topAwardedPosts: s
							} = t.payload;
						return s.map(e => {
							const {
								post: t
							} = e, s = t.awardings || [];
							for (const a of s) {
								const e = a.award;
								r[e.id] = e
							}
						}), De()({
							...e
						}, r)
					}
					case Re.o: {
						const {
							freeAwardEvent: s
						} = t.payload;
						return qe(e, (null === (r = null == s ? void 0 : s.freeAwards) || void 0 === r ? void 0 : r.awards) || [])
					}
					case Re.h: {
						const {
							awards: r
						} = t.payload;
						return qe(e, r || [])
					}
					default:
						return e
				}
			};
			const Ve = {};
			var Ke = (e = Ve, t) => {
					switch (t.type) {
						case oe.d: {
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
						case oe.c:
						case oe.b: {
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
				We = Object(c.c)({
					pending: Ke
				});
			const $e = {};
			var Xe = (e = $e, t) => {
					switch (t.type) {
						case oe.c: {
							const {
								awards: r,
								subredditOrProfileId: s,
								thingId: a
							} = t.payload, n = r.map(({
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
									[a]: n
								}
							}
						}
						default:
							return e
					}
				},
				Qe = Object(c.c)({
					api: We,
					order: Xe
				});
			const ze = {};
			var Je = (e = ze, t) => {
					switch (t.type) {
						case oe.c: {
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
				Ye = Object(c.c)({
					order: Je
				}),
				Ze = Object(c.c)({
					blacklist: ie,
					create: be,
					manageable: ge,
					models: He,
					sortedUsable: Qe,
					tags: Ye
				});
			const et = {};
			var tt = (e = et, t) => {
				switch (t.type) {
					case f.e:
					case f.f: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case f.d: {
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
			const rt = {};
			var st = (e = rt, t) => {
					switch (t.type) {
						case f.e: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case f.f:
						case f.d: {
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
				at = Object(c.c)({
					error: tt,
					pending: st
				});
			const nt = {};
			var ct = (e = nt, t) => {
				switch (t.type) {
					case f.h:
					case f.i: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case f.g: {
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
			const ot = {};
			var dt = (e = ot, t) => {
					switch (t.type) {
						case f.h: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case f.i:
						case f.g: {
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
				it = Object(c.c)({
					error: ct,
					pending: dt
				}),
				ut = Object(c.c)({
					subreddit: at,
					user: it
				});
			const lt = {};
			var pt = (e = lt, t) => {
					switch (t.type) {
						case y.i:
						case f.f:
						case f.i:
						case _.d: {
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
				bt = Object(c.c)({
					api: ut,
					models: pt
				}),
				ft = r("./src/reddit/actions/blockedRedditors.ts");
			const yt = {
				message: ""
			};
			var mt = (e = yt, t) => {
				switch (t.type) {
					case ft.c:
					case ft.d:
						return e;
					case ft.b:
						return t.payload;
					default:
						return e
				}
			};
			var Et = (e = !1, t) => {
					switch (t.type) {
						case ft.d:
							return !0;
						case ft.c:
						case ft.b:
							return !1;
						default:
							return e
					}
				},
				Ot = Object(c.c)({
					error: mt,
					pending: Et
				});
			const _t = {
				ids: []
			};
			var ht = (e = _t, t) => {
					switch (t.type) {
						case ft.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case ft.e:
							const r = e.ids.slice();
							return r.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: r
							};
						case ft.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				It = Object(c.c)({
					api: Ot,
					list: ht
				}),
				gt = r("./src/reddit/actions/userBlocks.ts");
			const St = {};
			var Dt = (e = St, t) => {
				switch (t.type) {
					case gt.f:
					case gt.e: {
						const {
							userId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case gt.d: {
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
			const Tt = {};
			var vt = (e = Tt, t) => {
					switch (t.type) {
						case gt.f: {
							const {
								userId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case gt.e:
						case gt.d: {
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
				wt = Object(c.c)({
					error: Dt,
					pending: vt
				}),
				At = Object(c.c)({
					api: wt
				});
			const jt = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var Rt = (e = jt, t) => {
					switch (t.type) {
						case D.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case Y.SUBREDDIT_PENDING:
						case Le.c:
						case je.c:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				Pt = r("./src/reddit/actions/downToChat.ts");
			var Ct = (e = null, t) => {
				switch (t.type) {
					case Pt.f:
					case Pt.g:
						return null;
					case Pt.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Lt = (e = !1, t) => {
					switch (t.type) {
						case Pt.b:
						case Pt.f:
							return !0;
						case Pt.a:
						case Pt.c:
						case Pt.e:
						case Pt.g:
							return !1;
						default:
							return e
					}
				},
				Nt = Object(c.c)({
					error: Ct,
					pending: Lt
				}),
				kt = r("./node_modules/lodash/mapValues.js"),
				xt = r.n(kt);
			const Ut = {};
			var Mt = (e = Ut, t) => {
					switch (t.type) {
						case Pt.f:
						case Pt.e:
						case Pt.g: {
							const {
								subredditId: r,
								bannerEnabled: s,
								buttonEnabled: a
							} = t.payload;
							return {
								...e,
								[r]: {
									bannerEnabled: s,
									buttonEnabled: a
								}
							}
						}
						case Pt.c: {
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
						case Pt.d:
							return {
								...xt()(e, e => ({
									bannerEnabled: !1,
									buttonEnabled: e.buttonEnabled
								}))
							};
						case Pt.a:
						case Pt.b:
						default:
							return e
					}
				},
				Gt = Object(c.c)({
					api: Nt,
					subreddits: Mt
				}),
				Ft = r("./src/reddit/actions/chat/init.ts");
			var Bt = (e = !1, t) => {
					switch (t.type) {
						case Ft.a:
							return !0;
						default:
							return e
					}
				},
				qt = r("./src/chat/actions/promo/constants.ts");
			const Ht = {
				displaySubredditChatFtux: !1
			};
			var Vt = (e = Ht, t) => {
					switch (t.type) {
						case qt.a: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case qt.b: {
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
				Kt = r("./src/lib/omitKey/index.ts"),
				Wt = r("./src/reddit/actions/pages/chatSettings.ts");
			const $t = {};
			var Xt = (e = $t, t) => {
				switch (t.type) {
					case Wt.b: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Wt.a:
					case Wt.c:
					case Wt.d: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Kt.a)(e, r)
					}
					default:
						return e
				}
			};
			const Qt = {};
			var zt = (e = Qt, t) => {
					switch (t.type) {
						case Wt.a:
						case Wt.b:
						case Wt.c:
						case Wt.d: {
							const {
								subredditId: r
							} = t.payload, s = t.type === Wt.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Jt = Object(c.c)({
					error: Xt,
					pending: zt
				}),
				Yt = Object(c.c)({
					fetch: Jt
				});
			const Zt = {};
			var er = (e = Zt, t) => {
					switch (t.type) {
						case Wt.a:
						case Wt.d: {
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
				tr = Object(c.c)({
					api: Yt,
					models: er
				}),
				rr = r("./src/reddit/actions/chat/unreadCount.ts");
			const sr = {
				apiError: null
			};
			var ar = (e = sr, t) => {
				switch (t.type) {
					case rr.a.REQUEST_FAILED: {
						const e = t.payload;
						return {
							...sr,
							apiError: e
						}
					}
					case rr.a.REQUEST_SUCCESS:
					case rr.a.REQUEST_PENDING:
						return sr;
					default:
						return e
				}
			};
			var nr = (e = !1, t) => {
					switch (t.type) {
						case rr.a.REQUEST_PENDING:
							return !0;
						case rr.a.REQUEST_FAILED:
						case rr.a.REQUEST_SUCCESS:
							return !1;
						default:
							return e
					}
				},
				cr = Object(c.c)({
					error: ar,
					pending: nr
				});
			const or = {
				basicChannelCount: 0,
				subredditChannelCount: 0
			};
			var dr = (e = or, t) => {
					switch (t.type) {
						case rr.a.SYNC:
						case rr.a.REQUEST_SUCCESS:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				ir = Object(c.c)({
					api: cr,
					count: dr
				}),
				ur = Object(c.c)({
					downToChat: Gt,
					isInited: Bt,
					promos: Vt,
					subredditSettingsPage: tr,
					unread: ir
				}),
				lr = r("./src/reddit/actions/claimgold.ts");
			var pr = (e = null, t) => {
				switch (t.type) {
					case lr.a:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg;
					case lr.d:
					case lr.e:
					case lr.c:
						return null;
					default:
						return e
				}
			};
			var br = (e = !1, t) => {
				switch (t.type) {
					case lr.d:
					case lr.c:
					case lr.a:
						return !1;
					case lr.b:
						return !0;
					default:
						return e
				}
			};
			var fr = (e = !1, t) => {
					switch (t.type) {
						case lr.b:
						case lr.d:
						case lr.c:
						case lr.a:
							return !1;
						case lr.f:
							return !0;
						default:
							return e
					}
				},
				yr = Object(c.c)({
					error: pr,
					pending: br,
					showLoader: fr
				});
			var mr = (e = "", t) => {
				switch (t.type) {
					case lr.g:
						return t.payload;
					case lr.e:
						return "";
					default:
						return e
				}
			};
			var Er = (e = !1, t) => {
					switch (t.type) {
						case lr.e:
							return !0;
						case lr.c:
						case lr.d:
							return !1;
						default:
							return e
					}
				},
				Or = Object(c.c)({
					api: yr,
					code: mr,
					showModal: Er
				}),
				_r = r("./src/reddit/actions/commentsListTruncated/constants.ts");
			var hr = (e = !0, t) => {
					switch (t.type) {
						case _r.a:
							return !1;
						case _r.b:
							return !0;
						default:
							return e
					}
				},
				Ir = r("./src/reddit/actions/communityFlairs/constants.ts");
			const gr = {};
			var Sr = (e = gr, t) => {
					switch (t.type) {
						case Ir.a: {
							const {
								models: r,
								sortedKeys: s,
								subredditId: a
							} = t.payload;
							return {
								...e,
								[a]: {
									sortedKeys: s,
									models: r
								}
							}
						}
						default:
							return e
					}
				},
				Dr = r("./src/reddit/actions/contentControls/constants.ts");
			const Tr = {};
			var vr = (e = Tr, t) => {
				switch (t.type) {
					case Dr.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Dr.c:
					case Dr.b: {
						const {
							subredditName: r
						} = t.payload;
						return Object(Kt.a)(e, r)
					}
					default:
						return e
				}
			};
			const wr = {};
			var Ar = (e = wr, t) => {
					switch (t.type) {
						case Dr.c:
						case Dr.a:
						case Dr.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === Dr.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				jr = Object(c.c)({
					error: vr,
					pending: Ar
				}),
				Rr = Object(c.c)({
					fetch: jr
				});
			const Pr = {};
			var Cr = (e = Pr, t) => {
					switch (t.type) {
						case Dr.b: {
							const {
								subredditName: r,
								postRequirements: s,
								automatedReporting: a
							} = t.payload;
							return {
								...e,
								[r]: {
									automatedReporting: a,
									postRequirements: s
								}
							}
						}
						case Dr.d: {
							const {
								subredditName: r,
								partialUpdates: s
							} = t.payload, a = e[r];
							return a ? {
								...e,
								[r]: {
									automatedReporting: {
										...a.automatedReporting,
										...s.automatedReporting || {}
									},
									postRequirements: {
										...a.postRequirements,
										...s.postRequirements || {}
									}
								}
							} : e
						}
						default:
							return e
					}
				},
				Lr = Object(c.c)({
					api: Rr,
					models: Cr
				}),
				Nr = r("./src/reddit/actions/contentGate.ts"),
				kr = r("./src/reddit/actions/preferences.ts");
			const xr = {};
			var Ur = (e = xr, t) => {
				switch (t.type) {
					case Nr.a: {
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
								return q()({
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
					case Nr.b: {
						const {
							subredditDescription: r,
							subredditName: s,
							isContributorRequestsDisabled: a,
							isContributorRequestTimestamp: n,
							subredditId: c
						} = t.payload;
						if (s) {
							if (e[s]) {
								const t = {
									[s]: {
										privateSubreddit: !0,
										subredditDescription: r,
										isContributorRequestsDisabled: a,
										isContributorRequestTimestamp: n,
										subredditId: c
									}
								};
								return q()({
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
									isContributorRequestsDisabled: a,
									isContributorRequestTimestamp: n,
									subredditId: c
								}
							}
						}
						return e
					}
					case Nr.f: {
						const {
							subredditName: r,
							quarantineRequiresEmail: s,
							quarantineMessage: a,
							quarantineMessageHtml: n,
							quarantineMessageRTJson: c
						} = t.payload;
						return r ? {
							...e,
							[r]: {
								...e[r],
								quarantinedSubreddit: !0,
								quarantineRequiresEmail: s,
								quarantineMessage: a,
								quarantineMessageHtml: n,
								quarantineMessageRTJson: c
							}
						} : e
					}
					case Nr.h: {
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
								return q()({
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
					case Nr.i: {
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
								return q()({
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
					case Nr.j: {
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
								return q()({
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
					case Nr.c:
					case Nr.d:
					case Nr.e: {
						const {
							profileName: r
						} = t.payload, s = Me.Wb + r.toLocaleLowerCase(), a = e[s] || {}, n = {
							profileDeleted: t.type === Nr.d,
							profileSuspended: t.type === Nr.e,
							profileBlockedForLegalReason: t.type === Nr.c
						};
						return {
							...e,
							[s]: {
								...a,
								...n
							}
						}
					}
					case kr.q:
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
			const Mr = {};
			var Gr = (e = Mr, t) => {
					switch (t.type) {
						case H.u:
						case $.b:
						case $.f:
							return {
								...e, ...t.payload.continueThreads
							};
						default:
							return e
					}
				},
				Fr = Object(c.c)({
					models: Gr
				}),
				Br = r("./src/reddit/actions/postCollection/constants.ts");
			var qr = (e = null, t) => {
				switch (t.type) {
					case s.c:
					case Br.d:
					case Br.c:
					case Br.s:
					case Br.r:
						return null;
					case Br.b:
					case Br.n:
						return t.payload;
					default:
						return e
				}
			};
			var Hr = (e = !1, t) => {
					switch (t.type) {
						case Br.c:
						case Br.r:
							return !0;
						case Br.d:
						case Br.b:
						case Br.s:
						case Br.n:
							return !1;
						default:
							return e
					}
				},
				Vr = Object(c.c)({
					error: qr,
					pending: Hr
				}),
				Kr = Object(c.c)({
					createOrUpdate: Vr
				}),
				Wr = r("./src/reddit/actions/postDraft.ts");
			const $r = {};
			var Xr = (e = $r, t) => {
				switch (t.type) {
					case Wr.c:
					case Wr.b: {
						const {
							draftId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Wr.a: {
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
			const Qr = {};
			var zr = (e = Qr, t) => {
					switch (t.type) {
						case Wr.b: {
							const {
								draftId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Wr.c:
						case Wr.a: {
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
				Jr = Object(c.c)({
					error: Xr,
					pending: zr
				});
			var Yr = (e = null, t) => {
				switch (t.type) {
					case Wr.d:
						return t.payload;
					case Wr.f:
					case Wr.e:
						return null;
					default:
						return e
				}
			};
			var Zr = (e = !1, t) => {
					switch (t.type) {
						case Wr.f:
							return !0;
						case Wr.e:
						case Wr.d:
							return !1;
						default:
							return e
					}
				},
				es = Object(c.c)({
					error: Yr,
					pending: Zr
				});
			const ts = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var rs = (e = ts, t) => {
				switch (t.type) {
					case Wr.l:
					case Wr.j:
						return ts;
					case Wr.i: {
						const e = t.payload;
						return {
							...ts,
							apiError: e
						}
					}
					case Wr.m: {
						const e = t.payload;
						return {
							...ts,
							validationError: e
						}
					}
					case Wr.k: {
						const e = t.payload;
						return {
							...ts,
							submitValidationError: e
						}
					}
					case Wr.h:
						return {
							...ts, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var ss = (e = !1, t) => {
					switch (t.type) {
						case Wr.j:
							return !0;
						case Wr.l:
						case Wr.i:
						case Wr.m:
						case Wr.k:
						case Wr.h:
							return !1;
						default:
							return e
					}
				},
				as = Object(c.c)({
					error: rs,
					pending: ss
				}),
				ns = Object(c.c)({
					deleteDraft: Jr,
					listing: es,
					save: as
				}),
				cs = r("./src/reddit/actions/postCreation/constants.ts");
			const os = {};
			var ds = (e = os, t) => {
					switch (t.type) {
						case cs.C: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case cs.p: {
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
				is = Object(c.c)({
					pending: ds
				});
			var us = (e = null, t) => {
				switch (t.type) {
					case cs.u:
					case cs.v:
					case cs.d:
					case cs.e:
					case cs.f:
					case cs.i:
					case cs.j:
					case cs.n:
					case cs.K:
						return null;
					case cs.t:
						return t.payload;
					default:
						return e
				}
			};
			var ls = (e = !1, t) => {
					switch (t.type) {
						case cs.u:
							return !0;
						case cs.v:
						case cs.t:
							return !1;
						default:
							return e
					}
				},
				ps = Object(c.c)({
					error: us,
					pending: ls
				}),
				bs = Object(c.c)({
					converting: is,
					mediaUpload: ps
				});
			const fs = {};
			var ys = (e = fs, t) => {
				switch (t.type) {
					case Ne.PAGE_LOADED:
					case Ne.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ne.PAGE_FAILED: {
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
			const ms = {};
			var Es = (e = ms, t) => {
				switch (t.type) {
					case Ne.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !1
						}
					}
					case Ne.PAGE_LOADED: {
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
			const Os = {};
			var _s = (e = Os, t) => {
					switch (t.type) {
						case Ne.PAGE_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ne.PAGE_LOADED:
						case Ne.PAGE_FAILED: {
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
				hs = Object(c.c)({
					error: ys,
					fetched: Es,
					pending: _s
				}),
				Is = r("./src/reddit/actions/scheduledPosts/constants.ts");
			const gs = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var Ss = (e = gs, t) => {
				switch (t.type) {
					case cs.L:
					case Is.h:
					case Is.k:
					case Is.b:
					case Is.d:
					case cs.w:
					case cs.c:
					case cs.d:
					case cs.e:
					case cs.f:
					case cs.i:
					case cs.j:
					case cs.n:
					case cs.K:
					case cs.A:
						return gs;
					case cs.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return r ? gs : e
					}
					case cs.o: {
						const e = t.payload;
						return {
							...gs,
							apiError: e
						}
					}
					case cs.X: {
						const e = t.payload;
						return {
							...gs,
							validationError: e
						}
					}
					case cs.G:
					case cs.F: {
						const e = t.payload;
						return {
							...gs,
							submitValidationError: e
						}
					}
					case cs.a:
						return {
							...gs, needsCaptcha: !0
						};
					case cs.y:
						return {
							...gs, pollError: t.payload
						};
					default:
						return e
				}
			};
			var Ds = (e = !1, t) => {
					switch (t.type) {
						case cs.w:
							return !0;
						case cs.L:
						case Is.h:
						case cs.o:
						case cs.X:
						case cs.F:
						case cs.G:
						case cs.y:
						case cs.a:
							return !1;
						default:
							return e
					}
				},
				Ts = Object(c.c)({
					error: Ss,
					pending: Ds
				});
			var vs = (e = null, t) => {
				switch (t.type) {
					case cs.x:
					case cs.D:
						return null;
					case cs.m:
						return t.payload;
					default:
						return e
				}
			};
			var ws = (e = !1, t) => {
					switch (t.type) {
						case cs.x:
							return !0;
						case cs.m:
						case cs.l:
							return !1;
						default:
							return e
					}
				},
				As = Object(c.c)({
					error: vs,
					pending: ws
				}),
				js = Object(c.c)({
					submit: Ts,
					update: As
				});
			var Rs = (e = null, t) => {
				switch (t.type) {
					case cs.K:
					case cs.I:
					case cs.J:
						return null;
					default:
						return e
				}
			};
			var Ps = (e = !1, t) => {
					switch (t.type) {
						case cs.J:
							return !0;
						case cs.I:
						case cs.K:
							return !1;
						default:
							return e
					}
				},
				Cs = Object(c.c)({
					error: Rs,
					pending: Ps
				}),
				Ls = Object(c.c)({
					change: Cs
				}),
				Ns = Object(c.c)({
					collection: Kr,
					draft: ns,
					editor: bs,
					page: hs,
					post: js,
					subreddit: Ls
				}),
				ks = r("./node_modules/lodash/omit.js"),
				xs = r.n(ks),
				Us = r("./src/reddit/actions/pages/postDraft.ts");
			const Ms = {};
			var Gs = (e = Ms, t) => {
				switch (t.type) {
					case Wr.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Ms
					}
					case Wr.c: {
						const r = e,
							{
								draftId: s
							} = t.payload;
						return xs()(r, s)
					}
					case cs.L: {
						const {
							draftId: r
						} = t.payload;
						return r ? xs()(e, r) : e
					}
					case Us.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Fs = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				Bs = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				};
			var qs = r("./src/reddit/models/PostDraft/index.ts");
			var Hs = (e = "", t) => {
					switch (t.type) {
						case cs.d:
							return t.payload || "";
						case cs.A:
							return "";
						case O.a: {
							if (Fs(t) !== Me.Db.POST_CREATION) return "";
							const r = Bs(t);
							return r && r.url ? r.url || "" : e
						}
						case Wr.g: {
							const e = t.payload;
							return e.kind === qs.b.Link && e.body || ""
						}
						case Is.b:
						case Is.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Vs = r("./src/reddit/models/PostCreationForm/index.ts"),
				Ks = r("./src/reddit/models/ScheduledPost/index.ts");
			var Ws = (e = "", t) => {
				switch (t.type) {
					case cs.e:
						return t.payload || "";
					case cs.A:
					case cs.E:
						return "";
					case cs.M:
						return t.payload.editorMode === Vs.h.MARKDOWN ? t.payload.content || "" : e;
					case O.a: {
						if (Fs(t) !== Me.Db.POST_CREATION) return "";
						const r = Bs(t);
						return r && r.text ? (e => e ? e.replace(/\+/g, " ") : "")(r.text) : e
					}
					case Wr.g: {
						const e = t.payload;
						return e.kind === qs.b.Markdown && e.body || ""
					}
					case Is.b:
					case Is.n: {
						const e = t.payload;
						return e.contentType === Ks.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const $s = {
				items: [],
				selectedKey: null
			};
			var Xs = (e = $s, t) => {
					switch (t.type) {
						case cs.f:
							return t.payload || $s;
						case cs.A:
							return $s;
						case O.a:
							return Fs(t) !== Me.Db.POST_CREATION ? $s : e;
						case Wr.g:
							return $s;
						case Is.b:
						case Is.n:
							return $s;
						default:
							return e
					}
				},
				Qs = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				zs = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Js = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const Ys = Qs.a.createInitial;
			var Zs = (e = Ys(), t) => {
					switch (t.type) {
						case cs.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case cs.A:
							return Qs.a.createInitial();
						case cs.M: {
							const r = t.payload;
							return r.editorMode === Vs.h.RICH_TEXT && r.editorKey === Vs.g.POST_CREATION ? Qs.a.createInitial(r.content) : e
						}
						case O.a:
							return Fs(t) !== Me.Db.POST_CREATION ? Qs.a.createInitial() : e;
						case Wr.g: {
							const e = t.payload;
							return e.kind === qs.b.RichText ? Qs.a.createInitial(e.body) : Qs.a.createInitial()
						}
						case Is.b:
						case Is.n: {
							const e = t.payload,
								r = Object(zs.c)(e.mediaAssets);
							return Qs.a.createInitial(e.contentType === Ks.a.RTJSON ? Object(Js.b)(e.body) : void 0, r || void 0)
						}
						default:
							return e
					}
				},
				ea = Object(c.c)({
					link: Hs,
					markdown: Ws,
					media: Xs,
					rte: Zs
				});
			var ta = (e = null, t) => {
					switch (t.type) {
						case cs.b:
							return t.payload || null;
						case cs.A:
						case Wr.g:
						case Is.b:
						case Is.n:
						case cs.K:
							return null;
						case O.a:
							return Fs(t) === Me.Db.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				ra = r("./src/reddit/selectors/scheduledPosts/index.ts");
			var sa = (e = null, t) => {
				switch (t.type) {
					case cs.c:
						return t.payload || null;
					case Is.b:
					case Is.n: {
						const e = t.payload;
						return Object(ra.n)({
							scheduledPost: e
						}) || null
					}
					case cs.A:
						return null;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION ? e : null;
					case Wr.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var aa = (e = null, t) => {
				switch (t.type) {
					case cs.q:
						return t.payload.type || null;
					case Is.b:
					case Is.n:
					case cs.i:
					case cs.A:
					case O.a:
						return null;
					default:
						return e
				}
			};
			var na = (e = !1, t) => {
				switch (t.type) {
					case cs.O:
						return t.payload || !1;
					case Is.b:
					case Is.n:
						return "CHAT" === t.payload.discussionType;
					case cs.A:
						return !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Wr.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var ca = (e = !1, t) => {
				switch (t.type) {
					case cs.W: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case cs.A:
						return !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Is.b:
					case Is.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var oa = (e = !1, t) => {
				switch (t.type) {
					case cs.Q:
						return t.payload || !1;
					case cs.A:
						return !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Wr.g:
						return t.payload.isNSFW || !1;
					case Is.b:
					case Is.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var da = (e = !1, t) => {
				switch (t.type) {
					case cs.R:
						return t.payload || !1;
					case cs.A:
						return !1;
					case cs.K: {
						const {
							name: r
						} = t.payload;
						return !!r && e
					}
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Wr.g:
						return t.payload.isOriginalContent || !1;
					case Is.b:
					case Is.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var ia = (e = !1, t) => {
				switch (t.type) {
					case cs.S:
						return t.payload || !1;
					case Is.b:
					case Is.n:
						return !!t.payload.poll;
					case cs.A:
						return !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					default:
						return e
				}
			};
			var ua = (e = !1, t) => {
				switch (t.type) {
					case cs.W: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case cs.A:
						return !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Is.b:
					case Is.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var la = (e = !1, t) => {
				switch (t.type) {
					case Is.b:
					case Is.n:
					case cs.A:
						return !1;
					case Wr.n:
						return t.payload;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Wr.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var pa = (e = !1, t) => {
				switch (t.type) {
					case cs.T:
						return t.payload || !1;
					case cs.A:
						return !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Wr.g:
						return t.payload.isSpoiler || !1;
					case Is.b:
					case Is.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var ba = (e = "", t) => {
				switch (t.type) {
					case m.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case O.a:
					case cs.i:
					case cs.q:
					case cs.A:
					case m.h:
						return "";
					default:
						return e
				}
			};
			var fa = (e = "", t) => {
				switch (t.type) {
					case m.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case O.a:
					case cs.i:
					case cs.q:
					case cs.A:
					case m.h:
						return "";
					default:
						return e
				}
			};
			var ya = (e = null, t) => {
					switch (t.type) {
						case cs.J:
						case cs.K:
							return t.payload;
						case cs.I:
						case O.a:
							return null;
						default:
							return e
					}
				},
				ma = r("./src/reddit/actions/polls.ts");
			var Ea = (e = null, t) => {
					switch (t.type) {
						case ma.a:
							return {
								...t.payload
							};
						case Is.b:
						case Is.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case m.h:
						case cs.A:
							return null;
						case O.a:
							return Fs(t) !== Me.Db.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				Oa = r("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				_a = r("./src/reddit/helpers/scheduledPosts/index.ts");
			var ha = (e = null, t) => {
				var r, s, a, n;
				switch (t.type) {
					case cs.W: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case cs.A:
					case Wr.g:
					case cs.K:
						return null;
					case O.a:
						if (Fs(t) === Me.Db.POST_CREATION) {
							const c = null === (n = (null !== (a = null === (s = null === (r = t.payload) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.match.queryParams) && void 0 !== a ? a : {}).frequency) || void 0 === n ? void 0 : n.toUpperCase();
							if (c && Object(Ks.m)(c)) {
								const t = Object(Oa.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										...Oa.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(Oa.b)(new Date(t.submitDate), c)
									}
								}
							}
							return e
						}
						return null;
					case Is.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case Is.b: {
						const e = t.payload;
						return {
							...Object(_a.h)(e)
						}
					}
					default:
						return e
				}
			};
			var Ia = (e = !1, t) => {
				const {
					type: r,
					payload: s
				} = t;
				switch (r) {
					case cs.U:
						return s || !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Is.b:
					case Is.n:
					case Wr.g:
						return !1;
					default:
						return e
				}
			};
			var ga = (e = "", t) => {
				switch (t.type) {
					case cs.g:
						return t.payload || "";
					case O.a:
						return Fs(t) !== Me.Db.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var Sa = (e = null, t) => {
				switch (t.type) {
					case O.a:
						return Fs(t) !== Me.Db.POST_CREATION ? null : e;
					case cs.A:
						return null;
					case Is.b:
					case Is.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var Da = (e = !0, t) => {
				switch (t.type) {
					case cs.A:
						return !0;
					case cs.V:
						return t.payload;
					case O.a:
						return Fs(t) !== Me.Db.POST_CREATION || e;
					case Wr.g:
						return t.payload.sendReplies;
					case Is.b:
					case Is.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var Ta = (e = null, t) => {
				switch (t.type) {
					case cs.W: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case cs.A:
					case Wr.g:
					case cs.K:
						return null;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION ? e : null;
					case Is.b:
					case Is.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const va = Me.Lb.POST;
			var wa = (e = va, t) => {
				switch (t.type) {
					case cs.A:
						return va;
					case cs.r:
						return Me.Lb.CROSSPOST;
					case cs.i:
						return t.payload.submissionType || va;
					case O.a: {
						if (Fs(t) !== Me.Db.POST_CREATION) return va;
						const r = Bs(t);
						if (!r) return e;
						const {
							title: s = "",
							url: a,
							text: n = "",
							media: c = !1,
							selftext: o = !1
						} = r, d = s && !n && !o;
						return c ? Me.Lb.MEDIA : void 0 !== a || d ? Me.Lb.LINK_ONLY : n || o ? Me.Lb.POST : e
					}
					case Wr.g: {
						const e = t.payload;
						return qs.a[e.kind]
					}
					case Is.b:
					case Is.n: {
						const e = t.payload;
						return e.poll ? Me.Lb.POLL : e.url ? Me.Lb.LINK_ONLY : Me.Lb.POST
					}
					default:
						return e
				}
			};
			var Aa = (e = null, t) => {
					switch (t.type) {
						case cs.W: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case cs.A:
						case Wr.g:
						case cs.K:
							return null;
						case O.a:
							return Fs(t) === Me.Db.POST_CREATION ? e : null;
						case Is.b:
						case Is.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				ja = r("./src/reddit/models/Poll/index.ts");
			const Ra = e => `Should ${e||"username"} become the top moderator?`,
				Pa = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Ca = (e = "", t) => {
					switch (t.type) {
						case cs.r:
							return t.payload.postTitle || "";
						case cs.j:
							return t.payload || "";
						case cs.z: {
							const {
								title: r
							} = t.payload;
							return e || (r || "")
						}
						case cs.A:
							return "";
						case O.a: {
							if (Fs(t) !== Me.Db.POST_CREATION) return "";
							const r = Bs(t);
							return r && r.title ? (e => e ? e.replace(/\+/g, " ") : "")(r.title) : e
						}
						case Wr.g:
							return t.payload.title;
						case cs.q: {
							const {
								oldType: r,
								type: s
							} = t.payload;
							return s === ja.a.ReplaceTopMod ? Ra("") : s === ja.a.Spinoff ? Pa("") : r === ja.a.ReplaceTopMod || r === ja.a.Spinoff ? "" : e
						}
						case m.c: {
							const {
								username: e
							} = t.payload;
							return Ra(e)
						}
						case m.b: {
							const {
								subredditName: e
							} = t.payload;
							return Pa(e)
						}
						case cs.i: {
							const {
								extra: r
							} = t.payload;
							return !r || r.govType !== ja.a.ReplaceTopMod && r.govType !== ja.a.Spinoff ? e : ""
						}
						case Is.b:
						case Is.n:
							return t.payload.title;
						default:
							return e
					}
				},
				La = Object(c.c)({
					body: ea,
					eventSchedule: ta,
					flair: sa,
					govType: aa,
					isChatPost: na,
					isContestMode: ca,
					isNSFW: oa,
					isOC: da,
					isPostAsMetaMod: ua,
					isPoll: ia,
					isPublicLink: la,
					isSpoiler: pa,
					newSubreddit: ba,
					newTopMod: fa,
					nextSubreddit: ya,
					polls: Ea,
					postSchedule: ha,
					postToTwitter: Ia,
					recaptcha: ga,
					scheduledPostId: Sa,
					sendReplies: Da,
					stickyPosition: Ta,
					submissionType: wa,
					suggestedSort: Aa,
					title: Ca
				});
			var Na = (e = null, t) => {
				switch (t.type) {
					case O.a: {
						if (Fs(t) !== Me.Db.POST_CREATION) return null;
						const r = Bs(t);
						return r && r.text && (e => e ? e.replace(/\+/g, " ") : "")(r.text) ? Vs.h.MARKDOWN : e
					}
					case cs.D: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case cs.E:
						return null;
					case cs.M: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case Is.b:
					case Is.n:
						return t.payload.contentType === Ks.a.RTJSON ? Vs.h.RICH_TEXT : Vs.h.MARKDOWN;
					default:
						return e
				}
			};
			const ka = {
				title: [],
				body: [],
				link: [],
				flair: []
			};
			var xa = (e = ka, t) => {
				switch (t.type) {
					case cs.c:
					case cs.d:
					case cs.e:
						return e[Me.ob.BODY] ? {
							...e,
							[Me.ob.BODY]: []
						} : e;
					case cs.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return e[Me.ob.BODY] && r ? {
							...e,
							[Me.ob.BODY]: []
						} : e
					}
					case cs.j:
						return e[Me.ob.TITLE] ? {
							...e,
							[Me.ob.TITLE]: []
						} : e;
					case cs.H: {
						const r = t.payload;
						return {
							...e,
							[r]: []
						}
					}
					case cs.n: {
						const r = t.payload;
						return r ? {
							...e,
							[r]: []
						} : ka
					}
					case cs.G:
					case cs.F:
						return ((e, t) => {
							const r = (t.fields || []).filter(({
								field: e
							}) => Object(Vs.u)(e));
							if (!r.length) return e;
							const s = r.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
							return {
								...e,
								...s
							}
						})(e, t.payload);
					case O.a:
						return Fs(t) !== Me.Db.POST_CREATION ? ka : e;
					default:
						return e
				}
			};
			var Ua = (e = !1, t) => {
				switch (t.type) {
					case cs.b:
					case cs.c:
					case cs.d:
					case cs.e:
					case cs.f:
					case cs.j:
					case cs.i:
					case cs.Q:
					case cs.R:
					case cs.T:
					case Wr.n:
					case cs.V:
					case cs.W:
						return !0;
					case cs.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					case cs.L:
					case Is.h:
						return !1;
					case cs.N:
						return t.payload;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case cs.A:
					case Wr.l:
					case Wr.g:
						return !1;
					default:
						return e
				}
			};
			const Ma = Vs.q.Post;
			var Ga = (e = Ma, t) => {
					switch (t.type) {
						case cs.w:
							return Vs.q.Post;
						case cs.B:
							return t.payload;
						case Wr.j:
							return Vs.q.Draft;
						case O.a:
							return Fs(t) !== Me.Db.POST_CREATION ? Ma : e;
						default:
							return e
					}
				},
				Fa = Object(c.c)({
					editorMode: Na,
					fieldValidation: xa,
					isChanged: Ua,
					submitMode: Ga
				});
			var Ba = (e = "", t) => {
				switch (t.type) {
					case cs.D:
						return t.payload.editorMode === Vs.h.MARKDOWN ? t.payload.postContent || "" : e;
					case cs.E:
						return "";
					case cs.M:
						return t.payload.editorMode === Vs.h.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const qa = Qs.a.createInitial;
			var Ha = (e = qa(), t) => {
					switch (t.type) {
						case cs.E:
							return Qs.a.createInitial();
						case cs.D: {
							const r = t.payload;
							return r.editorMode === Vs.h.RICH_TEXT && "object" == typeof r.postContent ? Qs.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case cs.M: {
							const r = t.payload;
							return r.editorMode === Vs.h.RICH_TEXT && r.editorKey === Vs.g.POST_EDITING ? Qs.a.createInitial(r.content) : e
						}
						default:
							return e
					}
				},
				Va = Object(c.c)({
					markdown: Ba,
					rte: Ha
				});
			var Ka = (e = null, t) => {
					switch (t.type) {
						case cs.D: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case cs.E:
							return null;
						default:
							return e
					}
				},
				Wa = Object(c.c)({
					draft: Va,
					postId: Ka
				}),
				$a = Object(c.c)({
					api: Ns,
					drafts: Gs,
					formData: La,
					formState: Fa,
					postEditing: Wa
				}),
				Xa = r("./src/reddit/actions/dashboard/constants.ts");
			const Qa = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var za = (e = Qa, t) => {
				switch (t.type) {
					case Xa.a:
						return {
							...e, selectedComponent: t.payload
						};
					case Xa.d: {
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
					case Xa.c: {
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
			var Ja = (e = null, t) => {
				switch (t.type) {
					case Ae.b:
					case Ae.c:
						return null;
					case Ae.a: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			var Ya = (e = !1, t) => {
				switch (t.type) {
					case Ae.c:
						return !1;
					case Ae.b:
						return !0;
					default:
						return e
				}
			};
			var Za = (e = !1, t) => {
					switch (t.type) {
						case Ae.c:
							return !0;
						case Ae.b:
						case Ae.a:
							return !1;
						default:
							return e
					}
				},
				en = Object(c.c)({
					error: Ja,
					loaded: Ya,
					pending: Za
				}),
				tn = Object(c.c)({
					list: en
				}),
				rn = r("./node_modules/lodash/isEmpty.js"),
				sn = r.n(rn);
			const an = {};
			var nn = (e = an, t) => {
					switch (t.type) {
						case Ae.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							return sn()(r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				cn = r("./node_modules/lodash/forOwn.js"),
				on = r.n(cn),
				dn = r("./src/reddit/helpers/name/index.ts");
			const un = {};
			var ln = (e = un, t) => {
					switch (t.type) {
						case Ae.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							if (sn()(r)) return e;
							const s = {};
							return on()(r, e => {
								s[Object(dn.g)(e.unitName)] = e.id
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				pn = Object(c.c)({
					api: tn,
					models: nn,
					nameToId: ln
				}),
				bn = r("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const fn = [];
			var yn = (e = fn, t) => {
					switch (t.type) {
						case bn.a: {
							const {
								subredditId: r
							} = t.payload;
							return [...e, r]
						}
						default:
							return e
					}
				},
				mn = r("./src/reddit/actions/economics/banners/constants.ts");
			const En = {
				dismissedBanners: {}
			};
			var On = (e = En, t) => {
					switch (t.type) {
						case mn.c: {
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
						case mn.d: {
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
						case mn.a:
						case mn.b: {
							const {
								subredditId: r,
								bannerType: s
							} = t.payload, a = e.dismissedBanners[r] || {}, n = t.type === mn.a;
							return {
								...e,
								dismissedBanners: {
									...e.dismissedBanners,
									[r]: {
										...a,
										data: {
											...a.data,
											[s]: n
										}
									}
								}
							}
						}
						default:
							return e
					}
				},
				_n = r("./src/reddit/models/Badge/managementPage.ts");
			const hn = {
				badgeType: _n.a.Cosmetic,
				view: _n.c.Gallery
			};
			var In = (e = hn, t) => {
				switch (t.type) {
					case y.c: {
						const {
							badge: r,
							initialView: s
						} = t.payload;
						return r || s ? {
							...e,
							badgeType: r ? Object(_n.d)(r.placement) : e.badgeType,
							view: s
						} : e
					}
					case y.b: {
						const r = t.payload;
						return {
							...e,
							badgeType: r
						}
					}
					case y.d: {
						const r = t.payload;
						return {
							...e,
							view: r
						}
					}
					case s.b:
						return hn;
					default:
						return e
				}
			};
			var gn = (e = null, t) => {
					switch (t.type) {
						case y.c:
							return {
								badge: t.payload.badge
							};
						case s.b:
							return null;
						default:
							return e
					}
				},
				Sn = r("./src/reddit/actions/economics/powerups/constants.ts");

			function Dn(e, t) {
				const {
					name: r,
					emojiIcon: s,
					stickerIcon: a
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
						x: a.x,
						y: a.y,
						path: a.url,
						type: a.mimeType
					}
				}
			}

			function Tn(e) {
				if (!e) return e;
				const {
					mediaPacks: t
				} = e, r = {};
				return null == t || t.forEach(e => {
					const {
						id: t,
						name: s,
						emotes: a
					} = e;
					r[t] = {
						id: t,
						name: s,
						emotes: a.map(e => Dn(e, t))
					}
				}), r
			}
			const vn = {};
			var wn = (e = vn, t) => {
				switch (t.type) {
					case y.e: {
						const {
							emotes: r,
							emoteCollections: s
						} = t.payload.products, a = {};
						return r.forEach(e => {
							const t = e.extra && e.extra.assets,
								r = Object.keys(e.collections || {})[0] || e.title,
								n = s[r];
							a[r] || (a[r] = {
								emotes: {},
								position: n ? n.position : 0,
								title: n ? n.title : e.title
							}), t && Object.keys(t).forEach(s => {
								const n = t[s];
								a[r].emotes[s] = {
									id: s,
									emoji: n.emoji,
									extra: {
										rtDescription: e.extra && e.extra.rtDescription
									},
									fullId: `emote|${e.id}|${s}`,
									imageType: n.emoji.type,
									sticker: n.sticker
								}
							})
						}), {
							...e,
							[t.payload.subredditId]: Object.keys(a).map(e => a[e]).sort((e, t) => e.position - t.position)
						}
					}
					case oe.ib: {
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
					case Sn.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload;
						return function(e, t, r) {
							if (!e[t]) return e;
							const s = e[t].findIndex(e => e.title === t);
							return -1 === s ? e : {
								...e,
								[t]: e[t].map((e, a) => a !== s ? e : {
									title: e.title,
									emotes: {
										...e.emotes,
										[r.name]: Dn(r, t)
									}
								})
							}
						}(e, r, s)
					}
					default:
						return e
				}
			};
			const An = {};
			var jn = (e = An, t) => {
					switch (t.type) {
						case y.e: {
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
				Rn = r("./src/reddit/actions/economics/me/constants.ts");
			const Pn = {
				fetched: !1,
				data: {}
			};
			var Cn = (e = Pn, t) => {
					switch (t.type) {
						case Rn.a:
							return {
								fetched: !0, data: t.payload
							};
						case y.h: {
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
				Ln = r("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const Nn = {
				fetched: !1,
				data: null
			};
			var kn = (e = Nn, t) => {
					switch (t.type) {
						case Rn.b:
							return {
								fetched: !0, data: e.data
							};
						case Rn.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				xn = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Un = Object(c.c)({
					banners: On,
					currentBadgeManagementScreen: In,
					currentModalArgs: gn,
					emotes: wn,
					gifs: jn,
					me: Cn,
					paymentSystems: Ln.b,
					pointsCopy: kn,
					subredditPremium: xn.b
				}),
				Mn = r("./src/reddit/actions/emoji.ts");
			const Gn = {};
			var Fn = (e = Gn, t) => {
					switch (t.type) {
						case Mn.h: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Mn.g:
						case Mn.f: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...a
							} = e;
							return a
						}
						default:
							return e
					}
				},
				Bn = Object(c.c)({
					pending: Fn
				}),
				qn = Object(c.c)({
					list: Bn
				});
			const Hn = {};
			var Vn = (e = Hn, t) => {
					switch (t.type) {
						case Mn.f:
						case Mn.c:
							return e;
						case Mn.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Mn.d: {
							const {
								emojiName: r,
								subredditId: s
							} = t.payload, a = e[s].emojis, {
								[r]: n,
								...c
							} = a;
							return {
								...e,
								[s]: {
									...e[s],
									emojis: c
								}
							}
						}
						case Mn.i: {
							const r = t.payload,
								s = e[r.subredditId].emojis,
								a = {
									url: r.url,
									name: r.name,
									userFlairAllowed: r.userFlairAllowed,
									postFlairAllowed: r.postFlairAllowed,
									modFlairOnly: r.modFlairOnly
								},
								n = {
									...s,
									[r.name]: a
								};
							return {
								...e,
								[r.subredditId]: {
									...e[r.subredditId],
									emojis: n
								}
							}
						}
						case Mn.e: {
							const {
								emojiName: r,
								isSnoomoji: s,
								settings: a,
								subredditId: n
							} = t.payload, c = s ? "snoomojis" : "emojis", o = e[n][c], d = {
								...o,
								[r]: {
									...o[r],
									...a
								}
							};
							return {
								...e,
								[n]: {
									...e[n],
									[c]: d
								}
							}
						}
						default:
							return e
					}
				},
				Kn = Object(c.c)({
					api: qn,
					models: Vn
				}),
				Wn = r("./src/reddit/actions/experiments.ts");
			const $n = /^experiment_(.*)$/i,
				Xn = e => {
					const t = e.match($n);
					if (null !== t) return t[1]
				},
				Qn = {};
			var zn = (e = Qn, t) => {
					switch (t.type) {
						case O.a: {
							const r = Bs(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = Xn(e);
								t && (s[t.toLowerCase()] = r[e] || "")
							}
							return sn()(s) ? e : {
								...e,
								...s
							}
						}
						case Wn.b: {
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
				Jn = r("./src/reddit/actions/externalAccount.ts");
			const Yn = {};
			var Zn = (e = Yn, t) => {
				switch (t.type) {
					case Jn.e:
					case Jn.f: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Jn.d: {
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
			const ec = {};
			var tc = (e = ec, t) => {
					switch (t.type) {
						case Jn.e: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Jn.f:
						case Jn.d: {
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
				rc = Object(c.c)({
					error: Zn,
					pending: tc
				});
			const sc = {};
			var ac = (e = sc, t) => {
				switch (t.type) {
					case Jn.l:
					case Jn.k: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Jn.j: {
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
			const nc = {};
			var cc = (e = nc, t) => {
					switch (t.type) {
						case Jn.b: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Jn.c:
						case Jn.a: {
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
				oc = Object(c.c)({
					error: ac,
					pending: cc
				});
			const dc = {};
			var ic = (e = dc, t) => {
				switch (t.type) {
					case Jn.i:
					case Jn.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Jn.g: {
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
			const uc = {};
			var lc = (e = uc, t) => {
				switch (t.type) {
					case Jn.h: {
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
			const pc = {};
			var bc = (e = pc, t) => {
					switch (t.type) {
						case Jn.i: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Jn.h:
						case Jn.g: {
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
				fc = Object(c.c)({
					error: ic,
					fetched: lc,
					pending: bc
				});
			const yc = {};
			var mc = (e = yc, t) => {
				switch (t.type) {
					case Jn.l:
					case Jn.k: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Jn.j: {
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
			const Ec = {};
			var Oc = (e = Ec, t) => {
					switch (t.type) {
						case Jn.l: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Jn.k:
						case Jn.j: {
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
				_c = Object(c.c)({
					error: mc,
					pending: Oc
				}),
				hc = Object(c.c)({
					connect: rc,
					disconnect: oc,
					user: _c,
					subreddit: fc
				});
			const Ic = {};
			var gc = (e = Ic, t) => {
				switch (t.type) {
					case Jn.h: {
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
			const Sc = {};
			var Dc = (e = Sc, t) => {
					switch (t.type) {
						case Jn.k: {
							const {
								username: r,
								accountsData: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case Jn.c: {
							const {
								username: r,
								provider: s
							} = t.payload, a = e[r];
							return a && a[s] ? {
								...e,
								[r]: xs()(a, s)
							} : e
						}
						default:
							return e
					}
				},
				Tc = Object(c.c)({
					api: hc,
					user: Dc,
					subreddit: gc
				}),
				vc = r("./src/reddit/featureFlags/index.ts");
			const wc = new Set(["0", "disabled", "false", "off", ""]);
			var Ac = e => !wc.has(e.toLowerCase());
			const jc = vc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				Rc = vc.a.reduce((e, t) => (e[t] = null, e), {});
			var Pc = (e = Rc, t) => {
					switch (t.type) {
						case O.a: {
							const r = Bs(t);
							if (void 0 !== r) {
								const t = {};
								for (const e in r) {
									const s = Object(vc.g)(e);
									if (s) {
										const a = jc[s.toLowerCase()];
										if (a) {
											const s = r[e],
												n = "string" != typeof s || Ac(s);
											t[a] = n
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
						case vc.b: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return s === e[r] ? e : {
								...e,
								[r]: s
							}
						}
						case vc.c: {
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
				Cc = Object(c.c)({
					overrides: Pc
				}),
				Lc = r("./src/reddit/actions/focusedVerticals/constants.ts");
			const Nc = {
				focusedVerticalGqlError: null
			};
			var kc = (e = Nc, t) => {
				switch (t.type) {
					case Lc.h:
					case Lc.g:
					case Lc.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case Lc.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const xc = {
				focusedVerticalGqlPending: !1
			};
			var Uc = (e = xc, t) => {
					switch (t.type) {
						case Lc.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case Lc.e:
						case Lc.g:
						case Lc.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				Mc = Object(c.c)({
					error: kc,
					pending: Uc
				});
			var Gc = (e = "", t) => {
				switch (t.type) {
					case Lc.g:
					case Lc.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const Fc = {
				dismissed: !0
			};
			var Bc = (e = Fc, t) => {
				switch (t.type) {
					case Lc.j:
						return {
							dismissed: !1
						};
					case Lc.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var qc = (e = null, t) => {
				switch (t.type) {
					case Lc.g:
					case Lc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Hc = (e = null, t) => {
				switch (t.type) {
					case Lc.g:
					case Lc.c:
					case Lc.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Vc = (e = null, t) => {
					switch (t.type) {
						case Lc.g:
						case Lc.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Kc = Object(c.c)({
					api: Mc,
					components: Bc,
					interactedSubredditIds: qc,
					recommendedSubredditIds: Vc,
					category: Gc,
					lastLoadedEnv: Hc
				});
			Object(Ue.a)("FONTS_FONT_FILES_PARSED");
			const Wc = [];
			var $c = (e = Wc, t) => {
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var Xc = (e = null, t) => {
				switch (t.type) {
					case oe.q:
						return t.payload;
					case oe.f:
					case O.a:
					case oe.K:
					case oe.t:
						return null;
					default:
						return e
				}
			};
			var Qc = (e = !1, t) => {
				switch (t.type) {
					case oe.f:
					case O.a:
					case oe.t:
					case oe.q:
						return !1;
					case oe.r:
						return !0;
					default:
						return e
				}
			};
			var zc = (e = !1, t) => {
					switch (t.type) {
						case oe.r:
						case oe.f:
						case O.a:
						case oe.t:
						case oe.q:
							return !1;
						case oe.v:
							return !0;
						default:
							return e
					}
				},
				Jc = Object(c.c)({
					error: Xc,
					pending: Qc,
					showLoader: zc
				});
			var Yc = (e = null, t) => {
				switch (t.type) {
					case oe.L:
					case oe.K: {
						if (!t.payload) return null;
						const {
							correlationId: e
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
			var Zc = (e = null, t) => {
				switch (t.type) {
					case oe.u: {
						const {
							id: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var eo = (e = null, t) => {
				const r = t.payload;
				switch (t.type) {
					case oe.J:
					case oe.K:
						return r.thingId;
					case oe.t:
					case O.a:
					case oe.f:
						return null;
					default:
						return e
				}
			};
			var to = (e = !1, t) => {
				switch (t.type) {
					case oe.s:
						return t.payload;
					case oe.K:
						return !1;
					default:
						return e
				}
			};
			var ro = (e = !1, t) => {
				switch (t.type) {
					case oe.J:
						return !0;
					default:
						return e
				}
			};
			var so = (e = "", t) => {
				switch (t.type) {
					case oe.w:
						return t.payload;
					case oe.K:
						return "";
					default:
						return e
				}
			};
			const ao = we.n;
			var no = (e = ao, t) => {
					switch (t.type) {
						case oe.fb:
							return t.payload;
						case oe.K: {
							const {
								award: e
							} = t.payload;
							return e || ao
						}
						default:
							return e
					}
				},
				co = Object(c.c)({
					api: Jc,
					correlationId: Yc,
					gildModalThingId: eo,
					isAnonymous: to,
					isIframed: ro,
					message: so,
					gildedThing: Zc,
					selectedAward: no
				});
			var oo = (e = null, t) => {
				switch (t.type) {
					case oe.x:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg || "An unknown error occurred";
					case oe.g:
					case O.a:
					case oe.L:
					case oe.C:
						return null;
					default:
						return e
				}
			};
			var io = (e = !1, t) => {
					switch (t.type) {
						case oe.g:
						case O.a:
						case oe.C:
						case oe.x:
							return !1;
						case oe.y:
							return !0;
						default:
							return e
					}
				},
				uo = Object(c.c)({
					error: oo,
					pending: io
				});
			var lo = (e = "", t) => {
					switch (t.type) {
						case oe.L: {
							const {
								profileName: e
							} = t.payload;
							return e
						}
						case O.a:
						case oe.g:
						case oe.C:
							return "";
						default:
							return e
					}
				},
				po = Object(c.c)({
					api: uo,
					givePremiumModalAccountName: lo
				}),
				bo = r("./src/reddit/actions/header.ts"),
				fo = r("./src/reddit/actions/overlayEvents.ts");
			var yo = (e = !1, t) => {
					switch (t.type) {
						case bo.a:
							return !1;
						case bo.b:
							return !0;
						case bo.c:
							return !e;
						case fo.b:
							return !1;
						default:
							return e
					}
				},
				mo = Object(c.c)({
					isSubscriptionsDropdownOpen: yo
				});
			var Eo = (e = !1, t) => {
					switch (t.type) {
						case "HTML_RESPONSE_STREAMING_STARTED":
							return !0;
						case "HTML_RESPONSE_STREAMING_ENDED":
							return !1;
						default:
							return e
					}
				},
				Oo = r("./src/reddit/actions/imageUploads.ts");
			const _o = {};
			var ho = (e = _o, t) => {
					switch (t.type) {
						case Oo.d: {
							const r = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case Oo.c:
						case Oo.e:
						case Oo.b: {
							const r = t.payload;
							return e[r.id] ? {
								...e,
								[r.id]: r
							} : e
						}
						case Oo.a: {
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
				Io = r("./src/reddit/actions/interceptedAction.ts");
			var go = (e = null, t) => {
					switch (t.type) {
						case Io.a:
							return t.payload;
						case Io.b:
							return null;
						default:
							return e
					}
				},
				So = r("./src/reddit/actions/changeUsername.ts");
			var Do = (e = !0, t) => {
					switch (t.type) {
						case So.a:
							return !1;
						case So.b:
							return !0;
						default:
							return e
					}
				},
				To = r("./src/reddit/actions/emailVerificationTooltip.ts");
			var vo = (e = !0, t) => {
					switch (t.type) {
						case To.a:
							return !e;
						default:
							return e
					}
				},
				wo = r("./src/reddit/actions/moderatingSubreddits.ts");
			var Ao = (e = !1, t) => {
					switch (t.type) {
						case wo.a: {
							if (e) return e;
							const r = t.payload;
							return Object.keys(r).some(e => !0 === r[e].posts)
						}
						case Y.SUBREDDIT_LOADED:
						case $.b:
						case $.f:
						case Ne.PAGE_LOADED: {
							if (e) return e;
							const {
								payload: r
							} = t;
							return r.subredditPermissions && r.subreddits ? !!r.subredditPermissions.posts : e
						}
						case W.i:
						case W.f:
						case W.m:
						case W.p:
						case W.v: {
							if (e) return e;
							const {
								response: r
							} = t.payload, {
								moderatingSubreddits: s,
								moderatingProfiles: a
							} = r;
							let n = Object.keys(s).some(e => !0 === s[e].posts);
							if (!n) {
								n = Object.keys(a).some(e => !0 === s[e].posts)
							}
							return n
						}
						default:
							return e
					}
				},
				jo = r("./src/reddit/actions/jsApi.ts");
			const Ro = [];
			var Po = (e = Ro, t) => {
					switch (t.type) {
						case jo.a: {
							const r = t.payload;
							return -1 === e.indexOf(r) && (e = [...e, r]).sort(), e
						}
						default:
							return e
					}
				},
				Co = r("./src/reddit/actions/leaderboard/constants.ts");
			const Lo = {};
			var No = (e = Lo, t) => {
				switch (t.type) {
					case Co.a: {
						const {
							subredditId: r,
							data: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Co.b:
					case Co.c: {
						const {
							subredditId: r
						} = t.payload, {
							[r]: s,
							...a
						} = e;
						return a
					}
					default:
						return e
				}
			};
			const ko = {};
			var xo = (e = ko, t) => {
					switch (t.type) {
						case Co.a:
						case Co.c: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...a
							} = e;
							return a
						}
						case Co.b: {
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
				Uo = Object(c.c)({
					error: No,
					pending: xo
				});
			const Mo = {};
			var Go = (e = Mo, t) => {
					switch (t.type) {
						case Co.c: {
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
				Fo = Object(c.c)({
					api: Uo,
					models: Go
				});
			var Bo = (e = "", t) => {
				switch (t.type) {
					case O.a: {
						const {
							listingKey: r
						} = t.payload;
						return r || e
					}
					default:
						return e
				}
			};
			const qo = {};
			var Ho = (e = qo, t) => {
				switch (t.type) {
					case Ge.b:
					case Ge.c:
					case J.SEARCH_PENDING:
					case J.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Me.Pb.Subreddits) && -1 === s.indexOf(Me.Pb.Users) ? e : {
							...e,
							[r]: null
						}
					}
					case Ge.a:
					case J.SEARCH_FAILED: {
						const {
							key: r,
							error: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Me.Pb.Subreddits) && -1 === a.indexOf(Me.Pb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					case Ae.f:
					case Ae.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Ae.d: {
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
			const Vo = {};
			var Ko = (e = Vo, t) => {
					switch (t.type) {
						case Ge.b:
						case J.SEARCH_PENDING: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Me.Pb.Subreddits) && -1 === s.indexOf(Me.Pb.Users) ? e : {
								...e,
								[r]: !0
							}
						}
						case Ge.c:
						case Ge.a:
						case J.SEARCH_RESULTS_RECEIVED:
						case J.SEARCH_FAILED: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Me.Pb.Subreddits) && -1 === s.indexOf(Me.Pb.Users) ? e : {
								...e,
								[r]: !1
							}
						}
						case Ae.f: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ae.e:
						case Ae.d: {
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
				Wo = Object(c.c)({
					error: Ho,
					pending: Ko
				});
			const $o = {};
			var Xo = (e = $o, t) => {
				switch (t.type) {
					case Ge.c: {
						const {
							fetchedToken: r,
							key: s,
							type: a
						} = t.payload;
						if (-1 === a.indexOf(Me.Pb.Subreddits) && -1 === a.indexOf(Me.Pb.Users)) return e;
						const n = e[s];
						return {
							...e,
							[s]: {
								...n,
								[r]: !0
							}
						}
					}
					case Ae.e: {
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
			const Qo = {};
			var zo = (e = Qo, t) => {
				switch (t.type) {
					case Ge.c: {
						const {
							key: r,
							listingOrder: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Me.Pb.Subreddits) && -1 === a.indexOf(Me.Pb.Users) ? e : {
							...e,
							[r]: e[r].concat(s)
						}
					}
					case J.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							listingOrder: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Me.Pb.Subreddits) && -1 === a.indexOf(Me.Pb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Jo = {};
			var Yo = (e = Jo, t) => {
					switch (t.type) {
						case Ge.c:
						case J.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								tokens: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Me.Pb.Subreddits) && -1 === a.indexOf(Me.Pb.Users) ? e : s.listings ? {
								...e,
								[r]: {
									token: s.listings
								}
							} : Object(Kt.a)(e, r)
						}
						case Ae.e: {
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
				Zo = Object(c.c)({
					api: Wo,
					identifiers: zo,
					fetchedTokens: Xo,
					loadMore: Yo
				}),
				ed = r("./src/reddit/actions/eventPosts/constants.ts"),
				td = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				rd = r("./src/reddit/actions/pages/topic.ts");
			const sd = {};
			var ad = (e = sd, t) => {
					switch (t.type) {
						case je.c:
						case je.b:
						case Le.c:
						case Le.b:
						case Y.SUBREDDIT_PENDING:
						case Y.SUBREDDIT_LOADED:
						case je.g:
						case je.f:
						case Ce.e:
						case Ce.f:
						case Ce.i:
						case Ce.h:
						case Pe.s:
						case Pe.r:
						case td.b:
						case td.c:
						case Q.PROFILE_POSTS_PENDING:
						case Q.PROFILE_POSTS_LOADED:
						case Q.MORE_POSTS_PENDING:
						case Q.MORE_POSTS_LOADED:
						case Z.f:
						case Z.e:
						case ke.f:
						case ke.e:
						case ee.j:
						case rd.TOPIC_DATA_PENDING:
						case rd.TOPIC_DATA_LOADED:
						case rd.MORE_POSTS_PENDING:
						case rd.MORE_POSTS_LOADED:
						case ee.i:
						case ed.e:
						case ed.c:
						case ed.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: null
							}
						}
						case J.SEARCH_PENDING:
						case J.SEARCH_RESULTS_RECEIVED:
						case Ge.b:
						case Ge.c: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: null
							}
						}
						case je.a:
						case Le.a:
						case Y.SUBREDDIT_FAILED:
						case je.e:
						case Ce.g:
						case Pe.q:
						case td.a:
						case ee.h:
						case Z.d:
						case ke.d:
						case Q.PROFILE_POSTS_FAILED:
						case Q.MORE_POSTS_FAILED:
						case rd.TOPIC_DATA_FAILED:
						case rd.MORE_POSTS_FAILED:
						case ed.b: {
							const {
								key: r,
								error: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case J.SEARCH_FAILED:
						case Ge.a: {
							const {
								error: r,
								key: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				nd = r("./src/reddit/actions/linkedPosts/constants.ts"),
				cd = r("./src/reddit/actions/subreddit/constants.ts");
			const od = {};
			var dd = (e = od, t) => {
					switch (t.type) {
						case je.c:
						case Le.c:
						case Q.PROFILE_POSTS_PENDING:
						case ke.f:
						case Y.SUBREDDIT_PENDING:
						case je.g:
						case Ce.f:
						case Ce.i:
						case Pe.s:
						case td.c:
						case Z.f:
						case Q.MORE_POSTS_PENDING:
						case ee.j:
						case rd.MORE_POSTS_PENDING:
						case ed.e: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case J.SEARCH_PENDING:
						case Ge.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: !0
							}
						}
						case je.b:
						case je.a:
						case Le.a:
						case Le.b:
						case ke.d:
						case ke.e:
						case Q.PROFILE_POSTS_FAILED:
						case Q.PROFILE_POSTS_LOADED:
						case Y.SUBREDDIT_LOADED:
						case Y.SUBREDDIT_FAILED:
						case je.f:
						case je.e:
						case nd.a:
						case nd.b:
						case Ce.e:
						case Ce.d:
						case Ce.h:
						case Ce.g:
						case Pe.r:
						case Pe.q:
						case Z.d:
						case Z.e:
						case Q.MORE_POSTS_FAILED:
						case Q.MORE_POSTS_LOADED:
						case cd.k:
						case td.b:
						case td.a:
						case ee.i:
						case ee.h:
						case rd.MORE_POSTS_LOADED:
						case rd.MORE_POSTS_FAILED:
						case ed.c:
						case ed.b:
						case ed.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case cd.s: {
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
						case J.SEARCH_RESULTS_RECEIVED:
						case J.SEARCH_FAILED:
						case Ge.c:
						case Ge.a: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				id = Object(c.c)({
					error: ad,
					pending: dd
				}),
				ud = r("./src/reddit/actions/postList.ts"),
				ld = r("./node_modules/lodash/omitBy.js"),
				pd = r.n(ld);

			function bd(e, t) {
				return t = t.toLowerCase(), pd()(e, (e, r) => r === t || r.startsWith(`${t}--[`))
			}
			const fd = {};
			var yd = (e = fd, t) => {
				switch (t.type) {
					case ud.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case ud.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? xs()(e, [r]) : e
					}
					case Y.SUBREDDIT_INVALIDATE_LISTING:
						return bd(e, t.payload);
					default:
						return e
				}
			};
			const md = {};
			var Ed = (e = md, t) => {
					switch (t.type) {
						case Ce.e:
						case je.b:
						case Le.b:
						case Y.SUBREDDIT_LOADED:
						case Q.PROFILE_POSTS_LOADED:
						case rd.TOPIC_DATA_LOADED: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: {}
							}
						}
						case je.f:
						case Ce.h:
						case Pe.r:
						case Z.e:
						case Q.MORE_POSTS_LOADED:
						case ee.i:
						case rd.MORE_POSTS_LOADED: {
							const {
								key: r,
								fetchedToken: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									[s]: !0
								}
							}
						}
						case Ge.c: {
							const {
								fetchedToken: r,
								key: s,
								type: a
							} = t.payload;
							if (a.indexOf(Me.Pb.Posts) > -1) {
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
						case Y.SUBREDDIT_INVALIDATE_LISTING:
							return bd(e, t.payload);
						default:
							return e
					}
				},
				Od = r("./src/reddit/actions/post.ts");
			const _d = {};
			var hd = (e = _d, t) => {
					switch (t.type) {
						case je.c:
						case Ce.f:
						case Le.c:
						case Q.PROFILE_POSTS_PENDING:
						case Y.SUBREDDIT_PENDING:
						case ke.f:
						case Q.PROFILE_POSTS_PENDING:
						case rd.TOPIC_DATA_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: []
							}
						}
						case Ae.e:
						case nd.b:
						case Ce.e:
						case je.b:
						case Le.b:
						case Y.SUBREDDIT_LOADED:
						case cd.k:
						case td.b:
						case ke.e:
						case Q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case rd.TOPIC_DATA_LOADED:
						case ed.c: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case cd.s: {
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
						case je.f:
						case Ce.h:
						case Pe.r:
						case Q.MORE_POSTS_LOADED:
						case Z.e:
						case ee.i:
						case rd.MORE_POSTS_LOADED:
						case ed.d: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case J.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								postOrder: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: s
							}
						}
						case Ge.c: {
							const {
								key: r,
								postOrder: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case Od.k: {
							const {
								newStickiedPostList: r,
								listingKey: s
							} = t.payload;
							if (!e[s]) return e;
							const a = [...e[s]].filter(e => !r.includes(e));
							return a.unshift(...r), {
								...e,
								[s]: a
							}
						}
						case Y.SUBREDDIT_INVALIDATE_LISTING:
							return bd(e, t.payload);
						default:
							return e
					}
				},
				Id = r("./src/lib/makeListingKey/index.ts");
			const gd = {};
			var Sd = (e = gd, t) => {
				switch (t.type) {
					case Y.SUBREDDIT_LOADED: {
						const {
							key: r,
							listingSort: s
						} = t.payload;
						return s && !Object(Id.b)(r) ? {
							...e,
							[r]: {
								sort: s,
								hasChanged: !1
							}
						} : e
					}
					case kr.a:
					case kr.q: {
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
			const Dd = {};
			var Td = (e = Dd, t) => {
				switch (t.type) {
					case je.b:
					case Le.b:
					case Y.SUBREDDIT_LOADED:
					case ke.e:
					case Q.PROFILE_POSTS_LOADED:
					case je.f:
					case Ce.e:
					case Ce.h:
					case Pe.r:
					case Z.e:
					case Q.MORE_POSTS_LOADED:
					case ee.i:
					case rd.TOPIC_DATA_LOADED:
					case rd.MORE_POSTS_LOADED: {
						const {
							key: r,
							token: s,
							dist: a
						} = t.payload;
						return s ? {
							...e,
							[r]: {
								token: s,
								dist: a
							}
						} : Object(Kt.a)(e, r)
					}
					case Ge.c:
					case J.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							tokens: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Me.Pb.Posts) ? e : s.posts ? {
							...e,
							[r]: {
								token: s.posts
							}
						} : Object(Kt.a)(e, r)
					}
					case Y.SUBREDDIT_INVALIDATE_LISTING:
						return bd(e, t.payload);
					default:
						return e
				}
			};
			const vd = {};
			var wd = (e = vd, t) => {
					switch (t.type) {
						case ed.c:
						case ed.d: {
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
				Ad = Object(c.c)({
					api: id,
					endMarkers: yd,
					fetchedTokens: Ed,
					ids: hd,
					listingSort: Sd,
					loadMore: Td,
					pageInfo: wd
				}),
				jd = Object(c.c)({
					activeKey: Bo,
					listingOrder: Zo,
					postOrder: Ad
				});
			var Rd = (e = null, t) => {
				switch (t.type) {
					case je.b: {
						const r = t.payload;
						return sn()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var Pd = (e = null, t) => {
				switch (t.type) {
					case je.b: {
						const r = t.payload;
						return sn()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Cd = (e = !1, t) => {
				switch (t.type) {
					case je.b:
						return !0;
					default:
						return e
				}
			};
			var Ld = (e = !1, t) => {
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Nd = Object(c.c)({
					announcements: Rd,
					featured: Pd,
					isFrontpageLoaded: Cd,
					shouldShowAnnouncements: Ld
				}),
				kd = r("./src/reddit/actions/media.ts");
			const xd = {};
			var Ud = (e = xd, t) => {
				switch (t.type) {
					case kd.b: {
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
			const Md = {};
			var Gd = (e = Md, t) => {
					switch (t.type) {
						case kd.e: {
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
				Fd = Object(c.c)({
					currentSlideIndex: Ud,
					isGalleryTileLayout: Gd
				});
			var Bd = (e = !0, t) => {
				switch (t.type) {
					case kd.c:
						return t.payload;
					default:
						return e
				}
			};
			var qd = (e = .5, t) => {
					switch (t.type) {
						case kd.d:
							return t.payload;
						default:
							return e
					}
				},
				Hd = Object(c.c)({
					isMuted: Bd,
					volume: qd
				}),
				Vd = r("./src/reddit/actions/meta.ts");
			const Kd = {
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
				protocol: "",
				region: "",
				sessionReferrerDomain: "",
				userAgent: "",
				pageloadServerTime: 0
			};
			var Wd = (e = Kd, t) => {
					switch (t.type) {
						case Vd.b:
							return t.payload;
						case Vd.a:
							return {
								...e, ...t.payload
							};
						case Vd.c:
							return {
								...e, locale: t.payload
							};
						default:
							return e
					}
				},
				$d = r("./src/reddit/actions/subredditModeration/constants.ts");
			const Xd = {};
			var Qd = (e = Xd, t) => {
				switch (t.type) {
					case Y.SUBREDDIT_LOADED:
					case $.b:
					case $.f:
					case Ne.PAGE_LOADED: {
						const {
							payload: r
						} = t;
						if (!r.subredditPermissions || !r.subreddits) return e;
						const s = Object.keys(r.subredditAboutInfo || {});
						if (1 !== s.length) return e;
						const a = s[0];
						return {
							...e,
							[a]: r.subredditPermissions
						}
					}
					case W.i:
					case W.f:
					case W.m:
					case W.p:
					case W.v: {
						const {
							response: r
						} = t.payload, {
							moderatingSubreddits: s,
							moderatingProfiles: a
						} = r;
						return {
							...e,
							...s,
							...a
						}
					}
					case ee.f:
					case Ce.e:
					case W.k: {
						const r = t.payload,
							{
								moderatingSubreddits: s,
								moderatingProfiles: a
							} = r;
						return {
							...e,
							...s,
							...a
						}
					}
					case $d.Z: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Kt.a)(e, r)
					}
					case $d.S: {
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
			var zd = (e = null, t) => {
				switch (t.type) {
					case Od.e:
						return t.payload;
					case Od.d:
						return null
				}
				return e
			};
			var Jd = (e = null, t) => {
				switch (t.type) {
					case Ce.b:
					case Ce.k:
						return null;
					case Ce.a:
					case Ce.j:
						return t.payload;
					default:
						return e
				}
			};
			var Yd = (e = !1, t) => {
					switch (t.type) {
						case Ce.b:
						case Ce.k:
							return !0;
						case Ce.c:
						case Ce.a:
						case Ce.l:
						case Ce.j:
							return !1;
						default:
							return e
					}
				},
				Zd = Object(c.c)({
					error: Jd,
					pending: Yd
				});
			const ei = [];
			var ti = (e = ei, t) => {
					switch (t.type) {
						case Ce.e: {
							const r = t.payload,
								{
									filteredSubreddits: s
								} = r;
							return s || e
						}
						case Ce.j: {
							const r = t.payload;
							return [...e, r]
						}
						case Ce.k:
						case Ce.a: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						default:
							return e
					}
				},
				ri = Object(c.c)({
					api: Zd,
					names: ti
				}),
				si = Object(c.c)({
					filteredSubreddits: ri
				}),
				ai = r("./src/reddit/actions/modMode.ts");
			var ni = (e = !0, t) => {
				switch (t.type) {
					case ai.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const ci = {};
			var oi = (e = ci, t) => {
				switch (t.type) {
					case H.v: {
						const {
							moreCommentsId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case H.u: {
						const {
							moreCommentsItem: r
						} = t.payload;
						return {
							...e,
							[r.id]: null
						}
					}
					case H.t: {
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
			const di = {};
			var ii = (e = di, t) => {
					switch (t.type) {
						case H.v: {
							const {
								moreCommentsId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case H.t:
						case H.u: {
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
				ui = Object(c.c)({
					error: oi,
					pending: ii
				}),
				li = r("./src/reddit/models/Comment/index.ts");
			const pi = {};
			var bi = (e = pi, t) => {
					switch (t.type) {
						case V.b:
							const {
								comment: r, parentCommentId: s, depth: a, originId: n, isChatSort: c
							} = t.payload;
							if (!c) {
								if (n) {
									const t = "moreComments-" + n,
										c = e[t],
										o = r.id.split("_")[1];
									if (c) {
										const r = c.numComments + 1;
										if (c.depth && a === c.depth) {
											const s = atob(c.token).concat(", ", o);
											return {
												...e,
												[t]: {
													...c,
													numComments: r,
													token: btoa(s)
												}
											}
										}
										return {
											...e,
											[t]: {
												...c,
												numComments: r
											}
										}
									}
									return {
										...e,
										[t]: {
											id: t,
											depth: a,
											parentId: s,
											token: btoa(o),
											numComments: 1,
											next: null,
											prev: Object(li.g)(s),
											postId: r.postId,
											isFromLiveWebSocket: !0
										}
									}
								}
								return e
							}
							return {
								...e, ...t.payload.moreComments
							};
						case H.u:
						case $.b:
						case $.f:
							return {
								...e, ...t.payload.moreComments
							};
						default:
							return e
					}
				},
				fi = Object(c.c)({
					api: ui,
					models: bi
				});
			var yi = (e = null, t) => {
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
			var mi = (e = !1, t) => {
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
			var Ei = (e = null, t) => {
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
				Oi = Object(c.c)({
					error: yi,
					fetched: mi,
					pending: Ei
				});
			var _i = (e = null, t) => {
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
			var hi = (e = !1, t) => {
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
			var Ii = (e = !1, t) => {
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
				gi = Object(c.c)({
					error: _i,
					fetched: hi,
					pending: Ii
				});
			var Si = (e = null, t) => {
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
			var Di = (e = !1, t) => {
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
			var Ti = (e = !1, t) => {
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
				vi = Object(c.c)({
					error: Si,
					fetched: Di,
					pending: Ti
				});
			var wi = (e = null, t) => {
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
			var Ai = (e = !1, t) => {
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
			var ji = (e = !1, t) => {
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
				Ri = Object(c.c)({
					error: wi,
					fetched: Ai,
					pending: ji
				});
			var Pi = (e = null, t) => {
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
			var Ci = (e = !1, t) => {
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
			var Li = (e = !1, t) => {
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
				Ni = Object(c.c)({
					error: Pi,
					fetched: Ci,
					pending: Li
				});
			var ki = (e = !1, t) => {
				switch (t.type) {
					case Pe.t:
						return !1;
					case Pe.u:
						return !0;
					default:
						return e
				}
			};
			var xi = (e = !1, t) => {
					switch (t.type) {
						case Pe.t:
							return !0;
						case Pe.u:
							return !1;
						default:
							return e
					}
				},
				Ui = Object(c.c)({
					fetched: ki,
					pending: xi
				});
			var Mi = (e = null, t) => {
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
			var Gi = (e = !1, t) => {
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
			var Fi = (e = !0, t) => {
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
				Bi = Object(c.c)({
					error: Mi,
					fetched: Gi,
					pending: Fi
				});
			var qi = (e = null, t) => {
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
			var Hi = (e = !1, t) => {
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
			var Vi = (e = null, t) => {
					switch (t.type) {
						case Pe.v:
						case Pe.x:
							return null;
						case Pe.w:
							const {
								id: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				Ki = Object(c.c)({
					error: qi,
					fetched: Hi,
					pending: Vi
				}),
				Wi = Object(c.c)({
					addSubreddit: Oi,
					create: gi,
					deleteMulti: vi,
					duplicate: Ri,
					edit: Ni,
					forUser: Ui,
					recommendations: Bi,
					removeSubreddit: Ki
				}),
				$i = r("./node_modules/lodash/isEqual.js"),
				Xi = r.n($i),
				Qi = r("./node_modules/lodash/union.js"),
				zi = r.n(Qi);

			function Ji(e, t, r) {
				let s, a, n = e.length - 1,
					c = 0;
				for (; c <= n;) {
					const o = r(s = e[a = (c + n) / 2 | 0], t);
					if (o < 0) {
						if ((c = a + 1) > n) return c
					} else {
						if (!(o > 0)) return a;
						if ((n = a - 1) < c) return n + 1
					}
				}
				return (c + n) / 2 | 0
			}
			var Yi = r("./src/reddit/actions/profile/constants.ts");
			const Zi = {};
			var eu = (e = Zi, t) => {
					switch (t.type) {
						case Le.b:
						case Pe.r:
						case Pe.u:
						case Yi.h: {
							const {
								multireddits: r,
								multiredditsByUser: s,
								multiredditsModelsState: a
							} = t.payload, n = {
								...e
							}, c = {
								...r,
								...a
							};
							for (const t in s) {
								const r = s[t],
									a = e[t];
								n[t] = zi()(a, r).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return Xi()(e, n) ? e : n
						}
						case Pe.g:
						case Pe.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, a = e[r] ? e[r].slice() : [], n = Ji(a, s.url, (e, t) => e > t ? 1 : -1);
							return a.splice(n, 0, s.url), {
								...e,
								[r]: a
							}
						}
						case Pe.j: {
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
				tu = r("./src/reddit/actions/subscription/constants.ts"),
				ru = r("./src/reddit/models/Multireddit/index.ts");
			const su = {};
			var au = (e = su, t) => {
				switch (t.type) {
					case Le.b:
					case Pe.r:
					case Pe.u:
					case Yi.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const a = {
									...t.payload.multireddits[s]
								},
								n = e[s];
							n && !Object(ru.g)(a) && (a.subredditIds = n.subredditIds, a.profileIds = n.profileIds), s in e && Xi()(e[a.url], a) || (r = {
								...r,
								[s]: a
							})
						}
						return sn()(r) ? e : {
							...e,
							...r
						}
					}
					case Pe.g:
					case Pe.m: {
						const {
							multireddit: r
						} = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case Pe.j: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r], s
					}
					case Pe.p: {
						const r = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case Pe.x: {
						const {
							id: r,
							multipath: s,
							type: a
						} = t.payload, n = e[s], c = "subreddit" === a ? (n.subredditIds || []).filter(e => e !== r) : n.subredditIds, o = "profile" === a ? (n.profileIds || []).filter(e => e !== r) : n.profileIds;
						return {
							...e,
							[s]: {
								...n,
								profileIds: o,
								subredditIds: c
							}
						}
					}
					case tu.d: {
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
					case tu.e: {
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
					case Pe.c: {
						const {
							id: r,
							multipaths: s,
							type: a
						} = t.payload, n = s.reduce((t, s) => {
							const n = e[s],
								c = "subreddit" === a ? [...n.subredditIds || [], r] : n.subredditIds,
								o = "profile" === a ? [...n.profileIds || [], r] : n.profileIds;
							return {
								...t,
								[s]: {
									...n,
									subredditIds: c,
									profileIds: o
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
			const nu = {};
			var cu = (e = nu, t) => {
					switch (t.type) {
						case Pe.B: {
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
				ou = Object(c.c)({
					api: Wi,
					byUserId: eu,
					models: au,
					recommendations: cu
				}),
				du = r("./src/reddit/actions/notificationBanner.ts");
			var iu = (e = null, t) => {
					switch (t.type) {
						case du.b:
							return t.payload.notificationBannerId;
						case du.a:
							return null;
						default:
							return e
					}
				},
				uu = r("./src/reddit/actions/notificationsInbox/constants.ts");
			var lu = (e = !1, t) => {
				switch (t.type) {
					case uu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case uu.d:
					case uu.b:
						return !1;
					default:
						return e
				}
			};
			var pu = (e = !1, t) => {
					switch (t.type) {
						case uu.d:
							return !0;
						case uu.a:
						case uu.b:
							return !1;
						default:
							return e
					}
				},
				bu = Object(c.c)({
					error: lu,
					pending: pu
				});
			var fu = (e = null, t) => {
				switch (t.type) {
					case uu.f:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			const yu = [];
			var mu = (e = yu, t) => {
				switch (t.type) {
					case uu.b: {
						const r = t.payload && t.payload.nodes;
						return [...e, ...r]
					}
					case uu.e: {
						const r = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== r)
					}
					case uu.c: {
						const r = t.payload && t.payload.id,
							s = t.payload && t.payload.now,
							a = e.findIndex(e => e.id === r);
						return -1 === a ? e : [...e.slice(0, a), {
							...e[a],
							readAt: s
						}, ...e.slice(a + 1)]
					}
					default:
						return e
				}
			};
			var Eu = (e = null, t) => {
					switch (t.type) {
						case uu.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				Ou = Object(c.c)({
					api: bu,
					earlierDividerIndex: fu,
					notifications: mu,
					pageInfo: Eu
				}),
				_u = r("./src/reddit/actions/nps.ts");
			const hu = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Iu = (e = hu, t) => {
				switch (t.type) {
					case _u.c:
						return {
							...hu, pending: !0
						};
					case _u.a:
						return hu;
					case _u.b: {
						const {
							dest: e
						} = t.payload;
						return {
							...hu,
							success: !0,
							dest: e
						}
					}
					default:
						return e
				}
			};
			const gu = e => {
				const {
					id: t,
					experimentName: r,
					name: s,
					version: a
				} = e;
				return {
					id: parseInt(t),
					name: r,
					variant: s || void 0,
					version: a
				}
			};
			const Su = e => {
					const t = {};
					for (const r of e) t[r.experimentName.toLowerCase()] = gu(r);
					return t
				},
				Du = {};
			var Tu = (e = Du, t) => {
				switch (t.type) {
					case Wn.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return Su(r)
					}
					default:
						return e
				}
			};
			var vu = Object(c.c)({
					byName: Tu,
					canonicalUrl: (e = null, t) => {
						switch (t.type) {
							case Wn.a: {
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
				wu = Object(c.c)({
					experiments: vu
				}),
				Au = r("./node_modules/history/esm/history.js");
			const ju = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null,
				metas: {}
			};
			var Ru = (e = ju, t) => {
				switch (t.type) {
					case O.a: {
						const r = e.currentPage,
							s = t.payload,
							{
								routeMatch: a,
								location: n
							} = s,
							{
								key: c
							} = n;
						if (void 0 === c) return e;
						const o = Object(Au.e)(n),
							d = a ? ((e, t, r, s) => {
								const {
									action: a,
									...n
								} = r.route;
								return {
									key: e,
									locationState: s.state,
									meta: r.route.meta,
									queryParams: r.match.queryParams,
									routeMatch: {
										...r,
										route: n
									},
									status: 200,
									url: t,
									urlParams: r.match.params
								}
							})(c, o, a, n) : ((e, t) => ({
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
					case O.e: {
						const r = t.payload,
							{
								key: s,
								meta: a
							} = r;
						return {
							...e,
							metas: {
								...e.metas,
								[s]: a
							}
						}
					}
					case O.f: {
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
					case $.b:
					case $.f:
						return !e.currentPage || t.payload.postMeta, e;
					case O.b:
						return e;
					case O.d: {
						const {
							allowNavigationCallback: r
						} = t.payload;
						return {
							...e,
							allowNavigationCallback: r
						}
					}
					case O.c:
						return {
							...e, allowNavigationCallback: null
						};
					default:
						return e
				}
			};
			const Pu = {};
			var Cu = (e = Pu, t) => {
				switch (t.type) {
					case m.k: {
						const {
							pollId: r
						} = t.payload.pollResults, {
							[r]: s,
							...a
						} = e;
						return a
					}
					case m.j: {
						const {
							pollId: r
						} = t.payload, {
							[r]: s,
							...a
						} = e;
						return a
					}
					case m.i: {
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
			const Lu = {};
			var Nu = (e = Lu, t) => {
					switch (t.type) {
						case m.k: {
							const {
								pollId: r
							} = t.payload.pollResults;
							return {
								...e,
								[r]: !1
							}
						}
						case m.i: {
							const {
								pollId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case m.j: {
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
				ku = Object(c.c)({
					error: Cu,
					pending: Nu
				}),
				xu = Object(c.c)({
					voting: ku
				}),
				Uu = r("./src/reddit/actions/economics/predictions/constants.ts");
			const Mu = {};
			var Gu = (e = Mu, t) => {
				switch (t.type) {
					case m.h: {
						const {
							poll: r
						} = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case je.b:
					case Y.SUBREDDIT_LOADED:
					case ee.i:
					case je.f:
					case $.b:
					case $.f: {
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
						const a = {};
						return Object.keys(s).forEach(e => {
							var t;
							(null === (t = s[e]) || void 0 === t ? void 0 : t.pollData) && (a[e] = (e => {
								if (!e.pollData) return null;
								const {
									id: t,
									authorId: r,
									belongsTo: s,
									created: a,
									pollData: {
										isPrediction: n,
										options: c,
										resolvedOptionId: o,
										totalStakeAmount: d,
										totalVoteCount: i,
										tournamentId: u,
										userSelection: l,
										userWonAmount: p,
										votingEndTimestamp: b
									}
								} = e;
								return {
									id: t,
									createdAt: a,
									creatorId: r,
									subredditId: s.id,
									endsAt: b,
									postId: t,
									options: c,
									totalVoters: i,
									type: ja.a.GA,
									isPrediction: n,
									totalStakeAmount: d,
									tournamentId: u,
									userSelection: l,
									userWonAmount: p,
									resolvedOptionId: o
								}
							})(s[e]))
						}), {
							...e,
							...a
						}
					}
					case Uu.g:
					case Uu.f:
						const {
							pollId: r, prediction: {
								options: s,
								selectedOptionId: a,
								totalVoteCount: n,
								...c
							}
						} = t.payload;
						return {
							...e, [r]: {
								...e[r],
								...c,
								userSelection: a,
								options: s.map(({
									id: t,
									redditorStakeAmount: s,
									totalStakeAmount: a,
									voteCount: n
								}) => ({
									...e[r].options.find(e => e.id === t),
									totalStakeAmount: a,
									userStakeAmount: s,
									voteCount: n
								})),
								totalVoters: n
							}
						};
					default:
						return e
				}
			};
			const Fu = {};
			var Bu = (e = Fu, t) => {
				switch (t.type) {
					case m.k: {
						const {
							[ja.c.ByVoters]: r, pollId: s
						} = t.payload.pollResults;
						return {
							...e,
							[s]: r
						}
					}
					case m.e: {
						const {
							pollId: r,
							optionId: s,
							options: a
						} = t.payload;
						let n = 0;
						const c = {};
						for (const e of a) n += e.voteCount, c[e.id] = {
							id: "number" == typeof e.id ? e.id : parseInt(e.id),
							userSelected: e.id === s,
							votes: e.voteCount.toString()
						};
						return {
							...e,
							[r]: {
								options: c,
								totalVotes: n.toString()
							}
						}
					}
					case je.b:
					case Y.SUBREDDIT_LOADED:
					case ee.i:
					case je.f:
					case $.b:
					case $.f: {
						const {
							governance: r,
							posts: s
						} = t.payload;
						if (r) {
							const t = Object.keys(r).reduce((e, t) => {
								const s = r[t],
									{
										[ja.c.ByVoters]: a,
										pollId: n
									} = s.pollResults;
								return e[n] = a, e
							}, {});
							return {
								...e,
								...t
							}
						}
						const a = Object.keys(s).reduce((e, t) => {
							var r;
							if (!(null === (r = s[t]) || void 0 === r ? void 0 : r.pollData)) return e;
							const a = (e => {
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
							return a ? (e[t] = a, e) : e
						}, {});
						return Object.keys(a).length ? {
							...e,
							...a
						} : e
					}
					default:
						return e
				}
			};
			const qu = {};
			var Hu = (e = qu, t) => {
					switch (t.type) {
						case m.k: {
							const {
								[ja.c.ByVotingPower]: r, pollId: s
							} = t.payload.pollResults;
							return {
								...e,
								[s]: r
							}
						}
						case je.b:
						case Y.SUBREDDIT_LOADED:
						case ee.i:
						case je.f:
						case $.b:
						case $.f: {
							const {
								governance: r
							} = t.payload;
							if (r) {
								const t = Object.keys(r).reduce((e, t) => {
									const s = r[t],
										{
											[ja.c.ByVotingPower]: a,
											pollId: n
										} = s.pollResults;
									return e[n] = a, e
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
				Vu = Object(c.c)({
					byVoters: Bu,
					byVotingPower: Hu
				});
			const Ku = {};
			var Wu = (e = Ku, t) => {
					switch (t.type) {
						case m.k: {
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
				$u = Object(c.c)({
					api: xu,
					models: Gu,
					results: Vu,
					rewards: Wu
				});
			const Xu = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Qu = (e = Xu, t) => {
				switch (t.type) {
					case Br.i:
					case Br.j:
						return {
							...e, reorderError: null
						};
					case Br.h:
						return {
							...e, reorderError: t.payload
						};
					case Br.l:
					case Br.m:
						return {
							...e, updateDescriptionError: null
						};
					case Br.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Br.p:
					case Br.q:
						return {
							...e, updateLayoutError: null
						};
					case Br.o:
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
			var Ju = (e = zu, t) => {
					switch (t.type) {
						case Br.i:
							return {
								...e, reorderPending: !0
							};
						case Br.h:
						case Br.j:
							return {
								...e, reorderPending: !1
							};
						case Br.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Br.k:
						case Br.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Br.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Br.o:
						case Br.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				Yu = Object(c.c)({
					error: Qu,
					pending: Ju
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
					case Ne.PAGE_LOADED:
					case Ce.e:
					case Ce.h:
					case X.b:
					case X.e:
					case ke.e:
					case ke.b:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case Y.SUBREDDIT_LOADED:
					case je.b:
					case Le.b:
					case Y.SUBREDDIT_LOADED:
					case $.b:
					case $.f:
					case Od.g:
					case Pe.r:
					case je.f:
					case Z.e:
					case "RECOMMENDED_POSTS_LOADED":
					case ee.i:
					case Ge.c:
					case xe.b:
					case J.SEARCH_RESULTS_RECEIVED:
					case Br.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let a = r;
						if (s) {
							const e = tl(s);
							a = xt()(r, e)
						}
						return {
							...e,
							...a
						}
					}
					case Br.d: {
						const {
							collection: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						const a = r.id;
						let n = r;
						if (s) {
							n = tl(s)(r)
						}
						return {
							...e,
							[a]: n
						}
					}
					case Br.g: {
						const {
							collectionId: r,
							postId: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: {
								...a,
								postIds: a.postIds.filter(e => e !== s)
							}
						} : e
					}
					case Br.a: {
						const {
							collectionId: r,
							postId: s
						} = t.payload, a = e[r];
						return a && s ? {
							...e,
							[r]: {
								...a,
								postIds: [...a.postIds, s]
							}
						} : e
					}
					case Br.e: {
						const {
							collectionId: r
						} = t.payload, s = {
							...e
						};
						return delete s[r], s
					}
					case Br.s: {
						const {
							collectionId: r,
							newTitle: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: {
								...a,
								title: s
							}
						} : e
					}
					case Br.j: {
						const {
							collectionId: r,
							postIds: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: {
								...a,
								postIds: [...s]
							}
						} : e
					}
					case Br.m: {
						const {
							collectionId: r,
							newDescription: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: {
								...a,
								description: s
							}
						} : e
					}
					case Br.q: {
						const {
							collectionId: r,
							newLayout: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: {
								...a,
								displayLayout: s
							}
						} : e
					}
					default:
						return e
				}
			};
			const sl = {};
			var al = (e = sl, t) => {
					switch (t.type) {
						case Ne.PAGE_LOADED:
						case Br.f: {
							const {
								collections: r
							} = t.payload;
							if (!r) return e;
							const s = Object.keys(r);
							if (!s.length) return e;
							const {
								subredditId: a
							} = r[s[0]];
							return {
								...e,
								[a]: s
							}
						}
						case Br.d: {
							const {
								collection: r
							} = t.payload, {
								subredditId: s
							} = r, a = e[s] || [];
							return {
								...e,
								[s]: [...a, r.id]
							}
						}
						case Br.e: {
							const {
								collectionId: r,
								collection: s
							} = t.payload;
							if (!s) return e;
							const a = s && e[s.subredditId];
							return a ? {
								...e,
								[s.subredditId]: a.filter(e => e !== r)
							} : e
						}
						default:
							return e
					}
				},
				nl = Object(c.c)({
					models: rl,
					subredditToIds: al,
					api: Yu
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
						case Ne.PAGE_LOADED:
						case je.f:
						case Ce.e:
						case Ce.h:
						case Pe.r:
						case td.b:
						case $.b:
						case $.f:
						case je.b:
						case Le.b:
						case J.SEARCH_RESULTS_RECEIVED:
						case Y.SUBREDDIT_LOADED:
						case X.b:
						case X.e:
						case z.c:
						case z.i:
						case z.e:
						case z.g:
						case Z.e:
						case xe.b:
						case xe.b:
						case ke.b:
						case ke.e:
						case Q.MORE_POSTS_LOADED:
						case Q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Ge.c:
						case Ge.c:
						case ee.i:
							return ul(e, t.payload.postFlair);
						case cl.c: {
							const {
								subredditId: r,
								isEnabled: s
							} = t.payload, a = {
								...e[r].displaySettings,
								isEnabled: s
							};
							return {
								...e,
								[r]: {
									...e[r],
									displaySettings: a
								}
							}
						}
						case cl.a: {
							const {
								subredditId: r,
								canAssignOwn: s
							} = t.payload, a = {
								...e[r].permissions,
								canAssignOwn: s
							};
							return {
								...e,
								[r]: {
									...e[r],
									permissions: a
								}
							}
						}
						case cl.f: {
							const {
								subredditId: r,
								template: s
							} = t.payload, a = e[r], {
								templates: n,
								templateIds: c
							} = a, o = {
								...n,
								[s.id]: s
							}, d = [...c];
							return d.includes(s.id) || d.push(s.id), {
								...e,
								[r]: {
									...a,
									templates: o,
									templateIds: d
								}
							}
						}
						case cl.b: {
							const {
								subredditId: r,
								templateId: s
							} = t.payload, a = e[r], {
								templates: n,
								templateIds: c
							} = a, o = xs()(n, s), d = c.filter(e => e !== s);
							return {
								...e,
								[r]: {
									...a,
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
						case W.i:
						case W.f:
						case W.m:
						case W.p:
						case W.v: {
							const {
								response: r
							} = t.payload;
							return ul(e, r.postFlair)
						}
						default:
							return e
					}
				},
				pl = r("./src/reddit/actions/inFeedChaining.ts");
			var bl = (e = !1, t) => {
				switch (t.type) {
					case pl.a:
						return t.payload.isDismissed;
					default:
						return e
				}
			};
			const fl = {};
			var yl = (e = fl, t) => {
				switch (t.type) {
					case pl.c: {
						const {
							isDismissed: r,
							listingKey: s,
							postId: a
						} = t.payload;
						if (r) return {
							...e,
							[a]: s
						};
						const n = {
							...e
						};
						return delete n[a], n
					}
					default:
						return e
				}
			};
			const ml = {};
			var El = (e = ml, t) => {
					switch (t.type) {
						case pl.b:
							return {
								...e, [t.payload.postId]: t.payload.listingKey
							};
						default:
							return e
					}
				},
				Ol = Object(c.c)({
					dismissed: bl,
					dismissedIdToListingKey: yl,
					idToListingKey: El
				});
			var _l = (e = null, t) => {
					switch (t.type) {
						case Od.a:
							return t.payload;
						default:
							return e
					}
				},
				hl = r("./src/reddit/actions/embedAndImage.ts");
			const Il = {};
			var gl = (e = Il, t) => {
					switch (t.type) {
						case hl.b: {
							const {
								postId: r
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: !1
							} : e
						}
						case hl.a: {
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
				Sl = Object(c.c)({
					loadable: gl
				});
			const Dl = {};
			var Tl = (e = Dl, t) => {
				switch (t.type) {
					case Od.b: {
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
			var vl = (e = null, t) => {
				switch (t.type) {
					case Od.c: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const wl = {};
			var Al = (e = wl, t) => {
					switch (t.type) {
						case Ce.e:
						case Ce.h:
						case je.b:
						case Y.SUBREDDIT_LOADED:
						case je.f:
						case Z.e:
						case "RECOMMENDED_POSTS_LOADED":
						case ee.i:
						case Ge.c:
						case J.SEARCH_RESULTS_RECEIVED:
							return q()({
								...e
							}, t.payload.postInstances, (e, t) => {
								if (e) return e.concat(t)
							});
						default:
							return e
					}
				},
				jl = r("./src/reddit/actions/isTrackingCrossposts.ts");
			const Rl = {};
			var Pl = (e = Rl, t) => {
				switch (t.type) {
					case jl.a: {
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
			const Cl = {};
			var Ll = (e = Cl, t) => {
					switch (t.type) {
						case m.h: {
							const {
								poll: r
							} = t.payload;
							return {
								...e,
								[r.postId]: r.id
							}
						}
						case je.b:
						case Y.SUBREDDIT_LOADED:
						case ee.i:
						case je.f:
						case $.b:
						case $.f: {
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
							const a = Object.keys(s).reduce((e, t) => {
								var r;
								return (null === (r = s[t]) || void 0 === r ? void 0 : r.pollData) ? (e[t] = t, e) : e
							}, {});
							return {
								...e,
								...a
							}
						}
						default:
							return e
					}
				},
				Nl = r("./src/reddit/actions/bulkActions/constants.ts"),
				kl = r("./src/reddit/actions/constants.ts"),
				xl = r("./src/reddit/actions/flairManagement/constants.ts"),
				Ul = r("./src/reddit/actions/googleQASchema/constants.ts"),
				Ml = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				Gl = r("./src/reddit/actions/subredditTopContent.ts"),
				Fl = r("./src/reddit/helpers/isPost.ts"),
				Bl = r("./node_modules/lodash/pickBy.js"),
				ql = r.n(Bl);

			function Hl(e, t) {
				const r = ql()(t, (t, r = "") => !e[r] || !Xi()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var Vl = r("./src/reddit/models/Gold/Gild/index.tsx"),
				Kl = r("./src/reddit/models/Media/index.ts"),
				Wl = r("./src/reddit/models/ModQueue/index.ts"),
				$l = r("./src/reddit/models/Post/index.ts"),
				Xl = r("./src/reddit/models/Vote/index.ts"),
				Ql = r("./src/reddit/actions/subredditDuplicates.ts");
			const zl = {},
				Jl = e => {
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
				Yl = e => t => {
					const r = e[t.id];
					return r && r.events && (t.events = r.events, t.source = r.source), t
				},
				Zl = e => t => {
					const r = e[t.id];
					return r && r.isSponsored && (t.isSponsored = r.isSponsored), t
				},
				ep = e => e.media && Object(Kl.E)(e.media) ? {
					...Object(F.unsetIn)(e, ["source"])
				} : e,
				tp = e => t => {
					const r = e[t.id];
					return t && t.media && r && r.media && Object(Kl.H)(t.media) && t.media.isRichtextPreview && Object(Kl.H)(r.media) && !r.media.isRichtextPreview && (t.media.richtextContent = r.media.richtextContent, t.media.isRichtextPreview = !1), t
				},
				rp = e => t => {
					const r = e[t.id];
					return r && r.numDuplicates && (t.numDuplicates = r.numDuplicates), t
				},
				sp = e => {
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
				np = e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				},
				cp = (e, t) => ({
					...e,
					events: t.events,
					source: t.source
				});
			var op = (e = zl, t) => {
				switch (t.type) {
					case O.a:
						if (Fs(t) === (Me.Db.COMMENTS || Me.Db.DUPLICATES)) {
							const r = Bs(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									a = Object($l.r)(s.partialPostId);
								if (e[a] && e[t]) return {
									...e,
									[a]: cp(e[a], e[t])
								}
							}
						}
						return e;
					case $.b:
					case $.f: {
						const r = Jl(t.payload.meta);
						return {
							...e,
							...xt()(t.payload.posts, np([r, sp, ap, ep, Yl(e), Zl(e), rp(e)]))
						}
					}
					case Od.g:
						return Hl(e, t.payload);
					case Ql.a:
						return Hl(e, t.payload.posts);
					case Ne.PAGE_LOADED:
					case nd.b:
					case Ce.e:
					case Ce.h:
					case X.b:
					case X.e:
					case ke.e:
					case ke.b:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case Y.SUBREDDIT_LOADED:
					case je.b:
					case Le.b:
					case Y.SUBREDDIT_LOADED:
					case td.b:
					case Pe.r:
					case je.f:
					case Z.e:
					case "RECOMMENDED_POSTS_LOADED":
					case cd.k:
					case ee.i:
					case xe.b:
					case rd.TOPIC_DATA_LOADED:
					case rd.MORE_POSTS_LOADED:
					case ed.c:
					case ed.d: {
						const r = Jl(t.payload.meta);
						return {
							...e,
							...xt()(t.payload.posts, np([r, sp, ap, ep, tp(e), rp(e)]))
						}
					}
					case cd.s: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								a = Jl(t.meta);
							Object.assign(r, xt()(t.posts, np([a, sp, ap, ep, tp(e), rp(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case td.b: {
						const r = Jl(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...xt()(t.payload.posts, np([r, sp, ap, ep, tp(e), rp(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ae.e:
					case Ge.c:
					case J.SEARCH_RESULTS_RECEIVED: {
						const r = Jl(t.payload.meta),
							s = xt()(t.payload.posts, np([r, ap, sp, ep]));
						return q()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case Od.h: {
						const r = t.payload;
						return q()({
							...e
						}, r, (e, t) => ({
							...e,
							...t
						}))
					}
					case kl.a: {
						const {
							id: r,
							vote: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: Object(Xl.c)(a, s)
						} : e
					}
					case V.b:
					case H.G: {
						const r = t.payload.comment.postId,
							s = e[r];
						if (s) {
							const a = void 0 !== t.payload.numComments ? t.payload.numComments : s.numComments + 1;
							return {
								...e,
								[r]: {
									...s,
									numComments: a
								}
							}
						}
						return e
					}
					case H.y: {
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
					case oe.mb: {
						const {
							topAwardedPosts: r
						} = t.payload;
						return {
							...e,
							...r.reduce((e, t) => (e[t.post.id] = np([ap])(Object(zs.e)(t.post)), e), {})
						}
					}
					case oe.t: {
						const {
							id: r,
							awardings: s,
							gilder: a,
							treatmentTags: n
						} = t.payload, c = e[r];
						return c ? {
							...e,
							[r]: {
								...Object(Vl.a)(c, s, a),
								treatmentTags: n
							}
						} : e
					}
					case oe.E: {
						const {
							awardId: r,
							thingId: s
						} = t.payload, a = e[s];
						return a ? {
							...e,
							[s]: Object(Vl.b)(a, r)
						} : e
					}
					case $d.n: {
						const {
							posts: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case W.i:
					case W.f:
					case W.m:
					case W.p:
					case W.v: {
						const {
							response: r
						} = t.payload, {
							posts: s
						} = r;
						return {
							...e,
							...xt()(s, np([ap, ep]))
						}
					}
					case Nl.b:
					case W.s: {
						const {
							operation: r,
							ids: s,
							username: a,
							options: n
						} = t.payload, c = s.filter(e => Object(Fl.a)(e)), o = Object(Wl.d)(e, r, c, a, n);
						return q()({
							...e
						}, o, (e, t) => ({
							...e,
							...t
						}))
					}
					case Br.t: {
						const {
							postId: r,
							collectionId: s
						} = t.payload, a = e[r];
						if (a && s) {
							const t = a.collectionIds || [];
							return t.push(s), {
								...e,
								[r]: {
									...a,
									collectionIds: [...t]
								}
							}
						}
						return e
					}
					case Br.e: {
						const {
							collectionId: r,
							collection: s
						} = t.payload, a = s && s.postIds || [], n = {};
						return a.forEach(t => {
							const s = e[t],
								a = s && s.collectionIds;
							if (a) {
								const e = a.filter(e => e !== r);
								n[t] = {
									...s,
									collectionIds: e
								}
							}
						}), {
							...e,
							...n
						}
					}
					case Br.g: {
						const {
							collectionId: r,
							postId: s
						} = t.payload;
						if (!r || !s) return e;
						const a = e[s],
							n = a && a.collectionIds;
						if (!n) return e;
						const c = n.filter(e => e !== r);
						return {
							...e,
							[s]: {
								...a,
								collectionIds: c
							}
						}
					}
					case ed.f: {
						const {
							postId: r
						} = t.payload;
						if (!r) return e;
						const s = e[r];
						if (!s || !s.eventInfo) return e;
						const a = s.eventInfo;
						return {
							...e,
							[r]: {
								...s,
								eventInfo: {
									...a,
									eventIsLive: !0
								}
							}
						}
					}
					case ed.a: {
						const {
							postId: r,
							eventInfo: s
						} = t.payload;
						if (!r || !s) return e;
						const a = e[r];
						return a ? {
							...e,
							[r]: {
								...a,
								eventInfo: {
									...s
								}
							}
						} : e
					}
					case Lc.g: {
						const r = t.payload.subredditTopContent;
						return r && r.posts && Object.keys(r.posts) ? {
							...xt()(r.posts, np([ap, ep])),
							...e
						} : e
					}
					case z.c:
					case z.i:
					case z.e:
					case z.g:
					case Gl.b:
						return {
							...xt()(t.payload.posts, np([ap, ep])), ...e
						};
					case Od.j: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, a = e[r];
						return a && a.media && Object(Kl.H)(a.media) ? {
							...e,
							[r]: {
								...a,
								media: {
									...a.media,
									richtextContent: s,
									isRichtextPreview: !1
								}
							}
						} : e
					}
					case xl.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case xl.b: {
						const r = t.payload;
						return Object(Kt.a)(e, r)
					}
					case kd.a: {
						const {
							isDeleted: r,
							height: s,
							postId: a
						} = t.payload;
						return {
							...e,
							[a]: {
								...e[a],
								media: {
									...e[a].media,
									height: s,
									isDeleted: r
								}
							}
						}
					}
					case D.o: {
						const r = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...r
						}
					}
					case Ml.b: {
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
					case Ml.a:
						return {
							...e
						};
					case Ul.b: {
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
					case Ul.a:
						return {
							...e
						};
					default:
						return e
				}
			};
			var dp = (e = null, t) => {
					switch (t.type) {
						case Od.f:
							return t.payload;
						default:
							return e
					}
				},
				ip = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const up = {};
			var lp = (e = up, t) => {
				switch (t.type) {
					case ip.a: {
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
			const pp = [];
			var bp = (e = pp, t) => {
					switch (t.type) {
						case Od.i: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case je.b:
						case Y.SUBREDDIT_LOADED: {
							const {
								recentPostIds: r
							} = t.payload;
							return r && r.length ? r : e
						}
						default:
							return e
					}
				},
				fp = r("./node_modules/uuid/v4.js"),
				yp = r.n(fp);
			const mp = yp()();
			var Ep = (e = mp, t) => {
				switch (t.type) {
					case Ne.PAGE_LOADED:
					case Is.h:
					case Is.a:
					case Is.m:
					case Is.f:
						return yp()();
					default:
						return e
				}
			};
			var Op = (e = null, t) => {
				switch (t.type) {
					case Is.d:
					case Is.o:
					case Is.k:
					case Is.g:
					case Is.a:
					case Is.m:
					case Is.f:
						return null;
					case Is.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case Is.e:
						return "error";
					default:
						return e
				}
			};
			var _p = (e = !0, t) => {
				switch (t.type) {
					case Is.g:
						return !0;
					case Is.m:
					case Is.a:
					case Is.f:
					case Is.e:
						return !1;
					default:
						return e
				}
			};
			var hp = (e = !1, t) => {
					switch (t.type) {
						case Is.k:
							return !0;
						case Is.j:
						case Is.e:
						case Is.o:
						case Is.d:
							return !1;
						default:
							return e
					}
				},
				Ip = Object(c.c)({
					creationToken: Ep,
					error: Op,
					pending: _p,
					pendingUpdate: hp
				});
			const gp = {};
			var Sp = (e = gp, t) => {
				switch (t.type) {
					case Is.c: {
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
			const Dp = {
				standalonePosts: {
					POSTS_LOADED: Is.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: Is.o
				},
				recurringPosts: {
					POSTS_LOADED: Is.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: Is.d
				}
			};

			function Tp(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case Dp[e].POSTS_LOADED:
						case Is.f: {
							const {
								subredditInfoById: t
							} = s.payload, {
								id: a
							} = t, n = t.scheduledPosts[e].models.reduce((e, t) => (e[t.id] = t, e), {});
							return {
								...r,
								[a]: {
									...r[a] || {},
									...n
								}
							}
						}
						case Is.i:
						case Is.l: {
							const {
								subredditId: e,
								scheduledPostId: t
							} = s.payload, a = r[e] || {};
							return {
								...r,
								[e]: {
									...Object.keys(a).filter(e => e !== t).reduce((e, t) => (e[t] = a[t], e), {})
								}
							}
						}
						case Is.h: {
							const {
								subredditId: e
							} = s.payload;
							return Object.keys(r).reduce((t, s) => (s !== e && (t[s] = r[s]), t), {})
						}
						case Dp[e].MUTATION_SUCCEEDED: {
							let t;
							switch (e) {
								case "recurringPosts":
									t = s.payload.scheduledPost;
									break;
								case "standalonePosts":
								default:
									t = s.payload.scheduledPost
							}
							const a = t.subreddit.id,
								n = r[a][t.id],
								c = {
									[t.id]: {
										...n,
										...t
									}
								};
							return {
								...r,
								[a]: {
									...r[a] || {},
									...c
								}
							}
						}
						default:
							return r
					}
				}
			}
			const vp = {};

			function wp(e) {
				return (t = vp, r) => {
					switch (r.type) {
						case Dp[e].POSTS_LOADED:
						case Is.f: {
							const {
								subredditInfoById: s
							} = r.payload, a = s.id, {
								pageInfo: n
							} = s.scheduledPosts[e];
							return {
								...t,
								[a]: {
									...n
								}
							}
						}
						case Is.h: {
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
			var Ap = r("./node_modules/lodash/uniq.js"),
				jp = r.n(Ap);
			const Rp = {};

			function Pp(e) {
				return (t = Rp, r) => {
					switch (r.type) {
						case Dp[e].POSTS_LOADED:
						case Is.f: {
							const {
								subredditInfoById: s
							} = r.payload, a = s.id, n = s.scheduledPosts[Dp[e].postIdsKey];
							return {
								...t,
								[a]: jp()([...t[a] || [], ...n])
							}
						}
						case Is.i:
						case Is.l: {
							const {
								subredditId: e,
								scheduledPostId: s
							} = r.payload, a = t[e] || [];
							return {
								...t,
								[e]: a.filter(e => e !== s)
							}
						}
						case Is.h: {
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
			var Cp = Object(c.c)({
					models: Tp("recurringPosts"),
					pageInfo: wp("recurringPosts"),
					postOrder: Pp("recurringPosts"),
					editModal: Sp
				}),
				Lp = Object(c.c)({
					models: Tp("standalonePosts"),
					pageInfo: wp("standalonePosts"),
					postOrder: Pp("standalonePosts")
				}),
				Np = Object(c.c)({
					api: Ip,
					standalonePosts: Lp,
					recurringPosts: Cp
				});
			var kp = (e = null, t) => {
				switch (t.type) {
					case oe.lb:
						return t.payload;
					case oe.nb:
					case oe.mb:
						return null;
					default:
						return e
				}
			};
			var xp = (e = !1, t) => {
					switch (t.type) {
						case oe.mb:
						case oe.lb:
							return !1;
						case oe.nb:
							return !0;
						default:
							return e
					}
				},
				Up = Object(c.c)({
					error: kp,
					pending: xp
				});
			const Mp = [];
			var Gp = (e = Mp, t) => {
					switch (t.type) {
						case oe.mb: {
							const {
								topAwardedPosts: e
							} = t.payload;
							return e.filter(e => !(e.post.isNsfw || e.post.isArchived || e.post.isHidden || e.post.removedBy || e.post.removedByCategory && "NONE" !== e.post.removedByCategory)).map(e => ({
								postId: e.post.id,
								rank: e.rank,
								score: e.score
							}))
						}
						case oe.lb:
						case oe.nb:
							return Mp;
						default:
							return e
					}
				},
				Fp = Object(c.c)({
					api: Up,
					list: Gp
				}),
				Bp = r("./src/reddit/actions/video.ts");
			const qp = {};
			var Hp = (e = qp, t) => {
				switch (t.type) {
					case Bp.e: {
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
			const Vp = {};
			var Kp = (e = Vp, t) => {
				switch (t.type) {
					case Bp.a: {
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
			const Wp = {};
			var $p = (e = Wp, t) => {
				switch (t.type) {
					case Bp.b: {
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
			const Xp = {};
			var Qp = (e = Xp, t) => {
				switch (t.type) {
					case Bp.c: {
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
			const zp = {
				mutedInFeed: !0
			};
			var Jp = (e = zp, t) => {
				switch (t.type) {
					case Bp.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var Yp = (e = null, t) => {
				switch (t.type) {
					case Bp.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Bp.d:
						return null;
					default:
						return e
				}
			};
			const Zp = {};
			var eb = (e = Zp, t) => {
				switch (t.type) {
					case Bp.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Bp.e: {
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
			const tb = {};
			var rb = (e = tb, t) => {
				switch (t.type) {
					case Bp.h: {
						const {
							postId: r,
							time: s
						} = t.payload, a = e[r] || {
							cached: !0,
							start: s
						};
						return s < a.start ? e : {
							...e,
							[r]: {
								...a,
								playable: s
							}
						}
					}
					case Bp.f: {
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
			const sb = {};
			var ab = (e = sb, t) => {
				switch (t.type) {
					case Bp.j: {
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
			const nb = {};
			var cb = (e = nb, t) => {
				switch (t.type) {
					case Bp.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Bp.g: {
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
			const ob = {};
			var db = (e = ob, t) => {
				switch (t.type) {
					case Bp.i: {
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
			const ib = {};
			var ub = (e = ib, t) => {
					switch (t.type) {
						case Bp.m: {
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
				lb = r("./src/reddit/constants/video.ts");
			const pb = {};
			var bb = (e = pb, t) => {
					switch (t.type) {
						case Bp.n: {
							const {
								postId: r,
								time: s
							} = t.payload;
							return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < lb.l ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				fb = Object(c.c)({
					autoPlayed: Hp,
					buffering: Kp,
					consumed: $p,
					continuousViewStartedAt: Qp,
					feed: Jp,
					fullscreen: Yp,
					loadable: eb,
					loadTimes: rb,
					metadata: ab,
					paused: cb,
					playing: db,
					started: ub,
					time: bb
				}),
				yb = Object(c.c)({
					chained: Ol,
					embedAndImage: Sl,
					expanded: Tl,
					focus: vl,
					instances: Al,
					isTrackingCrossposts: Pl,
					metaMap: Ll,
					models: op,
					modToMemberShare: dp,
					crowdControl: _l,
					postLevelCrowdControl: lp,
					recent: bp,
					scheduledPosts: Np,
					topAwarded: Fp,
					video: fb
				}),
				mb = r("./src/lib/reducers/addAuthentication/index.ts");
			const Eb = {};
			var Ob = Object(mb.a)((e = Eb, t) => {
					switch (t.type) {
						case $.b:
						case $.f: {
							const {
								postId: r,
								commentLists: s,
								comments: a
							} = t.payload, n = s[r] && s[r].head;
							return n && a[n.id] && a[n.id].isStickied ? {
								...e,
								[r]: n.id
							} : e
						}
						case H.C: {
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
				}, Eb),
				_b = Object(c.c)({
					data: Ob
				});
			const hb = {};
			var Ib = (e = hb, t) => {
				switch (t.type) {
					case _.f:
					case _.g: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case _.e: {
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
			const gb = {};
			var Sb = (e = gb, t) => {
					switch (t.type) {
						case _.f: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case _.g:
						case _.e: {
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
				Db = Object(c.c)({
					error: Ib,
					pending: Sb
				});
			const Tb = {};
			var vb = (e = Tb, t) => {
				switch (t.type) {
					case _.d: {
						const {
							product: r
						} = t.payload;
						return {
							...e,
							[r.id]: void 0
						}
					}
					case _.c:
					case E.f:
					case E.g:
					case E.i:
					case E.j: {
						const {
							productId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case _.a:
					case E.d:
					case E.h: {
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
			var Ab = (e = wb, t) => {
					switch (t.type) {
						case _.c:
						case E.f: {
							const {
								productId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case _.d: {
							const {
								product: r
							} = t.payload;
							return {
								...e,
								[r.id]: !1
							}
						}
						case _.a:
						case E.d:
						case E.g: {
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
				jb = Object(c.c)({
					error: vb,
					pending: Ab
				}),
				Rb = Object(c.c)({
					fetch: Db,
					purchase: jb
				});
			var Pb = (e = null, t) => {
				switch (t.type) {
					case _.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const Cb = {};
			var Lb = (e = Cb, t) => {
					switch (t.type) {
						case y.i:
						case _.g: {
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
				Nb = Object(c.c)({
					api: Rb,
					currentlyPurchasing: Pb,
					models: Lb
				});
			const kb = {};
			var xb = (e = kb, t) => {
				switch (t.type) {
					case X.f:
					case X.e:
					case X.c:
					case X.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case X.d:
					case X.a: {
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
			const Ub = {};
			var Mb = (e = Ub, t) => {
					switch (t.type) {
						case X.f:
						case X.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case X.e:
						case X.d:
						case X.b:
						case X.a: {
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
				Gb = Object(c.c)({
					error: xb,
					pending: Mb
				});
			const Fb = {};
			var Bb = (e = Fb, t) => {
					switch (t.type) {
						case X.e: {
							const {
								key: r,
								commentIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case X.b: {
							const {
								key: r,
								commentIds: s
							} = t.payload, a = e[r] || [];
							return {
								...e,
								[r]: a.concat(s)
							}
						}
						default:
							return e
					}
				},
				qb = r("./src/reddit/actions/comment/list.ts");
			const Hb = {};
			var Vb = (e = Hb, t) => {
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
						return r in e ? xs()(e, r) : e
					}
					default:
						return e
				}
			};
			const Kb = {};
			var Wb = (e = Kb, t) => {
				switch (t.type) {
					case X.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {}
						}
					}
					case X.b: {
						const {
							key: r,
							fetchedToken: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: {
								...a,
								[s]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const $b = {};
			var Xb = (e = $b, t) => {
					switch (t.type) {
						case X.e:
						case X.b: {
							const {
								key: r,
								dist: s,
								token: a
							} = t.payload;
							return a ? {
								...e,
								[r]: {
									dist: s,
									token: a
								}
							} : Object(Kt.a)(e, r)
						}
						default:
							return e
					}
				},
				Qb = Object(c.c)({
					api: Gb,
					endMarkers: Vb,
					fetchedTokens: Wb,
					commentIds: Bb,
					loadMore: Xb
				}),
				zb = r("./src/reddit/actions/pages/profileModSettings.ts");
			var Jb = (e = !0, t) => {
					switch (t.type) {
						case zb.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				Yb = Object(c.c)({
					pending: Jb
				}),
				Zb = Object(c.c)({
					api: Yb
				});
			const ef = {};
			var tf = (e = ef, t) => (t.type, e);
			const rf = {};
			var sf = (e = rf, t) => {
				switch (t.type) {
					case z.a:
					case z.d: {
						const {
							listingKey: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case z.b:
					case z.c:
					case z.i:
					case z.f:
					case z.e:
					case z.g: {
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
			const af = {};
			var nf = (e = af, t) => {
					switch (t.type) {
						case z.b:
						case z.f: {
							const {
								listingKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case z.a:
						case z.d:
						case z.c:
						case z.i:
						case z.e:
						case z.g: {
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
				},
				cf = Object(c.c)({
					error: sf,
					pending: nf
				});
			const of = {};
			var df = (e = of , t) => {
				switch (t.type) {
					case z.c:
					case z.i:
					case z.e:
					case z.g: {
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
			const uf = {};
			var lf = (e = uf, t) => {
					switch (t.type) {
						case z.i:
						case z.c:
						case z.e:
						case z.g: {
							const {
								pageInfo: r,
								listingKey: s
							} = t.payload;
							return r ? {
								...e,
								[s]: r
							} : uf
						}
						default:
							return e
					}
				},
				pf = Object(c.c)({
					api: cf,
					ids: df,
					pageInfo: lf
				}),
				bf = r("./src/reddit/constants/posts.ts");
			const ff = {};
			var yf = (e = ff, t) => {
				switch (t.type) {
					case J.SEARCH_RESULTS_RECEIVED:
					case Ge.c:
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
					case tu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(e => e.type === bf.a.PROFILE);
						return a.length ? a.reduce((e, t) => (e[t.id] = {
							...e[t.id],
							userIsSubscriber: s
						}, e), {
							...e
						}) : e
					}
					case kr.n: {
						const r = t.payload,
							s = e[r.subredditId];
						if (!s) return e;
						if (s.publicDescription === r.settings.publicDescription) return e;
						const a = {
							...s,
							publicDescription: r.settings.publicDescription
						};
						return {
							...e,
							[r.subredditId]: a
						}
					}
					default:
						return e
				}
			};
			const mf = {};
			var Ef = (e = mf, t) => {
				switch (t.type) {
					case je.f:
					case $.b:
					case $.f:
					case je.b:
					case X.b:
					case X.e:
					case z.c:
					case z.i:
					case z.e:
					case z.g:
					case ke.b:
					case ke.e:
					case Q.PROFILE_POSTS_LOADED:
					case xe.b:
					case je.f:
					case Ce.e:
					case Ce.h:
					case Pe.u:
					case Yi.h:
					case td.b:
					case Ge.c:
					case ee.i:
					case Yi.m:
					case Z.b:
					case Z.e:
					case J.SEARCH_RESULTS_RECEIVED:
					case Ne.PAGE_LOADED:
					case Wr.e:
					case Us.PAGE_LOADED:
					case Y.SUBREDDIT_LOADED:
					case Le.b:
					case "RECOMMENDED_POSTS_LOADED":
					case tu.c:
						return Object(F.merge)(e, t.payload.profiles);
					case Ge.e: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return Object.keys(r).length ? Object(F.merge)(e, r) : e
					}
					case W.i:
					case W.f:
					case W.m:
					case W.p:
					case W.v:
					case W.k: {
						const {
							response: r
						} = t.payload, s = r && r.profiles;
						return Object(F.merge)(e, s)
					}
					case Yi.l:
					case Yi.k: {
						const {
							profile: r
						} = t.payload;
						return r ? Object(F.merge)(e, {
							[r.id]: r
						}) : e
					}
					case kr.n: {
						const r = t.payload,
							{
								title: s,
								over18: a
							} = r.settings,
							n = e[r.subredditId];
						return !n || n.title === s && n.isNSFW === a ? e : {
							...e,
							[r.subredditId]: {
								...n,
								id: r.subredditId,
								title: s,
								isNSFW: a
							}
						}
					}
					case kr.l:
					case kr.k: {
						const {
							imageUrl: r,
							key: s,
							subredditId: a
						} = t.payload;
						if ("profileIcon" !== s) return e;
						const n = e[a];
						return n ? {
							...e,
							[a]: {
								...n,
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
			const Of = {};
			var _f = (e = Of, t) => {
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
				hf = Object(c.c)({
					pending: _f
				});
			const If = {};
			var gf = (e = If, t) => {
				switch (t.type) {
					case Yi.b: {
						const {
							profileName: r,
							data: s
						} = t.payload, a = s.map(e => e.id);
						return {
							...e,
							[(r || "").toLowerCase()]: a
						}
					}
					case Yi.e:
					case z.c:
					case z.i:
					case z.e:
					case z.g: {
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
			const Sf = {};
			var Df = (e = Sf, t) => {
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
						case z.c:
						case z.i: {
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
				Tf = Object(c.c)({
					api: hf,
					models: gf,
					pageInfo: Df
				});
			const vf = {};
			var wf = (e = vf, t) => {
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
				Af = Object(c.c)({
					pending: wf
				});
			const jf = {};
			var Rf = (e = jf, t) => {
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
				Pf = Object(c.c)({
					api: Af,
					pageInfo: Rf
				}),
				Cf = r("./src/reddit/actions/pinnedPost.ts");
			const Lf = {};
			var Nf = Object(mb.a)((e = Lf, t) => {
				switch (t.type) {
					case Cf.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case Cf.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, a = e[s] || [];
						return {
							...e,
							[s]: [...a, r].slice(-Me.V)
						}
					}
					case Cf.g: {
						const {
							postId: r,
							profileId: s
						} = t.payload, a = e[s] || [];
						return {
							...e,
							[s]: a.filter(e => e !== r)
						}
					}
					default:
						return e
				}
			}, Lf);
			const kf = {};
			var xf = Object(mb.a)((e = kf, t) => {
				switch (t.type) {
					case Cf.a: {
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
			}, kf);
			const Uf = {};
			var Mf = Object(mb.a)((e = Uf, t) => {
					switch (t.type) {
						case Cf.c:
						case Cf.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, a = e[s] || [];
							return {
								...e,
								[s]: [...a, r]
							}
						}
						case Cf.b:
						case Cf.e:
						case Cf.d:
						case Cf.g: {
							const {
								postId: r,
								profileId: s
							} = t.payload, a = e[s] || [];
							return {
								...e,
								[s]: a.filter(e => e !== r)
							}
						}
						default:
							return e
					}
				}, Uf),
				Gf = Object(c.c)({
					data: Nf,
					initialData: xf,
					pending: Mf
				}),
				Ff = r("./src/reddit/actions/trophyCase.ts");
			const Bf = {};
			var qf, Hf, Vf = (e = Bf, t) => {
					switch (t.type) {
						case Ff.a: {
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
				Kf = Object(c.c)({
					about: yf,
					models: Ef,
					moderated: Tf,
					multireddits: Pf,
					pinnedPosts: Gf,
					trophyCases: Vf
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(qf || (qf = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Hf || (Hf = {}));
			var Wf, $f, Xf;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Wf || (Wf = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}($f || ($f = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Xf || (Xf = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Wf || (Wf = {}));
			Object(Ue.a)("PROMO__SHOW_PROMO"), Object(Ue.a)("PROMO__HIDE_PROMO");
			const Qf = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var zf = (e = Qf, t) => {
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
				Jf = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Yf = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: Jf.d,
					viewer_streams_refresh: Jf.c,
					viewer_streams_refresh_slop: Jf.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var Zf = (e = Yf, t) => {
				switch (t.type) {
					case Jf.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case Jf.x: {
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
					case Jf.G:
						return {
							...e, isPending: !0
						};
					case Jf.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case Jf.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var ey = (e = {}, t) => {
				switch (t.type) {
					case Jf.L:
						return {
							...e, [Jf.b]: t.payload.error
						};
					case Jf.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case Jf.z: {
						const {
							[Jf.b]: t, ...r
						} = e;
						return r
					}
					case Jf.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const ty = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var ry = (e = {}, t) => {
				switch (t.type) {
					case Jf.N:
						return ty(e, t.payload, !0);
					case Jf.O:
						return ty(e, Jf.b, !0);
					case Jf.y:
						return ty(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case Jf.z:
						return ty(e, Jf.b, !1, t.payload.utcTimeStamp);
					case Jf.M:
						return ty(e, t.payload.streamId, !1);
					case Jf.L:
						return ty(e, Jf.b, !1);
					default:
						return e
				}
			};
			const sy = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var ay = (e = sy, t) => {
					switch (t.type) {
						case Jf.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case Jf.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case Jf.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				ny = Object(c.c)({
					config: Zf,
					error: ey,
					pending: ry,
					recommendedViewerSubreddits: ay
				});
			const cy = {};
			var oy = (e = cy, t) => {
				switch (t.type) {
					case Jf.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case Jf.F:
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
			const dy = {
				cursor: Jf.W,
				timestamps: {},
				visitOrder: []
			};
			var iy = (e = dy, t) => {
				switch (t.type) {
					case Jf.P:
						return dy;
					case Jf.X: {
						const r = t.payload,
							s = e.visitOrder.includes(r) ? e.visitOrder : [...e.visitOrder, r],
							a = s.indexOf(r);
						return s === e.visitOrder && a === e.cursor ? e : {
							...e,
							visitOrder: s,
							cursor: a
						}
					}
					case h.d:
						return uy(e, t.payload.id);
					case Jf.E:
						return uy(e, t.payload);
					case Od.h: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return ly(e, r)
					}
					case Jf.V: {
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
			const uy = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				ly = (e, t) => {
					const r = e.visitOrder[e.cursor],
						s = new Set(t),
						a = e.visitOrder.filter(e => !s.has(e)),
						n = a.indexOf(r),
						c = n > -1 ? n : Math.max(e.cursor - 1, 0);
					return a.length !== e.visitOrder.length ? {
						...e,
						cursor: c,
						visitOrder: a
					} : e
				},
				py = {
					ended: [],
					removed: []
				};

			function by(e) {
				return [...new Set(e)]
			}
			var fy = (e = py, t) => {
				switch (t.type) {
					case Jf.t:
						return {
							...e, ended: by(e.ended.concat(t.payload))
						};
					case Jf.u:
						return {
							...e, removed: by(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const yy = {};
			var my = (e = yy, t) => {
				switch (t.type) {
					case Jf.z:
						const {
							listingName: r, models: s
						} = t.payload;
						if (!r) return e;
						const a = s.map(e => e.post.id),
							n = e[r] || [],
							c = [...new Set([...a, ...n])];
						return {
							...e, [r]: c
						};
					default:
						return e
				}
			};
			const Ey = {},
				Oy = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: Jf.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: Jf.l - r
						}
					}), r)
				},
				_y = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : Jf.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var hy = (e = Ey, t) => {
				switch (t.type) {
					case Jf.y:
						return _y(e, t.payload.model);
					case Jf.z:
						return Oy(e, t.payload.models);
					case Jf.D: {
						const r = t.payload.streamId,
							s = t.payload.isUnsetting ? -1 : 1,
							a = (t.payload.isUp ? 1 : 0) * s,
							n = (t.payload.isUp ? 0 : 1) * s;
						return {
							...e,
							[r]: {
								...e[r],
								downvotes: e[r].downvotes + n,
								upvotes: e[r].upvotes + a
							}
						}
					}
					default:
						return e
				}
			};
			const Iy = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var gy = (e = Iy, t) => {
				switch (t.type) {
					case Jf.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case Jf.A:
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
			const Sy = {
				reported: []
			};
			var Dy = (e = Sy, t) => {
				switch (t.type) {
					case h.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const Ty = {
				isIntroFinished: !1
			};
			var vy = (e = Ty, t) => {
				switch (t.type) {
					case Jf.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const wy = {
				reportedStreams: []
			};
			var Ay = (e = wy, t) => {
					switch (t.type) {
						case Jf.C:
							return {
								...e, ...t.payload
							};
						case h.d: {
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
				jy = Object(c.c)({
					api: ny,
					history: iy,
					hlsStreams: fy,
					listings: my,
					models: hy,
					preloads: gy,
					reports: Dy,
					theaterSettings: vy,
					userSettings: Ay,
					automuteLevels: oy
				});
			const Ry = {};
			var Py = (e = Ry, t) => {
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
				Cy = r("./src/reddit/actions/pages/report/constants.ts");
			var Ly = (e = null, t) => {
				switch (t.type) {
					case Cy.a:
						return t.payload;
					default:
						return e
				}
			};
			var Ny = (e = null, t) => {
				switch (t.type) {
					case Cy.b:
						return t.payload;
					case Cy.c:
					case Cy.d:
						return !1;
					default:
						return e
				}
			};
			var ky = (e = !1, t) => {
				switch (t.type) {
					case Cy.d:
						return !0;
					case Cy.c:
					case Cy.b:
						return !1;
					default:
						return e
				}
			};
			var xy = (e = !1, t) => {
					switch (t.type) {
						case Cy.c:
							return !0;
						case Cy.b:
						case Cy.d:
							return !1;
						default:
							return e
					}
				},
				Uy = Object(c.c)({
					error: Ny,
					pending: ky,
					success: xy
				}),
				My = r("./src/reddit/actions/reportPageRules/constants.ts");
			const Gy = [];
			var Fy = (e = Gy, t) => {
					switch (t.type) {
						case My.a:
							return t.payload;
						default:
							return e
					}
				},
				By = Object(c.c)({
					reportPageApi: Uy,
					reportPageRules: Fy,
					initialReason: Ly
				}),
				qy = r("./src/reddit/actions/reportRules.ts");
			const Hy = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var Vy = (e = Hy, t) => {
				switch (t.type) {
					case qy.b:
						return {
							...e, sitewideRules: t.payload
						};
					case qy.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Ue.a)("REQUEST_HOST_SET");
			var Ky = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(Ue.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const Wy = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var $y = (e = Wy, t) => {
				switch (t.type) {
					case "RUN_TIME_ENV_VARS__IS_STAGING":
						return {
							...e, staging: !0
						};
					default:
						return e
				}
			};
			const Xy = Object.create(null);
			var Qy = (e = Xy, t) => {
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case Ge.d: {
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
			var zy = (e = null, t) => {
				switch (t.type) {
					case J.SEARCH_RESULTS_RECEIVED:
					case Ge.f: {
						const {
							searchQuery: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			const Jy = Object.create(null);
			var Yy = (e = Jy, t) => {
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Ge.e: {
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
				Zy = r("./src/reddit/models/Search/index.ts");
			const em = {};
			var tm = (e = em, t) => {
					switch (t.type) {
						case Ge.e: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(Zy.d)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				rm = Object(c.c)({
					idsByQuery: Yy,
					models: tm
				});
			const sm = {};
			var am = (e = sm, t) => {
					switch (t.type) {
						case J.SEARCH_RESULTS_RECEIVED: {
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
				nm = Object(c.c)({
					relatedQueries: Qy,
					searchQuery: zy,
					typeahead: rm,
					viewTreatment: am
				}),
				cm = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const om = {};
			var dm = (e = om, t) => {
				switch (t.type) {
					case J.SEARCH_RESULTS_RECEIVED: {
						const {
							categoryName: r,
							key: s,
							listingOrder: a,
							postOrder: n,
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
						if (i === cm.c.Trending || r) {
							const e = [];
							if (a && a.map(t => {
									!e.includes(t.id) && d[t.id] && (e.push(t.id), u.subredditIcons.push({
										url: d[t.id].icon.url,
										subredditName: d[t.id].name
									}), u.displayText || (u.displayText = d[t.id].displayText))
								}), n)
								for (let t = 0; t < n.length; t++) {
									const r = c[n[t]],
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
			const im = {};
			var um = (e = im, t) => {
				switch (t.type) {
					case J.SEARCH_RESULTS_RECEIVED: {
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
			const lm = {};
			var pm = (e = lm, t) => {
					switch (t.type) {
						case J.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : lm
						}
						default:
							return e
					}
				},
				bm = Object(c.c)({
					headerContent: dm,
					models: um,
					order: pm
				});
			Object(Ue.a)("SEO__CRAWLER_RECEIVED");
			var fm = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				ym = r("./src/reddit/actions/seo/linksModule.ts");
			const mm = {};
			var Em = (e = mm, t) => {
					switch (t.type) {
						case ym.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case ym.c:
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
				Om = r("./src/reddit/actions/seo/topicLinks.ts");
			const _m = {};
			var hm = (e = _m, t) => {
					switch (t.type) {
						case Om.a:
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
				Im = Object(c.c)({
					crawler: fm,
					linksModule: Em,
					topicLinks: hm
				}),
				gm = r("./src/reddit/actions/shortcuts/constants.ts");
			var Sm = (e = null, t) => {
				switch (t.type) {
					case gm.a:
						return t.payload;
					case O.a:
						return null;
					default:
						return e
				}
			};
			var Dm = (e = null, t) => {
					switch (t.type) {
						case gm.b:
							return t.payload || null;
						default:
							return e
					}
				},
				Tm = r("./src/reddit/constants/history.ts"),
				vm = r("./src/reddit/constants/shortcuts.ts"),
				wm = r("./src/reddit/helpers/history/index.ts");
			const Am = vm.d.Global,
				jm = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(wm.b)(Tm.a.IsOverlay) ? vm.d.Lightbox : vm.d.CommentPage;
						case "rpan":
						case "subredditCreation":
							return Object(wm.b)(Tm.a.IsOverlay) ? vm.d.Lightbox : Am;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return vm.d.Listing;
						case "modQueuePages":
							return vm.d.Modqueue;
						default:
							return Am
					}
				};
			var Rm = (e = Am, t) => {
					switch (t.type) {
						case O.a:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return jm(e)
							}
							return Am;
						default:
							return e
					}
				},
				Pm = Object(c.c)({
					activeCommentId: Sm,
					activePostId: Dm,
					namespace: Rm
				});
			var Cm = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case D.q:
						case D.r:
							return !0;
						default:
							return e
					}
				},
				Lm = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Nm = Object(c.c)({
					firstFetch: Cm,
					models: Lm.b
				}),
				km = r("./src/reddit/actions/streaming/modSettings.ts");
			var xm = (e = null, t) => {
				switch (t.type) {
					case km.b:
					case km.c:
						return null;
					case km.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Um = (e = !1, t) => {
					switch (t.type) {
						case km.b:
							return !0;
						case km.c:
						case km.a:
							return !1;
						default:
							return e
					}
				},
				Mm = Object(c.c)({
					error: xm,
					pending: Um
				}),
				Gm = r("./src/reddit/actions/streaming/constants.ts");
			const Fm = {};
			var Bm = (e = Fm, t) => {
					switch (t.type) {
						case Gm.a: {
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
				qm = Object(c.c)({
					api: Mm,
					modSettings: Bm
				}),
				Hm = r("./src/reddit/models/StructuredStyles/index.ts");
			const Vm = {};
			var Km = (e = Vm, t) => {
					switch (t.type) {
						case I.h:
						case I.b:
						case I.d:
							return t.payload.styles;
						case I.e:
							return Vm;
						case I.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case I.k: {
							const e = t.payload;
							return Object(Hm.h)(e.styles)
						}
						default:
							return e
					}
				},
				Wm = r("./src/reddit/actions/exportImportStyles.ts");
			var $m = (e = null, t) => {
				switch (t.type) {
					case Wm.c:
					case Wm.b:
						return null;
					case Wm.a:
						return t.payload;
					default:
						return e
				}
			};
			var Xm = (e = !1, t) => {
					switch (t.type) {
						case Wm.c:
							return !0;
						case Wm.b:
						case Wm.a:
							return !1;
						default:
							return e
					}
				},
				Qm = Object(c.c)({
					error: $m,
					pending: Xm
				}),
				zm = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				Jm = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const Ym = {};
			var Zm = (e = Ym, t) => {
					switch (t.type) {
						case Y.SUBREDDIT_LOADED:
						case $.b:
						case $.f:
						case J.SEARCH_RESULTS_RECEIVED:
						case Ge.c:
						case Ne.PAGE_LOADED:
						case Us.PAGE_LOADED: {
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
						case zm.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case zm.a: {
							const {
								flairId: r
							} = t.payload;
							return Object(Kt.a)(e, r)
						}
						case cl.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(Kt.a)(e, r)
						}
						case I.k:
							return Ym;
						case Jm.b: {
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
				eE = Object(c.c)({
					models: Zm
				});
			const tE = {};
			var rE = (e = tE, t) => {
				switch (t.type) {
					case I.f: {
						const r = t.payload;
						return {
							...e,
							[r.imageKey]: r.uploadId
						}
					}
					case I.k:
					case I.e:
						return tE;
					default:
						return e
				}
			};
			var sE = (e = !1, t) => {
				switch (t.type) {
					case I.n:
					case I.e:
						return !1;
					case I.a:
						return !0;
					default:
						return e
				}
			};
			var aE = (e = null, t) => {
				switch (t.type) {
					case I.d:
						return t.payload.subredditId;
					case I.e:
						return null;
					case O.a:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case kr.f:
						return null;
					default:
						return e
				}
			};
			const nE = {};
			var cE = (e = nE, t) => {
					switch (t.type) {
						case Y.SUBREDDIT_LOADED:
						case $.b:
						case $.f:
						case Ne.PAGE_LOADED:
						case Us.PAGE_LOADED: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							const s = Object.keys(r.subredditAboutInfo || {});
							if (1 !== s.length) return e;
							const a = s[0],
								n = r.structuredStyles.data.style;
							return {
								...e,
								[a]: n
							}
						}
						case Ge.c:
						case J.SEARCH_RESULTS_RECEIVED: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							if (!r.subredditName) return e;
							let s;
							if (on()(r.subreddits, (e, t) => {
									if (e.name.toLowerCase() === r.subredditName.toLowerCase()) return s = t, !1
								}), !s) return e;
							const a = r.structuredStyles.data.style;
							return {
								...e,
								[s]: a
							}
						}
						case I.m: {
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
						case I.h: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.styles
							}
						}
						case I.k: {
							const r = t.payload,
								s = Object(Hm.h)(r.styles);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case Yi.k: {
							const r = t.payload,
								{
									banner: s,
									profile: a
								} = r;
							if (!s || !a) return e;
							const n = e[a.id];
							return {
								...e,
								[a.id]: {
									...n,
									bannerBackgroundImage: s.url
								}
							}
						}
						case kr.l: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Hl(e, {
									[r.subredditId]: {
										bannerBackgroundImage: r.imageUrl
									}
								})
							}
							return e
						}
						case kr.k: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Hl(e, {
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
				oE = Object(c.c)({
					draft: Km,
					exportStyles: Qm,
					flairTemplate: eE,
					imagePreviews: rE,
					isBladeEditorDirty: sE,
					isEditing: aE,
					models: cE
				});
			Object(Ue.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var dE = (e = "", t) => {
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				iE = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const uE = {};
			var lE = (e = uE, t) => {
				switch (t.type) {
					case iE.c:
					case iE.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case iE.a: {
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
			const pE = {};
			var bE = (e = pE, t) => {
					switch (t.type) {
						case iE.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case iE.b:
						case iE.a: {
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
				fE = Object(c.c)({
					error: lE,
					pending: bE
				});
			const yE = {};
			var mE = (e = yE, t) => {
					switch (t.type) {
						case iE.b: {
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
				EE = Object(c.c)({
					api: fE,
					models: mE
				}),
				OE = r("./src/reddit/actions/category/constants.ts"),
				_E = r("./src/reddit/actions/subredditMention/constants.ts");
			const hE = {};
			var IE = (e = hE, t) => {
				switch (t.type) {
					case _E.d:
					case $.b:
					case $.f:
					case J.SEARCH_RESULTS_RECEIVED:
					case Y.SUBREDDIT_FAILED:
					case Y.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case Us.PAGE_LOADED:
					case X.b:
					case X.e:
					case ke.b:
					case ke.a:
					case ke.e:
					case ke.d:
					case Q.PROFILE_POSTS_LOADED:
					case Z.b:
					case Z.e:
					case Ge.c:
					case rd.TOPIC_DATA_LOADED: {
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
					case Mn.a: {
						const {
							subredditId: r,
							emojisEnabled: s
						} = t.payload, a = {
							...e[r],
							emojisEnabled: s
						};
						return {
							...e,
							[r]: a
						}
					}
					case tu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(e => e.type === bf.a.SUBREDDIT);
						return a.length ? a.reduce((e, t) => Object(F.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case Lc.g:
					case OE.f:
					case cd.h:
					case cd.p: {
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
					case Mn.b: {
						const r = t.payload,
							{
								emojiCustomSize: s,
								subredditId: a
							} = r,
							n = e[a];
						if (!n) return e;
						const c = {
							...n
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
							[a]: c
						}
					}
					case ee.c: {
						const {
							data: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case oe.t: {
						const {
							subredditId: r,
							subredditCoins: s
						} = t.payload;
						if (!r || !s) return e;
						const a = e[r];
						if (!a) return e;
						const n = {
							...a,
							coins: s
						};
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const gE = {};
			var SE = (e = gE, t) => {
				switch (t.type) {
					case ee.b:
					case ee.c: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case ee.a: {
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
			var DE = (e = !1, t) => {
					switch (t.type) {
						case ee.b:
							return !0;
						case ee.c:
						case ee.a:
							return !1;
						default:
							return e
					}
				},
				TE = Object(c.c)({
					error: SE,
					pending: DE
				}),
				vE = r("./src/reddit/actions/subredditCreation.ts");
			const wE = {
				apiError: null
			};
			var AE = (e = wE, t) => {
				switch (t.type) {
					case vE.b: {
						const {
							error: r
						} = t.payload;
						return {
							...e,
							apiError: r
						}
					}
					case vE.a:
					case vE.c:
					case vE.d:
						return wE;
					default:
						return e
				}
			};
			var jE = (e = null, t) => {
				switch (t.type) {
					case vE.d: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case vE.c:
					case vE.b:
						return null;
					default:
						return e
				}
			};
			var RE = (e = !1, t) => {
					switch (t.type) {
						case vE.c:
							return !0;
						case vE.d:
						case vE.b:
							return !1;
						default:
							return e
					}
				},
				PE = Object(c.c)({
					error: AE,
					lastCreatedSubredditId: jE,
					pending: RE
				});
			var CE = (e = !1, t) => {
					switch (t.type) {
						case cd.u:
							return !0;
						case cd.v:
						case cd.t:
							return !1;
						default:
							return e
					}
				},
				LE = Object(c.c)({
					pending: CE
				});
			const NE = {};
			var kE = (e = NE, t) => {
				switch (t.type) {
					case ee.l:
					case ee.m: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case ee.k: {
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
			const xE = {};
			var UE = (e = xE, t) => {
					switch (t.type) {
						case ee.l: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case ee.m:
						case ee.k: {
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
				ME = Object(c.c)({
					error: kE,
					pending: UE
				});
			const GE = {};
			var FE = (e = GE, t) => {
					switch (t.type) {
						case cd.g:
						case cd.h:
							return {
								...e, [t.payload.key]: !1
							};
						case cd.i:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				BE = Object(c.c)({
					pending: FE
				});
			var qE = (e = null, t) => {
				switch (t.type) {
					case oe.V:
						return t.payload || null;
					case oe.X:
					case oe.W:
						return null;
					default:
						return e
				}
			};
			var HE = (e = !1, t) => {
					switch (t.type) {
						case oe.X:
							return !0;
						case oe.W:
						case oe.V:
							return !1;
						default:
							return e
					}
				},
				VE = Object(c.c)({
					error: qE,
					pending: HE
				});
			var KE = (e = null, t) => {
				switch (t.type) {
					case cd.l: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case cd.n:
					case cd.m:
						return null;
					default:
						return e
				}
			};
			var WE = (e = !1, t) => {
					switch (t.type) {
						case cd.n:
							return !0;
						case cd.m:
						case cd.l:
							return !1;
						default:
							return e
					}
				},
				$E = Object(c.c)({
					error: KE,
					pending: WE
				}),
				XE = r("./src/reddit/actions/subredditRules/constants.ts");
			var QE = (e = !1, t) => {
					switch (t.type) {
						case XE.c:
							return !0;
						case XE.a:
						case XE.b:
							return !1;
						default:
							return e
					}
				},
				zE = r("./src/reddit/actions/subredditSettings.ts");
			var JE = (e = !1, t) => {
					switch (t.type) {
						case zE.e:
							return !0;
						case zE.f:
						case zE.d:
							return !1;
						default:
							return e
					}
				},
				YE = Object(c.c)({
					pending: JE
				});
			const ZE = {};
			var eO = (e = ZE, t) => {
					switch (t.type) {
						case cd.o:
						case cd.p:
							return {
								...e, [t.payload.key]: !1
							};
						case cd.q:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				tO = Object(c.c)({
					pending: eO
				}),
				rO = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const sO = {};
			var aO = (e = sO, t) => {
				switch (t.type) {
					case rO.c:
					case rO.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case rO.a: {
						const r = t.payload,
							{
								options: s,
								error: a
							} = r,
							{
								subredditName: n
							} = s;
						return {
							...e,
							[n.toLowerCase()]: a
						}
					}
					default:
						return e
				}
			};
			const nO = {};
			var cO = (e = nO, t) => {
					switch (t.type) {
						case rO.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case rO.b:
						case rO.a: {
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
				oO = Object(c.c)({
					error: aO,
					pending: cO
				});
			const dO = {};
			var iO = (e = dO, t) => {
				switch (t.type) {
					case Gl.c:
					case Gl.b: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Gl.a: {
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
			const uO = {};
			var lO = (e = uO, t) => {
					switch (t.type) {
						case Gl.c: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Gl.b:
						case Gl.a: {
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
				pO = Object(c.c)({
					error: iO,
					pending: lO
				}),
				bO = Object(c.c)({
					about: TE,
					create: PE,
					inlineEditing: LE,
					models: ME,
					onboarding: BE,
					productOffers: VE,
					rankings: $E,
					rules: QE,
					settings: YE,
					similar: tO,
					topContent: pO,
					wiki: oO
				}),
				fO = r("./node_modules/lodash/isNil.js"),
				yO = r.n(fO);
			const mO = {};
			var EO = (e = mO, t) => {
					switch (t.type) {
						case ee.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: yO()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				OO = Object(c.c)({
					meta: EO
				});
			const _O = {};
			var hO = (e = _O, t) => {
				switch (t.type) {
					case OE.f: {
						const {
							categoryId: r,
							subredditIds: s
						} = t.payload;
						return sn()(s) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const IO = {};
			var gO = (e = IO, t) => {
					switch (t.type) {
						case Pe.c: {
							const {
								communityInfo: r,
								id: s,
								type: a
							} = t.payload;
							return r && "subreddit" === a ? {
								...e,
								[s]: r
							} : e
						}
						default:
							return e
					}
				},
				SO = r("./src/reddit/actions/subredditCrosspostable.ts");
			var DO = (e = null, t) => {
				switch (t.type) {
					case SO.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case SO.c:
					case SO.b:
						return null;
					default:
						return e
				}
			};
			var TO = (e = !1, t) => {
					switch (t.type) {
						case SO.c:
							return !0;
						case SO.b:
						case SO.a:
							return !1;
						default:
							return e
					}
				},
				vO = Object(c.c)({
					errors: DO,
					pending: TO
				});
			const wO = {};
			var AO = (e = wO, t) => {
					switch (t.type) {
						case SO.b: {
							const {
								subredditIds: r
							} = t.payload;
							return Xi()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				jO = Object(c.c)({
					api: vO,
					ids: AO
				});
			const RO = {};
			var PO = (e = RO, t) => {
					switch (t.type) {
						case Ql.a: {
							const r = t.payload,
								{
									subredditId: s,
									distinguishKey: a,
									postIds: n
								} = r;
							if (!(s in e)) return {
								...e,
								[s]: {
									[a]: n
								}
							};
							const c = e[s];
							return Hl(c, {
								[a]: n
							}) === c ? e : {
								...e,
								[s]: {
									...c,
									[a]: n
								}
							}
						}
						default:
							return e
					}
				},
				CO = Object(c.c)({
					models: PO
				});
			const LO = {};
			var NO = (e = LO, t) => {
				switch (t.type) {
					case m.a: {
						const {
							assets: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case E.g:
					case E.j: {
						const {
							subredditId: r,
							mainHeader: s
						} = t.payload, a = e[r] || {};
						return {
							...e,
							[r]: {
								...a,
								mainHeader: s
							}
						}
					}
					default:
						return e
				}
			};
			const kO = {};
			var xO = (e = kO, t) => {
				switch (t.type) {
					case m.a: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: t.payload
						}
					}
					case y.i: {
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
			const UO = {};
			var MO = (e = UO, t) => {
				switch (t.type) {
					case m.a: {
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
			const GO = {};
			var FO = (e = GO, t) => {
				switch (t.type) {
					case m.a: {
						const {
							subredditId: r,
							meta: s
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
			const BO = {};
			var qO = (e = BO, t) => {
					switch (t.type) {
						case m.p: {
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
				HO = Object(c.c)({
					assets: NO,
					communityRaw: xO,
					distributions: MO,
					meta: FO,
					releaseNotes: qO
				}),
				VO = r("./node_modules/lodash/isEqualWith.js"),
				KO = r.n(VO),
				WO = r("./src/lib/forceHttps/index.ts");
			const $O = {},
				XO = (e, t) => {
					return !KO()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				QO = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let a = 0; a < r.length; a++) {
						const n = r[a],
							c = e[n],
							o = t[n];
						c && !XO(c, o) || (s[n] = o)
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var zO = (e = $O, t) => {
				switch (t.type) {
					case tu.c:
						return ((e, t) => {
							const r = Object.keys(t);
							return r.length ? r.reduce((r, s) => {
								const a = e[s],
									n = t[s],
									c = a ? {
										...a,
										...n
									} : {
										...n
									};
								return n.icon.url ? c.icon.url = Object(WO.a)(n.icon.url) : a && a.icon.url ? c.icon = a.icon : c.icon.url = "", a && a.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(F.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case _E.d:
					case OE.f:
					case je.f:
					case Lc.g:
					case nd.b:
					case Ce.e:
					case Ce.h:
					case W.k:
					case Pe.r:
					case Pe.u:
					case Yi.h:
					case td.b:
					case $.b:
					case $.f:
					case je.b:
					case Le.b:
					case X.b:
					case X.e:
					case z.c:
					case z.i:
					case z.e:
					case z.g:
					case ke.b:
					case ke.e:
					case Q.MORE_POSTS_LOADED:
					case Q.PROFILE_POSTS_LOADED:
					case Yi.e:
					case J.SEARCH_RESULTS_RECEIVED:
					case Y.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case Wr.e:
					case Us.PAGE_LOADED:
					case Yi.m:
					case Z.b:
					case Z.e:
					case xe.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ge.c:
					case ee.c:
					case ee.f:
					case ee.i:
					case cd.a:
					case cd.h:
					case cd.p:
					case rd.TOPIC_DATA_LOADED:
					case rd.MORE_POSTS_LOADED:
						return QO(e, t.payload.subreddits || {});
					case W.f:
					case W.i:
					case W.m:
					case W.p:
					case W.v: {
						const {
							response: r
						} = t.payload, {
							subreddits: s
						} = r;
						return QO(e, s)
					}
					case Ge.e: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return QO(e, r.subreddits || {})
					}
					case Pe.B: {
						const {
							subreddits: r
						} = t.payload;
						return {
							...r,
							...e
						}
					}
					case y.g: {
						const r = t.payload;
						return QO(e, r)
					}
					case I.m: {
						const r = t.payload,
							{
								subredditId: s,
								styles: a
							} = r;
						return "communityIcon" in a && e[s] && "string" == typeof a.communityIcon ? {
							...e,
							[s]: {
								...e[s],
								communityIcon: a.communityIcon
							}
						} : e
					}
					case zE.f: {
						const {
							settings: r
						} = t.payload, {
							subredditId: s,
							title: a
						} = r;
						return e[s] && void 0 !== a ? {
							...e,
							[s]: {
								...e[s],
								title: a
							}
						} : e
					}
					case iE.b: {
						const r = t.payload,
							{
								subreddits: s
							} = r,
							a = {};
						for (const e of s) a[e.id] = {
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
						return Object(F.merge)(e, a)
					}
					default:
						return e
				}
			};
			var JO = (e = null, t) => {
				switch (t.type) {
					case ee.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case ee.g:
					case ee.f:
						return null;
					default:
						return e
				}
			};
			var YO = (e = !1, t) => {
				switch (t.type) {
					case ee.g:
					case ee.f:
						return !0;
					case ee.e:
						return !1;
					default:
						return e
				}
			};
			var ZO = (e = !1, t) => {
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
				e_ = Object(c.c)({
					errors: JO,
					fetched: YO,
					pending: ZO
				});
			var t_ = (e = null, t) => {
					switch (t.type) {
						case ee.f: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						default:
							return e
					}
				},
				r_ = Object(c.c)({
					api: e_,
					order: t_
				});
			const s_ = {};
			var a_ = (e = s_, t) => {
				switch (t.type) {
					case zE.a: {
						const r = t.payload;
						return Object(F.merge)(e, r)
					}
					case zE.b: {
						const {
							subredditId: r,
							notificationSettings: s
						} = t.payload;
						return Object(F.merge)(e, {
							[r]: s
						})
					}
					default:
						return e
				}
			};
			const n_ = {};
			var c_ = (e = n_, t) => {
				switch (t.type) {
					case cd.h: {
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
			const o_ = {};
			var d_ = (e = o_, t) => {
				switch (t.type) {
					case oe.ib: {
						const {
							recentSupporters: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case oe.R:
					case oe.U: {
						const {
							subredditId: r,
							powerupsCount: s,
							user: a
						} = t.payload;
						if (s > 0) {
							const t = {
								score: s,
								lastSupportedAt: (new Date).toString(),
								supporterInfo: {
									id: a.id,
									displayName: Object(re.e)(a),
									icon: {
										url: a.accountIcon
									},
									profile: {
										isNsfw: a.isNSFW
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
			const i_ = {};
			var u_ = (e = i_, t) => {
				var r;
				switch (t.type) {
					case oe.jb:
					case oe.ib: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						let a = null;
						if (r) {
							const {
								mediaPacks: e,
								...t
							} = r;
							a = t
						}
						return {
							...e,
							[s]: a
						}
					}
					case oe.R:
					case oe.U: {
						const {
							subredditId: s,
							powerupsCount: a
						} = t.payload;
						if (e[s] && a > 0) {
							const t = e[s],
								n = t.tier + 1,
								c = t.tiersInfo[n - 1],
								o = c && c.benefits;
							return {
								...e,
								[s]: {
									...e[s],
									benefits: o || (null === (r = e[s]) || void 0 === r ? void 0 : r.benefits),
									count: t.count + a,
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
			const l_ = {},
				p_ = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						a = null == s ? void 0 : s.emotes;
					if (!a) return e;
					const n = Dn(r, t),
						c = [...a, n];
					return {
						...e,
						[t]: {
							...s,
							emotes: c
						}
					}
				},
				b_ = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						a = null == s ? void 0 : s.emotes;
					if (!a) return e;
					const n = a.filter(e => e.id !== r);
					return {
						...e,
						[t]: {
							...s,
							emotes: n
						}
					}
				};
			var f_ = (e = l_, t) => {
				switch (t.type) {
					case oe.ib: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: Tn(r)
						}
					}
					case Sn.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: p_(a, r, s)
						}
					}
					case Sn.c: {
						const {
							subredditId: r,
							emojiId: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: b_(a, r, s)
						}
					}
					default:
						return e
				}
			};
			const y_ = {},
				m_ = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var E_ = (e = y_, t) => {
					switch (t.type) {
						case oe.ib: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(m_)
							}
						}
						case oe.R:
						case oe.U: {
							const {
								subredditId: r,
								powerupsCount: s,
								user: a,
								isAnonymous: n
							} = t.payload;
							if (!e[r] && s < 0) return e;
							let c = !1;
							const o = e[r].map(e => {
								var t;
								return n && !e.supporterInfo || !n && (null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.id) === a.id ? (c = !0, {
									...e,
									lastSupportedAt: s > 0 ? (new Date).toString() : e.lastSupportedAt,
									score: e.score + s
								}) : e
							});
							if (c) return {
								...e,
								[r]: o.sort(m_)
							};
							if (s > 0) {
								const t = {
									score: s,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: n ? null : {
										id: a.id,
										displayName: Object(re.e)(a),
										icon: {
											url: a.accountIcon
										},
										profile: {
											isNsfw: a.isNSFW
										}
									}
								};
								return {
									...e,
									[r]: [t, ...e[r]].sort(m_)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				O_ = r("./src/lib/makeProductOfferKey/index.ts");
			const __ = {};
			var h_ = (e = __, t) => {
				switch (t.type) {
					case oe.W:
					case oe.ib: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!s || 0 === s.length) return e;
						const a = s.reduce((e, t) => {
							const s = Object(O_.a)(r, t.type);
							return e[s] = e[s] ? [...e[s], t] : [t], e
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
			const I_ = {};
			var g_ = (e = I_, t) => {
					switch (t.type) {
						case _.g: {
							const {
								subredditId: r,
								products: s
							} = t.payload, a = Object.keys(s).reduce((e, t) => (e[t] = !0, e), {});
							return {
								...e,
								[r]: a
							}
						}
						default:
							return e
					}
				},
				S_ = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const D_ = {};
			var T_ = (e = D_, t) => {
				switch (t.type) {
					case cd.w: {
						const {
							id: r,
							progressModule: s
						} = t.payload;
						if (!s) return e;
						const a = s.cards.filter(({
							id: e
						}) => "invite_contributor" !== e).filter(({
							buttons: e
						}) => e.every(({
							__typename: e
						}) => S_.b.includes(e)));
						return {
							...e,
							[r]: {
								...s,
								cards: a
							}
						}
					}
					case cd.d: {
						const {
							subredditId: r,
							cardId: s
						} = t.payload;
						return Object(F.updateIn)(e, [r, "cards"], e => e.filter(e => e.id !== s))
					}
					default:
						return e
				}
			};
			const v_ = {};
			var w_ = (e = v_, t) => {
				var r, s;
				switch (t.type) {
					case cd.w: {
						const {
							id: r,
							questions: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case je.f:
					case je.b: {
						const {
							subreddits: s
						} = t.payload, a = {};
						for (const e of Object.keys(s)) {
							const t = s[e];
							((null === (r = t.answerableQuestions) || void 0 === r ? void 0 : r.length) || 0) > 0 && (a[e] = t.answerableQuestions)
						}
						return 0 === Object.keys(a).length ? e : Object(F.assign)(e, a)
					}
					case cd.e: {
						const {
							subredditId: r,
							questionId: a
						} = t.payload, n = null !== (s = e[r]) && void 0 !== s ? s : [];
						return Object(F.setIn)(e, [r], n.filter(e => e.id !== a))
					}
					case cd.f:
						return v_;
					default:
						return e
				}
			};
			const A_ = {};
			var j_ = (e = A_, t) => {
				switch (t.type) {
					case cd.b: {
						const {
							categoryRankingsKey: r
						} = t.payload, s = e[r], a = s && s.length ? [...s, ...t.payload.rankings] : t.payload.rankings;
						return {
							...e,
							[r]: a
						}
					}
					default:
						return e
				}
			};
			const R_ = {};
			var P_ = (e = R_, t) => {
				switch (t.type) {
					case cd.c: {
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
			const C_ = {};
			var L_ = (e = C_, t) => {
				switch (t.type) {
					case XE.b: {
						const {
							rules: r,
							subredditId: s
						} = t.payload, a = {
							[s]: {
								rules: r.rules
							}
						};
						return {
							...e,
							...a
						}
					}
					case XE.e: {
						const {
							rules: r,
							subredditId: s
						} = t.payload, a = {
							[s]: {
								rules: [...e[s].rules, ...r.rules]
							}
						};
						return {
							...e,
							...a
						}
					}
					case XE.f: {
						const {
							rules: r,
							subredditId: s,
							oldName: a
						} = t.payload;
						r.rules.shortName !== a && (e[s].rules = e[s].rules.filter(e => e.shortName !== a));
						const n = {
							[s]: {
								rules: [...r.rules, ...e[s].rules]
							}
						};
						return n[s].rules.sort((e, t) => e.priority - t.priority), {
							...e,
							...n
						}
					}
					case XE.g:
					case XE.d: {
						const {
							rules: r,
							subredditId: s
						} = t.payload, a = {
							[s]: {
								rules: r.rules
							}
						};
						return {
							...e,
							...a
						}
					}
					default:
						return e
				}
			};
			const N_ = {};
			var k_ = (e = N_, t) => {
				switch (t.type) {
					case zE.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case zE.f: {
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
					case kr.n: {
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
			const x_ = {};
			var U_ = (e = x_, t) => {
				switch (t.type) {
					case cd.p: {
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
			const M_ = {};
			var G_ = (e = M_, t) => {
				switch (t.type) {
					case cd.w: {
						const {
							id: r,
							survey: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case cd.x: {
						const {
							id: r,
							response: s
						} = t.payload, a = Object(F.setIn)(e, [r, "response"], s);
						return Object(F.setIn)(a, [r, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const F_ = {};
			var B_ = (e = F_, t) => {
				switch (t.type) {
					case Lc.g: {
						const {
							subredditTopContent: r
						} = t.payload;
						return {
							...e,
							...r.subredditTopContent
						}
					}
					case Gl.b: {
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
			const q_ = [];
			var H_ = (e = q_, t) => {
				switch (t.type) {
					case je.b:
					case Y.SUBREDDIT_LOADED: {
						const {
							trendingSubredditIds: r
						} = t.payload;
						return r && r.length ? r : e
					}
					default:
						return e
				}
			};
			const V_ = {};
			var K_ = (e = V_, t) => {
					switch (t.type) {
						case _E.d:
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
				W_ = r("./src/reddit/actions/subredditWelcomeMessage.ts");
			const $_ = {};
			var X_ = (e = $_, t) => {
					switch (t.type) {
						case W_.a: {
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
				Q_ = Object(c.c)({
					about: IE,
					api: bO,
					appliedFilters: OO,
					byCategory: hO,
					communityInfo: gO,
					crosspostable: jO,
					duplicates: CO,
					gov: HO,
					models: zO,
					moderated: r_,
					notificationSettings: a_,
					onboarding: c_,
					powerupRecentSupporters: d_,
					powerups: u_,
					powerupsEmojis: f_,
					powerupTopSupporters: E_,
					productOffers: h_,
					products: g_,
					progressModule: T_,
					questions: w_,
					rankings: j_,
					rankingsPageInfo: P_,
					rules: L_,
					settings: k_,
					similar: U_,
					survey: G_,
					topContent: B_,
					trending: H_,
					unavailableModels: K_,
					welcomeMessage: X_
				});
			const z_ = {};
			var J_ = Object(mb.a)((e = z_, t) => {
					switch (t.type) {
						case Y.SUBREDDIT_LOADED: {
							const {
								postIds: r,
								posts: s
							} = t.payload, a = r.slice(0, 2).reduce((e, t) => {
								if (s[t].isStickied) {
									const r = s[t].belongsTo.id;
									e[r] ? e[r].push(t) : e[r] = [t]
								}
								return e
							}, {});
							return De()({
								...e
							}, a)
						}
						case Od.k: {
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
				}, z_),
				Y_ = Object(c.c)({
					data: J_
				}),
				Z_ = r("./node_modules/lodash/values.js"),
				eh = r.n(Z_);
			const th = [];
			var rh = (e = th, t) => {
				switch (t.type) {
					case tu.d: {
						const {
							makeFavorite: r,
							multiredditsModelsState: s,
							multiredditPath: a
						} = t.payload;
						if (r) {
							const t = [...e],
								r = Ji(t, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(r, 0, a), t
						}
						return e.filter(e => e !== a)
					}
					case Pe.u: {
						const {
							multireddits: e
						} = t.payload;
						return eh()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case tu.e: {
						const {
							follow: r,
							multiredditPath: s
						} = t.payload;
						return r ? e : e.filter(e => e !== s)
					}
					case Pe.j: {
						const r = t.payload;
						return e.filter(e => e !== r)
					}
					default:
						return e
				}
			};
			var sh = (e = null, t) => {
				switch (t.type) {
					case tu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case tu.b:
					case tu.c:
						return null;
					default:
						return e
				}
			};
			var ah = (e = !1, t) => {
				switch (t.type) {
					case tu.b:
					case tu.c:
						return !0;
					case tu.a:
						return !1;
					default:
						return e
				}
			};
			var nh = (e = !1, t) => {
					switch (t.type) {
						case tu.b:
							return !0;
						case tu.c:
						case tu.a:
							return !1;
						default:
							return e
					}
				},
				ch = Object(c.c)({
					errors: sh,
					fetched: ah,
					pending: nh
				});
			const oh = [];
			var dh = (e = oh, t) => {
				switch (t.type) {
					case tu.c: {
						const {
							profiles: e,
							favoriteProfileIds: r,
							favoriteSubredditIds: s
						} = t.payload;
						let a;
						return (a = r && r.length ? r : s ? s.filter(t => !!e[t]) : []).sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), a
					}
					case tu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							profileModels: a
						} = t.payload, {
							id: n,
							type: c
						} = s;
						if (c !== bf.a.PROFILE) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Ji(o, n, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, n)
						} else {
							const e = o.indexOf(n);
							o.splice(e, 1)
						}
						return o
					}
					case tu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(t => t.type === bf.a.PROFILE && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const ih = [];
			var uh = (e = ih, t) => {
				switch (t.type) {
					case tu.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: r
						} = t.payload, s = r ? r.filter(t => !!e[t]) : [];
						return s.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), s
					}
					case tu.f: {
						const {
							makeFavorite: r,
							identifier: s,
							subredditModels: a
						} = t.payload, {
							id: n,
							type: c
						} = s;
						if (c !== bf.a.SUBREDDIT) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Ji(o, n, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, n)
						} else {
							const e = o.indexOf(n);
							o.splice(e, 1)
						}
						return o
					}
					case tu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(t => t.type === bf.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const lh = [],
				ph = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var bh = (e = lh, t) => {
					switch (t.type) {
						case Pe.u: {
							const {
								multireddits: r
							} = t.payload, s = eh()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(ph(r));
							return Xi()(e, s) ? e : s
						}
						case Le.b: {
							const {
								account: r,
								multireddits: s,
								multiredditsByUser: a,
								multiredditsModelsState: n
							} = t.payload;
							if (!r) return e;
							const c = a[r.id];
							if (!c || !c.length) return e;
							const o = {
									...n,
									...s
								},
								d = zi()(e, c).sort(ph(o));
							return Xi()(e, d) ? e : d
						}
						case tu.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: a
							} = t.payload;
							return r ? [...e, s].sort(ph(a)) : e.filter(e => e !== s)
						}
						case Pe.j: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						case Pe.g:
						case Pe.m: {
							const {
								multireddit: r,
								multiredditsModelsState: s
							} = t.payload, a = {
								...s,
								[r.url]: r
							};
							return [...e, r.url].sort(ph(a))
						}
						default:
							return e
					}
				},
				fh = r("./node_modules/lodash/difference.js"),
				yh = r.n(fh);
			const mh = [];
			var Eh = (e = mh, t) => {
				switch (t.type) {
					case Yi.n: {
						const {
							profileOrder: r
						} = t.payload;
						return jp()([...e, ...r])
					}
					case tu.c: {
						const {
							profiles: e
						} = t.payload, r = Object.keys(e);
						return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
					}
					case tu.h: {
						const {
							identifiers: r,
							profileModels: s,
							userIsSubscriber: a
						} = t.payload, n = r.filter(e => e.type === bf.a.PROFILE);
						if (!n.length) return e;
						const c = n.map(e => e.id);
						return a ? jp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : yh()(e, c)
					}
					default:
						return e
				}
			};
			const Oh = [];
			var _h = (e = Oh, t) => {
					switch (t.type) {
						case Yi.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return jp()([...e, ...r])
						}
						case tu.c: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						case tu.h: {
							const {
								identifiers: r,
								subredditModels: s,
								userIsSubscriber: a
							} = t.payload, n = r.filter(e => e.type === bf.a.SUBREDDIT && !!e.id);
							if (!n.length) return e;
							const c = n.map(e => e.id);
							return a ? jp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : yh()(e, c)
						}
						default:
							return e
					}
				},
				hh = Object(c.c)({
					api: ch,
					favoriteMultiOrder: rh,
					favoriteProfileOrder: dh,
					favoriteSubredditOrder: uh,
					multiredditOrder: bh,
					profileOrder: Eh,
					subredditOrder: _h
				}),
				Ih = r("./src/reddit/actions/survey/constants.ts");
			var gh = (e = null, t) => {
				switch (t.type) {
					case Ih.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var Sh = (e = 1, t) => {
				switch (t.type) {
					case Ih.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var Dh = (e = !1, t) => {
				switch (t.type) {
					case Ih.b:
						return !e;
					default:
						return e
				}
			};
			var Th = (e = !0, t) => {
					switch (t.type) {
						case Ih.h:
							return !e;
						default:
							return e
					}
				},
				vh = Object(c.c)({
					activeDemoTrigger: gh,
					demoTriggerThreshold: Sh,
					isDemoEnabled: Dh,
					isSampleFactorEnabled: Th
				}),
				wh = r("./src/reddit/actions/tabBadging.ts");
			var Ah = (e = !1, t) => {
					switch (t.type) {
						case wh.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				jh = r("./src/reddit/actions/tags/constants.ts");
			const Rh = {
				pending: !1,
				error: !1
			};
			var Ph = (e = Rh, t) => {
				switch (t.type) {
					case jh.l:
						return {
							...e, pending: !0
						};
					case jh.m:
						return {
							error: !1, pending: !1
						};
					case jh.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const Ch = {
				pending: !1,
				error: !1
			};
			var Lh = (e = Ch, t) => {
				switch (t.type) {
					case jh.o:
						return {
							...e, pending: !0
						};
					case jh.p:
						return {
							error: !1, pending: !1
						};
					case jh.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const Nh = {
				pending: !1,
				error: !1
			};
			var kh = (e = Nh, t) => {
				switch (t.type) {
					case jh.t:
						return {
							...e, pending: !0
						};
					case jh.s:
					case jh.r:
					case jh.e:
					case jh.j:
						return {
							error: !1, pending: !1
						};
					case jh.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const xh = {
				pending: !1,
				error: !1
			};
			var Uh = (e = xh, t) => {
				switch (t.type) {
					case jh.v:
						return {
							...e, pending: !0
						};
					case jh.w:
						return {
							error: !1, pending: !1
						};
					case jh.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const Mh = {
				pending: !1,
				error: !1
			};
			var Gh = (e = Mh, t) => {
					switch (t.type) {
						case jh.g:
							return {
								...e, pending: !0
							};
						case jh.h:
							return {
								error: !1, pending: !1
							};
						case jh.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				Fh = Object(c.c)({
					create: Ph,
					deleteTag: Lh,
					fetch: kh,
					update: Uh,
					updatePrimaryTag: Gh
				});
			const Bh = {
				global: [],
				recommendedGlobal: []
			};
			var qh = (e = Bh, t) => {
					switch (t.type) {
						case jh.w:
						case jh.r:
						case jh.e:
						case jh.j: {
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
				Hh = r("./node_modules/lodash/uniqWith.js"),
				Vh = r.n(Hh),
				Kh = r("./src/reddit/models/Option/index.ts");
			const Wh = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var $h = (e = Wh, t) => {
					switch (t.type) {
						case jh.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: Vh()([...e.selectedOptions || [], {
									...r
								}], Kh.a)
							}
						}
						case jh.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(Kh.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case jh.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case jh.a: {
							const {
								primaryTagId: r
							} = t.payload, s = e.selectedOptions.findIndex(e => e.id === r), a = [...e.selectedOptions];
							return s >= 0 && a.splice(s, 1), {
								...e,
								selectedPrimaryTagId: r,
								selectedOptions: a
							}
						}
						default:
							return e
					}
				},
				Xh = r("./src/reddit/helpers/tags/index.ts");
			const Qh = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var zh = (e = Qh, t) => {
					switch (t.type) {
						case jh.j: {
							const {
								globalSubredditTags: r,
								subredditScopedTags: s,
								subredditId: a
							} = t.payload;
							return {
								...e,
								globalSubredditTags: {
									...e.globalSubredditTags,
									...r
								},
								subredditScopedTags: {
									...e.subredditScopedTags,
									[a]: {
										...e.subredditScopedTags[a] || {},
										...s[a] || {}
									}
								}
							}
						}
						case jh.w:
						case jh.s:
						case jh.r: {
							const {
								primaryTag: r,
								globalSubredditTags: s,
								subredditScopedTags: a,
								itemTags: n,
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
										...a[o] || {}
									}
								},
								itemTags: {
									...e.itemTags,
									[o]: {
										...n[o] || {}
									}
								},
								geoPlaces: d ? Object(F.set)(e.geoPlaces, o, d) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[o]: {
										...c[o] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[o]: Object(Xh.a)(n[o] || {})
								}
							}
						}
						case jh.p: {
							const {
								subredditId: r,
								tags: s
							} = t.payload, a = s.reduce((e, {
								tagId: t
							}) => (delete e[t], e), {
								...e.subredditScopedTags[r] || {}
							});
							return {
								...e,
								subredditScopedTags: {
									...e.subredditScopedTags,
									[r]: a
								}
							}
						}
						case jh.e: {
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
						case jh.h: {
							const {
								subredditId: r,
								primaryTagId: s,
								secondaryTags: a
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
										...a || {}
									}
								}
							} : e
						}
						case jh.i: {
							const {
								subredditId: r,
								primaryTagId: s
							} = t.payload;
							return s && r ? {
								...e,
								subredditPrimaryTagId: {
									...e.subredditPrimaryTagId,
									[r]: s
								}
							} : e
						}
						default:
							return e
					}
				},
				Jh = r("./src/reddit/reducers/tags/selected/index.ts"),
				Yh = Object(c.c)({
					api: Fh,
					availableGlobalTagOrder: qh,
					models: zh,
					selected: Jh.b,
					creation: $h
				}),
				Zh = r("./src/reddit/actions/redditEmbed.ts"),
				eI = r("./src/reddit/actions/theme.ts"),
				tI = r("./src/reddit/actions/users.ts"),
				rI = r("./src/reddit/models/Theme/index.ts");
			const sI = {
				current: rI.c,
				cached: {}
			};
			var aI = (e = sI, t) => {
					switch (t.type) {
						case eI.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? rI.b : rI.c,
								cached: {}
							}
						}
						case Nr.a:
						case Nr.b:
						case Nr.h:
						case Nr.i:
						case Nr.f:
						case Nr.j:
						case Ce.e:
						case Ce.h:
						case $.a:
						case $.e:
						case $.b:
						case $.f:
						case $.d:
						case $.h:
						case je.b:
						case Y.SUBREDDIT_LOADED:
						case Le.b:
						case Le.a:
						case je.f:
						case Zh.b:
						case ee.i:
						case Ge.c:
						case J.SEARCH_RESULTS_RECEIVED:
						case kr.j:
						case Ne.PAGE_LOADED:
						case Us.PAGE_LOADED:
						case tI.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: rI.b,
									cached: {}
								} : {
									current: rI.c,
									cached: {}
								}
							}
							return e;
						case X.d:
						case X.e:
						case ke.a:
						case ke.b:
						case ke.d:
						case ke.e:
						case Q.PROFILE_POSTS_FAILED:
						case Q.PROFILE_POSTS_LOADED: {
							const {
								account: r
							} = t.payload;
							return r ? r.nightmode ? {
								current: rI.b,
								cached: {}
							} : {
								current: rI.c,
								cached: {}
							} : e
						}
						case W.h:
						case W.j:
						case W.i:
						case W.g:
						case W.f:
						case W.n:
						case W.m:
						case W.p:
						case W.q:
						case W.w:
						case W.v:
							if (t.payload && t.payload.response && t.payload.response.preferences && "nightmode" in t.payload.response.preferences) {
								const {
									nightmode: e
								} = t.payload.response.preferences;
								return e ? {
									current: rI.b,
									cached: {}
								} : {
									current: rI.c,
									cached: {}
								}
							}
							return e;
						case kr.i: {
							if (!t.payload) return e;
							const {
								nightmode: r
							} = t.payload;
							return r ? {
								current: rI.b,
								cached: {}
							} : {
								current: rI.c,
								cached: {}
							}
						}
						case I.d:
							return {
								current: rI.c, cached: {}
							};
						case I.e:
							return t.payload.nightmodeTempUpdated ? {
								current: rI.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				nI = r("./src/reddit/actions/toaster.ts");
			const cI = [];
			var oI = (e = cI, t) => {
					switch (t.type) {
						case nI.c: {
							const r = t.payload,
								s = [];
							let a = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), a = a || e === r
							}
							return a || s.push(r), s
						}
						case nI.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				dI = r("./src/reddit/actions/tooltip.ts");
			var iI = (e = null, t) => {
					switch (t.type) {
						case dI.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case dI.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case dI.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case dI.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case oe.K:
						case dI.d:
						case O.a:
						case fo.b:
						case fo.c:
						case fo.a:
							return null;
						default:
							return e
					}
				},
				uI = r("./src/reddit/actions/tracing.ts");
			const lI = {
				traceId: void 0
			};
			var pI = (e = lI, t) => {
					switch (t.type) {
						case uI.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				bI = r("./src/lib/asyncActions/index.ts"),
				fI = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const yI = Object(bI.c)(fI.c.requestedActionType, fI.c.succeededActionType, fI.c.failedActionType),
				mI = Object(bI.c)(fI.a.requestedActionType, fI.a.succeededActionType, fI.a.failedActionType),
				EI = Object(bI.c)(fI.d.requestedActionType, fI.d.succeededActionType, fI.d.failedActionType);
			var OI = Object(c.c)({
					load: yI,
					execute: mI,
					send: EI
				}),
				_I = r("./src/reddit/actions/tracking.ts");
			const hI = {};
			var II = (e = hI, t) => {
					switch (t.type) {
						case _I.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case _I.b: {
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
				gI = Object(c.c)({
					reCaptchaEnterprise: OI,
					viewportDataLoaded: II
				}),
				SI = r("./src/reddit/actions/trafficStats/constants.ts");
			var DI = (e = !1, t) => {
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
			var TI = (e = null, t) => {
					switch (t.type) {
						case SI.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case SI.c:
							return null;
						default:
							return e
					}
				},
				vI = Object(c.c)({
					pending: DI,
					trafficStats: TI
				});
			var wI = (e = null, t) => {
				switch (t.type) {
					case m.s:
					case m.t:
						return null;
					case m.q: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var AI = (e = !1, t) => {
					switch (t.type) {
						case m.s:
							return !0;
						case m.q:
						case m.t:
							return !1;
						default:
							return e
					}
				},
				jI = Object(c.c)({
					error: wI,
					pending: AI
				});
			var RI = (e = null, t) => {
				switch (t.type) {
					case m.r:
						return (t.payload ? t.payload.contentId : null) || null;
					case s.b:
					case m.t:
						return null;
					default:
						return e
				}
			};
			var PI = (e = "", t) => {
				switch (t.type) {
					case m.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case m.t:
						return "";
					default:
						return e
				}
			};
			var CI = (e = null, t) => {
					switch (t.type) {
						case m.r:
							return t.payload && t.payload.publicAddress || null;
						case s.b:
						case m.t:
							return null;
						default:
							return e
					}
				},
				LI = Object(c.c)({
					api: jI,
					contentId: RI,
					initialRecipient: PI,
					publicAddress: CI
				}),
				NI = Object(c.c)({
					communityPoints: LI
				}),
				kI = r("./src/reddit/actions/search/trending.ts");
			const xI = [];
			var UI = (e = xI, t) => {
					switch (t.type) {
						case Y.SUBREDDIT_LOADED:
						case kI.a: {
							const {
								items: r
							} = t.payload;
							return r || e
						}
						default:
							return e
					}
				},
				MI = Object(c.c)({
					models: UI
				});
			const GI = {};
			var FI = (e = GI, t) => {
					switch (t.type) {
						case Ff.a: {
							const {
								trophies: r
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
				BI = r("./src/reddit/actions/upload.ts"),
				qI = r("./src/reddit/models/Upload/index.ts");
			const HI = {};
			var VI = (e = HI, t) => {
				switch (t.type) {
					case BI.d: {
						const {
							key: r,
							id: s,
							file: a
						} = t.payload, n = e[r], c = n && n.file === a ? {
							...n.metadata
						} : {};
						return {
							...e,
							[r]: {
								key: r,
								id: s,
								file: a,
								metadata: c,
								url: void 0,
								status: qI.a.PENDING
							}
						}
					}
					case BI.h: {
						const {
							key: r
						} = t.payload, s = e[r];
						return {
							...e,
							[r]: {
								...s,
								status: qI.a.UPLOADING
							}
						}
					}
					case BI.c: {
						const {
							key: r,
							metadata: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: {
								...a,
								metadata: s
							}
						}
					}
					case BI.e: {
						const {
							key: r,
							progress: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: {
								...a,
								progress: s
							}
						}
					}
					case BI.g: {
						const {
							key: r,
							url: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: {
								...a,
								status: qI.a.SUCCESS,
								url: s
							}
						}
					}
					case BI.b: {
						const {
							key: r,
							error: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: {
								...a,
								status: qI.a.FAILED,
								error: s
							}
						}
					}
					case BI.a: {
						const {
							key: r
						} = t.payload, s = e[r];
						return {
							...e,
							[r]: {
								...s,
								status: qI.a.CANCELED
							}
						}
					}
					case BI.f: {
						const {
							key: r
						} = t.payload, s = e[r];
						return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), xs()(e, r)
					}
					default:
						return e
				}
			};
			const KI = {};
			var WI = (e = KI, t) => {
					switch (t.type) {
						case _.d:
						case m.a:
						case y.f:
						case m.t: {
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
						case m.w: {
							const r = t.payload,
								s = {
									...e
								};
							return Object.keys(r).forEach(t => {
								const a = r[t],
									n = e[t],
									c = {
										latest: n ? n.latest.at <= a.at ? a : n.latest : a,
										byDate: {
											...n ? n.byDate : {},
											[a.at]: a
										}
									};
								s[t] = c
							}), s
						}
						default:
							return e
					}
				},
				$I = r("./src/reddit/actions/inbox.ts"),
				XI = r("./src/reddit/actions/pages/appeal/constants.ts"),
				QI = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				zI = r("./src/reddit/actions/sso/constants.ts");
			const JI = (e, t) => {
				if (!t || Xi()(e, t)) return e;
				const {
					awardeeKarma: r,
					awarderKarma: s,
					commentKarma: a,
					postKarma: n,
					totalKarma: c
				} = t, o = e ? e.awardeeKarma : 0, d = e ? e.awarderKarma : 0, i = r || o, u = s || d, l = c || i + u + n + a;
				return {
					...t,
					awardeeKarma: i,
					awarderKarma: u,
					totalKarma: l
				}
			};
			var YI = Object(mb.a)((e = null, t) => {
				switch (t.type) {
					case XI.a:
					case XI.b:
					case Cy.b:
					case Cy.c:
					case Nr.a:
					case Nr.b:
					case Nr.f:
					case Nr.h:
					case Nr.i:
					case Nr.j:
					case Ce.e:
					case Ce.h:
					case Ce.g:
					case Pe.q:
					case Pe.r:
					case $.a:
					case $.e:
					case $.b:
					case $.f:
					case je.a:
					case je.b:
					case Le.a:
					case Le.b:
					case Y.SUBREDDIT_FAILED:
					case Yi.l:
					case X.b:
					case X.a:
					case X.e:
					case X.d:
					case z.c:
					case z.i:
					case ke.e:
					case ke.d:
					case ke.b:
					case ke.a:
					case Q.PROFILE_POSTS_LOADED:
					case Q.PROFILE_POSTS_FAILED:
					case Y.SUBREDDIT_LOADED:
					case J.SEARCH_FAILED:
					case J.SEARCH_RESULTS_RECEIVED:
					case Ne.PAGE_LOADED:
					case Us.PAGE_LOADED:
					case Ge.a:
					case Ge.c:
					case Zh.a:
					case Zh.b:
					case kr.j:
					case QI.b:
					case tI.c:
					case rd.TOPIC_DATA_LOADED:
						return JI(e, t.payload.account);
					case tI.n:
						return e ? {
							...e,
							email: t.payload
						} : e;
					case W.i:
					case W.f:
					case W.m:
					case W.p:
					case W.v:
					case W.h:
					case W.e:
					case W.l:
					case W.o:
					case W.u: {
						const {
							response: r
						} = t.payload;
						return r ? JI(e, r.account) : e
					}
					case tI.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case s.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case kr.l:
					case kr.k: {
						const r = t.payload;
						return e && "profileIcon" === r.key ? {
							...e,
							accountIcon: r.imageUrl
						} : e
					}
					case oe.C:
					case oe.t: {
						const {
							coins: r
						} = t.payload;
						return e ? {
							...e,
							coins: r
						} : e
					}
					case oe.a: {
						const {
							userName: r,
							awarderKarma: s,
							awardeeKarma: a
						} = t.payload;
						if (r.toLowerCase() !== (e && Object(re.e)(e).toLowerCase())) return e;
						const n = a || (e ? e.awardeeKarma : 0) || 0,
							c = s || (e ? e.awarderKarma : 0) || 0,
							o = n + c + (e ? e.postKarma : 0) + (e ? e.commentKarma : 0);
						return e && {
							...e,
							awardeeKarma: n,
							awarderKarma: c,
							totalKarma: o
						}
					}
					case Re.w: {
						const {
							coins: r
						} = t.payload;
						return r && e ? {
							...e,
							coins: r
						} : e
					}
					case Uu.g: {
						const {
							price: r
						} = t.payload;
						return (null == e ? void 0 : e.coins) && r ? {
							...e,
							coins: e.coins - r
						} : e
					}
					case $I.a: {
						const {
							inboxCount: r
						} = t.payload;
						return e ? {
							...e,
							inboxCount: r
						} : e
					}
					case zI.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case zI.b: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: s.filter(e => e !== r)
						} : e
					}
					case So.c: {
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
					default:
						return e
				}
			}, null);
			var ZI = (e = null, t) => {
				switch (t.type) {
					case tI.m:
					case tI.n:
						return null;
					case tI.l:
						return t.payload;
					default:
						return e
				}
			};
			var eg = (e = !1, t) => {
					switch (t.type) {
						case tI.m:
							return !0;
						case tI.n:
						case tI.l:
							return !1;
						default:
							return e
					}
				},
				tg = Object(c.c)({
					error: ZI,
					pending: eg
				}),
				rg = Object(c.c)({
					api: tg
				});
			var sg = (e = !1, t) => {
				switch (t.type) {
					case tI.j:
						return !0;
					default:
						return e
				}
			};
			var ag = (e = !1, t) => {
					switch (t.type) {
						case tI.i:
							return !0;
						case tI.j:
						case tI.h:
							return !1;
						default:
							return e
					}
				},
				ng = Object(c.c)({
					pending: ag,
					emailSent: sg
				}),
				cg = Object(c.c)({
					api: ng
				}),
				og = Object(c.c)({
					changeEmail: rg,
					sendResetEmail: cg
				}),
				dg = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const ig = {};
			var ug = (e = ig, t) => {
				switch (t.type) {
					case gt.f:
						return {
							...e, new: dg.a.pending
						};
					case gt.d:
						return {
							...e, new: dg.a.error
						};
					case gt.e:
						return {
							...e, new: dg.a.waitingForRequest
						};
					case gt.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: dg.a.pending
						}
					}
					case gt.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: dg.a.error
						}
					}
					case gt.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: dg.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const lg = [];
			var pg = (e = lg, t) => {
					switch (t.type) {
						case gt.e:
							return [t.payload, ...e];
						case gt.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case kr.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				bg = Object(c.c)({
					api: ug,
					data: pg
				}),
				fg = r("./src/reddit/actions/chat/constants.ts"),
				yg = r("./src/reddit/actions/chat/userSettings.ts");
			const mg = fg.a.anybody;
			var Eg = (e = mg, t) => {
					switch (t.type) {
						case yg.a:
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
				Og = Object(c.c)({
					invitePolicy: Eg
				});
			const _g = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var hg = (e = null, t) => {
				switch (t.type) {
					case Ne.PAGE_LOADED: {
						const {
							drafts: r
						} = t.payload;
						return e && Xi()(e, r) ? e : {
							...e,
							...r
						}
					}
					case cs.L: {
						const {
							response: {
								draftsCount: r
							}
						} = t.payload;
						return _g(e, r)
					}
					case Wr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return _g(e, r.length)
					}
					case Wr.c:
					case Wr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return _g(e, r)
					}
					default:
						return e
				}
			};
			const Ig = {};
			var gg = (e = Ig, t) => {
					switch (t.type) {
						case Wn.a: {
							const e = t.payload.experimentVariants;
							return Su(e)
						}
						default:
							return e
					}
				},
				Sg = r("./src/reddit/actions/global/constants.ts");
			const Dg = {};
			var Tg = (e = Dg, t) => {
					switch (t.type) {
						case Sg.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				vg = Object(c.c)({
					byName: gg,
					localPersisted: Tg
				}),
				wg = r("./src/reddit/actions/googleOneTap/index.ts");
			var Ag = (e = !1, t) => {
				switch (t.type) {
					case wg.a:
						return !0;
					default:
						return e
				}
			};
			var jg = (e = !1, t) => {
				switch (t.type) {
					case kr.e:
						return !0;
					case kr.d:
						return !1;
					default:
						return e
				}
			};
			var Rg = (e = "en", t) => {
				switch (t.type) {
					case kr.g:
						return t.payload;
					case kr.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const Pg = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var Cg = (e = Pg, t) => {
					switch (t.type) {
						case tI.b:
							return t.payload;
						default:
							return e
					}
				},
				Lg = r("./src/reddit/actions/notifications/constants.ts"),
				Ng = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var kg = (e = null, t) => {
				switch (t.type) {
					case Ng.a:
					case Ng.d:
					case Lg.a:
						return t.payload && t.payload.error || null;
					case Ng.c:
					case Ng.f:
					case Ng.a:
					case Lg.c:
					case Lg.b:
						return null;
					default:
						return e
				}
			};
			var xg = (e = !1, t) => {
				switch (t.type) {
					case Lg.c:
						return !1;
					case Lg.b:
						return !0;
					default:
						return e
				}
			};
			var Ug = (e = !1, t) => {
					switch (t.type) {
						case Lg.c:
							return !0;
						case Lg.b:
						case Lg.a:
							return !1;
						default:
							return e
					}
				},
				Mg = Object(c.c)({
					error: kg,
					loaded: xg,
					pending: Ug
				});
			var Gg = (e = null, t) => {
				switch (t.type) {
					case Lg.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case Lg.f:
					case Lg.e:
						return null;
					default:
						return e
				}
			};
			var Fg = (e = !1, t) => {
				switch (t.type) {
					case Lg.f:
						return !1;
					case Lg.e:
						return !0;
					default:
						return e
				}
			};
			var Bg = (e = !1, t) => {
					switch (t.type) {
						case Lg.f:
							return !0;
						case Lg.e:
						case Lg.d:
							return !1;
						default:
							return e
					}
				},
				qg = Object(c.c)({
					error: Gg,
					loaded: Fg,
					pending: Bg
				}),
				Hg = Object(c.c)({
					getPreferences: Mg,
					setPreferences: qg
				});
			const Vg = {
				byId: {},
				allIds: []
			};
			var Kg = (e = Vg, t) => {
				switch (t.type) {
					case Ng.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case Ng.g: {
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
			const Wg = {
				byId: {},
				allIds: []
			};
			var $g = (e = Wg, t) => {
					switch (t.type) {
						case Ng.b: {
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
				Xg = Object(c.c)({
					sections: $g,
					rows: Kg
				}),
				Qg = r("./src/lib/notifications/constants.ts");
			var zg = (e = !1, t) => {
				switch (t.type) {
					case Qg.j:
						return !0;
					case Qg.b:
					case Qg.d:
					case Qg.e:
						return !1;
					default:
						return e
				}
			};
			const Jg = {
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
			var Yg = (e = Jg, t) => {
				switch (t.type) {
					case Lg.b:
					case Lg.f:
					case Lg.d: {
						const {
							preferences: r
						} = t.payload;
						return sn()(r) ? e : r
					}
					default:
						return e
				}
			};
			const Zg = {
				byId: {},
				allIds: []
			};
			var eS = (e = Zg, t) => {
				switch (t.type) {
					case Ng.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case Ng.g: {
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
			const tS = {
				byId: {},
				allIds: []
			};
			var rS = (e = tS, t) => {
					switch (t.type) {
						case Ng.e: {
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
				sS = Object(c.c)({
					sections: rS,
					rows: eS
				}),
				aS = Object(c.c)({
					api: Hg,
					emailSettingsLayout: Xg,
					isNotificationPromptVisible: zg,
					preferences: Yg,
					pushSettingsLayout: sS
				});
			const nS = {};
			var cS = (e = nS, t) => {
				switch (t.type) {
					case y.i:
					case f.i: {
						const {
							subredditId: r,
							userOwnedBadges: s
						} = t.payload, a = s.reduce((e, t) => (e[t] = !0, e), {});
						return {
							...e,
							[r]: {
								...e[r] || {},
								...a
							}
						}
					}
					case _.d: {
						const {
							userOwnedBadges: r,
							product: s
						} = t.payload, a = r.reduce((e, t) => (e[t] = !0, e), {});
						return {
							...e,
							[s.subredditId]: {
								...e[s.subredditId] || {},
								...a
							}
						}
					}
					default:
						return e
				}
			};
			const oS = {},
				dS = (e, t) => `${e}_${t||new Date}}`;
			var iS = (e = oS, t) => {
				switch (t.type) {
					case oe.tb: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[dS(t.subredditInfo.id, t.allocatedAt)]: t
							}), {});
							return {
								...e,
								...s
							}
						}
						return e
					}
					case oe.T: {
						const {
							subredditId: r,
							powerupsCount: s,
							allocatedAt: a
						} = t.payload;
						if (s < 0) {
							const t = dS(r, a),
								n = e[t];
							if (n && n.isPremium) return {
								...e,
								[t]: {
									...n,
									powerups: n.powerups + s,
									isActive: !1,
									isDeallocationAllowed: !1
								}
							}
						}
						return e
					}
					case oe.O: {
						const {
							subredditId: r,
							allocatedAt: s
						} = t.payload, a = dS(r, s), n = e[a];
						return n && !n.isPremium ? {
							...e,
							[a]: {
								...n,
								isActive: !1,
								isDeallocationAllowed: !1
							}
						} : e
					}
					default:
						return e
				}
			};
			var uS = (e = null, t) => {
				switch (t.type) {
					case oe.tb: {
						const r = t.payload.powerups;
						return r ? xs()({
							...e,
							...r
						}, "allocation") : e
					}
					case oe.ib: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? xs()({
							...e,
							...r
						}, "allocation") : e
					}
					case oe.T: {
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
					case oe.U: {
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
			var lS = (e = !1, t) => {
					switch (t.type) {
						case oe.sb:
						case oe.ub:
							return !1;
						case oe.tb:
							return !0;
						default:
							return e
					}
				},
				pS = Object(c.c)({
					allocationByKey: iS,
					data: uS,
					fetched: lS
				}),
				bS = r("./src/reddit/reducers/user/prefs/index.ts");
			var fS = (e = "", t) => {
					switch (t.type) {
						case tI.d:
							return t.payload;
						default:
							return e
					}
				},
				yS = r("./src/reddit/actions/session.ts");
			var mS = (e = null, t) => {
				switch (t.type) {
					case yS.a:
					case yS.b:
					case yS.c:
					case yS.e:
						return t.payload;
					case yS.d:
						return null;
					default:
						return e
				}
			};
			var ES = (e = !1, t) => {
				switch (t.type) {
					case yS.f:
						return !0;
					default:
						return e
				}
			};
			var OS = (e = "", t) => {
				switch (t.type) {
					case tI.k:
						return t.payload;
					default:
						return e
				}
			};
			var _S = (e = null, t) => {
				switch (t.type) {
					case Wn.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var hS = (e = null, t) => {
					switch (t.type) {
						case Wn.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				IS = Object(c.c)({
					isEmployee: _S,
					isLoggedIn: hS
				});
			var gS = (e = null, t) => {
					switch (t.type) {
						case kr.r: {
							const {
								topContentDismissal: r
							} = t.payload;
							return e && Xi()(e, r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				SS = r("./src/reddit/actions/userWhitelist.ts");
			const DS = {};
			var TS = (e = DS, t) => {
				switch (t.type) {
					case SS.e:
						return {
							...e, new: dg.a.pending
						};
					case SS.d:
						return {
							...e, new: dg.a.error
						};
					case SS.f:
						return {
							...e, new: dg.a.waitingForRequest
						};
					case SS.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: dg.a.pending
						}
					}
					case SS.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: dg.a.error
						}
					}
					case SS.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: dg.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const vS = [];
			var wS = (e = vS, t) => {
					switch (t.type) {
						case SS.f:
							return [t.payload, ...e];
						case SS.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case kr.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				AS = Object(c.c)({
					api: TS,
					data: wS
				}),
				jS = Object(c.c)({
					account: YI,
					accountSettings: og,
					blocked: bg,
					chatSettings: Og,
					drafts: hg,
					experiments: vg,
					googleOneTapEnabled: Ag,
					isCustomizeFlyoutShowing: jg,
					topContentDismissalPrefsSet: gS,
					language: Rg,
					loid: Cg,
					notificationPrefs: aS,
					ownedBadges: cS,
					powerups: pS,
					prefs: bS.d,
					reddaid: fS,
					session: mS,
					sessionRefreshFailed: ES,
					sessionTracker: OS,
					temporaryGQL: IS,
					wallets: WI,
					whitelist: AS
				});
			var RS = (e = null, t) => {
				switch (t.type) {
					case QI.a:
						return t.payload || null;
					case QI.b:
					case QI.c:
						return null;
					default:
						return e
				}
			};
			var PS = (e = !1, t) => {
				switch (t.type) {
					case QI.c:
						return !0;
					case QI.b:
					case QI.a:
						return !1;
					default:
						return e
				}
			};
			var CS = (e = !1, t) => {
				switch (t.type) {
					case QI.b:
						return !0;
					case QI.a:
					case QI.c:
						return !1;
					default:
						return e
				}
			};
			var LS = (e = !1, t) => {
					switch (t.type) {
						case QI.b:
							return t.payload.userDataExportEligibility;
						case QI.a:
						case QI.c:
							return !1;
						default:
							return e
					}
				},
				NS = Object(c.c)({
					error: RS,
					pending: PS,
					success: CS,
					userDataExportEligibility: LS
				}),
				kS = Object(c.c)({
					userDataRequestPageApi: NS
				});
			const xS = {};
			var US = (e = xS, t) => {
				switch (t.type) {
					case tI.g:
					case tI.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case tI.e: {
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
			var MS = (e = !1, t) => {
					switch (t.type) {
						case tI.g:
							return !0;
						case tI.f:
						case tI.e:
							return !1;
						default:
							return e
					}
				},
				GS = Object(c.c)({
					error: US,
					pending: MS
				});
			const FS = {};
			var BS = (e = FS, t) => {
				switch (t.type) {
					case f.f: {
						const {
							subredditId: r,
							usersAppliedBadges: s
						} = t.payload, a = Object.keys(s).reduce((t, a) => {
							const n = s[a];
							return t[a] = {
								...e[a] || {},
								[r]: n
							}, t
						}, {});
						return {
							...e,
							...a
						}
					}
					case f.b: {
						const {
							badgeIds: r,
							subredditId: s,
							userId: a
						} = t.payload;
						return {
							...e,
							[a]: {
								...e[a] || {},
								[s]: r
							}
						}
					}
					case f.a: {
						const {
							previousBadgeIds: r,
							subredditId: s,
							userId: a
						} = t.payload;
						return {
							...e,
							[a]: {
								...e[a] || {},
								[s]: r
							}
						}
					}
					case y.a: {
						const {
							badge: r,
							currentAppliedBadges: s,
							placement: a,
							subredditId: n,
							userId: c
						} = t.payload, o = s.filter(e => e.placement !== a).concat(r).filter(Boolean).map(e => e.id);
						return {
							...e,
							[c]: {
								...e[c] || {},
								[n]: o
							}
						}
					}
					default:
						return e
				}
			};
			const qS = {},
				HS = (e, t) => {
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					return r.forEach(r => {
						const a = e[r],
							n = t[r];
						a && Xi()(a, n) || (s[r.toLowerCase()] = n)
					}), Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var VS = (e = qS, t) => {
					switch (t.type) {
						case tI.f: {
							const {
								data: r
							} = t.payload;
							return HS(e, r)
						}
						case Yi.k: {
							const {
								user: r
							} = t.payload;
							return HS(e, {
								[r.username]: r
							})
						}
						case oe.t: {
							const {
								gildee: r
							} = t.payload;
							if (!r) return e;
							const s = e[r.toLowerCase()];
							if (!s) return e;
							const a = s.awardedLastMonth,
								n = a ? a.totalCount + 1 : 1,
								c = a && a.topAward;
							return c ? HS(e, {
								[r.toLowerCase()]: {
									...s,
									awardedLastMonth: {
										totalCount: n,
										topAward: c
									}
								}
							}) : e
						}
						case oe.a: {
							const {
								userName: r,
								awardeeKarma: s,
								awarderKarma: a
							} = t.payload, n = e[r.toLowerCase()];
							if (!n) return e;
							const c = s || n.awardeeKarma,
								o = a || n.awarderKarma;
							return HS(e, {
								[r.toLowerCase()]: {
									...n,
									awardeeKarma: c,
									awarderKarma: o,
									totalKarma: c + o + n.postKarma + n.commentKarma
								}
							})
						}
						case kr.l:
						case kr.k: {
							const {
								imageUrl: r,
								key: s,
								username: a
							} = t.payload;
							if ("profileIcon" !== s) return e;
							const n = a.toLowerCase(),
								c = e[n];
							return c ? HS(e, {
								[n]: {
									...c,
									accountIcon: r
								}
							}) : e
						}
						default:
							return e
					}
				},
				KS = r("./src/reddit/actions/usernameAvailable.ts");
			const WS = {};
			var $S = (e = WS, t) => {
				switch (t.type) {
					case KS.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: KS.b.Available
						}
					}
					case KS.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: KS.b.Error
						}
					}
					case KS.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: KS.b.Pending
						}
					}
					case KS.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: KS.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const XS = {};
			var QS = (e = XS, t) => {
				switch (t.type) {
					case oe.Z: {
						const {
							userId: r,
							supportedSubreddits: s
						} = t.payload, a = {
							[r]: s
						};
						return {
							...e,
							...a
						}
					}
					default:
						return e
				}
			};
			var zS = (e = !1, t) => {
					switch (t.type) {
						case oe.Y:
						case oe.ab:
							return !1;
						case oe.Z:
							return !0;
						default:
							return e
					}
				},
				JS = Object(c.c)({
					allocationByKey: QS,
					fetched: zS
				}),
				YS = r("./src/reddit/actions/presence.ts");
			const ZS = {};
			var eD = (e = ZS, t) => {
				switch (t.type) {
					case YS.a:
						return {
							...e, ...t.payload.presentUsers
						};
					default:
						return e
				}
			};
			var tD = (e = null, t) => {
				switch (t.type) {
					case oe.ob:
						return t.payload;
					case oe.qb:
					case oe.pb:
						return null;
					default:
						return e
				}
			};
			var rD = (e = !1, t) => {
					switch (t.type) {
						case oe.pb:
						case oe.ob:
							return !1;
						case oe.qb:
							return !0;
						default:
							return e
					}
				},
				sD = Object(c.c)({
					error: tD,
					pending: rD
				});
			var aD = (e = null, t) => {
				switch (t.type) {
					case oe.rb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const nD = {};
			var cD = (e = nD, t) => {
				switch (t.type) {
					case oe.pb: {
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
			const oD = {};
			var dD = (e = oD, t) => {
					switch (t.type) {
						case oe.pb: {
							const {
								postId: r,
								topAwardersRank: s
							} = t.payload;
							return {
								...e,
								[r]: (s || []).sort((e, t) => e.rank - t.rank)
							}
						}
						case oe.t: {
							const {
								id: r
							} = t.payload;
							return xs()(e, [r])
						}
						default:
							return e
					}
				},
				iD = Object(c.c)({
					api: sD,
					currentPostId: aD,
					currentRank: cD,
					list: dD
				}),
				uD = Object(c.c)({
					api: GS,
					appliedBadges: BS,
					models: VS,
					nameAvailable: $S,
					topAwarders: iD,
					powerups: JS,
					presence: eD
				});
			const lD = {};
			var pD = (e = lD, t) => {
					switch (t.type) {
						case $.b:
						case $.f:
						case Y.SUBREDDIT_LOADED:
						case ee.i:
						case J.SEARCH_RESULTS_RECEIVED:
						case Ne.PAGE_LOADED:
						case Us.PAGE_LOADED: {
							const {
								structuredStyles: r
							} = t.payload;
							if (!(r && r.data && r.data.content)) return e;
							const s = r.data.content.widgets.layout.idCardWidget,
								a = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== a.length) return e;
							const n = a[0];
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				bD = r("./src/reddit/actions/widgets/constants.ts");
			const fD = {};
			var yD = (e = fD, t) => {
					switch (t.type) {
						case $.b:
						case $.f:
						case J.SEARCH_RESULTS_RECEIVED:
						case ee.i:
						case Y.SUBREDDIT_LOADED:
						case Ne.PAGE_LOADED: {
							const {
								structuredStyles: r
							} = t.payload;
							if (!(r && r.data && r.data.content)) return e;
							const s = r.data.content.widgets.items,
								a = r.data.content.widgets.layout.topbar.order.filter(e => s[e] && "menu" === s[e].kind);
							if (!a.length) return e;
							const n = Object.keys(t.payload.subredditAboutInfo || {});
							if (1 !== n.length) return e;
							const c = n[0];
							return {
								...e,
								[c]: a[0]
							}
						}
						case bD.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case bD.h: {
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
				mD = r("./src/reddit/models/Widgets/index.ts");
			const ED = {};
			var OD = (e = ED, t) => {
				switch (t.type) {
					case Y.SUBREDDIT_LOADED: {
						const r = t.payload,
							s = r.structuredStyles && r.structuredStyles.data && r.structuredStyles.data.content;
						if (!s) return e;
						const a = s.widgets;
						return {
							...e,
							...a.items
						}
					}
					case bD.b: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case I.k: {
						const t = {
							...e
						};
						return Object.keys(t).forEach(e => {
							t[e] = {
								...t[e],
								styles: Object(mD.m)()
							}
						}), t
					}
					case bD.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case bD.i:
					case bD.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case bD.h: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r.widgetId], s
					}
					case $.b:
					case $.f:
					case Y.SUBREDDIT_LOADED:
					case ee.i:
					case J.SEARCH_RESULTS_RECEIVED:
					case Ne.PAGE_LOADED:
					case Us.PAGE_LOADED: {
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
					case tu.h: {
						const {
							userIsSubscriber: r,
							nameIdentifiers: s,
							widgetId: a
						} = t.payload;
						if (!a || !e[a] || "community-list" !== e[a].kind) return {
							...e
						};
						const n = r,
							c = e[a],
							o = c.data.map(e => {
								const t = {
									...e
								};
								return s.some(e => e.name === t.name) && (t.isSubscribed = n), t
							});
						return {
							...e,
							[a]: {
								...c,
								data: o
							}
						}
					}
					case zE.f: {
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
			const _D = {};
			var hD = (e = _D, t) => {
				switch (t.type) {
					case Y.SUBREDDIT_LOADED:
					case $.f:
					case ee.i:
					case Ne.PAGE_LOADED: {
						const {
							structuredStyles: r
						} = t.payload;
						if (!(r && r.data && r.data.content)) return e;
						const s = r.data.content.widgets.layout.moderatorWidget,
							a = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== a.length) return e;
						const n = a[0];
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const ID = {};
			var gD = (e = ID, t) => {
				switch (t.type) {
					case Y.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case Us.PAGE_LOADED: {
						const r = t.payload,
							s = r.structuredStyles && r.structuredStyles.data && r.structuredStyles.data.content;
						if (!s) return e;
						const a = Object.keys(r.subredditAboutInfo || {});
						if (1 !== a.length) return e;
						const n = a[0],
							c = s.widgets.layout.sidebar.order;
						return {
							...e,
							[n]: c
						}
					}
					case bD.e:
					case bD.b: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgets.layout.sidebar.order
						}
					}
					case bD.f: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgetIds
						}
					}
					case bD.g: {
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
					case bD.h: {
						const r = t.payload;
						if (!e[r.subredditId]) return e;
						const s = e[r.subredditId].filter(e => e !== r.widgetId);
						return {
							...e,
							[r.subredditId]: s
						}
					}
					case $.b:
					case $.f:
					case Y.SUBREDDIT_LOADED:
					case J.SEARCH_RESULTS_RECEIVED:
					case ee.i:
					case Ne.PAGE_LOADED:
					case Us.PAGE_LOADED: {
						const {
							structuredStyles: r
						} = t.payload;
						if (!(r && r.data && r.data.content)) return e;
						const s = r.data.content.widgets.layout.sidebar.order,
							a = Object.keys(t.payload.subredditAboutInfo || {});
						if (1 !== a.length) return e;
						const n = a[0];
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const SD = {
				accountManagerModalData: n,
				actionBarCountAnimation: p,
				activeModal: S,
				ads: A,
				apiRequestState: P,
				appBadges: M,
				authorFlair: ce,
				awards: Ze,
				badges: bt,
				blockedRedditors: It,
				blockUser: At,
				brandSafety: Rt,
				chat: ur,
				claimGold: Or,
				commentsListTruncated: hr,
				communityFlairs: Sr,
				contentControls: Lr,
				contentGate: Ur,
				continueThreads: Fr,
				creations: $a,
				dashboard: za,
				discoveryUnits: pn,
				dismissedTruncationList: yn,
				economics: Un,
				emojis: Kn,
				experimentOverrides: zn,
				externalAccount: Tc,
				featureFlags: Cc,
				focusedVerticals: Kc,
				fontFiles: $c,
				gild: co,
				header: mo,
				htmlResponseStreaming: Eo,
				imageUploads: ho,
				interceptedAction: go,
				isChangeUsernameTooltipShowing: Do,
				isEmailVerificationTooltipShowing: vo,
				isModeratorWithPostPerms: Ao,
				jsApi: Po,
				leaderboard: Fo,
				listings: jd,
				live: Nd,
				mediaGalleries: Fd,
				mediaPlayback: Hd,
				meta: Wd,
				moderatingSubreddits: Qd,
				moderationPromptId: zd,
				modListingPage: si,
				modModeEnabled: ni,
				moreComments: fi,
				multireddits: ou,
				notificationBannerId: iu,
				notificationsInbox: Ou,
				nps: Iu,
				page: wu,
				platform: Ru,
				postCollection: nl,
				polls: $u,
				postFlair: ll,
				posts: yb,
				postStickiedComments: _b,
				givePremium: po,
				products: Nb,
				profileCommentsPage: Qb,
				profilePrivatePage: pf,
				profileModSettingsPage: Zb,
				profilePostsPage: tf,
				profiles: Kf,
				promos: zf,
				publicAccessNetwork: jy,
				recommendations: Py,
				reportPage: By,
				reportRules: Vy,
				requestHost: Ky,
				runTimeEnvVars: $y,
				search: nm,
				searchDiscoveryUnits: bm,
				seo: Im,
				shortcuts: Pm,
				sidebarPromotedPosts: Nm,
				streaming: qm,
				structuredStyles: oE,
				stylesheets: dE,
				subredditAutocomplete: EE,
				subreddits: Q_,
				subredditStickyPosts: Y_,
				subscriptions: hh,
				survey: vh,
				tabBadged: Ah,
				tags: Yh,
				themes: aI,
				toaster: oI,
				tooltipId: iI,
				tracing: pI,
				tracking: gI,
				trafficStats: vI,
				transfers: NI,
				trending: MI,
				trophies: FI,
				uploads: VI,
				user: jS,
				userDataRequestPage: kS,
				users: uD,
				widgets: Object(c.c)({
					idCardIds: pD,
					menuIds: yD,
					models: OD,
					moderatorIds: hD,
					sidebar: gD
				})
			}
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "c", (function() {
				return n
			}));
			const s = e => e.blockedRedditors.api.pending,
				a = e => e.blockedRedditors.list,
				n = (e, t) => {
					const r = (e => {
						const t = a(e);
						return t && t.ids
					})(e);
					return !!r && r.includes(t)
				}
		},
		"./src/reddit/selectors/chatSettingsPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/reddit/models/ChatSettingsPage/index.ts");
			const a = (e, {
					subredditId: t
				}) => !!e.chat.subredditSettingsPage.api.fetch.pending[t],
				n = (e, {
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
				return a
			}));
			const s = e => e.claimGold.code,
				a = e => e.claimGold.showModal
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
				return m
			})), r.d(t, "a", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/values.js"),
				a = r.n(s),
				n = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/models/Flair/index.ts"),
				o = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				d = r("./src/reddit/selectors/subreddit.ts");
			const i = [],
				u = e => e.emojis.models,
				l = Object(n.a)(u, (e, t) => t.subredditId, (e, t) => {
					const r = e[t];
					return r ? [...a()(r.emojis), ...a()(r.snoomojis)] : i
				}),
				p = Object(n.a)(l, o.a, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, r, s) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !r) && (!(!e.userFlairAllowed && s === c.d.UserFlair) && !(!e.postFlairAllowed && s === c.d.LinkFlair)))),
				b = Object(n.a)(u, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				f = (e, t) => Object(d.x)(e, {
					subredditName: t
				}).emojisEnabled,
				y = {
					emojis: {},
					snoomojis: {}
				},
				m = (e, {
					subredditId: t
				}) => u(e)[t] || y,
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
				a = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/meta.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(c.c, e => !e),
				i = Object(s.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => d(e),
					experimentName: a.N,
					expEventOverride: !1
				}), e => e),
				u = e => e === a.G.Onetap,
				l = e => e === a.G.OnetapAuto,
				p = e => e.user.googleOneTapEnabled,
				b = Object(s.a)(o.J, i, (e, t) => !e && !!t),
				f = Object(s.a)(o.J, i, (e, t) => !e && !!t && !Object(a.Dd)(t))
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts");
			const n = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: a.a,
						experimentName: s.yc
					}) === s.Ic.Enabled
				},
				c = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: a.a,
						experimentName: s.xc
					}) === s.Hc.Enabled
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
				return y
			})), r.d(t, "p", (function() {
				return E
			})), r.d(t, "k", (function() {
				return O
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return D
			})), r.d(t, "o", (function() {
				return T
			})), r.d(t, "b", (function() {
				return v
			}));
			var s = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				a = r("./src/reddit/models/Flair/index.ts"),
				n = r("./src/reddit/models/ScheduledPost/index.ts");
			const c = (e, {
					subredditId: t
				}) => ((e, {
					subredditId: t,
					type: r
				}) => !!e.posts.scheduledPosts[r].models[t])(e, {
					subredditId: t,
					type: n.f.standalonePosts
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
				y = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.recurringPosts.postOrder[t] || b).filter(r => !!(e.posts.scheduledPosts.recurringPosts.models[t] || p)[r]).map(r => e.posts.scheduledPosts.recurringPosts.models[t][r]),
				m = (e, {
					subredditId: t,
					scheduledPostId: r,
					type: s
				}) => {
					return (e.posts.scheduledPosts[s].models[t] || p)[r] || void 0
				},
				E = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => m(e, {
					subredditId: t,
					scheduledPostId: r,
					type: n.f.standalonePosts
				}),
				O = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => {
					const s = m(e, {
						subredditId: t,
						scheduledPostId: r,
						type: n.f.recurringPosts
					});
					return s || s
				},
				_ = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => E(e, {
					subredditId: t,
					scheduledPostId: r
				}) || O(e, {
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
					isOriginalContent: n
				}) => {
					const c = [];
					return n && c.push({
						text: "OC",
						type: a.f.Oc
					}), e && c.push(...Object(s.b)(e)), r && c.push({
						text: "spoiler",
						type: a.f.Spoiler
					}), t && c.push({
						text: "nsfw",
						type: a.f.Nsfw
					}), c
				})(e),
				g = ({
					scheduledPost: e
				}) => {
					const t = I({
							scheduledPost: e
						}),
						r = t.find(e => e.type === a.f.Richtext);
					return r || (t.find(e => e.type === a.f.Text) || null)
				},
				S = e => e.posts.scheduledPosts[n.f.recurringPosts].editModal.scheduledPostId,
				D = e => e.posts.scheduledPosts[n.f.recurringPosts].editModal.subredditId,
				T = e => e.posts.scheduledPosts.api.pendingUpdate,
				v = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/reddit/selectors/userDataRequest.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			}));
			const s = e => e.userDataRequestPage.userDataRequestPageApi.userDataExportEligibility,
				a = e => e.userDataRequestPage.userDataRequestPageApi
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.274ce44f5efb27cf53db.js.map