// https://www.redditstatic.com/desktop2x/Governance~Reddit.eb6023633f8fe7eaa6bf.js
// Retrieved at 3/16/2021, 5:30:08 PM by Reddit Dataminer v1.0.0
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
				U = Object(p.a)(k),
				x = e => ({
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
						r(Object(b.i)(s)), r(Object(f.f)(x(e))), t && t.close()
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
							t(Object(b.i)(s)), t(Object(f.f)(x(e)))
						}
						i.close()
					}, i.onerror = r => {
						d = !1;
						const s = Object(y.a)(c),
							n = Object(_.k)(a, s);
						t(Object(b.i)(n)), t(Object(f.f)(x(e))), i.close()
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
						r(U({
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
					experimentName: b.Oc
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
				return t.displayName = "Tracked", t.WrappedComponent = e, t
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
						a = Object(f.bb)(e.getState()) ? "1" : "";
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
				return U
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
				U = e => {
					Object(l.a)({
						...y(e),
						noun: "hide_oc_description",
						action: s.c.CLICK
					})
				},
				x = (e, t) => {
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
						...x(e, s.id)
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
						...x(e, t.subredditId)
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
				return x
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
							U(t, n, a, r, s);
							break
						}
						case n.Db.SUBREDDIT_WIKI:
							Object(S.a)(W(r, s)(t));
							break;
						case n.Db.COINS:
							Object(S.a)(x(r, s)(t)), Object(S.a)(M()(t));
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
				U = (e, t, r, s, a) => {
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
				x = (e, t) => r => ({
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
				return OD
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
			const U = {};
			var x = (e = U, t) => {
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
					badges: x
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
				Ue = r("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				xe = r("./src/lib/makeActionCreator/index.ts"),
				Me = (r("./src/config.ts"), r("./src/lib/constants/index.ts"));
			r("./src/lib/makeApiRequest/index.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(xe.a)("RECOMMENDED_POSTS_LOADED"), Object(xe.a)("RECOMMENDED_POSTS_FAILED");
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
					case Ue.b:
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
				Ut = r.n(kt);
			const xt = {};
			var Mt = (e = xt, t) => {
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
								...Ut()(e, e => ({
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
			const Ur = {};
			var xr = (e = Ur, t) => {
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
				Us = r.n(ks),
				xs = r("./src/reddit/actions/pages/postDraft.ts");
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
						return Us()(r, s)
					}
					case cs.L: {
						const {
							draftId: r
						} = t.payload;
						return r ? Us()(e, r) : e
					}
					case xs.PAGE_LOADED: {
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
			var Ua = (e = ka, t) => {
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
			var xa = (e = !1, t) => {
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
					fieldValidation: Ua,
					isChanged: xa,
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
			};
			const Sn = {};
			var Dn = (e = Sn, t) => {
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
					default:
						return e
				}
			};
			const Tn = {};
			var vn = (e = Tn, t) => {
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
				wn = r("./src/reddit/actions/economics/me/constants.ts");
			const An = {
				fetched: !1,
				data: {}
			};
			var jn = (e = An, t) => {
					switch (t.type) {
						case wn.a:
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
				Rn = r("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const Pn = {
				fetched: !1,
				data: null
			};
			var Cn = (e = Pn, t) => {
					switch (t.type) {
						case wn.b:
							return {
								fetched: !0, data: e.data
							};
						case wn.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				Ln = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Nn = Object(c.c)({
					banners: On,
					currentBadgeManagementScreen: In,
					currentModalArgs: gn,
					emotes: Dn,
					gifs: vn,
					me: jn,
					paymentSystems: Rn.b,
					pointsCopy: Cn,
					subredditPremium: Ln.b
				}),
				kn = r("./src/reddit/actions/emoji.ts");
			const Un = {};
			var xn = (e = Un, t) => {
					switch (t.type) {
						case kn.h: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case kn.g:
						case kn.f: {
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
				Mn = Object(c.c)({
					pending: xn
				}),
				Gn = Object(c.c)({
					list: Mn
				});
			const Fn = {};
			var Bn = (e = Fn, t) => {
					switch (t.type) {
						case kn.f:
						case kn.c:
							return e;
						case kn.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case kn.d: {
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
						case kn.i: {
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
						case kn.e: {
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
				qn = Object(c.c)({
					api: Gn,
					models: Bn
				}),
				Hn = r("./src/reddit/actions/experiments.ts");
			const Vn = /^experiment_(.*)$/i,
				Kn = e => {
					const t = e.match(Vn);
					if (null !== t) return t[1]
				},
				Wn = {};
			var $n = (e = Wn, t) => {
					switch (t.type) {
						case O.a: {
							const r = Bs(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = Kn(e);
								t && (s[t.toLowerCase()] = r[e] || "")
							}
							return sn()(s) ? e : {
								...e,
								...s
							}
						}
						case Hn.b: {
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
				Xn = r("./src/reddit/actions/externalAccount.ts");
			const Qn = {};
			var zn = (e = Qn, t) => {
				switch (t.type) {
					case Xn.e:
					case Xn.f: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Xn.d: {
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
			const Jn = {};
			var Yn = (e = Jn, t) => {
					switch (t.type) {
						case Xn.e: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Xn.f:
						case Xn.d: {
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
				Zn = Object(c.c)({
					error: zn,
					pending: Yn
				});
			const ec = {};
			var tc = (e = ec, t) => {
				switch (t.type) {
					case Xn.l:
					case Xn.k: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Xn.j: {
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
						case Xn.b: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Xn.c:
						case Xn.a: {
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
				ac = Object(c.c)({
					error: tc,
					pending: sc
				});
			const nc = {};
			var cc = (e = nc, t) => {
				switch (t.type) {
					case Xn.i:
					case Xn.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Xn.g: {
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
					case Xn.h: {
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
						case Xn.i: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Xn.h:
						case Xn.g: {
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
				lc = Object(c.c)({
					error: cc,
					fetched: dc,
					pending: uc
				});
			const pc = {};
			var bc = (e = pc, t) => {
				switch (t.type) {
					case Xn.l:
					case Xn.k: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Xn.j: {
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
			var yc = (e = fc, t) => {
					switch (t.type) {
						case Xn.l: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Xn.k:
						case Xn.j: {
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
				mc = Object(c.c)({
					error: bc,
					pending: yc
				}),
				Ec = Object(c.c)({
					connect: Zn,
					disconnect: ac,
					user: mc,
					subreddit: lc
				});
			const Oc = {};
			var _c = (e = Oc, t) => {
				switch (t.type) {
					case Xn.h: {
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
						case Xn.k: {
							const {
								username: r,
								accountsData: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case Xn.c: {
							const {
								username: r,
								provider: s
							} = t.payload, a = e[r];
							return a && a[s] ? {
								...e,
								[r]: Us()(a, s)
							} : e
						}
						default:
							return e
					}
				},
				gc = Object(c.c)({
					api: Ec,
					user: Ic,
					subreddit: _c
				}),
				Sc = r("./src/reddit/featureFlags/index.ts");
			const Dc = new Set(["0", "disabled", "false", "off", ""]);
			var Tc = e => !Dc.has(e.toLowerCase());
			const vc = Sc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				wc = Sc.a.reduce((e, t) => (e[t] = null, e), {});
			var Ac = (e = wc, t) => {
					switch (t.type) {
						case O.a: {
							const r = Bs(t);
							if (void 0 !== r) {
								const t = {};
								for (const e in r) {
									const s = Object(Sc.g)(e);
									if (s) {
										const a = vc[s.toLowerCase()];
										if (a) {
											const s = r[e],
												n = "string" != typeof s || Tc(s);
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
						case Sc.b: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return s === e[r] ? e : {
								...e,
								[r]: s
							}
						}
						case Sc.c: {
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
				jc = Object(c.c)({
					overrides: Ac
				}),
				Rc = r("./src/reddit/actions/focusedVerticals/constants.ts");
			const Pc = {
				focusedVerticalGqlError: null
			};
			var Cc = (e = Pc, t) => {
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
				kc = Object(c.c)({
					error: Cc,
					pending: Nc
				});
			var Uc = (e = "", t) => {
				switch (t.type) {
					case Rc.g:
					case Rc.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const xc = {
				dismissed: !0
			};
			var Mc = (e = xc, t) => {
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
			var Gc = (e = null, t) => {
				switch (t.type) {
					case Rc.g:
					case Rc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Fc = (e = null, t) => {
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
				qc = Object(c.c)({
					api: kc,
					components: Mc,
					interactedSubredditIds: Gc,
					recommendedSubredditIds: Bc,
					category: Uc,
					lastLoadedEnv: Fc
				});
			Object(xe.a)("FONTS_FONT_FILES_PARSED");
			const Hc = [];
			var Vc = (e = Hc, t) => {
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var Kc = (e = null, t) => {
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
			var Wc = (e = !1, t) => {
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
			var $c = (e = !1, t) => {
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
				Xc = Object(c.c)({
					error: Kc,
					pending: Wc,
					showLoader: $c
				});
			var Qc = (e = null, t) => {
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
			var zc = (e = null, t) => {
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
			var Jc = (e = null, t) => {
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
			var Yc = (e = !1, t) => {
				switch (t.type) {
					case oe.s:
						return t.payload;
					case oe.K:
						return !1;
					default:
						return e
				}
			};
			var Zc = (e = !1, t) => {
				switch (t.type) {
					case oe.J:
						return !0;
					default:
						return e
				}
			};
			var eo = (e = "", t) => {
				switch (t.type) {
					case oe.w:
						return t.payload;
					case oe.K:
						return "";
					default:
						return e
				}
			};
			const to = we.n;
			var ro = (e = to, t) => {
					switch (t.type) {
						case oe.fb:
							return t.payload;
						case oe.K: {
							const {
								award: e
							} = t.payload;
							return e || to
						}
						default:
							return e
					}
				},
				so = Object(c.c)({
					api: Xc,
					correlationId: Qc,
					gildModalThingId: Jc,
					isAnonymous: Yc,
					isIframed: Zc,
					message: eo,
					gildedThing: zc,
					selectedAward: ro
				});
			var ao = (e = null, t) => {
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
			var no = (e = !1, t) => {
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
				co = Object(c.c)({
					error: ao,
					pending: no
				});
			var oo = (e = "", t) => {
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
				io = Object(c.c)({
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
				bo = Object(c.c)({
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
				yo = r("./src/reddit/actions/imageUploads.ts");
			const mo = {};
			var Eo = (e = mo, t) => {
					switch (t.type) {
						case yo.d: {
							const r = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case yo.c:
						case yo.e:
						case yo.b: {
							const r = t.payload;
							return e[r.id] ? {
								...e,
								[r.id]: r
							} : e
						}
						case yo.a: {
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
				Oo = r("./src/reddit/actions/interceptedAction.ts");
			var _o = (e = null, t) => {
					switch (t.type) {
						case Oo.a:
							return t.payload;
						case Oo.b:
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
				go = r("./src/reddit/actions/emailVerificationTooltip.ts");
			var So = (e = !0, t) => {
					switch (t.type) {
						case go.a:
							return !e;
						default:
							return e
					}
				},
				Do = r("./src/reddit/actions/moderatingSubreddits.ts");
			var To = (e = !1, t) => {
					switch (t.type) {
						case Do.a: {
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
				vo = r("./src/reddit/actions/jsApi.ts");
			const wo = [];
			var Ao = (e = wo, t) => {
					switch (t.type) {
						case vo.a: {
							const r = t.payload;
							return -1 === e.indexOf(r) && (e = [...e, r]).sort(), e
						}
						default:
							return e
					}
				},
				jo = r("./src/reddit/actions/leaderboard/constants.ts");
			const Ro = {};
			var Po = (e = Ro, t) => {
				switch (t.type) {
					case jo.a: {
						const {
							subredditId: r,
							data: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case jo.b:
					case jo.c: {
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
			const Co = {};
			var Lo = (e = Co, t) => {
					switch (t.type) {
						case jo.a:
						case jo.c: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...a
							} = e;
							return a
						}
						case jo.b: {
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
				No = Object(c.c)({
					error: Po,
					pending: Lo
				});
			const ko = {};
			var Uo = (e = ko, t) => {
					switch (t.type) {
						case jo.c: {
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
				xo = Object(c.c)({
					api: No,
					models: Uo
				});
			var Mo = (e = "", t) => {
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
			const Go = {};
			var Fo = (e = Go, t) => {
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
			const Bo = {};
			var qo = (e = Bo, t) => {
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
				Ho = Object(c.c)({
					error: Fo,
					pending: qo
				});
			const Vo = {};
			var Ko = (e = Vo, t) => {
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
			const Wo = {};
			var $o = (e = Wo, t) => {
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
			const Xo = {};
			var Qo = (e = Xo, t) => {
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
				zo = Object(c.c)({
					api: Ho,
					identifiers: $o,
					fetchedTokens: Ko,
					loadMore: Qo
				}),
				Jo = r("./src/reddit/actions/eventPosts/constants.ts"),
				Yo = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				Zo = r("./src/reddit/actions/pages/topic.ts");
			const ed = {};
			var td = (e = ed, t) => {
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
						case Yo.b:
						case Yo.c:
						case Q.PROFILE_POSTS_PENDING:
						case Q.PROFILE_POSTS_LOADED:
						case Q.MORE_POSTS_PENDING:
						case Q.MORE_POSTS_LOADED:
						case Z.f:
						case Z.e:
						case ke.f:
						case ke.e:
						case ee.j:
						case Zo.TOPIC_DATA_PENDING:
						case Zo.TOPIC_DATA_LOADED:
						case Zo.MORE_POSTS_PENDING:
						case Zo.MORE_POSTS_LOADED:
						case ee.i:
						case Jo.e:
						case Jo.c:
						case Jo.d: {
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
						case Yo.a:
						case ee.h:
						case Z.d:
						case ke.d:
						case Q.PROFILE_POSTS_FAILED:
						case Q.MORE_POSTS_FAILED:
						case Zo.TOPIC_DATA_FAILED:
						case Zo.MORE_POSTS_FAILED:
						case Jo.b: {
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
				rd = r("./src/reddit/actions/linkedPosts/constants.ts"),
				sd = r("./src/reddit/actions/subreddit/constants.ts");
			const ad = {};
			var nd = (e = ad, t) => {
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
						case Yo.c:
						case Z.f:
						case Q.MORE_POSTS_PENDING:
						case ee.j:
						case Zo.MORE_POSTS_PENDING:
						case Jo.e: {
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
						case rd.a:
						case rd.b:
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
						case sd.k:
						case Yo.b:
						case Yo.a:
						case ee.i:
						case ee.h:
						case Zo.MORE_POSTS_LOADED:
						case Zo.MORE_POSTS_FAILED:
						case Jo.c:
						case Jo.b:
						case Jo.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case sd.s: {
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
				cd = Object(c.c)({
					error: td,
					pending: nd
				}),
				od = r("./src/reddit/actions/postList.ts"),
				dd = r("./node_modules/lodash/omitBy.js"),
				id = r.n(dd);

			function ud(e, t) {
				return t = t.toLowerCase(), id()(e, (e, r) => r === t || r.startsWith(`${t}--[`))
			}
			const ld = {};
			var pd = (e = ld, t) => {
				switch (t.type) {
					case od.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case od.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Us()(e, [r]) : e
					}
					case Y.SUBREDDIT_INVALIDATE_LISTING:
						return ud(e, t.payload);
					default:
						return e
				}
			};
			const bd = {};
			var fd = (e = bd, t) => {
					switch (t.type) {
						case Ce.e:
						case je.b:
						case Le.b:
						case Y.SUBREDDIT_LOADED:
						case Q.PROFILE_POSTS_LOADED:
						case Zo.TOPIC_DATA_LOADED: {
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
						case Zo.MORE_POSTS_LOADED: {
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
							return ud(e, t.payload);
						default:
							return e
					}
				},
				yd = r("./src/reddit/actions/post.ts");
			const md = {};
			var Ed = (e = md, t) => {
					switch (t.type) {
						case je.c:
						case Ce.f:
						case Le.c:
						case Q.PROFILE_POSTS_PENDING:
						case Y.SUBREDDIT_PENDING:
						case ke.f:
						case Q.PROFILE_POSTS_PENDING:
						case Zo.TOPIC_DATA_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: []
							}
						}
						case Ae.e:
						case rd.b:
						case Ce.e:
						case je.b:
						case Le.b:
						case Y.SUBREDDIT_LOADED:
						case sd.k:
						case Yo.b:
						case ke.e:
						case Q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Zo.TOPIC_DATA_LOADED:
						case Jo.c: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case sd.s: {
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
						case Zo.MORE_POSTS_LOADED:
						case Jo.d: {
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
						case yd.k: {
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
							return ud(e, t.payload);
						default:
							return e
					}
				},
				Od = r("./src/lib/makeListingKey/index.ts");
			const _d = {};
			var hd = (e = _d, t) => {
				switch (t.type) {
					case Y.SUBREDDIT_LOADED: {
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
			const Id = {};
			var gd = (e = Id, t) => {
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
					case Zo.TOPIC_DATA_LOADED:
					case Zo.MORE_POSTS_LOADED: {
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
						return ud(e, t.payload);
					default:
						return e
				}
			};
			const Sd = {};
			var Dd = (e = Sd, t) => {
					switch (t.type) {
						case Jo.c:
						case Jo.d: {
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
				Td = Object(c.c)({
					api: cd,
					endMarkers: pd,
					fetchedTokens: fd,
					ids: Ed,
					listingSort: hd,
					loadMore: gd,
					pageInfo: Dd
				}),
				vd = Object(c.c)({
					activeKey: Mo,
					listingOrder: zo,
					postOrder: Td
				});
			var wd = (e = null, t) => {
				switch (t.type) {
					case je.b: {
						const r = t.payload;
						return sn()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var Ad = (e = null, t) => {
				switch (t.type) {
					case je.b: {
						const r = t.payload;
						return sn()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var jd = (e = !1, t) => {
				switch (t.type) {
					case je.b:
						return !0;
					default:
						return e
				}
			};
			var Rd = (e = !1, t) => {
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Pd = Object(c.c)({
					announcements: wd,
					featured: Ad,
					isFrontpageLoaded: jd,
					shouldShowAnnouncements: Rd
				}),
				Cd = r("./src/reddit/actions/media.ts");
			const Ld = {};
			var Nd = (e = Ld, t) => {
				switch (t.type) {
					case Cd.b: {
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
			const kd = {};
			var Ud = (e = kd, t) => {
					switch (t.type) {
						case Cd.e: {
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
				xd = Object(c.c)({
					currentSlideIndex: Nd,
					isGalleryTileLayout: Ud
				});
			var Md = (e = !0, t) => {
				switch (t.type) {
					case Cd.c:
						return t.payload;
					default:
						return e
				}
			};
			var Gd = (e = .5, t) => {
					switch (t.type) {
						case Cd.d:
							return t.payload;
						default:
							return e
					}
				},
				Fd = Object(c.c)({
					isMuted: Md,
					volume: Gd
				}),
				Bd = r("./src/reddit/actions/meta.ts");
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
				protocol: "",
				region: "",
				sessionReferrerDomain: "",
				userAgent: "",
				pageloadServerTime: 0
			};
			var Hd = (e = qd, t) => {
					switch (t.type) {
						case Bd.b:
							return t.payload;
						case Bd.a:
							return {
								...e, ...t.payload
							};
						case Bd.c:
							return {
								...e, locale: t.payload
							};
						default:
							return e
					}
				},
				Vd = r("./src/reddit/actions/subredditModeration/constants.ts");
			const Kd = {};
			var Wd = (e = Kd, t) => {
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
					case Vd.Z: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Kt.a)(e, r)
					}
					case Vd.S: {
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
			var $d = (e = null, t) => {
				switch (t.type) {
					case yd.e:
						return t.payload;
					case yd.d:
						return null
				}
				return e
			};
			var Xd = (e = null, t) => {
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
			var Qd = (e = !1, t) => {
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
				zd = Object(c.c)({
					error: Xd,
					pending: Qd
				});
			const Jd = [];
			var Yd = (e = Jd, t) => {
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
				Zd = Object(c.c)({
					api: zd,
					names: Yd
				}),
				ei = Object(c.c)({
					filteredSubreddits: Zd
				}),
				ti = r("./src/reddit/actions/modMode.ts");
			var ri = (e = !0, t) => {
				switch (t.type) {
					case ti.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const si = {};
			var ai = (e = si, t) => {
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
			const ni = {};
			var ci = (e = ni, t) => {
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
				oi = Object(c.c)({
					error: ai,
					pending: ci
				}),
				di = r("./src/reddit/models/Comment/index.ts");
			const ii = {};
			var ui = (e = ii, t) => {
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
											prev: Object(di.g)(s),
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
				li = Object(c.c)({
					api: oi,
					models: ui
				});
			var pi = (e = null, t) => {
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
			var bi = (e = !1, t) => {
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
			var fi = (e = null, t) => {
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
				yi = Object(c.c)({
					error: pi,
					fetched: bi,
					pending: fi
				});
			var mi = (e = null, t) => {
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
			var Ei = (e = !1, t) => {
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
			var Oi = (e = !1, t) => {
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
				_i = Object(c.c)({
					error: mi,
					fetched: Ei,
					pending: Oi
				});
			var hi = (e = null, t) => {
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
			var Ii = (e = !1, t) => {
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
			var gi = (e = !1, t) => {
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
				Si = Object(c.c)({
					error: hi,
					fetched: Ii,
					pending: gi
				});
			var Di = (e = null, t) => {
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
			var Ti = (e = !1, t) => {
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
			var vi = (e = !1, t) => {
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
				wi = Object(c.c)({
					error: Di,
					fetched: Ti,
					pending: vi
				});
			var Ai = (e = null, t) => {
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
			var ji = (e = !1, t) => {
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
			var Ri = (e = !1, t) => {
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
				Pi = Object(c.c)({
					error: Ai,
					fetched: ji,
					pending: Ri
				});
			var Ci = (e = !1, t) => {
				switch (t.type) {
					case Pe.t:
						return !1;
					case Pe.u:
						return !0;
					default:
						return e
				}
			};
			var Li = (e = !1, t) => {
					switch (t.type) {
						case Pe.t:
							return !0;
						case Pe.u:
							return !1;
						default:
							return e
					}
				},
				Ni = Object(c.c)({
					fetched: Ci,
					pending: Li
				});
			var ki = (e = null, t) => {
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
			var Ui = (e = !1, t) => {
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
			var xi = (e = !0, t) => {
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
				Mi = Object(c.c)({
					error: ki,
					fetched: Ui,
					pending: xi
				});
			var Gi = (e = null, t) => {
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
			var Fi = (e = !1, t) => {
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
			var Bi = (e = null, t) => {
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
				qi = Object(c.c)({
					error: Gi,
					fetched: Fi,
					pending: Bi
				}),
				Hi = Object(c.c)({
					addSubreddit: yi,
					create: _i,
					deleteMulti: Si,
					duplicate: wi,
					edit: Pi,
					forUser: Ni,
					recommendations: Mi,
					removeSubreddit: qi
				}),
				Vi = r("./node_modules/lodash/isEqual.js"),
				Ki = r.n(Vi),
				Wi = r("./node_modules/lodash/union.js"),
				$i = r.n(Wi);

			function Xi(e, t, r) {
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
			var Qi = r("./src/reddit/actions/profile/constants.ts");
			const zi = {};
			var Ji = (e = zi, t) => {
					switch (t.type) {
						case Le.b:
						case Pe.r:
						case Pe.u:
						case Qi.h: {
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
								n[t] = $i()(a, r).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return Ki()(e, n) ? e : n
						}
						case Pe.g:
						case Pe.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, a = e[r] ? e[r].slice() : [], n = Xi(a, s.url, (e, t) => e > t ? 1 : -1);
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
				Yi = r("./src/reddit/actions/subscription/constants.ts"),
				Zi = r("./src/reddit/models/Multireddit/index.ts");
			const eu = {};
			var tu = (e = eu, t) => {
				switch (t.type) {
					case Le.b:
					case Pe.r:
					case Pe.u:
					case Qi.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const a = {
									...t.payload.multireddits[s]
								},
								n = e[s];
							n && !Object(Zi.g)(a) && (a.subredditIds = n.subredditIds, a.profileIds = n.profileIds), s in e && Ki()(e[a.url], a) || (r = {
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
					case Yi.d: {
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
					case Yi.e: {
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
			const ru = {};
			var su = (e = ru, t) => {
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
				au = Object(c.c)({
					api: Hi,
					byUserId: Ji,
					models: tu,
					recommendations: su
				}),
				nu = r("./src/reddit/actions/notificationBanner.ts");
			var cu = (e = null, t) => {
					switch (t.type) {
						case nu.b:
							return t.payload.notificationBannerId;
						case nu.a:
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
					case ou.d:
					case ou.b:
						return !1;
					default:
						return e
				}
			};
			var iu = (e = !1, t) => {
					switch (t.type) {
						case ou.d:
							return !0;
						case ou.a:
						case ou.b:
							return !1;
						default:
							return e
					}
				},
				uu = Object(c.c)({
					error: du,
					pending: iu
				});
			var lu = (e = null, t) => {
				switch (t.type) {
					case ou.f:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			const pu = [];
			var bu = (e = pu, t) => {
				switch (t.type) {
					case ou.b: {
						const r = t.payload && t.payload.nodes;
						return [...e, ...r]
					}
					case ou.e: {
						const r = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== r)
					}
					case ou.c: {
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
			var fu = (e = null, t) => {
					switch (t.type) {
						case ou.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				yu = Object(c.c)({
					api: uu,
					earlierDividerIndex: lu,
					notifications: bu,
					pageInfo: fu
				}),
				mu = r("./src/reddit/actions/nps.ts");
			const Eu = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Ou = (e = Eu, t) => {
				switch (t.type) {
					case mu.c:
						return {
							...Eu, pending: !0
						};
					case mu.a:
						return Eu;
					case mu.b: {
						const {
							dest: e
						} = t.payload;
						return {
							...Eu,
							success: !0,
							dest: e
						}
					}
					default:
						return e
				}
			};
			const _u = e => {
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
			const hu = e => {
					const t = {};
					for (const r of e) t[r.experimentName.toLowerCase()] = _u(r);
					return t
				},
				Iu = {};
			var gu = (e = Iu, t) => {
				switch (t.type) {
					case Hn.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return hu(r)
					}
					default:
						return e
				}
			};
			var Su = Object(c.c)({
					byName: gu,
					canonicalUrl: (e = null, t) => {
						switch (t.type) {
							case Hn.a: {
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
				Du = Object(c.c)({
					experiments: Su
				}),
				Tu = r("./node_modules/history/esm/history.js");
			const vu = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null,
				metas: {}
			};
			var wu = (e = vu, t) => {
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
						const o = Object(Tu.e)(n),
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
			const Au = {};
			var ju = (e = Au, t) => {
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
			const Ru = {};
			var Pu = (e = Ru, t) => {
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
				Cu = Object(c.c)({
					error: ju,
					pending: Pu
				}),
				Lu = Object(c.c)({
					voting: Cu
				}),
				Nu = r("./src/reddit/actions/economics/predictions/constants.ts");
			const ku = {};
			var Uu = (e = ku, t) => {
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
							s[e].pollData && (a[e] = (e => {
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
					case Nu.g:
					case Nu.f:
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
			const xu = {};
			var Mu = (e = xu, t) => {
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
							if (!s[t].pollData) return e;
							const r = (e => {
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
							return r ? (e[t] = r, e) : e
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
			const Gu = {};
			var Fu = (e = Gu, t) => {
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
				Bu = Object(c.c)({
					byVoters: Mu,
					byVotingPower: Fu
				});
			const qu = {};
			var Hu = (e = qu, t) => {
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
				Vu = Object(c.c)({
					api: Lu,
					models: Uu,
					results: Bu,
					rewards: Hu
				});
			const Ku = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Wu = (e = Ku, t) => {
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
			const $u = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var Xu = (e = $u, t) => {
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
				Qu = Object(c.c)({
					error: Wu,
					pending: Xu
				}),
				zu = r("./src/reddit/helpers/path/index.ts");
			const Ju = {},
				Yu = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(zu.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				};
			var Zu = (e = Ju, t) => {
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
					case yd.g:
					case Pe.r:
					case je.f:
					case Z.e:
					case "RECOMMENDED_POSTS_LOADED":
					case ee.i:
					case Ge.c:
					case Ue.b:
					case J.SEARCH_RESULTS_RECEIVED:
					case Br.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let a = r;
						if (s) {
							const e = Yu(s);
							a = Ut()(r, e)
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
							n = Yu(s)(r)
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
			const el = {};
			var tl = (e = el, t) => {
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
				rl = Object(c.c)({
					models: Zu,
					subredditToIds: tl,
					api: Qu
				}),
				sl = r("./src/reddit/actions/postFlair.ts"),
				al = r("./src/reddit/models/Flair/index.ts");
			const nl = {},
				cl = {
					displaySettings: {
						isEnabled: !1,
						position: al.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				ol = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					return 0 === r.length ? e : r.reduce((e, r) => (e[r] = {
						...cl,
						...e[r],
						...t[r]
					}, e), {
						...e
					})
				};
			var dl = (e = nl, t) => {
					switch (t.type) {
						case Ne.PAGE_LOADED:
						case je.f:
						case Ce.e:
						case Ce.h:
						case Pe.r:
						case Yo.b:
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
						case Ue.b:
						case Ue.b:
						case ke.b:
						case ke.e:
						case Q.MORE_POSTS_LOADED:
						case Q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Ge.c:
						case Ge.c:
						case ee.i:
							return ol(e, t.payload.postFlair);
						case sl.c: {
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
						case sl.a: {
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
						case sl.f: {
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
						case sl.b: {
							const {
								subredditId: r,
								templateId: s
							} = t.payload, a = e[r], {
								templates: n,
								templateIds: c
							} = a, o = Us()(n, s), d = c.filter(e => e !== s);
							return {
								...e,
								[r]: {
									...a,
									templates: o,
									templateIds: d
								}
							}
						}
						case sl.e:
						case sl.d: {
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
							return ol(e, r.postFlair)
						}
						default:
							return e
					}
				},
				il = r("./src/reddit/actions/inFeedChaining.ts");
			var ul = (e = !1, t) => {
				switch (t.type) {
					case il.a:
						return t.payload.isDismissed;
					default:
						return e
				}
			};
			const ll = {};
			var pl = (e = ll, t) => {
				switch (t.type) {
					case il.c: {
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
			const bl = {};
			var fl = (e = bl, t) => {
					switch (t.type) {
						case il.b:
							return {
								...e, [t.payload.postId]: t.payload.listingKey
							};
						default:
							return e
					}
				},
				yl = Object(c.c)({
					dismissed: ul,
					dismissedIdToListingKey: pl,
					idToListingKey: fl
				});
			var ml = (e = null, t) => {
					switch (t.type) {
						case yd.a:
							return t.payload;
						default:
							return e
					}
				},
				El = r("./src/reddit/actions/embedAndImage.ts");
			const Ol = {};
			var _l = (e = Ol, t) => {
					switch (t.type) {
						case El.b: {
							const {
								postId: r
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: !1
							} : e
						}
						case El.a: {
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
				hl = Object(c.c)({
					loadable: _l
				});
			const Il = {};
			var gl = (e = Il, t) => {
				switch (t.type) {
					case yd.b: {
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
			var Sl = (e = null, t) => {
				switch (t.type) {
					case yd.c: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Dl = {};
			var Tl = (e = Dl, t) => {
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
				vl = r("./src/reddit/actions/isTrackingCrossposts.ts");
			const wl = {};
			var Al = (e = wl, t) => {
				switch (t.type) {
					case vl.a: {
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
			const jl = {};
			var Rl = (e = jl, t) => {
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
							const a = Object.keys(s).reduce((e, t) => s[t].pollData ? (e[t] = t, e) : e, {});
							return {
								...e,
								...a
							}
						}
						default:
							return e
					}
				},
				Pl = r("./src/reddit/actions/bulkActions/constants.ts"),
				Cl = r("./src/reddit/actions/constants.ts"),
				Ll = r("./src/reddit/actions/flairManagement/constants.ts"),
				Nl = r("./src/reddit/actions/googleQASchema/constants.ts"),
				kl = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				Ul = r("./src/reddit/actions/subredditTopContent.ts"),
				xl = r("./src/reddit/helpers/isPost.ts"),
				Ml = r("./node_modules/lodash/pickBy.js"),
				Gl = r.n(Ml);

			function Fl(e, t) {
				const r = Gl()(t, (t, r = "") => !e[r] || !Ki()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var Bl = r("./src/reddit/models/Gold/Gild/index.tsx"),
				ql = r("./src/reddit/models/Media/index.ts"),
				Hl = r("./src/reddit/models/ModQueue/index.ts"),
				Vl = r("./src/reddit/models/Post/index.ts"),
				Kl = r("./src/reddit/models/Vote/index.ts"),
				Wl = r("./src/reddit/actions/subredditDuplicates.ts");
			const $l = {},
				Xl = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(zu.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				},
				Ql = e => t => {
					const r = e[t.id];
					return r && r.events && (t.events = r.events, t.source = r.source), t
				},
				zl = e => t => {
					const r = e[t.id];
					return r && r.isSponsored && (t.isSponsored = r.isSponsored), t
				},
				Jl = e => e.media && Object(ql.E)(e.media) ? {
					...Object(F.unsetIn)(e, ["source"])
				} : e,
				Yl = e => t => {
					const r = e[t.id];
					return t && t.media && r && r.media && Object(ql.H)(t.media) && t.media.isRichtextPreview && Object(ql.H)(r.media) && !r.media.isRichtextPreview && (t.media.richtextContent = r.media.richtextContent, t.media.isRichtextPreview = !1), t
				},
				Zl = e => t => {
					const r = e[t.id];
					return r && r.numDuplicates && (t.numDuplicates = r.numDuplicates), t
				},
				ep = e => {
					let t = e.source;
					return t && t.outboundUrlCreated && (t = {
						...t,
						outboundUrlReceived: Date.now()
					}, e.source = t), e
				},
				tp = e => {
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
				rp = e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				},
				sp = (e, t) => ({
					...e,
					events: t.events,
					source: t.source
				});
			var ap = (e = $l, t) => {
				switch (t.type) {
					case O.a:
						if (Fs(t) === (Me.Db.COMMENTS || Me.Db.DUPLICATES)) {
							const r = Bs(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									a = Object(Vl.r)(s.partialPostId);
								if (e[a] && e[t]) return {
									...e,
									[a]: sp(e[a], e[t])
								}
							}
						}
						return e;
					case $.b:
					case $.f: {
						const r = Xl(t.payload.meta);
						return {
							...e,
							...Ut()(t.payload.posts, rp([r, ep, tp, Jl, Ql(e), zl(e), Zl(e)]))
						}
					}
					case yd.g:
						return Fl(e, t.payload);
					case Wl.a:
						return Fl(e, t.payload.posts);
					case Ne.PAGE_LOADED:
					case rd.b:
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
					case Yo.b:
					case Pe.r:
					case je.f:
					case Z.e:
					case "RECOMMENDED_POSTS_LOADED":
					case sd.k:
					case ee.i:
					case Ue.b:
					case Zo.TOPIC_DATA_LOADED:
					case Zo.MORE_POSTS_LOADED:
					case Jo.c:
					case Jo.d: {
						const r = Xl(t.payload.meta);
						return {
							...e,
							...Ut()(t.payload.posts, rp([r, ep, tp, Jl, Yl(e), Zl(e)]))
						}
					}
					case sd.s: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								a = Xl(t.meta);
							Object.assign(r, Ut()(t.posts, rp([a, ep, tp, Jl, Yl(e), Zl(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case Yo.b: {
						const r = Xl(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...Ut()(t.payload.posts, rp([r, ep, tp, Jl, Yl(e), Zl(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ae.e:
					case Ge.c:
					case J.SEARCH_RESULTS_RECEIVED: {
						const r = Xl(t.payload.meta),
							s = Ut()(t.payload.posts, rp([r, tp, ep, Jl]));
						return q()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case yd.h: {
						const r = t.payload;
						return q()({
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
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: Object(Kl.c)(a, s)
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
							...r.reduce((e, t) => (e[t.post.id] = rp([tp])(Object(zs.e)(t.post)), e), {})
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
								...Object(Bl.a)(c, s, a),
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
							[s]: Object(Bl.b)(a, r)
						} : e
					}
					case Vd.n: {
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
							...Ut()(s, rp([tp, Jl]))
						}
					}
					case Pl.b:
					case W.s: {
						const {
							operation: r,
							ids: s,
							username: a,
							options: n
						} = t.payload, c = s.filter(e => Object(xl.a)(e)), o = Object(Hl.d)(e, r, c, a, n);
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
					case Jo.f: {
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
					case Jo.a: {
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
					case Rc.g: {
						const r = t.payload.subredditTopContent;
						return r && r.posts && Object.keys(r.posts) ? {
							...Ut()(r.posts, rp([tp, Jl])),
							...e
						} : e
					}
					case z.c:
					case z.i:
					case z.e:
					case z.g:
					case Ul.b:
						return {
							...Ut()(t.payload.posts, rp([tp, Jl])), ...e
						};
					case yd.j: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, a = e[r];
						return a && a.media && Object(ql.H)(a.media) ? {
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
					case Ll.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Ll.b: {
						const r = t.payload;
						return Object(Kt.a)(e, r)
					}
					case Cd.a: {
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
					case kl.b: {
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
					case kl.a:
						return {
							...e
						};
					case Nl.b: {
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
					case Nl.a:
						return {
							...e
						};
					default:
						return e
				}
			};
			var np = (e = null, t) => {
					switch (t.type) {
						case yd.f:
							return t.payload;
						default:
							return e
					}
				},
				cp = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const op = {};
			var dp = (e = op, t) => {
				switch (t.type) {
					case cp.a: {
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
			const ip = [];
			var up = (e = ip, t) => {
					switch (t.type) {
						case yd.i: {
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
				lp = r("./node_modules/uuid/v4.js"),
				pp = r.n(lp);
			const bp = pp()();
			var fp = (e = bp, t) => {
				switch (t.type) {
					case Ne.PAGE_LOADED:
					case Is.h:
					case Is.a:
					case Is.m:
					case Is.f:
						return pp()();
					default:
						return e
				}
			};
			var yp = (e = null, t) => {
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
			var mp = (e = !0, t) => {
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
			var Ep = (e = !1, t) => {
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
				Op = Object(c.c)({
					creationToken: fp,
					error: yp,
					pending: mp,
					pendingUpdate: Ep
				});
			const _p = {};
			var hp = (e = _p, t) => {
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
			const Ip = {
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

			function gp(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case Ip[e].POSTS_LOADED:
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
						case Ip[e].MUTATION_SUCCEEDED: {
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
			const Sp = {};

			function Dp(e) {
				return (t = Sp, r) => {
					switch (r.type) {
						case Ip[e].POSTS_LOADED:
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
			var Tp = r("./node_modules/lodash/uniq.js"),
				vp = r.n(Tp);
			const wp = {};

			function Ap(e) {
				return (t = wp, r) => {
					switch (r.type) {
						case Ip[e].POSTS_LOADED:
						case Is.f: {
							const {
								subredditInfoById: s
							} = r.payload, a = s.id, n = s.scheduledPosts[Ip[e].postIdsKey];
							return {
								...t,
								[a]: vp()([...t[a] || [], ...n])
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
			var jp = Object(c.c)({
					models: gp("recurringPosts"),
					pageInfo: Dp("recurringPosts"),
					postOrder: Ap("recurringPosts"),
					editModal: hp
				}),
				Rp = Object(c.c)({
					models: gp("standalonePosts"),
					pageInfo: Dp("standalonePosts"),
					postOrder: Ap("standalonePosts")
				}),
				Pp = Object(c.c)({
					api: Op,
					standalonePosts: Rp,
					recurringPosts: jp
				});
			var Cp = (e = null, t) => {
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
			var Lp = (e = !1, t) => {
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
				Np = Object(c.c)({
					error: Cp,
					pending: Lp
				});
			const kp = [];
			var Up = (e = kp, t) => {
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
							return kp;
						default:
							return e
					}
				},
				xp = Object(c.c)({
					api: Np,
					list: Up
				}),
				Mp = r("./src/reddit/actions/video.ts");
			const Gp = {};
			var Fp = (e = Gp, t) => {
				switch (t.type) {
					case Mp.e: {
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
			const Bp = {};
			var qp = (e = Bp, t) => {
				switch (t.type) {
					case Mp.a: {
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
			const Hp = {};
			var Vp = (e = Hp, t) => {
				switch (t.type) {
					case Mp.b: {
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
			const Kp = {};
			var Wp = (e = Kp, t) => {
				switch (t.type) {
					case Mp.c: {
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
			const $p = {
				mutedInFeed: !0
			};
			var Xp = (e = $p, t) => {
				switch (t.type) {
					case Mp.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var Qp = (e = null, t) => {
				switch (t.type) {
					case Mp.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Mp.d:
						return null;
					default:
						return e
				}
			};
			const zp = {};
			var Jp = (e = zp, t) => {
				switch (t.type) {
					case Mp.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Mp.e: {
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
			const Yp = {};
			var Zp = (e = Yp, t) => {
				switch (t.type) {
					case Mp.h: {
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
					case Mp.f: {
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
			const eb = {};
			var tb = (e = eb, t) => {
				switch (t.type) {
					case Mp.j: {
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
			const rb = {};
			var sb = (e = rb, t) => {
				switch (t.type) {
					case Mp.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Mp.g: {
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
			const ab = {};
			var nb = (e = ab, t) => {
				switch (t.type) {
					case Mp.i: {
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
			const cb = {};
			var ob = (e = cb, t) => {
					switch (t.type) {
						case Mp.m: {
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
				db = r("./src/reddit/constants/video.ts");
			const ib = {};
			var ub = (e = ib, t) => {
					switch (t.type) {
						case Mp.n: {
							const {
								postId: r,
								time: s
							} = t.payload;
							return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < db.k ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				lb = Object(c.c)({
					autoPlayed: Fp,
					buffering: qp,
					consumed: Vp,
					continuousViewStartedAt: Wp,
					feed: Xp,
					fullscreen: Qp,
					loadable: Jp,
					loadTimes: Zp,
					metadata: tb,
					paused: sb,
					playing: nb,
					started: ob,
					time: ub
				}),
				pb = Object(c.c)({
					chained: yl,
					embedAndImage: hl,
					expanded: gl,
					focus: Sl,
					instances: Tl,
					isTrackingCrossposts: Al,
					metaMap: Rl,
					models: ap,
					modToMemberShare: np,
					crowdControl: ml,
					postLevelCrowdControl: dp,
					recent: up,
					scheduledPosts: Pp,
					topAwarded: xp,
					video: lb
				}),
				bb = r("./src/lib/reducers/addAuthentication/index.ts");
			const fb = {};
			var yb = Object(bb.a)((e = fb, t) => {
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
				}, fb),
				mb = Object(c.c)({
					data: yb
				});
			const Eb = {};
			var Ob = (e = Eb, t) => {
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
			const _b = {};
			var hb = (e = _b, t) => {
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
				Ib = Object(c.c)({
					error: Ob,
					pending: hb
				});
			const gb = {};
			var Sb = (e = gb, t) => {
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
			const Db = {};
			var Tb = (e = Db, t) => {
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
				vb = Object(c.c)({
					error: Sb,
					pending: Tb
				}),
				wb = Object(c.c)({
					fetch: Ib,
					purchase: vb
				});
			var Ab = (e = null, t) => {
				switch (t.type) {
					case _.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const jb = {};
			var Rb = (e = jb, t) => {
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
				Pb = Object(c.c)({
					api: wb,
					currentlyPurchasing: Ab,
					models: Rb
				});
			const Cb = {};
			var Lb = (e = Cb, t) => {
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
			const Nb = {};
			var kb = (e = Nb, t) => {
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
				Ub = Object(c.c)({
					error: Lb,
					pending: kb
				});
			const xb = {};
			var Mb = (e = xb, t) => {
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
				Gb = r("./src/reddit/actions/comment/list.ts");
			const Fb = {};
			var Bb = (e = Fb, t) => {
				switch (t.type) {
					case Gb.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Gb.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Us()(e, r) : e
					}
					default:
						return e
				}
			};
			const qb = {};
			var Hb = (e = qb, t) => {
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
			const Vb = {};
			var Kb = (e = Vb, t) => {
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
				Wb = Object(c.c)({
					api: Ub,
					endMarkers: Bb,
					fetchedTokens: Hb,
					commentIds: Mb,
					loadMore: Kb
				}),
				$b = r("./src/reddit/actions/pages/profileModSettings.ts");
			var Xb = (e = !0, t) => {
					switch (t.type) {
						case $b.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				Qb = Object(c.c)({
					pending: Xb
				}),
				zb = Object(c.c)({
					api: Qb
				});
			const Jb = {};
			var Yb = (e = Jb, t) => (t.type, e);
			const Zb = {};
			var ef = (e = Zb, t) => {
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
			const tf = {};
			var rf = (e = tf, t) => {
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
				sf = Object(c.c)({
					error: ef,
					pending: rf
				});
			const af = {};
			var nf = (e = af, t) => {
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
			const cf = {};
			var of = (e = cf, t) => {
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
						} : cf
					}
					default:
						return e
				}
			}, df = Object(c.c)({
				api: sf,
				ids: nf,
				pageInfo: of
			}), uf = r("./src/reddit/constants/posts.ts");
			const lf = {};
			var pf = (e = lf, t) => {
				switch (t.type) {
					case J.SEARCH_RESULTS_RECEIVED:
					case Ge.c:
						return {
							...e, ...t.payload.profileAboutInfo
						};
					case Qi.k: {
						const r = t.payload;
						return r.profile ? {
							...e,
							[r.profile.id]: r.about
						} : e
					}
					case Yi.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(e => e.type === uf.a.PROFILE);
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
			const bf = {};
			var ff = (e = bf, t) => {
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
					case Ue.b:
					case je.f:
					case Ce.e:
					case Ce.h:
					case Pe.u:
					case Qi.h:
					case Yo.b:
					case Ge.c:
					case ee.i:
					case Qi.m:
					case Z.b:
					case Z.e:
					case J.SEARCH_RESULTS_RECEIVED:
					case Ne.PAGE_LOADED:
					case Wr.e:
					case xs.PAGE_LOADED:
					case Y.SUBREDDIT_LOADED:
					case Le.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Yi.c:
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
					case Qi.l:
					case Qi.k: {
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
			const yf = {};
			var mf = (e = yf, t) => {
					switch (t.type) {
						case Qi.c:
						case Qi.f: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !0
							}
						}
						case Qi.a:
						case Qi.b:
						case Qi.d:
						case Qi.e: {
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
				Ef = Object(c.c)({
					pending: mf
				});
			const Of = {};
			var _f = (e = Of, t) => {
				switch (t.type) {
					case Qi.b: {
						const {
							profileName: r,
							data: s
						} = t.payload, a = s.map(e => e.id);
						return {
							...e,
							[(r || "").toLowerCase()]: a
						}
					}
					case Qi.e:
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
			const hf = {};
			var If = (e = hf, t) => {
					switch (t.type) {
						case Qi.e: {
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
				gf = Object(c.c)({
					api: Ef,
					models: _f,
					pageInfo: If
				});
			const Sf = {};
			var Df = (e = Sf, t) => {
					switch (t.type) {
						case Qi.i: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Qi.g:
						case Qi.h: {
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
				Tf = Object(c.c)({
					pending: Df
				});
			const vf = {};
			var wf = (e = vf, t) => {
					switch (t.type) {
						case Qi.h: {
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
				Af = Object(c.c)({
					api: Tf,
					pageInfo: wf
				}),
				jf = r("./src/reddit/actions/pinnedPost.ts");
			const Rf = {};
			var Pf = Object(bb.a)((e = Rf, t) => {
				switch (t.type) {
					case jf.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case jf.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, a = e[s] || [];
						return {
							...e,
							[s]: [...a, r].slice(-Me.V)
						}
					}
					case jf.g: {
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
			}, Rf);
			const Cf = {};
			var Lf = Object(bb.a)((e = Cf, t) => {
				switch (t.type) {
					case jf.a: {
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
			}, Cf);
			const Nf = {};
			var kf = Object(bb.a)((e = Nf, t) => {
					switch (t.type) {
						case jf.c:
						case jf.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, a = e[s] || [];
							return {
								...e,
								[s]: [...a, r]
							}
						}
						case jf.b:
						case jf.e:
						case jf.d:
						case jf.g: {
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
				}, Nf),
				Uf = Object(c.c)({
					data: Pf,
					initialData: Lf,
					pending: kf
				}),
				xf = r("./src/reddit/actions/trophyCase.ts");
			const Mf = {};
			var Gf, Ff, Bf = (e = Mf, t) => {
					switch (t.type) {
						case xf.a: {
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
				qf = Object(c.c)({
					about: pf,
					models: ff,
					moderated: gf,
					multireddits: Af,
					pinnedPosts: Uf,
					trophyCases: Bf
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Gf || (Gf = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Ff || (Ff = {}));
			var Hf, Vf, Kf;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Hf || (Hf = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Vf || (Vf = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Kf || (Kf = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Hf || (Hf = {}));
			Object(xe.a)("PROMO__SHOW_PROMO"), Object(xe.a)("PROMO__HIDE_PROMO");
			const Wf = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var $f = (e = Wf, t) => {
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
				Xf = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const Qf = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: Xf.d,
					viewer_streams_refresh: Xf.c,
					viewer_streams_refresh_slop: Xf.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var zf = (e = Qf, t) => {
				switch (t.type) {
					case Xf.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case Xf.x: {
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
					case Xf.G:
						return {
							...e, isPending: !0
						};
					case Xf.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case Xf.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var Jf = (e = {}, t) => {
				switch (t.type) {
					case Xf.L:
						return {
							...e, [Xf.b]: t.payload.error
						};
					case Xf.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case Xf.z: {
						const {
							[Xf.b]: t, ...r
						} = e;
						return r
					}
					case Xf.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const Yf = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var Zf = (e = {}, t) => {
				switch (t.type) {
					case Xf.N:
						return Yf(e, t.payload, !0);
					case Xf.O:
						return Yf(e, Xf.b, !0);
					case Xf.y:
						return Yf(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case Xf.z:
						return Yf(e, Xf.b, !1, t.payload.utcTimeStamp);
					case Xf.M:
						return Yf(e, t.payload.streamId, !1);
					case Xf.L:
						return Yf(e, Xf.b, !1);
					default:
						return e
				}
			};
			const ey = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var ty = (e = ey, t) => {
					switch (t.type) {
						case Xf.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case Xf.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case Xf.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				ry = Object(c.c)({
					config: zf,
					error: Jf,
					pending: Zf,
					recommendedViewerSubreddits: ty
				});
			const sy = {};
			var ay = (e = sy, t) => {
				switch (t.type) {
					case Xf.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case Xf.F:
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
			const ny = {
				cursor: Xf.W,
				timestamps: {},
				visitOrder: []
			};
			var cy = (e = ny, t) => {
				switch (t.type) {
					case Xf.P:
						return ny;
					case Xf.X: {
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
						return oy(e, t.payload.id);
					case Xf.E:
						return oy(e, t.payload);
					case yd.h: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return dy(e, r)
					}
					case Xf.V: {
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
			const oy = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				dy = (e, t) => {
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
				iy = {
					ended: [],
					removed: []
				};

			function uy(e) {
				return [...new Set(e)]
			}
			var ly = (e = iy, t) => {
				switch (t.type) {
					case Xf.t:
						return {
							...e, ended: uy(e.ended.concat(t.payload))
						};
					case Xf.u:
						return {
							...e, removed: uy(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const py = {};
			var by = (e = py, t) => {
				switch (t.type) {
					case Xf.z:
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
			const fy = {},
				yy = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: Xf.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: Xf.l - r
						}
					}), r)
				},
				my = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : Xf.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var Ey = (e = fy, t) => {
				switch (t.type) {
					case Xf.y:
						return my(e, t.payload.model);
					case Xf.z:
						return yy(e, t.payload.models);
					case Xf.D: {
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
			const Oy = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var _y = (e = Oy, t) => {
				switch (t.type) {
					case Xf.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case Xf.A:
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
			const hy = {
				reported: []
			};
			var Iy = (e = hy, t) => {
				switch (t.type) {
					case h.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const gy = {
				isIntroFinished: !1
			};
			var Sy = (e = gy, t) => {
				switch (t.type) {
					case Xf.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Dy = {
				reportedStreams: []
			};
			var Ty = (e = Dy, t) => {
					switch (t.type) {
						case Xf.C:
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
				vy = Object(c.c)({
					api: ry,
					history: cy,
					hlsStreams: ly,
					listings: by,
					models: Ey,
					preloads: _y,
					reports: Iy,
					theaterSettings: Sy,
					userSettings: Ty,
					automuteLevels: ay
				});
			const wy = {};
			var Ay = (e = wy, t) => {
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
				jy = r("./src/reddit/actions/pages/report/constants.ts");
			var Ry = (e = null, t) => {
				switch (t.type) {
					case jy.a:
						return t.payload;
					default:
						return e
				}
			};
			var Py = (e = null, t) => {
				switch (t.type) {
					case jy.b:
						return t.payload;
					case jy.c:
					case jy.d:
						return !1;
					default:
						return e
				}
			};
			var Cy = (e = !1, t) => {
				switch (t.type) {
					case jy.d:
						return !0;
					case jy.c:
					case jy.b:
						return !1;
					default:
						return e
				}
			};
			var Ly = (e = !1, t) => {
					switch (t.type) {
						case jy.c:
							return !0;
						case jy.b:
						case jy.d:
							return !1;
						default:
							return e
					}
				},
				Ny = Object(c.c)({
					error: Py,
					pending: Cy,
					success: Ly
				}),
				ky = r("./src/reddit/actions/reportPageRules/constants.ts");
			const Uy = [];
			var xy = (e = Uy, t) => {
					switch (t.type) {
						case ky.a:
							return t.payload;
						default:
							return e
					}
				},
				My = Object(c.c)({
					reportPageApi: Ny,
					reportPageRules: xy,
					initialReason: Ry
				}),
				Gy = r("./src/reddit/actions/reportRules.ts");
			const Fy = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var By = (e = Fy, t) => {
				switch (t.type) {
					case Gy.b:
						return {
							...e, sitewideRules: t.payload
						};
					case Gy.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(xe.a)("REQUEST_HOST_SET");
			var qy = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(xe.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const Hy = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var Vy = (e = Hy, t) => {
				switch (t.type) {
					case "RUN_TIME_ENV_VARS__IS_STAGING":
						return {
							...e, staging: !0
						};
					default:
						return e
				}
			};
			const Ky = Object.create(null);
			var Wy = (e = Ky, t) => {
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
			var $y = (e = null, t) => {
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
			const Xy = Object.create(null);
			var Qy = (e = Xy, t) => {
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
				zy = r("./src/reddit/models/Search/index.ts");
			const Jy = {};
			var Yy = (e = Jy, t) => {
					switch (t.type) {
						case Ge.e: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(zy.d)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				Zy = Object(c.c)({
					idsByQuery: Qy,
					models: Yy
				});
			const em = {};
			var tm = (e = em, t) => {
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
				rm = Object(c.c)({
					relatedQueries: Wy,
					searchQuery: $y,
					typeahead: Zy,
					viewTreatment: tm
				}),
				sm = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const am = {};
			var nm = (e = am, t) => {
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
						if (i === sm.c.Trending || r) {
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
			const cm = {};
			var om = (e = cm, t) => {
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
			const dm = {};
			var im = (e = dm, t) => {
					switch (t.type) {
						case J.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : dm
						}
						default:
							return e
					}
				},
				um = Object(c.c)({
					headerContent: nm,
					models: om,
					order: im
				});
			Object(xe.a)("SEO__CRAWLER_RECEIVED");
			var lm = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				pm = r("./src/reddit/actions/seo/linksModule.ts");
			const bm = {};
			var fm = (e = bm, t) => {
					switch (t.type) {
						case pm.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case pm.c:
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
				ym = r("./src/reddit/actions/seo/topicLinks.ts");
			const mm = {};
			var Em = (e = mm, t) => {
					switch (t.type) {
						case ym.a:
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
				Om = Object(c.c)({
					crawler: lm,
					linksModule: fm,
					topicLinks: Em
				}),
				_m = r("./src/reddit/actions/shortcuts/constants.ts");
			var hm = (e = null, t) => {
				switch (t.type) {
					case _m.a:
						return t.payload;
					case O.a:
						return null;
					default:
						return e
				}
			};
			var Im = (e = null, t) => {
					switch (t.type) {
						case _m.b:
							return t.payload || null;
						default:
							return e
					}
				},
				gm = r("./src/reddit/constants/history.ts"),
				Sm = r("./src/reddit/constants/shortcuts.ts"),
				Dm = r("./src/reddit/helpers/history/index.ts");
			const Tm = Sm.d.Global,
				vm = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(Dm.b)(gm.a.IsOverlay) ? Sm.d.Lightbox : Sm.d.CommentPage;
						case "rpan":
						case "subredditCreation":
							return Object(Dm.b)(gm.a.IsOverlay) ? Sm.d.Lightbox : Tm;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return Sm.d.Listing;
						case "modQueuePages":
							return Sm.d.Modqueue;
						default:
							return Tm
					}
				};
			var wm = (e = Tm, t) => {
					switch (t.type) {
						case O.a:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return vm(e)
							}
							return Tm;
						default:
							return e
					}
				},
				Am = Object(c.c)({
					activeCommentId: hm,
					activePostId: Im,
					namespace: wm
				});
			var jm = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case D.q:
						case D.r:
							return !0;
						default:
							return e
					}
				},
				Rm = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Pm = Object(c.c)({
					firstFetch: jm,
					models: Rm.b
				}),
				Cm = r("./src/reddit/actions/streaming/modSettings.ts");
			var Lm = (e = null, t) => {
				switch (t.type) {
					case Cm.b:
					case Cm.c:
						return null;
					case Cm.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Nm = (e = !1, t) => {
					switch (t.type) {
						case Cm.b:
							return !0;
						case Cm.c:
						case Cm.a:
							return !1;
						default:
							return e
					}
				},
				km = Object(c.c)({
					error: Lm,
					pending: Nm
				}),
				Um = r("./src/reddit/actions/streaming/constants.ts");
			const xm = {};
			var Mm = (e = xm, t) => {
					switch (t.type) {
						case Um.a: {
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
				Gm = Object(c.c)({
					api: km,
					modSettings: Mm
				}),
				Fm = r("./src/reddit/models/StructuredStyles/index.ts");
			const Bm = {};
			var qm = (e = Bm, t) => {
					switch (t.type) {
						case I.h:
						case I.b:
						case I.d:
							return t.payload.styles;
						case I.e:
							return Bm;
						case I.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case I.k: {
							const e = t.payload;
							return Object(Fm.h)(e.styles)
						}
						default:
							return e
					}
				},
				Hm = r("./src/reddit/actions/exportImportStyles.ts");
			var Vm = (e = null, t) => {
				switch (t.type) {
					case Hm.c:
					case Hm.b:
						return null;
					case Hm.a:
						return t.payload;
					default:
						return e
				}
			};
			var Km = (e = !1, t) => {
					switch (t.type) {
						case Hm.c:
							return !0;
						case Hm.b:
						case Hm.a:
							return !1;
						default:
							return e
					}
				},
				Wm = Object(c.c)({
					error: Vm,
					pending: Km
				}),
				$m = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				Xm = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const Qm = {};
			var zm = (e = Qm, t) => {
					switch (t.type) {
						case Y.SUBREDDIT_LOADED:
						case $.b:
						case $.f:
						case J.SEARCH_RESULTS_RECEIVED:
						case Ge.c:
						case Ne.PAGE_LOADED:
						case xs.PAGE_LOADED: {
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
						case $m.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case $m.a: {
							const {
								flairId: r
							} = t.payload;
							return Object(Kt.a)(e, r)
						}
						case sl.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(Kt.a)(e, r)
						}
						case I.k:
							return Qm;
						case Xm.b: {
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
				Jm = Object(c.c)({
					models: zm
				});
			const Ym = {};
			var Zm = (e = Ym, t) => {
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
						return Ym;
					default:
						return e
				}
			};
			var eE = (e = !1, t) => {
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
			var tE = (e = null, t) => {
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
			const rE = {};
			var sE = (e = rE, t) => {
					switch (t.type) {
						case Y.SUBREDDIT_LOADED:
						case $.b:
						case $.f:
						case Ne.PAGE_LOADED:
						case xs.PAGE_LOADED: {
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
								s = Object(Fm.h)(r.styles);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case Qi.k: {
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
								return Fl(e, {
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
				aE = Object(c.c)({
					draft: qm,
					exportStyles: Wm,
					flairTemplate: Jm,
					imagePreviews: Zm,
					isBladeEditorDirty: eE,
					isEditing: tE,
					models: sE
				});
			Object(xe.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var nE = (e = "", t) => {
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				cE = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const oE = {};
			var dE = (e = oE, t) => {
				switch (t.type) {
					case cE.c:
					case cE.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case cE.a: {
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
			const iE = {};
			var uE = (e = iE, t) => {
					switch (t.type) {
						case cE.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case cE.b:
						case cE.a: {
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
				lE = Object(c.c)({
					error: dE,
					pending: uE
				});
			const pE = {};
			var bE = (e = pE, t) => {
					switch (t.type) {
						case cE.b: {
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
				fE = Object(c.c)({
					api: lE,
					models: bE
				}),
				yE = r("./src/reddit/actions/category/constants.ts"),
				mE = r("./src/reddit/actions/subredditMention/constants.ts");
			const EE = {};
			var OE = (e = EE, t) => {
				switch (t.type) {
					case mE.d:
					case $.b:
					case $.f:
					case J.SEARCH_RESULTS_RECEIVED:
					case Y.SUBREDDIT_FAILED:
					case Y.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case xs.PAGE_LOADED:
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
					case Zo.TOPIC_DATA_LOADED: {
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
					case kn.a: {
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
					case Yi.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(e => e.type === uf.a.SUBREDDIT);
						return a.length ? a.reduce((e, t) => Object(F.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case Rc.g:
					case yE.f:
					case sd.h:
					case sd.p: {
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
					case kn.b: {
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
			const _E = {};
			var hE = (e = _E, t) => {
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
			var IE = (e = !1, t) => {
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
				gE = Object(c.c)({
					error: hE,
					pending: IE
				}),
				SE = r("./src/reddit/actions/subredditCreation.ts");
			const DE = {
				apiError: null
			};
			var TE = (e = DE, t) => {
				switch (t.type) {
					case SE.b: {
						const {
							error: r
						} = t.payload;
						return {
							...e,
							apiError: r
						}
					}
					case SE.a:
					case SE.c:
					case SE.d:
						return DE;
					default:
						return e
				}
			};
			var vE = (e = null, t) => {
				switch (t.type) {
					case SE.d: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case SE.c:
					case SE.b:
						return null;
					default:
						return e
				}
			};
			var wE = (e = !1, t) => {
					switch (t.type) {
						case SE.c:
							return !0;
						case SE.d:
						case SE.b:
							return !1;
						default:
							return e
					}
				},
				AE = Object(c.c)({
					error: TE,
					lastCreatedSubredditId: vE,
					pending: wE
				});
			var jE = (e = !1, t) => {
					switch (t.type) {
						case sd.u:
							return !0;
						case sd.v:
						case sd.t:
							return !1;
						default:
							return e
					}
				},
				RE = Object(c.c)({
					pending: jE
				});
			const PE = {};
			var CE = (e = PE, t) => {
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
			const LE = {};
			var NE = (e = LE, t) => {
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
				kE = Object(c.c)({
					error: CE,
					pending: NE
				});
			const UE = {};
			var xE = (e = UE, t) => {
					switch (t.type) {
						case sd.g:
						case sd.h:
							return {
								...e, [t.payload.key]: !1
							};
						case sd.i:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				ME = Object(c.c)({
					pending: xE
				});
			var GE = (e = null, t) => {
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
			var FE = (e = !1, t) => {
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
				BE = Object(c.c)({
					error: GE,
					pending: FE
				});
			var qE = (e = null, t) => {
				switch (t.type) {
					case sd.l: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case sd.n:
					case sd.m:
						return null;
					default:
						return e
				}
			};
			var HE = (e = !1, t) => {
					switch (t.type) {
						case sd.n:
							return !0;
						case sd.m:
						case sd.l:
							return !1;
						default:
							return e
					}
				},
				VE = Object(c.c)({
					error: qE,
					pending: HE
				}),
				KE = r("./src/reddit/actions/subredditRules/constants.ts");
			var WE = (e = !1, t) => {
					switch (t.type) {
						case KE.c:
							return !0;
						case KE.a:
						case KE.b:
							return !1;
						default:
							return e
					}
				},
				$E = r("./src/reddit/actions/subredditSettings.ts");
			var XE = (e = !1, t) => {
					switch (t.type) {
						case $E.e:
							return !0;
						case $E.f:
						case $E.d:
							return !1;
						default:
							return e
					}
				},
				QE = Object(c.c)({
					pending: XE
				});
			const zE = {};
			var JE = (e = zE, t) => {
					switch (t.type) {
						case sd.o:
						case sd.p:
							return {
								...e, [t.payload.key]: !1
							};
						case sd.q:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				YE = Object(c.c)({
					pending: JE
				}),
				ZE = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const eO = {};
			var tO = (e = eO, t) => {
				switch (t.type) {
					case ZE.c:
					case ZE.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case ZE.a: {
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
			const rO = {};
			var sO = (e = rO, t) => {
					switch (t.type) {
						case ZE.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case ZE.b:
						case ZE.a: {
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
				aO = Object(c.c)({
					error: tO,
					pending: sO
				});
			const nO = {};
			var cO = (e = nO, t) => {
				switch (t.type) {
					case Ul.c:
					case Ul.b: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Ul.a: {
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
			const oO = {};
			var dO = (e = oO, t) => {
					switch (t.type) {
						case Ul.c: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Ul.b:
						case Ul.a: {
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
				iO = Object(c.c)({
					error: cO,
					pending: dO
				}),
				uO = Object(c.c)({
					about: gE,
					create: AE,
					inlineEditing: RE,
					models: kE,
					onboarding: ME,
					productOffers: BE,
					rankings: VE,
					rules: WE,
					settings: QE,
					similar: YE,
					topContent: iO,
					wiki: aO
				}),
				lO = r("./node_modules/lodash/isNil.js"),
				pO = r.n(lO);
			const bO = {};
			var fO = (e = bO, t) => {
					switch (t.type) {
						case ee.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: pO()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				yO = Object(c.c)({
					meta: fO
				});
			const mO = {};
			var EO = (e = mO, t) => {
				switch (t.type) {
					case yE.f: {
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
			const OO = {};
			var _O = (e = OO, t) => {
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
				hO = r("./src/reddit/actions/subredditCrosspostable.ts");
			var IO = (e = null, t) => {
				switch (t.type) {
					case hO.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case hO.c:
					case hO.b:
						return null;
					default:
						return e
				}
			};
			var gO = (e = !1, t) => {
					switch (t.type) {
						case hO.c:
							return !0;
						case hO.b:
						case hO.a:
							return !1;
						default:
							return e
					}
				},
				SO = Object(c.c)({
					errors: IO,
					pending: gO
				});
			const DO = {};
			var TO = (e = DO, t) => {
					switch (t.type) {
						case hO.b: {
							const {
								subredditIds: r
							} = t.payload;
							return Ki()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				vO = Object(c.c)({
					api: SO,
					ids: TO
				});
			const wO = {};
			var AO = (e = wO, t) => {
					switch (t.type) {
						case Wl.a: {
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
							return Fl(c, {
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
				jO = Object(c.c)({
					models: AO
				});
			const RO = {};
			var PO = (e = RO, t) => {
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
			const CO = {};
			var LO = (e = CO, t) => {
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
			const NO = {};
			var kO = (e = NO, t) => {
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
			const UO = {};
			var xO = (e = UO, t) => {
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
			const MO = {};
			var GO = (e = MO, t) => {
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
				FO = Object(c.c)({
					assets: PO,
					communityRaw: LO,
					distributions: kO,
					meta: xO,
					releaseNotes: GO
				}),
				BO = r("./node_modules/lodash/isEqualWith.js"),
				qO = r.n(BO),
				HO = r("./src/lib/forceHttps/index.ts");
			const VO = {},
				KO = (e, t) => {
					return !qO()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				WO = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let a = 0; a < r.length; a++) {
						const n = r[a],
							c = e[n],
							o = t[n];
						c && !KO(c, o) || (s[n] = o)
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var $O = (e = VO, t) => {
				switch (t.type) {
					case Yi.c:
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
								return n.icon.url ? c.icon.url = Object(HO.a)(n.icon.url) : a && a.icon.url ? c.icon = a.icon : c.icon.url = "", a && a.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(F.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case mE.d:
					case yE.f:
					case je.f:
					case Rc.g:
					case rd.b:
					case Ce.e:
					case Ce.h:
					case W.k:
					case Pe.r:
					case Pe.u:
					case Qi.h:
					case Yo.b:
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
					case Qi.e:
					case J.SEARCH_RESULTS_RECEIVED:
					case Y.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case Wr.e:
					case xs.PAGE_LOADED:
					case Qi.m:
					case Z.b:
					case Z.e:
					case Ue.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ge.c:
					case ee.c:
					case ee.f:
					case ee.i:
					case sd.a:
					case sd.h:
					case sd.p:
					case Zo.TOPIC_DATA_LOADED:
					case Zo.MORE_POSTS_LOADED:
						return WO(e, t.payload.subreddits || {});
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
						return WO(e, s)
					}
					case Ge.e: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return WO(e, r.subreddits || {})
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
						return WO(e, r)
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
					case $E.f: {
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
					case cE.b: {
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
			var XO = (e = null, t) => {
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
			var QO = (e = !1, t) => {
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
			var zO = (e = !1, t) => {
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
				JO = Object(c.c)({
					errors: XO,
					fetched: QO,
					pending: zO
				});
			var YO = (e = null, t) => {
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
				ZO = Object(c.c)({
					api: JO,
					order: YO
				});
			const e_ = {};
			var t_ = (e = e_, t) => {
				switch (t.type) {
					case $E.a: {
						const r = t.payload;
						return Object(F.merge)(e, r)
					}
					case $E.b: {
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
			const r_ = {};
			var s_ = (e = r_, t) => {
				switch (t.type) {
					case sd.h: {
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
			const a_ = {};
			var n_ = (e = a_, t) => {
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
				},
				c_ = r("./src/reddit/actions/economics/powerups/constants.ts");
			const o_ = {},
				d_ = (e, t) => {
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
				},
				i_ = e => {
					if (!e) return e;
					const {
						mediaPacks: t,
						...r
					} = e, s = {};
					return null == t || t.forEach(e => {
						const {
							id: t,
							name: r,
							emotes: a
						} = e, n = {
							id: t,
							name: r,
							emotes: a.map(e => d_(e, t))
						};
						s[t] = n
					}), {
						...r,
						emotePacks: s
					}
				},
				u_ = (e, t, r) => {
					const s = null == e ? void 0 : e.emotePacks,
						a = null == s ? void 0 : s[t],
						n = null == a ? void 0 : a.emotes;
					if (!n) return e;
					const c = d_(r, t),
						o = [...n, c];
					return {
						...e,
						emotePacks: {
							...s,
							[t]: {
								...a,
								emotes: o
							}
						}
					}
				},
				l_ = (e, t, r) => {
					const s = null == e ? void 0 : e.emotePacks,
						a = null == s ? void 0 : s[t],
						n = null == a ? void 0 : a.emotes;
					if (!n) return e;
					const c = n.filter(e => e.id !== r);
					return {
						...e,
						emotePacks: {
							...s,
							[t]: {
								...a,
								emotes: c
							}
						}
					}
				};
			var p_ = (e = o_, t) => {
				var r;
				switch (t.type) {
					case oe.jb:
					case oe.ib: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: i_(r)
						}
					}
					case c_.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: u_(a, r, s)
						}
					}
					case c_.c: {
						const {
							subredditId: r,
							emojiId: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: l_(a, r, s)
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
			const b_ = {},
				f_ = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var y_ = (e = b_, t) => {
					switch (t.type) {
						case oe.ib: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(f_)
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
								[r]: o.sort(f_)
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
									[r]: [t, ...e[r]].sort(f_)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				m_ = r("./src/lib/makeProductOfferKey/index.ts");
			const E_ = {};
			var O_ = (e = E_, t) => {
				switch (t.type) {
					case oe.W:
					case oe.ib: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!s || 0 === s.length) return e;
						const a = s.reduce((e, t) => {
							const s = Object(m_.a)(r, t.type);
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
			const __ = {};
			var h_ = (e = __, t) => {
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
				I_ = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const g_ = {};
			var S_ = (e = g_, t) => {
				switch (t.type) {
					case sd.w: {
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
						}) => I_.b.includes(e)));
						return {
							...e,
							[r]: {
								...s,
								cards: a
							}
						}
					}
					case sd.d: {
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
			const D_ = {};
			var T_ = (e = D_, t) => {
				var r, s;
				switch (t.type) {
					case sd.w: {
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
					case sd.e: {
						const {
							subredditId: r,
							questionId: a
						} = t.payload, n = null !== (s = e[r]) && void 0 !== s ? s : [];
						return Object(F.setIn)(e, [r], n.filter(e => e.id !== a))
					}
					case sd.f:
						return D_;
					default:
						return e
				}
			};
			const v_ = {};
			var w_ = (e = v_, t) => {
				switch (t.type) {
					case sd.b: {
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
			const A_ = {};
			var j_ = (e = A_, t) => {
				switch (t.type) {
					case sd.c: {
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
			const R_ = {};
			var P_ = (e = R_, t) => {
				switch (t.type) {
					case KE.b: {
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
					case KE.e: {
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
					case KE.f: {
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
					case KE.g:
					case KE.d: {
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
			const C_ = {};
			var L_ = (e = C_, t) => {
				switch (t.type) {
					case $E.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case $E.f: {
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
			const N_ = {};
			var k_ = (e = N_, t) => {
				switch (t.type) {
					case sd.p: {
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
			const U_ = {};
			var x_ = (e = U_, t) => {
				switch (t.type) {
					case sd.w: {
						const {
							id: r,
							survey: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case sd.x: {
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
			const M_ = {};
			var G_ = (e = M_, t) => {
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
					case Ul.b: {
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
			const F_ = [];
			var B_ = (e = F_, t) => {
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
			const q_ = {};
			var H_ = (e = q_, t) => {
					switch (t.type) {
						case mE.d:
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
				V_ = r("./src/reddit/actions/subredditWelcomeMessage.ts");
			const K_ = {};
			var W_ = (e = K_, t) => {
					switch (t.type) {
						case V_.a: {
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
				$_ = Object(c.c)({
					about: OE,
					api: uO,
					appliedFilters: yO,
					byCategory: EO,
					communityInfo: _O,
					crosspostable: vO,
					duplicates: jO,
					gov: FO,
					models: $O,
					moderated: ZO,
					notificationSettings: t_,
					onboarding: s_,
					powerupRecentSupporters: n_,
					powerups: p_,
					powerupTopSupporters: y_,
					productOffers: O_,
					products: h_,
					progressModule: S_,
					questions: T_,
					rankings: w_,
					rankingsPageInfo: j_,
					rules: P_,
					settings: L_,
					similar: k_,
					survey: x_,
					topContent: G_,
					trending: B_,
					unavailableModels: H_,
					welcomeMessage: W_
				});
			const X_ = {};
			var Q_ = Object(bb.a)((e = X_, t) => {
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
						case yd.k: {
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
				}, X_),
				z_ = Object(c.c)({
					data: Q_
				}),
				J_ = r("./node_modules/lodash/values.js"),
				Y_ = r.n(J_);
			const Z_ = [];
			var eh = (e = Z_, t) => {
				switch (t.type) {
					case Yi.d: {
						const {
							makeFavorite: r,
							multiredditsModelsState: s,
							multiredditPath: a
						} = t.payload;
						if (r) {
							const t = [...e],
								r = Xi(t, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(r, 0, a), t
						}
						return e.filter(e => e !== a)
					}
					case Pe.u: {
						const {
							multireddits: e
						} = t.payload;
						return Y_()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case Yi.e: {
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
			var th = (e = null, t) => {
				switch (t.type) {
					case Yi.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Yi.b:
					case Yi.c:
						return null;
					default:
						return e
				}
			};
			var rh = (e = !1, t) => {
				switch (t.type) {
					case Yi.b:
					case Yi.c:
						return !0;
					case Yi.a:
						return !1;
					default:
						return e
				}
			};
			var sh = (e = !1, t) => {
					switch (t.type) {
						case Yi.b:
							return !0;
						case Yi.c:
						case Yi.a:
							return !1;
						default:
							return e
					}
				},
				ah = Object(c.c)({
					errors: th,
					fetched: rh,
					pending: sh
				});
			const nh = [];
			var ch = (e = nh, t) => {
				switch (t.type) {
					case Yi.c: {
						const {
							profiles: e,
							favoriteProfileIds: r,
							favoriteSubredditIds: s
						} = t.payload;
						let a;
						return (a = r && r.length ? r : s ? s.filter(t => !!e[t]) : []).sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), a
					}
					case Yi.f: {
						const {
							makeFavorite: r,
							identifier: s,
							profileModels: a
						} = t.payload, {
							id: n,
							type: c
						} = s;
						if (c !== uf.a.PROFILE) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Xi(o, n, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, n)
						} else {
							const e = o.indexOf(n);
							o.splice(e, 1)
						}
						return o
					}
					case Yi.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(t => t.type === uf.a.PROFILE && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const oh = [];
			var dh = (e = oh, t) => {
				switch (t.type) {
					case Yi.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: r
						} = t.payload, s = r ? r.filter(t => !!e[t]) : [];
						return s.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), s
					}
					case Yi.f: {
						const {
							makeFavorite: r,
							identifier: s,
							subredditModels: a
						} = t.payload, {
							id: n,
							type: c
						} = s;
						if (c !== uf.a.SUBREDDIT) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Xi(o, n, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, n)
						} else {
							const e = o.indexOf(n);
							o.splice(e, 1)
						}
						return o
					}
					case Yi.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(t => t.type === uf.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const ih = [],
				uh = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var lh = (e = ih, t) => {
					switch (t.type) {
						case Pe.u: {
							const {
								multireddits: r
							} = t.payload, s = Y_()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(uh(r));
							return Ki()(e, s) ? e : s
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
								d = $i()(e, c).sort(uh(o));
							return Ki()(e, d) ? e : d
						}
						case Yi.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: a
							} = t.payload;
							return r ? [...e, s].sort(uh(a)) : e.filter(e => e !== s)
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
							return [...e, r.url].sort(uh(a))
						}
						default:
							return e
					}
				},
				ph = r("./node_modules/lodash/difference.js"),
				bh = r.n(ph);
			const fh = [];
			var yh = (e = fh, t) => {
				switch (t.type) {
					case Qi.n: {
						const {
							profileOrder: r
						} = t.payload;
						return vp()([...e, ...r])
					}
					case Yi.c: {
						const {
							profiles: e
						} = t.payload, r = Object.keys(e);
						return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
					}
					case Yi.h: {
						const {
							identifiers: r,
							profileModels: s,
							userIsSubscriber: a
						} = t.payload, n = r.filter(e => e.type === uf.a.PROFILE);
						if (!n.length) return e;
						const c = n.map(e => e.id);
						return a ? vp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : bh()(e, c)
					}
					default:
						return e
				}
			};
			const mh = [];
			var Eh = (e = mh, t) => {
					switch (t.type) {
						case Qi.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return vp()([...e, ...r])
						}
						case Yi.c: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						case Yi.h: {
							const {
								identifiers: r,
								subredditModels: s,
								userIsSubscriber: a
							} = t.payload, n = r.filter(e => e.type === uf.a.SUBREDDIT && !!e.id);
							if (!n.length) return e;
							const c = n.map(e => e.id);
							return a ? vp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : bh()(e, c)
						}
						default:
							return e
					}
				},
				Oh = Object(c.c)({
					api: ah,
					favoriteMultiOrder: eh,
					favoriteProfileOrder: ch,
					favoriteSubredditOrder: dh,
					multiredditOrder: lh,
					profileOrder: yh,
					subredditOrder: Eh
				}),
				_h = r("./src/reddit/actions/survey/constants.ts");
			var hh = (e = null, t) => {
				switch (t.type) {
					case _h.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var Ih = (e = 1, t) => {
				switch (t.type) {
					case _h.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var gh = (e = !1, t) => {
				switch (t.type) {
					case _h.b:
						return !e;
					default:
						return e
				}
			};
			var Sh = (e = !0, t) => {
					switch (t.type) {
						case _h.h:
							return !e;
						default:
							return e
					}
				},
				Dh = Object(c.c)({
					activeDemoTrigger: hh,
					demoTriggerThreshold: Ih,
					isDemoEnabled: gh,
					isSampleFactorEnabled: Sh
				}),
				Th = r("./src/reddit/actions/tabBadging.ts");
			var vh = (e = !1, t) => {
					switch (t.type) {
						case Th.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				wh = r("./src/reddit/actions/tags/constants.ts");
			const Ah = {
				pending: !1,
				error: !1
			};
			var jh = (e = Ah, t) => {
				switch (t.type) {
					case wh.l:
						return {
							...e, pending: !0
						};
					case wh.m:
						return {
							error: !1, pending: !1
						};
					case wh.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const Rh = {
				pending: !1,
				error: !1
			};
			var Ph = (e = Rh, t) => {
				switch (t.type) {
					case wh.o:
						return {
							...e, pending: !0
						};
					case wh.p:
						return {
							error: !1, pending: !1
						};
					case wh.n:
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
					case wh.t:
						return {
							...e, pending: !0
						};
					case wh.s:
					case wh.r:
					case wh.e:
					case wh.j:
						return {
							error: !1, pending: !1
						};
					case wh.q:
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
					case wh.v:
						return {
							...e, pending: !0
						};
					case wh.w:
						return {
							error: !1, pending: !1
						};
					case wh.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const Uh = {
				pending: !1,
				error: !1
			};
			var xh = (e = Uh, t) => {
					switch (t.type) {
						case wh.g:
							return {
								...e, pending: !0
							};
						case wh.h:
							return {
								error: !1, pending: !1
							};
						case wh.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				Mh = Object(c.c)({
					create: jh,
					deleteTag: Ph,
					fetch: Lh,
					update: kh,
					updatePrimaryTag: xh
				});
			const Gh = {
				global: [],
				recommendedGlobal: []
			};
			var Fh = (e = Gh, t) => {
					switch (t.type) {
						case wh.w:
						case wh.r:
						case wh.e:
						case wh.j: {
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
				Bh = r("./node_modules/lodash/uniqWith.js"),
				qh = r.n(Bh),
				Hh = r("./src/reddit/models/Option/index.ts");
			const Vh = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var Kh = (e = Vh, t) => {
					switch (t.type) {
						case wh.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: qh()([...e.selectedOptions || [], {
									...r
								}], Hh.a)
							}
						}
						case wh.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(Hh.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case wh.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case wh.a: {
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
				Wh = r("./src/reddit/helpers/tags/index.ts");
			const $h = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var Xh = (e = $h, t) => {
					switch (t.type) {
						case wh.j: {
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
						case wh.w:
						case wh.s:
						case wh.r: {
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
									[o]: Object(Wh.a)(n[o] || {})
								}
							}
						}
						case wh.p: {
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
						case wh.e: {
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
						case wh.h: {
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
						case wh.i: {
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
				Qh = r("./src/reddit/reducers/tags/selected/index.ts"),
				zh = Object(c.c)({
					api: Mh,
					availableGlobalTagOrder: Fh,
					models: Xh,
					selected: Qh.b,
					creation: Kh
				}),
				Jh = r("./src/reddit/actions/redditEmbed.ts"),
				Yh = r("./src/reddit/actions/theme.ts"),
				Zh = r("./src/reddit/actions/users.ts"),
				eI = r("./src/reddit/models/Theme/index.ts");
			const tI = {
				current: eI.c,
				cached: {}
			};
			var rI = (e = tI, t) => {
					switch (t.type) {
						case Yh.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? eI.b : eI.c,
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
						case Jh.b:
						case ee.i:
						case Ge.c:
						case J.SEARCH_RESULTS_RECEIVED:
						case kr.j:
						case Ne.PAGE_LOADED:
						case xs.PAGE_LOADED:
						case Zh.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: eI.b,
									cached: {}
								} : {
									current: eI.c,
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
								current: eI.b,
								cached: {}
							} : {
								current: eI.c,
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
									current: eI.b,
									cached: {}
								} : {
									current: eI.c,
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
								current: eI.b,
								cached: {}
							} : {
								current: eI.c,
								cached: {}
							}
						}
						case I.d:
							return {
								current: eI.c, cached: {}
							};
						case I.e:
							return t.payload.nightmodeTempUpdated ? {
								current: eI.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				sI = r("./src/reddit/actions/toaster.ts");
			const aI = [];
			var nI = (e = aI, t) => {
					switch (t.type) {
						case sI.c: {
							const r = t.payload,
								s = [];
							let a = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), a = a || e === r
							}
							return a || s.push(r), s
						}
						case sI.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				cI = r("./src/reddit/actions/tooltip.ts");
			var oI = (e = null, t) => {
					switch (t.type) {
						case cI.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case cI.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case cI.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case cI.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case oe.K:
						case cI.d:
						case O.a:
						case lo.b:
						case lo.c:
						case lo.a:
							return null;
						default:
							return e
					}
				},
				dI = r("./src/reddit/actions/tracing.ts");
			const iI = {
				traceId: void 0
			};
			var uI = (e = iI, t) => {
					switch (t.type) {
						case dI.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				lI = r("./src/lib/asyncActions/index.ts"),
				pI = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const bI = Object(lI.c)(pI.c.requestedActionType, pI.c.succeededActionType, pI.c.failedActionType),
				fI = Object(lI.c)(pI.a.requestedActionType, pI.a.succeededActionType, pI.a.failedActionType),
				yI = Object(lI.c)(pI.d.requestedActionType, pI.d.succeededActionType, pI.d.failedActionType);
			var mI = Object(c.c)({
					load: bI,
					execute: fI,
					send: yI
				}),
				EI = r("./src/reddit/actions/tracking.ts");
			const OI = {};
			var _I = (e = OI, t) => {
					switch (t.type) {
						case EI.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case EI.b: {
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
				hI = Object(c.c)({
					reCaptchaEnterprise: mI,
					viewportDataLoaded: _I
				}),
				II = r("./src/reddit/actions/trafficStats/constants.ts");
			var gI = (e = !1, t) => {
				switch (t.type) {
					case II.c:
						return !0;
					case II.b:
					case II.a:
						return !1;
					default:
						return e
				}
			};
			var SI = (e = null, t) => {
					switch (t.type) {
						case II.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case II.c:
							return null;
						default:
							return e
					}
				},
				DI = Object(c.c)({
					pending: gI,
					trafficStats: SI
				});
			var TI = (e = null, t) => {
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
			var vI = (e = !1, t) => {
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
				wI = Object(c.c)({
					error: TI,
					pending: vI
				});
			var AI = (e = null, t) => {
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
			var jI = (e = "", t) => {
				switch (t.type) {
					case m.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case m.t:
						return "";
					default:
						return e
				}
			};
			var RI = (e = null, t) => {
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
				PI = Object(c.c)({
					api: wI,
					contentId: AI,
					initialRecipient: jI,
					publicAddress: RI
				}),
				CI = Object(c.c)({
					communityPoints: PI
				}),
				LI = r("./src/reddit/actions/search/trending.ts");
			const NI = [];
			var kI = (e = NI, t) => {
					switch (t.type) {
						case Y.SUBREDDIT_LOADED:
						case LI.a: {
							const {
								items: r
							} = t.payload;
							return r || e
						}
						default:
							return e
					}
				},
				UI = Object(c.c)({
					models: kI
				});
			const xI = {};
			var MI = (e = xI, t) => {
					switch (t.type) {
						case xf.a: {
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
				GI = r("./src/reddit/actions/upload.ts"),
				FI = r("./src/reddit/models/Upload/index.ts");
			const BI = {};
			var qI = (e = BI, t) => {
				switch (t.type) {
					case GI.d: {
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
								status: FI.a.PENDING
							}
						}
					}
					case GI.h: {
						const {
							key: r
						} = t.payload, s = e[r];
						return {
							...e,
							[r]: {
								...s,
								status: FI.a.UPLOADING
							}
						}
					}
					case GI.c: {
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
					case GI.e: {
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
					case GI.g: {
						const {
							key: r,
							url: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: {
								...a,
								status: FI.a.SUCCESS,
								url: s
							}
						}
					}
					case GI.b: {
						const {
							key: r,
							error: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: {
								...a,
								status: FI.a.FAILED,
								error: s
							}
						}
					}
					case GI.a: {
						const {
							key: r
						} = t.payload, s = e[r];
						return {
							...e,
							[r]: {
								...s,
								status: FI.a.CANCELED
							}
						}
					}
					case GI.f: {
						const {
							key: r
						} = t.payload, s = e[r];
						return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), Us()(e, r)
					}
					default:
						return e
				}
			};
			const HI = {};
			var VI = (e = HI, t) => {
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
				KI = r("./src/reddit/actions/inbox.ts"),
				WI = r("./src/reddit/actions/pages/appeal/constants.ts"),
				$I = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				XI = r("./src/reddit/actions/sso/constants.ts");
			const QI = (e, t) => {
				if (!t || Ki()(e, t)) return e;
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
			var zI = Object(bb.a)((e = null, t) => {
				switch (t.type) {
					case WI.a:
					case WI.b:
					case jy.b:
					case jy.c:
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
					case Qi.l:
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
					case xs.PAGE_LOADED:
					case Ge.a:
					case Ge.c:
					case Jh.a:
					case Jh.b:
					case kr.j:
					case $I.b:
					case Zh.c:
					case Zo.TOPIC_DATA_LOADED:
						return QI(e, t.payload.account);
					case Zh.n:
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
						return r ? QI(e, r.account) : e
					}
					case Zh.a:
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
					case Nu.g: {
						const {
							price: r
						} = t.payload;
						return (null == e ? void 0 : e.coins) && r ? {
							...e,
							coins: e.coins - r
						} : e
					}
					case KI.a: {
						const {
							inboxCount: r
						} = t.payload;
						return e ? {
							...e,
							inboxCount: r
						} : e
					}
					case XI.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case XI.b: {
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
					default:
						return e
				}
			}, null);
			var JI = (e = null, t) => {
				switch (t.type) {
					case Zh.m:
					case Zh.n:
						return null;
					case Zh.l:
						return t.payload;
					default:
						return e
				}
			};
			var YI = (e = !1, t) => {
					switch (t.type) {
						case Zh.m:
							return !0;
						case Zh.n:
						case Zh.l:
							return !1;
						default:
							return e
					}
				},
				ZI = Object(c.c)({
					error: JI,
					pending: YI
				}),
				eg = Object(c.c)({
					api: ZI
				});
			var tg = (e = !1, t) => {
				switch (t.type) {
					case Zh.j:
						return !0;
					default:
						return e
				}
			};
			var rg = (e = !1, t) => {
					switch (t.type) {
						case Zh.i:
							return !0;
						case Zh.j:
						case Zh.h:
							return !1;
						default:
							return e
					}
				},
				sg = Object(c.c)({
					pending: rg,
					emailSent: tg
				}),
				ag = Object(c.c)({
					api: sg
				}),
				ng = Object(c.c)({
					changeEmail: eg,
					sendResetEmail: ag
				}),
				cg = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const og = {};
			var dg = (e = og, t) => {
				switch (t.type) {
					case gt.f:
						return {
							...e, new: cg.a.pending
						};
					case gt.d:
						return {
							...e, new: cg.a.error
						};
					case gt.e:
						return {
							...e, new: cg.a.waitingForRequest
						};
					case gt.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: cg.a.pending
						}
					}
					case gt.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: cg.a.error
						}
					}
					case gt.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: cg.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const ig = [];
			var ug = (e = ig, t) => {
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
				lg = Object(c.c)({
					api: dg,
					data: ug
				}),
				pg = r("./src/reddit/actions/chat/constants.ts"),
				bg = r("./src/reddit/actions/chat/userSettings.ts");
			const fg = pg.a.anybody;
			var yg = (e = fg, t) => {
					switch (t.type) {
						case bg.a:
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
				mg = Object(c.c)({
					invitePolicy: yg
				});
			const Eg = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var Og = (e = null, t) => {
				switch (t.type) {
					case Ne.PAGE_LOADED: {
						const {
							drafts: r
						} = t.payload;
						return e && Ki()(e, r) ? e : {
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
						return Eg(e, r)
					}
					case Wr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return Eg(e, r.length)
					}
					case Wr.c:
					case Wr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return Eg(e, r)
					}
					default:
						return e
				}
			};
			const _g = {};
			var hg = (e = _g, t) => {
					switch (t.type) {
						case Hn.a: {
							const e = t.payload.experimentVariants;
							return hu(e)
						}
						default:
							return e
					}
				},
				Ig = r("./src/reddit/actions/global/constants.ts");
			const gg = {};
			var Sg = (e = gg, t) => {
					switch (t.type) {
						case Ig.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				Dg = Object(c.c)({
					byName: hg,
					localPersisted: Sg
				}),
				Tg = r("./src/reddit/actions/googleOneTap/index.ts");
			var vg = (e = !1, t) => {
				switch (t.type) {
					case Tg.a:
						return !0;
					default:
						return e
				}
			};
			var wg = (e = !1, t) => {
				switch (t.type) {
					case kr.e:
						return !0;
					case kr.d:
						return !1;
					default:
						return e
				}
			};
			var Ag = (e = "en", t) => {
				switch (t.type) {
					case kr.g:
						return t.payload;
					case kr.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const jg = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var Rg = (e = jg, t) => {
					switch (t.type) {
						case Zh.b:
							return t.payload;
						default:
							return e
					}
				},
				Pg = r("./src/reddit/actions/notifications/constants.ts"),
				Cg = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var Lg = (e = null, t) => {
				switch (t.type) {
					case Cg.a:
					case Cg.d:
					case Pg.a:
						return t.payload && t.payload.error || null;
					case Cg.c:
					case Cg.f:
					case Cg.a:
					case Pg.c:
					case Pg.b:
						return null;
					default:
						return e
				}
			};
			var Ng = (e = !1, t) => {
				switch (t.type) {
					case Pg.c:
						return !1;
					case Pg.b:
						return !0;
					default:
						return e
				}
			};
			var kg = (e = !1, t) => {
					switch (t.type) {
						case Pg.c:
							return !0;
						case Pg.b:
						case Pg.a:
							return !1;
						default:
							return e
					}
				},
				Ug = Object(c.c)({
					error: Lg,
					loaded: Ng,
					pending: kg
				});
			var xg = (e = null, t) => {
				switch (t.type) {
					case Pg.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case Pg.f:
					case Pg.e:
						return null;
					default:
						return e
				}
			};
			var Mg = (e = !1, t) => {
				switch (t.type) {
					case Pg.f:
						return !1;
					case Pg.e:
						return !0;
					default:
						return e
				}
			};
			var Gg = (e = !1, t) => {
					switch (t.type) {
						case Pg.f:
							return !0;
						case Pg.e:
						case Pg.d:
							return !1;
						default:
							return e
					}
				},
				Fg = Object(c.c)({
					error: xg,
					loaded: Mg,
					pending: Gg
				}),
				Bg = Object(c.c)({
					getPreferences: Ug,
					setPreferences: Fg
				});
			const qg = {
				byId: {},
				allIds: []
			};
			var Hg = (e = qg, t) => {
				switch (t.type) {
					case Cg.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case Cg.g: {
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
			const Vg = {
				byId: {},
				allIds: []
			};
			var Kg = (e = Vg, t) => {
					switch (t.type) {
						case Cg.b: {
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
				Wg = Object(c.c)({
					sections: Kg,
					rows: Hg
				}),
				$g = r("./src/lib/notifications/constants.ts");
			var Xg = (e = !1, t) => {
				switch (t.type) {
					case $g.j:
						return !0;
					case $g.b:
					case $g.d:
					case $g.e:
						return !1;
					default:
						return e
				}
			};
			const Qg = {
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
			var zg = (e = Qg, t) => {
				switch (t.type) {
					case Pg.b:
					case Pg.f:
					case Pg.d: {
						const {
							preferences: r
						} = t.payload;
						return sn()(r) ? e : r
					}
					default:
						return e
				}
			};
			const Jg = {
				byId: {},
				allIds: []
			};
			var Yg = (e = Jg, t) => {
				switch (t.type) {
					case Cg.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case Cg.g: {
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
			const Zg = {
				byId: {},
				allIds: []
			};
			var eS = (e = Zg, t) => {
					switch (t.type) {
						case Cg.e: {
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
				tS = Object(c.c)({
					sections: eS,
					rows: Yg
				}),
				rS = Object(c.c)({
					api: Bg,
					emailSettingsLayout: Wg,
					isNotificationPromptVisible: Xg,
					preferences: zg,
					pushSettingsLayout: tS
				});
			const sS = {};
			var aS = (e = sS, t) => {
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
			const nS = {},
				cS = (e, t) => `${e}_${t||new Date}}`;
			var oS = (e = nS, t) => {
				switch (t.type) {
					case oe.tb: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[cS(t.subredditInfo.id, t.allocatedAt)]: t
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
							const t = cS(r, a),
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
						} = t.payload, a = cS(r, s), n = e[a];
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
			var dS = (e = null, t) => {
				switch (t.type) {
					case oe.tb: {
						const r = t.payload.powerups;
						return r ? Us()({
							...e,
							...r
						}, "allocation") : e
					}
					case oe.ib: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? Us()({
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
			var iS = (e = !1, t) => {
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
				uS = Object(c.c)({
					allocationByKey: oS,
					data: dS,
					fetched: iS
				}),
				lS = r("./src/reddit/reducers/user/prefs/index.ts");
			var pS = (e = "", t) => {
					switch (t.type) {
						case Zh.d:
							return t.payload;
						default:
							return e
					}
				},
				bS = r("./src/reddit/actions/session.ts");
			var fS = (e = null, t) => {
				switch (t.type) {
					case bS.a:
					case bS.b:
					case bS.c:
					case bS.e:
						return t.payload;
					case bS.d:
						return null;
					default:
						return e
				}
			};
			var yS = (e = !1, t) => {
				switch (t.type) {
					case bS.f:
						return !0;
					default:
						return e
				}
			};
			var mS = (e = "", t) => {
				switch (t.type) {
					case Zh.k:
						return t.payload;
					default:
						return e
				}
			};
			var ES = (e = null, t) => {
				switch (t.type) {
					case Hn.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var OS = (e = null, t) => {
					switch (t.type) {
						case Hn.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				_S = Object(c.c)({
					isEmployee: ES,
					isLoggedIn: OS
				});
			var hS = (e = null, t) => {
					switch (t.type) {
						case kr.r: {
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
				IS = r("./src/reddit/actions/userWhitelist.ts");
			const gS = {};
			var SS = (e = gS, t) => {
				switch (t.type) {
					case IS.e:
						return {
							...e, new: cg.a.pending
						};
					case IS.d:
						return {
							...e, new: cg.a.error
						};
					case IS.f:
						return {
							...e, new: cg.a.waitingForRequest
						};
					case IS.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: cg.a.pending
						}
					}
					case IS.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: cg.a.error
						}
					}
					case IS.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: cg.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const DS = [];
			var TS = (e = DS, t) => {
					switch (t.type) {
						case IS.f:
							return [t.payload, ...e];
						case IS.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case kr.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				vS = Object(c.c)({
					api: SS,
					data: TS
				}),
				wS = Object(c.c)({
					account: zI,
					accountSettings: ng,
					blocked: lg,
					chatSettings: mg,
					drafts: Og,
					experiments: Dg,
					googleOneTapEnabled: vg,
					isCustomizeFlyoutShowing: wg,
					topContentDismissalPrefsSet: hS,
					language: Ag,
					loid: Rg,
					notificationPrefs: rS,
					ownedBadges: aS,
					powerups: uS,
					prefs: lS.d,
					reddaid: pS,
					session: fS,
					sessionRefreshFailed: yS,
					sessionTracker: mS,
					temporaryGQL: _S,
					wallets: VI,
					whitelist: vS
				});
			var AS = (e = null, t) => {
				switch (t.type) {
					case $I.a:
						return t.payload || null;
					case $I.b:
					case $I.c:
						return null;
					default:
						return e
				}
			};
			var jS = (e = !1, t) => {
				switch (t.type) {
					case $I.c:
						return !0;
					case $I.b:
					case $I.a:
						return !1;
					default:
						return e
				}
			};
			var RS = (e = !1, t) => {
				switch (t.type) {
					case $I.b:
						return !0;
					case $I.a:
					case $I.c:
						return !1;
					default:
						return e
				}
			};
			var PS = (e = !1, t) => {
					switch (t.type) {
						case $I.b:
							return t.payload.userDataExportEligibility;
						case $I.a:
						case $I.c:
							return !1;
						default:
							return e
					}
				},
				CS = Object(c.c)({
					error: AS,
					pending: jS,
					success: RS,
					userDataExportEligibility: PS
				}),
				LS = Object(c.c)({
					userDataRequestPageApi: CS
				});
			const NS = {};
			var kS = (e = NS, t) => {
				switch (t.type) {
					case Zh.g:
					case Zh.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Zh.e: {
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
			var US = (e = !1, t) => {
					switch (t.type) {
						case Zh.g:
							return !0;
						case Zh.f:
						case Zh.e:
							return !1;
						default:
							return e
					}
				},
				xS = Object(c.c)({
					error: kS,
					pending: US
				});
			const MS = {};
			var GS = (e = MS, t) => {
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
			const FS = {},
				BS = (e, t) => {
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					return r.forEach(r => {
						const a = e[r],
							n = t[r];
						a && Ki()(a, n) || (s[r.toLowerCase()] = n)
					}), Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var qS = (e = FS, t) => {
					switch (t.type) {
						case Zh.f: {
							const {
								data: r
							} = t.payload;
							return BS(e, r)
						}
						case Qi.k: {
							const {
								user: r
							} = t.payload;
							return BS(e, {
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
							return c ? BS(e, {
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
							return BS(e, {
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
							return c ? BS(e, {
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
				HS = r("./src/reddit/actions/usernameAvailable.ts");
			const VS = {};
			var KS = (e = VS, t) => {
				switch (t.type) {
					case HS.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: HS.b.Available
						}
					}
					case HS.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: HS.b.Error
						}
					}
					case HS.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: HS.b.Pending
						}
					}
					case HS.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: HS.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const WS = {};
			var $S = (e = WS, t) => {
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
			var XS = (e = !1, t) => {
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
				QS = Object(c.c)({
					allocationByKey: $S,
					fetched: XS
				});
			var zS = (e = null, t) => {
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
			var JS = (e = !1, t) => {
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
				YS = Object(c.c)({
					error: zS,
					pending: JS
				});
			var ZS = (e = null, t) => {
				switch (t.type) {
					case oe.rb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const eD = {};
			var tD = (e = eD, t) => {
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
			const rD = {};
			var sD = (e = rD, t) => {
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
							return Us()(e, [r])
						}
						default:
							return e
					}
				},
				aD = Object(c.c)({
					api: YS,
					currentPostId: ZS,
					currentRank: tD,
					list: sD
				}),
				nD = Object(c.c)({
					api: xS,
					appliedBadges: GS,
					models: qS,
					nameAvailable: KS,
					topAwarders: aD,
					powerups: QS
				});
			const cD = {};
			var oD = (e = cD, t) => {
					switch (t.type) {
						case $.b:
						case $.f:
						case Y.SUBREDDIT_LOADED:
						case ee.i:
						case J.SEARCH_RESULTS_RECEIVED:
						case Ne.PAGE_LOADED:
						case xs.PAGE_LOADED: {
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
				dD = r("./src/reddit/actions/widgets/constants.ts");
			const iD = {};
			var uD = (e = iD, t) => {
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
						case dD.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case dD.h: {
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
				lD = r("./src/reddit/models/Widgets/index.ts");
			const pD = {};
			var bD = (e = pD, t) => {
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
					case dD.b: {
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
								styles: Object(lD.m)()
							}
						}), t
					}
					case dD.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case dD.i:
					case dD.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case dD.h: {
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
					case xs.PAGE_LOADED: {
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
					case Yi.h: {
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
					case $E.f: {
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
			const fD = {};
			var yD = (e = fD, t) => {
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
			const mD = {};
			var ED = (e = mD, t) => {
				switch (t.type) {
					case Y.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case xs.PAGE_LOADED: {
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
					case dD.e:
					case dD.b: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgets.layout.sidebar.order
						}
					}
					case dD.f: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgetIds
						}
					}
					case dD.g: {
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
					case dD.h: {
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
					case xs.PAGE_LOADED: {
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
			const OD = {
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
				contentGate: xr,
				continueThreads: Fr,
				creations: $a,
				dashboard: za,
				discoveryUnits: pn,
				dismissedTruncationList: yn,
				economics: Nn,
				emojis: qn,
				experimentOverrides: $n,
				externalAccount: gc,
				featureFlags: jc,
				focusedVerticals: qc,
				fontFiles: Vc,
				gild: so,
				header: bo,
				htmlResponseStreaming: fo,
				imageUploads: Eo,
				interceptedAction: _o,
				isChangeUsernameTooltipShowing: Io,
				isEmailVerificationTooltipShowing: So,
				isModeratorWithPostPerms: To,
				jsApi: Ao,
				leaderboard: xo,
				listings: vd,
				live: Pd,
				mediaGalleries: xd,
				mediaPlayback: Fd,
				meta: Hd,
				moderatingSubreddits: Wd,
				moderationPromptId: $d,
				modListingPage: ei,
				modModeEnabled: ri,
				moreComments: li,
				multireddits: au,
				notificationBannerId: cu,
				notificationsInbox: yu,
				nps: Ou,
				page: Du,
				platform: wu,
				postCollection: rl,
				polls: Vu,
				postFlair: dl,
				posts: pb,
				postStickiedComments: mb,
				givePremium: io,
				products: Pb,
				profileCommentsPage: Wb,
				profilePrivatePage: df,
				profileModSettingsPage: zb,
				profilePostsPage: Yb,
				profiles: qf,
				promos: $f,
				publicAccessNetwork: vy,
				recommendations: Ay,
				reportPage: My,
				reportRules: By,
				requestHost: qy,
				runTimeEnvVars: Vy,
				search: rm,
				searchDiscoveryUnits: um,
				seo: Om,
				shortcuts: Am,
				sidebarPromotedPosts: Pm,
				streaming: Gm,
				structuredStyles: aE,
				stylesheets: nE,
				subredditAutocomplete: fE,
				subreddits: $_,
				subredditStickyPosts: z_,
				subscriptions: Oh,
				survey: Dh,
				tabBadged: vh,
				tags: zh,
				themes: rI,
				toaster: nI,
				tooltipId: oI,
				tracing: uI,
				tracking: hI,
				trafficStats: DI,
				transfers: CI,
				trending: UI,
				trophies: MI,
				uploads: qI,
				user: wS,
				userDataRequestPage: LS,
				users: nD,
				widgets: Object(c.c)({
					idCardIds: oD,
					menuIds: uD,
					models: bD,
					moderatorIds: yD,
					sidebar: ED
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
				f = Object(s.a)(o.J, i, (e, t) => !e && !!t && !Object(a.Bd)(t))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.eb6023633f8fe7eaa6bf.js.map