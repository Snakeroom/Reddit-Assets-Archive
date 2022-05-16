// https://www.redditstatic.com/desktop2x/Governance~Reddit.38846362647c451568dd.js
// Retrieved at 5/16/2022, 11:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit"], {
		"./assets/fonts/NotoMono/font.less": function(e, t, n) {},
		"./node_modules/@r/frames/compiled.js": function(e, t, n) {
			"use strict";
			(function(e) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = arguments,
					r = ".*",
					s = ".postMessage",
					a = {
						targetOrigin: "*"
					},
					o = /\..+$/;

				function c(e) {
					return new RegExp("\\.(?:" + e.join("|") + ")$")
				}

				function i(e) {
					return new RegExp("^http(s)?:\\/\\/" + e.join("|") + "$", "i")
				}
				var d = [r],
					u = i(d),
					l = [s],
					p = c(l),
					f = {},
					b = !1;

				function h(t, n, r) {
					e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent("on" + t, n)
				}

				function y(t, n) {
					e.removeEventListener ? e.removeEventListener(t, n) : e.detachEvent && e.detachEvent("on" + t, n)
				}

				function g(e) {
					return /\*/.test(e)
				}
				var m = t.postMessage = function(e, t, n) {
						var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						o.test(t) || (t += s);
						var c = r;
						Object.keys(a).forEach((function(e) {
							c[e] = a[e]
						})), e.postMessage(JSON.stringify({
							type: t,
							data: n,
							defaultedOptions: c
						}), c.targetOrigin)
					},
					v = t.receiveMessage = function(e, t, n, r) {
						"string" == typeof e && (r = n, n = t, t = e, e = null), r = r || void 0;
						var s = function(t) {
							for (var s = arguments.length, a = Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) a[o - 1] = arguments[o];
							e && e !== t.source && e.contentWindow !== t.source || n.apply(r, [t].concat(a))
						};
						return h(t, s), {
							off: function() {
								y(t, s)
							}
						}
					},
					O = (t.receiveMessageOnce = function(e, t, r, s) {
						var a = v(e, t, (function() {
							r && r.apply(void 0, n), a.off()
						}), s);
						return a
					}, t.removePostMessageOrigin = function(e) {
						var t = d.indexOf(e); - 1 !== t && (d.splice(t, 1), u = i(d))
					}),
					E = e.CustomEvent;
				if ("undefined" != typeof window && "function" != typeof E) {
					var _ = {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					(E = function(e, t) {
						t = t || _;
						var n = document.createEvent("CustomEvent");
						return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
					}).prototype = e.Event.prototype
				}
				t.addPostMessageOrigin = function(e) {
					g(e) ? d = [r] : -1 === d.indexOf(e) && (O(r), d.push(e), u = i(d))
				};

				function I(t) {
					if (t.origin === e.location.origin || u.test(t.origin) || "null" === t.origin) {
						var n = {};
						try {
							n = JSON.parse(t.data)
						} catch (t) {}
						var r = n.type;
						if (p.test(r)) {
							var s = r.split(".", 2)[1];
							if (f[s]) f[s].targets.forEach((function(e) {
								return m(e, r, n.data, n.options)
							}));
							var a = new E(r, {
								detail: n.data
							});
							a.source = t.source, e.dispatchEvent(a)
						}
					}
				}
				var S = t.listen = function(e) {
					-1 === l.indexOf(e) && (l.push(e), p = c(l)), b || (h("message", I), b = !0)
				};
				t.stopListening = function(e) {
					var t = l.indexOf(e); - 1 !== t && (l.splice(t, 1), l.length ? p = c(l) : (y("message", I), b = !1))
				}, t.proxy = function(e, t) {
					S(e), Array.isArray(t) || (t = [t]);
					var n = f[e];
					n ? n.targets = [].concat(n.targets, t) : n = {
						targets: t
					}, f[e] = n
				}
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/lodash/forOwn.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseForOwn.js"),
				s = n("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, t) {
				return e && r(e, s(t))
			}
		},
		"./node_modules/lodash/isEqualWith.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseIsEqual.js");
			e.exports = function(e, t, n) {
				var s = (n = "function" == typeof n ? n : void 0) ? n(e, t) : void 0;
				return void 0 === s ? r(e, t, void 0, n) : !!s
			}
		},
		"./node_modules/lodash/negate.js": function(e, t) {
			var n = "Expected a function";
			e.exports = function(e) {
				if ("function" != typeof e) throw new TypeError(n);
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
		"./node_modules/lodash/omitBy.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/negate.js"),
				a = n("./node_modules/lodash/pickBy.js");
			e.exports = function(e, t) {
				return a(e, s(r(t)))
			}
		},
		"./node_modules/lodash/union.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				s = n("./node_modules/lodash/_baseRest.js"),
				a = n("./node_modules/lodash/_baseUniq.js"),
				o = n("./node_modules/lodash/isArrayLikeObject.js"),
				c = s((function(e) {
					return a(r(e, 1, o, !0))
				}));
			e.exports = c
		},
		"./node_modules/lodash/xorWith.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayFilter.js"),
				s = n("./node_modules/lodash/_baseRest.js"),
				a = n("./node_modules/lodash/_baseXor.js"),
				o = n("./node_modules/lodash/isArrayLikeObject.js"),
				c = n("./node_modules/lodash/last.js"),
				i = s((function(e) {
					var t = c(e);
					return t = "function" == typeof t ? t : void 0, a(r(e, o), void 0, t)
				}));
			e.exports = i
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, t, n) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var r = n("./node_modules/ts-error/lib/helpers.js"),
				s = r.setPrototypeOf,
				a = r.getPrototypeOf,
				o = r.defineProperty,
				c = r.objectCreate,
				i = "[object Error]" === (new Error).toString(),
				d = "";

			function u(e) {
				var t, n = this.constructor,
					r = n.name || (null === (t = n.toString().match(/^function\s*([^\s(]+)/)) ? d || "Error" : t[1]),
					c = "Error" === r,
					l = c ? d : r,
					p = Error.apply(this, arguments);
				if (s(p, a(this)), !(p instanceof n && p instanceof u)) {
					p = this;
					Error.apply(this, arguments), o(p, "message", {
						configurable: !0,
						enumerable: !1,
						value: e,
						writable: !0
					})
				}
				if (o(p, "name", {
						configurable: !0,
						enumerable: !1,
						value: l,
						writable: !0
					}), Error.captureStackTrace && Error.captureStackTrace(p, c ? u : n), void 0 === p.stack) {
					var f = new Error(e);
					f.name = p.name, p.stack = f.stack
				}
				return i && o(p, "toString", {
					configurable: !0,
					enumerable: !1,
					value: function() {
						return (this.name || "Error") + (void 0 === this.message ? "" : ": " + this.message)
					},
					writable: !0
				}), p
			}
			d = u.name || "ExtendableError", u.prototype = c(Error.prototype, {
				constructor: {
					value: Error,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t.ExtendableError = u, t.default = t.ExtendableError
		},
		"./node_modules/ts-error/lib/helpers.js": function(e, t, n) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var r = "function" == typeof Object.setPrototypeOf,
				s = "function" == typeof Object.getPrototypeOf,
				a = "function" == typeof Object.defineProperty,
				o = "function" == typeof Object.create,
				c = "function" == typeof Object.prototype.hasOwnProperty;
			t.setPrototypeOf = function(e, t) {
				r ? Object.setPrototypeOf(e, t) : e.__proto__ = t
			};
			t.getPrototypeOf = function(e) {
				return s ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var i = !1;
			t.defineProperty = function e(t, n, r) {
				if (a && !i) try {
					Object.defineProperty(t, n, r)
				} catch (s) {
					i = !0, e(t, n, r)
				} else t[n] = r.value
			};
			var d = function(e, t) {
				return c ? e.hasOwnProperty(e, t) : void 0 === e[t]
			};
			t.hasOwnProperty = d;
			t.objectCreate = function(e, t) {
				if (o) return Object.create(e, t);
				var n = function() {};
				n.prototype = e;
				var r = new n;
				if (void 0 === t) return r;
				if ("null" == typeof t) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof t)
					for (var s in t) d(t, s) && (r[s] = t[s].value);
				return r
			}
		},
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
				const i = e[s - 1];
				let d = e[0];
				for (let a = 1; a < s - 1; ++a) switch (n) {
					case c.SEMICOLON:
						d = r.fbt._("{previous items}; {following items}", [r.fbt._param("previous items", d), r.fbt._param("following items", e[a])], {
							hk: "4hs4xq"
						});
						break;
					default:
						d = r.fbt._("{previous items}, {following items}", [r.fbt._param("previous items", d), r.fbt._param("following items", e[a])], {
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
				}(d, i, t || o.AND, n || c.COMMA)
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
				u = e => new Promise(t => e.ready(t));
			var l, p = n("./node_modules/ts-error/lib/cjs.js"),
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
			}(l || (l = {}));
			var b = l;
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
						return await u(e), this.isReady = !0, e
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
				return u
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "g", (function() {
				return f
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
				i = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				d = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				u = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				l = "BADGE__USER_BADGES_FETCH_SUCCESS",
				p = "BADGE__USER_BADGES_FETCH_FAILURE",
				f = "BADGE__USER_BADGES_FETCH_PENDING",
				b = Object(r.a)(o),
				h = Object(r.a)(c),
				y = (Object(r.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(r.a)(i)),
				g = Object(r.a)(d),
				m = Object(r.a)(u),
				v = (Object(r.a)(l), Object(r.a)(p), Object(r.a)(f), e => {
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
								u = !!t.length;
							e(b({
								badgeIds: t,
								subredditId: n,
								userId: d.id
							}));
							const l = await Object(a.a)(c(), n, o, u);
							l.ok || (e(h({
								badgeIds: t,
								subredditId: n,
								error: l.error,
								previousBadgeIds: r,
								userId: d.id
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
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
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
				u = "BLOCKED_REDDITORS_LIST__FAILED",
				l = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				f = Object(r.a)(i),
				b = Object(r.a)(d),
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
				return O
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/endpoints/chat/userSettings.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			var i = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/telemetry/index.ts"),
				u = n("./src/reddit/actions/chat/constants.ts");
			const l = Object(s.a)("USER_SETTINGS__FETCH_PENDING"),
				p = Object(s.a)("USER_SETTINGS__FETCH_FAILURE"),
				f = "USER_SETTINGS__UPDATE_SUCCESS",
				b = Object(s.a)(f),
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
						e(b({
							invitePolicy: u.a[t.invite_policy]
						}))
					} else e(p(s.error))
				}, y = Object(s.a)("USER_SETTINGS__SAVE_PENDING"), g = Object(s.a)("USER_SETTINGS__SAVE_FAILURE"), m = e => Object.keys(u.a).find(t => u.a[t] === e), v = e => async (t, n, s) => {
					let {
						apiContext: l
					} = s;
					const p = n(),
						{
							invitePolicy: f
						} = e,
						h = m(f);
					if (h) {
						t(y());
						const e = m(p.user.chatSettings.invitePolicy),
							n = await Object(o.e)(h, l());
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
							const e = u.a[h];
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
				i = n("./src/reddit/selectors/user.ts");
			const d = "FETCH_COOLDOWN_TIMER__PENDING",
				u = "FETCH_COOLDOWN_TIMER__SUCCESS",
				l = "FETCH_COOLDOWN_TIMER__FAILED",
				p = Object(r.a)(d),
				f = Object(r.a)(u),
				b = Object(r.a)(l),
				h = "SET__COOLDOWN_TIMER",
				y = Object(r.a)(h),
				g = () => async (e, t, n) => {
					let {
						gqlRealtime2Context: r
					} = n;
					const s = t(),
						a = Object(i.P)(s),
						d = !!Object(c.b)(s),
						{
							expiresAt: u,
							api: {
								pending: l
							}
						} = s.cooldownTimer,
						h = u <= Date.now();
					if (!a || !r || !h || !d || l) return;
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
			const i = e => ({
				input: {
					subredditId: e.subredditId,
					countryCode: e.countryCode || "",
					languageCode: e.languageCode || ""
				}
			});
			var d = async (e, t) => Object(a.a)(e, {
				...c,
				variables: i(t)
			}), u = n("./node_modules/fbt/lib/FbtPublic.js"), l = n("./src/reddit/models/Toast/index.ts"), p = n("./node_modules/reselect/es/index.js"), f = n("./src/reddit/constants/experiments.ts"), b = n("./src/reddit/helpers/chooseVariant/index.ts"), h = n("./src/reddit/selectors/user.ts");
			const y = Object(p.a)(e => Object(b.c)(e, {
				experimentEligibilitySelector: h.P,
				experimentName: f.Qb
			}), e => e === f.pd);
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
					const i = await (async (e, t) => Object(a.a)(e, {
							...o,
							variables: {
								subredditId: t
							}
						}))(s(), e),
						d = i.body;
					i && i.ok && d && t(E({
						subredditId: e,
						subredditCountrySite: null === (c = d.data) || void 0 === c ? void 0 : c.subredditInfoById.countrySiteSettings
					}))
				}, j = (e, t) => async (n, r, s) => {
					let {
						gqlContext: a
					} = s;
					if (!e) return;
					const o = await d(a(), {
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
						i = await d(o(), c);
					if (i.ok) {
						const t = i.body;
						n(_({
							subredditId: e,
							subredditCountrySite: t.data.updateSubredditCountrySiteSettings.subreddit.countrySiteSettings
						}))
					} else r.l(e => {
						e.setExtra("subredditCountryLanginfo", c), r.c(i.error)
					})
				}
		},
		"./src/reddit/actions/crosspostSubredditRec/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
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
			const i = Object(r.a)("CROSSPOST_RECOMMENDATIONS__SHOULD_TRY_TO_RENDER"),
				d = Object(r.a)("CROSSPOST_RECOMMENDATIONS__STOP_TRYING_TO_RENDER"),
				u = e => async (t, n) => {
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
				return H
			})), n.d(t, "k", (function() {
				return V
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
				i = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/lib/uploadToS3/index.ts"),
				u = n("./src/reddit/constants/headers.ts");
			const l = async (e, t) => Object(c.a)(Object(i.a)(e, [u.a]), {
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
						e(Object(f.k)(t));
						const p = t.file,
							b = await Object(g.h)(p),
							h = await (async (e, t, n, r) => Object(c.a)(Object(i.a)(e, [u.a]), {
								endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
								method: o.jb.POST,
								data: {
									filepath: n,
									mimetype: r
								}
							}))(s.apiContext(), l, p.name, b);
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
				G = (e, t) => async (n, r, s) => {
					const {
						imageData: a,
						subredditId: d,
						emojiName: l,
						settings: p
					} = e, h = Object(y.a)(a.url), g = r(), m = Object(_.U)(g, {
						subredditId: d
					}).name, O = await (async (e, t, n, r, s) => Object(c.a)(Object(i.a)(e, [u.a]), {
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
						n(Object(f.i)(r)), n(Object(b.f)(U(e))), t && t.close()
					}
					return O.ok
				}, F = e => async (t, n, r) => {
					const {
						imageData: s,
						subredditId: a,
						emojiName: o,
						settings: c
					} = e;
					if (t(Object(f.k)(s)), !s.websocketUrl) return t(Object(b.f)({
						text: "Could not upload emoji"
					}));
					let i;
					const d = new WebSocket(s.websocketUrl);
					return d.onopen = async () => {
						i = await G(e, d)(t, n, r)
					}, d.onmessage = n => {
						const r = JSON.parse(n.data);
						if ("success" === r.type) {
							i = !0;
							const e = r.payload.emoji_url,
								n = Object(v.o)(s, e);
							t(Object(f.l)(n));
							const d = Object(m.e)(o, n.url, a, c);
							t(S(d)), t(B(a))
						} else {
							const n = Object(h.a)(o),
								r = Object(v.k)(s, n);
							t(Object(f.i)(r)), t(Object(b.f)(U(e)))
						}
						d.close()
					}, d.onerror = n => {
						i = !1;
						const r = Object(h.a)(o),
							a = Object(v.k)(s, r);
						t(Object(f.i)(a)), t(Object(b.f)(U(e))), d.close()
					}, i
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
				}, H = (e, t) => async (n, s, a) => {
					let {
						apiContext: d
					} = a;
					const l = s(),
						p = Object(_.U)(l, {
							subredditId: t
						}).name,
						f = await (async (e, t, n) => Object(c.a)(Object(i.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${n}/emoji/${t}`,
							method: o.jb.DELETE,
							type: "json"
						}))(d(), e, p);
					if (f.ok) {
						n(T({
							emojiName: e,
							subredditId: t
						})), n(b.f({
							kind: O.b.SuccessCommunityGreen,
							text: r.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else n(D(f.error)), n(b.f({
						kind: O.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, V = (e, t) => async (n, s, a) => {
					let {
						apiContext: d
					} = a;
					const l = s(),
						p = Object(_.U)(l, {
							subredditId: e
						}).name;
					if ((await (async (e, t, n) => Object(c.a)(Object(i.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: o.jb.POST,
							data: {
								subreddit: t,
								enable: n
							}
						}))(d(), p, t)).ok) {
						n(L({
							subredditId: e,
							emojisEnabled: t
						}))
					} else n(b.f({
						kind: O.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, W = "EMOJI_CUSTOM_SIZE_UPDATED", Q = Object(p.a)(W), $ = (e, t) => async (n, s, a) => {
					let {
						apiContext: d
					} = a;
					const l = s(),
						p = Object(_.U)(l, {
							subredditId: e
						}).name;
					(await (async (e, t, n) => Object(c.a)(Object(i.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji_custom_size`,
						method: o.jb.POST,
						data: n
					}))(d(), p, t)).ok ? n(Q({
						subredditId: e,
						emojiCustomSize: t
					})) : n(b.f({
						kind: O.b.Error,
						text: r.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, K = "EMOJI_PERMISSIONS_UPDATED", z = Object(p.a)(K), Y = (e, t, n, s) => async (a, d, l) => {
					let {
						apiContext: p
					} = l;
					const f = d(),
						h = Object(_.U)(f, {
							subredditId: s
						}).name;
					(await (async (e, t, n, r) => Object(c.a)(Object(i.a)(e, [u.a]), {
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
					})), a(b.f({
						kind: O.b.SuccessCommunityGreen,
						text: r.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : a(b.f({
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
				return f
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
				i = n("./src/reddit/models/StructuredStyles/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/selectors/subreddit.ts");
			const l = "STRUCTURED_STYLES__EXPORT_THEME_PENDING",
				p = "STRUCTURED_STYLES__EXPORT_THEME_LOADED",
				f = "STRUCTURED_STYLES__EXPORT_THEME_FAILED",
				b = Object(a.a)(l),
				h = Object(a.a)(p),
				y = Object(a.a)(f),
				g = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				m = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				v = Object(a.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				O = e => async (t, a) => {
					t(b());
					const o = a(),
						i = Object(u.U)(o, {
							subredditId: e
						}).name,
						l = o.structuredStyles.models[e],
						p = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ExportTheme")]).then(n.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						f = await p(l, i);
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
				}, E = e => async (t, a) => {
					t(g());
					const u = await Object(s.a)(() => Promise.all([n.e("vendors~ExportTheme~ImportTheme"), n.e("ImportTheme")]).then(n.bind(null, "./src/reddit/helpers/importTheme/index.ts"))).then(e => e.default),
						l = await u(e);
					l.ok ? (t(m()), t(Object(c.f)({
						kind: d.b.SuccessMod,
						text: r.fbt._("Theme successfully imported", null, {
							hk: "42FErS"
						})
					})), 0 !== Object.keys(l.attributes).length && t(Object(o.d)(Object(i.j)(l.attributes)))) : (t(v(l.error)), t(Object(c.f)({
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
				return i
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "l", (function() {
				return b
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
				i = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				d = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				f = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
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
				i = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/redditGQL/operations/PollVote.json"),
				f = n("./src/reddit/endpoints/governance/requester.ts");
			var b = n("./src/reddit/endpoints/governance/wallet.ts"),
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
							gqlContext: i
						} = s,
						b = r().polls.models[e];
					if (n(j({
							pollId: e
						})), (a = b.type === l.a.GA ? await ((e, t, n) => Object(u.a)(e, {
								...p,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(i(), e, t) : await
							function(e, t, n, r) {
								return Object(f.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${n}/votes/me/${r}`
								})
							}(o(), b.subredditId, e, t)).ok) {
						if (b.type === l.a.GA) {
							const {
								options: e
							} = a.body.data.updatePostPollVoteState.poll;
							n(_({
								pollId: b.id,
								optionId: t,
								options: e
							}))
						} else n(w(a.body));
						const s = r();
						if ((b = s.polls.models[e]) && Object(l.d)(b)) {
							const {
								postId: e
							} = b, t = s.posts.models[e];
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
						b = await
					function(e, t) {
						return Object(f.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${d.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(u(), {
						...e,
						contentId: p
					});
					b.ok ? (n(A({
						...b.body,
						subredditId: e.subredditId
					})), n(Object(i.f)({
						kind: h.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(a.a)(e.amount)), r.fbt._param("tokenName", (null === (l = Object(g.b)(s(), e.subredditId)) || void 0 === l ? void 0 : l.name) || ""), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(o.f)())) : (n(T({
						error: b.error
					})), Object(v.a)(n, b.error))
				}, U = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					t(R());
					const a = await Object(b.a)(s(), e);
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
				return i
			})), n.d(t, "g", (function() {
				return d
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
				i = "HARBERGER_TAX__BANNER_PURCHASE_PENDING",
				d = "HARBERGER_TAX__BANNER_PURCHASE_SUCCESS",
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
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
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
				i = "MULTIREDDIT__CREATE_FAILURE",
				d = "MULTIREDDIT__CREATE_PENDING",
				u = "MULTIREDDIT__CREATE_SUCCESS",
				l = "MULTIREDDIT__DELETE_PENDING",
				p = "MULTIREDDIT__DELETE_SUCCESS",
				f = "MULTIREDDIT__DELETE_FAILURE",
				b = "MULTIREDDIT__DUPLICATE_PENDING",
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
				return O
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/config.ts"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts");
			var d = n("./node_modules/@r/frames/compiled.js"),
				u = n("./node_modules/lodash/debounce.js"),
				l = n.n(u),
				p = function(e) {
					document.body.appendChild(function(e) {
						let t;
						const n = l()((function() {
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
			const O = () => async (e, t, n) => {
				const r = t();
				if (r.nps.pending) return;
				if (v) return;
				e(y());
				const d = r.platform.currentPage && r.platform.currentPage.queryParams.feature || "",
					u = !!r.user.account,
					l = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [i.a]), {
						data: {
							feature: t,
							app_name: "web2x"
						},
						endpoint: `${n?s.a.oauthUrl:s.a.apiUrl}/api/jail/asknicely${n?"":".json"}`,
						method: a.jb.GET,
						traceRequestName: "get_nps_survey"
					}))(n.apiContext(), d, u);
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
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/platform.ts"),
				u = n("./src/reddit/endpoints/me/index.ts"),
				l = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				p = n("./src/reddit/actions/pages/appeal/constants.ts");
			const f = `${c.a.redditHelpUrl}/en/categories/rules-reporting/account-and-community-restrictions/my-account-was-suspended-or-locked`,
				b = Object(i.a)(p.b),
				h = Object(i.a)(p.a);
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
								const e = f;
								window.location.href = e
							} else e(b(a.body));
					else Object(l.a)(e, s);
					else e(h(a.error))
				})())
			}, I = (e, t, n) => async (o, c, i) => {
				let {
					routes: d
				} = i;
				const u = c(),
					l = (t || u.platform.currentPage).routeMatch.match,
					p = Object(O.a)(l.url, d);
				if (!p) return;
				const f = e.metaKey || e.ctrlKey || 1 === e.button;
				if (p.route && p.route.meta && (p.route.meta.name === a.Nb.INDEX || p.route.meta.name === a.Nb.MULTIREDDIT || p.route.meta.name === a.Nb.SUBREDDIT)) f ? window.open(l.url) : n ? o(Object(r.b)(l.url)) : await o(p.route.action(l, !0));
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
				})), Object(m.P)(n) || await e(g.t())
			}, j = () => async e => e(d.m({
				title: o.b()
			})), w = e => async (t, r) => {
				const s = r();
				t(d.m({
					title: o.k()
				})), Object(m.P)(s) || await t(g.t());
				const a = Object(m.P)(s);
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
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/redditGQL/operations/GetSubredditChatSettings.json"),
				p = n("./src/lib/makeGqlRequest/index.ts");
			var f = (e, t) => Object(p.a)(e, {
					...l,
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
				O = n("./src/reddit/selectors/chat.ts"),
				E = n("./src/reddit/selectors/chatSettingsPage.ts");
			const _ = "FETCH_CHAT_SETTINGS__LOADED",
				I = "FETCH_CHAT_SETTINGS__FAILED",
				S = "FETCH_CHAT_SETTINGS__PENDING",
				j = "UPDATE_CHAT_SETTINGS__LOADED",
				w = Object(i.a)(_),
				T = Object(i.a)(I),
				D = Object(i.a)(S),
				P = Object(i.a)(j),
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
					const i = await f(s(), a);
					if (i.ok) {
						const t = i.body || {},
							r = t.data && t.data.subredditInfoById,
							s = r && r.chatSettings,
							c = !Object(O.a)(n(), a),
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
						t(T({
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
					if (await s(A(e))) return [];
					let l, p = !1;
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
						} else l = n && n.error || {
							type: c.I.UNKNOWN_ERROR
						}
					}
					return p ? (s(P({
						subredditId: e,
						chatSettings: n
					})), s(k(t, f)), n) : (l && s(T({
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
				i = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const u = "PAGE__PROFILE_MOD_SETTINGS_LOADED",
				l = Object(r.a)(u),
				p = e => async (t, n) => {
					const r = [t(s.A()), t(Object(a.d)(e.params.profileName))];
					await Promise.all(r);
					const u = Object(d.k)(n());
					u ? (await t(Object(a.b)(Object(i.e)(u))), t(l()), Object(c.p)(n(), !0)) : Object(o.a)(t, n())
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
				i = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userDataRequest.ts");
			const u = "USER_DATA_REQUEST_PAGE_LOADING",
				l = "USER_DATA_REQUEST_PAGE_LOADED",
				p = "USER_DATA_REQUEST_PAGE_FAILED",
				f = Object(r.a)(u),
				b = Object(r.a)(l),
				h = Object(r.a)(p),
				y = () => async (e, t, n) => {
					let {
						apiContext: r,
						gqlContext: u
					} = n;
					const l = t(),
						p = Object(i.k)(l),
						y = Object(d.b)(l);
					if (p && y.success) return;
					e(f());
					const g = await Object(s.a)(r());
					if (!g.ok || !g.body) return void e(h(g.error));
					if (!g.body.account) return void Object(c.a)(e, l);
					const m = await (e => Object(a.a)(e, {
						...o
					}))(u());
					if (!m.ok) return void e(h());
					const v = g.body,
						O = m.body;
					e(b({
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
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/actions/upload.ts"),
				l = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
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
			const A = Object(i.a)(D.u),
				C = Object(i.a)(D.v),
				R = Object(i.a)(D.t),
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
				U = (e, t, n, s) => async (a, c, i) => {
					let {
						apiContext: d
					} = i;
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
								const i = t.uploads[n],
									d = s || i.status === m.a.CANCELED,
									{
										file: u,
										url: l,
										metadata: p,
										error: f
									} = i,
									b = p.mimetype || u.type,
									h = b.startsWith("video/"),
									y = i.status === m.a.SUCCESS;
								let g = "";
								f ? g = JSON.stringify(f) : d && (g = "canceled");
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
										mimetype: b,
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
					return await a(Object(u.l)(e, t, async i => {
						D = !0, Object(u.k)(i.id, () => {
							C(!0)
						});
						const {
							error: h,
							metadata: m
						} = await async function(e, t, n) {
							const s = n && n.allowedPostTypes,
								a = n && n.name,
								c = await Object(g.h)(t) || t.type,
								i = Object(g.c)(t) || void 0;
							if (!i) return k("UNSUPPORTED_BROWSER");
							const d = {
								localUrl: i,
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
								const e = await Object(y.a)(i);
								d.width = e.width, d.height = e.height
							} else if (c.startsWith("video/")) {
								const c = !(null == n || !n.id) && Object(w.p)(e, {
										subredditId: n.id,
										benefit: I.a.HdVideo
									}),
									l = c ? 2 * o.fb : o.fb;
								if (t.size > l) return k(o.pc);
								let p;
								try {
									p = await Object(g.i)(i, !0)
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
								const f = c ? 2 * o.eb : o.eb;
								if (p.duration > f) {
									const e = r.fbt._("Video is too long. Maximum video length is {duration} minutes.", [r.fbt._param("duration", (f / 60).toString())], {
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
								d.height = p.height, d.width = p.width, d.videoDuration = p.duration, d.videoFirstFrameUrl = p.firstFrame.dataUrl
							}
							return {
								metadata: d
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
							O = await (async (e, t, n) => Object(p.a)(Object(f.a)(e, [b.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: o.jb.POST,
								data: {
									filepath: t,
									mimetype: n
								}
							}))(d(), v, m.mimetype);
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
					const i = e.map((e, r) => new Promise(async r => {
							const o = Object(m.d)(n, a()().slice(-6));
							await s(U(e, o, t, () => r({
								uploadKey: o,
								isValid: !0
							}))), r({
								uploadKey: o,
								isValid: !1
							})
						})),
						u = await Promise.all(i),
						l = u.map(e => e.uploadKey);
					return s(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (n, s) => {
							const {
								uploads: a
							} = s(), o = e.map(e => a[e]).filter(e => e.status === m.a.FAILED && !e.metadata.mimetype).map(e => e.error), i = o.length > t ? t - 1 : o.length, u = o.length - i;
							o.slice(0, i).forEach(e => n(Object(d.f)({
								duration: d.a,
								kind: j.b.Error,
								text: Object(c.a)(e)
							}))), u > 0 && n(Object(d.f)({
								duration: d.a,
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
						i = !c.length && 1 === e.length,
						p = Object(T.N)(a) && !i;
					let f = !1,
						b = e;
					if (p) {
						if (Object(S.x)(o)) return void n(Object(d.f)({
							kind: j.b.Error,
							text: r.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						b.some(e => Object(g.m)(e.type)) && n(Object(d.f)({
							kind: j.b.Error,
							text: r.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), b = b.filter(e => Object(g.l)(e.type));
						const e = Math.max(0, l.b - c.length);
						b.length > e && (n(Object(d.f)({
							kind: j.b.Error,
							text: r.fbt._("You have hit the limit of {images_limit} images", [r.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), b = b.slice(0, e))
					} else b = b.slice(0, 1), f = !0, n(Object(u.j)(L, !0));
					const h = await n(G(b, t, L));
					if (!h.length) return;
					const y = h.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						m = 0 === c.length;
					n(Object(P.d)({
						...o,
						items: f ? y : [...c, ...y],
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
				i = n("./src/reddit/actions/pages/subreddit.ts"),
				d = n("./src/reddit/actions/postDraft.ts"),
				u = n("./src/reddit/actions/scheduledPosts/index.ts"),
				l = n("./src/reddit/actions/urlRequested.ts"),
				p = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = n("./src/config.ts"),
				b = n("./src/lib/convertToCamelCase/index.ts"),
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
				H = Object(s.a)(k.a),
				V = Object(s.a)(k.F),
				W = e => `/r/${e}/about/${N.r}`,
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
						pending: i
					} = c.creations.api.post.submit, u = Object(P.g)(c);
					if (i || u) return;
					n(V(e)), c = s();
					const l = Object(D.a)(c),
						p = v.d.rteVideoPoster(c),
						f = $(c),
						b = l === r.Wb.MEDIA;
					f && (p || b) && (await n(L.f(f)), $(s())) || (e === j.r.Draft ? await n(Object(d.r)(t.draftId)) : e === j.r.ScheduledPost && Object(A.r)(c) ? await n(z(t)) : e === j.r.ScheduledPost ? await n(Y(t)) : await n(X(t)))
				}, z = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const o = n(),
						c = Object(D.db)(o),
						i = Object(D.eb)(o, e),
						d = Object(D.h)(o),
						p = Object(A.r)(o);
					if (!(i && d.id && c && Object(E.f)(p))) return;
					const f = d.id,
						b = Object(A.a)(o, {
							subredditId: f,
							scheduledPostId: p
						});
					if (b && Object(a.a)(Object(I.r)(b)(o)), t(U(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(D.x)(n()))) return;
					const {
						isPoll: h,
						polls: y
					} = Object(D.u)(o), v = Q(y, o), O = {
						...Object(g.e)({
							poll: h ? v : void 0,
							submission: i,
							schedule: c,
							subredditId: d.id,
							scheduledPostId: p
						})
					}, _ = await Object(m.a)(s(), O);
					if (_.ok) return t(Object(u.e)({
						subredditId: d.id
					})), void t(Object(l.a)(W(d.name), !1));
					const S = _.error;
					t(G(S))
				}, Y = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const o = n(),
						c = Object(D.db)(o),
						i = Object(D.eb)(o, e),
						d = Object(D.h)(o),
						p = Object(A.b)(o);
					if (!i || !d.id || !c) return;
					if (t(U(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(D.x)(n()))) return;
					const {
						isPoll: f,
						polls: b
					} = Object(D.u)(o), h = Q(b, o), y = {
						duration: h.duration,
						options: h.options
					}, m = {
						...Object(g.d)({
							poll: f ? y : void 0,
							submission: i,
							schedule: c,
							subredditId: d.id
						}),
						creationToken: p
					}, v = await Object(g.a)(s(), m);
					if (v.ok) {
						t(Object(u.e)({
							subredditId: d.id
						}));
						const e = v.body.data.createScheduledPost.scheduledPost;
						return e && Object(a.a)(Object(I.o)(Object(O.d)(e))(o)), void t(Object(l.a)(W(d.name), !1))
					}
					const E = v.error;
					t(G(E))
				}, X = e => async (t, n, s) => {
					let {
						apiContext: a
					} = s;
					const d = n(),
						u = Object(D.eb)(d, e),
						{
							isPoll: p,
							polls: g
						} = Object(D.u)(d),
						m = Q(g, d);
					if (!u) return;
					if (t(U(u)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(D.x)(n()))) return;
					let O;
					const E = p && v.d.spPolls(d);
					if ((O = E ? await
							function(e, t, n) {
								const s = t.destSubreddit.id;
								return Object(h.a)(e, {
									method: r.jb.POST,
									endpoint: `${f.a.metaUrl}/polls/${s}`,
									type: "json",
									data: {
										poll: n,
										subredditId: s,
										...Object(b.a)(Object(y.d)(t))
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
						const e = Object(C.k)(d),
							n = O.body;
						t(M({
							draftId: u.draftId,
							response: n
						})), E && t(Object(c.c)({
							poll: n.poll
						}));
						const r = Object(T.b)(d);
						u.kind !== j.p.LINK && u.kind !== j.p.RICH_TEXT && u.kind !== j.p.MARKDOWN || p || !r || t(Object(o.c)());
						const s = (n.path || `/user/${Object(w.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(i.subredditInvalidateListing)(u.destSubreddit.name)), t(Object(l.a)(s, !1))
					} else {
						if (p) {
							const e = O.error;
							t(F(e))
						}
						const e = O.error;
						e.type === r.I.BAD_CAPTCHA_ERROR ? t(H()) : e.type === r.I.VALIDATION_ERROR ? t(B(e)) : e.type === r.I.SUBMIT_VALIDATION_ERROR ? t(q(e)) : t(G(e))
					}
					const I = Object(x.o)(u.kind),
						S = O.ok && O.body && O.body.id && Object(R.t)(O.body.id),
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
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "g", (function() {
				return l
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
				u = "PRODUCT__BADGE_PURCHASE_PENDING",
				l = "PRODUCT__FETCH_SUCCESS",
				p = "PRODUCT__FETCH_FAILURE",
				f = "PRODUCT__FETCH_PENDING",
				b = (Object(r.a)(c), Object(r.a)(i)),
				h = Object(r.a)(d),
				y = Object(r.a)(u),
				g = (Object(r.a)(l), Object(r.a)(p), Object(r.a)(f), e => {
					let {
						productId: t
					} = e;
					return async (e, n, r) => {
						let {
							apiContext: c
						} = r;
						const i = n(),
							d = i.products.models[t],
							u = i.user.account,
							l = !!i.products.api.purchase.pending[t];
						if (d && d.price && !l) {
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
							if (n.ok && u && (r = await Object(a.c)(c(), d.subredditId, u.id)), n.ok) {
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
			var i = n("./src/lib/reCaptchaEnterprise/index.ts"),
				d = n("./src/lib/sentry/index.ts");

			function u(e) {
				return t => async (n, r, s) => {
					const a = r();
					if (e(a)) return t(n, r, s)
				}
			}
			var l = n("./node_modules/lodash/every.js"),
				p = n.n(l),
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
					experimentName: f.Re
				}),
				D = Object(r.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				P = () => u(e => p()([w, T, e => e.tracking.reCaptchaEnterprise.load === r.a.New], t => t(e)))(async e => {
					e(D.requested());
					try {
						await i.b.loadScript(), e(D.succeeded())
					} catch (t) {
						throw e(D.failed()), t
					}
				}),
				A = Object(r.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				C = e => u(e => p()([w, T, e => e.tracking.reCaptchaEnterprise.load === r.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === r.a.New], t => t(e)))(async t => {
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
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.a.PageLoad;
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
							d.c.withScope(e => {
								Object(d.a)(e, {
									serverLogging: !1
								}), d.c.captureException(a)
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
				return u
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
				u = "LIVESTREAMING_RULES_LOADED",
				l = Object(s.a)(d),
				p = Object(s.a)(u),
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
						e(l(n))
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
				return i
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "d", (function() {
				return b
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
				i = "SCHEDULED_POSTS_FAILED",
				d = "SCHEDULED_POST_CREATION_SUCCEEDED",
				u = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				l = "SCHEDULED_POST_MUTATE_REQUESTED",
				p = "SCHEDULED_POST_MUTATE_FAILED",
				f = "STANDALONE_POST_MUTATE_SUCCESS",
				b = "RECURRING_POST_MUTATE_SUCCESS",
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
				i = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				l = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				p = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				f = n("./src/reddit/models/ScheduledPost/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/routes/postCreation/index.ts"),
				y = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const g = Object(o.a)(i.n),
				m = Object(o.a)(i.b),
				v = (e, t) => async (n, r, a) => {
					const o = Object(y.a)(r(), {
						scheduledPostId: t,
						subredditId: e
					});
					o && (await n(Object(s.b)(Object(h.c)(o.subreddit.name, o.collectionId))), n((Object(f.p)(o) ? m : g)(o)))
				}, O = (e, t) => {
					Object(f.p)(t) ? e(Object(c.d)({
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
					if (m && Object(f.p)(m) && Object(a.a)(Object(p.u)()(o(), m)), !m) return void s(Object(c.f)({
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
					})), void s(Object(d.f)(Object(d.e)(i.t(), b.b.Error, i.s(), E(e, t, n))));
					s(Object(d.f)(Object(d.e)(i.w(), b.b.SuccessCommunity))), O(s, Object(l.d)(_.data.updateScheduledPost.scheduledPost))
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
				i = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				d = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				u = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				l = n("./src/reddit/models/ScheduledPost/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				b = n("./src/telemetry/index.ts");
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
						if (Object(f.h)(a(), {
								subredditId: t
							})) return;
						e(g());
						const u = {
								subredditId: t,
								includeRecurring: r,
								includeStandalone: n,
								...s
							},
							l = await Object(i.b)(c(), u);
						Object(i.f)(l, u) ? C(e, Object(d.e)(l.body.data), u) : D(e, u)
					}
				},
				A = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					const a = n();
					if (!Object(f.h)(a, {
							subredditId: e
						})) return t(P({
						subredditId: e
					}));
					if (!Object(f.g)(a, {
							subredditId: e,
							type: l.f.standalonePosts
						})) return;
					const o = Object(f.c)(a, {
						subredditId: e,
						type: l.f.standalonePosts
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
						u = await Object(i.b)(s(), c);
					u.ok ? C(t, Object(d.e)(u.body.data), c) : t(w())
				}, C = (e, t, n) => {
					Object(d.b)(t) ? e(_(t)) : Object(d.a)(t) ? e(S(t)) : Object(d.c)(t) ? e(I(t)) : D(e, n)
				}, R = (e, t) => async (n, s, a) => {
					const c = {},
						i = s();
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
					Object(b.a)(Object(u.t)(e, c[e], Object(l.p)(t))(i)), n(Object(o.a)(t.subreddit.id, t.id, c))
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
				u = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				p = n("./src/reddit/models/Search/index.ts");
			var f = (e, t) => {
				const n = {
					withAds: 1,
					ad: Object(c.a)(window.location.href).get("ad"),
					subplacement: t
				};
				return Object(i.a)(Object(d.a)(e, [u.a]), {
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
				return f
			})), n.d(t, "c", (function() {
				return b
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
				i = n("./src/redditGQL/operations/FetchSubredditStreamingModSettings.json"),
				d = n("./src/redditGQL/operations/UpdateSubredditStreamingModSettings.json"),
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts");
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
					const d = Object(l.U)(n(), {
						subredditId: e
					});
					if (void 0 === d) {
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
							n = Object(o.e)(e, u.b.Error);
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
				}, O = (e, t) => async (n, r, s) => {
					let {
						gqlContext: a
					} = s;
					await n(E(t, e, a())), n(v(t))
				}, E = (e, t, n) => async (n, s, a) => {
					let {
						gqlContext: i
					} = a;
					n(y({
						subredditId: e
					}));
					const l = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(i(), {
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
						f = Object(o.e)(p, u.b.SuccessCommunity);
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
				var i;
				const d = await Object(s.a)(o(), {
					subredditIds: [e],
					count: t
				});
				if (!d.ok) return;
				const u = d.body;
				(null === (i = u.data.subredditRecommendations.recommendations) || void 0 === i ? void 0 : i.length) && n(c({
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
				return i
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditsCarousel.json");
			const o = (e, t, n, r, o) => async (c, i, u) => {
				let {
					gqlContext: l
				} = u;
				var f, b;
				if (i().subreddits.carousel.pending) return;
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
				y.data && y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"] && c(d(null === (f = y.data[t ? "subredditsInfoByNames" : "subredditsInfoByIds"]) || void 0 === f ? void 0 : f.reduce((e, n) => ((null == n ? void 0 : n.id) && (e[t ? n.name.toLowerCase() : n.id] = n), e), {}))), (null === (b = y.data) || void 0 === b ? void 0 : b.postsInfoByIds) && c(p(y.data.postsInfoByIds.reduce((e, t) => ((null == t ? void 0 : t.id) && (e[null == t ? void 0 : t.id] = t), e), {})))
			}, c = "SUBREDDITS_CAROUSEL__LOADED", i = "SUBREDDITS_CAROUSEL__PENDING", d = Object(r.a)(c), u = (Object(r.a)(i), "POST_CAROUSEL__LOADED"), l = "POST_CAROUSEL__PENDING", p = Object(r.a)(u);
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
				i = n("./src/reddit/actions/postCreation/submit.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/ModWelcomeTooltip/index.tsx"),
				l = n("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				p = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/constants/modals.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
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
					const k = await ((e, t) => Object(b.a)(Object(h.a)(e, [y.a]), {
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
						const b = await Object(I.b)(A);
						if (N) {
							const e = Object(j.G)(A, {
								postId: N
							});
							t(Object(o.h)(e.title)), t(Object(o.g)({
								submissionType: s.Wb.CROSSPOST
							})), await t(Object(i.b)({
								destSubreddit: {
									...n,
									isProfile: !1
								},
								sourcePostId: N,
								postFieldValidationPending: Promise.resolve()
							})), Object(l.b)(N)
						}
						await t(Object(r.b)(`${n.path}`)), b ? b === p.te.NewModule && t(Object(d.h)({
							tooltipId: u.MOD_WELCOME_TOOLTIP_ID
						})) : (t(Object(c.h)(f.a.POST_FLOW_UPSELL_MODAL_ID)), Object(D.a)(Object(_.g)()(A))), Object(E.b)(E.a.SubredditCreation), t(Object(P.f)(a, null !== (O = Object(T.ab)(A)) && void 0 !== O ? O : Object(S.i)(A)))
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
					let i = null;
					if (c.ok) {
						i = c.body.data.validateCreateSubredditInput.fieldErrors
					}
					if (i) {
						const n = {
							fields: [{
								field: i[0].field,
								msg: i[0].message
							}],
							type: i[0].code
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
				i = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/selectors/subreddit.ts");
			const u = "SUBREDDIT_CROSSPOSTABLE__PENDING",
				l = "SUBREDDIT_CROSSPOSTABLE__LOADED",
				p = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				f = (Object(r.a)(u), Object(r.a)(l)),
				b = Object(r.a)(p),
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
					const p = await ((e, t) => Object(o.a)(Object(c.a)(e, [i.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: a.jb.GET
					}))(r(), {
						sr_detail: !1
					});
					if (p.ok) {
						const n = t(),
							r = p.body && p.body.length ? p.body.map(e => Object(d.F)(n, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
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
				return u
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
				u = "SUBREDDIT_TOP_CONTENT__FAILED",
				l = Object(r.a)(i),
				p = Object(r.a)(d),
				f = Object(r.a)(u),
				b = e => async (t, n, r) => {
					const i = e.toLowerCase(),
						d = n(),
						{
							api: u,
							topContent: b
						} = d.subreddits;
					if (u.topContent.pending[i] || b[i]) return;
					t(l({
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
		"./src/reddit/actions/upload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "g", (function() {
				return b
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
				i = n("./src/lib/uploadToS3/index.ts"),
				d = n("./src/reddit/models/Upload/index.ts");
			const u = "UPLOAD_PENDING",
				l = "UPLOAD_UPLOADING",
				p = "UPLOAD_METADATA_CHANGED",
				f = "UPLOAD_PROGRESS",
				b = "UPLOAD_SUCCESS",
				h = "UPLOAD_FAILED",
				y = "UPLOAD_CANCELED",
				g = "UPLOAD_REMOVED",
				m = Object(c.a)(u),
				v = Object(c.a)(l),
				O = Object(c.a)(p),
				E = Object(c.a)(f),
				_ = Object(c.a)(b),
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
						if (c().uploads[p] && Object(d.c)(c().uploads[p])) return;
						const f = o()(),
							b = () => {
								const e = c().uploads[p];
								return !e || e.id !== f || e.status === d.a.CANCELED
							};
						a(m({
							key: p,
							id: f,
							file: e
						}));
						const {
							uploadLease: h,
							error: y
						} = await n(c().uploads[p]);
						if (b()) return;
						if (y || !h) return void a(I({
							key: p,
							error: y
						}));
						let g;
						T(f, () => {
							g && g.abort()
						}), a(v({
							key: p
						}));
						const O = await Object(i.a)(e, h, e => (g = e, r && e.on("progress", e => {
							if (!b() && "upload" === e.direction) {
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
						if (g = null, !b())
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
			const u = "upvote_prompt";
			var l = n("./src/reddit/selectors/upvotePrompt.ts"),
				p = n("./src/telemetry/index.ts");
			const f = "INCREMENT_SEEN_COUNT_PER_SESS",
				b = (e, t, n) => async (a, o) => {
					const f = o(),
						b = Object(i.z)(),
						m = Date.now(),
						v = b && m - b < 18e4,
						O = Object(l.c)(f, {
							postId: e
						}),
						E = f.upvotePromptCountPerSess,
						_ = (() => {
							const e = Object(i.y)();
							if (!e) return [];
							const t = Date.now();
							return e.filter(e => t - e < 864e5)
						})();
					if (!e || !O || v || E >= 4 || _.length >= 1) return;
					const I = y(f, t);
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
							...Object(d.n)(e)
						}))(f))
					}));
					const S = [..._, Date.now()].slice(Math.max(_.length + 1 - 1, 0));
					Object(p.a)((e => ({
						source: u,
						action: "view",
						noun: u,
						...Object(d.n)(e)
					}))(f)), Object(i.Cb)(), Object(i.Bb)(S), a(g()), n && n()
				}, h = e => async (t, n) => {
					Object(p.a)((e => ({
						source: u,
						action: "click",
						noun: "upvote",
						...Object(d.n)(e)
					}))(n())), Object(l.c)(n(), {
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
				return p
			})), n.d(t, "d", (function() {
				return f
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
				i = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				u = n("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				p = "USER_BLOCK__LOADED",
				f = "USER_BLOCK__FAILED",
				b = Object(s.a)(l),
				h = Object(s.a)(p),
				y = Object(s.a)(f),
				g = e => async (t, n, s) => {
					let {
						apiContext: u
					} = s;
					const l = n();
					if (l.blockUser.api.pending[e]) return;
					t(b({
						username: e
					}));
					const p = await Object(c.a)(u(), e),
						f = `error-block-${e}`;
					if (p.ok) p.body.name && t(h(p.body)), p.body.id && t(Object(a.f)(p.body.id)), t(o.g(f)), t(o.f({
						kind: i.b.SuccessCommunity,
						text: r.fbt._("{username} is now blocked", [r.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
								type: p.error ? p.error.type : "Unknown error",
								username: e
							},
							s = Object(d.e)(l) && "REBLOCK_RATE_LIMIT" === p.body.reason;
						t(y(n)), t(s ? o.f({
							id: f,
							kind: i.b.Error,
							text: r.fbt._("You can't block u/{username} for 24 hours after unblocking them", [r.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: g(e)
						}) : o.f({
							id: f,
							kind: i.b.Error,
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
						apiContext: d
					} = s;
					const l = n(),
						p = Object(u.k)(l),
						f = p ? p.id : void 0,
						b = l.user.blocked.data.filter(t => t.name === e)[0];
					f && (t(E({
						name: e
					})), (await Object(c.c)(d(), f, e)).ok ? (t(_({
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
					})), t(I({
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
				return u
			})), n.d(t, "g", (function() {
				return b
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
			const i = "USER_WHITELIST__PENDING",
				d = "USER_WHITELIST__SUCCESS",
				u = "USER_WHITELIST__FAILED",
				l = Object(s.a)(i),
				p = Object(s.a)(d),
				f = Object(s.a)(u),
				b = e => async (t, n, s) => {
					let {
						apiContext: i
					} = s;
					t(l());
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
				}, h = "USER_UNWHITELIST__PENDING", y = "USER_UNWHITELIST__SUCCESS", g = "USER_UNWHITELIST__FAILED", m = Object(s.a)(h), v = Object(s.a)(y), O = Object(s.a)(g), E = e => async (t, n, s) => {
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
				u = Object(s.a)(o),
				l = Object(s.a)(c),
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
							n.ok ? n.body ? e(u({
								username: t
							})) : e(f({
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
				i = n.n(c);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: n,
					crosspost: r,
					forceShowNSFW: c,
					isMeta: d,
					post: u,
					redditStyle: l,
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
					post: u,
					redditStyle: l,
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
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				b = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/selectors/platform.ts"),
				y = n("./src/reddit/components/ModWelcomeTooltip/index.m.less"),
				g = n.n(y);
			const m = Object(u.a)(p.a),
				v = "ModProgressModule--ModWelcomeTooltip";
			t.default = Object(i.a)(e => {
				const t = Object(o.e)(h.d),
					n = v,
					i = Object(o.d)(),
					u = e => {
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
						color: Object(b.a)(e).linkText
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
					const r = Object(s.q)(e.getDay()),
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
				mNightmode: "TiWmxUzfBQADxToVGHQeM"
			}
		},
		"./src/reddit/components/SearchDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return ne
			})), n.d(t, "a", (function() {
				return re
			})), n.d(t, "d", (function() {
				return se
			})), n.d(t, "c", (function() {
				return oe
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = e => e.endsWith("/") ? e : `${e}/`,
				l = n("./src/lib/makeSearchKey/index.ts"),
				p = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				f = n.n(p),
				b = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
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
			const w = Object(o.a)(b.b);

			function T(e) {
				let {
					activeTooltipId: t,
					className: n,
					focusedItem: o,
					nightmode: p,
					recentSearch: b,
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
					U = Object(a.e)(O.jb);
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: b.searchQuery,
						rawQuery: b.rawQuery || b.searchQuery,
						searchQuery: b.searchQuery,
						structureType: I.c.Recent
					};
					k(Object(E.w)(E.a.RECENT, e, T, b))
				}, []);
				const M = e => e.subredditOrProfileRestrictedName ? `${e.subredditOrProfileRestrictedName} ${e.searchQuery}` : e.searchQuery,
					{
						url: G,
						qs: F
					} = Object(g.a)({
						includeNsfwResults: U && x,
						multireddit: null,
						searchItem: b,
						searchOptions: {
							source: l.a.Recent
						},
						subreddit: null
					}),
					B = M(b);
				let q;
				o && (q = M(o));
				return s.a.createElement(d.a, {
					"aria-label": b.searchQuery,
					className: Object(c.a)(j.a.listItem, f.a.item, n, {
						[j.a.mFocused]: !(!o || o.section !== v.c.recent || q !== B)
					}),
					onClick: () => {
						b.isTypeaheadSuggestion ? P() : C(b.searchQuery), R(b.searchQuery, b, T), N(), L()
					},
					key: B,
					role: "link",
					tabIndex: -1,
					to: {
						pathname: G && u(G) || "",
						search: F,
						state: Object(y.c)(y.a.SEARCH_DROPDOWN, S, b.isProfile || b.isSubreddit)
					}
				}, b.displayInfo && b.isTypeaheadSuggestion ? b.displayInfo.iconUrl ? s.a.createElement("div", {
					className: j.a.subredditIcon,
					style: {
						backgroundImage: `url('${b.displayInfo.iconUrl}')`
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
					className: f.a.text
				}, B), s.a.createElement("div", {
					onMouseEnter: () => D(B),
					onMouseLeave: () => D(null),
					id: B
				}, s.a.createElement(m.a, {
					name: "clear",
					onMouseUp: e => {
						e.stopPropagation(), e.preventDefault(), A(b)
					}
				}), s.a.createElement(w, {
					className: j.a.fixedTextTooltip,
					isOpen: t === B,
					text: i.fbt._("Remove", null, {
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
					onUpdateSearchQuery: b,
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
					T = s.a.createElement(d.a, {
						id: r,
						"aria-label": o.searchQuery,
						className: Object(c.a)(j.a.listItem, j.a.mTrending, f.a.item, f.a.trending, t, {
							[j.a.mFocused]: !(!n || n.section !== v.c.trending || o.searchQuery !== n.searchQuery)
						}),
						onClick: () => {
							b(o.searchQuery);
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
						className: f.a.trendingContent
					}, I && s.a.createElement("div", {
						className: f.a.promoted
					}, i.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), s.a.createElement("div", null, s.a.createElement(m.a, {
						name: "popular",
						className: j.a.trendingIcon
					}), s.a.createElement("span", null, s.a.createElement(P.a, {
						className: Object(c.a)(j.a.listItemText, j.a.mTrending, f.a.text, f.a.trending),
						redditStyle: !0,
						size: P.b.Small
					}, o.searchQuery)), o.post && s.a.createElement("div", {
						className: j.a.postTitle
					}, o.post.title)), o.subredditInfo && s.a.createElement(R.a, {
						className: Object(c.a)(f.a.relatedSubredditMetaData, j.a.listItemSubtext, {
							[j.a.mNoPostTitle]: !o.post
						}),
						iconUrl: o.subredditInfo.icon || void 0,
						suffix: i.fbt._("{subreddit name} and more", [i.fbt._param("subreddit name", o.subredditInfo.displayText)], {
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
					subredditSuggestions: b,
					onSendSearchClickTypeaheadEvent: h,
					onSetRecentSearch: g,
					onClearSearchQuery: v,
					onCloseDropdown: O
				} = e;
				const S = Object(_.a)(),
					w = !a.isProfile || a.enableFollowers;
				Object(r.useEffect)(() => {
					const e = {
						displayQuery: a.searchQuery,
						rawQuery: a.rawQuery || a.searchQuery,
						searchQuery: a.searchQuery,
						structureType: I.c.Search
					};
					S(Object(E.w)(E.a.TYPEAHEAD, e, o, a))
				}, []);
				return s.a.createElement(d.a, {
					"aria-label": a.searchQuery,
					className: Object(c.a)(j.a.listItem, j.a.mTypeahead, f.a.item, t, {
						[j.a.mFocused]: !(!n || n.searchQuery !== a.searchQuery)
					}),
					onClick: () => {
						g(a), h(a.searchQuery, a, o, b), v(!1), O(!1)
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
					className: Object(c.a)(j.a.listItemText, j.a.mTypeahead, f.a.text)
				}, a.displayInfo.subredditOrProfileName), s.a.createElement("div", null, a.displayInfo && null != a.displayInfo.subscribers && w && s.a.createElement("div", {
					className: Object(c.a)(j.a.listItemSubtext, f.a.subText)
				}, i.fbt._({
					"*": "{members count} members",
					_1: "1 member"
				}, [i.fbt._plural(a.displayInfo.subscribers, "members count")], {
					hk: "1uMCes"
				})), a.displayInfo && a.displayInfo.isNSFW && s.a.createElement(M.b, {
					flair: {
						type: G.f.Nsfw,
						text: i.fbt._("nsfw", null, {
							hk: "2nrY5X"
						})
					}
				}))))
			}
			var B = n("./src/reddit/constants/zIndex.ts"),
				q = n("./src/reddit/controls/Dropdown/index.tsx"),
				H = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				V = n.n(H),
				W = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Q = n.n(W),
				$ = n("./node_modules/lodash/pick.js"),
				K = n.n($),
				z = n("./src/reddit/constants/history.ts"),
				Y = n("./src/reddit/constants/parameters.ts"),
				X = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				J = n("./src/reddit/hooks/usePageLayer.ts"),
				Z = n("./src/reddit/selectors/experiments/serpTabPreserved.ts");

			function ee(e) {
				let {
					searchOriginPage: t,
					searchItem: n,
					position: o,
					onTriggerSearch: u
				} = e;
				var p;
				const b = (null === (p = n.searchQuery) || void 0 === p ? void 0 : p.trim()) || "",
					y = Object(_.a)(),
					v = Object(J.a)(),
					S = Object(X.Y)(v),
					w = Object(a.e)(e => Object(X.cb)(e, {
						pageLayer: v
					})),
					T = Object(a.e)(e => Object(X.t)(e, {
						pageLayer: v
					})),
					D = Object(a.e)(e => Object(X.e)(e, {
						pageLayer: v
					})),
					P = Object(a.e)(e => Object(Z.a)(e)),
					A = Object(a.e)(O.jb),
					{
						nsfwSessionSetting: C
					} = Object(h.b)(),
					R = Object(l.e)({
						...K()(S || {}, Y.v),
						q: n.searchQuery,
						restrict_sr: w ? "1" : ""
					}),
					{
						url: N,
						qs: k
					} = Object(g.a)({
						subreddit: T,
						multireddit: D,
						searchItem: n,
						...P ? {
							searchOptions: R
						} : {},
						shouldSearchSubreddit: w,
						includeNsfwResults: A && C
					}),
					L = {
						...R,
						id: (null == T ? void 0 : T.id) || "",
						eventType: Boolean(w) ? "subreddit" : void 0
					};
				return Object(r.useEffect)(() => {
					y(Object(E.s)(L, w, o, v || void 0))
				}, []), s.a.createElement(d.a, {
					onClick: function(e) {
						y(Object(E.o)(I.a.FullSearchButton, R, w, x.a.Typeahead, v || void 0)), u(e)
					},
					to: {
						pathname: N,
						state: {
							[z.b.SearchOriginPage]: t
						},
						search: k
					},
					className: Object(c.a)(j.a.listItem, f.a.item),
					"data-testid": "search-trigger-item"
				}, s.a.createElement(m.a, {
					name: "search"
				}), s.a.createElement("span", {
					className: f.a.text
				}, i.fbt._("Search for “", null, {
					hk: "28KVrM"
				}), i.fbt._("{search query}", [i.fbt._param("search query", b)], {
					hk: "4vP3YT"
				}), "”"))
			}
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = "SearchDropdown", re = "SearchDropdownContent", se = 5, ae = Object(o.a)(q.a);

			function oe(e) {
				let {
					container: t,
					trendingItems: n,
					isTrendingPending: o,
					isOpen: i,
					isTypeaheadPending: d,
					itemList: u,
					recentSearches: l,
					typeaheadSuggestions: p,
					focusedItemIndex: b,
					nightmode: h,
					searchItem: y,
					searchOriginPage: g,
					isFixed: m = !0,
					isOverlay: v = !0,
					fireAdPixelsOfType: O,
					onClearSearchQuery: E,
					onClose: _,
					onRemoveRecentSearch: I,
					onSendSearchClickRecentEvent: S,
					onSendSearchClickTypeaheadEvent: w,
					onSetRecentSearch: D,
					onUpdateSearchQuery: P
				} = e;
				var A;
				const C = Object(a.d)(),
					[R, N] = Object(r.useState)(null),
					k = function(e) {
						const [t, n] = Object(r.useState)(null), s = Object(r.useCallback)(() => {
							e && n(e.offsetWidth)
						}, [e]);
						return Object(r.useLayoutEffect)(s, [s]), Object(r.useEffect)(() => (window.addEventListener("resize", s), () => window.removeEventListener("resize", s)), [s]), t
					}(t),
					[M, G] = Object(r.useState)(new Array(se).fill(!1)),
					q = !!(null === (A = y.searchQuery) || void 0 === A ? void 0 : A.trim()),
					H = d || o,
					W = 0 === p.length && !d && (!q || b >= 0),
					$ = Object(r.useMemo)(() => p.filter(e => e.isSubreddit), [p]),
					K = {
						width: k ? `${k}px` : "inherit",
						marginTop: "7px",
						overflow: "auto"
					};
				m && (K.zIndex = B.g), Object(r.useLayoutEffect)(() => {
					if (!o && i && document.getElementById(re)) {
						const e = z();
						G(e), n.forEach((t, n) => {
							e[n] && C((e, n) => Object(L.v)({
								state: n(),
								trendingSearch: t,
								telemetrySource: x.a.Typeahead
							}))
						})
					}
				}, [o, i, C]);
				const z = () => {
					const e = new Array(n.length).fill(!1);
					return n.forEach((t, n) => {
						if (t.id) {
							const r = document.getElementById(`${ne}-${t.id}`),
								s = document.getElementById(re);
							if (r && s) {
								const t = r.getBoundingClientRect(),
									a = s.getBoundingClientRect();
								t.top < a.bottom && t.bottom > a.top && (e[n] = !0)
							}
						}
					}), e
				};
				return s.a.createElement(ae, {
					className: Object(c.a)(j.a.dropdown, V.a.listContainer),
					id: re,
					isFixed: m,
					isOpen: i,
					isOverlay: v,
					tooltipId: ne,
					noFocus: !0,
					style: K,
					onDropdownMounted: () => {
						if (!o && n.length > 0) {
							const e = z();
							G(e), n.forEach((t, n) => {
								e[n] && C((e, n) => Object(L.v)({
									state: n(),
									trendingSearch: t,
									telemetrySource: x.a.Typeahead,
									offset: l.length
								}))
							})
						}
					},
					onScroll: () => {
						const e = z();
						n.forEach((t, n) => {
							M[n] || !e[n] || t.post && t.post.isSponsored || C((e, n) => Object(L.v)({
								state: n(),
								trendingSearch: t,
								telemetrySource: x.a.Typeahead,
								offset: l.length
							}))
						}), G(e)
					}
				}, W && s.a.createElement(s.a.Fragment, null, l.map((e, t) => s.a.createElement(T, {
					searchOriginPage: g,
					activeTooltipId: R,
					focusedItem: u[b],
					indexOfItem: t,
					key: e.id,
					onClearSearchQuery: E,
					onRemoveRecentSearch: I,
					onSendSearchClickRecentEvent: S,
					onSetRecentSearch: D,
					onUpdateSearchQuery: P,
					recentSearch: e,
					toggleTooltip: N,
					nightmode: h,
					onCloseDropdown: _
				})), !o && n.length && s.a.createElement("div", {
					className: Object(c.a)(f.a.title, j.a.listItemTitle, {
						[j.a.mWithBorder]: !!l.length
					})
				}, te._("Trending today", null, {
					hk: "3nAMpY"
				})), n.map(e => s.a.createElement(U, {
					id: `${ne}-${e.id}`,
					key: e.id,
					focusedItem: u[b],
					searchOriginPage: g,
					fireAdPixelsOfType: O,
					onCloseDropdown: _,
					onSetRecentSearch: D,
					onUpdateSearchQuery: P,
					trendingItem: e
				}))), H && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(c.a)(j.a.loadingItem, Q.a.item)
				}), s.a.createElement("div", {
					className: Object(c.a)(j.a.loadingItem, Q.a.item)
				}), s.a.createElement("div", {
					className: Object(c.a)(j.a.loadingItem, Q.a.item)
				}), s.a.createElement("div", {
					className: Object(c.a)(j.a.loadingItem, Q.a.item)
				}), s.a.createElement("div", {
					className: Object(c.a)(j.a.loadingItem, Q.a.item)
				})), q && !d && s.a.createElement(s.a.Fragment, null, p.map((e, t) => s.a.createElement(F, {
					focusedItem: p[b],
					indexOfItem: t,
					subredditSuggestions: $,
					item: e,
					key: e.id,
					onClearSearchQuery: E,
					onSendSearchClickTypeaheadEvent: w,
					onSetRecentSearch: D,
					nightmode: h,
					onCloseDropdown: _,
					searchOriginPage: g
				})), s.a.createElement(ee, {
					key: y.searchQuery,
					searchOriginPage: g,
					searchItem: y,
					position: p.length,
					onTriggerSearch: _
				})))
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
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/constants/comments.ts"),
				u = n("./src/reddit/models/Subreddit/index.ts"),
				l = n("./src/reddit/selectors/comments.ts"),
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
					const n = Object(f.k)(e),
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
							return n.type !== d.a.Comment && 0 !== (null === (r = a[n.id]) || void 0 === r ? void 0 : r.depth) || t.push(s), t
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
					if (!Object(f.P)(e)) return !1;
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
				j = () => Object(b.c)({
					shouldLoadCTA: S
				}),
				w = Object(i.b)(j),
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
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
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
				u = n("./src/redditGQL/operations/CreateChatChannelInviteLink.json"),
				l = n("./src/redditGQL/types.ts");
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
				return i
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return b
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

			function i(e) {
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

			function d(e) {
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
			const f = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				b = e => ({
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
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/helpers/name/index.ts"),
				l = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				p = n("./src/reddit/models/Poll/index.ts"),
				f = n("./src/reddit/models/Post/index.ts"),
				b = n("./src/reddit/models/PostCreationForm/index.ts"),
				h = n("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function y(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const g = e => {
					switch (e.kind) {
						case b.p.CROSSPOST:
							return b.p.CROSSPOST;
						case b.p.LINK:
							return b.p.LINK;
						case b.p.POLL:
							return b.p.POLL;
						case b.p.MEDIA:
							return e.makeGif ? b.p.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				m = e => {
					switch (e.kind) {
						case b.p.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case b.p.MARKDOWN:
							return {
								text: e.markdown
							};
						case b.p.LINK:
						case b.p.MEDIA:
							return {
								url: e.url
							};
						case b.p.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case b.p.POLL:
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
					const t = Object(u.g)(e.destSubreddit.name);
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
						discussion_type: e.isChatPost ? f.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== b.p.POLL ? {
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
						...e.kind === b.p.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === b.p.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(d.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === b.j.AtEventTime
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
					s || t.kind !== b.p.MEDIA || (s = await ((e, t) => new Promise(n => {
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
					endpoint: Object(h.a)(Object(i.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
					method: s.jb.POST,
					data: v(t),
					type: "json"
				}).then(e => E(e, t)), I = (e, t) => Object(a.a)(Object(o.a)(e, [c.a]), {
					endpoint: Object(h.a)(Object(i.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
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
				endpoint: Object(h.a)(Object(i.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: s.jb.POST,
				data: v(t)
			}).then(async e => await E(e, t))
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "d", (function() {
				return b
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
				i = n("./src/reddit/models/ScheduledPost/index.ts"),
				d = n("./src/redditGQL/operations/CreateScheduledPost.json"),
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
				f = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => p(e, i.f.standalonePosts))(e)) && !(t.includeRecurring && !(e => p(e, i.f.recurringPosts))(e))),
				b = e => {
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
					const o = b({
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
					...d,
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
					searchItem: i,
					searchOptions: d,
					shouldSearchSubreddit: u,
					includeNsfwResults: l
				} = e;
				const p = [];
				if (i.isTypeaheadSuggestion) t = `/${i.isProfile?i.searchQuery.replace("u/","user/"):i.searchQuery}`;
				else {
					if (p.push(`${a.r}=${Object(s.b)(i.rawQuery||i.searchQuery)}`), t = "/search/", i.section !== o.c.trending && i.section !== o.c.recent || d && d.source && p.push(`source=${d.source}`), n && u ? (t = `/r/${n.name}${t}`, p.push(`${a.u}=1`), p.push(`${a.C}=${n.isNSFW?"1":""}`)) : !n && i.subredditOrProfileRestrictedName && (t = `/${i.subredditOrProfileRestrictedName}${t}`, p.push(`${a.u}=1`)), c) {
						t = `/user/${c.url.split("/")[2]}/m/${c.name}${t}`, p.push(`${a.u}=1`), p.push(`${a.C}=${c.isNSFW?"1":""}`), p.push(`${a.l}=1`)
					}
					d && d.category && p.push(`${a.c}=${d.category}`), l && p.push(`${a.k}=1`), (null == d ? void 0 : d.t) && d.t !== r.ic.ALL && p.push(`${a.E}=${d.t}`), (null == d ? void 0 : d.sort) && p.push(`${a.z}=${d.sort}`), (null == d ? void 0 : d.type) && (d.type.includes(r.cc.Posts) || p.push(`${a.F}=${d.type[0]}`))
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
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "d", (function() {
				return h
			}));
			const r = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: f(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
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
				i = e => o(e) && c(e),
				d = e => !o(e) && c(e),
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
				f = e => e.map(e => b(e.node)),
				b = e => ({
					...p(e),
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				h = e => (e => !!e.frequency && !!e.interval)(e) ? b(e) : p(e)
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
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
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

			function u() {
				return i(o, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function l() {
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
				u = new RegExp("^/desktopapi/v1/(subreddits|postcomments|collection_postcomments)/?$"),
				l = (new RegExp("^/desktopapi/v1/(postcomments)(/+|$)"), new RegExp("^/desktopapi/v1/frontpage/?$")),
				p = new RegExp("^/desktopapi/v1/submitpage(/|$)");
			var f = (e, t, n) => {
					const r = new Set;
					e.user.session && !e.user.session.unsafeLoggedOut && (e.user.account || (r.add("identity"), r.add("prefs"), r.add("prefsAccount")), (e => !i.test(e.pathname || ""))(t) && r.add("identity")), !e.live.isFrontpageLoaded && (e => l.test(e.pathname || ""))(t) && r.add("featuredLiveThread");
					const s = t.pathname || "";
					if (d.test(s) || u.test(s)) {
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
							d = Object(c.F)(e, i);
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
					Object(b.jb)(s) && (r.allow_over18 = 1), Object(b.o)(s) && (r.gated_optin = 1), Object(b.mb)(s) && (r.quarantine_optin = 1), r.include = f(e.getState(), n, t), t.endpoint = Object(o.a)(t.endpoint, r)
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
				return f
			})), n.d(t, "c", (function() {
				return b
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
				i = n("./src/reddit/models/ScheduledPost/index.ts");
			const d = e => {
					return `${e.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				u = (e, t) => {
					if (e && t) {
						const n = Object(a.f)(p(e, t)),
							s = d(n);
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
				f = e => {
					const [t, n] = e.split("T");
					return [t, l(n)]
				},
				b = e => {
					const [t, n] = f(e);
					if (t && n) {
						const e = Object(a.f)(p(t, n));
						return d(e)
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
						const [t, n] = f(e);
						if (t && n) {
							return Object(a.f)(p(t, n)).toLocaleTimeString(void 0, {
								hour: "numeric",
								minute: "numeric"
							})
						}
						return ""
					})(e.publishAt);
					if (e.frequency === i.d.Hourly) return 2 === e.interval ? r.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? r.fbt._("Every {hour interval} hours", [r.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : r.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === i.d.Daily) return 2 === e.interval ? r.fbt._("Every other day at {start time}", [r.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? r.fbt._("Every {day interval} days at {start time}", [r.fbt._param("day interval", e.interval.toString()), r.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : r.fbt._("Every day at {start time}", [r.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === i.d.Weekly) {
						const n = (e => Object(s.c)(e.map(i.k).sort((e, t) => e - t).map(g), s.a.AND, s.b.COMMA))(e.byWeekDays);
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
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = i.b);
					const n = Object(a.f)(e.publishAt),
						r = Object(i.q)(n.getDay()),
						s = n.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== r && (t = i.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== s && (t = i.b), {
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
				i = Object(r.c)({
					error: a,
					loaded: o,
					pending: c
				});
			const d = {};
			var u = function() {
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
					error: u,
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
								r[Object(j.g)(e.name)] = e.id
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
				i = n("./src/reddit/actions/governance/constants.ts");
			const d = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function l(e) {
				var t, n, r, s, a;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					c = null == o ? void 0 : o.contracts,
					i = null == c ? void 0 : c.unlocked,
					d = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					l = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					p = (null == i ? void 0 : i.decimals) || 0,
					f = "1" + "0".repeat(p);
				return {
					blockchainProvider: d,
					contractAddress: (null == i ? void 0 : i.address) || "",
					contracts: c,
					decimals: p,
					displayConversion: f,
					images: e.images || u,
					inTransition: l,
					name: e.name,
					nomenclature: null === (a = e.extra) || void 0 === a ? void 0 : a.nomenclature,
					polls: e.polls,
					symbol: (null == i ? void 0 : i.token) || ""
				}
			}
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
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
			const f = {};
			var b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.n: {
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
				publicWallets: b
			})
		},
		"./src/reddit/reducers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Zj
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
				u = n("./src/reddit/actions/platform.ts"),
				l = n("./src/reddit/actions/product.ts"),
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
						case u.b:
						case p.f:
							return t.type === u.b && (null == e ? void 0 : e.id) === b.a.POST_FLOW_UPSELL_MODAL_ID ? e : null;
						case f.e:
							return (null == e ? void 0 : e.id) === b.a.BLADE_UNSAVED_CHANGES ? null : e;
						case f.d:
							return (null == e ? void 0 : e.id) === b.a.BLADE_NIGHTMODE ? null : e;
						case o.a:
							return (null == e ? void 0 : e.id) === b.a.USER_FLAIR_MODAL_ID ? null : {
								id: b.a.USER_FLAIR_MODAL_ID
							};
						case l.b:
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
				H = n("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				V = n("./src/reddit/actions/pages/search/index.ts"),
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
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case V.c: {
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
					i = Object(z.e)(n),
					d = c.applied,
					u = c.displaySettings && c.displaySettings.isUserEnabled;
				return i && d && u ? Object(N.merge)(a, {
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
			const ie = {};
			var de = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
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
					pending: de
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
			const fe = {};
			var be = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe,
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
					order: be
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
					case V.c:
					case B.b:
					case B.e:
					case Q.b:
					case Q.e:
					case Pe.b:
					case Pe.e:
					case Ae.b:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case H.c:
					case H.e:
					case H.i:
					case H.g:
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
				He = Object(S.c)({
					api: Fe,
					order: qe
				});
			const Ve = {};
			var We = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ve,
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
					sortedUsable: He,
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
				it = Object(S.c)({
					api: at,
					models: ct
				}),
				dt = n("./src/reddit/actions/blockedRedditors.ts");
			const ut = {
				message: ""
			};
			var lt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var pt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				ft = Object(S.c)({
					error: lt,
					pending: pt
				});
			const bt = {
				ids: []
			};
			var ht = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dt.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case dt.e:
							const n = e.ids.slice();
							return n.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: n
							};
						case dt.c:
							return {
								ids: [...e.ids, ...t.payload], timestamp: Date.now()
							};
						default:
							return e
					}
				},
				yt = Object(S.c)({
					api: ft,
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
				REQUEST_PENDING: Ht,
				REQUEST_SUCCESS: Vt
			} = Ut;
			Object(Ce.a)(Bt), Object(Ce.a)(qt), Object(Ce.a)(Ht), Object(Ce.a)(Vt);
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
				fn = Object(S.c)({
					error: un,
					pending: pn
				}),
				bn = Object(S.c)({
					fetch: fn
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
					api: bn,
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
			var Hn = function() {
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
			var Vn = function() {
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
					error: Hn,
					pending: Vn
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
			var ir = function() {
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
			const dr = {};
			var ur = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dr,
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
					fetched: ir,
					pending: ur
				}),
				pr = n("./src/reddit/actions/scheduledPosts/constants.ts");
			const fr = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var br = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fr,
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
						return fr;
					case Xn.h: {
						const {
							isContentChanged: n
						} = t.payload;
						return n ? fr : e
					}
					case Xn.o: {
						const e = t.payload;
						return {
							...fr,
							apiError: e
						}
					}
					case Xn.cb: {
						const e = t.payload;
						return {
							...fr,
							validationError: e
						}
					}
					case Xn.K:
					case Xn.J: {
						const e = t.payload;
						return {
							...fr,
							submitValidationError: e
						}
					}
					case Xn.a:
						return {
							...fr, needsCaptcha: !0
						};
					case Xn.y:
						return {
							...fr, pollError: t.payload
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
					error: br,
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
				Hr = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Vr = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
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
								n = Object(Hr.c)(e.mediaAssets);
							return qr.a.createInitial(e.contentType === Ur.a.RTJSON ? Object(Vr.b)(e.body) : void 0, n || void 0)
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
					case i.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case u.b:
					case Xn.i:
					case Xn.q:
					case Xn.E:
					case i.h:
						return "";
					default:
						return e
				}
			};
			var cs = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case u.b:
					case Xn.i:
					case Xn.q:
					case Xn.E:
					case i.h:
						return "";
					default:
						return e
				}
			};
			var is = function() {
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
				ds = n("./src/reddit/actions/polls.ts");
			var us = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ds.a:
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
						case i.h:
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
			var fs = function() {
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
							if (o && Object(Ur.m)(o)) {
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
			var bs = function() {
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
							type: i = ""
						} = n, d = r && !a && !c;
						return o ? Re.Wb.MEDIA : void 0 !== s || d ? Re.Wb.LINK_ONLY : a || c ? Re.Wb.POST : i === Re.xb ? Re.Wb.POLL : e
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
					case i.c: {
						const {
							username: e
						} = t.payload;
						return Ss(e)
					}
					case i.b: {
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
					nextSubreddit: is,
					polls: us,
					postSchedule: fs,
					postToTwitter: bs,
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
			var Hs = function() {
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
				Vs = Object(S.c)({
					draft: qs,
					postId: Hs
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
					postEditing: Vs,
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
				ia = Object(S.c)({
					list: ca
				}),
				da = n("./node_modules/lodash/isEmpty.js"),
				ua = n.n(da);
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
				fa = n("./node_modules/lodash/forOwn.js"),
				ba = n.n(fa),
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
							return ba()(n, e => {
								r[Object(ha.g)(e.unitName)] = e.id
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
					api: ia,
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
				Ha = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Va = Object(S.c)({
					banners: Sa,
					currentBadgeManagementScreen: Ta,
					currentModalArgs: Da,
					emotes: ka,
					gifs: La,
					me: Ga,
					paymentSystems: Fa.b,
					pointsCopy: qa,
					subredditPremium: Ha.b
				}),
				Wa = n("./src/reddit/actions/emoji.ts");
			const Qa = {};
			var $a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qa,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wa.h: {
							const n = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Wa.g:
						case Wa.f: {
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
				Ka = Object(S.c)({
					pending: $a
				}),
				za = Object(S.c)({
					list: Ka
				});
			const Ya = {};
			var Xa = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ya,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wa.f:
						case Wa.c:
							return e;
						case Wa.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Wa.d: {
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
						case Wa.i: {
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
						case Wa.e: {
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
				Ja = Object(S.c)({
					api: za,
					models: Xa
				}),
				Za = n("./src/reddit/actions/experiments.ts");
			const eo = /^experiment_(.*)$/i,
				to = e => {
					const t = e.match(eo);
					if (null !== t) return t[1]
				},
				no = {};
			var ro = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : no,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.b: {
							const n = Rr(t);
							if (!n) return e;
							const r = {};
							for (const e in n) {
								const t = to(e);
								t && (r[t.toLowerCase()] = n[e] || "")
							}
							return ua()(r) ? e : {
								...e,
								...r
							}
						}
						case Za.b: {
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
				so = n("./src/reddit/actions/externalAccount.ts");
			const ao = {};
			var oo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ao,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case so.e:
					case so.f: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case so.d: {
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
			const co = {};
			var io = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : co,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case so.e: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case so.f:
						case so.d: {
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
				uo = Object(S.c)({
					error: oo,
					pending: io
				});
			const lo = {};
			var po = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case so.l:
					case so.k: {
						const {
							provider: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case so.j: {
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
			const fo = {};
			var bo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case so.b: {
							const {
								provider: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case so.c:
						case so.a: {
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
				ho = Object(S.c)({
					error: po,
					pending: bo
				});
			const yo = {};
			var go = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case so.i:
					case so.h: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case so.g: {
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
			const mo = {};
			var vo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case so.h: {
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
			const Oo = {};
			var Eo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case so.i: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case so.h:
						case so.g: {
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
				_o = Object(S.c)({
					error: go,
					fetched: vo,
					pending: Eo
				});
			const Io = {};
			var So = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Io,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case so.l:
					case so.k: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case so.j: {
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
			const jo = {};
			var wo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case so.l: {
							const {
								username: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case so.k:
						case so.j: {
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
				To = Object(S.c)({
					error: So,
					pending: wo
				}),
				Do = Object(S.c)({
					connect: uo,
					disconnect: ho,
					user: To,
					subreddit: _o
				});
			const Po = {};
			var Ao = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Po,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case so.h: {
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
			const Co = {};
			var Ro = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Co,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case so.k: {
							const {
								username: n,
								accountsData: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case so.c: {
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
				No = Object(S.c)({
					api: Do,
					user: Ro,
					subreddit: Ao
				}),
				ko = n("./src/reddit/featureFlags/index.ts");
			const xo = new Set(["0", "disabled", "false", "off", ""]);
			var Lo = e => !xo.has(e.toLowerCase());
			const Uo = ko.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				Mo = ko.a.reduce((e, t) => (e[t] = null, e), {});
			var Go = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.b: {
							const n = Rr(t);
							if (void 0 !== n) {
								const t = {};
								for (const e in n) {
									const r = Object(ko.g)(e);
									if (r) {
										const s = Uo[r.toLowerCase()];
										if (s) {
											const r = n[e],
												a = "string" != typeof r || Lo(r);
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
						case ko.b: {
							const {
								featureName: n,
								currentValue: r
							} = t.payload;
							return r === e[n] ? e : {
								...e,
								[n]: r
							}
						}
						case ko.c: {
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
				Fo = Object(S.c)({
					overrides: Go
				}),
				Bo = n("./src/reddit/actions/focusedVerticals/constants.ts");
			const qo = {
				focusedVerticalGqlError: null
			};
			var Ho = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qo,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bo.h:
					case Bo.g:
					case Bo.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case Bo.e:
						return {
							...e, focusedVerticalGqlError: t.payload
						};
					default:
						return e
				}
			};
			const Vo = {
				focusedVerticalGqlPending: !1
			};
			var Wo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vo,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bo.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case Bo.e:
						case Bo.g:
						case Bo.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				Qo = Object(S.c)({
					error: Ho,
					pending: Wo
				});
			var $o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bo.g:
					case Bo.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const Ko = {
				dismissed: !0
			};
			var zo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ko,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bo.j:
						return {
							dismissed: !1
						};
					case Bo.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var Yo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bo.g:
					case Bo.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Xo = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bo.g:
					case Bo.c:
					case Bo.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Jo = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Bo.g:
						case Bo.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Zo = Object(S.c)({
					api: Qo,
					components: zo,
					interactedSubredditIds: Yo,
					recommendedSubredditIds: Jo,
					category: $o,
					lastLoadedEnv: Xo
				});
			Object(Ce.a)("FONTS_FONT_FILES_PARSED");
			const ec = [];
			var tc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var nc = function() {
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
			var rc = function() {
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
			var sc = function() {
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
				ac = Object(S.c)({
					error: nc,
					pending: rc,
					showLoader: sc
				});
			var oc = function() {
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
			var cc = function() {
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
			var ic = function() {
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
			var dc = function() {
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
			var uc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.J:
						return !0;
					default:
						return e
				}
			};
			var lc = function() {
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
			const pc = Oe.n;
			var fc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.mb:
							return t.payload;
						case ee.K: {
							const {
								award: e
							} = t.payload;
							return e || pc
						}
						default:
							return e
					}
				},
				bc = Object(S.c)({
					api: ac,
					correlationId: oc,
					gildModalThingId: ic,
					isAnonymous: dc,
					isIframed: uc,
					message: lc,
					gildedThing: cc,
					selectedAward: fc
				});
			var hc = function() {
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
			var yc = function() {
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
				gc = Object(S.c)({
					error: hc,
					pending: yc
				});
			var mc = function() {
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
				vc = Object(S.c)({
					api: gc,
					givePremiumModalAccountName: mc
				}),
				Oc = n("./src/reddit/actions/header.ts"),
				Ec = n("./src/reddit/actions/overlayEvents.ts");
			var _c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Oc.a:
							return !1;
						case Oc.b:
							return !0;
						case Oc.c:
							return !e;
						case Ec.b:
							return !1;
						default:
							return e
					}
				},
				Ic = Object(S.c)({
					isSubscriptionsDropdownOpen: _c
				});
			var Sc = function() {
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
				jc = n("./src/reddit/actions/imageUploads.ts");
			const wc = {};
			var Tc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case jc.d: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case jc.c:
					case jc.e:
					case jc.b: {
						const n = t.payload;
						return e[n.id] ? {
							...e,
							[n.id]: n
						} : e
					}
					case jc.a: {
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
			var Dc = function() {
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
			const Pc = {
				notifications: null,
				id: null
			};
			var Ac = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pc,
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
				Cc = n("./src/reddit/actions/inAppNotifications/constants.ts");
			var Rc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Cc.a:
							return !0;
						default:
							return e
					}
				},
				Nc = Object(S.c)({
					inFeedPosition: Dc,
					notifications: Ac,
					shouldHideInAppNotifications: Rc
				}),
				kc = n("./src/reddit/actions/interceptedAction.ts");
			var xc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case kc.a:
							return t.payload;
						case kc.b:
							return null;
						default:
							return e
					}
				},
				Lc = n("./src/reddit/actions/changeUsername.ts");
			var Uc = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Lc.a:
							return !1;
						case Lc.b:
							return !0;
						default:
							return e
					}
				},
				Mc = n("./src/reddit/actions/emailVerificationTooltip.ts");
			var Gc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Mc.a:
							return !e;
						default:
							return e
					}
				},
				Fc = n("./src/reddit/actions/moderatingSubreddits.ts");
			var Bc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fc.a: {
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
				qc = n("./src/reddit/actions/jsApi.ts");
			const Hc = [];
			var Vc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qc.a: {
							const n = t.payload;
							return -1 === e.indexOf(n) && (e = [...e, n]).sort(), e
						}
						default:
							return e
					}
				},
				Wc = n("./src/reddit/actions/langSite/index.ts");
			const Qc = {
				bannerClosedTime: 0
			};
			var $c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Wc.a:
							return {
								...e, bannerClosedTime: Date.now()
							};
						default:
							return e
					}
				},
				Kc = n("./src/reddit/actions/leaderboard/constants.ts");
			const zc = {};
			var Yc = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zc,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Kc.a: {
						const {
							subredditId: n,
							data: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Kc.b:
					case Kc.c: {
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
			const Xc = {};
			var Jc = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xc,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Kc.a:
						case Kc.c: {
							const {
								subredditId: n
							} = t.payload, {
								[n]: r,
								...s
							} = e;
							return s
						}
						case Kc.b: {
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
				Zc = Object(S.c)({
					error: Yc,
					pending: Jc
				});
			const ei = {};
			var ti = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ei,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Kc.c: {
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
				ni = Object(S.c)({
					api: Zc,
					models: ti
				});
			var ri = function() {
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
			const si = {};
			var ai = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : si,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case V.b:
					case V.c: {
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
					case V.a: {
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
			const oi = {};
			var ci = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.d:
						case V.b: {
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
						case V.c:
						case V.a: {
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
				ii = Object(S.c)({
					error: ai,
					pending: ci
				});
			const di = {};
			var ui = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : di,
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
			const li = {};
			var pi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : li,
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
					case V.c: {
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
			const fi = {};
			var bi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.e:
						case V.c: {
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
				hi = Object(S.c)({
					api: ii,
					identifiers: pi,
					fetchedTokens: ui,
					loadMore: bi
				});
			const yi = {};
			var gi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case V.b:
					case V.c: {
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
					case V.a: {
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
			const mi = {};
			var vi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.d:
						case V.b: {
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
						case V.c:
						case V.a: {
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
				Oi = Object(S.c)({
					error: gi,
					pending: vi
				});
			const Ei = {};
			var _i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ei,
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
			const Ii = {};
			var Si = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ii,
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
					case V.c: {
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
			const ji = {};
			var wi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ji,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.e:
						case V.c: {
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
				Ti = Object(S.c)({
					api: Oi,
					identifiers: Si,
					fetchedTokens: _i,
					loadMore: wi
				});
			const Di = {};
			var Pi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Di,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case V.b:
					case V.c: {
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
					case V.a: {
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
			const Ai = {};
			var Ci = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ai,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.d:
						case V.b: {
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
						case V.c:
						case V.a: {
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
				Ri = Object(S.c)({
					error: Pi,
					pending: Ci
				});
			const Ni = {};
			var ki = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ni,
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
			const xi = {};
			var Li = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xi,
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
					case V.c: {
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
			const Ui = {};
			var Mi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ui,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.e:
						case V.c: {
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
				Gi = Object(S.c)({
					api: Ri,
					identifiers: Li,
					fetchedTokens: ki,
					loadMore: Mi
				});
			const Fi = {};
			var Bi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.d:
					case Ne.e:
					case V.b:
					case V.c: {
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
					case V.a: {
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
			const qi = {};
			var Hi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.d:
						case V.b: {
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
						case V.c:
						case V.a: {
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
				Vi = Object(S.c)({
					error: Bi,
					pending: Hi
				});
			const Wi = {};
			var Qi = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wi,
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
			const $i = {};
			var Ki = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $i,
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
					case V.c: {
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
			const zi = {};
			var Yi = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zi,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.e:
						case V.c: {
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
				Xi = Object(S.c)({
					api: Vi,
					identifiers: Ki,
					fetchedTokens: Qi,
					loadMore: Yi
				});
			const Ji = {};
			var Zi = n("./src/reddit/actions/eventPosts/constants.ts"),
				ed = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				td = n("./src/reddit/actions/pages/topic.ts");
			const nd = {};
			var rd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nd,
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
						case ed.b:
						case ed.c:
						case q.PROFILE_POSTS_PENDING:
						case q.PROFILE_POSTS_LOADED:
						case q.MORE_POSTS_PENDING:
						case q.MORE_POSTS_LOADED:
						case Q.f:
						case Q.e:
						case Pe.f:
						case Pe.e:
						case $.j:
						case td.TOPIC_DATA_PENDING:
						case td.TOPIC_DATA_LOADED:
						case td.MORE_POSTS_PENDING:
						case td.MORE_POSTS_LOADED:
						case $.i:
						case Zi.e:
						case Zi.c:
						case Zi.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: null
							}
						}
						case V.b:
						case V.c:
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
						case ed.a:
						case $.h:
						case Q.d:
						case Pe.d:
						case q.PROFILE_POSTS_FAILED:
						case q.MORE_POSTS_FAILED:
						case td.TOPIC_DATA_FAILED:
						case td.MORE_POSTS_FAILED:
						case Zi.b: {
							const {
								key: n,
								error: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case V.a:
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
				sd = n("./src/reddit/actions/linkedPosts/constants.ts"),
				ad = n("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				od = n("./src/reddit/actions/subreddit/constants.ts");
			const cd = {};
			var id = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cd,
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
						case ed.c:
						case Q.f:
						case q.MORE_POSTS_PENDING:
						case $.j:
						case td.MORE_POSTS_PENDING:
						case Zi.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case V.b:
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
						case sd.b:
						case sd.c:
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
						case ad.a:
						case ad.b:
						case od.j:
						case ed.b:
						case ed.a:
						case $.i:
						case $.h:
						case td.MORE_POSTS_LOADED:
						case td.MORE_POSTS_FAILED:
						case Zi.c:
						case Zi.b:
						case Zi.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						case od.r: {
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
						case V.c:
						case V.a:
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
				dd = Object(S.c)({
					error: rd,
					pending: id
				});
			const ud = {};
			var ld = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ud,
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
				pd = n("./src/reddit/actions/postList.ts"),
				fd = n("./node_modules/lodash/omitBy.js"),
				bd = n.n(fd);

			function hd(e, t) {
				return t = t.toLowerCase(), bd()(e, (e, n) => n === t || n.startsWith(`${t}--[`))
			}
			const yd = {};
			var gd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pd.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case pd.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? Tr()(e, [n]) : e
					}
					case W.SUBREDDIT_INVALIDATE_LISTING:
						return hd(e, t.payload);
					default:
						return e
				}
			};
			const md = {};
			var vd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : md,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.b:
						case we.e:
						case _e.b:
						case Te.b:
						case W.SUBREDDIT_LOADED:
						case q.PROFILE_POSTS_LOADED:
						case td.TOPIC_DATA_LOADED: {
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
						case td.MORE_POSTS_LOADED: {
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
							return hd(e, t.payload);
						default:
							return e
					}
				},
				Od = n("./src/reddit/actions/post.ts");
			const Ed = {};
			var _d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ed,
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
						case td.TOPIC_DATA_PENDING: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: []
							}
						}
						case Ee.e:
						case sd.c:
						case we.e:
						case ad.b:
						case _e.b:
						case je.b:
						case Te.b:
						case W.SUBREDDIT_LOADED:
						case od.j:
						case ed.b:
						case Pe.e:
						case q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case td.TOPIC_DATA_LOADED:
						case Zi.c: {
							const {
								key: n,
								postIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case od.r: {
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
						case td.MORE_POSTS_LOADED:
						case Zi.d: {
							const {
								key: n,
								postIds: r
							} = t.payload;
							return {
								...e,
								[n]: e[n].concat(r)
							}
						}
						case V.c: {
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
						case Od.o: {
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
							return hd(e, t.payload);
						default:
							return e
					}
				},
				Id = n("./src/lib/makeListingKey/index.ts");
			const Sd = {};
			var jd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case W.SUBREDDIT_LOADED: {
						const {
							key: n,
							listingSort: r
						} = t.payload;
						return r && !Object(Id.b)(n) ? {
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
			const wd = {};
			var Td = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wd,
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
					case td.TOPIC_DATA_LOADED:
					case td.MORE_POSTS_LOADED: {
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
					case V.c: {
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
						return hd(e, t.payload);
					default:
						return e
				}
			};
			const Dd = {};
			var Pd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zi.c:
						case Zi.d: {
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
				Ad = Object(S.c)({
					api: dd,
					correlationIds: ld,
					endMarkers: gd,
					fetchedTokens: vd,
					ids: _d,
					listingSort: jd,
					loadMore: Td,
					pageInfo: Pd,
					treatment: ((e, t) => (function() {
						let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ji,
							r = arguments.length > 1 ? arguments[1] : void 0;
						switch (r.type) {
							case V.c:
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
				Cd = Object(S.c)({
					activeKey: ri,
					authorOrder: hi,
					commentOrder: Ti,
					communityOrder: Gi,
					listingOrder: Xi,
					postOrder: Ad
				});
			var Rd = function() {
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
			var Nd = function() {
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
			var kd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _e.b:
						return !0;
					default:
						return e
				}
			};
			var xd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Ld = Object(S.c)({
					announcements: Rd,
					featured: Nd,
					isFrontpageLoaded: kd,
					shouldShowAnnouncements: xd
				}),
				Ud = n("./src/reddit/actions/media.ts");
			const Md = {},
				Gd = {};
			var Fd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gd,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ud.b: {
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
			const Bd = {};
			var qd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ud.e: {
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
				Hd = Object(S.c)({
					currentSlideIndex: Fd,
					isGalleryTileLayout: qd
				});
			var Vd = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ud.c:
						return t.payload;
					default:
						return e
				}
			};
			var Wd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ud.d:
							return t.payload;
						default:
							return e
					}
				},
				Qd = Object(S.c)({
					isMuted: Vd,
					volume: Wd
				}),
				$d = n("./src/reddit/actions/meta.ts");
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
				popularGeoFilter: void 0,
				protocol: "",
				region: "",
				sessionReferrerDomain: "",
				userAgent: "",
				pageloadServerTime: 0
			};
			var zd = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kd,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $d.b:
							return t.payload;
						case $d.a:
							return {
								...e, ...t.payload
							};
						case $d.e:
							return {
								...e, locale: t.payload
							};
						case $d.f:
							return {
								...e, popularGeoFilter: t.payload
							};
						case $d.c:
							return {
								...e, platform: {
									...e.platform,
									pwa: !0
								}
							};
						case $d.d:
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
				Yd = n("./src/reddit/actions/subredditModeration/constants.ts");
			const Xd = {};
			var Jd = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd,
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
					case Yd.kb: {
						const {
							subredditId: n
						} = t.payload;
						return Object(Dt.a)(e, n)
					}
					case Yd.db: {
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
			var Zd = function() {
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
			var eu = function() {
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
				tu = Object(S.c)({
					error: Zd,
					pending: eu
				});
			const nu = [];
			var ru = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nu,
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
				su = Object(S.c)({
					api: tu,
					names: ru
				}),
				au = Object(S.c)({
					filteredSubreddits: su
				}),
				ou = n("./src/reddit/actions/modMode.ts");
			var cu = function() {
				let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ou.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const iu = {};
			var du = function() {
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
			const uu = {};
			var lu = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uu,
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
				pu = Object(S.c)({
					error: du,
					pending: lu
				});
			const fu = {};
			var bu = function() {
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
				hu = Object(S.c)({
					api: pu,
					models: bu
				});
			var yu = function() {
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
			var gu = function() {
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
			var mu = function() {
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
				vu = Object(S.c)({
					error: yu,
					fetched: gu,
					pending: mu
				});
			var Ou = function() {
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
			var Eu = function() {
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
			var _u = function() {
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
				Iu = Object(S.c)({
					error: Ou,
					fetched: Eu,
					pending: _u
				});
			var Su = function() {
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
			var ju = function() {
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
			var wu = function() {
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
				Tu = Object(S.c)({
					error: Su,
					fetched: ju,
					pending: wu
				});
			var Du = function() {
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
			var Pu = function() {
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
			var Au = function() {
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
				Cu = Object(S.c)({
					error: Du,
					fetched: Pu,
					pending: Au
				});
			var Ru = function() {
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
			var Nu = function() {
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
			var ku = function() {
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
				xu = Object(S.c)({
					error: Ru,
					fetched: Nu,
					pending: ku
				});
			var Lu = function() {
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
			var Uu = function() {
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
				Mu = Object(S.c)({
					fetched: Lu,
					pending: Uu
				});
			var Gu = function() {
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
			var Fu = function() {
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
			var Bu = function() {
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
				qu = Object(S.c)({
					error: Gu,
					fetched: Fu,
					pending: Bu
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
			var Vu = function() {
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
			var Wu = function() {
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
				Qu = Object(S.c)({
					error: Hu,
					fetched: Vu,
					pending: Wu
				}),
				$u = Object(S.c)({
					addSubreddit: vu,
					create: Iu,
					deleteMulti: Tu,
					duplicate: Cu,
					edit: xu,
					forUser: Mu,
					recommendations: qu,
					removeSubreddit: Qu
				}),
				Ku = n("./node_modules/lodash/isEqual.js"),
				zu = n.n(Ku),
				Yu = n("./node_modules/lodash/union.js"),
				Xu = n.n(Yu);

			function Ju(e, t, n) {
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
			var Zu = n("./src/reddit/actions/profile/constants.ts");
			const el = {};
			var tl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : el,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Te.b:
						case Se.r:
						case Se.u:
						case Zu.h: {
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
								a[t] = Xu()(s, n).sort((e, t) => o[e].displayText.toLowerCase() > o[t].displayText.toLowerCase() ? 1 : -1)
							}
							return zu()(e, a) ? e : a
						}
						case Se.g:
						case Se.m: {
							const {
								userId: n,
								multireddit: r
							} = t.payload, s = e[n] ? e[n].slice() : [], a = Ju(s, r.url, (e, t) => e > t ? 1 : -1);
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
				nl = n("./src/reddit/actions/subscription/constants.ts"),
				rl = n("./src/reddit/models/Multireddit/index.ts");
			const sl = {};
			var al = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Te.b:
					case Se.r:
					case Se.u:
					case Zu.h:
					case V.c: {
						let n = {};
						for (const r in t.payload.multireddits) {
							const s = {
									...t.payload.multireddits[r]
								},
								a = e[r];
							a && !Object(rl.g)(s) && (s.subredditIds = a.subredditIds, s.profileIds = a.profileIds), r in e && zu()(e[s.url], s) || (n = {
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
					case nl.d: {
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
					case nl.e: {
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
			const ol = {};
			var cl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ol,
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
					api: $u,
					byUserId: tl,
					models: al,
					recommendations: cl
				}),
				dl = n("./src/reddit/actions/notificationBanner.ts");
			var ul = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dl.b:
							return t.payload.notificationBannerId;
						case dl.a:
							return null;
						default:
							return e
					}
				},
				ll = n("./src/reddit/actions/notificationsInbox/constants.ts");
			var pl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ll.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case ll.e:
					case ll.b:
						return !1;
					default:
						return e
				}
			};
			var fl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ll.e:
							return !0;
						case ll.a:
						case ll.b:
							return !1;
						default:
							return e
					}
				},
				bl = Object(S.c)({
					error: pl,
					pending: fl
				});
			var hl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ll.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var yl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ll.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const gl = [];
			var ml = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ll.b: {
						const n = t.payload && t.payload.nodes;
						return [...e, ...n]
					}
					case ll.f: {
						const n = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== n)
					}
					case ll.d: {
						const n = t.payload && t.payload.id,
							r = t.payload && t.payload.now,
							s = e.findIndex(e => e.id === n);
						return -1 === s ? e : [...e.slice(0, s), {
							...e[s],
							readAt: r
						}, ...e.slice(s + 1)]
					}
					case ll.c: {
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
			var vl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ll.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				Ol = Object(S.c)({
					api: bl,
					earlierDividerIndex: hl,
					notifications: ml,
					pageInfo: vl,
					markAllAsReadTimestamp: yl
				}),
				El = n("./src/reddit/actions/nps.ts");
			const _l = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Il = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _l,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case El.c:
							return {
								..._l, pending: !0
							};
						case El.a:
							return _l;
						case El.b: {
							const {
								dest: e
							} = t.payload;
							return {
								..._l,
								success: !0,
								dest: e
							}
						}
						default:
							return e
					}
				},
				Sl = n("./src/reddit/actions/accountGender/constants.ts"),
				jl = n("./src/reddit/actions/onboarding/constants.ts");
			const wl = {
				success: !1,
				failure: !1
			};
			var Tl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Sl.b:
						return {
							...wl, success: !0
						};
					case Sl.c:
						return {
							...wl, failure: !0
						};
					case jl.a:
						return {
							...wl
						};
					default:
						return e
				}
			};
			var Dl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case _e.b:
					case jl.c: {
						const e = t.payload;
						return (null == e ? void 0 : e.interestTopicRecommendations) && !ua()(null === (n = null == e ? void 0 : e.interestTopicRecommendations) || void 0 === n ? void 0 : n.interests) ? e.interestTopicRecommendations : null
					}
					default:
						return e
				}
			};
			var Pl = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case jl.b:
							return !0;
						default:
							return e
					}
				},
				Al = Object(S.c)({
					genderUpdateState: Tl,
					interestTopicRecommendationsState: Dl,
					shouldSkipOnboardingState: Pl
				});
			const Cl = e => {
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
			const Rl = e => {
					const t = {};
					for (const n of e) t[n.experimentName.toLowerCase()] = Cl(n);
					return t
				},
				Nl = {};
			var kl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nl,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Za.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, n = e ? e.experiments : [];
						return Rl(n)
					}
					default:
						return e
				}
			};
			var xl = Object(S.c)({
					byName: kl,
					canonicalUrl: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case Za.a: {
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
				Ll = Object(S.c)({
					experiments: xl
				}),
				Ul = n("./node_modules/history/esm/history.js"),
				Ml = n("./src/reddit/constants/history.ts");
			const Gl = {
					allowNavigationCallback: null,
					currentPage: null,
					lastPage: null,
					referrers: {},
					sessionReferrer: null,
					metas: {}
				},
				Fl = (e, t) => ({
					key: e,
					locationState: {},
					meta: null,
					queryParams: {},
					routeMatch: null,
					status: 404,
					url: t,
					urlParams: {}
				}),
				Bl = (e, t, n, r) => {
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
			var ql = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gl,
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
						const c = Object(Ul.e)(a),
							i = s ? Bl(o, c, s, a) : Fl(o, c);
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
									[Ml.b.FeedCorrelationId]: n
								}
							}
						} : e
					}
					default:
						return e
				}
			};
			const Hl = {};
			var Vl = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hl,
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
			const Wl = {};
			var Ql = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wl,
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
				$l = Object(S.c)({
					error: Vl,
					pending: Ql
				}),
				Kl = Object(S.c)({
					voting: $l
				}),
				zl = n("./node_modules/lodash/mapValues.js"),
				Yl = n.n(zl),
				Xl = n("./src/reddit/reducers/posts/models/helpers.ts"),
				Jl = n("./src/reddit/actions/economics/predictions/constants.ts");
			const Zl = e => {
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
			var ep = e => {
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
							resolvedOptionId: u,
							totalStakeAmount: l,
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
							type: _s.a.GA,
							isNSFW: o,
							isPrediction: i,
							isSpoiler: c,
							totalStakeAmount: l || 0,
							tournamentId: f,
							userSelection: b,
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
						options: d,
						totalVoters: p,
						type: _s.a.GA,
						isPrediction: i,
						userSelection: b
					}
				},
				tp = n("./src/reddit/helpers/graphql/normalizePoll/index.ts"),
				np = n("./src/reddit/models/Prediction/index.ts");

			function rp(e, t) {
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
					userSelection: i,
					userWonAmount: n,
					postId: r,
					totalStakeAmount: o || 0,
					totalVoteCount: a || 0,
					totalVoters: a || 0,
					...d
				}
			}
			const sp = {};
			var ap = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sp,
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
					case _e.b:
					case W.SUBREDDIT_LOADED:
					case $.i:
					case _e.f:
					case F.b:
					case F.f:
					case Jl.o: {
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
						const r = Yl()(t.payload.posts, Object(Xl.i)([Xl.p])),
							s = {};
						return Object.keys(r).forEach(e => {
							var t, n;
							const a = r[e];
							if (a.pollData && (s[e] = ep(a)), null === (n = null === (t = a.predictionTournament) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.length) {
								const {
									tournamentId: e,
									predictions: t
								} = a.predictionTournament;
								t.forEach(t => {
									s[t.id] = rp(t, {
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
					case Jl.q:
					case Jl.p: {
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
					case Jl.b: {
						const {
							postId: n,
							prediction: r
						} = t.payload;
						return e[n] && Object(np.c)(e[n]) ? {
							...e,
							[n]: {
								...e[n],
								...Object(tp.b)(r)
							}
						} : e
					}
					default:
						return e
				}
			};
			const op = {};
			var cp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : op,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.k: {
						const {
							[_s.b.ByVoters]: n, pollId: r
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
							const s = Zl(r[t].pollData);
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
			var dp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ip,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.k: {
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
				up = Object(S.c)({
					byVoters: cp,
					byVotingPower: dp
				});
			const lp = {};
			var pp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lp,
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
				fp = Object(S.c)({
					api: Kl,
					models: ap,
					results: up,
					rewards: pp
				});
			const bp = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var hp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bp,
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
			const yp = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var gp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yp,
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
				mp = Object(S.c)({
					error: hp,
					pending: gp
				}),
				vp = n("./src/reddit/helpers/path/index.ts");
			const Op = {},
				Ep = e => {
					const {
						protocol: t,
						domain: n
					} = e;
					return e => {
						const r = Object(vp.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${n}${r}`
						}
					}
				};
			var _p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Op,
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
					case Od.j:
					case Se.r:
					case _e.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Ne.e:
					case Ae.b:
					case V.c:
					case Rn.f: {
						const {
							collections: n,
							meta: r
						} = t.payload;
						if (!n) return e;
						let s = n;
						if (r) {
							const e = Ep(r);
							s = Yl()(n, e)
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
							a = Ep(r)(n)
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
			const Ip = {};
			var Sp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip,
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
				jp = Object(S.c)({
					models: _p,
					subredditToIds: Sp,
					api: mp
				}),
				wp = n("./src/reddit/actions/postFlair.ts"),
				Tp = n("./src/reddit/models/Flair/index.ts");
			const Dp = {},
				Pp = {
					displaySettings: {
						isEnabled: !1,
						position: Tp.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				Ap = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					return 0 === n.length ? e : n.reduce((e, n) => (e[n] = {
						...Pp,
						...e[n],
						...t[n]
					}, e), {
						...e
					})
				};
			var Cp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dp,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.b:
						case je.f:
						case De.PAGE_LOADED:
						case _e.f:
						case we.e:
						case we.h:
						case Se.r:
						case ed.b:
						case F.b:
						case F.f:
						case _e.b:
						case Te.b:
						case V.c:
						case W.SUBREDDIT_LOADED:
						case B.b:
						case B.e:
						case H.c:
						case H.i:
						case H.e:
						case H.g:
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
							return Ap(e, t.payload.postFlair);
						case wp.c: {
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
						case wp.a: {
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
						case wp.f: {
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
						case wp.b: {
							const {
								subredditId: n,
								templateId: r
							} = t.payload, s = e[n], {
								templates: a,
								templateIds: o
							} = s, c = Tr()(a, r), i = o.filter(e => e !== r);
							return {
								...e,
								[n]: {
									...s,
									templates: c,
									templateIds: i
								}
							}
						}
						case wp.e:
						case wp.d: {
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
							return Ap(e, n.postFlair)
						}
						default:
							return e
					}
				},
				Rp = n("./src/reddit/actions/subreddit/subredditCarousel.ts");
			const Np = {
				pending: !1,
				items: {}
			};
			var kp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Np,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rp.a:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Rp.b:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			var xp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Od.c:
							return t.payload;
						default:
							return e
					}
				},
				Lp = n("./src/reddit/actions/embedAndImage.ts");
			const Up = {};
			var Mp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Up,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Lp.b: {
							const {
								postId: n
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: !1
							} : e
						}
						case Lp.a: {
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
				Gp = Object(S.c)({
					loadable: Mp
				});
			const Fp = {};
			var Bp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Od.d: {
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
			var qp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Od.e: {
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
			var Vp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Od.n:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case Od.b:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case Od.f:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const Wp = {};
			var Qp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wp,
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
					case V.c:
						return x()({
							...e
						}, t.payload.postInstances, (e, t) => {
							if (e) return e.concat(t)
						});
					default:
						return e
				}
			};
			var $p = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Od.a:
							return t.payload;
						default:
							return e
					}
				},
				Kp = n("./src/reddit/actions/isTrackingCrossposts.ts");
			const zp = {};
			var Yp = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zp,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Kp.a: {
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
			const Xp = {};
			var Jp = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xp,
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
						case _e.b:
						case W.SUBREDDIT_LOADED:
						case $.i:
						case _e.f:
						case F.b:
						case F.f:
						case Jl.o: {
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
				Zp = n("./src/reddit/actions/bulkActions/constants.ts"),
				ef = n("./src/reddit/actions/constants.ts"),
				tf = n("./src/reddit/actions/flairManagement/constants.ts"),
				nf = n("./src/reddit/actions/googleQASchema/constants.ts"),
				rf = n("./src/reddit/actions/imageOCRAltText/constants.ts"),
				sf = n("./src/reddit/actions/subredditTopContent.ts"),
				af = n("./src/reddit/helpers/isPost.ts"),
				of = n("./node_modules/lodash/pickBy.js"),
				cf = n.n( of );

			function df(e, t) {
				const n = cf()(t, (function(t) {
					let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					return !e[n] || !zu()(e[n], t)
				}));
				return Object.keys(n).length > 0 ? {
					...e,
					...n
				} : e
			}
			var uf = n("./src/reddit/models/Gold/Gild/index.tsx"),
				lf = n("./src/reddit/models/Media/index.ts"),
				pf = n("./src/reddit/models/ModQueue/index.ts"),
				ff = n("./src/reddit/models/Post/index.ts"),
				bf = n("./src/reddit/models/Vote/index.ts"),
				hf = n("./src/reddit/actions/subredditDuplicates.ts");
			const yf = {};
			var gf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.b:
						if (Cr(t) === (Re.Nb.COMMENTS || Re.Nb.DUPLICATES)) {
							const n = Rr(t),
								r = Nr(t);
							if (n && n.instanceId && r && r.partialPostId) {
								const t = n.instanceId,
									s = Object(ff.t)(r.partialPostId);
								if (e[s] && e[t]) return {
									...e,
									[s]: Object(Xl.c)(e[s], e[t])
								}
							}
						}
						return e;
					case F.b:
					case F.f: {
						const n = Object(Xl.h)(t.payload.meta);
						return {
							...e,
							...Yl()(t.payload.posts, Object(Xl.i)([n, Xl.d, Xl.n, Xl.o, Xl.p, Object(Xl.a)(e), Object(Xl.b)(e), Object(Xl.k)(e), Object(Xl.l)(e), Object(Xl.j)(e)]))
						}
					}
					case Od.j:
						return df(e, t.payload);
					case hf.a:
						return df(e, t.payload.posts);
					case je.b:
					case je.f:
					case De.PAGE_LOADED:
					case sd.c:
					case ad.b:
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
					case ed.b:
					case Se.r:
					case _e.f:
					case Q.e:
					case "RECOMMENDED_POSTS_LOADED":
					case od.j:
					case $.i:
					case Ae.b:
					case td.TOPIC_DATA_LOADED:
					case td.MORE_POSTS_LOADED:
					case Zi.c:
					case Zi.d:
					case Jl.o: {
						const n = Object(Xl.h)(t.payload.meta);
						return {
							...e,
							...Yl()(t.payload.posts, Object(Xl.i)([n, Xl.d, Xl.n, Xl.o, Xl.p, Object(Xl.m)(e), Object(Xl.k)(e), Object(Xl.j)(e)]))
						}
					}
					case od.r: {
						if (!t.payload || !t.payload.length) return e;
						const n = {};
						for (const r of t.payload) {
							const t = r,
								s = Object(Xl.h)(t.meta);
							Object.assign(n, Yl()(t.posts, Object(Xl.i)([s, Xl.d, Xl.n, Xl.o, Object(Xl.m)(e), Object(Xl.k)(e), Object(Xl.j)(e)])))
						}
						return {
							...e,
							...n
						}
					}
					case ed.b: {
						const n = Object(Xl.h)(t.payload.meta),
							r = e[t.payload.postId];
						return {
							...e,
							...Yl()(t.payload.posts, Object(Xl.i)([n, Xl.d, Xl.n, Xl.o, Object(Xl.m)(e), Object(Xl.k)(e), Object(Xl.j)(e)])),
							[t.payload.postId]: {
								...r,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ee.e:
					case Ne.e:
					case V.c: {
						const n = Object(Xl.h)(t.payload.meta),
							r = Yl()(t.payload.posts, Object(Xl.i)([n, Xl.n, Xl.d, Xl.o, Object(Xl.j)(e)]));
						return x()({
							...e
						}, r, (e, t) => ({
							...t,
							...e
						}))
					}
					case Od.k: {
						const n = t.payload;
						return x()({
							...e
						}, n, (e, t) => ({
							...e,
							...t
						}))
					}
					case ef.a: {
						const {
							id: n,
							vote: r
						} = t.payload, s = e[n];
						return s ? {
							...e,
							[n]: Object(bf.c)(s, r)
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
					case Od.h: {
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
					case Od.i: {
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
							...n.reduce((e, t) => (e[t.post.id] = Object(Xl.i)([Xl.n])(Object(Hr.f)(t.post)), e), {})
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
								...Object(uf.a)(o, r, s),
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
							[r]: Object(uf.b)(s, n)
						} : e
					}
					case Yd.r: {
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
							...Yl()(r, Object(Xl.i)([Xl.n, Xl.o]))
						}
					}
					case Zp.b:
					case G.s: {
						const {
							operation: n,
							ids: r,
							username: s,
							options: a
						} = t.payload, o = r.filter(e => Object(af.a)(e)), c = Object(pf.d)(e, n, o, s, a);
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
					case Zi.f: {
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
					case Zi.a: {
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
					case Bo.g: {
						const n = t.payload.subredditTopContent;
						return n && n.posts && Object.keys(n.posts) ? {
							...Yl()(n.posts, Object(Xl.i)([Xl.n, Xl.o])),
							...e
						} : e
					}
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case sf.b:
						return {
							...Yl()(t.payload.posts, Object(Xl.i)([Xl.n, Xl.o])), ...e
						};
					case Od.m: {
						const {
							postId: n,
							richtextContent: r
						} = t.payload, s = e[n];
						return s && s.media && Object(lf.K)(s.media) ? {
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
					case tf.a: {
						const n = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case tf.b: {
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
					case rf.b: {
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
					case Jl.t: {
						const {
							tournamentPostId: n,
							predictionId: r,
							selectedOptionId: s
						} = t.payload;
						if (!e[r] && !e[n]) return e;
						const a = {
							...e
						};
						return a[r] && (a[r] = Object(Xl.e)({
							post: e[r],
							selectedOptionId: s
						})), a[n] && (a[n] = Object(Xl.f)({
							post: e[n],
							selectedOptionId: s,
							predictionId: r
						})), a
					}
					case Jl.b: {
						const {
							postId: n,
							prediction: r
						} = t.payload;
						return {
							...e,
							[n]: Object(Xl.q)(e[n], Object(tp.a)(r))
						}
					}
					case rf.a:
						return {
							...e
						};
					case nf.b: {
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
					case nf.a:
						return {
							...e
						};
					case sd.a: {
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
			var mf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Od.g:
							return t.payload;
						default:
							return e
					}
				},
				vf = n("./src/reddit/actions/postLevelCrowdControl.ts");
			const Of = {};
			var Ef = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Of,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vf.a: {
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
			const _f = [];
			var If = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _f,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Od.l: {
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
				Sf = n("./node_modules/uuid/v4.js"),
				jf = n.n(Sf);
			const wf = jf()();
			var Tf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.PAGE_LOADED:
					case pr.h:
					case pr.a:
					case pr.m:
					case pr.f:
						return jf()();
					default:
						return e
				}
			};
			var Df = function() {
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
			var Pf = function() {
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
			var Af = function() {
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
				Cf = Object(S.c)({
					creationToken: Tf,
					error: Df,
					pending: Pf,
					pendingUpdate: Af
				});
			const Rf = {};
			var Nf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rf,
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
			const kf = {
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

			function xf(e) {
				const t = {};
				return function() {
					let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
						r = arguments.length > 1 ? arguments[1] : void 0;
					switch (r.type) {
						case kf[e].POSTS_LOADED:
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
						case kf[e].MUTATION_SUCCEEDED: {
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
			const Lf = {};

			function Uf(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lf,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case kf[e].POSTS_LOADED:
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
			var Mf = n("./node_modules/lodash/uniq.js"),
				Gf = n.n(Mf);
			const Ff = {};

			function Bf(e) {
				return function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ff,
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case kf[e].POSTS_LOADED:
						case pr.f: {
							const {
								subredditInfoById: r
							} = n.payload, s = r.id, a = r.scheduledPosts[kf[e].postIdsKey];
							return {
								...t,
								[s]: Gf()([...t[s] || [], ...a])
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
			var qf = Object(S.c)({
					models: xf("recurringPosts"),
					pageInfo: Uf("recurringPosts"),
					postOrder: Bf("recurringPosts"),
					editModal: Nf
				}),
				Hf = Object(S.c)({
					models: xf("standalonePosts"),
					pageInfo: Uf("standalonePosts"),
					postOrder: Bf("standalonePosts")
				}),
				Vf = Object(S.c)({
					api: Cf,
					standalonePosts: Hf,
					recurringPosts: qf
				});
			var Wf = function() {
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
			var Qf = function() {
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
				$f = Object(S.c)({
					error: Wf,
					pending: Qf
				});
			const Kf = [];
			var zf = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kf,
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
							return Kf;
						default:
							return e
					}
				},
				Yf = Object(S.c)({
					api: $f,
					list: zf
				}),
				Xf = n("./src/reddit/actions/video.ts");
			const Jf = {};
			var Zf = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jf,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xf.e: {
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
			const eb = {};
			var tb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xf.a: {
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
			const nb = {};
			var rb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xf.b: {
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
			const sb = {};
			var ab = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xf.c: {
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
			const ob = {
				mutedInFeed: !0
			};
			var cb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ob,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xf.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var ib = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xf.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Xf.d:
						return null;
					default:
						return e
				}
			};
			const db = {};
			var ub = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : db,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xf.o: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case Xf.e: {
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
			const lb = {};
			var pb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xf.h: {
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
					case Xf.f: {
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
			const fb = {};
			var bb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xf.j: {
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
			const hb = {};
			var yb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xf.p: {
						const {
							postId: n
						} = t.payload;
						return e[n] ? {
							...e,
							[n]: !1
						} : e
					}
					case Xf.g: {
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
			const gb = {};
			var mb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Xf.i: {
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
			const vb = {};
			var Ob = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vb,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xf.m: {
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
				Eb = n("./src/reddit/constants/video.ts");
			const _b = {};
			var Ib = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _b,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xf.n: {
							const {
								postId: n,
								time: r
							} = t.payload;
							return e[n] && Math.abs(Math.floor(r.currentTime) - Math.floor(e[n].currentTime)) < Eb.m ? e : {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Sb = Object(S.c)({
					autoPlayed: Zf,
					buffering: tb,
					consumed: rb,
					continuousViewStartedAt: ab,
					feed: cb,
					fullscreen: ib,
					loadable: ub,
					loadTimes: pb,
					metadata: bb,
					paused: yb,
					playing: mb,
					started: Ob,
					time: Ib
				}),
				jb = Object(S.c)({
					embedAndImage: Gp,
					expanded: Bp,
					focus: qp,
					followed: Vp,
					instances: Qp,
					isAnimatingUpvote: $p,
					isTrackingCrossposts: Yp,
					metaMap: Jp,
					models: gf,
					modToMemberShare: mf,
					crowdControl: xp,
					postLevelCrowdControl: Ef,
					recent: If,
					scheduledPosts: Vf,
					topAwarded: Yf,
					video: Sb,
					carousel: kp
				}),
				wb = n("./src/lib/reducers/addAuthentication/index.ts");
			const Tb = {};
			var Db = Object(wb.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb,
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
				}), Tb),
				Pb = Object(S.c)({
					data: Db
				});
			const Ab = {};
			var Cb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ab,
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
			const Rb = {};
			var Nb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rb,
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
				kb = Object(S.c)({
					error: Cb,
					pending: Nb
				});
			const xb = {};
			var Lb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xb,
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
					case l.a:
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
			const Ub = {};
			var Mb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.c:
						case d.f: {
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
				Gb = Object(S.c)({
					error: Lb,
					pending: Mb
				}),
				Fb = Object(S.c)({
					fetch: kb,
					purchase: Gb
				});
			var Bb = function() {
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
			const qb = {};
			var Hb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qb,
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
				Vb = Object(S.c)({
					api: Fb,
					currentlyPurchasing: Bb,
					models: Hb
				});
			const Wb = {};
			var Qb = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wb,
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
			const $b = {};
			var Kb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $b,
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
				zb = Object(S.c)({
					error: Qb,
					pending: Kb
				});
			const Yb = {};
			var Xb = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yb,
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
				Jb = n("./src/reddit/actions/comment/list.ts");
			const Zb = {};
			var eh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zb,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Jb.a: {
						const {
							listingKey: n,
							listingName: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case Jb.b: {
						const {
							listingKey: n
						} = t.payload;
						return n in e ? Tr()(e, n) : e
					}
					default:
						return e
				}
			};
			const th = {};
			var nh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : th,
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
			const rh = {};
			var sh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rh,
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
				ah = Object(S.c)({
					api: zb,
					endMarkers: eh,
					fetchedTokens: nh,
					commentIds: Xb,
					loadMore: sh
				}),
				oh = n("./src/reddit/actions/pages/profileModSettings.ts");
			var ch = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oh.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				ih = Object(S.c)({
					pending: ch
				}),
				dh = Object(S.c)({
					api: ih
				});
			const uh = {};
			var lh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return t.type, e
			};
			const ph = {};
			var fh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ph,
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
			const bh = {};
			var hh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bh,
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
				yh = Object(S.c)({
					error: fh,
					pending: hh
				});
			const gh = {};
			var mh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gh,
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
			const vh = {};
			var Oh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vh,
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
							} : vh
						}
						default:
							return e
					}
				},
				Eh = Object(S.c)({
					api: yh,
					ids: mh,
					pageInfo: Oh
				}),
				_h = n("./src/reddit/constants/posts.ts");
			const Ih = {};
			var Sh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ih,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.c:
						case Ne.e:
							return {
								...e, ...t.payload.profileAboutInfo
							};
						case Zu.k: {
							const n = t.payload;
							return n.profile ? {
								...e,
								[n.profile.id]: n.about
							} : e
						}
						case nl.h: {
							const {
								identifiers: n,
								userIsSubscriber: r
							} = t.payload, s = n.filter(e => e.type === _h.a.PROFILE);
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
				jh = n("./src/reddit/models/Subreddit/index.ts");
			const wh = {};
			var Th = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wh,
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
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case Pe.b:
					case Pe.e:
					case q.PROFILE_POSTS_LOADED:
					case Ae.b:
					case we.e:
					case we.h:
					case Se.u:
					case Zu.h:
					case ed.b:
					case Ne.e:
					case $.i:
					case Zu.m:
					case Q.b:
					case Q.e:
					case V.c:
					case De.PAGE_LOADED:
					case Un.e:
					case Dr.PAGE_LOADED:
					case W.SUBREDDIT_LOADED:
					case Te.b:
					case "RECOMMENDED_POSTS_LOADED":
					case nl.c:
						return Object(N.merge)(e, t.payload.profiles);
					case Ne.h: {
						const {
							typeaheadSuggestions: n
						} = t.payload, r = Object.values(n).reduce((e, t) => Object(jh.i)(t) ? {
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
					case Zu.l:
					case Zu.k: {
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
			const Dh = {};
			var Ph = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zu.c:
						case Zu.f: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[(n || "").toLowerCase()]: !0
							}
						}
						case Zu.a:
						case Zu.b:
						case Zu.d:
						case Zu.e: {
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
				Ah = Object(S.c)({
					pending: Ph
				});
			const Ch = {};
			var Rh = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ch,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zu.b: {
						const {
							profileName: n,
							data: r
						} = t.payload, s = r.map(e => e.id);
						return {
							...e,
							[(n || "").toLowerCase()]: s
						}
					}
					case Zu.e:
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
			const Nh = {};
			var kh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zu.e: {
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
				xh = Object(S.c)({
					api: Ah,
					models: Rh,
					pageInfo: kh
				});
			const Lh = {};
			var Uh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zu.i: {
							const {
								profileName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case Zu.g:
						case Zu.h: {
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
				Mh = Object(S.c)({
					pending: Uh
				});
			const Gh = {};
			var Fh = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zu.h: {
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
				Bh = Object(S.c)({
					api: Mh,
					pageInfo: Fh
				}),
				qh = n("./src/reddit/actions/pinnedPost.ts");
			const Hh = {};
			var Vh = Object(wb.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qh.a: {
						const {
							pinned: n,
							profileId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case qh.d: {
						const {
							postId: n,
							profileId: r
						} = t.payload, s = e[r] || [];
						return {
							...e,
							[r]: [...s, n].slice(-Re.cb)
						}
					}
					case qh.g: {
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
			const Wh = {};
			var Qh = Object(wb.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wh,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case qh.a: {
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
			}), Wh);
			const $h = {};
			var Kh = Object(wb.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $h,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case qh.c:
						case qh.f: {
							const {
								postId: n,
								profileId: r
							} = t.payload, s = e[r] || [];
							return {
								...e,
								[r]: [...s, n]
							}
						}
						case qh.b:
						case qh.e:
						case qh.d:
						case qh.g: {
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
				}), $h),
				zh = Object(S.c)({
					data: Vh,
					initialData: Qh,
					pending: Kh
				}),
				Yh = n("./src/reddit/actions/trophyCase.ts");
			const Xh = {};
			var Jh, Zh, ey = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xh,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Yh.a: {
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
				ty = Object(S.c)({
					about: Sh,
					models: Th,
					moderated: xh,
					multireddits: Bh,
					pinnedPosts: zh,
					trophyCases: ey
				});
			n("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Jh || (Jh = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Zh || (Zh = {}));
			var ny, ry, sy;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(ny || (ny = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(ry || (ry = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(sy || (sy = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(ny || (ny = {}));
			Object(Ce.a)("PROMO__SHOW_PROMO"), Object(Ce.a)("PROMO__HIDE_PROMO");
			const ay = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var oy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ay,
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
				cy = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const iy = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: cy.d,
					viewer_streams_refresh: cy.c,
					viewer_streams_refresh_slop: cy.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var dy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cy.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case cy.x: {
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
					case cy.G:
						return {
							...e, isPending: !0
						};
					case cy.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case cy.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var uy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cy.L:
						return {
							...e, [cy.b]: t.payload.error
						};
					case cy.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case cy.z: {
						const {
							[cy.b]: t, ...n
						} = e;
						return n
					}
					case cy.y: {
						const {
							[t.payload.model.post.id]: n, ...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const ly = (e, t, n, r) => ({
				...e,
				[t]: {
					...e[t],
					isPending: n,
					...r && {
						utcTimeStamp: r
					}
				}
			});
			var py = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cy.N:
						return ly(e, t.payload, !0);
					case cy.O:
						return ly(e, cy.b, !0);
					case cy.y:
						return ly(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case cy.z:
						return ly(e, cy.b, !1, t.payload.utcTimeStamp);
					case cy.M:
						return ly(e, t.payload.streamId, !1);
					case cy.L:
						return ly(e, cy.b, !1);
					default:
						return e
				}
			};
			const fy = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var by = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cy.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case cy.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case cy.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				hy = Object(S.c)({
					config: dy,
					error: uy,
					pending: py,
					recommendedViewerSubreddits: by
				});
			const yy = {};
			var gy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cy.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case cy.F:
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
			const my = {
				cursor: cy.W,
				timestamps: {},
				visitOrder: []
			};
			var vy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : my,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cy.P:
						return my;
					case cy.X: {
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
						return Oy(e, t.payload.id);
					case cy.E:
						return Oy(e, t.payload);
					case Od.k: {
						const n = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return Ey(e, n)
					}
					case cy.V: {
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
			const Oy = (e, t) => {
					const n = e.visitOrder.indexOf(t);
					if (-1 === n) return e;
					const r = n > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: r
					}
				},
				Ey = (e, t) => {
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
				_y = {
					ended: [],
					removed: []
				};

			function Iy(e) {
				return [...new Set(e)]
			}
			var Sy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cy.t:
						return {
							...e, ended: Iy(e.ended.concat(t.payload))
						};
					case cy.u:
						return {
							...e, removed: Iy(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const jy = {};
			var wy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cy.z:
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
			const Ty = {},
				Dy = (e, t) => {
					const n = Object.keys(e).reduce((t, n) => ({
						...t,
						[n]: {
							...e[n],
							rank: cy.m
						}
					}), {});
					return t.reduce((e, t, n) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: cy.l - n
						}
					}), n)
				},
				Py = (e, t) => {
					const n = t.post.id,
						r = e[n] ? e[n].rank : cy.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: r
						}
					}
				};
			var Ay = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ty,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cy.y:
						return Py(e, t.payload.model);
					case cy.z:
						return Dy(e, t.payload.models);
					case cy.D: {
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
			const Cy = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var Ry = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cy.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case cy.A:
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
			const Ny = {
				reported: []
			};
			var ky = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ny,
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
			const xy = {
				isIntroFinished: !1
			};
			var Ly = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cy.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Uy = {
				reportedStreams: []
			};
			var My = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uy,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cy.C:
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
				Gy = Object(S.c)({
					api: hy,
					history: vy,
					hlsStreams: Sy,
					listings: wy,
					models: Ay,
					preloads: Ry,
					reports: ky,
					theaterSettings: Ly,
					userSettings: My,
					automuteLevels: gy
				}),
				Fy = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				By = n("./src/reddit/actions/session.ts");
			const qy = [],
				Hy = (e, t) => zu()(e, t) ? e : t;
			var Vy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qy,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case By.c:
					case By.d:
						return qy;
					case Fy.d:
						return Hy(e, t.subreddits);
					case Fy.f: {
						const {
							payload: n
						} = t, r = [n, ...e];
						return Array.from(new Set(r)).slice(0, Fy.c)
					}
					case Fy.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, Fy.c)
					}
					default:
						return e
				}
			};
			const Wy = {};
			var Qy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wy,
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
				$y = n("./src/reddit/actions/pages/report/constants.ts");
			var Ky = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $y.a:
						return t.payload;
					default:
						return e
				}
			};
			var zy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $y.b:
						return t.payload;
					case $y.c:
					case $y.d:
						return !1;
					default:
						return e
				}
			};
			var Yy = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case $y.d:
						return !0;
					case $y.c:
					case $y.b:
						return !1;
					default:
						return e
				}
			};
			var Xy = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $y.c:
							return !0;
						case $y.b:
						case $y.d:
							return !1;
						default:
							return e
					}
				},
				Jy = Object(S.c)({
					error: zy,
					pending: Yy,
					success: Xy
				}),
				Zy = n("./src/reddit/actions/reportPageRules/constants.ts");
			const eg = [];
			var tg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zy.a:
							return t.payload;
						default:
							return e
					}
				},
				ng = Object(S.c)({
					reportPageApi: Jy,
					reportPageRules: tg,
					initialReason: Ky
				}),
				rg = n("./src/reddit/actions/reportRules.ts");
			const sg = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var ag = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case rg.b:
						return {
							...e, sitewideRules: t.payload
						};
					case rg.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Ce.a)("REQUEST_HOST_SET");
			var og = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			const cg = "RUN_TIME_ENV_VARS__IS_STAGING",
				ig = (Object(Ce.a)(cg), {
					staging: !1,
					startTimeInMillis: (new Date).getTime()
				});
			var dg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ig,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cg:
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				ug = n("./src/reddit/components/SearchDropdown/index.tsx");
			var lg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ne.g:
						return !0;
					case Ec.b: {
						const {
							event: n
						} = t.payload, r = n.target, s = document.getElementById(ug.b), a = document.getElementById(ug.a);
						return !(!r || !((null == s ? void 0 : s.contains(r)) || (null == a ? void 0 : a.contains(r)))) && e
					}
					case Ne.f:
					case Ec.a:
					case Ec.c:
						return !1;
					default:
						return e
				}
			};
			var pg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.c:
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
			var bg = function() {
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
				hg = n("./src/reddit/models/Search/index.ts");
			const yg = {};
			var gg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.h: {
							const {
								typeaheadSuggestions: n
							} = t.payload, r = {};
							return Object.keys(n).forEach(e => {
								const t = n[e];
								return r[e] = Object(hg.e)(t)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				mg = Object(S.c)({
					idsByQuery: bg,
					models: gg
				});
			const vg = {};
			var Og = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.c: {
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
				Eg = Object(S.c)({
					isDropdownOpen: lg,
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
					searchQuery: pg,
					typeahead: mg,
					viewTreatment: Og
				}),
				_g = n("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Ig = {};
			var Sg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ig,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.c: {
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
						if (i === _g.c.Trending) {
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
			const jg = {};
			var wg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jg,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.c: {
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
			const Tg = {};
			var Dg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.c: {
							const {
								key: n,
								searchDiscoveryUnitOrder: r
							} = t.payload;
							return r ? {
								...e,
								[n]: r
							} : Tg
						}
						default:
							return e
					}
				},
				Pg = Object(S.c)({
					headerContent: Sg,
					models: wg,
					order: Dg
				}),
				Ag = n("./src/reddit/actions/searchQueryId/index.tsx");
			const Cg = {};
			Object(Ce.a)("SEO__CRAWLER_RECEIVED");
			var Rg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				Ng = n("./src/reddit/actions/seo/linksModule.ts");
			const kg = {};
			var xg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ng.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case Ng.c:
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
				Lg = n("./src/reddit/actions/seo/topicLinks.ts");
			const Ug = {};
			var Mg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ug,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Lg.a:
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
				Gg = Object(S.c)({
					crawler: Rg,
					linksModule: xg,
					topicLinks: Mg
				}),
				Fg = n("./src/reddit/actions/shortcuts/constants.ts");
			var Bg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fg.a:
						return t.payload;
					case u.b:
						return null;
					default:
						return e
				}
			};
			var qg = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Fg.b:
							return t.payload || null;
						default:
							return e
					}
				},
				Hg = n("./src/reddit/constants/shortcuts.ts"),
				Vg = n("./src/reddit/helpers/history/index.ts");
			const Wg = Hg.d.Global,
				Qg = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(Vg.b)(Ml.b.IsOverlay) ? Hg.d.Lightbox : Hg.d.CommentPage;
						case "rpan":
							return Object(Vg.b)(Ml.b.IsOverlay) ? Hg.d.Lightbox : Wg;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return Hg.d.Listing;
						case "modQueuePages":
							return Hg.d.Modqueue;
						default:
							return Wg
					}
				};
			var $g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case u.b:
							const n = t.payload;
							if (n.routeMatch) {
								const e = n.routeMatch.route.meta;
								return Qg(e)
							}
							return Wg;
						default:
							return e
					}
				},
				Kg = Object(S.c)({
					activeCommentId: Bg,
					activePostId: qg,
					namespace: $g
				});
			var zg = function() {
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
				Yg = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Xg = Object(S.c)({
					firstFetch: zg,
					models: Yg.b
				}),
				Jg = n("./src/reddit/actions/streaming/modSettings.ts");
			var Zg = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Jg.b:
					case Jg.c:
						return null;
					case Jg.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var em = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Jg.b:
							return !0;
						case Jg.c:
						case Jg.a:
							return !1;
						default:
							return e
					}
				},
				tm = Object(S.c)({
					error: Zg,
					pending: em
				}),
				nm = n("./src/reddit/actions/streaming/constants.ts");
			const rm = {};
			var sm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nm.a: {
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
				am = Object(S.c)({
					api: tm,
					modSettings: sm
				}),
				om = n("./src/reddit/models/StructuredStyles/index.ts");
			const cm = {};
			var im = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.h:
						case f.b:
						case f.d:
							return t.payload.styles;
						case f.e:
							return cm;
						case f.c: {
							const n = t.payload;
							return {
								...e,
								...n
							}
						}
						case f.k: {
							const e = t.payload;
							return Object(om.h)(e.styles)
						}
						default:
							return e
					}
				},
				dm = n("./src/reddit/actions/exportImportStyles.ts");
			var um = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case dm.c:
					case dm.b:
						return null;
					case dm.a:
						return t.payload;
					default:
						return e
				}
			};
			var lm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dm.c:
							return !0;
						case dm.b:
						case dm.a:
							return !1;
						default:
							return e
					}
				},
				pm = Object(S.c)({
					error: um,
					pending: lm
				}),
				fm = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				bm = n("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const hm = {};
			var ym = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case V.c:
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
						case wp.b: {
							const {
								templateId: n
							} = t.payload;
							return Object(Dt.a)(e, n)
						}
						case f.k:
							return hm;
						case bm.b: {
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
				gm = Object(S.c)({
					models: ym
				});
			const mm = {};
			var vm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mm,
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
						return mm;
					default:
						return e
				}
			};
			var Om = function() {
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
			var Em = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.d:
						return t.payload.subredditId;
					case f.e:
						return null;
					case u.b:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case On.g:
						return null;
					default:
						return e
				}
			};
			const _m = {};
			var Im = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _m,
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
						case V.c: {
							const {
								payload: n
							} = t;
							if (!n.structuredStyles || !n.structuredStyles.data) return e;
							if (!n.subredditName) return e;
							let r;
							if (ba()(n.subreddits, (e, t) => {
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
								r = Object(om.h)(n.styles);
							return {
								...e,
								[n.subredditId]: r
							}
						}
						case Zu.k: {
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
								return df(e, {
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
								return df(e, {
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
				Sm = Object(S.c)({
					draft: im,
					exportStyles: pm,
					flairTemplate: gm,
					imagePreviews: vm,
					isBladeEditorDirty: Om,
					isEditing: Em,
					models: Im
				});
			Object(Ce.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var jm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				wm = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const Tm = {};
			var Dm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tm,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case wm.c:
					case wm.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case wm.a: {
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
			const Pm = {};
			var Am = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wm.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case wm.b:
						case wm.a: {
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
				Cm = Object(S.c)({
					error: Dm,
					pending: Am
				});
			const Rm = {};
			var Nm = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rm,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case wm.b: {
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
				km = Object(S.c)({
					api: Cm,
					models: Nm
				}),
				xm = n("./src/reddit/actions/category/constants.ts"),
				Lm = n("./src/reddit/actions/subredditMention/constants.ts");
			const Um = {};
			var Mm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Um,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Lm.d:
					case F.b:
					case F.f:
					case V.c:
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
					case td.TOPIC_DATA_LOADED:
					case od.u: {
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
					case Wa.a: {
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
					case nl.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(e => e.type === _h.a.SUBREDDIT);
						return s.length ? s.reduce((e, t) => Object(N.setIn)(e, [t.id, "userIsSubscriber"], r), e) : e
					}
					case Bo.g:
					case xm.f:
					case od.g:
					case od.o:
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
					case Wa.b: {
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
					case wm.b: {
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
			const Gm = {};
			var Fm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gm,
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
			var Bm = function() {
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
				qm = Object(S.c)({
					error: Fm,
					pending: Bm
				}),
				Hm = n("./src/reddit/actions/subredditCreation.ts");
			const Vm = {
				apiError: null
			};
			var Wm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vm,
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
						return Vm;
					default:
						return e
				}
			};
			var Qm = function() {
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
			var $m = function() {
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
			var Km = function() {
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
				zm = Object(S.c)({
					error: Wm,
					lastCreatedSubredditId: $m,
					initialCrosspost: Qm,
					pending: Km
				});
			var Ym = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case od.w:
							return !0;
						case od.x:
						case od.v:
							return !1;
						default:
							return e
					}
				},
				Xm = Object(S.c)({
					pending: Ym
				});
			const Jm = {};
			var Zm = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jm,
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
			const ev = {};
			var tv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev,
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
				nv = Object(S.c)({
					error: Zm,
					pending: tv
				});
			const rv = {};
			var sv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case od.f:
						case od.g:
							return {
								...e, [t.payload.key]: !1
							};
						case od.h:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				av = Object(S.c)({
					pending: sv
				});
			var ov = function() {
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
			var cv = function() {
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
					error: ov,
					pending: cv
				});
			var dv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case od.k: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case od.m:
					case od.l:
						return null;
					default:
						return e
				}
			};
			var uv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case od.m:
							return !0;
						case od.l:
						case od.k:
							return !1;
						default:
							return e
					}
				},
				lv = Object(S.c)({
					error: dv,
					pending: uv
				}),
				pv = n("./src/reddit/actions/subredditRules/constants.ts");
			var fv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case pv.c:
							return !0;
						case pv.a:
						case pv.b:
							return !1;
						default:
							return e
					}
				},
				bv = n("./src/reddit/actions/subredditSettings.ts");
			var hv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case bv.e:
							return !0;
						case bv.f:
						case bv.d:
							return !1;
						default:
							return e
					}
				},
				yv = Object(S.c)({
					pending: hv
				});
			const gv = {};
			var mv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case od.n:
						case od.o:
							return {
								...e, [t.payload.key]: !1
							};
						case od.p:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				vv = Object(S.c)({
					pending: mv
				}),
				Ov = n("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const Ev = {};
			var _v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ev,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ov.c:
					case Ov.b: {
						const n = t.payload,
							{
								subredditName: r
							} = n.options;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Ov.a: {
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
			const Iv = {};
			var Sv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Iv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ov.c: {
							const n = t.payload,
								{
									subredditName: r
								} = n.options;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Ov.b:
						case Ov.a: {
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
				jv = Object(S.c)({
					error: _v,
					pending: Sv
				});
			const wv = {};
			var Tv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case sf.c:
					case sf.b: {
						const {
							subredditName: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case sf.a: {
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
			var Pv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case sf.c: {
							const {
								subredditName: n
							} = t.payload;
							return {
								...e,
								[n.toLowerCase()]: !0
							}
						}
						case sf.b:
						case sf.a: {
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
				Av = Object(S.c)({
					error: Tv,
					pending: Pv
				}),
				Cv = Object(S.c)({
					about: qm,
					create: zm,
					inlineEditing: Xm,
					models: nv,
					onboarding: av,
					productOffers: iv,
					rankings: lv,
					rules: fv,
					settings: yv,
					similar: vv,
					topContent: Av,
					wiki: jv
				}),
				Rv = n("./node_modules/lodash/isNil.js"),
				Nv = n.n(Rv);
			const kv = {};
			var xv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case $.d: {
							const {
								subredditId: n,
								forceState: r
							} = t.payload;
							return {
								...e,
								[n]: Nv()(r) ? !e[n] : r
							}
						}
						default:
							return e
					}
				},
				Lv = Object(S.c)({
					meta: xv
				});
			const Uv = {};
			var Mv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xm.f: {
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
			const Gv = {
				pending: !1,
				items: {}
			};
			var Fv = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gv,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Rp.c:
						return {
							...e, pending: !1, items: {
								...e.items,
								...t.payload
							}
						};
					case Rp.d:
						return {
							...e, pending: !0
						};
					default:
						return e
				}
			};
			const Bv = {};
			var qv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bv,
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
			const Vv = {};
			var Wv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vv,
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
				Qv = n("./src/reddit/actions/subredditCrosspostable.ts");
			var $v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Qv.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Qv.c:
					case Qv.b:
						return null;
					default:
						return e
				}
			};
			var Kv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qv.c:
							return !0;
						case Qv.b:
						case Qv.a:
							return !1;
						default:
							return e
					}
				},
				zv = Object(S.c)({
					errors: $v,
					pending: Kv
				});
			const Yv = {};
			var Xv = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qv.b: {
							const {
								subredditIds: n
							} = t.payload;
							return zu()(e, n) ? e : n
						}
						default:
							return e
					}
				},
				Jv = Object(S.c)({
					api: zv,
					ids: Xv
				});
			const Zv = {};
			var eO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zv,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case hf.a: {
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
							return df(o, {
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
				tO = Object(S.c)({
					models: eO
				});
			const nO = {};
			var rO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nO,
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
			const sO = {};
			var aO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sO,
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
			const oO = {};
			var cO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oO,
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
			const iO = {};
			var dO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iO,
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
				uO = Object(S.c)({
					assets: rO,
					communityRaw: aO,
					distributions: cO,
					releaseNotes: dO
				}),
				lO = n("./node_modules/lodash/isEqualWith.js"),
				pO = n.n(lO),
				fO = n("./src/lib/forceHttps/index.ts");
			const bO = {},
				hO = (e, t) => {
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
				yO = (e, t) => {
					return !pO()(e, t, (e, t, n) => {
						if ("subscribers" === n) return !0
					})
				},
				gO = (e, t) => {
					if (!t) return e;
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					for (let s = 0; s < n.length; s++) {
						const a = n[s],
							o = e[a],
							c = t[a];
						o && !yO(o, c) || (r[a] = {
							...o,
							...c
						})
					}
					return Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var mO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nl.c:
						return hO(e, t.payload.subreddits || {});
					case je.b:
					case je.f:
					case Fy.b:
					case Lm.d:
					case xm.f:
					case _e.f:
					case Bo.g:
					case sd.c:
					case ad.b:
					case we.e:
					case we.h:
					case G.k:
					case Se.r:
					case Se.u:
					case Zu.h:
					case ed.b:
					case F.b:
					case F.f:
					case _e.b:
					case Te.b:
					case B.b:
					case B.e:
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case Pe.b:
					case Pe.e:
					case q.MORE_POSTS_LOADED:
					case q.PROFILE_POSTS_LOADED:
					case Zu.e:
					case V.c:
					case W.SUBREDDIT_LOADED:
					case De.PAGE_LOADED:
					case Un.e:
					case Dr.PAGE_LOADED:
					case Zu.m:
					case Q.b:
					case Q.e:
					case Ae.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ne.e:
					case $.c:
					case $.f:
					case $.i:
					case od.a:
					case od.g:
					case od.o:
					case td.TOPIC_DATA_LOADED:
					case td.MORE_POSTS_LOADED:
					case Xn.B:
						return gO(e, t.payload.subreddits || {});
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
						return gO(e, r)
					}
					case Ne.h: {
						const {
							typeaheadSuggestions: n
						} = t.payload;
						return gO(e, n.subreddits || {})
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
						return gO(e, n)
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
					case bv.f: {
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
					case wm.b: {
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
			var vO = function() {
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
			var OO = function() {
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
			var EO = function() {
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
				_O = Object(S.c)({
					errors: vO,
					fetched: OO,
					pending: EO
				});
			var IO = function() {
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
				SO = Object(S.c)({
					api: _O,
					order: IO
				});
			const jO = {};
			var wO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bv.a: {
						const n = t.payload;
						return Object(N.merge)(e, n)
					}
					case bv.b: {
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
			const TO = {};
			var DO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case od.g: {
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
			const PO = {};
			var AO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PO,
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
			const CO = {};
			var RO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CO,
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
			const NO = {},
				kO = (e, t, n) => {
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
				xO = (e, t, n) => {
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
			var LO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NO,
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
							[n]: kO(s, n, r)
						}
					}
					case Pa.c: {
						const {
							subredditId: n,
							emojiId: r
						} = t.payload, s = e[n];
						return {
							...e,
							[n]: xO(s, n, r)
						}
					}
					default:
						return e
				}
			};
			const UO = {},
				MO = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var GO = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ee.pb: {
							const {
								topSupporters: n,
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: n.sort(MO)
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
								[n]: c.sort(MO)
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
									[n]: [t, ...e[n]].sort(MO)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				FO = n("./src/lib/makeProductOfferKey/index.ts");
			const BO = {};
			var qO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BO,
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
							const r = Object(FO.a)(t.type, n);
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
			var VO = function() {
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
				WO = n("./src/reddit/models/NewCommunityProgress/index.ts");
			const QO = {},
				$O = e => e.filter(e => {
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
						return WO.e.includes(t)
					})
				});
			var KO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case od.y: {
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
						const s = $O(r.cards);
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
			const zO = {};
			var YO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r;
				switch (t.type) {
					case od.y: {
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
					case od.d: {
						const {
							subredditId: n,
							questionId: s
						} = t.payload, a = null !== (r = e[n]) && void 0 !== r ? r : [];
						return Object(N.setIn)(e, [n], a.filter(e => e.id !== s))
					}
					case od.e:
						return zO;
					default:
						return e
				}
			};
			const XO = {};
			var JO = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XO,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case od.b: {
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
			const ZO = {};
			var eE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZO,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case od.c: {
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
				tE = n("./src/reddit/actions/subreddit/relatedSubreddits.ts");
			const nE = {};
			var rE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case tE.a: {
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
			const sE = {};
			var aE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case pv.b: {
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
					case pv.e: {
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
					case pv.f: {
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
					case pv.g:
					case pv.d: {
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
			const oE = {};
			var cE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case bv.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case bv.f: {
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
			var dE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case od.o: {
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
			const uE = {};
			var lE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case od.y: {
						const {
							id: n,
							survey: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case od.z: {
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
			const pE = {};
			var fE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Bo.g: {
						const {
							subredditTopContent: n
						} = t.payload;
						return {
							...e,
							...n.subredditTopContent
						}
					}
					case sf.b: {
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
			const bE = [];
			var hE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bE,
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
			const yE = {};
			var gE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Lm.d:
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
				mE = Object(S.c)({
					about: Mm,
					api: Cv,
					appliedFilters: Lv,
					byCategory: Mv,
					carousel: Fv,
					communityInfo: qv,
					countrySiteSettings: Wv,
					crosspostable: Jv,
					duplicates: tO,
					gov: uO,
					models: mO,
					moderated: SO,
					notificationSettings: wO,
					onboarding: DO,
					powerupRecentSupporters: AO,
					powerups: RO,
					powerupsEmojis: LO,
					powerupTopSupporters: GO,
					productOffers: qO,
					products: VO,
					progressModule: KO,
					questions: YO,
					rankings: JO,
					rankingsPageInfo: eE,
					related: rE,
					rules: aE,
					settings: cE,
					similar: dE,
					survey: lE,
					topContent: fE,
					trending: hE,
					unavailableModels: gE
				});
			const vE = {};
			var OE = Object(wb.a)((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vE,
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
						case Od.o: {
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
				}), vE),
				EE = Object(S.c)({
					data: OE
				}),
				_E = n("./node_modules/lodash/values.js"),
				IE = n.n(_E);
			const SE = [];
			var jE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nl.d: {
						const {
							makeFavorite: n,
							multiredditsModelsState: r,
							multiredditPath: s
						} = t.payload;
						if (n) {
							const t = [...e],
								n = Ju(t, s, (e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(n, 0, s), t
						}
						return e.filter(e => e !== s)
					}
					case Se.u: {
						const {
							multireddits: e
						} = t.payload;
						return IE()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case nl.e: {
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
			var wE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nl.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case nl.b:
					case nl.c:
						return null;
					default:
						return e
				}
			};
			var TE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nl.b:
					case nl.c:
						return !0;
					case nl.a:
						return !1;
					default:
						return e
				}
			};
			var DE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nl.b:
							return !0;
						case nl.c:
						case nl.a:
							return !1;
						default:
							return e
					}
				},
				PE = Object(S.c)({
					errors: wE,
					fetched: TE,
					pending: DE
				});
			const AE = [];
			var CE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nl.c: {
						const {
							profiles: e,
							favoriteProfileIds: n,
							favoriteSubredditIds: r
						} = t.payload;
						let s;
						return (s = n && n.length ? n : r ? r.filter(t => !!e[t]) : []).sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), s
					}
					case nl.f: {
						const {
							makeFavorite: n,
							identifier: r,
							profileModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== _h.a.PROFILE) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = Ju(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case nl.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === _h.a.PROFILE && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const RE = [];
			var NE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nl.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: n
						} = t.payload, r = n ? n.filter(t => !!e[t]) : [];
						return r.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), r
					}
					case nl.f: {
						const {
							makeFavorite: n,
							identifier: r,
							subredditModels: s
						} = t.payload, {
							id: a,
							type: o
						} = r;
						if (o !== _h.a.SUBREDDIT) return e;
						const c = e ? e.slice() : [];
						if (n) {
							const e = Ju(c, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							c.splice(e, 0, a)
						} else {
							const e = c.indexOf(a);
							c.splice(e, 1)
						}
						return c
					}
					case nl.h: {
						const {
							identifiers: n,
							userIsSubscriber: r
						} = t.payload, s = n.filter(t => t.type === _h.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !s.length || r ? e : s.reduce((e, t) => {
							const n = e.indexOf(t.id);
							return e.splice(n, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const kE = [],
				xE = e => (t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1;
			var LE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.u: {
							const {
								multireddits: n
							} = t.payload, r = IE()(n).map(e => {
								let {
									url: t
								} = e;
								return t.toLowerCase()
							}).sort(xE(n));
							return zu()(e, r) ? e : r
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
								i = Xu()(e, o).sort(xE(c));
							return zu()(e, i) ? e : i
						}
						case nl.e: {
							const {
								follow: n,
								multiredditPath: r,
								multiredditsModelsState: s
							} = t.payload;
							return n ? [...e, r].sort(xE(s)) : e.filter(e => e !== r)
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
							return [...e, n.url].sort(xE(s))
						}
						default:
							return e
					}
				},
				UE = n("./node_modules/lodash/difference.js"),
				ME = n.n(UE);
			const GE = [];
			var FE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Zu.n: {
						const {
							profileOrder: n
						} = t.payload;
						return Gf()([...e, ...n])
					}
					case nl.c: {
						const {
							profiles: e
						} = t.payload, n = Object.keys(e);
						return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
					}
					case nl.h: {
						const {
							identifiers: n,
							profileModels: r,
							userIsSubscriber: s
						} = t.payload, a = n.filter(e => e.type === _h.a.PROFILE);
						if (!a.length) return e;
						const o = a.map(e => e.id);
						return s ? Gf()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : ME()(e, o)
					}
					default:
						return e
				}
			};
			const BE = [];
			var qE = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BE,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Zu.n: {
							const {
								subredditOrder: n
							} = t.payload;
							return Gf()([...e, ...n])
						}
						case nl.c: {
							const {
								subreddits: e
							} = t.payload, n = Object.keys(e);
							return n.sort((t, n) => e[t].displayText.toLowerCase() > e[n].displayText.toLowerCase() ? 1 : -1), n
						}
						case nl.h: {
							const {
								identifiers: n,
								subredditModels: r,
								userIsSubscriber: s
							} = t.payload, a = n.filter(e => e.type === _h.a.SUBREDDIT && !!e.id);
							if (!a.length) return e;
							const o = a.map(e => e.id);
							return s ? Gf()([...e, ...o]).sort((e, t) => r[e].displayText.toLowerCase() > r[t].displayText.toLowerCase() ? 1 : -1) : ME()(e, o)
						}
						default:
							return e
					}
				},
				HE = Object(S.c)({
					api: PE,
					favoriteMultiOrder: jE,
					favoriteProfileOrder: CE,
					favoriteSubredditOrder: NE,
					multiredditOrder: LE,
					profileOrder: FE,
					subredditOrder: qE
				}),
				VE = n("./src/reddit/actions/survey/constants.ts");
			var WE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case VE.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var QE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case VE.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var $E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case VE.b:
						return !e;
					default:
						return e
				}
			};
			var KE = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case VE.i:
							return !e;
						default:
							return e
					}
				},
				zE = Object(S.c)({
					activeDemoTrigger: WE,
					demoTriggerThreshold: QE,
					isDemoEnabled: $E,
					isSampleFactorEnabled: KE
				});
			var YE = function() {
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
				XE = n("./src/reddit/actions/tags/constants.ts");
			const JE = {
				pending: !1,
				error: !1
			};
			var ZE = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JE,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case XE.l:
						return {
							...e, pending: !0
						};
					case XE.m:
						return {
							error: !1, pending: !1
						};
					case XE.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const e_ = {
				pending: !1,
				error: !1
			};
			var t_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case XE.o:
						return {
							...e, pending: !0
						};
					case XE.p:
						return {
							error: !1, pending: !1
						};
					case XE.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const n_ = {
				pending: !1,
				error: !1
			};
			var r_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case XE.t:
						return {
							...e, pending: !0
						};
					case XE.s:
					case XE.r:
					case XE.e:
					case XE.j:
						return {
							error: !1, pending: !1
						};
					case XE.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const s_ = {
				pending: !1,
				error: !1
			};
			var a_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s_,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case XE.v:
						return {
							...e, pending: !0
						};
					case XE.w:
						return {
							error: !1, pending: !1
						};
					case XE.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const o_ = {
				pending: !1,
				error: !1
			};
			var c_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case XE.g:
							return {
								...e, pending: !0
							};
						case XE.h:
							return {
								error: !1, pending: !1
							};
						case XE.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				i_ = Object(S.c)({
					create: ZE,
					deleteTag: t_,
					fetch: r_,
					update: a_,
					updatePrimaryTag: c_
				});
			const d_ = {
				global: [],
				recommendedGlobal: []
			};
			var u_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case XE.w:
						case XE.r:
						case XE.e:
						case XE.j: {
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
				l_ = n("./node_modules/lodash/uniqWith.js"),
				p_ = n.n(l_),
				f_ = n("./src/reddit/models/Option/index.ts");
			const b_ = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var h_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case XE.d: {
							const {
								option: n
							} = t.payload;
							return {
								...e,
								selectedOptions: p_()([...e.selectedOptions || [], {
									...n
								}], f_.a)
							}
						}
						case XE.c: {
							const {
								option: n
							} = t.payload, r = e.selectedOptions.findIndex(e => Object(f_.a)(e, n));
							return e.selectedOptions.splice(r, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case XE.b: {
							const {
								input: n
							} = t.payload;
							return {
								...e,
								tagInput: n
							}
						}
						case XE.a: {
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
				y_ = n("./src/reddit/helpers/tags/index.ts");
			const g_ = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var m_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case XE.j: {
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
						case XE.w:
						case XE.s:
						case XE.r: {
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
									[c]: Object(y_.a)(a[c] || {})
								}
							}
						}
						case XE.p: {
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
						case XE.e: {
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
						case XE.h: {
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
				v_ = n("./src/reddit/reducers/tags/selected/index.ts"),
				O_ = Object(S.c)({
					api: i_,
					availableGlobalTagOrder: u_,
					models: m_,
					selected: v_.b,
					creation: h_
				}),
				E_ = n("./src/reddit/actions/redditEmbed.ts"),
				__ = n("./src/reddit/actions/theme.ts"),
				I_ = n("./src/reddit/actions/users.ts"),
				S_ = n("./src/reddit/models/Theme/index.ts");
			const j_ = {
				current: S_.c,
				cached: {}
			};
			var w_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case __.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? S_.b : S_.c,
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
						case E_.b:
						case $.i:
						case Ne.e:
						case V.c:
						case On.j:
						case De.PAGE_LOADED:
						case Dr.PAGE_LOADED:
						case I_.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: S_.b,
									cached: {}
								} : {
									current: S_.c,
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
								current: S_.b,
								cached: {}
							} : {
								current: S_.c,
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
									current: S_.b,
									cached: {}
								} : {
									current: S_.c,
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
								current: S_.b,
								cached: {}
							} : {
								current: S_.c,
								cached: {}
							}
						}
						case f.d:
							return {
								current: S_.c, cached: {}
							};
						case f.e:
							return t.payload.nightmodeTempUpdated ? {
								current: S_.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				T_ = n("./src/reddit/actions/toaster.ts");
			const D_ = [];
			var P_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T_.c: {
							const n = t.payload,
								r = [];
							let s = !1;
							for (const t of e) {
								const e = t.id === n.id ? n : t;
								r.push(e), s = s || e === n
							}
							return s || r.push(n), r
						}
						case T_.b: {
							const n = t.payload;
							return e.filter(e => e.id !== n)
						}
						default:
							return e
					}
				},
				A_ = n("./src/reddit/actions/tooltip.ts");
			var C_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A_.c:
						case A_.b:
						case A_.e:
						case A_.a: {
							const {
								args: e
							} = t.payload;
							return e || null
						}
						default:
							return e
					}
				},
				R_ = n("./src/reddit/components/ModWelcomeTooltip/index.tsx");
			var N_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A_.c: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case A_.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? e : n
						}
						case A_.b: {
							const {
								tooltipId: n
							} = t.payload;
							return null !== e ? e : n || null
						}
						case A_.e: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : e
						}
						case ee.K:
						case A_.d:
						case u.b:
						case Ec.b:
						case Ec.c:
						case Ec.a:
							return t.type === u.b && e === R_.MOD_WELCOME_TOOLTIP_ID ? e : null;
						default:
							return e
					}
				},
				k_ = Object(S.c)({
					params: C_,
					tooltipId: N_
				}),
				x_ = n("./src/reddit/actions/tracing.ts");
			const L_ = {
				traceId: void 0
			};
			var U_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case x_.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				M_ = n("./src/lib/asyncActions/index.ts"),
				G_ = n("./src/reddit/actions/reCaptchaEnterprise.ts");
			const F_ = Object(M_.c)(G_.c.requestedActionType, G_.c.succeededActionType, G_.c.failedActionType),
				B_ = Object(M_.c)(G_.a.requestedActionType, G_.a.succeededActionType, G_.a.failedActionType),
				q_ = Object(M_.c)(G_.d.requestedActionType, G_.d.succeededActionType, G_.d.failedActionType);
			var H_ = Object(S.c)({
					load: F_,
					execute: B_,
					send: q_
				}),
				V_ = n("./src/reddit/actions/tracking.ts");
			const W_ = {};
			var Q_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W_,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V_.a: {
							const {
								routeKey: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case V_.b: {
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
				$_ = Object(S.c)({
					reCaptchaEnterprise: H_,
					viewportDataLoaded: Q_
				}),
				K_ = n("./src/reddit/actions/trafficStats/constants.ts");
			var z_ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case K_.c:
						return !0;
					case K_.b:
					case K_.a:
						return !1;
					default:
						return e
				}
			};
			var Y_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case K_.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case K_.c:
							return null;
						default:
							return e
					}
				},
				X_ = Object(S.c)({
					pending: z_,
					trafficStats: Y_
				});
			var J_ = function() {
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
			var Z_ = function() {
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
				eI = Object(S.c)({
					error: J_,
					pending: Z_
				});
			var tI = function() {
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
			var nI = function() {
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
			var rI = function() {
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
				sI = Object(S.c)({
					api: eI,
					contentId: tI,
					initialRecipient: nI,
					publicAddress: rI
				}),
				aI = Object(S.c)({
					communityPoints: sI
				}),
				oI = n("./src/reddit/actions/search/trending.ts");
			const cI = {};
			var iI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.SUBREDDIT_LOADED:
						case oI.a: {
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
				dI = Object(S.c)({
					models: iI
				});
			var uI = n("./src/reddit/routes/premium/index.ts");
			const lI = {};
			var pI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Yh.a: {
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
				fI = n("./src/reddit/actions/upload.ts"),
				bI = n("./src/reddit/models/Upload/index.ts");
			const hI = {};
			var yI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hI,
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
									status: bI.a.PENDING
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
									status: bI.a.UPLOADING
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
									status: bI.a.SUCCESS,
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
									status: bI.a.FAILED,
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
									status: bI.a.CANCELED
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
				gI = n("./src/reddit/actions/upvotePrompt.ts");
			var mI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gI.a:
						return ++e;
					default:
						return e
				}
			};
			const vI = {};

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
			var EI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l.d:
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
			Object(Ce.a)("INBOX__COUNT_UPDATE");
			var _I = n("./src/reddit/actions/pages/appeal/constants.ts"),
				II = n("./src/reddit/actions/pages/userDataRequest/index.ts"),
				SI = n("./src/reddit/actions/sso/constants.ts"),
				jI = n("./src/reddit/endpoints/profile/info.ts");
			const wI = (e, t) => {
				const {
					gender: n,
					...r
				} = {
					...e
				};
				if (!t || zu()(r, t)) return e;
				const {
					karma: s
				} = t;
				return {
					...t,
					karma: {
						...jI.a,
						...null == r ? void 0 : r.karma,
						...s
					},
					gender: n
				}
			};
			var TI = Object(wb.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, s;
				switch (t.type) {
					case _I.a:
					case _I.b:
					case $y.b:
					case $y.c:
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
					case Zu.l:
					case B.b:
					case B.a:
					case B.e:
					case B.d:
					case H.c:
					case H.i:
					case Pe.e:
					case Pe.d:
					case Pe.b:
					case Pe.a:
					case q.PROFILE_POSTS_LOADED:
					case q.PROFILE_POSTS_FAILED:
					case W.SUBREDDIT_LOADED:
					case V.a:
					case V.c:
					case De.PAGE_LOADED:
					case Dr.PAGE_LOADED:
					case Ne.c:
					case Ne.e:
					case E_.a:
					case E_.b:
					case On.j:
					case II.b:
					case I_.c:
					case td.TOPIC_DATA_LOADED:
						return wI(e, t.payload.account);
					case I_.o:
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
						return n ? wI(e, n.account) : e
					}
					case I_.a:
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
								...jI.a,
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
					case Jl.q: {
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
					case SI.a: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...r, n]
						} : e
					}
					case SI.b: {
						const {
							linkedIdentity: n
						} = t.payload, r = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: r.filter(e => e !== n)
						} : e
					}
					case Lc.c: {
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
					case Sl.a:
					case Sl.b: {
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
					case I_.l: {
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
			var DI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I_.n:
					case I_.o:
						return null;
					case I_.m:
						return t.payload;
					default:
						return e
				}
			};
			var PI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I_.n:
							return !0;
						case I_.o:
						case I_.m:
							return !1;
						default:
							return e
					}
				},
				AI = Object(S.c)({
					error: DI,
					pending: PI
				}),
				CI = Object(S.c)({
					api: AI
				});
			var RI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I_.j:
						return !0;
					default:
						return e
				}
			};
			var NI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I_.i:
							return !0;
						case I_.j:
						case I_.h:
							return !1;
						default:
							return e
					}
				},
				kI = Object(S.c)({
					pending: NI,
					emailSent: RI
				}),
				xI = Object(S.c)({
					api: kI
				}),
				LI = Object(S.c)({
					changeEmail: CI,
					sendResetEmail: xI
				}),
				UI = n("./src/reddit/models/WhitelistAndBlocked.ts");
			const MI = {};
			var GI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MI,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gt.f:
						return {
							...e, new: UI.a.pending
						};
					case gt.d:
						return {
							...e, new: UI.a.error
						};
					case gt.e:
						return {
							...e, new: UI.a.waitingForRequest
						};
					case gt.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: UI.a.pending
						}
					}
					case gt.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: UI.a.error
						}
					}
					case gt.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: UI.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const FI = [];
			var BI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FI,
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
				qI = Object(S.c)({
					api: GI,
					data: BI
				}),
				HI = n("./src/reddit/actions/chat/constants.ts"),
				VI = n("./src/reddit/actions/chat/userSettings.ts");
			const WI = HI.a.anybody;
			var QI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case VI.a:
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
				$I = Object(S.c)({
					invitePolicy: QI
				});
			const KI = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var zI = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case De.PAGE_LOADED: {
						const {
							drafts: n
						} = t.payload;
						return e && zu()(e, n) ? e : {
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
						return KI(e, n)
					}
					case Un.e: {
						const {
							postDraftIds: n
						} = t.payload;
						return KI(e, n.length)
					}
					case Un.c:
					case Un.l: {
						const {
							draftsCount: n
						} = t.payload;
						return KI(e, n)
					}
					default:
						return e
				}
			};
			const YI = {};
			var XI = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Za.a: {
							const e = t.payload.experimentVariants;
							return Rl(e)
						}
						default:
							return e
					}
				},
				JI = n("./src/reddit/actions/global/constants.ts");
			const ZI = {};
			var eS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZI,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case JI.a: {
							const n = t.payload;
							return null === n.local_persisted_experiments_store || void 0 === n.local_persisted_experiments_store ? e : n.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				tS = Object(S.c)({
					byName: XI,
					localPersisted: eS
				});
			var nS = function() {
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
			var rS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case On.j:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const sS = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var aS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I_.b:
							return t.payload;
						default:
							return e
					}
				},
				oS = n("./src/reddit/actions/notifications/constants.ts"),
				cS = n("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var iS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cS.a:
					case cS.d:
					case cS.h:
					case oS.a:
						return t.payload && t.payload.error || null;
					case cS.c:
					case cS.f:
					case cS.j:
					case oS.c:
					case oS.b:
						return null;
					default:
						return e
				}
			};
			var dS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oS.c:
						return !1;
					case oS.b:
						return !0;
					default:
						return e
				}
			};
			var uS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oS.c:
						case cS.j:
							return !0;
						case oS.b:
						case oS.a:
						case cS.i:
						case cS.h:
							return !1;
						default:
							return e
					}
				},
				lS = Object(S.c)({
					error: iS,
					loaded: dS,
					pending: uS
				});
			var pS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oS.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case oS.f:
					case oS.e:
						return null;
					default:
						return e
				}
			};
			var fS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oS.f:
						return !1;
					case oS.e:
						return !0;
					default:
						return e
				}
			};
			var bS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oS.f:
							return !0;
						case oS.e:
						case oS.d:
							return !1;
						default:
							return e
					}
				},
				hS = Object(S.c)({
					error: pS,
					loaded: fS,
					pending: bS
				}),
				yS = Object(S.c)({
					getPreferences: lS,
					setPreferences: hS
				});
			const gS = {
				byId: {},
				allIds: []
			};
			var mS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cS.b: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case cS.g: {
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
			const vS = {
				byId: {},
				allIds: []
			};
			var OS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cS.b: {
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
				ES = Object(S.c)({
					sections: OS,
					rows: mS
				}),
				_S = n("./src/lib/notifications/constants.ts");
			var IS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _S.j:
						return !0;
					case _S.b:
					case _S.d:
					case _S.e:
						return !1;
					default:
						return e
				}
			};
			const SS = {
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
			var jS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case oS.b:
					case oS.f:
					case oS.d: {
						const {
							preferences: n
						} = t.payload;
						return ua()(n) ? e : n
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
					case cS.e: {
						const {
							rows: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case cS.g: {
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
			const DS = {
				byId: {},
				allIds: []
			};
			var PS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cS.e: {
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
				AS = Object(S.c)({
					sections: PS,
					rows: TS
				});
			var CS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case cS.i:
						return t.payload && t.payload.pageInfo;
					default:
						return e
				}
			};
			const RS = [];
			var NS = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RS,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case cS.i: {
							const n = t.payload && t.payload.nodes;
							return [...e, ...n]
						}
						case cS.k: {
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
				kS = Object(S.c)({
					subreddits: NS,
					pageInfo: CS
				}),
				xS = Object(S.c)({
					api: yS,
					subscribedSubredditsSettings: kS,
					emailSettingsLayout: ES,
					isNotificationPromptVisible: IS,
					preferences: jS,
					pushSettingsLayout: AS
				});
			const LS = {};
			var US = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LS,
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
			const MS = {},
				GS = (e, t) => `${e}_${t||new Date}`;
			var FS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.Ab: {
						const n = t.payload.powerups;
						if (n) {
							const {
								allocation: t
							} = n, r = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[GS(t.subredditInfo.id, t.allocatedAt)]: t
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
							[GS(t.subredditInfo.id, t.allocatedAt)]: t
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
							const t = GS(n, s),
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
						} = t.payload, s = GS(n, r), a = e[s];
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
			var BS = function() {
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
			var qS, HS = function() {
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
				VS = Object(S.c)({
					allocationByKey: FS,
					data: BS,
					fetched: HS
				}),
				WS = n("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(qS || (qS = {}));
			const QS = {
				status: qS.UNFETCHED,
				subscriptions: []
			};
			var $S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QS,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.Eb:
						return {
							...e, status: qS.PENDING
						};
					case ee.Db: {
						const {
							subscriptions: n
						} = t.payload;
						return n ? {
							...e,
							subscriptions: n,
							status: qS.LOADED
						} : e
					}
					case ee.Cb:
						return {
							...e, status: qS.FAILED
						};
					default:
						return e
				}
			};
			var KS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I_.d:
						return t.payload;
					default:
						return e
				}
			};
			var zS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case By.a:
					case By.b:
					case By.c:
					case By.e:
						return t.payload;
					case By.d:
						return null;
					default:
						return e
				}
			};
			var YS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case By.f:
						return !0;
					default:
						return e
				}
			};
			var XS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I_.k:
						return t.payload;
					default:
						return e
				}
			};
			var JS = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Za.a: {
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
						case Za.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				ej = Object(S.c)({
					isEmployee: JS,
					isLoggedIn: ZS
				});
			var tj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case On.r: {
							const {
								topContentDismissal: n
							} = t.payload;
							return e && zu()(e, n) ? e : {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				nj = n("./src/reddit/actions/userWhitelist.ts");
			const rj = {};
			var sj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case nj.e:
						return {
							...e, new: UI.a.pending
						};
					case nj.d:
						return {
							...e, new: UI.a.error
						};
					case nj.f:
						return {
							...e, new: UI.a.waitingForRequest
						};
					case nj.b: {
						const n = t.payload.name;
						return {
							...e,
							[n]: UI.a.pending
						}
					}
					case nj.a: {
						const n = t.payload.name;
						return {
							...e,
							[n]: UI.a.error
						}
					}
					case nj.c: {
						const n = t.payload.name;
						return {
							...e,
							[n]: UI.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const aj = [];
			var oj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case nj.f:
							return [t.payload, ...e];
						case nj.c: {
							const n = t.payload.name;
							return e.filter(e => e.name !== n)
						}
						case On.j:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				cj = Object(S.c)({
					api: sj,
					data: oj
				}),
				ij = Object(S.c)({
					account: TI,
					accountSettings: LI,
					blocked: qI,
					chatSettings: $I,
					drafts: zI,
					experiments: tS,
					isCustomizeFlyoutShowing: nS,
					topContentDismissalPrefsSet: tj,
					language: rS,
					loid: aS,
					notificationPrefs: xS,
					ownedBadges: US,
					powerups: VS,
					prefs: WS.c,
					productOfferSubscriptions: $S,
					reddaid: KS,
					session: zS,
					sessionRefreshFailed: YS,
					sessionTracker: XS,
					temporaryGQL: ej,
					wallets: EI,
					whitelist: cj
				});
			var dj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case II.a:
						return t.payload || null;
					case II.b:
					case II.c:
						return null;
					default:
						return e
				}
			};
			var uj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var lj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case II.b:
						return !0;
					case II.a:
					case II.c:
						return !1;
					default:
						return e
				}
			};
			var pj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case II.b:
							return t.payload.userDataExportEligibility;
						case II.a:
						case II.c:
							return !1;
						default:
							return e
					}
				},
				fj = Object(S.c)({
					error: dj,
					pending: uj,
					success: lj,
					userDataExportEligibility: pj
				}),
				bj = Object(S.c)({
					userDataRequestPageApi: fj
				});
			const hj = {};
			var yj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I_.g:
					case I_.f: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n.toLowerCase()]: null
						}
					}
					case I_.e: {
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
			var gj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I_.g:
							return !0;
						case I_.f:
						case I_.e:
							return !1;
						default:
							return e
					}
				},
				mj = Object(S.c)({
					error: yj,
					pending: gj
				});
			const vj = {};
			var Oj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vj,
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
			const Ej = {},
				_j = (e, t) => {
					const n = Object.keys(t);
					if (!n.length) return e;
					const r = {};
					return n.forEach(n => {
						const s = e[n],
							a = t[n];
						s && zu()(s, a) || (r[n.toLowerCase()] = a)
					}), Object.keys(r).length ? {
						...e,
						...r
					} : e
				};
			var Ij = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ej,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I_.f: {
							const {
								data: n
							} = t.payload;
							return _j(e, n)
						}
						case Zu.k: {
							const {
								user: n
							} = t.payload;
							return _j(e, {
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
							return o ? _j(e, {
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
								...jI.a,
								...r
							};
							return _j(e, {
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
							return o ? _j(e, {
								[a]: {
									...o,
									accountIcon: n
								}
							}) : e
						}
						case I_.c:
							const n = t.payload.account;
							if (!n || !e) return e;
							const r = Object(z.e)(n).toLowerCase(),
								s = e[r];
							return s ? _j(e, {
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
							return a ? _j(e, {
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
				Sj = n("./src/reddit/actions/usernameAvailable.ts");
			const jj = {};
			var wj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jj,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Sj.a: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: Sj.b.Available
						}
					}
					case Sj.c: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: Sj.b.Error
						}
					}
					case Sj.d: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: Sj.b.Pending
						}
					}
					case Sj.e: {
						const {
							username: n
						} = t.payload;
						return {
							...e,
							[n]: Sj.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const Tj = {};
			var Dj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tj,
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
			var Pj = function() {
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
				Aj = Object(S.c)({
					allocationByKey: Dj,
					fetched: Pj
				});
			var Cj = function() {
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
			var Rj = function() {
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
				Nj = Object(S.c)({
					error: Cj,
					pending: Rj
				});
			var kj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ee.yb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const xj = {};
			var Lj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xj,
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
			const Uj = {};
			var Mj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uj,
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
				Gj = Object(S.c)({
					api: Nj,
					currentPostId: kj,
					currentRank: Lj,
					list: Mj
				}),
				Fj = Object(S.c)({
					api: mj,
					appliedBadges: Oj,
					models: Ij,
					nameAvailable: wj,
					topAwarders: Gj,
					powerups: Aj
				});
			const Bj = {};
			var qj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r, s;
					switch (t.type) {
						case F.b:
						case F.f:
						case W.SUBREDDIT_LOADED:
						case $.i:
						case V.c:
						case De.PAGE_LOADED:
						case Dr.PAGE_LOADED: {
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
				Hj = n("./src/reddit/actions/widgets/constants.ts");
			const Vj = {};
			var Wj = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vj,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case F.b:
						case F.f:
						case V.c:
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
				Qj = n("./src/reddit/helpers/widgets/index.tsx");
			const $j = {};
			var Kj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $j,
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
					case f.k: {
						const t = {
							...e
						};
						return Object.keys(t).forEach(e => {
							t[e] = {
								...t[e],
								styles: Object(Qj.g)()
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
					case V.c:
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
					case nl.h: {
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
					case bv.f: {
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
			const zj = {};
			var Yj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zj,
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
			const Xj = {};
			var Jj = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xj,
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
					case V.c:
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
			const Zj = {
				accountManagerModalData: a,
				activeModal: h,
				ads: O,
				apiRequestState: I,
				appBadges: C,
				authorFlair: Z,
				awards: $e,
				badges: it,
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
				economics: Va,
				emojis: Ja,
				experimentOverrides: ro,
				externalAccount: No,
				featureFlags: Fo,
				focusedVerticals: Zo,
				fontFiles: tc,
				gild: bc,
				header: Ic,
				htmlResponseStreaming: Sc,
				imageUploads: Tc,
				inAppNotifications: Nc,
				interceptedAction: xc,
				isChangeUsernameTooltipShowing: Uc,
				isEmailVerificationTooltipShowing: Gc,
				isModeratorWithPostPerms: Bc,
				jsApi: Vc,
				langSite: $c,
				leaderboard: ni,
				listings: Cd,
				live: Ld,
				mediaEmbed: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Md,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ud.a:
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
				mediaGalleries: Hd,
				mediaPlayback: Qd,
				meta: zd,
				moderatingSubreddits: Jd,
				modListingPage: au,
				modModeEnabled: cu,
				moreComments: hu,
				multireddits: il,
				notificationBannerId: ul,
				notificationsInbox: Ol,
				nps: Il,
				onboarding: Al,
				page: Ll,
				platform: ql,
				postCollection: jp,
				polls: fp,
				postFlair: Cp,
				posts: jb,
				postStickiedComments: Pb,
				givePremium: vc,
				products: Vb,
				profileCommentsPage: ah,
				profilePrivatePage: Eh,
				profileModSettingsPage: dh,
				profilePostsPage: lh,
				profiles: ty,
				promos: oy,
				publicAccessNetwork: Gy,
				recentSubreddits: Vy,
				recommendations: Qy,
				reportPage: ng,
				reportRules: ag,
				requestHost: og,
				runTimeEnvVars: dg,
				search: Eg,
				searchDiscoveryUnits: Pg,
				searchQueryId: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cg,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ag.a:
							return t.payload;
						case Ag.b:
							return Cg;
						default:
							return e
					}
				},
				seo: Gg,
				shortcuts: Kg,
				sidebarPromotedPosts: Xg,
				streaming: am,
				structuredStyles: Sm,
				stylesheets: jm,
				subredditAutocomplete: km,
				subreddits: mE,
				subredditStickyPosts: EE,
				subscriptions: HE,
				survey: zE,
				tabBadged: YE,
				tags: O_,
				themes: w_,
				toaster: P_,
				tooltip: k_,
				tracing: U_,
				tracking: $_,
				trafficStats: X_,
				transfers: aI,
				trending: dI,
				trophies: pI,
				uploads: yI,
				user: ij,
				userDataRequestPage: bj,
				upvotePromptCountPerSess: mI,
				users: Fj,
				widgets: Object(S.c)({
					idCardIds: qj,
					menuIds: Wj,
					models: Kj,
					moderatorIds: Yj,
					sidebar: Jj
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
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
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
			const i = (e, t) => {
				var n, r, s;
				return t ? null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === s ? void 0 : s[t] : void 0
			};

			function d() {
				const e = Object(s.eb)(),
					t = Object(r.e)(t => Object(s.r)(t, {
						pageLayer: e
					})),
					n = Object(r.e)(e => i(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const u = (e, t) => {
				var n;
				const r = null === (n = i(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
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
				u = e => e.emojis.models,
				l = Object(a.a)(u, (e, t) => t.subredditId, (e, t) => {
					const n = e[t];
					return n ? [...s()(n.emojis), ...s()(n.snoomojis)] : d
				}),
				p = Object(a.a)(l, c.c, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, n, r) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !n) && (!(!e.userFlairAllowed && r === o.d.UserFlair) && !(!e.postFlairAllowed && r === o.d.LinkFlair)))),
				f = Object(a.a)(u, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				b = (e, t) => Object(i.w)(e, {
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
				experimentName: r.kc
			}), e => e === r.pd)
		},
		"./src/reddit/selectors/removedPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				o = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				c = n("./src/reddit/models/Media/index.ts"),
				i = n("./src/reddit/models/Post/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const u = new Set([i.g.AntiEvilOps, i.g.AutomodFiltered, i.g.CommunityOps, i.g.ContentTakedown, i.g.CopyrightTakedown, i.g.Moderator, i.g.Reddit]),
				l = new Set([i.g.Author, i.g.AuthorDeleted]),
				p = Object(s.a)(a.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
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
						return l.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const n = r.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let s = Object(o.b)(e);
					return s || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== c.o.TEXT || (s = e.media.markdownContent), s === n
				}),
				b = Object(s.a)(d.k, a.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId)
		},
		"./src/reddit/selectors/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return o
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "q", (function() {
				return b
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
						type: a.f.standalonePosts
					})
				},
				c = (e, t) => {
					let {
						subredditId: n,
						type: r
					} = t;
					return !!e.posts.scheduledPosts[r].pageInfo[n] && e.posts.scheduledPosts[r].pageInfo[n].hasNextPage
				},
				i = (e, t) => {
					let {
						subredditId: n,
						type: r
					} = t;
					return e.posts.scheduledPosts[r].pageInfo[n] ? e.posts.scheduledPosts[r].pageInfo[n].endCursor : null
				},
				d = e => e.posts.scheduledPosts.api.pending,
				u = e => e.posts.scheduledPosts.api.pendingUpdate,
				l = e => e.posts.scheduledPosts.api.error,
				p = {},
				f = [],
				b = (e, t) => {
					let {
						subredditId: n
					} = t;
					return (e.posts.scheduledPosts.standalonePosts.postOrder[n] || f).filter(t => !!(e.posts.scheduledPosts.standalonePosts.models[n] || p)[t]).map(t => e.posts.scheduledPosts.standalonePosts.models[n][t])
				},
				h = (e, t) => {
					let {
						subredditId: n
					} = t;
					return (e.posts.scheduledPosts.recurringPosts.postOrder[n] || f).filter(t => !!(e.posts.scheduledPosts.recurringPosts.models[n] || p)[t]).map(t => e.posts.scheduledPosts.recurringPosts.models[n][t])
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
						type: a.f.standalonePosts
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
						type: a.f.recurringPosts
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
				I = e => e.posts.scheduledPosts[a.f.recurringPosts].editModal.scheduledPostId,
				S = e => e.posts.scheduledPosts[a.f.recurringPosts].editModal.subredditId,
				j = e => e.posts.scheduledPosts.api.pendingUpdate,
				w = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/reddit/selectors/upvotePrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/models/User/index.ts"),
				a = n("./src/reddit/models/Vote/index.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const i = 5e3,
				d = 12e3,
				u = 6 * r.pb,
				l = (e, t) => {
					const n = Object(o.G)(e, t),
						r = Object(c.O)(e);
					let i = !1;
					const d = Object(c.k)(e);
					if (d) {
						i = (Object(s.d)(d) || (new Date).getTime()) > (new Date).getTime() - u
					}
					const l = n && !n.isArchived && (1 === (null == n ? void 0 : n.score) || 0 === (null == n ? void 0 : n.score)) && (null == n ? void 0 : n.voteState) === a.a.notVoted;
					return r && i && l
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.38846362647c451568dd.js.map