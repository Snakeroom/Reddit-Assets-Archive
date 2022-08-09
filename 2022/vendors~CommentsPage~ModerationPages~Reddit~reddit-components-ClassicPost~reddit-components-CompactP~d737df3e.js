// https://www.redditstatic.com/desktop2x/vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e.506a3ece88e0a905b7a3.js
// Retrieved at 8/9/2022, 6:30:12 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"], {
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isPseudoLocale = t.isISOLocaleSupported = t.toISOLocale = t.isoLocaleToR2Language = void 0;
			const n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
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
				i = Object.keys(a).reduce((e, t) => (o.has(t) && (e[t] = a[t]), e), {}),
				s = Object.keys(i).reduce((e, t) => {
					const r = i[t];
					return r && r.forEach(r => {
						e[r] = t
					}), e
				}, {});
			t.isoLocaleToR2Language = e => s[e], t.toISOLocale = e => {
				if (!e) return;
				const t = e.match(/^([a-zA-Z]{2,4})(?:[-_]([a-zA-Z]{2,4}))?$/);
				if (!t) return;
				const r = t[1];
				if (!r) return;
				let n = r.toLowerCase();
				const o = t[2];
				return o && (n = `${n}-${o.toUpperCase()}`), n
			};
			const l = new Set(Object.keys(s));
			t.isISOLocaleSupported = e => !!e && l.has(e), t.isPseudoLocale = e => !!e && (e === n.PSEUDO_AUTO || Object.values(n.PseudoLocale).includes(e))
		},
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return k
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-dom/index.js"),
				i = (r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function s(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(r, n) {
					return s(e[n], t[n])
				})) : e !== t
			}
			var l = new Map;

			function c(e) {
				void 0 === e && (e = {});
				for (var t, r = e.root || null, n = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							r = t[0],
							n = void 0 === r ? "0px" : r,
							o = t[1],
							a = void 0 === o ? n : o,
							s = t[2],
							l = void 0 === s ? n : s,
							c = t[3];
						return n + " " + a + " " + l + " " + (void 0 === c ? a : c)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], a = l.keys(); t = a.next().value;) {
					if (!(r !== t.root || n !== t.rootMargin || s(o, t.thresholds))) return t
				}
				return null
			}

			function u(e, t) {
				var r = l.get(e);
				if (r)
					for (var n, o = r.values(); n = o.next().value;)
						if (n.target === t.target) return n;
				return null
			}

			function f(e, t) {
				for (var r = 0; r < e.length; r++) {
					var n = u(t, e[r]);
					n && n.handleChange(e[r])
				}
			}

			function d(e) {
				return c(e) || new IntersectionObserver(f, e)
			}
			var p = r("./node_modules/invariant/browser.js"),
				h = r.n(p),
				b = {},
				m = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return b.errorReporter || function(e) {
								return h()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							b.errorReporter = e
						}
					}
				});

			function v(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function g(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var y = ["root", "rootMargin", "threshold"],
				O = ["root", "rootMargin", "threshold", "disabled"],
				j = Object.prototype,
				w = j.hasOwnProperty,
				x = j.toString,
				_ = function(e) {
					return y.reduce((function(t, r) {
						if (w.call(e, r)) {
							var n = "root" === r && "[object String]" === x.call(e[r]);
							t[r] = n ? document.querySelector(e[r]) : e[r]
						}
						return t
					}), {})
				},
				k = function(e) {
					var t, r;

					function n() {
						for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
						return g(v(t = e.call.apply(e, [this].concat(n)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), g(v(t), "handleNode", (function(e) {
							var r = t.props.children;
							if (null != r) {
								var n = r.ref;
								n && ("function" == typeof n ? n(e) : "object" == typeof n && (n.current = e))
							}
							t.targetNode = e && Object(a.findDOMNode)(e)
						})), g(v(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = d(_(t.props)), t.target = t.targetNode, e = v(t), l.has(e.observer) || l.set(e.observer, new Set), l.get(e.observer).add(e), e.observer.observe(e.target), !0) : (m.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), g(v(t), "unobserve", (function(e) {
							! function(e, t) {
								if (l.has(e.observer)) {
									var r = l.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), l.delete(e.observer)))
								}
							}(v(t), e)
						})), g(v(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
					var i = n.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var r = O.some((function(r) {
							return s(t.props[r], e[r])
						}));
						return r && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), r
					}, i.componentDidUpdate = function(e, t, r) {
						var n = !1;
						r || (n = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (r || n) && this.observe()
					}, i.componentDidMount = function() {
						this.observe()
					}, i.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, i.render = function() {
						var e = this.props.children;
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, n
				}(o.a.Component);
			g(k, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function a() {}
			a.resetWarningCache = o, e.exports = function() {
				function e(e, t, r, o, a, i) {
					if (i !== n) {
						var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw s.name = "Invariant Violation", s
					}
				}

				function t() {
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
					checkPropTypes: a,
					resetWarningCache: o
				};
				return r.PropTypes = r, r
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, r) {
			e.exports = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/deep-diff/index.js": function(e, t, r) {
			var n, o;
			o = function(e) {
				var t = ["N", "E", "A", "D"];

				function r(e, t) {
					e.super_ = t, e.prototype = Object.create(t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})
				}

				function n(e, t) {
					Object.defineProperty(this, "kind", {
						value: e,
						enumerable: !0
					}), t && t.length && Object.defineProperty(this, "path", {
						value: t,
						enumerable: !0
					})
				}

				function o(e, t, r) {
					o.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
						value: t,
						enumerable: !0
					}), Object.defineProperty(this, "rhs", {
						value: r,
						enumerable: !0
					})
				}

				function a(e, t) {
					a.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
						value: t,
						enumerable: !0
					})
				}

				function i(e, t) {
					i.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
						value: t,
						enumerable: !0
					})
				}

				function s(e, t, r) {
					s.super_.call(this, "A", e), Object.defineProperty(this, "index", {
						value: t,
						enumerable: !0
					}), Object.defineProperty(this, "item", {
						value: r,
						enumerable: !0
					})
				}

				function l(e, t, r) {
					var n = e.slice((r || t) + 1 || e.length);
					return e.length = t < 0 ? e.length + t : t, e.push.apply(e, n), e
				}

				function c(e) {
					var t = typeof e;
					return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
				}

				function u(e) {
					var t = 0;
					if (0 === e.length) return t;
					for (var r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r), t &= t;
					return t
				}

				function f(e) {
					var t = 0,
						r = c(e);
					if ("array" === r) return e.forEach((function(e) {
						t += f(e)
					})), t + u("[type: array, hash: " + t + "]");
					if ("object" === r) {
						for (var n in e)
							if (e.hasOwnProperty(n)) {
								var o = "[ type: object, key: " + n + ", value hash: " + f(e[n]) + "]";
								t += u(o)
							} return t
					}
					return t + u("[ type: " + r + " ; value: " + e + "]")
				}

				function d(e, t, r, n, l, u, p, h) {
					r = r || [], p = p || [];
					var b = (l = l || []).slice(0);
					if (null != u) {
						if (n) {
							if ("function" == typeof n && n(b, u)) return;
							if ("object" == typeof n) {
								if (n.prefilter && n.prefilter(b, u)) return;
								if (n.normalize) {
									var m = n.normalize(b, u, e, t);
									m && (e = m[0], t = m[1])
								}
							}
						}
						b.push(u)
					}
					"regexp" === c(e) && "regexp" === c(t) && (e = e.toString(), t = t.toString());
					var v, g, y, O, j = typeof e,
						w = typeof t,
						x = "undefined" !== j || p && p.length > 0 && p[p.length - 1].lhs && Object.getOwnPropertyDescriptor(p[p.length - 1].lhs, u),
						_ = "undefined" !== w || p && p.length > 0 && p[p.length - 1].rhs && Object.getOwnPropertyDescriptor(p[p.length - 1].rhs, u);
					if (!x && _) r.push(new a(b, t));
					else if (!_ && x) r.push(new i(b, e));
					else if (c(e) !== c(t)) r.push(new o(b, e, t));
					else if ("date" === c(e) && e - t != 0) r.push(new o(b, e, t));
					else if ("object" === j && null !== e && null !== t) {
						for (v = p.length - 1; v > -1; --v)
							if (p[v].lhs === e) {
								O = !0;
								break
							} if (O) e !== t && r.push(new o(b, e, t));
						else {
							if (p.push({
									lhs: e,
									rhs: t
								}), Array.isArray(e)) {
								for (h && (e.sort((function(e, t) {
										return f(e) - f(t)
									})), t.sort((function(e, t) {
										return f(e) - f(t)
									}))), v = t.length - 1, g = e.length - 1; v > g;) r.push(new s(b, v, new a(void 0, t[v--])));
								for (; g > v;) r.push(new s(b, g, new i(void 0, e[g--])));
								for (; v >= 0; --v) d(e[v], t[v], r, n, b, v, p, h)
							} else {
								var k = Object.keys(e),
									E = Object.keys(t);
								for (v = 0; v < k.length; ++v) y = k[v], (O = E.indexOf(y)) >= 0 ? (d(e[y], t[y], r, n, b, y, p, h), E[O] = null) : d(e[y], void 0, r, n, b, y, p, h);
								for (v = 0; v < E.length; ++v)(y = E[v]) && d(void 0, t[y], r, n, b, y, p, h)
							}
							p.length = p.length - 1
						}
					} else e !== t && ("number" === j && isNaN(e) && isNaN(t) || r.push(new o(b, e, t)))
				}

				function p(e, t, r, n, o) {
					var a = [];
					if (d(e, t, a, n, null, null, null, o), r)
						for (var i = 0; i < a.length; ++i) r(a[i]);
					return a
				}

				function h(e, t, r, n) {
					var o = p(e, t, n ? function(e) {
						e && n.push(e)
					} : void 0, r);
					return n || (o.length ? o : void 0)
				}

				function b(e, r, n) {
					if (void 0 === n && r && ~t.indexOf(r.kind) && (n = r), e && n && n.kind) {
						for (var o = e, a = -1, i = n.path ? n.path.length - 1 : 0; ++a < i;) void 0 === o[n.path[a]] && (o[n.path[a]] = void 0 !== n.path[a + 1] && "number" == typeof n.path[a + 1] ? [] : {}), o = o[n.path[a]];
						switch (n.kind) {
							case "A":
								n.path && void 0 === o[n.path[a]] && (o[n.path[a]] = []),
									function e(t, r, n) {
										if (n.path && n.path.length) {
											var o, a = t[r],
												i = n.path.length - 1;
											for (o = 0; o < i; o++) a = a[n.path[o]];
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
												e(t[r], n.index, n.item);
												break;
											case "D":
												t = l(t, r);
												break;
											case "E":
											case "N":
												t[r] = n.rhs
										}
										return t
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
				return r(o, n), r(a, n), r(i, n), r(s, n), Object.defineProperties(h, {
					diff: {
						value: h,
						enumerable: !0
					},
					orderIndependentDiff: {
						value: function(e, t, r, n) {
							var o = n ? function(e) {
									e && n.push(e)
								} : void 0,
								a = p(e, t, o, r, !0);
							return n || (a.length ? a : void 0)
						},
						enumerable: !0
					},
					observableDiff: {
						value: p,
						enumerable: !0
					},
					orderIndependentObservableDiff: {
						value: function(e, t, r, n, o, a, i) {
							return d(e, t, r, n, o, a, i, !0)
						},
						enumerable: !0
					},
					orderIndepHash: {
						value: f,
						enumerable: !0
					},
					applyDiff: {
						value: function(e, t, r) {
							e && t && p(e, t, (function(n) {
								r && !r(e, t, n) || b(e, t, n)
							}))
						},
						enumerable: !0
					},
					applyChange: {
						value: b,
						enumerable: !0
					},
					revertChange: {
						value: function(e, t, r) {
							if (e && t && r && r.kind) {
								var n, o, a = e;
								for (o = r.path.length - 1, n = 0; n < o; n++) void 0 === a[r.path[n]] && (a[r.path[n]] = {}), a = a[r.path[n]];
								switch (r.kind) {
									case "A":
										! function e(t, r, n) {
											if (n.path && n.path.length) {
												var o, a = t[r],
													i = n.path.length - 1;
												for (o = 0; o < i; o++) a = a[n.path[o]];
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
													e(t[r], n.index, n.item);
													break;
												case "D":
												case "E":
													t[r] = n.lhs;
													break;
												case "N":
													t = l(t, r)
											}
											return t
										}(a[r.path[n]], r.index, r.item);
										break;
									case "D":
									case "E":
										a[r.path[n]] = r.lhs;
										break;
									case "N":
										delete a[r.path[n]]
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
				}), h.DeepDiff = h, e && (e.DeepDiff = h), h
			}(this), void 0 === (n = function() {
				return o
			}.call(t, r, t, e)) || (e.exports = n)
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
					if (!t(e[r], r, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var r = !0;
				return n(e, (function(e, n, o) {
					return r = !!t(e, n, o)
				})), r
			}
		},
		"./node_modules/lodash/every.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayEvery.js"),
				o = r("./node_modules/lodash/_baseEvery.js"),
				a = r("./node_modules/lodash/_baseIteratee.js"),
				i = r("./node_modules/lodash/isArray.js"),
				s = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, r) {
				var l = i(e) ? n : o;
				return r && s(e, t, r) && (t = void 0), l(e, a(t, 3))
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseFindIndex.js"),
				o = r("./node_modules/lodash/_baseIteratee.js"),
				a = r("./node_modules/lodash/toInteger.js"),
				i = Math.max,
				s = Math.min;
			e.exports = function(e, t, r) {
				var l = null == e ? 0 : e.length;
				if (!l) return -1;
				var c = l - 1;
				return void 0 !== r && (c = a(r), c = r < 0 ? i(l + c, 0) : s(c, l - 1)), n(e, o(t, 3), c, !0)
			}
		},
		"./node_modules/lodash/uniqWith.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, t) {
				return t = "function" == typeof t ? t : void 0, e && e.length ? n(e, void 0, t) : []
			}
		},
		"./node_modules/lodash/xor.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayFilter.js"),
				o = r("./node_modules/lodash/_baseRest.js"),
				a = r("./node_modules/lodash/_baseXor.js"),
				i = r("./node_modules/lodash/isArrayLikeObject.js"),
				s = o((function(e) {
					return a(n(e, i))
				}));
			e.exports = s
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return pe
			}));
			var n = r("./node_modules/react/index.js");

			function o(e) {
				var t = e.getBoundingClientRect();
				return {
					width: t.width,
					height: t.height,
					top: t.top,
					right: t.right,
					bottom: t.bottom,
					left: t.left,
					x: t.left,
					y: t.top
				}
			}

			function a(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function i(e) {
				var t = a(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function s(e) {
				return e instanceof a(e).Element || e instanceof Element
			}

			function l(e) {
				return e instanceof a(e).HTMLElement || e instanceof HTMLElement
			}

			function c(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function u(e) {
				return (s(e) ? e.ownerDocument : e.document).documentElement
			}

			function f(e) {
				return o(u(e)).left + i(e).scrollLeft
			}

			function d(e) {
				return a(e).getComputedStyle(e)
			}

			function p(e) {
				var t = d(e),
					r = t.overflow,
					n = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(r + o + n)
			}

			function h(e, t, r) {
				void 0 === r && (r = !1);
				var n, s, d = u(t),
					h = o(e),
					b = l(t),
					m = {
						scrollLeft: 0,
						scrollTop: 0
					},
					v = {
						x: 0,
						y: 0
					};
				return (b || !b && !r) && (("body" !== c(t) || p(d)) && (m = (n = t) !== a(n) && l(n) ? {
					scrollLeft: (s = n).scrollLeft,
					scrollTop: s.scrollTop
				} : i(n)), l(t) ? ((v = o(t)).x += t.clientLeft, v.y += t.clientTop) : d && (v.x = f(d))), {
					x: h.left + m.scrollLeft - v.x,
					y: h.top + m.scrollTop - v.y,
					width: h.width,
					height: h.height
				}
			}

			function b(e) {
				return {
					x: e.offsetLeft,
					y: e.offsetTop,
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			}

			function m(e) {
				return "html" === c(e) ? e : e.assignedSlot || e.parentNode || e.host || u(e)
			}

			function v(e, t) {
				void 0 === t && (t = []);
				var r = function e(t) {
						return ["html", "body", "#document"].indexOf(c(t)) >= 0 ? t.ownerDocument.body : l(t) && p(t) ? t : e(m(t))
					}(e),
					n = "body" === c(r),
					o = a(r),
					i = n ? [o].concat(o.visualViewport || [], p(r) ? r : []) : r,
					s = t.concat(i);
				return n ? s : s.concat(v(m(i)))
			}

			function g(e) {
				return ["table", "td", "th"].indexOf(c(e)) >= 0
			}

			function y(e) {
				return l(e) && "fixed" !== d(e).position ? e.offsetParent : null
			}

			function O(e) {
				for (var t = a(e), r = y(e); r && g(r) && "static" === d(r).position;) r = y(r);
				return r && "body" === c(r) && "static" === d(r).position ? t : r || function(e) {
					for (var t = m(e); l(t) && ["html", "body"].indexOf(c(t)) < 0;) {
						var r = d(t);
						if ("none" !== r.transform || "none" !== r.perspective || "auto" !== r.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var j = "top",
				w = "bottom",
				x = "right",
				_ = "left",
				k = "auto",
				E = [j, w, x, _],
				D = "start",
				A = "end",
				M = "clippingParents",
				N = "viewport",
				S = "popper",
				L = "reference",
				P = E.reduce((function(e, t) {
					return e.concat([t + "-" + D, t + "-" + A])
				}), []),
				T = [].concat(E, [k]).reduce((function(e, t) {
					return e.concat([t, t + "-" + D, t + "-" + A])
				}), []),
				I = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function R(e) {
				var t = new Map,
					r = new Set,
					n = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					r.has(e.name) || function e(o) {
						r.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(n) {
							if (!r.has(n)) {
								var o = t.get(n);
								o && e(o)
							}
						})), n.push(o)
					}(e)
				})), n
			}
			var C = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function B() {
				for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function U(e) {
				void 0 === e && (e = {});
				var t = e,
					r = t.defaultModifiers,
					n = void 0 === r ? [] : r,
					o = t.defaultOptions,
					a = void 0 === o ? C : o;
				return function(e, t, r) {
					void 0 === r && (r = a);
					var o, i, l = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, C), a),
							modifiersData: {},
							elements: {
								reference: e,
								popper: t
							},
							attributes: {},
							styles: {}
						},
						c = [],
						u = !1,
						f = {
							state: l,
							setOptions: function(r) {
								d(), l.options = Object.assign(Object.assign(Object.assign({}, a), l.options), r), l.scrollParents = {
									reference: s(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
									popper: v(t)
								};
								var o = function(e) {
									var t = R(e);
									return I.reduce((function(e, r) {
										return e.concat(t.filter((function(e) {
											return e.phase === r
										})))
									}), [])
								}(function(e) {
									var t = e.reduce((function(e, t) {
										var r = e[t.name];
										return e[t.name] = r ? Object.assign(Object.assign(Object.assign({}, r), t), {}, {
											options: Object.assign(Object.assign({}, r.options), t.options),
											data: Object.assign(Object.assign({}, r.data), t.data)
										}) : t, e
									}), {});
									return Object.keys(t).map((function(e) {
										return t[e]
									}))
								}([].concat(n, l.options.modifiers)));
								return l.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), l.orderedModifiers.forEach((function(e) {
									var t = e.name,
										r = e.options,
										n = void 0 === r ? {} : r,
										o = e.effect;
									if ("function" == typeof o) {
										var a = o({
											state: l,
											name: t,
											instance: f,
											options: n
										});
										c.push(a || function() {})
									}
								})), f.update()
							},
							forceUpdate: function() {
								if (!u) {
									var e = l.elements,
										t = e.reference,
										r = e.popper;
									if (B(t, r)) {
										l.rects = {
											reference: h(t, O(r), "fixed" === l.options.strategy),
											popper: b(r)
										}, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach((function(e) {
											return l.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var n = 0; n < l.orderedModifiers.length; n++)
											if (!0 !== l.reset) {
												var o = l.orderedModifiers[n],
													a = o.fn,
													i = o.options,
													s = void 0 === i ? {} : i,
													c = o.name;
												"function" == typeof a && (l = a({
													state: l,
													options: s,
													name: c,
													instance: f
												}) || l)
											} else l.reset = !1, n = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									f.forceUpdate(), e(l)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(o())
									}))
								}))), i
							}),
							destroy: function() {
								d(), u = !0
							}
						};
					if (!B(e, t)) return f;

					function d() {
						c.forEach((function(e) {
							return e()
						})), c = []
					}
					return f.setOptions(r).then((function(e) {
						!u && r.onFirstUpdate && r.onFirstUpdate(e)
					})), f
				}
			}
			var W = {
				passive: !0
			};

			function z(e) {
				return e.split("-")[0]
			}

			function H(e) {
				return e.split("-")[1]
			}

			function q(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function F(e) {
				var t, r = e.reference,
					n = e.element,
					o = e.placement,
					a = o ? z(o) : null,
					i = o ? H(o) : null,
					s = r.x + r.width / 2 - n.width / 2,
					l = r.y + r.height / 2 - n.height / 2;
				switch (a) {
					case j:
						t = {
							x: s,
							y: r.y - n.height
						};
						break;
					case w:
						t = {
							x: s,
							y: r.y + r.height
						};
						break;
					case x:
						t = {
							x: r.x + r.width,
							y: l
						};
						break;
					case _:
						t = {
							x: r.x - n.width,
							y: l
						};
						break;
					default:
						t = {
							x: r.x,
							y: r.y
						}
				}
				var c = a ? q(a) : null;
				if (null != c) {
					var u = "y" === c ? "height" : "width";
					switch (i) {
						case D:
							t[c] = Math.floor(t[c]) - Math.floor(r[u] / 2 - n[u] / 2);
							break;
						case A:
							t[c] = Math.floor(t[c]) + Math.ceil(r[u] / 2 - n[u] / 2)
					}
				}
				return t
			}
			var V = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function G(e) {
				var t, r = e.popper,
					n = e.popperRect,
					o = e.placement,
					i = e.offsets,
					s = e.position,
					l = e.gpuAcceleration,
					c = e.adaptive,
					f = function(e) {
						var t = e.x,
							r = e.y,
							n = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * n) / n || 0,
							y: Math.round(r * n) / n || 0
						}
					}(i),
					d = f.x,
					p = f.y,
					h = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					m = _,
					v = j,
					g = window;
				if (c) {
					var y = O(r);
					y === a(r) && (y = u(r)), o === j && (v = w, p -= y.clientHeight - n.height, p *= l ? 1 : -1), o === _ && (m = x, d -= y.clientWidth - n.width, d *= l ? 1 : -1)
				}
				var k, E = Object.assign({
					position: s
				}, c && V);
				return l ? Object.assign(Object.assign({}, E), {}, ((k = {})[v] = b ? "0" : "", k[m] = h ? "0" : "", k.transform = (g.devicePixelRatio || 1) < 2 ? "translate(" + d + "px, " + p + "px)" : "translate3d(" + d + "px, " + p + "px, 0)", k)) : Object.assign(Object.assign({}, E), {}, ((t = {})[v] = b ? p + "px" : "", t[m] = h ? d + "px" : "", t.transform = "", t))
			}
			var $ = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function K(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return $[e]
				}))
			}
			var X = {
				start: "end",
				end: "start"
			};

			function Y(e) {
				return e.replace(/start|end/g, (function(e) {
					return X[e]
				}))
			}

			function Z(e, t) {
				var r = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (r) {
					var n = t;
					do {
						if (n && e.isSameNode(n)) return !0;
						n = n.parentNode || n.host
					} while (n)
				}
				return !1
			}

			function J(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function Q(e, t) {
				return t === N ? J(function(e) {
					var t = a(e),
						r = u(e),
						n = t.visualViewport,
						o = r.clientWidth,
						i = r.clientHeight,
						s = 0,
						l = 0;
					return n && (o = n.width, i = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = n.offsetLeft, l = n.offsetTop)), {
						width: o,
						height: i,
						x: s + f(e),
						y: l
					}
				}(e)) : l(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : J(function(e) {
					var t = u(e),
						r = i(e),
						n = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
						a = Math.max(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
						s = -r.scrollLeft + f(e),
						l = -r.scrollTop;
					return "rtl" === d(n || t).direction && (s += Math.max(t.clientWidth, n ? n.clientWidth : 0) - o), {
						width: o,
						height: a,
						x: s,
						y: l
					}
				}(u(e)))
			}

			function ee(e, t, r) {
				var n = "clippingParents" === t ? function(e) {
						var t = v(e),
							r = ["absolute", "fixed"].indexOf(d(e).position) >= 0 && l(e) ? O(e) : e;
						return s(r) ? t.filter((function(e) {
							return s(e) && Z(e, r)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(n, [r]),
					a = o[0],
					i = o.reduce((function(t, r) {
						var n = Q(e, r);
						return t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t
					}), Q(e, a));
				return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i
			}

			function te(e) {
				return Object.assign(Object.assign({}, {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}), e)
			}

			function re(e, t) {
				return t.reduce((function(t, r) {
					return t[r] = e, t
				}), {})
			}

			function ne(e, t) {
				void 0 === t && (t = {});
				var r = t,
					n = r.placement,
					a = void 0 === n ? e.placement : n,
					i = r.boundary,
					l = void 0 === i ? M : i,
					c = r.rootBoundary,
					f = void 0 === c ? N : c,
					d = r.elementContext,
					p = void 0 === d ? S : d,
					h = r.altBoundary,
					b = void 0 !== h && h,
					m = r.padding,
					v = void 0 === m ? 0 : m,
					g = te("number" != typeof v ? v : re(v, E)),
					y = p === S ? L : S,
					O = e.elements.reference,
					_ = e.rects.popper,
					k = e.elements[b ? y : p],
					D = ee(s(k) ? k : k.contextElement || u(e.elements.popper), l, f),
					A = o(O),
					P = F({
						reference: A,
						element: _,
						strategy: "absolute",
						placement: a
					}),
					T = J(Object.assign(Object.assign({}, _), P)),
					I = p === S ? T : A,
					R = {
						top: D.top - I.top + g.top,
						bottom: I.bottom - D.bottom + g.bottom,
						left: D.left - I.left + g.left,
						right: I.right - D.right + g.right
					},
					C = e.modifiersData.offset;
				if (p === S && C) {
					var B = C[a];
					Object.keys(R).forEach((function(e) {
						var t = [x, w].indexOf(e) >= 0 ? 1 : -1,
							r = [j, w].indexOf(e) >= 0 ? "y" : "x";
						R[e] += B[r] * t
					}))
				}
				return R
			}

			function oe(e, t, r) {
				return Math.max(e, Math.min(t, r))
			}

			function ae(e, t, r) {
				return void 0 === r && (r = {
					x: 0,
					y: 0
				}), {
					top: e.top - t.height - r.y,
					right: e.right - t.width + r.x,
					bottom: e.bottom - t.height + r.y,
					left: e.left - t.width - r.x
				}
			}

			function ie(e) {
				return [j, x, w, _].some((function(t) {
					return e[t] >= 0
				}))
			}
			var se = U({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								r = e.instance,
								n = e.options,
								o = n.scroll,
								i = void 0 === o || o,
								s = n.resize,
								l = void 0 === s || s,
								c = a(t.elements.popper),
								u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && u.forEach((function(e) {
									e.addEventListener("scroll", r.update, W)
								})), l && c.addEventListener("resize", r.update, W),
								function() {
									i && u.forEach((function(e) {
										e.removeEventListener("scroll", r.update, W)
									})), l && c.removeEventListener("resize", r.update, W)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var t = e.state,
								r = e.name;
							t.modifiersData[r] = F({
								reference: t.rects.reference,
								element: t.rects.popper,
								strategy: "absolute",
								placement: t.placement
							})
						},
						data: {}
					}, {
						name: "computeStyles",
						enabled: !0,
						phase: "beforeWrite",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = r.gpuAcceleration,
								o = void 0 === n || n,
								a = r.adaptive,
								i = void 0 === a || a,
								s = {
									placement: z(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), G(Object.assign(Object.assign({}, s), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), G(Object.assign(Object.assign({}, s), {}, {
								offsets: t.modifiersData.arrow,
								position: "absolute",
								adaptive: !1
							})))), t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-placement": t.placement
							})
						},
						data: {}
					}, {
						name: "applyStyles",
						enabled: !0,
						phase: "write",
						fn: function(e) {
							var t = e.state;
							Object.keys(t.elements).forEach((function(e) {
								var r = t.styles[e] || {},
									n = t.attributes[e] || {},
									o = t.elements[e];
								l(o) && c(o) && (Object.assign(o.style, r), Object.keys(n).forEach((function(e) {
									var t = n[e];
									!1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
								})))
							}))
						},
						effect: function(e) {
							var t = e.state,
								r = {
									popper: {
										position: t.options.strategy,
										left: "0",
										top: "0",
										margin: "0"
									},
									arrow: {
										position: "absolute"
									},
									reference: {}
								};
							return Object.assign(t.elements.popper.style, r.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
								function() {
									Object.keys(t.elements).forEach((function(e) {
										var n = t.elements[e],
											o = t.attributes[e] || {},
											a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										l(n) && c(n) && (Object.assign(n.style, a), Object.keys(o).forEach((function(e) {
											n.removeAttribute(e)
										})))
									}))
								}
						},
						requires: ["computeStyles"]
					}, {
						name: "offset",
						enabled: !0,
						phase: "main",
						requires: ["popperOffsets"],
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.offset,
								a = void 0 === o ? [0, 0] : o,
								i = T.reduce((function(e, r) {
									return e[r] = function(e, t, r) {
										var n = z(e),
											o = [_, j].indexOf(n) >= 0 ? -1 : 1,
											a = "function" == typeof r ? r(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : r,
											i = a[0],
											s = a[1];
										return i = i || 0, s = (s || 0) * o, [_, x].indexOf(n) >= 0 ? {
											x: s,
											y: i
										} : {
											x: i,
											y: s
										}
									}(r, t.rects, a), e
								}), {}),
								s = i[t.placement],
								l = s.x,
								c = s.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name;
							if (!t.modifiersData[n]._skip) {
								for (var o = r.mainAxis, a = void 0 === o || o, i = r.altAxis, s = void 0 === i || i, l = r.fallbackPlacements, c = r.padding, u = r.boundary, f = r.rootBoundary, d = r.altBoundary, p = r.flipVariations, h = void 0 === p || p, b = r.allowedAutoPlacements, m = t.options.placement, v = z(m), g = l || (v === m || !h ? [K(m)] : function(e) {
										if (z(e) === k) return [];
										var t = K(e);
										return [Y(e), t, Y(t)]
									}(m)), y = [m].concat(g).reduce((function(e, r) {
										return e.concat(z(r) === k ? function(e, t) {
											void 0 === t && (t = {});
											var r = t,
												n = r.placement,
												o = r.boundary,
												a = r.rootBoundary,
												i = r.padding,
												s = r.flipVariations,
												l = r.allowedAutoPlacements,
												c = void 0 === l ? T : l,
												u = H(n),
												f = (u ? s ? P : P.filter((function(e) {
													return H(e) === u
												})) : E).filter((function(e) {
													return c.indexOf(e) >= 0
												})).reduce((function(t, r) {
													return t[r] = ne(e, {
														placement: r,
														boundary: o,
														rootBoundary: a,
														padding: i
													})[z(r)], t
												}), {});
											return Object.keys(f).sort((function(e, t) {
												return f[e] - f[t]
											}))
										}(t, {
											placement: r,
											boundary: u,
											rootBoundary: f,
											padding: c,
											flipVariations: h,
											allowedAutoPlacements: b
										}) : r)
									}), []), O = t.rects.reference, A = t.rects.popper, M = new Map, N = !0, S = y[0], L = 0; L < y.length; L++) {
									var I = y[L],
										R = z(I),
										C = H(I) === D,
										B = [j, w].indexOf(R) >= 0,
										U = B ? "width" : "height",
										W = ne(t, {
											placement: I,
											boundary: u,
											rootBoundary: f,
											altBoundary: d,
											padding: c
										}),
										q = B ? C ? x : _ : C ? w : j;
									O[U] > A[U] && (q = K(q));
									var F = K(q),
										V = [];
									if (a && V.push(W[R] <= 0), s && V.push(W[q] <= 0, W[F] <= 0), V.every((function(e) {
											return e
										}))) {
										S = I, N = !1;
										break
									}
									M.set(I, V)
								}
								if (N)
									for (var G = function(e) {
											var t = y.find((function(t) {
												var r = M.get(t);
												if (r) return r.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return S = t, "break"
										}, $ = h ? 3 : 1; $ > 0; $--) {
										if ("break" === G($)) break
									}
								t.placement !== S && (t.modifiersData[n]._skip = !0, t.placement = S, t.reset = !0)
							}
						},
						requiresIfExists: ["offset"],
						data: {
							_skip: !1
						}
					}, {
						name: "preventOverflow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.mainAxis,
								a = void 0 === o || o,
								i = r.altAxis,
								s = void 0 !== i && i,
								l = r.boundary,
								c = r.rootBoundary,
								u = r.altBoundary,
								f = r.padding,
								d = r.tether,
								p = void 0 === d || d,
								h = r.tetherOffset,
								m = void 0 === h ? 0 : h,
								v = ne(t, {
									boundary: l,
									rootBoundary: c,
									padding: f,
									altBoundary: u
								}),
								g = z(t.placement),
								y = H(t.placement),
								k = !y,
								E = q(g),
								A = "x" === E ? "y" : "x",
								M = t.modifiersData.popperOffsets,
								N = t.rects.reference,
								S = t.rects.popper,
								L = "function" == typeof m ? m(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : m,
								P = {
									x: 0,
									y: 0
								};
							if (M) {
								if (a) {
									var T = "y" === E ? j : _,
										I = "y" === E ? w : x,
										R = "y" === E ? "height" : "width",
										C = M[E],
										B = M[E] + v[T],
										U = M[E] - v[I],
										W = p ? -S[R] / 2 : 0,
										F = y === D ? N[R] : S[R],
										V = y === D ? -S[R] : -N[R],
										G = t.elements.arrow,
										$ = p && G ? b(G) : {
											width: 0,
											height: 0
										},
										K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										X = K[T],
										Y = K[I],
										Z = oe(0, N[R], $[R]),
										J = k ? N[R] / 2 - W - Z - X - L : F - Z - X - L,
										Q = k ? -N[R] / 2 + W + Z + Y + L : V + Z + Y + L,
										ee = t.elements.arrow && O(t.elements.arrow),
										te = ee ? "y" === E ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										re = t.modifiersData.offset ? t.modifiersData.offset[t.placement][E] : 0,
										ae = M[E] + J - re - te,
										ie = M[E] + Q - re,
										se = oe(p ? Math.min(B, ae) : B, C, p ? Math.max(U, ie) : U);
									M[E] = se, P[E] = se - C
								}
								if (s) {
									var le = "x" === E ? j : _,
										ce = "x" === E ? w : x,
										ue = M[A],
										fe = oe(ue + v[le], ue, ue - v[ce]);
									M[A] = fe, P[A] = fe - ue
								}
								t.modifiersData[n] = P
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, r = e.state,
								n = e.name,
								o = r.elements.arrow,
								a = r.modifiersData.popperOffsets,
								i = z(r.placement),
								s = q(i),
								l = [_, x].indexOf(i) >= 0 ? "height" : "width";
							if (o && a) {
								var c = r.modifiersData[n + "#persistent"].padding,
									u = b(o),
									f = "y" === s ? j : _,
									d = "y" === s ? w : x,
									p = r.rects.reference[l] + r.rects.reference[s] - a[s] - r.rects.popper[l],
									h = a[s] - r.rects.reference[s],
									m = O(o),
									v = m ? "y" === s ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
									g = p / 2 - h / 2,
									y = c[f],
									k = v - u[l] - c[d],
									E = v / 2 - u[l] / 2 + g,
									D = oe(y, E, k),
									A = s;
								r.modifiersData[n] = ((t = {})[A] = D, t.centerOffset = D - E, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.element,
								a = void 0 === o ? "[data-popper-arrow]" : o,
								i = r.padding,
								s = void 0 === i ? 0 : i;
							null != a && ("string" != typeof a || (a = t.elements.popper.querySelector(a))) && Z(t.elements.popper, a) && (t.elements.arrow = a, t.modifiersData[n + "#persistent"] = {
								padding: te("number" != typeof s ? s : re(s, E))
							})
						},
						requires: ["popperOffsets"],
						requiresIfExists: ["preventOverflow"]
					}, {
						name: "hide",
						enabled: !0,
						phase: "main",
						requiresIfExists: ["preventOverflow"],
						fn: function(e) {
							var t = e.state,
								r = e.name,
								n = t.rects.reference,
								o = t.rects.popper,
								a = t.modifiersData.preventOverflow,
								i = ne(t, {
									elementContext: "reference"
								}),
								s = ne(t, {
									altBoundary: !0
								}),
								l = ae(i, n),
								c = ae(s, o, a),
								u = ie(l),
								f = ie(c);
							t.modifiersData[r] = {
								referenceClippingOffsets: l,
								popperEscapeOffsets: c,
								isReferenceHidden: u,
								hasPopperEscaped: f
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": u,
								"data-popper-escaped": f
							})
						}
					}]
				}),
				le = r("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ce = r.n(le),
				ue = function(e) {
					return e.reduce((function(e, t) {
						var r = t[0],
							n = t[1];
						return e[r] = n, e
					}), {})
				},
				fe = "undefined" != typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
				de = [],
				pe = function(e, t, r) {
					void 0 === r && (r = {});
					var o = n.useRef(null),
						a = {
							onFirstUpdate: r.onFirstUpdate,
							placement: r.placement || "bottom",
							strategy: r.strategy || "absolute",
							modifiers: r.modifiers || de
						},
						i = n.useState({
							styles: {
								popper: {
									position: a.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						s = i[0],
						l = i[1],
						c = n.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										r = Object.keys(t.elements);
									l({
										styles: ue(r.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: ue(r.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						u = n.useMemo((function() {
							var e = {
								onFirstUpdate: a.onFirstUpdate,
								placement: a.placement,
								strategy: a.strategy,
								modifiers: [].concat(a.modifiers, [c, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return ce()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, c]),
						f = n.useRef();
					return fe((function() {
						f.current && f.current.setOptions(u)
					}), [u]), fe((function() {
						if (null != e && null != t) {
							var n = (r.createPopper || se)(e, t, u);
							return f.current = n,
								function() {
									n.destroy(), f.current = null
								}
						}
					}), [e, t, r.createPopper]), {
						state: f.current ? f.current.state : null,
						styles: s.styles,
						attributes: s.attributes,
						update: f.current ? f.current.update : null,
						forceUpdate: f.current ? f.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var r = "undefined" != typeof Element,
				n = "function" == typeof Map,
				o = "function" == typeof Set,
				a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, i) {
						if (t === i) return !0;
						if (t && i && "object" == typeof t && "object" == typeof i) {
							if (t.constructor !== i.constructor) return !1;
							var s, l, c, u;
							if (Array.isArray(t)) {
								if ((s = t.length) != i.length) return !1;
								for (l = s; 0 != l--;)
									if (!e(t[l], i[l])) return !1;
								return !0
							}
							if (n && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (u = t.entries(); !(l = u.next()).done;)
									if (!i.has(l.value[0])) return !1;
								for (u = t.entries(); !(l = u.next()).done;)
									if (!e(l.value[1], i.get(l.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (u = t.entries(); !(l = u.next()).done;)
									if (!i.has(l.value[0])) return !1;
								return !0
							}
							if (a && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
								if ((s = t.length) != i.length) return !1;
								for (l = s; 0 != l--;)
									if (t[l] !== i[l]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
							if ((s = (c = Object.keys(t)).length) !== Object.keys(i).length) return !1;
							for (l = s; 0 != l--;)
								if (!Object.prototype.hasOwnProperty.call(i, c[l])) return !1;
							if (r && t instanceof Element) return !1;
							for (l = s; 0 != l--;)
								if (("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l] || !t.$$typeof) && !e(t[c[l]], i[c[l]])) return !1;
							return !0
						}
						return t != t && i != i
					}(e, t)
				} catch (i) {
					if ((i.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw i
				}
			}
		},
		"./node_modules/uuid/index.js": function(e, t, r) {
			var n = r("./node_modules/uuid/v1.js"),
				o = r("./node_modules/uuid/v4.js"),
				a = o;
			a.v1 = n, a.v4 = o, e.exports = a
		},
		"./node_modules/uuid/v1.js": function(e, t, r) {
			var n, o, a = r("./node_modules/uuid/lib/rng-browser.js"),
				i = r("./node_modules/uuid/lib/bytesToUuid.js"),
				s = 0,
				l = 0;
			e.exports = function(e, t, r) {
				var c = t && r || 0,
					u = t || [],
					f = (e = e || {}).node || n,
					d = void 0 !== e.clockseq ? e.clockseq : o;
				if (null == f || null == d) {
					var p = a();
					null == f && (f = n = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]), null == d && (d = o = 16383 & (p[6] << 8 | p[7]))
				}
				var h = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					b = void 0 !== e.nsecs ? e.nsecs : l + 1,
					m = h - s + (b - l) / 1e4;
				if (m < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (m < 0 || h > s) && void 0 === e.nsecs && (b = 0), b >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				s = h, l = b, o = d;
				var v = (1e4 * (268435455 & (h += 122192928e5)) + b) % 4294967296;
				u[c++] = v >>> 24 & 255, u[c++] = v >>> 16 & 255, u[c++] = v >>> 8 & 255, u[c++] = 255 & v;
				var g = h / 4294967296 * 1e4 & 268435455;
				u[c++] = g >>> 8 & 255, u[c++] = 255 & g, u[c++] = g >>> 24 & 15 | 16, u[c++] = g >>> 16 & 255, u[c++] = d >>> 8 | 128, u[c++] = 255 & d;
				for (var y = 0; y < 6; ++y) u[c + y] = f[y];
				return t || i(u)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e.506a3ece88e0a905b7a3.js.map