// https://www.redditstatic.com/desktop2x/ReportFlow.640cf5fe6e3d7faacadf.js
// Retrieved at 6/2/2022, 3:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlow", "ReportFlowNew"], {
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isPseudoLocale = t.isISOLocaleSupported = t.toISOLocale = t.isoLocaleToR2Language = void 0;
			const s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
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
				a = Object.keys(r).reduce((e, t) => (o.has(t) && (e[t] = r[t]), e), {}),
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
				let s = n.toLowerCase();
				const o = t[2];
				return o && (s = `${s}-${o.toUpperCase()}`), s
			};
			const l = new Set(Object.keys(i));
			t.isISOLocaleSupported = e => !!e && l.has(e), t.isPseudoLocale = e => !!e && (e === s.PSEUDO_AUTO || Object.values(s.PseudoLocale).includes(e))
		},
		"./node_modules/lodash/_baseInverter.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseForOwn.js");
			e.exports = function(e, t, n, o) {
				return s(e, (function(e, s, r) {
					t(o, n(e), s, r)
				})), o
			}
		},
		"./node_modules/lodash/_createInverter.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseInverter.js");
			e.exports = function(e, t) {
				return function(n, o) {
					return s(n, e, t(o), {})
				}
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFindIndex.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				r = n("./node_modules/lodash/toInteger.js"),
				a = Math.max,
				i = Math.min;
			e.exports = function(e, t, n) {
				var l = null == e ? 0 : e.length;
				if (!l) return -1;
				var d = l - 1;
				return void 0 !== n && (d = r(n), d = n < 0 ? a(l + d, 0) : i(d, l - 1)), s(e, o(t, 3), d, !0)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFlatten.js"),
				o = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return s(o(e, t), 1)
			}
		},
		"./node_modules/lodash/invert.js": function(e, t, n) {
			var s = n("./node_modules/lodash/constant.js"),
				o = n("./node_modules/lodash/_createInverter.js"),
				r = n("./node_modules/lodash/identity.js"),
				a = Object.prototype.toString,
				i = o((function(e, t, n) {
					null != t && "function" != typeof t.toString && (t = a.call(t)), e[t] = n
				}), s(r));
			e.exports = i
		},
		"./node_modules/lodash/uniqWith.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, t) {
				return t = "function" == typeof t ? t : void 0, e && e.length ? s(e, void 0, t) : []
			}
		},
		"./node_modules/lodash/xor.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayFilter.js"),
				o = n("./node_modules/lodash/_baseRest.js"),
				r = n("./node_modules/lodash/_baseXor.js"),
				a = n("./node_modules/lodash/isArrayLikeObject.js"),
				i = o((function(e) {
					return r(s(e, a))
				}));
			e.exports = i
		},
		"./node_modules/uuid/index.js": function(e, t, n) {
			var s = n("./node_modules/uuid/v1.js"),
				o = n("./node_modules/uuid/v4.js"),
				r = o;
			r.v1 = s, r.v4 = o, e.exports = r
		},
		"./node_modules/uuid/v1.js": function(e, t, n) {
			var s, o, r = n("./node_modules/uuid/lib/rng-browser.js"),
				a = n("./node_modules/uuid/lib/bytesToUuid.js"),
				i = 0,
				l = 0;
			e.exports = function(e, t, n) {
				var d = t && n || 0,
					c = t || [],
					u = (e = e || {}).node || s,
					p = void 0 !== e.clockseq ? e.clockseq : o;
				if (null == u || null == p) {
					var m = r();
					null == u && (u = s = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == p && (p = o = 16383 & (m[6] << 8 | m[7]))
				}
				var h = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					b = void 0 !== e.nsecs ? e.nsecs : l + 1,
					f = h - i + (b - l) / 1e4;
				if (f < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (f < 0 || h > i) && void 0 === e.nsecs && (b = 0), b >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				i = h, l = b, o = p;
				var x = (1e4 * (268435455 & (h += 122192928e5)) + b) % 4294967296;
				c[d++] = x >>> 24 & 255, c[d++] = x >>> 16 & 255, c[d++] = x >>> 8 & 255, c[d++] = 255 & x;
				var _ = h / 4294967296 * 1e4 & 268435455;
				c[d++] = _ >>> 8 & 255, c[d++] = 255 & _, c[d++] = _ >>> 24 & 15 | 16, c[d++] = _ >>> 16 & 255, c[d++] = p >>> 8 | 128, c[d++] = 255 & p;
				for (var R = 0; R < 6; ++R) c[d + R] = u[R];
				return t || a(c)
			}
		},
		"./src/higherOrderComponents/asModal/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/elementIds.ts");
			const o = () => {
					const e = document.getElementById(s.a);
					e && (e.style.filter = "blur(10px)")
				},
				r = () => {
					const e = document.getElementById(s.a);
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/asModal/helpers.ts"),
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = e => {
				let {
					className: t,
					shouldBlurBackground: n,
					isVisible: s,
					...r
				} = e;
				return o.a.createElement("div", h({
					className: Object(a.a)(m.a.overlay, t, {
						[m.a.mIsVisible]: s,
						[m.a.mIsBlurred]: n
					})
				}, r))
			};

			function f(e) {
				class t extends s.Component {
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
						}), Object(u.a)(), this.ref && (this.focusTrap = new i.b(this.ref), this.focusTrap.activate()), this.props.shouldBlurBackground && Object(r.a)()
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(u.b)(), Object(d.d)(), this.focusTrap && this.focusTrap.deactivate(), this.props.shouldBlurBackground && Object(r.b)()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: s,
							onOverlayClick: r,
							overlayClassName: i,
							overlayCustomStyles: d,
							shouldBlurBackground: u,
							withOverlay: p,
							...h
						} = t, f = h;
						return o.a.createElement(l.a, {
							container: document.getElementById(c.b)
						}, o.a.createElement(b, {
							className: i,
							isVisible: p,
							onClick: this.onOverlayClick,
							shouldBlurBackground: u,
							style: d
						}, o.a.createElement("div", {
							"aria-modal": !0,
							className: Object(a.a)(m.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, o.a.createElement(e, f))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => o.a.createElement(e, t)
			}
		},
		"./src/lib/FocusTrap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = ['input:not([type="hidden"]):not([disabled])', "select:not([disabled])", "textarea:not([disabled])", "a[href]", "button:not([disabled])", '[tabindex]:not([tabindex="-1"]):not([disabled])', "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join();
			class o {
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
					const e = this.container.querySelectorAll(s);
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
				return o
			}));
			const s = /%\((\w+)\)s/g;

			function o(e, t) {
				return e.replace(s, (function(e, n) {
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
				return _
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const a = (e, t) => Object(o.a)(e, {
				...r,
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
				m = Object(s.a)(l),
				h = Object(s.a)(d),
				b = Object(s.a)(c),
				f = Object(s.a)(u),
				x = Object(s.a)(p),
				_ = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						r = Object(i.a)(o);
					if (Object(i.b)(o) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let l = !1,
						d = "";
					do {
						e(x());
						const t = {
								after: d,
								pageSize: 100
							},
							n = await a(s(), t);
						if (n && n.ok) {
							const {
								data: {
									identity: t
								}
							} = n.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: n,
									edges: s
								} = t.blockedRedditorsInfo;
								if (e(f(s.map(e => e.node.id))), n) {
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
							e(b({
								message: t
							}))
						}
					} while (l)
				}
		},
		"./src/reddit/actions/reportFlow/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			}));
			const s = "REPORT__PENDING",
				o = "REPORT__LOADED",
				r = "REPORT__FAILED",
				a = "REPORT_FLOW__TARGET_SET",
				i = "REPORT_FLOW__OPENED_FROM_MODAL_PAGE",
				l = "REPORT_FLOW__OPEN_CATEGORY",
				d = "REPORT_FLOW__USER_IS_MOD_SET"
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const o = Object(s.a)(() => Promise.all([n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(s.a)(() => Promise.all([n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				a = Object(s.a)(() => Promise.all([n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/reportFlow/reportFlow.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "postOrCommentReported", (function() {
				return M
			})), n.d(t, "reportFlowTargetSet", (function() {
				return D
			})), n.d(t, "reportFlowOpenedFromModalPage", (function() {
				return B
			})), n.d(t, "reportFlowOpenCategory", (function() {
				return U
			})), n.d(t, "reportFlowOpened", (function() {
				return H
			})), n.d(t, "reportFlowClosed", (function() {
				return G
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/reportRules.ts"),
				l = n("./src/reddit/actions/subreddit.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/actions/users.ts"),
				u = n("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"),
				p = n("./src/reddit/endpoints/post/report.ts"),
				m = n("./src/reddit/helpers/isComment.ts"),
				h = n("./src/reddit/helpers/isPost.ts"),
				b = n("./src/reddit/models/Post/index.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				R = n("./src/lib/initializeClient/installReducer.ts"),
				g = n("./node_modules/redux/es/redux.js"),
				C = n("./src/reddit/actions/reportFlow/constants.ts");
			const O = {};
			var w = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.e:
					case C.d: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case C.c: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					case C.f: {
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
			const v = {};
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.e: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					case C.d:
					case C.c: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case C.f: {
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
			const S = {};
			var y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.d: {
							const {
								id: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case C.e:
						case C.c: {
							const {
								id: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						case C.f: {
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
				k = Object(g.c)({
					error: w,
					pending: E,
					success: y
				}),
				I = n("./src/reddit/actions/platform.ts");
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.a:
						return t.payload;
					case a.c:
						return !t.payload && e;
					case I.b:
						return !1;
					case C.f:
						return !!t.payload && e;
					default:
						return e
				}
			};
			var j = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.f:
						return t.payload;
					case a.c:
						return t.payload ? null : e;
					case I.b:
						return null;
					default:
						return e
				}
			};
			var F = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.g:
						return t.payload;
					case C.f:
						return !1;
					default:
						return e
				}
			};
			var N = Object(g.c)({
				api: k,
				openedFromModalPage: T,
				postOrCommentId: j,
				userIsMod: F,
				rulesCategory: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.b:
							return t.payload
					}
					return e
				}
			});
			Object(R.a)({
				features: {
					reportFlow: N
				}
			});
			const L = Object(o.a)(C.e),
				A = Object(o.a)(C.d),
				P = Object(o.a)(C.c),
				M = (e, t) => async (n, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = e.id,
						l = o(),
						c = l.features.reportFlow.api.pending[i],
						u = l.features.reportFlow.userIsMod;
					if (c) return;
					n(L({
						id: i
					}));
					const m = await Object(p.b)(a(), e),
						h = `error-report-${i}`;
					if (m.ok) n(A({
						id: i
					})), n(d.g(h)), !t.isAbuseOfReportButton && u && n(G());
					else {
						n(P({
							id: i
						}));
						const o = m.error && m.error.fields && m.error.fields.length ? m.error.fields[0].msg : "";
						n(d.f({
							id: h,
							kind: f.b.Error,
							text: o || s.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: M(e, t)
						}))
					}
				}, D = Object(o.a)(C.f), B = Object(o.a)(C.a), U = Object(o.a)(C.b), H = (e, t, n) => async (s, o, d) => {
					let {
						apiContext: u
					} = d;
					const p = o(),
						f = Object(m.a)(e),
						R = Object(h.a)(e);
					if (!R && !f) return;
					const g = f ? p.features.comments.models[e] : p.posts.models[e];
					if (!g) return;
					if (!Object(_.Q)(o())) return s(Object(r.j)()), void s(Object(a.k)({
						actionSource: a.a.Report,
						redirectUrl: g.permalink,
						thingId: e
					}));
					s(Object(c.B)(g.author));
					const C = Object(x.U)(p, {
							postId: f ? p.features.comments.models[e].postId : p.posts.models[e].id
						}),
						O = R && Object(b.q)(g) || f && W(g, p);
					O || p.reportRules.sitewideRules && p.reportRules.sitewideRules.length || s(Object(i.d)()), !O || p.reportRules.liveStreamingRules && p.reportRules.liveStreamingRules.length || s(Object(i.c)()), C && s(Object(l.o)(C.name, C.type)), s(D(e)), s(B(!!t)), n && s(U(n)), C && s(K(C.name))
				}, q = Object(o.a)(C.g), K = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = await Object(u.a)(o());
					t(q(r.ok && !!r.body[e]))
				}, G = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					e(D(null))
				}, W = (e, t) => {
					const n = e.postId,
						s = n && t.posts.models[n];
					return !!s && Object(b.q)(s)
				}
		},
		"./src/reddit/actions/reportRules.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			const d = "SITEWIDE_RULES_LOADED",
				c = "LIVESTREAMING_RULES_LOADED",
				u = Object(o.a)(d),
				p = Object(o.a)(c),
				m = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					if (!t().user) return;
					const o = await (e => Object(a.a)(Object(i.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: r.jb.GET
					}))(s());
					if (o.ok) {
						const t = o.body,
							n = b(t.sitewide_rules);
						e(u(n))
					}
				}, h = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					if (!t().user) return;
					const o = await (e => Object(a.a)(Object(i.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/livestream_rules.json`,
						method: r.jb.GET
					}))(s());
					if (o.ok) {
						const t = o.body,
							n = b(t.livestream_rules);
						e(p(n))
					}
				}, b = e => {
					let t = [];
					if (e && e.length > 2) {
						const n = {
							reasonTextToShow: s.fbt._("It's spam or abuse", null, {
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
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "g", (function() {
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/blockedRedditors.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/accounts/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				c = n("./src/reddit/selectors/user.ts");
			const u = "USER_BLOCK__PENDING",
				p = "USER_BLOCK__LOADED",
				m = "USER_BLOCK__FAILED",
				h = Object(o.a)(u),
				b = Object(o.a)(p),
				f = Object(o.a)(m),
				x = e => async (t, n, o) => {
					let {
						apiContext: c
					} = o;
					const u = n();
					if (u.blockUser.api.pending[e]) return;
					t(h({
						username: e
					}));
					const p = await Object(i.a)(c(), e),
						m = `error-block-${e}`;
					if (p.ok) p.body.name && t(b(p.body)), p.body.id && t(Object(r.f)(p.body.id)), t(a.g(m)), t(a.f({
						kind: l.b.SuccessCommunity,
						text: s.fbt._("{username} is now blocked", [s.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
								type: p.error ? p.error.type : "Unknown error",
								username: e
							},
							o = Object(d.e)(u) && "REBLOCK_RATE_LIMIT" === p.body.reason;
						t(f(n)), t(o ? a.f({
							id: m,
							kind: l.b.Error,
							text: s.fbt._("You can't block u/{username} for 24 hours after unblocking them", [s.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: x(e)
						}) : a.f({
							id: m,
							kind: l.b.Error,
							text: s.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: x(e)
						}))
					}
				}, _ = "USER_UNBLOCK__PENDING", R = "USER_UNBLOCK__SUCCESS", g = "USER_UNBLOCK__FAILED", C = Object(o.a)(_), O = Object(o.a)(R), w = Object(o.a)(g), v = e => async (t, n, o) => {
					let {
						apiContext: d
					} = o;
					const u = n(),
						p = Object(c.k)(u),
						m = p ? p.id : void 0,
						h = u.user.blocked.data.filter(t => t.name === e)[0];
					m && (t(C({
						name: e
					})), (await Object(i.c)(d(), m, e)).ok ? (t(O({
						name: e
					})), h && h.id && t(Object(r.h)(h.id)), t(a.f({
						kind: l.b.SuccessCommunity,
						text: s.fbt._("{username} is now unblocked", [s.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(a.f({
						kind: l.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(w({
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = p.a.div("Section", c.a),
				b = p.a.wrapped(l.a, "ChevronUp", c.a),
				f = p.a.wrapped(i.a, "ChevronDown", c.a),
				x = p.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return o.a.createElement("div", m({
						className: Object(u.a)(t, {
							[c.a.mIsOpen]: n
						})
					}, s))
				}, "ArticleWrap", c.a),
				_ = p.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return o.a.createElement("div", m({
						className: Object(u.a)(t, {
							[c.a.mIsOpen]: n
						})
					}, s))
				}, "SectionHead", c.a),
				R = p.a.div("Article", c.a);
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return o.a.createElement("div", null, o.a.createElement(h, null, this.props.open ? o.a.createElement(b, null) : o.a.createElement(f, null), o.a.createElement(_, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), o.a.createElement(x, {
						isOpen: this.props.open
					}, this.props.open ? o.a.createElement(R, null, this.props.children) : null)))
				}
			}
			t.a = Object(r.b)(null, e => ({
				onSwitchSection: () => e(Object(a.i)())
			}))(g)
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
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ContentPolicy/index.m.less"),
				l = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), c = a.a.div("Content", l.a), u = a.a.a("Link", l.a);
			class p extends r.a.Component {
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(c, null, e.subredditOrProfile && !e.isLiveStreaming ? d._("Read the {=Reddit Content Policy}{=and [communityName] 's rules}", [d._param("=Reddit Content Policy", r.a.createElement(u, {
						target: "_blank",
						href: `${s.a.redditUrl}/help/contentpolicy`
					}, d._("Reddit Content Policy", null, {
						hk: "2ExUXr"
					}))), d._param("=and [communityName] 's rules", r.a.createElement("span", null, d._("and {=[communityName] 's rules}", [d._param("=[communityName] 's rules", r.a.createElement(u, {
						target: "_blank",
						href: `${e.subredditOrProfile.url}about/rules`
					}, d._("{communityName} 's rules", [d._param("communityName", e.subredditOrProfile.displayText)], {
						hk: "JAsFF"
					})))], {
						hk: "Vm81O"
					})))], {
						hk: "Mm0Ks"
					}) : d._("Read the {=Reddit Content Policy}", [d._param("=Reddit Content Policy", r.a.createElement(u, {
						target: "_blank",
						href: `${s.a.redditUrl}/help/contentpolicy`
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
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
				return r
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/reddit/constants/colors.ts");
			const r = {
				backgroundColor: o.a.overlayReportFlow
			};
			t.b = Object(s.a)({
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/formatPythonString/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/CrisisFlow/async.tsx"),
				p = n("./src/reddit/actions/reportFlow/index.ts"),
				m = n("./src/reddit/components/ContentPolicy/index.tsx"),
				h = n("./src/reddit/layout/row/Inline/index.tsx"),
				b = n("./src/higherOrderComponents/asTooltip.tsx"),
				f = n("./src/lib/classNames/index.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/index.tsx"),
				R = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				C = n("./src/reddit/components/ReportFlow/ReusableComponents/index.m.less"),
				O = n.n(C);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = c.a.div("ContentPolicyHolder", O.a),
				E = c.a.div("Header", O.a),
				S = c.a.div("Description", O.a),
				y = c.a.wrapped(x.o, "CloseButton", O.a),
				k = c.a.div("RadioOptionsSectionHeader", O.a),
				I = c.a.wrapped(R.b, "DropdownRow", O.a),
				T = c.a.div("PickerWrapper", O.a),
				j = c.a.div("SelectARuleLabel", O.a),
				F = e => {
					let {
						className: t,
						isChosen: n,
						...s
					} = e;
					return r.a.createElement(j, w({
						className: Object(f.a)(t, {
							[O.a.isChosen]: n
						})
					}, s))
				},
				N = Object(b.a)(_.a),
				L = c.a.wrapped(N, "Dropdown", O.a),
				A = c.a.wrapped(g.b, "DropdownTriangle", O.a),
				P = c.a.wrapped(R.b, "Row", O.a);
			var M = n("./src/reddit/components/ReportFlow/FileAComplaint/index.m.less"),
				D = n.n(M);
			const B = c.a.div("LinkHolder", D.a),
				U = c.a.a("Link", D.a),
				H = c.a.wrapped(h.a, "footer", D.a);
			var q = e => r.a.createElement("div", null, r.a.createElement(E, null, e.complaintPageTitle), r.a.createElement(S, null, e.complaintPrompt || s.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), r.a.createElement(B, null, r.a.createElement(U, {
					target: "_blank",
					href: e.complaintUrl
				}, e.complaintButtonText)), r.a.createElement(H, null, r.a.createElement(v, null, r.a.createElement(m.a, {
					isLiveStreaming: e.isLiveStreaming,
					subredditOrProfile: e.subredditOrProfile
				})), r.a.createElement(y, {
					onClick: e.onClose
				}, s.fbt._("Close", null, {
					hk: "4gbyAA"
				})))),
				K = n("./src/reddit/actions/userBlocks.ts"),
				G = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				W = n("./src/reddit/icons/svgs/ProfileSlashed/index.tsx"),
				z = n("./src/reddit/components/ReportFlow/FinalPage/index.m.less"),
				Q = n.n(z);
			const Y = c.a.wrapped(h.a, "blockUserHolder", Q.a),
				J = c.a.wrapped(W.a, "BlockUserIcon", Q.a),
				V = c.a.div("BlockUserHeader", Q.a),
				X = c.a.div("OptionHolder", Q.a),
				Z = c.a.div("OptionHeader", Q.a),
				$ = c.a.div("OptionDescription", Q.a),
				ee = c.a.a("Link", Q.a),
				te = c.a.wrapped(h.a, "footer", Q.a),
				ne = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse",
				se = Object(i.c)({
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(e => e.name === t.authorName),
					users: e => e.users
				});
			class oe extends r.a.Component {
				constructor() {
					super(...arguments), this.onBlockAuthor = e => {
						const {
							blockUserPending: t
						} = this.props;
						t.new !== G.a.pending && this.props.onBlockUser(e)
					}, this.getBlockUserHeaderText = () => {
						const {
							authorName: e,
							blockedUser: t,
							blockUserPending: n
						} = this.props;
						return n.new === G.a.pending ? s.fbt._("Pending...", null, {
							hk: "4x1oRk"
						}) : t ? s.fbt._("{username} is blocked", [s.fbt._param("username", e)], {
							hk: "3jnr1Z"
						}) : s.fbt._("Block {username}", [s.fbt._param("username", e)], {
							hk: "ohbdA"
						})
					}, this.renderAbuseOfReportButtonOption = () => r.a.createElement(X, null, r.a.createElement(Z, null, s.fbt._("Turn off free-form reports", null, {
						hk: "2yXM3i"
					})), r.a.createElement($, null, s.fbt._("If you are a moderator, you can {=visit the Help Center} to learn how to modify your subreddit’s reporting settings to disallow users from submitting free-form reports. We also have automated processes in place to prevent excessive reporting.", [s.fbt._param("=visit the Help Center", r.a.createElement(ee, {
						target: "_blank",
						href: ne
					}, s.fbt._("visit the Help Center", null, {
						hk: "1YxsbF"
					})))], {
						hk: "1WnTfk"
					}))), this.renderBlockUserOption = () => {
						const {
							props: e
						} = this, t = this.getBlockUserHeaderText();
						return r.a.createElement(Y, {
							onClick: () => this.onBlockAuthor(e.authorName)
						}, r.a.createElement(J, null), r.a.createElement("div", null, r.a.createElement(V, null, t), r.a.createElement($, null, s.fbt._("You won't see posts or comments from {username}. You can change this later in your preference.", [s.fbt._param("username", e.authorName)], {
							hk: "2iUUlN"
						}))))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement("div", null, r.a.createElement(E, null, s.fbt._("Thanks for letting us know!", null, {
						hk: "ytmSE"
					})), r.a.createElement(S, null, s.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "QxA7E"
					})), e.chosenRule.isAbuseOfReportButton ? this.renderAbuseOfReportButtonOption() : this.renderBlockUserOption(), r.a.createElement(te, null, r.a.createElement(v, null, r.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), r.a.createElement(y, {
						onClick: e.onClose
					}, s.fbt._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			var re = Object(a.b)(se, (e, t) => {
					let {} = t;
					return {
						onBlockUser: t => {
							e(Object(K.h)(t))
						}
					}
				})(oe),
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
			class he extends r.a.Component {
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
						reason: o,
						rulesSequence: a
					} = t, i = o.nextStepReasons, l = a.length > e ? a[e] : -1, d = i && l >= 0 ? i[l] : null;
					return r.a.createElement(T, {
						onClick: n
					}, r.a.createElement(P, {
						displayText: d ? d.reasonTextToShow : "",
						id: pe
					}), r.a.createElement(A, null), r.a.createElement(F, {
						isChosen: !!d
					}, s.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), r.a.createElement(L, {
						isFixed: !0,
						isOpen: t.dropdownIsOpen,
						tooltipId: pe
					}, i ? i.map((n, s) => r.a.createElement(I, {
						key: n.reasonTextToShow,
						displayText: n.reasonTextToShow,
						isSelected: l === s,
						onClick: n.nextStepReasons && n.nextStepReasons.length ? () => {
							t.onUpdateRulesSequence(s, e), this.onChosenRuleCleared()
						} : () => {
							t.onUpdateRulesSequence(s, e), this.onRedditRuleChange(n)
						}
					})) : null))
				}
				renderChildrenReasons(e, t, n) {
					const {
						props: s
					} = this, {
						rulesSequence: o
					} = s, a = e.nextStepReasons, i = o && o.length > t ? o[t] : -1, l = o && o.length > t + 1 ? o[t + 1] : -1;
					return a && a.length ? r.a.createElement("div", {
						style: {
							padding: `10px ${10*t}px`,
							display: i === n ? "block" : "none"
						}
					}, r.a.createElement(k, null, e.nextStepHeader), a.map((e, n) => {
						const s = l === n;
						return r.a.createElement("div", {
							key: e.reasonTextToShow
						}, r.a.createElement(de.a, {
							value: e.reasonText ? e.reasonText : "",
							label: e.reasonTextToShow,
							selected: s,
							onClick: e.nextStepReasons && e.nextStepReasons.length ? () => {
								this.props.onUpdateRulesSequence(n, t + 1), this.onChosenRuleCleared()
							} : () => {
								this.props.onUpdateRulesSequence(n, t + 1), this.onRedditRuleChange(e)
							}
						}), s && e.canWriteNotes && r.a.createElement(le.a, {
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
						} = e, s = t.nextStepReasons, o = n.length > 1 ? n[1] : -1, a = s && o >= 0 ? s[o] : null;
						return r.a.createElement("div", null, this.renderDropdownMenu(1), a ? this.renderChildrenReasons(a, 1, o) : null)
					}
					return t.nextStepReasons && t.nextStepReasons.length || (t.nextStepHeader = s.fbt._("Select a rule", null, {
						hk: "26hOYU"
					}), t.nextStepReasons = [{
						reasonText: t.reasonText,
						reasonTextToShow: t.reasonTextToShow
					}]), this.renderChildrenReasons(t, 0, e.indexOfReason)
				}
			}
			var be = Object(a.b)(me, e => ({
					onOpenDropdown: () => e(Object(ie.h)({
						tooltipId: pe
					}))
				}))(he),
				fe = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				xe = n("./src/reddit/selectors/subreddit.ts"),
				_e = n("./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less"),
				Re = n.n(_e);
			const ge = "ReportFlow--SubredditRules",
				Ce = "Custom response",
				Oe = c.a.wrapped(L, "Dropdown", Re.a),
				we = c.a.wrapped(I, "DropdownRow", Re.a),
				ve = c.a.wrapped(fe.i, "FreeFormTextArea", Re.a),
				Ee = Object(i.c)({
					dropdownIsOpen: Object(ue.b)(ge),
					freeFormReports: xe.E
				});
			class Se extends r.a.Component {
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
					return r.a.createElement("div", null, r.a.createElement(T, {
						onClick: e.onOpenDropdown
					}, r.a.createElement(P, {
						displayText: n,
						id: ge
					}), r.a.createElement(A, null), r.a.createElement(F, {
						isChosen: !!n
					}, s.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), r.a.createElement(Oe, {
						isFixed: !0,
						isOpen: e.dropdownIsOpen,
						tooltipId: ge
					}, e.subredditRules.map((t, n) => r.a.createElement(we, {
						key: `${t}-${n}`,
						displayText: t,
						isSelected: !!e.chosenRule && e.chosenRule.reasonText === t,
						onClick: () => {
							e.onChosenRuleChange({
								reasonText: t,
								reasonTextToShow: t
							}, ce.a.Rule), this.onChangeDropdownRule(null)
						}
					})), e.freeFormReports ? r.a.createElement(we, {
						displayText: s.fbt._("Custom response", null, {
							hk: "1YMpvr"
						}),
						isSelected: t.dropdownRule === Ce,
						onClick: () => {
							this.onChangeDropdownRule(Ce), this.onChosenRuleCleared()
						}
					}) : null)), t.dropdownRule === Ce ? r.a.createElement(ve, {
						placeholder: s.fbt._("Give us some detail about your report", null, {
							hk: "4Cp82U"
						}),
						onChange: this.onFreeFormResponseChange
					}) : null)
				}
			}
			var ye = Object(a.b)(Ee, e => ({
					onOpenDropdown: () => e(Object(ie.h)({
						tooltipId: ge
					}))
				}))(Se),
				ke = n("./src/reddit/models/RulesSequence/index.ts"),
				Ie = n("./src/reddit/models/Subreddit/index.ts"),
				Te = n("./src/reddit/components/ReportFlow/FirstPage/index.m.less"),
				je = n.n(Te);
			const Fe = c.a.wrapped(x.l, "SubmitButton", je.a);
			class Ne extends r.a.Component {
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
					} = this, o = n.rulesSequence.getSequence(), a = t.subredditOrProfile ? t.subredditOrProfile.name : "";
					return r.a.createElement(ae.a, {
						key: "subreddit_rules_section_key",
						title: t.subredditOrProfile && t.subredditOrProfile.type === Ie.g.User ? s.fbt._("It breaks u/{subredditName}'s rules", [s.fbt._param("subredditName", a)], {
							hk: "QcQnb"
						}) : s.fbt._("It breaks r/{subredditName}'s rules", [s.fbt._param("subredditName", a)], {
							hk: "1Qdm9t"
						}),
						open: o.length > 0 && o[0] === e || "community" === t.rulesCategory,
						onOpen: () => this.onUpdateRulesSequence(e, 0)
					}, r.a.createElement(ye, {
						chosenRule: t.chosenRule,
						onChosenRuleChange: t.onChosenRuleChange,
						subredditId: t.subredditOrProfile ? t.subredditOrProfile.id : "",
						subredditRules: t.subredditRules
					}))
				}
				renderRulesSection(e, t) {
					const {
						props: n,
						state: s
					} = this, o = s.rulesSequence.getSequence();
					return r.a.createElement(ae.a, {
						key: e.reasonTextToShow,
						title: e.reasonTextToShow,
						open: o.length > 0 && o[0] === t,
						onOpen: () => this.onUpdateRulesSequence(t, 0)
					}, r.a.createElement(be, {
						onChosenRuleChange: n.onChosenRuleChange,
						onCustomTextChange: n.onCustomTextChange,
						reason: e,
						indexOfReason: t,
						dropdownIsNeeded: 0 === t,
						rulesSequence: o,
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
					return r.a.createElement("div", null, r.a.createElement(E, null, s.fbt._("We're sorry something's wrong. How can we help?", null, {
						hk: "3ljmuE"
					})), n.map((e, t) => 1 === t ? this.renderSubredditRulesSection(t) : this.renderRulesSection(e, t)), r.a.createElement(h.a, {
						className: je.a.Footer
					}, r.a.createElement(v, null, r.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), r.a.createElement(y, {
						onClick: e.onClose
					}, s.fbt._("Close", null, {
						hk: "4gbyAA"
					})), r.a.createElement(Fe, {
						onClick: e.onSubmit,
						disabled: !e.ruleIsChosen
					}, e.submitButtonText ? e.submitButtonText : s.fbt._("Submit", null, {
						hk: "4aU3dh"
					}))))
				}
			}
			var Le = Ne,
				Ae = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Pe = n("./src/reddit/components/ReportFlow/Title/index.m.less"),
				Me = n.n(Pe);
			const De = c.a.wrapped(h.a, "Title", Me.a),
				Be = c.a.div("CloseWrapper", Me.a),
				Ue = c.a.wrapped(Ae.a, "Close", Me.a);
			var He = e => r.a.createElement(De, null, r.a.createElement("div", null, e.title), r.a.createElement(Be, {
					onClick: e.onClosePressed
				}, r.a.createElement(Ue, null))),
				qe = n("./src/reddit/models/Post/index.ts"),
				Ke = n("./src/reddit/models/ReportFlow/index.ts"),
				Ge = n("./src/reddit/selectors/commentSelector.ts"),
				We = n("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				ze = n("./src/reddit/selectors/posts.ts"),
				Qe = n("./src/reddit/components/ReportFlow/_ReportFlow.m.less"),
				Ye = n.n(Qe);
			const Je = c.a.div("CloseWrapper", Ye.a),
				Ve = c.a.wrapped(Ae.a, "Close", Ye.a),
				Xe = Object(i.c)({
					comment: (e, t) => {
						let {
							commentId: n
						} = t;
						return n ? Object(Ge.b)(e, {
							commentId: n
						}) : null
					},
					isLiveStreaming: (e, t) => {
						let {
							postId: n
						} = t;
						const s = n && e.posts.models[n];
						return !!s && Object(qe.q)(s)
					},
					liveStreamingRules: e => e.reportRules.liveStreamingRules,
					rulesCategory: e => e.features.reportFlow.rulesCategory,
					post: (e, t) => {
						let {
							postId: n
						} = t;
						return n ? Object(ze.G)(e, {
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
						return n ? Object(ze.U)(e, {
							postId: n
						}) : null
					},
					subredditRules: e => e.subreddits.rules,
					userIsMod: e => e.features.reportFlow.userIsMod,
					crisisFlowEnabled: We.a
				});
			class Ze extends r.a.Component {
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
					} = this, n = t.commentId ? Ke.a.Comment : Ke.a.Post, o = t.commentId ? t.reportedPending[t.commentId] : t.postId && t.reportedPending[t.postId], a = t.subredditRules, i = t.subredditOrProfile ? t.subredditOrProfile.id : null, l = new Array;
					if (i && a[i])
						for (const s of a[i].rules) s.kind !== n && s.kind !== Ke.a.All || l.push(0 !== s.violationReason.length ? s.violationReason : s.shortName);
					const d = this.props.isLiveStreaming ? t.liveStreamingRules : t.sitewideRules;
					return r.a.createElement(Le, {
						isLiveStreaming: t.isLiveStreaming,
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
						submitButtonText: o ? s.fbt._("Pending", null, {
							hk: "2dd0cR"
						}) : void 0
					})
				}
				getInnerContent() {
					const {
						state: e,
						props: t
					} = this;
					if (e.chosenRule && e.chosenRule.fileComplaint && e.showFileAComplaintPage) return r.a.createElement(q, {
						complaintButtonText: e.chosenRule.complaintButtonText,
						complaintPageTitle: e.chosenRule.complaintPageTitle,
						complaintPrompt: e.chosenRule.complaintPrompt,
						complaintUrl: Object(d.a)(decodeURI(e.chosenRule.complaintUrl), {
							thing: t.commentId || t.postId
						}),
						isLiveStreaming: t.isLiveStreaming,
						onClose: t.onCloseReportFlow,
						subredditOrProfile: t.subredditOrProfile
					});
					if (e.chosenRule && t.commentId && t.reportedSuccess[t.commentId]) {
						const n = t.comment ? t.comment.author : "";
						return r.a.createElement(re, {
							authorName: n,
							chosenRule: e.chosenRule,
							onClose: t.onCloseReportFlow,
							subredditOrProfile: t.subredditOrProfile
						})
					}
					if (e.chosenRule && !t.commentId && t.postId && t.reportedSuccess[t.postId]) {
						const n = t.post ? t.post.author : "";
						return r.a.createElement(re, {
							authorName: n,
							chosenRule: e.chosenRule,
							isLiveStreaming: t.isLiveStreaming,
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
						if (t.commentId ? e = t.comment && t.comment.author : t.postId && (e = t.post && t.post.author), e) return r.a.createElement(o.Fragment, null, r.a.createElement(Je, {
							onClick: this.handleReportFlowClose
						}, r.a.createElement(Ve, null)), r.a.createElement(u.a, {
							onCloseReportFlow: this.handleReportFlowClose,
							thingId: t.commentId ? t.commentId : t.postId,
							username: e
						}))
					}
					const n = (t.commentId ? Ke.a.Comment : Ke.a.Post) === Ke.a.Post ? s.fbt._("Report post", null, {
						hk: "1OIyCi"
					}) : t.isLiveStreaming ? s.fbt._("Report chat message", null, {
						hk: "2gGA1m"
					}) : s.fbt._("Report comment", null, {
						hk: "Buqls"
					});
					return r.a.createElement(o.Fragment, null, r.a.createElement(He, {
						onClosePressed: t.onCloseReportFlow,
						title: n
					}), r.a.createElement("div", null, this.getInnerContent()))
				}
				render() {
					return r.a.createElement("div", {
						className: Ye.a.Wrapper
					}, this.getContent())
				}
			}
			const $e = Object(a.b)(Xe, (e, t) => {
				let {
					timestamp: n
				} = t;
				return {
					onCloseReportFlow: () => {
						e(Object(p.b)())
					},
					onReportPostOrComment: (t, s, o) => {
						e(Object(p.a)({
							id: t,
							reportFlowPayload: s,
							timestamp: n
						}, o))
					}
				}
			})(Ze);
			t.default = Object(l.a)($e)
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNew.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "ValidThingReportTypes", (function() {
				return K
			}));
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/get.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				l = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/actions/reportFlow/index.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/components/CrisisFlow/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				f = n("./src/telemetry/models/Event.ts");
			const x = e => t => ({
				source: f.f.UserReport,
				action: f.d.Click,
				noun: f.e.BlockUser,
				targetUser: {
					id: e
				},
				...b.n(t)
			});
			var _ = n("./src/reddit/components/FormBuilder/async.tsx"),
				R = n("./src/reddit/actions/userBlocks.ts"),
				g = n("./src/lib/makeGqlRequest/index.ts"),
				C = n("./src/redditGQL/operations/ReportComment.json");
			const O = (e, t) => Object(g.a)(e, {
				...C,
				variables: t
			});
			var w = n("./src/redditGQL/operations/ReportLiveStream.json");
			const v = (e, t) => Object(g.a)(e, {
				...w,
				variables: t
			});
			var E = n("./src/reddit/endpoints/messages/index.ts"),
				S = n("./src/reddit/endpoints/post/report.ts"),
				y = n("./src/redditGQL/operations/ReportForm.json");
			var k = n("./src/reddit/endpoints/talk/index.ts"),
				I = n("./src/reddit/contexts/ApiContext.tsx"),
				T = n("./src/reddit/models/Post/index.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				F = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				N = n("./src/reddit/selectors/commentSelector.ts"),
				L = n("./src/reddit/selectors/meta.ts"),
				A = n("./src/reddit/selectors/posts.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				M = n("./src/lib/lessComponent.tsx"),
				D = n("./src/reddit/components/ReportFlow/index.m.less"),
				B = n.n(D);
			const U = M.a.div("ReportLoaderWrapper", B.a),
				H = M.a.img("LoadingIcon", B.a),
				q = "2.1";
			var K;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(K || (K = {}));
			const G = Object(c.c)({
					post: (e, t) => {
						let {
							postId: n
						} = t;
						return n ? Object(A.G)(e, {
							postId: n
						}) : null
					},
					comment: (e, t) => {
						let {
							commentId: n
						} = t;
						return n ? Object(N.b)(e, {
							commentId: n
						}) : null
					},
					isLiveStreaming: (e, t) => {
						let {
							postId: n
						} = t;
						const s = n && e.posts.models[n];
						return !!s && Object(T.q)(s)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(n => {
						const {
							commentId: s,
							postId: o
						} = t, r = s ? Object(N.b)(e, {
							commentId: s
						}) : null, a = o ? Object(A.G)(e, {
							postId: o
						}) : null;
						(r ? r.author : a ? a.author : null) || t.author;
						n.name
					}),
					isNightmodeOn: P.db,
					locale: L.i
				}),
				W = Object(d.b)(G, (e, t) => {
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
							kind: j.b.Error,
							text: o.fbt._("Something went wrong!", null, {
								hk: "1BEFhz"
							})
						}))
					}
				}),
				z = async (e, t, n, s, o) => {
					var r;
					const a = await ((e, t) => {
						let {
							itemId: n,
							formVersion: s,
							hostAppName: o,
							locale: r
						} = t;
						return Object(g.a)(e, {
							...y,
							variables: {
								itemId: n,
								hostAppName: o,
								formVersion: s,
								locale: r
							}
						})
					})(e, {
						itemId: t,
						formVersion: n,
						hostAppName: s,
						locale: o
					});
					if (a && a.ok) {
						const e = null === (r = a.body.data.reportForm) || void 0 === r ? void 0 : r.form;
						return e ? JSON.parse(e) : null
					}
				};
			class Q extends l.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: n
						} = this.props;
						let s, o, r, a;
						if (this.props.author && (r = this.props.author), t) s = t, o = K.Comment, this.props.comment && !r && (r = this.props.comment.author, a = this.props.comment.authorId);
						else if (e) s = e, o = K.Post, this.props.post && !r && (r = this.props.post.author, a = this.props.post.authorId);
						else {
							if (!n) throw new Error("Invalid object type passed to reporting flow");
							s = n, o = K.Message
						}
						return {
							itemId: s,
							itemType: o,
							itemAuthor: r,
							itemAuthorId: a
						}
					}, this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onBlockAuthor = (e, t) => {
						const {
							blockUserPending: n,
							sendEvent: s
						} = this.props;
						n.new !== F.a.pending && (this.props.onBlockUser(e), s(x(t)))
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
								gqlContext: s,
								showFailToast: o,
								hostAppName: r,
								isLiveStreaming: i,
								timestamp: l
							}
						} = this, {
							itemId: d,
							itemType: c
						} = this.getItemMetadata();
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: u,
							ruleType: p,
							customRule: m
						} = e, h = {
							fromHelpDesk: !1,
							hostAppName: r
						};
						switch (p) {
							case "site":
								h.siteRule = a()(t, u.ref).value || a()(t, u.ref);
								break;
							case "subreddit":
							default:
								const e = a()(t, u.ref);
								"other" === e && m ? h.customRule = a()(t, m.ref) : h.subredditRule = e
						}
						let b;
						switch (c) {
							case K.Post:
								if (null === (n = this.props.post) || void 0 === n ? void 0 : n.audioRoom) {
									const e = new URLSearchParams(window.location.href),
										t = parseInt(e.get("reportedTimeInSeconds") || "0", 10),
										n = {
											reportedAt: isNaN(t) ? 0 : t,
											postId: d,
											...h
										};
									b = () => Object(k.f)(s(), {
										input: n
									});
									break
								}
								if (i && l) {
									const e = {
										postId: d,
										relativeReportTimeSec: l,
										...h
									};
									b = () => v(s(), {
										input: e
									});
									break
								}
								const e = {
									postId: d,
									...h
								};
								b = () => Object(S.d)(s(), {
									input: e
								});
								break;
							case K.Comment:
								const t = {
									commentId: d,
									...h
								};
								b = () => O(s(), {
									input: t
								});
								break;
							case K.Message:
								const o = {
									messageId: d,
									...h
								};
								b = () => Object(E.a)(s(), {
									input: o
								});
								break;
							default:
								throw new Error("Unsupported item type provided")
						}(await b()).ok || o()
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
						hostAppName: s
					} = this.props;
					z(n(), e, q, s, t).then(e => {
						e && this.setState({
							formComponent: e.component,
							formState: e.state,
							hasLoaded: !0
						})
					}), document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						props: {
							isNightmodeOn: e,
							postId: t,
							commentId: n,
							messageId: r
						},
						state: {
							formComponent: a,
							formState: i,
							ctlFlowOpened: d,
							hasLoaded: c
						}
					} = this, {
						itemAuthor: u,
						itemAuthorId: p
					} = this.getItemMetadata(), h = n || t || r;
					return d && u ? l.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						username: u,
						fromUserProfile: !h,
						onCloseCrisisModal: this.handleReportFlowClose,
						thingId: h
					}) : a && i && c ? l.a.createElement(_.a, {
						formComponent: a,
						formState: i,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: o.fbt._("Submit a Report", null, {
							hk: "2wubLC"
						}),
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(u, p),
						onResize: this.props.onResize
					}) : l.a.createElement(U, null, l.a.createElement(H, {
						src: e ? `${s.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${s.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: o.fbt._("Loading", null, {
							hk: "wiY7"
						})
					}))
				}
			}
			t.default = Object(I.b)(W(Object(h.c)(Q)))
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/components/ReportFlow/_ReportFlowNew.tsx");
			t.default = Object(s.a)(o.default)
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				i = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				l = n("./src/reddit/models/Rule/index.ts"),
				d = n("./src/reddit/components/ReportPage/index.m.less"),
				c = n.n(d),
				u = n("./src/reddit/components/ReportPage/CustomTextInput/index.m.less"),
				p = n.n(u);
			const m = r.a.header("InputDescription", c.a);
			class h extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						customText: "",
						maxLength: l.d,
						displayLength: 0
					}, this.onCustomTextChange = e => {
						this.setState({
							customText: e.target.value,
							...b(e.target.value)
						}), this.props.onCustomTextChange(e.target.value)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement("div", {
						className: e.className
					}, o.a.createElement("fieldset", {
						className: c.a.fieldset
					}, e.description && o.a.createElement(m, null, e.description), o.a.createElement("div", {
						className: c.a.field
					}, o.a.createElement(a.c, {
						backgroundColorState: a.a.WhiteFields,
						className: p.a.customTextInput,
						label: e.title,
						maxLength: t.maxLength,
						onChange: this.onCustomTextChange,
						value: t.customText
					}), o.a.createElement("div", {
						className: p.a.textAreaCounter
					}, `${t.displayLength}/${l.a}`))))
				}
			}
			const b = e => {
				const t = {
					displayLength: 0,
					maxLength: l.d
				};
				if (!e) return t;
				const n = l.a,
					s = e.length,
					o = Object(i.b)(e),
					r = o.reduce((e, t) => t ? e + t.url.length : e, 0);
				return {
					displayLength: Math.min(l.a, s - r + 15 * o.length),
					maxLength: Math.min(l.d, n + r - 15 * o.length)
				}
			};
			t.a = r.a.wrapped(h, "Component", p.a)
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less"),
				d = n.n(l);
			const c = a.a.wrapped(i.e, "FormElementTitle", d.a),
				u = a.a.wrapped(i.b, "FormElementDescription", d.a);
			t.a = e => o.a.createElement("div", null, o.a.createElement(c, {
				className: Object(r.a)({
					[d.a.fake]: e.fake,
					[d.a.altColor]: e.altColor
				})
			}, e.label), e.description && o.a.createElement(u, {
				className: Object(r.a)({
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
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return R
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Input/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = a.a.div("icon", c.a),
				m = a.a.textarea("textarea", c.a),
				h = a.a.span("Invalid", c.a);
			var b, f;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(b || (b = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(f || (f = {}));
			const x = e => o.a.createElement("div", {
					className: Object(r.a)(e.isRequired && c.a.required, e.className, {
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[c.a.mValid]: e.state === b.Valid,
							[c.a.mInvalid]: e.state === b.Invalid,
							[c.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}
					})
				}, o.a.createElement("label", {
					className: Object(r.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && o.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && o.a.createElement(p, {
					className: Object(r.a)({
						[c.a.mValid]: e.state === b.Valid,
						[c.a.mInvalid]: e.state === b.Invalid
					})
				}, e.state === b.Valid && o.a.createElement(l.a, null), e.state === b.Invalid && o.a.createElement(h, null, "!")))),
				_ = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: s,
						isRequired: a,
						label: l,
						onKeyDown: d,
						state: p,
						...m
					} = e;
					return o.a.createElement(x, {
						backgroundColorState: t,
						className: n,
						isRequired: a,
						label: l,
						state: p
					}, o.a.createElement(i.a, u({}, m, {
						className: Object(r.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: d
					})))
				},
				R = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: s,
						isRequired: a,
						label: i,
						onKeyDown: l,
						state: d,
						...p
					} = e;
					return o.a.createElement(x, {
						backgroundColorState: t,
						className: n,
						isRequired: a,
						label: i,
						state: d,
						isTextarea: !0
					}, o.a.createElement(m, u({}, p, {
						className: Object(r.a)({
							[c.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: s,
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less"),
				u = n.n(c);
			const p = r.a.wrapped(l.a, "RadioOption", u.a),
				m = r.a.wrapped(d.a, "ExpandRight", u.a);
			t.a = e => o.a.createElement(p, {
				value: e.value,
				selected: e.selected,
				onClick: e.onClick
			}, o.a.createElement(m, {
				heightLeft: 16,
				widthLeft: 16
			}, e.selected ? o.a.createElement(i.f, null) : o.a.createElement(i.e, null), o.a.createElement(a.a, {
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
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "j", (function() {
				return C
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				r = n.n(o);
			const a = s.a.section("FormPage", r.a),
				i = s.a.h1("HomePageTitle", r.a),
				l = s.a.button("HomePageBreadcrumb", r.a),
				d = s.a.div("HomePageGroup", r.a),
				c = s.a.h1("FormPageTitle", r.a),
				u = s.a.div("FormPageSection", r.a),
				p = s.a.div("FormGroup", r.a),
				m = s.a.h2("FormGroupTitle", r.a),
				h = s.a.div("FormElement", r.a),
				b = s.a.div("FormGroupDescription", r.a),
				f = s.a.div("FormItem", r.a),
				x = s.a.h3("FormElementTitle", r.a),
				_ = s.a.div("FormElementDescription", r.a),
				R = s.a.div("FormElementError", r.a),
				g = s.a.div("FormElementSubGroup", r.a),
				C = s.a.li("FormListItem", r.a)
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
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "g", (function() {
				return R
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Input/ModalInput.tsx"),
				r = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(d);
			const u = s.a.wrapped(o.a, "ModalInput", c.a),
				p = s.a.input("Input", c.a),
				m = s.a.wrapped(l.a, "RadioOn", c.a),
				h = s.a.wrapped(i.a, "RadioOff", c.a),
				b = s.a.wrapped(r.a, "Checkbox", c.a),
				f = s.a.wrapped(a.a, "CheckboxSelected", c.a),
				x = s.a.textarea("Textarea", c.a),
				_ = s.a.label("StyledLabel", c.a),
				R = s.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var s, o;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(s || (s = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(o || (o = {}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				m = n.n(p),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
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
					}, n = Object(i.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(l.a, f({}, t, {
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
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(c.a, {
						className: b.a.checkmark
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
				const s = Object(i.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !n.noHover,
					[b.a.mIsSelected]: n.isSelected,
					[b.a.topics]: n.isTopicsStyle
				});
				return a.a.createElement(x, f({
					className: s
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
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
				c = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class p extends o.a.Component {
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
					return o.a.createElement("input", u({
						className: Object(a.a)(c.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(r.b)(null, {
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
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Input/index.m.less"),
				r = n.n(o);
			t.a = s.a.input("input", r.a)
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/keycodes.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(c);
			class p extends o.a.Component {
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
					return e.hidden ? null : o.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(r.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? o.a.createElement(l.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : o.a.createElement(i.a, {
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
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(r);
			t.a = s.a.wrapped(o.default, "unstyledInternalLink", a.a)
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
			var s = n("./src/config.ts"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: o.jb.POST
			}), c = async (e, t, n) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: o.jb.POST
			}), u = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: o.jb.POST
			}), p = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: o.jb.POST
			}), m = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				endpoint: Object(l.a)(`${s.a.oauthUrl}/user/${t}/about`),
				method: o.jb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			t.a = async e => Object(o.a)(Object(r.a)(e, [a.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: s.jb.GET,
				traceRequestName: "get_subreddit_permissions"
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
				return b
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/helpers/reportPage/index.ts"),
				c = n("./src/redditGQL/operations/ReportPost.json");
			const u = (e, t) => Object(r.a)(e, {
				...c,
				variables: t
			});
			var p;
			! function(e) {
				e.Rule = "rule", e.SiteRule = "siteRule", e.Other = "other", e.FileComplaint = "fileComplaint", e.CrisisTextLine = "crisisTextLine"
			}(p || (p = {}));
			const m = (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
					method: s.jb.POST,
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
				b = (e, t, n) => Object(o.a)(Object(a.a)(e, [i.a]), {
					method: s.jb.POST,
					endpoint: Object(l.a)(`${e.apiUrl}/api/report`),
					data: f(t, n)
				}),
				f = (e, t) => {
					const n = {
						...Object(d.b)(e),
						api_type: "json"
					};
					return t && (n.from_help_desk = !0), n
				}
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/uuid/v4.js"),
				r = n.n(o),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/makeRequest/index.ts"),
				l = n("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"),
				d = n("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json"),
				c = n("./src/redditGQL/operations/ReportTalk.json"),
				u = n("./src/redditGQL/types.ts");
			const p = (e, t) => Object(a.a)(e, {
					...c,
					variables: t
				}),
				m = async (e, t) => {
					const n = await Object(a.a)(e, {
						...d,
						variables: t
					});
					return !!Object(i.c)(n) && (n.body.data.subredditInfoById.allowedPostTypes || []).includes(u.u.Talk)
				}, h = (e, t) => Object(a.a)(e, {
					...l,
					variables: t
				}), b = () => r()(), f = e => e.data.createAudioRoomOrError, x = {
					[u.f.ServiceError]: s.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[u.f.UserNotAuthorized]: s.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[u.f.RoomLimitExceeded]: s.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[u.f.ConcurrentRoomLimitExceeded]: s.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[u.f.SubredditRoomLimitExceeded]: s.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
						hk: "2mGf21"
					})
				}
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/env/index.ts"),
				o = n("./src/reddit/helpers/parseUrl.ts");
			const r = ["old", "new", "en", "www", "np", "m"],
				a = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(s.a)() ? [window.location.host] : []].concat("").concat(r.map((function(e) {
					return e + ".reddit.com"
				}))).concat(r.map((function(e) {
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
				const s = Object(o.a)(t);
				if (!s) return void console.error("Could not parse url", t);
				if (-1 === (n.hostnames || a).indexOf(s.hostname)) return;
				const r = s.pathname.match(n.pathname);
				if (r) {
					return {
						url: t,
						routeName: e,
						components: n.pathnameComponents.reduce((function(e, t, n) {
							return e[t] = r[n + 1], e
						}), {})
					}
				}
			}

			function c(e) {
				return (e.match(new RegExp(o.b, "g")) || []).map((function(e) {
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
				return b
			})), n.d(t, "a", (function() {
				return f
			}));
			var s = n("./src/reddit/models/RulesSequence/index.ts");
			const o = "(?:old\\.reddit\\.(?:com|local)|new\\.reddit\\.(?:com|local)|reddit\\.(?:com|local)|www\\.reddit\\.(?:com|local))",
				r = "(?:https?://)",
				a = `^${r}${o}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(?:\\w+)/(?:[^/]+)/(\\w+)(?:/.*)?`,
				i = `^${r}${o}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(\\w+)(?:/.*)?`,
				l = `^${r}${o}/message/messages/(\\w+)(?:/.*)?`,
				d = `^${r}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)(?:/)?$`,
				c = `^${r}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)/(\\w+)(?:/)?$`,
				u = `^${r}${o}/(?:rpan|live)/(?:(?:r)/(?:[^/]+)/)?(\\w+)(?:/.*)?`,
				p = `(?:${i}|${a}|${l}|${d}|${c}|${u})`,
				m = `(?:(?:${r}?${o}/)?(?:user|u)/)?([\\w-]+)(?:/)?`,
				h = `(?:(?:${r}?${o}/)?(?:r)/)?([\\w-]+)(?:/)?`,
				b = e => {
					const t = new RegExp(a),
						n = new RegExp(i),
						s = new RegExp(l),
						o = new RegExp(u),
						r = new RegExp(d),
						p = new RegExp(c);
					let b, f, x;
					if (e.thingUrl) {
						const a = e.thingUrl.trim();
						if (t.test(a)) {
							const e = t.exec(a);
							e && e.length > 1 && (b = "t1_" + e[1])
						} else if (n.test(a) || o.test(a)) {
							const e = n.exec(a) || o.exec(a);
							e && e.length > 1 && (b = "t3_" + e[1])
						} else if (s.test(a)) {
							const e = s.exec(a);
							e && e.length > 1 && (b = "t4_" + e[1])
						} else if (p.test(a)) {
							const e = p.exec(a);
							e && e.length > 2 && (f = e[1], x = e[2])
						} else if (r.test(a)) {
							const e = r.exec(a);
							e && e.length > 1 && (f = e[1])
						}
					}
					const _ = new RegExp(m),
						R = new RegExp(h),
						g = [];
					let C;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (R.test(t)) {
							const e = R.exec(t);
							e && e.length > 1 && (C = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let a = 0; a < e.usernames.length; a++) {
							const t = e.usernames[a].trim();
							if (_.test(t)) {
								const e = _.exec(t);
								e && e.length > 1 && g.push(e[1])
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
						modmail_conv_id: f,
						modmail_msg_id: x,
						sr_name: C,
						thing_id: b,
						usernames: g.length ? g.join(",") : void 0
					}
				},
				f = (e, t) => {
					const n = new s.a;
					return x(n, e, t, 0), n
				},
				x = (e, t, n, s) => {
					for (let o = 0; o < t.length; o++) {
						const r = t[o];
						e.update(o, s);
						const a = e.getSequence().length;
						if (r.reasonAsParam === n) return;
						if (r.nextStepReasons && r.nextStepReasons.length && (x(e, r.nextStepReasons, n, s + 1), e.getSequence().length > a)) return;
						e.cut(s - 1)
					}
				}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				i = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return o.a.createElement("svg", l({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(r.a)(i.a.checkbox, t)
				}, n), o.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), o.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: n,
					...s
				} = e;
				return o.a.createElement("svg", l({
					className: Object(r.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s), o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ProfileSlashed/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", l({}, e, {
				className: Object(r.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
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
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.m.less"),
				r = n.n(o);
			t.a = s.a.div("inlineRow", r.a)
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				r = n.n(o);
			t.a = s.a.button("inlineButton", r.a)
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				l = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: s,
					widthLeft: r,
					gutter: i,
					...c
				} = e;
				return o.a.createElement("div", d({
					className: Object(a.a)(l.a.expandRightContainer, t)
				}, c), o.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: r,
						height: s,
						marginRight: i
					}
				}, Array.isArray(n) && n[0]), o.a.createElement("div", {
					className: l.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/models/ReportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			}));
			var s, o, r;
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(s || (s = {})),
			function(e) {
				e.HARASSMENT_AT_ME = "HARASSMENT_AT_ME", e.HARASSMENT_AT_SOMEONE_ELSE = "HARASSSOMEONE_ELSENT_AT_ME", e.VIOLENCE_AT_ME = "VIOLENCE_AT_ME", e.VIOLENCE_AT_SOMEONE_ELSE = "VIOLENCE_AT_SOMEONE_ELSE", e.HATE_CONTENT = "HATE_CONTENT", e.MINOR_SEXUALIZATION = "HARASSMENT_AT_ME", e.PII_ABOUT_ME = "PII_ABOUT_ME", e.PII_ABOUT_SOMEONE_ELSE = "PII_ABOUT_SOMEONE_ELSE", e.INVOLUNTARY_PORN_SELF = "INVOLUNTARY_PORN_SELF", e.INVOLUNTARY_PORN_OTHER = "INVOLUNTARY_PORN_OTHER", e.PROHIBITED_SALES = "PROHIBITED_SALES", e.REPORT_BUTTON_ABUSE = "REPORT_BUTTON_ABUSE", e.IMPERSONATION_SELF = "IMPERSONATION_SELF", e.IMPERSONATION_OTHER = "IMPERSONATION_OTHER", e.COPYRIGHT_SELF = "COPYRIGHT_SELF", e.COPYRIGHT_OTHER = "COPYRIGHT_OTHER", e.TRADEMARK_SELF = "TRADEMARK_SELF", e.TRADEMARK_OTHER = "TRADEMARK_OTHER", e.NETZDG = "NETZDG", e.SELF_HARM = "SELF_HARM", e.SPAM_LINK_FARMING = "SPAM_LINK_FARMING", e.SPAM_UNSOLICITED_PMS = "SPAM_UNSOLICITED_PMS", e.SPAM_COMMENT_FLOODING = "SPAM_COMMENT_FLOODING", e.SPAM_MALWARE = "SPAM_MALWARE", e.SPAM_BOTS = "SPAM_BOTS", e.MISINFORMATION_HEALTH = "MISINFORMATION_HEALTH", e.MISINFORMATION_POLITICS = "MISINFORMATION_POLITICS", e.MISINFORMATION_FABRICATION = "MISINFORMATION_FABRICATION", e.MISINFORMATION_CONSPIRACY = "MISINFORMATION_CONSPIRACY", e.BAN_EVASION = "BAN_EVASION", e.VOTE_MANIPULATION = "VOTE_MANIPULATION"
			}(o || (o = {})),
			function(e) {
				e.R2 = "R2", e.MWEB = "MWEB", e.D2X = "D2X"
			}(r || (r = {}));
			const a = new Set(Object.values(r))
		},
		"./src/reddit/models/RulesSequence/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class s {
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
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			n("./src/reddit/selectors/user.ts");
			const s = e => e.blockedRedditors.api.pending,
				o = e => e.blockedRedditors.list,
				r = (e, t) => {
					const n = (e => {
						const t = o(e);
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
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => s.d.Enabled === Object(o.c)(e, {
					experimentEligibilitySelector: r.Q,
					experimentName: s.j
				}),
				i = e => s.f.Enabled === Object(o.c)(e, {
					experimentEligibilitySelector: r.Q,
					experimentName: s.o
				})
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"52e4102ca1f1"}')
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/ReportComment.json": function(e) {
			e.exports = JSON.parse('{"id":"cec8e7309a27"}')
		},
		"./src/redditGQL/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"404920cc0308"}')
		},
		"./src/redditGQL/operations/ReportLiveStream.json": function(e) {
			e.exports = JSON.parse('{"id":"f401837d5e74"}')
		},
		"./src/redditGQL/operations/ReportPost.json": function(e) {
			e.exports = JSON.parse('{"id":"08c43db238fd"}')
		},
		"./src/redditGQL/operations/ReportTalk.json": function(e) {
			e.exports = JSON.parse('{"id":"139ca5b89cf9"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlow.640cf5fe6e3d7faacadf.js.map