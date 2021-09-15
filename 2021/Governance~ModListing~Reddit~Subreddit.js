// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.988a0f0dea3256ffccc3.js
// Retrieved at 9/15/2021, 10:40:21 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~ModListing~Reddit~Subreddit"], {
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var o = r("./node_modules/react/index.js"),
				n = r.n(o),
				i = r("./src/lib/CSSVariableProvider/index.tsx");

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const t = t => n.a.createElement(i.b.Consumer, null, r => n.a.createElement(e, s({
					theme: r
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
		},
		"./src/lib/assertNever.ts": function(e, t, r) {
			"use strict";

			function o(e) {
				throw new Error(`Unexpected object: ${e}`)
			}
			r.d(t, "a", (function() {
				return o
			}))
		},
		"./src/lib/constants/icons.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
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
		"./src/lib/filterQueryParams/index.ts": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/lodash/omit.js"),
				n = r.n(o),
				i = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = r.n(i);
			t.a = (e, t) => {
				const r = s.a.parse(e, !0);
				return r.search = void 0, r.query = {
					...n()(r.query, t)
				}, s.a.format(r)
			}
		},
		"./src/lib/formatApiError/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var o = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts");

			function i(e, t) {
				return e ? e.fields && e.fields.length ? e.fields.map(e => e.msg).join(", ") : e.type && s[e.type] ? s[e.type]() : 401 === t ? o.fbt._("There was an authentication error", null, {
					hk: "2KZTRv"
				}) : o.fbt._("Something went wrong", null, {
					hk: "3i6szH"
				}) : ""
			}
			const s = {
				[n.j]: () => o.fbt._("you're not allowed to do that", null, {
					hk: "1jGKQw"
				}),
				[n.K]: () => o.fbt._("GIF size must be less than {max file size}MB", [o.fbt._param("max file size", Math.floor(n.Y / n.gb).toString())], {
					hk: "1zzsdM"
				}),
				[n.Q]: () => o.fbt._("Image size must be less than {max file size}MB", [o.fbt._param("max file size", Math.floor(n.ab / n.gb).toString())], {
					hk: "3H6bF8"
				}),
				[n.S]: () => o.fbt._("Sorry, we accept only images (.png, .jpeg, .gif) and videos (.mp4, .mov)", null, {
					hk: "1hw868"
				}),
				[n.jc]: () => o.fbt._("Video size must be less than {max file size}GB", [o.fbt._param("max file size", (n.eb / n.gb / 1024).toFixed(1))], {
					hk: "4FkABU"
				})
			}
		},
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, r) {
			"use strict";

			function o(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			r.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/actions/apiRequestState.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "g", (function() {
				return f
			}));
			var o = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/models/ApiRequestState/index.ts");
			const i = "API_REQUEST_STATE__STARTED",
				s = "API_REQUEST_STATE__COMPLETED",
				c = "API_REQUEST_STATE__FAILED",
				a = "API_REQUEST_STATE__RELEASED";

			function l(e) {
				return {
					type: i,
					payload: {
						apiRequestStatus: n.a.Pending,
						apiRequestId: e
					}
				}
			}

			function d(e) {
				return {
					type: s,
					payload: {
						apiRequestStatus: n.a.Complete,
						apiRequestId: e
					}
				}
			}

			function u(e, t) {
				return {
					type: c,
					payload: {
						apiRequestStatus: n.a.Failed,
						apiRequestId: e,
						apiError: t
					}
				}
			}
			const f = Object(o.a)(a)
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "c", (function() {
				return c
			}));
			var o = r("./src/lib/makeActionCreator/index.ts");
			const n = "EMBEDS__UNLOADABLE",
				i = "EMBEDS__LOADABLE",
				s = Object(o.a)(n),
				c = Object(o.a)(i)
		},
		"./src/reddit/actions/pages/modListing/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return o
			})), r.d(t, "e", (function() {
				return n
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "i", (function() {
				return s
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "k", (function() {
				return p
			})), r.d(t, "j", (function() {
				return _
			}));
			const o = "PAGE__MOD_LISTING_PAGE_PENDING",
				n = "PAGE__MOD_LISTING_PAGE_LOADED",
				i = "PAGE__MOD_LISTING_PAGE_FAILED",
				s = "MOD_LISTING_MORE_POSTS_PENDING",
				c = "MOD_LISTING_MORE_POSTS_LOADED",
				a = "MOD_LISTING_MORE_POSTS_FAILED",
				l = "MOD_LISTING_HIDE_SUBREDDIT_SUCCESS",
				d = "MOD_LISTING_HIDE_SUBREDDIT_PENDING",
				u = "MOD_LISTING_HIDE_SUBREDDIT_FAILED",
				f = "MOD_LISTING_UNHIDE_SUBREDDIT_SUCCESS",
				p = "MOD_LISTING_UNHIDE_SUBREDDIT_PENDING",
				_ = "MOD_LISTING_UNHIDE_SUBREDDIT_FAILED"
		},
		"./src/reddit/actions/postFlairStyleTemplates/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return i
			}));
			const o = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_PENDING",
				n = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_LOADED",
				i = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_FAILED"
		},
		"./src/reddit/actions/postList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return l
			}));
			var o = r("./src/lib/makeActionCreator/index.ts"),
				n = (r("./src/reddit/actions/embedAndImage.ts"), r("./src/reddit/actions/video.ts"), r("./src/reddit/helpers/trackers/postList.ts"));
			r("./src/reddit/constants/postLayout.ts"), r("./src/reddit/models/Media/index.ts"), r("./src/reddit/selectors/platform.ts"), r("./src/reddit/selectors/posts.ts");
			r("./src/reddit/selectors/video.ts");
			const i = "POSTLIST__MARKED_END",
				s = "POSTLIST__UNMARKED_END",
				c = Object(o.a)(i),
				a = Object(o.a)(s),
				l = (e, t) => async (r, o) => {
					const i = o();
					e in i.listings.postOrder.fetchedTokens ? e in i.listings.postOrder.ids ? r(a({
						listingKey: e
					})) : n.l(i, e) : r(c({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/structuredStyles/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return o
			})), r.d(t, "k", (function() {
				return n
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "i", (function() {
				return s
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "m", (function() {
				return b
			}));
			const o = "STRUCTURED_STYLES__STYLES_RESET_PENDING",
				n = "STRUCTURED_STYLES__STYLES_RESET_LOADED",
				i = "STRUCTURED_STYLES__STYLES_RESET_FAILED",
				s = "SUBREDDIT__STYLES_PENDING",
				c = "SUBREDDIT__STYLES_LOADED",
				a = "SUBREDDIT__STYLES_FAILED",
				l = "STRUCTURED_STYLES__DRAFT_REPLACED",
				d = "STRUCTURED_STYLES__DRAFT_UPDATED",
				u = "STRUCTURED_STYLES__EDITING_STOPPED",
				f = "STRUCTURED_STYLES__EDITING_STARTED",
				p = "STRUCTURED_STYLES__IMAGE_UPLOAD_ADDED",
				_ = "STRUCTURED_STYLES__DIRTIED_BLADE_EDITOR",
				m = "STRUCTURED_STYLES__UNDIRTIED_BLADE_EDITOR",
				b = "STRUCTURED_STYLES__STYLES_UPDATED_LOADED"
		},
		"./src/reddit/actions/structuredStyles/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return B
			})), r.d(t, "k", (function() {
				return H
			})), r.d(t, "j", (function() {
				return q
			})), r.d(t, "e", (function() {
				return V
			})), r.d(t, "d", (function() {
				return X
			})), r.d(t, "g", (function() {
				return Q
			})), r.d(t, "c", (function() {
				return Z
			})), r.d(t, "f", (function() {
				return te
			})), r.d(t, "b", (function() {
				return re
			})), r.d(t, "m", (function() {
				return oe
			})), r.d(t, "a", (function() {
				return ne
			})), r.d(t, "h", (function() {
				return ie
			})), r.d(t, "i", (function() {
				return se
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = r("./node_modules/lodash/omit.js"),
				n = r.n(o),
				i = r("./node_modules/lodash/pick.js"),
				s = r.n(i),
				c = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/lib/filterQueryParams/index.ts"),
				l = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/reddit/actions/apiRequestState.ts"),
				f = r("./src/reddit/actions/imageUploads.ts"),
				p = r("./src/reddit/actions/modal.ts"),
				_ = r("./src/reddit/endpoints/moderator/structuredStyles.ts"),
				m = e => ({
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
				b = r("./src/reddit/selectors/postFlair.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const v = Object(d.a)(h.c),
				I = Object(d.a)(h.b),
				O = Object(d.a)(h.a);
			var y = r("./src/reddit/actions/toaster.ts"),
				j = r("./src/reddit/actions/widgets/index.ts"),
				w = r("./src/reddit/constants/modals.ts"),
				k = r("./src/reddit/helpers/getGenericUploadError.ts"),
				S = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				E = r("./src/reddit/helpers/media/index.ts"),
				x = r("./src/reddit/models/Image/index.tsx"),
				T = r("./src/reddit/models/StructuredStyles/index.ts"),
				P = r("./src/reddit/models/Toast/index.ts"),
				C = r("./src/reddit/selectors/activeModalId.ts"),
				D = r("./src/reddit/selectors/platform.ts"),
				N = r("./src/reddit/selectors/structuredStyles.ts"),
				L = r("./src/reddit/selectors/user.ts"),
				U = r("./src/reddit/helpers/trackers/blade.ts"),
				A = r("./src/telemetry/index.ts"),
				R = r("./src/reddit/actions/structuredStyles/constants.ts");
			const B = Object(d.a)(R.m),
				M = {
					bannerBackgroundImage: ["bannerBackgroundImagePosition"],
					bannerPositionedImage: ["bannerPositionedImagePosition", "secondaryBannerPositionedImage"]
				},
				F = e => {
					const t = {
						...e
					};
					return Object.keys(e).forEach(r => {
						M[r] && !e[r] && M[r].forEach(e => t[e] = null)
					}), t
				},
				H = (e, t, r, o) => async (n, i, s) => {
					const {
						apiContext: c
					} = s, a = i(), d = F(t), p = a.structuredStyles.models[e];
					let m;
					for (const e in d)
						if (d[e] !== p[e]) {
							m = !0;
							break
						} if (!m) return;
					n(Object(u.h)(o));
					const b = Object(U.i)(r)(a);
					let h = null,
						v = null;
					try {
						(h = await Object(f.f)(i(), x.a.StructuredStyles)) && (v = Object(f.m)(h)(n, i, s))
					} catch (w) {
						const e = Object(k.a)("webSocket");
						return void n(Object(u.f)(o, e))
					}
					const I = Object(g.Q)(a, {
							subredditId: e
						}).name,
						O = await _.e(c(), I, d),
						j = {};
					if (O.ok) {
						if (v) try {
							await v
						} catch (w) {}
						const r = Object(N.f)(i(), {
							apiRequestId: o
						});
						for (const e in r)
							if (e in t) {
								const t = Object(N.g)(i(), {
									name: e
								});
								t && Object(x.j)(t) && (j[e] = r[e])
							} Object.keys(j).length && n(Y(j)), n(Object(u.e)(o)), n(B({
							subredditId: e,
							styles: {
								...d,
								...j
							}
						}))
					} else h && h.websocket.close(), n(Object(u.f)(o, O.error)), O.body && n(y.f({
						kind: P.b.Error,
						text: Object(l.a)(O.error, O.status)
					}));
					Object(A.a)({
						...b,
						actionInfo: {
							...b.actionInfo,
							success: O.ok
						}
					})
				}, K = Object(d.a)(R.l), W = Object(d.a)(R.k), G = Object(d.a)(R.j), q = e => async (t, r, {
					apiContext: o
				}) => {
					t(K({
						subredditId: e
					}));
					const n = Object(g.Q)(r(), {
							subredditId: e
						}).name,
						i = await _.f(o(), n);
					if (i.ok) {
						const o = r().structuredStyles.models[e],
							n = o ? o.mobileKeyColor : null;
						t(W({
							subredditId: e,
							styles: {
								mobileKeyColor: n
							}
						}))
					} else t(G({
						subredditId: e,
						...i.error
					}))
				}, z = Object(d.a)(R.d), V = e => async (t, r, o) => {
					const n = r(),
						i = n.structuredStyles.models[e] || {},
						s = Object(L.X)(n);
					t(z({
						isNightmodeOn: s,
						styles: i,
						subredditId: e
					})), de(e, !1)(t, r, o), (e => async (t, r, {
						gqlContext: o
					}) => {
						const n = r(),
							i = Object(g.Q)(n, {
								subredditId: e
							});
						if (!i) return;
						const s = Object(b.d)(n, {
								subredditId: e
							}),
							c = s && s.templateIds;
						if (!c || !c.length) return;
						t(v({
							subredditId: e
						}));
						const a = await Object(_.a)(o(), i.name, c);
						if (a.ok) {
							const r = {};
							if (a.body) {
								const {
									data: e
								} = a.body;
								if (e && e.subreddit)
									for (const t of e.subreddit.postFlairStyleTemplates) r[t.id] = m(t)
							}
							t(I({
								subredditId: e,
								templates: r
							}))
						} else t(O({
							subredditId: e,
							error: a.error
						}))
					})(e)(t, r, o), Object(j.g)(e, !1)(t, r, o)
				}, Y = Object(d.a)(R.c), X = e => async (t, r, o) => {
					const n = F(e),
						i = r();
					for (const e in n)
						if (Object(T.l)(e))
							if (n[e]) {
								if ("string" != typeof n[e]) {
									const i = n[e],
										s = await Object(x.e)(i);
									Q(e, s)(t, r, o), n[e] = ""
								}
							} else {
								const r = Object(N.g)(i, {
									name: e
								});
								r && t(Object(f.h)(r))
							} t(Y(n))
				}, $ = Object(d.a)(R.f), Q = (e, t, r) => async (o, n, i) => {
					const s = n(),
						c = r || s.structuredStyles.isEditing,
						a = Object(g.Q)(s, {
							subredditId: c
						}).name;
					o($({
						imageKey: e,
						uploadId: t.id
					})), o(Object(f.k)(t));
					const l = await _.d(i.apiContext(), a, t.file.name, e, await Object(E.g)(t.file));
					try {
						const r = await Object(f.g)(n(), l, t, x.a.StructuredStyles);
						if (r) {
							const t = r.url;
							o(Object(f.j)(r)), o(Y({
								[e]: t
							}))
						}
					} catch (d) {
						if (d instanceof Error) throw d;
						o(Object(f.i)(d))
					}
				}, J = Object(d.a)(R.b), Z = (e, t, r) => async (o, i, c) => {
					const a = i(),
						l = a.structuredStyles.models[e] || {},
						d = a.structuredStyles.draft,
						u = Object(U.h)(t)(a);
					if (r) {
						const t = s()(l, r),
							i = {
								...n()(d, r),
								...t
							};
						o(J({
							subredditId: e,
							styles: i
						}))
					} else {
						o(J({
							subredditId: e,
							styles: l
						}))
					}
					Object(A.a)(u)
				}, ee = Object(d.a)(R.e), te = () => async (e, t, r) => {
					const o = t(),
						n = Object(L.Y)(o),
						i = !!Object(D.a)(o);
					if (e(ee({
							nightmodeTempUpdated: n
						})), i) return;
					const {
						url: s
					} = o.platform.currentPage;
					s && e(Object(c.c)(Object(a.a)(s, ["styling", "route"])))
				}, re = Object(d.a)(R.a), oe = Object(d.a)(R.n), ne = () => async e => e(te()), ie = e => async (t, r) => {
					const o = r(),
						n = Object(N.i)(o);
					!Object(C.b)(w.a.BLADE_UNSAVED_CHANGES)(o) && n && (Object(N.a)(o, {
						subredditId: e
					}) ? t(Object(p.i)(w.a.BLADE_UNSAVED_CHANGES)) : t(ne()))
				}, se = e => async (t, r) => {
					const o = r();
					Object(N.i)(o) || t(Object(L.X)(o) ? Object(p.i)(w.a.BLADE_NIGHTMODE) : V(e))
				}, ce = Object(d.a)(R.i), ae = Object(d.a)(R.h), le = Object(d.a)(R.g), de = (e, t) => async (r, o, {
					gqlContext: n,
					apiContext: i
				}) => {
					r(ce({
						subredditId: e
					}));
					const s = Object(g.Q)(o(), {
						subredditId: e
					});
					if (!s) return;
					if (!t) {
						const o = await _.c(i(), s.name, t);
						if (o.ok) {
							const t = o.body,
								n = t.data ? t.data.style : {};
							r(ae({
								subredditId: e,
								styles: n
							}))
						} else r(le({
							subredditId: e,
							...o.error
						}));
						return
					}
					const c = await _.b(n(), s.name);
					if (c.ok) {
						let t = {};
						if (c.body) {
							const {
								data: e
							} = c.body;
							e && e.subreddit && e.subreddit.styles && (t = Object(S.a)(e.subreddit.styles))
						}
						r(ae({
							subredditId: e,
							styles: t
						}))
					} else r(le({
						subredditId: e,
						...c.error
					}))
				}
		},
		"./src/reddit/actions/widgets/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return o
			})), r.d(t, "i", (function() {
				return n
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return u
			}));
			const o = "WIDGETS__WIDGET_CREATED",
				n = "WIDGETS__WIDGET_UPDATED",
				i = "WIDGET_DELETED",
				s = "WIDGETS_SORTED",
				c = "WIDGETS__STARTED_EDITING_WIDGET",
				a = "WIDGETS__LOADED",
				l = "SUBREDDIT__WIDGETS_PENDING",
				d = "SUBREDDIT__WIDGETS_LOADED",
				u = "SUBREDDIT__WIDGETS_FAILED"
		},
		"./src/reddit/actions/widgets/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return y
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "b", (function() {
				return P
			})), r.d(t, "f", (function() {
				return D
			})), r.d(t, "g", (function() {
				return A
			}));
			var o = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/apiRequestState.ts"),
				s = r("./src/reddit/actions/imageUploads.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				u = r("./src/reddit/constants/headers.ts");
			const f = async (e, t, r) => Object(l.a)(Object(d.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/r/${t}/api/widgets`,
				method: a.ib.GET,
				type: "json",
				data: {
					progressive_images: r
				}
			});
			var p = r("./src/reddit/helpers/getGenericUploadError.ts"),
				_ = r("./src/reddit/helpers/media/index.ts"),
				m = r("./src/lib/assertNever.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/models/Image/index.tsx"),
				h = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/models/Widgets/index.ts"),
				I = r("./src/reddit/actions/widgets/constants.ts");
			const O = Object(n.a)(I.g),
				y = (e, t, r) => async (n, f, _) => {
					const {
						apiContext: m
					} = _;
					n(Object(i.h)(r));
					const I = f(),
						y = Object(b.Q)(I, {
							subredditId: e
						}).name,
						j = Object(v.k)(t);
					let w = null,
						k = null;
					try {
						(w = await Object(s.f)(I, g.a.Widgets)) && (k = Object(s.m)(w)(n, f, _))
					} catch (E) {
						const e = Object(p.a)("webSocket");
						return void n(Object(i.f)(r, e))
					}
					const S = await (async (e, t, r) => Object(l.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget`,
						method: a.ib.POST,
						type: "json",
						data: r
					}))(m(), y, j);
					if (S.ok) {
						let s = S.body;
						const a = s.id;
						if ("calendar" === t.kind && n(Object(c.f)({
								kind: h.b.SuccessMod,
								text: o.fbt._("New calendar added! It may take a few minutes to see your events appear", null, {
									hk: "4iETrT"
								})
							})), w) {
							try {
								await k
							} catch (E) {}
							s = await n(R(e, a)) || s
						}
						n(O({
							subredditId: e,
							widget: s,
							widgetId: a
						})), n(Object(i.e)(r))
					} else w && w.websocket.close(), n(Object(i.f)(r, S.error))
				}, j = Object(n.a)(I.i), w = (e, t, r) => async (n, f, _) => {
					const {
						apiContext: I
					} = _;
					n(Object(i.h)(r));
					const O = t.id,
						y = f(),
						w = Object(b.Q)(y, {
							subredditId: e
						}).name,
						k = Object(v.k)(t);
					let S = null,
						E = null;
					try {
						(S = await Object(s.f)(y, g.a.Widgets)) && (E = Object(s.m)(S)(n, f, _))
					} catch (T) {
						const e = Object(p.a)("webSocket");
						return void n(Object(i.f)(r, e))
					}
					const x = await (async (e, t, r) => Object(l.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget/${r.id}`,
						method: a.ib.PUT,
						type: "json",
						data: r
					}))(I(), w, k);
					if (x.ok) {
						let s = function(e, t, r) {
							switch (e.kind) {
								case "calendar":
								case "id-card":
								case "subreddit-rules":
									return {
										...e, ...t
									};
								case "community-list": {
									const o = {};
									for (const t of e.data) o[t.name] = t;
									return {
										...t,
										data: t.data.map(e => {
											if (!("subscribers" in o[e])) {
												const t = {
														subredditName: e
													},
													o = Object(b.w)(r, t),
													n = Object(b.t)(r, t);
												return {
													name: o.name,
													subscribers: o ? o.subscribers : void 0,
													iconUrl: o ? o.communityIcon : void 0,
													isNSFW: o ? o.isNSFW : void 0,
													isSubscribed: n ? n.userIsSubscriber : void 0
												}
											}
											return o[e]
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
									return Object(m.a)(e)
							}
						}(t, x.body, y);
						if (E) {
							try {
								await E
							} catch (T) {}
							s = await n(R(e, O)) || s
						}
						n(j({
							subredditId: e,
							widgetId: O,
							widget: s
						})), "calendar" === t.kind && n(Object(c.f)({
							kind: h.b.SuccessMod,
							text: o.fbt._("Calendar is updated! It may take a few minutes to see your events change", null, {
								hk: "10XWV"
							})
						})), n(Object(i.e)(r))
					} else S && S.websocket.close(), n(Object(i.f)(r, x.error))
				}, k = Object(n.a)(I.h), S = (e, t, r) => async (o, n, {
					apiContext: s
				}) => {
					o(Object(i.h)(r));
					const c = t.id,
						f = Object(b.Q)(n(), {
							subredditId: e
						}).name,
						p = await (async (e, t, r) => Object(l.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/r/${t}/api/widget/${r.id}`,
							method: a.ib.DELETE,
							type: "json"
						}))(s(), f, t);
					p.ok ? (o(Object(i.e)(r)), o(k({
						subredditId: e,
						widgetId: c
					}))) : o(Object(i.f)(r, p.error))
				}, E = Object(n.a)(I.f), x = (e, t) => async (r, o, {
					apiContext: n
				}) => {
					const i = Object(b.Q)(o(), {
						subredditId: e
					}).name;
					(await (async (e, t, r) => Object(l.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget_order/sidebar`,
						method: a.ib.PATCH,
						type: "json",
						data: r
					}))(n(), i, t)).ok && r(E({
						subredditId: e,
						widgetIds: t
					}))
				}, T = ({
					imageData: e
				}) => async (t, r, o) => {
					const n = r(),
						i = n.structuredStyles.isEditing,
						c = Object(b.Q)(n, {
							subredditId: i
						}).name;
					t(Object(s.k)(e));
					const f = await (async (e, t, r, o) => Object(l.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget_image_upload_s3`,
						method: a.ib.POST,
						data: {
							filepath: r,
							mimetype: o
						}
					}))(o.apiContext(), c, e.file.name, await Object(_.g)(e.file));
					let p = !1;
					try {
						const o = await Object(s.g)(r(), f, e, g.a.Widgets);
						o && (t(Object(s.j)(o)), p = !0)
					} catch (m) {
						if (m instanceof Error) throw m;
						t(Object(s.i)(m))
					}
					return p
				}, P = Object(n.a)(I.d), C = Object(n.a)(I.e), D = (e, t) => async (r, o, {
					apiContext: n
				}) => {
					r(Object(i.h)(t));
					const s = Object(b.Q)(o(), {
							subredditId: e
						}).name,
						c = await f(n(), s);
					if (c.ok) {
						const o = c.body;
						r(C({
							subredditId: e,
							widgets: o
						})), r(Object(i.e)(t))
					} else r(Object(i.f)(t, c.error))
				}, N = Object(n.a)(I.c), L = Object(n.a)(I.b), U = Object(n.a)(I.a), A = (e, t) => async (r, o, {
					apiContext: n
				}) => {
					r(N({
						subredditId: e
					}));
					const i = Object(b.Q)(o(), {
							subredditId: e
						}).name,
						s = await f(n(), i, t);
					if (s.ok) {
						const t = s.body;
						r(L({
							subredditId: e,
							widgets: t
						}))
					} else r(U({
						subredditId: e,
						error: s.error
					}))
				}, R = (e, t) => async (r, o, {
					apiContext: n
				}) => {
					const i = Object(b.Q)(o(), {
							subredditId: e
						}).name,
						s = await f(n(), i, !0);
					if (s.ok) return s.body.items[t]
				}
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			r("./node_modules/react/index.js");
			const o = e => new Promise((t, r) => {
				const o = new Image;
				o.onload = () => t(o), o.onerror = r, o.src = e
			})
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/lottie-web/build/player/lottie.js"),
				n = r.n(o),
				i = r("./node_modules/react/index.js"),
				s = r.n(i),
				c = r("./src/reddit/components/LottieAnimation/util.ts");
			const a = s.a.memo(e => {
				const t = s.a.createRef(),
					{
						assetData: r,
						assetUrl: o,
						className: a,
						hidden: l,
						loop: d,
						useCanvasRenderer: u,
						onClick: f,
						prefersReducedAnimation: p
					} = e,
					[_, m] = Object(i.useState)(r);
				Object(i.useEffect)(() => {
					o ? Object(c.a)(o).then(m) : r && m(r)
				}, [o, r]);
				const [b, g] = Object(i.useState)(null);
				Object(i.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || b || !_) return;
					const r = n.a.loadAnimation({
						autoplay: !1,
						renderer: u ? "canvas" : "svg",
						loop: d,
						container: e,
						animationData: _
					});
					g(r)
				}, [d, t, b, _]), Object(i.useEffect)(() => {
					if (b)
						if (l) b.stop();
						else if (p) {
						const e = b.getDuration(!0);
						b.goToAndPlay(e, !0)
					} else b.goToAndPlay(0)
				}, [l, p, b]);
				const h = Object(i.useCallback)(() => {
					b && b.goToAndPlay(0)
				}, [b]);
				return s.a.createElement("div", {
					className: a,
					style: {
						display: l ? "none" : "block"
					},
					ref: t,
					onClick: f || h
				})
			});
			t.a = a
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./src/reddit/components/ImageWithFallback/index.tsx");
			const o = {};

			function n(e) {
				let t = o[e];
				return t || (t = o[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
			}
		},
		"./src/reddit/components/SEOTitle/index.m.less": function(e, t, r) {
			e.exports = {
				Title: "_eYtD2XCVieq6emjKBH3m",
				title: "_eYtD2XCVieq6emjKBH3m"
			}
		},
		"./src/reddit/components/SEOTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var o, n, i = r("./node_modules/react/index.js"),
				s = r.n(i),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(o || (o = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(n || (n = {}));
			var l = r("./src/lib/constants/index.ts"),
				d = r("./src/reddit/helpers/postCollection.ts");
			const u = [l.Kb.COMMENTS, l.Kb.COLLECTION_COMMENTS],
				f = (e, t) => {
					if (!e) return [];
					const r = u.includes(e),
						n = e === l.Kb.COLLECTION_COMMENTS || t && Object(d.a)(t),
						i = l.U.has(e),
						s = l.Ab.has(e),
						c = e === l.Kb.SUBREDDIT,
						a = e === l.Kb.TOPIC;
					let f, p, _;
					return i && !c || s ? f = o.HeaderSelector : n ? f = o.Collection : r ? f = o.PostComments : a && (f = o.TopicHeader), (i || s || n || r) && (p = o.Widget), (i || r) && (_ = o.PostItem), [f, p, _]
				};
			var p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = r("./src/reddit/selectors/platform.ts"),
				m = r("./src/reddit/components/SEOTitle/index.m.less"),
				b = r.n(m);
			const g = ({
					level: e,
					children: t
				}) => {
					const r = `h${e}`;
					return s.a.createElement(r, {
						className: b.a.Title
					}, t)
				},
				h = Object(p.u)(),
				v = Object(c.b)(() => Object(a.a)((e, {
					pageLayer: t
				}) => t && Object(_.l)(e, {
					page: t
				}), (e, {
					pageLayer: t
				}) => t && t.meta && t.meta.name, (e, {
					type: t
				}) => t, (e, t, r) => ({
					level: f(t, e).indexOf(r) + 1 || void 0
				})));
			class I extends s.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? s.a.createElement(g, {
						level: t
					}, e) : s.a.createElement(s.a.Fragment, null, e)
				}
			}
			t.b = h(v(I))
		},
		"./src/reddit/components/SubredditIcon/index.m.less": function(e, t, r) {
			e.exports = {
				Image: "_34CfAAowTqdbNDYXz5tBTW",
				image: "_34CfAAowTqdbNDYXz5tBTW",
				UserIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				userIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
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
				mNightmode: "_1TI6C7sqGL9TRdsq1jRks"
			}
		},
		"./src/reddit/components/SubredditIcon/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
			}));
			var o = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/components/UserIcon/index.tsx"),
				d = r("./src/reddit/constants/colors.ts"),
				u = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				p = r("./src/reddit/icons/fonts/index.tsx"),
				_ = r("./src/reddit/models/Subreddit/index.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				b = r("./src/reddit/components/SubredditIcon/index.m.less"),
				g = r.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = a.a.wrapped(l.a, "UserIcon", g.a),
				I = a.a.img("Image", g.a),
				O = ({
					iconColor: e,
					...t
				}) => i.a.createElement(I, h({
					style: {
						backgroundColor: e || ""
					}
				}, t)),
				y = a.a.div("BackupImage", g.a),
				j = Object(u.u)();
			t.b = j(e => {
				const t = Object(s.e)(m.X);
				let r, n, a;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: o
					} = Object(f.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(_.h)(e.subredditOrProfile) ? a = i.a.createElement(v, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (r = t, n = o)
				} else r = e.iconUrl, n = e.primaryColor || d.b.alienblue;
				return r ? a = i.a.createElement(O, {
					alt: o.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: n,
					role: "presentation",
					src: r
				}) : a || (a = i.a.createElement(p.a, {
					name: "community",
					isFilled: !t,
					className: Object(c.a)(e.className, g.a.defaultCommunityIcon, {
						[g.a.mNightmode]: t
					}),
					style: t ? {
						backgroundColor: e.redditStyle ? d.b.alienblue : n
					} : {
						color: e.redditStyle ? d.b.alienblue : n
					}
				})), e.linkTo ? i.a.createElement("a", {
					href: e.linkTo
				}, a) : i.a.createElement(i.a.Fragment, null, a)
			})
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return f
			}));
			var o = r("./node_modules/react/index.js"),
				n = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				c = r("./src/telemetry/index.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}
			const l = n.a.createContext(() => {});

			function d({
				children: e
			}) {
				const t = Object(i.f)(),
					r = Object(o.useCallback)(e => {
						{
							const r = t.getState(),
								o = e(r);
							Object(c.a)({
								...s.defaults(r),
								...o
							})
						}
					}, [t]);
				return n.a.createElement(l.Provider, {
					value: r
				}, e ? n.a.Children.only(e) : null)
			}

			function u() {
				return Object(o.useContext)(l)
			}

			function f(e) {
				function t(t) {
					const r = u();
					return n.a.createElement(e, a({}, t, {
						sendEvent: r
					}))
				}
				const r = e.name || e.displayName;
				return t.displayName = `Tracked(${r})`, t.WrappedComponent = e, t
			}
		},
		"./src/reddit/components/UserIcon/PresenceDot.tsx": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/react/index.js"),
				n = r.n(o),
				i = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = r("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				a = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				l = r.n(a);
			t.a = e => {
				const {
					showPresence: t,
					onceInViewport: r
				} = e, a = Object(o.useRef)(null), d = Object(o.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && r && r()
					})
				}, [r]);
				return Object(s.a)(a, d), n.a.createElement(c.a, {
					ref: a,
					className: Object(i.a)(l.a.presenceDot, {
						[l.a.isLit]: t
					}),
					isHighlighted: e.isHighlighted,
					outlineClassName: e.outlineClassName
				})
			}
		},
		"./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				a = r.n(c);
			t.a = function({
				backgroundClassName: e,
				className: t,
				headshot: r
			}) {
				return i.a.createElement("div", {
					className: Object(s.a)(a.a.snoovatarWrapper, t)
				}, i.a.createElement("div", {
					className: Object(s.a)(a.a.snoovatarBackground, e)
				}), i.a.createElement("div", {
					className: a.a.snoovatarHeadshotContainer
				}, i.a.createElement("img", {
					alt: o.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: a.a.snoovatarHeadshot,
					src: r
				})))
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.m.less": function(e, t, r) {
			e.exports = {
				currentUserIconWrapper: "efdkOLo3oigH_95whTYCp",
				userIconWrapper: "_2p14AQvJBvTrEEa4csiW9v",
				DefaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				defaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				UserIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				userIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				mNightmode: "_2aVSEFJsIE0M-4uRE-U24H",
				nftAnimation: "_3fhlcUDP9SJN47QMfuzW_j",
				snoovatarWrapper: "_1cyAeeYDGrx7MPL_jRwKZ",
				snoovatarBackground: "_2_QqG5dG916znjlVV8ZCbw",
				snoovatarHeadshotContainer: "_1XJXnCAngvZLEeLpB3oa4L",
				snoovatarHeadshot: "ScrrUjzznpAqm92uwgnvO",
				presenceDot: "_2dn5Ncenn0BSD4tCSmxQhA",
				isLit: "GpWjjkZl5_kV4yZYWBaT2",
				hasHeadShotWrapper: "_1TENjLYSaj4L4uJMZa3DRe"
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "c", (function() {
				return _
			}));
			var o = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react/index.js"),
				s = r.n(i),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				f = r.n(u);
			const p = `${o.a.assetPath}/img/avatar_over18_square.png`,
				_ = e => !e || e.includes("avatar_default_");
			t.b = e => {
				const {
					className: t,
					iconUrl: r,
					isCurrentUser: o,
					isNightMode: i,
					isNSFW: u,
					nsfwIconUrl: m,
					shouldHideNSFW: b
				} = e;
				if (Object(c.e)(e => {
						_(r) && Object(d.g)(e)
					}), o && _(r) || !o && !r) return s.a.createElement(l.a, {
					className: Object(a.a)(f.a.DefaultUserIcon, t, {
						[f.a.mNightmode]: i
					})
				});
				const g = !o && u && b ? m || p : r;
				return s.a.createElement("img", {
					alt: n.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(a.a)(f.a.UserIcon, t),
					src: g
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, r) {
			"use strict";
			var o = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				s = r("./src/config.ts"),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				l = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = r("./src/reddit/models/User/index.ts"),
				u = r("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				f = r("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				p = r("./src/reddit/components/UserIcon/UserIcon.tsx"),
				_ = r("./src/reddit/selectors/user.ts"),
				m = r("./src/reddit/components/LottieAnimation/index.tsx"),
				b = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				g = r.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(a.c)({
					currentUser: _.k,
					isNightMode: _.X,
					shouldHideNSFW: _.C,
					user: _.ob
				}),
				I = Object(c.b)(v);
			t.a = I(e => {
				const {
					collapsed: t,
					currentUser: r,
					iconUrl: n,
					isCommentAuthorBlocked: c,
					isHighlighted: a,
					isNSFW: _,
					shouldShowPresenceIndicator: b,
					user: v,
					userName: I,
					onPresenceIndicatorInViewport: O,
					omitResponsivePresenceWrapper: y,
					isNft: j,
					...w
				} = e, k = !!r && Object(d.e)(r) === I, S = k ? r : v, E = S && S.accountIcon || n, x = v ? v.isNSFW : _, T = Object(l.a)(E) && !c, P = T ? i.a.createElement(f.a, {
					headshot: E,
					className: e.className
				}) : i.a.createElement(p.b, h({}, w, {
					iconUrl: c && t ? "https://www.redditstatic.com/avatars/defaults/avatar_default_3.png" : E,
					isCurrentUser: k,
					isNSFW: x
				}));
				return y ? P : i.a.createElement("div", {
					className: Object(o.a)(g.a.userIconWrapper, {
						[g.a.nftUserIcon]: j,
						[g.a.hasHeadShotWrapper]: T
					})
				}, j && i.a.createElement(m.a, {
					className: g.a.nftAnimation,
					assetUrl: `${s.a.assetPath}/img/snoovatars/nft_comment_animation.json`,
					loop: !0
				}), P, b && i.a.createElement(u.a, {
					showPresence: !0,
					isHighlighted: a,
					onceInViewport: O
				}))
			})
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "k", (function() {
				return c
			})), r.d(t, "m", (function() {
				return a
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "n", (function() {
				return d
			})), r.d(t, "j", (function() {
				return u
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "i", (function() {
				return b
			}));
			const o = "DraftEditor-contentwrapper",
				n = "public-DraftStyleDefault-block",
				i = "data-offset-key",
				s = "hovered",
				c = "scrollerItem",
				a = "threadline",
				l = "header-user-dropdown",
				d = "voteButton",
				u = "RichTextJSON-root",
				f = "ImageBox-image",
				p = "content-type-link",
				_ = "styled-outbound-link",
				m = "ListingLayout-backgroundContainer",
				b = "ListingLayout-outerContainer"
		},
		"./src/reddit/constants/elementIds.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "b", (function() {
				return s
			}));
			const o = "bladeContainer",
				n = "header",
				i = "overlayScrollContainer",
				s = "collectionPostListScrollContainer"
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, r) {
			"use strict";
			var o, n;
			r.d(t, "d", (function() {
					return o
				})), r.d(t, "c", (function() {
					return n
				})), r.d(t, "b", (function() {
					return i
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(o || (o = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(n || (n = {}));
			const i = "SHORTCUT_FOCUSABLE_DIV",
				s = [9, 13, 32]
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return o
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "b", (function() {
				return l
			}));
			const o = 4,
				n = 60,
				i = 70,
				s = 90,
				c = 99,
				a = 100,
				l = 100
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			}));
			var o = r("./node_modules/react/index.js"),
				n = r.n(o);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}
			const s = n.a.createContext(!1);

			function c(e) {
				function t(t) {
					return n.a.createElement(s.Consumer, null, r => n.a.createElement(e, i({}, t, {
						isOverlay: r
					})))
				}
				return t.displayName = `WithOverlay(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/controls/Dropdown/index.m.less": function(e, t, r) {
			e.exports = {
				dropdownTriangle: "_1oxgVV3q47KbjEKqP5CHuM",
				dropdown: "_2uYY-KeuYHKiwl-9aF0UiL"
			}
		},
		"./src/reddit/controls/Dropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var o = r("./node_modules/react/index.js"),
				n = r.n(o),
				i = r("./src/lib/classNames/index.ts"),
				s = r("./src/lib/domUtils/index.ts"),
				c = r("./src/reddit/constants/zIndex.ts"),
				a = r("./src/reddit/controls/Dropdown/index.m.less"),
				l = r.n(a);
			class d extends n.a.Component {
				componentDidMount() {
					this.props.onDropdownMounted && this.props.onDropdownMounted(), this.props.noFocus || this.ref && this.ref.focus({
						preventScroll: this.props.isOverlay
					})
				}
				componentWillUnmount() {
					Object(s.a)(this.props.tooltipId)
				}
				render() {
					const e = this.props,
						t = {};
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? c.d + 1 : c.c)), n.a.createElement("div", {
						className: Object(i.a)(l.a.dropdown, e.className),
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
		"./src/reddit/controls/InternalLink/index.m.less": function(e, t, r) {
			e.exports = {
				disabledLink: "_1tQt2CUWT3M7NNSMoh_o_4"
			}
		},
		"./src/reddit/controls/InternalLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var o = r("./node_modules/react/index.js"),
				n = r.n(o),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/helpers/path/index.ts"),
				a = r("./src/reddit/controls/InternalLink/index.m.less"),
				l = r.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}

			function u({
				children: e,
				className: t,
				disabled: r,
				replace: o,
				to: a,
				...u
			}) {
				return r ? n.a.createElement("span", {
					className: Object(s.a)(l.a.disabledLink, t)
				}, e) : ("string" == typeof a && (a = Object(c.b)(a)), n.a.createElement(i.a, d({
					className: t,
					to: a
				}, u), e))
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "c", (function() {
				return T
			}));
			var o = r("./node_modules/lodash/omit.js"),
				n = r.n(o),
				i = r("./node_modules/query-string/index.js"),
				s = r.n(i),
				c = r("./node_modules/react/index.js"),
				a = r.n(c),
				l = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				u = r("./src/lib/addQueryParams/index.ts");
			var f = (e, t) => t ? Object(u.a)(e, {
				user_id: t
			}) : e;
			var p = r("./src/lib/opener/index.ts"),
				_ = r("./src/lib/redditId/index.ts"),
				m = r("./src/reddit/actions/post.ts"),
				b = r("./src/reddit/constants/adEvents.ts"),
				g = r("./src/reddit/helpers/getVendorMetadata.ts"),
				h = r("./src/reddit/helpers/pixels.ts"),
				v = r("./src/reddit/helpers/trackers/ads.ts"),
				I = r("./src/reddit/hooks/useOutboundClickTracking.ts"),
				O = r("./src/reddit/selectors/posts.ts"),
				y = r("./src/reddit/selectors/telemetry.ts"),
				j = r("./src/reddit/selectors/user.ts");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}
			const k = Object(d.a)(j.a, j.k, (e, {
					isSponsored: t,
					postId: r
				}) => t && r ? Object(O.b)(e, r) : null, O.H, y.actionInfo, (e, t, r, o, n) => ({
					allowClickTracking: e,
					basePixelMetadata: r,
					userId: t ? Object(_.a)(t.id) : null,
					post: o,
					pageType: n.pageType
				})),
				S = Object(l.b)(k, e => ({
					fireAdPixelsOfType: (t, r) => e(Object(m.z)(t, r)),
					recordClick: (t, r, o) => {
						const n = t.events.filter(({
							type: e,
							url: t
						}) => e === b.a.Click && Object(h.b)(t));
						Object(h.c)(n), e(Object(m.p)(String(r), {
							postId: t.id,
							vendorMetadata: o
						}))
					}
				})),
				E = (e, t, r, o) => {
					const n = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					o && t.outboundUrl && n && (e.href = f(t.outboundUrl, r), e.href = function(e) {
						return Object(u.a)(e, {
							web_redirect: "true"
						})
					}(e.href))
				},
				x = (e, t, r) => {
					let o, n = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(r)) {
						n = Object(g.a)(e, t, b.a.Click);
						const {
							url: i,
							query: c
						} = s.a.parseUrl(r);
						o = s.a.stringifyUrl({
							url: i,
							query: {
								...c,
								...n
							}
						})
					} else o = r;
					return {
						url: o,
						metadata: n
					}
				},
				T = (e, t, r) => {
					const o = x(t, r, e.href);
					return e.href = o.url, o.metadata
				},
				P = ({
					isSponsored: e,
					source: t
				}) => !!(e && (null == t ? void 0 : t.outboundUrl)),
				C = S(e => {
					const t = Object(c.useRef)(null),
						r = Object(I.a)(),
						{
							allowClickTracking: o,
							basePixelMetadata: i,
							commentId: s,
							fireAdPixelsOfType: l,
							href: d,
							isSponsored: u,
							pageType: f,
							post: _,
							postId: m,
							recordClick: g,
							source: h,
							sourceElement: O,
							userId: y
						} = e;
					let j = n()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "recordClick", "source", "sourceElement", "userId", "pageType"]);
					const k = h && h.outboundUrl && u ? h.outboundUrl : d;
					return j = {
						...j,
						href: k,
						rel: u ? p.b : p.a,
						target: p.d.BLANK
					}, !h || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: r
						} = e;
						return !(!t || !r) && (t > r + 3e5 || t < r - 36e5)
					})(h) ? a.a.createElement("a", w({}, j, {
						onClick: () => r(d, O, s, m)
					})) : a.a.createElement("a", w({}, j, {
						onMouseDown: r => {
							if (!P(e)) return !(1 !== r.button && 2 !== r.button && !r.ctrlKey) || void E(r.currentTarget, h, y, o);
							t.current = T(r.currentTarget, m, i)
						},
						onClick: () => {
							_ && (P(e) && (g(_, b.a.Click, t.current), Object(v.a)(_, f)), l(_, b.a.Click), r(d, O, s, m))
						},
						onMouseLeave: e => {
							u || ((e, t) => {
								e.href = t
							})(e.currentTarget, k)
						},
						onTouchStart: e => E(e.currentTarget, h, y, o),
						"data-testid": "outbound-link"
					}))
				});
			t.b = C
		},
		"./src/reddit/helpers/getTimeSortForListing/index.ts": function(e, t, r) {
			"use strict";
			var o = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/listingSort/index.ts");
			t.a = (e, t) => {
				if (e) return Object(n.a)(e) ? t || o.ec : void 0
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
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
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/history/esm/history.js"), r("./src/reddit/actions/platform.ts");
			var o = r("./src/config.ts");
			t.a = (e, t) => {
				const r = t.platform.currentPage && t.platform.currentPage.url;
				let n = `${o.a.accountManagerOrigin}/login/`;
				const i = window.location.origin;
				r && (n += `?dest=${encodeURIComponent(`${i}${r}`)}`), window.location.href = n
			}
		},
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return s
			}));
			var o = r("./node_modules/polished/dist/polished.es.js"),
				n = r("./src/reddit/models/NewStructuredStyles/index.ts");
			const i = e => Object(o.b)(e) < .6;

			function s(e, t = n.a.bodyText, r = n.b.bodyText) {
				return i(e) ? r : t
			}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return c
			}));
			var o = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/helpers/localStorage/index.ts"),
				i = r("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, r) => n => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...i.defaults(n),
					subreddit: i.subreddit(n),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${r}` : `DESKTOP ${r}`,
						count: 1,
						type: o.f.SWITCH_HOUSE_AD
					}
				}),
				c = (e, t) => {
					t && (Object(n.yb)(e.postId), Object(n.Hb)(t)), e.impressionIdStr ? Object(n.zb)(e.impressionIdStr) : e.impressionId && Object(n.zb)(e.impressionId)
				}
		},
		"./src/reddit/helpers/trackers/blade.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return s
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "k", (function() {
				return h
			}));
			var o = r("./src/reddit/constants/blade.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t) => r => ({
					...n.defaults(r),
					source: o.d.Appearance,
					action: "click",
					noun: e,
					actionInfo: n.actionInfo(r, {
						paneName: t
					}),
					subreddit: n.subreddit(r)
				}),
				s = e => i("save_style", e),
				c = e => i("cancel_style", e),
				a = e => t => ({
					source: o.d.Structure,
					action: "click",
					noun: e,
					screen: n.screen(t),
					subreddit: n.subreddit(t)
				}),
				l = e => t => ({
					source: o.d.Appearance,
					action: "click",
					noun: e,
					screen: n.screen(t),
					subreddit: n.subreddit(t)
				}),
				d = (e, t) => r => ({
					source: "colorpicker",
					action: "click",
					noun: e,
					actionInfo: n.actionInfo(r, {
						paneName: o.g[t]
					}),
					screen: n.screen(r),
					subreddit: n.subreddit(r)
				}),
				u = e => t => ({
					source: o.h[e],
					action: "click",
					noun: "colorpicker",
					actionInfo: n.actionInfo(t, {
						paneName: o.g[e]
					}),
					screen: n.screen(t),
					subreddit: n.subreddit(t)
				}),
				f = e => ({
					screen: n.screen(e),
					subreddit: n.subreddit(e)
				}),
				p = () => e => ({
					source: o.d.Appearance,
					action: "view",
					noun: "blade",
					...f(e)
				}),
				_ = e => t => ({
					source: o.a[e],
					action: "click",
					noun: o.b[e],
					...f(t)
				}),
				m = () => e => ({
					source: o.d.Appearance,
					action: "click",
					noun: "back",
					...f(e)
				}),
				b = e => t => ({
					source: o.d.PostFlairManagement,
					action: "click",
					noun: e,
					...f(t)
				}),
				g = (e, t) => ({
					...n.defaults(e),
					...b(t)(e)
				}),
				h = e => t => ({
					source: o.d.MenuLinks,
					action: "click",
					noun: e ? "wiki_link_on" : "wiki_link_off",
					screen: n.screen(t),
					subreddit: n.subreddit(t),
					userSubreddit: n.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "y", (function() {
				return v
			})), r.d(t, "x", (function() {
				return I
			})), r.d(t, "t", (function() {
				return O
			})), r.d(t, "q", (function() {
				return y
			})), r.d(t, "r", (function() {
				return j
			})), r.d(t, "A", (function() {
				return w
			})), r.d(t, "s", (function() {
				return k
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "v", (function() {
				return E
			})), r.d(t, "u", (function() {
				return x
			})), r.d(t, "p", (function() {
				return T
			})), r.d(t, "o", (function() {
				return P
			})), r.d(t, "z", (function() {
				return C
			})), r.d(t, "l", (function() {
				return D
			})), r.d(t, "k", (function() {
				return N
			})), r.d(t, "m", (function() {
				return L
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "n", (function() {
				return B
			})), r.d(t, "i", (function() {
				return F
			})), r.d(t, "f", (function() {
				return H
			})), r.d(t, "g", (function() {
				return K
			})), r.d(t, "c", (function() {
				return W
			})), r.d(t, "w", (function() {
				return G
			})), r.d(t, "h", (function() {
				return q
			})), r.d(t, "b", (function() {
				return z
			}));
			var o = r("./src/reddit/constants/tracking.ts"),
				n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/helpers/media/index.ts"),
				s = r("./src/reddit/models/PostCreationForm/index.ts"),
				c = r("./src/reddit/models/PostDraft/index.ts"),
				a = r("./src/reddit/selectors/postDraft.ts"),
				l = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				u = r("./src/telemetry/index.ts"),
				f = r("./src/telemetry/models/PostComposer.ts"),
				p = r("./src/telemetry/models/PostDraft.ts");
			const _ = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				m = e => ({
					source: "post_composer",
					action: o.c.CLICK,
					...l.defaults(e),
					screen: l.screen(e),
					correlationId: Object(n.c)(n.a.PostComposer)
				}),
				b = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === s.h.MARKDOWN ? "markdown" : "rte"
				},
				g = e => {
					Object(u.a)({
						noun: "cancel",
						...m(e)
					})
				},
				h = e => {
					Object(u.a)({
						noun: "discard",
						...m(e)
					})
				},
				v = e => {
					Object(u.a)({
						noun: "subreddit_choice",
						subreddit: l.subreddit(e),
						...m(e),
						actionInfo: l.chatPostActionInfo(e)
					})
				},
				I = e => {
					Object(u.a)({
						noun: "subreddit_selector",
						...m(e)
					})
				},
				O = (e, t) => {
					Object(u.a)({
						noun: "post_type_selector",
						postComposer: {
							type: _[t]
						},
						...m(e)
					})
				},
				y = () => e => ({
					noun: "add_option",
					...m(e)
				}),
				j = () => e => ({
					noun: "voting_length",
					...m(e)
				}),
				w = (e, t, r) => {
					"image_upload" === t || "video_upload" === t ? Object(u.a)({
						noun: t,
						...m(e)
					}) : Object(u.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: r ? "on" : "off"
						},
						...m(e)
					})
				},
				k = (e, t, r) => {
					Object(u.a)({
						noun: "post",
						subreddit: l.subreddit(e),
						postComposer: {
							type: t,
							...b(e, t)
						},
						post: r ? l.post(e, r) : null,
						...m(e)
					})
				},
				S = (e, t) => {
					const r = t === s.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(u.a)({
						noun: r,
						...m(e)
					})
				},
				E = (e, t) => {
					Object(u.a)({
						noun: "save",
						subreddit: l.subreddit(e),
						postComposer: {
							type: t,
							...b(e, t)
						},
						...m(e)
					})
				},
				x = (e, t) => {
					const r = e.uploads[t];
					r.error && Object(u.a)({
						...m(e),
						noun: "media",
						action: o.c.REJECT,
						actionInfo: {
							...l.actionInfo(e),
							reason: JSON.stringify(r.error)
						}
					})
				},
				T = (e, t) => {
					t.forEach(t => {
						const r = Object(i.f)(t.type);
						r && Object(u.a)({
							...m(e),
							action: o.c.DRAG,
							noun: r
						})
					})
				},
				P = (e, t, r) => {
					Object(u.a)({
						...m(e),
						noun: "input",
						postComposer: {
							inputType: r
						},
						action: t,
						actionInfo: l.chatPostActionInfo(e)
					})
				},
				C = (e, t, r) => {
					Object(u.a)({
						...m(e),
						noun: r,
						action: Object(f.getToggleAction)(t),
						actionInfo: l.chatPostActionInfo(e)
					})
				},
				D = e => U("input", e),
				N = () => U("add"),
				L = () => U("remove"),
				U = (e, t) => r => ({
					...m(r),
					noun: e,
					postComposer: {
						inputType: t,
						type: _.imageOnly
					},
					action: o.c.CLICK
				}),
				A = e => {
					Object(u.a)({
						...m(e),
						noun: "hide_oc_description",
						action: o.c.CLICK
					})
				},
				R = (e, t) => {
					if (t) {
						const r = l.subredditById(e, t);
						if (r) return {
							subreddit: r
						};
						const o = l.profileById(e, t);
						if (o) return {
							profile: o
						}
					}
				},
				B = (e, t) => {
					const {
						draftId: r,
						destSubreddit: o
					} = t, n = Object(d.k)(e), i = Object(a.d)(e, {
						draftId: r
					}), s = {
						authorId: n ? n.id : void 0,
						createdTimestamp: i ? i.created : void 0,
						id: r || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case c.b.Link:
							s.type = p.DraftType.Link, s.urlLength = t.body.length;
							break;
						case c.b.Markdown:
							s.type = p.DraftType.Self, s.bodyTextLength = t.body.length;
							break;
						case c.b.RichText:
							s.type = p.DraftType.RichText, t.documentStats && (s.bodyTextLength = t.documentStats.textLength, s.numberRteImages = t.documentStats.rteImagesCount, s.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case c.b.Image:
							s.type = p.DraftType.Image;
							break;
						case c.b.Video:
							s.type = p.DraftType.Video
					}
					return {
						postDraft: s,
						...R(e, o.id)
					}
				},
				M = (e, t) => {
					const r = Object(d.k)(e),
						o = {
							authorId: r ? r.id : void 0,
							createdTimestamp: t.created,
							id: t.id,
							nsfw: t.isNSFW,
							originalContent: t.isOriginalContent,
							spoiler: t.isSpoiler,
							titleLength: t.title.length
						};
					switch (t.kind) {
						case c.b.Link:
							o.type = p.DraftType.Link, o.urlLength = (t.body || "").length;
							break;
						case c.b.Markdown:
							o.type = p.DraftType.Self, o.bodyTextLength = (t.body || "").length;
							break;
						case c.b.RichText:
							o.type = p.DraftType.RichText
					}
					return {
						postDraft: o,
						...R(e, t.subredditId)
					}
				},
				F = (e, t) => {
					Object(u.a)({
						noun: "draft_load",
						...m(e),
						...B(e, t)
					})
				},
				H = (e, t) => {
					Object(u.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...m(e),
						...B(e, t)
					})
				},
				K = (e, t) => {
					Object(u.a)({
						noun: "draft_delete",
						...m(e),
						...M(e, t)
					})
				},
				W = e => {
					Object(u.a)({
						...m(e),
						noun: "social_connect_link",
						action: o.c.CLICK
					})
				},
				G = (e, t) => {
					Object(u.a)({
						...m(e),
						noun: "twitter_share_checkbox",
						action: Object(f.getToggleAction)(t)
					})
				},
				q = (e, t, r) => {
					Object(u.a)({
						...m(e),
						...B(e, t),
						noun: "draft_share",
						action: r ? o.c.ENABLE : o.c.DISABLE
					})
				},
				z = e => {
					Object(u.a)({
						...m(e),
						noun: "create_community",
						actionInfo: {
							...l.actionInfo(e),
							pageType: "post_select_community"
						}
					})
				}
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "A", (function() {
				return s
			})), r.d(t, "r", (function() {
				return c
			})), r.d(t, "t", (function() {
				return a
			})), r.d(t, "B", (function() {
				return d
			})), r.d(t, "j", (function() {
				return u
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "m", (function() {
				return p
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "u", (function() {
				return g
			})), r.d(t, "y", (function() {
				return h
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "h", (function() {
				return I
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "q", (function() {
				return j
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "p", (function() {
				return k
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "w", (function() {
				return E
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "s", (function() {
				return P
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "l", (function() {
				return D
			})), r.d(t, "x", (function() {
				return N
			})), r.d(t, "z", (function() {
				return L
			}));
			var o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, r) => ({
					...n.defaults(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !1),
					profile: n.profile(e),
					subreddit: n.subreddit(e),
					powerups: {
						...n.subredditPowerups(e),
						freeCount: t,
						paidCount: r
					}
				}),
				s = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...i(t),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powerups_become_hero",
					...i(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				a = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powerups_see_all_heroes",
					...i(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				l = e => (t, r) => o => ({
					source: e,
					action: "click",
					noun: "powerup_supporter",
					...i(o),
					profile: {
						id: t,
						name: r,
						type: "default"
					}
				}),
				d = l("postlist_supporters_cta"),
				u = l("comm_heroes_modal"),
				f = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				p = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				_ = () => e => ({
					source: "powerups_community_feed",
					action: "view",
					noun: "powerups_mod_enable_banner",
					...i(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !1)
				}),
				m = () => e => ({
					source: "powerups_community_feed",
					action: "click",
					noun: "powerups_mod_enable_banner",
					...i(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !1)
				}),
				b = e => t => ({
					source: "powerups",
					action: "click",
					noun: "join_supporters",
					...i(t),
					actionInfo: n.actionInfo(t, {
						reason: e
					})
				}),
				g = () => e => ({
					source: "powerups_supporters_modal",
					action: "click",
					noun: "powerups_cta",
					...i(e)
				}),
				h = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_supporter_achievement",
					...i(e)
				}),
				v = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_achievements",
					...i(e)
				}),
				I = e => t => ({
					source: "powerups_modal",
					action: "view",
					noun: "marketing_step",
					...i(t),
					actionInfo: n.actionInfo(t, {
						reason: e
					})
				}),
				O = e => t => ({
					source: "powerups",
					action: "click",
					noun: "benefit",
					...i(t),
					powerups: {
						...n.subredditPowerups(t),
						benefit: e
					}
				}),
				y = (e, t) => r => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...i(r, e, t)
				}),
				j = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...i(e),
					actionInfo: n.actionInfo(e, {
						pageType: "powerups_premium_upsell"
					})
				}),
				w = () => e => ({
					source: "powerups_premium_upsell",
					action: "click",
					noun: "powerups_price",
					...i(e)
				}),
				k = e => t => ({
					source: "powerups",
					action: "click",
					noun: "premium",
					...i(t),
					actionInfo: n.actionInfo(t, {
						pageType: "powerups_premium_upsell"
					}),
					goldPurchase: {
						subscriptionType: e
					}
				}),
				S = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...i(r, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				E = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...i(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				x = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...i(e)
				}),
				T = (e, t) => r => ({
					source: t,
					action: "click",
					noun: "add_custom_emojis",
					...i(r),
					powerups: {
						...n.subredditPowerups(r),
						emojiCount: e
					}
				}),
				P = (e, t) => r => ({
					source: t,
					action: "save",
					noun: "custom_emojis",
					...i(r),
					powerups: {
						...n.subredditPowerups(r),
						emojiCount: e
					}
				}),
				C = (e = 1, t) => r => ({
					source: t,
					action: "delete",
					noun: "custom_emojis",
					...i(r),
					powerups: {
						...n.subredditPowerups(r),
						emojiCount: e
					}
				}),
				D = (e, t) => r => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? n.subredditById(r, t) : void 0,
					...i(r),
					correlationId: e
				}),
				N = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_gifs",
					...i(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				L = (e, t, r) => o => ({
					source: "powerups_settings",
					action: "click",
					noun: e,
					setting: {
						value: String(t),
						oldValue: String(r)
					},
					subreddit: n.subreddit(o),
					...n.defaults(o)
				})
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return j
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "q", (function() {
				return S
			})), r.d(t, "r", (function() {
				return E
			})), r.d(t, "o", (function() {
				return x
			})), r.d(t, "s", (function() {
				return T
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "p", (function() {
				return D
			})), r.d(t, "i", (function() {
				return N
			})), r.d(t, "j", (function() {
				return L
			})), r.d(t, "g", (function() {
				return U
			})), r.d(t, "b", (function() {
				return B
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "n", (function() {
				return F
			})), r.d(t, "m", (function() {
				return H
			})), r.d(t, "t", (function() {
				return G
			})), r.d(t, "w", (function() {
				return q
			})), r.d(t, "e", (function() {
				return z
			})), r.d(t, "d", (function() {
				return Y
			})), r.d(t, "u", (function() {
				return X
			})), r.d(t, "v", (function() {
				return $
			})), r.d(t, "h", (function() {
				return Q
			}));
			var o = r("./node_modules/lodash/pick.js"),
				n = r.n(o),
				i = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makePostDraftPageKey/index.ts"),
				c = r("./src/reddit/constants/parameters.ts"),
				a = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				l = r("./src/reddit/helpers/routeKey/index.ts"),
				d = r("./src/reddit/helpers/trackers/postComposer.ts"),
				u = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				f = r("./src/reddit/models/Comment/index.ts"),
				p = r("./src/reddit/models/Post/index.ts"),
				_ = r("./src/reddit/selectors/profile.ts"),
				m = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/lib/makePostCreationPageKey/index.ts"),
				g = r("./src/lib/makeSearchKey/index.ts"),
				h = r("./src/reddit/helpers/correlationIdTracker.ts"),
				v = r("./src/reddit/helpers/trackers/searchResults.ts"),
				I = r("./src/reddit/selectors/postDraft.ts"),
				O = r("./src/reddit/selectors/telemetry.ts"),
				y = r("./src/telemetry/index.ts");
			const j = (e, t, r, o, d, _) => {
					const {
						route: m
					} = e, {
						name: h
					} = m.meta;
					if (!h) return;
					const v = t.platform.currentPage;
					switch (h) {
						case i.Kb.COMMENTS: {
							const {
								partialCommentId: n,
								partialPostId: i
							} = e.match.params, s = Object(p.s)(i), c = Object(l.a)(e, t, t.posts.models[s]);
							if (!c) return;
							const d = n && Object(f.h)(n),
								{
									sortToUse: u
								} = Object(a.a)(t, s);
							Object(y.a)(P(c, s, d, r, o, u)(t));
							break
						}
						case i.Kb.INDEX:
						case i.Kb.LISTING:
						case i.Kb.MULTIREDDIT:
						case i.Kb.SUBREDDIT: {
							const n = Object(l.c)(e, t);
							if (!n.listingKey) return;
							const {
								params: s,
								queryParams: c
							} = e.match, {
								sort: a = (n.sort ? n.sort : i.V.HOT)
							} = s, d = c.t;
							Object(y.a)(k(n.listingKey, a, r, o, d)(t));
							break
						}
						case i.Kb.TOPIC: {
							const n = Object(l.c)(e, t);
							if (!n.listingKey) return;
							const {
								params: s
							} = e.match, c = n.sort ? n.sort : i.W, {
								sort: a = c
							} = s;
							Object(y.a)(k(n.listingKey, a, r, o)(t));
							break
						}
						case i.Kb.PROFILE_OVERVIEW: {
							const n = Object(l.d)(e, t);
							if (!n) return;
							const {
								params: s,
								queryParams: c
							} = e.match, {
								sort: a = i.Cb
							} = s, d = c.t;
							Object(y.a)(S(n, a, r, o, d)(t));
							break
						}
						case i.Kb.PROFILE_POSTS: {
							const n = Object(l.d)(e, t);
							if (!n) return;
							const {
								queryParams: s
							} = e.match, {
								sort: c = i.Cb,
								t: a = i.Db
							} = s;
							Object(y.a)(E(n, c, r, o, a)(t));
							break
						}
						case i.Kb.PROFILE_COMMENTS: {
							const n = Object(l.d)(e, t);
							if (!n) return;
							const {
								queryParams: s
							} = e.match, {
								sort: c = i.Cb,
								t: a = i.Db
							} = s;
							Object(y.a)(x(n, c, r, o, a)(t));
							break
						}
						case i.Kb.PROFILE_PRIVATE: {
							const n = Object(l.d)(e, t);
							if (!n) return;
							Object(y.a)(T(n)(o, r)(t));
							break
						}
						case i.Kb.FOLLOWERS:
							A(t);
							break;
						case i.Kb.PROFILE_MODERATION:
							_ && D(t, !0);
							break;
						case i.Kb.SETTINGS: {
							const n = e;
							Object(y.a)(W(r, o)(t)), n.match.params.page === i.Yb.Profile && Object(u.l)(t);
							break
						}
						case i.Kb.POST_CREATION:
							if (_ && d) {
								const e = Object(b.a)(d);
								Object(y.a)(C(e, r, o)(t))
							}
							break;
						case i.Kb.POST_DRAFT: {
							const {
								draftId: n
							} = e.match.params, i = Object(s.a)(e.match.params);
							if (!i) return;
							R(t, i, n, r, o);
							break
						}
						case i.Kb.SUBREDDIT_WIKI:
							Object(y.a)(V(r, o)(t));
							break;
						case i.Kb.COINS:
							Object(y.a)(B(r, o)(t)), Object(y.a)(M()(t));
							break;
						case i.Kb.PREMIUM:
							Object(y.a)(F(r, o)(t)), Object(y.a)(H()(t));
							break;
						case i.Kb.APPEAL:
							Object(y.a)(K(r, o)(t));
							break;
						case i.Kb.INBOX_PAGES:
							_ && U(t);
							break;
						case i.Kb.MODERATION_PAGES:
							_ && N(t, !0, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case i.Kb.COLLECTION_COMMENTS:
							_ && $(t, !0);
							break;
						case i.Kb.MODQUEUE_PAGES:
							_ && L(t, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case i.Kb.SUBREDDIT_LEADERBOARD:
							_ && Object(y.a)(z()(t));
							break;
						case i.Kb.SEARCH_RESULTS:
							if (_) {
								const i = Object(l.e)(e, t);
								if (!i) return;
								Object(y.a)(X(i, Object(g.e)(n()(v && v.queryParams || {}, c.t)), r, o, v)(t))
							}
							break;
						case i.Kb.PUBLIC_ACCESS_NETWORK:
							_ && Object(y.a)(G()(t));
							break;
						case i.Kb.GEOTAGGING:
							_ && Object(y.a)(Y()(t));
							break;
						case i.Kb.SUBREDDIT_CREATION:
							_ && Object(y.a)(q()(t));
							break;
						case i.Kb.MOD_LISTING:
							_ && Q(t, !0)
					}
				},
				w = e => ({
					...O.defaults(e),
					userPreferences: O.userPreferences(e)
				}),
				k = (e, t, r, o, n, i) => s => {
					const {
						api: c
					} = s.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...w(s),
						actionInfo: O.actionInfo(s, {
							success: a
						}),
						customFeed: O.customFeed(s),
						listing: O.listing(s, e, {
							sort: t,
							sortTime: n
						}),
						subreddit: O.subreddit(s),
						timer: O.timer(r, o),
						userSubreddit: O.userSubreddit(s),
						adblock: O.adblock(s),
						postFlair: {
							title: i
						}
					}
				},
				S = (e, t, r, o, n) => i => {
					const s = O.listing(i, e);
					s && (s.sort = t, n && (s.sortTime = n));
					const {
						api: c
					} = i.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: s,
						source: "global",
						action: "view",
						noun: "screen",
						...w(i),
						actionInfo: O.actionInfo(i, {
							success: a
						}),
						profile: O.profile(i),
						snoovatar: O.snoovatar(i),
						subreddit: O.subreddit(i),
						timer: O.timer(r, o),
						userSubreddit: O.userSubreddit(i),
						adblock: O.adblock(i)
					}
				},
				E = (e, t, r, o, n) => i => {
					const s = O.listing(i, e);
					s && (s.sort = t, n && (s.sortTime = n));
					const {
						api: c
					} = i.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: s,
						source: "global",
						action: "view",
						noun: "screen",
						...w(i),
						actionInfo: O.actionInfo(i, {
							success: a
						}),
						profile: O.profile(i),
						subreddit: O.subreddit(i),
						timer: O.timer(r, o),
						userSubreddit: O.userSubreddit(i),
						adblock: O.adblock(i)
					}
				},
				x = (e, t, r, o, n) => i => {
					const s = O.profileComments(i, e);
					s && (s.sort = t, n && (s.sortTime = n));
					const {
						api: c
					} = i.profileCommentsPage, a = !c.error[e] && !c.pending[e];
					return {
						listing: s,
						source: "global",
						action: "view",
						noun: "screen",
						...w(i),
						actionInfo: O.actionInfo(i, {
							success: a
						}),
						profile: O.profile(i),
						subreddit: O.subreddit(i),
						timer: O.timer(r, o),
						userSubreddit: O.userSubreddit(i),
						adblock: O.adblock(i)
					}
				},
				T = e => (t, r) => o => {
					const n = !o.profilePrivatePage.api.error[e] && !o.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...w(o),
						actionInfo: O.actionInfo(o, {
							success: n
						}),
						profile: O.profile(o),
						subreddit: O.subreddit(o),
						timer: O.timer(r, t),
						userSubreddit: O.userSubreddit(o),
						adblock: O.adblock(o)
					}
				},
				P = (e, t, r, o, n, i) => s => {
					const {
						api: c
					} = s.pages.comments, a = !c.error[e] && !c.pending[e], l = {
						source: "global",
						action: "view",
						noun: "screen",
						...w(s),
						actionInfo: O.actionInfo(s, {
							success: a
						}),
						post: O.post(s, t),
						profile: O.profile(s),
						subreddit: O.subreddit(s),
						timer: O.timer(o, n),
						userSubreddit: O.userSubreddit(s),
						adblock: O.adblock(s),
						postEvent: O.postEventI13nSelector(s, {
							postId: t
						}),
						postCollection: O.postCollectionI13nSelector(s, {
							postId: t
						}),
						listing: O.listing(s, void 0, {
							sort: i
						})
					};
					return r && (l.comment = O.comment(s, r)), l
				},
				C = (e, t, r) => o => {
					const n = o.creations.api.page.fetched[e],
						i = o.platform.currentPage ? o.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...w(o),
						actionInfo: O.actionInfo(o, {
							success: n
						}),
						post: i ? O.post(o, i) : void 0,
						subreddit: O.subreddit(o),
						timer: O.timer(t, r),
						userSubreddit: O.userSubreddit(o),
						adblock: O.adblock(o)
					}
				},
				D = (e, t) => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...w(e),
						actionInfo: O.actionInfo(e, {
							success: t
						})
					})
				},
				N = (e, t, r, o) => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...w(e),
						actionInfo: O.actionInfo(e, {
							success: t
						}),
						profile: O.profileById(e, Object(_.m)(e, o)),
						subreddit: O.subredditById(e, Object(m.B)(e, r)),
						userSubreddit: O.userSubreddit(e),
						adblock: O.adblock(e)
					})
				},
				L = (e, t, r) => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...w(e),
						profile: O.profileById(e, Object(_.m)(e, r)),
						subreddit: O.subredditById(e, Object(m.B)(e, t)),
						userSubreddit: O.userSubreddit(e),
						adblock: O.adblock(e)
					})
				},
				U = e => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...w(e),
						actionInfo: O.actionInfo(e)
					})
				},
				A = e => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...w(e),
						actionInfo: O.actionInfo(e)
					})
				},
				R = (e, t, r, o, n) => {
					const i = e.creations.api.page.pending[t],
						s = !e.creations.api.page.error[t] && !i && !!r,
						c = Object(I.h)(e, r);
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...w(e),
						actionInfo: O.actionInfo(e, {
							success: s
						}),
						subreddit: O.subreddit(e),
						timer: O.timer(o, n),
						userSubreddit: O.userSubreddit(e),
						adblock: O.adblock(e),
						...c ? Object(d.n)(e, c) : {}
					})
				},
				B = (e, t) => r => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(h.c)(h.a.GoldPayment),
					...w(r),
					timer: O.timer(e, t),
					adblock: O.adblock(r)
				}),
				M = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...w(e)
				}),
				F = (e, t) => r => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(h.c)(h.a.GoldPayment),
					...w(r),
					timer: O.timer(e, t),
					adblock: O.adblock(r)
				}),
				H = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...w(e)
				}),
				K = (e, t) => r => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...w(r),
					timer: O.timer(e, t)
				}),
				W = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...w(r),
					timer: O.timer(e, t)
				}),
				G = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: O.subreddit(e),
					...w(e)
				}),
				q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...w(e)
				}),
				z = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...w(e)
				}),
				V = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...w(r),
					customFeed: O.customFeed(r),
					subreddit: O.subreddit(r),
					timer: O.timer(e, t),
					userSubreddit: O.userSubreddit(r),
					adblock: O.adblock(r)
				}),
				Y = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...w(e)
				}),
				X = (e, t, r, o, n, s) => c => {
					let a = !0;
					if (t.type.indexOf(i.Xb.Posts) > -1) {
						const {
							api: t
						} = c.listings.listingOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(i.Xb.Subreddits) > -1 || t.type.indexOf(i.Xb.Users) > -1) {
						const {
							api: t
						} = c.listings.postOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					const l = O.paneName(c, n),
						d = O.structureType(n),
						u = c.platform.currentPage && c.platform.currentPage.urlParams && c.platform.currentPage.urlParams.subredditName ? O.subredditByName(c, c.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						...v.c(c, t),
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(c),
						actionInfo: O.actionInfo(c, {
							success: a,
							paneName: l
						}),
						timer: O.timer(r, o),
						search: {
							...O.search(c, t, !0, n || void 0),
							...!!s && {
								originElement: s
							},
							queryId: Object(h.c)(h.a.SearchResults),
							structureType: d,
							subredditId: t.restrict_sr && u && u.id ? u.id : void 0,
							subredditName: t.restrict_sr && u && u.name ? u.name : void 0
						},
						...!!s && {
							correlationId: Object(h.c)(h.a.SearchResults)
						},
						userPreferences: {
							...O.userPreferences(c),
							hideNsfw: !c.user.prefs.over18
						}
					}
				},
				$ = (e, t) => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...w(e),
						actionInfo: O.actionInfo(e, {
							success: t
						})
					})
				},
				Q = (e, t) => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...w(e),
						actionInfo: O.actionInfo(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "r", (function() {
				return p
			})), r.d(t, "q", (function() {
				return _
			})), r.d(t, "s", (function() {
				return m
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "u", (function() {
				return g
			})), r.d(t, "t", (function() {
				return h
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "x", (function() {
				return I
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "y", (function() {
				return k
			})), r.d(t, "w", (function() {
				return S
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "k", (function() {
				return P
			})), r.d(t, "e", (function() {
				return D
			})), r.d(t, "p", (function() {
				return N
			})), r.d(t, "o", (function() {
				return L
			})), r.d(t, "m", (function() {
				return U
			})), r.d(t, "n", (function() {
				return A
			})), r.d(t, "b", (function() {
				return R
			})), r.d(t, "d", (function() {
				return B
			}));
			var o = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/constants/posts.ts"),
				i = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				c = r("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				a = r("./src/reddit/selectors/posts.ts"),
				l = r("./src/reddit/selectors/telemetry.ts");
			const d = "search",
				u = "search_results_best",
				f = (e, t) => {
					const r = l.subreddit(e);
					return {
						screen: l.screen(e),
						subreddit: r && t && t.restrict_sr ? r : null
					}
				},
				p = (e, t) => r => {
					const o = t;
					return o.structureType = "related", {
						action: e,
						correlationId: Object(s.c)(s.a.SearchResults),
						noun: "related_search",
						source: d,
						search: l.search(r, o),
						...f(r)
					}
				},
				_ = (e, t, r, o) => n => ({
					...f(n, r),
					source: d,
					action: "click",
					noun: t,
					actionInfo: l.actionInfo(n, o ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: o ? l.discoveryUnit(o) : null,
					search: l.search(n, r),
					post: l.post(n, e),
					media: l.media(n, e)
				}),
				m = (e, t, r, o, n) => i => ({
					...T(i, e, t, n, o, r),
					noun: "ad"
				}),
				b = (e, t, r) => n => {
					let i = !0;
					if (t.type.indexOf(o.Xb.Posts) > -1) {
						const {
							api: t
						} = n.listings.listingOrder;
						i = i && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(o.Xb.Subreddits) > -1 || t.type.indexOf(o.Xb.Users) > -1) {
						const {
							api: t
						} = n.listings.postOrder;
						i = i && !t.error[e] && !t.pending[e]
					}
					return {
						...f(n, t),
						source: d,
						action: "view",
						noun: "search_results_post",
						actionInfo: l.actionInfo(n, {
							success: i,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: l.discoveryUnit(r),
						search: l.search(n, t)
					}
				},
				g = (e, t) => r => ({
					action: "view",
					actionInfo: l.actionInfo(r),
					metaSearch: l.metaSearch(t),
					noun: e,
					screen: l.screen(r),
					search: l.smartSearch(r, t),
					source: d
				}),
				h = (e, t) => r => ({
					action: "click",
					actionInfo: l.actionInfo(r),
					noun: e,
					metaSearch: l.metaSearch(t),
					screen: l.screen(r),
					search: l.smartSearch(r, t),
					source: d
				}),
				v = (e, t, r) => o => ({
					source: d,
					action: "click",
					noun: l.SearchDropdownNouns.Recent,
					actionInfo: l.actionInfo(o, {
						paneName: "subreddit_dropdown",
						position: r + 1
					}),
					search: {
						query: e,
						originPageType: o.platform.currentPage ? l.getPageTypeFromCurrentPage(o.platform.currentPage) : void 0,
						queryId: Object(s.c)(s.a.SearchResults)
					},
					...O(o, t)
				}),
				I = (e, t, r, o) => n => {
					const i = o.filter(e => e.id);
					return {
						source: d,
						action: "click",
						noun: l.SearchDropdownNouns.Typeahead,
						actionInfo: l.actionInfo(n, {
							position: r + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: n.platform.currentPage ? l.getPageTypeFromCurrentPage(n.platform.currentPage) : void 0,
							queryId: Object(s.c)(s.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: i.map(e => e.id),
							numberSubreddits: i.length
						},
						...O(n, t)
					}
				},
				O = (e, t) => {
					const r = t.isSubreddit && t.id ? l.subredditForSearch(e, t.id) : void 0,
						o = t.isProfile && t.id ? l.profileForSearch(e, t.id) : void 0,
						n = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? r || n : void 0,
						profile: t.isProfile ? o || n : void 0
					}
				},
				y = (e, t, r) => o => ({
					action: t,
					actionInfo: l.actionInfo(o),
					noun: e,
					screen: l.screen(o),
					search: l.search(o, r),
					source: u
				});
			var j;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(j || (j = {}));
			const w = (e, t) => r => ({
					...f(r, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(r),
					search: l.search(r, t)
				}),
				k = (e, t) => r => ({
					...f(r, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(r),
					search: l.search(r, t)
				}),
				S = (e, t) => r => ({
					action: "click",
					correlationId: Object(s.c)(s.a.SearchResults),
					noun: e ? o.Wb.ToSubreddit : o.Wb.ToGlobal,
					search: l.search(r, t),
					source: d
				}),
				E = (e, t, r, o) => n => ({
					...f(n, r),
					source: d,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(n, {
						relativePosition: l.getRelativePostOrder(n, t, e)
					}),
					search: {
						...l.search(n, r),
						...!!o && {
							originElement: o
						}
					},
					post: l.post(n, t)
				}),
				x = (e, t, r, o, n) => i => T(i, e, t, r, o, n),
				T = (e, t, r, o, n, c) => {
					const a = l.paneName(e, o),
						u = C(e, t, n, c),
						f = l.amountOfElementsBeforePost(e, r, n, c, a),
						p = null !== u ? f + u : null,
						_ = l.structureType(o),
						m = {
							...l.search(e, r, !0, o || void 0),
							structureType: _,
							queryId: Object(s.c)(s.a.SearchResults)
						};
					return {
						source: d,
						action: i.c.CLICK,
						noun: "post",
						actionInfo: o ? {
							pageType: l.getPageTypeFromCurrentPage(o),
							paneName: a,
							position: p,
							relativePosition: u
						} : l.actionInfo(e, {
							paneName: a,
							position: p,
							relativePosition: u
						}),
						search: m,
						post: l.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: c ? l.discoveryUnit(c) : null
					}
				},
				P = (e, t, r, o, n, i) => s => D(s, e, t, r, o, n, i),
				C = (e, t, r, o) => {
					var n;
					return (null === (n = null == o ? void 0 : o.layout) || void 0 === n ? void 0 : n.viewTypeWeb) === c.b.Hero ? 0 : (null == o ? void 0 : o.postOrder) ? o.postOrder.indexOf(t) : r ? l.getRelativePostOrder(e, t, r) : null
				},
				D = (e, t, r, o, c, u, f) => {
					if (!o) {
						o = Object(a.H)(e, {
							postId: u
						}).belongsTo
					}
					const p = l.paneName(e, r);
					let _, m;
					if (u) {
						_ = C(e, u, c, f);
						const r = l.amountOfElementsBeforePost(e, t, c, f, p);
						m = null !== _ ? r + _ : null
					} else {
						_ = ((e, t, r, o) => o && o.subredditOrder ? o.subredditOrder.indexOf(t) : r ? l.getRelativeSubredditOrProfileOrder(e, t, r) : null)(e, o.id, c, f);
						const t = l.amountOfElementsBeforeCommunity(e, c, f);
						m = null !== _ ? t + _ : null
					}
					const b = l.structureType(r),
						g = {
							...l.search(e, t, !0, r || void 0),
							structureType: b,
							queryId: Object(s.c)(s.a.SearchResults)
						};
					return {
						source: d,
						action: i.c.CLICK,
						noun: o.type,
						search: g,
						subreddit: o.type === n.a.SUBREDDIT ? l.subredditForSearch(e, o.id) : void 0,
						profile: o.type === n.a.PROFILE ? l.profileForSearch(e, o.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: f ? l.discoveryUnit(f) : null,
						actionInfo: r ? {
							pageType: l.getPageTypeFromCurrentPage(r),
							paneName: p,
							position: m,
							relativePosition: _
						} : l.actionInfo(e, {
							paneName: p,
							position: m,
							relativePosition: _
						}),
						post: u ? l.post(e, u) : void 0
					}
				},
				N = (e, t) => r => ({
					...f(r, e),
					source: d,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(r),
					search: {
						...l.search(r, e),
						...!!t && {
							originElement: t
						}
					},
					subreddit: l.subreddit(r)
				}),
				L = (e, t, r, o, n) => s => ({
					...T(s, t, r, o, e, n),
					action: i.c.VIEW
				}),
				U = (e, t, r, o) => n => ({
					...f(n, r),
					source: d,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(n, {
						relativePosition: l.getRelativePostOrder(n, t, e),
						position: l.getAbsoluteOrder(n, t, e)
					}),
					search: {
						...l.search(n, r),
						...!!o && {
							originElement: o
						}
					},
					post: l.post(n, t)
				}),
				A = (e, t, r) => o => ({
					...f(o),
					source: d,
					action: "click",
					noun: `search_result_${e}`,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(o),
					search: {
						...l.search(o, t),
						...!!r && {
							originElement: r
						}
					},
					[e]: l[e](o)
				}),
				R = (e, t) => r => ({
					...f(r, t),
					source: d,
					action: e,
					noun: "covid_banner",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(r),
					search: l.search(r, t)
				}),
				B = e => ({
					action: i.c.DISABLE,
					noun: "subreddit_search",
					source: "search",
					subreddit: {
						id: null == e ? void 0 : e.id,
						name: null == e ? void 0 : e.name,
						nsfw: null == e ? void 0 : e.isNSFW,
						quarantined: null == e ? void 0 : e.isQuarantined
					}
				})
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/react/index.js");
			t.a = function(e, t, r) {
				Object(o.useEffect)(() => {
					const o = e && e.current;
					if (!o || "undefined" == typeof IntersectionObserver) return;
					const n = new IntersectionObserver(t, r);
					return n.observe(o), () => {
						n.unobserve(o)
					}
				}, [e, t, r])
			}
		},
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var o = r("./src/reddit/components/TrackingHelper/index.tsx");
			const n = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var i = r("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, r, o) => n => {
				const s = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(i.defaults)(n),
					actionInfo: Object(i.actionInfo)(n),
					geo: Object(i.geo)(n),
					screen: Object(i.screen)(n),
					subreddit: Object(i.subreddit)(n),
					outbound: Object(i.outboundLinkData)(n, e, t, o, r)
				};
				return r && (s.comment = Object(i.comment)(n, r)), o && (s.post = Object(i.post)(n, o)), s
			};
			var c = r("./src/lib/serviceWorker/index.ts"),
				a = r("./node_modules/react-redux/es/index.js");
			const l = () => {
				const e = Object(a.f)();
				return t => {
					Object(c.b)("sendV2Event", t(e.getState()))
				}
			};

			function d() {
				const e = Object(o.b)(),
					t = l();
				return (r, o, i, c) => {
					var a, l;
					if (o && function(e) {
							return !e.startsWith("/") && null == e.match(n)
						}(r)) {
						const n = s(r, o, i, c);
						(null === (l = null === (a = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === a ? void 0 : a.serviceWorker) || void 0 === l ? void 0 : l.controller) ? t(n): e(n)
					}
				}
			}
		},
		"./src/reddit/icons/fonts/helpers.m.less": function(e, t, r) {
			e.exports = {
				TooltipDesc: "_37iEJpUpWXN00_fpZKHglg",
				tooltipDesc: "_37iEJpUpWXN00_fpZKHglg"
			}
		},
		"./src/reddit/icons/fonts/helpers.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return d
			}));
			var o = r("./node_modules/react/index.js"),
				n = r.n(o),
				i = r("./src/reddit/icons/fonts/helpers.m.less"),
				s = r.n(i),
				c = r("./src/lib/constants/icons.ts"),
				a = r("./src/lib/lessComponent.tsx");
			const l = (e, t) => `icon icon-${e}${t&&!e.includes("fill")&&c.a[`${e}_fill`]?"_fill":""}`,
				d = a.a.wrapped(e => n.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", s.a)
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			}));
			var o = r("./node_modules/react/index.js"),
				n = r.n(o),
				i = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/fonts/helpers.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}
			const a = ({
					className: e,
					isFilled: t,
					name: r,
					...o
				}) => n.a.createElement("i", c({
					className: Object(i.a)(e, Object(s.b)(r, t))
				}, o)),
				l = (e, t) => r => n.a.createElement(a, c({
					name: e
				}, t, r, {
					isFilled: (null == t ? void 0 : t.isFilled) || (null == r ? void 0 : r.isFilled),
					className: Object(i.a)(null == t ? void 0 : t.className, null == r ? void 0 : r.className)
				}));
			t.a = a
		},
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/react/index.js"),
				n = r.n(o);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", i({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("polygon", {
				fill: "inherit",
				points: "11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"
			}))
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.m.less": function(e, t, r) {
			e.exports = {
				defaultInactiveState: "_1g3Xfh9mljLHWv24M9A3Rw",
				outline: "_3SlBAJb2MbUHwgBZFH8eL7",
				highlighted: "_1-JQy00VxG8hpTxxdxV32y"
			}
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.tsx": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/react/index.js"),
				n = r.n(o),
				i = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				c = r.n(s);
			t.a = Object(o.forwardRef)(({
				className: e,
				isHighlighted: t,
				outlineClassName: r
			}, o) => n.a.createElement("svg", {
				className: Object(i.a)(c.a.defaultInactiveState, e),
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				width: "12",
				height: "12",
				ref: o
			}, n.a.createElement("circle", {
				cx: "6",
				cy: "6",
				r: "4"
			}), n.a.createElement("path", {
				className: Object(i.a)(c.a.outline, r, {
					[c.a.highlighted]: t
				}),
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooSilhouette/index.tsx": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/react/index.js"),
				n = r.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 320 320",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"
			}), n.a.createElement("path", {
				d: "m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
			}), n.a.createElement("path", {
				d: "m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"
			}), n.a.createElement("path", {
				d: "m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
			}), n.a.createElement("path", {
				d: "m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
			}), n.a.createElement("path", {
				d: "m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
			}), n.a.createElement("path", {
				d: "m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
			}), n.a.createElement("path", {
				d: "m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"
			}), n.a.createElement("path", {
				d: "m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
			}), n.a.createElement("path", {
				d: "m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
			}), n.a.createElement("path", {
				d: "m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
			}), n.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
			}), n.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z",
				fill: "none"
			}), n.a.createElement("path", {
				d: "m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
			}), n.a.createElement("circle", {
				cx: "238.47",
				cy: "80.13",
				r: "22.93"
			}), n.a.createElement("path", {
				d: "m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
			})))
		},
		"./src/reddit/models/ApiRequestState/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return s
			}));
			var o, n = r("./node_modules/uuid/v4.js"),
				i = r.n(n);
			! function(e) {
				e[e.Pending = 0] = "Pending", e[e.Complete = 1] = "Complete", e[e.Failed = 2] = "Failed"
			}(o || (o = {}));
			const s = () => i()()
		},
		"./src/reddit/selectors/experiments/topPosts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return l
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return f
			}));
			var o = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/user.ts");
			const a = Object(o.a)(c.K, (e, {
					pageLayer: t
				}) => Object(i.z)(t), (e, {
					pageLayer: t
				}) => Object(i.M)(t), (e, t, r) => !e && !t && r),
				l = Object(o.a)((e, t) => Object(s.c)(e, {
					experimentName: n.Fb,
					experimentEligibilitySelector: e => a(e, t)
				}), e => e),
				d = e => e === n.ee.NoCommunityWidgets,
				u = e => e === n.ee.NoRulesModerators,
				f = e => e === n.ee.RelatedPostsDu
		},
		"./src/reddit/selectors/tooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return n
			}));
			const o = e => e.tooltipId,
				n = e => t => t.tooltipId === e
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.988a0f0dea3256ffccc3.js.map