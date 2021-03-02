// https://www.redditstatic.com/desktop2x/Governance~Reddit.88b799ad467f897601ce.js
// Retrieved at 3/2/2021, 2:20:07 PM by Reddit Dataminer v1.0.0
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
					n = ".postMessage",
					a = {
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
					l = [n],
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
						c.test(t) || (t += n);
						var o = s;
						Object.keys(a).forEach((function(e) {
							o[e] = a[e]
						})), e.postMessage(JSON.stringify({
							type: t,
							data: r,
							defaultedOptions: o
						}), o.targetOrigin)
					},
					_ = t.receiveMessage = function(e, t, r, s) {
						"string" == typeof e && (s = r, r = t, t = e, e = null), s = s || void 0;
						var n = function(t) {
							for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++) a[c - 1] = arguments[c];
							e && e !== t.source && e.contentWindow !== t.source || r.apply(s, [t].concat(a))
						};
						return y(t, n), {
							off: function() {
								m(t, n)
							}
						}
					},
					h = (t.receiveMessageOnce = function(e, t, s, n) {
						var a = _(e, t, (function() {
							s && s.apply(void 0, r), a.off()
						}), n);
						return a
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
							var n = s.split(".", 2)[1];
							if (b[n]) b[n].targets.forEach((function(e) {
								return O(e, s, r.data, r.options)
							}));
							var a = new I(s, {
								detail: r.data
							});
							a.source = t.source, e.dispatchEvent(a)
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
				var n = (r = "function" == typeof r ? r : void 0) ? r(e, t) : void 0;
				return void 0 === n ? s(e, t, void 0, r) : !!n
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
				n = r("./node_modules/lodash/negate.js"),
				a = r("./node_modules/lodash/pickBy.js");
			e.exports = function(e, t) {
				return a(e, n(s(t)))
			}
		},
		"./node_modules/lodash/union.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseFlatten.js"),
				n = r("./node_modules/lodash/_baseRest.js"),
				a = r("./node_modules/lodash/_baseUniq.js"),
				c = r("./node_modules/lodash/isArrayLikeObject.js"),
				o = n((function(e) {
					return a(s(e, 1, c, !0))
				}));
			e.exports = o
		},
		"./node_modules/lodash/xorWith.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_arrayFilter.js"),
				n = r("./node_modules/lodash/_baseRest.js"),
				a = r("./node_modules/lodash/_baseXor.js"),
				c = r("./node_modules/lodash/isArrayLikeObject.js"),
				o = r("./node_modules/lodash/last.js"),
				d = n((function(e) {
					var t = o(e);
					return t = "function" == typeof t ? t : void 0, a(s(e, c), void 0, t)
				}));
			e.exports = d
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, t, r) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var s = r("./node_modules/ts-error/lib/helpers.js"),
				n = s.setPrototypeOf,
				a = s.getPrototypeOf,
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
				if (n(p, a(this)), !(p instanceof r && p instanceof u)) {
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
				n = "function" == typeof Object.getPrototypeOf,
				a = "function" == typeof Object.defineProperty,
				c = "function" == typeof Object.create,
				o = "function" == typeof Object.prototype.hasOwnProperty;
			t.setPrototypeOf = function(e, t) {
				s ? Object.setPrototypeOf(e, t) : e.__proto__ = t
			};
			t.getPrototypeOf = function(e) {
				return n ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var d = !1;
			t.defineProperty = function e(t, r, s) {
				if (a && !d) try {
					Object.defineProperty(t, r, s)
				} catch (n) {
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
					for (var n in t) i(t, n) && (s[n] = t[n].value);
				return s
			}
		},
		"./src/graphql/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"712476d48c90"}')
		},
		"./src/graphql/operations/CrowdControlLevelInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"975a7920607d"}')
		},
		"./src/graphql/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/graphql/operations/FetchContentControls.json": function(e) {
			e.exports = JSON.parse('{"id":"90868f8cfd19"}')
		},
		"./src/graphql/operations/FetchSubredditStreamingModSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"df4f7fe92d1f"}')
		},
		"./src/graphql/operations/GetSubredditChatSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"63d6a697b823"}')
		},
		"./src/graphql/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"7fc3f75ce98a"}')
		},
		"./src/graphql/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"90defcf94579"}')
		},
		"./src/graphql/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"f90184fd040d"}')
		},
		"./src/graphql/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"ef4cb19b5c40"}')
		},
		"./src/graphql/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"3785f4aa83f3"}')
		},
		"./src/graphql/operations/UpdateAutomatedReportingSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"8305fd94cd72"}')
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
		"./src/graphql/operations/UserDataExportEligibility.json": function(e) {
			e.exports = JSON.parse('{"id":"3817c69d7a39"}')
		},
		"./src/graphql/operations/VerifyRecaptchaToken.json": function(e) {
			e.exports = JSON.parse('{"id":"c1242f999b6c"}')
		},
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(s.a)(e, {
				allow_quarantined: !0
			})
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
		"./src/lib/forceHttps/index.ts": function(e, t, r) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				return `linkedPosts--[post:'${e}']`
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
				return n
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "API_REQUEST_HEADERS__set";
			Object(s.a)(n)
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			}));
			const s = "APP_BADGES__PENDING",
				n = "APP_BADGES__LOADED",
				a = "APP_BADGES__UPDATED",
				c = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return E
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				a = r("./src/reddit/actions/tabBadging.ts"),
				c = r("./src/graphql/operations/BadgeIndicators.json"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				d = e => Object(o.a)(e, {
					...c
				}),
				i = r("./src/reddit/models/Badge/index.ts");
			const u = Object(s.a)(n.c),
				l = Object(s.a)(n.b),
				p = Object(s.a)(n.d),
				b = Object(s.a)(n.a),
				f = ({
					key: e,
					count: t
				}) => ({
					[e]: {
						count: t,
						style: i.b.Numbered
					}
				}),
				y = (e, t, r) => ({
					[i.c.DirectMessages]: {
						count: e,
						style: i.b.Numbered
					},
					[i.c.ChatRooms]: {
						count: t,
						style: i.b.Numbered
					},
					[i.c.ChatRoomMentions]: {
						count: r,
						style: i.b.Numbered
					}
				}),
				m = () => async (e, t, {
					gqlContext: r
				}) => {
					e(u());
					const s = await async function(e) {
						const t = await d(e());
						if (t.ok && t.body) {
							return function(e) {
								return e && e.data && e.data.badgeIndicators
							}(t.body)
						}
					}(r);
					s ? (e(l(s)), e(Object(a.d)())) : e(b())
				};
			const E = () => async e => {
				const t = f({
					key: i.c.MessageTab,
					count: 0
				});
				e(p(t))
			}
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
				return j
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/governance/errorToast.ts"),
				a = r("./src/reddit/endpoints/governance/badges.ts");
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
						const l = await Object(a.a)(c(), t, i, u);
						l.ok || (r(E({
							badgeIds: e,
							subredditId: t,
							error: l.error,
							previousBadgeIds: s,
							userId: d.id
						})), Object(n.a)(r, l.error))
					}
				}, T = ({
					subredditId: e,
					userIds: t
				}) => async (r, s, {
					apiContext: n
				}) => {
					r(h({
						subredditId: e
					}));
					const c = await Object(a.b)(n(), e, t);
					c.ok ? r(O({
						...c.body,
						subredditId: e
					})) : r(_({
						subredditId: e,
						error: c.error
					}))
				}, j = ({
					subredditId: e
				}) => async (t, r, {
					apiContext: s
				}) => {
					const n = r().user.account;
					if (n) {
						t(S({
							subredditId: e
						}));
						const r = await Object(a.c)(s(), e, n.id);
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
				n = r("./src/graphql/operations/FetchBlockedRedditorsInfo.json"),
				a = r("./src/lib/makeGqlRequest/index.ts");
			const c = (e, t) => Object(a.a)(e, {
				...n,
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
								if (e(m(s.map(e => e.node.id))), r) {
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
							e(y({
								message: t
							}))
						}
					} while (a)
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
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "d", (function() {
				return h
			}));
			var s, n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/chat/endpoints/sendbird/index.ts"),
				o = r("./src/reddit/actions/tabBadging.ts"),
				d = r("./src/reddit/selectors/chat.ts"),
				i = r("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(s || (s = {}));
			const {
				SYNC: u,
				REQUEST_FAILED: l,
				REQUEST_PENDING: p,
				REQUEST_SUCCESS: b
			} = s, f = Object(a.a)(u), y = Object(a.a)(l), m = Object(a.a)(p), E = Object(a.a)(b);
			let O;
			const _ = 5 * n.db,
				h = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t();
					if (!Object(i.J)(s) || !Object(d.d)(s)) return clearTimeout(O);
					O || e((() => async (e, t, {
						apiContext: r
					}) => {
						const s = t(),
							{
								session: n
							} = s.user;
						if (n && Object(i.J)(s) && Object(d.d)(s)) {
							e(m());
							const t = await Object(c.f)(r(), n);
							t && t.ok ? (e(E({
								basicChannelCount: t.body.unread_count || 0,
								subredditChannelCount: t.body.subreddit_unread_count || 0
							})), e(Object(o.d)())) : e(y({
								error: t.error
							}))
						}
					})()), O = setTimeout(() => {
						e(h())
					}, _)
				}
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
			const y = Object(n.a)("USER_SETTINGS__FETCH_PENDING"),
				m = Object(n.a)("USER_SETTINGS__FETCH_FAILURE"),
				E = "USER_SETTINGS__UPDATE_SUCCESS",
				O = Object(n.a)(E),
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
				}, h = Object(n.a)("USER_SETTINGS__SAVE_PENDING"), I = Object(n.a)("USER_SETTINGS__SAVE_FAILURE"), g = e => async (t, r, {
					apiContext: n
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
							}))(E)(y)), e.ok) {
							const e = f.a[E];
							t(O({
								invitePolicy: e
							})), t(Object(a.e)({
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
				E = Object(n.a)(y),
				O = Object(n.a)(m),
				_ = () => async (e, t) => {
					const r = t();
					Object(f.b)(r) ? e(O()) : e(E())
				}, h = "CLAIMGOLD_UPDATE_CODE", I = Object(n.a)(h), g = "CLAIM_GOLD__TRIGGER_LOADER", S = "CLAIM_GOLD__CLAIM_GOLD_PENDING", D = "CLAIM_GOLD__CLAIM_GOLD_SUCCESSFUL", T = "CLAIM_GOLD__CLAIM_GOLD_FAILED", j = () => async (e, t, {
					apiContext: r
				}) => {
					const s = {
						code: t().claimGold.code
					};
					e(P());
					try {
						const t = await p(r(), s);
						t.error ? e(C(t)) : e(L())
					} catch (n) {
						e(C(n))
					}
				}, v = Object(n.a)(g), A = Object(n.a)(S), P = () => async (e, t) => {
					e(A()), window.setTimeout(() => {
						t().claimGold.api.pending && e(v())
					}, 2e3)
				}, w = Object(n.a)(T), C = e => async (t, r) => {
					await t(w({
						...e,
						error: e.error || Object(b.a)()
					}));
					const s = r().claimGold.api.error;
					s && t(Object(a.e)({
						kind: c.b.Error,
						duration: a.a,
						text: s
					}))
				}, R = Object(n.a)(D), L = () => async (e, t) => {
					e(R()), e(Object(a.e)({
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
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			}));
			const s = "CONTENT_CONTROLS_FAILED",
				n = "CONTENT_CONTROLS_LOADED",
				a = "CONTENT_CONTROLS_PENDING",
				c = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return j
			})), r.d(t, "b", (function() {
				return A
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/camelCase.js"),
				a = r.n(n),
				c = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/graphql/operations/FetchContentControls.json"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				p = r("./src/reddit/models/AutomatedReporting/index.ts");
			const b = e => {
				switch (e) {
					case "LENIENT":
						return p.a.Lenient;
					case "MODERATE":
						return p.a.Moderate;
					case "STRICT":
						return p.a.Strict;
					default:
						return p.a.Off
				}
			};
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var f = r("./node_modules/lodash/isEmpty.js"),
				y = r.n(f),
				m = r("./src/graphql/operations/UpdateAutomatedReportingSettings.json"),
				E = r("./src/graphql/operations/UpdatePostRequirements.json"),
				O = r("./src/reddit/endpoints/subreddit/about.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/selectors/contentControls.ts"),
				I = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/actions/contentControls/constants.ts");
			const S = Object(o.a)(g.b),
				D = Object(o.a)(g.c),
				T = Object(o.a)(g.a),
				j = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = {
						subredditName: e.toLowerCase()
					};
					if (Object(h.a)(r(), n)) return;
					t(D(n));
					let a = Object(I.F)(r(), e);
					if (!a) {
						const r = await Object(O.a)(s(), e, !1);
						if (r.ok) {
							a = r.body.data.subreddit.id
						}
						if (!a) {
							const e = r.error || {
								type: c.E.NOT_FOUND_ERROR
							};
							return void t(T({
								...n,
								error: e
							}))
						}
					}
					let o = null;
					const i = await ((e, t) => Object(l.a)(e, {
						...u,
						variables: t
					}).then(e => {
						var t, r;
						if (e.ok) {
							const s = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit;
							return {
								...e,
								body: {
									data: {
										subreddit: {
											automatedReporting: {
												levelAbuse: b(null == s ? void 0 : s.automatedReportingLevelAbuse),
												levelHate: b(null == s ? void 0 : s.automatedReportingLevelHate),
												wordlist: [],
												wordlistEnabled: !1
											},
											postRequirements: null == s ? void 0 : s.postRequirements
										}
									}
								}
							}
						}
						return e
					}))(s(), {
						subredditId: a
					});
					if (i.ok) {
						const e = i.body;
						o = e.data.subreddit && e.data.subreddit
					}
					if (o) t(S({
						...n,
						...o
					}));
					else {
						const r = i.error || {
							type: c.E.UNKNOWN_ERROR
						};
						t(T({
							...n,
							error: r
						})), d.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: i.body,
								responseOk: i.ok
							}), d.c.captureMessage("Missing post requirements data!")
						})
					}
				}, v = Object(o.a)(g.d), A = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					const c = e.toLowerCase(),
						o = Object(I.F)(n(), e);
					if (!o) return {
						success: !1
					};
					const d = await ((e, t, r) => {
						const s = [Promise.resolve(null), Promise.resolve(null)];
						if (r.postRequirements && !y()(r.postRequirements)) {
							const n = {
								subredditId: t,
								...r.postRequirements
							};
							s[0] = Object(l.a)(e, {
								...E,
								variables: {
									input: n
								}
							})
						}
						if (r.automatedReporting && !y()(r.automatedReporting)) {
							const n = {
								subredditId: t
							};
							r.automatedReporting.levelAbuse && (n.automatedReportingLevelAbuse = r.automatedReporting.levelAbuse), r.automatedReporting.levelHate && (n.automatedReportingLevelHate = r.automatedReporting.levelHate), s[1] = Object(l.a)(e, {
								...m,
								variables: {
									input: n
								}
							})
						}
						return Promise.all(s).then(([e, t]) => {
							let r = !0,
								s = [];
							if (e) {
								const t = e.body,
									n = t.data.updatePostRequirements.fieldErrors;
								r = r && t.data.updatePostRequirements.ok, n && (s = s.concat(n))
							}
							if (t) {
								const e = t.body,
									n = e.data.updateSubredditSettings.fieldErrors;
								r = r && e.data.updateSubredditSettings.ok, n && (s = s.concat(n))
							}
							return {
								ok: r,
								fieldErrors: s.length ? s : null
							}
						})
					})(a(), o, t);
					if (d.ok) return r(v({
						subredditName: c,
						partialUpdates: t
					})), {
						success: !0
					}; {
						const e = P(d.fieldErrors);
						return r(Object(i.e)({
							duration: i.a,
							id: "CONTENT_CONTROLS_SAVE_ERROR",
							kind: _.b.Error,
							text: e && e.length ? e[0].message : s.fbt._("Something went wrong", null, {
								hk: "3i6szH"
							})
						})), {
							success: !1,
							errors: e || void 0
						}
					}
				}, P = e => e && e.map(e => ({
					...e,
					field: a()(e.field)
				}))
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
		"./src/reddit/actions/economics/predictions/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			}));
			const s = "FETCH_SUBREDDIT_TOP_PREDICTORS_SUCCESS",
				n = "PREDICTION_VOTE_SUCCESS",
				a = "PREDICTION_RESOLVE_SUCCESS"
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, r) {
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
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "EMBEDS__UNLOADABLE",
				a = "EMBEDS__LOADABLE",
				c = Object(s.a)(n),
				o = Object(s.a)(a)
		},
		"./src/reddit/actions/emoji.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return S
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "h", (function() {
				return P
			})), r.d(t, "g", (function() {
				return w
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
				return q
			})), r.d(t, "j", (function() {
				return H
			})), r.d(t, "k", (function() {
				return K
			})), r.d(t, "b", (function() {
				return V
			})), r.d(t, "n", (function() {
				return $
			})), r.d(t, "e", (function() {
				return Q
			})), r.d(t, "o", (function() {
				return X
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
				method: c.cb.GET,
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
				j = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				v = Object(p.a)(T),
				A = Object(p.a)(j),
				P = "GET_ALL_EMOJIS_PENDING",
				w = "GET_ALL_EMOJIS_LOADED",
				C = "GET_ALL_EMOJIS_FAILED",
				R = Object(p.a)(P),
				L = Object(p.a)(w),
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
						l = Object(g.S)(a, {
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
						}))(n.apiContext(), l, p.name, f);
					let m = !1;
					if (y.ok) {
						const t = await (async (e, t, r) => Object(i.a)(r, t))(n.apiContext(), y.body.s3UploadLease, p);
						if (t.ok) {
							if (!s().imageUploads[e.id]) return Object(_.d)(e), !1;
							const n = decodeURIComponent(t.body.PostResponse.Location),
								a = y.body.websocketUrl,
								c = Object(_.n)(e, n, a);
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
				}, F = (e, t) => async (r, s, n) => {
					const {
						imageData: a,
						subredditId: i,
						emojiName: l,
						settings: p
					} = e, y = Object(m.a)(a.url), E = s(), O = Object(g.S)(E, {
						subredditId: i
					}).name, h = await (async (e, t, r, s, n) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: c.cb.POST,
						data: {
							s3_key: r,
							name: s,
							mod_flair_only: n.modFlairOnly,
							post_flair_allowed: n.postFlairAllowed,
							user_flair_allowed: n.userFlairAllowed
						}
					}))(n.apiContext(), O, y, l, p);
					if (!h.ok) {
						const s = Object(_.k)(a, h.error);
						r(Object(b.i)(s)), r(Object(f.e)(U(e))), t && t.close()
					}
					return h.ok
				}, G = e => async (t, r, s) => {
					const {
						imageData: n,
						subredditId: a,
						emojiName: c,
						settings: o
					} = e;
					if (t(Object(b.k)(n)), !n.websocketUrl) return t(Object(f.e)({
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
								r = Object(_.o)(n, e);
							t(Object(b.l)(r));
							const i = Object(O.e)(c, r.url, a, o);
							t(D(i)), t(B(a))
						} else {
							const r = Object(y.a)(c),
								s = Object(_.k)(n, r);
							t(Object(b.i)(s)), t(Object(f.e)(U(e)))
						}
						i.close()
					}, i.onerror = r => {
						d = !1;
						const s = Object(y.a)(c),
							a = Object(_.k)(n, s);
						t(Object(b.i)(a)), t(Object(f.e)(U(e))), i.close()
					}, d
				}, B = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r();
					if (Object(I.a)(n, e)) return;
					const a = Object(g.S)(n, {
						subredditId: e
					}).name;
					t(R(e));
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
				}, q = e => async (t, r, {
					apiContext: s
				}) => {
					r().emojis[e] || await t(B(e))
				}, H = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(g.S)(i, {
							subredditId: t
						}).name,
						p = await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${r}/emoji/${t}`,
							method: c.cb.DELETE,
							type: "json"
						}))(a(), e, l);
					if (p.ok) {
						r(v({
							emojiName: e,
							subredditId: t
						})), r(f.e({
							kind: h.b.SuccessCommunityGreen,
							text: s.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else r(A(p.error)), r(f.e({
						kind: h.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, K = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(g.S)(i, {
							subredditId: e
						}).name;
					if ((await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: c.cb.POST,
							data: {
								subreddit: t,
								enable: r
							}
						}))(a(), l, t)).ok) {
						r(x({
							subredditId: e,
							emojisEnabled: t
						}))
					} else r(f.e({
						kind: h.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, V = "EMOJI_CUSTOM_SIZE_UPDATED", W = Object(p.a)(V), $ = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						l = Object(g.S)(i, {
							subredditId: e
						}).name;
					(await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji_custom_size`,
						method: c.cb.POST,
						data: r
					}))(a(), l, t)).ok ? r(W({
						subredditId: e,
						emojiCustomSize: t
					})) : r(f.e({
						kind: h.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, Q = "EMOJI_PERMISSIONS_UPDATED", z = Object(p.a)(Q), X = (e, t, r, n) => async (a, i, {
					apiContext: l
				}) => {
					const p = i(),
						b = Object(g.S)(p, {
							subredditId: n
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
					}))(l(), e, b, r)).ok ? (a(z({
						emojiName: e,
						isSnoomoji: t,
						settings: r,
						subredditId: n
					})), a(f.e({
						kind: h.b.SuccessCommunityGreen,
						text: s.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : a(f.e({
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
				y = Object(a.a)(p),
				m = Object(a.a)(b),
				E = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				O = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				_ = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				h = e => async (t, a) => {
					t(f());
					const c = a(),
						d = Object(u.S)(c, {
							subredditId: e
						}).name,
						l = c.structuredStyles.models[e],
						p = await Object(n.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ExportTheme")]).then(r.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						b = await p(l, d);
					b.ok ? (t(y()), t(Object(o.e)({
						kind: i.b.SuccessMod,
						text: s.fbt._("Theme successfully exported", null, {
							hk: "24KHqI"
						})
					}))) : (t(m(b.error)), t(Object(o.e)({
						kind: i.b.Error,
						text: s.fbt._("Sorry, theme failed to export", null, {
							hk: "2MC4jC"
						})
					})))
				}, I = e => async (t, a) => {
					t(E());
					const u = await Object(n.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ImportTheme")]).then(r.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						l = await u(e);
					l.ok ? (t(O()), t(Object(o.e)({
						kind: i.b.SuccessMod,
						text: s.fbt._("Theme successfully imported", null, {
							hk: "42FErS"
						})
					})), 0 !== Object.keys(l.attributes).length && t(Object(c.d)(Object(d.j)(l.attributes)))) : (t(_(l.error)), t(Object(o.e)({
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
		"./src/reddit/actions/frontpage/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			}));
			const s = "PAGE__FRONTPAGE_PENDING",
				n = "PAGE__FRONTPAGE_LOADED",
				a = "PAGE__FRONTPAGE_FAILED",
				c = "PAGE__FRONTPAGE_RELOADED",
				o = "FRONTPAGE__MORE_POSTS_PENDING",
				d = "FRONTPAGE__MORE_POSTS_LOADED",
				i = "FRONTPAGE__MORE_POSTS_FAILED"
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
						s = Object(i.J)(r),
						n = Object(d.b)(r);
					s && Object(d.d)(n) && e(l())
				}, b = () => async (e, t) => {
					const r = t(),
						s = Object(i.J)(r),
						a = Object(d.b)(r),
						c = !!Object(o.a)(r);
					s || c || !Object(d.e)(a) && !Object(d.d)(a) || e(Object(n.e)())
				}, f = e => {
					Object(c.d)(e, {
						experimentName: a.N
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
				e(Object(s.e)({
					duration: 5e3,
					kind: a.b.Error,
					text: Object(n.a)(t)
				}))
			}
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
		"./src/reddit/actions/inFeedChaining.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "e", (function() {
				return v
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/telemetry/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/makeListingKey/index.ts"),
				d = r("./src/reddit/actions/discoveryUnit.ts"),
				i = r("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				u = r("./src/reddit/actions/subreddit/subredditPosts.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/constants/inFeedChaining.ts"),
				b = r("./src/reddit/constants/page.ts"),
				f = r("./src/reddit/helpers/localStorage/index.ts"),
				y = r("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				E = r("./src/reddit/selectors/inFeedChaining.ts"),
				O = r("./src/reddit/selectors/posts.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts");
			const h = "FEED_CHAINING__CHAIN_LOADED",
				I = Object(c.a)(h),
				g = e => {
					const t = Date.now() - e,
						r = Object(f.x)();
					return Object.keys(r).filter(e => r[e].when >= t).map(e => r[e])
				},
				S = ({
					listingName: e,
					listingKey: t,
					postId: r
				}) => async (s, c, l) => {
					if (!r) return;
					const m = Object(O.U)(c(), {
						postId: r
					});
					if (!m) return;
					const h = m.name.toLowerCase(),
						S = e === h;
					if (!(e === b.f || e === b.b || S)) return;
					if (S) return void A(m, t, r)(s, c, l);
					0 === g(a.hb).length && Object(f.nb)(!1);
					let D = c();
					if (Object(E.d)(D, {
							listingKey: t,
							postId: r
						}) || Object(E.a)(D).length >= p.a || Object(f.J)() || g(a.x).length >= p.a) return;
					const T = Object(O.w)(D, {
						listingKey: t,
						postId: r
					});
					if (T && T.isSponsored) return;
					await s(Object(d.g)()), D = c();
					const j = Object(E.b)(D, {
						listingName: e
					});
					if (!j) return;
					if (!m || Object(E.e)(D, {
							subredditId: m.id
						}) || (e => {
							return g(a.x).some(t => t.subredditId === e)
						})(m.id)) return;
					const v = {
						subredditIds: [m.id],
						count: p.b
					};
					await s(Object(i.b)(v));
					const P = Object(i.a)(v);
					D = c();
					const w = Object(_.v)(D, {
						key: P
					});
					0 !== w.length ? (await s((e => async (t, r) => {
						const s = a.Ub.DAY.toUpperCase(),
							n = e.filter(e => {
								const t = Object(o.a)(e, a.P.TOP, {
										t: s
									}),
									n = r();
								return 0 === Object(O.B)(n, {
									listingKey: t
								}).length
							});
						await t(Object(u.b)({
							first: 1,
							range: s,
							sort: a.I.TOP,
							subredditNames: n
						}))
					})(w.map(e => e.name))), D = c(), Object(E.f)(D, {
						postId: r
					}).length < p.c ? Object(n.a)(Object(y.c)(j, "other", m)(D)) : (Object(f.a)(r, m.id), Object(n.a)(Object(y.d)(j, m)(D)), s(I({
						listingKey: t,
						postId: r
					})))) : Object(n.a)(Object(y.c)(j, "no_chaining", m)(D))
				}, D = "FEED_CHAINING__CHAIN_TOGGLED", T = (Object(c.a)(D), "FEED_CHAINING__CHAINING_TOGGLED"), j = Object(c.a)(T), v = () => async e => {
					Object(f.nb)(!0), e(j({
						isDismissed: !0
					})), e(Object(l.e)(Object(l.d)(s.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), m.b.Undo, s.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(f.nb)(!1), e(j({
							isDismissed: !1
						}))
					})))
				}, A = (e, t, r) => async (e, t, r) => {}
		},
		"./src/reddit/actions/inbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "INBOX__COUNT_UPDATE",
				a = Object(s.a)(n)
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
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "LINKED_POSTS__POSTS_LOADED",
				n = "LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/meta.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "META__GEO_CHANGED",
				a = Object(s.a)(n),
				c = "META__META_RECEIVED",
				o = (Object(s.a)(c), "META__SET_LOCALE");
			Object(s.a)(o)
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/profile/index.ts"),
				a = (r("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), r("./src/reddit/models/User/index.ts")),
				c = r("./src/reddit/selectors/user.ts");
			const o = "MOD_PERMS__REQUEST_LOADED",
				d = (Object(s.a)("MOD_PERMS__REQUEST_PENDING"), Object(s.a)(o), Object(s.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const r = Object(c.i)(t());
					if (r) {
						const t = Object(a.e)(r);
						await e(Object(n.b)(t))
					}
				})
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
				return j
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "w", (function() {
				return A
			})), r.d(t, "x", (function() {
				return P
			})), r.d(t, "d", (function() {
				return w
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
				j = 10,
				v = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				A = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				P = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var w;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(w || (w = {}))
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
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
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
				n = "INBOX_NOTIFICATIONS__LOADED",
				a = "INBOX_NOTIFICATIONS__FAILED",
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
						endpoint: `${r?n.a.oauthUrl:n.a.apiUrl}/api/jail/asknicely${r?"":".json"}`,
						method: a.cb.GET,
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
				return n
			}));
			const s = "APPEAL_PAGE_LOADED",
				n = "APPEAL_PAGE_FAILED"
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
				return C
			})), r.d(t, "f", (function() {
				return R
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/difference.js"),
				a = r.n(n),
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
				j = Object(d.a)(g),
				v = Object(d.a)(S),
				A = Object(d.a)(D),
				P = Object(d.a)(T),
				w = e => async (t, r) => {
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
					if (await t(w(e))) return;
					let a = null;
					const c = await b(s(), n);
					if (c.ok) {
						const t = c.body || {},
							s = t.data && t.data.subredditInfoById,
							o = s && s.chatSettings,
							d = !Object(h.c)(r(), n),
							i = Object(O.c)(o, e, d);
						a = {
							...n,
							chatSettings: i
						}
					}
					if (a) t(j(a));
					else {
						const r = c.error || {
							type: o.E.UNKNOWN_ERROR
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
				}, R = (e, t, r) => async (n, c, {
					gqlContext: d
				}) => {
					if (await n(w(e))) return [];
					let i, l = !1;
					const p = a()(r, t),
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
					return l ? (n(P({
						subredditId: e,
						chatSettings: r
					})), n(N(t, p)), r) : (i && n(v({
						subredditId: e,
						error: i
					})), n(P({
						subredditId: e,
						chatSettings: t
					})), n(Object(u.e)({
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
								n = e.find(e => e.settingId === t.settingId);
							if (r && n) {
								const e = r(s(), n.state, t.state);
								Object(c.a)(e)
							}
						}
					})
				}
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "PAGE__MULTIREDDIT_FEED_PENDING",
				n = "PAGE__MULTIREDDIT_FEED_LOADED",
				a = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return k
			})), r.d(t, "PAGE_LOADED", (function() {
				return x
			})), r.d(t, "PAGE_FAILED", (function() {
				return U
			})), r.d(t, "pagePending", (function() {
				return M
			})), r.d(t, "pageLoaded", (function() {
				return F
			})), r.d(t, "pageFailed", (function() {
				return G
			})), r.d(t, "postCreationPageDataRequested", (function() {
				return q
			})), r.d(t, "postCreationPageRequested", (function() {
				return H
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/filterQueryParams/index.ts"),
				c = r("./src/lib/isFakeSubreddit/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makePostCreationPageKey/index.ts"),
				i = r("./src/lib/pageTitle.ts"),
				u = r("./src/reddit/actions/contentControls/index.ts"),
				l = r("./src/reddit/actions/economics/helpers/async.ts"),
				p = r("./src/reddit/actions/externalAccount.ts"),
				b = r("./src/reddit/actions/gold/powerups.ts"),
				f = r("./src/reddit/actions/platform.ts"),
				y = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/postCreation/general.ts"),
				E = r("./src/reddit/actions/profile/index.ts"),
				O = r("./src/reddit/actions/subreddit.ts"),
				_ = r("./src/reddit/actions/subredditDuplicates.ts"),
				h = r("./src/config.ts"),
				I = r("./src/lib/makeApiRequest/index.ts"),
				g = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				D = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = r("./src/reddit/helpers/trackers/postComposer.ts"),
				j = r("./src/reddit/models/User/index.ts"),
				v = r("./src/reddit/selectors/contentControls.ts"),
				A = r("./src/reddit/selectors/postCollection.ts"),
				P = r("./src/reddit/selectors/postCreations.ts"),
				w = r("./src/reddit/selectors/posts.ts"),
				C = r("./src/reddit/selectors/profile.ts"),
				R = r("./src/reddit/selectors/subreddit.ts"),
				L = r("./src/reddit/selectors/user.ts");
			const N = e => {
					const t = e.platform.currentPage;
					let r = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: s
						} = t.urlParams, n = Object(R.A)(e, {
							subredditName: s
						});
						n && (r = n.name)
					}
					return Object(i.i)(r)
				},
				k = "POST_CREATION__PAGE_PENDING",
				x = "POST_CREATION__PAGE_LOADED",
				U = "POST_CREATION__PAGE_FAILED",
				M = Object(o.a)(k),
				F = Object(o.a)(x),
				G = Object(o.a)(U),
				B = () => async (e, t) => {
					const r = t(),
						s = Object(P.a)(r);
					s !== Object(P.fb)(r) && e(Object(m.g)({
						submissionType: s
					}))
				}, q = e => async (t, r, s) => {
					const {
						collectionId: a,
						profileName: o,
						subredditName: i
					} = e, l = Object(d.a)(e), f = r(), y = f.creations.api.page.pending[l], m = f.creations.api.page.fetched[l], _ = f.creations.api.page.error[l];
					if (y) return;
					if (m && !_) return void t(B());
					const S = [];
					t(M({
						key: l
					}));
					let T = i;
					!i && o && (T = `u_${o}`), S.push(((e, t) => Object(I.a)(e, {
						method: n.cb.GET,
						endpoint: Object(g.a)(`${h.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(s.apiContext(), {
						subredditName: T,
						collectionId: a
					})), o && (S.push(t(E.d(o))), S.push(t(E.b(o))));
					const [A] = await Object(D.a)("postCreation", () => Promise.all(S));
					if (A.ok) {
						const e = A.body,
							{
								posts: s = {},
								subredditAboutInfo: n
							} = e;
						if (t(F({
								key: l,
								meta: f.meta,
								...e,
								posts: s
							})), !Object(L.J)(r())) return;
						if (n) {
							const e = Object.keys(n)[0];
							await t(Object(b.f)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(B());
						const a = [];
						a.push(t(p.o()));
						const o = Object(L.i)(r());
						if (o && o.hasUserProfile && a.push(t(E.d(Object(j.e)(o)))), i && !Object(c.a)(i)) {
							a.push(t(O.o(i))), !!Object(v.b)(r(), {
								subredditName: i
							}) || a.push(t(Object(u.a)(i)))
						}
						await Promise.all(a)
					} else t(G({
						error: A.error,
						key: l
					}))
				}, H = e => async (t, r) => {
					const {
						subredditName: c,
						profileName: o
					} = e.params, d = e.queryParams, i = d.collection;
					if (await t(q({
							collectionId: i,
							profileName: o,
							subredditName: c
						})), !Object(L.J)(r())) return void Object(S.a)(t, r());
					let u;
					if (c ? (u = Object(R.A)(r(), {
							subredditName: c
						}), await t(Object(l.a)({
							subredditName: c
						}))) : o && (u = Object(C.j)(r(), {
							profileName: o
						})), d.source_id) await t(((e, t) => async (r, s) => {
						const {
							subredditName: n,
							profileName: a
						} = e, c = [];
						let o;
						n ? o = Object(R.F)(s(), n) : a && (o = Object(L.db)(s(), {
							userName: a
						})), o && c.push(r(Object(_.b)(o, t))), c.push(r(Object(y.K)(t))), await Promise.all(c);
						const d = Object(w.f)(s(), {
							postId: t
						});
						r(Object(m.k)({
							postId: t,
							postTitle: d ? d.title : ""
						}))
					})(e.params, d.source_id));
					else if (i) {
						const n = Object(A.q)(r(), {
							collectionId: i
						});
						u && n && n.subredditId === u.id || t(Object(s.c)(Object(a.a)(e.url, ["collection"])))
					}((e, t) => {
						const r = e.platform.lastPage;
						t && r && r.meta && r.meta.name === n.Db.POST_CREATION && T.x(e)
					})(r(), c), t(f.l({
						title: N(r())
					}))
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return b
			})), r.d(t, "PAGE_LOADED", (function() {
				return f
			})), r.d(t, "PAGE_FAILED", (function() {
				return y
			})), r.d(t, "pagePending", (function() {
				return m
			})), r.d(t, "pageLoaded", (function() {
				return E
			})), r.d(t, "pageFailed", (function() {
				return O
			})), r.d(t, "postDraftPageDataRequested", (function() {
				return _
			})), r.d(t, "postDraftRequested", (function() {
				return h
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/makePostDraftPageKey/index.ts"),
				a = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/config.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = r("./src/reddit/endpoints/post/draft/helpers.ts"),
				p = r("./src/reddit/helpers/timeApiRoute/index.ts");
			const b = "POST_DRAFT__PAGE_PENDING",
				f = "POST_DRAFT__PAGE_LOADED",
				y = "POST_DRAFT__PAGE_FAILED",
				m = Object(s.a)(b),
				E = Object(s.a)(f),
				O = Object(s.a)(y),
				_ = e => async (t, r, s) => {
					const {
						draftId: b,
						profileName: f
					} = e, y = Object(n.a)(e), m = r(), _ = m.creations.api.page.pending[y], h = m.creations.api.page.fetched[y], I = m.creations.api.page.error[y];
					if (_ || h && !I || !b) return;
					t(a.d(f));
					const g = await Object(p.a)("postDraft", () => ((e, t, r) => Object(d.a)(e, {
						endpoint: Object(i.a)(Object(u.a)(`${c.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${t}`)),
						method: o.cb.GET
					}))(s.apiContext(), b, f));
					if (g.ok) {
						const e = g.body;
						e.drafts[b].kind = Object(l.b)(e.drafts[b].kind), t(E({
							...e,
							key: y
						}))
					} else t(O({
						error: g.error,
						key: y
					}))
				}, h = e => async (t, r, s) => {
					await t(_(e.params))
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
					const s = [t(n.z()), t(Object(a.d)(e.params.profileName))];
					await Promise.all(s);
					const u = Object(i.i)(r());
					u ? (await t(Object(a.b)(Object(d.e)(u))), t(l()), Object(o.p)(r(), !0)) : Object(c.a)(t, r())
				}
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PROFILE_POSTS_PENDING", (function() {
				return A
			})), r.d(t, "PROFILE_POSTS_LOADED", (function() {
				return P
			})), r.d(t, "PROFILE_POSTS_FAILED", (function() {
				return w
			})), r.d(t, "profilePostsPending", (function() {
				return C
			})), r.d(t, "profilePostsLoaded", (function() {
				return R
			})), r.d(t, "profilePostsFailed", (function() {
				return L
			})), r.d(t, "profilePostsRequested", (function() {
				return N
			})), r.d(t, "MORE_POSTS_PENDING", (function() {
				return k
			})), r.d(t, "MORE_POSTS_LOADED", (function() {
				return x
			})), r.d(t, "MORE_POSTS_FAILED", (function() {
				return U
			})), r.d(t, "morePostsPending", (function() {
				return M
			})), r.d(t, "morePostsLoaded", (function() {
				return F
			})), r.d(t, "morePostsFailed", (function() {
				return G
			})), r.d(t, "morePostsRequested", (function() {
				return B
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/pick.js"),
				n = r.n(s),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				o = r("./src/reddit/actions/contentGate.ts"),
				d = r("./src/reddit/actions/externalAccount.ts"),
				i = r("./src/reddit/actions/moderatingSubreddits.ts"),
				u = r("./src/reddit/actions/pages/profileShared.ts"),
				l = r("./src/reddit/actions/pinnedPost.ts"),
				p = r("./src/reddit/actions/platform.ts"),
				b = r("./src/reddit/actions/profile/index.ts"),
				f = r("./src/reddit/actions/subreddit.ts"),
				y = r("./src/reddit/constants/errors.ts"),
				m = r("./src/reddit/constants/parameters.ts"),
				E = r("./src/reddit/contexts/PageLayer/index.tsx"),
				O = r("./src/config.ts"),
				_ = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				h = r("./src/lib/constants/index.ts"),
				I = r("./src/lib/makeApiRequest/index.ts"),
				g = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const S = (e, t, r) => Object(I.a)(e, {
				data: r,
				endpoint: Object(_.a)(Object(g.a)(`${O.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`)),
				method: h.cb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var D = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				T = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				j = r("./src/reddit/selectors/listings.ts"),
				v = r("./src/reddit/selectors/profile.ts");
			const A = "PAGE__PROFILE_POSTS_PENDING",
				P = "PAGE__PROFILE_POSTS_LOADED",
				w = "PAGE__PROFILE_POSTS_FAILED",
				C = Object(a.a)(A),
				R = Object(a.a)(P),
				L = Object(a.a)(w),
				N = e => async (t, r, s) => {
					const {
						queryParams: a,
						params: O
					} = e, {
						sort: _,
						t: h
					} = Object(u.b)(a), {
						profileName: I
					} = O, g = Object(c.a)(`u_${I}`, _, a), A = r(), P = A.listings.postOrder.ids[g], w = Object(j.c)(A, {
						listingKey: g
					}), N = Object(j.d)(A, {
						listingKey: g
					});
					if (await t(b.d(I)), N || P && !w) {
						if (P) {
							const e = Object(v.q)(r(), {
								profileName: I
							});
							t(p.l({
								title: e
							}))
						}
						return
					}
					const k = {
						...n()(e.queryParams, [...m.l, ...m.k, m.h]),
						layout: Object(E.N)(A, {}).toLowerCase(),
						sort: _,
						t: Object(D.a)(_, h)
					};
					t(C({
						key: g
					}));
					const x = await Object(T.a)("profilePosts", () => S(s.apiContext(), I, k));
					if (!x.ok) return t(L({
						account: x.body.data ? x.body.data.account : null,
						error: x.body.reason ? {
							type: x.body.reason
						} : x.error,
						key: g
					})), x.body.reason === y.a.DeletedProfile && t(Object(o.p)({
						profileName: I
					})), void t(p.m(x.status));
					const U = x.body;
					t(R({
						key: g,
						meta: r().meta,
						...U
					}));
					const M = Object(v.m)(r(), I),
						{
							pinned: F
						} = U;
					t(Object(l.h)({
						profileId: M,
						pinned: F
					})), await Promise.all([t(Object(u.c)(I)), t(Object(f.q)()), t(Object(i.b)()), t(d.o(I))])
				}, k = "PROFILE_POSTS__MORE_POSTS_PENDING", x = "PROFILE_POSTS__MORE_POSTS_LOADED", U = "PROFILE_POSTS__MORE_POSTS_FAILED", M = Object(a.a)(k), F = Object(a.a)(x), G = Object(a.a)(U), B = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t(),
						{
							currentPage: a
						} = s.platform;
					if (!a || !a.routeMatch) return;
					const {
						queryParams: o,
						params: d
					} = a.routeMatch.match, {
						sort: i,
						t: l
					} = Object(u.b)(o), {
						profileName: p
					} = d, b = Object(c.a)(`u_${p}`, i, o), f = Object(j.g)(s, {
						listingKey: b
					});
					if (!f) return;
					const y = Object(j.d)(s, {
							listingKey: b
						}),
						O = Object(j.e)(s, {
							listingKey: b,
							token: f.token
						});
					if (y || O) return;
					e(M({
						key: b,
						fetchedToken: f.token
					}));
					const _ = {
							after: f.token,
							dist: f.dist,
							sort: i,
							t: l,
							...n()(o, m.l),
							layout: Object(E.N)(s, {}).toLowerCase()
						},
						h = await S(r(), p, _),
						I = s.listings.postOrder.ids[b],
						g = h.body.postIds || [],
						D = {
							...h.body,
							postIds: g.filter(e => !I || !I.includes(e))
						};
					h.ok ? (e(F({
						fetchedToken: f.token,
						key: b,
						meta: s.meta,
						...D
					})), await e(Object(u.c)(p))) : e(G({
						account: h.body.data ? h.body.data.account : null,
						error: h.error,
						fetchedToken: f.token,
						key: b
					}))
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
				return m
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/me/index.ts"),
				a = r("./src/graphql/operations/UserDataExportEligibility.json"),
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
					const m = await Object(n.a)(r());
					if (!m.ok || !m.body) return void e(y(m.error));
					if (!m.body.account) return void Object(o.a)(e, u);
					const E = await (e => Object(c.a)(e, {
						...a
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
				return n
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "POLLS__POLL_CREATION_UPDATED",
				a = Object(s.a)(n)
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return g
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "c", (function() {
				return j
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/addQueryParams/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/filterQueryParams/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/actions/pages/postCreation.ts"),
				u = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = r("./src/reddit/helpers/name/index.ts"),
				p = r("./src/reddit/models/PostCreationForm/index.ts"),
				b = r("./src/reddit/routes/postCreation/index.ts"),
				f = r("./src/reddit/routes/postCreation/constants.ts"),
				y = r("./src/reddit/selectors/postCreations.ts"),
				m = r("./src/reddit/selectors/platform.ts"),
				E = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/actions/postCreation/constants.ts"),
				_ = r("./src/reddit/actions/postCreation/general.ts");
			const h = Object(o.a)(O.J),
				I = Object(o.a)(O.K),
				g = Object(o.a)(O.I),
				S = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					let c = s();
					const {
						name: o,
						isProfile: b
					} = e, f = Object(m.e)(c), O = f && !b && Object(l.a)(f.name, o), _ = c.creations.api.subreddit.change.pending;
					if (O || _) return;
					const I = Object(u.u)(t);
					if (!o) return void r(D(e, I));
					r(h(e));
					const g = b ? {
						profileName: o
					} : {
						subredditName: o
					};
					if (await r(Object(i.postCreationPageDataRequested)(g)), b || !Object(y.x)(c)) return r(D(e, I));
					const S = e.allowedPostTypes || Object(E.z)(s(), {
						subredditName: o
					});
					if (!S) return void r(D(e, I));
					let T;
					c = s();
					const j = Object(y.fb)(c),
						v = Object(y.x)(c);
					if (j === a.Lb.MEDIA && v) {
						const e = Object(y.P)(c),
							t = Object(p.v)(e),
							r = Object(y.G)(c) && e.items.length > 1,
							s = !t && !r;
						if (r && !S.galleries) T = p.p.GalleryWillBeRemovedGalleryNotAllowed;
						else if (s && !S.images) T = p.p.ImageWillBeRemoved;
						else if (t && !S.videos) {
							const t = c.uploads[e.items[0].uploadKey],
								r = t && t.metadata.videoDuration || 0;
							S.images ? r > a.Z && (T = p.p.VideoWillBeRemovedTooLongForGif) : T = p.p.VideoWillBeRemovedMediaNotAllowed
						}
					}
					r(T ? Object(d.i)(T) : D({
						...e,
						allowedPostTypes: S
					}, I))
				}, D = (e, t, r = !0) => async (a, c) => {
					const {
						name: o,
						isProfile: d
					} = e, i = c().platform.currentPage, u = i.queryParams, l = d ? b.b : b.c;
					let p = "";
					p = o ? l(o) : f.b, p = Object(n.a)(p, {
						...u,
						draft: t || u.draft
					}), (t || i.url.toLowerCase() !== p.toLowerCase()) && (a(I(e)), r && a(Object(_.q)(!0)), a(Object(_.i)()), a(Object(s.c)(p)))
				}, T = e => async (t, r) => {
					const a = r().platform.currentPage,
						c = a.queryParams,
						o = Object(n.a)(a.url, {
							...c,
							collection: e
						});
					t(Object(s.c)(o))
				}, j = () => async (e, t) => {
					const r = t().platform.currentPage,
						n = Object(c.a)(r.url, ["collection"]);
					e(Object(s.c)(n))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return w
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "p", (function() {
				return x
			})), r.d(t, "j", (function() {
				return U
			})), r.d(t, "l", (function() {
				return M
			})), r.d(t, "i", (function() {
				return F
			})), r.d(t, "m", (function() {
				return G
			})), r.d(t, "k", (function() {
				return B
			})), r.d(t, "h", (function() {
				return q
			})), r.d(t, "n", (function() {
				return H
			})), r.d(t, "s", (function() {
				return X
			})), r.d(t, "r", (function() {
				return Y
			})), r.d(t, "g", (function() {
				return J
			})), r.d(t, "q", (function() {
				return ee
			})), r.d(t, "c", (function() {
				return te
			})), r.d(t, "a", (function() {
				return re
			})), r.d(t, "b", (function() {
				return se
			})), r.d(t, "o", (function() {
				return oe
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/formatApiError/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/postCreation/general.ts"),
				o = r("./src/reddit/actions/postCreation/subredditChange.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				l = r("./src/lib/omitHeaders/index.ts"),
				p = r("./src/reddit/models/StructuredStyles/index.ts");
			var b = r("./src/reddit/constants/headers.ts"),
				f = r("./src/reddit/helpers/name/index.ts"),
				y = r("./src/reddit/models/PostDraft/index.ts"),
				m = r("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				E = r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				O = r("./src/reddit/models/Subreddit/index.ts");
			const _ = e => {
				let t = e.drafts.reduce((e, t) => {
					const r = (e => {
						let t;
						return t = "link" === e.kind ? {
							kind: y.b.Link,
							body: e.body || void 0
						} : "markdown" === e.kind ? {
							kind: y.b.Markdown,
							body: e.body || void 0
						} : {
							kind: y.b.RichText,
							body: e.body || void 0
						}, {
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
							title: e.title || "",
							...t
						}
					})(t);
					return e.postDraftIds.push(r.id), e.postDrafts[r.id] = r, e
				}, {
					postDraftIds: [],
					postDrafts: {},
					profiles: {},
					subreddits: {}
				});
				return t = e.subreddits.reduce((e, t) => {
					if (t.subreddit_type === O.e.User) {
						const r = Object(m.a)(t, Object(f.g)(t.display_name_prefixed));
						e.profiles[r.id] = r
					} else {
						const r = Object(E.a)(t);
						e.subreddits[r.id] = r
					}
					return e
				}, t)
			};
			var h = r("./src/reddit/endpoints/post/draft/helpers.ts"),
				I = r("./src/reddit/models/PostCreationForm/index.ts"),
				g = r("./src/reddit/helpers/trackers/postComposer.ts"),
				S = r("./src/reddit/models/Toast/index.ts"),
				D = r("./src/reddit/models/User/index.ts"),
				T = r("./src/reddit/selectors/postCreations.ts"),
				j = r("./src/reddit/selectors/postDraft.ts"),
				v = r("./src/reddit/selectors/profile.ts"),
				A = r("./src/reddit/selectors/subreddit.ts"),
				P = r("./src/reddit/selectors/user.ts");
			const w = "POST_DRAFT__LIST_PENDING",
				C = "POST_DRAFT__LIST_LOADED",
				R = "POST_DRAFT__LIST_FAILED",
				L = Object(a.a)(w),
				N = Object(a.a)(C),
				k = Object(a.a)(R),
				x = () => async (e, t, {
					apiContext: r
				}) => {
					const n = t();
					if (!Object(P.i)(n) || Object(j.b)(n)) return;
					e(L());
					const a = await (e => Object(u.a)(Object(l.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: s.cb.GET
					}))(r());
					a.ok ? e(N(_(a.body))) : e(k(a.error))
				}, U = "POST_DRAFT__SAVE_DRAFT_PENDING", M = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", F = "POST_DRAFT__SAVE_DRAFT_FAILED", G = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", H = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", K = Object(a.a)(U), V = Object(a.a)(M), W = Object(a.a)(F), $ = Object(a.a)(G), Q = Object(a.a)(B), z = Object(a.a)(q), X = Object(a.a)(H), Y = e => async (t, r, {
					apiContext: a
				}) => {
					const c = r(),
						i = Object(j.g)(c),
						p = Object(T.U)(c);
					if (i || p) return;
					const f = Object(j.h)(c, e);
					if (!f) return;
					t(K(f)), g.e(c, f);
					const y = await ((e, t, r) => Object(u.a)(Object(l.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: r ? s.cb.PUT : s.cb.POST,
						data: Object(h.a)(t)
					}).then(e => e.body.fields && Object(I.u)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: s.E.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(a(), f, e);
					if (y.ok) {
						const {
							id: r,
							draftsCount: s
						} = Object(h.c)(y.body);
						t(V({
							draftId: r,
							draftsCount: s
						})), e || t(Object(o.a)(f.destSubreddit, r, !1))
					} else {
						const e = y.error;
						e.type === s.E.BAD_CAPTCHA_ERROR ? t(z()) : e.type === s.E.VALIDATION_ERROR ? t($(e)) : e.type === s.E.SUBMIT_VALIDATION_ERROR ? t(Q(e)) : t(W(e)), t(Object(d.e)({
							duration: d.a,
							kind: S.b.Error,
							text: Object(n.a)(e)
						}))
					}
				}, J = "POST_DRAFT__LOAD_DRAFT", Z = Object(a.a)(J), ee = e => async (t, r, {
					apiContext: s
				}) => {
					t(Z(e));
					let n = I.e;
					const a = r();
					if (e.subredditId) {
						const t = Object(A.S)(a, {
								subredditId: e.subredditId
							}),
							r = Object(v.p)(a, {
								profileId: e.subredditId
							}),
							s = Object(P.i)(a);
						t ? n = {
							isProfile: !1,
							name: t.name
						} : r && s && (n = {
							isProfile: !0,
							name: Object(D.e)(s)
						})
					}
					await t(Object(o.a)(n, e.id, !1));
					const c = Object(j.h)(r(), e.id);
					c && g.h(r(), c)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", re = "POST_DELETE_DRAFT_FAILED", se = "POST_DELETE_DRAFT_PENDING", ne = Object(a.a)(te), ae = Object(a.a)(re), ce = Object(a.a)(se), oe = (e, t) => async (r, a, {
					apiContext: o
				}) => {
					const b = a();
					if (Object(j.a)(b, e)) return;
					const f = Object(j.d)(b, {
						draftId: e
					});
					f && g.f(b, f), r(ce({
						draftId: e
					}));
					const y = await (async (e, t) => Object(u.a)(Object(l.a)(e, [p.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: s.cb.DELETE
					}))(o(), e);
					if (y.ok) {
						const {
							draftsCount: s
						} = Object(h.c)(y.body);
						r(ne({
							draftId: e,
							draftsCount: s
						}));
						const n = Object(i.u)(t);
						e === n && r(Object(c.o)(!0, t))
					} else {
						const t = y.error;
						r(ae({
							draftId: e,
							apiError: t
						})), r(Object(d.e)({
							duration: d.a,
							kind: S.b.Error,
							text: Object(n.a)(t)
						}))
					}
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
					const a = await Object(n.b)(s(), e);
					if (a.ok) {
						const r = a.body.data.postInfoById.crowdControlLevel;
						t(c({
							[e]: r
						}))
					}
				}
		},
		"./src/reddit/actions/postList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = (r("./src/reddit/actions/embedAndImage.ts"), r("./src/reddit/actions/video.ts"), r("./src/reddit/helpers/trackers/postList.ts"));
			r("./src/reddit/constants/postLayout.ts"), r("./src/reddit/selectors/platform.ts"), r("./src/reddit/selectors/posts.ts");
			r("./src/reddit/selectors/video.ts");
			const a = "POSTLIST__MARKED_END",
				c = "POSTLIST__UNMARKED_END",
				o = Object(s.a)(a),
				d = Object(s.a)(c),
				i = (e, t) => async (r, s) => {
					const a = s();
					e in a.listings.postOrder.fetchedTokens ? e in a.listings.postOrder.ids ? r(d({
						listingKey: e
					})) : n.j(a, e) : r(o({
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
						if (r.ok && i && (o = await Object(a.c)(s(), d.subredditId, i.id)), r.ok) {
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
						})), Object(n.a)(t, r.error)
					}
				}, g = ({
					subredditId: e
				}) => async (t, r, {
					apiContext: s
				}) => {
					t(h({
						subredditId: e
					}));
					const n = await Object(c.a)(s(), e);
					n.ok ? t(O({
						subredditId: e,
						products: n.body
					})) : t(_({
						subredditId: e,
						error: n.error
					}))
				}
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return A
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "d", (function() {
				return w
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
						const n = s.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
						return e.replace(n, s.indent.repeat(t))
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
			const j = e => g.d.reCaptchaEnterprise(e) && !Object(T.d)(e),
				v = e => !!Object(D.c)(e, {
					experimentEligibilitySelector: Object(S.d)(Object(S.b)(...a.c)),
					experimentName: b.Hc
				}),
				A = Object(s.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				P = Object(s.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				w = Object(s.b)("SEND_RECAPTCHA_TOKEN"),
				C = e => u(e => p()([j, v, e => e.tracking.reCaptchaEnterprise.send === s.a.New && e.tracking.reCaptchaEnterprise.execute === s.a.Succeeded && e.tracking.reCaptchaEnterprise.load === s.a.Succeeded], t => t(e)))(async (t, r, {
					gqlContext: s
				}) => {
					t(w.requested());
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
								errors: n
							} = r.body.data.verifyRecaptchaToken;
							if (n && n.length > 0) throw new AggregateError_AggregateError(n);
							if (!s) throw new RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError
						})(s(), e), t(w.succeeded())
					} catch (n) {
						throw t(w.failed()), n
					}
				}),
				R = (e, t) => Object(S.g)(t) ? (e => `STAGING__${e}`)(e) : e,
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
							t(P.requested());
							try {
								const r = await d.b.execute(e);
								return t(P.succeeded({
									token: r
								})), r
							} catch (r) {
								throw t(P.failed()), r
							}
						}))({
							action: R(e, a)
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
		"./src/reddit/actions/redditEmbed.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "c", (function() {
				return f
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/tabBadging.ts"),
				c = r("./src/reddit/endpoints/me/index.ts"),
				o = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = r("./src/reddit/helpers/trackers/screenview.ts");
			const i = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(n.a)("REDDIT_EMBED_PENDING"),
				p = Object(n.a)(i),
				b = Object(n.a)(u),
				f = (e, t) => async (e, r, {
					apiContext: s
				}) => {
					const n = r();
					e(l());
					const d = await Object(c.a)(s());
					d.ok && d.body ? !t || d.body.account ? (e(p(d.body)), e(Object(a.d)()), y(n)) : Object(o.a)(e, n) : e(b(d.error))
				}, y = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === s.Db.INBOX_PAGES && Object(d.g)(e)
				}
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
						method: a.cb.GET
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
						method: a.cb.GET
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
				j = () => s.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				v = () => s.fbt._("Failed to update scheduled post", null, {
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
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/streaming/constants.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/graphql/operations/FetchSubredditStreamingModSettings.json"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/graphql/operations/UpdateSubredditStreamingModSettings.json"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const p = Object(n.a)(a.a),
				b = "STREAMING_MOD_SETTINGS__UPDATE_PENDING",
				f = "STREAMING_MOD_SETTINGS__UPDATE_LOADED",
				y = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				m = Object(n.a)(b),
				E = Object(n.a)(f),
				O = Object(n.a)(y),
				_ = e => async (t, r, {
					gqlContext: n
				}) => {
					const a = Object(l.S)(r(), {
						subredditId: e
					});
					if (void 0 === a) {
						const e = s.fbt._("Invalid subreddit", null, {
								hk: "2iUXvs"
							}),
							r = Object(c.d)(e, u.b.Error);
						return await t(Object(c.e)({
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
					}))(n(), e);
					if (!i.ok) {
						const e = s.fbt._("Could not fetch settings for {subredditName}", [s.fbt._param("subredditName", a.name)], {
								hk: "2G8rnU"
							}),
							r = Object(c.d)(e, u.b.Error);
						return await t(Object(c.e)({
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
					await r(I(t, e, n())), r(_(t))
				}, I = (e, t, r) => async (r, n, {
					gqlContext: a
				}) => {
					r(m({
						subredditId: e
					}));
					const o = await ((e, t) => Object(d.a)(e, {
						...i,
						variables: t
					}))(a(), {
						input: {
							subredditId: e,
							liveStreamingModeratorSettings: t
						}
					});
					if (!o.ok || !o.body.data.updateSubredditLiveStreamingModeratorSettings.ok) {
						const t = o.error && o.error.fields ? o.error.fields[0].msg : s.fbt._("Could not update community broadcasting settings", null, {
								hk: "3Uw7zu"
							}),
							n = Object(c.d)(t, u.b.Error);
						await r(Object(c.e)({
							...n,
							duration: c.a
						})), r(O({
							subredditId: e
						}))
					}
					const l = s.fbt._("Community broadcasting settings saved", null, {
							hk: "GTwrg"
						}),
						p = Object(c.d)(l, u.b.SuccessCommunity);
					await r(Object(c.e)({
						...p,
						duration: c.a
					})), r(E({
						subredditId: e
					}))
				}, g = (e, t, r) => async (s, n, {
					gqlContext: a
				}) => {
					const c = [...r.whitelistedUsers.map(e => ({
						redditorName: e.name
					})), {
						redditorName: t
					}];
					await s(I(e, {
						whitelistedRedditors: c
					}, a())), await s(_(e))
				}, S = (e, t, r) => async (s, n, {
					gqlContext: a
				}) => {
					const c = r.whitelistedUsers.filter(e => e.name !== t).map(e => ({
						redditorName: e.name
					}));
					await s(I(e, {
						whitelistedRedditors: c
					}, a())), await s(_(e))
				}
		},
		"./src/reddit/actions/subreddit/similarSubreddit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return m
			}));
			var s, n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/subreddit/constants.ts"),
				c = r("./src/reddit/endpoints/category/subreddits.ts"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				u = r("./src/reddit/constants/headers.ts");
			! function(e) {
				e.Factorization = "factorization", e.CustomModRelevant = "custom_mod_relevant"
			}(s || (s = {}));
			var l = r("./src/reddit/selectors/subreddit.ts");
			const p = e => {
					let t = e.subredditIds.join(",");
					return e.count && (t += `--[count:'${e.count}']`), e.variant && (t += `--[variant:'${e.variant}']`), t.toLowerCase()
				},
				b = Object(n.a)(a.q),
				f = Object(n.a)(a.p),
				y = Object(n.a)(a.o),
				m = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r(),
						a = p(e),
						m = Object(l.u)(n, {
							key: a
						}),
						E = Object(l.t)(n, {
							key: a
						});
					if (m || E.length > 0) return;
					t(b({
						key: a
					}));
					const O = await ((e, t) => Object(d.a)(Object(i.a)(e, [u.a]), {
						data: {
							sr_fullnames: t.subredditIds.join(","),
							limit: t.count,
							variant: t.variant
						},
						endpoint: `${e.apiUrl}/api/similar_subreddits.json`,
						method: o.cb.GET
					}))(s(), e);
					if (O.ok) {
						const e = Object(c.b)(O.body);
						t(f({
							key: a,
							...e
						}))
					} else {
						const e = O.error;
						t(y({
							key: a,
							error: e
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/subredditPosts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return B
			})), r.d(t, "a", (function() {
				return q
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/makeLinkedPostsListingKey/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				o = r("./src/reddit/actions/googleQASchema/constants.ts");
			const d = Object(n.a)(o.b),
				i = Object(n.a)(o.a);
			var u = r("./src/reddit/actions/linkedPosts/constants.ts");
			const l = Object(n.a)(u.b),
				p = Object(n.a)(u.a);
			var b = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				f = r("./src/lib/makeGqlRequest/index.ts"),
				y = (r("./src/graphql/operations/OtherDiscussions.json"), r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				m = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				E = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = r("./src/reddit/models/Post/index.ts");
			var h = ({
				getState: e,
				onFailure: t,
				onSuccess: r,
				postId: s,
				response: n
			}) => {
				if (!n.ok) return void t(n.error);
				const a = n.body,
					{
						post: o
					} = a && a.data,
					d = e(),
					i = Object(c.a)(s, null, {
						isOtherDiscussions: !0
					});
				if (o) {
					if (o.otherDiscussions && o.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = o, {
							postFlair: n,
							postIds: a,
							posts: c,
							profiles: u,
							subreddits: l
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								r = e => {
									const r = Object(m.e)(e);
									t.posts[r.id] = r;
									const {
										crosspostRoot: s
									} = e;
									if (s && s.type === _.a.Post && s.postInfo) {
										const e = Object(m.e)(s.postInfo);
										t.posts[e.id] = e
									}
									return Object(_.k)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(E.a)(e.profile)) : Object(_.l)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(O.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(y.a)(e.subreddit))), r.id
								};
							if (e && e.edges)
								for (const {
										node: s
									} of e.edges) {
									const e = r(s);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						r({
							count: t,
							key: i,
							meta: d.meta,
							postFlair: n,
							postId: s,
							postIds: a,
							posts: c,
							profiles: u,
							subreddits: l
						})
					}
				} else r({
					count: 0,
					key: i,
					meta: d.meta,
					postFlair: {},
					postId: s,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const I = Object(n.a)(b.a),
				g = Object(n.a)(b.b),
				S = Object(n.a)(b.c);
			var D = r("./src/reddit/actions/subreddit/constants.ts"),
				T = r("./src/graphql/operations/PostFeedAndOtherDiscussions.json"),
				j = (r("./src/graphql/operations/SubredditPosts.json"), r("./src/graphql/operations/SubredditsPosts.json"));
			var v = ({
				getState: e,
				onSuccess: t,
				onFailure: r,
				postId: s,
				post: n
			}) => {
				try {
					t({
						altText: n && n.media && (n.media.still && n.media.still.altText || n.media.obfuscated && n.media.obfuscated.altText) || null,
						postId: s
					})
				} catch (a) {
					r(a)
				}
			};
			var A = ({
					getState: e,
					onSuccess: t,
					onFailure: r,
					postId: s,
					post: n
				}) => {
					try {
						const r = [],
							c = {},
							o = {};
						if (!n || !n.linked) return;
						const d = e(),
							i = d.posts && d.posts.models,
							u = Object(a.a)(s),
							l = n.linked.posts && n.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e) break;
							if (e.id && !i.hasOwnProperty(e.id)) {
								r.push(e.id);
								const t = Object(m.a)(e);
								c[e.id] = t.post, t.crosspost && (c[t.crosspost.id] = t.crosspost)
							}
							if (Object(_.l)(e)) {
								const {
									subreddit: t
								} = e;
								o[t.id] = Object(O.a)(t)
							}
						}
						t({
							dist: n.linked.posts && n.linked.posts.dist || null,
							key: u,
							meta: d.meta,
							posts: c,
							postIds: r,
							subreddits: o
						})
					} catch (c) {
						r(c)
					}
				},
				P = r("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var w = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var C = ({
					getState: e,
					onSuccess: t,
					onFailure: r,
					options: n,
					subreddit: a
				}) => {
					try {
						if (!a) return;
						const r = a.elements || a.posts,
							o = e(),
							d = ((e, t) => {
								const {
									edges: r
								} = e, s = r.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: s
								}
							})(r, o.posts && o.posts.models);
						if (!d.edges.length) return;
						const i = Object(P.a)(d),
							{
								range: u,
								sort: l,
								subredditName: p
							} = n,
							b = Object(c.a)(p, s.P[l], {
								t: u
							}),
							f = w(i),
							y = i.map(e => e.id);
						t({
							dist: r.dist,
							key: b,
							meta: o.meta,
							postIds: y,
							posts: f
						})
					} catch (o) {
						r(o)
					}
				},
				R = r("./src/reddit/models/Media/index.ts"),
				L = r("./src/reddit/selectors/posts.ts"),
				N = r("./src/reddit/actions/imageOCRAltText/constants.ts");
			const k = Object(n.a)(N.b),
				x = Object(n.a)(N.a),
				U = Object(n.a)(D.k),
				M = Object(n.a)(D.j),
				F = Object(n.a)(D.s),
				G = Object(n.a)(D.r),
				B = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = (await ((e, t) => Object(f.a)(e, {
							...j,
							variables: t
						}))(s(), e)).body,
						{
							subredditNames: a,
							...c
						} = e,
						o = [];
					try {
						for (const e of n.data.subredditsInfoByNames) {
							const t = e.elements.edges[0];
							t && Object(_.l)(t.node) && C({
								getState: r,
								onFailure: e => {
									throw e
								},
								onSuccess: e => o.push(e),
								options: {
									...c,
									subredditName: t.node.subreddit.name
								},
								subreddit: e
							})
						}
						t(F(o))
					} catch (d) {
						t(G(d))
					}
				}, q = e => async (t, r, {
					gqlContext: n
				}) => {
					var o;
					const {
						includePostImageOCRAltText: u,
						includeListingBelowExperiment: b,
						includeOtherDiscussions: y,
						includePostFeed: m,
						includePostQASchemaEligibilityFlag: E,
						postId: O,
						range: _,
						sort: D,
						subredditName: j
					} = e, P = Object(c.a)(O, null, {
						isOtherDiscussions: !0
					}), w = r(), N = Object(L.B)(w, {
						listingKey: P
					}), F = y && (!N || 0 === N.length), G = Object(c.a)(j, s.P[D], {
						t: _
					}), B = Object(L.B)(w, {
						listingKey: G
					}), q = m && (!B || 0 === B.length), H = Object(a.a)(O), K = Object(L.B)(w, {
						listingKey: H
					}), V = b && (!K || 0 === K.length), W = Object(L.I)(w, {
						postId: O
					}), $ = u && !!W && !!W.media && (Object(R.H)(W.media) || Object(R.F)(W.media)) && !W.media.altText;
					if (!(F || q || V || $ || E)) return;
					F && t(S({
						key: P
					}));
					const Q = await ((e, t) => Object(f.a)(e, {
							...T,
							variables: t
						}))(n(), e),
						z = Q.body;
					E && (Q.ok ? z.data && z.data.post && t(d({
						postId: O,
						isEligibleForQASchema: null !== (o = z.data.post.isEligibleForQASchema) && void 0 !== o && o
					})) : t(i())), F && h({
						getState: r,
						onFailure: e => t(I(e)),
						onSuccess: e => t(g(e)),
						postId: O,
						response: Q
					}), q && (Q.ok ? z.data && C({
						getState: r,
						onFailure: e => t(M(e)),
						onSuccess: e => t(U(e)),
						options: e,
						subreddit: z.data.subreddit
					}) : t(M(Q.error))), V && Q.ok && A({
						getState: r,
						onFailure: e => t(p(e)),
						onSuccess: e => t(l(e)),
						postId: O,
						post: z.data.post
					}), $ && Q.ok && v({
						getState: r,
						onFailure: e => t(x(e)),
						onSuccess: e => t(k(e)),
						postId: O,
						post: z.data.post
					})
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
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/constants/index.ts"),
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
				_ = Object(n.a)(y),
				h = Object(n.a)(m),
				I = Object(n.a)(E),
				g = Object(n.a)(O),
				S = e => async (t, r, {
					apiContext: n
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
						method: a.cb.POST,
						data: u(t)
					}))(n(), e);
					if (O.ok) {
						const r = O.body,
							n = r.fullname;
						Object(f.a)(Object(p.c)(E, e, n)(y)), t(h({
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
				y = () => async (e, t, {
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
						method: a.cb.GET
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
		"./src/reddit/actions/subredditDuplicates.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return f
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/config.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/reddit/models/Post/index.ts");
			var d = r("./src/reddit/models/Duplicates/index.ts"),
				i = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/selectors/profile.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const p = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				b = (Object(s.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(s.a)(p)),
				f = (e, t) => async (r, s, {
					apiContext: p
				}) => {
					const f = Object(l.S)(s(), {
						subredditId: e
					}) || Object(u.p)(s(), {
						profileId: e
					});
					if (!f) return;
					const y = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(i.g)(f) ? n.Wb + f.name : f.name
						},
						m = await ((e, t, r) => Object(c.a)(e, {
							data: r,
							endpoint: `${a.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(o.s)(t)}`,
							method: n.cb.GET
						}))(p(), t, y);
					if (m.ok) {
						const s = m.body;
						r(b({
							distinguishKey: Object(d.a)(t, y),
							postIds: s.postIds,
							posts: s.posts,
							profiles: s.profiles,
							subreddits: s.subreddits,
							subredditId: e
						}))
					}
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
				a = r("./src/graphql/operations/SubredditTopContent.json"),
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
					})), t(Object(n.z)());
					const y = await ((e, t) => Object(c.a)(e, {
						...a,
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
		"./src/reddit/actions/tabBadging.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "f", (function() {
				return D
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/fastdom/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/chat/unreadCount.ts"),
				o = r("./src/reddit/actions/inbox.ts"),
				d = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				i = r("./src/reddit/helpers/tabBadging/index.ts"),
				u = r("./src/reddit/models/Badge/index.ts"),
				l = r("./src/reddit/selectors/appBadges.ts"),
				p = r("./src/reddit/selectors/chat.ts"),
				b = r("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				f = r("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				m = r("./src/reddit/actions/appBadgeIndicators/index.ts");
			const E = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				O = Object(a.a)(E),
				_ = (e, t) => {
					e <= 0 ? n.a.write(() => {
						Object(i.b)(!1), window.document.title = t
					}) : n.a.write(() => {
						Object(i.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				h = Object(s.c)({
					basicChannelCount: l.e,
					subredditChannelCount: l.d,
					subredditMentionCount: l.c
				}),
				I = e => {
					const t = Object(b.a)(e);
					return {
						inboxCount: t ? Object(l.h)(e) : Object(y.E)(e) || 0,
						basicChannelCount: t ? Object(l.e)(e) : Object(p.a)(e) || 0
					}
				},
				g = () => async (e, t) => {
					const r = t(),
						s = Object(d.e)(r, {}),
						n = Object(b.a)(r),
						a = Object(y.I)(r) || Object(y.J)(r),
						c = Object(f.c)(r);
					let o = 0;
					a && s && (o = n ? c ? Object(l.i)(r) : Object(l.j)(r) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: r
						} = I(e);
						return t + r
					})(r), _(o, s), e(O({
						hasUnreadMessages: !!o
					})))
				}, S = () => async (e, t) => {
					{
						e(g());
						const r = I(t());
						Object(i.c)(r)
					}
				}, D = e => async (t, r) => {
					const s = r();
					if (Object(b.a)(s)) {
						const r = Object(l.e)(s),
							n = Object(l.h)(s),
							{
								basicChannelCount: a,
								inboxCount: c
							} = e;
						if (r !== a) {
							const e = Object(m.e)({
								count: a,
								key: u.c.ChatTab
							});
							t(Object(m.a)(e))
						}
						if (c && c !== n) {
							const e = Object(m.e)({
								count: c,
								key: u.c.MessageTab
							});
							t(Object(m.a)(e))
						}(r !== a || c && c !== n) && t(g())
					} else {
						const r = Object(p.a)(s),
							n = Object(p.b)(s),
							a = Object(y.E)(s),
							{
								basicChannelCount: d,
								inboxCount: i
							} = e;
						r !== d && t(Object(c.b)({
							...n,
							basicChannelCount: d
						})), i && i !== a && t(Object(o.b)({
							inboxCount: i
						})), (r !== d || i && i !== a) && t(g())
					}
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
				return y
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "m", (function() {
				return h
			})), r.d(t, "k", (function() {
				return v
			})), r.d(t, "l", (function() {
				return A
			})), r.d(t, "i", (function() {
				return P
			})), r.d(t, "j", (function() {
				return w
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
					a(O({
						key: l,
						id: p,
						file: e
					}));
					const {
						uploadLease: f,
						error: y
					} = await r(o().uploads[l]);
					if (b()) return;
					if (y || !f) return void a(S({
						key: l,
						error: y
					}));
					let m;
					v(p, () => {
						m && m.abort()
					}), a(_({
						key: l
					}));
					const E = await Object(d.a)(e, f, e => (m = e, s && e.on("progress", e => {
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
					if (m = null, !b())
						if (E.ok) {
							const e = decodeURIComponent(E.body.PostResponse.Location);
							a(g({
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
							a(S({
								key: l,
								error: t
							}))
						}
				}, P = (e, t = !1) => (r, s) => {
					const n = s().uploads[e];
					n && (((e, t) => {
						const r = j.get(e);
						r && r.forEach(r => r(e, t)), j.delete(e)
					})(n.id, t), r(t ? T({
						key: e
					}) : D({
						key: e
					})))
				}, w = (e, t = !1) => (r, s) => {
					Object.keys(s().uploads).forEach(s => {
						s.startsWith(e) && r(P(s, t))
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
				y = Object(n.a)(p),
				m = e => async (t, r, {
					apiContext: n
				}) => {
					if (r().blockUser.api.pending[e]) return;
					t(b({
						username: e
					}));
					const i = await Object(o.a)(n(), e),
						u = `error-block-${e}`;
					if (i.ok) i.body.name && t(f(i.body)), i.body.id && t(Object(a.f)(i.body.id)), t(c.f(u)), t(c.e({
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
						t(y(r)), t(c.e({
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
				}, E = "USER_UNBLOCK__PENDING", O = "USER_UNBLOCK__SUCCESS", _ = "USER_UNBLOCK__FAILED", h = Object(n.a)(E), I = Object(n.a)(O), g = Object(n.a)(_), S = e => async (t, r, {
					apiContext: n
				}) => {
					const u = r(),
						l = Object(i.i)(u),
						p = l ? l.id : void 0,
						b = u.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(h({
						name: e
					})), (await Object(o.c)(n(), p, e)).ok ? (t(I({
						name: e
					})), b && b.id && t(Object(a.h)(b.id)), t(c.e({
						kind: d.b.SuccessCommunity,
						text: s.fbt._("{username} is now unblocked", [s.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(c.e({
						kind: d.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(g({
						name: e
					}))))
				}
		},
		"./src/reddit/actions/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return m
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "e", (function() {
				return F
			})), r.d(t, "o", (function() {
				return H
			})), r.d(t, "n", (function() {
				return K
			})), r.d(t, "m", (function() {
				return V
			})), r.d(t, "l", (function() {
				return W
			})), r.d(t, "j", (function() {
				return $
			})), r.d(t, "k", (function() {
				return Q
			})), r.d(t, "p", (function() {
				return z
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./node_modules/lodash/isEmpty.js"),
				c = r.n(a),
				o = r("./src/reddit/actions/authorFlair.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/reddit/endpoints/flair/index.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				l = r("./src/reddit/models/Flair/index.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/models/User/index.ts"),
				f = r("./src/reddit/selectors/subreddit.ts"),
				y = r("./src/reddit/selectors/userFlair.ts");
			const m = "USER_FLAIR_DATA__MUTATED",
				E = "AUTHOR_FLAIR_DATA__MUTATED",
				O = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				_ = Object(n.a)("STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(n.a)(O),
				I = Object(n.a)("STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED"),
				g = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				S = Object(n.a)("STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				D = Object(n.a)(g),
				T = Object(n.a)("STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				j = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				v = Object(n.a)("STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING"),
				A = Object(n.a)(j),
				P = Object(n.a)("STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED"),
				w = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				C = Object(n.a)("STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING"),
				R = Object(n.a)(w),
				L = Object(n.a)("STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED"),
				N = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				k = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				x = Object(n.a)(N),
				U = Object(n.a)("STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS"),
				M = Object(n.a)(k),
				F = "USERFLAIR_FETCH_SUCCESS",
				G = Object(n.a)(F),
				B = Object(n.a)(m),
				q = Object(n.a)(E),
				H = (e, t, r, s, n) => async (a, c, {
					apiContext: o
				}) => {
					const d = c(),
						l = d.user.account,
						p = l ? Object(b.e)(l) : void 0,
						m = {
							...Object(y.c)(d, {
								subredditId: n
							}).displaySettings,
							isUserEnabled: r
						},
						E = {
							userName: s,
							subredditId: n,
							applied: e,
							displaySettings: m
						};
					a(s === p ? B(E) : q(E));
					const O = Object(f.S)(d, {
							subredditId: n
						}),
						_ = t && e ? Object(u.g)(e) : void 0;
					Object(i.g)(o(), s, O.name, t, _), Object(i.i)(o(), r, O.name)
				}, K = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					const a = s(),
						c = Object(f.S)(a, {
							subredditId: e
						}).name;
					r(_());
					const o = await Object(i.l)(n(), c, t);
					if (o.ok) {
						r(h({
							subredditId: e,
							isEnabled: t
						}))
					} else r(I());
					return o.ok
				}, V = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					const a = s(),
						c = Object(f.S)(a, {
							subredditId: e
						}).name;
					r(S());
					const o = await Object(i.j)(n(), t, l.d.UserFlair, c);
					if (o.ok) {
						r(D({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(T());
					return o.ok
				}, W = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const c = n(),
						o = Object(f.S)(c, {
							subredditId: t
						}).name;
					r(v());
					const u = await Object(i.f)(a(), e, o, l.d.UserFlair),
						b = u.ok && !(u.body && !1 === u.body.success);
					if (b) {
						const e = {
							subredditId: t,
							template: u.body
						};
						r(A(e));
						const n = Object(d.d)(s.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), p.b.SuccessMod);
						r(Object(d.e)(n))
					} else {
						r(P());
						const n = Object(d.d)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), p.b.Error, s.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), W(e, t));
						r(Object(d.e)(n))
					}
					return b
				}, $ = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const c = n(),
						o = Object(f.S)(c, {
							subredditId: t
						}).name;
					if (r(C()), (await Object(i.b)(a(), e, o)).ok) {
						r(R({
							subredditId: t,
							templateId: e
						}));
						const n = Object(d.d)(s.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), p.b.SuccessMod);
						r(Object(d.e)(n))
					} else {
						r(L());
						const n = Object(d.d)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), p.b.Error, s.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), $(e, t));
						r(Object(d.e)(n))
					}
				}, Q = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const c = n(),
						o = Object(f.S)(c, {
							subredditId: t
						}).name,
						u = Object(y.c)(c, {
							subredditId: t
						}).templateIds;
					if (r(x({
							subredditId: t,
							templateIds: e
						})), (await Object(i.e)(a(), o, l.d.UserFlair, e)).ok) {
						r(U());
						const e = Object(d.d)(s.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), p.b.SuccessMod);
						r(Object(d.e)(e))
					} else {
						r(M({
							subredditId: t,
							templateIds: u
						}));
						const n = Object(d.d)(s.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), p.b.Error, s.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), Q(e, t));
						r(Object(d.e)(n))
					}
				}, z = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const u = n(),
						l = u.userFlair;
					if (l && l[e] && l[e].displaySettings.isEnabled && c()(l[e].templateIds)) {
						const n = Object(f.S)(u, {
								subredditId: e
							}).name,
							c = await Object(i.d)(a(), n);
						if (c.ok) r(G(c.body)), r(Object(o.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(d.d)(s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), p.b.Error);
							r(Object(d.e)(e))
						}
					} else r(Object(o.b)({
						username: t,
						subredditId: e
					}))
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
					d.ok ? d.body.name && (t(p(d.body)), t(a.e({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "3cOmlv"
						})
					}))) : (t(b()), t(a.e({
						kind: o.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "3Dszn7"
						})
					})))
				}, y = "USER_UNWHITELIST__PENDING", m = "USER_UNWHITELIST__SUCCESS", E = "USER_UNWHITELIST__FAILED", O = Object(n.a)(y), _ = Object(n.a)(m), h = Object(n.a)(E), I = e => async (t, r, {
					apiContext: n
				}) => {
					t(O({
						name: e
					})), (await Object(c.d)(n(), e)).ok ? (t(_({
						name: e
					})), t(a.e({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "2o6UcC"
						})
					}))) : (t(h({
						name: e
					})), t(a.e({
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
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
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
			const i = n.a.createContext(() => {});

			function u({
				children: e
			}) {
				const t = Object(a.f)(),
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
				return n.a.createElement(i.Provider, {
					value: r
				}, e ? n.a.Children.only(e) : null)
			}

			function l() {
				return Object(s.useContext)(i)
			}

			function p(e) {
				function t(t) {
					const r = l();
					return n.a.createElement(e, d({}, t, {
						sendEvent: r
					}))
				}
				return t.displayName = "Tracked", t.WrappedComponent = e, t
			}
		},
		"./src/reddit/constants/errors.ts": function(e, t, r) {
			"use strict";
			var s, n;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(s || (s = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(n || (n = {}))
		},
		"./src/reddit/constants/inFeedChaining.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			}));
			const s = 3,
				n = 5,
				a = 10
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, r) {
			"use strict";
			var s, n;
			r.d(t, "d", (function() {
					return s
				})), r.d(t, "c", (function() {
					return n
				})), r.d(t, "b", (function() {
					return a
				})), r.d(t, "a", (function() {
					return c
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(s || (s = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(n || (n = {}));
			const a = "SHORTCUT_FOCUSABLE_DIV",
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
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts");
			const d = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: n.cb.POST
			}), i = async (e, t, r) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: r,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: n.cb.POST
			}), u = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: n.cb.POST
			}), l = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: n.cb.POST
			}), p = async (e, t) => Object(a.a)(Object(c.a)(e, [o.a]), {
				endpoint: `${s.a.oauthUrl}/user/${t}/about`,
				method: n.cb.GET,
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
			var s, n = r("./src/graphql/operations/CrowdControlLevelInfo.json"),
				a = r("./src/lib/makeGqlRequest/index.ts");
			! function(e) {
				e.Off = "OFF", e.Lenient = "LENIENT", e.Medium = "MEDIUM", e.Strict = "STRICT"
			}(s || (s = {}));
			const c = (e, t) => Object(a.a)(e, {
				...n,
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
		"./src/reddit/endpoints/me/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts");
			const c = e => Object(a.a)(e, {
				endpoint: `${s.a.gatewayUrl}/desktopapi/v1/me`,
				method: n.cb.GET
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts");
			t.a = async e => Object(n.a)(Object(a.a)(e, [c.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: s.cb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return p
			}));
			var s = r("./src/reddit/helpers/flair.ts"),
				n = r("./src/reddit/models/PostDraft/index.ts");
			const a = e => ({
					id: e.json.data.id,
					draftsCount: e.json.data.drafts_count
				}),
				c = e => e.destSubreddit.id ? {
					subreddit: e.destSubreddit.id,
					target: e.destSubreddit.isProfile ? "profile" : "subreddit"
				} : {},
				o = e => {
					switch (e.kind) {
						case n.b.Link:
							return "link";
						case n.b.Markdown:
							return "markdown";
						case n.b.RichText:
							return "richtext";
						default:
							return "self"
					}
				},
				d = e => {
					switch (e) {
						case "link":
							return n.b.Link;
						case "markdown":
							return n.b.Markdown;
						case "richtext":
							return n.b.RichText;
						default:
							return "self"
					}
				},
				i = e => e.title.substring(0, 300),
				u = e => {
					switch (e.kind) {
						case n.b.Link:
						case n.b.Markdown:
							return e.body;
						case n.b.RichText:
							return JSON.stringify({
								document: e.body
							})
					}
				},
				l = e => e ? {
					flair_id: e.templateId || null,
					flair_text: Object(s.g)(e) || null,
					flair_text_color: e.textColor || null,
					flair_background_color: e.backgroundColor || null
				} : {
					flair_id: null,
					flair_text: null,
					flair_text_color: null,
					flair_background_color: null
				},
				p = e => ({
					id: e.draftId || void 0,
					...c(e),
					kind: o(e),
					title: i(e),
					body: u(e),
					spoiler: e.isSpoiler,
					nsfw: e.isNSFW,
					original_content: e.isOC,
					...l(e.flair),
					send_replies: e.sendReplies,
					is_public_link: e.isPublicLink
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
				method: s.cb.GET,
				endpoint: `${e.apiUrl}/api/username_available.json?user=${t.username}`,
				type: "json"
			})
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts");
			t.a = () => ({
				type: n.E.SERVER_ERROR,
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
		"./src/reddit/helpers/isArrayEqual.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/isEqual.js"),
				n = r.n(s),
				a = r("./node_modules/lodash/xorWith.js"),
				c = r.n(a);
			t.a = (e, t) => {
				const r = c()(e, t, n.a);
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
					const s = document.head;
					let n = s.querySelector(`script[src='${e}']`);
					n || ((n = document.createElement("script")).src = e, s.appendChild(n)), n.addEventListener("load", (function e() {
						this.removeEventListener("load", e), r()
					}))
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
							i = Object(o.F)(e, d);
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
						n = Object(f.bb)(e.getState()) ? "1" : "";
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
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/history/esm/history.js"), r("./src/reddit/actions/platform.ts");
			var s = r("./src/config.ts");
			t.a = (e, t) => {
				const r = t.platform.currentPage && t.platform.currentPage.url;
				let n = `${s.a.accountManagerOrigin}/login/`;
				const a = window.location.origin;
				r && (n += `?dest=${encodeURIComponent(`${a}${r}`)}`), window.location.href = n
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
						const r = Object(i.f)(m(e, t)),
							n = b(r);
						return s.fbt._("Submit post at {time}", [s.fbt._param("time", n)], {
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
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			}));
			var s = r("./src/config.ts");
			const n = `${s.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				a = `${s.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				c = `${s.a.assetPath}/img/favicon/favicon-32x32.png`,
				o = `${s.a.assetPath}/img/favicon/favicon-16x16.png`,
				d = "badgeCountSync",
				i = e => window.document.querySelector(`link[href="${e}"]`),
				u = (e = !0) => {
					const t = i(e ? c : n),
						r = i(e ? o : a);
					t && r && (t.href = e ? n : c, r.href = e ? a : o)
				},
				l = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: d,
						badgeCounts: e
					})
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
			r.d(t, "g", (function() {
				return O
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "a", (function() {
				return S
			})), r.d(t, "E", (function() {
				return D
			})), r.d(t, "F", (function() {
				return T
			})), r.d(t, "M", (function() {
				return v
			})), r.d(t, "B", (function() {
				return A
			})), r.d(t, "C", (function() {
				return P
			})), r.d(t, "D", (function() {
				return w
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "w", (function() {
				return R
			})), r.d(t, "x", (function() {
				return L
			})), r.d(t, "L", (function() {
				return N
			})), r.d(t, "K", (function() {
				return k
			})), r.d(t, "I", (function() {
				return x
			})), r.d(t, "v", (function() {
				return U
			})), r.d(t, "y", (function() {
				return M
			})), r.d(t, "z", (function() {
				return F
			})), r.d(t, "A", (function() {
				return G
			})), r.d(t, "N", (function() {
				return B
			})), r.d(t, "J", (function() {
				return q
			})), r.d(t, "t", (function() {
				return H
			})), r.d(t, "H", (function() {
				return K
			})), r.d(t, "d", (function() {
				return V
			})), r.d(t, "c", (function() {
				return W
			})), r.d(t, "b", (function() {
				return $
			})), r.d(t, "f", (function() {
				return Q
			})), r.d(t, "e", (function() {
				return z
			})), r.d(t, "s", (function() {
				return J
			})), r.d(t, "m", (function() {
				return Z
			})), r.d(t, "r", (function() {
				return ee
			})), r.d(t, "k", (function() {
				return te
			})), r.d(t, "l", (function() {
				return re
			})), r.d(t, "n", (function() {
				return se
			})), r.d(t, "p", (function() {
				return ne
			})), r.d(t, "q", (function() {
				return ae
			})), r.d(t, "o", (function() {
				return ce
			})), r.d(t, "j", (function() {
				return oe
			})), r.d(t, "u", (function() {
				return de
			})), r.d(t, "G", (function() {
				return ie
			}));
			var s, n = r("./src/lib/stringInterpolate/index.ts"),
				a = r("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = (r("./src/reddit/constants/categories.tsx"), r("./src/reddit/constants/tracking.ts")),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/helpers/trackers/searchResults.ts"),
				i = r("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = r("./src/reddit/models/Widgets/index.ts"),
				l = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/telemetry.ts"),
				b = r("./src/reddit/selectors/widgets.ts"),
				f = r("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(s || (s = {}));
			const y = "discovery_unit",
				m = (e, t, r) => ({
					...p.defaults(e),
					source: y,
					screen: p.screen(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && r ? Object(n.a)(t.title, {
							subredditName: r.name
						}) : t.title,
						name: t.unitName
					}
				}),
				E = (e, t, r) => ({
					...m(e, t, r),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				O = (e, t) => {
					Object(f.a)(_(t)(e))
				},
				_ = (e, t) => r => E(r, e, t),
				h = (e, t, r, s) => "unitName" in t ? m(e, t, s) : ((e, t, r) => ({
					...p.defaults(e),
					source: "search",
					screen: p.screen(e),
					search: r ? {
						...p.search(e, r),
						structureType: p.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, r),
				I = (e, t, r, n, a) => ({
					...h(e, t, n, a),
					action: "view",
					noun: s.ITEM_POST,
					post: p.post(e, r)
				}),
				g = ({
					post: e,
					rawQuery: t,
					searchQuery: r
				}) => ({
					displayQuery: decodeURIComponent(r),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? p.StructureType.PromotedTrend : p.StructureType.Trending
				});
			var S;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(S || (S = {}));
			const D = (e, t, r) => {
					Object(f.a)(j(e, t, r, c.c.CLICK))
				},
				T = (e, t, r) => {
					Object(f.a)(j(e, t, r, c.c.VIEW))
				},
				j = (e, t, r, s) => {
					const n = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...p.defaults(e),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: g(t),
						discoveryUnit: r === S.POPULAR_CAROUSEL ? {
							name: i.l,
							id: i.l,
							title: i.l,
							type: "query"
						} : void 0,
						actionInfo: p.actionInfo(e, {
							paneName: r,
							position: n
						}),
						search: {
							originPageType: e.platform.currentPage ? p.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: p.StructureType.Trending,
							queryId: s === c.c.CLICK ? Object(o.c)(o.a.SearchResults) : void 0
						}
					}
				},
				v = (e, t, r, s, n, a, o) => {
					Object(f.a)({
						...p.defaults(e),
						...Object(d.e)(e, r, s, n, a, t),
						action: c.c.VIEW,
						noun: o ? "ad" : "post"
					})
				},
				A = (e, t, r, s) => {
					Object(f.a)(I(e, t, r, s))
				},
				P = (e, t, r, s) => n => I(n, e, t, r, s),
				w = (e, t, r, n) => {
					const a = h(e, t, n);
					Object(f.a)({
						...a,
						...Object(b.b)(e, r),
						action: "view",
						noun: s.ITEM_SUBREDDIT
					})
				},
				C = (e, t) => {
					Object(f.a)({
						...m(e, t),
						source: y,
						action: c.c.CLICK,
						noun: "show_less_often"
					})
				},
				R = (e, t, r, s) => {
					Object(f.a)(L(t, r, s)(e))
				},
				L = (e, t, r, n) => a => {
					return {
						...h(a, e, r, n),
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_POST,
						post: p.post(a, t)
					}
				},
				N = (e, t, r, s) => n => a => Object(d.e)(a, n, e, t, r, s),
				k = (e, t, r, s) => n => a => Object(d.d)(a, e, t, void 0, r, n, s),
				x = (e, t, r, s) => n => a => ({
					...Object(d.e)(a, n, e, t, r, s),
					noun: "ad"
				}),
				U = (e, t) => r => n => ({
					...e ? m(n, e, t) : {},
					source: y,
					action: c.c.CLICK,
					noun: s.ITEM_POST,
					post: p.post(n, r)
				}),
				M = (e, t, r, s) => {
					Object(f.a)(F(t, r, s)(e))
				},
				F = (e, t, r, s) => n => {
					const a = Object(l.c)(n, {
							postId: t
						}),
						o = a ? Object(b.b)(n, a) : void 0;
					return {
						...h(n, e, r, s),
						...o,
						source: y,
						action: c.c.CLICK,
						noun: "item_post_subreddit",
						post: p.post(n, t)
					}
				},
				G = (e, t, r) => s => n => {
					const a = Object(l.c)(n, {
							postId: t
						}),
						o = a ? Object(b.b)(n, a) : void 0;
					return {
						...h(n, e, void 0, r),
						...o,
						source: y,
						action: c.c.CLICK,
						noun: s ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: p.post(n, t)
					}
				},
				B = (e, t, r) => {
					const s = h(e, t);
					Object(f.a)({
						...s,
						...Object(b.b)(e, r),
						source: "search",
						action: c.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				q = (e, t, r, s, n, a) => {
					Object(f.a)({
						...p.defaults(e),
						...Object(d.d)(e, t, r, s, n, void 0, a)
					})
				},
				H = (e, t, r) => {
					const s = h(e, t);
					Object(f.a)({
						...s,
						...Object(b.b)(e, r),
						source: y,
						action: c.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				K = (e, t) => r => {
					const s = Object(u.j)(t);
					return {
						...m(r, e, t),
						...Object(b.b)(r, s),
						source: y,
						action: c.c.CLICK,
						noun: "title_subreddit"
					}
				},
				V = (e, t) => r => ({
					...m(r, e, t),
					action: "status",
					actionInfo: p.actionInfo(r, {
						success: !0
					}),
					noun: "loading"
				}),
				W = (e, t, r) => s => ({
					...m(s, e, r),
					action: "status",
					actionInfo: p.actionInfo(s, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				$ = (e, t) => r => ({
					...m(r, e, t),
					action: "click",
					noun: "close"
				}),
				Q = (e, t, r) => s => ({
					...h(s, e, t, r),
					action: "click",
					noun: "scroll"
				}),
				z = (e, t) => r => ({
					...m(r, e, t),
					action: "click",
					noun: "overflow_menu"
				}),
				X = () => ({
					id: "xd_focus_verticals",
					unitType: i.f.Listing,
					experiment: "",
					title: a.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: i.d.Large,
					surface: i.e.Frontpage,
					url: "gql.reddit.com"
				}),
				Y = (e, t, r) => p.actionInfo(e, {
					position: r
				}),
				J = (e, t, r) => {
					const s = X();
					return e => ({
						...E(e, s),
						actionInfo: Y(e, 0, r),
						subreddit: p.subredditById(e, t)
					})
				},
				Z = (e, t, r) => {
					const s = X();
					return e => ({
						...I(e, s, t),
						actionInfo: Y(e, 0, r)
					})
				},
				ee = (e, t, r) => {
					const n = X();
					return e => ({
						...m(e, n),
						actionInfo: Y(e, 0, r),
						subreddit: p.subredditById(e, t) || null,
						source: y,
						action: c.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				te = (e, t, r) => {
					const n = X();
					return e => ({
						...m(e, n),
						actionInfo: Y(e, 0, r),
						post: p.post(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				re = (e, t, r, n) => {
					const a = X();
					return e => ({
						...m(e, a),
						actionInfo: Y(e, 0, n),
						subreddit: p.subredditById(e, r) || null,
						post: p.post(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				se = (e, t, r) => {
					const n = X();
					return e => ({
						...m(e, n),
						actionInfo: Y(e, 0, r),
						subreddit: p.subredditById(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				ne = (e, t, r, n) => {
					const a = X();
					return e => ({
						...m(e, a),
						actionInfo: Y(e, 0, r),
						subreddit: p.subredditById(e, t) || null,
						post: n ? p.post(e, n) : null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				ae = (e, t, r, n) => {
					const a = X();
					return e => ({
						...m(e, a),
						actionInfo: Y(e, 0, r),
						subreddit: p.subredditById(e, t) || null,
						post: n ? p.post(e, n) : null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ce = (e, t, r) => {
					const n = X();
					return e => ({
						...m(e, n),
						actionInfo: Y(e, 0, r),
						subreddit: p.subredditById(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				oe = (e, t, r) => {
					const n = X();
					return e => ({
						...m(e, n),
						actionInfo: Y(e, 0, r),
						subreddit: p.subredditById(e, t) || null,
						source: y,
						action: c.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				de = (e, t) => r => ({
					...m(r, e),
					...t && Object(b.b)(r, t),
					source: y,
					action: c.c.CLICK,
					noun: "item"
				}),
				ie = e => t => ({
					...m(t, e),
					source: y,
					action: c.c.CLICK,
					noun: "see_all"
				})
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
				return j
			})), r.d(t, "u", (function() {
				return v
			})), r.d(t, "t", (function() {
				return A
			})), r.d(t, "o", (function() {
				return P
			})), r.d(t, "n", (function() {
				return w
			})), r.d(t, "y", (function() {
				return C
			})), r.d(t, "k", (function() {
				return R
			})), r.d(t, "j", (function() {
				return L
			})), r.d(t, "l", (function() {
				return N
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "m", (function() {
				return M
			})), r.d(t, "h", (function() {
				return G
			})), r.d(t, "e", (function() {
				return B
			})), r.d(t, "f", (function() {
				return q
			})), r.d(t, "b", (function() {
				return H
			})), r.d(t, "v", (function() {
				return K
			})), r.d(t, "g", (function() {
				return V
			}));
			var s = r("./src/reddit/constants/tracking.ts"),
				n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/helpers/media/index.ts"),
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
					correlationId: Object(n.c)(n.a.PostComposer)
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
				j = (e, t) => {
					const r = t === c.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(l.a)({
						noun: r,
						...y(e)
					})
				},
				v = (e, t) => {
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
				P = (e, t) => {
					t.forEach(t => {
						const r = Object(a.f)(t.type);
						r && Object(l.a)({
							...y(e),
							action: s.c.DRAG,
							noun: r
						})
					})
				},
				w = (e, t, r) => {
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
				C = (e, t, r) => {
					Object(l.a)({
						...y(e),
						noun: r,
						action: Object(p.getToggleAction)(t),
						actionInfo: i.chatPostActionInfo(e)
					})
				},
				R = e => k("input", e),
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
					} = t, n = Object(u.i)(e), a = Object(d.d)(e, {
						draftId: r
					}), c = {
						authorId: n ? n.id : void 0,
						createdTimestamp: a ? a.created : void 0,
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
				F = (e, t) => {
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
				G = (e, t) => {
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
						...F(e, t)
					})
				},
				H = e => {
					Object(l.a)({
						...y(e),
						noun: "social_connect_link",
						action: s.c.CLICK
					})
				},
				K = (e, t) => {
					Object(l.a)({
						...y(e),
						noun: "twitter_share_checkbox",
						action: Object(p.getToggleAction)(t)
					})
				},
				V = (e, t, r) => {
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
				return j
			})), r.d(t, "r", (function() {
				return v
			})), r.d(t, "o", (function() {
				return A
			})), r.d(t, "s", (function() {
				return P
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "p", (function() {
				return R
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
				return F
			})), r.d(t, "m", (function() {
				return G
			})), r.d(t, "t", (function() {
				return H
			})), r.d(t, "w", (function() {
				return K
			})), r.d(t, "e", (function() {
				return V
			})), r.d(t, "d", (function() {
				return $
			})), r.d(t, "u", (function() {
				return Q
			})), r.d(t, "v", (function() {
				return z
			})), r.d(t, "h", (function() {
				return X
			}));
			var s = r("./node_modules/lodash/pick.js"),
				n = r.n(s),
				a = r("./src/lib/constants/index.ts"),
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
						case a.Db.COMMENTS: {
							const {
								partialCommentId: n,
								partialPostId: a
							} = e.match.params, c = Object(b.r)(a), o = Object(i.a)(e, t, t.posts.models[c]);
							if (!o) return;
							const u = n && Object(p.f)(n),
								{
									sortToUse: l
								} = Object(d.a)(t, c),
								f = !0;
							Object(S.a)(w(o, c, u, r, s, l, f)(t));
							break
						}
						case a.Db.INDEX:
						case a.Db.LISTING:
						case a.Db.MULTIREDDIT:
						case a.Db.SUBREDDIT: {
							const n = Object(i.c)(e, t);
							if (!n.listingKey) return;
							const {
								params: c,
								queryParams: o
							} = e.match, {
								sort: d = (n.sort ? n.sort : a.P.HOT)
							} = c, u = o.t;
							Object(S.a)(T(n.listingKey, d, r, s, u)(t));
							break
						}
						case a.Db.TOPIC: {
							const n = Object(i.c)(e, t);
							if (!n.listingKey) return;
							const {
								params: c
							} = e.match, o = n.sort ? n.sort : a.Q, {
								sort: d = o
							} = c;
							Object(S.a)(T(n.listingKey, d, r, s)(t));
							break
						}
						case a.Db.PROFILE_OVERVIEW: {
							const n = Object(i.d)(e, t);
							if (!n) return;
							const {
								params: c,
								queryParams: o
							} = e.match, {
								sort: d = a.vb
							} = c, u = o.t;
							Object(S.a)(j(n, d, r, s, u)(t));
							break
						}
						case a.Db.PROFILE_POSTS: {
							const n = Object(i.d)(e, t);
							if (!n) return;
							const {
								queryParams: c
							} = e.match, {
								sort: o = a.vb,
								t: d = a.wb
							} = c;
							Object(S.a)(v(n, o, r, s, d)(t));
							break
						}
						case a.Db.PROFILE_COMMENTS: {
							const n = Object(i.d)(e, t);
							if (!n) return;
							const {
								queryParams: c
							} = e.match, {
								sort: o = a.vb,
								t: d = a.wb
							} = c;
							Object(S.a)(A(n, o, r, s, d)(t));
							break
						}
						case a.Db.PROFILE_PRIVATE: {
							const n = Object(i.d)(e, t);
							if (!n) return;
							Object(S.a)(P(n)(s, r)(t));
							break
						}
						case a.Db.PROFILE_MODERATION:
							f && R(t, !0);
							break;
						case a.Db.SETTINGS: {
							const n = e;
							Object(S.a)(q(r, s)(t)), n.match.params.page === a.Qb.Profile && Object(l.j)(t);
							break
						}
						case a.Db.POST_CREATION:
							if (f && u) {
								const e = Object(E.a)(u);
								Object(S.a)(C(e, r, s)(t))
							}
							break;
						case a.Db.POST_DRAFT: {
							const {
								draftId: n
							} = e.match.params, a = Object(c.a)(e.match.params);
							if (!a) return;
							x(t, a, n, r, s);
							break
						}
						case a.Db.SUBREDDIT_WIKI:
							Object(S.a)(W(r, s)(t));
							break;
						case a.Db.COINS:
							Object(S.a)(U(r, s)(t)), Object(S.a)(M()(t));
							break;
						case a.Db.PREMIUM:
							Object(S.a)(F(r, s)(t)), Object(S.a)(G()(t));
							break;
						case a.Db.APPEAL:
							Object(S.a)(B(r, s)(t));
							break;
						case a.Db.INBOX_PAGES:
							f && k(t);
							break;
						case a.Db.MODERATION_PAGES:
							f && L(t, !0, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case a.Db.COLLECTION_COMMENTS:
							f && z(t, !0);
							break;
						case a.Db.MODQUEUE_PAGES:
							f && N(t, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case a.Db.SUBREDDIT_LEADERBOARD:
							f && Object(S.a)(V()(t));
							break;
						case a.Db.SEARCH_RESULTS:
							if (f) {
								const a = Object(i.e)(e);
								if (!a) return;
								Object(S.a)(Q(a, Object(O.c)(n()(_ && _.queryParams || {}, o.t)), r, s, _)(t))
							}
							break;
						case a.Db.PUBLIC_ACCESS_NETWORK:
							f && Object(S.a)(H()(t));
							break;
						case a.Db.GEOTAGGING:
							f && Object(S.a)($()(t));
							break;
						case a.Db.SUBREDDIT_CREATION:
							f && Object(S.a)(K()(t));
							break;
						case a.Db.MOD_LISTING:
							f && X(t, !0)
					}
				},
				T = (e, t, r, s, n, a) => c => {
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
							sortTime: n
						}),
						subreddit: g.subreddit(c),
						timer: g.timer(r, s),
						userSubreddit: g.userSubreddit(c),
						adblock: g.adblock(c),
						postFlair: {
							title: a
						}
					}
				},
				j = (e, t, r, s, n) => a => {
					const c = g.listing(a, e);
					c && (c.sort = t, n && (c.sortTime = n));
					const {
						api: o
					} = a.listings.postOrder, d = !o.error[e] && !o.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(a),
						actionInfo: g.actionInfo(a, {
							success: d
						}),
						profile: g.profile(a),
						snoovatar: g.snoovatar(a),
						subreddit: g.subreddit(a),
						timer: g.timer(r, s),
						userSubreddit: g.userSubreddit(a),
						adblock: g.adblock(a)
					}
				},
				v = (e, t, r, s, n) => a => {
					const c = g.listing(a, e);
					c && (c.sort = t, n && (c.sortTime = n));
					const {
						api: o
					} = a.listings.postOrder, d = !o.error[e] && !o.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(a),
						actionInfo: g.actionInfo(a, {
							success: d
						}),
						profile: g.profile(a),
						subreddit: g.subreddit(a),
						timer: g.timer(r, s),
						userSubreddit: g.userSubreddit(a),
						adblock: g.adblock(a)
					}
				},
				A = (e, t, r, s, n) => a => {
					const c = g.profileComments(a, e);
					c && (c.sort = t, n && (c.sortTime = n));
					const {
						api: o
					} = a.profileCommentsPage, d = !o.error[e] && !o.pending[e];
					return {
						listing: c,
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(a),
						actionInfo: g.actionInfo(a, {
							success: d
						}),
						profile: g.profile(a),
						subreddit: g.subreddit(a),
						timer: g.timer(r, s),
						userSubreddit: g.userSubreddit(a),
						adblock: g.adblock(a)
					}
				},
				P = e => (t, r) => s => {
					const n = !s.profilePrivatePage.api.error[e] && !s.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(s),
						actionInfo: g.actionInfo(s, {
							success: n
						}),
						profile: g.profile(s),
						subreddit: g.subreddit(s),
						timer: g.timer(r, t),
						userSubreddit: g.userSubreddit(s),
						adblock: g.adblock(s)
					}
				},
				w = (e, t, r, s, n, a, c) => o => {
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
						timer: g.timer(s, n),
						userSubreddit: g.userSubreddit(o),
						adblock: g.adblock(o),
						postEvent: g.postEventI13nSelector(o, {
							postId: t
						}),
						postCollection: g.postCollectionI13nSelector(o, {
							postId: t
						}),
						listing: g.listing(o, void 0, {
							sort: a
						})
					};
					return r && (l.comment = g.comment(o, r)), l
				},
				C = (e, t, r) => s => {
					const n = s.creations.api.page.fetched[e],
						a = s.platform.currentPage ? s.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...g.defaults(s),
						actionInfo: g.actionInfo(s, {
							success: n
						}),
						post: a ? g.post(s, a) : void 0,
						subreddit: g.subreddit(s),
						timer: g.timer(t, r),
						userSubreddit: g.userSubreddit(s),
						adblock: g.adblock(s)
					}
				},
				R = (e, t) => {
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
				x = (e, t, r, s, n) => {
					const a = e.creations.api.page.pending[t],
						c = !e.creations.api.page.error[t] && !a && !!r,
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
						timer: g.timer(s, n),
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
				F = (e, t) => r => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(_.c)(_.a.GoldPayment),
					...g.defaults(r),
					timer: g.timer(e, t),
					adblock: g.adblock(r)
				}),
				G = () => e => ({
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
				K = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...g.defaults(e)
				}),
				V = () => e => ({
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
				Q = (e, t, r, s, n, c) => o => {
					let d = !0;
					if (t.type.indexOf(a.Pb.Posts) > -1) {
						const {
							api: t
						} = o.listings.listingOrder;
						d = d && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(a.Pb.Subreddits) > -1 || t.type.indexOf(a.Pb.Users) > -1) {
						const {
							api: t
						} = o.listings.postOrder;
						d = d && !t.error[e] && !t.pending[e]
					}
					const i = g.paneName(o, n),
						u = g.structureType(o, n),
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
							...g.search(o, t, !0, n || void 0),
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
				},
				X = (e, t) => {
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
				return j
			})), r.d(t, "k", (function() {
				return v
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "n", (function() {
				return R
			})), r.d(t, "l", (function() {
				return L
			})), r.d(t, "m", (function() {
				return N
			})), r.d(t, "b", (function() {
				return k
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/constants/posts.ts"),
				a = r("./src/reddit/constants/tracking.ts"),
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
				b = (e, t, r, s) => n => ({
					...l(n, r),
					source: i,
					action: "click",
					noun: t,
					actionInfo: d.actionInfo(n, s ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: s ? d.discoveryUnit(s) : null,
					search: d.search(n, r),
					post: d.post(n, e),
					media: d.media(n, e)
				}),
				f = (e, t, r, s, n) => a => ({
					...A(a, e, t, n, s, r),
					noun: "ad"
				}),
				y = (e, t, r) => n => {
					let a = !0;
					if (t.type.indexOf(s.Pb.Posts) > -1) {
						const {
							api: t
						} = n.listings.listingOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(s.Pb.Subreddits) > -1 || t.type.indexOf(s.Pb.Users) > -1) {
						const {
							api: t
						} = n.listings.postOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					return {
						...l(n, t),
						source: i,
						action: "view",
						noun: "search_results_post",
						actionInfo: d.actionInfo(n, {
							success: a,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: d.discoveryUnit(r),
						search: d.search(n, t)
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
				_ = (e, t, r, s) => n => {
					const a = s.filter(e => e.id);
					return {
						source: i,
						action: "click",
						noun: d.SearchDropdownNouns.Typeahead,
						actionInfo: d.actionInfo(n, {
							position: r + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: n.platform.currentPage ? d.getPageTypeFromCurrentPage(n.platform.currentPage) : void 0,
							queryId: Object(c.c)(c.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: a.map(e => e.id),
							numberSubreddits: a.length
						},
						...h(n, t)
					}
				},
				h = (e, t) => {
					const r = t.isSubreddit && t.id ? d.subredditForSearch(e, t.id) : void 0,
						s = t.isProfile && t.id ? d.profileForSearch(e, t.id) : void 0,
						n = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? r || n : void 0,
						profile: t.isProfile ? s || n : void 0
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
				j = (e, t, r, s) => n => ({
					...l(n, r),
					source: i,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(n, {
						relativePosition: d.getRelativePostOrder(n, t, e)
					}),
					search: {
						...d.search(n, r),
						...!!s && {
							originElement: s
						}
					},
					post: d.post(n, t)
				}),
				v = (e, t, r, s, n) => a => A(a, e, t, r, s, n),
				A = (e, t, r, s, n, o) => {
					const u = d.paneName(e, s),
						l = d.postRelativePosition(e, t, n, o),
						p = d.amountOfElementsBeforePost(e, r, n, o, u),
						b = null !== l ? p + l : null,
						f = d.structureType(e, s),
						y = {
							...d.search(e, r, !0, s || void 0),
							structureType: f,
							queryId: Object(c.c)(c.a.SearchResults)
						};
					return {
						source: i,
						action: a.c.CLICK,
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
				P = (e, t, r, s, n, a) => c => w(c, e, t, r, s, n, a),
				w = (e, t, r, s, u, l, p) => {
					if (!s) {
						s = Object(o.I)(e, {
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
						action: a.c.CLICK,
						noun: s.type,
						search: E,
						subreddit: s.type === n.a.SUBREDDIT ? d.subredditForSearch(e, s.id) : void 0,
						profile: s.type === n.a.PROFILE ? d.profileForSearch(e, s.id) : void 0,
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
				C = (e, t) => r => ({
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
				R = (e, t, r, s, n) => c => ({
					...A(c, t, r, s, e, n),
					action: a.c.VIEW
				}),
				L = (e, t, r, s) => n => ({
					...l(n, r),
					source: i,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(c.c)(c.a.SearchResults),
					actionInfo: d.actionInfo(n, {
						relativePosition: d.getRelativePostOrder(n, t, e),
						position: d.getAbsoluteOrder(n, t, e)
					}),
					search: {
						...d.search(n, r),
						...!!s && {
							originElement: s
						}
					},
					post: d.post(n, t)
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
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
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
				d = e => t => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...n.defaults(t),
					actionInfo: n.actionInfo(t, {
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
		"./src/reddit/models/Duplicates/index.ts": function(e, t, r) {
			"use strict";

			function s(e, t) {
				return `${e}-sort[${t.sort}]-crossposts_only[${t.crossposts_only}]`
			}
			r.d(t, "a", (function() {
				return s
			}))
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
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var n;
			! function(e) {
				e.HIDE_BUTTON_CLICK = "HIDE_BUTTON_CLICK", e.CTA_BUTTON_CLICK = "CTA_BUTTON_CLICK"
			}(n || (n = {}))
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
				return uD
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
			const j = {};

			function v(e, t, r, s) {
				const n = e[t];
				return {
					...e,
					[t]: {
						...n,
						[s]: r
					}
				}
			}
			var A = (e = j, t) => {
					if (!t.payload) return e;
					switch (t.type) {
						case D.d:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case D.b:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
						case D.n:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case D.k:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case D.e:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case D.j:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case D.i:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case D.g:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case D.f:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case D.h:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case D.l: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: n
							} = t.payload;
							return v(e, r, n, `adVideoWatchedPercent${s}`)
						}
						case D.m: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: n
							} = t.payload;
							return v(e, r, n, `adVideoWatchedSeconds${s}`)
						}
						case D.w:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case D.y:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case D.x:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case T.b:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case D.s:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						case D.c:
							return v(e, t.payload.postId, t.payload.vendorMetadata, "adGalleryItemImpression");
						default:
							return e
					}
				},
				P = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/apiRequestState.ts"));
			const w = {};
			var C = (e = w, t) => {
					switch (t.type) {
						case P.d:
						case P.a:
						case P.b: {
							const r = t.payload;
							return {
								...e,
								[r.apiRequestId]: r
							}
						}
						case P.c: {
							const r = t.payload;
							if (!(r in e)) return e;
							if (1 === Object.keys(e).length) return w;
							const s = {
								...e
							};
							return delete s[r], s
						}
						default:
							return e
					}
				},
				R = r("./src/reddit/actions/appBadgeIndicators/constants.ts");
			var L = (e = null, t) => {
				switch (t.type) {
					case R.a:
						return t.payload && t.payload.error || null;
					case R.b:
					case R.c:
						return null;
					default:
						return e
				}
			};
			var N = (e = !1, t) => {
					switch (t.type) {
						case R.c:
							return !0;
						case R.a:
						case R.b:
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
						case R.d:
						case R.b: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case R.c:
						case R.a:
						default:
							return e
					}
				},
				M = Object(c.c)({
					api: k,
					badges: U
				});
			var F = (e = null, t) => {
					switch (t.type) {
						case b.a:
							return t.payload;
						default:
							return e
					}
				},
				G = r("./node_modules/icepick/icepick.js"),
				B = r("./node_modules/lodash/mergeWith.js"),
				q = r.n(B),
				H = r("./src/reddit/actions/comment/constants.ts"),
				K = r("./src/reddit/actions/comment/websocket/constants.ts"),
				V = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				W = r("./src/reddit/actions/modQueue/constants.ts"),
				$ = r("./src/reddit/actions/pages/constants.ts"),
				Q = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				z = r("./src/reddit/actions/pages/profilePosts.ts"),
				X = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				Y = r("./src/reddit/actions/pages/search.ts"),
				J = r("./src/reddit/actions/pages/subreddit.ts"),
				Z = r("./src/reddit/actions/profileConversations.ts"),
				ee = r("./src/reddit/actions/subreddit.ts"),
				te = r("./src/reddit/actions/userFlair.ts"),
				re = r("./src/reddit/models/User/index.ts");
			const se = {};
			var ne = (e = se, t) => {
				switch (t.type) {
					case K.b:
					case K.c: {
						const r = t.payload,
							{
								authorFlair: s,
								isChatSort: n
							} = r;
						if (s && n) {
							return q()({
								...e
							}, s, (e, t, r) => {
								if ("richtext" === r) return t
							})
						}
						return e
					}
					case X.c:
					case X.i:
					case X.e:
					case X.g:
					case Y.SEARCH_RESULTS_RECEIVED: {
						const {
							authorFlair: r
						} = t.payload;
						if (r) {
							return Object(G.merge)(e, r)
						}
						return e
					}
					case H.u:
					case J.SUBREDDIT_LOADED:
					case $.f:
					case Q.b:
					case Q.e:
					case z.PROFILE_POSTS_LOADED:
					case z.MORE_POSTS_LOADED:
					case Z.e:
					case ee.i:
						return ae(e, t.payload);
					case W.i:
					case W.f:
					case W.m:
					case W.p:
					case W.v:
						return ae(e, t.payload.response);
					case te.i: {
						const {
							subredditId: r,
							userName: s,
							applied: n,
							displaySettings: {
								isUserEnabled: a
							}
						} = t.payload;
						return Object(G.setIn)(e, [r, s], a ? n : null)
					}
					case V.h:
					case V.b: {
						const {
							subredditId: r,
							userName: s,
							applied: n
						} = t.payload;
						return e[r] && e[r][s] ? Object(G.setIn)(e, [r, s], n) : e
					}
					case te.a: {
						const {
							subredditId: r,
							userName: s,
							applied: n,
							displaySettings: {
								isEnabled: a
							}
						} = t.payload;
						return Object(G.setIn)(e, [r, s], a ? n : null)
					}
					default:
						return e
				}
			};
			const ae = (e, {
				account: t,
				authorFlair: r,
				userFlair: s
			}) => {
				const n = Object(G.merge)(e, r);
				if (!s || !t) return n;
				const a = Object.keys(s)[0];
				if (!a) return n;
				const c = s[a],
					o = Object(re.e)(t),
					d = c.applied,
					i = c.displaySettings && c.displaySettings.isUserEnabled;
				return o && d && i ? Object(G.merge)(n, {
					[a]: {
						[o]: d
					}
				}) : n
			};
			var ce = Object(c.c)({
					inContext: F,
					models: ne
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
						} = t.payload, n = {};
						return r.forEach(e => {
							n[e.id] = e.isEnabled
						}), {
							...e,
							[s]: n
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
							} = t.payload, n = r.map(e => e.id);
							return {
								...e,
								[s]: n
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
			var je = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : Te(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : Te(e.endsAt)), e),
				ve = r("./src/reddit/models/Gold/Award.ts"),
				Ae = r("./src/reddit/actions/discoveryUnit.ts"),
				Pe = r("./src/reddit/actions/frontpage/constants.ts"),
				we = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				Ce = r("./src/reddit/actions/multireddit/constants.ts"),
				Re = r("./src/reddit/actions/pages/modListing/constants.ts"),
				Le = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				Ne = r("./src/reddit/actions/pages/postCreation.ts"),
				ke = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				xe = r("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				Ue = r("./src/lib/makeActionCreator/index.ts"),
				Me = (r("./src/config.ts"), r("./src/lib/constants/index.ts"));
			r("./src/lib/makeApiRequest/index.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(Ue.a)("RECOMMENDED_POSTS_LOADED"), Object(Ue.a)("RECOMMENDED_POSTS_FAILED");
			var Fe = r("./src/reddit/actions/search.ts");
			const Ge = ve.m,
				Be = (e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				})([je]),
				qe = (e, t) => {
					const r = t.reduce((e, t) => (e[t.id] = Be(t), e), {});
					return De()({
						...e
					}, r)
				};
			var He = (e = Ge, t) => {
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
					case K.b:
					case Ne.PAGE_LOADED:
					case Ae.e:
					case Pe.f:
					case Re.e:
					case Re.h:
					case W.f:
					case W.m:
					case W.p:
					case W.v:
					case Ce.r:
					case $.f:
					case Pe.b:
					case Le.b:
					case Y.SEARCH_RESULTS_RECEIVED:
					case Q.b:
					case Q.e:
					case Z.b:
					case Z.e:
					case ke.b:
					case ke.e:
					case xe.b:
					case z.MORE_POSTS_LOADED:
					case z.PROFILE_POSTS_LOADED:
					case X.c:
					case X.e:
					case X.i:
					case X.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Fe.c:
					case ee.i:
					case J.SUBREDDIT_LOADED: {
						const r = {},
							s = t.payload.posts || [],
							n = t.payload.comments || [];
						for (const e in s) {
							const t = s[e].allAwardings || [];
							for (const e of t) r[e.id] = Be(Object(ve.h)(e))
						}
						for (const e in n) {
							const t = n[e],
								{
									associatedAward: s,
									allAwardings: a = []
								} = t;
							for (const e of a) r[e.id] = Be(Object(ve.h)(e));
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
							for (const n of s) {
								const e = n.award;
								r[e.id] = e
							}
						}), De()({
							...e
						}, r)
					}
					case we.o: {
						const {
							freeAwardEvent: s
						} = t.payload;
						return qe(e, (null === (r = null == s ? void 0 : s.freeAwards) || void 0 === r ? void 0 : r.awards) || [])
					}
					case we.h: {
						const {
							awards: r
						} = t.payload;
						return qe(e, r || [])
					}
					default:
						return e
				}
			};
			const Ke = {};
			var Ve = (e = Ke, t) => {
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
					pending: Ve
				});
			const $e = {};
			var Qe = (e = $e, t) => {
					switch (t.type) {
						case oe.c: {
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
				ze = Object(c.c)({
					api: We,
					order: Qe
				});
			const Xe = {};
			var Ye = (e = Xe, t) => {
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
				Je = Object(c.c)({
					order: Ye
				}),
				Ze = Object(c.c)({
					blacklist: ie,
					create: be,
					manageable: ge,
					models: He,
					sortedUsable: ze,
					tags: Je
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
				nt = Object(c.c)({
					error: tt,
					pending: st
				});
			const at = {};
			var ct = (e = at, t) => {
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
					subreddit: nt,
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
			var jt = (e = Tt, t) => {
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
				vt = Object(c.c)({
					error: Dt,
					pending: jt
				}),
				At = Object(c.c)({
					api: vt
				});
			const Pt = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var wt = (e = Pt, t) => {
					switch (t.type) {
						case D.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case J.SUBREDDIT_PENDING:
						case Le.c:
						case Pe.c:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				Ct = r("./src/reddit/actions/downToChat.ts");
			var Rt = (e = null, t) => {
				switch (t.type) {
					case Ct.f:
					case Ct.g:
						return null;
					case Ct.e: {
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
						case Ct.b:
						case Ct.f:
							return !0;
						case Ct.a:
						case Ct.c:
						case Ct.e:
						case Ct.g:
							return !1;
						default:
							return e
					}
				},
				Nt = Object(c.c)({
					error: Rt,
					pending: Lt
				}),
				kt = r("./node_modules/lodash/mapValues.js"),
				xt = r.n(kt);
			const Ut = {};
			var Mt = (e = Ut, t) => {
					switch (t.type) {
						case Ct.f:
						case Ct.e:
						case Ct.g: {
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
						case Ct.c: {
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
						case Ct.d:
							return {
								...xt()(e, e => ({
									bannerEnabled: !1,
									buttonEnabled: e.buttonEnabled
								}))
							};
						case Ct.a:
						case Ct.b:
						default:
							return e
					}
				},
				Ft = Object(c.c)({
					api: Nt,
					subreddits: Mt
				}),
				Gt = r("./src/reddit/actions/chat/init.ts");
			var Bt = (e = !1, t) => {
					switch (t.type) {
						case Gt.a:
							return !0;
						default:
							return e
					}
				},
				qt = r("./src/chat/actions/promo/constants.ts");
			const Ht = {
				displaySubredditChatFtux: !1
			};
			var Kt = (e = Ht, t) => {
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
				Vt = r("./src/lib/omitKey/index.ts"),
				Wt = r("./src/reddit/actions/pages/chatSettings.ts");
			const $t = {};
			var Qt = (e = $t, t) => {
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
						return Object(Vt.a)(e, r)
					}
					default:
						return e
				}
			};
			const zt = {};
			var Xt = (e = zt, t) => {
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
				Yt = Object(c.c)({
					error: Qt,
					pending: Xt
				}),
				Jt = Object(c.c)({
					fetch: Yt
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
					api: Jt,
					models: er
				}),
				rr = r("./src/reddit/actions/chat/unreadCount.ts");
			const sr = {
				apiError: null
			};
			var nr = (e = sr, t) => {
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
			var ar = (e = !1, t) => {
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
					error: nr,
					pending: ar
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
					downToChat: Ft,
					isInited: Bt,
					promos: Kt,
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
				Dr = r("./src/reddit/actions/contentControls/constants.ts");
			const Tr = {};
			var jr = (e = Tr, t) => {
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
						return Object(Vt.a)(e, r)
					}
					default:
						return e
				}
			};
			const vr = {};
			var Ar = (e = vr, t) => {
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
				Pr = Object(c.c)({
					error: jr,
					pending: Ar
				}),
				wr = Object(c.c)({
					fetch: Pr
				});
			const Cr = {};
			var Rr = (e = Cr, t) => {
					switch (t.type) {
						case Dr.b: {
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
						case Dr.d: {
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
				Lr = Object(c.c)({
					api: wr,
					models: Rr
				}),
				Nr = r("./src/reddit/actions/contentGate.ts");
			const kr = {};
			var xr = (e = kr, t) => {
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
							subredditName: s
						} = t.payload;
						if (s) {
							if (e[s]) {
								const t = {
									[s]: {
										privateSubreddit: !0,
										subredditDescription: r
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
									subredditDescription: r
								}
							}
						}
						return e
					}
					case Nr.f: {
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
						} = t.payload, s = Me.Wb + r.toLocaleLowerCase(), n = e[s] || {}, a = {
							profileDeleted: t.type === Nr.d,
							profileSuspended: t.type === Nr.e,
							profileBlockedForLegalReason: t.type === Nr.c
						};
						return {
							...e,
							[s]: {
								...n,
								...a
							}
						}
					}
					default:
						return e
				}
			};
			const Ur = {};
			var Mr = (e = Ur, t) => {
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
					models: Mr
				}),
				Gr = r("./src/reddit/actions/postCollection/constants.ts");
			var Br = (e = null, t) => {
				switch (t.type) {
					case s.c:
					case Gr.d:
					case Gr.c:
					case Gr.s:
					case Gr.r:
						return null;
					case Gr.b:
					case Gr.n:
						return t.payload;
					default:
						return e
				}
			};
			var qr = (e = !1, t) => {
					switch (t.type) {
						case Gr.c:
						case Gr.r:
							return !0;
						case Gr.d:
						case Gr.b:
						case Gr.s:
						case Gr.n:
							return !1;
						default:
							return e
					}
				},
				Hr = Object(c.c)({
					error: Br,
					pending: qr
				}),
				Kr = Object(c.c)({
					createOrUpdate: Hr
				}),
				Vr = r("./src/reddit/actions/postDraft.ts");
			const Wr = {};
			var $r = (e = Wr, t) => {
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
			const Qr = {};
			var zr = (e = Qr, t) => {
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
				Xr = Object(c.c)({
					error: $r,
					pending: zr
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
			var Jr = (e = !1, t) => {
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
				Zr = Object(c.c)({
					error: Yr,
					pending: Jr
				});
			const es = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var ts = (e = es, t) => {
				switch (t.type) {
					case Vr.l:
					case Vr.j:
						return es;
					case Vr.i: {
						const e = t.payload;
						return {
							...es,
							apiError: e
						}
					}
					case Vr.m: {
						const e = t.payload;
						return {
							...es,
							validationError: e
						}
					}
					case Vr.k: {
						const e = t.payload;
						return {
							...es,
							submitValidationError: e
						}
					}
					case Vr.h:
						return {
							...es, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var rs = (e = !1, t) => {
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
				ss = Object(c.c)({
					error: ts,
					pending: rs
				}),
				ns = Object(c.c)({
					deleteDraft: Xr,
					listing: Zr,
					save: ss
				}),
				as = r("./src/reddit/actions/postCreation/constants.ts");
			const cs = {};
			var os = (e = cs, t) => {
					switch (t.type) {
						case as.C: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case as.p: {
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
				ds = Object(c.c)({
					pending: os
				});
			var is = (e = null, t) => {
				switch (t.type) {
					case as.u:
					case as.v:
					case as.d:
					case as.e:
					case as.f:
					case as.i:
					case as.j:
					case as.n:
					case as.K:
						return null;
					case as.t:
						return t.payload;
					default:
						return e
				}
			};
			var us = (e = !1, t) => {
					switch (t.type) {
						case as.u:
							return !0;
						case as.v:
						case as.t:
							return !1;
						default:
							return e
					}
				},
				ls = Object(c.c)({
					error: is,
					pending: us
				}),
				ps = Object(c.c)({
					converting: ds,
					mediaUpload: ls
				});
			const bs = {};
			var fs = (e = bs, t) => {
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
			const ys = {};
			var ms = (e = ys, t) => {
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
			const Es = {};
			var Os = (e = Es, t) => {
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
				_s = Object(c.c)({
					error: fs,
					fetched: ms,
					pending: Os
				}),
				hs = r("./src/reddit/actions/scheduledPosts/constants.ts");
			const Is = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var gs = (e = Is, t) => {
				switch (t.type) {
					case as.L:
					case hs.h:
					case hs.k:
					case hs.b:
					case hs.d:
					case as.w:
					case as.c:
					case as.d:
					case as.e:
					case as.f:
					case as.i:
					case as.j:
					case as.n:
					case as.K:
					case as.A:
						return Is;
					case as.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return r ? Is : e
					}
					case as.o: {
						const e = t.payload;
						return {
							...Is,
							apiError: e
						}
					}
					case as.X: {
						const e = t.payload;
						return {
							...Is,
							validationError: e
						}
					}
					case as.G:
					case as.F: {
						const e = t.payload;
						return {
							...Is,
							submitValidationError: e
						}
					}
					case as.a:
						return {
							...Is, needsCaptcha: !0
						};
					case as.y:
						return {
							...Is, pollError: t.payload
						};
					default:
						return e
				}
			};
			var Ss = (e = !1, t) => {
					switch (t.type) {
						case as.w:
							return !0;
						case as.L:
						case hs.h:
						case as.o:
						case as.X:
						case as.F:
						case as.G:
						case as.y:
						case as.a:
							return !1;
						default:
							return e
					}
				},
				Ds = Object(c.c)({
					error: gs,
					pending: Ss
				});
			var Ts = (e = null, t) => {
				switch (t.type) {
					case as.x:
					case as.D:
						return null;
					case as.m:
						return t.payload;
					default:
						return e
				}
			};
			var js = (e = !1, t) => {
					switch (t.type) {
						case as.x:
							return !0;
						case as.m:
						case as.l:
							return !1;
						default:
							return e
					}
				},
				vs = Object(c.c)({
					error: Ts,
					pending: js
				}),
				As = Object(c.c)({
					submit: Ds,
					update: vs
				});
			var Ps = (e = null, t) => {
				switch (t.type) {
					case as.K:
					case as.I:
					case as.J:
						return null;
					default:
						return e
				}
			};
			var ws = (e = !1, t) => {
					switch (t.type) {
						case as.J:
							return !0;
						case as.I:
						case as.K:
							return !1;
						default:
							return e
					}
				},
				Cs = Object(c.c)({
					error: Ps,
					pending: ws
				}),
				Rs = Object(c.c)({
					change: Cs
				}),
				Ls = Object(c.c)({
					collection: Kr,
					draft: ns,
					editor: ps,
					page: _s,
					post: As,
					subreddit: Rs
				}),
				Ns = r("./node_modules/lodash/omit.js"),
				ks = r.n(Ns),
				xs = r("./src/reddit/actions/pages/postDraft.ts");
			const Us = {};
			var Ms = (e = Us, t) => {
				switch (t.type) {
					case Vr.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Us
					}
					case Vr.c: {
						const r = e,
							{
								draftId: s
							} = t.payload;
						return ks()(r, s)
					}
					case as.L: {
						const {
							draftId: r
						} = t.payload;
						return r ? ks()(e, r) : e
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
				Gs = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				};
			var Bs = r("./src/reddit/models/PostDraft/index.ts");
			var qs = (e = "", t) => {
					switch (t.type) {
						case as.d:
							return t.payload || "";
						case as.A:
							return "";
						case O.a: {
							if (Fs(t) !== Me.Db.POST_CREATION) return "";
							const r = Gs(t);
							return r && r.url ? r.url || "" : e
						}
						case Vr.g: {
							const e = t.payload;
							return e.kind === Bs.b.Link && e.body || ""
						}
						case hs.b:
						case hs.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Hs = r("./src/reddit/models/PostCreationForm/index.ts"),
				Ks = r("./src/reddit/models/ScheduledPost/index.ts");
			var Vs = (e = "", t) => {
				switch (t.type) {
					case as.e:
						return t.payload || "";
					case as.A:
					case as.E:
						return "";
					case as.M:
						return t.payload.editorMode === Hs.h.MARKDOWN ? t.payload.content || "" : e;
					case O.a: {
						if (Fs(t) !== Me.Db.POST_CREATION) return "";
						const r = Gs(t);
						return r && r.text ? (e => e ? e.replace(/\+/g, " ") : "")(r.text) : e
					}
					case Vr.g: {
						const e = t.payload;
						return e.kind === Bs.b.Markdown && e.body || ""
					}
					case hs.b:
					case hs.n: {
						const e = t.payload;
						return e.contentType === Ks.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Ws = {
				items: [],
				selectedKey: null
			};
			var $s = (e = Ws, t) => {
					switch (t.type) {
						case as.f:
							return t.payload || Ws;
						case as.A:
							return Ws;
						case O.a:
							return Fs(t) !== Me.Db.POST_CREATION ? Ws : e;
						case Vr.g:
							return Ws;
						case hs.b:
						case hs.n:
							return Ws;
						default:
							return e
					}
				},
				Qs = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				zs = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Xs = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const Ys = Qs.a.createInitial;
			var Js = (e = Ys(), t) => {
					switch (t.type) {
						case as.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case as.A:
							return Qs.a.createInitial();
						case as.M: {
							const r = t.payload;
							return r.editorMode === Hs.h.RICH_TEXT && r.editorKey === Hs.g.POST_CREATION ? Qs.a.createInitial(r.content) : e
						}
						case O.a:
							return Fs(t) !== Me.Db.POST_CREATION ? Qs.a.createInitial() : e;
						case Vr.g: {
							const e = t.payload;
							return e.kind === Bs.b.RichText ? Qs.a.createInitial(e.body) : Qs.a.createInitial()
						}
						case hs.b:
						case hs.n: {
							const e = t.payload,
								r = Object(zs.c)(e.mediaAssets);
							return Qs.a.createInitial(e.contentType === Ks.a.RTJSON ? Object(Xs.b)(e.body) : void 0, r || void 0)
						}
						default:
							return e
					}
				},
				Zs = Object(c.c)({
					link: qs,
					markdown: Vs,
					media: $s,
					rte: Js
				});
			var en = (e = null, t) => {
					switch (t.type) {
						case as.b:
							return t.payload || null;
						case as.A:
						case Vr.g:
						case hs.b:
						case hs.n:
						case as.K:
							return null;
						case O.a:
							return Fs(t) === Me.Db.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				tn = r("./src/reddit/selectors/scheduledPosts/index.ts");
			var rn = (e = null, t) => {
				switch (t.type) {
					case as.c:
						return t.payload || null;
					case hs.b:
					case hs.n: {
						const e = t.payload;
						return Object(tn.n)({
							scheduledPost: e
						}) || null
					}
					case as.A:
						return null;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION ? e : null;
					case Vr.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var sn = (e = null, t) => {
				switch (t.type) {
					case as.q:
						return t.payload.type || null;
					case hs.b:
					case hs.n:
					case as.i:
					case as.A:
					case O.a:
						return null;
					default:
						return e
				}
			};
			var nn = (e = !1, t) => {
				switch (t.type) {
					case as.O:
						return t.payload || !1;
					case hs.b:
					case hs.n:
						return "CHAT" === t.payload.discussionType;
					case as.A:
						return !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Vr.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var an = (e = !1, t) => {
				switch (t.type) {
					case as.W: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case as.A:
						return !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case hs.b:
					case hs.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var cn = (e = !1, t) => {
				switch (t.type) {
					case as.Q:
						return t.payload || !1;
					case as.A:
						return !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Vr.g:
						return t.payload.isNSFW || !1;
					case hs.b:
					case hs.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var on = (e = !1, t) => {
				switch (t.type) {
					case as.R:
						return t.payload || !1;
					case as.A:
						return !1;
					case as.K: {
						const {
							name: r
						} = t.payload;
						return !!r && e
					}
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Vr.g:
						return t.payload.isOriginalContent || !1;
					case hs.b:
					case hs.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var dn = (e = !1, t) => {
				switch (t.type) {
					case as.S:
						return t.payload || !1;
					case hs.b:
					case hs.n:
						return !!t.payload.poll;
					case as.A:
						return !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					default:
						return e
				}
			};
			var un = (e = !1, t) => {
				switch (t.type) {
					case as.W: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case as.A:
						return !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case hs.b:
					case hs.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var ln = (e = !1, t) => {
				switch (t.type) {
					case hs.b:
					case hs.n:
					case as.A:
						return !1;
					case Vr.n:
						return t.payload;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Vr.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var pn = (e = !1, t) => {
				switch (t.type) {
					case as.T:
						return t.payload || !1;
					case as.A:
						return !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case Vr.g:
						return t.payload.isSpoiler || !1;
					case hs.b:
					case hs.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var bn = (e = "", t) => {
				switch (t.type) {
					case m.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case O.a:
					case as.i:
					case as.q:
					case as.A:
					case m.h:
						return "";
					default:
						return e
				}
			};
			var fn = (e = "", t) => {
				switch (t.type) {
					case m.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case O.a:
					case as.i:
					case as.q:
					case as.A:
					case m.h:
						return "";
					default:
						return e
				}
			};
			var yn = (e = null, t) => {
					switch (t.type) {
						case as.J:
						case as.K:
							return t.payload;
						case as.I:
						case O.a:
							return null;
						default:
							return e
					}
				},
				mn = r("./src/reddit/actions/polls.ts");
			var En = (e = null, t) => {
					switch (t.type) {
						case mn.a:
							return {
								...t.payload
							};
						case hs.b:
						case hs.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case m.h:
						case as.A:
							return null;
						case O.a:
							return Fs(t) !== Me.Db.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				On = r("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				_n = r("./src/reddit/helpers/scheduledPosts/index.ts");
			var hn = (e = null, t) => {
				var r, s, n, a;
				switch (t.type) {
					case as.W: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case as.A:
					case Vr.g:
					case as.K:
						return null;
					case O.a:
						if (Fs(t) === Me.Db.POST_CREATION) {
							const c = null === (a = (null !== (n = null === (s = null === (r = t.payload) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.match.queryParams) && void 0 !== n ? n : {}).frequency) || void 0 === a ? void 0 : a.toUpperCase();
							if (c && Object(Ks.m)(c)) {
								const t = Object(On.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										...On.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(On.b)(new Date(t.submitDate), c)
									}
								}
							}
							return e
						}
						return null;
					case hs.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case hs.b: {
						const e = t.payload;
						return {
							...Object(_n.h)(e)
						}
					}
					default:
						return e
				}
			};
			var In = (e = !1, t) => {
				const {
					type: r,
					payload: s
				} = t;
				switch (r) {
					case as.U:
						return s || !1;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case hs.b:
					case hs.n:
					case Vr.g:
						return !1;
					default:
						return e
				}
			};
			var gn = (e = "", t) => {
				switch (t.type) {
					case as.g:
						return t.payload || "";
					case O.a:
						return Fs(t) !== Me.Db.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var Sn = (e = null, t) => {
				switch (t.type) {
					case O.a:
						return Fs(t) !== Me.Db.POST_CREATION ? null : e;
					case as.A:
						return null;
					case hs.b:
					case hs.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var Dn = (e = !0, t) => {
				switch (t.type) {
					case as.A:
						return !0;
					case as.V:
						return t.payload;
					case O.a:
						return Fs(t) !== Me.Db.POST_CREATION || e;
					case Vr.g:
						return t.payload.sendReplies;
					case hs.b:
					case hs.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var Tn = (e = null, t) => {
				switch (t.type) {
					case as.W: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case as.A:
					case Vr.g:
					case as.K:
						return null;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION ? e : null;
					case hs.b:
					case hs.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const jn = Me.Lb.POST;
			var vn = (e = jn, t) => {
				switch (t.type) {
					case as.A:
						return jn;
					case as.r:
						return Me.Lb.CROSSPOST;
					case as.i:
						return t.payload.submissionType || jn;
					case O.a: {
						if (Fs(t) !== Me.Db.POST_CREATION) return jn;
						const r = Gs(t);
						if (!r) return e;
						const {
							title: s = "",
							url: n,
							text: a = "",
							media: c = !1,
							selftext: o = !1
						} = r, d = s && !a && !o;
						return c ? Me.Lb.MEDIA : void 0 !== n || d ? Me.Lb.LINK_ONLY : a || o ? Me.Lb.POST : e
					}
					case Vr.g: {
						const e = t.payload;
						return Bs.a[e.kind]
					}
					case hs.b:
					case hs.n: {
						const e = t.payload;
						return e.poll ? Me.Lb.POLL : e.url ? Me.Lb.LINK_ONLY : Me.Lb.POST
					}
					default:
						return e
				}
			};
			var An = (e = null, t) => {
					switch (t.type) {
						case as.W: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case as.A:
						case Vr.g:
						case as.K:
							return null;
						case O.a:
							return Fs(t) === Me.Db.POST_CREATION ? e : null;
						case hs.b:
						case hs.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				Pn = r("./src/reddit/models/Poll/index.ts");
			const wn = e => `Should ${e||"username"} become the top moderator?`,
				Cn = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Rn = (e = "", t) => {
					switch (t.type) {
						case as.r:
							return t.payload.postTitle || "";
						case as.j:
							return t.payload || "";
						case as.z: {
							const {
								title: r
							} = t.payload;
							return e || (r || "")
						}
						case as.A:
							return "";
						case O.a: {
							if (Fs(t) !== Me.Db.POST_CREATION) return "";
							const r = Gs(t);
							return r && r.title ? (e => e ? e.replace(/\+/g, " ") : "")(r.title) : e
						}
						case Vr.g:
							return t.payload.title;
						case as.q: {
							const {
								oldType: r,
								type: s
							} = t.payload;
							return s === Pn.a.ReplaceTopMod ? wn("") : s === Pn.a.Spinoff ? Cn("") : r === Pn.a.ReplaceTopMod || r === Pn.a.Spinoff ? "" : e
						}
						case m.c: {
							const {
								username: e
							} = t.payload;
							return wn(e)
						}
						case m.b: {
							const {
								subredditName: e
							} = t.payload;
							return Cn(e)
						}
						case as.i: {
							const {
								extra: r
							} = t.payload;
							return !r || r.govType !== Pn.a.ReplaceTopMod && r.govType !== Pn.a.Spinoff ? e : ""
						}
						case hs.b:
						case hs.n:
							return t.payload.title;
						default:
							return e
					}
				},
				Ln = Object(c.c)({
					body: Zs,
					eventSchedule: en,
					flair: rn,
					govType: sn,
					isChatPost: nn,
					isContestMode: an,
					isNSFW: cn,
					isOC: on,
					isPostAsMetaMod: un,
					isPoll: dn,
					isPublicLink: ln,
					isSpoiler: pn,
					newSubreddit: bn,
					newTopMod: fn,
					nextSubreddit: yn,
					polls: En,
					postSchedule: hn,
					postToTwitter: In,
					recaptcha: gn,
					scheduledPostId: Sn,
					sendReplies: Dn,
					stickyPosition: Tn,
					submissionType: vn,
					suggestedSort: An,
					title: Rn
				});
			var Nn = (e = null, t) => {
				switch (t.type) {
					case O.a: {
						if (Fs(t) !== Me.Db.POST_CREATION) return null;
						const r = Gs(t);
						return r && r.text && (e => e ? e.replace(/\+/g, " ") : "")(r.text) ? Hs.h.MARKDOWN : e
					}
					case as.D: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case as.E:
						return null;
					case as.M: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case hs.b:
					case hs.n:
						return t.payload.contentType === Ks.a.RTJSON ? Hs.h.RICH_TEXT : Hs.h.MARKDOWN;
					default:
						return e
				}
			};
			const kn = {
				title: [],
				body: [],
				link: [],
				flair: []
			};
			var xn = (e = kn, t) => {
				switch (t.type) {
					case as.c:
					case as.d:
					case as.e:
						return e[Me.ob.BODY] ? {
							...e,
							[Me.ob.BODY]: []
						} : e;
					case as.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return e[Me.ob.BODY] && r ? {
							...e,
							[Me.ob.BODY]: []
						} : e
					}
					case as.j:
						return e[Me.ob.TITLE] ? {
							...e,
							[Me.ob.TITLE]: []
						} : e;
					case as.H: {
						const r = t.payload;
						return {
							...e,
							[r]: []
						}
					}
					case as.n: {
						const r = t.payload;
						return r ? {
							...e,
							[r]: []
						} : kn
					}
					case as.G:
					case as.F:
						return ((e, t) => {
							const r = (t.fields || []).filter(({
								field: e
							}) => Object(Hs.u)(e));
							if (!r.length) return e;
							const s = r.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
							return {
								...e,
								...s
							}
						})(e, t.payload);
					case O.a:
						return Fs(t) !== Me.Db.POST_CREATION ? kn : e;
					default:
						return e
				}
			};
			var Un = (e = !1, t) => {
				switch (t.type) {
					case as.b:
					case as.c:
					case as.d:
					case as.e:
					case as.f:
					case as.j:
					case as.i:
					case as.Q:
					case as.R:
					case as.T:
					case Vr.n:
					case as.V:
					case as.W:
						return !0;
					case as.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					case as.L:
					case hs.h:
						return !1;
					case as.N:
						return t.payload;
					case O.a:
						return Fs(t) === Me.Db.POST_CREATION && e;
					case as.A:
					case Vr.l:
					case Vr.g:
						return !1;
					default:
						return e
				}
			};
			const Mn = Hs.q.Post;
			var Fn = (e = Mn, t) => {
					switch (t.type) {
						case as.w:
							return Hs.q.Post;
						case as.B:
							return t.payload;
						case Vr.j:
							return Hs.q.Draft;
						case O.a:
							return Fs(t) !== Me.Db.POST_CREATION ? Mn : e;
						default:
							return e
					}
				},
				Gn = Object(c.c)({
					editorMode: Nn,
					fieldValidation: xn,
					isChanged: Un,
					submitMode: Fn
				});
			var Bn = (e = "", t) => {
				switch (t.type) {
					case as.D:
						return t.payload.editorMode === Hs.h.MARKDOWN ? t.payload.postContent || "" : e;
					case as.E:
						return "";
					case as.M:
						return t.payload.editorMode === Hs.h.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const qn = Qs.a.createInitial;
			var Hn = (e = qn(), t) => {
					switch (t.type) {
						case as.E:
							return Qs.a.createInitial();
						case as.D: {
							const r = t.payload;
							return r.editorMode === Hs.h.RICH_TEXT && "object" == typeof r.postContent ? Qs.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case as.M: {
							const r = t.payload;
							return r.editorMode === Hs.h.RICH_TEXT && r.editorKey === Hs.g.POST_EDITING ? Qs.a.createInitial(r.content) : e
						}
						default:
							return e
					}
				},
				Kn = Object(c.c)({
					markdown: Bn,
					rte: Hn
				});
			var Vn = (e = null, t) => {
					switch (t.type) {
						case as.D: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case as.E:
							return null;
						default:
							return e
					}
				},
				Wn = Object(c.c)({
					draft: Kn,
					postId: Vn
				}),
				$n = Object(c.c)({
					api: Ls,
					drafts: Ms,
					formData: Ln,
					formState: Gn,
					postEditing: Wn
				}),
				Qn = r("./src/reddit/actions/dashboard/constants.ts");
			const zn = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var Xn = (e = zn, t) => {
				switch (t.type) {
					case Qn.a:
						return {
							...e, selectedComponent: t.payload
						};
					case Qn.d: {
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
					case Qn.c: {
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
			var Jn = (e = !1, t) => {
				switch (t.type) {
					case Ae.c:
						return !1;
					case Ae.b:
						return !0;
					default:
						return e
				}
			};
			var Zn = (e = !1, t) => {
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
				ea = Object(c.c)({
					error: Yn,
					loaded: Jn,
					pending: Zn
				}),
				ta = Object(c.c)({
					list: ea
				}),
				ra = r("./node_modules/lodash/isEmpty.js"),
				sa = r.n(ra);
			const na = {};
			var aa = (e = na, t) => {
					switch (t.type) {
						case Ae.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							return sa()(r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				ca = r("./node_modules/lodash/forOwn.js"),
				oa = r.n(ca),
				da = r("./src/reddit/helpers/name/index.ts");
			const ia = {};
			var ua = (e = ia, t) => {
					switch (t.type) {
						case Ae.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							if (sa()(r)) return e;
							const s = {};
							return oa()(r, e => {
								s[Object(da.g)(e.unitName)] = e.id
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				la = Object(c.c)({
					api: ta,
					models: aa,
					nameToId: ua
				}),
				pa = r("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const ba = [];
			var fa = (e = ba, t) => {
					switch (t.type) {
						case pa.a: {
							const {
								subredditId: r
							} = t.payload;
							return [...e, r]
						}
						default:
							return e
					}
				},
				ya = r("./src/reddit/actions/economics/banners/constants.ts");
			const ma = {
				dismissedBanners: {}
			};
			var Ea = (e = ma, t) => {
					switch (t.type) {
						case ya.c: {
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
						case ya.d: {
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
						case ya.a:
						case ya.b: {
							const {
								subredditId: r,
								bannerType: s
							} = t.payload, n = e.dismissedBanners[r] || {}, a = t.type === ya.a;
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
				Oa = r("./src/reddit/models/Badge/managementPage.ts");
			const _a = {
				badgeType: Oa.a.Cosmetic,
				view: Oa.c.Gallery
			};
			var ha = (e = _a, t) => {
				switch (t.type) {
					case y.c: {
						const {
							badge: r,
							initialView: s
						} = t.payload;
						return r || s ? {
							...e,
							badgeType: r ? Object(Oa.d)(r.placement) : e.badgeType,
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
						return _a;
					default:
						return e
				}
			};
			var Ia = (e = null, t) => {
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
			const ga = {};
			var Sa = (e = ga, t) => {
				switch (t.type) {
					case y.e: {
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
			const Da = {};
			var Ta = (e = Da, t) => {
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
				ja = r("./src/reddit/actions/economics/me/constants.ts");
			const va = {
				fetched: !1,
				data: {}
			};
			var Aa = (e = va, t) => {
					switch (t.type) {
						case ja.a:
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
				Pa = r("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const wa = {
				fetched: !1,
				data: null
			};
			var Ca = (e = wa, t) => {
					switch (t.type) {
						case ja.b:
							return {
								fetched: !0, data: e.data
							};
						case ja.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				Ra = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				La = Object(c.c)({
					banners: Ea,
					currentBadgeManagementScreen: ha,
					currentModalArgs: Ia,
					emotes: Sa,
					gifs: Ta,
					me: Aa,
					paymentSystems: Pa.b,
					pointsCopy: Ca,
					subredditPremium: Ra.b
				}),
				Na = r("./src/reddit/actions/emoji.ts");
			const ka = {};
			var xa = (e = ka, t) => {
					switch (t.type) {
						case Na.h: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Na.g:
						case Na.f: {
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
				Ua = Object(c.c)({
					pending: xa
				}),
				Ma = Object(c.c)({
					list: Ua
				});
			const Fa = {};
			var Ga = (e = Fa, t) => {
					switch (t.type) {
						case Na.f:
						case Na.c:
							return e;
						case Na.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Na.d: {
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
						case Na.i: {
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
						case Na.e: {
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
				Ba = Object(c.c)({
					api: Ma,
					models: Ga
				}),
				qa = r("./src/reddit/actions/experiments.ts");
			const Ha = /^experiment_(.*)$/i,
				Ka = e => {
					const t = e.match(Ha);
					if (null !== t) return t[1]
				},
				Va = {};
			var Wa = (e = Va, t) => {
					switch (t.type) {
						case O.a: {
							const r = Gs(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = Ka(e);
								t && (s[t.toLowerCase()] = r[e] || "")
							}
							return sa()(s) ? e : {
								...e,
								...s
							}
						}
						case qa.b: {
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
				$a = r("./src/reddit/actions/externalAccount.ts");
			const Qa = {};
			var za = (e = Qa, t) => {
				switch (t.type) {
					case $a.e:
					case $a.f: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case $a.d: {
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
			var Ya = (e = Xa, t) => {
					switch (t.type) {
						case $a.e: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case $a.f:
						case $a.d: {
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
				Ja = Object(c.c)({
					error: za,
					pending: Ya
				});
			const Za = {};
			var ec = (e = Za, t) => {
				switch (t.type) {
					case $a.l:
					case $a.k: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case $a.j: {
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
			const tc = {};
			var rc = (e = tc, t) => {
					switch (t.type) {
						case $a.b: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case $a.c:
						case $a.a: {
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
				sc = Object(c.c)({
					error: ec,
					pending: rc
				});
			const nc = {};
			var ac = (e = nc, t) => {
				switch (t.type) {
					case $a.i:
					case $a.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case $a.g: {
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
			const cc = {};
			var oc = (e = cc, t) => {
				switch (t.type) {
					case $a.h: {
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
			const dc = {};
			var ic = (e = dc, t) => {
					switch (t.type) {
						case $a.i: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case $a.h:
						case $a.g: {
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
				uc = Object(c.c)({
					error: ac,
					fetched: oc,
					pending: ic
				});
			const lc = {};
			var pc = (e = lc, t) => {
				switch (t.type) {
					case $a.l:
					case $a.k: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case $a.j: {
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
			const bc = {};
			var fc = (e = bc, t) => {
					switch (t.type) {
						case $a.l: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case $a.k:
						case $a.j: {
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
				yc = Object(c.c)({
					error: pc,
					pending: fc
				}),
				mc = Object(c.c)({
					connect: Ja,
					disconnect: sc,
					user: yc,
					subreddit: uc
				});
			const Ec = {};
			var Oc = (e = Ec, t) => {
				switch (t.type) {
					case $a.h: {
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
			const _c = {};
			var hc = (e = _c, t) => {
					switch (t.type) {
						case $a.k: {
							const {
								username: r,
								accountsData: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case $a.c: {
							const {
								username: r,
								provider: s
							} = t.payload, n = e[r];
							return n && n[s] ? {
								...e,
								[r]: ks()(n, s)
							} : e
						}
						default:
							return e
					}
				},
				Ic = Object(c.c)({
					api: mc,
					user: hc,
					subreddit: Oc
				}),
				gc = r("./src/reddit/featureFlags/index.ts");
			const Sc = new Set(["0", "disabled", "false", "off", ""]);
			var Dc = e => !Sc.has(e.toLowerCase());
			const Tc = gc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				jc = gc.a.reduce((e, t) => (e[t] = null, e), {});
			var vc = (e = jc, t) => {
					switch (t.type) {
						case O.a: {
							const r = Gs(t);
							if (void 0 !== r) {
								const t = {};
								for (const e in r) {
									const s = Object(gc.g)(e);
									if (s) {
										const n = Tc[s.toLowerCase()];
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
				Ac = Object(c.c)({
					overrides: vc
				}),
				Pc = r("./src/reddit/actions/focusedVerticals/constants.ts");
			const wc = {
				focusedVerticalGqlError: null
			};
			var Cc = (e = wc, t) => {
				switch (t.type) {
					case Pc.h:
					case Pc.g:
					case Pc.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case Pc.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const Rc = {
				focusedVerticalGqlPending: !1
			};
			var Lc = (e = Rc, t) => {
					switch (t.type) {
						case Pc.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case Pc.e:
						case Pc.g:
						case Pc.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				Nc = Object(c.c)({
					error: Cc,
					pending: Lc
				});
			var kc = (e = "", t) => {
				switch (t.type) {
					case Pc.g:
					case Pc.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const xc = {
				dismissed: !0
			};
			var Uc = (e = xc, t) => {
				switch (t.type) {
					case Pc.j:
						return {
							dismissed: !1
						};
					case Pc.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var Mc = (e = null, t) => {
				switch (t.type) {
					case Pc.g:
					case Pc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Fc = (e = null, t) => {
				switch (t.type) {
					case Pc.g:
					case Pc.c:
					case Pc.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Gc = (e = null, t) => {
					switch (t.type) {
						case Pc.g:
						case Pc.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Bc = Object(c.c)({
					api: Nc,
					components: Uc,
					interactedSubredditIds: Mc,
					recommendedSubredditIds: Gc,
					category: kc,
					lastLoadedEnv: Fc
				});
			Object(Ue.a)("FONTS_FONT_FILES_PARSED");
			const qc = [];
			var Hc = (e = qc, t) => {
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
			var Vc = (e = !1, t) => {
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
			var Wc = (e = !1, t) => {
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
				$c = Object(c.c)({
					error: Kc,
					pending: Vc,
					showLoader: Wc
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
			var Xc = (e = null, t) => {
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
			var Jc = (e = !1, t) => {
				switch (t.type) {
					case oe.J:
						return !0;
					default:
						return e
				}
			};
			var Zc = (e = "", t) => {
				switch (t.type) {
					case oe.w:
						return t.payload;
					case oe.K:
						return "";
					default:
						return e
				}
			};
			const eo = ve.n;
			var to = (e = eo, t) => {
					switch (t.type) {
						case oe.fb:
							return t.payload;
						case oe.K: {
							const {
								award: e
							} = t.payload;
							return e || eo
						}
						default:
							return e
					}
				},
				ro = Object(c.c)({
					api: $c,
					correlationId: Qc,
					gildModalThingId: Xc,
					isAnonymous: Yc,
					isIframed: Jc,
					message: Zc,
					gildedThing: zc,
					selectedAward: to
				});
			var so = (e = null, t) => {
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
				ao = Object(c.c)({
					error: so,
					pending: no
				});
			var co = (e = "", t) => {
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
				oo = Object(c.c)({
					api: ao,
					givePremiumModalAccountName: co
				}),
				io = r("./src/reddit/actions/header.ts"),
				uo = r("./src/reddit/actions/overlayEvents.ts");
			var lo = (e = !1, t) => {
					switch (t.type) {
						case io.a:
							return !1;
						case io.b:
							return !0;
						case io.c:
							return !e;
						case uo.b:
							return !1;
						default:
							return e
					}
				},
				po = Object(c.c)({
					isSubscriptionsDropdownOpen: lo
				});
			var bo = (e = !1, t) => {
					switch (t.type) {
						case "HTML_RESPONSE_STREAMING_STARTED":
							return !0;
						case "HTML_RESPONSE_STREAMING_ENDED":
							return !1;
						default:
							return e
					}
				},
				fo = r("./src/reddit/actions/imageUploads.ts");
			const yo = {};
			var mo = (e = yo, t) => {
					switch (t.type) {
						case fo.d: {
							const r = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case fo.c:
						case fo.e:
						case fo.b: {
							const r = t.payload;
							return e[r.id] ? {
								...e,
								[r.id]: r
							} : e
						}
						case fo.a: {
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
				Eo = r("./src/reddit/actions/interceptedAction.ts");
			var Oo = (e = null, t) => {
					switch (t.type) {
						case Eo.a:
							return t.payload;
						case Eo.b:
							return null;
						default:
							return e
					}
				},
				_o = r("./src/reddit/actions/changeUsername.ts");
			var ho = (e = !0, t) => {
					switch (t.type) {
						case _o.a:
							return !1;
						case _o.b:
							return !0;
						default:
							return e
					}
				},
				Io = r("./src/reddit/actions/emailVerificationTooltip.ts");
			var go = (e = !0, t) => {
					switch (t.type) {
						case Io.a:
							return !e;
						default:
							return e
					}
				},
				So = r("./src/reddit/actions/moderatingSubreddits.ts");
			var Do = (e = !1, t) => {
					switch (t.type) {
						case So.a: {
							if (e) return e;
							const r = t.payload;
							return Object.keys(r).some(e => !0 === r[e].posts)
						}
						case J.SUBREDDIT_LOADED:
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
				To = r("./src/reddit/actions/jsApi.ts");
			const jo = [];
			var vo = (e = jo, t) => {
					switch (t.type) {
						case To.a: {
							const r = t.payload;
							return -1 === e.indexOf(r) && (e = [...e, r]).sort(), e
						}
						default:
							return e
					}
				},
				Ao = r("./src/reddit/actions/leaderboard/constants.ts");
			const Po = {};
			var wo = (e = Po, t) => {
				switch (t.type) {
					case Ao.a: {
						const {
							subredditId: r,
							data: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Ao.b:
					case Ao.c: {
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
			const Co = {};
			var Ro = (e = Co, t) => {
					switch (t.type) {
						case Ao.a:
						case Ao.c: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...n
							} = e;
							return n
						}
						case Ao.b: {
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
				Lo = Object(c.c)({
					error: wo,
					pending: Ro
				});
			const No = {};
			var ko = (e = No, t) => {
					switch (t.type) {
						case Ao.c: {
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
					api: Lo,
					models: ko
				});
			var Uo = (e = "", t) => {
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
			const Mo = {};
			var Fo = (e = Mo, t) => {
				switch (t.type) {
					case Fe.b:
					case Fe.c:
					case Y.SEARCH_PENDING:
					case Y.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Me.Pb.Subreddits) && -1 === s.indexOf(Me.Pb.Users) ? e : {
							...e,
							[r]: null
						}
					}
					case Fe.a:
					case Y.SEARCH_FAILED: {
						const {
							key: r,
							error: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Me.Pb.Subreddits) && -1 === n.indexOf(Me.Pb.Users) ? e : {
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
			const Go = {};
			var Bo = (e = Go, t) => {
					switch (t.type) {
						case Fe.b:
						case Y.SEARCH_PENDING: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Me.Pb.Subreddits) && -1 === s.indexOf(Me.Pb.Users) ? e : {
								...e,
								[r]: !0
							}
						}
						case Fe.c:
						case Fe.a:
						case Y.SEARCH_RESULTS_RECEIVED:
						case Y.SEARCH_FAILED: {
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
				qo = Object(c.c)({
					error: Fo,
					pending: Bo
				});
			const Ho = {};
			var Ko = (e = Ho, t) => {
				switch (t.type) {
					case Fe.c: {
						const {
							fetchedToken: r,
							key: s,
							type: n
						} = t.payload;
						if (-1 === n.indexOf(Me.Pb.Subreddits) && -1 === n.indexOf(Me.Pb.Users)) return e;
						const a = e[s];
						return {
							...e,
							[s]: {
								...a,
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
			const Vo = {};
			var Wo = (e = Vo, t) => {
				switch (t.type) {
					case Fe.c: {
						const {
							key: r,
							listingOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Me.Pb.Subreddits) && -1 === n.indexOf(Me.Pb.Users) ? e : {
							...e,
							[r]: e[r].concat(s)
						}
					}
					case Y.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							listingOrder: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Me.Pb.Subreddits) && -1 === n.indexOf(Me.Pb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const $o = {};
			var Qo = (e = $o, t) => {
					switch (t.type) {
						case Fe.c:
						case Y.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								tokens: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Me.Pb.Subreddits) && -1 === n.indexOf(Me.Pb.Users) ? e : s.listings ? {
								...e,
								[r]: {
									token: s.listings
								}
							} : Object(Vt.a)(e, r)
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
					api: qo,
					identifiers: Wo,
					fetchedTokens: Ko,
					loadMore: Qo
				}),
				Xo = r("./src/reddit/actions/eventPosts/constants.ts"),
				Yo = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				Jo = r("./src/reddit/actions/pages/topic.ts");
			const Zo = {};
			var ed = (e = Zo, t) => {
					switch (t.type) {
						case Pe.c:
						case Pe.b:
						case Le.c:
						case Le.b:
						case J.SUBREDDIT_PENDING:
						case J.SUBREDDIT_LOADED:
						case Pe.g:
						case Pe.f:
						case Re.e:
						case Re.f:
						case Re.i:
						case Re.h:
						case Ce.s:
						case Ce.r:
						case Yo.b:
						case Yo.c:
						case z.PROFILE_POSTS_PENDING:
						case z.PROFILE_POSTS_LOADED:
						case z.MORE_POSTS_PENDING:
						case z.MORE_POSTS_LOADED:
						case Z.f:
						case Z.e:
						case ke.f:
						case ke.e:
						case ee.j:
						case Jo.TOPIC_DATA_PENDING:
						case Jo.TOPIC_DATA_LOADED:
						case Jo.MORE_POSTS_PENDING:
						case Jo.MORE_POSTS_LOADED:
						case ee.i:
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
						case Y.SEARCH_PENDING:
						case Y.SEARCH_RESULTS_RECEIVED:
						case Fe.b:
						case Fe.c: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: null
							}
						}
						case Pe.a:
						case Le.a:
						case J.SUBREDDIT_FAILED:
						case Pe.e:
						case Re.g:
						case Ce.q:
						case Yo.a:
						case ee.h:
						case Z.d:
						case ke.d:
						case z.PROFILE_POSTS_FAILED:
						case z.MORE_POSTS_FAILED:
						case Jo.TOPIC_DATA_FAILED:
						case Jo.MORE_POSTS_FAILED:
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
						case Y.SEARCH_FAILED:
						case Fe.a: {
							const {
								error: r,
								key: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				td = r("./src/reddit/actions/linkedPosts/constants.ts"),
				rd = r("./src/reddit/actions/subreddit/constants.ts");
			const sd = {};
			var nd = (e = sd, t) => {
					switch (t.type) {
						case Pe.c:
						case Le.c:
						case z.PROFILE_POSTS_PENDING:
						case ke.f:
						case J.SUBREDDIT_PENDING:
						case Pe.g:
						case Re.f:
						case Re.i:
						case Ce.s:
						case Yo.c:
						case Z.f:
						case z.MORE_POSTS_PENDING:
						case ee.j:
						case Jo.MORE_POSTS_PENDING:
						case Xo.e: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Y.SEARCH_PENDING:
						case Fe.b: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: !0
							}
						}
						case Pe.b:
						case Pe.a:
						case Le.a:
						case Le.b:
						case ke.d:
						case ke.e:
						case z.PROFILE_POSTS_FAILED:
						case z.PROFILE_POSTS_LOADED:
						case J.SUBREDDIT_LOADED:
						case J.SUBREDDIT_FAILED:
						case Pe.f:
						case Pe.e:
						case td.a:
						case td.b:
						case Re.e:
						case Re.d:
						case Re.h:
						case Re.g:
						case Ce.r:
						case Ce.q:
						case Z.d:
						case Z.e:
						case z.MORE_POSTS_FAILED:
						case z.MORE_POSTS_LOADED:
						case rd.k:
						case Yo.b:
						case Yo.a:
						case ee.i:
						case ee.h:
						case Jo.MORE_POSTS_LOADED:
						case Jo.MORE_POSTS_FAILED:
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
						case rd.s: {
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
						case Y.SEARCH_RESULTS_RECEIVED:
						case Y.SEARCH_FAILED:
						case Fe.c:
						case Fe.a: {
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
				ad = Object(c.c)({
					error: ed,
					pending: nd
				}),
				cd = r("./src/reddit/actions/postList.ts"),
				od = r("./node_modules/lodash/omitBy.js"),
				dd = r.n(od);

			function id(e, t) {
				return t = t.toLowerCase(), dd()(e, (e, r) => r === t || r.startsWith(`${t}--[`))
			}
			const ud = {};
			var ld = (e = ud, t) => {
				switch (t.type) {
					case cd.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case cd.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? ks()(e, [r]) : e
					}
					case J.SUBREDDIT_INVALIDATE_LISTING:
						return id(e, t.payload);
					default:
						return e
				}
			};
			const pd = {};
			var bd = (e = pd, t) => {
					switch (t.type) {
						case Re.e:
						case Pe.b:
						case Le.b:
						case J.SUBREDDIT_LOADED:
						case z.PROFILE_POSTS_LOADED:
						case Jo.TOPIC_DATA_LOADED: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: {}
							}
						}
						case Pe.f:
						case Re.h:
						case Ce.r:
						case Z.e:
						case z.MORE_POSTS_LOADED:
						case ee.i:
						case Jo.MORE_POSTS_LOADED: {
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
						case Fe.c: {
							const {
								fetchedToken: r,
								key: s,
								type: n
							} = t.payload;
							if (n.indexOf(Me.Pb.Posts) > -1) {
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
						case J.SUBREDDIT_INVALIDATE_LISTING:
							return id(e, t.payload);
						default:
							return e
					}
				},
				fd = r("./src/reddit/actions/post.ts");
			const yd = {};
			var md = (e = yd, t) => {
					switch (t.type) {
						case Pe.c:
						case Re.f:
						case Le.c:
						case z.PROFILE_POSTS_PENDING:
						case J.SUBREDDIT_PENDING:
						case ke.f:
						case z.PROFILE_POSTS_PENDING:
						case Jo.TOPIC_DATA_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: []
							}
						}
						case Ae.e:
						case td.b:
						case Re.e:
						case Pe.b:
						case Le.b:
						case J.SUBREDDIT_LOADED:
						case rd.k:
						case Yo.b:
						case ke.e:
						case z.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Jo.TOPIC_DATA_LOADED:
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
						case rd.s: {
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
						case Pe.f:
						case Re.h:
						case Ce.r:
						case z.MORE_POSTS_LOADED:
						case Z.e:
						case ee.i:
						case Jo.MORE_POSTS_LOADED:
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
						case Y.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								postOrder: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: s
							}
						}
						case Fe.c: {
							const {
								key: r,
								postOrder: s,
								type: n
							} = t.payload;
							return -1 === n.indexOf(Me.Pb.Posts) ? e : {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case fd.k: {
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
						case J.SUBREDDIT_INVALIDATE_LISTING:
							return id(e, t.payload);
						default:
							return e
					}
				},
				Ed = r("./src/lib/makeListingKey/index.ts"),
				Od = r("./src/reddit/actions/preferences.ts");
			const _d = {};
			var hd = (e = _d, t) => {
				switch (t.type) {
					case J.SUBREDDIT_LOADED: {
						const {
							key: r,
							listingSort: s
						} = t.payload;
						return s && !Object(Ed.b)(r) ? {
							...e,
							[r]: {
								sort: s,
								hasChanged: !1
							}
						} : e
					}
					case Od.a:
					case Od.q: {
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
					case Pe.b:
					case Le.b:
					case J.SUBREDDIT_LOADED:
					case ke.e:
					case z.PROFILE_POSTS_LOADED:
					case Pe.f:
					case Re.e:
					case Re.h:
					case Ce.r:
					case Z.e:
					case z.MORE_POSTS_LOADED:
					case ee.i:
					case Jo.TOPIC_DATA_LOADED:
					case Jo.MORE_POSTS_LOADED: {
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
						} : Object(Vt.a)(e, r)
					}
					case Fe.c:
					case Y.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							tokens: s,
							type: n
						} = t.payload;
						return -1 === n.indexOf(Me.Pb.Posts) ? e : s.posts ? {
							...e,
							[r]: {
								token: s.posts
							}
						} : Object(Vt.a)(e, r)
					}
					case J.SUBREDDIT_INVALIDATE_LISTING:
						return id(e, t.payload);
					default:
						return e
				}
			};
			const Sd = {};
			var Dd = (e = Sd, t) => {
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
				Td = Object(c.c)({
					api: ad,
					endMarkers: ld,
					fetchedTokens: bd,
					ids: md,
					listingSort: hd,
					loadMore: gd,
					pageInfo: Dd
				}),
				jd = Object(c.c)({
					activeKey: Uo,
					listingOrder: zo,
					postOrder: Td
				});
			var vd = (e = null, t) => {
				switch (t.type) {
					case Pe.b: {
						const r = t.payload;
						return sa()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var Ad = (e = null, t) => {
				switch (t.type) {
					case Pe.b: {
						const r = t.payload;
						return sa()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Pd = (e = !1, t) => {
				switch (t.type) {
					case Pe.b:
						return !0;
					default:
						return e
				}
			};
			var wd = (e = !1, t) => {
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Cd = Object(c.c)({
					announcements: vd,
					featured: Ad,
					isFrontpageLoaded: Pd,
					shouldShowAnnouncements: wd
				}),
				Rd = r("./src/reddit/actions/media.ts");
			const Ld = {};
			var Nd = (e = Ld, t) => {
				switch (t.type) {
					case Rd.b: {
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
			var xd = (e = kd, t) => {
					switch (t.type) {
						case Rd.e: {
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
				Ud = Object(c.c)({
					currentSlideIndex: Nd,
					isGalleryTileLayout: xd
				});
			var Md = (e = !0, t) => {
				switch (t.type) {
					case Rd.c:
						return t.payload;
					default:
						return e
				}
			};
			var Fd = (e = .5, t) => {
					switch (t.type) {
						case Rd.d:
							return t.payload;
						default:
							return e
					}
				},
				Gd = Object(c.c)({
					isMuted: Md,
					volume: Fd
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
				Kd = r("./src/reddit/actions/subredditModeration/constants.ts");
			const Vd = {};
			var Wd = (e = Vd, t) => {
				switch (t.type) {
					case J.SUBREDDIT_LOADED:
					case $.b:
					case $.f:
					case Ne.PAGE_LOADED: {
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
					case W.i:
					case W.f:
					case W.m:
					case W.p:
					case W.v: {
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
					case ee.f:
					case Re.e:
					case W.k: {
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
					case Kd.Z: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Vt.a)(e, r)
					}
					case Kd.S: {
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
					case fd.e:
						return t.payload;
					case fd.d:
						return null
				}
				return e
			};
			var Qd = (e = null, t) => {
				switch (t.type) {
					case Re.b:
					case Re.k:
						return null;
					case Re.a:
					case Re.j:
						return t.payload;
					default:
						return e
				}
			};
			var zd = (e = !1, t) => {
					switch (t.type) {
						case Re.b:
						case Re.k:
							return !0;
						case Re.c:
						case Re.a:
						case Re.l:
						case Re.j:
							return !1;
						default:
							return e
					}
				},
				Xd = Object(c.c)({
					error: Qd,
					pending: zd
				});
			const Yd = [];
			var Jd = (e = Yd, t) => {
					switch (t.type) {
						case Re.e: {
							const r = t.payload,
								{
									filteredSubreddits: s
								} = r;
							return s || e
						}
						case Re.j: {
							const r = t.payload;
							return [...e, r]
						}
						case Re.k:
						case Re.a: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						default:
							return e
					}
				},
				Zd = Object(c.c)({
					api: Xd,
					names: Jd
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
			var ni = (e = si, t) => {
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
			const ai = {};
			var ci = (e = ai, t) => {
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
					error: ni,
					pending: ci
				}),
				di = r("./src/reddit/models/Comment/index.ts");
			const ii = {};
			var ui = (e = ii, t) => {
					switch (t.type) {
						case K.b:
							const {
								comment: r, parentCommentId: s, depth: n, originId: a, isChatSort: c
							} = t.payload;
							if (!c) {
								if (a) {
									const t = "moreComments-" + a,
										c = e[t],
										o = r.id.split("_")[1];
									if (c) {
										const r = c.numComments + 1;
										if (c.depth && n === c.depth) {
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
											depth: n,
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
					case Ce.b:
					case Ce.c:
						return null;
					case Ce.a:
						return t.payload;
					default:
						return e
				}
			};
			var bi = (e = !1, t) => {
				switch (t.type) {
					case Ce.a:
					case Ce.c:
						return !0;
					case Ce.b:
						return !1;
					default:
						return e
				}
			};
			var fi = (e = null, t) => {
					switch (t.type) {
						case Le.b:
						case Ce.a:
						case Ce.c:
							return null;
						case Ce.b: {
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
					case Ce.f:
					case Ce.g:
						return null;
					case Ce.e:
						return t.payload;
					default:
						return e
				}
			};
			var Ei = (e = !1, t) => {
				switch (t.type) {
					case Ce.e:
					case Ce.g:
						return !0;
					case Ce.f:
						return !1;
					default:
						return e
				}
			};
			var Oi = (e = !1, t) => {
					switch (t.type) {
						case Ce.e:
						case Ce.g:
							return !1;
						case Ce.f:
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
					case Ce.i:
					case Ce.j:
						return null;
					case Ce.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ii = (e = !1, t) => {
				switch (t.type) {
					case Ce.h:
					case Ce.j:
						return !0;
					case Ce.i:
						return !1;
					default:
						return e
				}
			};
			var gi = (e = !1, t) => {
					switch (t.type) {
						case Ce.h:
						case Ce.j:
							return !1;
						case Ce.i:
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
					case Ce.l:
					case Ce.m:
						return null;
					case Ce.k:
						return t.payload;
					default:
						return e
				}
			};
			var Ti = (e = !1, t) => {
				switch (t.type) {
					case Ce.k:
					case Ce.m:
						return !0;
					case Ce.l:
						return !1;
					default:
						return e
				}
			};
			var ji = (e = !1, t) => {
					switch (t.type) {
						case Ce.k:
						case Ce.m:
							return !1;
						case Ce.l:
							return !0;
						default:
							return e
					}
				},
				vi = Object(c.c)({
					error: Di,
					fetched: Ti,
					pending: ji
				});
			var Ai = (e = null, t) => {
				switch (t.type) {
					case Ce.o:
					case Ce.p:
						return null;
					case Ce.n:
						return t.payload;
					default:
						return e
				}
			};
			var Pi = (e = !1, t) => {
				switch (t.type) {
					case Ce.n:
					case Ce.p:
						return !0;
					case Ce.o:
						return !1;
					default:
						return e
				}
			};
			var wi = (e = !1, t) => {
					switch (t.type) {
						case Ce.n:
						case Ce.p:
							return !1;
						case Ce.o:
							return !0;
						default:
							return e
					}
				},
				Ci = Object(c.c)({
					error: Ai,
					fetched: Pi,
					pending: wi
				});
			var Ri = (e = !1, t) => {
				switch (t.type) {
					case Ce.t:
						return !1;
					case Ce.u:
						return !0;
					default:
						return e
				}
			};
			var Li = (e = !1, t) => {
					switch (t.type) {
						case Ce.t:
							return !0;
						case Ce.u:
							return !1;
						default:
							return e
					}
				},
				Ni = Object(c.c)({
					fetched: Ri,
					pending: Li
				});
			var ki = (e = null, t) => {
				switch (t.type) {
					case Ce.A:
					case Ce.B:
						return null;
					case Ce.z:
						return t.payload;
					default:
						return e
				}
			};
			var xi = (e = !1, t) => {
				switch (t.type) {
					case Ce.A:
					case Ce.z:
						return !1;
					case Ce.B:
						return !0;
					default:
						return e
				}
			};
			var Ui = (e = !0, t) => {
					switch (t.type) {
						case Ce.A:
							return !0;
						case Ce.B:
						case Ce.z:
							return !1;
						default:
							return e
					}
				},
				Mi = Object(c.c)({
					error: ki,
					fetched: xi,
					pending: Ui
				});
			var Fi = (e = null, t) => {
				switch (t.type) {
					case Ce.w:
					case Ce.x:
						return null;
					case Ce.v:
						return t.payload;
					default:
						return e
				}
			};
			var Gi = (e = !1, t) => {
				switch (t.type) {
					case Ce.v:
					case Ce.x:
						return !0;
					case Ce.w:
						return !1;
					default:
						return e
				}
			};
			var Bi = (e = null, t) => {
					switch (t.type) {
						case Ce.v:
						case Ce.x:
							return null;
						case Ce.w:
							const {
								id: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				qi = Object(c.c)({
					error: Fi,
					fetched: Gi,
					pending: Bi
				}),
				Hi = Object(c.c)({
					addSubreddit: yi,
					create: _i,
					deleteMulti: Si,
					duplicate: vi,
					edit: Ci,
					forUser: Ni,
					recommendations: Mi,
					removeSubreddit: qi
				}),
				Ki = r("./node_modules/lodash/isEqual.js"),
				Vi = r.n(Ki),
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
			var zi = r("./src/reddit/actions/profile/constants.ts");
			const Xi = {};
			var Yi = (e = Xi, t) => {
					switch (t.type) {
						case Le.b:
						case Ce.r:
						case Ce.u:
						case zi.h: {
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
							return Vi()(e, a) ? e : a
						}
						case Ce.g:
						case Ce.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, n = e[r] ? e[r].slice() : [], a = Qi(n, s.url, (e, t) => e > t ? 1 : -1);
							return n.splice(a, 0, s.url), {
								...e,
								[r]: n
							}
						}
						case Ce.j: {
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
					case Le.b:
					case Ce.r:
					case Ce.u:
					case zi.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const n = {
									...t.payload.multireddits[s]
								},
								a = e[s];
							a && !Object(Zi.g)(n) && (n.subredditIds = a.subredditIds, n.profileIds = a.profileIds), s in e && Vi()(e[n.url], n) || (r = {
								...r,
								[s]: n
							})
						}
						return sa()(r) ? e : {
							...e,
							...r
						}
					}
					case Ce.g:
					case Ce.m: {
						const {
							multireddit: r
						} = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case Ce.j: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r], s
					}
					case Ce.p: {
						const r = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case Ce.x: {
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
					case Ce.c: {
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
						case Ce.B: {
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
				nu = Object(c.c)({
					api: Hi,
					byUserId: Yi,
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
							n = e.findIndex(e => e.id === r);
						return -1 === n ? e : [...e.slice(0, n), {
							...e[n],
							readAt: s
						}, ...e.slice(n + 1)]
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
					version: n
				} = e;
				return {
					id: parseInt(t),
					name: r,
					variant: s || void 0,
					version: n
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
					case qa.a: {
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
							case qa.a: {
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
			const ju = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null,
				metas: {}
			};
			var vu = (e = ju, t) => {
				switch (t.type) {
					case O.a: {
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
						const o = Object(Tu.e)(a),
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
					case O.e: {
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
			var Pu = (e = Au, t) => {
				switch (t.type) {
					case m.k: {
						const {
							pollId: r
						} = t.payload.pollResults, {
							[r]: s,
							...n
						} = e;
						return n
					}
					case m.j: {
						const {
							pollId: r
						} = t.payload, {
							[r]: s,
							...n
						} = e;
						return n
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
			const wu = {};
			var Cu = (e = wu, t) => {
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
				Ru = Object(c.c)({
					error: Pu,
					pending: Cu
				}),
				Lu = Object(c.c)({
					voting: Ru
				}),
				Nu = r("./src/reddit/actions/economics/predictions/constants.ts");
			const ku = {};
			var xu = (e = ku, t) => {
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
					case Pe.b:
					case J.SUBREDDIT_LOADED:
					case ee.i:
					case Pe.f:
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
						const n = {};
						return Object.keys(s).forEach(e => {
							s[e].pollData && (n[e] = (e => {
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
										userSelection: u,
										userWonAmount: l,
										votingEndTimestamp: p
									}
								} = e;
								return {
									id: t,
									createdAt: n,
									creatorId: r,
									subredditId: s.id,
									endsAt: p,
									postId: t,
									options: c,
									totalVoters: i,
									type: Pn.a.GA,
									isPrediction: a,
									totalStakeAmount: d,
									userSelection: u,
									userWonAmount: l,
									resolvedOptionId: o
								}
							})(s[e]))
						}), {
							...e,
							...n
						}
					}
					case Nu.c:
					case Nu.b:
						const {
							pollId: r, prediction: {
								options: s,
								selectedOptionId: n,
								totalVoteCount: a,
								...c
							}
						} = t.payload;
						return {
							...e, [r]: {
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
						};
					default:
						return e
				}
			};
			const Uu = {};
			var Mu = (e = Uu, t) => {
				switch (t.type) {
					case m.k: {
						const {
							[Pn.b.ByVoters]: r, pollId: s
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
					case Pe.b:
					case J.SUBREDDIT_LOADED:
					case ee.i:
					case Pe.f:
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
										[Pn.b.ByVoters]: n,
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
						return Object.keys(n).length ? {
							...e,
							...n
						} : e
					}
					default:
						return e
				}
			};
			const Fu = {};
			var Gu = (e = Fu, t) => {
					switch (t.type) {
						case m.k: {
							const {
								[Pn.b.ByVotingPower]: r, pollId: s
							} = t.payload.pollResults;
							return {
								...e,
								[s]: r
							}
						}
						case Pe.b:
						case J.SUBREDDIT_LOADED:
						case ee.i:
						case Pe.f:
						case $.b:
						case $.f: {
							const {
								governance: r
							} = t.payload;
							if (r) {
								const t = Object.keys(r).reduce((e, t) => {
									const s = r[t],
										{
											[Pn.b.ByVotingPower]: n,
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
				Bu = Object(c.c)({
					byVoters: Mu,
					byVotingPower: Gu
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
				Ku = Object(c.c)({
					api: Lu,
					models: xu,
					results: Bu,
					rewards: Hu
				});
			const Vu = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Wu = (e = Vu, t) => {
				switch (t.type) {
					case Gr.i:
					case Gr.j:
						return {
							...e, reorderError: null
						};
					case Gr.h:
						return {
							...e, reorderError: t.payload
						};
					case Gr.l:
					case Gr.m:
						return {
							...e, updateDescriptionError: null
						};
					case Gr.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case Gr.p:
					case Gr.q:
						return {
							...e, updateLayoutError: null
						};
					case Gr.o:
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
			var Qu = (e = $u, t) => {
					switch (t.type) {
						case Gr.i:
							return {
								...e, reorderPending: !0
							};
						case Gr.h:
						case Gr.j:
							return {
								...e, reorderPending: !1
							};
						case Gr.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case Gr.k:
						case Gr.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case Gr.p:
							return {
								...e, updateLayoutPending: !0
							};
						case Gr.o:
						case Gr.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				zu = Object(c.c)({
					error: Wu,
					pending: Qu
				}),
				Xu = r("./src/reddit/helpers/path/index.ts");
			const Yu = {},
				Ju = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(Xu.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				};
			var Zu = (e = Yu, t) => {
				switch (t.type) {
					case Ne.PAGE_LOADED:
					case Re.e:
					case Re.h:
					case Q.b:
					case Q.e:
					case ke.e:
					case ke.b:
					case z.PROFILE_POSTS_LOADED:
					case z.MORE_POSTS_LOADED:
					case J.SUBREDDIT_LOADED:
					case Pe.b:
					case Le.b:
					case J.SUBREDDIT_LOADED:
					case $.b:
					case $.f:
					case fd.g:
					case Ce.r:
					case Pe.f:
					case Z.e:
					case "RECOMMENDED_POSTS_LOADED":
					case ee.i:
					case Fe.c:
					case xe.b:
					case Y.SEARCH_RESULTS_RECEIVED:
					case Gr.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let n = r;
						if (s) {
							const e = Ju(s);
							n = xt()(r, e)
						}
						return {
							...e,
							...n
						}
					}
					case Gr.d: {
						const {
							collection: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						const n = r.id;
						let a = r;
						if (s) {
							a = Ju(s)(r)
						}
						return {
							...e,
							[n]: a
						}
					}
					case Gr.g: {
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
					case Gr.a: {
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
					case Gr.e: {
						const {
							collectionId: r
						} = t.payload, s = {
							...e
						};
						return delete s[r], s
					}
					case Gr.s: {
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
					case Gr.j: {
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
					case Gr.m: {
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
					case Gr.q: {
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
			const el = {};
			var tl = (e = el, t) => {
					switch (t.type) {
						case Ne.PAGE_LOADED:
						case Gr.f: {
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
						case Gr.d: {
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
						case Gr.e: {
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
				rl = Object(c.c)({
					models: Zu,
					subredditToIds: tl,
					api: zu
				}),
				sl = r("./src/reddit/actions/postFlair.ts"),
				nl = r("./src/reddit/models/Flair/index.ts");
			const al = {},
				cl = {
					displaySettings: {
						isEnabled: !1,
						position: nl.b.Left
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
			var dl = (e = al, t) => {
					switch (t.type) {
						case Ne.PAGE_LOADED:
						case Pe.f:
						case Re.e:
						case Re.h:
						case Ce.r:
						case Yo.b:
						case $.b:
						case $.f:
						case Pe.b:
						case Le.b:
						case Y.SEARCH_RESULTS_RECEIVED:
						case J.SUBREDDIT_LOADED:
						case Q.b:
						case Q.e:
						case X.c:
						case X.i:
						case X.e:
						case X.g:
						case Z.e:
						case xe.b:
						case xe.b:
						case ke.b:
						case ke.e:
						case z.MORE_POSTS_LOADED:
						case z.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Fe.c:
						case Fe.c:
						case ee.i:
							return ol(e, t.payload.postFlair);
						case sl.c: {
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
						case sl.a: {
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
						case sl.f: {
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
						case sl.b: {
							const {
								subredditId: r,
								templateId: s
							} = t.payload, n = e[r], {
								templates: a,
								templateIds: c
							} = n, o = ks()(a, s), d = c.filter(e => e !== s);
							return {
								...e,
								[r]: {
									...n,
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
							postId: n
						} = t.payload;
						if (r) return {
							...e,
							[n]: s
						};
						const a = {
							...e
						};
						return delete a[n], a
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
						case fd.a:
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
					case fd.b: {
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
					case fd.c: {
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
						case Re.e:
						case Re.h:
						case Pe.b:
						case J.SUBREDDIT_LOADED:
						case Pe.f:
						case Z.e:
						case "RECOMMENDED_POSTS_LOADED":
						case ee.i:
						case Fe.c:
						case Y.SEARCH_RESULTS_RECEIVED:
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
			const vl = {};
			var Al = (e = vl, t) => {
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
			const Pl = {};
			var wl = (e = Pl, t) => {
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
						case Pe.b:
						case J.SUBREDDIT_LOADED:
						case ee.i:
						case Pe.f:
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
							const n = Object.keys(s).reduce((e, t) => s[t].pollData ? (e[t] = t, e) : e, {});
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				Cl = r("./src/reddit/actions/bulkActions/constants.ts"),
				Rl = r("./src/reddit/actions/constants.ts"),
				Ll = r("./src/reddit/actions/flairManagement/constants.ts"),
				Nl = r("./src/reddit/actions/googleQASchema/constants.ts"),
				kl = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				xl = r("./src/reddit/actions/subredditTopContent.ts"),
				Ul = r("./src/reddit/helpers/isPost.ts"),
				Ml = r("./node_modules/lodash/pickBy.js"),
				Fl = r.n(Ml);

			function Gl(e, t) {
				const r = Fl()(t, (t, r = "") => !e[r] || !Vi()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var Bl = r("./src/reddit/models/Gold/Gild/index.tsx"),
				ql = r("./src/reddit/models/Media/index.ts"),
				Hl = r("./src/reddit/models/ModQueue/index.ts"),
				Kl = r("./src/reddit/models/Post/index.ts"),
				Vl = r("./src/reddit/models/Vote/index.ts"),
				Wl = r("./src/reddit/actions/subredditDuplicates.ts");
			const $l = {},
				Ql = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(Xu.b)(e.permalink);
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
				Yl = e => e.media && Object(ql.E)(e.media) ? {
					...Object(G.unsetIn)(e, ["source"])
				} : e,
				Jl = e => t => {
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
			var np = (e = $l, t) => {
				switch (t.type) {
					case O.a:
						if (Fs(t) === (Me.Db.COMMENTS || Me.Db.DUPLICATES)) {
							const r = Gs(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									n = Object(Kl.r)(s.partialPostId);
								if (e[n] && e[t]) return {
									...e,
									[n]: sp(e[n], e[t])
								}
							}
						}
						return e;
					case $.b:
					case $.f: {
						const r = Ql(t.payload.meta);
						return {
							...e,
							...xt()(t.payload.posts, rp([r, ep, tp, Yl, zl(e), Xl(e), Zl(e)]))
						}
					}
					case fd.g:
						return Gl(e, t.payload);
					case Wl.a:
						return Gl(e, t.payload.posts);
					case Ne.PAGE_LOADED:
					case td.b:
					case Re.e:
					case Re.h:
					case Q.b:
					case Q.e:
					case ke.e:
					case ke.b:
					case z.PROFILE_POSTS_LOADED:
					case z.MORE_POSTS_LOADED:
					case J.SUBREDDIT_LOADED:
					case Pe.b:
					case Le.b:
					case J.SUBREDDIT_LOADED:
					case Yo.b:
					case Ce.r:
					case Pe.f:
					case Z.e:
					case "RECOMMENDED_POSTS_LOADED":
					case rd.k:
					case ee.i:
					case xe.b:
					case Jo.TOPIC_DATA_LOADED:
					case Jo.MORE_POSTS_LOADED:
					case Xo.c:
					case Xo.d: {
						const r = Ql(t.payload.meta);
						return {
							...e,
							...xt()(t.payload.posts, rp([r, ep, tp, Yl, Jl(e), Zl(e)]))
						}
					}
					case rd.s: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								n = Ql(t.meta);
							Object.assign(r, xt()(t.posts, rp([n, ep, tp, Yl, Jl(e), Zl(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case Yo.b: {
						const r = Ql(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...xt()(t.payload.posts, rp([r, ep, tp, Yl, Jl(e), Zl(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ae.e:
					case Fe.c:
					case Y.SEARCH_RESULTS_RECEIVED: {
						const r = Ql(t.payload.meta),
							s = xt()(t.payload.posts, rp([r, tp, ep, Yl]));
						return q()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case fd.h: {
						const r = t.payload;
						return q()({
							...e
						}, r, (e, t) => ({
							...e,
							...t
						}))
					}
					case Rl.a: {
						const {
							id: r,
							vote: s
						} = t.payload, n = e[r];
						return n ? {
							...e,
							[r]: Object(Vl.c)(n, s)
						} : e
					}
					case K.b:
					case H.G: {
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
							gilder: n,
							treatmentTags: a
						} = t.payload, c = e[r];
						return c ? {
							...e,
							[r]: {
								...Object(Bl.a)(c, s, n),
								treatmentTags: a
							}
						} : e
					}
					case oe.E: {
						const {
							awardId: r,
							thingId: s
						} = t.payload, n = e[s];
						return n ? {
							...e,
							[s]: Object(Bl.b)(n, r)
						} : e
					}
					case Kd.n: {
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
							...xt()(s, rp([tp, Yl]))
						}
					}
					case Cl.b:
					case W.s: {
						const {
							operation: r,
							ids: s,
							username: n,
							options: a
						} = t.payload, c = s.filter(e => Object(Ul.a)(e)), o = Object(Hl.d)(e, r, c, n, a);
						return q()({
							...e
						}, o, (e, t) => ({
							...e,
							...t
						}))
					}
					case Gr.t: {
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
					case Gr.e: {
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
					case Gr.g: {
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
					case Pc.g: {
						const r = t.payload.subredditTopContent;
						return r && r.posts && Object.keys(r.posts) ? {
							...xt()(r.posts, rp([tp, Yl])),
							...e
						} : e
					}
					case X.c:
					case X.i:
					case X.e:
					case X.g:
					case xl.b:
						return {
							...xt()(t.payload.posts, rp([tp, Yl])), ...e
						};
					case fd.j: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, n = e[r];
						return n && n.media && Object(ql.H)(n.media) ? {
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
					case Ll.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Ll.b: {
						const r = t.payload;
						return Object(Vt.a)(e, r)
					}
					case Rd.a: {
						const {
							isDeleted: r,
							height: s,
							postId: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								media: {
									...e[n].media,
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
			var ap = (e = null, t) => {
					switch (t.type) {
						case fd.f:
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
						case fd.i: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case Pe.b:
						case J.SUBREDDIT_LOADED: {
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
					case hs.h:
					case hs.a:
					case hs.m:
					case hs.f:
						return pp()();
					default:
						return e
				}
			};
			var yp = (e = null, t) => {
				switch (t.type) {
					case hs.d:
					case hs.o:
					case hs.k:
					case hs.g:
					case hs.a:
					case hs.m:
					case hs.f:
						return null;
					case hs.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case hs.e:
						return "error";
					default:
						return e
				}
			};
			var mp = (e = !0, t) => {
				switch (t.type) {
					case hs.g:
						return !0;
					case hs.m:
					case hs.a:
					case hs.f:
					case hs.e:
						return !1;
					default:
						return e
				}
			};
			var Ep = (e = !1, t) => {
					switch (t.type) {
						case hs.k:
							return !0;
						case hs.j:
						case hs.e:
						case hs.o:
						case hs.d:
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
					case hs.c: {
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
					POSTS_LOADED: hs.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: hs.o
				},
				recurringPosts: {
					POSTS_LOADED: hs.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: hs.d
				}
			};

			function gp(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case Ip[e].POSTS_LOADED:
						case hs.f: {
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
						case hs.i:
						case hs.l: {
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
						case hs.h: {
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
			const Sp = {};

			function Dp(e) {
				return (t = Sp, r) => {
					switch (r.type) {
						case Ip[e].POSTS_LOADED:
						case hs.f: {
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
						case hs.h: {
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
				jp = r.n(Tp);
			const vp = {};

			function Ap(e) {
				return (t = vp, r) => {
					switch (r.type) {
						case Ip[e].POSTS_LOADED:
						case hs.f: {
							const {
								subredditInfoById: s
							} = r.payload, n = s.id, a = s.scheduledPosts[Ip[e].postIdsKey];
							return {
								...t,
								[n]: jp()([...t[n] || [], ...a])
							}
						}
						case hs.i:
						case hs.l: {
							const {
								subredditId: e,
								scheduledPostId: s
							} = r.payload, n = t[e] || [];
							return {
								...t,
								[e]: n.filter(e => e !== s)
							}
						}
						case hs.h: {
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
			var Pp = Object(c.c)({
					models: gp("recurringPosts"),
					pageInfo: Dp("recurringPosts"),
					postOrder: Ap("recurringPosts"),
					editModal: hp
				}),
				wp = Object(c.c)({
					models: gp("standalonePosts"),
					pageInfo: Dp("standalonePosts"),
					postOrder: Ap("standalonePosts")
				}),
				Cp = Object(c.c)({
					api: Op,
					standalonePosts: wp,
					recurringPosts: Pp
				});
			var Rp = (e = null, t) => {
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
					error: Rp,
					pending: Lp
				});
			const kp = [];
			var xp = (e = kp, t) => {
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
				Up = Object(c.c)({
					api: Np,
					list: xp
				}),
				Mp = r("./src/reddit/actions/video.ts");
			const Fp = {};
			var Gp = (e = Fp, t) => {
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
			var Kp = (e = Hp, t) => {
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
			const Vp = {};
			var Wp = (e = Vp, t) => {
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
			var Qp = (e = $p, t) => {
				switch (t.type) {
					case Mp.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var zp = (e = null, t) => {
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
			const Xp = {};
			var Yp = (e = Xp, t) => {
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
			const Jp = {};
			var Zp = (e = Jp, t) => {
				switch (t.type) {
					case Mp.h: {
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
			const nb = {};
			var ab = (e = nb, t) => {
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
					autoPlayed: Gp,
					buffering: qp,
					consumed: Kp,
					continuousViewStartedAt: Wp,
					feed: Qp,
					fullscreen: zp,
					loadable: Yp,
					loadTimes: Zp,
					metadata: tb,
					paused: sb,
					playing: ab,
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
					metaMap: wl,
					models: np,
					modToMemberShare: ap,
					crowdControl: ml,
					postLevelCrowdControl: dp,
					recent: up,
					scheduledPosts: Cp,
					topAwarded: Up,
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
								comments: n
							} = t.payload, a = s[r] && s[r].head;
							return a && n[a.id] && n[a.id].isStickied ? {
								...e,
								[r]: a.id
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
				jb = Object(c.c)({
					error: Sb,
					pending: Tb
				}),
				vb = Object(c.c)({
					fetch: Ib,
					purchase: jb
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
			const Pb = {};
			var wb = (e = Pb, t) => {
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
				Cb = Object(c.c)({
					api: vb,
					currentlyPurchasing: Ab,
					models: wb
				});
			const Rb = {};
			var Lb = (e = Rb, t) => {
				switch (t.type) {
					case Q.f:
					case Q.e:
					case Q.c:
					case Q.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Q.d:
					case Q.a: {
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
						case Q.f:
						case Q.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Q.e:
						case Q.d:
						case Q.b:
						case Q.a: {
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
				xb = Object(c.c)({
					error: Lb,
					pending: kb
				});
			const Ub = {};
			var Mb = (e = Ub, t) => {
					switch (t.type) {
						case Q.e: {
							const {
								key: r,
								commentIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case Q.b: {
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
				Fb = r("./src/reddit/actions/comment/list.ts");
			const Gb = {};
			var Bb = (e = Gb, t) => {
				switch (t.type) {
					case Fb.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Fb.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? ks()(e, r) : e
					}
					default:
						return e
				}
			};
			const qb = {};
			var Hb = (e = qb, t) => {
				switch (t.type) {
					case Q.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {}
						}
					}
					case Q.b: {
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
			const Kb = {};
			var Vb = (e = Kb, t) => {
					switch (t.type) {
						case Q.e:
						case Q.b: {
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
							} : Object(Vt.a)(e, r)
						}
						default:
							return e
					}
				},
				Wb = Object(c.c)({
					api: xb,
					endMarkers: Bb,
					fetchedTokens: Hb,
					commentIds: Mb,
					loadMore: Vb
				}),
				$b = r("./src/reddit/actions/pages/profileModSettings.ts");
			var Qb = (e = !0, t) => {
					switch (t.type) {
						case $b.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				zb = Object(c.c)({
					pending: Qb
				}),
				Xb = Object(c.c)({
					api: zb
				});
			const Yb = {};
			var Jb = (e = Yb, t) => (t.type, e);
			const Zb = {};
			var ef = (e = Zb, t) => {
				switch (t.type) {
					case X.a:
					case X.d: {
						const {
							listingKey: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case X.b:
					case X.c:
					case X.i:
					case X.f:
					case X.e:
					case X.g: {
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
						case X.b:
						case X.f: {
							const {
								listingKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case X.a:
						case X.d:
						case X.c:
						case X.i:
						case X.e:
						case X.g: {
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
			const nf = {};
			var af = (e = nf, t) => {
				switch (t.type) {
					case X.c:
					case X.i:
					case X.e:
					case X.g: {
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
					case X.i:
					case X.c:
					case X.e:
					case X.g: {
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
				ids: af,
				pageInfo: of
			}), uf = r("./src/reddit/constants/posts.ts");
			const lf = {};
			var pf = (e = lf, t) => {
				switch (t.type) {
					case Y.SEARCH_RESULTS_RECEIVED:
					case Fe.c:
						return {
							...e, ...t.payload.profileAboutInfo
						};
					case zi.k: {
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
						} = t.payload, n = r.filter(e => e.type === uf.a.PROFILE);
						return n.length ? n.reduce((e, t) => (e[t.id] = {
							...e[t.id],
							userIsSubscriber: s
						}, e), {
							...e
						}) : e
					}
					case Od.n: {
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
			};
			const bf = {};
			var ff = (e = bf, t) => {
				switch (t.type) {
					case Pe.f:
					case $.b:
					case $.f:
					case Pe.b:
					case Q.b:
					case Q.e:
					case X.c:
					case X.i:
					case X.e:
					case X.g:
					case ke.b:
					case ke.e:
					case z.PROFILE_POSTS_LOADED:
					case xe.b:
					case Pe.f:
					case Re.e:
					case Re.h:
					case Ce.u:
					case zi.h:
					case Yo.b:
					case Fe.c:
					case ee.i:
					case zi.m:
					case Z.b:
					case Z.e:
					case Y.SEARCH_RESULTS_RECEIVED:
					case Ne.PAGE_LOADED:
					case Vr.e:
					case xs.PAGE_LOADED:
					case J.SUBREDDIT_LOADED:
					case Le.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ji.c:
						return Object(G.merge)(e, t.payload.profiles);
					case Fe.e: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return Object.keys(r).length ? Object(G.merge)(e, r) : e
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
						return Object(G.merge)(e, s)
					}
					case zi.l:
					case zi.k: {
						const {
							profile: r
						} = t.payload;
						return r ? Object(G.merge)(e, {
							[r.id]: r
						}) : e
					}
					case Od.n: {
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
					case Od.l:
					case Od.k: {
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
			const yf = {};
			var mf = (e = yf, t) => {
					switch (t.type) {
						case zi.c:
						case zi.f: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !0
							}
						}
						case zi.a:
						case zi.b:
						case zi.d:
						case zi.e: {
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
					case zi.b: {
						const {
							profileName: r,
							data: s
						} = t.payload, n = s.map(e => e.id);
						return {
							...e,
							[(r || "").toLowerCase()]: n
						}
					}
					case zi.e:
					case X.c:
					case X.i:
					case X.e:
					case X.g: {
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
						case zi.e: {
							const {
								pageInfo: r,
								profileName: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						case X.c:
						case X.i: {
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
						case zi.i: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case zi.g:
						case zi.h: {
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
			const jf = {};
			var vf = (e = jf, t) => {
					switch (t.type) {
						case zi.h: {
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
					pageInfo: vf
				}),
				Pf = r("./src/reddit/actions/pinnedPost.ts");
			const wf = {};
			var Cf = Object(bb.a)((e = wf, t) => {
				switch (t.type) {
					case Pf.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case Pf.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, n = e[s] || [];
						return {
							...e,
							[s]: [...n, r].slice(-Me.V)
						}
					}
					case Pf.g: {
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
			}, wf);
			const Rf = {};
			var Lf = Object(bb.a)((e = Rf, t) => {
				switch (t.type) {
					case Pf.a: {
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
			}, Rf);
			const Nf = {};
			var kf = Object(bb.a)((e = Nf, t) => {
					switch (t.type) {
						case Pf.c:
						case Pf.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: [...n, r]
							}
						}
						case Pf.b:
						case Pf.e:
						case Pf.d:
						case Pf.g: {
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
				}, Nf),
				xf = Object(c.c)({
					data: Cf,
					initialData: Lf,
					pending: kf
				}),
				Uf = r("./src/reddit/actions/trophyCase.ts");
			const Mf = {};
			var Ff, Gf, Bf = (e = Mf, t) => {
					switch (t.type) {
						case Uf.a: {
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
					pinnedPosts: xf,
					trophyCases: Bf
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Ff || (Ff = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Gf || (Gf = {}));
			var Hf, Kf, Vf;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Hf || (Hf = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Kf || (Kf = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Vf || (Vf = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Hf || (Hf = {}));
			Object(Ue.a)("PROMO__SHOW_PROMO"), Object(Ue.a)("PROMO__HIDE_PROMO");
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
				Qf = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const zf = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: Qf.d,
					viewer_streams_refresh: Qf.c,
					viewer_streams_refresh_slop: Qf.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var Xf = (e = zf, t) => {
				switch (t.type) {
					case Qf.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case Qf.x: {
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
					case Qf.G:
						return {
							...e, isPending: !0
						};
					case Qf.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case Qf.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var Yf = (e = {}, t) => {
				switch (t.type) {
					case Qf.L:
						return {
							...e, [Qf.b]: t.payload.error
						};
					case Qf.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case Qf.z: {
						const {
							[Qf.b]: t, ...r
						} = e;
						return r
					}
					case Qf.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const Jf = (e, t, r, s) => ({
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
					case Qf.N:
						return Jf(e, t.payload, !0);
					case Qf.O:
						return Jf(e, Qf.b, !0);
					case Qf.y:
						return Jf(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case Qf.z:
						return Jf(e, Qf.b, !1, t.payload.utcTimeStamp);
					case Qf.M:
						return Jf(e, t.payload.streamId, !1);
					case Qf.L:
						return Jf(e, Qf.b, !1);
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
						case Qf.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case Qf.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case Qf.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				ry = Object(c.c)({
					config: Xf,
					error: Yf,
					pending: Zf,
					recommendedViewerSubreddits: ty
				});
			const sy = {};
			var ny = (e = sy, t) => {
				switch (t.type) {
					case Qf.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case Qf.F:
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
			const ay = {
				cursor: Qf.W,
				timestamps: {},
				visitOrder: []
			};
			var cy = (e = ay, t) => {
				switch (t.type) {
					case Qf.P:
						return ay;
					case Qf.X: {
						const r = t.payload,
							s = e.visitOrder.includes(r) ? e.visitOrder : [...e.visitOrder, r],
							n = s.indexOf(r);
						return s === e.visitOrder && n === e.cursor ? e : {
							...e,
							visitOrder: s,
							cursor: n
						}
					}
					case h.d:
						return oy(e, t.payload.id);
					case Qf.E:
						return oy(e, t.payload);
					case fd.h: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return dy(e, r)
					}
					case Qf.V: {
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
						n = e.visitOrder.filter(e => !s.has(e)),
						a = n.indexOf(r),
						c = a > -1 ? a : Math.max(e.cursor - 1, 0);
					return n.length !== e.visitOrder.length ? {
						...e,
						cursor: c,
						visitOrder: n
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
					case Qf.t:
						return {
							...e, ended: uy(e.ended.concat(t.payload))
						};
					case Qf.u:
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
					case Qf.z:
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
			const fy = {},
				yy = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: Qf.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: Qf.l - r
						}
					}), r)
				},
				my = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : Qf.m;
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
					case Qf.y:
						return my(e, t.payload.model);
					case Qf.z:
						return yy(e, t.payload.models);
					case Qf.D: {
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
			const Oy = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var _y = (e = Oy, t) => {
				switch (t.type) {
					case Qf.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case Qf.A:
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
					case Qf.B:
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
						case Qf.C:
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
					api: ry,
					history: cy,
					hlsStreams: ly,
					listings: by,
					models: Ey,
					preloads: _y,
					reports: Iy,
					theaterSettings: Sy,
					userSettings: Ty,
					automuteLevels: ny
				});
			const vy = {};
			var Ay = (e = vy, t) => {
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
				Py = r("./src/reddit/actions/pages/report/constants.ts");
			var wy = (e = null, t) => {
				switch (t.type) {
					case Py.a:
						return t.payload;
					default:
						return e
				}
			};
			var Cy = (e = null, t) => {
				switch (t.type) {
					case Py.b:
						return t.payload;
					case Py.c:
					case Py.d:
						return !1;
					default:
						return e
				}
			};
			var Ry = (e = !1, t) => {
				switch (t.type) {
					case Py.d:
						return !0;
					case Py.c:
					case Py.b:
						return !1;
					default:
						return e
				}
			};
			var Ly = (e = !1, t) => {
					switch (t.type) {
						case Py.c:
							return !0;
						case Py.b:
						case Py.d:
							return !1;
						default:
							return e
					}
				},
				Ny = Object(c.c)({
					error: Cy,
					pending: Ry,
					success: Ly
				}),
				ky = r("./src/reddit/actions/reportPageRules/constants.ts");
			const xy = [];
			var Uy = (e = xy, t) => {
					switch (t.type) {
						case ky.a:
							return t.payload;
						default:
							return e
					}
				},
				My = Object(c.c)({
					reportPageApi: Ny,
					reportPageRules: Uy,
					initialReason: wy
				}),
				Fy = r("./src/reddit/actions/reportRules.ts");
			const Gy = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var By = (e = Gy, t) => {
				switch (t.type) {
					case Fy.b:
						return {
							...e, sitewideRules: t.payload
						};
					case Fy.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Ue.a)("REQUEST_HOST_SET");
			var qy = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(Ue.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const Hy = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var Ky = (e = Hy, t) => {
				switch (t.type) {
					case "RUN_TIME_ENV_VARS__IS_STAGING":
						return {
							...e, staging: !0
						};
					default:
						return e
				}
			};
			const Vy = Object.create(null);
			var Wy = (e = Vy, t) => {
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case Fe.d: {
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
					case Y.SEARCH_RESULTS_RECEIVED:
					case Fe.f: {
						const {
							searchQuery: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			const Qy = Object.create(null);
			var zy = (e = Qy, t) => {
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Fe.e: {
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
				Xy = r("./src/reddit/models/Search/index.ts");
			const Yy = {};
			var Jy = (e = Yy, t) => {
					switch (t.type) {
						case Fe.e: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(Xy.d)(t)
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
					idsByQuery: zy,
					models: Jy
				});
			const em = {};
			var tm = (e = em, t) => {
					switch (t.type) {
						case Y.SEARCH_RESULTS_RECEIVED: {
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
			const nm = {};
			var am = (e = nm, t) => {
				switch (t.type) {
					case Y.SEARCH_RESULTS_RECEIVED: {
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
						if (i === sm.c.Trending || r) {
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
			const cm = {};
			var om = (e = cm, t) => {
				switch (t.type) {
					case Y.SEARCH_RESULTS_RECEIVED: {
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
						case Y.SEARCH_RESULTS_RECEIVED: {
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
					headerContent: am,
					models: om,
					order: im
				});
			Object(Ue.a)("SEO__CRAWLER_RECEIVED");
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
				jm = e => {
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
			var vm = (e = Tm, t) => {
					switch (t.type) {
						case O.a:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return jm(e)
							}
							return Tm;
						default:
							return e
					}
				},
				Am = Object(c.c)({
					activeCommentId: hm,
					activePostId: Im,
					namespace: vm
				});
			var Pm = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case D.q:
						case D.r:
							return !0;
						default:
							return e
					}
				},
				wm = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Cm = Object(c.c)({
					firstFetch: Pm,
					models: wm.b
				}),
				Rm = r("./src/reddit/actions/streaming/modSettings.ts");
			var Lm = (e = null, t) => {
				switch (t.type) {
					case Rm.b:
					case Rm.c:
						return null;
					case Rm.a: {
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
						case Rm.b:
							return !0;
						case Rm.c:
						case Rm.a:
							return !1;
						default:
							return e
					}
				},
				km = Object(c.c)({
					error: Lm,
					pending: Nm
				}),
				xm = r("./src/reddit/actions/streaming/constants.ts");
			const Um = {};
			var Mm = (e = Um, t) => {
					switch (t.type) {
						case xm.a: {
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
				Fm = Object(c.c)({
					api: km,
					modSettings: Mm
				}),
				Gm = r("./src/reddit/models/StructuredStyles/index.ts");
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
							return Object(Gm.h)(e.styles)
						}
						default:
							return e
					}
				},
				Hm = r("./src/reddit/actions/exportImportStyles.ts");
			var Km = (e = null, t) => {
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
			var Vm = (e = !1, t) => {
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
					error: Km,
					pending: Vm
				}),
				$m = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				Qm = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const zm = {};
			var Xm = (e = zm, t) => {
					switch (t.type) {
						case J.SUBREDDIT_LOADED:
						case $.b:
						case $.f:
						case Y.SEARCH_RESULTS_RECEIVED:
						case Fe.c:
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
							return Object(Vt.a)(e, r)
						}
						case sl.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(Vt.a)(e, r)
						}
						case I.k:
							return zm;
						case Qm.b: {
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
				Ym = Object(c.c)({
					models: Xm
				});
			const Jm = {};
			var Zm = (e = Jm, t) => {
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
						return Jm;
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
					case Od.f:
						return null;
					default:
						return e
				}
			};
			const rE = {};
			var sE = (e = rE, t) => {
					switch (t.type) {
						case J.SUBREDDIT_LOADED:
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
							const n = s[0],
								a = r.structuredStyles.data.style;
							return {
								...e,
								[n]: a
							}
						}
						case Fe.c:
						case Y.SEARCH_RESULTS_RECEIVED: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							if (!r.subredditName) return e;
							let s;
							if (oa()(r.subreddits, (e, t) => {
									if (e.name.toLowerCase() === r.subredditName.toLowerCase()) return s = t, !1
								}), !s) return e;
							const n = r.structuredStyles.data.style;
							return {
								...e,
								[s]: n
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
								s = Object(Gm.h)(r.styles);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case zi.k: {
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
						case Od.l: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Gl(e, {
									[r.subredditId]: {
										bannerBackgroundImage: r.imageUrl
									}
								})
							}
							return e
						}
						case Od.k: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Gl(e, {
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
				nE = Object(c.c)({
					draft: qm,
					exportStyles: Wm,
					flairTemplate: Ym,
					imagePreviews: Zm,
					isBladeEditorDirty: eE,
					isEditing: tE,
					models: sE
				});
			Object(Ue.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var aE = (e = "", t) => {
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
					case Y.SEARCH_RESULTS_RECEIVED:
					case J.SUBREDDIT_FAILED:
					case J.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case xs.PAGE_LOADED:
					case Q.b:
					case Q.e:
					case ke.b:
					case ke.a:
					case ke.e:
					case ke.d:
					case z.PROFILE_POSTS_LOADED:
					case Z.b:
					case Z.e:
					case Fe.c:
					case Jo.TOPIC_DATA_LOADED: {
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
					case Na.a: {
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
						} = t.payload, n = r.filter(e => e.type === uf.a.SUBREDDIT);
						return n.length ? n.reduce((e, t) => Object(G.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case Pc.g:
					case yE.f:
					case rd.h:
					case rd.p: {
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
					case Na.b: {
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
			var jE = (e = null, t) => {
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
			var vE = (e = !1, t) => {
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
					lastCreatedSubredditId: jE,
					pending: vE
				});
			var PE = (e = !1, t) => {
					switch (t.type) {
						case rd.u:
							return !0;
						case rd.v:
						case rd.t:
							return !1;
						default:
							return e
					}
				},
				wE = Object(c.c)({
					pending: PE
				});
			const CE = {};
			var RE = (e = CE, t) => {
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
					error: RE,
					pending: NE
				});
			const xE = {};
			var UE = (e = xE, t) => {
					switch (t.type) {
						case rd.g:
						case rd.h:
							return {
								...e, [t.payload.key]: !1
							};
						case rd.i:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				ME = Object(c.c)({
					pending: UE
				});
			var FE = (e = null, t) => {
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
			var GE = (e = !1, t) => {
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
					error: FE,
					pending: GE
				});
			var qE = (e = null, t) => {
				switch (t.type) {
					case rd.l: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case rd.n:
					case rd.m:
						return null;
					default:
						return e
				}
			};
			var HE = (e = !1, t) => {
					switch (t.type) {
						case rd.n:
							return !0;
						case rd.m:
						case rd.l:
							return !1;
						default:
							return e
					}
				},
				KE = Object(c.c)({
					error: qE,
					pending: HE
				}),
				VE = r("./src/reddit/actions/subredditRules/constants.ts");
			var WE = (e = !1, t) => {
					switch (t.type) {
						case VE.c:
							return !0;
						case VE.a:
						case VE.b:
							return !1;
						default:
							return e
					}
				},
				$E = r("./src/reddit/actions/subredditSettings.ts");
			var QE = (e = !1, t) => {
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
				zE = Object(c.c)({
					pending: QE
				});
			const XE = {};
			var YE = (e = XE, t) => {
					switch (t.type) {
						case rd.o:
						case rd.p:
							return {
								...e, [t.payload.key]: !1
							};
						case rd.q:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				JE = Object(c.c)({
					pending: YE
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
				nO = Object(c.c)({
					error: tO,
					pending: sO
				});
			const aO = {};
			var cO = (e = aO, t) => {
				switch (t.type) {
					case xl.c:
					case xl.b: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case xl.a: {
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
						case xl.c: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case xl.b:
						case xl.a: {
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
					inlineEditing: wE,
					models: kE,
					onboarding: ME,
					productOffers: BE,
					rankings: KE,
					rules: WE,
					settings: zE,
					similar: JE,
					topContent: iO,
					wiki: nO
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
						return sa()(s) ? e : {
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
						case Ce.c: {
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
							return Vi()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				jO = Object(c.c)({
					api: SO,
					ids: TO
				});
			const vO = {};
			var AO = (e = vO, t) => {
					switch (t.type) {
						case Wl.a: {
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
							return Gl(c, {
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
				PO = Object(c.c)({
					models: AO
				});
			const wO = {};
			var CO = (e = wO, t) => {
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
			const RO = {};
			var LO = (e = RO, t) => {
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
			const xO = {};
			var UO = (e = xO, t) => {
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
			var FO = (e = MO, t) => {
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
				GO = Object(c.c)({
					assets: CO,
					communityRaw: LO,
					distributions: kO,
					meta: UO,
					releaseNotes: FO
				}),
				BO = r("./node_modules/lodash/isEqualWith.js"),
				qO = r.n(BO),
				HO = r("./src/lib/forceHttps/index.ts");
			const KO = {},
				VO = (e, t) => {
					return !qO()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				WO = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let n = 0; n < r.length; n++) {
						const a = r[n],
							c = e[a],
							o = t[a];
						c && !VO(c, o) || (s[a] = o)
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var $O = (e = KO, t) => {
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
								return a.icon.url ? c.icon.url = Object(HO.a)(a.icon.url) : n && n.icon.url ? c.icon = n.icon : c.icon.url = "", n && n.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(G.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case mE.d:
					case yE.f:
					case Pe.f:
					case Pc.g:
					case td.b:
					case Re.e:
					case Re.h:
					case W.k:
					case Ce.r:
					case Ce.u:
					case zi.h:
					case Yo.b:
					case $.b:
					case $.f:
					case Pe.b:
					case Le.b:
					case Q.b:
					case Q.e:
					case X.c:
					case X.i:
					case X.e:
					case X.g:
					case ke.b:
					case ke.e:
					case z.MORE_POSTS_LOADED:
					case z.PROFILE_POSTS_LOADED:
					case zi.e:
					case Y.SEARCH_RESULTS_RECEIVED:
					case J.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case Vr.e:
					case xs.PAGE_LOADED:
					case zi.m:
					case Z.b:
					case Z.e:
					case xe.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Fe.c:
					case ee.c:
					case ee.f:
					case ee.i:
					case rd.a:
					case rd.h:
					case rd.p:
					case Jo.TOPIC_DATA_LOADED:
					case Jo.MORE_POSTS_LOADED:
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
					case Fe.e: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return WO(e, r.subreddits || {})
					}
					case Ce.B: {
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
					case $E.f: {
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
					case cE.b: {
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
						return Object(G.merge)(e, n)
					}
					default:
						return e
				}
			};
			var QO = (e = null, t) => {
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
			var zO = (e = !1, t) => {
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
			var XO = (e = !1, t) => {
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
				YO = Object(c.c)({
					errors: QO,
					fetched: zO,
					pending: XO
				});
			var JO = (e = null, t) => {
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
					api: YO,
					order: JO
				});
			const e_ = {};
			var t_ = (e = e_, t) => {
				switch (t.type) {
					case $E.a: {
						const r = t.payload;
						return Object(G.merge)(e, r)
					}
					case $E.b: {
						const {
							subredditId: r,
							notificationSettings: s
						} = t.payload;
						return Object(G.merge)(e, {
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
					case rd.h: {
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
			const n_ = {};
			var a_ = (e = n_, t) => {
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
							user: n
						} = t.payload;
						if (s > 0) {
							const t = {
								score: s,
								lastSupportedAt: (new Date).toString(),
								supporterInfo: {
									id: n.id,
									displayName: Object(re.e)(n),
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
			const c_ = {},
				o_ = e => {
					if (!e) return e;
					const {
						mediaPacks: t,
						...r
					} = e, s = {};
					return null == t || t.forEach(e => {
						const {
							id: t,
							name: r,
							emotes: n
						} = e, a = {
							id: t,
							name: r,
							emotes: n.map(e => ((e, t) => {
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
							})(e, t))
						};
						s[t] = a
					}), {
						...r,
						emotePacks: s
					}
				};
			var d_ = (e = c_, t) => {
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
							[s]: o_(r)
						}
					}
					case oe.R:
					case oe.U: {
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
			const i_ = {},
				u_ = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var l_ = (e = i_, t) => {
					switch (t.type) {
						case oe.ib: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(u_)
							}
						}
						case oe.R:
						case oe.U: {
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
							});
							if (c) return {
								...e,
								[r]: o.sort(u_)
							};
							if (s > 0) {
								const t = {
									score: s,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: a ? null : {
										id: n.id,
										displayName: Object(re.e)(n),
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
									[r]: [t, ...e[r]].sort(u_)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				p_ = r("./src/lib/makeProductOfferKey/index.ts");
			const b_ = {};
			var f_ = (e = b_, t) => {
				switch (t.type) {
					case oe.W:
					case oe.ib: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!s || 0 === s.length) return e;
						const n = s.reduce((e, t) => {
							const s = Object(p_.a)(r, t.type);
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
			const y_ = {};
			var m_ = (e = y_, t) => {
					switch (t.type) {
						case _.g: {
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
				E_ = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const O_ = {};
			var __ = (e = O_, t) => {
				switch (t.type) {
					case rd.w: {
						const {
							id: r,
							progressModule: s
						} = t.payload;
						if (!s) return e;
						const n = s.cards.filter(({
							id: e
						}) => "invite_contributor" !== e).filter(({
							buttons: e
						}) => e.every(({
							__typename: e
						}) => E_.b.includes(e)));
						return {
							...e,
							[r]: {
								...s,
								cards: n
							}
						}
					}
					case rd.d: {
						const {
							subredditId: r,
							cardId: s
						} = t.payload;
						return Object(G.updateIn)(e, [r, "cards"], e => e.filter(e => e.id !== s))
					}
					default:
						return e
				}
			};
			const h_ = {};
			var I_ = (e = h_, t) => {
				var r, s;
				switch (t.type) {
					case rd.w: {
						const {
							id: r,
							questions: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Pe.f:
					case Pe.b: {
						const {
							subreddits: s
						} = t.payload, n = {};
						for (const e of Object.keys(s)) {
							const t = s[e];
							((null === (r = t.answerableQuestions) || void 0 === r ? void 0 : r.length) || 0) > 0 && (n[e] = t.answerableQuestions)
						}
						return 0 === Object.keys(n).length ? e : Object(G.assign)(e, n)
					}
					case rd.e: {
						const {
							subredditId: r,
							questionId: n
						} = t.payload, a = null !== (s = e[r]) && void 0 !== s ? s : [];
						return Object(G.setIn)(e, [r], a.filter(e => e.id !== n))
					}
					case rd.f:
						return h_;
					default:
						return e
				}
			};
			const g_ = {};
			var S_ = (e = g_, t) => {
				switch (t.type) {
					case rd.b: {
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
			const D_ = {};
			var T_ = (e = D_, t) => {
				switch (t.type) {
					case rd.c: {
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
			const j_ = {};
			var v_ = (e = j_, t) => {
				switch (t.type) {
					case VE.b: {
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
					case VE.e: {
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
					case VE.f: {
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
					case VE.g:
					case VE.d: {
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
			const A_ = {};
			var P_ = (e = A_, t) => {
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
					case Od.n: {
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
			const w_ = {};
			var C_ = (e = w_, t) => {
				switch (t.type) {
					case rd.p: {
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
			const R_ = {};
			var L_ = (e = R_, t) => {
				switch (t.type) {
					case rd.w: {
						const {
							id: r,
							survey: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case rd.x: {
						const {
							id: r,
							response: s
						} = t.payload, n = Object(G.setIn)(e, [r, "response"], s);
						return Object(G.setIn)(n, [r, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const N_ = {};
			var k_ = (e = N_, t) => {
				switch (t.type) {
					case Pc.g: {
						const {
							subredditTopContent: r
						} = t.payload;
						return {
							...e,
							...r.subredditTopContent
						}
					}
					case xl.b: {
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
			const x_ = [];
			var U_ = (e = x_, t) => {
				switch (t.type) {
					case Pe.b:
					case J.SUBREDDIT_LOADED: {
						const {
							trendingSubredditIds: r
						} = t.payload;
						return r && r.length ? r : e
					}
					default:
						return e
				}
			};
			const M_ = {};
			var F_ = (e = M_, t) => {
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
				G_ = r("./src/reddit/actions/subredditWelcomeMessage.ts");
			const B_ = {};
			var q_ = (e = B_, t) => {
					switch (t.type) {
						case G_.a: {
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
				H_ = Object(c.c)({
					about: OE,
					api: uO,
					appliedFilters: yO,
					byCategory: EO,
					communityInfo: _O,
					crosspostable: jO,
					duplicates: PO,
					gov: GO,
					models: $O,
					moderated: ZO,
					notificationSettings: t_,
					onboarding: s_,
					powerupRecentSupporters: a_,
					powerups: d_,
					powerupTopSupporters: l_,
					productOffers: f_,
					products: m_,
					progressModule: __,
					questions: I_,
					rankings: S_,
					rankingsPageInfo: T_,
					rules: v_,
					settings: P_,
					similar: C_,
					survey: L_,
					topContent: k_,
					trending: U_,
					unavailableModels: F_,
					welcomeMessage: q_
				});
			const K_ = {};
			var V_ = Object(bb.a)((e = K_, t) => {
					switch (t.type) {
						case J.SUBREDDIT_LOADED: {
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
							return De()({
								...e
							}, n)
						}
						case fd.k: {
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
				}, K_),
				W_ = Object(c.c)({
					data: V_
				}),
				$_ = r("./node_modules/lodash/values.js"),
				Q_ = r.n($_);
			const z_ = [];
			var X_ = (e = z_, t) => {
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
					case Ce.u: {
						const {
							multireddits: e
						} = t.payload;
						return Q_()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case Ji.e: {
						const {
							follow: r,
							multiredditPath: s
						} = t.payload;
						return r ? e : e.filter(e => e !== s)
					}
					case Ce.j: {
						const r = t.payload;
						return e.filter(e => e !== r)
					}
					default:
						return e
				}
			};
			var Y_ = (e = null, t) => {
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
			var J_ = (e = !1, t) => {
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
			var Z_ = (e = !1, t) => {
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
				eh = Object(c.c)({
					errors: Y_,
					fetched: J_,
					pending: Z_
				});
			const th = [];
			var rh = (e = th, t) => {
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
						if (c !== uf.a.PROFILE) return e;
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
						} = t.payload, n = r.filter(t => t.type === uf.a.PROFILE && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const sh = [];
			var nh = (e = sh, t) => {
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
						if (c !== uf.a.SUBREDDIT) return e;
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
						} = t.payload, n = r.filter(t => t.type === uf.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !n.length || s ? e : n.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const ah = [],
				ch = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var oh = (e = ah, t) => {
					switch (t.type) {
						case Ce.u: {
							const {
								multireddits: r
							} = t.payload, s = Q_()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(ch(r));
							return Vi()(e, s) ? e : s
						}
						case Le.b: {
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
								d = $i()(e, c).sort(ch(o));
							return Vi()(e, d) ? e : d
						}
						case Ji.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: n
							} = t.payload;
							return r ? [...e, s].sort(ch(n)) : e.filter(e => e !== s)
						}
						case Ce.j: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						case Ce.g:
						case Ce.m: {
							const {
								multireddit: r,
								multiredditsModelsState: s
							} = t.payload, n = {
								...s,
								[r.url]: r
							};
							return [...e, r.url].sort(ch(n))
						}
						default:
							return e
					}
				},
				dh = r("./node_modules/lodash/difference.js"),
				ih = r.n(dh);
			const uh = [];
			var lh = (e = uh, t) => {
				switch (t.type) {
					case zi.n: {
						const {
							profileOrder: r
						} = t.payload;
						return jp()([...e, ...r])
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
						} = t.payload, a = r.filter(e => e.type === uf.a.PROFILE);
						if (!a.length) return e;
						const c = a.map(e => e.id);
						return n ? jp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : ih()(e, c)
					}
					default:
						return e
				}
			};
			const ph = [];
			var bh = (e = ph, t) => {
					switch (t.type) {
						case zi.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return jp()([...e, ...r])
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
							} = t.payload, a = r.filter(e => e.type === uf.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const c = a.map(e => e.id);
							return n ? jp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : ih()(e, c)
						}
						default:
							return e
					}
				},
				fh = Object(c.c)({
					api: eh,
					favoriteMultiOrder: X_,
					favoriteProfileOrder: rh,
					favoriteSubredditOrder: nh,
					multiredditOrder: oh,
					profileOrder: lh,
					subredditOrder: bh
				}),
				yh = r("./src/reddit/actions/tabBadging.ts");
			var mh = (e = !1, t) => {
					switch (t.type) {
						case yh.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				Eh = r("./src/reddit/actions/tags/constants.ts");
			const Oh = {
				pending: !1,
				error: !1
			};
			var _h = (e = Oh, t) => {
				switch (t.type) {
					case Eh.l:
						return {
							...e, pending: !0
						};
					case Eh.m:
						return {
							error: !1, pending: !1
						};
					case Eh.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const hh = {
				pending: !1,
				error: !1
			};
			var Ih = (e = hh, t) => {
				switch (t.type) {
					case Eh.o:
						return {
							...e, pending: !0
						};
					case Eh.p:
						return {
							error: !1, pending: !1
						};
					case Eh.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const gh = {
				pending: !1,
				error: !1
			};
			var Sh = (e = gh, t) => {
				switch (t.type) {
					case Eh.t:
						return {
							...e, pending: !0
						};
					case Eh.s:
					case Eh.r:
					case Eh.e:
					case Eh.j:
						return {
							error: !1, pending: !1
						};
					case Eh.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const Dh = {
				pending: !1,
				error: !1
			};
			var Th = (e = Dh, t) => {
				switch (t.type) {
					case Eh.v:
						return {
							...e, pending: !0
						};
					case Eh.w:
						return {
							error: !1, pending: !1
						};
					case Eh.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const jh = {
				pending: !1,
				error: !1
			};
			var vh = (e = jh, t) => {
					switch (t.type) {
						case Eh.g:
							return {
								...e, pending: !0
							};
						case Eh.h:
							return {
								error: !1, pending: !1
							};
						case Eh.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				Ah = Object(c.c)({
					create: _h,
					deleteTag: Ih,
					fetch: Sh,
					update: Th,
					updatePrimaryTag: vh
				});
			const Ph = {
				global: [],
				recommendedGlobal: []
			};
			var wh = (e = Ph, t) => {
					switch (t.type) {
						case Eh.w:
						case Eh.r:
						case Eh.e:
						case Eh.j: {
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
				Ch = r("./node_modules/lodash/uniqWith.js"),
				Rh = r.n(Ch),
				Lh = r("./src/reddit/models/Option/index.ts");
			const Nh = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var kh = (e = Nh, t) => {
					switch (t.type) {
						case Eh.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: Rh()([...e.selectedOptions || [], {
									...r
								}], Lh.a)
							}
						}
						case Eh.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(Lh.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case Eh.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case Eh.a: {
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
				xh = r("./src/reddit/helpers/tags/index.ts");
			const Uh = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var Mh = (e = Uh, t) => {
					switch (t.type) {
						case Eh.j: {
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
						case Eh.w:
						case Eh.s:
						case Eh.r: {
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
								geoPlaces: d ? Object(G.set)(e.geoPlaces, o, d) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[o]: {
										...c[o] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[o]: Object(xh.a)(a[o] || {})
								}
							}
						}
						case Eh.p: {
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
						case Eh.e: {
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
						case Eh.h: {
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
						case Eh.i: {
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
				Fh = r("./src/reddit/reducers/tags/selected/index.ts"),
				Gh = Object(c.c)({
					api: Ah,
					availableGlobalTagOrder: wh,
					models: Mh,
					selected: Fh.b,
					creation: kh
				}),
				Bh = r("./src/reddit/actions/redditEmbed.ts"),
				qh = r("./src/reddit/actions/theme.ts"),
				Hh = r("./src/reddit/actions/users.ts"),
				Kh = r("./src/reddit/models/Theme/index.ts");
			const Vh = {
				current: Kh.c,
				cached: {}
			};
			var Wh = (e = Vh, t) => {
					switch (t.type) {
						case qh.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? Kh.b : Kh.c,
								cached: {}
							}
						}
						case Nr.a:
						case Nr.b:
						case Nr.h:
						case Nr.i:
						case Nr.f:
						case Nr.j:
						case Re.e:
						case Re.h:
						case $.a:
						case $.e:
						case $.b:
						case $.f:
						case $.d:
						case $.h:
						case Pe.b:
						case J.SUBREDDIT_LOADED:
						case Le.b:
						case Le.a:
						case Pe.f:
						case Bh.b:
						case ee.i:
						case Fe.c:
						case Y.SEARCH_RESULTS_RECEIVED:
						case Od.j:
						case Ne.PAGE_LOADED:
						case xs.PAGE_LOADED:
						case Hh.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: Kh.b,
									cached: {}
								} : {
									current: Kh.c,
									cached: {}
								}
							}
							return e;
						case Q.d:
						case Q.e:
						case ke.a:
						case ke.b:
						case ke.d:
						case ke.e:
						case z.PROFILE_POSTS_FAILED:
						case z.PROFILE_POSTS_LOADED: {
							const {
								account: r
							} = t.payload;
							return r ? r.nightmode ? {
								current: Kh.b,
								cached: {}
							} : {
								current: Kh.c,
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
									current: Kh.b,
									cached: {}
								} : {
									current: Kh.c,
									cached: {}
								}
							}
							return e;
						case Od.i: {
							if (!t.payload) return e;
							const {
								nightmode: r
							} = t.payload;
							return r ? {
								current: Kh.b,
								cached: {}
							} : {
								current: Kh.c,
								cached: {}
							}
						}
						case I.d:
							return {
								current: Kh.c, cached: {}
							};
						case I.e:
							return t.payload.nightmodeTempUpdated ? {
								current: Kh.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				$h = r("./src/reddit/actions/toaster.ts");
			const Qh = [];
			var zh = (e = Qh, t) => {
					switch (t.type) {
						case $h.c: {
							const r = t.payload,
								s = [];
							let n = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), n = n || e === r
							}
							return n || s.push(r), s
						}
						case $h.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				Xh = r("./src/reddit/actions/tooltip.ts");
			var Yh = (e = null, t) => {
					switch (t.type) {
						case Xh.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case Xh.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case Xh.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case Xh.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case oe.K:
						case Xh.d:
						case O.a:
						case uo.b:
						case uo.c:
						case uo.a:
							return null;
						default:
							return e
					}
				},
				Jh = r("./src/reddit/actions/tracing.ts");
			const Zh = {
				traceId: void 0
			};
			var eI = (e = Zh, t) => {
					switch (t.type) {
						case Jh.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				tI = r("./src/lib/asyncActions/index.ts"),
				rI = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const sI = Object(tI.c)(rI.c.requestedActionType, rI.c.succeededActionType, rI.c.failedActionType),
				nI = Object(tI.c)(rI.a.requestedActionType, rI.a.succeededActionType, rI.a.failedActionType),
				aI = Object(tI.c)(rI.d.requestedActionType, rI.d.succeededActionType, rI.d.failedActionType);
			var cI = Object(c.c)({
					load: sI,
					execute: nI,
					send: aI
				}),
				oI = r("./src/reddit/actions/tracking.ts");
			const dI = {};
			var iI = (e = dI, t) => {
					switch (t.type) {
						case oI.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case oI.b: {
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
				uI = Object(c.c)({
					reCaptchaEnterprise: cI,
					viewportDataLoaded: iI
				}),
				lI = r("./src/reddit/actions/trafficStats/constants.ts");
			var pI = (e = !1, t) => {
				switch (t.type) {
					case lI.c:
						return !0;
					case lI.b:
					case lI.a:
						return !1;
					default:
						return e
				}
			};
			var bI = (e = null, t) => {
					switch (t.type) {
						case lI.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case lI.c:
							return null;
						default:
							return e
					}
				},
				fI = Object(c.c)({
					pending: pI,
					trafficStats: bI
				});
			var yI = (e = null, t) => {
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
			var mI = (e = !1, t) => {
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
				EI = Object(c.c)({
					error: yI,
					pending: mI
				});
			var OI = (e = null, t) => {
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
			var _I = (e = "", t) => {
				switch (t.type) {
					case m.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case m.t:
						return "";
					default:
						return e
				}
			};
			var hI = (e = null, t) => {
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
				II = Object(c.c)({
					api: EI,
					contentId: OI,
					initialRecipient: _I,
					publicAddress: hI
				}),
				gI = Object(c.c)({
					communityPoints: II
				}),
				SI = r("./src/reddit/actions/search/trending.ts");
			const DI = [];
			var TI = (e = DI, t) => {
					switch (t.type) {
						case J.SUBREDDIT_LOADED:
						case SI.a: {
							const {
								items: r
							} = t.payload;
							return r || e
						}
						default:
							return e
					}
				},
				jI = Object(c.c)({
					models: TI
				});
			const vI = {};
			var AI = (e = vI, t) => {
					switch (t.type) {
						case Uf.a: {
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
				PI = r("./src/reddit/actions/upload.ts"),
				wI = r("./src/reddit/models/Upload/index.ts");
			const CI = {};
			var RI = (e = CI, t) => {
				switch (t.type) {
					case PI.d: {
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
								status: wI.a.PENDING
							}
						}
					}
					case PI.h: {
						const {
							key: r
						} = t.payload, s = e[r];
						return {
							...e,
							[r]: {
								...s,
								status: wI.a.UPLOADING
							}
						}
					}
					case PI.c: {
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
					case PI.e: {
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
					case PI.g: {
						const {
							key: r,
							url: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: {
								...n,
								status: wI.a.SUCCESS,
								url: s
							}
						}
					}
					case PI.b: {
						const {
							key: r,
							error: s
						} = t.payload, n = e[r];
						return {
							...e,
							[r]: {
								...n,
								status: wI.a.FAILED,
								error: s
							}
						}
					}
					case PI.a: {
						const {
							key: r
						} = t.payload, s = e[r];
						return {
							...e,
							[r]: {
								...s,
								status: wI.a.CANCELED
							}
						}
					}
					case PI.f: {
						const {
							key: r
						} = t.payload, s = e[r];
						return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), ks()(e, r)
					}
					default:
						return e
				}
			};
			const LI = {};
			var NI = (e = LI, t) => {
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
				kI = r("./src/reddit/actions/inbox.ts"),
				xI = r("./src/reddit/actions/pages/appeal/constants.ts"),
				UI = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				MI = r("./src/reddit/actions/sso/constants.ts");
			const FI = (e, t) => {
				if (!t || Vi()(e, t)) return e;
				const {
					awardeeKarma: r,
					awarderKarma: s,
					commentKarma: n,
					postKarma: a,
					totalKarma: c
				} = t, o = e ? e.awardeeKarma : 0, d = e ? e.awarderKarma : 0, i = r || o, u = s || d, l = c || i + u + a + n;
				return {
					...t,
					awardeeKarma: i,
					awarderKarma: u,
					totalKarma: l
				}
			};
			var GI = Object(bb.a)((e = null, t) => {
				switch (t.type) {
					case xI.a:
					case xI.b:
					case Py.b:
					case Py.c:
					case Nr.a:
					case Nr.b:
					case Nr.f:
					case Nr.h:
					case Nr.i:
					case Nr.j:
					case Re.e:
					case Re.h:
					case Re.g:
					case Ce.q:
					case Ce.r:
					case $.a:
					case $.e:
					case $.b:
					case $.f:
					case Pe.a:
					case Pe.b:
					case Le.a:
					case Le.b:
					case J.SUBREDDIT_FAILED:
					case zi.l:
					case Q.b:
					case Q.a:
					case Q.e:
					case Q.d:
					case X.c:
					case X.i:
					case ke.e:
					case ke.d:
					case ke.b:
					case ke.a:
					case z.PROFILE_POSTS_LOADED:
					case z.PROFILE_POSTS_FAILED:
					case J.SUBREDDIT_LOADED:
					case Y.SEARCH_FAILED:
					case Y.SEARCH_RESULTS_RECEIVED:
					case Ne.PAGE_LOADED:
					case xs.PAGE_LOADED:
					case Fe.a:
					case Fe.c:
					case Bh.a:
					case Bh.b:
					case Od.j:
					case UI.b:
					case Hh.c:
					case Jo.TOPIC_DATA_LOADED:
						return FI(e, t.payload.account);
					case Hh.n:
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
						return r ? FI(e, r.account) : e
					}
					case Hh.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case s.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case Od.l:
					case Od.k: {
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
							awardeeKarma: n
						} = t.payload;
						if (r.toLowerCase() !== (e && Object(re.e)(e).toLowerCase())) return e;
						const a = n || (e ? e.awardeeKarma : 0) || 0,
							c = s || (e ? e.awarderKarma : 0) || 0,
							o = a + c + (e ? e.postKarma : 0) + (e ? e.commentKarma : 0);
						return e && {
							...e,
							awardeeKarma: a,
							awarderKarma: c,
							totalKarma: o
						}
					}
					case we.w: {
						const {
							coins: r
						} = t.payload;
						return r && e ? {
							...e,
							coins: r
						} : e
					}
					case Nu.c: {
						const {
							price: r
						} = t.payload;
						return (null == e ? void 0 : e.coins) && r ? {
							...e,
							coins: e.coins - r
						} : e
					}
					case kI.a: {
						const {
							inboxCount: r
						} = t.payload;
						return e ? {
							...e,
							inboxCount: r
						} : e
					}
					case MI.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case MI.b: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: s.filter(e => e !== r)
						} : e
					}
					case _o.c: {
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
			var BI = (e = null, t) => {
				switch (t.type) {
					case Hh.m:
					case Hh.n:
						return null;
					case Hh.l:
						return t.payload;
					default:
						return e
				}
			};
			var qI = (e = !1, t) => {
					switch (t.type) {
						case Hh.m:
							return !0;
						case Hh.n:
						case Hh.l:
							return !1;
						default:
							return e
					}
				},
				HI = Object(c.c)({
					error: BI,
					pending: qI
				}),
				KI = Object(c.c)({
					api: HI
				});
			var VI = (e = !1, t) => {
				switch (t.type) {
					case Hh.j:
						return !0;
					default:
						return e
				}
			};
			var WI = (e = !1, t) => {
					switch (t.type) {
						case Hh.i:
							return !0;
						case Hh.j:
						case Hh.h:
							return !1;
						default:
							return e
					}
				},
				$I = Object(c.c)({
					pending: WI,
					emailSent: VI
				}),
				QI = Object(c.c)({
					api: $I
				}),
				zI = Object(c.c)({
					changeEmail: KI,
					sendResetEmail: QI
				}),
				XI = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const YI = {};
			var JI = (e = YI, t) => {
				switch (t.type) {
					case gt.f:
						return {
							...e, new: XI.a.pending
						};
					case gt.d:
						return {
							...e, new: XI.a.error
						};
					case gt.e:
						return {
							...e, new: XI.a.waitingForRequest
						};
					case gt.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: XI.a.pending
						}
					}
					case gt.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: XI.a.error
						}
					}
					case gt.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: XI.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const ZI = [];
			var eg = (e = ZI, t) => {
					switch (t.type) {
						case gt.e:
							return [t.payload, ...e];
						case gt.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case Od.j:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				tg = Object(c.c)({
					api: JI,
					data: eg
				}),
				rg = r("./src/reddit/actions/chat/constants.ts"),
				sg = r("./src/reddit/actions/chat/userSettings.ts");
			const ng = rg.a.anybody;
			var ag = (e = ng, t) => {
					switch (t.type) {
						case sg.a:
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
				cg = Object(c.c)({
					invitePolicy: ag
				});
			const og = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var dg = (e = null, t) => {
				switch (t.type) {
					case Ne.PAGE_LOADED: {
						const {
							drafts: r
						} = t.payload;
						return e && Vi()(e, r) ? e : {
							...e,
							...r
						}
					}
					case as.L: {
						const {
							response: {
								draftsCount: r
							}
						} = t.payload;
						return og(e, r)
					}
					case Vr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return og(e, r.length)
					}
					case Vr.c:
					case Vr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return og(e, r)
					}
					default:
						return e
				}
			};
			const ig = {};
			var ug = (e = ig, t) => {
					switch (t.type) {
						case qa.a: {
							const e = t.payload.experimentVariants;
							return hu(e)
						}
						default:
							return e
					}
				},
				lg = r("./src/reddit/actions/global/constants.ts");
			const pg = {};
			var bg = (e = pg, t) => {
					switch (t.type) {
						case lg.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				fg = Object(c.c)({
					byName: ug,
					localPersisted: bg
				}),
				yg = r("./src/reddit/actions/googleOneTap/index.ts");
			var mg = (e = !1, t) => {
				switch (t.type) {
					case yg.a:
						return !0;
					default:
						return e
				}
			};
			var Eg = (e = !1, t) => {
				switch (t.type) {
					case Od.e:
						return !0;
					case Od.d:
						return !1;
					default:
						return e
				}
			};
			var Og = (e = "en", t) => {
				switch (t.type) {
					case Od.g:
						return t.payload;
					case Od.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const _g = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var hg = (e = _g, t) => {
					switch (t.type) {
						case Hh.b:
							return t.payload;
						default:
							return e
					}
				},
				Ig = r("./src/reddit/actions/notifications/constants.ts"),
				gg = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var Sg = (e = null, t) => {
				switch (t.type) {
					case gg.a:
					case gg.d:
					case Ig.a:
						return t.payload && t.payload.error || null;
					case gg.c:
					case gg.f:
					case gg.a:
					case Ig.c:
					case Ig.b:
						return null;
					default:
						return e
				}
			};
			var Dg = (e = !1, t) => {
				switch (t.type) {
					case Ig.c:
						return !1;
					case Ig.b:
						return !0;
					default:
						return e
				}
			};
			var Tg = (e = !1, t) => {
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
				jg = Object(c.c)({
					error: Sg,
					loaded: Dg,
					pending: Tg
				});
			var vg = (e = null, t) => {
				switch (t.type) {
					case Ig.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case Ig.f:
					case Ig.e:
						return null;
					default:
						return e
				}
			};
			var Ag = (e = !1, t) => {
				switch (t.type) {
					case Ig.f:
						return !1;
					case Ig.e:
						return !0;
					default:
						return e
				}
			};
			var Pg = (e = !1, t) => {
					switch (t.type) {
						case Ig.f:
							return !0;
						case Ig.e:
						case Ig.d:
							return !1;
						default:
							return e
					}
				},
				wg = Object(c.c)({
					error: vg,
					loaded: Ag,
					pending: Pg
				}),
				Cg = Object(c.c)({
					getPreferences: jg,
					setPreferences: wg
				});
			const Rg = {
				byId: {},
				allIds: []
			};
			var Lg = (e = Rg, t) => {
				switch (t.type) {
					case gg.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case gg.g: {
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
			const Ng = {
				byId: {},
				allIds: []
			};
			var kg = (e = Ng, t) => {
					switch (t.type) {
						case gg.b: {
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
				xg = Object(c.c)({
					sections: kg,
					rows: Lg
				}),
				Ug = r("./src/lib/notifications/constants.ts");
			var Mg = (e = !1, t) => {
				switch (t.type) {
					case Ug.j:
						return !0;
					case Ug.b:
					case Ug.d:
					case Ug.e:
						return !1;
					default:
						return e
				}
			};
			const Fg = {
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
			var Gg = (e = Fg, t) => {
				switch (t.type) {
					case Ig.b:
					case Ig.f:
					case Ig.d: {
						const {
							preferences: r
						} = t.payload;
						return sa()(r) ? e : r
					}
					default:
						return e
				}
			};
			const Bg = {
				byId: {},
				allIds: []
			};
			var qg = (e = Bg, t) => {
				switch (t.type) {
					case gg.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case gg.g: {
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
			const Hg = {
				byId: {},
				allIds: []
			};
			var Kg = (e = Hg, t) => {
					switch (t.type) {
						case gg.e: {
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
				Vg = Object(c.c)({
					sections: Kg,
					rows: qg
				}),
				Wg = Object(c.c)({
					api: Cg,
					emailSettingsLayout: xg,
					isNotificationPromptVisible: Mg,
					preferences: Gg,
					pushSettingsLayout: Vg
				});
			const $g = {};
			var Qg = (e = $g, t) => {
				switch (t.type) {
					case y.i:
					case f.i: {
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
					case _.d: {
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
			const zg = {},
				Xg = (e, t) => `${e}_${t||new Date}}`;
			var Yg = (e = zg, t) => {
				switch (t.type) {
					case oe.tb: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[Xg(t.subredditInfo.id, t.allocatedAt)]: t
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
							allocatedAt: n
						} = t.payload;
						if (s < 0) {
							const t = Xg(r, n),
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
					case oe.O: {
						const {
							subredditId: r,
							allocatedAt: s
						} = t.payload, n = Xg(r, s), a = e[n];
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
			var Jg = (e = null, t) => {
				switch (t.type) {
					case oe.tb: {
						const r = t.payload.powerups;
						return r ? ks()({
							...e,
							...r
						}, "allocation") : e
					}
					case oe.ib: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? ks()({
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
			var Zg = (e = !1, t) => {
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
				eS = Object(c.c)({
					allocationByKey: Yg,
					data: Jg,
					fetched: Zg
				}),
				tS = r("./src/reddit/reducers/user/prefs/index.ts");
			var rS = (e = "", t) => {
					switch (t.type) {
						case Hh.d:
							return t.payload;
						default:
							return e
					}
				},
				sS = r("./src/reddit/actions/session.ts");
			var nS = (e = null, t) => {
				switch (t.type) {
					case sS.a:
					case sS.b:
					case sS.c:
					case sS.e:
						return t.payload;
					case sS.d:
						return null;
					default:
						return e
				}
			};
			var aS = (e = !1, t) => {
				switch (t.type) {
					case sS.f:
						return !0;
					default:
						return e
				}
			};
			var cS = (e = "", t) => {
				switch (t.type) {
					case Hh.k:
						return t.payload;
					default:
						return e
				}
			};
			var oS = (e = null, t) => {
				switch (t.type) {
					case qa.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var dS = (e = null, t) => {
					switch (t.type) {
						case qa.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				iS = Object(c.c)({
					isEmployee: oS,
					isLoggedIn: dS
				});
			var uS = (e = null, t) => {
					switch (t.type) {
						case Od.r: {
							const {
								topContentDismissal: r
							} = t.payload;
							return e && Vi()(e, r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				lS = r("./src/reddit/actions/userWhitelist.ts");
			const pS = {};
			var bS = (e = pS, t) => {
				switch (t.type) {
					case lS.e:
						return {
							...e, new: XI.a.pending
						};
					case lS.d:
						return {
							...e, new: XI.a.error
						};
					case lS.f:
						return {
							...e, new: XI.a.waitingForRequest
						};
					case lS.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: XI.a.pending
						}
					}
					case lS.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: XI.a.error
						}
					}
					case lS.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: XI.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const fS = [];
			var yS = (e = fS, t) => {
					switch (t.type) {
						case lS.f:
							return [t.payload, ...e];
						case lS.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case Od.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				mS = Object(c.c)({
					api: bS,
					data: yS
				}),
				ES = Object(c.c)({
					account: GI,
					accountSettings: zI,
					blocked: tg,
					chatSettings: cg,
					drafts: dg,
					experiments: fg,
					googleOneTapEnabled: mg,
					isCustomizeFlyoutShowing: Eg,
					topContentDismissalPrefsSet: uS,
					language: Og,
					loid: hg,
					notificationPrefs: Wg,
					ownedBadges: Qg,
					powerups: eS,
					prefs: tS.c,
					reddaid: rS,
					session: nS,
					sessionRefreshFailed: aS,
					sessionTracker: cS,
					temporaryGQL: iS,
					wallets: NI,
					whitelist: mS
				});
			var OS = (e = null, t) => {
				switch (t.type) {
					case UI.a:
						return t.payload || null;
					case UI.b:
					case UI.c:
						return null;
					default:
						return e
				}
			};
			var _S = (e = !1, t) => {
				switch (t.type) {
					case UI.c:
						return !0;
					case UI.b:
					case UI.a:
						return !1;
					default:
						return e
				}
			};
			var hS = (e = !1, t) => {
				switch (t.type) {
					case UI.b:
						return !0;
					case UI.a:
					case UI.c:
						return !1;
					default:
						return e
				}
			};
			var IS = (e = !1, t) => {
					switch (t.type) {
						case UI.b:
							return t.payload.userDataExportEligibility;
						case UI.a:
						case UI.c:
							return !1;
						default:
							return e
					}
				},
				gS = Object(c.c)({
					error: OS,
					pending: _S,
					success: hS,
					userDataExportEligibility: IS
				}),
				SS = Object(c.c)({
					userDataRequestPageApi: gS
				});
			const DS = {};
			var TS = (e = DS, t) => {
				switch (t.type) {
					case J.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case xs.PAGE_LOADED:
					case $.b:
					case $.f:
					case te.e:
						return {
							...e, ...t.payload.userFlair
						};
					case W.i:
					case W.f:
					case W.m:
					case W.p:
					case W.v: {
						const {
							response: r
						} = t.payload, {
							userFlair: s
						} = r, n = {
							...e
						};
						return Object.keys(s).forEach(e => {
							n[e] || (n[e] = s[e])
						}), n
					}
					case te.i: {
						const {
							subredditId: r,
							applied: s,
							displaySettings: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: s,
								displaySettings: n
							}
						}
					}
					case V.h: {
						const {
							subredditId: r,
							applied: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: s
							}
						}
					}
					case te.d: {
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
					case te.b: {
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
					case te.h: {
						const r = t.payload,
							s = e[r.subredditId],
							n = e[r.subredditId].templates,
							a = e[r.subredditId].templateIds,
							c = {
								...n,
								[r.template.id]: r.template
							},
							o = [...a];
						return o.includes(r.template.id) || o.push(r.template.id), {
							...e,
							[r.subredditId]: {
								...s,
								templates: c,
								templateIds: o
							}
						}
					}
					case te.c: {
						const r = t.payload,
							s = e[r.subredditId],
							n = e[r.subredditId].templates,
							a = e[r.subredditId].templateIds,
							c = ks()(n, r.templateId),
							o = a.filter(e => e !== r.templateId);
						return {
							...e,
							[r.subredditId]: {
								...s,
								templates: {
									...c
								},
								templateIds: o
							}
						}
					}
					case te.g:
					case te.f: {
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
					default:
						return e
				}
			};
			const jS = {};
			var vS = (e = jS, t) => {
				switch (t.type) {
					case Hh.g:
					case Hh.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Hh.e: {
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
			var AS = (e = !1, t) => {
					switch (t.type) {
						case Hh.g:
							return !0;
						case Hh.f:
						case Hh.e:
							return !1;
						default:
							return e
					}
				},
				PS = Object(c.c)({
					error: vS,
					pending: AS
				});
			const wS = {};
			var CS = (e = wS, t) => {
				switch (t.type) {
					case f.f: {
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
					case f.b: {
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
					case f.a: {
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
					case y.a: {
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
			const RS = {},
				LS = (e, t) => {
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					return r.forEach(r => {
						const n = e[r],
							a = t[r];
						n && Vi()(n, a) || (s[r.toLowerCase()] = a)
					}), Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var NS = (e = RS, t) => {
					switch (t.type) {
						case Hh.f: {
							const {
								data: r
							} = t.payload;
							return LS(e, r)
						}
						case zi.k: {
							const {
								user: r
							} = t.payload;
							return LS(e, {
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
							const n = s.awardedLastMonth,
								a = n ? n.totalCount + 1 : 1,
								c = n && n.topAward;
							return c ? LS(e, {
								[r.toLowerCase()]: {
									...s,
									awardedLastMonth: {
										totalCount: a,
										topAward: c
									}
								}
							}) : e
						}
						case oe.a: {
							const {
								userName: r,
								awardeeKarma: s,
								awarderKarma: n
							} = t.payload, a = e[r.toLowerCase()];
							if (!a) return e;
							const c = s || a.awardeeKarma,
								o = n || a.awarderKarma;
							return LS(e, {
								[r.toLowerCase()]: {
									...a,
									awardeeKarma: c,
									awarderKarma: o,
									totalKarma: c + o + a.postKarma + a.commentKarma
								}
							})
						}
						case Od.l:
						case Od.k: {
							const {
								imageUrl: r,
								key: s,
								username: n
							} = t.payload;
							if ("profileIcon" !== s) return e;
							const a = n.toLowerCase(),
								c = e[a];
							return c ? LS(e, {
								[a]: {
									...c,
									accountIcon: r
								}
							}) : e
						}
						default:
							return e
					}
				},
				kS = r("./src/reddit/actions/usernameAvailable.ts");
			const xS = {};
			var US = (e = xS, t) => {
				switch (t.type) {
					case kS.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: kS.b.Available
						}
					}
					case kS.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: kS.b.Error
						}
					}
					case kS.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: kS.b.Pending
						}
					}
					case kS.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: kS.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const MS = {};
			var FS = (e = MS, t) => {
				switch (t.type) {
					case oe.Z: {
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
			var GS = (e = !1, t) => {
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
				BS = Object(c.c)({
					allocationByKey: FS,
					fetched: GS
				});
			var qS = (e = null, t) => {
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
			var HS = (e = !1, t) => {
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
				KS = Object(c.c)({
					error: qS,
					pending: HS
				});
			var VS = (e = null, t) => {
				switch (t.type) {
					case oe.rb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const WS = {};
			var $S = (e = WS, t) => {
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
			const QS = {};
			var zS = (e = QS, t) => {
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
							return ks()(e, [r])
						}
						default:
							return e
					}
				},
				XS = Object(c.c)({
					api: KS,
					currentPostId: VS,
					currentRank: $S,
					list: zS
				}),
				YS = Object(c.c)({
					api: PS,
					appliedBadges: CS,
					models: NS,
					nameAvailable: US,
					topAwarders: XS,
					powerups: BS
				});
			const JS = {};
			var ZS = (e = JS, t) => {
					switch (t.type) {
						case $.b:
						case $.f:
						case J.SUBREDDIT_LOADED:
						case ee.i:
						case Y.SEARCH_RESULTS_RECEIVED:
						case Ne.PAGE_LOADED:
						case xs.PAGE_LOADED: {
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
				eD = r("./src/reddit/actions/widgets/constants.ts");
			const tD = {};
			var rD = (e = tD, t) => {
					switch (t.type) {
						case $.b:
						case $.f:
						case Y.SEARCH_RESULTS_RECEIVED:
						case ee.i:
						case J.SUBREDDIT_LOADED:
						case Ne.PAGE_LOADED: {
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
						case eD.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case eD.h: {
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
				sD = r("./src/reddit/models/Widgets/index.ts");
			const nD = {};
			var aD = (e = nD, t) => {
				switch (t.type) {
					case J.SUBREDDIT_LOADED: {
						const r = t.payload,
							s = r.structuredStyles && r.structuredStyles.data && r.structuredStyles.data.content;
						if (!s) return e;
						const n = s.widgets;
						return {
							...e,
							...n.items
						}
					}
					case eD.b: {
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
								styles: Object(sD.m)()
							}
						}), t
					}
					case eD.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case eD.i:
					case eD.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case eD.h: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r.widgetId], s
					}
					case $.b:
					case $.f:
					case J.SUBREDDIT_LOADED:
					case ee.i:
					case Y.SEARCH_RESULTS_RECEIVED:
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
			const cD = {};
			var oD = (e = cD, t) => {
				switch (t.type) {
					case J.SUBREDDIT_LOADED:
					case $.f:
					case ee.i:
					case Ne.PAGE_LOADED: {
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
			const dD = {};
			var iD = (e = dD, t) => {
				switch (t.type) {
					case J.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case xs.PAGE_LOADED: {
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
					case eD.e:
					case eD.b: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgets.layout.sidebar.order
						}
					}
					case eD.f: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgetIds
						}
					}
					case eD.g: {
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
					case eD.h: {
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
					case J.SUBREDDIT_LOADED:
					case Y.SEARCH_RESULTS_RECEIVED:
					case ee.i:
					case Ne.PAGE_LOADED:
					case xs.PAGE_LOADED: {
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
			const uD = {
				accountManagerModalData: a,
				actionBarCountAnimation: p,
				activeModal: S,
				ads: A,
				apiRequestState: C,
				appBadges: M,
				authorFlair: ce,
				awards: Ze,
				badges: bt,
				blockedRedditors: It,
				blockUser: At,
				brandSafety: wt,
				chat: ur,
				claimGold: Or,
				commentsListTruncated: hr,
				communityFlairs: Sr,
				contentControls: Lr,
				contentGate: xr,
				continueThreads: Fr,
				creations: $n,
				dashboard: Xn,
				discoveryUnits: la,
				dismissedTruncationList: fa,
				economics: La,
				emojis: Ba,
				experimentOverrides: Wa,
				externalAccount: Ic,
				featureFlags: Ac,
				focusedVerticals: Bc,
				fontFiles: Hc,
				gild: ro,
				header: po,
				htmlResponseStreaming: bo,
				imageUploads: mo,
				interceptedAction: Oo,
				isChangeUsernameTooltipShowing: ho,
				isEmailVerificationTooltipShowing: go,
				isModeratorWithPostPerms: Do,
				jsApi: vo,
				leaderboard: xo,
				listings: jd,
				live: Cd,
				mediaGalleries: Ud,
				mediaPlayback: Gd,
				meta: Hd,
				moderatingSubreddits: Wd,
				moderationPromptId: $d,
				modListingPage: ei,
				modModeEnabled: ri,
				moreComments: li,
				multireddits: nu,
				notificationBannerId: cu,
				notificationsInbox: yu,
				nps: Ou,
				page: Du,
				platform: vu,
				postCollection: rl,
				polls: Ku,
				postFlair: dl,
				posts: pb,
				postStickiedComments: mb,
				givePremium: oo,
				products: Cb,
				profileCommentsPage: Wb,
				profilePrivatePage: df,
				profileModSettingsPage: Xb,
				profilePostsPage: Jb,
				profiles: qf,
				promos: $f,
				publicAccessNetwork: jy,
				recommendations: Ay,
				reportPage: My,
				reportRules: By,
				requestHost: qy,
				runTimeEnvVars: Ky,
				search: rm,
				searchDiscoveryUnits: um,
				seo: Om,
				shortcuts: Am,
				sidebarPromotedPosts: Cm,
				streaming: Fm,
				structuredStyles: nE,
				stylesheets: aE,
				subredditAutocomplete: fE,
				subreddits: H_,
				subredditStickyPosts: W_,
				subscriptions: fh,
				tabBadged: mh,
				tags: Gh,
				themes: Wh,
				toaster: zh,
				tooltipId: Yh,
				tracing: eI,
				tracking: uI,
				trafficStats: fI,
				transfers: gI,
				trending: jI,
				trophies: AI,
				uploads: RI,
				user: ES,
				userDataRequestPage: SS,
				userFlair: TS,
				users: YS,
				widgets: Object(c.c)({
					idCardIds: ZS,
					menuIds: rD,
					models: aD,
					moderatorIds: oD,
					sidebar: iD
				})
			}
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, n, a = r("./node_modules/lodash/isEqual.js"),
				c = r.n(a),
				o = r("./node_modules/lodash/merge.js"),
				d = r.n(o),
				i = r("./node_modules/lodash/pick.js"),
				u = r.n(i),
				l = r("./src/lib/constants/index.ts"),
				p = r("./src/reddit/actions/comment/constants.ts"),
				b = r("./src/reddit/actions/contentGate.ts"),
				f = r("./src/reddit/actions/frontpage/constants.ts"),
				y = r("./src/reddit/actions/header.ts"),
				m = r("./src/reddit/actions/modQueue/constants.ts"),
				E = r("./src/reddit/actions/pages/constants.ts"),
				O = r("./src/reddit/actions/pages/modListing/constants.ts"),
				_ = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				h = r("./src/reddit/actions/pages/postCreation.ts"),
				I = r("./src/reddit/actions/pages/postDraft.ts"),
				g = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				S = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				D = r("./src/reddit/actions/pages/profilePosts.ts"),
				T = r("./src/reddit/actions/pages/search.ts"),
				j = r("./src/reddit/actions/pages/subreddit.ts"),
				v = r("./src/reddit/actions/pages/topic.ts"),
				A = r("./src/reddit/actions/postCreation/constants.ts"),
				P = r("./src/reddit/actions/postDraft.ts"),
				w = r("./src/reddit/actions/preferences.ts"),
				C = r("./src/reddit/actions/redditEmbed.ts"),
				R = r("./src/reddit/actions/search.ts"),
				L = r("./src/reddit/actions/structuredStyles/constants.ts"),
				N = r("./src/reddit/actions/subreddit.ts"),
				k = r("./src/reddit/actions/users.ts"),
				x = r("./src/reddit/constants/postLayout.ts"),
				U = r("./src/reddit/constants/preferences.ts"),
				M = r("./src/reddit/constants/theme.ts"),
				F = r("./src/reddit/models/PostCreationForm/index.ts"),
				G = r("./src/reddit/models/PostDraft/index.ts"),
				B = r("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(s || (s = {})),
			function(e) {
				e.Whitelisted = "nobody", e.Everyone = "everyone"
			}(n || (n = {}));
			const q = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "lang", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...U.a, "loginOtpEnabled"],
				H = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: B.a,
					commentMode: F.h.RICH_TEXT,
					layout: x.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: l.r.CONFIDENCE,
					editorMode: F.h.RICH_TEXT,
					geopopular: void 0,
					globalTheme: M.a,
					hamburgerTray: void 0,
					hasSeenCustomizeFlyout: !0,
					hideNSFW: !0,
					ignoreSuggestedSort: !1,
					labelNSFW: !0,
					lang: "en",
					loginOtpEnabled: !1,
					markMessagesRead: !0,
					nightmode: !1,
					openPostInNewTab: !1,
					over18: !1,
					profileLayout: void 0,
					reduceAnimationsFromAwards: !1,
					rpanDuDismissalTime: void 0,
					showActiveCommunities: !0,
					showPresence: !0,
					showRpanDu: !0,
					showTwitter: !1,
					sort: l.R.Hot,
					stylesEnabled: !0,
					subreddit: {},
					subscriptionsPinned: void 0,
					surveyLastSeenTime: void 0,
					thirdPartyDataPersonalizedAds: !0,
					thirdPartyPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedContent: !0,
					showLocationBasedRecommendations: !0,
					topContentDismissalTime: 0,
					topContentTimesDismissed: 0,
					rememberCommunitySort: !1,
					useMarkdown: !1
				},
				K = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				V = (e, t) => {
					if (!t) return e;
					const r = u()({
							...t.account,
							...t
						}, q),
						s = t.subreddit,
						n = {
							...e.subreddit
						};
					Object.keys(s || {}).forEach(e => {
						n[e] = {
							...K,
							...s && s[e]
						}
					});
					const a = {
						...e,
						...r,
						subreddit: n
					};
					if (a.useMarkdown !== e.useMarkdown) {
						const e = a.useMarkdown ? F.h.MARKDOWN : F.h.RICH_TEXT;
						a.editorMode = e, a.commentMode = e
					}
					return c()(a, e) ? e : a
				},
				W = (e, t, r) => V(e, {
					subreddit: {
						[t]: {
							...K,
							...e.subreddit[t],
							...r
						}
					}
				});
			t.c = (e = H, t) => {
				switch (t.type) {
					case p.l:
					case p.s: {
						const {
							editorMode: r
						} = t.payload;
						return {
							...e,
							commentMode: r
						}
					}
					case A.s:
					case A.M: {
						const {
							editorMode: r
						} = t.payload;
						return {
							...e,
							editorMode: r
						}
					}
					case y.d:
						return {
							...e, subscriptionsPinned: !0
						};
					case y.e:
						return {
							...e, subscriptionsPinned: !1
						};
					case P.g: {
						const {
							kind: r
						} = t.payload;
						return {
							...e,
							editorMode: r === G.b.Markdown ? F.h.MARKDOWN : F.h.RICH_TEXT
						}
					}
					case w.h: {
						const {
							layout: r
						} = t.payload;
						return e.layout === r ? e : {
							...e,
							layout: r
						}
					}
					case w.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case w.p: {
						const {
							layout: r,
							subredditId: s
						} = t.payload;
						return W(e, s, {
							layout: r
						})
					}
					case w.e:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case w.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case b.g:
						return {
							...e, over18: !0
						};
					case w.b:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case w.i:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case w.r:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: r,
								topContentTimesDismissed: s
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: r,
								topContentTimesDismissed: s
							}
						}
						return e;
					case L.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case L.e:
						return t.payload.nightmodeTempUpdated ? {
							...e,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : e;
					case w.f:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case w.c:
						return void 0 !== t.payload ? {
							...e,
							collapsedTraySections: d()({}, e.collapsedTraySections, t.payload)
						} : e;
					case b.a:
					case b.b:
					case b.h:
					case b.i:
					case b.f:
					case b.j:
					case O.e:
					case O.h:
					case E.a:
					case E.e:
					case E.b:
					case E.f:
					case E.d:
					case E.h:
					case f.b:
					case j.SUBREDDIT_LOADED:
					case _.b:
					case _.a:
					case g.e:
					case S.e:
					case S.b:
					case D.PROFILE_POSTS_LOADED:
					case f.f:
					case N.i:
					case R.c:
					case C.b:
					case h.PAGE_LOADED:
					case I.PAGE_LOADED:
					case w.j:
					case T.SEARCH_RESULTS_RECEIVED:
					case w.a:
					case k.c:
					case v.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? V(e, t.payload.preferences) : e;
					case w.q: {
						const {
							subredditId: r,
							prefs: s
						} = t.payload;
						return W(e, r, s)
					}
					case g.d:
					case S.d:
					case S.a:
					case D.PROFILE_POSTS_FAILED:
						if (t.payload && t.payload.account) {
							const {
								nightmode: r
							} = t.payload.account;
							if (e.nightmode !== r) return {
								...e,
								nightmode: r
							}
						}
						return e;
					case m.h:
					case m.j:
					case m.i:
					case m.g:
					case m.f:
					case m.n:
					case m.m:
					case m.p:
					case m.q:
					case m.w:
					case m.v:
						return t.payload && t.payload.response && t.payload.response.preferences ? V(e, t.payload.preferences) : e;
					case w.n: {
						const r = t.payload,
							{
								showActiveCommunities: s
							} = r.additional;
						return e.showActiveCommunities !== s ? {
							...e,
							showActiveCommunities: s
						} : e
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/postCreation/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/loadableAction/index.ts"),
				c = r("./src/reddit/routes/postCreation/constants.ts");
			const o = [c.b, c.c, c.a],
				d = Object(s.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), r.e("vendors~PostCreation"), r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), r.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~9f82fa34"), r.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), r.e("PostCreation")]).then(r.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/pages/PostCreation/index.tsx"
					}
				}),
				i = e => `/${e}/submit`,
				u = (e, t) => {
					return c.c.replace(/:subredditName/, e) + (t ? `?collection=${t}` : "")
				},
				l = e => c.a.replace(/:profileName/, e),
				p = {
					action: Object(a.a)(() => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), r.e("vendors~PostCreation"), r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), r.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~9f82fa34"), r.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), r.e("PostCreation")]).then(r.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: d,
					chunk: n.p.POST_CREATION,
					exact: !0,
					meta: {
						name: n.Db.POST_CREATION
					},
					path: o,
					prefetches: [n.p.COMMENTS_PAGE]
				};
			t.a = p
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "i", (function() {
				return y
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/selectors/chat.ts"),
				a = r("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			const c = e => e.appBadges.badges,
				o = Object(s.a)(a.a, c, n.a, (e, t, r) => e ? t && t.directMessages && t.directMessages.count || 0 : r),
				d = Object(s.a)(c, e => e && e.chatRooms && e.chatRooms.count || 0),
				i = Object(s.a)(c, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				u = Object(s.a)(a.a, n.a, o, d, i, (e, t, r, s, n) => {
					if (e) {
						return r + s + n > 0
					}
					return t > 0
				}),
				l = Object(s.a)(c, e => e && e.activityTab && e.activityTab.count || 0),
				p = Object(s.a)(c, e => e && e.messageTab && e.messageTab.count || 0),
				b = Object(s.a)(l, p, (e, t) => e + t),
				f = Object(s.a)(o, p, (e, t) => e + t),
				y = Object(s.a)(o, b, (e, t) => e + t)
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return a
			}));
			const s = e => e.blockedRedditors.api.pending,
				n = e => e.blockedRedditors.list,
				a = (e, t) => {
					const r = (e => {
						const t = n(e);
						return t && t.ids
					})(e);
					return !!r && r.includes(t)
				}
		},
		"./src/reddit/selectors/chat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				a = r("./src/reddit/selectors/moderatorPermissions.ts");
			const c = e => e.chat.unread.count,
				o = Object(s.a)(c, e => e.basicChannelCount),
				d = (Object(s.a)(c, e => e.subredditChannelCount), e => !(e.chat.isInited || e.chat.unread.api.pending)),
				i = (e, t) => {
					const {
						chatConfig: r
					} = n.c;
					return Object(a.a)(r)(e, t)
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
				p = Object(a.a)(l, o.a, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, r, s) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !r) && (!(!e.userFlairAllowed && s === c.d.UserFlair) && !(!e.postFlairAllowed && s === c.d.LinkFlair)))),
				b = Object(a.a)(u, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
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
				n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/meta.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(c.c, e => !e),
				i = Object(s.a)(e => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e),
					experimentName: n.N,
					expEventOverride: !1
				}), e => e),
				u = e => e === n.G.Onetap,
				l = e => e === n.G.OnetapAuto,
				p = e => e.user.googleOneTapEnabled,
				b = Object(s.a)(o.J, i, (e, t) => !e && !!t),
				f = Object(s.a)(o.J, i, (e, t) => !e && !!t && !Object(n.sd)(t))
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/experiments/utils.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(e => Object(a.c)(e, {
					experimentName: n.Tb,
					experimentEligibilitySelector: i
				}), c.a),
				i = e => Object(o.I)(e) || Object(o.J)(e),
				u = Object(s.a)(d, e => e === n.Zb.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return f
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/experiments/utils.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(e => Object(a.c)(e, {
					experimentName: n.Wb,
					experimentEligibilitySelector: i
				}), c.a),
				i = e => Object(o.I)(e) || Object(o.J)(e),
				u = Object(s.a)(d, e => e === n.cc.Redesign),
				l = Object(s.a)(e => Object(a.c)(e, {
					experimentName: n.Vb,
					experimentEligibilitySelector: i
				}), c.a),
				p = Object(s.a)(l, e => e === n.bc.Enabled),
				b = Object(s.a)(e => Object(a.c)(e, {
					experimentName: n.Ub,
					experimentEligibilitySelector: i
				}), c.a),
				f = Object(s.a)(b, e => e === n.ac.Enabled)
		},
		"./src/reddit/selectors/inFeedChaining.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "b", (function() {
				return _
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeListingKey/index.ts"),
				c = r("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				o = r("./src/reddit/constants/inFeedChaining.ts"),
				d = r("./src/reddit/models/DiscoveryUnit/index.ts"),
				i = r("./src/reddit/selectors/discoveryUnit.ts"),
				u = r("./src/reddit/selectors/posts.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const p = [],
				b = (e, t) => {
					const r = e.posts.chained.idToListingKey[t.postId];
					return t.listingKey === r
				},
				f = (e, t) => {
					const r = e.posts.chained.dismissedIdToListingKey[t.postId];
					return (e => e.posts.chained.dismissed)(e) || t.listingKey === r
				},
				y = Object(s.a)(e => e.posts.chained.idToListingKey, e => Object.keys(e).filter(t => e[t])),
				m = (e, {
					subredditId: t
				}) => {
					return y(e).some(r => {
						const s = Object(u.U)(e, {
							postId: r
						});
						return !!s && s.id === t
					})
				},
				E = (e, {
					subredditName: t
				}) => {
					const r = n.Ub.DAY.toUpperCase(),
						s = Object(a.a)(t, n.P.TOP, {
							t: r
						}),
						c = Object(u.B)(e, {
							listingKey: s
						});
					if (0 !== c.length)
						for (const n of c) {
							const t = Object(u.I)(e, {
								postId: n
							});
							if (t && !t.hidden && !t.isSponsored) return t
						}
				},
				O = (e, {
					postId: t
				}) => {
					const r = ((e, {
							postId: t
						}) => {
							const r = Object(u.I)(e, {
								postId: t
							});
							if (!r) return p;
							const s = Object(c.a)({
								subredditIds: [r.belongsTo.id],
								count: o.b
							});
							return Object(l.v)(e, {
								key: s
							})
						})(e, {
							postId: t
						}),
						s = [];
					for (const {
							name: n
						} of r) {
						const t = E(e, {
							subredditName: n
						});
						t && s.push(t.id)
					}
					return s
				},
				_ = (e, {
					listingName: t
				}) => {
					const r = d.b;
					return Object(i.c)(e, {
						unitName: r
					})
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
					type: a.f.standalonePosts
				}),
				O = (e, {
					subredditId: t,
					scheduledPostId: r
				}) => {
					const s = m(e, {
						subredditId: t,
						scheduledPostId: r,
						type: a.f.recurringPosts
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
				g = ({
					scheduledPost: e
				}) => {
					const t = I({
							scheduledPost: e
						}),
						r = t.find(e => e.type === n.f.Richtext);
					return r || (t.find(e => e.type === n.f.Text) || null)
				},
				S = e => e.posts.scheduledPosts[a.f.recurringPosts].editModal.scheduledPostId,
				D = e => e.posts.scheduledPosts[a.f.recurringPosts].editModal.subredditId,
				T = e => e.posts.scheduledPosts.api.pendingUpdate,
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.88b799ad467f897601ce.js.map