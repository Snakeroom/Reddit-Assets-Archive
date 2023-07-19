// https://www.redditstatic.com/desktop2x/Subreddit.4dd858919931c9f5317e.js
// Retrieved at 7/19/2023, 12:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "Governance~ModListing~Reddit~ReportFlow", "Governance~ModListing~Reddit", "ModListing~Reddit~StandalonePostPage", "reddit-components-Econ-PredictionLeaderboard-Sidebar"], {
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
				o = Object.keys(i).reduce((e, t) => (s.has(t) && (e[t] = i[t]), e), {}),
				a = Object.keys(o).reduce((e, t) => {
					const n = o[t];
					return n && n.forEach(n => {
						e[n] = t
					}), e
				}, {});
			t.isoLocaleToR2Language = e => a[e], t.toISOLocale = e => {
				if (!e) return;
				const t = e.match(/^([a-zA-Z]{2,4})(?:[-_]([a-zA-Z]{2,4}))?$/);
				if (!t) return;
				const n = t[1];
				if (!n) return;
				let r = n.toLowerCase();
				const s = t[2];
				return s && (r = `${r}-${s.toUpperCase()}`), r
			};
			const c = new Set(Object.keys(a));
			t.isISOLocaleSupported = e => !!e && c.has(e), t.isPseudoLocale = e => !!e && (e === r.PSEUDO_AUTO || Object.values(r.PseudoLocale).includes(e))
		},
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-dom/index.js"),
				o = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, r) {
					return a(e[r], t[r])
				})) : e !== t
			}
			var c = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, r = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!o.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							r = void 0 === n ? "0px" : n,
							s = t[1],
							i = void 0 === s ? r : s,
							a = t[2],
							c = void 0 === a ? r : a,
							d = t[3];
						return r + " " + i + " " + c + " " + (void 0 === d ? i : d)
					}(e.rootMargin), s = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], i = c.keys(); t = i.next().value;) {
					if (!(n !== t.root || r !== t.rootMargin || a(s, t.thresholds))) return t
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
				f = {},
				h = Object.create(null, {
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

			function _(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var v = ["root", "rootMargin", "threshold"],
				x = ["root", "rootMargin", "threshold", "disabled"],
				y = Object.prototype,
				E = y.hasOwnProperty,
				O = y.toString,
				j = function(e) {
					return v.reduce((function(t, n) {
						if (E.call(e, n)) {
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
						return _(g(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), _(g(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var r = n.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(i.findDOMNode)(e)
						})), _(g(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = m(j(t.props)), t.target = t.targetNode, e = g(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), _(g(t), "unobserve", (function(e) {
							! function(e, t) {
								if (c.has(e.observer)) {
									var n = c.get(e.observer);
									n.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), c.delete(e.observer)))
								}
							}(g(t), e)
						})), _(g(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var o = r.prototype;
					return o.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = x.some((function(n) {
							return a(t.props[n], e[n])
						}));
						return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n
					}, o.componentDidUpdate = function(e, t, n) {
						var r = !1;
						n || (r = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (n || r) && this.observe()
					}, o.componentDidMount = function() {
						this.observe()
					}, o.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, o.render = function() {
						var e = this.props.children;
						return null != e ? s.a.cloneElement(s.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(s.a.Component);
			_(C, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function i() {}
			i.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, i, o) {
					if (o !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
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
					checkPropTypes: i,
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

				function i(e, t) {
					i.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
						value: t,
						enumerable: !0
					})
				}

				function o(e, t) {
					o.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
						value: t,
						enumerable: !0
					})
				}

				function a(e, t, n) {
					a.super_.call(this, "A", e), Object.defineProperty(this, "index", {
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
					var f = (c = c || []).slice(0);
					if (null != l) {
						if (r) {
							if ("function" == typeof r && r(f, l)) return;
							if ("object" == typeof r) {
								if (r.prefilter && r.prefilter(f, l)) return;
								if (r.normalize) {
									var h = r.normalize(f, l, e, t);
									h && (e = h[0], t = h[1])
								}
							}
						}
						f.push(l)
					}
					"regexp" === d(e) && "regexp" === d(t) && (e = e.toString(), t = t.toString());
					var g, _, v, x, y = typeof e,
						E = typeof t,
						O = "undefined" !== y || p && p.length > 0 && p[p.length - 1].lhs && Object.getOwnPropertyDescriptor(p[p.length - 1].lhs, l),
						j = "undefined" !== E || p && p.length > 0 && p[p.length - 1].rhs && Object.getOwnPropertyDescriptor(p[p.length - 1].rhs, l);
					if (!O && j) n.push(new i(f, t));
					else if (!j && O) n.push(new o(f, e));
					else if (d(e) !== d(t)) n.push(new s(f, e, t));
					else if ("date" === d(e) && e - t != 0) n.push(new s(f, e, t));
					else if ("object" === y && null !== e && null !== t) {
						for (g = p.length - 1; g > -1; --g)
							if (p[g].lhs === e) {
								x = !0;
								break
							} if (x) e !== t && n.push(new s(f, e, t));
						else {
							if (p.push({
									lhs: e,
									rhs: t
								}), Array.isArray(e)) {
								for (b && (e.sort((function(e, t) {
										return u(e) - u(t)
									})), t.sort((function(e, t) {
										return u(e) - u(t)
									}))), g = t.length - 1, _ = e.length - 1; g > _;) n.push(new a(f, g, new i(void 0, t[g--])));
								for (; _ > g;) n.push(new a(f, _, new o(void 0, e[_--])));
								for (; g >= 0; --g) m(e[g], t[g], n, r, f, g, p, b)
							} else {
								var C = Object.keys(e),
									I = Object.keys(t);
								for (g = 0; g < C.length; ++g) v = C[g], (x = I.indexOf(v)) >= 0 ? (m(e[v], t[v], n, r, f, v, p, b), I[x] = null) : m(e[v], void 0, n, r, f, v, p, b);
								for (g = 0; g < I.length; ++g)(v = I[g]) && m(void 0, t[v], n, r, f, v, p, b)
							}
							p.length = p.length - 1
						}
					} else e !== t && ("number" === y && isNaN(e) && isNaN(t) || n.push(new s(f, e, t)))
				}

				function p(e, t, n, r, s) {
					var i = [];
					if (m(e, t, i, r, null, null, null, s), n)
						for (var o = 0; o < i.length; ++o) n(i[o]);
					return i
				}

				function b(e, t, n, r) {
					var s = p(e, t, r ? function(e) {
						e && r.push(e)
					} : void 0, n);
					return r || (s.length ? s : void 0)
				}

				function f(e, n, r) {
					if (void 0 === r && n && ~t.indexOf(n.kind) && (r = n), e && r && r.kind) {
						for (var s = e, i = -1, o = r.path ? r.path.length - 1 : 0; ++i < o;) void 0 === s[r.path[i]] && (s[r.path[i]] = void 0 !== r.path[i + 1] && "number" == typeof r.path[i + 1] ? [] : {}), s = s[r.path[i]];
						switch (r.kind) {
							case "A":
								r.path && void 0 === s[r.path[i]] && (s[r.path[i]] = []),
									function e(t, n, r) {
										if (r.path && r.path.length) {
											var s, i = t[n],
												o = r.path.length - 1;
											for (s = 0; s < o; s++) i = i[r.path[s]];
											switch (r.kind) {
												case "A":
													e(i[r.path[s]], r.index, r.item);
													break;
												case "D":
													delete i[r.path[s]];
													break;
												case "E":
												case "N":
													i[r.path[s]] = r.rhs
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
									}(r.path ? s[r.path[i]] : s, r.index, r.item);
								break;
							case "D":
								delete s[r.path[i]];
								break;
							case "E":
							case "N":
								s[r.path[i]] = r.rhs
						}
					}
				}
				return n(s, r), n(i, r), n(o, r), n(a, r), Object.defineProperties(b, {
					diff: {
						value: b,
						enumerable: !0
					},
					orderIndependentDiff: {
						value: function(e, t, n, r) {
							var s = r ? function(e) {
									e && r.push(e)
								} : void 0,
								i = p(e, t, s, n, !0);
							return r || (i.length ? i : void 0)
						},
						enumerable: !0
					},
					observableDiff: {
						value: p,
						enumerable: !0
					},
					orderIndependentObservableDiff: {
						value: function(e, t, n, r, s, i, o) {
							return m(e, t, n, r, s, i, o, !0)
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
								n && !n(e, t, r) || f(e, t, r)
							}))
						},
						enumerable: !0
					},
					applyChange: {
						value: f,
						enumerable: !0
					},
					revertChange: {
						value: function(e, t, n) {
							if (e && t && n && n.kind) {
								var r, s, i = e;
								for (s = n.path.length - 1, r = 0; r < s; r++) void 0 === i[n.path[r]] && (i[n.path[r]] = {}), i = i[n.path[r]];
								switch (n.kind) {
									case "A":
										! function e(t, n, r) {
											if (r.path && r.path.length) {
												var s, i = t[n],
													o = r.path.length - 1;
												for (s = 0; s < o; s++) i = i[r.path[s]];
												switch (r.kind) {
													case "A":
														e(i[r.path[s]], r.index, r.item);
														break;
													case "D":
													case "E":
														i[r.path[s]] = r.lhs;
														break;
													case "N":
														delete i[r.path[s]]
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
										}(i[n.path[r]], n.index, n.item);
										break;
									case "D":
									case "E":
										i[n.path[r]] = n.lhs;
										break;
									case "N":
										delete i[n.path[r]]
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
				i = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return i(s(e), r(t, 0, e.length))
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
				i = n("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var n = i(e);
				return s(n, r(t, 0, n.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					s = e.length,
					i = s - 1;
				for (t = void 0 === t ? s : t; ++n < t;) {
					var o = r(n, i),
						a = e[o];
					e[o] = e[n], e[n] = a
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFindIndex.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				o = Math.max,
				a = Math.min;
			e.exports = function(e, t, n) {
				var c = null == e ? 0 : e.length;
				if (!c) return -1;
				var d = c - 1;
				return void 0 !== n && (d = i(n), d = n < 0 ? o(c + d, 0) : a(d, c - 1)), r(e, s(t, 3), d, !0)
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arraySampleSize.js"),
				s = n("./node_modules/lodash/_baseSampleSize.js"),
				i = n("./node_modules/lodash/isArray.js"),
				o = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return t = (n ? o(e, t, n) : void 0 === t) ? 1 : a(t), (i(e) ? r : s)(e, t)
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
				i = n("./node_modules/lodash/_baseXor.js"),
				o = n("./node_modules/lodash/isArrayLikeObject.js"),
				a = s((function(e) {
					return i(r(e, o))
				}));
			e.exports = a
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/chat/controls/Svg/index.m.less"),
				c = n.n(a);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: o
					} = e;
				return s.a.createElement("svg", {
					className: Object(i.a)(e.className, {
						[c.a.disable]: n,
						[c.a.active]: r,
						[c.a.hover]: !!o
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
				return i
			}));
			var r = n("./src/reddit/constants/elementIds.ts");
			const s = () => {
					const e = document.getElementById(r.a);
					e && (e.style.filter = "blur(10px)")
				},
				i = () => {
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
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/asModal/helpers.ts"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/FocusTrap/index.ts"),
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
			const f = e => {
				let {
					className: t,
					shouldBlurBackground: n,
					isVisible: r,
					...i
				} = e;
				return s.a.createElement("div", b({
					className: Object(o.a)(p.a.overlay, t, {
						[p.a.mIsVisible]: r,
						[p.a.mIsBlurred]: n
					})
				}, i))
			};

			function h(e) {
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
						}), Object(u.a)(), this.ref && (this.focusTrap = new a.b(this.ref), this.focusTrap.activate()), this.props.shouldBlurBackground && Object(i.a)()
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(u.b)(), Object(d.d)(), this.focusTrap && this.focusTrap.deactivate(), this.props.shouldBlurBackground && Object(i.b)()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: r,
							onOverlayClick: i,
							overlayClassName: a,
							overlayCustomStyles: d,
							shouldBlurBackground: u,
							withOverlay: m,
							...b
						} = t, h = b;
						return s.a.createElement(c.a, {
							container: document.getElementById(l.b)
						}, s.a.createElement(f, {
							className: a,
							isVisible: m,
							onClick: this.onOverlayClick,
							shouldBlurBackground: u,
							style: d
						}, s.a.createElement("div", {
							"aria-modal": !0,
							className: Object(o.a)(p.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, s.a.createElement(e, h))))
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
		"./src/higherOrderComponents/withLSWatcher.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/contentGate.ts"),
				a = n("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userPrefs.ts");
			const l = 3e4;
			let u;

			function m(e) {
				return t => {
					const n = Object(i.f)().getState(),
						m = Object(i.d)(),
						p = Object(d.a)(n),
						b = Object(c.S)(n),
						f = Object(a.c)(n),
						h = () => {
							Object(a.b)() && (m(o.o({
								over18: !1
							})), u && window.clearInterval(u))
						};
					return Object(r.useEffect)(() => (!b && f.isNewDesignVariant && p && (u = window.setInterval(h, l), h()), () => window.clearInterval(u)), [f.isNewDesignVariant, h, b, p]), s.a.createElement(e, t)
				}
			}
		},
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function a(e) {
				const t = t => s.a.createElement(i.b.Consumer, null, n => s.a.createElement(e, o({
					theme: n
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
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
					const i = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[i] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof r ? t : new r(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					n.next = s, n.prev = s.prev, s.prev = n, n.prev && (n.prev.next = n);
					const i = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[i] = n, this.length++
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
		"./src/lib/assertNever.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				throw new Error(`Unexpected object: ${e}`)
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/lib/colors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			}));
			const r = "#000",
				s = "#FFF",
				i = "#FF4500",
				o = "#0079D3",
				a = "#46D160",
				c = {
					black: r,
					white: s,
					orangered: i,
					alienblue: o,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: "#24A0ED",
					secondary: "#006CBF",
					upvote: i,
					downvote: "#7193FF",
					positive: a,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: i,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: i,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				d = {
					...c,
					tone1: "#D7DADC",
					tone2: "#818384",
					tone3: "#565758",
					tone4: "#3A3A3C",
					tone5: "#272729",
					tone6: "#1A1A1B",
					tone7: "#121213",
					primary: "#006CBF",
					secondary: "#24A0ED",
					coins: "#FFE600",
					spoiler: "#D7DADC"
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
		"./src/lib/constants/icons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = {
				activity: "activity",
				activity_fill: "activity_fill",
				add: "add",
				add_fill: "add_fill",
				add_media: "add_media",
				add_media_fill: "add_media_fill",
				add_to_feed: "add_to_feed",
				add_to_feed_fill: "add_to_feed_fill",
				admin: "admin",
				admin_fill: "admin_fill",
				all: "all",
				all_fill: "all_fill",
				appearance: "appearance",
				appearance_fill: "appearance_fill",
				approve: "approve",
				approve_fill: "approve_fill",
				archived: "archived",
				archived_fill: "archived_fill",
				aspect_ratio: "aspect_ratio",
				aspect_ratio_fill: "aspect_ratio_fill",
				aspect_rectangle: "aspect_rectangle",
				aspect_rectangle_fill: "aspect_rectangle_fill",
				attach: "attach",
				attach_fill: "attach_fill",
				audio: "audio",
				audio_fill: "audio_fill",
				author: "author",
				author_fill: "author_fill",
				avatar_style: "avatar_style",
				avatar_style_fill: "avatar_style_fill",
				award: "award",
				award_fill: "award_fill",
				back: "back",
				back_fill: "back_fill",
				ban: "ban",
				ban_fill: "ban_fill",
				best: "best",
				best_fill: "best_fill",
				block: "block",
				block_fill: "block_fill",
				bold: "bold",
				bold_fill: "bold_fill",
				bot: "bot",
				bot_fill: "bot_fill",
				bounce: "bounce",
				bounce_fill: "bounce_fill",
				browse: "browse",
				browse_fill: "browse_fill",
				browser: "browser",
				browser_fill: "browser_fill",
				cake: "cake",
				cake_fill: "cake_fill",
				calendar: "calendar",
				camera: "camera",
				camera_fill: "camera_fill",
				campaign: "campaign",
				caret_down: "caret_down",
				caret_down_fill: "caret_down_fill",
				caret_left: "caret_left",
				caret_left_fill: "caret_left_fill",
				caret_right: "caret_right",
				caret_right_fill: "caret_right_fill",
				caret_up: "caret_up",
				caret_up_fill: "caret_up_fill",
				chat: "chat",
				chat_fill: "chat_fill",
				chat_group: "chat_group",
				chat_group_fill: "chat_group_fill",
				chat_new: "chat_new",
				chat_new_fill: "chat_new_fill",
				checkbox: "checkbox",
				checkbox_dismiss: "checkbox_dismiss",
				checkbox_dismiss_fill: "checkbox_dismiss_fill",
				checkbox_fill: "checkbox_fill",
				checkmark: "checkmark",
				checkmark_fill: "checkmark_fill",
				chrome: "chrome",
				chrome_fill: "chrome_fill",
				clear: "clear",
				clear_fill: "clear_fill",
				close: "close",
				close_fill: "close_fill",
				closed_captioning: "closed_captioning",
				closed_captioning_fill: "closed_captioning_fill",
				code_block: "code_block",
				code_block_fill: "code_block_fill",
				code_inline: "code_inline",
				code_inline_fill: "code_inline_fill",
				coins: "coins",
				coins_fill: "coins_fill",
				coins_outline_color: "coins_outline_color",
				collapse: "collapse",
				collapse_fill: "collapse_fill",
				collection: "collection",
				collection_fill: "collection_fill",
				comment: "comment",
				comment_fill: "comment_fill",
				comments: "comments",
				comments_fill: "comments_fill",
				community: "community",
				community_fill: "community_fill",
				controversial: "controversial",
				controversial_fill: "controversial_fill",
				crop: "crop",
				crop_fill: "crop_fill",
				crosspost: "crosspost",
				crosspost_fill: "crosspost_fill",
				crowd_control: "crowd_control",
				crowd_control_fill: "crowd_control_fill",
				custom_feed: "custom_feed",
				custom_feed_fill: "custom_feed_fill",
				customize: "customize",
				customize_fill: "customize_fill",
				day: "day",
				day_fill: "day_fill",
				delete: "delete",
				delete_fill: "delete_fill",
				discover: "discover",
				discover_fill: "discover_fill",
				dismiss_all: "dismiss_all",
				dismiss_all_fill: "dismiss_all_fill",
				distinguish: "distinguish",
				distinguish_fill: "distinguish_fill",
				down: "down",
				down_fill: "down_fill",
				download: "download",
				download_fill: "download_fill",
				downvote: "downvote",
				downvote_fill: "downvote_fill",
				downvotes: "downvotes",
				downvotes_fill: "downvotes_fill",
				drag: "drag",
				duplicate: "duplicate",
				duplicate_fill: "duplicate_fill",
				edit: "edit",
				edit_fill: "edit_fill",
				effect: "effect",
				effect_fill: "effect_fill",
				embed: "embed",
				embed_fill: "embed_fill",
				emoji: "emoji",
				emoji_fill: "emoji_fill",
				expand: "expand",
				expand_fill: "expand_fill",
				external_link: "external_link",
				external_link_fill: "external_link_fill",
				feed_posts: "feed_posts",
				feed_posts_fill: "feed_posts_fill",
				feed_video: "feed_video",
				feed_video_fill: "feed_video_fill",
				filter: "filter",
				filter_fill: "filter_fill",
				format: "format",
				format_fill: "format_fill",
				forward: "forward",
				forward_fill: "forward_fill",
				gif_post: "gif_post",
				gif_post_fill: "gif_post_fill",
				heart: "heart",
				heart_fill: "heart_fill",
				help: "help",
				help_fill: "help_fill",
				hide: "hide",
				hide_fill: "hide_fill",
				history: "history",
				history_fill: "history_fill",
				home: "home",
				home_fill: "home_fill",
				hot: "hot",
				hot_fill: "hot_fill",
				ignore_reports: "ignore_reports",
				ignore_reports_fill: "ignore_reports_fill",
				image_post: "image_post",
				image_post_fill: "image_post_fill",
				info: "info",
				info_fill: "info_fill",
				italic: "italic",
				italic_fill: "italic_fill",
				join: "join",
				join_fill: "join_fill",
				joined: "joined",
				joined_fill: "joined_fill",
				jump_down: "jump_down",
				jump_down_fill: "jump_down_fill",
				jump_up: "jump_up",
				jump_up_fill: "jump_up_fill",
				karma: "karma",
				karma_fill: "karma_fill",
				keyboard: "keyboard",
				keyboard_fill: "keyboard_fill",
				kick: "kick",
				kick_fill: "kick_fill",
				leave: "leave",
				leave_fill: "leave_fill",
				left: "left",
				left_fill: "left_fill",
				link_post: "link_post",
				link_post_fill: "link_post_fill",
				list_bulleted: "list_bulleted",
				list_bulleted_fill: "list_bulleted_fill",
				list_numbered: "list_numbered",
				list_numbered_fill: "list_numbered_fill",
				live: "live",
				live_fill: "live_fill",
				load: "load",
				location: "location",
				location_fill: "location_fill",
				lock: "lock",
				lock_fill: "lock_fill",
				logout: "logout",
				logout_fill: "logout_fill",
				loop: "loop",
				loop_fill: "loop_fill",
				mark_read: "mark_read",
				mark_read_fill: "mark_read_fill",
				mask: "mask",
				mask_fill: "mask_fill",
				media_gallery: "media_gallery",
				media_gallery_fill: "media_gallery_fill",
				meme: "meme",
				meme_fill: "meme_fill",
				menu: "menu",
				menu_fill: "menu_fill",
				message: "message",
				message_fill: "message_fill",
				mod: "mod",
				mod_fill: "mod_fill",
				mod_mail: "mod_mail",
				mod_mail_fill: "mod_mail_fill",
				mod_mode: "mod_mode",
				mod_mode_fill: "mod_mode_fill",
				mod_mute: "mod_mute",
				mod_mute_fill: "mod_mute_fill",
				mod_overflow: "mod_overflow",
				mod_overflow_fill: "mod_overflow_fill",
				mod_queue: "mod_queue",
				mod_queue_fill: "mod_queue_fill",
				mod_unmute: "mod_unmute",
				mod_unmute_fill: "mod_unmute_fill",
				new: "new",
				new_fill: "new_fill",
				night: "night",
				night_fill: "night_fill",
				notification: "notification",
				notification_fill: "notification_fill",
				notification_frequent: "notification_frequent",
				notification_frequent_fill: "notification_frequent_fill",
				notification_off: "notification_off",
				notification_off_fill: "notification_off_fill",
				nsfw: "nsfw",
				nsfw_fill: "nsfw_fill",
				nsfw_language: "nsfw_language",
				nsfw_language_fill: "nsfw_language_fill",
				nsfw_violence: "nsfw_violence",
				nsfw_violence_fill: "nsfw_violence_fill",
				original: "original",
				original_fill: "original_fill",
				overflow_carat: "overflow_carat",
				overflow_carat_fill: "overflow_carat_fill",
				overflow_horizontal: "overflow_horizontal",
				overflow_vertical: "overflow_vertical",
				pause: "pause",
				pause_fill: "pause_fill",
				payment: "payment",
				payment_fill: "payment_fill",
				peace: "peace",
				peace_fill: "peace_fill",
				pending_posts: "pending_posts",
				pending_posts_fill: "pending_posts_fill",
				pin: "pin",
				pin_fill: "pin_fill",
				play: "play",
				play_fill: "play_fill",
				poll_post: "poll_post",
				poll_post_fill: "poll_post_fill",
				popular: "popular",
				popular_fill: "popular_fill",
				prediction: "prediction",
				prediction_fill: "prediction_fill",
				premium: "premium",
				premium_fill: "premium_fill",
				privacy: "privacy",
				privacy_fill: "privacy_fill",
				profile: "profile",
				profile_fill: "profile_fill",
				promote_snoo: "promote_snoo",
				qr_code: "qr_code",
				quarantined: "quarantined",
				quarantined_fill: "quarantined_fill",
				quote: "quote",
				quote_fill: "quote_fill",
				r_slash: "r_slash",
				r_slash_fill: "r_slash_fill",
				radio_button: "radio_button",
				radio_button_fill: "radio_button_fill",
				random: "random",
				random_fill: "random_fill",
				rating_drugs: "rating_drugs",
				rating_everyone: "rating_everyone",
				rating_mature: "rating_mature",
				rating_nsfw: "rating_nsfw",
				rating_violence: "rating_violence",
				refresh: "refresh",
				refresh_fill: "refresh_fill",
				remove: "remove",
				remove_fill: "remove_fill",
				reply: "reply",
				reply_fill: "reply_fill",
				report: "report",
				report_fill: "report_fill",
				reverse: "reverse",
				reverse_fill: "reverse_fill",
				right: "right",
				right_fill: "right_fill",
				rising: "rising",
				rising_fill: "rising_fill",
				rotate: "rotate",
				rotate_fill: "rotate_fill",
				rules: "rules",
				rules_fill: "rules_fill",
				safari: "safari",
				safari_fill: "safari_fill",
				save: "save",
				save_fill: "save_fill",
				saved: "saved",
				saved_fill: "saved_fill",
				scheduled: "scheduled",
				scheduled_fill: "scheduled_fill",
				search: "search",
				search_fill: "search_fill",
				self: "self",
				self_fill: "self_fill",
				send: "send",
				send_fill: "send_fill",
				settings: "settings",
				settings_fill: "settings_fill",
				share: "share",
				share_android: "share_android",
				share_android_fill: "share_android_fill",
				share_fill: "share_fill",
				share_ios: "share_ios",
				share_ios_fill: "share_ios_fill",
				show: "show",
				show_fill: "show_fill",
				side_menu: "side_menu",
				side_menu_fill: "side_menu_fill",
				skipback10: "skipback10",
				skipback10_fill: "skipback10_fill",
				skipforward10: "skipforward10",
				skipforward10_fill: "skipforward10_fill",
				sort: "sort",
				sort_fill: "sort_fill",
				spam: "spam",
				spam_fill: "spam_fill",
				spoiler: "spoiler",
				spoiler_fill: "spoiler_fill",
				sponsored: "sponsored",
				sponsored_fill: "sponsored_fill",
				star: "star",
				star_fill: "star_fill",
				statistics: "statistics",
				statistics_fill: "statistics_fill",
				sticker: "sticker",
				sticker_fill: "sticker_fill",
				strikethrough: "strikethrough",
				strikethrough_fill: "strikethrough_fill",
				subtract: "subtract",
				subtract_fill: "subtract_fill",
				superscript: "superscript",
				superscript_fill: "superscript_fill",
				swipe_back: "swipe_back",
				swipe_back_fill: "swipe_back_fill",
				swipe_down: "swipe_down",
				swipe_down_fill: "swipe_down_fill",
				swipe_forward: "swipe_forward",
				swipe_forward_fill: "swipe_forward_fill",
				swipe_up: "swipe_up",
				swipe_up_fill: "swipe_up_fill",
				table: "table",
				table_fill: "table_fill",
				tag: "tag",
				tag_fill: "tag_fill",
				tap: "tap",
				tap_fill: "tap_fill",
				text_post: "text_post",
				text_post_fill: "text_post_fill",
				text_size: "text_size",
				text_size_fill: "text_size_fill",
				top: "top",
				top_fill: "top_fill",
				topic: "topic",
				topic_activism: "topic_activism",
				topic_addiction_support: "topic_addiction_support",
				topic_advice: "topic_advice",
				topic_animals: "topic_animals",
				topic_anime: "topic_anime",
				topic_art: "topic_art",
				topic_beauty: "topic_beauty",
				topic_business: "topic_business",
				topic_careers: "topic_careers",
				topic_cars: "topic_cars",
				topic_celebrity: "topic_celebrity",
				topic_crafts: "topic_crafts",
				topic_crypto: "topic_crypto",
				topic_culture: "topic_culture",
				topic_diy: "topic_diy",
				topic_entertainment: "topic_entertainment",
				topic_ethics: "topic_ethics",
				topic_family: "topic_family",
				topic_fashion: "topic_fashion",
				topic_fitness: "topic_fitness",
				topic_food: "topic_food",
				topic_funny: "topic_funny",
				topic_gender: "topic_gender",
				topic_health: "topic_health",
				topic_help: "topic_help",
				topic_history: "topic_history",
				topic_internet: "topic_internet",
				topic_law: "topic_law",
				topic_learning: "topic_learning",
				topic_lifestyle: "topic_lifestyle",
				topic_mature: "topic_mature",
				topic_mensfashion: "topic_mensfashion",
				topic_menshealth: "topic_menshealth",
				topic_meta: "topic_meta",
				topic_military: "topic_military",
				topic_movies: "topic_movies",
				topic_music: "topic_music",
				topic_news: "topic_news",
				topic_other: "topic_other",
				topic_outdoors: "topic_outdoors",
				topic_pets: "topic_pets",
				topic_photography: "topic_photography",
				topic_places: "topic_places",
				topic_politics: "topic_politics",
				topic_programming: "topic_programming",
				topic_reading: "topic_reading",
				topic_reading_fill: "topic_reading_fill",
				topic_religion: "topic_religion",
				topic_science: "topic_science",
				topic_sexorientation: "topic_sexorientation",
				topic_sports: "topic_sports",
				topic_style: "topic_style",
				topic_tabletop: "topic_tabletop",
				topic_technology: "topic_technology",
				topic_television: "topic_television",
				topic_traumasupport: "topic_traumasupport",
				topic_travel: "topic_travel",
				topic_videogaming: "topic_videogaming",
				topic_womenshealth: "topic_womenshealth",
				trim: "trim",
				trim_fill: "trim_fill",
				trophy: "trophy",
				trophy_fill: "trophy_fill",
				u_slash: "u_slash",
				u_slash_fill: "u_slash_fill",
				unban: "unban",
				unban_fill: "unban_fill",
				undo: "undo",
				undo_fill: "undo_fill",
				unheart: "unheart",
				unlock: "unlock",
				unlock_fill: "unlock_fill",
				unmod: "unmod",
				unmod_fill: "unmod_fill",
				unpin: "unpin",
				unpin_fill: "unpin_fill",
				unverified: "unverified",
				unverified_fill: "unverified_fill",
				up: "up",
				up_fill: "up_fill",
				upload: "upload",
				upload_fill: "upload_fill",
				upvote: "upvote",
				upvote_fill: "upvote_fill",
				upvotes: "upvotes",
				upvotes_fill: "upvotes_fill",
				user: "user",
				user_fill: "user_fill",
				user_note: "user_note",
				user_note_fill: "user_note_fill",
				vault: "vault",
				vault_fill: "vault_fill",
				verified: "verified",
				verified_fill: "verified_fill",
				video_camera: "video_camera",
				video_camera_fill: "video_camera_fill",
				video_post: "video_post",
				video_post_fill: "video_post_fill",
				view_card: "view_card",
				view_card_fill: "view_card_fill",
				view_classic: "view_classic",
				view_classic_fill: "view_classic_fill",
				view_compact: "view_compact",
				view_compact_fill: "view_compact_fill",
				view_grid_fill: "view_grid_fill",
				view_grid_fill_1: "view_grid_fill_1",
				views: "views",
				views_fill: "views_fill",
				volume: "volume",
				volume_fill: "volume_fill",
				volume_mute: "volume_mute",
				volume_mute_fill: "volume_mute_fill",
				wiki: "wiki",
				wiki_fill: "wiki_fill",
				wiki_ban: "wiki_ban",
				wiki_ban_fill: "wiki_ban_fill",
				wiki_unban: "wiki_unban",
				wiki_unban_fill: "wiki_unban_fill",
				world: "world",
				world_fill: "world_fill"
			}
		},
		"./src/lib/formatApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");

			function i(e, t) {
				return e ? e.fields && e.fields.length ? e.fields.map(e => e.msg).join(", ") : e.type && o[e.type] ? o[e.type]() : 401 === t ? r.fbt._("There was an authentication error", null, {
					hk: "2KZTRv"
				}) : r.fbt._("Something went wrong", null, {
					hk: "3i6szH"
				}) : ""
			}
			const o = {
				[s.k]: () => r.fbt._("you're not allowed to do that", null, {
					hk: "1jGKQw"
				}),
				[s.N]: () => r.fbt._("GIF size must be less than {max file size}MB", [r.fbt._param("max file size", Math.floor(s.eb / s.mb).toString())], {
					hk: "1zzsdM"
				}),
				[s.W]: () => r.fbt._("Image size must be less than {max file size}MB", [r.fbt._param("max file size", Math.floor(s.gb / s.mb).toString())], {
					hk: "3H6bF8"
				}),
				[s.Y]: () => r.fbt._("Sorry, we accept only images (.png, .jpeg, .gif) and videos (.mp4, .mov)", null, {
					hk: "1hw868"
				}),
				[s.vc]: () => r.fbt._("Video size must be less than {max file size}GB", [r.fbt._param("max file size", (s.kb / s.mb / 1024).toFixed(1))], {
					hk: "4FkABU"
				})
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
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				s = n("./node_modules/react/index.js"),
				i = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const o = Object(r.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : o;
				return Array.isArray(t.modifiers) || (t = Object(r.assoc)(t, "modifiers", o.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(s.useState)(null), [o, c] = Object(s.useState)(null), [d, l] = Object(s.useState)(null), [u, m] = Object(s.useState)(!1), p = Object(s.useCallback)(async () => m(!0), []), b = Object(s.useCallback)(() => m(!1), []), f = Object(s.useCallback)(() => m(!u), [u]), h = Object(s.useMemo)(() => {
					const t = a(e);
					return d ? Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: g,
					styles: _,
					update: v
				} = Object(i.a)(t, o, h);
				return Object(s.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: _.arrow,
						...g.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: _.popper,
						...g.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: f,
					visible: u,
					update: v
				}), [l, g, c, b, p, _, t, n, f, u, v])
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "i", (function() {
				return O
			}));
			var r = n("./node_modules/linkify-it/index.js"),
				s = n.n(r),
				i = n("./node_modules/tlds/index.js"),
				o = n.n(i),
				a = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./node_modules/lodash/values.js"),
				d = n.n(c);
			const l = e => d()(a.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				b = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				f = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				h = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				g = s()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				_ = s()().tlds(o.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const x = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				y = e => {
					return [...h.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				E = (e, t) => {
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
				const i = Object(s.e)(e),
					o = encodeURIComponent(`${t}${i}`);
				return `${r.a.accountManagerOrigin}${n||"/login"}?dest=${o}`
			}
		},
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			n.d(t, "a", (function() {
				return r
			}))
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
			var i = n("./node_modules/lodash/debounce.js"),
				o = n.n(i),
				a = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/hooks/usePromoContext.ts"),
				l = n("./src/reddit/constants/promo.ts"),
				u = n("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var m = function() {
					const e = Object(u.a)(c.kd.Bottom_cell),
						t = Object(u.a)(c.kd.Bottom_cell_dismissible),
						n = Object(u.a)(c.kd.Bottom_cell_dismissible_immediate_trigger),
						r = Object(u.a)(c.kd.Bottom_cell_signup_upsell_copy),
						s = Object(u.a)(c.kd.Bottom_cell_surprise_install_copy),
						i = Object(u.a)(c.kd.Bottom_sheet);
					return e || r || s ? l.b.SignupUpsellCell : t || n ? l.b.SignupUpsellCellDismissible : i ? l.b.SignupUpsellBottomSheet : null
				},
				p = n("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				f = 1e3;

			function h() {
				return (h = Object.assign || function(e) {
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
						} = Object(d.a)(), n = m(), i = Object(p.a)(n), l = Object(u.a)(c.kd.Bottom_cell_dismissible_immediate_trigger);
						return r.useMemo(() => o()(() => {
							if (!i && n) {
								const e = document.getElementById(a.e),
									r = e ? e.scrollTop : s().scrollY,
									i = s().innerHeight,
									o = i / 3,
									c = 2 * i;
								r >= (l ? o : c) && t(n)
							}
						}, e, {
							maxWait: f
						}), [l, i, n, t, e])
					}();
					return r.createElement(e, h({
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
						i = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - i === s
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/reddit/actions/apiRequestState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/models/ApiRequestState/index.ts");
			const i = "API_REQUEST_STATE__STARTED",
				o = "API_REQUEST_STATE__COMPLETED",
				a = "API_REQUEST_STATE__FAILED",
				c = "API_REQUEST_STATE__RELEASED";

			function d(e) {
				return {
					type: i,
					payload: {
						apiRequestStatus: s.a.Pending,
						apiRequestId: e
					}
				}
			}

			function l(e) {
				return {
					type: o,
					payload: {
						apiRequestStatus: s.a.Complete,
						apiRequestId: e
					}
				}
			}

			function u(e, t) {
				return {
					type: a,
					payload: {
						apiRequestStatus: s.a.Failed,
						apiRequestId: e,
						apiError: t
					}
				}
			}
			const m = Object(r.a)(c)
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = "APP_BADGES__PENDING",
				s = "APP_BADGES__LOADED",
				i = "APP_BADGES__UPDATED",
				o = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				i = n("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				o = n("./src/reddit/actions/tabBadging.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/BadgeIndicators.json"),
				d = e => Object(a.a)(e, {
					...c
				}),
				l = n("./src/reddit/models/Badge/index.ts");
			const u = Object(r.a)(i.c),
				m = Object(r.a)(i.b),
				p = Object(r.a)(i.d),
				b = Object(r.a)(i.a),
				f = e => {
					let {
						key: t,
						count: n
					} = e;
					return {
						[t]: {
							count: n,
							style: l.b.Numbered
						}
					}
				},
				h = (e, t, n) => ({
					[l.c.ChatUnreadMessages]: {
						count: e,
						style: l.b.Numbered
					},
					[l.c.ChatV2UnreadMessages]: {
						count: n,
						style: l.b.Numbered
					},
					[l.c.ChatHasNewMessages]: {
						isShowing: t,
						style: l.b.Filled
					}
				}),
				g = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					e(u());
					const i = await async function(e) {
						var t, n, r, i;
						const o = await d(e());
						if (Object(s.c)(o) && (null === (n = null === (t = o.body) || void 0 === t ? void 0 : t.data) || void 0 === n ? void 0 : n.badgeIndicators)) {
							const e = null === (i = null === (r = o.body) || void 0 === r ? void 0 : r.data) || void 0 === i ? void 0 : i.badgeIndicators;
							return {
								...e,
								chatUnreadMessages: {
									count: (Number(e.chatUnreadMessages.count) || 0) + (Number(e.chatUnacceptedInvites.count) || 0) + (Number(e.chatUnreadMentions.count) || 0)
								}
							}
						}
					}(r);
					i ? (e(m(i)), e(Object(o.d)())) : e(b())
				};
			const _ = () => async e => {
				const t = f({
					key: l.c.MessageTab,
					count: 0
				});
				e(p(t))
			}
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				i = "EMBEDS__LOADABLE",
				o = Object(r.a)(s),
				a = Object(r.a)(i)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			})), n.d(t, "b", (function() {
				return T
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/performanceTimings/index.tsx"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/lib/objectSelector/index.ts"),
				p = n("./src/reddit/featureFlags/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/user.ts");
			const g = [],
				_ = (Object(m.a)((e, t) => {
					const n = _(e, t);
					if (!n) return g;
					const r = Object(f.bb)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : g
				}), (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(f.X)(e, {
						subredditId: n
					}) : null
				}),
				v = (e, t, n, r, s) => {
					const i = s.find(e => e <= t) || -1,
						o = s.find(e => e > t) || 1 / 0;
					return t !== o && t !== i && (!(i + n > t) && (!(t + n > o) && !((e, t, n) => {
						const r = n[t - 1],
							s = n[t],
							i = s && Object(b.F)(e, {
								postId: r
							}) || null,
							o = s && Object(b.F)(e, {
								postId: s
							}) || null;
						return i && i.isSponsored || o && o.isSponsored
					})(e, t, r)))
				},
				x = [3];
			Object(m.a)((e, t) => {
				let {
					existingDUPositions: n,
					listingProps: r
				} = t;
				const s = n.slice().sort();
				let i = -1;
				const o = Object(b.y)(e, {
						listingKey: r.listingKey
					}),
					a = [];
				return x.forEach(t => {
					let n = i + t;
					if (!(n >= o.length)) {
						for (; n < o.length && !v(e, n, t, o, s);) n += 1;
						n < o.length && (a.push(n), i = n)
					}
				}), a
			});
			var y = n("./src/reddit/selectors/platform.ts");
			const E = Object(s.a)(o.f),
				O = Object(s.a)(o.d),
				j = Object(s.a)(o.g),
				C = Object(s.a)(o.c),
				I = Object(s.a)(o.e),
				S = (Object(s.a)(o.i), Object(s.a)(o.h), () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const i = t(),
						o = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(i),
						d = (e => {
							const t = Object(h.R)(e),
								n = p.d.geoSubredditRecommendationDULoggedIn(e),
								r = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && n || !t && r
						})(i),
						m = Object(h.R)(i);
					if (o || !d) return;
					e(j());
					let b = !1;
					try {
						const t = m ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, n) => Object(a.a)(e, {
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
							if (k(t)) {
								if (N(t)) {
									e(C({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (w(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: s,
											category: i
										} = n.focusRecommendations[0],
										o = [r, s],
										a = Object(u.d)(o),
										c = Object(l.b)(o),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [s.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: i,
											lastLoadedEnv: "client"
										};
									e(E(m)), b = !0
								}
							} else b = !1
						}
					} catch (f) {
						b = !1
					}
					b || e(O({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				k = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				N = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				},
				w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !N(e) && r === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				},
				T = () => async (e, t, n) => {
					var r, s;
					const o = t(),
						a = (e => e.focusedVerticals.lastLoadedEnv)(o);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(o) || null === a || "client" === a) {
						const n = null === (s = null === (r = Object(y.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							a = Object(h.S)(o);
						return Object(i.i)(() => e(S()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(I({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return r
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "l", (function() {
				return o
			})), n.d(t, "k", (function() {
				return a
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			}));
			const r = "SUBREDDIT__FLAIRED_USERS_PENDING",
				s = "SUBREDDIT__FLAIRED_USERS_LOADED",
				i = "SUBREDDIT__FLAIRED_USERS_FAILED",
				o = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				a = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				c = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				d = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				m = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				p = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				b = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "INCONTEXT__BANNED",
				i = "INCONTEXT__MUTED",
				o = Object(r.a)(s),
				a = Object(r.a)(i)
		},
		"./src/reddit/actions/inboxBanner/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = "INBOX_NOTIFICATIONS__BANNER_DISMISS",
				s = "INBOX_NOTIFICATIONS__BANNER_RECEIVED"
		},
		"./src/reddit/actions/inboxBanner/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/inboxBanner/constants.ts");
			const i = Object(r.a)(s.a),
				o = Object(r.a)(s.b)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			const r = "SUBREDDIT__MODERATION_LOG_LOADED",
				s = "SUBREDDIT__ALL_MODERATORS_LOADED",
				i = "SUBREDDIT__MODERATION_CATEGORY_ACTIONS_LOADED"
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			}));
			const r = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				i = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				o = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				a = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
				c = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__PENDING",
				d = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED",
				l = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_FAILED",
				u = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_LOADED",
				m = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_PENDING",
				p = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_UPDATED"
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "b", (function() {
				return I
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var l = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(s.a)(i.c),
				p = Object(s.a)(i.b),
				b = Object(s.a)(i.a),
				f = Object(s.a)(i.f),
				h = Object(s.a)(i.e),
				g = Object(s.a)(i.d),
				_ = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					e === l.a.Push ? t(f()) : t(m()), await async function(e, t, n) {
						const r = await Object(a.a)(e(), {
							channel: t
						});
						if (r.ok && r.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									r = n && n.sections;
								if (r) return function(e) {
									const t = {},
										n = [];
									let r = {},
										s = [];
									const i = e => {
										const {
											rowIds: i,
											rowsCollection: o
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let r = 0; r < e.rows.length; r++) {
													const s = e.rows[r],
														i = s.messageType;
													t.push(i), n[i] = s
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										r = {
											...r,
											...o
										}, s = [...s, ...i];
										const a = e.id;
										n.push(a), t[a] = {
											...e,
											rows: i
										}
									};
									for (let o = 0; o < e.length; o++) i(e[o]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: r,
											allIds: s
										}
									}
								}(r)
							}(r.body);
							t === l.a.Push ? n(h(e)) : n(p(e))
						} else t === l.a.Push ? n(g({
							error: r.error
						})) : n(b({
							error: r.error
						}))
					}(s, e, t)
				};
			const v = Object(s.a)(i.g),
				x = e => async (t, n, s) => {
					let {
						gqlContext: i
					} = s;
					(await Object(a.b)(i(), e)).ok ? (y(t, e), function(e) {
						e(Object(o.f)({
							kind: u.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(o.f)({
							kind: u.b.Error,
							text: r.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function y(e, t) {
				e(v({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const E = Object(s.a)(i.j),
				O = Object(s.a)(i.i),
				j = Object(s.a)(i.k),
				C = Object(s.a)(i.h),
				I = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					var i, a;
					t(E());
					const l = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(s(), e);
					if (null === (a = null === (i = l.error) || void 0 === i ? void 0 : i.fields) || void 0 === a ? void 0 : a.length) return t(C({
						error: l.error
					})), void t(Object(o.d)());
					if (l.ok && l.body) {
						const e = l.body,
							n = e && e.data,
							r = n && n.identity && n.identity.subscribedSubreddits,
							s = r && r.pageInfo,
							i = (r && r.edges).map(e => e.node);
						t(O({
							nodes: i,
							pageInfo: s
						}))
					}
				}
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/lib/notifications/index.ts"),
				s = n("./src/lib/notifications/constants.ts"),
				i = n("./src/lib/notifications/featureFlags.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => o.d.pushNotificationsBrowserSupported(e) ? Object(i.a)() : s.d.BrowserUnsupported,
				d = e => {
					switch (e) {
						case s.a.Denied:
							a.sb(!1), Object(r.c)();
							break;
						case s.a.Default:
						case s.a.Granted:
							a.sb(!0), Object(r.c)();
							break;
						case s.a.Closed:
							a.sb(!0)
					}
				}
		},
		"./src/reddit/actions/notificationsInbox/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "h", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			const r = "INBOX_NOTIFICATIONS__PENDING",
				s = "INBOX_NOTIFICATIONS__LOADED",
				i = "INBOX_NOTIFICATIONS__FAILED",
				o = "INBOX_NOTIFS_SET_OVERFLOW_MENU_ID",
				a = "INBOX_NOTIFICATIONS__REMOVE_NOTIFICATION",
				c = "INBOX_NOTIFS__MARK_AS_READ",
				d = "INBOX_NOTIFS__SET_EARLIER_DIVIDER_INDEX",
				l = "INBOX_NOTIFS_MARK_ALL_AS_READ"
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return L
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "i", (function() {
				return W
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "c", (function() {
				return V
			})), n.d(t, "a", (function() {
				return G
			})), n.d(t, "h", (function() {
				return K
			})), n.d(t, "j", (function() {
				return z
			})), n.d(t, "g", (function() {
				return Q
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				o = n("./src/reddit/actions/inboxBanner/index.ts"),
				a = (n("./src/reddit/actions/notificationSettingsLayout/index.ts"), n("./src/reddit/actions/notificationsInbox/constants.ts")),
				c = n("./src/reddit/actions/tabBadging.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/redditGQL/operations/BlockAwarder.json");
			var m = (e, t) => Object(l.a)(e, {
					...u,
					variables: t
				}),
				p = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/redditGQL/operations/NotificationInboxFeed.json"),
				g = n("./src/redditGQL/operations/NotificationInboxFeedSlimmed.json"),
				_ = n("./src/reddit/constants/headers.ts"),
				v = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var x;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages", e.CommentReply = "comment_reply", e.PostReply = "post_reply", e.UsernameMention = "username_mention"
			}(x || (x = {}));
			var y = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			var E = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var O = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				j = n("./src/reddit/helpers/trackers/inbox.ts"),
				C = n("./src/reddit/models/Badge/index.ts"),
				I = n("./src/reddit/models/NotificationInbox/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/appBadges.ts"),
				N = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const w = Object(s.a)(a.e),
				T = Object(s.a)(a.b),
				P = Object(s.a)(a.a),
				L = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					var i, a;
					const c = n(),
						u = Object(N.a)(c);
					t(w());
					const m = await ((e, t) => Object(l.a)(e, {
						...h,
						variables: t
					}))(s(), e);
					if (null === (a = null === (i = m.error) || void 0 === i ? void 0 : i.fields) || void 0 === a ? void 0 : a.length) return t(P({
						error: m.error
					})), void t(Object(d.d)());
					const p = m && m.body,
						b = R(p);
					if (null === u) {
						const e = Object(N.f)(c);
						t(B(b.notifications, e.length))
					}
					t(T(b)), t(Object(o.b)(b.banners))
				}, D = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					var s, i;
					const o = await (e => Object(l.a)(e, {
						...g
					}))(r());
					if (null === (i = null === (s = o.error) || void 0 === s ? void 0 : s.fields) || void 0 === i ? void 0 : i.length) return;
					const a = o && o.body,
						c = A(a).nodes.filter(e => !e.viewedAt);
					c.length && c.forEach(e => {
						var n;
						Object(j.s)({
							id: e.id,
							isClicked: !1,
							isViewed: Boolean(e.viewedAt),
							type: null === (n = e.context) || void 0 === n ? void 0 : n.messageType
						})(t())
					})
				}, R = e => {
					const t = [],
						n = [],
						r = e && e.data,
						s = r && r.notificationInbox,
						i = s && s.elements,
						o = i && i.pageInfo,
						a = i && i.edges;
					if (a)
						for (const c of a) Object.keys(c.node).length && (c.node.hasOwnProperty("notificationName") ? n.push(c.node) : t.push(c.node));
					return {
						notifications: t,
						banners: n,
						pageInfo: o
					}
				}, A = e => {
					var t, n;
					return {
						nodes: null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.notificationInbox) || void 0 === n ? void 0 : n.elements.edges.map(e => e.node)
					}
				}, B = (e, t) => async (n, r) => {
					const s = r(),
						i = Object(N.a)(s),
						o = ((e, t) => {
							let n, r = 0;
							const s = new Date,
								i = s.getDate(),
								o = s.getMonth(),
								a = s.getFullYear();
							for (; r < e.length && !n;) {
								const s = e[r],
									c = new Date(s.sentAt),
									d = c.getDate(),
									l = c.getMonth(),
									u = c.getFullYear();
								if ((d !== i || l !== o || u !== a) && !n) {
									n = ((t || 0) + r).toString()
								} else r++
							}
							return n
						})(e, t);
					o && o !== i && n(M({
						index: o
					}))
				}, M = Object(s.a)(a.g), U = (Object(s.a)(a.h), Object(s.a)(a.f)), F = e => async (t, n, s) => {
					let {
						gqlContext: i
					} = s;
					const o = [e];
					if ((await ((e, t) => Object(l.a)(e, {
							...y,
							variables: {
								input: t
							}
						}))(i(), {
							notificationIds: o
						})).ok) {
						t(U({
							id: e
						}));
						const s = Object(N.f)(n());
						t(B(s)), t(Object(d.f)(Object(d.e)(r.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), S.b.SuccessCommunityGreen)))
					} else t(Object(d.f)(Object(d.e)(r.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), S.b.Error)))
				}, W = (e, t) => async (n, s, i) => {
					let {
						gqlContext: o
					} = i;
					if (!e) return;
					(await Object(O.b)(o(), e, {
						isSubredditUpdatesInterestingPostEnabled: !0,
						isUpdateFromSubredditEnabled: !0
					})).ok ? (t && t(), n(Object(d.f)(Object(d.e)(r.fbt._("Success! Undone hiding notifications from this community.", null, {
						hk: "1na0NP"
					}), S.b.SuccessCommunityGreen)))) : n(Object(d.f)(Object(d.e)(r.fbt._("Failed to undo hiding notifications, please try again.", null, {
						hk: "4jo7Pf"
					}), S.b.Error)))
				}, H = (e, t) => async (n, s, i) => {
					let {
						gqlContext: o
					} = i;
					if (!e) return;
					(await Object(O.b)(o(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n((() => {
						const n = r.fbt._("Success! You won't see notifications from this community in the future.", null, {
							hk: "2tkhbk"
						});
						return Object(d.f)(Object(d.e)(n, S.b.Undo, r.fbt._("Undo", null, {
							hk: "4zFGDk"
						}), W(e, t)))
					})()) : n(Object(d.f)(Object(d.e)(r.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), S.b.Error)))
				}, V = e => async (t, n, s) => {
					let {
						apiContext: i
					} = s;
					if (!e) return;
					(await ((e, t) => Object(b.a)(Object(f.a)(e, [_.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/sendreplies`),
						method: p.ob.POST,
						data: {
							id: t
						}
					}))(i(), e)).ok ? t(Object(d.f)(Object(d.e)(r.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), S.b.SuccessCommunityGreen))) : t(Object(d.f)(Object(d.e)(r.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), S.b.Error)))
				}, G = e => async (t, n, s) => {
					let {
						gqlContext: i
					} = s;
					if (!e) return;
					(await m(i(), {
						awardingId: e
					})).ok ? t(Object(d.f)(Object(d.e)(r.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), S.b.SuccessCommunityGreen))) : t(Object(d.f)(Object(d.e)(r.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), S.b.Error)))
				}, q = Object(s.a)(a.d), K = (e, t) => async (n, r, s) => {
					let o, {
						apiContext: a
					} = s;
					if (t === I.a.CommentReply || t === I.a.PostReply || t === I.a.PrivateMessage || t === I.a.UsernameMention) {
						if ((o = await ((e, t) => Object(b.a)(Object(f.a)(e, [_.a]), {
								endpoint: Object(v.a)(`${e.apiUrl}/api/read_message`),
								method: p.ob.POST,
								data: {
									id: t
								}
							}))(a(), e)).ok) {
							let e = Object(k.a)(r());
							if (e > 0) {
								e--;
								const t = Object(i.e)({
									count: e,
									key: C.c.ActivityTab
								});
								n(Object(i.a)(t)), n(Object(c.e)())
							}
						}
					} else o = await ((e, t) => Object(b.a)(Object(f.a)(e, [_.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/read_notification`),
						method: p.ob.POST,
						data: {
							id: t
						}
					}))(a(), e);
					if (o.ok) {
						const t = (new Date).toISOString();
						n(q({
							id: e,
							now: t
						}))
					}
				}, z = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const s = (new Date).toLocaleDateString(),
						o = await ((e, t) => Object(l.a)(e, {
							...E,
							variables: {
								input: t
							}
						}))(r(), {
							lastSentAt: s
						});
					if (o.ok) {
						const t = o.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(i.a)(n)), e(Object(c.d)()))
					}
				}, Y = Object(s.a)(a.c), Q = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					const {
						notificationsInbox: {
							markAllAsReadTimestamp: o
						}
					} = t(), a = new Date;
					if (!o || a.getTime() - new Date(o).getTime() > 15e3) {
						if ((await ((e, t) => Object(b.a)(Object(f.a)(e, [_.a]), {
								endpoint: Object(v.a)(`${e.apiUrl}/api/read_all_messages`),
								method: p.ob.POST,
								data: {
									filter_types: null == t ? void 0 : t.join(",")
								}
							}))(s(), [x.Activity, x.Messages, x.CommentReply, x.PostReply, x.UsernameMention])).ok) {
							const t = Object(i.e)({
									count: 0,
									key: C.c.MessageTab
								}),
								n = Object(i.e)({
									count: 0,
									key: C.c.ActivityTab
								});
							e(Object(i.a)({
								...t,
								...n
							})), e(Y({
								now: a.toISOString()
							}))
						} else e(Object(d.f)(Object(d.e)(r.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "VW7c3"
						}), S.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/modListing/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "i", (function() {
				return o
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "j", (function() {
				return b
			}));
			const r = "PAGE__MOD_LISTING_PAGE_PENDING",
				s = "PAGE__MOD_LISTING_PAGE_LOADED",
				i = "PAGE__MOD_LISTING_PAGE_FAILED",
				o = "MOD_LISTING_MORE_POSTS_PENDING",
				a = "MOD_LISTING_MORE_POSTS_LOADED",
				c = "MOD_LISTING_MORE_POSTS_FAILED",
				d = "MOD_LISTING_HIDE_SUBREDDIT_SUCCESS",
				l = "MOD_LISTING_HIDE_SUBREDDIT_PENDING",
				u = "MOD_LISTING_HIDE_SUBREDDIT_FAILED",
				m = "MOD_LISTING_UNHIDE_SUBREDDIT_SUCCESS",
				p = "MOD_LISTING_UNHIDE_SUBREDDIT_PENDING",
				b = "MOD_LISTING_UNHIDE_SUBREDDIT_FAILED"
		},
		"./src/reddit/actions/postFlairStyleTemplates/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			}));
			const r = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_PENDING",
				s = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_LOADED",
				i = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_FAILED"
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/models/Media/index.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const i = "POSTLIST__MARKED_END",
				o = "POSTLIST__UNMARKED_END",
				a = Object(r.a)(i),
				c = Object(r.a)(o),
				d = (e, t) => async (n, r) => {
					const i = r();
					e in i.listings.postOrder.fetchedTokens ? e in i.listings.postOrder.ids ? n(c({
						listingKey: e
					})) : s.l(i, e) : n(a({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/relatedCommunitiesRecommendations/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			}));
			const r = "RELATED_COMMUNITIES_RECOMMENDATIONS__FETCH_RECOMMENDATIONS_PENDING",
				s = "RELATED_COMMUNITIES_RECOMMENDATIONS__FETCH_RECOMMENDATIONS_SUCCESS",
				i = "RELATED_COMMUNITIES_RECOMMENDATIONS__FETCH_RECOMMENDATIONS_FAILURE"
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var r = n("./src/reddit/constants/shortcuts.ts"),
				s = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = n("./src/reddit/helpers/routeKey/index.ts");
			const o = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const n = t.routeMatch,
						r = Object(s.a)(e);
					return Object(i.b)(n, e, r)
				},
				a = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				c = e => {
					const t = document.getElementById(e),
						n = window.scrollX,
						r = window.scrollY;
					t && (t.focus(), window.scrollTo(n, r))
				},
				d = () => {
					c(r.b)
				}
		},
		"./src/reddit/actions/structuredStyles/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return r
			})), n.d(t, "k", (function() {
				return s
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "i", (function() {
				return o
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "m", (function() {
				return h
			}));
			const r = "STRUCTURED_STYLES__STYLES_RESET_PENDING",
				s = "STRUCTURED_STYLES__STYLES_RESET_LOADED",
				i = "STRUCTURED_STYLES__STYLES_RESET_FAILED",
				o = "SUBREDDIT__STYLES_PENDING",
				a = "SUBREDDIT__STYLES_LOADED",
				c = "SUBREDDIT__STYLES_FAILED",
				d = "STRUCTURED_STYLES__DRAFT_REPLACED",
				l = "STRUCTURED_STYLES__DRAFT_UPDATED",
				u = "STRUCTURED_STYLES__EDITING_STOPPED",
				m = "STRUCTURED_STYLES__EDITING_STARTED",
				p = "STRUCTURED_STYLES__IMAGE_UPLOAD_ADDED",
				b = "STRUCTURED_STYLES__DIRTIED_BLADE_EDITOR",
				f = "STRUCTURED_STYLES__UNDIRTIED_BLADE_EDITOR",
				h = "STRUCTURED_STYLES__STYLES_UPDATED_LOADED"
		},
		"./src/reddit/actions/structuredStyles/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return M
			})), n.d(t, "k", (function() {
				return W
			})), n.d(t, "j", (function() {
				return q
			})), n.d(t, "e", (function() {
				return z
			})), n.d(t, "d", (function() {
				return Q
			})), n.d(t, "g", (function() {
				return Z
			})), n.d(t, "c", (function() {
				return $
			})), n.d(t, "f", (function() {
				return te
			})), n.d(t, "b", (function() {
				return ne
			})), n.d(t, "m", (function() {
				return re
			})), n.d(t, "a", (function() {
				return se
			})), n.d(t, "h", (function() {
				return ie
			})), n.d(t, "i", (function() {
				return oe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/omit.js"),
				s = n.n(r),
				i = n("./node_modules/lodash/pick.js"),
				o = n.n(i),
				a = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/filterQueryParams/index.ts"),
				d = n("./src/lib/formatApiError/index.ts"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/reddit/actions/apiRequestState.ts"),
				m = n("./src/reddit/actions/imageUploads.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/endpoints/moderator/structuredStyles.ts"),
				f = n("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				h = n("./src/reddit/selectors/postFlair.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const v = Object(l.a)(_.c),
				x = Object(l.a)(_.b),
				y = Object(l.a)(_.a);
			var E = n("./src/reddit/actions/toaster.ts"),
				O = n("./src/reddit/actions/widgets/index.ts"),
				j = n("./src/reddit/constants/modals.ts"),
				C = n("./src/reddit/helpers/getGenericUploadError.ts"),
				I = n("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				S = n("./src/reddit/helpers/media/index.ts"),
				k = n("./src/reddit/models/Image/index.tsx"),
				N = n("./src/reddit/models/StructuredStyles/index.ts"),
				w = n("./src/reddit/models/Toast/index.ts"),
				T = n("./src/reddit/selectors/activeModalId.ts"),
				P = n("./src/reddit/selectors/platform.ts"),
				L = n("./src/reddit/selectors/structuredStyles.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				R = n("./src/reddit/helpers/trackers/blade.ts"),
				A = n("./src/telemetry/index.ts"),
				B = n("./src/reddit/actions/structuredStyles/constants.ts");
			const M = Object(l.a)(B.m),
				U = {
					bannerBackgroundImage: ["bannerBackgroundImagePosition"],
					bannerPositionedImage: ["bannerPositionedImagePosition", "secondaryBannerPositionedImage"]
				},
				F = e => {
					const t = {
						...e
					};
					return Object.keys(e).forEach(n => {
						U[n] && !e[n] && U[n].forEach(e => t[e] = null)
					}), t
				},
				W = (e, t, n, r) => async (s, i, o) => {
					const {
						apiContext: a
					} = o, c = i(), l = F(t), p = c.structuredStyles.models[e];
					let f;
					for (const e in l)
						if (l[e] !== p[e]) {
							f = !0;
							break
						} if (!f) return;
					s(Object(u.h)(r));
					const h = Object(R.i)(n)(c);
					let _ = null,
						v = null;
					try {
						(_ = await Object(m.f)(i(), k.a.StructuredStyles)) && (v = Object(m.m)(_)(s, i, o))
					} catch (j) {
						const e = Object(C.a)("webSocket");
						return void s(Object(u.f)(r, e))
					}
					const x = Object(g.X)(c, {
							subredditId: e
						}).name,
						y = await b.e(a(), x, l),
						O = {};
					if (y.ok) {
						if (v) try {
							await v
						} catch (j) {}
						const n = Object(L.f)(i(), {
							apiRequestId: r
						});
						for (const e in n)
							if (e in t) {
								const t = Object(L.g)(i(), {
									name: e
								});
								t && Object(k.j)(t) && (O[e] = n[e])
							} Object.keys(O).length && s(Y(O)), s(Object(u.e)(r)), s(M({
							subredditId: e,
							styles: {
								...l,
								...O
							}
						}))
					} else _ && _.websocket.close(), s(Object(u.f)(r, y.error)), y.body && s(E.f({
						kind: w.b.Error,
						text: Object(d.a)(y.error, y.status)
					}));
					Object(A.a)({
						...h,
						actionInfo: {
							...h.actionInfo,
							success: y.ok
						}
					})
				}, H = Object(l.a)(B.l), V = Object(l.a)(B.k), G = Object(l.a)(B.j), q = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					t(H({
						subredditId: e
					}));
					const i = Object(g.X)(n(), {
							subredditId: e
						}).name,
						o = await b.f(s(), i);
					if (o.ok) {
						const r = n().structuredStyles.models[e],
							s = r ? r.mobileKeyColor : null;
						t(V({
							subredditId: e,
							styles: {
								mobileKeyColor: s
							}
						}))
					} else t(G({
						subredditId: e,
						...o.error
					}))
				}, K = Object(l.a)(B.d), z = e => async (t, n, r) => {
					const s = n(),
						i = s.structuredStyles.models[e] || {},
						o = Object(D.fb)(s);
					t(K({
						isNightmodeOn: o,
						styles: i,
						subredditId: e
					})), le(e, !1)(t, n, r), (e => async (t, n, r) => {
						let {
							gqlContext: s
						} = r;
						const i = n(),
							o = Object(g.X)(i, {
								subredditId: e
							});
						if (!o) return;
						const a = Object(h.d)(i, {
								subredditId: e
							}),
							c = a && a.templateIds;
						if (!c || !c.length) return;
						t(v({
							subredditId: e
						}));
						const d = await Object(b.a)(s(), o.name, c);
						if (d.ok) {
							const n = {};
							if (d.body) {
								const {
									data: e
								} = d.body;
								if (e && e.subreddit)
									for (const t of e.subreddit.postFlairStyleTemplates) n[t.id] = Object(f.a)(t)
							}
							t(x({
								subredditId: e,
								templates: n
							}))
						} else t(y({
							subredditId: e,
							error: d.error
						}))
					})(e)(t, n, r), Object(O.g)(e, !1)(t, n, r)
				}, Y = Object(l.a)(B.c), Q = e => async (t, n, r) => {
					const s = F(e),
						i = n();
					for (const e in s)
						if (Object(N.l)(e))
							if (s[e]) {
								if ("string" != typeof s[e]) {
									const i = s[e],
										o = await Object(k.e)(i);
									Z(e, o)(t, n, r), s[e] = ""
								}
							} else {
								const n = Object(L.g)(i, {
									name: e
								});
								n && t(Object(m.h)(n))
							} t(Y(s))
				}, J = Object(l.a)(B.f), Z = (e, t, n) => async (r, s, i) => {
					const o = s(),
						a = n || o.structuredStyles.isEditing,
						c = Object(g.X)(o, {
							subredditId: a
						}).name;
					r(J({
						imageKey: e,
						uploadId: t.id
					})), r(Object(m.k)(t));
					const d = await b.d(i.apiContext(), c, t.file.name, e, await Object(S.h)(t.file));
					try {
						const n = await Object(m.g)(s(), d, t, k.a.StructuredStyles);
						if (n) {
							const t = n.url;
							r(Object(m.j)(n)), r(Y({
								[e]: t
							}))
						}
					} catch (l) {
						if (l instanceof Error) throw l;
						r(Object(m.i)(l))
					}
				}, X = Object(l.a)(B.b), $ = (e, t, n) => async (r, i, a) => {
					const c = i(),
						d = c.structuredStyles.models[e] || {},
						l = c.structuredStyles.draft,
						u = Object(R.h)(t)(c);
					if (n) {
						const t = o()(d, n),
							i = {
								...s()(l, n),
								...t
							};
						r(X({
							subredditId: e,
							styles: i
						}))
					} else {
						r(X({
							subredditId: e,
							styles: d
						}))
					}
					Object(A.a)(u)
				}, ee = Object(l.a)(B.e), te = () => async (e, t, n) => {
					const r = t(),
						s = Object(D.gb)(r),
						i = !!Object(P.a)(r);
					if (e(ee({
							nightmodeTempUpdated: s
						})), i) return;
					const {
						url: o
					} = r.platform.currentPage;
					o && e(Object(a.c)(Object(c.a)(o, ["styling", "route"])))
				}, ne = Object(l.a)(B.a), re = Object(l.a)(B.n), se = () => async e => e(te()), ie = e => async (t, n) => {
					const r = n(),
						s = Object(L.i)(r);
					!Object(T.b)(j.a.BLADE_UNSAVED_CHANGES)(r) && s && (Object(L.a)(r, {
						subredditId: e
					}) ? t(Object(p.i)(j.a.BLADE_UNSAVED_CHANGES)) : t(se()))
				}, oe = e => async (t, n) => {
					const r = n();
					Object(L.i)(r) || t(Object(D.fb)(r) ? Object(p.i)(j.a.BLADE_NIGHTMODE) : z(e))
				}, ae = Object(l.a)(B.i), ce = Object(l.a)(B.h), de = Object(l.a)(B.g), le = (e, t) => async (n, r, s) => {
					let {
						gqlContext: i,
						apiContext: o
					} = s;
					n(ae({
						subredditId: e
					}));
					const a = Object(g.X)(r(), {
						subredditId: e
					});
					if (!a) return;
					if (!t) {
						const r = await b.c(o(), a.name, t);
						if (r.ok) {
							const t = r.body,
								s = t.data ? t.data.style : {};
							n(ce({
								subredditId: e,
								styles: s
							}))
						} else n(de({
							subredditId: e,
							...r.error
						}));
						return
					}
					const c = await b.b(i(), a.name);
					if (c.ok) {
						let t = {};
						if (c.body) {
							const {
								data: e
							} = c.body;
							e && e.subreddit && e.subreddit.styles && (t = Object(I.a)(e.subreddit.styles))
						}
						n(ce({
							subredditId: e,
							styles: t
						}))
					} else n(de({
						subredditId: e,
						...c.error
					}))
				}
		},
		"./src/reddit/actions/subreddit/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "o", (function() {
				return o
			})), n.d(t, "n", (function() {
				return a
			})), n.d(t, "w", (function() {
				return c
			})), n.d(t, "v", (function() {
				return d
			})), n.d(t, "r", (function() {
				return l
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "u", (function() {
				return p
			})), n.d(t, "t", (function() {
				return b
			})), n.d(t, "s", (function() {
				return f
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "B", (function() {
				return v
			})), n.d(t, "A", (function() {
				return x
			})), n.d(t, "C", (function() {
				return y
			})), n.d(t, "D", (function() {
				return E
			})), n.d(t, "E", (function() {
				return O
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "y", (function() {
				return I
			})), n.d(t, "z", (function() {
				return S
			})), n.d(t, "x", (function() {
				return k
			})), n.d(t, "j", (function() {
				return N
			})), n.d(t, "F", (function() {
				return w
			})), n.d(t, "G", (function() {
				return T
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "h", (function() {
				return L
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "f", (function() {
				return R
			}));
			const r = "SUBREDDIT__ADD_TOP_SUBREDDIT_MODELS",
				s = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS",
				i = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS_PAGE_INFO",
				o = "SUBREDDIT__POSTS_LOADED",
				a = "SUBREDDIT__POSTS_SET_FAILED",
				c = "SUBREDDIT__SUBREDDITS_POSTS_LOADED",
				d = "SUBREDDIT__SUBREDDITS_POSTS_SET_FAILED",
				l = "SUBREDDIT__RANKINGS_PENDING",
				u = "SUBREDDIT__RANKINGS_LOADED",
				m = "SUBREDDIT__RANKINGS_FAILED",
				p = "SUBREDDIT__SIMILAR_SUBREDDITS_PENDING",
				b = "SUBREDDIT__SIMILAR_SUBREDDITS_LOADED",
				f = "SUBREDDIT__SIMILAR_SUBREDDITS_FAILED",
				h = "SUBREDDIT__ONBOARDING_SUBREDDITS_PENDING",
				g = "SUBREDDIT__ONBOARDING_SUBREDDITS_LOADED",
				_ = "SUBREDDIT__ONBOARDING_SUBREDDITS_FAILED",
				v = "SUBREDDIT__EDIT_REQUESTED",
				x = "SUBREDDIT__EDIT_FAILED",
				y = "SUBREDDIT__EDIT_SUCCESS",
				E = "SUBREDDIT_QUESTIONS_LOADED",
				O = "SUBREDDIT_SURVEY_ANSWERED",
				j = "SUBREDDIT_SURVEY_DISMISSED",
				C = "SUBREDDIT_SURVEY_DISMISS",
				I = "SUBREDDIT_ABOUT_INFO_UPDATE__PENDING",
				S = "SUBREDDIT_ABOUT_INFO_UPDATE__SUCCESS",
				k = "SUBREDDIT_ABOUT_INFO_UPDATE__FAILED",
				N = "MUTE_SUBREDDIT__SUCCESS",
				w = "UNMUTE_SUBREDDIT_SUCCESS",
				T = "UPDATE_MUTE_AND_NOTIFICATION_LEVEL_SUCCESS",
				P = "MUTED_SUBREDDIT_LOADED__SUCCESS",
				L = "MUTED_SUBREDDIT_LOADED__FAILED",
				D = "MUTED_SUBREDDIT_LIST__UNMUTE",
				R = "MUTED_SUBREDDIT_LIST__MUTE"
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return x
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/actions/subreddit/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/blade.ts"),
				d = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const f = Object(s.a)(o.B),
				h = Object(s.a)(o.C),
				g = Object(s.a)(o.A),
				_ = (e, t, n) => async (r, s, i) => {
					const o = Object(p.C)(s(), {
						subredditName: e
					});
					if (o) return x(o.id, t, n)(r, s, i)
				}, v = () => r.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), x = (e, t, n) => async (s, o, p) => {
					const _ = await Object(l.e)(t);
					s(f());
					const x = o();
					try {
						await Object(i.g)("communityIcon", _, e)(s, o, p)
					} catch (E) {
						return Object(b.a)(Object(d.c)(x, "something went wrong with the uploading the image")), s(Object(a.f)({
							kind: u.b.Error,
							text: v()
						})), void s(g())
					}
					const y = Object(m.c)(o(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(d.c)(x, "image is null")), s(Object(a.f)({
						kind: u.b.Error,
						text: v()
					})), void s(g());
					await Object(i.k)(e, {
						communityIcon: y
					}, c.b.idCard, n)(s, o, p), s(Object(a.f)({
						kind: u.b.SuccessCommunity,
						text: r.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), s(h())
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "f", (function() {
				return _
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/fastdom/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = n("./src/reddit/helpers/tabBadging/index.ts"),
				c = n("./src/reddit/models/Badge/index.ts"),
				d = n("./src/reddit/selectors/appBadges.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const m = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				p = Object(i.a)(m),
				b = (e, t) => {
					e <= 0 ? s.a.write(() => {
						Object(a.b)(!1), window.document.title = t
					}) : s.a.write(() => {
						Object(a.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				f = Object(r.c)({
					basicChannelCount: d.f,
					subredditChannelCount: d.d,
					subredditMentionCount: d.c
				}),
				h = () => async (e, t) => {
					const n = t(),
						r = Object(o.g)(n, {});
					if (!(Object(l.R)(n) || Object(l.S)(n)) || !r) return;
					const s = Object(d.j)(n);
					b(s, r), e(p({
						hasUnreadMessages: !!s
					}))
				}, g = () => async (e, t) => {
					{
						e(h());
						const n = (e => ({
							inboxCount: Object(d.i)(e),
							basicChannelCount: Object(d.f)(e)
						}))(t());
						Object(a.c)(n)
					}
				}, _ = e => async (t, n) => {
					const r = n(),
						s = Object(d.f)(r),
						i = Object(d.i)(r),
						{
							basicChannelCount: o,
							inboxCount: a
						} = e;
					if (s !== o) {
						const e = Object(u.e)({
							count: o,
							key: c.c.ChatTab
						});
						t(Object(u.a)(e))
					}
					if (a && a !== i) {
						const e = Object(u.e)({
							count: a,
							key: c.c.MessageTab
						});
						t(Object(u.a)(e))
					}(s !== o || a && a !== i) && t(h())
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				i = n("./node_modules/react-router-redux/es/index.js");
			const o = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, o, a) => {
					let {
						routes: c
					} = a;
					const d = o();
					Object(r.a)(e, c, d) ? n(Object(i.b)(e)) : t ? Object(s.e)(e, "_blank") : window.location.assign(e)
				}
			}
		},
		"./src/reddit/actions/widgets/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return r
			})), n.d(t, "i", (function() {
				return s
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			const r = "WIDGETS__WIDGET_CREATED",
				s = "WIDGETS__WIDGET_UPDATED",
				i = "WIDGET_DELETED",
				o = "WIDGETS_SORTED",
				a = "WIDGETS__STARTED_EDITING_WIDGET",
				c = "WIDGETS__LOADED",
				d = "SUBREDDIT__WIDGETS_PENDING",
				l = "SUBREDDIT__WIDGETS_LOADED",
				u = "SUBREDDIT__WIDGETS_FAILED"
		},
		"./src/reddit/actions/widgets/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "h", (function() {
				return N
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "g", (function() {
				return B
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/apiRequestState.ts"),
				o = n("./src/reddit/actions/imageUploads.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				l = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts");
			const m = async (e, t, n) => Object(d.a)(Object(l.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/r/${t}/api/widgets`,
				method: c.ob.GET,
				type: "json",
				data: {
					progressive_images: n
				}
			});
			var p = n("./src/reddit/helpers/getGenericUploadError.ts"),
				b = n("./src/reddit/helpers/media/index.ts"),
				f = n("./src/lib/assertNever.ts"),
				h = n("./src/reddit/models/Widgets/index.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/helpers/widgets/index.tsx"),
				v = n("./src/reddit/models/Image/index.tsx"),
				x = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/actions/widgets/constants.ts");
			const E = Object(s.a)(y.g),
				O = (e, t, n) => async (s, m, b) => {
					const {
						apiContext: f
					} = b;
					s(Object(i.h)(n));
					const h = m(),
						y = Object(g.X)(h, {
							subredditId: e
						}).name,
						O = Object(_.e)(t);
					let j = null,
						C = null;
					try {
						(j = await Object(o.f)(h, v.a.Widgets)) && (C = Object(o.m)(j)(s, m, b))
					} catch (S) {
						const e = Object(p.a)("webSocket");
						return void s(Object(i.f)(n, e))
					}
					const I = await (async (e, t, n) => Object(d.a)(Object(l.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget`,
						method: c.ob.POST,
						type: "json",
						data: n
					}))(f(), y, O);
					if (I.ok) {
						let o = I.body;
						const c = o.id;
						if ("calendar" === t.kind && s(Object(a.f)({
								kind: x.b.SuccessMod,
								text: r.fbt._("New calendar added! It may take a few minutes to see your events appear", null, {
									hk: "4iETrT"
								})
							})), j) {
							try {
								await C
							} catch (S) {}
							o = await s(M(e, c)) || o
						}
						s(E({
							subredditId: e,
							widget: o,
							widgetId: c
						})), s(Object(i.e)(n))
					} else j && j.websocket.close(), s(Object(i.f)(n, I.error))
				}, j = Object(s.a)(y.i), C = (e, t, n) => async (s, m, b) => {
					const {
						apiContext: y
					} = b;
					s(Object(i.h)(n));
					const E = t.id,
						O = m(),
						C = Object(g.X)(O, {
							subredditId: e
						}).name,
						I = Object(_.e)(t);
					let S = null,
						k = null;
					try {
						(S = await Object(o.f)(O, v.a.Widgets)) && (k = Object(o.m)(S)(s, m, b))
					} catch (w) {
						const e = Object(p.a)("webSocket");
						return void s(Object(i.f)(n, e))
					}
					const N = await (async (e, t, n) => Object(d.a)(Object(l.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget/${n.id}`,
						method: c.ob.PUT,
						type: "json",
						data: n
					}))(y(), C, I);
					if (N.ok) {
						let o = function(e, t, n) {
							switch (e.kind) {
								case h.i.Calendar:
								case h.i.IdCard:
								case h.i.SubredditRules:
									return {
										...e, ...t
									};
								case h.i.CommunityList: {
									const r = {};
									for (const t of e.data) r[t.name] = t;
									return {
										...t,
										data: t.data.map(e => {
											if (!("subscribers" in r[e])) {
												const t = {
														subredditName: e
													},
													r = Object(g.C)(n, t),
													s = Object(g.z)(n, t);
												return {
													name: r.name,
													subscribers: r ? r.subscribers : void 0,
													iconUrl: r ? r.communityIcon : void 0,
													isNSFW: r ? r.isNSFW : void 0,
													isSubscribed: s ? s.userIsSubscriber : void 0
												}
											}
											return r[e]
										})
									}
								}
								case h.i.Button:
								case h.i.Custom:
								case h.i.Image:
								case h.j.Menu:
								case h.i.Moderators:
								case h.i.Textarea:
								case h.i.PostFlair:
									return t;
								default:
									return Object(f.a)(e)
							}
						}(t, N.body, O);
						k && (o = await s(M(e, E)) || o), s(j({
							subredditId: e,
							widgetId: E,
							widget: o
						})), "calendar" === t.kind && s(Object(a.f)({
							kind: x.b.SuccessMod,
							text: r.fbt._("Calendar is updated! It may take a few minutes to see your events change", null, {
								hk: "10XWV"
							})
						})), s(Object(i.e)(n))
					} else S && S.websocket.close(), s(Object(i.f)(n, N.error))
				}, I = Object(s.a)(y.h), S = (e, t, n) => async (r, s, o) => {
					let {
						apiContext: a
					} = o;
					r(Object(i.h)(n));
					const m = t.id,
						p = Object(g.X)(s(), {
							subredditId: e
						}).name,
						b = await (async (e, t, n) => Object(d.a)(Object(l.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/r/${t}/api/widget/${n.id}`,
							method: c.ob.DELETE,
							type: "json"
						}))(a(), p, t);
					b.ok ? (r(Object(i.e)(n)), r(I({
						subredditId: e,
						widgetId: m
					}))) : r(Object(i.f)(n, b.error))
				}, k = Object(s.a)(y.f), N = (e, t) => async (n, r, s) => {
					let {
						apiContext: i
					} = s;
					const o = Object(g.X)(r(), {
						subredditId: e
					}).name;
					(await (async (e, t, n) => Object(d.a)(Object(l.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget_order/sidebar`,
						method: c.ob.PATCH,
						type: "json",
						data: n
					}))(i(), o, t)).ok && n(k({
						subredditId: e,
						widgetIds: t
					}))
				}, w = e => {
					let {
						imageData: t
					} = e;
					return async (e, n, r) => {
						const s = n(),
							i = s.structuredStyles.isEditing,
							a = Object(g.X)(s, {
								subredditId: i
							}).name;
						e(Object(o.k)(t));
						const m = await (async (e, t, n, r) => Object(d.a)(Object(l.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/r/${t}/api/widget_image_upload_s3`,
							method: c.ob.POST,
							data: {
								filepath: n,
								mimetype: r
							}
						}))(r.apiContext(), a, t.file.name, await Object(b.h)(t.file));
						let p = !1;
						try {
							const r = await Object(o.g)(n(), m, t, v.a.Widgets);
							r && (e(Object(o.j)(r)), p = !0)
						} catch (f) {
							if (f instanceof Error) throw f;
							e(Object(o.i)(f))
						}
						return p
					}
				}, T = Object(s.a)(y.d), P = Object(s.a)(y.e), L = (e, t) => async (n, r, s) => {
					let {
						apiContext: o
					} = s;
					n(Object(i.h)(t));
					const a = Object(g.X)(r(), {
							subredditId: e
						}).name,
						c = await m(o(), a);
					if (c.ok) {
						const r = c.body;
						n(P({
							subredditId: e,
							widgets: r
						})), n(Object(i.e)(t))
					} else n(Object(i.f)(t, c.error))
				}, D = Object(s.a)(y.c), R = Object(s.a)(y.b), A = Object(s.a)(y.a), B = (e, t) => async (n, r, s) => {
					let {
						apiContext: i
					} = s;
					n(D({
						subredditId: e
					}));
					const o = Object(g.X)(r(), {
							subredditId: e
						}).name,
						a = await m(i(), o, t);
					if (a.ok) {
						const t = a.body;
						n(R({
							subredditId: e,
							widgets: t
						}))
					} else n(A({
						subredditId: e,
						error: a.error
					}))
				}, M = (e, t) => async (n, r, s) => {
					let {
						apiContext: i
					} = s;
					const o = Object(g.X)(r(), {
							subredditId: e
						}).name,
						a = await m(i(), o, !0);
					if (a.ok) return a.body.items[t]
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/banners.ts"),
				a = n("./src/reddit/constants/page.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-redux/es/index.js")),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./node_modules/lodash/sampleSize.js"),
				b = n.n(p),
				f = n("./src/reddit/models/Gold/Award.ts"),
				h = n("./src/reddit/components/AwardedListingBanner/index.m.less"),
				g = n.n(h);
			const _ = 11,
				v = 1e3,
				x = 500,
				y = [g.a.iconCarouselInnerWrapper0, g.a.iconCarouselInnerWrapper1];

			function E(e) {
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
					this.timerId = setInterval(() => this.updateOrdering(), v + x)
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
						return e.awardType === f.e.Global && e.isEnabled && !e.isOptional
					});
					return n.length ? {
						icons: b()(n, _).map(e => {
							var t;
							const n = (null === (t = e.staticIcon64) || void 0 === t ? void 0 : t.url) || e.staticIcon.url;
							return s.a.createElement(E, {
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
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var S;
			! function(e) {
				e.Dismissed = "dismissed", e.Hidden = "hidden", e.Visible = "visible"
			}(S || (S = {}));
			t.a = e => {
				const {
					className: t
				} = e, n = Object(c.g)(o.a.AWARDED_LISTING_BANNER, a.g), [u, m] = Object(r.useState)(n ? S.Hidden : S.Visible);
				if (u === S.Hidden) return null;
				const p = () => {
					m(S.Visible), Object(c.ob)(o.a.AWARDED_LISTING_BANNER, !1, a.g)
				};
				return u === S.Dismissed ? s.a.createElement("div", {
					className: Object(i.a)(g.a.dismissedContainer, t)
				}, s.a.createElement("div", {
					className: g.a.dismissedText
				}, I._("Ok, we won't show you this again.", null, {
					hk: "4z33KK"
				})), s.a.createElement(d.l, {
					onClick: p
				}, I._("undo", null, {
					hk: "1A9z3Y"
				}))) : s.a.createElement("div", {
					className: Object(i.a)(g.a.container, t)
				}, s.a.createElement("h2", {
					className: g.a.title
				}, I._("Explore and react to the top awarded posts on Reddit", null, {
					hk: "3IAtgk"
				})), s.a.createElement(C, null), s.a.createElement(l.a, {
					className: g.a.close,
					onClick: () => {
						m(S.Dismissed), Object(c.ob)(o.a.AWARDED_LISTING_BANNER, !0, a.g)
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
				i = n("./src/reddit/components/AdViewability/index.tsx"),
				o = n("./src/reddit/connectors/PostViewable/index.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/contexts/Post/index.tsx");
			const d = Object(o.a)(null),
				l = e => {
					let {
						className: t,
						post: n
					} = e;
					return n.isSponsored ? s.a.createElement(i.a, {
						post: n,
						trackDisplay: !0
					}, s.a.createElement("div", {
						className: Object(a.a)(t, `Blank ${n.id}`)
					})) : null
				};
			t.default = Object(c.b)(d(l))
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				a = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(o.b, {
				className: Object(i.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
			}, d._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [d._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/About/index.m.less": function(e, t, n) {
			e.exports = {
				container: "N_iDpRmG9YYThFDrZyJAv",
				aboutHeader: "_2T1tO-zWzgtKTFfmut2w7_",
				infoIcon: "_1FfqSg_dkea9uZhjR2NZff",
				expandButton: "_3756Fx6x6guD5iUTIFyKLQ",
				headerText: "heKUEgv15QcZEOOBQLcdQ",
				content: "_24emvNxFCdF1xT1nE07Z22",
				collapsed: "_3WvNFS-a1EomDcvRVPdxaL"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/ChannelsList/index.m.less": function(e, t, n) {
			e.exports = {
				more: "yEXxZgb5MQg4NSGZ0WMgB",
				moreText: "PwTl0c0TTn3dtqLgSGHH2",
				chevronIcon: "LZZ_vW1DYdahLhiRHXerj"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/ListItem/index.m.less": function(e, t, n) {
			e.exports = {
				listItem: "w5boqI7CP61oplJYuKFgy",
				greyBackground: "_3JZ1jE9fZedmnOqszIX6Uq",
				name: "_1g82YJfPfX99XdDk4RCVvF",
				bold: "_3PEjo4_qw1yF6OAY528CNz",
				light: "_3oOf0AMbtBG-11JXinK6HH",
				notificationIndicator: "_3KPn156kySmig6QuGEl8D8",
				chatBubblesIcon: "_38m5ZUgLSYat8ghDOUzI5D",
				postsIcon: "_1a3DK4OMX0U6aSijf05RjW"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/ListItem/placeholder.m.less": function(e, t, n) {
			e.exports = {
				container: "_2ntycIUtqloepWz_WOkB1-",
				icon: "_15LJ5K95RpfroqVCo6h6Jz",
				content: "O8WqhKsM6uqZ1ti4jzftf",
				shimmer: "xqDuRbD54bfTiYuytbqHC",
				gradientAnimation: "_31lalrJCmaEJyJOrrOnELR"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				sidebar: "_1g18x6QdNGxinN6_cuc2_1"
			}
		},
		"./src/reddit/components/CommunityChat/constants.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.NEVER_VISITED = "NEVER_VISITED", e.VISITED__NO_NEW_ACTIVITY = "VISITED__NO_NEW_ACTIVITY", e.VISITED__HAS_NEW_ACTIVITY = "VISITED__HAS_NEW_ACTIVITY"
				}(r || (r = {}));
			const s = "matrix-client-container"
		},
		"./src/reddit/components/CommunityChat/contexts/MatrixClientContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./node_modules/matrix-js-sdk/lib/browser-index.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/selectors/user.ts");
			const d = Object(i.createContext)(null),
				l = e => {
					let {
						children: t
					} = e;
					const n = Object(a.e)(c.a),
						[l, u] = Object(i.useState)(null);
					return Object(i.useEffect)(() => {
						let e = !0;
						const t = s.a.createClient({
							baseUrl: "https://matrix.redditspace.com",
							timelineSupport: !0,
							useAuthorizationHeader: !0
						});
						return (async () => {
							await t.login("com.reddit.token", {
								token: n
							}), await t.startClient({
								initialSyncLimit: 10,
								pollTimeout: 3e4
							}), t.once(r.ClientEvent.Sync, async n => {
								"PREPARED" === n && e && u(t)
							})
						})(), () => {
							e = !1, t.stopClient(), u(null)
						}
					}, [n]), o.a.createElement(d.Provider, {
						value: l
					}, t)
				},
				u = () => Object(i.useContext)(d)
		},
		"./src/reddit/components/CommunityChat/fallback.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s);

			function o() {
				return i.a.createElement("span", null, r.fbt._("Chat failed to load...", null, {
					hk: "4CZpEq"
				}))
			}
		},
		"./src/reddit/components/CommunityChat/hooks/useAutoJoin.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return d
			}));
			var r, s = n("./src/lib/sentry/index.ts"),
				i = n("./node_modules/matrix-js-sdk/lib/browser-index.js"),
				o = n("./node_modules/react/index.js"),
				a = n("./src/reddit/components/CommunityChat/contexts/MatrixClientContext.tsx");

			function c(e, t) {
				var n;
				return (null === (n = e.getRoom(t)) || void 0 === n ? void 0 : n.getMyMembership()) || r.none
			}

			function d(e) {
				const t = Object(a.b)(),
					[n, d] = Object(o.useState)(r.none);
				return Object(o.useEffect)(() => {
					t && e && (c(t, e) === r.join ? d(r.join) : async function(e, t, n) {
						function o() {
							c(e, t) === r.join && (n(t), e.off(i.ClientEvent.Sync, o))
						}
						e.on(i.ClientEvent.Sync, o);
						try {
							await e.joinRoom(t)
						} catch (a) {
							const t = new Error(`Failed to join room: ${a.message}`);
							s.c.captureException(t), e.off(i.ClientEvent.Sync, o)
						}
					}(t, e, t => {
						t === e && d(r.join)
					}))
				}, [t, e, d]), n
			}! function(e) {
				e.ban = "ban", e.invite = "invite", e.join = "join", e.leave = "leave", e.none = "none"
			}(r || (r = {}))
		},
		"./src/reddit/components/CommunityChat/hooks/useCaptureKeyboardEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/reddit/components/CommunityChat/constants.ts");

			function i() {
				const e = Object(r.useCallback)(e => {
					e.stopPropagation()
				}, []);
				Object(r.useEffect)(() => {
					const t = document.getElementById(s.b);
					null == t || t.addEventListener("keypress", e), null == t || t.addEventListener("keyup", e)
				}, [e])
			}
		},
		"./src/reddit/components/CommunityChat/index.m.less": function(e, t, n) {
			e.exports = {
				matrixClient: "_3Kt3F1QUJNmP0qVWKfPkRd",
				communityRoom: "_1w5FGpcEAWfGVEdWnuOrsf"
			}
		},
		"./src/reddit/components/CommunityChat/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/lodash/throttle.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/components/ErrorBoundary/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/components/CommunityChat/constants.ts"),
				p = n("./src/reddit/components/CommunityChat/fallback.tsx"),
				b = n("./src/reddit/components/CommunityChat/hooks/useAutoJoin.ts"),
				f = n("./src/reddit/components/CommunityChat/hooks/useCaptureKeyboardEvents.ts"),
				h = n("./src/reddit/components/CommunityChat/index.m.less"),
				g = n.n(h);
			const _ = 200,
				v = 15,
				x = Object(r.a)({
					resolved: {},
					chunkName: () => "community-room",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~community-room"), n.e("community-room")]).then(n.bind(null, "./src/reddit/components/CommunityChat/CommunityRoom.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/CommunityChat/CommunityRoom.tsx"
					}
				}, {
					ssr: !1,
					fallback: a.a.createElement(u.a, {
						sizePx: 30
					})
				});

			function y() {
				const [e, t] = Object(o.useState)(0);
				return Object(o.useLayoutEffect)(() => {
					const e = document.getElementById("matrix-client-container"),
						n = i()(() => {
							const n = null == e ? void 0 : e.getBoundingClientRect(),
								r = window.innerHeight - ((null == n ? void 0 : n.top) || 0) - v;
							t(Math.max(_, r))
						}, d.M);
					return n(), window.addEventListener("resize", n), () => {
						window.removeEventListener("resize", n)
					}
				}, [t]), Object(o.useMemo)(() => ({
					height: e
				}), [e])
			}

			function E(e) {
				let {
					roomId: t,
					accessToken: n
				} = e;
				const r = y();
				Object(f.a)();
				const s = Object(b.b)(t);
				return a.a.createElement("div", {
					id: m.b,
					style: r,
					className: Object(c.a)(g.a.matrixClient, {
						invisible: 0 === r.height
					})
				}, s === b.a.join ? a.a.createElement(x, {
					roomId: t,
					accessToken: n
				}) : a.a.createElement(u.a, {
					sizePx: 30
				}))
			}

			function O(e) {
				let {
					roomId: t,
					accessToken: n
				} = e;
				return a.a.createElement(l.a, {
					FallbackComponent: p.a
				}, a.a.createElement(E, {
					roomId: t,
					accessToken: n
				}))
			}
			t.a = a.a.memo(O)
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
		"./src/reddit/components/CommunityIdTopBar/UserCount/index.m.less": function(e, t, n) {
			e.exports = {
				userCountContainer: "_2RrnVtJvy93R_5EsAOLOlj",
				currentlyViewingCount: "_1-ha6lk0s1V4mXK-GXIY_P",
				separator: "_3pTilZhQ0eLPU1K9h-DUg5",
				subscriberCount: "_3Ou6utr-V6t9WH76zWxf5J"
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/actions/subreddit/muting.ts"),
				m = n("./src/reddit/actions/subreddit/notifications.ts"),
				p = n("./src/lib/combineRefs/index.tsx"),
				b = n("./src/lib/hooks/useOnClickOutside.ts"),
				f = n("./src/lib/hooks/useTooltip.ts"),
				h = n("./src/reddit/components/CommonTooltip/index.m.less"),
				g = n.n(h);

			function _() {
				return (_ = Object.assign || function(e) {
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
						className: i,
						arrowClassName: o,
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
					}, [t]), t ? s.a.createElement("div", _({
						id: n,
						className: Object(a.a)(g.a.tooltip, i, {
							[g.a.visible]: d
						})
					}, c.popperProps), d && s.a.createElement(s.a.Fragment, null, c.arrowProps && s.a.createElement("div", _({
						className: Object(a.a)(g.a.arrow, o)
					}, c.arrowProps)), c.children)) : null
				})),
				x = n("./src/reddit/models/Subreddit/index.ts");
			const y = e => {
					switch (e) {
						case x.c.FREQUENT:
							return "notification_frequent";
						case x.c.OFF:
							return "notification_off";
						case x.c.LOW:
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
				I = n("./src/reddit/controls/Dropdown/Row.tsx"),
				S = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				N = n.n(k);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var T = e => {
					return s.a.createElement(C.a, {
						id: e.dropdownId,
						className: N.a.notificationDropdown
					}, [{
						displayText: j.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(x.c.FREQUENT),
						isSelected: e.notificationLevel === x.c.FREQUENT,
						icon: s.a.createElement(S.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === x.c.FREQUENT
						})
					}, {
						displayText: j.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(x.c.LOW),
						isSelected: e.notificationLevel === x.c.LOW,
						icon: s.a.createElement(S.a, {
							name: "notification",
							isFilled: e.notificationLevel === x.c.LOW
						})
					}, {
						displayText: j.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(x.c.OFF),
						isSelected: e.notificationLevel === x.c.OFF,
						icon: s.a.createElement(S.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === x.c.OFF
						})
					}].map(e => s.a.createElement(I.b, w({
						className: Object(a.a)(N.a.notificationDropdown, N.a.notificationRow, {
							[N.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				P = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/selectors/telemetry.ts");
			const D = e => t => ({
				...L.p(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: L.mb(t)
			});
			var R = n("./src/reddit/hooks/useTracking.ts"),
				A = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const B = d.a.img("SubredditIcon", N.a),
				M = d.a.wrapped(A.a, "DefaultIcon", N.a);
			var U = e => {
					let {
						subredditName: t,
						shouldShowSubredditIcon: n,
						subredditIcon: r,
						onHide: i,
						onUpdate: o
					} = e;
					const a = Object(R.a)(),
						c = n ? s.a.createElement(B, {
							src: r || void 0
						}) : s.a.createElement(M, null),
						d = `r/${t}`;
					return s.a.createElement("div", {
						className: N.a.notificationPopup
					}, s.a.createElement("div", {
						className: N.a.title
					}, s.a.createElement("h2", null, j.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), s.a.createElement("h3", null, j.fbt._("{subreddit name}", [j.fbt._param("subreddit name", d)], {
						hk: "1es0XP"
					}))), s.a.createElement("div", {
						className: N.a.subredditWrapper
					}, s.a.createElement("div", {
						className: N.a.subredditTitle
					}, c, s.a.createElement("span", null, d), s.a.createElement(S.a, {
						name: "notification_frequent",
						className: N.a.notificationIcon,
						isFilled: !0
					})), s.a.createElement(P.t, {
						className: N.a.subscribeButton,
						priority: P.c.Primary,
						size: P.d.M,
						text: j.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							i(), o(x.c.FREQUENT), a(D(x.c.FREQUENT.toLowerCase()))
						}
					})), s.a.createElement("button", {
						className: N.a.hideButton,
						onClick: i
					}, j.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				F = n("./src/reddit/helpers/localStorage/index.ts");
			var W = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var H = e => {
					const t = Object(i.d)(),
						n = Object(R.a)(),
						o = Object(f.b)(E),
						a = Object(f.b)(O),
						[c, d] = function(e, t) {
							const [n, s] = Object(r.useState)(Object(F.V)(e, t));
							return [n, Object(r.useCallback)(() => {
								const n = Object(F.a)(e, t);
								s(n)
							}, [e, t, s])]
						}(e.userId, e.subredditId),
						l = Object(i.e)(e => !!Object(W.a)(e));
					Object(r.useEffect)(() => {
						e.notificationLevel !== x.c.LOW && e.notificationLevel !== x.c.OFF || d()
					}, [e.subredditId]);
					const u = 2 === c,
						h = () => {
							o.hide()
						},
						g = () => {
							a.hide()
						};
					Object(r.useEffect)(() => (u && (a.update && a.update(), a.show()), () => {
						g(), h()
					}), [e.subredditName, u]);
					const _ = () => {
							g(), o.show()
						},
						j = (e => `dropdown-${e}`)(e.subredditName),
						C = (e => `popup-${e}`)(e.subredditName);
					Object(b.a)(j, h);
					const I = Object(r.useCallback)(e => {
							e.stopPropagation(), o.visible ? h() : _()
						}, [h, _, o.visible]),
						k = Object(r.useCallback)(t => {
							t === x.c.FREQUENT && Object(F.fb)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						w = Object(r.useCallback)(r => {
							const {
								subredditId: s
							} = e;
							h(), g(), t(Object(m.d)({
								subredditId: s,
								notificationLevel: r,
								successCallback: () => k(r)
							})), n(D(r.toLowerCase()))
						}, [h, e.subredditId, t, n]);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
						type: "button",
						className: N.a.notificationButton,
						ref: Object(p.a)(o.target.ref, a.target.ref),
						onClick: I,
						"data-testid": "subredditNotificationButton"
					}, s.a.createElement(S.a, {
						name: y(e.notificationLevel),
						className: N.a.notificationIcon,
						isFilled: !0
					})), s.a.createElement(v, {
						popperProps: o.popperProps,
						visible: o.visible,
						tooltipId: j
					}, s.a.createElement(T, {
						dropdownId: j,
						notificationLevel: e.notificationLevel,
						onClick: w
					})), u && !l && s.a.createElement(v, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: C,
						className: N.a.popupTooltip
					}, s.a.createElement(U, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: g,
						onUpdate: w
					})))
				},
				V = n("./src/lib/prettyPrintNumber/index.ts"),
				G = n("./src/reddit/selectors/widgets.ts"),
				q = n("./src/reddit/components/CommunityIdTopBar/UserCount/index.m.less"),
				K = n.n(q);
			const z = j.fbt._("members", null, {
					hk: "28o6N2"
				}),
				Y = j.fbt._("online", null, {
					hk: "3UJwb6"
				}),
				Q = (e, t) => void 0 !== e && t ? `${Object(V.b)(e)} ${t}` : "";
			var J = e => {
					let {
						subredditId: t
					} = e;
					const n = Object(i.e)(e => Object(G.d)(e, {
							subredditId: t
						})),
						{
							currentlyViewingCount: o,
							currentlyViewingText: a,
							subscribersCount: c,
							subscribersText: d
						} = n || {},
						l = Object(r.useMemo)(() => Q(o, a || Y), [o, a]),
						u = Object(r.useMemo)(() => Q(c, d || z), [c, d]);
					return l || u ? s.a.createElement("div", {
						className: K.a.userCountContainer
					}, s.a.createElement("span", {
						className: K.a.currentlyViewingCount
					}, u), s.a.createElement("span", {
						className: K.a.separator
					}, u && l && "•"), s.a.createElement("span", {
						className: K.a.subscriberCount
					}, l)) : null
				},
				Z = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				X = n("./src/reddit/components/SubredditNav/index.tsx"),
				$ = n("./src/reddit/components/SubscribeButton/index.tsx"),
				ee = n("./src/reddit/constants/componentSizes.ts"),
				te = n("./src/reddit/constants/postLayout.ts"),
				ne = n("./src/reddit/constants/posts.ts"),
				re = n("./src/reddit/featureFlags/index.ts"),
				se = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				ie = n("./src/reddit/constants/tracking.ts");
			var oe = n("./src/reddit/helpers/trackers/subredditMuting.ts"),
				ae = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				ce = n("./src/reddit/hooks/useWindowEvent.ts"),
				de = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				le = n("./src/reddit/selectors/experiments/communityChat.ts"),
				ue = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				me = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				pe = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				be = n("./src/reddit/selectors/subreddit.ts"),
				fe = n("./src/reddit/selectors/user.ts"),
				he = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				ge = n.n(he),
				_e = n("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				ve = n("./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less"),
				xe = n.n(ve);
			const {
				fbt: ye
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ee = e => {
				let {
					onClickUnmute: t
				} = e;
				return s.a.createElement(P.t, {
					priority: P.c.Plain,
					className: xe.a.muteButton,
					onClick: t
				}, s.a.createElement(_e.a, {
					className: xe.a.muteIcon
				}), s.a.createElement("span", {
					className: xe.a.muteDefault
				}, ye._("Muted", null, {
					hk: "incHh"
				})), s.a.createElement("span", {
					className: xe.a.muteHover
				}, ye._("Unmute", null, {
					hk: "4qbgbm"
				})))
			}, Oe = d.a.img("SubredditIcon", ge.a), je = Object(o.c)({
				isNsfwBlurSubreddit: me.e,
				notificationLevel: be.L,
				isMuted: be.K,
				spPollsEnabled: re.d.spPolls,
				subredditInlineEditingEnabled: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(pe.a)(e, {
						subredditId: n
					})
				},
				tournamentsEnabled: (e, t) => {
					let {
						subredditId: n
					} = t;
					return !!n && Object(be.S)(e, {
						subredditId: n
					})
				},
				userId: fe.k,
				userIsSubscriber: (e, t) => {
					let {
						subredditName: n
					} = t;
					const r = n;
					return Object(be.jb)(e, {
						identifier: {
							name: r,
							type: "subreddit"
						}
					})
				},
				isCommunityMutingEnabled: de.a,
				widget: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(G.f)(e, {
						subredditId: n
					}) : void 0
				},
				showCommunityChat: le.d
			}), Ce = {
				threshold: [.5, .001],
				rootMargin: `${1-ee.f}px 0px 0px 0px`
			};
			t.a = Object(i.b)(je, (e, t) => ({
				_updateSubredditInfo: () => {
					var n;
					const r = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (r) return e(Object(m.c)({
						subredditAboutInfo: {
							[r]: {
								notificationLevel: x.c.LOW
							}
						}
					}))
				},
				unmuteSubreddit: () => {
					var n;
					const r = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id),
						s = t.subreddit ? t.subreddit.name : t.subredditName;
					if (r) return e(Object(u.e)({
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
					o = e.subreddit ? e.subreddit.url : e.subredditUrl,
					c = e.subreddit ? e.subreddit.title : "",
					d = Object(i.e)(ue.b),
					u = Object(i.e)(ue.a),
					m = d || u,
					[p, b] = Object(r.useState)(!1),
					f = Object(r.useRef)(null),
					[h, g] = Object(r.useState)(),
					[_, v] = Object(r.useState)(null),
					x = Object(R.a)(),
					y = Object(r.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: n
							} = t;
							n >= .5 ? e(!1) : n <= .001 && e(!0)
						})
					})(b), []);
				Object(ce.a)("resize", ((e, t, n) => () => {
					var r;
					e(t && n ? null === (r = t.getBoundingClientRect()) || void 0 === r ? void 0 : r.height : void 0)
				})(g, _, m)), Object(ae.a)(f, y, Ce);
				const E = e.subreddit && Object(se.a)(e),
					O = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && E),
					j = n.charAt(0).toUpperCase() + n.slice(1),
					C = !!e.subreddit && e.subredditInlineEditingEnabled,
					I = Object(a.a)(ge.a.SubredditIcon, ge.a.editableIcon, {
						[ge.a.emptyEditableIcon]: !E
					}),
					S = O ? s.a.createElement(Z.a, {
						className: I,
						subreddit: e.subreddit,
						iconUrl: E || void 0,
						inTopBar: !0
					}) : s.a.createElement(A.a, {
						className: ge.a.DefaultIcon
					}),
					k = O ? s.a.createElement(Oe, {
						className: Object(a.a)(ge.a.SubredditIconImg, {
							[ge.a.blur]: e.isNsfwBlurSubreddit
						}),
						src: E || void 0
					}) : s.a.createElement(A.a, {
						className: Object(a.a)(ge.a.DefaultIcon, {
							[ge.a.blur]: e.isNsfwBlurSubreddit
						})
					}),
					N = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					w = e.layout ? e.layout === te.g.Large ? "984px" : "100%" : "1086px",
					T = e.isCommunityMutingEnabled && e.isMuted;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					style: {
						height: p ? void 0 : h
					},
					className: Object(a.a)(ge.a.wrapper, {
						[ge.a.stickyWrapper]: m,
						[ge.a.isSticking]: p
					})
				}, s.a.createElement("div", {
					className: ge.a.container,
					style: {
						maxWidth: w
					},
					ref: m ? v : void 0
				}, s.a.createElement("div", {
					className: ge.a.subredditMetaContainer
				}, C ? S : k, s.a.createElement("div", {
					className: Object(a.a)(ge.a.textContainer, {
						[ge.a.textContainerNoIcon]: !O
					})
				}, s.a.createElement("div", {
					className: Object(a.a)(ge.a.text, {
						[ge.a.blur]: e.isNsfwBlurSubreddit
					})
				}, s.a.createElement("h1", {
					className: ge.a.title
				}, c || j), !!c && s.a.createElement("h2", {
					className: ge.a.description
				}, "r/", n), e.showCommunityChat && !!t && s.a.createElement(J, {
					subredditId: t
				})), s.a.createElement("div", {
					className: ge.a.buttonWrapper
				}, s.a.createElement("div", {
					className: ge.a.subscribeButtonContainer
				}, s.a.createElement($.a, {
					className: ge.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return p ? (e => t => ({
							...L.p(t),
							source: "sticky_banner",
							action: ie.c.CLICK,
							noun: e,
							subreddit: L.mb(t)
						}))(t) : (e => t => ({
							...L.p(t),
							source: "id_banner",
							action: ie.c.CLICK,
							noun: e,
							subreddit: L.mb(t)
						}))(t)
					},
					identifier: {
						name: n,
						type: ne.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					onClick: () => {
						!e.userIsSubscriber && e.setRelatedRecommendedCommunitiesVisible && e.setRelatedRecommendedCommunitiesVisible(!0)
					},
					afterUnsubscribeAction: () => {
						t && (Object(F.fb)(e.userId, t), e.updateSubredditInfo())
					}
				})), T && s.a.createElement(Ee, {
					onClickUnmute: () => {
						x(Object(oe.b)({
							subredditId: t
						})), e.unmuteSubreddit()
					}
				}), e.userIsSubscriber && !T && t && e.notificationLevel && s.a.createElement("div", {
					className: ge.a.notificationButtonContainer
				}, s.a.createElement(H, {
					notificationLevel: e.notificationLevel,
					subredditName: n,
					subredditId: t,
					subredditIcon: E,
					shouldShowSubredditIcon: O,
					userId: e.userId
				}))))), N && s.a.createElement(X.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: o,
					subredditId: t,
					subredditNavContainerClassName: ge.a.subredditNavContainer
				}))), s.a.createElement("div", {
					className: ge.a.intersectionWrapper
				}, s.a.createElement("div", {
					style: {
						height: m ? h : void 0
					},
					ref: m ? f : void 0
				})))
			}))
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "j", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/redditGQL/types.ts");
			const i = 500,
				o = 100,
				a = 5e3,
				c = 0,
				d = 1440,
				l = 36600,
				u = 1e9,
				m = {
					disabled: r.fbt._("Disabled", null, {
						hk: "1KaunG"
					}).toString(),
					modonly: r.fbt._("Mods only", null, {
						hk: "2yA6R8"
					}).toString(),
					anyone: r.fbt._("Anyone", null, {
						hk: "4gPsEy"
					}).toString()
				},
				p = [r.fbt._("Wiki is disabled for all users except mods", null, {
					hk: "2loUiE"
				}).toString(), r.fbt._("Only mods, approved wiki contributors, or those on a page's edit list may edit", null, {
					hk: "1WUeVN"
				}).toString(), r.fbt._("Anyone who can submit to the community may edit", null, {
					hk: "3hxotT"
				}).toString()],
				b = {
					any: r.fbt._("Any", null, {
						hk: "hVUT8"
					}),
					link: r.fbt._("Links only", null, {
						hk: "3upkyk"
					}),
					self: r.fbt._("Text posts only", null, {
						hk: "1VZn8Y"
					})
				},
				f = [r.fbt._("Any post type is allowed", null, {
					hk: "1rOxtJ"
				}), r.fbt._("Only links to external sites are allowed", null, {
					hk: "OJQdj"
				}), r.fbt._("Only text posts are allowed", null, {
					hk: "3q3v14"
				})],
				h = {
					mods: r.fbt._("Moderators", null, {
						hk: "2rrkiT"
					}),
					anyone: r.fbt._("Anyone", null, {
						hk: "Xp8Fs"
					})
				},
				g = {
					[s.Y.Low]: r.fbt._("Low", null, {
						hk: "4k3iTe"
					}),
					[s.Y.High]: r.fbt._("High (default)", null, {
						hk: "2GOHsH"
					}),
					[s.Y.All]: r.fbt._("All", null, {
						hk: "gl6gc"
					})
				},
				_ = {
					[s.Y.Low]: r.fbt._("Low (default)", null, {
						hk: "2tqJd7"
					}),
					[s.Y.High]: r.fbt._("High", null, {
						hk: "ABfkc"
					}),
					[s.Y.All]: r.fbt._("All", null, {
						hk: "3bPDOM"
					})
				},
				v = {
					blank: r.fbt._("none (recommended)", null, {
						hk: "2FMwQH"
					}),
					confidence: r.fbt._("best", null, {
						hk: "13cLYH"
					}),
					old: r.fbt._("old", null, {
						hk: "3V0QN8"
					}),
					top: r.fbt._("top", null, {
						hk: "40R5FY"
					}),
					qa: r.fbt._("q&a", null, {
						hk: "3cm6YL"
					}),
					live: r.fbt._("live (beta)", null, {
						hk: "2EVYAd"
					}),
					controversial: r.fbt._("controversial", null, {
						hk: "1uFV5F"
					}),
					new: r.fbt._("new", null, {
						hk: "39TZi6"
					})
				}
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
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				QuarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
				quarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				f = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = n("./src/reddit/components/Footer/index.tsx"),
				g = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				_ = n("./src/reddit/components/RichTextJson/index.tsx"),
				v = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				x = n("./node_modules/lodash/flatMap.js"),
				y = n.n(x),
				E = n("./src/lib/linkMatchers/index.ts"),
				O = n("./src/lib/linkMatchers/customLinks.ts"),
				j = n("./src/reddit/controls/OutboundLink/index.tsx");
			const C = /\[(.+?)\]\((.+?)\)/g,
				I = e => {
					const t = e.split(C);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, s, i] = t.slice(r, r + 3);
						n.push(e), n.push([i, s])
					}
					return n
				};
			var S = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = y()(t, I)), e.parseRegularLinks && (t = y()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = E.f.add(O.g.subreddit.prefix, O.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let r = null;
						for (const s of t) n.push(e.slice(r ? r.lastIndex : 0, s.index)), r = s, n.push([s.url, s.text]);
						return r && n.push(e.slice(r.lastIndex)), n
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [r, s] = t;
							return i.a.createElement(j.b, {
								className: e.linkClassName,
								href: r,
								key: n
							}, s)
						}
						return i.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				k = n("./src/reddit/constants/parameters.ts"),
				N = n("./src/reddit/contexts/PageLayer/index.tsx"),
				w = n("./src/reddit/controls/Button/index.tsx"),
				T = n("./src/reddit/icons/svgs/PrivateKey/index.tsx"),
				P = n("./src/reddit/models/ContentGate.ts"),
				L = n("./src/reddit/selectors/contentGate.ts"),
				D = n("./src/reddit/selectors/meta.ts"),
				R = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/components/ContentGate/index.m.less"),
				B = n.n(A);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = l.a.wrapped(T.a, "PrivateKey", B.a), F = l.a.div("ButtonsContainer", B.a), W = l.a.div("Container", B.a), H = l.a.div("ContainerExp", B.a), V = l.a.div("Description", B.a), G = l.a.div("PrivateSubredditDetails", B.a), q = l.a.div("PrivateSubredditDescription", B.a), K = l.a.h3("PrivateSubredditName", B.a), z = l.a.a("Link", B.a), Y = l.a.wrapped(w.n, "LinkRouterButton", B.a), Q = l.a.wrapped(w.m, "LinkButton", B.a), J = l.a.wrapped(w.p, "SecondaryLinkButton", B.a), Z = l.a.wrapped(Y, "GoHomeLinkButton", B.a), X = l.a.wrapped(f.a, "CreateCommunityButton", B.a), $ = l.a.img("Image", B.a), ee = l.a.img("ImagePlaceholder", B.a), te = l.a.wrapped(Y, "LeftLinkRouterButton", B.a), ne = l.a.wrapped(Q, "LeftLinkButton", B.a), re = l.a.wrapped(J, "SecondaryLeftLinkButton", B.a), se = l.a.h3("Title", B.a), ie = l.a.div("PageBody", B.a), oe = l.a.div("InterstitialMessageWrapper", B.a), ae = l.a.div("QuarantineLearnMore", B.a), ce = Object(d.c)({
				isLoggedIn: R.R,
				origin: D.l,
				user: R.m,
				isPrivateSubredditContributorRequestPending: e => Object(L.a)(e),
				isSeo: D.h
			}), de = Object(N.v)(), le = Object(o.b)(ce, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.C(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.u(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.r)())
					}
				}
			}), ue = e => {
				const {
					banMessage: t,
					banTitle: n,
					contentGateType: s,
					continueToQuarantinedSubreddit: o,
					continueToGatedSubreddit: a,
					isLoggedIn: c,
					isContributorRequestsDisabled: d,
					isPrivateSubredditContributorRequestPending: l,
					isSeo: p,
					location: f,
					origin: h,
					pageLayer: x,
					quarantineRequiresEmail: y,
					quarantineMessage: E,
					quarantineMessageHtml: O,
					quarantineMessageRTJson: j,
					interstitialWarningMessage: C,
					interstitialWarningMessageHtml: I,
					interstitialWarningMessageRTJson: N,
					setNSFWPreference: w,
					subredditDescription: T,
					subredditName: L,
					user: D
				} = e, R = async () => {
					if (c ? await w() : await Object(m.q)(), p) {
						const e = new URL(window.location.href);
						e.searchParams.set(k.k, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (s) {
					case P.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(se, null, M._("r/{community name} is a Reddit Premium community", [M._param("community name", L)], {
							hk: "2lyDwB"
						})), i.a.createElement(V, null, M._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(F, null, D ? i.a.createElement(re, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, M._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(ne, {
							href: Object(u.a)(f, h),
							redditStyle: !0
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), D ? i.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(J, {
							href: Object(u.a)(f, h),
							redditStyle: !0
						}, M._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case P.a.Nsfw:
					case P.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(se, null, s === P.a.Nsfw ? M._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : M._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(V, null, M._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(F, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(J, {
							onClick: R,
							redditStyle: !0
						}, M._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case P.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(U, null), i.a.createElement(se, null, "r/", L, " ", M._("is a private community", null, {
							hk: "7zZmq"
						})), T && T.length && i.a.createElement(G, null, i.a.createElement(K, null, "r/", L), i.a.createElement(q, null, i.a.createElement("div", null, T))), i.a.createElement(V, null, M._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", L, " ", M._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), M._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(F, null, D ? i.a.createElement(i.a.Fragment, null, !d && i.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: B.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), i.a.createElement(re, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${L}`,
							redditStyle: !0
						}, M._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(re, {
							href: Object(u.a)(f, h),
							redditStyle: !0
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, M._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), L && i.a.createElement(v.a, {
							subredditName: L
						}));
					case P.a.QuarantinedSubreddit:
						const c = D && D.hasVerifiedEmail;
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined_interstitial.svg`
						}), i.a.createElement(se, null, M._("r/{subredditName} is quarantined", [M._param("subredditName", L)], {
							hk: "2pxhFx"
						})), i.a.createElement(V, null, i.a.createElement(oe, null, j ? i.a.createElement(_.b, {
							content: j,
							rtJsonElementProps: {
								pageLayer: x
							}
						}) : O ? i.a.createElement(g.a, {
							html: O
						}) : E || M._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), !y || c ? M._("Are you sure you’d like to continue?", null, {
							hk: "1fQqm4"
						}) : D ? M._("If you’d still like to view this community, verify your email address to continue.", null, {
							hk: "2vhFbK"
						}) : M._("If you’d still like to view this community, verify your email address and log in to your Reddit account to continue.", null, {
							hk: "2SmlRy"
						})), i.a.createElement(F, null, ((e, t, n) => {
							const s = e && e.hasVerifiedEmail;
							return !n || s ? i.a.createElement(F, null, i.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, M._("Go Back", null, {
								hk: "11Lp6m"
							})), i.a.createElement(J, {
								onClick: t,
								redditStyle: !0
							}, M._("Yes, Continue", null, {
								hk: "1D03m3"
							}))) : i.a.createElement(F, null, i.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, M._("Go Back", null, {
								hk: "11Lp6m"
							})), i.a.createElement(J, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, M._("Verify Email", null, {
								hk: "1893cq"
							})))
						})(D, o, y)), i.a.createElement(ae, null, M._("Learn more about {=quarantined communities}.", [M._param("=quarantined communities", i.a.createElement(z, {
							href: "https://reddit.zendesk.com/hc/en-us/articles/360043069012-Quarantined-Subreddits"
						}, M._("quarantined communities", null, {
							hk: "3yq6Z5"
						})))], {
							hk: "uOTFJ"
						})));
					case P.a.GatedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(se, null, M._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), i.a.createElement(V, null, i.a.createElement(oe, null, N ? i.a.createElement(_.b, {
							content: N,
							rtJsonElementProps: {
								pageLayer: x
							}
						}) : I ? i.a.createElement(g.a, {
							html: I
						}) : C), M._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), i.a.createElement(F, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("No Thank You", null, {
							hk: "4B26AR"
						})), i.a.createElement(J, {
							onClick: a,
							redditStyle: !0
						}, M._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case P.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(se, null, n), (e => i.a.createElement(V, null, e ? i.a.createElement(S, {
							linkClassName: B.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : M._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(F, null, i.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case P.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(se, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(F, null, i.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case P.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ee, null), i.a.createElement(se, null, M._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(V, null, M._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(F, null, D && i.a.createElement(X, {
							eventSource: "content_gate"
						}), i.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case P.a.ProfileDoesNotExist:
					case P.a.ProfileDeleted:
					case P.a.ProfileSuspended:
					case P.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(se, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case P.a.ProfileBlockedForLegalReason:
									return M._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case P.a.ProfileDeleted:
									return M._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case P.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, M._("This account has been {=suspended} .", [M._param("=suspended", i.a.createElement(z, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, M._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case P.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(se, null, M._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(V, null, M._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(F, null, i.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case P.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(se, null, M._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(F, null, i.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case P.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement($, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(se, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(F, null, i.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, M._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = de(le(Object(a.i)(e => {
				const t = Object(s.useContext)(c.a) ? H : W;
				return i.a.createElement(t, null, i.a.createElement("div", {
					"data-testid": "content-gate"
				}, i.a.createElement(ie, null, ue(e))), i.a.createElement(h.b, null))
			})))
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/config.ts"),
				o = n("./src/reddit/components/ContentSurvey/index.m.less"),
				a = n.n(o),
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
				const [o, p] = Object(r.useState)(!1), b = Object(d.a)();
				return Object(r.useEffect)(() => b(Object(c.h)()), [b]), s.a.createElement("div", {
					className: a.a.feedBanner,
					onClick: function() {
						p(!0), b(Object(c.g)())
					}
				}, s.a.createElement("div", {
					className: a.a.notepadSnoo
				}, s.a.createElement("img", {
					src: `${i.a.assetPath}/img/snoovatar-notepad.png`
				})), s.a.createElement("div", {
					className: a.a.bannerCopy
				}, s.a.createElement("p", {
					className: a.a.copy
				}, m._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), s.a.createElement("p", {
					className: a.a.meta
				}, m._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), s.a.createElement(l.a, {
					name: "caret_right",
					className: a.a.chevron
				}), o && s.a.createElement(u.a, {
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
			const i = Object(r.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e(0), n.e(5)]).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
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
				o = Object(s.a)(i);
			t.a = o
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
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(h),
				_ = n("./src/lib/lessComponent.tsx");
			const v = "create-community-button",
				x = _.a.wrapped(l.c, "StyledTooltip", g.a),
				y = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(f.sb)(e),
					userIsSuspended: f.Z
				});
			t.a = Object(o.b)(y, (e, t) => {
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
					onHideTooltip: o,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: u
				} = e;
				return i.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						u && u(e), a(c)
					},
					onMouseEnter: s,
					onMouseLeave: o,
					priority: p.c.Secondary,
					id: v,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? i.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: v,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? i.a.createElement(x, {
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
				landingPageTitleFontH1: "_2rhyIzueJnamDCLTVji2bX",
				landingPageTitleFontH2: "IkHneGRWExxPl4q-DTAJA",
				landingPageTitleFontH3: "_2kR4TPEfOPfG6DqStt2Die",
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
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/toaster.ts"),
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
			var f = n("./src/reddit/icons/svgs/CirclePost/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/components/CreatePostBanner/index.m.less"),
				v = n.n(_);
			const x = Object(o.b)(null, e => ({
				showToast: () => {
					e(Object(a.f)({
						kind: g.b.SuccessCommunity,
						text: r.fbt._("Dismissed", null, {
							hk: "3YBtnR"
						})
					}))
				}
			}));
			class y extends i.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(u.ob)(d.a.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
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
					} = this.props, t = !Object(u.g)(d.a.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(m()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? i.a.createElement("div", {
						className: v.a.banner
					}, i.a.createElement("button", {
						className: v.a.closeContainer,
						onClick: this.closeBanner
					}, i.a.createElement(h.a, {
						className: v.a.close
					})), i.a.createElement(f.a, {
						className: v.a.postIcon
					}), i.a.createElement("div", {
						className: v.a.heading
					}, r.fbt._("Create the ideal {subredditDisplayText} post", [r.fbt._param("subredditDisplayText", ` ${e.displayText} `)], {
						hk: "3ZioIj"
					})), i.a.createElement("div", {
						className: v.a.text
					}, r.fbt._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), i.a.createElement("br", null), r.fbt._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), i.a.createElement("div", {
						className: v.a.buttonWrapper
					}, i.a.createElement(l.m, {
						className: v.a.button,
						target: "_blank",
						href: `/${e.displayText}/submit`,
						onClick: this.createPost
					}, r.fbt._("Create Post", null, {
						hk: "sSUAI"
					})))) : null
				}
			}
			t.a = x(Object(c.c)(y))
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				a = n.n(o);
			class c extends s.a.Component {
				render() {
					return s.a.createElement("div", {
						className: Object(i.a)(a.a.heroContainer, this.props.className)
					}, s.a.createElement("div", {
						className: Object(i.a)(a.a.header, this.props.headerClassName)
					}, this.props.header), s.a.createElement("div", {
						className: Object(i.a)(this.props.hidePadding ? a.a.bodyHidePadding : a.a.body, this.props.bodyClassName)
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
				return a.a.createElement("div", l({
					className: Object(i.a)(d.a.container, t)
				}, n), a.a.createElement("img", {
					className: d.a.left,
					src: `${r.a.assetPath}/img/econ/predictions/confetti-bg.png`,
					alt: s.fbt._("Confetti", null, {
						hk: "3dmR4h"
					})
				}), a.a.createElement("img", {
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
				i = n("./src/config.ts");
			const {
				fbt: o
			} = n("./node_modules/fbt/lib/FbtPublic.js"), a = `\n  ${i.a.assetPath}/img/econ/predictions/waiting.png,\n  ${i.a.assetPath}/img/econ/predictions/waiting@2x.png 2x,\n  ${i.a.assetPath}/img/econ/predictions/waiting@3x.png 3x,\n`;
			t.a = e => s.a.createElement("img", {
				className: e.className,
				srcSet: a,
				src: `${i.a.assetPath}/img/econ/predictions/waiting@2x.png 2x`,
				alt: o._("Snoos gazing into a crystal ball", null, {
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
				i = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.m.less"),
				d = n.n(c);
			const l = e => {
				let {
					className: t,
					status: n
				} = e;
				const s = [a.a.Live, a.a.LiveInProgress].includes(n),
					c = n === a.a.Closed;
				return i.a.createElement("span", {
					className: Object(o.a)(d.a.statusBadge, t, {
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
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				c = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const d = e => {
				let {
					tournamentId: t,
					className: n
				} = e;
				const s = Object(o.e)(e => Object(c.a)(e, t));
				return s && s.tokenIconUrl ? i.a.createElement("img", {
					className: n,
					alt: r.fbt._("Tournament token", null, {
						hk: "3cgDZy"
					}),
					src: s.tokenIconUrl
				}) : i.a.createElement(a.a, {
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/experiments/econ/index.ts");
			const a = e => {
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
					return Object(i.e)(o.j) ? s.a.createElement(d, {
						className: t
					}) : s.a.createElement(a, {
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/predictions/index.ts"),
				a = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(i.d)(),
					n = Object(i.e)(t => Object(c.X)(t, {
						subredditId: e
					})),
					r = Object(i.e)(t => Object(a.i)(t, {
						subredditId: e
					})),
					d = Object(i.e)(t => Object(a.k)(t, {
						subredditId: e
					})),
					l = s.a.useCallback(() => {
						n.name && t(Object(o.l)(n.name))
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				a = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					className: t,
					currentRank: n,
					tokenIcon: r,
					topPredictorsRank: a
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(c.a.predictionLeaderboardList, t)
				}, (null == a ? void 0 : a.length) ? a.map(e => {
					let {
						rank: t,
						redditor: i,
						redditorInfo: a,
						score: d
					} = e;
					var l;
					return i || a ? s.a.createElement("div", {
						key: `prediction-leaderboard-${a.id}`,
						className: c.a.topPredictor
					}, s.a.createElement(o.a, {
						isCurrentUser: (null === (l = null == n ? void 0 : n.redditor) || void 0 === l ? void 0 : l.name) === a.displayName,
						rank: t,
						redditor: i,
						redditorInfo: a,
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				u = n("./src/reddit/hooks/usePageLayer.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				b = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				f = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				h = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				g = n.n(h);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = Object(o.a)(e => {
				let {
					onClose: t,
					leaderboard: n,
					tournamentId: o,
					tokenIcon: h,
					isPreviousEvent: _ = !1,
					isQueried: x = !1
				} = e;
				const y = Object(m.a)(),
					E = Object(u.a)(),
					{
						currentRank: O,
						topPredictorsRank: j
					} = n,
					C = Object(i.e)(e => o ? Object(p.a)(e, o) : null),
					I = Object(i.e)(e => Object(a.s)(e, {
						pageLayer: E
					}));
				Object(r.useEffect)(() => {
					y(o ? Object(l.g)(o, _, x) : Object(l.e)())
				}, []);
				const S = O && O.rank > 0;
				return s.a.createElement("div", {
					className: g.a.container
				}, s.a.createElement("div", {
					className: g.a.header
				}, s.a.createElement(c.t, {
					className: g.a.closeButton,
					Icon: Object(d.b)("close"),
					priority: c.c.Plain,
					onClick: t
				}), s.a.createElement("h1", null, o ? v._("Tournament Leaderboard", null, {
					hk: "2ZYGPJ"
				}) : v._("All Time Top Predictors", null, {
					hk: "2OsQLm"
				})), s.a.createElement("h2", {
					className: g.a.subHeader
				}, C ? C.name : null == I ? void 0 : I.displayText)), s.a.createElement("div", {
					className: g.a.listContainer
				}, s.a.createElement(b.a, {
					currentRank: O,
					topPredictorsRank: j,
					tokenIcon: h
				}), S && s.a.createElement("div", {
					className: g.a.spacer
				}, " ")), O && O.redditorInfo && S && s.a.createElement(f.a, {
					className: g.a.currentRank,
					isCurrentUser: !0,
					rank: O.rank,
					redditor: O.redditor,
					redditorInfo: O.redditorInfo,
					score: O.score,
					tokenIcon: h
				}))
			}), y = e => s.a.createElement(x, _({
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
				return f
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				d = n("./src/reddit/controls/InternalLink/index.tsx"),
				l = n("./src/reddit/helpers/trackers/predictions.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = e => {
				let {
					className: t,
					isCurrentUser: n,
					rank: r,
					redditor: m,
					redditorInfo: f,
					score: h,
					tokenIcon: g
				} = e;
				const _ = Object(u.a)(),
					{
						icon: v,
						name: x,
						profile: y
					} = m || {},
					E = null != x ? x : f.displayName;
				return s.a.createElement("div", {
					className: Object(i.a)(p.a.predictor, t)
				}, s.a.createElement("div", {
					className: p.a.rank
				}, r), s.a.createElement(d.default, {
					className: p.a.userLink,
					onClick: () => _(Object(l.f)({
						targetUserId: f.id
					})),
					to: `/user/${E}`,
					disabled: f.displayName === o.H || f.displayName === o.Rb
				}, s.a.createElement("div", {
					className: p.a.leaderboardIcon
				}, s.a.createElement(c.a, {
					className: Object(i.a)(p.a.userIcon, p.a.avatar),
					iconUrl: null == v ? void 0 : v.url,
					isNSFW: !!(null == y ? void 0 : y.isNsfw),
					userName: null != E ? E : ""
				}), s.a.createElement(a.a, {
					className: p.a.rankBadge,
					rank: r
				})), s.a.createElement("div", {
					className: p.a.name
				}, s.a.createElement("div", {
					className: p.a.userName
				}, E), n && s.a.createElement("div", {
					className: p.a.yourProfile
				}, b._("Yep, thats you.", null, {
					hk: "3DqdE1"
				})))), s.a.createElement("div", {
					className: p.a.score
				}, s.a.cloneElement(g, {
					className: p.a.icon
				}), h))
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
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.m.less"),
				d = n.n(c);
			const l = `${a.a.assetPath}/img/econ/predictions/leaderboard`,
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
				f = e => {
					let {
						rank: t,
						className: n
					} = e;
					const r = t && b[t];
					return r ? o.a.createElement("img", {
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
				return x
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				c = n("./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				p = n("./src/reddit/hooks/useModalState.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				h = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				g = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				_ = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less"),
				v = n.n(_);
			const x = e => {
				let {
					className: t,
					subredditId: n,
					tournamentId: s
				} = e;
				var _;
				const x = Object(b.a)(),
					y = Object(l.ib)(),
					E = "true" === (null == y ? void 0 : y.queryParams["top-predictors"]),
					[O, j, C] = Object(p.a)(E),
					{
						leaderboard: I,
						error: S
					} = Object(c.a)(n, s),
					k = s ? i.a.createElement(a.a, {
						tournamentId: s
					}) : i.a.createElement(f.a, null);
				if (i.a.useEffect(() => {
						I && x(s ? Object(m.h)(s) : Object(m.f)())
					}, [I, s]), !(null === (_ = null == I ? void 0 : I.topPredictorsRank) || void 0 === _ ? void 0 : _.length) || S) return null;
				const {
					currentRank: N,
					topPredictorsRank: w
				} = I, T = Boolean(s) ? r.fbt._("Tournament leaderboard", null, {
					hk: "1WFLrI"
				}) : r.fbt._("Top Predictors", null, {
					hk: "3HCYxQ"
				});
				return i.a.createElement(d.a, {
					className: Object(o.a)(v.a.themedWidget, t),
					contentOnly: !0
				}, i.a.createElement("h2", {
					className: v.a.header
				}, T), i.a.createElement(h.a, {
					className: v.a.list,
					currentRank: N,
					topPredictorsRank: w.slice(0, 4),
					tokenIcon: k
				}), i.a.createElement("div", {
					className: v.a.openModalButtonContainer
				}, i.a.createElement(u.a, {
					className: v.a.openModalButton,
					isFullWidth: !0,
					priority: u.c.Primary,
					onClick: () => {
						s && x(Object(m.c)()), j()
					}
				}, r.fbt._("See All", null, {
					hk: "1Ozf02"
				}))), O && i.a.createElement(g.a, {
					className: v.a.modal,
					leaderboard: I,
					tournamentId: s,
					tokenIcon: k,
					onClose: C
				}))
			};
			t.default = x
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/economics/predictions/index.ts"),
				o = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts");

			function a(e, t) {
				const n = Object(s.d)(),
					a = Object(s.e)(n => t ? Object(o.h)(n, {
						tournamentId: t
					}) : Object(o.d)(n, {
						subredditId: e
					})),
					c = Object(s.e)(t => Object(o.c)(t, {
						subredditId: e
					})),
					d = Object(s.e)(t => Object(o.b)(t, {
						subredditId: e
					})),
					l = Object(s.e)(t => Object(o.a)(t, {
						subredditId: e
					}));
				return Object(r.useEffect)(() => {
					d || c || l || n(Object(i.k)(e))
				}, [c, d, l, e, n]), {
					leaderboard: a,
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				a = n("./node_modules/history/esm/history.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				l = n("./src/reddit/actions/economics/predictions/index.ts"),
				u = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts");
			var m = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				p = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				b = n.n(p);
			const f = e => {
				let {
					subredditId: t,
					queriedTournamentId: n
				} = e;
				const o = Object(i.d)(),
					{
						leaderboard: p,
						error: f
					} = function(e, t) {
						const n = Object(i.d)(),
							s = Object(i.e)(e => Object(u.h)(e, {
								tournamentId: t
							})),
							o = Object(i.e)(e => Object(u.g)(e, {
								tournamentId: t
							})),
							a = Object(i.e)(e => Object(u.f)(e, {
								tournamentId: t
							})),
							c = Object(i.e)(e => Object(u.e)(e, {
								tournamentId: t
							}));
						return Object(r.useEffect)(() => {
							s || a || o || c || n(Object(l.o)(e, t))
						}, [s, o, a, c, e, t, n]), {
							leaderboard: s,
							error: c
						}
					}(t, n);
				return !(null == p ? void 0 : p.topPredictorsRank) || f ? null : s.a.createElement(m.a, {
					className: b.a.modal,
					leaderboard: p,
					tournamentId: n,
					tokenIcon: s.a.createElement(d.a, {
						tournamentId: n
					}),
					onClose: () => {
						const e = new URLSearchParams(location.search);
						e.delete("prediction-tournament-rank"), o(Object(c.b)(Object(a.c)({
							pathname: location.pathname,
							search: e.toString()
						})))
					},
					isQueried: !0
				})
			};
			var h = n("./src/reddit/components/PostList/index.tsx"),
				g = n("./src/reddit/connectors/PostList/index.ts"),
				_ = n("./src/reddit/constants/postLayout.ts"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/helpers/predictions/index.ts"),
				y = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/config.ts"),
				j = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/reddit/components/Econ/Prediction/Confetti/index.tsx"),
				I = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				S = n("./src/reddit/models/Prediction/index.ts"),
				k = n("./src/reddit/selectors/poll/index.ts"),
				N = n("./src/redditGQL/types.ts"),
				w = n("./src/reddit/components/Econ/PredictionsPostList/TournamentBanner/index.m.less"),
				T = n.n(w);
			const P = e => {
					let {
						subredditId: t
					} = e;
					const n = Object(i.e)(e => Object(y.f)(e, {
							subredditId: t
						})),
						r = Object(i.e)(e => n ? Object(k.h)(e, n.tournamentId) : []);
					if (!n) return null;
					if (n.status === N.R.Closed) return s.a.createElement(R, null);
					const o = r.filter(e => e.predictionStatus === S.b.Open && e.endsAt > Date.now()),
						a = o.length > 0,
						c = o.length && o.some(e => !e.userSelection);
					return a && !c ? s.a.createElement(D, null) : a ? null : s.a.createElement(L, null)
				},
				L = () => s.a.createElement("section", {
					className: T.a.container
				}, s.a.createElement("div", {
					className: T.a.image,
					style: {
						backgroundImage: `url(${O.a.assetPath}/img/econ/predictions/closet.png)`
					}
				}), s.a.createElement("div", null, s.a.createElement("h3", {
					className: T.a.title
				}, j.fbt._("There's nothing to predict right now", null, {
					hk: "29BSNR"
				})), s.a.createElement("p", {
					className: T.a.subhead
				}, j.fbt._("Mods can always add new questions, so check back later!", null, {
					hk: "1HtxKJ"
				})))),
				D = () => s.a.createElement("section", {
					className: T.a.container
				}, s.a.createElement(C.a, {
					className: T.a.confetti
				}), s.a.createElement(I.a, {
					className: T.a.image
				}), s.a.createElement("div", null, s.a.createElement("h3", {
					className: T.a.title
				}, j.fbt._("Your predictions are in!", null, {
					hk: "2hlZz4"
				})), s.a.createElement("p", {
					className: T.a.subhead
				}, j.fbt._("Mods can always add new questions, so check back later!", null, {
					hk: "48ISNI"
				})))),
				R = () => s.a.createElement("section", {
					className: T.a.container
				}, s.a.createElement("div", {
					className: T.a.image,
					style: {
						backgroundImage: `url(${O.a.assetPath}/img/econ/predictions/closet.png)`
					}
				}), s.a.createElement("div", null, s.a.createElement("h3", {
					className: T.a.title
				}, j.fbt._("No prediction tournaments are active right now", null, {
					hk: "4G1oCo"
				})), s.a.createElement("p", {
					className: T.a.subhead
				}, j.fbt._("Check back to see when a tournament is created.", null, {
					hk: "2ldkRW"
				}))));
			var A = n("./src/lib/classNames/index.ts"),
				B = n("./src/lib/prettyPrintNumber/index.ts"),
				M = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				U = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx"),
				F = n("./src/lib/constants/index.ts"),
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
					className: Object(A.a)(q.a.container, t)
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
					var i, o, a, c;
					return s.a.createElement(V.default, {
						key: n.id,
						className: q.a.user,
						to: `/user/${null==t?void 0:t.name}`,
						disabled: n.displayName === F.H || n.displayName === F.Rb
					}, s.a.createElement("div", {
						className: q.a.userAvatar
					}, s.a.createElement(H.a, {
						className: q.a.icon,
						iconUrl: null === (i = null == t ? void 0 : t.icon) || void 0 === i ? void 0 : i.url,
						isNSFW: Boolean(null === (o = null == t ? void 0 : t.profile) || void 0 === o ? void 0 : o.isNsfw),
						userName: null !== (a = null == t ? void 0 : t.name) && void 0 !== a ? a : ""
					}), s.a.createElement(W.a, {
						className: q.a.rankBadge,
						rank: r
					})), s.a.createElement("div", {
						className: q.a.userName
					}, null !== (c = null == t ? void 0 : t.name) && void 0 !== c ? c : n.displayName))
				})))
			};
			var Y = n("./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/index.m.less"),
				Q = n.n(Y);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = e => {
				let {
					subredditId: t
				} = e;
				var n, r;
				const o = Object(i.e)(e => Object(y.f)(e, {
						subredditId: t
					})),
					a = Object(i.e)(e => o && Object(u.h)(e, {
						tournamentId: o.tournamentId
					}));
				return o ? s.a.createElement("section", {
					className: Q.a.container,
					style: {
						backgroundImage: M.a[o.theme] || M.a.theme_1
					}
				}, s.a.createElement("div", {
					className: Q.a.tournamentInfo
				}, s.a.createElement("p", null, J._("Predictions Tournament", null, {
					hk: "2AxvmU"
				})), s.a.createElement("h1", {
					className: Object(A.a)(Q.a.tournamentTitle, {
						[Q.a.long]: o.name.length > 40
					})
				}, o.name, " ", s.a.createElement(U.a, {
					status: o.status
				}))), s.a.createElement("div", {
					className: Q.a.stats
				}, (null == a ? void 0 : a.topPredictorsRank) && a.topPredictorsRank.length >= 3 && s.a.createElement(z, {
					className: Q.a.stat,
					ranks: a.topPredictorsRank.slice(0, 3)
				}), s.a.createElement("div", {
					className: Object(A.a)(Q.a.stat, Q.a.simple)
				}, s.a.createElement("dt", null, o.totalParticipantsCount ? Object(B.b)(o.totalParticipantsCount) : "--"), s.a.createElement("dd", null, J._("Players", null, {
					hk: "1S5q3e"
				}))), s.a.createElement("div", {
					className: Object(A.a)(Q.a.stat, Q.a.simple)
				}, s.a.createElement("dt", null, o.totalPredictionsCount || "--"), s.a.createElement("dd", null, J._("Predictions", null, {
					hk: "3E8BVX"
				}))), s.a.createElement("div", {
					className: Object(A.a)(Q.a.stat, Q.a.simple)
				}, s.a.createElement("dt", {
					className: Object(A.a)({
						[Q.a.long]: Boolean((null === (n = null == a ? void 0 : a.currentRank) || void 0 === n ? void 0 : n.rank) && a.currentRank.rank >= 1e6)
					})
				}, (null === (r = null == a ? void 0 : a.currentRank) || void 0 === r ? void 0 : r.rank) || "--"), s.a.createElement("dd", null, J._("Your rank", null, {
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
				const t = Object(v.ib)(),
					n = null == t ? void 0 : t.queryParams["prediction-tournament-rank"],
					r = Object(i.e)(t => Object(E.I)(t, e.listingName)),
					{
						isFetched: a
					} = Object(o.a)(r),
					c = Object(i.e)(e => Object(y.l)(e, {
						subredditId: r
					})),
					d = s.a.useMemo(() => Object.values(c).sort(x.b).map(e => e.id), [Object.keys(c).length]);
				return s.a.createElement("div", {
					className: $.a.container
				}, a && s.a.createElement(s.a.Fragment, null, s.a.createElement(Z, {
					subredditId: r
				}), s.a.createElement(P, {
					subredditId: r
				})), a && n && s.a.createElement(f, {
					subredditId: r,
					queriedTournamentId: n
				}), s.a.createElement(h.a, ee({}, e, {
					postsById: c,
					postIds: d,
					loadMore: null,
					layout: _.g.Large
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
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less"),
				d = n.n(c);
			const l = e => {
				let {
					steps: t,
					withModalStyles: n
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(a.a)(d.a.banner, {
						[d.a.withModalStyles]: n
					})
				}, o.a.createElement("div", {
					className: d.a.header
				}, o.a.createElement("h2", null, o.a.createElement("span", {
					className: d.a.subHeader
				}, s.fbt._("Predictions", null, {
					hk: "ACRaq"
				})), s.fbt._("How It Works", null, {
					hk: "3QW4EZ"
				})), o.a.createElement("img", {
					alt: s.fbt._("Snoos gathered around a dark ball", null, {
						hk: "2sN6dD"
					}),
					className: d.a.bannerImage,
					src: `${r.a.assetPath}/img/econ/predictions/predictor_snoos_small.png`
				})), o.a.createElement("div", {
					className: d.a.innerCircle
				}), o.a.createElement("div", {
					className: d.a.middleCircle
				}), o.a.createElement("div", {
					className: d.a.outerCircle
				})), o.a.createElement("div", {
					className: Object(a.a)(d.a.stepsWrapper, {
						[d.a.withModalStyles]: n
					})
				}, t.map((e, n) => {
					let {
						title: r,
						description: s
					} = e;
					return o.a.createElement("div", {
						key: r,
						className: d.a.step
					}, o.a.createElement("div", {
						className: Object(a.a)(d.a.stepCount, {
							[d.a.showConnectingLine]: n !== t.length - 1
						})
					}, o.a.createElement("span", {
						className: d.a.stepNumber
					}, n + 1)), o.a.createElement("div", null, o.a.createElement("h3", {
						className: d.a.stepTitle
					}, r), o.a.createElement("p", {
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
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx"),
				u = n("./src/reddit/components/UserIcon/index.tsx"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/UserAvatar/index.m.less"),
				b = n.n(p);
			const f = e => {
				let {
					className: t,
					user: n,
					tokenIcon: r
				} = e;
				var o, c, p, f;
				const {
					redditor: h,
					redditorInfo: g,
					rank: _,
					score: v
				} = n, x = null !== (o = null == h ? void 0 : h.name) && void 0 !== o ? o : null == g ? void 0 : g.displayName;
				return s.a.createElement(m.default, {
					className: Object(a.a)(t, {
						[b.a.first]: 1 === _,
						[b.a.third]: 3 === _
					}),
					to: `/user/${x}`,
					disabled: (null == g ? void 0 : g.displayName) === d.H || (null == g ? void 0 : g.displayName) === d.Rb
				}, s.a.createElement("div", {
					className: b.a.avatarContainer
				}, s.a.createElement("div", {
					className: b.a.outerCircle
				}, s.a.createElement("div", {
					className: b.a.innerCircle
				})), (null === (c = null == g ? void 0 : g.snoovatarIcon) || void 0 === c ? void 0 : c.url) ? s.a.createElement("img", {
					className: b.a.avatar,
					alt: i.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					src: g.snoovatarIcon.url
				}) : s.a.createElement("div", {
					className: b.a.defaultAvatar
				}, s.a.createElement(u.a, {
					className: b.a.userIcon,
					iconUrl: null === (p = null == h ? void 0 : h.icon) || void 0 === p ? void 0 : p.url,
					isNSFW: Boolean(null === (f = null == h ? void 0 : h.profile) || void 0 === f ? void 0 : f.isNsfw),
					userName: x
				})), s.a.createElement(l.a, {
					className: b.a.placeBadge,
					rank: _
				})), s.a.createElement("div", {
					className: b.a.winnerName
				}, x), s.a.createElement("div", {
					className: b.a.score
				}, s.a.cloneElement(r, {
					className: b.a.tokenIcon
				}), " ", v))
			};
			var h = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				g = n("./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts"),
				_ = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				y = n("./src/reddit/hooks/useModalState.ts"),
				E = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				j = n("./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/index.m.less"),
				C = n.n(j);
			const I = e => {
				let {
					subredditId: t
				} = e;
				var n;
				const [d, l, u] = Object(y.a)(!1), m = Object(E.a)(), p = Object(o.e)(e => Object(O.f)(e, {
					subredditId: t
				})), {
					leaderboard: b,
					error: j
				} = Object(g.a)(t);
				if (Object(r.useEffect)(() => {
						b && m(Object(x.f)())
					}, [m, b]), j || !(null === (n = null == b ? void 0 : b.topPredictorsRank) || void 0 === n ? void 0 : n.length) || b.topPredictorsRank.length < 3 || !p) return null;
				const I = b.topPredictorsRank.slice(0, 3),
					S = s.a.createElement(c.a, {
						tournamentId: p.tournamentId
					});
				return s.a.createElement(_.a, {
					className: C.a.themedWidget,
					contentOnly: !0
				}, s.a.createElement("h2", {
					className: C.a.header
				}, i.fbt._("All time top predictors", null, {
					hk: "1sZnun"
				})), s.a.createElement("div", {
					className: C.a.winnersContainer
				}, I.map(e => {
					var t;
					return s.a.createElement(f, {
						className: Object(a.a)(C.a.user, {
							[C.a.first]: 1 === e.rank,
							[C.a.second]: 2 === e.rank
						}),
						key: null === (t = e.redditorInfo) || void 0 === t ? void 0 : t.id,
						user: e,
						tokenIcon: S
					})
				})), s.a.createElement(v.a, {
					priority: v.c.Primary,
					className: C.a.seeAllButton,
					onClick: () => {
						m(Object(x.b)()), l()
					},
					isFullWidth: !0
				}, i.fbt._("See all", null, {
					hk: "23jjqI"
				})), d && s.a.createElement(h.a, {
					leaderboard: b,
					tokenIcon: S,
					onClose: u
				}))
			};
			var S = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				k = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx"),
				N = n("./src/lib/prettyPrintNumber/index.ts"),
				w = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Stats/index.m.less"),
				T = n.n(w);
			const P = e => {
				let {
					tournament: t,
					userRank: n
				} = e;
				return s.a.createElement("dl", {
					className: T.a.statsList
				}, s.a.createElement("div", {
					className: T.a.stat
				}, s.a.createElement("dt", {
					className: T.a.statValue
				}, t.totalParticipantsCount ? Object(N.b)(t.totalParticipantsCount) : "--"), s.a.createElement("dd", {
					className: T.a.statDescription
				}, i.fbt._("Players", null, {
					hk: "QKnjj"
				}))), s.a.createElement("div", {
					className: T.a.stat
				}, s.a.createElement("dt", {
					className: T.a.statValue
				}, t.totalPredictionsCount || "--"), s.a.createElement("dd", {
					className: T.a.statDescription
				}, i.fbt._("Predictions", null, {
					hk: "2MJSk1"
				}))), s.a.createElement("div", {
					className: T.a.stat
				}, s.a.createElement("dt", {
					className: Object(a.a)(T.a.statValue, {
						[T.a.long]: Boolean((null == n ? void 0 : n.rank) && n.rank >= 1e6)
					})
				}, (null == n ? void 0 : n.rank) || "--"), s.a.createElement("dd", {
					className: T.a.statDescription
				}, i.fbt._("Your rank", null, {
					hk: "2aohc3"
				}))))
			};
			var L = n("./src/reddit/components/HumanDate/index.tsx"),
				D = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts"),
				R = n("./src/reddit/helpers/trackers/predictions.ts"),
				A = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Predictor/index.m.less"),
				B = n.n(A);
			const M = e => {
				let {
					className: t,
					userRank: n
				} = e;
				const r = Object(E.a)(),
					{
						rank: i,
						redditor: o,
						redditorInfo: c
					} = n,
					{
						icon: p,
						name: b,
						profile: f
					} = o || {},
					h = null != b ? b : c.displayName;
				return s.a.createElement("div", {
					className: Object(a.a)(B.a.predictor, t)
				}, s.a.createElement(l.a, {
					className: B.a.rank,
					rank: i
				}), s.a.createElement(m.default, {
					className: B.a.userLink,
					onClick: () => r(Object(R.f)({
						targetUserId: c.id
					})),
					to: `/user/${h}`,
					disabled: c.displayName === d.H || c.displayName === d.Rb
				}, s.a.createElement("div", {
					className: B.a.leaderboardIcon
				}, s.a.createElement(u.a, {
					className: Object(a.a)(B.a.avatar),
					iconUrl: null == p ? void 0 : p.url,
					isNSFW: !!(null == f ? void 0 : f.isNsfw),
					userName: null != h ? h : ""
				})), s.a.createElement("div", {
					className: B.a.userName
				}, h)))
			};
			var U = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/index.m.less"),
				F = n.n(U);
			const W = e => {
				let {
					tournamentId: t
				} = e;
				const [n, r, a] = Object(y.a)(!1), d = Object(o.e)(e => Object(O.a)(e, t)), l = Object(o.e)(e => Object(D.h)(e, {
					tournamentId: t
				})), u = Object(E.a)();
				if (!d || !l) return null;
				const m = l.topPredictorsRank.slice(0, 3);
				return s.a.createElement("section", null, s.a.createElement("div", {
					className: F.a.header,
					style: {
						backgroundImage: S.a[d.theme] || S.a.theme_1
					}
				}, s.a.createElement("h3", {
					className: F.a.tournamentTitle
				}, d.name, " ", s.a.createElement(k.a, {
					status: d.status
				})), d.createdAt && d.endedAt && s.a.createElement("div", {
					className: F.a.tournamentDate
				}, s.a.createElement(L.a, {
					seconds: Math.floor(d.createdAt / 1e3),
					showDay: !0,
					shortMonths: !0
				}), " ", "-", " ", s.a.createElement(L.a, {
					seconds: Math.floor(d.endedAt / 1e3),
					showDay: !0,
					shortMonths: !0
				}))), s.a.createElement("div", {
					className: F.a.content
				}, s.a.createElement("div", {
					className: F.a.tournamentInfo
				}, s.a.createElement("div", {
					className: F.a.leaderboard
				}, m.map(e => s.a.createElement(M, {
					key: e.redditorInfo.id,
					userRank: e
				}))), s.a.createElement(P, {
					tournament: d,
					userRank: l.currentRank
				})), s.a.createElement(v.a, {
					className: F.a.seeAllButton,
					onClick: () => {
						r(), u(Object(x.a)())
					},
					isFullWidth: !0
				}, i.fbt._("See all", null, {
					hk: "aMyfi"
				}))), n && s.a.createElement(h.a, {
					isPreviousEvent: !0,
					leaderboard: l,
					tokenIcon: s.a.createElement(c.a, {
						tournamentId: d.tournamentId
					}),
					tournamentId: d.tournamentId,
					onClose: a
				}))
			};
			var H = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/index.m.less"),
				V = n.n(H);
			const G = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(E.a)(),
					r = Object(o.e)(e => Object(O.g)(e, {
						subredditId: t
					}).slice(1, 3).map(e => e.tournamentId));
				return s.a.useEffect(() => {
					r.length && n(Object(x.d)())
				}, [r]), r.length ? s.a.createElement(_.a, {
					className: V.a.themedWidget,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: V.a.content
				}, s.a.createElement("h2", {
					className: V.a.header
				}, i.fbt._("Previous tournaments", null, {
					hk: "2BA4B9"
				})), r.map(e => s.a.createElement(W, {
					key: e,
					tournamentId: e
				})))) : null
			};
			var q = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/Content.tsx"),
				K = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less"),
				z = n.n(K);
			const Y = [{
				title: i.fbt._("Mods create questions", null, {
					hk: "2Ay8LV"
				}),
				description: i.fbt._("A Predictions tournament kicks off once questions are created. More questions can be added as the tournament progresses.", null, {
					hk: "11SFeA"
				})
			}, {
				title: i.fbt._("Users make predictions", null, {
					hk: "4c8bYm"
				}),
				description: i.fbt._("Predict using tokens given to you. Put down more tokens to win bigger rewards (if you’re right).", null, {
					hk: "17d2f"
				})
			}, {
				title: i.fbt._("Track the competition", null, {
					hk: "1ZIdYB"
				}),
				description: i.fbt._("Follow the leaderboard to see who gets the most tokens. When mods close a tournament, final winners are announced!", null, {
					hk: "3o8fok"
				})
			}];
			var Q = () => {
					const e = Object(E.a)();
					return Object(r.useEffect)(() => {
						e(Object(R.o)())
					}, [e]), s.a.createElement(_.a, {
						className: z.a.widget,
						contentOnly: !0
					}, s.a.createElement(q.a, {
						steps: Y
					}))
				},
				J = (n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"), n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"));

			function Z(e) {
				let {
					subredditId: t
				} = e;
				const n = Object(o.e)(e => Object(O.f)(e, {
					subredditId: t
				}));
				return n ? s.a.createElement(J.default, {
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
				}, s.a.createElement(I, {
					subredditId: t
				}), s.a.createElement(Q, null), s.a.createElement(Z, {
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
			const i = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumNewUserWelcome").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(s.a)("spSpecialMemberships", i)
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const i = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), n.e("EconomicsSubredditPremiumSidebarCards")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(s.a)("spSpecialMemberships", i)
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
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/config.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/isFakeSubreddit/index.ts"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/components/PostList/Placeholder.tsx"),
				b = n("./src/reddit/components/EmptySubreddit.m.less"),
				f = n.n(b),
				h = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/lessComponent.tsx"),
				_ = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const v = g.a.wrapped(p.a, "BackgroundPlaceholder", f.a),
				x = g.a.wrapped(m.n, "SubmitLink", f.a),
				y = e => {
					switch (e) {
						case d.bb.RISING:
							return r.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.bb.TOP:
						case d.bb.CONTROVERSIAL:
							return null;
						default:
							return r.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				E = e => {
					let {
						listingName: t,
						sort: n
					} = e;
					const s = y(n);
					return a.a.createElement("div", {
						className: f.a.MainContent
					}, a.a.createElement("div", {
						className: f.a.PrimaryText
					}, (e => {
						switch (e) {
							case d.bb.RISING:
								return r.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.bb.TOP:
							case d.bb.CONTROVERSIAL:
								return r.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [r.fbt._param("listing sort option", i()(e))], {
									hk: "48BeCW"
								});
							default:
								return r.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(n)), t && !Object(l.a)(t) && !!s && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: f.a.SecondaryText
					}, y(n)), a.a.createElement(x, {
						to: `/r/${t}/submit`
					}, r.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				O = () => a.a.createElement("div", {
					className: f.a.MainContent
				}, a.a.createElement("img", {
					className: f.a.SnooImg,
					src: `${c.a.assetPath}/img/snoo_discovery@1x.png`
				}), a.a.createElement("div", {
					className: f.a.PrimaryText
				}, r.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), a.a.createElement(x, {
					to: "/r/popular"
				}, r.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => a.a.createElement(a.a.Fragment, null, e.subreddit && a.a.createElement(_.a, {
				subredditId: e.subreddit.id,
				subredditSubscribers: e.subreddit.subscribers
			}), a.a.createElement("div", {
				"data-testid": "empty-subreddit",
				className: Object(h.a)(f.a.Component, f.a.EmptyHomepage)
			}, a.a.createElement(v, {
				isLoading: !1,
				layout: u.g.Classic
			}), a.a.createElement("div", {
				className: f.a.MainContentWrapper
			}, e.subreddit ? a.a.createElement(E, e) : a.a.createElement(O, null))))
		},
		"./src/reddit/components/EmptySubredditPostList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/PostList/Placeholder.tsx"),
				l = n("./src/reddit/hooks/useIsClient.ts"),
				u = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				m = n("./src/reddit/components/Econ/Prediction/EmptyPredictions/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = c.a.wrapped(d.a, "backgroundPlaceholder", p.a);

			function h(e) {
				let {
					subredditId: t
				} = e;
				const n = Object(i.e)(e => !!t && Object(u.k)(e, {
						subredditId: t
					})),
					r = Object(l.a)();
				return s.a.createElement("div", {
					className: Object(a.a)(p.a.component, p.a.emptyHomepage)
				}, s.a.createElement(f, {
					isLoading: n,
					layout: o.g.Classic
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

			function _(e) {
				let {
					isPredictionsPage: t,
					listingName: n,
					sort: r,
					subreddit: i
				} = e;
				return t ? s.a.createElement(h, {
					subredditId: null == i ? void 0 : i.id
				}) : s.a.createElement(g.a, {
					listingName: n,
					sort: r,
					subreddit: i || void 0
				})
			}
		},
		"./src/reddit/components/ErrorBoundary/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@sentry/minimal/esm/index.js"),
				s = n("./node_modules/react/index.js");
			class i extends s.Component {
				constructor() {
					super(...arguments), this.state = {
						error: null
					}
				}
				componentDidCatch(e, t) {
					r.l(n => {
						n.setExtra("info", t), r.c(e)
					}), this.setState({
						error: e
					})
				}
				render() {
					const {
						children: e,
						FallbackComponent: t = (() => null)
					} = this.props, {
						error: n
					} = this.state;
					return n ? s.createElement(t, {
						error: n
					}) : e
				}
			}
			t.a = i
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
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/FakeBannerAd/index.m.less"),
				d = n.n(c),
				l = n("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => o.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", d.a),
				m = l.a.wrapped(e => o.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", d.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class f extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = o.a.createRef(), this.state = {
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
					} = this.state, i = n ? o.a.createElement(m, {
						src: a.a.assetPath + t
					}) : o.a.createElement(s.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, o.a.createElement(m, {
						src: a.a.assetPath + t
					}));
					return o.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": r.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, o.a.createElement("a", {
						href: a.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, i))
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
				i = n("./src/config.ts"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Footer/index.m.less"),
				d = n.n(c);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = a.a.div("UserAgreement", d.a), m = a.a.a("UserAgreementLink", d.a), p = a.a.a("PrivacyLink", d.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => s.a.createElement("div", {
				className: Object(o.a)(d.a.FooterContainer, {
					[d.a.mIsGrey]: e.textColor === b.Grey,
					[d.a.mIsWhite]: e.textColor === b.White
				})
			}, s.a.createElement(u, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} Reddit, Inc. © {year}. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", s.a.createElement(m, {
				href: `${i.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "1Dc18v"
			}))), l._param("=Privacy Policy.", s.a.createElement(p, {
				href: `${i.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy.", null, {
				hk: "1Ubjrd"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "yxLlI"
			})))
		},
		"./src/reddit/components/GarlicBreadEmbed/index.m.less": function(e, t, n) {
			e.exports = {
				container: "e_hUuI8E4_-4joOuOJxiG",
				expanded: "_1wpebj121xvsT_ALlIraAs",
				isSubscriptionsPinned: "_1dKBP8RyDqi98Fm3SZdS-X",
				garlicBreadIcon: "_9_GnEondPnEvAiqhn8bEt",
				iframe: "_3Sf9ucwF90vy8KQgnmYHkY",
				overlay: "_1vTup2Yz1pFxSinanTQR1Q",
				Modal: "_2CYtrYUF2cduotJw5yrWW0",
				modal: "_2CYtrYUF2cduotJw5yrWW0",
				ModalBody: "_3FSzFryLWtxjYtvlH9aX9P",
				modalBody: "_3FSzFryLWtxjYtvlH9aX9P",
				ModalIcon: "_1c2GGlbYfPfRGqt_tLJ9Nl",
				modalIcon: "_1c2GGlbYfPfRGqt_tLJ9Nl",
				ModalHeader: "_1Z74NUKq_RuSFSsTON1I1H",
				modalHeader: "_1Z74NUKq_RuSFSsTON1I1H",
				ModalTitle: "_1i2Ph4U8zkWEs_4bwPgEaq",
				modalTitle: "_1i2Ph4U8zkWEs_4bwPgEaq",
				ModalMain: "_3ltdY4NwF68dAEslxLwaiF",
				modalMain: "_3ltdY4NwF68dAEslxLwaiF",
				ModalFormItem: "_35k9M8YpmfffpGKTShBgua",
				modalFormItem: "_35k9M8YpmfffpGKTShBgua",
				ModalInputLabel: "_2di-Z6s2gCmih7IeBEgGmj",
				modalInputLabel: "_2di-Z6s2gCmih7IeBEgGmj",
				ModalInput: "_2qaxL2friIBM9HFKXDg5fA",
				modalInput: "_2qaxL2friIBM9HFKXDg5fA",
				ModalFooter: "dBWYvynktm-xXVK8C7qvS",
				modalFooter: "dBWYvynktm-xXVK8C7qvS",
				ConfirmButton: "_3VphwVHjUPJ9nE-D4AEdut",
				confirmButton: "_3VphwVHjUPJ9nE-D4AEdut",
				PlainButton: "_3a-uSfmeTUy1lVgKZ62rzG",
				plainButton: "_3a-uSfmeTUy1lVgKZ62rzG"
			}
		},
		"./src/reddit/components/GarlicBreadEmbed/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/header.ts"),
				u = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/search.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/tooltip.ts"),
				f = n("./src/reddit/actions/users.ts");
			const h = r.a.garlicBreadUrl;
			var g, _, v;
			! function(e) {
				e.RefreshAuth = "refreshAuth", e.Close = "close", e.SignIn = "signIn", e.SyncCoordinates = "syncCoordinates", e.OpenProfile = "openProfile", e.VerifyAccount = "verifyAccount", e.NavigateToDeeplink = "navigateToDeeplink"
			}(g || (g = {})),
			function(e) {
				e.SetScreenMode = "setScreenMode", e.InjectAuthHeaders = "injectAuthHeaders", e.InjectTelemetryDefaults = "injectTelemetryDefaults"
			}(_ || (_ = {})),
			function(e) {
				e.Preview = "preview", e.FullScreen = "fullscreen", e.PictureInPicture = "pip"
			}(v || (v = {}));
			var x = class {
				constructor(e, t, n, r, s, i, o, a) {
					this.subscribe = () => {
						null === window || void 0 === window || window.addEventListener("message", this.onMessage)
					}, this.unsubscribe = () => {
						null === window || void 0 === window || window.removeEventListener("message", this.onMessage)
					}, this.onMessage = e => {
						let {
							origin: t,
							data: n
						} = e;
						t === h && (n.type === g.RefreshAuth ? this.sendMessageAuthAndTelemetry() : n.type === g.Close ? this.onMessageClose() : n.type === g.SignIn && n.dest ? this.onMessageSignIn(n.dest) : n.type === g.SyncCoordinates && n.data ? this.onMessageSyncCoordinates(n.data) : n.type === g.OpenProfile && n.data ? this.onMessageOpenProfile(n.data) : n.type === g.VerifyAccount ? this.onMessageVerifyAccount() : n.type === g.NavigateToDeeplink && this.onMessageNavigateToDeeplink(n.data))
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
					}, this.sendMessageScreenMode = e => {
						this.sendMessage({
							type: _.SetScreenMode,
							state: e
						})
					}, this.sendMessageInjectAuthHeaders = e => {
						this.sendMessage({
							type: _.InjectAuthHeaders,
							...e
						})
					}, this.sendMessageInjectTelemetryDefaults = e => {
						this.sendMessage({
							type: _.InjectTelemetryDefaults,
							...e
						})
					}, this.ref = e, this.getAuthClientData = t, this.onMessageClose = n, this.onMessageSignIn = r, this.onMessageSyncCoordinates = s, this.onMessageOpenProfile = i, this.onMessageVerifyAccount = o, this.onMessageNavigateToDeeplink = a
				}
				sendMessage(e) {
					var t, n;
					null === (n = null === (t = this.ref.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === n || n.postMessage(e, h)
				}
			};
			const y = r.a.garlicBreadUrl,
				E = new URL(`${y}/embed`),
				O = ["screenmode", "edit", "cx", "cy", "px", "ts", "locale"],
				j = e => {
					var t;
					if ("undefined" == typeof window) return {
						iframeURL: void 0,
						isFullscreen: !1
					};
					C(), E.searchParams.set("locale", e);
					const n = (null === (t = E.searchParams.get("screenmode")) || void 0 === t ? void 0 : t.toLocaleLowerCase()) === v.FullScreen;
					return E.searchParams.set("screenmode", n ? v.FullScreen : v.Preview), {
						iframeURL: E.toString(),
						isFullscreen: n
					}
				},
				C = () => {
					var e;
					const t = window.location.search.toLocaleLowerCase(),
						n = new URLSearchParams(t);
					for (const r of O) {
						const t = null === (e = n.get(r)) || void 0 === e ? void 0 : e.toLocaleLowerCase(),
							s = "string" == typeof t && "false" !== t;
						n.has(r) && s && t && E.searchParams.set(r, t)
					}
				},
				I = () => {
					E.searchParams.set("screenmode", v.Preview)
				};
			var S = n("./src/reddit/components/TrackingHelper/index.tsx"),
				k = n("./src/reddit/constants/keycodes.ts"),
				N = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				w = n("./src/reddit/helpers/trackers/garlicBread.ts"),
				T = n("./src/reddit/models/Toast/index.ts"),
				P = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/telemetry.ts")),
				L = n("./src/telemetry/models/Event.ts");
			const D = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				return Object.keys(e).reduce((n, r) => {
					const s = e[r];
					return s ? (n[r] = "object" == typeof s && t <= 4 ? D(s, t + 1) : s, n) : n
				}, {})
			};
			var R = n("./src/reddit/selectors/meta.ts"),
				A = n("./src/reddit/selectors/platform.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/selectors/userPrefs.ts"),
				U = n("./src/higherOrderComponents/asModal/index.tsx"),
				F = n("./src/reddit/icons/svgs/GarlicBread/index.tsx"),
				W = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				H = n("./src/reddit/controls/Button/index.tsx"),
				V = n("./src/reddit/components/GarlicBreadEmbed/index.m.less"),
				G = n.n(V);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), K = e => e.preventDefault(), z = Object(U.a)(e => {
				let {
					title: t,
					modalBody: n,
					primaryButtonText: r,
					isPrimaryAction: s,
					secondaryButtonText: o,
					onPrimaryButtonClick: a,
					onSecondaryButtonClick: c
				} = e;
				return i.a.createElement(W.e, {
					className: G.a.ModalBody
				}, i.a.createElement(W.i, {
					className: G.a.ModalHeader
				}, i.a.createElement(F.a, {
					className: G.a.ModalIcon
				}), i.a.createElement(W.q, {
					className: G.a.ModalTitle
				}, t)), i.a.createElement(W.l, {
					className: G.a.ModalMain
				}, n), i.a.createElement(W.g, {
					className: G.a.ModalFooter
				}, s && i.a.createElement(H.t, {
					kind: H.b.Button,
					priority: H.c.Primary,
					className: G.a.ConfirmButton,
					onClick: a,
					onMouseDown: K
				}, r), !s && i.a.createElement(H.t, {
					to: "/settings/account",
					kind: H.b.InternalLink,
					priority: H.c.Primary,
					className: G.a.ConfirmButton,
					onClick: a,
					onMouseDown: K
				}, r), i.a.createElement(H.t, {
					className: G.a.PlainButton,
					kind: H.b.Button,
					priority: H.c.PlainLink,
					onClick: c,
					onMouseDown: K
				}, o)))
			}), Y = e => {
				let {
					email: t
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: G.a.ModalFormItem
				}, i.a.createElement("div", {
					className: G.a.ModalInputLabel
				}, q._("Email", null, {
					hk: "N93Hq"
				})), i.a.createElement("div", {
					className: G.a.ModalInput
				}, t)), i.a.createElement(H.t, {
					to: "/settings/account",
					className: G.a.PlainButton,
					kind: H.b.InternalLink,
					priority: H.c.PlainLink,
					onMouseDown: K
				}, q._("Update email address", null, {
					hk: "4bgFyL"
				})))
			}, Q = e => {
				let {
					email: t,
					onPrimaryButtonClick: n,
					onSecondaryButtonClick: r
				} = e;
				return i.a.createElement(z, {
					isPrimaryAction: !0,
					className: G.a.Modal,
					withOverlay: !0,
					onOverlayClick: r,
					title: q._("Verify your email to make your mark on the canvas", null, {
						hk: "Lad1Z"
					}),
					modalBody: i.a.createElement(Y, {
						email: t
					}),
					primaryButtonText: q._("Send verification email", null, {
						hk: "1zdmej"
					}),
					onPrimaryButtonClick: n,
					secondaryButtonText: q._("Not now", null, {
						hk: "YkgPb"
					}),
					onSecondaryButtonClick: r
				})
			}, J = e => {
				let {
					onSecondaryButtonClick: t
				} = e;
				return i.a.createElement(z, {
					isPrimaryAction: !1,
					className: G.a.Modal,
					withOverlay: !0,
					onOverlayClick: t,
					title: q._("Add your email to make your mark on the canvas", null, {
						hk: "2PVqer"
					}),
					primaryButtonText: q._("Add an email", null, {
						hk: "3rY2VL"
					}),
					secondaryButtonText: q._("Not now", null, {
						hk: "YkgPb"
					}),
					onSecondaryButtonClick: t
				})
			}, {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var X;
			! function(e) {
				e.None = "none", e.VerifyEmail = "verifyEmail", e.AddEmail = "addEmail"
			}(X || (X = {}));
			const $ = Object(c.c)({
					session: e => e.user.session,
					telemetryDefaults: e => {
						const t = {
								...Object(P.p)(e),
								...{
									action: L.d.Load,
									source: L.f.Experiment,
									noun: L.e.UserId
								}
							},
							{
								action: n,
								source: r,
								noun: s,
								...i
							} = Object(L.g)(t);
						return D(i)
					},
					isTooltipOpened: e => Boolean(e.tooltip.tooltipId),
					isSearchDropdownOpened: e => e.search.isDropdownOpen,
					isHeaderDropdownOpened: e => e.header.isSubscriptionsDropdownOpen,
					isLoggedIn: B.S,
					queryParams: e => Object(A.q)(e),
					email: B.p,
					isSubscriptionsPinned: M.c,
					locale: R.k
				}),
				ee = Object(o.b)($, e => ({
					closeSearchDropdown: () => e(Object(m.n)()),
					closeHeaderDropdown: () => e(Object(l.f)()),
					closeTooltipModal: () => e(Object(b.j)()),
					openRegisterModal: () => e(Object(u.openRegisterModal)()),
					openProfilePage: t => e(Object(a.b)(`/user/${t}`)),
					openErrorToast: () => e(Object(p.f)({
						duration: p.a,
						kind: T.b.Error,
						text: Z._("Something wen't wrong. Please try again later.", null, {
							hk: "4vD48K"
						})
					})),
					resendEmail: () => e(Object(f.v)()),
					navigateToDeeplink: e => {
						window.open(e, "_blank")
					}
				}));
			class te extends i.a.Component {
				constructor(e) {
					super(e), this.iframeRef = Object(s.createRef)(), this.handleEscapeKey = e => {
						e.key === k.b.Escape.toString() && this.toggleFullScreen(!1)
					}, this.toggleFullScreen = e => {
						const t = e ? v.FullScreen : v.Preview;
						this.messenger.sendMessageScreenMode(t), this.updateScreenModeInUrl(t), Object(N.e)(!e), e || I(), this.setState({
							isFullscreen: e
						})
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
						this.props.openRegisterModal()
					}, this.onMessageClose = () => {
						this.toggleFullScreen(!1)
					}, this.onMessageSyncCoordinates = e => {
						let {
							cx: t,
							cy: n,
							px: r,
							ts: s
						} = e;
						const i = new URL(location.href);
						i.searchParams.set("cx", `${t}`), i.searchParams.set("cy", `${n}`), i.searchParams.set("px", `${r}`), s && i.searchParams.set("ts", `${s}`), history.replaceState({}, "", i.toString())
					}, this.onMessageOpenProfile = e => {
						let {
							profileName: t
						} = e;
						t && "string" == typeof t && this.props.openProfilePage(t)
					}, this.onMessageVerifyAccount = () => {
						this.props.email ? this.setState({
							showModal: X.VerifyEmail
						}) : this.setState({
							showModal: X.AddEmail
						})
					}, this.onMessageNavigateToDeeplink = e => {
						let {
							link: t
						} = e;
						t && "string" == typeof t && this.props.navigateToDeeplink(t)
					}, this.onClickVerifyEmail = () => {
						this.setState({
							showModal: X.None
						}), this.props.resendEmail()
					}, this.onLoad = () => {
						this.setState({
							isLoaded: !0
						});
						const {
							isFullscreen: e
						} = j(this.props.locale);
						this.toggleFullScreen(e)
					}, this.onError = () => {
						this.setState({
							isLoaded: !1
						}), this.props.openErrorToast()
					}, this.onOverlayClick = () => {
						const {
							isFullscreen: e
						} = this.state, t = this.isAnyRedditModalOpened();
						e && t ? this.closeAnyRedditModal() : this.state.isFullscreen || (this.toggleFullScreen(!0), this.props.sendEvent(Object(w.b)()))
					}, this.updateScreenModeInUrl = e => {
						const t = new URL(location.href);
						t.searchParams.set("screenmode", `${e}`), history.replaceState({}, "", t.toString())
					}, this.messenger = new x(this.iframeRef, this.getAuthClientData, this.onMessageClose, this.onMessageSignIn, this.onMessageSyncCoordinates, this.onMessageOpenProfile, this.onMessageVerifyAccount, this.onMessageNavigateToDeeplink);
					const {
						iframeURL: t
					} = j(this.props.locale);
					this.state = {
						iframeURL: t,
						isFullscreen: !1,
						isLoaded: !1,
						showModal: X.None
					}
				}
				componentDidMount() {
					this.messenger.subscribe(), document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					C(), this.messenger.unsubscribe(), document.removeEventListener("keydown", this.handleEscapeKey)
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
						iframeURL: n,
						showModal: s
					} = this.state, o = this.isAnyRedditModalOpened();
					return i.a.createElement("div", {
						className: Object(d.a)(G.a.container, {
							[G.a.expanded]: t,
							[G.a.isSubscriptionsPinned]: this.props.isSubscriptionsPinned
						})
					}, n && i.a.createElement("iframe", {
						ref: this.iframeRef,
						onLoad: this.onLoad,
						onError: this.onError,
						className: G.a.iframe,
						allow: "web-share; clipboard-read; clipboard-write",
						src: n
					}), !e && i.a.createElement("img", {
						className: G.a.garlicBreadIcon,
						src: `${r.a.assetPath}/img/pixel-loader.gif`
					}), e && (!t || o) && i.a.createElement("div", {
						className: G.a.overlay,
						onClick: this.onOverlayClick
					}), s === X.VerifyEmail && i.a.createElement(Q, {
						email: this.props.email,
						onPrimaryButtonClick: this.onClickVerifyEmail,
						onSecondaryButtonClick: () => this.setState({
							showModal: X.None
						})
					}), s === X.AddEmail && i.a.createElement(J, {
						onSecondaryButtonClick: () => this.setState({
							showModal: X.None
						})
					}))
				}
			}
			t.a = Object(S.c)(ee(te))
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
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(o.c)({
				featureEnabled: c.d.spWalletRegistrationBanner
			});
			t.a = Object(i.b)(l)((function(e) {
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
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/screenWidths.ts"),
				l = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/components/HeaderImage/index.m.less"),
				f = n.n(b);
			const h = c.a.wrapped(u.a, "Planet", f.a),
				g = c.a.div("SubredditIcon", f.a),
				_ = c.a.div("PositionedImage", f.a),
				v = c.a.div("HeaderContent", f.a),
				x = c.a.div("HeaderContainer", f.a),
				y = c.a.span("HeaderText", f.a),
				E = c.a.wrapped(i.a, "HeaderUrl", f.a),
				O = c.a.span("Container", f.a),
				j = Object(a.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						n = Object(l.a)(e),
						r = Object(p.a)(e).banner.positionedImageAlignment,
						i = Object(p.a)(e).banner.positionedImage,
						a = Object(p.a)(e).banner.secondaryBannerPositionedImage;
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
					const u = !!i && !!a && "left" === r,
						b = Object(p.a)(e).banner.backgroundImage,
						j = b && "string" == typeof b && "tiled" === Object(p.a)(e).banner.backgroundImagePosition ? b.split("?")[0] : b,
						C = Object(m.g)(Object(p.a)(e).banner.backgroundColor, j, Object(p.a)(e).banner.backgroundImagePosition),
						I = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						S = `${4+I}px`;
					return s.a.createElement(O, {
						style: {
							background: C,
							filter: e.shouldBlurHeaderImage ? "blur(6px)" : "none",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, s.a.createElement(E, {
						className: e.className,
						to: e.url
					}, s.a.createElement(x, {
						className: Object(o.a)({
							[f.a.fullScreenDisabled]: !e.disableFullscreen,
							[f.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||d.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && s.a.createElement(v, {
						className: Object(o.a)({
							[f.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (n ? s.a.createElement(g, {
						style: {
							backgroundImage: `url(${n})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: S,
							width: S
						}
					}) : s.a.createElement(h, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: S,
							width: S
						}
					})), s.a.createElement(y, {
						style: {
							paddingTop: 32 === I ? "4px" : "14px"
						}
					}, t)), s.a.createElement(_, {
						className: Object(o.a)(f.a.PositionedImage, {
							[f.a.positionedImage]: !!i,
							[f.a.hoverPositionedImage]: !!i && !!a
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
		"./src/reddit/components/IdCard/DescriptionBlock/EditableDescriptionBlock.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-autosize-textarea/lib/index.js"),
				a = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditSettings.ts"),
				p = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				b = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				f = n("./src/reddit/components/IdCard/DescriptionBlock/index.tsx"),
				h = n("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/selectors/activeModalId.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				j = n.n(O);
			const C = 6,
				I = `${h.a}_description`,
				S = Object(d.c)({
					apiPending: E.Y,
					unsavedChangesModalIsOpen: Object(y.b)(I)
				}),
				k = Object(c.b)(S, (e, t) => {
					let {
						subreddit: n
					} = t;
					return {
						updateSubredditSettings: t => e(Object(m.j)(n.id, t, {}, !0)),
						openUnsavedChangesModal: () => {
							e(Object(u.h)(I))
						}
					}
				});
			class N extends i.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.containerRef = i.a.createRef(), this.isSaving = !1, this.setTextAreaRef = e => {
						this.textAreaRef = e
					}, this.handleOnFocus = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.state.editing) {
							const t = e.target !== this.textAreaRef ? () => this.focusTextArea() : void 0;
							this.setState({
								editing: !0
							}, t), this.props.sendEvent(v.a)
						}
					}, this.focusTextArea = () => {
						if (this.textAreaRef && this.textAreaRef.focus && (this.textAreaRef.focus({
								preventScroll: !0
							}), this.textAreaRef.setSelectionRange)) {
							const e = this.textAreaRef.value.length;
							this.textAreaRef.setSelectionRange(e, e)
						}
					}, this.handleOnBlur = e => {
						e.relatedTarget === this.textAreaRef || e.target.contains(e.relatedTarget) || e.relatedTarget === this.containerRef.current || (e.preventDefault(), e.stopPropagation(), this.stopEditing(!0, !1))
					}, this.onCancel = () => {
						this.setState({
							description: this.props.description
						}, () => this.stopEditing(!1, !0))
					}, this.onSave = () => {
						this.props.updateSubredditSettings({
							publicDescription: this.state.description
						}), this.isSaving = !0, this.stopEditing(!1, !0);
						const e = this.state.description,
							t = this.props.description;
						this.props.sendEvent(Object(v.d)(e, t))
					}, this.state = {
						description: e.description || "",
						editing: !1
					}
				}
				hasFocus() {
					return !!document.activeElement && (document.activeElement === this.containerRef.current || this.containerRef.current && this.containerRef.current.contains(document.activeElement))
				}
				UNSAFE_componentWillReceiveProps(e) {
					!e.apiPending && this.props.apiPending && (this.isSaving = !1), e.description === this.props.description || this.hasPendingChanges() || this.setState({
						description: e.description
					})
				}
				stopEditing(e, t) {
					e && this.hasPendingChanges() && !this.isSaving && this.props.openUnsavedChangesModal(), this.setState({
						editing: !1
					}), t && this.containerRef.current && this.containerRef.current.blur()
				}
				renderInactiveDescription() {
					const e = this.props.apiPending ? i.a.createElement(_.a, {
						className: j.a.loadingIcon,
						sizePx: C
					}) : void 0;
					return this.state.description ? i.a.createElement(i.a.Fragment, null, i.a.createElement(f.a, {
						description: this.state.description,
						shouldTruncateDescription: this.props.shouldTruncateDescription,
						subreddit: this.props.subreddit
					}, i.a.createElement(x.a, {
						name: "edit",
						className: j.a.pencil
					}), e)) : i.a.createElement("div", {
						className: j.a.emptyDescription
					}, r.fbt._("Add description", null, {
						hk: "47p1vF"
					}), e)
				}
				renderTextArea() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(a.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: r.fbt._("Tell us about your community", null, {
							hk: "40SeWt"
						}),
						className: Object(l.a)(j.a.editableDescription, j.a.activeEditableDescription),
						onChange: e => this.setState({
							description: e.currentTarget.value
						}),
						maxLength: b.d,
						value: this.state.description,
						"data-testid": "edit-description-block"
					}), i.a.createElement("div", {
						className: j.a.editableDescriptionControlRow
					}, i.a.createElement(p.a, {
						className: j.a.characterCountdown,
						maxChars: b.d,
						text: this.state.description
					}), i.a.createElement("span", {
						className: j.a.cancel,
						onClick: this.onCancel
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement("span", {
						className: j.a.save,
						onClick: this.onSave
					}, r.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
				hasPendingChanges() {
					return this.state.description !== this.props.description
				}
				getContainerClassNames() {
					if (!this.state.editing && this.state.description) return [j.a.defaultEditableDescriptionContainer];
					const e = [j.a.editableDescriptionContainer];
					return this.state.editing && e.push(j.a.activeEditableDescriptionContainer), e
				}
				render() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						ref: this.containerRef,
						className: Object(l.a)(...this.getContainerClassNames()),
						tabIndex: 0,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						"data-testid": "description-block"
					}, this.state.editing ? this.renderTextArea() : this.renderInactiveDescription(), this.props.unsavedChangesModalIsOpen && i.a.createElement(h.b, {
						withOverlay: !0,
						modalId: I,
						ignoreDefaultFocus: !0,
						onCancel: this.focusTextArea,
						onDiscard: this.onCancel,
						onSave: this.onSave
					})))
				}
			}
			t.a = k(Object(g.c)(N))
		},
		"./src/reddit/components/IdCard/DescriptionBlock/index.m.less": function(e, t, n) {
			e.exports = {
				descriptionContainer: "_1EPynDYoibfs7nDggdH7Gq",
				truncated: "_3-0c12FCnHoLz34dQVveax",
				description: "_1zPvgKHteTOub9dKkvrOl4",
				showMore: "_1dp4_svQVkkuV143AIEKsf",
				ellipsis: "_5VBcBVybCfosCzMJlXzC3",
				showFullDescriptionButton: "_3YNtuKT-Is6XUBvdluRTyI",
				active: "_2Z_0gYdq8Wr3FulRLZXC3e",
				transition: "_2ZTVnRPqdyKo1dA7Q7i4EL",
				noTransition: "k51Bu_pyEfHQF6AAhaKfS",
				editableDescriptionContainer: "_2qi_L6gKnhyJ0ZxPmwbDFK",
				activeEditableDescriptionContainer: "_3GG6tRGPPJiejLqt2AZfh4",
				defaultEditableDescriptionContainer: "IzSmZckfdQu5YP9qCsdWO",
				emptyDescription: "_1YvJWALkJ8iKZxUU53TeNO",
				editableDescriptionControlRow: "_3adDzm8E3q64yWtEcs5XU7",
				characterCountdown: "_3jyKpErOrdUDMh0RFq5V6f",
				save: "dqhlvajEe-qyxij0jNsi0",
				cancel: "_12nHw-MGuz_r1dQx5YPM2v",
				editableDescription: "_3zTJ9t4vNwm1NrIaZ35NS6",
				activeEditableDescription: "_2JIiUcAdp9rIhjEbIjcuQ-",
				loadingIcon: "_2I2LpaEhGCzQ9inJMwliNO",
				pencil: "_42Nh7O6pFcqnA6OZd3bOK"
			}
		},
		"./src/reddit/components/IdCard/DescriptionBlock/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = a.a.div("DescriptionContainer", l.a);
			class p extends s.a.Component {
				constructor(e) {
					super(e), this.containerRef = null, this.textRef = null, this.showFullDescription = e => {
						e.preventDefault(), e.stopPropagation(), this.setState({
							shouldTruncateDescription: !1
						})
					}, this.setContainerRef = e => this.containerRef = e, this.setTextRef = e => this.textRef = e, this.state = {
						shouldDisplayShowMore: !1,
						shouldTruncateDescription: e.shouldTruncateDescription
					}
				}
				componentDidMount() {
					this.state.shouldTruncateDescription && o.a.read(() => {
						this.containerRef && this.textRef && this.textRef.offsetHeight > this.containerRef.offsetHeight && this.setState({
							shouldDisplayShowMore: !0
						})
					})
				}
				render() {
					const {
						children: e,
						description: t,
						subreddit: n
					} = this.props, {
						shouldDisplayShowMore: r,
						shouldTruncateDescription: o
					} = this.state, a = n ? u._("Welcome to {subredditName}", [u._param("subredditName", n.name)], {
						hk: "1dVVp0"
					}) : "";
					return s.a.createElement(m, {
						className: Object(i.a)(l.a.descriptionContainer, o && l.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef,
						"data-testid": "no-edit-description-block"
					}, s.a.createElement("div", {
						className: l.a.description,
						ref: this.setTextRef
					}, t || a, e), o && r && s.a.createElement("div", {
						className: l.a.showMore
					}, "...", s.a.createElement(c.r, {
						className: l.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, u._("MORE", null, {
						hk: "1Xmz7S"
					}))))
				}
			}
			t.a = p
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
				return f
			})), n.d(t, "c", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/config.ts"),
				i = n("./src/lib/pubsub/index.ts"),
				o = n("./src/reddit/constants/listings.ts"),
				a = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === o.b.Popular,
				d = e => e && e.toLowerCase() === o.b.All,
				l = e => e && e === a.c,
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
					let t, n, i, a, m, {
						listingName: p,
						subreddit: b,
						idCardWidget: f
					} = e;
					const h = f && f.subscribersText || r.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						g = f && f.currentlyViewingText || r.fbt._("Online", null, {
							hk: "36JX70"
						});
					let _, v;
					return l(p) ? (t = `${s.a.assetPath}/img/id-cards/home-banner@2x.png`, i = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = o.c[o.b.Home], n = r.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), a = r.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(p) ? (t = `${s.a.assetPath}/img/id-cards/banner@2x.png`, n = r.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), i = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/all", m = o.c[o.b.All]) : c(p) ? (t = `${s.a.assetPath}/img/id-cards/banner@2x.png`, n = r.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), i = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/popular", m = o.c[o.b.Popular]) : p && (n = f && f.description, i = u(""), a = b.displayText, m = b.url, v = f && f.subscribersCount, _ = f && f.currentlyViewingCount), {
						snooBackground: i,
						description: n,
						titleText: a,
						url: m,
						subscribersCount: v,
						subscribersText: h,
						currentlyViewingText: g,
						currentlyViewingCount: _,
						...t ? {
							bannerBackgroundImage: t
						} : {}
					}
				},
				p = new i.a,
				b = "VISIBLE",
				f = "NOT_VISIBLE",
				h = e => p.publish(e ? b : f)
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const o = e => new Promise((t, n) => {
				const r = new Image;
				r.onload = () => t(r), r.onerror = n, r.src = e
			});
			t.a = e => {
				let {
					src: t,
					lowSrc: n = t,
					errorSrc: a = n,
					...c
				} = e;
				const d = Object(r.createRef)();
				return o(t).then(() => {
					d.current && (d.current.src = t)
				}).catch(() => {
					d.current && (d.current.src = a)
				}), s.a.createElement("img", i({
					ref: d,
					src: n
				}, c))
			}
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = n.n(o),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", a.a),
				l = c.a.div("TextWrapper", a.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: r,
					subtitle: o,
					title: c,
					textWrapperClassName: u
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(t, a.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, s.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), r ? s.a.createElement(d, null, r) : s.a.createElement(d, null), s.a.createElement(l, {
					className: u
				}, s.a.createElement("div", {
					className: a.a.title
				}, c), o && s.a.createElement("div", {
					className: a.a.subtitle
				}, o)))
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
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/constants/colors.ts"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				u = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				f = n.n(b);
			const h = i.a.createElement(u.a, {
					className: f.a.icon
				}),
				g = Object(a.c)({
					subreddit: m.C,
					subredditAboutInfo: m.z
				}),
				_ = Object(o.b)(g);
			t.a = _(e => {
				const {
					subreddit: t,
					subredditAboutInfo: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const s = n && n.quarantineMessageHtml,
					o = n && n.quarantineMessage || r.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return i.a.createElement(p.a, {
					className: f.a.container,
					color: d.a.quarantine,
					icon: h,
					subtitle: i.a.createElement("span", null, r.fbt._("This community is {=quarantined}", [r.fbt._param("=quarantined", i.a.createElement("a", {
						className: f.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", s ? i.a.createElement(c.a, {
						className: f.a.rawHtmlDisplay,
						html: s
					}) : o, " ", i.a.createElement(l.default, {
						className: f.a.link,
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
				return _
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "i", (function() {
				return k
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/lodash/isNil.js"),
				c = n.n(a),
				d = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
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
			var p = Object(i.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const n = Object(f.c)(e, t),
					r = Object(h.N)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var _ = Object(i.b)(() => Object(o.a)(g, b.j, (e, t) => ({
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
				const n = Object(f.c)(e, t),
					r = Object(h.N)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var x = Object(i.b)(() => Object(o.a)(v, e => e))(e => s.a.createElement(p, {
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
			var y = Object(i.b)(() => Object(o.c)({
					subreddit: h.X
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
				E = n("./src/reddit/hooks/usePostContext.ts");
			var O = e => {
				const t = Object(E.a)(),
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
				const t = Object(E.a)(),
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
				const t = Object(E.a)(),
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
			var I = Object(i.b)(() => Object(o.c)({
				subreddit: h.X
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
			var S = Object(i.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(h.Q)(e, {
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
			var k = Object(i.b)(() => Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(h.X)(e, {
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
				return h
			})), n.d(t, "a", (function() {
				return g
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(l);
			const m = Object(s.createContext)(null),
				p = Object(s.createContext)(null);
			class b extends i.a.Component {
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
					return i.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, i.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const f = a.f + 10,
				h = i.a.memo(() => {
					const [e, t] = Object(s.useState)("-500px"), n = Object(s.useContext)(c.a);
					return i.a.createElement(m.Consumer, null, s => s && i.a.createElement("div", {
						className: Object(o.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, i.a.createElement(d.t, {
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
							s.focus(), s.scrollIntoView(), window.scrollBy(0, -f)
						}
					}, r.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), i.a.createElement("div", {
						className: Object(o.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				g = i.a.memo(() => i.a.createElement(p.Consumer, null, e => i.a.createElement("div", {
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
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lottie-web/build/player/lottie.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/reddit/components/LottieAnimation/util.ts");
			const c = o.a.memo(e => {
				const t = o.a.createRef(),
					{
						assetData: n,
						assetUrl: r,
						className: c,
						hidden: d,
						loop: l,
						useCanvasRenderer: u,
						onClick: m,
						prefersReducedAnimation: p
					} = e,
					[b, f] = Object(i.useState)(n);
				Object(i.useEffect)(() => {
					r ? Object(a.a)(r).then(f) : n && f(n)
				}, [r, n]);
				const [h, g] = Object(i.useState)(null);
				Object(i.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || h || !b) return;
					const n = s.a.loadAnimation({
						autoplay: !1,
						renderer: u ? "canvas" : "svg",
						loop: l,
						container: e,
						animationData: b
					});
					g(n)
				}, [l, t, h, b]), Object(i.useEffect)(() => {
					if (h)
						if (d) h.stop();
						else if (p) {
						const e = h.getDuration(!0);
						h.goToAndPlay(e, !0)
					} else h.goToAndPlay(0)
				}, [d, p, h]);
				const _ = Object(i.useCallback)(() => {
					h && h.goToAndPlay(0)
				}, [h]);
				return o.a.createElement("div", {
					className: c,
					style: {
						display: d ? "none" : "block"
					},
					ref: t,
					onClick: m || _
				})
			});
			t.a = c
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./src/reddit/components/ImageWithFallback/index.tsx");
			const r = {};

			function s(e) {
				let t = r[e];
				return t || (t = r[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
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
				return f
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "u", (function() {
				return N
			})), n.d(t, "r", (function() {
				return w
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "c", (function() {
				return L
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/reddit/controls/Button/index.tsx"),
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
				f = s.a.section("ModalPostPreview", u.a),
				h = s.a.p("ModalText", u.a),
				g = s.a.div("ModalSmallText", u.a),
				_ = s.a.div("ModalDescriptionText", u.a),
				v = s.a.div("ModalMetaText", u.a),
				x = s.a.label("ModalFormItem", u.a),
				y = s.a.wrapped(c.a, "ModalInput", u.a),
				E = s.a.label("ModalInputLabel", u.a),
				O = s.a.footer("ModalFooter", u.a),
				j = s.a.header("ModalHeader", u.a),
				C = s.a.div("ModalTitle", u.a),
				I = s.a.div("ModalAnnotation", u.a),
				S = s.a.div("ModalMain", u.a),
				k = s.a.textarea("TextArea", u.a),
				N = s.a.wrapped(a.l, "WarningButton", u.a),
				w = s.a.wrapped(a.l, "PrimaryButton", u.a),
				T = s.a.wrapped(a.o, "CancelButton", u.a),
				P = s.a.wrapped(a.r, "RemoveButton", u.a),
				L = e => {
					let {
						className: t,
						...n
					} = e;
					return o.a.createElement(a.t, m({
						kind: a.b.Button,
						priority: a.c.Primary,
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
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
				} = e, l = Object(r.useContext)(c.a), p = Object(i.e)(e => Object(d.a)(e) || Object(d.c)(e));
				return s.a.createElement("div", {
					className: Object(o.a)(u.a.wrapper, {
						[u.a.wrapperExp]: l,
						[u.a.joinOptimizationsM2]: p
					}),
					onClick: t
				}, s.a.createElement(a.a, {
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/components/Onboarding/Interests/InterestPill.tsx"),
				c = n("./src/reddit/components/Scroller/ScrollChild.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/experiments.ts"),
				u = n("./src/reddit/helpers/counters/onboarding.ts"),
				m = n("./src/reddit/helpers/onboarding/reonboarding.ts"),
				p = n("./src/reddit/helpers/trackers/onboarding.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				h = n("./src/reddit/models/Onboarding/index.ts"),
				g = n("./src/reddit/selectors/experiments/onboarding.ts"),
				_ = n("./src/lib/classNames/index.ts"),
				v = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				x = n.n(v);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = e => {
				let {
					interests: t
				} = e;
				const n = Object(i.d)(),
					c = Object(d.b)(),
					v = Object(i.e)(g.j),
					E = v === l.pb.Feed ? t.topics.slice(0, 5) : t.topics,
					[O, j] = Object(r.useState)(!1),
					[C, I] = Object(r.useState)(),
					S = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
						e ? (I(e), c(Object(p.D)(null == e ? void 0 : e.topic, null == e ? void 0 : e.id))) : c(Object(p.B)()), n(Object(o.openD2xOnboardingModal)({
							type: h.d.REONBOARDING,
							selectedInterests: e ? {
								[e.id]: []
							} : {}
						})), Object(u.b)(h.f.Popover, v)
					},
					k = Object(r.useCallback)(() => {
						Object(m.a)(), c(Object(p.C)()), j(!0)
					}, [c]);
				return Object(m.b)() ? s.a.createElement("div", {
					className: Object(_.a)(x.a.InterestPickerPreview, {
						[x.a.Dismissed]: O
					})
				}, s.a.createElement("div", {
					className: x.a.InterestPickerPreviewTopBorder
				}), s.a.createElement("div", {
					className: x.a.InterestPickerPreviewHeader
				}, s.a.createElement("h3", {
					className: x.a.Title
				}, y._("What do you want to see more of?", null, {
					hk: "35GlAb"
				})), s.a.createElement("button", {
					"aria-label": y._("Dismiss", null, {
						hk: "2x5qvs"
					}),
					onClick: k
				}, s.a.createElement(b.a, {
					name: "close",
					className: x.a.DismissButton
				}))), s.a.createElement("ul", {
					className: x.a.InterestListButtons
				}, E.map((e, t) => {
					const n = e.topic;
					return s.a.createElement("li", {
						className: x.a.InterestListItem,
						key: e.id
					}, s.a.createElement(a.a, {
						colorIndex: t,
						isSelected: e === C,
						onClickHandler: () => S(e),
						topic: n
					}))
				})), s.a.createElement(f.a, {
					className: x.a.ChooseMore,
					onClick: () => S()
				}, y._("Choose more topics", null, {
					hk: "2bFeJ4"
				}), s.a.createElement(b.a, {
					className: x.a.CaretRight,
					name: "caret_right"
				}))) : null
			}, O = e => {
				let {
					children: t,
					desiredIdx: n,
					interests: r,
					sendEvent: i,
					variant: o
				} = e;
				return {
					child: {
						id: "interest-topic-recommendations",
						estHeight: 300,
						trackOnEnteredViewport: () => {
							Object(m.d)(), Object(u.b)(h.f.Feed, o), i(Object(p.E)())
						},
						render: () => s.a.createElement(E, {
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
				i = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/polished/dist/polished.es.js"),
				c = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				d = n.n(c);
			const l = (e, t, n) => {
					if (!t && !n) return {};
					let r = u(e);
					return n && !t && (r = Object(a.f)(r, .25)), {
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
					onClickHandler: a,
					topic: c
				} = e;
				return s.a.createElement(i.t, {
					className: Object(o.a)(d.a.InterestButton, {
						[d.a.Selected]: n
					}),
					kind: i.b.Button,
					onClick: a,
					style: l(t, n, r)
				}, c)
			}
		},
		"./src/reddit/components/PrivateFeedPage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/userPrefs.ts");
			const c = e => {
				let {
					isLoggedIn: t,
					isNightmodeOn: n
				} = e;
				const s = Object(o.e)(a.c),
					c = t ? n ? `${r.a.assetPath}/img/private-feeds/dark_logged_in.jpg` : `${r.a.assetPath}/img/private-feeds/light_logged_in.jpg` : n ? `${r.a.assetPath}/img/private-feeds/dark_logged_out.jpg` : `${r.a.assetPath}/img/private-feeds/light_logged_out.jpg`,
					d = i.a.createElement("img", {
						className: "absolute",
						src: c,
						style: {
							height: "calc(100vh - 50px)"
						}
					});
				return i.a.createElement("div", {
					className: `absolute w-screen flex ${s?"":"justify-center"}`,
					style: {
						backgroundColor: "var(--newCommunityTheme-canvas)",
						height: "calc(100vh - 50px)"
					}
				}, d)
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/lodash/sampleSize.js"),
				c = n.n(a),
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
				f = 3,
				h = e => {
					const {
						iconsKey: t,
						memberIconClassName: n,
						numVisibleIcons: r = f,
						presenceDotOutlineClassName: a,
						shouldShowPresenceDot: u,
						wrapperClassName: h
					} = e, g = Object(s.useRef)([]);
					return Object(l.a)(() => {
						const e = Object(d.a)(t, b, !0);
						g.current = c()(e, r)
					}), i.a.createElement("div", {
						className: Object(o.a)(m.a.membersIcons, h)
					}, g.current.map((e, t) => {
						let {
							color: s,
							image: c
						} = e;
						return t === r - 1 && u ? i.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: t
						}, i.a.createElement("img", {
							className: Object(o.a)(m.a.memberIcon, n),
							src: c,
							style: {
								backgroundColor: s
							}
						}), i.a.createElement(p, {
							showPresence: !0,
							outlineClassName: a
						})) : i.a.createElement("img", {
							className: Object(o.a)(m.a.memberIcon, n),
							key: t,
							src: c,
							style: {
								backgroundColor: s
							}
						})
					}))
				};
			t.a = h
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
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(m);
			const b = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				f = c.a.wrapped(e => {
					const t = Object(l.a)();
					return i.a.createElement("div", {
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
			t.a = b(Object(a.a)(f))
		},
		"./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return z
			})), n.d(t, "b", (function() {
				return Y
			}));
			var r, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./node_modules/react-redux/es/index.js"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/SubredditIcon/index.tsx"),
				p = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/constants/tracking.ts"),
				h = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.CLOSE = "close", e.SHOW_MORE = "show_more", e.TITLE_SUBREDDIT = "title_subreddit", e.RECOMMENDATION_MODULE = "recommendation_module", e.SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(r || (r = {}));
			const g = "related_community_recommendations_v1",
				_ = (e, t) => {
					let {
						postId: n,
						subredditId: r,
						variant: s,
						numberItems: i,
						seenItems: o,
						seen: a = !0,
						modelVersion: c = g,
						pageType: d
					} = e;
					return {
						...h.p(t),
						post: n ? h.L(t, n) : void 0,
						source: "cdd_discovery_unit",
						actionInfo: {
							pageType: d,
							reason: r
						},
						discoveryUnit: {
							id: "related_communities_recommendations",
							name: c,
							type: s
						},
						visibility: {
							number_items: i,
							number_seen_items: o.length,
							seen_items: o,
							seen: a
						}
					}
				};
			var v = n("./src/reddit/constants/experiments.ts"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				y = n("./src/lib/initializeClient/installReducer.ts"),
				E = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/relatedCommunitiesRecommendations/constants.ts"));
			const O = {
				subreddits: [],
				error: null,
				loaded: !1,
				pending: !1
			};
			var j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.b: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									pending: !0
								}
							}
						}
						case E.c: {
							const {
								subredditId: n,
								subreddits: r = {},
								modelVersion: s
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									modelVersion: s,
									subreddits: Object.keys(r),
									error: null,
									loaded: !0,
									pending: !1
								}
							}
						}
						case E.a: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									error: t.payload,
									loaded: !0,
									pending: !1
								}
							}
						}
						default:
							return e
					}
				},
				C = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./node_modules/reselect/es/index.js");
			Object(y.a)({
				features: {
					relatedCommunitiesRecommendations: j
				}
			});
			const S = Object(I.a)([(e, t) => {
					var n, r, s;
					return null !== (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.relatedCommunitiesRecommendations) || void 0 === r ? void 0 : r[t]) && void 0 !== s ? s : O
				}], e => e),
				k = Object(I.a)([(e, t) => S(e, t)], e => {
					var t;
					return null !== (t = null == e ? void 0 : e.subreddits) && void 0 !== t ? t : []
				}),
				N = Object(I.a)([e => e, C.fb], (e, t) => t.map(t => ({
					...t,
					...Object(C.y)(e, {
						subredditId: t.id
					})
				})));
			var w = n("./src/config.ts");
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var P, L = e => {
				let {
					seed: t
				} = e;
				const n = Math.min(3 * (t + 1), 37),
					r = [n, n + 1, n + 2];
				return o.a.createElement("div", {
					"data-testid": "avatar-group"
				}, null == r ? void 0 : r.map((e, t) => o.a.createElement("img", {
					key: e,
					className: "w-[16px] h-[20px] ml-[-4px] first:ml-0",
					src: `${w.a.assetPath}/img/talk/avatars/${e}.png`,
					alt: T._("Online members", null, {
						hk: "3uJPWb"
					})
				})))
			};

			function D(e) {
				switch (e) {
					case v.Ff.Minimalist:
					case v.Df.Minimalist:
					case v.Ef.Minimalist:
						return P.MINIMALIST;
					case v.Ff.HotnessSignals:
					case v.Df.SocialSignals:
					case v.Ef.SocialSignals:
						return P.SIGNALS;
					case v.Ff.Description:
					case v.Df.Description:
					case v.Ef.Description:
						return P.DESCRIPTION
				}
				return P.MINIMALIST
			}! function(e) {
				e[e.MINIMALIST = 0] = "MINIMALIST", e[e.SIGNALS = 1] = "SIGNALS", e[e.DESCRIPTION = 2] = "DESCRIPTION"
			}(P || (P = {}));
			const R = e => {
				let {
					recommendedCommunities: t,
					numberOfVisibleItems: n,
					variant: i,
					postId: d,
					originalSubredditId: g,
					pageType: v,
					columnLayout: y = "single",
					dismissCallback: E
				} = e;
				const O = Object(c.a)(),
					j = Object(l.e)(e => N(e, {
						subredditIds: t
					})),
					C = {
						postId: d,
						subredditId: g,
						variant: i,
						numberItems: t.length,
						seenItems: t.slice(0, n),
						pageType: v
					},
					I = D(i);
				return o.a.createElement("ul", {
					className: `pb-[8px] ${"double"===y&&"grid gap-4 grid-cols-2"}`,
					"data-testid": "recommended-community-list"
				}, j.map((e, t) => {
					let {
						id: i,
						subscribers: c,
						accountsActive: d,
						icon: l,
						communityIcon: g,
						name: v,
						url: j,
						displayText: S,
						publicDescription: k
					} = e;
					if (t >= n) return null;
					const N = s.fbt._({
							"*": "{Number of subscribers} members",
							_1: "{Number of subscribers} member"
						}, [s.fbt._param("Number of subscribers", Object(u.b)(c)), s.fbt._plural(c)], {
							hk: "3fAm5T"
						}),
						w = d ? `• ${s.fbt._("{Number of subscribers online} Online",[s.fbt._param("Number of subscribers online",Object(u.b)(d))],{hk:"4s9dx5"})}` : "",
						T = () => {
							E && E(), O(((e, t, n) => s => ({
								..._(e, s),
								subreddit: h.nb(s, t),
								action: f.c.CLICK,
								noun: r.TITLE_SUBREDDIT,
								actionInfo: {
									..._(e, s).actionInfo,
									position: n
								}
							}))(C, i, t))
						};
					return o.a.createElement("li", {
						key: i,
						className: "px-[16px] py-[8px] flex items-start"
					}, o.a.createElement("div", {
						onClick: T
					}, o.a.createElement(m.b, {
						iconUrl: (null == l ? void 0 : l.url) || g,
						className: "block !w-[32px] !h-[32px] rounded-full !text-[32px] !leading-none",
						linkTo: j || `/${S}`
					})), o.a.createElement("div", {
						className: `${"single"===y&&"truncate"} flex flex-col w-100`
					}, o.a.createElement("div", {
						className: "flex items-start"
					}, o.a.createElement("div", {
						className: "ml-[8px] min-w-0"
					}, o.a.createElement(x.default, {
						className: "text-[14px] leading-[16px] font-semibold text-neutral-content-strong truncate",
						to: j || `/${S}`,
						onClick: T
					}, S, o.a.createElement("div", {
						className: "mt-[4px] text-[12px] leading-[14px] font-normal text-neutral-content-weak truncate"
					}, I === P.MINIMALIST && N, (I === P.SIGNALS || I === P.DESCRIPTION) && o.a.createElement("div", {
						className: "flex gap-x-xs justify-start items-center"
					}, o.a.createElement(L, {
						seed: t
					}), o.a.createElement("div", null, `${N} ${w}`))))), o.a.createElement(p.a, {
						doNotHideOtherSubscribeButtons: !0,
						className: "ml-auto mt-[2px]",
						postId: i,
						identifier: {
							name: v,
							type: b.a.SUBREDDIT
						},
						size: a.d.XS,
						getEventFactory: e => e ? ((e, t, n) => s => ({
							..._(e, s),
							subreddit: h.nb(s, t),
							action: f.c.CLICK,
							noun: r.SUBREDDIT_UNSUBSCRIBE,
							actionInfo: {
								..._(e, s).actionInfo,
								position: n
							}
						}))(C, i, t) : ((e, t, n) => s => ({
							..._(e, s),
							subreddit: h.nb(s, t),
							action: f.c.CLICK,
							noun: r.SUBREDDIT_SUBSCRIBE,
							actionInfo: {
								..._(e, s).actionInfo,
								position: n
							}
						}))(C, i, t)
					})), I === P.DESCRIPTION && o.a.createElement("div", {
						className: `pt-[4px] ml-[8px] pr-sm text-[12px] leading-[14px] font-normal text-neutral-content-weak ${"double"===y?"[-webkit-line-clamp:3] [text-overflow:ellipsis] [display:-webkit-box] [-webkit-box-orient:vertical] max-h-[4.143em] overflow-hidden":"truncate"}`
					}, o.a.createElement(x.default, {
						to: j || `/${S}`,
						onClick: T
					}, k))))
				}))
			};
			var A = n("./src/lib/makeActionCreator/index.ts"),
				B = n("./src/lib/makeGqlRequest/index.ts"),
				M = n("./src/lib/makeRequest/index.ts"),
				U = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				F = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				W = n("./src/redditGQL/operations/GetRelatedCommunityRecommendations.json");
			const H = async (e, t) => {
				const n = await Object(B.a)(e, {
					...W,
					variables: t
				});
				if (!Object(M.c)(n)) throw new Error("Encountered an error while fetching live discovery content");
				return (e => {
					var t, n, r, s;
					const i = {
						modelVersion: null !== (n = null === (t = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === t ? void 0 : t.modelVersion) && void 0 !== n ? n : "related_community_recommendations_v1",
						aboutInfo: {},
						models: {}
					};
					return null === (s = null === (r = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === r ? void 0 : r.recommendations) || void 0 === s ? void 0 : s.reduce((e, t) => e = {
						...e,
						models: {
							...e.models,
							[t.id]: Object(F.a)(t)
						},
						aboutInfo: {
							...e.aboutInfo,
							...Object(U.a)(t)
						}
					}, i)
				})(n.body.data)
			};
			Object(y.a)({
				features: {
					relatedCommunitiesRecommendations: j
				}
			});
			const V = Object(A.a)(E.b),
				G = Object(A.a)(E.c),
				q = Object(A.a)(E.a),
				K = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					t(V({
						subredditId: e
					}));
					try {
						const n = await H(s(), {
							subredditId: e
						});
						t(G({
							subredditId: e,
							modelVersion: n.modelVersion,
							subreddits: n.models,
							subredditAboutInfo: n.aboutInfo
						}))
					} catch (i) {
						t(q({
							subredditId: e,
							ApiError: i
						}))
					}
				};
			var z;
			! function(e) {
				e.Home = "home", e.Profile = "profile", e.Community = "community"
			}(z || (z = {}));
			const Y = e => {
				let {
					subredditDisplayText: t,
					variant: n,
					postId: u,
					subredditId: m,
					onDismiss: p,
					pageType: b
				} = e;
				const h = D(n),
					g = function(e) {
						let {
							pageType: t,
							activeUIVariant: n
						} = e;
						switch (t) {
							case z.Profile:
							case z.Community:
								return n === P.MINIMALIST ? "double" : "single";
							case z.Home:
							default:
								return "single"
						}
					}({
						pageType: b,
						activeUIVariant: h
					}),
					v = function(e, t) {
						return "double" === t ? e === P.DESCRIPTION ? 2 : 4 : 3
					}(h, g),
					[x, y] = Object(i.useState)(v),
					E = Object(c.a)(),
					{
						recommendations: O,
						fetchPending: j,
						recommendationsLoaded: C,
						fetchError: I,
						modelVersion: N
					} = function(e) {
						let {
							subredditId: t
						} = e;
						const n = Object(l.d)(),
							r = Object(l.e)(e => k(e, t)),
							{
								pending: s,
								loaded: o,
								error: a,
								modelVersion: c
							} = Object(l.e)(e => S(e, t)),
							d = !o && !s;
						return Object(i.useEffect)(() => {
							d && n(K(t))
						}, [n, t, d]), {
							recommendations: r,
							fetchPending: s,
							recommendationsLoaded: o,
							fetchError: a,
							modelVersion: c
						}
					}({
						subredditId: m
					}),
					w = x < (O.length || 0),
					T = Object(i.useMemo)(() => !C || j ? null : I || O.length <= 0 ? {
						modelVersion: N,
						seen: !1,
						postId: u,
						subredditId: m,
						variant: n,
						numberItems: 0,
						seenItems: [],
						pageType: b
					} : {
						modelVersion: N,
						seen: !0,
						postId: u,
						subredditId: m,
						variant: n,
						numberItems: O.length,
						seenItems: O.slice(0, v),
						pageType: b
					}, [C, j, I, O, N, u, m, n, v, b]);
				if (Object(i.useEffect)(() => {
						E && T && E((e => t => ({
							..._(e, t),
							action: f.c.VIEW,
							noun: r.RECOMMENDATION_MODULE
						}))(T))
					}, [E, T]), !C || O.length <= 0) return null;
				return o.a.createElement("div", {
					className: "bg-[color:var(--newCommunityTheme-body)] mb-[10px] border border-solid border-[color:var(--newCommunityTheme-postLine)] rounded-[4px]"
				}, o.a.createElement("div", {
					className: "px-[16px] py-[8px] flex items-center"
				}, o.a.createElement("h3", {
					className: "text-[14px] leading-[20px] font-semibold text-neutral-content-strong truncate min-w-0"
				}, s.fbt._("Similar to {subreddit display text}", [s.fbt._param("subreddit display text", t)], {
					hk: "2ZdEdB"
				})), o.a.createElement("button", {
					className: "ml-auto w-[16px] h-[16px] inline-block",
					"aria-label": s.fbt._("Hide Recommended Communities", null, {
						hk: "1D8cvx"
					}),
					onClick: () => {
						p(), T && E((e => t => ({
							..._(e, t),
							action: f.c.CLICK,
							noun: r.CLOSE
						}))({
							...T,
							seenItems: null == O ? void 0 : O.slice(0, x)
						}))
					}
				}, o.a.createElement(d.a, {
					className: "block w-full h-full text-neutral-content-weak",
					fill: "currentColor"
				}))), o.a.createElement(o.a.Fragment, null, o.a.createElement(R, {
					recommendedCommunities: O,
					numberOfVisibleItems: x,
					postId: u,
					originalSubredditId: m,
					variant: n,
					pageType: b,
					columnLayout: g,
					dismissCallback: p
				}), w && o.a.createElement("div", {
					className: "flex items-center justify-center pb-[8px]"
				}, o.a.createElement(a.a, {
					kind: a.b.Button,
					priority: a.c.Tertiary,
					onClick: () => {
						const e = x + v;
						y(e), E((e => t => ({
							..._(e, t),
							action: f.c.CLICK,
							noun: r.SHOW_MORE
						}))({
							...T,
							seenItems: null == O ? void 0 : O.slice(0, e)
						}))
					}
				}, s.fbt._("Show more", null, {
					hk: "2kAGl6"
				})))))
			}
		},
		"./src/reddit/components/RelatedSubredditsCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
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
					const t = Object(o.e)(a.f),
						n = Object(o.e)(a.a);
					return t || n ? i.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/raf/index.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i);
			class a extends o.a.Component {
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
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n      visibility: hidden;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return o.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/SEOTitle/constants.ts": function(e, t, n) {
			"use strict";
			var r, s;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
				}(r || (r = {})),
				function(e) {
					e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
				}(s || (s = {}))
		},
		"./src/reddit/components/SEOTitle/index.m.less": function(e, t, n) {
			e.exports = {
				Title: "_eYtD2XCVieq6emjKBH3m",
				title: "_eYtD2XCVieq6emjKBH3m"
			}
		},
		"./src/reddit/components/SEOTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a.a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/SEOTitle/constants.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/helpers/postCollection.ts");
			const l = [c.Tb.COMMENTS, c.Tb.COLLECTION_COMMENTS],
				u = (e, t) => {
					if (!e) return [];
					const n = l.includes(e),
						r = e === c.Tb.COLLECTION_COMMENTS || t && Object(d.a)(t),
						s = c.ab.has(e),
						i = c.Ib.has(e),
						o = e === c.Tb.SUBREDDIT,
						u = e === c.Tb.TOPIC;
					let m, p, b;
					return s && !o || i ? m = a.a.HeaderSelector : r ? m = a.a.Collection : n ? m = a.a.PostComments : u && (m = a.a.TopicHeader), (s || i || r || n) && (p = a.a.Widget), (s || n) && (b = a.a.PostItem), [m, p, b]
				};
			var m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/components/SEOTitle/index.m.less"),
				f = n.n(b);
			const h = e => {
					let {
						level: t,
						children: n
					} = e;
					const r = `h${t}`;
					return s.a.createElement(r, {
						className: f.a.Title
					}, n)
				},
				g = Object(m.v)(),
				_ = Object(i.b)(() => Object(o.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					return n && Object(p.n)(e, {
						page: n
					})
				}, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return n && n.meta && n.meta.name
				}, (e, t) => {
					let {
						type: n
					} = t;
					return n
				}, (e, t, n) => ({
					level: u(t, e).indexOf(n) + 1 || void 0
				})));
			class v extends s.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? s.a.createElement(h, {
						level: t
					}, e) : s.a.createElement(s.a.Fragment, null, e)
				}
			}
			t.b = g(_(v))
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
				i = n.n(s);
			t.a = r.a.div("header", i.a)
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
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/contexts/Post/index.tsx"),
				g = n("./src/reddit/controls/InternalLink/index.tsx"),
				_ = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				v = n("./src/reddit/helpers/name/index.ts"),
				x = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				E = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = n("./src/reddit/components/MiniCardPost/index.m.less"),
				j = n.n(O),
				C = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				I = n.n(C);
			const S = e => e.type === x.f.Spoiler,
				k = Object(f.v)();
			t.a = k(Object(h.b)(Object(b.a)(Object(d.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: i,
					innerContainerClassName: d,
					onPostClick: b,
					trendingPost: f,
					trendingSearch: h,
					shouldOpenPost: x,
					showSubredditMeta: O = !0,
					showSubredditName: C,
					subredditOrProfile: k
				} = e, N = f && f.preview && f.preview.url || void 0, w = f && f.isSponsored ? "promoted_trend" : "trending", T = f && Object(l.a)(f.permalink) || "", P = x && T || h && Object(a.a)("/search", {
					q: h.rawQuery,
					source: w
				}) || T, L = h ? h.subredditInfo && h.subredditInfo.icon : k && k.icon.url, D = h ? h.subredditInfo && h.subredditInfo.displayText : k && (k.displayText || k.name), R = f ? f.flair.filter(S) : [], A = f ? f.score : 0, B = f ? f.numComments : 0, M = f && f.isSponsored, U = Object(E.a)(e).body, F = `linear-gradient(\n      ${Object(s.f)(U,.2)},\n      ${Object(s.f)(U,.3)},\n      ${Object(s.f)(U,.4)},\n      ${Object(s.f)(U,.6)},\n      ${Object(s.f)(U,.8)},\n      ${U}\n    )`, W = o.a.createElement("div", {
					id: i,
					className: Object(c.a)(I.a.trendingPost, {
						[I.a["m-background"]]: !!N
					})
				}, o.a.createElement(g.default, {
					to: P
				}, o.a.createElement("div", {
					className: Object(c.a)(I.a.backgroundWrapper, j.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(E.a)(e).body, N || Object(E.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": F
					}
				}, M && o.a.createElement("div", {
					className: I.a.promoted
				}, r.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), o.a.createElement("div", {
					className: Object(c.a)(I.a.innerContainer, j.a.innerContainer, d),
					onClick: b,
					title: f ? f.title : ""
				}, o.a.createElement("h2", {
					className: f ? I.a.title : I.a.titleNoDescription
				}, e.title), f ? o.a.createElement("div", {
					className: Object(c.a)(I.a.description, n)
				}, R.length > 0 && o.a.createElement(m.a, {
					className: I.a.flair,
					titleFlair: R,
					nowrap: !0,
					post: f
				}), f.title) : o.a.createElement("div", {
					className: I.a.spacer
				}), O && L && D && o.a.createElement(_.a, {
					className: I.a.relatedSubredditMetaData,
					iconClassName: I.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: r.fbt._("{subredditName} and more", [r.fbt._param("subredditName", D)], {
						hk: "2YTyJf"
					})
				}), !O && f && o.a.createElement("div", {
					className: I.a.metaLine
				}, C && D && o.a.createElement("span", {
					className: I.a.meta
				}, Object(v.d)(D)), o.a.createElement("span", {
					className: I.a.meta
				}, r.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [r.fbt._plural(A, "number", Object(u.b)(A))], {
					hk: "1Jm6il"
				})), o.a.createElement("span", {
					className: I.a.meta
				}, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(B, "number", Object(u.b)(B))], {
					hk: "311aXY"
				})))))));
				return M ? o.a.createElement(p.a, {
					post: f
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = n.n(a);

			function d(e) {
				const {
					className: t,
					id: n,
					layoutBodyClassName: r,
					showCardView: a
				} = e, d = {
					[c.a["m-card"]]: a
				};
				return s.a.createElement("div", {
					id: n,
					className: Object(i.a)(c.a.container, d, t)
				}, s.a.createElement(o.a, {
					className: c.a.layout,
					bodyClassName: Object(i.a)(c.a.layoutBody, d, r),
					header: e.header,
					headerClassName: Object(i.a)(c.a.layoutHeader, d)
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = () => s.a.createElement(o.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => s.a.createElement(a.a, {
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
				className: Object(i.a)(l.a.desc, l.a.one, p)
			}), s.a.createElement("div", {
				className: Object(i.a)(l.a.desc, l.a.two, p)
			}), s.a.createElement("div", {
				className: Object(i.a)(l.a.icon, p)
			}), s.a.createElement("div", {
				className: Object(i.a)(l.a.name, p)
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
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = n("./src/reddit/helpers/adCount/index.ts"),
				h = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				v = n.n(_),
				x = n("./src/lib/lessComponent.tsx");
			const y = Object(r.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("reddit-components-SidebarNativeAd")]).then(n.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
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
				E = Object(d.c)({
					post: (e, t) => {
						const {
							placement: n,
							placementIndex: r
						} = t, s = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(f.a)(n, s, r)]
					}
				}),
				O = Object(c.b)(E),
				j = x.a.wrapped(b.a, "ThemedWidget", v.a),
				C = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(g.H)(e.media) && e.media.content)),
				I = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				S = Object(p.c)(class extends a.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: n
						} = this.props;
						return t !== e.className || n !== e.redditStyle
					}
					trackViewability(e, t, n) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(h.b)(e, t, n))
					}
					render() {
						const e = i()(0, I.length - 1),
							{
								img: t,
								href: n
							} = I[e],
							{
								className: r,
								placement: s,
								redditStyle: o
							} = this.props;
						return a.a.createElement(j, {
							className: r,
							contentOnly: !0,
							redditStyle: o
						}, a.a.createElement(u.a, {
							img: t,
							href: n,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, s)
						}))
					}
				});

			function k(e) {
				let {
					className: t,
					post: n,
					placementIndex: r,
					refreshKey: s,
					listingName: i,
					placement: o,
					redditStyle: c,
					awaitingBrandSafetyCheck: d,
					forceHouseAd: l,
					removeSidebarSpacer: u
				} = e;
				const p = u ? a.a.Fragment : m.a;
				if (!d && C(n)) {
					let e = null;
					return l ? e = a.a.createElement(S, {
						className: t,
						redditStyle: c,
						placement: o
					}) : n && (e = a.a.createElement(y, {
						post: n,
						postId: n.id,
						refreshKey: s,
						listingName: i,
						placement: o,
						placementIndex: r
					})), a.a.createElement(p, null, e)
				}
				return null
			}
			t.a = O(k)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/selectors/brandSafety.ts"),
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
			const m = Object(o.v)();
			t.a = m(Object(i.b)((e, t) => {
				let {
					listingName: n,
					pageLayer: r
				} = t;
				const s = Object(a.b)(e, {
						listingName: n,
						pageLayer: r
					}),
					i = Object(d.G)(e) || Object(c.a)(e),
					o = Object(a.e)(e);
				return {
					canShowAd: s && !i,
					awaitingBrandSafetyCheck: !Object(a.c)(e),
					isAdsDisabled: i,
					viewIsUnsafe: o
				}
			})(e => {
				let {
					canShowAd: t,
					isAdsDisabled: n,
					viewIsUnsafe: r,
					pageLayer: i,
					...o
				} = e;
				return !n && t && i ? s.a.createElement(l.a, u({
					forceHouseAd: r
				}, o)) : null
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
				i = n("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", s.a)
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
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				_ = n("./src/reddit/selectors/userPrefs.ts"),
				v = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				x = n.n(v);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = u.a.div("BladeContainer", x.a), O = u.a.wrapped(f.a, "CloseIcon", x.a), j = u.a.div("LoadingTitleContainer", x.a), C = u.a.div("LoadingNavContainer", x.a), I = u.a.div("ShortLoadingNav", x.a), S = u.a.wrapped(b.a, "ThemedChevron", x.a), k = e => {
				let {
					...t
				} = e;
				return o.a.createElement(E, null, o.a.createElement(O, null), o.a.createElement(p.k, null, o.a.createElement(p.p, null, y._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), o.a.createElement(p.o, null, o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingTitle, t.isLoading && x.a.loading)
				})), o.a.createElement(C, null, o.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
				}), o.a.createElement(S, null)), o.a.createElement(C, null, o.a.createElement(I, null), o.a.createElement(S, null)), o.a.createElement(C, null, o.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
				}), o.a.createElement(S, null)), o.a.createElement(C, null, o.a.createElement(I, null), o.a.createElement(S, null)), o.a.createElement(C, null, o.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
				}), o.a.createElement(S, null)))))
			}, N = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(k, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(k, {
					gradientType: "posts",
					isLoading: !0
				})
			}), w = Object(c.c)({
				isEditing: g.i,
				isSubscriptionsPinned: _.c,
				moderatorPermissions: h.n
			});
			t.a = Object(a.b)(w)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(x.a.Container, e.isSubscriptionsPinned && x.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(N, {
					subredditId: e.subredditId
				})) : o.a.createElement(i.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class o extends s.a.Component {
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
			var a = Object(i.a)(o);
			t.a = e => s.a.createElement(a, e)
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
				return o
			})), n.d(t, "p", (function() {
				return a
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
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "j", (function() {
				return y
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = n.n(s);
			const o = r.a.section("FormPage", i.a),
				a = r.a.h1("HomePageTitle", i.a),
				c = r.a.button("HomePageBreadcrumb", i.a),
				d = r.a.div("HomePageGroup", i.a),
				l = r.a.h1("FormPageTitle", i.a),
				u = r.a.div("FormPageSection", i.a),
				m = r.a.div("FormGroup", i.a),
				p = r.a.h2("FormGroupTitle", i.a),
				b = r.a.div("FormElement", i.a),
				f = r.a.div("FormGroupDescription", i.a),
				h = r.a.div("FormItem", i.a),
				g = r.a.h3("FormElementTitle", i.a),
				_ = r.a.div("FormElementDescription", i.a),
				v = r.a.div("FormElementError", i.a),
				x = r.a.div("FormElementSubGroup", i.a),
				y = r.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/models/ApiRequestState/index.ts"),
				g = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				_ = n("./src/reddit/components/SubredditIcon/index.m.less"),
				v = n.n(_);

			function x() {
				return (x = Object.assign || function(e) {
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
					} = e, o = [n, v.a.inTopBar, v.a.iconContainer];
					return r ? o.push(v.a.emptyEditableIconInTopBar) : o.push(v.a.editableIcon, v.a.emptyEditableIcon), i.a.createElement("span", x({}, s, {
						className: Object(c.a)(...o)
					}), r ? i.a.createElement(f.a, {
						name: "upload",
						className: v.a.emptyUploadButton
					}) : i.a.createElement(f.a, {
						name: "add",
						className: v.a.emptyPlusButton
					}), e.children)
				},
				E = e => {
					const {
						iconColor: t,
						className: n,
						alt: r,
						role: s,
						onClick: o,
						inTopBar: a,
						src: d
					} = e;
					return i.a.createElement("span", {
						className: v.a.iconContainer
					}, i.a.createElement("img", {
						alt: r,
						onClick: o,
						role: s,
						src: d,
						className: Object(c.a)(n, {
							[v.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				O = Object(a.c)({
					isLoading: g.b
				});
			class j extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(u.a, {
						className: v.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: e => {
							const t = Object(h.b)();
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
					return this.props.inTopBar ? i.a.createElement("span", {
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
					}), n = i.a.createElement(i.a.Fragment, null, i.a.createElement(E, x({
						alt: r.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, i.a.createElement(y, x({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(y, x({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [v.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(v.a.loadingIconInTopBar), t = 32), i.a.createElement(m.a, {
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
					return n ? i.a.createElement("div", {
						className: v.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(o.b)(O, (e, t) => ({
				onFileSelected: (n, r) => {
					e(Object(d.a)(t.subreddit.id, n, r))
				}
			}))(Object(l.c)(j))
		},
		"./src/reddit/components/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				Image: "_34CfAAowTqdbNDYXz5tBTW",
				image: "_34CfAAowTqdbNDYXz5tBTW",
				UserIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				userIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				blur: "_2P3jpibqK9Q2k2UJYzBNIy",
				PlanetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				planetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				BackupImage: "RK004G8fbNOkGdNLEzm67",
				backupImage: "RK004G8fbNOkGdNLEzm67",
				iconContainer: "_7nyhK_sDI_8i22XNdcMzb",
				editableIcon: "_1AxWRIyg1lV9-r_CmqYj0o",
				flexContainer: "-Mpi2pdgifDBOdpUYX2vh",
				clickableUploadText: "_3H6u2CWhsluIPVF14GpEaA",
				inTopBar: "_1UpdjN7u66BU606z97t4HS",
				emptyUploadButton: "ndkYE2hc8Y-V3NHpSYvxA",
				transition: "_1iA7YdCRjbU9Rd_2VNGvsw",
				emptyEditableIcon: "_1h9JeZaSDxkh67Ns3QVUP2",
				emptyPlusButton: "Dh1qxsy_tIctL9f4LEzv9",
				imageUploader: "JBITiVY1zX1mMDq-sHkru",
				loadingIcon: "_3Dk8QRKhQImYqds2lSF6G4",
				loadingIconInTopBar: "_1U3KLnHX2TdXL5lNrrv4EW",
				emptyEditableIconInTopBar: "_3-i_fdY8zqHIo3CjuVzTYE",
				defaultCommunityIcon: "_1xvdfUtOPDANqHjxzxKX5b",
				mNightmode: "_1TI6C7sqGL9TRdsq1jRks",
				iconLink: "_35ahToY-XcU6llULyYdy2A"
			}
		},
		"./src/reddit/components/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/UserIcon/index.tsx"),
				u = n("./src/reddit/constants/colors.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/Subreddit/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/SubredditIcon/index.m.less"),
				_ = n.n(g);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = d.a.wrapped(l.a, "UserIcon", _.a),
				y = d.a.img("Image", _.a),
				E = e => {
					let {
						iconColor: t,
						...n
					} = e;
					return o.a.createElement(y, v({
						style: {
							backgroundColor: t || ""
						}
					}, n))
				},
				O = d.a.div("BackupImage", _.a),
				j = Object(m.v)();
			t.b = j(e => {
				var t;
				const n = Object(a.e)(h.fb);
				let i, d, l;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: n
					} = Object(p.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(f.i)(e.subredditOrProfile) ? l = o.a.createElement(x, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (i = t, d = n)
				} else i = e.shouldHideNsfwIcon ? `${r.a.assetPath}/img/avatar_over18.png` : e.iconUrl, d = e.primaryColor || u.a.alienblue;
				return i ? l = o.a.createElement(E, {
					alt: s.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: Object(c.a)(e.className, {
						[_.a.blur]: e.shouldBlurSubredditIcon
					}),
					iconColor: d,
					role: "presentation",
					src: i
				}) : l || (l = o.a.createElement(b.a, {
					name: "community",
					isFilled: !n,
					className: Object(c.a)(_.a.defaultCommunityIcon, e.className, {
						[_.a.mNightmode]: n,
						[_.a.blur]: e.shouldBlurSubredditIcon
					}),
					style: n ? {
						backgroundColor: e.redditStyle ? u.a.alienblue : d
					} : {
						color: e.redditStyle ? u.a.alienblue : d
					}
				})), e.linkTo ? o.a.createElement("a", v({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					href: e.linkTo,
					className: _.a.iconLink
				}), l) : o.a.createElement(o.a.Fragment, null, l)
			})
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/featureFlags/component.tsx"),
				l = n("./src/reddit/selectors/widgets.ts"),
				u = n("./src/lib/linkMatchers/index.ts"),
				m = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				h = n("./src/telemetry/models/Outbound.ts"),
				g = n("./src/reddit/components/SubredditNav/index.m.less"),
				_ = n.n(g);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = (e, t, n) => Object(p.a)(e, {
					[_.a.mActive]: t
				}, {
					[_.a.topBannerVariant]: n
				}),
				y = e => {
					let {
						children: t,
						isActive: n,
						isTopBannerVariant: r,
						...i
					} = e;
					return s.a.createElement("div", v({
						className: x(_.a.subNavTitle, n, r)
					}, i), s.a.createElement("span", null, t), s.a.createElement(f.b, {
						className: _.a.navDropdownIcon
					}))
				},
				E = e => {
					let {
						className: t,
						href: n,
						isActive: r,
						to: i,
						isTopBannerVariant: o,
						...a
					} = e;
					const c = x(_.a.navLink, r, o);
					return i ? s.a.createElement(m.a, v({
						className: c,
						to: i
					}, a)) : n ? s.a.createElement(b.b, v({
						className: c,
						isSponsored: !1,
						sourceElement: h.SourceElement.NavigationMenu,
						href: n
					}, a)) : s.a.createElement("a", v({
						className: c
					}, a))
				},
				O = e => {
					let {
						className: t,
						isActive: n,
						...r
					} = e;
					return s.a.createElement(m.a, v({
						className: Object(p.a)(x(_.a.navLink, n), t)
					}, r))
				},
				j = e => {
					let {
						className: t,
						href: n,
						isActive: r,
						...i
					} = e;
					return n ? s.a.createElement(b.b, v({
						className: x(_.a.subNavLink, r),
						isSponsored: !1,
						sourceElement: h.SourceElement.NavigationMenu,
						href: n
					}, i)) : s.a.createElement("a", v({
						className: x(_.a.subNavLink, r)
					}, i))
				},
				C = e => {
					let {
						className: t,
						...n
					} = e;
					return s.a.createElement("div", v({
						className: Object(p.a)(_.a.subNavContainer, t)
					}, n))
				},
				I = e => {
					let {
						className: t,
						isOpen: n,
						...r
					} = e;
					return s.a.createElement("div", v({
						className: Object(p.a)(_.a.subNavList, t, {
							[_.a.mIsOpen]: n
						})
					}, r))
				};
			class S extends s.a.Component {
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
					}, e.label), s.a.createElement(I, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var k = S;
			const N = e => {
				const t = e.url && Object(u.h)(u.f, e.url);
				return t ? t.url : e.url
			};
			var w = e => e.menuItem.url ? s.a.createElement(E, {
					href: N(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : s.a.createElement(k, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => s.a.createElement(j, {
					key: `${e.text}-${N(e)}`,
					role: "listitem",
					href: N(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				T = n("./src/reddit/selectors/subreddit.ts"),
				P = n("./src/reddit/actions/subreddit.ts"),
				L = n("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: D
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = Object(o.c)({
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
					return Object(T.X)(e, {
						subredditId: n
					})
				}
			});
			var A = Object(i.b)(R, (e, t) => ({
					onActivate: () => e(Object(P.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))(e => {
					let {
						subreddit: t,
						isActive: n,
						onActivate: r
					} = e;
					const i = Object(L.a)();
					return t ? s.a.createElement(O, {
						className: _.a.metaNavLink,
						to: t.url,
						isActive: n,
						onClick: e => {
							Object(c.J)(i) && !Object(c.R)(i) && e.preventDefault(), r()
						}
					}, D._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				B = n("./src/reddit/actions/economics/predictions/index.ts"),
				M = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				U = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				F = n("./src/reddit/helpers/trackers/predictions.ts"),
				W = n("./src/reddit/hooks/useTracking.ts"),
				H = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(i.d)(),
					o = Object(L.a)(),
					a = Object(W.a)(),
					c = Object(U.S)(o),
					[d, l] = Object(r.useState)(!1),
					u = Object(i.e)(e => Object(T.X)(e, {
						subredditId: t
					})),
					m = Object(i.e)(e => Object(T.S)(e, {
						subredditId: t
					})),
					p = Object(i.e)(e => Object(H.d)(e, {
						subredditId: t
					})),
					b = Object(i.e)(e => Object(H.e)(e, {
						subredditId: t
					}));
				Object(M.a)(t);
				return Object(r.useEffect)(() => {
					!m || d || p || c || (n(Object(B.m)(u.name)), l(!0))
				}, [m, d, p, c, n, u.name]), m && p ? s.a.createElement(O, {
					className: _.a.predictionsFilter,
					isActive: c,
					onClick: () => {
						n(Object(P.p)({
							subredditId: t,
							forceState: !1
						})), a(Object(F.h)())
					},
					to: `${u.url}predictions/`
				}, V._("Predictions", null, {
					hk: "Cv5GC"
				}), b && s.a.createElement("span", {
					className: _.a.liveIcon
				}, V._("Live", null, {
					hk: "1o89m4"
				}))) : null
			};
			var q = n("./src/lib/constants/index.ts");
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const z = Object(c.v)(),
				Y = [q.Tb.SUBREDDIT, q.Tb.COMMENTS, q.Tb.COLLECTION_COMMENTS],
				Q = Object(o.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && Y.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(c.R)(t.pageLayer)
				});
			var J = z(Object(i.b)(Q, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(P.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: n,
						isPostsRoute: r,
						isPredictionsPage: i,
						isTopBannerVariant: o,
						onTurnOffMetaFilter: a
					} = e, c = r && !n && !i;
					return s.a.createElement(E, {
						to: t,
						isActive: c,
						isTopBannerVariant: o,
						onClick: e => {
							n && (e.preventDefault(), a())
						}
					}, K._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				Z = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
			const se = Object(Z.a)(e => {
				let {
					className: t,
					children: n,
					isTopBannerVariant: r,
					...i
				} = e;
				const o = Object(re.a)(i);
				return s.a.createElement("div", {
					className: Object(p.a)(_.a.outerContainer, t),
					style: {
						position: o.navBar.useOverlay && !r ? "relative" : "static",
						...o.navBar.useOverlay && !r ? {
							marginTop: -26
						} : {},
						background: r ? "inherit" : Object(ne.g)(o.navBar.backgroundColor, o.navBar.backgroundImage, "tiled")
					}
				}, n)
			});
			var ie = e => s.a.createElement(se, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, s.a.createElement("div", {
					className: _.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === ee.g.Large ? `${e.maxWidth||te.a}px` : "100%"
					}
				}, s.a.createElement("div", null, e.children), s.a.createElement($, null))),
				oe = n("./src/reddit/constants/wiki.ts"),
				ae = n("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: ce
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var de = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: n,
					pageLayer: r
				} = e, i = !!r && !!r.meta && r.meta.name === q.Tb.SUBREDDIT_WIKI, o = `wiki/${oe.i}`, a = t.endsWith("/") ? t + o : `${t}/${o}`;
				return s.a.createElement(E, {
					isActive: i,
					isTopBannerVariant: n,
					to: a,
					onClick: () => e.sendEvent(Object(ae.g)())
				}, ce._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const le = Object(d.a)("spPolls", A),
				ue = Object(c.v)(),
				me = Object(o.c)({
					layout: c.U,
					widget: l.f
				}),
				pe = Object(i.b)(me);
			t.a = ue(pe(Object(a.c)(e => s.a.createElement(ie, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && s.a.createElement(s.a.Fragment, null, s.a.createElement(J, {
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
			}), !!e.widget.data.length && e.widget.data.map((t, n) => s.a.createElement(w, {
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
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
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
					const t = Object(o.e)(a.e),
						n = Object(o.e)(a.a);
					return t || n ? i.a.createElement(c, e) : null
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
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/IdCard/DescriptionBlock/index.tsx"),
				b = n("./src/reddit/components/IdCard/DescriptionBlock/EditableDescriptionBlock.tsx"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/selectors/widgets.ts"),
				v = n("./src/reddit/components/CommunityChat/Sidebar/About/index.m.less"),
				x = n.n(v);
			var y = e => {
					let {
						subredditId: t
					} = e;
					const [n, s] = Object(o.useState)(!0), i = Object(c.e)(e => Object(g.X)(e, {
						subredditId: t
					})), d = Object(c.e)(e => Object(h.a)(e, {
						subredditId: t
					})), l = Object(c.e)(e => Object(_.d)(e, {
						subredditId: t
					})), u = Object(o.useMemo)(() => {
						var e;
						return null !== (e = null == l ? void 0 : l.description) && void 0 !== e ? e : ""
					}, [l]);
					return a.a.createElement("div", {
						className: x.a.container
					}, a.a.createElement("div", {
						className: x.a.aboutHeader
					}, a.a.createElement(f.a, {
						className: x.a.infoIcon,
						name: "info"
					}), a.a.createElement("span", {
						className: x.a.headerText
					}, r.fbt._("About", null, {
						hk: "3DwgcI"
					})), a.a.createElement("button", {
						className: x.a.expandButton,
						"aria-expanded": n,
						"aria-controls": "subreddit-about-content",
						"aria-label": r.fbt._("Expand or collapse subreddit description", null, {
							hk: "undzC"
						}),
						onClick: () => {
							s(!n)
						}
					}, a.a.createElement(f.a, {
						name: n ? "caret_up" : "caret_down"
					}))), a.a.createElement("div", {
						id: "subreddit-about-content",
						className: Object(m.a)(x.a.content, {
							[x.a.collapsed]: !n
						})
					}, l && (d ? a.a.createElement(b.a, {
						description: u,
						shouldTruncateDescription: !1,
						isCommentsPage: !1,
						subreddit: i
					}) : a.a.createElement(p.a, {
						description: u,
						shouldTruncateDescription: !1,
						subreddit: i
					}))))
				},
				E = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				O = n("./src/reddit/actions/communityChat/index.ts"),
				j = n("./src/reddit/components/CommunityChat/constants.ts"),
				C = n("./node_modules/lodash/throttle.js"),
				I = n.n(C),
				S = n("./node_modules/matrix-js-sdk/lib/browser-index.js"),
				k = n("./src/reddit/components/CommunityChat/contexts/MatrixClientContext.tsx"),
				N = n("./src/reddit/selectors/features/communityChat/index.ts");
			const w = j.a.VISITED__NO_NEW_ACTIVITY;
			var T = e => {
					const t = Object(k.b)(),
						[n, r] = Object(o.useState)(null),
						[s, i] = Object(o.useState)(!1),
						a = Object(c.e)(N.d) === e.id,
						d = Object(o.useMemo)(() => {
							var t;
							return decodeURIComponent(null !== (t = e.roomId) && void 0 !== t ? t : "")
						}, [e]),
						l = Object(o.useMemo)(() => !n, [n]);
					return Object(o.useEffect)(() => {
						if (!t) return;
						const e = () => {
							const e = t.getRoom(d);
							"join" === (null == e ? void 0 : e.getMyMembership()) && r(e)
						};
						return e(), t.on(S.ClientEvent.Sync, e), () => {
							t.off(S.ClientEvent.Sync, e)
						}
					}, [t, d]), Object(o.useEffect)(() => {
						if (!n) return;
						if (a) return i(!1);
						let e = !0;
						const t = I()(() => e && i(n.getUnreadNotificationCount() > 0), 2e3);
						return t(), n.on(S.RoomEvent.Timeline, t), n.on(S.RoomEvent.AccountData, t), () => {
							e = !1, n.off(S.RoomEvent.Timeline, t), n.off(S.RoomEvent.AccountData, t)
						}
					}, [n, a]), t ? l ? j.a.NEVER_VISITED : s ? j.a.VISITED__HAS_NEW_ACTIVITY : j.a.VISITED__NO_NEW_ACTIVITY : w
				},
				P = n("./src/reddit/icons/svgs/ChatBubbles/index.tsx");
			var L = e => e.isFilled ? a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M1.625 14.375V15C1.19419 14.9995 0.781168 14.8281 0.476536 14.5235C0.171904 14.2188 0.000529257 13.8058 0 13.375V1.624C0.000793729 1.19336 0.172285 0.780598 0.476889 0.476182C0.781492 0.171766 1.19436 0.000528638 1.625 0H13.375C13.8056 0.000528638 14.2185 0.171766 14.5231 0.476182C14.8277 0.780598 14.9992 1.19336 15 1.624H4.629C3.834 1.62611 3.07216 1.94286 2.51001 2.50501C1.94786 3.06716 1.63111 3.829 1.629 4.624L1.625 14.375ZM18 4.625V16.375C17.9995 16.8058 17.8281 17.2188 17.5235 17.5235C17.2188 17.8281 16.8058 17.9995 16.375 18H4.625C4.19419 17.9995 3.78117 17.8281 3.47654 17.5235C3.1719 17.2188 3.00053 16.8058 3 16.375V4.625C3.00053 4.19419 3.1719 3.78117 3.47654 3.47654C3.78117 3.1719 4.19419 3.00053 4.625 3H16.375C16.8058 3.00053 17.2188 3.1719 17.5235 3.47654C17.8281 3.78117 17.9995 4.19419 18 4.625ZM14 13H7V14.5H14V13ZM14 10H7V11.5H14V10ZM14 7H7V8.5H14V7Z"
				})) : a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M14 8.25H7V7H14V8.25ZM14 10H7V11.25H14V10ZM14 13H7V14.25H14V13ZM18 16.375V4.625C17.9995 4.19419 17.8281 3.78117 17.5235 3.47654C17.2188 3.1719 16.8058 3.00053 16.375 3H4.625C4.19419 3.00053 3.78117 3.1719 3.47654 3.47654C3.1719 3.78117 3.00053 4.19419 3 4.625V16.375C3.00053 16.8058 3.1719 17.2188 3.47654 17.5235C3.78117 17.8281 4.19419 17.9995 4.625 18H16.375C16.8058 17.9995 17.2188 17.8281 17.5235 17.5235C17.8281 17.2188 17.9995 16.8058 18 16.375ZM16.375 4.25C16.4745 4.25 16.5698 4.28951 16.6402 4.35984C16.7105 4.43016 16.75 4.52554 16.75 4.625V16.375C16.75 16.4745 16.7105 16.5698 16.6402 16.6402C16.5698 16.7105 16.4745 16.75 16.375 16.75H4.625C4.52554 16.75 4.43016 16.7105 4.35984 16.6402C4.28951 16.5698 4.25 16.4745 4.25 16.375V4.625C4.25 4.52554 4.28951 4.43016 4.35984 4.35984C4.43016 4.28951 4.52554 4.25 4.625 4.25H16.375ZM1.625 13.75C1.52554 13.75 1.43016 13.7105 1.35983 13.6402C1.28951 13.5698 1.25 13.4745 1.25 13.375V1.624C1.25026 1.52472 1.28989 1.42959 1.36019 1.35948C1.43049 1.28937 1.52572 1.25 1.625 1.25H13.375C13.4743 1.25 13.5695 1.28937 13.6398 1.35948C13.7101 1.42959 13.7497 1.52472 13.75 1.624H15C14.9992 1.19336 14.8277 0.780598 14.5231 0.476182C14.2185 0.171766 13.8056 0.000528638 13.375 0H1.625C1.19436 0.000528638 0.781492 0.171766 0.476889 0.476182C0.172285 0.780598 0.000793729 1.19336 0 1.624V13.375C0.000529257 13.8058 0.171904 14.2188 0.476536 14.5235C0.781168 14.8281 1.19419 14.9995 1.625 15V13.75Z"
				})),
				D = n("./src/reddit/components/CommunityChat/Sidebar/ListItem/index.m.less"),
				R = n.n(D),
				A = n("./src/reddit/components/CommunityChat/utils.ts");
			const B = e => {
					let {
						model: t,
						channelUiState: n,
						renderIcon: r
					} = e;
					const s = Object(c.d)(),
						i = Object(c.e)(N.d) === t.id,
						d = Object(o.useMemo)(() => Object(A.a)(t.id, t.name), [t]);
					return a.a.createElement(E.a, {
						className: Object(m.a)(R.a.listItem, {
							[R.a.greyBackground]: i
						}),
						to: d,
						onClick: () => {
							s(Object(O.f)(t.id))
						}
					}, a.a.createElement("div", {
						className: R.a.iconContainer
					}, r(i)), a.a.createElement("span", {
						className: Object(m.a)(R.a.name, {
							[R.a.light]: n === j.a.NEVER_VISITED,
							[R.a.bold]: n === j.a.VISITED__HAS_NEW_ACTIVITY
						})
					}, t.name))
				},
				M = e => {
					let {
						model: t
					} = e;
					const n = Object(o.useCallback)(e => a.a.createElement(L, {
						isFilled: e,
						className: R.a.postsIcon
					}), []);
					return a.a.createElement(B, {
						model: t,
						channelUiState: j.a.VISITED__NO_NEW_ACTIVITY,
						renderIcon: n
					})
				},
				U = e => {
					let {
						model: t
					} = e;
					const n = T(t),
						r = Object(o.useCallback)(e => a.a.createElement(P.a, {
							isFilled: e,
							className: Object(m.a)(R.a.chatBubblesIcon, {
								[R.a.light]: n === j.a.NEVER_VISITED
							})
						}), [n]);
					return a.a.createElement(B, {
						model: t,
						channelUiState: n,
						renderIcon: r
					})
				};
			var F = n("./src/reddit/components/CommunityChat/Sidebar/ListItem/placeholder.m.less"),
				W = n.n(F);
			var H = () => a.a.createElement("div", {
					className: W.a.container
				}, a.a.createElement("div", {
					className: Object(m.a)(W.a.icon, W.a.shimmer)
				}), a.a.createElement("div", {
					className: Object(m.a)(W.a.content, W.a.shimmer)
				})),
				V = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				G = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				q = n("./src/reddit/models/CommunityChat/index.ts"),
				K = n("./src/reddit/components/CommunityChat/Sidebar/ChannelsList/index.m.less"),
				z = n.n(K);
			const Y = () => a.a.createElement(a.a.Fragment, null, a.a.createElement(H, null), a.a.createElement(H, null), a.a.createElement(H, null)),
				Q = e => {
					switch (e.__typename) {
						case q.a.SubredditPostChannel:
							return a.a.createElement(M, {
								key: e.id,
								model: e
							});
						case q.a.SubredditChatChannel:
							return a.a.createElement(U, {
								key: e.id,
								model: e
							});
						default:
							return null
					}
				};
			var J = e => {
					let {
						subredditId: t
					} = e;
					const [n, s] = Object(o.useState)(!1), i = Object(c.e)(e => Object(N.e)(e, t)), d = Object(o.useMemo)(() => i.length - 5, [i]), l = Object(o.useMemo)(() => {
						const e = r.fbt._("{number of hidden channels in community chat sidebar} more", [r.fbt._param("number of hidden channels in community chat sidebar", d.toString())], {
								hk: "4cTN8u"
							}),
							t = r.fbt._("See Less", null, {
								hk: "24SRwO"
							});
						return n ? t : e
					}, [n, d]), u = Object(o.useMemo)(() => {
						const e = i.slice(0, 5);
						return n ? i : e
					}, [n, i]);
					return u.length ? a.a.createElement(a.a.Fragment, null, u.map(Q), d > 0 && a.a.createElement("div", {
						className: z.a.more,
						onClick: () => {
							s(!n)
						}
					}, a.a.createElement("span", {
						className: z.a.moreText
					}, l), n ? a.a.createElement(G.a, {
						className: z.a.chevronIcon
					}) : a.a.createElement(V.a, {
						className: z.a.chevronIcon
					}))) : a.a.createElement(Y, null)
				},
				Z = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				X = n("./src/reddit/components/CommunityChat/Sidebar/index.m.less"),
				$ = n.n(X);
			var ee = e => {
					let {
						subredditId: t
					} = e;
					return a.a.createElement(Z.a, {
						className: $.a.sidebar,
						contentOnly: !0,
						redditStyle: !0
					}, a.a.createElement(y, {
						subredditId: t
					}), a.a.createElement(J, {
						subredditId: t
					}))
				},
				te = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				ne = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				re = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				se = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				ie = n("./src/reddit/components/IdCard/async.tsx"),
				oe = n("./src/lib/isFakeSubreddit/index.ts"),
				ae = n("./src/reddit/components/IdCard/helpers.ts"),
				ce = e => !Object(oe.a)(e) || Object(ae.e)(e) || Object(ae.f)(e) || Object(ae.g)(e),
				de = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				le = n("./src/reddit/components/ModProgressModule/async.tsx"),
				ue = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				me = n("./src/reddit/components/SidebarContainer/index.tsx"),
				pe = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				be = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				fe = n("./src/lib/makeListingKey/index.ts"),
				he = n("./src/reddit/actions/subreddit.ts"),
				ge = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				_e = n("./src/reddit/controls/Button/index.tsx"),
				ve = n("./src/reddit/helpers/name/index.ts"),
				xe = n("./src/reddit/helpers/overlay/index.ts"),
				ye = n("./src/reddit/selectors/experiments/topPosts.ts"),
				Ee = n("./src/reddit/selectors/posts.ts"),
				Oe = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const je = .99;
			class Ce extends a.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= je && t(n)
					}
				}
				render() {
					return a.a.createElement(Oe.a, {
						threshold: je,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var Ie = Ce,
				Se = n("./src/lib/isUrl/index.ts"),
				ke = n("./src/lib/prettyPrintNumber/index.ts"),
				Ne = n("./src/reddit/components/FlairWrapper/index.tsx"),
				we = n("./src/reddit/components/Thumbnail/index.tsx"),
				Te = n("./src/reddit/models/Flair/index.ts"),
				Pe = n("./src/reddit/models/Subreddit/index.ts"),
				Le = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				De = n.n(Le);
			const {
				fbt: Re
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ae = e => e.type === Te.f.Nsfw || e.type === Te.f.Spoiler, Be = Object(d.c)({
				post: Ee.F,
				subredditOrProfile: Ee.U
			});
			class Me extends a.a.PureComponent {
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
					} = this.props, i = {
						post: t
					}, o = Object(Se.a)(Object(we.c)(i)), c = t.flair.filter(Ae);
					return a.a.createElement("div", {
						className: Object(m.a)(De.a.container, e, {
							[De.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: De.a.mainLine
					}, o && a.a.createElement("div", {
						className: De.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(we.b, i)), a.a.createElement("div", {
						className: Object(m.a)(De.a.title, !o && De.a.titleSingle),
						title: t.title
					}, c.length > 0 && a.a.createElement(Ne.a, {
						className: De.a.flair,
						titleFlair: c,
						nowrap: !0,
						post: t
					}), t.title)), a.a.createElement("div", {
						className: De.a.metaLine
					}, r && !!s && a.a.createElement("span", {
						className: De.a.meta
					}, Object(Pe.i)(s) ? Object(ve.e)(s.displayText || s.name) : Object(ve.d)(s.displayText || s.name)), a.a.createElement("span", {
						className: De.a.meta
					}, Re._({
						"*": "{score} points",
						_1: "1 point"
					}, [Re._plural(t.score, "score", Object(ke.b)(t.score))], {
						hk: "1JZ0qm"
					})), a.a.createElement("span", {
						className: De.a.meta
					}, Re._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [Re._plural(t.numComments, "numComments", Object(ke.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Ue = Object(c.b)(Be, e => ({
					openLightbox: t => e(Object(xe.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Me),
				Fe = n("./src/reddit/components/SidebarPostList/index.m.less"),
				We = n.n(Fe);
			const {
				fbt: He
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ve = 10, Ge = 2, qe = Object(d.a)(Ee.M, e => e.filter(e => !e.isSponsored)), Ke = Object(d.c)({
				posts: (e, t) => qe(e, {
					...t
				})
			});
			class ze extends a.a.Component {
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
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || Ve, this.showMorePosts = () => {
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
							smallPostClassName: i
						} = this.props;
						return a.a.createElement(Ie, {
							key: e.id,
							onPostVisible: r,
							postId: e.id
						}, a.a.createElement(Ue, {
							className: Object(m.a)(We.a.smallPost, i),
							containerOnClick: n,
							postId: e.id,
							redditStyle: s,
							showSubredditName: Object(oe.a)(Object(ve.i)(t)),
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
						posts: i,
						redditStyle: o,
						showMoreButton: c,
						topPostsVariant: d
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === i.length) return null;
					const u = this.getVisiblePostsCounts(),
						p = Object(ye.a)(d),
						b = Object(ye.b)(d),
						f = p || b,
						h = i.slice(l * u, (l + 1) * u),
						[g, ..._] = h,
						v = f ? h.slice(0, Ge) : _.slice(0, Ge),
						x = f ? h.slice(Ge) : _.slice(Ge);
					return a.a.createElement("div", {
						className: Object(m.a)(We.a.container, t, {
							[We.a.redditStyle]: o
						})
					}, !f && a.a.createElement(Ie, {
						onPostVisible: s,
						postId: g.id
					}, a.a.createElement(ge.a, {
						postId: g.id,
						backgroundWrapperClassName: We.a.largePostBackgroundWrapper,
						descriptionClassName: We.a.largePostDescription,
						innerContainerClassName: We.a.largePostInnerContainer,
						"data-redditstyle": o,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(oe.a)(Object(ve.i)(n)),
						trendingPost: g
					})), v.map(this.renderSmallPost), e, x.map(this.renderSmallPost), c && a.a.createElement(_e.r, {
						className: We.a.SeeMore,
						onClick: this.showMorePosts
					}, r || He._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var Ye = Object(c.b)(Ke, e => ({
					openPost: t => e(Object(xe.a)(t.permalink))
				}))(ze),
				Qe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Je = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Ze = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				Xe = n("./src/reddit/selectors/discoveryUnit.ts"),
				$e = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				et = n.n($e);
			const tt = 10,
				nt = Object(d.a)((e, t) => t.subredditName, e => Object(fe.a)(e, l.bb.TOP, {
					t: l.oc.WEEK
				})),
				rt = Object(d.c)({
					discoveryUnit: e => Object(Xe.b)(e, {
						unitName: Ze.i
					}),
					listingKey: nt,
					posts: (e, t) => {
						const n = nt(e, t);
						return Object(Ee.M)(e, {
							listingKey: n
						})
					},
					subreddit: g.C
				});
			class st extends a.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(Je.b)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(Je.k)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(Je.n)(t, e, void 0, n))
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
						posts: i,
						subredditName: o,
						topPostsVariant: c
					} = this.props;
					if (0 === i.length) return null;
					const d = o,
						l = i.length > tt;
					return a.a.createElement(Z.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: r.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, a.a.createElement(Ye, {
						listingKey: n,
						listingName: d,
						onShowMoreClick: s,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: et.a.smallPost,
						showMoreButton: l,
						topPostsVariant: c
					}, a.a.createElement("div", null, e)))
				}
			}
			var it = Object(c.b)(rt, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						loadMorePosts: () => e(Object(he.r)({
							sort: l.bb.TOP,
							subredditName: n,
							t: l.oc.WEEK
						}))
					}
				})(Object(Qe.c)(st)),
				ot = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				at = n("./src/reddit/constants/tracking.ts"),
				ct = n("./src/reddit/selectors/seo/linksModule.ts"),
				dt = n("./src/reddit/selectors/telemetry.ts"),
				lt = n("./src/telemetry/models/Subreddit.ts");
			const ut = e => t => ({
					...dt.p(t),
					action: at.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				mt = e => t => n => ({
					...dt.p(n),
					action: at.c.CLICK,
					noun: Object(lt.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				pt = Object(d.c)({
					communities: ct.c
				});
			var bt = Object(c.b)(pt)(e => {
					const t = Object(Qe.b)();
					return e.communities && e.communities.length ? a.a.createElement(pe.a, null, a.a.createElement(ot.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: ut,
						getSubscribeEventFactoryHandler: mt,
						sendEvent: t,
						title: r.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				ft = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				ht = n("./src/reddit/constants/experiments.ts"),
				gt = n("./src/reddit/featureFlags/index.ts"),
				_t = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				vt = n("./src/reddit/models/Widgets/index.ts"),
				xt = n("./src/reddit/selectors/communityFlairs.ts"),
				yt = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Et = n("./src/reddit/selectors/listings.ts"),
				Ot = n("./src/reddit/selectors/experiments/communityChat.ts"),
				jt = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				Ct = n.n(jt);
			const It = 250,
				St = 270,
				kt = u.a.wrapped(me.a, "SidebarContainer", Ct.a),
				Nt = Object(d.c)({
					apiError: Et.c,
					apiPending: Et.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(xt.b)(e, n)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(xt.c)(e, n)
					},
					isInNewModuleNCPV3Experiment: e => Object(yt.a)(e) === ht.ef.NewModule,
					showCommunityChat: Ot.d,
					showGovernance: gt.d.spPoints,
					showLeaderboard: gt.d.spLeaderboard,
					showPredictionsLeaderboard: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(g.R)(e, {
							subredditId: n
						}) && !Object(g.S)(e, {
							subredditId: n
						})
					},
					widgets: g.x
				}),
				wt = Object(c.b)(Nt);
			class Tt extends o.Component {
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
							kind: vt.i.CommunityList,
							shortName: r.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: vt.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: vt.g.Cloud,
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
					return this.props.subredditName !== e.subredditName || !i()(this.props.widgets, e.widgets) || n
				}
				render() {
					const {
						className: e,
						listingName: t,
						isInNewModuleNCPV3Experiment: n,
						showCommunityChat: r,
						showGovernance: s,
						showLeaderboard: i,
						showPredictionsLeaderboard: o,
						subredditId: c,
						subredditName: d,
						topPostsVariant: u
					} = this.props;
					let m = 0;
					const p = Object(ye.a)(u),
						b = Object(ye.b)(u),
						f = Object(ye.c)(u),
						h = p || b;
					let g, _;
					!!this.getPostFlairWidget() ? g = this.props.widgets : (g = this.getCommunityWidgets(), _ = this.makeFlairFilterWidget());
					const v = this.makeRelatedCommunitiesWidget(p, b),
						x = !p,
						y = b,
						E = a.a.createElement(ue.a, {
							placement: l.e.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: m++,
							position: _t.a.FIRST,
							sizes: l.j
						});
					return a.a.createElement(kt, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, n && a.a.createElement(le.a, {
						subredditId: c,
						subredditName: d
					}), ce(t) && !r && a.a.createElement(ie.a, {
						listingName: t
					}), r && a.a.createElement(ee, {
						subredditId: c
					}), a.a.createElement(ne.a, {
						cardClassName: Ct.a.card,
						subredditId: c
					}), o && a.a.createElement(te.a, {
						subredditId: c
					}), h && a.a.createElement(pe.a, null, a.a.createElement(it, {
						subredditName: d,
						topPostsVariant: u
					}, a.a.createElement("div", {
						className: Ct.a.inFeedAd
					}, E))), h && v && a.a.createElement(pe.a, null, a.a.createElement(ft.a, {
						subredditName: d,
						truncateThreshold: St,
						widget: v
					})), y && g.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return a.a.createElement(pe.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(ft.a, {
							subredditName: d,
							truncateThreshold: It,
							widget: e
						}))
					}), s && a.a.createElement(re.a, {
						className: Ct.a.card,
						subredditId: c
					}), _ && a.a.createElement(pe.a, null, a.a.createElement(ft.a, {
						subredditName: d,
						widget: _
					})), i && a.a.createElement(se.a, {
						className: Ct.a.card,
						subredditId: c,
						uniqueId: c
					}), a.a.createElement(de.g, {
						subredditId: c
					}), !h && E, a.a.createElement(bt, {
						subredditId: c
					}), x && !y && g.map((e, t) => {
						const n = "community-list" === e.kind;
						return a.a.createElement(pe.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(ft.a, {
							subredditName: d,
							truncateThreshold: f && n ? St : f ? It : void 0,
							widget: e
						}))
					}), a.a.createElement(be.a, {
						adComponent: a.a.createElement(ue.a, {
							placement: l.e.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: m++,
							position: _t.a.BOTTOM,
							sizes: l.p
						})
					}))
				}
			}
			t.a = wt(Tt)
		},
		"./src/reddit/components/SubredditUnsavedChangesModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const m = "subreddit-unsaved-changes-modal",
				p = Object(o.b)(null, (e, t) => ({
					closeModal: () => e(Object(c.g)(t.modalId || m))
				}));
			class b extends i.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.onDiscard(), this.props.closeModal()
					}, this.onCancelClick = () => {
						this.props.onCancel(), this.props.closeModal()
					}, this.onSaveClick = () => {
						this.props.onSave(), this.props.closeModal()
					}
				}
				render() {
					return i.a.createElement(d.e, null, i.a.createElement(d.i, null, i.a.createElement(u.a, null, i.a.createElement(d.q, null, r.fbt._("Save changes before leaving?", null, {
						hk: "34wJXL"
					})), i.a.createElement(l.a, {
						onClick: this.onCancelClick
					}, i.a.createElement(d.b, null)))), i.a.createElement(d.l, null, i.a.createElement(d.p, null, r.fbt._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "2SOiAP"
					}))), i.a.createElement(d.g, null, i.a.createElement(d.a, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, r.fbt._("Discard", null, {
						hk: "ViASy"
					})), i.a.createElement(d.r, {
						onClick: this.onSaveClick,
						"data-redditstyle": !0
					}, r.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			t.b = Object(a.a)(p(b))
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
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
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
			const m = (e, t, n) => null != n ? n : t ? e : o.c.Plain,
				p = e => {
					let {
						border: t,
						priority: n,
						small: r,
						...s
					} = e;
					return i.a.createElement(o.t, u({}, s, {
						priority: m(o.c.Primary, t, n),
						className: Object(l.a)(s.className, d.a.BaseButton),
						size: r ? o.d.S : o.d.M
					}))
				},
				b = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), i.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = e => {
					let {
						buttonType: t,
						border: n,
						priority: r,
						small: s,
						...a
					} = e;
					return i.a.createElement(o.t, u({}, a, {
						priority: m(o.c.Secondary, n, r),
						className: Object(l.a)(a.className, d.a.BaseButton),
						size: s ? o.d.S : o.d.M,
						text: b(t)
					}))
				};
			class h extends i.a.Component {
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
						isFullWidth: o = !1,
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: s,
						isFullWidth: o,
						style: c
					};
					return this.props.userIsSubscriber ? i.a.createElement(f, u({}, d, {
						buttonType: this.props.identifier.type
					})) : i.a.createElement(p, u({}, d, {
						id: n
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
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
			const m = n("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class p extends s.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: i,
							sendEvent: o,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							priority: f,
							isShredditParityEnabled: h,
							...g
						} = this.props, _ = this.state.isHovered, v = Object(c.a)({
							type: t.type,
							key: _ ? "unsubscribe" : "subscribed"
						}), x = g.shouldReverseColor ? a.c.Secondary : a.c.Primary;
						return s.a.createElement(a.t, u({
							className: e,
							priority: f || x,
							rplStyle: h,
							text: v,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: a.d.XSP
						}, g))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: i,
							sendEvent: o,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							priority: f,
							isShredditParityEnabled: h,
							...g
						} = this.props, _ = Object(c.a)({
							type: t.type,
							key: "subscribe"
						}), v = g.shouldReverseColor ? a.c.Secondary : a.c.Primary;
						return s.a.createElement(a.t, u({
							className: e,
							priority: f || v,
							size: a.d.XSP,
							rplStyle: h,
							text: _,
							onClick: this.onClick
						}, g, {
							id: `subscribe-button-${i}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: n
					} = this.props;
					return t ? this.state.hasJustSubscribed || n ? this.renderUnsubscribeButton() : e ? null : s.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(o.a)(Object(i.c)(p))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				i = {
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
				o = e => {
					let {
						type: t,
						key: n
					} = e;
					return i[s({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(r.c)(i.a))
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TabBadger/Loader.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const u = Object(o.c)({
					postCount: l.L,
					previousPageIsOverlay: d.p,
					tabBadged: e => e.tabBadged
				}),
				m = Object(i.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : s.a.createElement(a.a, {
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
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const d = s.a.createContext(() => {});

			function l(e) {
				let {
					children: t
				} = e;
				const n = Object(i.f)(),
					c = Object(r.useCallback)(e => {
						{
							const t = n.getState(),
								r = e(t);
							Object(a.a)({
								...o.p(t),
								...r
							})
						}
					}, [n]);
				return s.a.createElement(d.Provider, {
					value: c
				}, t ? s.a.Children.only(t) : null)
			}

			function u() {
				return Object(r.useContext)(d)
			}

			function m(e) {
				function t(t) {
					const n = u();
					return s.a.createElement(e, c({}, t, {
						sendEvent: n
					}))
				}
				const n = e.name || e.displayName;
				return t.displayName = `Tracked(${n})`, t.WrappedComponent = e, t
			}
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/components/AdViewability/index.tsx"),
				o = n("./src/reddit/components/BlankPost/index.tsx"),
				a = n("./src/reddit/connectors/PostViewable/index.ts");
			const c = Object(a.a)(null);
			class d extends s.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? s.a.createElement(o.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: n
					}) : s.a.createElement(i.a, {
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
				continue: "_2iLUa1DN5bY9-oFqq3UDXm",
				dismiss: "jUfd4Daob69A2WDKby-IL",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk",
				skippable_buttons: "_1MAcix3j31wLzUvbdrW7Qn",
				skippableButtons: "_1MAcix3j31wLzUvbdrW7Qn",
				skippable_text: "_34buUN_wpZWBk7ZZDKk22N",
				skippableText: "_34buUN_wpZWBk7ZZDKk22N",
				divider: "_1JdIhyGz5k8UXyob0yI3eQ",
				dividerLine: "_2EgPyPNCnTr8g29n_87SnQ",
				dividerText: "_2XFvLCiMiPd0uBLWJYtxVx",
				no_border: "_2Mu2w6atAZCJ-gttdRheE",
				noBorder: "_2Mu2w6atAZCJ-gttdRheE",
				contentDescription: "_2jlY07_8wxFjuu6Ecrk9zV",
				warning__bypassable: "_38T2FKI5k99IDlivrOi6kk",
				warningBypassable: "_38T2FKI5k99IDlivrOi6kk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return L
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/helpers.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/login.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/components/Footer/index.tsx"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				v = n("./src/reddit/helpers/counters/nsfwBypassableBlocking.ts"),
				x = n("./src/reddit/helpers/trackers/nsfwSignupBypassableUpsell.ts"),
				y = n("./src/reddit/helpers/trackers/nsfwSignupUpsell.ts"),
				E = n("./src/reddit/icons/svgs/NSFWWarningIcon/index.tsx"),
				O = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				j = n("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				C = n("./src/reddit/actions/contentGate.ts"),
				I = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				S = n.n(I);
			const k = {
					d2x_nsfw_signup_blocking_de_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				N = () => s.fbt._("Log In", null, {
					hk: "4BITk"
				}),
				w = () => s.fbt._("I'm not over 18", null, {
					hk: "11UX9Q"
				}),
				T = e => {
					const t = Object(a.d)(),
						n = Object(f.b)(),
						r = Object(a.e)(O.g),
						l = Object(i.useCallback)(() => {
							r === O.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, r]),
						u = (e => e ? o.a.createElement("div", {
							className: S.a.cta
						}, s.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), o.a.createElement("br", null), s.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : o.a.createElement("div", {
							className: S.a.cta
						}, s.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(r === O.a.Blurred);
					return Object(i.useEffect)(() => {
						Object(_.d)(r)
					}, [r]), o.a.createElement("div", {
						className: S.a.mainCta
					}, o.a.createElement(E.b, null), u, o.a.createElement("div", {
						className: S.a.contentTitle
					}, e.contentTitle), o.a.createElement("div", {
						className: S.a.warning
					}, (() => s.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), o.a.createElement("div", {
						className: S.a.buttonContainer
					}, o.a.createElement(g.j, {
						className: S.a.logIn,
						onClick: () => {
							n(Object(y.a)()), l(), Object(_.c)(_.a.Login), t(Object(m.openLoginModal)())
						}
					}, N()), o.a.createElement(g.j, {
						className: S.a.cancel,
						onClick: () => {
							Object(d.b)(), n(Object(y.b)()), Object(_.c)(_.a.Dismiss), t(Object(c.b)("/"))
						}
					}, w())))
				},
				P = Object(u.a)(e => {
					const t = `${r.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return o.a.createElement("div", {
						className: S.a.qrCodeOuter
					}, o.a.createElement("div", {
						className: S.a.qrCodeInner
					}, o.a.createElement("img", {
						className: S.a.qrCode,
						alt: s.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), o.a.createElement("div", {
						className: S.a.copyLine1
					}, (() => s.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), o.a.createElement("div", {
						className: S.a.copyLine2
					}, (() => s.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), o.a.createElement("img", {
						className: S.a.sneakySnoo,
						src: t
					})))
				}),
				L = e => {
					const t = Object(f.b)(),
						{
							contentTitle: n
						} = e,
						r = Object(a.e)(O.i),
						s = Object(a.e)(O.j),
						i = Object(a.e)(O.g),
						c = Object(a.e)(j.c);
					o.a.useEffect(() => {
						c.isNewDesignVariant ? t(Object(x.d)()) : t(Object(y.c)())
					}, [c, t]);
					const d = i === O.a.Blurred ? b.a.White : i === O.a.NoPreview ? b.a.Grey : void 0;
					return o.a.createElement("div", {
						className: S.a.container
					}, c.isNewDesignVariant ? o.a.createElement(D, {
						contentTitle: n
					}) : o.a.createElement(T, {
						contentTitle: n
					}), o.a.createElement("div", {
						className: Object(l.a)(S.a.footerWrapper, {
							[S.a.mIsModal]: i === O.a.Blurred
						})
					}, o.a.createElement(b.b, {
						textColor: d
					})), o.a.createElement(P, {
						qrCodeAsset: (() => r === h.od.Enabled || s === h.lb.BlurredPreview || s === h.lb.NoPreview ? k.d2x_nsfw_signup_blocking_de_v1 : k.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				},
				D = e => {
					const t = Object(a.d)(),
						n = Object(f.b)(),
						r = Object(a.e)(O.h);
					return Object(i.useEffect)(() => {
						Object(v.c)(r)
					}, [r]), o.a.createElement("div", {
						className: Object(l.a)(S.a.mainCta, {
							[S.a.skippable_buttons]: r === h.mb.SkippableButtons,
							[S.a.skippable_text]: r === h.mb.SkippableText
						})
					}, o.a.createElement("div", {
						className: S.a.contentDescription
					}, o.a.createElement(E.b, {
						fill: E.a.BLACK
					}), o.a.createElement("span", {
						className: S.a.cta
					}, e.contentTitle), o.a.createElement("span", {
						className: Object(l.a)(S.a.warning, S.a.warning__bypassable)
					}, (() => s.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "2Wp5X6"
					}))())), o.a.createElement("div", {
						className: S.a.cta
					}, (() => s.fbt._("To continue, log in or confirm your age.", null, {
						hk: "4sHPuz"
					}))()), o.a.createElement("div", {
						className: S.a.buttonContainer
					}, o.a.createElement(g.j, {
						className: S.a.logIn,
						onClick: () => {
							n(Object(x.a)()), Object(v.b)(v.a.Login), t(Object(m.openLoginModal)())
						}
					}, N()), r === h.mb.SkippableButtons && o.a.createElement("div", {
						className: S.a.divider
					}, o.a.createElement("div", {
						className: S.a.dividerLine
					}), o.a.createElement("div", {
						className: S.a.dividerText
					}, (() => s.fbt._("OR", null, {
						hk: "2sn64l"
					}))()), o.a.createElement("div", {
						className: S.a.dividerLine
					})), o.a.createElement(g.j, {
						className: S.a.continue,
						onClick: async () => {
							n(Object(x.b)()), Object(v.b)(v.a.Continue), Object(C.q)(), Object(j.d)(), window.location.reload()
						}
					}, (() => s.fbt._("I'm over 18", null, {
						hk: "4nUG6S"
					}))()), o.a.createElement(g.j, {
						className: Object(l.a)(S.a.continue, S.a.dismiss, {
							[S.a.no_border]: r === h.mb.SkippableText
						}),
						onClick: () => {
							n(Object(x.c)()), Object(v.b)(v.a.Dismiss), t(Object(c.b)("/"))
						}
					}, r === h.mb.SkippableText ? (() => s.fbt._("Go back to home", null, {
						hk: "4yEgxF"
					}))() : w())))
				}
		},
		"./src/reddit/components/UserIcon/PresenceDot.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				a = n("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				c = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				d = n.n(c);
			t.default = e => {
				const {
					showPresence: t,
					onceInViewport: n
				} = e, c = Object(r.useRef)(null), l = Object(r.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && n && n()
					})
				}, [n]);
				return Object(o.a)(c, l), s.a.createElement(a.a, {
					ref: c,
					className: Object(i.a)(d.a.presenceDot, {
						[d.a.isLit]: t
					}),
					isHighlighted: e.isHighlighted,
					outlineClassName: e.outlineClassName
				})
			}
		},
		"./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				c = n.n(a);
			t.a = function(e) {
				let {
					backgroundClassName: t,
					className: n,
					headshot: s,
					hasNftBorder: a,
					style: d
				} = e;
				return i.a.createElement("div", {
					className: Object(o.a)(c.a.snoovatarWrapper, n, {
						[c.a.hasNftBorder]: Boolean(a)
					}),
					style: d
				}, i.a.createElement("div", {
					className: Object(o.a)(c.a.snoovatarBackground, t)
				}), i.a.createElement("div", {
					className: c.a.snoovatarHeadshotContainer
				}, i.a.createElement("img", {
					alt: r.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: c.a.snoovatarHeadshot,
					src: s
				})))
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.m.less": function(e, t, n) {
			e.exports = {
				currentUserIconWrapper: "efdkOLo3oigH_95whTYCp",
				userIconWrapper: "_2p14AQvJBvTrEEa4csiW9v",
				isProfileIcon: "_1lxVpLf3223Gve3gRhbG-R",
				DefaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				defaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				UserIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				userIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				mNightmode: "_2aVSEFJsIE0M-4uRE-U24H",
				nftAnimation: "_3fhlcUDP9SJN47QMfuzW_j",
				nftBackground: "_3ppYbU2ZS369JSNSb8585I",
				nftBorder: "_1AX7t-EP7R4ZoVC41DG-Jx",
				snoovatarWrapper: "_1cyAeeYDGrx7MPL_jRwKZ",
				snoovatarBackground: "_2_QqG5dG916znjlVV8ZCbw",
				hasNftBorder: "_3Bn5QwbgKslkdt4UwkP9r9",
				snoovatarHeadshotContainer: "_1XJXnCAngvZLEeLpB3oa4L",
				snoovatarHeadshot: "ScrrUjzznpAqm92uwgnvO",
				presenceDot: "_2dn5Ncenn0BSD4tCSmxQhA",
				isLit: "GpWjjkZl5_kV4yZYWBaT2",
				hasHeadShotWrapper: "_1TENjLYSaj4L4uJMZa3DRe"
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				d = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				l = n.n(d);
			const u = `${r.a.assetPath}/img/avatar_over18_square.png`,
				m = e => !e || e.includes("avatar_default_");
			t.b = e => {
				const {
					className: t,
					iconUrl: n,
					isCurrentUser: r,
					isNightMode: i,
					isNSFW: d,
					nsfwIconUrl: p,
					shouldHideNSFW: b,
					style: f
				} = e;
				if (r && m(n) || !r && !n) return o.a.createElement(c.a, {
					className: Object(a.a)(l.a.DefaultUserIcon, t, {
						[l.a.mNightmode]: i
					}),
					style: f
				});
				const h = !r && d && b ? p || u : n;
				return o.a.createElement("img", {
					alt: s.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(a.a)(l.a.UserIcon, t),
					src: h,
					style: f
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/realtime/GQLSubscription/async.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				u = n("./src/reddit/models/User/index.ts"),
				m = n("./src/config.ts"),
				p = n("./src/reddit/components/LottieAnimation/index.tsx");
			var b = e => {
					let {
						className: t
					} = e;
					return i.a.createElement("svg", {
						className: t,
						fill: "none",
						viewBox: "0 0 32 32",
						xmlns: "http://www.w3.org/2000/svg"
					}, i.a.createElement("radialGradient", {
						id: "a",
						cx: "0",
						cy: "0",
						gradientTransform: "matrix(20.06268 6.0999 -3097.55815 10187.91225 -3.1 11.6)",
						gradientUnits: "userSpaceOnUse",
						r: "1"
					}, i.a.createElement("stop", {
						offset: "0",
						stopColor: "#1185b5"
					}), i.a.createElement("stop", {
						offset: ".29",
						stopColor: "#d7f7ff"
					}), i.a.createElement("stop", {
						offset: ".53",
						stopColor: "#5ef6d8"
					}), i.a.createElement("stop", {
						offset: ".84",
						stopColor: "#5ef6d8"
					}), i.a.createElement("stop", {
						offset: ".87",
						stopColor: "#1990b9"
					}), i.a.createElement("stop", {
						offset: "1",
						stopColor: "#3f9fc6"
					})), i.a.createElement("path", {
						d: "M13.77 1.1c.76-.41 1.7-.41 2.46 0L28 7.58c.75.42 1.2 1.17 1.2 1.96v12.94c0 .79-.45 1.54-1.2 1.95L16.23 30.9c-.76.42-1.7.42-2.46 0L2 24.42a2.25 2.25 0 0 1-1.2-1.95V9.53C.8 8.74 1.24 8 2 7.57z",
						stroke: "url(#a)",
						strokeLinejoin: "round",
						strokeWidth: "1.59"
					}))
				},
				f = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				h = n.n(f);
			var g = e => {
					let {
						iconUrl: t
					} = e;
					return Object(d.c)(t) ? i.a.createElement(p.a, {
						className: h.a.nftAnimation,
						assetUrl: `${m.a.assetPath}/img/snoovatars/comment-animations/nft_comment_animation.json`,
						loop: !0
					}) : i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: h.a.nftBackground
					}), i.a.createElement(b, {
						className: h.a.nftBorder
					}))
				},
				_ = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				v = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				x = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				y = n("./src/reddit/selectors/user.ts");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = () => {},
				j = Object(a.c)({
					currentUser: y.m,
					isNightMode: y.fb,
					shouldHideNSFW: y.H,
					user: y.Db
				}),
				C = Object(o.b)(j);
			t.a = C(e => {
				const {
					authorId: t,
					collapsed: n,
					currentUser: o,
					iconUrl: a,
					isCommentAuthorBlocked: m,
					isHighlighted: p,
					isNft: b,
					isNSFW: f,
					shouldUseOnlineOverride: y,
					isOnlineOverrideValue: j,
					isOnlineStatusLoadTest: C,
					isProfileIcon: I,
					omitResponsivePresenceWrapper: S,
					onPresenceIndicatorInViewport: k,
					shouldShowPresenceIndicator: N,
					user: w,
					userName: T,
					wrapperClassName: P,
					style: L,
					...D
				} = e, R = !!o && Object(u.e)(o) === T, A = R ? o : w, B = A && A.accountIcon || a, M = w ? w.isNSFW : f, U = Object(d.a)(B) && !m, F = U ? i.a.createElement(v.a, {
					headshot: B,
					className: e.className,
					hasNftBorder: b && Object(d.d)(a),
					style: L
				}) : i.a.createElement(x.b, E({}, D, {
					iconUrl: m && n ? "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png" : B,
					isCurrentUser: R,
					isNSFW: M,
					style: L
				})), [W, H] = Object(s.useState)(!1), V = Object(s.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "ONLINE_STATUS_INDICATOR",
							userID: t
						}
					}
				}), [t]), G = Object(s.useCallback)(e => {
					const {
						isOnline: t
					} = e.subscribe.data;
					H(t)
				}, []), q = Object(s.useRef)(null), [K, z] = Object(s.useState)(!1), Y = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, r = 1 !== n;
						t ? z(!0) : r && z(!1)
					})
				}, []), Q = Object(s.useRef)({
					rootMargin: "750px 0px 1000px 0px"
				});
				return Object(l.a)(q, Y, Q.current), S ? F : i.a.createElement("div", {
					className: Object(r.a)(h.a.userIconWrapper, {
						[h.a.hasHeadShotWrapper]: U,
						[h.a.isProfileIcon]: I
					}, P),
					ref: q
				}, b && i.a.createElement(g, {
					iconUrl: a
				}), F, N && (W || y && j) && i.a.createElement(_.default, {
					showPresence: !0,
					isHighlighted: p,
					onceInViewport: k
				}), (N || C) && !y && K && i.a.createElement(c.a, {
					variables: V,
					onData: N ? G : O,
					queryKey: "isUserOnline"
				}))
			})
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
				return w
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "d", (function() {
				return L
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, n) => r => {
				const s = e(r),
					o = t(r),
					a = !s && o;
				return Object(i.a)(n.baseClassName, r.className, {
					[n.mIsInteractive]: o,
					[n.mIsActive]: s,
					[n.mIsVoteable]: a
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
				b = a(p, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, m);
			var f = e => s.a.createElement(c.a, {
					className: b(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				h = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = n("./src/reddit/controls/Upvote/index.m.less"),
				_ = n.n(g);
			const v = {
					..._.a,
					baseClassName: _.a.Upvote
				},
				x = e => {
					let {
						voteState: t
					} = e;
					return t === d.a.upvoted
				},
				y = a(x, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, v);
			var E = e => s.a.createElement(h.b, {
					className: y(e),
					compact: e.compact,
					isFilled: x(e)
				}),
				O = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				j = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				S = n.n(I);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => Object(i.a)({
					[S.a.compact]: e.compact,
					[S.a.dark]: Object(j.b)(Object(O.a)(e)),
					[S.a.nightmode]: e.isNightMode
				}),
				w = Object(o.a)(e => {
					const {
						voteIcons: t
					} = Object(C.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: r,
						isNightMode: o,
						voteState: a,
						compact: c,
						...l
					} = e;
					return s.a.createElement("button", k({}, l, {
						className: Object(i.a)(S.a.customDownvote, N(e), {
							[S.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				T = Object(o.a)(e => {
					const {
						voteIcons: t
					} = Object(C.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: r,
						isNightMode: o,
						voteState: a,
						compact: c,
						...l
					} = e;
					return s.a.createElement("button", k({}, l, {
						className: Object(i.a)(S.a.customUpvote, N(e), {
							[S.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				P = f,
				L = E
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
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(a);
			const d = i.a.div("WidgetBackground", c.a),
				l = i.a.wrapped(e => {
					let {
						children: t,
						...n
					} = e;
					return s.a.createElement("div", n, s.a.createElement(o.b, {
						type: o.a.Widget
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
				return I
			})), n.d(t, "a", (function() {
				return k
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = n("./src/reddit/constants/componentSizes.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				x = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
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
			const I = e => i.a.createElement(b.a, {
					className: Object(d.a)(j.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: j.a.container
				}, e.isLoading ? i.a.createElement(g.a, {
					className: j.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: j.a.errorMsg
				}, e.errorMsg || r.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(k, C({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(h.t, {
					className: j.a.bottomButton,
					kind: h.b.Button,
					priority: h.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				S = Object(c.c)({
					hideNSFWPref: y.H,
					nightmode: y.fb
				}),
				k = Object(o.b)(S)(e => i.a.createElement("div", {
					className: Object(d.a)(j.a.communityItemContainer, {
						[j.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(v.a, {
					className: j.a.communityItemExpandCenter,
					widthRight: f.s
				}, i.a.createElement("div", {
					className: j.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: j.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(_.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(j.a.defaultCommunityIcon, {
						[j.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: j.a.communityDescriptionContainer
				}, i.a.createElement(a.a, {
					className: j.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(E.b)(e.name, e.type),
					to: Object(E.a)(e.name, e.type)
				}, Object(E.b)(e.name, e.type)), i.a.createElement("div", {
					className: j.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: j.a.subscriberCount
				}, r.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [r.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(l.c, {
					className: j.a.nsfwFlair,
					flair: {
						type: x.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(g.a, {
					className: Object(d.a)(j.a.communityCta, j.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(h.t, {
					className: j.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? i.a.createElement(p, {
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
				}) : i.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && i.a.createElement("p", {
					title: e.description,
					className: j.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
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
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/fastdom/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/parameters.ts"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = n("./src/reddit/helpers/flair.ts"),
				v = n("./src/reddit/helpers/trackers/postFlair.ts"),
				x = n("./src/reddit/models/Widgets/index.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				O = n.n(E);

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
				I = Object(f.v)({
					filterName: e => Object(f.Z)(e)[b.j],
					url: e => Object(f.hb)(e)
				}),
				S = Object(a.c)({
					subredditId: (e, t) => Object(y.I)(e, t.subredditName)
				}),
				k = Object(o.b)(S),
				N = l.a.div("WidgetContent", O.a),
				w = e => {
					let {
						display: t,
						isFlairFilter: n,
						onMouseDown: r,
						onClick: s,
						...o
					} = e;
					return i.a.createElement("li", {
						className: Object(c.a)(O.a.StyledFlair, t === x.g.Cloud && O.a.cloudDisplay, {
							[O.a.flairFilter]: n,
							[O.a["m-selected"]]: o.isSelected
						}),
						onClick: () => null == s ? void 0 : s(Object(_.g)(o.flair)),
						onMouseDown: r
					}, i.a.createElement(u.c, j({}, o, {
						className: O.a.Flair,
						isFlairFilter: n,
						forceSmallEmojis: !0
					})))
				};
			class T extends i.a.Component {
				constructor(e) {
					super(e), this.flairListRef = i.a.createRef(), this.trackFlairWidgetClick = e => {
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
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(_.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(_.c)(this.props.widget.templates[e])), this.state = {
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
					return i.a.createElement(h.r, {
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
					return i.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => i.a.createElement(w, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onClick: this.onClickFlair,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(_.e)(this.props.url, Object(_.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, n = t ? C : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return i.a.createElement("div", {
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
					return i.a.createElement("ul", null, i.a.createElement(w, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(_.e)(this.props.url, Object(_.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: n
					} = this.state, r = t.order, s = this.getFlairsFromIds(r), o = e && this.getSelectedFlair(s) || void 0, a = t.order.length > r.length || n && !o;
					return i.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(N, null, o && this.renderSelectedFlairFilter(o), !o && this.renderFlairFilters(s), a && this.renderButton()))
				}
			}
			t.a = I(k(Object(m.c)(T)))
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
				i = n.n(s),
				o = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/helpers/dom/index.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = n("./src/reddit/models/Widgets/index.ts"),
				f = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				h = n.n(f);
			const g = c.a.div("RuleShortName", h.a),
				_ = c.a.div("RuleIndex", h.a),
				v = c.a.div("RuleTitle", h.a),
				x = c.a.div("RuleDescription", h.a),
				y = c.a.wrapped(d.a, "RawHTMLDisplay", h.a),
				E = {};
			class O extends i.a.Component {
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
					} = this, s = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), o = !r(e) && !!s;
					return i.a.createElement(g, {
						className: Object(a.a)({
							[h.a.pointerCursor]: o,
							[h.a.cleanStyle]: e.cleanStyle
						}),
						onClick: r(e) || !s ? void 0 : n
					}, i.a.createElement(p.a, null, i.a.createElement(_, {
						className: Object(a.a)({
							[h.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), i.a.createElement(v, null, `${e.rule.shortName}`), i.a.createElement("div", null, !r(e) && s && i.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && i.a.createElement(x, {
						className: Object(a.a)({
							[h.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? i.a.createElement(l.b, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: E
					}) : e.rule.descriptionHtml ? i.a.createElement(y, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const j = e => e.rules.length > 0 ? i.a.createElement(o.a, {
				className: e.className,
				styles: e.styles,
				title: r.fbt._("{subredditName} Rules", [r.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return i.a.createElement(O, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => i.a.createElement(j, {
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
				return Be
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/linkMatchers/index.ts"),
				b = n("./src/reddit/helpers/widgets/index.tsx"),
				f = n("./src/reddit/models/Image/index.tsx"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				_ = n("./src/reddit/selectors/structuredStyles.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				x = n("./src/telemetry/models/Outbound.ts"),
				y = n("./src/reddit/components/Widgets/Button/index.m.less"),
				E = n.n(y);
			const O = (e, t, n) => {
					let r = {},
						s = {};
					r = e.kind === g.k.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, n) => {
						let {
							color: r,
							fillColor: s,
							textColor: i
						} = e;
						return t && (r = i = n, s = "transparent"), {
							"--widget-button-background-color": `${s||"transparent"}`,
							"--widget-button-border": `1px solid ${r}`,
							"--widget-button-color": `${i||r}`
						}
					})(e, t, n);
					const i = e.hoverState || e;
					if (i.kind === g.k.Image) s = {
						"--widget-button-hover-background-image": `url('${i.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: r,
							textColor: o
						} = i;
						t && (e = o = n, r = "transparent"), s = {
							"--widget-button-hover-background-color": `${r||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${o||e}`
						}
					}
					return {
						...r,
						...s
					}
				},
				j = e => e.kind === g.k.Image ? E.a.imageButton : E.a.textButton,
				C = e => {
					const t = Object(b.h)(e),
						n = Object(p.h)(p.f, t);
					return n ? n.url : e.url
				},
				I = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: n
					} = e, r = Object(h.a)(e).button;
					return s.a.createElement(d.t, {
						className: j(t),
						style: O(t, n, r),
						isFullWidth: !0,
						size: d.d.S,
						priority: d.c.Secondary
					}, t.kind === g.k.Text && s.a.createElement("span", {
						className: t.hoverState ? E.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.k.Text && s.a.createElement("span", {
						className: E.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				S = e => s.a.createElement(l.b, {
					href: C(e.button),
					sourceElement: x.SourceElement.SidebarWidget
				}, s.a.createElement(I, e)),
				k = m.a.wrapped(a.a, "RawHTMLDisplay", E.a);
			var N = Object(i.b)(() => Object(o.c)({
					forceRedditStyle: _.l,
					isNightmodeOn: v.fb
				}))(e => s.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && s.a.createElement(k, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.k.Image || e.url !== f.c) && (!e.hoverState || e.hoverState.kind !== g.k.Image || e.hoverState.url !== f.c)).map(t => s.a.createElement(S, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				T = n("./src/reddit/components/HumanDate/index.tsx"),
				P = n("./src/reddit/controls/TextButton/index.tsx"),
				L = n("./src/reddit/components/Widgets/Calendar/index.m.less"),
				D = n.n(L);
			const R = 100,
				A = {
					isExpanded: !1
				},
				B = m.a.wrapped(a.a, "RawHTMLDisplay", D.a),
				M = m.a.div("EventContainer", D.a),
				U = m.a.div("EventTitle", D.a),
				F = m.a.div("EventDate", D.a),
				W = m.a.div("EventLocation", D.a),
				H = m.a.div("EventDescription", D.a),
				V = m.a.wrapped(P.a, "ToggleDescription", D.a);
			class G extends s.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = A
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > R ? s.a.createElement(H, null, t.isExpanded ? e.text : e.text.slice(0, R), s.a.createElement(V, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? w.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : w.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : s.a.createElement(H, null, e.text)
				}
			}
			var q = e => s.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, n) => s.a.createElement(M, {
					key: `${n}-${t.title}`
				}, s.a.createElement(U, null, t.titleHtml ? s.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && s.a.createElement(F, null, s.a.createElement(T.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && s.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						n = t.getHours(),
						r = t.getMinutes();
					return r < 10 ? `${n}:0${r}` : `${n}:${r}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && s.a.createElement(W, null, t.locationHtml ? s.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && s.a.createElement(G, {
					text: t.description
				})))),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				z = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var Y = Object(K.c)(e => s.a.createElement(z.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Q = Object(o.c)({
					stylesheet: e => e.stylesheets
				}),
				J = Object(i.b)(Q),
				Z = (e, t, n) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${n}</body>`;
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
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Z(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
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
			var $ = J(X),
				ee = n("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				te = n.n(ee);
			var ne = m.a.div("ImageFrame", te.a),
				re = n("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				se = n.n(re);
			var ie = m.a.img("StyledImage", se.a);
			class oe extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === f.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== f.c) return t
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
						r = s.a.createElement(ne, null, s.a.createElement(ie, {
							alt: w.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: n.url
						}));
					return n.linkUrl ? s.a.createElement(l.b, {
						href: n.linkUrl
					}, r) : r
				}
			}
			var ae = oe,
				ce = n("./src/config.ts"),
				de = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				le = n("./src/lib/opener/index.ts"),
				ue = n("./src/reddit/components/Flair/index.tsx"),
				me = n("./src/reddit/controls/InternalLink/index.tsx"),
				pe = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				be = n("./src/reddit/models/Flair/index.ts"),
				fe = n("./src/reddit/selectors/subreddit.ts"),
				he = n("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ge = n.n(he);
			const _e = m.a.a("ExternalLink", ge.a),
				ve = m.a.div("ModeratorListItem", ge.a),
				xe = m.a.div("Username", ge.a),
				ye = m.a.wrapped(ue.c, "FlairComponent", ge.a),
				Ee = e => e.authorFlairType === be.f.Richtext ? {
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
				Oe = e => s.a.createElement(xe, null, `u/${e}`),
				je = m.a.wrapped(me.default, "InternalLink", ge.a),
				Ce = m.a.div("LinkContainer", ge.a),
				Ie = Object(o.c)({
					userIsBanned: fe.hb,
					userIsLoggedIn: v.S
				});
			var Se = Object(i.b)(Ie)(e => {
					const {
						subredditName: t,
						widget: n,
						userIsBanned: r,
						userIsLoggedIn: i
					} = e;
					return s.a.createElement(c.a, {
						styles: n.styles,
						title: w.fbt._("Moderators", null, {
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
					}), w.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), n.mods && n.mods.length && !r ? s.a.createElement(s.a.Fragment, null, n.mods.map(e => s.a.createElement(ve, {
						key: e.name
					}, (e => s.a.createElement(de.a, {
						to: `/user/${e.name}/`
					}, Oe(e.name)))(e), s.a.createElement(ye, {
						flair: Ee(e),
						forceSmallEmojis: !0
					}))), s.a.createElement(Ce, null, s.a.createElement(je, {
						to: `/r/${t}/about/moderators/`
					}, w.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : r || !i ? s.a.createElement("div", {
						className: ge.a.HelpCenterMessage
					}, w.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", s.a.createElement(_e, {
						href: `${ce.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: le.c,
						target: le.d.BLANK
					}, w.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : s.a.createElement("div", {
						className: ge.a.UnModeratedSubreddit
					}, w.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", s.a.createElement(_e, {
						href: `${ce.a.redditUrl}/r/redditrequest`,
						rel: le.c,
						target: le.d.BLANK
					}, w.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", w.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				ke = n("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ne = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				we = n("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Te = n.n(we);
			const Pe = m.a.div("WidgetContent", Te.a),
				Le = m.a.wrapped(a.a, "RawHTMLDisplay", Te.a);
			var De = e => s.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, s.a.createElement(Pe, null, s.a.createElement(Le, {
					html: e.widget.textHtml || ""
				}))),
				Re = n("./src/reddit/components/Widgets/Base/index.tsx");
			var Ae = e => s.a.createElement(Re.b, null, "This widget hasn't been implemented yet!");

			function Be(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Se;
						case "textarea":
							return De;
						case "button":
							return N;
						case "subreddit-rules":
							return Ne.b;
						case "community-list":
							return Y;
						case "calendar":
							return q;
						case "image":
							return ae;
						case "custom":
							return $;
						case "post-flair":
							return ke.a;
						default:
							return Ae
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
				return C
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "b", (function() {
				return N
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/actions/ads/index.ts"),
				a = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/reddit/actions/gold/tooltips.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				f = n("./src/reddit/helpers/trackers/post.ts"),
				h = n("./src/reddit/components/PostList/Placeholder.tsx"),
				g = n("./src/reddit/featureFlags/index.ts"),
				_ = n("./src/reddit/selectors/experiments/hidePostMitigation.ts"),
				v = n("./src/reddit/selectors/experiments/survey.ts"),
				x = n("./src/reddit/selectors/listings.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/tracking.ts"),
				j = n("./src/reddit/selectors/user.ts");

			function C() {
				return Object(p.v)({
					currentProfileName: p.j,
					isCommentPermalink: p.x,
					isCommentsPage: p.y,
					isFrontpage: p.B,
					isProfilePostListing: p.N,
					isTopicPage: p.T,
					pageLayer: e => e
				})
			}
			const I = C(),
				S = {
					apiError: x.c,
					apiPending: x.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: x.g,
					postsById: (e, t) => {
						let {
							listingKey: n
						} = t;
						return Object(y.S)(e, {
							listingKey: n,
							keepHiddenPosts: Object(_.a)(e)
						})
					},
					postIds: Object(i.a)((e, t) => {
						let {
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: s
						} = t;
						return Object(y.C)(e, n, r, s, Object(_.a)(e))
					}),
					subredditsById: E.eb,
					viewportDataLoaded: O.b,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: v.e,
					isLoggedIn: j.S
				},
				k = Object(s.c)(S),
				N = e => ({
					onBottomViewed: (t, n) => e(l.c(t, n)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.K(t))
					},
					fireAdPixelsOfType: (t, n) => {
						e(d.y(t, n))
					},
					trackOnPostEnteredViewport: (t, n, r, s) => {
						e(d.M(t, r, s))
					},
					trackOnPostExitedViewport: (t, n, r, s) => {
						e(d.N(t, r, s))
					},
					showModalOnScroll: () => e(d.ab()),
					surveyTriggerScrollCounted: () => e(Object(u.m)())
				}),
				w = e => Object(b.b)({
					...e
				}),
				T = (e, t, n, r) => {
					const {
						listingKey: s,
						hostPostData: i,
						listingBelowVariant: o
					} = r;
					return Object(f.n)(e, t, "post", s, i, o, void 0)
				},
				P = Object(r.b)(k, N, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: w,
					postClickEventFactory: T
				}));
			t.a = e => Object(m.c)(I(P(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: o.jb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(i.d([n], !0)),
					onSubscriptionsRequested: () => e(i.e()),
					onUnsubscribe: () => e(i.d([n], !1))
				}
			})
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/selectors/activeModalId.ts"),
				a = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(s.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.i,
				isBladeEditorDirty: a.h,
				isModalOpen: Object(o.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(r.b)(d, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					requestCloseBlade: () => n && e(Object(i.h)(n))
				}
			})
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/post.ts"),
				o = n("./src/reddit/actions/postFlair.ts"),
				a = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/models/Vote/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const f = Object(r.b)(() => Object(s.c)({
				activeModalId: l.a,
				autoplayPref: b.d,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: d.Y,
				hideNSFWPref: b.H,
				isActive: p.j,
				moderatorPermissions: u.m,
				modModeEnabled: d.W,
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
						return e(Object(o.h)({
							post: n,
							previewFlair: r,
							selectedTemplateId: s
						}))
					},
					handleVote: t => {
						const r = t === c.a.upvoted ? Object(i.ib)(n) : Object(i.v)(n);
						e(r)
					},
					onIgnoreReports: () => e(Object(i.eb)(n)),
					onOpenReportsDropdown: t => e(Object(a.h)({
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
			t.a = f
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
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
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
				return f
			})), n.d(t, "t", (function() {
				return h
			})), n.d(t, "s", (function() {
				return g
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "v", (function() {
				return v
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "o", (function() {
				return j
			}));
			const r = 284,
				s = 450,
				i = 800,
				o = 284,
				a = 48,
				c = 640,
				d = 1600,
				l = 40,
				u = 48,
				m = 24,
				p = 24,
				b = 312,
				f = 40,
				h = 270,
				g = 106,
				_ = 5,
				v = 16,
				x = 1250,
				y = 82,
				E = 48,
				O = 36,
				j = 40
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			}));
			const r = "comment",
				s = "comment-submission-form-markdown",
				i = "comment-submission-form-richtext",
				o = "comments-page-link-num-comments",
				a = "language-prompt-close",
				c = "post-content"
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "k", (function() {
				return a
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return h
			}));
			const r = "DraftEditor-contentwrapper",
				s = "public-DraftStyleDefault-block",
				i = "data-offset-key",
				o = "hovered",
				a = "scrollerItem",
				c = "threadline",
				d = "header-user-dropdown",
				l = "voteButton",
				u = "RichTextJSON-root",
				m = "ImageBox-image",
				p = "content-type-link",
				b = "styled-outbound-link",
				f = "ListingLayout-backgroundContainer",
				h = "ListingLayout-outerContainer"
		},
		"./src/reddit/constants/elementIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			}));
			const r = "AppRouter-main-content",
				s = "bladeContainer",
				i = "header",
				o = "overlayScrollContainer",
				a = "collectionPostListScrollContainer"
		},
		"./src/reddit/constants/imagePaths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/config.ts");
			const s = Array.from({
					length: 20
				}).map((e, t) => `${r.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				i = Array.from({
					length: 8
				}).map((e, t) => `${r.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`)
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			}));
			const r = "reddit",
				s = "reddit.ready",
				i = "reddit.urlChanged"
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
		"./src/reddit/constants/livebar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "live_bar_nav"
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
				return i
			}));
			const r = 480,
				s = 960,
				i = 1200
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, n) {
			"use strict";
			var r, s;
			n.d(t, "d", (function() {
					return r
				})), n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return i
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue", e.CommunityChat = "CommunityChat"
				}(r || (r = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(s || (s = {}));
			const i = "SHORTCUT_FOCUSABLE_DIV",
				o = [9, 13, 32]
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			const r = 4,
				s = 60,
				i = 70,
				o = 90,
				a = 99,
				c = 100,
				d = 100
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const o = s.a.createContext(!1);

			function a(e) {
				function t(t) {
					return s.a.createElement(o.Consumer, null, n => s.a.createElement(e, i({}, t, {
						isOverlay: n
					})))
				}
				return t.displayName = `WithOverlay(${e.displayName||e.name})`, t
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
				i = n("./node_modules/react/index.js");
			const o = i.createContext({
				showPromo: s.a,
				dismissPromo: s.a,
				completePromo: s.a,
				promos: new Map
			});
			t.a = o
		},
		"./src/reddit/controls/Button/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_2iuoyPiKHN3kfOoeIQalDT",
				button: "_2iuoyPiKHN3kfOoeIQalDT",
				isFullWidth: "_34mIRHpFtnJ0Sk97S2Z3D9",
				xxsmallButtonStyles: "_1h6qKGhVsgNfytYFlo8m3f",
				Icon: "_1mvTX6krm3Q2d1CSyUm28s",
				icon: "_1mvTX6krm3Q2d1CSyUm28s",
				isLeft: "_1HHR_ND8U6x6YrIqKFeXZy",
				isRight: "_3tKmDp5VAtgWvabEmFkJ7T",
				xsmallButtonStyles: "_3uJP0daPEH2plzVEYyTdaH",
				xsmallBigPaddingButtonStyles: "UEPNkU0rd1-nvbkOcBatc",
				smallButtonStyles: "HNozj_dKjQZ59ZsfEegz8",
				mediumButtonStyles: "_3ukcnQySDskQwK_wB2iXYl",
				largeButtonStyles: "_1J4mN6_wNfCtSyMDUNGQqN",
				xlargeButtonStyles: "XpD6n11mOiKNg8ZKtvgVR",
				primary: "_10BQ7pjWbeYP63SAPNS8Ts",
				active: "_39a0Mt5b1i2joAqIaEHOWJ",
				redditStyle: "_2nelDm85zKKmuD94NequP0",
				DangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				dangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				GoldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				goldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				PremiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				premiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				secondary: "_2tU8R9NTqhvBrhoNAXWWcP",
				rplStyle: "_2Z-LWN_PrkTncEM_mPuEW5",
				tertiary: "_4Glnzr5LA7bNBGMWGW4pU",
				plain: "_3zbhtNO0bdck0oYbYRhjMC",
				isIconOnly: "_1tPpYVD73ugqp4k-VMFRki",
				isSquare: "_3ojSE1JW7jxNzUzZK8kt7m",
				ExtraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				extraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				InlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				inlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				ChatButton: "_13twe55MPRo1LqypxB-LJx",
				chatButton: "_13twe55MPRo1LqypxB-LJx",
				PlainLinkButton: "_2UhHcZFBOYxMULbf2p-skl",
				plainLinkButton: "_2UhHcZFBOYxMULbf2p-skl"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return O
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "s", (function() {
				return C
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "k", (function() {
				return N
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "j", (function() {
				return P
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/controls/Button/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = {
				role: "button",
				tabIndex: 0
			};
			var u, m, p, b;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.XSP = "xsmallBigPaddingButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(u || (u = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain", e.PlainLink = "plainLink"
			}(m || (m = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(p || (p = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(b || (b = {}));
			const f = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconClassName: r,
						iconPosition: o = p.C,
						isFullWidth: a = !1,
						isSquare: f = !1,
						children: v,
						className: x,
						kind: y = b.Button,
						priority: E = m.Primary,
						redditStyle: O,
						rplStyle: j,
						size: C = u.S,
						text: I,
						textClassName: S,
						...k
					} = e, N = (e => {
						let {
							baseClassName: t,
							redditStyle: n,
							rplStyle: r,
							dataRedditStyle: s,
							Icon: o,
							isFullWidth: a,
							isSquare: d,
							priority: l,
							size: u,
							text: m
						} = e;
						return Object(i.a)(t, c.a.Button, l && c.a[l], u && c.a[u], {
							[c.a.isFullWidth]: a,
							[c.a.isIconOnly]: !!o && !m,
							[c.a.isSquare]: d,
							[c.a.redditStyle]: !(!n && !s),
							[c.a.rplStyle]: r
						})
					})({
						baseClassName: x,
						children: v,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: a,
						isSquare: f,
						priority: E,
						redditStyle: O,
						rplStyle: j,
						size: C,
						text: I
					}), w = (e => {
						let {
							children: t,
							text: n,
							Icon: r,
							iconClassName: o,
							iconPosition: a,
							priority: d,
							textClassName: l
						} = e;
						return !r && n ? s.a.createElement("span", {
							className: l
						}, n) : s.a.createElement(s.a.Fragment, null, r && (a === p.C || a === p.L) && s.a.createElement(r, {
							className: Object(i.a)(c.a.Icon, o, {
								[c.a.isLeft]: a === p.L
							}),
							isFilled: d === m.Primary
						}), n && s.a.createElement("span", {
							className: Object(i.a)(c.a.Text, l)
						}, n), t && t, r && a === p.R && s.a.createElement(r, {
							className: Object(i.a)(c.a.Icon, o, c.a.isRight),
							isFilled: d === m.Primary
						}))
					})({
						children: v,
						text: I,
						Icon: n,
						iconClassName: r,
						iconPosition: o,
						priority: E,
						textClassName: S
					});
					return y === b.InternalLink && (e => "to" in e)(k) ? s.a.createElement(h, d({}, l, k, {
						className: N
					}), w) : y === b.ExternalLink && (e => "href" in e)(k) ? s.a.createElement(g, d({}, l, k, {
						className: N
					}), w) : s.a.createElement(_, d({}, l, k, {
						className: N
					}), w)
				},
				h = e => s.a.createElement(o.default, e),
				g = e => s.a.createElement("a", e),
				_ = e => s.a.createElement("button", e),
				v = e => s.a.createElement(f, d({
					kind: b.ExternalLink,
					priority: m.Primary
				}, e)),
				x = e => s.a.createElement(f, d({
					kind: b.InternalLink,
					priority: m.Primary
				}, e)),
				y = e => s.a.createElement(f, d({
					kind: b.Button,
					priority: m.Primary
				}, e)),
				E = e => s.a.createElement(f, d({
					kind: b.ExternalLink,
					priority: m.Secondary
				}, e)),
				O = e => s.a.createElement(f, d({
					kind: b.InternalLink,
					priority: m.Secondary
				}, e)),
				j = e => s.a.createElement(f, d({
					kind: b.Button,
					priority: m.Secondary
				}, e)),
				C = e => s.a.createElement(f, d({
					kind: b.InternalLink,
					priority: m.Plain
				}, e)),
				I = e => s.a.createElement(f, d({
					kind: b.Button,
					priority: m.Plain
				}, e)),
				S = e => {
					let {
						className: t,
						...n
					} = e;
					return s.a.createElement(f, d({
						kind: b.Button,
						priority: m.Primary,
						className: Object(i.a)(t, c.a.DangerButtonColors)
					}, n))
				},
				k = e => {
					let {
						className: t,
						...n
					} = e;
					return s.a.createElement(f, d({
						kind: b.Button,
						className: Object(i.a)(t, c.a.GoldButtonColors)
					}, n))
				},
				N = e => {
					let {
						className: t,
						...n
					} = e;
					return s.a.createElement(f, d({
						kind: b.Button,
						className: Object(i.a)(t, c.a.PremiumButtonColors)
					}, n))
				},
				w = e => {
					let {
						className: t,
						...n
					} = e;
					return s.a.createElement(f, d({
						kind: b.Button,
						className: Object(i.a)(t, c.a.ChatButton)
					}, n))
				},
				T = e => {
					let {
						className: t,
						...n
					} = e;
					return s.a.createElement(f, d({
						kind: b.Button,
						className: Object(i.a)(t, c.a.InlineTextButton)
					}, n))
				},
				P = e => {
					let {
						className: t,
						...n
					} = e;
					return s.a.createElement(f, d({
						kind: b.Button,
						className: Object(i.a)(t, c.a.PlainLinkButton),
						priority: m.PlainLink
					}, n))
				};
			t.t = f
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
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				f = n.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends o.a.Component {
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
					}, n = Object(a.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(c.a, h({}, t, {
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
					}), e.children && o.a.createElement("span", {
						className: n
					}, e.children), o.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(u.a, h({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(l.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...n
				} = e;
				const r = Object(a.a)(f.a.row, t, {
					[f.a.mIsInteractive]: !n.noHover,
					[f.a.mIsSelected]: n.isSelected,
					[f.a.topics]: n.isTopicsStyle
				});
				return o.a.createElement(g, h({
					className: r
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdownTriangle: "_1oxgVV3q47KbjEKqP5CHuM",
				dropdown: "_2uYY-KeuYHKiwl-9aF0UiL"
			}
		},
		"./src/reddit/controls/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/domUtils/index.ts"),
				a = n("./src/reddit/constants/zIndex.ts"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				d = n.n(c);
			class l extends s.a.Component {
				componentDidMount() {
					this.props.onDropdownMounted && this.props.onDropdownMounted(), this.props.noFocus || this.ref && this.ref.focus({
						preventScroll: this.props.isOverlay
					})
				}
				componentWillUnmount() {
					Object(o.a)(this.props.tooltipId)
				}
				render() {
					const e = this.props,
						t = {};
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? a.d + 1 : a.c)), s.a.createElement("div", {
						className: Object(i.a)(d.a.dropdown, e.className),
						id: this.props.id,
						ref: e => this.ref = e,
						role: "menu",
						style: {
							...t,
							...e.style
						},
						tabIndex: -1,
						onScroll: e.onScroll
					}, e.children)
				}
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				muteSubreddit: "ui39KJ4PwbdKkxvIBbLbV",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			class i extends s.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, i = n || r;
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
					}), (!i || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
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
						className: Object(o.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(i.b)(null, {
				closeModal: a.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/InternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				disabledLink: "_1tQt2CUWT3M7NNSMoh_o_4"
			}
		},
		"./src/reddit/controls/InternalLink/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/path/index.ts"),
				c = n("./src/reddit/controls/InternalLink/index.m.less"),
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

			function u(e) {
				let {
					children: t,
					className: n,
					disabled: r,
					replace: c,
					to: u,
					target: m,
					...p
				} = e;
				return r ? s.a.createElement("span", {
					className: Object(o.a)(d.a.disabledLink, n)
				}, t) : ("string" == typeof u && (u = Object(a.b)(u)), m ? s.a.createElement(i.a, l({
					className: n,
					to: u,
					target: m
				}, p), t) : s.a.createElement(i.a, l({
					className: n,
					to: u
				}, p), t))
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(a.a.loadingIcon, n, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "c", (function() {
				return k
			}));
			var r = n("./node_modules/lodash/omit.js"),
				s = n.n(r),
				i = n("./node_modules/query-string/index.js"),
				o = n.n(i),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/addQueryParams/index.ts");
			var m = (e, t) => t ? Object(u.a)(e, {
				user_id: t
			}) : e;
			var p = n("./src/lib/opener/index.ts"),
				b = n("./src/lib/redditId/index.ts"),
				f = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/reddit/helpers/getVendorMetadata.ts"),
				_ = n("./src/reddit/helpers/trackers/ads.ts"),
				v = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/telemetry.ts"),
				E = n("./src/reddit/selectors/user.ts");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = Object(l.a)(E.c, E.m, (e, t) => {
					let {
						isSponsored: n,
						postId: r
					} = t;
					return n && r ? Object(x.b)(e, r) : null
				}, x.F, y.d, (e, t, n, r, s) => ({
					allowClickTracking: e,
					basePixelMetadata: n,
					userId: t ? Object(b.a)(t.id) : null,
					post: r,
					pageType: s.pageType
				})),
				C = Object(d.b)(j, e => ({
					fireAdPixelsOfType: (t, n) => e(Object(f.y)(t, n))
				})),
				I = (e, t, n, r) => {
					const s = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					r && t.outboundUrl && s && (e.href = m(t.outboundUrl, n), e.href = function(e) {
						return Object(u.a)(e, {
							web_redirect: "true"
						})
					}(e.href))
				},
				S = (e, t, n) => {
					let r, s = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(n)) {
						s = Object(g.a)(e, t, h.a.Click);
						const {
							url: i,
							query: a
						} = o.a.parseUrl(n);
						r = o.a.stringifyUrl({
							url: i,
							query: {
								...a,
								...s
							}
						})
					} else r = n;
					return {
						url: r,
						metadata: s
					}
				},
				k = (e, t, n) => {
					const r = S(t, n, e.href);
					return e.href = r.url, r.metadata
				},
				N = e => {
					let {
						isSponsored: t,
						source: n
					} = e;
					return !!(t && (null == n ? void 0 : n.outboundUrl))
				},
				w = C(e => {
					const t = Object(a.useRef)(null),
						n = Object(v.a)(),
						{
							allowClickTracking: r,
							basePixelMetadata: i,
							commentId: o,
							fireAdPixelsOfType: d,
							href: l,
							isSponsored: u,
							pageType: m,
							post: b,
							postId: f,
							source: g,
							sourceElement: x,
							userId: y
						} = e;
					let E = s()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "post", "commentId", "source", "sourceElement", "userId", "pageType"]);
					const j = g && g.outboundUrl && u ? g.outboundUrl : l;
					return E = {
						...E,
						href: j,
						rel: u ? p.b : p.a,
						target: p.d.BLANK
					}, !g || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: n
						} = e;
						return !(!t || !n) && (t > n + 3e5 || t < n - 36e5)
					})(g) ? c.a.createElement("a", O({}, E, {
						onClick: () => n(l, x, o, f)
					})) : c.a.createElement("a", O({}, E, {
						onMouseDown: n => {
							if (!N(e)) return !(1 !== n.button && 2 !== n.button && !n.ctrlKey) || void I(n.currentTarget, g, y, r);
							t.current = k(n.currentTarget, f, i)
						},
						onClick: () => {
							b && (N(e) && Object(_.a)(b, m), d(b, h.a.Click), n(l, x, o, f))
						},
						onMouseLeave: e => {
							u || ((e, t) => {
								e.href = t
							})(e.currentTarget, j)
						},
						onTouchStart: e => I(e.currentTarget, g, y, r),
						"data-testid": "outbound-link"
					}))
				});
			t.b = w
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Search/index.m.less"),
				f = n.n(b);
			const h = Object(i.b)(() => Object(o.c)({
				subredditsByName: Object(c.a)((e, t) => {
					const n = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						n[t.subredditName] = Object(u.C)(e, {
							subredditName: t.subredditName
						})
					}), n
				})
			}))(e => s.a.createElement("div", {
				className: Object(a.a)(p.a.subText, f.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => s.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, s.a.createElement(l.b, {
				className: Object(a.a)(f.a.subredditIcon, f.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : s.a.createElement(l.b, {
				className: Object(a.a)(f.a.subredditIcon, e.iconClassName),
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/TextButton/index.m.less"),
				a = n.n(o);
			t.a = e => s.a.createElement("button", {
				children: e.children,
				className: Object(i.a)(a.a.textButton, e.className),
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
				i = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = n.n(i);
			t.a = r.a.wrapped(s.default, "unstyledInternalLink", o.a)
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
		"./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				i = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const o = (e, t) => Object(r.a)(e, {
					...s,
					variables: t
				}),
				a = (e, t) => Object(r.a)(e, {
					...i,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		},
		"./src/reddit/endpoints/subreddit/about.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/SubredditAbout.json");
			t.a = (e, t, n) => Object(r.a)(e, {
				...s,
				variables: {
					subredditName: t,
					includeSubreddit: n
				}
			})
		},
		"./src/reddit/endpoints/subreddit/notificationSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/redditGQL/operations/FetchSubredditsNotificationSettings.json"),
				s = n("./src/redditGQL/operations/UpdateSubredditNotificationSettings.json"),
				i = n("./src/lib/makeGqlRequest/index.ts");
			const o = (e, t) => Object(i.a)(e, {
					...r,
					variables: {
						subredditIds: [t]
					}
				}),
				a = (e, t, n) => Object(i.a)(e, {
					...s,
					variables: {
						input: {
							...n,
							subredditId: t
						}
					}
				})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(o.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(i.b)(r)(e => {
					const {
						featureEnabled: r,
						...i
					} = e, o = i;
					return r ? s.a.createElement(t, o) : void 0 !== n ? s.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/counters/nsfwBypassableBlocking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var r, s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/sample/index.ts"),
				o = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				a = n("./src/telemetry/helpers/sendCounter.ts");
			! function(e) {
				e.Continue = "continue", e.Dismiss = "dismiss", e.Login = "login", e.View = "view"
			}(r || (r = {}));
			const c = e => {
					Object(o.b)() || Object(a.b)(s.n.Redesign, {
						type: a.a.NsfwBypassableBlocking,
						data: {
							action: e
						}
					})
				},
				d = e => {
					!Object(o.b)() && e && Object(i.b)(10) && Object(a.b)(s.n.Redesign, {
						type: a.a.NsfwBypassableBlocking,
						data: {
							action: r.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/counters/nsfwblocking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/sample/index.ts"),
				i = n("./src/telemetry/helpers/sendCounter.ts");
			const o = () => !1;
			var a;
			! function(e) {
				e.Dismiss = "dismiss", e.Login = "login", e.Signup = "signup", e.View = "view"
			}(a || (a = {}));
			const c = e => {
					o() || Object(i.b)(r.n.Redesign, {
						type: i.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				d = e => {
					!o() && e && Object(s.b)(10) && Object(i.b)(r.n.Redesign, {
						type: i.a.NsfwBlocking,
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
				return i
			}));
			var r, s = n("./src/lib/constants/index.ts");
			! function(e) {
				e.Enabled = "datadome-bot-detection.enabled", e.Disabled = "datadome-bot-detection.disabled"
			}(r || (r = {}));
			const i = () => o() ? r.Enabled : r.Disabled,
				o = () => null !== document.getElementById(s.C)
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/lodash/map.js"),
				s = n.n(r),
				i = n("./src/lib/FocusTrap/index.ts");
			const o = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				a = () => o() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return s()(t, e => e.textContent || "")
				})() : null,
				c = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				d = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!c(n, e)) return;
					const {
						startContainer: r,
						startOffset: s,
						endContainer: i,
						endOffset: o
					} = n, a = document.createRange();
					a.selectNode(e);
					let d = !0;
					if (-1 === a.compareBoundaryPoints(Range.START_TO_START, n) && (a.setStart(r, s), d = !1), 1 === a.compareBoundaryPoints(Range.END_TO_END, n) && (a.setEnd(i, o), d = !1), d) return [e];
					const l = document.createElement("div");
					return l.appendChild(a.cloneContents()), [...l.childNodes]
				},
				l = (e, t, n) => {
					let r = e;
					for (; r && (!n || !n(r));) {
						if (r && t(r)) return r;
						r = r.parentElement
					}
				},
				u = e => e && e.parentElement && l(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				m = e => {
					e.querySelectorAll(i.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/memoize.js"),
				s = n.n(r),
				i = n("./src/reddit/constants/categories.tsx"),
				o = n("./src/reddit/constants/imagePaths.ts");
			const a = [];
			t.a = s()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return a;
				const r = n ? o.a : o.b,
					s = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: i.a[(s + t) % i.a.length],
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
				let s, i, o, a, c, d, l, u, m, p, b, f;
				return e ? e.quarantinedSubreddit ? (o = r.a.QuarantinedSubreddit, c = e.quarantineMessage, d = e.quarantineMessageHtml, l = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = r.a.PrivateSubreddit, a = e.subredditDescription, u = e.isContributorRequestsDisabled, m = e.isContributorRequestTimestamp) : e.goldSubreddit ? o = r.a.GoldSubreddit : e.subredditBanned ? (o = r.a.SubredditBanned, s = e.subredditBanMessage, i = e.subredditBanTitle) : e.subredditDoesNotExist ? o = r.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? o = r.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (o = r.a.GatedSubreddit, p = e.interstitialWarningMessage, b = e.interstitialWarningMessageHtml, f = e.interstitialWarningMessageRTJson) : t && (o = r.a.Nsfw), o && n ? {
					banMessage: s,
					banTitle: i,
					contentGateType: o,
					isContributorRequestsDisabled: u,
					isContributorRequestTimestamp: m,
					subredditDescription: a,
					subredditName: n,
					quarantineMessage: c,
					quarantineMessageHtml: d,
					quarantineRequiresEmail: l,
					interstitialWarningMessage: p,
					interstitialWarningMessageHtml: b,
					interstitialWarningMessageRTJson: f
				} : void 0
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(r.a)(e).banner.iconImage ? String(Object(r.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/getTimeSortForListing/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/listingSort/index.ts");
			t.a = (e, t) => {
				if (e) return Object(s.a)(e) ? t || r.pc : void 0
			}
		},
		"./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => ({
				...e.id && {
					id: e.id
				},
				...e.postBackgroundColor && {
					postBackgroundColor: e.postBackgroundColor
				},
				...e.postBackgroundImage && {
					postBackgroundImage: e.postBackgroundImage
				},
				...e.postPlaceholderImage && {
					postPlaceholderImage: e.postPlaceholderImage
				},
				...e.postTitleColor && {
					postTitleColor: e.postTitleColor
				}
			})
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
			const i = ["old", "new", "en", "www", "np", "m"],
				o = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(r.a)() ? [window.location.host] : []].concat("").concat(i.map((function(e) {
					return e + ".reddit.com"
				}))).concat(i.map((function(e) {
					return e + ".reddit.local"
				}))),
				a = ["mod.reddit.com"],
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
						hostnames: o.concat("redd.it"),
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
						hostnames: a,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: a,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e, t) {
				const n = c[e];
				if (!c) throw new Error("Could not find reddit URL spec: " + e);
				const r = Object(s.a)(t);
				if (!r) return void console.error("Could not parse url", t);
				if (-1 === (n.hostnames || o).indexOf(r.hostname)) return;
				const i = r.pathname.match(n.pathname);
				if (i) {
					return {
						url: t,
						routeName: e,
						components: n.pathnameComponents.reduce((function(e, t, n) {
							return e[t] = i[n + 1], e
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
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/history/esm/history.js"), n("./src/reddit/actions/platform.ts");
			var r = n("./src/config.ts");
			t.a = (e, t) => {
				const n = t.platform.currentPage && t.platform.currentPage.url;
				let s = `${r.a.accountManagerOrigin}/login/`;
				const i = window.location.origin;
				n && (s += `?dest=${encodeURIComponent(`${i}${n}`)}`), window.location.href = s
			}
		},
		"./src/reddit/helpers/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/reddit/models/Prediction/index.ts");
			const s = (e, t) => {
					const n = Date.now(),
						s = n <= e.endsAt,
						i = n <= t.endsAt,
						o = e.status === r.b.Cancelled || e.status === r.b.CancelInProgress;
					return o !== (t.status === r.b.Cancelled || t.status === r.b.CancelInProgress) ? o ? 1 : -1 : s !== i ? s ? -1 : 1 : s && e.selectedOptionId !== t.selectedOptionId ? e.selectedOptionId ? 1 : -1 : !e.resolvedOptionId != !t.resolvedOptionId ? e.resolvedOptionId ? 1 : -1 : s || e.selectedOptionId === t.selectedOptionId ? e.createdAt > t.createdAt ? -1 : 1 : e.selectedOptionId ? -1 : 1
				},
				i = (e, t) => s({
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
				o = (e, t) => {
					var n, r;
					const {
						pollData: i
					} = e, {
						pollData: o
					} = t;
					return i && o ? s({
						createdAt: e.created,
						endsAt: null == i ? void 0 : i.votingEndTimestamp,
						selectedOptionId: null !== (n = null == i ? void 0 : i.userSelection) && void 0 !== n ? n : null,
						resolvedOptionId: null == i ? void 0 : i.resolvedOptionId,
						totalVoteCount: null == i ? void 0 : i.totalVoteCount,
						status: null == i ? void 0 : i.predictionStatus
					}, {
						createdAt: t.created,
						endsAt: null == o ? void 0 : o.votingEndTimestamp,
						selectedOptionId: null !== (r = null == o ? void 0 : o.userSelection) && void 0 !== r ? r : null,
						resolvedOptionId: null == o ? void 0 : o.resolvedOptionId,
						totalVoteCount: null == o ? void 0 : o.totalVoteCount,
						status: null == o ? void 0 : o.predictionStatus
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
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const i = e => Object(r.b)(e) < .6;

			function o(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.a.bodyText,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.b.bodyText;
				return i(e) ? n : t
			}
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			}));
			var r = n("./src/config.ts");
			const s = `${r.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				i = `${r.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				o = `${r.a.assetPath}/img/favicon/favicon-32x32.png`,
				a = `${r.a.assetPath}/img/favicon/favicon-16x16.png`,
				c = "badgeCountSync",
				d = e => window.document.querySelector(`link[href="${e}"]`),
				l = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					const t = d(e ? o : s),
						n = d(e ? a : i);
					t && n && (t.href = e ? s : o, n.href = e ? i : a)
				},
				u = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: c,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/reddit/constants/elementIds.ts");
			let s;
			const i = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(r.d);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				o = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, s || (s = c(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${s}px`;
					const t = document.getElementById(r.d);
					t && (t.style.marginRight = `${s}px`)
				},
				a = e => {
					e ? i() : o()
				},
				c = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				d = e => {
					if (!e || !document.body) return 0;
					const t = c(document.body),
						n = e.offsetWidth - e.scrollWidth;
					return t || n
				}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/helpers/localStorage/index.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, n) => s => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...i.p(s),
					subreddit: i.mb(s),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${n}` : `DESKTOP ${n}`,
						count: 1,
						type: r.h.SWITCH_HOUSE_AD
					}
				}),
				a = (e, t) => {
					t && (Object(s.Hb)(e.postId), Object(s.Rb)(t)), e.impressionIdStr ? Object(s.Ib)(e.impressionIdStr) : e.impressionId && Object(s.Ib)(e.impressionId)
				}
		},
		"./src/reddit/helpers/trackers/blade.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return o
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "k", (function() {
				return _
			}));
			var r = n("./src/reddit/constants/blade.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t) => n => ({
					...s.p(n),
					source: r.c.Appearance,
					action: "click",
					noun: e,
					actionInfo: s.d(n, {
						paneName: t
					}),
					subreddit: s.mb(n)
				}),
				o = e => i("save_style", e),
				a = e => i("cancel_style", e),
				c = e => t => ({
					source: r.c.Structure,
					action: "click",
					noun: e,
					screen: s.db(t),
					subreddit: s.mb(t)
				}),
				d = e => t => ({
					source: r.c.Appearance,
					action: "click",
					noun: e,
					screen: s.db(t),
					subreddit: s.mb(t)
				}),
				l = (e, t) => n => ({
					source: "colorpicker",
					action: "click",
					noun: e,
					actionInfo: s.d(n, {
						paneName: r.f[t]
					}),
					screen: s.db(n),
					subreddit: s.mb(n)
				}),
				u = e => t => ({
					source: r.g[e],
					action: "click",
					noun: "colorpicker",
					actionInfo: s.d(t, {
						paneName: r.f[e]
					}),
					screen: s.db(t),
					subreddit: s.mb(t)
				}),
				m = e => ({
					screen: s.db(e),
					subreddit: s.mb(e)
				}),
				p = () => e => ({
					source: r.c.Appearance,
					action: "view",
					noun: "blade",
					...m(e)
				}),
				b = e => t => ({
					source: r.a[e],
					action: "click",
					noun: r.b[e],
					...m(t)
				}),
				f = () => e => ({
					source: r.c.Appearance,
					action: "click",
					noun: "back",
					...m(e)
				}),
				h = e => t => ({
					source: r.c.PostFlairManagement,
					action: "click",
					noun: e,
					...m(t)
				}),
				g = (e, t) => ({
					...s.p(e),
					...h(t)(e)
				}),
				_ = e => t => ({
					source: r.c.MenuLinks,
					action: "click",
					noun: e ? "wiki_link_on" : "wiki_link_off",
					screen: s.db(t),
					subreddit: s.mb(t),
					userSubreddit: s.vb(t)
				})
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return r
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "l", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
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
				return f
			})), n.d(t, "f", (function() {
				return h
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
				i = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				o = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				a = () => () => ({
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
				f = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "take_survey",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				h = () => () => ({
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
				return v
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "n", (function() {
				return P
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "j", (function() {
				return D
			})), n.d(t, "k", (function() {
				return R
			})), n.d(t, "t", (function() {
				return A
			})), n.d(t, "s", (function() {
				return B
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "l", (function() {
				return F
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "d", (function() {
				return q
			})), n.d(t, "e", (function() {
				return K
			})), n.d(t, "f", (function() {
				return z
			})), n.d(t, "h", (function() {
				return Y
			})), n.d(t, "q", (function() {
				return Q
			}));
			var r, s = n("./src/lib/stringInterpolate/index.ts"),
				i = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				a = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				c = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = (n("./src/reddit/helpers/widgets/index.tsx"), n("./src/reddit/models/DiscoveryUnit/index.ts")),
				l = n("./src/reddit/models/Search/index.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/reddit/selectors/trending.ts"),
				b = n("./src/reddit/selectors/widgets.ts"),
				f = n("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe", e.TRENDING = "trending"
			}(r || (r = {}));
			const h = "discovery_unit",
				g = (e, t, n) => ({
					...m.p(e),
					source: h,
					screen: m.db(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(s.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				_ = (e, t, n) => ({
					...g(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				v = (e, t) => {
					Object(f.a)(x(t)(e))
				},
				x = (e, t) => n => _(n, e, t),
				y = (e, t, n, r) => "unitName" in t ? g(e, t, r) : ((e, t, n) => ({
					...m.p(e),
					source: "search",
					screen: m.db(e),
					search: n ? {
						...m.eb(e, n, a.a.SERP),
						structureType: m.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				E = (e, t, n, s, i) => ({
					...y(e, t, s, i),
					action: "view",
					noun: r.ITEM_POST,
					post: m.L(e, n)
				}),
				O = e => {
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
			var j;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(j || (j = {}));
			const C = e => {
					Object(f.a)(N({
						...e,
						action: o.c.CLICK
					}))
				},
				I = e => {
					Object(f.a)(N({
						...e,
						action: o.c.VIEW
					}))
				},
				S = {
					[a.a.Popular]: j.POPULAR_CAROUSEL,
					[a.a.Typeahead]: j.SEARCH_DROPDOWN
				},
				k = {
					[a.a.Popular]: l.d.tile,
					[a.a.Typeahead]: l.d.dropdown
				},
				N = e => {
					let {
						action: t,
						offset: n = 0,
						state: s,
						telemetrySource: i,
						trendingSearch: o
					} = e;
					const a = S[i],
						c = k[i],
						l = Object(p.a)(s, c).filter(e => !e.post || !(e.post.isSponsored && e.post.isBlank)).findIndex(e => e.id === o.id) + n;
					return {
						...m.p(s),
						source: "search",
						action: t,
						noun: r.TRENDING,
						metaSearch: O(o),
						discoveryUnit: a === j.POPULAR_CAROUSEL ? {
							name: d.k,
							id: d.k,
							title: d.k,
							type: "query"
						} : void 0,
						actionInfo: m.d(s, {
							paneName: a,
							position: l
						}),
						search: m.fb(s, {
							searchQuery: o.rawQuery,
							structureType: m.c.Trending,
							originElement: a === j.SEARCH_DROPDOWN ? m.a.SearchDropdown : void 0,
							telemetrySource: i
						})
					}
				},
				w = (e, t, n, r, s, i, a) => {
					Object(f.a)({
						...m.p(e),
						...Object(c.l)({
							state: e,
							postId: n,
							searchOptions: r,
							pageLayer: s,
							key: i,
							discoveryUnit: t
						}),
						action: o.c.VIEW,
						noun: a ? "ad" : "post"
					})
				},
				T = (e, t, n, r) => {
					Object(f.a)(E(e, t, n, r))
				},
				P = (e, t, n, r) => s => E(s, e, t, n, r),
				L = (e, t) => {
					Object(f.a)({
						...g(e, t),
						source: h,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				D = (e, t, n, r) => {
					Object(f.a)(R(t, n, r)(e))
				},
				R = (e, t, n, s) => i => {
					return {
						...y(i, e, n, s),
						source: h,
						action: o.c.CLICK,
						noun: r.ITEM_POST,
						post: m.L(i, t)
					}
				},
				A = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => Object(c.r)(e, ...t)
				},
				B = (e, t, n, r) => s => i => Object(c.j)({
					action: o.c.CLICK,
					state: i,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: n,
					postId: s,
					discoveryUnit: r
				}),
				M = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => n => ({
						...A(...t)(e)(n),
						noun: "ad"
					})
				},
				U = (e, t) => n => s => ({
					...e ? g(s, e, t) : {},
					source: h,
					action: o.c.CLICK,
					noun: r.ITEM_POST,
					post: m.L(s, n)
				}),
				F = (e, t, n, r) => {
					Object(f.a)(W(t, n, r)(e))
				},
				W = (e, t, n, r) => s => {
					const i = Object(u.c)(s, {
							postId: t
						}),
						a = i ? Object(b.b)(s, i) : void 0;
					return {
						...y(s, e, n, r),
						...a,
						source: h,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: m.L(s, t)
					}
				},
				H = () => ({
					id: "xd_focus_verticals",
					unitType: d.e.Listing,
					experiment: "",
					title: i.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.c.Large,
					surface: d.d.Frontpage,
					url: "gql.reddit.com"
				}),
				V = (e, t, n) => m.d(e, {
					position: n
				}),
				G = (e, t, n) => {
					const s = H();
					return e => ({
						...g(e, s),
						actionInfo: V(e, 0, n),
						subreddit: m.nb(e, t) || null,
						source: h,
						action: o.c.VIEW,
						noun: r.ITEM_SUBREDDIT
					})
				},
				q = (e, t, n) => {
					const s = H();
					return e => ({
						...g(e, s),
						actionInfo: V(e, 0, n),
						subreddit: m.nb(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: r.ITEM_SUBREDDIT
					})
				},
				K = (e, t, n, s) => {
					const i = H();
					return e => ({
						...g(e, i),
						actionInfo: V(e, 0, n),
						subreddit: m.nb(e, t) || null,
						post: s ? m.L(e, s) : null,
						source: h,
						action: o.c.CLICK,
						noun: r.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				z = (e, t, n, s) => {
					const i = H();
					return e => ({
						...g(e, i),
						actionInfo: V(e, 0, n),
						subreddit: m.nb(e, t) || null,
						post: s ? m.L(e, s) : null,
						source: h,
						action: o.c.CLICK,
						noun: r.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				Y = (e, t) => n => ({
					...g(n, e),
					...t && Object(b.b)(n, t),
					source: h,
					action: o.c.CLICK,
					noun: "item"
				}),
				Q = e => t => ({
					...g(t, e),
					source: h,
					action: o.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/garlicBread.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					...Object(s.p)(e),
					action: r.c.CLICK,
					noun: "preview",
					source: "garlic_bread"
				}),
				o = () => e => ({
					...Object(s.p)(e),
					action: r.c.CLICK,
					noun: "garlic_bread",
					source: "nav"
				})
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "v", (function() {
				return m
			})), n.d(t, "s", (function() {
				return p
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "t", (function() {
				return h
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "A", (function() {
				return _
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "B", (function() {
				return O
			})), n.d(t, "r", (function() {
				return j
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "x", (function() {
				return T
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "y", (function() {
				return L
			})), n.d(t, "z", (function() {
				return D
			})), n.d(t, "p", (function() {
				return R
			}));
			var r, s, i, o, a, c, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(r || (r = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(s || (s = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(i || (i = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(o || (o = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(a || (a = {})),
			function(e) {
				e.Confirm = "confirm"
			}(c || (c = {}));
			const m = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s
					} = e;
					return e => ({
						...l.p(e),
						action: d.c.VIEW,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: s
						}
					})
				},
				p = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s,
						awardId: i
					} = e;
					return e => {
						Object(u.a)({
							...l.p(e),
							action: "receive",
							noun: "inbox_notification",
							source: o.Inbox,
							inbox: {
								id: t,
								isClicked: n,
								isViewed: r
							},
							notification: {
								type: s
							},
							goldPurchase: {
								awardId: i
							}
						})
					}
				},
				b = e => {
					let {
						dnPromptAction: t
					} = e;
					return e => ({
						...l.p(e),
						action: d.c.CLICK,
						noun: "inbox_banner",
						source: "inbox",
						banner: {
							id: "inbox_dn_banner"
						},
						actionInfo: {
							pageType: "dn_prompt",
							type: t
						}
					})
				},
				f = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s,
						awardId: i,
						position: o,
						postId: a,
						subredditId: c
					} = e;
					return e => ({
						...l.p(e),
						action: d.c.CLICK,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: s
						},
						goldPurchase: {
							awardId: i
						},
						actionInfo: {
							position: o
						},
						subreddit: c ? {
							id: c
						} : null,
						post: a ? {
							id: a
						} : null
					})
				},
				h = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...l.p(e),
						action: d.c.VIEW,
						noun: "inbox",
						source: o.Inbox,
						inbox: {
							badgeCount: t,
							tab: n
						}
					})
				},
				g = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...l.p(e),
						action: d.c.VIEW,
						noun: "mini-inbox",
						source: o.Inbox,
						inbox: {
							badgeCount: t,
							tab: r.Activity
						}
					})
				},
				_ = e => {
					let {
						badgeCount: t
					} = e;
					return e => ({
						...l.p(e),
						action: d.c.CLICK,
						noun: "inbox",
						source: o.Nav,
						inbox: {
							badgeCount: t
						}
					})
				},
				v = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s,
						awardId: i
					} = e;
					return e => ({
						...l.p(e),
						action: d.c.CLICK,
						noun: "inbox_notification_overflow",
						source: o.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: s
						},
						goldPurchase: {
							awardId: i
						}
					})
				},
				x = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s
					} = e;
					return e => ({
						...l.p(e),
						action: d.c.VIEW,
						noun: "inbox_notification_overflow",
						source: o.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: s
						}
					})
				};
			var y;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(y || (y = {}));
			const E = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: s,
						type: i
					} = e;
					return e => ({
						...l.p(e),
						action: d.c.CLICK,
						noun: "overflow_option",
						source: o.Inbox,
						inbox: {
							id: n,
							isClicked: r,
							isViewed: s
						},
						notification: {
							type: i
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				O = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: s,
						type: i
					} = e;
					return e => ({
						...l.p(e),
						action: d.c.UNDO,
						noun: "overflow_option",
						source: o.Inbox,
						inbox: {
							id: n,
							isClicked: r,
							isViewed: s
						},
						notification: {
							type: i
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				j = e => {
					let {
						actionInfoType: t
					} = e;
					return e => ({
						...l.p(e),
						action: d.c.CLICK,
						noun: "empty_state_cta",
						source: o.Inbox,
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				C = e => t => ({
					...l.p(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: o.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: e
					}
				}),
				I = () => e => ({
					...l.p(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: o.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: i.MiniInbox
					}
				}),
				S = () => e => ({
					...l.p(e),
					action: d.c.CLICK,
					noun: "messages",
					source: o.Inbox
				}),
				k = e => {
					let {
						isMiniInbox: t
					} = e;
					return e => ({
						...l.p(e),
						action: d.c.CLICK,
						noun: "mark_all_as_read",
						source: o.Inbox,
						actionInfo: t ? {
							...l.d(e),
							pageType: i.MiniInbox
						} : {}
					})
				};
			var N;
			! function(e) {
				e.DISMISS = "dismiss", e.BANNER = "banner", e.CTA_1 = "cta1", e.CTA_2 = "cta2"
			}(N || (N = {}));
			const w = (e, t) => n => ({
					...l.p(n),
					action: d.c.CLICK,
					noun: "inbox_banner",
					source: "inbox",
					actionInfo: {
						...l.d(n),
						type: t
					},
					banner: {
						id: e
					}
				}),
				T = (e, t) => n => ({
					...l.p(n),
					action: d.c.CLICK,
					noun: "inbox_banner",
					source: "mini_inbox",
					actionInfo: {
						...l.d(n),
						type: t
					},
					banner: {
						id: e
					}
				}),
				P = e => t => ({
					...l.p(t),
					action: d.c.RECEIVE,
					noun: "inbox_banner",
					source: "inbox",
					actionInfo: {
						...l.d(t)
					},
					banner: {
						id: e
					}
				}),
				L = e => t => ({
					...l.p(t),
					action: d.c.RECEIVE,
					noun: "inbox_banner",
					source: "mini_inbox",
					actionInfo: {
						...l.d(t)
					},
					banner: {
						id: e
					}
				}),
				D = e => t => ({
					...l.p(t),
					action: d.c.VIEW,
					noun: "inbox_banner",
					source: "mini_inbox",
					actionInfo: {
						...l.d(t)
					},
					banner: {
						id: e
					}
				}),
				R = e => t => ({
					...l.p(t),
					action: d.c.VIEW,
					noun: "inbox_banner",
					source: "inbox",
					actionInfo: {
						...l.d(t)
					},
					banner: {
						id: e
					}
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			n("./src/reddit/constants/categories.tsx");
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: r.db(e),
					profile: r.U(e),
					subreddit: r.mb(e)
				}),
				i = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...s(t)
				}),
				o = (e, t) => n => ({
					action: "click",
					source: "nav",
					noun: e,
					...s(n),
					topicMetadata: {
						displayName: t
					}
				}),
				a = e => t => ({
					...s(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...s(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				d = e => t => ({
					...s(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
				})
		},
		"./src/reddit/helpers/trackers/nsfwSignupBypassableUpsell.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = "nsfw_dialog_bypassable",
				i = () => e => ({
					...Object(r.p)(e),
					source: "xpromo",
					action: "view",
					noun: s,
					actionInfo: {
						...Object(r.d)(e)
					}
				}),
				o = () => e => ({
					...Object(r.p)(e),
					source: "xpromo",
					action: "click",
					noun: s,
					actionInfo: {
						...Object(r.d)(e),
						popupButtonText: "login"
					}
				}),
				a = () => e => ({
					...Object(r.p)(e),
					source: "xpromo",
					action: "dismiss",
					noun: s,
					actionInfo: {
						...Object(r.d)(e),
						popupButtonText: "back"
					}
				}),
				c = () => e => ({
					...Object(r.p)(e),
					source: "xpromo",
					action: "click",
					noun: s,
					actionInfo: {
						...Object(r.d)(e),
						popupButtonText: "continue"
					}
				})
		},
		"./src/reddit/helpers/trackers/nsfwSignupUpsell.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = "nsfw_dialog",
				i = () => e => ({
					...Object(r.p)(e),
					source: "xpromo",
					action: "view",
					noun: s,
					actionInfo: {
						...Object(r.d)(e)
					}
				}),
				o = () => e => ({
					...Object(r.p)(e),
					source: "xpromo",
					action: "click",
					noun: s,
					actionInfo: {
						...Object(r.d)(e)
					}
				}),
				a = () => e => ({
					...Object(r.p)(e),
					source: "xpromo",
					action: "dismiss",
					noun: s,
					actionInfo: {
						...Object(r.d)(e)
					}
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
			})), n.d(t, "A", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "v", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "z", (function() {
				return f
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "y", (function() {
				return v
			})), n.d(t, "o", (function() {
				return x
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "x", (function() {
				return E
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "s", (function() {
				return j
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "w", (function() {
				return I
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "E", (function() {
				return k
			})), n.d(t, "B", (function() {
				return N
			})), n.d(t, "D", (function() {
				return w
			})), n.d(t, "C", (function() {
				return T
			})), n.d(t, "r", (function() {
				return P
			})), n.d(t, "m", (function() {
				return L
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return A
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "e", (function() {
				return U
			})), n.d(t, "J", (function() {
				return F
			})), n.d(t, "I", (function() {
				return W
			})), n.d(t, "L", (function() {
				return H
			})), n.d(t, "K", (function() {
				return V
			})), n.d(t, "M", (function() {
				return G
			})), n.d(t, "H", (function() {
				return q
			})), n.d(t, "G", (function() {
				return K
			})), n.d(t, "F", (function() {
				return z
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = [],
				o = "onboarding";
			var a;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.ONBOARDING_LANGUAGE_SELECTION = "onboarding_language_collection", e.SETTINGS_LANGUAGE_COLLECTION = "settings_language_collection", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more", e.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN = "google_account_confirmation_screen", e.USERNAME_SECOND_CONFIRMATION_SCREEN = "username_second_confirmation_screen", e.USERNAME_CONFIRMATION_SCREEN = "username_confirmation_screen", e.USERNAME_TOOLTIP = "username_tooltip"
			}(a || (a = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
					return t => ({
						...Object(s.p)(t),
						action: r.c.CLICK,
						noun: a.EXIT,
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: o
					})
				},
				d = () => e => ({
					...Object(s.p)(e),
					action: r.c.DISMISS,
					noun: a.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: o
				}),
				l = () => e => ({
					...Object(s.p)(e),
					action: r.c.VIEW,
					noun: a.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: o
				}),
				u = e => t => ({
					...Object(s.p)(t),
					action: r.c.DISMISS,
					noun: e,
					source: o
				}),
				m = () => e => ({
					...Object(s.p)(e),
					source: o,
					action: r.c.VIEW,
					noun: a.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(s.p)(e),
					source: o,
					action: r.c.VIEW,
					noun: a.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(s.p)(e),
					source: o,
					action: r.c.VIEW,
					noun: a.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				f = e => t => ({
					...Object(s.p)(t),
					source: o,
					action: r.c.VIEW,
					noun: a.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(s.d)(t),
						type: e
					}
				}),
				h = () => e => ({
					...Object(s.p)(e),
					source: o,
					action: r.c.SUBMIT,
					noun: a.ONBOARDING_GENDER_COLLECTION
				}),
				g = () => e => ({
					...Object(s.p)(e),
					source: o,
					action: r.c.SUBMIT,
					noun: a.ONBOARDING_INTEREST
				}),
				_ = () => e => ({
					...Object(s.p)(e),
					source: o,
					action: r.c.SUBMIT,
					noun: a.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				v = (e, t) => n => ({
					...Object(s.p)(n),
					source: o,
					action: r.c.SUBMIT,
					noun: a.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(s.d)(n),
						reason: t,
						type: e
					}
				}),
				x = () => e => ({
					...Object(s.p)(e),
					source: o,
					action: r.c.SKIP,
					noun: a.ONBOARDING_GENDER_COLLECTION
				}),
				y = () => e => ({
					...Object(s.p)(e),
					source: o,
					action: r.c.SKIP,
					noun: a.ONBOARDING_INTEREST
				}),
				E = e => t => ({
					...Object(s.p)(t),
					source: o,
					action: r.c.SKIP,
					noun: a.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(s.d)(t),
						type: e
					}
				}),
				O = () => e => ({
					...Object(s.p)(e),
					source: o,
					action: r.c.SELECT,
					noun: a.GENDER
				}),
				j = (e, t, n, i, c) => d => ({
					...Object(s.p)(d),
					source: o,
					action: e ? r.c.SELECT : r.c.DESELECT,
					actionInfo: {
						...Object(s.d)(d),
						reason: c
					},
					noun: t ? a.CATEGORY : a.SUB_CATEGORY,
					onboarding: {
						categoryName: D(n),
						categoryId: i
					}
				}),
				C = (e, t, n, i, c, d) => l => ({
					...Object(s.p)(l),
					source: o,
					action: e ? r.c.SELECT : r.c.DESELECT,
					actionInfo: {
						...Object(s.d)(l),
						reason: d
					},
					noun: a.SUBREDDIT,
					onboarding: {
						categoryName: D(t),
						categoryId: n,
						subredditName: i,
						subredditId: c
					}
				}),
				I = (e, t, n) => i => ({
					...Object(s.p)(i),
					source: o,
					action: n ? r.c.SELECT : r.c.DESELECT,
					noun: a.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(s.d)(i),
						reason: t,
						type: e
					}
				}),
				S = (e, t) => n => ({
					...Object(s.p)(n),
					source: o,
					action: r.c.CLICK,
					noun: a.VIEW_MORE,
					onboarding: {
						categoryName: D(e),
						categoryId: t
					}
				}),
				k = () => e => ({
					...Object(s.p)(e),
					source: "topic_chaining_prompt",
					action: r.c.VIEW,
					noun: a.TOPIC_PREVIEW
				}),
				N = () => e => ({
					...Object(s.p)(e),
					source: "topic_chaining_prompt",
					action: r.c.CLICK,
					noun: a.TOPIC_PREVIEW
				}),
				w = (e, t) => n => ({
					...Object(s.p)(n),
					source: "topic_chaining_prompt",
					action: r.c.SELECT,
					noun: a.CATEGORY,
					onboarding: {
						categoryName: D(e),
						categoryId: t
					}
				}),
				T = () => e => ({
					...Object(s.p)(e),
					source: "topic_chaining_prompt",
					action: r.c.DISMISS,
					noun: a.TOPIC_PREVIEW
				}),
				P = (e, t, n, i) => c => ({
					...Object(s.p)(c),
					source: o,
					action: r.c.VIEW,
					noun: e ? a.CATEGORY : a.SUB_CATEGORY,
					actionInfo: {
						...Object(s.d)(c),
						reason: i
					},
					onboarding: {
						categoryName: D(t),
						categoryId: n
					}
				}),
				L = (e, t, n, i, c) => d => ({
					...Object(s.p)(d),
					source: o,
					action: r.c.VIEW,
					actionInfo: {
						...Object(s.d)(d),
						reason: c
					},
					noun: a.SUBREDDIT,
					onboarding: {
						categoryName: D(e),
						categoryId: n,
						subredditName: t,
						subredditId: i
					}
				}),
				D = e => e.toLowerCase().replace(new RegExp("&", "g"), "and").replace(new RegExp(" ", "g"), "_").replace(new RegExp("[^-_a-z0-9]", "g"), "");
			var R, A, B;
			! function(e) {
				e.CONTINUE = "continue", e.LOGIN_ANOTHER_ACCOUNT = "login_another_account"
			}(R || (R = {})),
			function(e) {
				e.CHANGE_USERNAME = "change_username", e.KEEP_USERNAME = "keep_username"
			}(A || (A = {})),
			function(e) {
				e.GO_BACK = "go_back", e.YES_KEEP_USERNAME = "yes_keep_username"
			}(B || (B = {}));
			const M = () => e => ({
					...Object(s.p)(e),
					action: r.c.VIEW,
					noun: a.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: o
				}),
				U = e => t => ({
					...Object(s.p)(t),
					action: r.c.CLICK,
					actionInfo: {
						...Object(s.d)(t),
						reason: e
					},
					noun: a.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: o
				}),
				F = () => e => ({
					...Object(s.p)(e),
					action: r.c.VIEW,
					noun: a.USERNAME_CONFIRMATION_SCREEN,
					source: o
				}),
				W = e => t => ({
					...Object(s.p)(t),
					action: r.c.CLICK,
					actionInfo: {
						...Object(s.d)(t),
						reason: e
					},
					noun: a.USERNAME_CONFIRMATION_SCREEN,
					source: o
				}),
				H = () => e => ({
					...Object(s.p)(e),
					action: r.c.VIEW,
					noun: a.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: o
				}),
				V = e => t => ({
					...Object(s.p)(t),
					action: r.c.CLICK,
					actionInfo: {
						...Object(s.d)(t),
						reason: e
					},
					noun: a.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: o
				}),
				G = () => e => ({
					...Object(s.p)(e),
					action: r.c.VIEW,
					noun: a.USERNAME_TOOLTIP,
					source: o
				}),
				q = e => t => ({
					...Object(s.p)(t),
					source: "settings",
					action: r.c.VIEW,
					noun: a.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(s.d)(t),
						type: e
					}
				}),
				K = e => t => ({
					...Object(s.p)(t),
					source: "settings",
					action: r.c.SUBMIT,
					noun: a.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(s.d)(t),
						type: e
					}
				}),
				z = (e, t, n) => i => ({
					...Object(s.p)(i),
					source: "settings",
					action: n ? r.c.SELECT : r.c.DESELECT,
					noun: a.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(s.d)(i),
						reason: t,
						type: e
					}
				})
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "L", (function() {
				return E
			})), n.d(t, "J", (function() {
				return O
			})), n.d(t, "D", (function() {
				return j
			})), n.d(t, "z", (function() {
				return C
			})), n.d(t, "A", (function() {
				return I
			})), n.d(t, "N", (function() {
				return S
			})), n.d(t, "C", (function() {
				return k
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "F", (function() {
				return w
			})), n.d(t, "E", (function() {
				return T
			})), n.d(t, "t", (function() {
				return P
			})), n.d(t, "s", (function() {
				return L
			})), n.d(t, "M", (function() {
				return D
			})), n.d(t, "p", (function() {
				return R
			})), n.d(t, "o", (function() {
				return A
			})), n.d(t, "q", (function() {
				return B
			})), n.d(t, "f", (function() {
				return U
			})), n.d(t, "r", (function() {
				return H
			})), n.d(t, "B", (function() {
				return G
			})), n.d(t, "j", (function() {
				return q
			})), n.d(t, "g", (function() {
				return K
			})), n.d(t, "h", (function() {
				return z
			})), n.d(t, "d", (function() {
				return Y
			})), n.d(t, "I", (function() {
				return Q
			})), n.d(t, "i", (function() {
				return J
			})), n.d(t, "c", (function() {
				return Z
			})), n.d(t, "v", (function() {
				return $
			})), n.d(t, "u", (function() {
				return ee
			})), n.d(t, "H", (function() {
				return te
			})), n.d(t, "w", (function() {
				return ne
			})), n.d(t, "k", (function() {
				return re
			})), n.d(t, "G", (function() {
				return se
			})), n.d(t, "y", (function() {
				return ie
			})), n.d(t, "b", (function() {
				return oe
			})), n.d(t, "n", (function() {
				return ae
			})), n.d(t, "x", (function() {
				return ce
			})), n.d(t, "l", (function() {
				return de
			})), n.d(t, "K", (function() {
				return le
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/helpers/media/index.ts"),
				o = n("./src/reddit/models/PostCreationForm/index.ts"),
				a = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				d = n("./src/reddit/selectors/postDraft.ts"),
				l = n("./src/reddit/selectors/postGuidance.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/telemetry/index.ts"),
				f = n("./src/telemetry/models/PostComposer.ts"),
				h = n("./src/telemetry/models/PostDraft.ts");
			const g = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					prediction: "prediction",
					crosspost: "crosspost",
					talk: "talk"
				},
				_ = e => ({
					source: "post_composer",
					action: r.c.CLICK,
					...m.p(e),
					screen: m.db(e),
					correlationId: Object(s.c)(s.a.PostComposer)
				}),
				v = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === o.i.MARKDOWN ? "markdown" : "rte"
				},
				x = e => {
					Object(b.a)({
						noun: "cancel",
						..._(e)
					})
				},
				y = e => {
					Object(b.a)({
						noun: "discard",
						..._(e)
					})
				},
				E = e => t => ({
					..._(t),
					noun: "subreddit_choice",
					subreddit: e ? m.nb(t, e) : void 0,
					actionInfo: m.h(t)
				}),
				O = () => e => ({
					..._(e),
					noun: "subreddit_selector"
				}),
				j = (e, t) => {
					Object(b.a)({
						noun: "post_type_selector",
						postComposer: {
							type: g[t]
						},
						..._(e)
					})
				},
				C = () => e => ({
					noun: "add_option",
					..._(e)
				}),
				I = () => e => ({
					noun: "voting_length",
					..._(e)
				}),
				S = (e, t, n) => {
					"image_upload" === t || "video_upload" === t ? Object(b.a)({
						noun: t,
						..._(e)
					}) : Object(b.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: n ? "on" : "off"
						},
						..._(e)
					})
				},
				k = (e, t, n, r) => {
					Object(b.a)({
						noun: "post",
						subreddit: m.mb(e),
						postComposer: {
							type: t,
							...v(e, t)
						},
						post: n ? m.L(e, n) : null,
						..._(e),
						correlationId: r
					})
				},
				N = (e, t) => {
					const n = t === o.i.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(b.a)({
						noun: n,
						..._(e)
					})
				},
				w = (e, t) => {
					Object(b.a)({
						noun: "save",
						subreddit: m.mb(e),
						postComposer: {
							type: t,
							...v(e, t)
						},
						..._(e)
					})
				},
				T = (e, t) => {
					const n = e.uploads[t];
					n.error && Object(b.a)({
						..._(e),
						noun: "media",
						action: r.c.REJECT,
						actionInfo: {
							...m.d(e),
							reason: JSON.stringify(n.error)
						}
					})
				},
				P = (e, t) => {
					t.forEach(t => {
						const n = Object(i.g)(t.type);
						n && Object(b.a)({
							..._(e),
							action: r.c.DRAG,
							noun: n
						})
					})
				},
				L = (e, t, n) => {
					Object(b.a)({
						..._(e),
						noun: "input",
						postComposer: {
							inputType: n
						},
						action: t,
						actionInfo: m.h(e)
					})
				},
				D = (e, t, n) => {
					Object(b.a)({
						..._(e),
						noun: n,
						action: Object(f.getToggleAction)(t),
						actionInfo: m.h(e)
					})
				},
				R = e => M("input", e),
				A = () => M("add"),
				B = () => M("remove_image"),
				M = (e, t) => n => ({
					..._(n),
					noun: e,
					postComposer: {
						inputType: t,
						type: g.imageOnly
					},
					action: r.c.CLICK
				}),
				U = e => {
					Object(b.a)({
						..._(e),
						noun: "hide_oc_description",
						action: r.c.CLICK
					})
				},
				F = (e, t) => {
					if (t) {
						const n = m.nb(e, t);
						if (n) return {
							subreddit: n
						};
						const r = m.V(e, t);
						if (r) return {
							profile: r
						}
					}
				},
				W = (e, t) => {
					const n = l.e(e, {
							subredditName: t
						}),
						r = l.g(e);
					return {
						automoderator: {
							automod_post_guidance: !!n && n.postGuidanceConfig.length > 0,
							automod_post_guidance_ids: r
						}
					}
				},
				H = (e, t) => {
					const {
						draftId: n,
						destSubreddit: r
					} = t, s = Object(p.m)(e), i = Object(d.d)(e, {
						draftId: n
					}), o = {
						authorId: s ? s.id : void 0,
						createdTimestamp: i ? i.created : void 0,
						id: n || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case a.b.Link:
							o.type = h.DraftType.Link, o.urlLength = t.body.length;
							break;
						case a.b.Markdown:
							o.type = h.DraftType.Self, o.bodyTextLength = t.body.length;
							break;
						case a.b.RichText:
							o.type = h.DraftType.RichText, t.documentStats && (o.bodyTextLength = t.documentStats.textLength, o.numberRteImages = t.documentStats.rteImagesCount, o.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case a.b.Image:
							o.type = h.DraftType.Image;
							break;
						case a.b.Video:
							o.type = h.DraftType.Video
					}
					return {
						postDraft: o,
						...F(e, r.id)
					}
				},
				V = (e, t) => {
					const n = Object(p.m)(e),
						r = {
							authorId: n ? n.id : void 0,
							createdTimestamp: t.created,
							id: t.id,
							nsfw: t.isNSFW,
							originalContent: t.isOriginalContent,
							spoiler: t.isSpoiler,
							titleLength: t.title.length
						};
					switch (t.kind) {
						case a.b.Link:
							r.type = h.DraftType.Link, r.urlLength = (t.body || "").length;
							break;
						case a.b.Markdown:
							r.type = h.DraftType.Self, r.bodyTextLength = (t.body || "").length;
							break;
						case a.b.RichText:
							r.type = h.DraftType.RichText
					}
					return {
						postDraft: r,
						...F(e, t.subredditId)
					}
				},
				G = (e, t) => {
					Object(b.a)({
						noun: "post_guidance",
						..._(e),
						action: r.c.VIEW,
						actionInfo: {
							...m.d(e)
						},
						automoderator: {
							automod_post_guidance_ids: t
						}
					})
				},
				q = (e, t) => {
					Object(b.a)({
						noun: "draft_load",
						..._(e),
						...H(e, t)
					})
				},
				K = (e, t, n) => {
					Object(b.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						..._(e),
						...H(e, t),
						...W(e, n)
					})
				},
				z = (e, t) => {
					Object(b.a)({
						noun: "draft_delete",
						..._(e),
						...V(e, t)
					})
				},
				Y = e => {
					Object(b.a)({
						..._(e),
						noun: "social_connect_link",
						action: r.c.CLICK
					})
				},
				Q = (e, t) => {
					Object(b.a)({
						..._(e),
						noun: "twitter_share_checkbox",
						action: Object(f.getToggleAction)(t)
					})
				},
				J = (e, t, n) => {
					Object(b.a)({
						..._(e),
						...H(e, t),
						noun: "draft_share",
						action: n ? r.c.ENABLE : r.c.DISABLE
					})
				},
				Z = e => {
					Object(b.a)({
						..._(e),
						noun: "create_community",
						actionInfo: {
							...m.d(e),
							pageType: "post_select_community"
						}
					})
				},
				X = "community_recommendation",
				$ = () => e => ({
					..._(e),
					action: r.c.VIEW,
					noun: X,
					listing: {
						links: Object(c.c)(e).map(t => Object(u.I)(e, t.name))
					}
				}),
				ee = (e, t) => n => ({
					..._(n),
					action: r.c.CLICK,
					noun: X,
					actionInfo: {
						...m.d(n),
						position: t
					},
					subreddit: {
						name: e,
						id: Object(u.I)(n, e)
					}
				}),
				te = e => {
					Object(b.a)({
						..._(e),
						action: r.c.SKIP,
						noun: X
					})
				},
				ne = (e, t) => n => ({
					..._(n),
					action: r.c.VIEW,
					noun: `${X}_hover`,
					actionInfo: {
						...m.d(n),
						position: t
					},
					subreddit: {
						name: e,
						id: Object(u.I)(n, e)
					}
				}),
				re = e => t => ({
					..._(t),
					action: r.c.CLICK,
					noun: "draft_preview",
					actionInfo: {
						...m.d(t),
						count: e
					}
				}),
				se = e => t => ({
					..._(t),
					action: "add",
					noun: "flair",
					subreddit: m.nb(t, e)
				}),
				ie = () => e => ({
					..._(e),
					action: r.c.CLICK,
					noun: "flair_dropdown"
				}),
				oe = () => e => ({
					..._(e),
					action: "clear",
					noun: "flair"
				}),
				ae = () => e => ({
					..._(e),
					action: "search",
					noun: "flair"
				}),
				ce = e => {
					let {
						actionInfoType: t,
						subredditId: n = "",
						noun: i = "create_post"
					} = e;
					return e => ({
						..._(e),
						action: r.c.CLICK,
						noun: i,
						actionInfo: {
							...m.d(e),
							type: t
						},
						correlationId: Object(s.d)(s.a.PostComposer, !1),
						subreddit: n ? m.nb(e, n) : void 0
					})
				},
				de = () => e => ({
					..._(e),
					action: r.c.CLICK,
					noun: "edit_post"
				}),
				le = e => t => ({
					..._(t),
					action: "type",
					noun: "subreddit_search",
					actionInfo: {
						...m.d(t),
						type: e
					}
				})
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "p", (function() {
				return a
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "n", (function() {
				return d
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "o", (function() {
				return E
			}));
			var r = n("./src/reddit/models/Prediction/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = "poll",
				o = "predictions",
				a = e => ({
					...Object(s.p)(e),
					source: i,
					action: "view",
					noun: "predict_option_modal"
				}),
				c = e => {
					let {
						pollId: t,
						selectedNumberCoins: n,
						totalStakeAmount: r
					} = e;
					return e => ({
						...Object(s.p)(e),
						source: i,
						action: "confirm",
						noun: "predict",
						poll: Object(s.K)(e, t, !1, void 0, n),
						goldPurchase: {
							numberCoins: r
						}
					})
				},
				d = e => {
					let {
						pollId: t,
						selectedNumberTokens: n
					} = e;
					return e => ({
						...Object(s.p)(e),
						source: i,
						action: "confirm",
						noun: "predict",
						poll: Object(s.K)(e, t, !1, void 0, void 0, n)
					})
				},
				l = e => {
					let {
						pollId: t,
						currency: n,
						amount: o
					} = e;
					return e => {
						const a = n === r.a.Coins ? o : void 0,
							c = n === r.a.Tokens ? o : void 0;
						return {
							...Object(s.p)(e),
							source: i,
							action: "close",
							noun: "prediction_modal",
							poll: Object(s.K)(e, t, !1, a, c)
						}
					}
				},
				u = e => ({
					...Object(s.p)(e),
					source: i,
					action: "click",
					noun: "add_coins"
				}),
				m = e => {
					let {
						targetUserId: t
					} = e;
					return e => ({
						...Object(s.p)(e),
						source: o,
						action: "click",
						noun: "leaderboard_profile",
						targetUser: {
							id: t
						}
					})
				},
				p = e => {
					let {
						pageType: t
					} = e;
					return e => ({
						...Object(s.p)(e),
						source: o,
						action: "click",
						noun: "tournament",
						actionInfo: {
							pageType: t
						}
					})
				},
				b = () => e => ({
					...Object(s.p)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				f = () => e => ({
					...Object(s.p)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				h = () => e => ({
					...Object(s.p)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				g = e => t => ({
					...Object(s.p)(t),
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
					subreddit: Object(s.mb)(t)
				}),
				_ = () => e => ({
					...Object(s.p)(e),
					source: o,
					action: "click",
					noun: "next"
				}),
				v = () => e => ({
					...Object(s.p)(e),
					source: o,
					action: "click",
					noun: "add_more"
				}),
				x = () => e => ({
					...Object(s.p)(e),
					source: o,
					action: "click",
					noun: "start_tournament"
				}),
				y = () => e => ({
					...Object(s.p)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				E = () => e => ({
					...Object(s.p)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(s.mb)(e)
				})
		},
		"./src/reddit/helpers/trackers/predictionsLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
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
					...Object(r.p)(e),
					subreddit: Object(r.mb)(e)
				}),
				i = {
					source: "global",
					action: "view",
					noun: "screen"
				},
				o = () => e => ({
					...s(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "all_time_community_predictors"
					}
				}),
				a = () => e => ({
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
					...Object(r.p)(e, {
						isGVSEvent: !0
					}),
					subreddit: Object(r.mb)(e),
					...i,
					actionInfo: {
						pageType: "all_time_community_predictors_preview"
					}
				}),
				l = e => t => ({
					...Object(r.p)(t, {
						isGVSEvent: !0
					}),
					subreddit: Object(r.mb)(t),
					...i,
					actionInfo: {
						pageType: "tournament_leaderboard_preview",
						reason: "predictions_tab"
					},
					predictions: {
						tournamentId: e
					}
				}),
				u = () => e => ({
					...Object(r.p)(e, {
						isGVSEvent: !0
					}),
					subreddit: Object(r.mb)(e),
					...i,
					actionInfo: {
						pageType: "previous_tournaments"
					}
				}),
				m = () => e => ({
					...Object(r.p)(e, {
						isGVSEvent: !0
					}),
					subreddit: Object(r.mb)(e),
					...i,
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
					...Object(r.p)(s, {
						isGVSEvent: !0
					}),
					subreddit: Object(r.mb)(s),
					...i,
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
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return w
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "p", (function() {
				return L
			})), n.d(t, "q", (function() {
				return D
			})), n.d(t, "n", (function() {
				return R
			})), n.d(t, "r", (function() {
				return A
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "k", (function() {
				return M
			})), n.d(t, "o", (function() {
				return U
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "i", (function() {
				return W
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "b", (function() {
				return q
			})), n.d(t, "a", (function() {
				return K
			})), n.d(t, "m", (function() {
				return z
			})), n.d(t, "l", (function() {
				return Y
			})), n.d(t, "v", (function() {
				return Z
			})), n.d(t, "d", (function() {
				return $
			})), n.d(t, "t", (function() {
				return ne
			})), n.d(t, "s", (function() {
				return re
			})), n.d(t, "u", (function() {
				return se
			})), n.d(t, "g", (function() {
				return ie
			}));
			var r = n("./node_modules/lodash/pick.js"),
				s = n.n(r),
				i = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makePostDraftPageKey/index.ts"),
				a = n("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				c = n("./src/reddit/constants/parameters.ts"),
				d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = n("./src/reddit/helpers/routeKey/index.ts"),
				m = n("./src/reddit/helpers/trackers/postComposer.ts"),
				p = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				b = n("./src/reddit/models/Comment/index.ts"),
				f = n("./src/reddit/models/Post/index.ts"),
				h = n("./src/reddit/routes/subreddit/index.ts"),
				g = n("./src/reddit/selectors/profile.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/lib/makePostCreationPageKey/index.ts"),
				x = n("./src/lib/makeSearchKey/index.ts"),
				y = n("./src/reddit/constants/livebar.ts"),
				E = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				j = n("./src/reddit/helpers/trackers/searchResults.ts"),
				C = n("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				I = n("./src/reddit/selectors/postDraft.ts"),
				S = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				N = n("./src/telemetry/index.ts");
			const w = (e, t, n, r, d, m) => {
					const {
						route: g
					} = e, {
						name: _
					} = g.meta;
					if (!_) return;
					const y = t.platform.currentPage;
					switch (_) {
						case i.Tb.COMMENTS: {
							const {
								partialCommentId: s,
								partialPostId: i
							} = e.match.params, o = Object(f.y)(i), c = Object(u.a)(e, t, t.posts.models[o]), d = Object(a.a)(t.platform.currentPage);
							if (!c || d) return;
							const m = s && Object(b.h)(s),
								{
									sortToUse: p
								} = Object(l.a)(t, o);
							Object(N.a)(B(c, o, m, n, r, p)(t));
							break
						}
						case i.Tb.INDEX:
						case i.Tb.LISTING:
						case i.Tb.MULTIREDDIT:
						case i.Tb.SUBREDDIT: {
							const s = Object(u.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: o,
								queryParams: a,
								path: c
							} = e.match, {
								sort: d = (s.sort ? s.sort : i.bb.HOT)
							} = o, l = a.t, m = c === h.a;
							Object(N.a)(P({
								key: s.listingKey,
								sort: d,
								timerType: n,
								timerMillis: r,
								timeSort: l,
								isPredictionsPage: m
							})(t));
							break
						}
						case i.Tb.TOPIC: {
							const s = Object(u.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: o
							} = e.match, a = s.sort ? s.sort : i.cb, {
								sort: c = a
							} = o;
							Object(N.a)(P({
								key: s.listingKey,
								sort: c,
								timerType: n,
								timerMillis: r
							})(t));
							break
						}
						case i.Tb.PROFILE_OVERVIEW: {
							const s = Object(u.d)(e, t);
							if (!s) return;
							const {
								params: o,
								queryParams: a
							} = e.match, {
								sort: c = i.Kb
							} = o, d = a.t;
							Object(N.a)(L(s, c, n, r, d)(t));
							break
						}
						case i.Tb.PROFILE_POSTS: {
							const s = Object(u.d)(e, t);
							if (!s) return;
							const {
								queryParams: o
							} = e.match, {
								sort: a = i.Kb,
								t: c = i.Lb
							} = o;
							Object(N.a)(D(s, a, n, r, c)(t));
							break
						}
						case i.Tb.PROFILE_COMMENTS: {
							const s = Object(u.d)(e, t);
							if (!s) return;
							const {
								queryParams: o
							} = e.match, {
								sort: a = i.Kb,
								t: c = i.Lb
							} = o;
							Object(N.a)(R(s, a, n, r, c)(t));
							break
						}
						case i.Tb.PROFILE_PRIVATE: {
							const s = Object(u.d)(e, t);
							if (!s) return;
							Object(N.a)(A(s)(r, n)(t));
							break
						}
						case i.Tb.FOLLOWERS:
							V(t);
							break;
						case i.Tb.PROFILE_MODERATION:
							m && U(t, !0);
							break;
						case i.Tb.SETTINGS: {
							const s = e;
							Object(N.a)(J(n, r)(t)), s.match.params.page === i.jc.Profile && Object(p.l)(t);
							break
						}
						case i.Tb.POST_CREATION:
							if (m && d) {
								const e = Object(v.a)(d);
								Object(N.a)(M(e, n, r)(t))
							}
							break;
						case i.Tb.POST_DRAFT: {
							const {
								draftId: s
							} = e.match.params, i = Object(o.a)(e.match.params);
							if (!i) return;
							G(t, i, s, n, r);
							break
						}
						case i.Tb.SUBREDDIT_WIKI:
							Object(N.a)(X(n, r)(t));
							break;
						case i.Tb.COINS:
							Object(N.a)(q(n, r)(t)), Object(N.a)(K()(t));
							break;
						case i.Tb.PREMIUM:
							Object(N.a)(z(n, r)(t)), Object(N.a)(Y()(t));
							break;
						case i.Tb.APPEAL:
							Object(N.a)(Q(n, r)(t));
							break;
						case i.Tb.INBOX_PAGES:
							m && H(t);
							break;
						case i.Tb.MODERATION_PAGES:
							m && F(t, !0, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case i.Tb.COLLECTION_COMMENTS:
							m && se(t, !0);
							break;
						case i.Tb.MODQUEUE_PAGES:
							m && W(t, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case i.Tb.SEARCH_RESULTS:
							if (m) {
								const i = Object(k.mb)(t),
									o = Object(k.rb)(t),
									a = Object(u.e)(e, i && o);
								if (!a) return;
								Object(N.a)(ne(a, Object(x.e)(s()(y && y.queryParams || {}, c.y)), n, r, y)(t))
							}
							break;
						case i.Tb.GEOTAGGING:
							m && Object(N.a)($()(t));
							break;
						case i.Tb.SUBREDDIT_CREATION:
							m && Object(N.a)(Z()(t));
							break;
						case i.Tb.MOD_LISTING:
							m && ie(t, !0)
					}
				},
				T = e => ({
					...S.p(e, {
						isGVSEvent: !0
					}),
					userPreferences: S.ub(e)
				}),
				P = e => {
					let {
						key: t,
						sort: n,
						timerType: r,
						timerMillis: s,
						timeSort: i,
						flairTitle: o,
						isPredictionsPage: a
					} = e;
					return e => {
						const {
							api: c
						} = e.listings.postOrder, d = !c.error[t] && !c.pending[t], l = a ? {
							paneName: "predictions",
							reason: "predictions_tournament"
						} : {}, u = Object(C.b)(e);
						return {
							source: "global",
							action: "view",
							noun: "screen",
							...T(e),
							actionInfo: S.d(e, {
								success: d,
								...l
							}),
							customFeed: S.n(e),
							listing: S.A(e, t, {
								sort: n,
								sortTime: i
							}),
							subreddit: S.mb(e),
							timer: S.sb(r, s),
							userSubreddit: S.vb(e),
							adblock: S.e(e),
							postFlair: {
								title: o
							},
							predictions: a ? Object(S.S)(e) : void 0,
							...(null == u ? void 0 : u.internalLinkUrl) ? {
								seo: u
							} : void 0
						}
					}
				},
				L = (e, t, n, r, s) => i => {
					const o = S.A(i, e);
					o && (o.sort = t, s && (o.sortTime = s));
					const {
						api: a
					} = i.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...T(i),
						actionInfo: S.d(i, {
							success: c
						}),
						profile: S.U(i),
						snoovatar: S.jb(i),
						subreddit: S.mb(i),
						timer: S.sb(n, r),
						userSubreddit: S.vb(i),
						adblock: S.e(i)
					}
				},
				D = (e, t, n, r, s) => i => {
					const o = S.A(i, e);
					o && (o.sort = t, s && (o.sortTime = s));
					const {
						api: a
					} = i.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...T(i),
						actionInfo: S.d(i, {
							success: c
						}),
						profile: S.U(i),
						subreddit: S.mb(i),
						timer: S.sb(n, r),
						userSubreddit: S.vb(i),
						adblock: S.e(i)
					}
				},
				R = (e, t, n, r, s) => i => {
					const o = S.X(i, e);
					o && (o.sort = t, s && (o.sortTime = s));
					const {
						api: a
					} = i.profileCommentsPage, c = !a.error[e] && !a.pending[e];
					return {
						listing: o,
						source: "global",
						action: "view",
						noun: "screen",
						...T(i),
						actionInfo: S.d(i, {
							success: c
						}),
						profile: S.U(i),
						subreddit: S.mb(i),
						timer: S.sb(n, r),
						userSubreddit: S.vb(i),
						adblock: S.e(i)
					}
				},
				A = e => (t, n) => r => {
					const s = !r.profilePrivatePage.api.error[e] && !r.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...T(r),
						actionInfo: S.d(r, {
							success: s
						}),
						profile: S.U(r),
						subreddit: S.mb(r),
						timer: S.sb(n, t),
						userSubreddit: S.vb(r),
						adblock: S.e(r)
					}
				},
				B = (e, t, n, r, s, i) => o => {
					const {
						api: a
					} = o.pages.comments, c = !a.error[e] && !a.pending[e], d = new URLSearchParams(window.location.search).has(y.a), l = Object(C.b)(o), u = {
						source: "global",
						action: "view",
						noun: "screen",
						...T(o),
						actionInfo: S.d(o, {
							success: c,
							...d ? {
								reason: "live_bar"
							} : {}
						}),
						post: S.L(o, t),
						profile: S.U(o),
						subreddit: S.mb(o),
						timer: S.sb(r, s),
						userSubreddit: S.vb(o),
						adblock: S.e(o),
						postEvent: S.O(o, {
							postId: t
						}),
						postCollection: S.N(o, {
							postId: t
						}),
						listing: S.A(o, void 0, {
							sort: i
						})
					};
					return n && (u.comment = S.i({
						state: o,
						commentId: n
					})), (null == l ? void 0 : l.internalLinkUrl) && (u.seo = l), u
				},
				M = (e, t, n) => r => {
					const s = r.creations.api.page.fetched[e],
						i = r.platform.currentPage ? r.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...T(r),
						actionInfo: S.d(r, {
							success: s
						}),
						post: i ? S.L(r, i) : void 0,
						subreddit: S.mb(r),
						timer: S.sb(t, n),
						userSubreddit: S.vb(r),
						adblock: S.e(r)
					}
				},
				U = (e, t) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: S.d(e, {
							success: t
						})
					})
				},
				F = (e, t, n, r) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: S.d(e, {
							success: t
						}),
						profile: S.V(e, Object(g.o)(e, r)),
						subreddit: S.nb(e, Object(_.I)(e, n)),
						userSubreddit: S.vb(e),
						adblock: S.e(e)
					})
				},
				W = (e, t, n) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						profile: S.V(e, Object(g.o)(e, n)),
						subreddit: S.nb(e, Object(_.I)(e, t)),
						userSubreddit: S.vb(e),
						adblock: S.e(e)
					})
				},
				H = e => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: S.d(e)
					})
				},
				V = e => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: S.d(e)
					})
				},
				G = (e, t, n, r, s) => {
					const i = e.creations.api.page.pending[t],
						o = !e.creations.api.page.error[t] && !i && !!n,
						a = Object(I.h)(e, n);
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: S.d(e, {
							success: o
						}),
						subreddit: S.mb(e),
						timer: S.sb(r, s),
						userSubreddit: S.vb(e),
						adblock: S.e(e),
						...a ? Object(m.r)(e, a) : {}
					})
				},
				q = (e, t) => n => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(E.c)(E.a.GoldPayment),
					...T(n),
					timer: S.sb(e, t),
					adblock: S.e(n)
				}),
				K = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(e)
				}),
				z = (e, t) => n => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(E.c)(E.a.GoldPayment),
					...T(n),
					timer: S.sb(e, t),
					adblock: S.e(n)
				}),
				Y = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(e)
				}),
				Q = (e, t) => n => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...T(n),
					timer: S.sb(e, t)
				}),
				J = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(n),
					timer: S.sb(e, t)
				}),
				Z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(e)
				}),
				X = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(n),
					customFeed: S.n(n),
					subreddit: S.mb(n),
					timer: S.sb(e, t),
					userSubreddit: S.vb(n),
					adblock: S.e(n)
				}),
				$ = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...T(e)
				}),
				ee = {
					source: "global",
					action: d.c.VIEW,
					noun: "screen"
				},
				te = e => !!e && {
					correlationId: Object(E.c)(E.a.SearchResults)
				},
				ne = (e, t, n, r, s, o) => a => {
					var c, d;
					let l = !0;
					if (t.type.indexOf(i.ic.Posts) > -1) {
						const {
							api: t
						} = a.listings.listingOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(i.ic.Subreddits) > -1 || t.type.indexOf(i.ic.Users) > -1) {
						const {
							api: t
						} = a.listings.postOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					const u = S.I(a, s);
					return {
						...j.f(a, t),
						...ee,
						...T(a),
						actionInfo: S.d(a, {
							success: l,
							paneName: u
						}),
						timer: S.sb(n, r),
						search: {
							...S.eb(a, t, O.a.SERP, s || void 0),
							sort: null !== (c = t.sort) && void 0 !== c ? c : i.Vb,
							range: null !== (d = t.t) && void 0 !== d ? d : i.Wb
						},
						...te(o),
						userPreferences: S.hb(a)
					}
				},
				re = (e, t, n) => r => ({
					...T(r),
					...ee,
					actionInfo: {
						...S.d(r),
						pageType: "search_dropdown"
					},
					search: S.eb(r, e, O.a.Typeahead, t || void 0),
					...te(n),
					userPreferences: S.hb(r)
				}),
				se = (e, t) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: S.d(e, {
							success: t
						})
					})
				},
				ie = (e, t) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...T(e),
						actionInfo: S.d(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/socialLinks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = e => {
					let {
						socialLinkType: t,
						outboundUrl: n,
						name: r,
						position: s,
						isNew: i,
						currentList: o
					} = e;
					return {
						socialLink: {
							type: t,
							url: n,
							name: r,
							position: s,
							isNew: i,
							currentList: o
						}
					}
				},
				o = e => t => ({
					...Object(s.p)(t),
					action: r.c.CLICK,
					noun: "add_social_link",
					source: e
				}),
				a = e => t => ({
					...Object(s.p)(t),
					action: r.c.CLICK,
					noun: "social_link",
					source: "add_social_link",
					...i({
						socialLinkType: e
					})
				}),
				c = e => t => ({
					...Object(s.p)(t),
					action: r.c.CLICK,
					noun: "save",
					source: "add_social_link",
					...i(e)
				}),
				d = e => t => ({
					...Object(s.p)(t),
					action: r.c.CLICK,
					noun: "edit_social_link",
					source: "profile_settings",
					...i(e)
				}),
				l = e => t => ({
					...Object(s.p)(t),
					action: r.c.CLICK,
					noun: "delete_social_link",
					source: "profile_settings",
					...i(e)
				}),
				u = e => t => ({
					...Object(s.p)(t),
					action: r.c.CLICK,
					noun: "social_link",
					source: "profile",
					profile: Object(s.U)(t),
					...i(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
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
			const i = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...s.p(t),
					actionInfo: s.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.d)(r.a.SubredditCreation, !0)
				}),
				o = (e, t, n) => i => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...s.p(i),
					actionInfo: s.d(i, {
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
				a = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...s.p(e),
					actionInfo: s.d(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				c = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...s.p(n),
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
					...s.p(e),
					actionInfo: s.d(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...s.p(e),
					actionInfo: s.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...s.p(e),
					actionInfo: s.d(e)
				}),
				m = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...s.p(e),
					actionInfo: s.d(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "g", (function() {
				return a
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
				return f
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "o", (function() {
				return C
			}));
			var r = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					...s.p(e),
					subreddit: s.mb(e),
					userSubreddit: s.vb(e)
				}),
				o = () => e => ({
					source: "wiki",
					action: "click",
					noun: "edit",
					...i(e)
				}),
				a = () => e => ({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki",
					...i(e)
				}),
				c = e => t => ({
					source: "wiki",
					action: "click",
					noun: e,
					...i(t)
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
				f = c("remove_wiki_page_contributor"),
				h = c("save_wiki_page_settings"),
				g = c("copy_url"),
				_ = c("add_wiki_subreddit_contributor"),
				v = c("remove_wiki_subreddit_contributor"),
				x = c("ban_wiki_contributor"),
				y = c("unban_wiki_contributor"),
				E = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				O = {
					[r.a.Inherit]: "subreddit_wiki_perms",
					[r.a.Contributors]: "only_wiki_contributors",
					[r.a.Mods]: "only_mods"
				},
				j = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: s.d(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				C = e => t => ({
					...i(t),
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
				return i
			}));
			var r = n("./src/reddit/constants/promo.ts"),
				s = n("./src/reddit/hooks/usePromoContext.ts");

			function i(e) {
				const {
					promos: t
				} = Object(s.a)();
				return !!e && t.get(e) === r.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function i(e) {
				const t = Object(r.e)(s.a) === e,
					n = Object(r.e)(s.c) === e,
					i = Object(r.e)(s.e) === e;
				return t || n || i
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
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js");
			t.a = function(e, t, n) {
				Object(r.useEffect)(() => {
					const r = e && e.current;
					if (!r || "undefined" == typeof IntersectionObserver) return;
					const s = new IntersectionObserver(t, n);
					return s.observe(r), () => {
						s.unobserve(r)
					}
				}, [e, t, n])
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
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function i() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				const [t, n] = s.a.useState(e);
				return [t, () => n(!0), () => n(!1)]
			}
		},
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./src/reddit/components/TrackingHelper/index.tsx");
			const s = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var i = n("./src/reddit/helpers/trackers/socialLinks.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n, r, s) => a => {
				const c = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(o.p)(a),
					actionInfo: Object(o.d)(a),
					geo: Object(o.u)(a),
					screen: Object(o.db)(a),
					subreddit: Object(o.mb)(a),
					outbound: Object(o.H)(a, e, t, r, n)
				};
				return n && (c.comment = Object(o.i)({
					state: a,
					commentId: n
				})), r && (c.post = Object(o.L)(a, r)), s && (c.socialLink = Object(i.g)({
					socialLinkType: s
				}).socialLink), c
			};
			var c = n("./src/lib/serviceWorker/index.ts"),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				u = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				m = n("./src/telemetry/models/Event.ts");
			const p = () => {
				const e = Object(d.f)();
				return t => {
					const n = t(e.getState()),
						r = m.g(n),
						s = Object(l.a)(r),
						i = Object(u.b)(s);
					Object(c.b)("sendV2EventsData", {
						data: s,
						headers: i
					})
				}
			};

			function b() {
				const e = Object(r.b)(),
					t = p();
				return (n, r, i, o, c) => {
					var d, l;
					if (r && function(e) {
							return !e.startsWith("/") && null == e.match(s)
						}(n)) {
						const s = a(n, r, i, o, c);
						(null === (l = null === (d = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === d ? void 0 : d.serviceWorker) || void 0 === l ? void 0 : l.controller) ? t(s): e(s)
					}
				}
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = r.ib
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(r.useContext)(s.a)
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = r.b
		},
		"./src/reddit/hooks/useWindowEvent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js");
			const s = (e, t, n) => {
				Object(r.useEffect)(() => (window.addEventListener(e, t, n), () => window.removeEventListener(e, t)), [e, t, n])
			};
			t.a = s;
			const i = (e, t) => s("keydown", e, t)
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: Object(i.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || o.a.gold
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(a);

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
				className: Object(i.a)(Object(o.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.a = e => {
				let {
					compact: t,
					isFilled: n,
					...r
				} = e;
				return t ? s.a.createElement("span", d({}, r, {
					className: Object(i.a)(c.a.compactDownvoteWrapper, r.className)
				}), s.a.createElement(l, {
					className: c.a.compactDownvote,
					isFilled: n
				})) : s.a.createElement("span", d({}, r, {
					className: Object(i.a)(c.a.downvoteWrapper, r.className)
				}), s.a.createElement(l, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(i.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(i.b)("message",e.isFilled)} ${e.className}`
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(a);

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
				className: Object(i.a)(Object(o.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.b = e => {
				let {
					compact: t,
					isFilled: n,
					...r
				} = e;
				return t ? s.a.createElement("span", d({}, r, {
					className: Object(i.a)(c.a.compactUpvoteWrapper, r.className)
				}), s.a.createElement(l, {
					className: c.a.compactUpvote,
					isFilled: n
				})) : s.a.createElement("span", d({}, r, {
					className: Object(i.a)(c.a.upvoteWrapper, r.className)
				}), s.a.createElement(l, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/fonts/helpers.m.less": function(e, t, n) {
			e.exports = {
				TooltipDesc: "_37iEJpUpWXN00_fpZKHglg",
				tooltipDesc: "_37iEJpUpWXN00_fpZKHglg"
			}
		},
		"./src/reddit/icons/fonts/helpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/icons/fonts/helpers.m.less"),
				o = n.n(i),
				a = n("./src/lib/constants/icons.ts"),
				c = n("./src/lib/lessComponent.tsx");
			const d = (e, t) => `icon icon-${e}${t&&!e.includes("fill")&&a.a[`${e}_fill`]?"_fill":""}`,
				l = c.a.wrapped(e => s.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", o.a)
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const c = e => {
				let {
					className: t,
					isFilled: n,
					name: r,
					...c
				} = e;
				return s.a.createElement("i", a({
					className: Object(i.a)(t, Object(o.b)(r, n))
				}, c))
			};
			c.displayName = "Icon";
			const d = (e, t) => n => s.a.createElement(c, a({
				name: e
			}, t, n, {
				isFilled: (null == t ? void 0 : t.isFilled) || (null == n ? void 0 : n.isFilled),
				className: Object(i.a)(null == t ? void 0 : t.className, null == n ? void 0 : n.className)
			}));
			t.a = c
		},
		"./src/reddit/icons/svgs/ChatBubbles/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => e.isFilled ? s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M4.88595 13.444C4.36701 13.2885 3.86823 13.0723 3.39995 12.8L1.14695 13.362C1.04227 13.3879 0.932671 13.3863 0.828782 13.3574C0.724894 13.3285 0.630237 13.2732 0.553985 13.1969C0.477733 13.1207 0.422472 13.026 0.393557 12.9221C0.364642 12.8183 0.363055 12.7087 0.388949 12.604L0.949948 10.354C0.0362578 8.79992 -0.232941 6.94998 0.199949 5.19997C0.500428 3.96481 1.14111 2.83861 2.04929 1.94916C2.95748 1.05971 4.09679 0.442643 5.33795 0.167974C6.47394 -0.0883142 7.65628 -0.0533851 8.77516 0.269517C9.89404 0.59242 10.9132 1.19282 11.7379 2.01497C12.5377 2.81615 13.1259 3.80335 13.4499 4.88797C12.727 4.8582 12.0031 4.9207 11.2959 5.07397C9.80268 5.40459 8.43199 6.14717 7.33944 7.21745C6.24689 8.28772 5.47624 9.64283 5.11495 11.129C4.93328 11.8866 4.85623 12.6655 4.88595 13.444ZM17.9859 8.26497C17.1609 7.44322 16.1418 6.84307 15.023 6.5202C13.9042 6.19732 12.722 6.16216 11.5859 6.41797C10.3453 6.69314 9.20666 7.31044 8.29905 8.19985C7.39143 9.08926 6.75119 10.2152 6.45095 11.45C6.01885 13.1986 6.28766 15.0469 7.19995 16.6L6.63595 18.852C6.60975 18.9567 6.61112 19.0664 6.63993 19.1704C6.66873 19.2745 6.72399 19.3693 6.80032 19.4456C6.87665 19.5219 6.97145 19.5772 7.07548 19.606C7.17951 19.6348 7.28923 19.6362 7.39395 19.61L9.64695 19.047C10.7002 19.6709 11.9018 20.0001 13.1259 20C13.6895 19.9994 14.2511 19.9323 14.7989 19.8C16.0342 19.5 17.1607 18.8597 18.0505 17.9519C18.9403 17.0441 19.5578 15.905 19.8329 14.664C20.0882 13.5282 20.0529 12.3463 19.7302 11.2278C19.4076 10.1093 18.808 9.09026 17.9869 8.26497H17.9859Z"
			})) : s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12.504 1.40581C10.8548 0.436577 8.91582 0.0822804 7.03046 0.405669C5.1451 0.729058 3.43503 1.70926 2.20312 3.17267C0.971219 4.63608 0.296983 6.48826 0.299833 8.40115H0.299805L0.299872 8.40828C0.313102 9.81313 0.695242 11.187 1.40423 12.3936L0.35366 15.2932C0.235566 15.6192 0.315178 15.984 0.558332 16.2311C0.801486 16.4782 1.16495 16.5636 1.49275 16.4508L4.41155 15.4461C4.8205 15.6752 5.24681 15.8723 5.68667 16.0356C6.15267 16.2085 6.67064 15.971 6.84359 15.505C7.01655 15.039 6.77899 14.521 6.31299 14.348C5.85073 14.1765 5.40714 13.9583 4.98911 13.6968C4.75881 13.5527 4.47577 13.5204 4.21892 13.6088L2.68747 14.1359L3.246 12.5944C3.34354 12.3252 3.30716 12.0256 3.14802 11.7876C2.47615 10.7827 2.1119 9.60363 2.09983 8.3949C2.09845 6.90836 2.62279 5.46917 3.58017 4.33187C4.53832 3.19367 5.86837 2.43129 7.33476 2.17976C8.80115 1.92824 10.3092 2.2038 11.5919 2.95764C12.8746 3.71149 13.8491 4.89497 14.3428 6.29846C14.5078 6.76735 15.0216 7.01375 15.4905 6.84881C15.9594 6.68386 16.2058 6.17004 16.0408 5.70115C15.4061 3.89665 14.1531 2.37504 12.504 1.40581ZM18.8305 8.17201C17.1805 7.45435 15.3385 7.30651 13.5952 7.75182C11.8518 8.19714 10.3064 9.21026 9.20265 10.6313C8.09895 12.0524 7.49983 13.8005 7.49983 15.5998H7.49979L7.49987 15.6083C7.5131 17.0132 7.89524 18.387 8.60423 19.5937L7.55365 22.4932C7.43556 22.8192 7.51517 23.184 7.75833 23.4311C8.00148 23.6782 8.36494 23.7637 8.69274 23.6508L11.6074 22.6476C13.0373 23.4576 14.6834 23.8153 16.3272 23.6671C18.1192 23.5055 19.8065 22.7519 21.1227 21.525C22.4389 20.2982 23.3092 18.668 23.5961 16.8917C23.8831 15.1154 23.5705 13.2941 22.7075 11.7152C21.8446 10.1363 20.4805 8.88968 18.8305 8.17201ZM14.0406 9.49583C15.3966 9.14947 16.8292 9.26445 18.1126 9.82264C19.3959 10.3808 20.4569 11.3504 21.1281 12.5785C21.7992 13.8065 22.0424 15.2231 21.8192 16.6046C21.596 17.9862 20.9191 19.2541 19.8954 20.2083C18.8717 21.1625 17.5594 21.7487 16.1655 21.8744C14.7717 22.0001 13.3757 21.658 12.1978 20.9023C11.9661 20.7537 11.6792 20.7192 11.4189 20.8088L9.88747 21.336L10.446 19.7944C10.5435 19.5252 10.5072 19.2256 10.348 18.9876C9.67627 17.9829 9.31203 16.8041 9.29983 15.5956C9.30077 14.1976 9.76668 12.8396 10.6242 11.7354C11.4827 10.6302 12.6847 9.84218 14.0406 9.49583Z"
			}))
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(i.a)(a.a.chevron, e.className),
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
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
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

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"
			}))
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(o);

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
					className: Object(i.a)(a.a.dropdown, {
						[a.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/GarlicBread/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 130 130"
			}, s.a.createElement("g", {
				id: "Layer_1-2"
			}, s.a.createElement("polygon", {
				fill: "#ff4500",
				points: "104 26 104 52 104 78 104 104 78 104 52 104 52 130 78 130 104 130 130 130 130 104 130 78 130 52 130 26 104 26"
			}), s.a.createElement("rect", {
				x: "52",
				y: "52",
				width: "26",
				height: "26"
			}), s.a.createElement("polygon", {
				fill: "#ff4500",
				points: "78 0 52 0 26 0 0 0 0 26 0 52 0 78 0 104 0 130 26 130 26 104 26 78 26 52 26 26 52 26 78 26 104 26 104 0 78 0"
			}), s.a.createElement("path", {
				fill: "#ffffff",
				d: "m78,26H26v104h26v-26h52V26h-26Zm0,52h-26v-26h26v26Z"
			})))
		},
		"./src/reddit/icons/svgs/NSFWWarningIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./node_modules/react/index.js"),
				i = n.n(s);
			! function(e) {
				e.BLACK = "#0F1A1C", e.DEFAULT = "#FF585B"
			}(r || (r = {}));
			t.b = e => i.a.createElement("svg", {
				className: e.className,
				fill: "none",
				height: "60",
				viewBox: "0 0 60 60",
				xmlns: "http://www.w3.org/2000/svg",
				width: "60"
			}, i.a.createElement("path", {
				d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
				fill: e.fill || r.DEFAULT
			}), i.a.createElement("path", {
				d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
				fill: e.fill || r.DEFAULT
			}), i.a.createElement("path", {
				d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
				fill: e.fill || r.DEFAULT
			}))
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.m.less": function(e, t, n) {
			e.exports = {
				defaultInactiveState: "_1g3Xfh9mljLHWv24M9A3Rw",
				outline: "_3SlBAJb2MbUHwgBZFH8eL7",
				highlighted: "_1-JQy00VxG8hpTxxdxV32y"
			}
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				a = n.n(o);
			t.a = Object(r.forwardRef)((e, t) => {
				let {
					className: n,
					isHighlighted: r,
					outlineClassName: o
				} = e;
				return s.a.createElement("svg", {
					className: Object(i.a)(a.a.defaultInactiveState, n),
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg",
					width: "12",
					height: "12",
					ref: t
				}, s.a.createElement("circle", {
					cx: "6",
					cy: "6",
					r: "4"
				}), s.a.createElement("path", {
					className: Object(i.a)(a.a.outline, o, {
						[a.a.highlighted]: r
					}),
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
				}))
			})
		},
		"./src/reddit/icons/svgs/PrivateKey/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/chat/controls/Svg/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(i.a, o({}, e, {
				viewBox: "-1 -1 21 21"
			}), s.a.createElement("path", {
				d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
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
		"./src/reddit/icons/svgs/SnooSilhouette/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 320 320",
				xmlns: "http://www.w3.org/2000/svg",
				style: e.style
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"
			}), s.a.createElement("path", {
				d: "m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
			}), s.a.createElement("path", {
				d: "m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"
			}), s.a.createElement("path", {
				d: "m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
			}), s.a.createElement("path", {
				d: "m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
			}), s.a.createElement("path", {
				d: "m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
			}), s.a.createElement("path", {
				d: "m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
			}), s.a.createElement("path", {
				d: "m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"
			}), s.a.createElement("path", {
				d: "m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
			}), s.a.createElement("path", {
				d: "m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
			}), s.a.createElement("path", {
				d: "m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
			}), s.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
			}), s.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z",
				fill: "none"
			}), s.a.createElement("path", {
				d: "m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
			}), s.a.createElement("circle", {
				cx: "238.47",
				cy: "80.13",
				r: "22.93"
			}), s.a.createElement("path", {
				d: "m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
			})))
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/models/Theme/index.ts"),
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
			const m = Object(o.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: r,
					theme: o,
					...d
				} = e, m = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(a.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return s.a.createElement("div", u({
					className: Object(i.a)(l.a.backgroundContainer, n),
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
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
			const b = Object(d.v)(),
				f = Object(o.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.U)(e, t)
				}),
				h = Object(i.b)(f);
			t.a = b(h(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: r,
					dispatch: i,
					fitPageToContent: o,
					forcedLayout: l,
					isCollectionLayout: u,
					isEditing: b,
					layout: f,
					pageLayer: h,
					...g
				} = e;
				return s.a.createElement("div", p({
					className: Object(a.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: f === c.g.Large || Object(d.R)(h),
						[m.a.mDisableFullScreen]: r && !u,
						[m.a.mClassicWidth]: u,
						[m.a.mIsEditing]: !!b,
						[m.a.mCanFlexFullWidth]: !o,
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
				i = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				o = n("./src/reddit/layout/page/Listing/Content.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./node_modules/classnames/index.js"),
				p = n.n(m),
				b = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = n("./src/lib/constants/icons.ts"),
				h = n("./src/reddit/components/SubredditIcon/index.tsx"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/components/BackToSubreddit/index.m.less"),
				v = n.n(_);
			var x = e => {
					const {
						subredditName: t
					} = e, n = `/${t}`;
					return s.a.createElement(b.a, {
						className: v.a.backToSubreddit,
						to: n
					}, s.a.createElement("div", {
						className: v.a.innerContainer
					}, s.a.createElement(g.a, {
						name: f.a.back,
						className: p()(v.a.content, v.a.back)
					}), s.a.createElement(h.b, {
						className: p()(v.a.content, v.a.subredditIcon)
					}), s.a.createElement("span", {
						className: p()(v.a.content, v.a.title)
					}, t)))
				},
				y = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				E = n("./src/reddit/layout/page/Listing/index.m.less"),
				O = n.n(E);
			t.a = e => {
				const {
					backgroundColor: t,
					backToSubredditName: n,
					className: m,
					containerRef: p,
					content: b,
					contentBanner: f,
					contentClassName: h,
					contentNavBar: g,
					disableFullscreen: _,
					fitPageToContent: v,
					forcedLayout: E,
					hideOnlyChildMargin: j,
					isCollectionLayout: C,
					isPageSwapped: I,
					maxWidth: S,
					navBar: k,
					redditStyle: N,
					sidebar: w,
					sidebars: T,
					trendingUnit: P,
					subredditId: L
				} = e, D = P ? "28px" : "0", R = I ? {
					marginRight: `${c.p}px`,
					marginTop: D
				} : {
					marginLeft: `${c.p}px`,
					marginTop: D
				}, A = w && s.a.createElement("div", {
					className: Object(a.a)(O.a.sidebar, C ? O.a["m-collectionLayout"] : O.a.defaultLayout),
					style: R
				}, w), B = s.a.createElement(o.a, {
					hideOnlyChildMargin: j,
					className: h,
					disableFullscreen: _,
					fitPageToContent: v,
					forcedLayout: E,
					isCollectionLayout: C
				}, f, n && s.a.createElement(x, {
					subredditName: n
				}), b);
				let M;
				M = T ? s.a.createElement(s.a.Fragment, null, T[0], B, T[1]) : I ? s.a.createElement(s.a.Fragment, null, A, B) : s.a.createElement(s.a.Fragment, null, B, A);
				const U = _ ? `${S||l.a+2*c.l}px` : "100%",
					F = Object(r.useContext)(u.a);
				return s.a.createElement(y.a, {
					subredditId: L
				}, s.a.createElement("div", {
					className: Object(a.a)(O.a.outerContainer, d.i, m, {
						[O.a.outerContainerExp]: F
					}),
					ref: p
				}, s.a.createElement(i.a, {
					className: d.h,
					redditStyle: N,
					backgroundColor: t
				}), s.a.createElement("div", {
					className: O.a.innerContainer
				}, k, g, (e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null)(e), s.a.createElement("div", {
					style: {
						maxWidth: U
					}
				}, P), s.a.createElement("div", {
					className: O.a.body,
					style: {
						maxWidth: U
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
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				i = n.n(s);
			t.a = r.a.button("inlineButton", i.a)
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
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(a);
			t.a = Object(i.a)(e => s.a.createElement("div", {
				className: Object(o.a)(c.a.expandedCenterContainer, e.className)
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
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(a);
			t.a = Object(i.a)(e => s.a.createElement("div", {
				className: Object(o.a)(c.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/ApiRequestState/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var r, s = n("./node_modules/uuid/dist/esm-browser/v4.js");
			! function(e) {
				e[e.Pending = 0] = "Pending", e[e.Complete = 1] = "Complete", e[e.Failed = 2] = "Failed"
			}(r || (r = {}));
			const i = () => Object(s.a)()
		},
		"./src/reddit/models/Badge/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s, i, o = n("./src/config.ts");

			function a(e) {
				return "userId" in e
			}

			function c(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function d(e, t, n) {
				const r = n.media[0],
					s = Object.keys(r);
				if (r["0x0"]) return r["0x0"];
				let i = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (s.forEach(n => {
						const s = r[n],
							[o, a] = n.split("x").map(e => parseInt(e));
						(o < i.width && o >= e || a < i.height && a >= t) && (i = {
							height: a,
							width: o,
							url: s
						})
					}), !i.url && s.length) {
					const e = Object.keys(r)[0],
						t = r[e],
						[n, s] = e.split("x").map(e => parseInt(e));
					i = {
						height: s,
						width: n,
						url: t
					}
				}
				return i.url
			}

			function l(e) {
				return e.startsWith("https") ? e : `${o.a.assetPath}/${e}`
			}

			function u(e, t, n) {
				const r = d(e, t, n),
					s = d(2 * e, 2 * t, n);
				return {
					url: l(r),
					url2x: l(s)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(r || (r = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages", e.ChatV2UnreadMessages = "chatV2UnreadMessages"
			}(s || (s = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(i || (i = {}))
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
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var r, s, i, o, a = n("./src/reddit/models/FeedElement/index.ts");

			function c(e) {
				return e.__typename === a.a.InboxNotificationCollection
			}! function(e) {
				e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.ChatRequest = "CHAT_REQUEST", e.ChatAcceptInvite = "CHAT_ACCEPT_INVITE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.ModeratedSrViralCommentPost = "MODERATED_SR_VIRAL_COMMENT_POST", e.OneOff = "ONE_OFF", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.RedditLore = "REDDIT_LORE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.TalkLive = "TALK_LIVE", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
			}(r || (r = {})),
			function(e) {
				e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.Lore = "LORE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
			}(s || (s = {})),
			function(e) {
				e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
			}(i || (i = {})),
			function(e) {
				e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
			}(o || (o = {}))
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH", e.CommunityAlerts = "COMMUNITY_ALERTS", e.ModCommunityAlerts = "MOD_COMMUNITY_ALERTS"
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
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
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
				importAsync: () => Promise.all([n.e(0), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("NewCommunityProgress")]).then(n.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
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
				const p = Object(o.e)(e => e.subreddits.survey[n]),
					b = Object(o.e)(e => e.subreddits.progressModule[n]),
					f = Object(o.e)(u.a),
					h = f !== d.ef.NewModule;
				return (null === (s = null == b ? void 0 : b.cards) || void 0 === s ? void 0 : s.length) > 0 && h ? i.a.createElement(m, {
					closeModuleOnMount: !!t && t !== l.g.Large,
					subredditId: n,
					progressModule: b
				}) : t !== l.g.Large ? null : (null == p ? void 0 : p.isEligible) && !(null == p ? void 0 : p.response) && (!f || f && r > 100) ? i.a.createElement(c.a, {
					subredditId: n,
					survey: p
				}) : i.a.createElement(a.a, {
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
				i = n.n(s),
				o = n("./node_modules/lodash/memoize.js"),
				a = n.n(o),
				c = n("./node_modules/lodash/throttle.js"),
				d = n.n(c),
				l = n("./node_modules/react/index.js"),
				u = n.n(l),
				m = n("./node_modules/react-redux/es/index.js"),
				p = n("./node_modules/react-router-redux/es/index.js"),
				b = n("./node_modules/reselect/es/index.js"),
				f = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				h = n("./src/config.ts"),
				g = n("./src/lib/classNames/index.ts"),
				_ = n("./src/lib/constants/index.ts"),
				v = n("./src/lib/extractQueryParams/index.ts"),
				x = n("./src/lib/isAdHocMultireddit/index.ts"),
				y = n("./src/lib/isFakeSubreddit/index.ts"),
				E = n("./src/lib/listingSort/index.ts"),
				O = n("./src/lib/makeListingKey/index.ts"),
				j = n("./src/lib/objectSelector/index.ts"),
				C = n("./src/lib/promo/withShowSignupUpsell.tsx"),
				I = n("./src/lib/fastdom/index.ts"),
				S = n("./src/lib/performanceTimings/index.tsx"),
				k = n("./src/reddit/actions/preferences.ts"),
				N = n("./src/reddit/actions/search.ts"),
				w = n("./src/reddit/actions/searchQueryId/index.tsx"),
				T = n("./src/reddit/actions/subreddit.ts"),
				P = n("./src/reddit/components/AwardedListingBanner/index.tsx"),
				L = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				D = n("./src/reddit/components/ContentGate/index.tsx"),
				R = n("./src/reddit/components/CreatePostBanner/index.tsx"),
				A = n("./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/async.ts"),
				B = n("./src/reddit/components/Econ/PredictionsPostList/index.tsx"),
				M = n("./src/reddit/components/Econ/Tournament/Sidebar/index.tsx"),
				U = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx"),
				F = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				W = n("./src/reddit/components/EmptySubredditPostList/index.tsx"),
				H = n("./src/reddit/components/GarlicBreadEmbed/index.tsx"),
				V = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				G = n("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				q = n("./src/reddit/components/HeaderImage/index.tsx"),
				K = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				z = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Y = n("./src/reddit/components/JumpToContent/index.tsx"),
				Q = n("./src/reddit/components/ListingPostList/index.tsx"),
				J = n("./src/reddit/components/NewPostPill/index.tsx"),
				Z = n("./src/reddit/components/PrivateFeedPage/index.tsx"),
				X = n("./src/reddit/components/RelatedSubredditsCarousel/async.tsx"),
				$ = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				ee = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				te = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				ne = n("./src/reddit/components/SubredditSidebar/index.tsx"),
				re = n("./src/reddit/components/TabBadger/index.tsx"),
				se = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = n("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				oe = n("./src/reddit/constants/parameters.ts"),
				ae = n("./src/reddit/constants/postLayout.ts"),
				ce = n("./src/reddit/contexts/PageLayer/index.tsx"),
				de = n("./src/higherOrderComponents/withLSWatcher.tsx"),
				le = n("./src/reddit/featureFlags/index.ts"),
				ue = n("./src/reddit/helpers/correlationIdTracker.ts"),
				me = n("./src/reddit/helpers/datadome.ts"),
				pe = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				be = n("./src/reddit/helpers/name/index.ts"),
				fe = n("./src/reddit/helpers/resonatePage/index.ts"),
				he = n("./src/reddit/helpers/trackers/postList.ts"),
				ge = n("./src/reddit/helpers/trackers/screenview.ts"),
				_e = n("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				ve = n("./src/reddit/layout/page/Listing/index.tsx"),
				xe = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ye = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Ee = n("./src/reddit/selectors/countrySites.ts"),
				Oe = n("./src/reddit/selectors/discoveryUnit.ts"),
				je = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				Ce = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				Ie = n("./src/reddit/selectors/experiments/garlicBread.ts"),
				Se = n("./src/reddit/selectors/experiments/i18n/hideTrending.ts"),
				ke = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ne = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				we = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Te = n("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				Pe = n("./src/reddit/selectors/experiments/onboarding.ts"),
				Le = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				De = n("./src/reddit/selectors/experiments/resonatePilot.ts"),
				Re = n("./src/reddit/selectors/experiments/topPosts.ts"),
				Ae = n("./src/reddit/selectors/features/communityChat/index.ts"),
				Be = n("./src/reddit/selectors/listings.ts"),
				Me = n("./src/reddit/selectors/meta.ts"),
				Ue = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Fe = n("./src/reddit/selectors/newPostPill.ts"),
				We = n("./src/reddit/selectors/posts.ts"),
				He = n("./src/reddit/selectors/searchQueryId.ts"),
				Ve = n("./src/reddit/selectors/subreddit.ts"),
				Ge = n("./src/reddit/selectors/user.ts"),
				qe = n("./src/reddit/selectors/userPrefs.ts"),
				Ke = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				ze = n("./src/lib/countrySites/index.ts"),
				Ye = n("./src/reddit/components/CommunityChat/contexts/MatrixClientContext.tsx"),
				Qe = n("./src/reddit/components/Onboarding/Interests/InterestPickerPreview.tsx"),
				Je = n("./src/reddit/constants/countrySites.ts"),
				Ze = n("./src/reddit/helpers/search/searchQueryId.ts"),
				Xe = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				$e = n("./src/reddit/selectors/experiments/communityChat.ts"),
				et = n("./src/reddit/selectors/onboarding.ts"),
				tt = n("./src/reddit/selectors/platform.ts"),
				nt = n("./src/reddit/components/CommunityChat/index.tsx"),
				rt = n("./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx"),
				st = n("./src/reddit/selectors/experiments/relatedCommunityRecommendationsSubreddit.ts"),
				it = n("./src/reddit/pages/Subreddit/index.m.less"),
				ot = n.n(it),
				at = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");

			function ct() {
				return (ct = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: dt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), lt = Object(r.a)({
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
			}), ut = Object(r.a)({
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
			}), mt = 5, pt = 3, bt = 6e3, ft = Object(ce.v)(), ht = Object(r.a)({
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
			}), gt = Object(j.a)(Object(b.a)((e, t) => {
				let {
					location: n
				} = t;
				return n.search
			}, e => i()([...Object(v.a)(e)]))), _t = e => Object(Be.a)(e) || "", vt = Object(b.c)({
				isTopContentDismissed: Ge.ab
			}), xt = Object(b.c)({
				subreddit: (e, t) => Object(Ve.C)(e, {
					subredditName: t.match.params.subredditName
				})
			}), yt = Object(b.c)({
				isLoggedIn: Ge.S
			}), Et = Object(j.a)((e, t) => {
				const {
					subreddit: n
				} = xt(e, t), {
					subredditName: r
				} = t.match.params;
				if (n) {
					if (e.subreddits.progressModule[n.id]) return !1;
					if (Object(Ne.a)(e)) return !1;
					const t = _t(e),
						s = Object(Ue.b)(ye.c.config)(e, {
							subredditId: n.id
						}),
						i = Object(We.C)(e, t, r, !0),
						o = !Object(Be.d)(e, {
							listingKey: t
						});
					if (s && o && i.length <= 1) return !0
				}
				return !1
			}), Ot = (e, t) => {
				const n = _t(e),
					r = Object(ce.U)(e, t),
					{
						sort: s
					} = It(e, t);
				return Object(Fe.a)(e, {
					layout: r,
					listingKey: n,
					sort: s
				})
			}, jt = Object(b.c)({
				inAwardListingExperiment: Ce.a,
				isPopular: ce.H
			}), Ct = e => {
				const t = oe.H in e && e[oe.H].toUpperCase();
				if ("string" == typeof t && t in _.oc) return _.oc[t]
			}, It = Object(j.a)((e, t) => {
				const {
					sort: n,
					subredditName: r,
					countryCode: s,
					languageCode: i
				} = t.match.params, o = gt(e, t), a = Object(y.a)(r, {
					countryCode: s,
					languageCode: i
				}), c = Object(y.c)(r, {
					countryCode: s,
					languageCode: i
				});
				if (n) return Object(E.b)({
					sort: n,
					timeSort: Ct(o)
				});
				if (a) return c && Object(je.a)(e) ? Object(E.b)({
					sort: _.bb.BEST
				}) : Object(E.b)({
					sort: _.bb.HOT
				});
				const d = _t(e),
					l = e.listings.postOrder.listingSort[d];
				if (l && !l.hasChanged) return Object(E.d)(l.sort);
				const {
					subreddit: u
				} = xt(e, t);
				if (u) {
					const t = Object(Ve.G)(e, {
						subredditId: u.id
					});
					return Object(E.d)(t)
				}
				return Object(E.d)(e.user.prefs.sort)
			}), St = Object(j.a)((e, t) => {
				const {
					subredditName: n
				} = t.match.params;
				return Object(Ve.bb)(e, {
					subredditName: n
				})
			}), kt = Object(b.c)({
				currentPage: tt.b,
				countrySiteSettings: Ee.a,
				isBlacklistedTopContentPage: Oe.e,
				listingKey: _t,
				sortParams: It,
				specialMembershipUpsellsEnabled: le.d.spSpecialMembershipUpsells,
				topContent: St,
				topContentDiscoveryUnit: e => Object(Oe.b)(e, {
					unitName: xe.a
				}),
				topPostsVariant: Re.d,
				walletRegistrationBannerEnabled: le.d.spWalletRegistrationBanner,
				nsfwBlockingExperiment: we.g,
				isNsfwBlurSubreddit: we.e,
				isAllNsfwPagesEnabled: we.f,
				searchResultsServerQueryId: e => Object(He.a)(e),
				showNewDesignBlocking: Te.a,
				accessToken: Ge.a,
				matrixChatRoomId: (e, t) => {
					let {
						match: n
					} = t;
					var r;
					return Object(Ae.b)(e, null !== (r = n.params.channelId) && void 0 !== r ? r : "")
				}
			}), Nt = Object(b.c)({
				showCreatePostBanner: Et,
				contentGateInfo: (e, t) => Object(Ge.h)(e, t.match.params.subredditName),
				layout: ce.U,
				inResonatePilot: De.a,
				newPostPillTriggerIdx: Ot,
				isReducedAnimation: qe.d,
				isCommentCountAnimationEnabled: Le.d,
				isTrendingHiddenEnabled: Se.b,
				isVoteCountAnimationEnabled: Le.h,
				isCountAnimShadowTestEnabled: Le.e,
				isGarlicBreadEmbedEnabled: Ie.c,
				isBlockingInterstitialEnabled: ke.b,
				isBlockingInterstitialV2Enabled: ke.c,
				interestTopicRecommendations: et.b,
				reonboardingFlow: Pe.j,
				shouldShowCommunityChat: $e.d,
				isPrivateCommunityUXEnabled: Ke.c,
				isNightmodeOn: Ge.fb
			}), wt = () => Object(b.a)(Ge.mb, gt, vt, xt, (e, t) => {
				let {
					match: n
				} = t;
				return Object(Ve.z)(e, {
					subredditName: n.params.subredditName
				})
			}, We.F, yt, (e, t) => {
				let {
					match: n
				} = t;
				return n.params.subredditName
			}, Me.m, jt, kt, Nt, (e, t, n, r, s, i, o, a, c, d, l, u) => {
				let {
					isTopContentDismissed: m
				} = n, {
					subreddit: p
				} = r, {
					isLoggedIn: b
				} = o, {
					inAwardListingExperiment: f,
					isPopular: h
				} = d, {
					currentPage: g,
					countrySiteSettings: _,
					specialMembershipUpsellsEnabled: v,
					listingKey: x,
					sortParams: {
						sort: y,
						timeSort: E
					},
					topContent: O,
					topContentDiscoveryUnit: j,
					topPostsVariant: C,
					isBlacklistedTopContentPage: I,
					walletRegistrationBannerEnabled: S,
					nsfwBlockingExperiment: k,
					isNsfwBlurSubreddit: N,
					isAllNsfwPagesEnabled: w,
					searchResultsServerQueryId: T,
					showNewDesignBlocking: P,
					accessToken: L,
					matrixChatRoomId: D
				} = l;
				const R = t && oe.l in t ? t[oe.l].toUpperCase() : c,
					A = !!t.hasOwnProperty("f");
				return {
					currentPage: g,
					countrySort: R,
					countrySiteSettings: _,
					specialMembershipUpsellsEnabled: v,
					inAwardListingExperiment: f,
					isLoggedIn: b,
					isPopular: h,
					listingKey: x,
					renderNSFWContentGate: p && p.isNSFW && !e,
					isTopContentDismissed: m,
					post: i,
					queryParams: t,
					sort: y,
					subreddit: p,
					subredditAboutInfo: s,
					subredditName: a,
					timeSort: E,
					topContent: O,
					topContentDiscoveryUnit: j,
					topPostsVariant: C,
					isBlacklistedTopContentPage: I,
					isFlairFilter: A,
					walletRegistrationBannerEnabled: S,
					nsfwBlockingExperiment: k,
					isNsfwBlurSubreddit: N,
					isAllNsfwPagesEnabled: w,
					searchResultsServerQueryId: T,
					showNewDesignBlocking: P,
					accessToken: L,
					matrixChatRoomId: D,
					...u
				}
			}), Tt = (e, t) => ({
				onLoadMorePosts: () => {
					e(T.r({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					}))
				},
				onLoadMoreSearchResults: () => e(Object(N.p)([_.ic.Posts])),
				refreshFeed: () => e(T.s({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				setTopContentDismissalPref: () => e(Object(k.E)()),
				redirectToNewSort: () => {
					e(Object(p.b)(`/r/${t.match.params.subredditName}/${_.bb.NEW}/`))
				},
				unsetSearchResultsServerQueryId: () => e(Object(w.c)())
			}), Pt = Object(m.b)(wt, Tt), Lt = Object(r.a)({
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
			}), Dt = e => {
				return Object(m.e)(e => Object(Se.a)(e)) ? null : u.a.createElement(Lt, ct({}, e, {
					fallback: u.a.createElement(ee.a, {
						className: e.className,
						showCardView: !!e.showCardView
					})
				}))
			}, Rt = e => {
				const {
					isEnabled: t,
					variant: n
				} = Object(m.e)(st.a);
				return e.subredditId && t ? u.a.createElement(rt.b, ct({}, e, {
					variant: n,
					pageType: rt.a.Community
				})) : null
			}, At = Object(r.a)({
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
			}), Bt = Object(r.a)({
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

			function Mt(e) {
				const {
					subreddit: t
				} = e;
				return !!t && !!t.name && "snoovatar" === t.name.toLowerCase()
			}

			function Ut(e) {
				const {
					subreddit: t
				} = e;
				return "youcannesdraw" === (null == t ? void 0 : t.name.toLowerCase())
			}
			class Ft extends u.a.Component {
				constructor(e) {
					if (super(e), this.renderNewPostPill = e => {
							e === this.props.newPostPillTriggerIdx - 1 && (this.state.isNewPostPillRenderedOnce || (this.setState({
								isNewPostPillRenderedOnce: !0,
								shouldShowNewPostPill: !0
							}), this.props.sendEvent(Object(he.d)(this.props.listingKey)), this.newPostPillTimer = setTimeout(() => {
								this.state.shouldShowNewPostPill && this.setState({
									shouldShowNewPostPill: !1
								})
							}, bt)))
						}, this.setRelatedRecommendedCommunitiesVisible = e => {
							this.setState({
								isRelatedRecommendedCommunitiesVisible: e
							})
						}, this.onNewPostPillClick = () => {
							this.setState({
								shouldShowNewPostPill: !1
							}), this.props.sendEvent(Object(he.c)(this.props.listingKey)), I.a.write(() => {
								window.addEventListener("scroll", this.handleScroll), window.scrollTo({
									top: 0,
									behavior: this.props.isReducedAnimation ? "auto" : "smooth"
								})
							})
						}, this.handleScroll = d()(() => {
							0 === window.scrollY && (window.removeEventListener("scroll", this.handleScroll), this.props.redirectToNewSort())
						}, _.M), this.onTopContentDismissed = () => {
							this.props.setTopContentDismissalPref()
						}, this.onViewed = (e, t) => {
							const {
								listingKey: n,
								pageLayer: r,
								sort: s,
								timeSort: i
							} = this.props, o = Object(ce.R)(r);
							return Object(ge.e)({
								key: n,
								sort: s,
								timerType: t,
								timerMillis: e,
								timeSort: i,
								isPredictionsPage: o
							})
						}, this.noPostsComponent = () => {
							const {
								pageLayer: e,
								subredditName: t,
								sort: n,
								subreddit: r
							} = this.props, s = t.toLowerCase(), i = Object(ce.R)(e);
							return u.a.createElement(W.a, {
								isPredictionsPage: i,
								listingName: s,
								sort: n,
								subreddit: r
							})
						}, this.memoizedGetInjectChildren = a()(e => {
							let {
								inAwardListingExperiment: t,
								interestTopicRecommendations: n,
								isPopular: r,
								layout: s,
								listingKey: i,
								reonboardingFlow: o,
								sendEvent: a,
								sort: c,
								specialMembershipUpsellsEnabled: d,
								subreddit: l,
								subredditName: m,
								timeSort: p,
								topPostsVariant: b,
								walletRegistrationBannerEnabled: f
							} = e;
							return () => {
								const e = {},
									h = Object(Re.c)(b),
									v = s === ae.g.Classic ? ot.a.classicChild : s === ae.g.Compact ? ot.a.compactChild : ot.a.cardChild;
								if (d && l && (e[0] = {
										estHeight: 487,
										id: `newbie-banner-${s}-${i}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(F.a, {
												className: Object(g.a)(t, v)
											})
										}
									}, e[3] = {
										estHeight: 256,
										id: `lfg-banner-${s}-${i}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(U.a, {
												className: Object(g.a)(t, v),
												subredditId: l.id
											})
										}
									}), l && (e[0] = {
										estHeight: 175,
										id: `community-survey-${s}-${i}`,
										render: () => u.a.createElement(at.a, {
											subredditId: l.id,
											postLayout: s,
											subredditSubscribers: l.subscribers
										})
									}), t && r && c === _.bb.AWARDED && (e[0] = {
										estHeight: 180,
										id: `awardlisting-banner-${s}-${i}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(P.a, {
												className: Object(g.a)(t, v)
											})
										}
									}), f && l && (e[1] = {
										estHeight: 384,
										id: `wallet-registration-${s}-${i}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(G.a, {
												className: Object(g.a)(t, v),
												subredditId: l.id
											})
										}
									}), !r && h && p !== _.oc.WEEK && s === ae.g.Large) {
									const t = Object(O.a)(m, _.bb.TOP, {
										t: _.oc.WEEK
									});
									e[pt] = {
										estHeight: 0,
										id: `top-week-posts-${s}-${i}`,
										render(e) {
											let {
												className: n
											} = e;
											return u.a.createElement(Bt, {
												className: n,
												listingKey: t,
												subredditName: m
											})
										}
									}
								}
								if (n) {
									const {
										interests: t,
										index: r
									} = n, {
										child: s,
										idx: i
									} = Object(Qe.a)({
										children: e,
										desiredIdx: r,
										interests: t,
										sendEvent: a,
										variant: o
									});
									e[i] = s
								}
								return e
							}
						}, e => {
							let {
								sort: t,
								layout: n,
								listingKey: r,
								timeSort: s,
								subreddit: i
							} = e;
							return `s:${t}_l:${n}_lk${r}_ts:${s}_sr:${null==i?void 0:i.id}`
						}), this.state = {
							shouldShowNewPostPill: !1,
							isNewPostPillRenderedOnce: !1,
							isRelatedRecommendedCommunitiesVisible: !1
						}, this.props.searchResultsServerQueryId.searchQueryId) {
						const {
							key: e,
							searchQueryId: t
						} = this.props.searchResultsServerQueryId;
						e && Ze.a.set(Xe.a.SERP, e, t), this.props.unsetSearchResultsServerQueryId()
					}
				}
				componentDidMount() {
					if (I.a.read(() => {
							const e = [Object(me.a)()];
							Object(S.d)(S.c.Subreddit, this.props.isLoggedIn, e)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						_.Sb.includes(e) && Object(fe.a)(e)
					}
				}
				componentDidUpdate(e) {
					if (e.isFlairFilter && !this.props.isFlairFilter && Object(ue.c)(ue.a.SearchResults) && Object(ue.b)(ue.a.SearchResults), this.props.inResonatePilot) {
						const t = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						(e.subredditName ? e.subredditName.toLowerCase() : "") !== t && _.Sb.includes(t) && Object(fe.a)(t)
					}
					e.subredditName !== this.props.subredditName && (this.newPostPillTimer && clearTimeout(this.newPostPillTimer), this.setState({
						isNewPostPillRenderedOnce: !1,
						shouldShowNewPostPill: !1,
						isRelatedRecommendedCommunitiesVisible: !1
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
						isAllNsfwPagesEnabled: s,
						isBlacklistedTopContentPage: i,
						isBlockingInterstitialEnabled: o,
						isBlockingInterstitialV2Enabled: a,
						isCommentCountAnimationEnabled: c,
						isCountAnimShadowTestEnabled: d,
						isGarlicBreadEmbedEnabled: l,
						shouldShowCommunityChat: m,
						isFlairFilter: p,
						isLoggedIn: b,
						isNightmodeOn: v,
						isNsfwBlurSubreddit: E,
						isPopular: O,
						isTopContentDismissed: j,
						isTrendingHiddenEnabled: C,
						isVoteCountAnimationEnabled: I,
						layout: S,
						listingKey: k,
						match: N,
						nsfwBlockingExperiment: w,
						pageLayer: T,
						post: P,
						renderNSFWContentGate: U,
						showCreatePostBanner: F,
						showSignupUpsell: W,
						sort: G,
						subreddit: ee,
						subredditAboutInfo: se,
						subredditName: oe,
						timeSort: de,
						topContent: le,
						topContentDiscoveryUnit: ue,
						topPostsVariant: me,
						showNewDesignBlocking: fe,
						accessToken: he,
						matrixChatRoomId: ge,
						isPrivateCommunityUXEnabled: _e
					} = this.props, xe = this.memoizedGetInjectChildren(this.props), ye = Object(Ee.b)(r), Oe = Object(y.a)(oe, {
						countryCode: null == ye ? void 0 : ye.countryCode,
						languageCode: null == ye ? void 0 : ye.languageCode
					}), je = oe.toLowerCase(), Ce = ee && ee.url ? ee.url : Object(ze.d)(`/r/${oe}/`, null == ye ? void 0 : ye.countryCode, null == ye ? void 0 : ye.languageCode), Ie = Object(f.a)({
						countryCode: Je.a,
						languageCode: Je.b,
						hardcodedPath: Ce,
						permalink: Ce,
						subredditName: oe
					}, t), Se = {
						listingKey: k,
						listingName: je
					}, ke = Object(Re.a)(me), Ne = Object(Re.b)(me), Te = Object(ce.R)(T);
					let Pe;
					Oe ? Pe = Object(x.a)(oe) ? u.a.createElement(lt, Se) : u.a.createElement(At, Se) : ee && (Pe = Te ? u.a.createElement(M.a, {
						subredditId: ee.id
					}) : u.a.createElement(ne.a, ct({}, Se, {
						className: ot.a.sidebar,
						subredditId: ee.id,
						subredditName: oe,
						topPostsVariant: me
					})));
					const Le = (null == P ? void 0 : P.isNSFW) && s;
					if (((null == ee ? void 0 : ee.isNSFW) || Le) && w === we.a.NoPreview && fe) return u.a.createElement(ie.a, {
						contentTitle: Object(be.d)(oe)
					});
					const De = Object(pe.a)(e, U, oe);
					if (De && _e && (null == e ? void 0 : e.privateSubreddit)) return u.a.createElement(Z.a, {
						isLoggedIn: b,
						isNightmodeOn: v
					});
					if (De && !E) return u.a.createElement(D.default, De);
					const Ae = S === ae.g.Large,
						Be = O,
						Me = ee ? ee.id : void 0,
						Ue = !N.params.sort && le && !le.isSubscribed && le.postIds && le.postIds.length >= mt && !j && !i && !ke && !Ne,
						Fe = {
							baseUrl: Ie,
							countrySort: n,
							sort: G,
							subredditId: Me,
							timeSort: de
						},
						We = p ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						He = ee && ee.subscribers;
					let Ve;
					const Ge = window.URL;
					if (Mt(this.props)) {
						const e = new Ge(h.a.snoovatarUrl + "/static/client/");
						e.searchParams.set("platform", "desktop"), Ve = u.a.createElement("iframe", {
							className: Object(g.a)(ot.a.af),
							src: e.href
						})
					} else Be ? Ve = u.a.createElement(Dt, {
						showCardView: this.props.layout === ae.g.Large
					}) : Ut(this.props) && this.props.subreddit && (Ve = u.a.createElement(ut, {
						baseUrl: h.a.layersUrl,
						subredditId: this.props.subreddit.id
					}));
					const qe = S === ae.g.Large && G !== _.bb.NEW && !Te && !Oe,
						Ke = m && ge,
						Qe = this.state.shouldShowNewPostPill && qe && !Ke,
						Ze = Te ? B.a : Q.a,
						Xe = w === we.a.Blurred && (null == ee ? void 0 : ee.isNSFW),
						$e = u.a.createElement(ve.a, {
							subredditId: Me,
							className: Object(g.a)(ot.a.Container, this.props.className),
							fitPageToContent: !0,
							navBar: !Oe && u.a.Children.toArray([u.a.createElement(q.a, {
								headerText: ee ? ee.name : oe,
								disableFullscreen: Ae,
								isTopBannerVariant: !0,
								key: "headerimage",
								shouldBlurHeaderImage: Xe,
								subredditOrProfile: ee,
								url: Ie
							}), u.a.createElement(L.a, {
								layout: S,
								key: "idtopbar",
								subreddit: ee || void 0,
								subredditId: Me,
								subredditName: oe,
								subredditUrl: Ie,
								setRelatedRecommendedCommunitiesVisible: this.setRelatedRecommendedCommunitiesVisible
							}), l && u.a.createElement(H.a, null), Me && u.a.createElement(X.a, {
								key: "related-subreddit-carousel",
								subredditId: Me
							})]),
							trendingUnit: Ve,
							content: u.a.createElement(u.a.Fragment, null, ee && ee.isQuarantined && u.a.createElement(z.a, {
								subredditName: oe
							}), ee && !ee.isNSFW && this.state.isRelatedRecommendedCommunitiesVisible && u.a.createElement(Rt, {
								subredditId: ee.id,
								subredditDisplayText: ee.displayText,
								onDismiss: () => {
									this.setRelatedRecommendedCommunitiesVisible(!1)
								}
							}), ee && F && !Ke && u.a.createElement(R.a, {
								subreddit: ee,
								listingKey: k,
								listingName: je
							}), Be && !C && u.a.createElement($.a, {
								className: ot.a.duHeader
							}, dt._("Popular posts", null, {
								hk: "Gfyj2"
							})), Ue && !Ke && u.a.createElement(ht, {
								discoveryUnit: ue,
								subredditName: ee ? ee.name : oe,
								topContent: le,
								onCloseClick: this.onTopContentDismissed
							}), !Oe && b && !Ke && !(se && se.userIsBanned) && !Te && u.a.createElement(K.a, {
								subredditName: oe
							}), !Te && !Ke && u.a.createElement(V.a, Fe), u.a.createElement(Y.a, null), u.a.createElement(re.a, {
								handlePillClick: this.props.refreshFeed,
								listingKey: k,
								subredditName: oe,
								subscriberCount: He
							}), Te && u.a.createElement(A.a, {
								subreddit: ee
							}), Qe && u.a.createElement(J.a, {
								onClick: this.onNewPostPillClick,
								subredditName: oe
							}), Ke ? u.a.createElement(nt.a, {
								roomId: ge,
								accessToken: he
							}) : u.a.createElement(Ze, {
								getInjectChildren: Te ? void 0 : xe,
								isCommentCountAnimationEnabled: c,
								isVoteCountAnimationEnabled: I,
								isCountAnimShadowTestEnabled: d,
								listingKey: k,
								listingName: je,
								listingViewed: this.onViewed,
								triggerNewPostPill: qe ? this.renderNewPostPill : void 0,
								noPostsComponent: this.noPostsComponent,
								onLoadMore: We,
								onScroll: W,
								inSubredditOrProfile: !Oe,
								disablePlaceholder: O && G === _.bb.AWARDED,
								isBlockingInterstitialEnabled: o || a,
								preventScrollOnMount: m
							})),
							sidebar: Pe,
							isPageSwapped: m
						});
					return u.a.createElement(te.a, {
						subredditId: Me
					}, m ? u.a.createElement(Ye.a, null, $e) : $e)
				}
			}
			t.default = ft(Pt(Object(de.a)(Object(se.c)(Object(C.a)(Object(_e.d)(Ft))))))
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/subredditModeration/constants.ts");
			var i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.g:
						case s.f:
							return null;
						case s.e:
							return t.payload;
						default:
							return e
					}
				},
				o = n("./src/reddit/models/SubredditModeration/index.ts");
			const a = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.g: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(o.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case s.f:
						case s.e: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(o.e)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				d = Object(r.c)({
					error: i,
					pending: c
				});
			const l = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.f: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, s = Object(o.e)(r, n);
						return {
							...e,
							[s]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.f: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				b = n("./node_modules/icepick/icepick.js");
			const f = {};
			var h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.d:
					case s.f: {
						const {
							subredditId: n,
							approvedSubmitters: r
						} = t.payload, s = {
							[n]: r
						};
						return Object(b.merge)(e, s)
					}
					case s.k: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(b.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.j:
					case s.i:
						return null;
					case s.h:
						return t.payload;
					default:
						return e
				}
			};
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.j:
							return !0;
						case s.i:
						case s.h:
							return !1;
						default:
							return e
					}
				},
				v = Object(r.c)({
					error: g,
					pending: _
				});
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.j:
							return null;
						case s.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				y = Object(r.c)({
					api: v,
					result: x
				});
			const E = {};
			var O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.f: {
							const {
								subredditId: n,
								approvedSubmitterIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case s.k: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case s.d: {
							const {
								subredditId: n,
								approvedSubmitterIds: r
							} = t.payload, s = r[0];
							return s && e[n] && -1 === e[n].indexOf(s) ? {
								[n]: [s, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				j = Object(r.c)({
					api: d,
					fetchedTokens: u,
					loadMore: p,
					models: h,
					search: y,
					userOrder: O
				});
			var C = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.n:
					case s.m:
						return null;
					case s.l:
						return t.payload;
					default:
						return e
				}
			};
			const I = {};
			var S = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.n: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(o.f)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case s.m:
						case s.l: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(o.f)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				k = Object(r.c)({
					error: C,
					pending: S
				});
			const N = {};
			var w = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.m: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, s = Object(o.f)(r, n);
						return {
							...e,
							[s]: !0
						}
					}
					default:
						return e
				}
			};
			const T = {};
			var P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.m: {
						const {
							subredditId: e,
							loadMoreToken: n
						} = t.payload;
						return {
							[e]: n
						}
					}
					default:
						return e
				}
			};
			const L = {};
			var D = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.m: {
							const {
								subredditId: n,
								approvedTalkHosts: r,
								forceRefresh: s
							} = t.payload, i = {
								[n]: [...s ? [] : e[n] || [], ...r]
							};
							return Object(b.merge)(e, i)
						}
						case s.o: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, s = {
								[n]: e[n].filter(e => e.redditor.id !== r)
							};
							return Object(b.merge)(e, s)
						}
						default:
							return e
					}
				},
				R = Object(r.c)({
					api: k,
					fetchedTokens: w,
					loadMore: P,
					models: D
				}),
				A = n("./src/reddit/actions/grantUserFlair/constants.ts");
			var B = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.g:
					case A.i:
						return null;
					case A.f:
						return t.payload;
					default:
						return e
				}
			};
			var M = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.i:
							return !0;
						case A.g:
						case A.f:
							return !1;
						default:
							return e
					}
				},
				U = Object(r.c)({
					error: B,
					pending: M
				}),
				F = n("./node_modules/lodash/merge.js"),
				W = n.n(F),
				H = n("./node_modules/lodash/omit.js"),
				V = n.n(H);
			const G = {};
			var q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.g:
					case A.k: {
						const {
							subredditId: n,
							flairedUsers: r
						} = t.payload;
						return W()({
							...e
						}, {
							[n]: r
						})
					}
					case A.c: {
						const {
							subredditId: n,
							userName: r
						} = t.payload, s = V()(e[n], r);
						return {
							...e,
							[n]: s
						}
					}
					case A.a:
					case A.b:
					case A.h:
						const {
							subredditId: n, userName: r, applied: s
						} = t.payload;
						return s ? {
							...e,
							[n]: {
								...e[n],
								[r]: s
							}
						} : e;
					default:
						return e
				}
			};
			const K = {};
			var z = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.g: {
						const {
							key: n,
							pageInfo: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			var Y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.l:
					case A.k:
						return null;
					case A.j:
						return t.payload;
					default:
						return e
				}
			};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.l:
							return !0;
						case A.k:
						case A.j:
							return !1;
						default:
							return e
					}
				},
				J = Object(r.c)({
					error: Y,
					pending: Q
				});
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case A.c: {
							const {
								userName: n
							} = t.payload;
							return e === n ? null : e
						}
						default:
							return e
					}
				},
				X = Object(r.c)({
					api: J,
					result: Z
				});
			const $ = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.g: {
							const {
								key: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case A.a: {
							const {
								key: n,
								userName: r
							} = t.payload;
							if (!n) return e;
							if (!e[n].includes(r)) {
								const t = [...e[n], r];
								return {
									...e,
									[n]: t
								}
							}
							return e
						}
						case A.c: {
							const {
								userName: n
							} = t.payload, r = {};
							for (const t in e) r[t] = e[t].filter(e => e !== n);
							return r
						}
						default:
							return e
					}
				},
				te = Object(r.c)({
					api: U,
					models: q,
					pageInfo: z,
					search: X,
					userOrder: ee
				}),
				ne = n("./src/reddit/actions/moderationLog/constants.ts");
			const re = {};
			var se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
						const {
							normalizedCategories: n
						} = t.payload;
						return Object(b.merge)(e, n)
					}
					default:
						return e
				}
			};
			const ie = {};
			var oe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.c: {
						const {
							actionIds: n,
							key: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[r]: n
							}
						}
					}
					default:
						return e
				}
			};
			const ae = {};
			var ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.c: {
							const {
								normalizedModerationLog: n,
								subredditId: r
							} = t.payload, s = {};
							n.forEach(e => {
								s[e.id] = e
							});
							const i = {
								[r]: s
							};
							return W()({
								...e
							}, i)
						}
						default:
							return e
					}
				},
				de = Object(r.c)({
					itemOrder: oe,
					models: ce
				});
			var le = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.c: {
						const {
							approximateCount: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.c: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const me = {};
			var pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.c: {
						const {
							hasNextPage: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const be = {};
			var fe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.c: {
						const {
							hasPreviousPage: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			var he = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.c: {
						const {
							subredditId: n,
							insightsData: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const ge = [];
			var _e = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.a: {
						const {
							normalizedModerators: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			var ve = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.c: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				xe = Object(r.c)({
					actionCategories: se,
					actions: de,
					approximateCount: le,
					endCursor: ue,
					hasNextPage: pe,
					hasPreviousPage: fe,
					moderators: _e,
					startCursor: ve,
					insightsEntrypoint: he
				});
			const ye = {};
			var Ee = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.O:
					case s.y: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload.response || t.payload, s = {
							[n]: r
						};
						return Object(b.merge)(e, s)
					}
					case s.C: {
						const {
							subredditId: n,
							userId: r,
							permissions: s
						} = t.payload;
						return Object(b.setIn)(e, [n, r, "modPermissions"], s)
					}
					case s.jb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(b.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			const Oe = {};
			var je = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.z:
					case s.y: {
						const {
							key: n,
							subredditId: r
						} = t.payload;
						return r ? {
							...e,
							[n]: null
						} : e
					}
					case s.x: {
						const {
							error: n,
							key: r,
							subredditId: s
						} = t.payload;
						return s ? {
							...e,
							[r]: n
						} : e
					}
					default:
						return e
				}
			};
			const Ce = {};
			var Ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.x:
						case s.y: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case s.z: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !0
							} : e
						}
						default:
							return e
					}
				},
				Se = Object(r.c)({
					error: je,
					pending: Ie
				});
			const ke = {};
			var Ne = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.y: {
							const {
								subredditId: n,
								response: r,
								key: s
							} = t.payload;
							return Object(b.setIn)(e, [n, s], r.moderatorIds)
						}
						case s.jb: {
							const {
								subredditId: n,
								userId: r,
								key: s
							} = t.payload, i = e[n][s].filter(e => e !== r);
							return Object(b.setIn)(e, [n, s], i)
						}
						default:
							return e
					}
				},
				we = Object(r.c)({
					data: Ne,
					api: Se
				});
			var Te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.F:
					case s.E:
						return null;
					case s.D:
						return t.payload;
					default:
						return e
				}
			};
			var Pe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.E:
						case s.D:
							return !1;
						case s.F:
							return !0;
						default:
							return e
					}
				},
				Le = Object(r.c)({
					error: Te,
					pending: Pe
				});
			const De = {};
			var Re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.E: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload;
						return Object(b.set)(e, n, r)
					}
					case s.gb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(b.unsetIn)(e, [n, r])
					}
					case s.c: {
						const n = t.payload,
							{
								subredditId: r,
								moderators: s
							} = n,
							i = {
								[r]: s
							};
						return Object(b.merge)(e, i)
					}
					default:
						return e
				}
			};
			const Ae = {};
			var Be = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.E: {
							const {
								subredditId: n,
								moderatorIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case s.gb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, s = e[n].filter(e => e !== r);
							return {
								...e,
								[n]: s
							}
						}
						case s.c: {
							const n = t.payload,
								{
									subredditId: r,
									moderatorIds: s
								} = n,
								i = [...e[r] || [], ...s];
							return {
								...e,
								[r]: i
							}
						}
						default:
							return e
					}
				},
				Me = Object(r.c)({
					api: Le,
					models: Re,
					userOrder: Be
				});
			const Ue = {};
			var Fe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.L: {
						const {
							subredditId: n,
							response: r
						} = t.payload, {
							invitePending: s
						} = r, i = {
							[n]: s
						};
						return Object(b.merge)(e, i)
					}
					case s.I:
					case s.J: {
						const {
							subredditId: n
						} = t.payload;
						return Object(b.unset)(e, n)
					}
					default:
						return e
				}
			};
			const We = {};
			var He = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : We,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.y: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Ve = {};
			var Ge = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ve,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.L: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const qe = {};
			var Ke = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.L: {
						const {
							response: n
						} = t.payload, r = {
							[n.subredditId]: n.moderators
						};
						return Object(b.merge)({
							...e
						}, r)
					}
					case s.C: {
						const n = t.payload,
							{
								subredditId: r,
								userId: s,
								permissions: i
							} = n;
						return e[r] && e[r][s] ? Object(b.setIn)(e, [r, s, "modPermissions"], i) : e
					}
					default:
						return e
				}
			};
			var ze = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.P:
					case s.O:
						return null;
					case s.N:
						return t.payload;
					default:
						return e
				}
			};
			var Ye = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.P:
							return !0;
						case s.O:
						case s.N:
							return !1;
						default:
							return e
					}
				},
				Qe = Object(r.c)({
					error: ze,
					pending: Ye
				}),
				Je = n("./node_modules/lodash/isEqual.js"),
				Ze = n.n(Je);
			var Xe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.P:
						case s.N:
						case s.jb:
							return null;
						case s.O: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case s.C: {
							const {
								userId: n,
								permissions: r
							} = t.payload;
							return e && e.id === n && !Ze()(e.modPermissions, r) ? {
								...e,
								modPermissions: r
							} : e
						}
						default:
							return e
					}
				},
				$e = Object(r.c)({
					api: Qe,
					result: Xe
				});
			const et = {};
			var tt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : et,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.M:
					case s.L: {
						const {
							subredditId: n,
							key: r
						} = t.payload;
						return n ? {
							...e,
							[r]: null
						} : e
					}
					case s.K: {
						const {
							error: n,
							subredditId: r,
							key: s
						} = t.payload;
						return r ? {
							...e,
							[s]: n
						} : e
					}
					default:
						return e
				}
			};
			const nt = {};
			var rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.K:
						case s.L: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case s.M: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !0
							} : e
						}
						default:
							return e
					}
				},
				st = Object(r.c)({
					error: tt,
					pending: rt
				});
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const it = {};
			var ot = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.L: {
							const {
								response: n,
								subredditId: r,
								key: s
							} = t.payload, {
								moderatorIds: i
							} = n;
							return Object(b.merge)(e, {
								[r]: {
									[s]: i
								}
							})
						}
						case s.jb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, s = {
								...e[n]
							};
							return Object.keys(e[n]).forEach(t => {
								const i = e[n][t].filter(e => e !== r);
								s[t] = i
							}), Object(b.set)(e, n, s)
						}
						default:
							return e
					}
				},
				at = Object(r.c)({
					data: ot,
					api: st
				}),
				ct = Object(r.c)({
					editableModerators: Ee,
					editableUserOrder: we,
					invitedModerators: Me,
					invitePending: Fe,
					loadMoreModerators: Ge,
					loadMoreEditableModerators: He,
					models: Ke,
					search: $e,
					userOrder: at
				}),
				dt = n("./src/reddit/actions/bulkActions/constants.ts");
			var lt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dt.c:
						case dt.b:
							return null;
						case dt.a:
							return t.payload;
						default:
							return e
					}
				},
				ut = n("./src/reddit/actions/modQueue/constants.ts");
			var mt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dt.c:
							return !0;
						case dt.b:
						case dt.a:
						case ut.x:
						case ut.w:
							return !1;
						default:
							return e
					}
				},
				pt = Object(r.c)({
					error: lt,
					pending: mt
				});
			const bt = {};
			var ft = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ut.a: {
							const {
								ids: n
							} = t.payload, r = {};
							return n.forEach(e => r[e] = !0), {
								...e,
								...r
							}
						}
						case ut.d: {
							const {
								ids: n
							} = t.payload;
							return V()(e, n)
						}
						case ut.c: {
							const {
								ids: e
							} = t.payload, n = {};
							return e.forEach(e => n[e] = !0), n
						}
						default:
							return e
					}
				},
				ht = n("./src/reddit/models/ModQueue/index.ts");
			const gt = {};
			var _t = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case dt.b: {
							const {
								operation: e,
								ids: n
							} = t.payload;
							return "approve" === e ? gt : {
								[ht.c[e]]: n
							}
						}
						default:
							return e
					}
				},
				vt = Object(r.c)({
					api: pt,
					selectedItems: ft,
					undoLastAction: _t
				});
			var xt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ut.g:
					case ut.f:
						return null;
					case ut.e:
						return t.payload;
					default:
						return e
				}
			};
			var yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ut.g:
							return !0;
						case ut.f:
						case ut.e:
							return !1;
						default:
							return e
					}
				},
				Et = Object(r.c)({
					error: xt,
					pending: yt
				});
			const Ot = {};
			var jt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ut.f: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: i
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: i
							}
						}
					}
					default:
						return e
				}
			};
			const Ct = {};
			var It = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ut.f: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, i = s[s.length - 1] || null;
							return {
								...e,
								[n]: i
							}
						}
						default:
							return e
					}
				},
				St = Object(r.c)({
					api: Et,
					itemOrder: jt,
					loadMore: It
				}),
				kt = n("./src/reddit/actions/pages/modListing/constants.ts");
			var Nt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case kt.e: {
						const n = t.payload,
							{
								moderatingSubreddits: r
							} = n;
						return r ? null : e
					}
					case ut.i:
					case ut.f:
					case ut.r:
					case ut.u:
					case ut.A: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: n
						} = e;
						return n
					}
					case ut.n: {
						const e = t.payload,
							{
								moderatedAfter: n
							} = e;
						return n
					}
					default:
						return e
				}
			};
			const wt = [];
			var Tt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ut.i:
					case ut.f:
					case ut.r:
					case ut.u:
					case ut.A: {
						const {
							response: e
						} = t.payload, {
							listingOrder: n
						} = e;
						return n
					}
					case ut.n: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return [...e, ...r]
					}
					case kt.e: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return r || e
					}
					default:
						return e
				}
			};
			var Pt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ut.b:
						return !0;
					default:
						return e
				}
			};
			var Lt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ut.n:
							return !0;
						case ut.b:
							return !1;
						default:
							return e
					}
				},
				Dt = Object(r.c)({
					after: Nt,
					data: Tt,
					loaded: Pt,
					pending: Lt
				});
			var Rt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ut.j:
					case ut.i:
						return null;
					case ut.h:
						return t.payload;
					default:
						return e
				}
			};
			var At = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ut.j:
							return !0;
						case ut.i:
						case ut.h:
							return !1;
						default:
							return e
					}
				},
				Bt = Object(r.c)({
					error: Rt,
					pending: At
				});
			const Mt = {};
			var Ut = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ut.i: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: i
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: i
							}
						}
					}
					default:
						return e
				}
			};
			const Ft = {};
			var Wt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ft,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ut.i: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, i = s[s.length - 1] || null;
							return {
								...e,
								[n]: i
							}
						}
						default:
							return e
					}
				},
				Ht = Object(r.c)({
					api: Bt,
					itemOrder: Ut,
					loadMore: Wt
				});
			var Vt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ut.s:
					case ut.r:
						return null;
					case ut.q:
						return t.payload;
					default:
						return e
				}
			};
			var Gt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ut.s:
							return !0;
						case ut.r:
						case ut.q:
							return !1;
						default:
							return e
					}
				},
				qt = Object(r.c)({
					error: Vt,
					pending: Gt
				});
			const Kt = {};
			var zt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Kt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ut.r: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: i
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: i
							}
						}
					}
					default:
						return e
				}
			};
			const Yt = {};
			var Qt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ut.r: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, i = s[s.length - 1] || null;
							return {
								...e,
								[n]: i
							}
						}
						default:
							return e
					}
				},
				Jt = Object(r.c)({
					api: qt,
					itemOrder: zt,
					loadMore: Qt
				});
			var Zt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ut.v:
					case ut.u:
						return null;
					case ut.t:
						return t.payload;
					default:
						return e
				}
			};
			var Xt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ut.v:
							return !0;
						case ut.u:
						case ut.t:
							return !1;
						default:
							return e
					}
				},
				$t = Object(r.c)({
					error: Zt,
					pending: Xt
				});
			const en = {};
			var tn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ut.u: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: i
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: i
							}
						}
					}
					default:
						return e
				}
			};
			const nn = {};
			var rn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ut.u: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, i = s[s.length - 1] || null;
							return {
								...e,
								[n]: i
							}
						}
						default:
							return e
					}
				},
				sn = Object(r.c)({
					api: $t,
					itemOrder: tn,
					loadMore: rn
				});
			var on = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ut.B:
					case ut.A:
						return null;
					case ut.z:
						return t.payload;
					default:
						return e
				}
			};
			var an = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ut.B:
							return !0;
						case ut.A:
						case ut.z:
							return !1;
						default:
							return e
					}
				},
				cn = Object(r.c)({
					error: on,
					pending: an
				});
			const dn = {};
			var ln = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ut.A: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: i
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: i
							}
						}
					}
					default:
						return e
				}
			};
			const un = {};
			var mn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : un,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ut.A: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, i = s[s.length - 1] || null;
							return {
								...e,
								[n]: i
							}
						}
						default:
							return e
					}
				},
				pn = Object(r.c)({
					api: cn,
					itemOrder: ln,
					loadMore: mn
				}),
				bn = Object(r.c)({
					bulkAction: vt,
					edited: St,
					moderatedCommunitiesOrder: Dt,
					modqueue: Ht,
					reports: Jt,
					spam: sn,
					unmoderated: pn
				});
			var fn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.Y:
					case s.W:
						return null;
					case s.V:
						return t.payload;
					default:
						return e
				}
			};
			const hn = {};
			var gn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.Y: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(o.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case s.W:
						case s.V: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(o.e)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				_n = Object(r.c)({
					error: fn,
					pending: gn
				});
			const vn = {};
			var xn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.W: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, s = Object(o.e)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				yn = n("./src/reddit/actions/inContextModeration.ts");
			var En = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case yn.b:
						return t.payload;
					default:
						return e
				}
			};
			const On = {};
			var jn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : On,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.W: {
						const {
							subredditId: e,
							after: n
						} = t.payload;
						return {
							[e]: n
						}
					}
					default:
						return e
				}
			};
			const Cn = {};
			var In = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.X:
					case s.W: {
						const {
							subredditId: n,
							mutedUsers: r
						} = t.payload, s = {
							[n]: r
						};
						return Object(b.merge)(e, s)
					}
					case s.cb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(b.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var Sn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.bb:
					case s.ab:
						return null;
					case s.Z:
						return t.payload;
					default:
						return e
				}
			};
			var kn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.bb:
							return !0;
						case s.ab:
						case s.Z:
							return !1;
						default:
							return e
					}
				},
				Nn = Object(r.c)({
					error: Sn,
					pending: kn
				});
			var wn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.bb:
						case s.Z:
							return null;
						case s.ab: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				Tn = Object(r.c)({
					api: Nn,
					result: wn
				});
			const Pn = {};
			var Ln = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.W: {
							const {
								subredditId: n,
								mutedUserIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case s.cb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case s.X: {
							const {
								subredditId: n,
								mutedUserIds: r
							} = t.payload, s = r[0];
							return s && e[n] && -1 === e[n].indexOf(s) ? {
								[n]: [s, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				Dn = Object(r.c)({
					api: _n,
					fetchedTokens: xn,
					inContext: En,
					loadMore: jn,
					models: In,
					search: Tn,
					userOrder: Ln
				});
			t.a = Object(r.c)({
				approvedSubmitters: j,
				approvedTalkHosts: R,
				flairedUsers: te,
				moderationLog: xe,
				moderators: ct,
				modQueue: bn,
				muted: Dn
			})
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			}));
			var r = n("./node_modules/reselect/es/index.js");
			const s = e => e.appBadges.badges,
				i = Object(r.a)(s, e => {
					var t;
					return (null === (t = e.chatUnreadMessages) || void 0 === t ? void 0 : t.count) || 0
				}),
				o = e => {
					var t;
					return (null === (t = e.appBadges.badges.chatV2UnreadMessages) || void 0 === t ? void 0 : t.count) || 0
				},
				a = Object(r.a)(s, e => e && e.chatRooms && e.chatRooms.count || 0),
				c = Object(r.a)(s, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				d = Object(r.a)(i, s, (e, t) => {
					var n;
					return 0 === e && !!(null === (n = t.chatHasNewMessages) || void 0 === n ? void 0 : n.isShowing)
				}),
				l = Object(r.a)(s, e => e && e.activityTab && e.activityTab.count || 0),
				u = Object(r.a)(s, e => e && e.messageTab && e.messageTab.count || 0),
				m = Object(r.a)(l, u, (e, t) => e + t),
				p = Object(r.a)(i, m, (e, t) => e + t)
		},
		"./src/reddit/selectors/contentGate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = e => {
				if (!Object(i.S)(e)) return !1;
				const t = Object(s.d)(e);
				if (!t) return !1;
				const n = Object(i.h)(e, t);
				if (!n) return !1;
				if (!n.privateSubreddit) return !1;
				const {
					isContributorRequestTimestamp: o
				} = n;
				if (!o) return !1;
				const a = 30 * r.D;
				return o > Date.now() - a
			}
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/constants/postLayout.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => s.e[Object(i.U)(e, {})] === s.d.Card,
				c = e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: r.sb
				}) === r.fd.Treatment
		},
		"./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/server/helpers/canonicalUrl.tsx");
			const o = (e, t) => e.find(e => t <= e);

			function a(e, t) {
				return Object(i.c)(`/best/communities/${e}/#${t}`)
			}

			function c(e, t) {
				return e > 50 ? {
					percentile: o([0, 1, 5, 10, 20, 50], t),
					position: e
				} : {
					position: e
				}
			}
			var d = n("./src/reddit/selectors/subreddit.ts");
			const l = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.L,
						expEventOverride: !1
					}) === r.U.Enabled
				},
				u = (e, t) => {
					let {
						subredditId: n,
						subredditAboutInfo: r
					} = t;
					if (l(e) && n && (null == r ? void 0 : r.directoryRankings)) return function(e, t) {
						const n = null === (r = e.rankings) || void 0 === r ? void 0 : r[0];
						var r;
						if (n && n.position > 0 && t) {
							const e = Math.ceil(n.position / n.totalRanked * 100);
							if (e <= 50) return {
								url: a(n.pageNumber, t),
								...c(n.position, e)
							}
						}
					}(r.directoryRankings, n)
				},
				m = (e, t) => {
					const n = Object(d.C)(e, {
							subredditName: t
						}),
						r = Object(d.z)(e, {
							subredditName: t
						});
					return u(e, {
						subredditId: null == n ? void 0 : n.id,
						subredditAboutInfo: r
					})
				},
				p = e => {
					const t = e.platform.currentPage,
						n = t && t.routeMatch,
						r = n ? n.match.params.subredditName : void 0;
					if (!r) return;
					const s = m(e, r);
					return (null == s ? void 0 : s.url) ? {
						internalLinkUrl: null == s ? void 0 : s.url
					} : void 0
				}
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: i.S,
						experimentName: r.Hd
					});
					return !(!t || Object(r.Lg)(t))
				},
				a = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: i.S,
						experimentName: r.Hd
					}) === r.ce.ListingEnabled
				}
		},
		"./src/reddit/selectors/experiments/garlicBread.ts": function(e, t, n) {
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
				i = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => !0,
				u = Object(r.a)(d.Z, d.Q, (e, t) => !(e || t)),
				m = e => {
					if (!u(e)) return;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: l,
						experimentName: i.ge,
						expEventOverride: !1
					});
					return null == t ? void 0 : t.toLocaleLowerCase()
				},
				p = e => {
					var t;
					const n = m(e);
					if (!n) return !1;
					let r = Object(c.r)(e),
						i = Object(c.d)(e);
					if ("undefined" != typeof window && (!i || r !== s.Tb.SUBREDDIT)) {
						const e = Object(a.a)("subreddit", window.location.href);
						(i = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (r = s.Tb.SUBREDDIT)
					}
					if (i && n) {
						const e = (null == i ? void 0 : i.toLocaleLowerCase()) === n;
						return r === s.Tb.SUBREDDIT && e
					}
					return !1
				},
				b = e => !!m(e) && Object(o.c)(e, {
					experimentEligibilitySelector: u,
					experimentName: i.he,
					expEventOverride: !1
				}) !== i.ne.Readonly
		},
		"./src/reddit/selectors/experiments/hidePostMitigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.ue
					}) === r.Yd
				},
				o = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.ve
					}) === r.Yd
				}
		},
		"./src/reddit/selectors/experiments/i18n/hideTrending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./node_modules/reselect/es/index.js");
			const o = Object(i.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.Ob
				}), e => e === r.xe.HideTrending),
				a = Object(i.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.Ob,
					expEventOverride: !1
				}), e => e === r.xe.HideTrending)
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
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
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts");
			const a = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Vb,
					experimentEligibilitySelector: o.e
				}), e => e === s.Z.Enabled),
				c = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Wb,
					experimentEligibilitySelector: o.e
				}), e => e === s.ab.Enabled),
				d = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Xb,
					experimentEligibilitySelector: o.e
				}), e => e === s.bb.Enabled),
				l = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Yb,
					experimentEligibilitySelector: o.e
				}), e => e === s.cb.Enabled),
				u = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.ac,
					experimentEligibilitySelector: o.e
				}), e => e === s.eb.Enabled),
				m = Object(r.a)(e => Object(i.c)(e, {
					experimentName: s.Zb,
					experimentEligibilitySelector: o.e
				}), e => e === s.db.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => Object(s.c)(e, {
				experimentName: r.Ue,
				experimentEligibilitySelector: s.a
			}) === r.df.Enabled
		},
		"./src/reddit/selectors/experiments/newCommunityProgressV3.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/constants/posts.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/selectors/experiments/index.ts"),
				d = n("./src/reddit/selectors/experiments/utils.ts"),
				l = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const b = e => e.subreddits.progressModule,
				f = e => {
					const t = Object(u.c)(e);
					if (!t) return;
					if (!Object(l.n)(e, {
							subredditId: t
						})) return;
					if (Object(p.P)(e)) return h(e);
					const n = Object(m.M)(e, {
						identifier: {
							id: t,
							type: o.a.SUBREDDIT
						}
					});
					if (!n || !n.created) return;
					const r = n.created;
					return r ? r * s.Xb < 1639443600180 ? void 0 : h(e) : void 0
				},
				h = Object(r.a)(e => Object(a.c)(e, {
					experimentName: i.Ve,
					experimentEligibilitySelector: c.e
				}), d.a)
		},
		"./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/localStorageAvailable/index.ts"),
				i = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/constants/localStorage.ts"),
				a = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				c = n("./src/reddit/selectors/userPrefs.ts"),
				d = n("./node_modules/reselect/es/index.js");
			const l = 30 * r.pb,
				u = () => {
					localStorage.setItem(o.b.XpromoConsolidation, (new Date).toString())
				},
				m = () => {
					if (!Object(s.a)()) return !1;
					const e = localStorage.getItem(o.b.XpromoConsolidation);
					if (!e) return !0;
					const t = Date.parse(e);
					return Number.isNaN(t) ? (localStorage.removeItem(o.b.XpromoConsolidation), !0) : Date.now() > t + l
				},
				p = (e, t) => t === a.a.NoPreview && (e === i.mb.SkippableButtons || e === i.mb.SkippableText),
				b = (e, t) => t === a.a.NoPreview && e === i.mb.NoUpsell,
				f = Object(d.a)(a.h, a.g, (e, t) => {
					return {
						isControlVariant: !(!e || !t) && ((e, t) => t === a.a.NoPreview && !p(e, t) && !b(e, t))(e, t),
						isNewDesignVariant: !(!e || !t) && p(e, t),
						isOldDesignVariant: !(!e || !t) && b(e, t),
						variant: e
					}
				}),
				h = Object(d.a)(f, c.a, (e, t) => !e.isOldDesignVariant && (!e.isNewDesignVariant || !t))
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
				return f
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts"),
				o = n("./src/reddit/selectors/experiments/presence.ts"),
				a = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(o.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.h
					});
					return t === r.l.VoteCountOnly || t === r.l.CommentCountOnly || t === r.l.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.d)(e) || Object(o.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.h
					});
					return t === r.l.VoteCountOnly || t === r.l.VoteAndCommentCount
				},
				u = e => {
					if (Object(a.d)(e) || Object(o.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.h
					});
					return t === r.l.CommentCountOnly || t === r.l.VoteAndCommentCount
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
					if (Object(a.d)(e) || !s || s.isSponsored || s.isScoreHidden || s.score >= c || Object(o.a)(e)) return !1;
					const d = Object(i.d)(e, {
							experimentName: r.h
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.l.VoteCountOnly || l === r.l.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const s = e.posts.models[n];
					if (Object(a.d)(e) || !s || s.isSponsored || s.numComments >= c || Object(o.a)(e)) return !1;
					const d = Object(i.d)(e, {
							experimentName: r.h
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.l.CommentCountOnly || l === r.l.VoteAndCommentCount
				},
				f = e => {
					if (Object(o.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.Gc
					}) === r.sd.Enabled
				}
		},
		"./src/reddit/selectors/experiments/postCreationSubRec.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "m", (function() {
				return j
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				i = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				c = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				d = n("./src/reddit/selectors/subreddit.ts");
			const l = 3,
				u = e => m(e) ? 1 : (p(e), .5),
				m = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: i.hf
					}) === i.jf.ContentMatch
				},
				p = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: i.hf
					}) === i.jf.ConfidenceAndSuccess
				},
				b = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: i.hf
					});
					return t === i.jf.ContentMatch || t === i.jf.ConfidenceAndSuccess || t === i.V.Control1 || t === i.V.Control2
				},
				f = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: i.hf
					});
					return t === i.V.Control1 || t === i.V.Control2
				},
				h = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: i.hf
					});
					return t === i.jf.ContentMatch || t === i.jf.ConfidenceAndSuccess
				},
				g = e => e.creations.subredditRec.api.pending,
				_ = e => e.creations.subredditRec.api.error,
				v = e => {
					return e.creations.subredditRec.order.length > 0
				},
				x = e => {
					const t = e.creations.subredditRec.order,
						n = [];
					return t.forEach(t => {
						const r = Object(d.z)(e, {
								subredditName: t
							}),
							s = Object(d.C)(e, {
								subredditName: t
							});
						if (s && r) {
							const e = {
								iconUrl: s.icon.url,
								name: s.name,
								primaryColor: s.primaryColor,
								subscribers: r.subscribers,
								type: c.a.OTHER_SUBREDDIT
							};
							n.push(e)
						}
					}), n
				},
				y = e => e.creations.subredditRec.isInputChanged,
				E = e => {
					if (!(e.creations.formData.submissionType === r.bc.POST)) return "";
					const t = e.creations.formState.editorMode === a.i.RICH_TEXT || null === e.creations.formState.editorMode,
						n = e.creations.formState.editorMode === a.i.MARKDOWN;
					if (t) {
						const t = e.creations.formData.body.rte;
						return s.a.getRawText(t, " ") || ""
					}
					return n && e.creations.formData.body.markdown || ""
				},
				O = e => {
					return e.creations.formData.submissionType === r.bc.LINK_ONLY && e.creations.formData.body.link || ""
				},
				j = e => b(e) && (!_(e) || _(e) && y(e)) && (e => {
					const t = e.creations.formData.title,
						n = O(e),
						r = E(e);
					return !!(t || n || r)
				})(e) && (e.creations.formData.submissionType === r.bc.POST || e.creations.formData.submissionType === r.bc.LINK_ONLY || e.creations.formData.submissionType === r.bc.CROSSPOST)
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.rf
				}) === r.Yd
			}
		},
		"./src/reddit/selectors/experiments/relatedCommunityRecommendationsSubreddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");

			function o(e) {
				return e === r.Ef.Minimalist || e === r.Ef.Description || e === r.Ef.SocialSignals
			}
			const a = e => {
				const t = Object(s.c)(e, {
					experimentEligibilitySelector: i.e,
					experimentName: r.Nc
				}) || r.V.Control1;
				return {
					isEnabled: o(t),
					variant: t
				}
			}
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/meta.ts");
			const o = e => Object(s.c)(e, {
				experimentEligibilitySelector: e => !Object(i.d)(e) && "US" === Object(i.b)(e),
				experimentName: r.Cf
			}) === r.Hf.Enabled
		},
		"./src/reddit/selectors/experiments/shredditMigration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "h", (function() {
				return O
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const o = /^\/?(new|top|hot|controversial|rising|best)?\/?$/,
				a = /^\/r\/all\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				c = /^\/r\/popular\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				d = /^\/r\/[^/]+\/?((controversial|new|about|top)\/?)?$/,
				l = /^\/r\/[^/]+\/w(iki)?\/?([^/]+\/?)?$/,
				u = /^\/u(?:ser)?\/[^/]+(\/[^/]+)?\/?$/,
				m = e => !!e.match(o) || !!e.match(c),
				p = e => !e.match(c) && (!e.match(a) && (!!e.match(d) || !!e.match(l))),
				b = (e, t) => !!m(t) && [r.hg.Enabled, r.hg.HardReload].includes(Object(s.c)(e, {
					experimentEligibilitySelector: i.f,
					experimentName: r.Qf
				})),
				f = (e, t) => !!t.match(a) && [r.hg.Enabled, r.hg.HardReload].includes(Object(s.c)(e, {
					experimentEligibilitySelector: i.f,
					experimentName: r.Of
				})),
				h = (e, t) => !!p(t) && [r.hg.Enabled, r.hg.HardReload].includes(Object(s.c)(e, {
					experimentEligibilitySelector: i.f,
					experimentName: r.Pf
				})),
				g = (e, t) => !(!p(t) && !m(t)) && Object(s.c)(e, {
					experimentEligibilitySelector: i.f,
					experimentName: r.we
				}) === r.Yd,
				_ = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: i.f,
						experimentName: r.Nf
					})
				},
				v = (e, t) => !!(e => {
					return /^(?:\/r\/[^\/]+)?\/search\/?$/i.test(e) || /^\/u(?:ser)?\/[^\/]+\/m\/[^\/]+\/search\/?$/i.test(e)
				})(t) && (_(e) === r.hg.Enabled || _(e) === r.hg.HardReload),
				x = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: i.f,
						experimentName: r.Rf
					})
				},
				y = (e, t) => !!(e => !!e.match(u))(t) && (x(e) === r.hg.Enabled || x(e) === r.hg.HardReload),
				E = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: i.e,
						experimentName: r.Uf
					})
				},
				O = (e, t) => !!(e => !!e.match(u))(t) && E(e) === r.hg.Enabled
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/selectors/user.ts"),
				o = n("./src/reddit/selectors/experiments/shredditMigration.ts");
			const a = Object(s.a)(i.S, e => !e),
				c = (e, t) => {
					const n = t();
					e.block(e => {
						let t = !1;
						if (Object(i.S)(n)) {
							Object(o.h)(n, e.pathname) && (t = !0)
						} else {
							const r = (e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname),
								s = Object(o.c)(n, e.pathname),
								i = Object(o.f)(n, e.pathname),
								a = Object(o.d)(n, e.pathname),
								c = Object(o.e)(n, e.pathname),
								d = Object(o.i)(n, e.pathname),
								l = Object(o.g)(n, e.pathname);
							(s || r || i || a || c || d || l) && (t = !0)
						}
						if (t) {
							const t = e.pathname + e.search;
							return Object(r.f)(n), window.location.href = t, !1
						}
					})
				}
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
				return f
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/meta.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(r.a)(o.h, o.d, a.e, (e, t, n) => !e && !t && !n);

			function d(e, t) {
				return n => Object(i.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[s.kd.Bottom_cell_dismissible]: e,
						[s.kd.Bottom_cell_dismissible_immediate_trigger]: e,
						[s.kd.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(s.Hb, !0),
				u = d(s.Ib, !0),
				m = d(s.Jb, !0),
				p = d(s.Hb, !1),
				b = d(s.Ib, !1),
				f = d(s.Jb, !1)
		},
		"./src/reddit/selectors/experiments/topPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const c = Object(r.a)(a.S, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(i.B)(n)
				}, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(i.Q)(n)
				}, (e, t, n) => !e && !t && n),
				d = Object(r.a)((e, t) => Object(o.c)(e, {
					experimentName: s.yd,
					experimentEligibilitySelector: e => c(e, t)
				}), e => e),
				l = e => e === s.rg.NoCommunityWidgets,
				u = e => e === s.rg.NoRulesModerators,
				m = e => e === s.rg.RelatedPostsDu
		},
		"./src/reddit/selectors/experiments/uxtsIntegration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => {
					var t;
					return (null === (t = null == e ? void 0 : e.user.experiments.byName[s.cd]) || void 0 === t ? void 0 : t.variant) === s.Yd
				},
				c = Object(r.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: o.S,
					experimentName: s.bc
				}), e => e === s.nd.BottomSheet),
				d = Object(r.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: o.S,
					experimentName: s.bc,
					expEventOverride: !1
				}), e => !!e)
		},
		"./src/reddit/selectors/newPostPill.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/postLayout.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = (e, t) => Object(o.R)(e) && ((e, t) => {
				const {
					layout: n,
					sort: o,
					listingKey: a
				} = t, c = (Object(i.y)(e, {
					listingKey: a
				}) || []).length;
				return n === s.g.Large && o !== r.bb.NEW && c >= 20
			})(e, t) ? 10 : -1
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			const r = e => e.user.notificationPrefs.api.getPreferences.loaded,
				s = e => e.user.notificationPrefs.api.getPreferences.pending,
				i = e => e.user.notificationPrefs.api.setPreferences.pending,
				o = e => e.user.notificationPrefs.preferences,
				a = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = e => e.user.notificationPrefs.isAskNotificationPromptVisible,
				d = (e, t) => {
					var n, r;
					const s = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						i = null === (n = null == s ? void 0 : s.rows) || void 0 === n ? void 0 : n.byId;
					return i && (null === (r = i[t]) || void 0 === r ? void 0 : r.isEnabled)
				}
		},
		"./src/reddit/selectors/notificationsInbox.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "h", (function() {
				return f
			}));
			var r = n("./src/lib/notifications/constants.ts"),
				s = n("./src/reddit/actions/notifications/utils.ts"),
				i = n("./node_modules/reselect/es/index.js");
			const o = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				a = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				c = Object(i.a)(a, e => !(!e || !e.hasNextPage)),
				d = Object(i.a)(a, e => e && e.endCursor),
				l = e => e.notificationsInbox && e.notificationsInbox.notifications,
				u = Object(i.a)(l, e => e.slice(0, 5)),
				m = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				p = Object(i.a)(l, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				b = Object(i.a)(l, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				}),
				f = Object(i.a)(s.a, e => e === r.d.NotificationsSupported)
		},
		"./src/reddit/selectors/postGuidance.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			}));
			const r = (e, t) => {
					let {
						subredditName: n
					} = t;
					return e.postGuidance.api.fetch.pending[n.toLowerCase()] || !1
				},
				s = (e, t) => {
					let {
						subredditName: n
					} = t;
					return e.postGuidance.models[n.toLowerCase()]
				},
				i = (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.postGuidance.allowlist[n]
				},
				o = e => e.creations.formState.postGuidance.isBlockRuleTriggered,
				a = e => e.creations.formState.postGuidance.titleTriggeredRules,
				c = e => e.creations.formState.postGuidance.bodyTriggeredRules,
				d = e => e.creations.formState.postGuidance.uniqueRules
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => e.searchQueryId
		},
		"./src/reddit/selectors/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			}));
			const r = e => e.tooltip.tooltipId,
				s = e => t => t.tooltip.tooltipId === e,
				i = e => e.tooltip.params
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
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/selectors/user.ts");
			const i = e => {
					const t = Object(s.S)(e);
					if (o(e)) return !1;
					const {
						subscriptionsPinned: n
					} = e.user.prefs;
					return void 0 === n && !t || !!n
				},
				o = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== r.Tb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./src/lib/fastdom/index.ts"),
				i = n("./src/reddit/actions/jsApi.ts");
			const o = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${a}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(i.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(o, `${r.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(o, `${r.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(i.b(t || "")), this.fireEventsQueue()
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
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"fbbc7389e1ff"}')
		},
		"./src/redditGQL/operations/BlockAwarder.json": function(e) {
			e.exports = JSON.parse('{"id":"9769ffbb7031"}')
		},
		"./src/redditGQL/operations/DeleteInboxNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"ce2deb9deef7"}')
		},
		"./src/redditGQL/operations/FetchSubredditsNotificationSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"5d042135b4c5"}')
		},
		"./src/redditGQL/operations/GetRelatedCommunityRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"1a3f607eabf6"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"be3e43b15ada"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeedSlimmed.json": function(e) {
			e.exports = JSON.parse('{"id":"916e9e9be5e0"}')
		},
		"./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/redditGQL/operations/SubredditAbout.json": function(e) {
			e.exports = JSON.parse('{"id":"4016ffe922f6"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"be09d1d59e65"}')
		},
		"./src/redditGQL/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/redditGQL/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/redditGQL/operations/UpdateSubredditNotificationSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"0af4f630a2e1"}')
		},
		"./src/redditGQL/operations/UserSubredditsNotificationsLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"775bcf2e4ca3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit.4dd858919931c9f5317e.js.map