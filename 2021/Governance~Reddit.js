// https://www.redditstatic.com/desktop2x/Governance~Reddit.355b8b396286022473b9.js
// Retrieved at 6/30/2021, 1:20:04 PM by Reddit Dataminer v1.0.0
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
					e(j());
					try {
						const t = await p(r(), s);
						t.error ? e(C(t)) : e(L())
					} catch (a) {
						e(C(a))
					}
				}, w = Object(a.a)(g), A = Object(a.a)(S), j = () => async (e, t) => {
					e(A()), window.setTimeout(() => {
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
					await r(Object(p.k)(e, {
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
				return j
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
				return V
			})), r.d(t, "j", (function() {
				return H
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
				A = Object(p.a)(T),
				j = "GET_ALL_EMOJIS_PENDING",
				R = "GET_ALL_EMOJIS_LOADED",
				C = "GET_ALL_EMOJIS_FAILED",
				P = Object(p.a)(j),
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
						l = Object(g.U)(n, {
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
					} = e, y = Object(m.a)(n.url), E = s(), h = Object(g.U)(E, {
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
					const n = Object(g.U)(a, {
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
				}, V = e => async (t, r, {
					apiContext: s
				}) => {
					r().emojis[e] || await t(B(e))
				}, H = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const i = a(),
						l = Object(g.U)(i, {
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
					} else r(A(p.error)), r(f.f({
						kind: O.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, q = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const i = a(),
						l = Object(g.U)(i, {
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
						l = Object(g.U)(i, {
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
						b = Object(g.U)(p, {
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
						d = Object(u.U)(c, {
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
					title: c.g()
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
				A = Object(d.a)(v),
				j = Object(d.a)(D),
				R = e => async (t, r) => {
					const s = {
						subredditId: e
					};
					return !!Object(I.b)(r(), s) || (t(A(s)), !1)
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
					experimentName: b.Zc
				}),
				A = Object(s.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				j = Object(s.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
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
							e(A.requested());
							try {
								await d.b.loadScript(), e(A.succeeded())
							} catch (t) {
								throw e(A.failed()), t
							}
						}))());
						const r = await t((e => u(e => p()([T, w, e => e.tracking.reCaptchaEnterprise.load === s.a.Succeeded && e.tracking.reCaptchaEnterprise.execute === s.a.New], t => t(e)))(async t => {
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
					const n = Object(l.U)(r(), {
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
				return A
			})), r.d(t, "g", (function() {
				return j
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
				A = e => async (t, r, {
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
				}, j = e => async (t, r, {
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
				}, j = (e, t = !1) => (r, s) => {
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
						s.startsWith(e) && r(j(s, t))
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
						experimentName: d.Id
					});
					let a = "";
					return (null == r ? void 0 : r.variant) === d.Jd.Variant1 ? a = t ? s.fbt._("Was that a good post? Upvote it so it gets seen by more people", null, {
						hk: "2NOllx"
					}) : s.fbt._("Was this a good post? Upvote it so it gets seen by more people", null, {
						hk: "K1yBi"
					}) : (null == r ? void 0 : r.variant) === d.Jd.Variant2 && (a = t ? s.fbt._("If you enjoyed that post, upvote it so that more redditors will see it too.", null, {
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
			const A = Object(n.b)(() => Object(l.c)({
					currentPage: _.b,
					nightmode: I.W
				})),
				j = Object(y.t)(),
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
					let A;
					n && (A = this.generateFullSearchQuery(n));
					const j = s ? Object(O.getPageTypeFromCurrentPage)(s) : b ? Object(O.getPageTypeFromCurrentPage)(b) : void 0,
						C = y.isProfile || y.isSubreddit ? {
							[f.a.ClickSource]: "search_dropdown",
							[f.a.ClickId]: D()()
						} : void 0;
					return a.a.createElement(i.a, {
						"aria-label": y.searchQuery,
						className: Object(o.a)(w.a.listItem, S.a.item, r, {
							[w.a.mFocused]: !(!n || n.section !== h.c.recent || A !== T)
						}),
						onClick: this.onRecentSearchItemClick,
						key: T,
						role: "link",
						tabIndex: -1,
						to: {
							pathname: g && u(g) || "",
							state: {
								...C,
								[f.a.SearchOriginPage]: j
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
			var P = j(A(C)),
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
			class V extends a.a.Component {
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
			var H = Object(y.t)()(B(V)),
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
				})), m && !e.isInUISimplificationI18NExperiment && e.isInTrendingExperiment && l.map(t => a.a.createElement(H, {
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
						r[t.subredditName] = Object(l.A)(e, {
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
				inputExp: "_2LYbyIRoAAxzwenb61YLcr",
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
				return xv
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
				A = Object(v.c)({
					error: T,
					pending: w
				});
			const j = {};
			var R = (e = j, t) => {
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
				G = r("./src/reddit/actions/modQueue/constants.ts"),
				F = r("./src/reddit/actions/pages/constants.ts"),
				B = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				V = r("./src/reddit/actions/pages/profilePosts.ts"),
				H = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
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
					case H.c:
					case H.i:
					case H.e:
					case H.g:
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
					case V.PROFILE_POSTS_LOADED:
					case V.MORE_POSTS_LOADED:
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
			var ae = (e = !1, t) => {
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
				ne = Object(v.c)({
					error: se,
					pending: ae
				}),
				ce = Object(v.c)({
					api: ne
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
							} = t.payload, a = r.map(e => e.id);
							return {
								...e,
								[s]: a
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
				Ae = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				je = r("./src/reddit/actions/profileOverviewChrono/constants.ts"),
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
					case Ae.b:
					case Ae.e:
					case je.b:
					case V.MORE_POSTS_LOADED:
					case V.PROFILE_POSTS_LOADED:
					case H.c:
					case H.e:
					case H.i:
					case H.g:
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
					case ee.tb: {
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
				Ge = Object(v.c)({
					pending: Me
				});
			const Fe = {};
			var Be = (e = Fe, t) => {
					switch (t.type) {
						case ee.b: {
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
				Ve = Object(v.c)({
					api: Ge,
					order: Be
				});
			const He = {};
			var qe = (e = He, t) => {
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
				Ke = Object(v.c)({
					order: qe
				}),
				We = Object(v.c)({
					blacklist: re,
					create: ce,
					manageable: ye,
					models: xe,
					sortedUsable: Ve,
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
				At = Object(v.c)({
					error: Tt,
					pending: wt
				}),
				jt = r("./node_modules/lodash/mapValues.js"),
				Rt = r.n(jt);
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
					api: At,
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
			var Vt = (e = Bt, t) => {
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
			const Ht = {};
			var qt = (e = Ht, t) => {
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
					error: Vt,
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
				Ar = r("./src/reddit/actions/contentGate.ts"),
				jr = r("./src/reddit/actions/preferences.ts");
			const Rr = {};
			var Cr = (e = Rr, t) => {
				switch (t.type) {
					case Ar.a: {
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
					case Ar.b: {
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
					case Ar.f: {
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
					case Ar.h: {
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
					case Ar.i: {
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
					case Ar.j: {
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
					case Ar.c:
					case Ar.d:
					case Ar.e: {
						const {
							profileName: r
						} = t.payload, s = Ce.dc + r.toLocaleLowerCase(), a = e[s] || {}, n = {
							profileDeleted: t.type === Ar.d,
							profileSuspended: t.type === Ar.e,
							profileBlockedForLegalReason: t.type === Ar.c
						};
						return {
							...e,
							[s]: {
								...a,
								...n
							}
						}
					}
					case jr.p:
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
			var Vr = (e = Br, t) => {
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
			const Hr = {};
			var qr = (e = Hr, t) => {
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
					error: Vr,
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
				As = Object(v.c)({
					collection: Gr,
					draft: Zr,
					editor: os,
					page: fs,
					post: Ss,
					subreddit: ws
				}),
				js = r("./node_modules/lodash/omit.js"),
				Rs = r.n(js),
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
			var Vs = (e = Bs, t) => {
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
				Hs = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				qs = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Ks = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts");
			const Ws = Hs.a.createInitial;
			var $s = (e = Ws(), t) => {
					switch (t.type) {
						case es.h: {
							const {
								rteState: e
							} = t.payload;
							return e
						}
						case es.A:
							return Hs.a.createInitial();
						case es.M: {
							const r = t.payload;
							return r.editorMode === Ms.h.RICH_TEXT && r.editorKey === Ms.g.POST_CREATION ? Hs.a.createInitial(r.content) : e
						}
						case u.a:
							return Ns(t) !== Ce.Jb.POST_CREATION ? Hs.a.createInitial() : e;
						case Fr.g: {
							const e = t.payload;
							return e.kind === xs.b.RichText ? Hs.a.createInitial(e.body) : Hs.a.createInitial()
						}
						case ys.b:
						case ys.n: {
							const e = t.payload,
								r = Object(qs.c)(e.mediaAssets);
							return Hs.a.createInitial(e.contentType === Gs.a.RTJSON ? Object(Ks.b)(e.body) : void 0, r || void 0)
						}
						default:
							return e
					}
				},
				Qs = Object(v.c)({
					link: Us,
					markdown: Fs,
					media: Vs,
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
			var Aa = (e = null, t) => {
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
			const ja = {
				title: [],
				body: [],
				link: [],
				flair: []
			};
			var Ra = (e = ja, t) => {
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
						} : ja
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
						return Ns(t) !== Ce.Jb.POST_CREATION ? ja : e;
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
					editorMode: Aa,
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
			const xa = Hs.a.createInitial;
			var Ua = (e = xa(), t) => {
					switch (t.type) {
						case es.E:
							return Hs.a.createInitial();
						case es.D: {
							const r = t.payload;
							return r.editorMode === Ms.h.RICH_TEXT && "object" == typeof r.postContent ? Hs.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case es.M: {
							const r = t.payload;
							return r.editorMode === Ms.h.RICH_TEXT && r.editorKey === Ms.g.POST_EDITING ? Hs.a.createInitial(r.content) : e
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
					api: As,
					drafts: Ls,
					formData: wa,
					formState: Na,
					postEditing: Fa
				}),
				Va = r("./src/reddit/actions/dashboard/constants.ts");
			const Ha = {
				selectedComponent: null,
				subredditPending: !1,
				subredditLoaded: {}
			};
			var qa = (e = Ha, t) => {
				switch (t.type) {
					case Va.a:
						return {
							...e, selectedComponent: t.payload
						};
					case Va.d: {
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
					case Va.c: {
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
			const An = {
				fetched: !1,
				data: null
			};
			var jn = (e = An, t) => {
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
					pointsCopy: jn,
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
				Vn = e => {
					const t = e.match(Bn);
					if (null !== t) return t[1]
				},
				Hn = {};
			var qn = (e = Hn, t) => {
					switch (t.type) {
						case u.a: {
							const r = ks(t);
							if (!r) return e;
							const s = {};
							for (const e in r) {
								const t = Vn(e);
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
			const Ac = {
				focusedVerticalGqlError: null
			};
			var jc = (e = Ac, t) => {
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
					error: jc,
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
			var Vc = (e = null, t) => {
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
			var Hc = (e = !1, t) => {
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
			var qc = (e = !1, t) => {
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
				Kc = Object(v.c)({
					error: Vc,
					pending: Hc,
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
					case ee.f:
					case ee.e:
						return null;
					default:
						return e
				}
			};
			var $c = (e = null, t) => {
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
			var Qc = (e = null, t) => {
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
					case ee.v:
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
						case ee.mb:
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
			var ro = (e = !1, t) => {
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
						case ee.f:
						case ee.B:
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
			var Ao = (e = wo, t) => {
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
			const jo = {};
			var Ro = (e = jo, t) => {
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
					error: Ao,
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
			var Vo = (e = Bo, t) => {
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
			const Ho = {};
			var qo = (e = Ho, t) => {
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
					fetchedTokens: Vo,
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
						case V.PROFILE_POSTS_PENDING:
						case V.PROFILE_POSTS_LOADED:
						case V.MORE_POSTS_PENDING:
						case V.MORE_POSTS_LOADED:
						case W.f:
						case W.e:
						case Ae.f:
						case Ae.e:
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
						case Ae.d:
						case V.PROFILE_POSTS_FAILED:
						case V.MORE_POSTS_FAILED:
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
				ed = r("./src/reddit/actions/nsfwLinkedPosts/constants.ts"),
				td = r("./src/reddit/actions/subreddit/constants.ts");
			const rd = {};
			var sd = (e = rd, t) => {
					switch (t.type) {
						case ge.c:
						case Te.c:
						case V.PROFILE_POSTS_PENDING:
						case Ae.f:
						case K.SUBREDDIT_PENDING:
						case ge.g:
						case De.f:
						case De.i:
						case ve.s:
						case Jo.c:
						case W.f:
						case V.MORE_POSTS_PENDING:
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
						case Ae.d:
						case Ae.e:
						case V.PROFILE_POSTS_FAILED:
						case V.PROFILE_POSTS_LOADED:
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
						case V.MORE_POSTS_FAILED:
						case V.MORE_POSTS_LOADED:
						case ed.a:
						case ed.b:
						case td.j:
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
						case td.r: {
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
				ad = Object(v.c)({
					error: Yo,
					pending: sd
				}),
				nd = r("./src/reddit/actions/postList.ts"),
				cd = r("./node_modules/lodash/omitBy.js"),
				od = r.n(cd);

			function dd(e, t) {
				return t = t.toLowerCase(), od()(e, (e, r) => r === t || r.startsWith(`${t}--[`))
			}
			const id = {};
			var ud = (e = id, t) => {
				switch (t.type) {
					case nd.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case nd.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Rs()(e, [r]) : e
					}
					case K.SUBREDDIT_INVALIDATE_LISTING:
						return dd(e, t.payload);
					default:
						return e
				}
			};
			const ld = {};
			var pd = (e = ld, t) => {
					switch (t.type) {
						case De.e:
						case ge.b:
						case Te.b:
						case K.SUBREDDIT_LOADED:
						case V.PROFILE_POSTS_LOADED:
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
						case V.MORE_POSTS_LOADED:
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
							return dd(e, t.payload);
						default:
							return e
					}
				},
				bd = r("./src/reddit/actions/post.ts");
			const fd = {};
			var yd = (e = fd, t) => {
					switch (t.type) {
						case ge.c:
						case De.f:
						case Te.c:
						case V.PROFILE_POSTS_PENDING:
						case K.SUBREDDIT_PENDING:
						case Ae.f:
						case V.PROFILE_POSTS_PENDING:
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
						case ed.b:
						case ge.b:
						case Te.b:
						case K.SUBREDDIT_LOADED:
						case td.j:
						case Jo.b:
						case Ae.e:
						case V.PROFILE_POSTS_LOADED:
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
						case td.r: {
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
						case V.MORE_POSTS_LOADED:
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
						case bd.p: {
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
							return dd(e, t.payload);
						default:
							return e
					}
				},
				md = r("./src/lib/makeListingKey/index.ts");
			const Ed = {};
			var hd = (e = Ed, t) => {
				switch (t.type) {
					case K.SUBREDDIT_LOADED: {
						const {
							key: r,
							listingSort: s
						} = t.payload;
						return s && !Object(md.b)(r) ? {
							...e,
							[r]: {
								sort: s,
								hasChanged: !1
							}
						} : e
					}
					case jr.a:
					case jr.p: {
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
			const _d = {};
			var Od = (e = _d, t) => {
				switch (t.type) {
					case ge.b:
					case Te.b:
					case K.SUBREDDIT_LOADED:
					case Ae.e:
					case V.PROFILE_POSTS_LOADED:
					case ge.f:
					case De.e:
					case De.h:
					case ve.r:
					case W.e:
					case V.MORE_POSTS_LOADED:
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
						return dd(e, t.payload);
					default:
						return e
				}
			};
			const Id = {};
			var gd = (e = Id, t) => {
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
				Sd = Object(v.c)({
					api: ad,
					endMarkers: ud,
					fetchedTokens: pd,
					ids: yd,
					listingSort: hd,
					loadMore: Od,
					pageInfo: gd
				}),
				vd = Object(v.c)({
					activeKey: ko,
					listingOrder: $o,
					postOrder: Sd
				});
			var Dd = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return Xa()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var Td = (e = null, t) => {
				switch (t.type) {
					case ge.b: {
						const r = t.payload;
						return Xa()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var wd = (e = !1, t) => {
				switch (t.type) {
					case ge.b:
						return !0;
					default:
						return e
				}
			};
			var Ad = (e = !1, t) => {
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				jd = Object(v.c)({
					announcements: Dd,
					featured: Td,
					isFrontpageLoaded: wd,
					shouldShowAnnouncements: Ad
				}),
				Rd = r("./src/reddit/actions/media.ts");
			const Cd = {};
			var Pd = (e = Cd, t) => {
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
			const Ld = {};
			var Nd = (e = Ld, t) => {
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
				kd = Object(v.c)({
					currentSlideIndex: Pd,
					isGalleryTileLayout: Nd
				});
			var xd = (e = !0, t) => {
				switch (t.type) {
					case Rd.c:
						return t.payload;
					default:
						return e
				}
			};
			var Ud = (e = .5, t) => {
					switch (t.type) {
						case Rd.d:
							return t.payload;
						default:
							return e
					}
				},
				Md = Object(v.c)({
					isMuted: xd,
					volume: Ud
				}),
				Gd = r("./src/reddit/actions/meta.ts");
			const Fd = {
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
			var Bd = (e = Fd, t) => {
					switch (t.type) {
						case Gd.b:
							return t.payload;
						case Gd.a:
							return {
								...e, ...t.payload
							};
						case Gd.c:
							return {
								...e, locale: t.payload
							};
						default:
							return e
					}
				},
				Vd = r("./src/reddit/actions/subredditModeration/constants.ts");
			const Hd = {};
			var qd = (e = Hd, t) => {
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
					case Vd.Z: {
						const {
							subredditId: r
						} = t.payload;
						return Object(Gt.a)(e, r)
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
			var Kd = (e = null, t) => {
				switch (t.type) {
					case bd.g:
						return t.payload;
					case bd.f:
						return null
				}
				return e
			};
			var Wd = (e = null, t) => {
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
			var $d = (e = !1, t) => {
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
				Qd = Object(v.c)({
					error: Wd,
					pending: $d
				});
			const Jd = [];
			var zd = (e = Jd, t) => {
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
				Xd = Object(v.c)({
					api: Qd,
					names: zd
				}),
				Yd = Object(v.c)({
					filteredSubreddits: Xd
				}),
				Zd = r("./src/reddit/actions/modMode.ts");
			var ei = (e = !0, t) => {
				switch (t.type) {
					case Zd.a:
						return t.payload.enabled;
					default:
						return e
				}
			};
			const ti = {};
			var ri = (e = ti, t) => {
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
			const si = {};
			var ai = (e = si, t) => {
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
				ni = Object(v.c)({
					error: ri,
					pending: ai
				}),
				ci = r("./src/reddit/models/Comment/index.ts");
			const oi = {};
			var di = (e = oi, t) => {
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
											prev: Object(ci.h)(s),
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
				ii = Object(v.c)({
					api: ni,
					models: di
				});
			var ui = (e = null, t) => {
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
			var li = (e = !1, t) => {
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
			var pi = (e = null, t) => {
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
				bi = Object(v.c)({
					error: ui,
					fetched: li,
					pending: pi
				});
			var fi = (e = null, t) => {
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
			var yi = (e = !1, t) => {
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
			var mi = (e = !1, t) => {
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
				Ei = Object(v.c)({
					error: fi,
					fetched: yi,
					pending: mi
				});
			var hi = (e = null, t) => {
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
			var _i = (e = !1, t) => {
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
			var Oi = (e = !1, t) => {
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
				Ii = Object(v.c)({
					error: hi,
					fetched: _i,
					pending: Oi
				});
			var gi = (e = null, t) => {
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
			var Si = (e = !1, t) => {
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
			var vi = (e = !1, t) => {
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
				Di = Object(v.c)({
					error: gi,
					fetched: Si,
					pending: vi
				});
			var Ti = (e = null, t) => {
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
			var wi = (e = !1, t) => {
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
			var Ai = (e = !1, t) => {
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
					error: Ti,
					fetched: wi,
					pending: Ai
				});
			var Ri = (e = !1, t) => {
				switch (t.type) {
					case ve.t:
						return !1;
					case ve.u:
						return !0;
					default:
						return e
				}
			};
			var Ci = (e = !1, t) => {
					switch (t.type) {
						case ve.t:
							return !0;
						case ve.u:
							return !1;
						default:
							return e
					}
				},
				Pi = Object(v.c)({
					fetched: Ri,
					pending: Ci
				});
			var Li = (e = null, t) => {
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
			var Ni = (e = !1, t) => {
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
			var ki = (e = !0, t) => {
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
				xi = Object(v.c)({
					error: Li,
					fetched: Ni,
					pending: ki
				});
			var Ui = (e = null, t) => {
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
			var Mi = (e = !1, t) => {
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
			var Gi = (e = null, t) => {
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
				Fi = Object(v.c)({
					error: Ui,
					fetched: Mi,
					pending: Gi
				}),
				Bi = Object(v.c)({
					addSubreddit: bi,
					create: Ei,
					deleteMulti: Ii,
					duplicate: Di,
					edit: ji,
					forUser: Pi,
					recommendations: xi,
					removeSubreddit: Fi
				}),
				Vi = r("./node_modules/lodash/isEqual.js"),
				Hi = r.n(Vi),
				qi = r("./node_modules/lodash/union.js"),
				Ki = r.n(qi);

			function Wi(e, t, r) {
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
			var $i = r("./src/reddit/actions/profile/constants.ts");
			const Qi = {};
			var Ji = (e = Qi, t) => {
					switch (t.type) {
						case Te.b:
						case ve.r:
						case ve.u:
						case $i.h: {
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
								n[t] = Ki()(a, r).sort((e, t) => c[e].displayText.toLowerCase() > c[t].displayText.toLowerCase() ? 1 : -1)
							}
							return Hi()(e, n) ? e : n
						}
						case ve.g:
						case ve.m: {
							const {
								userId: r,
								multireddit: s
							} = t.payload, a = e[r] ? e[r].slice() : [], n = Wi(a, s.url, (e, t) => e > t ? 1 : -1);
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
				zi = r("./src/reddit/actions/subscription/constants.ts"),
				Xi = r("./src/reddit/models/Multireddit/index.ts");
			const Yi = {};
			var Zi = (e = Yi, t) => {
				switch (t.type) {
					case Te.b:
					case ve.r:
					case ve.u:
					case $i.h: {
						let r = {};
						for (const s in t.payload.multireddits) {
							const a = {
									...t.payload.multireddits[s]
								},
								n = e[s];
							n && !Object(Xi.g)(a) && (a.subredditIds = n.subredditIds, a.profileIds = n.profileIds), s in e && Hi()(e[a.url], a) || (r = {
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
					case zi.d: {
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
					case zi.e: {
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
			const eu = {};
			var tu = (e = eu, t) => {
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
				ru = Object(v.c)({
					api: Bi,
					byUserId: Ji,
					models: Zi,
					recommendations: tu
				}),
				su = r("./src/reddit/actions/notificationBanner.ts");
			var au = (e = null, t) => {
					switch (t.type) {
						case su.b:
							return t.payload.notificationBannerId;
						case su.a:
							return null;
						default:
							return e
					}
				},
				nu = r("./src/reddit/actions/notificationsInbox/constants.ts");
			var cu = (e = !1, t) => {
				switch (t.type) {
					case nu.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case nu.e:
					case nu.b:
						return !1;
					default:
						return e
				}
			};
			var ou = (e = !1, t) => {
					switch (t.type) {
						case nu.e:
							return !0;
						case nu.a:
						case nu.b:
							return !1;
						default:
							return e
					}
				},
				du = Object(v.c)({
					error: cu,
					pending: ou
				});
			var iu = (e = null, t) => {
				switch (t.type) {
					case nu.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var uu = (e = null, t) => {
				switch (t.type) {
					case nu.c:
						return t.payload && t.payload.now;
					default:
						return e
				}
			};
			const lu = [];
			var pu = (e = lu, t) => {
				switch (t.type) {
					case nu.b: {
						const r = t.payload && t.payload.nodes;
						return [...e, ...r]
					}
					case nu.f: {
						const r = t.payload && t.payload.id;
						return e.filter(e => (e && e.id) !== r)
					}
					case nu.d: {
						const r = t.payload && t.payload.id,
							s = t.payload && t.payload.now,
							a = e.findIndex(e => e.id === r);
						return -1 === a ? e : [...e.slice(0, a), {
							...e[a],
							readAt: s
						}, ...e.slice(a + 1)]
					}
					case nu.c: {
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
			var bu = (e = null, t) => {
					switch (t.type) {
						case nu.b:
							return t.payload && t.payload.pageInfo;
						default:
							return e
					}
				},
				fu = Object(v.c)({
					api: du,
					earlierDividerIndex: iu,
					notifications: pu,
					pageInfo: bu,
					markAllAsReadTimestamp: uu
				}),
				yu = r("./src/reddit/actions/nps.ts");
			const mu = {
				pending: !1,
				success: !1,
				dest: void 0
			};
			var Eu = (e = mu, t) => {
				switch (t.type) {
					case yu.c:
						return {
							...mu, pending: !0
						};
					case yu.a:
						return mu;
					case yu.b: {
						const {
							dest: e
						} = t.payload;
						return {
							...mu,
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
					version: a
				} = e;
				return {
					id: parseInt(t),
					name: r,
					variant: s || void 0,
					version: a
				}
			};
			const _u = e => {
					const t = {};
					for (const r of e) t[r.experimentName.toLowerCase()] = hu(r);
					return t
				},
				Ou = {};
			var Iu = (e = Ou, t) => {
				switch (t.type) {
					case Fn.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return _u(r)
					}
					default:
						return e
				}
			};
			var gu = Object(v.c)({
					byName: Iu,
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
				Su = Object(v.c)({
					experiments: gu
				}),
				vu = r("./node_modules/history/esm/history.js");
			const Du = {
				allowNavigationCallback: null,
				currentPage: null,
				lastPage: null,
				referrers: {},
				sessionReferrer: null,
				metas: {}
			};
			var Tu = (e = Du, t) => {
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
						const o = Object(vu.e)(n),
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
			const wu = {};
			var Au = (e = wu, t) => {
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
			var Ru = (e = ju, t) => {
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
				Cu = Object(v.c)({
					error: Au,
					pending: Ru
				}),
				Pu = Object(v.c)({
					voting: Cu
				}),
				Lu = r("./src/reddit/actions/economics/predictions/constants.ts");
			const Nu = {};
			var ku = (e = Nu, t) => {
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
					case Lu.f: {
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
							var t, r;
							const n = s[e];
							if (n.pollData && (a[e] = (e => {
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
								})(n)), null === (r = null === (t = n.predictionTournament) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.length) {
								const {
									tournamentId: e,
									predictions: t
								} = n.predictionTournament;
								t.forEach(t => {
									a[t.id] = function({
										wonAmount: e,
										endsAt: t,
										id: r,
										totalVoteCount: s,
										totalStakeAmount: a,
										...n
									}, {
										tournamentId: c,
										subredditId: o,
										creatorId: d,
										createdAt: i
									}) {
										return {
											id: r,
											isPrediction: !0,
											createdAt: i,
											creatorId: d,
											tournamentId: c,
											subredditId: o,
											userWonAmount: e,
											votingEndTimestamp: t,
											endsAt: t,
											postId: r,
											totalStakeAmount: a || 0,
											totalVoteCount: s || 0,
											totalVoters: s || 0,
											...n
										}
									}(t, {
										tournamentId: e,
										creatorId: n.author,
										createdAt: n.created,
										subredditId: n.belongsTo.id
									})
								})
							}
						}), {
							...e,
							...a
						}
					}
					case Lu.h:
					case Lu.g:
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
			var Uu = (e = xu, t) => {
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
			const Mu = {};
			var Gu = (e = Mu, t) => {
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
				Fu = Object(v.c)({
					byVoters: Uu,
					byVotingPower: Gu
				});
			const Bu = {};
			var Vu = (e = Bu, t) => {
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
					api: Pu,
					models: ku,
					results: Fu,
					rewards: Vu
				});
			const qu = {
				reorderError: null,
				updateDescriptionError: null,
				updateLayoutError: null
			};
			var Ku = (e = qu, t) => {
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
			const Wu = {
				reorderPending: !1,
				updateDescriptionPending: !1,
				updateLayoutPending: !1
			};
			var $u = (e = Wu, t) => {
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
				Qu = Object(v.c)({
					error: Ku,
					pending: $u
				}),
				Ju = r("./src/reddit/helpers/path/index.ts");
			const zu = {},
				Xu = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(Ju.b)(e.permalink);
						return {
							...e,
							permalink: `${t}://${r}${s}`
						}
					}
				};
			var Yu = (e = zu, t) => {
				switch (t.type) {
					case we.PAGE_LOADED:
					case De.e:
					case De.h:
					case B.b:
					case B.e:
					case Ae.e:
					case Ae.b:
					case V.PROFILE_POSTS_LOADED:
					case V.MORE_POSTS_LOADED:
					case K.SUBREDDIT_LOADED:
					case ge.b:
					case Te.b:
					case K.SUBREDDIT_LOADED:
					case F.b:
					case F.f:
					case bd.k:
					case ve.r:
					case ge.f:
					case W.e:
					case "RECOMMENDED_POSTS_LOADED":
					case $.i:
					case Pe.e:
					case je.b:
					case q.SEARCH_RESULTS_RECEIVED:
					case kr.f: {
						const {
							collections: r,
							meta: s
						} = t.payload;
						if (!r) return e;
						let a = r;
						if (s) {
							const e = Xu(s);
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
							n = Xu(s)(r)
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
			const Zu = {};
			var el = (e = Zu, t) => {
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
				tl = Object(v.c)({
					models: Yu,
					subredditToIds: el,
					api: Qu
				}),
				rl = r("./src/reddit/actions/postFlair.ts"),
				sl = r("./src/reddit/models/Flair/index.ts");
			const al = {},
				nl = {
					displaySettings: {
						isEnabled: !1,
						position: sl.b.Left
					},
					permissions: {
						canAssignOwn: !1
					},
					templateIds: [],
					templates: {}
				},
				cl = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					return 0 === r.length ? e : r.reduce((e, r) => (e[r] = {
						...nl,
						...e[r],
						...t[r]
					}, e), {
						...e
					})
				};
			var ol = (e = al, t) => {
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
						case H.c:
						case H.i:
						case H.e:
						case H.g:
						case W.e:
						case je.b:
						case je.b:
						case Ae.b:
						case Ae.e:
						case V.MORE_POSTS_LOADED:
						case V.PROFILE_POSTS_LOADED:
						case "RECOMMENDED_POSTS_LOADED":
						case Pe.e:
						case Pe.e:
						case $.i:
							return cl(e, t.payload.postFlair);
						case rl.c: {
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
						case rl.a: {
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
						case rl.f: {
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
						case rl.b: {
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
						case rl.e:
						case rl.d: {
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
							return cl(e, r.postFlair)
						}
						default:
							return e
					}
				},
				dl = r("./src/reddit/actions/inFeedChaining.ts");
			var il = (e = !1, t) => {
				switch (t.type) {
					case dl.a:
						return t.payload.isDismissed;
					default:
						return e
				}
			};
			const ul = {};
			var ll = (e = ul, t) => {
				switch (t.type) {
					case dl.c: {
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
			const pl = {};
			var bl = (e = pl, t) => {
					switch (t.type) {
						case dl.b:
							return {
								...e, [t.payload.postId]: t.payload.listingKey
							};
						default:
							return e
					}
				},
				fl = Object(v.c)({
					dismissed: il,
					dismissedIdToListingKey: ll,
					idToListingKey: bl
				});
			var yl = (e = null, t) => {
					switch (t.type) {
						case bd.b:
							return t.payload;
						default:
							return e
					}
				},
				ml = r("./src/reddit/actions/embedAndImage.ts");
			const El = {};
			var hl = (e = El, t) => {
					switch (t.type) {
						case ml.b: {
							const {
								postId: r
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: !1
							} : e
						}
						case ml.a: {
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
				_l = Object(v.c)({
					loadable: hl
				});
			const Ol = {};
			var Il = (e = Ol, t) => {
				switch (t.type) {
					case bd.c: {
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
			var gl = (e = null, t) => {
				switch (t.type) {
					case bd.d: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Sl = [];
			var vl = (e = Sl, t) => {
				switch (t.type) {
					case bd.o:
						return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
					case bd.a:
						return [...e.filter(e => e.expiresAt > Date.now())];
					case bd.e:
						return [...t.payload.posts];
					default:
						return e
				}
			};
			const Dl = {};
			var Tl = (e = Dl, t) => {
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
				wl = r("./src/reddit/actions/isTrackingCrossposts.ts");
			const Al = {};
			var jl = (e = Al, t) => {
				switch (t.type) {
					case wl.a: {
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
			const Rl = {};
			var Cl = (e = Rl, t) => {
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
						case Lu.f: {
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
								var r, a;
								const n = s[t];
								if ((null == n ? void 0 : n.pollData) && (e[t] = t), null === (a = null === (r = n.predictionTournament) || void 0 === r ? void 0 : r.predictions) || void 0 === a ? void 0 : a.length) {
									const {
										predictions: t
									} = n.predictionTournament;
									t.forEach(t => {
										e[t.id] = t.id
									})
								}
								return e
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
				Pl = r("./src/reddit/actions/bulkActions/constants.ts"),
				Ll = r("./src/reddit/actions/constants.ts"),
				Nl = r("./src/reddit/actions/flairManagement/constants.ts"),
				kl = r("./src/reddit/actions/googleQASchema/constants.ts"),
				xl = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				Ul = r("./src/reddit/actions/subredditTopContent.ts"),
				Ml = r("./src/reddit/helpers/isPost.ts"),
				Gl = r("./node_modules/lodash/pickBy.js"),
				Fl = r.n(Gl);

			function Bl(e, t) {
				const r = Fl()(t, (t, r = "") => !e[r] || !Hi()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var Vl = r("./src/reddit/models/Gold/Gild/index.tsx"),
				Hl = r("./src/reddit/models/Media/index.ts"),
				ql = r("./src/reddit/models/ModQueue/index.ts"),
				Kl = r("./src/reddit/models/Post/index.ts"),
				Wl = r("./src/reddit/models/Vote/index.ts"),
				$l = r("./src/reddit/actions/subredditDuplicates.ts");

			function Ql({
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
					predictions: a.map(Jl)
				}
			}

			function Jl({
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
					options: i.map(zl)
				}
			}

			function zl({
				userAmount: e,
				...t
			}) {
				return {
					...t,
					userStakeAmount: e
				}
			}
			const Xl = e => {
					const {
						protocol: t,
						domain: r
					} = e;
					return e => {
						const s = Object(Ju.b)(e.permalink);
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
				ep = ({
					tournamentData: e,
					...t
				}) => e ? {
					...t,
					predictionTournament: Ql(e)
				} : t,
				tp = e => e.media && Object(Hl.E)(e.media) ? {
					...Object(L.unsetIn)(e, ["source"])
				} : e,
				rp = e => t => {
					const r = e[t.id];
					return t && t.media && r && r.media && Object(Hl.H)(t.media) && t.media.isRichtextPreview && Object(Hl.H)(r.media) && !r.media.isRichtextPreview && (t.media.richtextContent = r.media.richtextContent, t.media.isRichtextPreview = !1), t
				},
				sp = e => t => {
					const r = e[t.id];
					return r && r.numDuplicates && (t.numDuplicates = r.numDuplicates), t
				},
				ap = e => t => {
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
				cp = e => {
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
				op = e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				},
				dp = (e, t) => ({
					...e,
					events: t.events,
					source: t.source
				}),
				ip = {};
			var up = (e = ip, t) => {
				switch (t.type) {
					case u.a:
						if (Ns(t) === (Ce.Jb.COMMENTS || Ce.Jb.DUPLICATES)) {
							const r = ks(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									a = Object(Kl.s)(s.partialPostId);
								if (e[a] && e[t]) return {
									...e,
									[a]: dp(e[a], e[t])
								}
							}
						}
						return e;
					case F.b:
					case F.f: {
						const r = Xl(t.payload.meta);
						return {
							...e,
							...Rt()(t.payload.posts, op([r, np, cp, tp, ep, Yl(e), Zl(e), sp(e), ap(e)]))
						}
					}
					case bd.k:
						return Bl(e, t.payload);
					case $l.a:
						return Bl(e, t.payload.posts);
					case we.PAGE_LOADED:
					case Zo.c:
					case ed.b:
					case De.e:
					case De.h:
					case B.b:
					case B.e:
					case Ae.e:
					case Ae.b:
					case V.PROFILE_POSTS_LOADED:
					case V.MORE_POSTS_LOADED:
					case K.SUBREDDIT_LOADED:
					case ge.b:
					case Te.b:
					case Jo.b:
					case ve.r:
					case ge.f:
					case W.e:
					case "RECOMMENDED_POSTS_LOADED":
					case td.j:
					case $.i:
					case je.b:
					case zo.TOPIC_DATA_LOADED:
					case zo.MORE_POSTS_LOADED:
					case Qo.c:
					case Qo.d:
					case Lu.f: {
						const r = Xl(t.payload.meta);
						return {
							...e,
							...Rt()(t.payload.posts, op([r, np, cp, tp, ep, rp(e), sp(e), ap(e)]))
						}
					}
					case td.r: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								a = Xl(t.meta);
							Object.assign(r, Rt()(t.posts, op([a, np, cp, tp, rp(e), sp(e), ap(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case Jo.b: {
						const r = Xl(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...Rt()(t.payload.posts, op([r, np, cp, tp, rp(e), sp(e), ap(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case Ie.e:
					case Pe.e:
					case q.SEARCH_RESULTS_RECEIVED: {
						const r = Xl(t.payload.meta),
							s = Rt()(t.payload.posts, op([r, cp, np, tp, ap(e)]));
						return k()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case bd.l: {
						const r = t.payload;
						return k()({
							...e
						}, r, (e, t) => ({
							...e,
							...t
						}))
					}
					case Ll.a: {
						const {
							id: r,
							vote: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: Object(Wl.c)(a, s)
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
					case bd.i: {
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
					case bd.j: {
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
					case ee.tb: {
						const {
							topAwardedPosts: r
						} = t.payload;
						return {
							...e,
							...r.reduce((e, t) => (e[t.post.id] = op([cp])(Object(qs.e)(t.post)), e), {})
						}
					}
					case ee.s: {
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
					case ee.D: {
						const {
							awardId: r,
							thingId: s
						} = t.payload, a = e[s];
						return a ? {
							...e,
							[s]: Object(Vl.b)(a, r)
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
							...Rt()(s, op([cp, tp]))
						}
					}
					case Pl.b:
					case G.s: {
						const {
							operation: r,
							ids: s,
							username: a,
							options: n
						} = t.payload, c = s.filter(e => Object(Ml.a)(e)), o = Object(ql.d)(e, r, c, a, n);
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
							...Rt()(r.posts, op([cp, tp])),
							...e
						} : e
					}
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case Ul.b:
						return {
							...Rt()(t.payload.posts, op([cp, tp])), ...e
						};
					case bd.n: {
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
					case Nl.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Nl.b: {
						const r = t.payload;
						return Object(Gt.a)(e, r)
					}
					case Rd.a: {
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
					case xl.b: {
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
					case Lu.k: {
						const {
							postId: r,
							predictionId: s,
							selectedOptionId: a
						} = t.payload;
						if (!e[s] && !e[r]) return e;
						const n = {
							...e
						};
						return n[s] && (n[s] = (({
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
						})({
							post: e[s],
							selectedOptionId: a
						})), n[r] && (n[r] = (({
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
						})({
							post: e[r],
							selectedOptionId: a,
							predictionId: s
						})), n
					}
					case xl.a:
						return {
							...e
						};
					case kl.b: {
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
					case kl.a:
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
			var lp = (e = null, t) => {
					switch (t.type) {
						case bd.h:
							return t.payload;
						default:
							return e
					}
				},
				pp = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const bp = {};
			var fp = (e = bp, t) => {
				switch (t.type) {
					case pp.a: {
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
			const yp = [];
			var mp = (e = yp, t) => {
					switch (t.type) {
						case bd.m: {
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
				Ep = r("./node_modules/uuid/v4.js"),
				hp = r.n(Ep);
			const _p = hp()();
			var Op = (e = _p, t) => {
				switch (t.type) {
					case we.PAGE_LOADED:
					case ys.h:
					case ys.a:
					case ys.m:
					case ys.f:
						return hp()();
					default:
						return e
				}
			};
			var Ip = (e = null, t) => {
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
			var gp = (e = !0, t) => {
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
			var Sp = (e = !1, t) => {
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
				vp = Object(v.c)({
					creationToken: Op,
					error: Ip,
					pending: gp,
					pendingUpdate: Sp
				});
			const Dp = {};
			var Tp = (e = Dp, t) => {
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
			const wp = {
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
						case wp[e].POSTS_LOADED:
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
						case wp[e].MUTATION_SUCCEEDED: {
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
			const jp = {};

			function Rp(e) {
				return (t = jp, r) => {
					switch (r.type) {
						case wp[e].POSTS_LOADED:
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
			var Cp = r("./node_modules/lodash/uniq.js"),
				Pp = r.n(Cp);
			const Lp = {};

			function Np(e) {
				return (t = Lp, r) => {
					switch (r.type) {
						case wp[e].POSTS_LOADED:
						case ys.f: {
							const {
								subredditInfoById: s
							} = r.payload, a = s.id, n = s.scheduledPosts[wp[e].postIdsKey];
							return {
								...t,
								[a]: Pp()([...t[a] || [], ...n])
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
			var kp = Object(v.c)({
					models: Ap("recurringPosts"),
					pageInfo: Rp("recurringPosts"),
					postOrder: Np("recurringPosts"),
					editModal: Tp
				}),
				xp = Object(v.c)({
					models: Ap("standalonePosts"),
					pageInfo: Rp("standalonePosts"),
					postOrder: Np("standalonePosts")
				}),
				Up = Object(v.c)({
					api: vp,
					standalonePosts: xp,
					recurringPosts: kp
				});
			var Mp = (e = null, t) => {
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
			var Gp = (e = !1, t) => {
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
				Fp = Object(v.c)({
					error: Mp,
					pending: Gp
				});
			const Bp = [];
			var Vp = (e = Bp, t) => {
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
							return Bp;
						default:
							return e
					}
				},
				Hp = Object(v.c)({
					api: Fp,
					list: Vp
				}),
				qp = r("./src/reddit/actions/video.ts");
			const Kp = {};
			var Wp = (e = Kp, t) => {
				switch (t.type) {
					case qp.e: {
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
			const $p = {};
			var Qp = (e = $p, t) => {
				switch (t.type) {
					case qp.a: {
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
			const Jp = {};
			var zp = (e = Jp, t) => {
				switch (t.type) {
					case qp.b: {
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
			var Yp = (e = Xp, t) => {
				switch (t.type) {
					case qp.c: {
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
			const Zp = {
				mutedInFeed: !0
			};
			var eb = (e = Zp, t) => {
				switch (t.type) {
					case qp.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var tb = (e = null, t) => {
				switch (t.type) {
					case qp.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case qp.d:
						return null;
					default:
						return e
				}
			};
			const rb = {};
			var sb = (e = rb, t) => {
				switch (t.type) {
					case qp.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case qp.e: {
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
					case qp.h: {
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
					case qp.f: {
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
			const cb = {};
			var ob = (e = cb, t) => {
				switch (t.type) {
					case qp.j: {
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
			const db = {};
			var ib = (e = db, t) => {
				switch (t.type) {
					case qp.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case qp.g: {
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
					case qp.i: {
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
			const pb = {};
			var bb = (e = pb, t) => {
					switch (t.type) {
						case qp.m: {
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
				fb = r("./src/reddit/constants/video.ts");
			const yb = {};
			var mb = (e = yb, t) => {
					switch (t.type) {
						case qp.n: {
							const {
								postId: r,
								time: s
							} = t.payload;
							return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < fb.l ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Eb = Object(v.c)({
					autoPlayed: Wp,
					buffering: Qp,
					consumed: zp,
					continuousViewStartedAt: Yp,
					feed: eb,
					fullscreen: tb,
					loadable: sb,
					loadTimes: nb,
					metadata: ob,
					paused: ib,
					playing: lb,
					started: bb,
					time: mb
				}),
				hb = Object(v.c)({
					chained: fl,
					embedAndImage: _l,
					expanded: Il,
					focus: gl,
					followed: vl,
					instances: Tl,
					isTrackingCrossposts: jl,
					metaMap: Cl,
					models: up,
					modToMemberShare: lp,
					crowdControl: yl,
					postLevelCrowdControl: fp,
					recent: mp,
					scheduledPosts: Up,
					topAwarded: Hp,
					video: Eb
				}),
				_b = r("./src/lib/reducers/addAuthentication/index.ts");
			const Ob = {};
			var Ib = Object(_b.a)((e = Ob, t) => {
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
				}, Ob),
				gb = Object(v.c)({
					data: Ib
				});
			const Sb = {};
			var vb = (e = Sb, t) => {
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
			const Db = {};
			var Tb = (e = Db, t) => {
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
				wb = Object(v.c)({
					error: vb,
					pending: Tb
				});
			const Ab = {};
			var jb = (e = Ab, t) => {
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
			const Rb = {};
			var Cb = (e = Rb, t) => {
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
				Pb = Object(v.c)({
					error: jb,
					pending: Cb
				}),
				Lb = Object(v.c)({
					fetch: wb,
					purchase: Pb
				});
			var Nb = (e = null, t) => {
				switch (t.type) {
					case l.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const kb = {};
			var xb = (e = kb, t) => {
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
				Ub = Object(v.c)({
					api: Lb,
					currentlyPurchasing: Nb,
					models: xb
				});
			const Mb = {};
			var Gb = (e = Mb, t) => {
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
			var Bb = (e = Fb, t) => {
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
					error: Gb,
					pending: Bb
				});
			const Hb = {};
			var qb = (e = Hb, t) => {
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
				Kb = r("./src/reddit/actions/comment/list.ts");
			const Wb = {};
			var $b = (e = Wb, t) => {
				switch (t.type) {
					case Kb.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Kb.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? Rs()(e, r) : e
					}
					default:
						return e
				}
			};
			const Qb = {};
			var Jb = (e = Qb, t) => {
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
			const zb = {};
			var Xb = (e = zb, t) => {
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
				Yb = Object(v.c)({
					api: Vb,
					endMarkers: $b,
					fetchedTokens: Jb,
					commentIds: qb,
					loadMore: Xb
				}),
				Zb = r("./src/reddit/actions/pages/profileModSettings.ts");
			var ef = (e = !0, t) => {
					switch (t.type) {
						case Zb.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				tf = Object(v.c)({
					pending: ef
				}),
				rf = Object(v.c)({
					api: tf
				});
			const sf = {};
			var af = (e = sf, t) => (t.type, e);
			const nf = {};
			var cf = (e = nf, t) => {
				switch (t.type) {
					case H.a:
					case H.d: {
						const {
							listingKey: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case H.b:
					case H.c:
					case H.i:
					case H.f:
					case H.e:
					case H.g: {
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
			const of = {};
			var df = (e = of , t) => {
					switch (t.type) {
						case H.b:
						case H.f: {
							const {
								listingKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case H.a:
						case H.d:
						case H.c:
						case H.i:
						case H.e:
						case H.g: {
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
				uf = Object(v.c)({
					error: cf,
					pending: df
				});
			const lf = {};
			var pf = (e = lf, t) => {
				switch (t.type) {
					case H.c:
					case H.i:
					case H.e:
					case H.g: {
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
			const bf = {};
			var ff = (e = bf, t) => {
					switch (t.type) {
						case H.i:
						case H.c:
						case H.e:
						case H.g: {
							const {
								pageInfo: r,
								listingKey: s
							} = t.payload;
							return r ? {
								...e,
								[s]: r
							} : bf
						}
						default:
							return e
					}
				},
				yf = Object(v.c)({
					api: uf,
					ids: pf,
					pageInfo: ff
				}),
				mf = r("./src/reddit/constants/posts.ts");
			const Ef = {};
			var hf = (e = Ef, t) => {
				switch (t.type) {
					case q.SEARCH_RESULTS_RECEIVED:
					case Pe.e:
						return {
							...e, ...t.payload.profileAboutInfo
						};
					case $i.k: {
						const r = t.payload;
						return r.profile ? {
							...e,
							[r.profile.id]: r.about
						} : e
					}
					case zi.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(e => e.type === mf.a.PROFILE);
						return a.length ? a.reduce((e, t) => (e[t.id] = {
							...e[t.id],
							userIsSubscriber: s
						}, e), {
							...e
						}) : e
					}
					case jr.m: {
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
			const _f = {};
			var Of = (e = _f, t) => {
				switch (t.type) {
					case ge.f:
					case F.b:
					case F.f:
					case ge.b:
					case B.b:
					case B.e:
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case Ae.b:
					case Ae.e:
					case V.PROFILE_POSTS_LOADED:
					case je.b:
					case ge.f:
					case De.e:
					case De.h:
					case ve.u:
					case $i.h:
					case Jo.b:
					case Pe.e:
					case $.i:
					case $i.m:
					case W.b:
					case W.e:
					case q.SEARCH_RESULTS_RECEIVED:
					case we.PAGE_LOADED:
					case Fr.e:
					case Cs.PAGE_LOADED:
					case K.SUBREDDIT_LOADED:
					case Te.b:
					case "RECOMMENDED_POSTS_LOADED":
					case zi.c:
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
					case $i.l:
					case $i.k: {
						const {
							profile: r
						} = t.payload;
						return r ? Object(L.merge)(e, {
							[r.id]: r
						}) : e
					}
					case jr.m: {
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
					case jr.k:
					case jr.j: {
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
			const If = {};
			var gf = (e = If, t) => {
					switch (t.type) {
						case $i.c:
						case $i.f: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[(r || "").toLowerCase()]: !0
							}
						}
						case $i.a:
						case $i.b:
						case $i.d:
						case $i.e: {
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
				Sf = Object(v.c)({
					pending: gf
				});
			const vf = {};
			var Df = (e = vf, t) => {
				switch (t.type) {
					case $i.b: {
						const {
							profileName: r,
							data: s
						} = t.payload, a = s.map(e => e.id);
						return {
							...e,
							[(r || "").toLowerCase()]: a
						}
					}
					case $i.e:
					case H.c:
					case H.i:
					case H.e:
					case H.g: {
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
			const Tf = {};
			var wf = (e = Tf, t) => {
					switch (t.type) {
						case $i.e: {
							const {
								pageInfo: r,
								profileName: s
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						case H.c:
						case H.i: {
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
					api: Sf,
					models: Df,
					pageInfo: wf
				});
			const jf = {};
			var Rf = (e = jf, t) => {
					switch (t.type) {
						case $i.i: {
							const {
								profileName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case $i.g:
						case $i.h: {
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
				Cf = Object(v.c)({
					pending: Rf
				});
			const Pf = {};
			var Lf = (e = Pf, t) => {
					switch (t.type) {
						case $i.h: {
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
				Nf = Object(v.c)({
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
						} = t.payload, a = e[s] || [];
						return {
							...e,
							[s]: [...a, r].slice(-Ce.ab)
						}
					}
					case kf.g: {
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
			}, xf);
			const Mf = {};
			var Gf = Object(_b.a)((e = Mf, t) => {
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
			const Ff = {};
			var Bf = Object(_b.a)((e = Ff, t) => {
					switch (t.type) {
						case kf.c:
						case kf.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, a = e[s] || [];
							return {
								...e,
								[s]: [...a, r]
							}
						}
						case kf.b:
						case kf.e:
						case kf.d:
						case kf.g: {
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
				}, Ff),
				Vf = Object(v.c)({
					data: Uf,
					initialData: Gf,
					pending: Bf
				}),
				Hf = r("./src/reddit/actions/trophyCase.ts");
			const qf = {};
			var Kf, Wf, $f = (e = qf, t) => {
					switch (t.type) {
						case Hf.a: {
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
				Qf = Object(v.c)({
					about: hf,
					models: Of,
					moderated: Af,
					multireddits: Nf,
					pinnedPosts: Vf,
					trophyCases: $f
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Kf || (Kf = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Wf || (Wf = {}));
			var Jf, zf, Xf;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Jf || (Jf = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(zf || (zf = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Xf || (Xf = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Jf || (Jf = {}));
			Object(Re.a)("PROMO__SHOW_PROMO"), Object(Re.a)("PROMO__HIDE_PROMO");
			const Yf = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var Zf = (e = Yf, t) => {
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
				ey = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const ty = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: ey.d,
					viewer_streams_refresh: ey.c,
					viewer_streams_refresh_slop: ey.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var ry = (e = ty, t) => {
				switch (t.type) {
					case ey.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case ey.x: {
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
					case ey.G:
						return {
							...e, isPending: !0
						};
					case ey.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case ey.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var sy = (e = {}, t) => {
				switch (t.type) {
					case ey.L:
						return {
							...e, [ey.b]: t.payload.error
						};
					case ey.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case ey.z: {
						const {
							[ey.b]: t, ...r
						} = e;
						return r
					}
					case ey.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const ay = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var ny = (e = {}, t) => {
				switch (t.type) {
					case ey.N:
						return ay(e, t.payload, !0);
					case ey.O:
						return ay(e, ey.b, !0);
					case ey.y:
						return ay(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case ey.z:
						return ay(e, ey.b, !1, t.payload.utcTimeStamp);
					case ey.M:
						return ay(e, t.payload.streamId, !1);
					case ey.L:
						return ay(e, ey.b, !1);
					default:
						return e
				}
			};
			const cy = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var oy = (e = cy, t) => {
					switch (t.type) {
						case ey.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case ey.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case ey.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				dy = Object(v.c)({
					config: ry,
					error: sy,
					pending: ny,
					recommendedViewerSubreddits: oy
				});
			const iy = {};
			var uy = (e = iy, t) => {
				switch (t.type) {
					case ey.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case ey.F:
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
			const ly = {
				cursor: ey.W,
				timestamps: {},
				visitOrder: []
			};
			var py = (e = ly, t) => {
				switch (t.type) {
					case ey.P:
						return ly;
					case ey.X: {
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
						return by(e, t.payload.id);
					case ey.E:
						return by(e, t.payload);
					case bd.l: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return fy(e, r)
					}
					case ey.V: {
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
			const by = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				fy = (e, t) => {
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
				yy = {
					ended: [],
					removed: []
				};

			function my(e) {
				return [...new Set(e)]
			}
			var Ey = (e = yy, t) => {
				switch (t.type) {
					case ey.t:
						return {
							...e, ended: my(e.ended.concat(t.payload))
						};
					case ey.u:
						return {
							...e, removed: my(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const hy = {};
			var _y = (e = hy, t) => {
				switch (t.type) {
					case ey.z:
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
			const Oy = {},
				Iy = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: ey.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: ey.l - r
						}
					}), r)
				},
				gy = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : ey.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var Sy = (e = Oy, t) => {
				switch (t.type) {
					case ey.y:
						return gy(e, t.payload.model);
					case ey.z:
						return Iy(e, t.payload.models);
					case ey.D: {
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
			const vy = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var Dy = (e = vy, t) => {
				switch (t.type) {
					case ey.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case ey.A:
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
			const Ty = {
				reported: []
			};
			var wy = (e = Ty, t) => {
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
			var jy = (e = Ay, t) => {
				switch (t.type) {
					case ey.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Ry = {
				reportedStreams: []
			};
			var Cy = (e = Ry, t) => {
					switch (t.type) {
						case ey.C:
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
				Py = Object(v.c)({
					api: dy,
					history: py,
					hlsStreams: Ey,
					listings: _y,
					models: Sy,
					preloads: Dy,
					reports: wy,
					theaterSettings: jy,
					userSettings: Cy,
					automuteLevels: uy
				}),
				Ly = r("./src/reddit/actions/recentSubreddits/constants.ts"),
				Ny = r("./src/reddit/actions/session.ts");
			const ky = [];
			var xy = (e = ky, t) => {
				switch (t.type) {
					case Ny.c:
					case Ny.d:
						return ky;
					case Ly.d:
						return ((e, t) => Hi()(e, t) ? e : t)(e, t.subreddits);
					case Ly.f: {
						const {
							payload: r
						} = t, s = [r, ...e];
						return Array.from(new Set(s)).slice(0, Ly.c)
					}
					case Ly.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, Ly.c)
					}
					default:
						return e
				}
			};
			const Uy = {};
			var My = (e = Uy, t) => {
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
				Gy = r("./src/reddit/actions/pages/report/constants.ts");
			var Fy = (e = null, t) => {
				switch (t.type) {
					case Gy.a:
						return t.payload;
					default:
						return e
				}
			};
			var By = (e = null, t) => {
				switch (t.type) {
					case Gy.b:
						return t.payload;
					case Gy.c:
					case Gy.d:
						return !1;
					default:
						return e
				}
			};
			var Vy = (e = !1, t) => {
				switch (t.type) {
					case Gy.d:
						return !0;
					case Gy.c:
					case Gy.b:
						return !1;
					default:
						return e
				}
			};
			var Hy = (e = !1, t) => {
					switch (t.type) {
						case Gy.c:
							return !0;
						case Gy.b:
						case Gy.d:
							return !1;
						default:
							return e
					}
				},
				qy = Object(v.c)({
					error: By,
					pending: Vy,
					success: Hy
				}),
				Ky = r("./src/reddit/actions/reportPageRules/constants.ts");
			const Wy = [];
			var $y = (e = Wy, t) => {
					switch (t.type) {
						case Ky.a:
							return t.payload;
						default:
							return e
					}
				},
				Qy = Object(v.c)({
					reportPageApi: qy,
					reportPageRules: $y,
					initialReason: Fy
				}),
				Jy = r("./src/reddit/actions/reportRules.ts");
			const zy = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var Xy = (e = zy, t) => {
				switch (t.type) {
					case Jy.b:
						return {
							...e, sitewideRules: t.payload
						};
					case Jy.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(Re.a)("REQUEST_HOST_SET");
			var Yy = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(Re.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const Zy = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var em = (e = Zy, t) => {
					switch (t.type) {
						case "RUN_TIME_ENV_VARS__IS_STAGING":
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				tm = r("./src/reddit/components/SearchDropdown/index.tsx");
			var rm = (e = !1, t) => {
				switch (t.type) {
					case Pe.b:
						return !e;
					case oo.b: {
						const {
							event: r
						} = t.payload, s = r.target, a = document.getElementById(tm.b), n = document.getElementById(tm.a);
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
			const sm = Object.create(null);
			var am = (e = sm, t) => {
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
			var nm = (e = null, t) => {
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
			const cm = Object.create(null);
			var om = (e = cm, t) => {
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
				dm = r("./src/reddit/models/Search/index.ts");
			const im = {};
			var um = (e = im, t) => {
					switch (t.type) {
						case Pe.g: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(dm.d)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				lm = Object(v.c)({
					idsByQuery: om,
					models: um
				});
			const pm = {};
			var bm = (e = pm, t) => {
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
				fm = Object(v.c)({
					isDropdownOpen: rm,
					relatedQueries: am,
					searchQuery: nm,
					typeahead: lm,
					viewTreatment: bm
				}),
				ym = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const mm = {};
			var Em = (e = mm, t) => {
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
						if (i === ym.c.Trending || r) {
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
			const hm = {};
			var _m = (e = hm, t) => {
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
			const Om = {};
			var Im = (e = Om, t) => {
					switch (t.type) {
						case q.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : Om
						}
						default:
							return e
					}
				},
				gm = Object(v.c)({
					headerContent: Em,
					models: _m,
					order: Im
				});
			Object(Re.a)("SEO__CRAWLER_RECEIVED");
			var Sm = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				vm = r("./src/reddit/actions/seo/linksModule.ts");
			const Dm = {};
			var Tm = (e = Dm, t) => {
					switch (t.type) {
						case vm.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case vm.c:
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
				wm = r("./src/reddit/actions/seo/topicLinks.ts");
			const Am = {};
			var jm = (e = Am, t) => {
					switch (t.type) {
						case wm.a:
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
				Rm = Object(v.c)({
					crawler: Sm,
					linksModule: Tm,
					topicLinks: jm
				}),
				Cm = r("./src/reddit/actions/shortcuts/constants.ts");
			var Pm = (e = null, t) => {
				switch (t.type) {
					case Cm.a:
						return t.payload;
					case u.a:
						return null;
					default:
						return e
				}
			};
			var Lm = (e = null, t) => {
					switch (t.type) {
						case Cm.b:
							return t.payload || null;
						default:
							return e
					}
				},
				Nm = r("./src/reddit/constants/history.ts"),
				km = r("./src/reddit/constants/shortcuts.ts"),
				xm = r("./src/reddit/helpers/history/index.ts");
			const Um = km.d.Global,
				Mm = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(xm.b)(Nm.a.IsOverlay) ? km.d.Lightbox : km.d.CommentPage;
						case "rpan":
						case "subredditCreation":
							return Object(xm.b)(Nm.a.IsOverlay) ? km.d.Lightbox : Um;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return km.d.Listing;
						case "modQueuePages":
							return km.d.Modqueue;
						default:
							return Um
					}
				};
			var Gm = (e = Um, t) => {
					switch (t.type) {
						case u.a:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return Mm(e)
							}
							return Um;
						default:
							return e
					}
				},
				Fm = Object(v.c)({
					activeCommentId: Pm,
					activePostId: Lm,
					namespace: Gm
				});
			var Bm = (e = !1, t) => {
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
				Hm = Object(v.c)({
					firstFetch: Bm,
					models: Vm.b
				}),
				qm = r("./src/reddit/actions/streaming/modSettings.ts");
			var Km = (e = null, t) => {
				switch (t.type) {
					case qm.b:
					case qm.c:
						return null;
					case qm.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var Wm = (e = !1, t) => {
					switch (t.type) {
						case qm.b:
							return !0;
						case qm.c:
						case qm.a:
							return !1;
						default:
							return e
					}
				},
				$m = Object(v.c)({
					error: Km,
					pending: Wm
				}),
				Qm = r("./src/reddit/actions/streaming/constants.ts");
			const Jm = {};
			var zm = (e = Jm, t) => {
					switch (t.type) {
						case Qm.a: {
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
				Xm = Object(v.c)({
					api: $m,
					modSettings: zm
				}),
				Ym = r("./src/reddit/models/StructuredStyles/index.ts");
			const Zm = {};
			var eE = (e = Zm, t) => {
					switch (t.type) {
						case b.h:
						case b.b:
						case b.d:
							return t.payload.styles;
						case b.e:
							return Zm;
						case b.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case b.k: {
							const e = t.payload;
							return Object(Ym.h)(e.styles)
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
				aE = Object(v.c)({
					error: rE,
					pending: sE
				}),
				nE = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				cE = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const oE = {};
			var dE = (e = oE, t) => {
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
						case nE.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case nE.a: {
							const {
								flairId: r
							} = t.payload;
							return Object(Gt.a)(e, r)
						}
						case rl.b: {
							const {
								templateId: r
							} = t.payload;
							return Object(Gt.a)(e, r)
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
				iE = Object(v.c)({
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
					case jr.f:
						return null;
					default:
						return e
				}
			};
			const fE = {};
			var yE = (e = fE, t) => {
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
								s = Object(Ym.h)(r.styles);
							return {
								...e,
								[r.subredditId]: s
							}
						}
						case $i.k: {
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
						case jr.k: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Bl(e, {
									[r.subredditId]: {
										bannerBackgroundImage: r.imageUrl
									}
								})
							}
							return e
						}
						case jr.j: {
							const r = t.payload;
							if ("profileBanner" === r.key) {
								return Bl(e, {
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
				mE = Object(v.c)({
					draft: eE,
					exportStyles: aE,
					flairTemplate: iE,
					imagePreviews: lE,
					isBladeEditorDirty: pE,
					isEditing: bE,
					models: yE
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
				hE = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const _E = {};
			var OE = (e = _E, t) => {
				switch (t.type) {
					case hE.c:
					case hE.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case hE.a: {
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
			var gE = (e = IE, t) => {
					switch (t.type) {
						case hE.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case hE.b:
						case hE.a: {
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
				SE = Object(v.c)({
					error: OE,
					pending: gE
				});
			const vE = {};
			var DE = (e = vE, t) => {
					switch (t.type) {
						case hE.b: {
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
				TE = Object(v.c)({
					api: SE,
					models: DE
				}),
				wE = r("./src/reddit/actions/category/constants.ts"),
				AE = r("./src/reddit/actions/subredditMention/constants.ts");
			const jE = {};
			var RE = (e = jE, t) => {
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
					case Ae.b:
					case Ae.a:
					case Ae.e:
					case Ae.d:
					case V.PROFILE_POSTS_LOADED:
					case W.b:
					case W.e:
					case Pe.e:
					case zo.TOPIC_DATA_LOADED:
					case td.u: {
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
					case zi.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(e => e.type === mf.a.SUBREDDIT);
						return a.length ? a.reduce((e, t) => Object(L.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case wc.g:
					case wE.f:
					case td.g:
					case td.o: {
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
					case ee.s: {
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
				NE = Object(v.c)({
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
					case kE.d:
						return xE;
					default:
						return e
				}
			};
			var ME = (e = null, t) => {
				switch (t.type) {
					case kE.d: {
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
						case kE.d:
						case kE.b:
							return !1;
						default:
							return e
					}
				},
				FE = Object(v.c)({
					error: UE,
					lastCreatedSubredditId: ME,
					pending: GE
				});
			var BE = (e = !1, t) => {
					switch (t.type) {
						case td.w:
							return !0;
						case td.x:
						case td.v:
							return !1;
						default:
							return e
					}
				},
				VE = Object(v.c)({
					pending: BE
				});
			const HE = {};
			var qE = (e = HE, t) => {
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
			const KE = {};
			var WE = (e = KE, t) => {
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
				$E = Object(v.c)({
					error: qE,
					pending: WE
				});
			const QE = {};
			var JE = (e = QE, t) => {
					switch (t.type) {
						case td.f:
						case td.g:
							return {
								...e, [t.payload.key]: !1
							};
						case td.h:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				zE = Object(v.c)({
					pending: JE
				});
			var XE = (e = null, t) => {
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
			var YE = (e = !1, t) => {
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
				ZE = Object(v.c)({
					error: XE,
					pending: YE
				});
			var eh = (e = null, t) => {
				switch (t.type) {
					case td.k: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case td.m:
					case td.l:
						return null;
					default:
						return e
				}
			};
			var th = (e = !1, t) => {
					switch (t.type) {
						case td.m:
							return !0;
						case td.l:
						case td.k:
							return !1;
						default:
							return e
					}
				},
				rh = Object(v.c)({
					error: eh,
					pending: th
				}),
				sh = r("./src/reddit/actions/subredditRules/constants.ts");
			var ah = (e = !1, t) => {
					switch (t.type) {
						case sh.c:
							return !0;
						case sh.a:
						case sh.b:
							return !1;
						default:
							return e
					}
				},
				nh = r("./src/reddit/actions/subredditSettings.ts");
			var ch = (e = !1, t) => {
					switch (t.type) {
						case nh.e:
							return !0;
						case nh.f:
						case nh.d:
							return !1;
						default:
							return e
					}
				},
				oh = Object(v.c)({
					pending: ch
				});
			const dh = {};
			var ih = (e = dh, t) => {
					switch (t.type) {
						case td.n:
						case td.o:
							return {
								...e, [t.payload.key]: !1
							};
						case td.p:
							return {
								...e, [t.payload.key]: !0
							};
						default:
							return e
					}
				},
				uh = Object(v.c)({
					pending: ih
				}),
				lh = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const ph = {};
			var bh = (e = ph, t) => {
				switch (t.type) {
					case lh.c:
					case lh.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case lh.a: {
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
			const fh = {};
			var yh = (e = fh, t) => {
					switch (t.type) {
						case lh.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case lh.b:
						case lh.a: {
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
				mh = Object(v.c)({
					error: bh,
					pending: yh
				});
			const Eh = {};
			var hh = (e = Eh, t) => {
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
			const _h = {};
			var Oh = (e = _h, t) => {
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
				Ih = Object(v.c)({
					error: hh,
					pending: Oh
				}),
				gh = Object(v.c)({
					about: NE,
					create: FE,
					inlineEditing: VE,
					models: $E,
					onboarding: zE,
					productOffers: ZE,
					rankings: rh,
					rules: ah,
					settings: oh,
					similar: uh,
					topContent: Ih,
					wiki: mh
				}),
				Sh = r("./node_modules/lodash/isNil.js"),
				vh = r.n(Sh);
			const Dh = {};
			var Th = (e = Dh, t) => {
					switch (t.type) {
						case $.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: vh()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				wh = Object(v.c)({
					meta: Th
				});
			const Ah = {};
			var jh = (e = Ah, t) => {
				switch (t.type) {
					case wE.f: {
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
			const Rh = {};
			var Ch = (e = Rh, t) => {
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
				Ph = r("./src/reddit/actions/subredditCrosspostable.ts");
			var Lh = (e = null, t) => {
				switch (t.type) {
					case Ph.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case Ph.c:
					case Ph.b:
						return null;
					default:
						return e
				}
			};
			var Nh = (e = !1, t) => {
					switch (t.type) {
						case Ph.c:
							return !0;
						case Ph.b:
						case Ph.a:
							return !1;
						default:
							return e
					}
				},
				kh = Object(v.c)({
					errors: Lh,
					pending: Nh
				});
			const xh = {};
			var Uh = (e = xh, t) => {
					switch (t.type) {
						case Ph.b: {
							const {
								subredditIds: r
							} = t.payload;
							return Hi()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				Mh = Object(v.c)({
					api: kh,
					ids: Uh
				});
			const Gh = {};
			var Fh = (e = Gh, t) => {
					switch (t.type) {
						case $l.a: {
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
							return Bl(c, {
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
				Bh = Object(v.c)({
					models: Fh
				});
			const Vh = {};
			var Hh = (e = Vh, t) => {
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
			const qh = {};
			var Kh = (e = qh, t) => {
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
			const Wh = {};
			var $h = (e = Wh, t) => {
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
			const Qh = {};
			var Jh = (e = Qh, t) => {
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
				zh = Object(v.c)({
					assets: Hh,
					communityRaw: Kh,
					distributions: $h,
					releaseNotes: Jh
				}),
				Xh = r("./node_modules/lodash/isEqualWith.js"),
				Yh = r.n(Xh),
				Zh = r("./src/lib/forceHttps/index.ts");
			const e_ = {},
				t_ = (e, t) => {
					return !Yh()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				r_ = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let a = 0; a < r.length; a++) {
						const n = r[a],
							c = e[n],
							o = t[n];
						c && !t_(c, o) || (s[n] = o)
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var s_ = (e = e_, t) => {
				switch (t.type) {
					case zi.c:
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
								return n.icon.url ? c.icon.url = Object(Zh.a)(n.icon.url) : a && a.icon.url ? c.icon = a.icon : c.icon.url = "", a && a.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(L.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case Ly.b:
					case AE.d:
					case wE.f:
					case ge.f:
					case wc.g:
					case Zo.c:
					case ed.b:
					case De.e:
					case De.h:
					case G.k:
					case ve.r:
					case ve.u:
					case $i.h:
					case Jo.b:
					case F.b:
					case F.f:
					case ge.b:
					case Te.b:
					case B.b:
					case B.e:
					case H.c:
					case H.i:
					case H.e:
					case H.g:
					case Ae.b:
					case Ae.e:
					case V.MORE_POSTS_LOADED:
					case V.PROFILE_POSTS_LOADED:
					case $i.e:
					case q.SEARCH_RESULTS_RECEIVED:
					case K.SUBREDDIT_LOADED:
					case we.PAGE_LOADED:
					case Fr.e:
					case Cs.PAGE_LOADED:
					case $i.m:
					case W.b:
					case W.e:
					case je.b:
					case "RECOMMENDED_POSTS_LOADED":
					case Pe.e:
					case $.c:
					case $.f:
					case $.i:
					case td.a:
					case td.g:
					case td.o:
					case zo.TOPIC_DATA_LOADED:
					case zo.MORE_POSTS_LOADED:
						return r_(e, t.payload.subreddits || {});
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
						return r_(e, s)
					}
					case Pe.g: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return r_(e, r.subreddits || {})
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
						return r_(e, r)
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
					case nh.f: {
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
					case hE.b: {
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
			var a_ = (e = null, t) => {
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
			var n_ = (e = !1, t) => {
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
			var c_ = (e = !1, t) => {
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
				o_ = Object(v.c)({
					errors: a_,
					fetched: n_,
					pending: c_
				});
			var d_ = (e = null, t) => {
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
				i_ = Object(v.c)({
					api: o_,
					order: d_
				});
			const u_ = {};
			var l_ = (e = u_, t) => {
				switch (t.type) {
					case nh.a: {
						const r = t.payload;
						return Object(L.merge)(e, r)
					}
					case nh.b: {
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
			const p_ = {};
			var b_ = (e = p_, t) => {
				switch (t.type) {
					case td.g: {
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
			const f_ = {};
			var y_ = (e = f_, t) => {
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
			const m_ = {};
			var E_ = (e = m_, t) => {
				var r;
				switch (t.type) {
					case ee.qb:
					case ee.pb: {
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
			const h_ = {},
				__ = (e, t, r) => {
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
				O_ = (e, t, r) => {
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
			var I_ = (e = h_, t) => {
				switch (t.type) {
					case ee.pb: {
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
							[r]: __(a, r, s)
						}
					}
					case En.c: {
						const {
							subredditId: r,
							emojiId: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: O_(a, r, s)
						}
					}
					default:
						return e
				}
			};
			const g_ = {},
				S_ = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var v_ = (e = g_, t) => {
					switch (t.type) {
						case ee.pb: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(S_)
							}
						}
						case ee.S:
						case ee.V: {
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
							}).filter(e => e.score > 0);
							if (c) return {
								...e,
								[r]: o.sort(S_)
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
									[r]: [t, ...e[r]].sort(S_)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				D_ = r("./src/lib/makeProductOfferKey/index.ts");
			const T_ = {};
			var w_ = (e = T_, t) => {
				switch (t.type) {
					case ee.cb:
					case ee.pb: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!(null == s ? void 0 : s.length)) return e;
						const a = s.reduce((e, t) => {
							const s = Object(D_.a)(t.type, r);
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
			var j_ = (e = A_, t) => {
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
				R_ = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const C_ = {};
			var P_ = (e = C_, t) => {
				switch (t.type) {
					case td.y: {
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
						}) => R_.d.includes(e))))(s.cards);
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
			const L_ = {};
			var N_ = (e = L_, t) => {
				var r, s;
				switch (t.type) {
					case td.y: {
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
					case td.d: {
						const {
							subredditId: r,
							questionId: a
						} = t.payload, n = null !== (s = e[r]) && void 0 !== s ? s : [];
						return Object(L.setIn)(e, [r], n.filter(e => e.id !== a))
					}
					case td.e:
						return L_;
					default:
						return e
				}
			};
			const k_ = {};
			var x_ = (e = k_, t) => {
				switch (t.type) {
					case td.b: {
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
			const U_ = {};
			var M_ = (e = U_, t) => {
				switch (t.type) {
					case td.c: {
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
			const G_ = {};
			var F_ = (e = G_, t) => {
				switch (t.type) {
					case sh.b: {
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
					case sh.e: {
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
					case sh.f: {
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
					case sh.g:
					case sh.d: {
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
			const B_ = {};
			var V_ = (e = B_, t) => {
				switch (t.type) {
					case nh.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case nh.f: {
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
					case jr.m: {
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
			const H_ = {};
			var q_ = (e = H_, t) => {
				switch (t.type) {
					case td.o: {
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
			const K_ = {};
			var W_ = (e = K_, t) => {
				switch (t.type) {
					case td.y: {
						const {
							id: r,
							survey: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case td.z: {
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
			const $_ = {};
			var Q_ = (e = $_, t) => {
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
			const J_ = [];
			var z_ = (e = J_, t) => {
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
			const X_ = {};
			var Y_ = (e = X_, t) => {
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
				Z_ = r("./src/reddit/actions/subredditWelcomeMessage.ts");
			const eO = {};
			var tO = (e = eO, t) => {
					switch (t.type) {
						case Z_.a: {
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
				rO = Object(v.c)({
					about: RE,
					api: gh,
					appliedFilters: wh,
					byCategory: jh,
					communityInfo: Ch,
					crosspostable: Mh,
					duplicates: Bh,
					gov: zh,
					models: s_,
					moderated: i_,
					notificationSettings: l_,
					onboarding: b_,
					powerupRecentSupporters: y_,
					powerups: E_,
					powerupsEmojis: I_,
					powerupTopSupporters: v_,
					productOffers: w_,
					products: j_,
					progressModule: P_,
					questions: N_,
					rankings: x_,
					rankingsPageInfo: M_,
					rules: F_,
					settings: V_,
					similar: q_,
					survey: W_,
					topContent: Q_,
					trending: z_,
					unavailableModels: Y_,
					welcomeMessage: tO
				});
			const sO = {};
			var aO = Object(_b.a)((e = sO, t) => {
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
						case bd.p: {
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
				}, sO),
				nO = Object(v.c)({
					data: aO
				}),
				cO = r("./node_modules/lodash/values.js"),
				oO = r.n(cO);
			const dO = [];
			var iO = (e = dO, t) => {
				switch (t.type) {
					case zi.d: {
						const {
							makeFavorite: r,
							multiredditsModelsState: s,
							multiredditPath: a
						} = t.payload;
						if (r) {
							const t = [...e],
								r = Wi(t, a, (e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1);
							return t.splice(r, 0, a), t
						}
						return e.filter(e => e !== a)
					}
					case ve.u: {
						const {
							multireddits: e
						} = t.payload;
						return oO()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
					}
					case zi.e: {
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
			var uO = (e = null, t) => {
				switch (t.type) {
					case zi.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case zi.b:
					case zi.c:
						return null;
					default:
						return e
				}
			};
			var lO = (e = !1, t) => {
				switch (t.type) {
					case zi.b:
					case zi.c:
						return !0;
					case zi.a:
						return !1;
					default:
						return e
				}
			};
			var pO = (e = !1, t) => {
					switch (t.type) {
						case zi.b:
							return !0;
						case zi.c:
						case zi.a:
							return !1;
						default:
							return e
					}
				},
				bO = Object(v.c)({
					errors: uO,
					fetched: lO,
					pending: pO
				});
			const fO = [];
			var yO = (e = fO, t) => {
				switch (t.type) {
					case zi.c: {
						const {
							profiles: e,
							favoriteProfileIds: r,
							favoriteSubredditIds: s
						} = t.payload;
						let a;
						return (a = r && r.length ? r : s ? s.filter(t => !!e[t]) : []).sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), a
					}
					case zi.f: {
						const {
							makeFavorite: r,
							identifier: s,
							profileModels: a
						} = t.payload, {
							id: n,
							type: c
						} = s;
						if (c !== mf.a.PROFILE) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Wi(o, n, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, n)
						} else {
							const e = o.indexOf(n);
							o.splice(e, 1)
						}
						return o
					}
					case zi.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(t => t.type === mf.a.PROFILE && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const mO = [];
			var EO = (e = mO, t) => {
				switch (t.type) {
					case zi.c: {
						const {
							subreddits: e,
							favoriteSubredditIds: r
						} = t.payload, s = r ? r.filter(t => !!e[t]) : [];
						return s.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), s
					}
					case zi.f: {
						const {
							makeFavorite: r,
							identifier: s,
							subredditModels: a
						} = t.payload, {
							id: n,
							type: c
						} = s;
						if (c !== mf.a.SUBREDDIT) return e;
						const o = e ? e.slice() : [];
						if (r) {
							const e = Wi(o, n, (e, t) => a[e].displayText.toLowerCase() > a[t].displayText.toLowerCase() ? 1 : -1);
							o.splice(e, 0, n)
						} else {
							const e = o.indexOf(n);
							o.splice(e, 1)
						}
						return o
					}
					case zi.h: {
						const {
							identifiers: r,
							userIsSubscriber: s
						} = t.payload, a = r.filter(t => t.type === mf.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const hO = [],
				_O = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var OO = (e = hO, t) => {
					switch (t.type) {
						case ve.u: {
							const {
								multireddits: r
							} = t.payload, s = oO()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(_O(r));
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
								d = Ki()(e, c).sort(_O(o));
							return Hi()(e, d) ? e : d
						}
						case zi.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: a
							} = t.payload;
							return r ? [...e, s].sort(_O(a)) : e.filter(e => e !== s)
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
							return [...e, r.url].sort(_O(a))
						}
						default:
							return e
					}
				},
				IO = r("./node_modules/lodash/difference.js"),
				gO = r.n(IO);
			const SO = [];
			var vO = (e = SO, t) => {
				switch (t.type) {
					case $i.n: {
						const {
							profileOrder: r
						} = t.payload;
						return Pp()([...e, ...r])
					}
					case zi.c: {
						const {
							profiles: e
						} = t.payload, r = Object.keys(e);
						return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
					}
					case zi.h: {
						const {
							identifiers: r,
							profileModels: s,
							userIsSubscriber: a
						} = t.payload, n = r.filter(e => e.type === mf.a.PROFILE);
						if (!n.length) return e;
						const c = n.map(e => e.id);
						return a ? Pp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : gO()(e, c)
					}
					default:
						return e
				}
			};
			const DO = [];
			var TO = (e = DO, t) => {
					switch (t.type) {
						case $i.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return Pp()([...e, ...r])
						}
						case zi.c: {
							const {
								subreddits: e
							} = t.payload, r = Object.keys(e);
							return r.sort((t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1), r
						}
						case zi.h: {
							const {
								identifiers: r,
								subredditModels: s,
								userIsSubscriber: a
							} = t.payload, n = r.filter(e => e.type === mf.a.SUBREDDIT && !!e.id);
							if (!n.length) return e;
							const c = n.map(e => e.id);
							return a ? Pp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : gO()(e, c)
						}
						default:
							return e
					}
				},
				wO = Object(v.c)({
					api: bO,
					favoriteMultiOrder: iO,
					favoriteProfileOrder: yO,
					favoriteSubredditOrder: EO,
					multiredditOrder: OO,
					profileOrder: vO,
					subredditOrder: TO
				}),
				AO = r("./src/reddit/actions/survey/constants.ts");
			var jO = (e = null, t) => {
				switch (t.type) {
					case AO.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var RO = (e = 1, t) => {
				switch (t.type) {
					case AO.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var CO = (e = !1, t) => {
				switch (t.type) {
					case AO.b:
						return !e;
					default:
						return e
				}
			};
			var PO = (e = !0, t) => {
					switch (t.type) {
						case AO.h:
							return !e;
						default:
							return e
					}
				},
				LO = Object(v.c)({
					activeDemoTrigger: jO,
					demoTriggerThreshold: RO,
					isDemoEnabled: CO,
					isSampleFactorEnabled: PO
				}),
				NO = r("./src/reddit/actions/tabBadging.ts");
			var kO = (e = !1, t) => {
					switch (t.type) {
						case NO.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				xO = r("./src/reddit/actions/tags/constants.ts");
			const UO = {
				pending: !1,
				error: !1
			};
			var MO = (e = UO, t) => {
				switch (t.type) {
					case xO.l:
						return {
							...e, pending: !0
						};
					case xO.m:
						return {
							error: !1, pending: !1
						};
					case xO.k:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const GO = {
				pending: !1,
				error: !1
			};
			var FO = (e = GO, t) => {
				switch (t.type) {
					case xO.o:
						return {
							...e, pending: !0
						};
					case xO.p:
						return {
							error: !1, pending: !1
						};
					case xO.n:
						return {
							error: !0, pending: !1
						};
					default:
						return e
				}
			};
			const BO = {
				pending: !1,
				error: !1
			};
			var VO = (e = BO, t) => {
				switch (t.type) {
					case xO.t:
						return {
							...e, pending: !0
						};
					case xO.s:
					case xO.r:
					case xO.e:
					case xO.j:
						return {
							error: !1, pending: !1
						};
					case xO.q:
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
			var qO = (e = HO, t) => {
				switch (t.type) {
					case xO.v:
						return {
							...e, pending: !0
						};
					case xO.w:
						return {
							error: !1, pending: !1
						};
					case xO.u:
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
						case xO.g:
							return {
								...e, pending: !0
							};
						case xO.h:
							return {
								error: !1, pending: !1
							};
						case xO.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				$O = Object(v.c)({
					create: MO,
					deleteTag: FO,
					fetch: VO,
					update: qO,
					updatePrimaryTag: WO
				});
			const QO = {
				global: [],
				recommendedGlobal: []
			};
			var JO = (e = QO, t) => {
					switch (t.type) {
						case xO.w:
						case xO.r:
						case xO.e:
						case xO.j: {
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
				zO = r("./node_modules/lodash/uniqWith.js"),
				XO = r.n(zO),
				YO = r("./src/reddit/models/Option/index.ts");
			const ZO = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var eI = (e = ZO, t) => {
					switch (t.type) {
						case xO.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: XO()([...e.selectedOptions || [], {
									...r
								}], YO.a)
							}
						}
						case xO.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(YO.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case xO.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case xO.a: {
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
				tI = r("./src/reddit/helpers/tags/index.ts");
			const rI = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var sI = (e = rI, t) => {
					switch (t.type) {
						case xO.j: {
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
						case xO.w:
						case xO.s:
						case xO.r: {
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
									[o]: Object(tI.a)(n[o] || {})
								}
							}
						}
						case xO.p: {
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
						case xO.e: {
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
						case xO.h: {
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
				aI = r("./src/reddit/reducers/tags/selected/index.ts"),
				nI = Object(v.c)({
					api: $O,
					availableGlobalTagOrder: JO,
					models: sI,
					selected: aI.b,
					creation: eI
				}),
				cI = r("./src/reddit/actions/redditEmbed.ts"),
				oI = r("./src/reddit/actions/theme.ts"),
				dI = r("./src/reddit/actions/users.ts"),
				iI = r("./src/reddit/models/Theme/index.ts");
			const uI = {
				current: iI.c,
				cached: {}
			};
			var lI = (e = uI, t) => {
					switch (t.type) {
						case oI.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? iI.b : iI.c,
								cached: {}
							}
						}
						case Ar.a:
						case Ar.b:
						case Ar.h:
						case Ar.i:
						case Ar.f:
						case Ar.j:
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
						case cI.b:
						case $.i:
						case Pe.e:
						case q.SEARCH_RESULTS_RECEIVED:
						case jr.i:
						case we.PAGE_LOADED:
						case Cs.PAGE_LOADED:
						case dI.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: iI.b,
									cached: {}
								} : {
									current: iI.c,
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
						case V.PROFILE_POSTS_FAILED:
						case V.PROFILE_POSTS_LOADED: {
							const {
								account: r
							} = t.payload;
							return r ? r.nightmode ? {
								current: iI.b,
								cached: {}
							} : {
								current: iI.c,
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
									current: iI.b,
									cached: {}
								} : {
									current: iI.c,
									cached: {}
								}
							}
							return e;
						case jr.h: {
							if (!t.payload) return e;
							const {
								nightmode: r
							} = t.payload;
							return r ? {
								current: iI.b,
								cached: {}
							} : {
								current: iI.c,
								cached: {}
							}
						}
						case b.d:
							return {
								current: iI.c, cached: {}
							};
						case b.e:
							return t.payload.nightmodeTempUpdated ? {
								current: iI.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				pI = r("./src/reddit/actions/toaster.ts");
			const bI = [];
			var fI = (e = bI, t) => {
					switch (t.type) {
						case pI.c: {
							const r = t.payload,
								s = [];
							let a = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), a = a || e === r
							}
							return a || s.push(r), s
						}
						case pI.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				yI = r("./src/reddit/actions/tooltip.ts");
			var mI = (e = null, t) => {
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
						case oo.b:
						case oo.c:
						case oo.a:
							return null;
						default:
							return e
					}
				},
				EI = r("./src/reddit/actions/tracing.ts");
			const hI = {
				traceId: void 0
			};
			var _I = (e = hI, t) => {
					switch (t.type) {
						case EI.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				OI = r("./src/lib/asyncActions/index.ts"),
				II = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const gI = Object(OI.c)(II.c.requestedActionType, II.c.succeededActionType, II.c.failedActionType),
				SI = Object(OI.c)(II.a.requestedActionType, II.a.succeededActionType, II.a.failedActionType),
				vI = Object(OI.c)(II.d.requestedActionType, II.d.succeededActionType, II.d.failedActionType);
			var DI = Object(v.c)({
					load: gI,
					execute: SI,
					send: vI
				}),
				TI = r("./src/reddit/actions/tracking.ts");
			const wI = {};
			var AI = (e = wI, t) => {
					switch (t.type) {
						case TI.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case TI.b: {
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
				jI = Object(v.c)({
					reCaptchaEnterprise: DI,
					viewportDataLoaded: AI
				}),
				RI = r("./src/reddit/actions/trafficStats/constants.ts");
			var CI = (e = !1, t) => {
				switch (t.type) {
					case RI.c:
						return !0;
					case RI.b:
					case RI.a:
						return !1;
					default:
						return e
				}
			};
			var PI = (e = null, t) => {
					switch (t.type) {
						case RI.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case RI.c:
							return null;
						default:
							return e
					}
				},
				LI = Object(v.c)({
					pending: CI,
					trafficStats: PI
				});
			var NI = (e = null, t) => {
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
			var kI = (e = !1, t) => {
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
				xI = Object(v.c)({
					error: NI,
					pending: kI
				});
			var UI = (e = null, t) => {
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
			var MI = (e = "", t) => {
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
				FI = Object(v.c)({
					api: xI,
					contentId: UI,
					initialRecipient: MI,
					publicAddress: GI
				}),
				BI = Object(v.c)({
					communityPoints: FI
				}),
				VI = r("./src/reddit/actions/search/trending.ts");
			const HI = [];
			var qI = (e = HI, t) => {
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
				KI = Object(v.c)({
					models: qI
				});
			var WI = r("./src/reddit/routes/premium/index.ts");
			const $I = {};
			var QI = (e = $I, t) => {
					switch (t.type) {
						case Hf.a: {
							const {
								trophies: r
							} = t.payload;
							return Object.values(r).forEach(e => {
								"t6_bf" === e.awardId && (e.url = WI.b)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				JI = r("./src/reddit/actions/upload.ts"),
				zI = r("./src/reddit/models/Upload/index.ts");
			const XI = {};
			var YI = (e = XI, t) => {
					switch (t.type) {
						case JI.d: {
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
									status: zI.a.PENDING
								}
							}
						}
						case JI.h: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: zI.a.UPLOADING
								}
							}
						}
						case JI.c: {
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
						case JI.e: {
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
						case JI.g: {
							const {
								key: r,
								url: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									status: zI.a.SUCCESS,
									url: s
								}
							}
						}
						case JI.b: {
							const {
								key: r,
								error: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									status: zI.a.FAILED,
									error: s
								}
							}
						}
						case JI.a: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: zI.a.CANCELED
								}
							}
						}
						case JI.f: {
							const {
								key: r
							} = t.payload, s = e[r];
							return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), Rs()(e, r)
						}
						default:
							return e
					}
				},
				ZI = r("./src/reddit/actions/upvotePrompt.ts");
			var eg = (e = 0, t) => {
				switch (t.type) {
					case ZI.a:
						return ++e;
					default:
						return e
				}
			};
			const tg = {};
			var rg = (e = tg, t) => {
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
				sg = r("./src/reddit/actions/accountGender/constants.ts"),
				ag = r("./src/reddit/actions/inbox.ts"),
				ng = r("./src/reddit/actions/pages/appeal/constants.ts"),
				cg = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				og = r("./src/reddit/actions/sso/constants.ts");
			const dg = (e, t) => {
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
					postKarma: c,
					commentKarma: o,
					totalKarma: d
				} = t, i = a || (null == s ? void 0 : s.awardeeKarma) || 0, u = n || (null == s ? void 0 : s.awarderKarma) || 0, l = c || (null == s ? void 0 : s.postKarma) || 0, p = o || (null == s ? void 0 : s.commentKarma) || 0, b = d || (null == s ? void 0 : s.totalKarma) || 0;
				return {
					...t,
					awardeeKarma: i,
					awarderKarma: u,
					postKarma: l,
					commentKarma: p,
					totalKarma: b,
					gender: r
				}
			};
			var ig = Object(_b.a)((e = null, t) => {
				switch (t.type) {
					case ng.a:
					case ng.b:
					case Gy.b:
					case Gy.c:
					case Ar.a:
					case Ar.b:
					case Ar.f:
					case Ar.h:
					case Ar.i:
					case Ar.j:
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
					case $i.l:
					case B.b:
					case B.a:
					case B.e:
					case B.d:
					case H.c:
					case H.i:
					case Ae.e:
					case Ae.d:
					case Ae.b:
					case Ae.a:
					case V.PROFILE_POSTS_LOADED:
					case V.PROFILE_POSTS_FAILED:
					case K.SUBREDDIT_LOADED:
					case q.SEARCH_FAILED:
					case q.SEARCH_RESULTS_RECEIVED:
					case we.PAGE_LOADED:
					case Cs.PAGE_LOADED:
					case Pe.c:
					case Pe.e:
					case cI.a:
					case cI.b:
					case jr.i:
					case cg.b:
					case dI.c:
					case zo.TOPIC_DATA_LOADED:
						return dg(e, t.payload.account);
					case dI.n:
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
						return r ? dg(e, r.account) : e
					}
					case dI.a:
						return e ? {
							...e,
							seenLayoutSwitch: !0
						} : e;
					case s.d:
						return e ? {
							...e,
							seenRedesignModal: !0
						} : e;
					case jr.k:
					case jr.j: {
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
							awarderKarma: s,
							awardeeKarma: a,
							postKarma: n,
							commentKarma: c,
							totalKarma: o
						} = t.payload;
						if (r.toLowerCase() !== (e && Object(J.e)(e).toLowerCase())) return e;
						const d = a || (null == e ? void 0 : e.awardeeKarma) || 0,
							i = s || (null == e ? void 0 : e.awarderKarma) || 0,
							u = n || (null == e ? void 0 : e.postKarma) || 0,
							l = c || (null == e ? void 0 : e.commentKarma) || 0,
							p = o || (null == e ? void 0 : e.totalKarma) || 0;
						return e && {
							...e,
							awardeeKarma: d,
							awarderKarma: i,
							postKarma: u,
							commentKarma: l,
							totalKarma: p
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
					case Lu.h: {
						const {
							price: r
						} = t.payload;
						return (null == e ? void 0 : e.coins) && r ? {
							...e,
							coins: e.coins - r
						} : e
					}
					case ag.a: {
						const {
							inboxCount: r
						} = t.payload;
						return e ? {
							...e,
							inboxCount: r
						} : e
					}
					case og.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case og.b: {
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
					case sg.a:
					case sg.b: {
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
			var ug = (e = null, t) => {
				switch (t.type) {
					case dI.m:
					case dI.n:
						return null;
					case dI.l:
						return t.payload;
					default:
						return e
				}
			};
			var lg = (e = !1, t) => {
					switch (t.type) {
						case dI.m:
							return !0;
						case dI.n:
						case dI.l:
							return !1;
						default:
							return e
					}
				},
				pg = Object(v.c)({
					error: ug,
					pending: lg
				}),
				bg = Object(v.c)({
					api: pg
				});
			var fg = (e = !1, t) => {
				switch (t.type) {
					case dI.j:
						return !0;
					default:
						return e
				}
			};
			var yg = (e = !1, t) => {
					switch (t.type) {
						case dI.i:
							return !0;
						case dI.j:
						case dI.h:
							return !1;
						default:
							return e
					}
				},
				mg = Object(v.c)({
					pending: yg,
					emailSent: fg
				}),
				Eg = Object(v.c)({
					api: mg
				}),
				hg = Object(v.c)({
					changeEmail: bg,
					sendResetEmail: Eg
				}),
				_g = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const Og = {};
			var Ig = (e = Og, t) => {
				switch (t.type) {
					case mt.f:
						return {
							...e, new: _g.a.pending
						};
					case mt.d:
						return {
							...e, new: _g.a.error
						};
					case mt.e:
						return {
							...e, new: _g.a.waitingForRequest
						};
					case mt.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: _g.a.pending
						}
					}
					case mt.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: _g.a.error
						}
					}
					case mt.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: _g.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const gg = [];
			var Sg = (e = gg, t) => {
					switch (t.type) {
						case mt.e:
							return [t.payload, ...e];
						case mt.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case jr.i:
							return t.payload.blockedUsers;
						default:
							return e
					}
				},
				vg = Object(v.c)({
					api: Ig,
					data: Sg
				}),
				Dg = r("./src/reddit/actions/chat/constants.ts"),
				Tg = r("./src/reddit/actions/chat/userSettings.ts");
			const wg = Dg.a.anybody;
			var Ag = (e = wg, t) => {
					switch (t.type) {
						case Tg.a:
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
				jg = Object(v.c)({
					invitePolicy: Ag
				});
			const Rg = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var Cg = (e = null, t) => {
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
						return Rg(e, r)
					}
					case Fr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return Rg(e, r.length)
					}
					case Fr.c:
					case Fr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return Rg(e, r)
					}
					default:
						return e
				}
			};
			const Pg = {};
			var Lg = (e = Pg, t) => {
					switch (t.type) {
						case Fn.a: {
							const e = t.payload.experimentVariants;
							return _u(e)
						}
						default:
							return e
					}
				},
				Ng = r("./src/reddit/actions/global/constants.ts");
			const kg = {};
			var xg = (e = kg, t) => {
					switch (t.type) {
						case Ng.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				Ug = Object(v.c)({
					byName: Lg,
					localPersisted: xg
				}),
				Mg = r("./src/reddit/actions/googleOneTap/index.ts");
			var Gg = (e = !1, t) => {
				switch (t.type) {
					case Mg.a:
						return !0;
					default:
						return e
				}
			};
			var Fg = (e = !1, t) => {
				switch (t.type) {
					case jr.e:
						return !0;
					case jr.d:
						return !1;
					default:
						return e
				}
			};
			var Bg = (e = "", t) => {
				switch (t.type) {
					case jr.i:
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
			var Hg = (e = Vg, t) => {
					switch (t.type) {
						case dI.b:
							return t.payload;
						default:
							return e
					}
				},
				qg = r("./src/reddit/actions/notifications/constants.ts"),
				Kg = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var Wg = (e = null, t) => {
				switch (t.type) {
					case Kg.a:
					case Kg.d:
					case qg.a:
						return t.payload && t.payload.error || null;
					case Kg.c:
					case Kg.f:
					case Kg.a:
					case qg.c:
					case qg.b:
						return null;
					default:
						return e
				}
			};
			var $g = (e = !1, t) => {
				switch (t.type) {
					case qg.c:
						return !1;
					case qg.b:
						return !0;
					default:
						return e
				}
			};
			var Qg = (e = !1, t) => {
					switch (t.type) {
						case qg.c:
							return !0;
						case qg.b:
						case qg.a:
							return !1;
						default:
							return e
					}
				},
				Jg = Object(v.c)({
					error: Wg,
					loaded: $g,
					pending: Qg
				});
			var zg = (e = null, t) => {
				switch (t.type) {
					case qg.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case qg.f:
					case qg.e:
						return null;
					default:
						return e
				}
			};
			var Xg = (e = !1, t) => {
				switch (t.type) {
					case qg.f:
						return !1;
					case qg.e:
						return !0;
					default:
						return e
				}
			};
			var Yg = (e = !1, t) => {
					switch (t.type) {
						case qg.f:
							return !0;
						case qg.e:
						case qg.d:
							return !1;
						default:
							return e
					}
				},
				Zg = Object(v.c)({
					error: zg,
					loaded: Xg,
					pending: Yg
				}),
				eS = Object(v.c)({
					getPreferences: Jg,
					setPreferences: Zg
				});
			const tS = {
				byId: {},
				allIds: []
			};
			var rS = (e = tS, t) => {
				switch (t.type) {
					case Kg.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case Kg.g: {
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
			const sS = {
				byId: {},
				allIds: []
			};
			var aS = (e = sS, t) => {
					switch (t.type) {
						case Kg.b: {
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
				nS = Object(v.c)({
					sections: aS,
					rows: rS
				}),
				cS = r("./src/lib/notifications/constants.ts");
			var oS = (e = !1, t) => {
				switch (t.type) {
					case cS.j:
						return !0;
					case cS.b:
					case cS.d:
					case cS.e:
						return !1;
					default:
						return e
				}
			};
			const dS = {
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
			var iS = (e = dS, t) => {
				switch (t.type) {
					case qg.b:
					case qg.f:
					case qg.d: {
						const {
							preferences: r
						} = t.payload;
						return Xa()(r) ? e : r
					}
					default:
						return e
				}
			};
			const uS = {
				byId: {},
				allIds: []
			};
			var lS = (e = uS, t) => {
				switch (t.type) {
					case Kg.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case Kg.g: {
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
			const pS = {
				byId: {},
				allIds: []
			};
			var bS = (e = pS, t) => {
					switch (t.type) {
						case Kg.e: {
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
				fS = Object(v.c)({
					sections: bS,
					rows: lS
				}),
				yS = Object(v.c)({
					api: eS,
					emailSettingsLayout: nS,
					isNotificationPromptVisible: oS,
					preferences: iS,
					pushSettingsLayout: fS
				});
			const mS = {};
			var ES = (e = mS, t) => {
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
			const hS = {},
				_S = (e, t) => `${e}_${t||new Date}`;
			var OS = (e = hS, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[_S(t.subredditInfo.id, t.allocatedAt)]: t
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
							[_S(t.subredditInfo.id, t.allocatedAt)]: t
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
							allocatedAt: a
						} = t.payload;
						if (s < 0) {
							const t = _S(r, a),
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
					case ee.P: {
						const {
							subredditId: r,
							allocatedAt: s
						} = t.payload, a = _S(r, s), n = e[a];
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
			var IS = (e = null, t) => {
				switch (t.type) {
					case ee.Ab: {
						const r = t.payload.powerups;
						return r ? Rs()({
							...e,
							...r
						}, "allocation") : e
					}
					case ee.pb: {
						const {
							userPowerups: r
						} = t.payload;
						return r ? Rs()({
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
			var gS, SS = (e = !1, t) => {
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
				vS = Object(v.c)({
					allocationByKey: OS,
					data: IS,
					fetched: SS
				}),
				DS = r("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(gS || (gS = {}));
			const TS = {
				status: gS.UNFETCHED,
				subscriptions: []
			};
			var wS = (e = TS, t) => {
				switch (t.type) {
					case ee.Eb:
						return {
							...e, status: gS.PENDING
						};
					case ee.Db: {
						const {
							subscriptions: r
						} = t.payload;
						return r ? {
							...e,
							subscriptions: r,
							status: gS.LOADED
						} : e
					}
					case ee.Cb:
						return {
							...e, status: gS.FAILED
						};
					default:
						return e
				}
			};
			var AS = (e = "", t) => {
				switch (t.type) {
					case dI.d:
						return t.payload;
					default:
						return e
				}
			};
			var jS = (e = null, t) => {
				switch (t.type) {
					case Ny.a:
					case Ny.b:
					case Ny.c:
					case Ny.e:
						return t.payload;
					case Ny.d:
						return null;
					default:
						return e
				}
			};
			var RS = (e = !1, t) => {
				switch (t.type) {
					case Ny.f:
						return !0;
					default:
						return e
				}
			};
			var CS = (e = "", t) => {
				switch (t.type) {
					case dI.k:
						return t.payload;
					default:
						return e
				}
			};
			var PS = (e = null, t) => {
				switch (t.type) {
					case Fn.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var LS = (e = null, t) => {
					switch (t.type) {
						case Fn.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				NS = Object(v.c)({
					isEmployee: PS,
					isLoggedIn: LS
				});
			var kS = (e = null, t) => {
					switch (t.type) {
						case jr.q: {
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
				xS = r("./src/reddit/actions/userWhitelist.ts");
			const US = {};
			var MS = (e = US, t) => {
				switch (t.type) {
					case xS.e:
						return {
							...e, new: _g.a.pending
						};
					case xS.d:
						return {
							...e, new: _g.a.error
						};
					case xS.f:
						return {
							...e, new: _g.a.waitingForRequest
						};
					case xS.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: _g.a.pending
						}
					}
					case xS.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: _g.a.error
						}
					}
					case xS.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: _g.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const GS = [];
			var FS = (e = GS, t) => {
					switch (t.type) {
						case xS.f:
							return [t.payload, ...e];
						case xS.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case jr.i:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				BS = Object(v.c)({
					api: MS,
					data: FS
				}),
				VS = Object(v.c)({
					account: ig,
					accountSettings: hg,
					blocked: vg,
					chatSettings: jg,
					drafts: Cg,
					experiments: Ug,
					googleOneTapEnabled: Gg,
					isCustomizeFlyoutShowing: Fg,
					topContentDismissalPrefsSet: kS,
					language: Bg,
					loid: Hg,
					notificationPrefs: yS,
					ownedBadges: ES,
					powerups: vS,
					prefs: DS.c,
					productOfferSubscriptions: wS,
					reddaid: AS,
					session: jS,
					sessionRefreshFailed: RS,
					sessionTracker: CS,
					temporaryGQL: NS,
					wallets: rg,
					whitelist: BS
				});
			var HS = (e = null, t) => {
				switch (t.type) {
					case cg.a:
						return t.payload || null;
					case cg.b:
					case cg.c:
						return null;
					default:
						return e
				}
			};
			var qS = (e = !1, t) => {
				switch (t.type) {
					case cg.c:
						return !0;
					case cg.b:
					case cg.a:
						return !1;
					default:
						return e
				}
			};
			var KS = (e = !1, t) => {
				switch (t.type) {
					case cg.b:
						return !0;
					case cg.a:
					case cg.c:
						return !1;
					default:
						return e
				}
			};
			var WS = (e = !1, t) => {
					switch (t.type) {
						case cg.b:
							return t.payload.userDataExportEligibility;
						case cg.a:
						case cg.c:
							return !1;
						default:
							return e
					}
				},
				$S = Object(v.c)({
					error: HS,
					pending: qS,
					success: KS,
					userDataExportEligibility: WS
				}),
				QS = Object(v.c)({
					userDataRequestPageApi: $S
				});
			const JS = {};
			var zS = (e = JS, t) => {
				switch (t.type) {
					case dI.g:
					case dI.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case dI.e: {
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
			var XS = (e = !1, t) => {
					switch (t.type) {
						case dI.g:
							return !0;
						case dI.f:
						case dI.e:
							return !1;
						default:
							return e
					}
				},
				YS = Object(v.c)({
					error: zS,
					pending: XS
				});
			const ZS = {};
			var ev = (e = ZS, t) => {
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
			const tv = {},
				rv = (e, t) => {
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
			var sv = (e = tv, t) => {
					switch (t.type) {
						case dI.f: {
							const {
								data: r
							} = t.payload;
							return rv(e, r)
						}
						case $i.k: {
							const {
								user: r
							} = t.payload;
							return rv(e, {
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
							const a = s.awardedLastMonth,
								n = a ? a.totalCount + 1 : 1,
								c = a && a.topAward;
							return c ? rv(e, {
								[r.toLowerCase()]: {
									...s,
									awardedLastMonth: {
										totalCount: n,
										topAward: c
									}
								}
							}) : e
						}
						case ee.eb: {
							const {
								userName: r,
								awardeeKarma: s,
								awarderKarma: a,
								postKarma: n,
								commentKarma: c,
								totalKarma: o
							} = t.payload, d = e[r.toLowerCase()];
							if (!d) return e;
							const i = s || d.awardeeKarma,
								u = a || d.awarderKarma,
								l = n || d.postKarma,
								p = c || d.commentKarma,
								b = o || d.totalKarma;
							return rv(e, {
								[r.toLowerCase()]: {
									...d,
									awardeeKarma: i,
									awarderKarma: u,
									postKarma: l,
									commentKarma: p,
									totalKarma: b
								}
							})
						}
						case jr.k:
						case jr.j: {
							const {
								imageUrl: r,
								key: s,
								username: a
							} = t.payload;
							if ("profileIcon" !== s) return e;
							const n = a.toLowerCase(),
								c = e[n];
							return c ? rv(e, {
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
				av = r("./src/reddit/actions/usernameAvailable.ts");
			const nv = {};
			var cv = (e = nv, t) => {
				switch (t.type) {
					case av.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: av.b.Available
						}
					}
					case av.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: av.b.Error
						}
					}
					case av.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: av.b.Pending
						}
					}
					case av.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: av.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const ov = {};
			var dv = (e = ov, t) => {
				switch (t.type) {
					case ee.gb: {
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
			var iv = (e = !1, t) => {
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
				uv = Object(v.c)({
					allocationByKey: dv,
					fetched: iv
				}),
				lv = r("./src/reddit/actions/presence.ts");
			const pv = {};
			var bv = (e = pv, t) => {
				switch (t.type) {
					case lv.a:
						return {
							...e, ...t.payload.presentUsers
						};
					default:
						return e
				}
			};
			var fv = (e = null, t) => {
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
			var yv = (e = !1, t) => {
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
				mv = Object(v.c)({
					error: fv,
					pending: yv
				});
			var Ev = (e = null, t) => {
				switch (t.type) {
					case ee.yb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const hv = {};
			var _v = (e = hv, t) => {
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
			const Ov = {};
			var Iv = (e = Ov, t) => {
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
							return Rs()(e, [r])
						}
						default:
							return e
					}
				},
				gv = Object(v.c)({
					api: mv,
					currentPostId: Ev,
					currentRank: _v,
					list: Iv
				}),
				Sv = Object(v.c)({
					api: YS,
					appliedBadges: ev,
					models: sv,
					nameAvailable: cv,
					topAwarders: gv,
					powerups: uv,
					presence: bv
				});
			const vv = {};
			var Dv = (e = vv, t) => {
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
				Tv = r("./src/reddit/actions/widgets/constants.ts");
			const wv = {};
			var Av = (e = wv, t) => {
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
						case Tv.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case Tv.h: {
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
				jv = r("./src/reddit/models/Widgets/index.ts");
			const Rv = {};
			var Cv = (e = Rv, t) => {
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
					case Tv.b: {
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
								styles: Object(jv.m)()
							}
						}), t
					}
					case Tv.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case Tv.i:
					case Tv.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case Tv.h: {
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
					case zi.h: {
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
					case nh.f: {
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
			const Pv = {};
			var Lv = (e = Pv, t) => {
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
			const Nv = {};
			var kv = (e = Nv, t) => {
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
					case Tv.e:
					case Tv.b: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgets.layout.sidebar.order
						}
					}
					case Tv.f: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgetIds
						}
					}
					case Tv.g: {
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
					case Tv.h: {
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
			const xv = {
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
				listings: vd,
				live: jd,
				mediaGalleries: kd,
				mediaPlayback: Md,
				meta: Bd,
				moderatingSubreddits: qd,
				moderationPromptId: Kd,
				modListingPage: Yd,
				modModeEnabled: ei,
				moreComments: ii,
				multireddits: ru,
				notificationBannerId: au,
				notificationsInbox: fu,
				nps: Eu,
				page: Su,
				platform: Tu,
				postCollection: tl,
				polls: Hu,
				postFlair: ol,
				posts: hb,
				postStickiedComments: gb,
				givePremium: no,
				products: Ub,
				profileCommentsPage: Yb,
				profilePrivatePage: yf,
				profileModSettingsPage: rf,
				profilePostsPage: af,
				profiles: Qf,
				promos: Zf,
				publicAccessNetwork: Py,
				recentSubreddits: xy,
				recommendations: My,
				reportPage: Qy,
				reportRules: Xy,
				requestHost: Yy,
				runTimeEnvVars: em,
				search: fm,
				searchDiscoveryUnits: gm,
				seo: Rm,
				shortcuts: Fm,
				sidebarPromotedPosts: Hm,
				streaming: Xm,
				structuredStyles: mE,
				stylesheets: EE,
				subredditAutocomplete: TE,
				subreddits: rO,
				subredditStickyPosts: nO,
				subscriptions: wO,
				survey: LO,
				tabBadged: kO,
				tags: nI,
				themes: lI,
				toaster: fI,
				tooltipId: mI,
				tracing: _I,
				tracking: jI,
				trafficStats: LI,
				transfers: BI,
				trending: KI,
				trophies: QI,
				uploads: YI,
				user: VS,
				userDataRequestPage: QS,
				upvotePromptCountPerSess: eg,
				users: Sv,
				widgets: Object(v.c)({
					idCardIds: Dv,
					menuIds: Av,
					models: Cv,
					moderatorIds: Lv,
					sidebar: kv
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
					experimentName: a.U,
					expEventOverride: !1
				}), e => e),
				u = e => e === a.N.Onetap,
				l = e => e === a.N.OnetapAuto,
				p = e => e.user.googleOneTapEnabled,
				b = Object(s.a)(o.K, i, (e, t) => !e && !!t),
				f = Object(s.a)(o.K, i, (e, t) => !e && !!t && !Object(a.Pd)(t))
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
						experimentName: s.Mc
					}) === s.Vc.Enabled
				},
				c = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: a.a,
						experimentName: s.Lc
					}) === s.Uc.Enabled
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
						experimentName: s.Id
					});
					return r === s.Jd.Variant1 || r === s.Jd.Variant2
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.355b8b396286022473b9.js.map