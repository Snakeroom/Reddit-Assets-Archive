// https://www.redditstatic.com/desktop2x/vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e.d7270de3274859f24ef8.js
// Retrieved at 10/20/2022, 9:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"], {
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isPseudoLocale = t.isISOLocaleSupported = t.toISOLocale = t.isoLocaleToR2Language = void 0;
			const r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
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
					const n = i[t];
					return n && n.forEach(n => {
						e[n] = t
					}), e
				}, {});
			t.isoLocaleToR2Language = e => s[e], t.toISOLocale = e => {
				if (!e) return;
				const t = e.match(/^([a-zA-Z]{2,4})(?:[-_]([a-zA-Z]{2,4}))?$/);
				if (!t) return;
				const n = t[1];
				if (!n) return;
				let r = n.toLowerCase();
				const o = t[2];
				return o && (r = `${r}-${o.toUpperCase()}`), r
			};
			const l = new Set(Object.keys(s));
			t.isISOLocaleSupported = e => !!e && l.has(e), t.isPseudoLocale = e => !!e && (e === r.PSEUDO_AUTO || Object.values(r.PseudoLocale).includes(e))
		},
		"./node_modules/deep-diff/index.js": function(e, t, n) {
			var r, o;
			o = function(e) {
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

				function o(e, t, n) {
					o.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
						value: t,
						enumerable: !0
					}), Object.defineProperty(this, "rhs", {
						value: n,
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

				function s(e, t, n) {
					s.super_.call(this, "A", e), Object.defineProperty(this, "index", {
						value: t,
						enumerable: !0
					}), Object.defineProperty(this, "item", {
						value: n,
						enumerable: !0
					})
				}

				function l(e, t, n) {
					var r = e.slice((n || t) + 1 || e.length);
					return e.length = t < 0 ? e.length + t : t, e.push.apply(e, r), e
				}

				function c(e) {
					var t = typeof e;
					return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
				}

				function f(e) {
					var t = 0;
					if (0 === e.length) return t;
					for (var n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t &= t;
					return t
				}

				function u(e) {
					var t = 0,
						n = c(e);
					if ("array" === n) return e.forEach((function(e) {
						t += u(e)
					})), t + f("[type: array, hash: " + t + "]");
					if ("object" === n) {
						for (var r in e)
							if (e.hasOwnProperty(r)) {
								var o = "[ type: object, key: " + r + ", value hash: " + u(e[r]) + "]";
								t += f(o)
							} return t
					}
					return t + f("[ type: " + n + " ; value: " + e + "]")
				}

				function d(e, t, n, r, l, f, p, h) {
					n = n || [], p = p || [];
					var b = (l = l || []).slice(0);
					if (null != f) {
						if (r) {
							if ("function" == typeof r && r(b, f)) return;
							if ("object" == typeof r) {
								if (r.prefilter && r.prefilter(b, f)) return;
								if (r.normalize) {
									var m = r.normalize(b, f, e, t);
									m && (e = m[0], t = m[1])
								}
							}
						}
						b.push(f)
					}
					"regexp" === c(e) && "regexp" === c(t) && (e = e.toString(), t = t.toString());
					var v, g, y, O, w = typeof e,
						j = typeof t,
						x = "undefined" !== w || p && p.length > 0 && p[p.length - 1].lhs && Object.getOwnPropertyDescriptor(p[p.length - 1].lhs, f),
						k = "undefined" !== j || p && p.length > 0 && p[p.length - 1].rhs && Object.getOwnPropertyDescriptor(p[p.length - 1].rhs, f);
					if (!x && k) n.push(new a(b, t));
					else if (!k && x) n.push(new i(b, e));
					else if (c(e) !== c(t)) n.push(new o(b, e, t));
					else if ("date" === c(e) && e - t != 0) n.push(new o(b, e, t));
					else if ("object" === w && null !== e && null !== t) {
						for (v = p.length - 1; v > -1; --v)
							if (p[v].lhs === e) {
								O = !0;
								break
							} if (O) e !== t && n.push(new o(b, e, t));
						else {
							if (p.push({
									lhs: e,
									rhs: t
								}), Array.isArray(e)) {
								for (h && (e.sort((function(e, t) {
										return u(e) - u(t)
									})), t.sort((function(e, t) {
										return u(e) - u(t)
									}))), v = t.length - 1, g = e.length - 1; v > g;) n.push(new s(b, v, new a(void 0, t[v--])));
								for (; g > v;) n.push(new s(b, g, new i(void 0, e[g--])));
								for (; v >= 0; --v) d(e[v], t[v], n, r, b, v, p, h)
							} else {
								var _ = Object.keys(e),
									E = Object.keys(t);
								for (v = 0; v < _.length; ++v) y = _[v], (O = E.indexOf(y)) >= 0 ? (d(e[y], t[y], n, r, b, y, p, h), E[O] = null) : d(e[y], void 0, n, r, b, y, p, h);
								for (v = 0; v < E.length; ++v)(y = E[v]) && d(void 0, t[y], n, r, b, y, p, h)
							}
							p.length = p.length - 1
						}
					} else e !== t && ("number" === w && isNaN(e) && isNaN(t) || n.push(new o(b, e, t)))
				}

				function p(e, t, n, r, o) {
					var a = [];
					if (d(e, t, a, r, null, null, null, o), n)
						for (var i = 0; i < a.length; ++i) n(a[i]);
					return a
				}

				function h(e, t, n, r) {
					var o = p(e, t, r ? function(e) {
						e && r.push(e)
					} : void 0, n);
					return r || (o.length ? o : void 0)
				}

				function b(e, n, r) {
					if (void 0 === r && n && ~t.indexOf(n.kind) && (r = n), e && r && r.kind) {
						for (var o = e, a = -1, i = r.path ? r.path.length - 1 : 0; ++a < i;) void 0 === o[r.path[a]] && (o[r.path[a]] = void 0 !== r.path[a + 1] && "number" == typeof r.path[a + 1] ? [] : {}), o = o[r.path[a]];
						switch (r.kind) {
							case "A":
								r.path && void 0 === o[r.path[a]] && (o[r.path[a]] = []),
									function e(t, n, r) {
										if (r.path && r.path.length) {
											var o, a = t[n],
												i = r.path.length - 1;
											for (o = 0; o < i; o++) a = a[r.path[o]];
											switch (r.kind) {
												case "A":
													e(a[r.path[o]], r.index, r.item);
													break;
												case "D":
													delete a[r.path[o]];
													break;
												case "E":
												case "N":
													a[r.path[o]] = r.rhs
											}
										} else switch (r.kind) {
											case "A":
												e(t[n], r.index, r.item);
												break;
											case "D":
												t = l(t, n);
												break;
											case "E":
											case "N":
												t[n] = r.rhs
										}
										return t
									}(r.path ? o[r.path[a]] : o, r.index, r.item);
								break;
							case "D":
								delete o[r.path[a]];
								break;
							case "E":
							case "N":
								o[r.path[a]] = r.rhs
						}
					}
				}
				return n(o, r), n(a, r), n(i, r), n(s, r), Object.defineProperties(h, {
					diff: {
						value: h,
						enumerable: !0
					},
					orderIndependentDiff: {
						value: function(e, t, n, r) {
							var o = r ? function(e) {
									e && r.push(e)
								} : void 0,
								a = p(e, t, o, n, !0);
							return r || (a.length ? a : void 0)
						},
						enumerable: !0
					},
					observableDiff: {
						value: p,
						enumerable: !0
					},
					orderIndependentObservableDiff: {
						value: function(e, t, n, r, o, a, i) {
							return d(e, t, n, r, o, a, i, !0)
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
								n && !n(e, t, r) || b(e, t, r)
							}))
						},
						enumerable: !0
					},
					applyChange: {
						value: b,
						enumerable: !0
					},
					revertChange: {
						value: function(e, t, n) {
							if (e && t && n && n.kind) {
								var r, o, a = e;
								for (o = n.path.length - 1, r = 0; r < o; r++) void 0 === a[n.path[r]] && (a[n.path[r]] = {}), a = a[n.path[r]];
								switch (n.kind) {
									case "A":
										! function e(t, n, r) {
											if (r.path && r.path.length) {
												var o, a = t[n],
													i = r.path.length - 1;
												for (o = 0; o < i; o++) a = a[r.path[o]];
												switch (r.kind) {
													case "A":
														e(a[r.path[o]], r.index, r.item);
														break;
													case "D":
													case "E":
														a[r.path[o]] = r.lhs;
														break;
													case "N":
														delete a[r.path[o]]
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
													t = l(t, n)
											}
											return t
										}(a[n.path[r]], n.index, n.item);
										break;
									case "D":
									case "E":
										a[n.path[r]] = n.lhs;
										break;
									case "N":
										delete a[n.path[r]]
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
			}(this), void 0 === (r = function() {
				return o
			}.call(t, n, t, e)) || (e.exports = r)
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
					if (!t(e[n], n, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return r(e, (function(e, r, o) {
					return n = !!t(e, r, o)
				})), n
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayEvery.js"),
				o = n("./node_modules/lodash/_baseEvery.js"),
				a = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var l = i(e) ? r : o;
				return n && s(e, t, n) && (t = void 0), l(e, a(t, 3))
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFindIndex.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				a = n("./node_modules/lodash/toInteger.js"),
				i = Math.max,
				s = Math.min;
			e.exports = function(e, t, n) {
				var l = null == e ? 0 : e.length;
				if (!l) return -1;
				var c = l - 1;
				return void 0 !== n && (c = a(n), c = n < 0 ? i(l + c, 0) : s(c, l - 1)), r(e, o(t, 3), c, !0)
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
				o = n("./node_modules/lodash/_baseRest.js"),
				a = n("./node_modules/lodash/_baseXor.js"),
				i = n("./node_modules/lodash/isArrayLikeObject.js"),
				s = o((function(e) {
					return a(r(e, i))
				}));
			e.exports = s
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return pe
			}));
			var r = n("./node_modules/react/index.js");

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

			function f(e) {
				return (s(e) ? e.ownerDocument : e.document).documentElement
			}

			function u(e) {
				return o(f(e)).left + i(e).scrollLeft
			}

			function d(e) {
				return a(e).getComputedStyle(e)
			}

			function p(e) {
				var t = d(e),
					n = t.overflow,
					r = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + o + r)
			}

			function h(e, t, n) {
				void 0 === n && (n = !1);
				var r, s, d = f(t),
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
				return (b || !b && !n) && (("body" !== c(t) || p(d)) && (m = (r = t) !== a(r) && l(r) ? {
					scrollLeft: (s = r).scrollLeft,
					scrollTop: s.scrollTop
				} : i(r)), l(t) ? ((v = o(t)).x += t.clientLeft, v.y += t.clientTop) : d && (v.x = u(d))), {
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
				return "html" === c(e) ? e : e.assignedSlot || e.parentNode || e.host || f(e)
			}

			function v(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(c(t)) >= 0 ? t.ownerDocument.body : l(t) && p(t) ? t : e(m(t))
					}(e),
					r = "body" === c(n),
					o = a(n),
					i = r ? [o].concat(o.visualViewport || [], p(n) ? n : []) : n,
					s = t.concat(i);
				return r ? s : s.concat(v(m(i)))
			}

			function g(e) {
				return ["table", "td", "th"].indexOf(c(e)) >= 0
			}

			function y(e) {
				return l(e) && "fixed" !== d(e).position ? e.offsetParent : null
			}

			function O(e) {
				for (var t = a(e), n = y(e); n && g(n) && "static" === d(n).position;) n = y(n);
				return n && "body" === c(n) && "static" === d(n).position ? t : n || function(e) {
					for (var t = m(e); l(t) && ["html", "body"].indexOf(c(t)) < 0;) {
						var n = d(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var w = "top",
				j = "bottom",
				x = "right",
				k = "left",
				_ = "auto",
				E = [w, j, x, k],
				D = "start",
				A = "end",
				L = "clippingParents",
				M = "viewport",
				P = "popper",
				S = "reference",
				N = E.reduce((function(e, t) {
					return e.concat([t + "-" + D, t + "-" + A])
				}), []),
				I = [].concat(E, [_]).reduce((function(e, t) {
					return e.concat([t, t + "-" + D, t + "-" + A])
				}), []),
				B = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function R(e) {
				var t = new Map,
					n = new Set,
					r = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(o) {
						n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(r) {
							if (!n.has(r)) {
								var o = t.get(r);
								o && e(o)
							}
						})), r.push(o)
					}(e)
				})), r
			}
			var C = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function T() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function U(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					r = void 0 === n ? [] : n,
					o = t.defaultOptions,
					a = void 0 === o ? C : o;
				return function(e, t, n) {
					void 0 === n && (n = a);
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
						f = !1,
						u = {
							state: l,
							setOptions: function(n) {
								d(), l.options = Object.assign(Object.assign(Object.assign({}, a), l.options), n), l.scrollParents = {
									reference: s(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
									popper: v(t)
								};
								var o = function(e) {
									var t = R(e);
									return B.reduce((function(e, n) {
										return e.concat(t.filter((function(e) {
											return e.phase === n
										})))
									}), [])
								}(function(e) {
									var t = e.reduce((function(e, t) {
										var n = e[t.name];
										return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, {
											options: Object.assign(Object.assign({}, n.options), t.options),
											data: Object.assign(Object.assign({}, n.data), t.data)
										}) : t, e
									}), {});
									return Object.keys(t).map((function(e) {
										return t[e]
									}))
								}([].concat(r, l.options.modifiers)));
								return l.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), l.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										r = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var a = o({
											state: l,
											name: t,
											instance: u,
											options: r
										});
										c.push(a || function() {})
									}
								})), u.update()
							},
							forceUpdate: function() {
								if (!f) {
									var e = l.elements,
										t = e.reference,
										n = e.popper;
									if (T(t, n)) {
										l.rects = {
											reference: h(t, O(n), "fixed" === l.options.strategy),
											popper: b(n)
										}, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach((function(e) {
											return l.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var r = 0; r < l.orderedModifiers.length; r++)
											if (!0 !== l.reset) {
												var o = l.orderedModifiers[r],
													a = o.fn,
													i = o.options,
													s = void 0 === i ? {} : i,
													c = o.name;
												"function" == typeof a && (l = a({
													state: l,
													options: s,
													name: c,
													instance: u
												}) || l)
											} else l.reset = !1, r = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(l)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(o())
									}))
								}))), i
							}),
							destroy: function() {
								d(), f = !0
							}
						};
					if (!T(e, t)) return u;

					function d() {
						c.forEach((function(e) {
							return e()
						})), c = []
					}
					return u.setOptions(n).then((function(e) {
						!f && n.onFirstUpdate && n.onFirstUpdate(e)
					})), u
				}
			}
			var z = {
				passive: !0
			};

			function H(e) {
				return e.split("-")[0]
			}

			function W(e) {
				return e.split("-")[1]
			}

			function F(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function q(e) {
				var t, n = e.reference,
					r = e.element,
					o = e.placement,
					a = o ? H(o) : null,
					i = o ? W(o) : null,
					s = n.x + n.width / 2 - r.width / 2,
					l = n.y + n.height / 2 - r.height / 2;
				switch (a) {
					case w:
						t = {
							x: s,
							y: n.y - r.height
						};
						break;
					case j:
						t = {
							x: s,
							y: n.y + n.height
						};
						break;
					case x:
						t = {
							x: n.x + n.width,
							y: l
						};
						break;
					case k:
						t = {
							x: n.x - r.width,
							y: l
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var c = a ? F(a) : null;
				if (null != c) {
					var f = "y" === c ? "height" : "width";
					switch (i) {
						case D:
							t[c] = Math.floor(t[c]) - Math.floor(n[f] / 2 - r[f] / 2);
							break;
						case A:
							t[c] = Math.floor(t[c]) + Math.ceil(n[f] / 2 - r[f] / 2)
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
				var t, n = e.popper,
					r = e.popperRect,
					o = e.placement,
					i = e.offsets,
					s = e.position,
					l = e.gpuAcceleration,
					c = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							r = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * r) / r || 0,
							y: Math.round(n * r) / r || 0
						}
					}(i),
					d = u.x,
					p = u.y,
					h = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					m = k,
					v = w,
					g = window;
				if (c) {
					var y = O(n);
					y === a(n) && (y = f(n)), o === w && (v = j, p -= y.clientHeight - r.height, p *= l ? 1 : -1), o === k && (m = x, d -= y.clientWidth - r.width, d *= l ? 1 : -1)
				}
				var _, E = Object.assign({
					position: s
				}, c && V);
				return l ? Object.assign(Object.assign({}, E), {}, ((_ = {})[v] = b ? "0" : "", _[m] = h ? "0" : "", _.transform = (g.devicePixelRatio || 1) < 2 ? "translate(" + d + "px, " + p + "px)" : "translate3d(" + d + "px, " + p + "px, 0)", _)) : Object.assign(Object.assign({}, E), {}, ((t = {})[v] = b ? p + "px" : "", t[m] = h ? d + "px" : "", t.transform = "", t))
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
				var n = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (n) {
					var r = t;
					do {
						if (r && e.isSameNode(r)) return !0;
						r = r.parentNode || r.host
					} while (r)
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
				return t === M ? J(function(e) {
					var t = a(e),
						n = f(e),
						r = t.visualViewport,
						o = n.clientWidth,
						i = n.clientHeight,
						s = 0,
						l = 0;
					return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, l = r.offsetTop)), {
						width: o,
						height: i,
						x: s + u(e),
						y: l
					}
				}(e)) : l(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : J(function(e) {
					var t = f(e),
						n = i(e),
						r = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						a = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						s = -n.scrollLeft + u(e),
						l = -n.scrollTop;
					return "rtl" === d(r || t).direction && (s += Math.max(t.clientWidth, r ? r.clientWidth : 0) - o), {
						width: o,
						height: a,
						x: s,
						y: l
					}
				}(f(e)))
			}

			function ee(e, t, n) {
				var r = "clippingParents" === t ? function(e) {
						var t = v(e),
							n = ["absolute", "fixed"].indexOf(d(e).position) >= 0 && l(e) ? O(e) : e;
						return s(n) ? t.filter((function(e) {
							return s(e) && Z(e, n)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(r, [n]),
					a = o[0],
					i = o.reduce((function(t, n) {
						var r = Q(e, n);
						return t.top = Math.max(r.top, t.top), t.right = Math.min(r.right, t.right), t.bottom = Math.min(r.bottom, t.bottom), t.left = Math.max(r.left, t.left), t
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

			function ne(e, t) {
				return t.reduce((function(t, n) {
					return t[n] = e, t
				}), {})
			}

			function re(e, t) {
				void 0 === t && (t = {});
				var n = t,
					r = n.placement,
					a = void 0 === r ? e.placement : r,
					i = n.boundary,
					l = void 0 === i ? L : i,
					c = n.rootBoundary,
					u = void 0 === c ? M : c,
					d = n.elementContext,
					p = void 0 === d ? P : d,
					h = n.altBoundary,
					b = void 0 !== h && h,
					m = n.padding,
					v = void 0 === m ? 0 : m,
					g = te("number" != typeof v ? v : ne(v, E)),
					y = p === P ? S : P,
					O = e.elements.reference,
					k = e.rects.popper,
					_ = e.elements[b ? y : p],
					D = ee(s(_) ? _ : _.contextElement || f(e.elements.popper), l, u),
					A = o(O),
					N = q({
						reference: A,
						element: k,
						strategy: "absolute",
						placement: a
					}),
					I = J(Object.assign(Object.assign({}, k), N)),
					B = p === P ? I : A,
					R = {
						top: D.top - B.top + g.top,
						bottom: B.bottom - D.bottom + g.bottom,
						left: D.left - B.left + g.left,
						right: B.right - D.right + g.right
					},
					C = e.modifiersData.offset;
				if (p === P && C) {
					var T = C[a];
					Object.keys(R).forEach((function(e) {
						var t = [x, j].indexOf(e) >= 0 ? 1 : -1,
							n = [w, j].indexOf(e) >= 0 ? "y" : "x";
						R[e] += T[n] * t
					}))
				}
				return R
			}

			function oe(e, t, n) {
				return Math.max(e, Math.min(t, n))
			}

			function ae(e, t, n) {
				return void 0 === n && (n = {
					x: 0,
					y: 0
				}), {
					top: e.top - t.height - n.y,
					right: e.right - t.width + n.x,
					bottom: e.bottom - t.height + n.y,
					left: e.left - t.width - n.x
				}
			}

			function ie(e) {
				return [w, x, j, k].some((function(t) {
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
								n = e.instance,
								r = e.options,
								o = r.scroll,
								i = void 0 === o || o,
								s = r.resize,
								l = void 0 === s || s,
								c = a(t.elements.popper),
								f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && f.forEach((function(e) {
									e.addEventListener("scroll", n.update, z)
								})), l && c.addEventListener("resize", n.update, z),
								function() {
									i && f.forEach((function(e) {
										e.removeEventListener("scroll", n.update, z)
									})), l && c.removeEventListener("resize", n.update, z)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var t = e.state,
								n = e.name;
							t.modifiersData[n] = q({
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
								n = e.options,
								r = n.gpuAcceleration,
								o = void 0 === r || r,
								a = n.adaptive,
								i = void 0 === a || a,
								s = {
									placement: H(t.placement),
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
								var n = t.styles[e] || {},
									r = t.attributes[e] || {},
									o = t.elements[e];
								l(o) && c(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
									var t = r[e];
									!1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
								})))
							}))
						},
						effect: function(e) {
							var t = e.state,
								n = {
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
							return Object.assign(t.elements.popper.style, n.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
								function() {
									Object.keys(t.elements).forEach((function(e) {
										var r = t.elements[e],
											o = t.attributes[e] || {},
											a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										l(r) && c(r) && (Object.assign(r.style, a), Object.keys(o).forEach((function(e) {
											r.removeAttribute(e)
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
								n = e.options,
								r = e.name,
								o = n.offset,
								a = void 0 === o ? [0, 0] : o,
								i = I.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var r = H(e),
											o = [k, w].indexOf(r) >= 0 ? -1 : 1,
											a = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = a[0],
											s = a[1];
										return i = i || 0, s = (s || 0) * o, [k, x].indexOf(r) >= 0 ? {
											x: s,
											y: i
										} : {
											x: i,
											y: s
										}
									}(n, t.rects, a), e
								}), {}),
								s = i[t.placement],
								l = s.x,
								c = s.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = i
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name;
							if (!t.modifiersData[r]._skip) {
								for (var o = n.mainAxis, a = void 0 === o || o, i = n.altAxis, s = void 0 === i || i, l = n.fallbackPlacements, c = n.padding, f = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, h = void 0 === p || p, b = n.allowedAutoPlacements, m = t.options.placement, v = H(m), g = l || (v === m || !h ? [K(m)] : function(e) {
										if (H(e) === _) return [];
										var t = K(e);
										return [Y(e), t, Y(t)]
									}(m)), y = [m].concat(g).reduce((function(e, n) {
										return e.concat(H(n) === _ ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												r = n.placement,
												o = n.boundary,
												a = n.rootBoundary,
												i = n.padding,
												s = n.flipVariations,
												l = n.allowedAutoPlacements,
												c = void 0 === l ? I : l,
												f = W(r),
												u = (f ? s ? N : N.filter((function(e) {
													return W(e) === f
												})) : E).filter((function(e) {
													return c.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = re(e, {
														placement: n,
														boundary: o,
														rootBoundary: a,
														padding: i
													})[H(n)], t
												}), {});
											return Object.keys(u).sort((function(e, t) {
												return u[e] - u[t]
											}))
										}(t, {
											placement: n,
											boundary: f,
											rootBoundary: u,
											padding: c,
											flipVariations: h,
											allowedAutoPlacements: b
										}) : n)
									}), []), O = t.rects.reference, A = t.rects.popper, L = new Map, M = !0, P = y[0], S = 0; S < y.length; S++) {
									var B = y[S],
										R = H(B),
										C = W(B) === D,
										T = [w, j].indexOf(R) >= 0,
										U = T ? "width" : "height",
										z = re(t, {
											placement: B,
											boundary: f,
											rootBoundary: u,
											altBoundary: d,
											padding: c
										}),
										F = T ? C ? x : k : C ? j : w;
									O[U] > A[U] && (F = K(F));
									var q = K(F),
										V = [];
									if (a && V.push(z[R] <= 0), s && V.push(z[F] <= 0, z[q] <= 0), V.every((function(e) {
											return e
										}))) {
										P = B, M = !1;
										break
									}
									L.set(B, V)
								}
								if (M)
									for (var G = function(e) {
											var t = y.find((function(t) {
												var n = L.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return P = t, "break"
										}, $ = h ? 3 : 1; $ > 0; $--) {
										if ("break" === G($)) break
									}
								t.placement !== P && (t.modifiersData[r]._skip = !0, t.placement = P, t.reset = !0)
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
								n = e.options,
								r = e.name,
								o = n.mainAxis,
								a = void 0 === o || o,
								i = n.altAxis,
								s = void 0 !== i && i,
								l = n.boundary,
								c = n.rootBoundary,
								f = n.altBoundary,
								u = n.padding,
								d = n.tether,
								p = void 0 === d || d,
								h = n.tetherOffset,
								m = void 0 === h ? 0 : h,
								v = re(t, {
									boundary: l,
									rootBoundary: c,
									padding: u,
									altBoundary: f
								}),
								g = H(t.placement),
								y = W(t.placement),
								_ = !y,
								E = F(g),
								A = "x" === E ? "y" : "x",
								L = t.modifiersData.popperOffsets,
								M = t.rects.reference,
								P = t.rects.popper,
								S = "function" == typeof m ? m(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : m,
								N = {
									x: 0,
									y: 0
								};
							if (L) {
								if (a) {
									var I = "y" === E ? w : k,
										B = "y" === E ? j : x,
										R = "y" === E ? "height" : "width",
										C = L[E],
										T = L[E] + v[I],
										U = L[E] - v[B],
										z = p ? -P[R] / 2 : 0,
										q = y === D ? M[R] : P[R],
										V = y === D ? -P[R] : -M[R],
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
										X = K[I],
										Y = K[B],
										Z = oe(0, M[R], $[R]),
										J = _ ? M[R] / 2 - z - Z - X - S : q - Z - X - S,
										Q = _ ? -M[R] / 2 + z + Z + Y + S : V + Z + Y + S,
										ee = t.elements.arrow && O(t.elements.arrow),
										te = ee ? "y" === E ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][E] : 0,
										ae = L[E] + J - ne - te,
										ie = L[E] + Q - ne,
										se = oe(p ? Math.min(T, ae) : T, C, p ? Math.max(U, ie) : U);
									L[E] = se, N[E] = se - C
								}
								if (s) {
									var le = "x" === E ? w : k,
										ce = "x" === E ? j : x,
										fe = L[A],
										ue = oe(fe + v[le], fe, fe - v[ce]);
									L[A] = ue, N[A] = ue - fe
								}
								t.modifiersData[r] = N
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, n = e.state,
								r = e.name,
								o = n.elements.arrow,
								a = n.modifiersData.popperOffsets,
								i = H(n.placement),
								s = F(i),
								l = [k, x].indexOf(i) >= 0 ? "height" : "width";
							if (o && a) {
								var c = n.modifiersData[r + "#persistent"].padding,
									f = b(o),
									u = "y" === s ? w : k,
									d = "y" === s ? j : x,
									p = n.rects.reference[l] + n.rects.reference[s] - a[s] - n.rects.popper[l],
									h = a[s] - n.rects.reference[s],
									m = O(o),
									v = m ? "y" === s ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
									g = p / 2 - h / 2,
									y = c[u],
									_ = v - f[l] - c[d],
									E = v / 2 - f[l] / 2 + g,
									D = oe(y, E, _),
									A = s;
								n.modifiersData[r] = ((t = {})[A] = D, t.centerOffset = D - E, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name,
								o = n.element,
								a = void 0 === o ? "[data-popper-arrow]" : o,
								i = n.padding,
								s = void 0 === i ? 0 : i;
							null != a && ("string" != typeof a || (a = t.elements.popper.querySelector(a))) && Z(t.elements.popper, a) && (t.elements.arrow = a, t.modifiersData[r + "#persistent"] = {
								padding: te("number" != typeof s ? s : ne(s, E))
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
								n = e.name,
								r = t.rects.reference,
								o = t.rects.popper,
								a = t.modifiersData.preventOverflow,
								i = re(t, {
									elementContext: "reference"
								}),
								s = re(t, {
									altBoundary: !0
								}),
								l = ae(i, r),
								c = ae(s, o, a),
								f = ie(l),
								u = ie(c);
							t.modifiersData[n] = {
								referenceClippingOffsets: l,
								popperEscapeOffsets: c,
								isReferenceHidden: f,
								hasPopperEscaped: u
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": f,
								"data-popper-escaped": u
							})
						}
					}]
				}),
				le = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ce = n.n(le),
				fe = function(e) {
					return e.reduce((function(e, t) {
						var n = t[0],
							r = t[1];
						return e[n] = r, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
				de = [],
				pe = function(e, t, n) {
					void 0 === n && (n = {});
					var o = r.useRef(null),
						a = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || de
						},
						i = r.useState({
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
						c = r.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										n = Object.keys(t.elements);
									l({
										styles: fe(n.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: fe(n.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						f = r.useMemo((function() {
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
						u = r.useRef();
					return ue((function() {
						u.current && u.current.setOptions(f)
					}), [f]), ue((function() {
						if (null != e && null != t) {
							var r = (n.createPopper || se)(e, t, f);
							return u.current = r,
								function() {
									r.destroy(), u.current = null
								}
						}
					}), [e, t, n.createPopper]), {
						state: u.current ? u.current.state : null,
						styles: s.styles,
						attributes: s.attributes,
						update: u.current ? u.current.update : null,
						forceUpdate: u.current ? u.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var n = "undefined" != typeof Element,
				r = "function" == typeof Map,
				o = "function" == typeof Set,
				a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, i) {
						if (t === i) return !0;
						if (t && i && "object" == typeof t && "object" == typeof i) {
							if (t.constructor !== i.constructor) return !1;
							var s, l, c, f;
							if (Array.isArray(t)) {
								if ((s = t.length) != i.length) return !1;
								for (l = s; 0 != l--;)
									if (!e(t[l], i[l])) return !1;
								return !0
							}
							if (r && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (f = t.entries(); !(l = f.next()).done;)
									if (!i.has(l.value[0])) return !1;
								for (f = t.entries(); !(l = f.next()).done;)
									if (!e(l.value[1], i.get(l.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (f = t.entries(); !(l = f.next()).done;)
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
							if (n && t instanceof Element) return !1;
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e.d7270de3274859f24ef8.js.map