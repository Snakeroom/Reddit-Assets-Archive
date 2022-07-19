// https://www.redditstatic.com/desktop2x/Subreddit.e727608810e0b7d783d7.js
// Retrieved at 7/19/2022, 10:40:16 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "Frontpage~ModListing", "reddit-components-Econ-PredictionLeaderboard-Sidebar"], {
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isPseudoLocale = t.isISOLocaleSupported = t.toISOLocale = t.isoLocaleToR2Language = void 0;
			const s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = new Set([{
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
				o = {
					af: ["af"],
					ar: ["ar"],
					be: ["be-BY"],
					bg: ["bg-BG"],
					"bn-IN": ["bn-IN"],
					"bn-bd": ["bn", "bn-BD"],
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
					hi: ["hi", "hi-IN"],
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
				a = Object.keys(o).reduce((e, t) => (r.has(t) && (e[t] = o[t]), e), {}),
				i = Object.keys(a).reduce((e, t) => {
					const n = a[t];
					return n && n.forEach(n => {
						e[n] = t
					}), e
				}, {});
			t.isoLocaleToR2Language = e => i[e], t.toISOLocale = e => {
				if (!e) return;
				const t = e.match(/^([a-zA-Z]{2,4})(?:[-_]([a-zA-Z]{2,4}))?$/);
				if (!t) return;
				const n = t[1];
				if (!n) return;
				let s = n.toLowerCase();
				const r = t[2];
				return r && (s = `${s}-${r.toUpperCase()}`), s
			};
			const c = new Set(Object.keys(i));
			t.isISOLocaleSupported = e => !!e && c.has(e), t.isPseudoLocale = e => !!e && (e === s.PSEUDO_AUTO || Object.values(s.PseudoLocale).includes(e))
		},
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-dom/index.js"),
				a = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function i(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, s) {
					return i(e[s], t[s])
				})) : e !== t
			}
			var c = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, s = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							s = void 0 === n ? "0px" : n,
							r = t[1],
							o = void 0 === r ? s : r,
							i = t[2],
							c = void 0 === i ? s : i,
							d = t[3];
						return s + " " + o + " " + c + " " + (void 0 === d ? o : d)
					}(e.rootMargin), r = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], o = c.keys(); t = o.next().value;) {
					if (!(n !== t.root || s !== t.rootMargin || i(r, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = c.get(e);
				if (n)
					for (var s, r = n.values(); s = r.next().value;)
						if (s.target === t.target) return s;
				return null
			}

			function u(e, t) {
				for (var n = 0; n < e.length; n++) {
					var s = l(t, e[n]);
					s && s.handleChange(e[n])
				}
			}

			function m(e) {
				return d(e) || new IntersectionObserver(u, e)
			}
			var p = n("./node_modules/invariant/browser.js"),
				b = n.n(p),
				h = {},
				f = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return h.errorReporter || function(e) {
								return b()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							h.errorReporter = e
						}
					}
				});

			function g(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function x(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var v = ["root", "rootMargin", "threshold"],
				y = ["root", "rootMargin", "threshold", "disabled"],
				E = Object.prototype,
				_ = E.hasOwnProperty,
				O = E.toString,
				C = function(e) {
					return v.reduce((function(t, n) {
						if (_.call(e, n)) {
							var s = "root" === n && "[object String]" === O.call(e[n]);
							t[n] = s ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				j = function(e) {
					var t, n;

					function s() {
						for (var t, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
						return x(g(t = e.call.apply(e, [this].concat(s)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), x(g(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var s = n.ref;
								s && ("function" == typeof s ? s(e) : "object" == typeof s && (s.current = e))
							}
							t.targetNode = e && Object(o.findDOMNode)(e)
						})), x(g(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = m(C(t.props)), t.target = t.targetNode, e = g(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (f.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), x(g(t), "unobserve", (function(e) {
							! function(e, t) {
								if (c.has(e.observer)) {
									var n = c.get(e.observer);
									n.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), c.delete(e.observer)))
								}
							}(g(t), e)
						})), x(g(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					n = e, (t = s).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var a = s.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = y.some((function(n) {
							return i(t.props[n], e[n])
						}));
						return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n
					}, a.componentDidUpdate = function(e, t, n) {
						var s = !1;
						n || (s = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (n || s) && this.observe()
					}, a.componentDidMount = function() {
						this.observe()
					}, a.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, a.render = function() {
						var e = this.props.children;
						return null != e ? r.a.cloneElement(r.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, s
				}(r.a.Component);
			x(j, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function o() {}
			o.resetWarningCache = r, e.exports = function() {
				function e(e, t, n, r, o, a) {
					if (a !== s) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var n = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: o,
					resetWarningCache: r
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/_copyArray.js"),
				o = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return o(r(e), s(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				s = Math.random;
			e.exports = function(e, t) {
				return e + n(s() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/_shuffleSelf.js"),
				o = n("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var n = o(e);
				return r(n, s(t, 0, n.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					r = e.length,
					o = r - 1;
				for (t = void 0 === t ? r : t; ++n < t;) {
					var a = s(n, o),
						i = e[a];
					e[a] = e[n], e[n] = i
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFindIndex.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				a = Math.max,
				i = Math.min;
			e.exports = function(e, t, n) {
				var c = null == e ? 0 : e.length;
				if (!c) return -1;
				var d = c - 1;
				return void 0 !== n && (d = o(n), d = n < 0 ? a(c + d, 0) : i(d, c - 1)), s(e, r(t, 3), d, !0)
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arraySampleSize.js"),
				r = n("./node_modules/lodash/_baseSampleSize.js"),
				o = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js"),
				i = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return t = (n ? a(e, t, n) : void 0 === t) ? 1 : i(t), (o(e) ? s : r)(e, t)
			}
		},
		"./node_modules/lodash/uniqWith.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, t) {
				return t = "function" == typeof t ? t : void 0, e && e.length ? s(e, void 0, t) : []
			}
		},
		"./node_modules/lodash/xor.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayFilter.js"),
				r = n("./node_modules/lodash/_baseRest.js"),
				o = n("./node_modules/lodash/_baseXor.js"),
				a = n("./node_modules/lodash/isArrayLikeObject.js"),
				i = r((function(e) {
					return o(s(e, a))
				}));
			e.exports = i
		},
		"./node_modules/uuid/index.js": function(e, t, n) {
			var s = n("./node_modules/uuid/v1.js"),
				r = n("./node_modules/uuid/v4.js"),
				o = r;
			o.v1 = s, o.v4 = r, e.exports = o
		},
		"./node_modules/uuid/v1.js": function(e, t, n) {
			var s, r, o = n("./node_modules/uuid/lib/rng-browser.js"),
				a = n("./node_modules/uuid/lib/bytesToUuid.js"),
				i = 0,
				c = 0;
			e.exports = function(e, t, n) {
				var d = t && n || 0,
					l = t || [],
					u = (e = e || {}).node || s,
					m = void 0 !== e.clockseq ? e.clockseq : r;
				if (null == u || null == m) {
					var p = o();
					null == u && (u = s = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]), null == m && (m = r = 16383 & (p[6] << 8 | p[7]))
				}
				var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					h = void 0 !== e.nsecs ? e.nsecs : c + 1,
					f = b - i + (h - c) / 1e4;
				if (f < 0 && void 0 === e.clockseq && (m = m + 1 & 16383), (f < 0 || b > i) && void 0 === e.nsecs && (h = 0), h >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				i = b, c = h, r = m;
				var g = (1e4 * (268435455 & (b += 122192928e5)) + h) % 4294967296;
				l[d++] = g >>> 24 & 255, l[d++] = g >>> 16 & 255, l[d++] = g >>> 8 & 255, l[d++] = 255 & g;
				var x = b / 4294967296 * 1e4 & 268435455;
				l[d++] = x >>> 8 & 255, l[d++] = 255 & x, l[d++] = x >>> 24 & 15 | 16, l[d++] = x >>> 16 & 255, l[d++] = m >>> 8 | 128, l[d++] = 255 & m;
				for (var v = 0; v < 6; ++v) l[d + v] = u[v];
				return t || a(l)
			}
		},
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.m.less"),
				c = n.n(i);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: a
					} = e;
				return r.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[c.a.disable]: n,
						[c.a.active]: s,
						[c.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", c.a)
		},
		"./src/higherOrderComponents/asModal/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/elementIds.ts");
			const r = () => {
					const e = document.getElementById(s.a);
					e && (e.style.filter = "blur(10px)")
				},
				o = () => {
					const e = document.getElementById(s.a);
					e && e.style.removeProperty("filter")
				}
		},
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				mIsBlurred: "_3Tq-_9917Q-o0iyzcNAeZn",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/asModal/helpers.ts"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/FocusTrap/index.ts"),
				c = n("./src/lib/portal/index.tsx"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				l = n("./src/reddit/constants/shortcuts.ts"),
				u = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				m = n("./src/higherOrderComponents/asModal/index.m.less"),
				p = n.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = e => {
				let {
					className: t,
					shouldBlurBackground: n,
					isVisible: s,
					...o
				} = e;
				return r.a.createElement("div", b({
					className: Object(a.a)(p.a.overlay, t, {
						[p.a.mIsVisible]: s,
						[p.a.mIsBlurred]: n
					})
				}, o))
			};

			function f(e) {
				class t extends s.Component {
					constructor(e) {
						super(e), this.getRef = e => this.ref = e, this.onClick = e => e.stopPropagation(), this.onOverlayClick = e => {
							this.props.onOverlayClick && this.props.onOverlayClick(), e.stopPropagation()
						}, this.state = {
							mounted: !1
						}
					}
					componentDidMount() {
						this.props.ignoreDefaultFocus || this.ref && this.ref.focus(), this.setState({
							mounted: !0
						}), Object(u.a)(), this.ref && (this.focusTrap = new i.b(this.ref), this.focusTrap.activate()), this.props.shouldBlurBackground && Object(o.a)()
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(u.b)(), Object(d.d)(), this.focusTrap && this.focusTrap.deactivate(), this.props.shouldBlurBackground && Object(o.b)()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: s,
							onOverlayClick: o,
							overlayClassName: i,
							overlayCustomStyles: d,
							shouldBlurBackground: u,
							withOverlay: m,
							...b
						} = t, f = b;
						return r.a.createElement(c.a, {
							container: document.getElementById(l.b)
						}, r.a.createElement(h, {
							className: i,
							isVisible: m,
							onClick: this.onOverlayClick,
							shouldBlurBackground: u,
							style: d
						}, r.a.createElement("div", {
							"aria-modal": !0,
							className: Object(a.a)(p.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, r.a.createElement(e, f))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => r.a.createElement(e, t)
			}
		},
		"./src/lib/FocusTrap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = ['input:not([type="hidden"]):not([disabled])', "select:not([disabled])", "textarea:not([disabled])", "a[href]", "button:not([disabled])", '[tabindex]:not([tabindex="-1"]):not([disabled])', "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join();
			class r {
				constructor(e) {
					this.active = !1, this.onKeyDown = e => {
						if ("Tab" === e.key || 9 === e.keyCode) {
							const [t, n] = this.getTabbableNodes();
							if (!t || !n) return;
							e.shiftKey && e.target === t ? (e.preventDefault(), this.tryToFocusNode(n)) : e.shiftKey || e.target !== n || (e.preventDefault(), this.tryToFocusNode(t))
						}
					}, this.container = e
				}
				activate() {
					this.active || (this.active = !0, document.addEventListener("keydown", this.onKeyDown, !0))
				}
				deactivate() {
					this.active && (document.removeEventListener("keydown", this.onKeyDown, !0), this.active = !1)
				}
				getTabbableNodes() {
					const e = this.container.querySelectorAll(s);
					return [e[0], e[e.length - 1]]
				}
				tryToFocusNode(e) {
					e !== document.activeElement && e.focus && e.focus()
				}
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			class s {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class r {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new r(t);
					return e.forEach(e => n.push(e)), n
				}
				first() {
					if (this.tail) return this.tail.value
				}
				firstNode() {
					if (this.tail) return this.tail
				}
				forEach(e) {
					let t = this.tail;
					for (; t;) e(t.value), t = t.next
				}
				get(e) {
					const t = this.getNode(e);
					if (t) return t.value
				}
				getNode(e) {
					return this.itemsByKey[e]
				}
				has(e) {
					return e in this.itemsByKey
				}
				insertAfter(e, t) {
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.prev = r, n.next = r.next, r.next = n, n.next && (n.next.prev = n);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.next = r, n.prev = r.prev, r.prev = n, n.prev && (n.prev.next = n);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				last() {
					if (this.head) return this.head.value
				}
				lastNode() {
					if (this.head) return this.head
				}
				pop() {
					if (!this.head) return;
					return this.removeNode(this.head).value
				}
				push(e) {
					const t = e instanceof s ? e : new s(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
				remove(e) {
					const t = this.getNode(e);
					if (t) return this.removeNode(t).value
				}
				removeNode(e) {
					return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.tail && (this.tail = e.next), e === this.head && (this.head = e.prev), e.next = void 0, e.prev = void 0, this.itemsByKey[e.value[this.key]] = void 0, this.length--, e
				}
				shift() {
					if (!this.tail) return;
					return this.removeNode(this.tail).value
				}
				toArray() {
					const e = [];
					return this.forEach(t => e.push(t)), e
				}
				unshift(e) {
					const t = e instanceof s ? e : new s(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
			}
		},
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e, t) {
				const n = Object(s.useCallback)(n => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(n.target) || t(n))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return window.addEventListener("click", n), () => {
						window.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
				const t = Object(s.useRef)();
				return Object(s.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(s.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(r.useState)(null), [a, c] = Object(r.useState)(null), [d, l] = Object(r.useState)(null), [u, m] = Object(r.useState)(!1), p = Object(r.useCallback)(async () => m(!0), []), b = Object(r.useCallback)(() => m(!1), []), h = Object(r.useCallback)(() => m(!u), [u]), f = Object(r.useMemo)(() => {
					const t = i(e);
					return d ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: g,
					styles: x,
					update: v
				} = Object(o.a)(t, a, f);
				return Object(r.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: x.arrow,
						...g.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: x.popper,
						...g.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: h,
					visible: u,
					update: v
				}), [l, g, c, b, p, x, t, n, h, u, v])
			}
		},
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/react/index.js");

			function r() {
				return window
			}
			var o = n("./node_modules/lodash/debounce.js"),
				a = n.n(o),
				i = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/hooks/usePromoContext.ts"),
				l = n("./src/reddit/constants/promo.ts"),
				u = n("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var m = function() {
					const e = Object(u.a)(c.Dc.Bottom_cell),
						t = Object(u.a)(c.Dc.Bottom_cell_dismissible),
						n = Object(u.a)(c.Dc.Bottom_cell_dismissible_immediate_trigger),
						s = Object(u.a)(c.Dc.Bottom_cell_signup_upsell_copy),
						r = Object(u.a)(c.Dc.Bottom_cell_surprise_install_copy),
						o = Object(u.a)(c.Dc.Bottom_sheet);
					return e || s || r ? l.b.SignupUpsellCell : t || n ? l.b.SignupUpsellCellDismissible : o ? l.b.SignupUpsellBottomSheet : null
				},
				p = n("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function g(e) {
				const t = e.displayName || e.name || "Component";

				function n(t) {
					const n = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
						const {
							showPromo: t
						} = Object(d.a)(), n = m(), o = Object(p.a)(n), l = Object(u.a)(c.Dc.Bottom_cell_dismissible_immediate_trigger);
						return s.useMemo(() => a()(() => {
							if (!o && n) {
								const e = document.getElementById(i.e),
									s = e ? e.scrollTop : r().scrollY,
									o = r().innerHeight,
									a = o / 3,
									c = 2 * o;
								s >= (l ? a : c) && t(n)
							}
						}, e, {
							maxWait: h
						}), [l, o, n, t, e])
					}();
					return s.createElement(e, f({
						showSignupUpsell: n
					}, t))
				}
				return n.displayName = `withShowSignupUpsell(${t})`, n
			}
		},
		"./src/lib/pubsub/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class s {
				constructor() {
					this.listenerMap = {}
				}
				_resetListenerMap() {
					this.listenerMap = {}
				}
				_resetKey(e) {
					this.listenerMap[e] = []
				}
				reset(e) {
					e ? this._resetKey(e) : this._resetListenerMap()
				}
				addListeners(e) {
					this.listenerMap[e] || (this.listenerMap[e] = []);
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					this.listenerMap[e].push(...n)
				}
				removeListeners(e) {
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const r = n.length,
						o = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - o === r
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "b", (function() {
				return k
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/performanceTimings/index.tsx"),
				a = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(r.a)(a.g),
				f = Object(r.a)(a.e),
				g = Object(r.a)(a.h),
				x = Object(r.a)(a.c),
				v = Object(r.a)(a.f),
				y = Object(r.a)(a.j),
				E = Object(r.a)(a.i),
				_ = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const o = t(),
						a = Object(m.e)(o),
						d = Object(m.d)(o),
						p = Object(b.P)(o);
					if (a || !d) return;
					e(g());
					let v = !1;
					try {
						const t = p ? s.LoggedInGeo : s.LoggedOutGeo,
							n = await ((e, t, n) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (O(t)) {
								if (C(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), v = !0
								} else if (j(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: r,
											category: o
										} = n.focusRecommendations[0],
										a = [s, r],
										i = Object(u.d)(a),
										c = Object(l.b)(a),
										d = Object(u.c)(s),
										m = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [r.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(h(m)), v = !0
								}
							} else v = !1
						}
					} catch (y) {
						v = !1
					}
					v || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						s = t && t.type;
					return !!(n && !C(e) && s === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, k = () => async (e, t, n) => {
					var s, r;
					const a = t(),
						i = Object(m.g)(a);
					if (Object(m.f)(a) || null === i || "client" === i) {
						const n = null === (r = null === (s = Object(p.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							i = Object(b.Q)(a);
						return Object(o.i)(() => e(_()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(v({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/components/AwardedListingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "Euf0eewj0MUfCAneI6fj_",
				title: "_3ugv2ujLUVD37KHjuncuRT",
				close: "_3JAHw6m54Wrjm0rnX7GgRZ",
				dismissedContainer: "_1HciFW1Gf3BHBs0dEvE_tk",
				dismissedText: "_1cXKsx4apv5X14RmNQ0794",
				iconCarouselWrapper: "_2BnXKMLxfFWoe-pZcfIiIm",
				awardIcon: "_34m3e-Z2OR_TEdYH0Ih7O6",
				linearAnimation: "_4HAlQmVogiasYQ9srm4z4",
				iconCarouselInnerWrapper0: "_2fP0vb7wP0Afwdaw6cwZpG",
				slide0: "_3GqXepZa1qvL1X0wE8N0e2",
				iconCarouselInnerWrapper1: "_2O70Ew5pvoBSnOqL4T5EGx",
				slide1: "Fo2rMgLePrq248kivE__Q",
				scale: "_1IMFuS4ukJn7lP178Rtiqd",
				fadeInALittle: "_2KMwT7J3kyGA-____-iftE",
				fadeInTheRest: "_2BxmXNxZx082mr62D3k1LQ"
			}
		},
		"./src/reddit/components/AwardedListingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/banners.ts"),
				i = n("./src/reddit/constants/page.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-redux/es/index.js")),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./node_modules/lodash/sampleSize.js"),
				b = n.n(p),
				h = n("./src/reddit/models/Gold/Award.ts"),
				f = n("./src/reddit/components/AwardedListingBanner/index.m.less"),
				g = n.n(f);
			const x = 11,
				v = 1e3,
				y = 500,
				E = [g.a.iconCarouselInnerWrapper0, g.a.iconCarouselInnerWrapper1];

			function _(e) {
				let {
					asset: t
				} = e;
				return r.a.createElement("div", {
					className: g.a.awardIcon,
					style: {
						backgroundImage: `url('${t}')`
					}
				})
			}
			const O = Object(m.c)({
				awards: e => e.awards.models
			});
			class C extends s.Component {
				constructor(e) {
					super(e), this.state = {
						animationClass: E[0],
						icons: []
					}
				}
				componentDidMount() {
					this.timerId = setInterval(() => this.updateOrdering(), v + y)
				}
				componentWillUnmount() {
					clearInterval(this.timerId)
				}
				updateOrdering() {
					this.setState(e => {
						const t = [...e.icons];
						return t.unshift(t.pop()), {
							icons: t,
							animationClass: e.animationClass === E[0] ? E[1] : E[0]
						}
					})
				}
				shouldComponentUpdate(e, t) {
					return this.state.animationClass !== t.animationClass
				}
				static getDerivedStateFromProps(e, t) {
					if (t.icons.length) return null;
					const n = Object.values(e.awards).filter(e => {
						return e.awardType === h.f.Global && e.isEnabled && !e.isOptional
					});
					return n.length ? {
						icons: b()(n, x).map(e => {
							var t;
							const n = (null === (t = e.staticIcon64) || void 0 === t ? void 0 : t.url) || e.staticIcon.url;
							return r.a.createElement(_, {
								asset: n,
								key: e.id
							})
						})
					} : null
				}
				render() {
					const {
						animationClass: e,
						icons: t
					} = this.state;
					return r.a.createElement("div", {
						className: g.a.iconCarouselWrapper
					}, r.a.createElement("div", {
						className: e
					}, t))
				}
			}
			var j = Object(u.b)(O)(C);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var S;
			! function(e) {
				e.Dismissed = "dismissed", e.Hidden = "hidden", e.Visible = "visible"
			}(S || (S = {}));
			t.a = e => {
				const {
					className: t
				} = e, n = Object(c.f)(a.a.AWARDED_LISTING_BANNER, i.g), [u, m] = Object(s.useState)(n ? S.Hidden : S.Visible);
				if (u === S.Hidden) return null;
				const p = () => {
					m(S.Visible), Object(c.kb)(a.a.AWARDED_LISTING_BANNER, !1, i.g)
				};
				return u === S.Dismissed ? r.a.createElement("div", {
					className: Object(o.a)(g.a.dismissedContainer, t)
				}, r.a.createElement("div", {
					className: g.a.dismissedText
				}, k._("Ok, we won't show you this again.", null, {
					hk: "4z33KK"
				})), r.a.createElement(d.l, {
					onClick: p
				}, k._("undo", null, {
					hk: "1A9z3Y"
				}))) : r.a.createElement("div", {
					className: Object(o.a)(g.a.container, t)
				}, r.a.createElement("h2", {
					className: g.a.title
				}, k._("Explore and react to the top awarded posts on Reddit", null, {
					hk: "3IAtgk"
				})), r.a.createElement(j, null), r.a.createElement(l.a, {
					className: g.a.close,
					onClick: () => {
						m(S.Dismissed), Object(c.kb)(a.a.AWARDED_LISTING_BANNER, !0, i.g)
					}
				}))
			}
		},
		"./src/reddit/components/BackToSubreddit/index.m.less": function(e, t, n) {
			e.exports = {
				backToSubreddit: "_3aAvvioBKBNnlJqKytAVAd",
				innerContainer: "_3aVffPeM6Nkqs7D0RJ5FBs",
				back: "_17MxNCYEMmDof9NnT6ffxl",
				title: "_2VB8YvVdvxx0h0VGYVrpBX",
				subredditIcon: "_2Aw3HO2EUDcP7F481ZxyYl",
				content: "uhMLc-O1VODjzminrp8py"
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/BackToTop/index.m.less"),
				d = n.n(c);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				if (e) {
					const e = document.getElementById(a.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: n,
					style: s
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(t, d.a.container),
					style: s
				}, r.a.createElement(i.l, {
					className: d.a.button,
					onClick: () => u(n)
				}, l._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less": function(e, t, n) {
			e.exports = {
				notificationButton: "_3lH4vtstXYL3BXfT_hrmNu",
				notificationDropdown: "_3RIXPgg0td0Ikm3OCair-W",
				notificationRow: "nbdugyDJvnPyib81V0bre",
				isSelected: "_1yo5m2yCZUVzNB40ZytJzk",
				notificationIcon: "qIoApQle9dXP6HkO35IOx",
				notificationPopup: "J-YgwKJ71m7H4bkbzeN5G",
				title: "_3oHXlwUZwpR5SS-8P9tILX",
				subredditWrapper: "_3V00i2DgErfrsJUA2i5OVw",
				subredditTitle: "_8eiyc5qzybrCg1tKBvgsm",
				icon: "_28KZtJenmDKbbe4nGYKwSQ",
				SubredditIcon: "_4DdaSgJh_sBn7t3LGtJCG",
				subredditIcon: "_4DdaSgJh_sBn7t3LGtJCG",
				DefaultIcon: "_3m2_I6hmPorjqHjbfwJQZv",
				defaultIcon: "_3m2_I6hmPorjqHjbfwJQZv",
				subscribeButton: "_2R2t7BzhdzT5QExBlp5Di0",
				hideButton: "_3lnzUjXBFhqkpfm2GDP6i",
				popupTooltip: "_2h6EM3mo5Qn9Eqm18v5Hiz"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "MSTY2ZpsdupobywLEfx9u",
				stickyWrapper: "VJkPo4gom3XvkL4X-w0JS",
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				DefaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				defaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX",
				isSticking: "ZGQod_mafxz0rQZ6X1osG",
				buttonWrapper: "_2I_YJCANrzkY2DZkeu2nht",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				SubredditIconImg: "u0UgpXN5r-VO6PP9OAViq",
				subredditIconImg: "u0UgpXN5r-VO6PP9OAViq",
				blur: "_38oiFpMv7UiE7wnlYWtYvR",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				notificationButtonContainer: "_1cAYKT6f3GM-_aZei--pxM",
				intersectionWrapper: "_3EWe8WOn2CDJW5khbbnAIX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/actions/subreddit/notifications.ts"),
				m = n("./src/lib/combineRefs/index.tsx"),
				p = n("./src/lib/hooks/useOnClickOutside.ts"),
				b = n("./src/lib/hooks/useTooltip.ts"),
				h = n("./src/reddit/components/CommonTooltip/index.m.less"),
				f = n.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var x = r.a.memo((function(e) {
					let {
						visible: t,
						tooltipId: n,
						className: o,
						arrowClassName: a,
						...c
					} = e;
					const [d, l] = Object(s.useState)(t);
					return Object(s.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, l(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), l(!1)
						}
					}, [t]), t ? r.a.createElement("div", g({
						id: n,
						className: Object(i.a)(f.a.tooltip, o, {
							[f.a.visible]: d
						})
					}, c.popperProps), d && r.a.createElement(r.a.Fragment, null, c.arrowProps && r.a.createElement("div", g({
						className: Object(i.a)(f.a.arrow, a)
					}, c.arrowProps)), c.children)) : null
				})),
				v = n("./src/reddit/models/Subreddit/index.ts");
			const y = e => {
					switch (e) {
						case v.b.FREQUENT:
							return "notification_frequent";
						case v.b.OFF:
							return "notification_off";
						case v.b.LOW:
						default:
							return "notification"
					}
				},
				E = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				_ = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				};
			var O = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/reddit/controls/Dropdown/index.tsx"),
				j = n("./src/reddit/controls/Dropdown/Row.tsx"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				S = n("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				w = n.n(S);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var P = e => {
					return r.a.createElement(C.a, {
						id: e.dropdownId,
						className: w.a.notificationDropdown
					}, [{
						displayText: O.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(v.b.FREQUENT),
						isSelected: e.notificationLevel === v.b.FREQUENT,
						icon: r.a.createElement(k.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === v.b.FREQUENT
						})
					}, {
						displayText: O.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(v.b.LOW),
						isSelected: e.notificationLevel === v.b.LOW,
						icon: r.a.createElement(k.a, {
							name: "notification",
							isFilled: e.notificationLevel === v.b.LOW
						})
					}, {
						displayText: O.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(v.b.OFF),
						isSelected: e.notificationLevel === v.b.OFF,
						icon: r.a.createElement(k.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === v.b.OFF
						})
					}].map(e => r.a.createElement(j.b, N({
						className: Object(i.a)(w.a.notificationDropdown, w.a.notificationRow, {
							[w.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				I = n("./src/reddit/controls/Button/index.tsx"),
				T = n("./src/reddit/selectors/telemetry.ts");
			const L = e => t => ({
				...T.n(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: T.hb(t)
			});
			var B = n("./src/reddit/hooks/useTracking.ts"),
				R = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const A = d.a.img("SubredditIcon", w.a),
				D = d.a.wrapped(R.a, "DefaultIcon", w.a);
			var M = e => {
					let {
						subredditName: t,
						shouldShowSubredditIcon: n,
						subredditIcon: s,
						onHide: o,
						onUpdate: a
					} = e;
					const i = Object(B.a)(),
						c = n ? r.a.createElement(A, {
							src: s || void 0
						}) : r.a.createElement(D, null),
						d = `r/${t}`;
					return r.a.createElement("div", {
						className: w.a.notificationPopup
					}, r.a.createElement("div", {
						className: w.a.title
					}, r.a.createElement("h2", null, O.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), r.a.createElement("h3", null, O.fbt._("{subreddit name}", [O.fbt._param("subreddit name", d)], {
						hk: "1es0XP"
					}))), r.a.createElement("div", {
						className: w.a.subredditWrapper
					}, r.a.createElement("div", {
						className: w.a.subredditTitle
					}, c, r.a.createElement("span", null, d), r.a.createElement(k.a, {
						name: "notification_frequent",
						className: w.a.notificationIcon,
						isFilled: !0
					})), r.a.createElement(I.t, {
						className: w.a.subscribeButton,
						priority: I.c.Primary,
						size: I.d.M,
						text: O.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							o(), a(v.b.FREQUENT), i(L(v.b.FREQUENT.toLowerCase()))
						}
					})), r.a.createElement("button", {
						className: w.a.hideButton,
						onClick: o
					}, O.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				F = n("./src/reddit/helpers/localStorage/index.ts");
			var U = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var W = e => {
					const t = Object(o.d)(),
						n = Object(B.a)(),
						a = Object(b.b)(E),
						i = Object(b.b)(_),
						[c, d] = function(e, t) {
							const [n, r] = Object(s.useState)(Object(F.O)(e, t));
							return [n, Object(s.useCallback)(() => {
								const n = Object(F.a)(e, t);
								r(n)
							}, [e, t, r])]
						}(e.userId, e.subredditId),
						l = Object(o.e)(e => !!Object(U.a)(e));
					Object(s.useEffect)(() => {
						e.notificationLevel !== v.b.LOW && e.notificationLevel !== v.b.OFF || d()
					}, [e.subredditId]);
					const h = 2 === c,
						f = () => {
							a.hide()
						},
						g = () => {
							i.hide()
						};
					Object(s.useEffect)(() => (h && (i.update && i.update(), i.show()), () => {
						g(), f()
					}), [e.subredditName, h]);
					const O = () => {
							g(), a.show()
						},
						C = (e => `dropdown-${e}`)(e.subredditName),
						j = (e => `popup-${e}`)(e.subredditName);
					Object(p.a)(C, f);
					const S = Object(s.useCallback)(e => {
							e.stopPropagation(), a.visible ? f() : O()
						}, [f, O, a.visible]),
						N = Object(s.useCallback)(t => {
							t === v.b.FREQUENT && Object(F.cb)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						I = Object(s.useCallback)(s => {
							const {
								subredditId: r
							} = e;
							f(), g(), t(Object(u.b)({
								subredditId: r,
								notificationLevel: s,
								successCallback: () => N(s)
							})), n(L(s.toLowerCase()))
						}, [f, e.subredditId, t, n]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
						type: "button",
						className: w.a.notificationButton,
						ref: Object(m.a)(a.target.ref, i.target.ref),
						onClick: S,
						"data-testid": "subredditNotificationButton"
					}, r.a.createElement(k.a, {
						name: y(e.notificationLevel),
						className: w.a.notificationIcon,
						isFilled: !0
					})), r.a.createElement(x, {
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: C
					}, r.a.createElement(P, {
						dropdownId: C,
						notificationLevel: e.notificationLevel,
						onClick: I
					})), h && !l && r.a.createElement(x, {
						arrowProps: i.arrowProps,
						popperProps: i.popperProps,
						visible: i.visible,
						tooltipId: j,
						className: w.a.popupTooltip
					}, r.a.createElement(M, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: g,
						onUpdate: I
					})))
				},
				H = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				V = n("./src/reddit/components/SubredditNav/index.tsx"),
				G = n("./src/reddit/components/SubscribeButton/index.tsx"),
				z = n("./src/reddit/constants/componentSizes.ts"),
				q = n("./src/reddit/constants/postLayout.ts"),
				K = n("./src/reddit/constants/posts.ts"),
				J = n("./src/reddit/featureFlags/index.ts"),
				Q = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				Y = n("./src/reddit/constants/tracking.ts");
			var Z = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				X = n("./src/reddit/hooks/useWindowEvent.ts"),
				$ = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				ee = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				te = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ne = n("./src/reddit/selectors/subreddit.ts"),
				se = n("./src/reddit/selectors/user.ts"),
				re = n("./src/reddit/selectors/widgets.ts"),
				oe = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				ae = n.n(oe);
			const ie = d.a.img("SubredditIcon", ae.a),
				ce = Object(a.c)({
					isNsfwBlurSubreddit: ee.e,
					notificationLevel: ne.H,
					spPollsEnabled: J.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(te.a)(e, {
							subredditId: n
						})
					},
					tournamentsEnabled: (e, t) => {
						let {
							subredditId: n
						} = t;
						return !!n && Object(ne.O)(e, {
							subredditId: n
						})
					},
					userId: se.i,
					userIsSubscriber: (e, t) => {
						let {
							subredditName: n
						} = t;
						const s = n;
						return Object(ne.gb)(e, {
							identifier: {
								name: s,
								type: "subreddit"
							}
						})
					},
					widget: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(re.f)(e, {
							subredditId: n
						}) : void 0
					}
				}),
				de = {
					threshold: [.5, .001],
					rootMargin: `${1-z.f}px 0px 0px 0px`
				};
			t.a = Object(o.b)(ce, (e, t) => ({
				_updateSubredditInfo: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (s) return e(Object(u.a)({
						subredditAboutInfo: {
							[s]: {
								notificationLevel: v.b.LOW
							}
						}
					}))
				}
			}), (e, t, n) => ({
				...e,
				...t,
				...n,
				updateSubredditInfo: () => e.userIsSubscriber && t._updateSubredditInfo()
			}))(Object(c.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					n = e.subreddit ? e.subreddit.name : e.subredditName,
					a = e.subreddit ? e.subreddit.url : e.subredditUrl,
					c = e.subreddit ? e.subreddit.title : "",
					d = Object(o.e)($.b),
					u = Object(o.e)($.a),
					m = d || u,
					[p, b] = Object(s.useState)(!1),
					h = Object(s.useRef)(null),
					[f, g] = Object(s.useState)(),
					[x, v] = Object(s.useState)(null),
					y = Object(s.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: n
							} = t;
							n >= .5 ? e(!1) : n <= .001 && e(!0)
						})
					})(b), []);
				Object(X.a)("resize", ((e, t, n) => () => {
					var s;
					e(t && n ? null === (s = t.getBoundingClientRect()) || void 0 === s ? void 0 : s.height : void 0)
				})(g, x, m)), Object(Z.a)(h, y, de);
				const E = e.subreddit && Object(Q.a)(e),
					_ = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && E),
					O = n.charAt(0).toUpperCase() + n.slice(1),
					C = !!e.subreddit && e.subredditInlineEditingEnabled,
					j = Object(i.a)(ae.a.SubredditIcon, ae.a.editableIcon, {
						[ae.a.emptyEditableIcon]: !E
					}),
					k = _ ? r.a.createElement(H.a, {
						className: j,
						subreddit: e.subreddit,
						iconUrl: E || void 0,
						inTopBar: !0
					}) : r.a.createElement(R.a, {
						className: ae.a.DefaultIcon
					}),
					S = _ ? r.a.createElement(ie, {
						className: Object(i.a)(ae.a.SubredditIconImg, {
							[ae.a.blur]: e.isNsfwBlurSubreddit
						}),
						src: E || void 0
					}) : r.a.createElement(R.a, {
						className: Object(i.a)(ae.a.DefaultIcon, {
							[ae.a.blur]: e.isNsfwBlurSubreddit
						})
					}),
					w = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					N = e.layout ? e.layout === q.g.Large ? "984px" : "100%" : "1086px";
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					style: {
						height: p ? void 0 : f
					},
					className: Object(i.a)(ae.a.wrapper, {
						[ae.a.stickyWrapper]: m,
						[ae.a.isSticking]: p
					})
				}, r.a.createElement("div", {
					className: ae.a.container,
					style: {
						maxWidth: N
					},
					ref: m ? v : void 0
				}, r.a.createElement("div", {
					className: ae.a.subredditMetaContainer
				}, C ? k : S, r.a.createElement("div", {
					className: Object(i.a)(ae.a.textContainer, {
						[ae.a.textContainerNoIcon]: !_
					})
				}, r.a.createElement("div", {
					className: Object(i.a)(ae.a.text, {
						[ae.a.blur]: e.isNsfwBlurSubreddit
					})
				}, r.a.createElement("h1", {
					className: ae.a.title
				}, c || O), !!c && r.a.createElement("h2", {
					className: ae.a.description
				}, "r/", n)), r.a.createElement("div", {
					className: ae.a.buttonWrapper
				}, r.a.createElement("div", {
					className: ae.a.subscribeButtonContainer
				}, r.a.createElement(G.a, {
					className: ae.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return p ? (e => t => ({
							...T.n(t),
							source: "sticky_banner",
							action: Y.c.CLICK,
							noun: e,
							subreddit: T.hb(t)
						}))(t) : (e => t => ({
							...T.n(t),
							source: "id_banner",
							action: Y.c.CLICK,
							noun: e,
							subreddit: T.hb(t)
						}))(t)
					},
					identifier: {
						name: n,
						type: K.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					afterUnsubscribeAction: () => {
						t && (Object(F.cb)(e.userId, t), e.updateSubredditInfo())
					}
				})), e.userIsSubscriber && t && e.notificationLevel && r.a.createElement("div", {
					className: ae.a.notificationButtonContainer
				}, r.a.createElement(W, {
					notificationLevel: e.notificationLevel,
					subredditName: n,
					subredditId: t,
					subredditIcon: E,
					shouldShowSubredditIcon: _,
					userId: e.userId
				}))))), w && r.a.createElement(V.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: a,
					subredditId: t,
					subredditNavContainerClassName: ae.a.subredditNavContainer
				}))), r.a.createElement("div", {
					className: ae.a.intersectionWrapper
				}, r.a.createElement("div", {
					style: {
						height: m ? f : void 0
					},
					ref: m ? h : void 0
				})))
			}))
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: async () => n.e("CommunityTopicSurvey").then(n.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = n("./src/reddit/components/Footer/index.tsx"),
				g = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.tsx"),
				v = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				y = n("./node_modules/lodash/flatMap.js"),
				E = n.n(y),
				_ = n("./src/lib/linkMatchers/index.ts"),
				O = n("./src/lib/linkMatchers/customLinks.ts"),
				C = n("./src/reddit/controls/OutboundLink/index.tsx");
			const j = /\[(.+?)\]\((.+?)\)/g,
				k = e => {
					const t = e.split(j);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, o] = t.slice(s, s + 3);
						n.push(e), n.push([o, r])
					}
					return n
				};
			var S = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = E()(t, k)), e.parseRegularLinks && (t = E()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = _.f.add(O.g.subreddit.prefix, O.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return o.a.createElement(C.b, {
								className: e.linkClassName,
								href: s,
								key: n
							}, r)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				w = n("./src/reddit/constants/parameters.ts"),
				N = n("./src/reddit/contexts/PageLayer/index.tsx"),
				P = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/chat/controls/Svg/index.tsx");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var L = e => o.a.createElement(I.a, T({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				B = n("./src/reddit/models/ContentGate.ts"),
				R = n("./src/lib/constants/index.ts"),
				A = n("./src/reddit/selectors/platform.ts"),
				D = n("./src/reddit/selectors/user.ts");
			var M = n("./src/reddit/selectors/meta.ts"),
				F = n("./src/reddit/components/ContentGate/index.m.less"),
				U = n.n(F);
			const {
				fbt: W
			} = n("./node_modules/fbt/lib/FbtPublic.js"), H = l.a.wrapped(L, "PrivateKey", U.a), V = l.a.div("ButtonsContainer", U.a), G = l.a.div("Container", U.a), z = l.a.div("ContainerExp", U.a), q = l.a.div("Description", U.a), K = l.a.div("PrivateSubredditDetails", U.a), J = l.a.div("PrivateSubredditDescription", U.a), Q = l.a.h3("PrivateSubredditName", U.a), Y = l.a.a("Link", U.a), Z = l.a.wrapped(P.n, "LinkRouterButton", U.a), X = l.a.wrapped(P.m, "LinkButton", U.a), $ = l.a.wrapped(P.q, "SecondaryLinkRouterButton", U.a), ee = l.a.wrapped(P.p, "SecondaryLinkButton", U.a), te = l.a.wrapped(Z, "GoHomeLinkButton", U.a), ne = l.a.wrapped(h.a, "CreateCommunityButton", U.a), se = l.a.img("Image", U.a), re = l.a.img("ImagePlaceholder", U.a), oe = l.a.wrapped(Z, "LeftLinkRouterButton", U.a), ae = l.a.wrapped(X, "LeftLinkButton", U.a), ie = l.a.wrapped(ee, "SecondaryLeftLinkButton", U.a), ce = l.a.wrapped($, "SecondaryLeftLinkRouterButton", U.a), de = l.a.h3("Title", U.a), le = l.a.div("PageBody", U.a), ue = l.a.div("InterstitialMessageWrapper", U.a), me = Object(d.c)({
				isLoggedIn: D.P,
				origin: M.k,
				user: D.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(D.Q)(e)) return !1;
					const t = Object(A.d)(e);
					if (!t) return !1;
					const n = Object(D.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = n;
					if (!s) return !1;
					const r = 30 * R.B;
					return s > Date.now() - r
				})(e),
				isSeo: M.h
			}), pe = Object(N.u)(), be = Object(a.b)(me, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.D(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.v(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.o)())
					}
				}
			}), he = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					continueToGatedSubreddit: a,
					isLoggedIn: i,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: d,
					isSeo: l,
					location: p,
					origin: h,
					pageLayer: f,
					quarantineRequiresEmail: y,
					quarantineMessage: E,
					quarantineMessageHtml: _,
					quarantineMessageRTJson: O,
					interstitialWarningMessage: C,
					interstitialWarningMessageHtml: j,
					interstitialWarningMessageRTJson: k,
					setNSFWPreference: N,
					subredditDescription: P,
					subredditName: I,
					user: T
				} = e, L = async () => {
					if (i ? await N() : await Object(m.n)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(w.f, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case B.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(de, null, W._("r/{community name} is a Reddit Premium community", [W._param("community name", I)], {
							hk: "2lyDwB"
						})), o.a.createElement(q, null, W._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(V, null, T ? o.a.createElement(ie, {
							href: `${s.a.redditUrl}/premium`,
							redditStyle: !0
						}, W._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(ae, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), T ? o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(ee, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, W._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case B.a.Nsfw:
					case B.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(de, null, n === B.a.Nsfw ? W._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : W._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(q, null, W._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(V, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, W._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(ee, {
							onClick: L,
							redditStyle: !0
						}, W._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case B.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(H, null), o.a.createElement(de, null, "r/", I, " ", W._("is a private community", null, {
							hk: "7zZmq"
						})), P && P.length && o.a.createElement(K, null, o.a.createElement(Q, null, "r/", I), o.a.createElement(J, null, o.a.createElement("div", null, P))), o.a.createElement(q, null, W._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", I, " ", W._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), W._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(V, null, T ? o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: U.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), o.a.createElement(ie, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${I}`,
							redditStyle: !0
						}, W._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ie, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, W._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), I && o.a.createElement(v.a, {
							subredditName: I
						}));
					case B.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(de, null, W._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(q, null, W._("This community is {=quarantined}", [W._param("=quarantined", o.a.createElement(Y, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, W._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(ue, null, O ? o.a.createElement(x.b, {
							content: O,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : _ ? o.a.createElement(g.a, {
							html: _
						}) : E || W._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), W._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(V, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(V, null, o.a.createElement(ce, {
								to: "/",
								redditStyle: !0
							}, W._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(X, {
								href: `${s.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, W._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(V, null, o.a.createElement(oe, {
								to: "/",
								redditStyle: !0
							}, W._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(ee, {
								onClick: t,
								redditStyle: !0
							}, W._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(T, r, y)));
					case B.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(de, null, W._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(q, null, o.a.createElement(ue, null, k ? o.a.createElement(x.b, {
							content: k,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : j ? o.a.createElement(g.a, {
							html: j
						}) : C), W._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(V, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, W._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(ee, {
							onClick: a,
							redditStyle: !0
						}, W._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case B.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(de, null, W._("r/{community name} has been banned from Reddit", [W._param("community name", I)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(q, null, e ? o.a.createElement(S, {
							linkClassName: U.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : W._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(V, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(V, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(re, null), o.a.createElement(de, null, W._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(q, null, W._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(V, null, T && o.a.createElement(ne, {
							eventSource: "content_gate"
						}), o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.ProfileDoesNotExist:
					case B.a.ProfileDeleted:
					case B.a.ProfileSuspended:
					case B.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case B.a.ProfileBlockedForLegalReason:
									return W._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case B.a.ProfileDeleted:
									return W._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case B.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, W._("This account has been {=suspended} .", [W._param("=suspended", o.a.createElement(Y, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, W._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case B.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(de, null, W._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(q, null, W._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(V, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, W._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(V, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(V, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, W._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = pe(be(Object(i.i)(e => {
				const t = Object(r.useContext)(c.a) ? z : G;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(le, null, he(e))), o.a.createElement(f.b, null))
			})))
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/config.ts"),
				a = n("./src/reddit/components/ContentSurvey/index.m.less"),
				i = n.n(a),
				c = n("./src/reddit/helpers/trackers/contentTag.ts"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function p(e) {
				let {
					survey: t,
					subredditId: n
				} = e;
				const [a, p] = Object(s.useState)(!1), b = Object(d.a)();
				return Object(s.useEffect)(() => b(Object(c.h)()), [b]), r.a.createElement("div", {
					className: i.a.feedBanner,
					onClick: function() {
						p(!0), b(Object(c.g)())
					}
				}, r.a.createElement("div", {
					className: i.a.notepadSnoo
				}, r.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
				})), r.a.createElement("div", {
					className: i.a.bannerCopy
				}, r.a.createElement("p", {
					className: i.a.copy
				}, m._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), r.a.createElement("p", {
					className: i.a.meta
				}, m._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), r.a.createElement(l.a, {
					name: "caret_right",
					className: i.a.chevron
				}), a && r.a.createElement(u.a, {
					withOverlay: !0,
					subredditId: n,
					survey: t,
					onClose: () => p(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e(6), n.e(8)]).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				a = Object(r.a)(o);
			t.a = a
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, n) {
			e.exports = {
				feedBanner: "_3oY2sjcQ7EgBYd7agqleJv",
				notepadSnoo: "B0cLCCVs794x74kjJidDO",
				bannerCopy: "_2NfcId0Mtt4-NP4AbrAck5",
				copy: "BcSr5zM39F4cQJ9MQqkRn",
				meta: "r9AkMaLWOPKfC5Swx9XQf",
				chevron: "yFbNzMMxa-u2DgUP3Gz5h",
				header: "wKkshJ3Og8gaDgJmSULiK",
				introCopy: "m3rT-KnA6An7scRNg10UW",
				checkbox: "Y5aDAUsXXQaMbdCe1-qdG",
				result: "_29ewfEVekvKEl_P2hqf4tI",
				heading: "_3yKTUBG4MrGHv9n644t4Ua",
				card: "_18VT-IpGoX6SDdyHHLI_eo",
				pending: "hg80uiMz2ssH44RLsmlhG",
				infoIcon: "_3HgNBpJCFAy2mohcd9VxmZ",
				banner: "_23eBsXSECZlQ3Eh-zXhEbC",
				communityIcon: "_2Z8cRxGvjX2hQUlQK_VEOE",
				communityName: "_1sHP__xe_7iTbSpLKp7FeC",
				ratingImg: "UZWqo3i6ydUcE18iJqx3P",
				ratingAudience: "_1Y5aAemcMRF3uwSgYpqbsT",
				ratingDescription: "_1e5wHYsIyWJlZSjZCHhBKg",
				reasonsHeader: "_1npcgCYHbRcUsU6KOI7ony",
				reason: "_3rlzPcuZsxLsVx6ib3oBjk"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(f),
				x = n("./src/lib/lessComponent.tsx");
			const v = "create-community-button",
				y = x.a.wrapped(l.c, "StyledTooltip", g.a),
				E = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
				});
			t.a = Object(a.b)(E, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(n)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: v
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: r,
					onHideTooltip: a,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: u
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						u && u(e), i(c)
					},
					onMouseEnter: r,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: v,
					isFullWidth: !0
				}, s.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: v,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: v,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreatePostBanner/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "_1BIJI1DdDH_4emkRdSgYtS",
				titleFontH2: "_23v2sEqtCPdekfIaLfBZp0",
				titleFontH3: "_3IPxgawQfrpK8awcnvf2tu",
				titleFontH4: "ZuN5dJ8fJ4v1pojDMILP0",
				titleFontH5: "_2ztaAHYqZbZbLYMI-lEtHX",
				titleFontH6: "FJTuq_jN8uqei2Q4GA66j",
				metadataFont: "_1cBJStdY8xmiR_5jS9gSeH",
				flairFont: "_1fMm1d_nUYPU1bZGhGW2bC",
				labelsFont: "_2_UCOjEBwHnvHk6zBrjPsR",
				actionFont: "_2yyPZbzMoNrAUtQO_SktBd",
				smallButtonFont: "_2_b2a8o6wkToROG8VNRtMR",
				largeButtonFont: "_3Ls4y5dDOPfsU8368YWswn",
				strongTextFont: "_1VYMlogcTatyZdJyEPfw1t",
				tabFont: "_2TXH3iCv_qoKnRDI_q5ehB",
				buttonFontXS: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontXs: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontS: "_1l-KcydphK1LZ0DY8WNS7-",
				buttonFontM: "_2-Ytw7EJuJ76FU11odY0vH",
				buttonFontL: "_1fMOhvVkzFghuFsd8kzAEz",
				buttonFontXL: "_25jU9LTEsPZrTgo4UTgEvr",
				buttonFontXl: "_25jU9LTEsPZrTgo4UTgEvr",
				bodyFontH1: "_2ZqUm_Cp2QP_j0eqf4TOLu",
				bodyFontH2: "_3CcMb_6AI06xq5ar12VdGR",
				bodyFontH3: "_2rQURI6yWXPMKy8zTsJVhS",
				bodyFontH4: "_20eyEQiTe3oMfPFHKZsVTk",
				bodyFontH5: "_1LGkFCI_sPLVchg392lGmP",
				bodyFontH6: "NneW2LW2rvek7WBZYLULA",
				bodyFontH6Small: "_5_68hlXr857aHgLLCMBWC",
				bodyFont: "_1WbHqicmob5scrxcNoRM6z",
				bodyFontSmall: "_1JhbrLSCwywCqsws4jUAzS",
				bodyFontMono: "_1DXzqFfRPHDAA7hSJMbTxi",
				banner: "_2bVJFy1zdpBBF6tNX6MsZt",
				button: "_3dn2kMjL3eThyGPEb1oAf-",
				buttonWrapper: "_2MsQ2gmnKXnwElZFA1jCbV",
				close: "_1MiKBKJCDaPRJ7r-vSQ8xU",
				closeContainer: "_3Amqa4WXRxq65XAjmjQw8E",
				heading: "aVXYLWktPH4YxXbOJbfEg",
				postIcon: "_2cBHGzAvbCcbR3bvPSt_Y1",
				text: "_3VcroXmJS3StZ2nIi8JODq"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/constants/banners.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/localStorage/index.ts");
			const m = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				p = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				b = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				});
			var h = n("./src/reddit/icons/svgs/CirclePost/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/components/CreatePostBanner/index.m.less"),
				v = n.n(x);
			const y = Object(a.b)(null, e => ({
				showToast: () => {
					e(Object(i.f)({
						kind: g.b.SuccessCommunity,
						text: s.fbt._("Dismissed", null, {
							hk: "3YBtnR"
						})
					}))
				}
			}));
			class E extends o.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(u.kb)(d.a.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
							visible: !1
						}), this.props.showToast(), this.props.sendEvent(p())
					}, this.createPost = () => {
						this.props.sendEvent(b())
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						subreddit: e
					} = this.props, t = !Object(u.f)(d.a.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(m()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? o.a.createElement("div", {
						className: v.a.banner
					}, o.a.createElement("button", {
						className: v.a.closeContainer,
						onClick: this.closeBanner
					}, o.a.createElement(f.a, {
						className: v.a.close
					})), o.a.createElement(h.a, {
						className: v.a.postIcon
					}), o.a.createElement("div", {
						className: v.a.heading
					}, s.fbt._("Create the ideal {subredditDisplayText} post", [s.fbt._param("subredditDisplayText", ` ${e.displayText} `)], {
						hk: "3ZioIj"
					})), o.a.createElement("div", {
						className: v.a.text
					}, s.fbt._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), o.a.createElement("br", null), s.fbt._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), o.a.createElement("div", {
						className: v.a.buttonWrapper
					}, o.a.createElement(l.m, {
						className: v.a.button,
						target: "_blank",
						href: `/${e.displayText}/submit`,
						onClick: this.createPost
					}, s.fbt._("Create Post", null, {
						hk: "sSUAI"
					})))) : null
				}
			}
			t.a = y(Object(c.c)(E))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				i = n.n(a);
			class c extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(o.a)(i.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(o.a)(i.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(o.a)(this.props.hidePadding ? i.a.bodyHidePadding : i.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/Econ/Prediction/Confetti/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_30UqRfQUvAM856xCCnxuZt",
				left: "NGXhDTfdYyHsV0bMiz8c9",
				right: "_1gN69CDTTgxbquzyeJIRdg"
			}
		},
		"./src/reddit/components/Econ/Prediction/Confetti/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/reddit/components/Econ/Prediction/Confetti/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => {
				let {
					className: t,
					...n
				} = e;
				return i.a.createElement("div", l({
					className: Object(o.a)(d.a.container, t)
				}, n), i.a.createElement("img", {
					className: d.a.left,
					src: `${s.a.assetPath}/img/econ/predictions/confetti-bg.png`,
					alt: r.fbt._("Confetti", null, {
						hk: "3dmR4h"
					})
				}), i.a.createElement("img", {
					className: d.a.right,
					src: `${s.a.assetPath}/img/econ/predictions/confetti-bg.png`,
					alt: r.fbt._("Confetti", null, {
						hk: "3dmR4h"
					})
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-CreatingTournamentBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-CreatingTournamentBanner").then(n.bind(null, "./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/EmptyPredictions/index.m.less": function(e, t, n) {
			e.exports = {
				primaryText: "_1bwD7kygv4bVZM8fDgSQv8",
				mainContentWrapper: "_3-p7jwY9LowTxunslKskSz",
				mainContent: "_2ckdQlwH_QZ38t7uWKUMLo",
				backgroundPlaceholder: "s5jLEXcFLaQaE2Ck0qPJV",
				component: "_2fO9Pa6g6JYBjRFkKsbzHI"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/config.ts");
			const {
				fbt: a
			} = n("./node_modules/fbt/lib/FbtPublic.js"), i = `\n  ${o.a.assetPath}/img/econ/predictions/waiting.png,\n  ${o.a.assetPath}/img/econ/predictions/waiting@2x.png 2x,\n  ${o.a.assetPath}/img/econ/predictions/waiting@3x.png 3x,\n`;
			t.a = e => r.a.createElement("img", {
				className: e.className,
				srcSet: i,
				src: `${o.a.assetPath}/img/econ/predictions/waiting@2x.png 2x`,
				alt: a._("Snoos gazing into a crystal ball", null, {
					hk: "1XM1Zp"
				})
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.m.less": function(e, t, n) {
			e.exports = {
				"status-badge": "_2u7bIsw_LdudsW_rSs4GtE",
				statusBadge: "_2u7bIsw_LdudsW_rSs4GtE",
				live: "_2gAzDyByGNwe-USVOIr2v3",
				ended: "DDaz64wxy8rIcPfzwEXfB"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.m.less"),
				d = n.n(c);
			const l = e => {
				let {
					className: t,
					status: n
				} = e;
				const r = [i.a.Live, i.a.LiveInProgress].includes(n),
					c = n === i.a.Closed;
				return o.a.createElement("span", {
					className: Object(a.a)(d.a.statusBadge, t, {
						[d.a.live]: r,
						[d.a.ended]: c
					})
				}, r && s.fbt._("Live", null, {
					hk: "1hUJkn"
				}), c && s.fbt._("Ended", null, {
					hk: "3oH4rs"
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				c = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const d = e => {
				let {
					tournamentId: t,
					className: n
				} = e;
				const r = Object(a.e)(e => Object(c.a)(e, t));
				return r && r.tokenIconUrl ? o.a.createElement("img", {
					className: n,
					alt: s.fbt._("Tournament token", null, {
						hk: "3cgDZy"
					}),
					src: r.tokenIconUrl
				}) : o.a.createElement(i.a, {
					className: n
				})
			}
		},
		"./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/experiments/econ/index.ts");
			const i = e => {
					let {
						className: t
					} = e;
					return r.a.createElement("svg", {
						className: t,
						fill: "none",
						height: "20",
						viewBox: "0 0 20 20",
						width: "20",
						xmlns: "http://www.w3.org/2000/svg"
					}, r.a.createElement("path", {
						d: "m11.8373 7.17254c-.0381-2.14805-1.2066-4.26563-3.12608-5.6611-.7001 1.14224-1.0571 2.46166-1.02847 3.80108.02863 1.33941.44168 2.64237 1.18995 3.75365",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m8.87285 9.06578c-.03047.01981-.17672-.13254-.39609-.43722-.29757-.44864-.53424-.93481-.70383-1.44575-.25319-.76597-.37124-1.57014-.34887-2.37656.0185-.47751.08381-.95205.195-1.4168.12075-.49951.29704-.98393.52559-1.44421.04547-.10166.09632-.20083.15234-.29708l.16453-.28792c.0182-.03202.04253-.06014.07159-.08276.02907-.02261.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03655.00458.07183.01631.10384.03453l.02742.01828c.38016.28079.73681.5921 1.0664.93082.30177.31806.57737.65991.82417 1.02223.4117.60733.7253 1.27566.9293 1.98046.1388.46809.2126.95301.2194 1.44118 0 .34277-.0396.52863-.0731.52863-.0336 0-.0762-.18281-.1402-.50731-.0876-.45579-.214-.90328-.3778-1.33757-.2445-.64356-.5745-1.25128-.9811-1.8068-.2427-.32728-.50846-.63681-.79524-.92625-.31294-.30838-.64797-.59352-1.00242-.85313l.41742-.08226-.15234.2666c-.05268.08874-.10048.18028-.1432.27422-.20887.42313-.37327.8668-.49055 1.32387-.10969.42749-.18107.8639-.21328 1.30406-.04198.75145.02993 1.50493.21328 2.23488.31535 1.25684.78762 1.94696.70078 1.99875z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m15.6001 5.87727c-.8963-.80295-1.9238-1.44605-3.0378-1.90125-.8516-.34734-1.7854-.585-2.69037-.41742-1.00242.18586-1.84945.84246-2.58984 1.55086-.89883.86988-1.70321 1.87383-2.14196 3.04687-.34277.91407-.45703 1.93177-1.02984 2.72697-.44789.6292-1.12582 1.0481-1.73672 1.5234s-1.19894 1.0664-1.32691 1.8281c-.134064.7983.2666 1.5905.76172 2.2349.43629.6039.99546 1.1085 1.64074 1.4808.65104.3698 1.41006.5028 2.14805.3763 1.28273-.2544 2.18918-1.3711 3.33937-2.0018.91406-.4966 1.98046-.6657 2.93876-1.0664 1.7105-.7343 3.0622-2.1139 3.7613-3.8391.6813-1.72672.7474-3.63533.1874-5.40512",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m11.9928 5.88635c-.9902.47227-2.10078.77238-3.13214.36105-.44942-.17824-.91407-.48597-.99633-.96281-.08836-.53777.35648-1.01156.81047-1.31472 1.4823-.98567 3.3333-1.06641 5.0669-.66422 1.7337.40218 3.2663 2.19375 3.4842 3.95941 1.1699.23309 1.6178 1.90582 1.4396 3.08494-.0975.649-.4647 1.2416-.5027 1.8967-.0595 1.042.7175 1.9591.8302 2.9966.0424.4433-.0361.8899-.2271 1.2922-.1909.4024-.4873.7455-.8576.993-.7449.4829-2.1998.8653-2.9661.4174-.5408.5408-1.0664.8531-1.953.5621-.4365-.1597-.8123-.4516-1.075-.835s-.3992-.8392-.3906-1.3039c.0251-.4645.1826-.9122.4539-1.2901.2713-.378.645-.6704 1.0772-.8427-.118-.6928-.0689-1.4038.143-2.0739.212-.6701.5808-1.2799 1.0757-1.7789.4357-.4311.6475-1.2568.8623-1.82809.3184-.84551.0792-1.3589-.7115-1.79461-.7906-.4357-.6322-.91406-1.5356-.93234",
						fill: "#7e53c1"
					}), r.a.createElement("path", {
						d: "m2.93455 11.5232c-.76172.5652-1.73063 2.1861-1.73063 2.1861-.335154.9887-.09293 2.174.67184 2.8839.30469.2803.66879.4814.97347.7617.24375.2209.4479.489.72973.6581.29688.1598.6324.2336.96891.2133 1.02679-.0183 1.96523-.5515 2.83207-1.1014.52711-.3337.74496-.3748 1.08469-.8973.33972-.5226.44179-1.2508.08074-1.7596-.10551-.1489-.24341-.2718-.40332-.3597s-.33766-.1383-.51989-.1476c.14706-.1759.25646-.3801.32145-.5999.06499-.2199.08417-.4507.05637-.6783-.03221-.2274-.1238-.4424-.26556-.6232-.14175-.1808-.32865-.321-.54187-.4066-.21517-.0769-.44922-.0833-.66831-.0184s-.41185.1978-.55044.3795c-.12035-.4571-.26812-.9415-.66117-1.1929-.39304-.2514-.95672-.1706-1.36043.0899s-.73429.2133-1.01156.6094",
						fill: "#ff85c6"
					}), r.a.createElement("g", {
						fill: "#000"
					}, r.a.createElement("path", {
						d: "m12.0369 5.96144c.0076.01828-.0975.08074-.3047.18129-.1051.04875-.2422.09598-.4022.15234-.1874.06167-.3781.11253-.5713.15235l-.1691.03351-.1813.01524-.1904.02133-.2011.00761c-.29982.01193-.59992-.01521-.89273-.08074-.34868-.0711-.67773-.21717-.96434-.42809-.33198-.24583-.57949-.58862-.7084-.98109-.00992-.03112-.01206-.0642-.00622-.09634.00585-.03215.01949-.06236.03974-.088l.18129-.22699.09293-.11578c.03351-.03656.06855-.0716.10359-.10816l.21176-.21633.23613-.20109c.33521-.27221.70445-.49959 1.0984-.67641.86515-.37673 1.79855-.5717 2.74215-.57281.2458 0 .4946.00761.7465.02285.1249.01066.2514.02437.3778.03656l.3885.06703c.5231.11861 1.0247.31749 1.4869.58957.4807.27702.916.62643 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1606.44653.2128.92481.1524 1.39547l-.2225-.32449c.3024.07237.582.21897.8136.42656.2182.19639.3962.43337.524.69773.2368.4925.3602 1.03182.3611 1.57828.0036.26324-.0198.52618-.0701.78458-.0515.2498-.1265.4941-.224.7297-.1751.4479-.3458.8471-.3351 1.231.0236.4021.1338.7945.323 1.1502.1736.3762.3762.748.5149 1.1486.0732.1995.1243.4064.1523.617.025.2054.025.4131 0 .6185-.049.3813-.1783.7479-.3793 1.0756-.1803.2992-.4198.5584-.7038.7617-.2515.1695-.5267.3009-.8166.39-.4515.1462-.9263.2072-1.4.1798-.2998-.0157-.5927-.0952-.8593-.2331-.0441-.0259-.0837-.0472-.1142-.0701l-.0747-.064c-.0381-.035-.0548-.0564-.0487-.064s.0335 0 .0792.0168l.0838.0366c.0335.0137.0746.0259.1203.0426.265.0859.5427.1261.8212.1188.4422-.0126.879-.1002 1.2919-.2589.253-.0934.4915-.2222.7083-.3824.2336-.1832.4283-.4111.5729-.6703.1596-.2843.2582-.5987.2894-.9232.0316-.3501-.0206-.7025-.1523-1.0284-.131-.3519-.3321-.7038-.5256-1.0953-.2303-.4174-.366-.8802-.3976-1.3559-.0049-.2555.0316-.5102.1081-.7541.0701-.2376.1524-.457.2407-.6779.083-.2069.1462-.4211.1889-.6399.0401-.2216.0575-.44666.0518-.67179-.0025-.45984-.1065-.91345-.3046-1.32843-.089-.19841-.2208-.37466-.386-.5161-.1651-.14144-.3595-.24457-.5692-.30199-.0707-.01706-.1324-.05965-.1735-.11957s-.0585-.13291-.049-.20492c.0449-.37936.0001-.76396-.131-1.12278-.1711-.47191-.4347-.90491-.7754-1.27359-.3334-.36724-.7207-.68161-1.1487-.93234-.4116-.24365-.858-.42295-1.3238-.53168l-.3504-.06704-.352-.0396c-.2346-.0193-.4671-.02946-.6977-.03047-.8711-.0115-1.7356.15167-2.5426.47988-.69944.29292-1.31358.75772-1.78547 1.35129l.03199-.18738c.09268.31809.28096.59997.5393.80742.23935.19093.5167.32857.81351.40371.26464.07357.53739.114.81197.12035h.1874l.1798-.00762.1721-.00761.163-.01981c.2118-.01828.3976-.06246.5607-.08988.163-.02742.3046-.06856.4082-.0975.2194-.05942.3398-.08379.3474-.06551z"
					}), r.a.createElement("path", {
						d: "m15.1617 6.80064c.032-.01066.16.18738.2529.60938.0533.25693.0661.52062.0381.78152-.0428.34276-.1325.678-.2666.99633-.159.38683-.3724.749-.6338 1.07553-.2727.3504-.5713.684-.8318 1.0664-.1345.1968-.2591.4001-.3732.6094-.1109.2057-.1964.4241-.2544.6505-.126.4741-.116.9741.0289 1.4427l.0549.1523.0655.1524v.0107c.0153.035.0235.0728.0241.1111s-.0063.0763-.0205.1118c-.0142.0356-.0352.068-.062.0954-.0268.0273-.0587.0491-.094.064l-.0228.0092c-.4112.1591-.7588.4486-.9897.8242s-.3322.8166-.2885 1.2553c.0443.3877.1928.7562.4296 1.0664.21.2635.5015.4499.8288.5301.0736.0194.1484.0342.2239.0442.0792.0102.1564.0183.2316.0244.1384.0097.2774.0097.4159 0 .2139-.0066.4231-.0652.6093-.1706.3047-.1874.4007-.3977.4434-.3702.0167.0076.0091.0655-.029.166-.0649.1473-.1623.2781-.2849.3824-.2014.1636-.4437.2689-.7007.3047-.1541.0256-.31.0389-.4662.0396-.0823 0-.1656 0-.2499 0-.0935-.0045-.1866-.0152-.2787-.032-.4244-.0768-.8101-.2954-1.0939-.62-.3157-.3695-.521-.8204-.5926-1.3011-.0783-.5443.0291-1.0992.3047-1.5752.2866-.522.7517-.9233 1.3101-1.1304l-.1645.4022-.0838-.1858c-.0228-.064-.0487-.1265-.0701-.192-.1795-.573-.1895-1.1856-.0289-1.7641.0739-.272.1819-.5336.3215-.7785.1288-.2228.2697-.4385.4219-.646.2956-.4067.6231-.7464.8943-1.06636.2517-.28403.4648-.60009.6337-.93996.1414-.27918.2488-.57429.32-.87903.0485-.23077.0679-.4667.0579-.7023-.0198-.38695-.0732-.6109-.0305-.62461z"
					}), r.a.createElement("path", {
						d: "m11.7475 15.5359c.0397.0198-.0121.1751-.0487.457-.0497.3816-.0079.7696.1219 1.1319.0832.2572.2266.4908.4181.6816.1916.1907.4258.3331.6833.4153.2964.1041.6157.1251.9232.0609.3275-.0754.6263-.2436.8608-.4844.0439-.0439.1008-.0725.1623-.0816.0614-.009.1242.0019.1789.0313l.0229.0122.131.0716c.3301.1294.6855.1815 1.039.1523.3483-.0224.6927-.0874 1.0252-.1935.2948-.0892.572-.2283.8196-.4113.2096-.1663.3885-.3678.5287-.5957.2115-.3484.3397-.741.3747-1.1471.0275-.2879.0153-.457.0595-.4677.0441-.0107.1233.1523.1675.457.0501.4566-.033.918-.2392 1.3285-.1429.2883-.3393.5468-.5789.7617-.2813.2401-.6046.426-.9536.5484-.3748.137-.7663.2231-1.1639.256-.4489.0469-.9024-.017-1.3209-.1859-.07-.0335-.1371-.0746-.2056-.1112l.3626-.0381c-.3113.3274-.7135.554-1.1548.6505-.409.0775-.8316.0374-1.2188-.1158-.1777-.0673-.3469-.1553-.5042-.262-.1473-.1097-.279-.2388-.3915-.3839-.2342-.2994-.39-.6525-.4534-1.0273-.0633-.3748-.0321-.7595.0908-1.1192.1112-.291.2346-.4083.2635-.3915z"
					}), r.a.createElement("path", {
						d: "m12.5288 4.12384c.0335.12188-.6551.38696-1.2964.98567-.6414.59871-.9766 1.24922-1.0939 1.20504-.0533-.01981-.0411-.2209.0792-.51797.1677-.38261.4134-.72603.7214-1.00828.3079-.28226.6714-.49715 1.0672-.63094.3062-.09902.5073-.08836.5225-.03352z"
					}), r.a.createElement("path", {
						d: "m11.1488 3.92917c.0243.12492-.6734.33058-1.32543.89273s-.98262 1.20199-1.10145 1.15781c-.05332-.0198-.04265-.21937.07922-.51187.171-.37717.42374-.71159.73992-.97903.31619-.26744.68794-.4612 1.08824-.56726.3107-.0716.5088-.04723.5195.00762z"
					}), r.a.createElement("path", {
						d: "m16.3803 10.1901c-.1097-.067.3915-.97041.5347-2.19678s-.1005-2.22269.0229-2.26078c.0533-.01676.1935.2148.3047.63223.0647.24543.1066.49635.1249.74953.0464.62313-.0318 1.24927-.23 1.84183-.0799.24049-.1819.47305-.3047.69469-.2118.37938-.4053.56978-.4525.53928z"
					}), r.a.createElement("path", {
						d: "m18.9885 16.1546c-.064-.0137-.0412-.2773-.1036-.6749-.0645-.5111-.2722-.9936-.5992-1.3918-.327-.3981-.7599-.6957-1.2488-.8583-.3793-.1356-.6413-.163-.6429-.23-.0015-.0671.2697-.1402.7191-.0686.5932.102 1.1302.4135 1.5132.8779.383.4643.5866 1.0507.5739 1.6525-.0167.4555-.1538.7069-.2117.6932z"
					}), r.a.createElement("path", {
						d: "m14.8916 15.5424c0 .0549-.2575.0945-.6475-.0213-.5113-.1635-.9518-.4959-1.2494-.9426-.2976-.4468-.4345-.9814-.3882-1.5162.0426-.4038.1767-.6216.2285-.6094s.0411.2513.0792.6094c.0371.4555.1895.8941.443 1.2745.2535.3803.5996.6898 1.0058.8994.3138.1721.5377.2483.5286.3062z"
					}), r.a.createElement("path", {
						d: "m17.5289 17.9844c.0198.0518-.1813.1919-.5546.3047-.2195.0627-.4453.1005-.6733.1127-.2821.0127-.5646-.0104-.841-.0685-.5039-.1057-.972-.3398-1.3589-.6795-.2879-.2651-.4021-.4799-.3625-.5164.0396-.0366.2376.0883.5454.2681.3936.2324.8213.4016 1.2675.5012.2454.051.4945.082.7449.0929.2078.0059.4158.0008.6231-.0152.358-.029.5896-.0625.6094 0z"
					}), r.a.createElement("path", {
						d: "m2.90817 17.6644c.02743-.0336.16758.0441.422.1447.35517.1372.73285.207 1.11363.2056.2607-.0006.52062-.0286.77543-.0837.29447-.0691.58245-.1634.86074-.2819.6451-.2903 1.25785-.6478 1.82813-1.0664.3184-.2194.63527-.4357.95215-.6337.16005-.1033.32643-.1964.49816-.2788.16632-.0783.33786-.145.5134-.1996.33819-.1066.66119-.1691.94909-.2316.2657-.0562.5281-.1269.7861-.2117.9461-.291 1.3894-.7419 1.4503-.6856.0274.0229-.0411.1783-.2529.39-.3054.2895-.6618.5198-1.0511.6795-.2631.1148-.5339.2111-.8105.2879-.2925.0838-.5957.1615-.8943.2712-.1517.0544-.29977.1185-.44329.1919-.15014.0784-.29562.1654-.43571.2605-.30468.1966-.60937.4114-.92929.6323-.60607.446-1.26645.8131-1.96524 1.0923-.31459.118-.64019.2042-.97195.2574-.29262.0427-.58936.0493-.8836.0198-.42771-.0359-.83949-.1789-1.19742-.4159-.24527-.1751-.33668-.3168-.31383-.3442z"
					}), r.a.createElement("path", {
						d: "m6.225 5.96731c.03504.03047-.11882.24832-.27269.70688-.15387.45855-.32906 1.14257-.64289 1.98046-.35795 1.00905-.94757 1.92005-1.72149 2.65995-.44789.4128-.98261.7419-1.41984 1.1365-.22006.1952-.41046.4216-.5652.6718-.15641.2581-.27396.5379-.34886.8303-.1496.5767-.109 1.1864.11578 1.7382.2033.5106.57035.9393 1.04355 1.2188.43841.246.94.3563 1.44117.3168.4522-.035.89467-.1495 1.30711-.3382.62316-.2632 1.19822-.6282 1.70168-1.0801.36106-.3214.55149-.521.585-.4921.03352.029-.09902.2682-.42351.6521-.46912.5411-1.04342.9812-1.68797 1.2934-.4486.2367-.93728.3881-1.44117.4463-.60087.0697-1.20871-.0451-1.74282-.329-.59015-.3284-1.05149-.8472-1.308628-1.4717-.279975-.664-.334037-1.4015-.153867-2.0993.089401-.3498.231157-.6842.420465-.9917.18513-.296.41307-.563.67641-.7922.24386-.2077.49809-.403.76172-.585.24527-.1767.47683-.3473.68707-.5286.39554-.3476.74199-.7474 1.02984-1.18832.25632-.38967.48001-.79986.66879-1.22636.34278-.78153.57586-1.46707.81199-1.91344.23614-.44637.45551-.63984.47836-.61547z"
					}), r.a.createElement("path", {
						d: "m7.61001 17.0368c-.01371-.0229.07312-.096.22852-.227.21967-.1779.4162-.3826.585-.6094.11178-.1553.19769-.3276.25441-.5103.06503-.2047.08222-.4215.05027-.6338-.0336-.226-.14711-.4325-.31992-.5819-.08594-.0808-.18875-.1414-.30099-.1775-.11225-.0361-.23111-.0467-.34799-.0312-.04085.0077-.08309.0029-.12121-.0136-.03812-.0166-.07037-.0443-.09255-.0795-.02219-.0351-.03328-.0762-.03183-.1177.00144-.0416.01535-.0817.03992-.1153.15099-.206.25783-.4409.31383-.6901.0588-.2522.04721-.5157-.03352-.7617-.06006-.1925-.16964-.3659-.31775-.5028s-.32957-.2325-.52623-.2772c-.18409-.0295-.37273-.0078-.54539.0625-.16009.0641-.29709.1751-.39305.3184v.0076c-.02289.0359-.05711.0632-.09724.0776-.04014.0144-.08391.0149-.12442.0017-.0405-.0133-.07544-.0397-.0993-.075s-.03529-.0776-.03247-.1201c.00897-.1905-.02689-.3804-.10468-.5545s-.19534-.3275-.34321-.4479c-.2408-.1906-.54594-.2806-.85161-.2514-.20637.0174-.40675.0781-.58804.1783-.12797.07-.195.1203-.21176.1035-.01676-.0167.02437-.0914.14168-.2026.17711-.1566.39359-.2619.62613-.3047.16814-.034.3411-.0371.51035-.0091.2035.0334.39676.1126.5652.2316.2034.1439.36838.3356.48046.5582.11209.2226.16786.4693.16243.7184l-.35801-.1097c.1399-.2193.34103-.3927.5785-.4989.23747-.1061.50086-.1403.75756-.0983.27463.053.52991.1791.73901.3648.2091.1858.36429.4245.44927.691.10765.3236.12191.671.04113 1.0024-.07296.3061-.21004.5932-.40219.8425l-.20109-.3306c.17731-.0238.3577-.0071.52763.0488s.32497.1497.45346.2741c.2323.2134.37995.5033.4159.8166.02715.2664-.00994.5354-.10816.7846-.08209.2088-.20017.4017-.34887.5697-.20103.2307-.44204.4232-.71145.5683-.18586.099-.29707.131-.30773.1112z"
					}), r.a.createElement("path", {
						d: "m1.63036 14.9239c-.05028-.0671.02742-.2026.10054-.4037.0973-.242.14496-.501.14016-.7618-.00623-.1382-.03082-.275-.07313-.4067-.02438-.0824-.06591-.1587-.12187-.224-.04305-.0401-.0954-.0689-.15235-.0837-.05179-.0153-.10207-.0122-.13253-.0381-.03047-.0259-.03657-.0899.03503-.1646.05278-.0478.11654-.0819.18564-.0991.06909-.0173.14139-.0173.21046.0001.09781.0283.18881.0762.26741.1409s.14313.1448.18962.2354c.14254.2601.1987.5588.16036.8529-.03833.2941-.16918.5684-.37364.7833-.20414.2026-.39305.23-.4357.1691z"
					}), r.a.createElement("path", {
						d: "m3.30922 14.9463c.00761-.0838.2148-.1218.47836-.2529.15103-.0716.29108-.1645.41589-.2757.14195-.126.25387-.2821.32754-.457.02539-.0616.03666-.1281.033-.1946-.00367-.0666-.02218-.1314-.05417-.1899-.03199-.0584-.07666-.1089-.13073-.1479-.05407-.0389-.11616-.0652-.18173-.077-.24375-.0457-.42504.0685-.48598.0152-.02894-.0243-.02742-.0959.04266-.1889.10853-.1306.26266-.215.43113-.2361.1238-.0188.25029-.0073.36868.0335.13848.0489.26222.1322.35953.2422.10996.1238.18329.2757.21175.4388.02862.1723.0102.3491-.05332.5119-.09984.2397-.25932.45-.4633.6108-.20397.1607-.44567.2667-.70213.3078-.15219.0271-.30857.0187-.45703-.0244-.09445-.035-.1432-.0777-.14015-.1158z"
					})), r.a.createElement("path", {
						d: "m3.53778 4.27334c.35264.00703.70225-.06643 1.02223-.2148.5652-.30469.58653-1.05879.69317-1.70473l-.68707-.57586-.29098-.29097c-.40265-.06883-.81671-.01302-1.18676.15996-.11314.03509-.21026.109-.27422.20871-.04419.13436-.03491.28058.0259.40828.20871.67336.43723 1.34824.69773 2.00941z",
						fill: "#fcff78"
					}), r.a.createElement("path", {
						d: "m6.92588 3.76312-1.45336-1.21875c-.08836.62309-.10817 1.28121-.66879 1.66207-.31535.21481-.73582.28793-1.16848.30469.28754.71505.63298 1.40543 1.03289 2.06426.56368.13254 1.12582.15234 1.6636-.21176.81047-.54691.7084-1.71844.59414-2.60051z",
						fill: "#34e2ac"
					}), r.a.createElement("path", {
						d: "m8.74027 5.59247c-.30468-.5591-.8059-.98262-1.2934-1.39242l-.24832-.20719c.0975.87293.10665 1.89668-.59871 2.47558-.54843.45704-1.14867.49665-1.75804.39.19381.29675.40386.58258.62918.85618.30468.35953.64593.70839 1.0923.8455.39305.12036.81809.06246 1.21875 0 .23991-.04098.4642-.14628.64899-.30468.23423-.14822.41471-.36769.51492-.62614.19905-.67984.12528-1.4105-.20567-2.03683z",
						fill: "#4ab6ff"
					}), r.a.createElement("path", {
						d: "m3.63372 1.50807c-.00915.02133-.07922 0-.20262.01066-.17338.01719-.33517.09486-.45703.21938-.08963.10119-.15545.22118-.19262.35115s-.04475.26662-.02219.3999c.03199.32297.21176.66727.45703 1.05117.47989.78 1.04203 1.71387 1.65903 2.75438l.47226.79828c.14562.26333.3215.50874.52407.73125.09393.10008.20166.18626.31992.25594.12269.06894.2545.12023.39152.15234.29024.05902.59075.04276.87293-.04723.14265-.04381.27929-.10522.40676-.18281.12585-.08503.24364-.18141.35191-.28793.21371-.19425.37641-.43804.47379-.70992.18434-.52102 0-1.09231-.33515-1.52344-.33516-.43113-.79067-.79371-1.1959-1.13648l-1.15782-.94149c-1.42593-1.13953-2.32629-1.82812-2.28515-1.89668.04113-.06855 1.02832.50578 2.52586 1.56914.37324.26661.78.56368 1.20961.89121.42961.32754.91406.67336 1.32082 1.18981.21796.26961.37913.58054.47379.91406.0477.17942.07177.36431.0716.54996-.00338.19142-.03469.38131-.09293.56368-.12117.36293-.33056.6901-.60938.95214-.1406.13226-.29366.25062-.45703.35344-.16878.10363-.34998.18553-.53929.24375-.37848.12012-.78173.13955-1.17001.05637-.19307-.04362-.37883-.11494-.55148-.21176-.16901-.097-.32297-.21811-.45703-.35953-.23145-.25682-.43095-.54072-.59414-.84551l-.45703-.81047c-.5911-1.05574-1.11668-2.01093-1.55086-2.81683-.2209-.40067-.41438-.82266-.42047-1.23551-.0138-.17693.01449-.35461.08254-.51851.06804-.16391.17393-.30937.30898-.4245.08602-.06939.18569-.1199.29251-.14825.10683-.02835.21842-.03389.32753-.01628.15844.03047.21328.09141.20567.10512z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m4.46393 6.19913c-.07008.03961-.40371-.44332-.88664-1.25836-.24223-.40675-.52102-.8973-.82266-1.44574-.07617-.13558-.15234-.27879-.22395-.43722-.07862-.16703-.13841-.34229-.17824-.52254-.04674-.20918-.04674-.4261 0-.63528.05176-.237.17898-.45082.36258-.60937.19251-.15305.43201-.23486.67793-.23156.21542.00414.42722.05618.62004.15234.16671.07743.32497.17188.47226.28184.13711.10359.25747.20261.38086.30468.4875.38848.91407.74496 1.27969 1.05117.71906.60938 1.13801 1.02223 1.09078 1.08622-.04722.06398-.55605-.23157-1.3391-.76172-.39152-.26356-.85008-.58653-1.35586-.95215-.23758-.19065-.49262-.35846-.76172-.50121-.24527-.11426-.53929-.11578-.69164.01676-.08628.07832-.14594.18165-.17062.29554-.02806.12849-.02806.26152 0 .39.07188.29274.18147.5749.32601.83942.2727.55757.51188 1.0664.70535 1.49144.38086.85617.585 1.40766.51493 1.44574z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m3.32259 4.185c.04265-.05027.22089.06856.50425.05637.17023-.01048.33705-.05232.49207-.1234.09475-.04162.18639-.08999.27422-.14473.08767-.05455.16761-.12065.23766-.19652.24239-.29049.364-.66295.33973-1.04051-.00975-.12051-.03484-.23928-.07465-.35343-.02743-.08836-.03809-.15235-.01371-.16454.02437-.01218.07921 0 .15234.07161.11052.10274.19152.23319.23461.37781.06054.21354.072.43801.03351.6566-.04331.27667-.16671.53459-.35496.74191-.09867.10747-.21387.1985-.34125.26965-.11202.0622-.22989.11323-.35191.15235-.21234.07339-.43982.09174-.66117.05332-.1515-.02712-.29151-.09872-.40219-.20567-.07008-.07008-.09445-.12492-.06855-.15082z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m4.604 6.28436c.03047-.00914.0716.05637.13864.15234.03548.05467.08035.10264.13253.14168.06723.04371.1441.07037.22395.0777.05049.00737.10135.01195.15234.01371.05353.00107.10705-.00249.15996-.01067.12363-.02073.24399-.05761.35801-.10968.26973-.11881.50848-.29813.69774-.52407.18908-.22808.32585-.49485.40066-.78152.06123-.2426.09295-.49171.09445-.74191 0-.42047-.15234-.67184-.09445-.7084.02285-.01523.09141.02437.1752.13406.11597.16041.19315.34554.22546.54082.04641.28689.0428.57965-.01066.86531-.06644.35874-.2238.69444-.45703.975-.23468.28133-.54026.49486-.88512.61852-.15255.05626-.31288.08863-.47531.09598-.077.00278-.15408-.00232-.23004-.01524-.06368-.0138-.1263-.03213-.18738-.05484-.12349-.03615-.23401-.10701-.3184-.20414-.05878-.07254-.09904-.15829-.11731-.24985-.02742-.13254-.01066-.20718.01676-.2148z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m14.8962 8.86965c.8394-1.7809.3564-5.85914-2.2502-7.58672-.6194.71264-1.0159 1.59151-1.1402 2.5275s.029 1.88788.441 2.7375",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m11.9471 6.54651c-.0289.01371-.1264-.10816-.2575-.35953-.178-.36602-.3017-.75607-.3671-1.15781-.1063-.61415-.0898-1.24329.0487-1.85098.1786-.77188.5449-1.48774 1.0664-2.08406v-.00762c.0445-.05081.1065-.08307.1736-.090408.0672-.007334.1346.010798.189.050798l.2956.21937c.1024.07061.1991.14905.2894.23461.1902.16824.367.3511.5287.54692.0807.09902.1675.19347.2391.29707l.2103.30469c.0335.05179.07.10207.102.15234l.0884.16148.1691.32602c.099.21633.195.43113.2773.64441l.1081.32145c.0376.10373.0691.20953.0945.31687.2039.74383.2933 1.5144.2651 2.28516-.0097.52011-.106 1.03497-.2849 1.52344-.0465.13373-.1094.26116-.1874.37933-.0518.08227-.0884.11883-.1066.11121-.0183-.00761-.0183-.06246 0-.15234.0182-.08988.0563-.2209.0777-.39609.0863-.48239.117-.97311.0914-1.4625-.0309-.72382-.1548-1.44065-.3687-2.13282-.0269-.09929-.0594-.19695-.0975-.2925l-.1097-.29554c-.0807-.19653-.1737-.39153-.2681-.58957l-.163-.28946-.0823-.15234c-.0289-.04723-.0625-.09293-.0945-.14016l-.1843-.28031c-.0655-.09293-.1523-.17672-.2163-.2666-.1443-.1766-.3017-.34211-.4708-.49512-.0811-.07598-.1682-.14527-.2605-.20718l-.2589-.19957.3762-.05028c-.4697.52458-.8126 1.15003-1.0024 1.82813-.1534.54814-.2101 1.11883-.1676 1.68644.0747.97196.3382 1.52953.2575 1.56305z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m12.4756 10.9713c.6932-.9314.556-2.20692-.3066-2.84893-.8626-.642-2.1238-.40739-2.81708.52403-.69325.93142-.55598 2.2069.30659 2.8489.86259.6421 2.12379.4074 2.81709-.524z",
						fill: "#b8e7ff"
					}), r.a.createElement("path", {
						d: "m12.6477 11.0997c-.3495.475-.8556.8112-1.429.9491-.2925.0698-.596.0806-.8927.032-.3037-.0513-.59239-.1689-.84553-.3443-.256-.1803-.47062-.4131-.62955-.6829s-.25852-.5704-.29213-.8817c-.0368-.31289-.01301-.62995.07008-.93385.16819-.60576.55597-1.12715 1.08773-1.4625.26428-.1668.558-.28159.8653-.33821.308-.05723.6247-.04811.9289.02676s.589.21377.8353.40742c.2408.1922.4364.43511.5728.71145.1316.27014.2083.56376.2254.86379.036.59244-.1401 1.17834-.4966 1.65294zm-.3458-.2575c.1408-.1938.2465-.4109.3123-.6413.0626-.22856.0807-.46699.0533-.70234-.0262-.22746-.1011-.4466-.2197-.64247-.1185-.19586-.278-.36385-.4674-.4925-.1832-.12067-.39-.20124-.6066-.23642s-.4382-.02418-.6502.03228c-.4264.11149-.80187.3653-1.06425.71939s-.39591.7872-.37845 1.22756c.00711.2192.06045.4345.15654.6316.09609.1972.23275.3718.40104.5125.17772.143.38412.2461.60512.3023.2211.0562.4516.0643.6761.0237.2336-.0413.457-.1271.6581-.2529.2016-.1291.379-.2925.5241-.4829z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m11.734 10.3357c.3564-.72954.0761-1.59909-.6262-1.94222-.7023-.34314-1.56058-.02993-1.91701.69958-.35643.7295-.07606 1.59904.62623 1.94214.70228.3432 1.56058.03 1.91698-.6995z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m10.6281 9.66417c.0662-.43647-.2192-.84166-.63736-.90502-.41814-.06335-.81073.23912-.87686.67559s.21923.84166.63738.90506c.41814.0633.81074-.2392.87684-.67563z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m11.5831 11.1074c.3374 0 .6109-.2851.6109-.6368s-.2735-.6368-.6109-.6368-.6109.2851-.6109.6368.2735.6368.6109.6368z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m12.8948 6.65901c-.0594-.02894.0366-.31687.1158-.78304l.0305-.18282.0228-.20109c.0214-.13711.0244-.28793.0366-.44332.0143-.33972.0097-.67997-.0137-1.01918-.0458-.61737-.1478-1.22927-.3047-1.82812-.1204-.45704-.2224-.74801-.1661-.78.0564-.032.2529.2148.4571.67793.2577.60474.4122 1.24843.457 1.90429.0235.35959.0148.72055-.0259 1.0786-.0259.16605-.0427.32449-.0807.46922l-.0503.21023-.061.19043c-.1706.48293-.3732.73277-.4174.70687z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m1.41844 16.2901c.07617-.0472.30469.2834.83789.5652.30658.1598.63944.263.98262.3047.42089.046.8467.0098 1.25379-.1066.88359-.2438 1.57828-.7617 2.06425-1.1639.48598-.4022.7861-.6734.85008-.6201.06399.0534-.12797.4129-.56519.9141-.26033.2951-.55316.5598-.87293.7891-.40061.2889-.84865.5054-1.32387.6399-.48542.1386-.99614.1641-1.49297.0746-.40609-.0764-.78949-.2442-1.12125-.4905-.222-.1628-.40729-.3704-.54387-.6094-.08836-.1676-.10054-.2773-.06855-.2971z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m1.2085 15.8394c.70843.486 1.55388.7323 2.4125.703s1.68528-.3328 2.3589-.8661c.23004-.2064.4744-.3963.73125-.5682.12943-.0849.27578-.1405.42889-.1632.15311-.0226.30931-.0116.45775.0322.15254.0661.2835.1737.37801.3105s.14881.2973.15672.4634c.00895.3331-.1037.658-.31688.9141-.21295.2544-.46491.4734-.74648.6489-.83941.5637-1.8525.9933-2.84426.7998-.54082-.1051-1.02984-.3884-1.50515-.6657-.21368-.1179-.41747-.2529-.60938-.4037-.3144-.2606-.5528-.6011-.69012-.9857",
						fill: "#ff85c6"
					}), r.a.createElement("path", {
						d: "m13.3224 5.51322c-.0032.29968-.0637.59597-.1782.87293-.0542.13337-.1411.25098-.2526.34202-.1116.09103-.2442.15259-.3857.179-.3321.03351-.6445-.22242-.7983-.54082-.134-.3332-.1968-.69074-.1844-1.04965-.0259-.98719.061-2.0216.4571-2.92348.1523-.35496.457-1.05422.7845-.45703.2514.45703.3596 1.10754.4479 1.62856.1099.64328.1467 1.29692.1097 1.94847z",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m2.43311 1.8313c.4357-.66727 5.62605 6.34054 5.62605 6.34054l-.4677.41742-1.76566-.26507z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m15.2968 5.96724c1.0832.9293 1.5783 2.68734 1.1944 4.06296 1.4335-1.13034 1.0999 1.88 0 2.9631.2803-.1081.844.2057 1.0222.4479.163.2547.2526.5493.259.8516.0566.6477-.0536 1.2991-.3199 1.8921-.6414 1.4062-2.9829 1.4808-3.6776.972-.1356.5332-.5698.9658-1.3071 1.106.9262.5225 1.7184.4951 2.4253-.3047.8805.2544 2.3628 0 3.1337-.4875s1.2584-1.4579 1.0664-2.3522c-.1341-.6093-.55-1.1197-.7389-1.7154-.227-.7145-.1112-1.4899.0336-2.2257.1447-.7358.3168-1.4884.195-2.22879-.1219-.74039-.6201-1.47622-1.3559-1.62094.0186-.79515-.2157-1.57567-.6691-2.22917-.4533-.6535-1.1024-1.14624-1.8537-1.40728l.5515 2.145",
						fill: "#7e53c1",
						opacity: ".67"
					}), r.a.createElement("path", {
						d: "m14.8307 4.86442c.113 1.0501.0543 2.11159-.1737 3.14285-.2483 1.02375-.7724 1.69559-1.5889 2.96003-1.3666 2.1145-4.16206 4.2123-4.16206 4.2123l-.21024 1.106s3.0012-.914 3.9229-1.5539c.1995-.361.2909-1.2187.3382-1.6316.0895-.7608.3635-1.4883.7982-2.1191.3443-.4997.7298-.8927 1.0375-1.41678.4246-.75116.6314-1.60579.5972-2.46797-.0544-.8398-.2078-1.67024-.457-2.47406",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m13.8086 14.0707c-.0274 0-.0761-.0807-.1173-.2514-.0508-.2446-.058-.4963-.0213-.7434.0512-.3631.1538-.717.3047-1.0512.1823-.399.3931-.7844.6307-1.1532.2422-.387.4677-.7511.6444-1.09233.1603-.2979.29-.61131.387-.93539.1523-.55148.1173-.9232.1858-.93387.0274 0 .0731.08227.1097.25442.0428.24545.0428.49646 0 .74191-.0594.36166-.1686.71336-.3245 1.04508-.1865.39658-.3992.78038-.6368 1.14868-.2422.3854-.457.751-.6368 1.0938-.156.299-.2801.6135-.3702.9385-.1417.5545-.0883.9262-.1554.9384z",
						fill: "#c676ff"
					}), r.a.createElement("path", {
						d: "m14.9072 14.0231c-.0564 0-.1326-.1752-.1524-.4829-.0454-.8133.2322-1.6116.7724-2.2212.2102-.2255.3824-.3199.4235-.2803.0914.0868-.3458.652-.6185 1.4579s-.3047 1.5143-.425 1.5265z",
						fill: "#c676ff"
					}), r.a.createElement("path", {
						d: "m6.19165 7.1707c-.01219-.06246.12949-.13559.32297-.2666.24618-.1607.45882-.36765.62613-.60938.15866-.24732.26783-.52308.32144-.81199.04723-.22852.05942-.38848.12036-.40067.06093-.01218.15234.13407.18738.41133.03174.3671-.06183.73413-.26546 1.04123-.20362.30709-.50528.53614-.85579.64979-.27117.07312-.44637.04266-.45703-.01371z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m4.43023 4.76671c0-.12035.43114-.18434.76172-.50273.33059-.3184.43571-.72821.55758-.72668.05789 0 .11731.1234.10207.33058-.03163.27398-.1599.52771-.36178.71562-.20187.18791-.46413.2977-.73966.30966-.20567 0-.32297-.07313-.31993-.12645z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m3.40812 2.70883c.30037 0 .54387-.2435.54387-.54387s-.2435-.54387-.54387-.54387c-.30036 0-.54386.2435-.54386.54387s.2435.54387.54386.54387z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m16.4716 14.2914c.0168-.0213.0915-.0076.192.0808.1373.1344.2244.3119.2468.5027.0418.2872-.0268.5795-.192.8181-.202.2785-.4875.4856-.815.5911-.5639.1875-1.1772.1593-1.7215-.0792-.4067-.1844-.585-.4037-.5515-.4464.0336-.0427.2682.0625.6521.1523.2215.0538.4484.082.6764.0838.2721.0041.543-.0376.8013-.1234.2476-.0783.4686-.2238.6383-.4204.1276-.1591.2003-.3553.2072-.5591.0152-.3641-.1782-.5515-.1341-.6003z",
						fill: "#c676ff"
					}), r.a.createElement("path", {
						d: "m12.6798 17.3567c-.0442.0365-.1813-.0305-.3199-.2255-.1735-.264-.2528-.5787-.2251-.8933.0276-.3146.1606-.6107.3774-.8404.1691-.1691.3169-.2117.3535-.1691.0365.0427-.0229.1676-.1021.3458-.2153.4435-.2582.9512-.1204 1.4245.0412.1904.0854.3138.0366.358z",
						fill: "#c676ff"
					}), r.a.createElement("path", {
						d: "m12.6432.993331c.0549.001261.1081.019339.1524.051799l.2955.21937c.1024.0706.1992.14904.2895.23461.1902.16823.3669.3511.5286.54692.0807.09902.1676.19347.2392.29707l.2102.30468c.0335.0518.0701.10207.1021.15235l.0883.16148.1311.24223c.1523.0716.3123.15234.457.23613.4808.277.916.62641 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1365.37028.2007.76334.1889 1.15781.2065.0822.3969.20031.5622.34887.2183.19639.3963.43337.524.69773.2368.4925.3602 1.03182.3611 1.57829.0037.26323-.0198.52615-.0701.78455-.0515.2498-.1264.4941-.2239.7297-.1752.4479-.3459.8471-.3352 1.231.0236.4022.1338.7945.323 1.1502.1737.3763.3763.748.5149 1.1486.0732.1995.1243.4064.1523.617.0251.2055.0251.4131 0 .6186-.049.3813-.1782.7478-.3793 1.0755-.1265.2034-.2802.3884-.457.55-.032.032-.0625.0655-.096.0959-.2813.2401-.6047.4261-.9537.5485-.3748.1369-.7662.223-1.1639.2559-.096 0-.1935.0107-.2925.0107-.3527.0071-.703-.0598-1.0283-.1965-.2835.2425-.6235.4096-.9887.4859-.1309.0263-.2641.0396-.3976.0396-.1308 0-.2613-.0118-.39-.035-.0691-.0034-.1379-.0121-.2057-.0259-.4243-.0768-.81-.2954-1.0938-.62-.3157-.3695-.5211-.8204-.5926-1.3011-.0692-.4618-.0031-.9338.1904-1.3589-.1661.0625-.3413.1219-.5256.1737-.2925.0838-.5957.1615-.8942.2712-.15177.0544-.29985.1185-.44337.1919-.15013.0784-.29561.1654-.4357.2605-.30469.1966-.60938.4114-.9293.6323-.60606.446-1.26645.8131-1.96523 1.0923-.31459.118-.6402.2042-.97196.2574-.1751.0251-.35174.0378-.52863.0381-.11856.0001-.23704-.006-.35496-.0183-.42771-.0359-.8395-.1789-1.19742-.4159-.24527-.1736-.3382-.3168-.31535-.3427.0035-.0009.00716-.0009.01066 0-.26616-.056-.52276-.1504-.76172-.2803-.59015-.3284-1.05149-.8472-1.308629-1.4717-.285418-.6678-.341666-1.4113-.159961-2.1145.089401-.3499.231157-.6843.42047-.9918.18512-.296.41306-.5629.6764-.7922.24386-.2077.49809-.403.76172-.585.24528-.1767.47684-.3473.68707-.5286.39554-.3476.742-.7473 1.02985-1.18827.25631-.38968.48-.79987.66879-1.22637.09293-.21023.17672-.41133.25593-.60937-.11902-.16844-.22936-.34285-.33058-.52254l-.45703-.81047c-.5911-1.05574-1.11668-2.01094-1.55086-2.81684-.12458-.21556-.23059-.44134-.31688-.67488-.08052-.16829-.14184-.3451-.18281-.52711-.04675-.20918-.04675-.4261 0-.63527.05176-.237.17898-.45082.36258-.60938.19129-.15206.429-.2338.67336-.23156h.00914c.2118.00575.41978.05775.60937.15234.16882.07706.32914.17152.47836.28184.13711.10359.25746.20262.38086.30469.4875.38847.91406.74496 1.27969 1.05117.40066.34125.7084.62004.89273.81047l.41743.30773.04418.03352c.02807-.2051.06723-.40852.1173-.60938.12074-.49951.29704-.98394.52559-1.44422.04547-.10165.09632-.20082.15234-.29707l.16453-.28793c.0182-.03202.04252-.06014.07159-.08275.02907-.02262.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03654.00457.07183.01631.10383.03453l.02743.01828c.38016.28079.7368.59209 1.0664.93082.21773.22749.42123.46813.60933.72058.3091-.0716.6226-.12249.9385-.15234.2026-.61813.5268-1.18947.9537-1.68035v-.00762c.0251-.02912.0562-.05248.0911-.06852.035-.01603.073-.024358.1115-.024409zm-7.59736 2.437499c.06405-.15644.10312-.32197.11578-.49055-.02525.16638-.06397.33044-.11578.49055zm-.73125 7.08097.03351-.0076c.02133-.0397.04114-.0808.06094-.1204l-.09293.128zm-.28793.3565c.04937-.0282.10023-.0536.15234-.0762l.02285-.0351c-.03808.0092-.07312.0183-.10664.029l-.07008.0807zm-1.00395 6.8143h-.00761zm9.62049-16.910168c-.0696-.000201-.1385.014672-.2019.043598s-.1197.07122-.1652.123981v.007617c-.4115.478212-.7312 1.028242-.943 1.622462-.2316.02742-.4571.06551-.6902.11426-.1682-.21931-.3483-.42934-.5392-.62918-.33831-.34598-.70412-.6639-1.09388-.95063l-.05027-.03199c-.05671-.03237-.11923-.05323-.18401-.06141-.06478-.00817-.13053-.00349-.1935.01377-.06296.01726-.12191.04677-.17346.08684-.05155.04006-.09469.0899-.12696.14666l-.1691.28336c-.06001.09869-.11492.20038-.16453.30469-.2348.4748-.4152.97461-.53778 1.48992-.02285.08988-.04418.18129-.06246.27726l-.16301-.12187c-.19195-.195-.49359-.4677-.8973-.80438-.36715-.30468-.79981-.66726-1.28578-1.05574l-.09598-.07617c-.08531-.08684-.18586-.15539-.28945-.23918-.15921-.11881-.33023-.22091-.51035-.30469-.22066-.10615-.46202-.162328-.70688-.164529l-.00914.216329v-.223946c-.29523-.003494-.58241.096186-.81199.281836-.21874.18764-.37103.44092-.43418.72211-.0536.24029-.0536.48944 0 .72973.04217.19688.10603.38848.19043.57128.08802.24388.19657.47984.32449.70536.44027.81808.96281 1.76414 1.55238 2.81683l.45704.81199c.0716.12493.16453.28184.27421.44333-.07464.18281-.14168.33972-.20871.48902-.18354.41537-.40112.81486-.65051 1.19437-.2769.42478-.61058.80968-.99175 1.14408-.21328.1844-.44942.358-.67184.518l-.0716.0518c-.24432.1701-.47974.3527-.70535.5469-.27965.2431-.52148.5265-.717541.8409-.201003.3259-.351499.6803-.446367 1.0512-.191573.7431-.132671 1.5287.167578 2.2349.277385.6687.77228 1.2242 1.40461 1.5768.21839.1184.45074.2089.69164.2696.09693.1355.21773.2521.35648.3443.38841.2581.83506.4151 1.2995.457.1255.0132.25161.0198.37781.0198.18655-.0002.37287-.0134.55758-.0396.34488-.0565.68324-.1473 1.01004-.2711.7161-.2867 1.39326-.6624 2.0155-1.1182l.18586-.128c.25594-.1767.49817-.3443.73887-.5012.13372-.0908.27259-.1737.4159-.2483.1356-.0694.27554-.13.41896-.1813.227-.0823.457-.1524.6871-.2118l.1934-.0548.1173-.0351c-.0901.3419-.1088.6987-.0548 1.0481.0765.5219.3 1.0113.6444 1.4107.3166.3609.7463.6037 1.2188.6886.0723.015.1456.0246.2193.029.1379.0242.2775.0364.4175.0366.1478.0002.2952-.0141.4402-.0427.3588-.0709.6965-.2231.9872-.4448.3197.1159.6578.1727.9979.1675.0959 0 .1965 0 .3047-.0106.4164-.0353.8263-.126 1.2187-.2697.375-.1317.7222-.3322 1.0238-.5911.0289-.0259.0533-.0518.0776-.0777l.0244-.0259c.1885-.174.3525-.3729.4875-.5911.2169-.3543.3565-.7504.4098-1.1623.0271-.2227.0271-.4477 0-.6704-.0266-.2257-.0777-.4479-.1523-.6627-.107-.2909-.2312-.5753-.3717-.8516-.0518-.1066-.1036-.2117-.1524-.3184-.176-.3298-.2798-.6933-.3047-1.0664-.0091-.3184.125-.6596.2819-1.0542l.0396-.099c.1028-.2484.1819-.506.2361-.7693.0531-.2709.0776-.54668.0731-.8227-.0008-.5803-.132-1.153-.3839-1.67578-.1406-.28852-.3356-.54716-.5743-.76172-.1482-.13199-.3144-.24227-.4936-.32753-.0056-.36454-.0704-.72574-.192-1.06946-.2059-.57305-.5256-1.09851-.9399-1.54476-.3892-.42647-.8419-.79028-1.3422-1.0786-.1249-.0716-.2589-.14168-.4159-.2148l-.0304-.05789-.0655-.12035-.0884-.16149c-.0228-.03808-.0472-.07465-.0716-.11121l-.0396-.06246-.2118-.31383c-.0548-.07922-.1127-.15234-.1706-.2148l-.0807-.09598c-.139-.17453-.2919-.33755-.4571-.4875l-.0807-.0777c-.0754-.07432-.1569-.14211-.2438-.20261l-.067-.05028-.2437-.176714-.0579-.042657c-.0834-.06156-.1843-.094675-.288-.094453z",
						fill: "#fff"
					}))
				},
				c = e => {
					let {
						className: t
					} = e;
					return Object(o.e)(a.l) ? r.a.createElement(d, {
						className: t
					}) : r.a.createElement(i, {
						className: t
					})
				},
				d = e => {
					let {
						className: t
					} = e;
					return r.a.createElement("svg", {
						className: t,
						fill: "#000",
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 40 40",
						height: "40",
						width: "40"
					}, r.a.createElement("path", {
						fill: "#ffdce2",
						d: "M11.76,15.15c.91-19.36,7.94-9.23,8-.71"
					}), r.a.createElement("path", {
						d: "M19.8,14.44a8.73,8.73,0,0,1-.45-2.07,14,14,0,0,0-.79-2.82,20,20,0,0,0-1.71-3.19,5.07,5.07,0,0,0-1.11-1.18,1.22,1.22,0,0,0-.47-.2c-.11,0-.17,0-.28.11a2.27,2.27,0,0,0-.65.88,8.65,8.65,0,0,0-.53,1.32c-.29.94-.53,1.91-.72,2.85-.4,1.87-.71,3.62-1.06,5a8.26,8.26,0,0,1-.83-4.73A30,30,0,0,1,13,5.56a6.5,6.5,0,0,1,.68-1c.13-.16.32-.3.47-.45a2.23,2.23,0,0,1,.62-.3A1.73,1.73,0,0,1,16,3.89a3.23,3.23,0,0,1,.95.69A10.88,10.88,0,0,1,19.1,8a13.48,13.48,0,0,1,.9,3.33A9.87,9.87,0,0,1,19.8,14.44Z"
					}), r.a.createElement("path", {
						fill: "#ffdce2",
						d: "M31.58,11.79c-3.31-3.6-8.69-4.11-13.65-2.9-5.63,1.4-7.87,6.7-10.6,10.93C5.6,21.92,3.57,23.67,2.11,26c-2.82,4.11.11,10.29,5.22,11.11,4.86.78,6.84-2.16,9.1-2.71,7.74-1.87,14.39-5.19,16-9.73C33.35,20.6,32.16,15.94,31.58,11.79Z"
					}), r.a.createElement("path", {
						d: "M31.59,11.78a19.39,19.39,0,0,1,.6,2.63A45.81,45.81,0,0,1,33,20a18.12,18.12,0,0,1,0,3.29,9.38,9.38,0,0,1-.31,1.67c-.11.26-.21.52-.32.77l-.41.72a14.17,14.17,0,0,1-3.83,3.82,29.56,29.56,0,0,1-6.61,3.36c-1.18.46-2.4.84-3.64,1.2a17.58,17.58,0,0,0-1.72.51,12.05,12.05,0,0,0-1.56.88,11.7,11.7,0,0,1-3.72,1.68,9.47,9.47,0,0,1-4.17,0A8.55,8.55,0,0,1,.63,32.57,8.24,8.24,0,0,1,.06,29a7,7,0,0,1,1.13-3.45,32.4,32.4,0,0,1,4.12-5c.35-.37.69-.75,1-1.12l.21-.25L6.7,19l.4-.64c.54-.86,1.07-1.73,1.6-2.58A22.63,22.63,0,0,1,12.5,11a11.46,11.46,0,0,1,5.28-2.83,20.36,20.36,0,0,1,5.45-.45,14.1,14.1,0,0,1,4.92,1.18,10.62,10.62,0,0,1,3.64,2.74,12.11,12.11,0,0,0-3.94-2.05,15,15,0,0,0-5-.52,22,22,0,0,0-4.59.76,12.15,12.15,0,0,0-3,1.28,12.59,12.59,0,0,0-3.54,3.18,44.59,44.59,0,0,0-2.77,4l-.66,1-.33.51L7.88,20s-.07.11-.12.17l-.11.12c-.54.61-1.1,1.2-1.65,1.76a34.28,34.28,0,0,0-3,3.43,8.73,8.73,0,0,0-.62.92,4.17,4.17,0,0,0-.48.94,5.91,5.91,0,0,0-.44,2,7.32,7.32,0,0,0,4,6.63,7.71,7.71,0,0,0,3.78.76,8.15,8.15,0,0,0,3.59-1,19.91,19.91,0,0,1,3.47-1.83,50.13,50.13,0,0,0,6.86-2.26,24.52,24.52,0,0,0,5.74-3.3A10.83,10.83,0,0,0,31,26.17a4.09,4.09,0,0,0,.4-.62,2.84,2.84,0,0,0,.33-.65l.15-.33a.34.34,0,0,0,0-.12l0-.18c0-.24.11-.48.14-.72C32.79,19.85,31.58,13.09,31.59,11.78Z"
					}), r.a.createElement("path", {
						fill: "#f9a",
						d: "M15,33.5c-.06-.16.39-.71,1.08-1.17a15.64,15.64,0,0,1,2-1c1.64-.84,3.65-1.16,5.09-1.87a12.34,12.34,0,0,0,3.33-2.36,7.84,7.84,0,0,0,2-2.77,2.59,2.59,0,0,1,.44,2,2.84,2.84,0,0,1-.7,1.6,16.44,16.44,0,0,1-6.26,3.36c-1.95.55-3.56,1-4.89,1.48-.31.13-.76.25-1.16.39S15.07,33.45,15,33.5Z"
					}), r.a.createElement("path", {
						fill: "#6a5cff",
						d: "M16.82,8.12c9.76-1.89,17.3,3.72,16.34,8,5,0,8.71,6.76,4.08,11.49,4.43,5.08,1.94,10.32-4.3,11.6-4.37.89-8.32-.76-9.83-4-1.71-3.65,1.08-7.29,5.78-7.42-5.56-5.2,3.42-8.34-.58-16.55"
					}), r.a.createElement("path", {
						d: "M28.32,11.28a2.88,2.88,0,0,1,.36.62,5.92,5.92,0,0,1,.57,1.41A8.27,8.27,0,0,1,29.32,18c-.43,1.8-1.46,3.56-1.82,5.3a4,4,0,0,0,.31,2.41c.09.17.21.33.31.5a5.45,5.45,0,0,0,.57.72l1.22,1.28c-.94.08-1.81.19-2.58.33a6.13,6.13,0,0,0-2.77,1.56,4,4,0,0,0-1.2,2.74,4.69,4.69,0,0,0,1,2.92,6.42,6.42,0,0,0,2.53,2,9.53,9.53,0,0,0,6.62.3c2.16-.61,4.1-2,4.68-3.84a5.58,5.58,0,0,0-1-4.93,9,9,0,0,0-.59-.77l-.47-.6-.23-.3c-.08-.05,0-.1.05-.15l.12-.14L37,26.28a3.29,3.29,0,0,0,.38-.54,5.5,5.5,0,0,0,.87-2.38A5.24,5.24,0,0,0,38,20.88a5.67,5.67,0,0,0-1.29-2.13,5.58,5.58,0,0,0-2-1.35A5.68,5.68,0,0,0,33,17.09L32.32,17l-.17,0a.92.92,0,0,1,0-.16l0-.34a12.4,12.4,0,0,0,.1-1.27,5.77,5.77,0,0,0-2.43-3.86,13.29,13.29,0,0,0-4.27-2.25,19.73,19.73,0,0,0-8.71-.71,16.24,16.24,0,0,1,9.39-.59,13.49,13.49,0,0,1,4.61,2,7.82,7.82,0,0,1,2.62,2.84l.28.58.2.64a5.36,5.36,0,0,1,.2,1.34s-.08.11,0,.11a2.28,2.28,0,0,0,.49.15,7.13,7.13,0,0,1,3.83,2.69,7.49,7.49,0,0,1,1.45,4.22,7.13,7.13,0,0,1-1.18,4.13l-.29.44a3.51,3.51,0,0,1-.3.36l-.19.21-.09.1s.05.07.07.11l.43.57.53.86a7.58,7.58,0,0,1,1,3.88,5.83,5.83,0,0,1-1.44,3.62,8.16,8.16,0,0,1-3,2.2,11.93,11.93,0,0,1-7,.82,8,8,0,0,1-5.53-3.76,5.77,5.77,0,0,1-.81-3.25,5.11,5.11,0,0,1,1.27-3,6.56,6.56,0,0,1,2.58-1.81,6.13,6.13,0,0,1,.72-.25L27,27.5l.15,0a3.27,3.27,0,0,1,.62-.07,4,4,0,0,1-.46-.55l-.18-.28a2.77,2.77,0,0,1-.22-.37l-.29-.82a5.64,5.64,0,0,1,.23-3.18c.64-1.87,2.06-4,2.21-6.23a8.74,8.74,0,0,0-.19-3C28.66,12.2,28.41,11.59,28.32,11.28Z"
					}), r.a.createElement("path", {
						d: "M21.44,26c4.39-2,1-8.4-3.18-5.83C15,22.4,17.62,27.75,21.44,26Z"
					}), r.a.createElement("path", {
						d: "M21.44,26a2.7,2.7,0,0,1-1.81.47A3.26,3.26,0,0,1,18.2,26a4.74,4.74,0,0,1-.94-.83,3.7,3.7,0,0,1-.74-3.43,3.84,3.84,0,0,1,2.65-2.54,3.49,3.49,0,0,1,3.12.51,4.05,4.05,0,0,1,1.58,2.53,3.41,3.41,0,0,1-.58,2.61,3.64,3.64,0,0,1-1.79,1.27,5.15,5.15,0,0,0,1.21-1.71,4.21,4.21,0,0,0,.23-1.55A3.07,3.07,0,0,0,22.4,21a2.89,2.89,0,0,0-1.53-1.1A3.08,3.08,0,0,0,17.68,21,3,3,0,0,0,17.22,24,3.49,3.49,0,0,0,19,25.89a3.7,3.7,0,0,0,1.39.27h.37L21,26.1Z"
					}), r.a.createElement("path", {
						fill: "#f9a",
						d: "M10.33,26.53c-2.77-.86-3.6-1.91-2.94-3.47C.11,25.47.07,33.88,7.18,36.34,13,38.34,17.35,28.69,10.33,26.53Z"
					}), r.a.createElement("path", {
						fill: "#f9a",
						d: "M10.33,26.52a6,6,0,0,1,1.09.35,7.15,7.15,0,0,1,.93.56,6.61,6.61,0,0,1,.93.91A4.92,4.92,0,0,1,14.13,31,7,7,0,0,1,14,32.23c-.11.37-.17.72-.28,1a6.35,6.35,0,0,1-1.83,2.6A4.9,4.9,0,0,1,8.76,37,5.92,5.92,0,0,1,7,36.75c-.51-.22-1-.39-1.54-.66a8.58,8.58,0,0,1-1.39-.92A7.55,7.55,0,0,1,2.94,34a6.86,6.86,0,0,1-1.51-3.62,6.46,6.46,0,0,1,.74-3.72A7.73,7.73,0,0,1,4.53,24a14.66,14.66,0,0,1,1.41-.82l1-.36.58-.22A1.88,1.88,0,0,1,8,22.47a8.28,8.28,0,0,0-.48,1.43,1.39,1.39,0,0,0,.07.59,2.1,2.1,0,0,0,.76.89,8.54,8.54,0,0,0,2,1A6.6,6.6,0,0,1,8,25.7a2.26,2.26,0,0,1-1-1.14,1.91,1.91,0,0,1-.11-.41c0-.11,0-.31,0-.28s0-.06,0-.07-.07.05-.07.06h0L6.41,24c-.34.18-.61.36-.83.46A6.81,6.81,0,0,0,2.8,27.22a5.82,5.82,0,0,0-.57,3.67A6,6,0,0,0,3.86,34a7.78,7.78,0,0,0,2.82,1.87,4.54,4.54,0,0,0,5.47-1.18,5.69,5.69,0,0,0,1.3-2.36,6.17,6.17,0,0,0,.22-1.26,4.91,4.91,0,0,0-.14-1.22,4.13,4.13,0,0,0-1.43-2.31l-.54-.42a3.12,3.12,0,0,0-.53-.29Z"
					}), r.a.createElement("path", {
						d: "M33,34.05c-.07-.07,0-.48.1-.95a3.82,3.82,0,0,0-.05-1.3,4.28,4.28,0,0,0-1.77-2.53,5.16,5.16,0,0,0-2.41-.83,8.67,8.67,0,0,0-2.22.13,2.56,2.56,0,0,1,2-1.06,6.24,6.24,0,0,1,3.93,2,4.58,4.58,0,0,1,.9,1.6,4.07,4.07,0,0,1,.11,1.61A3.53,3.53,0,0,1,33,34.05Z"
					}), r.a.createElement("path", {
						d: "M11.6,31.34a1.52,1.52,0,0,1-.23,1.17,3.33,3.33,0,0,1-.61.73c-.24.18-.45.38-.61.48a7.05,7.05,0,0,1-4.23,1,6.93,6.93,0,0,1-3.47-1.08A4.36,4.36,0,0,1,.63,31.32c.42.19.81.51,1.24.7s.77.38.9.56A5.23,5.23,0,0,0,5,33.78a6.76,6.76,0,0,0,2.3.15,5.93,5.93,0,0,0,3.37-1.35,4.62,4.62,0,0,0,.61-.63C11.43,31.69,11.55,31.43,11.6,31.34Z"
					}), r.a.createElement("path", {
						fill: "#ffdce2",
						d: "M19.92,15.9c.32-15.81,8.82-12.13,9.16-.18"
					}), r.a.createElement("path", {
						d: "M29.07,15.72a6.88,6.88,0,0,1-.46-2.09,13.82,13.82,0,0,0-.76-2.86,14.36,14.36,0,0,0-1.77-3.13c-.71-.94-1.71-1.52-2.28-1.24a3.32,3.32,0,0,0-1.53,1.77,15,15,0,0,0-.95,2.71c-.49,1.85-.78,3.61-1.1,5a7.42,7.42,0,0,1-.89-4.82,16,16,0,0,1,2.33-4.8A3.25,3.25,0,0,1,23.87,5a3.11,3.11,0,0,1,2.25.82,8.85,8.85,0,0,1,2.32,3.38,12.2,12.2,0,0,1,.87,3.39A11.14,11.14,0,0,1,29.07,15.72Z"
					}), r.a.createElement("path", {
						d: "M6.75,30.09a1,1,0,1,0,.06-2C5.64,28.27,5.51,30,6.75,30.09Z"
					}), r.a.createElement("path", {
						d: "M6.75,30.1A.74.74,0,0,1,6.19,30a1,1,0,0,1-.41-.73,1.19,1.19,0,0,1,.36-1,1.24,1.24,0,0,1,1.12-.3,1.08,1.08,0,0,1,.75.67,1.32,1.32,0,0,1,0,.94,1,1,0,0,1-.58.6,1.06,1.06,0,0,1-.68,0,1.6,1.6,0,0,0,.57-.28,1.6,1.6,0,0,0,.28-.36.93.93,0,0,0,0-1.08.85.85,0,0,0-1-.19,1,1,0,0,0-.45,1.45C6.23,29.91,6.65,30.08,6.75,30.1Z"
					}), r.a.createElement("path", {
						d: "M2.09,28.69c1.06-.05,1.47-2.36.39-2C1.59,27.11,1.2,28.85,2.09,28.69Z"
					}), r.a.createElement("path", {
						d: "M2.09,28.69a.32.32,0,0,1-.16,0,.37.37,0,0,1-.3-.17,1.1,1.1,0,0,1-.06-.7A1.82,1.82,0,0,1,1.94,27a1,1,0,0,1,.85-.44.47.47,0,0,1,.37.29.88.88,0,0,1,.08.41,1.92,1.92,0,0,1-.19.73,1.13,1.13,0,0,1-1,.72A1.46,1.46,0,0,0,2.78,28,1.34,1.34,0,0,0,3,27c-.08-.38-.54-.28-.74-.08a1.73,1.73,0,0,0-.62,1.4.37.37,0,0,0,.16.31A.45.45,0,0,0,2.09,28.69Z"
					}), r.a.createElement("circle", {
						fill: "#19f2c8",
						cx: "20.51",
						cy: "23.28",
						r: "2.04"
					}), r.a.createElement("path", {
						fill: "#19f2c8",
						d: "M22.55,23.28a2.72,2.72,0,0,0-.35-1A1.89,1.89,0,0,0,21,21.4a2,2,0,0,0-1.74.49,1.87,1.87,0,0,0-.56,1.69,1.91,1.91,0,0,0,2.25,1.51,2,2,0,0,0,1.56-1.81,1.81,1.81,0,0,1-.23,1.29,1.84,1.84,0,0,1-.94.78,2.22,2.22,0,0,1-2.5-.78,2.14,2.14,0,0,1,1.49-3.43,2.1,2.1,0,0,1,1.7.61,2,2,0,0,1,.47.85A2.09,2.09,0,0,1,22.55,23.28Z"
					}), r.a.createElement("circle", {
						fill: "#fff",
						cx: "18.9",
						cy: "21.87",
						r: "1.31"
					}), r.a.createElement("path", {
						fill: "#fff",
						d: "M20.21,21.87a2.75,2.75,0,0,0-.25-.65,1.17,1.17,0,0,0-.77-.52,1.22,1.22,0,0,0-1.06.32,1.15,1.15,0,0,0-.34,1,1.18,1.18,0,0,0,1.37.92,1.28,1.28,0,0,0,1-1.11,1.05,1.05,0,0,1-.08.87,1.21,1.21,0,0,1-.62.54,1.52,1.52,0,0,1-1.66-.55,1.44,1.44,0,0,1-.13-1.5,1.42,1.42,0,0,1,1.11-.77,1.34,1.34,0,0,1,1.12.41,1.26,1.26,0,0,1,.3.56A1.41,1.41,0,0,1,20.21,21.87Z"
					}), r.a.createElement("path", {
						fill: "#f9a",
						d: "M26,16.18c-1.46,1-4.82.41-5.26-1.56s.44-6.22,1.55-6.74C23.78,7.2,27.18,15.35,26,16.18Z"
					}), r.a.createElement("path", {
						d: "M26,16.17a1.08,1.08,0,0,0,.13-.59A5.5,5.5,0,0,0,26,14.27a13.67,13.67,0,0,0-1-2.63,14.42,14.42,0,0,0-1.87-3,1.41,1.41,0,0,0-.54-.41s0,0-.08,0-.14.14-.21.23a5.79,5.79,0,0,0-.64,1.52A13.35,13.35,0,0,0,21.16,13a6.94,6.94,0,0,0,.05,1.38,1.75,1.75,0,0,0,.51,1,3.86,3.86,0,0,0,2.16.95A3.71,3.71,0,0,0,26,16.06a3,3,0,0,1-2.21.92,3.5,3.5,0,0,1-2.17-.56,3.09,3.09,0,0,1-.94-1.09A3.12,3.12,0,0,1,20.37,14a11.14,11.14,0,0,1,.19-2.35,13.82,13.82,0,0,1,.53-2.13,6.53,6.53,0,0,1,.41-1,2.11,2.11,0,0,1,.72-.84.75.75,0,0,1,.64,0,1.88,1.88,0,0,1,.45.31,4.87,4.87,0,0,1,.65.73,12.72,12.72,0,0,1,.94,1.54,15.23,15.23,0,0,1,1.21,3,6.67,6.67,0,0,1,.26,1.7,2.64,2.64,0,0,1-.08.78A.63.63,0,0,1,26,16.17Z"
					}), r.a.createElement("path", {
						fill: "#94b3ff",
						d: "M33.47,23.09a.89.89,0,0,1-.11-.3l-.06-.26,0-.14,0-.08-.07.05a6.76,6.76,0,0,0-.63.52,6.62,6.62,0,0,0-.72.77l-.13.16-.13-.17a1.25,1.25,0,0,1-.19-1.07l.08-.32,0-.17s0-.18-.06-.16l-.23.15-.26.2a6.3,6.3,0,0,0-.83.72,2.56,2.56,0,0,0-.58.83c-.1.3-.08.46.11.63L29,25a2.77,2.77,0,0,1-.61-2.35,12.57,12.57,0,0,1,1.14-3,14,14,0,0,0,1-2.64,5.72,5.72,0,0,0,0-2.47c-.1-.38-.24-.73-.36-1.08l-.51-.93a8.88,8.88,0,0,1,.82.76,5.83,5.83,0,0,1,.68,1.14,4.33,4.33,0,0,1,.31,1.24,2.53,2.53,0,0,1,0,.94A17.5,17.5,0,0,1,29.71,21,7.05,7.05,0,0,0,29,22.94a2.13,2.13,0,0,0,.48,1.69l-.27.27a1.13,1.13,0,0,1-.35-.66,1.21,1.21,0,0,1,.12-.71,3.69,3.69,0,0,1,.75-1,7.86,7.86,0,0,1,.91-.75,5.41,5.41,0,0,1,.64-.38c.24-.13.45-.21.7-.32.07,0,0,.25.06.34a2.16,2.16,0,0,1,0,.36,4.34,4.34,0,0,1-.2.79.94.94,0,0,0,0,.83h-.39l.17-.19a6.25,6.25,0,0,1,1.49-1.12l.21-.11c0-.05,0,.05,0,.08v.12l0,.43Z"
					}), r.a.createElement("path", {
						fill: "#94b3ff",
						d: "M27.44,35.4a1.55,1.55,0,0,1-.47-.64,3,3,0,0,1-.23-.68,2.52,2.52,0,0,1-.06-.52l0-.25s0-.11,0-.08l-.1.1a1.38,1.38,0,0,0-.26.39,1.3,1.3,0,0,0-.12.4,2.49,2.49,0,0,0-.08.72,2.42,2.42,0,0,0,.44,1.36l-.56.55a3.74,3.74,0,0,1-1.55-2.34,4.67,4.67,0,0,1,2.14-4.55,4,4,0,0,1,4-.37c-.28,0-.59,0-.9.05a4.93,4.93,0,0,0-.94.21,8.29,8.29,0,0,0-1.35.61,4.13,4.13,0,0,0-2.34,3,3,3,0,0,0,1.28,2.95l-.28.28a3,3,0,0,1-.36-2.69,2.88,2.88,0,0,1,.88-1.29l.26-.22.14-.11c.05,0,.1-.08.08,0s0,.13.14.13h.05a3.9,3.9,0,0,0-.16,2.21A3.41,3.41,0,0,0,27.44,35.4Z"
					}), r.a.createElement("path", {
						fill: "#493ac1",
						d: "M28.06,37.14a11.11,11.11,0,0,0,1.27.18,10.21,10.21,0,0,0,1.84-.17,11.56,11.56,0,0,0,2.17-.61,6.25,6.25,0,0,0,1.79-1.22,4.49,4.49,0,0,0,1.16-3,5.57,5.57,0,0,0-.53-2.88,2.17,2.17,0,0,1,1.47,1,2.51,2.51,0,0,1,.52,1.45,7.52,7.52,0,0,1-1,3.29,4.4,4.4,0,0,1-1.05,1.13,9.61,9.61,0,0,1-1.16.8,6.9,6.9,0,0,1-2.43.81A11.52,11.52,0,0,1,29.9,38a3,3,0,0,1-1.16-.31A1.74,1.74,0,0,1,28.06,37.14Z"
					}), r.a.createElement("path", {
						fill: "#493ac1",
						d: "M33.09,26.76c0-.13.41-.15.79-.21a2,2,0,0,0,1-.34,3.49,3.49,0,0,0,.44-.41c.12-.13.21-.31.34-.48a3.58,3.58,0,0,0,.46-1.1,8.75,8.75,0,0,0-.18-3.77c.82,0,1.72.82,1.68,1.24a8.14,8.14,0,0,1-.88,3.8,3.82,3.82,0,0,1-1.05,1.24,2.52,2.52,0,0,1-1.37.44A2.49,2.49,0,0,1,33.09,26.76Z"
					}), r.a.createElement("path", {
						fill: "#fff8b8",
						d: "M2.29.57C0,2,5.89,16.92,8,19.08c2.8,1.55,7.52-.47,7.38-3.83S3.9-2.36,2.29.57Z"
					}), r.a.createElement("path", {
						d: "M2.27.56A.46.46,0,0,1,2.33.4.49.49,0,0,1,2.56.15a1.27,1.27,0,0,1,1.07,0A8.53,8.53,0,0,1,6.2,1.76a48.61,48.61,0,0,1,4.41,4.49,35.05,35.05,0,0,1,4.79,6.5,7.42,7.42,0,0,1,.83,2.15,4.29,4.29,0,0,1-.42,2.51,6,6,0,0,1-3.61,2.86,6.27,6.27,0,0,1-4,0L7.73,20a1.74,1.74,0,0,1-.35-.19l-.27-.3a8.55,8.55,0,0,1-.57-.79c-.33-.51-.6-1-.87-1.53a47.33,47.33,0,0,1-2.5-6A40,40,0,0,1,1.63,5.49a16.66,16.66,0,0,1-.3-2.67,5.66,5.66,0,0,1,.1-1.3A1.65,1.65,0,0,1,2.14.32a1.41,1.41,0,0,0-.31,1.21,6.29,6.29,0,0,0,.26,1.23c.24.84.56,1.72.89,2.57C3.63,7,4.29,8.6,4.52,9.47a46.46,46.46,0,0,0,1.64,5c.31.79.65,1.57,1,2.31.18.37.37.72.57,1.07.1.16.2.34.31.49s.11.16.17.22.06.1.11.13c2.53,1.36,6.38-.38,6.65-3V15.3a1.75,1.75,0,0,0-.07-.44,5.61,5.61,0,0,0-.34-.91,16.41,16.41,0,0,0-.95-1.75C13,11.08,12.2,10,11.46,9,10,7.06,8.48,5.29,7,3.69A32.32,32.32,0,0,0,4.48,1.12,4,4,0,0,0,3.13.3.77.77,0,0,0,2.27.56Z"
					}), r.a.createElement("path", {
						fill: "#ccffef",
						d: "M10.69,11.08a4.78,4.78,0,0,1-5,2.21c.85,2.93,2.21,5.84,3.6,6.41,2,.82,6.16-.77,6.05-4.37-.05-1.53-2.15-4.85-4-6.41a3.06,3.06,0,0,1-1.36,3"
					}), r.a.createElement("path", {
						d: "M10,11.89a4,4,0,0,0,.7-.78,3.28,3.28,0,0,0,.46-2.47c0-.16.22.08.38.21l.5.46c.37.36.54.56.77.82.43.49.79,1,1.06,1.31a13.15,13.15,0,0,1,1.36,2.22A5.79,5.79,0,0,1,15.66,15a3.73,3.73,0,0,1,0,.74,3.55,3.55,0,0,1-.08.73A4.5,4.5,0,0,1,14.15,19a5.93,5.93,0,0,1-2.51,1.3A4.13,4.13,0,0,1,8.71,20a5.88,5.88,0,0,1-1.77-2.14,15.31,15.31,0,0,1-1-2.29c-.14-.38-.26-.75-.37-1.12l-.23-.78-.26-.94c.27.06.53.13.8.17l.39.07a.58.58,0,0,0,.18,0h.1a3.55,3.55,0,0,0,.73,0,4.65,4.65,0,0,0,1.36-.39,5.37,5.37,0,0,0,2-1.6,4.48,4.48,0,0,1-2,2.32A4.31,4.31,0,0,1,7,13.86a2.56,2.56,0,0,1-.39,0H6.36s0,0,0,.08l.11.43c.08.28.16.56.25.83q.27.83.6,1.59a6.17,6.17,0,0,0,1.8,2.54,3.65,3.65,0,0,0,2.83.07,4.85,4.85,0,0,0,2.28-1.55,3.81,3.81,0,0,0,.81-2.38,5.26,5.26,0,0,0-.75-2.28,17.47,17.47,0,0,0-1.26-2c-.22-.3-.45-.6-.68-.88s-.23-.27-.35-.41l-.2-.23-.17-.17-.1-.11s0,0,0,.07a1.84,1.84,0,0,1-.14.64,2.93,2.93,0,0,1-.46.9A2.48,2.48,0,0,1,10,11.89Z"
					}), r.a.createElement("path", {
						fill: "#19f2c8",
						d: "M8.57,5.17c.14,2.42-2.75,3.95-4.8,3.76.61,1.47,1.56,6,3.36,5.89,2.38,0,5.54-1.7,5.25-4.6A17.52,17.52,0,0,0,8.44,5.46"
					}), r.a.createElement("path", {
						d: "M8.45,5.46A6.8,6.8,0,0,1,10.32,7,23.61,23.61,0,0,1,12.46,9.8c.06.1.27.33.23.56a3.26,3.26,0,0,1,0,.54,4,4,0,0,1-.2,1.08,4.35,4.35,0,0,1-1.29,1.84,6.37,6.37,0,0,1-4.11,1.54h.06a3,3,0,0,1-.53,0,3.14,3.14,0,0,1-.46-.18,3.81,3.81,0,0,1-1.27-1.48,11.83,11.83,0,0,1-.68-1.57c-.19-.52-.35-1-.51-1.54L3.5,9.77,3,8.37c.33,0,.68.05,1,0h.45c.18,0,.17,0,.27,0a4.7,4.7,0,0,0,.83-.17A4.79,4.79,0,0,0,7,7.54,3.1,3.1,0,0,0,8.41,5.18a2.4,2.4,0,0,1,.08,1.33A3.33,3.33,0,0,1,7.72,8,4.42,4.42,0,0,1,5.4,9.34c-.15,0-.29.05-.44.06H4.61L4.4,9.37s0,.05,0,.09a1.75,1.75,0,0,0,0,.25l.25.91a17.49,17.49,0,0,0,.54,1.73A6.71,6.71,0,0,0,6,13.84a1.42,1.42,0,0,0,1.12.76h0a5.26,5.26,0,0,0,4.57-2.48A3.1,3.1,0,0,0,12.05,11a2.72,2.72,0,0,0,0-.57c0-.1,0-.12,0-.17L11.9,10c-.4-.67-.83-1.29-1.25-1.87A27.49,27.49,0,0,0,8.45,5.46Z"
					}), r.a.createElement("path", {
						fill: "#fff",
						d: "M3.3,2.08A31.85,31.85,0,0,1,4.72,5.57c.7,1.64,1.36,3.56,2,5.26a47.44,47.44,0,0,0,3.47,7.56A5.89,5.89,0,0,1,7.76,15.9c-1-2.49-1.65-4.65-2.35-6.56s-1.28-3.56-1.69-5A19.92,19.92,0,0,1,3.3,2.08Z"
					}), r.a.createElement("path", {
						fill: "#6a5cff",
						d: "M20.72,8c-12.86-4.26-7.25,10.38.19,7.55-1.23-1.74-.58-5.59-.18-7.17"
					}), r.a.createElement("path", {
						d: "M20.74,8.4a16.52,16.52,0,0,1-.19,2.41,9.2,9.2,0,0,0,.22,3.3,2.47,2.47,0,0,0,.1.29l.06.14a1.76,1.76,0,0,0,.09.21,12.51,12.51,0,0,0,.67,1.1,10.52,10.52,0,0,1-1.3.49c-.11,0-.25.06-.37.09l-.27.06a4,4,0,0,1-.5.06,5.26,5.26,0,0,1-2.08-.2,7,7,0,0,1-3.39-2.27,6.31,6.31,0,0,1-1.55-3.87,3.51,3.51,0,0,1,.66-2.16,3.44,3.44,0,0,1,1.78-1.23,6.69,6.69,0,0,1,3.48,0,12.83,12.83,0,0,1,2.64,1c-.81.11-1.91.07-2.89.14s-1.81.15-2.21.2a2.36,2.36,0,0,0-1.61.62,2.2,2.2,0,0,0-.58,1.62A5.25,5.25,0,0,0,15,13.73a5.46,5.46,0,0,0,2.89,1.7,4.79,4.79,0,0,0,1.55.08,2.29,2.29,0,0,0,.36-.07l.21,0c.1-.06.28-.07.29-.15a2.12,2.12,0,0,1-.12-.2,1.34,1.34,0,0,1-.11-.31,5.39,5.39,0,0,1-.22-1,9.32,9.32,0,0,1,0-1.9A11.43,11.43,0,0,1,20.74,8.4Z"
					}), r.a.createElement("path", {
						fill: "#94b3ff",
						d: "M17.76,12.22c-.08,0-.17-.4-.36-.73,0-.05-.07,0,0-.08s0,.05,0,.07a2.47,2.47,0,0,0-.21.36l-.41.85-.08,0a1.77,1.77,0,0,1-.58-1,2.63,2.63,0,0,1,.05-1.39l.49.51a1.81,1.81,0,0,0-.41.23l0,0a.36.36,0,0,0-.11.1,1,1,0,0,0-.2.27,11.84,11.84,0,0,0-.49,1.4l-.18-.33-.08-.14h0L15,12.27,14.93,12a2.4,2.4,0,0,1-.29-1,1.92,1.92,0,0,1,.06-.62,1.81,1.81,0,0,1,.2-.54,2.45,2.45,0,0,1,.52-.62,3.09,3.09,0,0,1,2.39-.62c-.28.21-.67.4-1,.62s-.55.4-.69.48a1.51,1.51,0,0,0-.57.46c-.08.12-.1.13-.14.2a.77.77,0,0,0-.07.2,1,1,0,0,0,.05.5c0,.07,0,0,0,0l0-.09a1.18,1.18,0,0,1,.11-.19,1.11,1.11,0,0,1,.29-.28,2.53,2.53,0,0,1,.54-.28l.37-.14-.13.39a1.94,1.94,0,0,0-.06.86,1.13,1.13,0,0,0,.08.22.41.41,0,0,0,0,.09s0,0,.06-.07a1.67,1.67,0,0,1,.18-.28.46.46,0,0,1,.11-.12.56.56,0,0,1,.14-.1.32.32,0,0,1,.27,0c.24.21.19.35.23.49A3.65,3.65,0,0,1,17.76,12.22Z"
					}))
				}
		},
		"./src/reddit/components/Econ/Prediction/themes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/config.ts");
			const r = {
				theme_1: `url(${s.a.assetPath}/img/econ/predictions/theme1.png)`,
				theme_2: `url(${s.a.assetPath}/img/econ/predictions/theme2.png)`,
				theme_3: "linear-gradient(104.49deg, #279A63 7.96%, #B6C048 119.75%)",
				theme_4: "linear-gradient(91.64deg, #F5AC1F -10.49%, #FC7519 52.61%)",
				theme_5: `url(${s.a.assetPath}/img/econ/predictions/theme5.png)`,
				theme_6: `url(${s.a.assetPath}/img/econ/predictions/theme6.png)`,
				theme_7: `url(${s.a.assetPath}/img/econ/predictions/theme7.png)`,
				theme_8: `url(${s.a.assetPath}/img/econ/predictions/theme8.png)`
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/UserAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				winnerName: "_2Ld4Maxq0H1scF8CFo0X_a",
				tokenIcon: "_2ng76MX6PYeQXt1a8h8KWo",
				score: "_3JbhxiJWu2gV6JaiTF3uzx",
				avatarContainer: "_2ZwRsHNdUj-VCX3kAEvfuS",
				avatar: "_3ggbcbNUTU_E7CWkdqRASP",
				first: "_3QliOnSLoIQ9q79lsUpz_Q",
				third: "O47yLdXtE3UNQd_PIoMnQ",
				defaultAvatar: "_1MFV0LOIC_eTR8_8Bzy8Er",
				userIcon: "_1jEJK9NfCJT83N0sSzBuB-",
				outerCircle: "_1_TAbf1ftJCbFWt5CPQadV",
				second: "_3uIgvw-EV7gl101AWKSB9L",
				innerCircle: "_2d8KPU9h9fKX2LVxDMGQLO",
				placeBadge: "_3NSoLwFOYouY-1sbz3qMSN"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/index.m.less": function(e, t, n) {
			e.exports = {
				themedWidget: "C0hcQnbAEO0BNApe5yXyY",
				header: "_2ZyHot0tKqfb7CrQCVaZvh",
				winnersContainer: "_3YQnPYKP83Dft0BU-PfJUr",
				user: "_3NUy5pbf5zjIjsWOjHC7Gp",
				first: "_1bnJ73CUCCMLubzxjltNXB",
				second: "_24-h3WwFZZMXYeizPwLvUl",
				seeAllButton: "_1l-LD2VzJO8IA6b1zQ3Kxk"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less": function(e, t, n) {
			e.exports = {
				predictionLeaderboardList: "WnsHpoM6ZTGbLzCSxG1ho",
				topPredictor: "iABJTvK6lrMc3PmeMk2bZ"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				i = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					className: t,
					currentRank: n,
					tokenIcon: s,
					topPredictorsRank: i
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.predictionLeaderboardList, t)
				}, (null == i ? void 0 : i.length) ? i.map(e => {
					let {
						rank: t,
						redditor: o,
						redditorInfo: i,
						score: d
					} = e;
					var l;
					return o || i ? r.a.createElement("div", {
						key: `prediction-leaderboard-${i.id}`,
						className: c.a.topPredictor
					}, r.a.createElement(a.a, {
						isCurrentUser: (null === (l = null == n ? void 0 : n.redditor) || void 0 === l ? void 0 : l.name) === i.displayName,
						rank: t,
						redditor: o,
						redditorInfo: i,
						score: d,
						tokenIcon: s
					})) : null
				}) : d._("No top predictors", null, {
					hk: "1nIqZI"
				}))
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_C9n5LWcnYHJ78_PhY6M_",
				header: "_29gj_JsULicXdU3UTZKiDI",
				subHeader: "_29O_p8gs7C07rkDh7fqksJ",
				closeButton: "_1Q_qQCWWqlqHQzCU0P83E_",
				listContainer: "_1MiUX_7AddF3lpCZ3nYtMe",
				currentRank: "_39H3viVq70CUv4_7JdBLsx",
				spacer: "_37V-Um9VhBWlh1fA0PP6hv"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				u = n("./src/reddit/hooks/usePageLayer.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				b = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				h = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				f = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				g = n.n(f);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = Object(a.a)(e => {
				let {
					onClose: t,
					leaderboard: n,
					tournamentId: a,
					tokenIcon: f,
					isPreviousEvent: x = !1,
					isQueried: y = !1
				} = e;
				const E = Object(m.a)(),
					_ = Object(u.a)(),
					{
						currentRank: O,
						topPredictorsRank: C
					} = n,
					j = Object(o.e)(e => a ? Object(p.a)(e, a) : null),
					k = Object(o.e)(e => Object(i.r)(e, {
						pageLayer: _
					}));
				Object(s.useEffect)(() => {
					E(a ? Object(l.g)(a, x, y) : Object(l.e)())
				}, []);
				const S = O && O.rank > 0;
				return r.a.createElement("div", {
					className: g.a.container
				}, r.a.createElement("div", {
					className: g.a.header
				}, r.a.createElement(c.t, {
					className: g.a.closeButton,
					Icon: Object(d.b)("close"),
					priority: c.c.Plain,
					onClick: t
				}), r.a.createElement("h1", null, a ? v._("Tournament Leaderboard", null, {
					hk: "2ZYGPJ"
				}) : v._("All Time Top Predictors", null, {
					hk: "2OsQLm"
				})), r.a.createElement("h2", {
					className: g.a.subHeader
				}, j ? j.name : null == k ? void 0 : k.displayText)), r.a.createElement("div", {
					className: g.a.listContainer
				}, r.a.createElement(b.a, {
					currentRank: O,
					topPredictorsRank: C,
					tokenIcon: f
				}), S && r.a.createElement("div", {
					className: g.a.spacer
				}, " ")), O && O.redditorInfo && S && r.a.createElement(h.a, {
					className: g.a.currentRank,
					isCurrentUser: !0,
					rank: O.rank,
					redditor: O.redditor,
					redditorInfo: O.redditorInfo,
					score: O.score,
					tokenIcon: f
				}))
			}), E = e => r.a.createElement(y, x({
				withOverlay: !0,
				onOverlayClick: e.onClose
			}, e))
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less": function(e, t, n) {
			e.exports = {
				predictor: "ainvGgXQrIMFpP9X4Mrc_",
				userLink: "_34lqpm8WEQ2vCBLoneB-q5",
				userName: "Lm2HlDnjd61FFIUJMsqY1",
				yourProfile: "_3NXCPZBcTL9t1VpyqYkpAi",
				leaderboardIcon: "cr2gm4FK2Pvd3jSNEt1aM",
				rank: "_35mmwlcmeMehfyJXIsaV6P",
				userIcon: "_12PvAVnV9Mni44vSgjcixP",
				avatar: "KajS3NI16AuxmHTMwUM9Y",
				name: "_1XaIj4-_6OJb20sL98YYiD",
				score: "_3ebMVpO-ahVFbOZDTJpx9U",
				icon: "_2Xw8EThjahawQ2bJketixZ",
				rankBadge: "_1oPIwF1dXcLbArFfx2gunM"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				d = n("./src/reddit/controls/InternalLink/index.tsx"),
				l = n("./src/reddit/helpers/trackers/predictions.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				let {
					className: t,
					isCurrentUser: n,
					rank: s,
					redditor: m,
					redditorInfo: h,
					score: f,
					tokenIcon: g
				} = e;
				const x = Object(u.a)(),
					{
						icon: v,
						name: y,
						profile: E
					} = m || {},
					_ = null != y ? y : h.displayName;
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.predictor, t)
				}, r.a.createElement("div", {
					className: p.a.rank
				}, s), r.a.createElement(d.default, {
					className: p.a.userLink,
					onClick: () => x(Object(l.g)({
						targetUserId: h.id
					})),
					to: `/user/${_}`,
					disabled: h.displayName === a.F || h.displayName === a.Lb
				}, r.a.createElement("div", {
					className: p.a.leaderboardIcon
				}, r.a.createElement(c.a, {
					className: Object(o.a)(p.a.userIcon, p.a.avatar),
					iconUrl: null == v ? void 0 : v.url,
					isNSFW: !!(null == E ? void 0 : E.isNsfw),
					userName: null != _ ? _ : ""
				}), r.a.createElement(i.a, {
					className: p.a.rankBadge,
					rank: s
				})), r.a.createElement("div", {
					className: p.a.name
				}, r.a.createElement("div", {
					className: p.a.userName
				}, _), n && r.a.createElement("div", {
					className: p.a.yourProfile
				}, b._("Yep, thats you.", null, {
					hk: "3DqdE1"
				})))), r.a.createElement("div", {
					className: p.a.score
				}, r.a.cloneElement(g, {
					className: p.a.icon
				}), f))
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Predictor/index.m.less": function(e, t, n) {
			e.exports = {
				predictor: "_16w_MXnqyc1wG_7ojYbn1W",
				rank: "_31JLAJR9J0PoccMihIbeyx",
				userLink: "_2l47m5ZBEi8xLNq6RSIFbA",
				userName: "Wd3mDBfAqnzvsMdD9m0_8",
				yourProfile: "_3cwE2bEUU5EMjmUjmUkB1r",
				leaderboardIcon: "_3Mmx-E5UguOnjQ6UxOxNNt",
				avatar: "v7H_jS6knu3EL_GoHh7hp"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Stats/index.m.less": function(e, t, n) {
			e.exports = {
				statsList: "_3IT8I6DlfHtXDnF-gs2RpL",
				stat: "TjF7GdpuNmao0k5l4rcny",
				statValue: "w_GdgvUJ7AVXtoC3Sv9Dz",
				long: "_2hR4JXJZlWk-KpRAtz84dB",
				statDescription: "PxTXMQqDB54wd14g-M1Dx"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3sjfBnn2sAWNiul4Nz_Pg7",
				content: "_3jDA0vviEVX8RhAhtOCY_z",
				tournamentInfo: "_36aOJEytqILMykYWpABMrJ",
				seeAllButton: "_1VP0LbK9VUyIB4HE7T12hP",
				tournamentTitle: "UU382dFrrhmKHOT4_f6nB",
				tournamentDate: "_3aIs6cW_8V_yNVi8okT9V8",
				leaderboard: "_1ouATj40OEjkSu07FMhSFS"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/index.m.less": function(e, t, n) {
			e.exports = {
				themedWidget: "zArpLVQY3rXItf4R-k_Ab",
				content: "ihn4kxAce7LSsBs2NTPqT",
				header: "_3kAf9h9Yqca0lw94mWOJQd"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.m.less": function(e, t, n) {
			e.exports = {
				placeBadge: "_1H-3d7_OLmQnVDXXA2ArUr"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/config.ts"),
				c = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.m.less"),
				d = n.n(c);
			const l = `${i.a.assetPath}/img/econ/predictions/leaderboard`,
				u = `${l}/first@2x.png`,
				m = `${l}/second@2x.png`,
				p = `${l}/third@2x.png`,
				b = {
					1: {
						alt: s.fbt._("First place", null, {
							hk: "3uGGfU"
						}),
						src: u,
						srcSet: `\n  ${l}/first.png,\n  ${u} 2x,\n  ${l}/first@3x.png 3x,\n`
					},
					2: {
						alt: s.fbt._("Second place", null, {
							hk: "4AYjyw"
						}),
						src: m,
						srcSet: `\n  ${l}/second.png,\n  ${m} 2x,\n  ${l}/second@3x.png 3x,\n`
					},
					3: {
						alt: s.fbt._("Third place", null, {
							hk: "lyjwD"
						}),
						src: p,
						srcSet: `\n  ${l}/third.png,\n  ${p} 2x,\n  ${l}/third@3x.png 3x,\n`
					}
				},
				h = e => {
					let {
						rank: t,
						className: n
					} = e;
					const s = t && b[t];
					return s ? a.a.createElement("img", {
						alt: s.alt,
						className: Object(r.a)(d.a.placeBadge, n),
						src: s.src,
						srcSet: s.srcSet
					}) : null
				}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(n.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				themedWidget: "_3uxjfiwzc4v4BiMEQHtZ3J",
				header: "_2F2J545Bkg5AzZZpmRUV5B",
				openModalButtonContainer: "Phr96vmtPy_VTwey6qWL_",
				openModalButton: "_1wSRscxdBnLN2r_D5XZhbe",
				modal: "PxqE9oFD_60_KiA_nA9CV",
				list: "_3DfAiOLDfE9ufqbW_M8d4G"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "PredictionLeaderboardSidebar", (function() {
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				c = n("./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				p = n("./src/reddit/hooks/useModalState.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				f = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				g = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				x = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less"),
				v = n.n(x);
			const y = e => {
				let {
					className: t,
					subredditId: n,
					tournamentId: r
				} = e;
				var x;
				const y = Object(b.a)(),
					E = Object(l.fb)(),
					_ = "true" === (null == E ? void 0 : E.queryParams["top-predictors"]),
					[O, C, j] = Object(p.a)(_),
					{
						leaderboard: k,
						error: S
					} = Object(c.a)(n, r),
					w = r ? o.a.createElement(i.a, {
						tournamentId: r
					}) : o.a.createElement(h.a, null);
				if (o.a.useEffect(() => {
						k && y(r ? Object(m.h)(r) : Object(m.f)())
					}, [k, r]), !(null === (x = null == k ? void 0 : k.topPredictorsRank) || void 0 === x ? void 0 : x.length) || S) return null;
				const {
					currentRank: N,
					topPredictorsRank: P
				} = k, I = Boolean(r) ? s.fbt._("Tournament leaderboard", null, {
					hk: "1WFLrI"
				}) : s.fbt._("Top Predictors", null, {
					hk: "3HCYxQ"
				});
				return o.a.createElement(d.a, {
					className: Object(a.a)(v.a.themedWidget, t),
					contentOnly: !0
				}, o.a.createElement("h2", {
					className: v.a.header
				}, I), o.a.createElement(f.a, {
					className: v.a.list,
					currentRank: N,
					topPredictorsRank: P.slice(0, 4),
					tokenIcon: w
				}), o.a.createElement("div", {
					className: v.a.openModalButtonContainer
				}, o.a.createElement(u.a, {
					className: v.a.openModalButton,
					isFullWidth: !0,
					priority: u.c.Primary,
					onClick: () => {
						r && y(Object(m.c)()), C()
					}
				}, s.fbt._("See All", null, {
					hk: "1Ozf02"
				}))), O && o.a.createElement(g.a, {
					className: v.a.modal,
					leaderboard: k,
					tournamentId: r,
					tokenIcon: w,
					onClose: j
				}))
			};
			t.default = y
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/predictions/index.ts"),
				a = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts");

			function i(e, t) {
				const n = Object(r.d)(),
					i = Object(r.e)(n => t ? Object(a.h)(n, {
						tournamentId: t
					}) : Object(a.d)(n, {
						subredditId: e
					})),
					c = Object(r.e)(t => Object(a.c)(t, {
						subredditId: e
					})),
					d = Object(r.e)(t => Object(a.b)(t, {
						subredditId: e
					})),
					l = Object(r.e)(t => Object(a.a)(t, {
						subredditId: e
					}));
				return Object(s.useEffect)(() => {
					d || c || l || n(Object(o.k)(e))
				}, [c, d, l, e, n]), {
					leaderboard: i,
					error: l
				}
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/TournamentBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "joYEg_Eiw7o4Qi0wAP2aB",
				image: "q2Mp_RDxvnC8ol_stVX1T",
				title: "zm9tjKy9uW1OKszNhlp5D",
				subhead: "_1RDleqO8yhcVcIUFTNcRQf",
				confetti: "Y_uA8FA3p1c-n00AzM7Nd"
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/Leaderboard/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3MBNNo6fqxb0uNWyKrI5o4",
				ranks: "uUKoQ8LWuO4EBz06uq6FH",
				user: "_168PZ4dr9lD44TbD01rL8Y",
				"user-name": "_1Jphq41nWXoBjEjW1Ymo5b",
				userName: "_1Jphq41nWXoBjEjW1Ymo5b",
				"user-avatar": "v7it-sHd-KXMUERsL2892",
				userAvatar: "v7it-sHd-KXMUERsL2892",
				icon: "_1tiE0SiSAjC25b5rL9hoDL",
				label: "_35GlMF3eH5-VyQQhEZBWdA",
				rankBadge: "_1p2R5WS3mFFQ2DKgvcxocn"
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3oTYdDXHZkuflfa_Dbps_h",
				"tournament-info": "_1MwmQHjBLiH6XWzzpVBtHF",
				tournamentInfo: "_1MwmQHjBLiH6XWzzpVBtHF",
				"tournament-title": "_140bbDmuxY96fDpSG10nI6",
				tournamentTitle: "_140bbDmuxY96fDpSG10nI6",
				long: "_17m7Cs0WhffLTYHtIMgC_w",
				stats: "_1H91NxLQLk0yC_vRXxCJLx",
				stat: "_2A9JItQmo_iv_nQGpFFRM6",
				simple: "_3QjFRZNg1KYioFwtOXMvT0"
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3lcQbWv2Yp41rPB4Kfza3X"
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				i = n("./node_modules/history/esm/history.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				l = n("./src/reddit/actions/economics/predictions/index.ts"),
				u = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts");
			var m = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				p = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				b = n.n(p);
			const h = e => {
				let {
					subredditId: t,
					queriedTournamentId: n
				} = e;
				const a = Object(o.d)(),
					{
						leaderboard: p,
						error: h
					} = function(e, t) {
						const n = Object(o.d)(),
							r = Object(o.e)(e => Object(u.h)(e, {
								tournamentId: t
							})),
							a = Object(o.e)(e => Object(u.g)(e, {
								tournamentId: t
							})),
							i = Object(o.e)(e => Object(u.f)(e, {
								tournamentId: t
							})),
							c = Object(o.e)(e => Object(u.e)(e, {
								tournamentId: t
							}));
						return Object(s.useEffect)(() => {
							r || i || a || c || n(Object(l.o)(e, t))
						}, [r, a, i, c, e, t, n]), {
							leaderboard: r,
							error: c
						}
					}(t, n);
				return !(null == p ? void 0 : p.topPredictorsRank) || h ? null : r.a.createElement(m.a, {
					className: b.a.modal,
					leaderboard: p,
					tournamentId: n,
					tokenIcon: r.a.createElement(d.a, {
						tournamentId: n
					}),
					onClose: () => {
						const e = new URLSearchParams(location.search);
						e.delete("prediction-tournament-rank"), a(Object(c.b)(Object(i.c)({
							pathname: location.pathname,
							search: e.toString()
						})))
					},
					isQueried: !0
				})
			};
			var f = n("./src/reddit/components/PostList/index.tsx"),
				g = n("./src/reddit/connectors/PostList/index.ts"),
				x = n("./src/reddit/constants/postLayout.ts"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/helpers/predictions/index.ts"),
				E = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/config.ts"),
				C = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/reddit/components/Econ/Prediction/Confetti/index.tsx"),
				k = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				S = n("./src/reddit/models/Prediction/index.ts"),
				w = n("./src/reddit/selectors/poll/index.ts"),
				N = n("./src/redditGQL/types.ts"),
				P = n("./src/reddit/components/Econ/PredictionsPostList/TournamentBanner/index.m.less"),
				I = n.n(P);
			const T = e => {
					let {
						subredditId: t
					} = e;
					const n = Object(o.e)(e => Object(E.f)(e, {
							subredditId: t
						})),
						s = Object(o.e)(e => n ? Object(w.h)(e, n.tournamentId) : []);
					if (!n) return null;
					if (n.status === N.z.Closed) return r.a.createElement(R, null);
					const a = s.filter(e => e.predictionStatus === S.b.Open && e.endsAt > Date.now()),
						i = a.length > 0,
						c = a.length && a.some(e => !e.userSelection);
					return i && !c ? r.a.createElement(B, null) : i ? null : r.a.createElement(L, null)
				},
				L = () => r.a.createElement("section", {
					className: I.a.container
				}, r.a.createElement("div", {
					className: I.a.image,
					style: {
						backgroundImage: `url(${O.a.assetPath}/img/econ/predictions/closet.png)`
					}
				}), r.a.createElement("div", null, r.a.createElement("h3", {
					className: I.a.title
				}, C.fbt._("There's nothing to predict right now", null, {
					hk: "29BSNR"
				})), r.a.createElement("p", {
					className: I.a.subhead
				}, C.fbt._("Mods can always add new questions, so check back later!", null, {
					hk: "1HtxKJ"
				})))),
				B = () => r.a.createElement("section", {
					className: I.a.container
				}, r.a.createElement(j.a, {
					className: I.a.confetti
				}), r.a.createElement(k.a, {
					className: I.a.image
				}), r.a.createElement("div", null, r.a.createElement("h3", {
					className: I.a.title
				}, C.fbt._("Your predictions are in!", null, {
					hk: "2hlZz4"
				})), r.a.createElement("p", {
					className: I.a.subhead
				}, C.fbt._("Mods can always add new questions, so check back later!", null, {
					hk: "48ISNI"
				})))),
				R = () => r.a.createElement("section", {
					className: I.a.container
				}, r.a.createElement("div", {
					className: I.a.image,
					style: {
						backgroundImage: `url(${O.a.assetPath}/img/econ/predictions/closet.png)`
					}
				}), r.a.createElement("div", null, r.a.createElement("h3", {
					className: I.a.title
				}, C.fbt._("No prediction tournaments are active right now", null, {
					hk: "4G1oCo"
				})), r.a.createElement("p", {
					className: I.a.subhead
				}, C.fbt._("Check back to see when a tournament is created.", null, {
					hk: "2ldkRW"
				}))));
			var A = n("./src/lib/classNames/index.ts"),
				D = n("./src/lib/prettyPrintNumber/index.ts"),
				M = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				F = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx"),
				U = n("./src/lib/constants/index.ts"),
				W = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx"),
				H = n("./src/reddit/components/UserIcon/index.tsx"),
				V = n("./src/reddit/controls/InternalLink/index.tsx"),
				G = n("./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/Leaderboard/index.m.less"),
				z = n.n(G);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), K = e => {
				let {
					className: t,
					ranks: n
				} = e;
				return r.a.createElement("div", {
					className: Object(A.a)(z.a.container, t)
				}, r.a.createElement("div", {
					className: z.a.label
				}, q._("Tournament Leaders", null, {
					hk: "2JMRGi"
				})), r.a.createElement("div", {
					className: z.a.ranks
				}, n.map(e => {
					let {
						redditor: t,
						redditorInfo: n,
						rank: s
					} = e;
					var o, a, i, c;
					return r.a.createElement(V.default, {
						key: n.id,
						className: z.a.user,
						to: `/user/${null==t?void 0:t.name}`,
						disabled: n.displayName === U.F || n.displayName === U.Lb
					}, r.a.createElement("div", {
						className: z.a.userAvatar
					}, r.a.createElement(H.a, {
						className: z.a.icon,
						iconUrl: null === (o = null == t ? void 0 : t.icon) || void 0 === o ? void 0 : o.url,
						isNSFW: Boolean(null === (a = null == t ? void 0 : t.profile) || void 0 === a ? void 0 : a.isNsfw),
						userName: null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : ""
					}), r.a.createElement(W.a, {
						className: z.a.rankBadge,
						rank: s
					})), r.a.createElement("div", {
						className: z.a.userName
					}, null !== (c = null == t ? void 0 : t.name) && void 0 !== c ? c : n.displayName))
				})))
			};
			var J = n("./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/index.m.less"),
				Q = n.n(J);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = e => {
				let {
					subredditId: t
				} = e;
				var n, s;
				const a = Object(o.e)(e => Object(E.f)(e, {
						subredditId: t
					})),
					i = Object(o.e)(e => a && Object(u.h)(e, {
						tournamentId: a.tournamentId
					}));
				return a ? r.a.createElement("section", {
					className: Q.a.container,
					style: {
						backgroundImage: M.a[a.theme] || M.a.theme_1
					}
				}, r.a.createElement("div", {
					className: Q.a.tournamentInfo
				}, r.a.createElement("p", null, Y._("Predictions Tournament", null, {
					hk: "2AxvmU"
				})), r.a.createElement("h1", {
					className: Object(A.a)(Q.a.tournamentTitle, {
						[Q.a.long]: a.name.length > 40
					})
				}, a.name, " ", r.a.createElement(F.a, {
					status: a.status
				}))), r.a.createElement("div", {
					className: Q.a.stats
				}, (null == i ? void 0 : i.topPredictorsRank) && i.topPredictorsRank.length >= 3 && r.a.createElement(K, {
					className: Q.a.stat,
					ranks: i.topPredictorsRank.slice(0, 3)
				}), r.a.createElement("div", {
					className: Object(A.a)(Q.a.stat, Q.a.simple)
				}, r.a.createElement("dt", null, a.totalParticipantsCount ? Object(D.b)(a.totalParticipantsCount) : "--"), r.a.createElement("dd", null, Y._("Players", null, {
					hk: "1S5q3e"
				}))), r.a.createElement("div", {
					className: Object(A.a)(Q.a.stat, Q.a.simple)
				}, r.a.createElement("dt", null, a.totalPredictionsCount || "--"), r.a.createElement("dd", null, Y._("Predictions", null, {
					hk: "3E8BVX"
				}))), r.a.createElement("div", {
					className: Object(A.a)(Q.a.stat, Q.a.simple)
				}, r.a.createElement("dt", {
					className: Object(A.a)({
						[Q.a.long]: Boolean((null === (n = null == i ? void 0 : i.currentRank) || void 0 === n ? void 0 : n.rank) && i.currentRank.rank >= 1e6)
					})
				}, (null === (s = null == i ? void 0 : i.currentRank) || void 0 === s ? void 0 : s.rank) || "--"), r.a.createElement("dd", null, Y._("Your rank", null, {
					hk: "2tS82X"
				}))))) : null
			};
			var X = n("./src/reddit/components/Econ/PredictionsPostList/index.m.less"),
				$ = n.n(X);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(g.a)(e => {
				const t = Object(v.fb)(),
					n = null == t ? void 0 : t.queryParams["prediction-tournament-rank"],
					s = Object(o.e)(t => Object(_.F)(t, e.listingName)),
					{
						isFetched: i
					} = Object(a.a)(s),
					c = Object(o.e)(e => Object(E.l)(e, {
						subredditId: s
					})),
					d = r.a.useMemo(() => Object.values(c).sort(y.b).map(e => e.id), [Object.keys(c).length]);
				return r.a.createElement("div", {
					className: $.a.container
				}, i && r.a.createElement(r.a.Fragment, null, r.a.createElement(Z, {
					subredditId: s
				}), r.a.createElement(T, {
					subredditId: s
				})), i && n && r.a.createElement(h, {
					subredditId: s,
					queriedTournamentId: n
				}), r.a.createElement(f.a, ee({}, e, {
					postsById: c,
					postIds: d,
					loadMore: null,
					layout: x.g.Large
				})))
			})
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/Content.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less"),
				d = n.n(c);
			const l = e => {
				let {
					steps: t,
					withModalStyles: n
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: Object(i.a)(d.a.banner, {
						[d.a.withModalStyles]: n
					})
				}, a.a.createElement("div", {
					className: d.a.header
				}, a.a.createElement("h2", null, a.a.createElement("span", {
					className: d.a.subHeader
				}, r.fbt._("Predictions", null, {
					hk: "ACRaq"
				})), r.fbt._("How It Works", null, {
					hk: "3QW4EZ"
				})), a.a.createElement("img", {
					alt: r.fbt._("Snoos gathered around a dark ball", null, {
						hk: "2sN6dD"
					}),
					className: d.a.bannerImage,
					src: `${s.a.assetPath}/img/econ/predictions/predictor_snoos_small.png`
				})), a.a.createElement("div", {
					className: d.a.innerCircle
				}), a.a.createElement("div", {
					className: d.a.middleCircle
				}), a.a.createElement("div", {
					className: d.a.outerCircle
				})), a.a.createElement("div", {
					className: Object(i.a)(d.a.stepsWrapper, {
						[d.a.withModalStyles]: n
					})
				}, t.map((e, n) => {
					let {
						title: s,
						description: r
					} = e;
					return a.a.createElement("div", {
						key: s,
						className: d.a.step
					}, a.a.createElement("div", {
						className: Object(i.a)(d.a.stepCount, {
							[d.a.showConnectingLine]: n !== t.length - 1
						})
					}, a.a.createElement("span", {
						className: d.a.stepNumber
					}, n + 1)), a.a.createElement("div", null, a.a.createElement("h3", {
						className: d.a.stepTitle
					}, s), a.a.createElement("p", {
						className: d.a.stepDescription
					}, r)))
				})))
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less": function(e, t, n) {
			e.exports = {
				widget: "_2skejWRT1rfgG6BplBSilb",
				banner: "_3Vuq-pvkzBHvhhc3OpN8CM",
				bannerImage: "_2GFV0XwSqv5Tr7PgZrRhVJ",
				withModalStyles: "_1RCK5xRisccYHWg1jiIoGb",
				circle: "_2016VIWG6bI8Nj8dsE4ypu",
				innerCircle: "_3j7kvNb-J6NJvKhocXhFpj",
				middleCircle: "_2m_eeq88Ifrg139rZyFFXk",
				outerCircle: "_3Ylo3qve0XxZ8mD9a2f841",
				header: "_2uBF46oc23WTMTLsgZkvHK",
				subHeader: "_2B5e_YXlIHTvceClBKv1h7",
				stepsWrapper: "_1A39M70HpOpbB2VfD7JRbq",
				step: "_1Z2_r-1ZgxI_OPxZQClct5",
				stepCount: "_2HWLDJDxl7OJmP4RsXqD9G",
				showConnectingLine: "_2XjaqnXdYZD-Z3ebpnuijI",
				stepNumber: "_39kWugzptUpQdvLWvfg7p6",
				stepTitle: "_1sgBe74lmm4Ril3sKb2nVU",
				stepDescription: "Utf73H7YpNoys-kCKEC6r",
				learnMoreWrapper: "_2KfRiOpMkVmGl6pasDgDj",
				learnMoreButton: "_3sIJNS0bEKk48Q-RSRYaUB"
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "jdE9Qjw-aDJCVYAdabIzn"
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return ee
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx"),
				u = n("./src/reddit/components/UserIcon/index.tsx"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/UserAvatar/index.m.less"),
				b = n.n(p);
			const h = e => {
				let {
					className: t,
					user: n,
					tokenIcon: s
				} = e;
				var a, c, p, h;
				const {
					redditor: f,
					redditorInfo: g,
					rank: x,
					score: v
				} = n, y = null !== (a = null == f ? void 0 : f.name) && void 0 !== a ? a : null == g ? void 0 : g.displayName;
				return r.a.createElement(m.default, {
					className: Object(i.a)(t, {
						[b.a.first]: 1 === x,
						[b.a.third]: 3 === x
					}),
					to: `/user/${y}`,
					disabled: (null == g ? void 0 : g.displayName) === d.F || (null == g ? void 0 : g.displayName) === d.Lb
				}, r.a.createElement("div", {
					className: b.a.avatarContainer
				}, r.a.createElement("div", {
					className: b.a.outerCircle
				}, r.a.createElement("div", {
					className: b.a.innerCircle
				})), (null === (c = null == g ? void 0 : g.snoovatarIcon) || void 0 === c ? void 0 : c.url) ? r.a.createElement("img", {
					className: b.a.avatar,
					alt: o.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					src: g.snoovatarIcon.url
				}) : r.a.createElement("div", {
					className: b.a.defaultAvatar
				}, r.a.createElement(u.a, {
					className: b.a.userIcon,
					iconUrl: null === (p = null == f ? void 0 : f.icon) || void 0 === p ? void 0 : p.url,
					isNSFW: Boolean(null === (h = null == f ? void 0 : f.profile) || void 0 === h ? void 0 : h.isNsfw),
					userName: y
				})), r.a.createElement(l.a, {
					className: b.a.placeBadge,
					rank: x
				})), r.a.createElement("div", {
					className: b.a.winnerName
				}, y), r.a.createElement("div", {
					className: b.a.score
				}, r.a.cloneElement(s, {
					className: b.a.tokenIcon
				}), " ", v))
			};
			var f = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				g = n("./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts"),
				x = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				E = n("./src/reddit/hooks/useModalState.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				C = n("./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/index.m.less"),
				j = n.n(C);
			const k = e => {
				let {
					subredditId: t
				} = e;
				var n;
				const [d, l, u] = Object(E.a)(!1), m = Object(_.a)(), p = Object(a.e)(e => Object(O.f)(e, {
					subredditId: t
				})), {
					leaderboard: b,
					error: C
				} = Object(g.a)(t);
				if (Object(s.useEffect)(() => {
						b && m(Object(y.f)())
					}, [m, b]), C || !(null === (n = null == b ? void 0 : b.topPredictorsRank) || void 0 === n ? void 0 : n.length) || b.topPredictorsRank.length < 3 || !p) return null;
				const k = b.topPredictorsRank.slice(0, 3),
					S = r.a.createElement(c.a, {
						tournamentId: p.tournamentId
					});
				return r.a.createElement(x.a, {
					className: j.a.themedWidget,
					contentOnly: !0
				}, r.a.createElement("h2", {
					className: j.a.header
				}, o.fbt._("All time top predictors", null, {
					hk: "1sZnun"
				})), r.a.createElement("div", {
					className: j.a.winnersContainer
				}, k.map(e => {
					var t;
					return r.a.createElement(h, {
						className: Object(i.a)(j.a.user, {
							[j.a.first]: 1 === e.rank,
							[j.a.second]: 2 === e.rank
						}),
						key: null === (t = e.redditorInfo) || void 0 === t ? void 0 : t.id,
						user: e,
						tokenIcon: S
					})
				})), r.a.createElement(v.a, {
					priority: v.c.Primary,
					className: j.a.seeAllButton,
					onClick: () => {
						m(Object(y.b)()), l()
					},
					isFullWidth: !0
				}, o.fbt._("See all", null, {
					hk: "23jjqI"
				})), d && r.a.createElement(f.a, {
					leaderboard: b,
					tokenIcon: S,
					onClose: u
				}))
			};
			var S = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				w = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx"),
				N = n("./src/lib/prettyPrintNumber/index.ts"),
				P = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Stats/index.m.less"),
				I = n.n(P);
			const T = e => {
				let {
					tournament: t,
					userRank: n
				} = e;
				return r.a.createElement("dl", {
					className: I.a.statsList
				}, r.a.createElement("div", {
					className: I.a.stat
				}, r.a.createElement("dt", {
					className: I.a.statValue
				}, t.totalParticipantsCount ? Object(N.b)(t.totalParticipantsCount) : "--"), r.a.createElement("dd", {
					className: I.a.statDescription
				}, o.fbt._("Players", null, {
					hk: "QKnjj"
				}))), r.a.createElement("div", {
					className: I.a.stat
				}, r.a.createElement("dt", {
					className: I.a.statValue
				}, t.totalPredictionsCount || "--"), r.a.createElement("dd", {
					className: I.a.statDescription
				}, o.fbt._("Predictions", null, {
					hk: "2MJSk1"
				}))), r.a.createElement("div", {
					className: I.a.stat
				}, r.a.createElement("dt", {
					className: Object(i.a)(I.a.statValue, {
						[I.a.long]: Boolean((null == n ? void 0 : n.rank) && n.rank >= 1e6)
					})
				}, (null == n ? void 0 : n.rank) || "--"), r.a.createElement("dd", {
					className: I.a.statDescription
				}, o.fbt._("Your rank", null, {
					hk: "2aohc3"
				}))))
			};
			var L = n("./src/reddit/components/HumanDate/index.tsx"),
				B = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts"),
				R = n("./src/reddit/helpers/trackers/predictions.ts"),
				A = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Predictor/index.m.less"),
				D = n.n(A);
			const M = e => {
				let {
					className: t,
					userRank: n
				} = e;
				const s = Object(_.a)(),
					{
						rank: o,
						redditor: a,
						redditorInfo: c
					} = n,
					{
						icon: p,
						name: b,
						profile: h
					} = a || {},
					f = null != b ? b : c.displayName;
				return r.a.createElement("div", {
					className: Object(i.a)(D.a.predictor, t)
				}, r.a.createElement(l.a, {
					className: D.a.rank,
					rank: o
				}), r.a.createElement(m.default, {
					className: D.a.userLink,
					onClick: () => s(Object(R.g)({
						targetUserId: c.id
					})),
					to: `/user/${f}`,
					disabled: c.displayName === d.F || c.displayName === d.Lb
				}, r.a.createElement("div", {
					className: D.a.leaderboardIcon
				}, r.a.createElement(u.a, {
					className: Object(i.a)(D.a.avatar),
					iconUrl: null == p ? void 0 : p.url,
					isNSFW: !!(null == h ? void 0 : h.isNsfw),
					userName: null != f ? f : ""
				})), r.a.createElement("div", {
					className: D.a.userName
				}, f)))
			};
			var F = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/index.m.less"),
				U = n.n(F);
			const W = e => {
				let {
					tournamentId: t
				} = e;
				const [n, s, i] = Object(E.a)(!1), d = Object(a.e)(e => Object(O.a)(e, t)), l = Object(a.e)(e => Object(B.h)(e, {
					tournamentId: t
				})), u = Object(_.a)();
				if (!d || !l) return null;
				const m = l.topPredictorsRank.slice(0, 3);
				return r.a.createElement("section", null, r.a.createElement("div", {
					className: U.a.header,
					style: {
						backgroundImage: S.a[d.theme] || S.a.theme_1
					}
				}, r.a.createElement("h3", {
					className: U.a.tournamentTitle
				}, d.name, " ", r.a.createElement(w.a, {
					status: d.status
				})), d.createdAt && d.endedAt && r.a.createElement("div", {
					className: U.a.tournamentDate
				}, r.a.createElement(L.a, {
					seconds: Math.floor(d.createdAt / 1e3),
					showDay: !0,
					shortMonths: !0
				}), " ", "-", " ", r.a.createElement(L.a, {
					seconds: Math.floor(d.endedAt / 1e3),
					showDay: !0,
					shortMonths: !0
				}))), r.a.createElement("div", {
					className: U.a.content
				}, r.a.createElement("div", {
					className: U.a.tournamentInfo
				}, r.a.createElement("div", {
					className: U.a.leaderboard
				}, m.map(e => r.a.createElement(M, {
					key: e.redditorInfo.id,
					userRank: e
				}))), r.a.createElement(T, {
					tournament: d,
					userRank: l.currentRank
				})), r.a.createElement(v.a, {
					className: U.a.seeAllButton,
					onClick: () => {
						s(), u(Object(y.a)())
					},
					isFullWidth: !0
				}, o.fbt._("See all", null, {
					hk: "aMyfi"
				}))), n && r.a.createElement(f.a, {
					isPreviousEvent: !0,
					leaderboard: l,
					tokenIcon: r.a.createElement(c.a, {
						tournamentId: d.tournamentId
					}),
					tournamentId: d.tournamentId,
					onClose: i
				}))
			};
			var H = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/index.m.less"),
				V = n.n(H);
			const G = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(_.a)(),
					s = Object(a.e)(e => Object(O.g)(e, {
						subredditId: t
					}).slice(1, 3).map(e => e.tournamentId));
				return r.a.useEffect(() => {
					s.length && n(Object(y.d)())
				}, [s]), s.length ? r.a.createElement(x.a, {
					className: V.a.themedWidget,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: V.a.content
				}, r.a.createElement("h2", {
					className: V.a.header
				}, o.fbt._("Previous tournaments", null, {
					hk: "2BA4B9"
				})), s.map(e => r.a.createElement(W, {
					key: e,
					tournamentId: e
				})))) : null
			};
			var z = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/Content.tsx"),
				q = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less"),
				K = n.n(q);
			const J = [{
				title: o.fbt._("Mods create questions", null, {
					hk: "2Ay8LV"
				}),
				description: o.fbt._("A Predictions tournament kicks off once questions are created. More questions can be added as the tournament progresses.", null, {
					hk: "11SFeA"
				})
			}, {
				title: o.fbt._("Users make predictions", null, {
					hk: "4c8bYm"
				}),
				description: o.fbt._("Predict using tokens given to you. Put down more tokens to win bigger rewards (if you’re right).", null, {
					hk: "17d2f"
				})
			}, {
				title: o.fbt._("Track the competition", null, {
					hk: "1ZIdYB"
				}),
				description: o.fbt._("Follow the leaderboard to see who gets the most tokens. When mods close a tournament, final winners are announced!", null, {
					hk: "3o8fok"
				})
			}];
			var Q = () => {
					const e = Object(_.a)();
					Object(s.useEffect)(() => {
						e(Object(R.r)())
					}, [e]);
					return r.a.createElement(x.a, {
						className: K.a.widget,
						contentOnly: !0
					}, r.a.createElement(z.a, {
						steps: J
					}), r.a.createElement("div", {
						className: K.a.learnMoreWrapper
					}, r.a.createElement(m.default, {
						to: "/predictions",
						onMouseDown: () => e(Object(R.f)())
					}, r.a.createElement(v.t, {
						className: K.a.learnMoreButton,
						isFullWidth: !0
					}, o.fbt._("Learn More", null, {
						hk: "4wy6Ra"
					})))))
				},
				Y = (n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"), n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"));

			function Z(e) {
				let {
					subredditId: t
				} = e;
				const n = Object(a.e)(e => Object(O.f)(e, {
					subredditId: t
				}));
				return n ? r.a.createElement(Y.default, {
					subredditId: t,
					tournamentId: n.tournamentId
				}) : null
			}
			var X = n("./src/reddit/components/Econ/Tournament/Sidebar/index.m.less"),
				$ = n.n(X);

			function ee(e) {
				let {
					subredditId: t
				} = e;
				return r.a.createElement("div", {
					className: $.a.container
				}, r.a.createElement(k, {
					subredditId: t
				}), r.a.createElement(Q, null), r.a.createElement(Z, {
					subredditId: t
				}), r.a.createElement(G, {
					subredditId: t
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Economics-SubredditPremium-LFGBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Economics-SubredditPremium-LFGBanner").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumNewUserWelcome").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spSpecialMemberships", o)
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/upperFirst.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/config.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/isFakeSubreddit/index.ts"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/components/PostList/Placeholder.tsx"),
				b = n("./src/reddit/components/EmptySubreddit.m.less"),
				h = n.n(b),
				f = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/lessComponent.tsx"),
				x = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const v = g.a.wrapped(p.a, "BackgroundPlaceholder", h.a),
				y = g.a.wrapped(m.n, "SubmitLink", h.a),
				E = e => {
					switch (e) {
						case d.W.RISING:
							return s.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.W.TOP:
						case d.W.CONTROVERSIAL:
							return null;
						default:
							return s.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				_ = e => {
					let {
						listingName: t,
						sort: n
					} = e;
					const r = E(n);
					return i.a.createElement("div", {
						className: h.a.MainContent
					}, i.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case d.W.RISING:
								return s.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.W.TOP:
							case d.W.CONTROVERSIAL:
								return s.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [s.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return s.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(n)), t && !Object(l.a)(t) && !!r && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: h.a.SecondaryText
					}, E(n)), i.a.createElement(y, {
						to: `/r/${t}/submit`
					}, s.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				O = () => i.a.createElement("div", {
					className: h.a.MainContent
				}, i.a.createElement("img", {
					className: h.a.SnooImg,
					src: `${c.a.assetPath}/img/snoo_discovery@1x.png`
				}), i.a.createElement("div", {
					className: h.a.PrimaryText
				}, s.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), i.a.createElement(y, {
					to: "/r/popular"
				}, s.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => i.a.createElement(i.a.Fragment, null, e.subreddit && i.a.createElement(x.a, {
				subredditId: e.subreddit.id,
				subredditSubscribers: e.subreddit.subscribers
			}), i.a.createElement("div", {
				"data-testid": "empty-subreddit",
				className: Object(f.a)(h.a.Component, h.a.EmptyHomepage)
			}, i.a.createElement(v, {
				isLoading: !1,
				layout: u.g.Classic
			}), i.a.createElement("div", {
				className: h.a.MainContentWrapper
			}, e.subreddit ? i.a.createElement(_, e) : i.a.createElement(O, null))))
		},
		"./src/reddit/components/EmptySubredditPostList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/constants/postLayout.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/PostList/Placeholder.tsx"),
				l = n("./src/reddit/hooks/useIsClient.ts"),
				u = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				m = n("./src/reddit/components/Econ/Prediction/EmptyPredictions/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = c.a.wrapped(d.a, "backgroundPlaceholder", p.a);

			function f(e) {
				let {
					subredditId: t
				} = e;
				const n = Object(o.e)(e => !!t && Object(u.k)(e, {
						subredditId: t
					})),
					s = Object(l.a)();
				return r.a.createElement("div", {
					className: Object(i.a)(p.a.component, p.a.emptyHomepage)
				}, r.a.createElement(h, {
					isLoading: n,
					layout: a.g.Classic
				}), s && !n && r.a.createElement("div", {
					className: p.a.mainContentWrapper
				}, r.a.createElement("div", {
					className: p.a.mainContent
				}, r.a.createElement("div", {
					className: p.a.primaryText
				}, b._("No prediction tournament posts", null, {
					hk: "1gqn5x"
				})))))
			}
			var g = n("./src/reddit/components/EmptySubreddit.tsx");

			function x(e) {
				let {
					isPredictionsPage: t,
					listingName: n,
					sort: s,
					subreddit: o
				} = e;
				return t ? r.a.createElement(f, {
					subredditId: null == o ? void 0 : o.id
				}) : r.a.createElement(g.a, {
					listingName: n,
					sort: s,
					subreddit: o || void 0
				})
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				g = n("./src/reddit/controls/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/Row.tsx"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/selectors/telemetry.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				_ = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				O = n.n(_);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = "view--layout--FUE",
				k = "LayoutSwitch--picker",
				S = Object(c.a)(g.a),
				w = {
					[b.d.Card]: function(e) {
						return o.a.createElement(v.a, C({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(v.a, C({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(v.a, C({}, e, {
							name: "view_compact"
						}))
					}
				},
				N = {
					[b.d.Card]: () => s.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => s.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => s.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => s.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				P = Object(h.u)(),
				I = Object(i.c)({
					dropdownIsOpen: Object(E.b)(k),
					postLayout: h.S,
					redditStyle: h.D
				}),
				T = Object(a.b)(I, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.y)(t, n)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: k
					}))
				}));
			class L extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: s,
							subredditId: r
						} = this.props;
						t ? t(e) : (n(e, r), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(y.Z)(t),
							subreddit: Object(y.hb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: s,
							postLayout: r
						} = this.props, a = n || b.e[r], i = e === a, c = w[e], l = N[e];
						return o.a.createElement(x.b, C({}, t, {
							className: Object(d.a)(O.a.LayoutItem, {
								[O.a.selected]: i,
								[O.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: O.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: O.a.LayoutItemTextClassName
						}), o.a.createElement(c, {
							className: O.a.LayoutIcon,
							onClick: i ? void 0 : s,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(S, C({}, e, {
							className: O.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: O.a.DropdownRow,
							rowIconClassName: O.a.DropdownRowIcon,
							rowSelectedClassName: O.a.DropdownRowSelected,
							tooltipId: k
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: s
					} = this.props, r = t || b.e[s];
					return o.a.createElement("div", {
						className: Object(d.a)(O.a.Container, e),
						id: j
					}, o.a.createElement("div", {
						className: O.a.DropdownContainer,
						onClick: n
					}, this.renderItem(r, {
						id: k,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = P(T(Object(p.c)(Object(l.a)(L))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				c = n("./src/reddit/actions/preferences.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				b = n("./src/lib/constants/index.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				g = n("./src/reddit/actions/tooltip.ts"),
				x = n("./node_modules/fbt/lib/FbtPublic.js"),
				v = n("./src/higherOrderComponents/asTooltip.tsx"),
				y = n("./src/reddit/constants/history.ts"),
				E = n("./src/reddit/constants/listingSorts.ts"),
				_ = n("./src/reddit/contexts/Tooltip.ts"),
				O = n("./src/reddit/controls/Dropdown/index.tsx"),
				C = n("./src/reddit/controls/Dropdown/Row.tsx"),
				j = n("./src/reddit/helpers/path/index.ts"),
				k = n("./src/reddit/helpers/trackers/navigation.ts"),
				S = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				w = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				N = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				P = n("./src/reddit/selectors/tooltip.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				L = n("./src/reddit/components/ListingSort/index.m.less"),
				B = n.n(L),
				R = n("./src/lib/lessComponent.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const D = "ListingSort--SortPicker",
				M = Object(v.a)(R.a.wrapped(O.a, "Dropdown", B.a)),
				F = R.a.wrapped(T.a, "ListingSortIcon", B.a),
				U = (R.a.wrapped(S.b, "DropdownTriangle", B.a), R.a.div("Title", B.a)),
				W = R.a.wrapped(e => r.a.createElement(C.b, A({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", B.a),
				H = e => {
					let {
						disabled: t,
						...n
					} = e;
					return r.a.createElement("div", A({}, n, {
						className: Object(a.a)(B.a.SortWrapper, n.className, {
							[B.a.isDisabled]: t
						})
					}))
				},
				V = R.a.div("DropdownRowDisabled", B.a),
				G = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				z = Object(f.c)({
					isAwardListingExperimentEnabled: N.a,
					isBestSortPopularEnabled: w.a,
					user: I.k,
					dropdownIsOpen: (e, t) => Object(P.b)(t.dropdownId || D)(e),
					isPopularPage: l.F
				}),
				q = Object(o.b)(z, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: s
					} = t;
					return {
						onOpenDropdown: () => e(Object(g.h)({
							tooltipId: n || D
						}))
					}
				});
			var K = R.a.wrapped(G(q(Object(d.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(U, null, x.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(H, {
					disabled: e.disabled
				}, e.children || r.a.createElement(W, {
					className: e.buttonClassName,
					displayText: Object(E.a)(e.sort),
					id: e.dropdownId || D,
					showDropdownTriangle: !0
				}, r.a.createElement(F, {
					sort: e.sort
				}))), r.a.createElement(_.a.Consumer, null, t => r.a.createElement(M, A({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || D
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(V, null, x.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, s, r) => {
					const o = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (e && (n || s) || t && s) && o.unshift(b.W.BEST), t && r && o.splice(3, 0, b.W.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(j.a)(e.baseUrl, `${t}/`),
						s = n.split("?")[0],
						o = e.isProfilePage ? n.replace(s + "?", "") : void 0;
					return r.a.createElement(C.b, {
						className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(E.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(k.b)(t))
						},
						href: {
							pathname: s,
							state: {
								[y.b.FeedLoadReason]: y.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, r.a.createElement(F, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", B.a),
				J = n("./src/reddit/constants/parameters.ts");
			const Q = e => {
					const t = Y[e];
					return t && t() || ""
				},
				Y = {
					[b.fc.AllStates]: () => x.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[b.fc.Alaska]: () => x.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.fc.Alabama]: () => x.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.fc.Arkansas]: () => x.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.fc.Arizona]: () => x.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.fc.California]: () => x.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.fc.Colorado]: () => x.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.fc.Connecticut]: () => x.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.fc.DistrictOfColumbia]: () => x.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.fc.Delaware]: () => x.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.fc.Florida]: () => x.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.fc.Georgia]: () => x.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.fc.Hawaii]: () => x.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.fc.Iowa]: () => x.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.fc.Idaho]: () => x.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.fc.Illinois]: () => x.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.fc.Indiana]: () => x.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.fc.Kansas]: () => x.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.fc.Kentucky]: () => x.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.fc.Louisiana]: () => x.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.fc.Massachusetts]: () => x.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.fc.Maryland]: () => x.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.fc.Maine]: () => x.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.fc.Michigan]: () => x.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.fc.Minnesota]: () => x.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.fc.Missouri]: () => x.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.fc.Mississippi]: () => x.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.fc.Montana]: () => x.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.fc.NorthCarolina]: () => x.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.fc.NorthDakota]: () => x.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.fc.Nebraska]: () => x.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.fc.NewHampshire]: () => x.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.fc.NewJersey]: () => x.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.fc.NewMexico]: () => x.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.fc.Nevada]: () => x.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.fc.NewYork]: () => x.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.fc.Ohio]: () => x.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.fc.Oklahoma]: () => x.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.fc.Oregon]: () => x.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.fc.Pennsylvania]: () => x.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.fc.RhodeIsland]: () => x.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.fc.SouthCarolina]: () => x.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.fc.SouthDakota]: () => x.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.fc.Tennessee]: () => x.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.fc.Texas]: () => x.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.fc.Utah]: () => x.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.fc.Virginia]: () => x.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.fc.Vermont]: () => x.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.fc.Washington]: () => x.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.fc.Wisconsin]: () => x.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.fc.WestVirginia]: () => x.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.fc.Wyoming]: () => x.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Z = n("./src/reddit/components/StateSort/index.m.less"),
				X = n.n(Z);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = R.a.wrapped(O.a, "_Dropdown", X.a),
				te = Object(v.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && re(e) === b.z.UnitedStates
				},
				se = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return b.fc.AllStates
				},
				re = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = re(e),
						n = se(e);
					return ne(e) ? `${t}_${n}` : t
				},
				ae = Object(l.u)(),
				ie = Object(f.c)({
					dropdownIsOpen: Object(P.b)("StateSort--StateSortPicker")
				}),
				ce = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(c.w)(b.z.UnitedStates + "_" + n))
					}
				}));
			var de = R.a.wrapped(ae(ce(e => {
				const t = `${e.baseUrl}?${J.g}=${b.z.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(W, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Q(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(_.a.Consumer, null, n => r.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(b.fc).map(n => {
					const s = b.fc[n];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.fc.AllStates ? t : `${t}_${e}`)(s), oe(s))
					}, r.a.createElement(C.b, {
						className: Object(a.a)(e.rowClassName, e.sort === s ? e.rowSelectedClassName : void 0),
						displayText: Q(s),
						isSelected: e.sort === s
					}))
				}))))
			})), "Component", X.a);
			const le = {
				[b.z.Everywhere]: () => x.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.z.UnitedStates]: () => x.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.z.Argentina]: () => x.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.z.Australia]: () => x.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.z.Bulgaria]: () => x.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.z.Canada]: () => x.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.z.Chile]: () => x.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.z.Colombia]: () => x.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.z.Croatia]: () => x.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.z.CzechRepublic]: () => x.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.z.Finland]: () => x.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.z.France]: () => x.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.z.Germany]: () => x.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.z.Greece]: () => x.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.z.Hungary]: () => x.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.z.Iceland]: () => x.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.z.India]: () => x.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.z.Ireland]: () => x.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.z.Italy]: () => x.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.z.Japan]: () => x.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.z.Malaysia]: () => x.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.z.Mexico]: () => x.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.z.NewZealand]: () => x.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.z.Philippines]: () => x.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.z.Poland]: () => x.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.z.Portugal]: () => x.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.z.PuertoRico]: () => x.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.z.Romania]: () => x.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.z.Serbia]: () => x.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.z.Singapore]: () => x.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.z.Spain]: () => x.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.z.Sweden]: () => x.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.z.Taiwan]: () => x.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.z.Thailand]: () => x.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.z.Turkey]: () => x.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.z.UnitedKingdom]: () => x.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var ue = n("./src/reddit/components/CountrySort/index.m.less"),
				me = n.n(ue);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const be = "CountrySort--CountrySortPicker",
				he = Object(l.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(P.b)(be)
				});
			var ge = he(Object(o.b)(fe, e => ({
					onCloseDropdown: t => e(Object(g.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(g.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t, {
							[y.b.FeedLoadReason]: y.a.GeoModeChange
						})), e(Object(c.w)(n))
					}
				}))(e => {
					const t = re(e.sort),
						n = se(e.sort),
						s = `${e.baseUrl}?${J.g}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(a.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, r.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(W, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[b.z.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), r.a.createElement(_.a.Consumer, null, n => r.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(b.z).map(n => {
						const o = b.z[n];
						return r.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${s}${oe(o)}`, o)
						}, r.a.createElement(C.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: le[o](),
							isSelected: t === o
						}))
					})))), t === b.z.UnitedStates && r.a.createElement(de, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: n,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				xe = n("./node_modules/path-browserify/index.js"),
				ve = n.n(xe),
				ye = n("./src/reddit/components/TimeSort/index.m.less"),
				Ee = n.n(ye);

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = Object(v.a)(O.a),
				Ce = R.a.div("ListingSortContainer", Ee.a),
				je = Object(l.u)(),
				ke = Object(f.c)({
					dropdownIsOpen: Object(P.b)("TimeSort--SortPicker")
				});
			var Se = je(Object(o.b)(ke, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => r.a.createElement(Ce, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(W, {
					className: e.buttonClassName,
					displayText: Object(E.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(_.a.Consumer, null, t => r.a.createElement(Oe, _e({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.ic.HOUR, b.ic.DAY, b.ic.WEEK, b.ic.MONTH, b.ic.YEAR, b.ic.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(l.J)(e) || (n = ve.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						s = Object(p.a)(n, {
							[J.C]: t
						}),
						o = s.split("?")[0],
						i = `${s.replace(o+"?","")}`;
					return r.a.createElement(C.b, {
						className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(E.b)(t),
						href: {
							pathname: o,
							state: {
								[y.b.FeedLoadReason]: y.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(k.d)(t))
						}
					})
				}))))))),
				we = n("./src/reddit/constants/listings.ts"),
				Ne = n("./src/reddit/controls/Button/index.tsx"),
				Pe = n("./src/reddit/icons/fonts/index.tsx"),
				Ie = n("./src/reddit/selectors/meta.ts"),
				Te = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Le = n.n(Te);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Re = new Set([b.W.CONTROVERSIAL, b.W.TOP]),
				Ae = new Set([b.W.CONTROVERSIAL, b.W.RISING]),
				De = new Set([b.W.CONTROVERSIAL]),
				Me = "ListingSort--Overflow",
				Fe = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				Ue = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, w.a, I.k, l.F, N.a, Ie.j, (e, t, n, s, r, o, a) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e,
						locale: a
					};
					const i = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (t && (s || n) || r && n) && i.unshift(b.W.BEST), r && o && i.splice(3, 0, b.W.AWARDED), {
						isPopularPage: r,
						sortOptions: i,
						locale: a
					}
				});
			class We extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(k.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: s
						} = this.props, o = s ? Object(p.a)(n, {
							sort: e
						}) : Object(j.a)(n, `${e}/`), i = o.split("?")[0], c = s ? o.replace(i + "?", "") : void 0;
						return r.a.createElement(Ne.t, {
							className: Object(a.a)(Le.a.SortLink, e === t && Le.a.selected),
							kind: Ne.b.InternalLink,
							priority: Ne.c.Plain,
							Icon: n => r.a.createElement(F, Be({}, n, {
								className: Object(a.a)(Le.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(E.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[y.b.FeedLoadReason]: y.a.SortChange
								},
								search: c
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: s,
							sort: o
						} = this.props, a = s && !!n && e === b.W.HOT && o === b.W.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && r.a.createElement(ge, {
							baseUrl: we.c[we.b.Popular],
							buttonClassName: Le.a.DropdownButton,
							className: Le.a.CountrySort,
							disabled: t,
							dropdownClassName: Le.a.Dropdown,
							rowClassName: Le.a.DropdownRow,
							rowSelectedClassName: Le.a.DropdownRowSelected,
							wrapperClassName: Le.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Le.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: n,
						locale: s
					} = this.props;
					return !s.startsWith("en") && (n ? e === b.W.AWARDED && (t === b.W.HOT || t === b.W.TOP) : e === b.W.BEST && t === b.W.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([b.W.TOP, b.W.NEW]);
					return De.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return Ae.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: s,
						sortOptions: o,
						timeSort: i
					} = this.props, c = !t && Re.has(s), d = Ae.has(s), l = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== s);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(K, Be({}, this.props, {
						buttonClassName: Le.a.DropdownButton,
						className: Object(a.a)(Le.a.SortDropdown, e),
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(a.a)(Le.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(s), c && r.a.createElement(Se, {
						buttonClassName: Le.a.DropdownButton,
						className: Le.a.TimeSort,
						dropdownClassName: Le.a.Dropdown,
						listingSort: s,
						onChange: n,
						rowClassName: Le.a.DropdownRow,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						timeSort: i || b.jc,
						wrapperClassName: Le.a.DropdownSortWrapper
					}), u.length > 0 && r.a.createElement(K, Be({}, this.props, {
						className: Object(a.a)(Le.a.SortOverflow, e),
						dropdownClassName: Le.a.Dropdown,
						dropdownId: Me,
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), r.a.createElement("button", {
						className: Le.a.SortOverflowButton,
						id: Me
					}, r.a.createElement(Pe.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var He = Fe(Object(o.b)(Ue)(Object(d.c)(We))),
				Ve = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ge = n.n(Ve);
			const ze = Object(l.u)({
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				qe = Object(o.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						updateSortPreference: (t, s) => {
							if (n) {
								const r = Object(i.c)({
									sort: t,
									timeSort: s
								});
								e(Object(c.J)(n, r))
							}
						}
					}
				});
			class Ke extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: n,
						disabled: s = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(Ge.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(He, {
						baseUrl: e,
						disabled: s,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !o && r.a.createElement(m.a, {
						className: Ge.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = ze(qe(Object(d.c)(Ke)))
		},
		"./src/reddit/components/Governance/ClaimPointsBanner/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-ClaimPointsBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-ClaimPointsBanner").then(n.bind(null, "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = Object(r.a)("spClaimablePoints", o)
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				a = Object(r.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(a.c)({
				featureEnabled: c.d.spWalletRegistrationBanner
			});
			t.a = Object(o.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/HotPotatoEmbed/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2lTcCESjnP_DKJcPBqBFLK",
				expanded: "_3YFAwrV7olBOgwhZhuM3fH",
				hotPotatoIcon: "rgiE-zLgaejGTLKViTz7K",
				iframe: "Q-OBKuePQXXm3LGhGfv3k",
				overlay: "moeaZEzC0AbAvmDwN22Ma"
			}
		},
		"./src/reddit/components/HotPotatoEmbed/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/header.ts"),
				u = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/search.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/tooltip.ts");
			const h = s.a.hotPotatoUrl,
				f = new URL(`${h}/embed`),
				g = ["fullscreen", "edit", "cx", "cy", "px", "ts"],
				x = () => {
					var e;
					if ("undefined" == typeof window) return {
						iframeURL: void 0,
						isFullscreen: !1
					};
					const t = window.location.search.toLocaleLowerCase(),
						n = new URLSearchParams(t);
					for (const s of g) {
						const t = null === (e = n.get(s)) || void 0 === e ? void 0 : e.toLocaleLowerCase(),
							r = "string" == typeof t && "false" !== t;
						n.has(s) && r && t && f.searchParams.set(s, t)
					}
					return {
						iframeURL: f.toString(),
						isFullscreen: f.searchParams.has("fullscreen") || f.searchParams.has("edit")
					}
				},
				v = s.a.hotPotatoUrl;
			var y, E;
			! function(e) {
				e.RefreshAuth = "refreshAuth", e.Close = "close", e.SignIn = "signIn", e.SyncCoordinates = "syncCoordinates", e.OpenProfile = "openProfile"
			}(y || (y = {})),
			function(e) {
				e.SetFullScreen = "setFullScreen", e.InjectAuthHeaders = "injectAuthHeaders", e.InjectTelemetryDefaults = "injectTelemetryDefaults"
			}(E || (E = {}));
			var _ = class {
					constructor(e, t, n, s, r, o) {
						this.subscribe = () => {
							null === window || void 0 === window || window.addEventListener("message", this.onMessage)
						}, this.unsubscribe = () => {
							null === window || void 0 === window || window.removeEventListener("message", this.onMessage)
						}, this.onMessage = e => {
							let {
								origin: t,
								data: n
							} = e;
							t === v && (n.type === y.RefreshAuth ? this.sendMessageAuthAndTelemetry() : n.type === y.Close ? this.onMessageClose() : n.type === y.SignIn && n.dest ? this.onMessageSignIn(n.dest) : n.type === y.SyncCoordinates && n.data ? this.onMessageSyncCoordinates(n.data) : n.type === y.OpenProfile && n.data && this.onMessageOpenProfile(n.data))
						}, this.sendMessageAuthAndTelemetry = () => {
							const {
								expiration: e,
								headers: t,
								telemetryDefaults: n
							} = this.getAuthClientData();
							this.sendMessageInjectAuthHeaders({
								expiration: e,
								headers: t
							}), this.sendMessageInjectTelemetryDefaults({
								telemetryDefaults: n
							})
						}, this.sendMessageFullscreen = e => {
							this.sendMessage({
								type: E.SetFullScreen,
								state: e
							})
						}, this.sendMessageInjectAuthHeaders = e => {
							this.sendMessage({
								type: E.InjectAuthHeaders,
								...e
							})
						}, this.sendMessageInjectTelemetryDefaults = e => {
							this.sendMessage({
								type: E.InjectTelemetryDefaults,
								...e
							})
						}, this.ref = e, this.getAuthClientData = t, this.onMessageClose = n, this.onMessageSignIn = s, this.onMessageSyncCoordinates = r, this.onMessageOpenProfile = o
					}
					sendMessage(e) {
						var t, n;
						null === (n = null === (t = this.ref.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === n || n.postMessage(e, v)
					}
				},
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				C = n("./src/reddit/constants/keycodes.ts"),
				j = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				k = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				w = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/telemetry.ts")),
				N = n("./src/telemetry/models/Event.ts");
			const P = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				return Object.keys(e).reduce((n, s) => {
					const r = e[s];
					return r ? (n[s] = "object" == typeof r && t <= 4 ? P(r, t + 1) : r, n) : n
				}, {})
			};
			var I = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/components/HotPotatoEmbed/index.m.less"),
				L = n.n(T);
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = Object(c.c)({
				session: e => e.user.session,
				telemetryDefaults: e => {
					const t = {
							...Object(w.n)(e),
							...{
								action: N.d.Load,
								source: N.f.Experiment,
								noun: N.e.UserId
							}
						},
						{
							action: n,
							source: s,
							noun: r,
							...o
						} = Object(N.g)(t);
					return P(o)
				},
				isTooltipOpened: e => Boolean(e.tooltip.tooltipId),
				isSearchDropdownOpened: e => e.search.isDropdownOpen,
				isHeaderDropdownOpened: e => e.header.isSubscriptionsDropdownOpen,
				isLoggedIn: I.Q
			}), A = Object(a.b)(R, e => ({
				closeSearchDropdown: () => e(Object(m.k)()),
				closeHeaderDropdown: () => e(Object(l.f)()),
				closeTooltipModal: () => e(Object(b.j)()),
				openLoginModal: () => e(Object(u.openLoginModal)()),
				openProfilePage: t => e(Object(i.b)(`/user/${t}`)),
				openErrorToast: () => e(Object(p.f)({
					duration: p.a,
					kind: S.b.Error,
					text: B._("Something wen't wrong. Please try again later.", null, {
						hk: "4vD48K"
					})
				}))
			}));
			class D extends o.a.Component {
				constructor(e) {
					super(e), this.iframeRef = Object(r.createRef)(), this.handleEscapeKey = e => {
						e.code === C.a.Escape.toString() && this.toggleFullScreen(!1)
					}, this.toggleFullScreen = e => {
						this.messenger.sendMessageFullscreen(e), this.setState({
							isFullscreen: e
						}), Object(j.e)(!e)
					}, this.getAuthClientData = () => {
						const {
							session: e,
							telemetryDefaults: t
						} = this.props;
						return {
							expiration: e ? new Date(e.expires).getTime() : 0,
							headers: e ? {
								Authorization: `Bearer ${e.accessToken}`
							} : {},
							telemetryDefaults: t
						}
					}, this.onMessageSignIn = () => {
						this.props.openLoginModal()
					}, this.onMessageClose = () => {
						this.toggleFullScreen(!1)
					}, this.onMessageSyncCoordinates = e => {
						let {
							cx: t,
							cy: n,
							px: s,
							ts: r
						} = e;
						const o = new URL(location.href);
						o.searchParams.set("cx", `${t}`), o.searchParams.set("cy", `${n}`), o.searchParams.set("px", `${s}`), r && o.searchParams.set("ts", `${r}`), history.replaceState({}, "", o.toString())
					}, this.onMessageOpenProfile = e => {
						let {
							profileName: t
						} = e;
						t && "string" == typeof t && this.props.openProfilePage(t)
					}, this.onLoad = () => {
						this.setState({
							isLoaded: !0
						})
					}, this.onError = () => {
						this.setState({
							isLoaded: !1
						}), this.props.openErrorToast()
					}, this.onOverlayClick = () => {
						const {
							isFullscreen: e
						} = this.state, t = this.isAnyRedditModalOpened();
						e && t ? this.closeAnyRedditModal() : this.state.isFullscreen || (this.toggleFullScreen(!0), this.props.sendEvent(Object(k.c)()))
					}, this.messenger = new _(this.iframeRef, this.getAuthClientData, this.onMessageClose, this.onMessageSignIn, this.onMessageSyncCoordinates, this.onMessageOpenProfile);
					const {
						iframeURL: t,
						isFullscreen: n
					} = x();
					this.state = {
						iframeURL: t,
						isFullscreen: n,
						isLoaded: !1
					}
				}
				componentDidMount() {
					this.messenger.subscribe(), document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					this.messenger.unsubscribe(), document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentDidUpdate(e) {
					let {
						session: t,
						isLoggedIn: n
					} = e;
					this.props.isLoggedIn === n && this.props.session === t || this.messenger.sendMessageAuthAndTelemetry()
				}
				closeAnyRedditModal() {
					const {
						isTooltipOpened: e,
						isHeaderDropdownOpened: t,
						isSearchDropdownOpened: n
					} = this.props;
					e && this.props.closeTooltipModal(), t && this.props.closeHeaderDropdown(), n && this.props.closeSearchDropdown()
				}
				isAnyRedditModalOpened() {
					const {
						isTooltipOpened: e,
						isHeaderDropdownOpened: t,
						isSearchDropdownOpened: n
					} = this.props;
					return e || t || n
				}
				render() {
					const {
						isLoaded: e,
						isFullscreen: t,
						iframeURL: n
					} = this.state, r = this.isAnyRedditModalOpened();
					return o.a.createElement("div", {
						className: Object(d.a)(L.a.container, {
							[L.a.expanded]: t
						})
					}, n && o.a.createElement("iframe", {
						ref: this.iframeRef,
						onLoad: this.onLoad,
						onError: this.onError,
						className: L.a.iframe,
						allow: "web-share; clipboard-read; clipboard-write",
						src: n
					}), !e && o.a.createElement("img", {
						className: L.a.hotPotatoIcon,
						src: `${s.a.assetPath}/img/hot-potato-loader.gif`
					}), e && (!t || r) && o.a.createElement("div", {
						className: L.a.overlay,
						onClick: this.onOverlayClick
					}))
				}
			}
			t.a = Object(O.c)(A(D))
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				o = n("./src/lib/pubsub/index.ts"),
				a = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === a.b.Popular,
				d = e => e && e.toLowerCase() === a.b.All,
				l = e => e && e === i.c,
				u = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, n, o, i, m, {
						listingName: p,
						subreddit: b,
						idCardWidget: h
					} = e;
					const f = h && h.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						g = h && h.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let x, v;
					return l(p) ? (t = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = a.c[a.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), i = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/all", m = a.c[a.b.All]) : c(p) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/popular", m = a.c[a.b.Popular]) : p && (n = h && h.description, o = u(""), i = b.displayText, m = b.url, v = h && h.subscribersCount, x = h && h.currentlyViewingCount), {
						snooBackground: o,
						description: n,
						titleText: i,
						url: m,
						subscribersCount: v,
						subscribersText: f,
						currentlyViewingText: g,
						currentlyViewingCount: x,
						...t ? {
							bannerBackgroundImage: t
						} : {}
					}
				},
				p = new o.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				f = e => p.publish(e ? b : h)
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-InFeedPostCreation").then(n.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = n.n(a),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", i.a),
				l = c.a.div("TextWrapper", i.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: s,
					subtitle: a,
					title: c,
					textWrapperClassName: u
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(t, i.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, r.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), s ? r.a.createElement(d, null, s) : r.a.createElement(d, null), r.a.createElement(l, {
					className: u
				}, r.a.createElement("div", {
					className: i.a.title
				}, c), a && r.a.createElement("div", {
					className: i.a.subtitle
				}, a)))
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/constants/colors.ts"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				u = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				h = n.n(b);
			const f = o.a.createElement(u.a, {
					className: h.a.icon
				}),
				g = Object(i.c)({
					subreddit: m.z,
					subredditAboutInfo: m.w
				}),
				x = Object(a.b)(g);
			t.a = x(e => {
				const {
					subreddit: t,
					subredditAboutInfo: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = n && n.quarantineMessageHtml,
					a = n && n.quarantineMessage || s.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return o.a.createElement(p.a, {
					className: h.a.container,
					color: d.a.quarantine,
					icon: f,
					subtitle: o.a.createElement("span", null, s.fbt._("This community is {=quarantined}", [s.fbt._param("=quarantined", o.a.createElement("a", {
						className: h.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", r ? o.a.createElement(c.a, {
						className: h.a.rawHtmlDisplay,
						html: r
					}) : a, " ", o.a.createElement(l.default, {
						className: h.a.link,
						to: "/"
					}, s.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: s.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "i", (function() {
				return w
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/lodash/isNil.js"),
				c = n.n(i),
				d = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...s
							}
						} = this;
						l.a.publish(d.a, s, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					c()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					c()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(o.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const n = Object(h.b)(e, t),
					s = Object(f.J)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var x = Object(o.b)(() => Object(a.a)(g, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => r.a.createElement(p, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const v = (e, t) => {
				const n = Object(h.b)(e, t),
					s = Object(f.J)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var y = Object(o.b)(() => Object(a.a)(v, e => e))(e => r.a.createElement(p, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var E = Object(o.b)(() => Object(a.c)({
					subreddit: f.U
				}))(e => r.a.createElement(p, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				_ = n("./src/reddit/hooks/usePostContext.ts");
			var O = e => {
				const t = Object(_.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "post",
					data: n
				}) : null
			};
			var C = e => {
				const t = Object(_.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: n
				}) : null
			};
			var j = e => {
				const t = Object(_.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: n
				}) : null
			};
			var k = Object(o.b)(() => Object(a.c)({
				subreddit: f.U
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var S = Object(o.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.M)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var w = Object(o.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(f.U)(e, {
						subredditId: n
					}) : null
				}
			}))(e => r.a.createElement(p, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(l);
			const m = Object(r.createContext)(null),
				p = Object(r.createContext)(null);
			class b extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return o.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = i.f + 10,
				f = o.a.memo(() => {
					const [e, t] = Object(r.useState)("-500px"), n = Object(r.useContext)(c.a);
					return o.a.createElement(m.Consumer, null, r => r && o.a.createElement("div", {
						className: Object(a.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, o.a.createElement(d.t, {
						kind: d.b.Button,
						priority: d.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const n = e.currentTarget.clientWidth + 55;
							t(`-${n}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							r.focus(), r.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				g = o.a.memo(() => o.a.createElement(p.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/PostList/index.tsx"),
				r = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(s.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				d = n.n(c);
			const l = {
				[a.W.BEST]: "best",
				[a.W.HOT]: "hot",
				[a.W.NEW]: "new",
				[a.W.CONTROVERSIAL]: "controversial",
				[a.W.TOP]: "top",
				[a.W.RISING]: "rising",
				[a.W.AWARDED]: "award"
			};

			function u(e) {
				let {
					className: t,
					isFilled: n,
					sort: s
				} = e;
				return l[s] ? r.a.createElement(i.a, {
					name: l[s],
					isFilled: n,
					className: Object(o.a)(t, d.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
			}
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/Media/index.m.less"),
				i = n.n(a);
			const c = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? s.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? s.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = e => {
					let {
						isNSFW: t,
						isSpoiler: n
					} = e;
					return o.a.createElement("div", {
						className: i.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: i.a.unblurButton
					}, c(t, n)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(o.b)(() => Object(a.c)({
					isNightmodeOn: m.db
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(i.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), e.isTweet || (s.height = "100%"), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				b = n("./src/reddit/components/PlayButton/index.tsx"),
				h = n("./src/reddit/constants/elementClassNames.ts"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				x = n("./src/reddit/hooks/useClickSourceData.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/constants/tracking.ts"),
				C = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				j = n.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => e > 2 * v.e,
				w = e => {
					const t = Object(d.a)(j.a.image, h.g, e.className, {
							[j.a.mShowCentered]: e.showCentered,
							[j.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${v.j}px`), e.isListing || e.isTall && S(e.height) || (n.maxHeight = `${v.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				N = e => {
					const t = {};
					return (!e.showFull && Object(v.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${v.j}px`, e.shouldBlur && (t.maxWidth = Object(v.L)(e.height, e.width) ? `${v.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(j.a.container, e.className),
						style: t
					}, e.children)
				},
				P = Object(a.b)(() => Object(c.a)(y.F, _.jb, (e, t) => {
					let {
						isSponsored: n,
						postId: s
					} = t;
					return n && s ? Object(y.b)(e, s) : null
				}, E.d, y.G, (e, t, n, s, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: s.pageType,
					post: r
				})));
			t.a = P(e => {
				const t = Object(x.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(g.a)(e.post, e.pageType)
					}
				}, T(e)) : e.isListing && e.postPermalink ? o.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, T(e)) : T(e)
			});
			const I = (e, t) => o.a.createElement(w, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[O.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				T = e => {
					let {
						onClick: t,
						...n
					} = e;
					const r = Object(v.L)(n.height, n.width),
						a = S(n.height) && r;
					return o.a.createElement(N, k({}, n, {
						className: `${r?`${O.a} `:""}${n.className||""}`
					}), n.isListing ? o.a.createElement("div", {
						className: n.contentImageClassName
					}, I(r, n)) : o.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: a ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: j.a.imageLink
					}, I(r, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && o.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > v.j && Object(v.L)(n.height, n.width) && o.a.createElement("div", {
						className: j.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && o.a.createElement(b.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/forceHttps/index.ts"),
				i = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < i.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					s = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					c = Object(i.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				p = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/selectors/video.ts");
			const f = 100,
				g = f / 2 / 1e3;
			var x = n("./src/lib/forceHttps/index.ts"),
				v = n("./src/lib/hooks/usePrevious.ts");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function E(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: s,
					onBufferingChange: r,
					shouldLoad: i,
					shouldPause: c,
					showCentered: d,
					showFull: l,
					source: u,
					...m
				} = e;
				const p = Object(o.useRef)(),
					b = Object(o.useRef)(),
					h = Object(v.a)(c);

				function E(e) {
					if (e) {
						const e = null === (t = null == b ? void 0 : b.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == b ? void 0 : b.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(o.useEffect)(() => {
					if (E(!c && (t || s)), b.current && r) return p.current = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							o = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let a = !1,
							i = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, s) return s = !1, void(i = c);
							if (e.paused || e.seeking || !n) return void(i = c);
							const r = a;
							4 === e.readyState ? a = !1 : !a && c >= i && c < i + g ? a = !0 : a && c >= i && c > i + g && (a = !1), i = c, r !== a && t(a)
						}, f);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(b.current, r), () => {
						p.current && p.current()
					}
				}, []), Object(o.useEffect)(() => {
					h !== c && E(!c && (t || s))
				}, [h, c, t, s]), a.a.createElement("video", y({}, m, {
					ref: e => b.current = e,
					muted: !0
				}), a.a.createElement("source", {
					src: Object(x.a)(u || "")
				}))
			}
			var _ = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				O = n.n(_);
			const C = Object(c.c)({
				autoplayPref: b.b,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function j(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: o,
					started: c
				} = Object(i.e)(t => C(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: g,
					isNotCardView: x,
					showFull: v,
					shouldPause: y,
					width: _,
					isListing: j,
					className: k,
					showCentered: S,
					originalSource: w,
					isPromoted: N
				} = e, P = t && !(N && Object(d.hasAcceptableAds)()), I = Object(i.d)();

				function T(e) {
					I(e ? Object(u.r)(b) : Object(u.E)(b))
				}

				function L() {
					return I(Object(u.z)({
						postId: b
					}))
				}
				const B = r()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && I(Object(u.s)(b))
				}, 200);

				function R(e) {
					e.persist(), B(e)
				}

				function A(e) {
					var t;
					(o || M(e), c) || (t = e.timeStamp, I(Object(u.A)(b, t)))
				}

				function D(e) {
					I(Object(u.q)(b, e.timeStamp))
				}

				function M(e) {
					! function(e) {
						I(Object(u.D)({
							metadata: e,
							postId: b
						}))
					}({
						id: b,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function F(e) {
					s || A(e), o || M(e), I(Object(u.C)(b))
				}

				function U() {
					const e = {};
					return S && (e.margin = "0 auto"), j || (e.maxHeight = `${p.e}px`), a.a.createElement(E, {
						autoplay: P,
						className: Object(l.a)(m.a, O.a.styledVideo),
						height: g,
						isListing: j,
						isNotCardView: x,
						key: b,
						loop: !0,
						onBufferingChange: T,
						onLoadStart: D,
						onLoadedData: A,
						onLoadedMetadata: M,
						onPause: L,
						onPlaying: F,
						onTimeUpdate: R,
						shouldLoad: h,
						shouldPause: y,
						showCentered: S,
						showFull: v,
						source: f,
						style: e,
						width: _
					})
				}
				return j ? U() : a.a.createElement("div", {
					className: Object(l.a)(O.a.container, k, {
						[O.a.centered]: S
					})
				}, a.a.createElement("a", {
					href: w,
					target: "_blank",
					rel: "noopener noreferrer"
				}, U()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, n) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, n) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				videoStyles: "LAwAnSnoexNeHoqZmXdLD",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/ModProgressModule/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "ModProgressModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("ModProgressModule")]).then(n.bind(null, "./src/reddit/components/ModProgressModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModProgressModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/NewPostPill/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_369llFshxbL10dgfLlIApJ",
				joinOptimizationsM2: "_3Osc6MFU-m49imecphhHPb",
				caption: "_2TsfnDXso674GKQKeaYyJz",
				wrapperExp: "_1rsB1M-j-PhnVlJxrOyQWm",
				memberIcon: "DnG050aRzI2YZFy5DI13M",
				presenceDotOutlineClass: "_1UJxCy40wXDQVKcZcKkJy7"
			}
		},
		"./src/reddit/components/NewPostPill/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				l = n("./src/reddit/components/NewPostPill/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				const {
					onClick: t,
					subredditName: n
				} = e, l = Object(s.useContext)(c.a), p = Object(o.e)(e => Object(d.a)(e) || Object(d.c)(e));
				return r.a.createElement("div", {
					className: Object(a.a)(u.a.wrapper, {
						[u.a.wrapperExp]: l,
						[u.a.joinOptimizationsM2]: p
					}),
					onClick: t
				}, r.a.createElement(i.a, {
					iconsKey: n,
					shouldShowPresenceDot: !0,
					memberIconClassName: u.a.memberIcon,
					presenceDotOutlineClassName: u.a.presenceDotOutlineClass
				}), r.a.createElement("label", {
					className: u.a.caption
				}, m._("New Posts", null, {
					hk: "3tuby1"
				})))
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPicker.m.less": function(e, t, n) {
			e.exports = {
				InterestListButtons: "_3miLvWoAksppOIKDbHmCpH",
				interestListButtons: "_3miLvWoAksppOIKDbHmCpH",
				InterestButton: "_3oCL2oMbe3H81mue3bR1CQ",
				interestButton: "_3oCL2oMbe3H81mue3bR1CQ",
				sharedButtonStyles: "nGPPVLjaF9xHLhEfs0OCV",
				Selected: "_9bvUa3_8YwoacACdyRw_T",
				selected: "_9bvUa3_8YwoacACdyRw_T",
				Placeholder: "_3lj8QAQ0ABoP56baCrm__e",
				placeholder: "_3lj8QAQ0ABoP56baCrm__e",
				Icon: "_3DtgruA-lLYrQl-qbVEgJm",
				icon: "_3DtgruA-lLYrQl-qbVEgJm",
				isLeft: "_1U2p5JzQnPfAZNB3-974OG",
				isRight: "_3szUhYjG4tA4Hqfi9MD1fa",
				headerBarImproved: "_3WIacLhd307x2JsrQHXeSe",
				InterestPickerPreview: "_3mV_F85IUlHJXj6vglN9dL",
				interestPickerPreview: "_3mV_F85IUlHJXj6vglN9dL",
				Dismissed: "_3RAeTThkWAn32hs_GxGw58",
				dismissed: "_3RAeTThkWAn32hs_GxGw58",
				InterestPickerPreviewTopBorder: "_25lW6DMq80IbK6ieXPoFp_",
				interestPickerPreviewTopBorder: "_25lW6DMq80IbK6ieXPoFp_",
				InterestPickerPreviewHeader: "_3153esXkC4o22mmMb4NEwq",
				interestPickerPreviewHeader: "_3153esXkC4o22mmMb4NEwq",
				InterestListItem: "OuNwEANldIlJWdGdhx4Ah",
				interestListItem: "OuNwEANldIlJWdGdhx4Ah",
				Title: "_3rvplkPXZC8aONpCwbcmBN",
				title: "_3rvplkPXZC8aONpCwbcmBN",
				ChooseMore: "_3_KngAlh-KmD6kGmN3AnAs",
				chooseMore: "_3_KngAlh-KmD6kGmN3AnAs",
				CaretRight: "_1LQqSQrTWMFaG2ofR18jvF",
				caretRight: "_1LQqSQrTWMFaG2ofR18jvF",
				DismissButton: "_1g-0M7zTPIr2nIPPr-AHJh",
				dismissButton: "_1g-0M7zTPIr2nIPPr-AHJh"
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPickerPreview.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/login.ts"),
				i = n("./src/reddit/components/Onboarding/Interests/InterestPill.tsx"),
				c = n("./src/reddit/components/Scroller/ScrollChild.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/experiments.ts"),
				u = n("./src/reddit/helpers/counters/onboarding.ts"),
				m = n("./src/reddit/helpers/onboarding/reonboarding.ts"),
				p = n("./src/reddit/helpers/trackers/onboarding.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				f = n("./src/reddit/models/Onboarding/index.ts"),
				g = n("./src/reddit/selectors/experiments/onboarding.ts"),
				x = n("./src/lib/classNames/index.ts"),
				v = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				y = n.n(v);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = e => {
				let {
					interests: t
				} = e;
				const n = Object(o.d)(),
					c = Object(d.b)(),
					v = Object(o.e)(g.c),
					_ = v === l.ub.Feed ? t.topics.slice(0, 5) : t.topics,
					[O, C] = Object(s.useState)(!1),
					[j, k] = Object(s.useState)(),
					S = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
						e ? (k(e), c(Object(p.z)(null == e ? void 0 : e.topic, null == e ? void 0 : e.id))) : c(Object(p.x)()), n(Object(a.openD2xOnboardingModal)({
							type: f.d.REONBOARDING,
							selectedInterests: e ? {
								[e.id]: []
							} : {}
						})), Object(u.b)(f.f.Popover, v)
					},
					w = Object(s.useCallback)(() => {
						Object(m.a)(), c(Object(p.y)()), C(!0)
					}, [c]);
				return Object(m.b)() ? r.a.createElement("div", {
					className: Object(x.a)(y.a.InterestPickerPreview, {
						[y.a.Dismissed]: O
					})
				}, r.a.createElement("div", {
					className: y.a.InterestPickerPreviewTopBorder
				}), r.a.createElement("div", {
					className: y.a.InterestPickerPreviewHeader
				}, r.a.createElement("h3", {
					className: y.a.Title
				}, E._("What do you want to see more of?", null, {
					hk: "35GlAb"
				})), r.a.createElement("button", {
					"aria-label": E._("Dismiss", null, {
						hk: "2x5qvs"
					}),
					onClick: w
				}, r.a.createElement(b.a, {
					name: "close",
					className: y.a.DismissButton
				}))), r.a.createElement("ul", {
					className: y.a.InterestListButtons
				}, _.map((e, t) => {
					const n = e.topic;
					return r.a.createElement("li", {
						className: y.a.InterestListItem,
						key: e.id
					}, r.a.createElement(i.a, {
						colorIndex: t,
						isSelected: e === j,
						onClickHandler: () => S(e),
						topic: n
					}))
				})), r.a.createElement(h.a, {
					className: y.a.ChooseMore,
					onClick: () => S()
				}, E._("Choose more topics", null, {
					hk: "2bFeJ4"
				}), r.a.createElement(b.a, {
					className: y.a.CaretRight,
					name: "caret_right"
				}))) : null
			}, O = e => {
				let {
					children: t,
					desiredIdx: n,
					interests: s,
					sendEvent: o,
					variant: a
				} = e;
				return {
					child: {
						id: "interest-topic-recommendations",
						estHeight: 300,
						trackOnEnteredViewport: () => {
							Object(m.d)(), Object(u.b)(f.f.Feed, a), o(Object(p.A)())
						},
						render: () => r.a.createElement(_, {
							interests: s
						})
					},
					idx: Object(c.a)(n, t)
				}
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPill.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/polished/dist/polished.es.js"),
				c = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				d = n.n(c);
			const l = (e, t, n) => {
					if (!t && !n) return {};
					let s = u(e);
					return n && !t && (s = Object(i.f)(s, .25)), {
						backgroundColor: s
					}
				},
				u = e => m[e % 7],
				m = ["#c08d41", "#ffa800", "#ff4500", "#ff3881", "#b44ac0", "#6a5cff", "#3690ea"];
			t.a = e => {
				let {
					colorIndex: t = 0,
					isSelected: n = !1,
					isSubtopic: s = !1,
					onClickHandler: i,
					topic: c
				} = e;
				return r.a.createElement(o.t, {
					className: Object(a.a)(d.a.InterestButton, {
						[d.a.Selected]: n
					}),
					kind: o.b.Button,
					onClick: i,
					style: l(t, n, s)
				}, c)
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: a,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, n),
					style: Object(i.c)(s, e),
					onClick: a
				}, p), t)
			})
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/LRUCache/index.ts"),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				d = n("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				h = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(t, h.a.container, h.a.placeholder, h.a.large, p.a.largeAndMediumPostStyles)
				}, r.a.createElement(l.a, {
					className: h.a.backgroundWrapper
				}, r.a.createElement("div", {
					className: h.a.titleAndDescriptionContainer
				}, r.a.createElement("h3", {
					className: h.a.title
				}, f._("Top livestream", null, {
					hk: "4od1tZ"
				}))), r.a.createElement("div", {
					className: h.a.body
				}, r.a.createElement("div", {
					className: h.a.previewContainer
				}, r.a.createElement("div", {
					className: Object(i.a)(h.a.thumbnail, h.a.loading)
				})))))
			};
			var x = e => {
				let {
					className: t,
					layout: n
				} = e;
				return n === u.g.Classic ? r.a.createElement(c.b, {
					className: Object(i.a)(t, h.a.classicPostPlaceholder),
					isLoading: !0
				}) : n === u.g.Compact ? r.a.createElement(d.a, {
					className: Object(i.a)(t, h.a.compactPostPlaceholder),
					isLoading: !0
				}) : r.a.createElement(g, {
					className: t
				})
			};
			const v = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: n
					} = e;
					return r.a.createElement(x, {
						className: t,
						layout: n
					})
				},
				getComponent: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("RpanListingUnit")]).then(n.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var y = e => r.a.createElement(v, e),
				E = n("./src/reddit/components/Scroller/ScrollChild.ts"),
				_ = n("./src/reddit/helpers/trackers/rpan.ts");
			const O = e => e === u.g.Classic ? 84 : e === u.g.Compact ? 42 : 340,
				C = new o.a(20),
				j = e => {
					const t = `rpan-${e.layout}-${e.listingKey}`,
						n = C.get(t);
					if (n) return n;
					const s = Object(E.a)(e.desiredIndex, e.children),
						o = {
							child: {
								id: t,
								estHeight: O(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(_.H)()),
								render: t => {
									let {
										className: n
									} = t;
									return r.a.createElement(y, {
										className: n,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: s
						};
					return C.set(t, o), o
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				header: "_25K6Ujp7eqOAHEdYuHm3pY",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				overflowItemText: "fxp6qlPWJ76riedygoUS7",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				videoIcon: "_1uKWYPTIE0QxbdTkW9En19",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				bigExpando: "qecjZnTfgEjCTlYKgqrl0",
				bigExpandoIcon: "_8ViGpsDZkJ4aNM6aVyan0",
				previewContainer: "_1N144m-88joWY3ZwzWRjrl",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				loading: "_3Hsr_kP1TY2ld8xQG-XqAL",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				broadcastTitle: "_2PtVDFQbkz3Sh1f_ppShzf",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7",
				upvoteAnimation: "_1MEw3CaNaAuwCohG-n7UPc",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD"
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/lodash/sampleSize.js"),
				c = n.n(i),
				d = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				l = n("./src/reddit/hooks/useConstructor.ts"),
				u = n("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = n.n(u);
			const p = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-UserIcon-PresenceDot",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.resolve().then(n.bind(null, "./src/reddit/components/UserIcon/PresenceDot.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/UserIcon/PresenceDot.tsx"
					}
				}),
				b = 8,
				h = 3,
				f = e => {
					const {
						iconsKey: t,
						memberIconClassName: n,
						numVisibleIcons: s = h,
						presenceDotOutlineClassName: i,
						shouldShowPresenceDot: u,
						wrapperClassName: f
					} = e, g = Object(r.useRef)([]);
					return Object(l.a)(() => {
						const e = Object(d.a)(t, b, !0);
						g.current = c()(e, s)
					}), o.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, f)
					}, g.current.map((e, t) => {
						let {
							color: r,
							image: c
						} = e;
						return t === s - 1 && u ? o.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: t
						}, o.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, n),
							src: c,
							style: {
								backgroundColor: r
							}
						}), o.a.createElement(p, {
							showPresence: !0,
							outlineClassName: i
						})) : o.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, n),
							key: t,
							src: c,
							style: {
								backgroundColor: r
							}
						})
					}))
				};
			t.a = f
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, t, n) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(m);
			const b = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				h = c.a.wrapped(e => {
					const t = Object(l.a)();
					return o.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, s, r) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									r && s(n, r), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(s.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(s.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(i.a)(h))
		},
		"./src/reddit/components/RelatedSubredditsCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(s.a)({
					resolved: {},
					chunkName: () => "RelatedSubredditsCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("RelatedSubredditsCarousel").then(n.bind(null, "./src/reddit/components/RelatedSubredditsCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/RelatedSubredditsCarousel/index.tsx"
					}
				}),
				d = e => {
					const t = Object(a.e)(i.f),
						n = Object(a.e)(i.a);
					return t || n ? o.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/raf/index.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o);
			class i extends a.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && r.a.cancel(this.frame), this.frame = r()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return a.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				g = m.a.span("TooltipTarget", u.a),
				x = m.a.span("SpoilerWrapper", u.a),
				v = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return o.a.createElement(x, p({}, s, {
						className: Object(a.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				y = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
			class E extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return o.a.createElement(v, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(f, null, o.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(y, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = E
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "w", (function() {
				return L
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/reddit/components/RichTextJson/elements.m.less"),
				i = n.n(a),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", i.a), c.a.div("H2", i.a), c.a.div("H3", i.a), c.a.div("H4", i.a), c.a.div("H5", i.a), c.a.div("H6", i.a)],
				u = c.a.hr("Hr", i.a),
				m = c.a.code("M", i.a),
				p = c.a.pre("Pre", i.a),
				b = c.a.blockquote("Blockquote", i.a),
				h = c.a.p("P", i.a),
				f = c.a.li("Li", i.a),
				g = c.a.ul("Ul", i.a),
				x = c.a.ol("Ol", i.a),
				v = c.a.strong("B", i.a),
				y = c.a.em("I", i.a),
				E = c.a.span("U", i.a),
				_ = e => r.a.createElement("del", e),
				O = c.a.sub("Sub", i.a),
				C = c.a.sup("Sup", i.a),
				j = c.a.table("Table", i.a),
				k = c.a.tr("Tr", i.a),
				S = c.a.td("Tdl", i.a),
				w = c.a.td("Tdc", i.a),
				N = c.a.td("Tdr", i.a),
				P = c.a.th("Thl", i.a),
				I = c.a.th("Thc", i.a),
				T = (c.a.th("Thr", i.a), c.a.wrapped(e => r.a.createElement(o.b, e), "A", i.a)),
				L = c.a.wrapped(d.a, "A", i.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "b", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/findLastIndex.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				p = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				f = n("./src/reddit/components/RichTextJson/media.tsx"),
				g = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.m.less"),
				v = n.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = n("./src/lib/lessComponent.tsx").a.div("Container", v.a),
				_ = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...s
					} = e;
					return i.a.createElement(E, y({}, s, {
						style: {
							color: Object(b.a)(Object(p.a)({
								flairStyleTemplate: t,
								theme: n,
								...s
							}))
						}
					}))
				}),
				O = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.u || !!e.c && !e.c.every(e => e.e === h.A && !e.t),
				C = e => o()(e, O),
				j = e => e.findIndex(O),
				k = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: o,
						isNsfwBlockingModalEligible: a,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: p,
						renderMediaAsLinks: b,
						rtJsonElementProps: x,
						useExplicitTextColor: y,
						shouldBlur: O
					} = e, k = s.document, S = [], w = e.mediaMetadata || null, N = j(k), P = C(k);
					if (O && !r && !a) return i.a.createElement(E, {
						className: Object(c.a)(m.j, n)
					}, i.a.createElement("div", {
						className: v.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: v.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!o, !!d))));
					if (-1 !== N)
						for (let i = N; i <= P; i++) {
							const e = k[i];
							switch (e.e) {
								case h.k:
									S.push(g.c(e, x, i));
									break;
								case h.l:
									S.push(g.d(i));
									break;
								case h.b:
									S.push(g.a(e, w, x, i));
									break;
								case h.c:
									S.push(g.b(e, i));
									break;
								case h.p:
									S.push(g.f(e, w, x, i));
									break;
								case h.z:
									S.push(g.h(e, w, x, i));
									break;
								case h.u:
									S.push(g.g(e, w, x, i));
									break;
								case h.h:
									S.push(Object(f.a)(e, i));
									break;
								case h.m:
								case h.a:
								case h.D:
									S.push(...Object(f.b)(e, i, x, w, b, p, t))
							}
						}
					return y ? i.a.createElement(E, {
						className: Object(c.a)(m.j, n)
					}, S) : i.a.createElement(_, {
						className: Object(c.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, S)
				};
			class S extends i.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => s.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return k(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return P
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/isComment.ts"),
				b = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts");
			var f = e => o.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, o.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), o.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), o.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), o.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), o.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), o.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				g = n("./src/reddit/components/RichTextJson/elements.tsx"),
				x = n("./src/reddit/components/RichTextJson/media.m.less"),
				v = n.n(x),
				y = n("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = /\/(\w+)\/asset\/(\w+)\//,
				O = y.a.wrapped(g.a, "A", v.a),
				C = y.a.wrapped(l.a, "ImageBox", v.a),
				j = y.a.wrapped(e => o.a.createElement("p", e), "Caption", v.a),
				k = y.a.div("Placeholder", v.a),
				S = y.a.wrapped(e => {
					let {
						className: t,
						e: n,
						...r
					} = e;
					const a = n === h.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(k, E({
						className: t,
						style: {
							"--placeholder-content-text": `'${a}'`
						}
					}, r))
				}, "Placeholder", v.a),
				w = (e, t) => {
					let {
						c: n,
						x: s,
						y: r
					} = e;
					return o.a.createElement("div", {
						className: v.a.MediaWrapper
					}, o.a.createElement(u.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: s
					}, o.a.createElement(d.a, {
						isListing: !1,
						source: n,
						height: r,
						width: s,
						showCentered: !0,
						showFull: !0
					})))
				},
				N = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === h.s ? r = n.s.u : n.e === h.r ? r = n.s.gif : n.e === h.t && (r = (e => {
						const t = _.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? o.a.createElement(O, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				P = (e, t, n, s, r, i, d) => {
					const l = h.E(s, e.id);
					if (r) return [N(e, t, l)];
					const g = [];
					return l ? l.e === h.s ? g.push(((e, t, n, s) => {
						let {
							id: r,
							s: i
						} = e;
						return o.a.createElement("div", {
							className: Object(a.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: i.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: i.x
						}, o.a.createElement(C, {
							altText: s,
							originalSource: i.u,
							postId: r,
							source: i.u,
							height: i.y,
							width: i.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						})))
					})(l, t, !!e.c, d)) : l.e === h.r ? g.push(((e, t, n, s) => {
						let {
							id: r,
							ext: i,
							s: c
						} = e;
						if (Object(b.g)(r)) {
							const e = s.renderingObjectInfo,
								d = !!e && Object(p.b)(e),
								l = i || Object(b.f)(r);
							return o.a.createElement("div", {
								className: Object(a.a)({
									[v.a.MediaWrapper]: !d,
									[v.a.CommentGifWrapper]: d,
									[v.a.mHasCaption]: n
								})
							}, o.a.createElement(O, {
								href: l,
								key: t,
								target: "_blank"
							}, c.mp4 ? o.a.createElement("video", {
								className: v.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: c.mp4
							})) : {
								originalSource: l
							}), o.a.createElement(f, {
								className: v.a.GiphyLogo
							}))
						}
						return o.a.createElement("div", {
							className: Object(a.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: c.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c.x
						}, o.a.createElement(m.a, {
							height: c.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: c.mp4,
							width: c.x,
							postId: r,
							source: c.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(l, t, !!e.c, n)) : l.e === h.t && g.push(((e, t, n, s) => {
						let {
							hlsUrl: r,
							dashUrl: i,
							x: d,
							y: l,
							isGif: m
						} = e;
						return o.a.createElement("div", {
							className: Object(a.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: n
							})
						}, o.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d
						}, o.a.createElement(c.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: r,
							mpegDashSource: i,
							postId: s,
							isGif: m
						})))
					})(l, t, !!e.c, i)) : g.push(((e, t) => o.a.createElement(S, {
						e,
						key: t
					}))(e.e, t)), e.c && g.push(((e, t) => o.a.createElement(j, {
						key: t
					}, e))(e.c, `caption${t}`)), g
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return T
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "e", (function() {
				return W
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/v4.js"),
				l = n.n(d),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = n.n(g);
			const v = 1e3,
				y = 1e3;
			var E;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(E || (E = {}));
			class _ extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = E.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = E.Inside, setTimeout(() => {
							this.mouseLocation === E.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, v)
					}, this.onMouseOut = () => {
						this.mouseLocation = E.Outside, setTimeout(() => {
							this.mouseLocation !== E.Inside && this.setState({
								tooltipOpen: !1
							})
						}, y)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = b.n(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.hb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, r;
					t.e === p.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === p.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return r ? i.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: o,
						src: r,
						width: n,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && i.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var O = Object(u.c)(_),
				C = n("./src/reddit/components/RichTextJson/media.tsx"),
				j = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				k = n("./src/reddit/components/SubredditMention/index.tsx"),
				S = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				w = n("./src/reddit/helpers/isComment.ts"),
				N = n("./src/reddit/helpers/isPost.ts"),
				P = n("./src/reddit/helpers/richTextJson/index.ts"),
				I = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const T = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						o = [],
						a = s.length;
					for (let i = 0; i < a; i++) {
						const e = s[i];
						o.push(e.e === p.w ? e.t : W(e, t, i))
					}
					const d = c.x[r - 1];
					return i.a.createElement(d, {
						key: n
					}, o)
				},
				L = e => i.a.createElement(c.e, {
					key: e
				}),
				B = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						a = [];
					for (let i = 0; i < o; i++) a.push(D(r[i], t, n, i));
					return i.a.createElement(c.c, {
						key: s
					}, a)
				},
				R = (e, t) => {
					const n = e.c;
					return i.a.createElement(c.k, {
						key: t
					}, i.a.createElement(c.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				A = (e, t, n, s) => {
					const r = e.c,
						o = [],
						a = r.length;
					for (let l = 0; l < a; l++) {
						const e = r[l].c;
						e && e.length && o.push(i.a.createElement(c.g, {
							key: l
						}, e.map((e, s) => D(e, t, n, s))))
					}
					const d = e.o ? c.i : c.v;
					return i.a.createElement(d, {
						key: s
					}, o)
				},
				D = (e, t, n, s) => {
					switch (e.e) {
						case p.b:
							return B(e, t, n, s);
						case p.c:
							return R(e, s);
						case p.k:
							return T(e, n, s);
						case p.l:
							return L(s);
						case p.p:
							return A(e, t, n, s);
						case p.u:
							return F(e, t, n, s);
						case p.z:
							return M(e, t, n, s)
					}
				},
				M = (e, t, n, s) => {
					const r = e.c,
						o = e.h,
						a = r.length,
						d = o.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = o[c],
							{
								H: s,
								D: r
							} = z(e.a),
							{
								c: a = []
							} = e;
						l.push(i.a.createElement(s, {
							key: c
						}, U(a, t, n))), m[c] = r
					}
					for (let p = 0; p < a; p++) {
						const e = r[p],
							s = e.length,
							o = [];
						for (let r = 0; r < s; r++) {
							const s = m[r],
								{
									c: a = []
								} = e[r];
							o.push(i.a.createElement(s, {
								key: r
							}, U(a, t, n)))
						}
						u.push(i.a.createElement(c.t, {
							key: p
						}, o))
					}
					return i.a.createElement(c.n, {
						key: s
					}, i.a.createElement("thead", null, i.a.createElement(c.t, null, l)), i.a.createElement("tbody", null, u))
				},
				F = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(c.j, {
						key: e
					}, i.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(P.g)(r.id) ? i.a.createElement(c.j, {
						key: s
					}, U(e.c, t, n)) : Object(C.b)(r, s, n, t)
				},
				U = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === p.A) s.push(H(r, o));
						else if (r.e === p.x) s.push(i.a.createElement(j.a, {
							key: o
						}, U(r.c, t, n)));
						else if (r.e === p.n) s.push(i.a.createElement("br", {
							key: o
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && s.push(i.a.createElement(O, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else s.push(W(r, n, o))
					}
					return s
				},
				W = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const s = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(S.b)(e.u)) return i.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let r, o;
							const a = Object(I.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(N.b)(d) && (r = d.postId), d && Object(w.b)(d) && (o = d.id, r = d.postId), i.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: a,
								postId: r,
								commentId: o
							}, s);
						case p.y:
							return i.a.createElement(k.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return i.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return i.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: n,
						t: r
					} = e, o = [];
					if (!n) return G(0, r, t);
					const a = Object(s.a)(r);
					let i = 0,
						c = 0;
					const d = n.length;
					for (; i < d; i++) {
						const [e, t, s] = n[i], d = t + s, l = a[t], u = a[d] - l;
						l > c && o.push(G(0, r.substr(c, l - c), `between${i}`)), o.push(G(e, r.substr(l, u), i)), c = l + u
					}
					return c < r.length && o.push(G(0, r.substr(c), `remaining${i}`)), o
				},
				V = {
					[p.j.monospace]: c.h,
					[p.j.bold]: c.b,
					[p.j.italic]: c.f,
					[p.j.underline]: c.u,
					[p.j.strikethrough]: c.d,
					[p.j.subscript]: c.l,
					[p.j.superscript]: c.m
				},
				G = (e, t, n) => {
					let s = t;
					return s = o()(V, (t, s, r) => e & parseInt(r, 10) ? i.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				z = e => {
					switch (e) {
						case p.f:
							return {
								H: c.r, D: c.q
							};
						case p.d:
							return {
								H: c.r, D: c.o
							};
						case p.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/Scroller/ScrollChild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = (e, t) => {
				const n = new Set(Object.keys(t).map(e => parseInt(e, 10)));
				for (; n.has(e);) e++;
				return e
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("header", o.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, n) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Post/index.tsx"),
				g = n("./src/reddit/controls/InternalLink/index.tsx"),
				x = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				v = n("./src/reddit/helpers/name/index.ts"),
				y = n("./src/reddit/models/Flair/index.ts"),
				E = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = n("./src/reddit/components/MiniCardPost/index.m.less"),
				C = n.n(O),
				j = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				k = n.n(j);
			const S = e => e.type === y.f.Spoiler,
				w = Object(h.u)();
			t.a = w(Object(f.b)(Object(b.a)(Object(d.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: o,
					innerContainerClassName: d,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: f,
					shouldOpenPost: y,
					showSubredditMeta: O = !0,
					showSubredditName: j,
					subredditOrProfile: w
				} = e, N = h && h.preview && h.preview.url || void 0, P = h && h.isSponsored ? "promoted_trend" : "trending", I = h && Object(l.a)(h.permalink) || "", T = y && I || f && Object(i.a)("/search", {
					q: f.rawQuery,
					source: P
				}) || I, L = f ? f.subredditInfo && f.subredditInfo.icon : w && w.icon.url, B = f ? f.subredditInfo && f.subredditInfo.displayText : w && (w.displayText || w.name), R = h ? h.flair.filter(S) : [], A = h ? h.score : 0, D = h ? h.numComments : 0, M = h && h.isSponsored, F = Object(_.a)(e).body, U = `linear-gradient(\n      ${Object(r.f)(F,.2)},\n      ${Object(r.f)(F,.3)},\n      ${Object(r.f)(F,.4)},\n      ${Object(r.f)(F,.6)},\n      ${Object(r.f)(F,.8)},\n      ${F}\n    )`, W = a.a.createElement("div", {
					id: o,
					className: Object(c.a)(k.a.trendingPost, {
						[k.a["m-background"]]: !!N
					})
				}, a.a.createElement(g.default, {
					to: T
				}, a.a.createElement("div", {
					className: Object(c.a)(k.a.backgroundWrapper, C.a.backgroundWrapper, t),
					style: {
						background: Object(E.g)(Object(_.a)(e).body, N || Object(_.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, M && a.a.createElement("div", {
					className: k.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(c.a)(k.a.innerContainer, C.a.innerContainer, d),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? k.a.title : k.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(c.a)(k.a.description, n)
				}, R.length > 0 && a.a.createElement(m.a, {
					className: k.a.flair,
					titleFlair: R,
					nowrap: !0,
					post: h
				}), h.title) : a.a.createElement("div", {
					className: k.a.spacer
				}), O && L && B && a.a.createElement(x.a, {
					className: k.a.relatedSubredditMetaData,
					iconClassName: k.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", B)], {
						hk: "2YTyJf"
					})
				}), !O && h && a.a.createElement("div", {
					className: k.a.metaLine
				}, j && B && a.a.createElement("span", {
					className: k.a.meta
				}, Object(v.c)(B)), a.a.createElement("span", {
					className: k.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(A, "number", Object(u.b)(A))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: k.a.meta
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(D, "number", Object(u.b)(D))], {
					hk: "311aXY"
				})))))));
				return M ? a.a.createElement(p.a, {
					post: h
				}, W) : W
			}))))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = n.n(i);

			function d(e) {
				const {
					className: t,
					id: n,
					layoutBodyClassName: s,
					showCardView: i
				} = e, d = {
					[c.a["m-card"]]: i
				};
				return r.a.createElement("div", {
					id: n,
					className: Object(o.a)(c.a.container, d, t)
				}, r.a.createElement(a.a, {
					className: c.a.layout,
					bodyClassName: Object(o.a)(c.a.layoutBody, d, s),
					header: e.header,
					headerClassName: Object(o.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				container: "_3_c5cqV3WsdQo95Ql4El73",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = () => r.a.createElement(a.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => r.a.createElement(i.a, {
				className: e.className,
				header: m(),
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => r.a.createElement("div", {
				className: l.a.post,
				key: `placeholder-post-${t}`
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.one, p)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.two, p)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.icon, p)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.name, p)
			}))))
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				i = n("./src/reddit/selectors/brandSafety.ts"),
				c = n("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.u)();
			t.a = m(Object(o.b)((e, t) => {
				let {
					listingName: n,
					pageLayer: s
				} = t;
				const r = Object(i.b)(e, {
						listingName: n,
						pageLayer: s
					}),
					o = Object(d.E)(e) || Object(c.a)(e),
					a = Object(i.e)(e);
				return {
					canShowAd: r && !o,
					awaitingBrandSafetyCheck: !Object(i.c)(e),
					isAdsDisabled: o,
					viewIsUnsafe: a
				}
			})(e => {
				let {
					canShowAd: t,
					isAdsDisabled: n,
					viewIsUnsafe: s,
					pageLayer: o,
					...a
				} = e;
				return !n && t && o ? r.a.createElement(l.a, u({
					forceHouseAd: s
				}, a)) : null
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/constants/location.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				h = n("./src/reddit/helpers/trackers/navigation.ts"),
				f = n("./src/reddit/selectors/experiments/countrySites.ts"),
				g = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				v = n("./src/reddit/selectors/meta.ts"),
				y = n("./src/reddit/components/SidebarFooter/index.m.less"),
				E = n.n(y);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = c.a.a("Link", E.a), C = Object(a.c)({
				countryCode: v.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: f.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: x.a
			}), j = Object(o.b)(C), k = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), S = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return r.a.createElement("div", {
					className: E.a.GreyRereddit
				}, n, r.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}, _._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(O, {
					href: "https://www.reddit.com/coins"
				}, _._("Reddit coins", null, {
					hk: "32iMaN"
				})), r.a.createElement(O, {
					href: "https://www.reddit.com/premium"
				}, _._("Reddit premium", null, {
					hk: "RuO3A"
				})), !!m.c[t] && r.a.createElement(r.a.Fragment, null, r.a.createElement(O, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, _._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, _._("Transparency report", null, {
					hk: "3CgBdG"
				})), r.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: E.a.NoneCapitalizeLink
				}, _._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement(O, {
					href: "https://www.redditinc.com/"
				}, _._("about", null, {
					hk: "1sqJKs"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/careers"
				}, _._("careers", null, {
					hk: "26ABvc"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/press"
				}, _._("press", null, {
					hk: "2Qmgdz"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/advertising"
				}, _._("advertise", null, {
					hk: "Mt40U"
				})), r.a.createElement(O, {
					href: "http://www.redditblog.com/"
				}, _._("blog", null, {
					hk: "46IQJw"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, _._("Terms", null, {
					hk: "4qRzfE"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, _._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, _._("Privacy policy", null, {
					hk: "10K04G"
				})), r.a.createElement(O, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, _._("Mod policy", null, {
					hk: "2gYc2T"
				})), r.a.createElement("div", {
					className: E.a.Copyright
				}, _._("Reddit Inc © {year}. All rights reserved", [_._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = k(j(Object(d.c)(e => {
				const t = Object(o.f)().getState(),
					n = Object(f.a)(t, Object(i.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? r.a.createElement(l.a, {
					className: E.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, _._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, _._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, _._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, _._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), r.a.createElement("div", {
					className: E.a.Copyright
				}, _._("© {year} Reddit, Inc. All rights reserved.", [_._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return n.includes(t) || "en" === t ? r.a.createElement(O, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, s[t]) : null
				};
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Ic.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.Ic.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.Ic.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(S, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				return r.a.createElement(l.a, {
					className: E.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}, _._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(O, {
					href: "https://www.reddit.com/coins"
				}, _._("Reddit coins", null, {
					hk: "32iMaN"
				})), r.a.createElement(O, {
					href: "https://www.reddit.com/premium"
				}, _._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(O, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, _._("Communities", null, {
					hk: "3CJu37"
				})), r.a.createElement(O, {
					href: `https://www.reddit.com${Object(b.a)()}`
				}, _._("Rereddit", null, {
					hk: "1z3k7C"
				})), r.a.createElement(O, {
					href: "https://www.reddit.com/topics/a-1/"
				}, _._("Topics", null, {
					hk: "349RFt"
				}))), !!m.c[e.countryCode] && r.a.createElement(r.a.Fragment, null, r.a.createElement(O, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, _._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, _._("Transparency report", null, {
					hk: "3CgBdG"
				})), r.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: E.a.NoneCapitalizeLink
				}, _._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(O, {
					href: "https://www.redditinc.com/"
				}, _._("about", null, {
					hk: "1sqJKs"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/careers"
				}, _._("careers", null, {
					hk: "26ABvc"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/press"
				}, _._("press", null, {
					hk: "2Qmgdz"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/advertising"
				}, _._("advertise", null, {
					hk: "Mt40U"
				})), r.a.createElement(O, {
					href: "http://www.redditblog.com/"
				}, _._("blog", null, {
					hk: "46IQJw"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, _._("Terms", null, {
					hk: "4qRzfE"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, _._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, _._("Privacy policy", null, {
					hk: "10K04G"
				})), r.a.createElement(O, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, _._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: E.a.CountryLinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: E.a.Column
				}, s("de"), s("es"), s("pt"))), r.a.createElement("div", {
					className: E.a.Copyright
				}, _._("Reddit Inc © {year}. All rights reserved", [_._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/lodash/throttle.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/components/BackToTop/index.tsx"),
				l = n("./src/reddit/components/SidebarFooter/index.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = n.n(p),
				h = n("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = c.e[1] + 24,
				x = u.f + 8,
				v = x + 152 + 16,
				y = v + g + 8,
				E = h.a.div("Container", b.a),
				_ = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...s
					} = e;
					return i.a.createElement(d.a, f({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?x:8}px)`
						}
					}, s))
				}, "BackToTop", b.a),
				O = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: r,
						isSticky: o,
						shouldStickToBottom: a
					} = e;
					return i.a.createElement("div", {
						className: Object(s.a)(n, {
							[b.a.BottomStickyStyles]: a,
							[b.a.StickyStyles]: !a && o && !r,
							[b.a.StickyStylesFakeOverlay]: !a && !!r
						})
					}, t)
				};
			class C extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > y,
						shouldFooterSticky: this.windowHeight > v
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = o()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: n,
							children: s,
							className: r,
							hideFooter: o,
							pageLayer: a,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, u = this.state.isAdSticky && !(!t && !s), m = this.state.isBottomSticky;
					return i.a.createElement(E, {
						className: r,
						innerRef: this.setWrapperRef
					}, i.a.createElement(O, {
						isFakeOverlay: n,
						isSticky: u,
						shouldStickToBottom: m
					}, t, s, c, !o && i.a.createElement(l.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && i.a.createElement(_, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const j = Object(m.u)();
			t.a = j(C)
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, n) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				f = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/userPrefs.ts"),
				v = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				y = n.n(v);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = u.a.div("BladeContainer", y.a), O = u.a.wrapped(h.a, "CloseIcon", y.a), C = u.a.div("LoadingTitleContainer", y.a), j = u.a.div("LoadingNavContainer", y.a), k = u.a.div("ShortLoadingNav", y.a), S = u.a.wrapped(b.a, "ThemedChevron", y.a), w = e => {
				let {
					...t
				} = e;
				return a.a.createElement(_, null, a.a.createElement(O, null), a.a.createElement(p.k, null, a.a.createElement(p.p, null, E._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), a.a.createElement(p.o, null, a.a.createElement(C, null, a.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingTitle, t.isLoading && y.a.loading)
				})), a.a.createElement(j, null, a.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingNav, t.isLoading && y.a.loading)
				}), a.a.createElement(S, null)), a.a.createElement(j, null, a.a.createElement(k, null), a.a.createElement(S, null)), a.a.createElement(j, null, a.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingNav, t.isLoading && y.a.loading)
				}), a.a.createElement(S, null)), a.a.createElement(j, null, a.a.createElement(k, null), a.a.createElement(S, null)), a.a.createElement(j, null, a.a.createElement("div", {
					className: Object(l.a)(y.a.LoadingNav, t.isLoading && y.a.loading)
				}), a.a.createElement(S, null)))))
			}, N = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => a.a.createElement(w, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => a.a.createElement(w, {
					gradientType: "posts",
					isLoading: !0
				})
			}), P = Object(c.c)({
				isEditing: g.i,
				isSubscriptionsPinned: x.b,
				moderatorPermissions: f.n
			});
			t.a = Object(i.b)(P)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? a.a.createElement("div", {
					className: Object(l.a)(y.a.Container, e.isSubscriptionsPinned && y.a.isSubscriptionPinned)
				}, e.children, a.a.createElement(N, {
					subredditId: e.subredditId
				})) : a.a.createElement(o.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return r.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var i = Object(o.a)(a);
			t.a = e => r.a.createElement(i, e)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return a
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "j", (function() {
				return E
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(r);
			const a = s.a.section("FormPage", o.a),
				i = s.a.h1("HomePageTitle", o.a),
				c = s.a.button("HomePageBreadcrumb", o.a),
				d = s.a.div("HomePageGroup", o.a),
				l = s.a.h1("FormPageTitle", o.a),
				u = s.a.div("FormPageSection", o.a),
				m = s.a.div("FormGroup", o.a),
				p = s.a.h2("FormGroupTitle", o.a),
				b = s.a.div("FormElement", o.a),
				h = s.a.div("FormGroupDescription", o.a),
				f = s.a.div("FormItem", o.a),
				g = s.a.h3("FormElementTitle", o.a),
				x = s.a.div("FormElementDescription", o.a),
				v = s.a.div("FormElementError", o.a),
				y = s.a.div("FormElementSubGroup", o.a),
				E = s.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/ApiRequestState/index.ts"),
				g = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				x = n("./src/reddit/components/SubredditIcon/index.m.less"),
				v = n.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: s,
						...r
					} = e, a = [n, v.a.inTopBar, v.a.iconContainer];
					return s ? a.push(v.a.emptyEditableIconInTopBar) : a.push(v.a.editableIcon, v.a.emptyEditableIcon), o.a.createElement("span", y({}, r, {
						className: Object(c.a)(...a)
					}), s ? o.a.createElement(h.a, {
						name: "upload",
						className: v.a.emptyUploadButton
					}) : o.a.createElement(h.a, {
						name: "add",
						className: v.a.emptyPlusButton
					}), e.children)
				},
				_ = e => {
					const {
						iconColor: t,
						className: n,
						alt: s,
						role: r,
						onClick: a,
						inTopBar: i,
						src: d
					} = e;
					return o.a.createElement("span", {
						className: v.a.iconContainer
					}, o.a.createElement("img", {
						alt: s,
						onClick: a,
						role: r,
						src: d,
						className: Object(c.a)(n, {
							[v.a.editableIcon]: !i
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				O = Object(i.c)({
					isLoading: g.b
				});
			class C extends o.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => o.a.createElement(u.a, {
						className: v.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: e => {
							const t = Object(f.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? o.a.createElement("span", {
						className: v.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? s.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : s.fbt._("Add icon", null, {
						hk: "1bbdMV"
					})) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), n = o.a.createElement(o.a.Fragment, null, o.a.createElement(_, y({
						alt: s.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? o.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? o.a.createElement("a", {
						href: this.props.linkTo
					}, o.a.createElement(E, y({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : o.a.createElement(o.a.Fragment, null, o.a.createElement(E, y({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [v.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(v.a.loadingIconInTopBar), t = 32), o.a.createElement(m.a, {
							className: Object(c.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? o.a.createElement("div", {
						className: v.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(a.b)(O, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(d.a)(t.subreddit.id, n, s))
				}
			}))(Object(l.c)(C))
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);
			const l = o.a.wrapped(a.b, "SubredditIcon", d.a),
				u = o.a.wrapped(e => r.a.createElement(i.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return r.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, r.a.createElement(l.a, {
							href: `/r/${t}/`
						}, r.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, r.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = n("./src/reddit/selectors/subredditMention.ts");
			class x extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(i.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const v = Object(b.c)(x),
				y = Object(a.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				E = Object(o.b)(y),
				_ = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: s,
						userVariant: o,
						rtJsonElementProps: a
					} = e;
					if (!n || !t) return r.a.createElement(v, {
						subredditName: s,
						rtJsonElementProps: a
					});
					switch (o) {
						case h.Af.SmIcon:
							return r.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: a
							});
						case h.Af.SmIconHc:
							return r.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: a
							});
						default:
							return r.a.createElement(v, {
								subredditName: s,
								rtJsonElementProps: a
							})
					}
				};
			t.b = E(_)
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditSearchCarousel").then(n.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				d = e => {
					const t = Object(a.e)(i.e),
						n = Object(a.e)(i.a);
					return t || n ? o.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				f = n("./src/reddit/components/IdCard/async.tsx"),
				g = n("./src/lib/isFakeSubreddit/index.ts"),
				x = n("./src/reddit/components/IdCard/helpers.ts"),
				v = e => !Object(g.a)(e) || Object(x.e)(e) || Object(x.f)(e) || Object(x.g)(e),
				y = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = n("./src/reddit/components/ModProgressModule/async.tsx"),
				_ = n("./src/reddit/components/PowerupsSidebar/index.tsx"),
				O = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				C = n("./src/reddit/components/SidebarContainer/index.tsx"),
				j = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				k = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				S = n("./src/lib/makeListingKey/index.ts"),
				w = n("./src/reddit/actions/subreddit.ts"),
				N = n("./src/lib/classNames/index.ts"),
				P = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				T = n("./src/reddit/helpers/name/index.ts"),
				L = n("./src/reddit/helpers/overlay/index.ts"),
				B = n("./src/reddit/selectors/experiments/topPosts.ts"),
				R = n("./src/reddit/selectors/posts.ts"),
				A = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const D = .99;
			class M extends i.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= D && t(n)
					}
				}
				render() {
					return i.a.createElement(A.a, {
						threshold: D,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var F = M,
				U = n("./src/lib/isUrl/index.ts"),
				W = n("./src/lib/prettyPrintNumber/index.ts"),
				H = n("./src/reddit/components/FlairWrapper/index.tsx"),
				V = n("./src/reddit/components/Thumbnail/index.tsx"),
				G = n("./src/reddit/models/Flair/index.ts"),
				z = n("./src/reddit/models/Subreddit/index.ts"),
				q = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				K = n.n(q);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Q = e => e.type === G.f.Nsfw || e.type === G.f.Spoiler, Y = Object(d.c)({
				post: R.G,
				subredditOrProfile: R.V
			});
			class Z extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: n
						} = this.props;
						e(t), n && n(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: n
						} = this.props;
						e.stopPropagation(), n && n(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: n,
						showSubredditName: s,
						subredditOrProfile: r
					} = this.props, o = {
						post: t
					}, a = Object(U.a)(Object(V.b)(o)), c = t.flair.filter(Q);
					return i.a.createElement("div", {
						className: Object(N.a)(K.a.container, e, {
							[K.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, i.a.createElement("div", {
						className: K.a.mainLine
					}, a && i.a.createElement("div", {
						className: K.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, i.a.createElement(V.a, o)), i.a.createElement("div", {
						className: Object(N.a)(K.a.title, !a && K.a.titleSingle),
						title: t.title
					}, c.length > 0 && i.a.createElement(H.a, {
						className: K.a.flair,
						titleFlair: c,
						nowrap: !0,
						post: t
					}), t.title)), i.a.createElement("div", {
						className: K.a.metaLine
					}, s && !!r && i.a.createElement("span", {
						className: K.a.meta
					}, Object(z.h)(r) ? Object(T.d)(r.displayText || r.name) : Object(T.c)(r.displayText || r.name)), i.a.createElement("span", {
						className: K.a.meta
					}, J._({
						"*": "{score} points",
						_1: "1 point"
					}, [J._plural(t.score, "score", Object(W.b)(t.score))], {
						hk: "1JZ0qm"
					})), i.a.createElement("span", {
						className: K.a.meta
					}, J._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [J._plural(t.numComments, "numComments", Object(W.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var X = Object(c.b)(Y, e => ({
					openLightbox: t => e(Object(L.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Z),
				$ = n("./src/reddit/components/SidebarPostList/index.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = 10, se = 2, re = Object(d.a)(R.N, e => e.filter(e => !e.isSponsored)), oe = Object(d.c)({
				posts: (e, t) => re(e, {
					...t
				})
			});
			class ae extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: n
						} = this.props, [s] = n;
						s && (t(s), e && e(s.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || ne, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((n, s) => (e = Math.ceil(s.posts.length / t), {
							chunkIdx: n.chunkIdx < e - 1 ? n.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: n,
							onPostVisible: s,
							redditStyle: r,
							smallPostClassName: o
						} = this.props;
						return i.a.createElement(F, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, i.a.createElement(X, {
							className: Object(N.a)(ee.a.smallPost, o),
							containerOnClick: n,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(g.a)(Object(T.h)(t)),
							thumbnailOnClick: n
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: n,
						moreButtonText: s,
						onPostVisible: r,
						posts: o,
						redditStyle: a,
						showMoreButton: c,
						topPostsVariant: d
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === o.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(B.a)(d),
						p = Object(B.b)(d),
						b = m || p,
						h = o.slice(l * u, (l + 1) * u),
						[f, ...x] = h,
						v = b ? h.slice(0, se) : x.slice(0, se),
						y = b ? h.slice(se) : x.slice(se);
					return i.a.createElement("div", {
						className: Object(N.a)(ee.a.container, t, {
							[ee.a.redditStyle]: a
						})
					}, !b && i.a.createElement(F, {
						onPostVisible: r,
						postId: f.id
					}, i.a.createElement(P.a, {
						postId: f.id,
						backgroundWrapperClassName: ee.a.largePostBackgroundWrapper,
						descriptionClassName: ee.a.largePostDescription,
						innerContainerClassName: ee.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(T.h)(n)),
						trendingPost: f
					})), v.map(this.renderSmallPost), e, y.map(this.renderSmallPost), c && i.a.createElement(I.r, {
						className: ee.a.SeeMore,
						onClick: this.showMorePosts
					}, s || te._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var ie = Object(c.b)(oe, e => ({
					openPost: t => e(Object(L.a)(t.permalink))
				}))(ae),
				ce = n("./src/reddit/components/TrackingHelper/index.tsx"),
				de = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				le = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				ue = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				me = n("./src/reddit/selectors/discoveryUnit.ts"),
				pe = n("./src/reddit/selectors/subreddit.ts"),
				be = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				he = n.n(be);
			const fe = 10,
				ge = Object(d.a)((e, t) => t.subredditName, e => Object(S.a)(e, l.W.TOP, {
					t: l.ic.WEEK
				})),
				xe = Object(d.c)({
					discoveryUnit: e => Object(me.b)(e, {
						unitName: ue.i
					}),
					listingKey: ge,
					posts: (e, t) => {
						const n = ge(e, t);
						return Object(R.N)(e, {
							listingKey: n
						})
					},
					subreddit: pe.z
				});
			class ve extends i.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(le.b)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(le.q)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(le.t)(t, e, void 0, n))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: n,
						loadMorePosts: r,
						posts: o,
						subredditName: a,
						topPostsVariant: c
					} = this.props;
					if (0 === o.length) return null;
					const d = a,
						l = o.length > fe;
					return i.a.createElement(de.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, i.a.createElement(ie, {
						listingKey: n,
						listingName: d,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: he.a.smallPost,
						showMoreButton: l,
						topPostsVariant: c
					}, i.a.createElement("div", null, e)))
				}
			}
			var ye = Object(c.b)(xe, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						loadMorePosts: () => e(Object(w.r)({
							sort: l.W.TOP,
							subredditName: n,
							t: l.ic.WEEK
						}))
					}
				})(Object(ce.c)(ve)),
				Ee = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				_e = n("./src/reddit/constants/tracking.ts"),
				Oe = n("./src/reddit/selectors/seo/linksModule.ts"),
				Ce = n("./src/reddit/selectors/telemetry.ts"),
				je = n("./src/telemetry/models/Subreddit.ts");
			const ke = e => t => ({
					...Ce.n(t),
					action: _e.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Se = e => t => n => ({
					...Ce.n(n),
					action: _e.c.CLICK,
					noun: Object(je.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				we = Object(d.c)({
					communities: Oe.c
				});
			var Ne = Object(c.b)(we)(e => {
					const t = Object(ce.b)();
					return e.communities && e.communities.length ? i.a.createElement(j.a, null, i.a.createElement(Ee.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: ke,
						getSubscribeEventFactoryHandler: Se,
						sendEvent: t,
						title: s.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				Pe = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				Ie = n("./src/reddit/constants/experiments.ts"),
				Te = n("./src/reddit/featureFlags/index.ts"),
				Le = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				Be = n("./src/reddit/models/Widgets/index.ts"),
				Re = n("./src/reddit/selectors/communityFlairs.ts"),
				Ae = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				De = n("./src/reddit/selectors/listings.ts"),
				Me = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				Fe = n.n(Me);
			const Ue = 250,
				We = 270,
				He = u.a.wrapped(C.a, "SidebarContainer", Fe.a),
				Ve = Object(d.c)({
					apiError: De.c,
					apiPending: De.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(Re.b)(e, n)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(Re.c)(e, n)
					},
					isInNewModuleNCPV3Experiment: e => Object(Ae.a)(e) === Ie.Ce.NewModule,
					showGovernance: Te.d.spPoints,
					showLeaderboard: Te.d.spLeaderboard,
					showPredictionsLeaderboard: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(pe.N)(e, {
							subredditId: n
						}) && !Object(pe.O)(e, {
							subredditId: n
						})
					},
					widgets: pe.u
				}),
				Ge = Object(c.b)(Ve);
			class ze extends a.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const n = this.getRelatedCommunitiesWidgetData();
						return n ? {
							id: "related-communities-widget",
							kind: Be.i.CommunityList,
							shortName: s.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: Be.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: Be.g.Cloud,
							shortName: s.fbt._("Filter by flair", null, {
								hk: "1DI34"
							}),
							templates: this.props.communityFlairModels
						}
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e) {
					const {
						communityFlairSortedKeys: t
					} = this.props, n = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !o()(this.props.widgets, e.widgets) || n
				}
				render() {
					const {
						className: e,
						listingName: t,
						isInNewModuleNCPV3Experiment: n,
						showGovernance: s,
						showLeaderboard: r,
						showPredictionsLeaderboard: o,
						subredditId: a,
						subredditName: c,
						topPostsVariant: d
					} = this.props;
					let u = 0;
					const g = Object(B.a)(d),
						x = Object(B.b)(d),
						C = Object(B.c)(d),
						S = g || x;
					let w, N;
					!!this.getPostFlairWidget() ? w = this.props.widgets : (w = this.getCommunityWidgets(), N = this.makeFlairFilterWidget());
					const P = this.makeRelatedCommunitiesWidget(g, x),
						I = !g,
						T = x,
						L = i.a.createElement(O.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Le.a.FIRST,
							sizes: l.h
						});
					return i.a.createElement(He, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, n && i.a.createElement(E.a, {
						subredditId: a,
						subredditName: c
					}), v(t) && i.a.createElement(f.a, {
						listingName: t
					}), i.a.createElement(p.a, {
						cardClassName: Fe.a.card,
						subredditId: a
					}), i.a.createElement(_.a, {
						subredditId: a
					}), o && i.a.createElement(m.a, {
						subredditId: a
					}), S && i.a.createElement(j.a, null, i.a.createElement(ye, {
						subredditName: c,
						topPostsVariant: d
					}, i.a.createElement("div", {
						className: Fe.a.inFeedAd
					}, L))), S && P && i.a.createElement(j.a, null, i.a.createElement(Pe.a, {
						subredditName: c,
						truncateThreshold: We,
						widget: P
					})), T && w.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return i.a.createElement(j.a, {
							key: `widgetSpacer${t}`
						}, i.a.createElement(Pe.a, {
							subredditName: c,
							truncateThreshold: Ue,
							widget: e
						}))
					}), s && i.a.createElement(b.a, {
						className: Fe.a.card,
						subredditId: a
					}), N && i.a.createElement(j.a, null, i.a.createElement(Pe.a, {
						subredditName: c,
						widget: N
					})), r && i.a.createElement(h.a, {
						className: Fe.a.card,
						subredditId: a,
						uniqueId: a
					}), i.a.createElement(y.g, {
						subredditId: a
					}), !S && L, i.a.createElement(Ne, {
						subredditId: a
					}), I && !T && w.map((e, t) => {
						const n = "community-list" === e.kind;
						return i.a.createElement(j.a, {
							key: `widgetSpacer${t}`
						}, i.a.createElement(Pe.a, {
							subredditName: c,
							truncateThreshold: C && n ? We : C ? Ue : void 0,
							widget: e
						}))
					}), i.a.createElement(k.a, {
						adComponent: i.a.createElement(O.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Le.a.BOTTOM,
							sizes: l.o
						})
					}))
				}
			}
			t.a = Ge(ze)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : a.c.Plain,
				p = e => {
					let {
						border: t,
						priority: n,
						small: s,
						...r
					} = e;
					return o.a.createElement(a.t, u({}, r, {
						priority: m(a.c.Primary, t, n),
						className: Object(l.a)(r.className, d.a.BaseButton),
						size: s ? a.d.S : a.d.M
					}))
				},
				b = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = e => {
					let {
						buttonType: t,
						border: n,
						priority: s,
						small: r,
						...i
					} = e;
					return o.a.createElement(a.t, u({}, i, {
						priority: m(a.c.Secondary, n, s),
						className: Object(l.a)(i.className, d.a.BaseButton),
						size: r ? a.d.S : a.d.M,
						text: b(t)
					}))
				};
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: s,
						small: r = !1,
						isFullWidth: a = !1,
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: r,
						isFullWidth: a,
						style: c
					};
					return this.props.userIsSubscriber ? o.a.createElement(h, u({}, d, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(p, u({}, d, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = e => {
					let {
						type: t,
						key: n
					} = e;
					return o[r({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(o.a))
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-TabBadger-Component").then(n.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/TabBadger/Loader.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const u = Object(a.c)({
					postCount: l.M,
					previousPageIsOverlay: d.p,
					tabBadged: e => e.tabBadged
				}),
				m = Object(o.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : r.a.createElement(i.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_2Gv5G082cUjYdQRyoGXyAo",
				modal: "_1_2jhTQc4DA7TtWS6g9BMN",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/helpers.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/login.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/components/Footer/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				v = n("./src/reddit/selectors/telemetry.ts");
			const y = "nsfw_dialog";
			var E = e => a.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, a.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: "#FF585B"
				}), a.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: "#FF585B"
				}), a.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: "#FF585B"
				})),
				_ = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				O = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				C = n.n(O);
			const j = {
					d2x_nsfw_signup_blocking_de_v1: `${s.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${s.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				k = e => {
					const t = Object(i.d)(),
						n = Object(h.b)(),
						s = Object(i.e)(_.f),
						u = Object(o.useCallback)(() => {
							s === _.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, s]),
						b = (e => e ? a.a.createElement("div", {
							className: C.a.cta
						}, r.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), a.a.createElement("br", null), r.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : a.a.createElement("div", {
							className: C.a.cta
						}, r.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(s === _.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(x.c)(s)
					}, [s]), a.a.createElement("div", {
						className: Object(l.a)(C.a.mainCta)
					}, a.a.createElement(E, null), b, a.a.createElement("div", {
						className: C.a.contentTitle
					}, e.contentTitle), a.a.createElement("div", {
						className: C.a.warning
					}, (() => r.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), a.a.createElement("div", {
						className: C.a.buttonContainer
					}, a.a.createElement(g.j, {
						className: Object(l.a)(C.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(v.n)(e),
								source: "xpromo",
								action: "click",
								noun: y
							}))()), u(), Object(x.b)(x.a.Login), t(Object(m.openLoginModal)())
						}
					}, (() => r.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), a.a.createElement(g.j, {
						className: C.a.cancel,
						onClick: () => {
							Object(d.b)(), n((() => e => ({
								...Object(v.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: y
							}))()), Object(x.b)(x.a.Dismiss), t(Object(c.b)("/"))
						}
					}, (() => r.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				S = Object(u.a)(e => {
					const t = `${s.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return a.a.createElement("div", {
						className: C.a.qrCodeOuter
					}, a.a.createElement("div", {
						className: C.a.qrCodeInner
					}, a.a.createElement("img", {
						className: C.a.qrCode,
						alt: r.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), a.a.createElement("div", {
						className: C.a.copyLine1
					}, (() => r.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), a.a.createElement("div", {
						className: C.a.copyLine2
					}, (() => r.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), a.a.createElement("img", {
						className: C.a.sneakySnoo,
						src: t
					})))
				}),
				w = e => {
					const t = Object(h.b)();
					a.a.useEffect(() => {
						t((() => e => ({
							...Object(v.n)(e),
							source: "xpromo",
							action: "view",
							noun: y
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, s = Object(i.e)(_.g), r = Object(i.e)(_.h), o = Object(i.e)(_.f), c = o === _.a.Blurred ? b.a.White : o === _.a.NoPreview ? b.a.Grey : void 0;
					return a.a.createElement("div", {
						className: C.a.container
					}, a.a.createElement(k, {
						contentTitle: n
					}), a.a.createElement("div", {
						className: Object(l.a)(C.a.footerWrapper, {
							[C.a.mIsModal]: o === _.a.Blurred
						})
					}, a.a.createElement(b.b, {
						textColor: c
					})), a.a.createElement(S, {
						qrCodeAsset: (() => s === f.Gc.Enabled || r === f.sb.BlurredPreview || r === f.sb.NoPreview ? j.d2x_nsfw_signup_blocking_de_v1 : j.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				}
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, n) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "d", (function() {
				return L
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, n) => s => {
				const r = e(s),
					a = t(s),
					i = !r && a;
				return Object(o.a)(n.baseClassName, s.className, {
					[n.mIsInteractive]: a,
					[n.mIsActive]: r,
					[n.mIsVoteable]: i
				})
			};
			var c = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = n("./src/reddit/models/Vote/index.ts"),
				l = n("./src/reddit/controls/Downvote/index.m.less"),
				u = n.n(l);
			const m = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				p = e => {
					let {
						voteState: t
					} = e;
					return t === d.a.downvoted
				},
				b = i(p, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, m);
			var h = e => r.a.createElement(c.a, {
					className: b(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				f = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = n("./src/reddit/controls/Upvote/index.m.less"),
				x = n.n(g);
			const v = {
					...x.a,
					baseClassName: x.a.Upvote
				},
				y = e => {
					let {
						voteState: t
					} = e;
					return t === d.a.upvoted
				},
				E = i(y, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, v);
			var _ = e => r.a.createElement(f.b, {
					className: E(e),
					compact: e.compact,
					isFilled: y(e)
				}),
				O = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				C = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				j = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				S = n.n(k);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => Object(o.a)({
					[S.a.compact]: e.compact,
					[S.a.dark]: Object(C.b)(Object(O.a)(e)),
					[S.a.nightmode]: e.isNightMode
				}),
				P = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(j.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						isNightMode: a,
						voteState: i,
						compact: c,
						...l
					} = e;
					return r.a.createElement("button", w({}, l, {
						className: Object(o.a)(S.a.customDownvote, N(e), {
							[S.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				I = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(j.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						isNightMode: a,
						voteState: i,
						compact: c,
						...l
					} = e;
					return r.a.createElement("button", w({}, l, {
						className: Object(o.a)(S.a.customUpvote, N(e), {
							[S.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				T = h,
				L = _
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				b = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Theme/index.ts"),
				v = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				_ = e => {
					const t = y(e);
					return Object(x.f)(t)
				},
				O = e => {
					const t = E(e);
					return Object(x.f)(t)
				};
			var C = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				j = n.n(C);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = Object(u.u)(), w = Object(o.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						r = Object(g.db)(e);
					return s || r
				},
				nigtmode: g.db,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = _(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: o,
						id: a,
						onClick: c,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = n ? j.a.widgetContentOnly : j.a.widgetContent, f = !s && this.props.styles, g = f ? this.getWidgetBackgroundStyles() : {}, x = f ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: s,
							[j.a.clickable]: !!c,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: c,
						style: g
					}, u && r.a.createElement("div", {
						className: Object(i.a)(j.a.widgetHeader, {
							[j.a.clickable]: !!l
						}),
						id: a,
						style: x,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(i.a)(j.a.widgetTitle, p)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, u)), o), r.a.createElement("div", {
						className: Object(i.a)(h, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: j.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, k._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(w(Object(c.a)(Object(l.c)(N))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "b", (function() {
				return S
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/actions/ads/index.ts"),
				i = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/reddit/actions/gold/tooltips.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/components/PostList/Placeholder.tsx"),
				g = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/selectors/experiments/survey.ts"),
				v = n("./src/reddit/selectors/listings.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/selectors/tracking.ts");

			function O() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.R,
					pageLayer: e => e
				})
			}
			const C = O(),
				j = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.S)(e, t),
					loadMore: v.g,
					postsById: y.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: n,
							listingName: s,
							inSubredditOrProfile: r
						} = t;
						return Object(y.D)(e, n, s, r)
					}),
					subredditsById: E.bb,
					viewportDataLoaded: _.a,
					pageReferrer: p.V,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: x.e
				},
				k = Object(r.c)(j),
				S = e => ({
					onBottomViewed: (t, n) => e(l.c(t, n)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(d.L(t))
					},
					fireAdPixelsOfType: (t, n) => {
						e(d.z(t, n))
					},
					trackOnPostEnteredViewport: (t, n, s, r) => {
						e(d.O(t, s, r))
					},
					trackOnPostExitedViewport: (t, n, s, r) => {
						e(d.P(t, s, r))
					},
					showModalOnScroll: () => e(d.cb()),
					surveyTriggerScrollCounted: () => e(Object(u.l)())
				}),
				w = e => Object(b.b)({
					...e
				}),
				N = (e, t, n, s) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: a
					} = s;
					return Object(h.k)(e, t, "post", r, o, a, void 0)
				},
				P = Object(s.b)(k, S, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: w,
					postClickEventFactory: N
				}));
			t.a = e => Object(m.c)(C(P(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				a = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/experiments/emailEnablement.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: c.gb,
				emailEnablementJoinFollowVoteVariant: i.a
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(a.d([n], !0)),
					onSubscriptionsRequested: () => e(a.e()),
					onUnsubscribe: () => e(a.d([n], !1)),
					toggleEmailVerificationTooltip: () => e(Object(o.c)("user_follow"))
				}
			})
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(r.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(d, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					requestCloseBlade: () => n && e(Object(o.h)(n))
				}
			})
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/postFlair.ts"),
				i = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/models/Vote/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: d.W,
				hideNSFWPref: b.F,
				isActive: p.j,
				moderatorPermissions: u.m,
				modModeEnabled: d.U,
				showEditFlair: m.a
			}), (e, t) => {
				let {
					postId: n
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						} = t;
						return e(Object(a.h)({
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const s = t === c.a.upvoted ? Object(o.kb)(n) : Object(o.w)(n);
						e(s)
					},
					onIgnoreReports: () => e(Object(o.gb)(n)),
					onOpenReportsDropdown: t => e(Object(i.h)({
						tooltipId: t
					}))
				}
			}, (e, t, n) => ({
				...n,
				...e,
				...t,
				onFlairChanged: e => {
					let {
						previewFlair: s,
						selectedTemplateId: r
					} = e;
					return t.dispatchFlairChanged({
						post: n.post,
						previewFlair: s,
						selectedTemplateId: r
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/constants/banners.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner", e.AWARDED_LISTING_BANNER = "awarded_listing_banner", e.AVATAR_LISTING_BANNER = "avatar_listing_banner"
				}(s || (s = {}))
		},
		"./src/reddit/constants/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(s || (s = {}));
			var r;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(r || (r = {}))
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "t", (function() {
				return f
			})), n.d(t, "s", (function() {
				return g
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "v", (function() {
				return v
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "o", (function() {
				return C
			}));
			const s = 284,
				r = 450,
				o = 800,
				a = 284,
				i = 48,
				c = 640,
				d = 1600,
				l = 40,
				u = 48,
				m = 24,
				p = 24,
				b = 312,
				h = 40,
				f = 270,
				g = 106,
				x = 5,
				v = 16,
				y = 1250,
				E = 82,
				_ = 48,
				O = 36,
				C = 40
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = "reddit",
				r = "reddit.ready",
				o = "reddit.urlChanged"
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(s || (s = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(r || (r = {}))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = {
					[r.W.BEST]: () => s.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.W.HOT]: () => s.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.W.NEW]: () => s.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.W.CONTROVERSIAL]: () => s.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.W.RISING]: () => s.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.W.TOP]: () => s.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.W.AWARDED]: () => s.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[r.ic.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.ic.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.ic.WEEK]: () => s.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.ic.MONTH]: () => s.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.ic.YEAR]: () => s.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.ic.ALL]: () => s.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/constants/promo.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.SignupUpsellCell = "signupUpsellBottomCell", e.SignupUpsellCellDismissible = "signupUpsellBottomCellDismissible", e.SignupUpsellBottomSheet = "signupUpsellBottomSheet"
				}(s || (s = {})),
				function(e) {
					e.Shown = "shown", e.Dismissed = "dismissed", e.Completed = "completed"
				}(r || (r = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = 480,
				r = 960,
				o = 1200
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const a = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					},
					gqlRealtime2Context: () => {
						throw new Error("Component attempted to make an API request with no GqlRealtime2Context")
					}
				},
				i = Object(s.createContext)(a);

			function c(e) {
				const t = t => r.a.createElement(i.Consumer, null, n => {
					let {
						apiContext: s,
						gqlContext: a,
						gqlRealtime2Context: i
					} = n;
					return r.a.createElement(e, o({
						apiContext: s,
						gqlContext: a,
						gqlRealtime2Context: i
					}, t))
				});
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = r.a.createContext(!1)
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js");
			const a = o.createContext({
				showPromo: r.a,
				dismissPromo: r.a,
				completePromo: r.a,
				promos: new Map
			});
			t.a = a
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = r.a.createContext({})
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				h = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(i.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...n
				} = e;
				const s = Object(i.a)(h.a.row, t, {
					[h.a.mIsInteractive]: !n.noHover,
					[h.a.mIsSelected]: n.isSelected,
					[h.a.topics]: n.isTopicsStyle
				});
				return a.a.createElement(g, f({
					className: s
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(a);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s = 10
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(i.a.loadingIcon, n, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, n) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/TextButton/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("button", {
				children: e.children,
				className: Object(o.a)(i.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(o);
			t.a = s.a.wrapped(r.default, "unstyledInternalLink", a.a)
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(o.b)(s)(e => {
					const {
						featureEnabled: s,
						...o
					} = e, a = o;
					return s ? r.a.createElement(t, a) : void 0 !== n ? r.a.createElement(n, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const n = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !r
			}
		},
		"./src/reddit/helpers/counters/nsfwblocking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/sample/index.ts"),
				o = n("./src/telemetry/helpers/sendCounter.ts");
			var a;
			! function(e) {
				e.Dismiss = "dismiss", e.Login = "login", e.Signup = "signup", e.View = "view"
			}(a || (a = {}));
			const i = e => {
					Object(o.b)(s.m.Redesign, {
						type: o.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				c = e => {
					e && Object(r.b)(10) && Object(o.b)(s.m.Redesign, {
						type: o.a.NsfwBlocking,
						data: {
							action: a.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} = e;
				return t && n && s && r ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/datadome.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s, r = n("./src/lib/constants/index.ts");
			! function(e) {
				e.Enabled = "datadome-bot-detection.enabled", e.Disabled = "datadome-bot-detection.disabled"
			}(s || (s = {}));
			const o = () => a() ? s.Enabled : s.Disabled,
				a = () => null !== document.getElementById(r.A)
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/map.js"),
				r = n.n(s),
				o = n("./src/lib/FocusTrap/index.ts");
			const a = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				i = e => {
					let t = e;
					do {
						if (a(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				c = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				d = () => c() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return r()(t, e => e.textContent || "")
				})() : null,
				l = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				u = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!l(n, e)) return;
					const {
						startContainer: s,
						startOffset: r,
						endContainer: o,
						endOffset: a
					} = n, i = document.createRange();
					i.selectNode(e);
					let c = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, n) && (i.setStart(s, r), c = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, n) && (i.setEnd(o, a), c = !1), c) return [e];
					const d = document.createElement("div");
					return d.appendChild(i.cloneContents()), [...d.childNodes]
				},
				m = (e, t, n) => {
					let s = e;
					for (; s && (!n || !n(s));) {
						if (s && t(s)) return s;
						s = s.parentElement
					}
				},
				p = e => e && e.parentElement && m(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				b = e => {
					e.querySelectorAll(o.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/memoize.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/categories.tsx"),
				a = n("./src/config.ts");
			const i = Array.from({
					length: 20
				}).map((e, t) => `${a.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				c = Array.from({
					length: 8
				}).map((e, t) => `${a.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				d = [];
			t.a = r()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return d;
				const s = n ? c : i,
					r = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: o.a[(r + t) % o.a.length],
					image: s[(r + t) % s.length]
				}))
			}), (function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				return `${e}_${t}`
			}))
		},
		"./src/reddit/helpers/getReredditLinkWithYear/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
				const t = e.getFullYear(),
					n = e.getMonth();
				return `/posts/${n>=6?t:t-1}/`
			}
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let r, o, a, i, c, d, l, u, m, p, b;
				return e ? e.quarantinedSubreddit ? (o = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = s.a.PrivateSubreddit, a = e.subredditDescription, l = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? o = s.a.GoldSubreddit : e.subredditBanned ? (o = s.a.SubredditBanned, r = e.subredditBanMessage) : e.subredditDoesNotExist ? o = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? o = s.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (o = s.a.GatedSubreddit, m = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, b = e.interstitialWarningMessageRTJson) : t && (o = s.a.Nsfw), o && n ? {
					banMessage: r,
					contentGateType: o,
					isContributorRequestsDisabled: l,
					isContributorRequestTimestamp: u,
					subredditDescription: a,
					subredditName: n,
					quarantineMessage: i,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: d,
					interstitialWarningMessage: m,
					interstitialWarningMessageHtml: p,
					interstitialWarningMessageRTJson: b
				} : void 0
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const r = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/models/Prediction/index.ts");
			const r = (e, t) => {
					const n = Date.now(),
						r = n <= e.endsAt,
						o = n <= t.endsAt,
						a = e.status === s.b.Cancelled || e.status === s.b.CancelInProgress;
					return a !== (t.status === s.b.Cancelled || t.status === s.b.CancelInProgress) ? a ? 1 : -1 : r !== o ? r ? -1 : 1 : r && e.selectedOptionId !== t.selectedOptionId ? e.selectedOptionId ? 1 : -1 : !e.resolvedOptionId != !t.resolvedOptionId ? e.resolvedOptionId ? 1 : -1 : r || e.selectedOptionId === t.selectedOptionId ? e.createdAt > t.createdAt ? -1 : 1 : e.selectedOptionId ? -1 : 1
				},
				o = (e, t) => r({
					createdAt: e.createdAt,
					endsAt: e.endsAt,
					selectedOptionId: e.userSelection || null,
					resolvedOptionId: e.resolvedOptionId,
					totalVoteCount: e.totalVoteCount,
					status: e.predictionStatus
				}, {
					createdAt: t.createdAt,
					endsAt: t.endsAt,
					selectedOptionId: t.userSelection || null,
					resolvedOptionId: t.resolvedOptionId,
					totalVoteCount: t.totalVoteCount,
					status: t.predictionStatus
				}),
				a = (e, t) => {
					var n, s;
					const {
						pollData: o
					} = e, {
						pollData: a
					} = t;
					return o && a ? r({
						createdAt: e.created,
						endsAt: null == o ? void 0 : o.votingEndTimestamp,
						selectedOptionId: null !== (n = null == o ? void 0 : o.userSelection) && void 0 !== n ? n : null,
						resolvedOptionId: null == o ? void 0 : o.resolvedOptionId,
						totalVoteCount: null == o ? void 0 : o.totalVoteCount,
						status: null == o ? void 0 : o.predictionStatus
					}, {
						createdAt: t.created,
						endsAt: null == a ? void 0 : a.votingEndTimestamp,
						selectedOptionId: null !== (s = null == a ? void 0 : a.userSelection) && void 0 !== s ? s : null,
						resolvedOptionId: null == a ? void 0 : a.resolvedOptionId,
						totalVoteCount: null == a ? void 0 : a.totalVoteCount,
						status: null == a ? void 0 : a.predictionStatus
					}) : 0
				}
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => {
				window.resonateAnalytics && window.resonateAnalytics.initialize || function() {
					const e = window.resonateAnalytics = window.resonateAnalytics || [];
					if (!e.initialize) {
						if (e.invoked) return;
						e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "profile"], e.factory = function(t) {
							return function() {
								const n = Array.prototype.slice.call(arguments);
								return n.unshift(t), e.push(n), e
							}
						};
						for (let t = 0; t < e.methods.length; t++) {
							const n = e.methods[t];
							e[n] = e.factory(n)
						}
						e.load = function(e) {
							const t = document.createElement("script");
							t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.resonate.com/analytics.js/v1/" + e + "/analytics.min.js";
							const n = document.getElementsByTagName("script")[0];
							n.parentNode.insertBefore(t, n)
						}, e.SNIPPET_VERSION = "1.0.0", e.load("101117480")
					}
				}(), window.resonateAnalytics && window.resonateAnalytics.page && window.resonateAnalytics.page(e)
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(s.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(o.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(r);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(s.a)(o.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/polished/dist/polished.es.js");
			var s = n("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function r(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(s.a)(e).post
			}
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return s
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "l", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			}));
			const s = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				r = () => () => ({
					source: "content_tag",
					action: "click",
					noun: "verify_topics_module"
				}),
				o = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				a = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				i = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "mature_themes_prompt",
					actionInfo: {
						pageType: "survey_mature_themes"
					}
				}),
				c = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: e,
					actionInfo: {
						pageType: e
					}
				}),
				d = e => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "survey_answer",
					actionInfo: {
						pageType: e
					}
				}),
				l = (e, t) => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "next",
					actionInfo: {
						reason: t.join(),
						pageType: e
					}
				}),
				u = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "back",
					actionInfo: {
						pageType: e
					}
				}),
				m = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_summary",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				p = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "submit_survey",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				b = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_review",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				h = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "take_survey",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				f = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				g = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/helpers/isComment.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/telemetry/models/Outbound.ts");
			const i = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(r.b)(t) || Object(o.b)(t))) return Object(r.b)(t) ? a.SourceElement.Comment : Object(s.x)(n) ? a.SourceElement.PostDetail : Object(s.H)(n) ? a.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					...Object(r.n)(e),
					action: s.c.CLICK,
					noun: "preview",
					source: "hot_potato"
				}),
				a = () => e => ({
					...Object(r.n)(e),
					action: s.c.CLICK,
					noun: "hot_potato",
					source: "nav"
				}),
				i = () => e => ({
					...Object(r.n)(e),
					action: s.c.CLICK,
					noun: "hot_potato",
					source: "inbox"
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.Z(e),
					profile: s.R(e),
					subreddit: s.hb(e)
				}),
				o = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...r(t)
				}),
				a = e => t => ({
					...r(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...r(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...r(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
				})
		},
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "w", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "v", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "u", (function() {
				return f
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "o", (function() {
				return x
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "s", (function() {
				return E
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "A", (function() {
				return C
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "z", (function() {
				return k
			})), n.d(t, "y", (function() {
				return S
			})), n.d(t, "r", (function() {
				return w
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "C", (function() {
				return A
			})), n.d(t, "B", (function() {
				return D
			})), n.d(t, "E", (function() {
				return M
			})), n.d(t, "D", (function() {
				return F
			})), n.d(t, "F", (function() {
				return U
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more", e.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN = "google_account_confirmation_screen", e.USERNAME_SECOND_CONFIRMATION_SCREEN = "username_second_confirmation_screen", e.USERNAME_CONFIRMATION_SCREEN = "username_confirmation_screen", e.USERNAME_TOOLTIP = "username_tooltip"
			}(i || (i = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
					return t => ({
						...Object(r.n)(t),
						action: s.c.CLICK,
						noun: i.EXIT,
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: a
					})
				},
				d = () => e => ({
					...Object(r.n)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				l = () => e => ({
					...Object(r.n)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				u = e => t => ({
					...Object(r.n)(t),
					action: s.c.DISMISS,
					noun: e,
					source: a
				}),
				m = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				f = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				g = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				x = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				v = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				y = () => e => ({
					...Object(r.n)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				E = (e, t, n, o, c) => d => ({
					...Object(r.n)(d),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(d),
						reason: c
					},
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: P(n),
						categoryId: o
					}
				}),
				_ = (e, t, n, o, c, d) => l => ({
					...Object(r.n)(l),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(l),
						reason: d
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: P(t),
						categoryId: n,
						subredditName: o,
						subredditId: c
					}
				}),
				O = (e, t) => n => ({
					...Object(r.n)(n),
					source: a,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: P(e),
						categoryId: t
					}
				}),
				C = () => e => ({
					...Object(r.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: i.TOPIC_PREVIEW
				}),
				j = () => e => ({
					...Object(r.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: i.TOPIC_PREVIEW
				}),
				k = (e, t) => n => ({
					...Object(r.n)(n),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: P(e),
						categoryId: t
					}
				}),
				S = () => e => ({
					...Object(r.n)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				w = (e, t, n, o) => c => ({
					...Object(r.n)(c),
					source: a,
					action: s.c.VIEW,
					noun: e ? i.CATEGORY : i.SUB_CATEGORY,
					actionInfo: {
						...Object(r.d)(c),
						reason: o
					},
					onboarding: {
						categoryName: P(t),
						categoryId: n
					}
				}),
				N = (e, t, n, o, c) => d => ({
					...Object(r.n)(d),
					source: a,
					action: s.c.VIEW,
					actionInfo: {
						...Object(r.d)(d),
						reason: c
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: P(e),
						categoryId: n,
						subredditName: t,
						subredditId: o
					}
				}),
				P = e => e.toLowerCase().replace(new RegExp("&", "g"), "and").replace(new RegExp(" ", "g"), "_").replace(new RegExp("[^-_a-z0-9]", "g"), "");
			var I, T, L;
			! function(e) {
				e.CONTINUE = "continue", e.LOGIN_ANOTHER_ACCOUNT = "login_another_account"
			}(I || (I = {})),
			function(e) {
				e.CHANGE_USERNAME = "change_username", e.KEEP_USERNAME = "keep_username"
			}(T || (T = {})),
			function(e) {
				e.GO_BACK = "go_back", e.YES_KEEP_USERNAME = "yes_keep_username"
			}(L || (L = {}));
			const B = () => e => ({
					...Object(r.n)(e),
					action: s.c.VIEW,
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				R = e => t => ({
					...Object(r.n)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				A = () => e => ({
					...Object(r.n)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				D = e => t => ({
					...Object(r.n)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				M = () => e => ({
					...Object(r.n)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				F = e => t => ({
					...Object(r.n)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				U = () => e => ({
					...Object(r.n)(e),
					action: s.c.VIEW,
					noun: i.USERNAME_TOOLTIP,
					source: a
				})
		},
		"./src/reddit/helpers/trackers/predictionsLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "g", (function() {
				return b
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...Object(s.n)(e),
					subreddit: Object(s.hb)(e)
				}),
				o = {
					source: "global",
					action: "view",
					noun: "screen"
				},
				a = () => e => ({
					...r(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "all_time_community_predictors"
					}
				}),
				i = () => e => ({
					...r(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				c = () => e => ({
					...r(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "previous_tournament_predictor"
					}
				}),
				d = () => e => ({
					...r(e),
					...o,
					actionInfo: {
						pageType: "all_time_community_predictors_preview"
					}
				}),
				l = e => t => ({
					...r(t),
					...o,
					actionInfo: {
						pageType: "tournament_leaderboard_preview",
						reason: "predictions_tab"
					},
					predictions: {
						tournamentId: e
					}
				}),
				u = () => e => ({
					...r(e),
					...o,
					actionInfo: {
						pageType: "previous_tournaments"
					}
				}),
				m = () => e => ({
					...r(e),
					...o,
					actionInfo: {
						pageType: "all_time_community_predictors"
					}
				}),
				p = e => {
					let {
						isPreviousEvent: t,
						isQueried: n
					} = e;
					if (!n) return {
						reason: t ? "previous_tournament" : "predictions_tab"
					}
				},
				b = (e, t, n) => s => ({
					...r(s),
					...o,
					actionInfo: {
						pageType: "tournament_leaderboard",
						...p({
							isPreviousEvent: t,
							isQueried: n
						})
					},
					predictions: {
						tournamentId: e
					}
				})
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "H", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "D", (function() {
				return p
			})), n.d(t, "A", (function() {
				return b
			})), n.d(t, "E", (function() {
				return h
			})), n.d(t, "C", (function() {
				return f
			})), n.d(t, "B", (function() {
				return g
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "v", (function() {
				return v
			})), n.d(t, "x", (function() {
				return y
			})), n.d(t, "r", (function() {
				return E
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "q", (function() {
				return O
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "z", (function() {
				return j
			})), n.d(t, "s", (function() {
				return k
			})), n.d(t, "y", (function() {
				return S
			})), n.d(t, "G", (function() {
				return w
			})), n.d(t, "t", (function() {
				return N
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "d", (function() {
				return B
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "w", (function() {
				return A
			})), n.d(t, "F", (function() {
				return D
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "l", (function() {
				return F
			})), n.d(t, "m", (function() {
				return U
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "h", (function() {
				return H
			}));
			var s, r = n("./src/reddit/constants/chat.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(s || (s = {}));
			const i = (e, t) => {
					if (t) {
						const n = a.B(e, t.post.id),
							s = a.I(e, t.post.id),
							r = a.hb(e);
						if (t.post.authorInfo && s && (s.authorId = t.post.authorInfo.id), n) {
							n.streamPublicId = t.stream.stream_id, n.id = t.stream.stream_id;
							const s = Object(o.j)(e, {
								streamIdFromPath: t.post.id
							});
							s === o.a.LIVE ? n.type = "stream_live" : s === o.a.VOD ? n.type = "stream_vod" : s === o.a.UNAVAILABLE && (n.type = "stream_unavailable")
						}
						return {
							post: s,
							media: n,
							subreddit: r
						}
					}
					return {
						subreddit: a.hb(e)
					}
				},
				c = (e, t, n) => {
					if (!t || !n) return;
					const s = Object(o.j)(e, {
							streamIdFromPath: t.post.id
						}),
						a = t.chat_disabled || n.chatState === r.a.None;
					return {
						id: n.id,
						sessionDurationMs: n.sessionDurationMs,
						watchDurationMs: n.watchDurationMs,
						heartbeatDurationMs: n.heartbeatDurationMs,
						isLive: s === o.a.LIVE,
						playheadOffsetMs: n.playheadOffsetMs,
						timestampMs: n.timestampMs,
						startTimeMs: n.startTimeMs,
						volume: n.volume,
						chatState: a ? r.a.None : r.a.Compact,
						scrubbingStartMs: n.scrubbingStartMs,
						scrubbingEndMs: n.scrubbingEndMs,
						playerType: n.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...i(e)
				}),
				u = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...i(e)
				}),
				m = (e, t) => n => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...i(n, e),
					actionInfo: a.d(n, {
						position: t || 0
					})
				}),
				p = (e, t) => n => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...e && {
						...i(n, e)
					}
				}),
				b = (e, t) => n => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				h = (e, t) => n => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				f = (e, t) => n => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				g = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...i(s, t)
				}),
				x = (e, t, n, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...i(r, t),
					actionInfo: a.d(r, {
						referralId: s
					})
				}),
				v = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...i(s, t)
				}),
				y = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...i(t, e)
				}),
				E = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				_ = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				O = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				C = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(n, e, t),
					...i(n, e)
				}),
				j = e => t => {
					const n = Object(o.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, n)
					}
				},
				k = (e, t, n) => s => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(s, t, n),
					...i(s, t)
				}),
				S = (e, t) => n => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(n, e, t),
					...d(n)
				}),
				w = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: a.R(t),
					screen: a.Z(t),
					...i(t, e)
				}),
				N = e => t => {
					const n = i(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: a.R(t),
						screen: a.Z(t),
						...n
					}
				},
				P = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				I = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...i(t, e)
				}),
				T = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: a.hb(t)
				}),
				L = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(n, e, t),
					...i(n, e)
				}),
				B = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(n, e, t),
					...i(n, e)
				}),
				R = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(n, e, t),
					...i(n, e)
				}),
				A = (e, t) => n => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(n, e, t),
					...i(n, e)
				}),
				D = (e, t) => n => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(n, e, t),
					...i(n, e)
				}),
				M = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(n, e, t),
					...i(n, e)
				}),
				F = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(n, e, t),
					...i(n, e),
					...d(n)
				}),
				U = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(n, e, t),
					...i(n, e),
					...d(n)
				}),
				W = (e, t) => n => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(n, t),
					...d(n)
				}),
				H = (e, t) => n => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(n, t),
					...d(n)
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return _
			}));
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.n(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...u.n(e),
					source: r,
					screen: u.Z(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(i.b)(n) && !Object(a.b)(n)) return {
						outbound: void 0
					};
					const r = Object(i.b)(n) ? "postId" : "commentId",
						o = {
							url: `/r/${s}/`,
							sourceElement: Object(c.a)(t),
							subredditName: s,
							[r]: n.id
						},
						d = Object(l.z)(e, {
							subredditName: s
						});
					return d ? {
						outbound: {
							...o,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(i.b)(n) && !Object(a.b)(n)) return {};
					const s = Object(i.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.I(e, n.id),
						subreddit: u.ib(e, s),
						...b(e, t)
					}
				},
				f = e => t => ({
					...m(t),
					...h(t, e)
				}),
				g = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.jb(t, e),
					screen: u.Z(t)
				}),
				x = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: s.ITEM_POST,
					post: u.I(n, t),
					subreddit: u.jb(n, e),
					screen: u.Z(n)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.ITEM_POST,
					post: u.I(n, t),
					subreddit: u.jb(n, e),
					screen: u.Z(n)
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				E = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.ib(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const i = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(a.vb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...a.n
				}),
				c = (e, t) => n => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.I(n, e),
					subreddit: a.hb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.n(n)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...a.n(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: s.TOPIC,
					...a.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/promo.ts"),
				r = n("./src/reddit/hooks/usePromoContext.ts");

			function o(e) {
				const {
					promos: t
				} = Object(r.a)();
				return !!e && t.get(e) === s.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function o(e) {
				const t = Object(s.e)(r.a) === e,
					n = Object(s.e)(r.c) === e,
					o = Object(s.e)(r.e) === e;
				return t || n || o
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
				const t = Object(s.useRef)(!1);
				t.current || (e(), t.current = !0)
			}
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useModalState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				const [t, n] = r.a.useState(e);
				return [t, () => n(!0), () => n(!1)]
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(s.useContext)(r.a)
			}
		},
		"./src/reddit/hooks/useWindowEvent.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js");
			const r = (e, t) => {
				Object(s.useEffect)(() => (window.addEventListener(e, t), () => window.removeEventListener(e, t)), [e, t])
			};
			t.a = r
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: Object(o.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", d.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.a = e => {
				let {
					compact: t,
					isFilled: n,
					...s
				} = e;
				return t ? r.a.createElement("span", d({}, s, {
					className: Object(o.a)(c.a.compactDownvoteWrapper, s.className)
				}), r.a.createElement(l, {
					className: c.a.compactDownvote,
					isFilled: n
				})) : r.a.createElement("span", d({}, s, {
					className: Object(o.a)(c.a.downvoteWrapper, s.className)
				}), r.a.createElement(l, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.b = e => {
				let {
					compact: t,
					isFilled: n,
					...s
				} = e;
				return t ? r.a.createElement("span", d({}, s, {
					className: Object(o.a)(c.a.compactUpvoteWrapper, s.className)
				}), r.a.createElement(l, {
					className: c.a.compactUpvote,
					isFilled: n
				})) : r.a.createElement("span", d({}, s, {
					className: Object(o.a)(c.a.upvoteWrapper, s.className)
				}), r.a.createElement(l, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/CirclePost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				viewBox: "0 0 56 56",
				xmlns: "http://www.w3.org/2000/svg",
				className: e.className
			}, r.a.createElement("g", {
				transform: "translate(1 1)",
				fill: "inherit",
				stroke: "inherit",
				fillRule: "evenodd"
			}, r.a.createElement("rect", {
				x: "16",
				y: "35",
				width: "22.4",
				height: "2.8",
				rx: "1.4",
				stroke: "none"
			}), r.a.createElement("path", {
				d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
			}), r.a.createElement("circle", {
				strokeWidth: "2",
				fill: "none",
				cx: "27",
				cy: "27",
				r: "27"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: n,
					...s
				} = e;
				return r.a.createElement("svg", c({
					className: Object(o.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s), r.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					fillRule: "evenodd"
				}, r.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), r.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: s,
					theme: a,
					...d
				} = e, m = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(i.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return r.a.createElement("div", u({
					className: Object(o.a)(l.a.backgroundContainer, n),
					style: p
				}, d))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7",
				onlyChildMargin: "_2OVNlZuUd8L9v0yVECZ2iA"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(d.u)(),
				h = Object(a.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.S)(e, t)
				}),
				f = Object(o.b)(h);
			t.a = b(f(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: s,
					dispatch: o,
					fitPageToContent: a,
					forcedLayout: l,
					isCollectionLayout: u,
					isEditing: b,
					layout: h,
					pageLayer: f,
					...g
				} = e;
				return r.a.createElement("div", p({
					className: Object(i.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: h === c.g.Large || Object(d.P)(f),
						[m.a.mDisableFullScreen]: s && !u,
						[m.a.mClassicWidth]: u,
						[m.a.mIsEditing]: !!b,
						[m.a.mCanFlexFullWidth]: !a,
						[m.a.onlyChildMargin]: !n
					})
				}, g))
			}))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_31N0dvxfpsO6Ur5AKx4O5d",
				sidebar: "_3Kd8DQpBIbsr5E1JcrMFTY",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				a = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./node_modules/classnames/index.js"),
				p = n.n(m),
				b = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				h = n("./src/lib/constants/icons.ts"),
				f = n("./src/reddit/components/SubredditIcon/index.tsx"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/components/BackToSubreddit/index.m.less"),
				v = n.n(x);
			var y = e => {
					const {
						subredditName: t
					} = e, n = `/${t}`;
					return r.a.createElement(b.a, {
						className: v.a.backToSubreddit,
						to: n
					}, r.a.createElement("div", {
						className: v.a.innerContainer
					}, r.a.createElement(g.a, {
						name: h.a.back,
						className: p()(v.a.content, v.a.back)
					}), r.a.createElement(f.b, {
						className: p()(v.a.content, v.a.subredditIcon)
					}), r.a.createElement("span", {
						className: p()(v.a.content, v.a.title)
					}, t)))
				},
				E = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				_ = n("./src/reddit/layout/page/Listing/index.m.less"),
				O = n.n(_);
			t.a = e => {
				const {
					backgroundColor: t,
					backToSubredditName: n,
					className: m,
					containerRef: p,
					content: b,
					contentBanner: h,
					contentClassName: f,
					contentNavBar: g,
					disableFullscreen: x,
					fitPageToContent: v,
					forcedLayout: _,
					hideOnlyChildMargin: C,
					isCollectionLayout: j,
					isPageSwapped: k,
					maxWidth: S,
					navBar: w,
					redditStyle: N,
					sidebar: P,
					sidebars: I,
					trendingUnit: T,
					subredditId: L
				} = e, B = T ? "28px" : "0", R = k ? {
					marginRight: `${c.p}px`,
					marginTop: B
				} : {
					marginLeft: `${c.p}px`,
					marginTop: B
				}, A = P && r.a.createElement("div", {
					className: Object(i.a)(O.a.sidebar, j ? O.a["m-collectionLayout"] : O.a.defaultLayout),
					style: R
				}, P), D = r.a.createElement(a.a, {
					hideOnlyChildMargin: C,
					className: f,
					disableFullscreen: x,
					fitPageToContent: v,
					forcedLayout: _,
					isCollectionLayout: j
				}, h, n && r.a.createElement(y, {
					subredditName: n
				}), b);
				let M;
				M = I ? r.a.createElement(r.a.Fragment, null, I[0], D, I[1]) : k ? r.a.createElement(r.a.Fragment, null, A, D) : r.a.createElement(r.a.Fragment, null, D, A);
				const F = x ? `${S||l.a+2*c.l}px` : "100%",
					U = Object(s.useContext)(u.a);
				return r.a.createElement(E.a, {
					subredditId: L
				}, r.a.createElement("div", {
					className: Object(i.a)(O.a.outerContainer, d.i, m, {
						[O.a.outerContainerExp]: U
					}),
					ref: p
				}, r.a.createElement(o.a, {
					className: d.h,
					redditStyle: N,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: O.a.innerContainer
				}, w, g, (e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null)(e), r.a.createElement("div", {
					style: {
						maxWidth: F
					}
				}, T), r.a.createElement("div", {
					className: O.a.body,
					style: {
						maxWidth: F
					}
				}, M))))
			}
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				o = n.n(r);
			t.a = s.a.button("inlineButton", o.a)
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.GatedSubreddit = "GatedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(s || (s = {}))
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(s || (s = {}));
			const r = e => e.category === s.Supporter,
				o = e => e.category === s.Achievement
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(s || (s = {}))
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				c = n("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				d = n("./src/reddit/constants/experiments.ts"),
				l = n("./src/reddit/constants/postLayout.ts"),
				u = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			const m = Object(s.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(6), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("NewCommunityProgress")]).then(n.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx"
				}
			});

			function p(e) {
				let {
					postLayout: t,
					subredditId: n,
					subredditSubscribers: s
				} = e;
				var r;
				const p = Object(a.e)(e => e.subreddits.survey[n]),
					b = Object(a.e)(e => e.subreddits.progressModule[n]),
					h = Object(a.e)(u.a),
					f = h !== d.Ce.NewModule;
				return (null === (r = null == b ? void 0 : b.cards) || void 0 === r ? void 0 : r.length) > 0 && f ? o.a.createElement(m, {
					closeModuleOnMount: !!t && t !== l.g.Large,
					subredditId: n,
					progressModule: b
				}) : t !== l.g.Large ? null : (null == p ? void 0 : p.isEligible) && !(null == p ? void 0 : p.response) && (!h || h && s > 100) ? o.a.createElement(c.a, {
					subredditId: n,
					survey: p
				}) : o.a.createElement(i.a, {
					subredditId: n
				})
			}
		},
		"./src/reddit/pages/Subreddit/index.m.less": function(e, t, n) {
			e.exports = {
				duHeader: "otZ2uDhYTr1YmgF32ArRm",
				cardChild: "_3HLyjC36ED_cOkMhS77Ts1",
				classicChild: "_2YjutkjJwMliy9kOCltIuA",
				compactChild: "m6QmcOHa4tObaem8JhVz8",
				sidebar: "_3ZmEUUvrdj4LXpXC9XZdN7",
				subredditPremiumUpsell: "_3s2ygGulpjIr920Ws4sGpx"
			}
		},
		"./src/reddit/pages/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/lodash/fromPairs.js"),
				o = n.n(r),
				a = n("./node_modules/lodash/memoize.js"),
				i = n.n(a),
				c = n("./node_modules/lodash/throttle.js"),
				d = n.n(c),
				l = n("./node_modules/react/index.js"),
				u = n.n(l),
				m = n("./node_modules/react-redux/es/index.js"),
				p = n("./node_modules/react-router-redux/es/index.js"),
				b = n("./node_modules/reselect/es/index.js"),
				h = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				f = n("./src/config.ts"),
				g = n("./src/lib/classNames/index.ts"),
				x = n("./src/lib/constants/index.ts"),
				v = n("./src/lib/extractQueryParams/index.ts"),
				y = n("./src/lib/isAdHocMultireddit/index.ts"),
				E = n("./src/lib/isFakeSubreddit/index.ts"),
				_ = n("./src/lib/listingSort/index.ts"),
				O = n("./src/lib/makeListingKey/index.ts"),
				C = n("./src/lib/objectSelector/index.ts"),
				j = n("./src/lib/promo/withShowSignupUpsell.tsx"),
				k = n("./src/lib/fastdom/index.ts"),
				S = n("./src/lib/performanceTimings/index.tsx"),
				w = n("./src/reddit/actions/preferences.ts"),
				N = n("./src/reddit/actions/search.ts"),
				P = n("./src/reddit/actions/searchQueryId/index.tsx"),
				I = n("./src/reddit/actions/subreddit.ts"),
				T = n("./src/reddit/components/AwardedListingBanner/index.tsx"),
				L = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				B = n("./src/reddit/components/ContentGate/index.tsx"),
				R = n("./src/reddit/components/CreatePostBanner/index.tsx"),
				A = n("./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/async.ts"),
				D = n("./src/reddit/components/Econ/PredictionsPostList/index.tsx"),
				M = n("./src/reddit/components/Econ/Tournament/Sidebar/index.tsx"),
				F = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx"),
				U = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				W = n("./src/reddit/components/EmptySubredditPostList/index.tsx"),
				H = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				V = n("./src/reddit/components/Governance/ClaimPointsBanner/async.ts"),
				G = n("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				z = n("./src/reddit/components/HeaderImage/index.tsx"),
				q = n("./src/reddit/components/HotPotatoEmbed/index.tsx"),
				K = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				J = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Q = n("./src/reddit/components/JumpToContent/index.tsx"),
				Y = n("./src/reddit/components/ListingPostList/index.tsx"),
				Z = n("./src/reddit/components/NewPostPill/index.tsx"),
				X = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				$ = n("./src/reddit/components/RelatedSubredditsCarousel/async.tsx"),
				ee = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				te = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				ne = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				se = n("./src/reddit/components/SubredditSidebar/index.tsx"),
				re = n("./src/reddit/components/TabBadger/index.tsx"),
				oe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ae = n("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				ie = n("./src/reddit/constants/parameters.ts"),
				ce = n("./src/reddit/constants/postLayout.ts"),
				de = n("./src/reddit/contexts/PageLayer/index.tsx"),
				le = n("./src/reddit/featureFlags/index.ts"),
				ue = n("./src/reddit/helpers/correlationIdTracker.ts"),
				me = n("./src/reddit/helpers/datadome.ts"),
				pe = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				be = n("./src/reddit/helpers/name/index.ts"),
				he = n("./src/reddit/helpers/resonatePage/index.ts"),
				fe = n("./src/reddit/helpers/trackers/postList.ts"),
				ge = n("./src/reddit/helpers/trackers/screenview.ts"),
				xe = n("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				ve = n("./src/reddit/layout/page/Listing/index.tsx"),
				ye = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				Ee = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				_e = n("./src/reddit/selectors/countrySites.ts"),
				Oe = n("./src/reddit/selectors/discoveryUnit.ts"),
				Ce = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				je = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				ke = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				Se = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				we = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Ne = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Pe = n("./src/reddit/selectors/experiments/onboarding.ts"),
				Ie = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Te = n("./src/reddit/selectors/experiments/resonatePilot.ts"),
				Le = n("./src/reddit/selectors/experiments/topPosts.ts"),
				Be = n("./src/reddit/selectors/listings.ts"),
				Re = n("./src/reddit/selectors/meta.ts"),
				Ae = n("./src/reddit/selectors/moderatorPermissions.ts"),
				De = n("./src/reddit/selectors/newPostPill.ts"),
				Me = n("./src/reddit/selectors/posts.ts"),
				Fe = n("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				Ue = n("./src/reddit/selectors/searchQueryId.ts"),
				We = n("./src/reddit/selectors/subreddit.ts"),
				He = n("./src/reddit/selectors/user.ts"),
				Ve = n("./src/reddit/selectors/userPrefs.ts"),
				Ge = n("./src/lib/countrySites/index.ts"),
				ze = n("./src/reddit/components/Onboarding/Interests/InterestPickerPreview.tsx"),
				qe = n("./src/reddit/constants/countrySites.ts"),
				Ke = n("./src/reddit/helpers/search/searchQueryId.ts"),
				Je = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Qe = n("./src/reddit/selectors/onboarding.ts"),
				Ye = n("./src/reddit/selectors/platform.ts"),
				Ze = n("./src/reddit/pages/Subreddit/index.m.less"),
				Xe = n.n(Ze),
				$e = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");

			function et() {
				return (et = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: tt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), nt = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-AdHocMultiredditSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("reddit-components-AdHocMultiredditSidebar")]).then(n.bind(null, "./src/reddit/components/AdHocMultiredditSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdHocMultiredditSidebar/index.tsx"
				}
			}), st = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-LayerEmbed",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-LayerEmbed").then(n.bind(null, "./src/reddit/components/LayerEmbed/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/LayerEmbed/index.tsx"
				}
			}), rt = 5, ot = 3, at = 6e3, it = Object(de.u)(), ct = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditTopContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("SubredditTopContent~TopWeekPostsDiscoveryUnit"), n.e("SubredditTopContent")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx"
				}
			}), dt = Object(C.a)(Object(b.a)((e, t) => {
				let {
					location: n
				} = t;
				return n.search
			}, e => o()([...Object(v.a)(e)]))), lt = e => Object(Be.a)(e) || "", ut = Object(b.c)({
				isTopContentDismissed: He.Y
			}), mt = Object(b.c)({
				subreddit: (e, t) => Object(We.z)(e, {
					subredditName: t.match.params.subredditName
				})
			}), pt = Object(b.c)({
				isLoggedIn: He.Q
			}), bt = Object(C.a)((e, t) => {
				const {
					subreddit: n
				} = mt(e, t), {
					subredditName: s
				} = t.match.params;
				if (n) {
					if (e.subreddits.progressModule[n.id]) return !1;
					if (Object(we.a)(e)) return !1;
					const t = lt(e),
						r = Object(Ae.b)(Ee.c.config)(e, {
							subredditId: n.id
						}),
						o = Object(Me.D)(e, t, s, !0),
						a = !Object(Be.d)(e, {
							listingKey: t
						});
					if (r && a && o.length <= 1) return !0
				}
				return !1
			}), ht = (e, t) => {
				const n = lt(e),
					s = Object(de.S)(e, t),
					{
						sort: r
					} = xt(e, t);
				return Object(De.a)(e, {
					layout: s,
					listingKey: n,
					sort: r
				})
			}, ft = Object(b.c)({
				inAwardListingExperiment: je.a,
				isPopular: de.F
			}), gt = e => {
				const t = ie.C in e && e[ie.C].toUpperCase();
				if ("string" == typeof t && t in x.ic) return x.ic[t]
			}, xt = Object(C.a)((e, t) => {
				const {
					sort: n,
					subredditName: s,
					countryCode: r,
					languageCode: o
				} = t.match.params, a = dt(e, t), i = Object(E.a)(s, {
					countryCode: r,
					languageCode: o
				}), c = Object(E.c)(s, {
					countryCode: r,
					languageCode: o
				});
				if (n) return Object(_.b)({
					sort: n,
					timeSort: gt(a)
				});
				if (i) return c && Object(Ce.a)(e) ? Object(_.b)({
					sort: x.W.BEST
				}) : Object(_.b)({
					sort: x.W.HOT
				});
				const d = lt(e),
					l = e.listings.postOrder.listingSort[d];
				if (l && !l.hasChanged) return Object(_.d)(l.sort);
				const {
					subreddit: u
				} = mt(e, t);
				if (u) {
					const t = Object(We.D)(e, {
						subredditId: u.id
					});
					return Object(_.d)(t)
				}
				return Object(_.d)(e.user.prefs.sort)
			}), vt = Object(C.a)((e, t) => {
				const {
					subredditName: n
				} = t.match.params;
				return Object(We.Y)(e, {
					subredditName: n
				})
			}), yt = Object(b.c)({
				currentPage: Ye.b,
				claimablePointsEnabled: le.d.spClaimablePoints,
				countrySiteSettings: _e.a,
				isBlacklistedTopContentPage: Oe.e,
				listingKey: lt,
				sortParams: xt,
				specialMembershipUpsellsEnabled: le.d.spSpecialMembershipUpsells,
				topContent: vt,
				topContentDiscoveryUnit: e => Object(Oe.b)(e, {
					unitName: ye.a
				}),
				topPostsVariant: Le.d,
				walletRegistrationBannerEnabled: le.d.spWalletRegistrationBanner,
				nsfwBlockingExperiment: Ne.f,
				isNsfwBlurSubreddit: Ne.e,
				searchResultsServerQueryId: e => Object(Ue.a)(e)
			}), Et = Object(b.c)({
				showCreatePostBanner: bt,
				contentGateInfo: (e, t) => Object(He.f)(e, t.match.params.subredditName),
				layout: de.S,
				isRpanDuVisible: (e, t) => {
					let {
						match: n
					} = t;
					return Object(Fe.a)(e, {
						listingName: `r/${n.params.subredditName}`,
						sort: n.params.sort
					})
				},
				rpanInjectionIndex: (e, t) => {
					let {
						match: n
					} = t;
					return Object(Fe.b)(e, {
						listingName: `r/${n.params.subredditName}`
					})
				},
				inResonatePilot: Te.a,
				newPostPillTriggerIdx: ht,
				isReducedAnimation: Ve.c,
				isCommentCountAnimationEnabled: Ie.d,
				isVoteCountAnimationEnabled: Ie.h,
				isCountAnimShadowTestEnabled: Ie.e,
				isHotPotatoEmbedEnabled: ke.c,
				isBlockingInterstitialEnabled: Se.b,
				isBlockingInterstitialV2Enabled: Se.c,
				interestTopicRecommendations: Qe.b,
				reonboardingFlow: Pe.c
			}), _t = () => Object(b.a)(He.kb, dt, ut, mt, (e, t) => {
				let {
					match: n
				} = t;
				return Object(We.w)(e, {
					subredditName: n.params.subredditName
				})
			}, pt, (e, t) => {
				let {
					match: n
				} = t;
				return n.params.subredditName
			}, Re.l, ft, yt, Et, (e, t, n, s, r, o, a, i, c, d, l) => {
				let {
					isTopContentDismissed: u
				} = n, {
					subreddit: m
				} = s, {
					isLoggedIn: p
				} = o, {
					inAwardListingExperiment: b,
					isPopular: h
				} = c, {
					currentPage: f,
					claimablePointsEnabled: g,
					countrySiteSettings: x,
					specialMembershipUpsellsEnabled: v,
					listingKey: y,
					sortParams: {
						sort: E,
						timeSort: _
					},
					topContent: O,
					topContentDiscoveryUnit: C,
					topPostsVariant: j,
					isBlacklistedTopContentPage: k,
					walletRegistrationBannerEnabled: S,
					nsfwBlockingExperiment: w,
					isNsfwBlurSubreddit: N,
					searchResultsServerQueryId: P
				} = d;
				const I = t && ie.g in t ? t[ie.g].toUpperCase() : i,
					T = !!t.hasOwnProperty("f");
				return {
					currentPage: f,
					countrySort: I,
					claimablePointsEnabled: g,
					countrySiteSettings: x,
					specialMembershipUpsellsEnabled: v,
					inAwardListingExperiment: b,
					isLoggedIn: p,
					isPopular: h,
					listingKey: y,
					renderNSFWContentGate: m && m.isNSFW && !e,
					isTopContentDismissed: u,
					queryParams: t,
					sort: E,
					subreddit: m,
					subredditAboutInfo: r,
					subredditName: a,
					timeSort: _,
					topContent: O,
					topContentDiscoveryUnit: C,
					topPostsVariant: j,
					isBlacklistedTopContentPage: k,
					isFlairFilter: T,
					walletRegistrationBannerEnabled: S,
					nsfwBlockingExperiment: w,
					isNsfwBlurSubreddit: N,
					searchResultsServerQueryId: P,
					...l
				}
			}), Ot = (e, t) => ({
				onLoadMorePosts: () => {
					e(I.r({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					}))
				},
				onLoadMoreSearchResults: () => e(Object(N.n)([x.cc.Posts])),
				refreshFeed: () => e(I.s({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				setTopContentDismissalPref: () => e(Object(w.G)()),
				redirectToNewSort: () => {
					e(Object(p.b)(`/r/${t.match.params.subredditName}/${x.W.NEW}/`))
				},
				unsetSearchResultsServerQueryId: () => e(Object(P.c)())
			}), Ct = Object(m.b)(_t, Ot), jt = Object(s.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("Trending").then(n.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), kt = e => u.a.createElement(jt, et({}, e, {
				fallback: u.a.createElement(te.a, {
					className: e.className,
					showCardView: !!e.showCardView
				})
			})), St = Object(s.a)({
				resolved: {},
				chunkName: () => "FrontpageSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("FrontpageSidebar").then(n.bind(null, "./src/reddit/components/FrontpageSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/FrontpageSidebar/index.tsx"
				}
			}), wt = Object(s.a)({
				resolved: {},
				chunkName: () => "TopWeekPostsDiscoveryUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("SubredditTopContent~TopWeekPostsDiscoveryUnit"), n.e("TopWeekPostsDiscoveryUnit")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx"
				}
			});

			function Nt(e) {
				const {
					subreddit: t
				} = e;
				return !!t && !!t.name && "snoovatar" === t.name.toLowerCase()
			}

			function Pt(e) {
				const {
					subreddit: t
				} = e;
				return "youcannesdraw" === (null == t ? void 0 : t.name.toLowerCase())
			}
			class It extends u.a.Component {
				constructor(e) {
					if (super(e), this.renderNewPostPill = e => {
							e === this.props.newPostPillTriggerIdx - 1 && (this.state.isNewPostPillRenderedOnce || (this.setState({
								isNewPostPillRenderedOnce: !0,
								shouldShowNewPostPill: !0
							}), this.props.sendEvent(Object(fe.d)(this.props.listingKey)), this.newPostPillTimer = setTimeout(() => {
								this.state.shouldShowNewPostPill && this.setState({
									shouldShowNewPostPill: !1
								})
							}, at)))
						}, this.onNewPostPillClick = () => {
							this.setState({
								shouldShowNewPostPill: !1
							}), this.props.sendEvent(Object(fe.c)(this.props.listingKey)), k.a.write(() => {
								window.addEventListener("scroll", this.handleScroll), window.scrollTo({
									top: 0,
									behavior: this.props.isReducedAnimation ? "auto" : "smooth"
								})
							})
						}, this.handleScroll = d()(() => {
							0 === window.scrollY && (window.removeEventListener("scroll", this.handleScroll), this.props.redirectToNewSort())
						}, x.K), this.onTopContentDismissed = () => {
							this.props.setTopContentDismissalPref()
						}, this.onViewed = (e, t) => {
							const {
								listingKey: n,
								pageLayer: s,
								sort: r,
								timeSort: o
							} = this.props, a = Object(de.P)(s);
							return Object(ge.f)({
								key: n,
								sort: r,
								timerType: t,
								timerMillis: e,
								timeSort: o,
								isPredictionsPage: a
							})
						}, this.noPostsComponent = () => {
							const {
								pageLayer: e,
								subredditName: t,
								sort: n,
								subreddit: s
							} = this.props, r = t.toLowerCase(), o = Object(de.P)(e);
							return u.a.createElement(W.a, {
								isPredictionsPage: o,
								listingName: r,
								sort: n,
								subreddit: s
							})
						}, this.memoizedGetInjectChildren = i()(e => {
							let {
								claimablePointsEnabled: t,
								inAwardListingExperiment: n,
								interestTopicRecommendations: s,
								isPopular: r,
								isRpanDuVisible: o,
								layout: a,
								listingKey: i,
								reonboardingFlow: c,
								rpanInjectionIndex: d,
								sendEvent: l,
								sort: m,
								specialMembershipUpsellsEnabled: p,
								subreddit: b,
								subredditName: h,
								timeSort: f,
								topPostsVariant: v,
								walletRegistrationBannerEnabled: y
							} = e;
							return () => {
								const e = {},
									E = Object(Le.c)(v),
									_ = a === ce.g.Classic ? Xe.a.classicChild : a === ce.g.Compact ? Xe.a.compactChild : Xe.a.cardChild;
								if (p && b && (e[0] = {
										estHeight: 487,
										id: `newbie-banner-${a}-${i}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(U.a, {
												className: Object(g.a)(t, _)
											})
										}
									}, e[3] = {
										estHeight: 256,
										id: `lfg-banner-${a}-${i}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(F.a, {
												className: Object(g.a)(t, _),
												subredditId: b.id
											})
										}
									}), b && (e[0] = {
										estHeight: 175,
										id: `community-survey-${a}-${i}`,
										render: () => u.a.createElement($e.a, {
											subredditId: b.id,
											postLayout: a,
											subredditSubscribers: b.subscribers
										})
									}), n && r && m === x.W.AWARDED && (e[0] = {
										estHeight: 180,
										id: `awardlisting-banner-${a}-${i}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(T.a, {
												className: Object(g.a)(t, _)
											})
										}
									}), y && b && (e[1] = {
										estHeight: 384,
										id: `wallet-registration-${a}-${i}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(G.a, {
												className: Object(g.a)(t, _),
												subredditId: b.id
											})
										}
									}), t && b && (e[2] = {
										estHeight: 268,
										id: `claim-points-${a}-${i}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(V.a, {
												className: Object(g.a)(t, _),
												subredditId: b.id
											})
										}
									}), !r && E && f !== x.ic.WEEK && a === ce.g.Large) {
									const t = Object(O.a)(h, x.W.TOP, {
										t: x.ic.WEEK
									});
									e[ot] = {
										estHeight: 0,
										id: `top-week-posts-${a}-${i}`,
										render(e) {
											let {
												className: n
											} = e;
											return u.a.createElement(wt, {
												className: n,
												listingKey: t,
												subredditName: h
											})
										}
									}
								}
								if (o) {
									const {
										child: t,
										idx: n
									} = Object(X.a)({
										children: e,
										desiredIndex: d,
										layout: a,
										listingKey: i,
										listingName: `r/${h}`,
										sendEvent: l
									});
									e[n] = t
								}
								if (s) {
									const {
										interests: t,
										index: n
									} = s, {
										child: r,
										idx: o
									} = Object(ze.a)({
										children: e,
										desiredIdx: n,
										interests: t,
										sendEvent: l,
										variant: c
									});
									e[o] = r
								}
								return e
							}
						}, e => {
							let {
								isRpanDuVisible: t,
								sort: n,
								layout: s,
								listingKey: r,
								timeSort: o,
								subreddit: a
							} = e;
							return `rpan:${t}_s:${n}_l:${s}_lk${r}_ts:${o}_sr:${null==a?void 0:a.id}`
						}), this.state = {
							shouldShowNewPostPill: !1,
							isNewPostPillRenderedOnce: !1
						}, this.props.searchResultsServerQueryId.searchQueryId) {
						const {
							key: e,
							searchQueryId: t
						} = this.props.searchResultsServerQueryId;
						e && Ke.a.set(Je.a.SERP, e, t), this.props.unsetSearchResultsServerQueryId()
					}
				}
				componentDidMount() {
					if (k.a.read(() => {
							const e = [Object(me.a)()];
							Object(S.d)(S.c.Subreddit, this.props.isLoggedIn, e)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						x.Mb.includes(e) && Object(he.a)(e)
					}
				}
				componentDidUpdate(e) {
					if (e.isFlairFilter && !this.props.isFlairFilter && Object(ue.c)(ue.a.SearchResults) && Object(ue.b)(ue.a.SearchResults), this.props.inResonatePilot) {
						const t = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						(e.subredditName ? e.subredditName.toLowerCase() : "") !== t && x.Mb.includes(t) && Object(he.a)(t)
					}
					e.subredditName !== this.props.subredditName && (this.newPostPillTimer && clearTimeout(this.newPostPillTimer), this.setState({
						isNewPostPillRenderedOnce: !1,
						shouldShowNewPostPill: !1
					}))
				}
				componentWillUnmount() {
					this.props.isFlairFilter && Object(ue.c)(ue.a.SearchResults) && Object(ue.b)(ue.a.SearchResults)
				}
				render() {
					const {
						contentGateInfo: e,
						countrySiteSettings: t,
						countrySort: n,
						currentPage: s,
						isBlacklistedTopContentPage: r,
						isBlockingInterstitialEnabled: o,
						isBlockingInterstitialV2Enabled: a,
						isCommentCountAnimationEnabled: i,
						isCountAnimShadowTestEnabled: c,
						isHotPotatoEmbedEnabled: d,
						isFlairFilter: l,
						isLoggedIn: m,
						isNsfwBlurSubreddit: p,
						isPopular: b,
						isTopContentDismissed: v,
						isVoteCountAnimationEnabled: _,
						layout: O,
						listingKey: C,
						match: j,
						nsfwBlockingExperiment: k,
						pageLayer: S,
						renderNSFWContentGate: w,
						showCreatePostBanner: N,
						showSignupUpsell: P,
						sort: I,
						subreddit: T,
						subredditAboutInfo: F,
						subredditName: U,
						timeSort: W,
						topContent: V,
						topContentDiscoveryUnit: G,
						topPostsVariant: X
					} = this.props, te = this.memoizedGetInjectChildren(this.props), oe = Object(_e.b)(s), ie = Object(E.a)(U, {
						countryCode: null == oe ? void 0 : oe.countryCode,
						languageCode: null == oe ? void 0 : oe.languageCode
					}), le = U.toLowerCase(), ue = T && T.url ? T.url : Object(Ge.d)(`/r/${U}/`, null == oe ? void 0 : oe.countryCode, null == oe ? void 0 : oe.languageCode), me = Object(h.a)({
						countryCode: qe.a,
						languageCode: qe.b,
						hardcodedPath: ue,
						permalink: ue,
						subredditName: U
					}, t), he = {
						listingKey: C,
						listingName: le
					}, fe = Object(Le.a)(X), ge = Object(Le.b)(X), xe = Object(de.P)(S);
					let ye;
					if (ie ? ye = Object(y.a)(U) ? u.a.createElement(nt, he) : u.a.createElement(St, he) : T && (ye = xe ? u.a.createElement(M.a, {
							subredditId: T.id
						}) : u.a.createElement(se.a, et({}, he, {
							className: Xe.a.sidebar,
							subredditId: T.id,
							subredditName: U,
							topPostsVariant: X
						}))), (null == T ? void 0 : T.isNSFW) && k === Ne.a.NoPreview) return u.a.createElement(ae.a, {
						contentTitle: Object(be.c)(U)
					});
					const Ee = Object(pe.a)(e, w, U);
					if (Ee && !p) return u.a.createElement(B.default, Ee);
					const Oe = O === ce.g.Large,
						Ce = b,
						je = T ? T.id : void 0,
						ke = !j.params.sort && V && !V.isSubscribed && V.postIds && V.postIds.length >= rt && !v && !r && !fe && !ge,
						Se = {
							baseUrl: me,
							countrySort: n,
							sort: I,
							subredditId: je,
							timeSort: W
						},
						we = l ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Pe = T && T.subscribers;
					let Ie;
					const Te = window.URL;
					if (Nt(this.props)) {
						const e = new Te(f.a.snoovatarUrl + "/static/client/");
						e.searchParams.set("platform", "desktop"), Ie = u.a.createElement("iframe", {
							className: Object(g.a)(Xe.a.af),
							src: e.href
						})
					} else Ce ? Ie = u.a.createElement(kt, {
						showCardView: this.props.layout === ce.g.Large
					}) : Pt(this.props) && this.props.subreddit && (Ie = u.a.createElement(st, {
						baseUrl: f.a.layersUrl,
						subredditId: this.props.subreddit.id
					}));
					const Be = O === ce.g.Large && I !== x.W.NEW && !xe && !ie,
						Re = this.state.shouldShowNewPostPill && Be,
						Ae = xe ? D.a : Y.a,
						De = k === Ne.a.Blurred && (null == T ? void 0 : T.isNSFW);
					return u.a.createElement(ne.a, {
						subredditId: je
					}, u.a.createElement(ve.a, {
						subredditId: je,
						className: Object(g.a)(Xe.a.Container, this.props.className),
						fitPageToContent: !0,
						navBar: !ie && u.a.Children.toArray([u.a.createElement(z.a, {
							headerText: T ? T.name : U,
							disableFullscreen: Oe,
							isTopBannerVariant: !0,
							key: "headerimage",
							shouldBlurHeaderImage: De,
							subredditOrProfile: T,
							url: me
						}), u.a.createElement(L.a, {
							layout: O,
							key: "idtopbar",
							subreddit: T || void 0,
							subredditId: je,
							subredditName: U,
							subredditUrl: me
						}), d && u.a.createElement(q.a, null), je && u.a.createElement($.a, {
							key: "related-subreddit-carousel",
							subredditId: je
						})]),
						trendingUnit: Ie,
						content: u.a.createElement(u.a.Fragment, null, T && T.isQuarantined && u.a.createElement(J.a, {
							subredditName: U
						}), T && N && u.a.createElement(R.a, {
							subreddit: T,
							listingKey: C,
							listingName: le
						}), Ce && u.a.createElement(ee.a, {
							className: Xe.a.duHeader
						}, tt._("Popular posts", null, {
							hk: "Gfyj2"
						})), ke && u.a.createElement(ct, {
							discoveryUnit: G,
							subredditName: T ? T.name : U,
							topContent: V,
							onCloseClick: this.onTopContentDismissed
						}), !ie && m && !(F && F.userIsBanned) && !xe && u.a.createElement(K.a, {
							subredditName: U
						}), !xe && u.a.createElement(H.a, Se), u.a.createElement(Q.a, null), u.a.createElement(re.a, {
							handlePillClick: this.props.refreshFeed,
							listingKey: C,
							subredditName: U,
							subscriberCount: Pe
						}), xe && u.a.createElement(A.a, {
							subreddit: T
						}), Re && u.a.createElement(Z.a, {
							onClick: this.onNewPostPillClick,
							subredditName: U
						}), u.a.createElement(Ae, {
							getInjectChildren: xe ? void 0 : te,
							isCommentCountAnimationEnabled: i,
							isVoteCountAnimationEnabled: _,
							isCountAnimShadowTestEnabled: c,
							listingKey: C,
							listingName: le,
							listingViewed: this.onViewed,
							triggerNewPostPill: Be ? this.renderNewPostPill : void 0,
							noPostsComponent: this.noPostsComponent,
							onLoadMore: we,
							onScroll: P,
							inSubredditOrProfile: !ie,
							disablePlaceholder: b && I === x.W.AWARDED,
							isBlockingInterstitialEnabled: o || a
						})),
						sidebar: ye
					}))
				}
			}
			t.default = it(Ct(Object(oe.c)(Object(j.a)(Object(xe.d)(It)))))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/gold/constants.ts"),
				o = n("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const a = {};
			var i = n("./node_modules/icepick/icepick.js"),
				c = n("./src/reddit/actions/economics/powerups/constants.ts");
			const d = {},
				l = e => {
					var t, n;
					return (null === (t = e.find(e => {
						let {
							isPreferred: t
						} = e;
						return t
					})) || void 0 === t ? void 0 : t.type) || (null === (n = e[0]) || void 0 === n ? void 0 : n.type)
				},
				u = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.mb:
							const {
								subredditId: n, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const a = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								i = s.filter(o.a).map(e => e.type),
								c = s.filter(o.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: a,
									achievementTypes: i,
									supporterTypes: c
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.d: {
							const {
								id: n,
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let r = e[n] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: a
								} of s) {
								const n = a.filter(o.a),
									s = n.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									i = a.filter(o.b),
									c = i.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									d = l(n),
									u = l(i);
								r = {
									...r,
									[e]: {
										achievementTypes: s,
										supporterTypes: c,
										preferredAchievementType: d,
										preferredSupporterType: u,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[n]: r
							}
						}
						case c.f: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: r,
								supporterFlairType: o
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: r,
								pendingSupporterType: o
							}))
						}
						case c.g: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: r,
								supporterFlairType: o
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								preferredAchievementType: r,
								preferredSupporterType: o,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.h: {
							const {
								subredditId: n,
								userId: s,
								isHidden: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								isHidden: r
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.i: {
							let n = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const r = s.supportedSubreddits.filter(e => {
									let {
										subredditInfo: t
									} = e;
									return null == t ? void 0 : t.id
								}).map(e => {
									let {
										subredditInfo: t
									} = e;
									return t.id
								});
								n = {
									...n,
									[t]: r.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(s.a)(i.k, i.Hb, (e, t) => {
					let {
						listingName: n
					} = t;
					return -1 === [o.R, "r/popular"].indexOf(n)
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(a.F)(e, n.replace(/^r\//, ""))
				}, (e, t, n, s) => {
					if (e && n && s) {
						return t.subreddit[s]
					}
					return t
				}),
				u = Object(s.a)(l, e => {
					if (!e) return !1;
					if (!e.rpanDuDismissalTime) return !1;
					return new Date(e.rpanDuDismissalTime).getTime() > Date.now() - 30 * r.B
				}),
				m = Object(s.a)(c.a, u, (e, t) => {
					let {
						listingName: n
					} = t;
					return n
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(d.m)(e, {
						subreddit: n
					})
				}, d.k, (e, t) => {
					let {
						sort: n
					} = t;
					return n
				}, (e, t, n, s, a, i) => {
					return ![o.R, "r/popular"].includes(n) && (i !== r.W.AWARDED && (!!e && (!a.isPermanentlyCanceled && (!t && (!!s && s.show_discovery_unit)))))
				}),
				p = Object(s.a)((e, t) => {
					let {
						listingName: n
					} = t;
					return n
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(d.m)(e, {
						subreddit: n
					})
				}, d.l, (e, t, n) => t ? t.discovery_unit_index : o.i)
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return _
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "h", (function() {
				return L
			})), n.d(t, "k", (function() {
				return B
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "a", (function() {
				return F
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "b", (function() {
				return W
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "g", (function() {
				return V
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				a = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = n("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = n.n(d)()(e => Object(r.a)(Object(s.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				x = e => e.publicAccessNetwork.hlsStreams,
				v = Object(s.a)(x, e => e.ended),
				y = Object(s.a)(x, e => e.removed),
				E = Object(s.a)(p, v, y, (e, t, n) => {
					const s = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = D(s, a.a.ENDED) ? a.a.ENDED : s,
							o = n.stream.vod_accessible;
						return r === s && !0 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: r,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return n.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const s = n.stream.state,
							r = D(s, a.a.ENDED) ? a.a.ENDED : s,
							o = n.stream.vod_accessible;
						return r === s && !1 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: r,
									vod_accessible: !1
								}
							}
						}
					}, s)
				}),
				_ = (e, t) => {
					return E(e)[Object(o.g)(t)]
				},
				O = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n
				}, (e, t) => u(t.listingName)(e, t), E, b, i.h, (e, t, n, s, r) => {
					const i = [];
					if (e) {
						const t = Object(o.g)(e);
						n[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						l = new Set([...s, ...r]);
					return d.filter(e => {
						const t = n[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== a.a.KILLED && t.stream.state !== a.a.PURGED
					})
				}),
				C = Object(s.a)((e, t) => {
					let {
						count: n
					} = t;
					return n
				}, E, (e, t) => {
					let {
						listingName: n,
						streamIdFromPath: s
					} = t;
					return O(e, {
						listingName: n,
						streamIdFromPath: s
					})
				}, (e, t, n) => {
					const s = n.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? s.slice(0, e) : s
				}),
				j = Object(s.a)(E, C, (e, t) => {
					const n = t[0];
					if (n) return e[n]
				}),
				k = Object(s.a)(g, (e, t) => {
					let {
						related: n,
						streamIdFromPath: s,
						subreddit: r
					} = t;
					return C(e, {
						listingName: n || r,
						streamIdFromPath: s
					})
				}, (e, t) => {
					const n = new Set(e),
						s = t.filter(e => !n.has(e));
					if (s.length) return s[0]
				}),
				S = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n
				}, E, (e, t) => {
					let {
						related: n,
						streamIdFromPath: s,
						subreddit: r
					} = t;
					return C(e, {
						listingName: n || r,
						streamIdFromPath: s
					})
				}, h, (e, t, n, s) => {
					if (!n.length) return;
					const r = n.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = r.find(e => e.stream.state === a.a.IS_LIVE);
					if (o) return o.post.id;
					const i = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (s.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				w = Object(r.a)(Object(s.a)(S, E, (e, t) => e ? t[e] : void 0)),
				N = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? Object(o.g)(n) : void 0
				}, S, b, i.h, (e, t) => {
					let {
						related: n,
						streamIdFromPath: s,
						subreddit: r
					} = t;
					return C(e, {
						listingName: n || r,
						streamIdFromPath: s
					})
				}, (e, t, n, s, r) => !e || n.includes(e) || s.includes(e) ? t || r[0] : e),
				P = Object(s.a)(f, g, k, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				I = Object(s.a)(f, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				T = Object(r.a)(Object(s.a)(N, E, (e, t) => e ? t[e] : void 0)),
				L = Object(r.a)(Object(s.a)(P, E, (e, t) => e ? t[e] : void 0)),
				B = Object(r.a)(Object(s.a)(I, E, (e, t) => e ? t[e] : void 0)),
				R = (Object(r.a)(Object(s.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, E, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => ({
					...t[n],
					preloadedPreviewUrl: e[n]
				})))), Object(s.a)(N, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				A = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? _(e, n) : void 0
				}, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function D(e, t) {
				const n = {
					[a.a.NOT_STARTED]: 0,
					[a.a.PUBLISHED]: 1,
					[a.a.IS_LIVE]: 2,
					[a.a.DISCONNECTED]: 2,
					[a.a.ENDED]: 3,
					[a.a.KILLED]: 4,
					[a.a.PURGED]: 4
				};
				return n[t] >= n[e]
			}
			const M = Object(s.a)(N, h, (e, t) => e && t.timestamps[e] || 0);
			var F;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(F || (F = {}));
			const U = Object(s.a)(N, E, m.b, (e, t, n) => {
					if (n) return F.INTRO;
					const s = e && t[e];
					if (!s) return F.UNAVAILABLE;
					const r = s.stream.state;
					return r === a.a.IS_LIVE || r === a.a.DISCONNECTED ? F.LIVE : r === a.a.ENDED && s.stream.vod_accessible ? F.VOD : F.UNAVAILABLE
				}),
				W = Object(s.a)(T, U, m.b, c.b, c.o, (e, t, n, s, r) => n ? s : e ? t === F.LIVE || t === F.VOD ? e.stream.hls_url : r : void 0),
				H = Object(s.a)(T, U, M, (e, t, n) => e ? t === F.LIVE ? e.broadcast_time : t === F.VOD && n < e.broadcast_time ? n : 0 : 0),
				V = (e, t) => {
					const n = p(e);
					return !!n && n[t] && n[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				i = Object(s.a)(a, o.n, (e, t) => t && !e.isIntroFinished),
				c = Object(s.a)(a, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/meta.ts"),
				c = n("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(i.h)(e) && Object(o.f)(e),
					experimentName: s.mc
				}), a.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(i.h)(e) && Object(o.f)(e),
					experimentName: s.lc
				}), a.a),
				u = Object(c.a)(d, l, (e, t) => e || t),
				m = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: o.Q,
						experimentName: s.cd
					});
					return !(!t || Object(s.Xf)(t))
				},
				i = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.Q,
						experimentName: s.cd
					}) === s.Bd.ListingEnabled
				}
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const i = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Vb,
					experimentEligibilitySelector: a.e
				}), e => e === r.hb.Enabled),
				c = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Wb,
					experimentEligibilitySelector: a.e
				}), e => e === r.ib.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Xb,
					experimentEligibilitySelector: a.e
				}), e => e === r.jb.Enabled),
				l = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Yb,
					experimentEligibilitySelector: a.e
				}), e => e === r.kb.Enabled),
				u = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.ac,
					experimentEligibilitySelector: a.e
				}), e => e === r.mb.Enabled),
				m = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Zb,
					experimentEligibilitySelector: a.e
				}), e => e === r.lb.Enabled)
		},
		"./src/reddit/selectors/experiments/loggedOutOneFeed.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/countrySites.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts"),
				c = n("./src/reddit/selectors/experiments/utils.ts");
			const d = Object(s.a)(i.f, a.f, (e, t) => e && !t),
				l = e => Object(o.c)(e, {
					experimentEligibilitySelector: d,
					experimentName: r.dc
				}),
				u = e => !!Object(c.a)(l(e))
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(r.c)(e, {
				experimentName: s.re,
				experimentEligibilitySelector: r.a
			}) === s.Ae.Enabled
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/presence.ts"),
				i = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.s
					});
					return t === s.x.VoteCountOnly || t === s.x.CommentCountOnly || t === s.x.VoteAndCommentCount
				},
				l = e => {
					if (Object(i.c)(e) || Object(a.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.s
					});
					return t === s.x.VoteCountOnly || t === s.x.VoteAndCommentCount
				},
				u = e => {
					if (Object(i.c)(e) || Object(a.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.s
					});
					return t === s.x.CommentCountOnly || t === s.x.VoteAndCommentCount
				},
				m = (e, t) => {
					let {
						post: n
					} = t;
					return p(e, {
						postId: n.id
					})
				},
				p = (e, t) => {
					let {
						postId: n
					} = t;
					const r = e.posts.models[n];
					if (Object(i.c)(e) || !r || r.isSponsored || r.isScoreHidden || r.score >= c || Object(a.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: s.s
						}),
						l = null == d ? void 0 : d.variant;
					return l === s.x.VoteCountOnly || l === s.x.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const r = e.posts.models[n];
					if (Object(i.c)(e) || !r || r.isSponsored || r.numComments >= c || Object(a.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: s.s
						}),
						l = null == d ? void 0 : d.variant;
					return l === s.x.CommentCountOnly || l === s.x.VoteAndCommentCount
				},
				h = e => {
					if (Object(a.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.rc
					}) === s.Jc.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Me
				}) === s.xd
			}
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/meta.ts");
			const a = e => Object(r.c)(e, {
				experimentEligibilitySelector: e => !Object(o.d)(e) && "US" === Object(o.b)(e),
				experimentName: s.bf
			}) === s.if.Enabled
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/meta.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(s.a)(a.h, a.d, i.e, (e, t, n) => !e && !t && !n);

			function d(e, t) {
				return n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[r.Dc.Bottom_cell_dismissible]: e,
						[r.Dc.Bottom_cell_dismissible_immediate_trigger]: e,
						[r.Dc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(r.Eb, !0),
				u = d(r.Fb, !0),
				m = d(r.Gb, !0),
				p = d(r.Eb, !1),
				b = d(r.Fb, !1),
				h = d(r.Gb, !1)
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "d", (function() {
				return E
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(a.U)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(s.a)((e, t) => {
					const n = p(e, t);
					if (!n) return u;
					const s = Object(a.Y)(e, {
						subredditName: n.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(a.U)(e, {
						subredditId: n
					}) : null
				},
				b = (e, t, n, s, r) => {
					const a = r.find(e => e <= t) || -1,
						i = r.find(e => e > t) || 1 / 0;
					return t !== i && t !== a && (!(a + n > t) && (!(t + n > i) && !((e, t, n) => {
						const s = n[t - 1],
							r = n[t],
							a = r && Object(o.G)(e, {
								postId: s
							}) || null,
							i = r && Object(o.G)(e, {
								postId: r
							}) || null;
						return a && a.isSponsored || i && i.isSponsored
					})(e, t, s)))
				},
				h = [3],
				f = Object(s.a)((e, t) => {
					let {
						existingDUPositions: n,
						listingProps: s
					} = t;
					const r = n.slice().sort();
					let a = -1;
					const i = Object(o.z)(e, {
							listingKey: s.listingKey
						}),
						c = [];
					return h.forEach(t => {
						let n = a + t;
						if (!(n >= i.length)) {
							for (; n < i.length && !b(e, n, t, i, r);) n += 1;
							n < i.length && (c.push(n), a = n)
						}
					}), c
				}),
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				v = e => e.focusedVerticals.category,
				y = e => e.focusedVerticals.lastLoadedEnv,
				E = e => {
					const t = Object(i.P)(e),
						n = r.d.geoSubredditRecommendationDULoggedIn(e),
						s = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && s
				}
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/selectors/commentSelector.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(o.a)({
				features: {
					powerups: a.a
				}
			});
			const i = (e, t) => {
					let {
						subredditId: n
					} = t;
					var s;
					return n ? null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[n] : null
				},
				c = (e, t) => {
					let {
						subredditId: n
					} = t;
					var s, r;
					return n ? null === (r = null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[n]) || void 0 === r ? void 0 : r.flairsByType : null
				},
				d = (e, t) => {
					let {
						subredditId: n,
						userId: s
					} = t;
					var r, o;
					return n && s ? null === (o = null === (r = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === r ? void 0 : r[n]) || void 0 === o ? void 0 : o[s] : null
				},
				l = Object(s.a)(d, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				u = Object(s.a)([c, l], (e, t) => e && t ? e[t] : null),
				m = Object(s.a)(d, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(s.a)([c, m], (e, t) => e && t ? e[t] : null),
				b = Object(s.a)([i, d], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: s,
						flairsByType: r
					} = e, {
						supporterTypes: o,
						achievementTypes: a,
						preferredSupporterType: i,
						preferredAchievementType: c,
						pendingSupporterType: d,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: g(n, o, r, d || i),
						achievementFlairs: g(s, a, r, l || c)
					}
				}),
				h = Object(s.a)([d], e => !!e && e.isHidden),
				f = Object(s.a)([i, d, p], (e, t, n) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...s] : s
				}),
				g = (e, t, n, s) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				x = (e, t) => {
					let {
						commentId: n
					} = t;
					const s = Object(r.b)(e, {
							commentId: n
						}),
						o = null == s ? void 0 : s.subredditId,
						a = null == s ? void 0 : s.authorId;
					return !(!o || !a) && !!((e, t) => {
						let {
							subredditId: n,
							userId: s
						} = t;
						var r, o, a;
						return n && s ? null === (a = null === (o = null === (r = e.features.powerups) || void 0 === r ? void 0 : r.usersSupportedSubreddits) || void 0 === o ? void 0 : o[s]) || void 0 === a ? void 0 : a[n] : null
					})(e, {
						subredditId: o,
						userId: a
					})
				}
		},
		"./src/reddit/selectors/newPostPill.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/constants/postLayout.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = (e, t) => Object(a.P)(e) && ((e, t) => {
				const {
					layout: n,
					sort: a,
					listingKey: i
				} = t, c = (Object(o.z)(e, {
					listingKey: i
				}) || []).length;
				return n === r.g.Large && a !== s.W.NEW && c >= 20
			})(e, t) ? 10 : -1
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e.searchQueryId
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			const i = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: s.tf
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === s.Af.SmIcon || t === s.Af.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				u = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					const s = Object(a.Y)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => {
				let {
					listingKey: n
				} = t;
				return e.tracking.viewportDataLoaded[n]
			}
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const o = e => {
					if (a(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(r.a)(e)) || !!t
				},
				a = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Nb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				i = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${i}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === i && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(a, `${s.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(a, `${s.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const s = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(s), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(s)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					r.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c10a566d5f55"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit.e727608810e0b7d783d7.js.map