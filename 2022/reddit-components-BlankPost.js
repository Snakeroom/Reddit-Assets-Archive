// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.13acd67ca50d21b716ae.js
// Retrieved at 11/10/2022, 1:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, l, a) {
			"use strict";
			Object.defineProperty(l, "__esModule", {
				value: !0
			}), l.isPseudoLocale = l.isISOLocaleSupported = l.toISOLocale = l.isoLocaleToR2Language = void 0;
			const t = a("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
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
				r = Object.keys(o).reduce((e, l) => (n.has(l) && (e[l] = o[l]), e), {}),
				s = Object.keys(r).reduce((e, l) => {
					const a = r[l];
					return a && a.forEach(a => {
						e[a] = l
					}), e
				}, {});
			l.isoLocaleToR2Language = e => s[e], l.toISOLocale = e => {
				if (!e) return;
				const l = e.match(/^([a-zA-Z]{2,4})(?:[-_]([a-zA-Z]{2,4}))?$/);
				if (!l) return;
				const a = l[1];
				if (!a) return;
				let t = a.toLowerCase();
				const n = l[2];
				return n && (t = `${t}-${n.toUpperCase()}`), t
			};
			const i = new Set(Object.keys(s));
			l.isISOLocaleSupported = e => !!e && i.has(e), l.isPseudoLocale = e => !!e && (e === t.PSEUDO_AUTO || Object.values(t.PseudoLocale).includes(e))
		},
		"./node_modules/deep-diff/index.js": function(e, l, a) {
			var t, n;
			n = function(e) {
				var l = ["N", "E", "A", "D"];

				function a(e, l) {
					e.super_ = l, e.prototype = Object.create(l.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})
				}

				function t(e, l) {
					Object.defineProperty(this, "kind", {
						value: e,
						enumerable: !0
					}), l && l.length && Object.defineProperty(this, "path", {
						value: l,
						enumerable: !0
					})
				}

				function n(e, l, a) {
					n.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
						value: l,
						enumerable: !0
					}), Object.defineProperty(this, "rhs", {
						value: a,
						enumerable: !0
					})
				}

				function o(e, l) {
					o.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
						value: l,
						enumerable: !0
					})
				}

				function r(e, l) {
					r.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
						value: l,
						enumerable: !0
					})
				}

				function s(e, l, a) {
					s.super_.call(this, "A", e), Object.defineProperty(this, "index", {
						value: l,
						enumerable: !0
					}), Object.defineProperty(this, "item", {
						value: a,
						enumerable: !0
					})
				}

				function i(e, l, a) {
					var t = e.slice((a || l) + 1 || e.length);
					return e.length = l < 0 ? e.length + l : l, e.push.apply(e, t), e
				}

				function c(e) {
					var l = typeof e;
					return "object" !== l ? l : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
				}

				function d(e) {
					var l = 0;
					if (0 === e.length) return l;
					for (var a = 0; a < e.length; a++) l = (l << 5) - l + e.charCodeAt(a), l &= l;
					return l
				}

				function u(e) {
					var l = 0,
						a = c(e);
					if ("array" === a) return e.forEach((function(e) {
						l += u(e)
					})), l + d("[type: array, hash: " + l + "]");
					if ("object" === a) {
						for (var t in e)
							if (e.hasOwnProperty(t)) {
								var n = "[ type: object, key: " + t + ", value hash: " + u(e[t]) + "]";
								l += d(n)
							} return l
					}
					return l + d("[ type: " + a + " ; value: " + e + "]")
				}

				function h(e, l, a, t, i, d, b, f) {
					a = a || [], b = b || [];
					var p = (i = i || []).slice(0);
					if (null != d) {
						if (t) {
							if ("function" == typeof t && t(p, d)) return;
							if ("object" == typeof t) {
								if (t.prefilter && t.prefilter(p, d)) return;
								if (t.normalize) {
									var v = t.normalize(p, d, e, l);
									v && (e = v[0], l = v[1])
								}
							}
						}
						p.push(d)
					}
					"regexp" === c(e) && "regexp" === c(l) && (e = e.toString(), l = l.toString());
					var g, m, k, y, j = typeof e,
						_ = typeof l,
						O = "undefined" !== j || b && b.length > 0 && b[b.length - 1].lhs && Object.getOwnPropertyDescriptor(b[b.length - 1].lhs, d),
						N = "undefined" !== _ || b && b.length > 0 && b[b.length - 1].rhs && Object.getOwnPropertyDescriptor(b[b.length - 1].rhs, d);
					if (!O && N) a.push(new o(p, l));
					else if (!N && O) a.push(new r(p, e));
					else if (c(e) !== c(l)) a.push(new n(p, e, l));
					else if ("date" === c(e) && e - l != 0) a.push(new n(p, e, l));
					else if ("object" === j && null !== e && null !== l) {
						for (g = b.length - 1; g > -1; --g)
							if (b[g].lhs === e) {
								y = !0;
								break
							} if (y) e !== l && a.push(new n(p, e, l));
						else {
							if (b.push({
									lhs: e,
									rhs: l
								}), Array.isArray(e)) {
								for (f && (e.sort((function(e, l) {
										return u(e) - u(l)
									})), l.sort((function(e, l) {
										return u(e) - u(l)
									}))), g = l.length - 1, m = e.length - 1; g > m;) a.push(new s(p, g, new o(void 0, l[g--])));
								for (; m > g;) a.push(new s(p, m, new r(void 0, e[m--])));
								for (; g >= 0; --g) h(e[g], l[g], a, t, p, g, b, f)
							} else {
								var x = Object.keys(e),
									A = Object.keys(l);
								for (g = 0; g < x.length; ++g) k = x[g], (y = A.indexOf(k)) >= 0 ? (h(e[k], l[k], a, t, p, k, b, f), A[y] = null) : h(e[k], void 0, a, t, p, k, b, f);
								for (g = 0; g < A.length; ++g)(k = A[g]) && h(void 0, l[k], a, t, p, k, b, f)
							}
							b.length = b.length - 1
						}
					} else e !== l && ("number" === j && isNaN(e) && isNaN(l) || a.push(new n(p, e, l)))
				}

				function b(e, l, a, t, n) {
					var o = [];
					if (h(e, l, o, t, null, null, null, n), a)
						for (var r = 0; r < o.length; ++r) a(o[r]);
					return o
				}

				function f(e, l, a, t) {
					var n = b(e, l, t ? function(e) {
						e && t.push(e)
					} : void 0, a);
					return t || (n.length ? n : void 0)
				}

				function p(e, a, t) {
					if (void 0 === t && a && ~l.indexOf(a.kind) && (t = a), e && t && t.kind) {
						for (var n = e, o = -1, r = t.path ? t.path.length - 1 : 0; ++o < r;) void 0 === n[t.path[o]] && (n[t.path[o]] = void 0 !== t.path[o + 1] && "number" == typeof t.path[o + 1] ? [] : {}), n = n[t.path[o]];
						switch (t.kind) {
							case "A":
								t.path && void 0 === n[t.path[o]] && (n[t.path[o]] = []),
									function e(l, a, t) {
										if (t.path && t.path.length) {
											var n, o = l[a],
												r = t.path.length - 1;
											for (n = 0; n < r; n++) o = o[t.path[n]];
											switch (t.kind) {
												case "A":
													e(o[t.path[n]], t.index, t.item);
													break;
												case "D":
													delete o[t.path[n]];
													break;
												case "E":
												case "N":
													o[t.path[n]] = t.rhs
											}
										} else switch (t.kind) {
											case "A":
												e(l[a], t.index, t.item);
												break;
											case "D":
												l = i(l, a);
												break;
											case "E":
											case "N":
												l[a] = t.rhs
										}
										return l
									}(t.path ? n[t.path[o]] : n, t.index, t.item);
								break;
							case "D":
								delete n[t.path[o]];
								break;
							case "E":
							case "N":
								n[t.path[o]] = t.rhs
						}
					}
				}
				return a(n, t), a(o, t), a(r, t), a(s, t), Object.defineProperties(f, {
					diff: {
						value: f,
						enumerable: !0
					},
					orderIndependentDiff: {
						value: function(e, l, a, t) {
							var n = t ? function(e) {
									e && t.push(e)
								} : void 0,
								o = b(e, l, n, a, !0);
							return t || (o.length ? o : void 0)
						},
						enumerable: !0
					},
					observableDiff: {
						value: b,
						enumerable: !0
					},
					orderIndependentObservableDiff: {
						value: function(e, l, a, t, n, o, r) {
							return h(e, l, a, t, n, o, r, !0)
						},
						enumerable: !0
					},
					orderIndepHash: {
						value: u,
						enumerable: !0
					},
					applyDiff: {
						value: function(e, l, a) {
							e && l && b(e, l, (function(t) {
								a && !a(e, l, t) || p(e, l, t)
							}))
						},
						enumerable: !0
					},
					applyChange: {
						value: p,
						enumerable: !0
					},
					revertChange: {
						value: function(e, l, a) {
							if (e && l && a && a.kind) {
								var t, n, o = e;
								for (n = a.path.length - 1, t = 0; t < n; t++) void 0 === o[a.path[t]] && (o[a.path[t]] = {}), o = o[a.path[t]];
								switch (a.kind) {
									case "A":
										! function e(l, a, t) {
											if (t.path && t.path.length) {
												var n, o = l[a],
													r = t.path.length - 1;
												for (n = 0; n < r; n++) o = o[t.path[n]];
												switch (t.kind) {
													case "A":
														e(o[t.path[n]], t.index, t.item);
														break;
													case "D":
													case "E":
														o[t.path[n]] = t.lhs;
														break;
													case "N":
														delete o[t.path[n]]
												}
											} else switch (t.kind) {
												case "A":
													e(l[a], t.index, t.item);
													break;
												case "D":
												case "E":
													l[a] = t.lhs;
													break;
												case "N":
													l = i(l, a)
											}
											return l
										}(o[a.path[t]], a.index, a.item);
										break;
									case "D":
									case "E":
										o[a.path[t]] = a.lhs;
										break;
									case "N":
										delete o[a.path[t]]
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
				}), f.DeepDiff = f, e && (e.DeepDiff = f), f
			}(this), void 0 === (t = function() {
				return n
			}.call(l, a, l, e)) || (e.exports = t)
		},
		"./node_modules/lodash/findLastIndex.js": function(e, l, a) {
			var t = a("./node_modules/lodash/_baseFindIndex.js"),
				n = a("./node_modules/lodash/_baseIteratee.js"),
				o = a("./node_modules/lodash/toInteger.js"),
				r = Math.max,
				s = Math.min;
			e.exports = function(e, l, a) {
				var i = null == e ? 0 : e.length;
				if (!i) return -1;
				var c = i - 1;
				return void 0 !== a && (c = o(a), c = a < 0 ? r(i + c, 0) : s(c, i - 1)), t(e, n(l, 3), c, !0)
			}
		},
		"./node_modules/lodash/uniqWith.js": function(e, l, a) {
			var t = a("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, l) {
				return l = "function" == typeof l ? l : void 0, e && e.length ? t(e, void 0, l) : []
			}
		},
		"./node_modules/lodash/xor.js": function(e, l, a) {
			var t = a("./node_modules/lodash/_arrayFilter.js"),
				n = a("./node_modules/lodash/_baseRest.js"),
				o = a("./node_modules/lodash/_baseXor.js"),
				r = a("./node_modules/lodash/isArrayLikeObject.js"),
				s = n((function(e) {
					return o(t(e, r))
				}));
			e.exports = s
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, l, a) {
			"use strict";
			a.r(l), a.d(l, "BlankPost", (function() {
				return d
			}));
			var t = a("./node_modules/react/index.js"),
				n = a.n(t),
				o = a("./src/reddit/components/AdViewability/index.tsx"),
				r = a("./src/reddit/connectors/PostViewable/index.ts"),
				s = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/contexts/Post/index.tsx");
			const c = Object(r.a)(null),
				d = e => {
					let {
						className: l,
						post: a
					} = e;
					return a.isSponsored ? n.a.createElement(o.a, {
						post: a,
						trackDisplay: !0
					}, n.a.createElement("div", {
						className: Object(s.a)(l, `Blank ${a.id}`)
					})) : null
				};
			l.default = Object(i.b)(c(d))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.13acd67ca50d21b716ae.js.map