// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.1887c982962702d15631.js
// Retrieved at 6/21/2023, 6:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, t, s) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isPseudoLocale = t.isISOLocaleSupported = t.toISOLocale = t.isoLocaleToR2Language = void 0;
			const r = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
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
				i = {
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
				n = Object.keys(i).reduce((e, t) => (o.has(t) && (e[t] = i[t]), e), {}),
				a = Object.keys(n).reduce((e, t) => {
					const s = n[t];
					return s && s.forEach(s => {
						e[s] = t
					}), e
				}, {});
			t.isoLocaleToR2Language = e => a[e], t.toISOLocale = e => {
				if (!e) return;
				const t = e.match(/^([a-zA-Z]{2,4})(?:[-_]([a-zA-Z]{2,4}))?$/);
				if (!t) return;
				const s = t[1];
				if (!s) return;
				let r = s.toLowerCase();
				const o = t[2];
				return o && (r = `${r}-${o.toUpperCase()}`), r
			};
			const d = new Set(Object.keys(a));
			t.isISOLocaleSupported = e => !!e && d.has(e), t.isPseudoLocale = e => !!e && (e === r.PSEUDO_AUTO || Object.values(r.PseudoLocale).includes(e))
		},
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return T
			}));
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-dom/index.js"),
				n = (s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(s, r) {
					return a(e[r], t[r])
				})) : e !== t
			}
			var d = new Map;

			function c(e) {
				void 0 === e && (e = {});
				for (var t, s = e.root || null, r = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!n.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							s = t[0],
							r = void 0 === s ? "0px" : s,
							o = t[1],
							i = void 0 === o ? r : o,
							a = t[2],
							d = void 0 === a ? r : a,
							c = t[3];
						return r + " " + i + " " + d + " " + (void 0 === c ? i : c)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], i = d.keys(); t = i.next().value;) {
					if (!(s !== t.root || r !== t.rootMargin || a(o, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var s = d.get(e);
				if (s)
					for (var r, o = s.values(); r = o.next().value;)
						if (r.target === t.target) return r;
				return null
			}

			function u(e, t) {
				for (var s = 0; s < e.length; s++) {
					var r = l(t, e[s]);
					r && r.handleChange(e[s])
				}
			}

			function p(e) {
				return c(e) || new IntersectionObserver(u, e)
			}
			var b = s("./node_modules/invariant/browser.js"),
				m = s.n(b),
				h = {},
				f = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return h.errorReporter || function(e) {
								return m()(!1, e)
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

			function v(e, t, s) {
				return t in e ? Object.defineProperty(e, t, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = s, e
			}
			var y = ["root", "rootMargin", "threshold"],
				O = ["root", "rootMargin", "threshold", "disabled"],
				P = Object.prototype,
				_ = P.hasOwnProperty,
				j = P.toString,
				E = function(e) {
					return y.reduce((function(t, s) {
						if (_.call(e, s)) {
							var r = "root" === s && "[object String]" === j.call(e[s]);
							t[s] = r ? document.querySelector(e[s]) : e[s]
						}
						return t
					}), {})
				},
				T = function(e) {
					var t, s;

					function r() {
						for (var t, s = arguments.length, r = new Array(s), o = 0; o < s; o++) r[o] = arguments[o];
						return v(g(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), v(g(t), "handleNode", (function(e) {
							var s = t.props.children;
							if (null != s) {
								var r = s.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(i.findDOMNode)(e)
						})), v(g(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(E(t.props)), t.target = t.targetNode, e = g(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (f.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), v(g(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var s = d.get(e.observer);
									s.delete(e) && (s.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(g(t), e)
						})), v(g(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					s = e, (t = r).prototype = Object.create(s.prototype), t.prototype.constructor = t, t.__proto__ = s;
					var n = r.prototype;
					return n.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var s = O.some((function(s) {
							return a(t.props[s], e[s])
						}));
						return s && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), s
					}, n.componentDidUpdate = function(e, t, s) {
						var r = !1;
						s || (r = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (s || r) && this.observe()
					}, n.componentDidMount = function() {
						this.observe()
					}, n.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, n.render = function() {
						var e = this.props.children;
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(o.a.Component);
			v(T, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function i() {}
			i.resetWarningCache = o, e.exports = function() {
				function e(e, t, s, o, i, n) {
					if (n !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var s = {
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
					checkPropTypes: i,
					resetWarningCache: o
				};
				return s.PropTypes = s, s
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, s) {
			e.exports = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, s) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/deep-diff/index.js": function(e, t, s) {
			var r, o;
			o = function(e) {
				var t = ["N", "E", "A", "D"];

				function s(e, t) {
					e.super_ = t, e.prototype = Object.create(t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})
				}

				function r(e, t) {
					Object.defineProperty(this, "kind", {
						value: e,
						enumerable: !0
					}), t && t.length && Object.defineProperty(this, "path", {
						value: t,
						enumerable: !0
					})
				}

				function o(e, t, s) {
					o.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
						value: t,
						enumerable: !0
					}), Object.defineProperty(this, "rhs", {
						value: s,
						enumerable: !0
					})
				}

				function i(e, t) {
					i.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
						value: t,
						enumerable: !0
					})
				}

				function n(e, t) {
					n.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
						value: t,
						enumerable: !0
					})
				}

				function a(e, t, s) {
					a.super_.call(this, "A", e), Object.defineProperty(this, "index", {
						value: t,
						enumerable: !0
					}), Object.defineProperty(this, "item", {
						value: s,
						enumerable: !0
					})
				}

				function d(e, t, s) {
					var r = e.slice((s || t) + 1 || e.length);
					return e.length = t < 0 ? e.length + t : t, e.push.apply(e, r), e
				}

				function c(e) {
					var t = typeof e;
					return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
				}

				function l(e) {
					var t = 0;
					if (0 === e.length) return t;
					for (var s = 0; s < e.length; s++) t = (t << 5) - t + e.charCodeAt(s), t &= t;
					return t
				}

				function u(e) {
					var t = 0,
						s = c(e);
					if ("array" === s) return e.forEach((function(e) {
						t += u(e)
					})), t + l("[type: array, hash: " + t + "]");
					if ("object" === s) {
						for (var r in e)
							if (e.hasOwnProperty(r)) {
								var o = "[ type: object, key: " + r + ", value hash: " + u(e[r]) + "]";
								t += l(o)
							} return t
					}
					return t + l("[ type: " + s + " ; value: " + e + "]")
				}

				function p(e, t, s, r, d, l, b, m) {
					s = s || [], b = b || [];
					var h = (d = d || []).slice(0);
					if (null != l) {
						if (r) {
							if ("function" == typeof r && r(h, l)) return;
							if ("object" == typeof r) {
								if (r.prefilter && r.prefilter(h, l)) return;
								if (r.normalize) {
									var f = r.normalize(h, l, e, t);
									f && (e = f[0], t = f[1])
								}
							}
						}
						h.push(l)
					}
					"regexp" === c(e) && "regexp" === c(t) && (e = e.toString(), t = t.toString());
					var g, v, y, O, P = typeof e,
						_ = typeof t,
						j = "undefined" !== P || b && b.length > 0 && b[b.length - 1].lhs && Object.getOwnPropertyDescriptor(b[b.length - 1].lhs, l),
						E = "undefined" !== _ || b && b.length > 0 && b[b.length - 1].rhs && Object.getOwnPropertyDescriptor(b[b.length - 1].rhs, l);
					if (!j && E) s.push(new i(h, t));
					else if (!E && j) s.push(new n(h, e));
					else if (c(e) !== c(t)) s.push(new o(h, e, t));
					else if ("date" === c(e) && e - t != 0) s.push(new o(h, e, t));
					else if ("object" === P && null !== e && null !== t) {
						for (g = b.length - 1; g > -1; --g)
							if (b[g].lhs === e) {
								O = !0;
								break
							} if (O) e !== t && s.push(new o(h, e, t));
						else {
							if (b.push({
									lhs: e,
									rhs: t
								}), Array.isArray(e)) {
								for (m && (e.sort((function(e, t) {
										return u(e) - u(t)
									})), t.sort((function(e, t) {
										return u(e) - u(t)
									}))), g = t.length - 1, v = e.length - 1; g > v;) s.push(new a(h, g, new i(void 0, t[g--])));
								for (; v > g;) s.push(new a(h, v, new n(void 0, e[v--])));
								for (; g >= 0; --g) p(e[g], t[g], s, r, h, g, b, m)
							} else {
								var T = Object.keys(e),
									w = Object.keys(t);
								for (g = 0; g < T.length; ++g) y = T[g], (O = w.indexOf(y)) >= 0 ? (p(e[y], t[y], s, r, h, y, b, m), w[O] = null) : p(e[y], void 0, s, r, h, y, b, m);
								for (g = 0; g < w.length; ++g)(y = w[g]) && p(void 0, t[y], s, r, h, y, b, m)
							}
							b.length = b.length - 1
						}
					} else e !== t && ("number" === P && isNaN(e) && isNaN(t) || s.push(new o(h, e, t)))
				}

				function b(e, t, s, r, o) {
					var i = [];
					if (p(e, t, i, r, null, null, null, o), s)
						for (var n = 0; n < i.length; ++n) s(i[n]);
					return i
				}

				function m(e, t, s, r) {
					var o = b(e, t, r ? function(e) {
						e && r.push(e)
					} : void 0, s);
					return r || (o.length ? o : void 0)
				}

				function h(e, s, r) {
					if (void 0 === r && s && ~t.indexOf(s.kind) && (r = s), e && r && r.kind) {
						for (var o = e, i = -1, n = r.path ? r.path.length - 1 : 0; ++i < n;) void 0 === o[r.path[i]] && (o[r.path[i]] = void 0 !== r.path[i + 1] && "number" == typeof r.path[i + 1] ? [] : {}), o = o[r.path[i]];
						switch (r.kind) {
							case "A":
								r.path && void 0 === o[r.path[i]] && (o[r.path[i]] = []),
									function e(t, s, r) {
										if (r.path && r.path.length) {
											var o, i = t[s],
												n = r.path.length - 1;
											for (o = 0; o < n; o++) i = i[r.path[o]];
											switch (r.kind) {
												case "A":
													e(i[r.path[o]], r.index, r.item);
													break;
												case "D":
													delete i[r.path[o]];
													break;
												case "E":
												case "N":
													i[r.path[o]] = r.rhs
											}
										} else switch (r.kind) {
											case "A":
												e(t[s], r.index, r.item);
												break;
											case "D":
												t = d(t, s);
												break;
											case "E":
											case "N":
												t[s] = r.rhs
										}
										return t
									}(r.path ? o[r.path[i]] : o, r.index, r.item);
								break;
							case "D":
								delete o[r.path[i]];
								break;
							case "E":
							case "N":
								o[r.path[i]] = r.rhs
						}
					}
				}
				return s(o, r), s(i, r), s(n, r), s(a, r), Object.defineProperties(m, {
					diff: {
						value: m,
						enumerable: !0
					},
					orderIndependentDiff: {
						value: function(e, t, s, r) {
							var o = r ? function(e) {
									e && r.push(e)
								} : void 0,
								i = b(e, t, o, s, !0);
							return r || (i.length ? i : void 0)
						},
						enumerable: !0
					},
					observableDiff: {
						value: b,
						enumerable: !0
					},
					orderIndependentObservableDiff: {
						value: function(e, t, s, r, o, i, n) {
							return p(e, t, s, r, o, i, n, !0)
						},
						enumerable: !0
					},
					orderIndepHash: {
						value: u,
						enumerable: !0
					},
					applyDiff: {
						value: function(e, t, s) {
							e && t && b(e, t, (function(r) {
								s && !s(e, t, r) || h(e, t, r)
							}))
						},
						enumerable: !0
					},
					applyChange: {
						value: h,
						enumerable: !0
					},
					revertChange: {
						value: function(e, t, s) {
							if (e && t && s && s.kind) {
								var r, o, i = e;
								for (o = s.path.length - 1, r = 0; r < o; r++) void 0 === i[s.path[r]] && (i[s.path[r]] = {}), i = i[s.path[r]];
								switch (s.kind) {
									case "A":
										! function e(t, s, r) {
											if (r.path && r.path.length) {
												var o, i = t[s],
													n = r.path.length - 1;
												for (o = 0; o < n; o++) i = i[r.path[o]];
												switch (r.kind) {
													case "A":
														e(i[r.path[o]], r.index, r.item);
														break;
													case "D":
													case "E":
														i[r.path[o]] = r.lhs;
														break;
													case "N":
														delete i[r.path[o]]
												}
											} else switch (r.kind) {
												case "A":
													e(t[s], r.index, r.item);
													break;
												case "D":
												case "E":
													t[s] = r.lhs;
													break;
												case "N":
													t = d(t, s)
											}
											return t
										}(i[s.path[r]], s.index, s.item);
										break;
									case "D":
									case "E":
										i[s.path[r]] = s.lhs;
										break;
									case "N":
										delete i[s.path[r]]
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
				}), m.DeepDiff = m, e && (e.DeepDiff = m), m
			}(this), void 0 === (r = function() {
				return o
			}.call(t, s, t, e)) || (e.exports = r)
		},
		"./node_modules/lodash/findLastIndex.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseFindIndex.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/toInteger.js"),
				n = Math.max,
				a = Math.min;
			e.exports = function(e, t, s) {
				var d = null == e ? 0 : e.length;
				if (!d) return -1;
				var c = d - 1;
				return void 0 !== s && (c = i(s), c = s < 0 ? n(d + c, 0) : a(c, d - 1)), r(e, o(t, 3), c, !0)
			}
		},
		"./node_modules/lodash/uniqWith.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, t) {
				return t = "function" == typeof t ? t : void 0, e && e.length ? r(e, void 0, t) : []
			}
		},
		"./node_modules/lodash/xor.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_arrayFilter.js"),
				o = s("./node_modules/lodash/_baseRest.js"),
				i = s("./node_modules/lodash/_baseXor.js"),
				n = s("./node_modules/lodash/isArrayLikeObject.js"),
				a = o((function(e) {
					return i(r(e, n))
				}));
			e.exports = a
		},
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(r.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/brcast/dist/brcast.es.js");
			const o = () => "undefined" != typeof document,
				i = () => o() && "visible" === document.visibilityState,
				n = () => ({
					documentInFocus: i()
				}),
				{
					subscribe: a,
					unsubscribe: d,
					setState: c
				} = Object(r.a)(n()),
				l = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				u = () => c(n());
			(() => {
				const e = (() => {
					if (!o()) return;
					const e = Object.keys(l).find(e => e in document);
					return e ? l[e] : void 0
				})();
				e && document.addEventListener(e, u)
			})(), t.a = {
				isDocumentHidden: () => !i(),
				isDocumentVisible: i,
				subscribe: a,
				unsubscribe: d
			}
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/profile/index.ts"),
				i = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				n = s("./src/reddit/selectors/user.ts");
			const a = "MOD_PERMS__REQUEST_LOADED",
				d = (Object(r.a)("MOD_PERMS__REQUEST_PENDING"), Object(r.a)(a), Object(r.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(n.m)(t());
					if (s) {
						const t = Object(i.e)(s);
						await e(Object(o.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			const r = "PAGE__MULTIREDDIT_FEED_PENDING",
				o = "PAGE__MULTIREDDIT_FEED_LOADED",
				i = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return re
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return oe
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return ie
			})), s.d(t, "profilePostsPending", (function() {
				return ne
			})), s.d(t, "profilePostsLoaded", (function() {
				return ae
			})), s.d(t, "profilePostsFailed", (function() {
				return de
			})), s.d(t, "profilePostsRequested", (function() {
				return ce
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return le
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return ue
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return pe
			})), s.d(t, "morePostsPending", (function() {
				return be
			})), s.d(t, "morePostsLoaded", (function() {
				return me
			})), s.d(t, "morePostsFailed", (function() {
				return he
			})), s.d(t, "morePostsRequested", (function() {
				return fe
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/lib/safeGet/index.ts"),
				d = s("./src/reddit/actions/contentGate.ts"),
				c = s("./src/reddit/actions/externalAccount.ts"),
				l = s("./src/reddit/actions/moderatingSubreddits.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				p = s("./src/reddit/actions/pinnedPost.ts"),
				b = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/actions/profile/index.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				f = s("./src/reddit/constants/errors.ts"),
				g = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/lib/makeGqlRequest/index.ts"),
				O = s("./src/redditGQL/operations/ProfileFeed.json"),
				P = s("./src/redditGQL/types.ts");
			const _ = async (e, t) => await Object(y.a)(e, {
				...O,
				variables: t
			}), j = (e, t) => {
				if (!e) return;
				const s = e.toUpperCase();
				return t.includes(s) ? s : void 0
			}, E = e => {
				let {
					username: t,
					profileSort: s,
					filter: r,
					timeSort: o,
					loadMoreData: i,
					shouldUseGqlCursor: n
				} = e;
				const a = {
					username: t,
					sort: j(s, Object.values(P.M)),
					range: j(o, Object.values(P.L)),
					filter: r
				};
				if (i) {
					const {
						token: e
					} = i;
					a.after = n ? e : btoa(e)
				}
				return a
			};
			var T = s("./src/config.ts"),
				w = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				S = s("./src/lib/constants/index.ts"),
				C = s("./src/lib/makeApiRequest/index.ts"),
				I = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				D = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const x = (e, t, s) => Object(C.a)(e, {
				data: s,
				endpoint: Object(I.a)(Object(w.a)(Object(D.a)(`${T.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: S.ob.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var A = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				R = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				N = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				M = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				F = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				L = s("./src/reddit/models/Post/index.ts");
			const V = (e, t) => {
				if (!Object(L.l)(t) && !Object(L.n)(t)) return null;
				if (e.posts[t.id]) return t.id;
				const s = Object(N.f)(t),
					{
						id: r
					} = s;
				e.posts[r] = s;
				const {
					crosspostRoot: o
				} = t;
				o && o.type === L.a.Post && o.postInfo && V(e, o.postInfo);
				const {
					authorFlair: i
				} = t;
				if (i) {
					const t = s.belongsTo.id;
					e.authorFlair[t] || (e.authorFlair[t] = {}), e.authorFlair[t][s.author] = Object(k.a)(i)[0]
				}
				if (Object(L.l)(t)) {
					const {
						profile: s
					} = t;
					e.profiles[s.id] || (e.profiles[s.id] = Object(M.a)(s))
				} else if (Object(L.n)(t)) {
					const {
						subreddit: s
					} = t;
					e.subreddits[s.id] || (e.subreddits[s.id] = Object(F.a)(s)), e.postFlair[s.id] || (e.postFlair[s.id] = Object(R.a)(s))
				}
				return r
			};
			var U = s("./src/reddit/models/Comment/index.ts"),
				G = (e, t) => {
					var s, r, o;
					const i = {
							authorFlair: {},
							pinned: [],
							postIds: [],
							posts: {},
							postFlair: {},
							profiles: {},
							subreddits: {},
							token: ""
						},
						n = null === (s = null == e ? void 0 : e.redditorInfoByName) || void 0 === s ? void 0 : s.elements;
					if (!n) return i;
					const {
						edges: a
					} = n;
					for (const {
							node: c
						} of a) {
						if (!c || c.__typename === U.d.Comment) continue;
						const e = V(i, c);
						e && i.postIds.push(e)
					}
					const d = null === (o = null === (r = null == e ? void 0 : e.redditorInfoByName) || void 0 === r ? void 0 : r.profile) || void 0 === o ? void 0 : o.stickyPosts;
					if (d && (i.pinned = d.map(e => e.id)), t) i.token = n.pageInfo.endCursor || "";
					else {
						const {
							postIds: e
						} = i, t = e[e.length - 1];
						t && (i.token = t)
					}
					return i
				},
				q = s("./node_modules/@sentry/minimal/esm/index.js"),
				B = s("./node_modules/deep-diff/index.js"),
				z = s("./src/lib/env/index.ts");
			const $ = new Set(["authorFlair.cssClass", "posts.adSupplementaryText", "posts.allAwardings", "posts.approvedAtUTC", "posts.approvedBy", "posts.attributionInfo", "posts.audioRoom", "posts.bannedAtUTC", "posts.bannedBy", "posts.collapsedBecauseCrowdControl", "posts.ignoreReports", "posts.isApproved", "posts.isAuthorPremium", "posts.isEligibleForLinkedPosts", "posts.isEligibleForQASchema", "posts.isFollowed", "posts.isPinned", "posts.isReactAllowed", "posts.isRemoved", "posts.isSpam", "posts.lastAuthorModNote", "posts.modQueueTriggers", "posts.modReportsDismissed", "posts.pollData", "posts.predictionTournament", "posts.previewComments", "posts.modReports", "posts.numReports", "posts.reactedFrom", "posts.removedBy", "posts.removedByCategory", "posts.topAwardedType", "posts.userReports", "posts.userReportsDismissed", "posts.modReasonBy", "subreddits.answerableQuestions", "subreddits.freeFormReports", "subreddits.isSubscribed", "authorFlair.richtext", "authorFlair.text", "posts.collectionIds", "posts.liveCommentsWebsocket", "posts.thumbnail.url", "posts.discussionType", "posts.eventsOnRender", "posts.flair", "posts.gildings", "posts.media", "posts.goldCount", "posts.sendReplies", "posts.score", "posts.sendReplies", "posts.source.url", "posts.source.outboundUrl", "posts.source.outboundUrlCreated", "posts.source.outboundUrlExpiration", "profiles.acceptFollowers", "profiles.communityIcon", "profiles.icon.url", "posts.upvoteRatio", "subreddits.acceptFollowers", "subreddits.allowChatPostCreation", "subreddits.communityIcon", "subreddits.icon.url", "subreddits.isChatPostFeatureEnabled", "subreddits.primaryColor", "subreddits.subscribers"]),
				H = (e, t) => {
					const s = {},
						r = {};
					Object.keys(e).forEach(o => {
						const i = e[o] || {},
							n = t[o] || {};
						s[o] = {}, r[o] = 0, Object.keys(i).forEach(e => {
							const t = i[e],
								a = n[e],
								d = Object(B.diff)(t, a, {
									prefilter: (e, t) => $.has(`${o}.${e.length?`${e.join(".")}.`:""}${t}`) || $.has(`${o}.${t}`),
									normalize: (e, t, s, r) => s || r ? [s, r] : [s, s]
								});
							r[o] = d ? r[o] + d.length : (null == r ? void 0 : r[o]) || 0, d && (s[o][e] = {
								gatewayThing: t,
								gqlThing: a,
								diffResult: d
							})
						})
					});
					const o = Object.keys(r).reduce((e, t) => e += r[t], 0);
					return {
						allDiffs: s,
						issueCounts: r,
						totalIssues: o
					}
				};

			function W(e) {
				let {
					gatewayResponse: t,
					normalizedGqlResponse: s,
					rawGqlResponse: r
				} = e;
				if (Object(z.a)()) {
					console.group("GQL Profiles Shadowtest"), console.groupCollapsed("raw gql response"), console.log(r), console.groupEnd(), console.groupCollapsed("normalized gql response"), console.log(s), console.groupEnd(), console.groupCollapsed("gateway response"), console.log(t), console.groupEnd();
					const {
						allDiffs: e,
						issueCounts: o,
						totalIssues: i
					} = H(t, s);
					console.groupCollapsed(`diff: ${i} issues`), console.log("lhs = gateway\nrhs = gql");
					for (const t in e) {
						if (console.groupCollapsed(`${t}: ${o[t]} issues`), o[t] > 0)
							for (const s in e[t]) {
								const r = e[t][s].diffResult;
								console.groupCollapsed(`${s}: ${r.length||0} issues`), console.log(r), console.log({
									gql: e[t][s].gqlThing,
									gateway: e[t][s].gatewayThing
								}), console.groupEnd()
							}
						console.groupEnd()
					}
					console.groupEnd()
				}
				if (Object(z.b)()) {
					const {
						allDiffs: e,
						issueCounts: r,
						totalIssues: o
					} = H(t, s);
					if (o <= 0) return;
					q.l(t => {
						t.setExtra("info", {
							allDiffs: e,
							issueCounts: r,
							totalIssues: o
						}), t.setExtra("bypassSampling", !0), q.d("GQL Profiles Shadowtest Diff")
					})
				}
			}
			var Q = s("./src/reddit/helpers/post/index.ts"),
				K = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				X = s("./src/reddit/models/User/index.ts"),
				Y = s("./src/reddit/constants/experiments.ts"),
				J = s("./src/reddit/helpers/chooseVariant/index.ts");
			const Z = e => {
					return Object(J.c)(e, {
						experimentEligibilitySelector: J.a,
						experimentName: Y.Cc
					}) === Y.Yd
				},
				ee = e => {
					return Object(J.c)(e, {
						experimentEligibilitySelector: J.a,
						experimentName: Y.Dc
					}) === Y.Yd
				};
			var te = s("./src/reddit/selectors/listings.ts"),
				se = s("./src/reddit/selectors/profile.ts");
			const re = "PAGE__PROFILE_POSTS_PENDING",
				oe = "PAGE__PROFILE_POSTS_LOADED",
				ie = "PAGE__PROFILE_POSTS_FAILED",
				ne = Object(i.a)(re),
				ae = Object(i.a)(oe),
				de = Object(i.a)(ie),
				ce = e => async (t, s, r) => {
					var i, y, O;
					const {
						queryParams: j,
						params: T
					} = e, {
						sort: w,
						t: S
					} = Object(u.b)(j), {
						profileName: C
					} = T, I = Object(n.a)(`u_${C}`, w, j), D = s(), k = Object(a.a)(D.listings.postOrder.ids, I), R = Object(te.c)(D, {
						listingKey: I
					}), N = Object(te.d)(D, {
						listingKey: I
					});
					if (await t(m.d(C)), N || k && !R) {
						if (k) {
							const e = Object(se.s)(s(), {
								profileName: C
							});
							t(b.n({
								title: e
							}))
						}
						return
					}
					t(ne({
						key: I
					}));
					const M = ee(D);
					let F, L, V;
					if (M) {
						const e = E({
							username: C,
							profileSort: w,
							filter: P.S.Posts,
							timeSort: Object(A.a)(w, S),
							shouldUseGqlCursor: !0
						});
						L = null === (O = null === (y = null === (i = null == (F = await Object(K.a)("profilePosts", () => _(r.gqlContext(), e))) ? void 0 : F.body) || void 0 === i ? void 0 : i.data) || void 0 === y ? void 0 : y.redditorInfoByName) || void 0 === O ? void 0 : O.__typename
					} else {
						const t = {
							...o()(e.queryParams, [...g.p, ...g.o, g.l]),
							layout: Object(v.U)(D, {}).toLowerCase(),
							sort: w,
							t: Object(A.a)(w, S)
						};
						F = await Object(K.a)("profilePosts", () => x(r.apiContext(), C, t))
					}
					if (!F.ok || M && L !== X.c.AvailableRedditor) return t(de({
						account: !M && F.body.data ? F.body.data.account : null,
						error: F.body.reason ? {
							type: F.body.reason
						} : F.error,
						key: I
					})), F.body.reason === f.a.DeletedProfile || L === X.c.DeletedRedditor ? t(Object(d.v)({
						profileName: C
					})) : L === X.c.UnavailableRedditor ? t(Object(d.B)({
						profileName: C
					})) : M && !L && t(Object(d.p)({
						profileName: C
					})), void t(b.o(F.status));
					if (M) {
						const {
							data: e
						} = F.body;
						V = G(e, !0)
					} else V = F.body, await Object(Q.a)(r.gqlContext, V.posts).then(e => V.posts = e);
					if (!M && Z(D)) {
						const e = E({
								username: C,
								profileSort: w,
								filter: P.S.Posts
							}),
							t = await _(r.gqlContext(), e);
						if (t.ok && t.body) {
							const {
								data: e
							} = t.body, s = G(e);
							W({
								gatewayResponse: {
									authorFlair: V.authorFlair,
									pinned: V.pinned,
									postIds: V.postIds,
									posts: V.posts,
									postFlair: V.postFlair,
									profiles: V.profiles,
									subreddits: V.subreddits,
									token: V.token
								},
								normalizedGqlResponse: s,
								rawGqlResponse: e
							})
						}
					}
					t(ae({
						key: I,
						meta: s().meta,
						...V
					}));
					const U = Object(se.o)(s(), C),
						{
							pinned: q
						} = V;
					t(Object(p.h)({
						profileId: U,
						pinned: q
					})), await Promise.all([t(Object(u.c)(C)), t(Object(h.q)()), t(Object(l.b)()), t(c.o(C))])
				}, le = "PROFILE_POSTS__MORE_POSTS_PENDING", ue = "PROFILE_POSTS__MORE_POSTS_LOADED", pe = "PROFILE_POSTS__MORE_POSTS_FAILED", be = Object(i.a)(le), me = Object(i.a)(ue), he = Object(i.a)(pe), fe = () => async (e, t, s) => {
					let {
						apiContext: r,
						gqlContext: i
					} = s;
					const a = t(),
						{
							currentPage: d
						} = a.platform;
					if (!d || !d.routeMatch) return;
					const {
						queryParams: c,
						params: l
					} = d.routeMatch.match, {
						sort: p,
						t: b
					} = Object(u.b)(c), {
						profileName: m
					} = l, h = Object(n.a)(`u_${m}`, p, c), f = Object(te.g)(a, {
						listingKey: h
					});
					if (!f) return;
					const y = Object(te.d)(a, {
							listingKey: h
						}),
						O = Object(te.e)(a, {
							listingKey: h,
							token: f.token
						});
					if (y || O) return;
					e(be({
						key: h,
						fetchedToken: f.token
					}));
					const j = ee(a);
					let T, w;
					if (j) {
						const e = E({
							username: m,
							profileSort: p,
							filter: P.S.Posts,
							timeSort: Object(A.a)(p, b),
							loadMoreData: f,
							shouldUseGqlCursor: !0
						});
						T = await _(i(), e)
					} else {
						const e = {
							after: f.token,
							dist: f.dist,
							sort: p,
							t: b,
							...o()(c, g.p),
							layout: Object(v.U)(a, {}).toLowerCase()
						};
						T = await x(r(), m, e)
					}
					if (!T.ok) return void e(he({
						account: !j && T.body.data ? T.body.data.account : null,
						error: T.error,
						fetchedToken: f.token,
						key: h
					}));
					if (j) {
						const {
							data: e
						} = T.body;
						w = G(e, !0)
					} else w = T.body, await Object(Q.a)(i, w.posts).then(e => w.posts = e);
					const S = a.listings.postOrder.ids[h],
						C = w.postIds || [],
						I = {
							...w,
							postIds: C.filter(e => !S || !S.includes(e))
						};
					if (Z(a)) {
						const e = E({
								username: m,
								profileSort: p,
								filter: P.S.Posts,
								loadMoreData: f
							}),
							t = await _(i(), e);
						if (t.ok && t.body) {
							const {
								data: e
							} = t.body, s = G(e);
							W({
								gatewayResponse: {
									authorFlair: I.authorFlair,
									pinned: I.pinned,
									postIds: I.postIds,
									posts: I.posts,
									postFlair: I.postFlair,
									profiles: I.profiles,
									subreddits: I.subreddits,
									token: I.token
								},
								normalizedGqlResponse: s,
								rawGqlResponse: e
							})
						}
					}
					e(me({
						fetchedToken: f.token,
						key: h,
						meta: a.meta,
						...I
					})), await e(Object(u.c)(m))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "i", (function() {
				return A
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				l = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/selectors/profile.ts");
			const b = "PINNEDPOST__PINNED_POSTS_LOADED",
				m = Object(i.a)(b),
				h = "PINNEDPOST__PIN_POST_SUCCESS",
				f = "PINNEDPOST__UNPIN_POST_SUCCESS",
				g = Object(i.a)(h),
				v = Object(i.a)(f),
				y = "PINNEDPOST__PIN_POST_PENDING",
				O = "PINNEDPOST__UNPIN_POST_PENDING",
				P = Object(i.a)(y),
				_ = Object(i.a)(O),
				j = "PINNEDPOST__PIN_POST_FAILURE",
				E = "PINNEDPOST__UNPIN_POST_FAILURE",
				T = Object(i.a)(j),
				w = Object(i.a)(E),
				S = e => Object(a.f)({
					buttonAction: A(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: l.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				C = (e, t) => Object(a.f)({
					buttonAction: A(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: l.b.SuccessMod,
					text: t ? r.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : r.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				I = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				D = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("You can't pin a removed post", null, {
						hk: "3bdn2y"
					})
				}),
				x = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				A = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, r, i) => {
						let {
							apiContext: a,
							gqlContext: l
						} = i;
						const b = r(),
							m = b.posts.models[e];
						if (!m) return;
						const h = !Object(u.s)(b, {
							postId: e
						});
						if (h && m.isRemoved) return s(D());
						const f = m.author,
							y = Object(p.o)(b, f),
							[O, j, E, A, k] = h ? [P, g, T, S, I] : [_, v, w, C, x];
						if (h) {
							if (Object(u.O)(b, {
									profileName: f
								}).length >= o.hb) return void s(Object(n.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
						}
						const R = Object(u.p)(b, e, f),
							N = !h && R;
						s(O({
							postId: e,
							profileId: y
						})), (await Object(c.i)(l(), e, h, !0)).ok ? (s(j({
							postId: e,
							profileId: y
						})), t || s(A(e, N))) : (s(E({
							postId: e,
							profileId: y
						})), s(k()))
					}
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return _
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "c", (function() {
				return w
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/filterQueryParams/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/pages/postCreation.ts"),
				l = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/reddit/helpers/name/index.ts"),
				p = s("./src/reddit/models/PostCreationForm/index.ts"),
				b = s("./src/reddit/routes/postCreation/index.ts"),
				m = s("./src/reddit/routes/postCreation/constants.ts"),
				h = s("./src/reddit/selectors/postCreations.ts"),
				f = s("./src/reddit/selectors/platform.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/actions/postCreation/constants.ts"),
				y = s("./src/reddit/actions/postCreation/general.ts");
			const O = Object(a.a)(v.O),
				P = Object(a.a)(v.P),
				_ = Object(a.a)(v.N),
				j = (e, t) => async (s, r, o) => {
					let {
						apiContext: n
					} = o, a = r();
					const {
						name: b,
						isProfile: m
					} = e, v = Object(f.e)(a), y = v && !m && Object(u.a)(v.name, b), P = a.creations.api.subreddit.change.pending;
					if (y || P) return;
					const _ = Object(l.x)(t);
					if (!b) return void s(E(e, _));
					s(O(e));
					const j = m ? {
						profileName: b
					} : {
						subredditName: b
					};
					if (await s(Object(c.postCreationPageDataRequested)(j)), m || !Object(h.C)(a)) return s(E(e, _));
					const T = e.allowedPostTypes || Object(g.B)(r(), {
						subredditName: b
					});
					if (!T) return void s(E(e, _));
					let w;
					a = r();
					const S = Object(h.rb)(a),
						C = Object(h.C)(a);
					if (S === i.bc.MEDIA && C) {
						const e = Object(h.Z)(a),
							t = Object(p.x)(e),
							s = Object(h.P)(a) && e.items.length > 1,
							r = !t && !s;
						if (s && !T.galleries) w = p.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (r && !T.images) w = p.q.ImageWillBeRemoved;
						else if (t && !T.videos) {
							const t = a.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							T.images ? s > i.lb && (w = p.q.VideoWillBeRemovedTooLongForGif) : w = p.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(w ? Object(d.i)(w) : E({
						...e,
						allowedPostTypes: T
					}, _))
				}, E = function(e, t) {
					let s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (i, n) => {
						const {
							name: a,
							isProfile: d
						} = e, c = n().platform.currentPage, l = c.queryParams, u = d ? b.b : b.c;
						let p = "";
						p = a ? u(a) : m.b, p = Object(o.a)(p, {
							...l,
							draft: t || l.draft
						}), (t || c.url.toLowerCase() !== p.toLowerCase()) && (i(P(e)), s && i(Object(y.t)(!0)), i(Object(y.i)()), i(Object(r.c)(p)))
					}
				}, T = e => async (t, s) => {
					const i = s().platform.currentPage,
						n = i.queryParams,
						a = Object(o.a)(i.url, {
							...n,
							collection: e
						});
					t(Object(r.c)(a))
				}, w = () => async (e, t) => {
					const s = t().platform.currentPage,
						o = Object(n.a)(s.url, ["collection"]);
					e(Object(r.c)(o))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return D
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "d", (function() {
				return A
			})), s.d(t, "p", (function() {
				return M
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "l", (function() {
				return L
			})), s.d(t, "i", (function() {
				return V
			})), s.d(t, "m", (function() {
				return U
			})), s.d(t, "k", (function() {
				return G
			})), s.d(t, "h", (function() {
				return q
			})), s.d(t, "n", (function() {
				return B
			})), s.d(t, "s", (function() {
				return X
			})), s.d(t, "r", (function() {
				return Y
			})), s.d(t, "g", (function() {
				return J
			})), s.d(t, "q", (function() {
				return ee
			})), s.d(t, "c", (function() {
				return te
			})), s.d(t, "a", (function() {
				return se
			})), s.d(t, "b", (function() {
				return re
			})), s.d(t, "o", (function() {
				return ae
			}));
			var r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/formatApiError/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/postCreation/general.ts"),
				a = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/models/StructuredStyles/index.ts");
			var b = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/name/index.ts"),
				h = s("./src/reddit/models/PostDraft/index.ts"),
				f = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				g = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts");
			const y = e => {
				let t = e.drafts.reduce((e, t) => {
					const s = (e => {
						let t;
						return t = "link" === e.kind ? {
							kind: h.b.Link,
							body: e.body || void 0
						} : "markdown" === e.kind ? {
							kind: h.b.Markdown,
							body: e.body || void 0
						} : {
							kind: h.b.RichText,
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
					return e.postDraftIds.push(s.id), e.postDrafts[s.id] = s, e
				}, {
					postDraftIds: [],
					postDrafts: {},
					profiles: {},
					subreddits: {}
				});
				return t = e.subreddits.reduce((e, t) => {
					if (t.subreddit_type === v.g.User) {
						const s = Object(f.a)(t, Object(m.i)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(g.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var O = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				P = s("./src/reddit/models/PostCreationForm/index.ts"),
				_ = s("./src/reddit/helpers/trackers/postComposer.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/models/User/index.ts"),
				T = s("./src/reddit/selectors/postCreations.ts"),
				w = s("./src/reddit/selectors/postDraft.ts"),
				S = s("./src/reddit/selectors/profile.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/user.ts");
			const D = "POST_DRAFT__LIST_PENDING",
				x = "POST_DRAFT__LIST_LOADED",
				A = "POST_DRAFT__LIST_FAILED",
				k = Object(i.a)(D),
				R = Object(i.a)(x),
				N = Object(i.a)(A),
				M = () => async (e, t, s) => {
					let {
						apiContext: o
					} = s;
					const i = t();
					if (!Object(I.m)(i) || Object(w.b)(i)) return;
					e(k());
					const n = await (e => Object(l.a)(Object(u.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: r.ob.GET
					}))(o());
					n.ok ? e(R(y(n.body))) : e(N(n.error))
				}, F = "POST_DRAFT__SAVE_DRAFT_PENDING", L = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", V = "POST_DRAFT__SAVE_DRAFT_FAILED", U = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", G = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", B = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", z = Object(i.a)(F), $ = Object(i.a)(L), H = Object(i.a)(V), W = Object(i.a)(U), Q = Object(i.a)(G), K = Object(i.a)(q), X = Object(i.a)(B), Y = e => async (t, s, i) => {
					let {
						apiContext: n
					} = i;
					const c = s(),
						p = Object(w.g)(c),
						m = Object(T.eb)(c);
					if (p || m) return;
					const h = Object(w.h)(c, e);
					if (!h) return;
					t(z(h)), _.g(c, h, h.destSubreddit.name);
					const f = await ((e, t, s) => Object(l.a)(Object(u.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? r.ob.PUT : r.ob.POST,
						data: Object(O.a)(t)
					}).then(e => e.body.fields && Object(P.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: r.K.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(n(), h, e);
					if (f.ok) {
						const {
							id: s,
							draftsCount: r
						} = Object(O.c)(f.body);
						t($({
							draftId: s,
							draftsCount: r
						})), e || t(Object(a.a)(h.destSubreddit, s, !1))
					} else {
						const e = f.error;
						e.type === r.K.BAD_CAPTCHA_ERROR ? t(K()) : e.type === r.K.VALIDATION_ERROR ? t(W(e)) : e.type === r.K.SUBMIT_VALIDATION_ERROR ? t(Q(e)) : t(H(e)), t(Object(d.f)({
							duration: d.a,
							kind: j.b.Error,
							text: Object(o.a)(e)
						}))
					}
				}, J = "POST_DRAFT__LOAD_DRAFT", Z = Object(i.a)(J), ee = e => async (t, s, r) => {
					let {
						apiContext: o
					} = r;
					t(Z(e));
					let i = P.f;
					const n = s();
					if (e.subredditId) {
						const t = Object(C.X)(n, {
								subredditId: e.subredditId
							}),
							s = Object(S.r)(n, {
								profileId: e.subredditId
							}),
							r = Object(I.m)(n);
						t ? i = {
							isProfile: !1,
							name: t.name
						} : s && r && (i = {
							isProfile: !0,
							name: Object(E.e)(r)
						})
					}
					await t(Object(a.a)(i, e.id, !1));
					const d = Object(w.h)(s(), e.id);
					d && _.j(s(), d)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", re = "POST_DELETE_DRAFT_PENDING", oe = Object(i.a)(te), ie = Object(i.a)(se), ne = Object(i.a)(re), ae = (e, t) => async (s, i, a) => {
					let {
						apiContext: b
					} = a;
					const m = i();
					if (Object(w.a)(m, e)) return;
					const h = Object(w.d)(m, {
						draftId: e
					});
					h && _.h(m, h), s(ne({
						draftId: e
					}));
					const f = await (async (e, t) => Object(l.a)(Object(u.a)(e, [p.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: r.ob.DELETE
					}))(b(), e);
					if (f.ok) {
						const {
							draftsCount: r
						} = Object(O.c)(f.body);
						s(oe({
							draftId: e,
							draftsCount: r
						}));
						const o = Object(c.x)(t);
						e === o && s(Object(n.q)(!0, t))
					} else {
						const t = f.error;
						s(ie({
							draftId: e,
							apiError: t
						})), s(Object(d.f)({
							duration: d.a,
							kind: j.b.Error,
							text: Object(o.a)(t)
						}))
					}
				}
		},
		"./src/reddit/actions/redditEmbed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			}));
			var r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				n = s("./src/reddit/endpoints/me/index.ts"),
				a = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = s("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				l = "REDDIT_EMBED_FAILED",
				u = Object(o.a)("REDDIT_EMBED_PENDING"),
				p = Object(o.a)(c),
				b = Object(o.a)(l),
				m = (e, t) => async (e, s, r) => {
					let {
						apiContext: o
					} = r;
					const d = s();
					e(u());
					const c = await Object(n.a)(o());
					c.ok && c.body ? !t || c.body.account ? (e(p(c.body)), e(Object(i.d)()), h(d)) : Object(a.a)(e, d) : e(b(c.error))
				}, h = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === r.Tb.INBOX_PAGES && Object(d.f)(e)
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/isEqual.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/ads/store.ts"),
				u = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/media.ts"),
				f = s("./src/reddit/selectors/video.ts");
			const g = [{
					event: b.a.ViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.m
				}, {
					event: b.a.Impression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: b.a.GalleryItemImpression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: b.a.VendorFullyInView,
					threshold: c.b,
					viewabilityMinimum: c.f
				}, {
					event: b.a.GroupMViewable,
					threshold: c.b,
					viewabilityMinimum: c.m
				}, {
					event: b.a.VendorFullyInViewSeconds5,
					threshold: c.l,
					viewabilityMinimum: c.h,
					remainingTime: c.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: b.a.VendorFullyInViewSeconds15,
					threshold: c.l,
					viewabilityMinimum: c.g,
					remainingTime: c.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				v = [{
					event: b.a.VideoViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.k,
					remainingTime: c.k,
					timeViewingInterrupted: 0
				}, {
					event: b.a.VideoFullyViewableImpression,
					threshold: c.a,
					viewabilityMinimum: c.i,
					remainingTime: c.i,
					timeViewingInterrupted: 0
				}, {
					event: b.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: c.k,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: b.a.VideoVendorFullyViewable50,
					threshold: c.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				y = e => e.map(e => {
					let {
						event: t,
						cumulative: s = !1,
						cumulativeElapsedTime: r,
						remainingTime: o,
						threshold: i = null,
						viewabilityMinimum: n,
						checkAudible: a = !1,
						timeViewingInterrupted: d
					} = e;
					return {
						event: t,
						cumulative: s,
						checkAudible: a,
						timer: null,
						fired: !1,
						threshold: i,
						remainingTime: o,
						cumulativeElapsedTime: 0,
						viewabilityMinimum: n,
						timeViewingInitialized: 0,
						timeViewingInterrupted: d
					}
				}),
				O = () => y(g),
				P = () => y(v),
				_ = [c.c, c.e, c.l, c.j, c.a, c.b],
				j = [c.c, c.l, c.j, c.a],
				E = [c.c, c.e, c.l, c.b],
				T = e => "boolean" == typeof e.cumulative && e.cumulative,
				w = Object(a.c)({
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(f.b)(e, {
							postId: s.id
						})
					},
					videoDuration: (e, t) => {
						let {
							post: s
						} = t;
						const r = Object(f.h)(e, {
							postId: s.id
						});
						if (r) return r.length
					},
					isAudible: e => Object(h.a)(e),
					isPlaying: (e, t) => {
						let {
							post: s
						} = t;
						return Object(f.d)(e, {
							postId: s.id
						})
					},
					isFullScreen: (e, t) => {
						let {
							post: s
						} = t;
						return Object(f.e)(e, {
							postId: s.id
						})
					}
				}),
				S = Object(p.a)(w);
			class C extends i.Component {
				constructor(e) {
					super(e), this.viewabilityStats = O(), this.videoStats = P(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, c.r), this.props.trackVideo && this.handleThresholds(e, c.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						if (o()(this.state.event, e) || this.setState({
								event: e
							}), this.props.trackDisplay) {
							const t = this.props.post.media && Object(m.G)(this.props.post.media);
							this.viewabilityStats.forEach(s => {
								(s.event !== b.a.GalleryItemImpression || t) && this.checkViewability(e, s)
							})
						}
						this.props.isPlaying && this.props.trackVideo && this.videoStats.forEach(t => {
							t.checkAudible && !this.props.isAudible || this.checkViewability(e, t)
						})
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: e.continuousViewingStartedAt
					}
				}
				componentDidMount() {
					this.visibilityChangeSubscriptionId = u.a.subscribe(e => {
						this.pageInFocus = e.documentInFocus, this.state.event && this.handleViewabilityChange(this.state.event)
					})
				}
				componentWillUnmount() {
					const {
						post: e,
						trackDisplay: t,
						trackVideo: s
					} = this.props;
					this.visibilityChangeSubscriptionId && u.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (l.d(e.id, c.r, !1), this.viewabilityStats.forEach(e => {
						T(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (l.d(e.id, c.p, !0), this.videoStats.forEach(e => {
						T(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), this.outOfViewStats = [], this.inViewStats = []
				}
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (this.handleThresholds(this.state.event, c.p, !0), this.videoStats.forEach(e => {
						!this.props.isPlaying || e.checkAudible && !this.props.isAudible ? e.cumulative ? this.pauseCumulativeStats(e) : this.pauseViewableStats(e) : this.checkViewability(this.state.event, e)
					})) : this.resetTimers())
				}
				resetTimers() {
					this.videoStats.forEach(e => {
						e.cumulative || this.resetTimer(e)
					}), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e), e.timeViewingInitialized = 0, void 0 !== e.viewabilityMinimum && (e.remainingTime = e.viewabilityMinimum)
				}
				pauseViewableStats(e) {
					let t;
					if (!e.timer || e.fired) return;
					e.timeViewingInterrupted = Date.now();
					const s = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = (e.viewabilityMinimum || 0) - s, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = (e.viewabilityMinimum || 0) - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e))
				}
				meetsViewabilityRequirements(e, t) {
					let s, r = !1,
						o = !1;
					return "object" == typeof t ? (s = t.threshold, r = !!t.playing, o = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!r || this.props.isPlaying) && (!o || this.props.isAudible)
				}
				handleThresholds(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						post: r
					} = this.props, i = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!o()(i, this.inViewStats) && i.length > 0 && l.b(r.id, i, s);
					const n = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!o()(n, this.outOfViewStats) && n.length > 0 && l.d(r.id, n, s), this.outOfViewStats = n, this.inViewStats = i
				}
				isAdequatelyInView(e, t) {
					return !!this.props.isFullScreen || !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, c.g) : e.viewabilityMinimum = c.g, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: s,
						width: r
					} = e.boundingClientRect;
					return !t.threshold && t.event === b.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = r * s < 3e5 ? c.a : c.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === b.a.GroupMViewable && r * s > 242500 && (t.threshold = c.l), t
				}
				checkViewability(e, t) {
					if (T(t) && t.event === b.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						T(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
					}
				}
				clearTimer(e) {
					e.timer && (clearTimeout(e.timer), e.timer = null)
				}
				getLengthForTimer(e) {
					return void 0 !== e.remainingTime ? e.remainingTime : e.viewabilityMinimum || 0
				}
				fireStat(e) {
					setTimeout(() => this.props.onPostViewable(this.props.post, e.event), 0), e.fired = !0
				}
				initTimer(e, t) {
					this.clearTimer(e), e.timer = window.setTimeout(() => {
						this.fireStat(e)
					}, t)
				}
				render() {
					const {
						trackDisplay: e,
						trackVideo: t
					} = this.props;
					let s = _;
					return e && !t ? s = E : !e && t && (s = j), n.a.createElement(d.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = S(C)
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "BlankPost", (function() {
				return l
			}));
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				n = s("./src/reddit/connectors/PostViewable/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/contexts/Post/index.tsx");
			const c = Object(n.a)(null),
				l = e => {
					let {
						className: t,
						post: s
					} = e;
					return s.isSponsored ? o.a.createElement(i.a, {
						post: s,
						trackDisplay: !0
					}, o.a.createElement("div", {
						className: Object(a.a)(t, `Blank ${s.id}`)
					})) : null
				};
			t.default = Object(d.b)(c(l))
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return {
					...e,
					onPostViewable: o.O
				}
			}(t))
		},
		"./src/reddit/constants/errors.ts": function(e, t, s) {
			"use strict";
			var r, o;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(r || (r = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(o || (o = {}))
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return g
			}));
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/constants/posts.ts"),
				a = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				d = s("./src/reddit/hooks/useUserContext.ts"),
				c = s("./src/reddit/models/User/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/subreddit.ts");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = o.a.createContext(null);

			function m(e) {
				const t = Object(i.e)(t => Object(l.F)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(d.a)();
				let r = Object(i.e)(e => t ? Object(u.Q)(e, {
					identifier: t.belongsTo
				}) : null);
				r || (null == t ? void 0 : t.belongsTo.type) !== n.a.PROFILE || (r = t.profile);
				const o = (null == t ? void 0 : t.belongsTo.type) === n.a.SUBREDDIT ? r : null,
					p = !(!s || (null == t ? void 0 : t.author) !== Object(c.e)(s)),
					b = Object(i.e)(i => ({
						currentUser: s,
						imageGalleryCurrentItem: Object(l.i)(i, {
							postId: e
						}),
						isModerator: !(!o || !i.moderatingSubreddits[o.name]),
						post: t,
						postId: e,
						subreddit: o,
						subredditOrProfile: r,
						userIsOp: p
					}));
				return Object(a.a)(b)
			}

			function h(e) {
				const {
					postId: t,
					children: s
				} = e, r = m(t);
				return o.a.createElement(b.Provider, {
					value: r
				}, s)
			}

			function f(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return o.a.createElement(b.Consumer, null, r => {
						if (!r) throw new Error(`No Post context for <${t}/>!`);
						return o.a.createElement(e, p({}, s, r))
					})
				}
				return s.displayName = `PostContext(${t})`, s
			}

			function g(e) {
				const t = e.displayName || e.name;

				function s(t) {
					const s = m(t.postId);
					return o.a.createElement(b.Provider, {
						value: s
					}, o.a.createElement(e, p({}, t, s)))
				}
				return s.displayName = `PostProvider(${t})`, s
			}
			t.c = b
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			}));
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				a = s("./src/reddit/reducers/user/prefs/index.ts"),
				d = s("./src/reddit/selectors/user.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = o.a.createContext({
				currentUser: null,
				modModeEnabled: !1,
				nightmodeEnabled: !1,
				prefs: a.a,
				isLoggedIn: !1
			});

			function u() {
				const e = Object(i.e)(e => ({
					currentUser: Object(d.m)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(d.fb)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(d.S)(e)
				}));
				return Object(n.a)(e)
			}

			function p(e) {
				return o.a.createElement(l.Provider, {
					value: u()
				}, e.children)
			}

			function b(e) {
				const t = e.displayName || e.name;

				function s(t) {
					return o.a.createElement(l.Consumer, null, s => o.a.createElement(e, c({}, t, s)))
				}
				return s.displayName = `UserContext(${t})`, s
			}
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/config.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				n = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = e => Object(i.a)(e, {
				endpoint: Object(n.a)(`${r.a.gatewayUrl}/desktopapi/v1/me`),
				method: o.ob.GET
			})
		},
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				o = s("./node_modules/react-redux/es/index.js");

			function i(e) {
				const t = Object(r.useRef)(e);
				return t.current === e || Object(o.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				o = s("./src/reddit/contexts/User/index.tsx");

			function i() {
				return Object(r.useContext)(o.a)
			}
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, o = s("./node_modules/lodash/isEqual.js"),
				i = s.n(o),
				n = s("./node_modules/lodash/merge.js"),
				a = s.n(n),
				d = s("./node_modules/lodash/pick.js"),
				c = s.n(d),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/comment/constants.ts"),
				p = s("./src/reddit/actions/contentGate.ts"),
				b = s("./src/reddit/actions/frontpage/constants.ts"),
				m = s("./src/reddit/actions/header.ts"),
				h = s("./src/reddit/actions/modQueue/constants.ts"),
				f = s("./src/reddit/actions/pages/constants.ts"),
				g = s("./src/reddit/actions/pages/modListing/constants.ts"),
				v = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				y = s("./src/reddit/actions/pages/postCreation.ts"),
				O = s("./src/reddit/actions/pages/postDraft.ts"),
				P = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				_ = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				j = s("./src/reddit/actions/pages/profilePosts.ts"),
				E = s("./src/reddit/actions/pages/search/index.ts"),
				T = s("./src/reddit/actions/pages/subreddit/index.ts"),
				w = s("./src/reddit/actions/pages/topic.ts"),
				S = s("./src/reddit/actions/postCreation/constants.ts"),
				C = s("./src/reddit/actions/postDraft.ts"),
				I = s("./src/reddit/actions/preferences.ts"),
				D = s("./src/reddit/actions/redditEmbed.ts"),
				x = s("./src/reddit/actions/search.ts"),
				A = s("./src/reddit/actions/structuredStyles/constants.ts"),
				k = s("./src/reddit/actions/subreddit.ts"),
				R = s("./src/reddit/actions/users.ts"),
				N = s("./src/reddit/constants/postLayout.ts"),
				M = s("./src/reddit/constants/preferences.ts"),
				F = s("./src/reddit/constants/theme.ts"),
				L = s("./src/reddit/models/PostCreationForm/index.ts"),
				V = s("./src/reddit/models/PostDraft/index.ts"),
				U = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(r || (r = {}));
			const G = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "enableFollowers", "feedRecommendationsEnabled", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "liveBarRecommendationsEnabled", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...M.a, "loginOtpEnabled"],
				q = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: U.a,
					commentMode: L.i.RICH_TEXT,
					countryCode: "",
					badCommentAutocollapse: l.m.OFF,
					layout: N.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: l.v.CONFIDENCE,
					editorMode: L.i.RICH_TEXT,
					enableFollowers: !0,
					geopopular: void 0,
					globalTheme: F.a,
					hamburgerTray: void 0,
					hasSeenCustomizeFlyout: !0,
					hideNSFW: !0,
					ignoreSuggestedSort: !1,
					labelNSFW: !0,
					liveBarRecommendationsEnabled: !0,
					loginOtpEnabled: !1,
					markMessagesRead: !0,
					nightmode: !1,
					openPostInNewTab: !1,
					over18: !1,
					profileLayout: void 0,
					reduceAnimationsFromAwards: !1,
					searchOver18: !1,
					showActiveCommunities: !0,
					showPresence: !1,
					showTwitter: !1,
					sort: l.db.Hot,
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
					useMarkdown: !1,
					gatedSubredditOptIn: !1,
					quarantineOptIn: !1
				},
				B = {
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				z = (e, t) => {
					if (!t) return e;
					const s = c()({
							...t.account,
							...t
						}, G),
						r = t.subreddit,
						o = {
							...e.subreddit
						};
					Object.keys(r || {}).forEach(e => {
						o[e] = {
							...B,
							...r && r[e]
						}
					});
					const n = {
						...e,
						...s,
						subreddit: o
					};
					if (n.useMarkdown !== e.useMarkdown) {
						const e = n.useMarkdown ? L.i.MARKDOWN : L.i.RICH_TEXT;
						n.editorMode = e, n.commentMode = e
					}
					return i()(n, e) ? e : n
				},
				$ = (e, t, s) => z(e, {
					subreddit: {
						[t]: {
							...B,
							...e.subreddit[t],
							...s
						}
					}
				});
			t.c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.o:
					case u.v: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							commentMode: s
						}
					}
					case S.s:
					case S.R: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							editorMode: s
						}
					}
					case m.d:
						return {
							...e, subscriptionsPinned: !0
						};
					case m.e:
						return {
							...e, subscriptionsPinned: !1
						};
					case C.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === V.b.Markdown ? L.i.MARKDOWN : L.i.RICH_TEXT
						}
					}
					case I.h: {
						const {
							layout: s
						} = t.payload;
						return e.layout === s ? e : {
							...e,
							layout: s
						}
					}
					case I.o: {
						const {
							layout: s,
							subredditId: r
						} = t.payload;
						return $(e, r, {
							layout: s
						})
					}
					case I.f:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case I.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case p.j:
						return {
							...e, over18: t.payload.over18
						};
					case x.h:
						return {
							...e, searchOver18: t.payload.searchOver18
						};
					case I.c:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case I.i:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case p.i:
						return {
							...e, gatedSubredditOptIn: t.payload
						};
					case p.k:
						return {
							...e, quarantineOptIn: t.payload
						};
					case I.q:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							}
						}
						return e;
					case A.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case A.e:
						return t.payload.nightmodeTempUpdated ? {
							...e,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : e;
					case I.g:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case I.d:
						return void 0 !== t.payload ? {
							...e,
							collapsedTraySections: a()({}, e.collapsedTraySections, t.payload)
						} : e;
					case p.b:
					case p.c:
					case p.l:
					case p.m:
					case p.h:
					case p.a:
					case p.n:
					case g.e:
					case g.h:
					case f.a:
					case f.e:
					case f.b:
					case f.f:
					case f.d:
					case f.h:
					case b.c:
					case T.SUBREDDIT_LOADED:
					case v.b:
					case v.a:
					case P.e:
					case _.e:
					case _.b:
					case j.PROFILE_POSTS_LOADED:
					case b.g:
					case k.i:
					case x.e:
					case D.b:
					case y.PAGE_LOADED:
					case O.PAGE_LOADED:
					case I.j:
					case I.b:
					case E.c:
					case I.a:
					case R.c:
					case w.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? z(e, t.payload.preferences) : e;
					case I.p: {
						const {
							subredditId: s,
							prefs: r
						} = t.payload;
						return $(e, s, r)
					}
					case P.d:
					case _.d:
					case _.a:
					case j.PROFILE_POSTS_FAILED: {
						let s = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: r,
								showPresence: o
							} = t.payload.account;
							e.nightmode !== r && (s = {
								...s,
								nightmode: r
							}), e.showPresence !== o && (s = {
								...s,
								showPresence: o
							})
						}
						return s
					}
					case h.h:
					case h.j:
					case h.i:
					case h.g:
					case h.f:
					case h.s:
					case h.r:
					case h.u:
					case h.v:
					case h.B:
					case h.A:
						return t.payload && t.payload.response && t.payload.response.preferences ? z(e, t.payload.preferences) : e;
					case I.n: {
						const s = t.payload,
							{
								enableFollowers: r,
								showActiveCommunities: o
							} = s.additional;
						let i = e;
						return e.enableFollowers !== r && (i = {
							...i,
							enableFollowers: r
						}), e.showActiveCommunities !== o && (i = {
							...i,
							showActiveCommunities: o
						}), i
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/postCreation/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/loadableAction/index.ts"),
				n = s("./src/reddit/routes/postCreation/constants.ts");
			const a = [n.b, n.c, n.a],
				d = Object(r.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/PostCreation/index.tsx"
					}
				}),
				c = e => `/${e}/submit`,
				l = (e, t) => {
					return n.c.replace(/:subredditName/, e) + (t ? `?collection=${t}` : "")
				},
				u = e => n.a.replace(/:profileName/, e),
				p = {
					action: Object(i.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: d,
					chunk: o.t.POST_CREATION,
					exact: !0,
					meta: {
						name: o.Tb.POST_CREATION
					},
					path: a,
					prefetches: [o.t.COMMENTS_PAGE]
				};
			t.a = p
		},
		"./src/redditGQL/operations/ProfileFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"e8d58a13151d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.1887c982962702d15631.js.map