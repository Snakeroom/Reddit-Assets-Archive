// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.1b592675a40e0b6f31a5.js
// Retrieved at 10/19/2021, 1:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, o, r) {
			"use strict";
			Object.defineProperty(o, "__esModule", {
				value: !0
			}), o.isPseudoLocale = o.isISOLocaleSupported = o.toISOLocale = o.isoLocaleToR2Language = void 0;
			const t = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				n = new Set([{
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
				s = {
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
				a = Object.keys(s).reduce((e, o) => (n.has(o) && (e[o] = s[o]), e), {}),
				l = Object.keys(a).reduce((e, o) => {
					const r = a[o];
					return r && r.forEach(r => {
						e[r] = o
					}), e
				}, {});
			o.isoLocaleToR2Language = e => l[e], o.toISOLocale = e => {
				if (!e) return;
				const o = e.match(/^([a-zA-Z]{2,4})(?:[-_]([a-zA-Z]{2,4}))?$/);
				if (!o) return;
				const r = o[1];
				if (!r) return;
				let t = r.toLowerCase();
				const n = o[2];
				return n && (t = `${t}-${n.toUpperCase()}`), t
			};
			const d = new Set(Object.keys(l));
			o.isISOLocaleSupported = e => !!e && d.has(e);
			const i = new Set([t.PSEUDO_LONG_LOCALE, t.PSEUDO_SHORT_LOCALE, t.PSEUDO_EXT_LOCALE]);
			o.isPseudoLocale = e => !!e && i.has(e)
		},
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, o, r) {
			"use strict";
			r.d(o, "a", (function() {
				return x
			}));
			var t = r("./node_modules/react/index.js"),
				n = r.n(t),
				s = r("./node_modules/react-dom/index.js"),
				a = (r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function l(e, o) {
				return Array.isArray(e) && Array.isArray(o) && e.length === o.length ? e.some((function(r, t) {
					return l(e[t], o[t])
				})) : e !== o
			}
			var d = new Map;

			function i(e) {
				void 0 === e && (e = {});
				for (var o, r = e.root || null, t = function(e) {
						var o = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							r = o[0],
							t = void 0 === r ? "0px" : r,
							n = o[1],
							s = void 0 === n ? t : n,
							l = o[2],
							d = void 0 === l ? t : l,
							i = o[3];
						return t + " " + s + " " + d + " " + (void 0 === i ? s : i)
					}(e.rootMargin), n = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = d.keys(); o = s.next().value;) {
					if (!(r !== o.root || t !== o.rootMargin || l(n, o.thresholds))) return o
				}
				return null
			}

			function c(e, o) {
				var r = d.get(e);
				if (r)
					for (var t, n = r.values(); t = n.next().value;)
						if (t.target === o.target) return t;
				return null
			}

			function u(e, o) {
				for (var r = 0; r < e.length; r++) {
					var t = c(o, e[r]);
					t && t.handleChange(e[r])
				}
			}

			function b(e) {
				return i(e) || new IntersectionObserver(u, e)
			}
			var p = r("./node_modules/invariant/browser.js"),
				h = r.n(p),
				f = {},
				v = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return f.errorReporter || function(e) {
								return h()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							f.errorReporter = e
						}
					}
				});

			function m(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function g(e, o, r) {
				return o in e ? Object.defineProperty(e, o, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[o] = r, e
			}
			var _ = ["root", "rootMargin", "threshold"],
				y = ["root", "rootMargin", "threshold", "disabled"],
				j = Object.prototype,
				O = j.hasOwnProperty,
				k = j.toString,
				N = function(e) {
					return _.reduce((function(o, r) {
						if (O.call(e, r)) {
							var t = "root" === r && "[object String]" === k.call(e[r]);
							o[r] = t ? document.querySelector(e[r]) : e[r]
						}
						return o
					}), {})
				},
				x = function(e) {
					var o, r;

					function t() {
						for (var o, r = arguments.length, t = new Array(r), n = 0; n < r; n++) t[n] = arguments[n];
						return g(m(o = e.call.apply(e, [this].concat(t)) || this), "handleChange", (function(e) {
							o.props.onChange(e, o.externalUnobserve)
						})), g(m(o), "handleNode", (function(e) {
							var r = o.props.children;
							if (null != r) {
								var t = r.ref;
								t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e))
							}
							o.targetNode = e && Object(s.findDOMNode)(e)
						})), g(m(o), "observe", (function() {
							return null != o.props.children && !o.props.disabled && (o.targetNode ? (o.observer = b(N(o.props)), o.target = o.targetNode, e = m(o), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (v.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), g(m(o), "unobserve", (function(e) {
							! function(e, o) {
								if (d.has(e.observer)) {
									var r = d.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(o) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(m(o), e)
						})), g(m(o), "externalUnobserve", (function() {
							o.unobserve(o.targetNode)
						})), o
					}
					r = e, (o = t).prototype = Object.create(r.prototype), o.prototype.constructor = o, o.__proto__ = r;
					var a = t.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var o = this;
						this.prevTargetNode = this.targetNode;
						var r = y.some((function(r) {
							return l(o.props[r], e[r])
						}));
						return r && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), r
					}, a.componentDidUpdate = function(e, o, r) {
						var t = !1;
						r || (t = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (r || t) && this.observe()
					}, a.componentDidMount = function() {
						this.observe()
					}, a.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, a.render = function() {
						var e = this.props.children;
						return null != e ? n.a.cloneElement(n.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, t
				}(n.a.Component);
			g(x, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, o, r) {
			"use strict";
			var t = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function s() {}
			s.resetWarningCache = n, e.exports = function() {
				function e(e, o, r, n, s, a) {
					if (a !== t) {
						var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw l.name = "Invariant Violation", l
					}
				}

				function o() {
					return e
				}
				e.isRequired = e;
				var r = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: o,
					element: e,
					elementType: e,
					instanceOf: o,
					node: e,
					objectOf: o,
					oneOf: o,
					oneOfType: o,
					shape: o,
					exact: o,
					checkPropTypes: s,
					resetWarningCache: n
				};
				return r.PropTypes = r, r
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, o, r) {
			e.exports = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, o, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/lodash/_baseInverter.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_baseForOwn.js");
			e.exports = function(e, o, r, n) {
				return t(e, (function(e, t, s) {
					o(n, r(e), t, s)
				})), n
			}
		},
		"./node_modules/lodash/_createInverter.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_baseInverter.js");
			e.exports = function(e, o) {
				return function(r, n) {
					return t(r, e, o(n), {})
				}
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_baseFindIndex.js"),
				n = r("./node_modules/lodash/_baseIteratee.js"),
				s = r("./node_modules/lodash/toInteger.js"),
				a = Math.max,
				l = Math.min;
			e.exports = function(e, o, r) {
				var d = null == e ? 0 : e.length;
				if (!d) return -1;
				var i = d - 1;
				return void 0 !== r && (i = s(r), i = r < 0 ? a(d + i, 0) : l(i, d - 1)), t(e, n(o, 3), i, !0)
			}
		},
		"./node_modules/lodash/invert.js": function(e, o, r) {
			var t = r("./node_modules/lodash/constant.js"),
				n = r("./node_modules/lodash/_createInverter.js"),
				s = r("./node_modules/lodash/identity.js"),
				a = Object.prototype.toString,
				l = n((function(e, o, r) {
					null != o && "function" != typeof o.toString && (o = a.call(o)), e[o] = r
				}), t(s));
			e.exports = l
		},
		"./node_modules/lodash/uniqWith.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, o) {
				return o = "function" == typeof o ? o : void 0, e && e.length ? t(e, void 0, o) : []
			}
		},
		"./node_modules/lodash/xor.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_arrayFilter.js"),
				n = r("./node_modules/lodash/_baseRest.js"),
				s = r("./node_modules/lodash/_baseXor.js"),
				a = r("./node_modules/lodash/isArrayLikeObject.js"),
				l = n((function(e) {
					return s(t(e, a))
				}));
			e.exports = l
		},
		"./node_modules/uuid/index.js": function(e, o, r) {
			var t = r("./node_modules/uuid/v1.js"),
				n = r("./node_modules/uuid/v4.js"),
				s = n;
			s.v1 = t, s.v4 = n, e.exports = s
		},
		"./node_modules/uuid/v1.js": function(e, o, r) {
			var t, n, s = r("./node_modules/uuid/lib/rng-browser.js"),
				a = r("./node_modules/uuid/lib/bytesToUuid.js"),
				l = 0,
				d = 0;
			e.exports = function(e, o, r) {
				var i = o && r || 0,
					c = o || [],
					u = (e = e || {}).node || t,
					b = void 0 !== e.clockseq ? e.clockseq : n;
				if (null == u || null == b) {
					var p = s();
					null == u && (u = t = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]), null == b && (b = n = 16383 & (p[6] << 8 | p[7]))
				}
				var h = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : d + 1,
					v = h - l + (f - d) / 1e4;
				if (v < 0 && void 0 === e.clockseq && (b = b + 1 & 16383), (v < 0 || h > l) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				l = h, d = f, n = b;
				var m = (1e4 * (268435455 & (h += 122192928e5)) + f) % 4294967296;
				c[i++] = m >>> 24 & 255, c[i++] = m >>> 16 & 255, c[i++] = m >>> 8 & 255, c[i++] = 255 & m;
				var g = h / 4294967296 * 1e4 & 268435455;
				c[i++] = g >>> 8 & 255, c[i++] = 255 & g, c[i++] = g >>> 24 & 15 | 16, c[i++] = g >>> 16 & 255, c[i++] = b >>> 8 | 128, c[i++] = 255 & b;
				for (var _ = 0; _ < 6; ++_) c[i + _] = u[_];
				return o || a(c)
			}
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, o, r) {
			"use strict";
			r.r(o), r.d(o, "BlankPost", (function() {
				return c
			}));
			var t = r("./node_modules/react/index.js"),
				n = r.n(t),
				s = r("./src/reddit/components/AdViewability/index.tsx"),
				a = r("./src/reddit/connectors/PostViewable/index.ts"),
				l = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/contexts/Post/index.tsx");
			const i = Object(a.a)(null),
				c = ({
					className: e,
					post: o
				}) => o.isSponsored ? n.a.createElement(s.a, {
					post: o,
					trackDisplay: !0
				}, n.a.createElement("div", {
					className: Object(l.a)(e, `Blank ${o.id}`)
				})) : null;
			o.default = Object(d.b)(i(c))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.1b592675a40e0b6f31a5.js.map