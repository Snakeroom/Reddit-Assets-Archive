// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.16c964c605efd6b3e91c.js
// Retrieved at 11/1/2022, 6:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, t, s) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isPseudoLocale = t.isISOLocaleSupported = t.toISOLocale = t.isoLocaleToR2Language = void 0;
			const i = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
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
				r = {
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
				n = Object.keys(r).reduce((e, t) => (o.has(t) && (e[t] = r[t]), e), {}),
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
				let i = s.toLowerCase();
				const o = t[2];
				return o && (i = `${i}-${o.toUpperCase()}`), i
			};
			const d = new Set(Object.keys(a));
			t.isISOLocaleSupported = e => !!e && d.has(e), t.isPseudoLocale = e => !!e && (e === i.PSEUDO_AUTO || Object.values(i.PseudoLocale).includes(e))
		},
		"./node_modules/deep-diff/index.js": function(e, t, s) {
			var i, o;
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

				function i(e, t) {
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

				function r(e, t) {
					r.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
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
					var i = e.slice((s || t) + 1 || e.length);
					return e.length = t < 0 ? e.length + t : t, e.push.apply(e, i), e
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
						for (var i in e)
							if (e.hasOwnProperty(i)) {
								var o = "[ type: object, key: " + i + ", value hash: " + u(e[i]) + "]";
								t += l(o)
							} return t
					}
					return t + l("[ type: " + s + " ; value: " + e + "]")
				}

				function p(e, t, s, i, d, l, b, m) {
					s = s || [], b = b || [];
					var h = (d = d || []).slice(0);
					if (null != l) {
						if (i) {
							if ("function" == typeof i && i(h, l)) return;
							if ("object" == typeof i) {
								if (i.prefilter && i.prefilter(h, l)) return;
								if (i.normalize) {
									var f = i.normalize(h, l, e, t);
									f && (e = f[0], t = f[1])
								}
							}
						}
						h.push(l)
					}
					"regexp" === c(e) && "regexp" === c(t) && (e = e.toString(), t = t.toString());
					var g, y, O, v, P = typeof e,
						j = typeof t,
						_ = "undefined" !== P || b && b.length > 0 && b[b.length - 1].lhs && Object.getOwnPropertyDescriptor(b[b.length - 1].lhs, l),
						E = "undefined" !== j || b && b.length > 0 && b[b.length - 1].rhs && Object.getOwnPropertyDescriptor(b[b.length - 1].rhs, l);
					if (!_ && E) s.push(new r(h, t));
					else if (!E && _) s.push(new n(h, e));
					else if (c(e) !== c(t)) s.push(new o(h, e, t));
					else if ("date" === c(e) && e - t != 0) s.push(new o(h, e, t));
					else if ("object" === P && null !== e && null !== t) {
						for (g = b.length - 1; g > -1; --g)
							if (b[g].lhs === e) {
								v = !0;
								break
							} if (v) e !== t && s.push(new o(h, e, t));
						else {
							if (b.push({
									lhs: e,
									rhs: t
								}), Array.isArray(e)) {
								for (m && (e.sort((function(e, t) {
										return u(e) - u(t)
									})), t.sort((function(e, t) {
										return u(e) - u(t)
									}))), g = t.length - 1, y = e.length - 1; g > y;) s.push(new a(h, g, new r(void 0, t[g--])));
								for (; y > g;) s.push(new a(h, y, new n(void 0, e[y--])));
								for (; g >= 0; --g) p(e[g], t[g], s, i, h, g, b, m)
							} else {
								var w = Object.keys(e),
									T = Object.keys(t);
								for (g = 0; g < w.length; ++g) O = w[g], (v = T.indexOf(O)) >= 0 ? (p(e[O], t[O], s, i, h, O, b, m), T[v] = null) : p(e[O], void 0, s, i, h, O, b, m);
								for (g = 0; g < T.length; ++g)(O = T[g]) && p(void 0, t[O], s, i, h, O, b, m)
							}
							b.length = b.length - 1
						}
					} else e !== t && ("number" === P && isNaN(e) && isNaN(t) || s.push(new o(h, e, t)))
				}

				function b(e, t, s, i, o) {
					var r = [];
					if (p(e, t, r, i, null, null, null, o), s)
						for (var n = 0; n < r.length; ++n) s(r[n]);
					return r
				}

				function m(e, t, s, i) {
					var o = b(e, t, i ? function(e) {
						e && i.push(e)
					} : void 0, s);
					return i || (o.length ? o : void 0)
				}

				function h(e, s, i) {
					if (void 0 === i && s && ~t.indexOf(s.kind) && (i = s), e && i && i.kind) {
						for (var o = e, r = -1, n = i.path ? i.path.length - 1 : 0; ++r < n;) void 0 === o[i.path[r]] && (o[i.path[r]] = void 0 !== i.path[r + 1] && "number" == typeof i.path[r + 1] ? [] : {}), o = o[i.path[r]];
						switch (i.kind) {
							case "A":
								i.path && void 0 === o[i.path[r]] && (o[i.path[r]] = []),
									function e(t, s, i) {
										if (i.path && i.path.length) {
											var o, r = t[s],
												n = i.path.length - 1;
											for (o = 0; o < n; o++) r = r[i.path[o]];
											switch (i.kind) {
												case "A":
													e(r[i.path[o]], i.index, i.item);
													break;
												case "D":
													delete r[i.path[o]];
													break;
												case "E":
												case "N":
													r[i.path[o]] = i.rhs
											}
										} else switch (i.kind) {
											case "A":
												e(t[s], i.index, i.item);
												break;
											case "D":
												t = d(t, s);
												break;
											case "E":
											case "N":
												t[s] = i.rhs
										}
										return t
									}(i.path ? o[i.path[r]] : o, i.index, i.item);
								break;
							case "D":
								delete o[i.path[r]];
								break;
							case "E":
							case "N":
								o[i.path[r]] = i.rhs
						}
					}
				}
				return s(o, i), s(r, i), s(n, i), s(a, i), Object.defineProperties(m, {
					diff: {
						value: m,
						enumerable: !0
					},
					orderIndependentDiff: {
						value: function(e, t, s, i) {
							var o = i ? function(e) {
									e && i.push(e)
								} : void 0,
								r = b(e, t, o, s, !0);
							return i || (r.length ? r : void 0)
						},
						enumerable: !0
					},
					observableDiff: {
						value: b,
						enumerable: !0
					},
					orderIndependentObservableDiff: {
						value: function(e, t, s, i, o, r, n) {
							return p(e, t, s, i, o, r, n, !0)
						},
						enumerable: !0
					},
					orderIndepHash: {
						value: u,
						enumerable: !0
					},
					applyDiff: {
						value: function(e, t, s) {
							e && t && b(e, t, (function(i) {
								s && !s(e, t, i) || h(e, t, i)
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
								var i, o, r = e;
								for (o = s.path.length - 1, i = 0; i < o; i++) void 0 === r[s.path[i]] && (r[s.path[i]] = {}), r = r[s.path[i]];
								switch (s.kind) {
									case "A":
										! function e(t, s, i) {
											if (i.path && i.path.length) {
												var o, r = t[s],
													n = i.path.length - 1;
												for (o = 0; o < n; o++) r = r[i.path[o]];
												switch (i.kind) {
													case "A":
														e(r[i.path[o]], i.index, i.item);
														break;
													case "D":
													case "E":
														r[i.path[o]] = i.lhs;
														break;
													case "N":
														delete r[i.path[o]]
												}
											} else switch (i.kind) {
												case "A":
													e(t[s], i.index, i.item);
													break;
												case "D":
												case "E":
													t[s] = i.lhs;
													break;
												case "N":
													t = d(t, s)
											}
											return t
										}(r[s.path[i]], s.index, s.item);
										break;
									case "D":
									case "E":
										r[s.path[i]] = s.lhs;
										break;
									case "N":
										delete r[s.path[i]]
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
			}(this), void 0 === (i = function() {
				return o
			}.call(t, s, t, e)) || (e.exports = i)
		},
		"./node_modules/lodash/findLastIndex.js": function(e, t, s) {
			var i = s("./node_modules/lodash/_baseFindIndex.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				n = Math.max,
				a = Math.min;
			e.exports = function(e, t, s) {
				var d = null == e ? 0 : e.length;
				if (!d) return -1;
				var c = d - 1;
				return void 0 !== s && (c = r(s), c = s < 0 ? n(d + c, 0) : a(c, d - 1)), i(e, o(t, 3), c, !0)
			}
		},
		"./node_modules/lodash/uniqWith.js": function(e, t, s) {
			var i = s("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, t) {
				return t = "function" == typeof t ? t : void 0, e && e.length ? i(e, void 0, t) : []
			}
		},
		"./node_modules/lodash/xor.js": function(e, t, s) {
			var i = s("./node_modules/lodash/_arrayFilter.js"),
				o = s("./node_modules/lodash/_baseRest.js"),
				r = s("./node_modules/lodash/_baseXor.js"),
				n = s("./node_modules/lodash/isArrayLikeObject.js"),
				a = o((function(e) {
					return r(i(e, n))
				}));
			e.exports = a
		},
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(i.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/brcast/dist/brcast.es.js");
			const o = () => "undefined" != typeof document,
				r = () => o() && "visible" === document.visibilityState,
				n = () => ({
					documentInFocus: r()
				}),
				{
					subscribe: a,
					unsubscribe: d,
					setState: c
				} = Object(i.a)(n()),
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
				isDocumentHidden: () => !r(),
				isDocumentVisible: r,
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
			var i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/profile/index.ts"),
				r = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				n = s("./src/reddit/selectors/user.ts");
			const a = "MOD_PERMS__REQUEST_LOADED",
				d = (Object(i.a)("MOD_PERMS__REQUEST_PENDING"), Object(i.a)(a), Object(i.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(n.l)(t());
					if (s) {
						const t = Object(r.e)(s);
						await e(Object(o.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			}));
			const i = "PAGE__MULTIREDDIT_FEED_PENDING",
				o = "PAGE__MULTIREDDIT_FEED_LOADED",
				r = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return se
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return ie
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return oe
			})), s.d(t, "profilePostsPending", (function() {
				return re
			})), s.d(t, "profilePostsLoaded", (function() {
				return ne
			})), s.d(t, "profilePostsFailed", (function() {
				return ae
			})), s.d(t, "profilePostsRequested", (function() {
				return de
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return ce
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return le
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return ue
			})), s.d(t, "morePostsPending", (function() {
				return pe
			})), s.d(t, "morePostsLoaded", (function() {
				return be
			})), s.d(t, "morePostsFailed", (function() {
				return me
			})), s.d(t, "morePostsRequested", (function() {
				return he
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/lodash/pick.js"),
				o = s.n(i),
				r = s("./src/lib/makeActionCreator/index.ts"),
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
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/lib/makeGqlRequest/index.ts"),
				v = s("./src/redditGQL/operations/ProfileFeed.json");
			const P = async (e, t) => await Object(O.a)(e, {
				...v,
				variables: t
			}), j = e => {
				let {
					username: t,
					profileSort: s,
					filter: i,
					loadMoreData: o,
					shouldUseGqlCursor: r
				} = e;
				const n = {
					username: t,
					sort: s.toUpperCase(),
					filter: i
				};
				if (o) {
					const {
						token: e
					} = o;
					n.after = r ? e : btoa(e)
				}
				return n
			};
			var _ = s("./src/config.ts"),
				E = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				w = s("./src/lib/constants/index.ts"),
				T = s("./src/lib/makeApiRequest/index.ts"),
				C = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				I = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const S = (e, t, s) => Object(T.a)(e, {
				data: s,
				endpoint: Object(C.a)(Object(E.a)(Object(I.a)(`${_.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: w.ob.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var D = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				x = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				A = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				R = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				N = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				M = s("./src/reddit/models/Post/index.ts");
			const F = (e, t) => {
				if (!Object(M.l)(t) && !Object(M.n)(t)) return null;
				if (e.posts[t.id]) return t.id;
				const s = Object(k.f)(t),
					{
						id: i
					} = s;
				e.posts[i] = s;
				const {
					crosspostRoot: o
				} = t;
				o && o.type === M.a.Post && o.postInfo && F(e, o.postInfo);
				const {
					authorFlair: r
				} = t;
				if (r) {
					const t = s.belongsTo.id;
					e.authorFlair[t] || (e.authorFlair[t] = {}), e.authorFlair[t][s.author] = Object(x.a)(r)[0]
				}
				if (Object(M.l)(t)) {
					const {
						profile: s
					} = t;
					e.profiles[s.id] || (e.profiles[s.id] = Object(R.a)(s))
				} else if (Object(M.n)(t)) {
					const {
						subreddit: s
					} = t;
					e.subreddits[s.id] || (e.subreddits[s.id] = Object(N.a)(s)), e.postFlair[s.id] || (e.postFlair[s.id] = Object(A.a)(s))
				}
				return i
			};
			var L = s("./src/reddit/models/Comment/index.ts"),
				V = (e, t) => {
					var s, i, o;
					const r = {
							authorFlair: {},
							pinned: new Array,
							postIds: new Array,
							posts: {},
							postFlair: {},
							profiles: {},
							subreddits: {},
							token: ""
						},
						n = null === (s = null == e ? void 0 : e.redditorInfoByName) || void 0 === s ? void 0 : s.elements;
					if (!n) return r;
					const {
						edges: a
					} = n;
					for (const {
							node: c
						} of a) {
						if (!c || c.__typename === L.d.Comment) continue;
						const e = F(r, c);
						e && r.postIds.push(e)
					}
					const d = null === (o = null === (i = null == e ? void 0 : e.redditorInfoByName) || void 0 === i ? void 0 : i.profile) || void 0 === o ? void 0 : o.stickyPosts;
					if (d)
						for (const {
								id: c
							} of d) r.pinned.push(c);
					if (t) r.token = n.pageInfo.endCursor || "";
					else {
						const {
							postIds: e
						} = r, t = e[e.length - 1];
						t && (r.token = t)
					}
					return r
				},
				G = s("./node_modules/@sentry/minimal/esm/index.js"),
				U = s("./node_modules/deep-diff/index.js"),
				q = s("./src/lib/env/index.ts");
			const B = new Set(["authorFlair.cssClass", "posts.adSupplementaryText", "posts.allAwardings", "posts.approvedAtUTC", "posts.approvedBy", "posts.attributionInfo", "posts.audioRoom", "posts.bannedAtUTC", "posts.bannedBy", "posts.collapsedBecauseCrowdControl", "posts.ignoreReports", "posts.isApproved", "posts.isAuthorPremium", "posts.isEligibleForLinkedPosts", "posts.isEligibleForQASchema", "posts.isFollowed", "posts.isPinned", "posts.isReactAllowed", "posts.isRemoved", "posts.isSpam", "posts.lastAuthorModNote", "posts.modQueueTriggers", "posts.modReportsDismissed", "posts.pollData", "posts.predictionTournament", "posts.previewComments", "posts.modReports", "posts.numReports", "posts.reactedFrom", "posts.removedBy", "posts.removedByCategory", "posts.topAwardedType", "posts.userReports", "posts.userReportsDismissed", "posts.modReasonBy", "subreddits.answerableQuestions", "subreddits.freeFormReports", "subreddits.isSubscribed", "authorFlair.richtext", "authorFlair.text", "posts.collectionIds", "posts.liveCommentsWebsocket", "posts.thumbnail.url", "posts.discussionType", "posts.eventsOnRender", "posts.flair", "posts.gildings", "posts.media", "posts.goldCount", "posts.sendReplies", "posts.score", "posts.sendReplies", "posts.source.url", "posts.source.outboundUrl", "posts.source.outboundUrlCreated", "posts.source.outboundUrlExpiration", "profiles.acceptFollowers", "profiles.communityIcon", "profiles.icon.url", "posts.upvoteRatio", "subreddits.acceptFollowers", "subreddits.allowChatPostCreation", "subreddits.communityIcon", "subreddits.icon.url", "subreddits.isChatPostFeatureEnabled", "subreddits.primaryColor", "subreddits.subscribers"]),
				z = (e, t) => {
					const s = {},
						i = {};
					Object.keys(e).forEach(o => {
						const r = e[o] || {},
							n = t[o] || {};
						s[o] = {}, i[o] = 0, Object.keys(r).forEach(e => {
							const t = r[e],
								a = n[e],
								d = Object(U.diff)(t, a, {
									prefilter: (e, t) => B.has(`${o}.${e.length?`${e.join(".")}.`:""}${t}`) || B.has(`${o}.${t}`),
									normalize: (e, t, s, i) => s || i ? [s, i] : [s, s]
								});
							i[o] = d ? i[o] + d.length : (null == i ? void 0 : i[o]) || 0, d && (s[o][e] = {
								gatewayThing: t,
								gqlThing: a,
								diffResult: d
							})
						})
					});
					const o = Object.keys(i).reduce((e, t) => e += i[t], 0);
					return {
						allDiffs: s,
						issueCounts: i,
						totalIssues: o
					}
				};

			function $(e) {
				let {
					gatewayResponse: t,
					normalizedGqlResponse: s,
					rawGqlResponse: i
				} = e;
				if (Object(q.a)()) {
					console.group("GQL Profiles Shadowtest"), console.groupCollapsed("raw gql response"), console.log(i), console.groupEnd(), console.groupCollapsed("normalized gql response"), console.log(s), console.groupEnd(), console.groupCollapsed("gateway response"), console.log(t), console.groupEnd();
					const {
						allDiffs: e,
						issueCounts: o,
						totalIssues: r
					} = z(t, s);
					console.groupCollapsed(`diff: ${r} issues`), console.log("lhs = gateway\nrhs = gql");
					for (const t in e) {
						if (console.groupCollapsed(`${t}: ${o[t]} issues`), o[t] > 0)
							for (const s in e[t]) {
								const i = e[t][s].diffResult;
								console.groupCollapsed(`${s}: ${i.length||0} issues`), console.log(i), console.log({
									gql: e[t][s].gqlThing,
									gateway: e[t][s].gatewayThing
								}), console.groupEnd()
							}
						console.groupEnd()
					}
					console.groupEnd()
				}
				if (Object(q.b)()) {
					const {
						allDiffs: e,
						issueCounts: i,
						totalIssues: o
					} = z(t, s);
					if (o <= 0) return;
					G.l(t => {
						t.setExtra("info", {
							allDiffs: e,
							issueCounts: i,
							totalIssues: o
						}), t.setExtra("bypassSampling", !0), G.d("GQL Profiles Shadowtest Diff")
					})
				}
			}
			var H = s("./src/reddit/helpers/post/index.ts"),
				Q = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				W = s("./src/reddit/models/User/index.ts"),
				K = s("./src/reddit/constants/experiments.ts"),
				X = s("./src/reddit/helpers/chooseVariant/index.ts");
			const J = e => {
					return Object(X.c)(e, {
						experimentEligibilitySelector: X.a,
						experimentName: K.Ac
					}) === K.Td
				},
				Y = e => {
					return Object(X.c)(e, {
						experimentEligibilitySelector: X.a,
						experimentName: K.Bc
					}) === K.Td
				};
			var Z = s("./src/reddit/selectors/listings.ts"),
				ee = s("./src/reddit/selectors/profile.ts"),
				te = s("./src/redditGQL/types.ts");
			const se = "PAGE__PROFILE_POSTS_PENDING",
				ie = "PAGE__PROFILE_POSTS_LOADED",
				oe = "PAGE__PROFILE_POSTS_FAILED",
				re = Object(r.a)(se),
				ne = Object(r.a)(ie),
				ae = Object(r.a)(oe),
				de = e => async (t, s, i) => {
					var r, O, v;
					const {
						queryParams: _,
						params: E
					} = e, {
						sort: w,
						t: T
					} = Object(u.b)(_), {
						profileName: C
					} = E, I = Object(n.a)(`u_${C}`, w, _), x = s(), A = Object(a.a)(x.listings.postOrder.ids, I), k = Object(Z.c)(x, {
						listingKey: I
					}), R = Object(Z.d)(x, {
						listingKey: I
					});
					if (await t(m.d(C)), R || A && !k) {
						if (A) {
							const e = Object(ee.s)(s(), {
								profileName: C
							});
							t(b.m({
								title: e
							}))
						}
						return
					}
					t(re({
						key: I
					}));
					const N = Y(x);
					let M, F, L;
					if (N) {
						const e = j({
							username: C,
							profileSort: w,
							filter: te.L.Posts,
							shouldUseGqlCursor: !0
						});
						F = null === (v = null === (O = null === (r = null == (M = await Object(Q.a)("profilePosts", () => P(i.gqlContext(), e))) ? void 0 : M.body) || void 0 === r ? void 0 : r.data) || void 0 === O ? void 0 : O.redditorInfoByName) || void 0 === v ? void 0 : v.__typename
					} else {
						const t = {
							...o()(e.queryParams, [...g.q, ...g.p, g.l]),
							layout: Object(y.T)(x, {}).toLowerCase(),
							sort: w,
							t: Object(D.a)(w, T)
						};
						M = await Object(Q.a)("profilePosts", () => S(i.apiContext(), C, t))
					}
					if (!M.ok || N && F !== W.c.AvailableRedditor) return t(ae({
						account: !N && M.body.data ? M.body.data.account : null,
						error: M.body.reason ? {
							type: M.body.reason
						} : M.error,
						key: I
					})), M.body.reason === f.a.DeletedProfile || F === W.c.DeletedRedditor ? t(Object(d.u)({
						profileName: C
					})) : F === W.c.UnavailableRedditor ? t(Object(d.A)({
						profileName: C
					})) : N && !F && t(Object(d.o)({
						profileName: C
					})), void t(b.n(M.status));
					if (N) {
						const {
							data: e
						} = M.body;
						L = V(e, !0)
					} else L = M.body, await Object(H.a)(i.gqlContext, L.posts).then(e => L.posts = e);
					if (!N && J(x)) {
						const e = j({
								username: C,
								profileSort: w,
								filter: te.L.Posts
							}),
							t = await P(i.gqlContext(), e);
						if (t.ok && t.body) {
							const {
								data: e
							} = t.body, s = V(e);
							$({
								gatewayResponse: {
									authorFlair: L.authorFlair,
									pinned: L.pinned,
									postIds: L.postIds,
									posts: L.posts,
									postFlair: L.postFlair,
									profiles: L.profiles,
									subreddits: L.subreddits,
									token: L.token
								},
								normalizedGqlResponse: s,
								rawGqlResponse: e
							})
						}
					}
					t(ne({
						key: I,
						meta: s().meta,
						...L
					}));
					const G = Object(ee.o)(s(), C),
						{
							pinned: U
						} = L;
					t(Object(p.h)({
						profileId: G,
						pinned: U
					})), await Promise.all([t(Object(u.c)(C)), t(Object(h.q)()), t(Object(l.b)()), t(c.o(C))])
				}, ce = "PROFILE_POSTS__MORE_POSTS_PENDING", le = "PROFILE_POSTS__MORE_POSTS_LOADED", ue = "PROFILE_POSTS__MORE_POSTS_FAILED", pe = Object(r.a)(ce), be = Object(r.a)(le), me = Object(r.a)(ue), he = () => async (e, t, s) => {
					let {
						apiContext: i,
						gqlContext: r
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
					} = l, h = Object(n.a)(`u_${m}`, p, c), f = Object(Z.g)(a, {
						listingKey: h
					});
					if (!f) return;
					const O = Object(Z.d)(a, {
							listingKey: h
						}),
						v = Object(Z.e)(a, {
							listingKey: h,
							token: f.token
						});
					if (O || v) return;
					e(pe({
						key: h,
						fetchedToken: f.token
					}));
					const _ = Y(a);
					let E, w;
					if (_) {
						const e = j({
							username: m,
							profileSort: p,
							filter: te.L.Posts,
							loadMoreData: f,
							shouldUseGqlCursor: !0
						});
						E = await P(r(), e)
					} else {
						const e = {
							after: f.token,
							dist: f.dist,
							sort: p,
							t: b,
							...o()(c, g.q),
							layout: Object(y.T)(a, {}).toLowerCase()
						};
						E = await S(i(), m, e)
					}
					if (!E.ok) return void e(me({
						account: !_ && E.body.data ? E.body.data.account : null,
						error: E.error,
						fetchedToken: f.token,
						key: h
					}));
					if (_) {
						const {
							data: e
						} = E.body;
						w = V(e, !0)
					} else w = E.body, await Object(H.a)(r, w.posts).then(e => w.posts = e);
					const T = a.listings.postOrder.ids[h],
						C = w.postIds || [],
						I = {
							...w,
							postIds: C.filter(e => !T || !T.includes(e))
						};
					if (J(a)) {
						const e = j({
								username: m,
								profileSort: p,
								filter: te.L.Posts,
								loadMoreData: f
							}),
							t = await P(r(), e);
						if (t.ok && t.body) {
							const {
								data: e
							} = t.body, s = V(e);
							$({
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
					e(be({
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
				return m
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "i", (function() {
				return k
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				l = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/profile.ts");
			const m = "PINNEDPOST__PINNED_POSTS_LOADED",
				h = Object(r.a)(m),
				f = "PINNEDPOST__PIN_POST_SUCCESS",
				g = "PINNEDPOST__UNPIN_POST_SUCCESS",
				y = Object(r.a)(f),
				O = Object(r.a)(g),
				v = "PINNEDPOST__PIN_POST_PENDING",
				P = "PINNEDPOST__UNPIN_POST_PENDING",
				j = Object(r.a)(v),
				_ = Object(r.a)(P),
				E = "PINNEDPOST__PIN_POST_FAILURE",
				w = "PINNEDPOST__UNPIN_POST_FAILURE",
				T = Object(r.a)(E),
				C = Object(r.a)(w),
				I = e => Object(a.f)({
					buttonAction: k(e, !0),
					buttonText: i.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: l.b.SuccessMod,
					text: i.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				S = (e, t) => Object(a.f)({
					buttonAction: k(e, !0),
					buttonText: i.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: l.b.SuccessMod,
					text: t ? i.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : i.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				D = () => Object(a.f)({
					kind: l.b.Error,
					text: i.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				x = () => Object(a.f)({
					kind: l.b.Error,
					text: i.fbt._("You can't pin a removed post", null, {
						hk: "3bdn2y"
					})
				}),
				A = () => Object(a.f)({
					kind: l.b.Error,
					text: i.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, i, r) => {
						let {
							apiContext: a,
							gqlContext: l
						} = r;
						const m = i(),
							h = m.posts.models[e];
						if (!h) return;
						const f = !Object(p.s)(m, {
							postId: e
						});
						if (f && h.isRemoved) return s(x());
						const g = h.author,
							v = Object(b.o)(m, g),
							[P, E, w, k, R] = f ? [j, y, T, I, D] : [_, O, C, S, A];
						if (f) {
							if (Object(p.P)(m, {
									profileName: g
								}).length >= o.hb) return void s(Object(n.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
						}
						const N = Object(p.p)(m, e, g),
							M = !f && N;
						s(P({
							postId: e,
							profileId: v
						})), (Object(u.b)(m) ? await Object(c.i)(l(), e, f, !0) : await Object(c.t)(a(), e, f, !0)).ok ? (s(E({
							postId: e,
							profileId: v
						})), t || s(k(e, M))) : (s(w({
							postId: e,
							profileId: v
						})), s(R()))
					}
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return j
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "c", (function() {
				return T
			}));
			var i = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/lib/constants/index.ts"),
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
				y = s("./src/reddit/actions/postCreation/constants.ts"),
				O = s("./src/reddit/actions/postCreation/general.ts");
			const v = Object(a.a)(y.N),
				P = Object(a.a)(y.O),
				j = Object(a.a)(y.M),
				_ = (e, t) => async (s, i, o) => {
					let {
						apiContext: n
					} = o, a = i();
					const {
						name: b,
						isProfile: m
					} = e, y = Object(f.e)(a), O = y && !m && Object(u.a)(y.name, b), P = a.creations.api.subreddit.change.pending;
					if (O || P) return;
					const j = Object(l.w)(t);
					if (!b) return void s(E(e, j));
					s(v(e));
					const _ = m ? {
						profileName: b
					} : {
						subredditName: b
					};
					if (await s(Object(c.postCreationPageDataRequested)(_)), m || !Object(h.C)(a)) return s(E(e, j));
					const w = e.allowedPostTypes || Object(g.B)(i(), {
						subredditName: b
					});
					if (!w) return void s(E(e, j));
					let T;
					a = i();
					const C = Object(h.pb)(a),
						I = Object(h.C)(a);
					if (C === r.bc.MEDIA && I) {
						const e = Object(h.X)(a),
							t = Object(p.x)(e),
							s = Object(h.O)(a) && e.items.length > 1,
							i = !t && !s;
						if (s && !w.galleries) T = p.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (i && !w.images) T = p.q.ImageWillBeRemoved;
						else if (t && !w.videos) {
							const t = a.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							w.images ? s > r.lb && (T = p.q.VideoWillBeRemovedTooLongForGif) : T = p.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(T ? Object(d.i)(T) : E({
						...e,
						allowedPostTypes: w
					}, j))
				}, E = function(e, t) {
					let s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (r, n) => {
						const {
							name: a,
							isProfile: d
						} = e, c = n().platform.currentPage, l = c.queryParams, u = d ? b.b : b.c;
						let p = "";
						p = a ? u(a) : m.b, p = Object(o.a)(p, {
							...l,
							draft: t || l.draft
						}), (t || c.url.toLowerCase() !== p.toLowerCase()) && (r(P(e)), s && r(Object(O.t)(!0)), r(Object(O.i)()), r(Object(i.c)(p)))
					}
				}, w = e => async (t, s) => {
					const r = s().platform.currentPage,
						n = r.queryParams,
						a = Object(o.a)(r.url, {
							...n,
							collection: e
						});
					t(Object(i.c)(a))
				}, T = () => async (e, t) => {
					const s = t().platform.currentPage,
						o = Object(n.a)(s.url, ["collection"]);
					e(Object(i.c)(o))
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
				return G
			})), s.d(t, "k", (function() {
				return U
			})), s.d(t, "h", (function() {
				return q
			})), s.d(t, "n", (function() {
				return B
			})), s.d(t, "s", (function() {
				return X
			})), s.d(t, "r", (function() {
				return J
			})), s.d(t, "g", (function() {
				return Y
			})), s.d(t, "q", (function() {
				return ee
			})), s.d(t, "c", (function() {
				return te
			})), s.d(t, "a", (function() {
				return se
			})), s.d(t, "b", (function() {
				return ie
			})), s.d(t, "o", (function() {
				return ae
			}));
			var i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/formatApiError/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
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
				y = s("./src/reddit/models/Subreddit/index.ts");
			const O = e => {
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
					if (t.subreddit_type === y.g.User) {
						const s = Object(f.a)(t, Object(m.i)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(g.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var v = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				P = s("./src/reddit/models/PostCreationForm/index.ts"),
				j = s("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/models/User/index.ts"),
				w = s("./src/reddit/selectors/postCreations.ts"),
				T = s("./src/reddit/selectors/postDraft.ts"),
				C = s("./src/reddit/selectors/profile.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts");
			const D = "POST_DRAFT__LIST_PENDING",
				x = "POST_DRAFT__LIST_LOADED",
				A = "POST_DRAFT__LIST_FAILED",
				k = Object(r.a)(D),
				R = Object(r.a)(x),
				N = Object(r.a)(A),
				M = () => async (e, t, s) => {
					let {
						apiContext: o
					} = s;
					const r = t();
					if (!Object(S.l)(r) || Object(T.b)(r)) return;
					e(k());
					const n = await (e => Object(l.a)(Object(u.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: i.ob.GET
					}))(o());
					n.ok ? e(R(O(n.body))) : e(N(n.error))
				}, F = "POST_DRAFT__SAVE_DRAFT_PENDING", L = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", V = "POST_DRAFT__SAVE_DRAFT_FAILED", G = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", U = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", B = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", z = Object(r.a)(F), $ = Object(r.a)(L), H = Object(r.a)(V), Q = Object(r.a)(G), W = Object(r.a)(U), K = Object(r.a)(q), X = Object(r.a)(B), J = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const c = s(),
						p = Object(T.g)(c),
						m = Object(w.cb)(c);
					if (p || m) return;
					const h = Object(T.h)(c, e);
					if (!h) return;
					t(z(h)), j.g(c, h);
					const f = await ((e, t, s) => Object(l.a)(Object(u.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? i.ob.PUT : i.ob.POST,
						data: Object(v.a)(t)
					}).then(e => e.body.fields && Object(P.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: i.L.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(n(), h, e);
					if (f.ok) {
						const {
							id: s,
							draftsCount: i
						} = Object(v.c)(f.body);
						t($({
							draftId: s,
							draftsCount: i
						})), e || t(Object(a.a)(h.destSubreddit, s, !1))
					} else {
						const e = f.error;
						e.type === i.L.BAD_CAPTCHA_ERROR ? t(K()) : e.type === i.L.VALIDATION_ERROR ? t(Q(e)) : e.type === i.L.SUBMIT_VALIDATION_ERROR ? t(W(e)) : t(H(e)), t(Object(d.f)({
							duration: d.a,
							kind: _.b.Error,
							text: Object(o.a)(e)
						}))
					}
				}, Y = "POST_DRAFT__LOAD_DRAFT", Z = Object(r.a)(Y), ee = e => async (t, s, i) => {
					let {
						apiContext: o
					} = i;
					t(Z(e));
					let r = P.f;
					const n = s();
					if (e.subredditId) {
						const t = Object(I.Y)(n, {
								subredditId: e.subredditId
							}),
							s = Object(C.r)(n, {
								profileId: e.subredditId
							}),
							i = Object(S.l)(n);
						t ? r = {
							isProfile: !1,
							name: t.name
						} : s && i && (r = {
							isProfile: !0,
							name: Object(E.e)(i)
						})
					}
					await t(Object(a.a)(r, e.id, !1));
					const d = Object(T.h)(s(), e.id);
					d && j.j(s(), d)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", ie = "POST_DELETE_DRAFT_PENDING", oe = Object(r.a)(te), re = Object(r.a)(se), ne = Object(r.a)(ie), ae = (e, t) => async (s, r, a) => {
					let {
						apiContext: b
					} = a;
					const m = r();
					if (Object(T.a)(m, e)) return;
					const h = Object(T.d)(m, {
						draftId: e
					});
					h && j.h(m, h), s(ne({
						draftId: e
					}));
					const f = await (async (e, t) => Object(l.a)(Object(u.a)(e, [p.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: i.ob.DELETE
					}))(b(), e);
					if (f.ok) {
						const {
							draftsCount: i
						} = Object(v.c)(f.body);
						s(oe({
							draftId: e,
							draftsCount: i
						}));
						const o = Object(c.w)(t);
						e === o && s(Object(n.q)(!0, t))
					} else {
						const t = f.error;
						s(re({
							draftId: e,
							apiError: t
						})), s(Object(d.f)({
							duration: d.a,
							kind: _.b.Error,
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
			var i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/tabBadging.ts"),
				n = s("./src/reddit/endpoints/me/index.ts"),
				a = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = s("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				l = "REDDIT_EMBED_FAILED",
				u = Object(o.a)("REDDIT_EMBED_PENDING"),
				p = Object(o.a)(c),
				b = Object(o.a)(l),
				m = (e, t) => async (e, s, i) => {
					let {
						apiContext: o
					} = i;
					const d = s();
					e(u());
					const c = await Object(n.a)(o());
					c.ok && c.body ? !t || c.body.account ? (e(p(c.body)), e(Object(r.d)()), h(d)) : Object(a.a)(e, d) : e(b(c.error))
				}, h = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === i.Sb.INBOX_PAGES && Object(d.g)(e)
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/lodash/isEqual.js"),
				o = s.n(i),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
				y = [{
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
				O = e => e.map(e => {
					let {
						event: t,
						cumulative: s = !1,
						cumulativeElapsedTime: i,
						remainingTime: o,
						threshold: r = null,
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
						threshold: r,
						remainingTime: o,
						cumulativeElapsedTime: 0,
						viewabilityMinimum: n,
						timeViewingInitialized: 0,
						timeViewingInterrupted: d
					}
				}),
				v = () => O(g),
				P = () => O(y),
				j = [c.c, c.e, c.l, c.j, c.a, c.b],
				_ = [c.c, c.l, c.j, c.a],
				E = [c.c, c.e, c.l, c.b],
				w = e => "boolean" == typeof e.cumulative && e.cumulative,
				T = Object(a.c)({
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
						const i = Object(f.h)(e, {
							postId: s.id
						});
						if (i) return i.length
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
				C = Object(p.a)(T);
			class I extends r.Component {
				constructor(e) {
					super(e), this.viewabilityStats = v(), this.videoStats = P(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, c.r), this.props.trackVideo && this.handleThresholds(e, c.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						if (o()(this.state.event, e) || this.setState({
								event: e
							}), this.props.trackDisplay) {
							const t = this.props.post.media && Object(m.E)(this.props.post.media);
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
						w(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (l.d(e.id, c.p, !0), this.videoStats.forEach(e => {
						w(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
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
					let s, i = !1,
						o = !1;
					return "object" == typeof t ? (s = t.threshold, i = !!t.playing, o = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!i || this.props.isPlaying) && (!o || this.props.isAudible)
				}
				handleThresholds(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						post: i
					} = this.props, r = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!o()(r, this.inViewStats) && r.length > 0 && l.b(i.id, r, s);
					const n = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!o()(n, this.outOfViewStats) && n.length > 0 && l.d(i.id, n, s), this.outOfViewStats = n, this.inViewStats = r
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
						width: i
					} = e.boundingClientRect;
					return !t.threshold && t.event === b.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = i * s < 3e5 ? c.a : c.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === b.a.GroupMViewable && i * s > 242500 && (t.threshold = c.l), t
				}
				checkViewability(e, t) {
					if (w(t) && t.event === b.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						w(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
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
					let s = j;
					return e && !t ? s = E : !e && t && (s = _), n.a.createElement(d.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = C(I)
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "BlankPost", (function() {
				return l
			}));
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./src/reddit/components/AdViewability/index.tsx"),
				n = s("./src/reddit/connectors/PostViewable/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/contexts/Post/index.tsx");
			const c = Object(n.a)(null),
				l = e => {
					let {
						className: t,
						post: s
					} = e;
					return s.isSponsored ? o.a.createElement(r.a, {
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
			var i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(i.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return {
					...e,
					onPostViewable: o.P
				}
			}(t))
		},
		"./src/reddit/constants/errors.ts": function(e, t, s) {
			"use strict";
			var i, o;
			s.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(i || (i = {})),
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
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
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
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const b = o.a.createContext(null);

			function m(e) {
				const t = Object(r.e)(t => Object(l.G)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(d.a)();
				let i = Object(r.e)(e => t ? Object(u.Q)(e, {
					identifier: t.belongsTo
				}) : null);
				i || (null == t ? void 0 : t.belongsTo.type) !== n.a.PROFILE || (i = t.profile);
				const o = (null == t ? void 0 : t.belongsTo.type) === n.a.SUBREDDIT ? i : null,
					p = !(!s || (null == t ? void 0 : t.author) !== Object(c.e)(s)),
					b = Object(r.e)(r => ({
						currentUser: s,
						imageGalleryCurrentItem: Object(l.i)(r, {
							postId: e
						}),
						isModerator: !(!o || !r.moderatingSubreddits[o.name]),
						post: t,
						postId: e,
						subreddit: o,
						subredditOrProfile: i,
						userIsOp: p
					}));
				return Object(a.a)(b)
			}

			function h(e) {
				const {
					postId: t,
					children: s
				} = e, i = m(t);
				return o.a.createElement(b.Provider, {
					value: i
				}, s)
			}

			function f(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return o.a.createElement(b.Consumer, null, i => {
						if (!i) throw new Error(`No Post context for <${t}/>!`);
						return o.a.createElement(e, p({}, s, i))
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
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				a = s("./src/reddit/reducers/user/prefs/index.ts"),
				d = s("./src/reddit/selectors/user.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
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
				const e = Object(r.e)(e => ({
					currentUser: Object(d.l)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(d.eb)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(d.R)(e)
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
			var i = s("./src/config.ts"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				n = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = e => Object(r.a)(e, {
				endpoint: Object(n.a)(`${i.a.gatewayUrl}/desktopapi/v1/me`),
				method: o.ob.GET
			})
		},
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./node_modules/react/index.js"),
				o = s("./node_modules/react-redux/es/index.js");

			function r(e) {
				const t = Object(i.useRef)(e);
				return t.current === e || Object(o.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./node_modules/react/index.js"),
				o = s("./src/reddit/contexts/User/index.tsx");

			function r() {
				return Object(i.useContext)(o.a)
			}
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i, o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
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
				y = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				O = s("./src/reddit/actions/pages/postCreation.ts"),
				v = s("./src/reddit/actions/pages/postDraft.ts"),
				P = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				j = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				_ = s("./src/reddit/actions/pages/profilePosts.ts"),
				E = s("./src/reddit/actions/pages/search/index.ts"),
				w = s("./src/reddit/actions/pages/subreddit.ts"),
				T = s("./src/reddit/actions/pages/topic.ts"),
				C = s("./src/reddit/actions/postCreation/constants.ts"),
				I = s("./src/reddit/actions/postDraft.ts"),
				S = s("./src/reddit/actions/preferences.ts"),
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
				G = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(i || (i = {}));
			const U = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "enableFollowers", "feedRecommendationsEnabled", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "liveBarRecommendationsEnabled", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...M.a, "loginOtpEnabled"],
				q = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: G.a,
					commentMode: L.i.RICH_TEXT,
					countryCode: "",
					badCommentAutocollapse: l.n.OFF,
					layout: N.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: l.w.CONFIDENCE,
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
					rpanDuDismissalTime: void 0,
					showActiveCommunities: !0,
					showPresence: !1,
					showRpanDu: !0,
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
					rpanDuDismissalTime: void 0,
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
						}, U),
						i = t.subreddit,
						o = {
							...e.subreddit
						};
					Object.keys(i || {}).forEach(e => {
						o[e] = {
							...B,
							...i && i[e]
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
					return r()(n, e) ? e : n
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
					case C.s:
					case C.Q: {
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
					case I.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === V.b.Markdown ? L.i.MARKDOWN : L.i.RICH_TEXT
						}
					}
					case S.h: {
						const {
							layout: s
						} = t.payload;
						return e.layout === s ? e : {
							...e,
							layout: s
						}
					}
					case S.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case S.p: {
						const {
							layout: s,
							subredditId: i
						} = t.payload;
						return $(e, i, {
							layout: s
						})
					}
					case S.f:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case S.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case p.j:
						return {
							...e, over18: !0
						};
					case S.c:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case S.i:
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
					case S.r:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: s,
								topContentTimesDismissed: i
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: s,
								topContentTimesDismissed: i
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
					case S.g:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case S.d:
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
					case w.SUBREDDIT_LOADED:
					case y.b:
					case y.a:
					case P.e:
					case j.e:
					case j.b:
					case _.PROFILE_POSTS_LOADED:
					case b.g:
					case k.i:
					case x.e:
					case D.b:
					case O.PAGE_LOADED:
					case v.PAGE_LOADED:
					case S.j:
					case S.b:
					case E.c:
					case S.a:
					case R.c:
					case T.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? z(e, t.payload.preferences) : e;
					case S.q: {
						const {
							subredditId: s,
							prefs: i
						} = t.payload;
						return $(e, s, i)
					}
					case P.d:
					case j.d:
					case j.a:
					case _.PROFILE_POSTS_FAILED: {
						let s = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: i,
								showPresence: o
							} = t.payload.account;
							e.nightmode !== i && (s = {
								...s,
								nightmode: i
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
					case h.p:
					case h.o:
					case h.r:
					case h.s:
					case h.y:
					case h.x:
						return t.payload && t.payload.response && t.payload.response.preferences ? z(e, t.payload.preferences) : e;
					case S.n: {
						const s = t.payload,
							{
								enableFollowers: i,
								showActiveCommunities: o
							} = s.additional;
						let r = e;
						return e.enableFollowers !== i && (r = {
							...r,
							enableFollowers: i
						}), e.showActiveCommunities !== o && (r = {
							...r,
							showActiveCommunities: o
						}), r
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
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/loadableAction/index.ts"),
				n = s("./src/reddit/routes/postCreation/constants.ts");
			const a = [n.b, n.c, n.a],
				d = Object(i.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: d,
					chunk: o.u.POST_CREATION,
					exact: !0,
					meta: {
						name: o.Sb.POST_CREATION
					},
					path: a,
					prefetches: [o.u.COMMENTS_PAGE]
				};
			t.a = p
		},
		"./src/redditGQL/operations/ProfileFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"77fed497079a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.16c964c605efd6b3e91c.js.map