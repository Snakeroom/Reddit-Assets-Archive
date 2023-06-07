// https://www.redditstatic.com/desktop2x/ReportFlow.33a8cdf4309353515ec3.js
// Retrieved at 6/6/2023, 10:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlow", "ReportFlowNew"], {
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isPseudoLocale = t.isISOLocaleSupported = t.toISOLocale = t.isoLocaleToR2Language = void 0;
			const o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
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
				s = {
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
				a = Object.keys(s).reduce((e, t) => (r.has(t) && (e[t] = s[t]), e), {}),
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
				let o = n.toLowerCase();
				const r = t[2];
				return r && (o = `${o}-${r.toUpperCase()}`), o
			};
			const l = new Set(Object.keys(i));
			t.isISOLocaleSupported = e => !!e && l.has(e), t.isPseudoLocale = e => !!e && (e === o.PSEUDO_AUTO || Object.values(o.PseudoLocale).includes(e))
		},
		"./node_modules/deep-diff/index.js": function(e, t, n) {
			var o, r;
			r = function(e) {
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

				function o(e, t) {
					Object.defineProperty(this, "kind", {
						value: e,
						enumerable: !0
					}), t && t.length && Object.defineProperty(this, "path", {
						value: t,
						enumerable: !0
					})
				}

				function r(e, t, n) {
					r.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
						value: t,
						enumerable: !0
					}), Object.defineProperty(this, "rhs", {
						value: n,
						enumerable: !0
					})
				}

				function s(e, t) {
					s.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
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

				function l(e, t, n) {
					var o = e.slice((n || t) + 1 || e.length);
					return e.length = t < 0 ? e.length + t : t, e.push.apply(e, o), e
				}

				function d(e) {
					var t = typeof e;
					return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
				}

				function c(e) {
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
					})), t + c("[type: array, hash: " + t + "]");
					if ("object" === n) {
						for (var o in e)
							if (e.hasOwnProperty(o)) {
								var r = "[ type: object, key: " + o + ", value hash: " + u(e[o]) + "]";
								t += c(r)
							} return t
					}
					return t + c("[ type: " + n + " ; value: " + e + "]")
				}

				function p(e, t, n, o, l, c, m, h) {
					n = n || [], m = m || [];
					var f = (l = l || []).slice(0);
					if (null != c) {
						if (o) {
							if ("function" == typeof o && o(f, c)) return;
							if ("object" == typeof o) {
								if (o.prefilter && o.prefilter(f, c)) return;
								if (o.normalize) {
									var b = o.normalize(f, c, e, t);
									b && (e = b[0], t = b[1])
								}
							}
						}
						f.push(c)
					}
					"regexp" === d(e) && "regexp" === d(t) && (e = e.toString(), t = t.toString());
					var x, g, C, R, _ = typeof e,
						O = typeof t,
						w = "undefined" !== _ || m && m.length > 0 && m[m.length - 1].lhs && Object.getOwnPropertyDescriptor(m[m.length - 1].lhs, c),
						v = "undefined" !== O || m && m.length > 0 && m[m.length - 1].rhs && Object.getOwnPropertyDescriptor(m[m.length - 1].rhs, c);
					if (!w && v) n.push(new s(f, t));
					else if (!v && w) n.push(new a(f, e));
					else if (d(e) !== d(t)) n.push(new r(f, e, t));
					else if ("date" === d(e) && e - t != 0) n.push(new r(f, e, t));
					else if ("object" === _ && null !== e && null !== t) {
						for (x = m.length - 1; x > -1; --x)
							if (m[x].lhs === e) {
								R = !0;
								break
							} if (R) e !== t && n.push(new r(f, e, t));
						else {
							if (m.push({
									lhs: e,
									rhs: t
								}), Array.isArray(e)) {
								for (h && (e.sort((function(e, t) {
										return u(e) - u(t)
									})), t.sort((function(e, t) {
										return u(e) - u(t)
									}))), x = t.length - 1, g = e.length - 1; x > g;) n.push(new i(f, x, new s(void 0, t[x--])));
								for (; g > x;) n.push(new i(f, g, new a(void 0, e[g--])));
								for (; x >= 0; --x) p(e[x], t[x], n, o, f, x, m, h)
							} else {
								var E = Object.keys(e),
									y = Object.keys(t);
								for (x = 0; x < E.length; ++x) C = E[x], (R = y.indexOf(C)) >= 0 ? (p(e[C], t[C], n, o, f, C, m, h), y[R] = null) : p(e[C], void 0, n, o, f, C, m, h);
								for (x = 0; x < y.length; ++x)(C = y[x]) && p(void 0, t[C], n, o, f, C, m, h)
							}
							m.length = m.length - 1
						}
					} else e !== t && ("number" === _ && isNaN(e) && isNaN(t) || n.push(new r(f, e, t)))
				}

				function m(e, t, n, o, r) {
					var s = [];
					if (p(e, t, s, o, null, null, null, r), n)
						for (var a = 0; a < s.length; ++a) n(s[a]);
					return s
				}

				function h(e, t, n, o) {
					var r = m(e, t, o ? function(e) {
						e && o.push(e)
					} : void 0, n);
					return o || (r.length ? r : void 0)
				}

				function f(e, n, o) {
					if (void 0 === o && n && ~t.indexOf(n.kind) && (o = n), e && o && o.kind) {
						for (var r = e, s = -1, a = o.path ? o.path.length - 1 : 0; ++s < a;) void 0 === r[o.path[s]] && (r[o.path[s]] = void 0 !== o.path[s + 1] && "number" == typeof o.path[s + 1] ? [] : {}), r = r[o.path[s]];
						switch (o.kind) {
							case "A":
								o.path && void 0 === r[o.path[s]] && (r[o.path[s]] = []),
									function e(t, n, o) {
										if (o.path && o.path.length) {
											var r, s = t[n],
												a = o.path.length - 1;
											for (r = 0; r < a; r++) s = s[o.path[r]];
											switch (o.kind) {
												case "A":
													e(s[o.path[r]], o.index, o.item);
													break;
												case "D":
													delete s[o.path[r]];
													break;
												case "E":
												case "N":
													s[o.path[r]] = o.rhs
											}
										} else switch (o.kind) {
											case "A":
												e(t[n], o.index, o.item);
												break;
											case "D":
												t = l(t, n);
												break;
											case "E":
											case "N":
												t[n] = o.rhs
										}
										return t
									}(o.path ? r[o.path[s]] : r, o.index, o.item);
								break;
							case "D":
								delete r[o.path[s]];
								break;
							case "E":
							case "N":
								r[o.path[s]] = o.rhs
						}
					}
				}
				return n(r, o), n(s, o), n(a, o), n(i, o), Object.defineProperties(h, {
					diff: {
						value: h,
						enumerable: !0
					},
					orderIndependentDiff: {
						value: function(e, t, n, o) {
							var r = o ? function(e) {
									e && o.push(e)
								} : void 0,
								s = m(e, t, r, n, !0);
							return o || (s.length ? s : void 0)
						},
						enumerable: !0
					},
					observableDiff: {
						value: m,
						enumerable: !0
					},
					orderIndependentObservableDiff: {
						value: function(e, t, n, o, r, s, a) {
							return p(e, t, n, o, r, s, a, !0)
						},
						enumerable: !0
					},
					orderIndepHash: {
						value: u,
						enumerable: !0
					},
					applyDiff: {
						value: function(e, t, n) {
							e && t && m(e, t, (function(o) {
								n && !n(e, t, o) || f(e, t, o)
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
								var o, r, s = e;
								for (r = n.path.length - 1, o = 0; o < r; o++) void 0 === s[n.path[o]] && (s[n.path[o]] = {}), s = s[n.path[o]];
								switch (n.kind) {
									case "A":
										! function e(t, n, o) {
											if (o.path && o.path.length) {
												var r, s = t[n],
													a = o.path.length - 1;
												for (r = 0; r < a; r++) s = s[o.path[r]];
												switch (o.kind) {
													case "A":
														e(s[o.path[r]], o.index, o.item);
														break;
													case "D":
													case "E":
														s[o.path[r]] = o.lhs;
														break;
													case "N":
														delete s[o.path[r]]
												}
											} else switch (o.kind) {
												case "A":
													e(t[n], o.index, o.item);
													break;
												case "D":
												case "E":
													t[n] = o.lhs;
													break;
												case "N":
													t = l(t, n)
											}
											return t
										}(s[n.path[o]], n.index, n.item);
										break;
									case "D":
									case "E":
										s[n.path[o]] = n.lhs;
										break;
									case "N":
										delete s[n.path[o]]
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
			}(this), void 0 === (o = function() {
				return r
			}.call(t, n, t, e)) || (e.exports = o)
		},
		"./node_modules/lodash/findLastIndex.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseFindIndex.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/toInteger.js"),
				a = Math.max,
				i = Math.min;
			e.exports = function(e, t, n) {
				var l = null == e ? 0 : e.length;
				if (!l) return -1;
				var d = l - 1;
				return void 0 !== n && (d = s(n), d = n < 0 ? a(l + d, 0) : i(d, l - 1)), o(e, r(t, 3), d, !0)
			}
		},
		"./node_modules/lodash/uniqWith.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, t) {
				return t = "function" == typeof t ? t : void 0, e && e.length ? o(e, void 0, t) : []
			}
		},
		"./node_modules/lodash/xor.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayFilter.js"),
				r = n("./node_modules/lodash/_baseRest.js"),
				s = n("./node_modules/lodash/_baseXor.js"),
				a = n("./node_modules/lodash/isArrayLikeObject.js"),
				i = r((function(e) {
					return s(o(e, a))
				}));
			e.exports = i
		},
		"./src/higherOrderComponents/asModal/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			var o = n("./src/reddit/constants/elementIds.ts");
			const r = () => {
					const e = document.getElementById(o.a);
					e && (e.style.filter = "blur(10px)")
				},
				s = () => {
					const e = document.getElementById(o.a);
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
				return b
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/higherOrderComponents/asModal/helpers.ts"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/FocusTrap/index.ts"),
				l = n("./src/lib/portal/index.tsx"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/constants/shortcuts.ts"),
				u = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				p = n("./src/higherOrderComponents/asModal/index.m.less"),
				m = n.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const f = e => {
				let {
					className: t,
					shouldBlurBackground: n,
					isVisible: o,
					...s
				} = e;
				return r.a.createElement("div", h({
					className: Object(a.a)(m.a.overlay, t, {
						[m.a.mIsVisible]: o,
						[m.a.mIsBlurred]: n
					})
				}, s))
			};

			function b(e) {
				class t extends o.Component {
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
						}), Object(u.a)(), this.ref && (this.focusTrap = new i.b(this.ref), this.focusTrap.activate()), this.props.shouldBlurBackground && Object(s.a)()
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(u.b)(), Object(d.d)(), this.focusTrap && this.focusTrap.deactivate(), this.props.shouldBlurBackground && Object(s.b)()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: o,
							onOverlayClick: s,
							overlayClassName: i,
							overlayCustomStyles: d,
							shouldBlurBackground: u,
							withOverlay: p,
							...h
						} = t, b = h;
						return r.a.createElement(l.a, {
							container: document.getElementById(c.b)
						}, r.a.createElement(f, {
							className: i,
							isVisible: p,
							onClick: this.onOverlayClick,
							shouldBlurBackground: u,
							style: d
						}, r.a.createElement("div", {
							"aria-modal": !0,
							className: Object(a.a)(m.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, r.a.createElement(e, b))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => r.a.createElement(e, t)
			}
		},
		"./src/lib/FocusTrap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			const o = ['input:not([type="hidden"]):not([disabled])', "select:not([disabled])", "textarea:not([disabled])", "a[href]", "button:not([disabled])", '[tabindex]:not([tabindex="-1"]):not([disabled])', "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join();
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
					const e = this.container.querySelectorAll(o);
					return [e[0], e[e.length - 1]]
				}
				tryToFocusNode(e) {
					e !== document.activeElement && e.focus && e.focus()
				}
			}
		},
		"./src/lib/formatPythonString/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const o = /%\((\w+)\)s/g;

			function r(e, t) {
				return e.replace(o, (function(e, n) {
					return n in t ? t[n] : e
				}))
			}
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "g", (function() {
				return g
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const a = (e, t) => Object(r.a)(e, {
				...s,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var i = n("./src/reddit/selectors/blockedRedditors.ts");
			const l = "BLOCKED_REDDITORS_LIST__ADD",
				d = "BLOCKED_REDDITORS_LIST__REMOVE",
				c = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(o.a)(l),
				h = Object(o.a)(d),
				f = Object(o.a)(c),
				b = Object(o.a)(u),
				x = Object(o.a)(p),
				g = () => async (e, t, n) => {
					let {
						gqlContext: o
					} = n;
					const r = t(),
						s = Object(i.a)(r);
					if (Object(i.b)(r) || s.timestamp && Date.now() - s.timestamp < 36e6) return;
					let l = !1,
						d = "";
					do {
						e(x());
						const t = {
								after: d,
								pageSize: 100
							},
							n = await a(o(), t);
						if (n && n.ok) {
							const {
								data: {
									identity: t
								}
							} = n.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: n,
									edges: o
								} = t.blockedRedditorsInfo;
								if (e(b(o.map(e => e.node.id))), n) {
									const {
										hasNextPage: e,
										endCursor: t
									} = n;
									l = e, d = t || ""
								}
							} else l = !1
						} else {
							l = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(f({
								message: t
							}))
						}
					} while (l)
				}
		},
		"./src/reddit/actions/reportFlow/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			}));
			const o = "REPORT__PENDING",
				r = "REPORT__LOADED",
				s = "REPORT__FAILED",
				a = "REPORT_FLOW__TARGET_SET",
				i = "REPORT_FLOW__OPENED_FROM_MODAL_PAGE",
				l = "REPORT_FLOW__OPEN_CATEGORY",
				d = "REPORT_FLOW__USER_IS_MOD_SET"
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/lib/loadableAction/index.ts");
			const r = Object(o.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				s = Object(o.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				a = Object(o.a)(() => Promise.all([n.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), n.e("Governance~ModListing~Reddit~ReportFlow"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/reportFlow/reportFlow.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "postOrCommentReported", (function() {
				return P
			})), n.d(t, "reportFlowTargetSet", (function() {
				return D
			})), n.d(t, "reportFlowOpenedFromModalPage", (function() {
				return M
			})), n.d(t, "reportFlowOpenCategory", (function() {
				return B
			})), n.d(t, "reportFlowOpened", (function() {
				return U
			})), n.d(t, "reportFlowClosed", (function() {
				return K
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/reportRules.ts"),
				l = n("./src/reddit/actions/subreddit.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/actions/users.ts"),
				u = n("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"),
				p = n("./src/reddit/endpoints/post/report.ts"),
				m = n("./src/reddit/helpers/isComment.ts"),
				h = n("./src/reddit/helpers/isPost.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				g = n("./src/lib/initializeClient/installReducer.ts"),
				C = n("./node_modules/redux/es/redux.js"),
				R = n("./src/reddit/actions/reportFlow/constants.ts");
			const _ = {};
			var O = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.e:
					case R.d: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case R.c: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					case R.f: {
						const n = t.payload;
						return n ? {
							...e,
							[n]: !1
						} : e
					}
					default:
						return e
				}
			};
			const w = {};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.e: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					case R.d:
					case R.c: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case R.f: {
						const n = t.payload;
						return n ? {
							...e,
							[n]: !1
						} : e
					}
					default:
						return e
				}
			};
			const E = {};
			var y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.d: {
							const {
								id: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case R.e:
						case R.c: {
							const {
								id: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						case R.f: {
							const n = t.payload;
							return n ? {
								...e,
								[n]: !1
							} : e
						}
						default:
							return e
					}
				},
				S = Object(C.c)({
					error: O,
					pending: v,
					success: y
				}),
				k = n("./src/reddit/actions/platform.ts");
			var I = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.a:
						return t.payload;
					case a.c:
						return !t.payload && e;
					case k.b:
						return !1;
					case R.f:
						return !!t.payload && e;
					default:
						return e
				}
			};
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.f:
						return t.payload;
					case a.c:
						return t.payload ? null : e;
					case k.b:
						return null;
					default:
						return e
				}
			};
			var j = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.g:
						return t.payload;
					case R.f:
						return !1;
					default:
						return e
				}
			};
			var N = Object(C.c)({
				api: S,
				openedFromModalPage: I,
				postOrCommentId: T,
				userIsMod: j,
				rulesCategory: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.b:
							return t.payload
					}
					return e
				}
			});
			Object(g.a)({
				features: {
					reportFlow: N
				}
			});
			const F = Object(r.a)(R.e),
				A = Object(r.a)(R.d),
				L = Object(r.a)(R.c),
				P = (e, t) => async (n, r, s) => {
					let {
						apiContext: a
					} = s;
					const i = e.id,
						l = r(),
						c = l.features.reportFlow.api.pending[i],
						u = l.features.reportFlow.userIsMod;
					if (c) return;
					n(F({
						id: i
					}));
					const m = await Object(p.b)(a(), e),
						h = `error-report-${i}`;
					if (m.ok) n(A({
						id: i
					})), n(d.g(h)), !t.isAbuseOfReportButton && u && n(K());
					else {
						n(L({
							id: i
						}));
						const r = m.error && m.error.fields && m.error.fields.length ? m.error.fields[0].msg : "";
						n(d.f({
							id: h,
							kind: f.b.Error,
							text: r || o.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: o.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: P(e, t)
						}))
					}
				}, D = Object(r.a)(R.f), M = Object(r.a)(R.a), B = Object(r.a)(R.b), U = (e, t, n) => async (o, r, d) => {
					let {
						apiContext: u
					} = d;
					const p = r(),
						f = Object(m.a)(e);
					if (!Object(h.a)(e) && !f) return;
					const g = f ? p.features.comments.models[e] : p.posts.models[e];
					if (!g) return;
					if (!Object(x.S)(r())) return o(Object(s.openRegisterModal)()), void o(Object(a.k)({
						actionSource: a.a.Report,
						redirectUrl: g.permalink,
						thingId: e
					}));
					o(Object(c.z)(g.author));
					const C = Object(b.U)(p, {
						postId: f ? p.features.comments.models[e].postId : p.posts.models[e].id
					});
					p.reportRules.sitewideRules && p.reportRules.sitewideRules.length || o(Object(i.b)()), C && o(Object(l.o)(C.name, C.type)), o(D(e)), o(M(!!t)), n && o(B(n)), C && o(H(C.name))
				}, G = Object(r.a)(R.g), H = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const s = await Object(u.a)(r());
					t(G(s.ok && !!s.body[e]))
				}, K = () => async (e, t, n) => {
					let {
						apiContext: o
					} = n;
					e(D(null))
				}
		},
		"./src/reddit/actions/reportRules.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			const d = "SITEWIDE_RULES_LOADED",
				c = Object(r.a)(d),
				u = () => async (e, t, n) => {
					let {
						apiContext: o
					} = n;
					if (!t().user) return;
					const r = await (e => Object(a.a)(Object(i.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: s.pb.GET
					}))(o());
					if (r.ok) {
						const t = r.body,
							n = p(t.sitewide_rules);
						e(c(n))
					}
				}, p = e => {
					let t = [];
					if (e && e.length > 2) {
						const n = {
							reasonTextToShow: o.fbt._("It's spam or abuse", null, {
								hk: "21rHqk"
							}),
							nextStepReasons: [e[0], e[1], e[2]]
						};
						4 === e.length && n.nextStepReasons && n.nextStepReasons.push(e[3]), t.push(n), t = t.concat(e.slice(e.length - 1))
					}
					return t
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return c
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "g", (function() {
				return w
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/blockedRedditors.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/accounts/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const c = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				m = Object(r.a)(c),
				h = Object(r.a)(u),
				f = Object(r.a)(p),
				b = e => async (t, n, r) => {
					let {
						apiContext: d
					} = r;
					var c, u;
					if (n().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const p = await Object(i.a)(d(), e),
						x = `error-block-${e}`;
					if (p.ok) p.body.name && t(h(p.body)), p.body.id && t(Object(s.f)(p.body.id)), t(a.g(x)), t(a.f({
						kind: l.b.SuccessCommunity,
						text: o.fbt._("{username} is now blocked", [o.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
							type: p.error ? p.error.type : "Unknown error",
							username: e
						};
						t(f(n)), "REBLOCK_RATE_LIMIT" === (null === (c = p.body) || void 0 === c ? void 0 : c.reason) ? t(a.f({
							id: x,
							kind: l.b.Error,
							text: o.fbt._("You can't block u/{username} for 24 hours after unblocking them", [o.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: b(e)
						})) : "BLOCK_MAXIMUM" === (null === (u = p.body) || void 0 === u ? void 0 : u.reason) ? t(a.f({
							id: x,
							kind: l.b.Error,
							text: o.fbt._("You cannot block more than 1000 users.", null, {
								hk: "1G5SbN"
							})
						})) : t(a.f({
							id: x,
							kind: l.b.Error,
							text: o.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: o.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: b(e)
						}))
					}
				}, x = "USER_UNBLOCK__PENDING", g = "USER_UNBLOCK__SUCCESS", C = "USER_UNBLOCK__FAILED", R = Object(r.a)(x), _ = Object(r.a)(g), O = Object(r.a)(C), w = e => async (t, n, r) => {
					let {
						apiContext: c
					} = r;
					const u = n(),
						p = Object(d.m)(u),
						m = p ? p.id : void 0,
						h = u.user.blocked.data.filter(t => t.name === e)[0];
					m && (t(R({
						name: e
					})), (await Object(i.c)(c(), m, e)).ok ? (t(_({
						name: e
					})), h && h.id && t(Object(s.h)(h.id)), t(a.f({
						kind: l.b.SuccessCommunity,
						text: o.fbt._("{username} is now unblocked", [o.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(a.f({
						kind: l.b.Error,
						text: o.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(O({
						name: e
					}))))
				}
		},
		"./src/reddit/components/AccordionSection/index.m.less": function(e, t, n) {
			e.exports = {
				Section: "_2kFAvKy090RHUHuGKj-lZX",
				section: "_2kFAvKy090RHUHuGKj-lZX",
				ChevronDown: "_3BjAzUzYUogU-HEAy3M-Yz",
				chevronDown: "_3BjAzUzYUogU-HEAy3M-Yz",
				ChevronUp: "_1xdWrqXT33_Z6PRt1lntaq",
				chevronUp: "_1xdWrqXT33_Z6PRt1lntaq",
				ArticleWrap: "_1VLN7QOhCvaRusgG-RCzNY",
				articleWrap: "_1VLN7QOhCvaRusgG-RCzNY",
				mIsOpen: "_3wyxK8ak74f9lcJU0PCHYw",
				SectionHead: "_1MNP1i__B27h93k4ieBn36",
				sectionHead: "_1MNP1i__B27h93k4ieBn36",
				Article: "_1lO5zXuTJ63s0dtXcaPVbr",
				article: "_1lO5zXuTJ63s0dtXcaPVbr"
			}
		},
		"./src/reddit/components/AccordionSection/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				d = n("./src/reddit/components/AccordionSection/index.m.less"),
				c = n.n(d),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/lib/lessComponent.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const h = p.a.div("Section", c.a),
				f = p.a.wrapped(l.a, "ChevronUp", c.a),
				b = p.a.wrapped(i.a, "ChevronDown", c.a),
				x = p.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...o
					} = e;
					return r.a.createElement("div", m({
						className: Object(u.a)(t, {
							[c.a.mIsOpen]: n
						})
					}, o))
				}, "ArticleWrap", c.a),
				g = p.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...o
					} = e;
					return r.a.createElement("div", m({
						className: Object(u.a)(t, {
							[c.a.mIsOpen]: n
						})
					}, o))
				}, "SectionHead", c.a),
				C = p.a.div("Article", c.a);
			class R extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return r.a.createElement("div", null, r.a.createElement(h, null, this.props.open ? r.a.createElement(f, null) : r.a.createElement(b, null), r.a.createElement(g, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), r.a.createElement(x, {
						isOpen: this.props.open
					}, this.props.open ? r.a.createElement(C, null, this.props.children) : null)))
				}
			}
			t.a = Object(s.b)(null, e => ({
				onSwitchSection: () => e(Object(a.i)())
			}))(R)
		},
		"./src/reddit/components/ContentPolicy/index.m.less": function(e, t, n) {
			e.exports = {
				Content: "_3-EmzITVSpJTN0ZK7n_YaM",
				content: "_3-EmzITVSpJTN0ZK7n_YaM",
				Link: "_3O6FEW7DxfrphV_mOjif19",
				link: "_3O6FEW7DxfrphV_mOjif19"
			}
		},
		"./src/reddit/components/ContentPolicy/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var o = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ContentPolicy/index.m.less"),
				l = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), c = a.a.div("Content", l.a), u = a.a.a("Link", l.a);
			class p extends s.a.Component {
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement(c, null, e.subredditOrProfile ? d._("Read the {=Reddit Content Policy}{=and [communityName] 's rules}", [d._param("=Reddit Content Policy", s.a.createElement(u, {
						target: "_blank",
						href: `${o.a.redditUrl}/help/contentpolicy`
					}, d._("Reddit Content Policy", null, {
						hk: "2ExUXr"
					}))), d._param("=and [communityName] 's rules", s.a.createElement("span", null, d._("and {=[communityName] 's rules}", [d._param("=[communityName] 's rules", s.a.createElement(u, {
						target: "_blank",
						href: `${e.subredditOrProfile.url}about/rules`
					}, d._("{communityName} 's rules", [d._param("communityName", e.subredditOrProfile.displayText)], {
						hk: "JAsFF"
					})))], {
						hk: "Vm81O"
					})))], {
						hk: "Mm0Ks"
					}) : d._("Read the {=Reddit Content Policy}", [d._param("=Reddit Content Policy", s.a.createElement(u, {
						target: "_blank",
						href: `${o.a.redditUrl}/help/contentpolicy`
					}, d._("Reddit Content Policy", null, {
						hk: "1a3o6N"
					})))], {
						hk: "7x0QT"
					}))
				}
			}
		},
		"./src/reddit/components/CrisisFlow/async.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-CrisisFlow-CrisisFlowPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-CrisisFlow-CrisisFlowPage").then(n.bind(null, "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx"
				}
			})
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/constants/colors.ts");
			const s = {
				backgroundColor: r.a.overlayReportFlow
			};
			t.b = Object(o.a)({
				resolved: {},
				chunkName: () => "CrisisFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("CrisisFlow").then(n.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx")).then(e => e.default),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"
				}
			})
		},
		"./src/reddit/components/FormBuilder/async.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-FormBuilder",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~chat-components-OverlayReport-FormBuilder~reddit-components-FormBuilder"), n.e("reddit-components-FormBuilder")]).then(n.bind(null, "./src/reddit/components/FormBuilder/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/FormBuilder/index.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/FileAComplaint/index.m.less": function(e, t, n) {
			e.exports = {
				LinkHolder: "gzSFYulriiznSCkE16gKp",
				linkHolder: "gzSFYulriiznSCkE16gKp",
				Link: "_15Wqlxyx3Z-T-z0DvNxSCJ",
				link: "_15Wqlxyx3Z-T-z0DvNxSCJ",
				footer: "_1brqmxWqCHF82p5qKIJJBz"
			}
		},
		"./src/reddit/components/ReportFlow/FinalPage/index.m.less": function(e, t, n) {
			e.exports = {
				BlockUserIcon: "_37rrV-zeRd5Ucdm0TrBoWL",
				blockUserIcon: "_37rrV-zeRd5Ucdm0TrBoWL",
				BlockUserHeader: "_6NH8RSb5c3ZDmlEInbVbP",
				blockUserHeader: "_6NH8RSb5c3ZDmlEInbVbP",
				Link: "_1EO2dLuyej1lxpjgLomRmY",
				link: "_1EO2dLuyej1lxpjgLomRmY",
				OptionHeader: "_tnyUY3K3QRYAhNXyVpqL",
				optionHeader: "_tnyUY3K3QRYAhNXyVpqL",
				OptionDescription: "_28h-vNSAqg_z7uAAG5H82C",
				optionDescription: "_28h-vNSAqg_z7uAAG5H82C",
				OptionHolder: "_1WtXIu6c8H5Klz0QCdXB0x",
				optionHolder: "_1WtXIu6c8H5Klz0QCdXB0x",
				blockUserHolder: "_2t9wBmIMEVB6Ij8vJu809S",
				footer: "_3Xxf80A8a452XmYsr9D3B_"
			}
		},
		"./src/reddit/components/ReportFlow/FirstPage/index.m.less": function(e, t, n) {
			e.exports = {
				Footer: "_2U3QSqUpg8P1lhj6uVJ7Qz",
				footer: "_2U3QSqUpg8P1lhj6uVJ7Qz",
				SubmitButton: "_3s4nx6OebtFkWRvN_J8Zkh",
				submitButton: "_3s4nx6OebtFkWRvN_J8Zkh"
			}
		},
		"./src/reddit/components/ReportFlow/ReusableComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseButton: "_1H-0VdiEA3cu2IaA3u6w3D",
				closeButton: "_1H-0VdiEA3cu2IaA3u6w3D",
				ContentPolicyHolder: "BA5_E59qS-2W3eXSqJRQT",
				contentPolicyHolder: "BA5_E59qS-2W3eXSqJRQT",
				Header: "_2uqWToPxuHNDDcTURzsr3J",
				header: "_2uqWToPxuHNDDcTURzsr3J",
				Description: "_3ODQLS5KJ5iVo8z8A69hMp",
				description: "_3ODQLS5KJ5iVo8z8A69hMp",
				RadioOptionsSectionHeader: "_3UGcBFaDoE_98cAfDof17o",
				radioOptionsSectionHeader: "_3UGcBFaDoE_98cAfDof17o",
				DropdownRow: "tPieP_oh420XxFexXwjr_",
				dropdownRow: "tPieP_oh420XxFexXwjr_",
				PickerWrapper: "_2eAuOmdbHD4g71o3XWOx_v",
				pickerWrapper: "_2eAuOmdbHD4g71o3XWOx_v",
				SelectARuleLabel: "TYAWFOtYXkSFupwpJ0RoF",
				selectARuleLabel: "TYAWFOtYXkSFupwpJ0RoF",
				isChosen: "_3ocDAhKFsnxKiq_NXuqPnV",
				Dropdown: "_2KzxTaKJzMOKF52xyMs_BS",
				dropdown: "_2KzxTaKJzMOKF52xyMs_BS",
				DropdownTriangle: "-BX0TEwJyYy6YMztgn87c",
				dropdownTriangle: "-BX0TEwJyYy6YMztgn87c",
				Row: "_3mv2EXG5fgkAJbGwPMO_sj",
				row: "_3mv2EXG5fgkAJbGwPMO_sj"
			}
		},
		"./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less": function(e, t, n) {
			e.exports = {
				Dropdown: "H6Tl_y2c6WutwVvNUVsA9",
				dropdown: "H6Tl_y2c6WutwVvNUVsA9",
				FreeFormTextArea: "LfGyCwXYHBpCc27lxC6rk",
				freeFormTextArea: "LfGyCwXYHBpCc27lxC6rk"
			}
		},
		"./src/reddit/components/ReportFlow/Title/index.m.less": function(e, t, n) {
			e.exports = {
				Title: "DKSbQ0QcfECfr4r3QT7-u",
				title: "DKSbQ0QcfECfr4r3QT7-u",
				CloseWrapper: "xOUVwwi_b-bjJ4KFZk5Sh",
				closeWrapper: "xOUVwwi_b-bjJ4KFZk5Sh",
				Close: "_2B-LfwHdWwLdn-v09usrDn",
				close: "_2B-LfwHdWwLdn-v09usrDn"
			}
		},
		"./src/reddit/components/ReportFlow/_ReportFlow.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_2H5HLsAFlxLhy8xTjlHh0u",
				wrapper: "_2H5HLsAFlxLhy8xTjlHh0u",
				CloseWrapper: "_3mwc-yPQ30fuLlSfnIDCcT",
				closeWrapper: "_3mwc-yPQ30fuLlSfnIDCcT",
				Close: "_1HJttuQrGzRmTb0-EeKJFw",
				close: "_1HJttuQrGzRmTb0-EeKJFw"
			}
		},
		"./src/reddit/components/ReportFlow/_ReportFlow.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/formatPythonString/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/CrisisFlow/async.tsx"),
				p = n("./src/reddit/actions/reportFlow/index.ts"),
				m = n("./src/reddit/components/ContentPolicy/index.tsx"),
				h = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/higherOrderComponents/asTooltip.tsx"),
				b = n("./src/lib/classNames/index.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/index.tsx"),
				C = n("./src/reddit/controls/Dropdown/Row.tsx"),
				R = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				_ = n("./src/reddit/components/ReportFlow/ReusableComponents/index.m.less"),
				O = n.n(_);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = c.a.div("ContentPolicyHolder", O.a),
				E = c.a.div("Header", O.a),
				y = c.a.div("Description", O.a),
				S = c.a.wrapped(x.o, "CloseButton", O.a),
				k = c.a.div("RadioOptionsSectionHeader", O.a),
				I = c.a.wrapped(C.b, "DropdownRow", O.a),
				T = c.a.div("PickerWrapper", O.a),
				j = c.a.div("SelectARuleLabel", O.a),
				N = e => {
					let {
						className: t,
						isChosen: n,
						...o
					} = e;
					return s.a.createElement(j, w({
						className: Object(b.a)(t, {
							[O.a.isChosen]: n
						})
					}, o))
				},
				F = Object(f.a)(g.a),
				A = c.a.wrapped(F, "Dropdown", O.a),
				L = c.a.wrapped(R.b, "DropdownTriangle", O.a),
				P = c.a.wrapped(C.b, "Row", O.a);
			var D = n("./src/reddit/components/ReportFlow/FileAComplaint/index.m.less"),
				M = n.n(D);
			const B = c.a.div("LinkHolder", M.a),
				U = c.a.a("Link", M.a),
				G = c.a.wrapped(h.a, "footer", M.a);
			var H = e => s.a.createElement("div", null, s.a.createElement(E, null, e.complaintPageTitle), s.a.createElement(y, null, e.complaintPrompt || o.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), s.a.createElement(B, null, s.a.createElement(U, {
					target: "_blank",
					href: e.complaintUrl
				}, e.complaintButtonText)), s.a.createElement(G, null, s.a.createElement(v, null, s.a.createElement(m.a, {
					subredditOrProfile: e.subredditOrProfile
				})), s.a.createElement(S, {
					onClick: e.onClose
				}, o.fbt._("Close", null, {
					hk: "4gbyAA"
				})))),
				K = n("./src/reddit/actions/userBlocks.ts"),
				q = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				W = n("./src/reddit/icons/svgs/ProfileSlashed/index.tsx"),
				Q = n("./src/reddit/components/ReportFlow/FinalPage/index.m.less"),
				z = n.n(Q);
			const J = c.a.wrapped(h.a, "blockUserHolder", z.a),
				Y = c.a.wrapped(W.a, "BlockUserIcon", z.a),
				X = c.a.div("BlockUserHeader", z.a),
				V = c.a.div("OptionHolder", z.a),
				Z = c.a.div("OptionHeader", z.a),
				$ = c.a.div("OptionDescription", z.a),
				ee = c.a.a("Link", z.a),
				te = c.a.wrapped(h.a, "footer", z.a),
				ne = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse",
				oe = Object(i.c)({
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(e => e.name === t.authorName),
					users: e => e.users
				});
			class re extends s.a.Component {
				constructor() {
					super(...arguments), this.onBlockAuthor = e => {
						const {
							blockUserPending: t
						} = this.props;
						t.new !== q.a.pending && this.props.onBlockUser(e)
					}, this.getBlockUserHeaderText = () => {
						const {
							authorName: e,
							blockedUser: t,
							blockUserPending: n
						} = this.props;
						return n.new === q.a.pending ? o.fbt._("Pending...", null, {
							hk: "4x1oRk"
						}) : t ? o.fbt._("{username} is blocked", [o.fbt._param("username", e)], {
							hk: "3jnr1Z"
						}) : o.fbt._("Block {username}", [o.fbt._param("username", e)], {
							hk: "ohbdA"
						})
					}, this.renderAbuseOfReportButtonOption = () => s.a.createElement(V, null, s.a.createElement(Z, null, o.fbt._("Turn off free-form reports", null, {
						hk: "2yXM3i"
					})), s.a.createElement($, null, o.fbt._("If you are a moderator, you can {=visit the Help Center} to learn how to modify your subreddit’s reporting settings to disallow users from submitting free-form reports. We also have automated processes in place to prevent excessive reporting.", [o.fbt._param("=visit the Help Center", s.a.createElement(ee, {
						target: "_blank",
						href: ne
					}, o.fbt._("visit the Help Center", null, {
						hk: "1YxsbF"
					})))], {
						hk: "1WnTfk"
					}))), this.renderBlockUserOption = () => {
						const {
							props: e
						} = this, t = this.getBlockUserHeaderText();
						return s.a.createElement(J, {
							onClick: () => this.onBlockAuthor(e.authorName)
						}, s.a.createElement(Y, null), s.a.createElement("div", null, s.a.createElement(X, null, t), s.a.createElement($, null, o.fbt._("You won't see posts or comments from {username}. You can change this later in your preference.", [o.fbt._param("username", e.authorName)], {
							hk: "2iUUlN"
						}))))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement("div", null, s.a.createElement(E, null, o.fbt._("Thanks for letting us know!", null, {
						hk: "ytmSE"
					})), s.a.createElement(y, null, o.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "QxA7E"
					})), e.chosenRule.isAbuseOfReportButton ? this.renderAbuseOfReportButtonOption() : this.renderBlockUserOption(), s.a.createElement(te, null, s.a.createElement(v, null, s.a.createElement(m.a, {
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(S, {
						onClick: e.onClose
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			var se = Object(a.b)(oe, (e, t) => {
					let {} = t;
					return {
						onBlockUser: t => {
							e(Object(K.h)(t))
						}
					}
				})(re),
				ae = n("./src/reddit/components/AccordionSection/index.tsx"),
				ie = n("./src/reddit/actions/tooltip.ts"),
				le = n("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				de = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				ce = n("./src/reddit/endpoints/post/report.ts"),
				ue = n("./src/reddit/selectors/tooltip.ts");
			const pe = "ReportFlow--RedditRules",
				me = Object(i.c)({
					dropdownIsOpen: Object(ue.b)(pe)
				});
			class he extends s.a.Component {
				constructor() {
					super(...arguments), this.onRedditRuleChange = e => {
						this.props.onChosenRuleChange(e, e.requestCrisisSupport ? ce.a.CrisisTextLine : e.fileComplaint ? ce.a.FileComplaint : ce.a.SiteRule)
					}, this.onChosenRuleCleared = () => {
						this.props.onChosenRuleChange()
					}, this.onCustomTextChange = e => {
						this.props.onCustomTextChange(e)
					}
				}
				renderDropdownMenu(e) {
					const {
						props: t
					} = this, {
						onOpenDropdown: n,
						reason: r,
						rulesSequence: a
					} = t, i = r.nextStepReasons, l = a.length > e ? a[e] : -1, d = i && l >= 0 ? i[l] : null;
					return s.a.createElement(T, {
						onClick: n
					}, s.a.createElement(P, {
						displayText: d ? d.reasonTextToShow : "",
						id: pe
					}), s.a.createElement(L, null), s.a.createElement(N, {
						isChosen: !!d
					}, o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(A, {
						isFixed: !0,
						isOpen: t.dropdownIsOpen,
						tooltipId: pe
					}, i ? i.map((n, o) => s.a.createElement(I, {
						key: n.reasonTextToShow,
						displayText: n.reasonTextToShow,
						isSelected: l === o,
						onClick: n.nextStepReasons && n.nextStepReasons.length ? () => {
							t.onUpdateRulesSequence(o, e), this.onChosenRuleCleared()
						} : () => {
							t.onUpdateRulesSequence(o, e), this.onRedditRuleChange(n)
						}
					})) : null))
				}
				renderChildrenReasons(e, t, n) {
					const {
						props: o
					} = this, {
						rulesSequence: r
					} = o, a = e.nextStepReasons, i = r && r.length > t ? r[t] : -1, l = r && r.length > t + 1 ? r[t + 1] : -1;
					return a && a.length ? s.a.createElement("div", {
						style: {
							padding: `10px ${10*t}px`,
							display: i === n ? "block" : "none"
						}
					}, s.a.createElement(k, null, e.nextStepHeader), a.map((e, n) => {
						const o = l === n;
						return s.a.createElement("div", {
							key: e.reasonTextToShow
						}, s.a.createElement(de.a, {
							value: e.reasonText ? e.reasonText : "",
							label: e.reasonTextToShow,
							selected: o,
							onClick: e.nextStepReasons && e.nextStepReasons.length ? () => {
								this.props.onUpdateRulesSequence(n, t + 1), this.onChosenRuleCleared()
							} : () => {
								this.props.onUpdateRulesSequence(n, t + 1), this.onRedditRuleChange(e)
							}
						}), o && e.canWriteNotes && s.a.createElement(le.a, {
							depth: t + 1,
							onCustomTextChange: this.onCustomTextChange,
							title: e.notesInputTitle,
							description: e.notesInputDescription
						}), this.renderChildrenReasons(e, t + 1, n))
					})) : null
				}
				render() {
					const {
						props: e
					} = this, {
						reason: t,
						dropdownIsNeeded: n
					} = e;
					if (n) {
						const {
							rulesSequence: n
						} = e, o = t.nextStepReasons, r = n.length > 1 ? n[1] : -1, a = o && r >= 0 ? o[r] : null;
						return s.a.createElement("div", null, this.renderDropdownMenu(1), a ? this.renderChildrenReasons(a, 1, r) : null)
					}
					return t.nextStepReasons && t.nextStepReasons.length || (t.nextStepHeader = o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					}), t.nextStepReasons = [{
						reasonText: t.reasonText,
						reasonTextToShow: t.reasonTextToShow
					}]), this.renderChildrenReasons(t, 0, e.indexOfReason)
				}
			}
			var fe = Object(a.b)(me, e => ({
					onOpenDropdown: () => e(Object(ie.h)({
						tooltipId: pe
					}))
				}))(he),
				be = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				xe = n("./src/reddit/selectors/subreddit.ts"),
				ge = n("./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less"),
				Ce = n.n(ge);
			const Re = "ReportFlow--SubredditRules",
				_e = "Custom response",
				Oe = c.a.wrapped(A, "Dropdown", Ce.a),
				we = c.a.wrapped(I, "DropdownRow", Ce.a),
				ve = c.a.wrapped(be.i, "FreeFormTextArea", Ce.a),
				Ee = Object(i.c)({
					dropdownIsOpen: Object(ue.b)(Re),
					freeFormReports: xe.H
				});
			class ye extends s.a.Component {
				constructor(e) {
					super(e), this.onChangeDropdownRule = e => {
						this.setState({
							dropdownRule: e
						})
					}, this.onFreeFormResponseChange = e => {
						"" === e.currentTarget.value ? this.props.onChosenRuleChange() : this.props.onChosenRuleChange({
							reasonText: e.currentTarget.value,
							reasonTextToShow: e.currentTarget.value
						}, ce.a.Other)
					}, this.onChosenRuleCleared = () => {
						this.props.onChosenRuleChange()
					}, this.state = {
						dropdownRule: null
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = e.chosenRule && e.chosenRule.reasonText && e.subredditRules.includes(e.chosenRule.reasonText) ? e.chosenRule.reasonText : t.dropdownRule ? t.dropdownRule : "";
					return s.a.createElement("div", null, s.a.createElement(T, {
						onClick: e.onOpenDropdown
					}, s.a.createElement(P, {
						displayText: n,
						id: Re
					}), s.a.createElement(L, null), s.a.createElement(N, {
						isChosen: !!n
					}, o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(Oe, {
						isFixed: !0,
						isOpen: e.dropdownIsOpen,
						tooltipId: Re
					}, e.subredditRules.map((t, n) => s.a.createElement(we, {
						key: `${t}-${n}`,
						displayText: t,
						isSelected: !!e.chosenRule && e.chosenRule.reasonText === t,
						onClick: () => {
							e.onChosenRuleChange({
								reasonText: t,
								reasonTextToShow: t
							}, ce.a.Rule), this.onChangeDropdownRule(null)
						}
					})), e.freeFormReports ? s.a.createElement(we, {
						displayText: o.fbt._("Custom response", null, {
							hk: "1YMpvr"
						}),
						isSelected: t.dropdownRule === _e,
						onClick: () => {
							this.onChangeDropdownRule(_e), this.onChosenRuleCleared()
						}
					}) : null)), t.dropdownRule === _e ? s.a.createElement(ve, {
						placeholder: o.fbt._("Give us some detail about your report", null, {
							hk: "4Cp82U"
						}),
						onChange: this.onFreeFormResponseChange
					}) : null)
				}
			}
			var Se = Object(a.b)(Ee, e => ({
					onOpenDropdown: () => e(Object(ie.h)({
						tooltipId: Re
					}))
				}))(ye),
				ke = n("./src/reddit/models/RulesSequence/index.ts"),
				Ie = n("./src/reddit/models/Subreddit/index.ts"),
				Te = n("./src/reddit/components/ReportFlow/FirstPage/index.m.less"),
				je = n.n(Te);
			const Ne = c.a.wrapped(x.l, "SubmitButton", je.a);
			class Fe extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						rulesSequence: new ke.a
					}, this.onUpdateRulesSequence = this.onUpdateRulesSequence.bind(this)
				}
				onUpdateRulesSequence(e, t) {
					const {
						state: n
					} = this;
					n.rulesSequence.update(e, t), this.forceUpdate()
				}
				renderSubredditRulesSection(e) {
					const {
						props: t,
						state: n
					} = this, r = n.rulesSequence.getSequence(), a = t.subredditOrProfile ? t.subredditOrProfile.name : "";
					return s.a.createElement(ae.a, {
						key: "subreddit_rules_section_key",
						title: t.subredditOrProfile && t.subredditOrProfile.type === Ie.g.User ? o.fbt._("It breaks u/{subredditName}'s rules", [o.fbt._param("subredditName", a)], {
							hk: "QcQnb"
						}) : o.fbt._("It breaks r/{subredditName}'s rules", [o.fbt._param("subredditName", a)], {
							hk: "1Qdm9t"
						}),
						open: r.length > 0 && r[0] === e || "community" === t.rulesCategory,
						onOpen: () => this.onUpdateRulesSequence(e, 0)
					}, s.a.createElement(Se, {
						chosenRule: t.chosenRule,
						onChosenRuleChange: t.onChosenRuleChange,
						subredditId: t.subredditOrProfile ? t.subredditOrProfile.id : "",
						subredditRules: t.subredditRules
					}))
				}
				renderRulesSection(e, t) {
					const {
						props: n,
						state: o
					} = this, r = o.rulesSequence.getSequence();
					return s.a.createElement(ae.a, {
						key: e.reasonTextToShow,
						title: e.reasonTextToShow,
						open: r.length > 0 && r[0] === t,
						onOpen: () => this.onUpdateRulesSequence(t, 0)
					}, s.a.createElement(fe, {
						onChosenRuleChange: n.onChosenRuleChange,
						onCustomTextChange: n.onCustomTextChange,
						reason: e,
						indexOfReason: t,
						dropdownIsNeeded: 0 === t,
						rulesSequence: r,
						onUpdateRulesSequence: this.onUpdateRulesSequence
					}))
				}
				render() {
					const {
						props: e
					} = this, {
						reasons: t
					} = e;
					if (!t || !t.length) return null;
					const n = [t[0]].concat([{
						reasonTextToShow: "subredditRulesPlaceholder"
					}]).concat(t.slice(1));
					return s.a.createElement("div", null, s.a.createElement(E, null, o.fbt._("We're sorry something's wrong. How can we help?", null, {
						hk: "3ljmuE"
					})), n.map((e, t) => 1 === t ? this.renderSubredditRulesSection(t) : this.renderRulesSection(e, t)), s.a.createElement(h.a, {
						className: je.a.Footer
					}, s.a.createElement(v, null, s.a.createElement(m.a, {
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(S, {
						onClick: e.onClose
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})), s.a.createElement(Ne, {
						onClick: e.onSubmit,
						disabled: !e.ruleIsChosen
					}, e.submitButtonText ? e.submitButtonText : o.fbt._("Submit", null, {
						hk: "4aU3dh"
					}))))
				}
			}
			var Ae = Fe,
				Le = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Pe = n("./src/reddit/components/ReportFlow/Title/index.m.less"),
				De = n.n(Pe);
			const Me = c.a.wrapped(h.a, "Title", De.a),
				Be = c.a.div("CloseWrapper", De.a),
				Ue = c.a.wrapped(Le.a, "Close", De.a);
			var Ge = e => s.a.createElement(Me, null, s.a.createElement("div", null, e.title), s.a.createElement(Be, {
					onClick: e.onClosePressed
				}, s.a.createElement(Ue, null))),
				He = n("./src/reddit/models/ReportFlow/index.ts"),
				Ke = n("./src/reddit/selectors/commentSelector.ts"),
				qe = n("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				We = n("./src/reddit/selectors/posts.ts"),
				Qe = n("./src/reddit/components/ReportFlow/_ReportFlow.m.less"),
				ze = n.n(Qe);
			const Je = c.a.div("CloseWrapper", ze.a),
				Ye = c.a.wrapped(Le.a, "Close", ze.a),
				Xe = Object(i.c)({
					comment: (e, t) => {
						let {
							commentId: n
						} = t;
						return n ? Object(Ke.c)(e, {
							commentId: n
						}) : null
					},
					rulesCategory: e => e.features.reportFlow.rulesCategory,
					post: (e, t) => {
						let {
							postId: n
						} = t;
						return n ? Object(We.F)(e, {
							postId: n
						}) : null
					},
					reportedPending: e => e.features.reportFlow.api.pending,
					reportedSuccess: e => e.features.reportFlow.api.success,
					sitewideRules: e => e.reportRules.sitewideRules,
					subredditOrProfile: (e, t) => {
						let {
							postId: n
						} = t;
						return n ? Object(We.U)(e, {
							postId: n
						}) : null
					},
					subredditRules: e => e.subreddits.rules,
					userIsMod: e => e.features.reportFlow.userIsMod,
					crisisFlowEnabled: qe.a
				});
			class Ve extends s.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onSubmit = () => {
						if (this.state.chosenRule)
							if (this.props.crisisFlowEnabled)
								if (this.state.chosenRuleKind === ce.a.CrisisTextLine) this.setState({
									showCTLPage: !0
								});
								else if (this.state.chosenRuleKind === ce.a.FileComplaint) this.setState({
							showFileAComplaintPage: !0
						});
						else {
							const e = {
								rule: this.state.chosenRule.reasonText,
								kind: this.state.chosenRuleKind
							};
							this.state.chosenRule.canWriteNotes && (e.customText = this.state.customText), this.props.commentId ? this.props.onReportPostOrComment(this.props.commentId, e, this.state.chosenRule) : this.props.postId && this.props.onReportPostOrComment(this.props.postId, e, this.state.chosenRule)
						} else if (this.state.chosenRuleKind === ce.a.FileComplaint || this.state.chosenRuleKind === ce.a.CrisisTextLine) this.setState({
							showFileAComplaintPage: !0
						});
						else {
							const e = {
								rule: this.state.chosenRule.reasonText,
								kind: this.state.chosenRuleKind
							};
							this.state.chosenRule.canWriteNotes && (e.customText = this.state.customText), this.props.commentId ? this.props.onReportPostOrComment(this.props.commentId, e, this.state.chosenRule) : this.props.postId && this.props.onReportPostOrComment(this.props.postId, e, this.state.chosenRule)
						}
					}, this.onChosenRuleChange = (e, t) => {
						this.setState({
							chosenRule: e,
							chosenRuleKind: t
						})
					}, this.onCustomTextChange = e => {
						this.setState({
							customText: e
						})
					}, this.state = {
						showFileAComplaintPage: !1,
						showCTLPage: !1
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				getFirstPage() {
					const {
						state: e,
						props: t
					} = this, n = t.commentId ? He.a.Comment : He.a.Post, r = t.commentId ? t.reportedPending[t.commentId] : t.postId && t.reportedPending[t.postId], a = t.subredditRules, i = t.subredditOrProfile ? t.subredditOrProfile.id : null, l = new Array;
					if (i && a[i])
						for (const o of a[i].rules) o.kind !== n && o.kind !== He.a.All || l.push(0 !== o.violationReason.length ? o.violationReason : o.shortName);
					const d = t.sitewideRules;
					return s.a.createElement(Ae, {
						onSubmit: this.onSubmit,
						onClose: t.onCloseReportFlow,
						subredditRules: l,
						onChosenRuleChange: this.onChosenRuleChange,
						onCustomTextChange: this.onCustomTextChange,
						ruleIsChosen: !!e.chosenRule,
						chosenRule: e.chosenRule,
						reasons: d,
						rulesCategory: t.rulesCategory,
						subredditOrProfile: t.subredditOrProfile,
						submitButtonText: r ? o.fbt._("Pending", null, {
							hk: "2dd0cR"
						}) : void 0
					})
				}
				getInnerContent() {
					const {
						state: e,
						props: t
					} = this;
					if (e.chosenRule && e.chosenRule.fileComplaint && e.showFileAComplaintPage) return s.a.createElement(H, {
						complaintButtonText: e.chosenRule.complaintButtonText,
						complaintPageTitle: e.chosenRule.complaintPageTitle,
						complaintPrompt: e.chosenRule.complaintPrompt,
						complaintUrl: Object(d.a)(decodeURI(e.chosenRule.complaintUrl), {
							thing: t.commentId || t.postId
						}),
						onClose: t.onCloseReportFlow,
						subredditOrProfile: t.subredditOrProfile
					});
					if (e.chosenRule && t.commentId && t.reportedSuccess[t.commentId]) {
						const n = t.comment ? t.comment.author : "";
						return s.a.createElement(se, {
							authorName: n,
							chosenRule: e.chosenRule,
							onClose: t.onCloseReportFlow,
							subredditOrProfile: t.subredditOrProfile
						})
					}
					if (e.chosenRule && !t.commentId && t.postId && t.reportedSuccess[t.postId]) {
						const n = t.post ? t.post.author : "";
						return s.a.createElement(se, {
							authorName: n,
							chosenRule: e.chosenRule,
							onClose: t.onCloseReportFlow,
							subredditOrProfile: t.subredditOrProfile
						})
					}
					return this.getFirstPage()
				}
				getContent() {
					const {
						state: e,
						props: t
					} = this;
					if (t.crisisFlowEnabled && e.chosenRuleKind === ce.a.CrisisTextLine && e.showCTLPage) {
						let e;
						if (t.commentId ? e = t.comment && t.comment.author : t.postId && (e = t.post && t.post.author), e) return s.a.createElement(r.Fragment, null, s.a.createElement(Je, {
							onClick: this.handleReportFlowClose
						}, s.a.createElement(Ye, null)), s.a.createElement(u.a, {
							onCloseReportFlow: this.handleReportFlowClose,
							thingId: t.commentId ? t.commentId : t.postId,
							username: e
						}))
					}
					const n = (t.commentId ? He.a.Comment : He.a.Post) === He.a.Post ? o.fbt._("Report post", null, {
						hk: "1OIyCi"
					}) : o.fbt._("Report comment", null, {
						hk: "Buqls"
					});
					return s.a.createElement(r.Fragment, null, s.a.createElement(Ge, {
						onClosePressed: t.onCloseReportFlow,
						title: n
					}), s.a.createElement("div", null, this.getInnerContent()))
				}
				render() {
					return s.a.createElement("div", {
						className: ze.a.Wrapper
					}, this.getContent())
				}
			}
			const Ze = Object(a.b)(Xe, (e, t) => {
				let {
					timestamp: n
				} = t;
				return {
					onCloseReportFlow: () => {
						e(Object(p.b)())
					},
					onReportPostOrComment: (t, o, r) => {
						e(Object(p.a)({
							id: t,
							reportFlowPayload: o,
							timestamp: n
						}, r))
					}
				}
			})(Ve);
			t.default = Object(l.a)(Ze)
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNew.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "ValidThingReportTypes", (function() {
				return H
			}));
			var o = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/get.js"),
				a = n.n(s),
				i = n("./node_modules/react/index.js"),
				l = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/actions/reportFlow/index.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/components/CrisisFlow/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/telemetry/models/Event.ts");
			const x = e => t => ({
					source: b.f.UserReport,
					action: b.d.Click,
					noun: b.e.BlockUser,
					targetUser: {
						id: e
					},
					...f.o(t)
				}),
				g = e => t => ({
					source: "report_modal",
					action: b.d.Click,
					noun: "comment",
					comment: f.h({
						state: t,
						commentId: e
					}),
					media: {
						mimetype: f.j(t, e)
					},
					...f.o(t)
				});
			var C = n("./src/reddit/components/FormBuilder/async.tsx"),
				R = n("./src/reddit/actions/userBlocks.ts"),
				_ = n("./src/lib/makeGqlRequest/index.ts"),
				O = n("./src/redditGQL/operations/ReportComment.json");
			const w = (e, t) => Object(_.a)(e, {
				...O,
				variables: t
			});
			var v = n("./src/reddit/endpoints/messages/index.ts"),
				E = n("./src/reddit/endpoints/post/report.ts"),
				y = n("./src/redditGQL/operations/ReportForm.json");
			var S = n("./src/reddit/endpoints/talk/index.ts"),
				k = n("./src/reddit/contexts/ApiContext.tsx"),
				I = n("./src/reddit/models/Toast/index.ts"),
				T = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				j = n("./src/reddit/selectors/commentSelector.ts"),
				N = n("./src/reddit/selectors/experiments/reportAd.ts"),
				F = n("./src/reddit/selectors/meta.ts"),
				A = n("./src/reddit/selectors/posts.ts"),
				L = n("./src/reddit/selectors/user.ts"),
				P = n("./src/lib/lessComponent.tsx"),
				D = n("./src/reddit/components/ReportFlow/index.m.less"),
				M = n.n(D);
			const B = P.a.div("ReportLoaderWrapper", M.a),
				U = P.a.img("LoadingIcon", M.a),
				G = "2.1";
			var H;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(H || (H = {}));
			const K = Object(c.c)({
					post: (e, t) => {
						let {
							postId: n
						} = t;
						return n ? Object(A.F)(e, {
							postId: n
						}) : null
					},
					comment: (e, t) => {
						let {
							commentId: n
						} = t;
						return n ? Object(j.c)(e, {
							commentId: n
						}) : null
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(n => {
						const {
							commentId: o,
							postId: r
						} = t, s = o ? Object(j.c)(e, {
							commentId: o
						}) : null, a = r ? Object(A.F)(e, {
							postId: r
						}) : null;
						(s ? s.author : a ? a.author : null) || t.author;
						n.name
					}),
					isNightmodeOn: L.fb,
					locale: F.k,
					isReportAnAdEnabled: N.a
				}),
				q = Object(d.b)(K, (e, t) => {
					let {
						timestamp: n
					} = t;
					return {
						onCloseReportFlow: () => {
							e(Object(u.b)())
						},
						onBlockUser: t => {
							e(Object(R.h)(t))
						},
						showFailToast: () => e(Object(p.f)({
							kind: I.b.Error,
							text: r.fbt._("Something went wrong!", null, {
								hk: "1BEFhz"
							})
						}))
					}
				}),
				W = async (e, t, n, o, r) => {
					var s;
					const a = await ((e, t) => {
						let {
							itemId: n,
							formVersion: o,
							hostAppName: r,
							locale: s
						} = t;
						return Object(_.a)(e, {
							...y,
							variables: {
								itemId: n,
								hostAppName: r,
								formVersion: o,
								locale: s
							}
						})
					})(e, {
						itemId: t,
						formVersion: n,
						hostAppName: o,
						locale: r
					});
					if (a && a.ok) {
						const e = null === (s = a.body.data.reportForm) || void 0 === s ? void 0 : s.form;
						return e ? JSON.parse(e) : null
					}
				};
			class Q extends l.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: n,
							isReportAnAdEnabled: o,
							post: r
						} = this.props;
						let s, a, i, l;
						if (this.props.author && (i = this.props.author), t) s = t, a = H.Comment, this.props.comment && !i && (i = this.props.comment.author, l = this.props.comment.authorId);
						else if (e) s = e, r && r.isSponsored && o && (s = `ad_${r.impressionId}_${r.postId}`), a = H.Post, this.props.post && !i && (i = this.props.post.author, l = this.props.post.authorId);
						else {
							if (!n) throw new Error("Invalid object type passed to reporting flow");
							s = n, a = H.Message
						}
						return {
							itemId: s,
							itemType: a,
							itemAuthor: i,
							itemAuthorId: l
						}
					}, this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onBlockAuthor = (e, t) => {
						const {
							blockUserPending: n,
							sendEvent: o
						} = this.props;
						n.new !== T.a.pending && (this.props.onBlockUser(e), o(x(t)))
					}, this.onOpenCtlFlow = () => {
						this.props.postMessage && this.props.postMessage({
							type: "openCtl"
						}), this.setState({
							ctlFlowOpened: !0
						})
					}, this.onReportSubmit = async (e, t) => {
						var n;
						const {
							props: {
								gqlContext: o,
								showFailToast: r,
								hostAppName: s
							}
						} = this, {
							itemId: i,
							itemType: l
						} = this.getItemMetadata();
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: d,
							ruleType: c,
							customRule: u,
							freeText: p
						} = e, m = {
							fromHelpDesk: !1,
							hostAppName: s
						};
						switch (p && (m.freeText = a()(t, p.ref)), c) {
							case "site":
								m.siteRule = a()(t, d.ref).value || a()(t, d.ref);
								break;
							case "subreddit":
							default:
								const e = a()(t, d.ref);
								"other" === e && u ? m.customRule = a()(t, u.ref) : m.subredditRule = e
						}
						let h;
						switch (l) {
							case H.Post:
								if (null === (n = this.props.post) || void 0 === n ? void 0 : n.audioRoom) {
									const e = new URLSearchParams(window.location.href),
										t = parseInt(e.get("reportedTimeInSeconds") || "0", 10),
										n = {
											reportedAt: isNaN(t) ? 0 : t,
											postId: i,
											...m
										};
									h = () => Object(S.c)(o(), {
										input: n
									});
									break
								}
								const e = {
									postId: i,
									...m
								};
								h = () => Object(E.d)(o(), {
									input: e
								});
								break;
							case H.Comment:
								const t = {
									commentId: i,
									...m
								};
								h = () => (this.props.sendEvent(g(i)), w(o(), {
									input: t
								}));
								break;
							case H.Message:
								const r = {
									messageId: i,
									...m
								};
								h = () => Object(v.a)(o(), {
									input: r
								});
								break;
							default:
								throw new Error("Unsupported item type provided")
						}(await h()).ok || r()
					}, this.state = {
						ctlFlowOpened: !1,
						hasLoaded: !1
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					const {
						itemId: e
					} = this.getItemMetadata(), {
						locale: t,
						gqlContext: n,
						hostAppName: o
					} = this.props;
					W(n(), e, G, o, t).then(e => {
						e && this.setState({
							formComponent: e.component,
							formState: e.state,
							hasLoaded: !0
						})
					}), document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					var e;
					const {
						props: {
							isNightmodeOn: t,
							postId: n,
							commentId: s,
							messageId: a,
							isReportAnAdEnabled: i
						},
						state: {
							formComponent: d,
							formState: c,
							ctlFlowOpened: u,
							hasLoaded: p
						}
					} = this, h = i && (null === (e = this.props.post) || void 0 === e ? void 0 : e.isSponsored) ? r.fbt._("Report Ad", null, {
						hk: "4ncCdo"
					}) : r.fbt._("Submit a Report", null, {
						hk: "1v59vx"
					}), {
						itemAuthor: f,
						itemAuthorId: b
					} = this.getItemMetadata(), x = s || n || a;
					return u && f ? l.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						username: f,
						fromUserProfile: !x,
						onCloseCrisisModal: this.handleReportFlowClose,
						thingId: x
					}) : d && c && p ? l.a.createElement(C.a, {
						formComponent: d,
						formState: c,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: h,
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(f, b),
						onResize: this.props.onResize
					}) : l.a.createElement(B, null, l.a.createElement(U, {
						src: t ? `${o.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${o.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: r.fbt._("Loading", null, {
							hk: "wiY7"
						})
					}))
				}
			}
			t.default = Object(k.b)(q(Object(h.c)(Q)))
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/reddit/components/ReportFlow/_ReportFlowNew.tsx");
			t.default = Object(o.a)(r.default)
		},
		"./src/reddit/components/ReportFlow/index.m.less": function(e, t, n) {
			e.exports = {
				ReportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				reportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				LoadingIcon: "_2a3vKytEqctI3YbHm0Jt5d",
				loadingIcon: "_2a3vKytEqctI3YbHm0Jt5d"
			}
		},
		"./src/reddit/components/ReportPage/CustomTextInput/index.m.less": function(e, t, n) {
			e.exports = {
				customTextInput: "FGOwr4yXeN3ya-TdhfhA6",
				textAreaCounter: "_2nMs12tSLppI6tzUQbdtpO",
				Component: "DC3SDIBg6rz0oprqLxSAP",
				component: "DC3SDIBg6rz0oprqLxSAP"
			}
		},
		"./src/reddit/components/ReportPage/CustomTextInput/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				i = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				l = n("./src/reddit/models/Rule/index.ts"),
				d = n("./src/reddit/components/ReportPage/index.m.less"),
				c = n.n(d),
				u = n("./src/reddit/components/ReportPage/CustomTextInput/index.m.less"),
				p = n.n(u);
			const m = s.a.header("InputDescription", c.a);
			class h extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						customText: "",
						maxLength: l.d,
						displayLength: 0
					}, this.onCustomTextChange = e => {
						this.setState({
							customText: e.target.value,
							...f(e.target.value)
						}), this.props.onCustomTextChange(e.target.value)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement("fieldset", {
						className: c.a.fieldset
					}, e.description && r.a.createElement(m, null, e.description), r.a.createElement("div", {
						className: c.a.field
					}, r.a.createElement(a.c, {
						backgroundColorState: a.a.WhiteFields,
						className: p.a.customTextInput,
						label: e.title,
						maxLength: t.maxLength,
						onChange: this.onCustomTextChange,
						value: t.customText
					}), r.a.createElement("div", {
						className: p.a.textAreaCounter
					}, `${t.displayLength}/${l.a}`))))
				}
			}
			const f = e => {
				const t = {
					displayLength: 0,
					maxLength: l.d
				};
				if (!e) return t;
				const n = l.a,
					o = e.length,
					r = Object(i.b)(e),
					s = r.reduce((e, t) => t ? e + t.url.length : e, 0);
				return {
					displayLength: Math.min(l.a, o - s + 15 * r.length),
					maxLength: Math.min(l.d, n + s - 15 * r.length)
				}
			};
			t.a = s.a.wrapped(h, "Component", p.a)
		},
		"./src/reddit/components/ReportPage/index.m.less": function(e, t, n) {
			e.exports = {
				Description: "vC8DORRb-SrRf4xoExKnG",
				description: "vC8DORRb-SrRf4xoExKnG",
				errorMessage: "_2L8tQUjHvCyEJVnOnvqSP9",
				field: "_2niT9w1GKTvhvG5L0mD4y7",
				fieldset: "_1SmuWknXj7wdU6MauCQUaU",
				Footer: "_2qA_e-UZDTvGa2OXwjGC-l",
				footer: "_2qA_e-UZDTvGa2OXwjGC-l",
				Header: "jKS5xzUqtMgPR-nLIjfVJ",
				header: "jKS5xzUqtMgPR-nLIjfVJ",
				InputDescription: "FRqsDeKR5w-uDTyD5Euf9",
				inputDescription: "FRqsDeKR5w-uDTyD5Euf9",
				input: "_2CBq5X22pIRSa4bQwQ4u5C",
				FileAComplaintLink: "_2GZA8YxvhlZwMLh97Lm2NR",
				fileAComplaintLink: "_2GZA8YxvhlZwMLh97Lm2NR",
				Link: "ZTGvhuML-5HlQ9y8zLjlk",
				link: "ZTGvhuML-5HlQ9y8zLjlk",
				linkHolder: "qWNlfKYCsjoOcXc8gp8qU",
				RedirectToRedditLink: "_292L1vXCbAfFIjB0_Na13j",
				redirectToRedditLink: "_292L1vXCbAfFIjB0_Na13j"
			}
		},
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementTitle: "K64tMxMUJmCTojzEY7drh",
				formElementTitle: "K64tMxMUJmCTojzEY7drh",
				fake: "_3IIxv6iQHvjnKniUvSf8Oc",
				altColor: "_1Asmc3slr39Cm0G09a9de8",
				FormElementDescription: "_3jjsYZKgetVdF2QX1ekvEM",
				formElementDescription: "_3jjsYZKgetVdF2QX1ekvEM"
			}
		},
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less"),
				d = n.n(l);
			const c = a.a.wrapped(i.e, "FormElementTitle", d.a),
				u = a.a.wrapped(i.b, "FormElementDescription", d.a);
			t.a = e => r.a.createElement("div", null, r.a.createElement(c, {
				className: Object(s.a)({
					[d.a.fake]: e.fake,
					[d.a.altColor]: e.altColor
				})
			}, e.label), e.description && r.a.createElement(u, {
				className: Object(s.a)({
					[d.a.fake]: e.fake
				})
			}, e.description))
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_21N5nyVpBzbYCGTZ5WIri4",
				field: "_3K-rjepIoTAwKn_2B6UjSe",
				textareaField: "_3MvsRRj8v7ENJxFd2FRVzJ",
				textareaContainer: "_2q-RFz4xm8SXUM0zMrr8fq",
				mValid: "_2SuoSID5jS_A8otvMZNbUx",
				mInvalid: "_10eyptxJ3JPt74-_F9S7Y2",
				mWhiteField: "ywq-YkM3-987lbv_INHu_",
				control: "f_d5CYdNQxWwaGxH1SK7O",
				hasState: "_2N0IHX_0DbIGyJAPD5co-v",
				textarea: "_3zFItbRAgic4B5QFRuG51C",
				label: "_25QcYBzdEJtMuM4oKa6C_E",
				required: "_237-Cb_7kzH90efX4m0ikl",
				icon: "_3DmUjRewdA0uXlriQWqBi6",
				Invalid: "_1G5fQQh3gLl4hc3DIMA5j3",
				invalid: "_1G5fQQh3gLl4hc3DIMA5j3"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return f
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Input/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = a.a.div("icon", c.a),
				m = a.a.textarea("textarea", c.a),
				h = a.a.span("Invalid", c.a);
			var f, b;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(f || (f = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(b || (b = {}));
			const x = e => r.a.createElement("div", {
					className: Object(s.a)(e.isRequired && c.a.required, e.className, {
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[c.a.mValid]: e.state === f.Valid,
							[c.a.mInvalid]: e.state === f.Invalid,
							[c.a.mWhiteField]: e.backgroundColorState === b.WhiteFields
						}
					})
				}, r.a.createElement("label", {
					className: Object(s.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && r.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && r.a.createElement(p, {
					className: Object(s.a)({
						[c.a.mValid]: e.state === f.Valid,
						[c.a.mInvalid]: e.state === f.Invalid
					})
				}, e.state === f.Valid && r.a.createElement(l.a, null), e.state === f.Invalid && r.a.createElement(h, null, "!")))),
				g = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: o,
						isRequired: a,
						label: l,
						onKeyDown: d,
						state: p,
						...m
					} = e;
					return r.a.createElement(x, {
						backgroundColorState: t,
						className: n,
						isRequired: a,
						label: l,
						state: p
					}, r.a.createElement(i.a, u({}, m, {
						className: Object(s.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: o,
						onKeyDown: d
					})))
				},
				C = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: o,
						isRequired: a,
						label: i,
						onKeyDown: l,
						state: d,
						...p
					} = e;
					return r.a.createElement(x, {
						backgroundColorState: t,
						className: n,
						isRequired: a,
						label: i,
						state: d,
						isTextarea: !0
					}, r.a.createElement(m, u({}, p, {
						className: Object(s.a)({
							[c.a.mWhiteField]: e.backgroundColorState === b.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: o,
						onKeyDown: l
					})))
				}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less": function(e, t, n) {
			e.exports = {
				RadioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				radioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				ExpandRight: "_1fG2Q7CG6Ngau3siKKxZYP",
				expandRight: "_1fG2Q7CG6Ngau3siKKxZYP"
			}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less"),
				u = n.n(c);
			const p = s.a.wrapped(l.a, "RadioOption", u.a),
				m = s.a.wrapped(d.a, "ExpandRight", u.a);
			t.a = e => r.a.createElement(p, {
				value: e.value,
				selected: e.selected,
				onClick: e.onClick
			}, r.a.createElement(m, {
				heightLeft: 16,
				widthLeft: 16
			}, e.selected ? r.a.createElement(i.f, null) : r.a.createElement(i.e, null), r.a.createElement(a.a, {
				altColor: e.altColor,
				label: e.label,
				description: e.description
			})), e.children)
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
				return l
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "j", (function() {
				return _
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(r);
			const a = o.a.section("FormPage", s.a),
				i = o.a.h1("HomePageTitle", s.a),
				l = o.a.button("HomePageBreadcrumb", s.a),
				d = o.a.div("HomePageGroup", s.a),
				c = o.a.h1("FormPageTitle", s.a),
				u = o.a.div("FormPageSection", s.a),
				p = o.a.div("FormGroup", s.a),
				m = o.a.h2("FormGroupTitle", s.a),
				h = o.a.div("FormElement", s.a),
				f = o.a.div("FormGroupDescription", s.a),
				b = o.a.div("FormItem", s.a),
				x = o.a.h3("FormElementTitle", s.a),
				g = o.a.div("FormElementDescription", s.a),
				C = o.a.div("FormElementError", s.a),
				R = o.a.div("FormElementSubGroup", s.a),
				_ = o.a.li("FormListItem", s.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "g", (function() {
				return C
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				s = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(d);
			const u = o.a.wrapped(r.a, "ModalInput", c.a),
				p = o.a.input("Input", c.a),
				m = o.a.wrapped(l.a, "RadioOn", c.a),
				h = o.a.wrapped(i.a, "RadioOff", c.a),
				f = o.a.wrapped(s.a, "Checkbox", c.a),
				b = o.a.wrapped(a.a, "CheckboxSelected", c.a),
				x = o.a.textarea("Textarea", c.a),
				g = o.a.label("StyledLabel", c.a),
				C = o.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var o, r;
			n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(o || (o = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(r || (r = {}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var o = n("./node_modules/lodash/throttle.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				m = n.n(p),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				f = n.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends a.a.Component {
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
					}, n = Object(i.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(l.a, b({}, t, {
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
						className: Object(i.a)(f.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, b({}, t, {
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
						className: Object(i.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(c.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: m.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...n
				} = e;
				const o = Object(i.a)(f.a.row, t, {
					[f.a.mIsInteractive]: !n.noHover,
					[f.a.mIsSelected]: n.isSelected,
					[f.a.topics]: n.isTopicsStyle
				});
				return a.a.createElement(x, b({
					className: o
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
				muteSubreddit: "ui39KJ4PwbdKkxvIBbLbV",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
				c = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class p extends r.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === l.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return r.a.createElement("input", u({
						className: Object(a.a)(c.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(s.b)(null, {
				closeModal: i.f
			})(p)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/index.m.less"),
				s = n.n(r);
			t.a = o.a.input("input", s.a)
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, n) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/keycodes.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(c);
			class p extends r.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== a.b.Enter && e.key !== a.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : r.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(s.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? r.a.createElement(l.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : r.a.createElement(i.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = p
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(s);
			t.a = o.a.wrapped(r.default, "unstyledInternalLink", a.a)
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = async (e, t) => Object(s.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: r.pb.POST
			}), c = async (e, t, n) => Object(s.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: r.pb.POST
			}), u = async (e, t) => Object(s.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: r.pb.POST
			}), p = async (e, t) => Object(s.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: r.pb.POST
			}), m = async (e, t) => Object(s.a)(Object(a.a)(e, [i.a]), {
				endpoint: Object(l.a)(`${o.a.oauthUrl}/user/${t}/about`),
				method: r.pb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/post/report.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return f
			}));
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/helpers/reportPage/index.ts"),
				c = n("./src/redditGQL/operations/ReportPost.json");
			const u = (e, t) => Object(s.a)(e, {
				...c,
				variables: t
			});
			var p;
			! function(e) {
				e.Rule = "rule", e.SiteRule = "siteRule", e.Other = "other", e.FileComplaint = "fileComplaint", e.CrisisTextLine = "crisisTextLine"
			}(p || (p = {}));
			const m = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					method: o.pb.POST,
					endpoint: Object(l.a)(`${e.apiUrl}/api/report`),
					data: h(t)
				}),
				h = e => {
					const t = {
							thing_id: e.id,
							api_type: "json",
							...e.timestamp && {
								live_stream_relative_report_time_sec: e.timestamp.toString()
							}
						},
						{
							reportFlowPayload: n
						} = e;
					switch (n.customText && (t.custom_text = n.customText), n.kind) {
						case p.Other:
							return {
								...t, reason: "other", other_reason: n.rule
							};
						case p.Rule:
							return {
								...t, reason: n.rule, rule_reason: n.rule
							};
						case p.SiteRule:
						case p.CrisisTextLine:
						default:
							return {
								...t, reason: "site_reason_selected", site_reason: n.rule
							}
					}
				},
				f = (e, t, n) => Object(r.a)(Object(a.a)(e, [i.a]), {
					method: o.pb.POST,
					endpoint: Object(l.a)(`${e.apiUrl}/api/report`),
					data: b(t, n)
				}),
				b = (e, t) => {
					const n = {
						...Object(d.b)(e),
						api_type: "json"
					};
					return t && (n.from_help_desk = !0), n
				}
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = (n("./node_modules/uuid/dist/esm-browser/v4.js"), n("./src/lib/makeGqlRequest/index.ts")),
				s = n("./src/lib/makeRequest/index.ts"),
				a = (n("./src/reddit/models/Subreddit/index.ts"), n("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"), n("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"), n("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"), n("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json")),
				i = n("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				l = (n("./src/redditGQL/operations/PrepareLiveAudioRoom.json"), n("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"), n("./src/redditGQL/operations/ReportTalk.json")),
				d = (n("./src/redditGQL/operations/StartLiveAudioRoom.json"), n("./src/redditGQL/types.ts"));
			const c = (e, t) => Object(r.a)(e, {
					...l,
					variables: t
				}),
				u = async (e, t) => {
					const n = await Object(r.a)(e, {
						...a,
						variables: t
					});
					return !!Object(s.c)(n) && (n.body.data.subredditInfoById.allowedPostTypes || []).includes(d.O.Talk)
				}, p = async (e, t) => {
					var n, o;
					const a = await Object(r.a)(e, {
						...i,
						variables: t
					});
					return !!Object(s.c)(a) && (null !== (o = null === (n = a.body.data.profileByName) || void 0 === n ? void 0 : n.allowedPostTypes) && void 0 !== o ? o : []).includes(d.O.Talk)
				};
			d.k.ServiceError, o.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
				hk: "3XqPJS"
			}), d.k.UserNotAuthorized, o.fbt._("You don't have permission to start talks in this community.", null, {
				hk: "1XY1Ss"
			}), d.k.RoomLimitExceeded, o.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
				hk: "3zPx9X"
			}), d.k.ConcurrentRoomLimitExceeded, o.fbt._("Too many talks are happening right now. Try again later.", null, {
				hk: "2LYXJx"
			}), d.k.SubredditRoomLimitExceeded, o.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
				hk: "2mGf21"
			}), d.Q.ServiceError, o.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
				hk: "3XqPJS"
			}), d.Q.UserNotAuthorized, o.fbt._("You don't have permission to start talks in this community.", null, {
				hk: "1XY1Ss"
			})
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/env/index.ts"),
				r = n("./src/reddit/helpers/parseUrl.ts");
			const s = ["old", "new", "en", "www", "np", "m"],
				a = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(o.a)() ? [window.location.host] : []].concat("").concat(s.map((function(e) {
					return e + ".reddit.com"
				}))).concat(s.map((function(e) {
					return e + ".reddit.local"
				}))),
				i = ["mod.reddit.com"],
				l = {
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
				const n = l[e];
				if (!l) throw new Error("Could not find reddit URL spec: " + e);
				const o = Object(r.a)(t);
				if (!o) return void console.error("Could not parse url", t);
				if (-1 === (n.hostnames || a).indexOf(o.hostname)) return;
				const s = o.pathname.match(n.pathname);
				if (s) {
					return {
						url: t,
						routeName: e,
						components: n.pathnameComponents.reduce((function(e, t, n) {
							return e[t] = s[n + 1], e
						}), {})
					}
				}
			}

			function c(e) {
				return (e.match(new RegExp(r.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(l).some((function(n) {
						return t = d(n, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/reportPage/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return b
			}));
			var o = n("./src/reddit/models/RulesSequence/index.ts");
			const r = "(?:old\\.reddit\\.(?:com|local)|new\\.reddit\\.(?:com|local)|reddit\\.(?:com|local)|www\\.reddit\\.(?:com|local))",
				s = "(?:https?://)",
				a = `^${s}${r}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(?:\\w+)/(?:[^/]+)/(\\w+)(?:/.*)?`,
				i = `^${s}${r}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(\\w+)(?:/.*)?`,
				l = `^${s}${r}/message/messages/(\\w+)(?:/.*)?`,
				d = `^${s}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)(?:/)?$`,
				c = `^${s}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)/(\\w+)(?:/)?$`,
				u = `^${s}${r}/(?:rpan|live)/(?:(?:r)/(?:[^/]+)/)?(\\w+)(?:/.*)?`,
				p = `(?:${i}|${a}|${l}|${d}|${c}|${u})`,
				m = `(?:(?:${s}?${r}/)?(?:user|u)/)?([\\w-]+)(?:/)?`,
				h = `(?:(?:${s}?${r}/)?(?:r)/)?([\\w-]+)(?:/)?`,
				f = e => {
					const t = new RegExp(a),
						n = new RegExp(i),
						o = new RegExp(l),
						r = new RegExp(u),
						s = new RegExp(d),
						p = new RegExp(c);
					let f, b, x;
					if (e.thingUrl) {
						const a = e.thingUrl.trim();
						if (t.test(a)) {
							const e = t.exec(a);
							e && e.length > 1 && (f = "t1_" + e[1])
						} else if (n.test(a) || r.test(a)) {
							const e = n.exec(a) || r.exec(a);
							e && e.length > 1 && (f = "t3_" + e[1])
						} else if (o.test(a)) {
							const e = o.exec(a);
							e && e.length > 1 && (f = "t4_" + e[1])
						} else if (p.test(a)) {
							const e = p.exec(a);
							e && e.length > 2 && (b = e[1], x = e[2])
						} else if (s.test(a)) {
							const e = s.exec(a);
							e && e.length > 1 && (b = e[1])
						}
					}
					const g = new RegExp(m),
						C = new RegExp(h),
						R = [];
					let _;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (C.test(t)) {
							const e = C.exec(t);
							e && e.length > 1 && (_ = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let a = 0; a < e.usernames.length; a++) {
							const t = e.usernames[a].trim();
							if (g.test(t)) {
								const e = g.exec(t);
								e && e.length > 1 && R.push(e[1])
							}
						}
					const {
						reason: O
					} = e;
					return {
						reason: "site_reason_selected",
						site_reason: O.reasonText,
						additional_info: e.additionalInfo ? e.additionalInfo.join(",") : void 0,
						custom_text: e.customText,
						modmail_conv_id: b,
						modmail_msg_id: x,
						sr_name: _,
						thing_id: f,
						usernames: R.length ? R.join(",") : void 0
					}
				},
				b = (e, t) => {
					const n = new o.a;
					return x(n, e, t, 0), n
				},
				x = (e, t, n, o) => {
					for (let r = 0; r < t.length; r++) {
						const s = t[r];
						e.update(r, o);
						const a = e.getSequence().length;
						if (s.reasonAsParam === n) return;
						if (s.nextStepReasons && s.nextStepReasons.length && (x(e, s.nextStepReasons, n, o + 1), e.getSequence().length > a)) return;
						e.cut(o - 1)
					}
				}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(s.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				i = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return r.a.createElement("svg", l({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(s.a)(i.a.checkbox, t)
				}, n), r.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: n,
					...o
				} = e;
				return r.a.createElement("svg", l({
					className: Object(s.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o), r.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1d7BoD7egpRq9JmZVmVXkB"
			}
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ProfileSlashed/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M20.6762828,21.9082828 C24.2595318,21.3438035 27,18.2418134 27,14.5 L27,9.5 C27,5.357 23.642,2 19.5,2 C15.358,2 12,5.357 12,9.5 L12,13.232 L1.768,3 L0,4.768 L35.5,40.268 L37.268,38.5 L33.0284278,34.2604278 C33.3748442,33.9267307 33.7091584,33.5805628 34.03,33.222 C31.8688147,29.7169957 28.5050392,27.036225 24.5146241,25.7466241 L20.6762828,21.9082828 Z M18.227,25 C12.632,25.534 7.804,28.694 5,33.242 C8.662,37.334 13.982,39.911 19.906,39.911 C23.693,39.911 27.232,38.853 30.25,37.023 L18.227,25 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", l({}, e, {
				className: Object(s.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(r);
			t.a = o.a.div("inlineRow", s.a)
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				s = n.n(r);
			t.a = o.a.button("inlineButton", s.a)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				l = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(s.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: o,
					widthLeft: s,
					gutter: i,
					...c
				} = e;
				return r.a.createElement("div", d({
					className: Object(a.a)(l.a.expandRightContainer, t)
				}, c), r.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: s,
						height: o,
						marginRight: i
					}
				}, Array.isArray(n) && n[0]), r.a.createElement("div", {
					className: l.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/models/ReportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			}));
			var o, r, s;
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(o || (o = {})),
			function(e) {
				e.HARASSMENT_AT_ME = "HARASSMENT_AT_ME", e.HARASSMENT_AT_SOMEONE_ELSE = "HARASSSOMEONE_ELSENT_AT_ME", e.VIOLENCE_AT_ME = "VIOLENCE_AT_ME", e.VIOLENCE_AT_SOMEONE_ELSE = "VIOLENCE_AT_SOMEONE_ELSE", e.HATE_CONTENT = "HATE_CONTENT", e.MINOR_SEXUALIZATION = "HARASSMENT_AT_ME", e.PII_ABOUT_ME = "PII_ABOUT_ME", e.PII_ABOUT_SOMEONE_ELSE = "PII_ABOUT_SOMEONE_ELSE", e.INVOLUNTARY_PORN_SELF = "INVOLUNTARY_PORN_SELF", e.INVOLUNTARY_PORN_OTHER = "INVOLUNTARY_PORN_OTHER", e.PROHIBITED_SALES = "PROHIBITED_SALES", e.REPORT_BUTTON_ABUSE = "REPORT_BUTTON_ABUSE", e.IMPERSONATION_SELF = "IMPERSONATION_SELF", e.IMPERSONATION_OTHER = "IMPERSONATION_OTHER", e.COPYRIGHT_SELF = "COPYRIGHT_SELF", e.COPYRIGHT_OTHER = "COPYRIGHT_OTHER", e.TRADEMARK_SELF = "TRADEMARK_SELF", e.TRADEMARK_OTHER = "TRADEMARK_OTHER", e.NETZDG = "NETZDG", e.SELF_HARM = "SELF_HARM", e.SPAM_LINK_FARMING = "SPAM_LINK_FARMING", e.SPAM_UNSOLICITED_PMS = "SPAM_UNSOLICITED_PMS", e.SPAM_COMMENT_FLOODING = "SPAM_COMMENT_FLOODING", e.SPAM_MALWARE = "SPAM_MALWARE", e.SPAM_BOTS = "SPAM_BOTS", e.MISINFORMATION_HEALTH = "MISINFORMATION_HEALTH", e.MISINFORMATION_POLITICS = "MISINFORMATION_POLITICS", e.MISINFORMATION_FABRICATION = "MISINFORMATION_FABRICATION", e.MISINFORMATION_CONSPIRACY = "MISINFORMATION_CONSPIRACY", e.BAN_EVASION = "BAN_EVASION", e.VOTE_MANIPULATION = "VOTE_MANIPULATION"
			}(r || (r = {})),
			function(e) {
				e.R2 = "R2", e.MWEB = "MWEB", e.D2X = "D2X"
			}(s || (s = {}));
			const a = new Set(Object.values(s))
		},
		"./src/reddit/models/RulesSequence/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			class o {
				constructor() {
					this.sequence = []
				}
				getSequence() {
					return this.sequence
				}
				update(e, t) {
					const n = this.sequence.slice(0, t);
					n.push(e), this.sequence = n
				}
				cut(e) {
					const t = this.sequence.slice(0, e + 1);
					this.sequence = t
				}
			}
		},
		"./src/reddit/models/WhitelistAndBlocked.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(o || (o = {}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			}));
			n("./src/reddit/selectors/user.ts");
			const o = e => e.blockedRedditors.api.pending,
				r = e => e.blockedRedditors.list,
				s = (e, t) => {
					const n = (e => {
						const t = r(e);
						return t && t.ids
					})(e);
					return !!n && n.includes(t)
				}
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/user.ts");
			const a = e => o.a.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: s.S,
					experimentName: o.d
				}),
				i = e => o.b.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: s.S,
					experimentName: o.f
				})
		},
		"./src/reddit/selectors/experiments/reportAd.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(o.a)(e => Object(s.c)(e, {
					experimentName: r.Nc,
					experimentEligibilitySelector: s.a
				}), e => e),
				i = Object(o.a)(a, e => e === r.Td)
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"e35a47c6aa21"}')
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"f1f366237119"}')
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/redditGQL/operations/GetAvailableAudioRoomTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"05271fef4b69"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"34fa0ef8e099"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"a04297924fc8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"649e9f8bd6d9"}')
		},
		"./src/redditGQL/operations/ReportComment.json": function(e) {
			e.exports = JSON.parse('{"id":"cec8e7309a27"}')
		},
		"./src/redditGQL/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"404920cc0308"}')
		},
		"./src/redditGQL/operations/ReportPost.json": function(e) {
			e.exports = JSON.parse('{"id":"08c43db238fd"}')
		},
		"./src/redditGQL/operations/ReportTalk.json": function(e) {
			e.exports = JSON.parse('{"id":"139ca5b89cf9"}')
		},
		"./src/redditGQL/operations/StartLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"6e7ab4bd4873"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlow.33a8cdf4309353515ec3.js.map