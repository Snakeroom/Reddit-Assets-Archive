// https://www.redditstatic.com/desktop2x/Governance~Reddit.116e632d4849f885c959.js
// Retrieved at 6/22/2021, 1:00:05 PM by Reddit Dataminer v1.0.0
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
				var h = t.postMessage = function(e, t, r) {
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
					O = (t.receiveMessageOnce = function(e, t, s, a) {
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
					E(e) ? i = [s] : -1 === i.indexOf(e) && (O(s), i.push(e), u = d(i))
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
								return h(e, s, r.data, r.options)
							}));
							var n = new I(s, {
								detail: r.data
							});
							n.source = t.source, e.dispatchEvent(n)
						}
					}
				}
				var v = t.listen = function(e) {
					-1 === l.indexOf(e) && (l.push(e), p = o(l)), f || (y("message", S), f = !0)
				};
				t.stopListening = function(e) {
					var t = l.indexOf(e); - 1 !== t && (l.splice(t, 1), l.length ? p = o(l) : (m("message", S), f = !1))
				}, t.proxy = function(e, t) {
					v(e), Array.isArray(t) || (t = [t]);
					var r = b[e];
					r ? r.targets = [].concat(r.targets, t) : r = {
						targets: t
					}, b[e] = r
				}
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isPseudoLocale = t.isISOLocaleSupported = t.toISOLocale = t.isoLocaleToR2Language = void 0;
			const s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				a = new Set([{
					code: "en",
					label: "English [en]"
				}, {
					code: "af",
					label: "Afrikaans [af] (*)"
				}, {
					code: "ar",
					label: "العربية [ar] (*)"
				}, {
					code: "be",
					label: "Беларуская мова [be] (*)"
				}, {
					code: "bg",
					label: "български език [bg]"
				}, {
					code: "bn-IN",
					label: "বাংলা [bn-IN] (*)"
				}, {
					code: "bn-bd",
					label: "বাংলা [bn-bd] (*)"
				}, {
					code: "bs",
					label: "Bosanski [bs] (*)"
				}, {
					code: "ca",
					label: "català [ca]"
				}, {
					code: "cs",
					label: "česky [cs]"
				}, {
					code: "cy",
					label: "Cymraeg [cy] (*)"
				}, {
					code: "da",
					label: "dansk [da]"
				}, {
					code: "de",
					label: "Deutsch [de]"
				}, {
					code: "el",
					label: "Ελληνικά [el]"
				}, {
					code: "en-au",
					label: "English (Australia) [en-au]"
				}, {
					code: "en-ca",
					label: "English (Canadian) [en-ca]"
				}, {
					code: "en-gb",
					label: "English (Great Britain) [en-gb]"
				}, {
					code: "en-us",
					label: "English [en-us]"
				}, {
					code: "eo",
					label: "Esperanto [eo] (*)"
				}, {
					code: "es",
					label: "español [es]"
				}, {
					code: "es-ar",
					label: "español [es-ar]"
				}, {
					code: "es-cl",
					label: "español [es-cl]"
				}, {
					code: "es-mx",
					label: "Español [es-mx]"
				}, {
					code: "et",
					label: "eesti keel [et] (*)"
				}, {
					code: "eu",
					label: "Euskara [eu]"
				}, {
					code: "fa",
					label: "فارسی [fa]"
				}, {
					code: "fi",
					label: "suomi [fi]"
				}, {
					code: "fil",
					label: "Filipino [fil] (*)"
				}, {
					code: "fr",
					label: "français [fr]"
				}, {
					code: "fr-ca",
					label: "Français [fr-ca]"
				}, {
					code: "fy-NL",
					label: "Frysk [fy-NL] (*)"
				}, {
					code: "ga-ie",
					label: "Gaeilge [ga-ie] (*)"
				}, {
					code: "gd",
					label: "Gàidhlig [gd]"
				}, {
					code: "gl",
					label: "Galego [gl] (*)"
				}, {
					code: "he",
					label: "עברית [he] (*)"
				}, {
					code: "hi",
					label: "मानक हिन्दी [hi] (*)"
				}, {
					code: "hr",
					label: "hrvatski [hr]"
				}, {
					code: "hu",
					label: "Magyar [hu]"
				}, {
					code: "hy",
					label: "Հայերեն լեզու [hy]"
				}, {
					code: "id",
					label: "Bahasa Indonesia [id] (*)"
				}, {
					code: "is",
					label: "íslenska [is]"
				}, {
					code: "it",
					label: "italiano (Italy) [it]"
				}, {
					code: "ja",
					label: "日本語 [ja]"
				}, {
					code: "kn_IN",
					label: "ಕನ್ನಡ [kn_IN]"
				}, {
					code: "ko",
					label: "한국어 [ko]"
				}, {
					code: "la",
					label: "Latin [la] (*)"
				}, {
					code: "leet",
					label: "1337 [leet]"
				}, {
					code: "lol",
					label: "LOL [lol]"
				}, {
					code: "lt",
					label: "lietuvių kalba [lt] (*)"
				}, {
					code: "lv",
					label: "latviešu valoda [lv]"
				}, {
					code: "ms",
					label: "Bahasa Melayu [ms] (*)"
				}, {
					code: "mt-MT",
					label: "Malti [mt-MT]"
				}, {
					code: "nl",
					label: "Nederlands [nl]"
				}, {
					code: "nn",
					label: "Nynorsk [nn]"
				}, {
					code: "no",
					label: "Norsk [no]"
				}, {
					code: "pir",
					label: "Arrrrrrrr! [pir] (*)"
				}, {
					code: "pl",
					label: "polski [pl]"
				}, {
					code: "pt",
					label: "português [pt] (*)"
				}, {
					code: "pt-pt",
					label: "português [pt-pt]"
				}, {
					code: "pt_BR",
					label: "português brasileiro [pt_BR]"
				}, {
					code: "ro",
					label: "română [ro]"
				}, {
					code: "ru",
					label: "русский [ru]"
				}, {
					code: "sk",
					label: "slovenčina [sk]"
				}, {
					code: "sl",
					label: "slovenščina [sl] (*)"
				}, {
					code: "sr",
					label: "српски језик [sr]"
				}, {
					code: "sr-la",
					label: "Srpski [sr-la]"
				}, {
					code: "sv",
					label: "Svenska [sv]"
				}, {
					code: "ta",
					label: "தமிழ் [ta]"
				}, {
					code: "th",
					label: "ภาษาไทย [th]"
				}, {
					code: "tr",
					label: "Türkçe [tr]"
				}, {
					code: "uk",
					label: "українська мова [uk]"
				}, {
					code: "vi",
					label: "Tiếng Việt [vi]"
				}, {
					code: "zh",
					label: "中文 [zh]"
				}, {
					code: "zh-cn",
					label: "简化字 [zh-cn]"
				}].map(({
					code: e
				}) => e)),
				n = {
					af: ["af"],
					ar: ["ar"],
					be: ["be-BY"],
					bg: ["bg-BG"],
					"bn-IN": ["bn-IN"],
					"bn-bd": ["bn-bd"],
					bs: ["bs"],
					ca: ["ca-ES"],
					cs: ["cs-CZ"],
					cy: ["cy"],
					da: ["da-DK"],
					de: ["de", "de-DE"],
					el: ["el-GR"],
					en: ["en"],
					"en-au": ["en-AU"],
					"en-ca": ["en-CA"],
					"en-gb": ["en-GB"],
					"en-us": ["en-US"],
					eo: ["eo"],
					es: ["es", "es-ES"],
					"es-ar": ["es-AR"],
					"es-cl": ["es-CL"],
					"es-mx": ["es-MX"],
					et: ["et-EE"],
					eu: ["eu-ES"],
					fa: ["fa-IR"],
					fi: ["fi-FI"],
					fil: ["fil"],
					fr: ["fr", "fr-FR"],
					"fr-ca": ["fr-CA"],
					"fy-NL": ["fy-NL"],
					"ga-ie": ["ga-IE"],
					gd: ["gd"],
					gl: ["gl-ES"],
					he: ["he-IL"],
					hi: ["hi-IN"],
					hr: ["hr-HR"],
					hu: ["hu-HU"],
					hy: ["hy-AM"],
					id: ["id-ID"],
					is: ["is-IS"],
					it: ["it", "it-IT"],
					ja: ["ja-JP"],
					kn_IN: ["kn-IN"],
					ko: ["ko-KR"],
					la: ["la"],
					leet: ["leet"],
					lol: ["lol"],
					lt: ["lt-LT"],
					lv: ["lv-LV"],
					ms: ["ms"],
					"mt-MT": ["mt-MT"],
					nl: ["nl-NL"],
					nn: ["nn-NO"],
					no: ["no"],
					pir: ["pir"],
					pl: ["pl-PL"],
					pt: ["pt"],
					"pt-pt": ["pt-PT"],
					pt_BR: ["pt-BR"],
					ro: ["ro-RO"],
					ru: ["ru-RU"],
					sk: ["sk-SK"],
					sl: ["sl-SI"],
					sr: ["sr"],
					"sr-la": ["sr-LA"],
					sv: ["sv"],
					ta: ["ta-IN"],
					th: ["th-TH"],
					tr: ["tr-TR"],
					uk: ["uk-UA"],
					vi: ["vi-VN"],
					zh: ["zh"],
					"zh-cn": ["zh-CN"]
				},
				c = Object.keys(n).reduce((e, t) => (a.has(t) && (e[t] = n[t]), e), {}),
				o = Object.keys(c).reduce((e, t) => {
					const r = c[t];
					return r && r.forEach(r => {
						e[r] = t
					}), e
				}, {});
			t.isoLocaleToR2Language = e => o[e], t.toISOLocale = e => {
				if (!e) return;
				const t = e.match(/^([a-zA-Z]{2,4})(?:[-_]([a-zA-Z]{2,4}))?$/);
				if (!t) return;
				const r = t[1];
				if (!r) return;
				let s = r.toLowerCase();
				const a = t[2];
				return a && (s = `${s}-${a.toUpperCase()}`), s
			};
			const d = new Set(Object.keys(o));
			t.isISOLocaleSupported = e => !!e && d.has(e);
			const i = new Set([s.PSEUDO_LONG_LOCALE, s.PSEUDO_SHORT_LOCALE, s.PSEUDO_EXT_LOCALE]);
			t.isPseudoLocale = e => !!e && i.has(e)
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
		"./src/reddit/actions/accountGender/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			}));
			const s = "ACCOUNT_GENDER_LOADED",
				a = "ACCOUNT_GENDER_UPDATED"
		},
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
				return _
			})), r.d(t, "j", (function() {
				return O
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/governance/errorToast.ts"),
				n = r("./src/reddit/endpoints/governance/badges.ts");
			const c = "BADGE__BADGE_APPLICATION_SUCCESS",
				o = "BADGE__BADGE_APPLICATION_FAILURE",
				d = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				i = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				u = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				l = "BADGE__USER_BADGES_FETCH_SUCCESS",
				p = "BADGE__USER_BADGES_FETCH_FAILURE",
				b = "BADGE__USER_BADGES_FETCH_PENDING",
				f = Object(s.a)(c),
				y = Object(s.a)(o),
				m = (Object(s.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(s.a)(d)),
				E = Object(s.a)(i),
				h = Object(s.a)(u),
				_ = (Object(s.a)(l), Object(s.a)(p), Object(s.a)(b), ({
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
						const l = await Object(n.a)(c(), t, i, u);
						l.ok || (r(y({
							badgeIds: e,
							subredditId: t,
							error: l.error,
							previousBadgeIds: s,
							userId: d.id
						})), Object(a.a)(r, l.error))
					}
				}),
				O = ({
					subredditId: e,
					userIds: t
				}) => async (r, s, {
					apiContext: a
				}) => {
					r(h({
						subredditId: e
					}));
					const c = await Object(n.b)(a(), e, t);
					c.ok ? r(m({
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
				return h
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
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
				h = () => async (e, t, {
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
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			}));
			var s, a = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.anybody = "Everyone", e.account_age_30_days = "Accounts older than 30 days", e.nobody = "Nobody"
			}(s || (s = {}));
			const n = {
					[s.anybody]: () => a.fbt._("Everyone", null, {
						hk: "YHmqV"
					}),
					[s.account_age_30_days]: () => a.fbt._("Accounts older than 30 days", null, {
						hk: "1g4Gwx"
					}),
					[s.nobody]: () => a.fbt._("Nobody", null, {
						hk: "2m0XS"
					})
				},
				c = e => {
					const t = n[e];
					return t && t()
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
				h = Object(a.a)(E),
				_ = () => async (e, t, {
					apiContext: r
				}) => {
					e(y());
					const s = await (e => Object(d.a)(Object(i.a)(e, [u.a]), {
						endpoint: `${c.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
						method: o.hb.GET
					}))(r());
					if (s.ok) {
						const t = {
							...s.body
						};
						e(h({
							invitePolicy: f.a[t.invite_policy]
						}))
					} else e(m(s.error))
				}, O = Object(a.a)("USER_SETTINGS__SAVE_PENDING"), I = Object(a.a)("USER_SETTINGS__SAVE_FAILURE"), g = e => async (t, r, {
					apiContext: a
				}) => {
					const y = r(),
						{
							invitePolicy: m
						} = e,
						E = Object.keys(f.a).find(e => f.a[e] === m);
					if (E) {
						t(O());
						const e = await (async (e, t) => Object(d.a)(Object(i.a)(t, [u.a]), {
							endpoint: `${c.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
							method: o.hb.PUT,
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
							t(h({
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
				return O
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "h", (function() {
				return T
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
					method: o.hb.POST,
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
				h = Object(a.a)(m),
				_ = () => async (e, t) => {
					const r = t();
					Object(f.b)(r) ? e(h()) : e(E())
				}, O = "CLAIMGOLD_UPDATE_CODE", I = Object(a.a)(O), g = "CLAIM_GOLD__TRIGGER_LOADER", S = "CLAIM_GOLD__CLAIM_GOLD_PENDING", v = "CLAIM_GOLD__CLAIM_GOLD_SUCCESSFUL", D = "CLAIM_GOLD__CLAIM_GOLD_FAILED", T = () => async (e, t, {
					apiContext: r
				}) => {
					const s = {
						code: t().claimGold.code
					};
					e(A());
					try {
						const t = await p(r(), s);
						t.error ? e(C(t)) : e(L())
					} catch (a) {
						e(C(a))
					}
				}, w = Object(a.a)(g), j = Object(a.a)(S), A = () => async (e, t) => {
					e(j()), window.setTimeout(() => {
						t().claimGold.api.pending && e(w())
					}, 2e3)
				}, R = Object(a.a)(D), C = e => async (t, r) => {
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
				}, P = Object(a.a)(v), L = () => async (e, t) => {
					e(P()), e(Object(n.f)({
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
		"./src/reddit/actions/economics/powerups/achievements.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return v
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "c", (function() {
				return T
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var i = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/lib/initializeClient/installReducer.ts"),
				l = r("./src/reddit/reducers/features/powerups/index.ts"),
				p = r("./src/reddit/actions/gold/powerups.ts"),
				b = r("./src/reddit/actions/toaster.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/selectors/gold/powerups/index.ts"),
				m = r("./src/reddit/selectors/gold/powerups/achievements.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/actions/economics/powerups/constants.ts");
			Object(u.a)({
				features: {
					powerups: l.a
				}
			});
			const _ = Object(a.a)(h.d),
				O = Object(a.a)(h.f),
				I = Object(a.a)(h.g),
				g = Object(a.a)(h.e),
				S = (e, t) => async (r, s, {
					gqlContext: a
				}) => {
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = await (async (e, t, r) => {
							const s = await Object(c.a)(e, {
								...o,
								variables: {
									subredditId: t,
									redditorIds: r
								}
							});
							if (!s.ok) throw new Error("Unable to fetch user achievements");
							return s.body.data.subredditInfoById
						})(a(), e, d);
						await r(_(t))
					} catch (i) {
						n.c.captureException(i)
					}
				}, v = (e, t) => async (r, s) => {
					if (!e) return;
					const a = s(),
						n = Object(E.j)(a);
					if (!n || !Object(y.f)(a, {
							subredditId: e
						}) || !Object(i.h)(a)) return;
					const c = !!Object(m.b)(a, {
						subredditId: e,
						userId: n.id
					});
					!t && c || await r(S(e, [n.id]))
				}, D = (e, t) => async (r, s) => {
					if (!e) return;
					await r(Object(p.i)(e, {
						fullData: !0
					}));
					const a = s();
					if (!Object(y.f)(a, {
							subredditId: e
						}) || !t || !Object(i.h)(a)) return;
					const n = new Set;
					Object.values(t).forEach(e => {
						n.add(e.authorId)
					}), await r(S(e, Array.from(n)))
				}, T = (e, t) => async (r, a, {
					gqlContext: o
				}) => {
					const i = a(),
						u = Object(E.j)(i);
					if (!u) return;
					const l = {
						subredditId: e,
						userId: u.id,
						achievementType: t
					};
					r(O(l));
					try {
						await (async (e, t, r) => {
							if (!(await Object(c.a)(e, {
									...d,
									variables: {
										subredditId: t,
										achievementType: r
									}
								})).ok) throw new Error("Unable to update the preferred achievement flair")
						})(o(), l.subredditId, l.achievementType), r(I(l))
					} catch (p) {
						r(g(l)), n.c.captureException(p), r(Object(b.f)({
							duration: b.a,
							kind: f.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/emoji.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return S
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "h", (function() {
				return A
			})), r.d(t, "g", (function() {
				return R
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "q", (function() {
				return M
			})), r.d(t, "p", (function() {
				return F
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
				a = r("./node_modules/lodash/forEach.js"),
				n = r.n(a),
				c = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/lib/uploadToS3/index.ts"),
				u = r("./src/reddit/constants/headers.ts");
			const l = async (e, t) => Object(o.a)(Object(d.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/api/v1/${t}/emojis/all`,
				method: c.hb.GET,
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
				h = r("./src/reddit/models/Emoji/index.ts"),
				_ = r("./src/reddit/models/Image/index.tsx"),
				O = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/emojis.ts"),
				g = r("./src/reddit/selectors/subreddit.ts");
			const S = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				v = Object(p.a)(S),
				D = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				T = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				w = Object(p.a)(D),
				j = Object(p.a)(T),
				A = "GET_ALL_EMOJIS_PENDING",
				R = "GET_ALL_EMOJIS_LOADED",
				C = "GET_ALL_EMOJIS_FAILED",
				P = Object(p.a)(A),
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
							method: c.hb.POST,
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
					} = e, y = Object(m.a)(n.url), E = s(), h = Object(g.T)(E, {
						subredditId: i
					}).name, O = await (async (e, t, r, s, a) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: c.hb.POST,
						data: {
							s3_key: r,
							name: s,
							mod_flair_only: a.modFlairOnly,
							post_flair_allowed: a.postFlairAllowed,
							user_flair_allowed: a.userFlairAllowed
						}
					}))(a.apiContext(), h, y, l, p);
					if (!O.ok) {
						const s = Object(_.k)(n, O.error);
						r(Object(b.i)(s)), r(Object(f.f)(U(e))), t && t.close()
					}
					return O.ok
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
							const i = Object(h.e)(c, r.url, n, o);
							t(v(i)), t(B(n))
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
					t(P(e));
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
				}, H = e => async (t, r, {
					apiContext: s
				}) => {
					r().emojis[e] || await t(B(e))
				}, V = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const i = a(),
						l = Object(g.T)(i, {
							subredditId: t
						}).name,
						p = await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${r}/emoji/${t}`,
							method: c.hb.DELETE,
							type: "json"
						}))(n(), e, l);
					if (p.ok) {
						r(w({
							emojiName: e,
							subredditId: t
						})), r(f.f({
							kind: O.b.SuccessCommunityGreen,
							text: s.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else r(j(p.error)), r(f.f({
						kind: O.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, q = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const i = a(),
						l = Object(g.T)(i, {
							subredditId: e
						}).name;
					if ((await (async (e, t, r) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: c.hb.POST,
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
						kind: O.b.Error,
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
						method: c.hb.POST,
						data: r
					}))(n(), l, t)).ok ? r(W({
						subredditId: e,
						emojiCustomSize: t
					})) : r(f.f({
						kind: O.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, Q = "EMOJI_PERMISSIONS_UPDATED", J = Object(p.a)(Q), z = (e, t, r, a) => async (n, i, {
					apiContext: l
				}) => {
					const p = i(),
						b = Object(g.T)(p, {
							subredditId: a
						}).name;
					(await (async (e, t, r, s) => Object(o.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/api/v1/${r}/emoji_permissions.json`,
						method: c.hb.POST,
						data: {
							name: t,
							post_flair_allowed: s.postFlairAllowed,
							user_flair_allowed: s.userFlairAllowed,
							mod_flair_only: s.modFlairOnly
						}
					}))(l(), e, b, r)).ok ? (n(J({
						emojiName: e,
						isSnoomoji: t,
						settings: r,
						subredditId: a
					})), n(f.f({
						kind: O.b.SuccessCommunityGreen,
						text: s.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : n(f.f({
						kind: O.b.Error,
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
				return O
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
				h = Object(n.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				_ = Object(n.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				O = e => async (t, n) => {
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
					l.ok ? (t(h()), t(Object(o.f)({
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
						s = Object(i.K)(r),
						a = Object(d.b)(r);
					s && Object(d.d)(a) && e(l())
				}, b = () => async (e, t) => {
					const r = t(),
						s = Object(i.K)(r),
						n = Object(d.b)(r),
						c = !!Object(o.a)(r);
					s || c || !Object(d.e)(n) && !Object(d.d)(n) || e(Object(a.e)())
				}, f = e => {
					Object(c.d)(e, {
						experimentName: n.S
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
				return h
			})), r.d(t, "q", (function() {
				return _
			})), r.d(t, "r", (function() {
				return O
			})), r.d(t, "s", (function() {
				return I
			})), r.d(t, "t", (function() {
				return g
			})), r.d(t, "u", (function() {
				return S
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "w", (function() {
				return D
			})), r.d(t, "x", (function() {
				return T
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
				h = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				_ = "GOVERNANCE__TRANSFER_FAILURE",
				O = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				I = "GOVERNANCE__TRANSFER_PENDING",
				g = "GOVERNANCE__TRANSFER_SUCCESS",
				S = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				v = "GOVERNANCE__WALLETS_FETCH_PENDING",
				D = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				T = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
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
				return l
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "d", (function() {
				return m
			}));
			var s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				u = r("./src/reddit/selectors/user.ts");
			const l = "META__GEO_CHANGED",
				p = Object(n.a)(l),
				b = "META__META_RECEIVED",
				f = (Object(n.a)(b), "META__SET_LOCALE"),
				y = Object(n.a)(f),
				m = e => async (t, r, {
					apiContext: n
				}) => {
					if (!e) return;
					const l = r(),
						p = n();
					let b;
					if (t(y(e)), Object(s.isPseudoLocale)(e) ? (Object(u.H)(l) || Object(i.b)(l)) && (b = e) : b = Object(s.isoLocaleToR2Language)(e), !b) return;
					const f = new URL(window.location.href);
					Object(u.K)(l) ? Object(s.isPseudoLocale)(b) ? f.searchParams.set("locale", b) : (await Object(c.a)(Object(o.a)(p, [d.a]), {
						data: {
							lang: b
						},
						endpoint: `${p.apiUrl}/api/v1/me/prefs`,
						method: a.hb.PATCH,
						type: "json"
					}), f.searchParams.delete("locale")) : f.searchParams.delete("locale"), window.location.href = f.toString()
				}
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
				return h
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "A", (function() {
				return S
			})), r.d(t, "B", (function() {
				return v
			})), r.d(t, "z", (function() {
				return D
			})), r.d(t, "y", (function() {
				return T
			})), r.d(t, "v", (function() {
				return w
			})), r.d(t, "w", (function() {
				return j
			})), r.d(t, "x", (function() {
				return A
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
				h = "MULTIREDDIT__EDIT_PENDING",
				_ = "MULTIREDDIT__EDIT_SUCCESS",
				O = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				I = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				g = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				S = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				v = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				D = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				T = 10,
				w = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				j = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				A = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
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
			r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
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
				a = "INBOX_NOTIFICATIONS__LOADED",
				n = "INBOX_NOTIFICATIONS__FAILED",
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
				return y
			})), r.d(t, "d", (function() {
				return O
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
				h = Object(s.a)(y);
			let _ = !1;
			const O = () => async (e, t, r) => {
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
						method: n.hb.GET,
						traceRequestName: "get_nps_survey"
					}))(r.apiContext(), i, u);
				if (l.ok) {
					const t = l.body;
					t.dest ? (e(E(t)), p(t.dest), _ = !0) : e(h())
				} else e(h())
			}
		},
		"./src/reddit/actions/page.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return I
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "e", (function() {
				return T
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/reddit/actions/pages/subreddit.ts"),
				n = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/pageTitle.ts"),
				o = r("./src/config.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/platform.ts"),
				u = r("./src/reddit/endpoints/me/index.ts"),
				l = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				p = r("./src/reddit/actions/pages/appeal/constants.ts");
			const b = `${o.a.redditHelpUrl}/en/categories/rules-reporting/account-and-community-restrictions/my-account-was-suspended-or-locked`,
				f = Object(d.a)(p.b),
				y = Object(d.a)(p.a);
			var m = r("./src/reddit/actions/redditEmbed.ts"),
				E = r("./src/reddit/actions/users.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/lib/makeListingKey/index.ts"),
				O = r("./src/lib/matchRoute/index.ts");
			const I = e => async t => {
				await t(Object(m.c)(e, !0))
			}, g = () => async e => {
				await e((() => async (e, t, {
					apiContext: r
				}) => {
					const s = t(),
						a = await Object(u.a)(r());
					if (a.ok && a.body)
						if (a.body.account)
							if (s.user.account && s.user.account.isFPR) {
								const e = b;
								window.location.href = e
							} else e(f(a.body));
					else Object(l.a)(e, s);
					else e(y(a.error))
				})())
			}, S = (e, t, r) => async (c, o, {
				routes: d
			}) => {
				const i = o(),
					u = (t || i.platform.currentPage).routeMatch.match,
					l = Object(O.a)(u.url, d);
				if (!l) return;
				const p = e.metaKey || e.ctrlKey || 1 === e.button;
				if (l.route && l.route.meta && (l.route.meta.name === n.Jb.INDEX || l.route.meta.name === n.Jb.MULTIREDDIT || l.route.meta.name === n.Jb.SUBREDDIT)) p ? window.open(u.url) : r ? c(Object(s.b)(u.url)) : await c(l.route.action(u, !0));
				else if (l.match && l.match.params && l.match.params.subredditName) {
					const {
						subredditName: e
					} = l.match.params, t = `/r/${e}/`;
					if (p) window.open(t);
					else if (r) c(Object(s.b)(t));
					else {
						const r = Object(_.a)(e, n.U.HOT);
						await c(Object(s.b)(t)), c(Object(a.subredditDataRequested)(r, e, {}))
					}
				}
			}, v = () => async (e, t) => {
				const r = t();
				e(i.l({
					title: c.a()
				})), Object(h.K)(r) || await e(E.r())
			}, D = () => async e => e(i.l({
				title: c.a()
			})), T = e => async (t, s) => {
				const a = s();
				t(i.l({
					title: c.f()
				})), Object(h.K)(a) || await t(E.r());
				const n = Object(h.K)(a);
				if (e.queryParams.thanks && n) {
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
				return v
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "f", (function() {
				return P
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/difference.js"),
				n = r.n(a),
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
			var y = (e, t) => Object(p.a)(e, {
					...f,
					variables: t
				}),
				m = r("./src/reddit/selectors/telemetry.ts"),
				E = r("./src/telemetry/models/Event.ts");
			var h = r("./src/reddit/models/ChatSettingsPage/index.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/selectors/chat.ts"),
				I = r("./src/reddit/selectors/chatSettingsPage.ts");
			const g = "FETCH_CHAT_SETTINGS__LOADED",
				S = "FETCH_CHAT_SETTINGS__FAILED",
				v = "FETCH_CHAT_SETTINGS__PENDING",
				D = "UPDATE_CHAT_SETTINGS__LOADED",
				T = Object(d.a)(g),
				w = Object(d.a)(S),
				j = Object(d.a)(v),
				A = Object(d.a)(D),
				R = e => async (t, r) => {
					const s = {
						subredditId: e
					};
					return !!Object(I.b)(r(), s) || (t(j(s)), !1)
				}, C = e => async (t, r, {
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
							d = !Object(O.c)(r(), a),
							i = Object(h.c)(o, e, d);
						n = {
							...a,
							chatSettings: i
						}
					}
					if (n) t(T(n));
					else {
						const r = c.error || {
							type: o.G.UNKNOWN_ERROR
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
				}, P = (e, t, r) => async (a, c, {
					gqlContext: d
				}) => {
					if (await a(R(e))) return [];
					let i, l = !1;
					const p = n()(r, t),
						b = Object(h.b)(p);
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
							type: o.G.UNKNOWN_ERROR
						}
					}
					return l ? (a(A({
						subredditId: e,
						chatSettings: r
					})), a(N(t, p)), r) : (i && a(w({
						subredditId: e,
						error: i
					})), a(A({
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
					const s = [t(a.x()), t(Object(n.d)(e.params.profileName))];
					await Promise.all(s);
					const u = Object(i.j)(r());
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
				n = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/UserDataExportEligibility.json"),
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
						l = Object(d.j)(u),
						p = Object(i.b)(u);
					if (l && p.success) return;
					e(b());
					const m = await Object(a.a)(r());
					if (!m.ok || !m.body) return void e(y(m.error));
					if (!m.body.account) return void Object(o.a)(e, u);
					const E = await (e => Object(n.a)(e, {
						...c
					}))(s());
					if (!E.ok) return void e(y());
					const h = m.body,
						_ = E.body;
					e(f({
						account: h.account,
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
					const n = await Object(a.a)(s(), e);
					if (n.ok) {
						const r = n.body.data.postInfoById.crowdControlLevel;
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
						method: a.hb.POST,
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
				return E
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
				f = (Object(s.a)(o), Object(s.a)(d)),
				y = Object(s.a)(i),
				m = Object(s.a)(u),
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
						t(m({
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
								t(f({
									product: d,
									badges: e,
									userOwnedBadges: s,
									wallet: r.body.wallet
								}))
							}
						} else t(y({
							productId: e,
							error: r.error
						})), Object(a.a)(t, r.error)
					}
				})
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return A
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
				f = r("./node_modules/os-browserify/browser.js"),
				y = r.n(f);
			const m = /\s+at.*(?:\(|\s)(.*)\)?/,
				E = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				h = void 0 === y.a.homedir ? "" : y.a.homedir();
			const _ = e => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
			class AggregateError_AggregateError extends Error {
				constructor(e) {
					if (!Array.isArray(e)) throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
					let t = (e = [...e].map(e => e instanceof Error ? e : null !== e && "object" == typeof e ? Object.assign(new Error(e.message), e) : new Error(e))).map(e => "string" == typeof e.stack ? _(function(e, t = {}) {
						return t = {
							pretty: !1,
							...t
						}, e.replace(/\\/g, "/").split("\n").filter(e => {
							const t = e.match(m);
							if (null === t || !t[1]) return !0;
							const r = t[1];
							return !r.includes(".app/Contents/Resources/electron.asar") && !r.includes(".app/Contents/Resources/default_app.asar") && !E.test(r)
						}).filter(e => "" !== e.trim()).map(e => t.pretty ? e.replace(m, (e, t) => e.replace(t, t.replace(h, "~"))) : e).join("\n")
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
			var O = r("./src/lib/makeGqlRequest/index.ts"),
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
			var g = r("./src/reddit/featureFlags/index.ts"),
				S = r("./src/reddit/featureFlags/utils.ts"),
				v = r("./src/reddit/helpers/chooseVariant/index.ts"),
				D = r("./src/reddit/selectors/meta.ts");
			const T = e => g.d.reCaptchaEnterprise(e) && !Object(D.d)(e),
				w = e => !!Object(v.c)(e, {
					experimentEligibilitySelector: Object(S.d)(Object(S.b)(...n.c)),
					experimentName: b.cd
				}),
				j = Object(s.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				A = Object(s.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				R = Object(s.b)("SEND_RECAPTCHA_TOKEN"),
				C = e => u(e => p()([T, w, e => e.tracking.reCaptchaEnterprise.send === s.a.New && e.tracking.reCaptchaEnterprise.execute === s.a.Succeeded && e.tracking.reCaptchaEnterprise.load === s.a.Succeeded], t => t(e)))(async (t, r, {
					gqlContext: s
				}) => {
					t(R.requested());
					try {
						await (async (e, t) => {
							const r = await Object(O.a)(e, {
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
								errors: a
							} = r.body.data.verifyRecaptchaToken;
							if (a && a.length > 0) throw new AggregateError_AggregateError(a);
							if (!s) throw new RequestFailedWithoutErrorsError_RequestFailedWithoutErrorsError
						})(s(), e), t(R.succeeded())
					} catch (a) {
						throw t(R.failed()), a
					}
				}),
				P = (e, t) => Object(S.g)(t) ? (e => `STAGING__${e}`)(e) : e,
				L = (e = d.a.PageLoad) => u(e => p()([T, w, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async (t, r) => {
					const n = r();
					try {
						await t((() => u(e => p()([T, w, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async e => {
							e(j.requested());
							try {
								await d.b.loadScript(), e(j.succeeded())
							} catch (t) {
								throw e(j.failed()), t
							}
						}))());
						const r = await t((e => u(e => p()([T, w, e => e.tracking.reCaptchaEnterprise.load === s.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === s.a.New], t => t(e)))(async t => {
							t(A.requested());
							try {
								const r = await d.b.execute(e);
								return t(A.succeeded({
									token: r
								})), r
							} catch (r) {
								throw t(A.failed()), r
							}
						}))({
							action: P(e, n)
						}));
						r && await t(C(r))
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
		"./src/reddit/actions/recentSubreddits/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "e", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			}));
			const s = "SET_RECENT_SUBREDDITS",
				a = "SUBREDDIT_VISITED",
				n = "SUBREDDIT_SAVED",
				c = "COPY_SAVED_SUBREDDITS",
				o = "COPY_SAVED_ID_SUBREDDITS",
				d = 10
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
						method: n.hb.GET
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
						method: n.hb.GET
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
				return h
			})), r.d(t, "r", (function() {
				return _
			})), r.d(t, "u", (function() {
				return O
			})), r.d(t, "p", (function() {
				return I
			})), r.d(t, "q", (function() {
				return g
			})), r.d(t, "v", (function() {
				return S
			})), r.d(t, "s", (function() {
				return v
			})), r.d(t, "x", (function() {
				return D
			})), r.d(t, "w", (function() {
				return T
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
				h = "SCHEDULED_POST__DELETE_SUCCESS",
				_ = () => s.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				O = () => s.fbt._("Whoops! Invalid scheduled post", null, {
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
				v = () => s.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				D = () => s.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				T = () => s.fbt._("Successfully edited scheduled post!", null, {
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
					method: c.hb.GET,
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
				return O
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return S
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/streaming/constants.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/FetchSubredditStreamingModSettings.json"),
				i = r("./src/redditGQL/operations/UpdateSubredditStreamingModSettings.json"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const p = Object(a.a)(n.a),
				b = "STREAMING_MOD_SETTINGS__UPDATE_PENDING",
				f = "STREAMING_MOD_SETTINGS__UPDATE_LOADED",
				y = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				m = Object(a.a)(b),
				E = Object(a.a)(f),
				h = Object(a.a)(y),
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
					const i = await ((e, t) => Object(o.a)(e, {
						...d,
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
				}, O = (e, t) => async (r, s, {
					gqlContext: a
				}) => {
					await r(I(t, e, a())), r(_(t))
				}, I = (e, t, r) => async (r, a, {
					gqlContext: n
				}) => {
					r(m({
						subredditId: e
					}));
					const d = await ((e, t) => Object(o.a)(e, {
						...i,
						variables: t
					}))(n(), {
						input: {
							subredditId: e,
							liveStreamingModeratorSettings: t
						}
					});
					if (!d.ok || !d.body.data.updateSubredditLiveStreamingModeratorSettings.ok) {
						const t = d.error && d.error.fields ? d.error.fields[0].msg : s.fbt._("Could not update community broadcasting settings", null, {
								hk: "3Uw7zu"
							}),
							a = Object(c.e)(t, u.b.Error);
						await r(Object(c.f)({
							...a,
							duration: c.a
						})), r(h({
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
				return O
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "a", (function() {
				return S
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "g", (function() {
				return A
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/constants/modals.ts"),
				d = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				p = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const b = e => ({
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
			var f = r("./src/lib/makeGqlRequest/index.ts"),
				y = r("./src/redditGQL/operations/ValidateCreateSubreddit.json");
			var m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				E = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/telemetry/index.ts");
			const O = "SUBREDDIT__CREATE_PENDING",
				I = "SUBREDDIT__CREATE_SUCCEEDED",
				g = "SUBREDDIT__CREATE_FAILED",
				S = "SUBREDDIT__CREATE_CLEARED",
				v = Object(a.a)(O),
				D = Object(a.a)(I),
				T = Object(a.a)(g),
				w = Object(a.a)(S),
				j = e => async (t, r, {
					apiContext: a
				}) => {
					const f = r(),
						{
							name: y,
							type: O
						} = e;
					if (Object(h.j)(f)) return;
					t(v({
						subredditName: y
					}));
					const I = await ((e, t) => Object(i.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(p.a)(`${e.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: d.hb.POST,
						data: b(t)
					}))(a(), e);
					if (I.ok) {
						const r = I.body,
							a = r.fullname;
						Object(_.a)(Object(E.d)(O, e, a)(f)), t(D({
							subredditName: y
						})), await t(Object(s.b)(`${r.path}`)), (null == e ? void 0 : e.isInSrCreationFlowM2Experiment) === c.mb.Upsell && (t(Object(n.h)(o.a.POST_FLOW_UPSELL_MODAL_ID)), Object(_.a)(Object(E.g)()(f))), Object(m.b)(m.a.SubredditCreation)
					} else I.error && Object(_.a)(Object(E.h)(I.error.type, y)(f)), t(T({
						subredditName: y,
						error: I.error
					}))
				}, A = e => async (t, r, {
					gqlContext: s
				}) => {
					const a = r(),
						n = {
							name: e
						},
						c = await ((e, t) => Object(f.a)(e, {
							...y,
							variables: t
						}))(s(), {
							input: n
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
						t(T({
							subredditName: e,
							error: r
						})), r && Object(_.a)(Object(E.h)(r.type, e)(a))
					} else await t(w())
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
						method: n.hb.GET
					}))(r(), {
						sr_detail: !1
					});
					if (l.ok) {
						const r = t(),
							s = l.body && l.body.length ? l.body.map(e => Object(i.E)(r, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
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
				n = r("./src/lib/makeGqlRequest/index.ts"),
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
					})), t(Object(a.x)());
					const y = await ((e, t) => Object(n.a)(e, {
						...c,
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
				return O
			})), r.d(t, "k", (function() {
				return w
			})), r.d(t, "l", (function() {
				return j
			})), r.d(t, "i", (function() {
				return A
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
				h = Object(o.a)(u),
				_ = Object(o.a)(l),
				O = Object(o.a)(p),
				I = Object(o.a)(b),
				g = Object(o.a)(f),
				S = Object(o.a)(y),
				v = Object(o.a)(m),
				D = Object(o.a)(E),
				T = new Map,
				w = (e, t) => {
					const r = T.get(e) || [];
					r.push(t), T.set(e, r)
				},
				j = (e, t, r, s = !1) => async (n, o, {
					apiContext: u
				}) => {
					const l = t;
					if (o().uploads[l] && Object(i.c)(o().uploads[l])) return;
					const p = c()(),
						b = () => {
							const e = o().uploads[l];
							return !e || e.id !== p || e.status === i.a.CANCELED
						};
					n(h({
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
				}, A = (e, t = !1) => (r, s) => {
					const a = s().uploads[e];
					a && (((e, t) => {
						const r = T.get(e);
						r && r.forEach(r => r(e, t)), T.delete(e)
					})(a.id, t), r(t ? D({
						key: e
					}) : v({
						key: e
					})))
				}, R = (e, t = !1) => (r, s) => {
					Object.keys(s().uploads).forEach(s => {
						s.startsWith(e) && r(A(s, t))
					})
				}
		},
		"./src/reddit/actions/upvotePrompt.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
			})), r.d(t, "b", (function() {
				return m
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/config.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/post.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/localStorage/index.ts"),
				u = r("./src/reddit/selectors/telemetry.ts");
			const l = "upvote_prompt";
			var p = r("./src/reddit/selectors/experiments/index.ts"),
				b = r("./src/reddit/selectors/experiments/upvotePrompt.ts"),
				f = r("./src/telemetry/index.ts");
			const y = "INCREMENT_SEEN_COUNT_PER_SESS",
				m = (e, t, r) => async (n, c) => {
					const d = c(),
						p = Object(i.x)(),
						y = Date.now(),
						m = p && y - p < 18e4,
						O = Object(b.c)(d, {
							postId: e
						}),
						I = d.upvotePromptCountPerSess,
						g = (() => {
							const e = Object(i.w)();
							if (!e) return [];
							const t = Date.now();
							return e.filter(e => t - e < 864e5)
						})();
					if (!e || !O || m || I >= 4 || g.length >= 3) return;
					const S = h(d, t);
					if (!S) return;
					n(Object(o.f)({
						text: S,
						buttonText: s.fbt._("UPVOTE POST", null, {
							hk: "1u7UnZ"
						}),
						customIconAsset: `${a.a.assetPath}/img/snoo-upvote.png`,
						duration: b.a,
						buttonAction: E(e),
						onClose: () => Object(f.a)((e => ({
							source: l,
							action: "click",
							noun: "close",
							...Object(u.defaults)(e)
						}))(d))
					}));
					const v = [...g, Date.now()].slice(Math.max(g.length + 1 - 3, 0));
					Object(f.a)((e => ({
						source: l,
						action: "view",
						noun: l,
						...Object(u.defaults)(e)
					}))(d)), Object(i.xb)(), Object(i.wb)(v), n(_()), r && r()
				}, E = e => async (t, r) => {
					Object(f.a)((e => ({
						source: l,
						action: "click",
						noun: "upvote",
						...Object(u.defaults)(e)
					}))(r())), Object(b.c)(r(), {
						postId: e
					}) && t(Object(c.fb)(e))
				}, h = (e, t) => {
					const r = Object(p.d)(e, {
						experimentName: d.Ld
					});
					let a = "";
					return (null == r ? void 0 : r.variant) === d.Md.Variant1 ? a = t ? s.fbt._("Was that a good post? Upvote it so it gets seen by more people", null, {
						hk: "2NOllx"
					}) : s.fbt._("Was this a good post? Upvote it so it gets seen by more people", null, {
						hk: "K1yBi"
					}) : (null == r ? void 0 : r.variant) === d.Md.Variant2 && (a = t ? s.fbt._("If you enjoyed that post, upvote it so that more redditors will see it too.", null, {
						hk: "1Y6B4I"
					}) : s.fbt._("If you enjoyed this post, upvote it so that more redditors will see it too.", null, {
						hk: "HR9Ye"
					})), a
				}, _ = Object(n.a)(y)
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
				return h
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
				}, E = "USER_UNBLOCK__PENDING", h = "USER_UNBLOCK__SUCCESS", _ = "USER_UNBLOCK__FAILED", O = Object(a.a)(E), I = Object(a.a)(h), g = Object(a.a)(_), S = e => async (t, r, {
					apiContext: a
				}) => {
					const u = r(),
						l = Object(i.j)(u),
						p = l ? l.id : void 0,
						b = u.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(O({
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
				}, y = "USER_UNWHITELIST__PENDING", m = "USER_UNWHITELIST__SUCCESS", E = "USER_UNWHITELIST__FAILED", h = Object(a.a)(y), _ = Object(a.a)(m), O = Object(a.a)(E), I = e => async (t, r, {
					apiContext: a
				}) => {
					t(h({
						name: e
					})), (await Object(c.d)(a(), e)).ok ? (t(_({
						name: e
					})), t(n.f({
						kind: o.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "2o6UcC"
						})
					}))) : (t(O({
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
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "BlankPost", (function() {
				return u
			}));
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./src/reddit/components/AdViewability/index.tsx"),
				c = r("./src/reddit/connectors/PostViewable/index.ts"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/contexts/Post/index.tsx");
			const i = Object(c.a)(null),
				u = ({
					className: e,
					post: t
				}) => t.isSponsored ? a.a.createElement(n.a, {
					post: t,
					trackDisplay: !0
				}, a.a.createElement("div", {
					className: Object(o.a)(e, `Blank ${t.id}`)
				})) : null;
			t.default = Object(d.b)(i(u))
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./src/lib/classNames/index.ts"),
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
				usePreview: y
			}) => a.a.createElement("div", {
				className: Object(n.a)(d.a.thumbnailContainer, e)
			}, a.a.createElement(c.a, {
				className: Object(n.a)(d.a.thumbnail, t),
				containerClassName: b,
				crosspost: r,
				forceShowNSFW: s,
				isMeta: o,
				post: i,
				redditStyle: u,
				removeLink: l,
				templatePlaceholderImage: p,
				url: l ? void 0 : f,
				usePreview: y
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
				chain: "sfueWOUNVDpNGfP_Ow2yN",
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
				return ee
			})), r.d(t, "a", (function() {
				return te
			})), r.d(t, "c", (function() {
				return ae
			}));
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/higherOrderComponents/asTooltip.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = e => e.endsWith("/") ? e : `${e}/`,
				l = r("./node_modules/reselect/es/index.js"),
				p = r("./src/lib/makeSearchKey/index.ts"),
				b = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				f = r("./src/reddit/constants/history.ts"),
				y = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/helpers/getSearchUrl/index.ts"),
				E = r("./src/reddit/icons/fonts/index.tsx"),
				h = r("./src/reddit/models/Search/index.ts"),
				_ = r("./src/reddit/selectors/platform.ts"),
				O = r("./src/reddit/selectors/telemetry.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				S = r.n(g),
				v = r("./node_modules/uuid/v4.js"),
				D = r.n(v),
				T = r("./src/reddit/components/SearchDropdown/index.m.less"),
				w = r.n(T);
			const j = Object(n.b)(() => Object(l.c)({
					currentPage: _.b,
					nightmode: I.W
				})),
				A = Object(y.t)(),
				R = Object(c.a)(b.b);
			class C extends a.a.Component {
				constructor() {
					super(...arguments), this.onRecentSearchItemClick = () => {
						const {
							props: e
						} = this;
						e.recentSearch.isTypeaheadSuggestion ? e.onClearSearchQuery() : e.onUpdateSearchQuery(e.recentSearch.searchQuery), e.onSendSearchClickRecentEvent(e.recentSearch.searchQuery, e.recentSearch, e.indexOfItem), e.onCloseDropdown()
					}, this.generateFullSearchQuery = e => e.subredditOrProfileRestrictedName ? `${e.subredditOrProfileRestrictedName} ${e.searchQuery}` : e.searchQuery
				}
				render() {
					const {
						props: e
					} = this, {
						activeTooltipId: t,
						className: r,
						currentPage: s,
						focusedItem: n,
						nightmode: c,
						onRemoveRecentSearch: l,
						pageLayer: b,
						recentSearch: y,
						toggleTooltip: _
					} = e, I = Object(m.a)(null, null, null, y, {
						source: p.a.Recent
					}), g = I && I.url, v = I && I.qs, T = this.generateFullSearchQuery(y);
					let j;
					n && (j = this.generateFullSearchQuery(n));
					const A = s ? Object(O.getPageTypeFromCurrentPage)(s) : b ? Object(O.getPageTypeFromCurrentPage)(b) : void 0,
						C = y.isProfile || y.isSubreddit ? {
							[f.a.ClickSource]: "search_dropdown",
							[f.a.ClickId]: D()()
						} : void 0;
					return a.a.createElement(i.a, {
						"aria-label": y.searchQuery,
						className: Object(o.a)(w.a.listItem, S.a.item, r, {
							[w.a.mFocused]: !(!n || n.section !== h.c.recent || j !== T)
						}),
						onClick: this.onRecentSearchItemClick,
						key: T,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: g && u(g) || "",
							state: {
								...C,
								[f.a.SearchOriginPage]: A
							},
							search: v
						}
					}, y.displayInfo && y.isTypeaheadSuggestion ? y.displayInfo.iconUrl ? a.a.createElement("div", {
						className: w.a.subredditIcon,
						style: {
							backgroundImage: `url('${y.displayInfo.iconUrl}')`
						}
					}) : a.a.createElement(E.a, {
						name: "community",
						isFilled: !c,
						className: Object(o.a)(w.a.defaultCommunityIcon, {
							[w.a.mNightmode]: c
						})
					}) : a.a.createElement(E.a, {
						name: "search"
					}), a.a.createElement("span", {
						className: S.a.text
					}, T), a.a.createElement("div", {
						onMouseEnter: () => _(T),
						onMouseLeave: () => _(null),
						id: T
					}, a.a.createElement(E.a, {
						name: "clear",
						onMouseUp: e => {
							e.stopPropagation(), e.preventDefault(), l(y)
						}
					}), a.a.createElement(R, {
						className: w.a.fixedTextTooltip,
						isOpen: t === T,
						text: d.fbt._("Remove", null, {
							hk: "2P57BY"
						}),
						tooltipId: T,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					})))
				}
			}
			var P = A(j(C)),
				L = r("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				N = r("./src/reddit/components/PostTitle/index.tsx"),
				k = r("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				x = r("./src/reddit/constants/adEvents.ts"),
				U = r("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				M = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				G = r("./src/reddit/helpers/correlationIdTracker.ts"),
				F = r("./src/reddit/helpers/trackers/discoveryUnit.ts");
			const B = Object(n.b)(() => Object(l.c)({
				currentPage: _.b
			}), e => ({
				trackTrendingSearchClick: t => e((e, r) => F.E(r(), t, F.a.SEARCH_DROPDOWN))
			}));
			class H extends a.a.Component {
				constructor() {
					super(...arguments), this.transformTrendingToRecentSearch = () => {
						const {
							post: e,
							subredditInfo: t,
							subredditOccurrences: r,
							...s
						} = this.props.trendingItem;
						return s
					}, this.onTrendingItemClick = () => {
						const {
							props: e
						} = this;
						e.onUpdateSearchQuery(e.trendingItem.searchQuery);
						const t = this.transformTrendingToRecentSearch();
						if (e.onSetRecentSearch(t), Object(G.d)(G.a.SearchResults), e.trackTrendingSearchClick(e.trendingItem), this.isSponsored()) {
							const {
								post: e
							} = this.props.trendingItem;
							e && this.props.fireAdPixelsOfType(e, x.a.Click)
						}
						e.onCloseDropdown()
					}, this.isSponsored = () => {
						const {
							trendingItem: e
						} = this.props;
						return !(!e.post || !e.post.isSponsored)
					}
				}
				render() {
					const {
						className: e,
						currentPage: t,
						focusedItem: r,
						id: s,
						pageLayer: n,
						trendingItem: c
					} = this.props, l = this.isSponsored(), b = Object(m.a)(null, null, null, c, {
						source: l ? p.a.PromotedTrend : p.a.Trending
					}), y = b && b.url, _ = b && b.qs, I = t ? Object(O.getPageTypeFromCurrentPage)(t) : n ? Object(O.getPageTypeFromCurrentPage)(n) : void 0, g = a.a.createElement(i.a, {
						id: s,
						"aria-label": c.searchQuery,
						className: Object(o.a)(w.a.listItem, w.a.mTrending, S.a.item, S.a.trending, e, {
							[w.a.mFocused]: !(!r || r.section !== h.c.trending || c.searchQuery !== r.searchQuery)
						}),
						onClick: this.onTrendingItemClick,
						key: `trending-${c.searchQuery}`,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: y && u(y) || "",
							state: {
								[f.a.SearchOriginPage]: I
							},
							search: _
						}
					}, a.a.createElement("div", {
						className: S.a.trendingContent
					}, l && a.a.createElement("div", {
						className: S.a.promoted
					}, d.fbt._("promoted", null, {
						hk: "2l4e7d"
					})), a.a.createElement("div", null, a.a.createElement(E.a, {
						name: "popular",
						className: w.a.trendingIcon
					}), a.a.createElement("span", null, a.a.createElement(N.a, {
						className: Object(o.a)(w.a.listItemText, w.a.mTrending, S.a.text, S.a.trending),
						redditStyle: !0,
						size: N.b.Small
					}, c.searchQuery)), c.post && a.a.createElement("div", {
						className: w.a.postTitle
					}, c.post.title)), c.subredditInfo && a.a.createElement(U.a, {
						className: Object(o.a)(S.a.relatedSubredditMetaData, w.a.listItemSubtext, {
							[w.a.mNoPostTitle]: !c.post
						}),
						iconUrl: c.subredditInfo.icon || void 0,
						suffix: d.fbt._("{subreddit name} and more", [d.fbt._param("subreddit name", c.subredditInfo.displayText)], {
							hk: "3WFpek"
						})
					})), c.post && Object(M.a)(c.post) && a.a.createElement(L.a, {
						post: c.post,
						removeLink: !0,
						usePreview: l
					}));
					return l ? a.a.createElement(k.a, {
						post: c.post
					}, g) : g
				}
			}
			var V = Object(y.t)()(B(H)),
				q = r("./src/reddit/components/Flair/index.tsx"),
				K = r("./src/reddit/models/Flair/index.ts");
			class W extends a.a.Component {
				constructor() {
					super(...arguments), this.onTypeaheadSuggestionClick = () => {
						const {
							props: e
						} = this;
						e.onSetRecentSearch(e.item), e.onSendSearchClickTypeaheadEvent(e.item.searchQuery, e.item, e.indexOfItem, e.subredditSuggestions), e.onClearSearchQuery(), e.onCloseDropdown()
					}
				}
				render() {
					const {
						props: e
					} = this, {
						className: t,
						focusedItem: r,
						item: s
					} = e;
					return a.a.createElement(i.a, {
						"aria-label": s.searchQuery,
						className: Object(o.a)(w.a.listItem, w.a.mTypeahead, S.a.item, t, {
							[w.a.mFocused]: !(!r || r.searchQuery !== s.searchQuery)
						}),
						onClick: this.onTypeaheadSuggestionClick,
						key: s.searchQuery,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: `/${u(s.isProfile?s.searchQuery.replace("u/","user/"):s.searchQuery)}`,
							state: {
								[f.a.ClickSource]: "typeahead",
								[f.a.ClickId]: D()()
							}
						}
					}, s.displayInfo && s.displayInfo.iconUrl ? a.a.createElement("div", {
						className: w.a.subredditIcon,
						style: {
							backgroundImage: `url('${s.displayInfo.iconUrl}')`
						}
					}) : a.a.createElement(E.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(o.a)(w.a.defaultCommunityIcon, {
							[w.a.mNightmode]: e.nightmode
						})
					}), a.a.createElement("div", null, s.displayInfo && s.displayInfo.subredditOrProfileName && a.a.createElement("div", {
						className: Object(o.a)(w.a.listItemText, w.a.mTypeahead, S.a.text)
					}, s.displayInfo.subredditOrProfileName), a.a.createElement("div", null, s.displayInfo && null != s.displayInfo.subscribers && a.a.createElement("div", {
						className: Object(o.a)(w.a.listItemSubtext, S.a.subText)
					}, d.fbt._({
						"*": "{members count} members",
						_1: "1 member"
					}, [d.fbt._plural(s.displayInfo.subscribers, "members count")], {
						hk: "1uMCes"
					})), s.displayInfo && s.displayInfo.isNSFW && a.a.createElement(q.b, {
						flair: {
							type: K.f.Nsfw,
							text: "nsfw"
						}
					}))))
				}
			}
			var $ = r("./src/reddit/constants/zIndex.ts"),
				Q = r("./src/reddit/controls/Dropdown/index.tsx"),
				J = r("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				z = r.n(J),
				X = r("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				Y = r.n(X);
			const {
				fbt: Z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ee = "SearchDropdown", te = "SearchDropdownContent", re = 5, se = Object(c.a)(Q.a);

			function ae(e) {
				const t = Object(n.d)(),
					{
						isFixed: r = !0,
						isOverlay: c = !0
					} = e,
					[d, i] = Object(s.useState)(null),
					u = function(e) {
						const [t, r] = Object(s.useState)(null), a = Object(s.useCallback)(() => {
							e && r(e.offsetWidth)
						}, [e]);
						return Object(s.useLayoutEffect)(a, [a]), Object(s.useEffect)(() => (window.addEventListener("resize", a), () => window.removeEventListener("resize", a)), [a]), t
					}(e.container),
					l = e.trendingItems.slice(0, re),
					[p, b] = Object(s.useState)(new Array(re).fill(!1)),
					f = () => {
						const e = new Array(l.length).fill(!1);
						return l.forEach((t, r) => {
							if (t.id) {
								const s = document.getElementById(`${ee}-${t.id}`),
									a = document.getElementById(te);
								if (s && a) {
									const t = s.getBoundingClientRect(),
										n = a.getBoundingClientRect();
									t.top < n.bottom && t.bottom > n.top && (e[r] = !0)
								}
							}
						}), e
					};
				Object(s.useLayoutEffect)(() => {
					if (!e.isTrendingPending && e.isOpen && document.getElementById(te)) {
						const e = f();
						b(e), l.forEach((r, s) => {
							e[s] && t((e, t) => Object(F.F)(t(), r, F.a.SEARCH_DROPDOWN))
						})
					}
				}, [e.isTrendingPending, e.isOpen, t]);
				const y = {
					width: u ? `${u}px` : "inherit",
					marginTop: "7px",
					overflow: "scroll"
				};
				e.isFixed && (y.zIndex = $.h);
				const m = 0 === e.typeaheadSuggestions.length && !e.isTypeaheadPending,
					{
						typeaheadSuggestions: E
					} = e,
					h = Object(s.useMemo)(() => E.filter(e => e.isSubreddit), [E]);
				return a.a.createElement(se, {
					className: Object(o.a)(w.a.dropdown, z.a.listContainer),
					id: te,
					isFixed: r,
					isOpen: e.isOpen,
					isOverlay: c,
					tooltipId: ee,
					noFocus: !0,
					renderContentsHidden: !0,
					style: y,
					onDropdownMounted: () => {
						if (!e.isTrendingPending && l.length > 0) {
							const e = f();
							b(e), l.forEach((r, s) => {
								e[s] && t((e, t) => Object(F.F)(t(), r, F.a.SEARCH_DROPDOWN))
							})
						}
					},
					onScroll: () => {
						const e = f();
						l.forEach((r, s) => {
							p[s] || !e[s] || r.post && r.post.isSponsored || t((e, t) => Object(F.F)(t(), r, F.a.SEARCH_DROPDOWN))
						}), b(e)
					}
				}, e.typeaheadSuggestions.map((t, r) => a.a.createElement(W, {
					focusedItem: e.typeaheadSuggestions[e.focusedItemIndex],
					indexOfItem: r,
					subredditSuggestions: h,
					item: t,
					key: t.id,
					onClearSearchQuery: e.onClearSearchQuery,
					onSendSearchClickTypeaheadEvent: e.onSendSearchClickTypeaheadEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					fireAdPixelsOfType: e.fireAdPixelsOfType,
					nightmode: e.nightmode,
					onCloseDropdown: e.onClose
				})), m && e.recentSearches.map((t, r) => a.a.createElement(P, {
					activeTooltipId: d,
					focusedItem: e.itemList[e.focusedItemIndex],
					indexOfItem: r,
					key: t.id,
					onClearSearchQuery: e.onClearSearchQuery,
					onRemoveRecentSearch: e.onRemoveRecentSearch,
					onSendSearchClickRecentEvent: e.onSendSearchClickRecentEvent,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					recentSearch: t,
					toggleTooltip: i,
					nightmode: e.nightmode,
					onCloseDropdown: e.onClose
				})), m && !e.isInUISimplificationI18NExperiment && e.isInTrendingExperiment && !e.isTrendingPending && e.trendingItems && a.a.createElement("div", {
					className: Object(o.a)(S.a.title, w.a.listItemTitle, {
						[w.a.mWithBorder]: !!e.recentSearches.length
					})
				}, Z._("Trending today", null, {
					hk: "3nAMpY"
				})), (e.isTypeaheadPending || !e.isInUISimplificationI18NExperiment && e.isTrendingPending) && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: Object(o.a)(w.a.loadingItem, Y.a.item)
				}), a.a.createElement("div", {
					className: Object(o.a)(w.a.loadingItem, Y.a.item)
				}), a.a.createElement("div", {
					className: Object(o.a)(w.a.loadingItem, Y.a.item)
				}), a.a.createElement("div", {
					className: Object(o.a)(w.a.loadingItem, Y.a.item)
				}), a.a.createElement("div", {
					className: Object(o.a)(w.a.loadingItem, Y.a.item)
				})), m && !e.isInUISimplificationI18NExperiment && e.isInTrendingExperiment && l.map(t => a.a.createElement(V, {
					id: `${ee}-${t.id}`,
					key: t.id,
					focusedItem: e.itemList[e.focusedItemIndex],
					fireAdPixelsOfType: e.fireAdPixelsOfType,
					onCloseDropdown: e.onClose,
					onSetRecentSearch: e.onSetRecentSearch,
					onUpdateSearchQuery: e.onUpdateSearchQuery,
					trendingItem: t
				})))
			}
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./src/reddit/components/AdViewability/index.tsx"),
				c = r("./src/reddit/components/BlankPost/index.tsx"),
				o = r("./src/reddit/connectors/PostViewable/index.ts");
			const d = Object(o.a)(null);
			class i extends a.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: r
					} = this.props;
					if (t) return t.isBlank ? a.a.createElement(c.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: r
					}) : a.a.createElement(n.a, {
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
				return m
			}));
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/objectSelector/index.ts"),
				i = r("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				u = r("./src/reddit/components/SubredditIcon/index.tsx"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				p = r("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				b = r.n(p),
				f = r("./src/reddit/controls/Search/index.m.less"),
				y = r.n(f);
			const m = Object(n.b)(() => Object(c.c)({
				subredditsByName: Object(d.a)((e, t) => {
					const r = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						r[t.subredditName] = Object(l.z)(e, {
							subredditName: t.subredditName
						})
					}), r
				})
			}))(e => a.a.createElement("div", {
				className: Object(o.a)(b.a.subText, y.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => a.a.createElement(i.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, a.a.createElement(u.b, {
				className: Object(o.a)(y.a.subredditIcon, y.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : a.a.createElement(u.b, {
				className: Object(o.a)(y.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && a.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_2xQx4j6lBnDGQ8QsRnJEJa",
				iconContainer: "_2QGKgHKTtOwKHI4B_LI0YM",
				icon: "_1hdDhVEGWEdVJcgy2XQ2Eq",
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ"
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
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const i = async (e, t) => Object(n.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: a.hb.POST
			}), u = async (e, t, r) => Object(n.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: r,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: a.hb.POST
			}), l = async (e, t) => Object(n.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: a.hb.POST
			}), p = async (e, t) => Object(n.a)(Object(c.a)(e, [o.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: a.hb.POST
			}), b = async (e, t) => Object(n.a)(Object(c.a)(e, [o.a]), {
				endpoint: Object(d.a)(`${s.a.oauthUrl}/user/${t}/about`),
				method: a.hb.GET,
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
			var s, a = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/CrowdControlLevelInfo.json");
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
				method: s.hb.GET,
				endpoint: `${e.apiUrl}/api/username_available.json?user=${t.username}`,
				type: "json"
			})
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/reddit/constants/thumbnails.ts"),
				a = r("./src/reddit/models/Media/index.ts");

			function n(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === s.a.SELF || e.thumbnail.url === s.a.NSFW || e.media && Object(a.E)(e.media))
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/constants/index.ts");
			t.a = () => ({
				type: a.G.SERVER_ERROR,
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
			var s = r("./src/lib/search/index.ts"),
				a = r("./src/reddit/constants/parameters.ts"),
				n = r("./src/reddit/models/Search/index.ts");
			t.a = (e, t, r, c, o, d) => {
				let i, u;
				if ("" !== c.searchQuery) {
					if (c.isTypeaheadSuggestion) i = `/${c.isProfile?c.searchQuery.replace("u/","user/"):c.searchQuery}`;
					else {
						if (u = `${a.p}=${Object(s.b)(c.rawQuery||c.searchQuery)}`, i = "/search/", c.section !== n.c.trending && c.section !== n.c.recent || o && o.source && (u += `&source=${o.source}`), e && d ? (i = `/r/${e.name}${i}`, u = `${u}&${a.s}=1`) : !e && c.subredditOrProfileRestrictedName && (i = `/${c.subredditOrProfileRestrictedName}${i}`, u = `${u}&${a.s}=1`), t) {
							i = `/user/${t.url.split("/")[2]}/m/${t.name}${i}`, u = `${u}&${a.s}=1&${a.j}=1`
						}
						o && o.category && (u = `${u}&${a.b}=${o.category}`)
					}
					return {
						url: i,
						qs: u
					}
				}
			}
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
					const a = document.head;
					let n = a.querySelector(`script[src='${e}']`);

					function c() {
						this.removeEventListener("load", c), this.removeEventListener("error", o), r()
					}

					function o() {
						this.removeEventListener("load", c), this.removeEventListener("error", o), n && a.removeChild(n), s()
					}
					n || ((n = document.createElement("script")).src = e, a.appendChild(n)), n.addEventListener("load", c), n.addEventListener("error", o)
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
							i = Object(o.E)(e, d);
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
						a = Object(f.db)(e.getState()) ? "1" : "";
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
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "g", (function() {
				return v
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
				h = e => {
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
				O = e => "string" == typeof e,
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
				v = (e, t) => {
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
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
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
				d = (e, t) => r => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...a.defaults(r),
					actionInfo: a.actionInfo(r, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				i = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...a.defaults(e),
					actionInfo: a.actionInfo(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...a.defaults(e),
					actionInfo: a.actionInfo(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...a.defaults(e),
					actionInfo: a.actionInfo(e)
				}),
				p = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...a.defaults(e),
					actionInfo: a.actionInfo(e)
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
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			const s = "new_community_setup",
				a = ["CommunityProgressShareButton", "CommunityProgressUrlButton", "CommunityProgressMakePostButton"];
			var n, c, o;
			! function(e) {
				e.INITIAL = "INITIAL", e.ACTIONED = "ACTIONED", e.DISMISSED = "DISMISSED", e.COMPLETED = "COMPLETED"
			}(n || (n = {})),
			function(e) {
				e[e.FILLED = 0] = "FILLED", e[e.NUMBERED = 1] = "NUMBERED"
			}(c || (c = {})),
			function(e) {
				e.HIDE_BUTTON_CLICK = "HIDE_BUTTON_CLICK", e.CTA_BUTTON_CLICK = "CTA_BUTTON_CLICK"
			}(o || (o = {}))
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
				return Hv
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
				f = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				y = r("./src/reddit/actions/governance/constants.ts"),
				m = r("./src/reddit/actions/harbergerTax/constants.ts"),
				E = r("./src/reddit/actions/platform.ts"),
				h = r("./src/reddit/actions/product.ts"),
				_ = r("./src/reddit/actions/reportFlow/constants.ts"),
				O = r("./src/reddit/actions/structuredStyles/constants.ts"),
				I = r("./src/reddit/constants/modals.ts");
			var g = (e = null, t) => {
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
						case E.a:
						case _.f:
							return t.type === E.a && (null == e ? void 0 : e.id) === I.a.POST_FLOW_UPSELL_MODAL_ID ? e : null;
						case O.e:
							return (null == e ? void 0 : e.id) === I.a.BLADE_UNSAVED_CHANGES ? null : e;
						case O.d:
							return (null == e ? void 0 : e.id) === I.a.BLADE_NIGHTMODE ? null : e;
						case b.a:
							return (null == e ? void 0 : e.id) === I.a.USER_FLAIR_MODAL_ID ? null : {
								id: I.a.USER_FLAIR_MODAL_ID
							};
						case h.b:
							return {
								id: I.a.BADGE_PURCHASE
							};
						case y.d:
							return {
								id: I.a.GOVERNANCE_OPT_OUT
							};
						case y.r:
							return {
								id: I.a.TRANSFER_POINTS
							};
						case y.o:
							return {
								id: I.a.GOVERNANCE_RELEASE_NOTES
							};
						case m.e:
							return {
								id: I.a.HARBERGER_TAX_BANNER_PURCHASE
							};
						case m.c:
							return {
								id: I.a.HARBERGER_TAX_BANNER_MANAGE
							};
						case m.b:
							return {
								id: I.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE
							};
						case m.a:
							return {
								id: I.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE
							};
						case y.x:
							return {
								id: I.a.WALLET_REGISTRATION_MODAL
							};
						case f.c:
							return {
								id: I.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT
							};
						default:
							return e
					}
				},
				S = r("./src/reddit/actions/ads/constants.ts"),
				v = r("./src/reddit/actions/unload/constants.ts");
			const D = {};

			function T(e, t, r, s) {
				const a = e[t];
				return {
					...e,
					[t]: {
						...a,
						[s]: r
					}
				}
			}
			var w = (e = D, t) => {
					if (!t.payload) return e;
					switch (t.type) {
						case S.d:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case S.b:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
						case S.n:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case S.k:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case S.e:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case S.j:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case S.i:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case S.g:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case S.f:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case S.h:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case S.l: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: a
							} = t.payload;
							return T(e, r, a, `adVideoWatchedPercent${s}`)
						}
						case S.m: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: a
							} = t.payload;
							return T(e, r, a, `adVideoWatchedSeconds${s}`)
						}
						case S.w:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case S.y:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case S.x:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case v.b:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case S.s:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						case S.c:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adGalleryItemImpression");
						default:
							return e
					}
				},
				j = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/apiRequestState.ts"));
			const A = {};
			var R = (e = A, t) => {
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
							if (1 === Object.keys(e).length) return A;
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
			var P = (e = null, t) => {
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
			var L = (e = !1, t) => {
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
				N = Object(c.c)({
					error: P,
					pending: L
				});
			const k = {};
			var x = (e = k, t) => {
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
				U = Object(c.c)({
					api: N,
					badges: x
				});
			var M = (e = null, t) => {
					switch (t.type) {
						case b.a:
							return t.payload;
						default:
							return e
					}
				},
				G = r("./node_modules/icepick/icepick.js"),
				F = r("./node_modules/lodash/mergeWith.js"),
				B = r.n(F),
				H = r("./src/reddit/actions/comment/constants.ts"),
				V = r("./src/reddit/actions/comment/websocket/constants.ts"),
				q = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				K = r("./src/reddit/actions/modQueue/constants.ts"),
				W = r("./src/reddit/actions/pages/constants.ts"),
				$ = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				Q = r("./src/reddit/actions/pages/profilePosts.ts"),
				J = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				z = r("./src/reddit/actions/pages/search.ts"),
				X = r("./src/reddit/actions/pages/subreddit.ts"),
				Y = r("./src/reddit/actions/profileConversations.ts"),
				Z = r("./src/reddit/actions/subreddit.ts"),
				ee = r("./src/reddit/actions/userFlair/constants.ts"),
				te = r("./src/reddit/models/User/index.ts");
			const re = {};
			var se = (e = re, t) => {
				switch (t.type) {
					case V.b:
					case V.c: {
						const r = t.payload,
							{
								authorFlair: s,
								isChatSort: a
							} = r;
						if (s && a) {
							return B()({
								...e
							}, s, (e, t, r) => {
								if ("richtext" === r) return t
							})
						}
						return e
					}
					case J.c:
					case J.i:
					case J.e:
					case J.g:
					case z.SEARCH_RESULTS_RECEIVED: {
						const {
							authorFlair: r
						} = t.payload;
						if (r) {
							return Object(G.merge)(e, r)
						}
						return e
					}
					case H.w:
					case X.SUBREDDIT_LOADED:
					case W.f:
					case $.b:
					case $.e:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case Y.e:
					case Z.i:
						return ae(e, t.payload);
					case K.i:
					case K.f:
					case K.m:
					case K.p:
					case K.v:
						return ae(e, t.payload.response);
					case ee.r: {
						const {
							subredditId: r,
							userName: s,
							applied: a,
							displaySettings: {
								isUserEnabled: n
							}
						} = t.payload;
						return Object(G.setIn)(e, [r, s], n ? a : null)
					}
					case q.h:
					case q.b: {
						const {
							subredditId: r,
							userName: s,
							applied: a
						} = t.payload;
						return e[r] && e[r][s] ? Object(G.setIn)(e, [r, s], a) : e
					}
					case ee.a: {
						const {
							subredditId: r,
							userName: s,
							applied: a,
							displaySettings: {
								isEnabled: n
							}
						} = t.payload;
						return Object(G.setIn)(e, [r, s], n ? a : null)
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
				const a = Object(G.merge)(e, r);
				if (!s || !t) return a;
				const n = Object.keys(s)[0];
				if (!n) return a;
				const c = s[n],
					o = Object(te.e)(t),
					d = c.applied,
					i = c.displaySettings && c.displaySettings.isUserEnabled;
				return o && d && i ? Object(G.merge)(a, {
					[n]: {
						[o]: d
					}
				}) : a
			};
			var ne = Object(c.c)({
					inContext: M,
					models: se
				}),
				ce = r("./src/reddit/actions/gold/constants.ts");
			const oe = {};
			var de = (e = oe, t) => {
				switch (t.type) {
					case ce.e: {
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
			var ie = (e = null, t) => {
				switch (t.type) {
					case ce.i:
					case ce.j:
						return null;
					case ce.h:
						return t.payload;
					default:
						return e
				}
			};
			var ue = (e = !1, t) => {
					switch (t.type) {
						case E.a:
						case ce.j:
						case ce.h:
							return !1;
						case ce.i:
							return !0;
						default:
							return e
					}
				},
				le = Object(c.c)({
					error: ie,
					pending: ue
				}),
				pe = Object(c.c)({
					api: le
				});
			var be = (e = null, t) => {
				switch (t.type) {
					case ce.I:
					case ce.H:
						return null;
					case ce.G:
						return t.payload;
					default:
						return e
				}
			};
			const fe = {};
			var ye = (e = fe, t) => {
					switch (t.type) {
						case ce.I: {
							const {
								subredditOrProfileId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case ce.e:
						case ce.H:
						case ce.M:
						case ce.G: {
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
				me = Object(c.c)({
					error: be,
					pending: ye
				});
			const Ee = {};
			var he = (e = Ee, t) => {
				switch (t.type) {
					case ce.M: {
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
					case ce.m: {
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
					case ce.p: {
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
			const _e = {};
			var Oe = (e = _e, t) => {
					switch (t.type) {
						case ce.H: {
							const {
								awards: r,
								subredditOrProfileId: s
							} = t.payload, a = r.map(e => e.id);
							return {
								...e,
								[s]: a
							}
						}
						case ce.j: {
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
				Ie = Object(c.c)({
					api: me,
					availability: he,
					order: Oe
				}),
				ge = r("./node_modules/lodash/merge.js"),
				Se = r.n(ge);
			const ve = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const r = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${r}`
			};
			var De = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : ve(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : ve(e.endsAt)), e),
				Te = r("./src/reddit/models/Gold/Award.ts"),
				we = r("./src/reddit/actions/discoveryUnit.ts"),
				je = r("./src/reddit/actions/frontpage/constants.ts"),
				Ae = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				Re = r("./src/reddit/actions/multireddit/constants.ts"),
				Ce = r("./src/reddit/actions/pages/modListing/constants.ts"),
				Pe = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				Le = r("./src/reddit/actions/pages/postCreation.ts"),
				Ne = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				ke = r("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				xe = r("./src/lib/makeActionCreator/index.ts"),
				Ue = (r("./src/config.ts"), r("./src/lib/constants/index.ts"));
			r("./src/lib/makeApiRequest/index.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(xe.a)("RECOMMENDED_POSTS_LOADED"), Object(xe.a)("RECOMMENDED_POSTS_FAILED");
			var Me = r("./src/reddit/actions/search.ts");
			const Ge = Te.m,
				Fe = (e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				})([De]),
				Be = (e, t) => {
					const r = t.reduce((e, t) => (e[t.id] = Fe(t), e), {});
					return Se()({
						...e
					}, r)
				};
			var He = (e = Ge, t) => {
				var r;
				switch (t.type) {
					case ce.H: {
						const {
							awards: r
						} = t.payload;
						return Be(e, r)
					}
					case ce.M: {
						const r = t.payload.awards.reduce((e, t) => (e[t.id] = {
							...Fe(t),
							isEnabled: !0
						}, e), {});
						return Se()({
							...e
						}, r)
					}
					case ce.c: {
						const {
							awards: r
						} = t.payload, s = r.reduce((e, t) => (e[t.award.id] = Fe(t.award), e), {});
						return Se()({
							...e
						}, s)
					}
					case ce.j: {
						const {
							award: r
						} = t.payload;
						return r && r.id ? e[r.id] ? Se()({
							...e
						}, {
							[r.id]: Fe(r)
						}) : {
							...e,
							[r.id]: Fe(r)
						} : e
					}
					case ce.ib: {
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
					case W.b:
					case H.w:
					case V.b:
					case Le.PAGE_LOADED:
					case we.e:
					case je.f:
					case Ce.e:
					case Ce.h:
					case K.f:
					case K.m:
					case K.p:
					case K.v:
					case Re.r:
					case W.f:
					case je.b:
					case Pe.b:
					case z.SEARCH_RESULTS_RECEIVED:
					case $.b:
					case $.e:
					case Y.b:
					case Y.e:
					case Ne.b:
					case Ne.e:
					case ke.b:
					case Q.MORE_POSTS_LOADED:
					case Q.PROFILE_POSTS_LOADED:
					case J.c:
					case J.e:
					case J.i:
					case J.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Me.e:
					case Z.i:
					case X.SUBREDDIT_LOADED: {
						const r = {},
							s = t.payload.posts || [],
							a = t.payload.comments || [];
						for (const e in s) {
							const t = s[e].allAwardings || [];
							for (const e of t) r[e.id] = Fe(Object(Te.h)(e))
						}
						for (const e in a) {
							const t = a[e],
								{
									associatedAward: s,
									allAwardings: n = []
								} = t;
							for (const e of n) r[e.id] = Fe(Object(Te.h)(e));
							s && (r[s.id] = Fe(s))
						}
						return Object.keys(r).forEach(t => {
							var s;
							0 === (null === (s = e[t]) || void 0 === s ? void 0 : s.coinPrice) && delete r[t]
						}), Se()({
							...e
						}, r)
					}
					case ce.rb: {
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
						}), Se()({
							...e
						}, r)
					}
					case Ae.o: {
						const {
							freeAwardEvent: s
						} = t.payload;
						return Be(e, (null === (r = null == s ? void 0 : s.freeAwards) || void 0 === r ? void 0 : r.awards) || [])
					}
					case Ae.h: {
						const {
							awards: r
						} = t.payload;
						return Be(e, r || [])
					}
					default:
						return e
				}
			};
			const Ve = {};
			var qe = (e = Ve, t) => {
					switch (t.type) {
						case ce.d: {
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
						case ce.c:
						case ce.b: {
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
				Ke = Object(c.c)({
					pending: qe
				});
			const We = {};
			var $e = (e = We, t) => {
					switch (t.type) {
						case ce.c: {
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
					api: Ke,
					order: $e
				});
			const Je = {};
			var ze = (e = Je, t) => {
					switch (t.type) {
						case ce.c: {
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
				Xe = Object(c.c)({
					order: ze
				}),
				Ye = Object(c.c)({
					blacklist: de,
					create: pe,
					manageable: Ie,
					models: He,
					sortedUsable: Qe,
					tags: Xe
				}),
				Ze = r("./src/reddit/actions/badge.ts");
			const et = {};
			var tt = (e = et, t) => {
				switch (t.type) {
					case Ze.d:
					case Ze.e: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case Ze.c: {
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
						case Ze.d: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ze.e:
						case Ze.c: {
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
					case Ze.g:
					case Ze.h: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case Ze.f: {
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
						case Ze.g: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ze.h:
						case Ze.f: {
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
						case f.i:
						case Ze.e:
						case Ze.h:
						case h.d: {
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
				ht = Object(c.c)({
					error: mt,
					pending: Et
				});
			const _t = {
				ids: []
			};
			var Ot = (e = _t, t) => {
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
					api: ht,
					list: Ot
				}),
				gt = r("./src/reddit/actions/userBlocks.ts");
			const St = {};
			var vt = (e = St, t) => {
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
			const Dt = {};
			var Tt = (e = Dt, t) => {
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
					error: vt,
					pending: Tt
				}),
				jt = Object(c.c)({
					api: wt
				});
			const At = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var Rt = (e = At, t) => {
					switch (t.type) {
						case S.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case X.SUBREDDIT_PENDING:
						case Pe.c:
						case je.c:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				Ct = r("./src/reddit/actions/downToChat.ts");
			var Pt = (e = null, t) => {
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
					error: Pt,
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
				Ht = r("./src/chat/actions/promo/constants.ts");
			const Vt = {
				displaySubredditChatFtux: !1
			};
			var qt = (e = Vt, t) => {
					switch (t.type) {
						case Ht.a: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Ht.b: {
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
						return Object(Kt.a)(e, r)
					}
					default:
						return e
				}
			};
			const Jt = {};
			var zt = (e = Jt, t) => {
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
				Xt = Object(c.c)({
					error: Qt,
					pending: zt
				}),
				Yt = Object(c.c)({
					fetch: Xt
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
					promos: qt,
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
				hr = Object(c.c)({
					api: yr,
					code: mr,
					showModal: Er
				}),
				_r = r("./src/reddit/actions/commentsListTruncated/constants.ts");
			var Or = (e = !0, t) => {
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
				vr = r("./src/reddit/actions/contentControls/constants.ts");
			const Dr = {};
			var Tr = (e = Dr, t) => {
				switch (t.type) {
					case vr.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case vr.c:
					case vr.b: {
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
			var jr = (e = wr, t) => {
					switch (t.type) {
						case vr.c:
						case vr.a:
						case vr.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === vr.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Ar = Object(c.c)({
					error: Tr,
					pending: jr
				}),
				Rr = Object(c.c)({
					fetch: Ar
				});
			const Cr = {};
			var Pr = (e = Cr, t) => {
					switch (t.type) {
						case vr.b: {
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
						case vr.d: {
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
					models: Pr
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
								return B()({
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
								return B()({
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
								return B()({
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
								return B()({
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
								return B()({
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
						} = t.payload, s = Ue.dc + r.toLocaleLowerCase(), a = e[s] || {}, n = {
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
					case kr.p:
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
						case H.w:
						case W.b:
						case W.f:
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
			var Hr = (e = null, t) => {
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
			var Vr = (e = !1, t) => {
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
				qr = Object(c.c)({
					error: Hr,
					pending: Vr
				}),
				Kr = Object(c.c)({
					createOrUpdate: qr
				}),
				Wr = r("./src/reddit/actions/postDraft.ts");
			const $r = {};
			var Qr = (e = $r, t) => {
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
			const Jr = {};
			var zr = (e = Jr, t) => {
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
				Xr = Object(c.c)({
					error: Qr,
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
					deleteDraft: Xr,
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
					case Le.PAGE_LOADED:
					case Le.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Le.PAGE_FAILED: {
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
					case Le.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !1
						}
					}
					case Le.PAGE_LOADED: {
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
			const hs = {};
			var _s = (e = hs, t) => {
					switch (t.type) {
						case Le.PAGE_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Le.PAGE_LOADED:
						case Le.PAGE_FAILED: {
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
				Os = Object(c.c)({
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
			var vs = (e = !1, t) => {
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
				Ds = Object(c.c)({
					error: Ss,
					pending: vs
				});
			var Ts = (e = null, t) => {
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
				js = Object(c.c)({
					error: Ts,
					pending: ws
				}),
				As = Object(c.c)({
					submit: Ds,
					update: js
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
			var Cs = (e = !1, t) => {
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
				Ps = Object(c.c)({
					error: Rs,
					pending: Cs
				}),
				Ls = Object(c.c)({
					change: Ps
				}),
				Ns = Object(c.c)({
					collection: Kr,
					draft: ns,
					editor: bs,
					page: Os,
					post: As,
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
			var Hs = r("./src/reddit/models/PostDraft/index.ts");
			var Vs = (e = "", t) => {
					switch (t.type) {
						case cs.d:
							return t.payload || "";
						case cs.A:
							return "";
						case E.a: {
							if (Fs(t) !== Ue.Jb.POST_CREATION) return "";
							const r = Bs(t);
							return r && r.url ? r.url || "" : e
						}
						case Wr.g: {
							const e = t.payload;
							return e.kind === Hs.b.Link && e.body || ""
						}
						case Is.b:
						case Is.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				qs = r("./src/reddit/models/PostCreationForm/index.ts"),
				Ks = r("./src/reddit/models/ScheduledPost/index.ts");
			var Ws = (e = "", t) => {
				switch (t.type) {
					case cs.e:
						return t.payload || "";
					case cs.A:
					case cs.E:
						return "";
					case cs.M:
						return t.payload.editorMode === qs.h.MARKDOWN ? t.payload.content || "" : e;
					case E.a: {
						if (Fs(t) !== Ue.Jb.POST_CREATION) return "";
						const r = Bs(t);
						return r && r.text ? (e => e ? e.replace(/\+/g, " ") : "")(r.text) : e
					}
					case Wr.g: {
						const e = t.payload;
						return e.kind === Hs.b.Markdown && e.body || ""
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
			var Qs = (e = $s, t) => {
					switch (t.type) {
						case cs.f:
							return t.payload || $s;
						case cs.A:
							return $s;
						case E.a:
							return Fs(t) !== Ue.Jb.POST_CREATION ? $s : e;
						case Wr.g:
							return $s;
						case Is.b:
						case Is.n:
							return $s;
						default:
							return e
					}
				},
				Js = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				zs = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Xs = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const Ys = Js.a.createInitial;
			var Zs = (e = Ys(), t) => {
					switch (t.type) {
						case cs.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case cs.A:
							return Js.a.createInitial();
						case cs.M: {
							const r = t.payload;
							return r.editorMode === qs.h.RICH_TEXT && r.editorKey === qs.g.POST_CREATION ? Js.a.createInitial(r.content) : e
						}
						case E.a:
							return Fs(t) !== Ue.Jb.POST_CREATION ? Js.a.createInitial() : e;
						case Wr.g: {
							const e = t.payload;
							return e.kind === Hs.b.RichText ? Js.a.createInitial(e.body) : Js.a.createInitial()
						}
						case Is.b:
						case Is.n: {
							const e = t.payload,
								r = Object(zs.c)(e.mediaAssets);
							return Js.a.createInitial(e.contentType === Ks.a.RTJSON ? Object(Xs.b)(e.body) : void 0, r || void 0)
						}
						default:
							return e
					}
				},
				ea = Object(c.c)({
					link: Vs,
					markdown: Ws,
					media: Qs,
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
						case E.a:
							return Fs(t) === Ue.Jb.POST_CREATION ? e : null;
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
					case E.a:
						return Fs(t) === Ue.Jb.POST_CREATION ? e : null;
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
					case E.a:
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
					case E.a:
						return Fs(t) === Ue.Jb.POST_CREATION && e;
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
					case E.a:
						return Fs(t) === Ue.Jb.POST_CREATION && e;
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
					case E.a:
						return Fs(t) === Ue.Jb.POST_CREATION && e;
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
					case E.a:
						return Fs(t) === Ue.Jb.POST_CREATION && e;
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
					case E.a:
						return Fs(t) === Ue.Jb.POST_CREATION && e;
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
					case E.a:
						return Fs(t) === Ue.Jb.POST_CREATION && e;
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
					case E.a:
						return Fs(t) === Ue.Jb.POST_CREATION && e;
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
					case E.a:
						return Fs(t) === Ue.Jb.POST_CREATION && e;
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
					case y.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case E.a:
					case cs.i:
					case cs.q:
					case cs.A:
					case y.h:
						return "";
					default:
						return e
				}
			};
			var fa = (e = "", t) => {
				switch (t.type) {
					case y.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case E.a:
					case cs.i:
					case cs.q:
					case cs.A:
					case y.h:
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
						case E.a:
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
						case y.h:
						case cs.A:
							return null;
						case E.a:
							return Fs(t) !== Ue.Jb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				ha = r("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				_a = r("./src/reddit/helpers/scheduledPosts/index.ts");
			var Oa = (e = null, t) => {
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
					case E.a:
						if (Fs(t) === Ue.Jb.POST_CREATION) {
							const c = null === (n = (null !== (a = null === (s = null === (r = t.payload) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.match.queryParams) && void 0 !== a ? a : {}).frequency) || void 0 === n ? void 0 : n.toUpperCase();
							if (c && Object(Ks.m)(c)) {
								const t = Object(ha.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										...ha.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(ha.b)(new Date(t.submitDate), c)
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
					case E.a:
						return Fs(t) === Ue.Jb.POST_CREATION && e;
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
					case E.a:
						return Fs(t) !== Ue.Jb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var Sa = (e = null, t) => {
				switch (t.type) {
					case E.a:
						return Fs(t) !== Ue.Jb.POST_CREATION ? null : e;
					case cs.A:
						return null;
					case Is.b:
					case Is.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var va = (e = !0, t) => {
				switch (t.type) {
					case cs.A:
						return !0;
					case cs.V:
						return t.payload;
					case E.a:
						return Fs(t) !== Ue.Jb.POST_CREATION || e;
					case Wr.g:
						return t.payload.sendReplies;
					case Is.b:
					case Is.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var Da = (e = null, t) => {
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
					case E.a:
						return Fs(t) === Ue.Jb.POST_CREATION ? e : null;
					case Is.b:
					case Is.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const Ta = Ue.Rb.POST;
			var wa = (e = Ta, t) => {
				switch (t.type) {
					case cs.A:
						return Ta;
					case cs.r:
						return Ue.Rb.CROSSPOST;
					case cs.i:
						return t.payload.submissionType || Ta;
					case E.a: {
						if (Fs(t) !== Ue.Jb.POST_CREATION) return Ta;
						const r = Bs(t);
						if (!r) return e;
						const {
							title: s = "",
							url: a,
							text: n = "",
							media: c = !1,
							selftext: o = !1
						} = r, d = s && !n && !o;
						return c ? Ue.Rb.MEDIA : void 0 !== a || d ? Ue.Rb.LINK_ONLY : n || o ? Ue.Rb.POST : e
					}
					case Wr.g: {
						const e = t.payload;
						return Hs.a[e.kind]
					}
					case Is.b:
					case Is.n: {
						const e = t.payload;
						return e.poll ? Ue.Rb.POLL : e.url ? Ue.Rb.LINK_ONLY : Ue.Rb.POST
					}
					default:
						return e
				}
			};
			var ja = (e = null, t) => {
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
						case E.a:
							return Fs(t) === Ue.Jb.POST_CREATION ? e : null;
						case Is.b:
						case Is.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				Aa = r("./src/reddit/models/Poll/index.ts");
			const Ra = e => `Should ${e||"username"} become the top moderator?`,
				Ca = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Pa = (e = "", t) => {
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
						case E.a: {
							if (Fs(t) !== Ue.Jb.POST_CREATION) return "";
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
							return s === Aa.a.ReplaceTopMod ? Ra("") : s === Aa.a.Spinoff ? Ca("") : r === Aa.a.ReplaceTopMod || r === Aa.a.Spinoff ? "" : e
						}
						case y.c: {
							const {
								username: e
							} = t.payload;
							return Ra(e)
						}
						case y.b: {
							const {
								subredditName: e
							} = t.payload;
							return Ca(e)
						}
						case cs.i: {
							const {
								extra: r
							} = t.payload;
							return !r || r.govType !== Aa.a.ReplaceTopMod && r.govType !== Aa.a.Spinoff ? e : ""
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
					postSchedule: Oa,
					postToTwitter: Ia,
					recaptcha: ga,
					scheduledPostId: Sa,
					sendReplies: va,
					stickyPosition: Da,
					submissionType: wa,
					suggestedSort: ja,
					title: Pa
				});
			var Na = (e = null, t) => {
				switch (t.type) {
					case E.a: {
						if (Fs(t) !== Ue.Jb.POST_CREATION) return null;
						const r = Bs(t);
						return r && r.text && (e => e ? e.replace(/\+/g, " ") : "")(r.text) ? qs.h.MARKDOWN : e
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
						return t.payload.contentType === Ks.a.RTJSON ? qs.h.RICH_TEXT : qs.h.MARKDOWN;
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
						return e[Ue.ub.BODY] ? {
							...e,
							[Ue.ub.BODY]: []
						} : e;
					case cs.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return e[Ue.ub.BODY] && r ? {
							...e,
							[Ue.ub.BODY]: []
						} : e
					}
					case cs.j:
						return e[Ue.ub.TITLE] ? {
							...e,
							[Ue.ub.TITLE]: []
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
							}) => Object(qs.u)(e));
							if (!r.length) return e;
							const s = r.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
							return {
								...e,
								...s
							}
						})(e, t.payload);
					case E.a:
						return Fs(t) !== Ue.Jb.POST_CREATION ? ka : e;
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
					case E.a:
						return Fs(t) === Ue.Jb.POST_CREATION && e;
					case cs.A:
					case Wr.l:
					case Wr.g:
						return !1;
					default:
						return e
				}
			};
			const Ma = qs.q.Post;
			var Ga = (e = Ma, t) => {
					switch (t.type) {
						case cs.w:
							return qs.q.Post;
						case cs.B:
							return t.payload;
						case Wr.j:
							return qs.q.Draft;
						case E.a:
							return Fs(t) !== Ue.Jb.POST_CREATION ? Ma : e;
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
						return t.payload.editorMode === qs.h.MARKDOWN ? t.payload.postContent || "" : e;
					case cs.E:
						return "";
					case cs.M:
						return t.payload.editorMode === qs.h.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const Ha = Js.a.createInitial;
			var Va = (e = Ha(), t) => {
					switch (t.type) {
						case cs.E:
							return Js.a.createInitial();
						case cs.D: {
							const r = t.payload;
							return r.editorMode === qs.h.RICH_TEXT && "object" == typeof r.postContent ? Js.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case cs.M: {
							const r = t.payload;
							return r.editorMode === qs.h.RICH_TEXT && r.editorKey === qs.g.POST_EDITING ? Js.a.createInitial(r.content) : e
						}
						default:
							return e
					}
				},
				qa = Object(c.c)({
					markdown: Ba,
					rte: Va
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
					draft: qa,
					postId: Ka
				}),
				$a = Object(c.c)({
					api: Ns,
					drafts: Gs,
					formData: La,
					formState: Fa,
					postEditing: Wa
				}),
				Qa = r("./src/reddit/actions/dashboard/constants.ts");
			const Ja = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var za = (e = Ja, t) => {
				switch (t.type) {
					case Qa.a:
						return {
							...e, selectedComponent: t.payload
						};
					case Qa.d: {
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
					case Qa.c: {
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
			var Xa = (e = null, t) => {
				switch (t.type) {
					case we.b:
					case we.c:
						return null;
					case we.a: {
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
					case we.c:
						return !1;
					case we.b:
						return !0;
					default:
						return e
				}
			};
			var Za = (e = !1, t) => {
					switch (t.type) {
						case we.c:
							return !0;
						case we.b:
						case we.a:
							return !1;
						default:
							return e
					}
				},
				en = Object(c.c)({
					error: Xa,
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
						case we.b: {
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
						case we.b: {
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
			var hn = (e = En, t) => {
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
			const On = {
				badgeType: _n.a.Cosmetic,
				view: _n.c.Gallery
			};
			var In = (e = On, t) => {
				switch (t.type) {
					case f.c: {
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
					case f.b: {
						const r = t.payload;
						return {
							...e,
							badgeType: r
						}
					}
					case f.d: {
						const r = t.payload;
						return {
							...e,
							view: r
						}
					}
					case s.b:
						return On;
					default:
						return e
				}
			};
			var gn = (e = null, t) => {
					switch (t.type) {
						case f.c:
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

			function vn(e, t) {
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

			function Dn(e) {
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
						emotes: a.map(e => vn(e, t))
					}
				}), r
			}
			const Tn = {};
			var wn = (e = Tn, t) => {
				switch (t.type) {
					case f.e: {
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
					case ce.nb: {
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
										[r.name]: vn(r, t)
									}
								})
							}
						}(e, r, s)
					}
					default:
						return e
				}
			};
			const jn = {};
			var An = (e = jn, t) => {
					switch (t.type) {
						case f.e: {
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
			const Cn = {
				fetched: !1,
				data: {}
			};
			var Pn = (e = Cn, t) => {
					switch (t.type) {
						case Rn.a:
							return {
								fetched: !0, data: t.payload
							};
						case f.h: {
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
					banners: hn,
					currentBadgeManagementScreen: In,
					currentModalArgs: gn,
					emotes: wn,
					gifs: An,
					me: Pn,
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
				Hn = Object(c.c)({
					list: Bn
				});
			const Vn = {};
			var qn = (e = Vn, t) => {
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
					api: Hn,
					models: qn
				}),
				Wn = r("./src/reddit/actions/experiments.ts");
			const $n = /^experiment_(.*)$/i,
				Qn = e => {
					const t = e.match($n);
					if (null !== t) return t[1]
				},
				Jn = {};
			var zn = (e = Jn, t) => {
					switch (t.type) {
						case E.a: {
							const r = Bs(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = Qn(e);
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
				Xn = r("./src/reddit/actions/externalAccount.ts");
			const Yn = {};
			var Zn = (e = Yn, t) => {
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
			const ec = {};
			var tc = (e = ec, t) => {
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
				rc = Object(c.c)({
					error: Zn,
					pending: tc
				});
			const sc = {};
			var ac = (e = sc, t) => {
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
			const nc = {};
			var cc = (e = nc, t) => {
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
				oc = Object(c.c)({
					error: ac,
					pending: cc
				});
			const dc = {};
			var ic = (e = dc, t) => {
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
			const uc = {};
			var lc = (e = uc, t) => {
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
			const pc = {};
			var bc = (e = pc, t) => {
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
				fc = Object(c.c)({
					error: ic,
					fetched: lc,
					pending: bc
				});
			const yc = {};
			var mc = (e = yc, t) => {
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
			const Ec = {};
			var hc = (e = Ec, t) => {
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
				_c = Object(c.c)({
					error: mc,
					pending: hc
				}),
				Oc = Object(c.c)({
					connect: rc,
					disconnect: oc,
					user: _c,
					subreddit: fc
				});
			const Ic = {};
			var gc = (e = Ic, t) => {
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
			const Sc = {};
			var vc = (e = Sc, t) => {
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
								[r]: xs()(a, s)
							} : e
						}
						default:
							return e
					}
				},
				Dc = Object(c.c)({
					api: Oc,
					user: vc,
					subreddit: gc
				}),
				Tc = r("./src/reddit/featureFlags/index.ts");
			const wc = new Set(["0", "disabled", "false", "off", ""]);
			var jc = e => !wc.has(e.toLowerCase());
			const Ac = Tc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				Rc = Tc.a.reduce((e, t) => (e[t] = null, e), {});
			var Cc = (e = Rc, t) => {
					switch (t.type) {
						case E.a: {
							const r = Bs(t);
							if (void 0 !== r) {
								const t = {};
								for (const e in r) {
									const s = Object(Tc.g)(e);
									if (s) {
										const a = Ac[s.toLowerCase()];
										if (a) {
											const s = r[e],
												n = "string" != typeof s || jc(s);
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
						case Tc.b: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return s === e[r] ? e : {
								...e,
								[r]: s
							}
						}
						case Tc.c: {
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
				Pc = Object(c.c)({
					overrides: Cc
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
			var Hc = (e = null, t) => {
				switch (t.type) {
					case Lc.g:
					case Lc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Vc = (e = null, t) => {
				switch (t.type) {
					case Lc.g:
					case Lc.c:
					case Lc.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var qc = (e = null, t) => {
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
					interactedSubredditIds: Hc,
					recommendedSubredditIds: qc,
					category: Gc,
					lastLoadedEnv: Vc
				});
			Object(xe.a)("FONTS_FONT_FILES_PARSED");
			const Wc = [];
			var $c = (e = Wc, t) => {
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var Qc = (e = null, t) => {
				switch (t.type) {
					case ce.q:
						return t.payload;
					case ce.f:
					case E.a:
					case ce.K:
					case ce.t:
						return null;
					default:
						return e
				}
			};
			var Jc = (e = !1, t) => {
				switch (t.type) {
					case ce.f:
					case E.a:
					case ce.t:
					case ce.q:
						return !1;
					case ce.r:
						return !0;
					default:
						return e
				}
			};
			var zc = (e = !1, t) => {
					switch (t.type) {
						case ce.r:
						case ce.f:
						case E.a:
						case ce.t:
						case ce.q:
							return !1;
						case ce.v:
							return !0;
						default:
							return e
					}
				},
				Xc = Object(c.c)({
					error: Qc,
					pending: Jc,
					showLoader: zc
				});
			var Yc = (e = null, t) => {
				switch (t.type) {
					case ce.L:
					case ce.K: {
						if (!t.payload) return null;
						const {
							correlationId: e
						} = t.payload;
						return e
					}
					case ce.g:
					case ce.f:
						return null;
					default:
						return e
				}
			};
			var Zc = (e = null, t) => {
				switch (t.type) {
					case ce.u: {
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
					case ce.J:
					case ce.K:
						return r.thingId;
					case ce.t:
					case E.a:
					case ce.f:
						return null;
					default:
						return e
				}
			};
			var to = (e = !1, t) => {
				switch (t.type) {
					case ce.s:
						return t.payload;
					case ce.K:
						return !1;
					default:
						return e
				}
			};
			var ro = (e = !1, t) => {
				switch (t.type) {
					case ce.J:
						return !0;
					default:
						return e
				}
			};
			var so = (e = "", t) => {
				switch (t.type) {
					case ce.w:
						return t.payload;
					case ce.K:
						return "";
					default:
						return e
				}
			};
			const ao = Te.n;
			var no = (e = ao, t) => {
					switch (t.type) {
						case ce.kb:
							return t.payload;
						case ce.K: {
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
					api: Xc,
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
					case ce.x:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg || "An unknown error occurred";
					case ce.g:
					case E.a:
					case ce.L:
					case ce.C:
						return null;
					default:
						return e
				}
			};
			var io = (e = !1, t) => {
					switch (t.type) {
						case ce.g:
						case E.a:
						case ce.C:
						case ce.x:
							return !1;
						case ce.y:
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
						case ce.L: {
							const {
								profileName: e
							} = t.payload;
							return e
						}
						case E.a:
						case ce.g:
						case ce.C:
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
				ho = r("./src/reddit/actions/imageUploads.ts");
			const _o = {};
			var Oo = (e = _o, t) => {
					switch (t.type) {
						case ho.d: {
							const r = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case ho.c:
						case ho.e:
						case ho.b: {
							const r = t.payload;
							return e[r.id] ? {
								...e,
								[r.id]: r
							} : e
						}
						case ho.a: {
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
			var vo = (e = !0, t) => {
					switch (t.type) {
						case So.a:
							return !1;
						case So.b:
							return !0;
						default:
							return e
					}
				},
				Do = r("./src/reddit/actions/emailVerificationTooltip.ts");
			var To = (e = !1, t) => {
					switch (t.type) {
						case Do.a:
							return !e;
						default:
							return e
					}
				},
				wo = r("./src/reddit/actions/moderatingSubreddits.ts");
			var jo = (e = !1, t) => {
					switch (t.type) {
						case wo.a: {
							if (e) return e;
							const r = t.payload;
							return Object.keys(r).some(e => !0 === r[e].posts)
						}
						case X.SUBREDDIT_LOADED:
						case W.b:
						case W.f:
						case Le.PAGE_LOADED: {
							if (e) return e;
							const {
								payload: r
							} = t;
							return r.subredditPermissions && r.subreddits ? !!r.subredditPermissions.posts : e
						}
						case K.i:
						case K.f:
						case K.m:
						case K.p:
						case K.v: {
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
				Ao = r("./src/reddit/actions/jsApi.ts");
			const Ro = [];
			var Co = (e = Ro, t) => {
					switch (t.type) {
						case Ao.a: {
							const r = t.payload;
							return -1 === e.indexOf(r) && (e = [...e, r]).sort(), e
						}
						default:
							return e
					}
				},
				Po = r("./src/reddit/actions/leaderboard/constants.ts");
			const Lo = {};
			var No = (e = Lo, t) => {
				switch (t.type) {
					case Po.a: {
						const {
							subredditId: r,
							data: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Po.b:
					case Po.c: {
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
						case Po.a:
						case Po.c: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...a
							} = e;
							return a
						}
						case Po.b: {
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
						case Po.c: {
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
					case E.a: {
						const {
							listingKey: r
						} = t.payload;
						return r || e
					}
					default:
						return e
				}
			};
			const Ho = {};
			var Vo = (e = Ho, t) => {
				switch (t.type) {
					case Me.d:
					case Me.e:
					case z.SEARCH_PENDING:
					case z.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Ue.Vb.Subreddits) && -1 === s.indexOf(Ue.Vb.Users) ? e : {
							...e,
							[r]: null
						}
					}
					case Me.c:
					case z.SEARCH_FAILED: {
						const {
							key: r,
							error: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ue.Vb.Subreddits) && -1 === a.indexOf(Ue.Vb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					case we.f:
					case we.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case we.d: {
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
			const qo = {};
			var Ko = (e = qo, t) => {
					switch (t.type) {
						case Me.d:
						case z.SEARCH_PENDING: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ue.Vb.Subreddits) && -1 === s.indexOf(Ue.Vb.Users) ? e : {
								...e,
								[r]: !0
							}
						}
						case Me.e:
						case Me.c:
						case z.SEARCH_RESULTS_RECEIVED:
						case z.SEARCH_FAILED: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ue.Vb.Subreddits) && -1 === s.indexOf(Ue.Vb.Users) ? e : {
								...e,
								[r]: !1
							}
						}
						case we.f: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case we.e:
						case we.d: {
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
					error: Vo,
					pending: Ko
				});
			const $o = {};
			var Qo = (e = $o, t) => {
				switch (t.type) {
					case Me.e: {
						const {
							fetchedToken: r,
							key: s,
							type: a
						} = t.payload;
						if (-1 === a.indexOf(Ue.Vb.Subreddits) && -1 === a.indexOf(Ue.Vb.Users)) return e;
						const n = e[s];
						return {
							...e,
							[s]: {
								...n,
								[r]: !0
							}
						}
					}
					case we.e: {
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
			const Jo = {};
			var zo = (e = Jo, t) => {
				switch (t.type) {
					case Me.e: {
						const {
							key: r,
							listingOrder: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ue.Vb.Subreddits) && -1 === a.indexOf(Ue.Vb.Users) ? e : {
							...e,
							[r]: e[r].concat(s)
						}
					}
					case z.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							listingOrder: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ue.Vb.Subreddits) && -1 === a.indexOf(Ue.Vb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Xo = {};
			var Yo = (e = Xo, t) => {
					switch (t.type) {
						case Me.e:
						case z.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								tokens: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Ue.Vb.Subreddits) && -1 === a.indexOf(Ue.Vb.Users) ? e : s.listings ? {
								...e,
								[r]: {
									token: s.listings
								}
							} : Object(Kt.a)(e, r)
						}
						case we.e: {
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
					fetchedTokens: Qo,
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
						case Pe.c:
						case Pe.b:
						case X.SUBREDDIT_PENDING:
						case X.SUBREDDIT_LOADED:
						case je.g:
						case je.f:
						case Ce.e:
						case Ce.f:
						case Ce.i:
						case Ce.h:
						case Re.s:
						case Re.r:
						case td.b:
						case td.c:
						case Q.PROFILE_POSTS_PENDING:
						case Q.PROFILE_POSTS_LOADED:
						case Q.MORE_POSTS_PENDING:
						case Q.MORE_POSTS_LOADED:
						case Y.f:
						case Y.e:
						case Ne.f:
						case Ne.e:
						case Z.j:
						case rd.TOPIC_DATA_PENDING:
						case rd.TOPIC_DATA_LOADED:
						case rd.MORE_POSTS_PENDING:
						case rd.MORE_POSTS_LOADED:
						case Z.i:
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
						case z.SEARCH_PENDING:
						case z.SEARCH_RESULTS_RECEIVED:
						case Me.d:
						case Me.e: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ue.Vb.Posts) ? e : {
								...e,
								[r]: null
							}
						}
						case je.a:
						case Pe.a:
						case X.SUBREDDIT_FAILED:
						case je.e:
						case Ce.g:
						case Re.q:
						case td.a:
						case Z.h:
						case Y.d:
						case Ne.d:
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
						case z.SEARCH_FAILED:
						case Me.c: {
							const {
								error: r,
								key: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Ue.Vb.Posts) ? e : {
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
						case Pe.c:
						case Q.PROFILE_POSTS_PENDING:
						case Ne.f:
						case X.SUBREDDIT_PENDING:
						case je.g:
						case Ce.f:
						case Ce.i:
						case Re.s:
						case td.c:
						case Y.f:
						case Q.MORE_POSTS_PENDING:
						case Z.j:
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
						case z.SEARCH_PENDING:
						case Me.d: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ue.Vb.Posts) ? e : {
								...e,
								[r]: !0
							}
						}
						case je.b:
						case je.a:
						case Pe.a:
						case Pe.b:
						case Ne.d:
						case Ne.e:
						case Q.PROFILE_POSTS_FAILED:
						case Q.PROFILE_POSTS_LOADED:
						case X.SUBREDDIT_LOADED:
						case X.SUBREDDIT_FAILED:
						case je.f:
						case je.e:
						case nd.a:
						case nd.b:
						case Ce.e:
						case Ce.d:
						case Ce.h:
						case Ce.g:
						case Re.r:
						case Re.q:
						case Y.d:
						case Y.e:
						case Q.MORE_POSTS_FAILED:
						case Q.MORE_POSTS_LOADED:
						case cd.j:
						case td.b:
						case td.a:
						case Z.i:
						case Z.h:
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
						case cd.r: {
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
						case z.SEARCH_RESULTS_RECEIVED:
						case z.SEARCH_FAILED:
						case Me.e:
						case Me.c: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ue.Vb.Posts) ? e : {
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
					case X.SUBREDDIT_INVALIDATE_LISTING:
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
						case Pe.b:
						case X.SUBREDDIT_LOADED:
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
						case Re.r:
						case Y.e:
						case Q.MORE_POSTS_LOADED:
						case Z.i:
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
						case Me.e: {
							const {
								fetchedToken: r,
								key: s,
								type: a
							} = t.payload;
							if (a.indexOf(Ue.Vb.Posts) > -1) {
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
						case X.SUBREDDIT_INVALIDATE_LISTING:
							return bd(e, t.payload);
						default:
							return e
					}
				},
				hd = r("./src/reddit/actions/post.ts");
			const _d = {};
			var Od = (e = _d, t) => {
					switch (t.type) {
						case je.c:
						case Ce.f:
						case Pe.c:
						case Q.PROFILE_POSTS_PENDING:
						case X.SUBREDDIT_PENDING:
						case Ne.f:
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
						case we.e:
						case nd.b:
						case Ce.e:
						case je.b:
						case Pe.b:
						case X.SUBREDDIT_LOADED:
						case cd.j:
						case td.b:
						case Ne.e:
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
						case cd.r: {
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
						case Re.r:
						case Q.MORE_POSTS_LOADED:
						case Y.e:
						case Z.i:
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
						case z.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								postOrder: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Ue.Vb.Posts) ? e : {
								...e,
								[r]: s
							}
						}
						case Me.e: {
							const {
								key: r,
								postOrder: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Ue.Vb.Posts) ? e : {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case hd.p: {
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
						case X.SUBREDDIT_INVALIDATE_LISTING:
							return bd(e, t.payload);
						default:
							return e
					}
				},
				Id = r("./src/lib/makeListingKey/index.ts");
			const gd = {};
			var Sd = (e = gd, t) => {
				switch (t.type) {
					case X.SUBREDDIT_LOADED: {
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
					case kr.p: {
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
			const vd = {};
			var Dd = (e = vd, t) => {
				switch (t.type) {
					case je.b:
					case Pe.b:
					case X.SUBREDDIT_LOADED:
					case Ne.e:
					case Q.PROFILE_POSTS_LOADED:
					case je.f:
					case Ce.e:
					case Ce.h:
					case Re.r:
					case Y.e:
					case Q.MORE_POSTS_LOADED:
					case Z.i:
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
					case Me.e:
					case z.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							tokens: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ue.Vb.Posts) ? e : s.posts ? {
							...e,
							[r]: {
								token: s.posts
							}
						} : Object(Kt.a)(e, r)
					}
					case X.SUBREDDIT_INVALIDATE_LISTING:
						return bd(e, t.payload);
					default:
						return e
				}
			};
			const Td = {};
			var wd = (e = Td, t) => {
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
				jd = Object(c.c)({
					api: id,
					endMarkers: yd,
					fetchedTokens: Ed,
					ids: Od,
					listingSort: Sd,
					loadMore: Dd,
					pageInfo: wd
				}),
				Ad = Object(c.c)({
					activeKey: Bo,
					listingOrder: Zo,
					postOrder: jd
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
			var Cd = (e = null, t) => {
				switch (t.type) {
					case je.b: {
						const r = t.payload;
						return sn()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Pd = (e = !1, t) => {
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
					featured: Cd,
					isFrontpageLoaded: Pd,
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
			var Hd = (e = .5, t) => {
					switch (t.type) {
						case kd.d:
							return t.payload;
						default:
							return e
					}
				},
				Vd = Object(c.c)({
					isMuted: Bd,
					volume: Hd
				}),
				qd = r("./src/reddit/actions/meta.ts");
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
				shredditExpBucket: "",
				userAgent: "",
				pageloadServerTime: 0
			};
			var Wd = (e = Kd, t) => {
					switch (t.type) {
						case qd.b:
							return t.payload;
						case qd.a:
							return {
								...e, ...t.payload
							};
						case qd.c:
							return {
								...e, locale: t.payload
							};
						default:
							return e
					}
				},
				$d = r("./src/reddit/actions/subredditModeration/constants.ts");
			const Qd = {};
			var Jd = (e = Qd, t) => {
				switch (t.type) {
					case X.SUBREDDIT_LOADED:
					case W.b:
					case W.f:
					case Le.PAGE_LOADED: {
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
					case K.i:
					case K.f:
					case K.m:
					case K.p:
					case K.v: {
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
					case Z.f:
					case Ce.e:
					case K.k: {
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
					case hd.g:
						return t.payload;
					case hd.f:
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
					error: Xd,
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
					case H.x: {
						const {
							moreCommentsId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case H.w: {
						const {
							moreCommentsItem: r
						} = t.payload;
						return {
							...e,
							[r.id]: null
						}
					}
					case H.v: {
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
						case H.x: {
							const {
								moreCommentsId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case H.v:
						case H.w: {
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
											prev: Object(li.h)(s),
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
						case H.w:
						case W.b:
						case W.f:
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
					case Re.b:
					case Re.c:
						return null;
					case Re.a:
						return t.payload;
					default:
						return e
				}
			};
			var mi = (e = !1, t) => {
				switch (t.type) {
					case Re.a:
					case Re.c:
						return !0;
					case Re.b:
						return !1;
					default:
						return e
				}
			};
			var Ei = (e = null, t) => {
					switch (t.type) {
						case Pe.b:
						case Re.a:
						case Re.c:
							return null;
						case Re.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				hi = Object(c.c)({
					error: yi,
					fetched: mi,
					pending: Ei
				});
			var _i = (e = null, t) => {
				switch (t.type) {
					case Re.f:
					case Re.g:
						return null;
					case Re.e:
						return t.payload;
					default:
						return e
				}
			};
			var Oi = (e = !1, t) => {
				switch (t.type) {
					case Re.e:
					case Re.g:
						return !0;
					case Re.f:
						return !1;
					default:
						return e
				}
			};
			var Ii = (e = !1, t) => {
					switch (t.type) {
						case Re.e:
						case Re.g:
							return !1;
						case Re.f:
							return !0;
						default:
							return e
					}
				},
				gi = Object(c.c)({
					error: _i,
					fetched: Oi,
					pending: Ii
				});
			var Si = (e = null, t) => {
				switch (t.type) {
					case Re.i:
					case Re.j:
						return null;
					case Re.h:
						return t.payload;
					default:
						return e
				}
			};
			var vi = (e = !1, t) => {
				switch (t.type) {
					case Re.h:
					case Re.j:
						return !0;
					case Re.i:
						return !1;
					default:
						return e
				}
			};
			var Di = (e = !1, t) => {
					switch (t.type) {
						case Re.h:
						case Re.j:
							return !1;
						case Re.i:
							return !0;
						default:
							return e
					}
				},
				Ti = Object(c.c)({
					error: Si,
					fetched: vi,
					pending: Di
				});
			var wi = (e = null, t) => {
				switch (t.type) {
					case Re.l:
					case Re.m:
						return null;
					case Re.k:
						return t.payload;
					default:
						return e
				}
			};
			var ji = (e = !1, t) => {
				switch (t.type) {
					case Re.k:
					case Re.m:
						return !0;
					case Re.l:
						return !1;
					default:
						return e
				}
			};
			var Ai = (e = !1, t) => {
					switch (t.type) {
						case Re.k:
						case Re.m:
							return !1;
						case Re.l:
							return !0;
						default:
							return e
					}
				},
				Ri = Object(c.c)({
					error: wi,
					fetched: ji,
					pending: Ai
				});
			var Ci = (e = null, t) => {
				switch (t.type) {
					case Re.o:
					case Re.p:
						return null;
					case Re.n:
						return t.payload;
					default:
						return e
				}
			};
			var Pi = (e = !1, t) => {
				switch (t.type) {
					case Re.n:
					case Re.p:
						return !0;
					case Re.o:
						return !1;
					default:
						return e
				}
			};
			var Li = (e = !1, t) => {
					switch (t.type) {
						case Re.n:
						case Re.p:
							return !1;
						case Re.o:
							return !0;
						default:
							return e
					}
				},
				Ni = Object(c.c)({
					error: Ci,
					fetched: Pi,
					pending: Li
				});
			var ki = (e = !1, t) => {
				switch (t.type) {
					case Re.t:
						return !1;
					case Re.u:
						return !0;
					default:
						return e
				}
			};
			var xi = (e = !1, t) => {
					switch (t.type) {
						case Re.t:
							return !0;
						case Re.u:
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
					case Re.A:
					case Re.B:
						return null;
					case Re.z:
						return t.payload;
					default:
						return e
				}
			};
			var Gi = (e = !1, t) => {
				switch (t.type) {
					case Re.A:
					case Re.z:
						return !1;
					case Re.B:
						return !0;
					default:
						return e
				}
			};
			var Fi = (e = !0, t) => {
					switch (t.type) {
						case Re.A:
							return !0;
						case Re.B:
						case Re.z:
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
			var Hi = (e = null, t) => {
				switch (t.type) {
					case Re.w:
					case Re.x:
						return null;
					case Re.v:
						return t.payload;
					default:
						return e
				}
			};
			var Vi = (e = !1, t) => {
				switch (t.type) {
					case Re.v:
					case Re.x:
						return !0;
					case Re.w:
						return !1;
					default:
						return e
				}
			};
			var qi = (e = null, t) => {
					switch (t.type) {
						case Re.v:
						case Re.x:
							return null;
						case Re.w:
							const {
								id: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				Ki = Object(c.c)({
					error: Hi,
					fetched: Vi,
					pending: qi
				}),
				Wi = Object(c.c)({
					addSubreddit: hi,
					create: gi,
					deleteMulti: Ti,
					duplicate: Ri,
					edit: Ni,
					forUser: Ui,
					recommendations: Bi,
					removeSubreddit: Ki
				}),
				$i = r("./node_modules/lodash/isEqual.js"),
				Qi = r.n($i),
				Ji = r("./node_modules/lodash/union.js"),
				zi = r.n(Ji);

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
			var Yi = r("./src/reddit/actions/profile/constants.ts");
			const Zi = {};
			var eu = (e = Zi, t) => {
					switch (t.type) {
						case Pe.b:
						case Re.r:
						case Re.u:
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
							return Qi()(e, n) ? e : n
						}
						case Re.g:
						case Re.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, a = e[r] ? e[r].slice() : [], n = Xi(a, s.url, (e, t) => e > t ? 1 : -1);
							return a.splice(n, 0, s.url), {
								...e,
								[r]: a
							}
						}
						case Re.j: {
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
					case Pe.b:
					case Re.r:
					case Re.u:
					case Yi.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const a = {
									...t.payload.multireddits[s]
								},
								n = e[s];
							n && !Object(ru.g)(a) && (a.subredditIds = n.subredditIds, a.profileIds = n.profileIds), s in e && Qi()(e[a.url], a) || (r = {
								...r,
								[s]: a
							})
						}
						return sn()(r) ? e : {
							...e,
							...r
						}
					}
					case Re.g:
					case Re.m: {
						const {
							multireddit: r
						} = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case Re.j: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r], s
					}
					case Re.p: {
						const r = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case Re.x: {
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
					case Re.c: {
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
						case Re.B: {
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
					case uu.e:
					case uu.b:
						return !1;
					default:
						return e
				}
			};
			var pu = (e = !1, t) => {
					switch (t.type) {
						case uu.e:
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
					case uu.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var yu = (e = null, t) => {
				switch (t.type) {
					case uu.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const mu = [];
			var Eu = (e = mu, t) => {
				switch (t.type) {
					case uu.b: {
						const r = t.payload && t.payload.nodes;
						return [...e, ...r]
					}
					case uu.f: {
						const r = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== r)
					}
					case uu.d: {
						const r = t.payload && t.payload.id,
							s = t.payload && t.payload.now,
							a = e.findIndex(e => e.id === r);
						return -1 === a ? e : [...e.slice(0, a), {
							...e[a],
							readAt: s
						}, ...e.slice(a + 1)]
					}
					case uu.c: {
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
			var hu = (e = null, t) => {
					switch (t.type) {
						case uu.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				_u = Object(c.c)({
					api: bu,
					earlierDividerIndex: fu,
					notifications: Eu,
					pageInfo: hu,
					markAllAsReadTimestamp: yu
				}),
				Ou = r("./src/reddit/actions/nps.ts");
			const Iu = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var gu = (e = Iu, t) => {
				switch (t.type) {
					case Ou.c:
						return {
							...Iu, pending: !0
						};
					case Ou.a:
						return Iu;
					case Ou.b: {
						const {
							dest: e
						} = t.payload;
						return {
							...Iu,
							success: !0,
							dest: e
						}
					}
					default:
						return e
				}
			};
			const Su = e => {
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
			const vu = e => {
					const t = {};
					for (const r of e) t[r.experimentName.toLowerCase()] = Su(r);
					return t
				},
				Du = {};
			var Tu = (e = Du, t) => {
				switch (t.type) {
					case Wn.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return vu(r)
					}
					default:
						return e
				}
			};
			var wu = Object(c.c)({
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
				ju = Object(c.c)({
					experiments: wu
				}),
				Au = r("./node_modules/history/esm/history.js");
			const Ru = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null,
				metas: {}
			};
			var Cu = (e = Ru, t) => {
				switch (t.type) {
					case E.a: {
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
					case E.e: {
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
					case E.f: {
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
					case W.b:
					case W.f:
						return !e.currentPage || t.payload.postMeta, e;
					case E.b:
						return e;
					case E.d: {
						const {
							allowNavigationCallback: r
						} = t.payload;
						return {
							...e,
							allowNavigationCallback: r
						}
					}
					case E.c:
						return {
							...e, allowNavigationCallback: null
						};
					default:
						return e
				}
			};
			const Pu = {};
			var Lu = (e = Pu, t) => {
				switch (t.type) {
					case y.k: {
						const {
							pollId: r
						} = t.payload.pollResults, {
							[r]: s,
							...a
						} = e;
						return a
					}
					case y.j: {
						const {
							pollId: r
						} = t.payload, {
							[r]: s,
							...a
						} = e;
						return a
					}
					case y.i: {
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
			const Nu = {};
			var ku = (e = Nu, t) => {
					switch (t.type) {
						case y.k: {
							const {
								pollId: r
							} = t.payload.pollResults;
							return {
								...e,
								[r]: !1
							}
						}
						case y.i: {
							const {
								pollId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case y.j: {
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
				xu = Object(c.c)({
					error: Lu,
					pending: ku
				}),
				Uu = Object(c.c)({
					voting: xu
				}),
				Mu = r("./src/reddit/actions/economics/predictions/constants.ts");
			const Gu = {};
			var Fu = (e = Gu, t) => {
				switch (t.type) {
					case y.h: {
						const {
							poll: r
						} = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case je.b:
					case X.SUBREDDIT_LOADED:
					case Z.i:
					case je.f:
					case W.b:
					case W.f:
					case Mu.f: {
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
									type: Aa.a.GA,
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
					case Mu.h:
					case Mu.g:
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
			const Bu = {};
			var Hu = (e = Bu, t) => {
				switch (t.type) {
					case y.k: {
						const {
							[Aa.b.ByVoters]: r, pollId: s
						} = t.payload.pollResults;
						return {
							...e,
							[s]: r
						}
					}
					case y.e: {
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
					case X.SUBREDDIT_LOADED:
					case Z.i:
					case je.f:
					case W.b:
					case W.f: {
						const {
							governance: r,
							posts: s
						} = t.payload;
						if (r) {
							const t = Object.keys(r).reduce((e, t) => {
								const s = r[t],
									{
										[Aa.b.ByVoters]: a,
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
			const Vu = {};
			var qu = (e = Vu, t) => {
					switch (t.type) {
						case y.k: {
							const {
								[Aa.b.ByVotingPower]: r, pollId: s
							} = t.payload.pollResults;
							return {
								...e,
								[s]: r
							}
						}
						case je.b:
						case X.SUBREDDIT_LOADED:
						case Z.i:
						case je.f:
						case W.b:
						case W.f: {
							const {
								governance: r
							} = t.payload;
							if (r) {
								const t = Object.keys(r).reduce((e, t) => {
									const s = r[t],
										{
											[Aa.b.ByVotingPower]: a,
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
				Ku = Object(c.c)({
					byVoters: Hu,
					byVotingPower: qu
				});
			const Wu = {};
			var $u = (e = Wu, t) => {
					switch (t.type) {
						case y.k: {
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
				Qu = Object(c.c)({
					api: Uu,
					models: Fu,
					results: Ku,
					rewards: $u
				});
			const Ju = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var zu = (e = Ju, t) => {
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
			const Xu = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var Yu = (e = Xu, t) => {
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
				Zu = Object(c.c)({
					error: zu,
					pending: Yu
				}),
				el = r("./src/reddit/helpers/path/index.ts");
			const tl = {},
				rl = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(el.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				};
			var sl = (e = tl, t) => {
				switch (t.type) {
					case Le.PAGE_LOADED:
					case Ce.e:
					case Ce.h:
					case $.b:
					case $.e:
					case Ne.e:
					case Ne.b:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case X.SUBREDDIT_LOADED:
					case je.b:
					case Pe.b:
					case X.SUBREDDIT_LOADED:
					case W.b:
					case W.f:
					case hd.k:
					case Re.r:
					case je.f:
					case Y.e:
					case "RECOMMENDED_POSTS_LOADED":
					case Z.i:
					case Me.e:
					case ke.b:
					case z.SEARCH_RESULTS_RECEIVED:
					case Br.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let a = r;
						if (s) {
							const e = rl(s);
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
							n = rl(s)(r)
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
			const al = {};
			var nl = (e = al, t) => {
					switch (t.type) {
						case Le.PAGE_LOADED:
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
				cl = Object(c.c)({
					models: sl,
					subredditToIds: nl,
					api: Zu
				}),
				ol = r("./src/reddit/actions/postFlair.ts"),
				dl = r("./src/reddit/models/Flair/index.ts");
			const il = {},
				ul = {
					displaySettings: {
						isEnabled: !1,
						position: dl.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				ll = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					return 0 === r.length ? e : r.reduce((e, r) => (e[r] = {
						...ul,
						...e[r],
						...t[r]
					}, e), {
						...e
					})
				};
			var pl = (e = il, t) => {
					switch (t.type) {
						case Le.PAGE_LOADED:
						case je.f:
						case Ce.e:
						case Ce.h:
						case Re.r:
						case td.b:
						case W.b:
						case W.f:
						case je.b:
						case Pe.b:
						case z.SEARCH_RESULTS_RECEIVED:
						case X.SUBREDDIT_LOADED:
						case $.b:
						case $.e:
						case J.c:
						case J.i:
						case J.e:
						case J.g:
						case Y.e:
						case ke.b:
						case ke.b:
						case Ne.b:
						case Ne.e:
						case Q.MORE_POSTS_LOADED:
						case Q.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Me.e:
						case Me.e:
						case Z.i:
							return ll(e, t.payload.postFlair);
						case ol.c: {
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
						case ol.a: {
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
						case ol.f: {
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
						case ol.b: {
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
						case ol.e:
						case ol.d: {
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
						case K.i:
						case K.f:
						case K.m:
						case K.p:
						case K.v: {
							const {
								response: r
							} = t.payload;
							return ll(e, r.postFlair)
						}
						default:
							return e
					}
				},
				bl = r("./src/reddit/actions/inFeedChaining.ts");
			var fl = (e = !1, t) => {
				switch (t.type) {
					case bl.a:
						return t.payload.isDismissed;
					default:
						return e
				}
			};
			const yl = {};
			var ml = (e = yl, t) => {
				switch (t.type) {
					case bl.c: {
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
			const El = {};
			var hl = (e = El, t) => {
					switch (t.type) {
						case bl.b:
							return {
								...e, [t.payload.postId]: t.payload.listingKey
							};
						default:
							return e
					}
				},
				_l = Object(c.c)({
					dismissed: fl,
					dismissedIdToListingKey: ml,
					idToListingKey: hl
				});
			var Ol = (e = null, t) => {
					switch (t.type) {
						case hd.b:
							return t.payload;
						default:
							return e
					}
				},
				Il = r("./src/reddit/actions/embedAndImage.ts");
			const gl = {};
			var Sl = (e = gl, t) => {
					switch (t.type) {
						case Il.b: {
							const {
								postId: r
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: !1
							} : e
						}
						case Il.a: {
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
				vl = Object(c.c)({
					loadable: Sl
				});
			const Dl = {};
			var Tl = (e = Dl, t) => {
				switch (t.type) {
					case hd.c: {
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
			var wl = (e = null, t) => {
				switch (t.type) {
					case hd.d: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const jl = [];
			var Al = (e = jl, t) => {
				switch (t.type) {
					case hd.o:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case hd.a:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case hd.e:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const Rl = {};
			var Cl = (e = Rl, t) => {
					switch (t.type) {
						case Ce.e:
						case Ce.h:
						case je.b:
						case X.SUBREDDIT_LOADED:
						case je.f:
						case Y.e:
						case "RECOMMENDED_POSTS_LOADED":
						case Z.i:
						case Me.e:
						case z.SEARCH_RESULTS_RECEIVED:
							return B()({
								...e
							}, t.payload.postInstances, (e, t) => {
								if (e) return e.concat(t)
							});
						default:
							return e
					}
				},
				Pl = r("./src/reddit/actions/isTrackingCrossposts.ts");
			const Ll = {};
			var Nl = (e = Ll, t) => {
				switch (t.type) {
					case Pl.a: {
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
			const kl = {};
			var xl = (e = kl, t) => {
					switch (t.type) {
						case y.h: {
							const {
								poll: r
							} = t.payload;
							return {
								...e,
								[r.postId]: r.id
							}
						}
						case je.b:
						case X.SUBREDDIT_LOADED:
						case Z.i:
						case je.f:
						case W.b:
						case W.f:
						case Mu.f: {
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
				Ul = r("./src/reddit/actions/bulkActions/constants.ts"),
				Ml = r("./src/reddit/actions/constants.ts"),
				Gl = r("./src/reddit/actions/flairManagement/constants.ts"),
				Fl = r("./src/reddit/actions/googleQASchema/constants.ts"),
				Bl = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				Hl = r("./src/reddit/actions/subredditTopContent.ts"),
				Vl = r("./src/reddit/helpers/isPost.ts"),
				ql = r("./node_modules/lodash/pickBy.js"),
				Kl = r.n(ql);

			function Wl(e, t) {
				const r = Kl()(t, (t, r = "") => !e[r] || !Qi()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var $l = r("./src/reddit/models/Gold/Gild/index.tsx"),
				Ql = r("./src/reddit/models/Media/index.ts"),
				Jl = r("./src/reddit/models/ModQueue/index.ts"),
				zl = r("./src/reddit/models/Post/index.ts"),
				Xl = r("./src/reddit/models/Vote/index.ts"),
				Yl = r("./src/reddit/actions/subredditDuplicates.ts");

			function Zl({
				tournamentId: e,
				name: t,
				status: r,
				totalParticipants: s,
				predictions: a
			}) {
				return {
					tournamentId: e,
					name: t,
					status: r,
					totalParticipantsCount: s,
					predictions: a.map(ep)
				}
			}

			function ep({
				id: e,
				title: t,
				resolvedOptionId: r,
				votingEndTimestamp: s,
				userWonAmount: a,
				totalStakeAmount: n,
				totalVoteCount: c,
				userSelection: o,
				isNSFW: d,
				options: i
			}) {
				return {
					id: e,
					title: t,
					endsAt: s,
					isNSFW: d,
					totalVoteCount: c,
					totalStakeAmount: n,
					wonAmount: a,
					resolvedOptionId: r,
					selectedOptionId: o,
					options: i.map(tp)
				}
			}

			function tp({
				userAmount: e,
				...t
			}) {
				return {
					...t,
					userStakeAmount: e
				}
			}
			const rp = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(el.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				},
				sp = e => t => {
					const r = e[t.id];
					return r && r.events && (t.events = r.events, t.source = r.source), t
				},
				ap = e => t => {
					const r = e[t.id];
					return r && r.isSponsored && (t.isSponsored = r.isSponsored), t
				},
				np = ({
					post: e,
					selectedOptionId: t
				}) => {
					if (e.pollData) return {
						...e,
						pollData: {
							...e.pollData,
							userSelection: t
						}
					}
				},
				cp = ({
					post: e,
					selectedOptionId: t,
					predictionId: r
				}) => {
					var s, a;
					if (e.predictionTournament) return {
						...e,
						predictionTournament: {
							...e.predictionTournament,
							predictions: null === (a = null === (s = e.predictionTournament) || void 0 === s ? void 0 : s.predictions) || void 0 === a ? void 0 : a.map(e => e.id === r ? {
								...e,
								selectedOptionId: t
							} : e)
						}
					}
				},
				op = ({
					tournamentData: e,
					...t
				}) => e ? {
					...t,
					predictionTournament: Zl(e)
				} : t,
				dp = e => e.media && Object(Ql.E)(e.media) ? {
					...Object(G.unsetIn)(e, ["source"])
				} : e,
				ip = e => t => {
					const r = e[t.id];
					return t && t.media && r && r.media && Object(Ql.H)(t.media) && t.media.isRichtextPreview && Object(Ql.H)(r.media) && !r.media.isRichtextPreview && (t.media.richtextContent = r.media.richtextContent, t.media.isRichtextPreview = !1), t
				},
				up = e => t => {
					const r = e[t.id];
					return r && r.numDuplicates && (t.numDuplicates = r.numDuplicates), t
				},
				lp = e => {
					let t = e.source;
					return t && t.outboundUrlCreated && (t = {
						...t,
						outboundUrlReceived: Date.now()
					}, e.source = t), e
				},
				pp = e => {
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
				bp = e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				},
				fp = (e, t) => ({
					...e,
					events: t.events,
					source: t.source
				}),
				yp = {};
			var mp = (e = yp, t) => {
				switch (t.type) {
					case E.a:
						if (Fs(t) === (Ue.Jb.COMMENTS || Ue.Jb.DUPLICATES)) {
							const r = Bs(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									a = Object(zl.s)(s.partialPostId);
								if (e[a] && e[t]) return {
									...e,
									[a]: fp(e[a], e[t])
								}
							}
						}
						return e;
					case W.b:
					case W.f: {
						const r = rp(t.payload.meta);
						return {
							...e,
							...xt()(t.payload.posts, bp([r, lp, pp, dp, op, sp(e), ap(e), up(e)]))
						}
					}
					case hd.k:
						return Wl(e, t.payload);
					case Yl.a:
						return Wl(e, t.payload.posts);
					case Le.PAGE_LOADED:
					case nd.b:
					case Ce.e:
					case Ce.h:
					case $.b:
					case $.e:
					case Ne.e:
					case Ne.b:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case X.SUBREDDIT_LOADED:
					case je.b:
					case Pe.b:
					case X.SUBREDDIT_LOADED:
					case td.b:
					case Re.r:
					case je.f:
					case Y.e:
					case "RECOMMENDED_POSTS_LOADED":
					case cd.j:
					case Z.i:
					case ke.b:
					case rd.TOPIC_DATA_LOADED:
					case rd.MORE_POSTS_LOADED:
					case ed.c:
					case ed.d:
					case Mu.f: {
						const r = rp(t.payload.meta);
						return {
							...e,
							...xt()(t.payload.posts, bp([r, lp, pp, dp, op, ip(e), up(e)]))
						}
					}
					case cd.r: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								a = rp(t.meta);
							Object.assign(r, xt()(t.posts, bp([a, lp, pp, dp, ip(e), up(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case td.b: {
						const r = rp(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...xt()(t.payload.posts, bp([r, lp, pp, dp, ip(e), up(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case we.e:
					case Me.e:
					case z.SEARCH_RESULTS_RECEIVED: {
						const r = rp(t.payload.meta),
							s = xt()(t.payload.posts, bp([r, pp, lp, dp]));
						return B()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case hd.l: {
						const r = t.payload;
						return B()({
							...e
						}, r, (e, t) => ({
							...e,
							...t
						}))
					}
					case Ml.a: {
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
					case H.J: {
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
					case hd.i: {
						const {
							postId: r,
							delta: s
						} = t.payload, a = e[r];
						if (a) {
							const t = a.numComments + s;
							return {
								...e,
								[r]: {
									...a,
									numComments: t
								}
							}
						}
						return e
					}
					case hd.j: {
						const {
							postId: r,
							delta: s
						} = t.payload, a = e[r];
						if (a) {
							const t = a.score + s;
							return {
								...e,
								[r]: {
									...a,
									score: t
								}
							}
						}
						return e
					}
					case H.A: {
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
					case ce.rb: {
						const {
							topAwardedPosts: r
						} = t.payload;
						return {
							...e,
							...r.reduce((e, t) => (e[t.post.id] = bp([pp])(Object(zs.e)(t.post)), e), {})
						}
					}
					case ce.t: {
						const {
							id: r,
							awardings: s,
							gilder: a,
							treatmentTags: n
						} = t.payload, c = e[r];
						return c ? {
							...e,
							[r]: {
								...Object($l.a)(c, s, a),
								treatmentTags: n
							}
						} : e
					}
					case ce.E: {
						const {
							awardId: r,
							thingId: s
						} = t.payload, a = e[s];
						return a ? {
							...e,
							[s]: Object($l.b)(a, r)
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
					case K.i:
					case K.f:
					case K.m:
					case K.p:
					case K.v: {
						const {
							response: r
						} = t.payload, {
							posts: s
						} = r;
						return {
							...e,
							...xt()(s, bp([pp, dp]))
						}
					}
					case Ul.b:
					case K.s: {
						const {
							operation: r,
							ids: s,
							username: a,
							options: n
						} = t.payload, c = s.filter(e => Object(Vl.a)(e)), o = Object(Jl.d)(e, r, c, a, n);
						return B()({
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
							...xt()(r.posts, bp([pp, dp])),
							...e
						} : e
					}
					case J.c:
					case J.i:
					case J.e:
					case J.g:
					case Hl.b:
						return {
							...xt()(t.payload.posts, bp([pp, dp])), ...e
						};
					case hd.n: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, a = e[r];
						return a && a.media && Object(Ql.H)(a.media) ? {
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
					case Gl.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Gl.b: {
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
					case S.o: {
						const r = t.payload.reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							...r
						}
					}
					case Bl.b: {
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
					case Mu.k: {
						const {
							postId: r,
							predictionId: s,
							selectedOptionId: a
						} = t.payload;
						return {
							...e,
							[s]: np({
								post: e[s],
								selectedOptionId: a
							}),
							[r]: cp({
								post: e[r],
								selectedOptionId: a,
								predictionId: s
							})
						}
					}
					case Bl.a:
						return {
							...e
						};
					case Fl.b: {
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
					case Fl.a:
						return {
							...e
						};
					default:
						return e
				}
			};
			var Ep = (e = null, t) => {
					switch (t.type) {
						case hd.h:
							return t.payload;
						default:
							return e
					}
				},
				hp = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const _p = {};
			var Op = (e = _p, t) => {
				switch (t.type) {
					case hp.a: {
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
			const Ip = [];
			var gp = (e = Ip, t) => {
					switch (t.type) {
						case hd.m: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case je.b:
						case X.SUBREDDIT_LOADED: {
							const {
								recentPostIds: r
							} = t.payload;
							return r && r.length ? r : e
						}
						default:
							return e
					}
				},
				Sp = r("./node_modules/uuid/v4.js"),
				vp = r.n(Sp);
			const Dp = vp()();
			var Tp = (e = Dp, t) => {
				switch (t.type) {
					case Le.PAGE_LOADED:
					case Is.h:
					case Is.a:
					case Is.m:
					case Is.f:
						return vp()();
					default:
						return e
				}
			};
			var wp = (e = null, t) => {
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
			var jp = (e = !0, t) => {
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
			var Ap = (e = !1, t) => {
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
				Rp = Object(c.c)({
					creationToken: Tp,
					error: wp,
					pending: jp,
					pendingUpdate: Ap
				});
			const Cp = {};
			var Pp = (e = Cp, t) => {
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
			const Lp = {
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

			function Np(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case Lp[e].POSTS_LOADED:
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
						case Lp[e].MUTATION_SUCCEEDED: {
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
			const kp = {};

			function xp(e) {
				return (t = kp, r) => {
					switch (r.type) {
						case Lp[e].POSTS_LOADED:
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
			var Up = r("./node_modules/lodash/uniq.js"),
				Mp = r.n(Up);
			const Gp = {};

			function Fp(e) {
				return (t = Gp, r) => {
					switch (r.type) {
						case Lp[e].POSTS_LOADED:
						case Is.f: {
							const {
								subredditInfoById: s
							} = r.payload, a = s.id, n = s.scheduledPosts[Lp[e].postIdsKey];
							return {
								...t,
								[a]: Mp()([...t[a] || [], ...n])
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
			var Bp = Object(c.c)({
					models: Np("recurringPosts"),
					pageInfo: xp("recurringPosts"),
					postOrder: Fp("recurringPosts"),
					editModal: Pp
				}),
				Hp = Object(c.c)({
					models: Np("standalonePosts"),
					pageInfo: xp("standalonePosts"),
					postOrder: Fp("standalonePosts")
				}),
				Vp = Object(c.c)({
					api: Rp,
					standalonePosts: Hp,
					recurringPosts: Bp
				});
			var qp = (e = null, t) => {
				switch (t.type) {
					case ce.qb:
						return t.payload;
					case ce.sb:
					case ce.rb:
						return null;
					default:
						return e
				}
			};
			var Kp = (e = !1, t) => {
					switch (t.type) {
						case ce.rb:
						case ce.qb:
							return !1;
						case ce.sb:
							return !0;
						default:
							return e
					}
				},
				Wp = Object(c.c)({
					error: qp,
					pending: Kp
				});
			const $p = [];
			var Qp = (e = $p, t) => {
					switch (t.type) {
						case ce.rb: {
							const {
								topAwardedPosts: e
							} = t.payload;
							return e.filter(e => !(e.post.isNsfw || e.post.isArchived || e.post.isHidden || e.post.removedBy || e.post.removedByCategory && "NONE" !== e.post.removedByCategory)).map(e => ({
								postId: e.post.id,
								rank: e.rank,
								score: e.score
							}))
						}
						case ce.qb:
						case ce.sb:
							return $p;
						default:
							return e
					}
				},
				Jp = Object(c.c)({
					api: Wp,
					list: Qp
				}),
				zp = r("./src/reddit/actions/video.ts");
			const Xp = {};
			var Yp = (e = Xp, t) => {
				switch (t.type) {
					case zp.e: {
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
			const Zp = {};
			var eb = (e = Zp, t) => {
				switch (t.type) {
					case zp.a: {
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
			const tb = {};
			var rb = (e = tb, t) => {
				switch (t.type) {
					case zp.b: {
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
			const sb = {};
			var ab = (e = sb, t) => {
				switch (t.type) {
					case zp.c: {
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
			const nb = {
				mutedInFeed: !0
			};
			var cb = (e = nb, t) => {
				switch (t.type) {
					case zp.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var ob = (e = null, t) => {
				switch (t.type) {
					case zp.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case zp.d:
						return null;
					default:
						return e
				}
			};
			const db = {};
			var ib = (e = db, t) => {
				switch (t.type) {
					case zp.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case zp.e: {
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
			const ub = {};
			var lb = (e = ub, t) => {
				switch (t.type) {
					case zp.h: {
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
					case zp.f: {
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
			const pb = {};
			var bb = (e = pb, t) => {
				switch (t.type) {
					case zp.j: {
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
			const fb = {};
			var yb = (e = fb, t) => {
				switch (t.type) {
					case zp.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case zp.g: {
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
			const mb = {};
			var Eb = (e = mb, t) => {
				switch (t.type) {
					case zp.i: {
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
			const hb = {};
			var _b = (e = hb, t) => {
					switch (t.type) {
						case zp.m: {
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
				Ob = r("./src/reddit/constants/video.ts");
			const Ib = {};
			var gb = (e = Ib, t) => {
					switch (t.type) {
						case zp.n: {
							const {
								postId: r,
								time: s
							} = t.payload;
							return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < Ob.l ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Sb = Object(c.c)({
					autoPlayed: Yp,
					buffering: eb,
					consumed: rb,
					continuousViewStartedAt: ab,
					feed: cb,
					fullscreen: ob,
					loadable: ib,
					loadTimes: lb,
					metadata: bb,
					paused: yb,
					playing: Eb,
					started: _b,
					time: gb
				}),
				vb = Object(c.c)({
					chained: _l,
					embedAndImage: vl,
					expanded: Tl,
					focus: wl,
					followed: Al,
					instances: Cl,
					isTrackingCrossposts: Nl,
					metaMap: xl,
					models: mp,
					modToMemberShare: Ep,
					crowdControl: Ol,
					postLevelCrowdControl: Op,
					recent: gp,
					scheduledPosts: Vp,
					topAwarded: Jp,
					video: Sb
				}),
				Db = r("./src/lib/reducers/addAuthentication/index.ts");
			const Tb = {};
			var wb = Object(Db.a)((e = Tb, t) => {
					switch (t.type) {
						case W.b:
						case W.f: {
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
						case H.F: {
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
				}, Tb),
				jb = Object(c.c)({
					data: wb
				});
			const Ab = {};
			var Rb = (e = Ab, t) => {
				switch (t.type) {
					case h.f:
					case h.g: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case h.e: {
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
			const Cb = {};
			var Pb = (e = Cb, t) => {
					switch (t.type) {
						case h.f: {
							const {
								subredditId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case h.g:
						case h.e: {
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
				Lb = Object(c.c)({
					error: Rb,
					pending: Pb
				});
			const Nb = {};
			var kb = (e = Nb, t) => {
				switch (t.type) {
					case h.d: {
						const {
							product: r
						} = t.payload;
						return {
							...e,
							[r.id]: void 0
						}
					}
					case h.c:
					case m.f:
					case m.g:
					case m.i:
					case m.j: {
						const {
							productId: r
						} = t.payload;
						return {
							...e,
							[r]: void 0
						}
					}
					case h.a:
					case m.d:
					case m.h: {
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
			const xb = {};
			var Ub = (e = xb, t) => {
					switch (t.type) {
						case h.c:
						case m.f: {
							const {
								productId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case h.d: {
							const {
								product: r
							} = t.payload;
							return {
								...e,
								[r.id]: !1
							}
						}
						case h.a:
						case m.d:
						case m.g: {
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
				Mb = Object(c.c)({
					error: kb,
					pending: Ub
				}),
				Gb = Object(c.c)({
					fetch: Lb,
					purchase: Mb
				});
			var Fb = (e = null, t) => {
				switch (t.type) {
					case h.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const Bb = {};
			var Hb = (e = Bb, t) => {
					switch (t.type) {
						case f.i:
						case h.g: {
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
				Vb = Object(c.c)({
					api: Gb,
					currentlyPurchasing: Fb,
					models: Hb
				});
			const qb = {};
			var Kb = (e = qb, t) => {
				switch (t.type) {
					case $.f:
					case $.e:
					case $.c:
					case $.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case $.d:
					case $.a: {
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
			const Wb = {};
			var $b = (e = Wb, t) => {
					switch (t.type) {
						case $.f:
						case $.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case $.e:
						case $.d:
						case $.b:
						case $.a: {
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
				Qb = Object(c.c)({
					error: Kb,
					pending: $b
				});
			const Jb = {};
			var zb = (e = Jb, t) => {
					switch (t.type) {
						case $.e: {
							const {
								key: r,
								commentIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case $.b: {
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
				Xb = r("./src/reddit/actions/comment/list.ts");
			const Yb = {};
			var Zb = (e = Yb, t) => {
				switch (t.type) {
					case Xb.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Xb.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? xs()(e, r) : e
					}
					default:
						return e
				}
			};
			const ef = {};
			var tf = (e = ef, t) => {
				switch (t.type) {
					case $.e: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {}
						}
					}
					case $.b: {
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
			const rf = {};
			var sf = (e = rf, t) => {
					switch (t.type) {
						case $.e:
						case $.b: {
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
				af = Object(c.c)({
					api: Qb,
					endMarkers: Zb,
					fetchedTokens: tf,
					commentIds: zb,
					loadMore: sf
				}),
				nf = r("./src/reddit/actions/pages/profileModSettings.ts");
			var cf = (e = !0, t) => {
					switch (t.type) {
						case nf.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				of = Object(c.c)({
					pending: cf
				}),
				df = Object(c.c)({
					api: of
				});
			const uf = {};
			var lf = (e = uf, t) => (t.type, e);
			const pf = {};
			var bf = (e = pf, t) => {
				switch (t.type) {
					case J.a:
					case J.d: {
						const {
							listingKey: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case J.b:
					case J.c:
					case J.i:
					case J.f:
					case J.e:
					case J.g: {
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
			const ff = {};
			var yf = (e = ff, t) => {
					switch (t.type) {
						case J.b:
						case J.f: {
							const {
								listingKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case J.a:
						case J.d:
						case J.c:
						case J.i:
						case J.e:
						case J.g: {
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
				mf = Object(c.c)({
					error: bf,
					pending: yf
				});
			const Ef = {};
			var hf = (e = Ef, t) => {
				switch (t.type) {
					case J.c:
					case J.i:
					case J.e:
					case J.g: {
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
			const _f = {};
			var Of = (e = _f, t) => {
					switch (t.type) {
						case J.i:
						case J.c:
						case J.e:
						case J.g: {
							const {
								pageInfo: r,
								listingKey: s
							} = t.payload;
							return r ? {
								...e,
								[s]: r
							} : _f
						}
						default:
							return e
					}
				},
				If = Object(c.c)({
					api: mf,
					ids: hf,
					pageInfo: Of
				}),
				gf = r("./src/reddit/constants/posts.ts");
			const Sf = {};
			var vf = (e = Sf, t) => {
				switch (t.type) {
					case z.SEARCH_RESULTS_RECEIVED:
					case Me.e:
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
						} = t.payload, a = r.filter(e => e.type === gf.a.PROFILE);
						return a.length ? a.reduce((e, t) => (e[t.id] = {
							...e[t.id],
							userIsSubscriber: s
						}, e), {
							...e
						}) : e
					}
					case kr.m: {
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
			const Df = {};
			var Tf = (e = Df, t) => {
				switch (t.type) {
					case je.f:
					case W.b:
					case W.f:
					case je.b:
					case $.b:
					case $.e:
					case J.c:
					case J.i:
					case J.e:
					case J.g:
					case Ne.b:
					case Ne.e:
					case Q.PROFILE_POSTS_LOADED:
					case ke.b:
					case je.f:
					case Ce.e:
					case Ce.h:
					case Re.u:
					case Yi.h:
					case td.b:
					case Me.e:
					case Z.i:
					case Yi.m:
					case Y.b:
					case Y.e:
					case z.SEARCH_RESULTS_RECEIVED:
					case Le.PAGE_LOADED:
					case Wr.e:
					case Us.PAGE_LOADED:
					case X.SUBREDDIT_LOADED:
					case Pe.b:
					case "RECOMMENDED_POSTS_LOADED":
					case tu.c:
						return Object(G.merge)(e, t.payload.profiles);
					case Me.g: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return Object.keys(r).length ? Object(G.merge)(e, r) : e
					}
					case K.i:
					case K.f:
					case K.m:
					case K.p:
					case K.v:
					case K.k: {
						const {
							response: r
						} = t.payload, s = r && r.profiles;
						return Object(G.merge)(e, s)
					}
					case Yi.l:
					case Yi.k: {
						const {
							profile: r
						} = t.payload;
						return r ? Object(G.merge)(e, {
							[r.id]: r
						}) : e
					}
					case kr.m: {
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
					case kr.k:
					case kr.j: {
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
			const wf = {};
			var jf = (e = wf, t) => {
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
				Af = Object(c.c)({
					pending: jf
				});
			const Rf = {};
			var Cf = (e = Rf, t) => {
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
					case J.c:
					case J.i:
					case J.e:
					case J.g: {
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
			const Pf = {};
			var Lf = (e = Pf, t) => {
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
						case J.c:
						case J.i: {
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
				Nf = Object(c.c)({
					api: Af,
					models: Cf,
					pageInfo: Lf
				});
			const kf = {};
			var xf = (e = kf, t) => {
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
				Uf = Object(c.c)({
					pending: xf
				});
			const Mf = {};
			var Gf = (e = Mf, t) => {
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
				Ff = Object(c.c)({
					api: Uf,
					pageInfo: Gf
				}),
				Bf = r("./src/reddit/actions/pinnedPost.ts");
			const Hf = {};
			var Vf = Object(Db.a)((e = Hf, t) => {
				switch (t.type) {
					case Bf.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case Bf.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, a = e[s] || [];
						return {
							...e,
							[s]: [...a, r].slice(-Ue.ab)
						}
					}
					case Bf.g: {
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
			}, Hf);
			const qf = {};
			var Kf = Object(Db.a)((e = qf, t) => {
				switch (t.type) {
					case Bf.a: {
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
			}, qf);
			const Wf = {};
			var $f = Object(Db.a)((e = Wf, t) => {
					switch (t.type) {
						case Bf.c:
						case Bf.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, a = e[s] || [];
							return {
								...e,
								[s]: [...a, r]
							}
						}
						case Bf.b:
						case Bf.e:
						case Bf.d:
						case Bf.g: {
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
				}, Wf),
				Qf = Object(c.c)({
					data: Vf,
					initialData: Kf,
					pending: $f
				}),
				Jf = r("./src/reddit/actions/trophyCase.ts");
			const zf = {};
			var Xf, Yf, Zf = (e = zf, t) => {
					switch (t.type) {
						case Jf.a: {
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
				ey = Object(c.c)({
					about: vf,
					models: Tf,
					moderated: Nf,
					multireddits: Ff,
					pinnedPosts: Qf,
					trophyCases: Zf
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Xf || (Xf = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Yf || (Yf = {}));
			var ty, ry, sy;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(ty || (ty = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(ry || (ry = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(sy || (sy = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(ty || (ty = {}));
			Object(xe.a)("PROMO__SHOW_PROMO"), Object(xe.a)("PROMO__HIDE_PROMO");
			const ay = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var ny = (e = ay, t) => {
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
				cy = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const oy = {
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
			var dy = (e = oy, t) => {
				switch (t.type) {
					case cy.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case cy.x: {
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
			var iy = (e = {}, t) => {
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
							[cy.b]: t, ...r
						} = e;
						return r
					}
					case cy.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const uy = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var ly = (e = {}, t) => {
				switch (t.type) {
					case cy.N:
						return uy(e, t.payload, !0);
					case cy.O:
						return uy(e, cy.b, !0);
					case cy.y:
						return uy(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case cy.z:
						return uy(e, cy.b, !1, t.payload.utcTimeStamp);
					case cy.M:
						return uy(e, t.payload.streamId, !1);
					case cy.L:
						return uy(e, cy.b, !1);
					default:
						return e
				}
			};
			const py = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var by = (e = py, t) => {
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
				fy = Object(c.c)({
					config: dy,
					error: iy,
					pending: ly,
					recommendedViewerSubreddits: by
				});
			const yy = {};
			var my = (e = yy, t) => {
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
			const Ey = {
				cursor: cy.W,
				timestamps: {},
				visitOrder: []
			};
			var hy = (e = Ey, t) => {
				switch (t.type) {
					case cy.P:
						return Ey;
					case cy.X: {
						const r = t.payload,
							s = e.visitOrder.includes(r) ? e.visitOrder : [...e.visitOrder, r],
							a = s.indexOf(r);
						return s === e.visitOrder && a === e.cursor ? e : {
							...e,
							visitOrder: s,
							cursor: a
						}
					}
					case _.d:
						return _y(e, t.payload.id);
					case cy.E:
						return _y(e, t.payload);
					case hd.l: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return Oy(e, r)
					}
					case cy.V: {
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
			const _y = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				Oy = (e, t) => {
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
				Iy = {
					ended: [],
					removed: []
				};

			function gy(e) {
				return [...new Set(e)]
			}
			var Sy = (e = Iy, t) => {
				switch (t.type) {
					case cy.t:
						return {
							...e, ended: gy(e.ended.concat(t.payload))
						};
					case cy.u:
						return {
							...e, removed: gy(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const vy = {};
			var Dy = (e = vy, t) => {
				switch (t.type) {
					case cy.z:
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
			const Ty = {},
				wy = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: cy.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: cy.l - r
						}
					}), r)
				},
				jy = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : cy.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var Ay = (e = Ty, t) => {
				switch (t.type) {
					case cy.y:
						return jy(e, t.payload.model);
					case cy.z:
						return wy(e, t.payload.models);
					case cy.D: {
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
			const Ry = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var Cy = (e = Ry, t) => {
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
			const Py = {
				reported: []
			};
			var Ly = (e = Py, t) => {
				switch (t.type) {
					case _.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const Ny = {
				isIntroFinished: !1
			};
			var ky = (e = Ny, t) => {
				switch (t.type) {
					case cy.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const xy = {
				reportedStreams: []
			};
			var Uy = (e = xy, t) => {
					switch (t.type) {
						case cy.C:
							return {
								...e, ...t.payload
							};
						case _.d: {
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
				My = Object(c.c)({
					api: fy,
					history: hy,
					hlsStreams: Sy,
					listings: Dy,
					models: Ay,
					preloads: Cy,
					reports: Ly,
					theaterSettings: ky,
					userSettings: Uy,
					automuteLevels: my
				}),
				Gy = r("./src/reddit/actions/recentSubreddits/constants.ts"),
				Fy = r("./src/reddit/actions/session.ts");
			const By = [];
			var Hy = (e = By, t) => {
				switch (t.type) {
					case Fy.c:
					case Fy.d:
						return By;
					case Gy.d:
						return ((e, t) => Qi()(e, t) ? e : t)(e, t.subreddits);
					case Gy.f: {
						const {
							payload: r
						} = t, s = [r, ...e];
						return Array.from(new Set(s)).slice(0, Gy.c)
					}
					case Gy.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, Gy.c)
					}
					default:
						return e
				}
			};
			const Vy = {};
			var qy = (e = Vy, t) => {
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
				Ky = r("./src/reddit/actions/pages/report/constants.ts");
			var Wy = (e = null, t) => {
				switch (t.type) {
					case Ky.a:
						return t.payload;
					default:
						return e
				}
			};
			var $y = (e = null, t) => {
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
			var Qy = (e = !1, t) => {
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
			var Jy = (e = !1, t) => {
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
				zy = Object(c.c)({
					error: $y,
					pending: Qy,
					success: Jy
				}),
				Xy = r("./src/reddit/actions/reportPageRules/constants.ts");
			const Yy = [];
			var Zy = (e = Yy, t) => {
					switch (t.type) {
						case Xy.a:
							return t.payload;
						default:
							return e
					}
				},
				em = Object(c.c)({
					reportPageApi: zy,
					reportPageRules: Zy,
					initialReason: Wy
				}),
				tm = r("./src/reddit/actions/reportRules.ts");
			const rm = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var sm = (e = rm, t) => {
				switch (t.type) {
					case tm.b:
						return {
							...e, sitewideRules: t.payload
						};
					case tm.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(xe.a)("REQUEST_HOST_SET");
			var am = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(xe.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const nm = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var cm = (e = nm, t) => {
					switch (t.type) {
						case "RUN_TIME_ENV_VARS__IS_STAGING":
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				om = r("./src/reddit/components/SearchDropdown/index.tsx");
			var dm = (e = !1, t) => {
				switch (t.type) {
					case Me.b:
						return !e;
					case fo.b: {
						const {
							event: r
						} = t.payload, s = r.target, a = document.getElementById(om.b), n = document.getElementById(om.a);
						return !(!s || !((null == a ? void 0 : a.contains(s)) || (null == n ? void 0 : n.contains(s)))) && e
					}
					case Me.a:
					case fo.a:
					case fo.c:
						return !1;
					default:
						return e
				}
			};
			const im = Object.create(null);
			var um = (e = im, t) => {
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case Me.f: {
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
			var lm = (e = null, t) => {
				switch (t.type) {
					case z.SEARCH_RESULTS_RECEIVED:
					case Me.h: {
						const {
							searchQuery: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			const pm = Object.create(null);
			var bm = (e = pm, t) => {
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Me.g: {
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
				fm = r("./src/reddit/models/Search/index.ts");
			const ym = {};
			var mm = (e = ym, t) => {
					switch (t.type) {
						case Me.g: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(fm.d)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				Em = Object(c.c)({
					idsByQuery: bm,
					models: mm
				});
			const hm = {};
			var _m = (e = hm, t) => {
					switch (t.type) {
						case z.SEARCH_RESULTS_RECEIVED: {
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
				Om = Object(c.c)({
					isDropdownOpen: dm,
					relatedQueries: um,
					searchQuery: lm,
					typeahead: Em,
					viewTreatment: _m
				}),
				Im = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const gm = {};
			var Sm = (e = gm, t) => {
				switch (t.type) {
					case z.SEARCH_RESULTS_RECEIVED: {
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
						if (i === Im.c.Trending || r) {
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
			const vm = {};
			var Dm = (e = vm, t) => {
				switch (t.type) {
					case z.SEARCH_RESULTS_RECEIVED: {
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
			const Tm = {};
			var wm = (e = Tm, t) => {
					switch (t.type) {
						case z.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : Tm
						}
						default:
							return e
					}
				},
				jm = Object(c.c)({
					headerContent: Sm,
					models: Dm,
					order: wm
				});
			Object(xe.a)("SEO__CRAWLER_RECEIVED");
			var Am = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				Rm = r("./src/reddit/actions/seo/linksModule.ts");
			const Cm = {};
			var Pm = (e = Cm, t) => {
					switch (t.type) {
						case Rm.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case Rm.c:
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
				Lm = r("./src/reddit/actions/seo/topicLinks.ts");
			const Nm = {};
			var km = (e = Nm, t) => {
					switch (t.type) {
						case Lm.a:
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
				xm = Object(c.c)({
					crawler: Am,
					linksModule: Pm,
					topicLinks: km
				}),
				Um = r("./src/reddit/actions/shortcuts/constants.ts");
			var Mm = (e = null, t) => {
				switch (t.type) {
					case Um.a:
						return t.payload;
					case E.a:
						return null;
					default:
						return e
				}
			};
			var Gm = (e = null, t) => {
					switch (t.type) {
						case Um.b:
							return t.payload || null;
						default:
							return e
					}
				},
				Fm = r("./src/reddit/constants/history.ts"),
				Bm = r("./src/reddit/constants/shortcuts.ts"),
				Hm = r("./src/reddit/helpers/history/index.ts");
			const Vm = Bm.d.Global,
				qm = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(Hm.b)(Fm.a.IsOverlay) ? Bm.d.Lightbox : Bm.d.CommentPage;
						case "rpan":
						case "subredditCreation":
							return Object(Hm.b)(Fm.a.IsOverlay) ? Bm.d.Lightbox : Vm;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return Bm.d.Listing;
						case "modQueuePages":
							return Bm.d.Modqueue;
						default:
							return Vm
					}
				};
			var Km = (e = Vm, t) => {
					switch (t.type) {
						case E.a:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return qm(e)
							}
							return Vm;
						default:
							return e
					}
				},
				Wm = Object(c.c)({
					activeCommentId: Mm,
					activePostId: Gm,
					namespace: Km
				});
			var $m = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case S.q:
						case S.r:
							return !0;
						default:
							return e
					}
				},
				Qm = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Jm = Object(c.c)({
					firstFetch: $m,
					models: Qm.b
				}),
				zm = r("./src/reddit/actions/streaming/modSettings.ts");
			var Xm = (e = null, t) => {
				switch (t.type) {
					case zm.b:
					case zm.c:
						return null;
					case zm.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Ym = (e = !1, t) => {
					switch (t.type) {
						case zm.b:
							return !0;
						case zm.c:
						case zm.a:
							return !1;
						default:
							return e
					}
				},
				Zm = Object(c.c)({
					error: Xm,
					pending: Ym
				}),
				eE = r("./src/reddit/actions/streaming/constants.ts");
			const tE = {};
			var rE = (e = tE, t) => {
					switch (t.type) {
						case eE.a: {
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
				sE = Object(c.c)({
					api: Zm,
					modSettings: rE
				}),
				aE = r("./src/reddit/models/StructuredStyles/index.ts");
			const nE = {};
			var cE = (e = nE, t) => {
					switch (t.type) {
						case O.h:
						case O.b:
						case O.d:
							return t.payload.styles;
						case O.e:
							return nE;
						case O.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case O.k: {
							const e = t.payload;
							return Object(aE.h)(e.styles)
						}
						default:
							return e
					}
				},
				oE = r("./src/reddit/actions/exportImportStyles.ts");
			var dE = (e = null, t) => {
				switch (t.type) {
					case oE.c:
					case oE.b:
						return null;
					case oE.a:
						return t.payload;
					default:
						return e
				}
			};
			var iE = (e = !1, t) => {
					switch (t.type) {
						case oE.c:
							return !0;
						case oE.b:
						case oE.a:
							return !1;
						default:
							return e
					}
				},
				uE = Object(c.c)({
					error: dE,
					pending: iE
				}),
				lE = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				pE = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const bE = {};
			var fE = (e = bE, t) => {
					switch (t.type) {
						case X.SUBREDDIT_LOADED:
						case W.b:
						case W.f:
						case z.SEARCH_RESULTS_RECEIVED:
						case Me.e:
						case Le.PAGE_LOADED:
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
						case lE.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case lE.a: {
							const {
								flairId: r
							} = t.payload;
							return Object(Kt.a)(e, r)
						}
						case ol.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(Kt.a)(e, r)
						}
						case O.k:
							return bE;
						case pE.b: {
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
				yE = Object(c.c)({
					models: fE
				});
			const mE = {};
			var EE = (e = mE, t) => {
				switch (t.type) {
					case O.f: {
						const r = t.payload;
						return {
							...e,
							[r.imageKey]: r.uploadId
						}
					}
					case O.k:
					case O.e:
						return mE;
					default:
						return e
				}
			};
			var hE = (e = !1, t) => {
				switch (t.type) {
					case O.n:
					case O.e:
						return !1;
					case O.a:
						return !0;
					default:
						return e
				}
			};
			var _E = (e = null, t) => {
				switch (t.type) {
					case O.d:
						return t.payload.subredditId;
					case O.e:
						return null;
					case E.a:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case kr.f:
						return null;
					default:
						return e
				}
			};
			const OE = {};
			var IE = (e = OE, t) => {
					switch (t.type) {
						case X.SUBREDDIT_LOADED:
						case W.b:
						case W.f:
						case Le.PAGE_LOADED:
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
						case Me.e:
						case z.SEARCH_RESULTS_RECEIVED: {
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
						case O.m: {
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
						case O.h: {
							const r = t.payload;
							return {
								...e,
								[r.subredditId]: r.styles
							}
						}
						case O.k: {
							const r = t.payload,
								s = Object(aE.h)(r.styles);
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
						case kr.k: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Wl(e, {
									[r.subredditId]: {
										bannerBackgroundImage: r.imageUrl
									}
								})
							}
							return e
						}
						case kr.j: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Wl(e, {
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
				gE = Object(c.c)({
					draft: cE,
					exportStyles: uE,
					flairTemplate: yE,
					imagePreviews: EE,
					isBladeEditorDirty: hE,
					isEditing: _E,
					models: IE
				});
			Object(xe.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var SE = (e = "", t) => {
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				vE = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const DE = {};
			var TE = (e = DE, t) => {
				switch (t.type) {
					case vE.c:
					case vE.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case vE.a: {
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
			const wE = {};
			var jE = (e = wE, t) => {
					switch (t.type) {
						case vE.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case vE.b:
						case vE.a: {
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
				AE = Object(c.c)({
					error: TE,
					pending: jE
				});
			const RE = {};
			var CE = (e = RE, t) => {
					switch (t.type) {
						case vE.b: {
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
				PE = Object(c.c)({
					api: AE,
					models: CE
				}),
				LE = r("./src/reddit/actions/category/constants.ts"),
				NE = r("./src/reddit/actions/subredditMention/constants.ts");
			const kE = {};
			var xE = (e = kE, t) => {
				switch (t.type) {
					case NE.d:
					case W.b:
					case W.f:
					case z.SEARCH_RESULTS_RECEIVED:
					case X.SUBREDDIT_FAILED:
					case X.SUBREDDIT_LOADED:
					case Le.PAGE_LOADED:
					case Us.PAGE_LOADED:
					case $.b:
					case $.e:
					case Ne.b:
					case Ne.a:
					case Ne.e:
					case Ne.d:
					case Q.PROFILE_POSTS_LOADED:
					case Y.b:
					case Y.e:
					case Me.e:
					case rd.TOPIC_DATA_LOADED:
					case cd.u: {
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
						} = t.payload, a = r.filter(e => e.type === gf.a.SUBREDDIT);
						return a.length ? a.reduce((e, t) => Object(G.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case Lc.g:
					case LE.f:
					case cd.g:
					case cd.o: {
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
					case Z.c: {
						const {
							data: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case ce.t: {
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
			const UE = {};
			var ME = (e = UE, t) => {
				switch (t.type) {
					case Z.b:
					case Z.c: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Z.a: {
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
			var GE = (e = !1, t) => {
					switch (t.type) {
						case Z.b:
							return !0;
						case Z.c:
						case Z.a:
							return !1;
						default:
							return e
					}
				},
				FE = Object(c.c)({
					error: ME,
					pending: GE
				}),
				BE = r("./src/reddit/actions/subredditCreation.ts");
			const HE = {
				apiError: null
			};
			var VE = (e = HE, t) => {
				switch (t.type) {
					case BE.b: {
						const {
							error: r
						} = t.payload;
						return {
							...e,
							apiError: r
						}
					}
					case BE.a:
					case BE.c:
					case BE.d:
						return HE;
					default:
						return e
				}
			};
			var qE = (e = null, t) => {
				switch (t.type) {
					case BE.d: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case BE.c:
					case BE.b:
						return null;
					default:
						return e
				}
			};
			var KE = (e = !1, t) => {
					switch (t.type) {
						case BE.c:
							return !0;
						case BE.d:
						case BE.b:
							return !1;
						default:
							return e
					}
				},
				WE = Object(c.c)({
					error: VE,
					lastCreatedSubredditId: qE,
					pending: KE
				});
			var $E = (e = !1, t) => {
					switch (t.type) {
						case cd.w:
							return !0;
						case cd.x:
						case cd.v:
							return !1;
						default:
							return e
					}
				},
				QE = Object(c.c)({
					pending: $E
				});
			const JE = {};
			var zE = (e = JE, t) => {
				switch (t.type) {
					case Z.l:
					case Z.m: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Z.k: {
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
			const XE = {};
			var YE = (e = XE, t) => {
					switch (t.type) {
						case Z.l: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Z.m:
						case Z.k: {
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
				ZE = Object(c.c)({
					error: zE,
					pending: YE
				});
			const eh = {};
			var th = (e = eh, t) => {
					switch (t.type) {
						case cd.f:
						case cd.g:
							return {
								...e, [t.payload.key]: !1
							};
						case cd.h:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				rh = Object(c.c)({
					pending: th
				});
			var sh = (e = null, t) => {
				switch (t.type) {
					case ce.ab:
						return t.payload || null;
					case ce.cb:
					case ce.bb:
						return null;
					default:
						return e
				}
			};
			var ah = (e = !1, t) => {
					switch (t.type) {
						case ce.cb:
							return !0;
						case ce.bb:
						case ce.ab:
							return !1;
						default:
							return e
					}
				},
				nh = Object(c.c)({
					error: sh,
					pending: ah
				});
			var ch = (e = null, t) => {
				switch (t.type) {
					case cd.k: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case cd.m:
					case cd.l:
						return null;
					default:
						return e
				}
			};
			var oh = (e = !1, t) => {
					switch (t.type) {
						case cd.m:
							return !0;
						case cd.l:
						case cd.k:
							return !1;
						default:
							return e
					}
				},
				dh = Object(c.c)({
					error: ch,
					pending: oh
				}),
				ih = r("./src/reddit/actions/subredditRules/constants.ts");
			var uh = (e = !1, t) => {
					switch (t.type) {
						case ih.c:
							return !0;
						case ih.a:
						case ih.b:
							return !1;
						default:
							return e
					}
				},
				lh = r("./src/reddit/actions/subredditSettings.ts");
			var ph = (e = !1, t) => {
					switch (t.type) {
						case lh.e:
							return !0;
						case lh.f:
						case lh.d:
							return !1;
						default:
							return e
					}
				},
				bh = Object(c.c)({
					pending: ph
				});
			const fh = {};
			var yh = (e = fh, t) => {
					switch (t.type) {
						case cd.n:
						case cd.o:
							return {
								...e, [t.payload.key]: !1
							};
						case cd.p:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				mh = Object(c.c)({
					pending: yh
				}),
				Eh = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const hh = {};
			var _h = (e = hh, t) => {
				switch (t.type) {
					case Eh.c:
					case Eh.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case Eh.a: {
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
			const Oh = {};
			var Ih = (e = Oh, t) => {
					switch (t.type) {
						case Eh.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case Eh.b:
						case Eh.a: {
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
				gh = Object(c.c)({
					error: _h,
					pending: Ih
				});
			const Sh = {};
			var vh = (e = Sh, t) => {
				switch (t.type) {
					case Hl.c:
					case Hl.b: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Hl.a: {
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
			const Dh = {};
			var Th = (e = Dh, t) => {
					switch (t.type) {
						case Hl.c: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Hl.b:
						case Hl.a: {
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
				wh = Object(c.c)({
					error: vh,
					pending: Th
				}),
				jh = Object(c.c)({
					about: FE,
					create: WE,
					inlineEditing: QE,
					models: ZE,
					onboarding: rh,
					productOffers: nh,
					rankings: dh,
					rules: uh,
					settings: bh,
					similar: mh,
					topContent: wh,
					wiki: gh
				}),
				Ah = r("./node_modules/lodash/isNil.js"),
				Rh = r.n(Ah);
			const Ch = {};
			var Ph = (e = Ch, t) => {
					switch (t.type) {
						case Z.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: Rh()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				Lh = Object(c.c)({
					meta: Ph
				});
			const Nh = {};
			var kh = (e = Nh, t) => {
				switch (t.type) {
					case LE.f: {
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
			const xh = {};
			var Uh = (e = xh, t) => {
					switch (t.type) {
						case Re.c: {
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
				Mh = r("./src/reddit/actions/subredditCrosspostable.ts");
			var Gh = (e = null, t) => {
				switch (t.type) {
					case Mh.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Mh.c:
					case Mh.b:
						return null;
					default:
						return e
				}
			};
			var Fh = (e = !1, t) => {
					switch (t.type) {
						case Mh.c:
							return !0;
						case Mh.b:
						case Mh.a:
							return !1;
						default:
							return e
					}
				},
				Bh = Object(c.c)({
					errors: Gh,
					pending: Fh
				});
			const Hh = {};
			var Vh = (e = Hh, t) => {
					switch (t.type) {
						case Mh.b: {
							const {
								subredditIds: r
							} = t.payload;
							return Qi()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				qh = Object(c.c)({
					api: Bh,
					ids: Vh
				});
			const Kh = {};
			var Wh = (e = Kh, t) => {
					switch (t.type) {
						case Yl.a: {
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
							return Wl(c, {
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
				$h = Object(c.c)({
					models: Wh
				});
			const Qh = {};
			var Jh = (e = Qh, t) => {
				switch (t.type) {
					case y.a: {
						const {
							assets: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case m.g:
					case m.j: {
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
			const zh = {};
			var Xh = (e = zh, t) => {
				switch (t.type) {
					case y.a: {
						const {
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: t.payload
						}
					}
					case f.i: {
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
			const Yh = {};
			var Zh = (e = Yh, t) => {
				switch (t.type) {
					case y.a: {
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
			const e_ = {};
			var t_ = (e = e_, t) => {
					switch (t.type) {
						case y.p: {
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
				r_ = Object(c.c)({
					assets: Jh,
					communityRaw: Xh,
					distributions: Zh,
					releaseNotes: t_
				}),
				s_ = r("./node_modules/lodash/isEqualWith.js"),
				a_ = r.n(s_),
				n_ = r("./src/lib/forceHttps/index.ts");
			const c_ = {},
				o_ = (e, t) => {
					return !a_()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				d_ = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let a = 0; a < r.length; a++) {
						const n = r[a],
							c = e[n],
							o = t[n];
						c && !o_(c, o) || (s[n] = o)
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var i_ = (e = c_, t) => {
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
								return n.icon.url ? c.icon.url = Object(n_.a)(n.icon.url) : a && a.icon.url ? c.icon = a.icon : c.icon.url = "", a && a.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(G.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case Gy.b:
					case NE.d:
					case LE.f:
					case je.f:
					case Lc.g:
					case nd.b:
					case Ce.e:
					case Ce.h:
					case K.k:
					case Re.r:
					case Re.u:
					case Yi.h:
					case td.b:
					case W.b:
					case W.f:
					case je.b:
					case Pe.b:
					case $.b:
					case $.e:
					case J.c:
					case J.i:
					case J.e:
					case J.g:
					case Ne.b:
					case Ne.e:
					case Q.MORE_POSTS_LOADED:
					case Q.PROFILE_POSTS_LOADED:
					case Yi.e:
					case z.SEARCH_RESULTS_RECEIVED:
					case X.SUBREDDIT_LOADED:
					case Le.PAGE_LOADED:
					case Wr.e:
					case Us.PAGE_LOADED:
					case Yi.m:
					case Y.b:
					case Y.e:
					case ke.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Me.e:
					case Z.c:
					case Z.f:
					case Z.i:
					case cd.a:
					case cd.g:
					case cd.o:
					case rd.TOPIC_DATA_LOADED:
					case rd.MORE_POSTS_LOADED:
						return d_(e, t.payload.subreddits || {});
					case K.f:
					case K.i:
					case K.m:
					case K.p:
					case K.v: {
						const {
							response: r
						} = t.payload, {
							subreddits: s
						} = r;
						return d_(e, s)
					}
					case Me.g: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return d_(e, r.subreddits || {})
					}
					case Re.B: {
						const {
							subreddits: r
						} = t.payload;
						return {
							...r,
							...e
						}
					}
					case f.g: {
						const r = t.payload;
						return d_(e, r)
					}
					case O.m: {
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
					case lh.f: {
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
					case vE.b: {
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
						return Object(G.merge)(e, a)
					}
					default:
						return e
				}
			};
			var u_ = (e = null, t) => {
				switch (t.type) {
					case Z.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Z.g:
					case Z.f:
						return null;
					default:
						return e
				}
			};
			var l_ = (e = !1, t) => {
				switch (t.type) {
					case Z.g:
					case Z.f:
						return !0;
					case Z.e:
						return !1;
					default:
						return e
				}
			};
			var p_ = (e = !1, t) => {
					switch (t.type) {
						case Z.g:
							return !0;
						case Z.f:
						case Z.e:
							return !1;
						default:
							return e
					}
				},
				b_ = Object(c.c)({
					errors: u_,
					fetched: l_,
					pending: p_
				});
			var f_ = (e = null, t) => {
					switch (t.type) {
						case Z.f: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						default:
							return e
					}
				},
				y_ = Object(c.c)({
					api: b_,
					order: f_
				});
			const m_ = {};
			var E_ = (e = m_, t) => {
				switch (t.type) {
					case lh.a: {
						const r = t.payload;
						return Object(G.merge)(e, r)
					}
					case lh.b: {
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
			const h_ = {};
			var __ = (e = h_, t) => {
				switch (t.type) {
					case cd.g: {
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
			const O_ = {};
			var I_ = (e = O_, t) => {
				switch (t.type) {
					case ce.nb: {
						const {
							recentSupporters: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case ce.R:
					case ce.U: {
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
									displayName: Object(te.e)(a),
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
			const g_ = {};
			var S_ = (e = g_, t) => {
				var r;
				switch (t.type) {
					case ce.ob:
					case ce.nb: {
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
					case ce.R:
					case ce.U: {
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
			const v_ = {},
				D_ = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						a = null == s ? void 0 : s.emotes;
					if (!a) return e;
					const n = vn(r, t),
						c = [...a, n];
					return {
						...e,
						[t]: {
							...s,
							emotes: c
						}
					}
				},
				T_ = (e, t, r) => {
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
			var w_ = (e = v_, t) => {
				switch (t.type) {
					case ce.nb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: Dn(r)
						}
					}
					case Sn.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: D_(a, r, s)
						}
					}
					case Sn.c: {
						const {
							subredditId: r,
							emojiId: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: T_(a, r, s)
						}
					}
					default:
						return e
				}
			};
			const j_ = {},
				A_ = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var R_ = (e = j_, t) => {
					switch (t.type) {
						case ce.nb: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(A_)
							}
						}
						case ce.R:
						case ce.U: {
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
								[r]: o.sort(A_)
							};
							if (s > 0) {
								const t = {
									score: s,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: n ? null : {
										id: a.id,
										displayName: Object(te.e)(a),
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
									[r]: [t, ...e[r]].sort(A_)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				C_ = r("./src/lib/makeProductOfferKey/index.ts");
			const P_ = {};
			var L_ = (e = P_, t) => {
				switch (t.type) {
					case ce.bb:
					case ce.nb: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!(null == s ? void 0 : s.length)) return e;
						const a = s.reduce((e, t) => {
							const s = Object(C_.a)(t.type, r);
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
			const N_ = {};
			var k_ = (e = N_, t) => {
					switch (t.type) {
						case h.g: {
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
				x_ = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const U_ = {};
			var M_ = (e = U_, t) => {
				switch (t.type) {
					case cd.y: {
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
						const a = (e => e.filter(({
							id: e
						}) => "invite_contributor" !== e).filter(({
							buttons: e
						}) => e.every(({
							__typename: e
						}) => x_.d.includes(e))))(s.cards);
						return {
							...e,
							[r]: {
								...s,
								cards: a
							}
						}
					}
					default:
						return e
				}
			};
			const G_ = {};
			var F_ = (e = G_, t) => {
				var r, s;
				switch (t.type) {
					case cd.y: {
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
						return 0 === Object.keys(a).length ? e : Object(G.assign)(e, a)
					}
					case cd.d: {
						const {
							subredditId: r,
							questionId: a
						} = t.payload, n = null !== (s = e[r]) && void 0 !== s ? s : [];
						return Object(G.setIn)(e, [r], n.filter(e => e.id !== a))
					}
					case cd.e:
						return G_;
					default:
						return e
				}
			};
			const B_ = {};
			var H_ = (e = B_, t) => {
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
			const V_ = {};
			var q_ = (e = V_, t) => {
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
			const K_ = {};
			var W_ = (e = K_, t) => {
				switch (t.type) {
					case ih.b: {
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
					case ih.e: {
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
					case ih.f: {
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
					case ih.g:
					case ih.d: {
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
			const $_ = {};
			var Q_ = (e = $_, t) => {
				switch (t.type) {
					case lh.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case lh.f: {
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
					case kr.m: {
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
			const J_ = {};
			var z_ = (e = J_, t) => {
				switch (t.type) {
					case cd.o: {
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
			const X_ = {};
			var Y_ = (e = X_, t) => {
				switch (t.type) {
					case cd.y: {
						const {
							id: r,
							survey: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case cd.z: {
						const {
							id: r,
							response: s
						} = t.payload, a = Object(G.setIn)(e, [r, "response"], s);
						return Object(G.setIn)(a, [r, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const Z_ = {};
			var eO = (e = Z_, t) => {
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
					case Hl.b: {
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
			const tO = [];
			var rO = (e = tO, t) => {
				switch (t.type) {
					case je.b:
					case X.SUBREDDIT_LOADED: {
						const {
							trendingSubredditIds: r
						} = t.payload;
						return r && r.length ? r : e
					}
					default:
						return e
				}
			};
			const sO = {};
			var aO = (e = sO, t) => {
					switch (t.type) {
						case NE.d:
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
				nO = r("./src/reddit/actions/subredditWelcomeMessage.ts");
			const cO = {};
			var oO = (e = cO, t) => {
					switch (t.type) {
						case nO.a: {
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
				dO = Object(c.c)({
					about: xE,
					api: jh,
					appliedFilters: Lh,
					byCategory: kh,
					communityInfo: Uh,
					crosspostable: qh,
					duplicates: $h,
					gov: r_,
					models: i_,
					moderated: y_,
					notificationSettings: E_,
					onboarding: __,
					powerupRecentSupporters: I_,
					powerups: S_,
					powerupsEmojis: w_,
					powerupTopSupporters: R_,
					productOffers: L_,
					products: k_,
					progressModule: M_,
					questions: F_,
					rankings: H_,
					rankingsPageInfo: q_,
					rules: W_,
					settings: Q_,
					similar: z_,
					survey: Y_,
					topContent: eO,
					trending: rO,
					unavailableModels: aO,
					welcomeMessage: oO
				});
			const iO = {};
			var uO = Object(Db.a)((e = iO, t) => {
					switch (t.type) {
						case X.SUBREDDIT_LOADED: {
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
							return Se()({
								...e
							}, a)
						}
						case hd.p: {
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
				}, iO),
				lO = Object(c.c)({
					data: uO
				}),
				pO = r("./node_modules/lodash/values.js"),
				bO = r.n(pO);
			const fO = [];
			var yO = (e = fO, t) => {
				switch (t.type) {
					case tu.d: {
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
					case Re.u: {
						const {
							multireddits: e
						} = t.payload;
						return bO()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case tu.e: {
						const {
							follow: r,
							multiredditPath: s
						} = t.payload;
						return r ? e : e.filter(e => e !== s)
					}
					case Re.j: {
						const r = t.payload;
						return e.filter(e => e !== r)
					}
					default:
						return e
				}
			};
			var mO = (e = null, t) => {
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
			var EO = (e = !1, t) => {
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
			var hO = (e = !1, t) => {
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
				_O = Object(c.c)({
					errors: mO,
					fetched: EO,
					pending: hO
				});
			const OO = [];
			var IO = (e = OO, t) => {
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
						if (c !== gf.a.PROFILE) return e;
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
					case tu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(t => t.type === gf.a.PROFILE && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const gO = [];
			var SO = (e = gO, t) => {
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
						if (c !== gf.a.SUBREDDIT) return e;
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
					case tu.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(t => t.type === gf.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const vO = [],
				DO = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var TO = (e = vO, t) => {
					switch (t.type) {
						case Re.u: {
							const {
								multireddits: r
							} = t.payload, s = bO()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(DO(r));
							return Qi()(e, s) ? e : s
						}
						case Pe.b: {
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
								d = zi()(e, c).sort(DO(o));
							return Qi()(e, d) ? e : d
						}
						case tu.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: a
							} = t.payload;
							return r ? [...e, s].sort(DO(a)) : e.filter(e => e !== s)
						}
						case Re.j: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						case Re.g:
						case Re.m: {
							const {
								multireddit: r,
								multiredditsModelsState: s
							} = t.payload, a = {
								...s,
								[r.url]: r
							};
							return [...e, r.url].sort(DO(a))
						}
						default:
							return e
					}
				},
				wO = r("./node_modules/lodash/difference.js"),
				jO = r.n(wO);
			const AO = [];
			var RO = (e = AO, t) => {
				switch (t.type) {
					case Yi.n: {
						const {
							profileOrder: r
						} = t.payload;
						return Mp()([...e, ...r])
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
						} = t.payload, n = r.filter(e => e.type === gf.a.PROFILE);
						if (!n.length) return e;
						const c = n.map(e => e.id);
						return a ? Mp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : jO()(e, c)
					}
					default:
						return e
				}
			};
			const CO = [];
			var PO = (e = CO, t) => {
					switch (t.type) {
						case Yi.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return Mp()([...e, ...r])
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
							} = t.payload, n = r.filter(e => e.type === gf.a.SUBREDDIT && !!e.id);
							if (!n.length) return e;
							const c = n.map(e => e.id);
							return a ? Mp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : jO()(e, c)
						}
						default:
							return e
					}
				},
				LO = Object(c.c)({
					api: _O,
					favoriteMultiOrder: yO,
					favoriteProfileOrder: IO,
					favoriteSubredditOrder: SO,
					multiredditOrder: TO,
					profileOrder: RO,
					subredditOrder: PO
				}),
				NO = r("./src/reddit/actions/survey/constants.ts");
			var kO = (e = null, t) => {
				switch (t.type) {
					case NO.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var xO = (e = 1, t) => {
				switch (t.type) {
					case NO.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var UO = (e = !1, t) => {
				switch (t.type) {
					case NO.b:
						return !e;
					default:
						return e
				}
			};
			var MO = (e = !0, t) => {
					switch (t.type) {
						case NO.h:
							return !e;
						default:
							return e
					}
				},
				GO = Object(c.c)({
					activeDemoTrigger: kO,
					demoTriggerThreshold: xO,
					isDemoEnabled: UO,
					isSampleFactorEnabled: MO
				}),
				FO = r("./src/reddit/actions/tabBadging.ts");
			var BO = (e = !1, t) => {
					switch (t.type) {
						case FO.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				HO = r("./src/reddit/actions/tags/constants.ts");
			const VO = {
				pending: !1,
				error: !1
			};
			var qO = (e = VO, t) => {
				switch (t.type) {
					case HO.l:
						return {
							...e, pending: !0
						};
					case HO.m:
						return {
							error: !1, pending: !1
						};
					case HO.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const KO = {
				pending: !1,
				error: !1
			};
			var WO = (e = KO, t) => {
				switch (t.type) {
					case HO.o:
						return {
							...e, pending: !0
						};
					case HO.p:
						return {
							error: !1, pending: !1
						};
					case HO.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const $O = {
				pending: !1,
				error: !1
			};
			var QO = (e = $O, t) => {
				switch (t.type) {
					case HO.t:
						return {
							...e, pending: !0
						};
					case HO.s:
					case HO.r:
					case HO.e:
					case HO.j:
						return {
							error: !1, pending: !1
						};
					case HO.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const JO = {
				pending: !1,
				error: !1
			};
			var zO = (e = JO, t) => {
				switch (t.type) {
					case HO.v:
						return {
							...e, pending: !0
						};
					case HO.w:
						return {
							error: !1, pending: !1
						};
					case HO.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const XO = {
				pending: !1,
				error: !1
			};
			var YO = (e = XO, t) => {
					switch (t.type) {
						case HO.g:
							return {
								...e, pending: !0
							};
						case HO.h:
							return {
								error: !1, pending: !1
							};
						case HO.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				ZO = Object(c.c)({
					create: qO,
					deleteTag: WO,
					fetch: QO,
					update: zO,
					updatePrimaryTag: YO
				});
			const eI = {
				global: [],
				recommendedGlobal: []
			};
			var tI = (e = eI, t) => {
					switch (t.type) {
						case HO.w:
						case HO.r:
						case HO.e:
						case HO.j: {
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
				rI = r("./node_modules/lodash/uniqWith.js"),
				sI = r.n(rI),
				aI = r("./src/reddit/models/Option/index.ts");
			const nI = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var cI = (e = nI, t) => {
					switch (t.type) {
						case HO.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: sI()([...e.selectedOptions || [], {
									...r
								}], aI.a)
							}
						}
						case HO.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(aI.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case HO.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case HO.a: {
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
				oI = r("./src/reddit/helpers/tags/index.ts");
			const dI = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var iI = (e = dI, t) => {
					switch (t.type) {
						case HO.j: {
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
						case HO.w:
						case HO.s:
						case HO.r: {
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
								geoPlaces: d ? Object(G.set)(e.geoPlaces, o, d) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[o]: {
										...c[o] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[o]: Object(oI.a)(n[o] || {})
								}
							}
						}
						case HO.p: {
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
						case HO.e: {
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
						case HO.h: {
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
						default:
							return e
					}
				},
				uI = r("./src/reddit/reducers/tags/selected/index.ts"),
				lI = Object(c.c)({
					api: ZO,
					availableGlobalTagOrder: tI,
					models: iI,
					selected: uI.b,
					creation: cI
				}),
				pI = r("./src/reddit/actions/redditEmbed.ts"),
				bI = r("./src/reddit/actions/theme.ts"),
				fI = r("./src/reddit/actions/users.ts"),
				yI = r("./src/reddit/models/Theme/index.ts");
			const mI = {
				current: yI.c,
				cached: {}
			};
			var EI = (e = mI, t) => {
					switch (t.type) {
						case bI.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? yI.b : yI.c,
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
						case W.a:
						case W.e:
						case W.b:
						case W.f:
						case W.d:
						case W.h:
						case je.b:
						case X.SUBREDDIT_LOADED:
						case Pe.b:
						case Pe.a:
						case je.f:
						case pI.b:
						case Z.i:
						case Me.e:
						case z.SEARCH_RESULTS_RECEIVED:
						case kr.i:
						case Le.PAGE_LOADED:
						case Us.PAGE_LOADED:
						case fI.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: yI.b,
									cached: {}
								} : {
									current: yI.c,
									cached: {}
								}
							}
							return e;
						case $.d:
						case $.e:
						case Ne.a:
						case Ne.b:
						case Ne.d:
						case Ne.e:
						case Q.PROFILE_POSTS_FAILED:
						case Q.PROFILE_POSTS_LOADED: {
							const {
								account: r
							} = t.payload;
							return r ? r.nightmode ? {
								current: yI.b,
								cached: {}
							} : {
								current: yI.c,
								cached: {}
							} : e
						}
						case K.h:
						case K.j:
						case K.i:
						case K.g:
						case K.f:
						case K.n:
						case K.m:
						case K.p:
						case K.q:
						case K.w:
						case K.v:
							if (t.payload && t.payload.response && t.payload.response.preferences && "nightmode" in t.payload.response.preferences) {
								const {
									nightmode: e
								} = t.payload.response.preferences;
								return e ? {
									current: yI.b,
									cached: {}
								} : {
									current: yI.c,
									cached: {}
								}
							}
							return e;
						case kr.h: {
							if (!t.payload) return e;
							const {
								nightmode: r
							} = t.payload;
							return r ? {
								current: yI.b,
								cached: {}
							} : {
								current: yI.c,
								cached: {}
							}
						}
						case O.d:
							return {
								current: yI.c, cached: {}
							};
						case O.e:
							return t.payload.nightmodeTempUpdated ? {
								current: yI.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				hI = r("./src/reddit/actions/toaster.ts");
			const _I = [];
			var OI = (e = _I, t) => {
					switch (t.type) {
						case hI.c: {
							const r = t.payload,
								s = [];
							let a = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), a = a || e === r
							}
							return a || s.push(r), s
						}
						case hI.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				II = r("./src/reddit/actions/tooltip.ts");
			var gI = (e = null, t) => {
					switch (t.type) {
						case II.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case II.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case II.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case II.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case ce.K:
						case II.d:
						case E.a:
						case fo.b:
						case fo.c:
						case fo.a:
							return null;
						default:
							return e
					}
				},
				SI = r("./src/reddit/actions/tracing.ts");
			const vI = {
				traceId: void 0
			};
			var DI = (e = vI, t) => {
					switch (t.type) {
						case SI.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				TI = r("./src/lib/asyncActions/index.ts"),
				wI = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const jI = Object(TI.c)(wI.c.requestedActionType, wI.c.succeededActionType, wI.c.failedActionType),
				AI = Object(TI.c)(wI.a.requestedActionType, wI.a.succeededActionType, wI.a.failedActionType),
				RI = Object(TI.c)(wI.d.requestedActionType, wI.d.succeededActionType, wI.d.failedActionType);
			var CI = Object(c.c)({
					load: jI,
					execute: AI,
					send: RI
				}),
				PI = r("./src/reddit/actions/tracking.ts");
			const LI = {};
			var NI = (e = LI, t) => {
					switch (t.type) {
						case PI.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case PI.b: {
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
				kI = Object(c.c)({
					reCaptchaEnterprise: CI,
					viewportDataLoaded: NI
				}),
				xI = r("./src/reddit/actions/trafficStats/constants.ts");
			var UI = (e = !1, t) => {
				switch (t.type) {
					case xI.c:
						return !0;
					case xI.b:
					case xI.a:
						return !1;
					default:
						return e
				}
			};
			var MI = (e = null, t) => {
					switch (t.type) {
						case xI.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case xI.c:
							return null;
						default:
							return e
					}
				},
				GI = Object(c.c)({
					pending: UI,
					trafficStats: MI
				});
			var FI = (e = null, t) => {
				switch (t.type) {
					case y.s:
					case y.t:
						return null;
					case y.q: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var BI = (e = !1, t) => {
					switch (t.type) {
						case y.s:
							return !0;
						case y.q:
						case y.t:
							return !1;
						default:
							return e
					}
				},
				HI = Object(c.c)({
					error: FI,
					pending: BI
				});
			var VI = (e = null, t) => {
				switch (t.type) {
					case y.r:
						return (t.payload ? t.payload.contentId : null) || null;
					case s.b:
					case y.t:
						return null;
					default:
						return e
				}
			};
			var qI = (e = "", t) => {
				switch (t.type) {
					case y.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case y.t:
						return "";
					default:
						return e
				}
			};
			var KI = (e = null, t) => {
					switch (t.type) {
						case y.r:
							return t.payload && t.payload.publicAddress || null;
						case s.b:
						case y.t:
							return null;
						default:
							return e
					}
				},
				WI = Object(c.c)({
					api: HI,
					contentId: VI,
					initialRecipient: qI,
					publicAddress: KI
				}),
				$I = Object(c.c)({
					communityPoints: WI
				}),
				QI = r("./src/reddit/actions/search/trending.ts");
			const JI = [];
			var zI = (e = JI, t) => {
					switch (t.type) {
						case X.SUBREDDIT_LOADED:
						case QI.a: {
							const {
								items: r
							} = t.payload;
							return r || e
						}
						default:
							return e
					}
				},
				XI = Object(c.c)({
					models: zI
				});
			var YI = r("./src/reddit/routes/premium/index.ts");
			const ZI = {};
			var eg = (e = ZI, t) => {
					switch (t.type) {
						case Jf.a: {
							const {
								trophies: r
							} = t.payload;
							return Object.values(r).forEach(e => {
								"t6_bf" === e.awardId && (e.url = YI.b)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				tg = r("./src/reddit/actions/upload.ts"),
				rg = r("./src/reddit/models/Upload/index.ts");
			const sg = {};
			var ag = (e = sg, t) => {
					switch (t.type) {
						case tg.d: {
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
									status: rg.a.PENDING
								}
							}
						}
						case tg.h: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: rg.a.UPLOADING
								}
							}
						}
						case tg.c: {
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
						case tg.e: {
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
						case tg.g: {
							const {
								key: r,
								url: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									status: rg.a.SUCCESS,
									url: s
								}
							}
						}
						case tg.b: {
							const {
								key: r,
								error: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									status: rg.a.FAILED,
									error: s
								}
							}
						}
						case tg.a: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: rg.a.CANCELED
								}
							}
						}
						case tg.f: {
							const {
								key: r
							} = t.payload, s = e[r];
							return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), xs()(e, r)
						}
						default:
							return e
					}
				},
				ng = r("./src/reddit/actions/upvotePrompt.ts");
			var cg = (e = 0, t) => {
				switch (t.type) {
					case ng.a:
						return ++e;
					default:
						return e
				}
			};
			const og = {};
			var dg = (e = og, t) => {
					switch (t.type) {
						case h.d:
						case y.a:
						case f.f:
						case y.t: {
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
						case y.w: {
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
				ig = r("./src/reddit/actions/accountGender/constants.ts"),
				ug = r("./src/reddit/actions/inbox.ts"),
				lg = r("./src/reddit/actions/pages/appeal/constants.ts"),
				pg = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				bg = r("./src/reddit/actions/sso/constants.ts");
			const fg = (e, t) => {
				const {
					gender: r,
					...s
				} = {
					...e
				};
				if (!t || Qi()(s, t)) return e;
				const {
					awardeeKarma: a,
					awarderKarma: n,
					commentKarma: c,
					postKarma: o,
					totalKarma: d
				} = t, i = (null == s ? void 0 : s.awardeeKarma) || 0, u = (null == s ? void 0 : s.awarderKarma) || 0, l = a || i, p = n || u, b = d || l + p + o + c;
				return {
					...t,
					awardeeKarma: l,
					awarderKarma: p,
					gender: r,
					totalKarma: b
				}
			};
			var yg = Object(Db.a)((e = null, t) => {
				switch (t.type) {
					case lg.a:
					case lg.b:
					case Ky.b:
					case Ky.c:
					case Nr.a:
					case Nr.b:
					case Nr.f:
					case Nr.h:
					case Nr.i:
					case Nr.j:
					case Ce.e:
					case Ce.h:
					case Ce.g:
					case Re.q:
					case Re.r:
					case W.a:
					case W.e:
					case W.b:
					case W.f:
					case je.a:
					case je.b:
					case Pe.a:
					case Pe.b:
					case X.SUBREDDIT_FAILED:
					case Yi.l:
					case $.b:
					case $.a:
					case $.e:
					case $.d:
					case J.c:
					case J.i:
					case Ne.e:
					case Ne.d:
					case Ne.b:
					case Ne.a:
					case Q.PROFILE_POSTS_LOADED:
					case Q.PROFILE_POSTS_FAILED:
					case X.SUBREDDIT_LOADED:
					case z.SEARCH_FAILED:
					case z.SEARCH_RESULTS_RECEIVED:
					case Le.PAGE_LOADED:
					case Us.PAGE_LOADED:
					case Me.c:
					case Me.e:
					case pI.a:
					case pI.b:
					case kr.i:
					case pg.b:
					case fI.c:
					case rd.TOPIC_DATA_LOADED:
						return fg(e, t.payload.account);
					case fI.n:
						return e ? {
							...e,
							email: t.payload
						} : e;
					case K.i:
					case K.f:
					case K.m:
					case K.p:
					case K.v:
					case K.h:
					case K.e:
					case K.l:
					case K.o:
					case K.u: {
						const {
							response: r
						} = t.payload;
						return r ? fg(e, r.account) : e
					}
					case fI.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case s.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case kr.k:
					case kr.j: {
						const r = t.payload;
						return e && "profileIcon" === r.key ? {
							...e,
							accountIcon: r.imageUrl
						} : e
					}
					case ce.C:
					case ce.t: {
						const {
							coins: r
						} = t.payload;
						return e ? {
							...e,
							coins: r
						} : e
					}
					case ce.a: {
						const {
							userName: r,
							awarderKarma: s,
							awardeeKarma: a
						} = t.payload;
						if (r.toLowerCase() !== (e && Object(te.e)(e).toLowerCase())) return e;
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
					case Ae.w: {
						const {
							coins: r
						} = t.payload;
						return r && e ? {
							...e,
							coins: r
						} : e
					}
					case Mu.h: {
						const {
							price: r
						} = t.payload;
						return (null == e ? void 0 : e.coins) && r ? {
							...e,
							coins: e.coins - r
						} : e
					}
					case ug.a: {
						const {
							inboxCount: r
						} = t.payload;
						return e ? {
							...e,
							inboxCount: r
						} : e
					}
					case bg.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case bg.b: {
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
					case ig.a:
					case ig.b: {
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
			var mg = (e = null, t) => {
				switch (t.type) {
					case fI.m:
					case fI.n:
						return null;
					case fI.l:
						return t.payload;
					default:
						return e
				}
			};
			var Eg = (e = !1, t) => {
					switch (t.type) {
						case fI.m:
							return !0;
						case fI.n:
						case fI.l:
							return !1;
						default:
							return e
					}
				},
				hg = Object(c.c)({
					error: mg,
					pending: Eg
				}),
				_g = Object(c.c)({
					api: hg
				});
			var Og = (e = !1, t) => {
				switch (t.type) {
					case fI.j:
						return !0;
					default:
						return e
				}
			};
			var Ig = (e = !1, t) => {
					switch (t.type) {
						case fI.i:
							return !0;
						case fI.j:
						case fI.h:
							return !1;
						default:
							return e
					}
				},
				gg = Object(c.c)({
					pending: Ig,
					emailSent: Og
				}),
				Sg = Object(c.c)({
					api: gg
				}),
				vg = Object(c.c)({
					changeEmail: _g,
					sendResetEmail: Sg
				}),
				Dg = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const Tg = {};
			var wg = (e = Tg, t) => {
				switch (t.type) {
					case gt.f:
						return {
							...e, new: Dg.a.pending
						};
					case gt.d:
						return {
							...e, new: Dg.a.error
						};
					case gt.e:
						return {
							...e, new: Dg.a.waitingForRequest
						};
					case gt.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Dg.a.pending
						}
					}
					case gt.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Dg.a.error
						}
					}
					case gt.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Dg.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const jg = [];
			var Ag = (e = jg, t) => {
					switch (t.type) {
						case gt.e:
							return [t.payload, ...e];
						case gt.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case kr.i:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				Rg = Object(c.c)({
					api: wg,
					data: Ag
				}),
				Cg = r("./src/reddit/actions/chat/constants.ts"),
				Pg = r("./src/reddit/actions/chat/userSettings.ts");
			const Lg = Cg.a.anybody;
			var Ng = (e = Lg, t) => {
					switch (t.type) {
						case Pg.a:
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
				kg = Object(c.c)({
					invitePolicy: Ng
				});
			const xg = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var Ug = (e = null, t) => {
				switch (t.type) {
					case Le.PAGE_LOADED: {
						const {
							drafts: r
						} = t.payload;
						return e && Qi()(e, r) ? e : {
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
						return xg(e, r)
					}
					case Wr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return xg(e, r.length)
					}
					case Wr.c:
					case Wr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return xg(e, r)
					}
					default:
						return e
				}
			};
			const Mg = {};
			var Gg = (e = Mg, t) => {
					switch (t.type) {
						case Wn.a: {
							const e = t.payload.experimentVariants;
							return vu(e)
						}
						default:
							return e
					}
				},
				Fg = r("./src/reddit/actions/global/constants.ts");
			const Bg = {};
			var Hg = (e = Bg, t) => {
					switch (t.type) {
						case Fg.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				Vg = Object(c.c)({
					byName: Gg,
					localPersisted: Hg
				}),
				qg = r("./src/reddit/actions/googleOneTap/index.ts");
			var Kg = (e = !1, t) => {
				switch (t.type) {
					case qg.a:
						return !0;
					default:
						return e
				}
			};
			var Wg = (e = !1, t) => {
				switch (t.type) {
					case kr.e:
						return !0;
					case kr.d:
						return !1;
					default:
						return e
				}
			};
			var $g = (e = "", t) => {
				switch (t.type) {
					case kr.i:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const Qg = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var Jg = (e = Qg, t) => {
					switch (t.type) {
						case fI.b:
							return t.payload;
						default:
							return e
					}
				},
				zg = r("./src/reddit/actions/notifications/constants.ts"),
				Xg = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var Yg = (e = null, t) => {
				switch (t.type) {
					case Xg.a:
					case Xg.d:
					case zg.a:
						return t.payload && t.payload.error || null;
					case Xg.c:
					case Xg.f:
					case Xg.a:
					case zg.c:
					case zg.b:
						return null;
					default:
						return e
				}
			};
			var Zg = (e = !1, t) => {
				switch (t.type) {
					case zg.c:
						return !1;
					case zg.b:
						return !0;
					default:
						return e
				}
			};
			var eS = (e = !1, t) => {
					switch (t.type) {
						case zg.c:
							return !0;
						case zg.b:
						case zg.a:
							return !1;
						default:
							return e
					}
				},
				tS = Object(c.c)({
					error: Yg,
					loaded: Zg,
					pending: eS
				});
			var rS = (e = null, t) => {
				switch (t.type) {
					case zg.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case zg.f:
					case zg.e:
						return null;
					default:
						return e
				}
			};
			var sS = (e = !1, t) => {
				switch (t.type) {
					case zg.f:
						return !1;
					case zg.e:
						return !0;
					default:
						return e
				}
			};
			var aS = (e = !1, t) => {
					switch (t.type) {
						case zg.f:
							return !0;
						case zg.e:
						case zg.d:
							return !1;
						default:
							return e
					}
				},
				nS = Object(c.c)({
					error: rS,
					loaded: sS,
					pending: aS
				}),
				cS = Object(c.c)({
					getPreferences: tS,
					setPreferences: nS
				});
			const oS = {
				byId: {},
				allIds: []
			};
			var dS = (e = oS, t) => {
				switch (t.type) {
					case Xg.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case Xg.g: {
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
			const iS = {
				byId: {},
				allIds: []
			};
			var uS = (e = iS, t) => {
					switch (t.type) {
						case Xg.b: {
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
				lS = Object(c.c)({
					sections: uS,
					rows: dS
				}),
				pS = r("./src/lib/notifications/constants.ts");
			var bS = (e = !1, t) => {
				switch (t.type) {
					case pS.j:
						return !0;
					case pS.b:
					case pS.d:
					case pS.e:
						return !1;
					default:
						return e
				}
			};
			const fS = {
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
			var yS = (e = fS, t) => {
				switch (t.type) {
					case zg.b:
					case zg.f:
					case zg.d: {
						const {
							preferences: r
						} = t.payload;
						return sn()(r) ? e : r
					}
					default:
						return e
				}
			};
			const mS = {
				byId: {},
				allIds: []
			};
			var ES = (e = mS, t) => {
				switch (t.type) {
					case Xg.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case Xg.g: {
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
			const hS = {
				byId: {},
				allIds: []
			};
			var _S = (e = hS, t) => {
					switch (t.type) {
						case Xg.e: {
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
				OS = Object(c.c)({
					sections: _S,
					rows: ES
				}),
				IS = Object(c.c)({
					api: cS,
					emailSettingsLayout: lS,
					isNotificationPromptVisible: bS,
					preferences: yS,
					pushSettingsLayout: OS
				});
			const gS = {};
			var SS = (e = gS, t) => {
				switch (t.type) {
					case f.i:
					case Ze.h: {
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
					case h.d: {
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
			const vS = {},
				DS = (e, t) => `${e}_${t||new Date}`;
			var TS = (e = vS, t) => {
				switch (t.type) {
					case ce.yb: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[DS(t.subredditInfo.id, t.allocatedAt)]: t
							}), {});
							return {
								...e,
								...s
							}
						}
						return e
					}
					case ce.nb: {
						const {
							userPowerups: r
						} = t.payload, s = ((null == r ? void 0 : r.allocation) || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
							...e,
							[DS(t.subredditInfo.id, t.allocatedAt)]: t
						}), {});
						return {
							...e,
							...s
						}
					}
					case ce.T: {
						const {
							subredditId: r,
							powerupsCount: s,
							allocatedAt: a
						} = t.payload;
						if (s < 0) {
							const t = DS(r, a),
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
					case ce.O: {
						const {
							subredditId: r,
							allocatedAt: s
						} = t.payload, a = DS(r, s), n = e[a];
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
			var wS = (e = null, t) => {
				switch (t.type) {
					case ce.yb: {
						const r = t.payload.powerups;
						return r ? xs()({
							...e,
							...r
						}, "allocation") : e
					}
					case ce.nb: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? xs()({
							...e,
							...r
						}, "allocation") : e
					}
					case ce.T: {
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
					case ce.U: {
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
			var jS, AS = (e = !1, t) => {
					switch (t.type) {
						case ce.xb:
						case ce.zb:
							return !1;
						case ce.yb:
							return !0;
						default:
							return e
					}
				},
				RS = Object(c.c)({
					allocationByKey: TS,
					data: wS,
					fetched: AS
				}),
				CS = r("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(jS || (jS = {}));
			const PS = {
				status: jS.UNFETCHED,
				subscriptions: []
			};
			var LS = (e = PS, t) => {
				switch (t.type) {
					case ce.Cb:
						return {
							...e, status: jS.PENDING
						};
					case ce.Bb: {
						const {
							subscriptions: r
						} = t.payload;
						return r ? {
							...e,
							subscriptions: r,
							status: jS.LOADED
						} : e
					}
					case ce.Ab:
						return {
							...e, status: jS.FAILED
						};
					default:
						return e
				}
			};
			var NS = (e = "", t) => {
				switch (t.type) {
					case fI.d:
						return t.payload;
					default:
						return e
				}
			};
			var kS = (e = null, t) => {
				switch (t.type) {
					case Fy.a:
					case Fy.b:
					case Fy.c:
					case Fy.e:
						return t.payload;
					case Fy.d:
						return null;
					default:
						return e
				}
			};
			var xS = (e = !1, t) => {
				switch (t.type) {
					case Fy.f:
						return !0;
					default:
						return e
				}
			};
			var US = (e = "", t) => {
				switch (t.type) {
					case fI.k:
						return t.payload;
					default:
						return e
				}
			};
			var MS = (e = null, t) => {
				switch (t.type) {
					case Wn.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var GS = (e = null, t) => {
					switch (t.type) {
						case Wn.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				FS = Object(c.c)({
					isEmployee: MS,
					isLoggedIn: GS
				});
			var BS = (e = null, t) => {
					switch (t.type) {
						case kr.q: {
							const {
								topContentDismissal: r
							} = t.payload;
							return e && Qi()(e, r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				HS = r("./src/reddit/actions/userWhitelist.ts");
			const VS = {};
			var qS = (e = VS, t) => {
				switch (t.type) {
					case HS.e:
						return {
							...e, new: Dg.a.pending
						};
					case HS.d:
						return {
							...e, new: Dg.a.error
						};
					case HS.f:
						return {
							...e, new: Dg.a.waitingForRequest
						};
					case HS.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Dg.a.pending
						}
					}
					case HS.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Dg.a.error
						}
					}
					case HS.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Dg.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const KS = [];
			var WS = (e = KS, t) => {
					switch (t.type) {
						case HS.f:
							return [t.payload, ...e];
						case HS.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case kr.i:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				$S = Object(c.c)({
					api: qS,
					data: WS
				}),
				QS = Object(c.c)({
					account: yg,
					accountSettings: vg,
					blocked: Rg,
					chatSettings: kg,
					drafts: Ug,
					experiments: Vg,
					googleOneTapEnabled: Kg,
					isCustomizeFlyoutShowing: Wg,
					topContentDismissalPrefsSet: BS,
					language: $g,
					loid: Jg,
					notificationPrefs: IS,
					ownedBadges: SS,
					powerups: RS,
					prefs: CS.c,
					productOfferSubscriptions: LS,
					reddaid: NS,
					session: kS,
					sessionRefreshFailed: xS,
					sessionTracker: US,
					temporaryGQL: FS,
					wallets: dg,
					whitelist: $S
				});
			var JS = (e = null, t) => {
				switch (t.type) {
					case pg.a:
						return t.payload || null;
					case pg.b:
					case pg.c:
						return null;
					default:
						return e
				}
			};
			var zS = (e = !1, t) => {
				switch (t.type) {
					case pg.c:
						return !0;
					case pg.b:
					case pg.a:
						return !1;
					default:
						return e
				}
			};
			var XS = (e = !1, t) => {
				switch (t.type) {
					case pg.b:
						return !0;
					case pg.a:
					case pg.c:
						return !1;
					default:
						return e
				}
			};
			var YS = (e = !1, t) => {
					switch (t.type) {
						case pg.b:
							return t.payload.userDataExportEligibility;
						case pg.a:
						case pg.c:
							return !1;
						default:
							return e
					}
				},
				ZS = Object(c.c)({
					error: JS,
					pending: zS,
					success: XS,
					userDataExportEligibility: YS
				}),
				ev = Object(c.c)({
					userDataRequestPageApi: ZS
				});
			const tv = {};
			var rv = (e = tv, t) => {
				switch (t.type) {
					case fI.g:
					case fI.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case fI.e: {
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
			var sv = (e = !1, t) => {
					switch (t.type) {
						case fI.g:
							return !0;
						case fI.f:
						case fI.e:
							return !1;
						default:
							return e
					}
				},
				av = Object(c.c)({
					error: rv,
					pending: sv
				});
			const nv = {};
			var cv = (e = nv, t) => {
				switch (t.type) {
					case Ze.e: {
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
					case Ze.b: {
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
					case Ze.a: {
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
					case f.a: {
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
			const ov = {},
				dv = (e, t) => {
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					return r.forEach(r => {
						const a = e[r],
							n = t[r];
						a && Qi()(a, n) || (s[r.toLowerCase()] = n)
					}), Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var iv = (e = ov, t) => {
					switch (t.type) {
						case fI.f: {
							const {
								data: r
							} = t.payload;
							return dv(e, r)
						}
						case Yi.k: {
							const {
								user: r
							} = t.payload;
							return dv(e, {
								[r.username]: r
							})
						}
						case ce.t: {
							const {
								gildee: r
							} = t.payload;
							if (!r) return e;
							const s = e[r.toLowerCase()];
							if (!s) return e;
							const a = s.awardedLastMonth,
								n = a ? a.totalCount + 1 : 1,
								c = a && a.topAward;
							return c ? dv(e, {
								[r.toLowerCase()]: {
									...s,
									awardedLastMonth: {
										totalCount: n,
										topAward: c
									}
								}
							}) : e
						}
						case ce.a: {
							const {
								userName: r,
								awardeeKarma: s,
								awarderKarma: a
							} = t.payload, n = e[r.toLowerCase()];
							if (!n) return e;
							const c = s || n.awardeeKarma,
								o = a || n.awarderKarma;
							return dv(e, {
								[r.toLowerCase()]: {
									...n,
									awardeeKarma: c,
									awarderKarma: o,
									totalKarma: c + o + n.postKarma + n.commentKarma
								}
							})
						}
						case kr.k:
						case kr.j: {
							const {
								imageUrl: r,
								key: s,
								username: a
							} = t.payload;
							if ("profileIcon" !== s) return e;
							const n = a.toLowerCase(),
								c = e[n];
							return c ? dv(e, {
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
				uv = r("./src/reddit/actions/usernameAvailable.ts");
			const lv = {};
			var pv = (e = lv, t) => {
				switch (t.type) {
					case uv.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: uv.b.Available
						}
					}
					case uv.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: uv.b.Error
						}
					}
					case uv.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: uv.b.Pending
						}
					}
					case uv.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: uv.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const bv = {};
			var fv = (e = bv, t) => {
				switch (t.type) {
					case ce.eb: {
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
			var yv = (e = !1, t) => {
					switch (t.type) {
						case ce.db:
						case ce.fb:
							return !1;
						case ce.eb:
							return !0;
						default:
							return e
					}
				},
				mv = Object(c.c)({
					allocationByKey: fv,
					fetched: yv
				}),
				Ev = r("./src/reddit/actions/presence.ts");
			const hv = {};
			var _v = (e = hv, t) => {
				switch (t.type) {
					case Ev.a:
						return {
							...e, ...t.payload.presentUsers
						};
					default:
						return e
				}
			};
			var Ov = (e = null, t) => {
				switch (t.type) {
					case ce.tb:
						return t.payload;
					case ce.vb:
					case ce.ub:
						return null;
					default:
						return e
				}
			};
			var Iv = (e = !1, t) => {
					switch (t.type) {
						case ce.ub:
						case ce.tb:
							return !1;
						case ce.vb:
							return !0;
						default:
							return e
					}
				},
				gv = Object(c.c)({
					error: Ov,
					pending: Iv
				});
			var Sv = (e = null, t) => {
				switch (t.type) {
					case ce.wb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const vv = {};
			var Dv = (e = vv, t) => {
				switch (t.type) {
					case ce.ub: {
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
			const Tv = {};
			var wv = (e = Tv, t) => {
					switch (t.type) {
						case ce.ub: {
							const {
								postId: r,
								topAwardersRank: s
							} = t.payload;
							return {
								...e,
								[r]: (s || []).sort((e, t) => e.rank - t.rank)
							}
						}
						case ce.t: {
							const {
								id: r
							} = t.payload;
							return xs()(e, [r])
						}
						default:
							return e
					}
				},
				jv = Object(c.c)({
					api: gv,
					currentPostId: Sv,
					currentRank: Dv,
					list: wv
				}),
				Av = Object(c.c)({
					api: av,
					appliedBadges: cv,
					models: iv,
					nameAvailable: pv,
					topAwarders: jv,
					powerups: mv,
					presence: _v
				});
			const Rv = {};
			var Cv = (e = Rv, t) => {
					switch (t.type) {
						case W.b:
						case W.f:
						case X.SUBREDDIT_LOADED:
						case Z.i:
						case z.SEARCH_RESULTS_RECEIVED:
						case Le.PAGE_LOADED:
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
				Pv = r("./src/reddit/actions/widgets/constants.ts");
			const Lv = {};
			var Nv = (e = Lv, t) => {
					switch (t.type) {
						case W.b:
						case W.f:
						case z.SEARCH_RESULTS_RECEIVED:
						case Z.i:
						case X.SUBREDDIT_LOADED:
						case Le.PAGE_LOADED: {
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
						case Pv.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case Pv.h: {
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
				kv = r("./src/reddit/models/Widgets/index.ts");
			const xv = {};
			var Uv = (e = xv, t) => {
				switch (t.type) {
					case X.SUBREDDIT_LOADED: {
						const r = t.payload,
							s = r.structuredStyles && r.structuredStyles.data && r.structuredStyles.data.content;
						if (!s) return e;
						const a = s.widgets;
						return {
							...e,
							...a.items
						}
					}
					case Pv.b: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case O.k: {
						const t = {
							...e
						};
						return Object.keys(t).forEach(e => {
							t[e] = {
								...t[e],
								styles: Object(kv.m)()
							}
						}), t
					}
					case Pv.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case Pv.i:
					case Pv.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case Pv.h: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r.widgetId], s
					}
					case W.b:
					case W.f:
					case X.SUBREDDIT_LOADED:
					case Z.i:
					case z.SEARCH_RESULTS_RECEIVED:
					case Le.PAGE_LOADED:
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
					case lh.f: {
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
			const Mv = {};
			var Gv = (e = Mv, t) => {
				switch (t.type) {
					case X.SUBREDDIT_LOADED:
					case W.f:
					case Z.i:
					case Le.PAGE_LOADED: {
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
			const Fv = {};
			var Bv = (e = Fv, t) => {
				switch (t.type) {
					case X.SUBREDDIT_LOADED:
					case Le.PAGE_LOADED:
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
					case Pv.e:
					case Pv.b: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgets.layout.sidebar.order
						}
					}
					case Pv.f: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgetIds
						}
					}
					case Pv.g: {
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
					case Pv.h: {
						const r = t.payload;
						if (!e[r.subredditId]) return e;
						const s = e[r.subredditId].filter(e => e !== r.widgetId);
						return {
							...e,
							[r.subredditId]: s
						}
					}
					case W.b:
					case W.f:
					case X.SUBREDDIT_LOADED:
					case z.SEARCH_RESULTS_RECEIVED:
					case Z.i:
					case Le.PAGE_LOADED:
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
			const Hv = {
				accountManagerModalData: n,
				actionBarCountAnimation: p,
				activeModal: g,
				ads: w,
				apiRequestState: R,
				appBadges: U,
				authorFlair: ne,
				awards: Ye,
				badges: bt,
				blockedRedditors: It,
				blockUser: jt,
				brandSafety: Rt,
				chat: ur,
				claimGold: hr,
				commentsListTruncated: Or,
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
				externalAccount: Dc,
				featureFlags: Pc,
				focusedVerticals: Kc,
				fontFiles: $c,
				gild: co,
				header: mo,
				htmlResponseStreaming: Eo,
				imageUploads: Oo,
				interceptedAction: go,
				isChangeUsernameTooltipShowing: vo,
				isEmailVerificationTooltipShowing: To,
				isModeratorWithPostPerms: jo,
				jsApi: Co,
				leaderboard: Fo,
				listings: Ad,
				live: Nd,
				mediaGalleries: Fd,
				mediaPlayback: Vd,
				meta: Wd,
				moderatingSubreddits: Jd,
				moderationPromptId: zd,
				modListingPage: si,
				modModeEnabled: ni,
				moreComments: fi,
				multireddits: ou,
				notificationBannerId: iu,
				notificationsInbox: _u,
				nps: gu,
				page: ju,
				platform: Cu,
				postCollection: cl,
				polls: Qu,
				postFlair: pl,
				posts: vb,
				postStickiedComments: jb,
				givePremium: po,
				products: Vb,
				profileCommentsPage: af,
				profilePrivatePage: If,
				profileModSettingsPage: df,
				profilePostsPage: lf,
				profiles: ey,
				promos: ny,
				publicAccessNetwork: My,
				recentSubreddits: Hy,
				recommendations: qy,
				reportPage: em,
				reportRules: sm,
				requestHost: am,
				runTimeEnvVars: cm,
				search: Om,
				searchDiscoveryUnits: jm,
				seo: xm,
				shortcuts: Wm,
				sidebarPromotedPosts: Jm,
				streaming: sE,
				structuredStyles: gE,
				stylesheets: SE,
				subredditAutocomplete: PE,
				subreddits: dO,
				subredditStickyPosts: lO,
				subscriptions: LO,
				survey: GO,
				tabBadged: BO,
				tags: lI,
				themes: EI,
				toaster: OI,
				tooltipId: gI,
				tracing: DI,
				tracking: kI,
				trafficStats: GI,
				transfers: $I,
				trending: XI,
				trophies: eg,
				uploads: ag,
				user: QS,
				userDataRequestPage: ev,
				upvotePromptCountPerSess: cg,
				users: Av,
				widgets: Object(c.c)({
					idCardIds: Cv,
					menuIds: Nv,
					models: Uv,
					moderatorIds: Gv,
					sidebar: Bv
				})
			}
		},
		"./src/reddit/routes/premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/actions/page.ts");
			const c = "/premium",
				o = Object(s.a)({
					resolved: {},
					chunkName: () => "Premium",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("Premium").then(r.bind(null, "./src/reddit/pages/Premium/index.tsx")),
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
					action: n.e,
					chunk: a.q.PREMIUM,
					component: o,
					exact: !0,
					meta: {
						name: a.Jb.PREMIUM
					},
					path: c
				};
			t.a = d
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, r) {
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
			var s = r("./src/reddit/selectors/user.ts");
			const a = e => e.blockedRedditors.api.pending,
				n = e => e.blockedRedditors.list,
				c = (e, t) => {
					const r = (e => {
						const t = n(e);
						return t && t.ids
					})(e);
					return !!r && r.includes(t)
				},
				o = (e, t) => {
					const r = Object(s.nb)(e, {
						userName: t
					});
					return !!r && c(e, r.id)
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
				p = Object(n.a)(l, o.c, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, r, s) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !r) && (!(!e.userFlairAllowed && s === c.d.UserFlair) && !(!e.postFlairAllowed && s === c.d.LinkFlair)))),
				b = Object(n.a)(u, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				f = (e, t) => Object(d.w)(e, {
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
					experimentName: a.S,
					expEventOverride: !1
				}), e => e),
				u = e => e === a.L.Onetap,
				l = e => e === a.L.OnetapAuto,
				p = e => e.user.googleOneTapEnabled,
				b = Object(s.a)(o.K, i, (e, t) => !e && !!t),
				f = Object(s.a)(o.K, i, (e, t) => !e && !!t && !Object(a.Sd)(t))
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
						experimentName: s.Oc
					}) === s.Yc.Enabled
				},
				c = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: a.a,
						experimentName: s.Nc
					}) === s.Xc.Enabled
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
				a = r("./src/reddit/helpers/chooseVariant/index.ts"),
				n = r("./src/reddit/models/Vote/index.ts"),
				c = r("./src/reddit/selectors/posts.ts");
			const o = 5e3,
				d = 12e3,
				i = (e, t) => {
					const r = Object(c.F)(e, t);
					return r && (1 === (null == r ? void 0 : r.score) || 0 === (null == r ? void 0 : r.score)) && (null == r ? void 0 : r.voteState) === n.a.notVoted
				},
				u = (e, t) => {
					if (!i(e, t)) return !1;
					const r = Object(a.c)(e, {
						experimentEligibilitySelector: a.a,
						experimentName: s.Ld
					});
					return r === s.Md.Variant1 || r === s.Md.Variant2
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
				return h
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "r", (function() {
				return O
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "o", (function() {
				return D
			})), r.d(t, "b", (function() {
				return T
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
				h = (e, {
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
				}) || h(e, {
					subredditId: t,
					scheduledPostId: r
				}),
				O = e => e.creations.formData.scheduledPostId,
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
				v = e => e.posts.scheduledPosts[n.f.recurringPosts].editModal.subredditId,
				D = e => e.posts.scheduledPosts.api.pendingUpdate,
				T = e => e.posts.scheduledPosts.api.creationToken
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
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"0290a261578c"}')
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"9995fe64fd5a"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"eab9458f507c"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.116e632d4849f885c959.js.map