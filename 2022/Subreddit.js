// https://www.redditstatic.com/desktop2x/Subreddit.e2771f2e455cbd1fa489.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "Governance~ModListing~Reddit", "ModListing~Reddit", "reddit-components-BlankPost", "reddit-components-Econ-PredictionLeaderboard-Sidebar"], {
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
				i = Object.keys(o).reduce((e, t) => (s.has(t) && (e[t] = o[t]), e), {}),
				a = Object.keys(i).reduce((e, t) => {
					const n = i[t];
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

				function i(e, t) {
					i.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
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
					var g, v, x, _, y = typeof e,
						O = typeof t,
						E = "undefined" !== y || p && p.length > 0 && p[p.length - 1].lhs && Object.getOwnPropertyDescriptor(p[p.length - 1].lhs, l),
						j = "undefined" !== O || p && p.length > 0 && p[p.length - 1].rhs && Object.getOwnPropertyDescriptor(p[p.length - 1].rhs, l);
					if (!E && j) n.push(new o(f, t));
					else if (!j && E) n.push(new i(f, e));
					else if (d(e) !== d(t)) n.push(new s(f, e, t));
					else if ("date" === d(e) && e - t != 0) n.push(new s(f, e, t));
					else if ("object" === y && null !== e && null !== t) {
						for (g = p.length - 1; g > -1; --g)
							if (p[g].lhs === e) {
								_ = !0;
								break
							} if (_) e !== t && n.push(new s(f, e, t));
						else {
							if (p.push({
									lhs: e,
									rhs: t
								}), Array.isArray(e)) {
								for (b && (e.sort((function(e, t) {
										return u(e) - u(t)
									})), t.sort((function(e, t) {
										return u(e) - u(t)
									}))), g = t.length - 1, v = e.length - 1; g > v;) n.push(new a(f, g, new o(void 0, t[g--])));
								for (; v > g;) n.push(new a(f, v, new i(void 0, e[v--])));
								for (; g >= 0; --g) m(e[g], t[g], n, r, f, g, p, b)
							} else {
								var C = Object.keys(e),
									I = Object.keys(t);
								for (g = 0; g < C.length; ++g) x = C[g], (_ = I.indexOf(x)) >= 0 ? (m(e[x], t[x], n, r, f, x, p, b), I[_] = null) : m(e[x], void 0, n, r, f, x, p, b);
								for (g = 0; g < I.length; ++g)(x = I[g]) && m(void 0, t[x], n, r, f, x, p, b)
							}
							p.length = p.length - 1
						}
					} else e !== t && ("number" === y && isNaN(e) && isNaN(t) || n.push(new s(f, e, t)))
				}

				function p(e, t, n, r, s) {
					var o = [];
					if (m(e, t, o, r, null, null, null, s), n)
						for (var i = 0; i < o.length; ++i) n(o[i]);
					return o
				}

				function b(e, t, n, r) {
					var s = p(e, t, r ? function(e) {
						e && r.push(e)
					} : void 0, n);
					return r || (s.length ? s : void 0)
				}

				function f(e, n, r) {
					if (void 0 === r && n && ~t.indexOf(n.kind) && (r = n), e && r && r.kind) {
						for (var s = e, o = -1, i = r.path ? r.path.length - 1 : 0; ++o < i;) void 0 === s[r.path[o]] && (s[r.path[o]] = void 0 !== r.path[o + 1] && "number" == typeof r.path[o + 1] ? [] : {}), s = s[r.path[o]];
						switch (r.kind) {
							case "A":
								r.path && void 0 === s[r.path[o]] && (s[r.path[o]] = []),
									function e(t, n, r) {
										if (r.path && r.path.length) {
											var s, o = t[n],
												i = r.path.length - 1;
											for (s = 0; s < i; s++) o = o[r.path[s]];
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
				return n(s, r), n(o, r), n(i, r), n(a, r), Object.defineProperties(b, {
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
						value: function(e, t, n, r, s, o, i) {
							return m(e, t, n, r, s, o, i, !0)
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
								var r, s, o = e;
								for (s = n.path.length - 1, r = 0; r < s; r++) void 0 === o[n.path[r]] && (o[n.path[r]] = {}), o = o[n.path[r]];
								switch (n.kind) {
									case "A":
										! function e(t, n, r) {
											if (r.path && r.path.length) {
												var s, o = t[n],
													i = r.path.length - 1;
												for (s = 0; s < i; s++) o = o[r.path[s]];
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
					var i = r(n, o),
						a = e[i];
					e[i] = e[n], e[n] = a
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFindIndex.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				i = Math.max,
				a = Math.min;
			e.exports = function(e, t, n) {
				var c = null == e ? 0 : e.length;
				if (!c) return -1;
				var d = c - 1;
				return void 0 !== n && (d = o(n), d = n < 0 ? i(c + d, 0) : a(d, c - 1)), r(e, s(t, 3), d, !0)
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				c = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && s(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (n || e % 1 || t % 1) {
					var l = c();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return r(e, t)
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arraySampleSize.js"),
				s = n("./node_modules/lodash/_baseSampleSize.js"),
				o = n("./node_modules/lodash/isArray.js"),
				i = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return t = (n ? i(e, t, n) : void 0 === t) ? 1 : a(t), (o(e) ? r : s)(e, t)
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
				i = n("./node_modules/lodash/isArrayLikeObject.js"),
				a = s((function(e) {
					return o(r(e, i))
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
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/chat/controls/Svg/index.m.less"),
				c = n.n(a);
			t.a = i.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: i
					} = e;
				return s.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[c.a.disable]: n,
						[c.a.active]: r,
						[c.a.hover]: !!i
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
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/asModal/helpers.ts"),
				i = n("./src/lib/classNames/index.ts"),
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
					...o
				} = e;
				return s.a.createElement("div", b({
					className: Object(i.a)(p.a.overlay, t, {
						[p.a.mIsVisible]: r,
						[p.a.mIsBlurred]: n
					})
				}, o))
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
						}), Object(u.a)(), this.ref && (this.focusTrap = new a.b(this.ref), this.focusTrap.activate()), this.props.shouldBlurBackground && Object(o.a)()
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
							className: Object(i.a)(p.a.modal, n),
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
		"./src/higherOrderComponents/withAdClickLocation/Locations.ts": function(e, t, n) {
			"use strict";
			var r, s;
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.UNKNOWN = "unknown", e.TITLE = "title", e.TOP_BAR = "top_bar", e.MEDIA = "media", e.BODY = "body", e.BACKGROUND = "background", e.CTA_URL = "cta_url", e.CTA_BUTTON = "cta_button", e.CTA_WHITESPACE = "cta_whitespace", e.CTA_CAPTION = "cta_caption", e.SUBREDDIT = "subreddit", e.TIMESTAMP = "timestamp", e.USER = "user"
				}(r || (r = {})),
				function(e) {
					e.COMMENTS = "comments", e.FLATLIST_SHARE = "fl_share", e.FLATLIST_AWARD = "fl_award", e.FLATLIST_SAVE = "fl_save", e.FLATLIST_GENERAL = "fl_unknown", e.OVERFLOW_MENU = "overflow_menu", e.UPVOTE = "upvote", e.DOWNVOTE = "downvote"
				}(s || (s = {}))
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
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = e => (e, t, n) => ({
				...i.o(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: i.d(e),
				adblock: i.e(e),
				app: i.f(e),
				feed: i.r(e),
				geo: i.t(e),
				platform: i.I(e),
				referrer: i.Z(e),
				request: i.ab(e),
				screen: i.cb(e),
				session: i.gb(e),
				user: i.sb(e),
				media: n ? i.C(e, n) : null,
				post: n ? i.K(e, n) : null
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
							const i = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : c.a.UNKNOWN
							}(e.target);
							i && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(i, c.b) ? Object(d.a)(a(r)(n, i, null === (o = t.post) || void 0 === o ? void 0 : o.postId)) : Object(d.a)(a(r)(n, c.a.UNKNOWN, null === (s = t.post) || void 0 === s ? void 0 : s.postId)))
						}
					}, s.a.createElement(e, t)) : s.a.createElement(e, t)
				}
				const n = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${n})`, t
			}
		},
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/CSSVariableProvider/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function a(e) {
				const t = t => s.a.createElement(o.b.Consumer, null, n => s.a.createElement(e, i({
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
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") || e.startsWith("blob") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
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
				o = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(r.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(r.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(s.useState)(null), [i, c] = Object(s.useState)(null), [d, l] = Object(s.useState)(null), [u, m] = Object(s.useState)(!1), p = Object(s.useCallback)(async () => m(!0), []), b = Object(s.useCallback)(() => m(!1), []), f = Object(s.useCallback)(() => m(!u), [u]), h = Object(s.useMemo)(() => {
					const t = a(e);
					return d ? Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: g,
					styles: v,
					update: x
				} = Object(o.a)(t, i, h);
				return Object(s.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: v.arrow,
						...g.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: v.popper,
						...g.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: f,
					visible: u,
					update: x
				}), [l, g, c, b, p, v, t, n, f, u, x])
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/intlSupport.ts");

			function i(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: i,
					locale: a = r.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const c = new Date(e * s.Xb);
				return o.a ? new Intl.DateTimeFormat(a, {
					month: i ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(c) : c.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.DEFAULT_LOCALE;
				const n = e.toString().length > 10,
					s = new Date(e * (n ? 1 : 1e3));
				return s.toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
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
				return v
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return E
			}));
			var r = n("./node_modules/linkify-it/index.js"),
				s = n.n(r),
				o = n("./node_modules/tlds/index.js"),
				i = n.n(o),
				a = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./node_modules/lodash/values.js"),
				d = n.n(c);
			const l = e => d()(a.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(i.a).set({
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
				g = s()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				v = s()().tlds(i.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				x = p.normalize;
			p.normalize = e => {
				x.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const _ = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				y = e => {
					return [...h.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				O = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				E = e => {
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
					i = encodeURIComponent(`${t}${o}`);
				return `${r.a.accountManagerOrigin}${n||"/login"}?dest=${i}`
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
			var o = n("./node_modules/lodash/debounce.js"),
				i = n.n(o),
				a = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/hooks/usePromoContext.ts"),
				l = n("./src/reddit/constants/promo.ts"),
				u = n("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var m = function() {
					const e = Object(u.a)(c.Uc.Bottom_cell),
						t = Object(u.a)(c.Uc.Bottom_cell_dismissible),
						n = Object(u.a)(c.Uc.Bottom_cell_dismissible_immediate_trigger),
						r = Object(u.a)(c.Uc.Bottom_cell_signup_upsell_copy),
						s = Object(u.a)(c.Uc.Bottom_cell_surprise_install_copy),
						o = Object(u.a)(c.Uc.Bottom_sheet);
					return e || r || s ? l.b.SignupUpsellCell : t || n ? l.b.SignupUpsellCellDismissible : o ? l.b.SignupUpsellBottomSheet : null
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
						} = Object(d.a)(), n = m(), o = Object(p.a)(n), l = Object(u.a)(c.Uc.Bottom_cell_dismissible_immediate_trigger);
						return r.useMemo(() => i()(() => {
							if (!o && n) {
								const e = document.getElementById(a.e),
									r = e ? e.scrollTop : s().scrollY,
									o = s().innerHeight,
									i = o / 3,
									c = 2 * o;
								r >= (l ? i : c) && t(n)
							}
						}, e, {
							maxWait: f
						}), [l, o, n, t, e])
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
						o = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - o === s
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			const r = "APP_BADGES__PENDING",
				s = "APP_BADGES__LOADED",
				o = "APP_BADGES__UPDATED",
				i = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				o = n("./src/reddit/actions/tabBadging.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/BadgeIndicators.json"),
				c = e => Object(i.a)(e, {
					...a
				}),
				d = n("./src/reddit/models/Badge/index.ts");
			const l = Object(r.a)(s.c),
				u = Object(r.a)(s.b),
				m = Object(r.a)(s.d),
				p = Object(r.a)(s.a),
				b = e => {
					let {
						key: t,
						count: n
					} = e;
					return {
						[t]: {
							count: n,
							style: d.b.Numbered
						}
					}
				},
				f = (e, t) => ({
					[d.c.ChatUnreadMessages]: {
						count: e,
						style: d.b.Numbered
					},
					[d.c.ChatHasNewMessages]: {
						isShowing: t,
						style: d.b.Filled
					}
				}),
				h = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					e(l());
					const s = await async function(e) {
						const t = await c(e());
						if (t.ok && t.body) {
							return function(e) {
								var t;
								const n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.badgeIndicators;
								if (n) return {
									...n,
									chatUnreadMessages: {
										count: (Number(n.chatUnreadMessages.count) || 0) + (Number(n.chatUnacceptedInvites.count) || 0) + (Number(n.chatUnreadMentions.count) || 0)
									}
								}
							}(t.body)
						}
					}(r);
					s ? (e(u(s)), e(Object(o.d)())) : e(p())
				};
			const g = () => async e => {
				const t = b({
					key: d.c.MessageTab,
					count: 0
				});
				e(m(t))
			}
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				o = "EMBEDS__LOADABLE",
				i = Object(r.a)(s),
				a = Object(r.a)(o)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			})), n.d(t, "b", (function() {
				return w
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/performanceTimings/index.tsx"),
				i = n("./src/reddit/actions/focusedVerticals/constants.ts"),
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
				v = (Object(m.a)((e, t) => {
					const n = v(e, t);
					if (!n) return g;
					const r = Object(f.cb)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : g
				}), (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(f.Y)(e, {
						subredditId: n
					}) : null
				}),
				x = (e, t, n, r, s) => {
					const o = s.find(e => e <= t) || -1,
						i = s.find(e => e > t) || 1 / 0;
					return t !== i && t !== o && (!(o + n > t) && (!(t + n > i) && !((e, t, n) => {
						const r = n[t - 1],
							s = n[t],
							o = s && Object(b.G)(e, {
								postId: r
							}) || null,
							i = s && Object(b.G)(e, {
								postId: s
							}) || null;
						return o && o.isSponsored || i && i.isSponsored
					})(e, t, r)))
				},
				_ = [3];
			Object(m.a)((e, t) => {
				let {
					existingDUPositions: n,
					listingProps: r
				} = t;
				const s = n.slice().sort();
				let o = -1;
				const i = Object(b.z)(e, {
						listingKey: r.listingKey
					}),
					a = [];
				return _.forEach(t => {
					let n = o + t;
					if (!(n >= i.length)) {
						for (; n < i.length && !x(e, n, t, i, s);) n += 1;
						n < i.length && (a.push(n), o = n)
					}
				}), a
			});
			var y = n("./src/reddit/selectors/platform.ts");
			const O = Object(s.a)(i.f),
				E = Object(s.a)(i.d),
				j = Object(s.a)(i.g),
				C = Object(s.a)(i.c),
				I = Object(s.a)(i.e),
				S = (Object(s.a)(i.i), Object(s.a)(i.h), () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						i = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(o),
						d = (e => {
							const t = Object(h.Q)(e),
								n = p.d.geoSubredditRecommendationDULoggedIn(e),
								r = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && n || !t && r
						})(o),
						m = Object(h.Q)(o);
					if (i || !d) return;
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
							if (N(t)) {
								if (k(t)) {
									e(C({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (T(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: s,
											category: o
										} = n.focusRecommendations[0],
										i = [r, s],
										a = Object(u.d)(i),
										c = Object(l.b)(i),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [s.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(O(m)), b = !0
								}
							} else b = !1
						}
					} catch (f) {
						b = !1
					}
					b || e(E({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				N = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				},
				T = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !k(e) && r === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				},
				w = () => async (e, t, n) => {
					var r, s;
					const i = t(),
						a = (e => e.focusedVerticals.lastLoadedEnv)(i);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(i) || null === a || "client" === a) {
						const n = null === (s = null === (r = Object(y.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							a = Object(h.R)(i);
						return Object(o.i)(() => e(S()), {
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
				return o
			})), n.d(t, "l", (function() {
				return i
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
				o = "SUBREDDIT__FLAIRED_USERS_FAILED",
				i = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
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
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "INCONTEXT__BANNED",
				o = "INCONTEXT__MUTED",
				i = Object(r.a)(s),
				a = Object(r.a)(o)
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
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/inboxBanner/constants.ts");
			const o = Object(r.a)(s.a),
				i = Object(r.a)(s.b)
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(r.a)(s)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const r = "SUBREDDIT__MODERATION_LOG_LOADED",
				s = "SUBREDDIT__ALL_MODERATORS_LOADED",
				o = "SUBREDDIT__MODERATION_CATEGORY_ACTIONS_LOADED"
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
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
				o = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				i = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
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
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "b", (function() {
				return I
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var l = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(s.a)(o.c),
				p = Object(s.a)(o.b),
				b = Object(s.a)(o.a),
				f = Object(s.a)(o.f),
				h = Object(s.a)(o.e),
				g = Object(s.a)(o.d),
				v = e => async (t, n, r) => {
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
									const o = e => {
										const {
											rowIds: o,
											rowsCollection: i
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let r = 0; r < e.rows.length; r++) {
													const s = e.rows[r],
														o = s.messageType;
													t.push(o), n[o] = s
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										r = {
											...r,
											...i
										}, s = [...s, ...o];
										const a = e.id;
										n.push(a), t[a] = {
											...e,
											rows: o
										}
									};
									for (let i = 0; i < e.length; i++) o(e[i]);
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
			const x = Object(s.a)(o.g),
				_ = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					(await Object(a.b)(o(), e)).ok ? (y(t, e), function(e) {
						e(Object(i.f)({
							kind: u.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(i.f)({
							kind: u.b.Error,
							text: r.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function y(e, t) {
				e(x({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const O = Object(s.a)(o.j),
				E = Object(s.a)(o.i),
				j = Object(s.a)(o.k),
				C = Object(s.a)(o.h),
				I = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					var o, a;
					t(O());
					const l = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(s(), e);
					if (null === (a = null === (o = l.error) || void 0 === o ? void 0 : o.fields) || void 0 === a ? void 0 : a.length) return t(C({
						error: l.error
					})), void t(Object(i.d)());
					if (l.ok && l.body) {
						const e = l.body,
							n = e && e.data,
							r = n && n.identity && n.identity.subscribedSubreddits,
							s = r && r.pageInfo,
							o = (r && r.edges).map(e => e.node);
						t(E({
							nodes: o,
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
				o = n("./src/lib/notifications/featureFlags.ts"),
				i = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => i.d.pushNotificationsBrowserSupported(e) ? Object(o.a)() : s.c.BrowserUnsupported,
				d = e => {
					switch (e) {
						case s.a.Denied:
							a.rb(!1), Object(r.c)();
							break;
						case s.a.Default:
						case s.a.Granted:
							a.rb(!0), Object(r.c)();
							break;
						case s.a.Closed:
							a.rb(!0)
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
				return o
			})), n.d(t, "h", (function() {
				return i
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
				o = "INBOX_NOTIFICATIONS__FAILED",
				i = "INBOX_NOTIFS_SET_OVERFLOW_MENU_ID",
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
				return A
			})), n.d(t, "b", (function() {
				return U
			})), n.d(t, "i", (function() {
				return W
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "c", (function() {
				return G
			})), n.d(t, "a", (function() {
				return V
			})), n.d(t, "h", (function() {
				return K
			})), n.d(t, "j", (function() {
				return z
			})), n.d(t, "g", (function() {
				return Y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				i = n("./src/reddit/actions/inboxBanner/index.ts"),
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
				v = n("./src/reddit/constants/headers.ts"),
				x = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var _;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(_ || (_ = {}));
			var y = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			var O = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var E = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				j = n("./src/reddit/helpers/trackers/inbox.ts"),
				C = n("./src/reddit/models/Badge/index.ts"),
				I = n("./src/reddit/models/NotificationInbox/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				N = n("./src/reddit/selectors/appBadges.ts"),
				k = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const T = Object(s.a)(a.e),
				w = Object(s.a)(a.b),
				P = Object(s.a)(a.a),
				L = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					var o, a;
					const c = n(),
						u = Object(k.a)(c);
					t(T());
					const m = await ((e, t) => Object(l.a)(e, {
						...h,
						variables: t
					}))(s(), e);
					if (null === (a = null === (o = m.error) || void 0 === o ? void 0 : o.fields) || void 0 === a ? void 0 : a.length) return t(P({
						error: m.error
					})), void t(Object(d.d)());
					const p = m && m.body,
						b = D(p);
					if (null === u) {
						const e = Object(k.f)(c);
						t(B(b.notifications, e.length))
					}
					t(w(b)), t(Object(i.b)(b.banners))
				}, A = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					var s, o;
					const i = await (e => Object(l.a)(e, {
						...g
					}))(r());
					if (null === (o = null === (s = i.error) || void 0 === s ? void 0 : s.fields) || void 0 === o ? void 0 : o.length) return;
					const a = i && i.body,
						c = R(a).nodes.filter(e => !e.viewedAt);
					c.length && c.forEach(e => {
						var n;
						Object(j.u)({
							id: e.id,
							isClicked: !1,
							isViewed: Boolean(e.viewedAt),
							type: null === (n = e.context) || void 0 === n ? void 0 : n.messageType
						})(t())
					})
				}, D = e => {
					const t = [],
						n = [],
						r = e && e.data,
						s = r && r.notificationInbox,
						o = s && s.elements,
						i = o && o.pageInfo,
						a = o && o.edges;
					if (a)
						for (const c of a) Object.keys(c.node).length && (c.node.hasOwnProperty("notificationName") ? n.push(c.node) : t.push(c.node));
					return {
						notifications: t,
						banners: n,
						pageInfo: i
					}
				}, R = e => {
					var t, n;
					return {
						nodes: null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.notificationInbox) || void 0 === n ? void 0 : n.elements.edges.map(e => e.node)
					}
				}, B = (e, t) => async (n, r) => {
					const s = r(),
						o = Object(k.a)(s),
						i = ((e, t) => {
							let n, r = 0;
							const s = new Date,
								o = s.getDate(),
								i = s.getMonth(),
								a = s.getFullYear();
							for (; r < e.length && !n;) {
								const s = e[r],
									c = new Date(s.sentAt),
									d = c.getDate(),
									l = c.getMonth(),
									u = c.getFullYear();
								if ((d !== o || l !== i || u !== a) && !n) {
									n = ((t || 0) + r).toString()
								} else r++
							}
							return n
						})(e, t);
					i && i !== o && n(M({
						index: i
					}))
				}, M = Object(s.a)(a.g), F = (Object(s.a)(a.h), Object(s.a)(a.f)), U = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const i = [e];
					if ((await ((e, t) => Object(l.a)(e, {
							...y,
							variables: {
								input: t
							}
						}))(o(), {
							notificationIds: i
						})).ok) {
						t(F({
							id: e
						}));
						const s = Object(k.f)(n());
						t(B(s)), t(Object(d.f)(Object(d.e)(r.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), S.b.SuccessCommunityGreen)))
					} else t(Object(d.f)(Object(d.e)(r.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), S.b.Error)))
				}, W = (e, t) => async (n, s, o) => {
					let {
						gqlContext: i
					} = o;
					if (!e) return;
					(await Object(E.b)(i(), e, {
						isSubredditUpdatesInterestingPostEnabled: !0,
						isUpdateFromSubredditEnabled: !0
					})).ok ? (t && t(), n(Object(d.f)(Object(d.e)(r.fbt._("Success! Undone hiding notifications from this community.", null, {
						hk: "1na0NP"
					}), S.b.SuccessCommunityGreen)))) : n(Object(d.f)(Object(d.e)(r.fbt._("Failed to undo hiding notifications, please try again.", null, {
						hk: "4jo7Pf"
					}), S.b.Error)))
				}, H = (e, t) => async (n, s, o) => {
					let {
						gqlContext: i
					} = o;
					if (!e) return;
					(await Object(E.b)(i(), e, {
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
				}, G = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					if (!e) return;
					(await ((e, t) => Object(b.a)(Object(f.a)(e, [v.a]), {
						endpoint: Object(x.a)(`${e.apiUrl}/api/sendreplies`),
						method: p.ob.POST,
						data: {
							id: t
						}
					}))(o(), e)).ok ? t(Object(d.f)(Object(d.e)(r.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), S.b.SuccessCommunityGreen))) : t(Object(d.f)(Object(d.e)(r.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), S.b.Error)))
				}, V = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					if (!e) return;
					(await m(o(), {
						awardingId: e
					})).ok ? t(Object(d.f)(Object(d.e)(r.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), S.b.SuccessCommunityGreen))) : t(Object(d.f)(Object(d.e)(r.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), S.b.Error)))
				}, q = Object(s.a)(a.d), K = (e, t) => async (n, r, s) => {
					let i, {
						apiContext: a
					} = s;
					if (t === I.a.CommentReply || t === I.a.PostReply || t === I.a.PrivateMessage || t === I.a.UsernameMention) {
						if ((i = await ((e, t) => Object(b.a)(Object(f.a)(e, [v.a]), {
								endpoint: Object(x.a)(`${e.apiUrl}/api/read_message`),
								method: p.ob.POST,
								data: {
									id: t
								}
							}))(a(), e)).ok) {
							let e = Object(N.a)(r());
							if (e > 0) {
								e--;
								const t = Object(o.e)({
									count: e,
									key: C.c.ActivityTab
								});
								n(Object(o.a)(t)), n(Object(c.e)())
							}
						}
					} else i = await ((e, t) => Object(b.a)(Object(f.a)(e, [v.a]), {
						endpoint: Object(x.a)(`${e.apiUrl}/api/read_notification`),
						method: p.ob.POST,
						data: {
							id: t
						}
					}))(a(), e);
					if (i.ok) {
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
						i = await ((e, t) => Object(l.a)(e, {
							...O,
							variables: {
								input: t
							}
						}))(r(), {
							lastSentAt: s
						});
					if (i.ok) {
						const t = i.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(o.a)(n)), e(Object(c.d)()))
					}
				}, Q = Object(s.a)(a.c), Y = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					const {
						notificationsInbox: {
							markAllAsReadTimestamp: i
						}
					} = t(), a = new Date;
					if (!i || a.getTime() - new Date(i).getTime() > 15e3) {
						if ((await ((e, t) => Object(b.a)(Object(f.a)(e, [v.a]), {
								endpoint: Object(x.a)(`${e.apiUrl}/api/read_all_messages`),
								method: p.ob.POST,
								data: {
									filter_types: null == t ? void 0 : t.join(",")
								}
							}))(s(), [_.Activity, _.Messages])).ok) {
							const t = Object(o.e)({
									count: 0,
									key: C.c.MessageTab
								}),
								n = Object(o.e)({
									count: 0,
									key: C.c.ActivityTab
								});
							e(Object(o.a)({
								...t,
								...n
							})), e(Q({
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
				return o
			})), n.d(t, "i", (function() {
				return i
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
				o = "PAGE__MOD_LISTING_PAGE_FAILED",
				i = "MOD_LISTING_MORE_POSTS_PENDING",
				a = "MOD_LISTING_MORE_POSTS_LOADED",
				c = "MOD_LISTING_MORE_POSTS_FAILED",
				d = "MOD_LISTING_HIDE_SUBREDDIT_SUCCESS",
				l = "MOD_LISTING_HIDE_SUBREDDIT_PENDING",
				u = "MOD_LISTING_HIDE_SUBREDDIT_FAILED",
				m = "MOD_LISTING_UNHIDE_SUBREDDIT_SUCCESS",
				p = "MOD_LISTING_UNHIDE_SUBREDDIT_PENDING",
				b = "MOD_LISTING_UNHIDE_SUBREDDIT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "k", (function() {
				return R
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "h", (function() {
				return U
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/flair/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				l = n("./src/reddit/models/Flair/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				f = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(s.a)(b),
				g = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				v = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				x = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				_ = Object(s.a)(v),
				y = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				O = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				E = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				j = Object(s.a)(O),
				C = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				I = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				S = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				N = Object(s.a)(I),
				k = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				T = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				w = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				P = Object(s.a)(T),
				L = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				A = Object(s.a)(w),
				D = (e, t) => async (n, r, s) => {
					let {
						apiContext: o
					} = s;
					const i = r(),
						a = Object(p.Y)(i, {
							subredditId: e
						}).name;
					n(f());
					const d = await Object(c.k)(o(), a, t);
					if (d.ok) {
						n(h({
							subredditId: e,
							isEnabled: t
						}))
					} else n(g());
					return d.ok
				}, R = (e, t) => async (n, r, s) => {
					let {
						apiContext: o
					} = s;
					const i = r(),
						a = Object(p.Y)(i, {
							subredditId: e
						}).name;
					n(x());
					const d = await Object(c.j)(o(), t, l.d.LinkFlair, a);
					if (d.ok) {
						n(_({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(y());
					return d.ok
				}, B = (e, t) => async (n, s, o) => {
					let {
						apiContext: d
					} = o;
					const m = s(),
						b = Object(p.Y)(m, {
							subredditId: t
						}).name;
					n(E());
					const f = await Object(c.f)(d(), e, b, l.d.LinkFlair);
					let h = f.ok && !(f.body && !1 === f.body.success);
					if (h) {
						const r = f.body;
						if (n(j({
								subredditId: t,
								template: r
							})), r.id) {
							const s = e.styleTemplate,
								o = m.structuredStyles.flairTemplate.models[r.id];
							s ? h = await n(Object(i.d)(t, r.id, s)) : o && (h = await n(Object(i.c)(t, r.id)))
						}
					}
					if (h) {
						const e = Object(a.e)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(C());
						const s = Object(a.e)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), B(e, t));
						n(Object(a.f)(s))
					}
					return h
				}, M = (e, t) => async (n, s, o) => {
					let {
						apiContext: i
					} = o;
					const d = s(),
						l = Object(p.Y)(d, {
							subredditId: t
						}).name;
					if (n(S()), (await Object(c.b)(i(), e, l)).ok) {
						n(N({
							subredditId: t,
							templateId: e
						}));
						const s = Object(a.e)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(a.f)(s))
					} else {
						n(k());
						const s = Object(a.e)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						n(Object(a.f)(s))
					}
				}, F = (e, t) => async (n, s, o) => {
					let {
						apiContext: i
					} = o;
					const d = s(),
						b = Object(m.d)(d, {
							subredditId: t
						}).templateIds,
						f = Object(p.Y)(d, {
							subredditId: t
						}).name;
					if (n(P({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(i(), f, l.d.LinkFlair, e)).ok) {
						n(L());
						const e = Object(a.e)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(a.f)(e))
					} else {
						n(A({
							subredditId: t,
							templateIds: b
						}));
						const s = Object(a.e)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						n(Object(a.f)(s))
					}
				}, U = e => {
					let {
						post: t,
						previewFlair: n,
						selectedTemplateId: r
					} = e;
					return async (e, s, i) => {
						let {
							apiContext: a
						} = i;
						const l = t.flair.filter(e => !Object(d.q)(e.type));
						if (n && l.unshift(n), e(Object(o.R)({
								[t.id]: {
									flair: l
								}
							})), n) {
							const e = Object(d.g)(n);
							Object(c.h)(a(), t.id, r, e)
						} else Object(c.h)(a(), t.id, "", "")
					}
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return y
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "c", (function() {
				return I
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forEach.js"),
				s = n.n(r),
				o = n("./node_modules/lodash/isEqual.js"),
				i = n.n(o),
				a = n("./node_modules/lodash/values.js"),
				c = n.n(a),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/imageUploads.ts"),
				u = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/helpers/trackers/blade.ts"),
				g = n("./src/reddit/models/Image/index.tsx"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/telemetry/index.ts");
			const _ = e => {
					let {
						subredditId: t,
						flairId: n,
						imageKey: r,
						imageData: s
					} = e;
					return async (e, o, i) => {
						const a = o(),
							c = Object(v.Y)(a, {
								subredditId: t
							});
						if (!c) return !1;
						e(Object(l.k)(s));
						const d = await (async (e, t, n, r, s, o) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
							method: m.ob.POST,
							data: {
								filepath: r,
								imagetype: s,
								mimetype: o
							}
						}))(i.apiContext(), c.name, n, s.file.name, r, await Object(u.h)(s.file));
						let h = !1;
						try {
							const t = await Object(l.g)(o(), d, s, g.a.FlairTemplates);
							t && e(Object(l.j)(t)), h = !0
						} catch (x) {
							if (x instanceof Error) throw x;
							e(Object(l.i)(x))
						}
						return h
					}
				},
				y = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS",
				O = Object(d.a)(y),
				E = (e, t, n) => async (r, o, a) => {
					const {
						apiContext: d
					} = a;
					let u = o();
					const {
						pendingImages: y,
						...E
					} = n;
					let j = E;
					const C = Object(v.Y)(u, {
						subredditId: e
					});
					if (!C) return !1;
					const I = u.structuredStyles.flairTemplate.models[t];
					if (I && i()(I, j)) return !0;
					if (y) {
						const n = [];
						if (s()(y, (s, o) => {
								s && n.push(r(_({
									flairId: t,
									imageData: Object(g.m)(s),
									imageKey: o,
									subredditId: e
								})))
							}), !(await Promise.all(n)).every(e => e)) return !1;
						j = ((e, t, n) => {
							const r = {
								...e
							};
							return s()(t, (e, t) => {
								const s = e && n.imageUploads[e.id];
								s && s.kind === g.b.TempUploaded && (r[t] = s.url)
							}), r
						})(j, y, o())
					}
					u = o();
					let S = null,
						N = null;
					const k = [];
					try {
						(S = await Object(l.f)(u, g.a.FlairTemplates)) && (N = Object(l.m)(S)(r, o, a), k.push(...c()(S.imagesByKey)))
					} catch (L) {
						return !1
					}
					const T = await (async (e, t, n, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
							method: m.ob.PUT,
							data: r
						}))(d(), C.name, t, j),
						w = I ? "edit_post_flair_template" : "save_post_flair_template",
						P = Object(h.e)(u, w);
					if (T.ok) {
						let e;
						if (N) try {
							await N, e = ((e, t, n) => {
								const r = {
									...e
								};
								return t.forEach(e => {
									const t = n.imageUploads[e.id];
									t && t.kind === g.b.Uploaded && (e.url === r.postBackgroundImage ? r.postBackgroundImage = t.url : e.url === r.postPlaceholderImage && (r.postPlaceholderImage = t.url))
								}), r
							})(j, k, o())
						} catch (L) {
							e = null
						} else e = j;
						r(O({
							flairId: t,
							template: e || j
						}))
					} else S && S.websocket.close();
					return Object(x.a)({
						...P,
						actionInfo: {
							...P.actionInfo,
							success: T.ok
						}
					}), T.ok
				}, j = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", C = Object(d.a)(j), I = (e, t) => async (n, r, s) => {
					let {
						apiContext: o
					} = s;
					const i = r(),
						a = Object(v.Y)(i, {
							subredditId: e
						});
					if (!a) return !1;
					const c = await (async (e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
							method: m.ob.DELETE
						}))(o(), a.name, t),
						d = Object(h.e)(i, "delete_flair_template");
					return c.ok && n(C({
						flairId: t
					})), Object(x.a)({
						...d,
						actionInfo: {
							...d.actionInfo,
							success: c.ok
						}
					}), c.ok
				}
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/models/Media/index.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const o = "POSTLIST__MARKED_END",
				i = "POSTLIST__UNMARKED_END",
				a = Object(r.a)(o),
				c = Object(r.a)(i),
				d = (e, t) => async (n, r) => {
					const o = r();
					e in o.listings.postOrder.fetchedTokens ? e in o.listings.postOrder.ids ? n(c({
						listingKey: e
					})) : s.l(o, e) : n(a({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/recapGame.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "RECAP__GAME_TOGGLED", (function() {
				return d
			})), n.d(t, "RECAP__GAME_START", (function() {
				return l
			})), n.d(t, "RECAP__GAME_CLOSE", (function() {
				return u
			})), n.d(t, "RECAP__SET_ORIGINAL_NIGHT_MODE", (function() {
				return m
			})), n.d(t, "recapGameToggleAction", (function() {
				return p
			})), n.d(t, "recapGameStartAction", (function() {
				return b
			})), n.d(t, "recapGameCloseAction", (function() {
				return f
			})), n.d(t, "recapGameSetOriginalNightModeAction", (function() {
				return h
			})), n.d(t, "recapGameToggle", (function() {
				return g
			})), n.d(t, "recapGameClose", (function() {
				return v
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/preferences.ts"),
				i = n("./src/reddit/reducers/features/recapGame/index.ts"),
				a = n("./src/reddit/selectors/experiments/recapLeadUpGame.ts"),
				c = n("./src/reddit/selectors/recapGame.ts");
			Object(r.a)({
				features: {
					recapGame: i.b
				}
			});
			const d = "RECAP__GAME_TOGGLED",
				l = "RECAP__GAME_START",
				u = "RECAP__GAME_CLOSE",
				m = "RECAP__SET_ORIGINAL_NIGHT_MODE",
				p = Object(s.a)(d),
				b = Object(s.a)(l),
				f = Object(s.a)(u),
				h = Object(s.a)(m),
				g = () => async (e, t) => {
					const n = t(),
						r = n.platform.currentPage,
						s = Object(a.b)(n),
						o = Object(a.a)(n, {
							pageLayer: r
						});
					(s || o) && e(p())
				}, v = () => async (e, t) => {
					const n = Object(c.a)(t());
					e(f()), e(Object(o.A)({
						nightmode: n.isNightModeOriginal
					}))
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return v
			})), n.d(t, "a", (function() {
				return _
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/actions/subreddit/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/blade.ts"),
				d = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const f = Object(s.a)(i.B),
				h = Object(s.a)(i.C),
				g = Object(s.a)(i.A),
				v = (e, t, n) => async (r, s, o) => {
					const i = Object(p.C)(s(), {
						subredditName: e
					});
					if (i) return _(i.id, t, n)(r, s, o)
				}, x = () => r.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), _ = (e, t, n) => async (s, i, p) => {
					const v = await Object(l.e)(t);
					s(f());
					const _ = i();
					try {
						await Object(o.g)("communityIcon", v, e)(s, i, p)
					} catch (O) {
						return Object(b.a)(Object(d.c)(_, "something went wrong with the uploading the image")), s(Object(a.f)({
							kind: u.b.Error,
							text: x()
						})), void s(g())
					}
					const y = Object(m.c)(i(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(d.c)(_, "image is null")), s(Object(a.f)({
						kind: u.b.Error,
						text: x()
					})), void s(g());
					await Object(o.k)(e, {
						communityIcon: y
					}, c.b.idCard, n)(s, i, p), s(Object(a.f)({
						kind: u.b.SuccessCommunity,
						text: r.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), s(h())
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return w
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "b", (function() {
				return F
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subscription/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var f = n("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				h = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				g = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				v = n("./src/reddit/models/GqlTopLevelField.ts"),
				x = n("./src/reddit/models/User/index.ts");

			function _(e) {
				const t = [],
					n = [],
					r = {},
					s = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== x.c.AvailableRedditor || !a.node.profile) continue;
					const e = Object(h.a)(a.node.profile);
					r[e.id] = e;
					const {
						isFavorite: n
					} = a.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== v.a.Subreddit) continue;
					const e = Object(g.a)(a.node);
					s[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: r,
					subreddits: s
				}
			}
			var y = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/profile.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/selectors/subscriptions.ts"),
				C = n("./src/reddit/selectors/user.ts");
			const I = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				S = Object(i.a)(d.c),
				N = Object(i.a)(d.b),
				k = Object(i.a)(d.a),
				T = Object(i.a)(d.h),
				w = (Object(i.a)(d.i), Object(i.a)(d.g), () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(N());
					const o = await Object(f.a)(r());
					if (o.ok) {
						const t = _(o.body.data);
						e(S(t))
					} else e(k({
						error: o.error
					}))
				}),
				P = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				L = (e, t, n) => async (i, d, m) => {
					let {
						apiContext: p
					} = m, b = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(E.I)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(O.o)(d(), e.name),
						name: `${s.qc}${e.name}`,
						type: e.type
					});
					if (!Object(C.R)(d())) return i(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void i(Object(a.openRegisterModal)());
					const h = Object(C.l)(d());
					if (h) {
						const t = b.length,
							n = e.length;
						if (b = b.filter(e => !P(h, e)), (e = e.filter(e => !P(h, e))).length !== n || b.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							i(Object(l.f)(Object(l.e)(e, y.b.Error)))
						}
						if (!e.length && !b.length) return
					}
					i(T({
						identifiers: b,
						nameIdentifiers: e,
						profileModels: d().profiles.models,
						subredditModels: d().subreddits.models,
						subscriptionsCount: Object(j.b)(d()),
						userIsSubscriber: t,
						widgetId: n
					}));
					const g = await Object(f.c)(p(), {
						subredditNames: b.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (g.ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : r.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [r.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							s = r.fbt._("Successfully followed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "23Snyg"
							}),
							a = r.fbt._("Successfully unfollowed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "jfC0S"
							}),
							c = r.fbt._("Successfully joined {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1W9UY3"
							}),
							d = r.fbt._("Successfully left {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1saMW"
							});
						i(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : a : t ? c : d
						}))
					} else {
						i(T({
							identifiers: b,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(j.b)(d()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const s = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						i(Object(l.f)(Object(l.e)(s, y.b.Error)))
					}
					return g.ok
				}, A = Object(i.a)(d.f), D = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const o = n(),
						i = Object(E.Q)(o, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === u.a.SUBREDDIT ? i.name : `u_${i.name}`,
						c = o.subscriptions.favoriteSubredditOrder || [],
						d = o.subscriptions.favoriteProfileOrder || [],
						m = c.indexOf(e.id),
						p = d.indexOf(e.id),
						b = -1 === m && -1 === p,
						h = o.subreddits.models,
						g = o.profiles.models,
						v = {
							type: e.type,
							name: i.name
						},
						x = () => Object(E.kb)(n(), {
							identifier: v
						});
					(x() || (await t(L([v], !0)), x())) && (t(A({
						makeFavorite: b,
						identifier: e,
						subredditModels: h,
						profileModels: g
					})), (await Object(f.b)(s(), a, b)).ok || (t(A({
						makeFavorite: !b,
						identifier: e,
						subredditModels: h,
						profileModels: g
					})), t(Object(l.f)({
						text: I(),
						kind: y.b.Error
					}))))
				}, R = Object(i.a)(d.d), B = e => async (t, n, r) => {
					let {
						apiContext: o
					} = r;
					const i = n().multireddits.models,
						a = () => {
							t(Object(l.f)({
								text: I(),
								kind: y.b.Error
							}))
						},
						c = i[e];
					if (!c) return void a();
					const d = !c.isFavorited;
					t(R({
						makeFavorite: d,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: s.ob.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(o(), e, d)).ok || (t(R({
						makeFavorite: !d,
						multiredditPath: e,
						multiredditsModelsState: i
					})), a())
				}, M = Object(i.a)(d.e), F = e => async (t, n, o) => {
					let {
						apiContext: i
					} = o;
					const a = n(),
						c = a.multireddits.models;
					if (!Object(C.R)(a)) return;
					const d = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(l.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : r.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: y.b.Error
							}))
						},
						u = c[e];
					if (!u) return void d();
					const f = !u.isFollowed;
					t(M({
						follow: f,
						multiredditPath: e,
						multiredditsModelsState: c
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: s.ob.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(i(), e, f)).ok || (t(M({
						follow: !f,
						multiredditPath: e,
						multiredditsModelsState: c
					})), d(f))
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
				return v
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/fastdom/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = n("./src/reddit/helpers/tabBadging/index.ts"),
				c = n("./src/reddit/models/Badge/index.ts"),
				d = n("./src/reddit/selectors/appBadges.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const m = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				p = Object(o.a)(m),
				b = (e, t) => {
					e <= 0 ? s.a.write(() => {
						Object(a.b)(!1), window.document.title = t
					}) : s.a.write(() => {
						Object(a.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				f = Object(r.c)({
					basicChannelCount: d.e,
					subredditChannelCount: d.d,
					subredditMentionCount: d.c
				}),
				h = () => async (e, t) => {
					const n = t(),
						r = Object(i.g)(n, {});
					if (!(Object(l.Q)(n) || Object(l.R)(n)) || !r) return;
					const s = Object(d.i)(n);
					b(s, r), e(p({
						hasUnreadMessages: !!s
					}))
				}, g = () => async (e, t) => {
					{
						e(h());
						const n = (e => ({
							inboxCount: Object(d.h)(e),
							basicChannelCount: Object(d.e)(e)
						}))(t());
						Object(a.c)(n)
					}
				}, v = e => async (t, n) => {
					const r = n(),
						s = Object(d.e)(r),
						o = Object(d.h)(r),
						{
							basicChannelCount: i,
							inboxCount: a
						} = e;
					if (s !== i) {
						const e = Object(u.e)({
							count: i,
							key: c.c.ChatTab
						});
						t(Object(u.a)(e))
					}
					if (a && a !== o) {
						const e = Object(u.e)({
							count: a,
							key: c.c.MessageTab
						});
						t(Object(u.a)(e))
					}(s !== i || a && a !== o) && t(h())
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js");
			const i = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, i, a) => {
					let {
						routes: c
					} = a;
					const d = i();
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
				i = n("./src/reddit/constants/banners.ts"),
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
			const v = 11,
				x = 1e3,
				_ = 500,
				y = [g.a.iconCarouselInnerWrapper0, g.a.iconCarouselInnerWrapper1];

			function O(e) {
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
			const E = Object(m.c)({
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
					this.timerId = setInterval(() => this.updateOrdering(), x + _)
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
						return e.awardType === f.f.Global && e.isEnabled && !e.isOptional
					});
					return n.length ? {
						icons: b()(n, v).map(e => {
							var t;
							const n = (null === (t = e.staticIcon64) || void 0 === t ? void 0 : t.url) || e.staticIcon.url;
							return s.a.createElement(O, {
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
			var C = Object(u.b)(E)(j);
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
				} = e, n = Object(c.g)(i.a.AWARDED_LISTING_BANNER, a.g), [u, m] = Object(r.useState)(n ? S.Hidden : S.Visible);
				if (u === S.Hidden) return null;
				const p = () => {
					m(S.Visible), Object(c.ob)(i.a.AWARDED_LISTING_BANNER, !1, a.g)
				};
				return u === S.Dismissed ? s.a.createElement("div", {
					className: Object(o.a)(g.a.dismissedContainer, t)
				}, s.a.createElement("div", {
					className: g.a.dismissedText
				}, I._("Ok, we won't show you this again.", null, {
					hk: "4z33KK"
				})), s.a.createElement(d.l, {
					onClick: p
				}, I._("undo", null, {
					hk: "1A9z3Y"
				}))) : s.a.createElement("div", {
					className: Object(o.a)(g.a.container, t)
				}, s.a.createElement("h2", {
					className: g.a.title
				}, I._("Explore and react to the top awarded posts on Reddit", null, {
					hk: "3IAtgk"
				})), s.a.createElement(C, null), s.a.createElement(l.a, {
					className: g.a.close,
					onClick: () => {
						m(S.Dismissed), Object(c.ob)(i.a.AWARDED_LISTING_BANNER, !0, a.g)
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
				i = n("./src/reddit/connectors/PostViewable/index.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/contexts/Post/index.tsx");
			const d = Object(i.a)(null),
				l = e => {
					let {
						className: t,
						post: n
					} = e;
					return n.isSponsored ? s.a.createElement(o.a, {
						post: n,
						trackDisplay: !0
					}, s.a.createElement("div", {
						className: Object(a.a)(t, `Blank ${n.id}`)
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
				i = n("./node_modules/reselect/es/index.js"),
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

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var x = s.a.memo((function(e) {
					let {
						visible: t,
						tooltipId: n,
						className: o,
						arrowClassName: i,
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
					}, [t]), t ? s.a.createElement("div", v({
						id: n,
						className: Object(a.a)(g.a.tooltip, o, {
							[g.a.visible]: d
						})
					}, c.popperProps), d && s.a.createElement(s.a.Fragment, null, c.arrowProps && s.a.createElement("div", v({
						className: Object(a.a)(g.a.arrow, i)
					}, c.arrowProps)), c.children)) : null
				})),
				_ = n("./src/reddit/models/Subreddit/index.ts");
			const y = e => {
					switch (e) {
						case _.c.FREQUENT:
							return "notification_frequent";
						case _.c.OFF:
							return "notification_off";
						case _.c.LOW:
						default:
							return "notification"
					}
				},
				O = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				E = {
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
				N = n("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				k = n.n(N);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var w = e => {
					return s.a.createElement(C.a, {
						id: e.dropdownId,
						className: k.a.notificationDropdown
					}, [{
						displayText: j.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(_.c.FREQUENT),
						isSelected: e.notificationLevel === _.c.FREQUENT,
						icon: s.a.createElement(S.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === _.c.FREQUENT
						})
					}, {
						displayText: j.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(_.c.LOW),
						isSelected: e.notificationLevel === _.c.LOW,
						icon: s.a.createElement(S.a, {
							name: "notification",
							isFilled: e.notificationLevel === _.c.LOW
						})
					}, {
						displayText: j.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(_.c.OFF),
						isSelected: e.notificationLevel === _.c.OFF,
						icon: s.a.createElement(S.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === _.c.OFF
						})
					}].map(e => s.a.createElement(I.b, T({
						className: Object(a.a)(k.a.notificationDropdown, k.a.notificationRow, {
							[k.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				P = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/selectors/telemetry.ts");
			const A = e => t => ({
				...L.o(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: L.kb(t)
			});
			var D = n("./src/reddit/hooks/useTracking.ts"),
				R = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const B = d.a.img("SubredditIcon", k.a),
				M = d.a.wrapped(R.a, "DefaultIcon", k.a);
			var F = e => {
					let {
						subredditName: t,
						shouldShowSubredditIcon: n,
						subredditIcon: r,
						onHide: o,
						onUpdate: i
					} = e;
					const a = Object(D.a)(),
						c = n ? s.a.createElement(B, {
							src: r || void 0
						}) : s.a.createElement(M, null),
						d = `r/${t}`;
					return s.a.createElement("div", {
						className: k.a.notificationPopup
					}, s.a.createElement("div", {
						className: k.a.title
					}, s.a.createElement("h2", null, j.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), s.a.createElement("h3", null, j.fbt._("{subreddit name}", [j.fbt._param("subreddit name", d)], {
						hk: "1es0XP"
					}))), s.a.createElement("div", {
						className: k.a.subredditWrapper
					}, s.a.createElement("div", {
						className: k.a.subredditTitle
					}, c, s.a.createElement("span", null, d), s.a.createElement(S.a, {
						name: "notification_frequent",
						className: k.a.notificationIcon,
						isFilled: !0
					})), s.a.createElement(P.t, {
						className: k.a.subscribeButton,
						priority: P.c.Primary,
						size: P.d.M,
						text: j.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							o(), i(_.c.FREQUENT), a(A(_.c.FREQUENT.toLowerCase()))
						}
					})), s.a.createElement("button", {
						className: k.a.hideButton,
						onClick: o
					}, j.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				U = n("./src/reddit/helpers/localStorage/index.ts");
			var W = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var H = e => {
					const t = Object(o.d)(),
						n = Object(D.a)(),
						i = Object(f.b)(O),
						a = Object(f.b)(E),
						[c, d] = function(e, t) {
							const [n, s] = Object(r.useState)(Object(U.U)(e, t));
							return [n, Object(r.useCallback)(() => {
								const n = Object(U.b)(e, t);
								s(n)
							}, [e, t, s])]
						}(e.userId, e.subredditId),
						l = Object(o.e)(e => !!Object(W.a)(e));
					Object(r.useEffect)(() => {
						e.notificationLevel !== _.c.LOW && e.notificationLevel !== _.c.OFF || d()
					}, [e.subredditId]);
					const u = 2 === c,
						h = () => {
							i.hide()
						},
						g = () => {
							a.hide()
						};
					Object(r.useEffect)(() => (u && (a.update && a.update(), a.show()), () => {
						g(), h()
					}), [e.subredditName, u]);
					const v = () => {
							g(), i.show()
						},
						j = (e => `dropdown-${e}`)(e.subredditName),
						C = (e => `popup-${e}`)(e.subredditName);
					Object(b.a)(j, h);
					const I = Object(r.useCallback)(e => {
							e.stopPropagation(), i.visible ? h() : v()
						}, [h, v, i.visible]),
						N = Object(r.useCallback)(t => {
							t === _.c.FREQUENT && Object(U.gb)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						T = Object(r.useCallback)(r => {
							const {
								subredditId: s
							} = e;
							h(), g(), t(Object(m.d)({
								subredditId: s,
								notificationLevel: r,
								successCallback: () => N(r)
							})), n(A(r.toLowerCase()))
						}, [h, e.subredditId, t, n]);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
						type: "button",
						className: k.a.notificationButton,
						ref: Object(p.a)(i.target.ref, a.target.ref),
						onClick: I,
						"data-testid": "subredditNotificationButton"
					}, s.a.createElement(S.a, {
						name: y(e.notificationLevel),
						className: k.a.notificationIcon,
						isFilled: !0
					})), s.a.createElement(x, {
						popperProps: i.popperProps,
						visible: i.visible,
						tooltipId: j
					}, s.a.createElement(w, {
						dropdownId: j,
						notificationLevel: e.notificationLevel,
						onClick: T
					})), u && !l && s.a.createElement(x, {
						arrowProps: a.arrowProps,
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: C,
						className: k.a.popupTooltip
					}, s.a.createElement(F, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: g,
						onUpdate: T
					})))
				},
				G = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				V = n("./src/reddit/components/SubredditNav/index.tsx"),
				q = n("./src/reddit/components/SubscribeButton/index.tsx"),
				K = n("./src/reddit/constants/componentSizes.ts"),
				z = n("./src/reddit/constants/postLayout.ts"),
				Q = n("./src/reddit/constants/posts.ts"),
				Y = n("./src/reddit/featureFlags/index.ts"),
				J = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				Z = n("./src/reddit/constants/tracking.ts");
			var X = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				$ = n("./src/reddit/hooks/useWindowEvent.ts"),
				ee = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				te = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				ne = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				re = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				se = n("./src/reddit/selectors/subreddit.ts"),
				oe = n("./src/reddit/selectors/user.ts"),
				ie = n("./src/reddit/selectors/widgets.ts"),
				ae = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				ce = n.n(ae),
				de = n("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				le = n("./src/reddit/helpers/trackers/subredditMuting.ts"),
				ue = n("./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less"),
				me = n.n(ue);
			const {
				fbt: pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), be = e => {
				let {
					onClickUnmute: t
				} = e;
				const n = Object(D.a)();
				return s.a.createElement(P.t, {
					priority: P.c.Plain,
					className: me.a.muteButton,
					onClick: () => {
						n(Object(le.g)()), t()
					}
				}, s.a.createElement(de.a, {
					className: me.a.muteIcon
				}), s.a.createElement("span", {
					className: me.a.muteDefault
				}, pe._("Muted", null, {
					hk: "incHh"
				})), s.a.createElement("span", {
					className: me.a.muteHover
				}, pe._("Unmute", null, {
					hk: "4qbgbm"
				})))
			}, fe = d.a.img("SubredditIcon", ce.a), he = Object(i.c)({
				isNsfwBlurSubreddit: ne.e,
				notificationLevel: se.L,
				isMuted: se.K,
				spPollsEnabled: Y.d.spPolls,
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
					return !!n && Object(se.S)(e, {
						subredditId: n
					})
				},
				userId: oe.j,
				userIsSubscriber: (e, t) => {
					let {
						subredditName: n
					} = t;
					const r = n;
					return Object(se.kb)(e, {
						identifier: {
							name: r,
							type: "subreddit"
						}
					})
				},
				isCommunityMutingEnabled: ee.a,
				widget: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(ie.f)(e, {
						subredditId: n
					}) : void 0
				}
			}), ge = {
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
								notificationLevel: _.c.LOW
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
					i = e.subreddit ? e.subreddit.url : e.subredditUrl,
					c = e.subreddit ? e.subreddit.title : "",
					d = Object(o.e)(te.b),
					u = Object(o.e)(te.a),
					m = d || u,
					[p, b] = Object(r.useState)(!1),
					f = Object(r.useRef)(null),
					[h, g] = Object(r.useState)(),
					[v, x] = Object(r.useState)(null),
					_ = Object(r.useCallback)((e => t => {
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
				})(g, v, m)), Object(X.a)(f, _, ge);
				const y = e.subreddit && Object(J.a)(e),
					O = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && y),
					E = n.charAt(0).toUpperCase() + n.slice(1),
					j = !!e.subreddit && e.subredditInlineEditingEnabled,
					C = Object(a.a)(ce.a.SubredditIcon, ce.a.editableIcon, {
						[ce.a.emptyEditableIcon]: !y
					}),
					I = O ? s.a.createElement(G.a, {
						className: C,
						subreddit: e.subreddit,
						iconUrl: y || void 0,
						inTopBar: !0
					}) : s.a.createElement(R.a, {
						className: ce.a.DefaultIcon
					}),
					S = O ? s.a.createElement(fe, {
						className: Object(a.a)(ce.a.SubredditIconImg, {
							[ce.a.blur]: e.isNsfwBlurSubreddit
						}),
						src: y || void 0
					}) : s.a.createElement(R.a, {
						className: Object(a.a)(ce.a.DefaultIcon, {
							[ce.a.blur]: e.isNsfwBlurSubreddit
						})
					}),
					N = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					k = e.layout ? e.layout === z.g.Large ? "984px" : "100%" : "1086px",
					T = e.isCommunityMutingEnabled && e.isMuted;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					style: {
						height: p ? void 0 : h
					},
					className: Object(a.a)(ce.a.wrapper, {
						[ce.a.stickyWrapper]: m,
						[ce.a.isSticking]: p
					})
				}, s.a.createElement("div", {
					className: ce.a.container,
					style: {
						maxWidth: k
					},
					ref: m ? x : void 0
				}, s.a.createElement("div", {
					className: ce.a.subredditMetaContainer
				}, j ? I : S, s.a.createElement("div", {
					className: Object(a.a)(ce.a.textContainer, {
						[ce.a.textContainerNoIcon]: !O
					})
				}, s.a.createElement("div", {
					className: Object(a.a)(ce.a.text, {
						[ce.a.blur]: e.isNsfwBlurSubreddit
					})
				}, s.a.createElement("h1", {
					className: ce.a.title
				}, c || E), !!c && s.a.createElement("h2", {
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
							action: Z.c.CLICK,
							noun: e,
							subreddit: L.kb(t)
						}))(t) : (e => t => ({
							...L.o(t),
							source: "id_banner",
							action: Z.c.CLICK,
							noun: e,
							subreddit: L.kb(t)
						}))(t)
					},
					identifier: {
						name: n,
						type: Q.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					afterUnsubscribeAction: () => {
						t && (Object(U.gb)(e.userId, t), e.updateSubredditInfo())
					}
				})), T && s.a.createElement(be, {
					onClickUnmute: e.unmuteSubreddit
				}), e.userIsSubscriber && !T && t && e.notificationLevel && s.a.createElement("div", {
					className: ce.a.notificationButtonContainer
				}, s.a.createElement(H, {
					notificationLevel: e.notificationLevel,
					subredditName: n,
					subredditId: t,
					subredditIcon: y,
					shouldShowSubredditIcon: O,
					userId: e.userId
				}))))), N && s.a.createElement(V.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: i,
					subredditId: t,
					subredditNavContainerClassName: ce.a.subredditNavContainer
				}))), s.a.createElement("div", {
					className: ce.a.intersectionWrapper
				}, s.a.createElement("div", {
					style: {
						height: m ? h : void 0
					},
					ref: m ? f : void 0
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
				i = n("./node_modules/react-redux/es/index.js"),
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
				v = n("./src/reddit/components/RichTextJson/index.tsx"),
				x = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				_ = n("./node_modules/lodash/flatMap.js"),
				y = n.n(_),
				O = n("./src/lib/linkMatchers/index.ts"),
				E = n("./src/lib/linkMatchers/customLinks.ts"),
				j = n("./src/reddit/controls/OutboundLink/index.tsx");
			const C = /\[(.+?)\]\((.+?)\)/g,
				I = e => {
					const t = e.split(C);
					if (1 === t.length) return [e];
					const n = [];
					for (let r = 0; r < t.length; r += 3) {
						const [e, s, o] = t.slice(r, r + 3);
						n.push(e), n.push([o, s])
					}
					return n
				};
			var S = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = y()(t, I)), e.parseRegularLinks && (t = y()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = O.f.add(E.g.subreddit.prefix, E.g.subreddit.config).match(e);
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
				N = n("./src/reddit/constants/parameters.ts"),
				k = n("./src/reddit/contexts/PageLayer/index.tsx"),
				T = n("./src/reddit/controls/Button/index.tsx"),
				w = n("./src/chat/controls/Svg/index.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var L = e => o.a.createElement(w.a, P({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				A = n("./src/reddit/models/ContentGate.ts"),
				D = n("./src/lib/constants/index.ts"),
				R = n("./src/reddit/selectors/platform.ts"),
				B = n("./src/reddit/selectors/user.ts");
			var M = n("./src/reddit/selectors/meta.ts"),
				F = n("./src/reddit/components/ContentGate/index.m.less"),
				U = n.n(F);
			const {
				fbt: W
			} = n("./node_modules/fbt/lib/FbtPublic.js"), H = l.a.wrapped(L, "PrivateKey", U.a), G = l.a.div("ButtonsContainer", U.a), V = l.a.div("Container", U.a), q = l.a.div("ContainerExp", U.a), K = l.a.div("Description", U.a), z = l.a.div("PrivateSubredditDetails", U.a), Q = l.a.div("PrivateSubredditDescription", U.a), Y = l.a.h3("PrivateSubredditName", U.a), J = l.a.a("Link", U.a), Z = l.a.wrapped(T.n, "LinkRouterButton", U.a), X = l.a.wrapped(T.m, "LinkButton", U.a), $ = l.a.wrapped(T.q, "SecondaryLinkRouterButton", U.a), ee = l.a.wrapped(T.p, "SecondaryLinkButton", U.a), te = l.a.wrapped(Z, "GoHomeLinkButton", U.a), ne = l.a.wrapped(f.a, "CreateCommunityButton", U.a), re = l.a.img("Image", U.a), se = l.a.img("ImagePlaceholder", U.a), oe = l.a.wrapped(Z, "LeftLinkRouterButton", U.a), ie = l.a.wrapped(X, "LeftLinkButton", U.a), ae = l.a.wrapped(ee, "SecondaryLeftLinkButton", U.a), ce = l.a.wrapped($, "SecondaryLeftLinkRouterButton", U.a), de = l.a.h3("Title", U.a), le = l.a.div("PageBody", U.a), ue = l.a.div("InterstitialMessageWrapper", U.a), me = Object(d.c)({
				isLoggedIn: B.Q,
				origin: M.k,
				user: B.l,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(B.R)(e)) return !1;
					const t = Object(R.d)(e);
					if (!t) return !1;
					const n = Object(B.g)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const s = 30 * D.E;
					return r > Date.now() - s
				})(e),
				isSeo: M.h
			}), pe = Object(k.v)(), be = Object(i.b)(me, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.E(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.v(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.q)())
					}
				}
			}), fe = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: s,
					continueToGatedSubreddit: i,
					isLoggedIn: a,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: d,
					isSeo: l,
					location: p,
					origin: f,
					pageLayer: h,
					quarantineRequiresEmail: _,
					quarantineMessage: y,
					quarantineMessageHtml: O,
					quarantineMessageRTJson: E,
					interstitialWarningMessage: j,
					interstitialWarningMessageHtml: C,
					interstitialWarningMessageRTJson: I,
					setNSFWPreference: k,
					subredditDescription: T,
					subredditName: w,
					user: P
				} = e, L = async () => {
					if (a ? await k() : await Object(m.p)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(N.k, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case A.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(de, null, W._("r/{community name} is a Reddit Premium community", [W._param("community name", w)], {
							hk: "2lyDwB"
						})), o.a.createElement(K, null, W._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(G, null, P ? o.a.createElement(ae, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, W._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(ie, {
							href: Object(u.a)(p, f),
							redditStyle: !0
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), P ? o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(ee, {
							href: Object(u.a)(p, f),
							redditStyle: !0
						}, W._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case A.a.Nsfw:
					case A.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(de, null, n === A.a.Nsfw ? W._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : W._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(K, null, W._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(G, null, o.a.createElement(oe, {
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
					case A.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(H, null), o.a.createElement(de, null, "r/", w, " ", W._("is a private community", null, {
							hk: "7zZmq"
						})), T && T.length && o.a.createElement(z, null, o.a.createElement(Y, null, "r/", w), o.a.createElement(Q, null, o.a.createElement("div", null, T))), o.a.createElement(K, null, W._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", w, " ", W._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), W._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(G, null, P ? o.a.createElement(o.a.Fragment, null, !c && o.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: U.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), o.a.createElement(ae, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${w}`,
							redditStyle: !0
						}, W._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ae, {
							href: Object(u.a)(p, f),
							redditStyle: !0
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, W._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), w && o.a.createElement(x.a, {
							subredditName: w
						}));
					case A.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(de, null, W._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(K, null, W._("This community is {=quarantined}", [W._param("=quarantined", o.a.createElement(J, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, W._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(ue, null, E ? o.a.createElement(v.b, {
							content: E,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : O ? o.a.createElement(g.a, {
							html: O
						}) : y || W._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), W._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(G, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(G, null, o.a.createElement(ce, {
								to: "/",
								redditStyle: !0
							}, W._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(X, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, W._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(G, null, o.a.createElement(oe, {
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
						})(P, s, _)));
					case A.a.GatedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(de, null, W._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), o.a.createElement(K, null, o.a.createElement(ue, null, I ? o.a.createElement(v.b, {
							content: I,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : C ? o.a.createElement(g.a, {
							html: C
						}) : j), W._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), o.a.createElement(G, null, o.a.createElement(oe, {
							to: "/",
							redditStyle: !0
						}, W._("No Thank You", null, {
							hk: "4B26AR"
						})), o.a.createElement(ee, {
							onClick: i,
							redditStyle: !0
						}, W._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case A.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(de, null, W._("r/{community name} has been banned from Reddit", [W._param("community name", w)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(K, null, e ? o.a.createElement(S, {
							linkClassName: U.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : W._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(G, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case A.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(G, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case A.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(se, null), o.a.createElement(de, null, W._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(K, null, W._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(G, null, P && o.a.createElement(ne, {
							eventSource: "content_gate"
						}), o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case A.a.ProfileDoesNotExist:
					case A.a.ProfileDeleted:
					case A.a.ProfileSuspended:
					case A.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case A.a.ProfileBlockedForLegalReason:
									return W._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case A.a.ProfileDeleted:
									return W._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case A.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, W._("This account has been {=suspended} .", [W._param("=suspended", o.a.createElement(J, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, W._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case A.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(de, null, W._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(K, null, W._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(G, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case A.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, W._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(G, null, o.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case A.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(re, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(G, null, o.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, W._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = pe(be(Object(a.i)(e => {
				const t = Object(s.useContext)(c.a) ? q : V;
				return o.a.createElement(t, null, o.a.createElement("div", {
					"data-testid": "content-gate"
				}, o.a.createElement(le, null, fe(e))), o.a.createElement(h.b, null))
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
				i = n("./src/reddit/components/ContentSurvey/index.m.less"),
				a = n.n(i),
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
				const [i, p] = Object(r.useState)(!1), b = Object(d.a)();
				return Object(r.useEffect)(() => b(Object(c.h)()), [b]), s.a.createElement("div", {
					className: a.a.feedBanner,
					onClick: function() {
						p(!0), b(Object(c.g)())
					}
				}, s.a.createElement("div", {
					className: a.a.notepadSnoo
				}, s.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
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
				}), i && s.a.createElement(u.a, {
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
					importAsync: () => Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
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
				i = Object(s.a)(o);
			t.a = i
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
				i = n("./node_modules/react-redux/es/index.js"),
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
				v = n("./src/lib/lessComponent.tsx");
			const x = "create-community-button",
				_ = v.a.wrapped(l.c, "StyledTooltip", g.a),
				y = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(f.qb)(e),
					userIsSuspended: f.Y
				});
			t.a = Object(i.b)(y, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(n)), e(Object(c.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: x
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: s,
					onHideTooltip: i,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: u
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						u && u(e), a(c)
					},
					onMouseEnter: s,
					onMouseLeave: i,
					priority: p.c.Secondary,
					id: x,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: x,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(_, {
					caretOnTop: !0,
					tooltipId: x,
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
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
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
				v = n("./src/reddit/components/CreatePostBanner/index.m.less"),
				x = n.n(v);
			const _ = Object(i.b)(null, e => ({
				showToast: () => {
					e(Object(a.f)({
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
					return this.state.visible ? o.a.createElement("div", {
						className: x.a.banner
					}, o.a.createElement("button", {
						className: x.a.closeContainer,
						onClick: this.closeBanner
					}, o.a.createElement(h.a, {
						className: x.a.close
					})), o.a.createElement(f.a, {
						className: x.a.postIcon
					}), o.a.createElement("div", {
						className: x.a.heading
					}, r.fbt._("Create the ideal {subredditDisplayText} post", [r.fbt._param("subredditDisplayText", ` ${e.displayText} `)], {
						hk: "3ZioIj"
					})), o.a.createElement("div", {
						className: x.a.text
					}, r.fbt._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), o.a.createElement("br", null), r.fbt._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), o.a.createElement("div", {
						className: x.a.buttonWrapper
					}, o.a.createElement(l.m, {
						className: x.a.button,
						target: "_blank",
						href: `/${e.displayText}/submit`,
						onClick: this.createPost
					}, r.fbt._("Create Post", null, {
						hk: "sSUAI"
					})))) : null
				}
			}
			t.a = _(Object(c.c)(y))
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
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				a = n.n(i);
			class c extends s.a.Component {
				render() {
					return s.a.createElement("div", {
						className: Object(o.a)(a.a.heroContainer, this.props.className)
					}, s.a.createElement("div", {
						className: Object(o.a)(a.a.header, this.props.headerClassName)
					}, this.props.header), s.a.createElement("div", {
						className: Object(o.a)(this.props.hidePadding ? a.a.bodyHidePadding : a.a.body, this.props.bodyClassName)
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
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
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
					className: Object(o.a)(d.a.container, t)
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
				o = n("./src/config.ts");
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js"), a = `\n  ${o.a.assetPath}/img/econ/predictions/waiting.png,\n  ${o.a.assetPath}/img/econ/predictions/waiting@2x.png 2x,\n  ${o.a.assetPath}/img/econ/predictions/waiting@3x.png 3x,\n`;
			t.a = e => s.a.createElement("img", {
				className: e.className,
				srcSet: a,
				src: `${o.a.assetPath}/img/econ/predictions/waiting@2x.png 2x`,
				alt: i._("Snoos gazing into a crystal ball", null, {
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
				i = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("span", {
					className: Object(i.a)(d.a.statusBadge, t, {
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				c = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const d = e => {
				let {
					tournamentId: t,
					className: n
				} = e;
				const s = Object(i.e)(e => Object(c.a)(e, t));
				return s && s.tokenIconUrl ? o.a.createElement("img", {
					className: n,
					alt: r.fbt._("Tournament token", null, {
						hk: "3cgDZy"
					}),
					src: s.tokenIconUrl
				}) : o.a.createElement(a.a, {
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
				i = n("./src/reddit/selectors/experiments/econ/index.ts");
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
					return Object(o.e)(i.h) ? s.a.createElement(d, {
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/economics/predictions/index.ts"),
				a = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(o.d)(),
					n = Object(o.e)(t => Object(c.Y)(t, {
						subredditId: e
					})),
					r = Object(o.e)(t => Object(a.i)(t, {
						subredditId: e
					})),
					d = Object(o.e)(t => Object(a.k)(t, {
						subredditId: e
					})),
					l = s.a.useCallback(() => {
						n.name && t(Object(i.l)(n.name))
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
				i = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
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
					className: Object(o.a)(c.a.predictionLeaderboardList, t)
				}, (null == a ? void 0 : a.length) ? a.map(e => {
					let {
						rank: t,
						redditor: o,
						redditorInfo: a,
						score: d
					} = e;
					var l;
					return o || a ? s.a.createElement("div", {
						key: `prediction-leaderboard-${a.id}`,
						className: c.a.topPredictor
					}, s.a.createElement(i.a, {
						isCurrentUser: (null === (l = null == n ? void 0 : n.redditor) || void 0 === l ? void 0 : l.name) === a.displayName,
						rank: t,
						redditor: o,
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
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

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = Object(i.a)(e => {
				let {
					onClose: t,
					leaderboard: n,
					tournamentId: i,
					tokenIcon: h,
					isPreviousEvent: v = !1,
					isQueried: _ = !1
				} = e;
				const y = Object(m.a)(),
					O = Object(u.a)(),
					{
						currentRank: E,
						topPredictorsRank: j
					} = n,
					C = Object(o.e)(e => i ? Object(p.a)(e, i) : null),
					I = Object(o.e)(e => Object(a.s)(e, {
						pageLayer: O
					}));
				Object(r.useEffect)(() => {
					y(i ? Object(l.g)(i, v, _) : Object(l.e)())
				}, []);
				const S = E && E.rank > 0;
				return s.a.createElement("div", {
					className: g.a.container
				}, s.a.createElement("div", {
					className: g.a.header
				}, s.a.createElement(c.t, {
					className: g.a.closeButton,
					Icon: Object(d.b)("close"),
					priority: c.c.Plain,
					onClick: t
				}), s.a.createElement("h1", null, i ? x._("Tournament Leaderboard", null, {
					hk: "2ZYGPJ"
				}) : x._("All Time Top Predictors", null, {
					hk: "2OsQLm"
				})), s.a.createElement("h2", {
					className: g.a.subHeader
				}, C ? C.name : null == I ? void 0 : I.displayText)), s.a.createElement("div", {
					className: g.a.listContainer
				}, s.a.createElement(b.a, {
					currentRank: E,
					topPredictorsRank: j,
					tokenIcon: h
				}), S && s.a.createElement("div", {
					className: g.a.spacer
				}, " ")), E && E.redditorInfo && S && s.a.createElement(f.a, {
					className: g.a.currentRank,
					isCurrentUser: !0,
					rank: E.rank,
					redditor: E.redditor,
					redditorInfo: E.redditorInfo,
					score: E.score,
					tokenIcon: h
				}))
			}), y = e => s.a.createElement(_, v({
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
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/index.ts"),
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
				const v = Object(u.a)(),
					{
						icon: x,
						name: _,
						profile: y
					} = m || {},
					O = null != _ ? _ : f.displayName;
				return s.a.createElement("div", {
					className: Object(o.a)(p.a.predictor, t)
				}, s.a.createElement("div", {
					className: p.a.rank
				}, r), s.a.createElement(d.default, {
					className: p.a.userLink,
					onClick: () => v(Object(l.g)({
						targetUserId: f.id
					})),
					to: `/user/${O}`,
					disabled: f.displayName === i.I || f.displayName === i.Qb
				}, s.a.createElement("div", {
					className: p.a.leaderboardIcon
				}, s.a.createElement(c.a, {
					className: Object(o.a)(p.a.userIcon, p.a.avatar),
					iconUrl: null == x ? void 0 : x.url,
					isNSFW: !!(null == y ? void 0 : y.isNsfw),
					userName: null != O ? O : ""
				}), s.a.createElement(a.a, {
					className: p.a.rankBadge,
					rank: r
				})), s.a.createElement("div", {
					className: p.a.name
				}, s.a.createElement("div", {
					className: p.a.userName
				}, O), n && s.a.createElement("div", {
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
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
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
					return r ? i.a.createElement("img", {
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
				return _
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
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
				v = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less"),
				x = n.n(v);
			const _ = e => {
				let {
					className: t,
					subredditId: n,
					tournamentId: s
				} = e;
				var v;
				const _ = Object(b.a)(),
					y = Object(l.gb)(),
					O = "true" === (null == y ? void 0 : y.queryParams["top-predictors"]),
					[E, j, C] = Object(p.a)(O),
					{
						leaderboard: I,
						error: S
					} = Object(c.a)(n, s),
					N = s ? o.a.createElement(a.a, {
						tournamentId: s
					}) : o.a.createElement(f.a, null);
				if (o.a.useEffect(() => {
						I && _(s ? Object(m.h)(s) : Object(m.f)())
					}, [I, s]), !(null === (v = null == I ? void 0 : I.topPredictorsRank) || void 0 === v ? void 0 : v.length) || S) return null;
				const {
					currentRank: k,
					topPredictorsRank: T
				} = I, w = Boolean(s) ? r.fbt._("Tournament leaderboard", null, {
					hk: "1WFLrI"
				}) : r.fbt._("Top Predictors", null, {
					hk: "3HCYxQ"
				});
				return o.a.createElement(d.a, {
					className: Object(i.a)(x.a.themedWidget, t),
					contentOnly: !0
				}, o.a.createElement("h2", {
					className: x.a.header
				}, w), o.a.createElement(h.a, {
					className: x.a.list,
					currentRank: k,
					topPredictorsRank: T.slice(0, 4),
					tokenIcon: N
				}), o.a.createElement("div", {
					className: x.a.openModalButtonContainer
				}, o.a.createElement(u.a, {
					className: x.a.openModalButton,
					isFullWidth: !0,
					priority: u.c.Primary,
					onClick: () => {
						s && _(Object(m.c)()), j()
					}
				}, r.fbt._("See All", null, {
					hk: "1Ozf02"
				}))), E && o.a.createElement(g.a, {
					className: x.a.modal,
					leaderboard: I,
					tournamentId: s,
					tokenIcon: N,
					onClose: C
				}))
			};
			t.default = _
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/predictions/index.ts"),
				i = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts");

			function a(e, t) {
				const n = Object(s.d)(),
					a = Object(s.e)(n => t ? Object(i.h)(n, {
						tournamentId: t
					}) : Object(i.d)(n, {
						subredditId: e
					})),
					c = Object(s.e)(t => Object(i.c)(t, {
						subredditId: e
					})),
					d = Object(s.e)(t => Object(i.b)(t, {
						subredditId: e
					})),
					l = Object(s.e)(t => Object(i.a)(t, {
						subredditId: e
					}));
				return Object(r.useEffect)(() => {
					d || c || l || n(Object(o.k)(e))
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
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
				const i = Object(o.d)(),
					{
						leaderboard: p,
						error: f
					} = function(e, t) {
						const n = Object(o.d)(),
							s = Object(o.e)(e => Object(u.h)(e, {
								tournamentId: t
							})),
							i = Object(o.e)(e => Object(u.g)(e, {
								tournamentId: t
							})),
							a = Object(o.e)(e => Object(u.f)(e, {
								tournamentId: t
							})),
							c = Object(o.e)(e => Object(u.e)(e, {
								tournamentId: t
							}));
						return Object(r.useEffect)(() => {
							s || a || i || c || n(Object(l.o)(e, t))
						}, [s, i, a, c, e, t, n]), {
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
						e.delete("prediction-tournament-rank"), i(Object(c.b)(Object(a.c)({
							pathname: location.pathname,
							search: e.toString()
						})))
					},
					isQueried: !0
				})
			};
			var h = n("./src/reddit/components/PostList/index.tsx"),
				g = n("./src/reddit/connectors/PostList/index.ts"),
				v = n("./src/reddit/constants/postLayout.ts"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/helpers/predictions/index.ts"),
				y = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/config.ts"),
				j = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/reddit/components/Econ/Prediction/Confetti/index.tsx"),
				I = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				S = n("./src/reddit/models/Prediction/index.ts"),
				N = n("./src/reddit/selectors/poll/index.ts"),
				k = n("./src/redditGQL/types.ts"),
				T = n("./src/reddit/components/Econ/PredictionsPostList/TournamentBanner/index.m.less"),
				w = n.n(T);
			const P = e => {
					let {
						subredditId: t
					} = e;
					const n = Object(o.e)(e => Object(y.f)(e, {
							subredditId: t
						})),
						r = Object(o.e)(e => n ? Object(N.h)(e, n.tournamentId) : []);
					if (!n) return null;
					if (n.status === k.K.Closed) return s.a.createElement(D, null);
					const i = r.filter(e => e.predictionStatus === S.b.Open && e.endsAt > Date.now()),
						a = i.length > 0,
						c = i.length && i.some(e => !e.userSelection);
					return a && !c ? s.a.createElement(A, null) : a ? null : s.a.createElement(L, null)
				},
				L = () => s.a.createElement("section", {
					className: w.a.container
				}, s.a.createElement("div", {
					className: w.a.image,
					style: {
						backgroundImage: `url(${E.a.assetPath}/img/econ/predictions/closet.png)`
					}
				}), s.a.createElement("div", null, s.a.createElement("h3", {
					className: w.a.title
				}, j.fbt._("There's nothing to predict right now", null, {
					hk: "29BSNR"
				})), s.a.createElement("p", {
					className: w.a.subhead
				}, j.fbt._("Mods can always add new questions, so check back later!", null, {
					hk: "1HtxKJ"
				})))),
				A = () => s.a.createElement("section", {
					className: w.a.container
				}, s.a.createElement(C.a, {
					className: w.a.confetti
				}), s.a.createElement(I.a, {
					className: w.a.image
				}), s.a.createElement("div", null, s.a.createElement("h3", {
					className: w.a.title
				}, j.fbt._("Your predictions are in!", null, {
					hk: "2hlZz4"
				})), s.a.createElement("p", {
					className: w.a.subhead
				}, j.fbt._("Mods can always add new questions, so check back later!", null, {
					hk: "48ISNI"
				})))),
				D = () => s.a.createElement("section", {
					className: w.a.container
				}, s.a.createElement("div", {
					className: w.a.image,
					style: {
						backgroundImage: `url(${E.a.assetPath}/img/econ/predictions/closet.png)`
					}
				}), s.a.createElement("div", null, s.a.createElement("h3", {
					className: w.a.title
				}, j.fbt._("No prediction tournaments are active right now", null, {
					hk: "4G1oCo"
				})), s.a.createElement("p", {
					className: w.a.subhead
				}, j.fbt._("Check back to see when a tournament is created.", null, {
					hk: "2ldkRW"
				}))));
			var R = n("./src/lib/classNames/index.ts"),
				B = n("./src/lib/prettyPrintNumber/index.ts"),
				M = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				F = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx"),
				U = n("./src/lib/constants/index.ts"),
				W = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx"),
				H = n("./src/reddit/components/UserIcon/index.tsx"),
				G = n("./src/reddit/controls/InternalLink/index.tsx"),
				V = n("./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/Leaderboard/index.m.less"),
				q = n.n(V);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), z = e => {
				let {
					className: t,
					ranks: n
				} = e;
				return s.a.createElement("div", {
					className: Object(R.a)(q.a.container, t)
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
					var o, i, a, c;
					return s.a.createElement(G.default, {
						key: n.id,
						className: q.a.user,
						to: `/user/${null==t?void 0:t.name}`,
						disabled: n.displayName === U.I || n.displayName === U.Qb
					}, s.a.createElement("div", {
						className: q.a.userAvatar
					}, s.a.createElement(H.a, {
						className: q.a.icon,
						iconUrl: null === (o = null == t ? void 0 : t.icon) || void 0 === o ? void 0 : o.url,
						isNSFW: Boolean(null === (i = null == t ? void 0 : t.profile) || void 0 === i ? void 0 : i.isNsfw),
						userName: null !== (a = null == t ? void 0 : t.name) && void 0 !== a ? a : ""
					}), s.a.createElement(W.a, {
						className: q.a.rankBadge,
						rank: r
					})), s.a.createElement("div", {
						className: q.a.userName
					}, null !== (c = null == t ? void 0 : t.name) && void 0 !== c ? c : n.displayName))
				})))
			};
			var Q = n("./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/index.m.less"),
				Y = n.n(Q);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = e => {
				let {
					subredditId: t
				} = e;
				var n, r;
				const i = Object(o.e)(e => Object(y.f)(e, {
						subredditId: t
					})),
					a = Object(o.e)(e => i && Object(u.h)(e, {
						tournamentId: i.tournamentId
					}));
				return i ? s.a.createElement("section", {
					className: Y.a.container,
					style: {
						backgroundImage: M.a[i.theme] || M.a.theme_1
					}
				}, s.a.createElement("div", {
					className: Y.a.tournamentInfo
				}, s.a.createElement("p", null, J._("Predictions Tournament", null, {
					hk: "2AxvmU"
				})), s.a.createElement("h1", {
					className: Object(R.a)(Y.a.tournamentTitle, {
						[Y.a.long]: i.name.length > 40
					})
				}, i.name, " ", s.a.createElement(F.a, {
					status: i.status
				}))), s.a.createElement("div", {
					className: Y.a.stats
				}, (null == a ? void 0 : a.topPredictorsRank) && a.topPredictorsRank.length >= 3 && s.a.createElement(z, {
					className: Y.a.stat,
					ranks: a.topPredictorsRank.slice(0, 3)
				}), s.a.createElement("div", {
					className: Object(R.a)(Y.a.stat, Y.a.simple)
				}, s.a.createElement("dt", null, i.totalParticipantsCount ? Object(B.b)(i.totalParticipantsCount) : "--"), s.a.createElement("dd", null, J._("Players", null, {
					hk: "1S5q3e"
				}))), s.a.createElement("div", {
					className: Object(R.a)(Y.a.stat, Y.a.simple)
				}, s.a.createElement("dt", null, i.totalPredictionsCount || "--"), s.a.createElement("dd", null, J._("Predictions", null, {
					hk: "3E8BVX"
				}))), s.a.createElement("div", {
					className: Object(R.a)(Y.a.stat, Y.a.simple)
				}, s.a.createElement("dt", {
					className: Object(R.a)({
						[Y.a.long]: Boolean((null === (n = null == a ? void 0 : a.currentRank) || void 0 === n ? void 0 : n.rank) && a.currentRank.rank >= 1e6)
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
				const t = Object(x.gb)(),
					n = null == t ? void 0 : t.queryParams["prediction-tournament-rank"],
					r = Object(o.e)(t => Object(O.I)(t, e.listingName)),
					{
						isFetched: a
					} = Object(i.a)(r),
					c = Object(o.e)(e => Object(y.l)(e, {
						subredditId: r
					})),
					d = s.a.useMemo(() => Object.values(c).sort(_.b).map(e => e.id), [Object.keys(c).length]);
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
					layout: v.g.Large
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
				i = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less"),
				d = n.n(c);
			const l = e => {
				let {
					steps: t,
					withModalStyles: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(a.a)(d.a.banner, {
						[d.a.withModalStyles]: n
					})
				}, i.a.createElement("div", {
					className: d.a.header
				}, i.a.createElement("h2", null, i.a.createElement("span", {
					className: d.a.subHeader
				}, s.fbt._("Predictions", null, {
					hk: "ACRaq"
				})), s.fbt._("How It Works", null, {
					hk: "3QW4EZ"
				})), i.a.createElement("img", {
					alt: s.fbt._("Snoos gathered around a dark ball", null, {
						hk: "2sN6dD"
					}),
					className: d.a.bannerImage,
					src: `${r.a.assetPath}/img/econ/predictions/predictor_snoos_small.png`
				})), i.a.createElement("div", {
					className: d.a.innerCircle
				}), i.a.createElement("div", {
					className: d.a.middleCircle
				}), i.a.createElement("div", {
					className: d.a.outerCircle
				})), i.a.createElement("div", {
					className: Object(a.a)(d.a.stepsWrapper, {
						[d.a.withModalStyles]: n
					})
				}, t.map((e, n) => {
					let {
						title: r,
						description: s
					} = e;
					return i.a.createElement("div", {
						key: r,
						className: d.a.step
					}, i.a.createElement("div", {
						className: Object(a.a)(d.a.stepCount, {
							[d.a.showConnectingLine]: n !== t.length - 1
						})
					}, i.a.createElement("span", {
						className: d.a.stepNumber
					}, n + 1)), i.a.createElement("div", null, i.a.createElement("h3", {
						className: d.a.stepTitle
					}, r), i.a.createElement("p", {
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
				i = n("./node_modules/react-redux/es/index.js"),
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
				var i, c, p, f;
				const {
					redditor: h,
					redditorInfo: g,
					rank: v,
					score: x
				} = n, _ = null !== (i = null == h ? void 0 : h.name) && void 0 !== i ? i : null == g ? void 0 : g.displayName;
				return s.a.createElement(m.default, {
					className: Object(a.a)(t, {
						[b.a.first]: 1 === v,
						[b.a.third]: 3 === v
					}),
					to: `/user/${_}`,
					disabled: (null == g ? void 0 : g.displayName) === d.I || (null == g ? void 0 : g.displayName) === d.Qb
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
					iconUrl: null === (p = null == h ? void 0 : h.icon) || void 0 === p ? void 0 : p.url,
					isNSFW: Boolean(null === (f = null == h ? void 0 : h.profile) || void 0 === f ? void 0 : f.isNsfw),
					userName: _
				})), s.a.createElement(l.a, {
					className: b.a.placeBadge,
					rank: v
				})), s.a.createElement("div", {
					className: b.a.winnerName
				}, _), s.a.createElement("div", {
					className: b.a.score
				}, s.a.cloneElement(r, {
					className: b.a.tokenIcon
				}), " ", x))
			};
			var h = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				g = n("./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts"),
				v = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				y = n("./src/reddit/hooks/useModalState.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				E = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				j = n("./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/index.m.less"),
				C = n.n(j);
			const I = e => {
				let {
					subredditId: t
				} = e;
				var n;
				const [d, l, u] = Object(y.a)(!1), m = Object(O.a)(), p = Object(i.e)(e => Object(E.f)(e, {
					subredditId: t
				})), {
					leaderboard: b,
					error: j
				} = Object(g.a)(t);
				if (Object(r.useEffect)(() => {
						b && m(Object(_.f)())
					}, [m, b]), j || !(null === (n = null == b ? void 0 : b.topPredictorsRank) || void 0 === n ? void 0 : n.length) || b.topPredictorsRank.length < 3 || !p) return null;
				const I = b.topPredictorsRank.slice(0, 3),
					S = s.a.createElement(c.a, {
						tournamentId: p.tournamentId
					});
				return s.a.createElement(v.a, {
					className: C.a.themedWidget,
					contentOnly: !0
				}, s.a.createElement("h2", {
					className: C.a.header
				}, o.fbt._("All time top predictors", null, {
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
				})), s.a.createElement(x.a, {
					priority: x.c.Primary,
					className: C.a.seeAllButton,
					onClick: () => {
						m(Object(_.b)()), l()
					},
					isFullWidth: !0
				}, o.fbt._("See all", null, {
					hk: "23jjqI"
				})), d && s.a.createElement(h.a, {
					leaderboard: b,
					tokenIcon: S,
					onClose: u
				}))
			};
			var S = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				N = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx"),
				k = n("./src/lib/prettyPrintNumber/index.ts"),
				T = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Stats/index.m.less"),
				w = n.n(T);
			const P = e => {
				let {
					tournament: t,
					userRank: n
				} = e;
				return s.a.createElement("dl", {
					className: w.a.statsList
				}, s.a.createElement("div", {
					className: w.a.stat
				}, s.a.createElement("dt", {
					className: w.a.statValue
				}, t.totalParticipantsCount ? Object(k.b)(t.totalParticipantsCount) : "--"), s.a.createElement("dd", {
					className: w.a.statDescription
				}, o.fbt._("Players", null, {
					hk: "QKnjj"
				}))), s.a.createElement("div", {
					className: w.a.stat
				}, s.a.createElement("dt", {
					className: w.a.statValue
				}, t.totalPredictionsCount || "--"), s.a.createElement("dd", {
					className: w.a.statDescription
				}, o.fbt._("Predictions", null, {
					hk: "2MJSk1"
				}))), s.a.createElement("div", {
					className: w.a.stat
				}, s.a.createElement("dt", {
					className: Object(a.a)(w.a.statValue, {
						[w.a.long]: Boolean((null == n ? void 0 : n.rank) && n.rank >= 1e6)
					})
				}, (null == n ? void 0 : n.rank) || "--"), s.a.createElement("dd", {
					className: w.a.statDescription
				}, o.fbt._("Your rank", null, {
					hk: "2aohc3"
				}))))
			};
			var L = n("./src/reddit/components/HumanDate/index.tsx"),
				A = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts"),
				D = n("./src/reddit/helpers/trackers/predictions.ts"),
				R = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Predictor/index.m.less"),
				B = n.n(R);
			const M = e => {
				let {
					className: t,
					userRank: n
				} = e;
				const r = Object(O.a)(),
					{
						rank: o,
						redditor: i,
						redditorInfo: c
					} = n,
					{
						icon: p,
						name: b,
						profile: f
					} = i || {},
					h = null != b ? b : c.displayName;
				return s.a.createElement("div", {
					className: Object(a.a)(B.a.predictor, t)
				}, s.a.createElement(l.a, {
					className: B.a.rank,
					rank: o
				}), s.a.createElement(m.default, {
					className: B.a.userLink,
					onClick: () => r(Object(D.g)({
						targetUserId: c.id
					})),
					to: `/user/${h}`,
					disabled: c.displayName === d.I || c.displayName === d.Qb
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
			var F = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/index.m.less"),
				U = n.n(F);
			const W = e => {
				let {
					tournamentId: t
				} = e;
				const [n, r, a] = Object(y.a)(!1), d = Object(i.e)(e => Object(E.a)(e, t)), l = Object(i.e)(e => Object(A.h)(e, {
					tournamentId: t
				})), u = Object(O.a)();
				if (!d || !l) return null;
				const m = l.topPredictorsRank.slice(0, 3);
				return s.a.createElement("section", null, s.a.createElement("div", {
					className: U.a.header,
					style: {
						backgroundImage: S.a[d.theme] || S.a.theme_1
					}
				}, s.a.createElement("h3", {
					className: U.a.tournamentTitle
				}, d.name, " ", s.a.createElement(N.a, {
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
				}, m.map(e => s.a.createElement(M, {
					key: e.redditorInfo.id,
					userRank: e
				}))), s.a.createElement(P, {
					tournament: d,
					userRank: l.currentRank
				})), s.a.createElement(x.a, {
					className: U.a.seeAllButton,
					onClick: () => {
						r(), u(Object(_.a)())
					},
					isFullWidth: !0
				}, o.fbt._("See all", null, {
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
				G = n.n(H);
			const V = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(O.a)(),
					r = Object(i.e)(e => Object(E.g)(e, {
						subredditId: t
					}).slice(1, 3).map(e => e.tournamentId));
				return s.a.useEffect(() => {
					r.length && n(Object(_.d)())
				}, [r]), r.length ? s.a.createElement(v.a, {
					className: G.a.themedWidget,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: G.a.content
				}, s.a.createElement("h2", {
					className: G.a.header
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
			const Q = [{
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
			var Y = () => {
					const e = Object(O.a)();
					Object(r.useEffect)(() => {
						e(Object(D.p)())
					}, [e]);
					return s.a.createElement(v.a, {
						className: z.a.widget,
						contentOnly: !0
					}, s.a.createElement(q.a, {
						steps: Q
					}), s.a.createElement("div", {
						className: z.a.learnMoreWrapper
					}, s.a.createElement(m.default, {
						to: "/predictions",
						onMouseDown: () => e(Object(D.f)())
					}, s.a.createElement(x.t, {
						className: z.a.learnMoreButton,
						isFullWidth: !0
					}, o.fbt._("Learn More", null, {
						hk: "4wy6Ra"
					})))))
				},
				J = (n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"), n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"));

			function Z(e) {
				let {
					subredditId: t
				} = e;
				const n = Object(i.e)(e => Object(E.f)(e, {
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
				}), s.a.createElement(Y, null), s.a.createElement(Z, {
					subredditId: t
				}), s.a.createElement(V, {
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
				getComponent: () => Promise.all([n.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), n.e("EconomicsSubredditPremiumSidebarCards")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(s.a)("spSpecialMemberships", o)
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, n) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
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
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
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
				v = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const x = g.a.wrapped(p.a, "BackgroundPlaceholder", f.a),
				_ = g.a.wrapped(m.n, "SubmitLink", f.a),
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
				O = e => {
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
								return r.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [r.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return r.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(n)), t && !Object(l.a)(t) && !!s && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: f.a.SecondaryText
					}, y(n)), a.a.createElement(_, {
						to: `/r/${t}/submit`
					}, r.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				E = () => a.a.createElement("div", {
					className: f.a.MainContent
				}, a.a.createElement("img", {
					className: f.a.SnooImg,
					src: `${c.a.assetPath}/img/snoo_discovery@1x.png`
				}), a.a.createElement("div", {
					className: f.a.PrimaryText
				}, r.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), a.a.createElement(_, {
					to: "/r/popular"
				}, r.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => a.a.createElement(a.a.Fragment, null, e.subreddit && a.a.createElement(v.a, {
				subredditId: e.subreddit.id,
				subredditSubscribers: e.subreddit.subscribers
			}), a.a.createElement("div", {
				"data-testid": "empty-subreddit",
				className: Object(h.a)(f.a.Component, f.a.EmptyHomepage)
			}, a.a.createElement(x, {
				isLoading: !1,
				layout: u.g.Classic
			}), a.a.createElement("div", {
				className: f.a.MainContentWrapper
			}, e.subreddit ? a.a.createElement(O, e) : a.a.createElement(E, null))))
		},
		"./src/reddit/components/EmptySubredditPostList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/constants/postLayout.ts"),
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
				const n = Object(o.e)(e => !!t && Object(u.k)(e, {
						subredditId: t
					})),
					r = Object(l.a)();
				return s.a.createElement("div", {
					className: Object(a.a)(p.a.component, p.a.emptyHomepage)
				}, s.a.createElement(f, {
					isLoading: n,
					layout: i.g.Classic
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

			function v(e) {
				let {
					isPredictionsPage: t,
					listingName: n,
					sort: r,
					subreddit: o
				} = e;
				return t ? s.a.createElement(h, {
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
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/FakeBannerAd/index.m.less"),
				d = n.n(c),
				l = n("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", d.a),
				m = l.a.wrapped(e => i.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", d.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class f extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = i.a.createRef(), this.state = {
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
					} = this.state, o = n ? i.a.createElement(m, {
						src: a.a.assetPath + t
					}) : i.a.createElement(s.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, i.a.createElement(m, {
						src: a.a.assetPath + t
					}));
					return i.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": r.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, i.a.createElement("a", {
						href: a.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, o))
				}
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, n) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return U
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "b", (function() {
				return q
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				o = n.n(s),
				i = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Emoji/index.m.less"),
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
			const g = p.a.wrapped(e => {
				let {
					backgroundImage: t,
					style: n,
					...r
				} = e;
				return c.a.createElement("div", h({
					style: {
						...n || {},
						backgroundImage: `url('${t}')`
					}
				}, r))
			}, "EmojiDisplay", f.a);
			var v = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				x = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				_ = n("./src/reddit/constants/colors.ts"),
				y = n("./src/reddit/constants/parameters.ts"),
				O = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				j = n("./src/reddit/icons/svgs/Close/index.tsx"),
				C = n("./src/reddit/models/Flair/index.ts"),
				I = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = n("./src/reddit/components/Flair/index.m.less"),
				N = n.n(S);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const T = Object(x.a)(v.b),
				w = p.a.div("FlairWrapper", N.a),
				P = p.a.wrapped(d.a, "CloseButton", N.a),
				L = p.a.wrapped(Object(m.a)(e => {
					let {
						forceSmallEmojis: t,
						theme: n,
						...r
					} = e;
					const s = n;
					return c.a.createElement(g, k({
						style: {
							...A(!!t, s) || {}
						}
					}, r))
				}), "FlairEmojiDisplay", N.a),
				A = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				D = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[y.z]: r,
						[y.C]: t ? "1" : ""
					})
				},
				R = e => e.isFlairFilter ? c.a.createElement(O.default, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(O.default, {
					onClick: () => e.onClick(e.searchableTerm),
					to: D(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class B extends c.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = c.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[N.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(I.a)(this.props).flair,
							color: `${U(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(P, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(j.a, {
						className: N.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(I.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(T, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(R, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const M = Object(m.a)(B),
				F = Object(m.a)(e => {
					let t = "",
						n = !1;
					const r = e.richtext.map((r, s) => {
						if (r.e === C.c.Emoji) {
							const o = r;
							return t += o.a, n = !0, c.a.createElement(L, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: o.u,
								key: s,
								title: o.a
							})
						} {
							const e = r;
							return t += e.t, c.a.createElement("span", {
								key: s
							}, e.t)
						}
					});
					let s;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (s = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const o = c.a.createElement(w, {
						className: Object(u.a)(e.className, {
							[N.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...s,
							backgroundColor: e.backgroundColor || Object(I.a)(e).flair,
							color: `${U(e)}`
						}
					}, r, e.isSelected && c.a.createElement(P, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(j.a, {
						className: N.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(I.a)(e).flair
						}
					})));
					return c.a.createElement(R, {
						flair: o,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				U = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(I.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(E.a)(Object(I.a)(e).post, _.a.black, _.a.white) : e.textColor === C.e.Dark ? _.a.black : _.a.white,
				W = p.a.wrapped(M, "TextFlair", N.a),
				H = p.a.wrapped(F, "RichTextFlair", N.a),
				G = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.i)(.1, Object(I.a)(o()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				V = p.a.wrapped(e => {
					const t = G(e),
						n = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(R, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", N.a);

			function q(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: s,
					isFlairFilter: o,
					isSelected: i,
					onClick: a,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: f
				} = e, h = Object(u.a)({
					[N.a.flairVariant]: o,
					[N.a.small]: o && !e.large,
					[N.a.large]: o && e.large
				}, t);
				switch (s.type) {
					case C.f.Richtext:
						return n || !s.richtext ? null : c.a.createElement(H, {
							backgroundColor: s.backgroundColor,
							className: h,
							forceSmallEmojis: b,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: s.richtext,
							subredditName: m,
							textColor: s.textColor,
							to: f
						});
					case C.f.Text:
						return n || !s.text ? null : c.a.createElement(W, {
							backgroundColor: s.backgroundColor,
							className: h,
							isFlairFilter: o,
							isSelected: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: f
						});
					case C.f.Meta:
						return c.a.createElement(W, {
							backgroundColor: s.backgroundColor,
							className: t,
							isFlairFilter: o,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: f
						});
					case C.f.Nsfw:
					case C.f.Spoiler:
						return c.a.createElement(V, {
							className: t,
							text: s.text,
							type: s.type
						});
					case C.f.Quarantined:
						return null;
					case C.f.Oc:
						return c.a.createElement(W, {
							backgroundColor: _.a.alienblue,
							text: s.text,
							textColor: C.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return s.text ? c.a.createElement(W, {
							backgroundColor: s.backgroundColor,
							className: h,
							isFlairFilter: o,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							redditStyle: !p,
							to: f
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.m.less": function(e, t, n) {
			e.exports = {
				flairVariantInList: "_1Dl-kvSxyJMWO9nuoTof8N"
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/noop.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/Flair/index.tsx"),
				l = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/FlairList/index.m.less"),
				b = n.n(p);
			const f = Object(c.c)({
					labelNSFW: m.bb
				}),
				h = Object(a.b)(f),
				g = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = h(e => {
				let {
					className: t,
					isFlairFilter: n,
					onClick: r,
					onMouseDown: o,
					disabled: a = !1,
					flair: c,
					labelNSFW: m,
					subredditName: p
				} = e;
				const f = !!c.find(e => e.type === u.f.Richtext),
					h = c.map(e => {
						if (e.type === u.f.Text && f) return null;
						if (!m && e.type === u.f.Nsfw) return null;
						const t = Object(l.j)(e),
							c = `/r/${p}/`,
							h = o ? () => o(e) : s.a,
							v = n && (e.type === u.f.Richtext || e.type === u.f.Text);
						return i.a.createElement(d.b, {
							className: v ? b.a.flairVariantInList : void 0,
							isFlairFilter: n,
							key: g(e),
							onClick: r,
							onMouseDown: h,
							disabled: a,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: p,
							to: Object(l.e)(c, t)
						})
					});
				return i.a.createElement("div", {
					className: t
				}, h)
			})
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/FlairList/index.tsx"),
				l = n("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				u = n("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/correlationIdTracker.ts"),
				b = n("./src/reddit/helpers/trackers/postFlair.ts"),
				f = n("./src/reddit/models/Flair/index.ts"),
				h = n("./src/reddit/selectors/postFlair.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/components/FlairWrapper/index.m.less"),
				x = n.n(v);
			const _ = Object(i.b)(() => Object(a.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(m.r)(e, {
							pageLayer: n
						})
					},
					isPostFlairEnabled: (e, t) => Object(h.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					subredditName: (e, t) => {
						let {
							post: n
						} = t;
						return Object(g.Y)(e, {
							subredditId: n.belongsTo.id
						}).name
					}
				})),
				y = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: r.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: f.f.Oc
					}), e.isMeta && t.push({
						text: r.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: f.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = _(e => {
				let {
					className: t,
					disableFlair: n,
					flairPosition: r,
					isFlairFilter: s,
					isPostFlairEnabled: i,
					nowrap: a,
					post: m,
					sendEvent: h,
					subredditName: g,
					titleFlair: v
				} = e;
				const _ = Object(u.a)(),
					O = r === f.b.Left,
					E = v || y(m),
					{
						leftFlair: j,
						rightFlair: C
					} = Object(l.a)({
						flair: E,
						isFlairPositionedLeft: O
					}),
					I = a ? x.a.flairNoWrap : j.length > 0 || C.length > 0 ? x.a.flairWrapper : null,
					S = e => {
						const t = {
							id: m.belongsTo.id,
							eventType: m.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(p.d)(p.a.SearchResults), h && h(Object(b.a)(m.id, t))
					},
					N = e => {
						Object(p.d)(p.a.SearchResults), h && h(Object(b.e)(e, m.id))
					},
					k = !(n || !E || !E.length);
				return k ? o.a.createElement("div", {
					className: Object(c.a)(I, t),
					"data-ignore-click": _
				}, k && j && o.a.createElement(d.a, {
					className: x.a.flairList,
					isFlairFilter: s,
					key: "leftFlair",
					onClick: S,
					onMouseDown: N,
					flair: j,
					disabled: !i,
					subredditName: g
				}), k && o.a.createElement(d.a, {
					className: x.a.flairList,
					isFlairFilter: s,
					key: "rightFlair",
					onClick: S,
					onMouseDown: N,
					flair: C,
					disabled: !i,
					subredditName: g
				})) : null
			})
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
				i = n("./src/lib/classNames/index.ts"),
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
				className: Object(i.a)(d.a.FooterContainer, {
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
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(i.c)({
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
				i = n("./src/lib/classNames/index.ts"),
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
				v = c.a.div("PositionedImage", f.a),
				x = c.a.div("HeaderContent", f.a),
				_ = c.a.div("HeaderContainer", f.a),
				y = c.a.span("HeaderText", f.a),
				O = c.a.wrapped(o.a, "HeaderUrl", f.a),
				E = c.a.span("Container", f.a),
				j = Object(a.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						n = Object(l.a)(e),
						r = Object(p.a)(e).banner.positionedImageAlignment,
						o = Object(p.a)(e).banner.positionedImage,
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
					const u = !!o && !!a && "left" === r,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						j = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						C = `${4+j}px`;
					return s.a.createElement(E, {
						style: {
							background: b,
							filter: e.shouldBlurHeaderImage ? "blur(6px)" : "none",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, s.a.createElement(O, {
						className: e.className,
						to: e.url
					}, s.a.createElement(_, {
						className: Object(i.a)({
							[f.a.fullScreenDisabled]: !e.disableFullscreen,
							[f.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||d.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && s.a.createElement(x, {
						className: Object(i.a)({
							[f.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (n ? s.a.createElement(g, {
						style: {
							backgroundImage: `url(${n})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: C,
							width: C
						}
					}) : s.a.createElement(h, {
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
					}, t)), s.a.createElement(v, {
						className: Object(i.a)(f.a.PositionedImage, {
							[f.a.positionedImage]: !!o,
							[f.a.hoverPositionedImage]: !!o && !!a
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/header.ts"),
				u = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/search.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/tooltip.ts");
			const f = r.a.hotPotatoUrl,
				h = new URL(`${f}/embed`),
				g = ["fullscreen", "edit", "cx", "cy", "px", "ts"],
				v = () => {
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
						n.has(r) && s && t && h.searchParams.set(r, t)
					}
					return {
						iframeURL: h.toString(),
						isFullscreen: h.searchParams.has("fullscreen") || h.searchParams.has("edit")
					}
				},
				x = r.a.hotPotatoUrl;
			var _, y;
			! function(e) {
				e.RefreshAuth = "refreshAuth", e.Close = "close", e.SignIn = "signIn", e.SyncCoordinates = "syncCoordinates", e.OpenProfile = "openProfile"
			}(_ || (_ = {})),
			function(e) {
				e.SetFullScreen = "setFullScreen", e.InjectAuthHeaders = "injectAuthHeaders", e.InjectTelemetryDefaults = "injectTelemetryDefaults"
			}(y || (y = {}));
			var O = class {
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
							t === x && (n.type === _.RefreshAuth ? this.sendMessageAuthAndTelemetry() : n.type === _.Close ? this.onMessageClose() : n.type === _.SignIn && n.dest ? this.onMessageSignIn(n.dest) : n.type === _.SyncCoordinates && n.data ? this.onMessageSyncCoordinates(n.data) : n.type === _.OpenProfile && n.data && this.onMessageOpenProfile(n.data))
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
						null === (n = null === (t = this.ref.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === n || n.postMessage(e, x)
					}
				},
				E = n("./src/reddit/components/TrackingHelper/index.tsx"),
				j = n("./src/reddit/constants/keycodes.ts"),
				C = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				I = n("./src/reddit/helpers/trackers/hotPotato.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				N = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/telemetry.ts")),
				k = n("./src/telemetry/models/Event.ts");
			const T = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				return Object.keys(e).reduce((n, r) => {
					const s = e[r];
					return s ? (n[r] = "object" == typeof s && t <= 4 ? T(s, t + 1) : s, n) : n
				}, {})
			};
			var w = n("./src/reddit/selectors/platform.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/components/HotPotatoEmbed/index.m.less"),
				A = n.n(L);
			const {
				fbt: D
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = Object(c.c)({
				session: e => e.user.session,
				telemetryDefaults: e => {
					const t = {
							...Object(N.o)(e),
							...{
								action: k.d.Load,
								source: k.f.Experiment,
								noun: k.e.UserId
							}
						},
						{
							action: n,
							source: r,
							noun: s,
							...o
						} = Object(k.g)(t);
					return T(o)
				},
				isTooltipOpened: e => Boolean(e.tooltip.tooltipId),
				isSearchDropdownOpened: e => e.search.isDropdownOpen,
				isHeaderDropdownOpened: e => e.header.isSubscriptionsDropdownOpen,
				isLoggedIn: P.R,
				queryParams: e => Object(w.r)(e)
			}), B = Object(i.b)(R, e => ({
				closeSearchDropdown: () => e(Object(m.l)()),
				closeHeaderDropdown: () => e(Object(l.f)()),
				closeTooltipModal: () => e(Object(b.j)()),
				openLoginModal: () => e(Object(u.openLoginModal)()),
				openProfilePage: t => e(Object(a.b)(`/user/${t}`)),
				openErrorToast: () => e(Object(p.f)({
					duration: p.a,
					kind: S.b.Error,
					text: D._("Something wen't wrong. Please try again later.", null, {
						hk: "4vD48K"
					})
				}))
			}));
			class M extends o.a.Component {
				constructor(e) {
					var t;
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
						e && t ? this.closeAnyRedditModal() : this.state.isFullscreen || (this.toggleFullScreen(!0), this.props.sendEvent(Object(I.b)()))
					}, this.messenger = new O(this.iframeRef, this.getAuthClientData, this.onMessageClose, this.onMessageSignIn, this.onMessageSyncCoordinates, this.onMessageOpenProfile);
					const {
						iframeURL: n
					} = v();
					this.state = {
						iframeURL: n,
						isFullscreen: !!(null === (t = this.props.queryParams) || void 0 === t ? void 0 : t.fullscreen),
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
						className: Object(d.a)(A.a.container, {
							[A.a.expanded]: t
						})
					}, n && o.a.createElement("iframe", {
						ref: this.iframeRef,
						onLoad: this.onLoad,
						onError: this.onError,
						className: A.a.iframe,
						allow: "web-share; clipboard-read; clipboard-write",
						src: n
					}), !e && o.a.createElement("img", {
						className: A.a.hotPotatoIcon,
						src: `${r.a.assetPath}/img/hot-potato-loader.gif`
					}), e && (!t || s) && o.a.createElement("div", {
						className: A.a.overlay,
						onClick: this.onOverlayClick
					}))
				}
			}
			t.a = Object(E.c)(B(M))
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(r.a)({
				ErrorComponent: o,
				getComponent: () => Object(s.a)(() => n.e("SubredditHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/HumanDate/HumanDate.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/humanizeDate/index.ts"),
				i = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...n
				} = e;
				var r;
				const a = Object(i.a)(),
					c = {
						...n,
						locale: null !== (r = n.locale) && void 0 !== r ? r : a
					};
				return s.a.createElement(s.a.Fragment, null, Object(o.a)(t, c))
			}
		},
		"./src/reddit/components/HumanDate/HumanDateTime.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				i = n("./src/lib/constants/index.ts");
			var a = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					locale: n
				} = e;
				const r = Object(a.a)(),
					c = null != n ? n : r;
				return s.a.createElement(s.a.Fragment, null, function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.DEFAULT_LOCALE;
					const n = e * i.Xb;
					return new Date(n).toLocaleString(t, {
						weekday: "short",
						month: "short",
						year: "numeric",
						day: "2-digit",
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
						timeZoneName: "long"
					})
				}(t, c))
			}
		},
		"./src/reddit/components/HumanDate/TimeAgo.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/timeAgo/index.ts"),
				i = n("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...n
				} = e;
				var r;
				const a = Object(i.a)(),
					c = {
						...n,
						locale: null !== (r = n.locale) && void 0 !== r ? r : a
					};
				return s.a.createElement(s.a.Fragment, null, Object(o.d)(t, c))
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r.a
			})), n.d(t, "a", (function() {
				return s.a
			})), n.d(t, "b", (function() {
				return o.a
			})), n.d(t, "c", (function() {
				return f
			}));
			var r = n("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				s = n("./src/reddit/components/HumanDate/HumanDate.tsx"),
				o = n("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				d = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/eventTools/index.ts");

			function m(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function p(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.DEFAULT_LOCALE;
				const s = Object(u.e)(e, t),
					o = new Date(e * l.Xb);
				let i;
				if (s === u.a.Live || n) return d.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === u.a.Future ? i = Object(u.d)(e) ? d.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(u.b)(e) >= 5 ? m(o, r) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, r) : s === u.a.Past && (i = Object(u.d)(e) ? d.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : m(o, r)), `${i} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,r)}`
			}
			var b = n("./src/reddit/hooks/useLocale.ts");
			var f = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: r,
					locale: s
				} = e;
				const o = Object(b.a)(),
					i = null != s ? s : o;
				return a.a.createElement(a.a.Fragment, null, p(t, n, r, i))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
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
				o = n("./src/lib/pubsub/index.ts"),
				i = n("./src/reddit/constants/listings.ts"),
				a = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === i.b.Popular,
				d = e => e && e.toLowerCase() === i.b.All,
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
					let t, n, o, a, m, {
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
					let v, x;
					return l(p) ? (t = `${s.a.assetPath}/img/id-cards/home-banner@2x.png`, o = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = i.c[i.b.Home], n = r.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), a = r.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(p) ? (t = `${s.a.assetPath}/img/id-cards/banner@2x.png`, n = r.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), o = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/all", m = i.c[i.b.All]) : c(p) ? (t = `${s.a.assetPath}/img/id-cards/banner@2x.png`, n = r.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), o = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/popular", m = i.c[i.b.Popular]) : p && (n = f && f.description, o = u(""), a = b.displayText, m = b.url, x = f && f.subscribersCount, v = f && f.currentlyViewingCount), {
						snooBackground: o,
						description: n,
						titleText: a,
						url: m,
						subscribersCount: x,
						subscribersText: h,
						currentlyViewingText: g,
						currentlyViewingCount: v,
						...t ? {
							bannerBackgroundImage: t
						} : {}
					}
				},
				p = new o.a,
				b = "VISIBLE",
				f = "NOT_VISIBLE",
				h = e => p.publish(e ? b : f)
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
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
			const i = e => new Promise((t, n) => {
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
				return i(t).then(() => {
					d.current && (d.current.src = t)
				}).catch(() => {
					d.current && (d.current.src = a)
				}), s.a.createElement("img", o({
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
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", a.a),
				l = c.a.div("TextWrapper", a.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: r,
					subtitle: i,
					title: c,
					textWrapperClassName: u
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(t, a.a.wrapper),
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
				}, c), i && s.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/constants/colors.ts"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				u = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				f = n.n(b);
			const h = o.a.createElement(u.a, {
					className: f.a.icon
				}),
				g = Object(a.c)({
					subreddit: m.C,
					subredditAboutInfo: m.z
				}),
				v = Object(i.b)(g);
			t.a = v(e => {
				const {
					subreddit: t,
					subredditAboutInfo: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const s = n && n.quarantineMessageHtml,
					i = n && n.quarantineMessage || r.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return o.a.createElement(p.a, {
					className: f.a.container,
					color: d.a.quarantine,
					icon: h,
					subtitle: o.a.createElement("span", null, r.fbt._("This community is {=quarantined}", [r.fbt._param("=quarantined", o.a.createElement("a", {
						className: f.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", s ? o.a.createElement(c.a, {
						className: f.a.rawHtmlDisplay,
						html: s
					}) : i, " ", o.a.createElement(l.default, {
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
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
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
			const b = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				h = e => s.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				g = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				v = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(d.b)(n)(e)
					}
				}),
				x = Object(c.a)(g, [a.a.Click, a.a.Keydown]),
				_ = Object(c.a)(h, [a.a.Click, a.a.Keydown]),
				y = Object(o.b)(v);
			t.c = y(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(x, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(_, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "i", (function() {
				return N
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/lodash/isNil.js"),
				c = n.n(a),
				d = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(i.c)({
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
				f = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const n = Object(f.b)(e, t),
					r = Object(h.N)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var v = Object(o.b)(() => Object(i.a)(g, b.j, (e, t) => ({
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
			const x = (e, t) => {
				const n = Object(f.b)(e, t),
					r = Object(h.N)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var _ = Object(o.b)(() => Object(i.a)(x, e => e))(e => s.a.createElement(p, {
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
			var y = Object(o.b)(() => Object(i.c)({
					subreddit: h.Y
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
				O = n("./src/reddit/hooks/usePostContext.ts");
			var E = e => {
				const t = Object(O.a)(),
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
				const t = Object(O.a)(),
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
				const t = Object(O.a)(),
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
			var I = Object(o.b)(() => Object(i.c)({
				subreddit: h.Y
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
			var S = Object(o.b)(() => Object(i.c)({
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
			var N = Object(o.b)(() => Object(i.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(h.Y)(e, {
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
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/componentSizes.ts"),
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
			const f = a.f + 10,
				h = o.a.memo(() => {
					const [e, t] = Object(s.useState)("-500px"), n = Object(s.useContext)(c.a);
					return o.a.createElement(m.Consumer, null, s => s && o.a.createElement("div", {
						className: Object(i.a)(u.a.wrapper, {
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
							s.focus(), s.scrollIntoView(), window.scrollBy(0, -f)
						}
					}, r.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(i.a)(u.a.rightBorder, {
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
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lottie-web/build/player/lottie.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/reddit/components/LottieAnimation/util.ts");
			const c = i.a.memo(e => {
				const t = i.a.createRef(),
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
					[b, f] = Object(o.useState)(n);
				Object(o.useEffect)(() => {
					r ? Object(a.a)(r).then(f) : n && f(n)
				}, [r, n]);
				const [h, g] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
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
				}, [l, t, h, b]), Object(o.useEffect)(() => {
					if (h)
						if (d) h.stop();
						else if (p) {
						const e = h.getDuration(!0);
						h.goToAndPlay(e, !0)
					} else h.goToAndPlay(0)
				}, [d, p, h]);
				const v = Object(o.useCallback)(() => {
					h && h.goToAndPlay(0)
				}, [h]);
				return i.a.createElement("div", {
					className: c,
					style: {
						display: d ? "none" : "block"
					},
					ref: t,
					onClick: m || v
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
				return v
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "t", (function() {
				return N
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "c", (function() {
				return L
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
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
				v = s.a.div("ModalDescriptionText", u.a),
				x = s.a.div("ModalMetaText", u.a),
				_ = s.a.label("ModalFormItem", u.a),
				y = s.a.wrapped(c.a, "ModalInput", u.a),
				O = s.a.label("ModalInputLabel", u.a),
				E = s.a.footer("ModalFooter", u.a),
				j = s.a.header("ModalHeader", u.a),
				C = s.a.div("ModalTitle", u.a),
				I = s.a.div("ModalAnnotation", u.a),
				S = s.a.div("ModalMain", u.a),
				N = s.a.textarea("TextArea", u.a),
				k = s.a.wrapped(a.l, "WarningButton", u.a),
				T = s.a.wrapped(a.l, "PrimaryButton", u.a),
				w = s.a.wrapped(a.o, "CancelButton", u.a),
				P = s.a.wrapped(a.r, "RemoveButton", u.a),
				L = e => {
					let {
						className: t,
						...n
					} = e;
					return i.a.createElement(a.t, m({
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
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
				} = e, l = Object(r.useContext)(c.a), p = Object(o.e)(e => Object(d.a)(e) || Object(d.c)(e));
				return s.a.createElement("div", {
					className: Object(i.a)(u.a.wrapper, {
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
				return E
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/login.ts"),
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
				v = n("./src/lib/classNames/index.ts"),
				x = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				_ = n.n(x);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = e => {
				let {
					interests: t
				} = e;
				const n = Object(o.d)(),
					c = Object(d.b)(),
					x = Object(o.e)(g.i),
					O = x === l.nb.Feed ? t.topics.slice(0, 5) : t.topics,
					[E, j] = Object(r.useState)(!1),
					[C, I] = Object(r.useState)(),
					S = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
						e ? (I(e), c(Object(p.D)(null == e ? void 0 : e.topic, null == e ? void 0 : e.id))) : c(Object(p.B)()), n(Object(i.openD2xOnboardingModal)({
							type: h.d.REONBOARDING,
							selectedInterests: e ? {
								[e.id]: []
							} : {}
						})), Object(u.b)(h.f.Popover, x)
					},
					N = Object(r.useCallback)(() => {
						Object(m.a)(), c(Object(p.C)()), j(!0)
					}, [c]);
				return Object(m.b)() ? s.a.createElement("div", {
					className: Object(v.a)(_.a.InterestPickerPreview, {
						[_.a.Dismissed]: E
					})
				}, s.a.createElement("div", {
					className: _.a.InterestPickerPreviewTopBorder
				}), s.a.createElement("div", {
					className: _.a.InterestPickerPreviewHeader
				}, s.a.createElement("h3", {
					className: _.a.Title
				}, y._("What do you want to see more of?", null, {
					hk: "35GlAb"
				})), s.a.createElement("button", {
					"aria-label": y._("Dismiss", null, {
						hk: "2x5qvs"
					}),
					onClick: N
				}, s.a.createElement(b.a, {
					name: "close",
					className: _.a.DismissButton
				}))), s.a.createElement("ul", {
					className: _.a.InterestListButtons
				}, O.map((e, t) => {
					const n = e.topic;
					return s.a.createElement("li", {
						className: _.a.InterestListItem,
						key: e.id
					}, s.a.createElement(a.a, {
						colorIndex: t,
						isSelected: e === C,
						onClickHandler: () => S(e),
						topic: n
					}))
				})), s.a.createElement(f.a, {
					className: _.a.ChooseMore,
					onClick: () => S()
				}, y._("Choose more topics", null, {
					hk: "2bFeJ4"
				}), s.a.createElement(b.a, {
					className: _.a.CaretRight,
					name: "caret_right"
				}))) : null
			}, E = e => {
				let {
					children: t,
					desiredIdx: n,
					interests: r,
					sendEvent: o,
					variant: i
				} = e;
				return {
					child: {
						id: "interest-topic-recommendations",
						estHeight: 300,
						trackOnEnteredViewport: () => {
							Object(m.d)(), Object(u.b)(h.f.Feed, i), o(Object(p.E)())
						},
						render: () => s.a.createElement(O, {
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
				i = n("./src/lib/classNames/index.ts"),
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
				return s.a.createElement(o.t, {
					className: Object(i.a)(d.a.InterestButton, {
						[d.a.Selected]: n
					}),
					kind: o.b.Button,
					onClick: a,
					style: l(t, n, r)
				}, c)
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(o.a)(e, t);
				class r extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(n, c({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(r)
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
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
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
			t.a = Object(c.a)(Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: r,
					onClick: i,
					post: c,
					redditStyle: l,
					theme: p,
					overrideBackgroundColor: b,
					...f
				} = e;
				return s.a.createElement("div", m({
					className: Object(o.a)(u.a.backgroundWrapper, n),
					style: b || Object(a.c)(r, e),
					onClick: i,
					"data-adclicklocation": d.a.BACKGROUND
				}, f), t)
			}))
		},
		"./src/reddit/components/PostTitle/getLeftAndRightFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/models/Flair/index.ts");

			function o(e) {
				let {
					flair: t,
					isFlairPositionedLeft: n,
					showNSFWSpoilerFlairsOnly: o,
					hideNSFWSpoilerFlair: i
				} = e;
				const a = [],
					c = [],
					d = [];
				for (const m of t) m.type === s.f.Nsfw || m.type === s.f.Spoiler ? a.push(m) : Object(r.q)(m.type) ? c.push(m) : d.push(m);
				let l = [],
					u = [];
				return n ? o ? (l = a, u = []) : i ? (l = c, u = d) : (l = c, u = [...a, ...d]) : o ? (l = [], u = a) : i ? (l = [], u = [...c, ...d]) : (l = [], u = [...c, ...a, ...d]), {
					leftFlair: l,
					rightFlair: u
				}
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
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				d = n("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				f = n.n(b);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = e => {
				let {
					className: t
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(t, f.a.container, f.a.placeholder, f.a.large, p.a.largeAndMediumPostStyles)
				}, s.a.createElement(l.a, {
					className: f.a.backgroundWrapper
				}, s.a.createElement("div", {
					className: f.a.titleAndDescriptionContainer
				}, s.a.createElement("h3", {
					className: f.a.title
				}, h._("Top livestream", null, {
					hk: "4od1tZ"
				}))), s.a.createElement("div", {
					className: f.a.body
				}, s.a.createElement("div", {
					className: f.a.previewContainer
				}, s.a.createElement("div", {
					className: Object(a.a)(f.a.thumbnail, f.a.loading)
				})))))
			};
			var v = e => {
				let {
					className: t,
					layout: n
				} = e;
				return n === u.g.Classic ? s.a.createElement(c.b, {
					className: Object(a.a)(t, f.a.classicPostPlaceholder),
					isLoading: !0
				}) : n === u.g.Compact ? s.a.createElement(d.a, {
					className: Object(a.a)(t, f.a.compactPostPlaceholder),
					isLoading: !0
				}) : s.a.createElement(g, {
					className: t
				})
			};
			const x = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: n
					} = e;
					return s.a.createElement(v, {
						className: t,
						layout: n
					})
				},
				getComponent: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit~shreddit-player"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), n.e("Reddit~RpanListingUnit~StandalonePostPage~reddit-components-MediumPost"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("RpanListingUnit")]).then(n.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var _ = e => s.a.createElement(x, e),
				y = n("./src/reddit/components/Scroller/ScrollChild.ts"),
				O = n("./src/reddit/helpers/trackers/rpan.ts");
			const E = e => e === u.g.Classic ? 84 : e === u.g.Compact ? 42 : 340,
				j = new o.a(20),
				C = e => {
					const t = `rpan-${e.layout}-${e.listingKey}`,
						n = j.get(t);
					if (n) return n;
					const r = Object(y.a)(e.desiredIndex, e.children),
						o = {
							child: {
								id: t,
								estHeight: E(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(O.H)()),
								render: t => {
									let {
										className: n
									} = t;
									return s.a.createElement(_, {
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
				i = n("./src/lib/classNames/index.ts"),
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
					}), o.a.createElement("div", {
						className: Object(i.a)(m.a.membersIcons, h)
					}, g.current.map((e, t) => {
						let {
							color: s,
							image: c
						} = e;
						return t === r - 1 && u ? o.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: t
						}, o.a.createElement("img", {
							className: Object(i.a)(m.a.memberIcon, n),
							src: c,
							style: {
								backgroundColor: s
							}
						}), o.a.createElement(p, {
							showPresence: !0,
							outlineClassName: a
						})) : o.a.createElement("img", {
							className: Object(i.a)(m.a.memberIcon, n),
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
		"./src/reddit/components/RelatedSubredditsCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
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
					const t = Object(i.e)(a.f),
						n = Object(i.e)(a.a);
					return t || n ? o.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/raf/index.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o);
			class a extends i.a.Component {
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
					return i.a.createElement("div", {
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/SEOTitle/constants.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/helpers/postCollection.ts");
			const l = [c.Sb.COMMENTS, c.Sb.COLLECTION_COMMENTS],
				u = (e, t) => {
					if (!e) return [];
					const n = l.includes(e),
						r = e === c.Sb.COLLECTION_COMMENTS || t && Object(d.a)(t),
						s = c.ab.has(e),
						o = c.Hb.has(e),
						i = e === c.Sb.SUBREDDIT,
						u = e === c.Sb.TOPIC;
					let m, p, b;
					return s && !i || o ? m = a.a.HeaderSelector : r ? m = a.a.Collection : n ? m = a.a.PostComments : u && (m = a.a.TopicHeader), (s || o || r || n) && (p = a.a.Widget), (s || n) && (b = a.a.PostItem), [m, p, b]
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
				v = Object(o.b)(() => Object(i.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					return n && Object(p.o)(e, {
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
			class x extends s.a.Component {
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
			t.b = g(v(x))
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
				i = n.n(o),
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
				v = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				x = n("./src/reddit/helpers/name/index.ts"),
				_ = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				O = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = n("./src/reddit/components/MiniCardPost/index.m.less"),
				j = n.n(E),
				C = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				I = n.n(C);
			const S = e => e.type === _.f.Spoiler,
				N = Object(f.v)();
			t.a = N(Object(h.b)(Object(b.a)(Object(d.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: o,
					innerContainerClassName: d,
					onPostClick: b,
					trendingPost: f,
					trendingSearch: h,
					shouldOpenPost: _,
					showSubredditMeta: E = !0,
					showSubredditName: C,
					subredditOrProfile: N
				} = e, k = f && f.preview && f.preview.url || void 0, T = f && f.isSponsored ? "promoted_trend" : "trending", w = f && Object(l.a)(f.permalink) || "", P = _ && w || h && Object(a.a)("/search", {
					q: h.rawQuery,
					source: T
				}) || w, L = h ? h.subredditInfo && h.subredditInfo.icon : N && N.icon.url, A = h ? h.subredditInfo && h.subredditInfo.displayText : N && (N.displayText || N.name), D = f ? f.flair.filter(S) : [], R = f ? f.score : 0, B = f ? f.numComments : 0, M = f && f.isSponsored, F = Object(O.a)(e).body, U = `linear-gradient(\n      ${Object(s.f)(F,.2)},\n      ${Object(s.f)(F,.3)},\n      ${Object(s.f)(F,.4)},\n      ${Object(s.f)(F,.6)},\n      ${Object(s.f)(F,.8)},\n      ${F}\n    )`, W = i.a.createElement("div", {
					id: o,
					className: Object(c.a)(I.a.trendingPost, {
						[I.a["m-background"]]: !!k
					})
				}, i.a.createElement(g.default, {
					to: P
				}, i.a.createElement("div", {
					className: Object(c.a)(I.a.backgroundWrapper, j.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(O.a)(e).body, k || Object(O.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, M && i.a.createElement("div", {
					className: I.a.promoted
				}, r.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), i.a.createElement("div", {
					className: Object(c.a)(I.a.innerContainer, j.a.innerContainer, d),
					onClick: b,
					title: f ? f.title : ""
				}, i.a.createElement("h2", {
					className: f ? I.a.title : I.a.titleNoDescription
				}, e.title), f ? i.a.createElement("div", {
					className: Object(c.a)(I.a.description, n)
				}, D.length > 0 && i.a.createElement(m.a, {
					className: I.a.flair,
					titleFlair: D,
					nowrap: !0,
					post: f
				}), f.title) : i.a.createElement("div", {
					className: I.a.spacer
				}), E && L && A && i.a.createElement(v.a, {
					className: I.a.relatedSubredditMetaData,
					iconClassName: I.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: r.fbt._("{subredditName} and more", [r.fbt._param("subredditName", A)], {
						hk: "2YTyJf"
					})
				}), !E && f && i.a.createElement("div", {
					className: I.a.metaLine
				}, C && A && i.a.createElement("span", {
					className: I.a.meta
				}, Object(x.d)(A)), i.a.createElement("span", {
					className: I.a.meta
				}, r.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [r.fbt._plural(R, "number", Object(u.b)(R))], {
					hk: "1Jm6il"
				})), i.a.createElement("span", {
					className: I.a.meta
				}, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(B, "number", Object(u.b)(B))], {
					hk: "311aXY"
				})))))));
				return M ? i.a.createElement(p.a, {
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
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
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
					className: Object(o.a)(c.a.container, d, t)
				}, s.a.createElement(i.a, {
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
				i = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = () => s.a.createElement(i.a, {
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
				className: Object(o.a)(l.a.desc, l.a.one, p)
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.two, p)
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.icon, p)
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.name, p)
			}))))
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js");
			const s = Object(r.createContext)(!1);

			function o() {
				return Object(r.useContext)(s)
			}
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
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
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
				v = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				x = n.n(v),
				_ = n("./src/lib/lessComponent.tsx");
			const y = Object(r.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("reddit-components-SidebarNativeAd")]).then(n.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
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
				O = Object(d.c)({
					post: (e, t) => {
						const {
							placement: n,
							placementIndex: r
						} = t, s = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(f.a)(n, s, r)]
					}
				}),
				E = Object(c.b)(O),
				j = _.a.wrapped(b.a, "ThemedWidget", x.a),
				C = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(g.G)(e.media) && e.media.content)),
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
						const e = o()(0, I.length - 1),
							{
								img: t,
								href: n
							} = I[e],
							{
								className: r,
								placement: s,
								redditStyle: i
							} = this.props;
						return a.a.createElement(j, {
							className: r,
							contentOnly: !0,
							redditStyle: i
						}, a.a.createElement(u.a, {
							img: t,
							href: n,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, s)
						}))
					}
				});

			function N(e) {
				let {
					className: t,
					post: n,
					placementIndex: r,
					refreshKey: s,
					listingName: o,
					placement: i,
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
						placement: i
					}) : n && (e = a.a.createElement(y, {
						post: n,
						postId: n.id,
						refreshKey: s,
						listingName: o,
						placement: i,
						placementIndex: r
					})), a.a.createElement(p, null, e)
				}
				return null
			}
			t.a = E(N)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
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
			const m = Object(i.v)();
			t.a = m(Object(o.b)((e, t) => {
				let {
					listingName: n,
					pageLayer: r
				} = t;
				const s = Object(a.b)(e, {
						listingName: n,
						pageLayer: r
					}),
					o = Object(d.F)(e) || Object(c.a)(e),
					i = Object(a.e)(e);
				return {
					canShowAd: s && !o,
					awaitingBrandSafetyCheck: !Object(a.c)(e),
					isAdsDisabled: o,
					viewIsUnsafe: i
				}
			})(e => {
				let {
					canShowAd: t,
					isAdsDisabled: n,
					viewIsUnsafe: r,
					pageLayer: o,
					...i
				} = e;
				return !n && t && o ? s.a.createElement(l.a, u({
					forceHouseAd: r
				}, i)) : null
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
				i = n.n(o),
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
				v = n("./src/reddit/selectors/userPrefs.ts"),
				x = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				_ = n.n(x);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = u.a.div("BladeContainer", _.a), E = u.a.wrapped(f.a, "CloseIcon", _.a), j = u.a.div("LoadingTitleContainer", _.a), C = u.a.div("LoadingNavContainer", _.a), I = u.a.div("ShortLoadingNav", _.a), S = u.a.wrapped(b.a, "ThemedChevron", _.a), N = e => {
				let {
					...t
				} = e;
				return i.a.createElement(O, null, i.a.createElement(E, null), i.a.createElement(p.k, null, i.a.createElement(p.p, null, y._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), i.a.createElement(p.o, null, i.a.createElement(j, null, i.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingTitle, t.isLoading && _.a.loading)
				})), i.a.createElement(C, null, i.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), i.a.createElement(S, null)), i.a.createElement(C, null, i.a.createElement(I, null), i.a.createElement(S, null)), i.a.createElement(C, null, i.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), i.a.createElement(S, null)), i.a.createElement(C, null, i.a.createElement(I, null), i.a.createElement(S, null)), i.a.createElement(C, null, i.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), i.a.createElement(S, null)))))
			}, k = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(N, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(N, {
					gradientType: "posts",
					isLoading: !0
				})
			}), T = Object(c.c)({
				isEditing: g.i,
				isSubscriptionsPinned: v.c,
				moderatorPermissions: h.n
			});
			t.a = Object(a.b)(T)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(_.a.Container, e.isSubscriptionsPinned && _.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(k, {
					subredditId: e.subredditId
				})) : i.a.createElement(o.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class i extends s.a.Component {
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
			var a = Object(o.a)(i);
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
				return i
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
				return v
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "j", (function() {
				return y
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(s);
			const i = r.a.section("FormPage", o.a),
				a = r.a.h1("HomePageTitle", o.a),
				c = r.a.button("HomePageBreadcrumb", o.a),
				d = r.a.div("HomePageGroup", o.a),
				l = r.a.h1("FormPageTitle", o.a),
				u = r.a.div("FormPageSection", o.a),
				m = r.a.div("FormGroup", o.a),
				p = r.a.h2("FormGroupTitle", o.a),
				b = r.a.div("FormElement", o.a),
				f = r.a.div("FormGroupDescription", o.a),
				h = r.a.div("FormItem", o.a),
				g = r.a.h3("FormElementTitle", o.a),
				v = r.a.div("FormElementDescription", o.a),
				x = r.a.div("FormElementError", o.a),
				_ = r.a.div("FormElementSubGroup", o.a),
				y = r.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
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
				v = n("./src/reddit/components/SubredditIcon/index.m.less"),
				x = n.n(v);

			function _() {
				return (_ = Object.assign || function(e) {
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
					} = e, i = [n, x.a.inTopBar, x.a.iconContainer];
					return r ? i.push(x.a.emptyEditableIconInTopBar) : i.push(x.a.editableIcon, x.a.emptyEditableIcon), o.a.createElement("span", _({}, s, {
						className: Object(c.a)(...i)
					}), r ? o.a.createElement(f.a, {
						name: "upload",
						className: x.a.emptyUploadButton
					}) : o.a.createElement(f.a, {
						name: "add",
						className: x.a.emptyPlusButton
					}), e.children)
				},
				O = e => {
					const {
						iconColor: t,
						className: n,
						alt: r,
						role: s,
						onClick: i,
						inTopBar: a,
						src: d
					} = e;
					return o.a.createElement("span", {
						className: x.a.iconContainer
					}, o.a.createElement("img", {
						alt: r,
						onClick: i,
						role: s,
						src: d,
						className: Object(c.a)(n, {
							[x.a.editableIcon]: !a
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				E = Object(a.c)({
					isLoading: g.b
				});
			class j extends o.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => o.a.createElement(u.a, {
						className: x.a.imageUploader,
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
					return this.props.inTopBar ? o.a.createElement("span", {
						className: x.a.clickableUploadText,
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
					}), n = o.a.createElement(o.a.Fragment, null, o.a.createElement(O, _({
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
					}, o.a.createElement(y, _({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : o.a.createElement(o.a.Fragment, null, o.a.createElement(y, _({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [x.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(x.a.loadingIconInTopBar), t = 32), o.a.createElement(m.a, {
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
						className: x.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(i.b)(E, (e, t) => ({
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
				return E
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
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
				v = n.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = d.a.wrapped(l.a, "UserIcon", v.a),
				y = d.a.img("Image", v.a),
				O = e => {
					let {
						iconColor: t,
						...n
					} = e;
					return i.a.createElement(y, x({
						style: {
							backgroundColor: t || ""
						}
					}, n))
				},
				E = d.a.div("BackupImage", v.a),
				j = Object(m.v)();
			t.b = j(e => {
				var t;
				const n = Object(a.e)(h.eb);
				let o, d, l;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: n
					} = Object(p.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(f.i)(e.subredditOrProfile) ? l = i.a.createElement(_, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (o = t, d = n)
				} else o = e.shouldHideNsfwIcon ? `${r.a.assetPath}/img/avatar_over18.png` : e.iconUrl, d = e.primaryColor || u.a.alienblue;
				return o ? l = i.a.createElement(O, {
					alt: s.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: Object(c.a)(e.className, {
						[v.a.blur]: e.shouldBlurSubredditIcon
					}),
					iconColor: d,
					role: "presentation",
					src: o
				}) : l || (l = i.a.createElement(b.a, {
					name: "community",
					isFilled: !n,
					className: Object(c.a)(v.a.defaultCommunityIcon, e.className, {
						[v.a.mNightmode]: n,
						[v.a.blur]: e.shouldBlurSubredditIcon
					}),
					style: n ? {
						backgroundColor: e.redditStyle ? u.a.alienblue : d
					} : {
						color: e.redditStyle ? u.a.alienblue : d
					}
				})), e.linkTo ? i.a.createElement("a", x({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					href: e.linkTo,
					className: v.a.iconLink
				}), l) : i.a.createElement(i.a.Fragment, null, l)
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
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
				v = n.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = (e, t, n) => Object(p.a)(e, {
					[v.a.mActive]: t
				}, {
					[v.a.topBannerVariant]: n
				}),
				y = e => {
					let {
						children: t,
						isActive: n,
						isTopBannerVariant: r,
						...o
					} = e;
					return s.a.createElement("div", x({
						className: _(v.a.subNavTitle, n, r)
					}, o), s.a.createElement("span", null, t), s.a.createElement(f.b, {
						className: v.a.navDropdownIcon
					}))
				},
				O = e => {
					let {
						className: t,
						href: n,
						isActive: r,
						to: o,
						isTopBannerVariant: i,
						...a
					} = e;
					const c = _(v.a.navLink, r, i);
					return o ? s.a.createElement(m.a, x({
						className: c,
						to: o
					}, a)) : n ? s.a.createElement(b.b, x({
						className: c,
						isSponsored: !1,
						sourceElement: h.SourceElement.NavigationMenu,
						href: n
					}, a)) : s.a.createElement("a", x({
						className: c
					}, a))
				},
				E = e => {
					let {
						className: t,
						isActive: n,
						...r
					} = e;
					return s.a.createElement(m.a, x({
						className: Object(p.a)(_(v.a.navLink, n), t)
					}, r))
				},
				j = e => {
					let {
						className: t,
						href: n,
						isActive: r,
						...o
					} = e;
					return n ? s.a.createElement(b.b, x({
						className: _(v.a.subNavLink, r),
						isSponsored: !1,
						sourceElement: h.SourceElement.NavigationMenu,
						href: n
					}, o)) : s.a.createElement("a", x({
						className: _(v.a.subNavLink, r)
					}, o))
				},
				C = e => {
					let {
						className: t,
						...n
					} = e;
					return s.a.createElement("div", x({
						className: Object(p.a)(v.a.subNavContainer, t)
					}, n))
				},
				I = e => {
					let {
						className: t,
						isOpen: n,
						...r
					} = e;
					return s.a.createElement("div", x({
						className: Object(p.a)(v.a.subNavList, t, {
							[v.a.mIsOpen]: n
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
			var N = S;
			const k = e => {
				const t = e.url && Object(u.h)(u.f, e.url);
				return t ? t.url : e.url
			};
			var T = e => e.menuItem.url ? s.a.createElement(O, {
					href: k(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : s.a.createElement(N, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => s.a.createElement(j, {
					key: `${e.text}-${k(e)}`,
					role: "listitem",
					href: k(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				w = n("./src/reddit/selectors/subreddit.ts"),
				P = n("./src/reddit/actions/subreddit.ts"),
				L = n("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js"), D = Object(i.c)({
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
					return Object(w.Y)(e, {
						subredditId: n
					})
				}
			});
			var R = Object(o.b)(D, (e, t) => ({
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
					const o = Object(L.a)();
					return t ? s.a.createElement(E, {
						className: v.a.metaNavLink,
						to: t.url,
						isActive: n,
						onClick: e => {
							Object(c.J)(o) && !Object(c.R)(o) && e.preventDefault(), r()
						}
					}, A._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				B = n("./src/reddit/actions/economics/predictions/index.ts"),
				M = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				F = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				U = n("./src/reddit/helpers/trackers/predictions.ts"),
				W = n("./src/reddit/hooks/useTracking.ts"),
				H = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), V = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(o.d)(),
					i = Object(L.a)(),
					a = Object(W.a)(),
					c = Object(F.S)(i),
					[d, l] = Object(r.useState)(!1),
					u = Object(o.e)(e => Object(w.Y)(e, {
						subredditId: t
					})),
					m = Object(o.e)(e => Object(w.S)(e, {
						subredditId: t
					})),
					p = Object(o.e)(e => Object(H.d)(e, {
						subredditId: t
					})),
					b = Object(o.e)(e => Object(H.e)(e, {
						subredditId: t
					}));
				Object(M.a)(t);
				return Object(r.useEffect)(() => {
					!m || d || p || c || (n(Object(B.m)(u.name)), l(!0))
				}, [m, d, p, c, n, u.name]), m && p ? s.a.createElement(E, {
					className: v.a.predictionsFilter,
					isActive: c,
					onClick: () => {
						n(Object(P.p)({
							subredditId: t,
							forceState: !1
						})), a(Object(U.i)())
					},
					to: `${u.url}predictions/`
				}, G._("Predictions", null, {
					hk: "Cv5GC"
				}), b && s.a.createElement("span", {
					className: v.a.liveIcon
				}, G._("Live", null, {
					hk: "1o89m4"
				}))) : null
			};
			var q = n("./src/lib/constants/index.ts");
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const z = Object(c.v)(),
				Q = [q.Sb.SUBREDDIT, q.Sb.COMMENTS, q.Sb.COLLECTION_COMMENTS],
				Y = Object(i.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && Q.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(c.R)(t.pageLayer)
				});
			var J = z(Object(o.b)(Y, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(P.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: n,
						isPostsRoute: r,
						isPredictionsPage: o,
						isTopBannerVariant: i,
						onTurnOffMetaFilter: a
					} = e, c = r && !n && !o;
					return s.a.createElement(O, {
						to: t,
						isActive: c,
						isTopBannerVariant: i,
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
					...o
				} = e;
				const i = Object(re.a)(o);
				return s.a.createElement("div", {
					className: Object(p.a)(v.a.outerContainer, t),
					style: {
						position: i.navBar.useOverlay && !r ? "relative" : "static",
						...i.navBar.useOverlay && !r ? {
							marginTop: -26
						} : {},
						background: r ? "inherit" : Object(ne.g)(i.navBar.backgroundColor, i.navBar.backgroundImage, "tiled")
					}
				}, n)
			});
			var oe = e => s.a.createElement(se, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, s.a.createElement("div", {
					className: v.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === ee.g.Large ? `${e.maxWidth||te.a}px` : "100%"
					}
				}, s.a.createElement("div", null, e.children), s.a.createElement($, null))),
				ie = n("./src/reddit/constants/wiki.ts"),
				ae = n("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: ce
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var de = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: n,
					pageLayer: r
				} = e, o = !!r && !!r.meta && r.meta.name === q.Sb.SUBREDDIT_WIKI, i = `wiki/${ie.i}`, a = t.endsWith("/") ? t + i : `${t}/${i}`;
				return s.a.createElement(O, {
					isActive: o,
					isTopBannerVariant: n,
					to: a,
					onClick: () => e.sendEvent(Object(ae.g)())
				}, ce._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const le = Object(d.a)("spPolls", R),
				ue = Object(c.v)(),
				me = Object(i.c)({
					layout: c.U,
					widget: l.f
				}),
				pe = Object(o.b)(me);
			t.a = ue(pe(Object(a.c)(e => s.a.createElement(oe, {
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
			}), s.a.createElement(V, {
				subredditId: e.subredditId
			})), e.widget && s.a.createElement(s.a.Fragment, null, e.widget.showWiki && s.a.createElement(de, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, n) => s.a.createElement(T, {
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
				i = n("./node_modules/react-redux/es/index.js"),
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
					const t = Object(i.e)(a.e),
						n = Object(i.e)(a.a);
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
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				f = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				h = n("./src/reddit/components/IdCard/async.tsx"),
				g = n("./src/lib/isFakeSubreddit/index.ts"),
				v = n("./src/reddit/components/IdCard/helpers.ts"),
				x = e => !Object(g.a)(e) || Object(v.e)(e) || Object(v.f)(e) || Object(v.g)(e),
				_ = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = n("./src/reddit/components/ModProgressModule/async.tsx"),
				O = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				E = n("./src/reddit/components/SidebarContainer/index.tsx"),
				j = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				C = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				I = n("./src/lib/makeListingKey/index.ts"),
				S = n("./src/reddit/actions/subreddit.ts"),
				N = n("./src/lib/classNames/index.ts"),
				k = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				T = n("./src/reddit/controls/Button/index.tsx"),
				w = n("./src/reddit/helpers/name/index.ts"),
				P = n("./src/reddit/helpers/overlay/index.ts"),
				L = n("./src/reddit/selectors/experiments/topPosts.ts"),
				A = n("./src/reddit/selectors/posts.ts"),
				D = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const R = .99;
			class B extends a.a.Component {
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
					return a.a.createElement(D.a, {
						threshold: R,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var M = B,
				F = n("./src/lib/isUrl/index.ts"),
				U = n("./src/lib/prettyPrintNumber/index.ts"),
				W = n("./src/reddit/components/FlairWrapper/index.tsx"),
				H = n("./src/reddit/components/Thumbnail/index.tsx"),
				G = n("./src/reddit/models/Flair/index.ts"),
				V = n("./src/reddit/models/Subreddit/index.ts"),
				q = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				K = n.n(q);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Q = e => e.type === G.f.Nsfw || e.type === G.f.Spoiler, Y = Object(d.c)({
				post: A.G,
				subredditOrProfile: A.V
			});
			class J extends a.a.PureComponent {
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
					}, i = Object(F.a)(Object(H.c)(o)), c = t.flair.filter(Q);
					return a.a.createElement("div", {
						className: Object(N.a)(K.a.container, e, {
							[K.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: K.a.mainLine
					}, i && a.a.createElement("div", {
						className: K.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(H.b, o)), a.a.createElement("div", {
						className: Object(N.a)(K.a.title, !i && K.a.titleSingle),
						title: t.title
					}, c.length > 0 && a.a.createElement(W.a, {
						className: K.a.flair,
						titleFlair: c,
						nowrap: !0,
						post: t
					}), t.title)), a.a.createElement("div", {
						className: K.a.metaLine
					}, r && !!s && a.a.createElement("span", {
						className: K.a.meta
					}, Object(V.i)(s) ? Object(w.e)(s.displayText || s.name) : Object(w.d)(s.displayText || s.name)), a.a.createElement("span", {
						className: K.a.meta
					}, z._({
						"*": "{score} points",
						_1: "1 point"
					}, [z._plural(t.score, "score", Object(U.b)(t.score))], {
						hk: "1JZ0qm"
					})), a.a.createElement("span", {
						className: K.a.meta
					}, z._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [z._plural(t.numComments, "numComments", Object(U.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Z = Object(c.b)(Y, e => ({
					openLightbox: t => e(Object(P.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(J),
				X = n("./src/reddit/components/SidebarPostList/index.m.less"),
				$ = n.n(X);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = 10, ne = 2, re = Object(d.a)(A.N, e => e.filter(e => !e.isSponsored)), se = Object(d.c)({
				posts: (e, t) => re(e, {
					...t
				})
			});
			class oe extends a.a.Component {
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
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || te, this.showMorePosts = () => {
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
						return a.a.createElement(M, {
							key: e.id,
							onPostVisible: r,
							postId: e.id
						}, a.a.createElement(Z, {
							className: Object(N.a)($.a.smallPost, o),
							containerOnClick: n,
							postId: e.id,
							redditStyle: s,
							showSubredditName: Object(g.a)(Object(w.i)(t)),
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
						redditStyle: i,
						showMoreButton: c,
						topPostsVariant: d
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === o.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(L.a)(d),
						p = Object(L.b)(d),
						b = m || p,
						f = o.slice(l * u, (l + 1) * u),
						[h, ...v] = f,
						x = b ? f.slice(0, ne) : v.slice(0, ne),
						_ = b ? f.slice(ne) : v.slice(ne);
					return a.a.createElement("div", {
						className: Object(N.a)($.a.container, t, {
							[$.a.redditStyle]: i
						})
					}, !b && a.a.createElement(M, {
						onPostVisible: s,
						postId: h.id
					}, a.a.createElement(k.a, {
						postId: h.id,
						backgroundWrapperClassName: $.a.largePostBackgroundWrapper,
						descriptionClassName: $.a.largePostDescription,
						innerContainerClassName: $.a.largePostInnerContainer,
						"data-redditstyle": i,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(w.i)(n)),
						trendingPost: h
					})), x.map(this.renderSmallPost), e, _.map(this.renderSmallPost), c && a.a.createElement(T.r, {
						className: $.a.SeeMore,
						onClick: this.showMorePosts
					}, r || ee._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var ie = Object(c.b)(se, e => ({
					openPost: t => e(Object(P.a)(t.permalink))
				}))(oe),
				ae = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ce = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				de = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				le = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = n("./src/reddit/selectors/discoveryUnit.ts"),
				me = n("./src/reddit/selectors/subreddit.ts"),
				pe = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				be = n.n(pe);
			const fe = 10,
				he = Object(d.a)((e, t) => t.subredditName, e => Object(I.a)(e, l.bb.TOP, {
					t: l.oc.WEEK
				})),
				ge = Object(d.c)({
					discoveryUnit: e => Object(ue.b)(e, {
						unitName: le.i
					}),
					listingKey: he,
					posts: (e, t) => {
						const n = he(e, t);
						return Object(A.N)(e, {
							listingKey: n
						})
					},
					subreddit: me.C
				});
			class ve extends a.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(de.b)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(de.k)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(de.n)(t, e, void 0, n))
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
						subredditName: i,
						topPostsVariant: c
					} = this.props;
					if (0 === o.length) return null;
					const d = i,
						l = o.length > fe;
					return a.a.createElement(ce.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: r.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, a.a.createElement(ie, {
						listingKey: n,
						listingName: d,
						onShowMoreClick: s,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: be.a.smallPost,
						showMoreButton: l,
						topPostsVariant: c
					}, a.a.createElement("div", null, e)))
				}
			}
			var xe = Object(c.b)(ge, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						loadMorePosts: () => e(Object(S.r)({
							sort: l.bb.TOP,
							subredditName: n,
							t: l.oc.WEEK
						}))
					}
				})(Object(ae.c)(ve)),
				_e = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				ye = n("./src/reddit/constants/tracking.ts"),
				Oe = n("./src/reddit/selectors/seo/linksModule.ts"),
				Ee = n("./src/reddit/selectors/telemetry.ts"),
				je = n("./src/telemetry/models/Subreddit.ts");
			const Ce = e => t => ({
					...Ee.o(t),
					action: ye.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Ie = e => t => n => ({
					...Ee.o(n),
					action: ye.c.CLICK,
					noun: Object(je.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Se = Object(d.c)({
					communities: Oe.c
				});
			var Ne = Object(c.b)(Se)(e => {
					const t = Object(ae.b)();
					return e.communities && e.communities.length ? a.a.createElement(j.a, null, a.a.createElement(_e.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: Ce,
						getSubscribeEventFactoryHandler: Ie,
						sendEvent: t,
						title: r.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				ke = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				Te = n("./src/reddit/constants/experiments.ts"),
				we = n("./src/reddit/featureFlags/index.ts"),
				Pe = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				Le = n("./src/reddit/models/Widgets/index.ts"),
				Ae = n("./src/reddit/selectors/communityFlairs.ts"),
				De = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Re = n("./src/reddit/selectors/listings.ts"),
				Be = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				Me = n.n(Be);
			const Fe = 250,
				Ue = 270,
				We = u.a.wrapped(E.a, "SidebarContainer", Me.a),
				He = Object(d.c)({
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
					isInNewModuleNCPV3Experiment: e => Object(De.a)(e) === Te.Me.NewModule,
					showGovernance: we.d.spPoints,
					showLeaderboard: we.d.spLeaderboard,
					showPredictionsLeaderboard: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(me.R)(e, {
							subredditId: n
						}) && !Object(me.S)(e, {
							subredditId: n
						})
					},
					widgets: me.x
				}),
				Ge = Object(c.b)(He);
			class Ve extends i.Component {
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
							kind: Le.i.CommunityList,
							shortName: r.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: Le.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: Le.g.Cloud,
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
						subredditId: i,
						subredditName: c,
						topPostsVariant: d
					} = this.props;
					let u = 0;
					const g = Object(L.a)(d),
						v = Object(L.b)(d),
						E = Object(L.c)(d),
						I = g || v;
					let S, N;
					!!this.getPostFlairWidget() ? S = this.props.widgets : (S = this.getCommunityWidgets(), N = this.makeFlairFilterWidget());
					const k = this.makeRelatedCommunitiesWidget(g, v),
						T = !g,
						w = v,
						P = a.a.createElement(O.a, {
							placement: l.e.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Pe.a.FIRST,
							sizes: l.j
						});
					return a.a.createElement(We, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, n && a.a.createElement(y.a, {
						subredditId: i,
						subredditName: c
					}), x(t) && a.a.createElement(h.a, {
						listingName: t
					}), a.a.createElement(p.a, {
						cardClassName: Me.a.card,
						subredditId: i
					}), o && a.a.createElement(m.a, {
						subredditId: i
					}), I && a.a.createElement(j.a, null, a.a.createElement(xe, {
						subredditName: c,
						topPostsVariant: d
					}, a.a.createElement("div", {
						className: Me.a.inFeedAd
					}, P))), I && k && a.a.createElement(j.a, null, a.a.createElement(ke.a, {
						subredditName: c,
						truncateThreshold: Ue,
						widget: k
					})), w && S.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return a.a.createElement(j.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(ke.a, {
							subredditName: c,
							truncateThreshold: Fe,
							widget: e
						}))
					}), r && a.a.createElement(b.a, {
						className: Me.a.card,
						subredditId: i
					}), N && a.a.createElement(j.a, null, a.a.createElement(ke.a, {
						subredditName: c,
						widget: N
					})), s && a.a.createElement(f.a, {
						className: Me.a.card,
						subredditId: i,
						uniqueId: i
					}), a.a.createElement(_.g, {
						subredditId: i
					}), !I && P, a.a.createElement(Ne, {
						subredditId: i
					}), T && !w && S.map((e, t) => {
						const n = "community-list" === e.kind;
						return a.a.createElement(j.a, {
							key: `widgetSpacer${t}`
						}, a.a.createElement(ke.a, {
							subredditName: c,
							truncateThreshold: E && n ? Ue : E ? Fe : void 0,
							widget: e
						}))
					}), a.a.createElement(C.a, {
						adComponent: a.a.createElement(O.a, {
							placement: l.e.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: u++,
							position: Pe.a.BOTTOM,
							sizes: l.q
						})
					}))
				}
			}
			t.a = Ge(Ve)
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
				o = n.n(s),
				i = n("./src/reddit/controls/Button/index.tsx"),
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
			const m = (e, t, n) => null != n ? n : t ? e : i.c.Plain,
				p = e => {
					let {
						border: t,
						priority: n,
						small: r,
						...s
					} = e;
					return o.a.createElement(i.t, u({}, s, {
						priority: m(i.c.Primary, t, n),
						className: Object(l.a)(s.className, d.a.BaseButton),
						size: r ? i.d.S : i.d.M
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
				f = e => {
					let {
						buttonType: t,
						border: n,
						priority: r,
						small: s,
						...a
					} = e;
					return o.a.createElement(i.t, u({}, a, {
						priority: m(i.c.Secondary, n, r),
						className: Object(l.a)(a.className, d.a.BaseButton),
						size: s ? i.d.S : i.d.M,
						text: b(t)
					}))
				};
			class h extends o.a.Component {
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
						isFullWidth: i = !1,
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: s,
						isFullWidth: i,
						style: c
					};
					return this.props.userIsSubscriber ? o.a.createElement(f, u({}, d, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(p, u({}, d, {
						id: n
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
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
				i = e => {
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
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TabBadger/Loader.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const u = Object(i.c)({
					postCount: l.M,
					previousPageIsOverlay: d.q,
					tabBadged: e => e.tabBadged
				}),
				m = Object(o.b)(u);
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
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, n) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "c", (function() {
				return P
			}));
			var r = n("./src/lib/isUrl/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = n("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = n("./src/reddit/controls/ContentType/index.tsx"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				f = n("./src/reddit/models/Theme/index.ts"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/telemetry/models/Outbound.ts"),
				v = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				x = n("./src/reddit/components/Thumbnail/index.m.less"),
				_ = n.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => e.placeholderImage || Object(h.a)(e).placeholderImage,
				E = e => e.placeholderImage ? "cover" : Object(h.a)(e).placeholderImagePosition,
				j = c.a.span("LinkText", _.a),
				C = e => {
					let {
						className: t,
						onClick: n,
						children: r
					} = e;
					return o.a.createElement("div", {
						onClick: n,
						className: Object(i.a)(_.a.linkIcon, t)
					}, r)
				},
				I = e => o.a.createElement("img", {
					alt: e.alt,
					className: Object(i.a)(_.a.hiddenImage, e.className)
				}),
				S = e => {
					const t = o.a.createRef(),
						{
							src: n,
							errorSrc: r
						} = e;
					return n && r && Object(l.b)(n).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${r})`)
					}), o.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(i.a)(_.a.thumbnail, _.a.imageThumbnail, e.className),
						"data-click-id": "image",
						"data-adclicklocation": v.a.MEDIA,
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(h.a)(e).button : Object(h.a)(e).line
						}
					}, e.isOutbound && o.a.createElement(C, {
						className: e.linkIconClassName
					}, o.a.createElement(p.a, {
						className: Object(i.a)(_.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(j, {
						className: e.linkTextClassName
					}, e.text)), o.a.createElement(I, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				N = e => e.isOutbound ? Object(h.a)(e).button : e.placeholderImage ? "transparent" : Object(h.a)(e).line,
				k = e => {
					const t = O(e),
						n = t && {
							background: Object(f.g)(Object(h.a)(e).placeholder, t, E(e))
						};
					return o.a.createElement("div", {
						className: Object(i.a)(_.a.thumbnail, _.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...n,
							borderColor: N(e)
						}
					}, (!e.placeholderImage || e.showContentType) && o.a.createElement(u.a, {
						className: Object(i.a)(e.contentTypeClassName, _.a.contentType, {
							[_.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && o.a.createElement(C, {
						className: e.linkIconClassName
					}, o.a.createElement(p.a, {
						className: Object(i.a)(_.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(j, {
						className: e.linkTextClassName
					}, e.text)))
				},
				T = e => o.a.createElement(S, y({}, e, {
					className: Object(i.a)(_.a.blurredThumbnail, e.className)
				})),
				w = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: n,
						contentTypeClassName: s,
						crosspost: a,
						forceShowNSFW: c,
						isCommentsPage: d,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: p,
						outboundLinkIconClassName: f,
						post: h,
						redditStyle: v,
						removeLink: x,
						showContentType: y,
						templatePlaceholderImage: E,
						text: j,
						theme: C,
						usePreview: I
					} = e, S = !C.subredditContext.shouldShowNSFWContent && (h.isNSFW || !(!a || !a.isNSFW)) && !c, N = O({
						placeholderImage: E,
						redditStyle: v,
						theme: C
					}), k = P(e), T = d ? g.SourceElement.PostImage : g.SourceElement.ListingPostImage, w = A(h, t, N, S, j, C, k, l, y, x, v, u, p, f, s), L = Object(b.D)(h);
					return Object(r.a)(L) && !x && L.indexOf("redditmedia") < 0 ? o.a.createElement("div", {
						className: Object(i.a)(_.a.container, I ? _.a.usePreview : "", n)
					}, o.a.createElement(m.b, {
						href: Object(b.D)(h),
						isSponsored: h.isSponsored,
						postId: h.id,
						source: h.source,
						sourceElement: T
					}, w)) : o.a.createElement("div", {
						className: Object(i.a)(_.a.container, I ? _.a.usePreview : "", n)
					}, w)
				}),
				P = e => {
					let {
						crosspost: t,
						post: n,
						url: r,
						usePreview: s
					} = e;
					if (r) return r;
					const {
						preview: o,
						media: i,
						thumbnail: a
					} = t || n;
					return s && o ? o.url : n.isSponsored && o && "default" === a.url ? o.url : L(i) ? i.scrubberThumbSource : a.url
				},
				L = e => !!e && e.type === b.o.LIVEVIDEO,
				A = (e, t, n, s, a, c, l, u, m, p, b, f, h, g, v) => {
					const x = (e => e.source && !e.isSponsored || !1)(e);
					if (Object(r.a)(l)) {
						const n = L(e.media),
							r = n ? {
								errorSrc: d.U
							} : {},
							u = Object(i.a)(t, {
								[_.a.verticallyCenterThumbnail]: n
							});
						return s ? o.a.createElement(T, y({
							"data-click-id": "image",
							src: l
						}, r, {
							className: u,
							isOutbound: x && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: g,
							redditStyle: b,
							text: a,
							theme: c
						})) : o.a.createElement(S, y({
							alt: e.title,
							className: u,
							src: l
						}, r, {
							isOutbound: x && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: g,
							redditStyle: b,
							text: a,
							theme: c
						}))
					}
					return o.a.createElement(k, {
						className: t,
						contentTypeClassName: v,
						placeholderImage: n,
						isMeta: u,
						isOutbound: x && !p,
						linkIconClassName: f,
						linkTextClassName: h,
						outboundLinkIconClassName: g,
						redditStyle: b,
						showContentType: m,
						text: a,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.b = w
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
				i = n("./src/reddit/components/BlankPost/index.tsx"),
				a = n("./src/reddit/connectors/PostViewable/index.ts");
			const c = Object(a.a)(null);
			class d extends s.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? s.a.createElement(i.BlankPost, {
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
				return N
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
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
				v = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				x = n("./src/reddit/selectors/telemetry.ts");
			const _ = "nsfw_dialog";
			var y = e => i.a.createElement("svg", {
					className: e.className,
					fill: "none",
					height: "60",
					viewBox: "0 0 60 60",
					xmlns: "http://www.w3.org/2000/svg",
					width: "60"
				}, i.a.createElement("path", {
					d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
					fill: "#FF585B"
				}), i.a.createElement("path", {
					d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
					fill: "#FF585B"
				}), i.a.createElement("path", {
					d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
					fill: "#FF585B"
				})),
				O = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				E = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				j = n.n(E);
			const C = {
					d2x_nsfw_signup_blocking_de_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${r.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				I = e => {
					const t = Object(a.d)(),
						n = Object(f.b)(),
						r = Object(a.e)(O.g),
						u = Object(o.useCallback)(() => {
							r === O.a.Blurred && t(Object(p.k)({
								actionSource: p.a.NsfwBlockingModal
							}))
						}, [t, r]),
						b = (e => e ? i.a.createElement("div", {
							className: j.a.cta
						}, s.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), i.a.createElement("br", null), s.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : i.a.createElement("div", {
							className: j.a.cta
						}, s.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(r === O.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(v.c)(r)
					}, [r]), i.a.createElement("div", {
						className: Object(l.a)(j.a.mainCta)
					}, i.a.createElement(y, null), b, i.a.createElement("div", {
						className: j.a.contentTitle
					}, e.contentTitle), i.a.createElement("div", {
						className: j.a.warning
					}, (() => s.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), i.a.createElement("div", {
						className: j.a.buttonContainer
					}, i.a.createElement(g.j, {
						className: Object(l.a)(j.a.logIn),
						onClick: () => {
							n((() => e => ({
								...Object(x.o)(e),
								source: "xpromo",
								action: "click",
								noun: _,
								actionInfo: {
									...Object(x.d)(e)
								}
							}))()), u(), Object(v.b)(v.a.Login), t(Object(m.openLoginModal)())
						}
					}, (() => s.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), i.a.createElement(g.j, {
						className: j.a.cancel,
						onClick: () => {
							Object(d.b)(), n((() => e => ({
								...Object(x.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: _,
								actionInfo: {
									...Object(x.d)(e)
								}
							}))()), Object(v.b)(v.a.Dismiss), t(Object(c.b)("/"))
						}
					}, (() => s.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				S = Object(u.a)(e => {
					const t = `${r.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return i.a.createElement("div", {
						className: j.a.qrCodeOuter
					}, i.a.createElement("div", {
						className: j.a.qrCodeInner
					}, i.a.createElement("img", {
						className: j.a.qrCode,
						alt: s.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), i.a.createElement("div", {
						className: j.a.copyLine1
					}, (() => s.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), i.a.createElement("div", {
						className: j.a.copyLine2
					}, (() => s.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), i.a.createElement("img", {
						className: j.a.sneakySnoo,
						src: t
					})))
				}),
				N = e => {
					const t = Object(f.b)();
					i.a.useEffect(() => {
						t((() => e => ({
							...Object(x.o)(e),
							source: "xpromo",
							action: "view",
							noun: _,
							actionInfo: {
								...Object(x.d)(e)
							}
						}))())
					}, [t]);
					const {
						contentTitle: n
					} = e, r = Object(a.e)(O.h), s = Object(a.e)(O.i), o = Object(a.e)(O.g), c = o === O.a.Blurred ? b.a.White : o === O.a.NoPreview ? b.a.Grey : void 0;
					return i.a.createElement("div", {
						className: j.a.container
					}, i.a.createElement(I, {
						contentTitle: n
					}), i.a.createElement("div", {
						className: Object(l.a)(j.a.footerWrapper, {
							[j.a.mIsModal]: o === O.a.Blurred
						})
					}, i.a.createElement(b.b, {
						textColor: c
					})), i.a.createElement(S, {
						qrCodeAsset: (() => r === h.Xc.Enabled || s === h.kb.BlurredPreview || s === h.kb.NoPreview ? C.d2x_nsfw_signup_blocking_de_v1 : C.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				}
		},
		"./src/reddit/components/UserIcon/PresenceDot.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useIntersectionObserver.ts"),
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
				return Object(i.a)(c, l), s.a.createElement(a.a, {
					ref: c,
					className: Object(o.a)(d.a.presenceDot, {
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
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("div", {
					className: Object(i.a)(c.a.snoovatarWrapper, n, {
						[c.a.hasNftBorder]: Boolean(a)
					}),
					style: d
				}, o.a.createElement("div", {
					className: Object(i.a)(c.a.snoovatarBackground, t)
				}), o.a.createElement("div", {
					className: c.a.snoovatarHeadshotContainer
				}, o.a.createElement("img", {
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
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
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
					isNightMode: o,
					isNSFW: d,
					nsfwIconUrl: p,
					shouldHideNSFW: b,
					style: f
				} = e;
				if (r && m(n) || !r && !n) return i.a.createElement(c.a, {
					className: Object(a.a)(l.a.DefaultUserIcon, t, {
						[l.a.mNightmode]: o
					}),
					style: f
				});
				const h = !r && d && b ? p || u : n;
				return i.a.createElement("img", {
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
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
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
					return o.a.createElement("svg", {
						className: t,
						fill: "none",
						viewBox: "0 0 32 32",
						xmlns: "http://www.w3.org/2000/svg"
					}, o.a.createElement("radialGradient", {
						id: "a",
						cx: "0",
						cy: "0",
						gradientTransform: "matrix(20.06268 6.0999 -3097.55815 10187.91225 -3.1 11.6)",
						gradientUnits: "userSpaceOnUse",
						r: "1"
					}, o.a.createElement("stop", {
						offset: "0",
						stopColor: "#1185b5"
					}), o.a.createElement("stop", {
						offset: ".29",
						stopColor: "#d7f7ff"
					}), o.a.createElement("stop", {
						offset: ".53",
						stopColor: "#5ef6d8"
					}), o.a.createElement("stop", {
						offset: ".84",
						stopColor: "#5ef6d8"
					}), o.a.createElement("stop", {
						offset: ".87",
						stopColor: "#1990b9"
					}), o.a.createElement("stop", {
						offset: "1",
						stopColor: "#3f9fc6"
					})), o.a.createElement("path", {
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
					return Object(d.c)(t) ? o.a.createElement(p.a, {
						className: h.a.nftAnimation,
						assetUrl: `${m.a.assetPath}/img/snoovatars/comment-animations/nft_comment_animation.json`,
						loop: !0
					}) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: h.a.nftBackground
					}), o.a.createElement(b, {
						className: h.a.nftBorder
					}))
				},
				v = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				x = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				_ = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				y = n("./src/reddit/selectors/user.ts");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = () => {},
				j = Object(a.c)({
					currentUser: y.l,
					isNightMode: y.eb,
					shouldHideNSFW: y.G,
					user: y.Bb
				}),
				C = Object(i.b)(j);
			t.a = C(e => {
				const {
					authorId: t,
					collapsed: n,
					currentUser: i,
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
					onPresenceIndicatorInViewport: N,
					shouldShowPresenceIndicator: k,
					user: T,
					userName: w,
					wrapperClassName: P,
					style: L,
					...A
				} = e, D = !!i && Object(u.e)(i) === w, R = D ? i : T, B = R && R.accountIcon || a, M = T ? T.isNSFW : f, F = Object(d.a)(B) && !m, U = F ? o.a.createElement(x.a, {
					headshot: B,
					className: e.className,
					hasNftBorder: b && Object(d.d)(a),
					style: L
				}) : o.a.createElement(_.b, O({}, A, {
					iconUrl: m && n ? "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png" : B,
					isCurrentUser: D,
					isNSFW: M,
					style: L
				})), [W, H] = Object(s.useState)(!1), G = Object(s.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "ONLINE_STATUS_INDICATOR",
							userID: t
						}
					}
				}), [t]), V = Object(s.useCallback)(e => {
					const {
						isOnline: t
					} = e.subscribe.data;
					H(t)
				}, []), q = Object(s.useRef)(null), [K, z] = Object(s.useState)(!1), Q = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, r = 1 !== n;
						t ? z(!0) : r && z(!1)
					})
				}, []), Y = Object(s.useRef)({
					rootMargin: "750px 0px 1000px 0px"
				});
				return Object(l.a)(q, Q, Y.current), S ? U : o.a.createElement("div", {
					className: Object(r.a)(h.a.userIconWrapper, {
						[h.a.hasHeadShotWrapper]: F,
						[h.a.isProfileIcon]: I
					}, P),
					ref: q
				}, b && o.a.createElement(g, {
					iconUrl: a
				}), U, k && (W || y && j) && o.a.createElement(v.default, {
					showPresence: !0,
					isHighlighted: p,
					onceInViewport: N
				}), (k || C) && !y && K && o.a.createElement(c.a, {
					variables: G,
					onData: k ? V : E,
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
				return T
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "d", (function() {
				return L
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, n) => r => {
				const s = e(r),
					i = t(r),
					a = !s && i;
				return Object(o.a)(n.baseClassName, r.className, {
					[n.mIsInteractive]: i,
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
				v = n.n(g);
			const x = {
					...v.a,
					baseClassName: v.a.Upvote
				},
				_ = e => {
					let {
						voteState: t
					} = e;
					return t === d.a.upvoted
				},
				y = a(_, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, x);
			var O = e => s.a.createElement(h.b, {
					className: y(e),
					compact: e.compact,
					isFilled: _(e)
				}),
				E = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				j = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				S = n.n(I);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => Object(o.a)({
					[S.a.compact]: e.compact,
					[S.a.dark]: Object(j.b)(Object(E.a)(e)),
					[S.a.nightmode]: e.isNightMode
				}),
				T = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(C.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: r,
						isNightMode: i,
						voteState: a,
						compact: c,
						...l
					} = e;
					return s.a.createElement("button", N({}, l, {
						className: Object(o.a)(S.a.customDownvote, k(e), {
							[S.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				w = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(C.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: r,
						isNightMode: i,
						voteState: a,
						compact: c,
						...l
					} = e;
					return s.a.createElement("button", N({}, l, {
						className: Object(o.a)(S.a.customUpvote, k(e), {
							[S.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				P = f,
				L = O
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
				i = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(a);
			const d = o.a.div("WidgetBackground", c.a),
				l = o.a.wrapped(e => {
					let {
						children: t,
						...n
					} = e;
					return s.a.createElement("div", n, s.a.createElement(i.b, {
						type: i.a.Widget
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
				return N
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(i.b)(null, (e, t) => {
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
				v = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				_ = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				j = n.n(E);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => o.a.createElement(b.a, {
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
				})) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(N, C({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(h.t, {
					className: j.a.bottomButton,
					kind: h.b.Button,
					priority: h.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				S = Object(c.c)({
					hideNSFWPref: y.G,
					nightmode: y.eb
				}),
				N = Object(i.b)(S)(e => o.a.createElement("div", {
					className: Object(d.a)(j.a.communityItemContainer, {
						[j.a.withBottomFlair]: e.isNSFW
					})
				}, o.a.createElement(x.a, {
					className: j.a.communityItemExpandCenter,
					widthRight: f.s
				}, o.a.createElement("div", {
					className: j.a.iconContainer
				}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
					className: j.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : o.a.createElement(v.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(j.a.defaultCommunityIcon, {
						[j.a.mNightmode]: e.nightmode
					})
				})), o.a.createElement("div", {
					className: j.a.communityDescriptionContainer
				}, o.a.createElement(a.a, {
					className: j.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(O.b)(e.name, e.type),
					to: Object(O.a)(e.name, e.type)
				}, Object(O.b)(e.name, e.type)), o.a.createElement("div", {
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
						type: _.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(g.a, {
					className: Object(d.a)(j.a.communityCta, j.a.smallLoadingIcon),
					sizePx: 12
				}) : o.a.createElement(h.t, {
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
				return i
			}));
			var r = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/name/index.ts");

			function o(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
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
				i = n("./node_modules/react-redux/es/index.js"),
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
				v = n("./src/reddit/helpers/flair.ts"),
				x = n("./src/reddit/helpers/trackers/postFlair.ts"),
				_ = n("./src/reddit/models/Widgets/index.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = n.n(O);

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
					url: e => Object(f.fb)(e)
				}),
				S = Object(a.c)({
					subredditId: (e, t) => Object(y.I)(e, t.subredditName)
				}),
				N = Object(i.b)(S),
				k = l.a.div("WidgetContent", E.a),
				T = e => {
					let {
						display: t,
						isFlairFilter: n,
						onMouseDown: r,
						onClick: s,
						...i
					} = e;
					return o.a.createElement("li", {
						className: Object(c.a)(E.a.StyledFlair, t === _.g.Cloud && E.a.cloudDisplay, {
							[E.a.flairFilter]: n,
							[E.a["m-selected"]]: i.isSelected
						}),
						onClick: () => null == s ? void 0 : s(Object(v.g)(i.flair)),
						onMouseDown: r
					}, o.a.createElement(u.b, j({}, i, {
						className: E.a.Flair,
						isFlairFilter: n,
						forceSmallEmojis: !0
					})))
				};
			class w extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(x.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(x.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(x.d)())
					}, this.onClickFlair = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(g.d)(g.a.SearchResults), this.props.sendEvent(Object(x.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(v.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(v.c)(this.props.widget.templates[e])), this.state = {
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
					return o.a.createElement(h.r, {
						className: E.a.flairFilterButton,
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
					}, e.map(e => o.a.createElement(T, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onClick: this.onClickFlair,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(v.e)(this.props.url, Object(v.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, n = t ? C : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: E.a.flairFilterContainer,
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
					return o.a.createElement("ul", null, o.a.createElement(T, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(v.e)(this.props.url, Object(v.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: n
					} = this.state, r = t.order, s = this.getFlairsFromIds(r), i = e && this.getSelectedFlair(s) || void 0, a = t.order.length > r.length || n && !i;
					return o.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(k, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(s), a && this.renderButton()))
				}
			}
			t.a = I(N(Object(m.c)(w)))
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
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
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
				v = c.a.div("RuleIndex", h.a),
				x = c.a.div("RuleTitle", h.a),
				_ = c.a.div("RuleDescription", h.a),
				y = c.a.wrapped(d.a, "RawHTMLDisplay", h.a),
				O = {};
			class E extends o.a.Component {
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
					} = this, s = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !r(e) && !!s;
					return o.a.createElement(g, {
						className: Object(a.a)({
							[h.a.pointerCursor]: i,
							[h.a.cleanStyle]: e.cleanStyle
						}),
						onClick: r(e) || !s ? void 0 : n
					}, o.a.createElement(p.a, null, o.a.createElement(v, {
						className: Object(a.a)({
							[h.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), o.a.createElement(x, null, `${e.rule.shortName}`), o.a.createElement("div", null, !r(e) && s && o.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && o.a.createElement(_, {
						className: Object(a.a)({
							[h.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? o.a.createElement(l.b, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: O
					}) : e.rule.descriptionHtml ? o.a.createElement(y, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const j = e => e.rules.length > 0 ? o.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: r.fbt._("{subredditName} Rules", [r.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return o.a.createElement(E, {
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
				return Be
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
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
				v = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/telemetry/models/Outbound.ts"),
				y = n("./src/reddit/components/Widgets/Button/index.m.less"),
				O = n.n(y);
			const E = (e, t, n) => {
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
							textColor: i
						} = o;
						t && (e = i = n, r = "transparent"), s = {
							"--widget-button-hover-background-color": `${r||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${i||e}`
						}
					}
					return {
						...r,
						...s
					}
				},
				j = e => e.kind === g.k.Image ? O.a.imageButton : O.a.textButton,
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
						style: E(t, n, r),
						isFullWidth: !0,
						size: d.d.S,
						priority: d.c.Secondary
					}, t.kind === g.k.Text && s.a.createElement("span", {
						className: t.hoverState ? O.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.k.Text && s.a.createElement("span", {
						className: O.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				S = e => s.a.createElement(l.b, {
					href: C(e.button),
					sourceElement: _.SourceElement.SidebarWidget
				}, s.a.createElement(I, e)),
				N = m.a.wrapped(a.a, "RawHTMLDisplay", O.a);
			var k = Object(o.b)(() => Object(i.c)({
					forceRedditStyle: v.l,
					isNightmodeOn: x.eb
				}))(e => s.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && s.a.createElement(N, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.k.Image || e.url !== f.c) && (!e.hoverState || e.hoverState.kind !== g.k.Image || e.hoverState.url !== f.c)).map(t => s.a.createElement(S, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				T = n("./node_modules/fbt/lib/FbtPublic.js"),
				w = n("./src/reddit/components/HumanDate/index.tsx"),
				P = n("./src/reddit/controls/TextButton/index.tsx"),
				L = n("./src/reddit/components/Widgets/Calendar/index.m.less"),
				A = n.n(L);
			const D = 100,
				R = {
					isExpanded: !1
				},
				B = m.a.wrapped(a.a, "RawHTMLDisplay", A.a),
				M = m.a.div("EventContainer", A.a),
				F = m.a.div("EventTitle", A.a),
				U = m.a.div("EventDate", A.a),
				W = m.a.div("EventLocation", A.a),
				H = m.a.div("EventDescription", A.a),
				G = m.a.wrapped(P.a, "ToggleDescription", A.a);
			class V extends s.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = R
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > D ? s.a.createElement(H, null, t.isExpanded ? e.text : e.text.slice(0, D), s.a.createElement(G, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? T.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : T.fbt._("...read more", null, {
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
				}, s.a.createElement(F, null, t.titleHtml ? s.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && s.a.createElement(U, null, s.a.createElement(w.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && s.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						n = t.getHours(),
						r = t.getMinutes();
					return r < 10 ? `${n}:0${r}` : `${n}:${r}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && s.a.createElement(W, null, t.locationHtml ? s.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && s.a.createElement(V, {
					text: t.description
				})))),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				z = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var Q = Object(K.c)(e => s.a.createElement(z.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Y = Object(i.c)({
					stylesheet: e => e.stylesheets
				}),
				J = Object(o.b)(Y),
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
			var oe = m.a.img("StyledImage", se.a);
			class ie extends s.a.Component {
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
						r = s.a.createElement(ne, null, s.a.createElement(oe, {
							alt: T.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: n.url
						}));
					return n.linkUrl ? s.a.createElement(l.b, {
						href: n.linkUrl
					}, r) : r
				}
			}
			var ae = ie,
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
			const ve = m.a.a("ExternalLink", ge.a),
				xe = m.a.div("ModeratorListItem", ge.a),
				_e = m.a.div("Username", ge.a),
				ye = m.a.wrapped(ue.b, "FlairComponent", ge.a),
				Oe = e => e.authorFlairType === be.f.Richtext ? {
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
				Ee = e => s.a.createElement(_e, null, `u/${e}`),
				je = m.a.wrapped(me.default, "InternalLink", ge.a),
				Ce = m.a.div("LinkContainer", ge.a),
				Ie = Object(i.c)({
					userIsBanned: fe.ib,
					userIsLoggedIn: x.R
				});
			var Se = Object(o.b)(Ie)(e => {
					const {
						subredditName: t,
						widget: n,
						userIsBanned: r,
						userIsLoggedIn: o
					} = e;
					return s.a.createElement(c.a, {
						styles: n.styles,
						title: T.fbt._("Moderators", null, {
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
					}), T.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), n.mods && n.mods.length && !r ? s.a.createElement(s.a.Fragment, null, n.mods.map(e => s.a.createElement(xe, {
						key: e.name
					}, (e => s.a.createElement(de.a, {
						to: `/user/${e.name}/`
					}, Ee(e.name)))(e), s.a.createElement(ye, {
						flair: Oe(e),
						forceSmallEmojis: !0
					}))), s.a.createElement(Ce, null, s.a.createElement(je, {
						to: `/r/${t}/about/moderators/`
					}, T.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : r || !o ? s.a.createElement("div", {
						className: ge.a.HelpCenterMessage
					}, T.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", s.a.createElement(ve, {
						href: `${ce.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: le.c,
						target: le.d.BLANK
					}, T.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : s.a.createElement("div", {
						className: ge.a.UnModeratedSubreddit
					}, T.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", s.a.createElement(ve, {
						href: `${ce.a.redditUrl}/r/redditrequest`,
						rel: le.c,
						target: le.d.BLANK
					}, T.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", T.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Ne = n("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				ke = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Te = n("./src/reddit/components/Widgets/TextArea/index.m.less"),
				we = n.n(Te);
			const Pe = m.a.div("WidgetContent", we.a),
				Le = m.a.wrapped(a.a, "RawHTMLDisplay", we.a);
			var Ae = e => s.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, s.a.createElement(Pe, null, s.a.createElement(Le, {
					html: e.widget.textHtml || ""
				}))),
				De = n("./src/reddit/components/Widgets/Base/index.tsx");
			var Re = e => s.a.createElement(De.b, null, "This widget hasn't been implemented yet!");

			function Be(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Se;
						case "textarea":
							return Ae;
						case "button":
							return k;
						case "subreddit-rules":
							return ke.b;
						case "community-list":
							return Q;
						case "calendar":
							return q;
						case "image":
							return ae;
						case "custom":
							return $;
						case "post-flair":
							return Ne.a;
						default:
							return Re
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
				return E
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "b", (function() {
				return S
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/actions/ads/index.ts"),
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
				v = n("./src/reddit/selectors/experiments/survey.ts"),
				x = n("./src/reddit/selectors/listings.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/tracking.ts");

			function E() {
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
			const j = E(),
				C = {
					apiError: x.c,
					apiPending: x.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: x.g,
					postsById: _.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: s
						} = t;
						return Object(_.D)(e, n, r, s)
					}),
					subredditsById: y.fb,
					viewportDataLoaded: O.a,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: v.e
				},
				I = Object(s.c)(C),
				S = e => ({
					onBottomViewed: (t, n) => e(l.c(t, n)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
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
						e(d.N(t, r, s))
					},
					trackOnPostExitedViewport: (t, n, r, s) => {
						e(d.O(t, r, s))
					},
					showModalOnScroll: () => e(d.bb()),
					surveyTriggerScrollCounted: () => e(Object(u.m)())
				}),
				N = e => Object(b.b)({
					...e
				}),
				k = (e, t, n, r) => {
					const {
						listingKey: s,
						hostPostData: o,
						listingBelowVariant: i
					} = r;
					return Object(f.k)(e, t, "post", s, o, i, void 0)
				},
				T = Object(r.b)(I, S, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: N,
					postClickEventFactory: k
				}));
			t.a = e => Object(m.c)(j(T(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: i.kb
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
				i = n("./src/reddit/selectors/activeModalId.ts"),
				a = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(s.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.i,
				isBladeEditorDirty: a.h,
				isModalOpen: Object(i.b)(c.a.BLADE_UNSAVED_CHANGES)
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
				i = n("./src/reddit/actions/postFlair.ts"),
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
				autoplayPref: b.c,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: d.Y,
				hideNSFWPref: b.G,
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
						return e(Object(i.h)({
							post: n,
							previewFlair: r,
							selectedTemplateId: s
						}))
					},
					handleVote: t => {
						const r = t === c.a.upvoted ? Object(o.jb)(n) : Object(o.v)(n);
						e(r)
					},
					onIgnoreReports: () => e(Object(o.fb)(n)),
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
		"./src/reddit/constants/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
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
			const i = {
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
				return i
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
				return v
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "o", (function() {
				return j
			}));
			const r = 284,
				s = 450,
				o = 800,
				i = 284,
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
				v = 5,
				x = 16,
				_ = 1250,
				y = 82,
				O = 48,
				E = 36,
				j = 40
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
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
				o = "data-offset-key",
				i = "hovered",
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
				return o
			}));
			const r = 480,
				s = 960,
				o = 1200
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
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
			const i = s.a.createContext(!1);

			function a(e) {
				function t(t) {
					return s.a.createElement(i.Consumer, null, n => s.a.createElement(e, o({}, t, {
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
				o = n("./node_modules/react/index.js");
			const i = o.createContext({
				showPromo: s.a,
				dismissPromo: s.a,
				completePromo: s.a,
				promos: new Map
			});
			t.a = i
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, n) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/ContentType/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/icons.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/constants/elementClassNames.ts"),
				d = n("./src/reddit/controls/ContentType/index.m.less"),
				l = n.n(d);
			const u = e => Object(o.a)(l.a.contentTypeIcon, e.className),
				m = {
					embed: i.a.embed,
					gallery: i.a.media_gallery,
					gifvideo: i.a.gif_post,
					image: i.a.image_post,
					meta: i.a.poll_post,
					rpan: i.a.video_live,
					rtjson: i.a.text_post,
					text: i.a.text_post,
					video: i.a.video_post,
					liveaudio: i.a.audio
				};

			function p(e) {
				const t = u(e),
					n = e.type && m[e.type] || i.a.link_post;
				return s.a.createElement(a.a, {
					name: n,
					className: Object(o.a)({
						[c.a]: n === i.a.link_post
					}, t)
				})
			}
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
				i = n.n(o),
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
			class g extends i.a.Component {
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
					return e.href ? i.a.createElement(c.a, h({}, t, {
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
					}), e.children && i.a.createElement("span", {
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, h({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
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
				return i.a.createElement(g, h({
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
				muteSubreddit: "ui39KJ4PwbdKkxvIBbLbV",
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
				i = n("./src/lib/classNames/index.ts"),
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
						className: Object(i.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: a.f
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
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(a.a.loadingIcon, n, {
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
				return N
			}));
			var r = n("./node_modules/lodash/omit.js"),
				s = n.n(r),
				o = n("./node_modules/query-string/index.js"),
				i = n.n(o),
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
				v = n("./src/reddit/helpers/trackers/ads.ts"),
				x = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/reddit/selectors/user.ts");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = Object(l.a)(O.b, O.l, (e, t) => {
					let {
						isSponsored: n,
						postId: r
					} = t;
					return n && r ? Object(_.b)(e, r) : null
				}, _.G, y.d, (e, t, n, r, s) => ({
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
							url: o,
							query: a
						} = i.a.parseUrl(n);
						r = i.a.stringifyUrl({
							url: o,
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
				N = (e, t, n) => {
					const r = S(t, n, e.href);
					return e.href = r.url, r.metadata
				},
				k = e => {
					let {
						isSponsored: t,
						source: n
					} = e;
					return !!(t && (null == n ? void 0 : n.outboundUrl))
				},
				T = C(e => {
					const t = Object(a.useRef)(null),
						n = Object(x.a)(),
						{
							allowClickTracking: r,
							basePixelMetadata: o,
							commentId: i,
							fireAdPixelsOfType: d,
							href: l,
							isSponsored: u,
							pageType: m,
							post: b,
							postId: f,
							source: g,
							sourceElement: _,
							userId: y
						} = e;
					let O = s()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "post", "commentId", "source", "sourceElement", "userId", "pageType"]);
					const j = g && g.outboundUrl && u ? g.outboundUrl : l;
					return O = {
						...O,
						href: j,
						rel: u ? p.b : p.a,
						target: p.d.BLANK
					}, !g || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: n
						} = e;
						return !(!t || !n) && (t > n + 3e5 || t < n - 36e5)
					})(g) ? c.a.createElement("a", E({}, O, {
						onClick: () => n(l, _, i, f)
					})) : c.a.createElement("a", E({}, O, {
						onMouseDown: n => {
							if (!k(e)) return !(1 !== n.button && 2 !== n.button && !n.ctrlKey) || void I(n.currentTarget, g, y, r);
							t.current = N(n.currentTarget, f, o)
						},
						onClick: () => {
							b && (k(e) && Object(v.a)(b, m), d(b, h.a.Click), n(l, _, i, f))
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
			t.b = T
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/constants/elementClassNames.ts"),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = n.n(i);
			t.a = r.a.wrapped(o.b, "styledOutboundLink", {
				styledOutboundLink: `${a.a.styledOutboundLink} ${s.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, n) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Search/index.m.less"),
				f = n.n(b);
			const h = Object(o.b)(() => Object(i.c)({
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
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/TextButton/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("button", {
				children: e.children,
				className: Object(o.a)(a.a.textButton, e.className),
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
				i = n.n(o);
			t.a = r.a.wrapped(s.default, "unstyledInternalLink", i.a)
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
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				o = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const i = (e, t) => Object(r.a)(e, {
					...s,
					variables: t
				}),
				a = (e, t) => Object(r.a)(e, {
					...o,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./src/redditGQL/operations/SubscribedSubreddits.json"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(i.a)(e, r);
			const l = (e, t) => {
					let {
						subredditIds: n,
						subredditNames: r,
						subscribe: i
					} = t;
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: s.ob.POST,
						endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: i ? "sub" : "unsub",
							sr: n && n.join(",") || void 0,
							sr_name: r && r.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				u = (e, t, n) => Object(o.a)(Object(a.a)(e, [c.a]), {
					method: s.ob.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: n ? "true" : "false",
						sr_name: t,
						api_type: "json"
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r,
						...o
					} = e, i = o;
					return r ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/counters/nsfwblocking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/sample/index.ts"),
				o = n("./src/telemetry/helpers/sendCounter.ts");
			var i;
			! function(e) {
				e.Dismiss = "dismiss", e.Login = "login", e.Signup = "signup", e.View = "view"
			}(i || (i = {}));
			const a = e => {
					Object(o.b)(r.o.Redesign, {
						type: o.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				c = e => {
					e && Object(s.b)(10) && Object(o.b)(r.o.Redesign, {
						type: o.a.NsfwBlocking,
						data: {
							action: i.View,
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
			const o = () => i() ? r.Enabled : r.Disabled,
				i = () => null !== document.getElementById(s.D)
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return a
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
			const i = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				a = e => {
					let t = e;
					do {
						if (i(t)) return !0
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
						endOffset: i
					} = n, a = document.createRange();
					a.selectNode(e);
					let c = !0;
					if (-1 === a.compareBoundaryPoints(Range.START_TO_START, n) && (a.setStart(r, s), c = !1), 1 === a.compareBoundaryPoints(Range.END_TO_END, n) && (a.setEnd(o, i), c = !1), c) return [e];
					const d = document.createElement("div");
					return d.appendChild(a.cloneContents()), [...d.childNodes]
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
				i = n("./src/config.ts");
			const a = Array.from({
					length: 20
				}).map((e, t) => `${i.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				c = Array.from({
					length: 8
				}).map((e, t) => `${i.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				d = [];
			t.a = s()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return d;
				const r = n ? c : a,
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
				let s, o, i, a, c, d, l, u, m, p, b;
				return e ? e.quarantinedSubreddit ? (o = r.a.QuarantinedSubreddit, a = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = r.a.PrivateSubreddit, i = e.subredditDescription, l = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? o = r.a.GoldSubreddit : e.subredditBanned ? (o = r.a.SubredditBanned, s = e.subredditBanMessage) : e.subredditDoesNotExist ? o = r.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? o = r.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (o = r.a.GatedSubreddit, m = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, b = e.interstitialWarningMessageRTJson) : t && (o = r.a.Nsfw), o && n ? {
					banMessage: s,
					contentGateType: o,
					isContributorRequestsDisabled: l,
					isContributorRequestTimestamp: u,
					subredditDescription: i,
					subredditName: n,
					quarantineMessage: a,
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
				i = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(r.a)() ? [window.location.host] : []].concat("").concat(o.map((function(e) {
					return e + ".reddit.com"
				}))).concat(o.map((function(e) {
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
						hostnames: i.concat("redd.it"),
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
				if (-1 === (n.hostnames || i).indexOf(r.hostname)) return;
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
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/history/esm/history.js"), n("./src/reddit/actions/platform.ts");
			var r = n("./src/config.ts");
			t.a = (e, t) => {
				const n = t.platform.currentPage && t.platform.currentPage.url;
				let s = `${r.a.accountManagerOrigin}/login/`;
				const o = window.location.origin;
				n && (s += `?dest=${encodeURIComponent(`${o}${n}`)}`), window.location.href = s
			}
		},
		"./src/reddit/helpers/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/reddit/models/Prediction/index.ts");
			const s = (e, t) => {
					const n = Date.now(),
						s = n <= e.endsAt,
						o = n <= t.endsAt,
						i = e.status === r.b.Cancelled || e.status === r.b.CancelInProgress;
					return i !== (t.status === r.b.Cancelled || t.status === r.b.CancelInProgress) ? i ? 1 : -1 : s !== o ? s ? -1 : 1 : s && e.selectedOptionId !== t.selectedOptionId ? e.selectedOptionId ? 1 : -1 : !e.resolvedOptionId != !t.resolvedOptionId ? e.resolvedOptionId ? 1 : -1 : s || e.selectedOptionId === t.selectedOptionId ? e.createdAt > t.createdAt ? -1 : 1 : e.selectedOptionId ? -1 : 1
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
				i = (e, t) => {
					var n, r;
					const {
						pollData: o
					} = e, {
						pollData: i
					} = t;
					return o && i ? s({
						createdAt: e.created,
						endsAt: null == o ? void 0 : o.votingEndTimestamp,
						selectedOptionId: null !== (n = null == o ? void 0 : o.userSelection) && void 0 !== n ? n : null,
						resolvedOptionId: null == o ? void 0 : o.resolvedOptionId,
						totalVoteCount: null == o ? void 0 : o.totalVoteCount,
						status: null == o ? void 0 : o.predictionStatus
					}, {
						createdAt: t.created,
						endsAt: null == i ? void 0 : i.votingEndTimestamp,
						selectedOptionId: null !== (r = null == i ? void 0 : i.userSelection) && void 0 !== r ? r : null,
						resolvedOptionId: null == i ? void 0 : i.resolvedOptionId,
						totalVoteCount: null == i ? void 0 : i.totalVoteCount,
						status: null == i ? void 0 : i.predictionStatus
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
				return f
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(r.k)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(o.a)(Object(s.a)(e), i.a.actionIcon, i.b.actionIcon);
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
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const o = e => Object(r.b)(e) < .6;

			function i(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.a.bodyText,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.b.bodyText;
				return o(e) ? n : t
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
				o = `${r.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				i = `${r.a.assetPath}/img/favicon/favicon-32x32.png`,
				a = `${r.a.assetPath}/img/favicon/favicon-16x16.png`,
				c = "badgeCountSync",
				d = e => window.document.querySelector(`link[href="${e}"]`),
				l = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					const t = d(e ? i : s),
						n = d(e ? a : o);
					t && n && (t.href = e ? s : i, n.href = e ? o : a)
				},
				u = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: c,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/helpers/localStorage/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => s => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...o.o(s),
					subreddit: o.kb(s),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${n}` : `DESKTOP ${n}`,
						count: 1,
						type: r.h.SWITCH_HOUSE_AD
					}
				}),
				a = (e, t) => {
					t && (Object(s.Eb)(e.postId), Object(s.Nb)(t)), e.impressionIdStr ? Object(s.Fb)(e.impressionIdStr) : e.impressionId && Object(s.Fb)(e.impressionId)
				}
		},
		"./src/reddit/helpers/trackers/communityHubs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					...Object(s.o)(e),
					action: r.c.CLICK,
					noun: "sign_up_cta",
					source: "community_hubs_landing_page"
				}),
				i = () => e => ({
					...Object(s.o)(e),
					action: r.c.CLICK,
					noun: "recommend_someone",
					source: "community_hubs_landing_page"
				}),
				a = () => e => ({
					...Object(s.o)(e),
					action: r.c.VIEW,
					noun: "get_app_cta",
					source: "community_hub",
					subreddit: Object(s.kb)(e)
				})
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
				return i
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
				o = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				i = () => () => ({
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
				return _
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "n", (function() {
				return L
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "j", (function() {
				return D
			})), n.d(t, "k", (function() {
				return R
			})), n.d(t, "t", (function() {
				return B
			})), n.d(t, "s", (function() {
				return M
			})), n.d(t, "r", (function() {
				return F
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "l", (function() {
				return W
			})), n.d(t, "g", (function() {
				return q
			})), n.d(t, "d", (function() {
				return K
			})), n.d(t, "e", (function() {
				return z
			})), n.d(t, "f", (function() {
				return Q
			})), n.d(t, "h", (function() {
				return Y
			})), n.d(t, "q", (function() {
				return J
			}));
			var r, s = n("./src/lib/stringInterpolate/index.ts"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				a = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				c = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = (n("./src/reddit/helpers/widgets/index.tsx"), n("./src/reddit/models/DiscoveryUnit/index.ts")),
				l = n("./src/reddit/models/Search/index.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/reddit/selectors/trending.ts"),
				b = n("./src/reddit/selectors/widgets.ts"),
				f = n("./src/telemetry/index.ts"),
				h = n("./src/reddit/helpers/search/searchImpressionId.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe", e.TRENDING = "trending"
			}(r || (r = {}));
			const g = "discovery_unit",
				v = (e, t, n) => ({
					...m.o(e),
					source: g,
					screen: m.cb(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(s.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				x = (e, t, n) => ({
					...v(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				_ = (e, t) => {
					Object(f.a)(y(t)(e))
				},
				y = (e, t) => n => x(n, e, t),
				O = (e, t, n, r) => "unitName" in t ? v(e, t, r) : ((e, t, n) => ({
					...m.o(e),
					source: "search",
					screen: m.cb(e),
					search: n ? {
						...m.db(e, n, a.a.SERP),
						structureType: m.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				E = (e, t, n, s, o) => ({
					...O(e, t, s, o),
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
			const I = e => {
					Object(f.a)(T({
						...e,
						action: i.c.CLICK
					}))
				},
				S = e => {
					Object(f.a)(T({
						...e,
						action: i.c.VIEW
					}))
				},
				N = {
					[a.a.Popular]: C.POPULAR_CAROUSEL,
					[a.a.Typeahead]: C.SEARCH_DROPDOWN
				},
				k = {
					[a.a.Popular]: l.d.tile,
					[a.a.Typeahead]: l.d.dropdown
				},
				T = e => {
					let {
						action: t,
						offset: n = 0,
						state: s,
						telemetrySource: o,
						trendingSearch: i
					} = e;
					const a = N[o],
						c = k[o],
						l = Object(p.a)(s, c).filter(e => !e.post || !(e.post.isSponsored && e.post.isBlank)).findIndex(e => e.id === i.id) + n;
					return {
						...m.o(s),
						source: "search",
						action: t,
						noun: r.TRENDING,
						metaSearch: j(i),
						discoveryUnit: a === C.POPULAR_CAROUSEL ? {
							name: d.k,
							id: d.k,
							title: d.k,
							type: "query"
						} : void 0,
						actionInfo: m.d(s, {
							paneName: a,
							position: l
						}),
						search: {
							originElement: a === C.SEARCH_DROPDOWN ? "search_dropdown" : void 0,
							originPageType: s.platform.currentPage ? m.v(s.platform.currentPage) : void 0,
							query: i.rawQuery,
							structureType: m.c.Trending,
							impressionId: h.a.get(o),
							queryId: m.eb(s, o)
						}
					}
				},
				w = (e, t, n, r, s, o, a) => {
					Object(f.a)({
						...m.o(e),
						...Object(c.m)({
							state: e,
							postId: n,
							searchOptions: r,
							pageLayer: s,
							key: o,
							discoveryUnit: t
						}),
						action: i.c.VIEW,
						noun: a ? "ad" : "post"
					})
				},
				P = (e, t, n, r) => {
					Object(f.a)(E(e, t, n, r))
				},
				L = (e, t, n, r) => s => E(s, e, t, n, r),
				A = (e, t) => {
					Object(f.a)({
						...v(e, t),
						source: g,
						action: i.c.CLICK,
						noun: "show_less_often"
					})
				},
				D = (e, t, n, r) => {
					Object(f.a)(R(t, n, r)(e))
				},
				R = (e, t, n, s) => o => {
					return {
						...O(o, e, n, s),
						source: g,
						action: i.c.CLICK,
						noun: r.ITEM_POST,
						post: m.K(o, t)
					}
				},
				B = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => Object(c.s)(e, ...t)
				},
				M = (e, t, n, r) => s => o => Object(c.k)({
					action: i.c.CLICK,
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
						...B(...t)(e)(n),
						noun: "ad"
					})
				},
				U = (e, t) => n => s => ({
					...e ? v(s, e, t) : {},
					source: g,
					action: i.c.CLICK,
					noun: r.ITEM_POST,
					post: m.K(s, n)
				}),
				W = (e, t, n, r) => {
					Object(f.a)(H(t, n, r)(e))
				},
				H = (e, t, n, r) => s => {
					const o = Object(u.c)(s, {
							postId: t
						}),
						a = o ? Object(b.b)(s, o) : void 0;
					return {
						...O(s, e, n, r),
						...a,
						source: g,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: m.K(s, t)
					}
				},
				G = () => ({
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
				V = (e, t, n) => m.d(e, {
					position: n
				}),
				q = (e, t, n) => {
					const s = G();
					return e => ({
						...v(e, s),
						actionInfo: V(e, 0, n),
						subreddit: m.lb(e, t) || null,
						source: g,
						action: i.c.VIEW,
						noun: r.ITEM_SUBREDDIT
					})
				},
				K = (e, t, n) => {
					const s = G();
					return e => ({
						...v(e, s),
						actionInfo: V(e, 0, n),
						subreddit: m.lb(e, t) || null,
						source: g,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT
					})
				},
				z = (e, t, n, s) => {
					const o = G();
					return e => ({
						...v(e, o),
						actionInfo: V(e, 0, n),
						subreddit: m.lb(e, t) || null,
						post: s ? m.K(e, s) : null,
						source: g,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				Q = (e, t, n, s) => {
					const o = G();
					return e => ({
						...v(e, o),
						actionInfo: V(e, 0, n),
						subreddit: m.lb(e, t) || null,
						post: s ? m.K(e, s) : null,
						source: g,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				Y = (e, t) => n => ({
					...v(n, e),
					...t && Object(b.b)(n, t),
					source: g,
					action: i.c.CLICK,
					noun: "item"
				}),
				J = e => t => ({
					...v(t, e),
					source: g,
					action: i.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					...Object(s.o)(e),
					action: r.c.CLICK,
					noun: "preview",
					source: "hot_potato"
				}),
				i = () => e => ({
					...Object(s.o)(e),
					action: r.c.CLICK,
					noun: "hot_potato",
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
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "y", (function() {
				return m
			})), n.d(t, "v", (function() {
				return p
			})), n.d(t, "t", (function() {
				return b
			})), n.d(t, "u", (function() {
				return f
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "x", (function() {
				return _
			})), n.d(t, "D", (function() {
				return y
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "z", (function() {
				return E
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "E", (function() {
				return I
			})), n.d(t, "s", (function() {
				return S
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "o", (function() {
				return L
			})), n.d(t, "A", (function() {
				return A
			})), n.d(t, "p", (function() {
				return D
			})), n.d(t, "B", (function() {
				return R
			})), n.d(t, "C", (function() {
				return B
			})), n.d(t, "q", (function() {
				return M
			}));
			var r, s, o, i, a, c, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(r || (r = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(s || (s = {})),
			function(e) {
				e.MiniInbox = "mini-inbox", e.Inbox = "inbox"
			}(o || (o = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(i || (i = {})),
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
						...l.o(e),
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
						type: s
					} = e;
					return e => ({
						...l.o(e),
						action: d.c.VIEW,
						noun: "notification",
						source: "in_app_notification",
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
				b = () => e => ({
					...l.o(e),
					action: d.c.RECEIVE,
					noun: "notification",
					source: "in_app_notification"
				}),
				f = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s,
						awardId: o
					} = e;
					return e => {
						Object(u.a)({
							...l.o(e),
							action: "receive",
							noun: "inbox_notification",
							source: i.Inbox,
							inbox: {
								id: t,
								isClicked: n,
								isViewed: r
							},
							notification: {
								type: s
							},
							goldPurchase: {
								awardId: o
							}
						})
					}
				},
				h = e => {
					let {
						dnPromptAction: t
					} = e;
					return e => ({
						...l.o(e),
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
				g = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s,
						awardId: o,
						position: i,
						postId: a,
						subredditId: c
					} = e;
					return e => ({
						...l.o(e),
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
							awardId: o
						},
						actionInfo: {
							position: i
						},
						subreddit: c ? {
							id: c
						} : null,
						post: a ? {
							id: a
						} : null
					})
				},
				v = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s,
						awardId: o,
						position: i,
						postId: a,
						subredditId: c
					} = e;
					return e => ({
						...l.o(e),
						action: d.c.CLICK,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: s
						},
						goldPurchase: {
							awardId: o
						},
						actionInfo: {
							position: i
						},
						subreddit: c ? {
							id: c
						} : null,
						post: a ? {
							id: a
						} : null
					})
				},
				x = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...l.o(e),
						action: d.c.VIEW,
						noun: "inbox",
						source: i.Inbox,
						inbox: {
							badgeCount: t,
							tab: n
						}
					})
				},
				_ = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...l.o(e),
						action: d.c.VIEW,
						noun: "mini-inbox",
						source: i.Inbox,
						inbox: {
							badgeCount: t,
							tab: r.Activity
						}
					})
				},
				y = e => {
					let {
						badgeCount: t
					} = e;
					return e => ({
						...l.o(e),
						action: d.c.CLICK,
						noun: "inbox",
						source: i.Nav,
						inbox: {
							badgeCount: t
						}
					})
				},
				O = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s,
						awardId: o
					} = e;
					return e => ({
						...l.o(e),
						action: d.c.CLICK,
						noun: "inbox_notification_overflow",
						source: i.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: s
						},
						goldPurchase: {
							awardId: o
						}
					})
				},
				E = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s
					} = e;
					return e => ({
						...l.o(e),
						action: d.c.VIEW,
						noun: "inbox_notification_overflow",
						source: i.Inbox,
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
			var j;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(j || (j = {}));
			const C = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: s,
						type: o
					} = e;
					return e => ({
						...l.o(e),
						action: d.c.CLICK,
						noun: "overflow_option",
						source: i.Inbox,
						inbox: {
							id: n,
							isClicked: r,
							isViewed: s
						},
						notification: {
							type: o
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				I = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: s,
						type: o
					} = e;
					return e => ({
						...l.o(e),
						action: d.c.UNDO,
						noun: "overflow_option",
						source: i.Inbox,
						inbox: {
							id: n,
							isClicked: r,
							isViewed: s
						},
						notification: {
							type: o
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				S = e => {
					let {
						actionInfoType: t
					} = e;
					return e => ({
						...l.o(e),
						action: d.c.CLICK,
						noun: "empty_state_cta",
						source: i.Inbox,
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				N = e => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: i.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: e
					}
				}),
				k = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: i.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: o.MiniInbox
					}
				}),
				T = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "messages",
					source: i.Inbox
				}),
				w = e => {
					let {
						isMiniInbox: t
					} = e;
					return e => ({
						...l.o(e),
						action: d.c.CLICK,
						noun: "mark_all_as_read",
						source: i.Inbox,
						actionInfo: t ? {
							...l.d(e),
							pageType: o.MiniInbox
						} : {}
					})
				};
			var P;
			! function(e) {
				e.DISMISS = "dismiss", e.BANNER = "banner", e.CTA_1 = "cta1", e.CTA_2 = "cta2"
			}(P || (P = {}));
			const L = (e, t) => n => ({
					...l.o(n),
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
				A = (e, t) => n => ({
					...l.o(n),
					action: d.c.CLICK,
					noun: "inbox_banner",
					source: "mini-inbox",
					actionInfo: {
						...l.d(n),
						type: t
					},
					banner: {
						id: e
					}
				}),
				D = e => t => ({
					...l.o(t),
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
				R = e => t => ({
					...l.o(t),
					action: d.c.RECEIVE,
					noun: "inbox_banner",
					source: "mini-inbox",
					actionInfo: {
						...l.d(t)
					},
					banner: {
						id: e
					}
				}),
				B = e => t => ({
					...l.o(t),
					action: d.c.VIEW,
					noun: "inbox_banner",
					source: "mini-inbox",
					actionInfo: {
						...l.d(t)
					},
					banner: {
						id: e
					}
				}),
				M = e => t => ({
					...l.o(t),
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
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			n("./src/reddit/constants/categories.tsx");
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: r.cb(e),
					profile: r.T(e),
					subreddit: r.kb(e)
				}),
				o = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...s(t)
				}),
				i = e => t => ({
					...s(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				a = e => t => ({
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
				return v
			})), n.d(t, "y", (function() {
				return x
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "s", (function() {
				return j
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "w", (function() {
				return I
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "E", (function() {
				return N
			})), n.d(t, "B", (function() {
				return k
			})), n.d(t, "D", (function() {
				return T
			})), n.d(t, "C", (function() {
				return w
			})), n.d(t, "r", (function() {
				return P
			})), n.d(t, "m", (function() {
				return L
			})), n.d(t, "a", (function() {
				return D
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "e", (function() {
				return F
			})), n.d(t, "J", (function() {
				return U
			})), n.d(t, "I", (function() {
				return W
			})), n.d(t, "L", (function() {
				return H
			})), n.d(t, "K", (function() {
				return G
			})), n.d(t, "M", (function() {
				return V
			})), n.d(t, "H", (function() {
				return q
			})), n.d(t, "G", (function() {
				return K
			})), n.d(t, "F", (function() {
				return z
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = [],
				i = "onboarding";
			var a;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.ONBOARDING_LANGUAGE_SELECTION = "onboarding_language_collection", e.SETTINGS_LANGUAGE_COLLECTION = "settings_language_collection", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more", e.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN = "google_account_confirmation_screen", e.USERNAME_SECOND_CONFIRMATION_SCREEN = "username_second_confirmation_screen", e.USERNAME_CONFIRMATION_SCREEN = "username_confirmation_screen", e.USERNAME_TOOLTIP = "username_tooltip"
			}(a || (a = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
					return t => ({
						...Object(s.o)(t),
						action: r.c.CLICK,
						noun: a.EXIT,
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: i
					})
				},
				d = () => e => ({
					...Object(s.o)(e),
					action: r.c.DISMISS,
					noun: a.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: i
				}),
				l = () => e => ({
					...Object(s.o)(e),
					action: r.c.VIEW,
					noun: a.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: i
				}),
				u = e => t => ({
					...Object(s.o)(t),
					action: r.c.DISMISS,
					noun: e,
					source: i
				}),
				m = () => e => ({
					...Object(s.o)(e),
					source: i,
					action: r.c.VIEW,
					noun: a.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(s.o)(e),
					source: i,
					action: r.c.VIEW,
					noun: a.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(s.o)(e),
					source: i,
					action: r.c.VIEW,
					noun: a.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				f = e => t => ({
					...Object(s.o)(t),
					source: i,
					action: r.c.VIEW,
					noun: a.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(s.d)(t),
						type: e
					}
				}),
				h = () => e => ({
					...Object(s.o)(e),
					source: i,
					action: r.c.SUBMIT,
					noun: a.ONBOARDING_GENDER_COLLECTION
				}),
				g = () => e => ({
					...Object(s.o)(e),
					source: i,
					action: r.c.SUBMIT,
					noun: a.ONBOARDING_INTEREST
				}),
				v = () => e => ({
					...Object(s.o)(e),
					source: i,
					action: r.c.SUBMIT,
					noun: a.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				x = e => t => ({
					...Object(s.o)(t),
					source: i,
					action: r.c.SUBMIT,
					noun: a.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(s.d)(t),
						type: e
					}
				}),
				_ = () => e => ({
					...Object(s.o)(e),
					source: i,
					action: r.c.SKIP,
					noun: a.ONBOARDING_GENDER_COLLECTION
				}),
				y = () => e => ({
					...Object(s.o)(e),
					source: i,
					action: r.c.SKIP,
					noun: a.ONBOARDING_INTEREST
				}),
				O = e => t => ({
					...Object(s.o)(t),
					source: i,
					action: r.c.SKIP,
					noun: a.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(s.d)(t),
						type: e
					}
				}),
				E = () => e => ({
					...Object(s.o)(e),
					source: i,
					action: r.c.SELECT,
					noun: a.GENDER
				}),
				j = (e, t, n, o, c) => d => ({
					...Object(s.o)(d),
					source: i,
					action: e ? r.c.SELECT : r.c.DESELECT,
					actionInfo: {
						...Object(s.d)(d),
						reason: c
					},
					noun: t ? a.CATEGORY : a.SUB_CATEGORY,
					onboarding: {
						categoryName: A(n),
						categoryId: o
					}
				}),
				C = (e, t, n, o, c, d) => l => ({
					...Object(s.o)(l),
					source: i,
					action: e ? r.c.SELECT : r.c.DESELECT,
					actionInfo: {
						...Object(s.d)(l),
						reason: d
					},
					noun: a.SUBREDDIT,
					onboarding: {
						categoryName: A(t),
						categoryId: n,
						subredditName: o,
						subredditId: c
					}
				}),
				I = (e, t, n) => o => ({
					...Object(s.o)(o),
					source: i,
					action: n ? r.c.SELECT : r.c.DESELECT,
					noun: a.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(s.d)(o),
						reason: t,
						type: e
					}
				}),
				S = (e, t) => n => ({
					...Object(s.o)(n),
					source: i,
					action: r.c.CLICK,
					noun: a.VIEW_MORE,
					onboarding: {
						categoryName: A(e),
						categoryId: t
					}
				}),
				N = () => e => ({
					...Object(s.o)(e),
					source: "topic_chaining_prompt",
					action: r.c.VIEW,
					noun: a.TOPIC_PREVIEW
				}),
				k = () => e => ({
					...Object(s.o)(e),
					source: "topic_chaining_prompt",
					action: r.c.CLICK,
					noun: a.TOPIC_PREVIEW
				}),
				T = (e, t) => n => ({
					...Object(s.o)(n),
					source: "topic_chaining_prompt",
					action: r.c.SELECT,
					noun: a.CATEGORY,
					onboarding: {
						categoryName: A(e),
						categoryId: t
					}
				}),
				w = () => e => ({
					...Object(s.o)(e),
					source: "topic_chaining_prompt",
					action: r.c.DISMISS,
					noun: a.TOPIC_PREVIEW
				}),
				P = (e, t, n, o) => c => ({
					...Object(s.o)(c),
					source: i,
					action: r.c.VIEW,
					noun: e ? a.CATEGORY : a.SUB_CATEGORY,
					actionInfo: {
						...Object(s.d)(c),
						reason: o
					},
					onboarding: {
						categoryName: A(t),
						categoryId: n
					}
				}),
				L = (e, t, n, o, c) => d => ({
					...Object(s.o)(d),
					source: i,
					action: r.c.VIEW,
					actionInfo: {
						...Object(s.d)(d),
						reason: c
					},
					noun: a.SUBREDDIT,
					onboarding: {
						categoryName: A(e),
						categoryId: n,
						subredditName: t,
						subredditId: o
					}
				}),
				A = e => e.toLowerCase().replace(new RegExp("&", "g"), "and").replace(new RegExp(" ", "g"), "_").replace(new RegExp("[^-_a-z0-9]", "g"), "");
			var D, R, B;
			! function(e) {
				e.CONTINUE = "continue", e.LOGIN_ANOTHER_ACCOUNT = "login_another_account"
			}(D || (D = {})),
			function(e) {
				e.CHANGE_USERNAME = "change_username", e.KEEP_USERNAME = "keep_username"
			}(R || (R = {})),
			function(e) {
				e.GO_BACK = "go_back", e.YES_KEEP_USERNAME = "yes_keep_username"
			}(B || (B = {}));
			const M = () => e => ({
					...Object(s.o)(e),
					action: r.c.VIEW,
					noun: a.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: i
				}),
				F = e => t => ({
					...Object(s.o)(t),
					action: r.c.CLICK,
					actionInfo: {
						...Object(s.d)(t),
						reason: e
					},
					noun: a.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: i
				}),
				U = () => e => ({
					...Object(s.o)(e),
					action: r.c.VIEW,
					noun: a.USERNAME_CONFIRMATION_SCREEN,
					source: i
				}),
				W = e => t => ({
					...Object(s.o)(t),
					action: r.c.CLICK,
					actionInfo: {
						...Object(s.d)(t),
						reason: e
					},
					noun: a.USERNAME_CONFIRMATION_SCREEN,
					source: i
				}),
				H = () => e => ({
					...Object(s.o)(e),
					action: r.c.VIEW,
					noun: a.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: i
				}),
				G = e => t => ({
					...Object(s.o)(t),
					action: r.c.CLICK,
					actionInfo: {
						...Object(s.d)(t),
						reason: e
					},
					noun: a.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: i
				}),
				V = () => e => ({
					...Object(s.o)(e),
					action: r.c.VIEW,
					noun: a.USERNAME_TOOLTIP,
					source: i
				}),
				q = e => t => ({
					...Object(s.o)(t),
					source: "settings",
					action: r.c.VIEW,
					noun: a.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(s.d)(t),
						type: e
					}
				}),
				K = e => t => ({
					...Object(s.o)(t),
					source: "settings",
					action: r.c.SUBMIT,
					noun: a.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(s.d)(t),
						type: e
					}
				}),
				z = (e, t, n) => o => ({
					...Object(s.o)(o),
					source: "settings",
					action: n ? r.c.SELECT : r.c.DESELECT,
					noun: a.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(s.d)(o),
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
				return _
			})), n.d(t, "K", (function() {
				return y
			})), n.d(t, "I", (function() {
				return O
			})), n.d(t, "C", (function() {
				return E
			})), n.d(t, "z", (function() {
				return j
			})), n.d(t, "A", (function() {
				return C
			})), n.d(t, "M", (function() {
				return I
			})), n.d(t, "B", (function() {
				return S
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "E", (function() {
				return k
			})), n.d(t, "D", (function() {
				return T
			})), n.d(t, "t", (function() {
				return w
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "L", (function() {
				return L
			})), n.d(t, "p", (function() {
				return A
			})), n.d(t, "o", (function() {
				return D
			})), n.d(t, "q", (function() {
				return R
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "r", (function() {
				return U
			})), n.d(t, "j", (function() {
				return H
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "h", (function() {
				return V
			})), n.d(t, "d", (function() {
				return q
			})), n.d(t, "H", (function() {
				return K
			})), n.d(t, "i", (function() {
				return z
			})), n.d(t, "c", (function() {
				return Q
			})), n.d(t, "v", (function() {
				return J
			})), n.d(t, "u", (function() {
				return Z
			})), n.d(t, "G", (function() {
				return X
			})), n.d(t, "w", (function() {
				return $
			})), n.d(t, "k", (function() {
				return ee
			})), n.d(t, "F", (function() {
				return te
			})), n.d(t, "y", (function() {
				return ne
			})), n.d(t, "b", (function() {
				return re
			})), n.d(t, "n", (function() {
				return se
			})), n.d(t, "x", (function() {
				return oe
			})), n.d(t, "l", (function() {
				return ie
			})), n.d(t, "J", (function() {
				return ae
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/media/index.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts"),
				a = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				d = n("./src/reddit/selectors/postDraft.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/telemetry/index.ts"),
				b = n("./src/telemetry/models/PostComposer.ts"),
				f = n("./src/telemetry/models/PostDraft.ts");
			const h = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					prediction: "prediction",
					crosspost: "crosspost",
					talk: "talk"
				},
				g = e => ({
					source: "post_composer",
					action: r.c.CLICK,
					...u.o(e),
					screen: u.cb(e),
					correlationId: Object(s.c)(s.a.PostComposer)
				}),
				v = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === i.i.MARKDOWN ? "markdown" : "rte"
				},
				x = e => {
					Object(p.a)({
						noun: "cancel",
						...g(e)
					})
				},
				_ = e => {
					Object(p.a)({
						noun: "discard",
						...g(e)
					})
				},
				y = e => t => ({
					...g(t),
					noun: "subreddit_choice",
					subreddit: e ? u.lb(t, e) : void 0,
					actionInfo: u.g(t)
				}),
				O = () => e => ({
					...g(e),
					noun: "subreddit_selector"
				}),
				E = (e, t) => {
					Object(p.a)({
						noun: "post_type_selector",
						postComposer: {
							type: h[t]
						},
						...g(e)
					})
				},
				j = () => e => ({
					noun: "add_option",
					...g(e)
				}),
				C = () => e => ({
					noun: "voting_length",
					...g(e)
				}),
				I = (e, t, n) => {
					"image_upload" === t || "video_upload" === t ? Object(p.a)({
						noun: t,
						...g(e)
					}) : Object(p.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: n ? "on" : "off"
						},
						...g(e)
					})
				},
				S = (e, t, n, r) => {
					Object(p.a)({
						noun: "post",
						subreddit: u.kb(e),
						postComposer: {
							type: t,
							...v(e, t)
						},
						post: n ? u.K(e, n) : null,
						...g(e),
						correlationId: r
					})
				},
				N = (e, t) => {
					const n = t === i.i.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(p.a)({
						noun: n,
						...g(e)
					})
				},
				k = (e, t) => {
					Object(p.a)({
						noun: "save",
						subreddit: u.kb(e),
						postComposer: {
							type: t,
							...v(e, t)
						},
						...g(e)
					})
				},
				T = (e, t) => {
					const n = e.uploads[t];
					n.error && Object(p.a)({
						...g(e),
						noun: "media",
						action: r.c.REJECT,
						actionInfo: {
							...u.d(e),
							reason: JSON.stringify(n.error)
						}
					})
				},
				w = (e, t) => {
					t.forEach(t => {
						const n = Object(o.g)(t.type);
						n && Object(p.a)({
							...g(e),
							action: r.c.DRAG,
							noun: n
						})
					})
				},
				P = (e, t, n) => {
					Object(p.a)({
						...g(e),
						noun: "input",
						postComposer: {
							inputType: n
						},
						action: t,
						actionInfo: u.g(e)
					})
				},
				L = (e, t, n) => {
					Object(p.a)({
						...g(e),
						noun: n,
						action: Object(b.getToggleAction)(t),
						actionInfo: u.g(e)
					})
				},
				A = e => B("input", e),
				D = () => B("add"),
				R = () => B("remove_image"),
				B = (e, t) => n => ({
					...g(n),
					noun: e,
					postComposer: {
						inputType: t,
						type: h.imageOnly
					},
					action: r.c.CLICK
				}),
				M = e => {
					Object(p.a)({
						...g(e),
						noun: "hide_oc_description",
						action: r.c.CLICK
					})
				},
				F = (e, t) => {
					if (t) {
						const n = u.lb(e, t);
						if (n) return {
							subreddit: n
						};
						const r = u.U(e, t);
						if (r) return {
							profile: r
						}
					}
				},
				U = (e, t) => {
					const {
						draftId: n,
						destSubreddit: r
					} = t, s = Object(m.l)(e), o = Object(d.d)(e, {
						draftId: n
					}), i = {
						authorId: s ? s.id : void 0,
						createdTimestamp: o ? o.created : void 0,
						id: n || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case a.b.Link:
							i.type = f.DraftType.Link, i.urlLength = t.body.length;
							break;
						case a.b.Markdown:
							i.type = f.DraftType.Self, i.bodyTextLength = t.body.length;
							break;
						case a.b.RichText:
							i.type = f.DraftType.RichText, t.documentStats && (i.bodyTextLength = t.documentStats.textLength, i.numberRteImages = t.documentStats.rteImagesCount, i.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case a.b.Image:
							i.type = f.DraftType.Image;
							break;
						case a.b.Video:
							i.type = f.DraftType.Video
					}
					return {
						postDraft: i,
						...F(e, r.id)
					}
				},
				W = (e, t) => {
					const n = Object(m.l)(e),
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
							r.type = f.DraftType.Link, r.urlLength = (t.body || "").length;
							break;
						case a.b.Markdown:
							r.type = f.DraftType.Self, r.bodyTextLength = (t.body || "").length;
							break;
						case a.b.RichText:
							r.type = f.DraftType.RichText
					}
					return {
						postDraft: r,
						...F(e, t.subredditId)
					}
				},
				H = (e, t) => {
					Object(p.a)({
						noun: "draft_load",
						...g(e),
						...U(e, t)
					})
				},
				G = (e, t) => {
					Object(p.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...g(e),
						...U(e, t)
					})
				},
				V = (e, t) => {
					Object(p.a)({
						noun: "draft_delete",
						...g(e),
						...W(e, t)
					})
				},
				q = e => {
					Object(p.a)({
						...g(e),
						noun: "social_connect_link",
						action: r.c.CLICK
					})
				},
				K = (e, t) => {
					Object(p.a)({
						...g(e),
						noun: "twitter_share_checkbox",
						action: Object(b.getToggleAction)(t)
					})
				},
				z = (e, t, n) => {
					Object(p.a)({
						...g(e),
						...U(e, t),
						noun: "draft_share",
						action: n ? r.c.ENABLE : r.c.DISABLE
					})
				},
				Q = e => {
					Object(p.a)({
						...g(e),
						noun: "create_community",
						actionInfo: {
							...u.d(e),
							pageType: "post_select_community"
						}
					})
				},
				Y = "community_recommendation",
				J = () => e => ({
					...g(e),
					action: r.c.VIEW,
					noun: Y,
					listing: {
						links: Object(c.c)(e).map(t => Object(l.I)(e, t.name))
					}
				}),
				Z = (e, t) => n => ({
					...g(n),
					action: r.c.CLICK,
					noun: Y,
					actionInfo: {
						...u.d(n),
						position: t
					},
					subreddit: {
						name: e,
						id: Object(l.I)(n, e)
					}
				}),
				X = e => {
					Object(p.a)({
						...g(e),
						action: r.c.SKIP,
						noun: Y
					})
				},
				$ = (e, t) => n => ({
					...g(n),
					action: r.c.VIEW,
					noun: `${Y}_hover`,
					actionInfo: {
						...u.d(n),
						position: t
					},
					subreddit: {
						name: e,
						id: Object(l.I)(n, e)
					}
				}),
				ee = e => t => ({
					...g(t),
					action: r.c.CLICK,
					noun: "draft_preview",
					actionInfo: {
						...u.d(t),
						count: e
					}
				}),
				te = e => t => ({
					...g(t),
					action: "add",
					noun: "flair",
					subreddit: u.lb(t, e)
				}),
				ne = () => e => ({
					...g(e),
					action: r.c.CLICK,
					noun: "flair_dropdown"
				}),
				re = () => e => ({
					...g(e),
					action: "clear",
					noun: "flair"
				}),
				se = () => e => ({
					...g(e),
					action: "search",
					noun: "flair"
				}),
				oe = e => {
					let {
						actionInfoType: t,
						subredditId: n = "",
						noun: o = "create_post"
					} = e;
					return e => ({
						...g(e),
						action: r.c.CLICK,
						noun: o,
						actionInfo: {
							...u.d(e),
							type: t
						},
						correlationId: Object(s.d)(s.a.PostComposer, !1),
						subreddit: n ? u.lb(e, n) : void 0
					})
				},
				ie = () => e => ({
					...g(e),
					action: r.c.CLICK,
					noun: "edit_post"
				}),
				ae = e => t => ({
					...g(t),
					action: "type",
					noun: "subreddit_search",
					actionInfo: {
						...u.d(t),
						type: e
					}
				})
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/helpers/search/searchImpressionId.ts");
			const c = (e, t) => n => {
					const i = `flair_name:'${t.postFlairName}'`;
					return {
						source: "post",
						action: "click",
						noun: "post_flair",
						...o.o(n),
						actionInfo: o.d(n),
						correlationId: Object(r.c)(r.a.SearchResults),
						post: o.K(n, e),
						search: {
							...o.O(n, t),
							query: i,
							queryId: o.eb(n, s.a.SERP),
							impressionId: a.a.get(s.a.SERP)
						},
						subreddit: o.kb(n)
					}
				},
				d = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...o.o(t),
					actionInfo: o.d(t),
					correlationId: Object(r.c)(r.a.SearchResults),
					search: o.O(t, e),
					subreddit: o.kb(t)
				}),
				l = e => t => {
					const n = Object(i.g)(e);
					return {
						...o.o(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: o.kb(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				u = () => e => ({
					...o.o(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: o.kb(e)
				}),
				m = e => t => {
					const n = Object(i.g)(e);
					return {
						...o.o(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: o.kb(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				p = (e, t) => n => {
					const r = Object(i.g)(e),
						c = o.K(n, t),
						d = `flair_name:'${r}'`;
					return {
						...o.o(n),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: o.kb(n),
						postFlair: {
							id: e.templateId,
							title: r
						},
						post: c,
						search: {
							query: d,
							subredditId: c ? c.subredditId : void 0,
							subredditName: c ? c.subredditName : void 0,
							postFlairName: r,
							originElement: "post_flair",
							queryId: o.eb(n, s.a.SERP),
							impressionId: a.a.get(s.a.SERP),
							originPageType: n.platform.currentPage ? o.v(n.platform.currentPage) : void 0
						},
						feed: o.r(n)
					}
				}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "q", (function() {
				return a
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "f", (function() {
				return E
			}));
			var r = n("./src/reddit/models/Prediction/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = "poll",
				i = "predictions",
				a = e => ({
					...Object(s.o)(e),
					source: o,
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
				d = e => {
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
				l = e => {
					let {
						pollId: t,
						currency: n,
						amount: i
					} = e;
					return e => {
						const a = n === r.a.Coins ? i : void 0,
							c = n === r.a.Tokens ? i : void 0;
						return {
							...Object(s.o)(e),
							source: o,
							action: "close",
							noun: "prediction_modal",
							poll: Object(s.J)(e, t, !1, a, c)
						}
					}
				},
				u = e => ({
					...Object(s.o)(e),
					source: o,
					action: "click",
					noun: "add_coins"
				}),
				m = e => {
					let {
						targetUserId: t
					} = e;
					return e => ({
						...Object(s.o)(e),
						source: i,
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
						...Object(s.o)(e),
						source: i,
						action: "click",
						noun: "tournament",
						actionInfo: {
							pageType: t
						}
					})
				},
				b = () => e => ({
					...Object(s.o)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				f = () => e => ({
					...Object(s.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				h = () => e => ({
					...Object(s.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				g = e => t => ({
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
					subreddit: Object(s.kb)(t)
				}),
				v = () => e => ({
					...Object(s.o)(e),
					source: i,
					action: "click",
					noun: "next"
				}),
				x = () => e => ({
					...Object(s.o)(e),
					source: i,
					action: "click",
					noun: "add_more"
				}),
				_ = () => e => ({
					...Object(s.o)(e),
					source: i,
					action: "click",
					noun: "start_tournament"
				}),
				y = () => e => ({
					...Object(s.o)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				O = () => e => ({
					...Object(s.o)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(s.kb)(e)
				}),
				E = () => e => ({
					...Object(s.o)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(s.kb)(e)
				})
		},
		"./src/reddit/helpers/trackers/predictionsLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
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
					...Object(r.o)(e),
					subreddit: Object(r.kb)(e)
				}),
				o = {
					source: "global",
					action: "view",
					noun: "screen"
				},
				i = () => e => ({
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
				return f
			})), n.d(t, "C", (function() {
				return h
			})), n.d(t, "B", (function() {
				return g
			})), n.d(t, "u", (function() {
				return v
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "x", (function() {
				return _
			})), n.d(t, "r", (function() {
				return y
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "z", (function() {
				return C
			})), n.d(t, "s", (function() {
				return I
			})), n.d(t, "y", (function() {
				return S
			})), n.d(t, "G", (function() {
				return N
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "w", (function() {
				return R
			})), n.d(t, "F", (function() {
				return B
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
			var r, s = n("./src/reddit/constants/chat.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(r || (r = {}));
			const a = (e, t) => {
					if (t) {
						const n = i.C(e, t.post.id),
							r = i.K(e, t.post.id),
							s = i.kb(e);
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
						subreddit: i.kb(e)
					}
				},
				c = (e, t, n) => {
					if (!t || !n) return;
					const r = Object(o.j)(e, {
							streamIdFromPath: t.post.id
						}),
						i = t.chat_disabled || n.chatState === s.c.None;
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
						chatState: i ? s.c.None : s.c.Compact,
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
					...a(e)
				}),
				u = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...a(e)
				}),
				m = (e, t) => n => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...a(n, e),
					actionInfo: i.d(n, {
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
						...a(n, e)
					}
				}),
				b = (e, t) => n => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				f = (e, t) => n => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				h = (e, t) => n => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				g = (e, t, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...a(r, t)
				}),
				v = (e, t, n, r) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...a(s, t),
					actionInfo: i.d(s, {
						referralId: r
					})
				}),
				x = (e, t, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...a(r, t)
				}),
				_ = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...a(t, e)
				}),
				y = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				O = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				E = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				j = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(n, e, t),
					...a(n, e)
				}),
				C = e => t => {
					const n = Object(o.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...a(t, n)
					}
				},
				I = (e, t, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(r, t, n),
					...a(r, t)
				}),
				S = (e, t) => n => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(n, e, t),
					...d(n)
				}),
				N = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: i.T(t),
					screen: i.cb(t),
					...a(t, e)
				}),
				k = e => t => {
					const n = a(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: i.T(t),
						screen: i.cb(t),
						...n
					}
				},
				T = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...a(t, e)
				}),
				w = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...a(t, e)
				}),
				P = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...a(t, e),
					targetSubreddit: i.kb(t)
				}),
				L = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(n, e, t),
					...a(n, e)
				}),
				A = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(n, e, t),
					...a(n, e)
				}),
				D = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(n, e, t),
					...a(n, e)
				}),
				R = (e, t) => n => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(n, e, t),
					...a(n, e)
				}),
				B = (e, t) => n => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(n, e, t),
					...a(n, e)
				}),
				M = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(n, e, t),
					...a(n, e)
				}),
				F = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(n, e, t),
					...a(n, e),
					...d(n)
				}),
				U = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(n, e, t),
					...a(n, e),
					...d(n)
				}),
				W = (e, t) => n => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...a(n, t),
					...d(n)
				}),
				H = (e, t) => n => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...a(n, t),
					...d(n)
				})
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return N
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "r", (function() {
				return P
			})), n.d(t, "o", (function() {
				return L
			})), n.d(t, "s", (function() {
				return A
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "l", (function() {
				return R
			})), n.d(t, "p", (function() {
				return B
			})), n.d(t, "i", (function() {
				return M
			})), n.d(t, "j", (function() {
				return F
			})), n.d(t, "g", (function() {
				return U
			})), n.d(t, "b", (function() {
				return G
			})), n.d(t, "a", (function() {
				return V
			})), n.d(t, "n", (function() {
				return q
			})), n.d(t, "m", (function() {
				return K
			})), n.d(t, "t", (function() {
				return J
			})), n.d(t, "x", (function() {
				return Z
			})), n.d(t, "e", (function() {
				return X
			})), n.d(t, "d", (function() {
				return ee
			})), n.d(t, "v", (function() {
				return re
			})), n.d(t, "u", (function() {
				return se
			})), n.d(t, "w", (function() {
				return oe
			})), n.d(t, "h", (function() {
				return ie
			}));
			var r = n("./node_modules/lodash/pick.js"),
				s = n.n(r),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makePostDraftPageKey/index.ts"),
				a = n("./src/reddit/constants/parameters.ts"),
				c = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				l = n("./src/reddit/helpers/routeKey/index.ts"),
				u = n("./src/reddit/helpers/trackers/postComposer.ts"),
				m = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = n("./src/reddit/models/Comment/index.ts"),
				b = n("./src/reddit/models/Post/index.ts"),
				f = n("./src/reddit/routes/subreddit/index.ts"),
				h = n("./src/reddit/selectors/profile.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/lib/makePostCreationPageKey/index.ts"),
				x = n("./src/lib/makeSearchKey/index.ts"),
				_ = n("./src/reddit/constants/livebar.ts"),
				y = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				E = n("./src/reddit/helpers/trackers/searchResults.ts"),
				j = n("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				C = n("./src/reddit/selectors/postDraft.ts"),
				I = n("./src/reddit/selectors/telemetry.ts"),
				S = n("./src/telemetry/index.ts");
			const N = (e, t, n, r, c, u) => {
					const {
						route: h
					} = e, {
						name: g
					} = h.meta;
					if (!g) return;
					const _ = t.platform.currentPage;
					switch (g) {
						case o.Sb.COMMENTS: {
							const {
								partialCommentId: s,
								partialPostId: o
							} = e.match.params, i = Object(b.z)(o), a = Object(l.a)(e, t, t.posts.models[i]);
							if (!a) return;
							const c = s && Object(p.h)(s),
								{
									sortToUse: u
								} = Object(d.a)(t, i);
							Object(S.a)(D(a, i, c, n, r, u)(t));
							break
						}
						case o.Sb.COMMUNITY_HUBS:
							Object(S.a)(Q()(t));
							break;
						case o.Sb.INDEX:
						case o.Sb.LISTING:
						case o.Sb.MULTIREDDIT:
						case o.Sb.SUBREDDIT: {
							const s = Object(l.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: i,
								queryParams: a,
								path: c
							} = e.match, {
								sort: d = (s.sort ? s.sort : o.bb.HOT)
							} = i, u = a.t, m = c === f.a;
							Object(S.a)(T({
								key: s.listingKey,
								sort: d,
								timerType: n,
								timerMillis: r,
								timeSort: u,
								isPredictionsPage: m
							})(t));
							break
						}
						case o.Sb.TOPIC: {
							const s = Object(l.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: i
							} = e.match, a = s.sort ? s.sort : o.cb, {
								sort: c = a
							} = i;
							Object(S.a)(T({
								key: s.listingKey,
								sort: c,
								timerType: n,
								timerMillis: r
							})(t));
							break
						}
						case o.Sb.PROFILE_OVERVIEW: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							const {
								params: i,
								queryParams: a
							} = e.match, {
								sort: c = o.Jb
							} = i, d = a.t;
							Object(S.a)(w(s, c, n, r, d)(t));
							break
						}
						case o.Sb.PROFILE_POSTS: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							const {
								queryParams: i
							} = e.match, {
								sort: a = o.Jb,
								t: c = o.Kb
							} = i;
							Object(S.a)(P(s, a, n, r, c)(t));
							break
						}
						case o.Sb.PROFILE_COMMENTS: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							const {
								queryParams: i
							} = e.match, {
								sort: a = o.Jb,
								t: c = o.Kb
							} = i;
							Object(S.a)(L(s, a, n, r, c)(t));
							break
						}
						case o.Sb.PROFILE_PRIVATE: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							Object(S.a)(A(s)(r, n)(t));
							break
						}
						case o.Sb.FOLLOWERS:
							W(t);
							break;
						case o.Sb.PROFILE_MODERATION:
							u && B(t, !0);
							break;
						case o.Sb.SETTINGS: {
							const s = e;
							Object(S.a)(Y(n, r)(t)), s.match.params.page === o.jc.Profile && Object(m.l)(t);
							break
						}
						case o.Sb.POST_CREATION:
							if (u && c) {
								const e = Object(v.a)(c);
								Object(S.a)(R(e, n, r)(t))
							}
							break;
						case o.Sb.POST_DRAFT: {
							const {
								draftId: s
							} = e.match.params, o = Object(i.a)(e.match.params);
							if (!o) return;
							H(t, o, s, n, r);
							break
						}
						case o.Sb.SUBREDDIT_WIKI:
							Object(S.a)($(n, r)(t));
							break;
						case o.Sb.COINS:
							Object(S.a)(G(n, r)(t)), Object(S.a)(V()(t));
							break;
						case o.Sb.PREMIUM:
							Object(S.a)(q(n, r)(t)), Object(S.a)(K()(t));
							break;
						case o.Sb.APPEAL:
							Object(S.a)(z(n, r)(t));
							break;
						case o.Sb.INBOX_PAGES:
							u && U(t);
							break;
						case o.Sb.MODERATION_PAGES:
							u && M(t, !0, c ? c.subredditName : null, c ? c.profileName : null);
							break;
						case o.Sb.COLLECTION_COMMENTS:
							u && oe(t, !0);
							break;
						case o.Sb.MODQUEUE_PAGES:
							u && F(t, c ? c.subredditName : null, c ? c.profileName : null);
							break;
						case o.Sb.SUBREDDIT_LEADERBOARD:
							u && Object(S.a)(X()(t));
							break;
						case o.Sb.SEARCH_RESULTS:
							if (u) {
								const o = Object(l.e)(e);
								if (!o) return;
								Object(S.a)(re(o, Object(x.e)(s()(_ && _.queryParams || {}, a.D)), n, r, _)(t))
							}
							break;
						case o.Sb.PUBLIC_ACCESS_NETWORK:
							u && Object(S.a)(J()(t));
							break;
						case o.Sb.GEOTAGGING:
							u && Object(S.a)(ee()(t));
							break;
						case o.Sb.SUBREDDIT_CREATION:
							u && Object(S.a)(Z()(t));
							break;
						case o.Sb.MOD_LISTING:
							u && ie(t, !0)
					}
				},
				k = e => ({
					...I.o(e),
					userPreferences: I.tb(e)
				}),
				T = e => {
					let {
						key: t,
						sort: n,
						timerType: r,
						timerMillis: s,
						timeSort: o,
						flairTitle: i,
						isPredictionsPage: a
					} = e;
					return e => {
						const {
							api: c
						} = e.listings.postOrder, d = !c.error[t] && !c.pending[t], l = a ? {
							paneName: "predictions",
							reason: "predictions_tournament"
						} : {}, u = Object(j.b)(e);
						return {
							source: "global",
							action: "view",
							noun: "screen",
							...k(e),
							actionInfo: I.d(e, {
								success: d,
								...l
							}),
							customFeed: I.m(e),
							listing: I.z(e, t, {
								sort: n,
								sortTime: o
							}),
							subreddit: I.kb(e),
							timer: I.qb(r, s),
							userSubreddit: I.ub(e),
							adblock: I.e(e),
							postFlair: {
								title: i
							},
							predictions: a ? Object(I.R)(e) : void 0,
							...(null == u ? void 0 : u.internalLinkUrl) ? {
								seo: u
							} : void 0
						}
					}
				},
				w = (e, t, n, r, s) => o => {
					const i = I.z(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: a
					} = o.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...k(o),
						actionInfo: I.d(o, {
							success: c
						}),
						profile: I.T(o),
						snoovatar: I.hb(o),
						subreddit: I.kb(o),
						timer: I.qb(n, r),
						userSubreddit: I.ub(o),
						adblock: I.e(o)
					}
				},
				P = (e, t, n, r, s) => o => {
					const i = I.z(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: a
					} = o.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...k(o),
						actionInfo: I.d(o, {
							success: c
						}),
						profile: I.T(o),
						subreddit: I.kb(o),
						timer: I.qb(n, r),
						userSubreddit: I.ub(o),
						adblock: I.e(o)
					}
				},
				L = (e, t, n, r, s) => o => {
					const i = I.W(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: a
					} = o.profileCommentsPage, c = !a.error[e] && !a.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...k(o),
						actionInfo: I.d(o, {
							success: c
						}),
						profile: I.T(o),
						subreddit: I.kb(o),
						timer: I.qb(n, r),
						userSubreddit: I.ub(o),
						adblock: I.e(o)
					}
				},
				A = e => (t, n) => r => {
					const s = !r.profilePrivatePage.api.error[e] && !r.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...k(r),
						actionInfo: I.d(r, {
							success: s
						}),
						profile: I.T(r),
						subreddit: I.kb(r),
						timer: I.qb(n, t),
						userSubreddit: I.ub(r),
						adblock: I.e(r)
					}
				},
				D = (e, t, n, r, s, o) => i => {
					const {
						api: a
					} = i.pages.comments, c = !a.error[e] && !a.pending[e], d = new URLSearchParams(window.location.search).has(_.a), l = Object(j.b)(i), u = {
						source: "global",
						action: "view",
						noun: "screen",
						...k(i),
						actionInfo: I.d(i, {
							success: c,
							...d ? {
								reason: "live_bar"
							} : {}
						}),
						post: I.K(i, t),
						profile: I.T(i),
						subreddit: I.kb(i),
						timer: I.qb(r, s),
						userSubreddit: I.ub(i),
						adblock: I.e(i),
						postEvent: I.N(i, {
							postId: t
						}),
						postCollection: I.M(i, {
							postId: t
						}),
						listing: I.z(i, void 0, {
							sort: o
						})
					};
					return n && (u.comment = I.h({
						state: i,
						commentId: n
					})), (null == l ? void 0 : l.internalLinkUrl) && (u.seo = l), u
				},
				R = (e, t, n) => r => {
					const s = r.creations.api.page.fetched[e],
						o = r.platform.currentPage ? r.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...k(r),
						actionInfo: I.d(r, {
							success: s
						}),
						post: o ? I.K(r, o) : void 0,
						subreddit: I.kb(r),
						timer: I.qb(t, n),
						userSubreddit: I.ub(r),
						adblock: I.e(r)
					}
				},
				B = (e, t) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: I.d(e, {
							success: t
						})
					})
				},
				M = (e, t, n, r) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: I.d(e, {
							success: t
						}),
						profile: I.U(e, Object(h.o)(e, r)),
						subreddit: I.lb(e, Object(g.I)(e, n)),
						userSubreddit: I.ub(e),
						adblock: I.e(e)
					})
				},
				F = (e, t, n) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						profile: I.U(e, Object(h.o)(e, n)),
						subreddit: I.lb(e, Object(g.I)(e, t)),
						userSubreddit: I.ub(e),
						adblock: I.e(e)
					})
				},
				U = e => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: I.d(e)
					})
				},
				W = e => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: I.d(e)
					})
				},
				H = (e, t, n, r, s) => {
					const o = e.creations.api.page.pending[t],
						i = !e.creations.api.page.error[t] && !o && !!n,
						a = Object(C.h)(e, n);
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: I.d(e, {
							success: i
						}),
						subreddit: I.kb(e),
						timer: I.qb(r, s),
						userSubreddit: I.ub(e),
						adblock: I.e(e),
						...a ? Object(u.r)(e, a) : {}
					})
				},
				G = (e, t) => n => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(y.c)(y.a.GoldPayment),
					...k(n),
					timer: I.qb(e, t),
					adblock: I.e(n)
				}),
				V = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				q = (e, t) => n => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(y.c)(y.a.GoldPayment),
					...k(n),
					timer: I.qb(e, t),
					adblock: I.e(n)
				}),
				K = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				z = (e, t) => n => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...k(n),
					timer: I.qb(e, t)
				}),
				Q = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...k(e)
				}),
				Y = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(n),
					timer: I.qb(e, t)
				}),
				J = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: I.kb(e),
					...k(e)
				}),
				Z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				X = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...k(e)
				}),
				$ = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(n),
					customFeed: I.m(n),
					subreddit: I.kb(n),
					timer: I.qb(e, t),
					userSubreddit: I.ub(n),
					adblock: I.e(n)
				}),
				ee = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				te = {
					source: "global",
					action: c.c.VIEW,
					noun: "screen"
				},
				ne = e => !!e && {
					correlationId: Object(y.c)(y.a.SearchResults)
				},
				re = (e, t, n, r, s, i) => a => {
					var c, d;
					let l = !0;
					if (t.type.indexOf(o.ic.Posts) > -1) {
						const {
							api: t
						} = a.listings.listingOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(o.ic.Subreddits) > -1 || t.type.indexOf(o.ic.Users) > -1) {
						const {
							api: t
						} = a.listings.postOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					const u = I.H(a, s);
					return {
						...E.g(a, t),
						...te,
						...I.o(a),
						actionInfo: I.d(a, {
							success: l,
							paneName: u
						}),
						timer: I.qb(n, r),
						search: {
							...I.db(a, t, O.a.SERP, s || void 0),
							sort: null !== (c = t.sort) && void 0 !== c ? c : o.Vb,
							range: null !== (d = t.t) && void 0 !== d ? d : o.Wb
						},
						...ne(i),
						userPreferences: I.fb(a)
					}
				},
				se = (e, t, n) => r => ({
					...I.o(r),
					...te,
					actionInfo: {
						...I.d(r),
						pageType: "search_dropdown"
					},
					search: I.db(r, e, O.a.Typeahead, t || void 0),
					...ne(n),
					userPreferences: I.fb(r)
				}),
				oe = (e, t) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: I.d(e, {
							success: t
						})
					})
				},
				ie = (e, t) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: I.d(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/socialLinks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
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
			const o = e => {
					let {
						socialLinkType: t,
						outboundUrl: n,
						name: r,
						position: s,
						isNew: o,
						currentList: i
					} = e;
					return {
						socialLink: {
							type: t.toLowerCase(),
							url: n,
							name: r,
							position: s,
							isNew: o,
							currentList: i
						}
					}
				},
				i = e => t => ({
					...Object(s.o)(t),
					action: r.c.CLICK,
					noun: "add_social_link",
					source: e
				}),
				a = e => t => ({
					...Object(s.o)(t),
					action: r.c.CLICK,
					noun: "social_link",
					source: "add_social_link",
					...o({
						socialLinkType: e
					})
				}),
				c = e => t => ({
					...Object(s.o)(t),
					action: r.c.CLICK,
					noun: "save",
					source: "add_social_link",
					...o(e)
				}),
				d = e => t => ({
					...Object(s.o)(t),
					action: r.c.CLICK,
					noun: "edit_social_link",
					source: "profile_settings",
					...o(e)
				}),
				l = e => t => ({
					...Object(s.o)(t),
					action: r.c.CLICK,
					noun: "delete_social_link",
					source: "profile_settings",
					...o(e)
				}),
				u = e => t => ({
					...Object(s.o)(t),
					action: r.c.CLICK,
					noun: "social_link",
					source: "profile",
					profile: Object(s.T)(t),
					...o(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
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
				i = (e, t, n) => o => ({
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
				a = () => e => ({
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
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
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
				return v
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "o", (function() {
				return C
			}));
			var r = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...s.o(e),
					subreddit: s.kb(e),
					userSubreddit: s.ub(e)
				}),
				i = () => e => ({
					source: "wiki",
					action: "click",
					noun: "edit",
					...o(e)
				}),
				a = () => e => ({
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
				f = c("remove_wiki_page_contributor"),
				h = c("save_wiki_page_settings"),
				g = c("copy_url"),
				v = c("add_wiki_subreddit_contributor"),
				x = c("remove_wiki_subreddit_contributor"),
				_ = c("ban_wiki_contributor"),
				y = c("unban_wiki_contributor"),
				O = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				E = {
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
						settingValue: E[e]
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
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/clickSourceData/index.ts");

			function i() {
				const e = Object(s.e)(e => e.platform.currentPage),
					[t, n] = Object(r.useState)({});
				return Object(r.useEffect)(() => {
					n(Object(o.b)(e))
				}, [e]), t
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
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/meta.ts");
			const a = "undefined" == typeof document ? function() {
				const e = Object(o.e)(i.j) || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			};
			t.a = a;
			const c = () => {
				const e = a(),
					t = Object(o.e)(i.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
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
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./src/reddit/components/TrackingHelper/index.tsx");
			const s = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var o = n("./src/reddit/helpers/trackers/socialLinks.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n, r, s) => a => {
				const c = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(i.o)(a),
					actionInfo: Object(i.d)(a),
					geo: Object(i.t)(a),
					screen: Object(i.cb)(a),
					subreddit: Object(i.kb)(a),
					outbound: Object(i.G)(a, e, t, r, n)
				};
				return n && (c.comment = Object(i.h)({
					state: a,
					commentId: n
				})), r && (c.post = Object(i.K)(a, r)), s && (c.socialLink = Object(o.g)({
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
						o = Object(u.b)(s);
					Object(c.b)("sendV2EventsData", {
						data: s,
						headers: o
					})
				}
			};

			function b() {
				const e = Object(r.b)(),
					t = p();
				return (n, r, o, i, c) => {
					var d, l;
					if (r && function(e) {
							return !e.startsWith("/") && null == e.match(s)
						}(n)) {
						const s = a(n, r, o, i, c);
						(null === (l = null === (d = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === d ? void 0 : d.serviceWorker) || void 0 === l ? void 0 : l.controller) ? t(s): e(s)
					}
				}
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = r.gb
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/sentry/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/Post/index.tsx");

			function i() {
				const e = Object(s.useContext)(o.c);
				return e || r.c.captureMessage("No post context provided"), e
			}
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
				i = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: Object(o.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || i.a.gold
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
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
				className: Object(o.a)(Object(i.b)("downvote", e.isFilled), c.a.downvote, e.className)
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
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(o.b)("external_link",e.isFilled)} ${e.className}`
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
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
				className: Object(o.a)(Object(i.b)("upvote", e.isFilled), c.a.upvote, e.className)
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
		"./src/reddit/icons/fonts/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");

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
					className: Object(o.a)(t, Object(i.b)(r, n))
				}, c))
			};
			c.displayName = "Icon";
			const d = (e, t) => n => s.a.createElement(c, a({
				name: e
			}, t, n, {
				isFilled: (null == t ? void 0 : t.isFilled) || (null == n ? void 0 : n.isFilled),
				className: Object(o.a)(null == t ? void 0 : t.className, null == n ? void 0 : n.className)
			}));
			t.a = c
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
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(a.a.chevron, e.className),
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
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

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
					className: Object(o.a)(a.a.dropdown, {
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
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				a = n.n(i);
			t.a = Object(r.forwardRef)((e, t) => {
				let {
					className: n,
					isHighlighted: r,
					outlineClassName: i
				} = e;
				return s.a.createElement("svg", {
					className: Object(o.a)(a.a.defaultInactiveState, n),
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
					className: Object(o.a)(a.a.outline, i, {
						[a.a.highlighted]: r
					}),
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
				}))
			})
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
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, s.a.createElement("g", null, s.a.createElement("circle", {
				fill: o.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
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
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
			const m = Object(i.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: r,
					theme: i,
					...d
				} = e, m = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(a.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
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
				i = n("./node_modules/reselect/es/index.js"),
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
				f = Object(i.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.U)(e, t)
				}),
				h = Object(o.b)(f);
			t.a = b(h(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: r,
					dispatch: o,
					fitPageToContent: i,
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
						[m.a.mCanFlexFullWidth]: !i,
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
				i = n("./src/reddit/layout/page/Listing/Content.tsx"),
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
				v = n("./src/reddit/components/BackToSubreddit/index.m.less"),
				x = n.n(v);
			var _ = e => {
					const {
						subredditName: t
					} = e, n = `/${t}`;
					return s.a.createElement(b.a, {
						className: x.a.backToSubreddit,
						to: n
					}, s.a.createElement("div", {
						className: x.a.innerContainer
					}, s.a.createElement(g.a, {
						name: f.a.back,
						className: p()(x.a.content, x.a.back)
					}), s.a.createElement(h.b, {
						className: p()(x.a.content, x.a.subredditIcon)
					}), s.a.createElement("span", {
						className: p()(x.a.content, x.a.title)
					}, t)))
				},
				y = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				O = n("./src/reddit/layout/page/Listing/index.m.less"),
				E = n.n(O);
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
					disableFullscreen: v,
					fitPageToContent: x,
					forcedLayout: O,
					hideOnlyChildMargin: j,
					isCollectionLayout: C,
					isPageSwapped: I,
					maxWidth: S,
					navBar: N,
					redditStyle: k,
					sidebar: T,
					sidebars: w,
					trendingUnit: P,
					subredditId: L
				} = e, A = P ? "28px" : "0", D = I ? {
					marginRight: `${c.p}px`,
					marginTop: A
				} : {
					marginLeft: `${c.p}px`,
					marginTop: A
				}, R = T && s.a.createElement("div", {
					className: Object(a.a)(E.a.sidebar, C ? E.a["m-collectionLayout"] : E.a.defaultLayout),
					style: D
				}, T), B = s.a.createElement(i.a, {
					hideOnlyChildMargin: j,
					className: h,
					disableFullscreen: v,
					fitPageToContent: x,
					forcedLayout: O,
					isCollectionLayout: C
				}, f, n && s.a.createElement(_, {
					subredditName: n
				}), b);
				let M;
				M = w ? s.a.createElement(s.a.Fragment, null, w[0], B, w[1]) : I ? s.a.createElement(s.a.Fragment, null, R, B) : s.a.createElement(s.a.Fragment, null, B, R);
				const F = v ? `${S||l.a+2*c.l}px` : "100%",
					U = Object(r.useContext)(u.a);
				return s.a.createElement(y.a, {
					subredditId: L
				}, s.a.createElement("div", {
					className: Object(a.a)(E.a.outerContainer, d.i, m, {
						[E.a.outerContainerExp]: U
					}),
					ref: p
				}, s.a.createElement(o.a, {
					className: d.h,
					redditStyle: k,
					backgroundColor: t
				}), s.a.createElement("div", {
					className: E.a.innerContainer
				}, N, g, (e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null)(e), s.a.createElement("div", {
					style: {
						maxWidth: F
					}
				}, P), s.a.createElement("div", {
					className: E.a.body,
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
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(a);
			t.a = Object(o.a)(e => s.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
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
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(a);
			t.a = Object(o.a)(e => s.a.createElement("div", {
				className: Object(i.a)(c.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
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
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s, o, i = n("./src/config.ts");

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
				let o = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (s.forEach(n => {
						const s = r[n],
							[i, a] = n.split("x").map(e => parseInt(e));
						(i < o.width && i >= e || a < o.height && a >= t) && (o = {
							height: a,
							width: i,
							url: s
						})
					}), !o.url && s.length) {
					const e = Object.keys(r)[0],
						t = r[e],
						[n, s] = e.split("x").map(e => parseInt(e));
					o = {
						height: s,
						width: n,
						url: t
					}
				}
				return o.url
			}

			function l(e) {
				return e.startsWith("https") ? e : `${i.a.assetPath}/${e}`
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
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages"
			}(s || (s = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(o || (o = {}))
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
				return o
			})), n.d(t, "d", (function() {
				return c
			}));
			var r, s, o, i, a = n("./src/reddit/models/FeedElement/index.ts");

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
			}(o || (o = {})),
			function(e) {
				e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
			}(i || (i = {}))
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
		"./src/reddit/pages/CommunityHubs/EducationUnit.m.less": function(e, t, n) {
			e.exports = {
				educationUnit: "_1HnTSgzlLqrt7OhhYoOSQA",
				heading: "_3P3pYiAVgurf57BTD7uT7",
				snooIcon: "_3z8HIu8SuL3mo0vqxb84S2",
				fromRedditText: "_2e_D254uaRgdjePTvFCJC-",
				content: "_1ZUrUNxcJzqoRI8lCYjsxU",
				unlockText: "Afha5C4PPTjH1mPfPfNkR",
				description: "b8sNlTRLf5NCGoNIY0oe7",
				appExample: "_2o6ZLjeZqCZdMpXGTVepGm",
				qrCode: "_3xZH0ueiI7vZJhrVabfN_f"
			}
		},
		"./src/reddit/pages/CommunityHubs/EducationUnit.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/helpers/trackers/communityHubs.ts"),
				i = n("./src/reddit/hooks/useTracking.ts"),
				a = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				c = n("./src/reddit/pages/CommunityHubs/constants.ts"),
				d = n("./src/reddit/pages/CommunityHubs/EducationUnit.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					prefixedSubredditName: t
				} = e;
				const n = Object(i.a)();
				return Object(r.useEffect)(() => {
					n(Object(o.c)())
				}, [n]), s.a.createElement("div", {
					className: l.a.educationUnit
				}, s.a.createElement("div", {
					className: l.a.heading
				}, s.a.createElement(a.a, {
					className: l.a.snooIcon
				}), s.a.createElement("h6", {
					className: l.a.fromRedditText
				}, u._("From Reddit", null, {
					hk: "455BLm"
				}))), s.a.createElement("div", {
					className: l.a.content
				}, s.a.createElement("div", null, s.a.createElement("h4", {
					className: l.a.unlockText
				}, u._("Unlock more {prefixed subredditName} experiences in the app!", [u._param("prefixed subredditName", t)], {
					hk: "VDLWS"
				})), s.a.createElement("p", {
					className: l.a.description
				}, u._("{prefixed subredditName} is trying out a new beta community format. To check it out and unlock additional community and Q&A feeds, get the Reddit app.", [u._param("prefixed subredditName", t)], {
					hk: "XoVzu"
				}))), s.a.createElement("img", {
					className: l.a.appExample,
					src: `${c.a}app-example.png`
				}), s.a.createElement("img", {
					className: l.a.qrCode,
					src: `${c.a}qr-code.png`
				})))
			}
		},
		"./src/reddit/pages/CommunityHubs/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./src/config.ts");
			const {
				fbt: s
			} = n("./node_modules/fbt/lib/FbtPublic.js"), o = `${r.a.assetPath}/img/community-hubs/`, i = "https://forms.gle/yaTi9Ppnjwt3tNhk6", a = "https://forms.gle/4tkRUUsxa7CmWCin7"
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
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
				const p = Object(i.e)(e => e.subreddits.survey[n]),
					b = Object(i.e)(e => e.subreddits.progressModule[n]),
					f = Object(i.e)(u.a),
					h = f !== d.Me.NewModule;
				return (null === (s = null == b ? void 0 : b.cards) || void 0 === s ? void 0 : s.length) > 0 && h ? o.a.createElement(m, {
					closeModuleOnMount: !!t && t !== l.g.Large,
					subredditId: n,
					progressModule: b
				}) : t !== l.g.Large ? null : (null == p ? void 0 : p.isEligible) && !(null == p ? void 0 : p.response) && (!f || f && r > 100) ? o.a.createElement(c.a, {
					subredditId: n,
					survey: p
				}) : o.a.createElement(a.a, {
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
				i = n("./node_modules/lodash/memoize.js"),
				a = n.n(i),
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
				v = n("./src/lib/constants/index.ts"),
				x = n("./src/lib/extractQueryParams/index.ts"),
				_ = n("./src/lib/isAdHocMultireddit/index.ts"),
				y = n("./src/lib/isFakeSubreddit/index.ts"),
				O = n("./src/lib/listingSort/index.ts"),
				E = n("./src/lib/makeListingKey/index.ts"),
				j = n("./src/lib/objectSelector/index.ts"),
				C = n("./src/lib/promo/withShowSignupUpsell.tsx"),
				I = n("./src/lib/fastdom/index.ts"),
				S = n("./src/lib/performanceTimings/index.tsx"),
				N = n("./src/reddit/actions/preferences.ts"),
				k = n("./src/reddit/actions/search.ts"),
				T = n("./src/reddit/actions/searchQueryId/index.tsx"),
				w = n("./src/reddit/actions/subreddit.ts"),
				P = n("./src/reddit/components/AwardedListingBanner/index.tsx"),
				L = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				A = n("./src/reddit/components/ContentGate/index.tsx"),
				D = n("./src/reddit/components/CreatePostBanner/index.tsx"),
				R = n("./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/async.ts"),
				B = n("./src/reddit/components/Econ/PredictionsPostList/index.tsx"),
				M = n("./src/reddit/components/Econ/Tournament/Sidebar/index.tsx"),
				F = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx"),
				U = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				W = n("./src/reddit/components/EmptySubredditPostList/index.tsx"),
				H = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				G = n("./src/reddit/components/Governance/ClaimPointsBanner/async.ts"),
				V = n("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				q = n("./src/reddit/components/HeaderImage/index.tsx"),
				K = n("./src/reddit/components/HotPotatoEmbed/index.tsx"),
				z = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				Q = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Y = n("./src/reddit/components/JumpToContent/index.tsx"),
				J = n("./src/reddit/components/ListingPostList/index.tsx"),
				Z = n("./src/reddit/components/NewPostPill/index.tsx"),
				X = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				$ = n("./src/reddit/components/RelatedSubredditsCarousel/async.tsx"),
				ee = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				te = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				ne = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				re = n("./src/reddit/components/SubredditSidebar/index.tsx"),
				se = n("./src/reddit/components/TabBadger/index.tsx"),
				oe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = n("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				ae = n("./src/reddit/constants/parameters.ts"),
				ce = n("./src/reddit/constants/postLayout.ts"),
				de = n("./src/reddit/contexts/PageLayer/index.tsx"),
				le = n("./src/reddit/featureFlags/index.ts"),
				ue = n("./src/reddit/helpers/correlationIdTracker.ts"),
				me = n("./src/reddit/helpers/datadome.ts"),
				pe = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				be = n("./src/reddit/helpers/name/index.ts"),
				fe = n("./src/reddit/helpers/resonatePage/index.ts"),
				he = n("./src/reddit/helpers/trackers/postList.ts"),
				ge = n("./src/reddit/helpers/trackers/screenview.ts"),
				ve = n("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				xe = n("./src/reddit/layout/page/Listing/index.tsx"),
				_e = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ye = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Oe = n("./src/reddit/selectors/countrySites.ts"),
				Ee = n("./src/reddit/selectors/discoveryUnit.ts"),
				je = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				Ce = n("./src/reddit/selectors/experiments/communityHubs.ts"),
				Ie = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				Se = n("./src/reddit/selectors/experiments/hotPotato.ts"),
				Ne = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ke = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Te = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				we = n("./src/reddit/selectors/experiments/onboarding.ts"),
				Pe = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Le = n("./src/reddit/selectors/experiments/resonatePilot.ts"),
				Ae = n("./src/reddit/selectors/experiments/topPosts.ts"),
				De = n("./src/reddit/selectors/listings.ts"),
				Re = n("./src/reddit/selectors/meta.ts"),
				Be = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Me = n("./src/reddit/selectors/newPostPill.ts"),
				Fe = n("./src/reddit/selectors/posts.ts"),
				Ue = n("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				We = n("./src/reddit/selectors/searchQueryId.ts"),
				He = n("./src/reddit/selectors/subreddit.ts"),
				Ge = n("./src/reddit/selectors/user.ts"),
				Ve = n("./src/reddit/selectors/userPrefs.ts"),
				qe = n("./src/lib/countrySites/index.ts"),
				Ke = n("./src/reddit/components/Onboarding/Interests/InterestPickerPreview.tsx"),
				ze = n("./src/reddit/constants/countrySites.ts"),
				Qe = n("./src/reddit/helpers/search/searchQueryId.ts"),
				Ye = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Je = n("./src/reddit/pages/CommunityHubs/EducationUnit.tsx"),
				Ze = n("./src/reddit/selectors/onboarding.ts"),
				Xe = n("./src/reddit/selectors/platform.ts"),
				$e = n("./src/reddit/pages/Subreddit/index.m.less"),
				et = n.n($e),
				tt = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");

			function nt() {
				return (nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: rt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), st = Object(r.a)({
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
			}), ot = Object(r.a)({
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
			}), it = 5, at = 3, ct = 6e3, dt = Object(de.v)(), lt = Object(r.a)({
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
			}), ut = Object(j.a)(Object(b.a)((e, t) => {
				let {
					location: n
				} = t;
				return n.search
			}, e => o()([...Object(x.a)(e)]))), mt = e => Object(De.a)(e) || "", pt = Object(b.c)({
				isTopContentDismissed: Ge.Z
			}), bt = Object(b.c)({
				subreddit: (e, t) => Object(He.C)(e, {
					subredditName: t.match.params.subredditName
				})
			}), ft = Object(b.c)({
				isLoggedIn: Ge.R
			}), ht = Object(j.a)((e, t) => {
				const {
					subreddit: n
				} = bt(e, t), {
					subredditName: r
				} = t.match.params;
				if (n) {
					if (e.subreddits.progressModule[n.id]) return !1;
					if (Object(ke.a)(e)) return !1;
					const t = mt(e),
						s = Object(Be.b)(ye.c.config)(e, {
							subredditId: n.id
						}),
						o = Object(Fe.D)(e, t, r, !0),
						i = !Object(De.d)(e, {
							listingKey: t
						});
					if (s && i && o.length <= 1) return !0
				}
				return !1
			}), gt = (e, t) => {
				const n = mt(e),
					r = Object(de.U)(e, t),
					{
						sort: s
					} = _t(e, t);
				return Object(Me.a)(e, {
					layout: r,
					listingKey: n,
					sort: s
				})
			}, vt = Object(b.c)({
				inAwardListingExperiment: Ie.a,
				isPopular: de.H
			}), xt = e => {
				const t = ae.O in e && e[ae.O].toUpperCase();
				if ("string" == typeof t && t in v.oc) return v.oc[t]
			}, _t = Object(j.a)((e, t) => {
				const {
					sort: n,
					subredditName: r,
					countryCode: s,
					languageCode: o
				} = t.match.params, i = ut(e, t), a = Object(y.a)(r, {
					countryCode: s,
					languageCode: o
				}), c = Object(y.c)(r, {
					countryCode: s,
					languageCode: o
				});
				if (n) return Object(O.b)({
					sort: n,
					timeSort: xt(i)
				});
				if (a) return c && Object(je.a)(e) ? Object(O.b)({
					sort: v.bb.BEST
				}) : Object(O.b)({
					sort: v.bb.HOT
				});
				const d = mt(e),
					l = e.listings.postOrder.listingSort[d];
				if (l && !l.hasChanged) return Object(O.d)(l.sort);
				const {
					subreddit: u
				} = bt(e, t);
				if (u) {
					const t = Object(He.G)(e, {
						subredditId: u.id
					});
					return Object(O.d)(t)
				}
				return Object(O.d)(e.user.prefs.sort)
			}), yt = Object(j.a)((e, t) => {
				const {
					subredditName: n
				} = t.match.params;
				return Object(He.cb)(e, {
					subredditName: n
				})
			}), Ot = Object(b.c)({
				currentPage: Xe.b,
				claimablePointsEnabled: le.d.spClaimablePoints,
				countrySiteSettings: Oe.a,
				isBlacklistedTopContentPage: Ee.e,
				listingKey: mt,
				sortParams: _t,
				specialMembershipUpsellsEnabled: le.d.spSpecialMembershipUpsells,
				topContent: yt,
				topContentDiscoveryUnit: e => Object(Ee.b)(e, {
					unitName: _e.a
				}),
				topPostsVariant: Ae.d,
				walletRegistrationBannerEnabled: le.d.spWalletRegistrationBanner,
				nsfwBlockingExperiment: Te.g,
				isNsfwBlurSubreddit: Te.e,
				isAllNsfwPagesEnabled: Te.f,
				searchResultsServerQueryId: e => Object(We.a)(e)
			}), Et = Object(b.c)({
				showCreatePostBanner: ht,
				contentGateInfo: (e, t) => Object(Ge.g)(e, t.match.params.subredditName),
				layout: de.U,
				isRpanDuVisible: (e, t) => {
					let {
						match: n
					} = t;
					return Object(Ue.a)(e, {
						listingName: `r/${n.params.subredditName}`,
						sort: n.params.sort
					})
				},
				rpanInjectionIndex: (e, t) => {
					let {
						match: n
					} = t;
					return Object(Ue.b)(e, {
						listingName: `r/${n.params.subredditName}`
					})
				},
				inResonatePilot: Le.a,
				newPostPillTriggerIdx: gt,
				isReducedAnimation: Ve.d,
				isCommentCountAnimationEnabled: Pe.d,
				isCommunityHubsConsumptionEnabled: (e, t) => {
					let {
						match: n
					} = t;
					var r;
					const s = Object(He.z)(e, {
						subredditName: n.params.subredditName
					});
					return (null === (r = null == s ? void 0 : s.myRedditSettings) || void 0 === r ? void 0 : r.isEnabled) && Object(Ce.a)(e)
				},
				isVoteCountAnimationEnabled: Pe.h,
				isCountAnimShadowTestEnabled: Pe.e,
				isHotPotatoEmbedEnabled: Se.c,
				isBlockingInterstitialEnabled: Ne.b,
				isBlockingInterstitialV2Enabled: Ne.c,
				interestTopicRecommendations: Ze.b,
				reonboardingFlow: we.i
			}), jt = () => Object(b.a)(Ge.lb, ut, pt, bt, (e, t) => {
				let {
					match: n
				} = t;
				return Object(He.z)(e, {
					subredditName: n.params.subredditName
				})
			}, Fe.G, ft, (e, t) => {
				let {
					match: n
				} = t;
				return n.params.subredditName
			}, Re.l, vt, Ot, Et, (e, t, n, r, s, o, i, a, c, d, l, u) => {
				let {
					isTopContentDismissed: m
				} = n, {
					subreddit: p
				} = r, {
					isLoggedIn: b
				} = i, {
					inAwardListingExperiment: f,
					isPopular: h
				} = d, {
					currentPage: g,
					claimablePointsEnabled: v,
					countrySiteSettings: x,
					specialMembershipUpsellsEnabled: _,
					listingKey: y,
					sortParams: {
						sort: O,
						timeSort: E
					},
					topContent: j,
					topContentDiscoveryUnit: C,
					topPostsVariant: I,
					isBlacklistedTopContentPage: S,
					walletRegistrationBannerEnabled: N,
					nsfwBlockingExperiment: k,
					isNsfwBlurSubreddit: T,
					isAllNsfwPagesEnabled: w,
					searchResultsServerQueryId: P
				} = l;
				const L = t && ae.l in t ? t[ae.l].toUpperCase() : c,
					A = !!t.hasOwnProperty("f");
				return {
					currentPage: g,
					countrySort: L,
					claimablePointsEnabled: v,
					countrySiteSettings: x,
					specialMembershipUpsellsEnabled: _,
					inAwardListingExperiment: f,
					isLoggedIn: b,
					isPopular: h,
					listingKey: y,
					renderNSFWContentGate: p && p.isNSFW && !e,
					isTopContentDismissed: m,
					post: o,
					queryParams: t,
					sort: O,
					subreddit: p,
					subredditAboutInfo: s,
					subredditName: a,
					timeSort: E,
					topContent: j,
					topContentDiscoveryUnit: C,
					topPostsVariant: I,
					isBlacklistedTopContentPage: S,
					isFlairFilter: A,
					walletRegistrationBannerEnabled: N,
					nsfwBlockingExperiment: k,
					isNsfwBlurSubreddit: T,
					isAllNsfwPagesEnabled: w,
					searchResultsServerQueryId: P,
					...u
				}
			}), Ct = (e, t) => ({
				onLoadMorePosts: () => {
					e(w.r({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					}))
				},
				onLoadMoreSearchResults: () => e(Object(k.n)([v.ic.Posts])),
				refreshFeed: () => e(w.s({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				setTopContentDismissalPref: () => e(Object(N.H)()),
				redirectToNewSort: () => {
					e(Object(p.b)(`/r/${t.match.params.subredditName}/${v.bb.NEW}/`))
				},
				unsetSearchResultsServerQueryId: () => e(Object(T.c)())
			}), It = Object(m.b)(jt, Ct), St = Object(r.a)({
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
			}), Nt = e => u.a.createElement(St, nt({}, e, {
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
			}), Tt = Object(r.a)({
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

			function wt(e) {
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
			class Lt extends u.a.Component {
				constructor(e) {
					if (super(e), this.renderNewPostPill = e => {
							e === this.props.newPostPillTriggerIdx - 1 && (this.state.isNewPostPillRenderedOnce || (this.setState({
								isNewPostPillRenderedOnce: !0,
								shouldShowNewPostPill: !0
							}), this.props.sendEvent(Object(he.d)(this.props.listingKey)), this.newPostPillTimer = setTimeout(() => {
								this.state.shouldShowNewPostPill && this.setState({
									shouldShowNewPostPill: !1
								})
							}, ct)))
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
						}, v.N), this.onTopContentDismissed = () => {
							this.props.setTopContentDismissalPref()
						}, this.onViewed = (e, t) => {
							const {
								listingKey: n,
								pageLayer: r,
								sort: s,
								timeSort: o
							} = this.props, i = Object(de.R)(r);
							return Object(ge.f)({
								key: n,
								sort: s,
								timerType: t,
								timerMillis: e,
								timeSort: o,
								isPredictionsPage: i
							})
						}, this.noPostsComponent = () => {
							const {
								pageLayer: e,
								subredditName: t,
								sort: n,
								subreddit: r
							} = this.props, s = t.toLowerCase(), o = Object(de.R)(e);
							return u.a.createElement(W.a, {
								isPredictionsPage: o,
								listingName: s,
								sort: n,
								subreddit: r
							})
						}, this.memoizedGetInjectChildren = a()(e => {
							let {
								claimablePointsEnabled: t,
								inAwardListingExperiment: n,
								interestTopicRecommendations: r,
								isCommunityHubsConsumptionEnabled: s,
								isPopular: o,
								isRpanDuVisible: i,
								layout: a,
								listingKey: c,
								reonboardingFlow: d,
								rpanInjectionIndex: l,
								sendEvent: m,
								sort: p,
								specialMembershipUpsellsEnabled: b,
								subreddit: f,
								subredditName: h,
								timeSort: x,
								topPostsVariant: _,
								walletRegistrationBannerEnabled: y
							} = e;
							return () => {
								const e = {},
									O = Object(Ae.c)(_),
									j = a === ce.g.Classic ? et.a.classicChild : a === ce.g.Compact ? et.a.compactChild : et.a.cardChild;
								if (b && f && (e[0] = {
										estHeight: 487,
										id: `newbie-banner-${a}-${c}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(U.a, {
												className: Object(g.a)(t, j)
											})
										}
									}, e[3] = {
										estHeight: 256,
										id: `lfg-banner-${a}-${c}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(F.a, {
												className: Object(g.a)(t, j),
												subredditId: f.id
											})
										}
									}), f && (e[0] = {
										estHeight: 175,
										id: `community-survey-${a}-${c}`,
										render: () => u.a.createElement(tt.a, {
											subredditId: f.id,
											postLayout: a,
											subredditSubscribers: f.subscribers
										})
									}), n && o && p === v.bb.AWARDED && (e[0] = {
										estHeight: 180,
										id: `awardlisting-banner-${a}-${c}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(P.a, {
												className: Object(g.a)(t, j)
											})
										}
									}), y && f && (e[1] = {
										estHeight: 384,
										id: `wallet-registration-${a}-${c}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(V.a, {
												className: Object(g.a)(t, j),
												subredditId: f.id
											})
										}
									}), t && f && (e[2] = {
										estHeight: 268,
										id: `claim-points-${a}-${c}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(G.a, {
												className: Object(g.a)(t, j),
												subredditId: f.id
											})
										}
									}), !o && O && x !== v.oc.WEEK && a === ce.g.Large) {
									const t = Object(E.a)(h, v.bb.TOP, {
										t: v.oc.WEEK
									});
									e[at] = {
										estHeight: 0,
										id: `top-week-posts-${a}-${c}`,
										render(e) {
											let {
												className: n
											} = e;
											return u.a.createElement(Tt, {
												className: n,
												listingKey: t,
												subredditName: h
											})
										}
									}
								}
								if (i) {
									const {
										child: t,
										idx: n
									} = Object(X.a)({
										children: e,
										desiredIndex: l,
										layout: a,
										listingKey: c,
										listingName: `r/${h}`,
										sendEvent: m
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
									} = Object(Ke.a)({
										children: e,
										desiredIdx: n,
										interests: t,
										sendEvent: m,
										variant: d
									});
									e[o] = s
								}
								return s && (e[0] = {
									estHeight: 182,
									id: "community-hub-info",
									render: () => u.a.createElement(Je.a, {
										prefixedSubredditName: Object(be.d)(h)
									})
								}), e
							}
						}, e => {
							let {
								isCommunityHubsConsumptionEnabled: t,
								isRpanDuVisible: n,
								sort: r,
								layout: s,
								listingKey: o,
								timeSort: i,
								subreddit: a
							} = e;
							return `ch:${t}_rpan:${n}_s:${r}_l:${s}_lk${o}_ts:${i}_sr:${null==a?void 0:a.id}`
						}), this.state = {
							shouldShowNewPostPill: !1,
							isNewPostPillRenderedOnce: !1
						}, this.props.searchResultsServerQueryId.searchQueryId) {
						const {
							key: e,
							searchQueryId: t
						} = this.props.searchResultsServerQueryId;
						e && Qe.a.set(Ye.a.SERP, e, t), this.props.unsetSearchResultsServerQueryId()
					}
				}
				componentDidMount() {
					if (I.a.read(() => {
							const e = [Object(me.a)()];
							Object(S.d)(S.c.Subreddit, this.props.isLoggedIn, e)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						v.Rb.includes(e) && Object(fe.a)(e)
					}
				}
				componentDidUpdate(e) {
					if (e.isFlairFilter && !this.props.isFlairFilter && Object(ue.c)(ue.a.SearchResults) && Object(ue.b)(ue.a.SearchResults), this.props.inResonatePilot) {
						const t = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						(e.subredditName ? e.subredditName.toLowerCase() : "") !== t && v.Rb.includes(t) && Object(fe.a)(t)
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
						isAllNsfwPagesEnabled: s,
						isBlacklistedTopContentPage: o,
						isBlockingInterstitialEnabled: i,
						isBlockingInterstitialV2Enabled: a,
						isCommentCountAnimationEnabled: c,
						isCountAnimShadowTestEnabled: d,
						isHotPotatoEmbedEnabled: l,
						isFlairFilter: m,
						isLoggedIn: p,
						isNsfwBlurSubreddit: b,
						isPopular: x,
						isTopContentDismissed: O,
						isVoteCountAnimationEnabled: E,
						layout: j,
						listingKey: C,
						match: I,
						nsfwBlockingExperiment: S,
						pageLayer: N,
						post: k,
						renderNSFWContentGate: T,
						showCreatePostBanner: w,
						showSignupUpsell: P,
						sort: F,
						subreddit: U,
						subredditAboutInfo: W,
						subredditName: G,
						timeSort: V,
						topContent: X,
						topContentDiscoveryUnit: te,
						topPostsVariant: oe
					} = this.props, ae = this.memoizedGetInjectChildren(this.props), le = Object(Oe.b)(r), ue = Object(y.a)(G, {
						countryCode: null == le ? void 0 : le.countryCode,
						languageCode: null == le ? void 0 : le.languageCode
					}), me = G.toLowerCase(), fe = U && U.url ? U.url : Object(qe.d)(`/r/${G}/`, null == le ? void 0 : le.countryCode, null == le ? void 0 : le.languageCode), he = Object(f.a)({
						countryCode: ze.a,
						languageCode: ze.b,
						hardcodedPath: fe,
						permalink: fe,
						subredditName: G
					}, t), ge = {
						listingKey: C,
						listingName: me
					}, ve = Object(Ae.a)(oe), _e = Object(Ae.b)(oe), ye = Object(de.R)(N);
					let Ee;
					ue ? Ee = Object(_.a)(G) ? u.a.createElement(st, ge) : u.a.createElement(kt, ge) : U && (Ee = ye ? u.a.createElement(M.a, {
						subredditId: U.id
					}) : u.a.createElement(re.a, nt({}, ge, {
						className: et.a.sidebar,
						subredditId: U.id,
						subredditName: G,
						topPostsVariant: oe
					})));
					const je = (null == k ? void 0 : k.isNSFW) && s;
					if (((null == U ? void 0 : U.isNSFW) || je) && S === Te.a.NoPreview) return u.a.createElement(ie.a, {
						contentTitle: Object(be.d)(G)
					});
					const Ce = Object(pe.a)(e, T, G);
					if (Ce && !b) return u.a.createElement(A.default, Ce);
					const Ie = j === ce.g.Large,
						Se = x,
						Ne = U ? U.id : void 0,
						ke = !I.params.sort && X && !X.isSubscribed && X.postIds && X.postIds.length >= it && !O && !o && !ve && !_e,
						we = {
							baseUrl: he,
							countrySort: n,
							sort: F,
							subredditId: Ne,
							timeSort: V
						},
						Pe = m ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Le = U && U.subscribers;
					let De;
					const Re = window.URL;
					if (wt(this.props)) {
						const e = new Re(h.a.snoovatarUrl + "/static/client/");
						e.searchParams.set("platform", "desktop"), De = u.a.createElement("iframe", {
							className: Object(g.a)(et.a.af),
							src: e.href
						})
					} else Se ? De = u.a.createElement(Nt, {
						showCardView: this.props.layout === ce.g.Large
					}) : Pt(this.props) && this.props.subreddit && (De = u.a.createElement(ot, {
						baseUrl: h.a.layersUrl,
						subredditId: this.props.subreddit.id
					}));
					const Be = j === ce.g.Large && F !== v.bb.NEW && !ye && !ue,
						Me = this.state.shouldShowNewPostPill && Be,
						Fe = ye ? B.a : J.a,
						Ue = S === Te.a.Blurred && (null == U ? void 0 : U.isNSFW);
					return u.a.createElement(ne.a, {
						subredditId: Ne
					}, u.a.createElement(xe.a, {
						subredditId: Ne,
						className: Object(g.a)(et.a.Container, this.props.className),
						fitPageToContent: !0,
						navBar: !ue && u.a.Children.toArray([u.a.createElement(q.a, {
							headerText: U ? U.name : G,
							disableFullscreen: Ie,
							isTopBannerVariant: !0,
							key: "headerimage",
							shouldBlurHeaderImage: Ue,
							subredditOrProfile: U,
							url: he
						}), u.a.createElement(L.a, {
							layout: j,
							key: "idtopbar",
							subreddit: U || void 0,
							subredditId: Ne,
							subredditName: G,
							subredditUrl: he
						}), l && u.a.createElement(K.a, null), Ne && u.a.createElement($.a, {
							key: "related-subreddit-carousel",
							subredditId: Ne
						})]),
						trendingUnit: De,
						content: u.a.createElement(u.a.Fragment, null, U && U.isQuarantined && u.a.createElement(Q.a, {
							subredditName: G
						}), U && w && u.a.createElement(D.a, {
							subreddit: U,
							listingKey: C,
							listingName: me
						}), Se && u.a.createElement(ee.a, {
							className: et.a.duHeader
						}, rt._("Popular posts", null, {
							hk: "Gfyj2"
						})), ke && u.a.createElement(lt, {
							discoveryUnit: te,
							subredditName: U ? U.name : G,
							topContent: X,
							onCloseClick: this.onTopContentDismissed
						}), !ue && p && !(W && W.userIsBanned) && !ye && u.a.createElement(z.a, {
							subredditName: G
						}), !ye && u.a.createElement(H.a, we), u.a.createElement(Y.a, null), u.a.createElement(se.a, {
							handlePillClick: this.props.refreshFeed,
							listingKey: C,
							subredditName: G,
							subscriberCount: Le
						}), ye && u.a.createElement(R.a, {
							subreddit: U
						}), Me && u.a.createElement(Z.a, {
							onClick: this.onNewPostPillClick,
							subredditName: G
						}), u.a.createElement(Fe, {
							getInjectChildren: ye ? void 0 : ae,
							isCommentCountAnimationEnabled: c,
							isVoteCountAnimationEnabled: E,
							isCountAnimShadowTestEnabled: d,
							listingKey: C,
							listingName: me,
							listingViewed: this.onViewed,
							triggerNewPostPill: Be ? this.renderNewPostPill : void 0,
							noPostsComponent: this.noPostsComponent,
							onLoadMore: Pe,
							onScroll: P,
							inSubredditOrProfile: !ue,
							disablePlaceholder: x && F === v.bb.AWARDED,
							isBlockingInterstitialEnabled: i || a
						})),
						sidebar: Ee
					}))
				}
			}
			t.default = dt(It(Object(oe.c)(Object(C.a)(Object(ve.d)(Lt)))))
		},
		"./src/reddit/reducers/features/recapGame/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/actions/recapGame.ts");
			const s = {
				recapGameState: "off",
				isNightModeOriginal: !1
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.RECAP__GAME_START:
						return {
							...e, recapGameState: "on"
						};
					case r.RECAP__GAME_TOGGLED:
						const n = "on" === e.recapGameState ? "off" : "on";
						return {
							...e, recapGameState: n
						};
					case r.RECAP__GAME_CLOSE:
						return {
							...e, recapGameState: "off"
						};
					case r.RECAP__SET_ORIGINAL_NIGHT_MODE:
						return {
							...e, isNightModeOriginal: t.payload
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/subredditModeration/constants.ts");
			var o = function() {
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
				i = n("./src/reddit/models/SubredditModeration/index.ts");
			const a = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.g: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(i.e)(n, r);
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
							} = t.payload, s = Object(i.e)(n, r);
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
					error: o,
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
						} = t.payload, s = Object(i.e)(r, n);
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
			var v = function() {
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
				x = Object(r.c)({
					error: g,
					pending: v
				});
			var _ = function() {
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
					api: x,
					result: _
				});
			const O = {};
			var E = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
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
					userOrder: E
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
							} = t.payload, s = Object(i.f)(n, r);
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
							} = t.payload, s = Object(i.f)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				N = Object(r.c)({
					error: C,
					pending: S
				});
			const k = {};
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.m: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, s = Object(i.f)(r, n);
						return {
							...e,
							[s]: !0
						}
					}
					default:
						return e
				}
			};
			const w = {};
			var P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
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
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.m: {
							const {
								subredditId: n,
								approvedTalkHosts: r,
								forceRefresh: s
							} = t.payload, o = {
								[n]: [...s ? [] : e[n] || [], ...r]
							};
							return Object(b.merge)(e, o)
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
				D = Object(r.c)({
					api: N,
					fetchedTokens: T,
					loadMore: P,
					models: A
				}),
				R = n("./src/reddit/actions/grantUserFlair/constants.ts");
			var B = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.g:
					case R.i:
						return null;
					case R.f:
						return t.payload;
					default:
						return e
				}
			};
			var M = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.i:
							return !0;
						case R.g:
						case R.f:
							return !1;
						default:
							return e
					}
				},
				F = Object(r.c)({
					error: B,
					pending: M
				}),
				U = n("./node_modules/lodash/merge.js"),
				W = n.n(U),
				H = n("./node_modules/lodash/omit.js"),
				G = n.n(H);
			const V = {};
			var q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.g:
					case R.k: {
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
					case R.c: {
						const {
							subredditId: n,
							userName: r
						} = t.payload, s = G()(e[n], r);
						return {
							...e,
							[n]: s
						}
					}
					case R.a:
					case R.b:
					case R.h:
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
					case R.g: {
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
			var Q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case R.l:
					case R.k:
						return null;
					case R.j:
						return t.payload;
					default:
						return e
				}
			};
			var Y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.l:
							return !0;
						case R.k:
						case R.j:
							return !1;
						default:
							return e
					}
				},
				J = Object(r.c)({
					error: Q,
					pending: Y
				});
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case R.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case R.c: {
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
						case R.g: {
							const {
								key: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case R.a: {
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
						case R.c: {
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
					api: F,
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
			const oe = {};
			var ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
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
							const o = {
								[r]: s
							};
							return W()({
								...e
							}, o)
						}
						default:
							return e
					}
				},
				de = Object(r.c)({
					itemOrder: ie,
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
			const he = [];
			var ge = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
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
					moderators: ge,
					startCursor: ve
				});
			const _e = {};
			var ye = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
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
			var Ee = function() {
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
			const je = {};
			var Ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : je,
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
				Ie = Object(r.c)({
					error: Ee,
					pending: Ce
				});
			const Se = {};
			var Ne = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
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
							} = t.payload, o = e[n][s].filter(e => e !== r);
							return Object(b.setIn)(e, [n, s], o)
						}
						default:
							return e
					}
				},
				ke = Object(r.c)({
					data: Ne,
					api: Ie
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
			var we = function() {
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
				Pe = Object(r.c)({
					error: Te,
					pending: we
				});
			const Le = {};
			var Ae = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Le,
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
							o = {
								[r]: s
							};
						return Object(b.merge)(e, o)
					}
					default:
						return e
				}
			};
			const De = {};
			var Re = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De,
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
								o = [...e[r] || [], ...s];
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Be = Object(r.c)({
					api: Pe,
					models: Ae,
					userOrder: Re
				});
			const Me = {};
			var Fe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.L: {
						const {
							subredditId: n,
							response: r
						} = t.payload, {
							invitePending: s
						} = r, o = {
							[n]: s
						};
						return Object(b.merge)(e, o)
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
			const Ue = {};
			var We = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue,
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
			const He = {};
			var Ge = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He,
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
			const Ve = {};
			var qe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ve,
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
								permissions: o
							} = n;
						return e[r] && e[r][s] ? Object(b.setIn)(e, [r, s, "modPermissions"], o) : e
					}
					default:
						return e
				}
			};
			var Ke = function() {
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
			var ze = function() {
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
					error: Ke,
					pending: ze
				}),
				Ye = n("./node_modules/lodash/isEqual.js"),
				Je = n.n(Ye);
			var Ze = function() {
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
							return e && e.id === n && !Je()(e.modPermissions, r) ? {
								...e,
								modPermissions: r
							} : e
						}
						default:
							return e
					}
				},
				Xe = Object(r.c)({
					api: Qe,
					result: Ze
				});
			const $e = {};
			var et = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e,
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
			const tt = {};
			var nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt,
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
				rt = Object(r.c)({
					error: et,
					pending: nt
				});
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const st = {};
			var ot = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : st,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.L: {
							const {
								response: n,
								subredditId: r,
								key: s
							} = t.payload, {
								moderatorIds: o
							} = n;
							return Object(b.merge)(e, {
								[r]: {
									[s]: o
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
								const o = e[n][t].filter(e => e !== r);
								s[t] = o
							}), Object(b.set)(e, n, s)
						}
						default:
							return e
					}
				},
				it = Object(r.c)({
					data: ot,
					api: rt
				}),
				at = Object(r.c)({
					editableModerators: ye,
					editableUserOrder: ke,
					invitedModerators: Be,
					invitePending: Fe,
					loadMoreModerators: Ge,
					loadMoreEditableModerators: We,
					models: qe,
					search: Xe,
					userOrder: it
				}),
				ct = n("./src/reddit/actions/bulkActions/constants.ts");
			var dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.c:
						case ct.b:
							return null;
						case ct.a:
							return t.payload;
						default:
							return e
					}
				},
				lt = n("./src/reddit/actions/modQueue/constants.ts");
			var ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.c:
							return !0;
						case ct.b:
						case ct.a:
						case lt.x:
						case lt.w:
							return !1;
						default:
							return e
					}
				},
				mt = Object(r.c)({
					error: dt,
					pending: ut
				});
			const pt = {};
			var bt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.a: {
							const {
								ids: n
							} = t.payload, r = {};
							return n.forEach(e => r[e] = !0), {
								...e,
								...r
							}
						}
						case lt.d: {
							const {
								ids: n
							} = t.payload;
							return G()(e, n)
						}
						case lt.c: {
							const {
								ids: e
							} = t.payload, n = {};
							return e.forEach(e => n[e] = !0), n
						}
						default:
							return e
					}
				},
				ft = n("./src/reddit/models/ModQueue/index.ts");
			const ht = {};
			var gt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ht,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ct.b: {
							const {
								operation: e,
								ids: n
							} = t.payload;
							return "approve" === e ? ht : {
								[ft.c[e]]: n
							}
						}
						default:
							return e
					}
				},
				vt = Object(r.c)({
					api: mt,
					selectedItems: bt,
					undoLastAction: gt
				});
			var xt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.g:
					case lt.f:
						return null;
					case lt.e:
						return t.payload;
					default:
						return e
				}
			};
			var _t = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.g:
							return !0;
						case lt.f:
						case lt.e:
							return !1;
						default:
							return e
					}
				},
				yt = Object(r.c)({
					error: xt,
					pending: _t
				});
			const Ot = {};
			var Et = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.f: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const jt = {};
			var Ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.f: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				It = Object(r.c)({
					api: yt,
					itemOrder: Et,
					loadMore: Ct
				}),
				St = n("./src/reddit/actions/pages/modListing/constants.ts");
			var Nt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case St.e: {
						const n = t.payload,
							{
								moderatingSubreddits: r
							} = n;
						return r ? null : e
					}
					case lt.i:
					case lt.f:
					case lt.r:
					case lt.u:
					case lt.A: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: n
						} = e;
						return n
					}
					case lt.n: {
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
			const kt = [];
			var Tt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.i:
					case lt.f:
					case lt.r:
					case lt.u:
					case lt.A: {
						const {
							response: e
						} = t.payload, {
							listingOrder: n
						} = e;
						return n
					}
					case lt.n: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return [...e, ...r]
					}
					case St.e: {
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
			var wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.b:
						return !0;
					default:
						return e
				}
			};
			var Pt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.n:
							return !0;
						case lt.b:
							return !1;
						default:
							return e
					}
				},
				Lt = Object(r.c)({
					after: Nt,
					data: Tt,
					loaded: wt,
					pending: Pt
				});
			var At = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.j:
					case lt.i:
						return null;
					case lt.h:
						return t.payload;
					default:
						return e
				}
			};
			var Dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.j:
							return !0;
						case lt.i:
						case lt.h:
							return !1;
						default:
							return e
					}
				},
				Rt = Object(r.c)({
					error: At,
					pending: Dt
				});
			const Bt = {};
			var Mt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.i: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Ft = {};
			var Ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ft,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.i: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Wt = Object(r.c)({
					api: Rt,
					itemOrder: Mt,
					loadMore: Ut
				});
			var Ht = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.s:
					case lt.r:
						return null;
					case lt.q:
						return t.payload;
					default:
						return e
				}
			};
			var Gt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.s:
							return !0;
						case lt.r:
						case lt.q:
							return !1;
						default:
							return e
					}
				},
				Vt = Object(r.c)({
					error: Ht,
					pending: Gt
				});
			const qt = {};
			var Kt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.r: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const zt = {};
			var Qt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.r: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Yt = Object(r.c)({
					api: Vt,
					itemOrder: Kt,
					loadMore: Qt
				});
			var Jt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.v:
					case lt.u:
						return null;
					case lt.t:
						return t.payload;
					default:
						return e
				}
			};
			var Zt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.v:
							return !0;
						case lt.u:
						case lt.t:
							return !1;
						default:
							return e
					}
				},
				Xt = Object(r.c)({
					error: Jt,
					pending: Zt
				});
			const $t = {};
			var en = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $t,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.u: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const tn = {};
			var nn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.u: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				rn = Object(r.c)({
					api: Xt,
					itemOrder: en,
					loadMore: nn
				});
			var sn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.B:
					case lt.A:
						return null;
					case lt.z:
						return t.payload;
					default:
						return e
				}
			};
			var on = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.B:
							return !0;
						case lt.A:
						case lt.z:
							return !1;
						default:
							return e
					}
				},
				an = Object(r.c)({
					error: sn,
					pending: on
				});
			const cn = {};
			var dn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.A: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const ln = {};
			var un = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ln,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.A: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				mn = Object(r.c)({
					api: an,
					itemOrder: dn,
					loadMore: un
				}),
				pn = Object(r.c)({
					bulkAction: vt,
					edited: It,
					moderatedCommunitiesOrder: Lt,
					modqueue: Wt,
					reports: Yt,
					spam: rn,
					unmoderated: mn
				});
			var bn = function() {
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
			const fn = {};
			var hn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.Y: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(i.e)(n, r);
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
							} = t.payload, s = Object(i.e)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				gn = Object(r.c)({
					error: bn,
					pending: hn
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
							} = t.payload, s = Object(i.e)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				_n = n("./src/reddit/actions/inContextModeration.ts");
			var yn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _n.b:
						return t.payload;
					default:
						return e
				}
			};
			const On = {};
			var En = function() {
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
			const jn = {};
			var Cn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jn,
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
			var In = function() {
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
			var Sn = function() {
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
					error: In,
					pending: Sn
				});
			var kn = function() {
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
					result: kn
				});
			const wn = {};
			var Pn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wn,
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
				Ln = Object(r.c)({
					api: gn,
					fetchedTokens: xn,
					inContext: yn,
					loadMore: En,
					models: Cn,
					search: Tn,
					userOrder: Pn
				});
			t.a = Object(r.c)({
				approvedSubmitters: j,
				approvedTalkHosts: D,
				flairedUsers: te,
				moderationLog: xe,
				moderators: at,
				modQueue: pn,
				muted: Ln
			})
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
				i = n("./src/reddit/selectors/subreddit.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(r.a)(a.l, a.Ib, (e, t) => {
					let {
						listingName: n
					} = t;
					return -1 === [o.R, "r/popular"].indexOf(n)
				}, (e, t) => {
					let {
						listingName: n
					} = t;
					return Object(i.I)(e, n.replace(/^r\//, ""))
				}, (e, t, n, r) => {
					if (e && n && r) {
						return t.subreddit[r]
					}
					return t
				}),
				u = Object(r.a)(l, e => {
					if (!e) return !1;
					if (!e.rpanDuDismissalTime) return !1;
					return new Date(e.rpanDuDismissalTime).getTime() > Date.now() - 30 * s.E
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
				}, (e, t, n, r, i, a) => {
					return ![o.R, "r/popular"].includes(n) && (a !== s.bb.AWARDED && (!!e && (!i.isPermanentlyCanceled && (!t && (!!r && r.show_discovery_unit)))))
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
				return O
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "i", (function() {
				return N
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "h", (function() {
				return L
			})), n.d(t, "k", (function() {
				return A
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "a", (function() {
				return F
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "b", (function() {
				return W
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "g", (function() {
				return G
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = n("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = n.n(d)()(e => Object(s.a)(Object(r.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				f = e => e.publicAccessNetwork.history,
				h = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				v = e => e.publicAccessNetwork.hlsStreams,
				x = Object(r.a)(v, e => e.ended),
				_ = Object(r.a)(v, e => e.removed),
				y = Object(r.a)(p, x, _, (e, t, n) => {
					const r = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const r = n.stream.state,
							s = B(r, i.a.ENDED) ? i.a.ENDED : r,
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
							s = B(r, i.a.ENDED) ? i.a.ENDED : r,
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
				O = (e, t) => {
					return y(e)[Object(o.g)(t)]
				},
				E = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n
				}, (e, t) => u(t.listingName)(e, t), y, b, a.h, (e, t, n, r, s) => {
					const a = [];
					if (e) {
						const t = Object(o.g)(e);
						n[t] && a.push(t)
					}
					const c = a.concat(t),
						d = [...new Set(c)],
						l = new Set([...r, ...s]);
					return d.filter(e => {
						const t = n[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== i.a.KILLED && t.stream.state !== i.a.PURGED
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
					return E(e, {
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
				I = Object(r.a)(g, (e, t) => {
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
				S = Object(r.a)((e, t) => {
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
				}, f, (e, t, n, r) => {
					if (!n.length) return;
					const s = n.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = s.find(e => e.stream.state === i.a.IS_LIVE);
					if (o) return o.post.id;
					const a = s.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				N = Object(s.a)(Object(r.a)(S, y, (e, t) => e ? t[e] : void 0)),
				k = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? Object(o.g)(n) : void 0
				}, S, b, a.h, (e, t) => {
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
				T = Object(r.a)(h, g, I, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				w = Object(r.a)(h, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				P = Object(s.a)(Object(r.a)(k, y, (e, t) => e ? t[e] : void 0)),
				L = Object(s.a)(Object(r.a)(T, y, (e, t) => e ? t[e] : void 0)),
				A = Object(s.a)(Object(r.a)(w, y, (e, t) => e ? t[e] : void 0)),
				D = (Object(s.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, y, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => ({
					...t[n],
					preloadedPreviewUrl: e[n]
				})))), Object(r.a)(k, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				R = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: n
					} = t;
					return n ? O(e, n) : void 0
				}, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function B(e, t) {
				const n = {
					[i.a.NOT_STARTED]: 0,
					[i.a.PUBLISHED]: 1,
					[i.a.IS_LIVE]: 2,
					[i.a.DISCONNECTED]: 2,
					[i.a.ENDED]: 3,
					[i.a.KILLED]: 4,
					[i.a.PURGED]: 4
				};
				return n[t] >= n[e]
			}
			const M = Object(r.a)(k, f, (e, t) => e && t.timestamps[e] || 0);
			var F;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(F || (F = {}));
			const U = Object(r.a)(k, y, m.b, (e, t, n) => {
					if (n) return F.INTRO;
					const r = e && t[e];
					if (!r) return F.UNAVAILABLE;
					const s = r.stream.state;
					return s === i.a.IS_LIVE || s === i.a.DISCONNECTED ? F.LIVE : s === i.a.ENDED && r.stream.vod_accessible ? F.VOD : F.UNAVAILABLE
				}),
				W = Object(r.a)(P, U, m.b, c.b, c.o, (e, t, n, r, s) => n ? r : e ? t === F.LIVE || t === F.VOD ? e.stream.hls_url : s : void 0),
				H = Object(r.a)(P, U, M, (e, t, n) => e ? t === F.LIVE ? e.broadcast_time : t === F.VOD && n < e.broadcast_time ? n : 0 : 0),
				G = (e, t) => {
					const n = p(e);
					return !!n && n[t] && n[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				a = Object(r.a)(i, o.n, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(i, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + s.a > Date.now()
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "i", (function() {
				return m
			}));
			var r = n("./node_modules/reselect/es/index.js");
			const s = e => e.appBadges.badges,
				o = Object(r.a)(s, e => {
					var t;
					return (null === (t = e.chatUnreadMessages) || void 0 === t ? void 0 : t.count) || 0
				}),
				i = Object(r.a)(s, e => e && e.chatRooms && e.chatRooms.count || 0),
				a = Object(r.a)(s, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				c = Object(r.a)(o, s, (e, t) => {
					var n;
					return 0 === e && !!(null === (n = t.chatHasNewMessages) || void 0 === n ? void 0 : n.isShowing)
				}),
				d = Object(r.a)(s, e => e && e.activityTab && e.activityTab.count || 0),
				l = Object(r.a)(s, e => e && e.messageTab && e.messageTab.count || 0),
				u = Object(r.a)(d, l, (e, t) => e + t),
				m = Object(r.a)(o, u, (e, t) => e + t)
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/constants/postLayout.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => s.e[Object(o.U)(e, {})] === s.d.Card,
				c = e => Object(i.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: r.qb
				}) === r.Qc.Treatment
		},
		"./src/reddit/selectors/experiments/communityHubs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.dc
				}) === r.Kd
			}
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = e => {
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: o.R,
						experimentName: r.qd
					});
					return !(!t || Object(r.rg)(t))
				},
				a = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: o.R,
						experimentName: r.qd
					}) === r.Od.ListingEnabled
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
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => !0,
				u = Object(r.a)(d.Y, d.P, (e, t) => !(e || t)),
				m = e => {
					if (!u(e)) return;
					const t = Object(i.c)(e, {
						experimentEligibilitySelector: l,
						experimentName: o.de,
						expEventOverride: !1
					});
					return null == t ? void 0 : t.toLocaleLowerCase()
				},
				p = e => {
					var t;
					const n = m(e);
					if (!n) return !1;
					let r = Object(c.s)(e),
						o = Object(c.d)(e);
					if ("undefined" != typeof window && !o) {
						const e = Object(a.a)("subreddit", window.location.href);
						(o = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (r = s.Sb.SUBREDDIT)
					}
					if (o && n) {
						const e = (null == o ? void 0 : o.toLocaleLowerCase()) === n;
						return r === s.Sb.SUBREDDIT && e
					}
					return !1
				},
				b = e => !!m(e) && Object(i.c)(e, {
					experimentEligibilitySelector: u,
					experimentName: o.ee,
					expEventOverride: !1
				}) !== o.fe.Readonly
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
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const a = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.Qb,
					experimentEligibilitySelector: i.e
				}), e => e === s.X.Enabled),
				c = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.Rb,
					experimentEligibilitySelector: i.e
				}), e => e === s.Y.Enabled),
				d = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.Sb,
					experimentEligibilitySelector: i.e
				}), e => e === s.Z.Enabled),
				l = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.Tb,
					experimentEligibilitySelector: i.e
				}), e => e === s.ab.Enabled),
				u = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.Vb,
					experimentEligibilitySelector: i.e
				}), e => e === s.cb.Enabled),
				m = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.Ub,
					experimentEligibilitySelector: i.e
				}), e => e === s.bb.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(s.c)(e, {
				experimentName: r.De,
				experimentEligibilitySelector: s.a
			}) === r.Le.Enabled
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
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/constants/posts.ts"),
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
					if (Object(p.O)(e)) return h(e);
					const n = Object(m.M)(e, {
						identifier: {
							id: t,
							type: i.a.SUBREDDIT
						}
					});
					if (!n || !n.created) return;
					const r = n.created;
					return r ? r * s.Xb < 1639443600180 ? void 0 : h(e) : void 0
				},
				h = Object(r.a)(e => Object(a.c)(e, {
					experimentName: o.Ee,
					experimentEligibilitySelector: c.e
				}), d.a)
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
				o = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/presence.ts"),
				a = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.k
					});
					return t === r.o.VoteCountOnly || t === r.o.CommentCountOnly || t === r.o.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.k
					});
					return t === r.o.VoteCountOnly || t === r.o.VoteAndCommentCount
				},
				u = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.k
					});
					return t === r.o.CommentCountOnly || t === r.o.VoteAndCommentCount
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
					if (Object(a.d)(e) || !s || s.isSponsored || s.isScoreHidden || s.score >= c || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: r.k
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.o.VoteCountOnly || l === r.o.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const s = e.posts.models[n];
					if (Object(a.d)(e) || !s || s.isSponsored || s.numComments >= c || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: r.k
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.o.CommentCountOnly || l === r.o.VoteAndCommentCount
				},
				f = e => {
					if (Object(i.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.yc
					}) === r.bd.Enabled
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
				return v
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "m", (function() {
				return j
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				c = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				d = n("./src/reddit/selectors/subreddit.ts");
			const l = 3,
				u = e => m(e) ? 1 : (p(e), .5),
				m = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: i.a,
						experimentName: o.Pe
					}) === o.Re.ContentMatch
				},
				p = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: i.a,
						experimentName: o.Pe
					}) === o.Re.ConfidenceAndSuccess
				},
				b = e => {
					const t = Object(i.c)(e, {
						experimentEligibilitySelector: i.a,
						experimentName: o.Pe
					});
					return t === o.Re.ContentMatch || t === o.Re.ConfidenceAndSuccess || t === o.S.Control1 || t === o.S.Control2
				},
				f = e => {
					const t = Object(i.c)(e, {
						experimentEligibilitySelector: i.a,
						experimentName: o.Pe
					});
					return t === o.S.Control1 || t === o.S.Control2
				},
				h = e => {
					const t = Object(i.c)(e, {
						experimentEligibilitySelector: i.a,
						experimentName: o.Pe
					});
					return t === o.Re.ContentMatch || t === o.Re.ConfidenceAndSuccess
				},
				g = e => e.creations.subredditRec.api.pending,
				v = e => e.creations.subredditRec.api.error,
				x = e => {
					return e.creations.subredditRec.order.length > 0
				},
				_ = e => {
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
				O = e => {
					if (!(e.creations.formData.submissionType === r.bc.POST)) return "";
					const t = e.creations.formState.editorMode === a.i.RICH_TEXT || null === e.creations.formState.editorMode,
						n = e.creations.formState.editorMode === a.i.MARKDOWN;
					if (t) {
						const t = e.creations.formData.body.rte;
						return s.a.getRawText(t, " ") || ""
					}
					return n && e.creations.formData.body.markdown || ""
				},
				E = e => {
					return e.creations.formData.submissionType === r.bc.LINK_ONLY && e.creations.formData.body.link || ""
				},
				j = e => b(e) && (!v(e) || v(e) && y(e)) && (e => {
					const t = e.creations.formData.title,
						n = E(e),
						r = O(e);
					return !!(t || n || r)
				})(e) && (e.creations.formData.submissionType === r.bc.POST || e.creations.formData.submissionType === r.bc.LINK_ONLY || e.creations.formData.submissionType === r.bc.CROSSPOST)
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
				}) === r.Kd
			}
		},
		"./src/reddit/selectors/experiments/recapLeadUpGame.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				a = n("./node_modules/reselect/es/index.js");
			const c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.mf
					}) === r.Kd
				},
				d = Object(a.a)(i.R, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(s.B)(n)
				}, (e, t) => !e && t),
				l = (e, t) => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: e => d(e, t),
						experimentName: r.nf
					}) === r.Kd
				}
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/meta.ts");
			const i = e => Object(s.c)(e, {
				experimentEligibilitySelector: e => !Object(o.d)(e) && "US" === Object(o.b)(e),
				experimentName: r.rf
			}) === r.yf.Enabled
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
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/meta.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(r.a)(i.h, i.d, a.e, (e, t, n) => !e && !t && !n);

			function d(e, t) {
				return n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[s.Uc.Bottom_cell_dismissible]: e,
						[s.Uc.Bottom_cell_dismissible_immediate_trigger]: e,
						[s.Uc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(s.zb, !0),
				u = d(s.Ab, !0),
				m = d(s.Bb, !0),
				p = d(s.zb, !1),
				b = d(s.Ab, !1),
				f = d(s.Bb, !1)
		},
		"./src/reddit/selectors/newPostPill.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/postLayout.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = (e, t) => Object(i.Q)(e) && ((e, t) => {
				const {
					layout: n,
					sort: i,
					listingKey: a
				} = t, c = (Object(o.z)(e, {
					listingKey: a
				}) || []).length;
				return n === s.g.Large && i !== r.bb.NEW && c >= 20
			})(e, t) ? 10 : -1
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			}));
			const r = e => e.user.notificationPrefs.api.getPreferences.loaded,
				s = e => e.user.notificationPrefs.api.getPreferences.pending,
				o = e => e.user.notificationPrefs.api.setPreferences.pending,
				i = e => e.user.notificationPrefs.preferences,
				a = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, r;
					const s = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						o = null === (n = null == s ? void 0 : s.rows) || void 0 === n ? void 0 : n.byId;
					return o && (null === (r = o[t]) || void 0 === r ? void 0 : r.isEnabled)
				}
		},
		"./src/reddit/selectors/notificationsInbox.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return i
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
				o = n("./node_modules/reselect/es/index.js");
			const i = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				a = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				c = Object(o.a)(a, e => !(!e || !e.hasNextPage)),
				d = Object(o.a)(a, e => e && e.endCursor),
				l = e => e.notificationsInbox && e.notificationsInbox.notifications,
				u = Object(o.a)(l, e => e.slice(0, 5)),
				m = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				p = Object(o.a)(l, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				b = Object(o.a)(l, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				}),
				f = Object(o.a)(s.a, e => e === r.c.NotificationsSupported)
		},
		"./src/reddit/selectors/recapGame.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/recapGame/index.ts");
			Object(r.a)({
				features: {
					recapGame: s.b
				}
			});
			const o = e => {
				var t;
				return (null === (t = e.features) || void 0 === t ? void 0 : t.recapGame) || s.a
			}
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => e.searchQueryId
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
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const o = e => {
					if (i(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(s.c)(e)) || !!t
				},
				i = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== r.Sb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
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
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${r.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(i, `${r.a.redditUrl}${c}`, n)
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
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		},
		"./src/redditGQL/operations/BlockAwarder.json": function(e) {
			e.exports = JSON.parse('{"id":"9769ffbb7031"}')
		},
		"./src/redditGQL/operations/DeleteInboxNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"ce2deb9deef7"}')
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
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"74c23217d06b"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"ca83defc2e15"}')
		},
		"./src/redditGQL/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/redditGQL/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/redditGQL/operations/UserSubredditsNotificationsLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"775bcf2e4ca3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit.e2771f2e455cbd1fa489.js.map