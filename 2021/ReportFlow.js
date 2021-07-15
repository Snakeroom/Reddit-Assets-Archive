// https://www.redditstatic.com/desktop2x/ReportFlow.28c7a1175eff4f61424a.js
// Retrieved at 7/15/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlow", "ReportFlowNew"], {
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
				return f
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/FocusTrap/index.ts"),
				l = o("./src/reddit/actions/shortcuts/utils.ts"),
				a = o("./src/reddit/components/Portal/index.tsx"),
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
			const _ = ({
				className: e,
				isVisible: t,
				...o
			}) => r.a.createElement("div", m({
				className: Object(s.a)(p.a.overlay, e, {
					[p.a.mIsVisible]: t
				})
			}, o));

			function f(e) {
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
						}), Object(d.b)(), Object(l.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: o,
							ignoreDefaultFocus: n,
							onOverlayClick: i,
							overlayClassName: l,
							overlayCustomStyles: d,
							withOverlay: u,
							...m
						} = t, f = m;
						return r.a.createElement(a.a, {
							container: document.getElementById(c.b)
						}, r.a.createElement(_, {
							className: l,
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
						}, r.a.createElement(e, f))))
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
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
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
				return _
			})), o.d(t, "g", (function() {
				return x
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
			var l = o("./src/reddit/selectors/blockedRedditors.ts");
			const a = "BLOCKED_REDDITORS_LIST__ADD",
				c = "BLOCKED_REDDITORS_LIST__REMOVE",
				d = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(n.a)(a),
				_ = Object(n.a)(c),
				f = Object(n.a)(d),
				h = Object(n.a)(u),
				b = Object(n.a)(p),
				x = () => async (e, t, {
					gqlContext: o
				}) => {
					const n = t(),
						r = Object(l.a)(n);
					if (Object(l.b)(n) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let s = !1,
						a = "";
					do {
						e(b());
						const t = {
								after: a,
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
									s = e, a = t || ""
								}
							} else s = !1
						} else {
							s = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(f({
								message: t
							}))
						}
					} while (s)
				}
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
				return l
			})), o.d(t, "b", (function() {
				return a
			})), o.d(t, "g", (function() {
				return c
			}));
			const n = "REPORT__PENDING",
				r = "REPORT__LOADED",
				s = "REPORT__FAILED",
				i = "REPORT_FLOW__TARGET_SET",
				l = "REPORT_FLOW__OPENED_FROM_MODAL_PAGE",
				a = "REPORT_FLOW__OPEN_CATEGORY",
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
			const r = Object(n.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				s = Object(n.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(n.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/reportFlow/reportFlow.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "postOrCommentReported", (function() {
				return M
			})), o.d(t, "reportFlowTargetSet", (function() {
				return B
			})), o.d(t, "reportFlowOpenedFromModalPage", (function() {
				return D
			})), o.d(t, "reportFlowOpenCategory", (function() {
				return U
			})), o.d(t, "reportFlowOpened", (function() {
				return H
			})), o.d(t, "reportFlowClosed", (function() {
				return W
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/login.ts"),
				i = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/actions/reportRules.ts"),
				a = o("./src/reddit/actions/subreddit.ts"),
				c = o("./src/reddit/actions/toaster.ts"),
				d = o("./src/reddit/actions/users.ts"),
				u = o("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"),
				p = o("./src/reddit/endpoints/post/index.tsx"),
				m = o("./src/reddit/helpers/isComment.ts"),
				_ = o("./src/reddit/helpers/isPost.ts"),
				f = o("./src/reddit/models/Post/index.ts"),
				h = o("./src/reddit/models/Toast/index.ts"),
				b = o("./src/reddit/selectors/posts.ts"),
				x = o("./src/reddit/selectors/user.ts"),
				w = o("./src/lib/initializeClient/installReducer.ts"),
				g = o("./node_modules/redux/es/redux.js"),
				v = o("./src/reddit/actions/reportFlow/constants.ts");
			const C = {};
			var O = (e = C, t) => {
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
			const R = {};
			var y = (e = R, t) => {
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
			const E = {};
			var S = (e = E, t) => {
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
				k = Object(g.c)({
					error: O,
					pending: y,
					success: S
				}),
				I = o("./src/reddit/actions/platform.ts");
			var T = (e = !1, t) => {
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
			var N = (e = null, t) => {
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
			var j = (e = !1, t) => {
				switch (t.type) {
					case v.g:
						return t.payload;
					case v.f:
						return !1;
					default:
						return e
				}
			};
			var F = Object(g.c)({
				api: k,
				openedFromModalPage: T,
				postOrCommentId: N,
				userIsMod: j,
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
					reportFlow: F
				}
			});
			const L = Object(r.a)(v.e),
				P = Object(r.a)(v.d),
				A = Object(r.a)(v.c),
				M = (e, t) => async (o, r, {
					apiContext: s
				}) => {
					const i = e.id,
						l = r(),
						a = l.features.reportFlow.api.pending[i],
						d = l.features.reportFlow.userIsMod;
					if (a) return;
					o(L({
						id: i
					}));
					const u = await Object(p.n)(s(), e),
						m = `error-report-${i}`;
					if (u.ok) o(P({
						id: i
					})), o(c.g(m)), !t.isAbuseOfReportButton && d && o(W());
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
							buttonAction: M(e, t)
						}))
					}
				}, B = Object(r.a)(v.f), D = Object(r.a)(v.a), U = Object(r.a)(v.b), H = (e, t, o) => async (n, r, {
					apiContext: c
				}) => {
					const u = r(),
						p = Object(m.a)(e),
						h = Object(_.a)(e);
					if (!h && !p) return;
					const w = p ? u.features.comments.models[e] : u.posts.models[e];
					if (!w) return;
					if (!Object(x.J)(r())) return n(Object(s.j)()), void n(Object(i.k)({
						actionSource: i.a.Report,
						redirectUrl: w.permalink
					}));
					n(Object(d.y)(w.author));
					const g = Object(b.R)(u, {
							postId: p ? u.features.comments.models[e].postId : u.posts.models[e].id
						}),
						v = h && Object(f.o)(w) || p && G(w, u);
					v || u.reportRules.sitewideRules && u.reportRules.sitewideRules.length || n(Object(l.d)()), !v || u.reportRules.liveStreamingRules && u.reportRules.liveStreamingRules.length || n(Object(l.c)()), g && n(Object(a.o)(g.name, g.type)), n(B(e)), n(D(!!t)), o && n(U(o)), g && n(K(g.name))
				}, q = Object(r.a)(v.g), K = e => async (t, o, {
					apiContext: n
				}) => {
					const r = await Object(u.a)(n());
					t(q(r.ok && !!r.body[e]))
				}, W = () => async (e, t, {
					apiContext: o
				}) => {
					e(B(null))
				}, G = (e, t) => {
					const o = e.postId,
						n = o && t.posts.models[o];
					return !!n && Object(f.o)(n)
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
				return _
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/lib/constants/index.ts"),
				i = o("./src/lib/makeApiRequest/index.ts"),
				l = o("./src/lib/omitHeaders/index.ts"),
				a = o("./src/reddit/constants/headers.ts");
			const c = "SITEWIDE_RULES_LOADED",
				d = "LIVESTREAMING_RULES_LOADED",
				u = Object(r.a)(c),
				p = Object(r.a)(d),
				m = () => async (e, t, {
					apiContext: o
				}) => {
					if (!t().user) return;
					const n = await (e => Object(i.a)(Object(l.a)(e, [a.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: s.hb.GET
					}))(o());
					if (n.ok) {
						const t = n.body,
							o = f(t.sitewide_rules);
						e(u(o))
					}
				}, _ = () => async (e, t, {
					apiContext: o
				}) => {
					if (!t().user) return;
					const n = await (e => Object(i.a)(Object(l.a)(e, [a.a]), {
						endpoint: `${e.apiUrl}/api/livestream_rules.json`,
						method: s.hb.GET
					}))(o());
					if (n.ok) {
						const t = n.body,
							o = f(t.livestream_rules);
						e(p(o))
					}
				}, f = e => {
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
				return l
			})), o.d(t, "b", (function() {
				return a
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
				l = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				a = e => {
					const t = document.getElementById(e),
						o = window.scrollX,
						n = window.scrollY;
					t && (t.focus(), window.scrollTo(o, n))
				},
				c = () => {
					a(n.b)
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
				return x
			})), o.d(t, "a", (function() {
				return w
			})), o.d(t, "g", (function() {
				return O
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/blockedRedditors.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				l = o("./src/reddit/endpoints/accounts/index.ts"),
				a = o("./src/reddit/models/Toast/index.ts"),
				c = o("./src/reddit/selectors/user.ts");
			const d = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				m = Object(r.a)(d),
				_ = Object(r.a)(u),
				f = Object(r.a)(p),
				h = e => async (t, o, {
					apiContext: r
				}) => {
					if (o().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const c = await Object(l.a)(r(), e),
						d = `error-block-${e}`;
					if (c.ok) c.body.name && t(_(c.body)), c.body.id && t(Object(s.f)(c.body.id)), t(i.g(d)), t(i.f({
						kind: a.b.SuccessCommunity,
						text: n.fbt._("{username} is now blocked", [n.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const o = {
							type: c.error ? c.error.type : "Unknown error",
							username: e
						};
						t(f(o)), t(i.f({
							id: d,
							kind: a.b.Error,
							text: n.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: h(e)
						}))
					}
				}, b = "USER_UNBLOCK__PENDING", x = "USER_UNBLOCK__SUCCESS", w = "USER_UNBLOCK__FAILED", g = Object(r.a)(b), v = Object(r.a)(x), C = Object(r.a)(w), O = e => async (t, o, {
					apiContext: r
				}) => {
					const d = o(),
						u = Object(c.j)(d),
						p = u ? u.id : void 0,
						m = d.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(g({
						name: e
					})), (await Object(l.c)(r(), p, e)).ok ? (t(v({
						name: e
					})), m && m.id && t(Object(s.h)(m.id)), t(i.f({
						kind: a.b.SuccessCommunity,
						text: n.fbt._("{username} is now unblocked", [n.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.f({
						kind: a.b.Error,
						text: n.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(C({
						name: e
					}))))
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
				l = o("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				a = o("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
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
			const _ = p.a.div("Section", d.a),
				f = p.a.wrapped(a.a, "ChevronUp", d.a),
				h = p.a.wrapped(l.a, "ChevronDown", d.a),
				b = p.a.wrapped(({
					className: e,
					isOpen: t,
					...o
				}) => r.a.createElement("div", m({
					className: Object(u.a)(e, {
						[d.a.mIsOpen]: t
					})
				}, o)), "ArticleWrap", d.a),
				x = p.a.wrapped(({
					className: e,
					isOpen: t,
					...o
				}) => r.a.createElement("div", m({
					className: Object(u.a)(e, {
						[d.a.mIsOpen]: t
					})
				}, o)), "SectionHead", d.a),
				w = p.a.div("Article", d.a);
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return r.a.createElement("div", null, r.a.createElement(_, null, this.props.open ? r.a.createElement(f, null) : r.a.createElement(h, null), r.a.createElement(x, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), r.a.createElement(b, {
						isOpen: this.props.open
					}, this.props.open ? r.a.createElement(w, null, this.props.children) : null)))
				}
			}
			t.a = Object(s.b)(null, e => ({
				onSwitchSection: () => e(Object(i.i)())
			}))(g)
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
				l = o("./src/reddit/components/ContentPolicy/index.m.less"),
				a = o.n(l);
			const {
				fbt: c
			} = o("./node_modules/fbt/lib/FbtPublic.js"), d = i.a.div("Content", a.a), u = i.a.a("Link", a.a);
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
				l = o("./node_modules/reselect/es/index.js"),
				a = o("./src/higherOrderComponents/asModal/index.tsx"),
				c = o("./src/lib/formatPythonString/index.ts"),
				d = o("./src/lib/lessComponent.tsx"),
				u = o("./src/reddit/components/CrisisFlow/async.tsx"),
				p = o("./src/reddit/actions/reportFlow/index.ts"),
				m = o("./src/reddit/components/ContentPolicy/index.tsx"),
				_ = o("./src/reddit/layout/row/Inline/index.tsx"),
				f = o("./src/higherOrderComponents/asTooltip.tsx"),
				h = o("./src/lib/classNames/index.ts"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				x = o("./src/reddit/controls/Dropdown/index.tsx"),
				w = o("./src/reddit/controls/Dropdown/Row.tsx"),
				g = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				v = o("./src/reddit/components/ReportFlow/ReusableComponents/index.m.less"),
				C = o.n(v);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const R = d.a.div("ContentPolicyHolder", C.a),
				y = d.a.div("Header", C.a),
				E = d.a.div("Description", C.a),
				S = d.a.wrapped(b.l, "CloseButton", C.a),
				k = d.a.div("RadioOptionsSectionHeader", C.a),
				I = d.a.wrapped(w.b, "DropdownRow", C.a),
				T = d.a.div("PickerWrapper", C.a),
				N = d.a.div("SelectARuleLabel", C.a),
				j = ({
					className: e,
					isChosen: t,
					...o
				}) => s.a.createElement(N, O({
					className: Object(h.a)(e, {
						[C.a.isChosen]: t
					})
				}, o)),
				F = Object(f.a)(x.a),
				L = d.a.wrapped(F, "Dropdown", C.a),
				P = d.a.wrapped(g.b, "DropdownTriangle", C.a),
				A = d.a.wrapped(w.b, "Row", C.a);
			var M = o("./src/reddit/components/ReportFlow/FileAComplaint/index.m.less"),
				B = o.n(M);
			const D = d.a.div("LinkHolder", B.a),
				U = d.a.a("Link", B.a),
				H = d.a.wrapped(_.a, "footer", B.a);
			var q = e => s.a.createElement("div", null, s.a.createElement(y, null, e.complaintPageTitle), s.a.createElement(E, null, e.complaintPrompt || n.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), s.a.createElement(D, null, s.a.createElement(U, {
					target: "_blank",
					href: e.complaintUrl
				}, e.complaintButtonText)), s.a.createElement(H, null, s.a.createElement(R, null, s.a.createElement(m.a, {
					isLiveStreaming: e.isLiveStreaming,
					subredditOrProfile: e.subredditOrProfile
				})), s.a.createElement(S, {
					onClick: e.onClose
				}, n.fbt._("Close", null, {
					hk: "4gbyAA"
				})))),
				K = o("./src/reddit/actions/userBlocks.ts"),
				W = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				G = o("./src/reddit/icons/svgs/ProfileSlashed/index.tsx"),
				z = o("./src/reddit/components/ReportFlow/FinalPage/index.m.less"),
				X = o.n(z);
			const V = d.a.wrapped(_.a, "blockUserHolder", X.a),
				J = d.a.wrapped(G.a, "BlockUserIcon", X.a),
				Y = d.a.div("BlockUserHeader", X.a),
				Q = d.a.div("OptionHolder", X.a),
				Z = d.a.div("OptionHeader", X.a),
				$ = d.a.div("OptionDescription", X.a),
				ee = d.a.a("Link", X.a),
				te = d.a.wrapped(_.a, "footer", X.a),
				oe = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse",
				ne = Object(l.c)({
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
						t.new !== W.a.pending && this.props.onBlockUser(e)
					}, this.getBlockUserHeaderText = () => {
						const {
							authorName: e,
							blockedUser: t,
							blockUserPending: o
						} = this.props;
						return o.new === W.a.pending ? n.fbt._("Pending...", null, {
							hk: "4x1oRk"
						}) : t ? n.fbt._("{username} is blocked", [n.fbt._param("username", e)], {
							hk: "3jnr1Z"
						}) : n.fbt._("Block {username}", [n.fbt._param("username", e)], {
							hk: "ohbdA"
						})
					}, this.renderAbuseOfReportButtonOption = () => s.a.createElement(Q, null, s.a.createElement(Z, null, n.fbt._("Turn off free-form reports", null, {
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
						}, s.a.createElement(J, null), s.a.createElement("div", null, s.a.createElement(Y, null, t), s.a.createElement($, null, n.fbt._("You won't see posts or comments from {username}. You can change this later in your preference.", [n.fbt._param("username", e.authorName)], {
							hk: "2iUUlN"
						}))))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement("div", null, s.a.createElement(y, null, n.fbt._("Thanks for letting us know!", null, {
						hk: "ytmSE"
					})), s.a.createElement(E, null, n.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "QxA7E"
					})), e.chosenRule.isAbuseOfReportButton ? this.renderAbuseOfReportButtonOption() : this.renderBlockUserOption(), s.a.createElement(te, null, s.a.createElement(R, null, s.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(S, {
						onClick: e.onClose
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			var se = Object(i.b)(ne, (e, {}) => ({
					onBlockUser: t => {
						e(Object(K.h)(t))
					}
				}))(re),
				ie = o("./src/reddit/components/AccordionSection/index.tsx"),
				le = o("./src/reddit/actions/tooltip.ts"),
				ae = o("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				ce = o("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				de = o("./src/reddit/endpoints/post/index.tsx"),
				ue = o("./src/reddit/selectors/tooltip.ts");
			const pe = "ReportFlow--RedditRules",
				me = Object(l.c)({
					dropdownIsOpen: Object(ue.b)(pe)
				});
			class _e extends s.a.Component {
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
					} = t, l = r.nextStepReasons, a = i.length > e ? i[e] : -1, c = l && a >= 0 ? l[a] : null;
					return s.a.createElement(T, {
						onClick: o
					}, s.a.createElement(A, {
						displayText: c ? c.reasonTextToShow : "",
						id: pe
					}), s.a.createElement(P, null), s.a.createElement(j, {
						isChosen: !!c
					}, n.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(L, {
						isFixed: !0,
						isOpen: t.dropdownIsOpen,
						tooltipId: pe
					}, l ? l.map((o, n) => s.a.createElement(I, {
						key: o.reasonTextToShow,
						displayText: o.reasonTextToShow,
						isSelected: a === n,
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
					} = n, i = e.nextStepReasons, l = r && r.length > t ? r[t] : -1, a = r && r.length > t + 1 ? r[t + 1] : -1;
					return i && i.length ? s.a.createElement("div", {
						style: {
							padding: `10px ${10*t}px`,
							display: l === o ? "block" : "none"
						}
					}, s.a.createElement(k, null, e.nextStepHeader), i.map((e, o) => {
						const n = a === o;
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
						}), n && e.canWriteNotes && s.a.createElement(ae.a, {
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
			var fe = Object(i.b)(me, e => ({
					onOpenDropdown: () => e(Object(le.h)({
						tooltipId: pe
					}))
				}))(_e),
				he = o("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				be = o("./src/reddit/selectors/subreddit.ts"),
				xe = o("./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less"),
				we = o.n(xe);
			const ge = "ReportFlow--SubredditRules",
				ve = "Custom response",
				Ce = d.a.wrapped(L, "Dropdown", we.a),
				Oe = d.a.wrapped(I, "DropdownRow", we.a),
				Re = d.a.wrapped(he.i, "FreeFormTextArea", we.a),
				ye = Object(l.c)({
					dropdownIsOpen: Object(ue.b)(ge),
					freeFormReports: be.C
				});
			class Ee extends s.a.Component {
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
					return s.a.createElement("div", null, s.a.createElement(T, {
						onClick: e.onOpenDropdown
					}, s.a.createElement(A, {
						displayText: o,
						id: ge
					}), s.a.createElement(P, null), s.a.createElement(j, {
						isChosen: !!o
					}, n.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(Ce, {
						isFixed: !0,
						isOpen: e.dropdownIsOpen,
						tooltipId: ge
					}, e.subredditRules.map((t, o) => s.a.createElement(Oe, {
						key: `${t}-${o}`,
						displayText: t,
						isSelected: !!e.chosenRule && e.chosenRule.reasonText === t,
						onClick: () => {
							e.onChosenRuleChange({
								reasonText: t,
								reasonTextToShow: t
							}, de.a.Rule), this.onChangeDropdownRule(null)
						}
					})), e.freeFormReports ? s.a.createElement(Oe, {
						displayText: n.fbt._("Custom response", null, {
							hk: "1YMpvr"
						}),
						isSelected: t.dropdownRule === ve,
						onClick: () => {
							this.onChangeDropdownRule(ve), this.onChosenRuleCleared()
						}
					}) : null)), t.dropdownRule === ve ? s.a.createElement(Re, {
						placeholder: n.fbt._("Give us some detail about your report", null, {
							hk: "4Cp82U"
						}),
						onChange: this.onFreeFormResponseChange
					}) : null)
				}
			}
			var Se = Object(i.b)(ye, e => ({
					onOpenDropdown: () => e(Object(le.h)({
						tooltipId: ge
					}))
				}))(Ee),
				ke = o("./src/reddit/models/RulesSequence/index.ts"),
				Ie = o("./src/reddit/models/Subreddit/index.ts"),
				Te = o("./src/reddit/components/ReportFlow/FirstPage/index.m.less"),
				Ne = o.n(Te);
			const je = d.a.wrapped(b.i, "SubmitButton", Ne.a);
			class Fe extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						rulesSequence: new ke.a
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
					}, s.a.createElement(Se, {
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
					}, s.a.createElement(fe, {
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
					return s.a.createElement("div", null, s.a.createElement(y, null, n.fbt._("We're sorry something's wrong. How can we help?", null, {
						hk: "3ljmuE"
					})), o.map((e, t) => 1 === t ? this.renderSubredditRulesSection(t) : this.renderRulesSection(e, t)), s.a.createElement(_.a, {
						className: Ne.a.Footer
					}, s.a.createElement(R, null, s.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(S, {
						onClick: e.onClose
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					})), s.a.createElement(je, {
						onClick: e.onSubmit,
						disabled: !e.ruleIsChosen
					}, e.submitButtonText ? e.submitButtonText : n.fbt._("Submit", null, {
						hk: "3Z7VqM"
					}))))
				}
			}
			var Le = Fe,
				Pe = o("./src/reddit/icons/svgs/Close/index.tsx"),
				Ae = o("./src/reddit/components/ReportFlow/Title/index.m.less"),
				Me = o.n(Ae);
			const Be = d.a.wrapped(_.a, "Title", Me.a),
				De = d.a.div("CloseWrapper", Me.a),
				Ue = d.a.wrapped(Pe.a, "Close", Me.a);
			var He = e => s.a.createElement(Be, null, s.a.createElement("div", null, e.title), s.a.createElement(De, {
					onClick: e.onClosePressed
				}, s.a.createElement(Ue, null))),
				qe = o("./src/reddit/models/Post/index.ts"),
				Ke = o("./src/reddit/models/ReportFlow/index.ts"),
				We = o("./src/reddit/selectors/commentSelector.ts"),
				Ge = o("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				ze = o("./src/reddit/selectors/posts.ts"),
				Xe = o("./src/reddit/components/ReportFlow/_ReportFlow.m.less"),
				Ve = o.n(Xe);
			const Je = d.a.div("CloseWrapper", Ve.a),
				Ye = d.a.wrapped(Pe.a, "Close", Ve.a),
				Qe = Object(l.c)({
					comment: (e, {
						commentId: t
					}) => t ? Object(We.a)(e, {
						commentId: t
					}) : null,
					isLiveStreaming: (e, {
						postId: t
					}) => {
						const o = t && e.posts.models[t];
						return !!o && Object(qe.o)(o)
					},
					liveStreamingRules: e => e.reportRules.liveStreamingRules,
					rulesCategory: e => e.features.reportFlow.rulesCategory,
					post: (e, {
						postId: t
					}) => t ? Object(ze.F)(e, {
						postId: t
					}) : null,
					reportedPending: e => e.features.reportFlow.api.pending,
					reportedSuccess: e => e.features.reportFlow.api.success,
					sitewideRules: e => e.reportRules.sitewideRules,
					subredditOrProfile: (e, {
						postId: t
					}) => t ? Object(ze.R)(e, {
						postId: t
					}) : null,
					subredditRules: e => e.subreddits.rules,
					userIsMod: e => e.features.reportFlow.userIsMod,
					crisisFlowEnabled: Ge.a
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
					} = this, o = t.commentId ? Ke.a.Comment : Ke.a.Post, r = t.commentId ? t.reportedPending[t.commentId] : t.postId && t.reportedPending[t.postId], i = t.subredditRules, l = t.subredditOrProfile ? t.subredditOrProfile.id : null, a = new Array;
					if (l && i[l])
						for (const n of i[l].rules) n.kind !== o && n.kind !== Ke.a.All || a.push(0 !== n.violationReason.length ? n.violationReason : n.shortName);
					const c = this.props.isLiveStreaming ? t.liveStreamingRules : t.sitewideRules;
					return s.a.createElement(Le, {
						isLiveStreaming: t.isLiveStreaming,
						onSubmit: this.onSubmit,
						onClose: t.onCloseReportFlow,
						subredditRules: a,
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
					if (e.chosenRule && e.chosenRule.fileComplaint && e.showFileAComplaintPage) return s.a.createElement(q, {
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
						if (t.commentId ? e = t.comment && t.comment.author : t.postId && (e = t.post && t.post.author), e) return s.a.createElement(r.Fragment, null, s.a.createElement(Je, {
							onClick: this.handleReportFlowClose
						}, s.a.createElement(Ye, null)), s.a.createElement(u.a, {
							onCloseReportFlow: this.handleReportFlowClose,
							thingId: t.commentId ? t.commentId : t.postId,
							username: e
						}))
					}
					const o = (t.commentId ? Ke.a.Comment : Ke.a.Post) === Ke.a.Post ? n.fbt._("Report post", null, {
						hk: "1OIyCi"
					}) : t.isLiveStreaming ? n.fbt._("Report chat message", null, {
						hk: "2gGA1m"
					}) : n.fbt._("Report comment", null, {
						hk: "Buqls"
					});
					return s.a.createElement(r.Fragment, null, s.a.createElement(He, {
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
			const $e = Object(i.b)(Qe, (e, {
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
			t.default = Object(a.a)($e)
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNew.tsx": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "ValidThingReportTypes", (function() {
				return D
			}));
			var n = o("./src/config.ts"),
				r = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/get.js"),
				i = o.n(s),
				l = o("./node_modules/react/index.js"),
				a = o.n(l),
				c = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				u = o("./src/reddit/actions/reportFlow/index.ts"),
				p = o("./src/reddit/actions/toaster.ts"),
				m = o("./src/reddit/components/CrisisFlow/index.tsx"),
				_ = o("./src/reddit/components/FormBuilder/async.tsx"),
				f = o("./src/reddit/actions/userBlocks.ts"),
				h = o("./src/lib/makeGqlRequest/index.ts"),
				b = o("./src/redditGQL/operations/ReportComment.json");
			const x = (e, t) => Object(h.a)(e, {
				...b,
				variables: t
			});
			var w = o("./src/redditGQL/operations/ReportLiveStream.json");
			const g = (e, t) => Object(h.a)(e, {
				...w,
				variables: t
			});
			var v = o("./src/reddit/endpoints/messages/index.ts"),
				C = o("./src/redditGQL/operations/ReportPost.json");
			const O = (e, t) => Object(h.a)(e, {
				...C,
				variables: t
			});
			var R = o("./src/redditGQL/operations/ReportForm.json");
			var y = o("./src/reddit/contexts/ApiContext.tsx"),
				E = o("./src/reddit/models/Post/index.ts"),
				S = o("./src/reddit/models/Toast/index.ts"),
				k = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				I = o("./src/reddit/selectors/commentSelector.ts"),
				T = o("./src/reddit/selectors/meta.ts"),
				N = o("./src/reddit/selectors/posts.ts"),
				j = o("./src/reddit/selectors/user.ts"),
				F = o("./src/lib/lessComponent.tsx"),
				L = o("./src/reddit/components/ReportFlow/index.m.less"),
				P = o.n(L);
			const A = F.a.div("ReportLoaderWrapper", P.a),
				M = F.a.img("LoadingIcon", P.a),
				B = "2.0";
			var D;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(D || (D = {}));
			const U = Object(d.c)({
					post: (e, {
						postId: t
					}) => t ? Object(N.F)(e, {
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
						return !!o && Object(E.o)(o)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(o => {
						const {
							commentId: n,
							postId: r
						} = t, s = n ? Object(I.a)(e, {
							commentId: n
						}) : null, i = r ? Object(N.F)(e, {
							postId: r
						}) : null;
						(s ? s.author : i ? i.author : null) || t.author;
						o.name
					}),
					isNightmodeOn: j.V,
					locale: T.i
				}),
				H = Object(c.b)(U, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(u.b)())
					},
					onBlockUser: t => {
						e(Object(f.h)(t))
					},
					showFailToast: () => e(Object(p.f)({
						kind: S.b.Error,
						text: r.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					}))
				})),
				q = async (e, t, o, n, r) => {
					var s;
					const i = await ((e, {
						itemId: t,
						formVersion: o,
						hostAppName: n,
						locale: r
					}) => Object(h.a)(e, {
						...R,
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
			class K extends a.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: o
						} = this.props;
						let n, r, s;
						if (this.props.author && (s = this.props.author), t) n = t, r = D.Comment, this.props.comment && !s && (s = this.props.comment.author);
						else if (e) n = e, r = D.Post, this.props.post && !s && (s = this.props.post.author);
						else {
							if (!o) throw new Error("Invalid object type passed to reporting flow");
							n = o, r = D.Message
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
						t.new !== k.a.pending && this.props.onBlockUser(e)
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
								timestamp: l
							}
						} = this, {
							itemId: a,
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
						let _;
						switch (c) {
							case D.Post:
								if (s && l) {
									const e = {
										postId: a,
										relativeReportTimeSec: l,
										...m
									};
									_ = () => g(o(), {
										input: e
									});
									break
								}
								const e = {
									postId: a,
									...m
								};
								_ = () => O(o(), {
									input: e
								});
								break;
							case D.Comment:
								const t = {
									commentId: a,
									...m
								};
								_ = () => x(o(), {
									input: t
								});
								break;
							case D.Message:
								const n = {
									messageId: a,
									...m
								};
								_ = () => Object(v.a)(o(), {
									input: n
								});
								break;
							default:
								throw new Error("Unsupported item type provided")
						}(await _()).ok || n()
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
					q(o(), e, B, n, t).then(e => {
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
						itemAuthor: l
					} = this.getItemMetadata();
					return s && l ? a.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						fromUserProfile: !0,
						username: l,
						onCloseCrisisModal: this.handleReportFlowClose
					}) : t && o && i ? a.a.createElement(_.a, {
						formComponent: t,
						formState: o,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: r.fbt._("Submit a Report", null, {
							hk: "2wubLC"
						}),
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(l),
						onResize: this.props.onResize
					}) : a.a.createElement(A, null, a.a.createElement(M, {
						src: e ? `${n.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${n.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			t.default = Object(y.b)(H(K))
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
				l = o("./src/reddit/helpers/matchRedditUrls/index.ts"),
				a = o("./src/reddit/models/Rule/index.ts"),
				c = o("./src/reddit/components/ReportPage/index.m.less"),
				d = o.n(c),
				u = o("./src/reddit/components/ReportPage/CustomTextInput/index.m.less"),
				p = o.n(u);
			const m = s.a.header("InputDescription", d.a);
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						customText: "",
						maxLength: a.d,
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
					}, `${t.displayLength}/${a.a}`))))
				}
			}
			const f = e => {
				const t = {
					displayLength: 0,
					maxLength: a.d
				};
				if (!e) return t;
				const o = a.a,
					n = e.length,
					r = Object(l.a)(e),
					s = r.reduce((e, t) => t ? e + t.url.length : e, 0);
				return {
					displayLength: Math.min(a.a, n - s + 15 * r.length),
					maxLength: Math.min(a.d, o + s - 15 * r.length)
				}
			};
			t.a = s.a.wrapped(_, "Component", p.a)
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
				l = o("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				a = o("./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less"),
				c = o.n(a);
			const d = i.a.wrapped(l.e, "FormElementTitle", c.a),
				u = i.a.wrapped(l.b, "FormElementDescription", c.a);
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
				return f
			})), o.d(t, "a", (function() {
				return h
			})), o.d(t, "b", (function() {
				return x
			})), o.d(t, "c", (function() {
				return w
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				l = o("./src/reddit/controls/Input/index.tsx"),
				a = o("./src/reddit/icons/svgs/Checkmark/index.tsx"),
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
				_ = i.a.span("Invalid", d.a);
			var f, h;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(f || (f = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(h || (h = {}));
			const b = e => r.a.createElement("div", {
					className: Object(s.a)(e.isRequired && d.a.required, e.className, {
						[d.a.container]: !e.isTextarea,
						[d.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[d.a.mValid]: e.state === f.Valid,
							[d.a.mInvalid]: e.state === f.Invalid,
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
						[d.a.mValid]: e.state === f.Valid,
						[d.a.mInvalid]: e.state === f.Invalid
					})
				}, e.state === f.Valid && r.a.createElement(a.a, null), e.state === f.Invalid && r.a.createElement(_, null, "!")))),
				x = e => {
					const {
						backgroundColorState: t,
						className: o,
						inputRef: n,
						isRequired: i,
						label: a,
						onKeyDown: c,
						state: p,
						...m
					} = e;
					return r.a.createElement(b, {
						backgroundColorState: t,
						className: o,
						isRequired: i,
						label: a,
						state: p
					}, r.a.createElement(l.a, u({}, m, {
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
						label: l,
						onKeyDown: a,
						state: c,
						...p
					} = e;
					return r.a.createElement(b, {
						backgroundColorState: t,
						className: o,
						isRequired: i,
						label: l,
						state: c,
						isTextarea: !0
					}, r.a.createElement(m, u({}, p, {
						className: Object(s.a)({
							[d.a.mWhiteField]: e.backgroundColorState === h.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: a
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
				l = o("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				a = o("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				c = o("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = o("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less"),
				u = o.n(d);
			const p = s.a.wrapped(a.a, "RadioOption", u.a),
				m = s.a.wrapped(c.a, "ExpandRight", u.a);
			t.a = e => r.a.createElement(p, {
				value: e.value,
				selected: e.selected,
				onClick: e.onClick
			}, r.a.createElement(m, {
				heightLeft: 16,
				widthLeft: 16
			}, e.selected ? r.a.createElement(l.f, null) : r.a.createElement(l.e, null), r.a.createElement(i.a, {
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
				return l
			})), o.d(t, "n", (function() {
				return a
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
				return _
			})), o.d(t, "g", (function() {
				return f
			})), o.d(t, "i", (function() {
				return h
			})), o.d(t, "e", (function() {
				return b
			})), o.d(t, "b", (function() {
				return x
			})), o.d(t, "c", (function() {
				return w
			})), o.d(t, "d", (function() {
				return g
			})), o.d(t, "j", (function() {
				return v
			}));
			var n = o("./src/lib/lessComponent.tsx"),
				r = o("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = o.n(r);
			const i = n.a.section("FormPage", s.a),
				l = n.a.h1("HomePageTitle", s.a),
				a = n.a.button("HomePageBreadcrumb", s.a),
				c = n.a.div("HomePageGroup", s.a),
				d = n.a.h1("FormPageTitle", s.a),
				u = n.a.div("FormPageSection", s.a),
				p = n.a.div("FormGroup", s.a),
				m = n.a.h2("FormGroupTitle", s.a),
				_ = n.a.div("FormElement", s.a),
				f = n.a.div("FormGroupDescription", s.a),
				h = n.a.div("FormItem", s.a),
				b = n.a.h3("FormElementTitle", s.a),
				x = n.a.div("FormElementDescription", s.a),
				w = n.a.div("FormElementError", s.a),
				g = n.a.div("FormElementSubGroup", s.a),
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
				return _
			})), o.d(t, "a", (function() {
				return f
			})), o.d(t, "b", (function() {
				return h
			})), o.d(t, "i", (function() {
				return b
			})), o.d(t, "h", (function() {
				return x
			})), o.d(t, "g", (function() {
				return w
			}));
			var n = o("./src/lib/lessComponent.tsx"),
				r = o("./src/reddit/controls/Input/ModalInput.tsx"),
				s = o("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = o("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = o("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				a = o("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = o("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = o.n(c);
			const u = n.a.wrapped(r.a, "ModalInput", d.a),
				p = n.a.input("Input", d.a),
				m = n.a.wrapped(a.a, "RadioOn", d.a),
				_ = n.a.wrapped(l.a, "RadioOff", d.a),
				f = n.a.wrapped(s.a, "Checkbox", d.a),
				h = n.a.wrapped(i.a, "CheckboxSelected", d.a),
				b = n.a.textarea("Textarea", d.a),
				x = n.a.label("StyledLabel", d.a),
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
			o.d(t, "g", (function() {
				return n
			})), o.d(t, "e", (function() {
				return r
			})), o.d(t, "c", (function() {
				return s
			})), o.d(t, "d", (function() {
				return i
			})), o.d(t, "a", (function() {
				return l
			})), o.d(t, "f", (function() {
				return a
			})), o.d(t, "h", (function() {
				return c
			})), o.d(t, "b", (function() {
				return d
			}));
			const n = 4,
				r = 51,
				s = 60,
				i = 70,
				l = 90,
				a = 99,
				c = 100,
				d = 100
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			})), o.d(t, "b", (function() {
				return a
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
				l = Object(n.createContext)(i);

			function a(e) {
				const t = t => r.a.createElement(l.Consumer, null, ({
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
				chatButton: "_13twe55MPRo1LqypxB-LJx"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return u
			})), o.d(t, "b", (function() {
				return p
			})), o.d(t, "a", (function() {
				return _
			})), o.d(t, "j", (function() {
				return w
			})), o.d(t, "k", (function() {
				return g
			})), o.d(t, "i", (function() {
				return v
			})), o.d(t, "m", (function() {
				return C
			})), o.d(t, "n", (function() {
				return O
			})), o.d(t, "l", (function() {
				return R
			})), o.d(t, "p", (function() {
				return y
			})), o.d(t, "o", (function() {
				return E
			})), o.d(t, "e", (function() {
				return S
			})), o.d(t, "f", (function() {
				return k
			})), o.d(t, "h", (function() {
				return I
			})), o.d(t, "d", (function() {
				return T
			})), o.d(t, "g", (function() {
				return N
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				s = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/controls/InternalLink/index.tsx"),
				l = o("./src/reddit/controls/Button/index.m.less"),
				a = o.n(l);

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
			var u, p, m, _;
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
			}(_ || (_ = {}));
			const f = e => {
					const {
						"data-redditstyle": t,
						Icon: o,
						iconPosition: n = m.C,
						isFullWidth: i = !1,
						isSquare: l = !1,
						children: f,
						className: w,
						kind: g = _.Button,
						priority: v = p.Primary,
						redditStyle: C,
						size: O = u.S,
						text: R,
						...y
					} = e, E = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: o,
						Icon: n,
						isFullWidth: r,
						isSquare: i,
						priority: l,
						size: c,
						text: d
					}) => Object(s.a)(e, a.a.Button, l && a.a[l], c && a.a[c], {
						[a.a.isFullWidth]: r,
						[a.a.isIconOnly]: !!n && !d,
						[a.a.isSquare]: i,
						[a.a.redditStyle]: !(!t && !o)
					}))({
						baseClassName: w,
						children: f,
						dataRedditStyle: t,
						Icon: o,
						isFullWidth: i,
						isSquare: l,
						priority: v,
						redditStyle: C,
						size: O,
						text: R
					}), S = (({
						children: e,
						text: t,
						Icon: o,
						iconPosition: n,
						priority: i
					}) => !o && t ? r.a.createElement("span", null, t) : r.a.createElement(r.a.Fragment, null, o && (n === m.C || n === m.L) && r.a.createElement(o, {
						className: Object(s.a)(a.a.Icon, {
							[a.a.isLeft]: n === m.L
						}),
						isFilled: i === p.Primary
					}), t && r.a.createElement("span", {
						className: a.a.Text
					}, t), e && e, o && n === m.R && r.a.createElement(o, {
						className: Object(s.a)(a.a.Icon, a.a.isRight),
						isFilled: i === p.Primary
					})))({
						children: f,
						text: R,
						Icon: o,
						iconPosition: n,
						priority: v
					});
					return g === _.InternalLink && (e => "to" in e)(y) ? r.a.createElement(h, c({}, d, y, {
						className: E
					}), S) : g === _.ExternalLink && (e => "href" in e)(y) ? r.a.createElement(b, c({}, d, y, {
						className: E
					}), S) : r.a.createElement(x, c({}, d, y, {
						className: E
					}), S)
				},
				h = e => r.a.createElement(i.a, e),
				b = e => r.a.createElement("a", e),
				x = e => r.a.createElement("button", e),
				w = e => r.a.createElement(f, c({
					kind: _.ExternalLink,
					priority: p.Primary
				}, e)),
				g = e => r.a.createElement(f, c({
					kind: _.InternalLink,
					priority: p.Primary
				}, e)),
				v = e => r.a.createElement(f, c({
					kind: _.Button,
					priority: p.Primary
				}, e)),
				C = e => r.a.createElement(f, c({
					kind: _.ExternalLink,
					priority: p.Secondary
				}, e)),
				O = e => r.a.createElement(f, c({
					kind: _.InternalLink,
					priority: p.Secondary
				}, e)),
				R = e => r.a.createElement(f, c({
					kind: _.Button,
					priority: p.Secondary
				}, e)),
				y = e => r.a.createElement(f, c({
					kind: _.InternalLink,
					priority: p.Plain
				}, e)),
				E = e => r.a.createElement(f, c({
					kind: _.Button,
					priority: p.Plain
				}, e)),
				S = ({
					className: e,
					...t
				}) => r.a.createElement(f, c({
					kind: _.Button,
					priority: p.Primary,
					className: Object(s.a)(e, a.a.DangerButtonColors)
				}, t)),
				k = ({
					className: e,
					...t
				}) => r.a.createElement(f, c({
					kind: _.Button,
					className: Object(s.a)(e, a.a.GoldButtonColors)
				}, t)),
				I = ({
					className: e,
					...t
				}) => r.a.createElement(f, c({
					kind: _.Button,
					className: Object(s.a)(e, a.a.PremiumButtonColors)
				}, t)),
				T = ({
					className: e,
					...t
				}) => r.a.createElement(f, c({
					kind: _.Button,
					className: Object(s.a)(e, a.a.ChatButton)
				}, t)),
				N = ({
					className: e,
					...t
				}) => r.a.createElement(f, c({
					kind: _.Button,
					className: Object(s.a)(e, a.a.InlineTextButton)
				}, t));
			t.q = f
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
				l = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = o("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = o("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = o("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.m.less"),
				m = o.n(p),
				_ = o("./src/reddit/controls/Dropdown/row.m.less"),
				f = o.n(_);

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
					}, o = Object(l.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(a.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: o
					}, e.children), i.a.createElement("span", {
						className: Object(l.a)(f.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: o
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(l.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(d.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: m.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const o = Object(l.a)(f.a.row, e, {
					[f.a.mIsInteractive]: !t.noHover,
					[f.a.mIsSelected]: t.isSelected,
					[f.a.topics]: t.isTopicsStyle
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
				l = o("./src/reddit/constants/zIndex.ts"),
				a = o("./src/reddit/controls/Dropdown/index.m.less"),
				c = o.n(a);
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
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? l.d + 1 : l.c)), r.a.createElement("div", {
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
				l = o("./src/reddit/actions/modal.ts"),
				a = o("./src/reddit/constants/keycodes.ts"),
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
						e === a.a.Escape && this.props.closeModal()
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
				closeModal: l.f
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
				l = o("./src/reddit/helpers/path/index.ts"),
				a = o("./src/reddit/controls/InternalLink/index.m.less"),
				c = o.n(a);

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
				to: a,
				...u
			}) {
				return o ? r.a.createElement("span", {
					className: Object(i.a)(c.a.disabledLink, t)
				}, e) : ("string" == typeof a && (a = Object(l.b)(a)), r.a.createElement(s.a, d({
					className: t,
					to: a
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
				l = o("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				a = o("./src/reddit/icons/svgs/RadioOn/index.tsx"),
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
					}, e.showButton && (e.selected ? r.a.createElement(a.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : r.a.createElement(l.a, {
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
				l = o("./src/reddit/constants/headers.ts"),
				a = o("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const c = async (e, t) => Object(s.a)(Object(i.a)(e, [l.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: r.hb.POST
			}), d = async (e, t, o) => Object(s.a)(Object(i.a)(e, [l.a]), {
				data: {
					name: o,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: r.hb.POST
			}), u = async (e, t) => Object(s.a)(Object(i.a)(e, [l.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: r.hb.POST
			}), p = async (e, t) => Object(s.a)(Object(i.a)(e, [l.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: r.hb.POST
			}), m = async (e, t) => Object(s.a)(Object(i.a)(e, [l.a]), {
				endpoint: Object(a.a)(`${n.a.oauthUrl}/user/${t}/about`),
				method: r.hb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeApiRequest/index.ts"),
				s = o("./src/lib/omitHeaders/index.ts"),
				i = o("./src/reddit/constants/headers.ts");
			t.a = async e => Object(r.a)(Object(s.a)(e, [i.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: n.hb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
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

			function a(e) {
				return (e.match(new RegExp(n.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(l).some((function(o) {
						return t = function(e, t) {
							const o = l[e];
							if (!l) throw new Error("Could not find reddit URL spec: " + e);
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
				return l
			})), o.d(t, "c", (function() {
				return a
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
					document.body.dataset.previousOverflow = e, r || (r = l(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${r}px`;
					const t = document.getElementById(n.c);
					t && (t.style.marginRight = `${r}px`)
				},
				l = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				a = e => {
					if (!e || !document.body) return 0;
					const t = l(document.body),
						o = e.offsetWidth - e.scrollWidth;
					return t || o
				}
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
				l = o("./src/lib/constants/icons.ts"),
				a = o("./src/lib/lessComponent.tsx");
			const c = (e, t) => `icon icon-${e}${t&&!e.includes("fill")&&l.a[`${e}_fill`]?"_fill":""}`,
				d = a.a.wrapped(e => r.a.createElement("span", {
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
				l = o.n(i);

			function a() {
				return (a = Object.assign || function(e) {
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
			}) => r.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(s.a)(l.a.checkbox, e)
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
				l = o.n(i);

			function a() {
				return (a = Object.assign || function(e) {
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
			}) => r.a.createElement("svg", a({
				className: Object(s.a)(l.a.dropdown, {
					[l.a.mRedditStyle]: !t
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
				l = o.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(l.a.icon, e.className),
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
				l = o.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({}, e, {
				className: Object(s.a)(l.a.icon, e.className),
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
				l = o("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				a = o.n(l);

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
					gutter: l,
					...d
				} = e;
				return r.a.createElement("div", c({
					className: Object(i.a)(a.a.expandRightContainer, t)
				}, d), r.a.createElement("div", {
					className: a.a.left,
					style: {
						flexBasis: s,
						height: n,
						marginRight: l
					}
				}, Array.isArray(o) && o[0]), r.a.createElement("div", {
					className: a.a.right
				}, Array.isArray(o) && o[1]))
			}, 2)
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
				e.R2 = "R2"
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
				return l
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
				l = (e, t) => {
					const o = Object(n.mb)(e, {
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
				return l
			}));
			var n = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				s = o("./src/reddit/selectors/user.ts");
			const i = e => n.b.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: s.J,
					experimentName: n.g
				}),
				l = e => n.d.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: s.J,
					experimentName: n.j
				})
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlow.28c7a1175eff4f61424a.js.map