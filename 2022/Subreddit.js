// https://www.redditstatic.com/desktop2x/Subreddit.09cc253b11c38fbf11c9.js
// Retrieved at 9/14/2022, 6:00:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "AchievementsActions", "reddit-components-Econ-PredictionLeaderboard-Sidebar"], {
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isPseudoLocale = t.isISOLocaleSupported = t.toISOLocale = t.isoLocaleToR2Language = void 0;
			const r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = new Set([{
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
				a = Object.keys(o).reduce((e, t) => (s.has(t) && (e[t] = o[t]), e), {}),
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
				let r = n.toLowerCase();
				const s = t[2];
				return s && (r = `${r}-${s.toUpperCase()}`), r
			};
			const c = new Set(Object.keys(i));
			t.isISOLocaleSupported = e => !!e && c.has(e), t.isPseudoLocale = e => !!e && (e === r.PSEUDO_AUTO || Object.values(r.PseudoLocale).includes(e))
		},
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-dom/index.js"),
				a = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function i(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, r) {
					return i(e[r], t[r])
				})) : e !== t
			}
			var c = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, r = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							r = void 0 === n ? "0px" : n,
							s = t[1],
							o = void 0 === s ? r : s,
							i = t[2],
							c = void 0 === i ? r : i,
							d = t[3];
						return r + " " + o + " " + c + " " + (void 0 === d ? o : d)
					}(e.rootMargin), s = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], o = c.keys(); t = o.next().value;) {
					if (!(n !== t.root || r !== t.rootMargin || i(s, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = c.get(e);
				if (n)
					for (var r, s = n.values(); r = s.next().value;)
						if (r.target === t.target) return r;
				return null
			}

			function u(e, t) {
				for (var n = 0; n < e.length; n++) {
					var r = l(t, e[n]);
					r && r.handleChange(e[n])
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
				E = ["root", "rootMargin", "threshold", "disabled"],
				y = Object.prototype,
				_ = y.hasOwnProperty,
				O = y.toString,
				j = function(e) {
					return v.reduce((function(t, n) {
						if (_.call(e, n)) {
							var r = "root" === n && "[object String]" === O.call(e[n]);
							t[n] = r ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				C = function(e) {
					var t, n;

					function r() {
						for (var t, n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
						return x(g(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), x(g(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var r = n.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(o.findDOMNode)(e)
						})), x(g(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = m(j(t.props)), t.target = t.targetNode, e = g(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (f.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
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
					n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var a = r.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = E.some((function(n) {
							return i(t.props[n], e[n])
						}));
						return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n
					}, a.componentDidUpdate = function(e, t, n) {
						var r = !1;
						n || (r = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (n || r) && this.observe()
					}, a.componentDidMount = function() {
						this.observe()
					}, a.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, a.render = function() {
						var e = this.props.children;
						return null != e ? s.a.cloneElement(s.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(s.a.Component);
			x(C, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function o() {}
			o.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, o, a) {
					if (a !== r) {
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
					resetWarningCache: s
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
		"./node_modules/deep-diff/index.js": function(e, t, n) {
			var r, s;
			s = function(e) {
				var t = ["N", "E", "A", "D"];

				function n(e, t) {
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

				function s(e, t, n) {
					s.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
						value: t,
						enumerable: !0
					}), Object.defineProperty(this, "rhs", {
						value: n,
						enumerable: !0
					})
				}

				function o(e, t) {
					o.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
						value: t,
						enumerable: !0
					})
				}

				function a(e, t) {
					a.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
						value: t,
						enumerable: !0
					})
				}

				function i(e, t, n) {
					i.super_.call(this, "A", e), Object.defineProperty(this, "index", {
						value: t,
						enumerable: !0
					}), Object.defineProperty(this, "item", {
						value: n,
						enumerable: !0
					})
				}

				function c(e, t, n) {
					var r = e.slice((n || t) + 1 || e.length);
					return e.length = t < 0 ? e.length + t : t, e.push.apply(e, r), e
				}

				function d(e) {
					var t = typeof e;
					return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
				}

				function l(e) {
					var t = 0;
					if (0 === e.length) return t;
					for (var n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t &= t;
					return t
				}

				function u(e) {
					var t = 0,
						n = d(e);
					if ("array" === n) return e.forEach((function(e) {
						t += u(e)
					})), t + l("[type: array, hash: " + t + "]");
					if ("object" === n) {
						for (var r in e)
							if (e.hasOwnProperty(r)) {
								var s = "[ type: object, key: " + r + ", value hash: " + u(e[r]) + "]";
								t += l(s)
							} return t
					}
					return t + l("[ type: " + n + " ; value: " + e + "]")
				}

				function m(e, t, n, r, c, l, p, b) {
					n = n || [], p = p || [];
					var h = (c = c || []).slice(0);
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
					"regexp" === d(e) && "regexp" === d(t) && (e = e.toString(), t = t.toString());
					var g, x, v, E, y = typeof e,
						_ = typeof t,
						O = "undefined" !== y || p && p.length > 0 && p[p.length - 1].lhs && Object.getOwnPropertyDescriptor(p[p.length - 1].lhs, l),
						j = "undefined" !== _ || p && p.length > 0 && p[p.length - 1].rhs && Object.getOwnPropertyDescriptor(p[p.length - 1].rhs, l);
					if (!O && j) n.push(new o(h, t));
					else if (!j && O) n.push(new a(h, e));
					else if (d(e) !== d(t)) n.push(new s(h, e, t));
					else if ("date" === d(e) && e - t != 0) n.push(new s(h, e, t));
					else if ("object" === y && null !== e && null !== t) {
						for (g = p.length - 1; g > -1; --g)
							if (p[g].lhs === e) {
								E = !0;
								break
							} if (E) e !== t && n.push(new s(h, e, t));
						else {
							if (p.push({
									lhs: e,
									rhs: t
								}), Array.isArray(e)) {
								for (b && (e.sort((function(e, t) {
										return u(e) - u(t)
									})), t.sort((function(e, t) {
										return u(e) - u(t)
									}))), g = t.length - 1, x = e.length - 1; g > x;) n.push(new i(h, g, new o(void 0, t[g--])));
								for (; x > g;) n.push(new i(h, x, new a(void 0, e[x--])));
								for (; g >= 0; --g) m(e[g], t[g], n, r, h, g, p, b)
							} else {
								var C = Object.keys(e),
									N = Object.keys(t);
								for (g = 0; g < C.length; ++g) v = C[g], (E = N.indexOf(v)) >= 0 ? (m(e[v], t[v], n, r, h, v, p, b), N[E] = null) : m(e[v], void 0, n, r, h, v, p, b);
								for (g = 0; g < N.length; ++g)(v = N[g]) && m(void 0, t[v], n, r, h, v, p, b)
							}
							p.length = p.length - 1
						}
					} else e !== t && ("number" === y && isNaN(e) && isNaN(t) || n.push(new s(h, e, t)))
				}

				function p(e, t, n, r, s) {
					var o = [];
					if (m(e, t, o, r, null, null, null, s), n)
						for (var a = 0; a < o.length; ++a) n(o[a]);
					return o
				}

				function b(e, t, n, r) {
					var s = p(e, t, r ? function(e) {
						e && r.push(e)
					} : void 0, n);
					return r || (s.length ? s : void 0)
				}

				function h(e, n, r) {
					if (void 0 === r && n && ~t.indexOf(n.kind) && (r = n), e && r && r.kind) {
						for (var s = e, o = -1, a = r.path ? r.path.length - 1 : 0; ++o < a;) void 0 === s[r.path[o]] && (s[r.path[o]] = void 0 !== r.path[o + 1] && "number" == typeof r.path[o + 1] ? [] : {}), s = s[r.path[o]];
						switch (r.kind) {
							case "A":
								r.path && void 0 === s[r.path[o]] && (s[r.path[o]] = []),
									function e(t, n, r) {
										if (r.path && r.path.length) {
											var s, o = t[n],
												a = r.path.length - 1;
											for (s = 0; s < a; s++) o = o[r.path[s]];
											switch (r.kind) {
												case "A":
													e(o[r.path[s]], r.index, r.item);
													break;
												case "D":
													delete o[r.path[s]];
													break;
												case "E":
												case "N":
													o[r.path[s]] = r.rhs
											}
										} else switch (r.kind) {
											case "A":
												e(t[n], r.index, r.item);
												break;
											case "D":
												t = c(t, n);
												break;
											case "E":
											case "N":
												t[n] = r.rhs
										}
										return t
									}(r.path ? s[r.path[o]] : s, r.index, r.item);
								break;
							case "D":
								delete s[r.path[o]];
								break;
							case "E":
							case "N":
								s[r.path[o]] = r.rhs
						}
					}
				}
				return n(s, r), n(o, r), n(a, r), n(i, r), Object.defineProperties(b, {
					diff: {
						value: b,
						enumerable: !0
					},
					orderIndependentDiff: {
						value: function(e, t, n, r) {
							var s = r ? function(e) {
									e && r.push(e)
								} : void 0,
								o = p(e, t, s, n, !0);
							return r || (o.length ? o : void 0)
						},
						enumerable: !0
					},
					observableDiff: {
						value: p,
						enumerable: !0
					},
					orderIndependentObservableDiff: {
						value: function(e, t, n, r, s, o, a) {
							return m(e, t, n, r, s, o, a, !0)
						},
						enumerable: !0
					},
					orderIndepHash: {
						value: u,
						enumerable: !0
					},
					applyDiff: {
						value: function(e, t, n) {
							e && t && p(e, t, (function(r) {
								n && !n(e, t, r) || h(e, t, r)
							}))
						},
						enumerable: !0
					},
					applyChange: {
						value: h,
						enumerable: !0
					},
					revertChange: {
						value: function(e, t, n) {
							if (e && t && n && n.kind) {
								var r, s, o = e;
								for (s = n.path.length - 1, r = 0; r < s; r++) void 0 === o[n.path[r]] && (o[n.path[r]] = {}), o = o[n.path[r]];
								switch (n.kind) {
									case "A":
										! function e(t, n, r) {
											if (r.path && r.path.length) {
												var s, o = t[n],
													a = r.path.length - 1;
												for (s = 0; s < a; s++) o = o[r.path[s]];
												switch (r.kind) {
													case "A":
														e(o[r.path[s]], r.index, r.item);
														break;
													case "D":
													case "E":
														o[r.path[s]] = r.lhs;
														break;
													case "N":
														delete o[r.path[s]]
												}
											} else switch (r.kind) {
												case "A":
													e(t[n], r.index, r.item);
													break;
												case "D":
												case "E":
													t[n] = r.lhs;
													break;
												case "N":
													t = c(t, n)
											}
											return t
										}(o[n.path[r]], n.index, n.item);
										break;
									case "D":
									case "E":
										o[n.path[r]] = n.lhs;
										break;
									case "N":
										delete o[n.path[r]]
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
			}(this), void 0 === (r = function() {
				return s
			}.call(t, n, t, e)) || (e.exports = r)
		},
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/_copyArray.js"),
				o = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return o(s(e), r(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				r = Math.random;
			e.exports = function(e, t) {
				return e + n(r() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/_shuffleSelf.js"),
				o = n("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var n = o(e);
				return s(n, r(t, 0, n.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					s = e.length,
					o = s - 1;
				for (t = void 0 === t ? s : t; ++n < t;) {
					var a = r(n, o),
						i = e[a];
					e[a] = e[n], e[n] = i
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFindIndex.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				a = Math.max,
				i = Math.min;
			e.exports = function(e, t, n) {
				var c = null == e ? 0 : e.length;
				if (!c) return -1;
				var d = c - 1;
				return void 0 !== n && (d = o(n), d = n < 0 ? a(c + d, 0) : i(d, c - 1)), r(e, s(t, 3), d, !0)
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js"),
				a = parseFloat,
				i = Math.min,
				c = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && s(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (n || e % 1 || t % 1) {
					var l = c();
					return i(e + l * (t - e + a("1e-" + ((l + "").length - 1))), t)
				}
				return r(e, t)
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arraySampleSize.js"),
				s = n("./node_modules/lodash/_baseSampleSize.js"),
				o = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js"),
				i = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return t = (n ? a(e, t, n) : void 0 === t) ? 1 : i(t), (o(e) ? r : s)(e, t)
			}
		},
		"./node_modules/lodash/uniqWith.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, t) {
				return t = "function" == typeof t ? t : void 0, e && e.length ? r(e, void 0, t) : []
			}
		},
		"./node_modules/lodash/xor.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayFilter.js"),
				s = n("./node_modules/lodash/_baseRest.js"),
				o = n("./node_modules/lodash/_baseXor.js"),
				a = n("./node_modules/lodash/isArrayLikeObject.js"),
				i = s((function(e) {
					return o(r(e, a))
				}));
			e.exports = i
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
						active: r,
						hover: a
					} = e;
				return s.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[c.a.disable]: n,
						[c.a.active]: r,
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
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/elementIds.ts");
			const s = () => {
					const e = document.getElementById(r.a);
					e && (e.style.filter = "blur(10px)")
				},
				o = () => {
					const e = document.getElementById(r.a);
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = e => {
				let {
					className: t,
					shouldBlurBackground: n,
					isVisible: r,
					...o
				} = e;
				return s.a.createElement("div", b({
					className: Object(a.a)(p.a.overlay, t, {
						[p.a.mIsVisible]: r,
						[p.a.mIsBlurred]: n
					})
				}, o))
			};

			function f(e) {
				class t extends r.Component {
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
							ignoreDefaultFocus: r,
							onOverlayClick: o,
							overlayClassName: i,
							overlayCustomStyles: d,
							shouldBlurBackground: u,
							withOverlay: m,
							...b
						} = t, f = b;
						return s.a.createElement(c.a, {
							container: document.getElementById(l.b)
						}, s.a.createElement(h, {
							className: i,
							isVisible: m,
							onClick: this.onOverlayClick,
							shouldBlurBackground: u,
							style: d
						}, s.a.createElement("div", {
							"aria-modal": !0,
							className: Object(a.a)(p.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, s.a.createElement(e, f))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => s.a.createElement(e, t)
			}
		},
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const i = e => (e, t, n) => ({
				...a.o(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: a.d(e),
				adblock: a.e(e),
				app: a.f(e),
				feed: a.r(e),
				geo: a.t(e),
				platform: a.I(e),
				referrer: a.Y(e),
				request: a.Z(e),
				screen: a.bb(e),
				session: a.fb(e),
				user: a.rb(e),
				media: n ? a.C(e, n) : null,
				post: n ? a.K(e, n) : null
			});
			var c = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = n("./src/telemetry/index.ts");
			const l = new Set;

			function u(e) {
				function t(t) {
					const n = Object(o.f)().getState(),
						{
							post: r
						} = {
							...t
						};
					return r && r.isSponsored ? s.a.createElement("div", {
						onClickCapture: function(e, r) {
							var s, o;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const a = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : c.a.UNKNOWN
							}(e.target);
							a && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(a, c.b) ? Object(d.a)(i(r)(n, a, null === (o = t.post) || void 0 === o ? void 0 : o.postId)) : Object(d.a)(i(r)(n, c.a.UNKNOWN, null === (s = t.post) || void 0 === s ? void 0 : s.postId)))
						}
					}, s.a.createElement(e, t)) : s.a.createElement(e, t)
				}
				const n = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${n})`, t
			}
		},
		"./src/lib/FocusTrap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = ['input:not([type="hidden"]):not([disabled])', "select:not([disabled])", "textarea:not([disabled])", "a[href]", "button:not([disabled])", '[tabindex]:not([tabindex="-1"]):not([disabled])', "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join();
			class s {
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
					const e = this.container.querySelectorAll(r);
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
				return s
			}));
			class r {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class s {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new s(t);
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
					const n = t instanceof r ? t : new r(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					n.prev = s, n.next = s.next, s.next = n, n.next && (n.next.prev = n);
					const o = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof r ? t : new r(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					n.next = s, n.prev = s.prev, s.prev = n, n.prev && (n.prev.next = n);
					const o = t instanceof r ? t.value[this.key] : t[this.key];
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
					const t = e instanceof r ? e : new r(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof r ? t.value[this.key] : e[this.key];
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
					const t = e instanceof r ? e : new r(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof r ? t.value[this.key] : e[this.key];
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
				return s
			}));
			var r = n("./node_modules/react/index.js");

			function s(e, t) {
				const n = Object(r.useCallback)(n => {
					if (!t) return;
					const r = document.getElementById(e);
					r && (r.contains(n.target) || t(n))
				}, [e, t]);
				Object(r.useEffect)(() => {
					if (t) return window.addEventListener("click", n), () => {
						window.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js");

			function s(e) {
				const t = Object(r.useRef)();
				return Object(r.useEffect)(() => {
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
			var r = n("./node_modules/icepick/icepick.js"),
				s = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(r.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(r.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(s.useState)(null), [a, c] = Object(s.useState)(null), [d, l] = Object(s.useState)(null), [u, m] = Object(s.useState)(!1), p = Object(s.useCallback)(async () => m(!0), []), b = Object(s.useCallback)(() => m(!1), []), h = Object(s.useCallback)(() => m(!u), [u]), f = Object(s.useMemo)(() => {
					const t = i(e);
					return d ? Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, {
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
				return Object(s.useMemo)(() => ({
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
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return O
			}));
			var r = n("./node_modules/linkify-it/index.js"),
				s = n.n(r),
				o = n("./node_modules/tlds/index.js"),
				a = n.n(o),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./node_modules/lodash/values.js"),
				d = n.n(c);
			const l = e => d()(i.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				b = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				f = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				g = s()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				x = s()().tlds(a.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const E = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				y = e => {
					return [...f.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				O = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const o = Object(s.e)(e),
					a = encodeURIComponent(`${t}${o}`);
				return `${r.a.accountManagerOrigin}${n||"/login"}?dest=${a}`
			}
		},
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var r = n("./node_modules/react/index.js");

			function s() {
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
					const e = Object(u.a)(c.Mc.Bottom_cell),
						t = Object(u.a)(c.Mc.Bottom_cell_dismissible),
						n = Object(u.a)(c.Mc.Bottom_cell_dismissible_immediate_trigger),
						r = Object(u.a)(c.Mc.Bottom_cell_signup_upsell_copy),
						s = Object(u.a)(c.Mc.Bottom_cell_surprise_install_copy),
						o = Object(u.a)(c.Mc.Bottom_sheet);
					return e || r || s ? l.b.SignupUpsellCell : t || n ? l.b.SignupUpsellCellDismissible : o ? l.b.SignupUpsellBottomSheet : null
				},
				p = n("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
						} = Object(d.a)(), n = m(), o = Object(p.a)(n), l = Object(u.a)(c.Mc.Bottom_cell_dismissible_immediate_trigger);
						return r.useMemo(() => a()(() => {
							if (!o && n) {
								const e = document.getElementById(i.e),
									r = e ? e.scrollTop : s().scrollY,
									o = s().innerHeight,
									a = o / 3,
									c = 2 * o;
								r >= (l ? a : c) && t(n)
							}
						}, e, {
							maxWait: h
						}), [l, o, n, t, e])
					}();
					return r.createElement(e, f({
						showSignupUpsell: n
					}, t))
				}
				return n.displayName = `withShowSignupUpsell(${t})`, n
			}
		},
		"./src/lib/pubsub/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			class r {
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
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
					this.listenerMap[e].push(...n)
				}
				removeListeners(e) {
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const s = n.length,
						o = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - o === s
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = e => {
					let t = 0,
						n = 0;
					const r = [0];
					for (const s of e) t++, n += s.length, r[t] = n;
					return r
				},
				s = e => {
					let t = 0,
						n = 0;
					const r = [];
					for (const s of e) {
						for (let e = 0; e < s.length; e++) r[n] = t, n++;
						t++
					}
					return r[n] = t, r
				}
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return _
			})), n.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return O
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return j
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return C
			})), n.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return N
			})), n.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return k
			})), n.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return w
			})), n.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return S
			})), n.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return I
			})), n.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return P
			})), n.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return T
			})), n.d(t, "setSubredditUserAchievementFlair", (function() {
				return L
			})), n.d(t, "setSubredditUserSupporterFlair", (function() {
				return B
			})), n.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return M
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/SubredditUserAchievements.json"),
				c = n("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const d = async (e, t, n, r) => {
				const s = await Object(a.a)(e, {
					...c,
					variables: {
						subredditId: t,
						flairTypes: n,
						isHidden: r
					}
				});
				if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = n("./src/reddit/actions/gold/achievementFlairs.ts"),
				u = n("./src/reddit/actions/gold/powerups.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/experiments/econ/index.ts"),
				f = n("./src/reddit/selectors/gold/powerups/index.ts"),
				g = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/actions/economics/powerups/constants.ts"),
				E = n("./src/lib/initializeClient/installReducer.ts"),
				y = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(E.a)({
				features: {
					powerups: y.a
				}
			});
			const _ = Object(s.a)(v.d),
				O = Object(s.a)(v.i),
				j = Object(s.a)(v.f),
				C = Object(s.a)(v.g),
				N = Object(s.a)(v.e),
				k = Object(s.a)(v.h),
				w = (e, t) => async (n, r, s) => {
					let {
						gqlContext: c
					} = s;
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = await (async (e, t, n) => {
								const r = await Object(a.a)(e, {
									...i,
									variables: {
										subredditId: t,
										redditorIds: n,
										includeSupporterInfo: !0
									}
								});
								if (!r.ok) throw new Error("Unable to fetch user achievements");
								return r.body.data
							})(c(), e, d),
							{
								subredditInfoById: r,
								redditorsInfoByIds: s
							} = t;
						await n(_(r)), s && await n(O(s))
					} catch (l) {
						o.c.captureException(l)
					}
				}, S = (e, t) => async (n, r) => {
					if (!e) return;
					const s = r(),
						o = Object(x.k)(s);
					if (!o || !Object(f.m)(s, {
							subredditId: e
						})) return;
					const a = !!Object(g.f)(s, {
						subredditId: e,
						userId: o.id
					});
					!t && a || await n(w(e, [o.id]))
				}, I = e => async (t, n) => !!e && (Object(h.f)(n()) ? (await t(Object(l.c)(e)), !!Object(g.d)(n(), {
					subredditId: e
				})) : (await t(Object(u.j)(e, {
					fullData: !0
				})), Object(f.f)(n(), {
					subredditId: e
				}))), P = e => async (t, n) => {
					var r;
					const s = n(),
						o = e.map(e => {
							let {
								id: t
							} = e;
							return t
						}),
						a = Object(b.d)(s, {
							commentIds: o
						}),
						i = null === (r = a.find(e => e && e.subredditId)) || void 0 === r ? void 0 : r.subredditId;
					if (!(await t(I(i)))) return;
					const c = new Set(a.filter(e => !!(null == e ? void 0 : e.authorId)).map(e => {
						let {
							authorId: t
						} = e;
						return t
					}));
					await t(w(i, Array.from(c)))
				}, T = (e, t) => async (n, r) => {
					if (!t) return;
					if (!(await n(I(e)))) return;
					const s = new Set;
					Object.values(t).forEach(e => {
						s.add(e.authorId)
					}), await n(w(e, Array.from(s)))
				}, L = (e, t) => async (n, r) => {
					const s = r(),
						o = Object(x.k)(s);
					if (!o) return;
					const a = o.id,
						i = Object(g.i)(s, {
							subredditId: e,
							userId: a
						});
					n(A({
						subredditId: e,
						userId: a,
						achievementFlairType: t,
						supporterFlairType: i
					}))
				}, B = (e, t) => async (n, r) => {
					const s = r(),
						o = Object(x.k)(s);
					if (!o) return;
					const a = o.id,
						i = Object(g.h)(s, {
							subredditId: e,
							userId: a
						});
					n(A({
						subredditId: e,
						userId: a,
						achievementFlairType: i,
						supporterFlairType: t
					}))
				}, A = e => async (t, n, s) => {
					let {
						gqlContext: a
					} = s;
					const i = n(),
						c = Object(x.k)(i);
					if (!c) return;
					const l = c.id;
					t(j(e));
					const {
						subredditId: u,
						achievementFlairType: b,
						supporterFlairType: h
					} = e, f = [b, h].filter(Boolean), v = Object(g.e)(i, {
						subredditId: u,
						userId: l
					});
					try {
						await d(a(), u, f, v), t(C(e))
					} catch (E) {
						t(N(e)), o.c.captureException(E), t(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: r.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, M = (e, t) => async (n, s, a) => {
					let {
						gqlContext: i
					} = a;
					const c = s(),
						l = Object(x.k)(c);
					if (!l) return;
					const u = l.id,
						b = {
							subredditId: e,
							userId: u
						},
						h = [Object(g.h)(c, b), Object(g.i)(c, b)].filter(Boolean);
					n(k({
						...b,
						isHidden: t
					}));
					try {
						await d(i(), e, h, t)
					} catch (f) {
						n(k({
							...b,
							isHidden: !t
						})), o.c.captureException(f), n(Object(m.f)({
							duration: m.a,
							kind: p.b.Error,
							text: r.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				o = "EMBEDS__LOADABLE",
				a = Object(r.a)(s),
				i = Object(r.a)(o)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "b", (function() {
				return N
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/performanceTimings/index.tsx"),
				a = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.a)(a.g),
				f = Object(s.a)(a.e),
				g = Object(s.a)(a.h),
				x = Object(s.a)(a.c),
				v = Object(s.a)(a.f),
				E = Object(s.a)(a.j),
				y = Object(s.a)(a.i),
				_ = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						a = Object(m.e)(o),
						d = Object(m.d)(o),
						p = Object(b.P)(o);
					if (a || !d) return;
					e(g());
					let v = !1;
					try {
						const t = p ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, n) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (O(t)) {
								if (j(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), v = !0
								} else if (C(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: s,
											category: o
										} = n.focusRecommendations[0],
										a = [r, s],
										i = Object(u.d)(a),
										c = Object(l.b)(a),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [s.id],
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
					} catch (E) {
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
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !j(e) && r === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, N = () => async (e, t, n) => {
					var r, s;
					const a = t(),
						i = Object(m.g)(a);
					if (Object(m.f)(a) || null === i || "client" === i) {
						const n = null === (s = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
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
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/models/Media/index.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const o = "POSTLIST__MARKED_END",
				a = "POSTLIST__UNMARKED_END",
				i = Object(r.a)(o),
				c = Object(r.a)(a),
				d = (e, t) => async (n, r) => {
					const o = r();
					e in o.listings.postOrder.fetchedTokens ? e in o.listings.postOrder.ids ? n(c({
						listingKey: e
					})) : s.l(o, e) : n(i({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/blade.ts"),
				d = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(s.a)(a.x),
				f = Object(s.a)(a.y),
				g = Object(s.a)(a.w),
				x = (e, t, n) => async (r, s, o) => {
					const a = Object(p.A)(s(), {
						subredditName: e
					});
					if (a) return E(a.id, t, n)(r, s, o)
				}, v = () => r.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), E = (e, t, n) => async (s, a, p) => {
					const x = await Object(l.e)(t);
					s(h());
					const E = a();
					try {
						await Object(o.g)("communityIcon", x, e)(s, a, p)
					} catch (_) {
						return Object(b.a)(Object(d.c)(E, "something went wrong with the uploading the image")), s(Object(i.f)({
							kind: u.b.Error,
							text: v()
						})), void s(g())
					}
					const y = Object(m.c)(a(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(d.c)(E, "image is null")), s(Object(i.f)({
						kind: u.b.Error,
						text: v()
					})), void s(g());
					await Object(o.k)(e, {
						communityIcon: y
					}, c.b.idCard, n)(s, a, p), s(Object(i.f)({
						kind: u.b.SuccessCommunity,
						text: r.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), s(f())
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js");
			const a = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, a, i) => {
					let {
						routes: c
					} = i;
					const d = a();
					Object(r.a)(e, c, d) ? n(Object(o.b)(e)) : t ? Object(s.e)(e, "_blank") : window.location.assign(e)
				}
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				E = 500,
				y = [g.a.iconCarouselInnerWrapper0, g.a.iconCarouselInnerWrapper1];

			function _(e) {
				let {
					asset: t
				} = e;
				return s.a.createElement("div", {
					className: g.a.awardIcon,
					style: {
						backgroundImage: `url('${t}')`
					}
				})
			}
			const O = Object(m.c)({
				awards: e => e.awards.models
			});
			class j extends r.Component {
				constructor(e) {
					super(e), this.state = {
						animationClass: y[0],
						icons: []
					}
				}
				componentDidMount() {
					this.timerId = setInterval(() => this.updateOrdering(), v + E)
				}
				componentWillUnmount() {
					clearInterval(this.timerId)
				}
				updateOrdering() {
					this.setState(e => {
						const t = [...e.icons];
						return t.unshift(t.pop()), {
							icons: t,
							animationClass: e.animationClass === y[0] ? y[1] : y[0]
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
							return s.a.createElement(_, {
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
					return s.a.createElement("div", {
						className: g.a.iconCarouselWrapper
					}, s.a.createElement("div", {
						className: e
					}, t))
				}
			}
			var C = Object(u.b)(O)(j);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var k;
			! function(e) {
				e.Dismissed = "dismissed", e.Hidden = "hidden", e.Visible = "visible"
			}(k || (k = {}));
			t.a = e => {
				const {
					className: t
				} = e, n = Object(c.f)(a.a.AWARDED_LISTING_BANNER, i.g), [u, m] = Object(r.useState)(n ? k.Hidden : k.Visible);
				if (u === k.Hidden) return null;
				const p = () => {
					m(k.Visible), Object(c.mb)(a.a.AWARDED_LISTING_BANNER, !1, i.g)
				};
				return u === k.Dismissed ? s.a.createElement("div", {
					className: Object(o.a)(g.a.dismissedContainer, t)
				}, s.a.createElement("div", {
					className: g.a.dismissedText
				}, N._("Ok, we won't show you this again.", null, {
					hk: "4z33KK"
				})), s.a.createElement(d.l, {
					onClick: p
				}, N._("undo", null, {
					hk: "1A9z3Y"
				}))) : s.a.createElement("div", {
					className: Object(o.a)(g.a.container, t)
				}, s.a.createElement("h2", {
					className: g.a.title
				}, N._("Explore and react to the top awarded posts on Reddit", null, {
					hk: "3IAtgk"
				})), s.a.createElement(C, null), s.a.createElement(l.a, {
					className: g.a.close,
					onClick: () => {
						m(k.Dismissed), Object(c.mb)(a.a.AWARDED_LISTING_BANNER, !0, i.g)
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
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BlankPost", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/AdViewability/index.tsx"),
				a = n("./src/reddit/connectors/PostViewable/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/contexts/Post/index.tsx");
			const d = Object(a.a)(null),
				l = e => {
					let {
						className: t,
						post: n
					} = e;
					return n.isSponsored ? s.a.createElement(o.a, {
						post: n,
						trackDisplay: !0
					}, s.a.createElement("div", {
						className: Object(i.a)(t, `Blank ${n.id}`)
					})) : null
				};
			t.default = Object(c.b)(d(l))
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less": function(e, t, n) {
			e.exports = {
				muteButton: "E6ihBvDYBbdvjzCcN_LZE",
				muteIcon: "_1Sx3lrWefgX2BpcEoC6zMv",
				muteDefault: "_3pc_K2D7OtCZ3HzDnRlOJv",
				muteHover: "_1CwsmOiXqCke04fKLHhV-a"
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/actions/subreddit/muting.ts"),
				m = n("./src/reddit/actions/subreddit/notifications.ts"),
				p = n("./src/lib/combineRefs/index.tsx"),
				b = n("./src/lib/hooks/useOnClickOutside.ts"),
				h = n("./src/lib/hooks/useTooltip.ts"),
				f = n("./src/reddit/components/CommonTooltip/index.m.less"),
				g = n.n(f);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var v = s.a.memo((function(e) {
					let {
						visible: t,
						tooltipId: n,
						className: o,
						arrowClassName: a,
						...c
					} = e;
					const [d, l] = Object(r.useState)(t);
					return Object(r.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, l(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), l(!1)
						}
					}, [t]), t ? s.a.createElement("div", x({
						id: n,
						className: Object(i.a)(g.a.tooltip, o, {
							[g.a.visible]: d
						})
					}, c.popperProps), d && s.a.createElement(s.a.Fragment, null, c.arrowProps && s.a.createElement("div", x({
						className: Object(i.a)(g.a.arrow, a)
					}, c.arrowProps)), c.children)) : null
				})),
				E = n("./src/reddit/models/Subreddit/index.ts");
			const y = e => {
					switch (e) {
						case E.b.FREQUENT:
							return "notification_frequent";
						case E.b.OFF:
							return "notification_off";
						case E.b.LOW:
						default:
							return "notification"
					}
				},
				_ = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				O = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				};
			var j = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/reddit/controls/Dropdown/index.tsx"),
				N = n("./src/reddit/controls/Dropdown/Row.tsx"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				w = n("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				S = n.n(w);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var P = e => {
					return s.a.createElement(C.a, {
						id: e.dropdownId,
						className: S.a.notificationDropdown
					}, [{
						displayText: j.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(E.b.FREQUENT),
						isSelected: e.notificationLevel === E.b.FREQUENT,
						icon: s.a.createElement(k.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === E.b.FREQUENT
						})
					}, {
						displayText: j.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(E.b.LOW),
						isSelected: e.notificationLevel === E.b.LOW,
						icon: s.a.createElement(k.a, {
							name: "notification",
							isFilled: e.notificationLevel === E.b.LOW
						})
					}, {
						displayText: j.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(E.b.OFF),
						isSelected: e.notificationLevel === E.b.OFF,
						icon: s.a.createElement(k.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === E.b.OFF
						})
					}].map(e => s.a.createElement(N.b, I({
						className: Object(i.a)(S.a.notificationDropdown, S.a.notificationRow, {
							[S.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				T = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/selectors/telemetry.ts");
			const B = e => t => ({
				...L.o(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: L.jb(t)
			});
			var A = n("./src/reddit/hooks/useTracking.ts"),
				M = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const R = d.a.img("SubredditIcon", S.a),
				D = d.a.wrapped(M.a, "DefaultIcon", S.a);
			var F = e => {
					let {
						subredditName: t,
						shouldShowSubredditIcon: n,
						subredditIcon: r,
						onHide: o,
						onUpdate: a
					} = e;
					const i = Object(A.a)(),
						c = n ? s.a.createElement(R, {
							src: r || void 0
						}) : s.a.createElement(D, null),
						d = `r/${t}`;
					return s.a.createElement("div", {
						className: S.a.notificationPopup
					}, s.a.createElement("div", {
						className: S.a.title
					}, s.a.createElement("h2", null, j.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), s.a.createElement("h3", null, j.fbt._("{subreddit name}", [j.fbt._param("subreddit name", d)], {
						hk: "1es0XP"
					}))), s.a.createElement("div", {
						className: S.a.subredditWrapper
					}, s.a.createElement("div", {
						className: S.a.subredditTitle
					}, c, s.a.createElement("span", null, d), s.a.createElement(k.a, {
						name: "notification_frequent",
						className: S.a.notificationIcon,
						isFilled: !0
					})), s.a.createElement(T.t, {
						className: S.a.subscribeButton,
						priority: T.c.Primary,
						size: T.d.M,
						text: j.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							o(), a(E.b.FREQUENT), i(B(E.b.FREQUENT.toLowerCase()))
						}
					})), s.a.createElement("button", {
						className: S.a.hideButton,
						onClick: o
					}, j.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				U = n("./src/reddit/helpers/localStorage/index.ts");
			var W = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var H = e => {
					const t = Object(o.d)(),
						n = Object(A.a)(),
						a = Object(h.b)(_),
						i = Object(h.b)(O),
						[c, d] = function(e, t) {
							const [n, s] = Object(r.useState)(Object(U.Q)(e, t));
							return [n, Object(r.useCallback)(() => {
								const n = Object(U.a)(e, t);
								s(n)
							}, [e, t, s])]
						}(e.userId, e.subredditId),
						l = Object(o.e)(e => !!Object(W.a)(e));
					Object(r.useEffect)(() => {
						e.notificationLevel !== E.b.LOW && e.notificationLevel !== E.b.OFF || d()
					}, [e.subredditId]);
					const u = 2 === c,
						f = () => {
							a.hide()
						},
						g = () => {
							i.hide()
						};
					Object(r.useEffect)(() => (u && (i.update && i.update(), i.show()), () => {
						g(), f()
					}), [e.subredditName, u]);
					const x = () => {
							g(), a.show()
						},
						j = (e => `dropdown-${e}`)(e.subredditName),
						C = (e => `popup-${e}`)(e.subredditName);
					Object(b.a)(j, f);
					const N = Object(r.useCallback)(e => {
							e.stopPropagation(), a.visible ? f() : x()
						}, [f, x, a.visible]),
						w = Object(r.useCallback)(t => {
							t === E.b.FREQUENT && Object(U.eb)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						I = Object(r.useCallback)(r => {
							const {
								subredditId: s
							} = e;
							f(), g(), t(Object(m.d)({
								subredditId: s,
								notificationLevel: r,
								successCallback: () => w(r)
							})), n(B(r.toLowerCase()))
						}, [f, e.subredditId, t, n]);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
						type: "button",
						className: S.a.notificationButton,
						ref: Object(p.a)(a.target.ref, i.target.ref),
						onClick: N,
						"data-testid": "subredditNotificationButton"
					}, s.a.createElement(k.a, {
						name: y(e.notificationLevel),
						className: S.a.notificationIcon,
						isFilled: !0
					})), s.a.createElement(v, {
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: j
					}, s.a.createElement(P, {
						dropdownId: j,
						notificationLevel: e.notificationLevel,
						onClick: I
					})), u && !l && s.a.createElement(v, {
						arrowProps: i.arrowProps,
						popperProps: i.popperProps,
						visible: i.visible,
						tooltipId: C,
						className: S.a.popupTooltip
					}, s.a.createElement(F, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: g,
						onUpdate: I
					})))
				},
				V = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				G = n("./src/reddit/components/SubredditNav/index.tsx"),
				q = n("./src/reddit/components/SubscribeButton/index.tsx"),
				K = n("./src/reddit/constants/componentSizes.ts"),
				z = n("./src/reddit/constants/postLayout.ts"),
				J = n("./src/reddit/constants/posts.ts"),
				Q = n("./src/reddit/featureFlags/index.ts"),
				Z = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				Y = n("./src/reddit/constants/tracking.ts");
			var X = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				$ = n("./src/reddit/hooks/useWindowEvent.ts"),
				ee = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				te = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				ne = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				re = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				se = n("./src/reddit/selectors/subreddit.ts"),
				oe = n("./src/reddit/selectors/user.ts"),
				ae = n("./src/reddit/selectors/widgets.ts"),
				ie = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				ce = n.n(ie),
				de = n("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				le = n("./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less"),
				ue = n.n(le);
			const {
				fbt: me
			} = n("./node_modules/fbt/lib/FbtPublic.js"), pe = e => {
				let {
					onClickUnmute: t
				} = e;
				return s.a.createElement(T.t, {
					priority: T.c.Plain,
					className: ue.a.muteButton,
					onClick: t
				}, s.a.createElement(de.a, {
					className: ue.a.muteIcon
				}), s.a.createElement("span", {
					className: ue.a.muteDefault
				}, me._("Muted", null, {
					hk: "incHh"
				})), s.a.createElement("span", {
					className: ue.a.muteHover
				}, me._("Unmute", null, {
					hk: "4qbgbm"
				})))
			}, be = d.a.img("SubredditIcon", ce.a), he = Object(a.c)({
				isNsfwBlurSubreddit: ne.e,
				notificationLevel: se.J,
				isMuted: se.I,
				spPollsEnabled: Q.d.spPolls,
				subredditInlineEditingEnabled: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(re.a)(e, {
						subredditId: n
					})
				},
				tournamentsEnabled: (e, t) => {
					let {
						subredditId: n
					} = t;
					return !!n && Object(se.Q)(e, {
						subredditId: n
					})
				},
				userId: oe.i,
				userIsSubscriber: (e, t) => {
					let {
						subredditName: n
					} = t;
					const r = n;
					return Object(se.ib)(e, {
						identifier: {
							name: r,
							type: "subreddit"
						}
					})
				},
				isCommunityMutingEnabled: ee.b,
				widget: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(ae.f)(e, {
						subredditId: n
					}) : void 0
				}
			}), fe = {
				threshold: [.5, .001],
				rootMargin: `${1-K.f}px 0px 0px 0px`
			};
			t.a = Object(o.b)(he, (e, t) => ({
				_updateSubredditInfo: () => {
					var n;
					const r = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (r) return e(Object(m.c)({
						subredditAboutInfo: {
							[r]: {
								notificationLevel: E.b.LOW
							}
						}
					}))
				},
				unmuteSubreddit: () => {
					var n;
					const r = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id),
						s = t.subreddit ? t.subreddit.name : t.subredditName;
					if (r) return e(Object(u.c)({
						subredditId: r,
						subredditName: s
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
					d = Object(o.e)(te.b),
					u = Object(o.e)(te.a),
					m = d || u,
					[p, b] = Object(r.useState)(!1),
					h = Object(r.useRef)(null),
					[f, g] = Object(r.useState)(),
					[x, v] = Object(r.useState)(null),
					E = Object(r.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: n
							} = t;
							n >= .5 ? e(!1) : n <= .001 && e(!0)
						})
					})(b), []);
				Object($.a)("resize", ((e, t, n) => () => {
					var r;
					e(t && n ? null === (r = t.getBoundingClientRect()) || void 0 === r ? void 0 : r.height : void 0)
				})(g, x, m)), Object(X.a)(h, E, fe);
				const y = e.subreddit && Object(Z.a)(e),
					_ = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && y),
					O = n.charAt(0).toUpperCase() + n.slice(1),
					j = !!e.subreddit && e.subredditInlineEditingEnabled,
					C = Object(i.a)(ce.a.SubredditIcon, ce.a.editableIcon, {
						[ce.a.emptyEditableIcon]: !y
					}),
					N = _ ? s.a.createElement(V.a, {
						className: C,
						subreddit: e.subreddit,
						iconUrl: y || void 0,
						inTopBar: !0
					}) : s.a.createElement(M.a, {
						className: ce.a.DefaultIcon
					}),
					k = _ ? s.a.createElement(be, {
						className: Object(i.a)(ce.a.SubredditIconImg, {
							[ce.a.blur]: e.isNsfwBlurSubreddit
						}),
						src: y || void 0
					}) : s.a.createElement(M.a, {
						className: Object(i.a)(ce.a.DefaultIcon, {
							[ce.a.blur]: e.isNsfwBlurSubreddit
						})
					}),
					w = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					S = e.layout ? e.layout === z.g.Large ? "984px" : "100%" : "1086px",
					I = e.isCommunityMutingEnabled && e.isMuted;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					style: {
						height: p ? void 0 : f
					},
					className: Object(i.a)(ce.a.wrapper, {
						[ce.a.stickyWrapper]: m,
						[ce.a.isSticking]: p
					})
				}, s.a.createElement("div", {
					className: ce.a.container,
					style: {
						maxWidth: S
					},
					ref: m ? v : void 0
				}, s.a.createElement("div", {
					className: ce.a.subredditMetaContainer
				}, j ? N : k, s.a.createElement("div", {
					className: Object(i.a)(ce.a.textContainer, {
						[ce.a.textContainerNoIcon]: !_
					})
				}, s.a.createElement("div", {
					className: Object(i.a)(ce.a.text, {
						[ce.a.blur]: e.isNsfwBlurSubreddit
					})
				}, s.a.createElement("h1", {
					className: ce.a.title
				}, c || O), !!c && s.a.createElement("h2", {
					className: ce.a.description
				}, "r/", n)), s.a.createElement("div", {
					className: ce.a.buttonWrapper
				}, s.a.createElement("div", {
					className: ce.a.subscribeButtonContainer
				}, s.a.createElement(q.a, {
					className: ce.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return p ? (e => t => ({
							...L.o(t),
							source: "sticky_banner",
							action: Y.c.CLICK,
							noun: e,
							subreddit: L.jb(t)
						}))(t) : (e => t => ({
							...L.o(t),
							source: "id_banner",
							action: Y.c.CLICK,
							noun: e,
							subreddit: L.jb(t)
						}))(t)
					},
					identifier: {
						name: n,
						type: J.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					afterUnsubscribeAction: () => {
						t && (Object(U.eb)(e.userId, t), e.updateSubredditInfo())
					}
				})), I && s.a.createElement(pe, {
					onClickUnmute: e.unmuteSubreddit
				}), e.userIsSubscriber && !I && t && e.notificationLevel && s.a.createElement("div", {
					className: ce.a.notificationButtonContainer
				}, s.a.createElement(H, {
					notificationLevel: e.notificationLevel,
					subredditName: n,
					subredditId: t,
					subredditIcon: y,
					shouldShowSubredditIcon: _,
					userId: e.userId
				}))))), w && s.a.createElement(G.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: a,
					subredditId: t,
					subredditNavContainerClassName: ce.a.subredditNavContainer
				}))), s.a.createElement("div", {
					className: ce.a.intersectionWrapper
				}, s.a.createElement("div", {
					style: {
						height: m ? f : void 0
					},
					ref: m ? h : void 0
				})))
			}))
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
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
			t.a = s
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
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				E = n("./node_modules/lodash/flatMap.js"),
				y = n.n(E),
				_ = n("./src/lib/linkMatchers/index.ts"),
				O = n("./src/lib/linkMatchers/customLinks.ts"),
				j = n("./src/reddit/controls/OutboundLink/index.tsx");
			const C = /\[(.+?)\]\((.+?)\)/g,
				N = e => {
					const t = e.split(C);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, s, o] = t.slice(r, r + 3);
						n.push(e), n.push([o, s])
					}
					return n
				};
			var k = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = y()(t, N)), e.parseRegularLinks && (t = y()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = _.f.add(O.g.subreddit.prefix, O.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const s of t) n.push(e.slice(r ? r.lastIndex : 0, s.index)), r = s, n.push([s.url, s.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, s] = t;
							return o.a.createElement(j.b, {
								className: e.linkClassName,
								href: r,
								key: n
							}, s)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				w = n("./src/reddit/constants/parameters.ts"),
				S = n("./src/reddit/contexts/PageLayer/index.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/chat/controls/Svg/index.tsx");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var L = e => o.a.createElement(P.a, T({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				B = n("./src/reddit/models/ContentGate.ts"),
				A = n("./src/lib/constants/index.ts"),
				M = n("./src/reddit/selectors/platform.ts"),
				R = n("./src/reddit/selectors/user.ts");
			var D = n("./src/reddit/selectors/meta.ts"),
				F = n("./src/reddit/components/ContentGate/index.m.less"),
				U = n.n(F);
			const {
				fbt: W
			} = n("./node_modules/fbt/lib/FbtPublic.js"), H = l.a.wrapped(L, "PrivateKey", U.a), V = l.a.div("ButtonsContainer", U.a), G = l.a.div("Container", U.a), q = l.a.div("ContainerExp", U.a), K = l.a.div("Description", U.a), z = l.a.div("PrivateSubredditDetails", U.a), J = l.a.div("PrivateSubredditDescription", U.a), Q = l.a.h3("PrivateSubredditName", U.a), Z = l.a.a("Link", U.a), Y = l.a.wrapped(I.n, "LinkRouterButton", U.a), X = l.a.wrapped(I.m, "LinkButton", U.a), $ = l.a.wrapped(I.q, "SecondaryLinkRouterButton", U.a), ee = l.a.wrapped(I.p, "SecondaryLinkButton", U.a), te = l.a.wrapped(Y, "GoHomeLinkButton", U.a), ne = l.a.wrapped(h.a, "CreateCommunityButton", U.a), re = l.a.img("Image", U.a), se = l.a.img("ImagePlaceholder", U.a), oe = l.a.wrapped(Y, "LeftLinkRouterButton", U.a), ae = l.a.wrapped(X, "LeftLinkButton", U.a), ie = l.a.wrapped(ee, "SecondaryLeftLinkButton", U.a), ce = l.a.wrapped($, "SecondaryLeftLinkRouterButton", U.a), de = l.a.h3("Title", U.a), le = l.a.div("PageBody", U.a), ue = l.a.div("InterstitialMessageWrapper", U.a), me = Object(d.c)({
				isLoggedIn: R.P,
				origin: D.k,
				user: R.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(R.Q)(e)) return !1;
					const t = Object(M.d)(e);
					if (!t) return !1;
					const n = Object(R.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const s = 30 * A.C;
					return r > Date.now() - s
				})(e),
				isSeo: D.h
			}), pe = Object(S.u)(), be = Object(a.b)(me, (e, t) => {
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
						await e(Object(m.q)())
					}
				}
			}), he = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: s,
					continueToGatedSubreddit: a,
					isLoggedIn: i,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: d,
					isSeo: l,
					location: p,
					origin: h,
					pageLayer: f,
					quarantineRequiresEmail: E,
					quarantineMessage: y,
					quarantineMessageHtml: _,
					quarantineMessageRTJson: O,
					interstitialWarningMessage: j,
					interstitialWarningMessageHtml: C,
					interstitialWarningMessageRTJson: N,
					setNSFWPreference: S,
					subredditDescription: I,
					subredditName: P,
					user: T
				} = e, L = async () => {
					if (i ? await S() : await Object(m.p)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(w.f, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case B.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(de, null, W._("r/{community name} is a Reddit Premium community", [W._param("community name", P)], {
							hk: "2lyDwB"
						})), o.a.createElement(K, null, W._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(V, null, T ? o.a.createElement(ie, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, W._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(ae, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), T ? o.a.createElement(Y, {
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
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(de, null, n === B.a.Nsfw ? W._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : W._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(K, null, W._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
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
						return o.a.createElement("div", null, o.a.createElement(H, null), o.a.createElement(de, null, "r/", P, " ", W._("is a private community", null, {
							hk: "7zZmq"
						})), I && I.length && o.a.createElement(z, null, o.a.createElement(Q, null, "r/", P), o.a.createElement(J, null, o.a.createElement("div", null, I))), o.a.createElement(K, null, W._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", P, " ", W._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), W._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(V, null, T ? o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: U.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), o.a.createElement(ie, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${P}`,
							redditStyle: !0
						}, W._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ie, {
							href: Object(u.a)(p, h),
							redditStyle: !0
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, W._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), P && o.a.createElement(v.a, {
							subredditName: P
						}));
					case B.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(de, null, W._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(K, null, W._("This community is {=quarantined}", [W._param("=quarantined", o.a.createElement(Z, {
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
						}) : y || W._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
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
								href: `${r.a.redditUrl}/prefs/update`,
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
						})(T, s, E)));
					case B.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(de, null, W._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(K, null, o.a.createElement(ue, null, N ? o.a.createElement(x.b, {
							content: N,
							rtJsonElementProps: {
								pageLayer: f
							}
						}) : C ? o.a.createElement(g.a, {
							html: C
						}) : j), W._("Are you certain you want to continue?", null, {
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
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(de, null, W._("r/{community name} has been banned from Reddit", [W._param("community name", P)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(K, null, e ? o.a.createElement(k, {
							linkClassName: U.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : W._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(V, null, o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(V, null, o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(se, null), o.a.createElement(de, null, W._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(K, null, W._("This community may have been banned or the community name is incorrect.", null, {
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
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
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
									return o.a.createElement(o.a.Fragment, null, W._("This account has been {=suspended} .", [W._param("=suspended", o.a.createElement(Z, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, W._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case B.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(de, null, W._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(K, null, W._("The person may have been banned or the username is incorrect.", null, {
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
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, W._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(V, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(V, null, o.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, W._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = pe(be(Object(i.i)(e => {
				const t = Object(s.useContext)(c.a) ? q : G;
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				const [a, p] = Object(r.useState)(!1), b = Object(d.a)();
				return Object(r.useEffect)(() => b(Object(c.h)()), [b]), s.a.createElement("div", {
					className: i.a.feedBanner,
					onClick: function() {
						p(!0), b(Object(c.g)())
					}
				}, s.a.createElement("div", {
					className: i.a.notepadSnoo
				}, s.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
				})), s.a.createElement("div", {
					className: i.a.bannerCopy
				}, s.a.createElement("p", {
					className: i.a.copy
				}, m._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), s.a.createElement("p", {
					className: i.a.meta
				}, m._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), s.a.createElement(l.a, {
					name: "caret_right",
					className: i.a.chevron
				}), a && s.a.createElement(u.a, {
					withOverlay: !0,
					subredditId: n,
					survey: t,
					onClose: () => p(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(r.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e(2), n.e(4)]).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
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
				a = Object(s.a)(o);
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
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
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
			t.a = s
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				E = x.a.wrapped(l.c, "StyledTooltip", g.a),
				y = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
				});
			t.a = Object(a.b)(y, (e, t) => {
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
					onShowTooltip: s,
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
					onMouseEnter: s,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: v,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(E, {
					caretOnTop: !0,
					tooltipId: v,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(E, {
					caretOnTop: !0,
					tooltipId: v,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
			const E = Object(a.b)(null, e => ({
				showToast: () => {
					e(Object(i.f)({
						kind: g.b.SuccessCommunity,
						text: r.fbt._("Dismissed", null, {
							hk: "3YBtnR"
						})
					}))
				}
			}));
			class y extends o.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(u.mb)(d.a.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
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
					}, r.fbt._("Create the ideal {subredditDisplayText} post", [r.fbt._param("subredditDisplayText", ` ${e.displayText} `)], {
						hk: "3ZioIj"
					})), o.a.createElement("div", {
						className: v.a.text
					}, r.fbt._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), o.a.createElement("br", null), r.fbt._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), o.a.createElement("div", {
						className: v.a.buttonWrapper
					}, o.a.createElement(l.m, {
						className: v.a.button,
						target: "_blank",
						href: `/${e.displayText}/submit`,
						onClick: this.createPost
					}, r.fbt._("Create Post", null, {
						hk: "sSUAI"
					})))) : null
				}
			}
			t.a = E(Object(c.c)(y))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				i = n.n(a);
			class c extends s.a.Component {
				render() {
					return s.a.createElement("div", {
						className: Object(o.a)(i.a.heroContainer, this.props.className)
					}, s.a.createElement("div", {
						className: Object(o.a)(i.a.header, this.props.headerClassName)
					}, this.props.header), s.a.createElement("div", {
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
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/reddit/components/Econ/Prediction/Confetti/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
					src: `${r.a.assetPath}/img/econ/predictions/confetti-bg.png`,
					alt: s.fbt._("Confetti", null, {
						hk: "3dmR4h"
					})
				}), i.a.createElement("img", {
					className: d.a.right,
					src: `${r.a.assetPath}/img/econ/predictions/confetti-bg.png`,
					alt: s.fbt._("Confetti", null, {
						hk: "3dmR4h"
					})
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/config.ts");
			const {
				fbt: a
			} = n("./node_modules/fbt/lib/FbtPublic.js"), i = `\n  ${o.a.assetPath}/img/econ/predictions/waiting.png,\n  ${o.a.assetPath}/img/econ/predictions/waiting@2x.png 2x,\n  ${o.a.assetPath}/img/econ/predictions/waiting@3x.png 3x,\n`;
			t.a = e => s.a.createElement("img", {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.m.less"),
				d = n.n(c);
			const l = e => {
				let {
					className: t,
					status: n
				} = e;
				const s = [i.a.Live, i.a.LiveInProgress].includes(n),
					c = n === i.a.Closed;
				return o.a.createElement("span", {
					className: Object(a.a)(d.a.statusBadge, t, {
						[d.a.live]: s,
						[d.a.ended]: c
					})
				}, s && r.fbt._("Live", null, {
					hk: "1hUJkn"
				}), c && r.fbt._("Ended", null, {
					hk: "3oH4rs"
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				c = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const d = e => {
				let {
					tournamentId: t,
					className: n
				} = e;
				const s = Object(a.e)(e => Object(c.a)(e, t));
				return s && s.tokenIconUrl ? o.a.createElement("img", {
					className: n,
					alt: r.fbt._("Tournament token", null, {
						hk: "3cgDZy"
					}),
					src: s.tokenIconUrl
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/experiments/econ/index.ts");
			const i = e => {
					let {
						className: t
					} = e;
					return s.a.createElement("svg", {
						className: t,
						fill: "none",
						height: "20",
						viewBox: "0 0 20 20",
						width: "20",
						xmlns: "http://www.w3.org/2000/svg"
					}, s.a.createElement("path", {
						d: "m11.8373 7.17254c-.0381-2.14805-1.2066-4.26563-3.12608-5.6611-.7001 1.14224-1.0571 2.46166-1.02847 3.80108.02863 1.33941.44168 2.64237 1.18995 3.75365",
						fill: "#ffc2dd"
					}), s.a.createElement("path", {
						d: "m8.87285 9.06578c-.03047.01981-.17672-.13254-.39609-.43722-.29757-.44864-.53424-.93481-.70383-1.44575-.25319-.76597-.37124-1.57014-.34887-2.37656.0185-.47751.08381-.95205.195-1.4168.12075-.49951.29704-.98393.52559-1.44421.04547-.10166.09632-.20083.15234-.29708l.16453-.28792c.0182-.03202.04253-.06014.07159-.08276.02907-.02261.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03655.00458.07183.01631.10384.03453l.02742.01828c.38016.28079.73681.5921 1.0664.93082.30177.31806.57737.65991.82417 1.02223.4117.60733.7253 1.27566.9293 1.98046.1388.46809.2126.95301.2194 1.44118 0 .34277-.0396.52863-.0731.52863-.0336 0-.0762-.18281-.1402-.50731-.0876-.45579-.214-.90328-.3778-1.33757-.2445-.64356-.5745-1.25128-.9811-1.8068-.2427-.32728-.50846-.63681-.79524-.92625-.31294-.30838-.64797-.59352-1.00242-.85313l.41742-.08226-.15234.2666c-.05268.08874-.10048.18028-.1432.27422-.20887.42313-.37327.8668-.49055 1.32387-.10969.42749-.18107.8639-.21328 1.30406-.04198.75145.02993 1.50493.21328 2.23488.31535 1.25684.78762 1.94696.70078 1.99875z",
						fill: "#000"
					}), s.a.createElement("path", {
						d: "m15.6001 5.87727c-.8963-.80295-1.9238-1.44605-3.0378-1.90125-.8516-.34734-1.7854-.585-2.69037-.41742-1.00242.18586-1.84945.84246-2.58984 1.55086-.89883.86988-1.70321 1.87383-2.14196 3.04687-.34277.91407-.45703 1.93177-1.02984 2.72697-.44789.6292-1.12582 1.0481-1.73672 1.5234s-1.19894 1.0664-1.32691 1.8281c-.134064.7983.2666 1.5905.76172 2.2349.43629.6039.99546 1.1085 1.64074 1.4808.65104.3698 1.41006.5028 2.14805.3763 1.28273-.2544 2.18918-1.3711 3.33937-2.0018.91406-.4966 1.98046-.6657 2.93876-1.0664 1.7105-.7343 3.0622-2.1139 3.7613-3.8391.6813-1.72672.7474-3.63533.1874-5.40512",
						fill: "#ffc2dd"
					}), s.a.createElement("path", {
						d: "m11.9928 5.88635c-.9902.47227-2.10078.77238-3.13214.36105-.44942-.17824-.91407-.48597-.99633-.96281-.08836-.53777.35648-1.01156.81047-1.31472 1.4823-.98567 3.3333-1.06641 5.0669-.66422 1.7337.40218 3.2663 2.19375 3.4842 3.95941 1.1699.23309 1.6178 1.90582 1.4396 3.08494-.0975.649-.4647 1.2416-.5027 1.8967-.0595 1.042.7175 1.9591.8302 2.9966.0424.4433-.0361.8899-.2271 1.2922-.1909.4024-.4873.7455-.8576.993-.7449.4829-2.1998.8653-2.9661.4174-.5408.5408-1.0664.8531-1.953.5621-.4365-.1597-.8123-.4516-1.075-.835s-.3992-.8392-.3906-1.3039c.0251-.4645.1826-.9122.4539-1.2901.2713-.378.645-.6704 1.0772-.8427-.118-.6928-.0689-1.4038.143-2.0739.212-.6701.5808-1.2799 1.0757-1.7789.4357-.4311.6475-1.2568.8623-1.82809.3184-.84551.0792-1.3589-.7115-1.79461-.7906-.4357-.6322-.91406-1.5356-.93234",
						fill: "#7e53c1"
					}), s.a.createElement("path", {
						d: "m2.93455 11.5232c-.76172.5652-1.73063 2.1861-1.73063 2.1861-.335154.9887-.09293 2.174.67184 2.8839.30469.2803.66879.4814.97347.7617.24375.2209.4479.489.72973.6581.29688.1598.6324.2336.96891.2133 1.02679-.0183 1.96523-.5515 2.83207-1.1014.52711-.3337.74496-.3748 1.08469-.8973.33972-.5226.44179-1.2508.08074-1.7596-.10551-.1489-.24341-.2718-.40332-.3597s-.33766-.1383-.51989-.1476c.14706-.1759.25646-.3801.32145-.5999.06499-.2199.08417-.4507.05637-.6783-.03221-.2274-.1238-.4424-.26556-.6232-.14175-.1808-.32865-.321-.54187-.4066-.21517-.0769-.44922-.0833-.66831-.0184s-.41185.1978-.55044.3795c-.12035-.4571-.26812-.9415-.66117-1.1929-.39304-.2514-.95672-.1706-1.36043.0899s-.73429.2133-1.01156.6094",
						fill: "#ff85c6"
					}), s.a.createElement("g", {
						fill: "#000"
					}, s.a.createElement("path", {
						d: "m12.0369 5.96144c.0076.01828-.0975.08074-.3047.18129-.1051.04875-.2422.09598-.4022.15234-.1874.06167-.3781.11253-.5713.15235l-.1691.03351-.1813.01524-.1904.02133-.2011.00761c-.29982.01193-.59992-.01521-.89273-.08074-.34868-.0711-.67773-.21717-.96434-.42809-.33198-.24583-.57949-.58862-.7084-.98109-.00992-.03112-.01206-.0642-.00622-.09634.00585-.03215.01949-.06236.03974-.088l.18129-.22699.09293-.11578c.03351-.03656.06855-.0716.10359-.10816l.21176-.21633.23613-.20109c.33521-.27221.70445-.49959 1.0984-.67641.86515-.37673 1.79855-.5717 2.74215-.57281.2458 0 .4946.00761.7465.02285.1249.01066.2514.02437.3778.03656l.3885.06703c.5231.11861 1.0247.31749 1.4869.58957.4807.27702.916.62643 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1606.44653.2128.92481.1524 1.39547l-.2225-.32449c.3024.07237.582.21897.8136.42656.2182.19639.3962.43337.524.69773.2368.4925.3602 1.03182.3611 1.57828.0036.26324-.0198.52618-.0701.78458-.0515.2498-.1265.4941-.224.7297-.1751.4479-.3458.8471-.3351 1.231.0236.4021.1338.7945.323 1.1502.1736.3762.3762.748.5149 1.1486.0732.1995.1243.4064.1523.617.025.2054.025.4131 0 .6185-.049.3813-.1783.7479-.3793 1.0756-.1803.2992-.4198.5584-.7038.7617-.2515.1695-.5267.3009-.8166.39-.4515.1462-.9263.2072-1.4.1798-.2998-.0157-.5927-.0952-.8593-.2331-.0441-.0259-.0837-.0472-.1142-.0701l-.0747-.064c-.0381-.035-.0548-.0564-.0487-.064s.0335 0 .0792.0168l.0838.0366c.0335.0137.0746.0259.1203.0426.265.0859.5427.1261.8212.1188.4422-.0126.879-.1002 1.2919-.2589.253-.0934.4915-.2222.7083-.3824.2336-.1832.4283-.4111.5729-.6703.1596-.2843.2582-.5987.2894-.9232.0316-.3501-.0206-.7025-.1523-1.0284-.131-.3519-.3321-.7038-.5256-1.0953-.2303-.4174-.366-.8802-.3976-1.3559-.0049-.2555.0316-.5102.1081-.7541.0701-.2376.1524-.457.2407-.6779.083-.2069.1462-.4211.1889-.6399.0401-.2216.0575-.44666.0518-.67179-.0025-.45984-.1065-.91345-.3046-1.32843-.089-.19841-.2208-.37466-.386-.5161-.1651-.14144-.3595-.24457-.5692-.30199-.0707-.01706-.1324-.05965-.1735-.11957s-.0585-.13291-.049-.20492c.0449-.37936.0001-.76396-.131-1.12278-.1711-.47191-.4347-.90491-.7754-1.27359-.3334-.36724-.7207-.68161-1.1487-.93234-.4116-.24365-.858-.42295-1.3238-.53168l-.3504-.06704-.352-.0396c-.2346-.0193-.4671-.02946-.6977-.03047-.8711-.0115-1.7356.15167-2.5426.47988-.69944.29292-1.31358.75772-1.78547 1.35129l.03199-.18738c.09268.31809.28096.59997.5393.80742.23935.19093.5167.32857.81351.40371.26464.07357.53739.114.81197.12035h.1874l.1798-.00762.1721-.00761.163-.01981c.2118-.01828.3976-.06246.5607-.08988.163-.02742.3046-.06856.4082-.0975.2194-.05942.3398-.08379.3474-.06551z"
					}), s.a.createElement("path", {
						d: "m15.1617 6.80064c.032-.01066.16.18738.2529.60938.0533.25693.0661.52062.0381.78152-.0428.34276-.1325.678-.2666.99633-.159.38683-.3724.749-.6338 1.07553-.2727.3504-.5713.684-.8318 1.0664-.1345.1968-.2591.4001-.3732.6094-.1109.2057-.1964.4241-.2544.6505-.126.4741-.116.9741.0289 1.4427l.0549.1523.0655.1524v.0107c.0153.035.0235.0728.0241.1111s-.0063.0763-.0205.1118c-.0142.0356-.0352.068-.062.0954-.0268.0273-.0587.0491-.094.064l-.0228.0092c-.4112.1591-.7588.4486-.9897.8242s-.3322.8166-.2885 1.2553c.0443.3877.1928.7562.4296 1.0664.21.2635.5015.4499.8288.5301.0736.0194.1484.0342.2239.0442.0792.0102.1564.0183.2316.0244.1384.0097.2774.0097.4159 0 .2139-.0066.4231-.0652.6093-.1706.3047-.1874.4007-.3977.4434-.3702.0167.0076.0091.0655-.029.166-.0649.1473-.1623.2781-.2849.3824-.2014.1636-.4437.2689-.7007.3047-.1541.0256-.31.0389-.4662.0396-.0823 0-.1656 0-.2499 0-.0935-.0045-.1866-.0152-.2787-.032-.4244-.0768-.8101-.2954-1.0939-.62-.3157-.3695-.521-.8204-.5926-1.3011-.0783-.5443.0291-1.0992.3047-1.5752.2866-.522.7517-.9233 1.3101-1.1304l-.1645.4022-.0838-.1858c-.0228-.064-.0487-.1265-.0701-.192-.1795-.573-.1895-1.1856-.0289-1.7641.0739-.272.1819-.5336.3215-.7785.1288-.2228.2697-.4385.4219-.646.2956-.4067.6231-.7464.8943-1.06636.2517-.28403.4648-.60009.6337-.93996.1414-.27918.2488-.57429.32-.87903.0485-.23077.0679-.4667.0579-.7023-.0198-.38695-.0732-.6109-.0305-.62461z"
					}), s.a.createElement("path", {
						d: "m11.7475 15.5359c.0397.0198-.0121.1751-.0487.457-.0497.3816-.0079.7696.1219 1.1319.0832.2572.2266.4908.4181.6816.1916.1907.4258.3331.6833.4153.2964.1041.6157.1251.9232.0609.3275-.0754.6263-.2436.8608-.4844.0439-.0439.1008-.0725.1623-.0816.0614-.009.1242.0019.1789.0313l.0229.0122.131.0716c.3301.1294.6855.1815 1.039.1523.3483-.0224.6927-.0874 1.0252-.1935.2948-.0892.572-.2283.8196-.4113.2096-.1663.3885-.3678.5287-.5957.2115-.3484.3397-.741.3747-1.1471.0275-.2879.0153-.457.0595-.4677.0441-.0107.1233.1523.1675.457.0501.4566-.033.918-.2392 1.3285-.1429.2883-.3393.5468-.5789.7617-.2813.2401-.6046.426-.9536.5484-.3748.137-.7663.2231-1.1639.256-.4489.0469-.9024-.017-1.3209-.1859-.07-.0335-.1371-.0746-.2056-.1112l.3626-.0381c-.3113.3274-.7135.554-1.1548.6505-.409.0775-.8316.0374-1.2188-.1158-.1777-.0673-.3469-.1553-.5042-.262-.1473-.1097-.279-.2388-.3915-.3839-.2342-.2994-.39-.6525-.4534-1.0273-.0633-.3748-.0321-.7595.0908-1.1192.1112-.291.2346-.4083.2635-.3915z"
					}), s.a.createElement("path", {
						d: "m12.5288 4.12384c.0335.12188-.6551.38696-1.2964.98567-.6414.59871-.9766 1.24922-1.0939 1.20504-.0533-.01981-.0411-.2209.0792-.51797.1677-.38261.4134-.72603.7214-1.00828.3079-.28226.6714-.49715 1.0672-.63094.3062-.09902.5073-.08836.5225-.03352z"
					}), s.a.createElement("path", {
						d: "m11.1488 3.92917c.0243.12492-.6734.33058-1.32543.89273s-.98262 1.20199-1.10145 1.15781c-.05332-.0198-.04265-.21937.07922-.51187.171-.37717.42374-.71159.73992-.97903.31619-.26744.68794-.4612 1.08824-.56726.3107-.0716.5088-.04723.5195.00762z"
					}), s.a.createElement("path", {
						d: "m16.3803 10.1901c-.1097-.067.3915-.97041.5347-2.19678s-.1005-2.22269.0229-2.26078c.0533-.01676.1935.2148.3047.63223.0647.24543.1066.49635.1249.74953.0464.62313-.0318 1.24927-.23 1.84183-.0799.24049-.1819.47305-.3047.69469-.2118.37938-.4053.56978-.4525.53928z"
					}), s.a.createElement("path", {
						d: "m18.9885 16.1546c-.064-.0137-.0412-.2773-.1036-.6749-.0645-.5111-.2722-.9936-.5992-1.3918-.327-.3981-.7599-.6957-1.2488-.8583-.3793-.1356-.6413-.163-.6429-.23-.0015-.0671.2697-.1402.7191-.0686.5932.102 1.1302.4135 1.5132.8779.383.4643.5866 1.0507.5739 1.6525-.0167.4555-.1538.7069-.2117.6932z"
					}), s.a.createElement("path", {
						d: "m14.8916 15.5424c0 .0549-.2575.0945-.6475-.0213-.5113-.1635-.9518-.4959-1.2494-.9426-.2976-.4468-.4345-.9814-.3882-1.5162.0426-.4038.1767-.6216.2285-.6094s.0411.2513.0792.6094c.0371.4555.1895.8941.443 1.2745.2535.3803.5996.6898 1.0058.8994.3138.1721.5377.2483.5286.3062z"
					}), s.a.createElement("path", {
						d: "m17.5289 17.9844c.0198.0518-.1813.1919-.5546.3047-.2195.0627-.4453.1005-.6733.1127-.2821.0127-.5646-.0104-.841-.0685-.5039-.1057-.972-.3398-1.3589-.6795-.2879-.2651-.4021-.4799-.3625-.5164.0396-.0366.2376.0883.5454.2681.3936.2324.8213.4016 1.2675.5012.2454.051.4945.082.7449.0929.2078.0059.4158.0008.6231-.0152.358-.029.5896-.0625.6094 0z"
					}), s.a.createElement("path", {
						d: "m2.90817 17.6644c.02743-.0336.16758.0441.422.1447.35517.1372.73285.207 1.11363.2056.2607-.0006.52062-.0286.77543-.0837.29447-.0691.58245-.1634.86074-.2819.6451-.2903 1.25785-.6478 1.82813-1.0664.3184-.2194.63527-.4357.95215-.6337.16005-.1033.32643-.1964.49816-.2788.16632-.0783.33786-.145.5134-.1996.33819-.1066.66119-.1691.94909-.2316.2657-.0562.5281-.1269.7861-.2117.9461-.291 1.3894-.7419 1.4503-.6856.0274.0229-.0411.1783-.2529.39-.3054.2895-.6618.5198-1.0511.6795-.2631.1148-.5339.2111-.8105.2879-.2925.0838-.5957.1615-.8943.2712-.1517.0544-.29977.1185-.44329.1919-.15014.0784-.29562.1654-.43571.2605-.30468.1966-.60937.4114-.92929.6323-.60607.446-1.26645.8131-1.96524 1.0923-.31459.118-.64019.2042-.97195.2574-.29262.0427-.58936.0493-.8836.0198-.42771-.0359-.83949-.1789-1.19742-.4159-.24527-.1751-.33668-.3168-.31383-.3442z"
					}), s.a.createElement("path", {
						d: "m6.225 5.96731c.03504.03047-.11882.24832-.27269.70688-.15387.45855-.32906 1.14257-.64289 1.98046-.35795 1.00905-.94757 1.92005-1.72149 2.65995-.44789.4128-.98261.7419-1.41984 1.1365-.22006.1952-.41046.4216-.5652.6718-.15641.2581-.27396.5379-.34886.8303-.1496.5767-.109 1.1864.11578 1.7382.2033.5106.57035.9393 1.04355 1.2188.43841.246.94.3563 1.44117.3168.4522-.035.89467-.1495 1.30711-.3382.62316-.2632 1.19822-.6282 1.70168-1.0801.36106-.3214.55149-.521.585-.4921.03352.029-.09902.2682-.42351.6521-.46912.5411-1.04342.9812-1.68797 1.2934-.4486.2367-.93728.3881-1.44117.4463-.60087.0697-1.20871-.0451-1.74282-.329-.59015-.3284-1.05149-.8472-1.308628-1.4717-.279975-.664-.334037-1.4015-.153867-2.0993.089401-.3498.231157-.6842.420465-.9917.18513-.296.41307-.563.67641-.7922.24386-.2077.49809-.403.76172-.585.24527-.1767.47683-.3473.68707-.5286.39554-.3476.74199-.7474 1.02984-1.18832.25632-.38967.48001-.79986.66879-1.22636.34278-.78153.57586-1.46707.81199-1.91344.23614-.44637.45551-.63984.47836-.61547z"
					}), s.a.createElement("path", {
						d: "m7.61001 17.0368c-.01371-.0229.07312-.096.22852-.227.21967-.1779.4162-.3826.585-.6094.11178-.1553.19769-.3276.25441-.5103.06503-.2047.08222-.4215.05027-.6338-.0336-.226-.14711-.4325-.31992-.5819-.08594-.0808-.18875-.1414-.30099-.1775-.11225-.0361-.23111-.0467-.34799-.0312-.04085.0077-.08309.0029-.12121-.0136-.03812-.0166-.07037-.0443-.09255-.0795-.02219-.0351-.03328-.0762-.03183-.1177.00144-.0416.01535-.0817.03992-.1153.15099-.206.25783-.4409.31383-.6901.0588-.2522.04721-.5157-.03352-.7617-.06006-.1925-.16964-.3659-.31775-.5028s-.32957-.2325-.52623-.2772c-.18409-.0295-.37273-.0078-.54539.0625-.16009.0641-.29709.1751-.39305.3184v.0076c-.02289.0359-.05711.0632-.09724.0776-.04014.0144-.08391.0149-.12442.0017-.0405-.0133-.07544-.0397-.0993-.075s-.03529-.0776-.03247-.1201c.00897-.1905-.02689-.3804-.10468-.5545s-.19534-.3275-.34321-.4479c-.2408-.1906-.54594-.2806-.85161-.2514-.20637.0174-.40675.0781-.58804.1783-.12797.07-.195.1203-.21176.1035-.01676-.0167.02437-.0914.14168-.2026.17711-.1566.39359-.2619.62613-.3047.16814-.034.3411-.0371.51035-.0091.2035.0334.39676.1126.5652.2316.2034.1439.36838.3356.48046.5582.11209.2226.16786.4693.16243.7184l-.35801-.1097c.1399-.2193.34103-.3927.5785-.4989.23747-.1061.50086-.1403.75756-.0983.27463.053.52991.1791.73901.3648.2091.1858.36429.4245.44927.691.10765.3236.12191.671.04113 1.0024-.07296.3061-.21004.5932-.40219.8425l-.20109-.3306c.17731-.0238.3577-.0071.52763.0488s.32497.1497.45346.2741c.2323.2134.37995.5033.4159.8166.02715.2664-.00994.5354-.10816.7846-.08209.2088-.20017.4017-.34887.5697-.20103.2307-.44204.4232-.71145.5683-.18586.099-.29707.131-.30773.1112z"
					}), s.a.createElement("path", {
						d: "m1.63036 14.9239c-.05028-.0671.02742-.2026.10054-.4037.0973-.242.14496-.501.14016-.7618-.00623-.1382-.03082-.275-.07313-.4067-.02438-.0824-.06591-.1587-.12187-.224-.04305-.0401-.0954-.0689-.15235-.0837-.05179-.0153-.10207-.0122-.13253-.0381-.03047-.0259-.03657-.0899.03503-.1646.05278-.0478.11654-.0819.18564-.0991.06909-.0173.14139-.0173.21046.0001.09781.0283.18881.0762.26741.1409s.14313.1448.18962.2354c.14254.2601.1987.5588.16036.8529-.03833.2941-.16918.5684-.37364.7833-.20414.2026-.39305.23-.4357.1691z"
					}), s.a.createElement("path", {
						d: "m3.30922 14.9463c.00761-.0838.2148-.1218.47836-.2529.15103-.0716.29108-.1645.41589-.2757.14195-.126.25387-.2821.32754-.457.02539-.0616.03666-.1281.033-.1946-.00367-.0666-.02218-.1314-.05417-.1899-.03199-.0584-.07666-.1089-.13073-.1479-.05407-.0389-.11616-.0652-.18173-.077-.24375-.0457-.42504.0685-.48598.0152-.02894-.0243-.02742-.0959.04266-.1889.10853-.1306.26266-.215.43113-.2361.1238-.0188.25029-.0073.36868.0335.13848.0489.26222.1322.35953.2422.10996.1238.18329.2757.21175.4388.02862.1723.0102.3491-.05332.5119-.09984.2397-.25932.45-.4633.6108-.20397.1607-.44567.2667-.70213.3078-.15219.0271-.30857.0187-.45703-.0244-.09445-.035-.1432-.0777-.14015-.1158z"
					})), s.a.createElement("path", {
						d: "m3.53778 4.27334c.35264.00703.70225-.06643 1.02223-.2148.5652-.30469.58653-1.05879.69317-1.70473l-.68707-.57586-.29098-.29097c-.40265-.06883-.81671-.01302-1.18676.15996-.11314.03509-.21026.109-.27422.20871-.04419.13436-.03491.28058.0259.40828.20871.67336.43723 1.34824.69773 2.00941z",
						fill: "#fcff78"
					}), s.a.createElement("path", {
						d: "m6.92588 3.76312-1.45336-1.21875c-.08836.62309-.10817 1.28121-.66879 1.66207-.31535.21481-.73582.28793-1.16848.30469.28754.71505.63298 1.40543 1.03289 2.06426.56368.13254 1.12582.15234 1.6636-.21176.81047-.54691.7084-1.71844.59414-2.60051z",
						fill: "#34e2ac"
					}), s.a.createElement("path", {
						d: "m8.74027 5.59247c-.30468-.5591-.8059-.98262-1.2934-1.39242l-.24832-.20719c.0975.87293.10665 1.89668-.59871 2.47558-.54843.45704-1.14867.49665-1.75804.39.19381.29675.40386.58258.62918.85618.30468.35953.64593.70839 1.0923.8455.39305.12036.81809.06246 1.21875 0 .23991-.04098.4642-.14628.64899-.30468.23423-.14822.41471-.36769.51492-.62614.19905-.67984.12528-1.4105-.20567-2.03683z",
						fill: "#4ab6ff"
					}), s.a.createElement("path", {
						d: "m3.63372 1.50807c-.00915.02133-.07922 0-.20262.01066-.17338.01719-.33517.09486-.45703.21938-.08963.10119-.15545.22118-.19262.35115s-.04475.26662-.02219.3999c.03199.32297.21176.66727.45703 1.05117.47989.78 1.04203 1.71387 1.65903 2.75438l.47226.79828c.14562.26333.3215.50874.52407.73125.09393.10008.20166.18626.31992.25594.12269.06894.2545.12023.39152.15234.29024.05902.59075.04276.87293-.04723.14265-.04381.27929-.10522.40676-.18281.12585-.08503.24364-.18141.35191-.28793.21371-.19425.37641-.43804.47379-.70992.18434-.52102 0-1.09231-.33515-1.52344-.33516-.43113-.79067-.79371-1.1959-1.13648l-1.15782-.94149c-1.42593-1.13953-2.32629-1.82812-2.28515-1.89668.04113-.06855 1.02832.50578 2.52586 1.56914.37324.26661.78.56368 1.20961.89121.42961.32754.91406.67336 1.32082 1.18981.21796.26961.37913.58054.47379.91406.0477.17942.07177.36431.0716.54996-.00338.19142-.03469.38131-.09293.56368-.12117.36293-.33056.6901-.60938.95214-.1406.13226-.29366.25062-.45703.35344-.16878.10363-.34998.18553-.53929.24375-.37848.12012-.78173.13955-1.17001.05637-.19307-.04362-.37883-.11494-.55148-.21176-.16901-.097-.32297-.21811-.45703-.35953-.23145-.25682-.43095-.54072-.59414-.84551l-.45703-.81047c-.5911-1.05574-1.11668-2.01093-1.55086-2.81683-.2209-.40067-.41438-.82266-.42047-1.23551-.0138-.17693.01449-.35461.08254-.51851.06804-.16391.17393-.30937.30898-.4245.08602-.06939.18569-.1199.29251-.14825.10683-.02835.21842-.03389.32753-.01628.15844.03047.21328.09141.20567.10512z",
						fill: "#000"
					}), s.a.createElement("path", {
						d: "m4.46393 6.19913c-.07008.03961-.40371-.44332-.88664-1.25836-.24223-.40675-.52102-.8973-.82266-1.44574-.07617-.13558-.15234-.27879-.22395-.43722-.07862-.16703-.13841-.34229-.17824-.52254-.04674-.20918-.04674-.4261 0-.63528.05176-.237.17898-.45082.36258-.60937.19251-.15305.43201-.23486.67793-.23156.21542.00414.42722.05618.62004.15234.16671.07743.32497.17188.47226.28184.13711.10359.25747.20261.38086.30468.4875.38848.91407.74496 1.27969 1.05117.71906.60938 1.13801 1.02223 1.09078 1.08622-.04722.06398-.55605-.23157-1.3391-.76172-.39152-.26356-.85008-.58653-1.35586-.95215-.23758-.19065-.49262-.35846-.76172-.50121-.24527-.11426-.53929-.11578-.69164.01676-.08628.07832-.14594.18165-.17062.29554-.02806.12849-.02806.26152 0 .39.07188.29274.18147.5749.32601.83942.2727.55757.51188 1.0664.70535 1.49144.38086.85617.585 1.40766.51493 1.44574z",
						fill: "#000"
					}), s.a.createElement("path", {
						d: "m3.32259 4.185c.04265-.05027.22089.06856.50425.05637.17023-.01048.33705-.05232.49207-.1234.09475-.04162.18639-.08999.27422-.14473.08767-.05455.16761-.12065.23766-.19652.24239-.29049.364-.66295.33973-1.04051-.00975-.12051-.03484-.23928-.07465-.35343-.02743-.08836-.03809-.15235-.01371-.16454.02437-.01218.07921 0 .15234.07161.11052.10274.19152.23319.23461.37781.06054.21354.072.43801.03351.6566-.04331.27667-.16671.53459-.35496.74191-.09867.10747-.21387.1985-.34125.26965-.11202.0622-.22989.11323-.35191.15235-.21234.07339-.43982.09174-.66117.05332-.1515-.02712-.29151-.09872-.40219-.20567-.07008-.07008-.09445-.12492-.06855-.15082z",
						fill: "#000"
					}), s.a.createElement("path", {
						d: "m4.604 6.28436c.03047-.00914.0716.05637.13864.15234.03548.05467.08035.10264.13253.14168.06723.04371.1441.07037.22395.0777.05049.00737.10135.01195.15234.01371.05353.00107.10705-.00249.15996-.01067.12363-.02073.24399-.05761.35801-.10968.26973-.11881.50848-.29813.69774-.52407.18908-.22808.32585-.49485.40066-.78152.06123-.2426.09295-.49171.09445-.74191 0-.42047-.15234-.67184-.09445-.7084.02285-.01523.09141.02437.1752.13406.11597.16041.19315.34554.22546.54082.04641.28689.0428.57965-.01066.86531-.06644.35874-.2238.69444-.45703.975-.23468.28133-.54026.49486-.88512.61852-.15255.05626-.31288.08863-.47531.09598-.077.00278-.15408-.00232-.23004-.01524-.06368-.0138-.1263-.03213-.18738-.05484-.12349-.03615-.23401-.10701-.3184-.20414-.05878-.07254-.09904-.15829-.11731-.24985-.02742-.13254-.01066-.20718.01676-.2148z",
						fill: "#000"
					}), s.a.createElement("path", {
						d: "m14.8962 8.86965c.8394-1.7809.3564-5.85914-2.2502-7.58672-.6194.71264-1.0159 1.59151-1.1402 2.5275s.029 1.88788.441 2.7375",
						fill: "#ffc2dd"
					}), s.a.createElement("path", {
						d: "m11.9471 6.54651c-.0289.01371-.1264-.10816-.2575-.35953-.178-.36602-.3017-.75607-.3671-1.15781-.1063-.61415-.0898-1.24329.0487-1.85098.1786-.77188.5449-1.48774 1.0664-2.08406v-.00762c.0445-.05081.1065-.08307.1736-.090408.0672-.007334.1346.010798.189.050798l.2956.21937c.1024.07061.1991.14905.2894.23461.1902.16824.367.3511.5287.54692.0807.09902.1675.19347.2391.29707l.2103.30469c.0335.05179.07.10207.102.15234l.0884.16148.1691.32602c.099.21633.195.43113.2773.64441l.1081.32145c.0376.10373.0691.20953.0945.31687.2039.74383.2933 1.5144.2651 2.28516-.0097.52011-.106 1.03497-.2849 1.52344-.0465.13373-.1094.26116-.1874.37933-.0518.08227-.0884.11883-.1066.11121-.0183-.00761-.0183-.06246 0-.15234.0182-.08988.0563-.2209.0777-.39609.0863-.48239.117-.97311.0914-1.4625-.0309-.72382-.1548-1.44065-.3687-2.13282-.0269-.09929-.0594-.19695-.0975-.2925l-.1097-.29554c-.0807-.19653-.1737-.39153-.2681-.58957l-.163-.28946-.0823-.15234c-.0289-.04723-.0625-.09293-.0945-.14016l-.1843-.28031c-.0655-.09293-.1523-.17672-.2163-.2666-.1443-.1766-.3017-.34211-.4708-.49512-.0811-.07598-.1682-.14527-.2605-.20718l-.2589-.19957.3762-.05028c-.4697.52458-.8126 1.15003-1.0024 1.82813-.1534.54814-.2101 1.11883-.1676 1.68644.0747.97196.3382 1.52953.2575 1.56305z",
						fill: "#000"
					}), s.a.createElement("path", {
						d: "m12.4756 10.9713c.6932-.9314.556-2.20692-.3066-2.84893-.8626-.642-2.1238-.40739-2.81708.52403-.69325.93142-.55598 2.2069.30659 2.8489.86259.6421 2.12379.4074 2.81709-.524z",
						fill: "#b8e7ff"
					}), s.a.createElement("path", {
						d: "m12.6477 11.0997c-.3495.475-.8556.8112-1.429.9491-.2925.0698-.596.0806-.8927.032-.3037-.0513-.59239-.1689-.84553-.3443-.256-.1803-.47062-.4131-.62955-.6829s-.25852-.5704-.29213-.8817c-.0368-.31289-.01301-.62995.07008-.93385.16819-.60576.55597-1.12715 1.08773-1.4625.26428-.1668.558-.28159.8653-.33821.308-.05723.6247-.04811.9289.02676s.589.21377.8353.40742c.2408.1922.4364.43511.5728.71145.1316.27014.2083.56376.2254.86379.036.59244-.1401 1.17834-.4966 1.65294zm-.3458-.2575c.1408-.1938.2465-.4109.3123-.6413.0626-.22856.0807-.46699.0533-.70234-.0262-.22746-.1011-.4466-.2197-.64247-.1185-.19586-.278-.36385-.4674-.4925-.1832-.12067-.39-.20124-.6066-.23642s-.4382-.02418-.6502.03228c-.4264.11149-.80187.3653-1.06425.71939s-.39591.7872-.37845 1.22756c.00711.2192.06045.4345.15654.6316.09609.1972.23275.3718.40104.5125.17772.143.38412.2461.60512.3023.2211.0562.4516.0643.6761.0237.2336-.0413.457-.1271.6581-.2529.2016-.1291.379-.2925.5241-.4829z",
						fill: "#000"
					}), s.a.createElement("path", {
						d: "m11.734 10.3357c.3564-.72954.0761-1.59909-.6262-1.94222-.7023-.34314-1.56058-.02993-1.91701.69958-.35643.7295-.07606 1.59904.62623 1.94214.70228.3432 1.56058.03 1.91698-.6995z",
						fill: "#000"
					}), s.a.createElement("path", {
						d: "m10.6281 9.66417c.0662-.43647-.2192-.84166-.63736-.90502-.41814-.06335-.81073.23912-.87686.67559s.21923.84166.63738.90506c.41814.0633.81074-.2392.87684-.67563z",
						fill: "#fff"
					}), s.a.createElement("path", {
						d: "m11.5831 11.1074c.3374 0 .6109-.2851.6109-.6368s-.2735-.6368-.6109-.6368-.6109.2851-.6109.6368.2735.6368.6109.6368z",
						fill: "#fff"
					}), s.a.createElement("path", {
						d: "m12.8948 6.65901c-.0594-.02894.0366-.31687.1158-.78304l.0305-.18282.0228-.20109c.0214-.13711.0244-.28793.0366-.44332.0143-.33972.0097-.67997-.0137-1.01918-.0458-.61737-.1478-1.22927-.3047-1.82812-.1204-.45704-.2224-.74801-.1661-.78.0564-.032.2529.2148.4571.67793.2577.60474.4122 1.24843.457 1.90429.0235.35959.0148.72055-.0259 1.0786-.0259.16605-.0427.32449-.0807.46922l-.0503.21023-.061.19043c-.1706.48293-.3732.73277-.4174.70687z",
						fill: "#000"
					}), s.a.createElement("path", {
						d: "m1.41844 16.2901c.07617-.0472.30469.2834.83789.5652.30658.1598.63944.263.98262.3047.42089.046.8467.0098 1.25379-.1066.88359-.2438 1.57828-.7617 2.06425-1.1639.48598-.4022.7861-.6734.85008-.6201.06399.0534-.12797.4129-.56519.9141-.26033.2951-.55316.5598-.87293.7891-.40061.2889-.84865.5054-1.32387.6399-.48542.1386-.99614.1641-1.49297.0746-.40609-.0764-.78949-.2442-1.12125-.4905-.222-.1628-.40729-.3704-.54387-.6094-.08836-.1676-.10054-.2773-.06855-.2971z",
						fill: "#000"
					}), s.a.createElement("path", {
						d: "m1.2085 15.8394c.70843.486 1.55388.7323 2.4125.703s1.68528-.3328 2.3589-.8661c.23004-.2064.4744-.3963.73125-.5682.12943-.0849.27578-.1405.42889-.1632.15311-.0226.30931-.0116.45775.0322.15254.0661.2835.1737.37801.3105s.14881.2973.15672.4634c.00895.3331-.1037.658-.31688.9141-.21295.2544-.46491.4734-.74648.6489-.83941.5637-1.8525.9933-2.84426.7998-.54082-.1051-1.02984-.3884-1.50515-.6657-.21368-.1179-.41747-.2529-.60938-.4037-.3144-.2606-.5528-.6011-.69012-.9857",
						fill: "#ff85c6"
					}), s.a.createElement("path", {
						d: "m13.3224 5.51322c-.0032.29968-.0637.59597-.1782.87293-.0542.13337-.1411.25098-.2526.34202-.1116.09103-.2442.15259-.3857.179-.3321.03351-.6445-.22242-.7983-.54082-.134-.3332-.1968-.69074-.1844-1.04965-.0259-.98719.061-2.0216.4571-2.92348.1523-.35496.457-1.05422.7845-.45703.2514.45703.3596 1.10754.4479 1.62856.1099.64328.1467 1.29692.1097 1.94847z",
						fill: "#ffc2dd"
					}), s.a.createElement("path", {
						d: "m2.43311 1.8313c.4357-.66727 5.62605 6.34054 5.62605 6.34054l-.4677.41742-1.76566-.26507z",
						fill: "#fff"
					}), s.a.createElement("path", {
						d: "m15.2968 5.96724c1.0832.9293 1.5783 2.68734 1.1944 4.06296 1.4335-1.13034 1.0999 1.88 0 2.9631.2803-.1081.844.2057 1.0222.4479.163.2547.2526.5493.259.8516.0566.6477-.0536 1.2991-.3199 1.8921-.6414 1.4062-2.9829 1.4808-3.6776.972-.1356.5332-.5698.9658-1.3071 1.106.9262.5225 1.7184.4951 2.4253-.3047.8805.2544 2.3628 0 3.1337-.4875s1.2584-1.4579 1.0664-2.3522c-.1341-.6093-.55-1.1197-.7389-1.7154-.227-.7145-.1112-1.4899.0336-2.2257.1447-.7358.3168-1.4884.195-2.22879-.1219-.74039-.6201-1.47622-1.3559-1.62094.0186-.79515-.2157-1.57567-.6691-2.22917-.4533-.6535-1.1024-1.14624-1.8537-1.40728l.5515 2.145",
						fill: "#7e53c1",
						opacity: ".67"
					}), s.a.createElement("path", {
						d: "m14.8307 4.86442c.113 1.0501.0543 2.11159-.1737 3.14285-.2483 1.02375-.7724 1.69559-1.5889 2.96003-1.3666 2.1145-4.16206 4.2123-4.16206 4.2123l-.21024 1.106s3.0012-.914 3.9229-1.5539c.1995-.361.2909-1.2187.3382-1.6316.0895-.7608.3635-1.4883.7982-2.1191.3443-.4997.7298-.8927 1.0375-1.41678.4246-.75116.6314-1.60579.5972-2.46797-.0544-.8398-.2078-1.67024-.457-2.47406",
						fill: "#ffc2dd"
					}), s.a.createElement("path", {
						d: "m13.8086 14.0707c-.0274 0-.0761-.0807-.1173-.2514-.0508-.2446-.058-.4963-.0213-.7434.0512-.3631.1538-.717.3047-1.0512.1823-.399.3931-.7844.6307-1.1532.2422-.387.4677-.7511.6444-1.09233.1603-.2979.29-.61131.387-.93539.1523-.55148.1173-.9232.1858-.93387.0274 0 .0731.08227.1097.25442.0428.24545.0428.49646 0 .74191-.0594.36166-.1686.71336-.3245 1.04508-.1865.39658-.3992.78038-.6368 1.14868-.2422.3854-.457.751-.6368 1.0938-.156.299-.2801.6135-.3702.9385-.1417.5545-.0883.9262-.1554.9384z",
						fill: "#c676ff"
					}), s.a.createElement("path", {
						d: "m14.9072 14.0231c-.0564 0-.1326-.1752-.1524-.4829-.0454-.8133.2322-1.6116.7724-2.2212.2102-.2255.3824-.3199.4235-.2803.0914.0868-.3458.652-.6185 1.4579s-.3047 1.5143-.425 1.5265z",
						fill: "#c676ff"
					}), s.a.createElement("path", {
						d: "m6.19165 7.1707c-.01219-.06246.12949-.13559.32297-.2666.24618-.1607.45882-.36765.62613-.60938.15866-.24732.26783-.52308.32144-.81199.04723-.22852.05942-.38848.12036-.40067.06093-.01218.15234.13407.18738.41133.03174.3671-.06183.73413-.26546 1.04123-.20362.30709-.50528.53614-.85579.64979-.27117.07312-.44637.04266-.45703-.01371z",
						fill: "#fff"
					}), s.a.createElement("path", {
						d: "m4.43023 4.76671c0-.12035.43114-.18434.76172-.50273.33059-.3184.43571-.72821.55758-.72668.05789 0 .11731.1234.10207.33058-.03163.27398-.1599.52771-.36178.71562-.20187.18791-.46413.2977-.73966.30966-.20567 0-.32297-.07313-.31993-.12645z",
						fill: "#fff"
					}), s.a.createElement("path", {
						d: "m3.40812 2.70883c.30037 0 .54387-.2435.54387-.54387s-.2435-.54387-.54387-.54387c-.30036 0-.54386.2435-.54386.54387s.2435.54387.54386.54387z",
						fill: "#fff"
					}), s.a.createElement("path", {
						d: "m16.4716 14.2914c.0168-.0213.0915-.0076.192.0808.1373.1344.2244.3119.2468.5027.0418.2872-.0268.5795-.192.8181-.202.2785-.4875.4856-.815.5911-.5639.1875-1.1772.1593-1.7215-.0792-.4067-.1844-.585-.4037-.5515-.4464.0336-.0427.2682.0625.6521.1523.2215.0538.4484.082.6764.0838.2721.0041.543-.0376.8013-.1234.2476-.0783.4686-.2238.6383-.4204.1276-.1591.2003-.3553.2072-.5591.0152-.3641-.1782-.5515-.1341-.6003z",
						fill: "#c676ff"
					}), s.a.createElement("path", {
						d: "m12.6798 17.3567c-.0442.0365-.1813-.0305-.3199-.2255-.1735-.264-.2528-.5787-.2251-.8933.0276-.3146.1606-.6107.3774-.8404.1691-.1691.3169-.2117.3535-.1691.0365.0427-.0229.1676-.1021.3458-.2153.4435-.2582.9512-.1204 1.4245.0412.1904.0854.3138.0366.358z",
						fill: "#c676ff"
					}), s.a.createElement("path", {
						d: "m12.6432.993331c.0549.001261.1081.019339.1524.051799l.2955.21937c.1024.0706.1992.14904.2895.23461.1902.16823.3669.3511.5286.54692.0807.09902.1676.19347.2392.29707l.2102.30468c.0335.0518.0701.10207.1021.15235l.0883.16148.1311.24223c.1523.0716.3123.15234.457.23613.4808.277.916.62641 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1365.37028.2007.76334.1889 1.15781.2065.0822.3969.20031.5622.34887.2183.19639.3963.43337.524.69773.2368.4925.3602 1.03182.3611 1.57829.0037.26323-.0198.52615-.0701.78455-.0515.2498-.1264.4941-.2239.7297-.1752.4479-.3459.8471-.3352 1.231.0236.4022.1338.7945.323 1.1502.1737.3763.3763.748.5149 1.1486.0732.1995.1243.4064.1523.617.0251.2055.0251.4131 0 .6186-.049.3813-.1782.7478-.3793 1.0755-.1265.2034-.2802.3884-.457.55-.032.032-.0625.0655-.096.0959-.2813.2401-.6047.4261-.9537.5485-.3748.1369-.7662.223-1.1639.2559-.096 0-.1935.0107-.2925.0107-.3527.0071-.703-.0598-1.0283-.1965-.2835.2425-.6235.4096-.9887.4859-.1309.0263-.2641.0396-.3976.0396-.1308 0-.2613-.0118-.39-.035-.0691-.0034-.1379-.0121-.2057-.0259-.4243-.0768-.81-.2954-1.0938-.62-.3157-.3695-.5211-.8204-.5926-1.3011-.0692-.4618-.0031-.9338.1904-1.3589-.1661.0625-.3413.1219-.5256.1737-.2925.0838-.5957.1615-.8942.2712-.15177.0544-.29985.1185-.44337.1919-.15013.0784-.29561.1654-.4357.2605-.30469.1966-.60938.4114-.9293.6323-.60606.446-1.26645.8131-1.96523 1.0923-.31459.118-.6402.2042-.97196.2574-.1751.0251-.35174.0378-.52863.0381-.11856.0001-.23704-.006-.35496-.0183-.42771-.0359-.8395-.1789-1.19742-.4159-.24527-.1736-.3382-.3168-.31535-.3427.0035-.0009.00716-.0009.01066 0-.26616-.056-.52276-.1504-.76172-.2803-.59015-.3284-1.05149-.8472-1.308629-1.4717-.285418-.6678-.341666-1.4113-.159961-2.1145.089401-.3499.231157-.6843.42047-.9918.18512-.296.41306-.5629.6764-.7922.24386-.2077.49809-.403.76172-.585.24528-.1767.47684-.3473.68707-.5286.39554-.3476.742-.7473 1.02985-1.18827.25631-.38968.48-.79987.66879-1.22637.09293-.21023.17672-.41133.25593-.60937-.11902-.16844-.22936-.34285-.33058-.52254l-.45703-.81047c-.5911-1.05574-1.11668-2.01094-1.55086-2.81684-.12458-.21556-.23059-.44134-.31688-.67488-.08052-.16829-.14184-.3451-.18281-.52711-.04675-.20918-.04675-.4261 0-.63527.05176-.237.17898-.45082.36258-.60938.19129-.15206.429-.2338.67336-.23156h.00914c.2118.00575.41978.05775.60937.15234.16882.07706.32914.17152.47836.28184.13711.10359.25746.20262.38086.30469.4875.38847.91406.74496 1.27969 1.05117.40066.34125.7084.62004.89273.81047l.41743.30773.04418.03352c.02807-.2051.06723-.40852.1173-.60938.12074-.49951.29704-.98394.52559-1.44422.04547-.10165.09632-.20082.15234-.29707l.16453-.28793c.0182-.03202.04252-.06014.07159-.08275.02907-.02262.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03654.00457.07183.01631.10383.03453l.02743.01828c.38016.28079.7368.59209 1.0664.93082.21773.22749.42123.46813.60933.72058.3091-.0716.6226-.12249.9385-.15234.2026-.61813.5268-1.18947.9537-1.68035v-.00762c.0251-.02912.0562-.05248.0911-.06852.035-.01603.073-.024358.1115-.024409zm-7.59736 2.437499c.06405-.15644.10312-.32197.11578-.49055-.02525.16638-.06397.33044-.11578.49055zm-.73125 7.08097.03351-.0076c.02133-.0397.04114-.0808.06094-.1204l-.09293.128zm-.28793.3565c.04937-.0282.10023-.0536.15234-.0762l.02285-.0351c-.03808.0092-.07312.0183-.10664.029l-.07008.0807zm-1.00395 6.8143h-.00761zm9.62049-16.910168c-.0696-.000201-.1385.014672-.2019.043598s-.1197.07122-.1652.123981v.007617c-.4115.478212-.7312 1.028242-.943 1.622462-.2316.02742-.4571.06551-.6902.11426-.1682-.21931-.3483-.42934-.5392-.62918-.33831-.34598-.70412-.6639-1.09388-.95063l-.05027-.03199c-.05671-.03237-.11923-.05323-.18401-.06141-.06478-.00817-.13053-.00349-.1935.01377-.06296.01726-.12191.04677-.17346.08684-.05155.04006-.09469.0899-.12696.14666l-.1691.28336c-.06001.09869-.11492.20038-.16453.30469-.2348.4748-.4152.97461-.53778 1.48992-.02285.08988-.04418.18129-.06246.27726l-.16301-.12187c-.19195-.195-.49359-.4677-.8973-.80438-.36715-.30468-.79981-.66726-1.28578-1.05574l-.09598-.07617c-.08531-.08684-.18586-.15539-.28945-.23918-.15921-.11881-.33023-.22091-.51035-.30469-.22066-.10615-.46202-.162328-.70688-.164529l-.00914.216329v-.223946c-.29523-.003494-.58241.096186-.81199.281836-.21874.18764-.37103.44092-.43418.72211-.0536.24029-.0536.48944 0 .72973.04217.19688.10603.38848.19043.57128.08802.24388.19657.47984.32449.70536.44027.81808.96281 1.76414 1.55238 2.81683l.45704.81199c.0716.12493.16453.28184.27421.44333-.07464.18281-.14168.33972-.20871.48902-.18354.41537-.40112.81486-.65051 1.19437-.2769.42478-.61058.80968-.99175 1.14408-.21328.1844-.44942.358-.67184.518l-.0716.0518c-.24432.1701-.47974.3527-.70535.5469-.27965.2431-.52148.5265-.717541.8409-.201003.3259-.351499.6803-.446367 1.0512-.191573.7431-.132671 1.5287.167578 2.2349.277385.6687.77228 1.2242 1.40461 1.5768.21839.1184.45074.2089.69164.2696.09693.1355.21773.2521.35648.3443.38841.2581.83506.4151 1.2995.457.1255.0132.25161.0198.37781.0198.18655-.0002.37287-.0134.55758-.0396.34488-.0565.68324-.1473 1.01004-.2711.7161-.2867 1.39326-.6624 2.0155-1.1182l.18586-.128c.25594-.1767.49817-.3443.73887-.5012.13372-.0908.27259-.1737.4159-.2483.1356-.0694.27554-.13.41896-.1813.227-.0823.457-.1524.6871-.2118l.1934-.0548.1173-.0351c-.0901.3419-.1088.6987-.0548 1.0481.0765.5219.3 1.0113.6444 1.4107.3166.3609.7463.6037 1.2188.6886.0723.015.1456.0246.2193.029.1379.0242.2775.0364.4175.0366.1478.0002.2952-.0141.4402-.0427.3588-.0709.6965-.2231.9872-.4448.3197.1159.6578.1727.9979.1675.0959 0 .1965 0 .3047-.0106.4164-.0353.8263-.126 1.2187-.2697.375-.1317.7222-.3322 1.0238-.5911.0289-.0259.0533-.0518.0776-.0777l.0244-.0259c.1885-.174.3525-.3729.4875-.5911.2169-.3543.3565-.7504.4098-1.1623.0271-.2227.0271-.4477 0-.6704-.0266-.2257-.0777-.4479-.1523-.6627-.107-.2909-.2312-.5753-.3717-.8516-.0518-.1066-.1036-.2117-.1524-.3184-.176-.3298-.2798-.6933-.3047-1.0664-.0091-.3184.125-.6596.2819-1.0542l.0396-.099c.1028-.2484.1819-.506.2361-.7693.0531-.2709.0776-.54668.0731-.8227-.0008-.5803-.132-1.153-.3839-1.67578-.1406-.28852-.3356-.54716-.5743-.76172-.1482-.13199-.3144-.24227-.4936-.32753-.0056-.36454-.0704-.72574-.192-1.06946-.2059-.57305-.5256-1.09851-.9399-1.54476-.3892-.42647-.8419-.79028-1.3422-1.0786-.1249-.0716-.2589-.14168-.4159-.2148l-.0304-.05789-.0655-.12035-.0884-.16149c-.0228-.03808-.0472-.07465-.0716-.11121l-.0396-.06246-.2118-.31383c-.0548-.07922-.1127-.15234-.1706-.2148l-.0807-.09598c-.139-.17453-.2919-.33755-.4571-.4875l-.0807-.0777c-.0754-.07432-.1569-.14211-.2438-.20261l-.067-.05028-.2437-.176714-.0579-.042657c-.0834-.06156-.1843-.094675-.288-.094453z",
						fill: "#fff"
					}))
				},
				c = e => {
					let {
						className: t
					} = e;
					return Object(o.e)(a.n) ? s.a.createElement(d, {
						className: t
					}) : s.a.createElement(i, {
						className: t
					})
				},
				d = e => {
					let {
						className: t
					} = e;
					return s.a.createElement("svg", {
						className: t,
						fill: "#000",
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 40 40",
						height: "40",
						width: "40"
					}, s.a.createElement("path", {
						fill: "#ffdce2",
						d: "M11.76,15.15c.91-19.36,7.94-9.23,8-.71"
					}), s.a.createElement("path", {
						d: "M19.8,14.44a8.73,8.73,0,0,1-.45-2.07,14,14,0,0,0-.79-2.82,20,20,0,0,0-1.71-3.19,5.07,5.07,0,0,0-1.11-1.18,1.22,1.22,0,0,0-.47-.2c-.11,0-.17,0-.28.11a2.27,2.27,0,0,0-.65.88,8.65,8.65,0,0,0-.53,1.32c-.29.94-.53,1.91-.72,2.85-.4,1.87-.71,3.62-1.06,5a8.26,8.26,0,0,1-.83-4.73A30,30,0,0,1,13,5.56a6.5,6.5,0,0,1,.68-1c.13-.16.32-.3.47-.45a2.23,2.23,0,0,1,.62-.3A1.73,1.73,0,0,1,16,3.89a3.23,3.23,0,0,1,.95.69A10.88,10.88,0,0,1,19.1,8a13.48,13.48,0,0,1,.9,3.33A9.87,9.87,0,0,1,19.8,14.44Z"
					}), s.a.createElement("path", {
						fill: "#ffdce2",
						d: "M31.58,11.79c-3.31-3.6-8.69-4.11-13.65-2.9-5.63,1.4-7.87,6.7-10.6,10.93C5.6,21.92,3.57,23.67,2.11,26c-2.82,4.11.11,10.29,5.22,11.11,4.86.78,6.84-2.16,9.1-2.71,7.74-1.87,14.39-5.19,16-9.73C33.35,20.6,32.16,15.94,31.58,11.79Z"
					}), s.a.createElement("path", {
						d: "M31.59,11.78a19.39,19.39,0,0,1,.6,2.63A45.81,45.81,0,0,1,33,20a18.12,18.12,0,0,1,0,3.29,9.38,9.38,0,0,1-.31,1.67c-.11.26-.21.52-.32.77l-.41.72a14.17,14.17,0,0,1-3.83,3.82,29.56,29.56,0,0,1-6.61,3.36c-1.18.46-2.4.84-3.64,1.2a17.58,17.58,0,0,0-1.72.51,12.05,12.05,0,0,0-1.56.88,11.7,11.7,0,0,1-3.72,1.68,9.47,9.47,0,0,1-4.17,0A8.55,8.55,0,0,1,.63,32.57,8.24,8.24,0,0,1,.06,29a7,7,0,0,1,1.13-3.45,32.4,32.4,0,0,1,4.12-5c.35-.37.69-.75,1-1.12l.21-.25L6.7,19l.4-.64c.54-.86,1.07-1.73,1.6-2.58A22.63,22.63,0,0,1,12.5,11a11.46,11.46,0,0,1,5.28-2.83,20.36,20.36,0,0,1,5.45-.45,14.1,14.1,0,0,1,4.92,1.18,10.62,10.62,0,0,1,3.64,2.74,12.11,12.11,0,0,0-3.94-2.05,15,15,0,0,0-5-.52,22,22,0,0,0-4.59.76,12.15,12.15,0,0,0-3,1.28,12.59,12.59,0,0,0-3.54,3.18,44.59,44.59,0,0,0-2.77,4l-.66,1-.33.51L7.88,20s-.07.11-.12.17l-.11.12c-.54.61-1.1,1.2-1.65,1.76a34.28,34.28,0,0,0-3,3.43,8.73,8.73,0,0,0-.62.92,4.17,4.17,0,0,0-.48.94,5.91,5.91,0,0,0-.44,2,7.32,7.32,0,0,0,4,6.63,7.71,7.71,0,0,0,3.78.76,8.15,8.15,0,0,0,3.59-1,19.91,19.91,0,0,1,3.47-1.83,50.13,50.13,0,0,0,6.86-2.26,24.52,24.52,0,0,0,5.74-3.3A10.83,10.83,0,0,0,31,26.17a4.09,4.09,0,0,0,.4-.62,2.84,2.84,0,0,0,.33-.65l.15-.33a.34.34,0,0,0,0-.12l0-.18c0-.24.11-.48.14-.72C32.79,19.85,31.58,13.09,31.59,11.78Z"
					}), s.a.createElement("path", {
						fill: "#f9a",
						d: "M15,33.5c-.06-.16.39-.71,1.08-1.17a15.64,15.64,0,0,1,2-1c1.64-.84,3.65-1.16,5.09-1.87a12.34,12.34,0,0,0,3.33-2.36,7.84,7.84,0,0,0,2-2.77,2.59,2.59,0,0,1,.44,2,2.84,2.84,0,0,1-.7,1.6,16.44,16.44,0,0,1-6.26,3.36c-1.95.55-3.56,1-4.89,1.48-.31.13-.76.25-1.16.39S15.07,33.45,15,33.5Z"
					}), s.a.createElement("path", {
						fill: "#6a5cff",
						d: "M16.82,8.12c9.76-1.89,17.3,3.72,16.34,8,5,0,8.71,6.76,4.08,11.49,4.43,5.08,1.94,10.32-4.3,11.6-4.37.89-8.32-.76-9.83-4-1.71-3.65,1.08-7.29,5.78-7.42-5.56-5.2,3.42-8.34-.58-16.55"
					}), s.a.createElement("path", {
						d: "M28.32,11.28a2.88,2.88,0,0,1,.36.62,5.92,5.92,0,0,1,.57,1.41A8.27,8.27,0,0,1,29.32,18c-.43,1.8-1.46,3.56-1.82,5.3a4,4,0,0,0,.31,2.41c.09.17.21.33.31.5a5.45,5.45,0,0,0,.57.72l1.22,1.28c-.94.08-1.81.19-2.58.33a6.13,6.13,0,0,0-2.77,1.56,4,4,0,0,0-1.2,2.74,4.69,4.69,0,0,0,1,2.92,6.42,6.42,0,0,0,2.53,2,9.53,9.53,0,0,0,6.62.3c2.16-.61,4.1-2,4.68-3.84a5.58,5.58,0,0,0-1-4.93,9,9,0,0,0-.59-.77l-.47-.6-.23-.3c-.08-.05,0-.1.05-.15l.12-.14L37,26.28a3.29,3.29,0,0,0,.38-.54,5.5,5.5,0,0,0,.87-2.38A5.24,5.24,0,0,0,38,20.88a5.67,5.67,0,0,0-1.29-2.13,5.58,5.58,0,0,0-2-1.35A5.68,5.68,0,0,0,33,17.09L32.32,17l-.17,0a.92.92,0,0,1,0-.16l0-.34a12.4,12.4,0,0,0,.1-1.27,5.77,5.77,0,0,0-2.43-3.86,13.29,13.29,0,0,0-4.27-2.25,19.73,19.73,0,0,0-8.71-.71,16.24,16.24,0,0,1,9.39-.59,13.49,13.49,0,0,1,4.61,2,7.82,7.82,0,0,1,2.62,2.84l.28.58.2.64a5.36,5.36,0,0,1,.2,1.34s-.08.11,0,.11a2.28,2.28,0,0,0,.49.15,7.13,7.13,0,0,1,3.83,2.69,7.49,7.49,0,0,1,1.45,4.22,7.13,7.13,0,0,1-1.18,4.13l-.29.44a3.51,3.51,0,0,1-.3.36l-.19.21-.09.1s.05.07.07.11l.43.57.53.86a7.58,7.58,0,0,1,1,3.88,5.83,5.83,0,0,1-1.44,3.62,8.16,8.16,0,0,1-3,2.2,11.93,11.93,0,0,1-7,.82,8,8,0,0,1-5.53-3.76,5.77,5.77,0,0,1-.81-3.25,5.11,5.11,0,0,1,1.27-3,6.56,6.56,0,0,1,2.58-1.81,6.13,6.13,0,0,1,.72-.25L27,27.5l.15,0a3.27,3.27,0,0,1,.62-.07,4,4,0,0,1-.46-.55l-.18-.28a2.77,2.77,0,0,1-.22-.37l-.29-.82a5.64,5.64,0,0,1,.23-3.18c.64-1.87,2.06-4,2.21-6.23a8.74,8.74,0,0,0-.19-3C28.66,12.2,28.41,11.59,28.32,11.28Z"
					}), s.a.createElement("path", {
						d: "M21.44,26c4.39-2,1-8.4-3.18-5.83C15,22.4,17.62,27.75,21.44,26Z"
					}), s.a.createElement("path", {
						d: "M21.44,26a2.7,2.7,0,0,1-1.81.47A3.26,3.26,0,0,1,18.2,26a4.74,4.74,0,0,1-.94-.83,3.7,3.7,0,0,1-.74-3.43,3.84,3.84,0,0,1,2.65-2.54,3.49,3.49,0,0,1,3.12.51,4.05,4.05,0,0,1,1.58,2.53,3.41,3.41,0,0,1-.58,2.61,3.64,3.64,0,0,1-1.79,1.27,5.15,5.15,0,0,0,1.21-1.71,4.21,4.21,0,0,0,.23-1.55A3.07,3.07,0,0,0,22.4,21a2.89,2.89,0,0,0-1.53-1.1A3.08,3.08,0,0,0,17.68,21,3,3,0,0,0,17.22,24,3.49,3.49,0,0,0,19,25.89a3.7,3.7,0,0,0,1.39.27h.37L21,26.1Z"
					}), s.a.createElement("path", {
						fill: "#f9a",
						d: "M10.33,26.53c-2.77-.86-3.6-1.91-2.94-3.47C.11,25.47.07,33.88,7.18,36.34,13,38.34,17.35,28.69,10.33,26.53Z"
					}), s.a.createElement("path", {
						fill: "#f9a",
						d: "M10.33,26.52a6,6,0,0,1,1.09.35,7.15,7.15,0,0,1,.93.56,6.61,6.61,0,0,1,.93.91A4.92,4.92,0,0,1,14.13,31,7,7,0,0,1,14,32.23c-.11.37-.17.72-.28,1a6.35,6.35,0,0,1-1.83,2.6A4.9,4.9,0,0,1,8.76,37,5.92,5.92,0,0,1,7,36.75c-.51-.22-1-.39-1.54-.66a8.58,8.58,0,0,1-1.39-.92A7.55,7.55,0,0,1,2.94,34a6.86,6.86,0,0,1-1.51-3.62,6.46,6.46,0,0,1,.74-3.72A7.73,7.73,0,0,1,4.53,24a14.66,14.66,0,0,1,1.41-.82l1-.36.58-.22A1.88,1.88,0,0,1,8,22.47a8.28,8.28,0,0,0-.48,1.43,1.39,1.39,0,0,0,.07.59,2.1,2.1,0,0,0,.76.89,8.54,8.54,0,0,0,2,1A6.6,6.6,0,0,1,8,25.7a2.26,2.26,0,0,1-1-1.14,1.91,1.91,0,0,1-.11-.41c0-.11,0-.31,0-.28s0-.06,0-.07-.07.05-.07.06h0L6.41,24c-.34.18-.61.36-.83.46A6.81,6.81,0,0,0,2.8,27.22a5.82,5.82,0,0,0-.57,3.67A6,6,0,0,0,3.86,34a7.78,7.78,0,0,0,2.82,1.87,4.54,4.54,0,0,0,5.47-1.18,5.69,5.69,0,0,0,1.3-2.36,6.17,6.17,0,0,0,.22-1.26,4.91,4.91,0,0,0-.14-1.22,4.13,4.13,0,0,0-1.43-2.31l-.54-.42a3.12,3.12,0,0,0-.53-.29Z"
					}), s.a.createElement("path", {
						d: "M33,34.05c-.07-.07,0-.48.1-.95a3.82,3.82,0,0,0-.05-1.3,4.28,4.28,0,0,0-1.77-2.53,5.16,5.16,0,0,0-2.41-.83,8.67,8.67,0,0,0-2.22.13,2.56,2.56,0,0,1,2-1.06,6.24,6.24,0,0,1,3.93,2,4.58,4.58,0,0,1,.9,1.6,4.07,4.07,0,0,1,.11,1.61A3.53,3.53,0,0,1,33,34.05Z"
					}), s.a.createElement("path", {
						d: "M11.6,31.34a1.52,1.52,0,0,1-.23,1.17,3.33,3.33,0,0,1-.61.73c-.24.18-.45.38-.61.48a7.05,7.05,0,0,1-4.23,1,6.93,6.93,0,0,1-3.47-1.08A4.36,4.36,0,0,1,.63,31.32c.42.19.81.51,1.24.7s.77.38.9.56A5.23,5.23,0,0,0,5,33.78a6.76,6.76,0,0,0,2.3.15,5.93,5.93,0,0,0,3.37-1.35,4.62,4.62,0,0,0,.61-.63C11.43,31.69,11.55,31.43,11.6,31.34Z"
					}), s.a.createElement("path", {
						fill: "#ffdce2",
						d: "M19.92,15.9c.32-15.81,8.82-12.13,9.16-.18"
					}), s.a.createElement("path", {
						d: "M29.07,15.72a6.88,6.88,0,0,1-.46-2.09,13.82,13.82,0,0,0-.76-2.86,14.36,14.36,0,0,0-1.77-3.13c-.71-.94-1.71-1.52-2.28-1.24a3.32,3.32,0,0,0-1.53,1.77,15,15,0,0,0-.95,2.71c-.49,1.85-.78,3.61-1.1,5a7.42,7.42,0,0,1-.89-4.82,16,16,0,0,1,2.33-4.8A3.25,3.25,0,0,1,23.87,5a3.11,3.11,0,0,1,2.25.82,8.85,8.85,0,0,1,2.32,3.38,12.2,12.2,0,0,1,.87,3.39A11.14,11.14,0,0,1,29.07,15.72Z"
					}), s.a.createElement("path", {
						d: "M6.75,30.09a1,1,0,1,0,.06-2C5.64,28.27,5.51,30,6.75,30.09Z"
					}), s.a.createElement("path", {
						d: "M6.75,30.1A.74.74,0,0,1,6.19,30a1,1,0,0,1-.41-.73,1.19,1.19,0,0,1,.36-1,1.24,1.24,0,0,1,1.12-.3,1.08,1.08,0,0,1,.75.67,1.32,1.32,0,0,1,0,.94,1,1,0,0,1-.58.6,1.06,1.06,0,0,1-.68,0,1.6,1.6,0,0,0,.57-.28,1.6,1.6,0,0,0,.28-.36.93.93,0,0,0,0-1.08.85.85,0,0,0-1-.19,1,1,0,0,0-.45,1.45C6.23,29.91,6.65,30.08,6.75,30.1Z"
					}), s.a.createElement("path", {
						d: "M2.09,28.69c1.06-.05,1.47-2.36.39-2C1.59,27.11,1.2,28.85,2.09,28.69Z"
					}), s.a.createElement("path", {
						d: "M2.09,28.69a.32.32,0,0,1-.16,0,.37.37,0,0,1-.3-.17,1.1,1.1,0,0,1-.06-.7A1.82,1.82,0,0,1,1.94,27a1,1,0,0,1,.85-.44.47.47,0,0,1,.37.29.88.88,0,0,1,.08.41,1.92,1.92,0,0,1-.19.73,1.13,1.13,0,0,1-1,.72A1.46,1.46,0,0,0,2.78,28,1.34,1.34,0,0,0,3,27c-.08-.38-.54-.28-.74-.08a1.73,1.73,0,0,0-.62,1.4.37.37,0,0,0,.16.31A.45.45,0,0,0,2.09,28.69Z"
					}), s.a.createElement("circle", {
						fill: "#19f2c8",
						cx: "20.51",
						cy: "23.28",
						r: "2.04"
					}), s.a.createElement("path", {
						fill: "#19f2c8",
						d: "M22.55,23.28a2.72,2.72,0,0,0-.35-1A1.89,1.89,0,0,0,21,21.4a2,2,0,0,0-1.74.49,1.87,1.87,0,0,0-.56,1.69,1.91,1.91,0,0,0,2.25,1.51,2,2,0,0,0,1.56-1.81,1.81,1.81,0,0,1-.23,1.29,1.84,1.84,0,0,1-.94.78,2.22,2.22,0,0,1-2.5-.78,2.14,2.14,0,0,1,1.49-3.43,2.1,2.1,0,0,1,1.7.61,2,2,0,0,1,.47.85A2.09,2.09,0,0,1,22.55,23.28Z"
					}), s.a.createElement("circle", {
						fill: "#fff",
						cx: "18.9",
						cy: "21.87",
						r: "1.31"
					}), s.a.createElement("path", {
						fill: "#fff",
						d: "M20.21,21.87a2.75,2.75,0,0,0-.25-.65,1.17,1.17,0,0,0-.77-.52,1.22,1.22,0,0,0-1.06.32,1.15,1.15,0,0,0-.34,1,1.18,1.18,0,0,0,1.37.92,1.28,1.28,0,0,0,1-1.11,1.05,1.05,0,0,1-.08.87,1.21,1.21,0,0,1-.62.54,1.52,1.52,0,0,1-1.66-.55,1.44,1.44,0,0,1-.13-1.5,1.42,1.42,0,0,1,1.11-.77,1.34,1.34,0,0,1,1.12.41,1.26,1.26,0,0,1,.3.56A1.41,1.41,0,0,1,20.21,21.87Z"
					}), s.a.createElement("path", {
						fill: "#f9a",
						d: "M26,16.18c-1.46,1-4.82.41-5.26-1.56s.44-6.22,1.55-6.74C23.78,7.2,27.18,15.35,26,16.18Z"
					}), s.a.createElement("path", {
						d: "M26,16.17a1.08,1.08,0,0,0,.13-.59A5.5,5.5,0,0,0,26,14.27a13.67,13.67,0,0,0-1-2.63,14.42,14.42,0,0,0-1.87-3,1.41,1.41,0,0,0-.54-.41s0,0-.08,0-.14.14-.21.23a5.79,5.79,0,0,0-.64,1.52A13.35,13.35,0,0,0,21.16,13a6.94,6.94,0,0,0,.05,1.38,1.75,1.75,0,0,0,.51,1,3.86,3.86,0,0,0,2.16.95A3.71,3.71,0,0,0,26,16.06a3,3,0,0,1-2.21.92,3.5,3.5,0,0,1-2.17-.56,3.09,3.09,0,0,1-.94-1.09A3.12,3.12,0,0,1,20.37,14a11.14,11.14,0,0,1,.19-2.35,13.82,13.82,0,0,1,.53-2.13,6.53,6.53,0,0,1,.41-1,2.11,2.11,0,0,1,.72-.84.75.75,0,0,1,.64,0,1.88,1.88,0,0,1,.45.31,4.87,4.87,0,0,1,.65.73,12.72,12.72,0,0,1,.94,1.54,15.23,15.23,0,0,1,1.21,3,6.67,6.67,0,0,1,.26,1.7,2.64,2.64,0,0,1-.08.78A.63.63,0,0,1,26,16.17Z"
					}), s.a.createElement("path", {
						fill: "#94b3ff",
						d: "M33.47,23.09a.89.89,0,0,1-.11-.3l-.06-.26,0-.14,0-.08-.07.05a6.76,6.76,0,0,0-.63.52,6.62,6.62,0,0,0-.72.77l-.13.16-.13-.17a1.25,1.25,0,0,1-.19-1.07l.08-.32,0-.17s0-.18-.06-.16l-.23.15-.26.2a6.3,6.3,0,0,0-.83.72,2.56,2.56,0,0,0-.58.83c-.1.3-.08.46.11.63L29,25a2.77,2.77,0,0,1-.61-2.35,12.57,12.57,0,0,1,1.14-3,14,14,0,0,0,1-2.64,5.72,5.72,0,0,0,0-2.47c-.1-.38-.24-.73-.36-1.08l-.51-.93a8.88,8.88,0,0,1,.82.76,5.83,5.83,0,0,1,.68,1.14,4.33,4.33,0,0,1,.31,1.24,2.53,2.53,0,0,1,0,.94A17.5,17.5,0,0,1,29.71,21,7.05,7.05,0,0,0,29,22.94a2.13,2.13,0,0,0,.48,1.69l-.27.27a1.13,1.13,0,0,1-.35-.66,1.21,1.21,0,0,1,.12-.71,3.69,3.69,0,0,1,.75-1,7.86,7.86,0,0,1,.91-.75,5.41,5.41,0,0,1,.64-.38c.24-.13.45-.21.7-.32.07,0,0,.25.06.34a2.16,2.16,0,0,1,0,.36,4.34,4.34,0,0,1-.2.79.94.94,0,0,0,0,.83h-.39l.17-.19a6.25,6.25,0,0,1,1.49-1.12l.21-.11c0-.05,0,.05,0,.08v.12l0,.43Z"
					}), s.a.createElement("path", {
						fill: "#94b3ff",
						d: "M27.44,35.4a1.55,1.55,0,0,1-.47-.64,3,3,0,0,1-.23-.68,2.52,2.52,0,0,1-.06-.52l0-.25s0-.11,0-.08l-.1.1a1.38,1.38,0,0,0-.26.39,1.3,1.3,0,0,0-.12.4,2.49,2.49,0,0,0-.08.72,2.42,2.42,0,0,0,.44,1.36l-.56.55a3.74,3.74,0,0,1-1.55-2.34,4.67,4.67,0,0,1,2.14-4.55,4,4,0,0,1,4-.37c-.28,0-.59,0-.9.05a4.93,4.93,0,0,0-.94.21,8.29,8.29,0,0,0-1.35.61,4.13,4.13,0,0,0-2.34,3,3,3,0,0,0,1.28,2.95l-.28.28a3,3,0,0,1-.36-2.69,2.88,2.88,0,0,1,.88-1.29l.26-.22.14-.11c.05,0,.1-.08.08,0s0,.13.14.13h.05a3.9,3.9,0,0,0-.16,2.21A3.41,3.41,0,0,0,27.44,35.4Z"
					}), s.a.createElement("path", {
						fill: "#493ac1",
						d: "M28.06,37.14a11.11,11.11,0,0,0,1.27.18,10.21,10.21,0,0,0,1.84-.17,11.56,11.56,0,0,0,2.17-.61,6.25,6.25,0,0,0,1.79-1.22,4.49,4.49,0,0,0,1.16-3,5.57,5.57,0,0,0-.53-2.88,2.17,2.17,0,0,1,1.47,1,2.51,2.51,0,0,1,.52,1.45,7.52,7.52,0,0,1-1,3.29,4.4,4.4,0,0,1-1.05,1.13,9.61,9.61,0,0,1-1.16.8,6.9,6.9,0,0,1-2.43.81A11.52,11.52,0,0,1,29.9,38a3,3,0,0,1-1.16-.31A1.74,1.74,0,0,1,28.06,37.14Z"
					}), s.a.createElement("path", {
						fill: "#493ac1",
						d: "M33.09,26.76c0-.13.41-.15.79-.21a2,2,0,0,0,1-.34,3.49,3.49,0,0,0,.44-.41c.12-.13.21-.31.34-.48a3.58,3.58,0,0,0,.46-1.1,8.75,8.75,0,0,0-.18-3.77c.82,0,1.72.82,1.68,1.24a8.14,8.14,0,0,1-.88,3.8,3.82,3.82,0,0,1-1.05,1.24,2.52,2.52,0,0,1-1.37.44A2.49,2.49,0,0,1,33.09,26.76Z"
					}), s.a.createElement("path", {
						fill: "#fff8b8",
						d: "M2.29.57C0,2,5.89,16.92,8,19.08c2.8,1.55,7.52-.47,7.38-3.83S3.9-2.36,2.29.57Z"
					}), s.a.createElement("path", {
						d: "M2.27.56A.46.46,0,0,1,2.33.4.49.49,0,0,1,2.56.15a1.27,1.27,0,0,1,1.07,0A8.53,8.53,0,0,1,6.2,1.76a48.61,48.61,0,0,1,4.41,4.49,35.05,35.05,0,0,1,4.79,6.5,7.42,7.42,0,0,1,.83,2.15,4.29,4.29,0,0,1-.42,2.51,6,6,0,0,1-3.61,2.86,6.27,6.27,0,0,1-4,0L7.73,20a1.74,1.74,0,0,1-.35-.19l-.27-.3a8.55,8.55,0,0,1-.57-.79c-.33-.51-.6-1-.87-1.53a47.33,47.33,0,0,1-2.5-6A40,40,0,0,1,1.63,5.49a16.66,16.66,0,0,1-.3-2.67,5.66,5.66,0,0,1,.1-1.3A1.65,1.65,0,0,1,2.14.32a1.41,1.41,0,0,0-.31,1.21,6.29,6.29,0,0,0,.26,1.23c.24.84.56,1.72.89,2.57C3.63,7,4.29,8.6,4.52,9.47a46.46,46.46,0,0,0,1.64,5c.31.79.65,1.57,1,2.31.18.37.37.72.57,1.07.1.16.2.34.31.49s.11.16.17.22.06.1.11.13c2.53,1.36,6.38-.38,6.65-3V15.3a1.75,1.75,0,0,0-.07-.44,5.61,5.61,0,0,0-.34-.91,16.41,16.41,0,0,0-.95-1.75C13,11.08,12.2,10,11.46,9,10,7.06,8.48,5.29,7,3.69A32.32,32.32,0,0,0,4.48,1.12,4,4,0,0,0,3.13.3.77.77,0,0,0,2.27.56Z"
					}), s.a.createElement("path", {
						fill: "#ccffef",
						d: "M10.69,11.08a4.78,4.78,0,0,1-5,2.21c.85,2.93,2.21,5.84,3.6,6.41,2,.82,6.16-.77,6.05-4.37-.05-1.53-2.15-4.85-4-6.41a3.06,3.06,0,0,1-1.36,3"
					}), s.a.createElement("path", {
						d: "M10,11.89a4,4,0,0,0,.7-.78,3.28,3.28,0,0,0,.46-2.47c0-.16.22.08.38.21l.5.46c.37.36.54.56.77.82.43.49.79,1,1.06,1.31a13.15,13.15,0,0,1,1.36,2.22A5.79,5.79,0,0,1,15.66,15a3.73,3.73,0,0,1,0,.74,3.55,3.55,0,0,1-.08.73A4.5,4.5,0,0,1,14.15,19a5.93,5.93,0,0,1-2.51,1.3A4.13,4.13,0,0,1,8.71,20a5.88,5.88,0,0,1-1.77-2.14,15.31,15.31,0,0,1-1-2.29c-.14-.38-.26-.75-.37-1.12l-.23-.78-.26-.94c.27.06.53.13.8.17l.39.07a.58.58,0,0,0,.18,0h.1a3.55,3.55,0,0,0,.73,0,4.65,4.65,0,0,0,1.36-.39,5.37,5.37,0,0,0,2-1.6,4.48,4.48,0,0,1-2,2.32A4.31,4.31,0,0,1,7,13.86a2.56,2.56,0,0,1-.39,0H6.36s0,0,0,.08l.11.43c.08.28.16.56.25.83q.27.83.6,1.59a6.17,6.17,0,0,0,1.8,2.54,3.65,3.65,0,0,0,2.83.07,4.85,4.85,0,0,0,2.28-1.55,3.81,3.81,0,0,0,.81-2.38,5.26,5.26,0,0,0-.75-2.28,17.47,17.47,0,0,0-1.26-2c-.22-.3-.45-.6-.68-.88s-.23-.27-.35-.41l-.2-.23-.17-.17-.1-.11s0,0,0,.07a1.84,1.84,0,0,1-.14.64,2.93,2.93,0,0,1-.46.9A2.48,2.48,0,0,1,10,11.89Z"
					}), s.a.createElement("path", {
						fill: "#19f2c8",
						d: "M8.57,5.17c.14,2.42-2.75,3.95-4.8,3.76.61,1.47,1.56,6,3.36,5.89,2.38,0,5.54-1.7,5.25-4.6A17.52,17.52,0,0,0,8.44,5.46"
					}), s.a.createElement("path", {
						d: "M8.45,5.46A6.8,6.8,0,0,1,10.32,7,23.61,23.61,0,0,1,12.46,9.8c.06.1.27.33.23.56a3.26,3.26,0,0,1,0,.54,4,4,0,0,1-.2,1.08,4.35,4.35,0,0,1-1.29,1.84,6.37,6.37,0,0,1-4.11,1.54h.06a3,3,0,0,1-.53,0,3.14,3.14,0,0,1-.46-.18,3.81,3.81,0,0,1-1.27-1.48,11.83,11.83,0,0,1-.68-1.57c-.19-.52-.35-1-.51-1.54L3.5,9.77,3,8.37c.33,0,.68.05,1,0h.45c.18,0,.17,0,.27,0a4.7,4.7,0,0,0,.83-.17A4.79,4.79,0,0,0,7,7.54,3.1,3.1,0,0,0,8.41,5.18a2.4,2.4,0,0,1,.08,1.33A3.33,3.33,0,0,1,7.72,8,4.42,4.42,0,0,1,5.4,9.34c-.15,0-.29.05-.44.06H4.61L4.4,9.37s0,.05,0,.09a1.75,1.75,0,0,0,0,.25l.25.91a17.49,17.49,0,0,0,.54,1.73A6.71,6.71,0,0,0,6,13.84a1.42,1.42,0,0,0,1.12.76h0a5.26,5.26,0,0,0,4.57-2.48A3.1,3.1,0,0,0,12.05,11a2.72,2.72,0,0,0,0-.57c0-.1,0-.12,0-.17L11.9,10c-.4-.67-.83-1.29-1.25-1.87A27.49,27.49,0,0,0,8.45,5.46Z"
					}), s.a.createElement("path", {
						fill: "#fff",
						d: "M3.3,2.08A31.85,31.85,0,0,1,4.72,5.57c.7,1.64,1.36,3.56,2,5.26a47.44,47.44,0,0,0,3.47,7.56A5.89,5.89,0,0,1,7.76,15.9c-1-2.49-1.65-4.65-2.35-6.56s-1.28-3.56-1.69-5A19.92,19.92,0,0,1,3.3,2.08Z"
					}), s.a.createElement("path", {
						fill: "#6a5cff",
						d: "M20.72,8c-12.86-4.26-7.25,10.38.19,7.55-1.23-1.74-.58-5.59-.18-7.17"
					}), s.a.createElement("path", {
						d: "M20.74,8.4a16.52,16.52,0,0,1-.19,2.41,9.2,9.2,0,0,0,.22,3.3,2.47,2.47,0,0,0,.1.29l.06.14a1.76,1.76,0,0,0,.09.21,12.51,12.51,0,0,0,.67,1.1,10.52,10.52,0,0,1-1.3.49c-.11,0-.25.06-.37.09l-.27.06a4,4,0,0,1-.5.06,5.26,5.26,0,0,1-2.08-.2,7,7,0,0,1-3.39-2.27,6.31,6.31,0,0,1-1.55-3.87,3.51,3.51,0,0,1,.66-2.16,3.44,3.44,0,0,1,1.78-1.23,6.69,6.69,0,0,1,3.48,0,12.83,12.83,0,0,1,2.64,1c-.81.11-1.91.07-2.89.14s-1.81.15-2.21.2a2.36,2.36,0,0,0-1.61.62,2.2,2.2,0,0,0-.58,1.62A5.25,5.25,0,0,0,15,13.73a5.46,5.46,0,0,0,2.89,1.7,4.79,4.79,0,0,0,1.55.08,2.29,2.29,0,0,0,.36-.07l.21,0c.1-.06.28-.07.29-.15a2.12,2.12,0,0,1-.12-.2,1.34,1.34,0,0,1-.11-.31,5.39,5.39,0,0,1-.22-1,9.32,9.32,0,0,1,0-1.9A11.43,11.43,0,0,1,20.74,8.4Z"
					}), s.a.createElement("path", {
						fill: "#94b3ff",
						d: "M17.76,12.22c-.08,0-.17-.4-.36-.73,0-.05-.07,0,0-.08s0,.05,0,.07a2.47,2.47,0,0,0-.21.36l-.41.85-.08,0a1.77,1.77,0,0,1-.58-1,2.63,2.63,0,0,1,.05-1.39l.49.51a1.81,1.81,0,0,0-.41.23l0,0a.36.36,0,0,0-.11.1,1,1,0,0,0-.2.27,11.84,11.84,0,0,0-.49,1.4l-.18-.33-.08-.14h0L15,12.27,14.93,12a2.4,2.4,0,0,1-.29-1,1.92,1.92,0,0,1,.06-.62,1.81,1.81,0,0,1,.2-.54,2.45,2.45,0,0,1,.52-.62,3.09,3.09,0,0,1,2.39-.62c-.28.21-.67.4-1,.62s-.55.4-.69.48a1.51,1.51,0,0,0-.57.46c-.08.12-.1.13-.14.2a.77.77,0,0,0-.07.2,1,1,0,0,0,.05.5c0,.07,0,0,0,0l0-.09a1.18,1.18,0,0,1,.11-.19,1.11,1.11,0,0,1,.29-.28,2.53,2.53,0,0,1,.54-.28l.37-.14-.13.39a1.94,1.94,0,0,0-.06.86,1.13,1.13,0,0,0,.08.22.41.41,0,0,0,0,.09s0,0,.06-.07a1.67,1.67,0,0,1,.18-.28.46.46,0,0,1,.11-.12.56.56,0,0,1,.14-.1.32.32,0,0,1,.27,0c.24.21.19.35.23.49A3.65,3.65,0,0,1,17.76,12.22Z"
					}))
				}
		},
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				i = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(o.d)(),
					n = Object(o.e)(t => Object(c.W)(t, {
						subredditId: e
					})),
					r = Object(o.e)(t => Object(i.i)(t, {
						subredditId: e
					})),
					d = Object(o.e)(t => Object(i.k)(t, {
						subredditId: e
					})),
					l = s.a.useCallback(() => {
						n.name && t(Object(a.l)(n.name))
					}, [n.name, t]);
				return s.a.useEffect(() => {
					d || r || l()
				}, [d, r, l]), {
					isFetching: d,
					isFetched: r,
					fetch: l
				}
			}
		},
		"./src/reddit/components/Econ/Prediction/themes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/config.ts");
			const s = {
				theme_1: `url(${r.a.assetPath}/img/econ/predictions/theme1.png)`,
				theme_2: `url(${r.a.assetPath}/img/econ/predictions/theme2.png)`,
				theme_3: "linear-gradient(104.49deg, #279A63 7.96%, #B6C048 119.75%)",
				theme_4: "linear-gradient(91.64deg, #F5AC1F -10.49%, #FC7519 52.61%)",
				theme_5: `url(${r.a.assetPath}/img/econ/predictions/theme5.png)`,
				theme_6: `url(${r.a.assetPath}/img/econ/predictions/theme6.png)`,
				theme_7: `url(${r.a.assetPath}/img/econ/predictions/theme7.png)`,
				theme_8: `url(${r.a.assetPath}/img/econ/predictions/theme8.png)`
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
					tokenIcon: r,
					topPredictorsRank: i
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(c.a.predictionLeaderboardList, t)
				}, (null == i ? void 0 : i.length) ? i.map(e => {
					let {
						rank: t,
						redditor: o,
						redditorInfo: i,
						score: d
					} = e;
					var l;
					return o || i ? s.a.createElement("div", {
						key: `prediction-leaderboard-${i.id}`,
						className: c.a.topPredictor
					}, s.a.createElement(a.a, {
						isCurrentUser: (null === (l = null == n ? void 0 : n.redditor) || void 0 === l ? void 0 : l.name) === i.displayName,
						rank: t,
						redditor: o,
						redditorInfo: i,
						score: d,
						tokenIcon: r
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
				return y
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = Object(a.a)(e => {
				let {
					onClose: t,
					leaderboard: n,
					tournamentId: a,
					tokenIcon: f,
					isPreviousEvent: x = !1,
					isQueried: E = !1
				} = e;
				const y = Object(m.a)(),
					_ = Object(u.a)(),
					{
						currentRank: O,
						topPredictorsRank: j
					} = n,
					C = Object(o.e)(e => a ? Object(p.a)(e, a) : null),
					N = Object(o.e)(e => Object(i.r)(e, {
						pageLayer: _
					}));
				Object(r.useEffect)(() => {
					y(a ? Object(l.g)(a, x, E) : Object(l.e)())
				}, []);
				const k = O && O.rank > 0;
				return s.a.createElement("div", {
					className: g.a.container
				}, s.a.createElement("div", {
					className: g.a.header
				}, s.a.createElement(c.t, {
					className: g.a.closeButton,
					Icon: Object(d.b)("close"),
					priority: c.c.Plain,
					onClick: t
				}), s.a.createElement("h1", null, a ? v._("Tournament Leaderboard", null, {
					hk: "2ZYGPJ"
				}) : v._("All Time Top Predictors", null, {
					hk: "2OsQLm"
				})), s.a.createElement("h2", {
					className: g.a.subHeader
				}, C ? C.name : null == N ? void 0 : N.displayText)), s.a.createElement("div", {
					className: g.a.listContainer
				}, s.a.createElement(b.a, {
					currentRank: O,
					topPredictorsRank: j,
					tokenIcon: f
				}), k && s.a.createElement("div", {
					className: g.a.spacer
				}, " ")), O && O.redditorInfo && k && s.a.createElement(h.a, {
					className: g.a.currentRank,
					isCurrentUser: !0,
					rank: O.rank,
					redditor: O.redditor,
					redditorInfo: O.redditorInfo,
					score: O.score,
					tokenIcon: f
				}))
			}), y = e => s.a.createElement(E, x({
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
					rank: r,
					redditor: m,
					redditorInfo: h,
					score: f,
					tokenIcon: g
				} = e;
				const x = Object(u.a)(),
					{
						icon: v,
						name: E,
						profile: y
					} = m || {},
					_ = null != E ? E : h.displayName;
				return s.a.createElement("div", {
					className: Object(o.a)(p.a.predictor, t)
				}, s.a.createElement("div", {
					className: p.a.rank
				}, r), s.a.createElement(d.default, {
					className: p.a.userLink,
					onClick: () => x(Object(l.g)({
						targetUserId: h.id
					})),
					to: `/user/${_}`,
					disabled: h.displayName === a.G || h.displayName === a.Ob
				}, s.a.createElement("div", {
					className: p.a.leaderboardIcon
				}, s.a.createElement(c.a, {
					className: Object(o.a)(p.a.userIcon, p.a.avatar),
					iconUrl: null == v ? void 0 : v.url,
					isNSFW: !!(null == y ? void 0 : y.isNsfw),
					userName: null != _ ? _ : ""
				}), s.a.createElement(i.a, {
					className: p.a.rankBadge,
					rank: r
				})), s.a.createElement("div", {
					className: p.a.name
				}, s.a.createElement("div", {
					className: p.a.userName
				}, _), n && s.a.createElement("div", {
					className: p.a.yourProfile
				}, b._("Yep, thats you.", null, {
					hk: "3DqdE1"
				})))), s.a.createElement("div", {
					className: p.a.score
				}, s.a.cloneElement(g, {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
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
						alt: r.fbt._("First place", null, {
							hk: "3uGGfU"
						}),
						src: u,
						srcSet: `\n  ${l}/first.png,\n  ${u} 2x,\n  ${l}/first@3x.png 3x,\n`
					},
					2: {
						alt: r.fbt._("Second place", null, {
							hk: "4AYjyw"
						}),
						src: m,
						srcSet: `\n  ${l}/second.png,\n  ${m} 2x,\n  ${l}/second@3x.png 3x,\n`
					},
					3: {
						alt: r.fbt._("Third place", null, {
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
					const r = t && b[t];
					return r ? a.a.createElement("img", {
						alt: r.alt,
						className: Object(s.a)(d.a.placeBadge, n),
						src: r.src,
						srcSet: r.srcSet
					}) : null
				}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
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
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
			const E = e => {
				let {
					className: t,
					subredditId: n,
					tournamentId: s
				} = e;
				var x;
				const E = Object(b.a)(),
					y = Object(l.eb)(),
					_ = "true" === (null == y ? void 0 : y.queryParams["top-predictors"]),
					[O, j, C] = Object(p.a)(_),
					{
						leaderboard: N,
						error: k
					} = Object(c.a)(n, s),
					w = s ? o.a.createElement(i.a, {
						tournamentId: s
					}) : o.a.createElement(h.a, null);
				if (o.a.useEffect(() => {
						N && E(s ? Object(m.h)(s) : Object(m.f)())
					}, [N, s]), !(null === (x = null == N ? void 0 : N.topPredictorsRank) || void 0 === x ? void 0 : x.length) || k) return null;
				const {
					currentRank: S,
					topPredictorsRank: I
				} = N, P = Boolean(s) ? r.fbt._("Tournament leaderboard", null, {
					hk: "1WFLrI"
				}) : r.fbt._("Top Predictors", null, {
					hk: "3HCYxQ"
				});
				return o.a.createElement(d.a, {
					className: Object(a.a)(v.a.themedWidget, t),
					contentOnly: !0
				}, o.a.createElement("h2", {
					className: v.a.header
				}, P), o.a.createElement(f.a, {
					className: v.a.list,
					currentRank: S,
					topPredictorsRank: I.slice(0, 4),
					tokenIcon: w
				}), o.a.createElement("div", {
					className: v.a.openModalButtonContainer
				}, o.a.createElement(u.a, {
					className: v.a.openModalButton,
					isFullWidth: !0,
					priority: u.c.Primary,
					onClick: () => {
						s && E(Object(m.c)()), j()
					}
				}, r.fbt._("See All", null, {
					hk: "1Ozf02"
				}))), O && o.a.createElement(g.a, {
					className: v.a.modal,
					leaderboard: N,
					tournamentId: s,
					tokenIcon: w,
					onClose: C
				}))
			};
			t.default = E
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/predictions/index.ts"),
				a = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts");

			function i(e, t) {
				const n = Object(s.d)(),
					i = Object(s.e)(n => t ? Object(a.h)(n, {
						tournamentId: t
					}) : Object(a.d)(n, {
						subredditId: e
					})),
					c = Object(s.e)(t => Object(a.c)(t, {
						subredditId: e
					})),
					d = Object(s.e)(t => Object(a.b)(t, {
						subredditId: e
					})),
					l = Object(s.e)(t => Object(a.a)(t, {
						subredditId: e
					}));
				return Object(r.useEffect)(() => {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
							s = Object(o.e)(e => Object(u.h)(e, {
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
						return Object(r.useEffect)(() => {
							s || i || a || c || n(Object(l.o)(e, t))
						}, [s, a, i, c, e, t, n]), {
							leaderboard: s,
							error: c
						}
					}(t, n);
				return !(null == p ? void 0 : p.topPredictorsRank) || h ? null : s.a.createElement(m.a, {
					className: b.a.modal,
					leaderboard: p,
					tournamentId: n,
					tokenIcon: s.a.createElement(d.a, {
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
				E = n("./src/reddit/helpers/predictions/index.ts"),
				y = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/config.ts"),
				j = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/reddit/components/Econ/Prediction/Confetti/index.tsx"),
				N = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				k = n("./src/reddit/models/Prediction/index.ts"),
				w = n("./src/reddit/selectors/poll/index.ts"),
				S = n("./src/redditGQL/types.ts"),
				I = n("./src/reddit/components/Econ/PredictionsPostList/TournamentBanner/index.m.less"),
				P = n.n(I);
			const T = e => {
					let {
						subredditId: t
					} = e;
					const n = Object(o.e)(e => Object(y.f)(e, {
							subredditId: t
						})),
						r = Object(o.e)(e => n ? Object(w.h)(e, n.tournamentId) : []);
					if (!n) return null;
					if (n.status === S.D.Closed) return s.a.createElement(A, null);
					const a = r.filter(e => e.predictionStatus === k.b.Open && e.endsAt > Date.now()),
						i = a.length > 0,
						c = a.length && a.some(e => !e.userSelection);
					return i && !c ? s.a.createElement(B, null) : i ? null : s.a.createElement(L, null)
				},
				L = () => s.a.createElement("section", {
					className: P.a.container
				}, s.a.createElement("div", {
					className: P.a.image,
					style: {
						backgroundImage: `url(${O.a.assetPath}/img/econ/predictions/closet.png)`
					}
				}), s.a.createElement("div", null, s.a.createElement("h3", {
					className: P.a.title
				}, j.fbt._("There's nothing to predict right now", null, {
					hk: "29BSNR"
				})), s.a.createElement("p", {
					className: P.a.subhead
				}, j.fbt._("Mods can always add new questions, so check back later!", null, {
					hk: "1HtxKJ"
				})))),
				B = () => s.a.createElement("section", {
					className: P.a.container
				}, s.a.createElement(C.a, {
					className: P.a.confetti
				}), s.a.createElement(N.a, {
					className: P.a.image
				}), s.a.createElement("div", null, s.a.createElement("h3", {
					className: P.a.title
				}, j.fbt._("Your predictions are in!", null, {
					hk: "2hlZz4"
				})), s.a.createElement("p", {
					className: P.a.subhead
				}, j.fbt._("Mods can always add new questions, so check back later!", null, {
					hk: "48ISNI"
				})))),
				A = () => s.a.createElement("section", {
					className: P.a.container
				}, s.a.createElement("div", {
					className: P.a.image,
					style: {
						backgroundImage: `url(${O.a.assetPath}/img/econ/predictions/closet.png)`
					}
				}), s.a.createElement("div", null, s.a.createElement("h3", {
					className: P.a.title
				}, j.fbt._("No prediction tournaments are active right now", null, {
					hk: "4G1oCo"
				})), s.a.createElement("p", {
					className: P.a.subhead
				}, j.fbt._("Check back to see when a tournament is created.", null, {
					hk: "2ldkRW"
				}))));
			var M = n("./src/lib/classNames/index.ts"),
				R = n("./src/lib/prettyPrintNumber/index.ts"),
				D = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				F = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx"),
				U = n("./src/lib/constants/index.ts"),
				W = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx"),
				H = n("./src/reddit/components/UserIcon/index.tsx"),
				V = n("./src/reddit/controls/InternalLink/index.tsx"),
				G = n("./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/Leaderboard/index.m.less"),
				q = n.n(G);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), z = e => {
				let {
					className: t,
					ranks: n
				} = e;
				return s.a.createElement("div", {
					className: Object(M.a)(q.a.container, t)
				}, s.a.createElement("div", {
					className: q.a.label
				}, K._("Tournament Leaders", null, {
					hk: "2JMRGi"
				})), s.a.createElement("div", {
					className: q.a.ranks
				}, n.map(e => {
					let {
						redditor: t,
						redditorInfo: n,
						rank: r
					} = e;
					var o, a, i, c;
					return s.a.createElement(V.default, {
						key: n.id,
						className: q.a.user,
						to: `/user/${null==t?void 0:t.name}`,
						disabled: n.displayName === U.G || n.displayName === U.Ob
					}, s.a.createElement("div", {
						className: q.a.userAvatar
					}, s.a.createElement(H.a, {
						className: q.a.icon,
						iconUrl: null === (o = null == t ? void 0 : t.icon) || void 0 === o ? void 0 : o.url,
						isNSFW: Boolean(null === (a = null == t ? void 0 : t.profile) || void 0 === a ? void 0 : a.isNsfw),
						userName: null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : ""
					}), s.a.createElement(W.a, {
						className: q.a.rankBadge,
						rank: r
					})), s.a.createElement("div", {
						className: q.a.userName
					}, null !== (c = null == t ? void 0 : t.name) && void 0 !== c ? c : n.displayName))
				})))
			};
			var J = n("./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/index.m.less"),
				Q = n.n(J);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = e => {
				let {
					subredditId: t
				} = e;
				var n, r;
				const a = Object(o.e)(e => Object(y.f)(e, {
						subredditId: t
					})),
					i = Object(o.e)(e => a && Object(u.h)(e, {
						tournamentId: a.tournamentId
					}));
				return a ? s.a.createElement("section", {
					className: Q.a.container,
					style: {
						backgroundImage: D.a[a.theme] || D.a.theme_1
					}
				}, s.a.createElement("div", {
					className: Q.a.tournamentInfo
				}, s.a.createElement("p", null, Z._("Predictions Tournament", null, {
					hk: "2AxvmU"
				})), s.a.createElement("h1", {
					className: Object(M.a)(Q.a.tournamentTitle, {
						[Q.a.long]: a.name.length > 40
					})
				}, a.name, " ", s.a.createElement(F.a, {
					status: a.status
				}))), s.a.createElement("div", {
					className: Q.a.stats
				}, (null == i ? void 0 : i.topPredictorsRank) && i.topPredictorsRank.length >= 3 && s.a.createElement(z, {
					className: Q.a.stat,
					ranks: i.topPredictorsRank.slice(0, 3)
				}), s.a.createElement("div", {
					className: Object(M.a)(Q.a.stat, Q.a.simple)
				}, s.a.createElement("dt", null, a.totalParticipantsCount ? Object(R.b)(a.totalParticipantsCount) : "--"), s.a.createElement("dd", null, Z._("Players", null, {
					hk: "1S5q3e"
				}))), s.a.createElement("div", {
					className: Object(M.a)(Q.a.stat, Q.a.simple)
				}, s.a.createElement("dt", null, a.totalPredictionsCount || "--"), s.a.createElement("dd", null, Z._("Predictions", null, {
					hk: "3E8BVX"
				}))), s.a.createElement("div", {
					className: Object(M.a)(Q.a.stat, Q.a.simple)
				}, s.a.createElement("dt", {
					className: Object(M.a)({
						[Q.a.long]: Boolean((null === (n = null == i ? void 0 : i.currentRank) || void 0 === n ? void 0 : n.rank) && i.currentRank.rank >= 1e6)
					})
				}, (null === (r = null == i ? void 0 : i.currentRank) || void 0 === r ? void 0 : r.rank) || "--"), s.a.createElement("dd", null, Z._("Your rank", null, {
					hk: "2tS82X"
				}))))) : null
			};
			var X = n("./src/reddit/components/Econ/PredictionsPostList/index.m.less"),
				$ = n.n(X);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(g.a)(e => {
				const t = Object(v.eb)(),
					n = null == t ? void 0 : t.queryParams["prediction-tournament-rank"],
					r = Object(o.e)(t => Object(_.G)(t, e.listingName)),
					{
						isFetched: i
					} = Object(a.a)(r),
					c = Object(o.e)(e => Object(y.l)(e, {
						subredditId: r
					})),
					d = s.a.useMemo(() => Object.values(c).sort(E.b).map(e => e.id), [Object.keys(c).length]);
				return s.a.createElement("div", {
					className: $.a.container
				}, i && s.a.createElement(s.a.Fragment, null, s.a.createElement(Y, {
					subredditId: r
				}), s.a.createElement(T, {
					subredditId: r
				})), i && n && s.a.createElement(h, {
					subredditId: r,
					queriedTournamentId: n
				}), s.a.createElement(f.a, ee({}, e, {
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
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
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
				}, s.fbt._("Predictions", null, {
					hk: "ACRaq"
				})), s.fbt._("How It Works", null, {
					hk: "3QW4EZ"
				})), a.a.createElement("img", {
					alt: s.fbt._("Snoos gathered around a dark ball", null, {
						hk: "2sN6dD"
					}),
					className: d.a.bannerImage,
					src: `${r.a.assetPath}/img/econ/predictions/predictor_snoos_small.png`
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
						title: r,
						description: s
					} = e;
					return a.a.createElement("div", {
						key: r,
						className: d.a.step
					}, a.a.createElement("div", {
						className: Object(i.a)(d.a.stepCount, {
							[d.a.showConnectingLine]: n !== t.length - 1
						})
					}, a.a.createElement("span", {
						className: d.a.stepNumber
					}, n + 1)), a.a.createElement("div", null, a.a.createElement("h3", {
						className: d.a.stepTitle
					}, r), a.a.createElement("p", {
						className: d.a.stepDescription
					}, s)))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
					tokenIcon: r
				} = e;
				var a, c, p, h;
				const {
					redditor: f,
					redditorInfo: g,
					rank: x,
					score: v
				} = n, E = null !== (a = null == f ? void 0 : f.name) && void 0 !== a ? a : null == g ? void 0 : g.displayName;
				return s.a.createElement(m.default, {
					className: Object(i.a)(t, {
						[b.a.first]: 1 === x,
						[b.a.third]: 3 === x
					}),
					to: `/user/${E}`,
					disabled: (null == g ? void 0 : g.displayName) === d.G || (null == g ? void 0 : g.displayName) === d.Ob
				}, s.a.createElement("div", {
					className: b.a.avatarContainer
				}, s.a.createElement("div", {
					className: b.a.outerCircle
				}, s.a.createElement("div", {
					className: b.a.innerCircle
				})), (null === (c = null == g ? void 0 : g.snoovatarIcon) || void 0 === c ? void 0 : c.url) ? s.a.createElement("img", {
					className: b.a.avatar,
					alt: o.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					src: g.snoovatarIcon.url
				}) : s.a.createElement("div", {
					className: b.a.defaultAvatar
				}, s.a.createElement(u.a, {
					className: b.a.userIcon,
					iconUrl: null === (p = null == f ? void 0 : f.icon) || void 0 === p ? void 0 : p.url,
					isNSFW: Boolean(null === (h = null == f ? void 0 : f.profile) || void 0 === h ? void 0 : h.isNsfw),
					userName: E
				})), s.a.createElement(l.a, {
					className: b.a.placeBadge,
					rank: x
				})), s.a.createElement("div", {
					className: b.a.winnerName
				}, E), s.a.createElement("div", {
					className: b.a.score
				}, s.a.cloneElement(r, {
					className: b.a.tokenIcon
				}), " ", v))
			};
			var f = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				g = n("./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts"),
				x = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				y = n("./src/reddit/hooks/useModalState.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				j = n("./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/index.m.less"),
				C = n.n(j);
			const N = e => {
				let {
					subredditId: t
				} = e;
				var n;
				const [d, l, u] = Object(y.a)(!1), m = Object(_.a)(), p = Object(a.e)(e => Object(O.f)(e, {
					subredditId: t
				})), {
					leaderboard: b,
					error: j
				} = Object(g.a)(t);
				if (Object(r.useEffect)(() => {
						b && m(Object(E.f)())
					}, [m, b]), j || !(null === (n = null == b ? void 0 : b.topPredictorsRank) || void 0 === n ? void 0 : n.length) || b.topPredictorsRank.length < 3 || !p) return null;
				const N = b.topPredictorsRank.slice(0, 3),
					k = s.a.createElement(c.a, {
						tournamentId: p.tournamentId
					});
				return s.a.createElement(x.a, {
					className: C.a.themedWidget,
					contentOnly: !0
				}, s.a.createElement("h2", {
					className: C.a.header
				}, o.fbt._("All time top predictors", null, {
					hk: "1sZnun"
				})), s.a.createElement("div", {
					className: C.a.winnersContainer
				}, N.map(e => {
					var t;
					return s.a.createElement(h, {
						className: Object(i.a)(C.a.user, {
							[C.a.first]: 1 === e.rank,
							[C.a.second]: 2 === e.rank
						}),
						key: null === (t = e.redditorInfo) || void 0 === t ? void 0 : t.id,
						user: e,
						tokenIcon: k
					})
				})), s.a.createElement(v.a, {
					priority: v.c.Primary,
					className: C.a.seeAllButton,
					onClick: () => {
						m(Object(E.b)()), l()
					},
					isFullWidth: !0
				}, o.fbt._("See all", null, {
					hk: "23jjqI"
				})), d && s.a.createElement(f.a, {
					leaderboard: b,
					tokenIcon: k,
					onClose: u
				}))
			};
			var k = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				w = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx"),
				S = n("./src/lib/prettyPrintNumber/index.ts"),
				I = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Stats/index.m.less"),
				P = n.n(I);
			const T = e => {
				let {
					tournament: t,
					userRank: n
				} = e;
				return s.a.createElement("dl", {
					className: P.a.statsList
				}, s.a.createElement("div", {
					className: P.a.stat
				}, s.a.createElement("dt", {
					className: P.a.statValue
				}, t.totalParticipantsCount ? Object(S.b)(t.totalParticipantsCount) : "--"), s.a.createElement("dd", {
					className: P.a.statDescription
				}, o.fbt._("Players", null, {
					hk: "QKnjj"
				}))), s.a.createElement("div", {
					className: P.a.stat
				}, s.a.createElement("dt", {
					className: P.a.statValue
				}, t.totalPredictionsCount || "--"), s.a.createElement("dd", {
					className: P.a.statDescription
				}, o.fbt._("Predictions", null, {
					hk: "2MJSk1"
				}))), s.a.createElement("div", {
					className: P.a.stat
				}, s.a.createElement("dt", {
					className: Object(i.a)(P.a.statValue, {
						[P.a.long]: Boolean((null == n ? void 0 : n.rank) && n.rank >= 1e6)
					})
				}, (null == n ? void 0 : n.rank) || "--"), s.a.createElement("dd", {
					className: P.a.statDescription
				}, o.fbt._("Your rank", null, {
					hk: "2aohc3"
				}))))
			};
			var L = n("./src/reddit/components/HumanDate/index.tsx"),
				B = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts"),
				A = n("./src/reddit/helpers/trackers/predictions.ts"),
				M = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Predictor/index.m.less"),
				R = n.n(M);
			const D = e => {
				let {
					className: t,
					userRank: n
				} = e;
				const r = Object(_.a)(),
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
				return s.a.createElement("div", {
					className: Object(i.a)(R.a.predictor, t)
				}, s.a.createElement(l.a, {
					className: R.a.rank,
					rank: o
				}), s.a.createElement(m.default, {
					className: R.a.userLink,
					onClick: () => r(Object(A.g)({
						targetUserId: c.id
					})),
					to: `/user/${f}`,
					disabled: c.displayName === d.G || c.displayName === d.Ob
				}, s.a.createElement("div", {
					className: R.a.leaderboardIcon
				}, s.a.createElement(u.a, {
					className: Object(i.a)(R.a.avatar),
					iconUrl: null == p ? void 0 : p.url,
					isNSFW: !!(null == h ? void 0 : h.isNsfw),
					userName: null != f ? f : ""
				})), s.a.createElement("div", {
					className: R.a.userName
				}, f)))
			};
			var F = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/index.m.less"),
				U = n.n(F);
			const W = e => {
				let {
					tournamentId: t
				} = e;
				const [n, r, i] = Object(y.a)(!1), d = Object(a.e)(e => Object(O.a)(e, t)), l = Object(a.e)(e => Object(B.h)(e, {
					tournamentId: t
				})), u = Object(_.a)();
				if (!d || !l) return null;
				const m = l.topPredictorsRank.slice(0, 3);
				return s.a.createElement("section", null, s.a.createElement("div", {
					className: U.a.header,
					style: {
						backgroundImage: k.a[d.theme] || k.a.theme_1
					}
				}, s.a.createElement("h3", {
					className: U.a.tournamentTitle
				}, d.name, " ", s.a.createElement(w.a, {
					status: d.status
				})), d.createdAt && d.endedAt && s.a.createElement("div", {
					className: U.a.tournamentDate
				}, s.a.createElement(L.a, {
					seconds: Math.floor(d.createdAt / 1e3),
					showDay: !0,
					shortMonths: !0
				}), " ", "-", " ", s.a.createElement(L.a, {
					seconds: Math.floor(d.endedAt / 1e3),
					showDay: !0,
					shortMonths: !0
				}))), s.a.createElement("div", {
					className: U.a.content
				}, s.a.createElement("div", {
					className: U.a.tournamentInfo
				}, s.a.createElement("div", {
					className: U.a.leaderboard
				}, m.map(e => s.a.createElement(D, {
					key: e.redditorInfo.id,
					userRank: e
				}))), s.a.createElement(T, {
					tournament: d,
					userRank: l.currentRank
				})), s.a.createElement(v.a, {
					className: U.a.seeAllButton,
					onClick: () => {
						r(), u(Object(E.a)())
					},
					isFullWidth: !0
				}, o.fbt._("See all", null, {
					hk: "aMyfi"
				}))), n && s.a.createElement(f.a, {
					isPreviousEvent: !0,
					leaderboard: l,
					tokenIcon: s.a.createElement(c.a, {
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
					r = Object(a.e)(e => Object(O.g)(e, {
						subredditId: t
					}).slice(1, 3).map(e => e.tournamentId));
				return s.a.useEffect(() => {
					r.length && n(Object(E.d)())
				}, [r]), r.length ? s.a.createElement(x.a, {
					className: V.a.themedWidget,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: V.a.content
				}, s.a.createElement("h2", {
					className: V.a.header
				}, o.fbt._("Previous tournaments", null, {
					hk: "2BA4B9"
				})), r.map(e => s.a.createElement(W, {
					key: e,
					tournamentId: e
				})))) : null
			};
			var q = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/Content.tsx"),
				K = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less"),
				z = n.n(K);
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
					Object(r.useEffect)(() => {
						e(Object(A.r)())
					}, [e]);
					return s.a.createElement(x.a, {
						className: z.a.widget,
						contentOnly: !0
					}, s.a.createElement(q.a, {
						steps: J
					}), s.a.createElement("div", {
						className: z.a.learnMoreWrapper
					}, s.a.createElement(m.default, {
						to: "/predictions",
						onMouseDown: () => e(Object(A.f)())
					}, s.a.createElement(v.t, {
						className: z.a.learnMoreButton,
						isFullWidth: !0
					}, o.fbt._("Learn More", null, {
						hk: "4wy6Ra"
					})))))
				},
				Z = (n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"), n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"));

			function Y(e) {
				let {
					subredditId: t
				} = e;
				const n = Object(a.e)(e => Object(O.f)(e, {
					subredditId: t
				}));
				return n ? s.a.createElement(Z.default, {
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
				return s.a.createElement("div", {
					className: $.a.container
				}, s.a.createElement(N, {
					subredditId: t
				}), s.a.createElement(Q, null), s.a.createElement(Y, {
					subredditId: t
				}), s.a.createElement(G, {
					subredditId: t
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
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
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumNewUserWelcome").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(s.a)("spSpecialMemberships", o)
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("EconomicsSubredditPremiumSidebarCards").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(s.a)("spSpecialMemberships", o)
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/upperFirst.js"),
				o = n.n(s),
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
				E = g.a.wrapped(m.n, "SubmitLink", h.a),
				y = e => {
					switch (e) {
						case d.Z.RISING:
							return r.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.Z.TOP:
						case d.Z.CONTROVERSIAL:
							return null;
						default:
							return r.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				_ = e => {
					let {
						listingName: t,
						sort: n
					} = e;
					const s = y(n);
					return i.a.createElement("div", {
						className: h.a.MainContent
					}, i.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case d.Z.RISING:
								return r.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.Z.TOP:
							case d.Z.CONTROVERSIAL:
								return r.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [r.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return r.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(n)), t && !Object(l.a)(t) && !!s && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: h.a.SecondaryText
					}, y(n)), i.a.createElement(E, {
						to: `/r/${t}/submit`
					}, r.fbt._("Add a post", null, {
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
				}, r.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), i.a.createElement(E, {
					to: "/r/popular"
				}, r.fbt._("Browse Popular Posts", null, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
					r = Object(l.a)();
				return s.a.createElement("div", {
					className: Object(i.a)(p.a.component, p.a.emptyHomepage)
				}, s.a.createElement(h, {
					isLoading: n,
					layout: a.g.Classic
				}), r && !n && s.a.createElement("div", {
					className: p.a.mainContentWrapper
				}, s.a.createElement("div", {
					className: p.a.mainContent
				}, s.a.createElement("div", {
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
					sort: r,
					subreddit: o
				} = e;
				return t ? s.a.createElement(f, {
					subredditId: null == o ? void 0 : o.id
				}) : s.a.createElement(g.a, {
					listingName: n,
					sort: r,
					subreddit: o || void 0
				})
			}
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/config.ts"),
				c = n("./src/reddit/components/FakeBannerAd/index.m.less"),
				d = n.n(c),
				l = n("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", d.a),
				m = l.a.wrapped(e => a.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", d.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = a.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								n = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, n), this.setState({
								sentOncePerRender: !0
							})
						}
					}
				}
				render() {
					const {
						href: e,
						img: t
					} = this.props, {
						sentOncePerRender: n
					} = this.state, o = n ? a.a.createElement(m, {
						src: i.a.assetPath + t
					}) : a.a.createElement(s.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, a.a.createElement(m, {
						src: i.a.assetPath + t
					}));
					return a.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": r.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, a.a.createElement("a", {
						href: i.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, o))
				}
			}
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				mIsWhite: "_3TyrvwTfHlJHEevBoOKkDJ",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				mIsGrey: "_2g4mHpbVF30jxvk8ZPbqBe"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Footer/index.m.less"),
				d = n.n(c);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = i.a.div("UserAgreement", d.a), m = i.a.a("UserAgreementLink", d.a), p = i.a.a("PrivacyLink", d.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => s.a.createElement("div", {
				className: Object(a.a)(d.a.FooterContainer, {
					[d.a.mIsGrey]: e.textColor === b.Grey,
					[d.a.mIsWhite]: e.textColor === b.White
				})
			}, s.a.createElement(u, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", s.a.createElement(m, {
				href: `${o.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "YviZP"
			}))), l._param("=Privacy Policy.", s.a.createElement(p, {
				href: `${o.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
		},
		"./src/reddit/components/Governance/ClaimPointsBanner/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(r.a)({
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
			t.a = Object(s.a)("spClaimablePoints", o)
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-CommunityCard").then(n.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-Leaderboard").then(n.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(r.a)({
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
				a = Object(s.a)("spBurnLinks", Object(r.a)({
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				return s.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, n) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/screenWidths.ts"),
				l = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/components/HeaderImage/index.m.less"),
				h = n.n(b);
			const f = c.a.wrapped(u.a, "Planet", h.a),
				g = c.a.div("SubredditIcon", h.a),
				x = c.a.div("PositionedImage", h.a),
				v = c.a.div("HeaderContent", h.a),
				E = c.a.div("HeaderContainer", h.a),
				y = c.a.span("HeaderText", h.a),
				_ = c.a.wrapped(o.a, "HeaderUrl", h.a),
				O = c.a.span("Container", h.a),
				j = Object(i.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						n = Object(l.a)(e),
						r = Object(p.a)(e).banner.positionedImageAlignment,
						o = Object(p.a)(e).banner.positionedImage,
						i = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let c;
					switch (r) {
						case "right":
							c = {
								right: "-8px"
							};
							break;
						case "centered":
							c = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							c = {
								left: "-8px"
							}
					}
					const u = !!o && !!i && "left" === r,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						j = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						C = `${4+j}px`;
					return s.a.createElement(O, {
						style: {
							background: b,
							filter: e.shouldBlurHeaderImage ? "blur(6px)" : "none",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, s.a.createElement(_, {
						className: e.className,
						to: e.url
					}, s.a.createElement(E, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||d.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && s.a.createElement(v, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (n ? s.a.createElement(g, {
						style: {
							backgroundImage: `url(${n})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: C,
							width: C
						}
					}) : s.a.createElement(f, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: C,
							width: C
						}
					})), s.a.createElement(y, {
						style: {
							paddingTop: 32 === j ? "4px" : "14px"
						}
					}, t)), s.a.createElement(x, {
						className: Object(a.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!o,
							[h.a.hoverPositionedImage]: !!o && !!i
						}),
						style: {
							...c,
							height: `${Object(p.a)(e).banner.positionedImageHeight}px`
						}
					}))))
				});
			t.a = j
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "XEkFoehJNxIH9Wlr5Ilzd",
				mFocused: "_3Av66iQf7_N4Z-XZxsek76",
				itemWrapper: "_17q-ew4FcK6U0ZiybWkIGG",
				customFeedIcon: "ENGeNwSHzwN-SV2KTH2s7",
				icon: "_3HTtcITrR-crvsRovLrijl",
				text: "_2aqH0n-kSzFY7HZZ5GL-Jb",
				subText: "_2Efd4uMAp4YawdvL9Zhdhv",
				title: "_1JNAu7U5gWAkRoykwfUWhY",
				favorite: "t2A0mgkgGzc8cAahJsR7a",
				mFavorite: "_2cEhEGN_WTLlwspw_bpqTr",
				relatedSubredditMetaData: "_3P_WRCH8aFjwOFA7B1RlBL",
				promoted: "bpYVdL9hAnIqOnrKi8PVS"
			}
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
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/header.ts"),
				u = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/search.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/tooltip.ts");
			const h = r.a.hotPotatoUrl,
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
					for (const r of g) {
						const t = null === (e = n.get(r)) || void 0 === e ? void 0 : e.toLocaleLowerCase(),
							s = "string" == typeof t && "false" !== t;
						n.has(r) && s && t && f.searchParams.set(r, t)
					}
					return {
						iframeURL: f.toString(),
						isFullscreen: f.searchParams.has("fullscreen") || f.searchParams.has("edit")
					}
				},
				v = r.a.hotPotatoUrl;
			var E, y;
			! function(e) {
				e.RefreshAuth = "refreshAuth", e.Close = "close", e.SignIn = "signIn", e.SyncCoordinates = "syncCoordinates", e.OpenProfile = "openProfile"
			}(E || (E = {})),
			function(e) {
				e.SetFullScreen = "setFullScreen", e.InjectAuthHeaders = "injectAuthHeaders", e.InjectTelemetryDefaults = "injectTelemetryDefaults"
			}(y || (y = {}));
			var _ = class {
					constructor(e, t, n, r, s, o) {
						this.subscribe = () => {
							null === window || void 0 === window || window.addEventListener("message", this.onMessage)
						}, this.unsubscribe = () => {
							null === window || void 0 === window || window.removeEventListener("message", this.onMessage)
						}, this.onMessage = e => {
							let {
								origin: t,
								data: n
							} = e;
							t === v && (n.type === E.RefreshAuth ? this.sendMessageAuthAndTelemetry() : n.type === E.Close ? this.onMessageClose() : n.type === E.SignIn && n.dest ? this.onMessageSignIn(n.dest) : n.type === E.SyncCoordinates && n.data ? this.onMessageSyncCoordinates(n.data) : n.type === E.OpenProfile && n.data && this.onMessageOpenProfile(n.data))
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
								type: y.SetFullScreen,
								state: e
							})
						}, this.sendMessageInjectAuthHeaders = e => {
							this.sendMessage({
								type: y.InjectAuthHeaders,
								...e
							})
						}, this.sendMessageInjectTelemetryDefaults = e => {
							this.sendMessage({
								type: y.InjectTelemetryDefaults,
								...e
							})
						}, this.ref = e, this.getAuthClientData = t, this.onMessageClose = n, this.onMessageSignIn = r, this.onMessageSyncCoordinates = s, this.onMessageOpenProfile = o
					}
					sendMessage(e) {
						var t, n;
						null === (n = null === (t = this.ref.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === n || n.postMessage(e, v)
					}
				},
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				j = n("./src/reddit/constants/keycodes.ts"),
				C = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				N = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				w = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/telemetry.ts")),
				S = n("./src/telemetry/models/Event.ts");
			const I = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				return Object.keys(e).reduce((n, r) => {
					const s = e[r];
					return s ? (n[r] = "object" == typeof s && t <= 4 ? I(s, t + 1) : s, n) : n
				}, {})
			};
			var P = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/components/HotPotatoEmbed/index.m.less"),
				L = n.n(T);
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js"), A = Object(c.c)({
				session: e => e.user.session,
				telemetryDefaults: e => {
					const t = {
							...Object(w.o)(e),
							...{
								action: S.d.Load,
								source: S.f.Experiment,
								noun: S.e.UserId
							}
						},
						{
							action: n,
							source: r,
							noun: s,
							...o
						} = Object(S.g)(t);
					return I(o)
				},
				isTooltipOpened: e => Boolean(e.tooltip.tooltipId),
				isSearchDropdownOpened: e => e.search.isDropdownOpen,
				isHeaderDropdownOpened: e => e.header.isSubscriptionsDropdownOpen,
				isLoggedIn: P.Q
			}), M = Object(a.b)(A, e => ({
				closeSearchDropdown: () => e(Object(m.l)()),
				closeHeaderDropdown: () => e(Object(l.f)()),
				closeTooltipModal: () => e(Object(b.j)()),
				openLoginModal: () => e(Object(u.openLoginModal)()),
				openProfilePage: t => e(Object(i.b)(`/user/${t}`)),
				openErrorToast: () => e(Object(p.f)({
					duration: p.a,
					kind: k.b.Error,
					text: B._("Something wen't wrong. Please try again later.", null, {
						hk: "4vD48K"
					})
				}))
			}));
			class R extends o.a.Component {
				constructor(e) {
					super(e), this.iframeRef = Object(s.createRef)(), this.handleEscapeKey = e => {
						e.code === j.a.Escape.toString() && this.toggleFullScreen(!1)
					}, this.toggleFullScreen = e => {
						this.messenger.sendMessageFullscreen(e), this.setState({
							isFullscreen: e
						}), Object(C.e)(!e)
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
							px: r,
							ts: s
						} = e;
						const o = new URL(location.href);
						o.searchParams.set("cx", `${t}`), o.searchParams.set("cy", `${n}`), o.searchParams.set("px", `${r}`), s && o.searchParams.set("ts", `${s}`), history.replaceState({}, "", o.toString())
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
						e && t ? this.closeAnyRedditModal() : this.state.isFullscreen || (this.toggleFullScreen(!0), this.props.sendEvent(Object(N.b)()))
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
					} = this.state, s = this.isAnyRedditModalOpened();
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
						src: `${r.a.assetPath}/img/hot-potato-loader.gif`
					}), e && (!t || s) && o.a.createElement("div", {
						className: L.a.overlay,
						onClick: this.onOverlayClick
					}))
				}
			}
			t.a = Object(O.c)(M(R))
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/config.ts"),
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
					const f = h && h.subscribersText || r.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						g = h && h.currentlyViewingText || r.fbt._("Online", null, {
							hk: "36JX70"
						});
					let x, v;
					return l(p) ? (t = `${s.a.assetPath}/img/id-cards/home-banner@2x.png`, o = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = a.c[a.b.Home], n = r.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), i = r.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(p) ? (t = `${s.a.assetPath}/img/id-cards/banner@2x.png`, n = r.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), o = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/all", m = a.c[a.b.All]) : c(p) ? (t = `${s.a.assetPath}/img/id-cards/banner@2x.png`, n = r.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), o = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), i = "r/popular", m = a.c[a.b.Popular]) : p && (n = h && h.description, o = u(""), i = b.displayText, m = b.url, v = h && h.subscribersCount, x = h && h.currentlyViewingCount), {
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
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
					icon: r,
					subtitle: a,
					title: c,
					textWrapperClassName: u
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(t, i.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, s.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), r ? s.a.createElement(d, null, r) : s.a.createElement(d, null), s.a.createElement(l, {
					className: u
				}, s.a.createElement("div", {
					className: i.a.title
				}, c), a && s.a.createElement("div", {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
					subreddit: m.A,
					subredditAboutInfo: m.x
				}),
				x = Object(a.b)(g);
			t.a = x(e => {
				const {
					subreddit: t,
					subredditAboutInfo: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const s = n && n.quarantineMessageHtml,
					a = n && n.quarantineMessage || r.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return o.a.createElement(p.a, {
					className: h.a.container,
					color: d.a.quarantine,
					icon: f,
					subtitle: o.a.createElement("span", null, r.fbt._("This community is {=quarantined}", [r.fbt._param("=quarantined", o.a.createElement("a", {
						className: h.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", s ? o.a.createElement(c.a, {
						className: h.a.rawHtmlDisplay,
						html: s
					}) : a, " ", o.a.createElement(l.default, {
						className: h.a.link,
						to: "/"
					}, r.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: r.fbt._("Community Quarantined", null, {
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
				return E
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "g", (function() {
				return N
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "i", (function() {
				return w
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/lodash/isNil.js"),
				c = n.n(i),
				d = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...r
							}
						} = this;
						l.a.publish(d.a, r, e)
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
					return e.consumers.length ? s.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && s.a.createElement("span", {
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
					r = Object(f.L)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var x = Object(o.b)(() => Object(a.a)(g, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => s.a.createElement(p, {
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
					r = Object(f.L)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var E = Object(o.b)(() => Object(a.a)(v, e => e))(e => s.a.createElement(p, {
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
			var y = Object(o.b)(() => Object(a.c)({
					subreddit: f.W
				}))(e => s.a.createElement(p, {
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
					n = Object(r.useMemo)(() => ({
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
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "post",
					data: n
				}) : null
			};
			var j = e => {
				const t = Object(_.a)(),
					n = Object(r.useMemo)(() => ({
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
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: n
				}) : null
			};
			var C = e => {
				const t = Object(_.a)(),
					n = Object(r.useMemo)(() => ({
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
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: n
				}) : null
			};
			var N = Object(o.b)(() => Object(a.c)({
				subreddit: f.W
			}))(e => s.a.createElement(p, {
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
			var k = Object(o.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.O)(e, {
					identifier: t
				})
			}))(e => s.a.createElement(p, {
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
					return n ? Object(f.W)(e, {
						subredditId: n
					}) : null
				}
			}))(e => s.a.createElement(p, {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(l);
			const m = Object(s.createContext)(null),
				p = Object(s.createContext)(null);
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
					const [e, t] = Object(s.useState)("-500px"), n = Object(s.useContext)(c.a);
					return o.a.createElement(m.Consumer, null, s => s && o.a.createElement("div", {
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
							s.focus(), s.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, r.fbt._("Jump to content", null, {
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
			var r = n("./src/reddit/components/PostList/index.tsx"),
				s = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(s.a)(r.a)
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/components/Media/index.m.less"),
				i = n.n(a);
			const c = (e, t) => e && t ? r.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? r.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? r.fbt._("Click to see spoiler", null, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
					r = {
						overflow: "hidden"
					};
				return r.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (r.margin = "0 auto"), e.isListing || (r.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (r.maxHeight = e.maxHeight || void 0), e.isTweet || (r.height = "100%"), s.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: n,
					style: r,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				alignLeft: "WjuR4W-BBrvdtABBeKUMx",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				renderSmallMedia: "vgwLfcw0MneE2ejmdh_l9",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				v = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				E = n("./src/reddit/models/Media/index.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/constants/tracking.ts"),
				C = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				N = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				k = n.n(N);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => e > 2 * E.e,
				I = e => o.a.createElement("img", {
					alt: e.altText || r.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(d.a)(e.className, {
						[k.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				P = e => {
					const t = Object(d.a)(k.a.image, h.g, e.className, {
							[k.a.mShowCentered]: e.showCentered,
							[k.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${E.j}px`), e.isListing || e.isTall && S(e.height) || (n.maxHeight = `${E.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
					const a = Object(s.useRef)(null),
						[i, c] = Object(s.useState)(!1),
						l = Object(s.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!i && t && c(!0)
							})
						}, [i]),
						u = Object(s.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(v.a)(a, l, u.current);
					const {
						width: m,
						height: p
					} = e;
					let b = 240;
					if (m / p > 1)
						if (m < 240) b = p;
						else {
							(b = p * (240 / m)) < 20 && (b = 20)
						}
					else b = Math.min(b, p);
					const f = Object(s.useRef)({
						height: b
					});
					return e.renderSmallMedia ? o.a.createElement("div", {
						ref: a,
						style: f.current
					}, i ? o.a.createElement(I, w({}, e, {
						className: t
					})) : o.a.createElement("noscript", null, o.a.createElement(I, w({}, e, {
						className: t
					})))) : o.a.createElement("img", {
						alt: e.altText || r.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				T = e => {
					const t = {};
					return (!e.showFull && Object(E.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${E.j}px`, e.shouldBlur && (t.maxWidth = Object(E.L)(e.height, e.width) ? `${E.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(k.a.container, e.className, {
							[k.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				L = Object(a.b)(() => Object(c.a)(y.F, O.jb, (e, t) => {
					let {
						isSponsored: n,
						postId: r
					} = t;
					return n && r ? Object(y.b)(e, r) : null
				}, _.d, y.G, (e, t, n, r, s) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: r.pageType,
					post: s
				})));
			t.a = L(e => {
				const t = Object(x.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					"data-adclicklocation": C.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(g.a)(e.post, e.pageType)
					}
				}, A(e)) : e.isListing && e.postPermalink ? o.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, A(e)) : A(e)
			});
			const B = (e, t) => o.a.createElement(P, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[j.a]: !e
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
					width: t.width,
					renderSmallMedia: t.renderSmallMedia
				}),
				A = e => {
					let {
						onClick: t,
						...n
					} = e;
					const s = Object(E.L)(n.height, n.width),
						a = S(n.height) && s;
					return o.a.createElement(T, w({}, n, {
						className: `${s?`${j.a} `:""}${n.className||""}`
					}), n.isListing ? o.a.createElement("div", {
						className: n.contentImageClassName
					}, B(s, n)) : o.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: a ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: k.a.imageLink
					}, B(s, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && o.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > E.j && Object(E.L)(n.height, n.width) && o.a.createElement("div", {
						className: k.a.seeMore
					}, r.fbt._("see full image", null, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
					r = e.blurSrc ? s.a.createElement("img", {
						className: d.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					c = Object(i.B)(e.height, e.width, e.forceAspectRatio);
				return s.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, r, !e.isGalleryTileLayout && s.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), s.a.createElement("div", {
					className: Object(o.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends s.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return s.a.Children.only(this.props.children) || s.a.createElement("div", null)
					}
					return s.a.createElement(l, this.props)
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
				return C
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
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

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function y(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: r,
					onBufferingChange: s,
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

				function y(e) {
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
					if (y(!c && (t || r)), b.current && s) return p.current = function(e, t) {
						let n = !1,
							r = !1;
						const s = () => n = !0,
							o = () => r = !0;
						e.addEventListener("loadeddata", s), e.addEventListener("play", o), e.addEventListener("playing", o);
						let a = !1,
							i = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, r) return r = !1, void(i = c);
							if (e.paused || e.seeking || !n) return void(i = c);
							const s = a;
							4 === e.readyState ? a = !1 : !a && c >= i && c < i + g ? a = !0 : a && c >= i && c > i + g && (a = !1), i = c, s !== a && t(a)
						}, f);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", s)
						}
					}(b.current, s), () => {
						p.current && p.current()
					}
				}, []), Object(o.useEffect)(() => {
					h !== c && y(!c && (t || r))
				}, [h, c, t, r]), a.a.createElement("video", E({}, m, {
					ref: e => b.current = e,
					muted: !0
				}), a.a.createElement("source", {
					src: Object(x.a)(u || "")
				}))
			}
			var _ = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				O = n.n(_);
			const j = Object(c.c)({
				autoplayPref: b.b,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function C(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: r,
					metadata: o,
					started: c
				} = Object(i.e)(t => j(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: g,
					isNotCardView: x,
					showFull: v,
					shouldPause: E,
					width: _,
					isListing: C,
					className: N,
					showCentered: k,
					originalSource: w,
					isPromoted: S
				} = e, I = t && !(S && Object(d.hasAcceptableAds)()), P = Object(i.d)();

				function T(e) {
					P(e ? Object(u.r)(b) : Object(u.E)(b))
				}

				function L() {
					return P(Object(u.z)({
						postId: b
					}))
				}
				const B = s()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && P(Object(u.s)(b))
				}, 200);

				function A(e) {
					e.persist(), B(e)
				}

				function M(e) {
					var t;
					(o || D(e), c) || (t = e.timeStamp, P(Object(u.A)(b, t)))
				}

				function R(e) {
					P(Object(u.q)(b, e.timeStamp))
				}

				function D(e) {
					! function(e) {
						P(Object(u.D)({
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
					r || M(e), o || D(e), P(Object(u.C)(b))
				}

				function U() {
					const e = {};
					return k && (e.margin = "0 auto"), C || (e.maxHeight = `${p.e}px`), a.a.createElement(y, {
						autoplay: I,
						className: Object(l.a)(m.a, O.a.styledVideo),
						height: g,
						isListing: C,
						isNotCardView: x,
						key: b,
						loop: !0,
						onBufferingChange: T,
						onLoadStart: R,
						onLoadedData: M,
						onLoadedMetadata: D,
						onPause: L,
						onPlaying: F,
						onTimeUpdate: A,
						shouldLoad: h,
						shouldPause: E,
						showCentered: k,
						showFull: v,
						source: f,
						style: e,
						width: _
					})
				}
				return C ? U() : a.a.createElement("div", {
					className: Object(l.a)(O.a.container, N, {
						[O.a.centered]: k
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
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
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
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "t", (function() {
				return w
			})), n.d(t, "u", (function() {
				return S
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "c", (function() {
				return L
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Input/ModalInput.tsx"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = s.a.wrapped(d.a, "CloseIcon", u.a),
				b = s.a.section("ModalBody", u.a),
				h = s.a.section("ModalPostPreview", u.a),
				f = s.a.p("ModalText", u.a),
				g = s.a.div("ModalSmallText", u.a),
				x = s.a.div("ModalDescriptionText", u.a),
				v = s.a.div("ModalMetaText", u.a),
				E = s.a.label("ModalFormItem", u.a),
				y = s.a.wrapped(c.a, "ModalInput", u.a),
				_ = s.a.label("ModalInputLabel", u.a),
				O = s.a.footer("ModalFooter", u.a),
				j = s.a.header("ModalHeader", u.a),
				C = s.a.div("ModalTitle", u.a),
				N = s.a.div("ModalAnnotation", u.a),
				k = s.a.div("ModalMain", u.a),
				w = s.a.textarea("TextArea", u.a),
				S = s.a.wrapped(i.l, "WarningButton", u.a),
				I = s.a.wrapped(i.l, "PrimaryButton", u.a),
				P = s.a.wrapped(i.o, "CancelButton", u.a),
				T = s.a.wrapped(i.r, "RemoveButton", u.a),
				L = e => {
					let {
						className: t,
						...n
					} = e;
					return a.a.createElement(i.t, m({
						kind: i.b.Button,
						priority: i.c.Primary,
						className: Object(r.a)(u.a.ConfirmButton, t)
					}, n))
				}
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				} = e, l = Object(r.useContext)(c.a), p = Object(o.e)(e => Object(d.a)(e) || Object(d.c)(e));
				return s.a.createElement("div", {
					className: Object(a.a)(u.a.wrapper, {
						[u.a.wrapperExp]: l,
						[u.a.joinOptimizationsM2]: p
					}),
					onClick: t
				}, s.a.createElement(i.a, {
					iconsKey: n,
					shouldShowPresenceDot: !0,
					memberIconClassName: u.a.memberIcon,
					presenceDotOutlineClassName: u.a.presenceDotOutlineClass
				}), s.a.createElement("label", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				E = n.n(v);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = e => {
				let {
					interests: t
				} = e;
				const n = Object(o.d)(),
					c = Object(d.b)(),
					v = Object(o.e)(g.c),
					_ = v === l.wb.Feed ? t.topics.slice(0, 5) : t.topics,
					[O, j] = Object(r.useState)(!1),
					[C, N] = Object(r.useState)(),
					k = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
						e ? (N(e), c(Object(p.z)(null == e ? void 0 : e.topic, null == e ? void 0 : e.id))) : c(Object(p.x)()), n(Object(a.openD2xOnboardingModal)({
							type: f.d.REONBOARDING,
							selectedInterests: e ? {
								[e.id]: []
							} : {}
						})), Object(u.b)(f.f.Popover, v)
					},
					w = Object(r.useCallback)(() => {
						Object(m.a)(), c(Object(p.y)()), j(!0)
					}, [c]);
				return Object(m.b)() ? s.a.createElement("div", {
					className: Object(x.a)(E.a.InterestPickerPreview, {
						[E.a.Dismissed]: O
					})
				}, s.a.createElement("div", {
					className: E.a.InterestPickerPreviewTopBorder
				}), s.a.createElement("div", {
					className: E.a.InterestPickerPreviewHeader
				}, s.a.createElement("h3", {
					className: E.a.Title
				}, y._("What do you want to see more of?", null, {
					hk: "35GlAb"
				})), s.a.createElement("button", {
					"aria-label": y._("Dismiss", null, {
						hk: "2x5qvs"
					}),
					onClick: w
				}, s.a.createElement(b.a, {
					name: "close",
					className: E.a.DismissButton
				}))), s.a.createElement("ul", {
					className: E.a.InterestListButtons
				}, _.map((e, t) => {
					const n = e.topic;
					return s.a.createElement("li", {
						className: E.a.InterestListItem,
						key: e.id
					}, s.a.createElement(i.a, {
						colorIndex: t,
						isSelected: e === C,
						onClickHandler: () => k(e),
						topic: n
					}))
				})), s.a.createElement(h.a, {
					className: E.a.ChooseMore,
					onClick: () => k()
				}, y._("Choose more topics", null, {
					hk: "2bFeJ4"
				}), s.a.createElement(b.a, {
					className: E.a.CaretRight,
					name: "caret_right"
				}))) : null
			}, O = e => {
				let {
					children: t,
					desiredIdx: n,
					interests: r,
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
						render: () => s.a.createElement(_, {
							interests: r
						})
					},
					idx: Object(c.a)(n, t)
				}
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPill.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/polished/dist/polished.es.js"),
				c = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				d = n.n(c);
			const l = (e, t, n) => {
					if (!t && !n) return {};
					let r = u(e);
					return n && !t && (r = Object(i.f)(r, .25)), {
						backgroundColor: r
					}
				},
				u = e => m[e % 7],
				m = ["#c08d41", "#ffa800", "#ff4500", "#ff3881", "#b44ac0", "#6a5cff", "#3690ea"];
			t.a = e => {
				let {
					colorIndex: t = 0,
					isSelected: n = !1,
					isSubtopic: r = !1,
					onClickHandler: i,
					topic: c
				} = e;
				return s.a.createElement(o.t, {
					className: Object(a.a)(d.a.InterestButton, {
						[d.a.Selected]: n
					}),
					kind: o.b.Button,
					onClick: i,
					style: l(t, n, r)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(a.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: r,
					onClick: a,
					post: c,
					redditStyle: l,
					theme: p,
					...b
				} = e;
				return s.a.createElement("div", m({
					className: Object(o.a)(u.a.backgroundWrapper, n),
					style: Object(i.c)(r, e),
					onClick: a,
					"data-adclicklocation": d.a.BACKGROUND
				}, b), t)
			}))
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, n) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
				colorBlockCorner: "_3cb-_dMe8EWVymoglw4OyK",
				isNightmodeOn: "_2aTpeK-XP6gqT5wf5i532u",
				colorBlockThrough: "_1oWuVmyyrm-f2cYxR7EV9F",
				circle: "NsyhNpI3rn1O5dhzAooci",
				circleStriped: "_3wLmFEQT-lNFxQtTZSBM-A",
				circleDotted: "_2Y6YoeMfdGRReebFzEkb1a",
				circleOrangeHollow: "_2MNXM_uf6rOUZgaO42Wnl0",
				circleGreenHollow: "_1ThCjjX1kI9WTSqGhdfbEY",
				circleYellowHollow: "_2tVCe8UCeeIcsfKn_uIZKT"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return m
			}));
			var r, s = n("./src/config.ts"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				u = n.n(l);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL"
			}(r || (r = {}));
			const m = e => {
				let {
					space: t
				} = e;
				const n = Object(c.e)(d.db),
					a = t === r.MODAL;
				return i.a.createElement("div", {
					className: Object(o.a)(u.a.background, {
						[u.a.isNightmodeOn]: n,
						[u.a.isModal]: a
					})
				}, i.a.createElement("div", {
					className: u.a.colorBlockCorner
				}), i.a.createElement("div", {
					className: u.a.colorBlockThrough
				}), i.a.createElement("div", {
					className: u.a.circleStriped,
					style: {
						backgroundImage: n ? `url(${s.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${s.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), i.a.createElement("div", {
					className: u.a.circleOrangeHollow
				}), i.a.createElement("div", {
					className: u.a.circleDotted,
					style: {
						backgroundImage: `url(${s.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), i.a.createElement("div", {
					className: u.a.circleGreenHollow
				}), i.a.createElement("div", {
					className: u.a.circleYellowHollow
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				c = n("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				d = n.n(c);
			const l = Object(s.forwardRef)((function(e, t) {
					let {
						className: n,
						progress: r
					} = e;
					const s = 100 * r;
					return o.a.createElement("div", {
						className: Object(a.a)(d.a.barRow, n),
						ref: t
					}, o.a.createElement("div", {
						className: d.a.track
					}), o.a.createElement("div", {
						className: d.a.progress,
						style: {
							width: `${s}%`
						}
					}, o.a.createElement(i.a, {
						className: Object(a.a)(d.a.icon, {
							[d.a.empty]: 0 === r,
							[d.a.full]: r >= 1
						})
					})))
				})),
				u = e => {
					let {
						className: t,
						progress: n
					} = e;
					const [a, i] = Object(s.useState)(!1), c = a ? n : 0;
					return o.a.createElement(r.a, {
						onChange: e => {
							a || e.intersectionRatio < .75 || i(!0)
						},
						threshold: .75
					}, o.a.createElement(l, {
						className: t,
						progress: c
					}))
				}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less": function(e, t, n) {
			e.exports = {
				titleRow: "_2b_W3JXE3VJ8DO4pd1cR3l",
				barRow: "_1ER29kj_M6FYxLorbh1AsJ",
				track: "_3MISl1dByeWJEV8uKLNtbV",
				progress: "_2Y6DmLHlgwPOvY5OenOM7j",
				icon: "_2R4rnD4fdTnIksADG42tm-",
				empty: "hkgHKu8P-BXFRaoLtGkuH",
				full: "_1HqxlPwcLJ3eBF_qCn5-go"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, n) {
			e.exports = {
				container: "nLQ3kCzR-nlu3TdaikC9s",
				user: "_2RyQRwN8Zuq56O4TBtmkg1",
				name: "_2IGaFqLglCamTtD4mDQRiZ",
				userIconContainer: "k58KWeKTpmEL6oqR3bKIu",
				userIcon: "_1y6mzxZTJEsSjG3_NbXIiS",
				counter: "_2tSuwxjSKGj8dCE3nAMNQ1",
				powerupIcon: "_1zBtXZdl9mR2-othyOeQr6"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				i = n("./src/reddit/components/UserIcon/index.tsx"),
				c = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/helpers/trackers/powerups.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				m = n.n(u);
			const p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: Object(o.a)(m.a.userIconContainer, e.iconClassName)
			}, s.a.createElement(i.a, {
				userName: e.userName || "",
				iconUrl: e.iconUrl,
				className: m.a.userIcon,
				isNSFW: e.isNsfw
			})), s.a.createElement("h4", {
				className: Object(o.a)(m.a.name, e.textClassName)
			}, e.displayName || e.userName));
			t.b = function(e) {
				var t;
				const n = Object(l.a)(),
					{
						className: r,
						supporter: i
					} = e,
					{
						score: u,
						supporterInfo: b
					} = i,
					h = Object(a.b)({
						displayName: null == b ? void 0 : b.displayName,
						score: u
					}),
					f = !!(null === (t = null == b ? void 0 : b.profile) || void 0 === t ? void 0 : t.isNsfw),
					g = Object(a.c)(b),
					x = Object(a.a)(u),
					v = s.a.createElement(p, {
						userName: h,
						isNsfw: f,
						iconUrl: g
					});
				return s.a.createElement("div", {
					className: Object(o.a)(r, m.a.container)
				}, b ? s.a.createElement(c.default, {
					className: m.a.user,
					to: `/user/${h}/`,
					onClick: () => {
						b && n(Object(d.o)(b.id, b.displayName))
					}
				}, v) : s.a.createElement("div", {
					className: m.a.user
				}, v), s.a.createElement("div", {
					className: m.a.counter
				}, s.a.createElement(x, {
					className: m.a.powerupIcon
				}), u))
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, n) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S",
				container: "_2B49Ad8MgHu8TYDSLNtfM3",
				expandButton: "_3xPQmoZqoeq-xOuehYr_2f"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-motion/lib/react-motion.js"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				d = n.n(c),
				l = n("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = 100, p = 302, b = 40;

			function h(e) {
				return `${e.lastSupportedAt}__${e.score}`
			}
			const f = e => ({
				key: h(e),
				data: {
					supporter: e
				}
			});

			function g(e, t) {
				const n = t || m;
				return e.slice(0, n).map(f)
			}
			const x = () => ({
					width: p,
					height: Object(a.spring)(0)
				}),
				v = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class E extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: g(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: n
					} = this.props, s = this.state.items.length < t.length;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(r.a)(d.a.container, e)
					}, o.a.createElement(a.TransitionMotion, {
						willLeave: x,
						willEnter: v,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(a.spring)(p),
								height: Object(a.spring)(b),
								motionProgress: Object(a.spring)(1)
							}
						}))
					}, e => o.a.createElement(o.a.Fragment, null, e.map(e => o.a.createElement("div", {
						className: d.a.item,
						key: e.key
					}, o.a.createElement("div", {
						className: d.a.itemCropper,
						style: {
							...e.style
						}
					}, o.a.createElement(l.b, {
						supporter: e.data.supporter
					}))))))), s && o.a.createElement(i.t, {
						priority: i.c.Secondary,
						className: d.a.expandButton,
						onClick: n,
						isFullWidth: !0
					}, u._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: g(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = o.a.memo(E)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				a = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				i = n("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const c = 2,
				d = 3;

			function l(e) {
				return e >= d ? i.a : e >= c ? a.a : o.a
			}

			function u(e) {
				var t;
				const n = !e,
					s = `${r.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return n ? s : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = e => {
				let {
					displayName: t,
					score: n
				} = e;
				return t || s.fbt._({
					"*": "Anonymous Heroes",
					_1: "Anonymous Hero"
				}, [s.fbt._plural(n)], {
					hk: "8kyEI"
				}).toString()
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "YgQMt0wJgGwSzvy9w0JK8",
				titleGroup: "_2Fz8jK5e-6cq1YKgYEj-n0",
				oldTitleGroup: "bp_YzVmUt92uGSsPIf4j3",
				group: "_33p4q-VA_ubIAGTrkYy18Z",
				oldGroup: "_3y6WM5j8-wIqZ0RrXxy7j_",
				title: "_11_vLMByyp2z23bapR4owd",
				powerupsIcon: "_1FxdCwvprzQqdbsn7m_kVA",
				powerupsIconImage: "_12haD-enU6DNikY4x-ASUt",
				perksButton: "l_DpA1PxJZF1VgtfMYTmH",
				Icon: "_1RbtxFt4ax1dr88gEaw4ei",
				icon: "_1RbtxFt4ax1dr88gEaw4ei",
				isLeft: "_306IYOFAyc7DNe0yxnopfx",
				isRight: "_3IBC8iz6vb1bAK-tnNHYqz",
				active: "_3nzY1PxewxdnUvnDIkdLGq",
				redditStyle: "_1uz5vLZgNj3zHMeVyKFNN3",
				subTitle: "Bks9fiWNtmEGkO-O02zvZ",
				progress: "_3kNzltm7kFAgzESGFqpNKJ",
				heroes: "_36CBrbv63kmBRBZvTC9Ty9",
				becomeFirstHero: "aJNQr1T_lEkfCdXvnmNcQ",
				becomeFirstHeroLabel: "_3c0aoF8IoxBMG3vuqMWoox",
				button: "_3H6aN2LsU-HPJq_wZmyeHm",
				premiumDescription: "_3ZUMj-Yl_XJgexvK3K0N",
				premiumIconWrapper: "_2Jfqs4IPBuRljRHV2X8nwq",
				premiumIcon: "_3Rp23Miges4ZwfnHm13T9Z"
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				c = n("./src/reddit/actions/gold/powerups.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				let {
					className: t,
					onClick: n,
					disabled: r
				} = e;
				return Object(a.e)(l.q) ? o.a.createElement(d.t, {
					priority: d.c.Primary,
					className: t,
					onClick: n,
					isFullWidth: !0,
					disabled: r
				}, u._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				})) : null
			};
			var p = n("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				b = n("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx"),
				h = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				f = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = n("./src/reddit/helpers/trackers/powerups.ts"),
				x = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/selectors/experiments/econ/index.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				O = n("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				j = n.n(O);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = e => {
				const {
					className: t,
					powerups: n
				} = e, {
					tier: r,
					count: s,
					tiersInfo: a
				} = n, i = (a[r] || a[r - 1]).powerupsCost;
				if (!i) return null;
				const c = Math.min(i, s) / i;
				return o.a.createElement("div", {
					className: t
				}, o.a.createElement("div", {
					className: j.a.titleRow
				}, o.a.createElement("span", null, C._("Powerups", null, {
					hk: "DrcXp"
				})), o.a.createElement("span", null, s < i ? `${s}/${i}` : s)), o.a.createElement(_.b, {
					progress: c
				}))
			};
			var k = n("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				w = n("./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts"),
				S = n("./src/reddit/components/PowerupsSidebar/index.m.less"),
				I = n.n(S);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					className: t,
					subredditId: n
				} = e;
				const d = Object(a.d)(),
					u = Object(x.a)(),
					_ = Object(a.e)(y.k),
					O = Object(a.e)(e => Object(l.i)(e, {
						subredditId: n
					})),
					j = Object(a.e)(e => Object(E.W)(e, {
						subredditId: n
					})),
					C = Object(a.e)(e => Object(l.l)(e, {
						subredditId: n
					})),
					S = Object(a.e)(e => !!Object(l.j)(e, {
						subredditId: n
					})),
					T = Object(a.e)(w.b) && Object(w.c)(n),
					L = Object(a.e)(v.i);
				Object(s.useEffect)(() => {
					O && d(Object(i.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo)(n))
				}, [O, n, d]);
				if (!O || 1 === O.tiersInfo.length || !j || T || L) return null;
				return o.a.createElement(h.a, null, o.a.createElement(f.a, {
					className: t,
					title: P._("Powerups", null, {
						hk: "DrcXp"
					})
				}, o.a.createElement("div", {
					className: I.a.container
				}, o.a.createElement("div", {
					className: I.a.titleGroup
				}, o.a.createElement("div", {
					className: I.a.powerupsIcon
				}, o.a.createElement("img", {
					className: I.a.powerupsIconImage,
					src: `${r.a.assetPath}/img/powerups/powerups-rangers.png`
				})), o.a.createElement("h2", {
					className: I.a.title
				}, (() => S ? P._("Powerups are unlocked in {communityName}", [P._param("communityName", j.displayText)], {
					hk: "3xCZkG"
				}) : P._("Powerup to unlock perks for {communityName}", [P._param("communityName", j.displayText)], {
					hk: "2OPLXh"
				}))()), o.a.createElement(m, {
					className: I.a.button,
					onClick: () => {
						u(Object(g.k)()), d(Object(c.e)("powerups_sidebar"))
					}
				}), o.a.createElement(p.a, {
					space: p.b.SIDEBAR
				})), o.a.createElement("div", {
					className: I.a.group
				}, o.a.createElement("h3", {
					className: I.a.subTitle
				}, P._("Community Heroes", null, {
					hk: "2ssat0"
				})), o.a.createElement(N, {
					className: I.a.progress,
					powerups: O
				}), !!(null == C ? void 0 : C.length) && o.a.createElement(k.a, {
					supporters: C,
					className: I.a.heroes,
					maxSupporters: 8,
					onShowFullSupportersList: () => {
						u(Object(g.m)()), d(Object(c.f)(n))
					}
				}), !(null == C ? void 0 : C.length) && o.a.createElement("div", {
					className: I.a.becomeFirstHero
				}, o.a.createElement(b.a, {
					displayName: P._("Become the first hero!", null, {
						hk: "4ta0Hi"
					}).toString(),
					userName: null == _ ? void 0 : _.displayName,
					isNsfw: !!(null == _ ? void 0 : _.isNSFW),
					iconUrl: null == _ ? void 0 : _.accountIcon,
					textClassName: I.a.becomeFirstHeroLabel
				}))))))
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				return s.a.createElement("div", {
					className: Object(i.a)(t, h.a.container, h.a.placeholder, h.a.large, p.a.largeAndMediumPostStyles)
				}, s.a.createElement(l.a, {
					className: h.a.backgroundWrapper
				}, s.a.createElement("div", {
					className: h.a.titleAndDescriptionContainer
				}, s.a.createElement("h3", {
					className: h.a.title
				}, f._("Top livestream", null, {
					hk: "4od1tZ"
				}))), s.a.createElement("div", {
					className: h.a.body
				}, s.a.createElement("div", {
					className: h.a.previewContainer
				}, s.a.createElement("div", {
					className: Object(i.a)(h.a.thumbnail, h.a.loading)
				})))))
			};
			var x = e => {
				let {
					className: t,
					layout: n
				} = e;
				return n === u.g.Classic ? s.a.createElement(c.b, {
					className: Object(i.a)(t, h.a.classicPostPlaceholder),
					isLoading: !0
				}) : n === u.g.Compact ? s.a.createElement(d.a, {
					className: Object(i.a)(t, h.a.compactPostPlaceholder),
					isLoading: !0
				}) : s.a.createElement(g, {
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
					return s.a.createElement(x, {
						className: t,
						layout: n
					})
				},
				getComponent: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("RpanListingUnit")]).then(n.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var E = e => s.a.createElement(v, e),
				y = n("./src/reddit/components/Scroller/ScrollChild.ts"),
				_ = n("./src/reddit/helpers/trackers/rpan.ts");
			const O = e => e === u.g.Classic ? 84 : e === u.g.Compact ? 42 : 340,
				j = new o.a(20),
				C = e => {
					const t = `rpan-${e.layout}-${e.listingKey}`,
						n = j.get(t);
					if (n) return n;
					const r = Object(y.a)(e.desiredIndex, e.children),
						o = {
							child: {
								id: t,
								estHeight: O(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(_.H)()),
								render: t => {
									let {
										className: n
									} = t;
									return s.a.createElement(E, {
										className: n,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: r
						};
					return j.set(t, o), o
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
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/lodash/sampleSize.js"),
				c = n.n(i),
				d = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				l = n("./src/reddit/hooks/useConstructor.ts"),
				u = n("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = n.n(u);
			const p = Object(r.a)({
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
						numVisibleIcons: r = h,
						presenceDotOutlineClassName: i,
						shouldShowPresenceDot: u,
						wrapperClassName: f
					} = e, g = Object(s.useRef)([]);
					return Object(l.a)(() => {
						const e = Object(d.a)(t, b, !0);
						g.current = c()(e, r)
					}), o.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, f)
					}, g.current.map((e, t) => {
						let {
							color: s,
							image: c
						} = e;
						return t === r - 1 && u ? o.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: t
						}, o.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, n),
							src: c,
							style: {
								backgroundColor: s
							}
						}), o.a.createElement(p, {
							showPresence: !0,
							outlineClassName: i
						})) : o.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, n),
							key: t,
							src: c,
							style: {
								backgroundColor: s
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
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
							((e, t, n, r, s) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									s && r(n, s), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(r.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(r.f)(Object(u.a)(e).line, .8)
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
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(r.a)({
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
			var r = n("./node_modules/raf/index.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o);
			class i extends a.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && s.a.cancel(this.frame), this.frame = s()(this.props.onResize)
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
						...r
					} = e;
					return o.a.createElement(x, p({}, r, {
						className: Object(a.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				E = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
			class y extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state, {
							onClickReveal: n
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == n || n(e))
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
					}), o.a.createElement(E, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: r.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = y
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
				return E
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "t", (function() {
				return N
			})), n.d(t, "p", (function() {
				return k
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "s", (function() {
				return I
			})), n.d(t, "r", (function() {
				return P
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "w", (function() {
				return L
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				E = c.a.em("I", i.a),
				y = c.a.span("U", i.a),
				_ = e => s.a.createElement("del", e),
				O = c.a.sub("Sub", i.a),
				j = c.a.sup("Sup", i.a),
				C = c.a.table("Table", i.a),
				N = c.a.tr("Tr", i.a),
				k = c.a.td("Tdl", i.a),
				w = c.a.td("Tdc", i.a),
				S = c.a.td("Tdr", i.a),
				I = c.a.th("Thl", i.a),
				P = c.a.th("Thc", i.a),
				T = (c.a.th("Thr", i.a), c.a.wrapped(e => s.a.createElement(o.b, e), "A", i.a)),
				L = c.a.wrapped(d.a, "A", i.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ",
				Component: "_1GPL7pYOAn5YHfoARxZ8-F",
				component: "_1GPL7pYOAn5YHfoARxZ8-F"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/findLastIndex.js"),
				o = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/media.tsx"),
				h = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = n("./src/reddit/components/RichTextJson/index.m.less"),
				g = n.n(f);
			const x = n("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				v = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...r
					} = e;
					return i.a.createElement(x, r)
				}),
				E = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.u || !!e.c && !e.c.every(e => e.e === p.A && !e.t),
				y = e => o()(e, E),
				_ = e => e.findIndex(E),
				O = e => {
					const {
						altText: t,
						className: n,
						content: r,
						isListing: s,
						isNSFW: o,
						isNsfwBlockingModalEligible: a,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: f,
						renderMediaAsLinks: E,
						rtJsonElementProps: O,
						useExplicitTextColor: j,
						shouldBlur: C,
						onClickRevealSpoilerText: N,
						mediaProps: k
					} = e, w = r.document, S = [], I = e.mediaMetadata || null, P = _(w), T = y(w);
					if (C && !s && !a) return i.a.createElement(x, {
						className: Object(c.a)(m.j, n)
					}, i.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!o, !!d))));
					if (-1 !== P)
						for (let i = P; i <= T; i++) {
							const e = w[i];
							switch (e.e) {
								case p.k:
									S.push(h.c(e, O, i));
									break;
								case p.l:
									S.push(h.d(i));
									break;
								case p.b:
									S.push(h.a(e, I, O, i));
									break;
								case p.c:
									S.push(h.b(e, i));
									break;
								case p.p:
									S.push(h.f(e, I, O, i, N));
									break;
								case p.z:
									S.push(h.h(e, I, O, i, N));
									break;
								case p.u:
									S.push(h.g(e, I, O, i, N));
									break;
								case p.h:
									S.push(Object(b.a)(e, i));
									break;
								case p.m:
								case p.a:
								case p.D:
									S.push(...Object(b.b)(e, i, O, I, E, f, t, k))
							}
						}
					return j ? i.a.createElement(x, {
						className: Object(c.a)(m.j, n)
					}, S) : i.a.createElement(v, {
						className: Object(c.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, S)
				};
			class j extends i.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => r.fbt._("Something went wrong while trying to render this", null, {
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
						return O(t)
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
				hasSmallMedia: "_1yyTGHoIL7vZ6fNJ2-s3dL",
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				renderSmallMedia: "_18dflNtNlz_sHfoBK19VZn",
				reload: "_2O6ZaJBTx6OGys4GI6Egy-",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return L
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/isComment.ts"),
				h = n("./src/reddit/helpers/richTextJson/index.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/models/RichTextJson/index.ts");
			var x = e => o.a.createElement("svg", {
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
				v = n("./src/reddit/components/RichTextJson/elements.tsx"),
				E = n("./src/reddit/components/RichTextJson/media.m.less"),
				y = n.n(E),
				_ = n("./src/lib/lessComponent.tsx"),
				O = n("./src/reddit/helpers/media/index.ts");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = /\/(\w+)\/asset\/(\w+)\//,
				N = _.a.wrapped(v.a, "A", y.a),
				k = _.a.wrapped(l.a, "ImageBox", y.a),
				w = _.a.wrapped(e => o.a.createElement("p", e), "Caption", y.a),
				S = _.a.div("Placeholder", y.a),
				I = _.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: i,
						onReload: c,
						...d
					} = e;
					const l = n === g.D ? r.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : r.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(s.useState)(!1);
					return Object(s.useEffect)(() => {
						c && setTimeout(() => {
							m(!0)
						}, 1500)
					}), o.a.createElement(S, j({
						className: Object(a.a)(t, {
							[y.a.renderSmallMedia]: i,
							[y.a.reload]: !!c
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, d), !!c && u && o.a.createElement(p.t, {
						priority: p.c.Plain,
						className: y.a.ModalTopicsErrorButton,
						Icon: Object(f.b)("refresh"),
						text: r.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: c
					}))
				}, "Placeholder", y.a),
				P = (e, t) => {
					let {
						c: n,
						x: r,
						y: s
					} = e;
					return o.a.createElement("div", {
						className: y.a.MediaWrapper
					}, o.a.createElement(u.a, {
						height: s,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: r
					}, o.a.createElement(d.a, {
						isListing: !1,
						source: n,
						height: s,
						width: r,
						showCentered: !0,
						showFull: !0
					})))
				},
				T = (e, t, n) => {
					const r = e.c;
					let s = "";
					return n && (n.e === g.s ? s = n.s.u : n.e === g.r ? s = n.s.gif : n.e === g.t && (s = (e => {
						const t = C.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), s ? o.a.createElement(N, {
						href: s,
						key: t,
						title: r
					}, r || s) : null
				},
				L = (e, t, n, r, s, i, d, l) => {
					const p = g.E(r, e.id);
					if (s) return [T(e, t, p)];
					const f = [];
					return !p || p.e === g.s && null === p.s.x && null === p.s.y ? f.push(((e, t, n, r) => o.a.createElement(I, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: r
					}))(e.e, t, null == l ? void 0 : l.renderSmallMedia, null == l ? void 0 : l.onReload)) : p.e === g.s ? f.push(((e, t, n, r, s) => {
						let {
							id: i,
							s: c,
							p: d
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m
						} = s || {};
						let p = c;
						return m && (p = Object(O.i)(240, 20, c, d)), o.a.createElement("div", {
							className: Object(a.a)(y.a.MediaWrapper, {
								[y.a.mHasCaption]: n,
								[y.a.hasSmallMedia]: m
							})
						}, o.a.createElement(u.a, {
							height: p.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: p.x
						}, o.a.createElement(k, {
							altText: r,
							originalSource: p.u,
							postId: i,
							source: p.u,
							height: p.y,
							width: p.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: m
						})))
					})(p, t, !!e.c, d, l)) : p.e === g.r ? f.push(((e, t, n, r) => {
						let {
							id: s,
							ext: i,
							s: c
						} = e;
						if (Object(h.h)(s)) {
							const e = r.renderingObjectInfo,
								d = !!e && Object(b.b)(e),
								l = i || Object(h.g)(s);
							return o.a.createElement("div", {
								className: Object(a.a)({
									[y.a.MediaWrapper]: !d,
									[y.a.CommentGifWrapper]: d,
									[y.a.mHasCaption]: n
								})
							}, o.a.createElement(N, {
								href: l,
								key: t,
								target: "_blank"
							}, c.mp4 ? o.a.createElement("video", {
								className: y.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: c.mp4
							})) : l), o.a.createElement(x, {
								className: y.a.GiphyLogo
							}))
						}
						return o.a.createElement("div", {
							className: Object(a.a)(y.a.MediaWrapper, {
								[y.a.mHasCaption]: n
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
							postId: s,
							source: c.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(p, t, !!e.c, n)) : p.e === g.t && f.push(((e, t, n, r) => {
						let {
							hlsUrl: s,
							dashUrl: i,
							x: d,
							y: l,
							isGif: m
						} = e;
						return o.a.createElement("div", {
							className: Object(a.a)(y.a.MediaWrapper, {
								[y.a.mHasCaption]: n
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
							hlsSource: s,
							mpegDashSource: i,
							postId: r,
							isGif: m
						})))
					})(p, t, !!e.c, i)), e.c && f.push(((e, t) => o.a.createElement(w, {
						key: t
					}, e))(e.c, `caption${t}`)), f
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return P
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "b", (function() {
				return B
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "h", (function() {
				return R
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "e", (function() {
				return U
			}));
			var r = n("./src/lib/unicodeUtils/index.ts"),
				s = n("./node_modules/lodash/reduce.js"),
				o = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/models/Product/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var h = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = n.n(f);
			const x = 1e3,
				v = 1e3;
			var E;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(E || (E = {}));
			class y extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = E.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = E.Inside, setTimeout(() => {
							this.mouseLocation === E.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, x)
					}, this.onMouseOut = () => {
						this.mouseLocation = E.Outside, setTimeout(() => {
							this.mouseLocation !== E.Inside && this.setState({
								tooltipOpen: !1
							})
						}, v)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = p.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.jb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, r, s;
					t.e === m.s ? (n = t.s.x, r = t.s.y, s = t.s.u) : t.e === m.r && (n = t.s.x, r = t.s.y, s = t.s.gif);
					const o = this.state.tooltipOpen ? Object(d.a)() : void 0;
					return s ? i.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: o,
						src: s,
						width: n,
						height: r,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && i.a.createElement(h, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${o}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var _ = Object(l.c)(y),
				O = n("./src/reddit/components/RichTextJson/media.tsx"),
				j = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				C = n("./src/reddit/components/SubredditMention/index.tsx"),
				N = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				k = n("./src/reddit/helpers/isComment.ts"),
				w = n("./src/reddit/helpers/isPost.ts"),
				S = n("./src/reddit/helpers/richTextJson/index.ts"),
				I = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const P = (e, t, n) => {
					const r = e.c || [],
						s = e.l,
						o = [],
						a = r.length;
					for (let i = 0; i < a; i++) {
						const e = r[i];
						o.push(e.e === m.w ? e.t : U(e, t, i))
					}
					const d = c.x[s - 1];
					return i.a.createElement(d, {
						key: n
					}, o)
				},
				T = e => i.a.createElement(c.e, {
					key: e
				}),
				L = (e, t, n, r, s) => {
					const o = e.c;
					if (!o) return;
					const a = o.length,
						d = [];
					for (let i = 0; i < a; i++) d.push(M(o[i], t, n, i, s));
					return i.a.createElement(c.c, {
						key: r
					}, d)
				},
				B = (e, t) => {
					const n = e.c;
					return i.a.createElement(c.k, {
						key: t
					}, i.a.createElement(c.h, null, n.reduce((e, t, n, r) => e += t.t + (n < r.length ? "\n" : ""), "")))
				},
				A = (e, t, n, r, s) => {
					const o = e.c,
						a = [],
						d = o.length;
					for (let u = 0; u < d; u++) {
						const e = o[u].c;
						e && e.length && a.push(i.a.createElement(c.g, {
							key: u
						}, e.map((e, r) => M(e, t, n, r, s))))
					}
					const l = e.o ? c.i : c.v;
					return i.a.createElement(l, {
						key: r
					}, a)
				},
				M = (e, t, n, r, s) => {
					switch (e.e) {
						case m.b:
							return L(e, t, n, r, s);
						case m.c:
							return B(e, r);
						case m.k:
							return P(e, n, r);
						case m.l:
							return T(r);
						case m.p:
							return A(e, t, n, r, s);
						case m.u:
							return D(e, t, n, r, s);
						case m.z:
							return R(e, t, n, r, s)
					}
				},
				R = (e, t, n, r, s) => {
					const o = e.c,
						a = e.h,
						d = o.length,
						l = a.length,
						u = [],
						m = [],
						p = [];
					for (let c = 0; c < l; c++) {
						const e = a[c],
							{
								H: r,
								D: o
							} = G(e.a),
							{
								c: d = []
							} = e;
						u.push(i.a.createElement(r, {
							key: c
						}, F(d, t, n, s))), p[c] = o
					}
					for (let b = 0; b < d; b++) {
						const e = o[b],
							r = e.length,
							a = [];
						for (let o = 0; o < r; o++) {
							const r = p[o],
								{
									c = []
								} = e[o];
							a.push(i.a.createElement(r, {
								key: o
							}, F(c, t, n, s)))
						}
						m.push(i.a.createElement(c.t, {
							key: b
						}, a))
					}
					return i.a.createElement(c.n, {
						key: r
					}, i.a.createElement("thead", null, i.a.createElement(c.t, null, u)), i.a.createElement("tbody", null, m))
				},
				D = (e, t, n, r, s) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(c.j, {
						key: e
					}, i.a.createElement("br", null)))(r);
					const o = e.c[0];
					return o.e !== m.m && o.e !== m.a || !Object(S.h)(o.id) ? i.a.createElement(c.j, {
						key: r
					}, F(e.c, t, n, s)) : Object(O.b)(o, r, n, t)
				},
				F = (e, t, n, r) => {
					const s = [],
						o = e.length;
					for (let a = 0; a < o; a++) {
						const o = e[a];
						if (o.e === m.A) s.push(W(o, a));
						else if (o.e === m.x) s.push(i.a.createElement(j.a, {
							key: a,
							onClickReveal: r
						}, F(o.c, t, n, r)));
						else if (o.e === m.n) s.push(i.a.createElement("br", {
							key: a
						}));
						else if (o.e === m.m || o.e === m.a) {
							if (o.id.startsWith("emote|")) {
								const e = m.E(t, o.id);
								e && s.push(i.a.createElement(_, {
									key: a,
									node: o,
									media: e
								}))
							}
						} else s.push(U(o, n, a))
					}
					return s
				},
				U = (e, t, n) => {
					switch (e.e) {
						case m.o:
							const r = W({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(N.b)(e.u)) return i.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, r);
							let s, o;
							const a = Object(I.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(w.b)(d) && (s = d.postId), d && Object(k.b)(d) && (o = d.id, s = d.postId), i.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: a,
								postId: s,
								commentId: o
							}, r);
						case m.y:
							return i.a.createElement(C.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.B:
						case m.C:
							return i.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.v:
							return i.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				W = (e, t) => {
					const {
						f: n,
						t: s
					} = e, o = [];
					if (!n) return V(0, s, t);
					const a = Object(r.a)(s);
					let i = 0,
						c = 0;
					const d = n.length;
					for (; i < d; i++) {
						const [e, t, r] = n[i], d = t + r, l = a[t], u = a[d] - l;
						l > c && o.push(V(0, s.substr(c, l - c), `between${i}`)), o.push(V(e, s.substr(l, u), i)), c = l + u
					}
					return c < s.length && o.push(V(0, s.substr(c), `remaining${i}`)), o
				},
				H = {
					[m.j.monospace]: c.h,
					[m.j.bold]: c.b,
					[m.j.italic]: c.f,
					[m.j.underline]: c.u,
					[m.j.strikethrough]: c.d,
					[m.j.subscript]: c.l,
					[m.j.superscript]: c.m
				},
				V = (e, t, n) => {
					let r = t;
					return r = o()(H, (t, r, s) => e & parseInt(s, 10) ? i.a.createElement(r, {
						key: n
					}, t) : t, r)
				},
				G = e => {
					switch (e) {
						case m.f:
							return {
								H: c.r, D: c.q
							};
						case m.d:
							return {
								H: c.r, D: c.o
							};
						case m.e:
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
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = (e, t) => {
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
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				o = n.n(s);
			t.a = r.a.div("header", o.a)
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/polished/dist/polished.es.js"),
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
				E = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = n("./src/reddit/components/MiniCardPost/index.m.less"),
				j = n.n(O),
				C = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				N = n.n(C);
			const k = e => e.type === E.f.Spoiler,
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
					shouldOpenPost: E,
					showSubredditMeta: O = !0,
					showSubredditName: C,
					subredditOrProfile: w
				} = e, S = h && h.preview && h.preview.url || void 0, I = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", T = E && P || f && Object(i.a)("/search", {
					q: f.rawQuery,
					source: I
				}) || P, L = f ? f.subredditInfo && f.subredditInfo.icon : w && w.icon.url, B = f ? f.subredditInfo && f.subredditInfo.displayText : w && (w.displayText || w.name), A = h ? h.flair.filter(k) : [], M = h ? h.score : 0, R = h ? h.numComments : 0, D = h && h.isSponsored, F = Object(_.a)(e).body, U = `linear-gradient(\n      ${Object(s.f)(F,.2)},\n      ${Object(s.f)(F,.3)},\n      ${Object(s.f)(F,.4)},\n      ${Object(s.f)(F,.6)},\n      ${Object(s.f)(F,.8)},\n      ${F}\n    )`, W = a.a.createElement("div", {
					id: o,
					className: Object(c.a)(N.a.trendingPost, {
						[N.a["m-background"]]: !!S
					})
				}, a.a.createElement(g.default, {
					to: T
				}, a.a.createElement("div", {
					className: Object(c.a)(N.a.backgroundWrapper, j.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(_.a)(e).body, S || Object(_.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, D && a.a.createElement("div", {
					className: N.a.promoted
				}, r.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(c.a)(N.a.innerContainer, j.a.innerContainer, d),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? N.a.title : N.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(c.a)(N.a.description, n)
				}, A.length > 0 && a.a.createElement(m.a, {
					className: N.a.flair,
					titleFlair: A,
					nowrap: !0,
					post: h
				}), h.title) : a.a.createElement("div", {
					className: N.a.spacer
				}), O && L && B && a.a.createElement(x.a, {
					className: N.a.relatedSubredditMetaData,
					iconClassName: N.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: r.fbt._("{subredditName} and more", [r.fbt._param("subredditName", B)], {
						hk: "2YTyJf"
					})
				}), !O && h && a.a.createElement("div", {
					className: N.a.metaLine
				}, C && B && a.a.createElement("span", {
					className: N.a.meta
				}, Object(v.d)(B)), a.a.createElement("span", {
					className: N.a.meta
				}, r.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [r.fbt._plural(M, "number", Object(u.b)(M))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: N.a.meta
				}, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(R, "number", Object(u.b)(R))], {
					hk: "311aXY"
				})))))));
				return D ? a.a.createElement(p.a, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = n.n(i);

			function d(e) {
				const {
					className: t,
					id: n,
					layoutBodyClassName: r,
					showCardView: i
				} = e, d = {
					[c.a["m-card"]]: i
				};
				return s.a.createElement("div", {
					id: n,
					className: Object(o.a)(c.a.container, d, t)
				}, s.a.createElement(a.a, {
					className: c.a.layout,
					bodyClassName: Object(o.a)(c.a.layoutBody, d, r),
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = () => s.a.createElement(a.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => s.a.createElement(i.a, {
				className: e.className,
				header: m(),
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => s.a.createElement("div", {
				className: l.a.post,
				key: `placeholder-post-${t}`
			}, s.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.one, p)
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.two, p)
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.icon, p)
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.name, p)
			}))))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, n) {
			e.exports = {
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/lodash/random.js"),
				o = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/helpers/adCount/index.ts"),
				f = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				v = n.n(x),
				E = n("./src/lib/lessComponent.tsx");
			const y = Object(r.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), n.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), n.e("reddit-components-SidebarNativeAd")]).then(n.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				_ = Object(d.c)({
					post: (e, t) => {
						const {
							placement: n,
							placementIndex: r
						} = t, s = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(n, s, r)]
					}
				}),
				O = Object(c.b)(_),
				j = E.a.wrapped(b.a, "ThemedWidget", v.a),
				C = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(g.F)(e.media) && e.media.content)),
				N = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				k = Object(p.c)(class extends i.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: n
						} = this.props;
						return t !== e.className || n !== e.redditStyle
					}
					trackViewability(e, t, n) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(f.b)(e, t, n))
					}
					render() {
						const e = o()(0, N.length - 1),
							{
								img: t,
								href: n
							} = N[e],
							{
								className: r,
								placement: s,
								redditStyle: a
							} = this.props;
						return i.a.createElement(j, {
							className: r,
							contentOnly: !0,
							redditStyle: a
						}, i.a.createElement(u.a, {
							img: t,
							href: n,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, s)
						}))
					}
				});

			function w(e) {
				let {
					className: t,
					post: n,
					placementIndex: r,
					refreshKey: s,
					listingName: o,
					placement: a,
					redditStyle: c,
					awaitingBrandSafetyCheck: d,
					forceHouseAd: l,
					removeSidebarSpacer: u
				} = e;
				const p = u ? i.a.Fragment : m.a;
				if (!d && C(n)) {
					let e = null;
					return l ? e = i.a.createElement(k, {
						className: t,
						redditStyle: c,
						placement: a
					}) : n && (e = i.a.createElement(y, {
						post: n,
						postId: n.id,
						refreshKey: s,
						listingName: o,
						placement: a,
						placementIndex: r
					})), i.a.createElement(p, null, e)
				}
				return null
			}
			t.a = O(w)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.u)();
			t.a = m(Object(o.b)((e, t) => {
				let {
					listingName: n,
					pageLayer: r
				} = t;
				const s = Object(i.b)(e, {
						listingName: n,
						pageLayer: r
					}),
					o = Object(d.E)(e) || Object(c.a)(e),
					a = Object(i.e)(e);
				return {
					canShowAd: s && !o,
					awaitingBrandSafetyCheck: !Object(i.c)(e),
					isAdsDisabled: o,
					viewIsUnsafe: a
				}
			})(e => {
				let {
					canShowAd: t,
					isAdsDisabled: n,
					viewIsUnsafe: r,
					pageLayer: o,
					...a
				} = e;
				return !n && t && o ? s.a.createElement(l.a, u({
					forceHouseAd: r
				}, a)) : null
			}))
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
			var r = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", s.a)
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
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
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
				E = n.n(v);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = u.a.div("BladeContainer", E.a), O = u.a.wrapped(h.a, "CloseIcon", E.a), j = u.a.div("LoadingTitleContainer", E.a), C = u.a.div("LoadingNavContainer", E.a), N = u.a.div("ShortLoadingNav", E.a), k = u.a.wrapped(b.a, "ThemedChevron", E.a), w = e => {
				let {
					...t
				} = e;
				return a.a.createElement(_, null, a.a.createElement(O, null), a.a.createElement(p.k, null, a.a.createElement(p.p, null, y._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), a.a.createElement(p.o, null, a.a.createElement(j, null, a.a.createElement("div", {
					className: Object(l.a)(E.a.LoadingTitle, t.isLoading && E.a.loading)
				})), a.a.createElement(C, null, a.a.createElement("div", {
					className: Object(l.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), a.a.createElement(k, null)), a.a.createElement(C, null, a.a.createElement(N, null), a.a.createElement(k, null)), a.a.createElement(C, null, a.a.createElement("div", {
					className: Object(l.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), a.a.createElement(k, null)), a.a.createElement(C, null, a.a.createElement(N, null), a.a.createElement(k, null)), a.a.createElement(C, null, a.a.createElement("div", {
					className: Object(l.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), a.a.createElement(k, null)))))
			}, S = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => a.a.createElement(w, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => a.a.createElement(w, {
					gradientType: "posts",
					isLoading: !0
				})
			}), I = Object(c.c)({
				isEditing: g.i,
				isSubscriptionsPinned: x.c,
				moderatorPermissions: f.n
			});
			t.a = Object(i.b)(I)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? a.a.createElement("div", {
					className: Object(l.a)(E.a.Container, e.isSubscriptionsPinned && E.a.isSubscriptionPinned)
				}, e.children, a.a.createElement(S, {
					subredditId: e.subredditId
				})) : a.a.createElement(o.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends s.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return s.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var i = Object(o.a)(a);
			t.a = e => s.a.createElement(i, e)
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
				return E
			})), n.d(t, "j", (function() {
				return y
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(s);
			const a = r.a.section("FormPage", o.a),
				i = r.a.h1("HomePageTitle", o.a),
				c = r.a.button("HomePageBreadcrumb", o.a),
				d = r.a.div("HomePageGroup", o.a),
				l = r.a.h1("FormPageTitle", o.a),
				u = r.a.div("FormPageSection", o.a),
				m = r.a.div("FormGroup", o.a),
				p = r.a.h2("FormGroupTitle", o.a),
				b = r.a.div("FormElement", o.a),
				h = r.a.div("FormGroupDescription", o.a),
				f = r.a.div("FormItem", o.a),
				g = r.a.h3("FormElementTitle", o.a),
				x = r.a.div("FormElementDescription", o.a),
				v = r.a.div("FormElementError", o.a),
				E = r.a.div("FormElementSubGroup", o.a),
				y = r.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: r,
						...s
					} = e, a = [n, v.a.inTopBar, v.a.iconContainer];
					return r ? a.push(v.a.emptyEditableIconInTopBar) : a.push(v.a.editableIcon, v.a.emptyEditableIcon), o.a.createElement("span", E({}, s, {
						className: Object(c.a)(...a)
					}), r ? o.a.createElement(h.a, {
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
						alt: r,
						role: s,
						onClick: a,
						inTopBar: i,
						src: d
					} = e;
					return o.a.createElement("span", {
						className: v.a.iconContainer
					}, o.a.createElement("img", {
						alt: r,
						onClick: a,
						role: s,
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
			class j extends o.a.PureComponent {
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
					}, e ? r.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : r.fbt._("Add icon", null, {
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
					}), n = o.a.createElement(o.a.Fragment, null, o.a.createElement(_, E({
						alt: r.fbt._("Subreddit icon", null, {
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
					}, o.a.createElement(y, E({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : o.a.createElement(o.a.Fragment, null, o.a.createElement(y, E({
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
				onFileSelected: (n, r) => {
					e(Object(d.a)(t.subreddit.id, n, r))
				}
			}))(Object(l.c)(j))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);
			const l = o.a.wrapped(a.b, "SubredditIcon", d.a),
				u = o.a.wrapped(e => s.a.createElement(i.b, e), "S", d.a)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
						return s.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, s.a.createElement(l.a, {
							href: `/r/${t}/`
						}, s.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, s.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = n("./src/reddit/selectors/subredditMention.ts");
			class x extends s.a.PureComponent {
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
					return s.a.createElement(i.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const v = Object(b.c)(x),
				E = Object(a.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				y = Object(o.b)(E),
				_ = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: r,
						userVariant: o,
						rtJsonElementProps: a
					} = e;
					if (!n || !t) return s.a.createElement(v, {
						subredditName: r,
						rtJsonElementProps: a
					});
					switch (o) {
						case h.Of.SmIcon:
							return s.a.createElement(p, {
								subredditName: r,
								rtJsonElementProps: a
							});
						case h.Of.SmIconHc:
							return s.a.createElement(p, {
								subredditName: r,
								isHoverable: !0,
								rtJsonElementProps: a
							});
						default:
							return s.a.createElement(v, {
								subredditName: r,
								rtJsonElementProps: a
							})
					}
				};
			t.b = y(_)
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, n) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys",
				predictionsFilter: "jU3ijmuG8CyRDQhPOHdw4",
				liveIcon: "_39JxJrjNw5NY_Q0ARn8NRe"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/featureFlags/component.tsx"),
				l = n("./src/reddit/selectors/widgets.ts"),
				u = n("./src/lib/linkMatchers/index.ts"),
				m = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				f = n("./src/telemetry/models/Outbound.ts"),
				g = n("./src/reddit/components/SubredditNav/index.m.less"),
				x = n.n(g);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = (e, t, n) => Object(p.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: n
				}),
				y = e => {
					let {
						children: t,
						isActive: n,
						isTopBannerVariant: r,
						...o
					} = e;
					return s.a.createElement("div", v({
						className: E(x.a.subNavTitle, n, r)
					}, o), s.a.createElement("span", null, t), s.a.createElement(h.b, {
						className: x.a.navDropdownIcon
					}))
				},
				_ = e => {
					let {
						className: t,
						href: n,
						isActive: r,
						to: o,
						isTopBannerVariant: a,
						...i
					} = e;
					const c = E(x.a.navLink, r, a);
					return o ? s.a.createElement(m.a, v({
						className: c,
						to: o
					}, i)) : n ? s.a.createElement(b.b, v({
						className: c,
						isSponsored: !1,
						sourceElement: f.SourceElement.NavigationMenu,
						href: n
					}, i)) : s.a.createElement("a", v({
						className: c
					}, i))
				},
				O = e => {
					let {
						className: t,
						isActive: n,
						...r
					} = e;
					return s.a.createElement(m.a, v({
						className: Object(p.a)(E(x.a.navLink, n), t)
					}, r))
				},
				j = e => {
					let {
						className: t,
						href: n,
						isActive: r,
						...o
					} = e;
					return n ? s.a.createElement(b.b, v({
						className: E(x.a.subNavLink, r),
						isSponsored: !1,
						sourceElement: f.SourceElement.NavigationMenu,
						href: n
					}, o)) : s.a.createElement("a", v({
						className: E(x.a.subNavLink, r)
					}, o))
				},
				C = e => {
					let {
						className: t,
						...n
					} = e;
					return s.a.createElement("div", v({
						className: Object(p.a)(x.a.subNavContainer, t)
					}, n))
				},
				N = e => {
					let {
						className: t,
						isOpen: n,
						...r
					} = e;
					return s.a.createElement("div", v({
						className: Object(p.a)(x.a.subNavList, t, {
							[x.a.mIsOpen]: n
						})
					}, r))
				};
			class k extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement(C, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, s.a.createElement(y, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), s.a.createElement(N, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var w = k;
			const S = e => {
				const t = e.url && Object(u.h)(u.f, e.url);
				return t ? t.url : e.url
			};
			var I = e => e.menuItem.url ? s.a.createElement(_, {
					href: S(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : s.a.createElement(w, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => s.a.createElement(j, {
					key: `${e.text}-${S(e)}`,
					role: "listitem",
					href: S(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				P = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/actions/subreddit.ts"),
				L = n("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js"), A = Object(a.c)({
				isActive: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Boolean(e.subreddits.appliedFilters.meta[n])
				},
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(P.W)(e, {
						subredditId: n
					})
				}
			});
			var M = Object(o.b)(A, (e, t) => ({
					onActivate: () => e(Object(T.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))(e => {
					let {
						subreddit: t,
						isActive: n,
						onActivate: r
					} = e;
					const o = Object(L.a)();
					return t ? s.a.createElement(O, {
						className: x.a.metaNavLink,
						to: t.url,
						isActive: n,
						onClick: e => {
							Object(c.H)(o) && !Object(c.P)(o) && e.preventDefault(), r()
						}
					}, B._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				R = n("./src/reddit/actions/economics/predictions/index.ts"),
				D = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				F = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				U = n("./src/reddit/helpers/trackers/predictions.ts"),
				W = n("./src/reddit/hooks/useTracking.ts"),
				H = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(o.d)(),
					a = Object(L.a)(),
					i = Object(W.a)(),
					c = Object(F.Q)(a),
					[d, l] = Object(r.useState)(!1),
					u = Object(o.e)(e => Object(P.W)(e, {
						subredditId: t
					})),
					m = Object(o.e)(e => Object(P.Q)(e, {
						subredditId: t
					})),
					p = Object(o.e)(e => Object(H.d)(e, {
						subredditId: t
					})),
					b = Object(o.e)(e => Object(H.e)(e, {
						subredditId: t
					}));
				Object(D.a)(t);
				return Object(r.useEffect)(() => {
					!m || d || p || c || (n(Object(R.m)(u.name)), l(!0))
				}, [m, d, p, c, n, u.name]), m && p ? s.a.createElement(O, {
					className: x.a.predictionsFilter,
					isActive: c,
					onClick: () => {
						n(Object(T.p)({
							subredditId: t,
							forceState: !1
						})), i(Object(U.i)())
					},
					to: `${u.url}predictions/`
				}, V._("Predictions", null, {
					hk: "Cv5GC"
				}), b && s.a.createElement("span", {
					className: x.a.liveIcon
				}, V._("Live", null, {
					hk: "1o89m4"
				}))) : null
			};
			var q = n("./src/lib/constants/index.ts");
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const z = Object(c.u)(),
				J = [q.Qb.SUBREDDIT, q.Qb.COMMENTS, q.Qb.COLLECTION_COMMENTS],
				Q = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && J.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(c.P)(t.pageLayer)
				});
			var Z = z(Object(o.b)(Q, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(T.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: n,
						isPostsRoute: r,
						isPredictionsPage: o,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: i
					} = e, c = r && !n && !o;
					return s.a.createElement(_, {
						to: t,
						isActive: c,
						isTopBannerVariant: a,
						onClick: e => {
							n && (e.preventDefault(), i())
						}
					}, K._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				Y = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				X = n("./src/higherOrderComponents/makeAsync.tsx");
			var $ = Object(X.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("HarbergerTaxBannerPurchaseCTA").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				ee = n("./src/reddit/constants/postLayout.ts"),
				te = n("./src/reddit/constants/screenWidths.ts"),
				ne = n("./src/reddit/models/Theme/index.ts"),
				re = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const se = Object(Y.a)(e => {
				let {
					className: t,
					children: n,
					isTopBannerVariant: r,
					...o
				} = e;
				const a = Object(re.a)(o);
				return s.a.createElement("div", {
					className: Object(p.a)(x.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !r ? "relative" : "static",
						...a.navBar.useOverlay && !r ? {
							marginTop: -26
						} : {},
						background: r ? "inherit" : Object(ne.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, n)
			});
			var oe = e => s.a.createElement(se, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, s.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === ee.g.Large ? `${e.maxWidth||te.a}px` : "100%"
					}
				}, s.a.createElement("div", null, e.children), s.a.createElement($, null))),
				ae = n("./src/reddit/constants/wiki.ts"),
				ie = n("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: ce
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var de = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: n,
					pageLayer: r
				} = e, o = !!r && !!r.meta && r.meta.name === q.Qb.SUBREDDIT_WIKI, a = `wiki/${ae.i}`, i = t.endsWith("/") ? t + a : `${t}/${a}`;
				return s.a.createElement(_, {
					isActive: o,
					isTopBannerVariant: n,
					to: i,
					onClick: () => e.sendEvent(Object(ie.g)())
				}, ce._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const le = Object(d.a)("spPolls", M),
				ue = Object(c.u)(),
				me = Object(a.c)({
					layout: c.S,
					widget: l.f
				}),
				pe = Object(o.b)(me);
			t.a = ue(pe(Object(i.c)(e => s.a.createElement(oe, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && s.a.createElement(s.a.Fragment, null, s.a.createElement(Z, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), s.a.createElement(le, {
				subredditId: e.subredditId
			}), s.a.createElement(G, {
				subredditId: e.subredditId
			})), e.widget && s.a.createElement(s.a.Fragment, null, e.widget.showWiki && s.a.createElement(de, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, n) => s.a.createElement(I, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: n,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(r.a)({
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/isEqual.js"),
				o = n.n(s),
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
				E = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = n("./src/reddit/components/ModProgressModule/async.tsx"),
				_ = n("./src/reddit/components/PowerupsSidebar/index.tsx"),
				O = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				j = n("./src/reddit/components/SidebarContainer/index.tsx"),
				C = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				N = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				k = n("./src/lib/makeListingKey/index.ts"),
				w = n("./src/reddit/actions/subreddit.ts"),
				S = n("./src/lib/classNames/index.ts"),
				I = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				P = n("./src/reddit/controls/Button/index.tsx"),
				T = n("./src/reddit/helpers/name/index.ts"),
				L = n("./src/reddit/helpers/overlay/index.ts"),
				B = n("./src/reddit/selectors/experiments/topPosts.ts"),
				A = n("./src/reddit/selectors/posts.ts"),
				M = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const R = .99;
			class D extends i.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= R && t(n)
					}
				}
				render() {
					return i.a.createElement(M.a, {
						threshold: R,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var F = D,
				U = n("./src/lib/isUrl/index.ts"),
				W = n("./src/lib/prettyPrintNumber/index.ts"),
				H = n("./src/reddit/components/FlairWrapper/index.tsx"),
				V = n("./src/reddit/components/Thumbnail/index.tsx"),
				G = n("./src/reddit/models/Flair/index.ts"),
				q = n("./src/reddit/models/Subreddit/index.ts"),
				K = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				z = n.n(K);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Q = e => e.type === G.f.Nsfw || e.type === G.f.Spoiler, Z = Object(d.c)({
				post: A.G,
				subredditOrProfile: A.V
			});
			class Y extends i.a.PureComponent {
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
						showSubredditName: r,
						subredditOrProfile: s
					} = this.props, o = {
						post: t
					}, a = Object(U.a)(Object(V.b)(o)), c = t.flair.filter(Q);
					return i.a.createElement("div", {
						className: Object(S.a)(z.a.container, e, {
							[z.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, i.a.createElement("div", {
						className: z.a.mainLine
					}, a && i.a.createElement("div", {
						className: z.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, i.a.createElement(V.a, o)), i.a.createElement("div", {
						className: Object(S.a)(z.a.title, !a && z.a.titleSingle),
						title: t.title
					}, c.length > 0 && i.a.createElement(H.a, {
						className: z.a.flair,
						titleFlair: c,
						nowrap: !0,
						post: t
					}), t.title)), i.a.createElement("div", {
						className: z.a.metaLine
					}, r && !!s && i.a.createElement("span", {
						className: z.a.meta
					}, Object(q.h)(s) ? Object(T.e)(s.displayText || s.name) : Object(T.d)(s.displayText || s.name)), i.a.createElement("span", {
						className: z.a.meta
					}, J._({
						"*": "{score} points",
						_1: "1 point"
					}, [J._plural(t.score, "score", Object(W.b)(t.score))], {
						hk: "1JZ0qm"
					})), i.a.createElement("span", {
						className: z.a.meta
					}, J._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [J._plural(t.numComments, "numComments", Object(W.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var X = Object(c.b)(Z, e => ({
					openLightbox: t => e(Object(L.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Y),
				$ = n("./src/reddit/components/SidebarPostList/index.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = 10, re = 2, se = Object(d.a)(A.N, e => e.filter(e => !e.isSponsored)), oe = Object(d.c)({
				posts: (e, t) => se(e, {
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
						} = this.props, [r] = n;
						r && (t(r), e && e(r.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || ne, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((n, r) => (e = Math.ceil(r.posts.length / t), {
							chunkIdx: n.chunkIdx < e - 1 ? n.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: n,
							onPostVisible: r,
							redditStyle: s,
							smallPostClassName: o
						} = this.props;
						return i.a.createElement(F, {
							key: e.id,
							onPostVisible: r,
							postId: e.id
						}, i.a.createElement(X, {
							className: Object(S.a)(ee.a.smallPost, o),
							containerOnClick: n,
							postId: e.id,
							redditStyle: s,
							showSubredditName: Object(g.a)(Object(T.i)(t)),
							thumbnailOnClick: n
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: n,
						moreButtonText: r,
						onPostVisible: s,
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
						v = b ? h.slice(0, re) : x.slice(0, re),
						E = b ? h.slice(re) : x.slice(re);
					return i.a.createElement("div", {
						className: Object(S.a)(ee.a.container, t, {
							[ee.a.redditStyle]: a
						})
					}, !b && i.a.createElement(F, {
						onPostVisible: s,
						postId: f.id
					}, i.a.createElement(I.a, {
						postId: f.id,
						backgroundWrapperClassName: ee.a.largePostBackgroundWrapper,
						descriptionClassName: ee.a.largePostDescription,
						innerContainerClassName: ee.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(T.i)(n)),
						trendingPost: f
					})), v.map(this.renderSmallPost), e, E.map(this.renderSmallPost), c && i.a.createElement(P.r, {
						className: ee.a.SeeMore,
						onClick: this.showMorePosts
					}, r || te._("See More", null, {
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
				ge = Object(d.a)((e, t) => t.subredditName, e => Object(k.a)(e, l.Z.TOP, {
					t: l.mc.WEEK
				})),
				xe = Object(d.c)({
					discoveryUnit: e => Object(me.b)(e, {
						unitName: ue.i
					}),
					listingKey: ge,
					posts: (e, t) => {
						const n = ge(e, t);
						return Object(A.N)(e, {
							listingKey: n
						})
					},
					subreddit: pe.A
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
						loadMorePosts: s,
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
						title: r.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, i.a.createElement(ie, {
						listingKey: n,
						listingName: d,
						onShowMoreClick: s,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: he.a.smallPost,
						showMoreButton: l,
						topPostsVariant: c
					}, i.a.createElement("div", null, e)))
				}
			}
			var Ee = Object(c.b)(xe, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						loadMorePosts: () => e(Object(w.r)({
							sort: l.Z.TOP,
							subredditName: n,
							t: l.mc.WEEK
						}))
					}
				})(Object(ce.c)(ve)),
				ye = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				_e = n("./src/reddit/constants/tracking.ts"),
				Oe = n("./src/reddit/selectors/seo/linksModule.ts"),
				je = n("./src/reddit/selectors/telemetry.ts"),
				Ce = n("./src/telemetry/models/Subreddit.ts");
			const Ne = e => t => ({
					...je.o(t),
					action: _e.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				ke = e => t => n => ({
					...je.o(n),
					action: _e.c.CLICK,
					noun: Object(Ce.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				we = Object(d.c)({
					communities: Oe.c
				});
			var Se = Object(c.b)(we)(e => {
					const t = Object(ce.b)();
					return e.communities && e.communities.length ? i.a.createElement(C.a, null, i.a.createElement(ye.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: Ne,
						getSubscribeEventFactoryHandler: ke,
						sendEvent: t,
						title: r.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				Ie = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				Pe = n("./src/reddit/constants/experiments.ts"),
				Te = n("./src/reddit/featureFlags/index.ts"),
				Le = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				Be = n("./src/reddit/models/Widgets/index.ts"),
				Ae = n("./src/reddit/selectors/communityFlairs.ts"),
				Me = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Re = n("./src/reddit/selectors/listings.ts"),
				De = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				Fe = n.n(De);
			const Ue = 250,
				We = 270,
				He = u.a.wrapped(j.a, "SidebarContainer", Fe.a),
				Ve = Object(d.c)({
					apiError: Re.c,
					apiPending: Re.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(Ae.b)(e, n)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(Ae.c)(e, n)
					},
					isInNewModuleNCPV3Experiment: e => Object(Me.a)(e) === Pe.Me.NewModule,
					showGovernance: Te.d.spPoints,
					showLeaderboard: Te.d.spLeaderboard,
					showPredictionsLeaderboard: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(pe.P)(e, {
							subredditId: n
						}) && !Object(pe.Q)(e, {
							subredditId: n
						})
					},
					widgets: pe.v
				}),
				Ge = Object(c.b)(Ve);
			class qe extends a.Component {
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
							shortName: r.fbt._("Related Communities", null, {
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
							shortName: r.fbt._("Filter by flair", null, {
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
						showGovernance: r,
						showLeaderboard: s,
						showPredictionsLeaderboard: o,
						subredditId: a,
						subredditName: c,
						topPostsVariant: d
					} = this.props;
					let u = 0;
					const g = Object(B.a)(d),
						x = Object(B.b)(d),
						j = Object(B.c)(d),
						k = g || x;
					let w, S;
					!!this.getPostFlairWidget() ? w = this.props.widgets : (w = this.getCommunityWidgets(), S = this.makeFlairFilterWidget());
					const I = this.makeRelatedCommunitiesWidget(g, x),
						P = !g,
						T = x,
						L = i.a.createElement(O.a, {
							placement: l.d.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Le.a.FIRST,
							sizes: l.i
						});
					return i.a.createElement(He, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, n && i.a.createElement(y.a, {
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
					}), k && i.a.createElement(C.a, null, i.a.createElement(Ee, {
						subredditName: c,
						topPostsVariant: d
					}, i.a.createElement("div", {
						className: Fe.a.inFeedAd
					}, L))), k && I && i.a.createElement(C.a, null, i.a.createElement(Ie.a, {
						subredditName: c,
						truncateThreshold: We,
						widget: I
					})), T && w.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return i.a.createElement(C.a, {
							key: `widgetSpacer${t}`
						}, i.a.createElement(Ie.a, {
							subredditName: c,
							truncateThreshold: Ue,
							widget: e
						}))
					}), r && i.a.createElement(b.a, {
						className: Fe.a.card,
						subredditId: a
					}), S && i.a.createElement(C.a, null, i.a.createElement(Ie.a, {
						subredditName: c,
						widget: S
					})), s && i.a.createElement(h.a, {
						className: Fe.a.card,
						subredditId: a,
						uniqueId: a
					}), i.a.createElement(E.g, {
						subredditId: a
					}), !k && L, i.a.createElement(Se, {
						subredditId: a
					}), P && !T && w.map((e, t) => {
						const n = "community-list" === e.kind;
						return i.a.createElement(C.a, {
							key: `widgetSpacer${t}`
						}, i.a.createElement(Ie.a, {
							subredditName: c,
							truncateThreshold: j && n ? We : j ? Ue : void 0,
							widget: e
						}))
					}), i.a.createElement(N.a, {
						adComponent: i.a.createElement(O.a, {
							placement: l.d.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Le.a.BOTTOM,
							sizes: l.p
						})
					}))
				}
			}
			t.a = Ge(qe)
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : a.c.Plain,
				p = e => {
					let {
						border: t,
						priority: n,
						small: r,
						...s
					} = e;
					return o.a.createElement(a.t, u({}, s, {
						priority: m(a.c.Primary, t, n),
						className: Object(l.a)(s.className, d.a.BaseButton),
						size: r ? a.d.S : a.d.M
					}))
				},
				b = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = e => {
					let {
						buttonType: t,
						border: n,
						priority: r,
						small: s,
						...i
					} = e;
					return o.a.createElement(a.t, u({}, i, {
						priority: m(a.c.Secondary, n, r),
						className: Object(l.a)(i.className, d.a.BaseButton),
						size: s ? a.d.S : a.d.M,
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
						priority: r,
						small: s = !1,
						isFullWidth: a = !1,
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: s,
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = e => {
					let {
						type: t,
						key: n
					} = e;
					return o[s({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(r.c)(o.a))
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
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
			t.a = s
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : s.a.createElement(i.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/AdViewability/index.tsx"),
				a = n("./src/reddit/components/BlankPost/index.tsx"),
				i = n("./src/reddit/connectors/PostViewable/index.ts");
			const c = Object(i.a)(null);
			class d extends s.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? s.a.createElement(a.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: n
					}) : s.a.createElement(o.a, {
						post: t,
						trackDisplay: !0
					}, e)
				}
			}
			t.a = c(d)
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
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
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
			const E = "nsfw_dialog";
			var y = e => a.a.createElement("svg", {
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
				j = n.n(O);
			const C = {
					d2x_nsfw_signup_blocking_de_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				N = e => {
					const t = Object(i.d)(),
						n = Object(h.b)(),
						r = Object(i.e)(_.f),
						u = Object(o.useCallback)(() => {
							r === _.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, r]),
						b = (e => e ? a.a.createElement("div", {
							className: j.a.cta
						}, s.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), a.a.createElement("br", null), s.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : a.a.createElement("div", {
							className: j.a.cta
						}, s.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(r === _.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(x.c)(r)
					}, [r]), a.a.createElement("div", {
						className: Object(l.a)(j.a.mainCta)
					}, a.a.createElement(y, null), b, a.a.createElement("div", {
						className: j.a.contentTitle
					}, e.contentTitle), a.a.createElement("div", {
						className: j.a.warning
					}, (() => s.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), a.a.createElement("div", {
						className: j.a.buttonContainer
					}, a.a.createElement(g.j, {
						className: Object(l.a)(j.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(v.o)(e),
								source: "xpromo",
								action: "click",
								noun: E
							}))()), u(), Object(x.b)(x.a.Login), t(Object(m.openLoginModal)())
						}
					}, (() => s.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), a.a.createElement(g.j, {
						className: j.a.cancel,
						onClick: () => {
							Object(d.b)(), n((() => e => ({
								...Object(v.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: E
							}))()), Object(x.b)(x.a.Dismiss), t(Object(c.b)("/"))
						}
					}, (() => s.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				k = Object(u.a)(e => {
					const t = `${r.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return a.a.createElement("div", {
						className: j.a.qrCodeOuter
					}, a.a.createElement("div", {
						className: j.a.qrCodeInner
					}, a.a.createElement("img", {
						className: j.a.qrCode,
						alt: s.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), a.a.createElement("div", {
						className: j.a.copyLine1
					}, (() => s.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), a.a.createElement("div", {
						className: j.a.copyLine2
					}, (() => s.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), a.a.createElement("img", {
						className: j.a.sneakySnoo,
						src: t
					})))
				}),
				w = e => {
					const t = Object(h.b)();
					a.a.useEffect(() => {
						t((() => e => ({
							...Object(v.o)(e),
							source: "xpromo",
							action: "view",
							noun: E
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, r = Object(i.e)(_.g), s = Object(i.e)(_.h), o = Object(i.e)(_.f), c = o === _.a.Blurred ? b.a.White : o === _.a.NoPreview ? b.a.Grey : void 0;
					return a.a.createElement("div", {
						className: j.a.container
					}, a.a.createElement(N, {
						contentTitle: n
					}), a.a.createElement("div", {
						className: Object(l.a)(j.a.footerWrapper, {
							[j.a.mIsModal]: o === _.a.Blurred
						})
					}, a.a.createElement(b.b, {
						textColor: c
					})), a.a.createElement(k, {
						qrCodeAsset: (() => r === f.Pc.Enabled || s === f.ub.BlurredPreview || s === f.ub.NoPreview ? C.d2x_nsfw_signup_blocking_de_v1 : C.d2x_nsfw_signup_blocking_non_us_v1)()
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
				return I
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "d", (function() {
				return L
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, n) => r => {
				const s = e(r),
					a = t(r),
					i = !s && a;
				return Object(o.a)(n.baseClassName, r.className, {
					[n.mIsInteractive]: a,
					[n.mIsActive]: s,
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
			var h = e => s.a.createElement(c.a, {
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
				E = e => {
					let {
						voteState: t
					} = e;
					return t === d.a.upvoted
				},
				y = i(E, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, v);
			var _ = e => s.a.createElement(f.b, {
					className: y(e),
					compact: e.compact,
					isFilled: E(e)
				}),
				O = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				j = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				k = n.n(N);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => Object(o.a)({
					[k.a.compact]: e.compact,
					[k.a.dark]: Object(j.b)(Object(O.a)(e)),
					[k.a.nightmode]: e.isNightMode
				}),
				I = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(C.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: r,
						isNightMode: a,
						voteState: i,
						compact: c,
						...l
					} = e;
					return s.a.createElement("button", w({}, l, {
						className: Object(o.a)(k.a.customDownvote, S(e), {
							[k.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				P = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(C.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: r,
						isNightMode: a,
						voteState: i,
						compact: c,
						...l
					} = e;
					return s.a.createElement("button", w({}, l, {
						className: Object(o.a)(k.a.customUpvote, S(e), {
							[k.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				T = h,
				L = _
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i);
			const d = o.a.div("WidgetBackground", c.a),
				l = o.a.wrapped(e => {
					let {
						children: t,
						...n
					} = e;
					return s.a.createElement("div", n, s.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return N
			})), n.d(t, "a", (function() {
				return w
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(a.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				E = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				O = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				j = n.n(O);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => o.a.createElement(b.a, {
					className: Object(d.a)(j.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, o.a.createElement("div", {
					className: j.a.container
				}, e.isLoading ? o.a.createElement(g.a, {
					className: j.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: j.a.errorMsg
				}, e.errorMsg || r.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(w, C({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(f.t, {
					className: j.a.bottomButton,
					kind: f.b.Button,
					priority: f.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				k = Object(c.c)({
					hideNSFWPref: y.F,
					nightmode: y.db
				}),
				w = Object(a.b)(k)(e => o.a.createElement("div", {
					className: Object(d.a)(j.a.communityItemContainer, {
						[j.a.withBottomFlair]: e.isNSFW
					})
				}, o.a.createElement(v.a, {
					className: j.a.communityItemExpandCenter,
					widthRight: h.s
				}, o.a.createElement("div", {
					className: j.a.iconContainer
				}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
					className: j.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : o.a.createElement(x.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(j.a.defaultCommunityIcon, {
						[j.a.mNightmode]: e.nightmode
					})
				})), o.a.createElement("div", {
					className: j.a.communityDescriptionContainer
				}, o.a.createElement(i.a, {
					className: j.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(_.b)(e.name, e.type),
					to: Object(_.a)(e.name, e.type)
				}, Object(_.b)(e.name, e.type)), o.a.createElement("div", {
					className: j.a.communityInfoContainer
				}, !!e.subscribers && o.a.createElement("p", {
					className: j.a.subscriberCount
				}, r.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [r.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && o.a.createElement(l.b, {
					className: j.a.nsfwFlair,
					flair: {
						type: E.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(g.a, {
					className: Object(d.a)(j.a.communityCta, j.a.smallLoadingIcon),
					sizePx: 12
				}) : o.a.createElement(f.t, {
					className: j.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? o.a.createElement(p, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : o.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && o.a.createElement("p", {
					title: e.description,
					className: j.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/name/index.ts");

			function o(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === r.a.PROFILE ? Object(s.e)(e) : Object(s.d)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, n) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, n) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, n) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				HelpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				helpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				UnModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				unModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				ExternalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				externalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				MessageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				messageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				MessageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF",
				messageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/fastdom/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/correlationIdTracker.ts"),
				x = n("./src/reddit/helpers/flair.ts"),
				v = n("./src/reddit/helpers/trackers/postFlair.ts"),
				E = n("./src/reddit/models/Widgets/index.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				O = n.n(_);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = 129,
				N = Object(h.u)({
					filterName: e => Object(h.X)(e)[b.e],
					url: e => Object(h.db)(e)
				}),
				k = Object(i.c)({
					subredditId: (e, t) => Object(y.G)(e, t.subredditName)
				}),
				w = Object(a.b)(k),
				S = l.a.div("WidgetContent", O.a),
				I = e => {
					let {
						display: t,
						isFlairFilter: n,
						onMouseDown: r,
						onClick: s,
						...a
					} = e;
					return o.a.createElement("li", {
						className: Object(c.a)(O.a.StyledFlair, t === E.g.Cloud && O.a.cloudDisplay, {
							[O.a.flairFilter]: n,
							[O.a["m-selected"]]: a.isSelected
						}),
						onClick: () => null == s ? void 0 : s(Object(x.g)(a.flair)),
						onMouseDown: r
					}, o.a.createElement(u.b, j({}, a, {
						className: O.a.Flair,
						isFlairFilter: n,
						forceSmallEmojis: !0
					})))
				};
			class P extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(v.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(v.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(v.d)())
					}, this.onClickFlair = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(g.d)(g.a.SearchResults), this.props.sendEvent(Object(v.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > C && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return o.a.createElement(f.r, {
						className: O.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? r.fbt._("See more", null, {
						hk: "2fWFes"
					}) : r.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return o.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => o.a.createElement(I, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onClick: this.onClickFlair,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, n = t ? C : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: O.a.flairFilterContainer,
						style: {
							maxHeight: n
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return o.a.createElement("ul", null, o.a.createElement(I, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: n
					} = this.state, r = t.order, s = this.getFlairsFromIds(r), a = e && this.getSelectedFlair(s) || void 0, i = t.order.length > r.length || n && !a;
					return o.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(S, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(s), i && this.renderButton()))
				}
			}
			t.a = N(w(Object(m.c)(P)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				cleanStyle: "_12zeaxHNQC7XniG1qunPev",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/helpers/dom/index.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = n("./src/reddit/models/Widgets/index.ts"),
				h = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				f = n.n(h);
			const g = c.a.div("RuleShortName", f.a),
				x = c.a.div("RuleIndex", f.a),
				v = c.a.div("RuleTitle", f.a),
				E = c.a.div("RuleDescription", f.a),
				y = c.a.wrapped(d.a, "RawHTMLDisplay", f.a),
				_ = {};
			class O extends o.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(u.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === b.h.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: r
					} = this, s = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !r(e) && !!s;
					return o.a.createElement(g, {
						className: Object(i.a)({
							[f.a.pointerCursor]: a,
							[f.a.cleanStyle]: e.cleanStyle
						}),
						onClick: r(e) || !s ? void 0 : n
					}, o.a.createElement(p.a, null, o.a.createElement(x, {
						className: Object(i.a)({
							[f.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), o.a.createElement(v, null, `${e.rule.shortName}`), o.a.createElement("div", null, !r(e) && s && o.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && o.a.createElement(E, {
						className: Object(i.a)({
							[f.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? o.a.createElement(l.b, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: _
					}) : e.rule.descriptionHtml ? o.a.createElement(y, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const j = e => e.rules.length > 0 ? o.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: r.fbt._("{subredditName} Rules", [r.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return o.a.createElement(O, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => o.a.createElement(j, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Re
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/linkMatchers/index.ts"),
				b = n("./src/reddit/helpers/widgets/index.tsx"),
				h = n("./src/reddit/models/Image/index.tsx"),
				f = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				E = n("./src/telemetry/models/Outbound.ts"),
				y = n("./src/reddit/components/Widgets/Button/index.m.less"),
				_ = n.n(y);
			const O = (e, t, n) => {
					let r = {},
						s = {};
					r = e.kind === g.k.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, n) => {
						let {
							color: r,
							fillColor: s,
							textColor: o
						} = e;
						return t && (r = o = n, s = "transparent"), {
							"--widget-button-background-color": `${s||"transparent"}`,
							"--widget-button-border": `1px solid ${r}`,
							"--widget-button-color": `${o||r}`
						}
					})(e, t, n);
					const o = e.hoverState || e;
					if (o.kind === g.k.Image) s = {
						"--widget-button-hover-background-image": `url('${o.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: r,
							textColor: a
						} = o;
						t && (e = a = n, r = "transparent"), s = {
							"--widget-button-hover-background-color": `${r||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${a||e}`
						}
					}
					return {
						...r,
						...s
					}
				},
				j = e => e.kind === g.k.Image ? _.a.imageButton : _.a.textButton,
				C = e => {
					const t = Object(b.h)(e),
						n = Object(p.h)(p.f, t);
					return n ? n.url : e.url
				},
				N = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: n
					} = e, r = Object(f.a)(e).button;
					return s.a.createElement(d.t, {
						className: j(t),
						style: O(t, n, r),
						isFullWidth: !0,
						size: d.d.S,
						priority: d.c.Secondary
					}, t.kind === g.k.Text && s.a.createElement("span", {
						className: t.hoverState ? _.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.k.Text && s.a.createElement("span", {
						className: _.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				k = e => s.a.createElement(l.b, {
					href: C(e.button),
					sourceElement: E.SourceElement.SidebarWidget
				}, s.a.createElement(N, e)),
				w = m.a.wrapped(i.a, "RawHTMLDisplay", _.a);
			var S = Object(o.b)(() => Object(a.c)({
					forceRedditStyle: x.l,
					isNightmodeOn: v.db
				}))(e => s.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && s.a.createElement(w, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.k.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== g.k.Image || e.hoverState.url !== h.c)).map(t => s.a.createElement(k, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				I = n("./node_modules/fbt/lib/FbtPublic.js"),
				P = n("./src/reddit/components/HumanDate/index.tsx"),
				T = n("./src/reddit/controls/TextButton/index.tsx"),
				L = n("./src/reddit/components/Widgets/Calendar/index.m.less"),
				B = n.n(L);
			const A = 100,
				M = {
					isExpanded: !1
				},
				R = m.a.wrapped(i.a, "RawHTMLDisplay", B.a),
				D = m.a.div("EventContainer", B.a),
				F = m.a.div("EventTitle", B.a),
				U = m.a.div("EventDate", B.a),
				W = m.a.div("EventLocation", B.a),
				H = m.a.div("EventDescription", B.a),
				V = m.a.wrapped(T.a, "ToggleDescription", B.a);
			class G extends s.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = M
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > A ? s.a.createElement(H, null, t.isExpanded ? e.text : e.text.slice(0, A), s.a.createElement(V, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? I.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : I.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : s.a.createElement(H, null, e.text)
				}
			}
			var q = e => s.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, n) => s.a.createElement(D, {
					key: `${n}-${t.title}`
				}, s.a.createElement(F, null, t.titleHtml ? s.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && s.a.createElement(U, null, s.a.createElement(P.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && s.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						n = t.getHours(),
						r = t.getMinutes();
					return r < 10 ? `${n}:0${r}` : `${n}:${r}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && s.a.createElement(W, null, t.locationHtml ? s.a.createElement(R, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && s.a.createElement(G, {
					text: t.description
				})))),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				z = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var J = Object(K.c)(e => s.a.createElement(z.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Q = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				Z = Object(o.b)(Q),
				Y = (e, t, n) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${n}</body>`;
			class X extends s.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				UNSAFE_componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Y(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement(c.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, s.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var $ = Z(X),
				ee = n("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				te = n.n(ee);
			var ne = m.a.div("ImageFrame", te.a),
				re = n("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				se = n.n(re);
			var oe = m.a.img("StyledImage", se.a);
			class ae extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === h.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== h.c) return t
					}
					return t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						props: t,
						state: n
					} = this;
					e.subredditName === t.subredditName && e.widget.data[n.imageIndex] && e.widget.data[n.imageIndex] === t.widget.data[n.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const n = e.widget.data[t.imageIndex],
						r = s.a.createElement(ne, null, s.a.createElement(oe, {
							alt: I.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: n.url
						}));
					return n.linkUrl ? s.a.createElement(l.b, {
						href: n.linkUrl
					}, r) : r
				}
			}
			var ie = ae,
				ce = n("./src/config.ts"),
				de = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				le = n("./src/lib/opener/index.ts"),
				ue = n("./src/reddit/components/Flair/index.tsx"),
				me = n("./src/reddit/controls/InternalLink/index.tsx"),
				pe = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				be = n("./src/reddit/models/Flair/index.ts"),
				he = n("./src/reddit/selectors/subreddit.ts"),
				fe = n("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ge = n.n(fe);
			const xe = m.a.a("ExternalLink", ge.a),
				ve = m.a.div("ModeratorListItem", ge.a),
				Ee = m.a.div("Username", ge.a),
				ye = m.a.wrapped(ue.b, "FlairComponent", ge.a),
				_e = e => e.authorFlairType === be.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				Oe = e => s.a.createElement(Ee, null, `u/${e}`),
				je = m.a.wrapped(me.default, "InternalLink", ge.a),
				Ce = m.a.div("LinkContainer", ge.a),
				Ne = Object(a.c)({
					userIsBanned: he.gb,
					userIsLoggedIn: v.Q
				});
			var ke = Object(o.b)(Ne)(e => {
					const {
						subredditName: t,
						widget: n,
						userIsBanned: r,
						userIsLoggedIn: o
					} = e;
					return s.a.createElement(c.a, {
						styles: n.styles,
						title: I.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (n.mods && n.mods.length || r) && s.a.createElement(d.t, {
						kind: d.b.InternalLink,
						priority: d.c.Secondary,
						className: ge.a.MessageModsButton,
						rel: le.c,
						target: le.d.BLANK,
						to: `${ce.a.redditUrl}/message/compose?to=/r/${t}`
					}, s.a.createElement(pe.a, {
						className: ge.a.MessageModsButtonIcon
					}), I.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), n.mods && n.mods.length && !r ? s.a.createElement(s.a.Fragment, null, n.mods.map(e => s.a.createElement(ve, {
						key: e.name
					}, (e => s.a.createElement(de.a, {
						to: `/user/${e.name}/`
					}, Oe(e.name)))(e), s.a.createElement(ye, {
						flair: _e(e),
						forceSmallEmojis: !0
					}))), s.a.createElement(Ce, null, s.a.createElement(je, {
						to: `/r/${t}/about/moderators/`
					}, I.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : r || !o ? s.a.createElement("div", {
						className: ge.a.HelpCenterMessage
					}, I.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", s.a.createElement(xe, {
						href: `${ce.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : s.a.createElement("div", {
						className: ge.a.UnModeratedSubreddit
					}, I.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", s.a.createElement(xe, {
						href: `${ce.a.redditUrl}/r/redditrequest`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", I.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				we = n("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Se = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ie = n("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Pe = n.n(Ie);
			const Te = m.a.div("WidgetContent", Pe.a),
				Le = m.a.wrapped(i.a, "RawHTMLDisplay", Pe.a);
			var Be = e => s.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, s.a.createElement(Te, null, s.a.createElement(Le, {
					html: e.widget.textHtml || ""
				}))),
				Ae = n("./src/reddit/components/Widgets/Base/index.tsx");
			var Me = e => s.a.createElement(Ae.b, null, "This widget hasn't been implemented yet!");

			function Re(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return ke;
						case "textarea":
							return Be;
						case "button":
							return S;
						case "subreddit-rules":
							return Se.b;
						case "community-list":
							return J;
						case "calendar":
							return q;
						case "image":
							return ie;
						case "custom":
							return $;
						case "post-flair":
							return we.a;
						default:
							return Me
					}
				}(e.widget);
				return s.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "b", (function() {
				return k
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
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
				E = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
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
			const j = O(),
				C = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.S)(e, t),
					loadMore: v.g,
					postsById: E.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: s
						} = t;
						return Object(E.D)(e, n, r, s)
					}),
					subredditsById: y.db,
					viewportDataLoaded: _.a,
					pageReferrer: p.V,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: x.e
				},
				N = Object(s.c)(C),
				k = e => ({
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
					trackOnPostEnteredViewport: (t, n, r, s) => {
						e(d.O(t, r, s))
					},
					trackOnPostExitedViewport: (t, n, r, s) => {
						e(d.P(t, r, s))
					},
					showModalOnScroll: () => e(d.cb()),
					surveyTriggerScrollCounted: () => e(Object(u.l)())
				}),
				w = e => Object(b.b)({
					...e
				}),
				S = (e, t, n, r) => {
					const {
						listingKey: s,
						hostPostData: o,
						listingBelowVariant: a
					} = r;
					return Object(h.k)(e, t, "post", s, o, a, void 0)
				},
				I = Object(r.b)(N, k, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: w,
					postClickEventFactory: S
				}));
			t.a = e => Object(m.c)(j(I(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: a.ib
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(o.d([n], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([n], !1))
				}
			})
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(s.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(r.b)(d, (e, t) => {
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
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
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
			const h = Object(r.b)(() => Object(s.c)({
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
							previewFlair: r,
							selectedTemplateId: s
						} = t;
						return e(Object(a.h)({
							post: n,
							previewFlair: r,
							selectedTemplateId: s
						}))
					},
					handleVote: t => {
						const r = t === c.a.upvoted ? Object(o.kb)(n) : Object(o.w)(n);
						e(r)
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
						previewFlair: r,
						selectedTemplateId: s
					} = e;
					return t.dispatchFlairChanged({
						post: n.post,
						previewFlair: r,
						selectedTemplateId: s
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/constants/banners.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner", e.AWARDED_LISTING_BANNER = "awarded_listing_banner", e.AVATAR_LISTING_BANNER = "avatar_listing_banner"
				}(r || (r = {}))
		},
		"./src/reddit/constants/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var r;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(r || (r = {}));
			var s, o;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(s || (s = {})),
			function(e) {
				e.NEVER_SHOWN = "never_shown", e.IS_SHOWING = "is_showing", e.DISMISSED = "dismissed"
			}(o || (o = {}));
			const a = {
				[o.NEVER_SHOWN]: [o.IS_SHOWING, o.DISMISSED],
				[o.IS_SHOWING]: [o.DISMISSED],
				[o.DISMISSED]: []
			}
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
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
				return E
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "o", (function() {
				return j
			}));
			const r = 284,
				s = 450,
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
				E = 1250,
				y = 82,
				_ = 48,
				O = 36,
				j = 40
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			}));
			const r = "reddit",
				s = "reddit.ready",
				o = "reddit.urlChanged"
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var r, s;
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(r || (r = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(s || (s = {}))
		},
		"./src/reddit/constants/promo.ts": function(e, t, n) {
			"use strict";
			var r, s;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.SignupUpsellCell = "signupUpsellBottomCell", e.SignupUpsellCellDismissible = "signupUpsellBottomCellDismissible", e.SignupUpsellBottomSheet = "signupUpsellBottomSheet"
				}(r || (r = {})),
				function(e) {
					e.Shown = "shown", e.Dismissed = "dismissed", e.Completed = "completed"
				}(s || (s = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = 480,
				s = 960,
				o = 1200
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
				i = Object(r.createContext)(a);

			function c(e) {
				const t = t => s.a.createElement(i.Consumer, null, n => {
					let {
						apiContext: r,
						gqlContext: a,
						gqlRealtime2Context: i
					} = n;
					return s.a.createElement(e, o({
						apiContext: r,
						gqlContext: a,
						gqlRealtime2Context: i
					}, t))
				});
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = s.a.createContext(!1)
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/noop.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js");
			const a = o.createContext({
				showPromo: s.a,
				dismissPromo: s.a,
				completePromo: s.a,
				promos: new Map
			});
			t.a = a
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
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = s()(() => {
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
						onMouseMove: s()(this.handleMouseMove, 500)
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
				const r = Object(i.a)(h.a.row, t, {
					[h.a.mIsInteractive]: !n.noHover,
					[h.a.mIsSelected]: n.isSelected,
					[h.a.topics]: n.isTopicsStyle
				});
				return a.a.createElement(g, f({
					className: r
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
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			class o extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, o = n || r;
					return s.a.createElement("div", {
						className: e.className
					}, n && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!o || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return s.a.createElement("input", u({
						className: Object(a.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: i.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(a);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(i.a.loadingIcon, n, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Search/index.m.less"),
				h = n.n(b);
			const f = Object(o.b)(() => Object(a.c)({
				subredditsByName: Object(c.a)((e, t) => {
					const n = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						n[t.subredditName] = Object(u.A)(e, {
							subredditName: t.subredditName
						})
					}), n
				})
			}))(e => s.a.createElement("div", {
				className: Object(i.a)(p.a.subText, h.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => s.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, s.a.createElement(l.b, {
				className: Object(i.a)(h.a.subredditIcon, h.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : s.a.createElement(l.b, {
				className: Object(i.a)(h.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && s.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, n) {
			e.exports = {
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4"
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, n) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/TextButton/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("button", {
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
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(o);
			t.a = r.a.wrapped(s.default, "unstyledInternalLink", a.a)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r,
						...o
					} = e, a = o;
					return r ? s.a.createElement(t, a) : void 0 !== n ? s.a.createElement(n, a) : null
				})
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
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/sample/index.ts"),
				o = n("./src/telemetry/helpers/sendCounter.ts");
			var a;
			! function(e) {
				e.Dismiss = "dismiss", e.Login = "login", e.Signup = "signup", e.View = "view"
			}(a || (a = {}));
			const i = e => {
					Object(o.b)(r.n.Redesign, {
						type: o.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				c = e => {
					e && Object(s.b)(10) && Object(o.b)(r.n.Redesign, {
						type: o.a.NsfwBlocking,
						data: {
							action: a.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./src/lib/isFakeSubreddit/index.ts"), n("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var r;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(r || (r = {}))
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function s(e) {
				const {
					subreddit: t,
					amount: n,
					memo: r,
					cta: s
				} = e;
				return t && n && r && s ? {
					subreddit: t,
					amount: n,
					memo: r,
					cta: s
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/datadome.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r, s = n("./src/lib/constants/index.ts");
			! function(e) {
				e.Enabled = "datadome-bot-detection.enabled", e.Disabled = "datadome-bot-detection.disabled"
			}(r || (r = {}));
			const o = () => a() ? r.Enabled : r.Disabled,
				a = () => null !== document.getElementById(s.B)
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
			var r = n("./node_modules/lodash/map.js"),
				s = n.n(r),
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
					return s()(t, e => e.textContent || "")
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
						startContainer: r,
						startOffset: s,
						endContainer: o,
						endOffset: a
					} = n, i = document.createRange();
					i.selectNode(e);
					let c = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, n) && (i.setStart(r, s), c = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, n) && (i.setEnd(o, a), c = !1), c) return [e];
					const d = document.createElement("div");
					return d.appendChild(i.cloneContents()), [...d.childNodes]
				},
				m = (e, t, n) => {
					let r = e;
					for (; r && (!n || !n(r));) {
						if (r && t(r)) return r;
						r = r.parentElement
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
			var r = n("./node_modules/lodash/memoize.js"),
				s = n.n(r),
				o = n("./src/reddit/constants/categories.tsx"),
				a = n("./src/config.ts");
			const i = Array.from({
					length: 20
				}).map((e, t) => `${a.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				c = Array.from({
					length: 8
				}).map((e, t) => `${a.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				d = [];
			t.a = s()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return d;
				const r = n ? c : i,
					s = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: o.a[(s + t) % o.a.length],
					image: r[(s + t) % r.length]
				}))
			}), (function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				return `${e}_${t}`
			}))
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let s, o, a, i, c, d, l, u, m, p, b;
				return e ? e.quarantinedSubreddit ? (o = r.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = r.a.PrivateSubreddit, a = e.subredditDescription, l = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? o = r.a.GoldSubreddit : e.subredditBanned ? (o = r.a.SubredditBanned, s = e.subredditBanMessage) : e.subredditDoesNotExist ? o = r.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? o = r.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (o = r.a.GatedSubreddit, m = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, b = e.interstitialWarningMessageRTJson) : t && (o = r.a.Nsfw), o && n ? {
					banMessage: s,
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
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(r.a)(e).banner.iconImage ? String(Object(r.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/brcast/dist/brcast.es.js");
			const s = Object(r.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/env/index.ts"),
				s = n("./src/reddit/helpers/parseUrl.ts");
			const o = ["old", "new", "en", "www", "np", "m"],
				a = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(r.a)() ? [window.location.host] : []].concat("").concat(o.map((function(e) {
					return e + ".reddit.com"
				}))).concat(o.map((function(e) {
					return e + ".reddit.local"
				}))),
				i = ["mod.reddit.com"],
				c = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: a.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e, t) {
				const n = c[e];
				if (!c) throw new Error("Could not find reddit URL spec: " + e);
				const r = Object(s.a)(t);
				if (!r) return void console.error("Could not parse url", t);
				if (-1 === (n.hostnames || a).indexOf(r.hostname)) return;
				const o = r.pathname.match(n.pathname);
				if (o) {
					return {
						url: t,
						routeName: e,
						components: n.pathnameComponents.reduce((function(e, t, n) {
							return e[t] = o[n + 1], e
						}), {})
					}
				}
			}

			function l(e) {
				return (e.match(new RegExp(s.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(c).some((function(n) {
						return t = d(n, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/reddit/models/Prediction/index.ts");
			const s = (e, t) => {
					const n = Date.now(),
						s = n <= e.endsAt,
						o = n <= t.endsAt,
						a = e.status === r.b.Cancelled || e.status === r.b.CancelInProgress;
					return a !== (t.status === r.b.Cancelled || t.status === r.b.CancelInProgress) ? a ? 1 : -1 : s !== o ? s ? -1 : 1 : s && e.selectedOptionId !== t.selectedOptionId ? e.selectedOptionId ? 1 : -1 : !e.resolvedOptionId != !t.resolvedOptionId ? e.resolvedOptionId ? 1 : -1 : s || e.selectedOptionId === t.selectedOptionId ? e.createdAt > t.createdAt ? -1 : 1 : e.selectedOptionId ? -1 : 1
				},
				o = (e, t) => s({
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
					var n, r;
					const {
						pollData: o
					} = e, {
						pollData: a
					} = t;
					return o && a ? s({
						createdAt: e.created,
						endsAt: null == o ? void 0 : o.votingEndTimestamp,
						selectedOptionId: null !== (n = null == o ? void 0 : o.userSelection) && void 0 !== n ? n : null,
						resolvedOptionId: null == o ? void 0 : o.resolvedOptionId,
						totalVoteCount: null == o ? void 0 : o.totalVoteCount,
						status: null == o ? void 0 : o.predictionStatus
					}, {
						createdAt: t.created,
						endsAt: null == a ? void 0 : a.votingEndTimestamp,
						selectedOptionId: null !== (r = null == a ? void 0 : a.userSelection) && void 0 !== r ? r : null,
						resolvedOptionId: null == a ? void 0 : a.resolvedOptionId,
						totalVoteCount: null == a ? void 0 : a.totalVoteCount,
						status: null == a ? void 0 : a.predictionStatus
					}) : 0
				}
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => {
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
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
				b = e => Object(r.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(o.a)(Object(s.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/polished/dist/polished.es.js");
			var r = n("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function s(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(r.a)(e).post
			}
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return r
			})), n.d(t, "g", (function() {
				return s
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
			const r = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				s = () => () => ({
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
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "u", (function() {
				return N
			})), n.d(t, "v", (function() {
				return k
			})), n.d(t, "A", (function() {
				return P
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "t", (function() {
				return L
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "p", (function() {
				return A
			})), n.d(t, "q", (function() {
				return M
			})), n.d(t, "z", (function() {
				return R
			})), n.d(t, "y", (function() {
				return D
			})), n.d(t, "x", (function() {
				return F
			})), n.d(t, "o", (function() {
				return U
			})), n.d(t, "r", (function() {
				return W
			})), n.d(t, "m", (function() {
				return q
			})), n.d(t, "g", (function() {
				return K
			})), n.d(t, "l", (function() {
				return z
			})), n.d(t, "e", (function() {
				return J
			})), n.d(t, "f", (function() {
				return Q
			})), n.d(t, "h", (function() {
				return Z
			})), n.d(t, "j", (function() {
				return Y
			})), n.d(t, "k", (function() {
				return X
			})), n.d(t, "i", (function() {
				return $
			})), n.d(t, "d", (function() {
				return ee
			})), n.d(t, "n", (function() {
				return te
			})), n.d(t, "w", (function() {
				return ne
			}));
			var r, s = n("./src/lib/stringInterpolate/index.ts"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				i = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				c = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = (n("./src/reddit/helpers/widgets/index.tsx"), n("./src/reddit/models/DiscoveryUnit/index.ts")),
				l = n("./src/reddit/models/Search/index.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/reddit/selectors/trending.ts"),
				b = n("./src/reddit/selectors/widgets.ts"),
				h = n("./src/telemetry/index.ts"),
				f = n("./src/reddit/helpers/search/searchImpressionId.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe", e.TRENDING = "trending"
			}(r || (r = {}));
			const g = "discovery_unit",
				x = (e, t, n) => ({
					...m.o(e),
					source: g,
					screen: m.bb(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(s.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				v = (e, t, n) => ({
					...x(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				E = (e, t) => {
					Object(h.a)(y(t)(e))
				},
				y = (e, t) => n => v(n, e, t),
				_ = (e, t, n, r) => "unitName" in t ? x(e, t, r) : ((e, t, n) => ({
					...m.o(e),
					source: "search",
					screen: m.bb(e),
					search: n ? {
						...m.cb(e, n, i.a.SERP),
						structureType: m.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				O = (e, t, n, s, o) => ({
					..._(e, t, s, o),
					action: "view",
					noun: r.ITEM_POST,
					post: m.K(e, n)
				}),
				j = e => {
					let {
						post: t,
						rawQuery: n,
						searchQuery: r
					} = e;
					return {
						displayQuery: decodeURIComponent(r),
						rawQuery: n ? decodeURIComponent(n) : void 0,
						structureType: t && t.isSponsored ? m.c.PromotedTrend : m.c.Trending
					}
				};
			var C;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(C || (C = {}));
			const N = e => {
					Object(h.a)(I({
						...e,
						action: a.c.CLICK
					}))
				},
				k = e => {
					Object(h.a)(I({
						...e,
						action: a.c.VIEW
					}))
				},
				w = {
					[i.a.Popular]: C.POPULAR_CAROUSEL,
					[i.a.Typeahead]: C.SEARCH_DROPDOWN
				},
				S = {
					[i.a.Popular]: l.d.tile,
					[i.a.Typeahead]: l.d.dropdown
				},
				I = e => {
					let {
						action: t,
						offset: n = 0,
						state: s,
						telemetrySource: o,
						trendingSearch: a
					} = e;
					const i = w[o],
						c = S[o],
						l = Object(p.a)(s, c).filter(e => !e.post || !(e.post.isSponsored && e.post.isBlank)).findIndex(e => e.id === a.id) + n;
					return {
						...m.o(s),
						source: "search",
						action: t,
						noun: r.TRENDING,
						metaSearch: j(a),
						discoveryUnit: i === C.POPULAR_CAROUSEL ? {
							name: d.k,
							id: d.k,
							title: d.k,
							type: "query"
						} : void 0,
						actionInfo: m.d(s, {
							paneName: i,
							position: l
						}),
						search: {
							originElement: i === C.SEARCH_DROPDOWN ? "search_dropdown" : void 0,
							originPageType: s.platform.currentPage ? m.v(s.platform.currentPage) : void 0,
							query: a.rawQuery,
							structureType: m.c.Trending,
							impressionId: f.a.get(o),
							queryId: m.db(s, o)
						}
					}
				},
				P = (e, t, n, r, s, o, i) => {
					Object(h.a)({
						...m.o(e),
						...Object(c.m)({
							state: e,
							postId: n,
							searchOptions: r,
							pageLayer: s,
							key: o,
							discoveryUnit: t
						}),
						action: a.c.VIEW,
						noun: i ? "ad" : "post"
					})
				},
				T = (e, t, n, r) => {
					Object(h.a)(O(e, t, n, r))
				},
				L = (e, t, n, r) => s => O(s, e, t, n, r),
				B = (e, t) => {
					Object(h.a)({
						...x(e, t),
						source: g,
						action: a.c.CLICK,
						noun: "show_less_often"
					})
				},
				A = (e, t, n, r) => {
					Object(h.a)(M(t, n, r)(e))
				},
				M = (e, t, n, s) => o => {
					return {
						..._(o, e, n, s),
						source: g,
						action: a.c.CLICK,
						noun: r.ITEM_POST,
						post: m.K(o, t)
					}
				},
				R = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => Object(c.s)(e, ...t)
				},
				D = (e, t, n, r) => s => o => Object(c.k)({
					action: a.c.CLICK,
					state: o,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: n,
					postId: s,
					discoveryUnit: r
				}),
				F = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => n => ({
						...R(...t)(e)(n),
						noun: "ad"
					})
				},
				U = (e, t) => n => s => ({
					...e ? x(s, e, t) : {},
					source: g,
					action: a.c.CLICK,
					noun: r.ITEM_POST,
					post: m.K(s, n)
				}),
				W = (e, t, n, r) => {
					Object(h.a)(H(t, n, r)(e))
				},
				H = (e, t, n, r) => s => {
					const o = Object(u.c)(s, {
							postId: t
						}),
						i = o ? Object(b.b)(s, o) : void 0;
					return {
						..._(s, e, n, r),
						...i,
						source: g,
						action: a.c.CLICK,
						noun: "item_post_subreddit",
						post: m.K(s, t)
					}
				},
				V = () => ({
					id: "xd_focus_verticals",
					unitType: d.e.Listing,
					experiment: "",
					title: o.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.c.Large,
					surface: d.d.Frontpage,
					url: "gql.reddit.com"
				}),
				G = (e, t, n) => m.d(e, {
					position: n
				}),
				q = (e, t, n) => {
					const r = V();
					return e => ({
						...v(e, r),
						actionInfo: G(e, 0, n),
						subreddit: m.kb(e, t)
					})
				},
				K = (e, t, n) => {
					const r = V();
					return e => ({
						...O(e, r, t),
						actionInfo: G(e, 0, n)
					})
				},
				z = (e, t, n) => {
					const s = V();
					return e => ({
						...x(e, s),
						actionInfo: G(e, 0, n),
						subreddit: m.kb(e, t) || null,
						source: g,
						action: a.c.VIEW,
						noun: r.ITEM_SUBREDDIT
					})
				},
				J = (e, t, n) => {
					const s = V();
					return e => ({
						...x(e, s),
						actionInfo: G(e, 0, n),
						post: m.K(e, t) || null,
						source: g,
						action: a.c.CLICK,
						noun: r.ITEM_POST
					})
				},
				Q = (e, t, n, s) => {
					const o = V();
					return e => ({
						...x(e, o),
						actionInfo: G(e, 0, s),
						subreddit: m.kb(e, n) || null,
						post: m.K(e, t) || null,
						source: g,
						action: a.c.CLICK,
						noun: r.ITEM_POST_SUBREDDIT
					})
				},
				Z = (e, t, n) => {
					const s = V();
					return e => ({
						...x(e, s),
						actionInfo: G(e, 0, n),
						subreddit: m.kb(e, t) || null,
						source: g,
						action: a.c.CLICK,
						noun: r.ITEM_SUBREDDIT
					})
				},
				Y = (e, t, n, s) => {
					const o = V();
					return e => ({
						...x(e, o),
						actionInfo: G(e, 0, n),
						subreddit: m.kb(e, t) || null,
						post: s ? m.K(e, s) : null,
						source: g,
						action: a.c.CLICK,
						noun: r.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				X = (e, t, n, s) => {
					const o = V();
					return e => ({
						...x(e, o),
						actionInfo: G(e, 0, n),
						subreddit: m.kb(e, t) || null,
						post: s ? m.K(e, s) : null,
						source: g,
						action: a.c.CLICK,
						noun: r.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				$ = (e, t, n) => {
					const s = V();
					return e => ({
						...x(e, s),
						actionInfo: G(e, 0, n),
						subreddit: m.kb(e, t) || null,
						source: g,
						action: a.c.CLICK,
						noun: r.ITEM_SUBREDDIT_HIDE
					})
				},
				ee = (e, t, n) => {
					const s = V();
					return e => ({
						...x(e, s),
						actionInfo: G(e, 0, n),
						subreddit: m.kb(e, t) || null,
						source: g,
						action: a.c.CLICK,
						noun: r.HEADER_SUBREDDIT
					})
				},
				te = (e, t) => n => ({
					...x(n, e),
					...t && Object(b.b)(n, t),
					source: g,
					action: a.c.CLICK,
					noun: "item"
				}),
				ne = e => t => ({
					...x(t, e),
					source: g,
					action: a.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/helpers/isComment.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/telemetry/models/Outbound.ts");
			const i = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(s.b)(t) || Object(o.b)(t))) return Object(s.b)(t) ? a.SourceElement.Comment : Object(r.x)(n) ? a.SourceElement.PostDetail : Object(r.H)(n) ? a.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					...Object(s.o)(e),
					action: r.c.CLICK,
					noun: "preview",
					source: "hot_potato"
				}),
				a = () => e => ({
					...Object(s.o)(e),
					action: r.c.CLICK,
					noun: "hot_potato",
					source: "nav"
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
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: r.bb(e),
					profile: r.T(e),
					subreddit: r.jb(e)
				}),
				o = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...s(t)
				}),
				a = e => t => ({
					...s(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...s(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...s(t),
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
				return E
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "A", (function() {
				return j
			})), n.d(t, "x", (function() {
				return C
			})), n.d(t, "z", (function() {
				return N
			})), n.d(t, "y", (function() {
				return k
			})), n.d(t, "r", (function() {
				return w
			})), n.d(t, "m", (function() {
				return S
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "C", (function() {
				return M
			})), n.d(t, "B", (function() {
				return R
			})), n.d(t, "E", (function() {
				return D
			})), n.d(t, "D", (function() {
				return F
			})), n.d(t, "F", (function() {
				return U
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more", e.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN = "google_account_confirmation_screen", e.USERNAME_SECOND_CONFIRMATION_SCREEN = "username_second_confirmation_screen", e.USERNAME_CONFIRMATION_SCREEN = "username_confirmation_screen", e.USERNAME_TOOLTIP = "username_tooltip"
			}(i || (i = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
					return t => ({
						...Object(s.o)(t),
						action: r.c.CLICK,
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
					...Object(s.o)(e),
					action: r.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				l = () => e => ({
					...Object(s.o)(e),
					action: r.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				u = e => t => ({
					...Object(s.o)(t),
					action: r.c.DISMISS,
					noun: e,
					source: a
				}),
				m = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: r.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: r.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: r.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: r.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				f = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: r.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				g = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: r.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				x = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: r.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				v = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: r.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				E = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: r.c.SELECT,
					noun: i.GENDER
				}),
				y = (e, t, n, o, c) => d => ({
					...Object(s.o)(d),
					source: a,
					action: e ? r.c.SELECT : r.c.DESELECT,
					actionInfo: {
						...Object(s.d)(d),
						reason: c
					},
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: I(n),
						categoryId: o
					}
				}),
				_ = (e, t, n, o, c, d) => l => ({
					...Object(s.o)(l),
					source: a,
					action: e ? r.c.SELECT : r.c.DESELECT,
					actionInfo: {
						...Object(s.d)(l),
						reason: d
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: I(t),
						categoryId: n,
						subredditName: o,
						subredditId: c
					}
				}),
				O = (e, t) => n => ({
					...Object(s.o)(n),
					source: a,
					action: r.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: I(e),
						categoryId: t
					}
				}),
				j = () => e => ({
					...Object(s.o)(e),
					source: "topic_chaining_prompt",
					action: r.c.VIEW,
					noun: i.TOPIC_PREVIEW
				}),
				C = () => e => ({
					...Object(s.o)(e),
					source: "topic_chaining_prompt",
					action: r.c.CLICK,
					noun: i.TOPIC_PREVIEW
				}),
				N = (e, t) => n => ({
					...Object(s.o)(n),
					source: "topic_chaining_prompt",
					action: r.c.SELECT,
					noun: i.CATEGORY,
					onboarding: {
						categoryName: I(e),
						categoryId: t
					}
				}),
				k = () => e => ({
					...Object(s.o)(e),
					source: "topic_chaining_prompt",
					action: r.c.DISMISS,
					noun: i.TOPIC_PREVIEW
				}),
				w = (e, t, n, o) => c => ({
					...Object(s.o)(c),
					source: a,
					action: r.c.VIEW,
					noun: e ? i.CATEGORY : i.SUB_CATEGORY,
					actionInfo: {
						...Object(s.d)(c),
						reason: o
					},
					onboarding: {
						categoryName: I(t),
						categoryId: n
					}
				}),
				S = (e, t, n, o, c) => d => ({
					...Object(s.o)(d),
					source: a,
					action: r.c.VIEW,
					actionInfo: {
						...Object(s.d)(d),
						reason: c
					},
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: I(e),
						categoryId: n,
						subredditName: t,
						subredditId: o
					}
				}),
				I = e => e.toLowerCase().replace(new RegExp("&", "g"), "and").replace(new RegExp(" ", "g"), "_").replace(new RegExp("[^-_a-z0-9]", "g"), "");
			var P, T, L;
			! function(e) {
				e.CONTINUE = "continue", e.LOGIN_ANOTHER_ACCOUNT = "login_another_account"
			}(P || (P = {})),
			function(e) {
				e.CHANGE_USERNAME = "change_username", e.KEEP_USERNAME = "keep_username"
			}(T || (T = {})),
			function(e) {
				e.GO_BACK = "go_back", e.YES_KEEP_USERNAME = "yes_keep_username"
			}(L || (L = {}));
			const B = () => e => ({
					...Object(s.o)(e),
					action: r.c.VIEW,
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				A = e => t => ({
					...Object(s.o)(t),
					action: r.c.CLICK,
					actionInfo: {
						...Object(s.d)(t),
						reason: e
					},
					noun: i.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: a
				}),
				M = () => e => ({
					...Object(s.o)(e),
					action: r.c.VIEW,
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				R = e => t => ({
					...Object(s.o)(t),
					action: r.c.CLICK,
					actionInfo: {
						...Object(s.d)(t),
						reason: e
					},
					noun: i.USERNAME_CONFIRMATION_SCREEN,
					source: a
				}),
				D = () => e => ({
					...Object(s.o)(e),
					action: r.c.VIEW,
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				F = e => t => ({
					...Object(s.o)(t),
					action: r.c.CLICK,
					actionInfo: {
						...Object(s.d)(t),
						reason: e
					},
					noun: i.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: a
				}),
				U = () => e => ({
					...Object(s.o)(e),
					action: r.c.VIEW,
					noun: i.USERNAME_TOOLTIP,
					source: a
				})
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "q", (function() {
				return c
			})), n.d(t, "s", (function() {
				return d
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "t", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "r", (function() {
				return j
			})), n.d(t, "f", (function() {
				return C
			}));
			var r = n("./src/reddit/models/Prediction/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = "poll",
				a = "predictions",
				i = e => ({
					...Object(s.o)(e),
					source: o,
					action: "select",
					noun: "poll_option"
				}),
				c = e => ({
					...Object(s.o)(e),
					source: o,
					action: "select",
					noun: "prediction_option"
				}),
				d = e => ({
					...Object(s.o)(e),
					source: o,
					action: "view",
					noun: "predict_option_modal"
				}),
				l = e => {
					let {
						pollId: t,
						selectedNumberCoins: n,
						totalStakeAmount: r
					} = e;
					return e => ({
						...Object(s.o)(e),
						source: o,
						action: "confirm",
						noun: "predict",
						poll: Object(s.J)(e, t, !1, void 0, n),
						goldPurchase: {
							numberCoins: r
						}
					})
				},
				u = e => {
					let {
						pollId: t,
						selectedNumberTokens: n
					} = e;
					return e => ({
						...Object(s.o)(e),
						source: o,
						action: "confirm",
						noun: "predict",
						poll: Object(s.J)(e, t, !1, void 0, void 0, n)
					})
				},
				m = e => {
					let {
						pollId: t,
						currency: n,
						amount: a
					} = e;
					return e => {
						const i = n === r.a.Coins ? a : void 0,
							c = n === r.a.Tokens ? a : void 0;
						return {
							...Object(s.o)(e),
							source: o,
							action: "close",
							noun: "prediction_modal",
							poll: Object(s.J)(e, t, !1, i, c)
						}
					}
				},
				p = e => ({
					...Object(s.o)(e),
					source: o,
					action: "click",
					noun: "add_coins"
				}),
				b = e => {
					let {
						targetUserId: t
					} = e;
					return e => ({
						...Object(s.o)(e),
						source: a,
						action: "click",
						noun: "leaderboard_profile",
						targetUser: {
							id: t
						}
					})
				},
				h = e => {
					let {
						pageType: t
					} = e;
					return e => ({
						...Object(s.o)(e),
						source: a,
						action: "click",
						noun: "tournament",
						actionInfo: {
							pageType: t
						}
					})
				},
				f = () => e => ({
					...Object(s.o)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				g = () => e => ({
					...Object(s.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				x = () => e => ({
					...Object(s.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				v = e => t => ({
					...Object(s.o)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "enable_predictions",
					actionInfo: {
						pageType: "predictions_picker"
					},
					setting: {
						value: e ? "1" : "0",
						oldValue: e ? "0" : "1"
					},
					subreddit: Object(s.jb)(t)
				}),
				E = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: "click",
					noun: "next"
				}),
				y = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: "click",
					noun: "add_more"
				}),
				_ = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: "click",
					noun: "start_tournament"
				}),
				O = () => e => ({
					...Object(s.o)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				j = () => e => ({
					...Object(s.o)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(s.jb)(e)
				}),
				C = () => e => ({
					...Object(s.o)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(s.jb)(e)
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
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					...Object(r.o)(e),
					subreddit: Object(r.jb)(e)
				}),
				o = {
					source: "global",
					action: "view",
					noun: "screen"
				},
				a = () => e => ({
					...s(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "all_time_community_predictors"
					}
				}),
				i = () => e => ({
					...s(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				c = () => e => ({
					...s(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "previous_tournament_predictor"
					}
				}),
				d = () => e => ({
					...s(e),
					...o,
					actionInfo: {
						pageType: "all_time_community_predictors_preview"
					}
				}),
				l = e => t => ({
					...s(t),
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
					...s(e),
					...o,
					actionInfo: {
						pageType: "previous_tournaments"
					}
				}),
				m = () => e => ({
					...s(e),
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
				b = (e, t, n) => r => ({
					...s(r),
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
				return r
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
				return E
			})), n.d(t, "r", (function() {
				return y
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "q", (function() {
				return O
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "z", (function() {
				return C
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "y", (function() {
				return k
			})), n.d(t, "G", (function() {
				return w
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "n", (function() {
				return P
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "d", (function() {
				return B
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "w", (function() {
				return M
			})), n.d(t, "F", (function() {
				return R
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "l", (function() {
				return F
			})), n.d(t, "m", (function() {
				return U
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "h", (function() {
				return H
			}));
			var r, s = n("./src/reddit/constants/chat.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(r || (r = {}));
			const i = (e, t) => {
					if (t) {
						const n = a.C(e, t.post.id),
							r = a.K(e, t.post.id),
							s = a.jb(e);
						if (t.post.authorInfo && r && (r.authorId = t.post.authorInfo.id), n) {
							n.streamPublicId = t.stream.stream_id, n.id = t.stream.stream_id;
							const r = Object(o.j)(e, {
								streamIdFromPath: t.post.id
							});
							r === o.a.LIVE ? n.type = "stream_live" : r === o.a.VOD ? n.type = "stream_vod" : r === o.a.UNAVAILABLE && (n.type = "stream_unavailable")
						}
						return {
							post: r,
							media: n,
							subreddit: s
						}
					}
					return {
						subreddit: a.jb(e)
					}
				},
				c = (e, t, n) => {
					if (!t || !n) return;
					const r = Object(o.j)(e, {
							streamIdFromPath: t.post.id
						}),
						a = t.chat_disabled || n.chatState === s.c.None;
					return {
						id: n.id,
						sessionDurationMs: n.sessionDurationMs,
						watchDurationMs: n.watchDurationMs,
						heartbeatDurationMs: n.heartbeatDurationMs,
						isLive: r === o.a.LIVE,
						playheadOffsetMs: n.playheadOffsetMs,
						timestampMs: n.timestampMs,
						startTimeMs: n.startTimeMs,
						volume: n.volume,
						chatState: a ? s.c.None : s.c.Compact,
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
				g = (e, t, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...i(r, t)
				}),
				x = (e, t, n, r) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...i(s, t),
					actionInfo: a.d(s, {
						referralId: r
					})
				}),
				v = (e, t, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...i(r, t)
				}),
				E = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...i(t, e)
				}),
				y = (e, t) => n => ({
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
				j = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(n, e, t),
					...i(n, e)
				}),
				C = e => t => {
					const n = Object(o.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, n)
					}
				},
				N = (e, t, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(r, t, n),
					...i(r, t)
				}),
				k = (e, t) => n => ({
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
					profile: a.T(t),
					screen: a.bb(t),
					...i(t, e)
				}),
				S = e => t => {
					const n = i(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: a.T(t),
						screen: a.bb(t),
						...n
					}
				},
				I = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				P = e => t => ({
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
					targetSubreddit: a.jb(t)
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
				A = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(n, e, t),
					...i(n, e)
				}),
				M = (e, t) => n => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(n, e, t),
					...i(n, e)
				}),
				R = (e, t) => n => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(n, e, t),
					...i(n, e)
				}),
				D = (e, t) => n => ({
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
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...s.o(t),
					actionInfo: s.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.d)(r.a.SubredditCreation, !0)
				}),
				a = (e, t, n) => o => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...s.o(o),
					actionInfo: s.d(o, {
						settingValue: e
					}),
					subreddit: {
						id: n,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				i = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...s.o(e),
					actionInfo: s.d(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				c = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...s.o(n),
					actionInfo: s.d(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				d = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...s.o(e),
					actionInfo: s.d(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...s.o(e),
					actionInfo: s.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...s.o(e),
					actionInfo: s.d(e)
				}),
				m = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...s.o(e),
					actionInfo: s.d(e)
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
				return E
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return _
			}));
			var r, s, o = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(r || (r = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(s || (s = {}));
			const m = e => ({
					...u.o(e),
					source: s.LINK,
					action: o.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: s,
					screen: u.bb(e),
					discoveryUnit: {
						id: "xd_100",
						name: r.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: r.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: r
					} = t;
					if (!n || !Object(i.b)(n) && !Object(a.b)(n)) return {
						outbound: void 0
					};
					const s = Object(i.b)(n) ? "postId" : "commentId",
						o = {
							url: `/r/${r}/`,
							sourceElement: Object(c.a)(t),
							subredditName: r,
							[s]: n.id
						},
						d = Object(l.A)(e, {
							subredditName: r
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
					const r = Object(i.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.K(e, n.id),
						subreddit: u.kb(e, r),
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
					noun: r.SUBREDDIT_HOVERCARD,
					subreddit: u.lb(t, e),
					screen: u.bb(t)
				}),
				x = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: r.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.lb(n, e),
					screen: u.bb(n)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.lb(n, e),
					screen: u.bb(n)
				}),
				E = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "r", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "o", (function() {
				return C
			}));
			var r = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...s.o(e),
					subreddit: s.jb(e),
					userSubreddit: s.tb(e)
				}),
				a = () => e => ({
					source: "wiki",
					action: "click",
					noun: "edit",
					...o(e)
				}),
				i = () => e => ({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki",
					...o(e)
				}),
				c = e => t => ({
					source: "wiki",
					action: "click",
					noun: e,
					...o(t)
				}),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return c(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = c("compare_wiki_pages"),
				u = c("revert_wiki_page"),
				m = c("view_wiki_page"),
				p = c("view_source"),
				b = c("add_wiki_page_contributor"),
				h = c("remove_wiki_page_contributor"),
				f = c("save_wiki_page_settings"),
				g = c("copy_url"),
				x = c("add_wiki_subreddit_contributor"),
				v = c("remove_wiki_subreddit_contributor"),
				E = c("ban_wiki_contributor"),
				y = c("unban_wiki_contributor"),
				_ = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				O = {
					[r.a.Inherit]: "subreddit_wiki_perms",
					[r.a.Contributors]: "only_wiki_contributors",
					[r.a.Mods]: "only_mods"
				},
				j = e => t => ({
					...o(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: s.d(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				C = e => t => ({
					...o(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: s.d(t, {
						settingValue: O[e]
					})
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/promo.ts"),
				s = n("./src/reddit/hooks/usePromoContext.ts");

			function o(e) {
				const {
					promos: t
				} = Object(s.a)();
				return !!e && t.get(e) === r.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function o(e) {
				const t = Object(r.e)(s.a) === e,
					n = Object(r.e)(s.c) === e,
					o = Object(r.e)(s.e) === e;
				return t || n || o
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js");

			function s(e) {
				const t = Object(r.useRef)(!1);
				t.current || (e(), t.current = !0)
			}
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js");

			function s() {
				const [e, t] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useModalState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				const [t, n] = s.a.useState(e);
				return [t, () => n(!0), () => n(!1)]
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = r.eb
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(r.useContext)(s.a)
			}
		},
		"./src/reddit/hooks/useWindowEvent.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js");
			const s = (e, t) => {
				Object(r.useEffect)(() => (window.addEventListener(e, t), () => window.removeEventListener(e, t)), [e, t])
			};
			t.a = s
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.a = e => {
				let {
					compact: t,
					isFilled: n,
					...r
				} = e;
				return t ? s.a.createElement("span", d({}, r, {
					className: Object(o.a)(c.a.compactDownvoteWrapper, r.className)
				}), s.a.createElement(l, {
					className: c.a.compactDownvote,
					isFilled: n
				})) : s.a.createElement("span", d({}, r, {
					className: Object(o.a)(c.a.downvoteWrapper, r.className)
				}), s.a.createElement(l, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.b = e => {
				let {
					compact: t,
					isFilled: n,
					...r
				} = e;
				return t ? s.a.createElement("span", d({}, r, {
					className: Object(o.a)(c.a.compactUpvoteWrapper, r.className)
				}), s.a.createElement(l, {
					className: c.a.compactUpvote,
					isFilled: n
				})) : s.a.createElement("span", d({}, r, {
					className: Object(o.a)(c.a.upvoteWrapper, r.className)
				}), s.a.createElement(l, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/CirclePost/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				viewBox: "0 0 56 56",
				xmlns: "http://www.w3.org/2000/svg",
				className: e.className
			}, s.a.createElement("g", {
				transform: "translate(1 1)",
				fill: "inherit",
				stroke: "inherit",
				fillRule: "evenodd"
			}, s.a.createElement("rect", {
				x: "16",
				y: "35",
				width: "22.4",
				height: "2.8",
				rx: "1.4",
				stroke: "none"
			}), s.a.createElement("path", {
				d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
			}), s.a.createElement("circle", {
				strokeWidth: "2",
				fill: "none",
				cx: "27",
				cy: "27",
				r: "27"
			})))
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: n,
					...r
				} = e;
				return s.a.createElement("svg", c({
					className: Object(o.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), s.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), s.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), s.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), s.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", {
					fillRule: "evenodd"
				}, s.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), s.a.createElement("path", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: r,
					theme: a,
					...d
				} = e, m = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(i.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return s.a.createElement("div", u({
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
					disableFullscreen: r,
					dispatch: o,
					fitPageToContent: a,
					forcedLayout: l,
					isCollectionLayout: u,
					isEditing: b,
					layout: h,
					pageLayer: f,
					...g
				} = e;
				return s.a.createElement("div", p({
					className: Object(i.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: h === c.g.Large || Object(d.P)(f),
						[m.a.mDisableFullScreen]: r && !u,
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
			var E = e => {
					const {
						subredditName: t
					} = e, n = `/${t}`;
					return s.a.createElement(b.a, {
						className: v.a.backToSubreddit,
						to: n
					}, s.a.createElement("div", {
						className: v.a.innerContainer
					}, s.a.createElement(g.a, {
						name: h.a.back,
						className: p()(v.a.content, v.a.back)
					}), s.a.createElement(f.b, {
						className: p()(v.a.content, v.a.subredditIcon)
					}), s.a.createElement("span", {
						className: p()(v.a.content, v.a.title)
					}, t)))
				},
				y = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
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
					hideOnlyChildMargin: j,
					isCollectionLayout: C,
					isPageSwapped: N,
					maxWidth: k,
					navBar: w,
					redditStyle: S,
					sidebar: I,
					sidebars: P,
					trendingUnit: T,
					subredditId: L
				} = e, B = T ? "28px" : "0", A = N ? {
					marginRight: `${c.p}px`,
					marginTop: B
				} : {
					marginLeft: `${c.p}px`,
					marginTop: B
				}, M = I && s.a.createElement("div", {
					className: Object(i.a)(O.a.sidebar, C ? O.a["m-collectionLayout"] : O.a.defaultLayout),
					style: A
				}, I), R = s.a.createElement(a.a, {
					hideOnlyChildMargin: j,
					className: f,
					disableFullscreen: x,
					fitPageToContent: v,
					forcedLayout: _,
					isCollectionLayout: C
				}, h, n && s.a.createElement(E, {
					subredditName: n
				}), b);
				let D;
				D = P ? s.a.createElement(s.a.Fragment, null, P[0], R, P[1]) : N ? s.a.createElement(s.a.Fragment, null, M, R) : s.a.createElement(s.a.Fragment, null, R, M);
				const F = x ? `${k||l.a+2*c.l}px` : "100%",
					U = Object(r.useContext)(u.a);
				return s.a.createElement(y.a, {
					subredditId: L
				}, s.a.createElement("div", {
					className: Object(i.a)(O.a.outerContainer, d.i, m, {
						[O.a.outerContainerExp]: U
					}),
					ref: p
				}, s.a.createElement(o.a, {
					className: d.h,
					redditStyle: S,
					backgroundColor: t
				}), s.a.createElement("div", {
					className: O.a.innerContainer
				}, w, g, (e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null)(e), s.a.createElement("div", {
					style: {
						maxWidth: F
					}
				}, T), s.a.createElement("div", {
					className: O.a.body,
					style: {
						maxWidth: F
					}
				}, D))))
			}
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				o = n.n(s);
			t.a = r.a.button("inlineButton", o.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(i);
			t.a = Object(o.a)(e => s.a.createElement("div", {
				className: Object(a.a)(c.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(i);
			t.a = Object(o.a)(e => s.a.createElement("div", {
				className: Object(a.a)(c.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.GatedSubreddit = "GatedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(r || (r = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var r;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(r || (r = {}))
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, n) {
			"use strict";
			var r, s;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(r || (r = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(s || (s = {}))
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				c = n("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				d = n("./src/reddit/constants/experiments.ts"),
				l = n("./src/reddit/constants/postLayout.ts"),
				u = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			const m = Object(r.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(2), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("NewCommunityProgress")]).then(n.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
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
					subredditSubscribers: r
				} = e;
				var s;
				const p = Object(a.e)(e => e.subreddits.survey[n]),
					b = Object(a.e)(e => e.subreddits.progressModule[n]),
					h = Object(a.e)(u.a),
					f = h !== d.Me.NewModule;
				return (null === (s = null == b ? void 0 : b.cards) || void 0 === s ? void 0 : s.length) > 0 && f ? o.a.createElement(m, {
					closeModuleOnMount: !!t && t !== l.g.Large,
					subredditId: n,
					progressModule: b
				}) : t !== l.g.Large ? null : (null == p ? void 0 : p.isEligible) && !(null == p ? void 0 : p.response) && (!h || h && r > 100) ? o.a.createElement(c.a, {
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
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/lodash/fromPairs.js"),
				o = n.n(s),
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
				E = n("./src/lib/isAdHocMultireddit/index.ts"),
				y = n("./src/lib/isFakeSubreddit/index.ts"),
				_ = n("./src/lib/listingSort/index.ts"),
				O = n("./src/lib/makeListingKey/index.ts"),
				j = n("./src/lib/objectSelector/index.ts"),
				C = n("./src/lib/promo/withShowSignupUpsell.tsx"),
				N = n("./src/lib/fastdom/index.ts"),
				k = n("./src/lib/performanceTimings/index.tsx"),
				w = n("./src/reddit/actions/preferences.ts"),
				S = n("./src/reddit/actions/search.ts"),
				I = n("./src/reddit/actions/searchQueryId/index.tsx"),
				P = n("./src/reddit/actions/subreddit.ts"),
				T = n("./src/reddit/components/AwardedListingBanner/index.tsx"),
				L = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				B = n("./src/reddit/components/ContentGate/index.tsx"),
				A = n("./src/reddit/components/CreatePostBanner/index.tsx"),
				M = n("./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/async.ts"),
				R = n("./src/reddit/components/Econ/PredictionsPostList/index.tsx"),
				D = n("./src/reddit/components/Econ/Tournament/Sidebar/index.tsx"),
				F = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx"),
				U = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				W = n("./src/reddit/components/EmptySubredditPostList/index.tsx"),
				H = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				V = n("./src/reddit/components/Governance/ClaimPointsBanner/async.ts"),
				G = n("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				q = n("./src/reddit/components/HeaderImage/index.tsx"),
				K = n("./src/reddit/components/HotPotatoEmbed/index.tsx"),
				z = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				J = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Q = n("./src/reddit/components/JumpToContent/index.tsx"),
				Z = n("./src/reddit/components/ListingPostList/index.tsx"),
				Y = n("./src/reddit/components/NewPostPill/index.tsx"),
				X = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				$ = n("./src/reddit/components/RelatedSubredditsCarousel/async.tsx"),
				ee = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				te = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				ne = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				re = n("./src/reddit/components/SubredditSidebar/index.tsx"),
				se = n("./src/reddit/components/TabBadger/index.tsx"),
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
				Ee = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ye = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				_e = n("./src/reddit/selectors/countrySites.ts"),
				Oe = n("./src/reddit/selectors/discoveryUnit.ts"),
				je = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				Ce = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				Ne = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				ke = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				we = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Se = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Ie = n("./src/reddit/selectors/experiments/onboarding.ts"),
				Pe = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Te = n("./src/reddit/selectors/experiments/resonatePilot.ts"),
				Le = n("./src/reddit/selectors/experiments/topPosts.ts"),
				Be = n("./src/reddit/selectors/listings.ts"),
				Ae = n("./src/reddit/selectors/meta.ts"),
				Me = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Re = n("./src/reddit/selectors/newPostPill.ts"),
				De = n("./src/reddit/selectors/posts.ts"),
				Fe = n("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				Ue = n("./src/reddit/selectors/searchQueryId.ts"),
				We = n("./src/reddit/selectors/subreddit.ts"),
				He = n("./src/reddit/selectors/user.ts"),
				Ve = n("./src/reddit/selectors/userPrefs.ts"),
				Ge = n("./src/lib/countrySites/index.ts"),
				qe = n("./src/reddit/components/Onboarding/Interests/InterestPickerPreview.tsx"),
				Ke = n("./src/reddit/constants/countrySites.ts"),
				ze = n("./src/reddit/helpers/search/searchQueryId.ts"),
				Je = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Qe = n("./src/reddit/selectors/onboarding.ts"),
				Ze = n("./src/reddit/selectors/platform.ts"),
				Ye = n("./src/reddit/pages/Subreddit/index.m.less"),
				Xe = n.n(Ye),
				$e = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");

			function et() {
				return (et = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: tt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), nt = Object(r.a)({
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
			}), rt = Object(r.a)({
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
			}), st = 5, ot = 3, at = 6e3, it = Object(de.u)(), ct = Object(r.a)({
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
			}), dt = Object(j.a)(Object(b.a)((e, t) => {
				let {
					location: n
				} = t;
				return n.search
			}, e => o()([...Object(v.a)(e)]))), lt = e => Object(Be.a)(e) || "", ut = Object(b.c)({
				isTopContentDismissed: He.Y
			}), mt = Object(b.c)({
				subreddit: (e, t) => Object(We.A)(e, {
					subredditName: t.match.params.subredditName
				})
			}), pt = Object(b.c)({
				isLoggedIn: He.Q
			}), bt = Object(j.a)((e, t) => {
				const {
					subreddit: n
				} = mt(e, t), {
					subredditName: r
				} = t.match.params;
				if (n) {
					if (e.subreddits.progressModule[n.id]) return !1;
					if (Object(we.a)(e)) return !1;
					const t = lt(e),
						s = Object(Me.b)(ye.c.config)(e, {
							subredditId: n.id
						}),
						o = Object(De.D)(e, t, r, !0),
						a = !Object(Be.d)(e, {
							listingKey: t
						});
					if (s && a && o.length <= 1) return !0
				}
				return !1
			}), ht = (e, t) => {
				const n = lt(e),
					r = Object(de.S)(e, t),
					{
						sort: s
					} = xt(e, t);
				return Object(Re.a)(e, {
					layout: r,
					listingKey: n,
					sort: s
				})
			}, ft = Object(b.c)({
				inAwardListingExperiment: Ce.a,
				isPopular: de.F
			}), gt = e => {
				const t = ie.C in e && e[ie.C].toUpperCase();
				if ("string" == typeof t && t in x.mc) return x.mc[t]
			}, xt = Object(j.a)((e, t) => {
				const {
					sort: n,
					subredditName: r,
					countryCode: s,
					languageCode: o
				} = t.match.params, a = dt(e, t), i = Object(y.a)(r, {
					countryCode: s,
					languageCode: o
				}), c = Object(y.c)(r, {
					countryCode: s,
					languageCode: o
				});
				if (n) return Object(_.b)({
					sort: n,
					timeSort: gt(a)
				});
				if (i) return c && Object(je.a)(e) ? Object(_.b)({
					sort: x.Z.BEST
				}) : Object(_.b)({
					sort: x.Z.HOT
				});
				const d = lt(e),
					l = e.listings.postOrder.listingSort[d];
				if (l && !l.hasChanged) return Object(_.d)(l.sort);
				const {
					subreddit: u
				} = mt(e, t);
				if (u) {
					const t = Object(We.E)(e, {
						subredditId: u.id
					});
					return Object(_.d)(t)
				}
				return Object(_.d)(e.user.prefs.sort)
			}), vt = Object(j.a)((e, t) => {
				const {
					subredditName: n
				} = t.match.params;
				return Object(We.ab)(e, {
					subredditName: n
				})
			}), Et = Object(b.c)({
				currentPage: Ze.b,
				claimablePointsEnabled: le.d.spClaimablePoints,
				countrySiteSettings: _e.a,
				isBlacklistedTopContentPage: Oe.e,
				listingKey: lt,
				sortParams: xt,
				specialMembershipUpsellsEnabled: le.d.spSpecialMembershipUpsells,
				topContent: vt,
				topContentDiscoveryUnit: e => Object(Oe.b)(e, {
					unitName: Ee.a
				}),
				topPostsVariant: Le.d,
				walletRegistrationBannerEnabled: le.d.spWalletRegistrationBanner,
				nsfwBlockingExperiment: Se.f,
				isNsfwBlurSubreddit: Se.e,
				searchResultsServerQueryId: e => Object(Ue.a)(e)
			}), yt = Object(b.c)({
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
				isReducedAnimation: Ve.d,
				isCommentCountAnimationEnabled: Pe.d,
				isVoteCountAnimationEnabled: Pe.h,
				isCountAnimShadowTestEnabled: Pe.e,
				isHotPotatoEmbedEnabled: Ne.c,
				isBlockingInterstitialEnabled: ke.b,
				isBlockingInterstitialV2Enabled: ke.c,
				interestTopicRecommendations: Qe.b,
				reonboardingFlow: Ie.c
			}), _t = () => Object(b.a)(He.kb, dt, ut, mt, (e, t) => {
				let {
					match: n
				} = t;
				return Object(We.x)(e, {
					subredditName: n.params.subredditName
				})
			}, pt, (e, t) => {
				let {
					match: n
				} = t;
				return n.params.subredditName
			}, Ae.l, ft, Et, yt, (e, t, n, r, s, o, a, i, c, d, l) => {
				let {
					isTopContentDismissed: u
				} = n, {
					subreddit: m
				} = r, {
					isLoggedIn: p
				} = o, {
					inAwardListingExperiment: b,
					isPopular: h
				} = c, {
					currentPage: f,
					claimablePointsEnabled: g,
					countrySiteSettings: x,
					specialMembershipUpsellsEnabled: v,
					listingKey: E,
					sortParams: {
						sort: y,
						timeSort: _
					},
					topContent: O,
					topContentDiscoveryUnit: j,
					topPostsVariant: C,
					isBlacklistedTopContentPage: N,
					walletRegistrationBannerEnabled: k,
					nsfwBlockingExperiment: w,
					isNsfwBlurSubreddit: S,
					searchResultsServerQueryId: I
				} = d;
				const P = t && ie.g in t ? t[ie.g].toUpperCase() : i,
					T = !!t.hasOwnProperty("f");
				return {
					currentPage: f,
					countrySort: P,
					claimablePointsEnabled: g,
					countrySiteSettings: x,
					specialMembershipUpsellsEnabled: v,
					inAwardListingExperiment: b,
					isLoggedIn: p,
					isPopular: h,
					listingKey: E,
					renderNSFWContentGate: m && m.isNSFW && !e,
					isTopContentDismissed: u,
					queryParams: t,
					sort: y,
					subreddit: m,
					subredditAboutInfo: s,
					subredditName: a,
					timeSort: _,
					topContent: O,
					topContentDiscoveryUnit: j,
					topPostsVariant: C,
					isBlacklistedTopContentPage: N,
					isFlairFilter: T,
					walletRegistrationBannerEnabled: k,
					nsfwBlockingExperiment: w,
					isNsfwBlurSubreddit: S,
					searchResultsServerQueryId: I,
					...l
				}
			}), Ot = (e, t) => ({
				onLoadMorePosts: () => {
					e(P.r({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					}))
				},
				onLoadMoreSearchResults: () => e(Object(S.n)([x.gc.Posts])),
				refreshFeed: () => e(P.s({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				setTopContentDismissalPref: () => e(Object(w.G)()),
				redirectToNewSort: () => {
					e(Object(p.b)(`/r/${t.match.params.subredditName}/${x.Z.NEW}/`))
				},
				unsetSearchResultsServerQueryId: () => e(Object(I.c)())
			}), jt = Object(m.b)(_t, Ot), Ct = Object(r.a)({
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
			}), Nt = e => u.a.createElement(Ct, et({}, e, {
				fallback: u.a.createElement(te.a, {
					className: e.className,
					showCardView: !!e.showCardView
				})
			})), kt = Object(r.a)({
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
			}), wt = Object(r.a)({
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

			function St(e) {
				const {
					subreddit: t
				} = e;
				return !!t && !!t.name && "snoovatar" === t.name.toLowerCase()
			}

			function It(e) {
				const {
					subreddit: t
				} = e;
				return "youcannesdraw" === (null == t ? void 0 : t.name.toLowerCase())
			}
			class Pt extends u.a.Component {
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
							}), this.props.sendEvent(Object(fe.c)(this.props.listingKey)), N.a.write(() => {
								window.addEventListener("scroll", this.handleScroll), window.scrollTo({
									top: 0,
									behavior: this.props.isReducedAnimation ? "auto" : "smooth"
								})
							})
						}, this.handleScroll = d()(() => {
							0 === window.scrollY && (window.removeEventListener("scroll", this.handleScroll), this.props.redirectToNewSort())
						}, x.L), this.onTopContentDismissed = () => {
							this.props.setTopContentDismissalPref()
						}, this.onViewed = (e, t) => {
							const {
								listingKey: n,
								pageLayer: r,
								sort: s,
								timeSort: o
							} = this.props, a = Object(de.P)(r);
							return Object(ge.f)({
								key: n,
								sort: s,
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
								subreddit: r
							} = this.props, s = t.toLowerCase(), o = Object(de.P)(e);
							return u.a.createElement(W.a, {
								isPredictionsPage: o,
								listingName: s,
								sort: n,
								subreddit: r
							})
						}, this.memoizedGetInjectChildren = i()(e => {
							let {
								claimablePointsEnabled: t,
								inAwardListingExperiment: n,
								interestTopicRecommendations: r,
								isPopular: s,
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
								walletRegistrationBannerEnabled: E
							} = e;
							return () => {
								const e = {},
									y = Object(Le.c)(v),
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
									}), n && s && m === x.Z.AWARDED && (e[0] = {
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
									}), E && b && (e[1] = {
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
									}), !s && y && f !== x.mc.WEEK && a === ce.g.Large) {
									const t = Object(O.a)(h, x.Z.TOP, {
										t: x.mc.WEEK
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
								if (r) {
									const {
										interests: t,
										index: n
									} = r, {
										child: s,
										idx: o
									} = Object(qe.a)({
										children: e,
										desiredIdx: n,
										interests: t,
										sendEvent: l,
										variant: c
									});
									e[o] = s
								}
								return e
							}
						}, e => {
							let {
								isRpanDuVisible: t,
								sort: n,
								layout: r,
								listingKey: s,
								timeSort: o,
								subreddit: a
							} = e;
							return `rpan:${t}_s:${n}_l:${r}_lk${s}_ts:${o}_sr:${null==a?void 0:a.id}`
						}), this.state = {
							shouldShowNewPostPill: !1,
							isNewPostPillRenderedOnce: !1
						}, this.props.searchResultsServerQueryId.searchQueryId) {
						const {
							key: e,
							searchQueryId: t
						} = this.props.searchResultsServerQueryId;
						e && ze.a.set(Je.a.SERP, e, t), this.props.unsetSearchResultsServerQueryId()
					}
				}
				componentDidMount() {
					if (N.a.read(() => {
							const e = [Object(me.a)()];
							Object(k.d)(k.c.Subreddit, this.props.isLoggedIn, e)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						x.Pb.includes(e) && Object(he.a)(e)
					}
				}
				componentDidUpdate(e) {
					if (e.isFlairFilter && !this.props.isFlairFilter && Object(ue.c)(ue.a.SearchResults) && Object(ue.b)(ue.a.SearchResults), this.props.inResonatePilot) {
						const t = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						(e.subredditName ? e.subredditName.toLowerCase() : "") !== t && x.Pb.includes(t) && Object(he.a)(t)
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
						currentPage: r,
						isBlacklistedTopContentPage: s,
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
						listingKey: j,
						match: C,
						nsfwBlockingExperiment: N,
						pageLayer: k,
						renderNSFWContentGate: w,
						showCreatePostBanner: S,
						showSignupUpsell: I,
						sort: P,
						subreddit: T,
						subredditAboutInfo: F,
						subredditName: U,
						timeSort: W,
						topContent: V,
						topContentDiscoveryUnit: G,
						topPostsVariant: X
					} = this.props, te = this.memoizedGetInjectChildren(this.props), oe = Object(_e.b)(r), ie = Object(y.a)(U, {
						countryCode: null == oe ? void 0 : oe.countryCode,
						languageCode: null == oe ? void 0 : oe.languageCode
					}), le = U.toLowerCase(), ue = T && T.url ? T.url : Object(Ge.d)(`/r/${U}/`, null == oe ? void 0 : oe.countryCode, null == oe ? void 0 : oe.languageCode), me = Object(h.a)({
						countryCode: Ke.a,
						languageCode: Ke.b,
						hardcodedPath: ue,
						permalink: ue,
						subredditName: U
					}, t), he = {
						listingKey: j,
						listingName: le
					}, fe = Object(Le.a)(X), ge = Object(Le.b)(X), xe = Object(de.P)(k);
					let Ee;
					if (ie ? Ee = Object(E.a)(U) ? u.a.createElement(nt, he) : u.a.createElement(kt, he) : T && (Ee = xe ? u.a.createElement(D.a, {
							subredditId: T.id
						}) : u.a.createElement(re.a, et({}, he, {
							className: Xe.a.sidebar,
							subredditId: T.id,
							subredditName: U,
							topPostsVariant: X
						}))), (null == T ? void 0 : T.isNSFW) && N === Se.a.NoPreview) return u.a.createElement(ae.a, {
						contentTitle: Object(be.d)(U)
					});
					const ye = Object(pe.a)(e, w, U);
					if (ye && !p) return u.a.createElement(B.default, ye);
					const Oe = O === ce.g.Large,
						je = b,
						Ce = T ? T.id : void 0,
						Ne = !C.params.sort && V && !V.isSubscribed && V.postIds && V.postIds.length >= st && !v && !s && !fe && !ge,
						ke = {
							baseUrl: me,
							countrySort: n,
							sort: P,
							subredditId: Ce,
							timeSort: W
						},
						we = l ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Ie = T && T.subscribers;
					let Pe;
					const Te = window.URL;
					if (St(this.props)) {
						const e = new Te(f.a.snoovatarUrl + "/static/client/");
						e.searchParams.set("platform", "desktop"), Pe = u.a.createElement("iframe", {
							className: Object(g.a)(Xe.a.af),
							src: e.href
						})
					} else je ? Pe = u.a.createElement(Nt, {
						showCardView: this.props.layout === ce.g.Large
					}) : It(this.props) && this.props.subreddit && (Pe = u.a.createElement(rt, {
						baseUrl: f.a.layersUrl,
						subredditId: this.props.subreddit.id
					}));
					const Be = O === ce.g.Large && P !== x.Z.NEW && !xe && !ie,
						Ae = this.state.shouldShowNewPostPill && Be,
						Me = xe ? R.a : Z.a,
						Re = N === Se.a.Blurred && (null == T ? void 0 : T.isNSFW);
					return u.a.createElement(ne.a, {
						subredditId: Ce
					}, u.a.createElement(ve.a, {
						subredditId: Ce,
						className: Object(g.a)(Xe.a.Container, this.props.className),
						fitPageToContent: !0,
						navBar: !ie && u.a.Children.toArray([u.a.createElement(q.a, {
							headerText: T ? T.name : U,
							disableFullscreen: Oe,
							isTopBannerVariant: !0,
							key: "headerimage",
							shouldBlurHeaderImage: Re,
							subredditOrProfile: T,
							url: me
						}), u.a.createElement(L.a, {
							layout: O,
							key: "idtopbar",
							subreddit: T || void 0,
							subredditId: Ce,
							subredditName: U,
							subredditUrl: me
						}), d && u.a.createElement(K.a, null), Ce && u.a.createElement($.a, {
							key: "related-subreddit-carousel",
							subredditId: Ce
						})]),
						trendingUnit: Pe,
						content: u.a.createElement(u.a.Fragment, null, T && T.isQuarantined && u.a.createElement(J.a, {
							subredditName: U
						}), T && S && u.a.createElement(A.a, {
							subreddit: T,
							listingKey: j,
							listingName: le
						}), je && u.a.createElement(ee.a, {
							className: Xe.a.duHeader
						}, tt._("Popular posts", null, {
							hk: "Gfyj2"
						})), Ne && u.a.createElement(ct, {
							discoveryUnit: G,
							subredditName: T ? T.name : U,
							topContent: V,
							onCloseClick: this.onTopContentDismissed
						}), !ie && m && !(F && F.userIsBanned) && !xe && u.a.createElement(z.a, {
							subredditName: U
						}), !xe && u.a.createElement(H.a, ke), u.a.createElement(Q.a, null), u.a.createElement(se.a, {
							handlePillClick: this.props.refreshFeed,
							listingKey: j,
							subredditName: U,
							subscriberCount: Ie
						}), xe && u.a.createElement(M.a, {
							subreddit: T
						}), Ae && u.a.createElement(Y.a, {
							onClick: this.onNewPostPillClick,
							subredditName: U
						}), u.a.createElement(Me, {
							getInjectChildren: xe ? void 0 : te,
							isCommentCountAnimationEnabled: i,
							isVoteCountAnimationEnabled: _,
							isCountAnimShadowTestEnabled: c,
							listingKey: j,
							listingName: le,
							listingViewed: this.onViewed,
							triggerNewPostPill: Be ? this.renderNewPostPill : void 0,
							noPostsComponent: this.noPostsComponent,
							onLoadMore: we,
							onScroll: I,
							inSubredditOrProfile: !ie,
							disablePlaceholder: b && P === x.Z.AWARDED,
							isBlockingInterstitialEnabled: o || a
						})),
						sidebar: Ee
					}))
				}
			}
			t.default = it(jt(Object(oe.c)(Object(C.a)(Object(xe.d)(Pt)))))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(r.a)(i.k, i.Hb, (e, t) => {
					let {
						listingName: n
					} = t;
					return -1 === [o.R, "r/popular"].indexOf(n)
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(a.G)(e, n.replace(/^r\//, ""))
				}, (e, t, n, r) => {
					if (e && n && r) {
						return t.subreddit[r]
					}
					return t
				}),
				u = Object(r.a)(l, e => {
					if (!e) return !1;
					if (!e.rpanDuDismissalTime) return !1;
					return new Date(e.rpanDuDismissalTime).getTime() > Date.now() - 30 * s.C
				}),
				m = Object(r.a)(c.a, u, (e, t) => {
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
				}, (e, t, n, r, a, i) => {
					return ![o.R, "r/popular"].includes(n) && (i !== s.Z.AWARDED && (!!e && (!a.isPermanentlyCanceled && (!t && (!!r && r.show_discovery_unit)))))
				}),
				p = Object(r.a)((e, t) => {
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
				return C
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "h", (function() {
				return L
			})), n.d(t, "k", (function() {
				return B
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "f", (function() {
				return M
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
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				a = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = n("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = n.n(d)()(e => Object(s.a)(Object(r.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				x = e => e.publicAccessNetwork.hlsStreams,
				v = Object(r.a)(x, e => e.ended),
				E = Object(r.a)(x, e => e.removed),
				y = Object(r.a)(p, v, E, (e, t, n) => {
					const r = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const r = n.stream.state,
							s = R(r, a.a.ENDED) ? a.a.ENDED : r,
							o = n.stream.vod_accessible;
						return s === r && !0 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: s,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return n.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const r = n.stream.state,
							s = R(r, a.a.ENDED) ? a.a.ENDED : r,
							o = n.stream.vod_accessible;
						return s === r && !1 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: s,
									vod_accessible: !1
								}
							}
						}
					}, r)
				}),
				_ = (e, t) => {
					return y(e)[Object(o.g)(t)]
				},
				O = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n
				}, (e, t) => u(t.listingName)(e, t), y, b, i.h, (e, t, n, r, s) => {
					const i = [];
					if (e) {
						const t = Object(o.g)(e);
						n[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						l = new Set([...r, ...s]);
					return d.filter(e => {
						const t = n[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== a.a.KILLED && t.stream.state !== a.a.PURGED
					})
				}),
				j = Object(r.a)((e, t) => {
					let {
						count: n
					} = t;
					return n
				}, y, (e, t) => {
					let {
						listingName: n,
						streamIdFromPath: r
					} = t;
					return O(e, {
						listingName: n,
						streamIdFromPath: r
					})
				}, (e, t, n) => {
					const r = n.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				C = Object(r.a)(y, j, (e, t) => {
					const n = t[0];
					if (n) return e[n]
				}),
				N = Object(r.a)(g, (e, t) => {
					let {
						related: n,
						streamIdFromPath: r,
						subreddit: s
					} = t;
					return j(e, {
						listingName: n || s,
						streamIdFromPath: r
					})
				}, (e, t) => {
					const n = new Set(e),
						r = t.filter(e => !n.has(e));
					if (r.length) return r[0]
				}),
				k = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n
				}, y, (e, t) => {
					let {
						related: n,
						streamIdFromPath: r,
						subreddit: s
					} = t;
					return j(e, {
						listingName: n || s,
						streamIdFromPath: r
					})
				}, h, (e, t, n, r) => {
					if (!n.length) return;
					const s = n.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = s.find(e => e.stream.state === a.a.IS_LIVE);
					if (o) return o.post.id;
					const i = s.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				w = Object(s.a)(Object(r.a)(k, y, (e, t) => e ? t[e] : void 0)),
				S = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? Object(o.g)(n) : void 0
				}, k, b, i.h, (e, t) => {
					let {
						related: n,
						streamIdFromPath: r,
						subreddit: s
					} = t;
					return j(e, {
						listingName: n || s,
						streamIdFromPath: r
					})
				}, (e, t, n, r, s) => !e || n.includes(e) || r.includes(e) ? t || s[0] : e),
				I = Object(r.a)(f, g, N, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				P = Object(r.a)(f, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				T = Object(s.a)(Object(r.a)(S, y, (e, t) => e ? t[e] : void 0)),
				L = Object(s.a)(Object(r.a)(I, y, (e, t) => e ? t[e] : void 0)),
				B = Object(s.a)(Object(r.a)(P, y, (e, t) => e ? t[e] : void 0)),
				A = (Object(s.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, y, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => ({
					...t[n],
					preloadedPreviewUrl: e[n]
				})))), Object(r.a)(S, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				M = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? _(e, n) : void 0
				}, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function R(e, t) {
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
			const D = Object(r.a)(S, h, (e, t) => e && t.timestamps[e] || 0);
			var F;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(F || (F = {}));
			const U = Object(r.a)(S, y, m.b, (e, t, n) => {
					if (n) return F.INTRO;
					const r = e && t[e];
					if (!r) return F.UNAVAILABLE;
					const s = r.stream.state;
					return s === a.a.IS_LIVE || s === a.a.DISCONNECTED ? F.LIVE : s === a.a.ENDED && r.stream.vod_accessible ? F.VOD : F.UNAVAILABLE
				}),
				W = Object(r.a)(T, U, m.b, c.b, c.o, (e, t, n, r, s) => n ? r : e ? t === F.LIVE || t === F.VOD ? e.stream.hls_url : s : void 0),
				H = Object(r.a)(T, U, D, (e, t, n) => e ? t === F.LIVE ? e.broadcast_time : t === F.VOD && n < e.broadcast_time ? n : 0 : 0),
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
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				i = Object(r.a)(a, o.n, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(a, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + s.a > Date.now()
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/constants/postLayout.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => s.e[Object(o.S)(e, {})] === s.d.Card,
				c = e => Object(a.c)(e, {
					experimentEligibilitySelector: i,
					experimentName: r.yb
				}) === r.Kc.Treatment
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => {
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: o.Q,
						experimentName: r.kd
					});
					return !(!t || Object(r.og)(t))
				},
				i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: o.Q,
						experimentName: r.kd
					}) === r.Ld.ListingEnabled
				}
		},
		"./src/reddit/selectors/experiments/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => !0,
				u = Object(r.a)(d.X, d.O, (e, t) => !(e || t)),
				m = e => {
					if (!u(e)) return;
					const t = Object(a.c)(e, {
						experimentEligibilitySelector: l,
						experimentName: o.Zd,
						expEventOverride: !1
					});
					return null == t ? void 0 : t.toLocaleLowerCase()
				},
				p = e => {
					var t;
					const n = m(e);
					if (!n) return !1;
					let r = Object(c.r)(e),
						o = Object(c.d)(e);
					if ("undefined" != typeof window && !o) {
						const e = Object(i.a)("subreddit", window.location.href);
						(o = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (r = s.Qb.SUBREDDIT)
					}
					if (o && n) {
						const e = (null == o ? void 0 : o.toLocaleLowerCase()) === n;
						return r === s.Qb.SUBREDDIT && e
					}
					return !1
				},
				b = e => !!m(e) && Object(a.c)(e, {
					experimentEligibilitySelector: u,
					experimentName: o.ae,
					expEventOverride: !1
				}) !== o.be.Readonly
		},
		"./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = ["t5_395yw", "t5_2zkfk", "t5_3o3fz", "t5_2rzot", "t5_2w2lq", "t5_3ii04", "t5_3hn0l", "t5_2qh8h", "t5_3g6wm", "t5_3ntes", "t5_35aia", "t5_2r8ok", "t5_iygqf", "t5_2qutz", "t5_2qkhb", "t5_2r78m", "t5_2qkob", "t5_hwfuo", "t5_2tfgu", "t5_2u8vt", "t5_vnwft", "t5_3izzds", "t5_gofqg"],
				i = (e, t) => d(e) && c(t),
				c = e => a.includes(e),
				d = Object(r.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.ce
				}), e => e === s.Hd)
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
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const i = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.Yb,
					experimentEligibilitySelector: a.e
				}), e => e === s.ib.Enabled),
				c = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.Zb,
					experimentEligibilitySelector: a.e
				}), e => e === s.jb.Enabled),
				d = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.ac,
					experimentEligibilitySelector: a.e
				}), e => e === s.kb.Enabled),
				l = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.bc,
					experimentEligibilitySelector: a.e
				}), e => e === s.lb.Enabled),
				u = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.dc,
					experimentEligibilitySelector: a.e
				}), e => e === s.nb.Enabled),
				m = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.cc,
					experimentEligibilitySelector: a.e
				}), e => e === s.mb.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(s.c)(e, {
				experimentName: r.Be,
				experimentEligibilitySelector: s.a
			}) === r.Ke.Enabled
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
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/presence.ts"),
				i = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.s
					});
					return t === r.x.VoteCountOnly || t === r.x.CommentCountOnly || t === r.x.VoteAndCommentCount
				},
				l = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.s
					});
					return t === r.x.VoteCountOnly || t === r.x.VoteAndCommentCount
				},
				u = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.s
					});
					return t === r.x.CommentCountOnly || t === r.x.VoteAndCommentCount
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
					const s = e.posts.models[n];
					if (Object(i.d)(e) || !s || s.isSponsored || s.isScoreHidden || s.score >= c || Object(a.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: r.s
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.x.VoteCountOnly || l === r.x.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const s = e.posts.models[n];
					if (Object(i.d)(e) || !s || s.isSponsored || s.numComments >= c || Object(a.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: r.s
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.x.CommentCountOnly || l === r.x.VoteAndCommentCount
				},
				h = e => {
					if (Object(a.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.wc
					}) === r.Sc.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.Ye
				}) === r.Hd
			}
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/meta.ts");
			const a = e => Object(s.c)(e, {
				experimentEligibilitySelector: e => !Object(o.d)(e) && "US" === Object(o.b)(e),
				experimentName: r.nf
			}) === r.uf.Enabled
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
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/meta.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(r.a)(a.h, a.d, i.e, (e, t, n) => !e && !t && !n);

			function d(e, t) {
				return n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[s.Mc.Bottom_cell_dismissible]: e,
						[s.Mc.Bottom_cell_dismissible_immediate_trigger]: e,
						[s.Mc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(s.Gb, !0),
				u = d(s.Hb, !0),
				m = d(s.Ib, !0),
				p = d(s.Gb, !1),
				b = d(s.Hb, !1),
				h = d(s.Ib, !1)
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
				return E
			})), n.d(t, "d", (function() {
				return y
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(a.W)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(r.a)((e, t) => {
					const n = p(e, t);
					if (!n) return u;
					const r = Object(a.ab)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(a.W)(e, {
						subredditId: n
					}) : null
				},
				b = (e, t, n, r, s) => {
					const a = s.find(e => e <= t) || -1,
						i = s.find(e => e > t) || 1 / 0;
					return t !== i && t !== a && (!(a + n > t) && (!(t + n > i) && !((e, t, n) => {
						const r = n[t - 1],
							s = n[t],
							a = s && Object(o.G)(e, {
								postId: r
							}) || null,
							i = s && Object(o.G)(e, {
								postId: s
							}) || null;
						return a && a.isSponsored || i && i.isSponsored
					})(e, t, r)))
				},
				h = [3],
				f = Object(r.a)((e, t) => {
					let {
						existingDUPositions: n,
						listingProps: r
					} = t;
					const s = n.slice().sort();
					let a = -1;
					const i = Object(o.z)(e, {
							listingKey: r.listingKey
						}),
						c = [];
					return h.forEach(t => {
						let n = a + t;
						if (!(n >= i.length)) {
							for (; n < i.length && !b(e, n, t, i, s);) n += 1;
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
				E = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(i.P)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						r = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/reddit/selectors/newPostPill.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/postLayout.ts"),
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
				return n === s.g.Large && a !== r.Z.NEW && c >= 20
			})(e, t) ? 10 : -1
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => e.searchQueryId
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
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			const i = e => s.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: r.Hf
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === r.Of.SmIcon || t === r.Of.SmIconHc
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
					const r = Object(a.ab)(e, {
						subredditName: n
					});
					return (r && r.postIds || []).slice(0, 2)
				}
		},
		"./src/reddit/selectors/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = e => Object.keys(e.trending.models).reduce((t, n) => [...t, ...e.trending.models[n]], []),
				s = (e, t) => e.trending.models[t] || []
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
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
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const o = e => {
					if (a(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(s.c)(e)) || !!t
				},
				a = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== r.Qb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./src/lib/fastdom/index.ts"),
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
						e.detail && (t = e.detail.name, console.warn(a, `${r.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(a, `${r.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const r = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(r), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(r)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					s.a.read(() => {
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
			e.exports = JSON.parse('{"id":"487b662c2260"}')
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"92790c69eba6"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit.09cc253b11c38fbf11c9.js.map