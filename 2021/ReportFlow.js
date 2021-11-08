// https://www.redditstatic.com/desktop2x/ReportFlow.03b593a5970d91b69223.js
// Retrieved at 11/8/2021, 10:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlow", "FrontpageSidebar", "ReportFlowNew"], {
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
					"bn-bd": ["bn-bd"],
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
					hi: ["hi-IN"],
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
				i = Object.keys(s).reduce((e, t) => (r.has(t) && (e[t] = s[t]), e), {}),
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
				let o = n.toLowerCase();
				const r = t[2];
				return r && (o = `${o}-${r.toUpperCase()}`), o
			};
			const l = new Set(Object.keys(a));
			t.isISOLocaleSupported = e => !!e && l.has(e);
			const c = new Set([o.PSEUDO_LONG_LOCALE, o.PSEUDO_SHORT_LOCALE, o.PSEUDO_EXT_LOCALE]);
			t.isPseudoLocale = e => !!e && c.has(e)
		},
		"./node_modules/lodash/_baseInverter.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseForOwn.js");
			e.exports = function(e, t, n, r) {
				return o(e, (function(e, o, s) {
					t(r, n(e), o, s)
				})), r
			}
		},
		"./node_modules/lodash/_baseXor.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseDifference.js"),
				r = n("./node_modules/lodash/_baseFlatten.js"),
				s = n("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, t, n) {
				var i = e.length;
				if (i < 2) return i ? s(e[0]) : [];
				for (var a = -1, l = Array(i); ++a < i;)
					for (var c = e[a], d = -1; ++d < i;) d != a && (l[a] = o(l[a] || c, e[d], t, n));
				return s(r(l, 1), t, n)
			}
		},
		"./node_modules/lodash/_createInverter.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseInverter.js");
			e.exports = function(e, t) {
				return function(n, r) {
					return o(n, e, t(r), {})
				}
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseFindIndex.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/toInteger.js"),
				i = Math.max,
				a = Math.min;
			e.exports = function(e, t, n) {
				var l = null == e ? 0 : e.length;
				if (!l) return -1;
				var c = l - 1;
				return void 0 !== n && (c = s(n), c = n < 0 ? i(l + c, 0) : a(c, l - 1)), o(e, r(t, 3), c, !0)
			}
		},
		"./node_modules/lodash/invert.js": function(e, t, n) {
			var o = n("./node_modules/lodash/constant.js"),
				r = n("./node_modules/lodash/_createInverter.js"),
				s = n("./node_modules/lodash/identity.js"),
				i = Object.prototype.toString,
				a = r((function(e, t, n) {
					null != t && "function" != typeof t.toString && (t = i.call(t)), e[t] = n
				}), o(s));
			e.exports = a
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
				i = n("./node_modules/lodash/isArrayLikeObject.js"),
				a = r((function(e) {
					return s(o(e, i))
				}));
			e.exports = a
		},
		"./node_modules/uuid/index.js": function(e, t, n) {
			var o = n("./node_modules/uuid/v1.js"),
				r = n("./node_modules/uuid/v4.js"),
				s = r;
			s.v1 = o, s.v4 = r, e.exports = s
		},
		"./node_modules/uuid/v1.js": function(e, t, n) {
			var o, r, s = n("./node_modules/uuid/lib/rng-browser.js"),
				i = n("./node_modules/uuid/lib/bytesToUuid.js"),
				a = 0,
				l = 0;
			e.exports = function(e, t, n) {
				var c = t && n || 0,
					d = t || [],
					u = (e = e || {}).node || o,
					p = void 0 !== e.clockseq ? e.clockseq : r;
				if (null == u || null == p) {
					var m = s();
					null == u && (u = o = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == p && (p = r = 16383 & (m[6] << 8 | m[7]))
				}
				var f = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					_ = void 0 !== e.nsecs ? e.nsecs : l + 1,
					b = f - a + (_ - l) / 1e4;
				if (b < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (b < 0 || f > a) && void 0 === e.nsecs && (_ = 0), _ >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				a = f, l = _, r = p;
				var h = (1e4 * (268435455 & (f += 122192928e5)) + _) % 4294967296;
				d[c++] = h >>> 24 & 255, d[c++] = h >>> 16 & 255, d[c++] = h >>> 8 & 255, d[c++] = 255 & h;
				var g = f / 4294967296 * 1e4 & 268435455;
				d[c++] = g >>> 8 & 255, d[c++] = 255 & g, d[c++] = g >>> 24 & 15 | 16, d[c++] = g >>> 16 & 255, d[c++] = p >>> 8 | 128, d[c++] = 255 & p;
				for (var w = 0; w < 6; ++w) d[c + w] = u[w];
				return t || i(d)
			}
		},
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/FocusTrap/index.ts"),
				a = n("./src/lib/portal/index.tsx"),
				l = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/constants/shortcuts.ts"),
				d = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
				p = n.n(u);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const f = ({
				className: e,
				isVisible: t,
				...n
			}) => r.a.createElement("div", m({
				className: Object(s.a)(p.a.overlay, e, {
					[p.a.mIsVisible]: t
				})
			}, n));

			function _(e) {
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
						}), Object(d.a)(), this.ref && (this.focusTrap = new i.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(d.b)(), Object(l.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: o,
							onOverlayClick: i,
							overlayClassName: l,
							overlayCustomStyles: d,
							withOverlay: u,
							...m
						} = t, _ = m;
						return r.a.createElement(a.a, {
							container: document.getElementById(c.b)
						}, r.a.createElement(f, {
							className: l,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: d
						}, r.a.createElement("div", {
							"aria-modal": !0,
							className: Object(s.a)(p.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, r.a.createElement(e, _))))
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
		"./src/lib/assertNever.ts": function(e, t, n) {
			"use strict";

			function o(e) {
				throw new Error(`Unexpected object: ${e}`)
			}
			n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/lib/constants/icons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = {
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
				powerup: "powerup",
				powerup_color_outline: "powerup_color_outline",
				powerup_fill: "powerup_fill",
				powerup_fill_color: "powerup_fill_color",
				prediction: "prediction",
				prediction_fill: "prediction_fill",
				premium: "premium",
				premium_fill: "premium_fill",
				privacy: "privacy",
				privacy_fill: "privacy_fill",
				profile: "profile",
				profile_fill: "profile_fill",
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
				rpan: "rpan",
				rpan_fill: "rpan_fill",
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
				undo: "undo",
				undo_fill: "undo_fill",
				unheart: "unheart",
				unlock: "unlock",
				unlock_fill: "unlock_fill",
				unmod: "unmod",
				unmod_fill: "unmod_fill",
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
				vault: "vault",
				vault_fill: "vault_fill",
				verified: "verified",
				verified_fill: "verified_fill",
				video_camera: "video_camera",
				video_camera_fill: "video_camera_fill",
				video_live: "video_live",
				video_live_fill: "video_live_fill",
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
				world: "world",
				world_fill: "world_fill"
			}
		},
		"./src/lib/formatApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");

			function s(e, t) {
				return e ? e.fields && e.fields.length ? e.fields.map(e => e.msg).join(", ") : e.type && i[e.type] ? i[e.type]() : 401 === t ? o.fbt._("There was an authentication error", null, {
					hk: "2KZTRv"
				}) : o.fbt._("Something went wrong", null, {
					hk: "3i6szH"
				}) : ""
			}
			const i = {
				[r.j]: () => o.fbt._("you're not allowed to do that", null, {
					hk: "1jGKQw"
				}),
				[r.K]: () => o.fbt._("GIF size must be less than {max file size}MB", [o.fbt._param("max file size", Math.floor(r.Y / r.gb).toString())], {
					hk: "1zzsdM"
				}),
				[r.Q]: () => o.fbt._("Image size must be less than {max file size}MB", [o.fbt._param("max file size", Math.floor(r.ab / r.gb).toString())], {
					hk: "3H6bF8"
				}),
				[r.S]: () => o.fbt._("Sorry, we accept only images (.png, .jpeg, .gif) and videos (.mp4, .mov)", null, {
					hk: "1hw868"
				}),
				[r.kc]: () => o.fbt._("Video size must be less than {max file size}GB", [o.fbt._param("max file size", (r.eb / r.gb / 1024).toFixed(1))], {
					hk: "4FkABU"
				})
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
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, n) {
			"use strict";

			function o(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/actions/apiRequestState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
				return p
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/models/ApiRequestState/index.ts");
			const s = "API_REQUEST_STATE__STARTED",
				i = "API_REQUEST_STATE__COMPLETED",
				a = "API_REQUEST_STATE__FAILED",
				l = "API_REQUEST_STATE__RELEASED";

			function c(e) {
				return {
					type: s,
					payload: {
						apiRequestStatus: r.a.Pending,
						apiRequestId: e
					}
				}
			}

			function d(e) {
				return {
					type: i,
					payload: {
						apiRequestStatus: r.a.Complete,
						apiRequestId: e
					}
				}
			}

			function u(e, t) {
				return {
					type: a,
					payload: {
						apiRequestStatus: r.a.Failed,
						apiRequestId: e,
						apiError: t
					}
				}
			}
			const p = Object(o.a)(l)
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return g
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const i = (e, t) => Object(r.a)(e, {
				...s,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var a = n("./src/reddit/selectors/blockedRedditors.ts");
			const l = "BLOCKED_REDDITORS_LIST__ADD",
				c = "BLOCKED_REDDITORS_LIST__REMOVE",
				d = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(o.a)(l),
				f = Object(o.a)(c),
				_ = Object(o.a)(d),
				b = Object(o.a)(u),
				h = Object(o.a)(p),
				g = () => async (e, t, {
					gqlContext: n
				}) => {
					const o = t(),
						r = Object(a.a)(o);
					if (Object(a.b)(o) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let s = !1,
						l = "";
					do {
						e(h());
						const t = {
								after: l,
								pageSize: 100
							},
							o = await i(n(), t);
						if (o && o.ok) {
							const {
								data: {
									identity: t
								}
							} = o.body;
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
									s = e, l = t || ""
								}
							} else s = !1
						} else {
							s = !1;
							const t = o.error ? o.error.type : "unknown error";
							e(_({
								message: t
							}))
						}
					} while (s)
				}
		},
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return o
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "l", (function() {
				return i
			})), n.d(t, "k", (function() {
				return a
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return f
			}));
			const o = "SUBREDDIT__FLAIRED_USERS_PENDING",
				r = "SUBREDDIT__FLAIRED_USERS_LOADED",
				s = "SUBREDDIT__FLAIRED_USERS_FAILED",
				i = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				a = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				l = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				c = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				d = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				p = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				m = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				f = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
		},
		"./src/reddit/actions/postFlairStyleTemplates/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const o = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_PENDING",
				r = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_LOADED",
				s = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_FAILED"
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
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "g", (function() {
				return c
			}));
			const o = "REPORT__PENDING",
				r = "REPORT__LOADED",
				s = "REPORT__FAILED",
				i = "REPORT_FLOW__TARGET_SET",
				a = "REPORT_FLOW__OPENED_FROM_MODAL_PAGE",
				l = "REPORT_FLOW__OPEN_CATEGORY",
				c = "REPORT_FLOW__USER_IS_MOD_SET"
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/lib/loadableAction/index.ts");
			const r = Object(o.a)(() => Promise.all([n.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				s = Object(o.a)(() => Promise.all([n.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(o.a)(() => Promise.all([n.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/reportFlow/reportFlow.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "postOrCommentReported", (function() {
				return A
			})), n.d(t, "reportFlowTargetSet", (function() {
				return B
			})), n.d(t, "reportFlowOpenedFromModalPage", (function() {
				return U
			})), n.d(t, "reportFlowOpenCategory", (function() {
				return M
			})), n.d(t, "reportFlowOpened", (function() {
				return q
			})), n.d(t, "reportFlowClosed", (function() {
				return G
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/login.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/reportRules.ts"),
				l = n("./src/reddit/actions/subreddit.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/actions/users.ts"),
				u = n("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"),
				p = n("./src/reddit/endpoints/post/report.ts"),
				m = n("./src/reddit/helpers/isComment.ts"),
				f = n("./src/reddit/helpers/isPost.ts"),
				_ = n("./src/reddit/models/Post/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				w = n("./src/lib/initializeClient/installReducer.ts"),
				x = n("./node_modules/redux/es/redux.js"),
				O = n("./src/reddit/actions/reportFlow/constants.ts");
			const v = {};
			var y = (e = v, t) => {
				switch (t.type) {
					case O.e:
					case O.d: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case O.c: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					case O.f: {
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
			const C = {};
			var E = (e = C, t) => {
				switch (t.type) {
					case O.e: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					case O.d:
					case O.c: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case O.f: {
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
			var R = (e = S, t) => {
					switch (t.type) {
						case O.d: {
							const {
								id: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case O.e:
						case O.c: {
							const {
								id: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						case O.f: {
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
				k = Object(x.c)({
					error: y,
					pending: E,
					success: R
				}),
				I = n("./src/reddit/actions/platform.ts");
			var j = (e = !1, t) => {
				switch (t.type) {
					case O.a:
						return t.payload;
					case i.c:
						return !t.payload && e;
					case I.b:
						return !1;
					case O.f:
						return !!t.payload && e;
					default:
						return e
				}
			};
			var T = (e = null, t) => {
				switch (t.type) {
					case O.f:
						return t.payload;
					case i.c:
						return t.payload ? null : e;
					case I.b:
						return null;
					default:
						return e
				}
			};
			var L = (e = !1, t) => {
				switch (t.type) {
					case O.g:
						return t.payload;
					case O.f:
						return !1;
					default:
						return e
				}
			};
			var P = Object(x.c)({
				api: k,
				openedFromModalPage: j,
				postOrCommentId: T,
				userIsMod: L,
				rulesCategory: (e = null, t) => {
					switch (t.type) {
						case O.b:
							return t.payload
					}
					return e
				}
			});
			Object(w.a)({
				features: {
					reportFlow: P
				}
			});
			const N = Object(r.a)(O.e),
				D = Object(r.a)(O.d),
				F = Object(r.a)(O.c),
				A = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const i = e.id,
						a = r(),
						l = a.features.reportFlow.api.pending[i],
						d = a.features.reportFlow.userIsMod;
					if (l) return;
					n(N({
						id: i
					}));
					const u = await Object(p.b)(s(), e),
						m = `error-report-${i}`;
					if (u.ok) n(D({
						id: i
					})), n(c.g(m)), !t.isAbuseOfReportButton && d && n(G());
					else {
						n(F({
							id: i
						}));
						const r = u.error && u.error.fields && u.error.fields.length ? u.error.fields[0].msg : "";
						n(c.f({
							id: m,
							kind: b.b.Error,
							text: r || o.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: o.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: A(e, t)
						}))
					}
				}, B = Object(r.a)(O.f), U = Object(r.a)(O.a), M = Object(r.a)(O.b), q = (e, t, n) => async (o, r, {
					apiContext: c
				}) => {
					const u = r(),
						p = Object(m.a)(e),
						b = Object(f.a)(e);
					if (!b && !p) return;
					const w = p ? u.features.comments.models[e] : u.posts.models[e];
					if (!w) return;
					if (!Object(g.K)(r())) return o(Object(s.k)()), void o(Object(i.k)({
						actionSource: i.a.Report,
						redirectUrl: w.permalink
					}));
					o(Object(d.B)(w.author));
					const x = Object(h.U)(u, {
							postId: p ? u.features.comments.models[e].postId : u.posts.models[e].id
						}),
						O = b && Object(_.p)(w) || p && W(w, u);
					O || u.reportRules.sitewideRules && u.reportRules.sitewideRules.length || o(Object(a.d)()), !O || u.reportRules.liveStreamingRules && u.reportRules.liveStreamingRules.length || o(Object(a.c)()), x && o(Object(l.o)(x.name, x.type)), o(B(e)), o(U(!!t)), n && o(M(n)), x && o(K(x.name))
				}, H = Object(r.a)(O.g), K = e => async (t, n, {
					apiContext: o
				}) => {
					const r = await Object(u.a)(o());
					t(H(r.ok && !!r.body[e]))
				}, G = () => async (e, t, {
					apiContext: n
				}) => {
					e(B(null))
				}, W = (e, t) => {
					const n = e.postId,
						o = n && t.posts.models[n];
					return !!o && Object(_.p)(o)
				}
		},
		"./src/reddit/actions/reportRules.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return f
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			const c = "SITEWIDE_RULES_LOADED",
				d = "LIVESTREAMING_RULES_LOADED",
				u = Object(r.a)(c),
				p = Object(r.a)(d),
				m = () => async (e, t, {
					apiContext: n
				}) => {
					if (!t().user) return;
					const o = await (e => Object(i.a)(Object(a.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: s.ib.GET
					}))(n());
					if (o.ok) {
						const t = o.body,
							n = _(t.sitewide_rules);
						e(u(n))
					}
				}, f = () => async (e, t, {
					apiContext: n
				}) => {
					if (!t().user) return;
					const o = await (e => Object(i.a)(Object(a.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/livestream_rules.json`,
						method: s.ib.GET
					}))(n());
					if (o.ok) {
						const t = o.body,
							n = _(t.livestream_rules);
						e(p(n))
					}
				}, _ = e => {
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
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return c
			}));
			var o = n("./src/reddit/constants/shortcuts.ts"),
				r = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				s = n("./src/reddit/helpers/routeKey/index.ts");
			const i = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const n = t.routeMatch,
						o = Object(r.a)(e);
					return Object(s.b)(n, e, o)
				},
				a = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				l = e => {
					const t = document.getElementById(e),
						n = window.scrollX,
						o = window.scrollY;
					t && (t.focus(), window.scrollTo(n, o))
				},
				c = () => {
					l(o.b)
				}
		},
		"./src/reddit/actions/structuredStyles/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return o
			})), n.d(t, "k", (function() {
				return r
			})), n.d(t, "j", (function() {
				return s
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "m", (function() {
				return b
			}));
			const o = "STRUCTURED_STYLES__STYLES_RESET_PENDING",
				r = "STRUCTURED_STYLES__STYLES_RESET_LOADED",
				s = "STRUCTURED_STYLES__STYLES_RESET_FAILED",
				i = "SUBREDDIT__STYLES_PENDING",
				a = "SUBREDDIT__STYLES_LOADED",
				l = "SUBREDDIT__STYLES_FAILED",
				c = "STRUCTURED_STYLES__DRAFT_REPLACED",
				d = "STRUCTURED_STYLES__DRAFT_UPDATED",
				u = "STRUCTURED_STYLES__EDITING_STOPPED",
				p = "STRUCTURED_STYLES__EDITING_STARTED",
				m = "STRUCTURED_STYLES__IMAGE_UPLOAD_ADDED",
				f = "STRUCTURED_STYLES__DIRTIED_BLADE_EDITOR",
				_ = "STRUCTURED_STYLES__UNDIRTIED_BLADE_EDITOR",
				b = "STRUCTURED_STYLES__STYLES_UPDATED_LOADED"
		},
		"./src/reddit/actions/structuredStyles/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return B
			})), n.d(t, "k", (function() {
				return q
			})), n.d(t, "j", (function() {
				return W
			})), n.d(t, "e", (function() {
				return Y
			})), n.d(t, "d", (function() {
				return V
			})), n.d(t, "g", (function() {
				return J
			})), n.d(t, "c", (function() {
				return $
			})), n.d(t, "f", (function() {
				return te
			})), n.d(t, "b", (function() {
				return ne
			})), n.d(t, "m", (function() {
				return oe
			})), n.d(t, "a", (function() {
				return re
			})), n.d(t, "h", (function() {
				return se
			})), n.d(t, "i", (function() {
				return ie
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/omit.js"),
				r = n.n(o),
				s = n("./node_modules/lodash/pick.js"),
				i = n.n(s),
				a = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./src/lib/filterQueryParams/index.ts"),
				c = n("./src/lib/formatApiError/index.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/reddit/actions/apiRequestState.ts"),
				p = n("./src/reddit/actions/imageUploads.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				f = n("./src/reddit/endpoints/moderator/structuredStyles.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				b = n("./src/reddit/selectors/postFlair.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const w = Object(d.a)(g.c),
				x = Object(d.a)(g.b),
				O = Object(d.a)(g.a);
			var v = n("./src/reddit/actions/toaster.ts"),
				y = n("./src/reddit/actions/widgets/index.ts"),
				C = n("./src/reddit/constants/modals.ts"),
				E = n("./src/reddit/helpers/getGenericUploadError.ts"),
				S = n("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				R = n("./src/reddit/helpers/media/index.ts"),
				k = n("./src/reddit/models/Image/index.tsx"),
				I = n("./src/reddit/models/StructuredStyles/index.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				T = n("./src/reddit/selectors/activeModalId.ts"),
				L = n("./src/reddit/selectors/platform.ts"),
				P = n("./src/reddit/selectors/structuredStyles.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/helpers/trackers/blade.ts"),
				F = n("./src/telemetry/index.ts"),
				A = n("./src/reddit/actions/structuredStyles/constants.ts");
			const B = Object(d.a)(A.m),
				U = {
					bannerBackgroundImage: ["bannerBackgroundImagePosition"],
					bannerPositionedImage: ["bannerPositionedImagePosition", "secondaryBannerPositionedImage"]
				},
				M = e => {
					const t = {
						...e
					};
					return Object.keys(e).forEach(n => {
						U[n] && !e[n] && U[n].forEach(e => t[e] = null)
					}), t
				},
				q = (e, t, n, o) => async (r, s, i) => {
					const {
						apiContext: a
					} = i, l = s(), d = M(t), m = l.structuredStyles.models[e];
					let _;
					for (const e in d)
						if (d[e] !== m[e]) {
							_ = !0;
							break
						} if (!_) return;
					r(Object(u.h)(o));
					const b = Object(D.i)(n)(l);
					let g = null,
						w = null;
					try {
						(g = await Object(p.f)(s(), k.a.StructuredStyles)) && (w = Object(p.m)(g)(r, s, i))
					} catch (C) {
						const e = Object(E.a)("webSocket");
						return void r(Object(u.f)(o, e))
					}
					const x = Object(h.Q)(l, {
							subredditId: e
						}).name,
						O = await f.e(a(), x, d),
						y = {};
					if (O.ok) {
						if (w) try {
							await w
						} catch (C) {}
						const n = Object(P.f)(s(), {
							apiRequestId: o
						});
						for (const e in n)
							if (e in t) {
								const t = Object(P.g)(s(), {
									name: e
								});
								t && Object(k.j)(t) && (y[e] = n[e])
							} Object.keys(y).length && r(Q(y)), r(Object(u.e)(o)), r(B({
							subredditId: e,
							styles: {
								...d,
								...y
							}
						}))
					} else g && g.websocket.close(), r(Object(u.f)(o, O.error)), O.body && r(v.f({
						kind: j.b.Error,
						text: Object(c.a)(O.error, O.status)
					}));
					Object(F.a)({
						...b,
						actionInfo: {
							...b.actionInfo,
							success: O.ok
						}
					})
				}, H = Object(d.a)(A.l), K = Object(d.a)(A.k), G = Object(d.a)(A.j), W = e => async (t, n, {
					apiContext: o
				}) => {
					t(H({
						subredditId: e
					}));
					const r = Object(h.Q)(n(), {
							subredditId: e
						}).name,
						s = await f.f(o(), r);
					if (s.ok) {
						const o = n().structuredStyles.models[e],
							r = o ? o.mobileKeyColor : null;
						t(K({
							subredditId: e,
							styles: {
								mobileKeyColor: r
							}
						}))
					} else t(G({
						subredditId: e,
						...s.error
					}))
				}, z = Object(d.a)(A.d), Y = e => async (t, n, o) => {
					const r = n(),
						s = r.structuredStyles.models[e] || {},
						i = Object(N.X)(r);
					t(z({
						isNightmodeOn: i,
						styles: s,
						subredditId: e
					})), de(e, !1)(t, n, o), (e => async (t, n, {
						gqlContext: o
					}) => {
						const r = n(),
							s = Object(h.Q)(r, {
								subredditId: e
							});
						if (!s) return;
						const i = Object(b.d)(r, {
								subredditId: e
							}),
							a = i && i.templateIds;
						if (!a || !a.length) return;
						t(w({
							subredditId: e
						}));
						const l = await Object(f.a)(o(), s.name, a);
						if (l.ok) {
							const n = {};
							if (l.body) {
								const {
									data: e
								} = l.body;
								if (e && e.subreddit)
									for (const t of e.subreddit.postFlairStyleTemplates) n[t.id] = Object(_.a)(t)
							}
							t(x({
								subredditId: e,
								templates: n
							}))
						} else t(O({
							subredditId: e,
							error: l.error
						}))
					})(e)(t, n, o), Object(y.g)(e, !1)(t, n, o)
				}, Q = Object(d.a)(A.c), V = e => async (t, n, o) => {
					const r = M(e),
						s = n();
					for (const e in r)
						if (Object(I.l)(e))
							if (r[e]) {
								if ("string" != typeof r[e]) {
									const s = r[e],
										i = await Object(k.e)(s);
									J(e, i)(t, n, o), r[e] = ""
								}
							} else {
								const n = Object(P.g)(s, {
									name: e
								});
								n && t(Object(p.h)(n))
							} t(Q(r))
				}, X = Object(d.a)(A.f), J = (e, t, n) => async (o, r, s) => {
					const i = r(),
						a = n || i.structuredStyles.isEditing,
						l = Object(h.Q)(i, {
							subredditId: a
						}).name;
					o(X({
						imageKey: e,
						uploadId: t.id
					})), o(Object(p.k)(t));
					const c = await f.d(s.apiContext(), l, t.file.name, e, await Object(R.g)(t.file));
					try {
						const n = await Object(p.g)(r(), c, t, k.a.StructuredStyles);
						if (n) {
							const t = n.url;
							o(Object(p.j)(n)), o(Q({
								[e]: t
							}))
						}
					} catch (d) {
						if (d instanceof Error) throw d;
						o(Object(p.i)(d))
					}
				}, Z = Object(d.a)(A.b), $ = (e, t, n) => async (o, s, a) => {
					const l = s(),
						c = l.structuredStyles.models[e] || {},
						d = l.structuredStyles.draft,
						u = Object(D.h)(t)(l);
					if (n) {
						const t = i()(c, n),
							s = {
								...r()(d, n),
								...t
							};
						o(Z({
							subredditId: e,
							styles: s
						}))
					} else {
						o(Z({
							subredditId: e,
							styles: c
						}))
					}
					Object(F.a)(u)
				}, ee = Object(d.a)(A.e), te = () => async (e, t, n) => {
					const o = t(),
						r = Object(N.Y)(o),
						s = !!Object(L.a)(o);
					if (e(ee({
							nightmodeTempUpdated: r
						})), s) return;
					const {
						url: i
					} = o.platform.currentPage;
					i && e(Object(a.c)(Object(l.a)(i, ["styling", "route"])))
				}, ne = Object(d.a)(A.a), oe = Object(d.a)(A.n), re = () => async e => e(te()), se = e => async (t, n) => {
					const o = n(),
						r = Object(P.i)(o);
					!Object(T.b)(C.a.BLADE_UNSAVED_CHANGES)(o) && r && (Object(P.a)(o, {
						subredditId: e
					}) ? t(Object(m.i)(C.a.BLADE_UNSAVED_CHANGES)) : t(re()))
				}, ie = e => async (t, n) => {
					const o = n();
					Object(P.i)(o) || t(Object(N.X)(o) ? Object(m.i)(C.a.BLADE_NIGHTMODE) : Y(e))
				}, ae = Object(d.a)(A.i), le = Object(d.a)(A.h), ce = Object(d.a)(A.g), de = (e, t) => async (n, o, {
					gqlContext: r,
					apiContext: s
				}) => {
					n(ae({
						subredditId: e
					}));
					const i = Object(h.Q)(o(), {
						subredditId: e
					});
					if (!i) return;
					if (!t) {
						const o = await f.c(s(), i.name, t);
						if (o.ok) {
							const t = o.body,
								r = t.data ? t.data.style : {};
							n(le({
								subredditId: e,
								styles: r
							}))
						} else n(ce({
							subredditId: e,
							...o.error
						}));
						return
					}
					const a = await f.b(r(), i.name);
					if (a.ok) {
						let t = {};
						if (a.body) {
							const {
								data: e
							} = a.body;
							e && e.subreddit && e.subreddit.styles && (t = Object(S.a)(e.subreddit.styles))
						}
						n(le({
							subredditId: e,
							styles: t
						}))
					} else n(ce({
						subredditId: e,
						...a.error
					}))
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "g", (function() {
				return y
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/blockedRedditors.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/accounts/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const d = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				m = Object(r.a)(d),
				f = Object(r.a)(u),
				_ = Object(r.a)(p),
				b = e => async (t, n, {
					apiContext: r
				}) => {
					if (n().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const c = await Object(a.a)(r(), e),
						d = `error-block-${e}`;
					if (c.ok) c.body.name && t(f(c.body)), c.body.id && t(Object(s.f)(c.body.id)), t(i.g(d)), t(i.f({
						kind: l.b.SuccessCommunity,
						text: o.fbt._("{username} is now blocked", [o.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
							type: c.error ? c.error.type : "Unknown error",
							username: e
						};
						t(_(n)), t(i.f({
							id: d,
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
				}, h = "USER_UNBLOCK__PENDING", g = "USER_UNBLOCK__SUCCESS", w = "USER_UNBLOCK__FAILED", x = Object(r.a)(h), O = Object(r.a)(g), v = Object(r.a)(w), y = e => async (t, n, {
					apiContext: r
				}) => {
					const d = n(),
						u = Object(c.k)(d),
						p = u ? u.id : void 0,
						m = d.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(x({
						name: e
					})), (await Object(a.c)(r(), p, e)).ok ? (t(O({
						name: e
					})), m && m.id && t(Object(s.h)(m.id)), t(i.f({
						kind: l.b.SuccessCommunity,
						text: o.fbt._("{username} is now unblocked", [o.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.f({
						kind: l.b.Error,
						text: o.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(v({
						name: e
					}))))
				}
		},
		"./src/reddit/actions/widgets/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return o
			})), n.d(t, "i", (function() {
				return r
			})), n.d(t, "h", (function() {
				return s
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			}));
			const o = "WIDGETS__WIDGET_CREATED",
				r = "WIDGETS__WIDGET_UPDATED",
				s = "WIDGET_DELETED",
				i = "WIDGETS_SORTED",
				a = "WIDGETS__STARTED_EDITING_WIDGET",
				l = "WIDGETS__LOADED",
				c = "SUBREDDIT__WIDGETS_PENDING",
				d = "SUBREDDIT__WIDGETS_LOADED",
				u = "SUBREDDIT__WIDGETS_FAILED"
		},
		"./src/reddit/actions/widgets/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return y
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "g", (function() {
				return A
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/apiRequestState.ts"),
				i = n("./src/reddit/actions/imageUploads.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts");
			const p = async (e, t, n) => Object(c.a)(Object(d.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/r/${t}/api/widgets`,
				method: l.ib.GET,
				type: "json",
				data: {
					progressive_images: n
				}
			});
			var m = n("./src/reddit/helpers/getGenericUploadError.ts"),
				f = n("./src/reddit/helpers/media/index.ts"),
				_ = n("./src/lib/assertNever.ts"),
				b = n("./src/reddit/models/Widgets/index.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/helpers/widgets/index.tsx"),
				w = n("./src/reddit/models/Image/index.tsx"),
				x = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/actions/widgets/constants.ts");
			const v = Object(r.a)(O.g),
				y = (e, t, n) => async (r, p, f) => {
					const {
						apiContext: _
					} = f;
					r(Object(s.h)(n));
					const b = p(),
						O = Object(h.Q)(b, {
							subredditId: e
						}).name,
						y = Object(g.e)(t);
					let C = null,
						E = null;
					try {
						(C = await Object(i.f)(b, w.a.Widgets)) && (E = Object(i.m)(C)(r, p, f))
					} catch (R) {
						const e = Object(m.a)("webSocket");
						return void r(Object(s.f)(n, e))
					}
					const S = await (async (e, t, n) => Object(c.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget`,
						method: l.ib.POST,
						type: "json",
						data: n
					}))(_(), O, y);
					if (S.ok) {
						let i = S.body;
						const l = i.id;
						if ("calendar" === t.kind && r(Object(a.f)({
								kind: x.b.SuccessMod,
								text: o.fbt._("New calendar added! It may take a few minutes to see your events appear", null, {
									hk: "4iETrT"
								})
							})), C) {
							try {
								await E
							} catch (R) {}
							i = await r(B(e, l)) || i
						}
						r(v({
							subredditId: e,
							widget: i,
							widgetId: l
						})), r(Object(s.e)(n))
					} else C && C.websocket.close(), r(Object(s.f)(n, S.error))
				}, C = Object(r.a)(O.i), E = (e, t, n) => async (r, p, f) => {
					const {
						apiContext: O
					} = f;
					r(Object(s.h)(n));
					const v = t.id,
						y = p(),
						E = Object(h.Q)(y, {
							subredditId: e
						}).name,
						S = Object(g.e)(t);
					let R = null,
						k = null;
					try {
						(R = await Object(i.f)(y, w.a.Widgets)) && (k = Object(i.m)(R)(r, p, f))
					} catch (j) {
						const e = Object(m.a)("webSocket");
						return void r(Object(s.f)(n, e))
					}
					const I = await (async (e, t, n) => Object(c.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget/${n.id}`,
						method: l.ib.PUT,
						type: "json",
						data: n
					}))(O(), E, S);
					if (I.ok) {
						let i = function(e, t, n) {
							switch (e.kind) {
								case b.i.Calendar:
								case b.i.IdCard:
								case b.i.SubredditRules:
									return {
										...e, ...t
									};
								case b.i.CommunityList: {
									const o = {};
									for (const t of e.data) o[t.name] = t;
									return {
										...t,
										data: t.data.map(e => {
											if (!("subscribers" in o[e])) {
												const t = {
														subredditName: e
													},
													o = Object(h.w)(n, t),
													r = Object(h.t)(n, t);
												return {
													name: o.name,
													subscribers: o ? o.subscribers : void 0,
													iconUrl: o ? o.communityIcon : void 0,
													isNSFW: o ? o.isNSFW : void 0,
													isSubscribed: r ? r.userIsSubscriber : void 0
												}
											}
											return o[e]
										})
									}
								}
								case b.i.Button:
								case b.i.Custom:
								case b.i.Image:
								case b.j.Menu:
								case b.i.Moderators:
								case b.i.Textarea:
								case b.i.PostFlair:
									return t;
								default:
									return Object(_.a)(e)
							}
						}(t, I.body, y);
						if (k) {
							try {
								await k
							} catch (j) {}
							i = await r(B(e, v)) || i
						}
						r(C({
							subredditId: e,
							widgetId: v,
							widget: i
						})), "calendar" === t.kind && r(Object(a.f)({
							kind: x.b.SuccessMod,
							text: o.fbt._("Calendar is updated! It may take a few minutes to see your events change", null, {
								hk: "10XWV"
							})
						})), r(Object(s.e)(n))
					} else R && R.websocket.close(), r(Object(s.f)(n, I.error))
				}, S = Object(r.a)(O.h), R = (e, t, n) => async (o, r, {
					apiContext: i
				}) => {
					o(Object(s.h)(n));
					const a = t.id,
						p = Object(h.Q)(r(), {
							subredditId: e
						}).name,
						m = await (async (e, t, n) => Object(c.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/r/${t}/api/widget/${n.id}`,
							method: l.ib.DELETE,
							type: "json"
						}))(i(), p, t);
					m.ok ? (o(Object(s.e)(n)), o(S({
						subredditId: e,
						widgetId: a
					}))) : o(Object(s.f)(n, m.error))
				}, k = Object(r.a)(O.f), I = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const s = Object(h.Q)(o(), {
						subredditId: e
					}).name;
					(await (async (e, t, n) => Object(c.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget_order/sidebar`,
						method: l.ib.PATCH,
						type: "json",
						data: n
					}))(r(), s, t)).ok && n(k({
						subredditId: e,
						widgetIds: t
					}))
				}, j = ({
					imageData: e
				}) => async (t, n, o) => {
					const r = n(),
						s = r.structuredStyles.isEditing,
						a = Object(h.Q)(r, {
							subredditId: s
						}).name;
					t(Object(i.k)(e));
					const p = await (async (e, t, n, o) => Object(c.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget_image_upload_s3`,
						method: l.ib.POST,
						data: {
							filepath: n,
							mimetype: o
						}
					}))(o.apiContext(), a, e.file.name, await Object(f.g)(e.file));
					let m = !1;
					try {
						const o = await Object(i.g)(n(), p, e, w.a.Widgets);
						o && (t(Object(i.j)(o)), m = !0)
					} catch (_) {
						if (_ instanceof Error) throw _;
						t(Object(i.i)(_))
					}
					return m
				}, T = Object(r.a)(O.d), L = Object(r.a)(O.e), P = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					n(Object(s.h)(t));
					const i = Object(h.Q)(o(), {
							subredditId: e
						}).name,
						a = await p(r(), i);
					if (a.ok) {
						const o = a.body;
						n(L({
							subredditId: e,
							widgets: o
						})), n(Object(s.e)(t))
					} else n(Object(s.f)(t, a.error))
				}, N = Object(r.a)(O.c), D = Object(r.a)(O.b), F = Object(r.a)(O.a), A = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					n(N({
						subredditId: e
					}));
					const s = Object(h.Q)(o(), {
							subredditId: e
						}).name,
						i = await p(r(), s, t);
					if (i.ok) {
						const t = i.body;
						n(D({
							subredditId: e,
							widgets: t
						}))
					} else n(F({
						subredditId: e,
						error: i.error
					}))
				}, B = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const s = Object(h.Q)(o(), {
							subredditId: e
						}).name,
						i = await p(r(), s, !0);
					if (i.ok) return i.body.items[t]
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
				i = n("./src/reddit/actions/tooltip.ts"),
				a = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				c = n("./src/reddit/components/AccordionSection/index.m.less"),
				d = n.n(c),
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
			const f = p.a.div("Section", d.a),
				_ = p.a.wrapped(l.a, "ChevronUp", d.a),
				b = p.a.wrapped(a.a, "ChevronDown", d.a),
				h = p.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => r.a.createElement("div", m({
					className: Object(u.a)(e, {
						[d.a.mIsOpen]: t
					})
				}, n)), "ArticleWrap", d.a),
				g = p.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => r.a.createElement("div", m({
					className: Object(u.a)(e, {
						[d.a.mIsOpen]: t
					})
				}, n)), "SectionHead", d.a),
				w = p.a.div("Article", d.a);
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return r.a.createElement("div", null, r.a.createElement(f, null, this.props.open ? r.a.createElement(_, null) : r.a.createElement(b, null), r.a.createElement(g, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), r.a.createElement(h, {
						isOpen: this.props.open
					}, this.props.open ? r.a.createElement(w, null, this.props.children) : null)))
				}
			}
			t.a = Object(s.b)(null, e => ({
				onSwitchSection: () => e(Object(i.i)())
			}))(x)
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
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ContentPolicy/index.m.less"),
				l = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), d = i.a.div("Content", l.a), u = i.a.a("Link", l.a);
			class p extends s.a.Component {
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement(d, null, e.subredditOrProfile && !e.isLiveStreaming ? c._("Read the {=Reddit Content Policy}{=and [communityName] 's rules}", [c._param("=Reddit Content Policy", s.a.createElement(u, {
						target: "_blank",
						href: `${o.a.redditUrl}/help/contentpolicy`
					}, c._("Reddit Content Policy", null, {
						hk: "2ExUXr"
					}))), c._param("=and [communityName] 's rules", s.a.createElement("span", null, c._("and {=[communityName] 's rules}", [c._param("=[communityName] 's rules", s.a.createElement(u, {
						target: "_blank",
						href: `${e.subredditOrProfile.url}about/rules`
					}, c._("{communityName} 's rules", [c._param("communityName", e.subredditOrProfile.displayText)], {
						hk: "JAsFF"
					})))], {
						hk: "Vm81O"
					})))], {
						hk: "Mm0Ks"
					}) : c._("Read the {=Reddit Content Policy}", [c._param("=Reddit Content Policy", s.a.createElement(u, {
						target: "_blank",
						href: `${o.a.redditUrl}/help/contentpolicy`
					}, c._("Reddit Content Policy", null, {
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
				backgroundColor: r.b.overlayReportFlow
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
				importAsync: () => Promise.all([n.e("vendors~chat-components-FormBuilder~reddit-components-FormBuilder"), n.e("reddit-components-FormBuilder")]).then(n.bind(null, "./src/reddit/components/FormBuilder/index.tsx")),
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/lib/formatPythonString/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/CrisisFlow/async.tsx"),
				p = n("./src/reddit/actions/reportFlow/index.ts"),
				m = n("./src/reddit/components/ContentPolicy/index.tsx"),
				f = n("./src/reddit/layout/row/Inline/index.tsx"),
				_ = n("./src/higherOrderComponents/asTooltip.tsx"),
				b = n("./src/lib/classNames/index.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/index.tsx"),
				w = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				O = n("./src/reddit/components/ReportFlow/ReusableComponents/index.m.less"),
				v = n.n(O);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const C = d.a.div("ContentPolicyHolder", v.a),
				E = d.a.div("Header", v.a),
				S = d.a.div("Description", v.a),
				R = d.a.wrapped(h.o, "CloseButton", v.a),
				k = d.a.div("RadioOptionsSectionHeader", v.a),
				I = d.a.wrapped(w.b, "DropdownRow", v.a),
				j = d.a.div("PickerWrapper", v.a),
				T = d.a.div("SelectARuleLabel", v.a),
				L = ({
					className: e,
					isChosen: t,
					...n
				}) => s.a.createElement(T, y({
					className: Object(b.a)(e, {
						[v.a.isChosen]: t
					})
				}, n)),
				P = Object(_.a)(g.a),
				N = d.a.wrapped(P, "Dropdown", v.a),
				D = d.a.wrapped(x.b, "DropdownTriangle", v.a),
				F = d.a.wrapped(w.b, "Row", v.a);
			var A = n("./src/reddit/components/ReportFlow/FileAComplaint/index.m.less"),
				B = n.n(A);
			const U = d.a.div("LinkHolder", B.a),
				M = d.a.a("Link", B.a),
				q = d.a.wrapped(f.a, "footer", B.a);
			var H = e => s.a.createElement("div", null, s.a.createElement(E, null, e.complaintPageTitle), s.a.createElement(S, null, e.complaintPrompt || o.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), s.a.createElement(U, null, s.a.createElement(M, {
					target: "_blank",
					href: e.complaintUrl
				}, e.complaintButtonText)), s.a.createElement(q, null, s.a.createElement(C, null, s.a.createElement(m.a, {
					isLiveStreaming: e.isLiveStreaming,
					subredditOrProfile: e.subredditOrProfile
				})), s.a.createElement(R, {
					onClick: e.onClose
				}, o.fbt._("Close", null, {
					hk: "4gbyAA"
				})))),
				K = n("./src/reddit/actions/userBlocks.ts"),
				G = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				W = n("./src/reddit/icons/svgs/ProfileSlashed/index.tsx"),
				z = n("./src/reddit/components/ReportFlow/FinalPage/index.m.less"),
				Y = n.n(z);
			const Q = d.a.wrapped(f.a, "blockUserHolder", Y.a),
				V = d.a.wrapped(W.a, "BlockUserIcon", Y.a),
				X = d.a.div("BlockUserHeader", Y.a),
				J = d.a.div("OptionHolder", Y.a),
				Z = d.a.div("OptionHeader", Y.a),
				$ = d.a.div("OptionDescription", Y.a),
				ee = d.a.a("Link", Y.a),
				te = d.a.wrapped(f.a, "footer", Y.a),
				ne = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse",
				oe = Object(a.c)({
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
						t.new !== G.a.pending && this.props.onBlockUser(e)
					}, this.getBlockUserHeaderText = () => {
						const {
							authorName: e,
							blockedUser: t,
							blockUserPending: n
						} = this.props;
						return n.new === G.a.pending ? o.fbt._("Pending...", null, {
							hk: "4x1oRk"
						}) : t ? o.fbt._("{username} is blocked", [o.fbt._param("username", e)], {
							hk: "3jnr1Z"
						}) : o.fbt._("Block {username}", [o.fbt._param("username", e)], {
							hk: "ohbdA"
						})
					}, this.renderAbuseOfReportButtonOption = () => s.a.createElement(J, null, s.a.createElement(Z, null, o.fbt._("Turn off free-form reports", null, {
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
						return s.a.createElement(Q, {
							onClick: () => this.onBlockAuthor(e.authorName)
						}, s.a.createElement(V, null), s.a.createElement("div", null, s.a.createElement(X, null, t), s.a.createElement($, null, o.fbt._("You won't see posts or comments from {username}. You can change this later in your preference.", [o.fbt._param("username", e.authorName)], {
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
					})), s.a.createElement(S, null, o.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "QxA7E"
					})), e.chosenRule.isAbuseOfReportButton ? this.renderAbuseOfReportButtonOption() : this.renderBlockUserOption(), s.a.createElement(te, null, s.a.createElement(C, null, s.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(R, {
						onClick: e.onClose
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			var se = Object(i.b)(oe, (e, {}) => ({
					onBlockUser: t => {
						e(Object(K.h)(t))
					}
				}))(re),
				ie = n("./src/reddit/components/AccordionSection/index.tsx"),
				ae = n("./src/reddit/actions/tooltip.ts"),
				le = n("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				ce = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				de = n("./src/reddit/endpoints/post/report.ts"),
				ue = n("./src/reddit/selectors/tooltip.ts");
			const pe = "ReportFlow--RedditRules",
				me = Object(a.c)({
					dropdownIsOpen: Object(ue.b)(pe)
				});
			class fe extends s.a.Component {
				constructor() {
					super(...arguments), this.onRedditRuleChange = e => {
						this.props.onChosenRuleChange(e, e.requestCrisisSupport ? de.a.CrisisTextLine : e.fileComplaint ? de.a.FileComplaint : de.a.SiteRule)
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
						rulesSequence: i
					} = t, a = r.nextStepReasons, l = i.length > e ? i[e] : -1, c = a && l >= 0 ? a[l] : null;
					return s.a.createElement(j, {
						onClick: n
					}, s.a.createElement(F, {
						displayText: c ? c.reasonTextToShow : "",
						id: pe
					}), s.a.createElement(D, null), s.a.createElement(L, {
						isChosen: !!c
					}, o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(N, {
						isFixed: !0,
						isOpen: t.dropdownIsOpen,
						tooltipId: pe
					}, a ? a.map((n, o) => s.a.createElement(I, {
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
					} = o, i = e.nextStepReasons, a = r && r.length > t ? r[t] : -1, l = r && r.length > t + 1 ? r[t + 1] : -1;
					return i && i.length ? s.a.createElement("div", {
						style: {
							padding: `10px ${10*t}px`,
							display: a === n ? "block" : "none"
						}
					}, s.a.createElement(k, null, e.nextStepHeader), i.map((e, n) => {
						const o = l === n;
						return s.a.createElement("div", {
							key: e.reasonTextToShow
						}, s.a.createElement(ce.a, {
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
						} = e, o = t.nextStepReasons, r = n.length > 1 ? n[1] : -1, i = o && r >= 0 ? o[r] : null;
						return s.a.createElement("div", null, this.renderDropdownMenu(1), i ? this.renderChildrenReasons(i, 1, r) : null)
					}
					return t.nextStepReasons && t.nextStepReasons.length || (t.nextStepHeader = o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					}), t.nextStepReasons = [{
						reasonText: t.reasonText,
						reasonTextToShow: t.reasonTextToShow
					}]), this.renderChildrenReasons(t, 0, e.indexOfReason)
				}
			}
			var _e = Object(i.b)(me, e => ({
					onOpenDropdown: () => e(Object(ae.h)({
						tooltipId: pe
					}))
				}))(fe),
				be = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				he = n("./src/reddit/selectors/subreddit.ts"),
				ge = n("./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less"),
				we = n.n(ge);
			const xe = "ReportFlow--SubredditRules",
				Oe = "Custom response",
				ve = d.a.wrapped(N, "Dropdown", we.a),
				ye = d.a.wrapped(I, "DropdownRow", we.a),
				Ce = d.a.wrapped(be.i, "FreeFormTextArea", we.a),
				Ee = Object(a.c)({
					dropdownIsOpen: Object(ue.b)(xe),
					freeFormReports: he.A
				});
			class Se extends s.a.Component {
				constructor(e) {
					super(e), this.onChangeDropdownRule = e => {
						this.setState({
							dropdownRule: e
						})
					}, this.onFreeFormResponseChange = e => {
						"" === e.currentTarget.value ? this.props.onChosenRuleChange() : this.props.onChosenRuleChange({
							reasonText: e.currentTarget.value,
							reasonTextToShow: e.currentTarget.value
						}, de.a.Other)
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
					return s.a.createElement("div", null, s.a.createElement(j, {
						onClick: e.onOpenDropdown
					}, s.a.createElement(F, {
						displayText: n,
						id: xe
					}), s.a.createElement(D, null), s.a.createElement(L, {
						isChosen: !!n
					}, o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(ve, {
						isFixed: !0,
						isOpen: e.dropdownIsOpen,
						tooltipId: xe
					}, e.subredditRules.map((t, n) => s.a.createElement(ye, {
						key: `${t}-${n}`,
						displayText: t,
						isSelected: !!e.chosenRule && e.chosenRule.reasonText === t,
						onClick: () => {
							e.onChosenRuleChange({
								reasonText: t,
								reasonTextToShow: t
							}, de.a.Rule), this.onChangeDropdownRule(null)
						}
					})), e.freeFormReports ? s.a.createElement(ye, {
						displayText: o.fbt._("Custom response", null, {
							hk: "1YMpvr"
						}),
						isSelected: t.dropdownRule === Oe,
						onClick: () => {
							this.onChangeDropdownRule(Oe), this.onChosenRuleCleared()
						}
					}) : null)), t.dropdownRule === Oe ? s.a.createElement(Ce, {
						placeholder: o.fbt._("Give us some detail about your report", null, {
							hk: "4Cp82U"
						}),
						onChange: this.onFreeFormResponseChange
					}) : null)
				}
			}
			var Re = Object(i.b)(Ee, e => ({
					onOpenDropdown: () => e(Object(ae.h)({
						tooltipId: xe
					}))
				}))(Se),
				ke = n("./src/reddit/models/RulesSequence/index.ts"),
				Ie = n("./src/reddit/models/Subreddit/index.ts"),
				je = n("./src/reddit/components/ReportFlow/FirstPage/index.m.less"),
				Te = n.n(je);
			const Le = d.a.wrapped(h.l, "SubmitButton", Te.a);
			class Pe extends s.a.Component {
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
					} = this, r = n.rulesSequence.getSequence(), i = t.subredditOrProfile ? t.subredditOrProfile.name : "";
					return s.a.createElement(ie.a, {
						key: "subreddit_rules_section_key",
						title: t.subredditOrProfile && t.subredditOrProfile.type === Ie.f.User ? o.fbt._("It breaks u/{subredditName}'s rules", [o.fbt._param("subredditName", i)], {
							hk: "QcQnb"
						}) : o.fbt._("It breaks r/{subredditName}'s rules", [o.fbt._param("subredditName", i)], {
							hk: "1Qdm9t"
						}),
						open: r.length > 0 && r[0] === e || "community" === t.rulesCategory,
						onOpen: () => this.onUpdateRulesSequence(e, 0)
					}, s.a.createElement(Re, {
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
					return s.a.createElement(ie.a, {
						key: e.reasonTextToShow,
						title: e.reasonTextToShow,
						open: r.length > 0 && r[0] === t,
						onOpen: () => this.onUpdateRulesSequence(t, 0)
					}, s.a.createElement(_e, {
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
					})), n.map((e, t) => 1 === t ? this.renderSubredditRulesSection(t) : this.renderRulesSection(e, t)), s.a.createElement(f.a, {
						className: Te.a.Footer
					}, s.a.createElement(C, null, s.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(R, {
						onClick: e.onClose
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})), s.a.createElement(Le, {
						onClick: e.onSubmit,
						disabled: !e.ruleIsChosen
					}, e.submitButtonText ? e.submitButtonText : o.fbt._("Submit", null, {
						hk: "4aU3dh"
					}))))
				}
			}
			var Ne = Pe,
				De = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Fe = n("./src/reddit/components/ReportFlow/Title/index.m.less"),
				Ae = n.n(Fe);
			const Be = d.a.wrapped(f.a, "Title", Ae.a),
				Ue = d.a.div("CloseWrapper", Ae.a),
				Me = d.a.wrapped(De.a, "Close", Ae.a);
			var qe = e => s.a.createElement(Be, null, s.a.createElement("div", null, e.title), s.a.createElement(Ue, {
					onClick: e.onClosePressed
				}, s.a.createElement(Me, null))),
				He = n("./src/reddit/models/Post/index.ts"),
				Ke = n("./src/reddit/models/ReportFlow/index.ts"),
				Ge = n("./src/reddit/selectors/commentSelector.ts"),
				We = n("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				ze = n("./src/reddit/selectors/posts.ts"),
				Ye = n("./src/reddit/components/ReportFlow/_ReportFlow.m.less"),
				Qe = n.n(Ye);
			const Ve = d.a.div("CloseWrapper", Qe.a),
				Xe = d.a.wrapped(De.a, "Close", Qe.a),
				Je = Object(a.c)({
					comment: (e, {
						commentId: t
					}) => t ? Object(Ge.b)(e, {
						commentId: t
					}) : null,
					isLiveStreaming: (e, {
						postId: t
					}) => {
						const n = t && e.posts.models[t];
						return !!n && Object(He.p)(n)
					},
					liveStreamingRules: e => e.reportRules.liveStreamingRules,
					rulesCategory: e => e.features.reportFlow.rulesCategory,
					post: (e, {
						postId: t
					}) => t ? Object(ze.H)(e, {
						postId: t
					}) : null,
					reportedPending: e => e.features.reportFlow.api.pending,
					reportedSuccess: e => e.features.reportFlow.api.success,
					sitewideRules: e => e.reportRules.sitewideRules,
					subredditOrProfile: (e, {
						postId: t
					}) => t ? Object(ze.U)(e, {
						postId: t
					}) : null,
					subredditRules: e => e.subreddits.rules,
					userIsMod: e => e.features.reportFlow.userIsMod,
					crisisFlowEnabled: We.a
				});
			class Ze extends s.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onSubmit = () => {
						if (this.state.chosenRule)
							if (this.props.crisisFlowEnabled)
								if (this.state.chosenRuleKind === de.a.CrisisTextLine) this.setState({
									showCTLPage: !0
								});
								else if (this.state.chosenRuleKind === de.a.FileComplaint) this.setState({
							showFileAComplaintPage: !0
						});
						else {
							const e = {
								rule: this.state.chosenRule.reasonText,
								kind: this.state.chosenRuleKind
							};
							this.state.chosenRule.canWriteNotes && (e.customText = this.state.customText), this.props.commentId ? this.props.onReportPostOrComment(this.props.commentId, e, this.state.chosenRule) : this.props.postId && this.props.onReportPostOrComment(this.props.postId, e, this.state.chosenRule)
						} else if (this.state.chosenRuleKind === de.a.FileComplaint || this.state.chosenRuleKind === de.a.CrisisTextLine) this.setState({
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
					} = this, n = t.commentId ? Ke.a.Comment : Ke.a.Post, r = t.commentId ? t.reportedPending[t.commentId] : t.postId && t.reportedPending[t.postId], i = t.subredditRules, a = t.subredditOrProfile ? t.subredditOrProfile.id : null, l = new Array;
					if (a && i[a])
						for (const o of i[a].rules) o.kind !== n && o.kind !== Ke.a.All || l.push(0 !== o.violationReason.length ? o.violationReason : o.shortName);
					const c = this.props.isLiveStreaming ? t.liveStreamingRules : t.sitewideRules;
					return s.a.createElement(Ne, {
						isLiveStreaming: t.isLiveStreaming,
						onSubmit: this.onSubmit,
						onClose: t.onCloseReportFlow,
						subredditRules: l,
						onChosenRuleChange: this.onChosenRuleChange,
						onCustomTextChange: this.onCustomTextChange,
						ruleIsChosen: !!e.chosenRule,
						chosenRule: e.chosenRule,
						reasons: c,
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
						complaintUrl: Object(c.a)(decodeURI(e.chosenRule.complaintUrl), {
							thing: t.commentId || t.postId
						}),
						isLiveStreaming: t.isLiveStreaming,
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
					if (t.crisisFlowEnabled && e.chosenRuleKind === de.a.CrisisTextLine && e.showCTLPage) {
						let e;
						if (t.commentId ? e = t.comment && t.comment.author : t.postId && (e = t.post && t.post.author), e) return s.a.createElement(r.Fragment, null, s.a.createElement(Ve, {
							onClick: this.handleReportFlowClose
						}, s.a.createElement(Xe, null)), s.a.createElement(u.a, {
							onCloseReportFlow: this.handleReportFlowClose,
							thingId: t.commentId ? t.commentId : t.postId,
							username: e
						}))
					}
					const n = (t.commentId ? Ke.a.Comment : Ke.a.Post) === Ke.a.Post ? o.fbt._("Report post", null, {
						hk: "1OIyCi"
					}) : t.isLiveStreaming ? o.fbt._("Report chat message", null, {
						hk: "2gGA1m"
					}) : o.fbt._("Report comment", null, {
						hk: "Buqls"
					});
					return s.a.createElement(r.Fragment, null, s.a.createElement(qe, {
						onClosePressed: t.onCloseReportFlow,
						title: n
					}), s.a.createElement("div", null, this.getInnerContent()))
				}
				render() {
					return s.a.createElement("div", {
						className: Qe.a.Wrapper
					}, this.getContent())
				}
			}
			const $e = Object(i.b)(Je, (e, {
				timestamp: t
			}) => ({
				onCloseReportFlow: () => {
					e(Object(p.b)())
				},
				onReportPostOrComment: (n, o, r) => {
					e(Object(p.a)({
						id: n,
						reportFlowPayload: o,
						timestamp: t
					}, r))
				}
			}))(Ze);
			t.default = Object(l.a)($e)
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNew.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "ValidThingReportTypes", (function() {
				return B
			}));
			var o = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/get.js"),
				i = n.n(s),
				a = n("./node_modules/react/index.js"),
				l = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/actions/reportFlow/index.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/components/CrisisFlow/index.tsx"),
				f = n("./src/reddit/components/FormBuilder/async.tsx"),
				_ = n("./src/reddit/actions/userBlocks.ts"),
				b = n("./src/lib/makeGqlRequest/index.ts"),
				h = n("./src/redditGQL/operations/ReportComment.json");
			const g = (e, t) => Object(b.a)(e, {
				...h,
				variables: t
			});
			var w = n("./src/redditGQL/operations/ReportLiveStream.json");
			const x = (e, t) => Object(b.a)(e, {
				...w,
				variables: t
			});
			var O = n("./src/reddit/endpoints/messages/index.ts"),
				v = n("./src/reddit/endpoints/post/report.ts"),
				y = n("./src/redditGQL/operations/ReportForm.json");
			var C = n("./src/reddit/contexts/ApiContext.tsx"),
				E = n("./src/reddit/models/Post/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				R = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				k = n("./src/reddit/selectors/commentSelector.ts"),
				I = n("./src/reddit/selectors/meta.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				L = n("./src/lib/lessComponent.tsx"),
				P = n("./src/reddit/components/ReportFlow/index.m.less"),
				N = n.n(P);
			const D = L.a.div("ReportLoaderWrapper", N.a),
				F = L.a.img("LoadingIcon", N.a),
				A = "2.1";
			var B;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(B || (B = {}));
			const U = Object(d.c)({
					post: (e, {
						postId: t
					}) => t ? Object(j.H)(e, {
						postId: t
					}) : null,
					comment: (e, {
						commentId: t
					}) => t ? Object(k.b)(e, {
						commentId: t
					}) : null,
					isLiveStreaming: (e, {
						postId: t
					}) => {
						const n = t && e.posts.models[t];
						return !!n && Object(E.p)(n)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(n => {
						const {
							commentId: o,
							postId: r
						} = t, s = o ? Object(k.b)(e, {
							commentId: o
						}) : null, i = r ? Object(j.H)(e, {
							postId: r
						}) : null;
						(s ? s.author : i ? i.author : null) || t.author;
						n.name
					}),
					isNightmodeOn: T.X,
					locale: I.i
				}),
				M = Object(c.b)(U, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(u.b)())
					},
					onBlockUser: t => {
						e(Object(_.h)(t))
					},
					showFailToast: () => e(Object(p.f)({
						kind: S.b.Error,
						text: r.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					}))
				})),
				q = async (e, t, n, o, r) => {
					var s;
					const i = await ((e, {
						itemId: t,
						formVersion: n,
						hostAppName: o,
						locale: r
					}) => Object(b.a)(e, {
						...y,
						variables: {
							itemId: t,
							hostAppName: o,
							formVersion: n,
							locale: r
						}
					}))(e, {
						itemId: t,
						formVersion: n,
						hostAppName: o,
						locale: r
					});
					if (i && i.ok) {
						const e = null === (s = i.body.data.reportForm) || void 0 === s ? void 0 : s.form;
						return e ? JSON.parse(e) : null
					}
				};
			class H extends l.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: n
						} = this.props;
						let o, r, s;
						if (this.props.author && (s = this.props.author), t) o = t, r = B.Comment, this.props.comment && !s && (s = this.props.comment.author);
						else if (e) o = e, r = B.Post, this.props.post && !s && (s = this.props.post.author);
						else {
							if (!n) throw new Error("Invalid object type passed to reporting flow");
							o = n, r = B.Message
						}
						return {
							itemId: o,
							itemType: r,
							itemAuthor: s
						}
					}, this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onBlockAuthor = e => {
						const {
							blockUserPending: t
						} = this.props;
						t.new !== R.a.pending && this.props.onBlockUser(e)
					}, this.onOpenCtlFlow = () => {
						this.props.postMessage && this.props.postMessage({
							type: "openCtl"
						}), this.setState({
							ctlFlowOpened: !0
						})
					}, this.onReportSubmit = async (e, t) => {
						const {
							props: {
								gqlContext: n,
								showFailToast: o,
								hostAppName: r,
								isLiveStreaming: s,
								timestamp: a
							}
						} = this, {
							itemId: l,
							itemType: c
						} = this.getItemMetadata();
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: d,
							ruleType: u,
							customRule: p
						} = e, m = {
							fromHelpDesk: !1,
							hostAppName: r
						};
						switch (u) {
							case "site":
								m.siteRule = i()(t, d.ref).value || i()(t, d.ref);
								break;
							case "subreddit":
							default:
								const e = i()(t, d.ref);
								"other" === e && p ? m.customRule = i()(t, p.ref) : m.subredditRule = e
						}
						let f;
						switch (c) {
							case B.Post:
								if (s && a) {
									const e = {
										postId: l,
										relativeReportTimeSec: a,
										...m
									};
									f = () => x(n(), {
										input: e
									});
									break
								}
								const e = {
									postId: l,
									...m
								};
								f = () => Object(v.d)(n(), {
									input: e
								});
								break;
							case B.Comment:
								const t = {
									commentId: l,
									...m
								};
								f = () => g(n(), {
									input: t
								});
								break;
							case B.Message:
								const o = {
									messageId: l,
									...m
								};
								f = () => Object(O.a)(n(), {
									input: o
								});
								break;
							default:
								throw new Error("Unsupported item type provided")
						}(await f()).ok || o()
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
					q(n(), e, A, o, t).then(e => {
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
							isNightmodeOn: e
						},
						state: {
							formComponent: t,
							formState: n,
							ctlFlowOpened: s,
							hasLoaded: i
						}
					} = this, {
						itemAuthor: a
					} = this.getItemMetadata();
					return s && a ? l.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						fromUserProfile: !0,
						username: a,
						onCloseCrisisModal: this.handleReportFlowClose
					}) : t && n && i ? l.a.createElement(f.a, {
						formComponent: t,
						formState: n,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: r.fbt._("Submit a Report", null, {
							hk: "2wubLC"
						}),
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(a),
						onResize: this.props.onResize
					}) : l.a.createElement(D, null, l.a.createElement(F, {
						src: e ? `${o.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${o.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			t.default = Object(C.b)(M(H))
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
				i = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				a = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				l = n("./src/reddit/models/Rule/index.ts"),
				c = n("./src/reddit/components/ReportPage/index.m.less"),
				d = n.n(c),
				u = n("./src/reddit/components/ReportPage/CustomTextInput/index.m.less"),
				p = n.n(u);
			const m = s.a.header("InputDescription", d.a);
			class f extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						customText: "",
						maxLength: l.d,
						displayLength: 0
					}, this.onCustomTextChange = e => {
						this.setState({
							customText: e.target.value,
							..._(e.target.value)
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
						className: d.a.fieldset
					}, e.description && r.a.createElement(m, null, e.description), r.a.createElement("div", {
						className: d.a.field
					}, r.a.createElement(i.c, {
						backgroundColorState: i.a.WhiteFields,
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
			const _ = e => {
				const t = {
					displayLength: 0,
					maxLength: l.d
				};
				if (!e) return t;
				const n = l.a,
					o = e.length,
					r = Object(a.a)(e),
					s = r.reduce((e, t) => t ? e + t.url.length : e, 0);
				return {
					displayLength: Math.min(l.a, o - s + 15 * r.length),
					maxLength: Math.min(l.d, n + s - 15 * r.length)
				}
			};
			t.a = s.a.wrapped(f, "Component", p.a)
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
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less"),
				c = n.n(l);
			const d = i.a.wrapped(a.e, "FormElementTitle", c.a),
				u = i.a.wrapped(a.b, "FormElementDescription", c.a);
			t.a = e => r.a.createElement("div", null, r.a.createElement(d, {
				className: Object(s.a)({
					[c.a.fake]: e.fake,
					[c.a.altColor]: e.altColor
				})
			}, e.label), e.description && r.a.createElement(u, {
				className: Object(s.a)({
					[c.a.fake]: e.fake
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
				return _
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return w
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				d = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = i.a.div("icon", d.a),
				m = i.a.textarea("textarea", d.a),
				f = i.a.span("Invalid", d.a);
			var _, b;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(_ || (_ = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(b || (b = {}));
			const h = e => r.a.createElement("div", {
					className: Object(s.a)(e.isRequired && d.a.required, e.className, {
						[d.a.container]: !e.isTextarea,
						[d.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[d.a.mValid]: e.state === _.Valid,
							[d.a.mInvalid]: e.state === _.Invalid,
							[d.a.mWhiteField]: e.backgroundColorState === b.WhiteFields
						}
					})
				}, r.a.createElement("label", {
					className: Object(s.a)({
						[d.a.field]: !e.isTextarea,
						[d.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && r.a.createElement("span", {
					className: d.a.label
				}, e.label), !!e.state && r.a.createElement(p, {
					className: Object(s.a)({
						[d.a.mValid]: e.state === _.Valid,
						[d.a.mInvalid]: e.state === _.Invalid
					})
				}, e.state === _.Valid && r.a.createElement(l.a, null), e.state === _.Invalid && r.a.createElement(f, null, "!")))),
				g = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: o,
						isRequired: i,
						label: l,
						onKeyDown: c,
						state: p,
						...m
					} = e;
					return r.a.createElement(h, {
						backgroundColorState: t,
						className: n,
						isRequired: i,
						label: l,
						state: p
					}, r.a.createElement(a.a, u({}, m, {
						className: Object(s.a)(d.a.input, d.a.control, {
							[d.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: o,
						onKeyDown: c
					})))
				},
				w = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: o,
						isRequired: i,
						label: a,
						onKeyDown: l,
						state: c,
						...p
					} = e;
					return r.a.createElement(h, {
						backgroundColorState: t,
						className: n,
						isRequired: i,
						label: a,
						state: c,
						isTextarea: !0
					}, r.a.createElement(m, u({}, p, {
						className: Object(s.a)({
							[d.a.mWhiteField]: e.backgroundColorState === b.WhiteFields
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
				i = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less"),
				u = n.n(d);
			const p = s.a.wrapped(l.a, "RadioOption", u.a),
				m = s.a.wrapped(c.a, "ExpandRight", u.a);
			t.a = e => r.a.createElement(p, {
				value: e.value,
				selected: e.selected,
				onClick: e.onClick
			}, r.a.createElement(m, {
				heightLeft: 16,
				widthLeft: 16
			}, e.selected ? r.a.createElement(a.f, null) : r.a.createElement(a.e, null), r.a.createElement(i.a, {
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
				return l
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "j", (function() {
				return O
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(r);
			const i = o.a.section("FormPage", s.a),
				a = o.a.h1("HomePageTitle", s.a),
				l = o.a.button("HomePageBreadcrumb", s.a),
				c = o.a.div("HomePageGroup", s.a),
				d = o.a.h1("FormPageTitle", s.a),
				u = o.a.div("FormPageSection", s.a),
				p = o.a.div("FormGroup", s.a),
				m = o.a.h2("FormGroupTitle", s.a),
				f = o.a.div("FormElement", s.a),
				_ = o.a.div("FormGroupDescription", s.a),
				b = o.a.div("FormItem", s.a),
				h = o.a.h3("FormElementTitle", s.a),
				g = o.a.div("FormElementDescription", s.a),
				w = o.a.div("FormElementError", s.a),
				x = o.a.div("FormElementSubGroup", s.a),
				O = o.a.li("FormListItem", s.a)
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
				return f
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "g", (function() {
				return w
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				s = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(c);
			const u = o.a.wrapped(r.a, "ModalInput", d.a),
				p = o.a.input("Input", d.a),
				m = o.a.wrapped(l.a, "RadioOn", d.a),
				f = o.a.wrapped(a.a, "RadioOff", d.a),
				_ = o.a.wrapped(s.a, "Checkbox", d.a),
				b = o.a.wrapped(i.a, "CheckboxSelected", d.a),
				h = o.a.textarea("Textarea", d.a),
				g = o.a.label("StyledLabel", d.a),
				w = o.a.input("StyledFileInput", d.a)
		},
		"./src/reddit/constants/elementIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			const o = "bladeContainer",
				r = "header",
				s = "overlayScrollContainer",
				i = "collectionPostListScrollContainer"
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
		"./src/reddit/constants/shortcuts.ts": function(e, t, n) {
			"use strict";
			var o, r;
			n.d(t, "d", (function() {
					return o
				})), n.d(t, "c", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(o || (o = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(r || (r = {}));
			const s = "SHORTCUT_FOCUSABLE_DIV",
				i = [9, 13, 32]
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "b", (function() {
				return c
			}));
			const o = 4,
				r = 60,
				s = 70,
				i = 90,
				a = 99,
				l = 100,
				c = 100
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
				return p
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "q", (function() {
				return y
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "s", (function() {
				return E
			})), n.d(t, "r", (function() {
				return S
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "k", (function() {
				return I
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "j", (function() {
				return L
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/controls/Button/index.m.less"),
				l = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = {
				role: "button",
				tabIndex: 0
			};
			var u, p, m, f;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.XSP = "xsmallBigPaddingButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(u || (u = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain", e.PlainLink = "plainLink"
			}(p || (p = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(m || (m = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(f || (f = {}));
			const _ = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconClassName: o,
						iconPosition: i = m.C,
						isFullWidth: a = !1,
						isSquare: _ = !1,
						children: w,
						className: x,
						kind: O = f.Button,
						priority: v = p.Primary,
						redditStyle: y,
						size: C = u.S,
						text: E,
						textClassName: S,
						...R
					} = e, k = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: n,
						Icon: o,
						isFullWidth: r,
						isSquare: i,
						priority: a,
						size: c,
						text: d
					}) => Object(s.a)(e, l.a.Button, a && l.a[a], c && l.a[c], {
						[l.a.isFullWidth]: r,
						[l.a.isIconOnly]: !!o && !d,
						[l.a.isSquare]: i,
						[l.a.redditStyle]: !(!t && !n)
					}))({
						baseClassName: x,
						children: w,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: a,
						isSquare: _,
						priority: v,
						redditStyle: y,
						size: C,
						text: E
					}), I = (({
						children: e,
						text: t,
						Icon: n,
						iconClassName: o,
						iconPosition: i,
						priority: a,
						textClassName: c
					}) => !n && t ? r.a.createElement("span", {
						className: c
					}, t) : r.a.createElement(r.a.Fragment, null, n && (i === m.C || i === m.L) && r.a.createElement(n, {
						className: Object(s.a)(l.a.Icon, o, {
							[l.a.isLeft]: i === m.L
						}),
						isFilled: a === p.Primary
					}), t && r.a.createElement("span", {
						className: Object(s.a)(l.a.Text, c)
					}, t), e && e, n && i === m.R && r.a.createElement(n, {
						className: Object(s.a)(l.a.Icon, o, l.a.isRight),
						isFilled: a === p.Primary
					})))({
						children: w,
						text: E,
						Icon: n,
						iconClassName: o,
						iconPosition: i,
						priority: v,
						textClassName: S
					});
					return O === f.InternalLink && (e => "to" in e)(R) ? r.a.createElement(b, c({}, d, R, {
						className: k
					}), I) : O === f.ExternalLink && (e => "href" in e)(R) ? r.a.createElement(h, c({}, d, R, {
						className: k
					}), I) : r.a.createElement(g, c({}, d, R, {
						className: k
					}), I)
				},
				b = e => r.a.createElement(i.a, e),
				h = e => r.a.createElement("a", e),
				g = e => r.a.createElement("button", e),
				w = e => r.a.createElement(_, c({
					kind: f.ExternalLink,
					priority: p.Primary
				}, e)),
				x = e => r.a.createElement(_, c({
					kind: f.InternalLink,
					priority: p.Primary
				}, e)),
				O = e => r.a.createElement(_, c({
					kind: f.Button,
					priority: p.Primary
				}, e)),
				v = e => r.a.createElement(_, c({
					kind: f.ExternalLink,
					priority: p.Secondary
				}, e)),
				y = e => r.a.createElement(_, c({
					kind: f.InternalLink,
					priority: p.Secondary
				}, e)),
				C = e => r.a.createElement(_, c({
					kind: f.Button,
					priority: p.Secondary
				}, e)),
				E = e => r.a.createElement(_, c({
					kind: f.InternalLink,
					priority: p.Plain
				}, e)),
				S = e => r.a.createElement(_, c({
					kind: f.Button,
					priority: p.Plain
				}, e)),
				R = ({
					className: e,
					...t
				}) => r.a.createElement(_, c({
					kind: f.Button,
					priority: p.Primary,
					className: Object(s.a)(e, l.a.DangerButtonColors)
				}, t)),
				k = ({
					className: e,
					...t
				}) => r.a.createElement(_, c({
					kind: f.Button,
					className: Object(s.a)(e, l.a.GoldButtonColors)
				}, t)),
				I = ({
					className: e,
					...t
				}) => r.a.createElement(_, c({
					kind: f.Button,
					className: Object(s.a)(e, l.a.PremiumButtonColors)
				}, t)),
				j = ({
					className: e,
					...t
				}) => r.a.createElement(_, c({
					kind: f.Button,
					className: Object(s.a)(e, l.a.ChatButton)
				}, t)),
				T = ({
					className: e,
					...t
				}) => r.a.createElement(_, c({
					kind: f.Button,
					className: Object(s.a)(e, l.a.InlineTextButton)
				}, t)),
				L = ({
					className: e,
					...t
				}) => r.a.createElement(_, c({
					kind: f.Button,
					className: Object(s.a)(e, l.a.PlainLinkButton),
					priority: p.PlainLink
				}, t));
			t.t = _
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o = n("./node_modules/lodash/throttle.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				m = n.n(p),
				f = n("./src/reddit/controls/Dropdown/row.m.less"),
				_ = n.n(f);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class h extends i.a.Component {
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
					}, n = Object(a.a)(_.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(l.a, b({}, t, {
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
						className: Object(a.a)(_.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, b({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(_.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(d.a, {
						className: _.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: m.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)(_.a.row, e, {
					[_.a.mIsInteractive]: !t.noHover,
					[_.a.mIsSelected]: t.isSelected,
					[_.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(h, b({
					className: n
				}, t))
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
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/domUtils/index.ts"),
				a = n("./src/reddit/constants/zIndex.ts"),
				l = n("./src/reddit/controls/Dropdown/index.m.less"),
				c = n.n(l);
			class d extends r.a.Component {
				componentDidMount() {
					this.props.onDropdownMounted && this.props.onDropdownMounted(), this.props.noFocus || this.ref && this.ref.focus({
						preventScroll: this.props.isOverlay
					})
				}
				componentWillUnmount() {
					Object(i.a)(this.props.tooltipId)
				}
				render() {
					const e = this.props,
						t = {};
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? a.d + 1 : a.c)), r.a.createElement("div", {
						className: Object(s.a)(c.a.dropdown, e.className),
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
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Input/index.m.less"),
				d = n.n(c);

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
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === l.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return r.a.createElement("input", u({
						className: Object(i.a)(d.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(s.b)(null, {
				closeModal: a.f
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
		"./src/reddit/controls/InternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				disabledLink: "_1tQt2CUWT3M7NNSMoh_o_4"
			}
		},
		"./src/reddit/controls/InternalLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/path/index.ts"),
				l = n("./src/reddit/controls/InternalLink/index.m.less"),
				c = n.n(l);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function u({
				children: e,
				className: t,
				disabled: n,
				replace: o,
				to: l,
				...u
			}) {
				return n ? r.a.createElement("span", {
					className: Object(i.a)(c.a.disabledLink, t)
				}, e) : ("string" == typeof l && (l = Object(a.b)(l)), r.a.createElement(s.a, d({
					className: t,
					to: l
				}, u), e))
			}
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
				i = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(d);
			class p extends r.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== i.b.Enter && e.key !== i.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : r.a.createElement(c.a, {
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
					}) : r.a.createElement(a.a, {
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
				i = n.n(s);
			t.a = o.a.wrapped(r.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
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
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const c = async (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: r.ib.POST
			}), d = async (e, t, n) => Object(s.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: r.ib.POST
			}), u = async (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: r.ib.POST
			}), p = async (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: r.ib.POST
			}), m = async (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
				endpoint: Object(l.a)(`${o.a.oauthUrl}/user/${t}/about`),
				method: r.ib.GET,
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
				return _
			}));
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/helpers/reportPage/index.ts"),
				d = n("./src/redditGQL/operations/ReportPost.json");
			const u = (e, t) => Object(s.a)(e, {
				...d,
				variables: t
			});
			var p;
			! function(e) {
				e.Rule = "rule", e.SiteRule = "siteRule", e.Other = "other", e.FileComplaint = "fileComplaint", e.CrisisTextLine = "crisisTextLine"
			}(p || (p = {}));
			const m = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					method: o.ib.POST,
					endpoint: Object(l.a)(`${e.apiUrl}/api/report`),
					data: f(t)
				}),
				f = e => {
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
				_ = (e, t, n) => Object(r.a)(Object(i.a)(e, [a.a]), {
					method: o.ib.POST,
					endpoint: Object(l.a)(`${e.apiUrl}/api/report`),
					data: b(t, n)
				}),
				b = (e, t) => {
					const n = {
						...Object(c.b)(e),
						api_type: "json"
					};
					return t && (n.from_help_desk = !0), n
				}
		},
		"./src/reddit/helpers/getTimeSortForListing/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/listingSort/index.ts");
			t.a = (e, t) => {
				if (e) return Object(r.a)(e) ? t || o.fc : void 0
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
		"./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			t.a = e => {
				const t = {
					menuPosition: e.menuPosition ? e.menuPosition.toLowerCase() : void 0,
					bannerCommunityNameFormat: e.bannerCommunityNameFormat ? e.bannerCommunityNameFormat.toLowerCase() : void 0,
					bannerShowCommunityIcon: e.bannerShowCommunityIcon ? e.bannerShowCommunityIcon.toLowerCase() : void 0,
					bannerHeight: e.bannerHeight ? e.bannerHeight.toLowerCase() : void 0,
					postVoteIcons: e.postVoteIcons ? e.postVoteIcons.toLowerCase() : void 0,
					submenuBackgroundStyle: e.submenuBackgroundStyle ? e.submenuBackgroundStyle.toLowerCase() : void 0,
					backgroundImagePosition: e.backgroundImagePosition ? e.backgroundImagePosition.toLowerCase() : void 0,
					bannerBackgroundImagePosition: e.bannerBackgroundImagePosition ? e.bannerBackgroundImagePosition.toLowerCase() : void 0,
					bannerPositionedImagePosition: e.bannerPositionedImagePosition ? e.bannerPositionedImagePosition.toLowerCase() : void 0,
					postBackgroundImagePosition: e.postBackgroundImagePosition ? e.postBackgroundImagePosition.toLowerCase() : void 0,
					postPlaceholderImagePosition: e.postPlaceholderImagePosition ? e.postPlaceholderImagePosition.toLowerCase() : void 0,
					menuBackgroundOpacity: e.menuBackgroundOpacity || void 0,
					backgroundImage: e.backgroundImage || void 0,
					bannerBackgroundImage: e.bannerBackgroundImage || void 0,
					bannerPositionedImage: e.bannerPositionedImage || void 0,
					communityIcon: e.icon || void 0,
					menuBackgroundImage: e.menuBackgroundImage || void 0,
					postBackgroundImage: e.postBackgroundImage || void 0,
					postDownvoteIconActive: e.postDownvoteIconActive || void 0,
					postDownvoteIconInactive: e.postDownvoteIconInactive || void 0,
					postPlaceholderImage: e.postPlaceholderImage || void 0,
					postUpvoteIconActive: e.postUpvoteIconActive || void 0,
					postUpvoteIconInactive: e.postUpvoteIconInactive || void 0,
					bannerBackgroundColor: e.bannerBackgroundColor || void 0,
					bannerOverlayColor: e.bannerOverlayColor || void 0,
					menuBackgroundColor: e.menuBackgroundColor || void 0,
					menuLinkColorActive: e.menuLinkColorActive || void 0,
					menuLinkColorInactive: e.menuLinkColorInactive || void 0,
					menuLinkColorHover: e.menuLinkColorHover || void 0,
					submenuBackgroundColor: e.submenuBackgroundColor || void 0,
					primaryColor: e.primaryColor || void 0,
					highlightColor: e.highlightColor || void 0,
					postTitleColor: e.postTitleColor || void 0,
					backgroundColor: e.backgroundColor || void 0,
					postBackgroundColor: e.postBackgroundColor || void 0,
					postDownvoteCountColor: e.postDownvoteCountColor || void 0,
					postUpvoteCountColor: e.postUpvoteCountColor || void 0,
					mobileKeyColor: e.mobileKeyColor || void 0,
					mobileBannerImage: e.mobileBannerImage || void 0,
					sidebarWidgetHeaderColor: e.sidebarWidgetHeaderColor || void 0,
					sidebarWidgetBackgroundColor: e.sidebarWidgetBackgroundColor || void 0,
					secondaryBannerPositionedImage: e.secondaryBannerPositionedImage || void 0
				};
				return Object.keys(t).forEach(e => {
					void 0 === t[e] && delete t[e]
				}), t
			}
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/helpers/parseUrl.ts");
			const r = ["old", "new", "en", "www", "np", "m"],
				s = ["reddit.com", "reddit.local"].concat("").concat(r.map((function(e) {
					return e + ".reddit.com"
				}))).concat(r.map((function(e) {
					return e + ".reddit.local"
				}))),
				i = ["mod.reddit.com"],
				a = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: s.concat("redd.it"),
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

			function l(e) {
				return (e.match(new RegExp(o.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(a).some((function(n) {
						return t = function(e, t) {
							const n = a[e];
							if (!a) throw new Error("Could not find reddit URL spec: " + e);
							const r = Object(o.a)(t);
							if (!r) return void console.error("Could not parse url", t);
							if (-1 === (n.hostnames || s).indexOf(r.hostname)) return;
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
						}(n, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/history/esm/history.js"), n("./src/reddit/actions/platform.ts");
			var o = n("./src/config.ts");
			t.a = (e, t) => {
				const n = t.platform.currentPage && t.platform.currentPage.url;
				let r = `${o.a.accountManagerOrigin}/login/`;
				const s = window.location.origin;
				n && (r += `?dest=${encodeURIComponent(`${s}${n}`)}`), window.location.href = r
			}
		},
		"./src/reddit/helpers/reportPage/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return b
			}));
			var o = n("./src/reddit/models/RulesSequence/index.ts");
			const r = "(?:old\\.reddit\\.(?:com|local)|new\\.reddit\\.(?:com|local)|reddit\\.(?:com|local)|www\\.reddit\\.(?:com|local))",
				s = "(?:https?://)",
				i = `^${s}${r}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(?:\\w+)/(?:[^/]+)/(\\w+)(?:/.*)?`,
				a = `^${s}${r}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(\\w+)(?:/.*)?`,
				l = `^${s}${r}/message/messages/(\\w+)(?:/.*)?`,
				c = `^${s}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)(?:/)?$`,
				d = `^${s}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)/(\\w+)(?:/)?$`,
				u = `^${s}${r}/(?:rpan|live)/(?:(?:r)/(?:[^/]+)/)?(\\w+)(?:/.*)?`,
				p = `(?:${a}|${i}|${l}|${c}|${d}|${u})`,
				m = `(?:(?:${s}?${r}/)?(?:user|u)/)?([\\w-]+)(?:/)?`,
				f = `(?:(?:${s}?${r}/)?(?:r)/)?([\\w-]+)(?:/)?`,
				_ = e => {
					const t = new RegExp(i),
						n = new RegExp(a),
						o = new RegExp(l),
						r = new RegExp(u),
						s = new RegExp(c),
						p = new RegExp(d);
					let _, b, h;
					if (e.thingUrl) {
						const i = e.thingUrl.trim();
						if (t.test(i)) {
							const e = t.exec(i);
							e && e.length > 1 && (_ = "t1_" + e[1])
						} else if (n.test(i) || r.test(i)) {
							const e = n.exec(i) || r.exec(i);
							e && e.length > 1 && (_ = "t3_" + e[1])
						} else if (o.test(i)) {
							const e = o.exec(i);
							e && e.length > 1 && (_ = "t4_" + e[1])
						} else if (p.test(i)) {
							const e = p.exec(i);
							e && e.length > 2 && (b = e[1], h = e[2])
						} else if (s.test(i)) {
							const e = s.exec(i);
							e && e.length > 1 && (b = e[1])
						}
					}
					const g = new RegExp(m),
						w = new RegExp(f),
						x = [];
					let O;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (w.test(t)) {
							const e = w.exec(t);
							e && e.length > 1 && (O = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let i = 0; i < e.usernames.length; i++) {
							const t = e.usernames[i].trim();
							if (g.test(t)) {
								const e = g.exec(t);
								e && e.length > 1 && x.push(e[1])
							}
						}
					const {
						reason: v
					} = e;
					return {
						reason: "site_reason_selected",
						site_reason: v.reasonText,
						additional_info: e.additionalInfo ? e.additionalInfo.join(",") : void 0,
						custom_text: e.customText,
						modmail_conv_id: b,
						modmail_msg_id: h,
						sr_name: O,
						thing_id: _,
						usernames: x.length ? x.join(",") : void 0
					}
				},
				b = (e, t) => {
					const n = new o.a;
					return h(n, e, t, 0), n
				},
				h = (e, t, n, o) => {
					for (let r = 0; r < t.length; r++) {
						const s = t[r];
						e.update(r, o);
						const i = e.getSequence().length;
						if (s.reasonAsParam === n) return;
						if (s.nextStepReasons && s.nextStepReasons.length && (h(e, s.nextStepReasons, n, o + 1), e.getSequence().length > i)) return;
						e.cut(o - 1)
					}
				}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return l
			}));
			var o = n("./src/reddit/constants/elementIds.ts");
			let r;
			const s = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(o.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				i = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, r || (r = a(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${r}px`;
					const t = document.getElementById(o.c);
					t && (t.style.marginRight = `${r}px`)
				},
				a = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				l = e => {
					if (!e || !document.body) return 0;
					const t = a(document.body),
						n = e.offsetWidth - e.scrollWidth;
					return t || n
				}
		},
		"./src/reddit/helpers/trackers/blade.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "k", (function() {
				return g
			}));
			var o = n("./src/reddit/constants/blade.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const s = (e, t) => n => ({
					...r.defaults(n),
					source: o.d.Appearance,
					action: "click",
					noun: e,
					actionInfo: r.actionInfo(n, {
						paneName: t
					}),
					subreddit: r.subreddit(n)
				}),
				i = e => s("save_style", e),
				a = e => s("cancel_style", e),
				l = e => t => ({
					source: o.d.Structure,
					action: "click",
					noun: e,
					screen: r.screen(t),
					subreddit: r.subreddit(t)
				}),
				c = e => t => ({
					source: o.d.Appearance,
					action: "click",
					noun: e,
					screen: r.screen(t),
					subreddit: r.subreddit(t)
				}),
				d = (e, t) => n => ({
					source: "colorpicker",
					action: "click",
					noun: e,
					actionInfo: r.actionInfo(n, {
						paneName: o.g[t]
					}),
					screen: r.screen(n),
					subreddit: r.subreddit(n)
				}),
				u = e => t => ({
					source: o.h[e],
					action: "click",
					noun: "colorpicker",
					actionInfo: r.actionInfo(t, {
						paneName: o.g[e]
					}),
					screen: r.screen(t),
					subreddit: r.subreddit(t)
				}),
				p = e => ({
					screen: r.screen(e),
					subreddit: r.subreddit(e)
				}),
				m = () => e => ({
					source: o.d.Appearance,
					action: "view",
					noun: "blade",
					...p(e)
				}),
				f = e => t => ({
					source: o.a[e],
					action: "click",
					noun: o.b[e],
					...p(t)
				}),
				_ = () => e => ({
					source: o.d.Appearance,
					action: "click",
					noun: "back",
					...p(e)
				}),
				b = e => t => ({
					source: o.d.PostFlairManagement,
					action: "click",
					noun: e,
					...p(t)
				}),
				h = (e, t) => ({
					...r.defaults(e),
					...b(t)(e)
				}),
				g = e => t => ({
					source: o.d.MenuLinks,
					action: "click",
					noun: e ? "wiki_link_on" : "wiki_link_off",
					screen: r.screen(t),
					subreddit: r.subreddit(t),
					userSubreddit: r.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "C", (function() {
				return O
			})), n.d(t, "B", (function() {
				return v
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "E", (function() {
				return S
			})), n.d(t, "v", (function() {
				return R
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "y", (function() {
				return I
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "p", (function() {
				return T
			})), n.d(t, "o", (function() {
				return L
			})), n.d(t, "D", (function() {
				return P
			})), n.d(t, "l", (function() {
				return N
			})), n.d(t, "k", (function() {
				return D
			})), n.d(t, "m", (function() {
				return F
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "n", (function() {
				return M
			})), n.d(t, "i", (function() {
				return H
			})), n.d(t, "f", (function() {
				return K
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "c", (function() {
				return W
			})), n.d(t, "A", (function() {
				return z
			})), n.d(t, "h", (function() {
				return Y
			})), n.d(t, "b", (function() {
				return Q
			})), n.d(t, "r", (function() {
				return X
			})), n.d(t, "q", (function() {
				return J
			})), n.d(t, "z", (function() {
				return Z
			})), n.d(t, "s", (function() {
				return $
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/helpers/media/index.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts"),
				a = n("./src/reddit/models/PostDraft/index.ts"),
				l = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				c = n("./src/reddit/selectors/postDraft.ts"),
				d = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				m = n("./src/telemetry/index.ts"),
				f = n("./src/telemetry/models/PostComposer.ts"),
				_ = n("./src/telemetry/models/PostDraft.ts");
			const b = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				h = e => ({
					source: "post_composer",
					action: o.c.CLICK,
					...u.defaults(e),
					screen: u.screen(e),
					correlationId: Object(r.c)(r.a.PostComposer)
				}),
				g = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === i.i.MARKDOWN ? "markdown" : "rte"
				},
				w = e => {
					Object(m.a)({
						noun: "cancel",
						...h(e)
					})
				},
				x = e => {
					Object(m.a)({
						noun: "discard",
						...h(e)
					})
				},
				O = e => {
					Object(m.a)({
						noun: "subreddit_choice",
						subreddit: u.subreddit(e),
						...h(e),
						actionInfo: u.chatPostActionInfo(e)
					})
				},
				v = e => {
					Object(m.a)({
						noun: "subreddit_selector",
						...h(e)
					})
				},
				y = (e, t) => {
					Object(m.a)({
						noun: "post_type_selector",
						postComposer: {
							type: b[t]
						},
						...h(e)
					})
				},
				C = () => e => ({
					noun: "add_option",
					...h(e)
				}),
				E = () => e => ({
					noun: "voting_length",
					...h(e)
				}),
				S = (e, t, n) => {
					"image_upload" === t || "video_upload" === t ? Object(m.a)({
						noun: t,
						...h(e)
					}) : Object(m.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: n ? "on" : "off"
						},
						...h(e)
					})
				},
				R = (e, t, n, o) => {
					Object(m.a)({
						noun: "post",
						subreddit: u.subreddit(e),
						postComposer: {
							type: t,
							...g(e, t)
						},
						post: n ? u.post(e, n) : null,
						...h(e),
						correlationId: o
					})
				},
				k = (e, t) => {
					const n = t === i.i.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(m.a)({
						noun: n,
						...h(e)
					})
				},
				I = (e, t) => {
					Object(m.a)({
						noun: "save",
						subreddit: u.subreddit(e),
						postComposer: {
							type: t,
							...g(e, t)
						},
						...h(e)
					})
				},
				j = (e, t) => {
					const n = e.uploads[t];
					n.error && Object(m.a)({
						...h(e),
						noun: "media",
						action: o.c.REJECT,
						actionInfo: {
							...u.actionInfo(e),
							reason: JSON.stringify(n.error)
						}
					})
				},
				T = (e, t) => {
					t.forEach(t => {
						const n = Object(s.f)(t.type);
						n && Object(m.a)({
							...h(e),
							action: o.c.DRAG,
							noun: n
						})
					})
				},
				L = (e, t, n) => {
					Object(m.a)({
						...h(e),
						noun: "input",
						postComposer: {
							inputType: n
						},
						action: t,
						actionInfo: u.chatPostActionInfo(e)
					})
				},
				P = (e, t, n) => {
					Object(m.a)({
						...h(e),
						noun: n,
						action: Object(f.getToggleAction)(t),
						actionInfo: u.chatPostActionInfo(e)
					})
				},
				N = e => A("input", e),
				D = () => A("add"),
				F = () => A("remove"),
				A = (e, t) => n => ({
					...h(n),
					noun: e,
					postComposer: {
						inputType: t,
						type: b.imageOnly
					},
					action: o.c.CLICK
				}),
				B = e => {
					Object(m.a)({
						...h(e),
						noun: "hide_oc_description",
						action: o.c.CLICK
					})
				},
				U = (e, t) => {
					if (t) {
						const n = u.subredditById(e, t);
						if (n) return {
							subreddit: n
						};
						const o = u.profileById(e, t);
						if (o) return {
							profile: o
						}
					}
				},
				M = (e, t) => {
					const {
						draftId: n,
						destSubreddit: o
					} = t, r = Object(p.k)(e), s = Object(c.d)(e, {
						draftId: n
					}), i = {
						authorId: r ? r.id : void 0,
						createdTimestamp: s ? s.created : void 0,
						id: n || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case a.b.Link:
							i.type = _.DraftType.Link, i.urlLength = t.body.length;
							break;
						case a.b.Markdown:
							i.type = _.DraftType.Self, i.bodyTextLength = t.body.length;
							break;
						case a.b.RichText:
							i.type = _.DraftType.RichText, t.documentStats && (i.bodyTextLength = t.documentStats.textLength, i.numberRteImages = t.documentStats.rteImagesCount, i.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case a.b.Image:
							i.type = _.DraftType.Image;
							break;
						case a.b.Video:
							i.type = _.DraftType.Video
					}
					return {
						postDraft: i,
						...U(e, o.id)
					}
				},
				q = (e, t) => {
					const n = Object(p.k)(e),
						o = {
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
							o.type = _.DraftType.Link, o.urlLength = (t.body || "").length;
							break;
						case a.b.Markdown:
							o.type = _.DraftType.Self, o.bodyTextLength = (t.body || "").length;
							break;
						case a.b.RichText:
							o.type = _.DraftType.RichText
					}
					return {
						postDraft: o,
						...U(e, t.subredditId)
					}
				},
				H = (e, t) => {
					Object(m.a)({
						noun: "draft_load",
						...h(e),
						...M(e, t)
					})
				},
				K = (e, t) => {
					Object(m.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...h(e),
						...M(e, t)
					})
				},
				G = (e, t) => {
					Object(m.a)({
						noun: "draft_delete",
						...h(e),
						...q(e, t)
					})
				},
				W = e => {
					Object(m.a)({
						...h(e),
						noun: "social_connect_link",
						action: o.c.CLICK
					})
				},
				z = (e, t) => {
					Object(m.a)({
						...h(e),
						noun: "twitter_share_checkbox",
						action: Object(f.getToggleAction)(t)
					})
				},
				Y = (e, t, n) => {
					Object(m.a)({
						...h(e),
						...M(e, t),
						noun: "draft_share",
						action: n ? o.c.ENABLE : o.c.DISABLE
					})
				},
				Q = e => {
					Object(m.a)({
						...h(e),
						noun: "create_community",
						actionInfo: {
							...u.actionInfo(e),
							pageType: "post_select_community"
						}
					})
				},
				V = "community_recommendation",
				X = () => e => ({
					...h(e),
					action: o.c.VIEW,
					noun: V,
					listing: {
						links: Object(l.b)(e).map(t => Object(d.B)(e, t.name))
					}
				}),
				J = (e, t) => n => ({
					...h(n),
					action: o.c.CLICK,
					noun: V,
					actionInfo: {
						...u.actionInfo(n),
						position: t
					},
					subreddit: {
						name: e,
						id: Object(d.B)(n, e)
					}
				}),
				Z = e => {
					Object(m.a)({
						...h(e),
						action: o.c.SKIP,
						noun: V
					})
				},
				$ = (e, t) => n => ({
					...h(n),
					action: o.c.VIEW,
					noun: `${V}_hover`,
					actionInfo: {
						...u.actionInfo(n),
						position: t
					},
					subreddit: {
						name: e,
						id: Object(d.B)(n, e)
					}
				})
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, n) {
			"use strict";
			n.d(t, "J", (function() {
				return i
			})), n.d(t, "z", (function() {
				return a
			})), n.d(t, "B", (function() {
				return l
			})), n.d(t, "K", (function() {
				return d
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "v", (function() {
				return p
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "u", (function() {
				return f
			})), n.d(t, "t", (function() {
				return _
			})), n.d(t, "p", (function() {
				return b
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "s", (function() {
				return x
			})), n.d(t, "r", (function() {
				return O
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "C", (function() {
				return E
			})), n.d(t, "H", (function() {
				return S
			})), n.d(t, "D", (function() {
				return R
			})), n.d(t, "G", (function() {
				return k
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "y", (function() {
				return L
			})), n.d(t, "w", (function() {
				return P
			})), n.d(t, "x", (function() {
				return N
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "E", (function() {
				return F
			})), n.d(t, "k", (function() {
				return A
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "A", (function() {
				return U
			})), n.d(t, "d", (function() {
				return M
			})), n.d(t, "l", (function() {
				return q
			})), n.d(t, "F", (function() {
				return H
			})), n.d(t, "I", (function() {
				return K
			}));
			var o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, n) => ({
					...r.defaults(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !1),
					profile: r.profile(e),
					subreddit: r.subreddit(e),
					powerups: {
						...r.subredditPowerups(e),
						freeCount: t,
						paidCount: n
					}
				}),
				i = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...s(t),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				a = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powerups_become_hero",
					...s(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				l = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powerups_see_all_heroes",
					...s(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				c = e => (t, n) => o => ({
					source: e,
					action: "click",
					noun: "powerup_supporter",
					...s(o),
					profile: {
						id: t,
						name: n,
						type: "default"
					}
				}),
				d = c("postlist_supporters_cta"),
				u = c("comm_heroes_modal"),
				p = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...s(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				m = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...s(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				f = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell_unlock_avatar",
					...s(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				_ = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell_unlock_avatar",
					...s(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				b = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell_avatar",
					...s(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				h = () => e => ({
					source: "powerups_post_upsell_avatar",
					action: "click",
					noun: "post_upsell_avatar_cta",
					...s(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				g = () => e => ({
					source: "powerups_post_upsell_avatar_modal",
					action: "view",
					noun: "powerups_modal",
					...s(e)
				}),
				w = () => e => ({
					source: "powerups_post_upsell_avatar_modal",
					action: "click",
					noun: "post_upsell_avatar_modal_cta",
					...s(e)
				}),
				x = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell_premium",
					...s(e)
				}),
				O = () => e => ({
					source: "powerups_post_upsell_premium",
					action: "click",
					noun: "use_premium_powerup",
					...s(e)
				}),
				v = () => e => ({
					source: "powerups_community_feed",
					action: "view",
					noun: "powerups_mod_enable_banner",
					...s(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !1)
				}),
				y = () => e => ({
					source: "powerups_community_feed",
					action: "click",
					noun: "powerups_mod_enable_banner",
					...s(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !1)
				}),
				C = e => t => ({
					source: "powerups",
					action: "click",
					noun: "join_supporters",
					...s(t),
					actionInfo: r.actionInfo(t, {
						reason: e
					})
				}),
				E = () => e => ({
					source: "powerups_supporters_modal",
					action: "click",
					noun: "powerups_cta",
					...s(e)
				}),
				S = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_supporter_achievement",
					...s(e)
				}),
				R = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_achievements",
					...s(e)
				}),
				k = () => e => ({
					source: "powerups_flair_picker",
					action: "click",
					noun: "powerups_cta",
					...s(e)
				}),
				I = e => t => ({
					source: "powerups_modal",
					action: "view",
					noun: "marketing_step",
					...s(t),
					actionInfo: r.actionInfo(t, {
						reason: e
					})
				}),
				j = e => t => ({
					source: "powerups",
					action: "click",
					noun: "benefit",
					...s(t),
					powerups: {
						...r.subredditPowerups(t),
						benefit: e
					}
				}),
				T = (e, t) => n => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...s(n, e, t)
				}),
				L = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...s(e),
					actionInfo: r.actionInfo(e, {
						pageType: "powerups_premium_upsell"
					})
				}),
				P = () => e => ({
					source: "powerups_premium_upsell",
					action: "click",
					noun: "powerups_price",
					...s(e)
				}),
				N = e => t => ({
					source: "powerups",
					action: "click",
					noun: "premium",
					...s(t),
					actionInfo: r.actionInfo(t, {
						pageType: "powerups_premium_upsell"
					}),
					goldPurchase: {
						subscriptionType: e
					}
				}),
				D = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...s(n, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				F = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...s(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				A = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...s(e)
				}),
				B = (e, t) => n => ({
					source: t,
					action: "click",
					noun: "add_custom_emojis",
					...s(n),
					powerups: {
						...r.subredditPowerups(n),
						emojiCount: e
					}
				}),
				U = (e, t) => n => ({
					source: t,
					action: "save",
					noun: "custom_emojis",
					...s(n),
					powerups: {
						...r.subredditPowerups(n),
						emojiCount: e
					}
				}),
				M = (e = 1, t) => n => ({
					source: t,
					action: "delete",
					noun: "custom_emojis",
					...s(n),
					powerups: {
						...r.subredditPowerups(n),
						emojiCount: e
					}
				}),
				q = (e, t) => n => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? r.subredditById(n, t) : void 0,
					...s(n),
					correlationId: e
				}),
				H = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_gifs",
					...s(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				K = (e, t, n) => o => ({
					source: "powerups_settings",
					action: "click",
					noun: e,
					setting: {
						value: String(t),
						oldValue: String(n)
					},
					subreddit: r.subreddit(o),
					...r.defaults(o)
				})
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
		"./src/reddit/icons/fonts/helpers.m.less": function(e, t, n) {
			e.exports = {
				TooltipDesc: "_37iEJpUpWXN00_fpZKHglg",
				tooltipDesc: "_37iEJpUpWXN00_fpZKHglg"
			}
		},
		"./src/reddit/icons/fonts/helpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/icons/fonts/helpers.m.less"),
				i = n.n(s),
				a = n("./src/lib/constants/icons.ts"),
				l = n("./src/lib/lessComponent.tsx");
			const c = (e, t) => `icon icon-${e}${t&&!e.includes("fill")&&a.a[`${e}_fill`]?"_fill":""}`,
				d = l.a.wrapped(e => r.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", i.a)
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
				i = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				a = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => r.a.createElement("svg", l({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(s.a)(a.a.checkbox, e)
			}, t), r.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
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
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"
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
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", l({
				className: Object(s.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
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
				i = n("./src/reddit/icons/svgs/ProfileSlashed/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(a.a.icon, e.className),
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
				i = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = n.n(i);

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
				className: Object(s.a)(a.a.icon, e.className),
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
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				l = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
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
					gutter: a,
					...d
				} = e;
				return r.a.createElement("div", c({
					className: Object(i.a)(l.a.expandRightContainer, t)
				}, d), r.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: s,
						height: o,
						marginRight: a
					}
				}, Array.isArray(n) && n[0]), r.a.createElement("div", {
					className: l.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/models/ApiRequestState/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var o, r = n("./node_modules/uuid/v4.js"),
				s = n.n(r);
			! function(e) {
				e[e.Pending = 0] = "Pending", e[e.Complete = 1] = "Complete", e[e.Failed = 2] = "Failed"
			}(o || (o = {}));
			const i = () => s()()
		},
		"./src/reddit/models/ReportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
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
			const i = new Set(Object.values(s))
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
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var o = n("./src/reddit/selectors/user.ts");
			const r = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				i = (e, t) => {
					const n = (e => {
						const t = s(e);
						return t && t.ids
					})(e);
					return !!n && n.includes(t)
				},
				a = (e, t) => {
					const n = Object(o.nb)(e, {
						userName: t
					});
					return !!n && i(e, n.id)
				}
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/user.ts");
			const i = e => o.c.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: s.K,
					experimentName: o.i
				}),
				a = e => o.e.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: s.K,
					experimentName: o.l
				})
		},
		"./src/reddit/selectors/experiments/postCreationSubRec.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "m", (function() {
				return y
			}));
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				s = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");
			const d = 3,
				u = e => {
					const t = Object(i.c)(e, {
						experimentEligibilitySelector: i.a,
						experimentName: s.Od
					});
					return t === s.Pd.UIChangesOnly || t === s.Pd.RedditRecommendation || t === s.Pd.OpenAI || t === s.Pd.FilteredOpenAI
				},
				p = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: i.a,
						experimentName: s.Od
					}) === s.Pd.UIChangesOnly
				},
				m = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: i.a,
						experimentName: s.Od
					}) === s.Pd.RedditRecommendation
				},
				f = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: i.a,
						experimentName: s.Od
					}) === s.Pd.OpenAI
				},
				_ = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: i.a,
						experimentName: s.Od
					}) === s.Pd.FilteredOpenAI
				},
				b = e => e.creations.subredditRec.api.pending,
				h = e => e.creations.subredditRec.api.error,
				g = e => {
					return e.creations.subredditRec.order.length > 0
				},
				w = e => {
					const t = e.creations.subredditRec.order,
						n = [];
					return t.forEach(t => {
						const o = Object(c.t)(e, {
								subredditName: t
							}),
							r = Object(c.w)(e, {
								subredditName: t
							});
						if (r && o) {
							const e = {
								iconUrl: r.icon.url,
								name: r.name,
								primaryColor: r.primaryColor,
								subscribers: o.subscribers,
								type: l.a.OTHER_SUBREDDIT
							};
							n.push(e)
						}
					}), n
				},
				x = e => e.creations.subredditRec.isInputChanged,
				O = e => {
					if (!(e.creations.formData.submissionType === o.Ub.POST)) return "";
					const t = e.creations.formState.editorMode === a.i.RICH_TEXT || null === e.creations.formState.editorMode,
						n = e.creations.formState.editorMode === a.i.MARKDOWN;
					if (t) {
						const t = e.creations.formData.body.rte;
						return r.a.getRawText(t, " ") || ""
					}
					return n && e.creations.formData.body.markdown || ""
				},
				v = e => {
					return e.creations.formData.submissionType === o.Ub.LINK_ONLY && e.creations.formData.body.link || ""
				},
				y = e => !p(e) && u(e) && (!h(e) || h(e) && x(e)) && (e => {
					const t = e.creations.formData.title,
						n = v(e),
						o = O(e);
					return !!(t || n || o)
				})(e) && (e.creations.formData.submissionType === o.Ub.POST || e.creations.formData.submissionType === o.Ub.LINK_ONLY || e.creations.formData.submissionType === o.Ub.CROSSPOST)
		},
		"./src/reddit/selectors/experiments/topPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const l = Object(o.a)(a.K, (e, {
					pageLayer: t
				}) => Object(s.z)(t), (e, {
					pageLayer: t
				}) => Object(s.M)(t), (e, t, n) => !e && !t && n),
				c = Object(o.a)((e, t) => Object(i.c)(e, {
					experimentName: r.Ub,
					experimentEligibilitySelector: e => l(e, t)
				}), e => e),
				d = e => e === r.Oe.NoCommunityWidgets,
				u = e => e === r.Oe.NoRulesModerators,
				p = e => e === r.Oe.RelatedPostsDu
		},
		"./src/reddit/selectors/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			const o = e => e.tooltipId,
				r = e => t => t.tooltipId === e
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlow.03b593a5970d91b69223.js.map