// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.d15b4aadf9cdec274843.js
// Retrieved at 8/9/2022, 6:30:12 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, r, t) {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.isPseudoLocale = r.isISOLocaleSupported = r.toISOLocale = r.isoLocaleToR2Language = void 0;
			const n = t("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = new Set([{
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
				a = {
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
				l = Object.keys(a).reduce((e, r) => (o.has(r) && (e[r] = a[r]), e), {}),
				s = Object.keys(l).reduce((e, r) => {
					const t = l[r];
					return t && t.forEach(t => {
						e[t] = r
					}), e
				}, {});
			r.isoLocaleToR2Language = e => s[e], r.toISOLocale = e => {
				if (!e) return;
				const r = e.match(/^([a-zA-Z]{2,4})(?:[-_]([a-zA-Z]{2,4}))?$/);
				if (!r) return;
				const t = r[1];
				if (!t) return;
				let n = t.toLowerCase();
				const o = r[2];
				return o && (n = `${n}-${o.toUpperCase()}`), n
			};
			const i = new Set(Object.keys(s));
			r.isISOLocaleSupported = e => !!e && i.has(e), r.isPseudoLocale = e => !!e && (e === n.PSEUDO_AUTO || Object.values(n.PseudoLocale).includes(e))
		},
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return x
			}));
			var n = t("./node_modules/react/index.js"),
				o = t.n(n),
				a = t("./node_modules/react-dom/index.js"),
				l = (t("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function s(e, r) {
				return Array.isArray(e) && Array.isArray(r) && e.length === r.length ? e.some((function(t, n) {
					return s(e[n], r[n])
				})) : e !== r
			}
			var i = new Map;

			function c(e) {
				void 0 === e && (e = {});
				for (var r, t = e.root || null, n = function(e) {
						var r = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!l.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							t = r[0],
							n = void 0 === t ? "0px" : t,
							o = r[1],
							a = void 0 === o ? n : o,
							s = r[2],
							i = void 0 === s ? n : s,
							c = r[3];
						return n + " " + a + " " + i + " " + (void 0 === c ? a : c)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], a = i.keys(); r = a.next().value;) {
					if (!(t !== r.root || n !== r.rootMargin || s(o, r.thresholds))) return r
				}
				return null
			}

			function d(e, r) {
				var t = i.get(e);
				if (t)
					for (var n, o = t.values(); n = o.next().value;)
						if (n.target === r.target) return n;
				return null
			}

			function u(e, r) {
				for (var t = 0; t < e.length; t++) {
					var n = d(r, e[t]);
					n && n.handleChange(e[t])
				}
			}

			function h(e) {
				return c(e) || new IntersectionObserver(u, e)
			}
			var p = t("./node_modules/invariant/browser.js"),
				b = t.n(p),
				f = {},
				v = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return f.errorReporter || function(e) {
								return b()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							f.errorReporter = e
						}
					}
				});

			function g(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function m(e, r, t) {
				return r in e ? Object.defineProperty(e, r, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[r] = t, e
			}
			var y = ["root", "rootMargin", "threshold"],
				_ = ["root", "rootMargin", "threshold", "disabled"],
				k = Object.prototype,
				j = k.hasOwnProperty,
				O = k.toString,
				N = function(e) {
					return y.reduce((function(r, t) {
						if (j.call(e, t)) {
							var n = "root" === t && "[object String]" === O.call(e[t]);
							r[t] = n ? document.querySelector(e[t]) : e[t]
						}
						return r
					}), {})
				},
				x = function(e) {
					var r, t;

					function n() {
						for (var r, t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
						return m(g(r = e.call.apply(e, [this].concat(n)) || this), "handleChange", (function(e) {
							r.props.onChange(e, r.externalUnobserve)
						})), m(g(r), "handleNode", (function(e) {
							var t = r.props.children;
							if (null != t) {
								var n = t.ref;
								n && ("function" == typeof n ? n(e) : "object" == typeof n && (n.current = e))
							}
							r.targetNode = e && Object(a.findDOMNode)(e)
						})), m(g(r), "observe", (function() {
							return null != r.props.children && !r.props.disabled && (r.targetNode ? (r.observer = h(N(r.props)), r.target = r.targetNode, e = g(r), i.has(e.observer) || i.set(e.observer, new Set), i.get(e.observer).add(e), e.observer.observe(e.target), !0) : (v.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), m(g(r), "unobserve", (function(e) {
							! function(e, r) {
								if (i.has(e.observer)) {
									var t = i.get(e.observer);
									t.delete(e) && (t.size > 0 ? e.observer.unobserve(r) : (e.observer.disconnect(), i.delete(e.observer)))
								}
							}(g(r), e)
						})), m(g(r), "externalUnobserve", (function() {
							r.unobserve(r.targetNode)
						})), r
					}
					t = e, (r = n).prototype = Object.create(t.prototype), r.prototype.constructor = r, r.__proto__ = t;
					var l = n.prototype;
					return l.getSnapshotBeforeUpdate = function(e) {
						var r = this;
						this.prevTargetNode = this.targetNode;
						var t = _.some((function(t) {
							return s(r.props[t], e[t])
						}));
						return t && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), t
					}, l.componentDidUpdate = function(e, r, t) {
						var n = !1;
						t || (n = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (t || n) && this.observe()
					}, l.componentDidMount = function() {
						this.observe()
					}, l.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, l.render = function() {
						var e = this.props.children;
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, n
				}(o.a.Component);
			m(x, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, r, t) {
			"use strict";
			var n = t("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function a() {}
			a.resetWarningCache = o, e.exports = function() {
				function e(e, r, t, o, a, l) {
					if (l !== n) {
						var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw s.name = "Invariant Violation", s
					}
				}

				function r() {
					return e
				}
				e.isRequired = e;
				var t = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: r,
					element: e,
					elementType: e,
					instanceOf: r,
					node: e,
					objectOf: r,
					oneOf: r,
					oneOfType: r,
					shape: r,
					exact: r,
					checkPropTypes: a,
					resetWarningCache: o
				};
				return t.PropTypes = t, t
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, r, t) {
			e.exports = t("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, r, t) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/deep-diff/index.js": function(e, r, t) {
			var n, o;
			o = function(e) {
				var r = ["N", "E", "A", "D"];

				function t(e, r) {
					e.super_ = r, e.prototype = Object.create(r.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})
				}

				function n(e, r) {
					Object.defineProperty(this, "kind", {
						value: e,
						enumerable: !0
					}), r && r.length && Object.defineProperty(this, "path", {
						value: r,
						enumerable: !0
					})
				}

				function o(e, r, t) {
					o.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
						value: r,
						enumerable: !0
					}), Object.defineProperty(this, "rhs", {
						value: t,
						enumerable: !0
					})
				}

				function a(e, r) {
					a.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
						value: r,
						enumerable: !0
					})
				}

				function l(e, r) {
					l.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
						value: r,
						enumerable: !0
					})
				}

				function s(e, r, t) {
					s.super_.call(this, "A", e), Object.defineProperty(this, "index", {
						value: r,
						enumerable: !0
					}), Object.defineProperty(this, "item", {
						value: t,
						enumerable: !0
					})
				}

				function i(e, r, t) {
					var n = e.slice((t || r) + 1 || e.length);
					return e.length = r < 0 ? e.length + r : r, e.push.apply(e, n), e
				}

				function c(e) {
					var r = typeof e;
					return "object" !== r ? r : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
				}

				function d(e) {
					var r = 0;
					if (0 === e.length) return r;
					for (var t = 0; t < e.length; t++) r = (r << 5) - r + e.charCodeAt(t), r &= r;
					return r
				}

				function u(e) {
					var r = 0,
						t = c(e);
					if ("array" === t) return e.forEach((function(e) {
						r += u(e)
					})), r + d("[type: array, hash: " + r + "]");
					if ("object" === t) {
						for (var n in e)
							if (e.hasOwnProperty(n)) {
								var o = "[ type: object, key: " + n + ", value hash: " + u(e[n]) + "]";
								r += d(o)
							} return r
					}
					return r + d("[ type: " + t + " ; value: " + e + "]")
				}

				function h(e, r, t, n, i, d, p, b) {
					t = t || [], p = p || [];
					var f = (i = i || []).slice(0);
					if (null != d) {
						if (n) {
							if ("function" == typeof n && n(f, d)) return;
							if ("object" == typeof n) {
								if (n.prefilter && n.prefilter(f, d)) return;
								if (n.normalize) {
									var v = n.normalize(f, d, e, r);
									v && (e = v[0], r = v[1])
								}
							}
						}
						f.push(d)
					}
					"regexp" === c(e) && "regexp" === c(r) && (e = e.toString(), r = r.toString());
					var g, m, y, _, k = typeof e,
						j = typeof r,
						O = "undefined" !== k || p && p.length > 0 && p[p.length - 1].lhs && Object.getOwnPropertyDescriptor(p[p.length - 1].lhs, d),
						N = "undefined" !== j || p && p.length > 0 && p[p.length - 1].rhs && Object.getOwnPropertyDescriptor(p[p.length - 1].rhs, d);
					if (!O && N) t.push(new a(f, r));
					else if (!N && O) t.push(new l(f, e));
					else if (c(e) !== c(r)) t.push(new o(f, e, r));
					else if ("date" === c(e) && e - r != 0) t.push(new o(f, e, r));
					else if ("object" === k && null !== e && null !== r) {
						for (g = p.length - 1; g > -1; --g)
							if (p[g].lhs === e) {
								_ = !0;
								break
							} if (_) e !== r && t.push(new o(f, e, r));
						else {
							if (p.push({
									lhs: e,
									rhs: r
								}), Array.isArray(e)) {
								for (b && (e.sort((function(e, r) {
										return u(e) - u(r)
									})), r.sort((function(e, r) {
										return u(e) - u(r)
									}))), g = r.length - 1, m = e.length - 1; g > m;) t.push(new s(f, g, new a(void 0, r[g--])));
								for (; m > g;) t.push(new s(f, m, new l(void 0, e[m--])));
								for (; g >= 0; --g) h(e[g], r[g], t, n, f, g, p, b)
							} else {
								var x = Object.keys(e),
									w = Object.keys(r);
								for (g = 0; g < x.length; ++g) y = x[g], (_ = w.indexOf(y)) >= 0 ? (h(e[y], r[y], t, n, f, y, p, b), w[_] = null) : h(e[y], void 0, t, n, f, y, p, b);
								for (g = 0; g < w.length; ++g)(y = w[g]) && h(void 0, r[y], t, n, f, y, p, b)
							}
							p.length = p.length - 1
						}
					} else e !== r && ("number" === k && isNaN(e) && isNaN(r) || t.push(new o(f, e, r)))
				}

				function p(e, r, t, n, o) {
					var a = [];
					if (h(e, r, a, n, null, null, null, o), t)
						for (var l = 0; l < a.length; ++l) t(a[l]);
					return a
				}

				function b(e, r, t, n) {
					var o = p(e, r, n ? function(e) {
						e && n.push(e)
					} : void 0, t);
					return n || (o.length ? o : void 0)
				}

				function f(e, t, n) {
					if (void 0 === n && t && ~r.indexOf(t.kind) && (n = t), e && n && n.kind) {
						for (var o = e, a = -1, l = n.path ? n.path.length - 1 : 0; ++a < l;) void 0 === o[n.path[a]] && (o[n.path[a]] = void 0 !== n.path[a + 1] && "number" == typeof n.path[a + 1] ? [] : {}), o = o[n.path[a]];
						switch (n.kind) {
							case "A":
								n.path && void 0 === o[n.path[a]] && (o[n.path[a]] = []),
									function e(r, t, n) {
										if (n.path && n.path.length) {
											var o, a = r[t],
												l = n.path.length - 1;
											for (o = 0; o < l; o++) a = a[n.path[o]];
											switch (n.kind) {
												case "A":
													e(a[n.path[o]], n.index, n.item);
													break;
												case "D":
													delete a[n.path[o]];
													break;
												case "E":
												case "N":
													a[n.path[o]] = n.rhs
											}
										} else switch (n.kind) {
											case "A":
												e(r[t], n.index, n.item);
												break;
											case "D":
												r = i(r, t);
												break;
											case "E":
											case "N":
												r[t] = n.rhs
										}
										return r
									}(n.path ? o[n.path[a]] : o, n.index, n.item);
								break;
							case "D":
								delete o[n.path[a]];
								break;
							case "E":
							case "N":
								o[n.path[a]] = n.rhs
						}
					}
				}
				return t(o, n), t(a, n), t(l, n), t(s, n), Object.defineProperties(b, {
					diff: {
						value: b,
						enumerable: !0
					},
					orderIndependentDiff: {
						value: function(e, r, t, n) {
							var o = n ? function(e) {
									e && n.push(e)
								} : void 0,
								a = p(e, r, o, t, !0);
							return n || (a.length ? a : void 0)
						},
						enumerable: !0
					},
					observableDiff: {
						value: p,
						enumerable: !0
					},
					orderIndependentObservableDiff: {
						value: function(e, r, t, n, o, a, l) {
							return h(e, r, t, n, o, a, l, !0)
						},
						enumerable: !0
					},
					orderIndepHash: {
						value: u,
						enumerable: !0
					},
					applyDiff: {
						value: function(e, r, t) {
							e && r && p(e, r, (function(n) {
								t && !t(e, r, n) || f(e, r, n)
							}))
						},
						enumerable: !0
					},
					applyChange: {
						value: f,
						enumerable: !0
					},
					revertChange: {
						value: function(e, r, t) {
							if (e && r && t && t.kind) {
								var n, o, a = e;
								for (o = t.path.length - 1, n = 0; n < o; n++) void 0 === a[t.path[n]] && (a[t.path[n]] = {}), a = a[t.path[n]];
								switch (t.kind) {
									case "A":
										! function e(r, t, n) {
											if (n.path && n.path.length) {
												var o, a = r[t],
													l = n.path.length - 1;
												for (o = 0; o < l; o++) a = a[n.path[o]];
												switch (n.kind) {
													case "A":
														e(a[n.path[o]], n.index, n.item);
														break;
													case "D":
													case "E":
														a[n.path[o]] = n.lhs;
														break;
													case "N":
														delete a[n.path[o]]
												}
											} else switch (n.kind) {
												case "A":
													e(r[t], n.index, n.item);
													break;
												case "D":
												case "E":
													r[t] = n.lhs;
													break;
												case "N":
													r = i(r, t)
											}
											return r
										}(a[t.path[n]], t.index, t.item);
										break;
									case "D":
									case "E":
										a[t.path[n]] = t.lhs;
										break;
									case "N":
										delete a[t.path[n]]
								}
							}
						},
						enumerable: !0
					},
					isConflict: {
						value: function() {
							return "undefined" != typeof $conflict
						},
						enumerable: !0
					}
				}), b.DeepDiff = b, e && (e.DeepDiff = b), b
			}(this), void 0 === (n = function() {
				return o
			}.call(r, t, r, e)) || (e.exports = n)
		},
		"./node_modules/lodash/findLastIndex.js": function(e, r, t) {
			var n = t("./node_modules/lodash/_baseFindIndex.js"),
				o = t("./node_modules/lodash/_baseIteratee.js"),
				a = t("./node_modules/lodash/toInteger.js"),
				l = Math.max,
				s = Math.min;
			e.exports = function(e, r, t) {
				var i = null == e ? 0 : e.length;
				if (!i) return -1;
				var c = i - 1;
				return void 0 !== t && (c = a(t), c = t < 0 ? l(i + c, 0) : s(c, i - 1)), n(e, o(r, 3), c, !0)
			}
		},
		"./node_modules/lodash/uniqWith.js": function(e, r, t) {
			var n = t("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, r) {
				return r = "function" == typeof r ? r : void 0, e && e.length ? n(e, void 0, r) : []
			}
		},
		"./node_modules/lodash/xor.js": function(e, r, t) {
			var n = t("./node_modules/lodash/_arrayFilter.js"),
				o = t("./node_modules/lodash/_baseRest.js"),
				a = t("./node_modules/lodash/_baseXor.js"),
				l = t("./node_modules/lodash/isArrayLikeObject.js"),
				s = o((function(e) {
					return a(n(e, l))
				}));
			e.exports = s
		},
		"./node_modules/uuid/index.js": function(e, r, t) {
			var n = t("./node_modules/uuid/v1.js"),
				o = t("./node_modules/uuid/v4.js"),
				a = o;
			a.v1 = n, a.v4 = o, e.exports = a
		},
		"./node_modules/uuid/v1.js": function(e, r, t) {
			var n, o, a = t("./node_modules/uuid/lib/rng-browser.js"),
				l = t("./node_modules/uuid/lib/bytesToUuid.js"),
				s = 0,
				i = 0;
			e.exports = function(e, r, t) {
				var c = r && t || 0,
					d = r || [],
					u = (e = e || {}).node || n,
					h = void 0 !== e.clockseq ? e.clockseq : o;
				if (null == u || null == h) {
					var p = a();
					null == u && (u = n = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]), null == h && (h = o = 16383 & (p[6] << 8 | p[7]))
				}
				var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : i + 1,
					v = b - s + (f - i) / 1e4;
				if (v < 0 && void 0 === e.clockseq && (h = h + 1 & 16383), (v < 0 || b > s) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				s = b, i = f, o = h;
				var g = (1e4 * (268435455 & (b += 122192928e5)) + f) % 4294967296;
				d[c++] = g >>> 24 & 255, d[c++] = g >>> 16 & 255, d[c++] = g >>> 8 & 255, d[c++] = 255 & g;
				var m = b / 4294967296 * 1e4 & 268435455;
				d[c++] = m >>> 8 & 255, d[c++] = 255 & m, d[c++] = m >>> 24 & 15 | 16, d[c++] = m >>> 16 & 255, d[c++] = h >>> 8 | 128, d[c++] = 255 & h;
				for (var y = 0; y < 6; ++y) d[c + y] = u[y];
				return r || l(d)
			}
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "BlankPost", (function() {
				return d
			}));
			var n = t("./node_modules/react/index.js"),
				o = t.n(n),
				a = t("./src/reddit/components/AdViewability/index.tsx"),
				l = t("./src/reddit/connectors/PostViewable/index.ts"),
				s = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/contexts/Post/index.tsx");
			const c = Object(l.a)(null),
				d = e => {
					let {
						className: r,
						post: t
					} = e;
					return t.isSponsored ? o.a.createElement(a.a, {
						post: t,
						trackDisplay: !0
					}, o.a.createElement("div", {
						className: Object(s.a)(r, `Blank ${t.id}`)
					})) : null
				};
			r.default = Object(i.b)(c(d))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.d15b4aadf9cdec274843.js.map