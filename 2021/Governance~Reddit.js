// https://www.redditstatic.com/desktop2x/Governance~Reddit.0e84c70e53b057f7c485.js
// Retrieved at 6/23/2021, 11:30:04 AM by Reddit Dataminer v1.0.0
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
						experimentName: n.U
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
						})), await t(Object(s.b)(`${r.path}`)), (null == e ? void 0 : e.isInSrCreationFlowM2Experiment) === c.ob.Upsell && (t(Object(n.h)(o.a.POST_FLOW_UPSELL_MODAL_ID)), Object(_.a)(Object(E.g)()(f))), Object(m.b)(m.a.SubredditCreation)
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
					overflow: "auto"
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
				return Uv
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
				c = r("./src/reddit/actions/authorFlair.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				d = r("./src/reddit/actions/governance/constants.ts"),
				i = r("./src/reddit/actions/harbergerTax/constants.ts"),
				u = r("./src/reddit/actions/platform.ts"),
				l = r("./src/reddit/actions/product.ts"),
				p = r("./src/reddit/actions/reportFlow/constants.ts"),
				b = r("./src/reddit/actions/structuredStyles/constants.ts"),
				f = r("./src/reddit/constants/modals.ts");
			var y = (e = null, t) => {
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
				m = r("./src/reddit/actions/ads/constants.ts"),
				E = r("./src/reddit/actions/unload/constants.ts");
			const h = {};

			function _(e, t, r, s) {
				const a = e[t];
				return {
					...e,
					[t]: {
						...a,
						[s]: r
					}
				}
			}
			var O = (e = h, t) => {
					if (!t.payload) return e;
					switch (t.type) {
						case m.d:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "adImpression");
						case m.b:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "adClick");
						case m.n:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "adViewableImpression");
						case m.k:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "adVideoViewable");
						case m.e:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable");
						case m.j:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "adVideoStarted");
						case m.i:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedWithSound");
						case m.g:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "adVideoGroupMViewable");
						case m.f:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "adVideoFullyViewable50");
						case m.h:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "adVideoPlayedExpanded");
						case m.l: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: a
							} = t.payload;
							return _(e, r, a, `adVideoWatchedPercent${s}`)
						}
						case m.m: {
							const {
								postId: r,
								eventType: s,
								vendorMetadata: a
							} = t.payload;
							return _(e, r, a, `adVideoWatchedSeconds${s}`)
						}
						case m.w:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewable");
						case m.y:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds5");
						case m.x:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "vendorFullyViewableSeconds15");
						case E.b:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case m.s:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						case m.c:
							return _(e, t.payload.postId, t.payload.vendorMetadata, "adGalleryItemImpression");
						default:
							return e
					}
				},
				I = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/apiRequestState.ts"));
			const g = {};
			var S = (e = g, t) => {
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
							if (1 === Object.keys(e).length) return g;
							const s = {
								...e
							};
							return delete s[r], s
						}
						default:
							return e
					}
				},
				v = r("./node_modules/redux/es/redux.js"),
				D = r("./src/reddit/actions/appBadgeIndicators/constants.ts");
			var T = (e = null, t) => {
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
			var w = (e = !1, t) => {
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
				j = Object(v.c)({
					error: T,
					pending: w
				});
			const A = {};
			var R = (e = A, t) => {
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
				C = Object(v.c)({
					api: j,
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
				G = r("./src/reddit/actions/modQueue/constants.ts"),
				F = r("./src/reddit/actions/pages/constants.ts"),
				B = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				H = r("./src/reddit/actions/pages/profilePosts.ts"),
				V = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				q = r("./src/reddit/actions/pages/search.ts"),
				K = r("./src/reddit/actions/pages/subreddit.ts"),
				W = r("./src/reddit/actions/profileConversations.ts"),
				$ = r("./src/reddit/actions/subreddit.ts"),
				Q = r("./src/reddit/actions/userFlair/constants.ts"),
				J = r("./src/reddit/models/User/index.ts");
			const z = {};
			var X = (e = z, t) => {
				switch (t.type) {
					case U.b:
					case U.c: {
						const r = t.payload,
							{
								authorFlair: s,
								isChatSort: a
							} = r;
						if (s && a) {
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
					case F.f:
					case B.b:
					case B.e:
					case H.PROFILE_POSTS_LOADED:
					case H.MORE_POSTS_LOADED:
					case W.e:
					case $.i:
						return Y(e, t.payload);
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v:
						return Y(e, t.payload.response);
					case Q.r: {
						const {
							subredditId: r,
							userName: s,
							applied: a,
							displaySettings: {
								isUserEnabled: n
							}
						} = t.payload;
						return Object(L.setIn)(e, [r, s], n ? a : null)
					}
					case M.h:
					case M.b: {
						const {
							subredditId: r,
							userName: s,
							applied: a
						} = t.payload;
						return e[r] && e[r][s] ? Object(L.setIn)(e, [r, s], a) : e
					}
					case Q.a: {
						const {
							subredditId: r,
							userName: s,
							applied: a,
							displaySettings: {
								isEnabled: n
							}
						} = t.payload;
						return Object(L.setIn)(e, [r, s], n ? a : null)
					}
					default:
						return e
				}
			};
			const Y = (e, {
				account: t,
				authorFlair: r,
				userFlair: s
			}) => {
				const a = Object(L.merge)(e, r);
				if (!s || !t) return a;
				const n = Object.keys(s)[0];
				if (!n) return a;
				const c = s[n],
					o = Object(J.e)(t),
					d = c.applied,
					i = c.displaySettings && c.displaySettings.isUserEnabled;
				return o && d && i ? Object(L.merge)(a, {
					[n]: {
						[o]: d
					}
				}) : a
			};
			var Z = Object(v.c)({
					inContext: P,
					models: X
				}),
				ee = r("./src/reddit/actions/gold/constants.ts");
			const te = {};
			var re = (e = te, t) => {
				switch (t.type) {
					case ee.e: {
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
					case ee.i:
					case ee.j:
						return null;
					case ee.h:
						return t.payload;
					default:
						return e
				}
			};
			var ae = (e = !1, t) => {
					switch (t.type) {
						case u.a:
						case ee.j:
						case ee.h:
							return !1;
						case ee.i:
							return !0;
						default:
							return e
					}
				},
				ne = Object(v.c)({
					error: se,
					pending: ae
				}),
				ce = Object(v.c)({
					api: ne
				});
			var oe = (e = null, t) => {
				switch (t.type) {
					case ee.I:
					case ee.H:
						return null;
					case ee.G:
						return t.payload;
					default:
						return e
				}
			};
			const de = {};
			var ie = (e = de, t) => {
					switch (t.type) {
						case ee.I: {
							const {
								subredditOrProfileId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case ee.e:
						case ee.H:
						case ee.M:
						case ee.G: {
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
				ue = Object(v.c)({
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
						} = t.payload, a = {};
						return r.forEach(e => {
							a[e.id] = e.isEnabled
						}), {
							...e,
							[s]: a
						}
					}
					case ee.m: {
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
					case ee.p: {
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
						case ee.H: {
							const {
								awards: r,
								subredditOrProfileId: s
							} = t.payload, a = r.map(e => e.id);
							return {
								...e,
								[s]: a
							}
						}
						case ee.j: {
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
				ye = Object(v.c)({
					api: ue,
					availability: pe,
					order: fe
				}),
				me = r("./node_modules/lodash/merge.js"),
				Ee = r.n(me);
			const he = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const r = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${r}`
			};
			var _e = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : he(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : he(e.endsAt)), e),
				Oe = r("./src/reddit/models/Gold/Award.ts"),
				Ie = r("./src/reddit/actions/discoveryUnit.ts"),
				ge = r("./src/reddit/actions/frontpage/constants.ts"),
				Se = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				ve = r("./src/reddit/actions/multireddit/constants.ts"),
				De = r("./src/reddit/actions/pages/modListing/constants.ts"),
				Te = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				we = r("./src/reddit/actions/pages/postCreation.ts"),
				je = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				Ae = r("./src/reddit/actions/profileOverviewChrono/constants.ts"),
				Re = r("./src/lib/makeActionCreator/index.ts"),
				Ce = (r("./src/config.ts"), r("./src/lib/constants/index.ts"));
			r("./src/lib/makeApiRequest/index.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			Object(Re.a)("RECOMMENDED_POSTS_LOADED"), Object(Re.a)("RECOMMENDED_POSTS_FAILED");
			var Pe = r("./src/reddit/actions/search.ts");
			const Le = Oe.m,
				Ne = (e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				})([_e]),
				ke = (e, t) => {
					const r = t.reduce((e, t) => (e[t.id] = Ne(t), e), {});
					return Ee()({
						...e
					}, r)
				};
			var xe = (e = Le, t) => {
				var r;
				switch (t.type) {
					case ee.H: {
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
					case ee.c: {
						const {
							awards: r
						} = t.payload, s = r.reduce((e, t) => (e[t.award.id] = Ne(t.award), e), {});
						return Ee()({
							...e
						}, s)
					}
					case ee.j: {
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
					case ee.ib: {
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
					case F.b:
					case x.w:
					case U.b:
					case we.PAGE_LOADED:
					case Ie.e:
					case ge.f:
					case De.e:
					case De.h:
					case G.f:
					case G.m:
					case G.p:
					case G.v:
					case ve.r:
					case F.f:
					case ge.b:
					case Te.b:
					case q.SEARCH_RESULTS_RECEIVED:
					case B.b:
					case B.e:
					case W.b:
					case W.e:
					case je.b:
					case je.e:
					case Ae.b:
					case H.MORE_POSTS_LOADED:
					case H.PROFILE_POSTS_LOADED:
					case V.c:
					case V.e:
					case V.i:
					case V.g:
					case "RECOMMENDED_POSTS_LOADED":
					case Pe.e:
					case $.i:
					case K.SUBREDDIT_LOADED: {
						const r = {},
							s = t.payload.posts || [],
							a = t.payload.comments || [];
						for (const e in s) {
							const t = s[e].allAwardings || [];
							for (const e of t) r[e.id] = Ne(Object(Oe.h)(e))
						}
						for (const e in a) {
							const t = a[e],
								{
									associatedAward: s,
									allAwardings: n = []
								} = t;
							for (const e of n) r[e.id] = Ne(Object(Oe.h)(e));
							s && (r[s.id] = Ne(s))
						}
						return Object.keys(r).forEach(t => {
							var s;
							0 === (null === (s = e[t]) || void 0 === s ? void 0 : s.coinPrice) && delete r[t]
						}), Ee()({
							...e
						}, r)
					}
					case ee.rb: {
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
						}), Ee()({
							...e
						}, r)
					}
					case Se.o: {
						const {
							freeAwardEvent: s
						} = t.payload;
						return ke(e, (null === (r = null == s ? void 0 : s.freeAwards) || void 0 === r ? void 0 : r.awards) || [])
					}
					case Se.h: {
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
						case ee.d: {
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
						case ee.c:
						case ee.b: {
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
				Ge = Object(v.c)({
					pending: Me
				});
			const Fe = {};
			var Be = (e = Fe, t) => {
					switch (t.type) {
						case ee.c: {
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
				He = Object(v.c)({
					api: Ge,
					order: Be
				});
			const Ve = {};
			var qe = (e = Ve, t) => {
					switch (t.type) {
						case ee.c: {
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
				Ke = Object(v.c)({
					order: qe
				}),
				We = Object(v.c)({
					blacklist: re,
					create: ce,
					manageable: ye,
					models: xe,
					sortedUsable: He,
					tags: Ke
				}),
				$e = r("./src/reddit/actions/badge.ts");
			const Qe = {};
			var Je = (e = Qe, t) => {
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
				Ye = Object(v.c)({
					error: Je,
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
				st = Object(v.c)({
					error: et,
					pending: rt
				}),
				at = Object(v.c)({
					subreddit: Ye,
					user: st
				});
			const nt = {};
			var ct = (e = nt, t) => {
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
				ot = Object(v.c)({
					api: at,
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
				pt = Object(v.c)({
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
				yt = Object(v.c)({
					api: pt,
					list: ft
				}),
				mt = r("./src/reddit/actions/userBlocks.ts");
			const Et = {};
			var ht = (e = Et, t) => {
				switch (t.type) {
					case mt.f:
					case mt.e: {
						const {
							userId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case mt.d: {
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
			const _t = {};
			var Ot = (e = _t, t) => {
					switch (t.type) {
						case mt.f: {
							const {
								userId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case mt.e:
						case mt.d: {
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
				It = Object(v.c)({
					error: ht,
					pending: Ot
				}),
				gt = Object(v.c)({
					api: It
				});
			const St = {
				isViewSafe: !0,
				hasBrandSafetyBeenAssessed: !1
			};
			var vt = (e = St, t) => {
					switch (t.type) {
						case m.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case K.SUBREDDIT_PENDING:
						case Te.c:
						case ge.c:
							return e.hasBrandSafetyBeenAssessed ? {
								...e,
								hasBrandSafetyBeenAssessed: !1
							} : e;
						default:
							return e
					}
				},
				Dt = r("./src/reddit/actions/downToChat.ts");
			var Tt = (e = null, t) => {
				switch (t.type) {
					case Dt.f:
					case Dt.g:
						return null;
					case Dt.e: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var wt = (e = !1, t) => {
					switch (t.type) {
						case Dt.b:
						case Dt.f:
							return !0;
						case Dt.a:
						case Dt.c:
						case Dt.e:
						case Dt.g:
							return !1;
						default:
							return e
					}
				},
				jt = Object(v.c)({
					error: Tt,
					pending: wt
				}),
				At = r("./node_modules/lodash/mapValues.js"),
				Rt = r.n(At);
			const Ct = {};
			var Pt = (e = Ct, t) => {
					switch (t.type) {
						case Dt.f:
						case Dt.e:
						case Dt.g: {
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
						case Dt.c: {
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
						case Dt.d:
							return {
								...Rt()(e, e => ({
									bannerEnabled: !1,
									buttonEnabled: e.buttonEnabled
								}))
							};
						case Dt.a:
						case Dt.b:
						default:
							return e
					}
				},
				Lt = Object(v.c)({
					api: jt,
					subreddits: Pt
				}),
				Nt = r("./src/reddit/actions/chat/init.ts");
			var kt = (e = !1, t) => {
					switch (t.type) {
						case Nt.a:
							return !0;
						default:
							return e
					}
				},
				xt = r("./src/chat/actions/promo/constants.ts");
			const Ut = {
				displaySubredditChatFtux: !1
			};
			var Mt = (e = Ut, t) => {
					switch (t.type) {
						case xt.a: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case xt.b: {
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
				Gt = r("./src/lib/omitKey/index.ts"),
				Ft = r("./src/reddit/actions/pages/chatSettings.ts");
			const Bt = {};
			var Ht = (e = Bt, t) => {
				switch (t.type) {
					case Ft.b: {
						const {
							subredditId: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Ft.a:
					case Ft.c:
					case Ft.d: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Gt.a)(e, r)
					}
					default:
						return e
				}
			};
			const Vt = {};
			var qt = (e = Vt, t) => {
					switch (t.type) {
						case Ft.a:
						case Ft.b:
						case Ft.c:
						case Ft.d: {
							const {
								subredditId: r
							} = t.payload, s = t.type === Ft.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Kt = Object(v.c)({
					error: Ht,
					pending: qt
				}),
				Wt = Object(v.c)({
					fetch: Kt
				});
			const $t = {};
			var Qt = (e = $t, t) => {
					switch (t.type) {
						case Ft.a:
						case Ft.d: {
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
				Jt = Object(v.c)({
					api: Wt,
					models: Qt
				}),
				zt = r("./src/reddit/actions/chat/unreadCount.ts");
			const Xt = {
				apiError: null
			};
			var Yt = (e = Xt, t) => {
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
				er = Object(v.c)({
					error: Yt,
					pending: Zt
				});
			const tr = {
				basicChannelCount: 0,
				subredditChannelCount: 0
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
				sr = Object(v.c)({
					api: er,
					count: rr
				}),
				ar = Object(v.c)({
					downToChat: Lt,
					isInited: kt,
					promos: Mt,
					subredditSettingsPage: Jt,
					unread: sr
				}),
				nr = r("./src/reddit/actions/claimgold.ts");
			var cr = (e = null, t) => {
				switch (t.type) {
					case nr.a:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg;
					case nr.d:
					case nr.e:
					case nr.c:
						return null;
					default:
						return e
				}
			};
			var or = (e = !1, t) => {
				switch (t.type) {
					case nr.d:
					case nr.c:
					case nr.a:
						return !1;
					case nr.b:
						return !0;
					default:
						return e
				}
			};
			var dr = (e = !1, t) => {
					switch (t.type) {
						case nr.b:
						case nr.d:
						case nr.c:
						case nr.a:
							return !1;
						case nr.f:
							return !0;
						default:
							return e
					}
				},
				ir = Object(v.c)({
					error: cr,
					pending: or,
					showLoader: dr
				});
			var ur = (e = "", t) => {
				switch (t.type) {
					case nr.g:
						return t.payload;
					case nr.e:
						return "";
					default:
						return e
				}
			};
			var lr = (e = !1, t) => {
					switch (t.type) {
						case nr.e:
							return !0;
						case nr.c:
						case nr.d:
							return !1;
						default:
							return e
					}
				},
				pr = Object(v.c)({
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
				yr = r("./src/reddit/actions/communityFlairs/constants.ts");
			const mr = {};
			var Er = (e = mr, t) => {
					switch (t.type) {
						case yr.a: {
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
				hr = r("./src/reddit/actions/contentControls/constants.ts");
			const _r = {};
			var Or = (e = _r, t) => {
				switch (t.type) {
					case hr.a: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case hr.c:
					case hr.b: {
						const {
							subredditName: r
						} = t.payload;
						return Object(Gt.a)(e, r)
					}
					default:
						return e
				}
			};
			const Ir = {};
			var gr = (e = Ir, t) => {
					switch (t.type) {
						case hr.c:
						case hr.a:
						case hr.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === hr.c;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Sr = Object(v.c)({
					error: Or,
					pending: gr
				}),
				vr = Object(v.c)({
					fetch: Sr
				});
			const Dr = {};
			var Tr = (e = Dr, t) => {
					switch (t.type) {
						case hr.b: {
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
						case hr.d: {
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
				wr = Object(v.c)({
					api: vr,
					models: Tr
				}),
				jr = r("./src/reddit/actions/contentGate.ts"),
				Ar = r("./src/reddit/actions/preferences.ts");
			const Rr = {};
			var Cr = (e = Rr, t) => {
				switch (t.type) {
					case jr.a: {
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
					case jr.b: {
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
									isContributorRequestsDisabled: a,
									isContributorRequestTimestamp: n,
									subredditId: c
								}
							}
						}
						return e
					}
					case jr.f: {
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
					case jr.h: {
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
					case jr.i: {
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
					case jr.j: {
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
					case jr.c:
					case jr.d:
					case jr.e: {
						const {
							profileName: r
						} = t.payload, s = Ce.dc + r.toLocaleLowerCase(), a = e[s] || {}, n = {
							profileDeleted: t.type === jr.d,
							profileSuspended: t.type === jr.e,
							profileBlockedForLegalReason: t.type === jr.c
						};
						return {
							...e,
							[s]: {
								...a,
								...n
							}
						}
					}
					case Ar.p:
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
			const Pr = {};
			var Lr = (e = Pr, t) => {
					switch (t.type) {
						case x.w:
						case F.b:
						case F.f:
							return {
								...e, ...t.payload.continueThreads
							};
						default:
							return e
					}
				},
				Nr = Object(v.c)({
					models: Lr
				}),
				kr = r("./src/reddit/actions/postCollection/constants.ts");
			var xr = (e = null, t) => {
				switch (t.type) {
					case s.c:
					case kr.d:
					case kr.c:
					case kr.s:
					case kr.r:
						return null;
					case kr.b:
					case kr.n:
						return t.payload;
					default:
						return e
				}
			};
			var Ur = (e = !1, t) => {
					switch (t.type) {
						case kr.c:
						case kr.r:
							return !0;
						case kr.d:
						case kr.b:
						case kr.s:
						case kr.n:
							return !1;
						default:
							return e
					}
				},
				Mr = Object(v.c)({
					error: xr,
					pending: Ur
				}),
				Gr = Object(v.c)({
					createOrUpdate: Mr
				}),
				Fr = r("./src/reddit/actions/postDraft.ts");
			const Br = {};
			var Hr = (e = Br, t) => {
				switch (t.type) {
					case Fr.c:
					case Fr.b: {
						const {
							draftId: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Fr.a: {
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
			const Vr = {};
			var qr = (e = Vr, t) => {
					switch (t.type) {
						case Fr.b: {
							const {
								draftId: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Fr.c:
						case Fr.a: {
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
				Kr = Object(v.c)({
					error: Hr,
					pending: qr
				});
			var Wr = (e = null, t) => {
				switch (t.type) {
					case Fr.d:
						return t.payload;
					case Fr.f:
					case Fr.e:
						return null;
					default:
						return e
				}
			};
			var $r = (e = !1, t) => {
					switch (t.type) {
						case Fr.f:
							return !0;
						case Fr.e:
						case Fr.d:
							return !1;
						default:
							return e
					}
				},
				Qr = Object(v.c)({
					error: Wr,
					pending: $r
				});
			const Jr = {
				apiError: null,
				needsCaptcha: !1,
				validationError: null,
				submitValidationError: null
			};
			var zr = (e = Jr, t) => {
				switch (t.type) {
					case Fr.l:
					case Fr.j:
						return Jr;
					case Fr.i: {
						const e = t.payload;
						return {
							...Jr,
							apiError: e
						}
					}
					case Fr.m: {
						const e = t.payload;
						return {
							...Jr,
							validationError: e
						}
					}
					case Fr.k: {
						const e = t.payload;
						return {
							...Jr,
							submitValidationError: e
						}
					}
					case Fr.h:
						return {
							...Jr, needsCaptcha: !0
						};
					default:
						return e
				}
			};
			var Xr = (e = !1, t) => {
					switch (t.type) {
						case Fr.j:
							return !0;
						case Fr.l:
						case Fr.i:
						case Fr.m:
						case Fr.k:
						case Fr.h:
							return !1;
						default:
							return e
					}
				},
				Yr = Object(v.c)({
					error: zr,
					pending: Xr
				}),
				Zr = Object(v.c)({
					deleteDraft: Kr,
					listing: Qr,
					save: Yr
				}),
				es = r("./src/reddit/actions/postCreation/constants.ts");
			const ts = {};
			var rs = (e = ts, t) => {
					switch (t.type) {
						case es.C: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case es.p: {
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
				ss = Object(v.c)({
					pending: rs
				});
			var as = (e = null, t) => {
				switch (t.type) {
					case es.u:
					case es.v:
					case es.d:
					case es.e:
					case es.f:
					case es.i:
					case es.j:
					case es.n:
					case es.K:
						return null;
					case es.t:
						return t.payload;
					default:
						return e
				}
			};
			var ns = (e = !1, t) => {
					switch (t.type) {
						case es.u:
							return !0;
						case es.v:
						case es.t:
							return !1;
						default:
							return e
					}
				},
				cs = Object(v.c)({
					error: as,
					pending: ns
				}),
				os = Object(v.c)({
					converting: ss,
					mediaUpload: cs
				});
			const ds = {};
			var is = (e = ds, t) => {
				switch (t.type) {
					case we.PAGE_LOADED:
					case we.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case we.PAGE_FAILED: {
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
			const us = {};
			var ls = (e = us, t) => {
				switch (t.type) {
					case we.PAGE_PENDING: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !1
						}
					}
					case we.PAGE_LOADED: {
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
			const ps = {};
			var bs = (e = ps, t) => {
					switch (t.type) {
						case we.PAGE_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case we.PAGE_LOADED:
						case we.PAGE_FAILED: {
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
				fs = Object(v.c)({
					error: is,
					fetched: ls,
					pending: bs
				}),
				ys = r("./src/reddit/actions/scheduledPosts/constants.ts");
			const ms = {
				apiError: null,
				needsCaptcha: !1,
				pollError: void 0,
				validationError: null,
				submitValidationError: null
			};
			var Es = (e = ms, t) => {
				switch (t.type) {
					case es.L:
					case ys.h:
					case ys.k:
					case ys.b:
					case ys.d:
					case es.w:
					case es.c:
					case es.d:
					case es.e:
					case es.f:
					case es.i:
					case es.j:
					case es.n:
					case es.K:
					case es.A:
						return ms;
					case es.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return r ? ms : e
					}
					case es.o: {
						const e = t.payload;
						return {
							...ms,
							apiError: e
						}
					}
					case es.X: {
						const e = t.payload;
						return {
							...ms,
							validationError: e
						}
					}
					case es.G:
					case es.F: {
						const e = t.payload;
						return {
							...ms,
							submitValidationError: e
						}
					}
					case es.a:
						return {
							...ms, needsCaptcha: !0
						};
					case es.y:
						return {
							...ms, pollError: t.payload
						};
					default:
						return e
				}
			};
			var hs = (e = !1, t) => {
					switch (t.type) {
						case es.w:
							return !0;
						case es.L:
						case ys.h:
						case es.o:
						case es.X:
						case es.F:
						case es.G:
						case es.y:
						case es.a:
							return !1;
						default:
							return e
					}
				},
				_s = Object(v.c)({
					error: Es,
					pending: hs
				});
			var Os = (e = null, t) => {
				switch (t.type) {
					case es.x:
					case es.D:
						return null;
					case es.m:
						return t.payload;
					default:
						return e
				}
			};
			var Is = (e = !1, t) => {
					switch (t.type) {
						case es.x:
							return !0;
						case es.m:
						case es.l:
							return !1;
						default:
							return e
					}
				},
				gs = Object(v.c)({
					error: Os,
					pending: Is
				}),
				Ss = Object(v.c)({
					submit: _s,
					update: gs
				});
			var vs = (e = null, t) => {
				switch (t.type) {
					case es.K:
					case es.I:
					case es.J:
						return null;
					default:
						return e
				}
			};
			var Ds = (e = !1, t) => {
					switch (t.type) {
						case es.J:
							return !0;
						case es.I:
						case es.K:
							return !1;
						default:
							return e
					}
				},
				Ts = Object(v.c)({
					error: vs,
					pending: Ds
				}),
				ws = Object(v.c)({
					change: Ts
				}),
				js = Object(v.c)({
					collection: Gr,
					draft: Zr,
					editor: os,
					page: fs,
					post: Ss,
					subreddit: ws
				}),
				As = r("./node_modules/lodash/omit.js"),
				Rs = r.n(As),
				Cs = r("./src/reddit/actions/pages/postDraft.ts");
			const Ps = {};
			var Ls = (e = Ps, t) => {
				switch (t.type) {
					case Fr.e: {
						const {
							postDrafts: e
						} = t.payload;
						return e || Ps
					}
					case Fr.c: {
						const r = e,
							{
								draftId: s
							} = t.payload;
						return Rs()(r, s)
					}
					case es.L: {
						const {
							draftId: r
						} = t.payload;
						return r ? Rs()(e, r) : e
					}
					case Cs.PAGE_LOADED: {
						const {
							drafts: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Ns = e => {
					if (e.payload && e.payload.routeMatch) return e.payload.routeMatch.route.meta.name
				},
				ks = e => {
					if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.queryParams
				};
			var xs = r("./src/reddit/models/PostDraft/index.ts");
			var Us = (e = "", t) => {
					switch (t.type) {
						case es.d:
							return t.payload || "";
						case es.A:
							return "";
						case u.a: {
							if (Ns(t) !== Ce.Jb.POST_CREATION) return "";
							const r = ks(t);
							return r && r.url ? r.url || "" : e
						}
						case Fr.g: {
							const e = t.payload;
							return e.kind === xs.b.Link && e.body || ""
						}
						case ys.b:
						case ys.n:
							return t.payload.url || "";
						default:
							return e
					}
				},
				Ms = r("./src/reddit/models/PostCreationForm/index.ts"),
				Gs = r("./src/reddit/models/ScheduledPost/index.ts");
			var Fs = (e = "", t) => {
				switch (t.type) {
					case es.e:
						return t.payload || "";
					case es.A:
					case es.E:
						return "";
					case es.M:
						return t.payload.editorMode === Ms.h.MARKDOWN ? t.payload.content || "" : e;
					case u.a: {
						if (Ns(t) !== Ce.Jb.POST_CREATION) return "";
						const r = ks(t);
						return r && r.text ? (e => e ? e.replace(/\+/g, " ") : "")(r.text) : e
					}
					case Fr.g: {
						const e = t.payload;
						return e.kind === xs.b.Markdown && e.body || ""
					}
					case ys.b:
					case ys.n: {
						const e = t.payload;
						return e.contentType === Gs.a.TEXT ? e.body : ""
					}
					default:
						return e
				}
			};
			const Bs = {
				items: [],
				selectedKey: null
			};
			var Hs = (e = Bs, t) => {
					switch (t.type) {
						case es.f:
							return t.payload || Bs;
						case es.A:
							return Bs;
						case u.a:
							return Ns(t) !== Ce.Jb.POST_CREATION ? Bs : e;
						case Fr.g:
							return Bs;
						case ys.b:
						case ys.n:
							return Bs;
						default:
							return e
					}
				},
				Vs = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				qs = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Ks = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const Ws = Vs.a.createInitial;
			var $s = (e = Ws(), t) => {
					switch (t.type) {
						case es.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case es.A:
							return Vs.a.createInitial();
						case es.M: {
							const r = t.payload;
							return r.editorMode === Ms.h.RICH_TEXT && r.editorKey === Ms.g.POST_CREATION ? Vs.a.createInitial(r.content) : e
						}
						case u.a:
							return Ns(t) !== Ce.Jb.POST_CREATION ? Vs.a.createInitial() : e;
						case Fr.g: {
							const e = t.payload;
							return e.kind === xs.b.RichText ? Vs.a.createInitial(e.body) : Vs.a.createInitial()
						}
						case ys.b:
						case ys.n: {
							const e = t.payload,
								r = Object(qs.c)(e.mediaAssets);
							return Vs.a.createInitial(e.contentType === Gs.a.RTJSON ? Object(Ks.b)(e.body) : void 0, r || void 0)
						}
						default:
							return e
					}
				},
				Qs = Object(v.c)({
					link: Us,
					markdown: Fs,
					media: Hs,
					rte: $s
				});
			var Js = (e = null, t) => {
					switch (t.type) {
						case es.b:
							return t.payload || null;
						case es.A:
						case Fr.g:
						case ys.b:
						case ys.n:
						case es.K:
							return null;
						case u.a:
							return Ns(t) === Ce.Jb.POST_CREATION ? e : null;
						default:
							return e
					}
				},
				zs = r("./src/reddit/selectors/scheduledPosts/index.ts");
			var Xs = (e = null, t) => {
				switch (t.type) {
					case es.c:
						return t.payload || null;
					case ys.b:
					case ys.n: {
						const e = t.payload;
						return Object(zs.n)({
							scheduledPost: e
						}) || null
					}
					case es.A:
						return null;
					case u.a:
						return Ns(t) === Ce.Jb.POST_CREATION ? e : null;
					case Fr.g:
						return t.payload.flair || null;
					default:
						return e
				}
			};
			var Ys = (e = null, t) => {
				switch (t.type) {
					case es.q:
						return t.payload.type || null;
					case ys.b:
					case ys.n:
					case es.i:
					case es.A:
					case u.a:
						return null;
					default:
						return e
				}
			};
			var Zs = (e = !1, t) => {
				switch (t.type) {
					case es.O:
						return t.payload || !1;
					case ys.b:
					case ys.n:
						return "CHAT" === t.payload.discussionType;
					case es.A:
						return !1;
					case u.a:
						return Ns(t) === Ce.Jb.POST_CREATION && e;
					case Fr.g:
						return t.payload.isChatPost || !1;
					default:
						return e
				}
			};
			var ea = (e = !1, t) => {
				switch (t.type) {
					case es.W: {
						const {
							isContestMode: e
						} = t.payload;
						return e || !1
					}
					case es.A:
						return !1;
					case u.a:
						return Ns(t) === Ce.Jb.POST_CREATION && e;
					case ys.b:
					case ys.n:
						return t.payload.isContestMode;
					default:
						return e
				}
			};
			var ta = (e = !1, t) => {
				switch (t.type) {
					case es.Q:
						return t.payload || !1;
					case es.A:
						return !1;
					case u.a:
						return Ns(t) === Ce.Jb.POST_CREATION && e;
					case Fr.g:
						return t.payload.isNSFW || !1;
					case ys.b:
					case ys.n:
						return t.payload.isNsfw;
					default:
						return e
				}
			};
			var ra = (e = !1, t) => {
				switch (t.type) {
					case es.R:
						return t.payload || !1;
					case es.A:
						return !1;
					case es.K: {
						const {
							name: r
						} = t.payload;
						return !!r && e
					}
					case u.a:
						return Ns(t) === Ce.Jb.POST_CREATION && e;
					case Fr.g:
						return t.payload.isOriginalContent || !1;
					case ys.b:
					case ys.n:
						return t.payload.isOriginalContent;
					default:
						return e
				}
			};
			var sa = (e = !1, t) => {
				switch (t.type) {
					case es.S:
						return t.payload || !1;
					case ys.b:
					case ys.n:
						return !!t.payload.poll;
					case es.A:
						return !1;
					case u.a:
						return Ns(t) === Ce.Jb.POST_CREATION && e;
					default:
						return e
				}
			};
			var aa = (e = !1, t) => {
				switch (t.type) {
					case es.W: {
						const {
							isPostAsMetaMod: e
						} = t.payload;
						return e || !1
					}
					case es.A:
						return !1;
					case u.a:
						return Ns(t) === Ce.Jb.POST_CREATION && e;
					case ys.b:
					case ys.n:
						return t.payload.isPostAsMetaMod;
					default:
						return e
				}
			};
			var na = (e = !1, t) => {
				switch (t.type) {
					case ys.b:
					case ys.n:
					case es.A:
						return !1;
					case Fr.n:
						return t.payload;
					case u.a:
						return Ns(t) === Ce.Jb.POST_CREATION && e;
					case Fr.g:
						return t.payload.isPublicLink;
					default:
						return e
				}
			};
			var ca = (e = !1, t) => {
				switch (t.type) {
					case es.T:
						return t.payload || !1;
					case es.A:
						return !1;
					case u.a:
						return Ns(t) === Ce.Jb.POST_CREATION && e;
					case Fr.g:
						return t.payload.isSpoiler || !1;
					case ys.b:
					case ys.n:
						return t.payload.isSpoiler;
					default:
						return e
				}
			};
			var oa = (e = "", t) => {
				switch (t.type) {
					case d.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case u.a:
					case es.i:
					case es.q:
					case es.A:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var da = (e = "", t) => {
				switch (t.type) {
					case d.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case u.a:
					case es.i:
					case es.q:
					case es.A:
					case d.h:
						return "";
					default:
						return e
				}
			};
			var ia = (e = null, t) => {
					switch (t.type) {
						case es.J:
						case es.K:
							return t.payload;
						case es.I:
						case u.a:
							return null;
						default:
							return e
					}
				},
				ua = r("./src/reddit/actions/polls.ts");
			var la = (e = null, t) => {
					switch (t.type) {
						case ua.a:
							return {
								...t.payload
							};
						case ys.b:
						case ys.n: {
							const e = t.payload;
							return e.poll ? {
								options: e.poll.options,
								duration: 864e5 * e.poll.duration
							} : null
						}
						case d.h:
						case es.A:
							return null;
						case u.a:
							return Ns(t) !== Ce.Jb.POST_CREATION ? null : e;
						default:
							return e
					}
				},
				pa = r("./src/reddit/components/ScheduledPost/SchedulePicker/helpers.ts"),
				ba = r("./src/reddit/helpers/scheduledPosts/index.ts");
			var fa = (e = null, t) => {
				var r, s, a, n;
				switch (t.type) {
					case es.W: {
						const {
							schedule: e
						} = t.payload;
						return e || null
					}
					case es.A:
					case Fr.g:
					case es.K:
						return null;
					case u.a:
						if (Ns(t) === Ce.Jb.POST_CREATION) {
							const c = null === (n = (null !== (a = null === (s = null === (r = t.payload) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.match.queryParams) && void 0 !== a ? a : {}).frequency) || void 0 === n ? void 0 : n.toUpperCase();
							if (c && Object(Gs.m)(c)) {
								const t = Object(pa.c)();
								return {
									...e,
									...t,
									frequencyOption: c,
									recurrenceInfo: {
										...pa.a,
										...null == e ? void 0 : e.recurrenceInfo,
										...Object(pa.b)(new Date(t.submitDate), c)
									}
								}
							}
							return e
						}
						return null;
					case ys.n: {
						const e = t.payload;
						return {
							submitDate: e.publishAt,
							timezoneName: e.clientTimezone,
							frequencyOption: null,
							recurrenceInfo: null
						}
					}
					case ys.b: {
						const e = t.payload;
						return {
							...Object(ba.h)(e)
						}
					}
					default:
						return e
				}
			};
			var ya = (e = !1, t) => {
				const {
					type: r,
					payload: s
				} = t;
				switch (r) {
					case es.U:
						return s || !1;
					case u.a:
						return Ns(t) === Ce.Jb.POST_CREATION && e;
					case ys.b:
					case ys.n:
					case Fr.g:
						return !1;
					default:
						return e
				}
			};
			var ma = (e = "", t) => {
				switch (t.type) {
					case es.g:
						return t.payload || "";
					case u.a:
						return Ns(t) !== Ce.Jb.POST_CREATION ? "" : e;
					default:
						return e
				}
			};
			var Ea = (e = null, t) => {
				switch (t.type) {
					case u.a:
						return Ns(t) !== Ce.Jb.POST_CREATION ? null : e;
					case es.A:
						return null;
					case ys.b:
					case ys.n:
						return t.payload.id;
					default:
						return e
				}
			};
			var ha = (e = !0, t) => {
				switch (t.type) {
					case es.A:
						return !0;
					case es.V:
						return t.payload;
					case u.a:
						return Ns(t) !== Ce.Jb.POST_CREATION || e;
					case Fr.g:
						return t.payload.sendReplies;
					case ys.b:
					case ys.n:
						return t.payload.isSendReplies;
					default:
						return e
				}
			};
			var _a = (e = null, t) => {
				switch (t.type) {
					case es.W: {
						const {
							stickyPosition: e
						} = t.payload;
						return e || null
					}
					case es.A:
					case Fr.g:
					case es.K:
						return null;
					case u.a:
						return Ns(t) === Ce.Jb.POST_CREATION ? e : null;
					case ys.b:
					case ys.n:
						return t.payload.sticky || null;
					default:
						return e
				}
			};
			const Oa = Ce.Rb.POST;
			var Ia = (e = Oa, t) => {
				switch (t.type) {
					case es.A:
						return Oa;
					case es.r:
						return Ce.Rb.CROSSPOST;
					case es.i:
						return t.payload.submissionType || Oa;
					case u.a: {
						if (Ns(t) !== Ce.Jb.POST_CREATION) return Oa;
						const r = ks(t);
						if (!r) return e;
						const {
							title: s = "",
							url: a,
							text: n = "",
							media: c = !1,
							selftext: o = !1
						} = r, d = s && !n && !o;
						return c ? Ce.Rb.MEDIA : void 0 !== a || d ? Ce.Rb.LINK_ONLY : n || o ? Ce.Rb.POST : e
					}
					case Fr.g: {
						const e = t.payload;
						return xs.a[e.kind]
					}
					case ys.b:
					case ys.n: {
						const e = t.payload;
						return e.poll ? Ce.Rb.POLL : e.url ? Ce.Rb.LINK_ONLY : Ce.Rb.POST
					}
					default:
						return e
				}
			};
			var ga = (e = null, t) => {
					switch (t.type) {
						case es.W: {
							const {
								suggestedSort: e
							} = t.payload;
							return e || null
						}
						case es.A:
						case Fr.g:
						case es.K:
							return null;
						case u.a:
							return Ns(t) === Ce.Jb.POST_CREATION ? e : null;
						case ys.b:
						case ys.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				Sa = r("./src/reddit/models/Poll/index.ts");
			const va = e => `Should ${e||"username"} become the top moderator?`,
				Da = e => e ? `Should we spin-off to r/${e}?` : "Should we spin-off to a new community?";
			var Ta = (e = "", t) => {
					switch (t.type) {
						case es.r:
							return t.payload.postTitle || "";
						case es.j:
							return t.payload || "";
						case es.z: {
							const {
								title: r
							} = t.payload;
							return e || (r || "")
						}
						case es.A:
							return "";
						case u.a: {
							if (Ns(t) !== Ce.Jb.POST_CREATION) return "";
							const r = ks(t);
							return r && r.title ? (e => e ? e.replace(/\+/g, " ") : "")(r.title) : e
						}
						case Fr.g:
							return t.payload.title;
						case es.q: {
							const {
								oldType: r,
								type: s
							} = t.payload;
							return s === Sa.a.ReplaceTopMod ? va("") : s === Sa.a.Spinoff ? Da("") : r === Sa.a.ReplaceTopMod || r === Sa.a.Spinoff ? "" : e
						}
						case d.c: {
							const {
								username: e
							} = t.payload;
							return va(e)
						}
						case d.b: {
							const {
								subredditName: e
							} = t.payload;
							return Da(e)
						}
						case es.i: {
							const {
								extra: r
							} = t.payload;
							return !r || r.govType !== Sa.a.ReplaceTopMod && r.govType !== Sa.a.Spinoff ? e : ""
						}
						case ys.b:
						case ys.n:
							return t.payload.title;
						default:
							return e
					}
				},
				wa = Object(v.c)({
					body: Qs,
					eventSchedule: Js,
					flair: Xs,
					govType: Ys,
					isChatPost: Zs,
					isContestMode: ea,
					isNSFW: ta,
					isOC: ra,
					isPostAsMetaMod: aa,
					isPoll: sa,
					isPublicLink: na,
					isSpoiler: ca,
					newSubreddit: oa,
					newTopMod: da,
					nextSubreddit: ia,
					polls: la,
					postSchedule: fa,
					postToTwitter: ya,
					recaptcha: ma,
					scheduledPostId: Ea,
					sendReplies: ha,
					stickyPosition: _a,
					submissionType: Ia,
					suggestedSort: ga,
					title: Ta
				});
			var ja = (e = null, t) => {
				switch (t.type) {
					case u.a: {
						if (Ns(t) !== Ce.Jb.POST_CREATION) return null;
						const r = ks(t);
						return r && r.text && (e => e ? e.replace(/\+/g, " ") : "")(r.text) ? Ms.h.MARKDOWN : e
					}
					case es.D: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case es.E:
						return null;
					case es.M: {
						const {
							editorMode: e
						} = t.payload;
						return e
					}
					case ys.b:
					case ys.n:
						return t.payload.contentType === Gs.a.RTJSON ? Ms.h.RICH_TEXT : Ms.h.MARKDOWN;
					default:
						return e
				}
			};
			const Aa = {
				title: [],
				body: [],
				link: [],
				flair: []
			};
			var Ra = (e = Aa, t) => {
				switch (t.type) {
					case es.c:
					case es.d:
					case es.e:
						return e[Ce.ub.BODY] ? {
							...e,
							[Ce.ub.BODY]: []
						} : e;
					case es.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return e[Ce.ub.BODY] && r ? {
							...e,
							[Ce.ub.BODY]: []
						} : e
					}
					case es.j:
						return e[Ce.ub.TITLE] ? {
							...e,
							[Ce.ub.TITLE]: []
						} : e;
					case es.H: {
						const r = t.payload;
						return {
							...e,
							[r]: []
						}
					}
					case es.n: {
						const r = t.payload;
						return r ? {
							...e,
							[r]: []
						} : Aa
					}
					case es.G:
					case es.F:
						return ((e, t) => {
							const r = (t.fields || []).filter(({
								field: e
							}) => Object(Ms.u)(e));
							if (!r.length) return e;
							const s = r.reduce((e, t) => (e[t.field] || (e[t.field] = []), e[t.field].push(t.msg), e), {});
							return {
								...e,
								...s
							}
						})(e, t.payload);
					case u.a:
						return Ns(t) !== Ce.Jb.POST_CREATION ? Aa : e;
					default:
						return e
				}
			};
			var Ca = (e = !1, t) => {
				switch (t.type) {
					case es.b:
					case es.c:
					case es.d:
					case es.e:
					case es.f:
					case es.j:
					case es.i:
					case es.Q:
					case es.R:
					case es.T:
					case Fr.n:
					case es.V:
					case es.W:
						return !0;
					case es.h: {
						const {
							isContentChanged: r
						} = t.payload;
						return !!r || e
					}
					case es.L:
					case ys.h:
						return !1;
					case es.N:
						return t.payload;
					case u.a:
						return Ns(t) === Ce.Jb.POST_CREATION && e;
					case es.A:
					case Fr.l:
					case Fr.g:
						return !1;
					default:
						return e
				}
			};
			const Pa = Ms.q.Post;
			var La = (e = Pa, t) => {
					switch (t.type) {
						case es.w:
							return Ms.q.Post;
						case es.B:
							return t.payload;
						case Fr.j:
							return Ms.q.Draft;
						case u.a:
							return Ns(t) !== Ce.Jb.POST_CREATION ? Pa : e;
						default:
							return e
					}
				},
				Na = Object(v.c)({
					editorMode: ja,
					fieldValidation: Ra,
					isChanged: Ca,
					submitMode: La
				});
			var ka = (e = "", t) => {
				switch (t.type) {
					case es.D:
						return t.payload.editorMode === Ms.h.MARKDOWN ? t.payload.postContent || "" : e;
					case es.E:
						return "";
					case es.M:
						return t.payload.editorMode === Ms.h.MARKDOWN ? t.payload.content || "" : e;
					default:
						return e
				}
			};
			const xa = Vs.a.createInitial;
			var Ua = (e = xa(), t) => {
					switch (t.type) {
						case es.E:
							return Vs.a.createInitial();
						case es.D: {
							const r = t.payload;
							return r.editorMode === Ms.h.RICH_TEXT && "object" == typeof r.postContent ? Vs.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case es.M: {
							const r = t.payload;
							return r.editorMode === Ms.h.RICH_TEXT && r.editorKey === Ms.g.POST_EDITING ? Vs.a.createInitial(r.content) : e
						}
						default:
							return e
					}
				},
				Ma = Object(v.c)({
					markdown: ka,
					rte: Ua
				});
			var Ga = (e = null, t) => {
					switch (t.type) {
						case es.D: {
							const {
								postId: e
							} = t.payload;
							return e
						}
						case es.E:
							return null;
						default:
							return e
					}
				},
				Fa = Object(v.c)({
					draft: Ma,
					postId: Ga
				}),
				Ba = Object(v.c)({
					api: js,
					drafts: Ls,
					formData: wa,
					formState: Na,
					postEditing: Fa
				}),
				Ha = r("./src/reddit/actions/dashboard/constants.ts");
			const Va = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var qa = (e = Va, t) => {
				switch (t.type) {
					case Ha.a:
						return {
							...e, selectedComponent: t.payload
						};
					case Ha.d: {
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
					case Ha.c: {
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
			var Ka = (e = null, t) => {
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
			var Wa = (e = !1, t) => {
				switch (t.type) {
					case Ie.c:
						return !1;
					case Ie.b:
						return !0;
					default:
						return e
				}
			};
			var $a = (e = !1, t) => {
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
				Qa = Object(v.c)({
					error: Ka,
					loaded: Wa,
					pending: $a
				}),
				Ja = Object(v.c)({
					list: Qa
				}),
				za = r("./node_modules/lodash/isEmpty.js"),
				Xa = r.n(za);
			const Ya = {};
			var Za = (e = Ya, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							return Xa()(r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				en = r("./node_modules/lodash/forOwn.js"),
				tn = r.n(en),
				rn = r("./src/reddit/helpers/name/index.ts");
			const sn = {};
			var an = (e = sn, t) => {
					switch (t.type) {
						case Ie.b: {
							const {
								discoveryUnits: r
							} = t.payload;
							if (Xa()(r)) return e;
							const s = {};
							return tn()(r, e => {
								s[Object(rn.g)(e.unitName)] = e.id
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				nn = Object(v.c)({
					api: Ja,
					models: Za,
					nameToId: an
				}),
				cn = r("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const on = [];
			var dn = (e = on, t) => {
					switch (t.type) {
						case cn.a: {
							const {
								subredditId: r
							} = t.payload;
							return [...e, r]
						}
						default:
							return e
					}
				},
				un = r("./src/reddit/actions/economics/banners/constants.ts");
			const ln = {
				dismissedBanners: {}
			};
			var pn = (e = ln, t) => {
					switch (t.type) {
						case un.c: {
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
						case un.d: {
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
						case un.a:
						case un.b: {
							const {
								subredditId: r,
								bannerType: s
							} = t.payload, a = e.dismissedBanners[r] || {}, n = t.type === un.a;
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
				bn = r("./src/reddit/models/Badge/managementPage.ts");
			const fn = {
				badgeType: bn.a.Cosmetic,
				view: bn.c.Gallery
			};
			var yn = (e = fn, t) => {
				switch (t.type) {
					case o.c: {
						const {
							badge: r,
							initialView: s
						} = t.payload;
						return r || s ? {
							...e,
							badgeType: r ? Object(bn.d)(r.placement) : e.badgeType,
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
						return fn;
					default:
						return e
				}
			};
			var mn = (e = null, t) => {
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
				En = r("./src/reddit/actions/economics/powerups/constants.ts");

			function hn(e, t) {
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

			function _n(e) {
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
						emotes: a.map(e => hn(e, t))
					}
				}), r
			}
			const On = {};
			var In = (e = On, t) => {
				switch (t.type) {
					case o.e: {
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
					case ee.nb: {
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
					case En.b: {
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
										[r.name]: hn(r, t)
									}
								})
							}
						}(e, r, s)
					}
					default:
						return e
				}
			};
			const gn = {};
			var Sn = (e = gn, t) => {
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
				vn = r("./src/reddit/actions/economics/me/constants.ts");
			const Dn = {
				fetched: !1,
				data: {}
			};
			var Tn = (e = Dn, t) => {
					switch (t.type) {
						case vn.a:
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
				wn = r("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const jn = {
				fetched: !1,
				data: null
			};
			var An = (e = jn, t) => {
					switch (t.type) {
						case vn.b:
							return {
								fetched: !0, data: e.data
							};
						case vn.c:
							return {
								fetched: !0, data: t.payload
							};
						default:
							return e
					}
				},
				Rn = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				Cn = Object(v.c)({
					banners: pn,
					currentBadgeManagementScreen: yn,
					currentModalArgs: mn,
					emotes: In,
					gifs: Sn,
					me: Tn,
					paymentSystems: wn.b,
					pointsCopy: An,
					subredditPremium: Rn.b
				}),
				Pn = r("./src/reddit/actions/emoji.ts");
			const Ln = {};
			var Nn = (e = Ln, t) => {
					switch (t.type) {
						case Pn.h: {
							const r = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Pn.g:
						case Pn.f: {
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
				kn = Object(v.c)({
					pending: Nn
				}),
				xn = Object(v.c)({
					list: kn
				});
			const Un = {};
			var Mn = (e = Un, t) => {
					switch (t.type) {
						case Pn.f:
						case Pn.c:
							return e;
						case Pn.g: {
							const {
								data: e
							} = t.payload;
							return e
						}
						case Pn.d: {
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
						case Pn.i: {
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
						case Pn.e: {
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
				Gn = Object(v.c)({
					api: xn,
					models: Mn
				}),
				Fn = r("./src/reddit/actions/experiments.ts");
			const Bn = /^experiment_(.*)$/i,
				Hn = e => {
					const t = e.match(Bn);
					if (null !== t) return t[1]
				},
				Vn = {};
			var qn = (e = Vn, t) => {
					switch (t.type) {
						case u.a: {
							const r = ks(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = Hn(e);
								t && (s[t.toLowerCase()] = r[e] || "")
							}
							return Xa()(s) ? e : {
								...e,
								...s
							}
						}
						case Fn.b: {
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
				Kn = r("./src/reddit/actions/externalAccount.ts");
			const Wn = {};
			var $n = (e = Wn, t) => {
				switch (t.type) {
					case Kn.e:
					case Kn.f: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Kn.d: {
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
			const Qn = {};
			var Jn = (e = Qn, t) => {
					switch (t.type) {
						case Kn.e: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Kn.f:
						case Kn.d: {
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
				zn = Object(v.c)({
					error: $n,
					pending: Jn
				});
			const Xn = {};
			var Yn = (e = Xn, t) => {
				switch (t.type) {
					case Kn.l:
					case Kn.k: {
						const {
							provider: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Kn.j: {
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
			const Zn = {};
			var ec = (e = Zn, t) => {
					switch (t.type) {
						case Kn.b: {
							const {
								provider: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Kn.c:
						case Kn.a: {
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
				tc = Object(v.c)({
					error: Yn,
					pending: ec
				});
			const rc = {};
			var sc = (e = rc, t) => {
				switch (t.type) {
					case Kn.i:
					case Kn.h: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Kn.g: {
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
			const ac = {};
			var nc = (e = ac, t) => {
				switch (t.type) {
					case Kn.h: {
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
			const cc = {};
			var oc = (e = cc, t) => {
					switch (t.type) {
						case Kn.i: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Kn.h:
						case Kn.g: {
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
				dc = Object(v.c)({
					error: sc,
					fetched: nc,
					pending: oc
				});
			const ic = {};
			var uc = (e = ic, t) => {
				switch (t.type) {
					case Kn.l:
					case Kn.k: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case Kn.j: {
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
			const lc = {};
			var pc = (e = lc, t) => {
					switch (t.type) {
						case Kn.l: {
							const {
								username: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case Kn.k:
						case Kn.j: {
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
				bc = Object(v.c)({
					error: uc,
					pending: pc
				}),
				fc = Object(v.c)({
					connect: zn,
					disconnect: tc,
					user: bc,
					subreddit: dc
				});
			const yc = {};
			var mc = (e = yc, t) => {
				switch (t.type) {
					case Kn.h: {
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
			const Ec = {};
			var hc = (e = Ec, t) => {
					switch (t.type) {
						case Kn.k: {
							const {
								username: r,
								accountsData: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case Kn.c: {
							const {
								username: r,
								provider: s
							} = t.payload, a = e[r];
							return a && a[s] ? {
								...e,
								[r]: Rs()(a, s)
							} : e
						}
						default:
							return e
					}
				},
				_c = Object(v.c)({
					api: fc,
					user: hc,
					subreddit: mc
				}),
				Oc = r("./src/reddit/featureFlags/index.ts");
			const Ic = new Set(["0", "disabled", "false", "off", ""]);
			var gc = e => !Ic.has(e.toLowerCase());
			const Sc = Oc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
				vc = Oc.a.reduce((e, t) => (e[t] = null, e), {});
			var Dc = (e = vc, t) => {
					switch (t.type) {
						case u.a: {
							const r = ks(t);
							if (void 0 !== r) {
								const t = {};
								for (const e in r) {
									const s = Object(Oc.g)(e);
									if (s) {
										const a = Sc[s.toLowerCase()];
										if (a) {
											const s = r[e],
												n = "string" != typeof s || gc(s);
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
						case Oc.b: {
							const {
								featureName: r,
								currentValue: s
							} = t.payload;
							return s === e[r] ? e : {
								...e,
								[r]: s
							}
						}
						case Oc.c: {
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
				Tc = Object(v.c)({
					overrides: Dc
				}),
				wc = r("./src/reddit/actions/focusedVerticals/constants.ts");
			const jc = {
				focusedVerticalGqlError: null
			};
			var Ac = (e = jc, t) => {
				switch (t.type) {
					case wc.h:
					case wc.g:
					case wc.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case wc.e:
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
			var Cc = (e = Rc, t) => {
					switch (t.type) {
						case wc.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case wc.e:
						case wc.g:
						case wc.c:
							return {
								...e, focusedVerticalGqlPending: !1
							};
						default:
							return e
					}
				},
				Pc = Object(v.c)({
					error: Ac,
					pending: Cc
				});
			var Lc = (e = "", t) => {
				switch (t.type) {
					case wc.g:
					case wc.c:
						return t.payload.category || "";
					default:
						return e
				}
			};
			const Nc = {
				dismissed: !0
			};
			var kc = (e = Nc, t) => {
				switch (t.type) {
					case wc.j:
						return {
							dismissed: !1
						};
					case wc.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var xc = (e = null, t) => {
				switch (t.type) {
					case wc.g:
					case wc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var Uc = (e = null, t) => {
				switch (t.type) {
					case wc.g:
					case wc.c:
					case wc.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Mc = (e = null, t) => {
					switch (t.type) {
						case wc.g:
						case wc.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Gc = Object(v.c)({
					api: Pc,
					components: kc,
					interactedSubredditIds: xc,
					recommendedSubredditIds: Mc,
					category: Lc,
					lastLoadedEnv: Uc
				});
			Object(Re.a)("FONTS_FONT_FILES_PARSED");
			const Fc = [];
			var Bc = (e = Fc, t) => {
				switch (t.type) {
					case "FONTS_FONT_FILES_PARSED":
						return t.payload.fonts;
					default:
						return e
				}
			};
			var Hc = (e = null, t) => {
				switch (t.type) {
					case ee.q:
						return t.payload;
					case ee.f:
					case u.a:
					case ee.K:
					case ee.t:
						return null;
					default:
						return e
				}
			};
			var Vc = (e = !1, t) => {
				switch (t.type) {
					case ee.f:
					case u.a:
					case ee.t:
					case ee.q:
						return !1;
					case ee.r:
						return !0;
					default:
						return e
				}
			};
			var qc = (e = !1, t) => {
					switch (t.type) {
						case ee.r:
						case ee.f:
						case u.a:
						case ee.t:
						case ee.q:
							return !1;
						case ee.v:
							return !0;
						default:
							return e
					}
				},
				Kc = Object(v.c)({
					error: Hc,
					pending: Vc,
					showLoader: qc
				});
			var Wc = (e = null, t) => {
				switch (t.type) {
					case ee.L:
					case ee.K: {
						if (!t.payload) return null;
						const {
							correlationId: e
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
			var $c = (e = null, t) => {
				switch (t.type) {
					case ee.u: {
						const {
							id: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Qc = (e = null, t) => {
				const r = t.payload;
				switch (t.type) {
					case ee.J:
					case ee.K:
						return r.thingId;
					case ee.t:
					case u.a:
					case ee.f:
						return null;
					default:
						return e
				}
			};
			var Jc = (e = !1, t) => {
				switch (t.type) {
					case ee.s:
						return t.payload;
					case ee.K:
						return !1;
					default:
						return e
				}
			};
			var zc = (e = !1, t) => {
				switch (t.type) {
					case ee.J:
						return !0;
					default:
						return e
				}
			};
			var Xc = (e = "", t) => {
				switch (t.type) {
					case ee.w:
						return t.payload;
					case ee.K:
						return "";
					default:
						return e
				}
			};
			const Yc = Oe.n;
			var Zc = (e = Yc, t) => {
					switch (t.type) {
						case ee.kb:
							return t.payload;
						case ee.K: {
							const {
								award: e
							} = t.payload;
							return e || Yc
						}
						default:
							return e
					}
				},
				eo = Object(v.c)({
					api: Kc,
					correlationId: Wc,
					gildModalThingId: Qc,
					isAnonymous: Jc,
					isIframed: zc,
					message: Xc,
					gildedThing: $c,
					selectedAward: Zc
				});
			var to = (e = null, t) => {
				switch (t.type) {
					case ee.x:
						return t.payload.error && t.payload.error.fields && t.payload.error.fields[0] && t.payload.error.fields[0].msg || "An unknown error occurred";
					case ee.g:
					case u.a:
					case ee.L:
					case ee.C:
						return null;
					default:
						return e
				}
			};
			var ro = (e = !1, t) => {
					switch (t.type) {
						case ee.g:
						case u.a:
						case ee.C:
						case ee.x:
							return !1;
						case ee.y:
							return !0;
						default:
							return e
					}
				},
				so = Object(v.c)({
					error: to,
					pending: ro
				});
			var ao = (e = "", t) => {
					switch (t.type) {
						case ee.L: {
							const {
								profileName: e
							} = t.payload;
							return e
						}
						case u.a:
						case ee.g:
						case ee.C:
							return "";
						default:
							return e
					}
				},
				no = Object(v.c)({
					api: so,
					givePremiumModalAccountName: ao
				}),
				co = r("./src/reddit/actions/header.ts"),
				oo = r("./src/reddit/actions/overlayEvents.ts");
			var io = (e = !1, t) => {
					switch (t.type) {
						case co.a:
							return !1;
						case co.b:
							return !0;
						case co.c:
							return !e;
						case oo.b:
							return !1;
						default:
							return e
					}
				},
				uo = Object(v.c)({
					isSubscriptionsDropdownOpen: io
				});
			var lo = (e = !1, t) => {
					switch (t.type) {
						case "HTML_RESPONSE_STREAMING_STARTED":
							return !0;
						case "HTML_RESPONSE_STREAMING_ENDED":
							return !1;
						default:
							return e
					}
				},
				po = r("./src/reddit/actions/imageUploads.ts");
			const bo = {};
			var fo = (e = bo, t) => {
					switch (t.type) {
						case po.d: {
							const r = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case po.c:
						case po.e:
						case po.b: {
							const r = t.payload;
							return e[r.id] ? {
								...e,
								[r.id]: r
							} : e
						}
						case po.a: {
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
				yo = r("./src/reddit/actions/interceptedAction.ts");
			var mo = (e = null, t) => {
					switch (t.type) {
						case yo.a:
							return t.payload;
						case yo.b:
							return null;
						default:
							return e
					}
				},
				Eo = r("./src/reddit/actions/changeUsername.ts");
			var ho = (e = !0, t) => {
					switch (t.type) {
						case Eo.a:
							return !1;
						case Eo.b:
							return !0;
						default:
							return e
					}
				},
				_o = r("./src/reddit/actions/emailVerificationTooltip.ts");
			var Oo = (e = !1, t) => {
					switch (t.type) {
						case _o.a:
							return !e;
						default:
							return e
					}
				},
				Io = r("./src/reddit/actions/moderatingSubreddits.ts");
			var go = (e = !1, t) => {
					switch (t.type) {
						case Io.a: {
							if (e) return e;
							const r = t.payload;
							return Object.keys(r).some(e => !0 === r[e].posts)
						}
						case K.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case we.PAGE_LOADED: {
							if (e) return e;
							const {
								payload: r
							} = t;
							return r.subredditPermissions && r.subreddits ? !!r.subredditPermissions.posts : e
						}
						case G.i:
						case G.f:
						case G.m:
						case G.p:
						case G.v: {
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
				So = r("./src/reddit/actions/jsApi.ts");
			const vo = [];
			var Do = (e = vo, t) => {
					switch (t.type) {
						case So.a: {
							const r = t.payload;
							return -1 === e.indexOf(r) && (e = [...e, r]).sort(), e
						}
						default:
							return e
					}
				},
				To = r("./src/reddit/actions/leaderboard/constants.ts");
			const wo = {};
			var jo = (e = wo, t) => {
				switch (t.type) {
					case To.a: {
						const {
							subredditId: r,
							data: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case To.b:
					case To.c: {
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
			const Ao = {};
			var Ro = (e = Ao, t) => {
					switch (t.type) {
						case To.a:
						case To.c: {
							const {
								subredditId: r
							} = t.payload, {
								[r]: s,
								...a
							} = e;
							return a
						}
						case To.b: {
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
				Co = Object(v.c)({
					error: jo,
					pending: Ro
				});
			const Po = {};
			var Lo = (e = Po, t) => {
					switch (t.type) {
						case To.c: {
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
				No = Object(v.c)({
					api: Co,
					models: Lo
				});
			var ko = (e = "", t) => {
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
			const xo = {};
			var Uo = (e = xo, t) => {
				switch (t.type) {
					case Pe.d:
					case Pe.e:
					case q.SEARCH_PENDING:
					case q.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							type: s
						} = t.payload;
						return -1 === s.indexOf(Ce.Vb.Subreddits) && -1 === s.indexOf(Ce.Vb.Users) ? e : {
							...e,
							[r]: null
						}
					}
					case Pe.c:
					case q.SEARCH_FAILED: {
						const {
							key: r,
							error: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ce.Vb.Subreddits) && -1 === a.indexOf(Ce.Vb.Users) ? e : {
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
			const Mo = {};
			var Go = (e = Mo, t) => {
					switch (t.type) {
						case Pe.d:
						case q.SEARCH_PENDING: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Vb.Subreddits) && -1 === s.indexOf(Ce.Vb.Users) ? e : {
								...e,
								[r]: !0
							}
						}
						case Pe.e:
						case Pe.c:
						case q.SEARCH_RESULTS_RECEIVED:
						case q.SEARCH_FAILED: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Vb.Subreddits) && -1 === s.indexOf(Ce.Vb.Users) ? e : {
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
				Fo = Object(v.c)({
					error: Uo,
					pending: Go
				});
			const Bo = {};
			var Ho = (e = Bo, t) => {
				switch (t.type) {
					case Pe.e: {
						const {
							fetchedToken: r,
							key: s,
							type: a
						} = t.payload;
						if (-1 === a.indexOf(Ce.Vb.Subreddits) && -1 === a.indexOf(Ce.Vb.Users)) return e;
						const n = e[s];
						return {
							...e,
							[s]: {
								...n,
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
			const Vo = {};
			var qo = (e = Vo, t) => {
				switch (t.type) {
					case Pe.e: {
						const {
							key: r,
							listingOrder: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ce.Vb.Subreddits) && -1 === a.indexOf(Ce.Vb.Users) ? e : {
							...e,
							[r]: e[r].concat(s)
						}
					}
					case q.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							listingOrder: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ce.Vb.Subreddits) && -1 === a.indexOf(Ce.Vb.Users) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Ko = {};
			var Wo = (e = Ko, t) => {
					switch (t.type) {
						case Pe.e:
						case q.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								tokens: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Ce.Vb.Subreddits) && -1 === a.indexOf(Ce.Vb.Users) ? e : s.listings ? {
								...e,
								[r]: {
									token: s.listings
								}
							} : Object(Gt.a)(e, r)
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
				$o = Object(v.c)({
					api: Fo,
					identifiers: qo,
					fetchedTokens: Ho,
					loadMore: Wo
				}),
				Qo = r("./src/reddit/actions/eventPosts/constants.ts"),
				Jo = r("./src/reddit/actions/otherDiscussions/constants.ts"),
				zo = r("./src/reddit/actions/pages/topic.ts");
			const Xo = {};
			var Yo = (e = Xo, t) => {
					switch (t.type) {
						case ge.c:
						case ge.b:
						case Te.c:
						case Te.b:
						case K.SUBREDDIT_PENDING:
						case K.SUBREDDIT_LOADED:
						case ge.g:
						case ge.f:
						case De.e:
						case De.f:
						case De.i:
						case De.h:
						case ve.s:
						case ve.r:
						case Jo.b:
						case Jo.c:
						case H.PROFILE_POSTS_PENDING:
						case H.PROFILE_POSTS_LOADED:
						case H.MORE_POSTS_PENDING:
						case H.MORE_POSTS_LOADED:
						case W.f:
						case W.e:
						case je.f:
						case je.e:
						case $.j:
						case zo.TOPIC_DATA_PENDING:
						case zo.TOPIC_DATA_LOADED:
						case zo.MORE_POSTS_PENDING:
						case zo.MORE_POSTS_LOADED:
						case $.i:
						case Qo.e:
						case Qo.c:
						case Qo.d: {
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
						case Pe.d:
						case Pe.e: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Vb.Posts) ? e : {
								...e,
								[r]: null
							}
						}
						case ge.a:
						case Te.a:
						case K.SUBREDDIT_FAILED:
						case ge.e:
						case De.g:
						case ve.q:
						case Jo.a:
						case $.h:
						case W.d:
						case je.d:
						case H.PROFILE_POSTS_FAILED:
						case H.MORE_POSTS_FAILED:
						case zo.TOPIC_DATA_FAILED:
						case zo.MORE_POSTS_FAILED:
						case Qo.b: {
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
						case Pe.c: {
							const {
								error: r,
								key: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Ce.Vb.Posts) ? e : {
								...e,
								[s]: r
							}
						}
						default:
							return e
					}
				},
				Zo = r("./src/reddit/actions/linkedPosts/constants.ts"),
				ed = r("./src/reddit/actions/subreddit/constants.ts");
			const td = {};
			var rd = (e = td, t) => {
					switch (t.type) {
						case ge.c:
						case Te.c:
						case H.PROFILE_POSTS_PENDING:
						case je.f:
						case K.SUBREDDIT_PENDING:
						case ge.g:
						case De.f:
						case De.i:
						case ve.s:
						case Jo.c:
						case W.f:
						case H.MORE_POSTS_PENDING:
						case $.j:
						case zo.MORE_POSTS_PENDING:
						case Qo.e: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case q.SEARCH_PENDING:
						case Pe.d: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Vb.Posts) ? e : {
								...e,
								[r]: !0
							}
						}
						case ge.b:
						case ge.a:
						case Te.a:
						case Te.b:
						case je.d:
						case je.e:
						case H.PROFILE_POSTS_FAILED:
						case H.PROFILE_POSTS_LOADED:
						case K.SUBREDDIT_LOADED:
						case K.SUBREDDIT_FAILED:
						case ge.f:
						case ge.e:
						case Zo.b:
						case Zo.c:
						case De.e:
						case De.d:
						case De.h:
						case De.g:
						case ve.r:
						case ve.q:
						case W.d:
						case W.e:
						case H.MORE_POSTS_FAILED:
						case H.MORE_POSTS_LOADED:
						case ed.j:
						case Jo.b:
						case Jo.a:
						case $.i:
						case $.h:
						case zo.MORE_POSTS_LOADED:
						case zo.MORE_POSTS_FAILED:
						case Qo.c:
						case Qo.b:
						case Qo.d: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case ed.r: {
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
						case Pe.e:
						case Pe.c: {
							const {
								key: r,
								type: s
							} = t.payload;
							return -1 === s.indexOf(Ce.Vb.Posts) ? e : {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				sd = Object(v.c)({
					error: Yo,
					pending: rd
				}),
				ad = r("./src/reddit/actions/postList.ts"),
				nd = r("./node_modules/lodash/omitBy.js"),
				cd = r.n(nd);

			function od(e, t) {
				return t = t.toLowerCase(), cd()(e, (e, r) => r === t || r.startsWith(`${t}--[`))
			}
			const dd = {};
			var id = (e = dd, t) => {
				switch (t.type) {
					case ad.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case ad.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Rs()(e, [r]) : e
					}
					case K.SUBREDDIT_INVALIDATE_LISTING:
						return od(e, t.payload);
					default:
						return e
				}
			};
			const ud = {};
			var ld = (e = ud, t) => {
					switch (t.type) {
						case De.e:
						case ge.b:
						case Te.b:
						case K.SUBREDDIT_LOADED:
						case H.PROFILE_POSTS_LOADED:
						case zo.TOPIC_DATA_LOADED: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: {}
							}
						}
						case ge.f:
						case De.h:
						case ve.r:
						case W.e:
						case H.MORE_POSTS_LOADED:
						case $.i:
						case zo.MORE_POSTS_LOADED: {
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
						case Pe.e: {
							const {
								fetchedToken: r,
								key: s,
								type: a
							} = t.payload;
							if (a.indexOf(Ce.Vb.Posts) > -1) {
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
							return od(e, t.payload);
						default:
							return e
					}
				},
				pd = r("./src/reddit/actions/post.ts");
			const bd = {};
			var fd = (e = bd, t) => {
					switch (t.type) {
						case ge.c:
						case De.f:
						case Te.c:
						case H.PROFILE_POSTS_PENDING:
						case K.SUBREDDIT_PENDING:
						case je.f:
						case H.PROFILE_POSTS_PENDING:
						case zo.TOPIC_DATA_PENDING: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: []
							}
						}
						case Ie.e:
						case Zo.c:
						case De.e:
						case ge.b:
						case Te.b:
						case K.SUBREDDIT_LOADED:
						case ed.j:
						case Jo.b:
						case je.e:
						case H.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case zo.TOPIC_DATA_LOADED:
						case Qo.c: {
							const {
								key: r,
								postIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case ed.r: {
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
						case ge.f:
						case De.h:
						case ve.r:
						case H.MORE_POSTS_LOADED:
						case W.e:
						case $.i:
						case zo.MORE_POSTS_LOADED:
						case Qo.d: {
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
								type: a
							} = t.payload;
							return -1 === a.indexOf(Ce.Vb.Posts) ? e : {
								...e,
								[r]: s
							}
						}
						case Pe.e: {
							const {
								key: r,
								postOrder: s,
								type: a
							} = t.payload;
							return -1 === a.indexOf(Ce.Vb.Posts) ? e : {
								...e,
								[r]: e[r].concat(s)
							}
						}
						case pd.p: {
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
						case K.SUBREDDIT_INVALIDATE_LISTING:
							return od(e, t.payload);
						default:
							return e
					}
				},
				yd = r("./src/lib/makeListingKey/index.ts");
			const md = {};
			var Ed = (e = md, t) => {
				switch (t.type) {
					case K.SUBREDDIT_LOADED: {
						const {
							key: r,
							listingSort: s
						} = t.payload;
						return s && !Object(yd.b)(r) ? {
							...e,
							[r]: {
								sort: s,
								hasChanged: !1
							}
						} : e
					}
					case Ar.a:
					case Ar.p: {
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
			const hd = {};
			var _d = (e = hd, t) => {
				switch (t.type) {
					case ge.b:
					case Te.b:
					case K.SUBREDDIT_LOADED:
					case je.e:
					case H.PROFILE_POSTS_LOADED:
					case ge.f:
					case De.e:
					case De.h:
					case ve.r:
					case W.e:
					case H.MORE_POSTS_LOADED:
					case $.i:
					case zo.TOPIC_DATA_LOADED:
					case zo.MORE_POSTS_LOADED: {
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
						} : Object(Gt.a)(e, r)
					}
					case Pe.e:
					case q.SEARCH_RESULTS_RECEIVED: {
						const {
							key: r,
							tokens: s,
							type: a
						} = t.payload;
						return -1 === a.indexOf(Ce.Vb.Posts) ? e : s.posts ? {
							...e,
							[r]: {
								token: s.posts
							}
						} : Object(Gt.a)(e, r)
					}
					case K.SUBREDDIT_INVALIDATE_LISTING:
						return od(e, t.payload);
					default:
						return e
				}
			};
			const Od = {};
			var Id = (e = Od, t) => {
					switch (t.type) {
						case Qo.c:
						case Qo.d: {
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
				gd = Object(v.c)({
					api: sd,
					endMarkers: id,
					fetchedTokens: ld,
					ids: fd,
					listingSort: Ed,
					loadMore: _d,
					pageInfo: Id
				}),
				Sd = Object(v.c)({
					activeKey: ko,
					listingOrder: $o,
					postOrder: gd
				});
			var vd = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return Xa()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var Dd = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return Xa()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Td = (e = !1, t) => {
				switch (t.type) {
					case ge.b:
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
				jd = Object(v.c)({
					announcements: vd,
					featured: Dd,
					isFrontpageLoaded: Td,
					shouldShowAnnouncements: wd
				}),
				Ad = r("./src/reddit/actions/media.ts");
			const Rd = {};
			var Cd = (e = Rd, t) => {
				switch (t.type) {
					case Ad.b: {
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
			const Pd = {};
			var Ld = (e = Pd, t) => {
					switch (t.type) {
						case Ad.e: {
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
				Nd = Object(v.c)({
					currentSlideIndex: Cd,
					isGalleryTileLayout: Ld
				});
			var kd = (e = !0, t) => {
				switch (t.type) {
					case Ad.c:
						return t.payload;
					default:
						return e
				}
			};
			var xd = (e = .5, t) => {
					switch (t.type) {
						case Ad.d:
							return t.payload;
						default:
							return e
					}
				},
				Ud = Object(v.c)({
					isMuted: kd,
					volume: xd
				}),
				Md = r("./src/reddit/actions/meta.ts");
			const Gd = {
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
			var Fd = (e = Gd, t) => {
					switch (t.type) {
						case Md.b:
							return t.payload;
						case Md.a:
							return {
								...e, ...t.payload
							};
						case Md.c:
							return {
								...e, locale: t.payload
							};
						default:
							return e
					}
				},
				Bd = r("./src/reddit/actions/subredditModeration/constants.ts");
			const Hd = {};
			var Vd = (e = Hd, t) => {
				switch (t.type) {
					case K.SUBREDDIT_LOADED:
					case F.b:
					case F.f:
					case we.PAGE_LOADED: {
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
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v: {
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
					case $.f:
					case De.e:
					case G.k: {
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
					case Bd.Z: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Gt.a)(e, r)
					}
					case Bd.S: {
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
			var qd = (e = null, t) => {
				switch (t.type) {
					case pd.g:
						return t.payload;
					case pd.f:
						return null
				}
				return e
			};
			var Kd = (e = null, t) => {
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
			var Wd = (e = !1, t) => {
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
				$d = Object(v.c)({
					error: Kd,
					pending: Wd
				});
			const Qd = [];
			var Jd = (e = Qd, t) => {
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
				zd = Object(v.c)({
					api: $d,
					names: Jd
				}),
				Xd = Object(v.c)({
					filteredSubreddits: zd
				}),
				Yd = r("./src/reddit/actions/modMode.ts");
			var Zd = (e = !0, t) => {
				switch (t.type) {
					case Yd.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const ei = {};
			var ti = (e = ei, t) => {
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
			const ri = {};
			var si = (e = ri, t) => {
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
				ai = Object(v.c)({
					error: ti,
					pending: si
				}),
				ni = r("./src/reddit/models/Comment/index.ts");
			const ci = {};
			var oi = (e = ci, t) => {
					switch (t.type) {
						case U.b:
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
											prev: Object(ni.h)(s),
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
						case x.w:
						case F.b:
						case F.f:
							return {
								...e, ...t.payload.moreComments
							};
						default:
							return e
					}
				},
				di = Object(v.c)({
					api: ai,
					models: oi
				});
			var ii = (e = null, t) => {
				switch (t.type) {
					case ve.b:
					case ve.c:
						return null;
					case ve.a:
						return t.payload;
					default:
						return e
				}
			};
			var ui = (e = !1, t) => {
				switch (t.type) {
					case ve.a:
					case ve.c:
						return !0;
					case ve.b:
						return !1;
					default:
						return e
				}
			};
			var li = (e = null, t) => {
					switch (t.type) {
						case Te.b:
						case ve.a:
						case ve.c:
							return null;
						case ve.b: {
							const {
								name: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				pi = Object(v.c)({
					error: ii,
					fetched: ui,
					pending: li
				});
			var bi = (e = null, t) => {
				switch (t.type) {
					case ve.f:
					case ve.g:
						return null;
					case ve.e:
						return t.payload;
					default:
						return e
				}
			};
			var fi = (e = !1, t) => {
				switch (t.type) {
					case ve.e:
					case ve.g:
						return !0;
					case ve.f:
						return !1;
					default:
						return e
				}
			};
			var yi = (e = !1, t) => {
					switch (t.type) {
						case ve.e:
						case ve.g:
							return !1;
						case ve.f:
							return !0;
						default:
							return e
					}
				},
				mi = Object(v.c)({
					error: bi,
					fetched: fi,
					pending: yi
				});
			var Ei = (e = null, t) => {
				switch (t.type) {
					case ve.i:
					case ve.j:
						return null;
					case ve.h:
						return t.payload;
					default:
						return e
				}
			};
			var hi = (e = !1, t) => {
				switch (t.type) {
					case ve.h:
					case ve.j:
						return !0;
					case ve.i:
						return !1;
					default:
						return e
				}
			};
			var _i = (e = !1, t) => {
					switch (t.type) {
						case ve.h:
						case ve.j:
							return !1;
						case ve.i:
							return !0;
						default:
							return e
					}
				},
				Oi = Object(v.c)({
					error: Ei,
					fetched: hi,
					pending: _i
				});
			var Ii = (e = null, t) => {
				switch (t.type) {
					case ve.l:
					case ve.m:
						return null;
					case ve.k:
						return t.payload;
					default:
						return e
				}
			};
			var gi = (e = !1, t) => {
				switch (t.type) {
					case ve.k:
					case ve.m:
						return !0;
					case ve.l:
						return !1;
					default:
						return e
				}
			};
			var Si = (e = !1, t) => {
					switch (t.type) {
						case ve.k:
						case ve.m:
							return !1;
						case ve.l:
							return !0;
						default:
							return e
					}
				},
				vi = Object(v.c)({
					error: Ii,
					fetched: gi,
					pending: Si
				});
			var Di = (e = null, t) => {
				switch (t.type) {
					case ve.o:
					case ve.p:
						return null;
					case ve.n:
						return t.payload;
					default:
						return e
				}
			};
			var Ti = (e = !1, t) => {
				switch (t.type) {
					case ve.n:
					case ve.p:
						return !0;
					case ve.o:
						return !1;
					default:
						return e
				}
			};
			var wi = (e = !1, t) => {
					switch (t.type) {
						case ve.n:
						case ve.p:
							return !1;
						case ve.o:
							return !0;
						default:
							return e
					}
				},
				ji = Object(v.c)({
					error: Di,
					fetched: Ti,
					pending: wi
				});
			var Ai = (e = !1, t) => {
				switch (t.type) {
					case ve.t:
						return !1;
					case ve.u:
						return !0;
					default:
						return e
				}
			};
			var Ri = (e = !1, t) => {
					switch (t.type) {
						case ve.t:
							return !0;
						case ve.u:
							return !1;
						default:
							return e
					}
				},
				Ci = Object(v.c)({
					fetched: Ai,
					pending: Ri
				});
			var Pi = (e = null, t) => {
				switch (t.type) {
					case ve.A:
					case ve.B:
						return null;
					case ve.z:
						return t.payload;
					default:
						return e
				}
			};
			var Li = (e = !1, t) => {
				switch (t.type) {
					case ve.A:
					case ve.z:
						return !1;
					case ve.B:
						return !0;
					default:
						return e
				}
			};
			var Ni = (e = !0, t) => {
					switch (t.type) {
						case ve.A:
							return !0;
						case ve.B:
						case ve.z:
							return !1;
						default:
							return e
					}
				},
				ki = Object(v.c)({
					error: Pi,
					fetched: Li,
					pending: Ni
				});
			var xi = (e = null, t) => {
				switch (t.type) {
					case ve.w:
					case ve.x:
						return null;
					case ve.v:
						return t.payload;
					default:
						return e
				}
			};
			var Ui = (e = !1, t) => {
				switch (t.type) {
					case ve.v:
					case ve.x:
						return !0;
					case ve.w:
						return !1;
					default:
						return e
				}
			};
			var Mi = (e = null, t) => {
					switch (t.type) {
						case ve.v:
						case ve.x:
							return null;
						case ve.w:
							const {
								id: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				Gi = Object(v.c)({
					error: xi,
					fetched: Ui,
					pending: Mi
				}),
				Fi = Object(v.c)({
					addSubreddit: pi,
					create: mi,
					deleteMulti: Oi,
					duplicate: vi,
					edit: ji,
					forUser: Ci,
					recommendations: ki,
					removeSubreddit: Gi
				}),
				Bi = r("./node_modules/lodash/isEqual.js"),
				Hi = r.n(Bi),
				Vi = r("./node_modules/lodash/union.js"),
				qi = r.n(Vi);

			function Ki(e, t, r) {
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
			var Wi = r("./src/reddit/actions/profile/constants.ts");
			const $i = {};
			var Qi = (e = $i, t) => {
					switch (t.type) {
						case Te.b:
						case ve.r:
						case ve.u:
						case Wi.h: {
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
								n[t] = qi()(a, r).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return Hi()(e, n) ? e : n
						}
						case ve.g:
						case ve.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, a = e[r] ? e[r].slice() : [], n = Ki(a, s.url, (e, t) => e > t ? 1 : -1);
							return a.splice(n, 0, s.url), {
								...e,
								[r]: a
							}
						}
						case ve.j: {
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
				zi = r("./src/reddit/models/Multireddit/index.ts");
			const Xi = {};
			var Yi = (e = Xi, t) => {
				switch (t.type) {
					case Te.b:
					case ve.r:
					case ve.u:
					case Wi.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const a = {
									...t.payload.multireddits[s]
								},
								n = e[s];
							n && !Object(zi.g)(a) && (a.subredditIds = n.subredditIds, a.profileIds = n.profileIds), s in e && Hi()(e[a.url], a) || (r = {
								...r,
								[s]: a
							})
						}
						return Xa()(r) ? e : {
							...e,
							...r
						}
					}
					case ve.g:
					case ve.m: {
						const {
							multireddit: r
						} = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case ve.j: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r], s
					}
					case ve.p: {
						const r = t.payload;
						return {
							...e,
							[r.url]: r
						}
					}
					case ve.x: {
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
					case ve.c: {
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
			const Zi = {};
			var eu = (e = Zi, t) => {
					switch (t.type) {
						case ve.B: {
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
				tu = Object(v.c)({
					api: Fi,
					byUserId: Qi,
					models: Yi,
					recommendations: eu
				}),
				ru = r("./src/reddit/actions/notificationBanner.ts");
			var su = (e = null, t) => {
					switch (t.type) {
						case ru.b:
							return t.payload.notificationBannerId;
						case ru.a:
							return null;
						default:
							return e
					}
				},
				au = r("./src/reddit/actions/notificationsInbox/constants.ts");
			var nu = (e = !1, t) => {
				switch (t.type) {
					case au.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case au.e:
					case au.b:
						return !1;
					default:
						return e
				}
			};
			var cu = (e = !1, t) => {
					switch (t.type) {
						case au.e:
							return !0;
						case au.a:
						case au.b:
							return !1;
						default:
							return e
					}
				},
				ou = Object(v.c)({
					error: nu,
					pending: cu
				});
			var du = (e = null, t) => {
				switch (t.type) {
					case au.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var iu = (e = null, t) => {
				switch (t.type) {
					case au.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const uu = [];
			var lu = (e = uu, t) => {
				switch (t.type) {
					case au.b: {
						const r = t.payload && t.payload.nodes;
						return [...e, ...r]
					}
					case au.f: {
						const r = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== r)
					}
					case au.d: {
						const r = t.payload && t.payload.id,
							s = t.payload && t.payload.now,
							a = e.findIndex(e => e.id === r);
						return -1 === a ? e : [...e.slice(0, a), {
							...e[a],
							readAt: s
						}, ...e.slice(a + 1)]
					}
					case au.c: {
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
			var pu = (e = null, t) => {
					switch (t.type) {
						case au.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				bu = Object(v.c)({
					api: ou,
					earlierDividerIndex: du,
					notifications: lu,
					pageInfo: pu,
					markAllAsReadTimestamp: iu
				}),
				fu = r("./src/reddit/actions/nps.ts");
			const yu = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var mu = (e = yu, t) => {
				switch (t.type) {
					case fu.c:
						return {
							...yu, pending: !0
						};
					case fu.a:
						return yu;
					case fu.b: {
						const {
							dest: e
						} = t.payload;
						return {
							...yu,
							success: !0,
							dest: e
						}
					}
					default:
						return e
				}
			};
			const Eu = e => {
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
					for (const r of e) t[r.experimentName.toLowerCase()] = Eu(r);
					return t
				},
				_u = {};
			var Ou = (e = _u, t) => {
				switch (t.type) {
					case Fn.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return hu(r)
					}
					default:
						return e
				}
			};
			var Iu = Object(v.c)({
					byName: Ou,
					canonicalUrl: (e = null, t) => {
						switch (t.type) {
							case Fn.a: {
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
				gu = Object(v.c)({
					experiments: Iu
				}),
				Su = r("./node_modules/history/esm/history.js");
			const vu = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null,
				metas: {}
			};
			var Du = (e = vu, t) => {
				switch (t.type) {
					case u.a: {
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
						const o = Object(Su.e)(n),
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
					case u.e: {
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
					case F.b:
					case F.f:
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
			const Tu = {};
			var wu = (e = Tu, t) => {
				switch (t.type) {
					case d.k: {
						const {
							pollId: r
						} = t.payload.pollResults, {
							[r]: s,
							...a
						} = e;
						return a
					}
					case d.j: {
						const {
							pollId: r
						} = t.payload, {
							[r]: s,
							...a
						} = e;
						return a
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
			const ju = {};
			var Au = (e = ju, t) => {
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
				Ru = Object(v.c)({
					error: wu,
					pending: Au
				}),
				Cu = Object(v.c)({
					voting: Ru
				}),
				Pu = r("./src/reddit/actions/economics/predictions/constants.ts");
			const Lu = {};
			var Nu = (e = Lu, t) => {
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
					case ge.b:
					case K.SUBREDDIT_LOADED:
					case $.i:
					case ge.f:
					case F.b:
					case F.f:
					case Pu.f: {
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
									type: Sa.a.GA,
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
					case Pu.h:
					case Pu.g:
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
			const ku = {};
			var xu = (e = ku, t) => {
				switch (t.type) {
					case d.k: {
						const {
							[Sa.b.ByVoters]: r, pollId: s
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
					case ge.b:
					case K.SUBREDDIT_LOADED:
					case $.i:
					case ge.f:
					case F.b:
					case F.f: {
						const {
							governance: r,
							posts: s
						} = t.payload;
						if (r) {
							const t = Object.keys(r).reduce((e, t) => {
								const s = r[t],
									{
										[Sa.b.ByVoters]: a,
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
			const Uu = {};
			var Mu = (e = Uu, t) => {
					switch (t.type) {
						case d.k: {
							const {
								[Sa.b.ByVotingPower]: r, pollId: s
							} = t.payload.pollResults;
							return {
								...e,
								[s]: r
							}
						}
						case ge.b:
						case K.SUBREDDIT_LOADED:
						case $.i:
						case ge.f:
						case F.b:
						case F.f: {
							const {
								governance: r
							} = t.payload;
							if (r) {
								const t = Object.keys(r).reduce((e, t) => {
									const s = r[t],
										{
											[Sa.b.ByVotingPower]: a,
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
				Gu = Object(v.c)({
					byVoters: xu,
					byVotingPower: Mu
				});
			const Fu = {};
			var Bu = (e = Fu, t) => {
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
				Hu = Object(v.c)({
					api: Cu,
					models: Nu,
					results: Gu,
					rewards: Bu
				});
			const Vu = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var qu = (e = Vu, t) => {
				switch (t.type) {
					case kr.i:
					case kr.j:
						return {
							...e, reorderError: null
						};
					case kr.h:
						return {
							...e, reorderError: t.payload
						};
					case kr.l:
					case kr.m:
						return {
							...e, updateDescriptionError: null
						};
					case kr.k:
						return {
							...e, updateDescriptionError: t.payload
						};
					case kr.p:
					case kr.q:
						return {
							...e, updateLayoutError: null
						};
					case kr.o:
						return {
							...e, updateLayoutError: t.payload
						};
					default:
						return e
				}
			};
			const Ku = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var Wu = (e = Ku, t) => {
					switch (t.type) {
						case kr.i:
							return {
								...e, reorderPending: !0
							};
						case kr.h:
						case kr.j:
							return {
								...e, reorderPending: !1
							};
						case kr.l:
							return {
								...e, updateDescriptionPending: !0
							};
						case kr.k:
						case kr.m:
							return {
								...e, updateDescriptionPending: !1
							};
						case kr.p:
							return {
								...e, updateLayoutPending: !0
							};
						case kr.o:
						case kr.q:
							return {
								...e, updateLayoutPending: !1
							};
						default:
							return e
					}
				},
				$u = Object(v.c)({
					error: qu,
					pending: Wu
				}),
				Qu = r("./src/reddit/helpers/path/index.ts");
			const Ju = {},
				zu = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(Qu.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				};
			var Xu = (e = Ju, t) => {
				switch (t.type) {
					case we.PAGE_LOADED:
					case De.e:
					case De.h:
					case B.b:
					case B.e:
					case je.e:
					case je.b:
					case H.PROFILE_POSTS_LOADED:
					case H.MORE_POSTS_LOADED:
					case K.SUBREDDIT_LOADED:
					case ge.b:
					case Te.b:
					case K.SUBREDDIT_LOADED:
					case F.b:
					case F.f:
					case pd.k:
					case ve.r:
					case ge.f:
					case W.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Pe.e:
					case Ae.b:
					case q.SEARCH_RESULTS_RECEIVED:
					case kr.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let a = r;
						if (s) {
							const e = zu(s);
							a = Rt()(r, e)
						}
						return {
							...e,
							...a
						}
					}
					case kr.d: {
						const {
							collection: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						const a = r.id;
						let n = r;
						if (s) {
							n = zu(s)(r)
						}
						return {
							...e,
							[a]: n
						}
					}
					case kr.g: {
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
					case kr.a: {
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
					case kr.e: {
						const {
							collectionId: r
						} = t.payload, s = {
							...e
						};
						return delete s[r], s
					}
					case kr.s: {
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
					case kr.j: {
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
					case kr.m: {
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
					case kr.q: {
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
			const Yu = {};
			var Zu = (e = Yu, t) => {
					switch (t.type) {
						case we.PAGE_LOADED:
						case kr.f: {
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
						case kr.d: {
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
						case kr.e: {
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
				el = Object(v.c)({
					models: Xu,
					subredditToIds: Zu,
					api: $u
				}),
				tl = r("./src/reddit/actions/postFlair.ts"),
				rl = r("./src/reddit/models/Flair/index.ts");
			const sl = {},
				al = {
					displaySettings: {
						isEnabled: !1,
						position: rl.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				nl = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					return 0 === r.length ? e : r.reduce((e, r) => (e[r] = {
						...al,
						...e[r],
						...t[r]
					}, e), {
						...e
					})
				};
			var cl = (e = sl, t) => {
					switch (t.type) {
						case we.PAGE_LOADED:
						case ge.f:
						case De.e:
						case De.h:
						case ve.r:
						case Jo.b:
						case F.b:
						case F.f:
						case ge.b:
						case Te.b:
						case q.SEARCH_RESULTS_RECEIVED:
						case K.SUBREDDIT_LOADED:
						case B.b:
						case B.e:
						case V.c:
						case V.i:
						case V.e:
						case V.g:
						case W.e:
						case Ae.b:
						case Ae.b:
						case je.b:
						case je.e:
						case H.MORE_POSTS_LOADED:
						case H.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Pe.e:
						case Pe.e:
						case $.i:
							return nl(e, t.payload.postFlair);
						case tl.c: {
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
						case tl.a: {
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
						case tl.f: {
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
						case tl.b: {
							const {
								subredditId: r,
								templateId: s
							} = t.payload, a = e[r], {
								templates: n,
								templateIds: c
							} = a, o = Rs()(n, s), d = c.filter(e => e !== s);
							return {
								...e,
								[r]: {
									...a,
									templates: o,
									templateIds: d
								}
							}
						}
						case tl.e:
						case tl.d: {
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
						case G.i:
						case G.f:
						case G.m:
						case G.p:
						case G.v: {
							const {
								response: r
							} = t.payload;
							return nl(e, r.postFlair)
						}
						default:
							return e
					}
				},
				ol = r("./src/reddit/actions/inFeedChaining.ts");
			var dl = (e = !1, t) => {
				switch (t.type) {
					case ol.a:
						return t.payload.isDismissed;
					default:
						return e
				}
			};
			const il = {};
			var ul = (e = il, t) => {
				switch (t.type) {
					case ol.c: {
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
			const ll = {};
			var pl = (e = ll, t) => {
					switch (t.type) {
						case ol.b:
							return {
								...e, [t.payload.postId]: t.payload.listingKey
							};
						default:
							return e
					}
				},
				bl = Object(v.c)({
					dismissed: dl,
					dismissedIdToListingKey: ul,
					idToListingKey: pl
				});
			var fl = (e = null, t) => {
					switch (t.type) {
						case pd.b:
							return t.payload;
						default:
							return e
					}
				},
				yl = r("./src/reddit/actions/embedAndImage.ts");
			const ml = {};
			var El = (e = ml, t) => {
					switch (t.type) {
						case yl.b: {
							const {
								postId: r
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: !1
							} : e
						}
						case yl.a: {
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
				hl = Object(v.c)({
					loadable: El
				});
			const _l = {};
			var Ol = (e = _l, t) => {
				switch (t.type) {
					case pd.c: {
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
			var Il = (e = null, t) => {
				switch (t.type) {
					case pd.d: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const gl = [];
			var Sl = (e = gl, t) => {
				switch (t.type) {
					case pd.o:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case pd.a:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case pd.e:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const vl = {};
			var Dl = (e = vl, t) => {
					switch (t.type) {
						case De.e:
						case De.h:
						case ge.b:
						case K.SUBREDDIT_LOADED:
						case ge.f:
						case W.e:
						case "RECOMMENDED_POSTS_LOADED":
						case $.i:
						case Pe.e:
						case q.SEARCH_RESULTS_RECEIVED:
							return k()({
								...e
							}, t.payload.postInstances, (e, t) => {
								if (e) return e.concat(t)
							});
						default:
							return e
					}
				},
				Tl = r("./src/reddit/actions/isTrackingCrossposts.ts");
			const wl = {};
			var jl = (e = wl, t) => {
				switch (t.type) {
					case Tl.a: {
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
			var Rl = (e = Al, t) => {
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
						case ge.b:
						case K.SUBREDDIT_LOADED:
						case $.i:
						case ge.f:
						case F.b:
						case F.f:
						case Pu.f: {
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
				Cl = r("./src/reddit/actions/bulkActions/constants.ts"),
				Pl = r("./src/reddit/actions/constants.ts"),
				Ll = r("./src/reddit/actions/flairManagement/constants.ts"),
				Nl = r("./src/reddit/actions/googleQASchema/constants.ts"),
				kl = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				xl = r("./src/reddit/actions/subredditTopContent.ts"),
				Ul = r("./src/reddit/helpers/isPost.ts"),
				Ml = r("./node_modules/lodash/pickBy.js"),
				Gl = r.n(Ml);

			function Fl(e, t) {
				const r = Gl()(t, (t, r = "") => !e[r] || !Hi()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var Bl = r("./src/reddit/models/Gold/Gild/index.tsx"),
				Hl = r("./src/reddit/models/Media/index.ts"),
				Vl = r("./src/reddit/models/ModQueue/index.ts"),
				ql = r("./src/reddit/models/Post/index.ts"),
				Kl = r("./src/reddit/models/Vote/index.ts"),
				Wl = r("./src/reddit/actions/subredditDuplicates.ts");

			function $l({
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
					predictions: a.map(Ql)
				}
			}

			function Ql({
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
					options: i.map(Jl)
				}
			}

			function Jl({
				userAmount: e,
				...t
			}) {
				return {
					...t,
					userStakeAmount: e
				}
			}
			const zl = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(Qu.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				},
				Xl = e => t => {
					const r = e[t.id];
					return r && r.events && (t.events = r.events, t.source = r.source), t
				},
				Yl = e => t => {
					const r = e[t.id];
					return r && r.isSponsored && (t.isSponsored = r.isSponsored), t
				},
				Zl = ({
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
				ep = ({
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
				tp = ({
					tournamentData: e,
					...t
				}) => e ? {
					...t,
					predictionTournament: $l(e)
				} : t,
				rp = e => e.media && Object(Hl.E)(e.media) ? {
					...Object(L.unsetIn)(e, ["source"])
				} : e,
				sp = e => t => {
					const r = e[t.id];
					return t && t.media && r && r.media && Object(Hl.H)(t.media) && t.media.isRichtextPreview && Object(Hl.H)(r.media) && !r.media.isRichtextPreview && (t.media.richtextContent = r.media.richtextContent, t.media.isRichtextPreview = !1), t
				},
				ap = e => t => {
					const r = e[t.id];
					return r && r.numDuplicates && (t.numDuplicates = r.numDuplicates), t
				},
				np = e => t => {
					const r = e[t.id];
					return r && void 0 !== r.isEligibleForLinkedPosts && (t.isEligibleForLinkedPosts = r.isEligibleForLinkedPosts), t
				},
				cp = e => {
					let t = e.source;
					return t && t.outboundUrlCreated && (t = {
						...t,
						outboundUrlReceived: Date.now()
					}, e.source = t), e
				},
				op = e => {
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
				dp = e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				},
				ip = (e, t) => ({
					...e,
					events: t.events,
					source: t.source
				}),
				up = {};
			var lp = (e = up, t) => {
				switch (t.type) {
					case u.a:
						if (Ns(t) === (Ce.Jb.COMMENTS || Ce.Jb.DUPLICATES)) {
							const r = ks(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									a = Object(ql.s)(s.partialPostId);
								if (e[a] && e[t]) return {
									...e,
									[a]: ip(e[a], e[t])
								}
							}
						}
						return e;
					case F.b:
					case F.f: {
						const r = zl(t.payload.meta);
						return {
							...e,
							...Rt()(t.payload.posts, dp([r, cp, op, rp, tp, Xl(e), Yl(e), ap(e), np(e)]))
						}
					}
					case pd.k:
						return Fl(e, t.payload);
					case Wl.a:
						return Fl(e, t.payload.posts);
					case we.PAGE_LOADED:
					case Zo.c:
					case De.e:
					case De.h:
					case B.b:
					case B.e:
					case je.e:
					case je.b:
					case H.PROFILE_POSTS_LOADED:
					case H.MORE_POSTS_LOADED:
					case K.SUBREDDIT_LOADED:
					case ge.b:
					case Te.b:
					case K.SUBREDDIT_LOADED:
					case Jo.b:
					case ve.r:
					case ge.f:
					case W.e:
					case "RECOMMENDED_POSTS_LOADED":
					case ed.j:
					case $.i:
					case Ae.b:
					case zo.TOPIC_DATA_LOADED:
					case zo.MORE_POSTS_LOADED:
					case Qo.c:
					case Qo.d:
					case Pu.f: {
						const r = zl(t.payload.meta);
						return {
							...e,
							...Rt()(t.payload.posts, dp([r, cp, op, rp, tp, sp(e), ap(e), np(e)]))
						}
					}
					case ed.r: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								a = zl(t.meta);
							Object.assign(r, Rt()(t.posts, dp([a, cp, op, rp, sp(e), ap(e), np(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case Jo.b: {
						const r = zl(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...Rt()(t.payload.posts, dp([r, cp, op, rp, sp(e), ap(e), np(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ie.e:
					case Pe.e:
					case q.SEARCH_RESULTS_RECEIVED: {
						const r = zl(t.payload.meta),
							s = Rt()(t.payload.posts, dp([r, op, cp, rp, np(e)]));
						return k()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case pd.l: {
						const r = t.payload;
						return k()({
							...e
						}, r, (e, t) => ({
							...e,
							...t
						}))
					}
					case Pl.a: {
						const {
							id: r,
							vote: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: Object(Kl.c)(a, s)
						} : e
					}
					case U.b:
					case x.J: {
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
					case pd.i: {
						const {
							postId: r,
							delta: s
						} = t.payload, a = e[r];
						if (a) {
							let t = a.numComments + s;
							return t < 0 && (t = 0), {
								...e,
								[r]: {
									...a,
									numComments: t
								}
							}
						}
						return e
					}
					case pd.j: {
						const {
							postId: r,
							delta: s
						} = t.payload, a = e[r];
						if (a) {
							let t = a.score + s;
							return t < 0 && (t = 0), {
								...e,
								[r]: {
									...a,
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
					case ee.rb: {
						const {
							topAwardedPosts: r
						} = t.payload;
						return {
							...e,
							...r.reduce((e, t) => (e[t.post.id] = dp([op])(Object(qs.e)(t.post)), e), {})
						}
					}
					case ee.t: {
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
					case ee.E: {
						const {
							awardId: r,
							thingId: s
						} = t.payload, a = e[s];
						return a ? {
							...e,
							[s]: Object(Bl.b)(a, r)
						} : e
					}
					case Bd.n: {
						const {
							posts: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v: {
						const {
							response: r
						} = t.payload, {
							posts: s
						} = r;
						return {
							...e,
							...Rt()(s, dp([op, rp]))
						}
					}
					case Cl.b:
					case G.s: {
						const {
							operation: r,
							ids: s,
							username: a,
							options: n
						} = t.payload, c = s.filter(e => Object(Ul.a)(e)), o = Object(Vl.d)(e, r, c, a, n);
						return k()({
							...e
						}, o, (e, t) => ({
							...e,
							...t
						}))
					}
					case kr.t: {
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
					case kr.e: {
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
					case kr.g: {
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
					case Qo.f: {
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
					case Qo.a: {
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
					case wc.g: {
						const r = t.payload.subredditTopContent;
						return r && r.posts && Object.keys(r.posts) ? {
							...Rt()(r.posts, dp([op, rp])),
							...e
						} : e
					}
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case xl.b:
						return {
							...Rt()(t.payload.posts, dp([op, rp])), ...e
						};
					case pd.n: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, a = e[r];
						return a && a.media && Object(Hl.H)(a.media) ? {
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
						return Object(Gt.a)(e, r)
					}
					case Ad.a: {
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
					case m.o: {
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
					case Pu.k: {
						const {
							postId: r,
							predictionId: s,
							selectedOptionId: a
						} = t.payload;
						return {
							...e,
							[s]: Zl({
								post: e[s],
								selectedOptionId: a
							}),
							[r]: ep({
								post: e[r],
								selectedOptionId: a,
								predictionId: s
							})
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
					case Zo.a: {
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
			var pp = (e = null, t) => {
					switch (t.type) {
						case pd.h:
							return t.payload;
						default:
							return e
					}
				},
				bp = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const fp = {};
			var yp = (e = fp, t) => {
				switch (t.type) {
					case bp.a: {
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
			const mp = [];
			var Ep = (e = mp, t) => {
					switch (t.type) {
						case pd.m: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case ge.b:
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
				hp = r("./node_modules/uuid/v4.js"),
				_p = r.n(hp);
			const Op = _p()();
			var Ip = (e = Op, t) => {
				switch (t.type) {
					case we.PAGE_LOADED:
					case ys.h:
					case ys.a:
					case ys.m:
					case ys.f:
						return _p()();
					default:
						return e
				}
			};
			var gp = (e = null, t) => {
				switch (t.type) {
					case ys.d:
					case ys.o:
					case ys.k:
					case ys.g:
					case ys.a:
					case ys.m:
					case ys.f:
						return null;
					case ys.j: {
						const {
							message: e
						} = t.payload;
						return e
					}
					case ys.e:
						return "error";
					default:
						return e
				}
			};
			var Sp = (e = !0, t) => {
				switch (t.type) {
					case ys.g:
						return !0;
					case ys.m:
					case ys.a:
					case ys.f:
					case ys.e:
						return !1;
					default:
						return e
				}
			};
			var vp = (e = !1, t) => {
					switch (t.type) {
						case ys.k:
							return !0;
						case ys.j:
						case ys.e:
						case ys.o:
						case ys.d:
							return !1;
						default:
							return e
					}
				},
				Dp = Object(v.c)({
					creationToken: Ip,
					error: gp,
					pending: Sp,
					pendingUpdate: vp
				});
			const Tp = {};
			var wp = (e = Tp, t) => {
				switch (t.type) {
					case ys.c: {
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
					POSTS_LOADED: ys.m,
					postIdsKey: "standalonePostsIds",
					MUTATION_SUCCEEDED: ys.o
				},
				recurringPosts: {
					POSTS_LOADED: ys.a,
					postIdsKey: "recurringPostsIds",
					MUTATION_SUCCEEDED: ys.d
				}
			};

			function Ap(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case jp[e].POSTS_LOADED:
						case ys.f: {
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
						case ys.i:
						case ys.l: {
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
						case ys.h: {
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
			const Rp = {};

			function Cp(e) {
				return (t = Rp, r) => {
					switch (r.type) {
						case jp[e].POSTS_LOADED:
						case ys.f: {
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
						case ys.h: {
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
			var Pp = r("./node_modules/lodash/uniq.js"),
				Lp = r.n(Pp);
			const Np = {};

			function kp(e) {
				return (t = Np, r) => {
					switch (r.type) {
						case jp[e].POSTS_LOADED:
						case ys.f: {
							const {
								subredditInfoById: s
							} = r.payload, a = s.id, n = s.scheduledPosts[jp[e].postIdsKey];
							return {
								...t,
								[a]: Lp()([...t[a] || [], ...n])
							}
						}
						case ys.i:
						case ys.l: {
							const {
								subredditId: e,
								scheduledPostId: s
							} = r.payload, a = t[e] || [];
							return {
								...t,
								[e]: a.filter(e => e !== s)
							}
						}
						case ys.h: {
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
			var xp = Object(v.c)({
					models: Ap("recurringPosts"),
					pageInfo: Cp("recurringPosts"),
					postOrder: kp("recurringPosts"),
					editModal: wp
				}),
				Up = Object(v.c)({
					models: Ap("standalonePosts"),
					pageInfo: Cp("standalonePosts"),
					postOrder: kp("standalonePosts")
				}),
				Mp = Object(v.c)({
					api: Dp,
					standalonePosts: Up,
					recurringPosts: xp
				});
			var Gp = (e = null, t) => {
				switch (t.type) {
					case ee.qb:
						return t.payload;
					case ee.sb:
					case ee.rb:
						return null;
					default:
						return e
				}
			};
			var Fp = (e = !1, t) => {
					switch (t.type) {
						case ee.rb:
						case ee.qb:
							return !1;
						case ee.sb:
							return !0;
						default:
							return e
					}
				},
				Bp = Object(v.c)({
					error: Gp,
					pending: Fp
				});
			const Hp = [];
			var Vp = (e = Hp, t) => {
					switch (t.type) {
						case ee.rb: {
							const {
								topAwardedPosts: e
							} = t.payload;
							return e.filter(e => !(e.post.isNsfw || e.post.isArchived || e.post.isHidden || e.post.removedBy || e.post.removedByCategory && "NONE" !== e.post.removedByCategory)).map(e => ({
								postId: e.post.id,
								rank: e.rank,
								score: e.score
							}))
						}
						case ee.qb:
						case ee.sb:
							return Hp;
						default:
							return e
					}
				},
				qp = Object(v.c)({
					api: Bp,
					list: Vp
				}),
				Kp = r("./src/reddit/actions/video.ts");
			const Wp = {};
			var $p = (e = Wp, t) => {
				switch (t.type) {
					case Kp.e: {
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
			const Qp = {};
			var Jp = (e = Qp, t) => {
				switch (t.type) {
					case Kp.a: {
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
			const zp = {};
			var Xp = (e = zp, t) => {
				switch (t.type) {
					case Kp.b: {
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
			const Yp = {};
			var Zp = (e = Yp, t) => {
				switch (t.type) {
					case Kp.c: {
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
			const eb = {
				mutedInFeed: !0
			};
			var tb = (e = eb, t) => {
				switch (t.type) {
					case Kp.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var rb = (e = null, t) => {
				switch (t.type) {
					case Kp.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Kp.d:
						return null;
					default:
						return e
				}
			};
			const sb = {};
			var ab = (e = sb, t) => {
				switch (t.type) {
					case Kp.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Kp.e: {
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
			var cb = (e = nb, t) => {
				switch (t.type) {
					case Kp.h: {
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
					case Kp.f: {
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
			const ob = {};
			var db = (e = ob, t) => {
				switch (t.type) {
					case Kp.j: {
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
			const ib = {};
			var ub = (e = ib, t) => {
				switch (t.type) {
					case Kp.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Kp.g: {
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
			const lb = {};
			var pb = (e = lb, t) => {
				switch (t.type) {
					case Kp.i: {
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
			const bb = {};
			var fb = (e = bb, t) => {
					switch (t.type) {
						case Kp.m: {
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
				yb = r("./src/reddit/constants/video.ts");
			const mb = {};
			var Eb = (e = mb, t) => {
					switch (t.type) {
						case Kp.n: {
							const {
								postId: r,
								time: s
							} = t.payload;
							return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < yb.l ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				hb = Object(v.c)({
					autoPlayed: $p,
					buffering: Jp,
					consumed: Xp,
					continuousViewStartedAt: Zp,
					feed: tb,
					fullscreen: rb,
					loadable: ab,
					loadTimes: cb,
					metadata: db,
					paused: ub,
					playing: pb,
					started: fb,
					time: Eb
				}),
				_b = Object(v.c)({
					chained: bl,
					embedAndImage: hl,
					expanded: Ol,
					focus: Il,
					followed: Sl,
					instances: Dl,
					isTrackingCrossposts: jl,
					metaMap: Rl,
					models: lp,
					modToMemberShare: pp,
					crowdControl: fl,
					postLevelCrowdControl: yp,
					recent: Ep,
					scheduledPosts: Mp,
					topAwarded: qp,
					video: hb
				}),
				Ob = r("./src/lib/reducers/addAuthentication/index.ts");
			const Ib = {};
			var gb = Object(Ob.a)((e = Ib, t) => {
					switch (t.type) {
						case F.b:
						case F.f: {
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
				}, Ib),
				Sb = Object(v.c)({
					data: gb
				});
			const vb = {};
			var Db = (e = vb, t) => {
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
			var wb = (e = Tb, t) => {
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
				jb = Object(v.c)({
					error: Db,
					pending: wb
				});
			const Ab = {};
			var Rb = (e = Ab, t) => {
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
			const Cb = {};
			var Pb = (e = Cb, t) => {
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
				Lb = Object(v.c)({
					error: Rb,
					pending: Pb
				}),
				Nb = Object(v.c)({
					fetch: jb,
					purchase: Lb
				});
			var kb = (e = null, t) => {
				switch (t.type) {
					case l.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const xb = {};
			var Ub = (e = xb, t) => {
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
				Mb = Object(v.c)({
					api: Nb,
					currentlyPurchasing: kb,
					models: Ub
				});
			const Gb = {};
			var Fb = (e = Gb, t) => {
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
			const Bb = {};
			var Hb = (e = Bb, t) => {
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
				Vb = Object(v.c)({
					error: Fb,
					pending: Hb
				});
			const qb = {};
			var Kb = (e = qb, t) => {
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
				Wb = r("./src/reddit/actions/comment/list.ts");
			const $b = {};
			var Qb = (e = $b, t) => {
				switch (t.type) {
					case Wb.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Wb.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Rs()(e, r) : e
					}
					default:
						return e
				}
			};
			const Jb = {};
			var zb = (e = Jb, t) => {
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
			const Xb = {};
			var Yb = (e = Xb, t) => {
					switch (t.type) {
						case B.e:
						case B.b: {
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
							} : Object(Gt.a)(e, r)
						}
						default:
							return e
					}
				},
				Zb = Object(v.c)({
					api: Vb,
					endMarkers: Qb,
					fetchedTokens: zb,
					commentIds: Kb,
					loadMore: Yb
				}),
				ef = r("./src/reddit/actions/pages/profileModSettings.ts");
			var tf = (e = !0, t) => {
					switch (t.type) {
						case ef.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				rf = Object(v.c)({
					pending: tf
				}),
				sf = Object(v.c)({
					api: rf
				});
			const af = {};
			var nf = (e = af, t) => (t.type, e);
			const cf = {};
			var of = (e = cf, t) => {
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
			const df = {};
			var uf = (e = df, t) => {
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
				},
				lf = Object(v.c)({
					error: of ,
					pending: uf
				});
			const pf = {};
			var bf = (e = pf, t) => {
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
			const ff = {};
			var yf = (e = ff, t) => {
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
							} : ff
						}
						default:
							return e
					}
				},
				mf = Object(v.c)({
					api: lf,
					ids: bf,
					pageInfo: yf
				}),
				Ef = r("./src/reddit/constants/posts.ts");
			const hf = {};
			var _f = (e = hf, t) => {
				switch (t.type) {
					case q.SEARCH_RESULTS_RECEIVED:
					case Pe.e:
						return {
							...e, ...t.payload.profileAboutInfo
						};
					case Wi.k: {
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
						} = t.payload, a = r.filter(e => e.type === Ef.a.PROFILE);
						return a.length ? a.reduce((e, t) => (e[t.id] = {
							...e[t.id],
							userIsSubscriber: s
						}, e), {
							...e
						}) : e
					}
					case Ar.m: {
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
			const Of = {};
			var If = (e = Of, t) => {
				switch (t.type) {
					case ge.f:
					case F.b:
					case F.f:
					case ge.b:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case je.b:
					case je.e:
					case H.PROFILE_POSTS_LOADED:
					case Ae.b:
					case ge.f:
					case De.e:
					case De.h:
					case ve.u:
					case Wi.h:
					case Jo.b:
					case Pe.e:
					case $.i:
					case Wi.m:
					case W.b:
					case W.e:
					case q.SEARCH_RESULTS_RECEIVED:
					case we.PAGE_LOADED:
					case Fr.e:
					case Cs.PAGE_LOADED:
					case K.SUBREDDIT_LOADED:
					case Te.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Ji.c:
						return Object(L.merge)(e, t.payload.profiles);
					case Pe.g: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return Object.keys(r).length ? Object(L.merge)(e, r) : e
					}
					case G.i:
					case G.f:
					case G.m:
					case G.p:
					case G.v:
					case G.k: {
						const {
							response: r
						} = t.payload, s = r && r.profiles;
						return Object(L.merge)(e, s)
					}
					case Wi.l:
					case Wi.k: {
						const {
							profile: r
						} = t.payload;
						return r ? Object(L.merge)(e, {
							[r.id]: r
						}) : e
					}
					case Ar.m: {
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
					case Ar.k:
					case Ar.j: {
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
			const gf = {};
			var Sf = (e = gf, t) => {
					switch (t.type) {
						case Wi.c:
						case Wi.f: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !0
							}
						}
						case Wi.a:
						case Wi.b:
						case Wi.d:
						case Wi.e: {
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
				vf = Object(v.c)({
					pending: Sf
				});
			const Df = {};
			var Tf = (e = Df, t) => {
				switch (t.type) {
					case Wi.b: {
						const {
							profileName: r,
							data: s
						} = t.payload, a = s.map(e => e.id);
						return {
							...e,
							[(r || "").toLowerCase()]: a
						}
					}
					case Wi.e:
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
			const wf = {};
			var jf = (e = wf, t) => {
					switch (t.type) {
						case Wi.e: {
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
				Af = Object(v.c)({
					api: vf,
					models: Tf,
					pageInfo: jf
				});
			const Rf = {};
			var Cf = (e = Rf, t) => {
					switch (t.type) {
						case Wi.i: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Wi.g:
						case Wi.h: {
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
				Pf = Object(v.c)({
					pending: Cf
				});
			const Lf = {};
			var Nf = (e = Lf, t) => {
					switch (t.type) {
						case Wi.h: {
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
				kf = Object(v.c)({
					api: Pf,
					pageInfo: Nf
				}),
				xf = r("./src/reddit/actions/pinnedPost.ts");
			const Uf = {};
			var Mf = Object(Ob.a)((e = Uf, t) => {
				switch (t.type) {
					case xf.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case xf.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, a = e[s] || [];
						return {
							...e,
							[s]: [...a, r].slice(-Ce.ab)
						}
					}
					case xf.g: {
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
			}, Uf);
			const Gf = {};
			var Ff = Object(Ob.a)((e = Gf, t) => {
				switch (t.type) {
					case xf.a: {
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
			}, Gf);
			const Bf = {};
			var Hf = Object(Ob.a)((e = Bf, t) => {
					switch (t.type) {
						case xf.c:
						case xf.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, a = e[s] || [];
							return {
								...e,
								[s]: [...a, r]
							}
						}
						case xf.b:
						case xf.e:
						case xf.d:
						case xf.g: {
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
				}, Bf),
				Vf = Object(v.c)({
					data: Mf,
					initialData: Ff,
					pending: Hf
				}),
				qf = r("./src/reddit/actions/trophyCase.ts");
			const Kf = {};
			var Wf, $f, Qf = (e = Kf, t) => {
					switch (t.type) {
						case qf.a: {
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
				Jf = Object(v.c)({
					about: _f,
					models: If,
					moderated: Af,
					multireddits: kf,
					pinnedPosts: Vf,
					trophyCases: Qf
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Wf || (Wf = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}($f || ($f = {}));
			var zf, Xf, Yf;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(zf || (zf = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Xf || (Xf = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Yf || (Yf = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(zf || (zf = {}));
			Object(Re.a)("PROMO__SHOW_PROMO"), Object(Re.a)("PROMO__HIDE_PROMO");
			const Zf = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var ey = (e = Zf, t) => {
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
				ty = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const ry = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: ty.d,
					viewer_streams_refresh: ty.c,
					viewer_streams_refresh_slop: ty.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var sy = (e = ry, t) => {
				switch (t.type) {
					case ty.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case ty.x: {
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
					case ty.G:
						return {
							...e, isPending: !0
						};
					case ty.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case ty.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var ay = (e = {}, t) => {
				switch (t.type) {
					case ty.L:
						return {
							...e, [ty.b]: t.payload.error
						};
					case ty.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case ty.z: {
						const {
							[ty.b]: t, ...r
						} = e;
						return r
					}
					case ty.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const ny = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var cy = (e = {}, t) => {
				switch (t.type) {
					case ty.N:
						return ny(e, t.payload, !0);
					case ty.O:
						return ny(e, ty.b, !0);
					case ty.y:
						return ny(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case ty.z:
						return ny(e, ty.b, !1, t.payload.utcTimeStamp);
					case ty.M:
						return ny(e, t.payload.streamId, !1);
					case ty.L:
						return ny(e, ty.b, !1);
					default:
						return e
				}
			};
			const oy = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var dy = (e = oy, t) => {
					switch (t.type) {
						case ty.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case ty.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case ty.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				iy = Object(v.c)({
					config: sy,
					error: ay,
					pending: cy,
					recommendedViewerSubreddits: dy
				});
			const uy = {};
			var ly = (e = uy, t) => {
				switch (t.type) {
					case ty.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case ty.F:
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
			const py = {
				cursor: ty.W,
				timestamps: {},
				visitOrder: []
			};
			var by = (e = py, t) => {
				switch (t.type) {
					case ty.P:
						return py;
					case ty.X: {
						const r = t.payload,
							s = e.visitOrder.includes(r) ? e.visitOrder : [...e.visitOrder, r],
							a = s.indexOf(r);
						return s === e.visitOrder && a === e.cursor ? e : {
							...e,
							visitOrder: s,
							cursor: a
						}
					}
					case p.d:
						return fy(e, t.payload.id);
					case ty.E:
						return fy(e, t.payload);
					case pd.l: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return yy(e, r)
					}
					case ty.V: {
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
			const fy = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				yy = (e, t) => {
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
				my = {
					ended: [],
					removed: []
				};

			function Ey(e) {
				return [...new Set(e)]
			}
			var hy = (e = my, t) => {
				switch (t.type) {
					case ty.t:
						return {
							...e, ended: Ey(e.ended.concat(t.payload))
						};
					case ty.u:
						return {
							...e, removed: Ey(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const _y = {};
			var Oy = (e = _y, t) => {
				switch (t.type) {
					case ty.z:
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
			const Iy = {},
				gy = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: ty.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: ty.l - r
						}
					}), r)
				},
				Sy = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : ty.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var vy = (e = Iy, t) => {
				switch (t.type) {
					case ty.y:
						return Sy(e, t.payload.model);
					case ty.z:
						return gy(e, t.payload.models);
					case ty.D: {
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
			const Dy = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var Ty = (e = Dy, t) => {
				switch (t.type) {
					case ty.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case ty.A:
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
			const wy = {
				reported: []
			};
			var jy = (e = wy, t) => {
				switch (t.type) {
					case p.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const Ay = {
				isIntroFinished: !1
			};
			var Ry = (e = Ay, t) => {
				switch (t.type) {
					case ty.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Cy = {
				reportedStreams: []
			};
			var Py = (e = Cy, t) => {
					switch (t.type) {
						case ty.C:
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
				Ly = Object(v.c)({
					api: iy,
					history: by,
					hlsStreams: hy,
					listings: Oy,
					models: vy,
					preloads: Ty,
					reports: jy,
					theaterSettings: Ry,
					userSettings: Py,
					automuteLevels: ly
				}),
				Ny = r("./src/reddit/actions/recentSubreddits/constants.ts"),
				ky = r("./src/reddit/actions/session.ts");
			const xy = [];
			var Uy = (e = xy, t) => {
				switch (t.type) {
					case ky.c:
					case ky.d:
						return xy;
					case Ny.d:
						return ((e, t) => Hi()(e, t) ? e : t)(e, t.subreddits);
					case Ny.f: {
						const {
							payload: r
						} = t, s = [r, ...e];
						return Array.from(new Set(s)).slice(0, Ny.c)
					}
					case Ny.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, Ny.c)
					}
					default:
						return e
				}
			};
			const My = {};
			var Gy = (e = My, t) => {
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
				Fy = r("./src/reddit/actions/pages/report/constants.ts");
			var By = (e = null, t) => {
				switch (t.type) {
					case Fy.a:
						return t.payload;
					default:
						return e
				}
			};
			var Hy = (e = null, t) => {
				switch (t.type) {
					case Fy.b:
						return t.payload;
					case Fy.c:
					case Fy.d:
						return !1;
					default:
						return e
				}
			};
			var Vy = (e = !1, t) => {
				switch (t.type) {
					case Fy.d:
						return !0;
					case Fy.c:
					case Fy.b:
						return !1;
					default:
						return e
				}
			};
			var qy = (e = !1, t) => {
					switch (t.type) {
						case Fy.c:
							return !0;
						case Fy.b:
						case Fy.d:
							return !1;
						default:
							return e
					}
				},
				Ky = Object(v.c)({
					error: Hy,
					pending: Vy,
					success: qy
				}),
				Wy = r("./src/reddit/actions/reportPageRules/constants.ts");
			const $y = [];
			var Qy = (e = $y, t) => {
					switch (t.type) {
						case Wy.a:
							return t.payload;
						default:
							return e
					}
				},
				Jy = Object(v.c)({
					reportPageApi: Ky,
					reportPageRules: Qy,
					initialReason: By
				}),
				zy = r("./src/reddit/actions/reportRules.ts");
			const Xy = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var Yy = (e = Xy, t) => {
				switch (t.type) {
					case zy.b:
						return {
							...e, sitewideRules: t.payload
						};
					case zy.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Re.a)("REQUEST_HOST_SET");
			var Zy = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(Re.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const em = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var tm = (e = em, t) => {
					switch (t.type) {
						case "RUN_TIME_ENV_VARS__IS_STAGING":
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				rm = r("./src/reddit/components/SearchDropdown/index.tsx");
			var sm = (e = !1, t) => {
				switch (t.type) {
					case Pe.b:
						return !e;
					case oo.b: {
						const {
							event: r
						} = t.payload, s = r.target, a = document.getElementById(rm.b), n = document.getElementById(rm.a);
						return !(!s || !((null == a ? void 0 : a.contains(s)) || (null == n ? void 0 : n.contains(s)))) && e
					}
					case Pe.a:
					case oo.a:
					case oo.c:
						return !1;
					default:
						return e
				}
			};
			const am = Object.create(null);
			var nm = (e = am, t) => {
				switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
					case Pe.f: {
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
			var cm = (e = null, t) => {
				switch (t.type) {
					case q.SEARCH_RESULTS_RECEIVED:
					case Pe.h: {
						const {
							searchQuery: e
						} = t.payload;
						return e || null
					}
					default:
						return e
				}
			};
			const om = Object.create(null);
			var dm = (e = om, t) => {
					switch (null !== Object.getPrototypeOf(e) && (e = Object.assign(Object.create(null), e)), t.type) {
						case Pe.g: {
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
				im = r("./src/reddit/models/Search/index.ts");
			const um = {};
			var lm = (e = um, t) => {
					switch (t.type) {
						case Pe.g: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(im.d)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				pm = Object(v.c)({
					idsByQuery: dm,
					models: lm
				});
			const bm = {};
			var fm = (e = bm, t) => {
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
				ym = Object(v.c)({
					isDropdownOpen: sm,
					relatedQueries: nm,
					searchQuery: cm,
					typeahead: pm,
					viewTreatment: fm
				}),
				mm = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Em = {};
			var hm = (e = Em, t) => {
				switch (t.type) {
					case q.SEARCH_RESULTS_RECEIVED: {
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
						if (i === mm.c.Trending || r) {
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
			const _m = {};
			var Om = (e = _m, t) => {
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
			const Im = {};
			var gm = (e = Im, t) => {
					switch (t.type) {
						case q.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : Im
						}
						default:
							return e
					}
				},
				Sm = Object(v.c)({
					headerContent: hm,
					models: Om,
					order: gm
				});
			Object(Re.a)("SEO__CRAWLER_RECEIVED");
			var vm = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				Dm = r("./src/reddit/actions/seo/linksModule.ts");
			const Tm = {};
			var wm = (e = Tm, t) => {
					switch (t.type) {
						case Dm.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case Dm.c:
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
				jm = r("./src/reddit/actions/seo/topicLinks.ts");
			const Am = {};
			var Rm = (e = Am, t) => {
					switch (t.type) {
						case jm.a:
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
				Cm = Object(v.c)({
					crawler: vm,
					linksModule: wm,
					topicLinks: Rm
				}),
				Pm = r("./src/reddit/actions/shortcuts/constants.ts");
			var Lm = (e = null, t) => {
				switch (t.type) {
					case Pm.a:
						return t.payload;
					case u.a:
						return null;
					default:
						return e
				}
			};
			var Nm = (e = null, t) => {
					switch (t.type) {
						case Pm.b:
							return t.payload || null;
						default:
							return e
					}
				},
				km = r("./src/reddit/constants/history.ts"),
				xm = r("./src/reddit/constants/shortcuts.ts"),
				Um = r("./src/reddit/helpers/history/index.ts");
			const Mm = xm.d.Global,
				Gm = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(Um.b)(km.a.IsOverlay) ? xm.d.Lightbox : xm.d.CommentPage;
						case "rpan":
						case "subredditCreation":
							return Object(Um.b)(km.a.IsOverlay) ? xm.d.Lightbox : Mm;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return xm.d.Listing;
						case "modQueuePages":
							return xm.d.Modqueue;
						default:
							return Mm
					}
				};
			var Fm = (e = Mm, t) => {
					switch (t.type) {
						case u.a:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return Gm(e)
							}
							return Mm;
						default:
							return e
					}
				},
				Bm = Object(v.c)({
					activeCommentId: Lm,
					activePostId: Nm,
					namespace: Fm
				});
			var Hm = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case m.q:
						case m.r:
							return !0;
						default:
							return e
					}
				},
				Vm = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				qm = Object(v.c)({
					firstFetch: Hm,
					models: Vm.b
				}),
				Km = r("./src/reddit/actions/streaming/modSettings.ts");
			var Wm = (e = null, t) => {
				switch (t.type) {
					case Km.b:
					case Km.c:
						return null;
					case Km.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var $m = (e = !1, t) => {
					switch (t.type) {
						case Km.b:
							return !0;
						case Km.c:
						case Km.a:
							return !1;
						default:
							return e
					}
				},
				Qm = Object(v.c)({
					error: Wm,
					pending: $m
				}),
				Jm = r("./src/reddit/actions/streaming/constants.ts");
			const zm = {};
			var Xm = (e = zm, t) => {
					switch (t.type) {
						case Jm.a: {
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
				Ym = Object(v.c)({
					api: Qm,
					modSettings: Xm
				}),
				Zm = r("./src/reddit/models/StructuredStyles/index.ts");
			const eE = {};
			var tE = (e = eE, t) => {
					switch (t.type) {
						case b.h:
						case b.b:
						case b.d:
							return t.payload.styles;
						case b.e:
							return eE;
						case b.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case b.k: {
							const e = t.payload;
							return Object(Zm.h)(e.styles)
						}
						default:
							return e
					}
				},
				rE = r("./src/reddit/actions/exportImportStyles.ts");
			var sE = (e = null, t) => {
				switch (t.type) {
					case rE.c:
					case rE.b:
						return null;
					case rE.a:
						return t.payload;
					default:
						return e
				}
			};
			var aE = (e = !1, t) => {
					switch (t.type) {
						case rE.c:
							return !0;
						case rE.b:
						case rE.a:
							return !1;
						default:
							return e
					}
				},
				nE = Object(v.c)({
					error: sE,
					pending: aE
				}),
				cE = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				oE = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const dE = {};
			var iE = (e = dE, t) => {
					switch (t.type) {
						case K.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case q.SEARCH_RESULTS_RECEIVED:
						case Pe.e:
						case we.PAGE_LOADED:
						case Cs.PAGE_LOADED: {
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
						case cE.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case cE.a: {
							const {
								flairId: r
							} = t.payload;
							return Object(Gt.a)(e, r)
						}
						case tl.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(Gt.a)(e, r)
						}
						case b.k:
							return dE;
						case oE.b: {
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
				uE = Object(v.c)({
					models: iE
				});
			const lE = {};
			var pE = (e = lE, t) => {
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
						return lE;
					default:
						return e
				}
			};
			var bE = (e = !1, t) => {
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
			var fE = (e = null, t) => {
				switch (t.type) {
					case b.d:
						return t.payload.subredditId;
					case b.e:
						return null;
					case u.a:
						return t.payload.location.search.indexOf("styling=true") > -1 ? e : null;
					case Ar.f:
						return null;
					default:
						return e
				}
			};
			const yE = {};
			var mE = (e = yE, t) => {
					switch (t.type) {
						case K.SUBREDDIT_LOADED:
						case F.b:
						case F.f:
						case we.PAGE_LOADED:
						case Cs.PAGE_LOADED: {
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
						case Pe.e:
						case q.SEARCH_RESULTS_RECEIVED: {
							const {
								payload: r
							} = t;
							if (!r.structuredStyles || !r.structuredStyles.data) return e;
							if (!r.subredditName) return e;
							let s;
							if (tn()(r.subreddits, (e, t) => {
									if (e.name.toLowerCase() === r.subredditName.toLowerCase()) return s = t, !1
								}), !s) return e;
							const a = r.structuredStyles.data.style;
							return {
								...e,
								[s]: a
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
								s = Object(Zm.h)(r.styles);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case Wi.k: {
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
						case Ar.k: {
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
						case Ar.j: {
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
				EE = Object(v.c)({
					draft: tE,
					exportStyles: nE,
					flairTemplate: uE,
					imagePreviews: pE,
					isBladeEditorDirty: bE,
					isEditing: fE,
					models: mE
				});
			Object(Re.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var hE = (e = "", t) => {
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				_E = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const OE = {};
			var IE = (e = OE, t) => {
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
			const gE = {};
			var SE = (e = gE, t) => {
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
				vE = Object(v.c)({
					error: IE,
					pending: SE
				});
			const DE = {};
			var TE = (e = DE, t) => {
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
				wE = Object(v.c)({
					api: vE,
					models: TE
				}),
				jE = r("./src/reddit/actions/category/constants.ts"),
				AE = r("./src/reddit/actions/subredditMention/constants.ts");
			const RE = {};
			var CE = (e = RE, t) => {
				switch (t.type) {
					case AE.d:
					case F.b:
					case F.f:
					case q.SEARCH_RESULTS_RECEIVED:
					case K.SUBREDDIT_FAILED:
					case K.SUBREDDIT_LOADED:
					case we.PAGE_LOADED:
					case Cs.PAGE_LOADED:
					case B.b:
					case B.e:
					case je.b:
					case je.a:
					case je.e:
					case je.d:
					case H.PROFILE_POSTS_LOADED:
					case W.b:
					case W.e:
					case Pe.e:
					case zo.TOPIC_DATA_LOADED:
					case ed.u: {
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
					case Pn.a: {
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
					case Ji.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(e => e.type === Ef.a.SUBREDDIT);
						return a.length ? a.reduce((e, t) => Object(L.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case wc.g:
					case jE.f:
					case ed.g:
					case ed.o: {
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
					case Pn.b: {
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
					case $.c: {
						const {
							data: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case ee.t: {
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
			const PE = {};
			var LE = (e = PE, t) => {
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
			var NE = (e = !1, t) => {
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
				kE = Object(v.c)({
					error: LE,
					pending: NE
				}),
				xE = r("./src/reddit/actions/subredditCreation.ts");
			const UE = {
				apiError: null
			};
			var ME = (e = UE, t) => {
				switch (t.type) {
					case xE.b: {
						const {
							error: r
						} = t.payload;
						return {
							...e,
							apiError: r
						}
					}
					case xE.a:
					case xE.c:
					case xE.d:
						return UE;
					default:
						return e
				}
			};
			var GE = (e = null, t) => {
				switch (t.type) {
					case xE.d: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case xE.c:
					case xE.b:
						return null;
					default:
						return e
				}
			};
			var FE = (e = !1, t) => {
					switch (t.type) {
						case xE.c:
							return !0;
						case xE.d:
						case xE.b:
							return !1;
						default:
							return e
					}
				},
				BE = Object(v.c)({
					error: ME,
					lastCreatedSubredditId: GE,
					pending: FE
				});
			var HE = (e = !1, t) => {
					switch (t.type) {
						case ed.w:
							return !0;
						case ed.x:
						case ed.v:
							return !1;
						default:
							return e
					}
				},
				VE = Object(v.c)({
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
				QE = Object(v.c)({
					error: KE,
					pending: $E
				});
			const JE = {};
			var zE = (e = JE, t) => {
					switch (t.type) {
						case ed.f:
						case ed.g:
							return {
								...e, [t.payload.key]: !1
							};
						case ed.h:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				XE = Object(v.c)({
					pending: zE
				});
			var YE = (e = null, t) => {
				switch (t.type) {
					case ee.ab:
						return t.payload || null;
					case ee.cb:
					case ee.bb:
						return null;
					default:
						return e
				}
			};
			var ZE = (e = !1, t) => {
					switch (t.type) {
						case ee.cb:
							return !0;
						case ee.bb:
						case ee.ab:
							return !1;
						default:
							return e
					}
				},
				eh = Object(v.c)({
					error: YE,
					pending: ZE
				});
			var th = (e = null, t) => {
				switch (t.type) {
					case ed.k: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case ed.m:
					case ed.l:
						return null;
					default:
						return e
				}
			};
			var rh = (e = !1, t) => {
					switch (t.type) {
						case ed.m:
							return !0;
						case ed.l:
						case ed.k:
							return !1;
						default:
							return e
					}
				},
				sh = Object(v.c)({
					error: th,
					pending: rh
				}),
				ah = r("./src/reddit/actions/subredditRules/constants.ts");
			var nh = (e = !1, t) => {
					switch (t.type) {
						case ah.c:
							return !0;
						case ah.a:
						case ah.b:
							return !1;
						default:
							return e
					}
				},
				ch = r("./src/reddit/actions/subredditSettings.ts");
			var oh = (e = !1, t) => {
					switch (t.type) {
						case ch.e:
							return !0;
						case ch.f:
						case ch.d:
							return !1;
						default:
							return e
					}
				},
				dh = Object(v.c)({
					pending: oh
				});
			const ih = {};
			var uh = (e = ih, t) => {
					switch (t.type) {
						case ed.n:
						case ed.o:
							return {
								...e, [t.payload.key]: !1
							};
						case ed.p:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				lh = Object(v.c)({
					pending: uh
				}),
				ph = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const bh = {};
			var fh = (e = bh, t) => {
				switch (t.type) {
					case ph.c:
					case ph.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case ph.a: {
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
			const yh = {};
			var mh = (e = yh, t) => {
					switch (t.type) {
						case ph.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case ph.b:
						case ph.a: {
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
				Eh = Object(v.c)({
					error: fh,
					pending: mh
				});
			const hh = {};
			var _h = (e = hh, t) => {
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
			const Oh = {};
			var Ih = (e = Oh, t) => {
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
				gh = Object(v.c)({
					error: _h,
					pending: Ih
				}),
				Sh = Object(v.c)({
					about: kE,
					create: BE,
					inlineEditing: VE,
					models: QE,
					onboarding: XE,
					productOffers: eh,
					rankings: sh,
					rules: nh,
					settings: dh,
					similar: lh,
					topContent: gh,
					wiki: Eh
				}),
				vh = r("./node_modules/lodash/isNil.js"),
				Dh = r.n(vh);
			const Th = {};
			var wh = (e = Th, t) => {
					switch (t.type) {
						case $.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: Dh()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				jh = Object(v.c)({
					meta: wh
				});
			const Ah = {};
			var Rh = (e = Ah, t) => {
				switch (t.type) {
					case jE.f: {
						const {
							categoryId: r,
							subredditIds: s
						} = t.payload;
						return Xa()(s) ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Ch = {};
			var Ph = (e = Ch, t) => {
					switch (t.type) {
						case ve.c: {
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
				Lh = r("./src/reddit/actions/subredditCrosspostable.ts");
			var Nh = (e = null, t) => {
				switch (t.type) {
					case Lh.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Lh.c:
					case Lh.b:
						return null;
					default:
						return e
				}
			};
			var kh = (e = !1, t) => {
					switch (t.type) {
						case Lh.c:
							return !0;
						case Lh.b:
						case Lh.a:
							return !1;
						default:
							return e
					}
				},
				xh = Object(v.c)({
					errors: Nh,
					pending: kh
				});
			const Uh = {};
			var Mh = (e = Uh, t) => {
					switch (t.type) {
						case Lh.b: {
							const {
								subredditIds: r
							} = t.payload;
							return Hi()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				Gh = Object(v.c)({
					api: xh,
					ids: Mh
				});
			const Fh = {};
			var Bh = (e = Fh, t) => {
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
				Hh = Object(v.c)({
					models: Bh
				});
			const Vh = {};
			var qh = (e = Vh, t) => {
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
			const Kh = {};
			var Wh = (e = Kh, t) => {
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
			const $h = {};
			var Qh = (e = $h, t) => {
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
			const Jh = {};
			var zh = (e = Jh, t) => {
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
				Xh = Object(v.c)({
					assets: qh,
					communityRaw: Wh,
					distributions: Qh,
					releaseNotes: zh
				}),
				Yh = r("./node_modules/lodash/isEqualWith.js"),
				Zh = r.n(Yh),
				e_ = r("./src/lib/forceHttps/index.ts");
			const t_ = {},
				r_ = (e, t) => {
					return !Zh()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				s_ = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let a = 0; a < r.length; a++) {
						const n = r[a],
							c = e[n],
							o = t[n];
						c && !r_(c, o) || (s[n] = o)
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var a_ = (e = t_, t) => {
				switch (t.type) {
					case Ji.c:
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
								return n.icon.url ? c.icon.url = Object(e_.a)(n.icon.url) : a && a.icon.url ? c.icon = a.icon : c.icon.url = "", a && a.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(L.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case Ny.b:
					case AE.d:
					case jE.f:
					case ge.f:
					case wc.g:
					case Zo.c:
					case De.e:
					case De.h:
					case G.k:
					case ve.r:
					case ve.u:
					case Wi.h:
					case Jo.b:
					case F.b:
					case F.f:
					case ge.b:
					case Te.b:
					case B.b:
					case B.e:
					case V.c:
					case V.i:
					case V.e:
					case V.g:
					case je.b:
					case je.e:
					case H.MORE_POSTS_LOADED:
					case H.PROFILE_POSTS_LOADED:
					case Wi.e:
					case q.SEARCH_RESULTS_RECEIVED:
					case K.SUBREDDIT_LOADED:
					case we.PAGE_LOADED:
					case Fr.e:
					case Cs.PAGE_LOADED:
					case Wi.m:
					case W.b:
					case W.e:
					case Ae.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Pe.e:
					case $.c:
					case $.f:
					case $.i:
					case ed.a:
					case ed.g:
					case ed.o:
					case zo.TOPIC_DATA_LOADED:
					case zo.MORE_POSTS_LOADED:
						return s_(e, t.payload.subreddits || {});
					case G.f:
					case G.i:
					case G.m:
					case G.p:
					case G.v: {
						const {
							response: r
						} = t.payload, {
							subreddits: s
						} = r;
						return s_(e, s)
					}
					case Pe.g: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return s_(e, r.subreddits || {})
					}
					case ve.B: {
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
						return s_(e, r)
					}
					case b.m: {
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
					case ch.f: {
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
					case _E.b: {
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
						return Object(L.merge)(e, a)
					}
					default:
						return e
				}
			};
			var n_ = (e = null, t) => {
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
			var c_ = (e = !1, t) => {
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
			var o_ = (e = !1, t) => {
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
				d_ = Object(v.c)({
					errors: n_,
					fetched: c_,
					pending: o_
				});
			var i_ = (e = null, t) => {
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
				u_ = Object(v.c)({
					api: d_,
					order: i_
				});
			const l_ = {};
			var p_ = (e = l_, t) => {
				switch (t.type) {
					case ch.a: {
						const r = t.payload;
						return Object(L.merge)(e, r)
					}
					case ch.b: {
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
			const b_ = {};
			var f_ = (e = b_, t) => {
				switch (t.type) {
					case ed.g: {
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
			const y_ = {};
			var m_ = (e = y_, t) => {
				switch (t.type) {
					case ee.nb: {
						const {
							recentSupporters: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case ee.R:
					case ee.U: {
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
									displayName: Object(J.e)(a),
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
			const E_ = {};
			var h_ = (e = E_, t) => {
				var r;
				switch (t.type) {
					case ee.ob:
					case ee.nb: {
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
					case ee.R:
					case ee.U: {
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
			const __ = {},
				O_ = (e, t, r) => {
					const s = null == e ? void 0 : e[t],
						a = null == s ? void 0 : s.emotes;
					if (!a) return e;
					const n = hn(r, t),
						c = [...a, n];
					return {
						...e,
						[t]: {
							...s,
							emotes: c
						}
					}
				},
				I_ = (e, t, r) => {
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
			var g_ = (e = __, t) => {
				switch (t.type) {
					case ee.nb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: _n(r)
						}
					}
					case En.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: O_(a, r, s)
						}
					}
					case En.c: {
						const {
							subredditId: r,
							emojiId: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: I_(a, r, s)
						}
					}
					default:
						return e
				}
			};
			const S_ = {},
				v_ = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var D_ = (e = S_, t) => {
					switch (t.type) {
						case ee.nb: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(v_)
							}
						}
						case ee.R:
						case ee.U: {
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
								[r]: o.sort(v_)
							};
							if (s > 0) {
								const t = {
									score: s,
									lastSupportedAt: (new Date).toString(),
									supporterInfo: n ? null : {
										id: a.id,
										displayName: Object(J.e)(a),
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
									[r]: [t, ...e[r]].sort(v_)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				T_ = r("./src/lib/makeProductOfferKey/index.ts");
			const w_ = {};
			var j_ = (e = w_, t) => {
				switch (t.type) {
					case ee.bb:
					case ee.nb: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!(null == s ? void 0 : s.length)) return e;
						const a = s.reduce((e, t) => {
							const s = Object(T_.a)(t.type, r);
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
			const A_ = {};
			var R_ = (e = A_, t) => {
					switch (t.type) {
						case l.g: {
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
				C_ = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const P_ = {};
			var L_ = (e = P_, t) => {
				switch (t.type) {
					case ed.y: {
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
						}) => C_.d.includes(e))))(s.cards);
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
			const N_ = {};
			var k_ = (e = N_, t) => {
				var r, s;
				switch (t.type) {
					case ed.y: {
						const {
							id: r,
							questions: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case ge.f:
					case ge.b: {
						const {
							subreddits: s
						} = t.payload, a = {};
						for (const e of Object.keys(s)) {
							const t = s[e];
							((null === (r = t.answerableQuestions) || void 0 === r ? void 0 : r.length) || 0) > 0 && (a[e] = t.answerableQuestions)
						}
						return 0 === Object.keys(a).length ? e : Object(L.assign)(e, a)
					}
					case ed.d: {
						const {
							subredditId: r,
							questionId: a
						} = t.payload, n = null !== (s = e[r]) && void 0 !== s ? s : [];
						return Object(L.setIn)(e, [r], n.filter(e => e.id !== a))
					}
					case ed.e:
						return N_;
					default:
						return e
				}
			};
			const x_ = {};
			var U_ = (e = x_, t) => {
				switch (t.type) {
					case ed.b: {
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
			const M_ = {};
			var G_ = (e = M_, t) => {
				switch (t.type) {
					case ed.c: {
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
			const F_ = {};
			var B_ = (e = F_, t) => {
				switch (t.type) {
					case ah.b: {
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
					case ah.e: {
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
					case ah.f: {
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
					case ah.g:
					case ah.d: {
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
			const H_ = {};
			var V_ = (e = H_, t) => {
				switch (t.type) {
					case ch.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case ch.f: {
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
					case Ar.m: {
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
			const q_ = {};
			var K_ = (e = q_, t) => {
				switch (t.type) {
					case ed.o: {
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
			const W_ = {};
			var $_ = (e = W_, t) => {
				switch (t.type) {
					case ed.y: {
						const {
							id: r,
							survey: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case ed.z: {
						const {
							id: r,
							response: s
						} = t.payload, a = Object(L.setIn)(e, [r, "response"], s);
						return Object(L.setIn)(a, [r, "isEligible"], !1)
					}
					default:
						return e
				}
			};
			const Q_ = {};
			var J_ = (e = Q_, t) => {
				switch (t.type) {
					case wc.g: {
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
			const z_ = [];
			var X_ = (e = z_, t) => {
				switch (t.type) {
					case ge.b:
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
			const Y_ = {};
			var Z_ = (e = Y_, t) => {
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
				eO = r("./src/reddit/actions/subredditWelcomeMessage.ts");
			const tO = {};
			var rO = (e = tO, t) => {
					switch (t.type) {
						case eO.a: {
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
				sO = Object(v.c)({
					about: CE,
					api: Sh,
					appliedFilters: jh,
					byCategory: Rh,
					communityInfo: Ph,
					crosspostable: Gh,
					duplicates: Hh,
					gov: Xh,
					models: a_,
					moderated: u_,
					notificationSettings: p_,
					onboarding: f_,
					powerupRecentSupporters: m_,
					powerups: h_,
					powerupsEmojis: g_,
					powerupTopSupporters: D_,
					productOffers: j_,
					products: R_,
					progressModule: L_,
					questions: k_,
					rankings: U_,
					rankingsPageInfo: G_,
					rules: B_,
					settings: V_,
					similar: K_,
					survey: $_,
					topContent: J_,
					trending: X_,
					unavailableModels: Z_,
					welcomeMessage: rO
				});
			const aO = {};
			var nO = Object(Ob.a)((e = aO, t) => {
					switch (t.type) {
						case K.SUBREDDIT_LOADED: {
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
							return Ee()({
								...e
							}, a)
						}
						case pd.p: {
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
				}, aO),
				cO = Object(v.c)({
					data: nO
				}),
				oO = r("./node_modules/lodash/values.js"),
				dO = r.n(oO);
			const iO = [];
			var uO = (e = iO, t) => {
				switch (t.type) {
					case Ji.d: {
						const {
							makeFavorite: r,
							multiredditsModelsState: s,
							multiredditPath: a
						} = t.payload;
						if (r) {
							const t = [...e],
								r = Ki(t, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(r, 0, a), t
						}
						return e.filter(e => e !== a)
					}
					case ve.u: {
						const {
							multireddits: e
						} = t.payload;
						return dO()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case Ji.e: {
						const {
							follow: r,
							multiredditPath: s
						} = t.payload;
						return r ? e : e.filter(e => e !== s)
					}
					case ve.j: {
						const r = t.payload;
						return e.filter(e => e !== r)
					}
					default:
						return e
				}
			};
			var lO = (e = null, t) => {
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
			var pO = (e = !1, t) => {
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
			var bO = (e = !1, t) => {
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
				fO = Object(v.c)({
					errors: lO,
					fetched: pO,
					pending: bO
				});
			const yO = [];
			var mO = (e = yO, t) => {
				switch (t.type) {
					case Ji.c: {
						const {
							profiles: e,
							favoriteProfileIds: r,
							favoriteSubredditIds: s
						} = t.payload;
						let a;
						return (a = r && r.length ? r : s ? s.filter(t => !!e[t]) : []).sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), a
					}
					case Ji.f: {
						const {
							makeFavorite: r,
							identifier: s,
							profileModels: a
						} = t.payload, {
							id: n,
							type: c
						} = s;
						if (c !== Ef.a.PROFILE) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Ki(o, n, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, n)
						} else {
							const e = o.indexOf(n);
							o.splice(e, 1)
						}
						return o
					}
					case Ji.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(t => t.type === Ef.a.PROFILE && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const EO = [];
			var hO = (e = EO, t) => {
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
							subredditModels: a
						} = t.payload, {
							id: n,
							type: c
						} = s;
						if (c !== Ef.a.SUBREDDIT) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Ki(o, n, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, n)
						} else {
							const e = o.indexOf(n);
							o.splice(e, 1)
						}
						return o
					}
					case Ji.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(t => t.type === Ef.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const _O = [],
				OO = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var IO = (e = _O, t) => {
					switch (t.type) {
						case ve.u: {
							const {
								multireddits: r
							} = t.payload, s = dO()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(OO(r));
							return Hi()(e, s) ? e : s
						}
						case Te.b: {
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
								d = qi()(e, c).sort(OO(o));
							return Hi()(e, d) ? e : d
						}
						case Ji.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: a
							} = t.payload;
							return r ? [...e, s].sort(OO(a)) : e.filter(e => e !== s)
						}
						case ve.j: {
							const r = t.payload;
							return e.filter(e => e !== r)
						}
						case ve.g:
						case ve.m: {
							const {
								multireddit: r,
								multiredditsModelsState: s
							} = t.payload, a = {
								...s,
								[r.url]: r
							};
							return [...e, r.url].sort(OO(a))
						}
						default:
							return e
					}
				},
				gO = r("./node_modules/lodash/difference.js"),
				SO = r.n(gO);
			const vO = [];
			var DO = (e = vO, t) => {
				switch (t.type) {
					case Wi.n: {
						const {
							profileOrder: r
						} = t.payload;
						return Lp()([...e, ...r])
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
							userIsSubscriber: a
						} = t.payload, n = r.filter(e => e.type === Ef.a.PROFILE);
						if (!n.length) return e;
						const c = n.map(e => e.id);
						return a ? Lp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : SO()(e, c)
					}
					default:
						return e
				}
			};
			const TO = [];
			var wO = (e = TO, t) => {
					switch (t.type) {
						case Wi.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return Lp()([...e, ...r])
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
								userIsSubscriber: a
							} = t.payload, n = r.filter(e => e.type === Ef.a.SUBREDDIT && !!e.id);
							if (!n.length) return e;
							const c = n.map(e => e.id);
							return a ? Lp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : SO()(e, c)
						}
						default:
							return e
					}
				},
				jO = Object(v.c)({
					api: fO,
					favoriteMultiOrder: uO,
					favoriteProfileOrder: mO,
					favoriteSubredditOrder: hO,
					multiredditOrder: IO,
					profileOrder: DO,
					subredditOrder: wO
				}),
				AO = r("./src/reddit/actions/survey/constants.ts");
			var RO = (e = null, t) => {
				switch (t.type) {
					case AO.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var CO = (e = 1, t) => {
				switch (t.type) {
					case AO.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var PO = (e = !1, t) => {
				switch (t.type) {
					case AO.b:
						return !e;
					default:
						return e
				}
			};
			var LO = (e = !0, t) => {
					switch (t.type) {
						case AO.h:
							return !e;
						default:
							return e
					}
				},
				NO = Object(v.c)({
					activeDemoTrigger: RO,
					demoTriggerThreshold: CO,
					isDemoEnabled: PO,
					isSampleFactorEnabled: LO
				}),
				kO = r("./src/reddit/actions/tabBadging.ts");
			var xO = (e = !1, t) => {
					switch (t.type) {
						case kO.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				UO = r("./src/reddit/actions/tags/constants.ts");
			const MO = {
				pending: !1,
				error: !1
			};
			var GO = (e = MO, t) => {
				switch (t.type) {
					case UO.l:
						return {
							...e, pending: !0
						};
					case UO.m:
						return {
							error: !1, pending: !1
						};
					case UO.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const FO = {
				pending: !1,
				error: !1
			};
			var BO = (e = FO, t) => {
				switch (t.type) {
					case UO.o:
						return {
							...e, pending: !0
						};
					case UO.p:
						return {
							error: !1, pending: !1
						};
					case UO.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const HO = {
				pending: !1,
				error: !1
			};
			var VO = (e = HO, t) => {
				switch (t.type) {
					case UO.t:
						return {
							...e, pending: !0
						};
					case UO.s:
					case UO.r:
					case UO.e:
					case UO.j:
						return {
							error: !1, pending: !1
						};
					case UO.q:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const qO = {
				pending: !1,
				error: !1
			};
			var KO = (e = qO, t) => {
				switch (t.type) {
					case UO.v:
						return {
							...e, pending: !0
						};
					case UO.w:
						return {
							error: !1, pending: !1
						};
					case UO.u:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const WO = {
				pending: !1,
				error: !1
			};
			var $O = (e = WO, t) => {
					switch (t.type) {
						case UO.g:
							return {
								...e, pending: !0
							};
						case UO.h:
							return {
								error: !1, pending: !1
							};
						case UO.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				QO = Object(v.c)({
					create: GO,
					deleteTag: BO,
					fetch: VO,
					update: KO,
					updatePrimaryTag: $O
				});
			const JO = {
				global: [],
				recommendedGlobal: []
			};
			var zO = (e = JO, t) => {
					switch (t.type) {
						case UO.w:
						case UO.r:
						case UO.e:
						case UO.j: {
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
				XO = r("./node_modules/lodash/uniqWith.js"),
				YO = r.n(XO),
				ZO = r("./src/reddit/models/Option/index.ts");
			const eI = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var tI = (e = eI, t) => {
					switch (t.type) {
						case UO.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: YO()([...e.selectedOptions || [], {
									...r
								}], ZO.a)
							}
						}
						case UO.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(ZO.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case UO.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case UO.a: {
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
			var aI = (e = sI, t) => {
					switch (t.type) {
						case UO.j: {
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
						case UO.w:
						case UO.s:
						case UO.r: {
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
								geoPlaces: d ? Object(L.set)(e.geoPlaces, o, d) : e.geoPlaces,
								suggestedItemTags: {
									...e.suggestedItemTags,
									[o]: {
										...c[o] || {}
									}
								},
								sortedItemTags: {
									...e.sortedItemTags,
									[o]: Object(rI.a)(n[o] || {})
								}
							}
						}
						case UO.p: {
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
						case UO.e: {
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
						case UO.h: {
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
				nI = r("./src/reddit/reducers/tags/selected/index.ts"),
				cI = Object(v.c)({
					api: QO,
					availableGlobalTagOrder: zO,
					models: aI,
					selected: nI.b,
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
						case jr.a:
						case jr.b:
						case jr.h:
						case jr.i:
						case jr.f:
						case jr.j:
						case De.e:
						case De.h:
						case F.a:
						case F.e:
						case F.b:
						case F.f:
						case F.d:
						case F.h:
						case ge.b:
						case K.SUBREDDIT_LOADED:
						case Te.b:
						case Te.a:
						case ge.f:
						case oI.b:
						case $.i:
						case Pe.e:
						case q.SEARCH_RESULTS_RECEIVED:
						case Ar.i:
						case we.PAGE_LOADED:
						case Cs.PAGE_LOADED:
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
						case je.a:
						case je.b:
						case je.d:
						case je.e:
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
									current: uI.b,
									cached: {}
								} : {
									current: uI.c,
									cached: {}
								}
							}
							return e;
						case Ar.h: {
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
			var yI = (e = fI, t) => {
					switch (t.type) {
						case bI.c: {
							const r = t.payload,
								s = [];
							let a = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), a = a || e === r
							}
							return a || s.push(r), s
						}
						case bI.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				mI = r("./src/reddit/actions/tooltip.ts");
			var EI = (e = null, t) => {
					switch (t.type) {
						case mI.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case mI.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case mI.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case mI.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case ee.K:
						case mI.d:
						case u.a:
						case oo.b:
						case oo.c:
						case oo.a:
							return null;
						default:
							return e
					}
				},
				hI = r("./src/reddit/actions/tracing.ts");
			const _I = {
				traceId: void 0
			};
			var OI = (e = _I, t) => {
					switch (t.type) {
						case hI.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				II = r("./src/lib/asyncActions/index.ts"),
				gI = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const SI = Object(II.c)(gI.c.requestedActionType, gI.c.succeededActionType, gI.c.failedActionType),
				vI = Object(II.c)(gI.a.requestedActionType, gI.a.succeededActionType, gI.a.failedActionType),
				DI = Object(II.c)(gI.d.requestedActionType, gI.d.succeededActionType, gI.d.failedActionType);
			var TI = Object(v.c)({
					load: SI,
					execute: vI,
					send: DI
				}),
				wI = r("./src/reddit/actions/tracking.ts");
			const jI = {};
			var AI = (e = jI, t) => {
					switch (t.type) {
						case wI.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case wI.b: {
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
				RI = Object(v.c)({
					reCaptchaEnterprise: TI,
					viewportDataLoaded: AI
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
				NI = Object(v.c)({
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
				UI = Object(v.c)({
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
			var GI = (e = "", t) => {
				switch (t.type) {
					case d.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case d.t:
						return "";
					default:
						return e
				}
			};
			var FI = (e = null, t) => {
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
				BI = Object(v.c)({
					api: UI,
					contentId: MI,
					initialRecipient: GI,
					publicAddress: FI
				}),
				HI = Object(v.c)({
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
				WI = Object(v.c)({
					models: KI
				});
			var $I = r("./src/reddit/routes/premium/index.ts");
			const QI = {};
			var JI = (e = QI, t) => {
					switch (t.type) {
						case qf.a: {
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
			const YI = {};
			var ZI = (e = YI, t) => {
					switch (t.type) {
						case zI.d: {
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
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									metadata: s
								}
							}
						}
						case zI.e: {
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
						case zI.g: {
							const {
								key: r,
								url: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									status: XI.a.SUCCESS,
									url: s
								}
							}
						}
						case zI.b: {
							const {
								key: r,
								error: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
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
							return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), Rs()(e, r)
						}
						default:
							return e
					}
				},
				eg = r("./src/reddit/actions/upvotePrompt.ts");
			var tg = (e = 0, t) => {
				switch (t.type) {
					case eg.a:
						return ++e;
					default:
						return e
				}
			};
			const rg = {};
			var sg = (e = rg, t) => {
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
				ag = r("./src/reddit/actions/accountGender/constants.ts"),
				ng = r("./src/reddit/actions/inbox.ts"),
				cg = r("./src/reddit/actions/pages/appeal/constants.ts"),
				og = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				dg = r("./src/reddit/actions/sso/constants.ts");
			const ig = (e, t) => {
				const {
					gender: r,
					...s
				} = {
					...e
				};
				if (!t || Hi()(s, t)) return e;
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
			var ug = Object(Ob.a)((e = null, t) => {
				switch (t.type) {
					case cg.a:
					case cg.b:
					case Fy.b:
					case Fy.c:
					case jr.a:
					case jr.b:
					case jr.f:
					case jr.h:
					case jr.i:
					case jr.j:
					case De.e:
					case De.h:
					case De.g:
					case ve.q:
					case ve.r:
					case F.a:
					case F.e:
					case F.b:
					case F.f:
					case ge.a:
					case ge.b:
					case Te.a:
					case Te.b:
					case K.SUBREDDIT_FAILED:
					case Wi.l:
					case B.b:
					case B.a:
					case B.e:
					case B.d:
					case V.c:
					case V.i:
					case je.e:
					case je.d:
					case je.b:
					case je.a:
					case H.PROFILE_POSTS_LOADED:
					case H.PROFILE_POSTS_FAILED:
					case K.SUBREDDIT_LOADED:
					case q.SEARCH_FAILED:
					case q.SEARCH_RESULTS_RECEIVED:
					case we.PAGE_LOADED:
					case Cs.PAGE_LOADED:
					case Pe.c:
					case Pe.e:
					case oI.a:
					case oI.b:
					case Ar.i:
					case og.b:
					case iI.c:
					case zo.TOPIC_DATA_LOADED:
						return ig(e, t.payload.account);
					case iI.n:
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
							response: r
						} = t.payload;
						return r ? ig(e, r.account) : e
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
					case Ar.k:
					case Ar.j: {
						const r = t.payload;
						return e && "profileIcon" === r.key ? {
							...e,
							accountIcon: r.imageUrl
						} : e
					}
					case ee.C:
					case ee.t: {
						const {
							coins: r
						} = t.payload;
						return e ? {
							...e,
							coins: r
						} : e
					}
					case ee.a: {
						const {
							userName: r,
							awarderKarma: s,
							awardeeKarma: a
						} = t.payload;
						if (r.toLowerCase() !== (e && Object(J.e)(e).toLowerCase())) return e;
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
					case Se.w: {
						const {
							coins: r
						} = t.payload;
						return r && e ? {
							...e,
							coins: r
						} : e
					}
					case Pu.h: {
						const {
							price: r
						} = t.payload;
						return (null == e ? void 0 : e.coins) && r ? {
							...e,
							coins: e.coins - r
						} : e
					}
					case ng.a: {
						const {
							inboxCount: r
						} = t.payload;
						return e ? {
							...e,
							inboxCount: r
						} : e
					}
					case dg.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case dg.b: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: s.filter(e => e !== r)
						} : e
					}
					case Eo.c: {
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
					case ag.a:
					case ag.b: {
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
			var lg = (e = null, t) => {
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
			var pg = (e = !1, t) => {
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
				bg = Object(v.c)({
					error: lg,
					pending: pg
				}),
				fg = Object(v.c)({
					api: bg
				});
			var yg = (e = !1, t) => {
				switch (t.type) {
					case iI.j:
						return !0;
					default:
						return e
				}
			};
			var mg = (e = !1, t) => {
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
				Eg = Object(v.c)({
					pending: mg,
					emailSent: yg
				}),
				hg = Object(v.c)({
					api: Eg
				}),
				_g = Object(v.c)({
					changeEmail: fg,
					sendResetEmail: hg
				}),
				Og = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const Ig = {};
			var gg = (e = Ig, t) => {
				switch (t.type) {
					case mt.f:
						return {
							...e, new: Og.a.pending
						};
					case mt.d:
						return {
							...e, new: Og.a.error
						};
					case mt.e:
						return {
							...e, new: Og.a.waitingForRequest
						};
					case mt.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Og.a.pending
						}
					}
					case mt.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Og.a.error
						}
					}
					case mt.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Og.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const Sg = [];
			var vg = (e = Sg, t) => {
					switch (t.type) {
						case mt.e:
							return [t.payload, ...e];
						case mt.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case Ar.i:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				Dg = Object(v.c)({
					api: gg,
					data: vg
				}),
				Tg = r("./src/reddit/actions/chat/constants.ts"),
				wg = r("./src/reddit/actions/chat/userSettings.ts");
			const jg = Tg.a.anybody;
			var Ag = (e = jg, t) => {
					switch (t.type) {
						case wg.a:
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
				Rg = Object(v.c)({
					invitePolicy: Ag
				});
			const Cg = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var Pg = (e = null, t) => {
				switch (t.type) {
					case we.PAGE_LOADED: {
						const {
							drafts: r
						} = t.payload;
						return e && Hi()(e, r) ? e : {
							...e,
							...r
						}
					}
					case es.L: {
						const {
							response: {
								draftsCount: r
							}
						} = t.payload;
						return Cg(e, r)
					}
					case Fr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return Cg(e, r.length)
					}
					case Fr.c:
					case Fr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return Cg(e, r)
					}
					default:
						return e
				}
			};
			const Lg = {};
			var Ng = (e = Lg, t) => {
					switch (t.type) {
						case Fn.a: {
							const e = t.payload.experimentVariants;
							return hu(e)
						}
						default:
							return e
					}
				},
				kg = r("./src/reddit/actions/global/constants.ts");
			const xg = {};
			var Ug = (e = xg, t) => {
					switch (t.type) {
						case kg.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				Mg = Object(v.c)({
					byName: Ng,
					localPersisted: Ug
				}),
				Gg = r("./src/reddit/actions/googleOneTap/index.ts");
			var Fg = (e = !1, t) => {
				switch (t.type) {
					case Gg.a:
						return !0;
					default:
						return e
				}
			};
			var Bg = (e = !1, t) => {
				switch (t.type) {
					case Ar.e:
						return !0;
					case Ar.d:
						return !1;
					default:
						return e
				}
			};
			var Hg = (e = "", t) => {
				switch (t.type) {
					case Ar.i:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const Vg = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var qg = (e = Vg, t) => {
					switch (t.type) {
						case iI.b:
							return t.payload;
						default:
							return e
					}
				},
				Kg = r("./src/reddit/actions/notifications/constants.ts"),
				Wg = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var $g = (e = null, t) => {
				switch (t.type) {
					case Wg.a:
					case Wg.d:
					case Kg.a:
						return t.payload && t.payload.error || null;
					case Wg.c:
					case Wg.f:
					case Wg.a:
					case Kg.c:
					case Kg.b:
						return null;
					default:
						return e
				}
			};
			var Qg = (e = !1, t) => {
				switch (t.type) {
					case Kg.c:
						return !1;
					case Kg.b:
						return !0;
					default:
						return e
				}
			};
			var Jg = (e = !1, t) => {
					switch (t.type) {
						case Kg.c:
							return !0;
						case Kg.b:
						case Kg.a:
							return !1;
						default:
							return e
					}
				},
				zg = Object(v.c)({
					error: $g,
					loaded: Qg,
					pending: Jg
				});
			var Xg = (e = null, t) => {
				switch (t.type) {
					case Kg.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case Kg.f:
					case Kg.e:
						return null;
					default:
						return e
				}
			};
			var Yg = (e = !1, t) => {
				switch (t.type) {
					case Kg.f:
						return !1;
					case Kg.e:
						return !0;
					default:
						return e
				}
			};
			var Zg = (e = !1, t) => {
					switch (t.type) {
						case Kg.f:
							return !0;
						case Kg.e:
						case Kg.d:
							return !1;
						default:
							return e
					}
				},
				eS = Object(v.c)({
					error: Xg,
					loaded: Yg,
					pending: Zg
				}),
				tS = Object(v.c)({
					getPreferences: zg,
					setPreferences: eS
				});
			const rS = {
				byId: {},
				allIds: []
			};
			var sS = (e = rS, t) => {
				switch (t.type) {
					case Wg.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case Wg.g: {
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
			const aS = {
				byId: {},
				allIds: []
			};
			var nS = (e = aS, t) => {
					switch (t.type) {
						case Wg.b: {
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
				cS = Object(v.c)({
					sections: nS,
					rows: sS
				}),
				oS = r("./src/lib/notifications/constants.ts");
			var dS = (e = !1, t) => {
				switch (t.type) {
					case oS.j:
						return !0;
					case oS.b:
					case oS.d:
					case oS.e:
						return !1;
					default:
						return e
				}
			};
			const iS = {
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
			var uS = (e = iS, t) => {
				switch (t.type) {
					case Kg.b:
					case Kg.f:
					case Kg.d: {
						const {
							preferences: r
						} = t.payload;
						return Xa()(r) ? e : r
					}
					default:
						return e
				}
			};
			const lS = {
				byId: {},
				allIds: []
			};
			var pS = (e = lS, t) => {
				switch (t.type) {
					case Wg.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case Wg.g: {
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
			const bS = {
				byId: {},
				allIds: []
			};
			var fS = (e = bS, t) => {
					switch (t.type) {
						case Wg.e: {
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
				yS = Object(v.c)({
					sections: fS,
					rows: pS
				}),
				mS = Object(v.c)({
					api: tS,
					emailSettingsLayout: cS,
					isNotificationPromptVisible: dS,
					preferences: uS,
					pushSettingsLayout: yS
				});
			const ES = {};
			var hS = (e = ES, t) => {
				switch (t.type) {
					case o.i:
					case $e.h: {
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
					case l.d: {
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
			const _S = {},
				OS = (e, t) => `${e}_${t||new Date}`;
			var IS = (e = _S, t) => {
				switch (t.type) {
					case ee.yb: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[OS(t.subredditInfo.id, t.allocatedAt)]: t
							}), {});
							return {
								...e,
								...s
							}
						}
						return e
					}
					case ee.nb: {
						const {
							userPowerups: r
						} = t.payload, s = ((null == r ? void 0 : r.allocation) || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
							...e,
							[OS(t.subredditInfo.id, t.allocatedAt)]: t
						}), {});
						return {
							...e,
							...s
						}
					}
					case ee.T: {
						const {
							subredditId: r,
							powerupsCount: s,
							allocatedAt: a
						} = t.payload;
						if (s < 0) {
							const t = OS(r, a),
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
					case ee.O: {
						const {
							subredditId: r,
							allocatedAt: s
						} = t.payload, a = OS(r, s), n = e[a];
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
			var gS = (e = null, t) => {
				switch (t.type) {
					case ee.yb: {
						const r = t.payload.powerups;
						return r ? Rs()({
							...e,
							...r
						}, "allocation") : e
					}
					case ee.nb: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? Rs()({
							...e,
							...r
						}, "allocation") : e
					}
					case ee.T: {
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
					case ee.U: {
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
			var SS, vS = (e = !1, t) => {
					switch (t.type) {
						case ee.xb:
						case ee.zb:
							return !1;
						case ee.yb:
							return !0;
						default:
							return e
					}
				},
				DS = Object(v.c)({
					allocationByKey: IS,
					data: gS,
					fetched: vS
				}),
				TS = r("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(SS || (SS = {}));
			const wS = {
				status: SS.UNFETCHED,
				subscriptions: []
			};
			var jS = (e = wS, t) => {
				switch (t.type) {
					case ee.Cb:
						return {
							...e, status: SS.PENDING
						};
					case ee.Bb: {
						const {
							subscriptions: r
						} = t.payload;
						return r ? {
							...e,
							subscriptions: r,
							status: SS.LOADED
						} : e
					}
					case ee.Ab:
						return {
							...e, status: SS.FAILED
						};
					default:
						return e
				}
			};
			var AS = (e = "", t) => {
				switch (t.type) {
					case iI.d:
						return t.payload;
					default:
						return e
				}
			};
			var RS = (e = null, t) => {
				switch (t.type) {
					case ky.a:
					case ky.b:
					case ky.c:
					case ky.e:
						return t.payload;
					case ky.d:
						return null;
					default:
						return e
				}
			};
			var CS = (e = !1, t) => {
				switch (t.type) {
					case ky.f:
						return !0;
					default:
						return e
				}
			};
			var PS = (e = "", t) => {
				switch (t.type) {
					case iI.k:
						return t.payload;
					default:
						return e
				}
			};
			var LS = (e = null, t) => {
				switch (t.type) {
					case Fn.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var NS = (e = null, t) => {
					switch (t.type) {
						case Fn.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				kS = Object(v.c)({
					isEmployee: LS,
					isLoggedIn: NS
				});
			var xS = (e = null, t) => {
					switch (t.type) {
						case Ar.q: {
							const {
								topContentDismissal: r
							} = t.payload;
							return e && Hi()(e, r) ? e : {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				US = r("./src/reddit/actions/userWhitelist.ts");
			const MS = {};
			var GS = (e = MS, t) => {
				switch (t.type) {
					case US.e:
						return {
							...e, new: Og.a.pending
						};
					case US.d:
						return {
							...e, new: Og.a.error
						};
					case US.f:
						return {
							...e, new: Og.a.waitingForRequest
						};
					case US.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Og.a.pending
						}
					}
					case US.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Og.a.error
						}
					}
					case US.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Og.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const FS = [];
			var BS = (e = FS, t) => {
					switch (t.type) {
						case US.f:
							return [t.payload, ...e];
						case US.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case Ar.i:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				HS = Object(v.c)({
					api: GS,
					data: BS
				}),
				VS = Object(v.c)({
					account: ug,
					accountSettings: _g,
					blocked: Dg,
					chatSettings: Rg,
					drafts: Pg,
					experiments: Mg,
					googleOneTapEnabled: Fg,
					isCustomizeFlyoutShowing: Bg,
					topContentDismissalPrefsSet: xS,
					language: Hg,
					loid: qg,
					notificationPrefs: mS,
					ownedBadges: hS,
					powerups: DS,
					prefs: TS.c,
					productOfferSubscriptions: jS,
					reddaid: AS,
					session: RS,
					sessionRefreshFailed: CS,
					sessionTracker: PS,
					temporaryGQL: kS,
					wallets: sg,
					whitelist: HS
				});
			var qS = (e = null, t) => {
				switch (t.type) {
					case og.a:
						return t.payload || null;
					case og.b:
					case og.c:
						return null;
					default:
						return e
				}
			};
			var KS = (e = !1, t) => {
				switch (t.type) {
					case og.c:
						return !0;
					case og.b:
					case og.a:
						return !1;
					default:
						return e
				}
			};
			var WS = (e = !1, t) => {
				switch (t.type) {
					case og.b:
						return !0;
					case og.a:
					case og.c:
						return !1;
					default:
						return e
				}
			};
			var $S = (e = !1, t) => {
					switch (t.type) {
						case og.b:
							return t.payload.userDataExportEligibility;
						case og.a:
						case og.c:
							return !1;
						default:
							return e
					}
				},
				QS = Object(v.c)({
					error: qS,
					pending: KS,
					success: WS,
					userDataExportEligibility: $S
				}),
				JS = Object(v.c)({
					userDataRequestPageApi: QS
				});
			const zS = {};
			var XS = (e = zS, t) => {
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
			var YS = (e = !1, t) => {
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
				ZS = Object(v.c)({
					error: XS,
					pending: YS
				});
			const ev = {};
			var tv = (e = ev, t) => {
				switch (t.type) {
					case $e.e: {
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
					case $e.b: {
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
					case $e.a: {
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
					case o.a: {
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
			const rv = {},
				sv = (e, t) => {
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					return r.forEach(r => {
						const a = e[r],
							n = t[r];
						a && Hi()(a, n) || (s[r.toLowerCase()] = n)
					}), Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var av = (e = rv, t) => {
					switch (t.type) {
						case iI.f: {
							const {
								data: r
							} = t.payload;
							return sv(e, r)
						}
						case Wi.k: {
							const {
								user: r
							} = t.payload;
							return sv(e, {
								[r.username]: r
							})
						}
						case ee.t: {
							const {
								gildee: r
							} = t.payload;
							if (!r) return e;
							const s = e[r.toLowerCase()];
							if (!s) return e;
							const a = s.awardedLastMonth,
								n = a ? a.totalCount + 1 : 1,
								c = a && a.topAward;
							return c ? sv(e, {
								[r.toLowerCase()]: {
									...s,
									awardedLastMonth: {
										totalCount: n,
										topAward: c
									}
								}
							}) : e
						}
						case ee.a: {
							const {
								userName: r,
								awardeeKarma: s,
								awarderKarma: a
							} = t.payload, n = e[r.toLowerCase()];
							if (!n) return e;
							const c = s || n.awardeeKarma,
								o = a || n.awarderKarma;
							return sv(e, {
								[r.toLowerCase()]: {
									...n,
									awardeeKarma: c,
									awarderKarma: o,
									totalKarma: c + o + n.postKarma + n.commentKarma
								}
							})
						}
						case Ar.k:
						case Ar.j: {
							const {
								imageUrl: r,
								key: s,
								username: a
							} = t.payload;
							if ("profileIcon" !== s) return e;
							const n = a.toLowerCase(),
								c = e[n];
							return c ? sv(e, {
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
				nv = r("./src/reddit/actions/usernameAvailable.ts");
			const cv = {};
			var ov = (e = cv, t) => {
				switch (t.type) {
					case nv.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: nv.b.Available
						}
					}
					case nv.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: nv.b.Error
						}
					}
					case nv.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: nv.b.Pending
						}
					}
					case nv.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: nv.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const dv = {};
			var iv = (e = dv, t) => {
				switch (t.type) {
					case ee.eb: {
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
			var uv = (e = !1, t) => {
					switch (t.type) {
						case ee.db:
						case ee.fb:
							return !1;
						case ee.eb:
							return !0;
						default:
							return e
					}
				},
				lv = Object(v.c)({
					allocationByKey: iv,
					fetched: uv
				}),
				pv = r("./src/reddit/actions/presence.ts");
			const bv = {};
			var fv = (e = bv, t) => {
				switch (t.type) {
					case pv.a:
						return {
							...e, ...t.payload.presentUsers
						};
					default:
						return e
				}
			};
			var yv = (e = null, t) => {
				switch (t.type) {
					case ee.tb:
						return t.payload;
					case ee.vb:
					case ee.ub:
						return null;
					default:
						return e
				}
			};
			var mv = (e = !1, t) => {
					switch (t.type) {
						case ee.ub:
						case ee.tb:
							return !1;
						case ee.vb:
							return !0;
						default:
							return e
					}
				},
				Ev = Object(v.c)({
					error: yv,
					pending: mv
				});
			var hv = (e = null, t) => {
				switch (t.type) {
					case ee.wb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const _v = {};
			var Ov = (e = _v, t) => {
				switch (t.type) {
					case ee.ub: {
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
			const Iv = {};
			var gv = (e = Iv, t) => {
					switch (t.type) {
						case ee.ub: {
							const {
								postId: r,
								topAwardersRank: s
							} = t.payload;
							return {
								...e,
								[r]: (s || []).sort((e, t) => e.rank - t.rank)
							}
						}
						case ee.t: {
							const {
								id: r
							} = t.payload;
							return Rs()(e, [r])
						}
						default:
							return e
					}
				},
				Sv = Object(v.c)({
					api: Ev,
					currentPostId: hv,
					currentRank: Ov,
					list: gv
				}),
				vv = Object(v.c)({
					api: ZS,
					appliedBadges: tv,
					models: av,
					nameAvailable: ov,
					topAwarders: Sv,
					powerups: lv,
					presence: fv
				});
			const Dv = {};
			var Tv = (e = Dv, t) => {
					switch (t.type) {
						case F.b:
						case F.f:
						case K.SUBREDDIT_LOADED:
						case $.i:
						case q.SEARCH_RESULTS_RECEIVED:
						case we.PAGE_LOADED:
						case Cs.PAGE_LOADED: {
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
				wv = r("./src/reddit/actions/widgets/constants.ts");
			const jv = {};
			var Av = (e = jv, t) => {
					switch (t.type) {
						case F.b:
						case F.f:
						case q.SEARCH_RESULTS_RECEIVED:
						case $.i:
						case K.SUBREDDIT_LOADED:
						case we.PAGE_LOADED: {
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
						case wv.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case wv.h: {
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
				Rv = r("./src/reddit/models/Widgets/index.ts");
			const Cv = {};
			var Pv = (e = Cv, t) => {
				switch (t.type) {
					case K.SUBREDDIT_LOADED: {
						const r = t.payload,
							s = r.structuredStyles && r.structuredStyles.data && r.structuredStyles.data.content;
						if (!s) return e;
						const a = s.widgets;
						return {
							...e,
							...a.items
						}
					}
					case wv.b: {
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
								styles: Object(Rv.m)()
							}
						}), t
					}
					case wv.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case wv.i:
					case wv.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case wv.h: {
						const r = t.payload,
							s = {
								...e
							};
						return delete s[r.widgetId], s
					}
					case F.b:
					case F.f:
					case K.SUBREDDIT_LOADED:
					case $.i:
					case q.SEARCH_RESULTS_RECEIVED:
					case we.PAGE_LOADED:
					case Cs.PAGE_LOADED: {
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
					case ch.f: {
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
			const Lv = {};
			var Nv = (e = Lv, t) => {
				switch (t.type) {
					case K.SUBREDDIT_LOADED:
					case F.f:
					case $.i:
					case we.PAGE_LOADED: {
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
			const kv = {};
			var xv = (e = kv, t) => {
				switch (t.type) {
					case K.SUBREDDIT_LOADED:
					case we.PAGE_LOADED:
					case Cs.PAGE_LOADED: {
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
					case wv.e:
					case wv.b: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgets.layout.sidebar.order
						}
					}
					case wv.f: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgetIds
						}
					}
					case wv.g: {
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
					case wv.h: {
						const r = t.payload;
						if (!e[r.subredditId]) return e;
						const s = e[r.subredditId].filter(e => e !== r.widgetId);
						return {
							...e,
							[r.subredditId]: s
						}
					}
					case F.b:
					case F.f:
					case K.SUBREDDIT_LOADED:
					case q.SEARCH_RESULTS_RECEIVED:
					case $.i:
					case we.PAGE_LOADED:
					case Cs.PAGE_LOADED: {
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
			const Uv = {
				accountManagerModalData: n,
				activeModal: y,
				ads: O,
				apiRequestState: S,
				appBadges: C,
				authorFlair: Z,
				awards: We,
				badges: ot,
				blockedRedditors: yt,
				blockUser: gt,
				brandSafety: vt,
				chat: ar,
				claimGold: pr,
				commentsListTruncated: fr,
				communityFlairs: Er,
				contentControls: wr,
				contentGate: Cr,
				continueThreads: Nr,
				creations: Ba,
				dashboard: qa,
				discoveryUnits: nn,
				dismissedTruncationList: dn,
				economics: Cn,
				emojis: Gn,
				experimentOverrides: qn,
				externalAccount: _c,
				featureFlags: Tc,
				focusedVerticals: Gc,
				fontFiles: Bc,
				gild: eo,
				header: uo,
				htmlResponseStreaming: lo,
				imageUploads: fo,
				interceptedAction: mo,
				isChangeUsernameTooltipShowing: ho,
				isEmailVerificationTooltipShowing: Oo,
				isModeratorWithPostPerms: go,
				jsApi: Do,
				leaderboard: No,
				listings: Sd,
				live: jd,
				mediaGalleries: Nd,
				mediaPlayback: Ud,
				meta: Fd,
				moderatingSubreddits: Vd,
				moderationPromptId: qd,
				modListingPage: Xd,
				modModeEnabled: Zd,
				moreComments: di,
				multireddits: tu,
				notificationBannerId: su,
				notificationsInbox: bu,
				nps: mu,
				page: gu,
				platform: Du,
				postCollection: el,
				polls: Hu,
				postFlair: cl,
				posts: _b,
				postStickiedComments: Sb,
				givePremium: no,
				products: Mb,
				profileCommentsPage: Zb,
				profilePrivatePage: mf,
				profileModSettingsPage: sf,
				profilePostsPage: nf,
				profiles: Jf,
				promos: ey,
				publicAccessNetwork: Ly,
				recentSubreddits: Uy,
				recommendations: Gy,
				reportPage: Jy,
				reportRules: Yy,
				requestHost: Zy,
				runTimeEnvVars: tm,
				search: ym,
				searchDiscoveryUnits: Sm,
				seo: Cm,
				shortcuts: Bm,
				sidebarPromotedPosts: qm,
				streaming: Ym,
				structuredStyles: EE,
				stylesheets: hE,
				subredditAutocomplete: wE,
				subreddits: sO,
				subredditStickyPosts: cO,
				subscriptions: jO,
				survey: NO,
				tabBadged: xO,
				tags: cI,
				themes: pI,
				toaster: yI,
				tooltipId: EI,
				tracing: OI,
				tracking: RI,
				trafficStats: NI,
				transfers: HI,
				trending: WI,
				trophies: JI,
				uploads: ZI,
				user: VS,
				userDataRequestPage: JS,
				upvotePromptCountPerSess: tg,
				users: vv,
				widgets: Object(v.c)({
					idCardIds: Tv,
					menuIds: Av,
					models: Pv,
					moderatorIds: Nv,
					sidebar: xv
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
					experimentName: a.U,
					expEventOverride: !1
				}), e => e),
				u = e => e === a.N.Onetap,
				l = e => e === a.N.OnetapAuto,
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
						experimentName: s.Pc
					}) === s.Yc.Enabled
				},
				c = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: a.a,
						experimentName: s.Oc
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.0e84c70e53b057f7c485.js.map