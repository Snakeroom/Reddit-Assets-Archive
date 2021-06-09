// https://www.redditstatic.com/desktop2x/Governance~Reddit.e328ceb895556d2359b1.js
// Retrieved at 6/9/2021, 2:50:05 PM by Reddit Dataminer v1.0.0
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
					y = !1;

				function f(t, r, s) {
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
						return f(t, a), {
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
				var D = t.listen = function(e) {
					-1 === l.indexOf(e) && (l.push(e), p = o(l)), y || (f("message", S), y = !0)
				};
				t.stopListening = function(e) {
					var t = l.indexOf(e); - 1 !== t && (l.splice(t, 1), l.length ? p = o(l) : (m("message", S), y = !1))
				}, t.proxy = function(e, t) {
					D(e), Array.isArray(t) || (t = [t]);
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
			e.exports = JSON.parse('{"id":"0290a261578c"}')
		},
		"./src/graphql/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"9995fe64fd5a"}')
		},
		"./src/graphql/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"eab9458f507c"}')
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
				return y
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
			var y = l;
			const f = new class {
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
			t.b = f
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
				y = Object(s.a)(c),
				f = Object(s.a)(o),
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
						r(y({
							badgeIds: e,
							subredditId: t,
							userId: d.id
						}));
						const l = await Object(n.a)(c(), t, i, u);
						l.ok || (r(f({
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
				return y
			})), r.d(t, "g", (function() {
				return h
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
				y = Object(s.a)(i),
				f = Object(s.a)(u),
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
							e(f({
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
				y = r("./src/reddit/actions/chat/constants.ts");
			const f = Object(a.a)("USER_SETTINGS__FETCH_PENDING"),
				m = Object(a.a)("USER_SETTINGS__FETCH_FAILURE"),
				E = "USER_SETTINGS__UPDATE_SUCCESS",
				h = Object(a.a)(E),
				_ = () => async (e, t, {
					apiContext: r
				}) => {
					e(f());
					const s = await (e => Object(d.a)(Object(i.a)(e, [u.a]), {
						endpoint: `${c.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
						method: o.hb.GET
					}))(r());
					if (s.ok) {
						const t = {
							...s.body
						};
						e(h({
							invitePolicy: y.a[t.invite_policy]
						}))
					} else e(m(s.error))
				}, O = Object(a.a)("USER_SETTINGS__SAVE_PENDING"), I = Object(a.a)("USER_SETTINGS__SAVE_FAILURE"), g = e => async (t, r, {
					apiContext: a
				}) => {
					const f = r(),
						{
							invitePolicy: m
						} = e,
						E = Object.keys(y.a).find(e => y.a[e] === m);
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
							}))(E)(f)), e.ok) {
							const e = y.a[E];
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
				return f
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
				return D
			})), r.d(t, "a", (function() {
				return v
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
			}, b = r("./src/reddit/helpers/genericServerError/index.ts"), y = r("./src/reddit/selectors/claimgold.ts");
			const f = "CLAIMGOLD__OPEN_CLAIMGOLD_MODAL",
				m = "CLAIMGOLD__CLOSE_CLAIMGOLD_MODAL",
				E = Object(a.a)(f),
				h = Object(a.a)(m),
				_ = () => async (e, t) => {
					const r = t();
					Object(y.b)(r) ? e(h()) : e(E())
				}, O = "CLAIMGOLD_UPDATE_CODE", I = Object(a.a)(O), g = "CLAIM_GOLD__TRIGGER_LOADER", S = "CLAIM_GOLD__CLAIM_GOLD_PENDING", D = "CLAIM_GOLD__CLAIM_GOLD_SUCCESSFUL", v = "CLAIM_GOLD__CLAIM_GOLD_FAILED", T = () => async (e, t, {
					apiContext: r
				}) => {
					const s = {
						code: t().claimGold.code
					};
					e(j());
					try {
						const t = await p(r(), s);
						t.error ? e(C(t)) : e(N())
					} catch (a) {
						e(C(a))
					}
				}, w = Object(a.a)(g), A = Object(a.a)(S), j = () => async (e, t) => {
					e(A()), window.setTimeout(() => {
						t().claimGold.api.pending && e(w())
					}, 2e3)
				}, R = Object(a.a)(v), C = e => async (t, r) => {
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
				}, P = Object(a.a)(D), N = () => async (e, t) => {
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
				return D
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "c", (function() {
				return T
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/sentry/index.ts"),
				c = r("./src/graphql/operations/SubredditUserAchievements.json"),
				o = r("./src/graphql/operations/UpdateAchievementFlairPreference.json"),
				d = r("./src/lib/makeGqlRequest/index.ts");
			var i = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/lib/initializeClient/installReducer.ts"),
				l = r("./src/reddit/reducers/features/powerups/index.ts"),
				p = r("./src/reddit/actions/gold/powerups.ts"),
				b = r("./src/reddit/actions/toaster.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/index.ts"),
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
					const o = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (o.length) try {
						const t = await (async (e, t, r) => {
							const s = await Object(d.a)(e, {
								...c,
								variables: {
									subredditId: t,
									redditorIds: r
								}
							});
							if (!s.ok) throw new Error("Unable to fetch user achievements");
							return s.body.data.subredditInfoById
						})(a(), e, o);
						await r(_(t))
					} catch (i) {
						n.c.captureException(i)
					}
				}, D = (e, t) => async (r, s) => {
					if (!e) return;
					const a = s(),
						n = Object(E.j)(a);
					if (!n || !Object(f.f)(a, {
							subredditId: e
						}) || !Object(i.h)(a)) return;
					const c = !!Object(m.b)(a, {
						subredditId: e,
						userId: n.id
					});
					!t && c || await r(S(e, [n.id]))
				}, v = (e, t) => async (r, s) => {
					if (!e) return;
					await r(Object(p.i)(e, {
						fullData: !0
					}));
					const a = s();
					if (!Object(f.f)(a, {
							subredditId: e
						}) || !t || !Object(i.h)(a)) return;
					const n = new Set;
					Object.values(t).forEach(e => {
						n.add(e.authorId)
					}), await r(S(e, Array.from(n)))
				}, T = (e, t) => async (r, a, {
					gqlContext: c
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
							if (!(await Object(d.a)(e, {
									...o,
									variables: {
										subredditId: t,
										achievementType: r
									}
								})).ok) throw new Error("Unable to update the preferred achievement flair")
						})(c(), l.subredditId, l.achievementType), r(I(l))
					} catch (p) {
						r(g(l)), n.c.captureException(p), r(Object(b.f)({
							duration: b.a,
							kind: y.b.Error,
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
				return v
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
				return H
			})), r.d(t, "j", (function() {
				return q
			})), r.d(t, "k", (function() {
				return V
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
				y = r("./src/reddit/actions/toaster.ts"),
				f = r("./src/reddit/helpers/getGenericUploadError.ts"),
				m = r("./src/reddit/helpers/getS3KeyFromUrl/index.ts"),
				E = r("./src/reddit/helpers/media/index.ts"),
				h = r("./src/reddit/models/Emoji/index.ts"),
				_ = r("./src/reddit/models/Image/index.tsx"),
				O = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/emojis.ts"),
				g = r("./src/reddit/selectors/subreddit.ts");
			const S = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				D = Object(p.a)(S),
				v = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				T = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				w = Object(p.a)(v),
				A = Object(p.a)(T),
				j = "GET_ALL_EMOJIS_PENDING",
				R = "GET_ALL_EMOJIS_LOADED",
				C = "GET_ALL_EMOJIS_FAILED",
				P = Object(p.a)(j),
				N = Object(p.a)(R),
				L = Object(p.a)(C),
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
						y = await Object(E.g)(p),
						f = await (async (e, t, r, s) => Object(o.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
							method: c.hb.POST,
							data: {
								filepath: r,
								mimetype: s
							}
						}))(a.apiContext(), l, p.name, y);
					let m = !1;
					if (f.ok) {
						const t = await (async (e, t, r) => Object(i.a)(r, t))(a.apiContext(), f.body.s3UploadLease, p);
						if (t.ok) {
							if (!s().imageUploads[e.id]) return Object(_.d)(e), !1;
							const a = decodeURIComponent(t.body.PostResponse.Location),
								n = f.body.websocketUrl,
								c = Object(_.n)(e, a, n);
							r(Object(b.j)(c)), m = !0
						} else {
							const s = Object(_.k)(e, t.error);
							r(Object(b.i)(s))
						}
					} else {
						const t = Object(_.k)(e, f.error);
						r(Object(b.i)(t))
					}
					return m
				}, G = (e, t) => async (r, s, a) => {
					const {
						imageData: n,
						subredditId: i,
						emojiName: l,
						settings: p
					} = e, f = Object(m.a)(n.url), E = s(), h = Object(g.U)(E, {
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
					}))(a.apiContext(), h, f, l, p);
					if (!O.ok) {
						const s = Object(_.k)(n, O.error);
						r(Object(b.i)(s)), r(Object(y.f)(U(e))), t && t.close()
					}
					return O.ok
				}, F = e => async (t, r, s) => {
					const {
						imageData: a,
						subredditId: n,
						emojiName: c,
						settings: o
					} = e;
					if (t(Object(b.k)(a)), !a.websocketUrl) return t(Object(y.f)({
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
							t(D(i)), t(B(n))
						} else {
							const r = Object(f.a)(c),
								s = Object(_.k)(a, r);
							t(Object(b.i)(s)), t(Object(y.f)(U(e)))
						}
						i.close()
					}, i.onerror = r => {
						d = !1;
						const s = Object(f.a)(c),
							n = Object(_.k)(a, s);
						t(Object(b.i)(n)), t(Object(y.f)(U(e))), i.close()
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
						t(N({
							subredditId: e,
							data: r
						}))
					} else t(L({
						subredditId: e,
						error: c.error
					}))
				}, H = e => async (t, r, {
					apiContext: s
				}) => {
					r().emojis[e] || await t(B(e))
				}, q = (e, t) => async (r, a, {
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
						})), r(y.f({
							kind: O.b.SuccessCommunityGreen,
							text: s.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else r(A(p.error)), r(y.f({
						kind: O.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, V = (e, t) => async (r, a, {
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
					} else r(y.f({
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
					})) : r(y.f({
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
					})), n(y.f({
						kind: O.b.SuccessCommunityGreen,
						text: s.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : n(y.f({
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
				y = Object(n.a)(l),
				f = Object(n.a)(p),
				m = Object(n.a)(b),
				E = Object(n.a)("STRUCTURED_STYLES__IMPORT_THEME_PENDING"),
				h = Object(n.a)("STRUCTURED_STYLES__IMPORT_THEME_LOADED"),
				_ = Object(n.a)("STRUCTURED_STYLES__IMPORT_THEME_FAILED"),
				O = e => async (t, n) => {
					t(y());
					const c = n(),
						d = Object(u.U)(c, {
							subredditId: e
						}).name,
						l = c.structuredStyles.models[e],
						p = await Object(a.a)(() => Promise.all([r.e("vendors~ExportTheme~ImportTheme"), r.e("ExportTheme")]).then(r.bind(null, "./src/reddit/helpers/exportTheme/index.ts"))).then(e => e.default),
						b = await p(l, d);
					b.ok ? (t(f()), t(Object(o.f)({
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
				return y
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
				}, y = e => {
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
				return y
			})), r.d(t, "m", (function() {
				return f
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
				return D
			})), r.d(t, "w", (function() {
				return v
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
				y = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				m = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				E = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				h = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				_ = "GOVERNANCE__TRANSFER_FAILURE",
				O = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				I = "GOVERNANCE__TRANSFER_PENDING",
				g = "GOVERNANCE__TRANSFER_SUCCESS",
				S = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				D = "GOVERNANCE__WALLETS_FETCH_PENDING",
				v = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
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
				return y
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
				y = (Object(n.a)(b), "META__SET_LOCALE"),
				f = Object(n.a)(y),
				m = e => async (t, r, {
					apiContext: n
				}) => {
					if (!e) return;
					const l = r(),
						p = n();
					let b;
					if (t(f(e)), Object(s.isPseudoLocale)(e) ? (Object(u.H)(l) || Object(i.b)(l)) && (b = e) : b = Object(s.isoLocaleToR2Language)(e), !b) return;
					const y = new URL(window.location.href);
					Object(u.K)(l) ? Object(s.isPseudoLocale)(b) ? y.searchParams.set("locale", b) : (await Object(c.a)(Object(o.a)(p, [d.a]), {
						data: {
							lang: b
						},
						endpoint: `${p.apiUrl}/api/v1/me/prefs`,
						method: a.hb.PATCH,
						type: "json"
					}), y.searchParams.delete("locale")) : y.searchParams.delete("locale"), window.location.href = y.toString()
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
				return y
			})), r.d(t, "m", (function() {
				return f
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
				return D
			})), r.d(t, "z", (function() {
				return v
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
				y = "MULTIREDDIT__DUPLICATE_PENDING",
				f = "MULTIREDDIT__DUPLICATE_SUCCESS",
				m = "MULTIREDDIT__DUPLICATE_FAILURE",
				E = "MULTIREDDIT__EDIT_FAILURE",
				h = "MULTIREDDIT__EDIT_PENDING",
				_ = "MULTIREDDIT__EDIT_SUCCESS",
				O = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				I = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				g = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				S = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				D = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				v = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
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
				return y
			})), r.d(t, "a", (function() {
				return f
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
				y = "NPS__URL_LOADED",
				f = "NPS__URL_FAILED",
				m = Object(s.a)(b),
				E = Object(s.a)(y),
				h = Object(s.a)(f);
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
				return D
			})), r.d(t, "b", (function() {
				return v
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
				y = Object(d.a)(p.b),
				f = Object(d.a)(p.a);
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
							} else e(y(a.body));
					else Object(l.a)(e, s);
					else e(f(a.error))
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
			}, D = () => async (e, t) => {
				const r = t();
				e(i.l({
					title: c.a()
				})), Object(h.K)(r) || await e(E.r())
			}, v = () => async e => e(i.l({
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
				return D
			})), r.d(t, "d", (function() {
				return v
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
				l = r("./src/graphql/operations/GetSubredditChatSettings.json"),
				p = r("./src/lib/makeGqlRequest/index.ts");
			var b = (e, t) => Object(p.a)(e, {
					...l,
					variables: t
				}),
				y = r("./src/graphql/operations/UpdateSubredditChatSettings.json");
			var f = (e, t) => Object(p.a)(e, {
					...y,
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
				D = "FETCH_CHAT_SETTINGS__PENDING",
				v = "UPDATE_CHAT_SETTINGS__LOADED",
				T = Object(d.a)(g),
				w = Object(d.a)(S),
				A = Object(d.a)(D),
				j = Object(d.a)(v),
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
							r = await f(d(), {
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
					})), a(L(t, p)), r) : (i && a(w({
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
				}, N = {
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
				}, L = (e, t) => async (r, s) => {
					t.forEach(t => {
						if (t && t.settingId) {
							const r = N[t.settingId],
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
				n = r("./src/graphql/operations/UserDataExportEligibility.json"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				i = r("./src/reddit/selectors/userDataRequest.ts");
			const u = "USER_DATA_REQUEST_PAGE_LOADING",
				l = "USER_DATA_REQUEST_PAGE_LOADED",
				p = "USER_DATA_REQUEST_PAGE_FAILED",
				b = Object(s.a)(u),
				y = Object(s.a)(l),
				f = Object(s.a)(p),
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
					if (!m.ok || !m.body) return void e(f(m.error));
					if (!m.body.account) return void Object(o.a)(e, u);
					const E = await (e => Object(c.a)(e, {
						...n
					}))(s());
					if (!E.ok) return void e(f());
					const h = m.body,
						_ = E.body;
					e(y({
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
					const y = new Set;
					e && Object.values(e).map(e => {
						e.authorId && y.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && y.add(e.authorId)
					});
					const f = await (async (e, t, r) => Object(n.a)(Object(c.a)(e, [o.a]), {
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
					}))(p(), Array.from(y), r);
					s(l(f))
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
				y = (Object(s.a)(o), Object(s.a)(d)),
				f = Object(s.a)(i),
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
								t(y({
									product: d,
									badges: e,
									userOwnedBadges: s,
									wallet: r.body.wallet
								}))
							}
						} else t(f({
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
				return N
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
				y = r("./src/graphql/operations/VerifyRecaptchaToken.json"),
				f = r("./node_modules/os-browserify/browser.js"),
				m = r.n(f);
			const E = /\s+at.*(?:\(|\s)(.*)\)?/,
				h = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
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
							const t = e.match(E);
							if (null === t || !t[1]) return !0;
							const r = t[1];
							return !r.includes(".app/Contents/Resources/electron.asar") && !r.includes(".app/Contents/Resources/default_app.asar") && !h.test(r)
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
				v = r("./src/reddit/selectors/meta.ts");
			const T = e => g.d.reCaptchaEnterprise(e) && !Object(v.d)(e),
				w = e => !!Object(D.c)(e, {
					experimentEligibilitySelector: Object(S.d)(Object(S.b)(...n.c)),
					experimentName: b.Xc
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
							const r = await Object(I.a)(e, {
								...y,
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
				N = (e = d.a.PageLoad) => u(e => p()([T, w, e => e.tracking.reCaptchaEnterprise.load === s.a.New], t => t(e)))(async (t, r) => {
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
				return y
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
							r = f(t.sitewide_rules);
						e(l(r))
					}
				}, y = () => async (e, t, {
					apiContext: r
				}) => {
					if (!t().user) return;
					const s = await (e => Object(c.a)(Object(o.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/livestream_rules.json`,
						method: n.hb.GET
					}))(r());
					if (s.ok) {
						const t = s.body,
							r = f(t.livestream_rules);
						e(p(r))
					}
				}, f = e => {
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
				return y
			})), r.d(t, "c", (function() {
				return f
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
				return D
			})), r.d(t, "x", (function() {
				return v
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
				y = "RECURRING_POST_MUTATE_SUCCESS",
				f = "RECURRING_POST__EDIT_MODAL_LOAD",
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
				D = () => s.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				v = () => s.fbt._("Successfully submitted scheduled post!", null, {
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
				return y
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
			const y = "PAGE__TRENDING_SEARCHES_LOADED",
				f = Object(s.a)(y),
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
						return e(f({
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
				return y
			})), r.d(t, "a", (function() {
				return f
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
				o = r("./src/graphql/operations/FetchSubredditStreamingModSettings.json"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/graphql/operations/UpdateSubredditStreamingModSettings.json"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const p = Object(a.a)(n.a),
				b = "STREAMING_MOD_SETTINGS__UPDATE_PENDING",
				y = "STREAMING_MOD_SETTINGS__UPDATE_LOADED",
				f = "STREAMING_MOD_SETTINGS__UPDATE_FAILED",
				m = Object(a.a)(b),
				E = Object(a.a)(y),
				h = Object(a.a)(f),
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
				return f
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "a", (function() {
				return h
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
				y = r("./src/telemetry/index.ts");
			const f = "SUBREDDIT__CREATE_PENDING",
				m = "SUBREDDIT__CREATE_SUCCEEDED",
				E = "SUBREDDIT__CREATE_FAILED",
				h = "SUBREDDIT__CREATE_CLEARED",
				_ = Object(a.a)(f),
				O = Object(a.a)(m),
				I = Object(a.a)(E),
				g = Object(a.a)(h),
				S = e => async (t, r, {
					apiContext: a
				}) => {
					const f = r(),
						{
							name: m,
							type: E
						} = e;
					if (Object(b.k)(f)) return;
					t(_({
						subredditName: m
					}));
					const h = await ((e, t) => Object(c.a)(Object(o.a)(e, [d.a]), {
						endpoint: Object(i.a)(`${e.apiUrl}/api/v1/subreddit/create_subreddit`),
						method: n.hb.POST,
						data: u(t)
					}))(a(), e);
					if (h.ok) {
						const r = h.body,
							a = r.fullname;
						Object(y.a)(Object(p.d)(E, e, a)(f)), t(O({
							subredditName: m
						})), window.location.href = `${s.a.redditUrl}${r.path}new`, Object(l.b)(l.a.SubredditCreation)
					} else h.error && Object(y.a)(Object(p.e)(h.error.type, m)(f)), t(I({
						subredditName: m,
						error: h.error
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
				return f
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
				y = Object(s.a)(p),
				f = () => async (e, t, {
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
					} else e(y({
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
				return y
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
				y = e => async (t, r, s) => {
					const d = e.toLowerCase(),
						i = r(),
						{
							api: u,
							topContent: y
						} = i.subreddits;
					if (u.topContent.pending[d] || y[d]) return;
					t(l({
						subredditName: d
					})), t(Object(a.x)());
					const f = await ((e, t) => Object(c.a)(e, {
						...n,
						variables: t
					}))(s.gqlContext(), {
						subredditName: d
					});
					if (f.ok) {
						const e = f.body.data.subreddit;
						if (e) {
							const r = Object(o.c)(e);
							r && t(p({
								...r,
								subredditName: d
							}))
						}
					} else t(b({
						subredditName: d,
						error: f.error
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
				return y
			})), r.d(t, "b", (function() {
				return f
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
				y = "UPLOAD_SUCCESS",
				f = "UPLOAD_FAILED",
				m = "UPLOAD_CANCELED",
				E = "UPLOAD_REMOVED",
				h = Object(o.a)(u),
				_ = Object(o.a)(l),
				O = Object(o.a)(p),
				I = Object(o.a)(b),
				g = Object(o.a)(y),
				S = Object(o.a)(f),
				D = Object(o.a)(m),
				v = Object(o.a)(E),
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
						uploadLease: y,
						error: f
					} = await r(o().uploads[l]);
					if (b()) return;
					if (f || !y) return void n(S({
						key: l,
						error: f
					}));
					let m;
					w(p, () => {
						m && m.abort()
					}), n(_({
						key: l
					}));
					const E = await Object(d.a)(e, y, e => (m = e, s && e.on("progress", e => {
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
					})(a.id, t), r(t ? v({
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
		"./src/reddit/actions/upvotePrompt.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
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
				y = r("./src/telemetry/index.ts");
			const f = "INCREMENT_SEEN_COUNT_PER_SESS",
				m = (e, t, r) => async (n, c) => {
					const d = c(),
						p = Object(i.x)(),
						f = Date.now(),
						m = p && f - p < 18e4,
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
						onClose: () => Object(y.a)((e => ({
							source: l,
							action: "click",
							noun: "close",
							...Object(u.defaults)(e)
						}))(d))
					}));
					const D = [...g, Date.now()].slice(Math.max(g.length + 1 - 3, 0));
					Object(y.a)((e => ({
						source: l,
						action: "view",
						noun: l,
						...Object(u.defaults)(e)
					}))(d)), Object(i.xb)(), Object(i.wb)(D), n(_()), r && r()
				}, E = e => async (t, r) => {
					Object(y.a)((e => ({
						source: l,
						action: "click",
						noun: "upvote",
						...Object(u.defaults)(e)
					}))(r())), Object(b.c)(r(), {
						postId: e
					}) && t(Object(c.bb)(e))
				}, h = (e, t) => {
					const r = Object(p.d)(e, {
						experimentName: d.Gd
					});
					let a = "";
					return (null == r ? void 0 : r.variant) === d.Hd.Variant1 ? a = t ? s.fbt._("Was that a good post? Upvote it so it gets seen by more people", null, {
						hk: "2NOllx"
					}) : s.fbt._("Was this a good post? Upvote it so it gets seen by more people", null, {
						hk: "K1yBi"
					}) : (null == r ? void 0 : r.variant) === d.Hd.Variant2 && (a = t ? s.fbt._("If you enjoyed that post, upvote it so that more redditors will see it too.", null, {
						hk: "1Y6B4I"
					}) : s.fbt._("If you enjoyed this post, upvote it so that more redditors will see it too.", null, {
						hk: "HR9Ye"
					})), a
				}, _ = Object(n.a)(f)
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
				y = Object(a.a)(l),
				f = Object(a.a)(p),
				m = e => async (t, r, {
					apiContext: a
				}) => {
					if (r().blockUser.api.pending[e]) return;
					t(b({
						username: e
					}));
					const i = await Object(o.a)(a(), e),
						u = `error-block-${e}`;
					if (i.ok) i.body.name && t(y(i.body)), i.body.id && t(Object(n.f)(i.body.id)), t(c.g(u)), t(c.f({
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
						t(f(r)), t(c.f({
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
				return y
			})), r.d(t, "b", (function() {
				return f
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
				y = e => async (t, r, {
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
				}, f = "USER_UNWHITELIST__PENDING", m = "USER_UNWHITELIST__SUCCESS", E = "USER_UNWHITELIST__FAILED", h = Object(a.a)(f), _ = Object(a.a)(m), O = Object(a.a)(E), I = e => async (t, r, {
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
				return y
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
				y = ({
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
				url: y,
				usePreview: f
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
				url: l ? void 0 : y,
				usePreview: f
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
				trending: "_2H51id1RX9dGNrtrAIOMGK",
				subText: "_2Efd4uMAp4YawdvL9Zhdhv",
				title: "_1JNAu7U5gWAkRoykwfUWhY",
				mFavorite: "_2cEhEGN_WTLlwspw_bpqTr",
				trendingContent: "BNJ5Y52EyQmTHFZJwjoXJ",
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
				y = r("./src/reddit/constants/history.ts"),
				f = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/helpers/getSearchUrl/index.ts"),
				E = r("./src/reddit/icons/fonts/index.tsx"),
				h = r("./src/reddit/models/Search/index.ts"),
				_ = r("./src/reddit/selectors/platform.ts"),
				O = r("./src/reddit/selectors/telemetry.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				S = r.n(g),
				D = r("./node_modules/uuid/v4.js"),
				v = r.n(D),
				T = r("./src/reddit/components/SearchDropdown/index.m.less"),
				w = r.n(T);
			const A = Object(n.b)(() => Object(l.c)({
					currentPage: _.b,
					nightmode: I.W
				})),
				j = Object(f.t)(),
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
						recentSearch: f,
						toggleTooltip: _
					} = e, I = Object(m.a)(null, null, null, f, {
						source: p.a.Recent
					}), g = I && I.url, D = I && I.qs, T = this.generateFullSearchQuery(f);
					let A;
					n && (A = this.generateFullSearchQuery(n));
					const j = s ? Object(O.getPageTypeFromCurrentPage)(s) : b ? Object(O.getPageTypeFromCurrentPage)(b) : void 0,
						C = f.isProfile || f.isSubreddit ? {
							[y.a.ClickSource]: "search_dropdown",
							[y.a.ClickId]: v()()
						} : void 0;
					return a.a.createElement(i.a, {
						"aria-label": f.searchQuery,
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
								[y.a.SearchOriginPage]: j
							},
							search: D
						}
					}, f.displayInfo && f.isTypeaheadSuggestion ? f.displayInfo.iconUrl ? a.a.createElement("div", {
						className: w.a.subredditIcon,
						style: {
							backgroundImage: `url('${f.displayInfo.iconUrl}')`
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
							e.stopPropagation(), e.preventDefault(), l(f)
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
				N = r("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				L = r("./src/reddit/components/PostTitle/index.tsx"),
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
					}), f = b && b.url, _ = b && b.qs, I = t ? Object(O.getPageTypeFromCurrentPage)(t) : n ? Object(O.getPageTypeFromCurrentPage)(n) : void 0, g = a.a.createElement(i.a, {
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
							pathname: f && u(f) || "",
							state: {
								[y.a.SearchOriginPage]: I
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
					}), a.a.createElement("span", null, a.a.createElement(L.a, {
						className: Object(o.a)(w.a.listItemText, w.a.mTrending, S.a.text, S.a.trending),
						redditStyle: !0,
						size: L.b.Small
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
					})), c.post && Object(M.a)(c.post) && a.a.createElement(N.a, {
						post: c.post,
						removeLink: !0,
						usePreview: l
					}));
					return l ? a.a.createElement(k.a, {
						post: c.post
					}, g) : g
				}
			}
			var q = Object(f.t)()(B(H)),
				V = r("./src/reddit/components/Flair/index.tsx"),
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
								[y.a.ClickSource]: "typeahead",
								[y.a.ClickId]: v()()
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
					})), s.displayInfo && s.displayInfo.isNSFW && a.a.createElement(V.b, {
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
					y = () => {
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
						const e = y();
						b(e), l.forEach((r, s) => {
							e[s] && t((e, t) => F.F(t(), r, F.a.SEARCH_DROPDOWN))
						})
					}
				}, [e.isTrendingPending, e.isOpen, t]);
				const f = {
					width: u ? `${u}px` : "inherit",
					marginTop: "7px",
					overflow: "scroll"
				};
				e.isFixed && (f.zIndex = $.h);
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
					style: f,
					onDropdownMounted: () => {
						if (!e.isTrendingPending && l.length > 0) {
							const e = y();
							b(e), l.forEach((r, s) => {
								e[s] && t((e, t) => F.F(t(), r, F.a.SEARCH_DROPDOWN))
							})
						}
					},
					onScroll: () => {
						const e = y();
						l.forEach((r, s) => {
							p[s] || !e[s] || r.post && r.post.isSponsored || t((e, t) => F.F(t(), r, F.a.SEARCH_DROPDOWN))
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
				})), m && !e.isInUISimplificationI18NExperiment && e.isInTrendingExperiment && l.map(t => a.a.createElement(q, {
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
				y = r("./src/reddit/controls/Search/index.m.less"),
				f = r.n(y);
			const m = Object(n.b)(() => Object(c.c)({
				subredditsByName: Object(d.a)((e, t) => {
					const r = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						r[t.subredditName] = Object(l.A)(e, {
							subredditName: t.subredditName
						})
					}), r
				})
			}));
			t.a = m(e => a.a.createElement("div", {
				className: Object(o.a)(b.a.subText, f.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => a.a.createElement(i.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, a.a.createElement(u.b, {
				className: Object(o.a)(f.a.subredditIcon, f.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : a.a.createElement(u.b, {
				className: Object(o.a)(f.a.subredditIcon, e.iconClassName),
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
				y = r("./src/reddit/selectors/user.ts");
			t.a = e => t => {
				const r = a.a.parse(t.endpoint, !0),
					{
						host: s,
						protocol: o
					} = r;
				if (`${o}//${s}` === n.a.gatewayUrl) {
					const s = {},
						a = Object(y.db)(e.getState()) ? "1" : "";
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
				return y
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
				y = (e, t) => {
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
				f = e => e.slice(0, 5),
				m = (e, t) => `${e}T${f(t)}:00`,
				E = e => {
					const [t, r] = e.split("T");
					return [t, f(r)]
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
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
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
				return FD
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
				y = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				f = r("./src/reddit/actions/governance/constants.ts"),
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
							return null;
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
						case f.d:
							return {
								id: I.a.GOVERNANCE_OPT_OUT
							};
						case f.r:
							return {
								id: I.a.TRANSFER_POINTS
							};
						case f.o:
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
						case f.x:
							return {
								id: I.a.WALLET_REGISTRATION_MODAL
							};
						case y.c:
							return {
								id: I.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT
							};
						default:
							return e
					}
				},
				S = r("./src/reddit/actions/ads/constants.ts"),
				D = r("./src/reddit/actions/unload/constants.ts");
			const v = {};

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
			var w = (e = v, t) => {
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
						case D.b:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adUnloaded");
						case S.s:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "groupMViewable");
						case S.c:
							return T(e, t.payload.postId, t.payload.vendorMetadata, "adGalleryItemImpression");
						default:
							return e
					}
				},
				A = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/apiRequestState.ts"));
			const j = {};
			var R = (e = j, t) => {
					switch (t.type) {
						case A.d:
						case A.a:
						case A.b: {
							const r = t.payload;
							return {
								...e,
								[r.apiRequestId]: r
							}
						}
						case A.c: {
							const r = t.payload;
							if (!(r in e)) return e;
							if (1 === Object.keys(e).length) return j;
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
				L = Object(c.c)({
					error: P,
					pending: N
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
					api: L,
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
				q = r("./src/reddit/actions/comment/websocket/constants.ts"),
				V = r("./src/reddit/actions/grantUserFlair/constants.ts"),
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
					case q.b:
					case q.c: {
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
					case V.h:
					case V.b: {
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
			const ye = {};
			var fe = (e = ye, t) => {
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
					pending: fe
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
			const De = e => {
				const t = e.split("+");
				if (1 === t.length) return e;
				const r = `${t[1].substring(0,2)}:${t[1].substring(2)}`;
				return `${t[0]}+${r}`
			};
			var ve = e => (e.startsAt && (e.startsAt = "number" == typeof e.startsAt ? new Date(e.startsAt).toISOString() : De(e.startsAt)), e.endsAt && (e.endsAt = "number" == typeof e.endsAt ? new Date(e.endsAt).toISOString() : De(e.endsAt)), e),
				Te = r("./src/reddit/models/Gold/Award.ts"),
				we = r("./src/reddit/actions/discoveryUnit.ts"),
				Ae = r("./src/reddit/actions/frontpage/constants.ts"),
				je = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				Re = r("./src/reddit/actions/multireddit/constants.ts"),
				Ce = r("./src/reddit/actions/pages/modListing/constants.ts"),
				Pe = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				Ne = r("./src/reddit/actions/pages/postCreation.ts"),
				Le = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
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
				})([ve]),
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
					case q.b:
					case Ne.PAGE_LOADED:
					case we.e:
					case Ae.f:
					case Ce.e:
					case Ce.h:
					case K.f:
					case K.m:
					case K.p:
					case K.v:
					case Re.r:
					case W.f:
					case Ae.b:
					case Pe.b:
					case z.SEARCH_RESULTS_RECEIVED:
					case $.b:
					case $.e:
					case Y.b:
					case Y.e:
					case Le.b:
					case Le.e:
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
					case je.o: {
						const {
							freeAwardEvent: s
						} = t.payload;
						return Be(e, (null === (r = null == s ? void 0 : s.freeAwards) || void 0 === r ? void 0 : r.awards) || [])
					}
					case je.h: {
						const {
							awards: r
						} = t.payload;
						return Be(e, r || [])
					}
					default:
						return e
				}
			};
			const qe = {};
			var Ve = (e = qe, t) => {
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
					pending: Ve
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
						case y.i:
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
				yt = r("./src/reddit/actions/blockedRedditors.ts");
			const ft = {
				message: ""
			};
			var mt = (e = ft, t) => {
				switch (t.type) {
					case yt.c:
					case yt.d:
						return e;
					case yt.b:
						return t.payload;
					default:
						return e
				}
			};
			var Et = (e = !1, t) => {
					switch (t.type) {
						case yt.d:
							return !0;
						case yt.c:
						case yt.b:
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
						case yt.a:
							return {
								ids: [...e.ids, t.payload], timestamp: e.timestamp
							};
						case yt.e:
							const r = e.ids.slice();
							return r.splice(e.ids.indexOf(t.payload), 1), {
								...e,
								ids: r
							};
						case yt.c:
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
			const vt = {};
			var Tt = (e = vt, t) => {
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
					pending: Tt
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
						case S.a:
							return e.isViewSafe === t.payload.isViewSafe && e.hasBrandSafetyBeenAssessed ? e : {
								...e,
								isViewSafe: t.payload.isViewSafe,
								hasBrandSafetyBeenAssessed: !0
							};
						case X.SUBREDDIT_PENDING:
						case Pe.c:
						case Ae.c:
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
			var Nt = (e = !1, t) => {
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
				Lt = Object(c.c)({
					error: Pt,
					pending: Nt
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
					api: Lt,
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
			const qt = {
				displaySubredditChatFtux: !1
			};
			var Vt = (e = qt, t) => {
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
			var yr = (e = !1, t) => {
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
				fr = Object(c.c)({
					error: pr,
					pending: br,
					showLoader: yr
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
					api: fr,
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
				Dr = r("./src/reddit/actions/contentControls/constants.ts");
			const vr = {};
			var Tr = (e = vr, t) => {
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
					error: Tr,
					pending: Ar
				}),
				Rr = Object(c.c)({
					fetch: jr
				});
			const Cr = {};
			var Pr = (e = Cr, t) => {
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
				Nr = Object(c.c)({
					api: Rr,
					models: Pr
				}),
				Lr = r("./src/reddit/actions/contentGate.ts"),
				kr = r("./src/reddit/actions/preferences.ts");
			const xr = {};
			var Ur = (e = xr, t) => {
				switch (t.type) {
					case Lr.a: {
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
					case Lr.b: {
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
					case Lr.f: {
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
					case Lr.h: {
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
					case Lr.i: {
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
					case Lr.j: {
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
					case Lr.c:
					case Lr.d:
					case Lr.e: {
						const {
							profileName: r
						} = t.payload, s = Ue.dc + r.toLocaleLowerCase(), a = e[s] || {}, n = {
							profileDeleted: t.type === Lr.d,
							profileSuspended: t.type === Lr.e,
							profileBlockedForLegalReason: t.type === Lr.c
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
			var qr = (e = !1, t) => {
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
					error: Hr,
					pending: qr
				}),
				Kr = Object(c.c)({
					createOrUpdate: Vr
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
			const ys = {};
			var fs = (e = ys, t) => {
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
			const hs = {};
			var _s = (e = hs, t) => {
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
				Os = Object(c.c)({
					error: fs,
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
				vs = Object(c.c)({
					error: Ss,
					pending: Ds
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
				As = Object(c.c)({
					error: Ts,
					pending: ws
				}),
				js = Object(c.c)({
					submit: vs,
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
				Ns = Object(c.c)({
					change: Ps
				}),
				Ls = Object(c.c)({
					collection: Kr,
					draft: ns,
					editor: bs,
					page: Os,
					post: js,
					subreddit: Ns
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
			var qs = (e = "", t) => {
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
							return r.editorMode === Vs.h.RICH_TEXT && r.editorKey === Vs.g.POST_CREATION ? Js.a.createInitial(r.content) : e
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
					link: qs,
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
					case f.b: {
						const {
							subredditName: e
						} = t.payload;
						return e
					}
					case E.a:
					case cs.i:
					case cs.q:
					case cs.A:
					case f.h:
						return "";
					default:
						return e
				}
			};
			var ya = (e = "", t) => {
				switch (t.type) {
					case f.c: {
						const {
							username: e
						} = t.payload;
						return e
					}
					case E.a:
					case cs.i:
					case cs.q:
					case cs.A:
					case f.h:
						return "";
					default:
						return e
				}
			};
			var fa = (e = null, t) => {
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
						case f.h:
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
			var Da = (e = !0, t) => {
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
			var va = (e = null, t) => {
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
						case E.a:
							return Fs(t) === Ue.Jb.POST_CREATION ? e : null;
						case Is.b:
						case Is.n:
							return t.payload.suggestedCommentSort || null;
						default:
							return e
					}
				},
				ja = r("./src/reddit/models/Poll/index.ts");
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
							return s === ja.a.ReplaceTopMod ? Ra("") : s === ja.a.Spinoff ? Ca("") : r === ja.a.ReplaceTopMod || r === ja.a.Spinoff ? "" : e
						}
						case f.c: {
							const {
								username: e
							} = t.payload;
							return Ra(e)
						}
						case f.b: {
							const {
								subredditName: e
							} = t.payload;
							return Ca(e)
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
				Na = Object(c.c)({
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
					newTopMod: ya,
					nextSubreddit: fa,
					polls: Ea,
					postSchedule: Oa,
					postToTwitter: Ia,
					recaptcha: ga,
					scheduledPostId: Sa,
					sendReplies: Da,
					stickyPosition: va,
					submissionType: wa,
					suggestedSort: Aa,
					title: Pa
				});
			var La = (e = null, t) => {
				switch (t.type) {
					case E.a: {
						if (Fs(t) !== Ue.Jb.POST_CREATION) return null;
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
							}) => Object(Vs.u)(e));
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
			const Ma = Vs.q.Post;
			var Ga = (e = Ma, t) => {
					switch (t.type) {
						case cs.w:
							return Vs.q.Post;
						case cs.B:
							return t.payload;
						case Wr.j:
							return Vs.q.Draft;
						case E.a:
							return Fs(t) !== Ue.Jb.POST_CREATION ? Ma : e;
						default:
							return e
					}
				},
				Fa = Object(c.c)({
					editorMode: La,
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
			const Ha = Js.a.createInitial;
			var qa = (e = Ha(), t) => {
					switch (t.type) {
						case cs.E:
							return Js.a.createInitial();
						case cs.D: {
							const r = t.payload;
							return r.editorMode === Vs.h.RICH_TEXT && "object" == typeof r.postContent ? Js.a.createInitial(r.postContent, r.mediaMetadata) : e
						}
						case cs.M: {
							const r = t.payload;
							return r.editorMode === Vs.h.RICH_TEXT && r.editorKey === Vs.g.POST_EDITING ? Js.a.createInitial(r.content) : e
						}
						default:
							return e
					}
				},
				Va = Object(c.c)({
					markdown: Ba,
					rte: qa
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
					api: Ls,
					drafts: Gs,
					formData: Na,
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
			const yn = [];
			var fn = (e = yn, t) => {
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
						return On;
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

			function vn(e) {
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
			const Tn = {};
			var wn = (e = Tn, t) => {
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
				Nn = r("./src/reddit/reducers/economics/paymentSystems/index.ts");
			const Ln = {
				fetched: !1,
				data: null
			};
			var kn = (e = Ln, t) => {
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
					gifs: jn,
					me: Pn,
					paymentSystems: Nn.b,
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
			const qn = {};
			var Vn = (e = qn, t) => {
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
					models: Vn
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
				yc = Object(c.c)({
					error: ic,
					fetched: lc,
					pending: bc
				});
			const fc = {};
			var mc = (e = fc, t) => {
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
					subreddit: yc
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
			var Dc = (e = Sc, t) => {
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
				vc = Object(c.c)({
					api: Oc,
					user: Dc,
					subreddit: gc
				}),
				Tc = r("./src/reddit/featureFlags/index.ts");
			const wc = new Set(["0", "disabled", "false", "off", ""]);
			var Ac = e => !wc.has(e.toLowerCase());
			const jc = Tc.a.reduce((e, t) => (e[t.toLowerCase()] = t, e), {}),
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
				Nc = r("./src/reddit/actions/focusedVerticals/constants.ts");
			const Lc = {
				focusedVerticalGqlError: null
			};
			var kc = (e = Lc, t) => {
				switch (t.type) {
					case Nc.h:
					case Nc.g:
					case Nc.c:
						return {
							...e, focusedVerticalGqlError: null
						};
					case Nc.e:
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
						case Nc.h:
							return {
								...e, focusedVerticalGqlPending: !0
							};
						case Nc.e:
						case Nc.g:
						case Nc.c:
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
					case Nc.g:
					case Nc.c:
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
					case Nc.j:
						return {
							dismissed: !1
						};
					case Nc.i:
						return {
							dismissed: !0
						};
					default:
						return e
				}
			};
			var Hc = (e = null, t) => {
				switch (t.type) {
					case Nc.g:
					case Nc.c:
						return t.payload.interactedSubredditIds || null;
					default:
						return e
				}
			};
			var qc = (e = null, t) => {
				switch (t.type) {
					case Nc.g:
					case Nc.c:
					case Nc.f:
						return t.payload.lastLoadedEnv || null;
					default:
						return e
				}
			};
			var Vc = (e = null, t) => {
					switch (t.type) {
						case Nc.g:
						case Nc.c:
							return t.payload.recommendedSubredditIds || null;
						default:
							return e
					}
				},
				Kc = Object(c.c)({
					api: Mc,
					components: Bc,
					interactedSubredditIds: Hc,
					recommendedSubredditIds: Vc,
					category: Gc,
					lastLoadedEnv: qc
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
				yo = r("./src/reddit/actions/overlayEvents.ts");
			var fo = (e = !1, t) => {
					switch (t.type) {
						case bo.a:
							return !1;
						case bo.b:
							return !0;
						case bo.c:
							return !e;
						case yo.b:
							return !1;
						default:
							return e
					}
				},
				mo = Object(c.c)({
					isSubscriptionsDropdownOpen: fo
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
				vo = r("./src/reddit/actions/emailVerificationTooltip.ts");
			var To = (e = !1, t) => {
					switch (t.type) {
						case vo.a:
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
						case X.SUBREDDIT_LOADED:
						case W.b:
						case W.f:
						case Ne.PAGE_LOADED: {
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
				jo = r("./src/reddit/actions/jsApi.ts");
			const Ro = [];
			var Co = (e = Ro, t) => {
					switch (t.type) {
						case jo.a: {
							const r = t.payload;
							return -1 === e.indexOf(r) && (e = [...e, r]).sort(), e
						}
						default:
							return e
					}
				},
				Po = r("./src/reddit/actions/leaderboard/constants.ts");
			const No = {};
			var Lo = (e = No, t) => {
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
					error: Lo,
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
			var qo = (e = Ho, t) => {
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
			const Vo = {};
			var Ko = (e = Vo, t) => {
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
					error: qo,
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
						case Ae.c:
						case Ae.b:
						case Pe.c:
						case Pe.b:
						case X.SUBREDDIT_PENDING:
						case X.SUBREDDIT_LOADED:
						case Ae.g:
						case Ae.f:
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
						case Le.f:
						case Le.e:
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
						case Ae.a:
						case Pe.a:
						case X.SUBREDDIT_FAILED:
						case Ae.e:
						case Ce.g:
						case Re.q:
						case td.a:
						case Z.h:
						case Y.d:
						case Le.d:
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
						case Ae.c:
						case Pe.c:
						case Q.PROFILE_POSTS_PENDING:
						case Le.f:
						case X.SUBREDDIT_PENDING:
						case Ae.g:
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
						case Ae.b:
						case Ae.a:
						case Pe.a:
						case Pe.b:
						case Le.d:
						case Le.e:
						case Q.PROFILE_POSTS_FAILED:
						case Q.PROFILE_POSTS_LOADED:
						case X.SUBREDDIT_LOADED:
						case X.SUBREDDIT_FAILED:
						case Ae.f:
						case Ae.e:
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
			const yd = {};
			var fd = (e = yd, t) => {
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
						case Ae.b:
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
						case Ae.f:
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
						case Ae.c:
						case Ce.f:
						case Pe.c:
						case Q.PROFILE_POSTS_PENDING:
						case X.SUBREDDIT_PENDING:
						case Le.f:
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
						case Ae.b:
						case Pe.b:
						case X.SUBREDDIT_LOADED:
						case cd.j:
						case td.b:
						case Le.e:
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
						case Ae.f:
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
						case hd.n: {
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
			const Dd = {};
			var vd = (e = Dd, t) => {
				switch (t.type) {
					case Ae.b:
					case Pe.b:
					case X.SUBREDDIT_LOADED:
					case Le.e:
					case Q.PROFILE_POSTS_LOADED:
					case Ae.f:
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
				Ad = Object(c.c)({
					api: id,
					endMarkers: fd,
					fetchedTokens: Ed,
					ids: Od,
					listingSort: Sd,
					loadMore: vd,
					pageInfo: wd
				}),
				jd = Object(c.c)({
					activeKey: Bo,
					listingOrder: Zo,
					postOrder: Ad
				});
			var Rd = (e = null, t) => {
				switch (t.type) {
					case Ae.b: {
						const r = t.payload;
						return sn()(r.announcements) ? e : r.announcements || null
					}
					default:
						return e
				}
			};
			var Cd = (e = null, t) => {
				switch (t.type) {
					case Ae.b: {
						const r = t.payload;
						return sn()(r.featuredLiveThread) ? e : r.featuredLiveThread || null
					}
					default:
						return e
				}
			};
			var Pd = (e = !1, t) => {
				switch (t.type) {
					case Ae.b:
						return !0;
					default:
						return e
				}
			};
			var Nd = (e = !1, t) => {
					switch (t.type) {
						case "ANNOUNCEMENTS__SHOULD_SHOW":
							return !0;
						default:
							return e
					}
				},
				Ld = Object(c.c)({
					announcements: Rd,
					featured: Cd,
					isFrontpageLoaded: Pd,
					shouldShowAnnouncements: Nd
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
				qd = Object(c.c)({
					isMuted: Bd,
					volume: Hd
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
				shredditExpBucket: "",
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
			const Qd = {};
			var Jd = (e = Qd, t) => {
				switch (t.type) {
					case X.SUBREDDIT_LOADED:
					case W.b:
					case W.f:
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
						case q.b:
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
				yi = Object(c.c)({
					api: ui,
					models: bi
				});
			var fi = (e = null, t) => {
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
					error: fi,
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
			var Di = (e = !1, t) => {
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
			var vi = (e = !1, t) => {
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
					fetched: Di,
					pending: vi
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
			var Ai = (e = !1, t) => {
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
			var ji = (e = !1, t) => {
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
					fetched: Ai,
					pending: ji
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
			var Ni = (e = !1, t) => {
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
				Li = Object(c.c)({
					error: Ci,
					fetched: Pi,
					pending: Ni
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
			var qi = (e = !1, t) => {
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
			var Vi = (e = null, t) => {
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
					fetched: qi,
					pending: Vi
				}),
				Wi = Object(c.c)({
					addSubreddit: hi,
					create: gi,
					deleteMulti: Ti,
					duplicate: Ri,
					edit: Li,
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
			var yu = (e = null, t) => {
				switch (t.type) {
					case uu.g:
						return t.payload && t.payload.index || e;
					default:
						return e
				}
			};
			var fu = (e = null, t) => {
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
					earlierDividerIndex: yu,
					notifications: Eu,
					pageInfo: hu,
					markAllAsReadTimestamp: fu
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
			const Du = e => {
					const t = {};
					for (const r of e) t[r.experimentName.toLowerCase()] = Su(r);
					return t
				},
				vu = {};
			var Tu = (e = vu, t) => {
				switch (t.type) {
					case Wn.a: {
						const {
							pageExperimentVariants: e
						} = t.payload, r = e ? e.experiments : [];
						return Du(r)
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
				Au = Object(c.c)({
					experiments: wu
				}),
				ju = r("./node_modules/history/esm/history.js");
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
						const o = Object(ju.e)(n),
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
			var Nu = (e = Pu, t) => {
				switch (t.type) {
					case f.k: {
						const {
							pollId: r
						} = t.payload.pollResults, {
							[r]: s,
							...a
						} = e;
						return a
					}
					case f.j: {
						const {
							pollId: r
						} = t.payload, {
							[r]: s,
							...a
						} = e;
						return a
					}
					case f.i: {
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
			var ku = (e = Lu, t) => {
					switch (t.type) {
						case f.k: {
							const {
								pollId: r
							} = t.payload.pollResults;
							return {
								...e,
								[r]: !1
							}
						}
						case f.i: {
							const {
								pollId: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						case f.j: {
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
					error: Nu,
					pending: ku
				}),
				Uu = Object(c.c)({
					voting: xu
				}),
				Mu = r("./src/reddit/actions/economics/predictions/constants.ts");
			const Gu = {};
			var Fu = (e = Gu, t) => {
				switch (t.type) {
					case f.h: {
						const {
							poll: r
						} = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Ae.b:
					case X.SUBREDDIT_LOADED:
					case Z.i:
					case Ae.f:
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
					case f.k: {
						const {
							[ja.b.ByVoters]: r, pollId: s
						} = t.payload.pollResults;
						return {
							...e,
							[s]: r
						}
					}
					case f.e: {
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
					case Ae.b:
					case X.SUBREDDIT_LOADED:
					case Z.i:
					case Ae.f:
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
										[ja.b.ByVoters]: a,
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
			var Vu = (e = qu, t) => {
					switch (t.type) {
						case f.k: {
							const {
								[ja.b.ByVotingPower]: r, pollId: s
							} = t.payload.pollResults;
							return {
								...e,
								[s]: r
							}
						}
						case Ae.b:
						case X.SUBREDDIT_LOADED:
						case Z.i:
						case Ae.f:
						case W.b:
						case W.f: {
							const {
								governance: r
							} = t.payload;
							if (r) {
								const t = Object.keys(r).reduce((e, t) => {
									const s = r[t],
										{
											[ja.b.ByVotingPower]: a,
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
					byVotingPower: Vu
				});
			const Wu = {};
			var $u = (e = Wu, t) => {
					switch (t.type) {
						case f.k: {
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
					case Ne.PAGE_LOADED:
					case Ce.e:
					case Ce.h:
					case $.b:
					case $.e:
					case Le.e:
					case Le.b:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case X.SUBREDDIT_LOADED:
					case Ae.b:
					case Pe.b:
					case X.SUBREDDIT_LOADED:
					case W.b:
					case W.f:
					case hd.i:
					case Re.r:
					case Ae.f:
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
						case Ne.PAGE_LOADED:
						case Ae.f:
						case Ce.e:
						case Ce.h:
						case Re.r:
						case td.b:
						case W.b:
						case W.f:
						case Ae.b:
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
						case Le.b:
						case Le.e:
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
			var yl = (e = !1, t) => {
				switch (t.type) {
					case bl.a:
						return t.payload.isDismissed;
					default:
						return e
				}
			};
			const fl = {};
			var ml = (e = fl, t) => {
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
					dismissed: yl,
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
				Dl = Object(c.c)({
					loadable: Sl
				});
			const vl = {};
			var Tl = (e = vl, t) => {
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
			const Al = [];
			var jl = (e = Al, t) => {
				switch (t.type) {
					case hd.m:
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
						case Ae.b:
						case X.SUBREDDIT_LOADED:
						case Ae.f:
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
			const Nl = {};
			var Ll = (e = Nl, t) => {
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
					case f.h: {
						const {
							poll: r
						} = t.payload;
						return {
							...e,
							[r.postId]: r.id
						}
					}
					case Ae.b:
					case X.SUBREDDIT_LOADED:
					case Z.i:
					case Ae.f:
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
			};

			function Ul({
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
					predictions: a.map(Ml)
				}
			}

			function Ml({
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
					options: i.map(Gl)
				}
			}

			function Gl({
				userAmount: e,
				...t
			}) {
				return {
					...t,
					userStakeAmount: e
				}
			}
			var Fl = r("./src/reddit/actions/bulkActions/constants.ts"),
				Bl = r("./src/reddit/actions/constants.ts"),
				Hl = r("./src/reddit/actions/flairManagement/constants.ts"),
				ql = r("./src/reddit/actions/googleQASchema/constants.ts"),
				Vl = r("./src/reddit/actions/imageOCRAltText/constants.ts"),
				Kl = r("./src/reddit/actions/subredditTopContent.ts"),
				Wl = r("./src/reddit/helpers/isPost.ts"),
				$l = r("./node_modules/lodash/pickBy.js"),
				Ql = r.n($l);

			function Jl(e, t) {
				const r = Ql()(t, (t, r = "") => !e[r] || !Qi()(e[r], t));
				return Object.keys(r).length > 0 ? {
					...e,
					...r
				} : e
			}
			var zl = r("./src/reddit/models/Gold/Gild/index.tsx"),
				Xl = r("./src/reddit/models/Media/index.ts"),
				Yl = r("./src/reddit/models/ModQueue/index.ts"),
				Zl = r("./src/reddit/models/Post/index.ts"),
				ep = r("./src/reddit/models/Vote/index.ts"),
				tp = r("./src/reddit/actions/subredditDuplicates.ts");
			const rp = {},
				sp = e => {
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
				ap = e => t => {
					const r = e[t.id];
					return r && r.events && (t.events = r.events, t.source = r.source), t
				},
				np = e => t => {
					const r = e[t.id];
					return r && r.isSponsored && (t.isSponsored = r.isSponsored), t
				},
				cp = ({
					tournamentData: e,
					...t
				}) => e ? {
					...t,
					predictionTournament: Ul(e)
				} : t,
				op = e => e.media && Object(Xl.E)(e.media) ? {
					...Object(G.unsetIn)(e, ["source"])
				} : e,
				dp = e => t => {
					const r = e[t.id];
					return t && t.media && r && r.media && Object(Xl.H)(t.media) && t.media.isRichtextPreview && Object(Xl.H)(r.media) && !r.media.isRichtextPreview && (t.media.richtextContent = r.media.richtextContent, t.media.isRichtextPreview = !1), t
				},
				ip = e => t => {
					const r = e[t.id];
					return r && r.numDuplicates && (t.numDuplicates = r.numDuplicates), t
				},
				up = e => {
					let t = e.source;
					return t && t.outboundUrlCreated && (t = {
						...t,
						outboundUrlReceived: Date.now()
					}, e.source = t), e
				},
				lp = e => {
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
				pp = e => t => {
					for (let r = 0; r < e.length; r++) t = e[r](t);
					return t
				},
				bp = (e, t) => ({
					...e,
					events: t.events,
					source: t.source
				});
			var yp = (e = rp, t) => {
				switch (t.type) {
					case E.a:
						if (Fs(t) === (Ue.Jb.COMMENTS || Ue.Jb.DUPLICATES)) {
							const r = Bs(t),
								s = (e => {
									if (e.payload && e.payload.routeMatch && e.payload.routeMatch.match) return e.payload.routeMatch.match.params
								})(t);
							if (r && r.instanceId && s && s.partialPostId) {
								const t = r.instanceId,
									a = Object(Zl.s)(s.partialPostId);
								if (e[a] && e[t]) return {
									...e,
									[a]: bp(e[a], e[t])
								}
							}
						}
						return e;
					case W.b:
					case W.f: {
						const r = sp(t.payload.meta);
						return {
							...e,
							...xt()(t.payload.posts, pp([r, up, lp, op, cp, ap(e), np(e), ip(e)]))
						}
					}
					case hd.i:
						return Jl(e, t.payload);
					case tp.a:
						return Jl(e, t.payload.posts);
					case Ne.PAGE_LOADED:
					case nd.b:
					case Ce.e:
					case Ce.h:
					case $.b:
					case $.e:
					case Le.e:
					case Le.b:
					case Q.PROFILE_POSTS_LOADED:
					case Q.MORE_POSTS_LOADED:
					case X.SUBREDDIT_LOADED:
					case Ae.b:
					case Pe.b:
					case X.SUBREDDIT_LOADED:
					case td.b:
					case Re.r:
					case Ae.f:
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
						const r = sp(t.payload.meta);
						return {
							...e,
							...xt()(t.payload.posts, pp([r, up, lp, op, cp, dp(e), ip(e)]))
						}
					}
					case cd.r: {
						if (!t.payload || !t.payload.length) return e;
						const r = {};
						for (const s of t.payload) {
							const t = s,
								a = sp(t.meta);
							Object.assign(r, xt()(t.posts, pp([a, up, lp, op, dp(e), ip(e)])))
						}
						return {
							...e,
							...r
						}
					}
					case td.b: {
						const r = sp(t.payload.meta),
							s = e[t.payload.postId];
						return {
							...e,
							...xt()(t.payload.posts, pp([r, up, lp, op, dp(e), ip(e)])),
							[t.payload.postId]: {
								...s,
								numDuplicates: t.payload.count
							}
						}
					}
					case we.e:
					case Me.e:
					case z.SEARCH_RESULTS_RECEIVED: {
						const r = sp(t.payload.meta),
							s = xt()(t.payload.posts, pp([r, lp, up, op]));
						return B()({
							...e
						}, s, (e, t) => ({
							...t,
							...e
						}))
					}
					case hd.j: {
						const r = t.payload;
						return B()({
							...e
						}, r, (e, t) => ({
							...e,
							...t
						}))
					}
					case Bl.a: {
						const {
							id: r,
							vote: s
						} = t.payload, a = e[r];
						return a ? {
							...e,
							[r]: Object(ep.c)(a, s)
						} : e
					}
					case q.b:
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
							...r.reduce((e, t) => (e[t.post.id] = pp([lp])(Object(zs.e)(t.post)), e), {})
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
								...Object(zl.a)(c, s, a),
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
							[s]: Object(zl.b)(a, r)
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
							...xt()(s, pp([lp, op]))
						}
					}
					case Fl.b:
					case K.s: {
						const {
							operation: r,
							ids: s,
							username: a,
							options: n
						} = t.payload, c = s.filter(e => Object(Wl.a)(e)), o = Object(Yl.d)(e, r, c, a, n);
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
					case Nc.g: {
						const r = t.payload.subredditTopContent;
						return r && r.posts && Object.keys(r.posts) ? {
							...xt()(r.posts, pp([lp, op])),
							...e
						} : e
					}
					case J.c:
					case J.i:
					case J.e:
					case J.g:
					case Kl.b:
						return {
							...xt()(t.payload.posts, pp([lp, op])), ...e
						};
					case hd.l: {
						const {
							postId: r,
							richtextContent: s
						} = t.payload, a = e[r];
						return a && a.media && Object(Xl.H)(a.media) ? {
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
					case Hl.a: {
						const r = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case Hl.b: {
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
					case Vl.b: {
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
					case Vl.a:
						return {
							...e
						};
					case ql.b: {
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
					case ql.a:
						return {
							...e
						};
					default:
						return e
				}
			};
			var fp = (e = null, t) => {
					switch (t.type) {
						case hd.h:
							return t.payload;
						default:
							return e
					}
				},
				mp = r("./src/reddit/actions/postLevelCrowdControl.ts");
			const Ep = {};
			var hp = (e = Ep, t) => {
				switch (t.type) {
					case mp.a: {
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
			const _p = [];
			var Op = (e = _p, t) => {
					switch (t.type) {
						case hd.k: {
							const {
								postIds: e
							} = t.payload;
							return e
						}
						case Ae.b:
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
				Ip = r("./node_modules/uuid/v4.js"),
				gp = r.n(Ip);
			const Sp = gp()();
			var Dp = (e = Sp, t) => {
				switch (t.type) {
					case Ne.PAGE_LOADED:
					case Is.h:
					case Is.a:
					case Is.m:
					case Is.f:
						return gp()();
					default:
						return e
				}
			};
			var vp = (e = null, t) => {
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
			var Tp = (e = !0, t) => {
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
			var wp = (e = !1, t) => {
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
				Ap = Object(c.c)({
					creationToken: Dp,
					error: vp,
					pending: Tp,
					pendingUpdate: wp
				});
			const jp = {};
			var Rp = (e = jp, t) => {
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
			const Cp = {
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

			function Pp(e) {
				const t = {};
				return (r = t, s) => {
					switch (s.type) {
						case Cp[e].POSTS_LOADED:
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
						case Cp[e].MUTATION_SUCCEEDED: {
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
			const Np = {};

			function Lp(e) {
				return (t = Np, r) => {
					switch (r.type) {
						case Cp[e].POSTS_LOADED:
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
			var kp = r("./node_modules/lodash/uniq.js"),
				xp = r.n(kp);
			const Up = {};

			function Mp(e) {
				return (t = Up, r) => {
					switch (r.type) {
						case Cp[e].POSTS_LOADED:
						case Is.f: {
							const {
								subredditInfoById: s
							} = r.payload, a = s.id, n = s.scheduledPosts[Cp[e].postIdsKey];
							return {
								...t,
								[a]: xp()([...t[a] || [], ...n])
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
			var Gp = Object(c.c)({
					models: Pp("recurringPosts"),
					pageInfo: Lp("recurringPosts"),
					postOrder: Mp("recurringPosts"),
					editModal: Rp
				}),
				Fp = Object(c.c)({
					models: Pp("standalonePosts"),
					pageInfo: Lp("standalonePosts"),
					postOrder: Mp("standalonePosts")
				}),
				Bp = Object(c.c)({
					api: Ap,
					standalonePosts: Fp,
					recurringPosts: Gp
				});
			var Hp = (e = null, t) => {
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
			var qp = (e = !1, t) => {
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
				Vp = Object(c.c)({
					error: Hp,
					pending: qp
				});
			const Kp = [];
			var Wp = (e = Kp, t) => {
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
							return Kp;
						default:
							return e
					}
				},
				$p = Object(c.c)({
					api: Vp,
					list: Wp
				}),
				Qp = r("./src/reddit/actions/video.ts");
			const Jp = {};
			var zp = (e = Jp, t) => {
				switch (t.type) {
					case Qp.e: {
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
			const Xp = {};
			var Yp = (e = Xp, t) => {
				switch (t.type) {
					case Qp.a: {
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
			const Zp = {};
			var eb = (e = Zp, t) => {
				switch (t.type) {
					case Qp.b: {
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
			const tb = {};
			var rb = (e = tb, t) => {
				switch (t.type) {
					case Qp.c: {
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
			const sb = {
				mutedInFeed: !0
			};
			var ab = (e = sb, t) => {
				switch (t.type) {
					case Qp.l:
						return {
							...e, mutedInFeed: t.payload
						};
					default:
						return e
				}
			};
			var nb = (e = null, t) => {
				switch (t.type) {
					case Qp.k: {
						const {
							postId: e
						} = t.payload;
						return e
					}
					case Qp.d:
						return null;
					default:
						return e
				}
			};
			const cb = {};
			var ob = (e = cb, t) => {
				switch (t.type) {
					case Qp.o: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Qp.e: {
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
			const db = {};
			var ib = (e = db, t) => {
				switch (t.type) {
					case Qp.h: {
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
					case Qp.f: {
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
			const ub = {};
			var lb = (e = ub, t) => {
				switch (t.type) {
					case Qp.j: {
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
			const pb = {};
			var bb = (e = pb, t) => {
				switch (t.type) {
					case Qp.p: {
						const {
							postId: r
						} = t.payload;
						return e[r] ? {
							...e,
							[r]: !1
						} : e
					}
					case Qp.g: {
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
			const yb = {};
			var fb = (e = yb, t) => {
				switch (t.type) {
					case Qp.i: {
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
			const mb = {};
			var Eb = (e = mb, t) => {
					switch (t.type) {
						case Qp.m: {
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
				hb = r("./src/reddit/constants/video.ts");
			const _b = {};
			var Ob = (e = _b, t) => {
					switch (t.type) {
						case Qp.n: {
							const {
								postId: r,
								time: s
							} = t.payload;
							return e[r] && Math.abs(Math.floor(s.currentTime) - Math.floor(e[r].currentTime)) < hb.l ? e : {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Ib = Object(c.c)({
					autoPlayed: zp,
					buffering: Yp,
					consumed: eb,
					continuousViewStartedAt: rb,
					feed: ab,
					fullscreen: nb,
					loadable: ob,
					loadTimes: ib,
					metadata: lb,
					paused: bb,
					playing: fb,
					started: Eb,
					time: Ob
				}),
				gb = Object(c.c)({
					chained: _l,
					embedAndImage: Dl,
					expanded: Tl,
					focus: wl,
					followed: jl,
					instances: Cl,
					isTrackingCrossposts: Ll,
					metaMap: xl,
					models: yp,
					modToMemberShare: fp,
					crowdControl: Ol,
					postLevelCrowdControl: hp,
					recent: Op,
					scheduledPosts: Bp,
					topAwarded: $p,
					video: Ib
				}),
				Sb = r("./src/lib/reducers/addAuthentication/index.ts");
			const Db = {};
			var vb = Object(Sb.a)((e = Db, t) => {
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
				}, Db),
				Tb = Object(c.c)({
					data: vb
				});
			const wb = {};
			var Ab = (e = wb, t) => {
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
			const jb = {};
			var Rb = (e = jb, t) => {
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
				Cb = Object(c.c)({
					error: Ab,
					pending: Rb
				});
			const Pb = {};
			var Nb = (e = Pb, t) => {
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
			const Lb = {};
			var kb = (e = Lb, t) => {
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
				xb = Object(c.c)({
					error: Nb,
					pending: kb
				}),
				Ub = Object(c.c)({
					fetch: Cb,
					purchase: xb
				});
			var Mb = (e = null, t) => {
				switch (t.type) {
					case h.b:
						return t.payload.productId;
					case s.b:
						return null;
					default:
						return e
				}
			};
			const Gb = {};
			var Fb = (e = Gb, t) => {
					switch (t.type) {
						case y.i:
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
				Bb = Object(c.c)({
					api: Ub,
					currentlyPurchasing: Mb,
					models: Fb
				});
			const Hb = {};
			var qb = (e = Hb, t) => {
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
			const Vb = {};
			var Kb = (e = Vb, t) => {
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
				Wb = Object(c.c)({
					error: qb,
					pending: Kb
				});
			const $b = {};
			var Qb = (e = $b, t) => {
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
				Jb = r("./src/reddit/actions/comment/list.ts");
			const zb = {};
			var Xb = (e = zb, t) => {
				switch (t.type) {
					case Jb.a: {
						const {
							listingKey: r,
							listingName: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case Jb.b: {
						const {
							listingKey: r
						} = t.payload;
						return r in e ? xs()(e, r) : e
					}
					default:
						return e
				}
			};
			const Yb = {};
			var Zb = (e = Yb, t) => {
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
			const ey = {};
			var ty = (e = ey, t) => {
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
				ry = Object(c.c)({
					api: Wb,
					endMarkers: Xb,
					fetchedTokens: Zb,
					commentIds: Qb,
					loadMore: ty
				}),
				sy = r("./src/reddit/actions/pages/profileModSettings.ts");
			var ay = (e = !0, t) => {
					switch (t.type) {
						case sy.PROFILE_MOD_SETTINGS_LOADED:
							return !1;
						default:
							return e
					}
				},
				ny = Object(c.c)({
					pending: ay
				}),
				cy = Object(c.c)({
					api: ny
				});
			const oy = {};
			var dy = (e = oy, t) => (t.type, e);
			const iy = {};
			var uy = (e = iy, t) => {
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
			const ly = {};
			var py = (e = ly, t) => {
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
				by = Object(c.c)({
					error: uy,
					pending: py
				});
			const yy = {};
			var fy = (e = yy, t) => {
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
			const my = {};
			var Ey = (e = my, t) => {
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
							} : my
						}
						default:
							return e
					}
				},
				hy = Object(c.c)({
					api: by,
					ids: fy,
					pageInfo: Ey
				}),
				_y = r("./src/reddit/constants/posts.ts");
			const Oy = {};
			var Iy = (e = Oy, t) => {
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
						} = t.payload, a = r.filter(e => e.type === _y.a.PROFILE);
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
			const gy = {};
			var Sy = (e = gy, t) => {
				switch (t.type) {
					case Ae.f:
					case W.b:
					case W.f:
					case Ae.b:
					case $.b:
					case $.e:
					case J.c:
					case J.i:
					case J.e:
					case J.g:
					case Le.b:
					case Le.e:
					case Q.PROFILE_POSTS_LOADED:
					case ke.b:
					case Ae.f:
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
					case Ne.PAGE_LOADED:
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
			const Dy = {};
			var vy = (e = Dy, t) => {
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
				Ty = Object(c.c)({
					pending: vy
				});
			const wy = {};
			var Ay = (e = wy, t) => {
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
			const jy = {};
			var Ry = (e = jy, t) => {
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
				Cy = Object(c.c)({
					api: Ty,
					models: Ay,
					pageInfo: Ry
				});
			const Py = {};
			var Ny = (e = Py, t) => {
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
				Ly = Object(c.c)({
					pending: Ny
				});
			const ky = {};
			var xy = (e = ky, t) => {
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
				Uy = Object(c.c)({
					api: Ly,
					pageInfo: xy
				}),
				My = r("./src/reddit/actions/pinnedPost.ts");
			const Gy = {};
			var Fy = Object(Sb.a)((e = Gy, t) => {
				switch (t.type) {
					case My.a: {
						const {
							pinned: r,
							profileId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case My.d: {
						const {
							postId: r,
							profileId: s
						} = t.payload, a = e[s] || [];
						return {
							...e,
							[s]: [...a, r].slice(-Ue.ab)
						}
					}
					case My.g: {
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
			}, Gy);
			const By = {};
			var Hy = Object(Sb.a)((e = By, t) => {
				switch (t.type) {
					case My.a: {
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
			}, By);
			const qy = {};
			var Vy = Object(Sb.a)((e = qy, t) => {
					switch (t.type) {
						case My.c:
						case My.f: {
							const {
								postId: r,
								profileId: s
							} = t.payload, a = e[s] || [];
							return {
								...e,
								[s]: [...a, r]
							}
						}
						case My.b:
						case My.e:
						case My.d:
						case My.g: {
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
				}, qy),
				Ky = Object(c.c)({
					data: Fy,
					initialData: Hy,
					pending: Vy
				}),
				Wy = r("./src/reddit/actions/trophyCase.ts");
			const $y = {};
			var Qy, Jy, zy = (e = $y, t) => {
					switch (t.type) {
						case Wy.a: {
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
				Xy = Object(c.c)({
					about: Iy,
					models: Sy,
					moderated: Cy,
					multireddits: Uy,
					pinnedPosts: Ky,
					trophyCases: zy
				});
			r("./src/lib/cache/index.ts");
			! function(e) {
				e.MobilePromoBanner = "mobilePromoBanner", e.UpsellSignUpBannerLarge = "upsellSignUpBannerLarge", e.UpsellSignUpBannerMedium = "upsellSignUpBannerMedium", e.UpsellSignUpBannerSmall = "upsellSignUpBannerSmall"
			}(Qy || (Qy = {})),
			function(e) {
				e[e.FrontPage = 0] = "FrontPage", e[e.SubredditPage = 1] = "SubredditPage", e[e.CommentsPage = 2] = "CommentsPage"
			}(Jy || (Jy = {}));
			var Yy, Zy, ef;
			! function(e) {
				e.mobilePromoBanner = "desktop_xpromo_banner"
			}(Yy || (Yy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(Zy || (Zy = {})),
			function(e) {
				e.Test1 = "test_1", e.Test2 = "test_2"
			}(ef || (ef = {}));
			! function(e) {
				e.welcome = "signup_upsell_banner_welcome", e.join = "signup_upsell_banner_redditor", e.vote = "signup_upsell_banner_discuss", e.personalize = "signup_upsell_banner_personalize"
			}(Yy || (Yy = {}));
			Object(xe.a)("PROMO__SHOW_PROMO"), Object(xe.a)("PROMO__HIDE_PROMO");
			const tf = {
				mobilePromoBanner: !1,
				upsellSignUpBannerLarge: !1,
				upsellSignUpBannerMedium: !1,
				upsellSignUpBannerSmall: null
			};
			var rf = (e = tf, t) => {
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
				sf = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const af = {
				isError: !1,
				isPending: !1,
				global: {
					rpan_config_refresh_rate: sf.d,
					viewer_streams_refresh: sf.c,
					viewer_streams_refresh_slop: sf.e
				},
				subreddits: {},
				isPermanentlyCanceled: !1
			};
			var nf = (e = af, t) => {
				switch (t.type) {
					case sf.w:
						return {
							...e, isError: !1, isPending: !1, global: {
								...t.payload
							}
						};
					case sf.x: {
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
					case sf.G:
						return {
							...e, isPending: !0
						};
					case sf.I:
						return {
							...e, isError: !0, isPending: !1
						};
					case sf.H:
						return {
							...e, isPermanentlyCanceled: !0, isPending: !1
						};
					default:
						return e
				}
			};
			var cf = (e = {}, t) => {
				switch (t.type) {
					case sf.L:
						return {
							...e, [sf.b]: t.payload.error
						};
					case sf.M:
						return {
							...e, [t.payload.streamId]: t.payload.error
						};
					case sf.z: {
						const {
							[sf.b]: t, ...r
						} = e;
						return r
					}
					case sf.y: {
						const {
							[t.payload.model.post.id]: r, ...s
						} = e;
						return s
					}
					default:
						return e
				}
			};
			const of = (e, t, r, s) => ({
				...e,
				[t]: {
					...e[t],
					isPending: r,
					...s && {
						utcTimeStamp: s
					}
				}
			});
			var df = (e = {}, t) => {
				switch (t.type) {
					case sf.N:
						return of(e, t.payload, !0);
					case sf.O:
						return of(e, sf.b, !0);
					case sf.y:
						return of(e, t.payload.model.post.id, !1, t.payload.utcTimeStamp);
					case sf.z:
						return of(e, sf.b, !1, t.payload.utcTimeStamp);
					case sf.M:
						return of(e, t.payload.streamId, !1);
					case sf.L:
						return of(e, sf.b, !1);
					default:
						return e
				}
			};
			const uf = {
				isError: !1,
				isPending: !1,
				subreddits: []
			};
			var lf = (e = uf, t) => {
					switch (t.type) {
						case sf.v:
							return {
								...e, isError: !1, isPending: !1, subreddits: t.payload.subreddits
							};
						case sf.J:
							return {
								...e, isError: !1, isPending: !0
							};
						case sf.K:
							return {
								...e, isError: !0, isPending: !1
							};
						default:
							return e
					}
				},
				pf = Object(c.c)({
					config: nf,
					error: cf,
					pending: df,
					recommendedViewerSubreddits: lf
				});
			const bf = {};
			var yf = (e = bf, t) => {
				switch (t.type) {
					case sf.r:
						return {
							...e, [t.payload.streamId]: {
								level: t.payload.level,
								error: !1
							}
						};
					case sf.F:
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
			const ff = {
				cursor: sf.W,
				timestamps: {},
				visitOrder: []
			};
			var mf = (e = ff, t) => {
				switch (t.type) {
					case sf.P:
						return ff;
					case sf.X: {
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
						return Ef(e, t.payload.id);
					case sf.E:
						return Ef(e, t.payload);
					case hd.j: {
						const r = Object.keys(t.payload).filter(e => t.payload[e].hidden);
						return hf(e, r)
					}
					case sf.V: {
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
			const Ef = (e, t) => {
					const r = e.visitOrder.indexOf(t);
					if (-1 === r) return e;
					const s = r > e.cursor ? e.cursor : Math.max(e.cursor - 1, 0);
					return {
						...e,
						visitOrder: e.visitOrder.filter(e => e !== t),
						cursor: s
					}
				},
				hf = (e, t) => {
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
				_f = {
					ended: [],
					removed: []
				};

			function Of(e) {
				return [...new Set(e)]
			}
			var If = (e = _f, t) => {
				switch (t.type) {
					case sf.t:
						return {
							...e, ended: Of(e.ended.concat(t.payload))
						};
					case sf.u:
						return {
							...e, removed: Of(e.removed.concat(t.payload))
						};
					default:
						return e
				}
			};
			const gf = {};
			var Sf = (e = gf, t) => {
				switch (t.type) {
					case sf.z:
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
			const Df = {},
				vf = (e, t) => {
					const r = Object.keys(e).reduce((t, r) => ({
						...t,
						[r]: {
							...e[r],
							rank: sf.m
						}
					}), {});
					return t.reduce((e, t, r) => ({
						...e,
						[t.post.id]: {
							...t,
							rank: sf.l - r
						}
					}), r)
				},
				Tf = (e, t) => {
					const r = t.post.id,
						s = e[r] ? e[r].rank : sf.m;
					return {
						...e,
						[t.post.id]: {
							...t,
							rank: s
						}
					}
				};
			var wf = (e = Df, t) => {
				switch (t.type) {
					case sf.y:
						return Tf(e, t.payload.model);
					case sf.z:
						return vf(e, t.payload.models);
					case sf.D: {
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
			const Af = {
				discoveryUnitThumbnails: {},
				streamPreviews: {}
			};
			var jf = (e = Af, t) => {
				switch (t.type) {
					case sf.s:
						return {
							...e, discoveryUnitThumbnails: {
								...t.payload.reduce((e, t) => ({
									...e,
									[t.postId]: t.imageUrl
								}), {})
							}
						};
					case sf.A:
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
			const Rf = {
				reported: []
			};
			var Cf = (e = Rf, t) => {
				switch (t.type) {
					case _.d:
						return {
							...e, reported: [...e.reported, t.payload.id]
						};
					default:
						return e
				}
			};
			const Pf = {
				isIntroFinished: !1
			};
			var Nf = (e = Pf, t) => {
				switch (t.type) {
					case sf.B:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Lf = {
				reportedStreams: []
			};
			var kf = (e = Lf, t) => {
					switch (t.type) {
						case sf.C:
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
				xf = Object(c.c)({
					api: pf,
					history: mf,
					hlsStreams: If,
					listings: Sf,
					models: wf,
					preloads: jf,
					reports: Cf,
					theaterSettings: Nf,
					userSettings: kf,
					automuteLevels: yf
				}),
				Uf = r("./src/reddit/actions/recentSubreddits/constants.ts"),
				Mf = r("./src/reddit/actions/session.ts");
			const Gf = [];
			var Ff = (e = Gf, t) => {
				switch (t.type) {
					case Mf.c:
					case Mf.d:
						return Gf;
					case Uf.d:
						return ((e, t) => Qi()(e, t) ? e : t)(e, t.subreddits);
					case Uf.f: {
						const {
							payload: r
						} = t, s = [r, ...e];
						return Array.from(new Set(s)).slice(0, Uf.c)
					}
					case Uf.a: {
						const {
							payload: e
						} = t;
						return e.slice(0, Uf.c)
					}
					default:
						return e
				}
			};
			const Bf = {};
			var Hf = (e = Bf, t) => {
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
				qf = r("./src/reddit/actions/pages/report/constants.ts");
			var Vf = (e = null, t) => {
				switch (t.type) {
					case qf.a:
						return t.payload;
					default:
						return e
				}
			};
			var Kf = (e = null, t) => {
				switch (t.type) {
					case qf.b:
						return t.payload;
					case qf.c:
					case qf.d:
						return !1;
					default:
						return e
				}
			};
			var Wf = (e = !1, t) => {
				switch (t.type) {
					case qf.d:
						return !0;
					case qf.c:
					case qf.b:
						return !1;
					default:
						return e
				}
			};
			var $f = (e = !1, t) => {
					switch (t.type) {
						case qf.c:
							return !0;
						case qf.b:
						case qf.d:
							return !1;
						default:
							return e
					}
				},
				Qf = Object(c.c)({
					error: Kf,
					pending: Wf,
					success: $f
				}),
				Jf = r("./src/reddit/actions/reportPageRules/constants.ts");
			const zf = [];
			var Xf = (e = zf, t) => {
					switch (t.type) {
						case Jf.a:
							return t.payload;
						default:
							return e
					}
				},
				Yf = Object(c.c)({
					reportPageApi: Qf,
					reportPageRules: Xf,
					initialReason: Vf
				}),
				Zf = r("./src/reddit/actions/reportRules.ts");
			const em = {
				liveStreamingRules: [],
				sitewideRules: []
			};
			var tm = (e = em, t) => {
				switch (t.type) {
					case Zf.b:
						return {
							...e, sitewideRules: t.payload
						};
					case Zf.a:
						return {
							...e, liveStreamingRules: t.payload
						};
					default:
						return e
				}
			};
			Object(xe.a)("REQUEST_HOST_SET");
			var rm = (e = "", t) => {
				switch (t.type) {
					case "REQUEST_HOST_SET":
						return t.payload;
					default:
						return e
				}
			};
			Object(xe.a)("RUN_TIME_ENV_VARS__IS_STAGING");
			const sm = {
				staging: !1,
				startTimeInMillis: (new Date).getTime()
			};
			var am = (e = sm, t) => {
					switch (t.type) {
						case "RUN_TIME_ENV_VARS__IS_STAGING":
							return {
								...e, staging: !0
							};
						default:
							return e
					}
				},
				nm = r("./src/reddit/components/SearchDropdown/index.tsx");
			var cm = (e = !1, t) => {
				switch (t.type) {
					case Me.b:
						return !e;
					case yo.b: {
						const {
							event: r
						} = t.payload, s = r.target, a = document.getElementById(nm.b), n = document.getElementById(nm.a);
						return !(!s || !((null == a ? void 0 : a.contains(s)) || (null == n ? void 0 : n.contains(s)))) && e
					}
					case Me.a:
					case yo.a:
					case yo.c:
						return !1;
					default:
						return e
				}
			};
			const om = Object.create(null);
			var dm = (e = om, t) => {
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
			var im = (e = null, t) => {
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
			const um = Object.create(null);
			var lm = (e = um, t) => {
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
				pm = r("./src/reddit/models/Search/index.ts");
			const bm = {};
			var ym = (e = bm, t) => {
					switch (t.type) {
						case Me.g: {
							const {
								typeaheadSuggestions: r
							} = t.payload, s = {};
							return Object.keys(r).forEach(e => {
								const t = r[e];
								return s[e] = Object(pm.d)(t)
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				},
				fm = Object(c.c)({
					idsByQuery: lm,
					models: ym
				});
			const mm = {};
			var Em = (e = mm, t) => {
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
				hm = Object(c.c)({
					isDropdownOpen: cm,
					relatedQueries: dm,
					searchQuery: im,
					typeahead: fm,
					viewTreatment: Em
				}),
				_m = r("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Om = {};
			var Im = (e = Om, t) => {
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
						if (i === _m.c.Trending || r) {
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
			const gm = {};
			var Sm = (e = gm, t) => {
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
			const Dm = {};
			var vm = (e = Dm, t) => {
					switch (t.type) {
						case z.SEARCH_RESULTS_RECEIVED: {
							const {
								key: r,
								searchDiscoveryUnitOrder: s
							} = t.payload;
							return s ? {
								...e,
								[r]: s
							} : Dm
						}
						default:
							return e
					}
				},
				Tm = Object(c.c)({
					headerContent: Im,
					models: Sm,
					order: vm
				});
			Object(xe.a)("SEO__CRAWLER_RECEIVED");
			var wm = (e = null, t) => {
					switch (t.type) {
						case "SEO__CRAWLER_RECEIVED":
							return t.payload;
						default:
							return e
					}
				},
				Am = r("./src/reddit/actions/seo/linksModule.ts");
			const jm = {};
			var Rm = (e = jm, t) => {
					switch (t.type) {
						case Am.b:
							return Array.isArray(t.payload) && 0 !== t.payload.length ? {
								...e,
								frontpage: t.payload
							} : e;
						case Am.c:
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
				Cm = r("./src/reddit/actions/seo/topicLinks.ts");
			const Pm = {};
			var Nm = (e = Pm, t) => {
					switch (t.type) {
						case Cm.a:
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
				Lm = Object(c.c)({
					crawler: wm,
					linksModule: Rm,
					topicLinks: Nm
				}),
				km = r("./src/reddit/actions/shortcuts/constants.ts");
			var xm = (e = null, t) => {
				switch (t.type) {
					case km.a:
						return t.payload;
					case E.a:
						return null;
					default:
						return e
				}
			};
			var Um = (e = null, t) => {
					switch (t.type) {
						case km.b:
							return t.payload || null;
						default:
							return e
					}
				},
				Mm = r("./src/reddit/constants/history.ts"),
				Gm = r("./src/reddit/constants/shortcuts.ts"),
				Fm = r("./src/reddit/helpers/history/index.ts");
			const Bm = Gm.d.Global,
				Hm = e => {
					switch (e.name) {
						case "comments":
						case "duplicates":
						case "metaMembershipPaywallPage":
							return Object(Fm.b)(Mm.a.IsOverlay) ? Gm.d.Lightbox : Gm.d.CommentPage;
						case "rpan":
						case "subredditCreation":
							return Object(Fm.b)(Mm.a.IsOverlay) ? Gm.d.Lightbox : Bm;
						case "index":
						case "listing":
						case "multireddit":
						case "searchResults":
						case "subreddit":
							return Gm.d.Listing;
						case "modQueuePages":
							return Gm.d.Modqueue;
						default:
							return Bm
					}
				};
			var qm = (e = Bm, t) => {
					switch (t.type) {
						case E.a:
							const r = t.payload;
							if (r.routeMatch) {
								const e = r.routeMatch.route.meta;
								return Hm(e)
							}
							return Bm;
						default:
							return e
					}
				},
				Vm = Object(c.c)({
					activeCommentId: xm,
					activePostId: Um,
					namespace: qm
				});
			var Km = (e = !1, t) => {
					if (e) return e;
					switch (t.type) {
						case S.q:
						case S.r:
							return !0;
						default:
							return e
					}
				},
				Wm = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				$m = Object(c.c)({
					firstFetch: Km,
					models: Wm.b
				}),
				Qm = r("./src/reddit/actions/streaming/modSettings.ts");
			var Jm = (e = null, t) => {
				switch (t.type) {
					case Qm.b:
					case Qm.c:
						return null;
					case Qm.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var zm = (e = !1, t) => {
					switch (t.type) {
						case Qm.b:
							return !0;
						case Qm.c:
						case Qm.a:
							return !1;
						default:
							return e
					}
				},
				Xm = Object(c.c)({
					error: Jm,
					pending: zm
				}),
				Ym = r("./src/reddit/actions/streaming/constants.ts");
			const Zm = {};
			var eE = (e = Zm, t) => {
					switch (t.type) {
						case Ym.a: {
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
				tE = Object(c.c)({
					api: Xm,
					modSettings: eE
				}),
				rE = r("./src/reddit/models/StructuredStyles/index.ts");
			const sE = {};
			var aE = (e = sE, t) => {
					switch (t.type) {
						case O.h:
						case O.b:
						case O.d:
							return t.payload.styles;
						case O.e:
							return sE;
						case O.c: {
							const r = t.payload;
							return {
								...e,
								...r
							}
						}
						case O.k: {
							const e = t.payload;
							return Object(rE.h)(e.styles)
						}
						default:
							return e
					}
				},
				nE = r("./src/reddit/actions/exportImportStyles.ts");
			var cE = (e = null, t) => {
				switch (t.type) {
					case nE.c:
					case nE.b:
						return null;
					case nE.a:
						return t.payload;
					default:
						return e
				}
			};
			var oE = (e = !1, t) => {
					switch (t.type) {
						case nE.c:
							return !0;
						case nE.b:
						case nE.a:
							return !1;
						default:
							return e
					}
				},
				dE = Object(c.c)({
					error: cE,
					pending: oE
				}),
				iE = r("./src/reddit/actions/postFlairStyleTemplate.ts"),
				uE = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const lE = {};
			var pE = (e = lE, t) => {
					switch (t.type) {
						case X.SUBREDDIT_LOADED:
						case W.b:
						case W.f:
						case z.SEARCH_RESULTS_RECEIVED:
						case Me.e:
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
						case iE.b: {
							const {
								flairId: r,
								template: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case iE.a: {
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
							return lE;
						case uE.b: {
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
				bE = Object(c.c)({
					models: pE
				});
			const yE = {};
			var fE = (e = yE, t) => {
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
						return yE;
					default:
						return e
				}
			};
			var mE = (e = !1, t) => {
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
			var EE = (e = null, t) => {
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
			const hE = {};
			var _E = (e = hE, t) => {
					switch (t.type) {
						case X.SUBREDDIT_LOADED:
						case W.b:
						case W.f:
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
								s = Object(rE.h)(r.styles);
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
								return Jl(e, {
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
								return Jl(e, {
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
				OE = Object(c.c)({
					draft: aE,
					exportStyles: dE,
					flairTemplate: bE,
					imagePreviews: fE,
					isBladeEditorDirty: mE,
					isEditing: EE,
					models: _E
				});
			Object(xe.a)("STYLESHEETS__EXTRACTED_FROM_MANIFEST");
			var IE = (e = "", t) => {
					switch (t.type) {
						case "STYLESHEETS__EXTRACTED_FROM_MANIFEST":
							return t.payload;
						default:
							return e
					}
				},
				gE = r("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const SE = {};
			var DE = (e = SE, t) => {
				switch (t.type) {
					case gE.c:
					case gE.b: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case gE.a: {
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
			const vE = {};
			var TE = (e = vE, t) => {
					switch (t.type) {
						case gE.c: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case gE.b:
						case gE.a: {
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
				wE = Object(c.c)({
					error: DE,
					pending: TE
				});
			const AE = {};
			var jE = (e = AE, t) => {
					switch (t.type) {
						case gE.b: {
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
				RE = Object(c.c)({
					api: wE,
					models: jE
				}),
				CE = r("./src/reddit/actions/category/constants.ts"),
				PE = r("./src/reddit/actions/subredditMention/constants.ts");
			const NE = {};
			var LE = (e = NE, t) => {
				switch (t.type) {
					case PE.d:
					case W.b:
					case W.f:
					case z.SEARCH_RESULTS_RECEIVED:
					case X.SUBREDDIT_FAILED:
					case X.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
					case Us.PAGE_LOADED:
					case $.b:
					case $.e:
					case Le.b:
					case Le.a:
					case Le.e:
					case Le.d:
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
						} = t.payload, a = r.filter(e => e.type === _y.a.SUBREDDIT);
						return a.length ? a.reduce((e, t) => Object(G.setIn)(e, [t.id, "userIsSubscriber"], s), e) : e
					}
					case Nc.g:
					case CE.f:
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
			const kE = {};
			var xE = (e = kE, t) => {
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
			var UE = (e = !1, t) => {
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
				ME = Object(c.c)({
					error: xE,
					pending: UE
				}),
				GE = r("./src/reddit/actions/subredditCreation.ts");
			const FE = {
				apiError: null
			};
			var BE = (e = FE, t) => {
				switch (t.type) {
					case GE.b: {
						const {
							error: r
						} = t.payload;
						return {
							...e,
							apiError: r
						}
					}
					case GE.a:
					case GE.c:
					case GE.d:
						return FE;
					default:
						return e
				}
			};
			var HE = (e = null, t) => {
				switch (t.type) {
					case GE.d: {
						const {
							subredditName: e
						} = t.payload;
						return e || null
					}
					case GE.c:
					case GE.b:
						return null;
					default:
						return e
				}
			};
			var qE = (e = !1, t) => {
					switch (t.type) {
						case GE.c:
							return !0;
						case GE.d:
						case GE.b:
							return !1;
						default:
							return e
					}
				},
				VE = Object(c.c)({
					error: BE,
					lastCreatedSubredditId: HE,
					pending: qE
				});
			var KE = (e = !1, t) => {
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
				WE = Object(c.c)({
					pending: KE
				});
			const $E = {};
			var QE = (e = $E, t) => {
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
			const JE = {};
			var zE = (e = JE, t) => {
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
				XE = Object(c.c)({
					error: QE,
					pending: zE
				});
			const YE = {};
			var ZE = (e = YE, t) => {
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
				eh = Object(c.c)({
					pending: ZE
				});
			var th = (e = null, t) => {
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
			var rh = (e = !1, t) => {
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
				sh = Object(c.c)({
					error: th,
					pending: rh
				});
			var ah = (e = null, t) => {
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
			var nh = (e = !1, t) => {
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
				ch = Object(c.c)({
					error: ah,
					pending: nh
				}),
				oh = r("./src/reddit/actions/subredditRules/constants.ts");
			var dh = (e = !1, t) => {
					switch (t.type) {
						case oh.c:
							return !0;
						case oh.a:
						case oh.b:
							return !1;
						default:
							return e
					}
				},
				ih = r("./src/reddit/actions/subredditSettings.ts");
			var uh = (e = !1, t) => {
					switch (t.type) {
						case ih.e:
							return !0;
						case ih.f:
						case ih.d:
							return !1;
						default:
							return e
					}
				},
				lh = Object(c.c)({
					pending: uh
				});
			const ph = {};
			var bh = (e = ph, t) => {
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
				yh = Object(c.c)({
					pending: bh
				}),
				fh = r("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const mh = {};
			var Eh = (e = mh, t) => {
				switch (t.type) {
					case fh.c:
					case fh.b: {
						const r = t.payload,
							{
								subredditName: s
							} = r.options;
						return {
							...e,
							[s.toLowerCase()]: null
						}
					}
					case fh.a: {
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
			const hh = {};
			var _h = (e = hh, t) => {
					switch (t.type) {
						case fh.c: {
							const r = t.payload,
								{
									subredditName: s
								} = r.options;
							return {
								...e,
								[s.toLowerCase()]: !0
							}
						}
						case fh.b:
						case fh.a: {
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
				Oh = Object(c.c)({
					error: Eh,
					pending: _h
				});
			const Ih = {};
			var gh = (e = Ih, t) => {
				switch (t.type) {
					case Kl.c:
					case Kl.b: {
						const {
							subredditName: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case Kl.a: {
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
			const Sh = {};
			var Dh = (e = Sh, t) => {
					switch (t.type) {
						case Kl.c: {
							const {
								subredditName: r
							} = t.payload;
							return {
								...e,
								[r.toLowerCase()]: !0
							}
						}
						case Kl.b:
						case Kl.a: {
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
				vh = Object(c.c)({
					error: gh,
					pending: Dh
				}),
				Th = Object(c.c)({
					about: ME,
					create: VE,
					inlineEditing: WE,
					models: XE,
					onboarding: eh,
					productOffers: sh,
					rankings: ch,
					rules: dh,
					settings: lh,
					similar: yh,
					topContent: vh,
					wiki: Oh
				}),
				wh = r("./node_modules/lodash/isNil.js"),
				Ah = r.n(wh);
			const jh = {};
			var Rh = (e = jh, t) => {
					switch (t.type) {
						case Z.d: {
							const {
								subredditId: r,
								forceState: s
							} = t.payload;
							return {
								...e,
								[r]: Ah()(s) ? !e[r] : s
							}
						}
						default:
							return e
					}
				},
				Ch = Object(c.c)({
					meta: Rh
				});
			const Ph = {};
			var Nh = (e = Ph, t) => {
				switch (t.type) {
					case CE.f: {
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
			const Lh = {};
			var kh = (e = Lh, t) => {
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
				xh = r("./src/reddit/actions/subredditCrosspostable.ts");
			var Uh = (e = null, t) => {
				switch (t.type) {
					case xh.a: {
						const {
							error: e
						} = t.payload;
						return e
					}
					case xh.c:
					case xh.b:
						return null;
					default:
						return e
				}
			};
			var Mh = (e = !1, t) => {
					switch (t.type) {
						case xh.c:
							return !0;
						case xh.b:
						case xh.a:
							return !1;
						default:
							return e
					}
				},
				Gh = Object(c.c)({
					errors: Uh,
					pending: Mh
				});
			const Fh = {};
			var Bh = (e = Fh, t) => {
					switch (t.type) {
						case xh.b: {
							const {
								subredditIds: r
							} = t.payload;
							return Qi()(e, r) ? e : r
						}
						default:
							return e
					}
				},
				Hh = Object(c.c)({
					api: Gh,
					ids: Bh
				});
			const qh = {};
			var Vh = (e = qh, t) => {
					switch (t.type) {
						case tp.a: {
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
							return Jl(c, {
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
				Kh = Object(c.c)({
					models: Vh
				});
			const Wh = {};
			var $h = (e = Wh, t) => {
				switch (t.type) {
					case f.a: {
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
			const Qh = {};
			var Jh = (e = Qh, t) => {
				switch (t.type) {
					case f.a: {
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
			const zh = {};
			var Xh = (e = zh, t) => {
				switch (t.type) {
					case f.a: {
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
			const Yh = {};
			var Zh = (e = Yh, t) => {
					switch (t.type) {
						case f.p: {
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
				e_ = Object(c.c)({
					assets: $h,
					communityRaw: Jh,
					distributions: Xh,
					releaseNotes: Zh
				}),
				t_ = r("./node_modules/lodash/isEqualWith.js"),
				r_ = r.n(t_),
				s_ = r("./src/lib/forceHttps/index.ts");
			const a_ = {},
				n_ = (e, t) => {
					return !r_()(e, t, (e, t, r) => {
						if ("subscribers" === r) return !0
					})
				},
				c_ = (e, t) => {
					if (!t) return e;
					const r = Object.keys(t);
					if (!r.length) return e;
					const s = {};
					for (let a = 0; a < r.length; a++) {
						const n = r[a],
							c = e[n],
							o = t[n];
						c && !n_(c, o) || (s[n] = o)
					}
					return Object.keys(s).length ? {
						...e,
						...s
					} : e
				};
			var o_ = (e = a_, t) => {
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
								return n.icon.url ? c.icon.url = Object(s_.a)(n.icon.url) : a && a.icon.url ? c.icon = a.icon : c.icon.url = "", a && a.allowChatPostCreation && (c.allowChatPostCreation = !0), Object(G.set)(r, s, c)
							}, e) : e
						})(e, t.payload.subreddits || {});
					case Uf.b:
					case PE.d:
					case CE.f:
					case Ae.f:
					case Nc.g:
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
					case Ae.b:
					case Pe.b:
					case $.b:
					case $.e:
					case J.c:
					case J.i:
					case J.e:
					case J.g:
					case Le.b:
					case Le.e:
					case Q.MORE_POSTS_LOADED:
					case Q.PROFILE_POSTS_LOADED:
					case Yi.e:
					case z.SEARCH_RESULTS_RECEIVED:
					case X.SUBREDDIT_LOADED:
					case Ne.PAGE_LOADED:
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
						return c_(e, t.payload.subreddits || {});
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
						return c_(e, s)
					}
					case Me.g: {
						const {
							typeaheadSuggestions: r
						} = t.payload;
						return c_(e, r.subreddits || {})
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
					case y.g: {
						const r = t.payload;
						return c_(e, r)
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
					case ih.f: {
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
					case gE.b: {
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
			var d_ = (e = null, t) => {
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
			var i_ = (e = !1, t) => {
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
			var u_ = (e = !1, t) => {
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
				l_ = Object(c.c)({
					errors: d_,
					fetched: i_,
					pending: u_
				});
			var p_ = (e = null, t) => {
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
				b_ = Object(c.c)({
					api: l_,
					order: p_
				});
			const y_ = {};
			var f_ = (e = y_, t) => {
				switch (t.type) {
					case ih.a: {
						const r = t.payload;
						return Object(G.merge)(e, r)
					}
					case ih.b: {
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
			const m_ = {};
			var E_ = (e = m_, t) => {
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
			const h_ = {};
			var __ = (e = h_, t) => {
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
			const O_ = {};
			var I_ = (e = O_, t) => {
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
			const g_ = {},
				S_ = (e, t, r) => {
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
				D_ = (e, t, r) => {
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
			var v_ = (e = g_, t) => {
				switch (t.type) {
					case ce.nb: {
						const {
							powerups: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: vn(r)
						}
					}
					case Sn.b: {
						const {
							subredditId: r,
							emoji: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: S_(a, r, s)
						}
					}
					case Sn.c: {
						const {
							subredditId: r,
							emojiId: s
						} = t.payload, a = e[r];
						return {
							...e,
							[r]: D_(a, r, s)
						}
					}
					default:
						return e
				}
			};
			const T_ = {},
				w_ = (e, t) => t.supporterInfo && e.supporterInfo ? 1e15 * t.score + new Date(t.lastSupportedAt).valueOf() - 1e15 * e.score - new Date(e.lastSupportedAt).valueOf() : t.supporterInfo ? 1 : e.supporterInfo ? -1 : 0;
			var A_ = (e = T_, t) => {
					switch (t.type) {
						case ce.nb: {
							const {
								topSupporters: r,
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: r.sort(w_)
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
								[r]: o.sort(w_)
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
									[r]: [t, ...e[r]].sort(w_)
								}
							}
							return e
						}
						default:
							return e
					}
				},
				j_ = r("./src/lib/makeProductOfferKey/index.ts");
			const R_ = {};
			var C_ = (e = R_, t) => {
				switch (t.type) {
					case ce.bb:
					case ce.nb: {
						const {
							subredditId: r,
							productOffers: s
						} = t.payload;
						if (!(null == s ? void 0 : s.length)) return e;
						const a = s.reduce((e, t) => {
							const s = Object(j_.a)(t.type, r);
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
			const P_ = {};
			var N_ = (e = P_, t) => {
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
				L_ = r("./src/reddit/models/NewCommunityProgress/index.ts");
			const k_ = {};
			var x_ = (e = k_, t) => {
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
						}) => L_.d.includes(e))))(s.cards);
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
			const U_ = {};
			var M_ = (e = U_, t) => {
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
					case Ae.f:
					case Ae.b: {
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
						return U_;
					default:
						return e
				}
			};
			const G_ = {};
			var F_ = (e = G_, t) => {
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
			const B_ = {};
			var H_ = (e = B_, t) => {
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
			const q_ = {};
			var V_ = (e = q_, t) => {
				switch (t.type) {
					case oh.b: {
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
					case oh.e: {
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
					case oh.f: {
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
					case oh.g:
					case oh.d: {
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
			const K_ = {};
			var W_ = (e = K_, t) => {
				switch (t.type) {
					case ih.c: {
						const e = t.payload;
						return {
							[e.subredditId]: e
						}
					}
					case ih.f: {
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
			const $_ = {};
			var Q_ = (e = $_, t) => {
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
			const J_ = {};
			var z_ = (e = J_, t) => {
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
			const X_ = {};
			var Y_ = (e = X_, t) => {
				switch (t.type) {
					case Nc.g: {
						const {
							subredditTopContent: r
						} = t.payload;
						return {
							...e,
							...r.subredditTopContent
						}
					}
					case Kl.b: {
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
			const Z_ = [];
			var eO = (e = Z_, t) => {
				switch (t.type) {
					case Ae.b:
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
			const tO = {};
			var rO = (e = tO, t) => {
					switch (t.type) {
						case PE.d:
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
				sO = r("./src/reddit/actions/subredditWelcomeMessage.ts");
			const aO = {};
			var nO = (e = aO, t) => {
					switch (t.type) {
						case sO.a: {
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
				cO = Object(c.c)({
					about: LE,
					api: Th,
					appliedFilters: Ch,
					byCategory: Nh,
					communityInfo: kh,
					crosspostable: Hh,
					duplicates: Kh,
					gov: e_,
					models: o_,
					moderated: b_,
					notificationSettings: f_,
					onboarding: E_,
					powerupRecentSupporters: __,
					powerups: I_,
					powerupsEmojis: v_,
					powerupTopSupporters: A_,
					productOffers: C_,
					products: N_,
					progressModule: x_,
					questions: M_,
					rankings: F_,
					rankingsPageInfo: H_,
					rules: V_,
					settings: W_,
					similar: Q_,
					survey: z_,
					topContent: Y_,
					trending: eO,
					unavailableModels: rO,
					welcomeMessage: nO
				});
			const oO = {};
			var dO = Object(Sb.a)((e = oO, t) => {
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
						case hd.n: {
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
				}, oO),
				iO = Object(c.c)({
					data: dO
				}),
				uO = r("./node_modules/lodash/values.js"),
				lO = r.n(uO);
			const pO = [];
			var bO = (e = pO, t) => {
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
						return lO()(e).filter(e => e.isFavorited).sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1).map(e => e.url)
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
			var yO = (e = null, t) => {
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
			var fO = (e = !1, t) => {
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
			var mO = (e = !1, t) => {
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
				EO = Object(c.c)({
					errors: yO,
					fetched: fO,
					pending: mO
				});
			const hO = [];
			var _O = (e = hO, t) => {
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
						if (c !== _y.a.PROFILE) return e;
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
						} = t.payload, a = r.filter(t => t.type === _y.a.PROFILE && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const OO = [];
			var IO = (e = OO, t) => {
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
						if (c !== _y.a.SUBREDDIT) return e;
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
						} = t.payload, a = r.filter(t => t.type === _y.a.SUBREDDIT && e.indexOf(t.id) > -1);
						return !a.length || s ? e : a.reduce((e, t) => {
							const r = e.indexOf(t.id);
							return e.splice(r, 1), e
						}, [...e])
					}
					default:
						return e
				}
			};
			const gO = [],
				SO = e => (t, r) => e[t].displayText.toLowerCase() > e[r].displayText.toLowerCase() ? 1 : -1;
			var DO = (e = gO, t) => {
					switch (t.type) {
						case Re.u: {
							const {
								multireddits: r
							} = t.payload, s = lO()(r).map(({
								url: e
							}) => e.toLowerCase()).sort(SO(r));
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
								d = zi()(e, c).sort(SO(o));
							return Qi()(e, d) ? e : d
						}
						case tu.e: {
							const {
								follow: r,
								multiredditPath: s,
								multiredditsModelsState: a
							} = t.payload;
							return r ? [...e, s].sort(SO(a)) : e.filter(e => e !== s)
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
							return [...e, r.url].sort(SO(a))
						}
						default:
							return e
					}
				},
				vO = r("./node_modules/lodash/difference.js"),
				TO = r.n(vO);
			const wO = [];
			var AO = (e = wO, t) => {
				switch (t.type) {
					case Yi.n: {
						const {
							profileOrder: r
						} = t.payload;
						return xp()([...e, ...r])
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
						} = t.payload, n = r.filter(e => e.type === _y.a.PROFILE);
						if (!n.length) return e;
						const c = n.map(e => e.id);
						return a ? xp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : TO()(e, c)
					}
					default:
						return e
				}
			};
			const jO = [];
			var RO = (e = jO, t) => {
					switch (t.type) {
						case Yi.n: {
							const {
								subredditOrder: r
							} = t.payload;
							return xp()([...e, ...r])
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
							} = t.payload, n = r.filter(e => e.type === _y.a.SUBREDDIT && !!e.id);
							if (!n.length) return e;
							const c = n.map(e => e.id);
							return a ? xp()([...e, ...c]).sort((e, t) => s[e].displayText.toLowerCase() > s[t].displayText.toLowerCase() ? 1 : -1) : TO()(e, c)
						}
						default:
							return e
					}
				},
				CO = Object(c.c)({
					api: EO,
					favoriteMultiOrder: bO,
					favoriteProfileOrder: _O,
					favoriteSubredditOrder: IO,
					multiredditOrder: DO,
					profileOrder: AO,
					subredditOrder: RO
				}),
				PO = r("./src/reddit/actions/survey/constants.ts");
			var NO = (e = null, t) => {
				switch (t.type) {
					case PO.c:
						return t.payload || null;
					default:
						return e
				}
			};
			var LO = (e = 1, t) => {
				switch (t.type) {
					case PO.d:
						return t.payload || 1;
					default:
						return e
				}
			};
			var kO = (e = !1, t) => {
				switch (t.type) {
					case PO.b:
						return !e;
					default:
						return e
				}
			};
			var xO = (e = !0, t) => {
					switch (t.type) {
						case PO.h:
							return !e;
						default:
							return e
					}
				},
				UO = Object(c.c)({
					activeDemoTrigger: NO,
					demoTriggerThreshold: LO,
					isDemoEnabled: kO,
					isSampleFactorEnabled: xO
				}),
				MO = r("./src/reddit/actions/tabBadging.ts");
			var GO = (e = !1, t) => {
					switch (t.type) {
						case MO.a:
							const {
								hasUnreadMessages: r
							} = t.payload;
							return r;
						default:
							return e
					}
				},
				FO = r("./src/reddit/actions/tags/constants.ts");
			const BO = {
				pending: !1,
				error: !1
			};
			var HO = (e = BO, t) => {
				switch (t.type) {
					case FO.l:
						return {
							...e, pending: !0
						};
					case FO.m:
						return {
							error: !1, pending: !1
						};
					case FO.k:
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
			var VO = (e = qO, t) => {
				switch (t.type) {
					case FO.o:
						return {
							...e, pending: !0
						};
					case FO.p:
						return {
							error: !1, pending: !1
						};
					case FO.n:
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
					case FO.t:
						return {
							...e, pending: !0
						};
					case FO.s:
					case FO.r:
					case FO.e:
					case FO.j:
						return {
							error: !1, pending: !1
						};
					case FO.q:
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
					case FO.v:
						return {
							...e, pending: !0
						};
					case FO.w:
						return {
							error: !1, pending: !1
						};
					case FO.u:
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
						case FO.g:
							return {
								...e, pending: !0
							};
						case FO.h:
							return {
								error: !1, pending: !1
							};
						case FO.f:
							return {
								error: !0, pending: !1
							};
						default:
							return e
					}
				},
				XO = Object(c.c)({
					create: HO,
					deleteTag: VO,
					fetch: WO,
					update: QO,
					updatePrimaryTag: zO
				});
			const YO = {
				global: [],
				recommendedGlobal: []
			};
			var ZO = (e = YO, t) => {
					switch (t.type) {
						case FO.w:
						case FO.r:
						case FO.e:
						case FO.j: {
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
				eI = r("./node_modules/lodash/uniqWith.js"),
				tI = r.n(eI),
				rI = r("./src/reddit/models/Option/index.ts");
			const sI = {
				selectedOptions: [],
				tagInput: "",
				selectedPrimaryTagId: null
			};
			var aI = (e = sI, t) => {
					switch (t.type) {
						case FO.d: {
							const {
								option: r
							} = t.payload;
							return {
								...e,
								selectedOptions: tI()([...e.selectedOptions || [], {
									...r
								}], rI.a)
							}
						}
						case FO.c: {
							const {
								option: r
							} = t.payload, s = e.selectedOptions.findIndex(e => Object(rI.a)(e, r));
							return e.selectedOptions.splice(s, 1), {
								...e,
								selectedOptions: e.selectedOptions
							}
						}
						case FO.b: {
							const {
								input: r
							} = t.payload;
							return {
								...e,
								tagInput: r
							}
						}
						case FO.a: {
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
				nI = r("./src/reddit/helpers/tags/index.ts");
			const cI = {
				globalSubredditTags: {},
				subredditScopedTags: {},
				itemTags: {},
				geoPlaces: {},
				suggestedItemTags: {},
				sortedItemTags: {},
				subredditPrimaryTagId: {}
			};
			var oI = (e = cI, t) => {
					switch (t.type) {
						case FO.j: {
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
						case FO.w:
						case FO.s:
						case FO.r: {
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
									[o]: Object(nI.a)(n[o] || {})
								}
							}
						}
						case FO.p: {
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
						case FO.e: {
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
						case FO.h: {
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
				dI = r("./src/reddit/reducers/tags/selected/index.ts"),
				iI = Object(c.c)({
					api: XO,
					availableGlobalTagOrder: ZO,
					models: oI,
					selected: dI.b,
					creation: aI
				}),
				uI = r("./src/reddit/actions/redditEmbed.ts"),
				lI = r("./src/reddit/actions/theme.ts"),
				pI = r("./src/reddit/actions/users.ts"),
				bI = r("./src/reddit/models/Theme/index.ts");
			const yI = {
				current: bI.c,
				cached: {}
			};
			var fI = (e = yI, t) => {
					switch (t.type) {
						case lI.a: {
							const {
								nightmode: e
							} = t.payload;
							return {
								current: e ? bI.b : bI.c,
								cached: {}
							}
						}
						case Lr.a:
						case Lr.b:
						case Lr.h:
						case Lr.i:
						case Lr.f:
						case Lr.j:
						case Ce.e:
						case Ce.h:
						case W.a:
						case W.e:
						case W.b:
						case W.f:
						case W.d:
						case W.h:
						case Ae.b:
						case X.SUBREDDIT_LOADED:
						case Pe.b:
						case Pe.a:
						case Ae.f:
						case uI.b:
						case Z.i:
						case Me.e:
						case z.SEARCH_RESULTS_RECEIVED:
						case kr.i:
						case Ne.PAGE_LOADED:
						case Us.PAGE_LOADED:
						case pI.c:
							if (t.payload && t.payload.preferences && "nightmode" in t.payload.preferences) {
								const {
									nightmode: e
								} = t.payload.preferences;
								return e ? {
									current: bI.b,
									cached: {}
								} : {
									current: bI.c,
									cached: {}
								}
							}
							return e;
						case $.d:
						case $.e:
						case Le.a:
						case Le.b:
						case Le.d:
						case Le.e:
						case Q.PROFILE_POSTS_FAILED:
						case Q.PROFILE_POSTS_LOADED: {
							const {
								account: r
							} = t.payload;
							return r ? r.nightmode ? {
								current: bI.b,
								cached: {}
							} : {
								current: bI.c,
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
									current: bI.b,
									cached: {}
								} : {
									current: bI.c,
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
								current: bI.b,
								cached: {}
							} : {
								current: bI.c,
								cached: {}
							}
						}
						case O.d:
							return {
								current: bI.c, cached: {}
							};
						case O.e:
							return t.payload.nightmodeTempUpdated ? {
								current: bI.b,
								cached: {}
							} : e;
						default:
							return e
					}
				},
				mI = r("./src/reddit/actions/toaster.ts");
			const EI = [];
			var hI = (e = EI, t) => {
					switch (t.type) {
						case mI.c: {
							const r = t.payload,
								s = [];
							let a = !1;
							for (const t of e) {
								const e = t.id === r.id ? r : t;
								s.push(e), a = a || e === r
							}
							return a || s.push(r), s
						}
						case mI.b: {
							const r = t.payload;
							return e.filter(e => e.id !== r)
						}
						default:
							return e
					}
				},
				_I = r("./src/reddit/actions/tooltip.ts");
			var OI = (e = null, t) => {
					switch (t.type) {
						case _I.c: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : r
						}
						case _I.a: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? e : r
						}
						case _I.b: {
							const {
								tooltipId: r
							} = t.payload;
							return null !== e ? e : r || null
						}
						case _I.e: {
							const {
								tooltipId: r
							} = t.payload;
							return e === r ? null : e
						}
						case ce.K:
						case _I.d:
						case E.a:
						case yo.b:
						case yo.c:
						case yo.a:
							return null;
						default:
							return e
					}
				},
				II = r("./src/reddit/actions/tracing.ts");
			const gI = {
				traceId: void 0
			};
			var SI = (e = gI, t) => {
					switch (t.type) {
						case II.a:
							return t.payload ? {
								traceId: t.payload
							} : e;
						default:
							return e
					}
				},
				DI = r("./src/lib/asyncActions/index.ts"),
				vI = r("./src/reddit/actions/reCaptchaEnterprise.ts");
			const TI = Object(DI.c)(vI.c.requestedActionType, vI.c.succeededActionType, vI.c.failedActionType),
				wI = Object(DI.c)(vI.a.requestedActionType, vI.a.succeededActionType, vI.a.failedActionType),
				AI = Object(DI.c)(vI.d.requestedActionType, vI.d.succeededActionType, vI.d.failedActionType);
			var jI = Object(c.c)({
					load: TI,
					execute: wI,
					send: AI
				}),
				RI = r("./src/reddit/actions/tracking.ts");
			const CI = {};
			var PI = (e = CI, t) => {
					switch (t.type) {
						case RI.a: {
							const {
								routeKey: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case RI.b: {
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
				NI = Object(c.c)({
					reCaptchaEnterprise: jI,
					viewportDataLoaded: PI
				}),
				LI = r("./src/reddit/actions/trafficStats/constants.ts");
			var kI = (e = !1, t) => {
				switch (t.type) {
					case LI.c:
						return !0;
					case LI.b:
					case LI.a:
						return !1;
					default:
						return e
				}
			};
			var xI = (e = null, t) => {
					switch (t.type) {
						case LI.b: {
							const {
								trafficStats: e
							} = t.payload;
							return e
						}
						case LI.c:
							return null;
						default:
							return e
					}
				},
				UI = Object(c.c)({
					pending: kI,
					trafficStats: xI
				});
			var MI = (e = null, t) => {
				switch (t.type) {
					case f.s:
					case f.t:
						return null;
					case f.q: {
						const {
							error: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var GI = (e = !1, t) => {
					switch (t.type) {
						case f.s:
							return !0;
						case f.q:
						case f.t:
							return !1;
						default:
							return e
					}
				},
				FI = Object(c.c)({
					error: MI,
					pending: GI
				});
			var BI = (e = null, t) => {
				switch (t.type) {
					case f.r:
						return (t.payload ? t.payload.contentId : null) || null;
					case s.b:
					case f.t:
						return null;
					default:
						return e
				}
			};
			var HI = (e = "", t) => {
				switch (t.type) {
					case f.r:
						return (t.payload ? t.payload.recipient : "") || "";
					case f.t:
						return "";
					default:
						return e
				}
			};
			var qI = (e = null, t) => {
					switch (t.type) {
						case f.r:
							return t.payload && t.payload.publicAddress || null;
						case s.b:
						case f.t:
							return null;
						default:
							return e
					}
				},
				VI = Object(c.c)({
					api: FI,
					contentId: BI,
					initialRecipient: HI,
					publicAddress: qI
				}),
				KI = Object(c.c)({
					communityPoints: VI
				}),
				WI = r("./src/reddit/actions/search/trending.ts");
			const $I = [];
			var QI = (e = $I, t) => {
					switch (t.type) {
						case X.SUBREDDIT_LOADED:
						case WI.a: {
							const {
								items: r
							} = t.payload;
							return r || e
						}
						default:
							return e
					}
				},
				JI = Object(c.c)({
					models: QI
				});
			var zI = r("./src/reddit/routes/premium/index.ts");
			const XI = {};
			var YI = (e = XI, t) => {
					switch (t.type) {
						case Wy.a: {
							const {
								trophies: r
							} = t.payload;
							return Object.values(r).forEach(e => {
								"t6_bf" === e.awardId && (e.url = zI.b)
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				ZI = r("./src/reddit/actions/upload.ts"),
				eg = r("./src/reddit/models/Upload/index.ts");
			const tg = {};
			var rg = (e = tg, t) => {
					switch (t.type) {
						case ZI.d: {
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
									status: eg.a.PENDING
								}
							}
						}
						case ZI.h: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: eg.a.UPLOADING
								}
							}
						}
						case ZI.c: {
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
						case ZI.e: {
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
						case ZI.g: {
							const {
								key: r,
								url: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									status: eg.a.SUCCESS,
									url: s
								}
							}
						}
						case ZI.b: {
							const {
								key: r,
								error: s
							} = t.payload, a = e[r];
							return {
								...e,
								[r]: {
									...a,
									status: eg.a.FAILED,
									error: s
								}
							}
						}
						case ZI.a: {
							const {
								key: r
							} = t.payload, s = e[r];
							return {
								...e,
								[r]: {
									...s,
									status: eg.a.CANCELED
								}
							}
						}
						case ZI.f: {
							const {
								key: r
							} = t.payload, s = e[r];
							return s.metadata.localUrl && window.URL.revokeObjectURL(s.metadata.localUrl), xs()(e, r)
						}
						default:
							return e
					}
				},
				sg = r("./src/reddit/actions/upvotePrompt.ts");
			var ag = (e = 0, t) => {
				switch (t.type) {
					case sg.a:
						return ++e;
					default:
						return e
				}
			};
			const ng = {};
			var cg = (e = ng, t) => {
					switch (t.type) {
						case h.d:
						case f.a:
						case y.f:
						case f.t: {
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
						case f.w: {
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
				og = r("./src/reddit/actions/accountGender/constants.ts"),
				dg = r("./src/reddit/actions/inbox.ts"),
				ig = r("./src/reddit/actions/pages/appeal/constants.ts"),
				ug = r("./src/reddit/actions/pages/userDataRequest/index.ts"),
				lg = r("./src/reddit/actions/sso/constants.ts");
			const pg = (e, t) => {
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
			var bg = Object(Sb.a)((e = null, t) => {
				switch (t.type) {
					case ig.a:
					case ig.b:
					case qf.b:
					case qf.c:
					case Lr.a:
					case Lr.b:
					case Lr.f:
					case Lr.h:
					case Lr.i:
					case Lr.j:
					case Ce.e:
					case Ce.h:
					case Ce.g:
					case Re.q:
					case Re.r:
					case W.a:
					case W.e:
					case W.b:
					case W.f:
					case Ae.a:
					case Ae.b:
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
					case Le.e:
					case Le.d:
					case Le.b:
					case Le.a:
					case Q.PROFILE_POSTS_LOADED:
					case Q.PROFILE_POSTS_FAILED:
					case X.SUBREDDIT_LOADED:
					case z.SEARCH_FAILED:
					case z.SEARCH_RESULTS_RECEIVED:
					case Ne.PAGE_LOADED:
					case Us.PAGE_LOADED:
					case Me.c:
					case Me.e:
					case uI.a:
					case uI.b:
					case kr.i:
					case ug.b:
					case pI.c:
					case rd.TOPIC_DATA_LOADED:
						return pg(e, t.payload.account);
					case pI.n:
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
						return r ? pg(e, r.account) : e
					}
					case pI.a:
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
					case je.w: {
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
					case dg.a: {
						const {
							inboxCount: r
						} = t.payload;
						return e ? {
							...e,
							inboxCount: r
						} : e
					}
					case lg.a: {
						const {
							linkedIdentity: r
						} = t.payload, s = e && e.linkedIdentities || [];
						return e ? {
							...e,
							linkedIdentities: [...s, r]
						} : e
					}
					case lg.b: {
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
					case og.a:
					case og.b: {
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
			var yg = (e = null, t) => {
				switch (t.type) {
					case pI.m:
					case pI.n:
						return null;
					case pI.l:
						return t.payload;
					default:
						return e
				}
			};
			var fg = (e = !1, t) => {
					switch (t.type) {
						case pI.m:
							return !0;
						case pI.n:
						case pI.l:
							return !1;
						default:
							return e
					}
				},
				mg = Object(c.c)({
					error: yg,
					pending: fg
				}),
				Eg = Object(c.c)({
					api: mg
				});
			var hg = (e = !1, t) => {
				switch (t.type) {
					case pI.j:
						return !0;
					default:
						return e
				}
			};
			var _g = (e = !1, t) => {
					switch (t.type) {
						case pI.i:
							return !0;
						case pI.j:
						case pI.h:
							return !1;
						default:
							return e
					}
				},
				Og = Object(c.c)({
					pending: _g,
					emailSent: hg
				}),
				Ig = Object(c.c)({
					api: Og
				}),
				gg = Object(c.c)({
					changeEmail: Eg,
					sendResetEmail: Ig
				}),
				Sg = r("./src/reddit/models/WhitelistAndBlocked.ts");
			const Dg = {};
			var vg = (e = Dg, t) => {
				switch (t.type) {
					case gt.f:
						return {
							...e, new: Sg.a.pending
						};
					case gt.d:
						return {
							...e, new: Sg.a.error
						};
					case gt.e:
						return {
							...e, new: Sg.a.waitingForRequest
						};
					case gt.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Sg.a.pending
						}
					}
					case gt.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Sg.a.error
						}
					}
					case gt.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Sg.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const Tg = [];
			var wg = (e = Tg, t) => {
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
				Ag = Object(c.c)({
					api: vg,
					data: wg
				}),
				jg = r("./src/reddit/actions/chat/constants.ts"),
				Rg = r("./src/reddit/actions/chat/userSettings.ts");
			const Cg = jg.a.anybody;
			var Pg = (e = Cg, t) => {
					switch (t.type) {
						case Rg.a:
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
				Ng = Object(c.c)({
					invitePolicy: Pg
				});
			const Lg = (e, t) => void 0 === t || e && t === e.count ? e : {
				...e,
				count: t
			};
			var kg = (e = null, t) => {
				switch (t.type) {
					case Ne.PAGE_LOADED: {
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
						return Lg(e, r)
					}
					case Wr.e: {
						const {
							postDraftIds: r
						} = t.payload;
						return Lg(e, r.length)
					}
					case Wr.c:
					case Wr.l: {
						const {
							draftsCount: r
						} = t.payload;
						return Lg(e, r)
					}
					default:
						return e
				}
			};
			const xg = {};
			var Ug = (e = xg, t) => {
					switch (t.type) {
						case Wn.a: {
							const e = t.payload.experimentVariants;
							return Du(e)
						}
						default:
							return e
					}
				},
				Mg = r("./src/reddit/actions/global/constants.ts");
			const Gg = {};
			var Fg = (e = Gg, t) => {
					switch (t.type) {
						case Mg.a: {
							const r = t.payload;
							return null === r.local_persisted_experiments_store || void 0 === r.local_persisted_experiments_store ? e : r.local_persisted_experiments_store
						}
						default:
							return e
					}
				},
				Bg = Object(c.c)({
					byName: Ug,
					localPersisted: Fg
				}),
				Hg = r("./src/reddit/actions/googleOneTap/index.ts");
			var qg = (e = !1, t) => {
				switch (t.type) {
					case Hg.a:
						return !0;
					default:
						return e
				}
			};
			var Vg = (e = !1, t) => {
				switch (t.type) {
					case kr.e:
						return !0;
					case kr.d:
						return !1;
					default:
						return e
				}
			};
			var Kg = (e = "", t) => {
				switch (t.type) {
					case kr.i:
						return "string" == typeof t.payload.language ? t.payload.language : e;
					default:
						return e
				}
			};
			const Wg = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var $g = (e = Wg, t) => {
					switch (t.type) {
						case pI.b:
							return t.payload;
						default:
							return e
					}
				},
				Qg = r("./src/reddit/actions/notifications/constants.ts"),
				Jg = r("./src/reddit/actions/notificationSettingsLayout/constants.ts");
			var zg = (e = null, t) => {
				switch (t.type) {
					case Jg.a:
					case Jg.d:
					case Qg.a:
						return t.payload && t.payload.error || null;
					case Jg.c:
					case Jg.f:
					case Jg.a:
					case Qg.c:
					case Qg.b:
						return null;
					default:
						return e
				}
			};
			var Xg = (e = !1, t) => {
				switch (t.type) {
					case Qg.c:
						return !1;
					case Qg.b:
						return !0;
					default:
						return e
				}
			};
			var Yg = (e = !1, t) => {
					switch (t.type) {
						case Qg.c:
							return !0;
						case Qg.b:
						case Qg.a:
							return !1;
						default:
							return e
					}
				},
				Zg = Object(c.c)({
					error: zg,
					loaded: Xg,
					pending: Yg
				});
			var eS = (e = null, t) => {
				switch (t.type) {
					case Qg.d: {
						const {
							error: e
						} = t.payload;
						return e || null
					}
					case Qg.f:
					case Qg.e:
						return null;
					default:
						return e
				}
			};
			var tS = (e = !1, t) => {
				switch (t.type) {
					case Qg.f:
						return !1;
					case Qg.e:
						return !0;
					default:
						return e
				}
			};
			var rS = (e = !1, t) => {
					switch (t.type) {
						case Qg.f:
							return !0;
						case Qg.e:
						case Qg.d:
							return !1;
						default:
							return e
					}
				},
				sS = Object(c.c)({
					error: eS,
					loaded: tS,
					pending: rS
				}),
				aS = Object(c.c)({
					getPreferences: Zg,
					setPreferences: sS
				});
			const nS = {
				byId: {},
				allIds: []
			};
			var cS = (e = nS, t) => {
				switch (t.type) {
					case Jg.b: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case Jg.g: {
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
			const oS = {
				byId: {},
				allIds: []
			};
			var dS = (e = oS, t) => {
					switch (t.type) {
						case Jg.b: {
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
				iS = Object(c.c)({
					sections: dS,
					rows: cS
				}),
				uS = r("./src/lib/notifications/constants.ts");
			var lS = (e = !1, t) => {
				switch (t.type) {
					case uS.j:
						return !0;
					case uS.b:
					case uS.d:
					case uS.e:
						return !1;
					default:
						return e
				}
			};
			const pS = {
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
			var bS = (e = pS, t) => {
				switch (t.type) {
					case Qg.b:
					case Qg.f:
					case Qg.d: {
						const {
							preferences: r
						} = t.payload;
						return sn()(r) ? e : r
					}
					default:
						return e
				}
			};
			const yS = {
				byId: {},
				allIds: []
			};
			var fS = (e = yS, t) => {
				switch (t.type) {
					case Jg.e: {
						const {
							rows: r
						} = t.payload;
						return {
							...e,
							...r
						}
					}
					case Jg.g: {
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
			const mS = {
				byId: {},
				allIds: []
			};
			var ES = (e = mS, t) => {
					switch (t.type) {
						case Jg.e: {
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
				hS = Object(c.c)({
					sections: ES,
					rows: fS
				}),
				_S = Object(c.c)({
					api: aS,
					emailSettingsLayout: iS,
					isNotificationPromptVisible: lS,
					preferences: bS,
					pushSettingsLayout: hS
				});
			const OS = {};
			var IS = (e = OS, t) => {
				switch (t.type) {
					case y.i:
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
			const gS = {},
				SS = (e, t) => `${e}_${t||new Date}`;
			var DS = (e = gS, t) => {
				switch (t.type) {
					case ce.yb: {
						const r = t.payload.powerups;
						if (r) {
							const {
								allocation: t
							} = r, s = (t || []).filter(e => !!e.subredditInfo).reduce((e, t) => ({
								...e,
								[SS(t.subredditInfo.id, t.allocatedAt)]: t
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
							[SS(t.subredditInfo.id, t.allocatedAt)]: t
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
							const t = SS(r, a),
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
						} = t.payload, a = SS(r, s), n = e[a];
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
			var vS = (e = null, t) => {
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
			var TS, wS = (e = !1, t) => {
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
				AS = Object(c.c)({
					allocationByKey: DS,
					data: vS,
					fetched: wS
				}),
				jS = r("./src/reddit/reducers/user/prefs/index.ts");
			! function(e) {
				e.UNFETCHED = "default", e.PENDING = "pending", e.LOADED = "loaded", e.FAILED = "failed"
			}(TS || (TS = {}));
			const RS = {
				status: TS.UNFETCHED,
				subscriptions: []
			};
			var CS = (e = RS, t) => {
				switch (t.type) {
					case ce.Cb:
						return {
							...e, status: TS.PENDING
						};
					case ce.Bb: {
						const {
							subscriptions: r
						} = t.payload;
						return r ? {
							...e,
							subscriptions: r,
							status: TS.LOADED
						} : e
					}
					case ce.Ab:
						return {
							...e, status: TS.FAILED
						};
					default:
						return e
				}
			};
			var PS = (e = "", t) => {
				switch (t.type) {
					case pI.d:
						return t.payload;
					default:
						return e
				}
			};
			var NS = (e = null, t) => {
				switch (t.type) {
					case Mf.a:
					case Mf.b:
					case Mf.c:
					case Mf.e:
						return t.payload;
					case Mf.d:
						return null;
					default:
						return e
				}
			};
			var LS = (e = !1, t) => {
				switch (t.type) {
					case Mf.f:
						return !0;
					default:
						return e
				}
			};
			var kS = (e = "", t) => {
				switch (t.type) {
					case pI.k:
						return t.payload;
					default:
						return e
				}
			};
			var xS = (e = null, t) => {
				switch (t.type) {
					case Wn.a: {
						const e = t.payload;
						return e.identity && e.identity.isEmployee
					}
					default:
						return e
				}
			};
			var US = (e = null, t) => {
					switch (t.type) {
						case Wn.a:
							return t.payload.isLoggedIn;
						default:
							return e
					}
				},
				MS = Object(c.c)({
					isEmployee: xS,
					isLoggedIn: US
				});
			var GS = (e = null, t) => {
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
				FS = r("./src/reddit/actions/userWhitelist.ts");
			const BS = {};
			var HS = (e = BS, t) => {
				switch (t.type) {
					case FS.e:
						return {
							...e, new: Sg.a.pending
						};
					case FS.d:
						return {
							...e, new: Sg.a.error
						};
					case FS.f:
						return {
							...e, new: Sg.a.waitingForRequest
						};
					case FS.b: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Sg.a.pending
						}
					}
					case FS.a: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Sg.a.error
						}
					}
					case FS.c: {
						const r = t.payload.name;
						return {
							...e,
							[r]: Sg.a.waitingForRequest
						}
					}
					default:
						return e
				}
			};
			const qS = [];
			var VS = (e = qS, t) => {
					switch (t.type) {
						case FS.f:
							return [t.payload, ...e];
						case FS.c: {
							const r = t.payload.name;
							return e.filter(e => e.name !== r)
						}
						case kr.i:
							return t.payload.whitelistedUsers;
						default:
							return e
					}
				},
				KS = Object(c.c)({
					api: HS,
					data: VS
				}),
				WS = Object(c.c)({
					account: bg,
					accountSettings: gg,
					blocked: Ag,
					chatSettings: Ng,
					drafts: kg,
					experiments: Bg,
					googleOneTapEnabled: qg,
					isCustomizeFlyoutShowing: Vg,
					topContentDismissalPrefsSet: GS,
					language: Kg,
					loid: $g,
					notificationPrefs: _S,
					ownedBadges: IS,
					powerups: AS,
					prefs: jS.c,
					productOfferSubscriptions: CS,
					reddaid: PS,
					session: NS,
					sessionRefreshFailed: LS,
					sessionTracker: kS,
					temporaryGQL: MS,
					wallets: cg,
					whitelist: KS
				});
			var $S = (e = null, t) => {
				switch (t.type) {
					case ug.a:
						return t.payload || null;
					case ug.b:
					case ug.c:
						return null;
					default:
						return e
				}
			};
			var QS = (e = !1, t) => {
				switch (t.type) {
					case ug.c:
						return !0;
					case ug.b:
					case ug.a:
						return !1;
					default:
						return e
				}
			};
			var JS = (e = !1, t) => {
				switch (t.type) {
					case ug.b:
						return !0;
					case ug.a:
					case ug.c:
						return !1;
					default:
						return e
				}
			};
			var zS = (e = !1, t) => {
					switch (t.type) {
						case ug.b:
							return t.payload.userDataExportEligibility;
						case ug.a:
						case ug.c:
							return !1;
						default:
							return e
					}
				},
				XS = Object(c.c)({
					error: $S,
					pending: QS,
					success: JS,
					userDataExportEligibility: zS
				}),
				YS = Object(c.c)({
					userDataRequestPageApi: XS
				});
			const ZS = {};
			var eD = (e = ZS, t) => {
				switch (t.type) {
					case pI.g:
					case pI.f: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r.toLowerCase()]: null
						}
					}
					case pI.e: {
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
			var tD = (e = !1, t) => {
					switch (t.type) {
						case pI.g:
							return !0;
						case pI.f:
						case pI.e:
							return !1;
						default:
							return e
					}
				},
				rD = Object(c.c)({
					error: eD,
					pending: tD
				});
			const sD = {};
			var aD = (e = sD, t) => {
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
			const nD = {},
				cD = (e, t) => {
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
			var oD = (e = nD, t) => {
					switch (t.type) {
						case pI.f: {
							const {
								data: r
							} = t.payload;
							return cD(e, r)
						}
						case Yi.k: {
							const {
								user: r
							} = t.payload;
							return cD(e, {
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
							return c ? cD(e, {
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
							return cD(e, {
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
							return c ? cD(e, {
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
				dD = r("./src/reddit/actions/usernameAvailable.ts");
			const iD = {};
			var uD = (e = iD, t) => {
				switch (t.type) {
					case dD.a: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: dD.b.Available
						}
					}
					case dD.c: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: dD.b.Error
						}
					}
					case dD.d: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: dD.b.Pending
						}
					}
					case dD.e: {
						const {
							username: r
						} = t.payload;
						return {
							...e,
							[r]: dD.b.Unavailable
						}
					}
					default:
						return e
				}
			};
			const lD = {};
			var pD = (e = lD, t) => {
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
			var bD = (e = !1, t) => {
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
				yD = Object(c.c)({
					allocationByKey: pD,
					fetched: bD
				}),
				fD = r("./src/reddit/actions/presence.ts");
			const mD = {};
			var ED = (e = mD, t) => {
				switch (t.type) {
					case fD.a:
						return {
							...e, ...t.payload.presentUsers
						};
					default:
						return e
				}
			};
			var hD = (e = null, t) => {
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
			var _D = (e = !1, t) => {
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
				OD = Object(c.c)({
					error: hD,
					pending: _D
				});
			var ID = (e = null, t) => {
				switch (t.type) {
					case ce.wb:
						return t.payload.postId;
					default:
						return e
				}
			};
			const gD = {};
			var SD = (e = gD, t) => {
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
			const DD = {};
			var vD = (e = DD, t) => {
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
				TD = Object(c.c)({
					api: OD,
					currentPostId: ID,
					currentRank: SD,
					list: vD
				}),
				wD = Object(c.c)({
					api: rD,
					appliedBadges: aD,
					models: oD,
					nameAvailable: uD,
					topAwarders: TD,
					powerups: yD,
					presence: ED
				});
			const AD = {};
			var jD = (e = AD, t) => {
					switch (t.type) {
						case W.b:
						case W.f:
						case X.SUBREDDIT_LOADED:
						case Z.i:
						case z.SEARCH_RESULTS_RECEIVED:
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
				RD = r("./src/reddit/actions/widgets/constants.ts");
			const CD = {};
			var PD = (e = CD, t) => {
					switch (t.type) {
						case W.b:
						case W.f:
						case z.SEARCH_RESULTS_RECEIVED:
						case Z.i:
						case X.SUBREDDIT_LOADED:
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
						case RD.g: {
							const r = t.payload;
							return "menu" !== r.widget.kind ? e : {
								...e,
								[r.subredditId]: r.widgetId
							}
						}
						case RD.h: {
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
				ND = r("./src/reddit/models/Widgets/index.ts");
			const LD = {};
			var kD = (e = LD, t) => {
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
					case RD.b: {
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
								styles: Object(ND.m)()
							}
						}), t
					}
					case RD.e: {
						const r = t.payload;
						return {
							...e,
							...r.widgets.items
						}
					}
					case RD.i:
					case RD.g: {
						const r = t.payload;
						return {
							...e,
							[r.widget.id]: r.widget
						}
					}
					case RD.h: {
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
					case ih.f: {
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
			const xD = {};
			var UD = (e = xD, t) => {
				switch (t.type) {
					case X.SUBREDDIT_LOADED:
					case W.f:
					case Z.i:
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
			const MD = {};
			var GD = (e = MD, t) => {
				switch (t.type) {
					case X.SUBREDDIT_LOADED:
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
					case RD.e:
					case RD.b: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgets.layout.sidebar.order
						}
					}
					case RD.f: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.widgetIds
						}
					}
					case RD.g: {
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
					case RD.h: {
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
			const FD = {
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
				blockUser: At,
				brandSafety: Rt,
				chat: ur,
				claimGold: hr,
				commentsListTruncated: Or,
				communityFlairs: Sr,
				contentControls: Nr,
				contentGate: Ur,
				continueThreads: Fr,
				creations: $a,
				dashboard: za,
				discoveryUnits: pn,
				dismissedTruncationList: fn,
				economics: Un,
				emojis: Kn,
				experimentOverrides: zn,
				externalAccount: vc,
				featureFlags: Pc,
				focusedVerticals: Kc,
				fontFiles: $c,
				gild: co,
				header: mo,
				htmlResponseStreaming: Eo,
				imageUploads: Oo,
				interceptedAction: go,
				isChangeUsernameTooltipShowing: Do,
				isEmailVerificationTooltipShowing: To,
				isModeratorWithPostPerms: Ao,
				jsApi: Co,
				leaderboard: Fo,
				listings: jd,
				live: Ld,
				mediaGalleries: Fd,
				mediaPlayback: qd,
				meta: Wd,
				moderatingSubreddits: Jd,
				moderationPromptId: zd,
				modListingPage: si,
				modModeEnabled: ni,
				moreComments: yi,
				multireddits: ou,
				notificationBannerId: iu,
				notificationsInbox: _u,
				nps: gu,
				page: Au,
				platform: Cu,
				postCollection: cl,
				polls: Qu,
				postFlair: pl,
				posts: gb,
				postStickiedComments: Tb,
				givePremium: po,
				products: Bb,
				profileCommentsPage: ry,
				profilePrivatePage: hy,
				profileModSettingsPage: cy,
				profilePostsPage: dy,
				profiles: Xy,
				promos: rf,
				publicAccessNetwork: xf,
				recentSubreddits: Ff,
				recommendations: Hf,
				reportPage: Yf,
				reportRules: tm,
				requestHost: rm,
				runTimeEnvVars: am,
				search: hm,
				searchDiscoveryUnits: Tm,
				seo: Lm,
				shortcuts: Vm,
				sidebarPromotedPosts: $m,
				streaming: tE,
				structuredStyles: OE,
				stylesheets: IE,
				subredditAutocomplete: RE,
				subreddits: cO,
				subredditStickyPosts: iO,
				subscriptions: CO,
				survey: UO,
				tabBadged: GO,
				tags: iI,
				themes: fI,
				toaster: hI,
				tooltipId: OI,
				tracing: SI,
				tracking: NI,
				trafficStats: UI,
				transfers: KI,
				trending: JI,
				trophies: YI,
				uploads: rg,
				user: WS,
				userDataRequestPage: YS,
				upvotePromptCountPerSess: ag,
				users: wD,
				widgets: Object(c.c)({
					idCardIds: jD,
					menuIds: PD,
					models: kD,
					moderatorIds: UD,
					sidebar: GD
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
				return y
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
				y = (e, t) => Object(d.x)(e, {
					subredditName: t
				}).emojisEnabled,
				f = {
					emojis: {},
					snoomojis: {}
				},
				m = (e, {
					subredditId: t
				}) => u(e)[t] || f,
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
				return y
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
				y = Object(s.a)(o.K, i, (e, t) => !e && !!t && !Object(a.Nd)(t))
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
						experimentName: s.Jc
					}) === s.Tc.Enabled
				},
				c = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: a.a,
						experimentName: s.Ic
					}) === s.Sc.Enabled
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
						experimentName: s.Gd
					});
					return r === s.Hd.Variant1 || r === s.Hd.Variant2
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
				return y
			})), r.d(t, "l", (function() {
				return f
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
				return D
			})), r.d(t, "o", (function() {
				return v
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
				y = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.standalonePosts.postOrder[t] || b).filter(r => !!(e.posts.scheduledPosts.standalonePosts.models[t] || p)[r]).map(r => e.posts.scheduledPosts.standalonePosts.models[t][r]),
				f = (e, {
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
				D = e => e.posts.scheduledPosts[n.f.recurringPosts].editModal.subredditId,
				v = e => e.posts.scheduledPosts.api.pendingUpdate,
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit.e328ceb895556d2359b1.js.map