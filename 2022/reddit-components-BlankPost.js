// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.a78f7a0b6eda2da3e856.js
// Retrieved at 7/14/2022, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, t, s) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isPseudoLocale = t.isISOLocaleSupported = t.toISOLocale = t.isoLocaleToR2Language = void 0;
			const r = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
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
				o = Object.keys(i).reduce((e, t) => (n.has(t) && (e[t] = i[t]), e), {}),
				a = Object.keys(o).reduce((e, t) => {
					const s = o[t];
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
				const n = t[2];
				return n && (r = `${r}-${n.toUpperCase()}`), r
			};
			const d = new Set(Object.keys(a));
			t.isISOLocaleSupported = e => !!e && d.has(e), t.isPseudoLocale = e => !!e && (e === r.PSEUDO_AUTO || Object.values(r.PseudoLocale).includes(e))
		},
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-dom/index.js"),
				o = (s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

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
								if (!o.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							s = t[0],
							r = void 0 === s ? "0px" : s,
							n = t[1],
							i = void 0 === n ? r : n,
							a = t[2],
							d = void 0 === a ? r : a,
							c = t[3];
						return r + " " + i + " " + d + " " + (void 0 === c ? i : c)
					}(e.rootMargin), n = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], i = d.keys(); t = i.next().value;) {
					if (!(s !== t.root || r !== t.rootMargin || a(n, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var s = d.get(e);
				if (s)
					for (var r, n = s.values(); r = n.next().value;)
						if (r.target === t.target) return r;
				return null
			}

			function u(e, t) {
				for (var s = 0; s < e.length; s++) {
					var r = l(t, e[s]);
					r && r.handleChange(e[s])
				}
			}

			function b(e) {
				return c(e) || new IntersectionObserver(u, e)
			}
			var m = s("./node_modules/invariant/browser.js"),
				p = s.n(m),
				h = {},
				f = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return h.errorReporter || function(e) {
								return p()(!1, e)
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
			var O = ["root", "rootMargin", "threshold"],
				y = ["root", "rootMargin", "threshold", "disabled"],
				_ = Object.prototype,
				P = _.hasOwnProperty,
				j = _.toString,
				T = function(e) {
					return O.reduce((function(t, s) {
						if (P.call(e, s)) {
							var r = "root" === s && "[object String]" === j.call(e[s]);
							t[s] = r ? document.querySelector(e[s]) : e[s]
						}
						return t
					}), {})
				},
				E = function(e) {
					var t, s;

					function r() {
						for (var t, s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
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
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = b(T(t.props)), t.target = t.targetNode, e = g(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (f.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
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
					var o = r.prototype;
					return o.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var s = y.some((function(s) {
							return a(t.props[s], e[s])
						}));
						return s && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), s
					}, o.componentDidUpdate = function(e, t, s) {
						var r = !1;
						s || (r = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (s || r) && this.observe()
					}, o.componentDidMount = function() {
						this.observe()
					}, o.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, o.render = function() {
						var e = this.props.children;
						return null != e ? n.a.cloneElement(n.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(n.a.Component);
			v(E, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function i() {}
			i.resetWarningCache = n, e.exports = function() {
				function e(e, t, s, n, i, o) {
					if (o !== r) {
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
					resetWarningCache: n
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
		"./node_modules/lodash/findLastIndex.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseFindIndex.js"),
				n = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/toInteger.js"),
				o = Math.max,
				a = Math.min;
			e.exports = function(e, t, s) {
				var d = null == e ? 0 : e.length;
				if (!d) return -1;
				var c = d - 1;
				return void 0 !== s && (c = i(s), c = s < 0 ? o(d + c, 0) : a(c, d - 1)), r(e, n(t, 3), c, !0)
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
				n = s("./node_modules/lodash/_baseRest.js"),
				i = s("./node_modules/lodash/_baseXor.js"),
				o = s("./node_modules/lodash/isArrayLikeObject.js"),
				a = n((function(e) {
					return i(r(e, o))
				}));
			e.exports = a
		},
		"./node_modules/uuid/index.js": function(e, t, s) {
			var r = s("./node_modules/uuid/v1.js"),
				n = s("./node_modules/uuid/v4.js"),
				i = n;
			i.v1 = r, i.v4 = n, e.exports = i
		},
		"./node_modules/uuid/v1.js": function(e, t, s) {
			var r, n, i = s("./node_modules/uuid/lib/rng-browser.js"),
				o = s("./node_modules/uuid/lib/bytesToUuid.js"),
				a = 0,
				d = 0;
			e.exports = function(e, t, s) {
				var c = t && s || 0,
					l = t || [],
					u = (e = e || {}).node || r,
					b = void 0 !== e.clockseq ? e.clockseq : n;
				if (null == u || null == b) {
					var m = i();
					null == u && (u = r = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == b && (b = n = 16383 & (m[6] << 8 | m[7]))
				}
				var p = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					h = void 0 !== e.nsecs ? e.nsecs : d + 1,
					f = p - a + (h - d) / 1e4;
				if (f < 0 && void 0 === e.clockseq && (b = b + 1 & 16383), (f < 0 || p > a) && void 0 === e.nsecs && (h = 0), h >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				a = p, d = h, n = b;
				var g = (1e4 * (268435455 & (p += 122192928e5)) + h) % 4294967296;
				l[c++] = g >>> 24 & 255, l[c++] = g >>> 16 & 255, l[c++] = g >>> 8 & 255, l[c++] = 255 & g;
				var v = p / 4294967296 * 1e4 & 268435455;
				l[c++] = v >>> 8 & 255, l[c++] = 255 & v, l[c++] = v >>> 24 & 15 | 16, l[c++] = v >>> 16 & 255, l[c++] = b >>> 8 | 128, l[c++] = 255 & b;
				for (var O = 0; O < 6; ++O) l[c + O] = u[O];
				return t || o(l)
			}
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
			const n = () => "undefined" != typeof document,
				i = () => n() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: i()
				}),
				{
					subscribe: a,
					unsubscribe: d,
					setState: c
				} = Object(r.a)(o()),
				l = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				u = () => c(o());
			(() => {
				const e = (() => {
					if (!n()) return;
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
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			}));
			const r = "APP_BADGES__PENDING",
				n = "APP_BADGES__LOADED",
				i = "APP_BADGES__UPDATED",
				o = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return g
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/BadgeIndicators.json"),
				d = e => Object(o.a)(e, {
					...a
				}),
				c = s("./src/reddit/models/Badge/index.ts");
			const l = Object(r.a)(n.c),
				u = Object(r.a)(n.b),
				b = Object(r.a)(n.d),
				m = Object(r.a)(n.a),
				p = e => {
					let {
						key: t,
						count: s
					} = e;
					return {
						[t]: {
							count: s,
							style: c.b.Numbered
						}
					}
				},
				h = (e, t) => ({
					[c.c.ChatUnreadMessages]: {
						count: e,
						style: c.b.Numbered
					},
					[c.c.ChatHasNewMessages]: {
						isShowing: t,
						style: c.b.Filled
					}
				}),
				f = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					e(l());
					const n = await async function(e) {
						const t = await d(e());
						if (t.ok && t.body) {
							return function(e) {
								var t;
								const s = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.badgeIndicators;
								if (s) return {
									...s,
									chatUnreadMessages: {
										count: (Number(s.chatUnreadMessages.count) || 0) + (Number(s.chatUnacceptedInvites.count) || 0) + (Number(s.chatUnreadMentions.count) || 0)
									}
								}
							}(t.body)
						}
					}(r);
					n ? (e(u(n)), e(Object(i.d)())) : e(m())
				};
			const g = () => async e => {
				const t = p({
					key: c.c.MessageTab,
					count: 0
				});
				e(b(t))
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
				n = s("./src/reddit/actions/profile/index.ts"),
				i = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				o = s("./src/reddit/selectors/user.ts");
			const a = "MOD_PERMS__REQUEST_LOADED",
				d = (Object(r.a)("MOD_PERMS__REQUEST_PENDING"), Object(r.a)(a), Object(r.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(o.k)(t());
					if (s) {
						const t = Object(i.e)(s);
						await e(Object(n.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return i
			}));
			const r = "PAGE__MULTIREDDIT_FEED_PENDING",
				n = "PAGE__MULTIREDDIT_FEED_LOADED",
				i = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return x
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return A
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return M
			})), s.d(t, "profilePostsPending", (function() {
				return k
			})), s.d(t, "profilePostsLoaded", (function() {
				return N
			})), s.d(t, "profilePostsFailed", (function() {
				return R
			})), s.d(t, "profilePostsRequested", (function() {
				return L
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return F
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return V
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return U
			})), s.d(t, "morePostsPending", (function() {
				return B
			})), s.d(t, "morePostsLoaded", (function() {
				return G
			})), s.d(t, "morePostsFailed", (function() {
				return q
			})), s.d(t, "morePostsRequested", (function() {
				return H
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				n = s.n(r),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/lib/safeGet/index.ts"),
				d = s("./src/reddit/actions/contentGate.ts"),
				c = s("./src/reddit/actions/externalAccount.ts"),
				l = s("./src/reddit/actions/moderatingSubreddits.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				b = s("./src/reddit/actions/pinnedPost.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/actions/profile/index.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				f = s("./src/reddit/constants/errors.ts"),
				g = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/config.ts"),
				y = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				_ = s("./src/lib/constants/index.ts"),
				P = s("./src/lib/makeApiRequest/index.ts"),
				j = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				T = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const E = (e, t, s) => Object(P.a)(e, {
				data: s,
				endpoint: Object(j.a)(Object(y.a)(Object(T.a)(`${O.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: _.jb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var C = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				w = s("./src/reddit/helpers/post/index.ts"),
				S = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				I = s("./src/reddit/selectors/listings.ts"),
				D = s("./src/reddit/selectors/profile.ts");
			const x = "PAGE__PROFILE_POSTS_PENDING",
				A = "PAGE__PROFILE_POSTS_LOADED",
				M = "PAGE__PROFILE_POSTS_FAILED",
				k = Object(i.a)(x),
				N = Object(i.a)(A),
				R = Object(i.a)(M),
				L = e => async (t, s, r) => {
					const {
						queryParams: i,
						params: O
					} = e, {
						sort: y,
						t: _
					} = Object(u.b)(i), {
						profileName: P
					} = O, j = Object(o.a)(`u_${P}`, y, i), T = s(), x = Object(a.a)(T.listings.postOrder.ids, j), A = Object(I.c)(T, {
						listingKey: j
					}), M = Object(I.d)(T, {
						listingKey: j
					});
					if (await t(p.d(P)), M || x && !A) {
						if (x) {
							const e = Object(D.q)(s(), {
								profileName: P
							});
							t(m.m({
								title: e
							}))
						}
						return
					}
					const L = {
						...n()(e.queryParams, [...g.k, ...g.j, g.g]),
						layout: Object(v.S)(T, {}).toLowerCase(),
						sort: y,
						t: Object(C.a)(y, _)
					};
					t(k({
						key: j
					}));
					const F = await Object(S.a)("profilePosts", () => E(r.apiContext(), P, L));
					if (!F.ok) return t(R({
						account: F.body.data ? F.body.data.account : null,
						error: F.body.reason ? {
							type: F.body.reason
						} : F.error,
						key: j
					})), F.body.reason === f.a.DeletedProfile && t(Object(d.s)({
						profileName: P
					})), void t(m.n(F.status));
					const V = F.body;
					await Object(w.a)(r.gqlContext, V.posts).then(e => V.posts = e), t(N({
						key: j,
						meta: s().meta,
						...V
					}));
					const U = Object(D.m)(s(), P),
						{
							pinned: B
						} = V;
					t(Object(b.h)({
						profileId: U,
						pinned: B
					})), await Promise.all([t(Object(u.c)(P)), t(Object(h.q)()), t(Object(l.b)()), t(c.o(P))])
				}, F = "PROFILE_POSTS__MORE_POSTS_PENDING", V = "PROFILE_POSTS__MORE_POSTS_LOADED", U = "PROFILE_POSTS__MORE_POSTS_FAILED", B = Object(i.a)(F), G = Object(i.a)(V), q = Object(i.a)(U), H = () => async (e, t, s) => {
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
						sort: b,
						t: m
					} = Object(u.b)(c), {
						profileName: p
					} = l, h = Object(o.a)(`u_${p}`, b, c), f = Object(I.g)(a, {
						listingKey: h
					});
					if (!f) return;
					const O = Object(I.d)(a, {
							listingKey: h
						}),
						y = Object(I.e)(a, {
							listingKey: h,
							token: f.token
						});
					if (O || y) return;
					e(B({
						key: h,
						fetchedToken: f.token
					}));
					const _ = {
							after: f.token,
							dist: f.dist,
							sort: b,
							t: m,
							...n()(c, g.k),
							layout: Object(v.S)(a, {}).toLowerCase()
						},
						P = await E(r(), p, _),
						j = P.body,
						T = a.listings.postOrder.ids[h],
						C = j.postIds || [];
					await Object(w.a)(i, j.posts).then(e => j.posts = e);
					const S = {
						...j,
						postIds: C.filter(e => !T || !T.includes(e))
					};
					P.ok ? (e(G({
						fetchedToken: f.token,
						key: h,
						meta: a.meta,
						...S
					})), await e(Object(u.c)(p))) : e(q({
						account: P.body.data ? P.body.data.account : null,
						error: P.error,
						fetchedToken: f.token,
						key: h
					}))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "i", (function() {
				return M
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				l = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				m = s("./src/reddit/selectors/profile.ts");
			const p = "PINNEDPOST__PINNED_POSTS_LOADED",
				h = Object(i.a)(p),
				f = "PINNEDPOST__PIN_POST_SUCCESS",
				g = "PINNEDPOST__UNPIN_POST_SUCCESS",
				v = Object(i.a)(f),
				O = Object(i.a)(g),
				y = "PINNEDPOST__PIN_POST_PENDING",
				_ = "PINNEDPOST__UNPIN_POST_PENDING",
				P = Object(i.a)(y),
				j = Object(i.a)(_),
				T = "PINNEDPOST__PIN_POST_FAILURE",
				E = "PINNEDPOST__UNPIN_POST_FAILURE",
				C = Object(i.a)(T),
				w = Object(i.a)(E),
				S = e => Object(a.f)({
					buttonAction: M(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: l.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				I = (e, t) => Object(a.f)({
					buttonAction: M(e, !0),
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
				D = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				x = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("You can't pin a removed post", null, {
						hk: "3bdn2y"
					})
				}),
				A = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				M = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, r, i) => {
						let {
							apiContext: a,
							gqlContext: l
						} = i;
						const p = r(),
							h = p.posts.models[e];
						if (!h) return;
						const f = !Object(b.s)(p, {
							postId: e
						});
						if (f && h.isRemoved) return s(x());
						const g = h.author,
							y = Object(m.m)(p, g),
							[_, T, E, M, k] = f ? [P, v, C, S, D] : [j, O, w, I, A];
						if (f) {
							if (Object(b.P)(p, {
									profileName: g
								}).length >= n.cb) return void s(Object(o.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
						}
						const N = Object(b.p)(p, e, g),
							R = !f && N;
						s(_({
							postId: e,
							profileId: y
						})), (Object(u.c)(p) ? await Object(c.j)(l(), e, f, !0) : await Object(c.v)(a(), e, f, !0)).ok ? (s(T({
							postId: e,
							profileId: y
						})), t || s(M(e, R))) : (s(E({
							postId: e,
							profileId: y
						})), s(k()))
					}
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return P
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "a", (function() {
				return T
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "c", (function() {
				return C
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/filterQueryParams/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/pages/postCreation.ts"),
				l = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/reddit/helpers/name/index.ts"),
				b = s("./src/reddit/models/PostCreationForm/index.ts"),
				m = s("./src/reddit/routes/postCreation/index.ts"),
				p = s("./src/reddit/routes/postCreation/constants.ts"),
				h = s("./src/reddit/selectors/postCreations.ts"),
				f = s("./src/reddit/selectors/platform.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/actions/postCreation/constants.ts"),
				O = s("./src/reddit/actions/postCreation/general.ts");
			const y = Object(a.a)(v.N),
				_ = Object(a.a)(v.O),
				P = Object(a.a)(v.M),
				j = (e, t) => async (s, r, n) => {
					let {
						apiContext: o
					} = n, a = r();
					const {
						name: m,
						isProfile: p
					} = e, v = Object(f.e)(a), O = v && !p && Object(u.a)(v.name, m), _ = a.creations.api.subreddit.change.pending;
					if (O || _) return;
					const P = Object(l.w)(t);
					if (!m) return void s(T(e, P));
					s(y(e));
					const j = p ? {
						profileName: m
					} : {
						subredditName: m
					};
					if (await s(Object(c.postCreationPageDataRequested)(j)), p || !Object(h.C)(a)) return s(T(e, P));
					const E = e.allowedPostTypes || Object(g.y)(r(), {
						subredditName: m
					});
					if (!E) return void s(T(e, P));
					let C;
					a = r();
					const w = Object(h.mb)(a),
						S = Object(h.C)(a);
					if (w === i.Wb.MEDIA && S) {
						const e = Object(h.W)(a),
							t = Object(b.x)(e),
							s = Object(h.N)(a) && e.items.length > 1,
							r = !t && !s;
						if (s && !E.galleries) C = b.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (r && !E.images) C = b.q.ImageWillBeRemoved;
						else if (t && !E.videos) {
							const t = a.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							E.images ? s > i.gb && (C = b.q.VideoWillBeRemovedTooLongForGif) : C = b.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(C ? Object(d.i)(C) : T({
						...e,
						allowedPostTypes: E
					}, P))
				}, T = function(e, t) {
					let s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (i, o) => {
						const {
							name: a,
							isProfile: d
						} = e, c = o().platform.currentPage, l = c.queryParams, u = d ? m.b : m.c;
						let b = "";
						b = a ? u(a) : p.b, b = Object(n.a)(b, {
							...l,
							draft: t || l.draft
						}), (t || c.url.toLowerCase() !== b.toLowerCase()) && (i(_(e)), s && i(Object(O.t)(!0)), i(Object(O.i)()), i(Object(r.c)(b)))
					}
				}, E = e => async (t, s) => {
					const i = s().platform.currentPage,
						o = i.queryParams,
						a = Object(n.a)(i.url, {
							...o,
							collection: e
						});
					t(Object(r.c)(a))
				}, C = () => async (e, t) => {
					const s = t().platform.currentPage,
						n = Object(o.a)(s.url, ["collection"]);
					e(Object(r.c)(n))
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
				return R
			})), s.d(t, "j", (function() {
				return L
			})), s.d(t, "l", (function() {
				return F
			})), s.d(t, "i", (function() {
				return V
			})), s.d(t, "m", (function() {
				return U
			})), s.d(t, "k", (function() {
				return B
			})), s.d(t, "h", (function() {
				return G
			})), s.d(t, "n", (function() {
				return q
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
				n = s("./src/lib/formatApiError/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/postCreation/general.ts"),
				a = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/models/StructuredStyles/index.ts");
			var m = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/name/index.ts"),
				h = s("./src/reddit/models/PostDraft/index.ts"),
				f = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				g = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts");
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
					if (t.subreddit_type === v.f.User) {
						const s = Object(f.a)(t, Object(p.h)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(g.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var y = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				_ = s("./src/reddit/models/PostCreationForm/index.ts"),
				P = s("./src/reddit/helpers/trackers/postComposer.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/models/User/index.ts"),
				E = s("./src/reddit/selectors/postCreations.ts"),
				C = s("./src/reddit/selectors/postDraft.ts"),
				w = s("./src/reddit/selectors/profile.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/user.ts");
			const D = "POST_DRAFT__LIST_PENDING",
				x = "POST_DRAFT__LIST_LOADED",
				A = "POST_DRAFT__LIST_FAILED",
				M = Object(i.a)(D),
				k = Object(i.a)(x),
				N = Object(i.a)(A),
				R = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const i = t();
					if (!Object(I.k)(i) || Object(C.b)(i)) return;
					e(M());
					const o = await (e => Object(l.a)(Object(u.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: r.jb.GET
					}))(n());
					o.ok ? e(k(O(o.body))) : e(N(o.error))
				}, L = "POST_DRAFT__SAVE_DRAFT_PENDING", F = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", V = "POST_DRAFT__SAVE_DRAFT_FAILED", U = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", G = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", q = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(i.a)(L), $ = Object(i.a)(F), W = Object(i.a)(V), z = Object(i.a)(U), Q = Object(i.a)(B), K = Object(i.a)(G), X = Object(i.a)(q), Y = e => async (t, s, i) => {
					let {
						apiContext: o
					} = i;
					const c = s(),
						b = Object(C.g)(c),
						p = Object(E.bb)(c);
					if (b || p) return;
					const h = Object(C.h)(c, e);
					if (!h) return;
					t(H(h)), P.g(c, h);
					const f = await ((e, t, s) => Object(l.a)(Object(u.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? r.jb.PUT : r.jb.POST,
						data: Object(y.a)(t)
					}).then(e => e.body.fields && Object(_.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: r.I.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(o(), h, e);
					if (f.ok) {
						const {
							id: s,
							draftsCount: r
						} = Object(y.c)(f.body);
						t($({
							draftId: s,
							draftsCount: r
						})), e || t(Object(a.a)(h.destSubreddit, s, !1))
					} else {
						const e = f.error;
						e.type === r.I.BAD_CAPTCHA_ERROR ? t(K()) : e.type === r.I.VALIDATION_ERROR ? t(z(e)) : e.type === r.I.SUBMIT_VALIDATION_ERROR ? t(Q(e)) : t(W(e)), t(Object(d.f)({
							duration: d.a,
							kind: j.b.Error,
							text: Object(n.a)(e)
						}))
					}
				}, J = "POST_DRAFT__LOAD_DRAFT", Z = Object(i.a)(J), ee = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					t(Z(e));
					let i = _.f;
					const o = s();
					if (e.subredditId) {
						const t = Object(S.U)(o, {
								subredditId: e.subredditId
							}),
							s = Object(w.p)(o, {
								profileId: e.subredditId
							}),
							r = Object(I.k)(o);
						t ? i = {
							isProfile: !1,
							name: t.name
						} : s && r && (i = {
							isProfile: !0,
							name: Object(T.e)(r)
						})
					}
					await t(Object(a.a)(i, e.id, !1));
					const d = Object(C.h)(s(), e.id);
					d && P.j(s(), d)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", re = "POST_DELETE_DRAFT_PENDING", ne = Object(i.a)(te), ie = Object(i.a)(se), oe = Object(i.a)(re), ae = (e, t) => async (s, i, a) => {
					let {
						apiContext: m
					} = a;
					const p = i();
					if (Object(C.a)(p, e)) return;
					const h = Object(C.d)(p, {
						draftId: e
					});
					h && P.h(p, h), s(oe({
						draftId: e
					}));
					const f = await (async (e, t) => Object(l.a)(Object(u.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: r.jb.DELETE
					}))(m(), e);
					if (f.ok) {
						const {
							draftsCount: r
						} = Object(y.c)(f.body);
						s(ne({
							draftId: e,
							draftsCount: r
						}));
						const n = Object(c.w)(t);
						e === n && s(Object(o.q)(!0, t))
					} else {
						const t = f.error;
						s(ie({
							draftId: e,
							apiError: t
						})), s(Object(d.f)({
							duration: d.a,
							kind: j.b.Error,
							text: Object(n.a)(t)
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
				return p
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/reddit/endpoints/me/index.ts"),
				a = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = s("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				l = "REDDIT_EMBED_FAILED",
				u = Object(n.a)("REDDIT_EMBED_PENDING"),
				b = Object(n.a)(c),
				m = Object(n.a)(l),
				p = (e, t) => async (e, s, r) => {
					let {
						apiContext: n
					} = r;
					const d = s();
					e(u());
					const c = await Object(o.a)(n());
					c.ok && c.body ? !t || c.body.account ? (e(b(c.body)), e(Object(i.d)()), h(d)) : Object(a.a)(e, d) : e(m(c.error))
				}, h = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === r.Nb.INBOX_PAGES && Object(d.g)(e)
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "f", (function() {
				return v
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/fastdom/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = s("./src/reddit/helpers/tabBadging/index.ts"),
				d = s("./src/reddit/models/Badge/index.ts"),
				c = s("./src/reddit/selectors/appBadges.ts"),
				l = s("./src/reddit/selectors/user.ts"),
				u = s("./src/reddit/actions/appBadgeIndicators/index.ts");
			const b = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				m = Object(i.a)(b),
				p = (e, t) => {
					e <= 0 ? n.a.write(() => {
						Object(a.b)(!1), window.document.title = t
					}) : n.a.write(() => {
						Object(a.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				h = Object(r.c)({
					basicChannelCount: c.e,
					subredditChannelCount: c.d,
					subredditMentionCount: c.c
				}),
				f = () => async (e, t) => {
					const s = t(),
						r = Object(o.g)(s, {});
					if (!(Object(l.P)(s) || Object(l.Q)(s)) || !r) return;
					const n = Object(c.i)(s);
					p(n, r), e(m({
						hasUnreadMessages: !!n
					}))
				}, g = () => async (e, t) => {
					{
						e(f());
						const s = (e => ({
							inboxCount: Object(c.h)(e),
							basicChannelCount: Object(c.e)(e)
						}))(t());
						Object(a.c)(s)
					}
				}, v = e => async (t, s) => {
					const r = s(),
						n = Object(c.e)(r),
						i = Object(c.h)(r),
						{
							basicChannelCount: o,
							inboxCount: a
						} = e;
					if (n !== o) {
						const e = Object(u.e)({
							count: o,
							key: d.c.ChatTab
						});
						t(Object(u.a)(e))
					}
					if (a && a !== i) {
						const e = Object(u.e)({
							count: a,
							key: d.c.MessageTab
						});
						t(Object(u.a)(e))
					}(n !== o || a && a !== i) && t(f())
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/isEqual.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/ads/store.ts"),
				u = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				b = s("./src/reddit/connectors/PostViewable/index.ts"),
				m = s("./src/reddit/constants/adEvents.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/media.ts"),
				f = s("./src/reddit/selectors/video.ts");
			const g = [{
					event: m.a.ViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.m
				}, {
					event: m.a.Impression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: m.a.GalleryItemImpression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: m.a.VendorFullyInView,
					threshold: c.b,
					viewabilityMinimum: c.f
				}, {
					event: m.a.GroupMViewable,
					threshold: c.b,
					viewabilityMinimum: c.m
				}, {
					event: m.a.VendorFullyInViewSeconds5,
					threshold: c.l,
					viewabilityMinimum: c.h,
					remainingTime: c.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: m.a.VendorFullyInViewSeconds15,
					threshold: c.l,
					viewabilityMinimum: c.g,
					remainingTime: c.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				v = [{
					event: m.a.VideoViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.k,
					remainingTime: c.k,
					timeViewingInterrupted: 0
				}, {
					event: m.a.VideoFullyViewableImpression,
					threshold: c.a,
					viewabilityMinimum: c.i,
					remainingTime: c.i,
					timeViewingInterrupted: 0
				}, {
					event: m.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: c.k,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: m.a.VideoVendorFullyViewable50,
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
						cumulativeElapsedTime: r,
						remainingTime: n,
						threshold: i = null,
						viewabilityMinimum: o,
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
						remainingTime: n,
						cumulativeElapsedTime: 0,
						viewabilityMinimum: o,
						timeViewingInitialized: 0,
						timeViewingInterrupted: d
					}
				}),
				y = () => O(g),
				_ = () => O(v),
				P = [c.c, c.e, c.l, c.j, c.a, c.b],
				j = [c.c, c.l, c.j, c.a],
				T = [c.c, c.e, c.l, c.b],
				E = e => "boolean" == typeof e.cumulative && e.cumulative,
				C = Object(a.c)({
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
				w = Object(b.a)(C);
			class S extends i.Component {
				constructor(e) {
					super(e), this.viewabilityStats = y(), this.videoStats = _(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, c.r), this.props.trackVideo && this.handleThresholds(e, c.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						if (n()(this.state.event, e) || this.setState({
								event: e
							}), this.props.trackDisplay) {
							const t = this.props.post.media && Object(p.E)(this.props.post.media);
							this.viewabilityStats.forEach(s => {
								(s.event !== m.a.GalleryItemImpression || t) && this.checkViewability(e, s)
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
						E(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (l.d(e.id, c.p, !0), this.videoStats.forEach(e => {
						E(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
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
						n = !1;
					return "object" == typeof t ? (s = t.threshold, r = !!t.playing, n = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!r || this.props.isPlaying) && (!n || this.props.isAudible)
				}
				handleThresholds(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						post: r
					} = this.props, i = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!n()(i, this.inViewStats) && i.length > 0 && l.b(r.id, i, s);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!n()(o, this.outOfViewStats) && o.length > 0 && l.d(r.id, o, s), this.outOfViewStats = o, this.inViewStats = i
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
					return !t.threshold && t.event === m.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = r * s < 3e5 ? c.a : c.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === m.a.GroupMViewable && r * s > 242500 && (t.threshold = c.l), t
				}
				checkViewability(e, t) {
					if (E(t) && t.event === m.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						E(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
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
					let s = P;
					return e && !t ? s = T : !e && t && (s = j), o.a.createElement(d.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = w(S)
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "BlankPost", (function() {
				return l
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				o = s("./src/reddit/connectors/PostViewable/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/contexts/Post/index.tsx");
			const c = Object(o.a)(null),
				l = e => {
					let {
						className: t,
						post: s
					} = e;
					return s.isSponsored ? n.a.createElement(i.a, {
						post: s,
						trackDisplay: !0
					}, n.a.createElement("div", {
						className: Object(a.a)(t, `Blank ${s.id}`)
					})) : null
				};
			t.default = Object(d.b)(c(l))
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return {
					...e,
					onPostViewable: n.Q
				}
			}(t))
		},
		"./src/reddit/constants/errors.ts": function(e, t, s) {
			"use strict";
			var r, n;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(r || (r = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(n || (n = {}))
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return g
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/constants/posts.ts"),
				a = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				d = s("./src/reddit/hooks/useUserContext.ts"),
				c = s("./src/reddit/models/User/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/subreddit.ts");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n.a.createContext(null);

			function p(e) {
				const t = Object(i.e)(t => Object(l.G)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(d.a)(),
					r = Object(i.e)(e => t ? Object(u.M)(e, {
						identifier: t.belongsTo
					}) : null),
					n = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? r : null,
					b = !(!s || (null == t ? void 0 : t.author) !== Object(c.e)(s)),
					m = Object(i.e)(i => ({
						currentUser: s,
						imageGalleryCurrentItem: Object(l.i)(i, {
							postId: e
						}),
						isModerator: !(!n || !i.moderatingSubreddits[n.name]),
						post: t,
						postId: e,
						subreddit: n,
						subredditOrProfile: r,
						userIsOp: b
					}));
				return Object(a.a)(m)
			}

			function h(e) {
				const {
					postId: t,
					children: s
				} = e, r = p(t);
				return n.a.createElement(m.Provider, {
					value: r
				}, s)
			}

			function f(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return n.a.createElement(m.Consumer, null, r => {
						if (!r) throw new Error(`No Post context for <${t}/>!`);
						return n.a.createElement(e, b({}, s, r))
					})
				}
				return s.displayName = `PostContext(${t})`, s
			}

			function g(e) {
				const t = e.displayName || e.name;

				function s(t) {
					const s = p(t.postId);
					return n.a.createElement(m.Provider, {
						value: s
					}, n.a.createElement(e, b({}, t, s)))
				}
				return s.displayName = `PostProvider(${t})`, s
			}
			t.c = m
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return m
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
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
			const l = n.a.createContext({
				currentUser: null,
				modModeEnabled: !1,
				nightmodeEnabled: !1,
				prefs: a.a,
				isLoggedIn: !1
			});

			function u() {
				const e = Object(i.e)(e => ({
					currentUser: Object(d.k)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(d.db)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(d.Q)(e)
				}));
				return Object(o.a)(e)
			}

			function b(e) {
				return n.a.createElement(l.Provider, {
					value: u()
				}, e.children)
			}

			function m(e) {
				const t = e.displayName || e.name;

				function s(t) {
					return n.a.createElement(l.Consumer, null, s => n.a.createElement(e, c({}, t, s)))
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
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = e => Object(i.a)(e, {
				endpoint: Object(o.a)(`${r.a.gatewayUrl}/desktopapi/v1/me`),
				method: n.jb.GET
			})
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			var r = s("./src/config.ts");
			const n = `${r.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				i = `${r.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				o = `${r.a.assetPath}/img/favicon/favicon-32x32.png`,
				a = `${r.a.assetPath}/img/favicon/favicon-16x16.png`,
				d = "badgeCountSync",
				c = e => window.document.querySelector(`link[href="${e}"]`),
				l = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					const t = c(e ? o : n),
						s = c(e ? a : i);
					t && s && (t.href = e ? n : o, s.href = e ? i : a)
				},
				u = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: d,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./node_modules/react-redux/es/index.js");

			function i(e) {
				const t = Object(r.useRef)(e);
				return t.current === e || Object(n.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./src/reddit/contexts/User/index.tsx");

			function i() {
				return Object(r.useContext)(n.a)
			}
		},
		"./src/reddit/models/Badge/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n, i, o = s("./src/config.ts");

			function a(e) {
				return "userId" in e
			}

			function d(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function c(e, t, s) {
				const r = s.media[0],
					n = Object.keys(r);
				if (r["0x0"]) return r["0x0"];
				let i = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (n.forEach(s => {
						const n = r[s],
							[o, a] = s.split("x").map(e => parseInt(e));
						(o < i.width && o >= e || a < i.height && a >= t) && (i = {
							height: a,
							width: o,
							url: n
						})
					}), !i.url && n.length) {
					const e = Object.keys(r)[0],
						t = r[e],
						[s, n] = e.split("x").map(e => parseInt(e));
					i = {
						height: n,
						width: s,
						url: t
					}
				}
				return i.url
			}

			function l(e) {
				return e.startsWith("https") ? e : `${o.a.assetPath}/${e}`
			}

			function u(e, t, s) {
				const r = c(e, t, s),
					n = c(2 * e, 2 * t, s);
				return {
					url: l(r),
					url2x: l(n)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(r || (r = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages"
			}(n || (n = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(i || (i = {}))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n = s("./node_modules/lodash/isEqual.js"),
				i = s.n(n),
				o = s("./node_modules/lodash/merge.js"),
				a = s.n(o),
				d = s("./node_modules/lodash/pick.js"),
				c = s.n(d),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/comment/constants.ts"),
				b = s("./src/reddit/actions/contentGate.ts"),
				m = s("./src/reddit/actions/frontpage/constants.ts"),
				p = s("./src/reddit/actions/header.ts"),
				h = s("./src/reddit/actions/modQueue/constants.ts"),
				f = s("./src/reddit/actions/pages/constants.ts"),
				g = s("./src/reddit/actions/pages/modListing/constants.ts"),
				v = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				O = s("./src/reddit/actions/pages/postCreation.ts"),
				y = s("./src/reddit/actions/pages/postDraft.ts"),
				_ = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				P = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				j = s("./src/reddit/actions/pages/profilePosts.ts"),
				T = s("./src/reddit/actions/pages/search/index.ts"),
				E = s("./src/reddit/actions/pages/subreddit.ts"),
				C = s("./src/reddit/actions/pages/topic.ts"),
				w = s("./src/reddit/actions/postCreation/constants.ts"),
				S = s("./src/reddit/actions/postDraft.ts"),
				I = s("./src/reddit/actions/preferences.ts"),
				D = s("./src/reddit/actions/redditEmbed.ts"),
				x = s("./src/reddit/actions/search.ts"),
				A = s("./src/reddit/actions/structuredStyles/constants.ts"),
				M = s("./src/reddit/actions/subreddit.ts"),
				k = s("./src/reddit/actions/users.ts"),
				N = s("./src/reddit/constants/postLayout.ts"),
				R = s("./src/reddit/constants/preferences.ts"),
				L = s("./src/reddit/constants/theme.ts"),
				F = s("./src/reddit/models/PostCreationForm/index.ts"),
				V = s("./src/reddit/models/PostDraft/index.ts"),
				U = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(r || (r = {}));
			const B = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "enableFollowers", "feedRecommendationsEnabled", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...R.a, "loginOtpEnabled"],
				G = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: U.a,
					commentMode: F.i.RICH_TEXT,
					countryCode: "",
					badCommentAutocollapse: l.l.OFF,
					layout: N.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: l.t.CONFIDENCE,
					editorMode: F.i.RICH_TEXT,
					enableFollowers: !0,
					geopopular: void 0,
					globalTheme: L.a,
					hamburgerTray: void 0,
					hasSeenCustomizeFlyout: !0,
					hideNSFW: !0,
					ignoreSuggestedSort: !1,
					labelNSFW: !0,
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
					sort: l.Y.Hot,
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
				q = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				H = (e, t) => {
					if (!t) return e;
					const s = c()({
							...t.account,
							...t
						}, B),
						r = t.subreddit,
						n = {
							...e.subreddit
						};
					Object.keys(r || {}).forEach(e => {
						n[e] = {
							...q,
							...r && r[e]
						}
					});
					const o = {
						...e,
						...s,
						subreddit: n
					};
					if (o.useMarkdown !== e.useMarkdown) {
						const e = o.useMarkdown ? F.i.MARKDOWN : F.i.RICH_TEXT;
						o.editorMode = e, o.commentMode = e
					}
					return i()(o, e) ? e : o
				},
				$ = (e, t, s) => H(e, {
					subreddit: {
						[t]: {
							...q,
							...e.subreddit[t],
							...s
						}
					}
				});
			t.c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
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
					case w.s:
					case w.Q: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							editorMode: s
						}
					}
					case p.d:
						return {
							...e, subscriptionsPinned: !0
						};
					case p.e:
						return {
							...e, subscriptionsPinned: !1
						};
					case S.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === V.b.Markdown ? F.i.MARKDOWN : F.i.RICH_TEXT
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
					case I.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case I.p: {
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
					case b.i:
						return {
							...e, over18: !0
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
					case b.h:
						return {
							...e, gatedSubredditOptIn: t.payload
						};
					case b.j:
						return {
							...e, quarantineOptIn: t.payload
						};
					case I.r:
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
					case b.b:
					case b.c:
					case b.k:
					case b.l:
					case b.g:
					case b.a:
					case b.m:
					case g.e:
					case g.h:
					case f.a:
					case f.e:
					case f.b:
					case f.f:
					case f.d:
					case f.h:
					case m.b:
					case E.SUBREDDIT_LOADED:
					case v.b:
					case v.a:
					case _.e:
					case P.e:
					case P.b:
					case j.PROFILE_POSTS_LOADED:
					case m.f:
					case M.i:
					case x.e:
					case D.b:
					case O.PAGE_LOADED:
					case y.PAGE_LOADED:
					case I.j:
					case I.b:
					case T.c:
					case I.a:
					case k.c:
					case C.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? H(e, t.payload.preferences) : e;
					case I.q: {
						const {
							subredditId: s,
							prefs: r
						} = t.payload;
						return $(e, s, r)
					}
					case _.d:
					case P.d:
					case P.a:
					case j.PROFILE_POSTS_FAILED: {
						let s = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: r,
								showPresence: n
							} = t.payload.account;
							e.nightmode !== r && (s = {
								...s,
								nightmode: r
							}), e.showPresence !== n && (s = {
								...s,
								showPresence: n
							})
						}
						return s
					}
					case h.h:
					case h.j:
					case h.i:
					case h.g:
					case h.f:
					case h.n:
					case h.m:
					case h.p:
					case h.q:
					case h.w:
					case h.v:
						return t.payload && t.payload.response && t.payload.response.preferences ? H(e, t.payload.preferences) : e;
					case I.n: {
						const s = t.payload,
							{
								enableFollowers: r,
								showActiveCommunities: n
							} = s.additional;
						let i = e;
						return e.enableFollowers !== r && (i = {
							...i,
							enableFollowers: r
						}), e.showActiveCommunities !== n && (i = {
							...i,
							showActiveCommunities: n
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
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/loadableAction/index.ts"),
				o = s("./src/reddit/routes/postCreation/constants.ts");
			const a = [o.b, o.c, o.a],
				d = Object(r.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), s.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
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
					return o.c.replace(/:subredditName/, e) + (t ? `?collection=${t}` : "")
				},
				u = e => o.a.replace(/:profileName/, e),
				b = {
					action: Object(i.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), s.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: d,
					chunk: n.r.POST_CREATION,
					exact: !0,
					meta: {
						name: n.Nb.POST_CREATION
					},
					path: a,
					prefetches: [n.r.COMMENTS_PAGE]
				};
			t.a = b
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "i", (function() {
				return b
			}));
			var r = s("./node_modules/reselect/es/index.js");
			const n = e => e.appBadges.badges,
				i = Object(r.a)(n, e => {
					var t;
					return (null === (t = e.chatUnreadMessages) || void 0 === t ? void 0 : t.count) || 0
				}),
				o = Object(r.a)(n, e => e && e.chatRooms && e.chatRooms.count || 0),
				a = Object(r.a)(n, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				d = Object(r.a)(i, n, (e, t) => {
					var s;
					return 0 === e && !!(null === (s = t.chatHasNewMessages) || void 0 === s ? void 0 : s.isShowing)
				}),
				c = Object(r.a)(n, e => e && e.activityTab && e.activityTab.count || 0),
				l = Object(r.a)(n, e => e && e.messageTab && e.messageTab.count || 0),
				u = Object(r.a)(c, l, (e, t) => e + t),
				b = Object(r.a)(i, u, (e, t) => e + t)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.a78f7a0b6eda2da3e856.js.map