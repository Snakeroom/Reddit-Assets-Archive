// https://www.redditstatic.com/desktop2x/ReportFlow.4d3f91469fabf3321eea.js
// Retrieved at 8/30/2021, 10:30:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlow", "ReportFlowNew"], {
		"./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isPseudoLocale = t.isISOLocaleSupported = t.toISOLocale = t.isoLocaleToR2Language = void 0;
			const n = o("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
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
					const o = i[t];
					return o && o.forEach(o => {
						e[o] = t
					}), e
				}, {});
			t.isoLocaleToR2Language = e => a[e], t.toISOLocale = e => {
				if (!e) return;
				const t = e.match(/^([a-zA-Z]{2,4})(?:[-_]([a-zA-Z]{2,4}))?$/);
				if (!t) return;
				const o = t[1];
				if (!o) return;
				let n = o.toLowerCase();
				const r = t[2];
				return r && (n = `${n}-${r.toUpperCase()}`), n
			};
			const l = new Set(Object.keys(a));
			t.isISOLocaleSupported = e => !!e && l.has(e);
			const c = new Set([n.PSEUDO_LONG_LOCALE, n.PSEUDO_SHORT_LOCALE, n.PSEUDO_EXT_LOCALE]);
			t.isPseudoLocale = e => !!e && c.has(e)
		},
		"./node_modules/lodash/_baseInverter.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseForOwn.js");
			e.exports = function(e, t, o, r) {
				return n(e, (function(e, n, s) {
					t(r, o(e), n, s)
				})), r
			}
		},
		"./node_modules/lodash/_createInverter.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseInverter.js");
			e.exports = function(e, t) {
				return function(o, r) {
					return n(o, e, t(r), {})
				}
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseFindIndex.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/toInteger.js"),
				i = Math.max,
				a = Math.min;
			e.exports = function(e, t, o) {
				var l = null == e ? 0 : e.length;
				if (!l) return -1;
				var c = l - 1;
				return void 0 !== o && (c = s(o), c = o < 0 ? i(l + c, 0) : a(c, l - 1)), n(e, r(t, 3), c, !0)
			}
		},
		"./node_modules/lodash/invert.js": function(e, t, o) {
			var n = o("./node_modules/lodash/constant.js"),
				r = o("./node_modules/lodash/_createInverter.js"),
				s = o("./node_modules/lodash/identity.js"),
				i = Object.prototype.toString,
				a = r((function(e, t, o) {
					null != t && "function" != typeof t.toString && (t = i.call(t)), e[t] = o
				}), n(s));
			e.exports = a
		},
		"./node_modules/lodash/uniqWith.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, t) {
				return t = "function" == typeof t ? t : void 0, e && e.length ? n(e, void 0, t) : []
			}
		},
		"./node_modules/lodash/xor.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayFilter.js"),
				r = o("./node_modules/lodash/_baseRest.js"),
				s = o("./node_modules/lodash/_baseXor.js"),
				i = o("./node_modules/lodash/isArrayLikeObject.js"),
				a = r((function(e) {
					return s(n(e, i))
				}));
			e.exports = a
		},
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, o) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return _
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/FocusTrap/index.ts"),
				a = o("./src/reddit/actions/shortcuts/utils.ts"),
				l = o("./src/reddit/components/Portal/index.tsx"),
				c = o("./src/reddit/constants/shortcuts.ts"),
				d = o("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = o("./src/higherOrderComponents/asModal/index.m.less"),
				p = o.n(u);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = ({
				className: e,
				isVisible: t,
				...o
			}) => r.a.createElement("div", m({
				className: Object(s.a)(p.a.overlay, e, {
					[p.a.mIsVisible]: t
				})
			}, o));

			function _(e) {
				class t extends n.Component {
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
						}), Object(d.b)(), Object(a.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: o,
							ignoreDefaultFocus: n,
							onOverlayClick: i,
							overlayClassName: a,
							overlayCustomStyles: d,
							withOverlay: u,
							...m
						} = t, _ = m;
						return r.a.createElement(l.a, {
							container: document.getElementById(c.b)
						}, r.a.createElement(f, {
							className: a,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: d
						}, r.a.createElement("div", {
							"aria-modal": !0,
							className: Object(s.a)(p.a.modal, o),
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
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);
			o("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => r.a.createElement(e, t)
			}
		},
		"./src/lib/assertNever.ts": function(e, t, o) {
			"use strict";

			function n(e) {
				throw new Error(`Unexpected object: ${e}`)
			}
			o.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/constants/icons.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			}));
			const n = {
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
		"./src/lib/filterQueryParams/index.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/lodash/omit.js"),
				r = o.n(n),
				s = o("./node_modules/node-libs-browser/node_modules/url/url.js"),
				i = o.n(s);
			t.a = (e, t) => {
				const o = i.a.parse(e, !0);
				return o.search = void 0, o.query = {
					...r()(o.query, t)
				}, i.a.format(o)
			}
		},
		"./src/lib/formatApiError/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/constants/index.ts");

			function s(e, t) {
				return e ? e.fields && e.fields.length ? e.fields.map(e => e.msg).join(", ") : e.type && i[e.type] ? i[e.type]() : 401 === t ? n.fbt._("There was an authentication error", null, {
					hk: "2KZTRv"
				}) : n.fbt._("Something went wrong", null, {
					hk: "3i6szH"
				}) : ""
			}
			const i = {
				[r.j]: () => n.fbt._("you're not allowed to do that", null, {
					hk: "1jGKQw"
				}),
				[r.J]: () => n.fbt._("GIF size must be less than {max file size}MB", [n.fbt._param("max file size", Math.floor(r.X / r.fb).toString())], {
					hk: "1zzsdM"
				}),
				[r.P]: () => n.fbt._("Image size must be less than {max file size}MB", [n.fbt._param("max file size", Math.floor(r.Z / r.fb).toString())], {
					hk: "3H6bF8"
				}),
				[r.R]: () => n.fbt._("Sorry, we accept only images (.png, .jpeg, .gif) and videos (.mp4, .mov)", null, {
					hk: "1hw868"
				}),
				[r.ic]: () => n.fbt._("Video size must be less than {max file size}GB", [n.fbt._param("max file size", (r.db / r.fb / 1024).toFixed(1))], {
					hk: "4FkABU"
				})
			}
		},
		"./src/lib/formatPythonString/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			const n = /%\((\w+)\)s/g;

			function r(e, t) {
				return e.replace(n, (function(e, o) {
					return o in t ? t[o] : e
				}))
			}
		},
		"./src/reddit/actions/apiRequestState.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return s
			})), o.d(t, "a", (function() {
				return i
			})), o.d(t, "b", (function() {
				return a
			})), o.d(t, "c", (function() {
				return l
			})), o.d(t, "h", (function() {
				return c
			})), o.d(t, "e", (function() {
				return d
			})), o.d(t, "f", (function() {
				return u
			})), o.d(t, "g", (function() {
				return p
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/models/ApiRequestState/index.ts");
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
			const p = Object(n.a)(l)
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			})), o.d(t, "e", (function() {
				return c
			})), o.d(t, "b", (function() {
				return d
			})), o.d(t, "c", (function() {
				return u
			})), o.d(t, "d", (function() {
				return p
			})), o.d(t, "f", (function() {
				return m
			})), o.d(t, "h", (function() {
				return f
			})), o.d(t, "g", (function() {
				return g
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/lib/makeGqlRequest/index.ts"),
				s = o("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const i = (e, t) => Object(r.a)(e, {
				...s,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var a = o("./src/reddit/selectors/blockedRedditors.ts");
			const l = "BLOCKED_REDDITORS_LIST__ADD",
				c = "BLOCKED_REDDITORS_LIST__REMOVE",
				d = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(n.a)(l),
				f = Object(n.a)(c),
				_ = Object(n.a)(d),
				h = Object(n.a)(u),
				b = Object(n.a)(p),
				g = () => async (e, t, {
					gqlContext: o
				}) => {
					const n = t(),
						r = Object(a.a)(n);
					if (Object(a.b)(n) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let s = !1,
						l = "";
					do {
						e(b());
						const t = {
								after: l,
								pageSize: 100
							},
							n = await i(o(), t);
						if (n && n.ok) {
							const {
								data: {
									identity: t
								}
							} = n.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: o,
									edges: n
								} = t.blockedRedditorsInfo;
								if (e(h(n.map(e => e.node.id))), o) {
									const {
										hasNextPage: e,
										endCursor: t
									} = o;
									s = e, l = t || ""
								}
							} else s = !1
						} else {
							s = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(_({
								message: t
							}))
						}
					} while (s)
				}
		},
		"./src/reddit/actions/postFlairStyleTemplates/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return n
			})), o.d(t, "b", (function() {
				return r
			})), o.d(t, "a", (function() {
				return s
			}));
			const n = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_PENDING",
				r = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_LOADED",
				s = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_FAILED"
		},
		"./src/reddit/actions/reportFlow/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "e", (function() {
				return n
			})), o.d(t, "d", (function() {
				return r
			})), o.d(t, "c", (function() {
				return s
			})), o.d(t, "f", (function() {
				return i
			})), o.d(t, "a", (function() {
				return a
			})), o.d(t, "b", (function() {
				return l
			})), o.d(t, "g", (function() {
				return c
			}));
			const n = "REPORT__PENDING",
				r = "REPORT__LOADED",
				s = "REPORT__FAILED",
				i = "REPORT_FLOW__TARGET_SET",
				a = "REPORT_FLOW__OPENED_FROM_MODAL_PAGE",
				l = "REPORT_FLOW__OPEN_CATEGORY",
				c = "REPORT_FLOW__USER_IS_MOD_SET"
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "c", (function() {
				return s
			})), o.d(t, "b", (function() {
				return i
			}));
			var n = o("./src/lib/loadableAction/index.ts");
			const r = Object(n.a)(() => Promise.all([o.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				s = Object(n.a)(() => Promise.all([o.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(n.a)(() => Promise.all([o.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/reportFlow/reportFlow.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "postOrCommentReported", (function() {
				return D
			})), o.d(t, "reportFlowTargetSet", (function() {
				return B
			})), o.d(t, "reportFlowOpenedFromModalPage", (function() {
				return U
			})), o.d(t, "reportFlowOpenCategory", (function() {
				return M
			})), o.d(t, "reportFlowOpened", (function() {
				return q
			})), o.d(t, "reportFlowClosed", (function() {
				return K
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/login.ts"),
				i = o("./src/reddit/actions/modal.ts"),
				a = o("./src/reddit/actions/reportRules.ts"),
				l = o("./src/reddit/actions/subreddit.ts"),
				c = o("./src/reddit/actions/toaster.ts"),
				d = o("./src/reddit/actions/users.ts"),
				u = o("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"),
				p = o("./src/reddit/endpoints/post/index.tsx"),
				m = o("./src/reddit/helpers/isComment.ts"),
				f = o("./src/reddit/helpers/isPost.ts"),
				_ = o("./src/reddit/models/Post/index.ts"),
				h = o("./src/reddit/models/Toast/index.ts"),
				b = o("./src/reddit/selectors/posts.ts"),
				g = o("./src/reddit/selectors/user.ts"),
				w = o("./src/lib/initializeClient/installReducer.ts"),
				x = o("./node_modules/redux/es/redux.js"),
				v = o("./src/reddit/actions/reportFlow/constants.ts");
			const O = {};
			var C = (e = O, t) => {
				switch (t.type) {
					case v.e:
					case v.d: {
						const {
							id: o
						} = t.payload;
						return {
							...e,
							[o]: !1
						}
					}
					case v.c: {
						const {
							id: o
						} = t.payload;
						return {
							...e,
							[o]: !0
						}
					}
					case v.f: {
						const o = t.payload;
						return o ? {
							...e,
							[o]: !1
						} : e
					}
					default:
						return e
				}
			};
			const y = {};
			var E = (e = y, t) => {
				switch (t.type) {
					case v.e: {
						const {
							id: o
						} = t.payload;
						return {
							...e,
							[o]: !0
						}
					}
					case v.d:
					case v.c: {
						const {
							id: o
						} = t.payload;
						return {
							...e,
							[o]: !1
						}
					}
					case v.f: {
						const o = t.payload;
						return o ? {
							...e,
							[o]: !1
						} : e
					}
					default:
						return e
				}
			};
			const S = {};
			var k = (e = S, t) => {
					switch (t.type) {
						case v.d: {
							const {
								id: o
							} = t.payload;
							return {
								...e,
								[o]: !0
							}
						}
						case v.e:
						case v.c: {
							const {
								id: o
							} = t.payload;
							return {
								...e,
								[o]: !1
							}
						}
						case v.f: {
							const o = t.payload;
							return o ? {
								...e,
								[o]: !1
							} : e
						}
						default:
							return e
					}
				},
				R = Object(x.c)({
					error: C,
					pending: E,
					success: k
				}),
				I = o("./src/reddit/actions/platform.ts");
			var j = (e = !1, t) => {
				switch (t.type) {
					case v.a:
						return t.payload;
					case i.c:
						return !t.payload && e;
					case I.a:
						return !1;
					case v.f:
						return !!t.payload && e;
					default:
						return e
				}
			};
			var T = (e = null, t) => {
				switch (t.type) {
					case v.f:
						return t.payload;
					case i.c:
						return t.payload ? null : e;
					case I.a:
						return null;
					default:
						return e
				}
			};
			var L = (e = !1, t) => {
				switch (t.type) {
					case v.g:
						return t.payload;
					case v.f:
						return !1;
					default:
						return e
				}
			};
			var P = Object(x.c)({
				api: R,
				openedFromModalPage: j,
				postOrCommentId: T,
				userIsMod: L,
				rulesCategory: (e = null, t) => {
					switch (t.type) {
						case v.b:
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
			const N = Object(r.a)(v.e),
				F = Object(r.a)(v.d),
				A = Object(r.a)(v.c),
				D = (e, t) => async (o, r, {
					apiContext: s
				}) => {
					const i = e.id,
						a = r(),
						l = a.features.reportFlow.api.pending[i],
						d = a.features.reportFlow.userIsMod;
					if (l) return;
					o(N({
						id: i
					}));
					const u = await Object(p.n)(s(), e),
						m = `error-report-${i}`;
					if (u.ok) o(F({
						id: i
					})), o(c.g(m)), !t.isAbuseOfReportButton && d && o(K());
					else {
						o(A({
							id: i
						}));
						const r = u.error && u.error.fields && u.error.fields.length ? u.error.fields[0].msg : "";
						o(c.f({
							id: m,
							kind: h.b.Error,
							text: r || n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: D(e, t)
						}))
					}
				}, B = Object(r.a)(v.f), U = Object(r.a)(v.a), M = Object(r.a)(v.b), q = (e, t, o) => async (n, r, {
					apiContext: c
				}) => {
					const u = r(),
						p = Object(m.a)(e),
						h = Object(f.a)(e);
					if (!h && !p) return;
					const w = p ? u.features.comments.models[e] : u.posts.models[e];
					if (!w) return;
					if (!Object(g.J)(r())) return n(Object(s.k)()), void n(Object(i.k)({
						actionSource: i.a.Report,
						redirectUrl: w.permalink
					}));
					n(Object(d.z)(w.author));
					const x = Object(b.V)(u, {
							postId: p ? u.features.comments.models[e].postId : u.posts.models[e].id
						}),
						v = h && Object(_.o)(w) || p && W(w, u);
					v || u.reportRules.sitewideRules && u.reportRules.sitewideRules.length || n(Object(a.d)()), !v || u.reportRules.liveStreamingRules && u.reportRules.liveStreamingRules.length || n(Object(a.c)()), x && n(Object(l.o)(x.name, x.type)), n(B(e)), n(U(!!t)), o && n(M(o)), x && n(G(x.name))
				}, H = Object(r.a)(v.g), G = e => async (t, o, {
					apiContext: n
				}) => {
					const r = await Object(u.a)(n());
					t(H(r.ok && !!r.body[e]))
				}, K = () => async (e, t, {
					apiContext: o
				}) => {
					e(B(null))
				}, W = (e, t) => {
					const o = e.postId,
						n = o && t.posts.models[o];
					return !!n && Object(_.o)(n)
				}
		},
		"./src/reddit/actions/reportRules.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return c
			})), o.d(t, "a", (function() {
				return d
			})), o.d(t, "d", (function() {
				return m
			})), o.d(t, "c", (function() {
				return f
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/lib/constants/index.ts"),
				i = o("./src/lib/makeApiRequest/index.ts"),
				a = o("./src/lib/omitHeaders/index.ts"),
				l = o("./src/reddit/constants/headers.ts");
			const c = "SITEWIDE_RULES_LOADED",
				d = "LIVESTREAMING_RULES_LOADED",
				u = Object(r.a)(c),
				p = Object(r.a)(d),
				m = () => async (e, t, {
					apiContext: o
				}) => {
					if (!t().user) return;
					const n = await (e => Object(i.a)(Object(a.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: s.hb.GET
					}))(o());
					if (n.ok) {
						const t = n.body,
							o = _(t.sitewide_rules);
						e(u(o))
					}
				}, f = () => async (e, t, {
					apiContext: o
				}) => {
					if (!t().user) return;
					const n = await (e => Object(i.a)(Object(a.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/livestream_rules.json`,
						method: s.hb.GET
					}))(o());
					if (n.ok) {
						const t = n.body,
							o = _(t.livestream_rules);
						e(p(o))
					}
				}, _ = e => {
					let t = [];
					if (e && e.length > 2) {
						const o = {
							reasonTextToShow: n.fbt._("It's spam or abuse", null, {
								hk: "21rHqk"
							}),
							nextStepReasons: [e[0], e[1], e[2]]
						};
						4 === e.length && o.nextStepReasons && o.nextStepReasons.push(e[3]), t.push(o), t = t.concat(e.slice(e.length - 1))
					}
					return t
				}
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return i
			})), o.d(t, "a", (function() {
				return a
			})), o.d(t, "b", (function() {
				return l
			})), o.d(t, "d", (function() {
				return c
			}));
			var n = o("./src/reddit/constants/shortcuts.ts"),
				r = o("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				s = o("./src/reddit/helpers/routeKey/index.ts");
			const i = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const o = t.routeMatch,
						n = Object(r.a)(e);
					return Object(s.b)(o, e, n)
				},
				a = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				l = e => {
					const t = document.getElementById(e),
						o = window.scrollX,
						n = window.scrollY;
					t && (t.focus(), window.scrollTo(o, n))
				},
				c = () => {
					l(n.b)
				}
		},
		"./src/reddit/actions/structuredStyles/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "l", (function() {
				return n
			})), o.d(t, "k", (function() {
				return r
			})), o.d(t, "j", (function() {
				return s
			})), o.d(t, "i", (function() {
				return i
			})), o.d(t, "h", (function() {
				return a
			})), o.d(t, "g", (function() {
				return l
			})), o.d(t, "b", (function() {
				return c
			})), o.d(t, "c", (function() {
				return d
			})), o.d(t, "e", (function() {
				return u
			})), o.d(t, "d", (function() {
				return p
			})), o.d(t, "f", (function() {
				return m
			})), o.d(t, "a", (function() {
				return f
			})), o.d(t, "n", (function() {
				return _
			})), o.d(t, "m", (function() {
				return h
			}));
			const n = "STRUCTURED_STYLES__STYLES_RESET_PENDING",
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
				h = "STRUCTURED_STYLES__STYLES_UPDATED_LOADED"
		},
		"./src/reddit/actions/structuredStyles/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "l", (function() {
				return B
			})), o.d(t, "k", (function() {
				return q
			})), o.d(t, "j", (function() {
				return W
			})), o.d(t, "e", (function() {
				return Y
			})), o.d(t, "d", (function() {
				return X
			})), o.d(t, "g", (function() {
				return J
			})), o.d(t, "c", (function() {
				return $
			})), o.d(t, "f", (function() {
				return te
			})), o.d(t, "b", (function() {
				return oe
			})), o.d(t, "m", (function() {
				return ne
			})), o.d(t, "a", (function() {
				return re
			})), o.d(t, "h", (function() {
				return se
			})), o.d(t, "i", (function() {
				return ie
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/lodash/omit.js"),
				r = o.n(n),
				s = o("./node_modules/lodash/pick.js"),
				i = o.n(s),
				a = o("./node_modules/react-router-redux/es/index.js"),
				l = o("./src/lib/filterQueryParams/index.ts"),
				c = o("./src/lib/formatApiError/index.ts"),
				d = o("./src/lib/makeActionCreator/index.ts"),
				u = o("./src/reddit/actions/apiRequestState.ts"),
				p = o("./src/reddit/actions/imageUploads.ts"),
				m = o("./src/reddit/actions/modal.ts"),
				f = o("./src/reddit/endpoints/moderator/structuredStyles.ts"),
				_ = e => ({
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
				}),
				h = o("./src/reddit/selectors/postFlair.ts"),
				b = o("./src/reddit/selectors/subreddit.ts"),
				g = o("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const w = Object(d.a)(g.c),
				x = Object(d.a)(g.b),
				v = Object(d.a)(g.a);
			var O = o("./src/reddit/actions/toaster.ts"),
				C = o("./src/reddit/actions/widgets/index.ts"),
				y = o("./src/reddit/constants/modals.ts"),
				E = o("./src/reddit/helpers/getGenericUploadError.ts"),
				S = o("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				k = o("./src/reddit/helpers/media/index.ts"),
				R = o("./src/reddit/models/Image/index.tsx"),
				I = o("./src/reddit/models/StructuredStyles/index.ts"),
				j = o("./src/reddit/models/Toast/index.ts"),
				T = o("./src/reddit/selectors/activeModalId.ts"),
				L = o("./src/reddit/selectors/platform.ts"),
				P = o("./src/reddit/selectors/structuredStyles.ts"),
				N = o("./src/reddit/selectors/user.ts"),
				F = o("./src/reddit/helpers/trackers/blade.ts"),
				A = o("./src/telemetry/index.ts"),
				D = o("./src/reddit/actions/structuredStyles/constants.ts");
			const B = Object(d.a)(D.m),
				U = {
					bannerBackgroundImage: ["bannerBackgroundImagePosition"],
					bannerPositionedImage: ["bannerPositionedImagePosition", "secondaryBannerPositionedImage"]
				},
				M = e => {
					const t = {
						...e
					};
					return Object.keys(e).forEach(o => {
						U[o] && !e[o] && U[o].forEach(e => t[e] = null)
					}), t
				},
				q = (e, t, o, n) => async (r, s, i) => {
					const {
						apiContext: a
					} = i, l = s(), d = M(t), m = l.structuredStyles.models[e];
					let _;
					for (const e in d)
						if (d[e] !== m[e]) {
							_ = !0;
							break
						} if (!_) return;
					r(Object(u.h)(n));
					const h = Object(F.i)(o)(l);
					let g = null,
						w = null;
					try {
						(g = await Object(p.f)(s(), R.a.StructuredStyles)) && (w = Object(p.m)(g)(r, s, i))
					} catch (y) {
						const e = Object(E.a)("webSocket");
						return void r(Object(u.f)(n, e))
					}
					const x = Object(b.T)(l, {
							subredditId: e
						}).name,
						v = await f.e(a(), x, d),
						C = {};
					if (v.ok) {
						if (w) try {
							await w
						} catch (y) {}
						const o = Object(P.f)(s(), {
							apiRequestId: n
						});
						for (const e in o)
							if (e in t) {
								const t = Object(P.g)(s(), {
									name: e
								});
								t && Object(R.j)(t) && (C[e] = o[e])
							} Object.keys(C).length && r(V(C)), r(Object(u.e)(n)), r(B({
							subredditId: e,
							styles: {
								...d,
								...C
							}
						}))
					} else g && g.websocket.close(), r(Object(u.f)(n, v.error)), v.body && r(O.f({
						kind: j.b.Error,
						text: Object(c.a)(v.error, v.status)
					}));
					Object(A.a)({
						...h,
						actionInfo: {
							...h.actionInfo,
							success: v.ok
						}
					})
				}, H = Object(d.a)(D.l), G = Object(d.a)(D.k), K = Object(d.a)(D.j), W = e => async (t, o, {
					apiContext: n
				}) => {
					t(H({
						subredditId: e
					}));
					const r = Object(b.T)(o(), {
							subredditId: e
						}).name,
						s = await f.f(n(), r);
					if (s.ok) {
						const n = o().structuredStyles.models[e],
							r = n ? n.mobileKeyColor : null;
						t(G({
							subredditId: e,
							styles: {
								mobileKeyColor: r
							}
						}))
					} else t(K({
						subredditId: e,
						...s.error
					}))
				}, z = Object(d.a)(D.d), Y = e => async (t, o, n) => {
					const r = o(),
						s = r.structuredStyles.models[e] || {},
						i = Object(N.W)(r);
					t(z({
						isNightmodeOn: i,
						styles: s,
						subredditId: e
					})), de(e, !1)(t, o, n), (e => async (t, o, {
						gqlContext: n
					}) => {
						const r = o(),
							s = Object(b.T)(r, {
								subredditId: e
							});
						if (!s) return;
						const i = Object(h.d)(r, {
								subredditId: e
							}),
							a = i && i.templateIds;
						if (!a || !a.length) return;
						t(w({
							subredditId: e
						}));
						const l = await Object(f.a)(n(), s.name, a);
						if (l.ok) {
							const o = {};
							if (l.body) {
								const {
									data: e
								} = l.body;
								if (e && e.subreddit)
									for (const t of e.subreddit.postFlairStyleTemplates) o[t.id] = _(t)
							}
							t(x({
								subredditId: e,
								templates: o
							}))
						} else t(v({
							subredditId: e,
							error: l.error
						}))
					})(e)(t, o, n), Object(C.g)(e, !1)(t, o, n)
				}, V = Object(d.a)(D.c), X = e => async (t, o, n) => {
					const r = M(e),
						s = o();
					for (const e in r)
						if (Object(I.l)(e))
							if (r[e]) {
								if ("string" != typeof r[e]) {
									const s = r[e],
										i = await Object(R.e)(s);
									J(e, i)(t, o, n), r[e] = ""
								}
							} else {
								const o = Object(P.g)(s, {
									name: e
								});
								o && t(Object(p.h)(o))
							} t(V(r))
				}, Q = Object(d.a)(D.f), J = (e, t, o) => async (n, r, s) => {
					const i = r(),
						a = o || i.structuredStyles.isEditing,
						l = Object(b.T)(i, {
							subredditId: a
						}).name;
					n(Q({
						imageKey: e,
						uploadId: t.id
					})), n(Object(p.k)(t));
					const c = await f.d(s.apiContext(), l, t.file.name, e, await Object(k.g)(t.file));
					try {
						const o = await Object(p.g)(r(), c, t, R.a.StructuredStyles);
						if (o) {
							const t = o.url;
							n(Object(p.j)(o)), n(V({
								[e]: t
							}))
						}
					} catch (d) {
						if (d instanceof Error) throw d;
						n(Object(p.i)(d))
					}
				}, Z = Object(d.a)(D.b), $ = (e, t, o) => async (n, s, a) => {
					const l = s(),
						c = l.structuredStyles.models[e] || {},
						d = l.structuredStyles.draft,
						u = Object(F.h)(t)(l);
					if (o) {
						const t = i()(c, o),
							s = {
								...r()(d, o),
								...t
							};
						n(Z({
							subredditId: e,
							styles: s
						}))
					} else {
						n(Z({
							subredditId: e,
							styles: c
						}))
					}
					Object(A.a)(u)
				}, ee = Object(d.a)(D.e), te = () => async (e, t, o) => {
					const n = t(),
						r = Object(N.X)(n),
						s = !!Object(L.a)(n);
					if (e(ee({
							nightmodeTempUpdated: r
						})), s) return;
					const {
						url: i
					} = n.platform.currentPage;
					i && e(Object(a.c)(Object(l.a)(i, ["styling", "route"])))
				}, oe = Object(d.a)(D.a), ne = Object(d.a)(D.n), re = () => async e => e(te()), se = e => async (t, o) => {
					const n = o(),
						r = Object(P.i)(n);
					!Object(T.b)(y.a.BLADE_UNSAVED_CHANGES)(n) && r && (Object(P.a)(n, {
						subredditId: e
					}) ? t(Object(m.i)(y.a.BLADE_UNSAVED_CHANGES)) : t(re()))
				}, ie = e => async (t, o) => {
					const n = o();
					Object(P.i)(n) || t(Object(N.W)(n) ? Object(m.i)(y.a.BLADE_NIGHTMODE) : Y(e))
				}, ae = Object(d.a)(D.i), le = Object(d.a)(D.h), ce = Object(d.a)(D.g), de = (e, t) => async (o, n, {
					gqlContext: r,
					apiContext: s
				}) => {
					o(ae({
						subredditId: e
					}));
					const i = Object(b.T)(n(), {
						subredditId: e
					});
					if (!i) return;
					if (!t) {
						const n = await f.c(s(), i.name, t);
						if (n.ok) {
							const t = n.body,
								r = t.data ? t.data.style : {};
							o(le({
								subredditId: e,
								styles: r
							}))
						} else o(ce({
							subredditId: e,
							...n.error
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
						o(le({
							subredditId: e,
							styles: t
						}))
					} else o(ce({
						subredditId: e,
						...a.error
					}))
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return d
			})), o.d(t, "e", (function() {
				return u
			})), o.d(t, "d", (function() {
				return p
			})), o.d(t, "h", (function() {
				return h
			})), o.d(t, "b", (function() {
				return b
			})), o.d(t, "c", (function() {
				return g
			})), o.d(t, "a", (function() {
				return w
			})), o.d(t, "g", (function() {
				return C
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/blockedRedditors.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				a = o("./src/reddit/endpoints/accounts/index.ts"),
				l = o("./src/reddit/models/Toast/index.ts"),
				c = o("./src/reddit/selectors/user.ts");
			const d = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				m = Object(r.a)(d),
				f = Object(r.a)(u),
				_ = Object(r.a)(p),
				h = e => async (t, o, {
					apiContext: r
				}) => {
					if (o().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const c = await Object(a.a)(r(), e),
						d = `error-block-${e}`;
					if (c.ok) c.body.name && t(f(c.body)), c.body.id && t(Object(s.f)(c.body.id)), t(i.g(d)), t(i.f({
						kind: l.b.SuccessCommunity,
						text: n.fbt._("{username} is now blocked", [n.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const o = {
							type: c.error ? c.error.type : "Unknown error",
							username: e
						};
						t(_(o)), t(i.f({
							id: d,
							kind: l.b.Error,
							text: n.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: h(e)
						}))
					}
				}, b = "USER_UNBLOCK__PENDING", g = "USER_UNBLOCK__SUCCESS", w = "USER_UNBLOCK__FAILED", x = Object(r.a)(b), v = Object(r.a)(g), O = Object(r.a)(w), C = e => async (t, o, {
					apiContext: r
				}) => {
					const d = o(),
						u = Object(c.j)(d),
						p = u ? u.id : void 0,
						m = d.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(x({
						name: e
					})), (await Object(a.c)(r(), p, e)).ok ? (t(v({
						name: e
					})), m && m.id && t(Object(s.h)(m.id)), t(i.f({
						kind: l.b.SuccessCommunity,
						text: n.fbt._("{username} is now unblocked", [n.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.f({
						kind: l.b.Error,
						text: n.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(O({
						name: e
					}))))
				}
		},
		"./src/reddit/actions/widgets/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "g", (function() {
				return n
			})), o.d(t, "i", (function() {
				return r
			})), o.d(t, "h", (function() {
				return s
			})), o.d(t, "f", (function() {
				return i
			})), o.d(t, "d", (function() {
				return a
			})), o.d(t, "e", (function() {
				return l
			})), o.d(t, "c", (function() {
				return c
			})), o.d(t, "b", (function() {
				return d
			})), o.d(t, "a", (function() {
				return u
			}));
			const n = "WIDGETS__WIDGET_CREATED",
				r = "WIDGETS__WIDGET_UPDATED",
				s = "WIDGET_DELETED",
				i = "WIDGETS_SORTED",
				a = "WIDGETS__STARTED_EDITING_WIDGET",
				l = "WIDGETS__LOADED",
				c = "SUBREDDIT__WIDGETS_PENDING",
				d = "SUBREDDIT__WIDGETS_LOADED",
				u = "SUBREDDIT__WIDGETS_FAILED"
		},
		"./src/reddit/actions/widgets/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return O
			})), o.d(t, "e", (function() {
				return y
			})), o.d(t, "d", (function() {
				return S
			})), o.d(t, "h", (function() {
				return R
			})), o.d(t, "a", (function() {
				return I
			})), o.d(t, "b", (function() {
				return j
			})), o.d(t, "f", (function() {
				return L
			})), o.d(t, "g", (function() {
				return A
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/apiRequestState.ts"),
				i = o("./src/reddit/actions/imageUploads.ts"),
				a = o("./src/reddit/actions/toaster.ts"),
				l = o("./src/lib/constants/index.ts"),
				c = o("./src/lib/makeApiRequest/index.ts"),
				d = o("./src/lib/omitHeaders/index.ts"),
				u = o("./src/reddit/constants/headers.ts");
			const p = async (e, t, o) => Object(c.a)(Object(d.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/r/${t}/api/widgets`,
				method: l.hb.GET,
				type: "json",
				data: {
					progressive_images: o
				}
			});
			var m = o("./src/reddit/helpers/getGenericUploadError.ts"),
				f = o("./src/reddit/helpers/media/index.ts"),
				_ = o("./src/lib/assertNever.ts"),
				h = o("./src/reddit/selectors/subreddit.ts"),
				b = o("./src/reddit/models/Image/index.tsx"),
				g = o("./src/reddit/models/Toast/index.ts"),
				w = o("./src/reddit/models/Widgets/index.ts"),
				x = o("./src/reddit/actions/widgets/constants.ts");
			const v = Object(r.a)(x.g),
				O = (e, t, o) => async (r, p, f) => {
					const {
						apiContext: _
					} = f;
					r(Object(s.h)(o));
					const x = p(),
						O = Object(h.T)(x, {
							subredditId: e
						}).name,
						C = Object(w.k)(t);
					let y = null,
						E = null;
					try {
						(y = await Object(i.f)(x, b.a.Widgets)) && (E = Object(i.m)(y)(r, p, f))
					} catch (k) {
						const e = Object(m.a)("webSocket");
						return void r(Object(s.f)(o, e))
					}
					const S = await (async (e, t, o) => Object(c.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget`,
						method: l.hb.POST,
						type: "json",
						data: o
					}))(_(), O, C);
					if (S.ok) {
						let i = S.body;
						const l = i.id;
						if ("calendar" === t.kind && r(Object(a.f)({
								kind: g.b.SuccessMod,
								text: n.fbt._("New calendar added! It may take a few minutes to see your events appear", null, {
									hk: "4iETrT"
								})
							})), y) {
							try {
								await E
							} catch (k) {}
							i = await r(D(e, l)) || i
						}
						r(v({
							subredditId: e,
							widget: i,
							widgetId: l
						})), r(Object(s.e)(o))
					} else y && y.websocket.close(), r(Object(s.f)(o, S.error))
				}, C = Object(r.a)(x.i), y = (e, t, o) => async (r, p, f) => {
					const {
						apiContext: x
					} = f;
					r(Object(s.h)(o));
					const v = t.id,
						O = p(),
						y = Object(h.T)(O, {
							subredditId: e
						}).name,
						E = Object(w.k)(t);
					let S = null,
						k = null;
					try {
						(S = await Object(i.f)(O, b.a.Widgets)) && (k = Object(i.m)(S)(r, p, f))
					} catch (I) {
						const e = Object(m.a)("webSocket");
						return void r(Object(s.f)(o, e))
					}
					const R = await (async (e, t, o) => Object(c.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget/${o.id}`,
						method: l.hb.PUT,
						type: "json",
						data: o
					}))(x(), y, E);
					if (R.ok) {
						let i = function(e, t, o) {
							switch (e.kind) {
								case "calendar":
								case "id-card":
								case "subreddit-rules":
									return {
										...e, ...t
									};
								case "community-list": {
									const n = {};
									for (const t of e.data) n[t.name] = t;
									return {
										...t,
										data: t.data.map(e => {
											if (!("subscribers" in n[e])) {
												const t = {
														subredditName: e
													},
													n = Object(h.z)(o, t),
													r = Object(h.w)(o, t);
												return {
													name: n.name,
													subscribers: n ? n.subscribers : void 0,
													iconUrl: n ? n.communityIcon : void 0,
													isNSFW: n ? n.isNSFW : void 0,
													isSubscribed: r ? r.userIsSubscriber : void 0
												}
											}
											return n[e]
										})
									}
								}
								case "button":
								case "custom":
								case "image":
								case "menu":
								case "moderators":
								case "textarea":
								case "post-flair":
									return t;
								default:
									return Object(_.a)(e)
							}
						}(t, R.body, O);
						if (k) {
							try {
								await k
							} catch (I) {}
							i = await r(D(e, v)) || i
						}
						r(C({
							subredditId: e,
							widgetId: v,
							widget: i
						})), "calendar" === t.kind && r(Object(a.f)({
							kind: g.b.SuccessMod,
							text: n.fbt._("Calendar is updated! It may take a few minutes to see your events change", null, {
								hk: "10XWV"
							})
						})), r(Object(s.e)(o))
					} else S && S.websocket.close(), r(Object(s.f)(o, R.error))
				}, E = Object(r.a)(x.h), S = (e, t, o) => async (n, r, {
					apiContext: i
				}) => {
					n(Object(s.h)(o));
					const a = t.id,
						p = Object(h.T)(r(), {
							subredditId: e
						}).name,
						m = await (async (e, t, o) => Object(c.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/r/${t}/api/widget/${o.id}`,
							method: l.hb.DELETE,
							type: "json"
						}))(i(), p, t);
					m.ok ? (n(Object(s.e)(o)), n(E({
						subredditId: e,
						widgetId: a
					}))) : n(Object(s.f)(o, m.error))
				}, k = Object(r.a)(x.f), R = (e, t) => async (o, n, {
					apiContext: r
				}) => {
					const s = Object(h.T)(n(), {
						subredditId: e
					}).name;
					(await (async (e, t, o) => Object(c.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget_order/sidebar`,
						method: l.hb.PATCH,
						type: "json",
						data: o
					}))(r(), s, t)).ok && o(k({
						subredditId: e,
						widgetIds: t
					}))
				}, I = ({
					imageData: e
				}) => async (t, o, n) => {
					const r = o(),
						s = r.structuredStyles.isEditing,
						a = Object(h.T)(r, {
							subredditId: s
						}).name;
					t(Object(i.k)(e));
					const p = await (async (e, t, o, n) => Object(c.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget_image_upload_s3`,
						method: l.hb.POST,
						data: {
							filepath: o,
							mimetype: n
						}
					}))(n.apiContext(), a, e.file.name, await Object(f.g)(e.file));
					let m = !1;
					try {
						const n = await Object(i.g)(o(), p, e, b.a.Widgets);
						n && (t(Object(i.j)(n)), m = !0)
					} catch (_) {
						if (_ instanceof Error) throw _;
						t(Object(i.i)(_))
					}
					return m
				}, j = Object(r.a)(x.d), T = Object(r.a)(x.e), L = (e, t) => async (o, n, {
					apiContext: r
				}) => {
					o(Object(s.h)(t));
					const i = Object(h.T)(n(), {
							subredditId: e
						}).name,
						a = await p(r(), i);
					if (a.ok) {
						const n = a.body;
						o(T({
							subredditId: e,
							widgets: n
						})), o(Object(s.e)(t))
					} else o(Object(s.f)(t, a.error))
				}, P = Object(r.a)(x.c), N = Object(r.a)(x.b), F = Object(r.a)(x.a), A = (e, t) => async (o, n, {
					apiContext: r
				}) => {
					o(P({
						subredditId: e
					}));
					const s = Object(h.T)(n(), {
							subredditId: e
						}).name,
						i = await p(r(), s, t);
					if (i.ok) {
						const t = i.body;
						o(N({
							subredditId: e,
							widgets: t
						}))
					} else o(F({
						subredditId: e,
						error: i.error
					}))
				}, D = (e, t) => async (o, n, {
					apiContext: r
				}) => {
					const s = Object(h.T)(n(), {
							subredditId: e
						}).name,
						i = await p(r(), s, !0);
					if (i.ok) return i.body.items[t]
				}
		},
		"./src/reddit/components/AccordionSection/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/AccordionSection/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./node_modules/react-redux/es/index.js"),
				i = o("./src/reddit/actions/tooltip.ts"),
				a = o("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = o("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				c = o("./src/reddit/components/AccordionSection/index.m.less"),
				d = o.n(c),
				u = o("./src/lib/classNames/index.ts"),
				p = o("./src/lib/lessComponent.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = p.a.div("Section", d.a),
				_ = p.a.wrapped(l.a, "ChevronUp", d.a),
				h = p.a.wrapped(a.a, "ChevronDown", d.a),
				b = p.a.wrapped(({
					className: e,
					isOpen: t,
					...o
				}) => r.a.createElement("div", m({
					className: Object(u.a)(e, {
						[d.a.mIsOpen]: t
					})
				}, o)), "ArticleWrap", d.a),
				g = p.a.wrapped(({
					className: e,
					isOpen: t,
					...o
				}) => r.a.createElement("div", m({
					className: Object(u.a)(e, {
						[d.a.mIsOpen]: t
					})
				}, o)), "SectionHead", d.a),
				w = p.a.div("Article", d.a);
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return r.a.createElement("div", null, r.a.createElement(f, null, this.props.open ? r.a.createElement(_, null) : r.a.createElement(h, null), r.a.createElement(g, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), r.a.createElement(b, {
						isOpen: this.props.open
					}, this.props.open ? r.a.createElement(w, null, this.props.children) : null)))
				}
			}
			t.a = Object(s.b)(null, e => ({
				onSwitchSection: () => e(Object(i.i)())
			}))(x)
		},
		"./src/reddit/components/ContentPolicy/index.m.less": function(e, t, o) {
			e.exports = {
				Content: "_3-EmzITVSpJTN0ZK7n_YaM",
				content: "_3-EmzITVSpJTN0ZK7n_YaM",
				Link: "_3O6FEW7DxfrphV_mOjif19",
				link: "_3O6FEW7DxfrphV_mOjif19"
			}
		},
		"./src/reddit/components/ContentPolicy/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return p
			}));
			var n = o("./src/config.ts"),
				r = o("./node_modules/react/index.js"),
				s = o.n(r),
				i = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/components/ContentPolicy/index.m.less"),
				l = o.n(a);
			const {
				fbt: c
			} = o("./node_modules/fbt/lib/FbtPublic.js"), d = i.a.div("Content", l.a), u = i.a.a("Link", l.a);
			class p extends s.a.Component {
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement(d, null, e.subredditOrProfile && !e.isLiveStreaming ? c._("Read the {=Reddit Content Policy}{=and [communityName] 's rules}", [c._param("=Reddit Content Policy", s.a.createElement(u, {
						target: "_blank",
						href: `${n.a.redditUrl}/help/contentpolicy`
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
						href: `${n.a.redditUrl}/help/contentpolicy`
					}, c._("Reddit Content Policy", null, {
						hk: "1a3o6N"
					})))], {
						hk: "7x0QT"
					}))
				}
			}
		},
		"./src/reddit/components/CrisisFlow/async.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-CrisisFlow-CrisisFlowPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("reddit-components-CrisisFlow-CrisisFlowPage").then(o.bind(null, "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx"
				}
			})
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			}));
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = o("./src/reddit/constants/colors.ts");
			const s = {
				backgroundColor: r.b.overlayReportFlow
			};
			t.b = Object(n.a)({
				resolved: {},
				chunkName: () => "CrisisFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("CrisisFlow").then(o.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx")).then(e => e.default),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"
				}
			})
		},
		"./src/reddit/components/FormBuilder/async.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-FormBuilder",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => Promise.all([o.e("vendors~chat-components-FormBuilder~reddit-components-FormBuilder"), o.e("reddit-components-FormBuilder")]).then(o.bind(null, "./src/reddit/components/FormBuilder/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/FormBuilder/index.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/FileAComplaint/index.m.less": function(e, t, o) {
			e.exports = {
				LinkHolder: "gzSFYulriiznSCkE16gKp",
				linkHolder: "gzSFYulriiznSCkE16gKp",
				Link: "_15Wqlxyx3Z-T-z0DvNxSCJ",
				link: "_15Wqlxyx3Z-T-z0DvNxSCJ",
				footer: "_1brqmxWqCHF82p5qKIJJBz"
			}
		},
		"./src/reddit/components/ReportFlow/FinalPage/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/ReportFlow/FirstPage/index.m.less": function(e, t, o) {
			e.exports = {
				Footer: "_2U3QSqUpg8P1lhj6uVJ7Qz",
				footer: "_2U3QSqUpg8P1lhj6uVJ7Qz",
				SubmitButton: "_3s4nx6OebtFkWRvN_J8Zkh",
				submitButton: "_3s4nx6OebtFkWRvN_J8Zkh"
			}
		},
		"./src/reddit/components/ReportFlow/ReusableComponents/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less": function(e, t, o) {
			e.exports = {
				Dropdown: "H6Tl_y2c6WutwVvNUVsA9",
				dropdown: "H6Tl_y2c6WutwVvNUVsA9",
				FreeFormTextArea: "LfGyCwXYHBpCc27lxC6rk",
				freeFormTextArea: "LfGyCwXYHBpCc27lxC6rk"
			}
		},
		"./src/reddit/components/ReportFlow/Title/index.m.less": function(e, t, o) {
			e.exports = {
				Title: "DKSbQ0QcfECfr4r3QT7-u",
				title: "DKSbQ0QcfECfr4r3QT7-u",
				CloseWrapper: "xOUVwwi_b-bjJ4KFZk5Sh",
				closeWrapper: "xOUVwwi_b-bjJ4KFZk5Sh",
				Close: "_2B-LfwHdWwLdn-v09usrDn",
				close: "_2B-LfwHdWwLdn-v09usrDn"
			}
		},
		"./src/reddit/components/ReportFlow/_ReportFlow.m.less": function(e, t, o) {
			e.exports = {
				Wrapper: "_2H5HLsAFlxLhy8xTjlHh0u",
				wrapper: "_2H5HLsAFlxLhy8xTjlHh0u",
				CloseWrapper: "_3mwc-yPQ30fuLlSfnIDCcT",
				closeWrapper: "_3mwc-yPQ30fuLlSfnIDCcT",
				Close: "_1HJttuQrGzRmTb0-EeKJFw",
				close: "_1HJttuQrGzRmTb0-EeKJFw"
			}
		},
		"./src/reddit/components/ReportFlow/_ReportFlow.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				s = o.n(r),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				l = o("./src/higherOrderComponents/asModal/index.tsx"),
				c = o("./src/lib/formatPythonString/index.ts"),
				d = o("./src/lib/lessComponent.tsx"),
				u = o("./src/reddit/components/CrisisFlow/async.tsx"),
				p = o("./src/reddit/actions/reportFlow/index.ts"),
				m = o("./src/reddit/components/ContentPolicy/index.tsx"),
				f = o("./src/reddit/layout/row/Inline/index.tsx"),
				_ = o("./src/higherOrderComponents/asTooltip.tsx"),
				h = o("./src/lib/classNames/index.ts"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				g = o("./src/reddit/controls/Dropdown/index.tsx"),
				w = o("./src/reddit/controls/Dropdown/Row.tsx"),
				x = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				v = o("./src/reddit/components/ReportFlow/ReusableComponents/index.m.less"),
				O = o.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = d.a.div("ContentPolicyHolder", O.a),
				E = d.a.div("Header", O.a),
				S = d.a.div("Description", O.a),
				k = d.a.wrapped(b.l, "CloseButton", O.a),
				R = d.a.div("RadioOptionsSectionHeader", O.a),
				I = d.a.wrapped(w.b, "DropdownRow", O.a),
				j = d.a.div("PickerWrapper", O.a),
				T = d.a.div("SelectARuleLabel", O.a),
				L = ({
					className: e,
					isChosen: t,
					...o
				}) => s.a.createElement(T, C({
					className: Object(h.a)(e, {
						[O.a.isChosen]: t
					})
				}, o)),
				P = Object(_.a)(g.a),
				N = d.a.wrapped(P, "Dropdown", O.a),
				F = d.a.wrapped(x.b, "DropdownTriangle", O.a),
				A = d.a.wrapped(w.b, "Row", O.a);
			var D = o("./src/reddit/components/ReportFlow/FileAComplaint/index.m.less"),
				B = o.n(D);
			const U = d.a.div("LinkHolder", B.a),
				M = d.a.a("Link", B.a),
				q = d.a.wrapped(f.a, "footer", B.a);
			var H = e => s.a.createElement("div", null, s.a.createElement(E, null, e.complaintPageTitle), s.a.createElement(S, null, e.complaintPrompt || n.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), s.a.createElement(U, null, s.a.createElement(M, {
					target: "_blank",
					href: e.complaintUrl
				}, e.complaintButtonText)), s.a.createElement(q, null, s.a.createElement(y, null, s.a.createElement(m.a, {
					isLiveStreaming: e.isLiveStreaming,
					subredditOrProfile: e.subredditOrProfile
				})), s.a.createElement(k, {
					onClick: e.onClose
				}, n.fbt._("Close", null, {
					hk: "4gbyAA"
				})))),
				G = o("./src/reddit/actions/userBlocks.ts"),
				K = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				W = o("./src/reddit/icons/svgs/ProfileSlashed/index.tsx"),
				z = o("./src/reddit/components/ReportFlow/FinalPage/index.m.less"),
				Y = o.n(z);
			const V = d.a.wrapped(f.a, "blockUserHolder", Y.a),
				X = d.a.wrapped(W.a, "BlockUserIcon", Y.a),
				Q = d.a.div("BlockUserHeader", Y.a),
				J = d.a.div("OptionHolder", Y.a),
				Z = d.a.div("OptionHeader", Y.a),
				$ = d.a.div("OptionDescription", Y.a),
				ee = d.a.a("Link", Y.a),
				te = d.a.wrapped(f.a, "footer", Y.a),
				oe = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse",
				ne = Object(a.c)({
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
						t.new !== K.a.pending && this.props.onBlockUser(e)
					}, this.getBlockUserHeaderText = () => {
						const {
							authorName: e,
							blockedUser: t,
							blockUserPending: o
						} = this.props;
						return o.new === K.a.pending ? n.fbt._("Pending...", null, {
							hk: "4x1oRk"
						}) : t ? n.fbt._("{username} is blocked", [n.fbt._param("username", e)], {
							hk: "3jnr1Z"
						}) : n.fbt._("Block {username}", [n.fbt._param("username", e)], {
							hk: "ohbdA"
						})
					}, this.renderAbuseOfReportButtonOption = () => s.a.createElement(J, null, s.a.createElement(Z, null, n.fbt._("Turn off free-form reports", null, {
						hk: "2yXM3i"
					})), s.a.createElement($, null, n.fbt._("If you are a moderator, you can {=visit the Help Center} to learn how to modify your subreddit’s reporting settings to disallow users from submitting free-form reports. We also have automated processes in place to prevent excessive reporting.", [n.fbt._param("=visit the Help Center", s.a.createElement(ee, {
						target: "_blank",
						href: oe
					}, n.fbt._("visit the Help Center", null, {
						hk: "1YxsbF"
					})))], {
						hk: "1WnTfk"
					}))), this.renderBlockUserOption = () => {
						const {
							props: e
						} = this, t = this.getBlockUserHeaderText();
						return s.a.createElement(V, {
							onClick: () => this.onBlockAuthor(e.authorName)
						}, s.a.createElement(X, null), s.a.createElement("div", null, s.a.createElement(Q, null, t), s.a.createElement($, null, n.fbt._("You won't see posts or comments from {username}. You can change this later in your preference.", [n.fbt._param("username", e.authorName)], {
							hk: "2iUUlN"
						}))))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement("div", null, s.a.createElement(E, null, n.fbt._("Thanks for letting us know!", null, {
						hk: "ytmSE"
					})), s.a.createElement(S, null, n.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "QxA7E"
					})), e.chosenRule.isAbuseOfReportButton ? this.renderAbuseOfReportButtonOption() : this.renderBlockUserOption(), s.a.createElement(te, null, s.a.createElement(y, null, s.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(k, {
						onClick: e.onClose
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			var se = Object(i.b)(ne, (e, {}) => ({
					onBlockUser: t => {
						e(Object(G.h)(t))
					}
				}))(re),
				ie = o("./src/reddit/components/AccordionSection/index.tsx"),
				ae = o("./src/reddit/actions/tooltip.ts"),
				le = o("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				ce = o("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				de = o("./src/reddit/endpoints/post/index.tsx"),
				ue = o("./src/reddit/selectors/tooltip.ts");
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
						onOpenDropdown: o,
						reason: r,
						rulesSequence: i
					} = t, a = r.nextStepReasons, l = i.length > e ? i[e] : -1, c = a && l >= 0 ? a[l] : null;
					return s.a.createElement(j, {
						onClick: o
					}, s.a.createElement(A, {
						displayText: c ? c.reasonTextToShow : "",
						id: pe
					}), s.a.createElement(F, null), s.a.createElement(L, {
						isChosen: !!c
					}, n.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(N, {
						isFixed: !0,
						isOpen: t.dropdownIsOpen,
						tooltipId: pe
					}, a ? a.map((o, n) => s.a.createElement(I, {
						key: o.reasonTextToShow,
						displayText: o.reasonTextToShow,
						isSelected: l === n,
						onClick: o.nextStepReasons && o.nextStepReasons.length ? () => {
							t.onUpdateRulesSequence(n, e), this.onChosenRuleCleared()
						} : () => {
							t.onUpdateRulesSequence(n, e), this.onRedditRuleChange(o)
						}
					})) : null))
				}
				renderChildrenReasons(e, t, o) {
					const {
						props: n
					} = this, {
						rulesSequence: r
					} = n, i = e.nextStepReasons, a = r && r.length > t ? r[t] : -1, l = r && r.length > t + 1 ? r[t + 1] : -1;
					return i && i.length ? s.a.createElement("div", {
						style: {
							padding: `10px ${10*t}px`,
							display: a === o ? "block" : "none"
						}
					}, s.a.createElement(R, null, e.nextStepHeader), i.map((e, o) => {
						const n = l === o;
						return s.a.createElement("div", {
							key: e.reasonTextToShow
						}, s.a.createElement(ce.a, {
							value: e.reasonText ? e.reasonText : "",
							label: e.reasonTextToShow,
							selected: n,
							onClick: e.nextStepReasons && e.nextStepReasons.length ? () => {
								this.props.onUpdateRulesSequence(o, t + 1), this.onChosenRuleCleared()
							} : () => {
								this.props.onUpdateRulesSequence(o, t + 1), this.onRedditRuleChange(e)
							}
						}), n && e.canWriteNotes && s.a.createElement(le.a, {
							depth: t + 1,
							onCustomTextChange: this.onCustomTextChange,
							title: e.notesInputTitle,
							description: e.notesInputDescription
						}), this.renderChildrenReasons(e, t + 1, o))
					})) : null
				}
				render() {
					const {
						props: e
					} = this, {
						reason: t,
						dropdownIsNeeded: o
					} = e;
					if (o) {
						const {
							rulesSequence: o
						} = e, n = t.nextStepReasons, r = o.length > 1 ? o[1] : -1, i = n && r >= 0 ? n[r] : null;
						return s.a.createElement("div", null, this.renderDropdownMenu(1), i ? this.renderChildrenReasons(i, 1, r) : null)
					}
					return t.nextStepReasons && t.nextStepReasons.length || (t.nextStepHeader = n.fbt._("Select a rule", null, {
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
				he = o("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				be = o("./src/reddit/selectors/subreddit.ts"),
				ge = o("./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less"),
				we = o.n(ge);
			const xe = "ReportFlow--SubredditRules",
				ve = "Custom response",
				Oe = d.a.wrapped(N, "Dropdown", we.a),
				Ce = d.a.wrapped(I, "DropdownRow", we.a),
				ye = d.a.wrapped(he.i, "FreeFormTextArea", we.a),
				Ee = Object(a.c)({
					dropdownIsOpen: Object(ue.b)(xe),
					freeFormReports: be.D
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
					} = this, o = e.chosenRule && e.chosenRule.reasonText && e.subredditRules.includes(e.chosenRule.reasonText) ? e.chosenRule.reasonText : t.dropdownRule ? t.dropdownRule : "";
					return s.a.createElement("div", null, s.a.createElement(j, {
						onClick: e.onOpenDropdown
					}, s.a.createElement(A, {
						displayText: o,
						id: xe
					}), s.a.createElement(F, null), s.a.createElement(L, {
						isChosen: !!o
					}, n.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(Oe, {
						isFixed: !0,
						isOpen: e.dropdownIsOpen,
						tooltipId: xe
					}, e.subredditRules.map((t, o) => s.a.createElement(Ce, {
						key: `${t}-${o}`,
						displayText: t,
						isSelected: !!e.chosenRule && e.chosenRule.reasonText === t,
						onClick: () => {
							e.onChosenRuleChange({
								reasonText: t,
								reasonTextToShow: t
							}, de.a.Rule), this.onChangeDropdownRule(null)
						}
					})), e.freeFormReports ? s.a.createElement(Ce, {
						displayText: n.fbt._("Custom response", null, {
							hk: "1YMpvr"
						}),
						isSelected: t.dropdownRule === ve,
						onClick: () => {
							this.onChangeDropdownRule(ve), this.onChosenRuleCleared()
						}
					}) : null)), t.dropdownRule === ve ? s.a.createElement(ye, {
						placeholder: n.fbt._("Give us some detail about your report", null, {
							hk: "4Cp82U"
						}),
						onChange: this.onFreeFormResponseChange
					}) : null)
				}
			}
			var ke = Object(i.b)(Ee, e => ({
					onOpenDropdown: () => e(Object(ae.h)({
						tooltipId: xe
					}))
				}))(Se),
				Re = o("./src/reddit/models/RulesSequence/index.ts"),
				Ie = o("./src/reddit/models/Subreddit/index.ts"),
				je = o("./src/reddit/components/ReportFlow/FirstPage/index.m.less"),
				Te = o.n(je);
			const Le = d.a.wrapped(b.i, "SubmitButton", Te.a);
			class Pe extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						rulesSequence: new Re.a
					}, this.onUpdateRulesSequence = this.onUpdateRulesSequence.bind(this)
				}
				onUpdateRulesSequence(e, t) {
					const {
						state: o
					} = this;
					o.rulesSequence.update(e, t), this.forceUpdate()
				}
				renderSubredditRulesSection(e) {
					const {
						props: t,
						state: o
					} = this, r = o.rulesSequence.getSequence(), i = t.subredditOrProfile ? t.subredditOrProfile.name : "";
					return s.a.createElement(ie.a, {
						key: "subreddit_rules_section_key",
						title: t.subredditOrProfile && t.subredditOrProfile.type === Ie.f.User ? n.fbt._("It breaks u/{subredditName}'s rules", [n.fbt._param("subredditName", i)], {
							hk: "QcQnb"
						}) : n.fbt._("It breaks r/{subredditName}'s rules", [n.fbt._param("subredditName", i)], {
							hk: "1Qdm9t"
						}),
						open: r.length > 0 && r[0] === e || "community" === t.rulesCategory,
						onOpen: () => this.onUpdateRulesSequence(e, 0)
					}, s.a.createElement(ke, {
						chosenRule: t.chosenRule,
						onChosenRuleChange: t.onChosenRuleChange,
						subredditId: t.subredditOrProfile ? t.subredditOrProfile.id : "",
						subredditRules: t.subredditRules
					}))
				}
				renderRulesSection(e, t) {
					const {
						props: o,
						state: n
					} = this, r = n.rulesSequence.getSequence();
					return s.a.createElement(ie.a, {
						key: e.reasonTextToShow,
						title: e.reasonTextToShow,
						open: r.length > 0 && r[0] === t,
						onOpen: () => this.onUpdateRulesSequence(t, 0)
					}, s.a.createElement(_e, {
						onChosenRuleChange: o.onChosenRuleChange,
						onCustomTextChange: o.onCustomTextChange,
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
					const o = [t[0]].concat([{
						reasonTextToShow: "subredditRulesPlaceholder"
					}]).concat(t.slice(1));
					return s.a.createElement("div", null, s.a.createElement(E, null, n.fbt._("We're sorry something's wrong. How can we help?", null, {
						hk: "3ljmuE"
					})), o.map((e, t) => 1 === t ? this.renderSubredditRulesSection(t) : this.renderRulesSection(e, t)), s.a.createElement(f.a, {
						className: Te.a.Footer
					}, s.a.createElement(y, null, s.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(k, {
						onClick: e.onClose
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					})), s.a.createElement(Le, {
						onClick: e.onSubmit,
						disabled: !e.ruleIsChosen
					}, e.submitButtonText ? e.submitButtonText : n.fbt._("Submit", null, {
						hk: "4aU3dh"
					}))))
				}
			}
			var Ne = Pe,
				Fe = o("./src/reddit/icons/svgs/Close/index.tsx"),
				Ae = o("./src/reddit/components/ReportFlow/Title/index.m.less"),
				De = o.n(Ae);
			const Be = d.a.wrapped(f.a, "Title", De.a),
				Ue = d.a.div("CloseWrapper", De.a),
				Me = d.a.wrapped(Fe.a, "Close", De.a);
			var qe = e => s.a.createElement(Be, null, s.a.createElement("div", null, e.title), s.a.createElement(Ue, {
					onClick: e.onClosePressed
				}, s.a.createElement(Me, null))),
				He = o("./src/reddit/models/Post/index.ts"),
				Ge = o("./src/reddit/models/ReportFlow/index.ts"),
				Ke = o("./src/reddit/selectors/commentSelector.ts"),
				We = o("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				ze = o("./src/reddit/selectors/posts.ts"),
				Ye = o("./src/reddit/components/ReportFlow/_ReportFlow.m.less"),
				Ve = o.n(Ye);
			const Xe = d.a.div("CloseWrapper", Ve.a),
				Qe = d.a.wrapped(Fe.a, "Close", Ve.a),
				Je = Object(a.c)({
					comment: (e, {
						commentId: t
					}) => t ? Object(Ke.a)(e, {
						commentId: t
					}) : null,
					isLiveStreaming: (e, {
						postId: t
					}) => {
						const o = t && e.posts.models[t];
						return !!o && Object(He.o)(o)
					},
					liveStreamingRules: e => e.reportRules.liveStreamingRules,
					rulesCategory: e => e.features.reportFlow.rulesCategory,
					post: (e, {
						postId: t
					}) => t ? Object(ze.I)(e, {
						postId: t
					}) : null,
					reportedPending: e => e.features.reportFlow.api.pending,
					reportedSuccess: e => e.features.reportFlow.api.success,
					sitewideRules: e => e.reportRules.sitewideRules,
					subredditOrProfile: (e, {
						postId: t
					}) => t ? Object(ze.V)(e, {
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
					} = this, o = t.commentId ? Ge.a.Comment : Ge.a.Post, r = t.commentId ? t.reportedPending[t.commentId] : t.postId && t.reportedPending[t.postId], i = t.subredditRules, a = t.subredditOrProfile ? t.subredditOrProfile.id : null, l = new Array;
					if (a && i[a])
						for (const n of i[a].rules) n.kind !== o && n.kind !== Ge.a.All || l.push(0 !== n.violationReason.length ? n.violationReason : n.shortName);
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
						submitButtonText: r ? n.fbt._("Pending", null, {
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
						const o = t.comment ? t.comment.author : "";
						return s.a.createElement(se, {
							authorName: o,
							chosenRule: e.chosenRule,
							onClose: t.onCloseReportFlow,
							subredditOrProfile: t.subredditOrProfile
						})
					}
					if (e.chosenRule && !t.commentId && t.postId && t.reportedSuccess[t.postId]) {
						const o = t.post ? t.post.author : "";
						return s.a.createElement(se, {
							authorName: o,
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
						if (t.commentId ? e = t.comment && t.comment.author : t.postId && (e = t.post && t.post.author), e) return s.a.createElement(r.Fragment, null, s.a.createElement(Xe, {
							onClick: this.handleReportFlowClose
						}, s.a.createElement(Qe, null)), s.a.createElement(u.a, {
							onCloseReportFlow: this.handleReportFlowClose,
							thingId: t.commentId ? t.commentId : t.postId,
							username: e
						}))
					}
					const o = (t.commentId ? Ge.a.Comment : Ge.a.Post) === Ge.a.Post ? n.fbt._("Report post", null, {
						hk: "1OIyCi"
					}) : t.isLiveStreaming ? n.fbt._("Report chat message", null, {
						hk: "2gGA1m"
					}) : n.fbt._("Report comment", null, {
						hk: "Buqls"
					});
					return s.a.createElement(r.Fragment, null, s.a.createElement(qe, {
						onClosePressed: t.onCloseReportFlow,
						title: o
					}), s.a.createElement("div", null, this.getInnerContent()))
				}
				render() {
					return s.a.createElement("div", {
						className: Ve.a.Wrapper
					}, this.getContent())
				}
			}
			const $e = Object(i.b)(Je, (e, {
				timestamp: t
			}) => ({
				onCloseReportFlow: () => {
					e(Object(p.b)())
				},
				onReportPostOrComment: (o, n, r) => {
					e(Object(p.a)({
						id: o,
						reportFlowPayload: n,
						timestamp: t
					}, r))
				}
			}))(Ze);
			t.default = Object(l.a)($e)
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNew.tsx": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "ValidThingReportTypes", (function() {
				return U
			}));
			var n = o("./src/config.ts"),
				r = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/get.js"),
				i = o.n(s),
				a = o("./node_modules/react/index.js"),
				l = o.n(a),
				c = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				u = o("./src/reddit/actions/reportFlow/index.ts"),
				p = o("./src/reddit/actions/toaster.ts"),
				m = o("./src/reddit/components/CrisisFlow/index.tsx"),
				f = o("./src/reddit/components/FormBuilder/async.tsx"),
				_ = o("./src/reddit/actions/userBlocks.ts"),
				h = o("./src/lib/makeGqlRequest/index.ts"),
				b = o("./src/redditGQL/operations/ReportComment.json");
			const g = (e, t) => Object(h.a)(e, {
				...b,
				variables: t
			});
			var w = o("./src/redditGQL/operations/ReportLiveStream.json");
			const x = (e, t) => Object(h.a)(e, {
				...w,
				variables: t
			});
			var v = o("./src/reddit/endpoints/messages/index.ts"),
				O = o("./src/redditGQL/operations/ReportPost.json");
			const C = (e, t) => Object(h.a)(e, {
				...O,
				variables: t
			});
			var y = o("./src/redditGQL/operations/ReportForm.json");
			var E = o("./src/reddit/contexts/ApiContext.tsx"),
				S = o("./src/reddit/models/Post/index.ts"),
				k = o("./src/reddit/models/Toast/index.ts"),
				R = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				I = o("./src/reddit/selectors/commentSelector.ts"),
				j = o("./src/reddit/selectors/meta.ts"),
				T = o("./src/reddit/selectors/posts.ts"),
				L = o("./src/reddit/selectors/user.ts"),
				P = o("./src/lib/lessComponent.tsx"),
				N = o("./src/reddit/components/ReportFlow/index.m.less"),
				F = o.n(N);
			const A = P.a.div("ReportLoaderWrapper", F.a),
				D = P.a.img("LoadingIcon", F.a),
				B = "2.0";
			var U;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(U || (U = {}));
			const M = Object(d.c)({
					post: (e, {
						postId: t
					}) => t ? Object(T.I)(e, {
						postId: t
					}) : null,
					comment: (e, {
						commentId: t
					}) => t ? Object(I.a)(e, {
						commentId: t
					}) : null,
					isLiveStreaming: (e, {
						postId: t
					}) => {
						const o = t && e.posts.models[t];
						return !!o && Object(S.o)(o)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(o => {
						const {
							commentId: n,
							postId: r
						} = t, s = n ? Object(I.a)(e, {
							commentId: n
						}) : null, i = r ? Object(T.I)(e, {
							postId: r
						}) : null;
						(s ? s.author : i ? i.author : null) || t.author;
						o.name
					}),
					isNightmodeOn: L.W,
					locale: j.i
				}),
				q = Object(c.b)(M, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(u.b)())
					},
					onBlockUser: t => {
						e(Object(_.h)(t))
					},
					showFailToast: () => e(Object(p.f)({
						kind: k.b.Error,
						text: r.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					}))
				})),
				H = async (e, t, o, n, r) => {
					var s;
					const i = await ((e, {
						itemId: t,
						formVersion: o,
						hostAppName: n,
						locale: r
					}) => Object(h.a)(e, {
						...y,
						variables: {
							itemId: t,
							hostAppName: n,
							formVersion: o,
							locale: r
						}
					}))(e, {
						itemId: t,
						formVersion: o,
						hostAppName: n,
						locale: r
					});
					if (i && i.ok) {
						const e = null === (s = i.body.data.reportForm) || void 0 === s ? void 0 : s.form;
						return e ? JSON.parse(e) : null
					}
				};
			class G extends l.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: o
						} = this.props;
						let n, r, s;
						if (this.props.author && (s = this.props.author), t) n = t, r = U.Comment, this.props.comment && !s && (s = this.props.comment.author);
						else if (e) n = e, r = U.Post, this.props.post && !s && (s = this.props.post.author);
						else {
							if (!o) throw new Error("Invalid object type passed to reporting flow");
							n = o, r = U.Message
						}
						return {
							itemId: n,
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
								gqlContext: o,
								showFailToast: n,
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
							case U.Post:
								if (s && a) {
									const e = {
										postId: l,
										relativeReportTimeSec: a,
										...m
									};
									f = () => x(o(), {
										input: e
									});
									break
								}
								const e = {
									postId: l,
									...m
								};
								f = () => C(o(), {
									input: e
								});
								break;
							case U.Comment:
								const t = {
									commentId: l,
									...m
								};
								f = () => g(o(), {
									input: t
								});
								break;
							case U.Message:
								const n = {
									messageId: l,
									...m
								};
								f = () => Object(v.a)(o(), {
									input: n
								});
								break;
							default:
								throw new Error("Unsupported item type provided")
						}(await f()).ok || n()
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
						gqlContext: o,
						hostAppName: n
					} = this.props;
					H(o(), e, B, n, t).then(e => {
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
							formState: o,
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
					}) : t && o && i ? l.a.createElement(f.a, {
						formComponent: t,
						formState: o,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: r.fbt._("Submit a Report", null, {
							hk: "2wubLC"
						}),
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(a),
						onResize: this.props.onResize
					}) : l.a.createElement(A, null, l.a.createElement(D, {
						src: e ? `${n.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${n.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			t.default = Object(E.b)(q(G))
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./src/higherOrderComponents/asModal/index.tsx"),
				r = o("./src/reddit/components/ReportFlow/_ReportFlowNew.tsx");
			t.default = Object(n.a)(r.default)
		},
		"./src/reddit/components/ReportFlow/index.m.less": function(e, t, o) {
			e.exports = {
				ReportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				reportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				LoadingIcon: "_2a3vKytEqctI3YbHm0Jt5d",
				loadingIcon: "_2a3vKytEqctI3YbHm0Jt5d"
			}
		},
		"./src/reddit/components/ReportPage/CustomTextInput/index.m.less": function(e, t, o) {
			e.exports = {
				customTextInput: "FGOwr4yXeN3ya-TdhfhA6",
				textAreaCounter: "_2nMs12tSLppI6tzUQbdtpO",
				Component: "DC3SDIBg6rz0oprqLxSAP",
				component: "DC3SDIBg6rz0oprqLxSAP"
			}
		},
		"./src/reddit/components/ReportPage/CustomTextInput/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/lessComponent.tsx"),
				i = o("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				a = o("./src/reddit/helpers/matchRedditUrls/index.ts"),
				l = o("./src/reddit/models/Rule/index.ts"),
				c = o("./src/reddit/components/ReportPage/index.m.less"),
				d = o.n(c),
				u = o("./src/reddit/components/ReportPage/CustomTextInput/index.m.less"),
				p = o.n(u);
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
				const o = l.a,
					n = e.length,
					r = Object(a.a)(e),
					s = r.reduce((e, t) => t ? e + t.url.length : e, 0);
				return {
					displayLength: Math.min(l.a, n - s + 15 * r.length),
					maxLength: Math.min(l.d, o + s - 15 * r.length)
				}
			};
			t.a = s.a.wrapped(f, "Component", p.a)
		},
		"./src/reddit/components/ReportPage/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less": function(e, t, o) {
			e.exports = {
				FormElementTitle: "K64tMxMUJmCTojzEY7drh",
				formElementTitle: "K64tMxMUJmCTojzEY7drh",
				fake: "_3IIxv6iQHvjnKniUvSf8Oc",
				altColor: "_1Asmc3slr39Cm0G09a9de8",
				FormElementDescription: "_3jjsYZKgetVdF2QX1ekvEM",
				formElementDescription: "_3jjsYZKgetVdF2QX1ekvEM"
			}
		},
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = o("./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less"),
				c = o.n(l);
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
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return _
			})), o.d(t, "a", (function() {
				return h
			})), o.d(t, "b", (function() {
				return g
			})), o.d(t, "c", (function() {
				return w
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/controls/Input/index.tsx"),
				l = o("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = o("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				d = o.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = i.a.div("icon", d.a),
				m = i.a.textarea("textarea", d.a),
				f = i.a.span("Invalid", d.a);
			var _, h;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(_ || (_ = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(h || (h = {}));
			const b = e => r.a.createElement("div", {
					className: Object(s.a)(e.isRequired && d.a.required, e.className, {
						[d.a.container]: !e.isTextarea,
						[d.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[d.a.mValid]: e.state === _.Valid,
							[d.a.mInvalid]: e.state === _.Invalid,
							[d.a.mWhiteField]: e.backgroundColorState === h.WhiteFields
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
						className: o,
						inputRef: n,
						isRequired: i,
						label: l,
						onKeyDown: c,
						state: p,
						...m
					} = e;
					return r.a.createElement(b, {
						backgroundColorState: t,
						className: o,
						isRequired: i,
						label: l,
						state: p
					}, r.a.createElement(a.a, u({}, m, {
						className: Object(s.a)(d.a.input, d.a.control, {
							[d.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: c
					})))
				},
				w = e => {
					const {
						backgroundColorState: t,
						className: o,
						inputRef: n,
						isRequired: i,
						label: a,
						onKeyDown: l,
						state: c,
						...p
					} = e;
					return r.a.createElement(b, {
						backgroundColorState: t,
						className: o,
						isRequired: i,
						label: a,
						state: c,
						isTextarea: !0
					}, r.a.createElement(m, u({}, p, {
						className: Object(s.a)({
							[d.a.mWhiteField]: e.backgroundColorState === h.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: l
					})))
				}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less": function(e, t, o) {
			e.exports = {
				RadioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				radioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				ExpandRight: "_1fG2Q7CG6Ngau3siKKxZYP",
				expandRight: "_1fG2Q7CG6Ngau3siKKxZYP"
			}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/lessComponent.tsx"),
				i = o("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				a = o("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				l = o("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				c = o("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = o("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less"),
				u = o.n(d);
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, o) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, o) {
			"use strict";
			o.d(t, "k", (function() {
				return i
			})), o.d(t, "p", (function() {
				return a
			})), o.d(t, "n", (function() {
				return l
			})), o.d(t, "o", (function() {
				return c
			})), o.d(t, "m", (function() {
				return d
			})), o.d(t, "l", (function() {
				return u
			})), o.d(t, "f", (function() {
				return p
			})), o.d(t, "h", (function() {
				return m
			})), o.d(t, "a", (function() {
				return f
			})), o.d(t, "g", (function() {
				return _
			})), o.d(t, "i", (function() {
				return h
			})), o.d(t, "e", (function() {
				return b
			})), o.d(t, "b", (function() {
				return g
			})), o.d(t, "c", (function() {
				return w
			})), o.d(t, "d", (function() {
				return x
			})), o.d(t, "j", (function() {
				return v
			}));
			var n = o("./src/lib/lessComponent.tsx"),
				r = o("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = o.n(r);
			const i = n.a.section("FormPage", s.a),
				a = n.a.h1("HomePageTitle", s.a),
				l = n.a.button("HomePageBreadcrumb", s.a),
				c = n.a.div("HomePageGroup", s.a),
				d = n.a.h1("FormPageTitle", s.a),
				u = n.a.div("FormPageSection", s.a),
				p = n.a.div("FormGroup", s.a),
				m = n.a.h2("FormGroupTitle", s.a),
				f = n.a.div("FormElement", s.a),
				_ = n.a.div("FormGroupDescription", s.a),
				h = n.a.div("FormItem", s.a),
				b = n.a.h3("FormElementTitle", s.a),
				g = n.a.div("FormElementDescription", s.a),
				w = n.a.div("FormElementError", s.a),
				x = n.a.div("FormElementSubGroup", s.a),
				v = n.a.li("FormListItem", s.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, o) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return u
			})), o.d(t, "c", (function() {
				return p
			})), o.d(t, "f", (function() {
				return m
			})), o.d(t, "e", (function() {
				return f
			})), o.d(t, "a", (function() {
				return _
			})), o.d(t, "b", (function() {
				return h
			})), o.d(t, "i", (function() {
				return b
			})), o.d(t, "h", (function() {
				return g
			})), o.d(t, "g", (function() {
				return w
			}));
			var n = o("./src/lib/lessComponent.tsx"),
				r = o("./src/reddit/controls/Input/ModalInput.tsx"),
				s = o("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = o("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				a = o("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = o("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = o("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = o.n(c);
			const u = n.a.wrapped(r.a, "ModalInput", d.a),
				p = n.a.input("Input", d.a),
				m = n.a.wrapped(l.a, "RadioOn", d.a),
				f = n.a.wrapped(a.a, "RadioOff", d.a),
				_ = n.a.wrapped(s.a, "Checkbox", d.a),
				h = n.a.wrapped(i.a, "CheckboxSelected", d.a),
				b = n.a.textarea("Textarea", d.a),
				g = n.a.label("StyledLabel", d.a),
				w = n.a.input("StyledFileInput", d.a)
		},
		"./src/reddit/constants/elementIds.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "d", (function() {
				return s
			})), o.d(t, "b", (function() {
				return i
			}));
			const n = "bladeContainer",
				r = "header",
				s = "overlayScrollContainer",
				i = "collectionPostListScrollContainer"
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, o) {
			"use strict";
			var n, r;
			o.d(t, "a", (function() {
					return n
				})), o.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(n || (n = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(r || (r = {}))
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, o) {
			"use strict";
			var n, r;
			o.d(t, "d", (function() {
					return n
				})), o.d(t, "c", (function() {
					return r
				})), o.d(t, "b", (function() {
					return s
				})), o.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(n || (n = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(r || (r = {}));
			const s = "SHORTCUT_FOCUSABLE_DIV",
				i = [9, 13, 32]
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return n
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "d", (function() {
				return s
			})), o.d(t, "a", (function() {
				return i
			})), o.d(t, "e", (function() {
				return a
			})), o.d(t, "g", (function() {
				return l
			})), o.d(t, "b", (function() {
				return c
			}));
			const n = 4,
				r = 60,
				s = 70,
				i = 90,
				a = 99,
				l = 100,
				c = 100
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			})), o.d(t, "b", (function() {
				return l
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const i = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				a = Object(n.createContext)(i);

			function l(e) {
				const t = t => r.a.createElement(a.Consumer, null, ({
					apiContext: o,
					gqlContext: n
				}) => r.a.createElement(e, s({
					apiContext: o,
					gqlContext: n
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/controls/Button/index.m.less": function(e, t, o) {
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
		"./src/reddit/controls/Button/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return u
			})), o.d(t, "b", (function() {
				return p
			})), o.d(t, "a", (function() {
				return f
			})), o.d(t, "j", (function() {
				return w
			})), o.d(t, "k", (function() {
				return x
			})), o.d(t, "i", (function() {
				return v
			})), o.d(t, "m", (function() {
				return O
			})), o.d(t, "n", (function() {
				return C
			})), o.d(t, "l", (function() {
				return y
			})), o.d(t, "p", (function() {
				return E
			})), o.d(t, "o", (function() {
				return S
			})), o.d(t, "e", (function() {
				return k
			})), o.d(t, "f", (function() {
				return R
			})), o.d(t, "h", (function() {
				return I
			})), o.d(t, "d", (function() {
				return j
			})), o.d(t, "g", (function() {
				return T
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/controls/InternalLink/index.tsx"),
				a = o("./src/reddit/controls/Button/index.m.less"),
				l = o.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
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
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(u || (u = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain"
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
						Icon: o,
						iconClassName: n,
						iconPosition: i = m.C,
						isFullWidth: a = !1,
						isSquare: _ = !1,
						children: w,
						className: x,
						kind: v = f.Button,
						priority: O = p.Primary,
						redditStyle: C,
						size: y = u.S,
						text: E,
						textClassName: S,
						...k
					} = e, R = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: o,
						Icon: n,
						isFullWidth: r,
						isSquare: i,
						priority: a,
						size: c,
						text: d
					}) => Object(s.a)(e, l.a.Button, a && l.a[a], c && l.a[c], {
						[l.a.isFullWidth]: r,
						[l.a.isIconOnly]: !!n && !d,
						[l.a.isSquare]: i,
						[l.a.redditStyle]: !(!t && !o)
					}))({
						baseClassName: x,
						children: w,
						dataRedditStyle: t,
						Icon: o,
						isFullWidth: a,
						isSquare: _,
						priority: O,
						redditStyle: C,
						size: y,
						text: E
					}), I = (({
						children: e,
						text: t,
						Icon: o,
						iconClassName: n,
						iconPosition: i,
						priority: a,
						textClassName: c
					}) => !o && t ? r.a.createElement("span", {
						className: c
					}, t) : r.a.createElement(r.a.Fragment, null, o && (i === m.C || i === m.L) && r.a.createElement(o, {
						className: Object(s.a)(l.a.Icon, n, {
							[l.a.isLeft]: i === m.L
						}),
						isFilled: a === p.Primary
					}), t && r.a.createElement("span", {
						className: Object(s.a)(l.a.Text, c)
					}, t), e && e, o && i === m.R && r.a.createElement(o, {
						className: Object(s.a)(l.a.Icon, n, l.a.isRight),
						isFilled: a === p.Primary
					})))({
						children: w,
						text: E,
						Icon: o,
						iconClassName: n,
						iconPosition: i,
						priority: O,
						textClassName: S
					});
					return v === f.InternalLink && (e => "to" in e)(k) ? r.a.createElement(h, c({}, d, k, {
						className: R
					}), I) : v === f.ExternalLink && (e => "href" in e)(k) ? r.a.createElement(b, c({}, d, k, {
						className: R
					}), I) : r.a.createElement(g, c({}, d, k, {
						className: R
					}), I)
				},
				h = e => r.a.createElement(i.a, e),
				b = e => r.a.createElement("a", e),
				g = e => r.a.createElement("button", e),
				w = e => r.a.createElement(_, c({
					kind: f.ExternalLink,
					priority: p.Primary
				}, e)),
				x = e => r.a.createElement(_, c({
					kind: f.InternalLink,
					priority: p.Primary
				}, e)),
				v = e => r.a.createElement(_, c({
					kind: f.Button,
					priority: p.Primary
				}, e)),
				O = e => r.a.createElement(_, c({
					kind: f.ExternalLink,
					priority: p.Secondary
				}, e)),
				C = e => r.a.createElement(_, c({
					kind: f.InternalLink,
					priority: p.Secondary
				}, e)),
				y = e => r.a.createElement(_, c({
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
				k = ({
					className: e,
					...t
				}) => r.a.createElement(_, c({
					kind: f.Button,
					priority: p.Primary,
					className: Object(s.a)(e, l.a.DangerButtonColors)
				}, t)),
				R = ({
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
				}, t));
			t.q = _
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return b
			}));
			var n = o("./node_modules/lodash/throttle.js"),
				r = o.n(n),
				s = o("./node_modules/react/index.js"),
				i = o.n(s),
				a = o("./src/lib/classNames/index.ts"),
				l = o("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = o("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = o("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = o("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.m.less"),
				m = o.n(p),
				f = o("./src/reddit/controls/Dropdown/row.m.less"),
				_ = o.n(f);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			class b extends i.a.Component {
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
					}, o = Object(a.a)(_.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(l.a, h({}, t, {
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
						className: o
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(_.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, h({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: o
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
				const o = Object(a.a)(_.a.row, e, {
					[_.a.mIsInteractive]: !t.noHover,
					[_.a.mIsSelected]: t.isSelected,
					[_.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(b, h({
					className: o
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/index.m.less": function(e, t, o) {
			e.exports = {
				dropdownTriangle: "_1oxgVV3q47KbjEKqP5CHuM",
				dropdown: "_2uYY-KeuYHKiwl-9aF0UiL"
			}
		},
		"./src/reddit/controls/Dropdown/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/domUtils/index.ts"),
				a = o("./src/reddit/constants/zIndex.ts"),
				l = o("./src/reddit/controls/Dropdown/index.m.less"),
				c = o.n(l);
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
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, o) {
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
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./node_modules/react-redux/es/index.js"),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/constants/keycodes.ts"),
				c = o("./src/reddit/controls/Input/index.m.less"),
				d = o.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
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
						...o
					} = this.props;
					return r.a.createElement("input", u({
						className: Object(i.a)(d.a.input, e),
						onKeyDown: this.handleKeyDown
					}, o))
				}
			}
			t.a = Object(s.b)(null, {
				closeModal: a.f
			})(p)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, o) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/lessComponent.tsx"),
				r = o("./src/reddit/controls/Input/index.m.less"),
				s = o.n(r);
			t.a = n.a.input("input", s.a)
		},
		"./src/reddit/controls/InternalLink/index.m.less": function(e, t, o) {
			e.exports = {
				disabledLink: "_1tQt2CUWT3M7NNSMoh_o_4"
			}
		},
		"./src/reddit/controls/InternalLink/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return u
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/helpers/path/index.ts"),
				l = o("./src/reddit/controls/InternalLink/index.m.less"),
				c = o.n(l);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}

			function u({
				children: e,
				className: t,
				disabled: o,
				replace: n,
				to: l,
				...u
			}) {
				return o ? r.a.createElement("span", {
					className: Object(i.a)(c.a.disabledLink, t)
				}, e) : ("string" == typeof l && (l = Object(a.b)(l)), r.a.createElement(s.a, d({
					className: t,
					to: l
				}, u), e))
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, o) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/constants/keycodes.ts"),
				a = o("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = o("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = o("./src/reddit/layout/row/Inline/index.tsx"),
				d = o("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = o.n(d);
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
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, o) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/lessComponent.tsx"),
				r = o("./src/reddit/controls/InternalLink/index.tsx"),
				s = o("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = o.n(s);
			t.a = n.a.wrapped(r.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			})), o.d(t, "c", (function() {
				return d
			})), o.d(t, "e", (function() {
				return u
			})), o.d(t, "d", (function() {
				return p
			})), o.d(t, "b", (function() {
				return m
			}));
			var n = o("./src/config.ts"),
				r = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/makeApiRequest/index.ts"),
				i = o("./src/lib/omitHeaders/index.ts"),
				a = o("./src/reddit/constants/headers.ts"),
				l = o("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const c = async (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: r.hb.POST
			}), d = async (e, t, o) => Object(s.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: o,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: r.hb.POST
			}), u = async (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: r.hb.POST
			}), p = async (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: r.hb.POST
			}), m = async (e, t) => Object(s.a)(Object(i.a)(e, [a.a]), {
				endpoint: Object(l.a)(`${n.a.oauthUrl}/user/${t}/about`),
				method: r.hb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/helpers/getTimeSortForListing/index.ts": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/listingSort/index.ts");
			t.a = (e, t) => {
				if (e) return Object(r.a)(e) ? t || n.dc : void 0
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
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
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/reddit/helpers/parseUrl.ts");
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
				return (e.match(new RegExp(n.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(a).some((function(o) {
						return t = function(e, t) {
							const o = a[e];
							if (!a) throw new Error("Could not find reddit URL spec: " + e);
							const r = Object(n.a)(t);
							if (!r) return void console.error("Could not parse url", t);
							if (-1 === (o.hostnames || s).indexOf(r.hostname)) return;
							const i = r.pathname.match(o.pathname);
							if (i) {
								return {
									url: t,
									routeName: e,
									components: o.pathnameComponents.reduce((function(e, t, o) {
										return e[t] = i[o + 1], e
									}), {})
								}
							}
						}(o, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return s
			})), o.d(t, "a", (function() {
				return i
			})), o.d(t, "d", (function() {
				return a
			})), o.d(t, "c", (function() {
				return l
			}));
			var n = o("./src/reddit/constants/elementIds.ts");
			let r;
			const s = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(n.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				i = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, r || (r = a(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${r}px`;
					const t = document.getElementById(n.c);
					t && (t.style.marginRight = `${r}px`)
				},
				a = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				l = e => {
					if (!e || !document.body) return 0;
					const t = a(document.body),
						o = e.offsetWidth - e.scrollWidth;
					return t || o
				}
		},
		"./src/reddit/helpers/trackers/blade.ts": function(e, t, o) {
			"use strict";
			o.d(t, "i", (function() {
				return i
			})), o.d(t, "h", (function() {
				return a
			})), o.d(t, "f", (function() {
				return l
			})), o.d(t, "g", (function() {
				return c
			})), o.d(t, "c", (function() {
				return d
			})), o.d(t, "d", (function() {
				return u
			})), o.d(t, "j", (function() {
				return m
			})), o.d(t, "b", (function() {
				return f
			})), o.d(t, "a", (function() {
				return _
			})), o.d(t, "e", (function() {
				return b
			})), o.d(t, "k", (function() {
				return g
			}));
			var n = o("./src/reddit/constants/blade.ts"),
				r = o("./src/reddit/selectors/telemetry.ts");
			const s = (e, t) => o => ({
					...r.defaults(o),
					source: n.d.Appearance,
					action: "click",
					noun: e,
					actionInfo: r.actionInfo(o, {
						paneName: t
					}),
					subreddit: r.subreddit(o)
				}),
				i = e => s("save_style", e),
				a = e => s("cancel_style", e),
				l = e => t => ({
					source: n.d.Structure,
					action: "click",
					noun: e,
					screen: r.screen(t),
					subreddit: r.subreddit(t)
				}),
				c = e => t => ({
					source: n.d.Appearance,
					action: "click",
					noun: e,
					screen: r.screen(t),
					subreddit: r.subreddit(t)
				}),
				d = (e, t) => o => ({
					source: "colorpicker",
					action: "click",
					noun: e,
					actionInfo: r.actionInfo(o, {
						paneName: n.g[t]
					}),
					screen: r.screen(o),
					subreddit: r.subreddit(o)
				}),
				u = e => t => ({
					source: n.h[e],
					action: "click",
					noun: "colorpicker",
					actionInfo: r.actionInfo(t, {
						paneName: n.g[e]
					}),
					screen: r.screen(t),
					subreddit: r.subreddit(t)
				}),
				p = e => ({
					screen: r.screen(e),
					subreddit: r.subreddit(e)
				}),
				m = () => e => ({
					source: n.d.Appearance,
					action: "view",
					noun: "blade",
					...p(e)
				}),
				f = e => t => ({
					source: n.a[e],
					action: "click",
					noun: n.b[e],
					...p(t)
				}),
				_ = () => e => ({
					source: n.d.Appearance,
					action: "click",
					noun: "back",
					...p(e)
				}),
				h = e => t => ({
					source: n.d.PostFlairManagement,
					action: "click",
					noun: e,
					...p(t)
				}),
				b = (e, t) => ({
					...r.defaults(e),
					...h(t)(e)
				}),
				g = e => t => ({
					source: n.d.MenuLinks,
					action: "click",
					noun: e ? "wiki_link_on" : "wiki_link_off",
					screen: r.screen(t),
					subreddit: r.subreddit(t),
					userSubreddit: r.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, o) {
			"use strict";
			o.d(t, "z", (function() {
				return i
			})), o.d(t, "r", (function() {
				return a
			})), o.d(t, "t", (function() {
				return l
			})), o.d(t, "A", (function() {
				return d
			})), o.d(t, "j", (function() {
				return u
			})), o.d(t, "n", (function() {
				return p
			})), o.d(t, "m", (function() {
				return m
			})), o.d(t, "c", (function() {
				return f
			})), o.d(t, "b", (function() {
				return _
			})), o.d(t, "e", (function() {
				return h
			})), o.d(t, "u", (function() {
				return b
			})), o.d(t, "x", (function() {
				return g
			})), o.d(t, "v", (function() {
				return w
			})), o.d(t, "h", (function() {
				return x
			})), o.d(t, "g", (function() {
				return v
			})), o.d(t, "i", (function() {
				return O
			})), o.d(t, "q", (function() {
				return C
			})), o.d(t, "o", (function() {
				return y
			})), o.d(t, "p", (function() {
				return E
			})), o.d(t, "f", (function() {
				return S
			})), o.d(t, "w", (function() {
				return k
			})), o.d(t, "k", (function() {
				return R
			})), o.d(t, "a", (function() {
				return I
			})), o.d(t, "s", (function() {
				return j
			})), o.d(t, "d", (function() {
				return T
			})), o.d(t, "l", (function() {
				return L
			})), o.d(t, "y", (function() {
				return P
			}));
			var n = o("./src/reddit/helpers/correlationIdTracker.ts"),
				r = o("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, o) => ({
					...r.defaults(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1),
					profile: r.profile(e),
					subreddit: r.subreddit(e),
					powerups: {
						...r.subredditPowerups(e),
						freeCount: t,
						paidCount: o
					}
				}),
				i = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...s(t),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				a = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersup_become_hero",
					...s(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				l = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersups_see_all_heroes",
					...s(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				c = e => (t, o) => n => ({
					source: e,
					action: "click",
					noun: "powerup_supporter",
					...s(n),
					profile: {
						id: t,
						name: o,
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
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				m = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...s(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				f = () => e => ({
					source: "powerups_community_feed",
					action: "view",
					noun: "powerups_mod_enable_banner",
					...s(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1)
				}),
				_ = () => e => ({
					source: "powerups_community_feed",
					action: "click",
					noun: "powerups_mod_enable_banner",
					...s(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1)
				}),
				h = e => t => ({
					source: "powerups",
					action: "click",
					noun: "join_supporters",
					...s(t),
					actionInfo: r.actionInfo(t, {
						reason: e
					})
				}),
				b = () => e => ({
					source: "powerups",
					action: "click",
					noun: "premium",
					...s(e)
				}),
				g = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_supporter_achievement",
					...s(e)
				}),
				w = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_achievements",
					...s(e)
				}),
				x = e => t => ({
					source: "powerups_modal",
					action: "view",
					noun: "marketing_step",
					...s(t),
					actionInfo: r.actionInfo(t, {
						reason: e
					})
				}),
				v = e => t => ({
					source: "powerups",
					action: "click",
					noun: "benefit",
					...s(t),
					powerups: {
						...r.subredditPowerups(t),
						benefit: e
					}
				}),
				O = (e, t) => o => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...s(o, e, t)
				}),
				C = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...s(e),
					actionInfo: r.actionInfo(e, {
						pageType: "powerups_premium_upsell"
					})
				}),
				y = () => e => ({
					source: "powerups_premium_upsell",
					action: "click",
					noun: "powerups_price",
					...s(e)
				}),
				E = e => t => ({
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
				S = (e, t) => o => ({
					source: "global",
					action: "view",
					noun: "screen",
					...s(o, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				k = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...s(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				R = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...s(e)
				}),
				I = (e, t) => o => ({
					source: t,
					action: "click",
					noun: "add_custom_emojis",
					...s(o),
					powerups: {
						...r.subredditPowerups(o),
						emojiCount: e
					}
				}),
				j = (e, t) => o => ({
					source: t,
					action: "save",
					noun: "custom_emojis",
					...s(o),
					powerups: {
						...r.subredditPowerups(o),
						emojiCount: e
					}
				}),
				T = (e = 1, t) => o => ({
					source: t,
					action: "delete",
					noun: "custom_emojis",
					...s(o),
					powerups: {
						...r.subredditPowerups(o),
						emojiCount: e
					}
				}),
				L = (e, t) => o => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? r.subredditById(o, t) : void 0,
					...s(o),
					correlationId: e
				}),
				P = (e, t, o) => n => ({
					source: "powerups_settings",
					action: "click",
					noun: e,
					setting: {
						value: String(t),
						oldValue: String(o)
					},
					subreddit: r.subreddit(n),
					...r.defaults(n)
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(s.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/helpers.m.less": function(e, t, o) {
			e.exports = {
				TooltipDesc: "_37iEJpUpWXN00_fpZKHglg",
				tooltipDesc: "_37iEJpUpWXN00_fpZKHglg"
			}
		},
		"./src/reddit/icons/fonts/helpers.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return c
			})), o.d(t, "a", (function() {
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/reddit/icons/fonts/helpers.m.less"),
				i = o.n(s),
				a = o("./src/lib/constants/icons.ts"),
				l = o("./src/lib/lessComponent.tsx");
			const c = (e, t) => `icon icon-${e}${t&&!e.includes("fill")&&a.a[`${e}_fill`]?"_fill":""}`,
				d = l.a.wrapped(e => r.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", i.a)
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, o) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				a = o.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
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
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);
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
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);
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
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
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
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, o) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = o.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...o
			}) => r.a.createElement("svg", l({
				className: Object(s.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.m.less": function(e, t, o) {
			e.exports = {
				icon: "_1d7BoD7egpRq9JmZVmVXkB"
			}
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/ProfileSlashed/index.m.less"),
				a = o.n(i);
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
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, o) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = o.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
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
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
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
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, o) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/lessComponent.tsx"),
				r = o("./src/reddit/layout/row/InlineButton/index.m.less"),
				s = o.n(r);
			t.a = n.a.button("inlineButton", s.a)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, o) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				l = o.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(s.a)(e => {
				const {
					className: t,
					children: o,
					heightLeft: n,
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
						height: n,
						marginRight: a
					}
				}, Array.isArray(o) && o[0]), r.a.createElement("div", {
					className: l.a.right
				}, Array.isArray(o) && o[1]))
			}, 2)
		},
		"./src/reddit/models/ApiRequestState/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return i
			}));
			var n, r = o("./node_modules/uuid/v4.js"),
				s = o.n(r);
			! function(e) {
				e[e.Pending = 0] = "Pending", e[e.Complete = 1] = "Complete", e[e.Failed = 2] = "Failed"
			}(n || (n = {}));
			const i = () => s()()
		},
		"./src/reddit/models/ReportFlow/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return r
			})), o.d(t, "c", (function() {
				return i
			}));
			var n, r, s;
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(n || (n = {})),
			function(e) {
				e.HARASSMENT_AT_ME = "HARASSMENT_AT_ME", e.HARASSMENT_AT_SOMEONE_ELSE = "HARASSSOMEONE_ELSENT_AT_ME", e.VIOLENCE_AT_ME = "VIOLENCE_AT_ME", e.VIOLENCE_AT_SOMEONE_ELSE = "VIOLENCE_AT_SOMEONE_ELSE", e.HATE_CONTENT = "HATE_CONTENT", e.MINOR_SEXUALIZATION = "HARASSMENT_AT_ME", e.PII_ABOUT_ME = "PII_ABOUT_ME", e.PII_ABOUT_SOMEONE_ELSE = "PII_ABOUT_SOMEONE_ELSE", e.INVOLUNTARY_PORN_SELF = "INVOLUNTARY_PORN_SELF", e.INVOLUNTARY_PORN_OTHER = "INVOLUNTARY_PORN_OTHER", e.PROHIBITED_SALES = "PROHIBITED_SALES", e.REPORT_BUTTON_ABUSE = "REPORT_BUTTON_ABUSE", e.IMPERSONATION_SELF = "IMPERSONATION_SELF", e.IMPERSONATION_OTHER = "IMPERSONATION_OTHER", e.COPYRIGHT_SELF = "COPYRIGHT_SELF", e.COPYRIGHT_OTHER = "COPYRIGHT_OTHER", e.TRADEMARK_SELF = "TRADEMARK_SELF", e.TRADEMARK_OTHER = "TRADEMARK_OTHER", e.NETZDG = "NETZDG", e.SELF_HARM = "SELF_HARM", e.SPAM_LINK_FARMING = "SPAM_LINK_FARMING", e.SPAM_UNSOLICITED_PMS = "SPAM_UNSOLICITED_PMS", e.SPAM_COMMENT_FLOODING = "SPAM_COMMENT_FLOODING", e.SPAM_MALWARE = "SPAM_MALWARE", e.SPAM_BOTS = "SPAM_BOTS", e.MISINFORMATION_HEALTH = "MISINFORMATION_HEALTH", e.MISINFORMATION_POLITICS = "MISINFORMATION_POLITICS", e.MISINFORMATION_FABRICATION = "MISINFORMATION_FABRICATION", e.MISINFORMATION_CONSPIRACY = "MISINFORMATION_CONSPIRACY", e.BAN_EVASION = "BAN_EVASION", e.VOTE_MANIPULATION = "VOTE_MANIPULATION"
			}(r || (r = {})),
			function(e) {
				e.R2 = "R2", e.MWEB = "MWEB", e.D2X = "D2X"
			}(s || (s = {}));
			const i = new Set(Object.values(s))
		},
		"./src/reddit/models/WhitelistAndBlocked.ts": function(e, t, o) {
			"use strict";
			var n;
			o.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return r
			})), o.d(t, "a", (function() {
				return s
			})), o.d(t, "d", (function() {
				return i
			})), o.d(t, "c", (function() {
				return a
			}));
			var n = o("./src/reddit/selectors/user.ts");
			const r = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				i = (e, t) => {
					const o = (e => {
						const t = s(e);
						return t && t.ids
					})(e);
					return !!o && o.includes(t)
				},
				a = (e, t) => {
					const o = Object(n.nb)(e, {
						userName: t
					});
					return !!o && i(e, o.id)
				}
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			})), o.d(t, "b", (function() {
				return a
			}));
			var n = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				s = o("./src/reddit/selectors/user.ts");
			const i = e => n.c.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: s.J,
					experimentName: n.i
				}),
				a = e => n.e.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: s.J,
					experimentName: n.l
				})
		},
		"./src/reddit/selectors/experiments/topPosts.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return c
			})), o.d(t, "a", (function() {
				return d
			})), o.d(t, "b", (function() {
				return u
			})), o.d(t, "c", (function() {
				return p
			}));
			var n = o("./node_modules/reselect/es/index.js"),
				r = o("./src/reddit/constants/experiments.ts"),
				s = o("./src/reddit/contexts/PageLayer/index.tsx"),
				i = o("./src/reddit/helpers/chooseVariant/index.ts"),
				a = o("./src/reddit/selectors/user.ts");
			const l = Object(n.a)(a.J, (e, {
					pageLayer: t
				}) => Object(s.z)(t), (e, {
					pageLayer: t
				}) => Object(s.M)(t), (e, t, o) => !e && !t && o),
				c = Object(n.a)((e, t) => Object(i.c)(e, {
					experimentName: r.zb,
					experimentEligibilitySelector: e => l(e, t)
				}), e => e),
				d = e => e === r.Yd.NoCommunityWidgets,
				u = e => e === r.Yd.NoRulesModerators,
				p = e => e === r.Yd.RelatedPostsDu
		},
		"./src/reddit/selectors/tooltip.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return r
			}));
			const n = e => e.tooltipId,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlow.4d3f91469fabf3321eea.js.map