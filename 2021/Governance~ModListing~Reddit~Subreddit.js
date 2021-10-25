// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.f6a1c63f3dc1df6a8502.js
// Retrieved at 10/25/2021, 7:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~ModListing~Reddit~Subreddit"], {
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/lib/CSSVariableProvider/index.tsx");

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const t = t => o.a.createElement(i.b.Consumer, null, r => o.a.createElement(e, s({
					theme: r
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
		},
		"./src/lib/assertNever.ts": function(e, t, r) {
			"use strict";

			function n(e) {
				throw new Error(`Unexpected object: ${e}`)
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/constants/icons.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
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
		"./src/lib/filterQueryParams/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lodash/omit.js"),
				o = r.n(n),
				i = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				s = r.n(i);
			t.a = (e, t) => {
				const r = s.a.parse(e, !0);
				return r.search = void 0, r.query = {
					...o()(r.query, t)
				}, s.a.format(r)
			}
		},
		"./src/lib/formatApiError/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/constants/index.ts");

			function i(e, t) {
				return e ? e.fields && e.fields.length ? e.fields.map(e => e.msg).join(", ") : e.type && s[e.type] ? s[e.type]() : 401 === t ? n.fbt._("There was an authentication error", null, {
					hk: "2KZTRv"
				}) : n.fbt._("Something went wrong", null, {
					hk: "3i6szH"
				}) : ""
			}
			const s = {
				[o.j]: () => n.fbt._("you're not allowed to do that", null, {
					hk: "1jGKQw"
				}),
				[o.K]: () => n.fbt._("GIF size must be less than {max file size}MB", [n.fbt._param("max file size", Math.floor(o.Y / o.gb).toString())], {
					hk: "1zzsdM"
				}),
				[o.Q]: () => n.fbt._("Image size must be less than {max file size}MB", [n.fbt._param("max file size", Math.floor(o.ab / o.gb).toString())], {
					hk: "3H6bF8"
				}),
				[o.S]: () => n.fbt._("Sorry, we accept only images (.png, .jpeg, .gif) and videos (.mp4, .mov)", null, {
					hk: "1hw868"
				}),
				[o.kc]: () => n.fbt._("Video size must be less than {max file size}GB", [n.fbt._param("max file size", (o.eb / o.gb / 1024).toFixed(1))], {
					hk: "4FkABU"
				})
			}
		},
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, r) {
			"use strict";

			function n(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/realtime/GQLSubscription/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				o = r("./src/lib/loadWithRetries/index.ts");
			const i = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(o.a)(() => Promise.all([r.e("vendors~RealtimeGQLSubscriptionAsync"), r.e("RealtimeGQLSubscriptionAsync")]).then(r.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
			});
			t.a = i
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
			var n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/models/ApiRequestState/index.ts");
			const i = "API_REQUEST_STATE__STARTED",
				s = "API_REQUEST_STATE__COMPLETED",
				c = "API_REQUEST_STATE__FAILED",
				a = "API_REQUEST_STATE__RELEASED";

			function l(e) {
				return {
					type: i,
					payload: {
						apiRequestStatus: o.a.Pending,
						apiRequestId: e
					}
				}
			}

			function d(e) {
				return {
					type: s,
					payload: {
						apiRequestStatus: o.a.Complete,
						apiRequestId: e
					}
				}
			}

			function u(e, t) {
				return {
					type: c,
					payload: {
						apiRequestStatus: o.a.Failed,
						apiRequestId: e,
						apiError: t
					}
				}
			}
			const f = Object(n.a)(a)
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const o = "EMBEDS__UNLOADABLE",
				i = "EMBEDS__LOADABLE",
				s = Object(n.a)(o),
				c = Object(n.a)(i)
		},
		"./src/reddit/actions/pages/modListing/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return n
			})), r.d(t, "e", (function() {
				return o
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
			const n = "PAGE__MOD_LISTING_PAGE_PENDING",
				o = "PAGE__MOD_LISTING_PAGE_LOADED",
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
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			}));
			const n = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_PENDING",
				o = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_LOADED",
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
			var n = r("./src/lib/makeActionCreator/index.ts"),
				o = (r("./src/reddit/actions/embedAndImage.ts"), r("./src/reddit/actions/video.ts"), r("./src/reddit/helpers/trackers/postList.ts"));
			r("./src/reddit/constants/postLayout.ts"), r("./src/reddit/models/Media/index.ts"), r("./src/reddit/selectors/platform.ts"), r("./src/reddit/selectors/posts.ts");
			r("./src/reddit/selectors/video.ts");
			const i = "POSTLIST__MARKED_END",
				s = "POSTLIST__UNMARKED_END",
				c = Object(n.a)(i),
				a = Object(n.a)(s),
				l = (e, t) => async (r, n) => {
					const i = n();
					e in i.listings.postOrder.fetchedTokens ? e in i.listings.postOrder.ids ? r(a({
						listingKey: e
					})) : o.l(i, e) : r(c({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/structuredStyles/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return n
			})), r.d(t, "k", (function() {
				return o
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
			const n = "STRUCTURED_STYLES__STYLES_RESET_PENDING",
				o = "STRUCTURED_STYLES__STYLES_RESET_LOADED",
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
				return M
			})), r.d(t, "j", (function() {
				return z
			})), r.d(t, "e", (function() {
				return Y
			})), r.d(t, "d", (function() {
				return Q
			})), r.d(t, "g", (function() {
				return X
			})), r.d(t, "c", (function() {
				return Z
			})), r.d(t, "f", (function() {
				return te
			})), r.d(t, "b", (function() {
				return re
			})), r.d(t, "m", (function() {
				return ne
			})), r.d(t, "a", (function() {
				return oe
			})), r.d(t, "h", (function() {
				return ie
			})), r.d(t, "i", (function() {
				return se
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/omit.js"),
				o = r.n(n),
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
				m = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				b = r("./src/reddit/selectors/postFlair.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const O = Object(d.a)(h.c),
				v = Object(d.a)(h.b),
				I = Object(d.a)(h.a);
			var y = r("./src/reddit/actions/toaster.ts"),
				j = r("./src/reddit/actions/widgets/index.ts"),
				w = r("./src/reddit/constants/modals.ts"),
				k = r("./src/reddit/helpers/getGenericUploadError.ts"),
				S = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				E = r("./src/reddit/helpers/media/index.ts"),
				x = r("./src/reddit/models/Image/index.tsx"),
				T = r("./src/reddit/models/StructuredStyles/index.ts"),
				C = r("./src/reddit/models/Toast/index.ts"),
				P = r("./src/reddit/selectors/activeModalId.ts"),
				D = r("./src/reddit/selectors/platform.ts"),
				N = r("./src/reddit/selectors/structuredStyles.ts"),
				L = r("./src/reddit/selectors/user.ts"),
				R = r("./src/reddit/helpers/trackers/blade.ts"),
				A = r("./src/telemetry/index.ts"),
				U = r("./src/reddit/actions/structuredStyles/constants.ts");
			const B = Object(d.a)(U.m),
				F = {
					bannerBackgroundImage: ["bannerBackgroundImagePosition"],
					bannerPositionedImage: ["bannerPositionedImagePosition", "secondaryBannerPositionedImage"]
				},
				H = e => {
					const t = {
						...e
					};
					return Object.keys(e).forEach(r => {
						F[r] && !e[r] && F[r].forEach(e => t[e] = null)
					}), t
				},
				M = (e, t, r, n) => async (o, i, s) => {
					const {
						apiContext: c
					} = s, a = i(), d = H(t), p = a.structuredStyles.models[e];
					let m;
					for (const e in d)
						if (d[e] !== p[e]) {
							m = !0;
							break
						} if (!m) return;
					o(Object(u.h)(n));
					const b = Object(R.i)(r)(a);
					let h = null,
						O = null;
					try {
						(h = await Object(f.f)(i(), x.a.StructuredStyles)) && (O = Object(f.m)(h)(o, i, s))
					} catch (w) {
						const e = Object(k.a)("webSocket");
						return void o(Object(u.f)(n, e))
					}
					const v = Object(g.Q)(a, {
							subredditId: e
						}).name,
						I = await _.e(c(), v, d),
						j = {};
					if (I.ok) {
						if (O) try {
							await O
						} catch (w) {}
						const r = Object(N.f)(i(), {
							apiRequestId: n
						});
						for (const e in r)
							if (e in t) {
								const t = Object(N.g)(i(), {
									name: e
								});
								t && Object(x.j)(t) && (j[e] = r[e])
							} Object.keys(j).length && o(V(j)), o(Object(u.e)(n)), o(B({
							subredditId: e,
							styles: {
								...d,
								...j
							}
						}))
					} else h && h.websocket.close(), o(Object(u.f)(n, I.error)), I.body && o(y.f({
						kind: C.b.Error,
						text: Object(l.a)(I.error, I.status)
					}));
					Object(A.a)({
						...b,
						actionInfo: {
							...b.actionInfo,
							success: I.ok
						}
					})
				}, G = Object(d.a)(U.l), W = Object(d.a)(U.k), q = Object(d.a)(U.j), z = e => async (t, r, {
					apiContext: n
				}) => {
					t(G({
						subredditId: e
					}));
					const o = Object(g.Q)(r(), {
							subredditId: e
						}).name,
						i = await _.f(n(), o);
					if (i.ok) {
						const n = r().structuredStyles.models[e],
							o = n ? n.mobileKeyColor : null;
						t(W({
							subredditId: e,
							styles: {
								mobileKeyColor: o
							}
						}))
					} else t(q({
						subredditId: e,
						...i.error
					}))
				}, K = Object(d.a)(U.d), Y = e => async (t, r, n) => {
					const o = r(),
						i = o.structuredStyles.models[e] || {},
						s = Object(L.X)(o);
					t(K({
						isNightmodeOn: s,
						styles: i,
						subredditId: e
					})), de(e, !1)(t, r, n), (e => async (t, r, {
						gqlContext: n
					}) => {
						const o = r(),
							i = Object(g.Q)(o, {
								subredditId: e
							});
						if (!i) return;
						const s = Object(b.d)(o, {
								subredditId: e
							}),
							c = s && s.templateIds;
						if (!c || !c.length) return;
						t(O({
							subredditId: e
						}));
						const a = await Object(_.a)(n(), i.name, c);
						if (a.ok) {
							const r = {};
							if (a.body) {
								const {
									data: e
								} = a.body;
								if (e && e.subreddit)
									for (const t of e.subreddit.postFlairStyleTemplates) r[t.id] = Object(m.a)(t)
							}
							t(v({
								subredditId: e,
								templates: r
							}))
						} else t(I({
							subredditId: e,
							error: a.error
						}))
					})(e)(t, r, n), Object(j.g)(e, !1)(t, r, n)
				}, V = Object(d.a)(U.c), Q = e => async (t, r, n) => {
					const o = H(e),
						i = r();
					for (const e in o)
						if (Object(T.l)(e))
							if (o[e]) {
								if ("string" != typeof o[e]) {
									const i = o[e],
										s = await Object(x.e)(i);
									X(e, s)(t, r, n), o[e] = ""
								}
							} else {
								const r = Object(N.g)(i, {
									name: e
								});
								r && t(Object(f.h)(r))
							} t(V(o))
				}, $ = Object(d.a)(U.f), X = (e, t, r) => async (n, o, i) => {
					const s = o(),
						c = r || s.structuredStyles.isEditing,
						a = Object(g.Q)(s, {
							subredditId: c
						}).name;
					n($({
						imageKey: e,
						uploadId: t.id
					})), n(Object(f.k)(t));
					const l = await _.d(i.apiContext(), a, t.file.name, e, await Object(E.g)(t.file));
					try {
						const r = await Object(f.g)(o(), l, t, x.a.StructuredStyles);
						if (r) {
							const t = r.url;
							n(Object(f.j)(r)), n(V({
								[e]: t
							}))
						}
					} catch (d) {
						if (d instanceof Error) throw d;
						n(Object(f.i)(d))
					}
				}, J = Object(d.a)(U.b), Z = (e, t, r) => async (n, i, c) => {
					const a = i(),
						l = a.structuredStyles.models[e] || {},
						d = a.structuredStyles.draft,
						u = Object(R.h)(t)(a);
					if (r) {
						const t = s()(l, r),
							i = {
								...o()(d, r),
								...t
							};
						n(J({
							subredditId: e,
							styles: i
						}))
					} else {
						n(J({
							subredditId: e,
							styles: l
						}))
					}
					Object(A.a)(u)
				}, ee = Object(d.a)(U.e), te = () => async (e, t, r) => {
					const n = t(),
						o = Object(L.Y)(n),
						i = !!Object(D.a)(n);
					if (e(ee({
							nightmodeTempUpdated: o
						})), i) return;
					const {
						url: s
					} = n.platform.currentPage;
					s && e(Object(c.c)(Object(a.a)(s, ["styling", "route"])))
				}, re = Object(d.a)(U.a), ne = Object(d.a)(U.n), oe = () => async e => e(te()), ie = e => async (t, r) => {
					const n = r(),
						o = Object(N.i)(n);
					!Object(P.b)(w.a.BLADE_UNSAVED_CHANGES)(n) && o && (Object(N.a)(n, {
						subredditId: e
					}) ? t(Object(p.i)(w.a.BLADE_UNSAVED_CHANGES)) : t(oe()))
				}, se = e => async (t, r) => {
					const n = r();
					Object(N.i)(n) || t(Object(L.X)(n) ? Object(p.i)(w.a.BLADE_NIGHTMODE) : Y(e))
				}, ce = Object(d.a)(U.i), ae = Object(d.a)(U.h), le = Object(d.a)(U.g), de = (e, t) => async (r, n, {
					gqlContext: o,
					apiContext: i
				}) => {
					r(ce({
						subredditId: e
					}));
					const s = Object(g.Q)(n(), {
						subredditId: e
					});
					if (!s) return;
					if (!t) {
						const n = await _.c(i(), s.name, t);
						if (n.ok) {
							const t = n.body,
								o = t.data ? t.data.style : {};
							r(ae({
								subredditId: e,
								styles: o
							}))
						} else r(le({
							subredditId: e,
							...n.error
						}));
						return
					}
					const c = await _.b(o(), s.name);
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
				return n
			})), r.d(t, "i", (function() {
				return o
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
			const n = "WIDGETS__WIDGET_CREATED",
				o = "WIDGETS__WIDGET_UPDATED",
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
				return C
			})), r.d(t, "f", (function() {
				return D
			})), r.d(t, "g", (function() {
				return A
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
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
				b = r("./src/reddit/models/Widgets/index.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/reddit/models/Image/index.tsx"),
				O = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/actions/widgets/constants.ts");
			const I = Object(o.a)(v.g),
				y = (e, t, r) => async (o, f, _) => {
					const {
						apiContext: m
					} = _;
					o(Object(i.h)(r));
					const v = f(),
						y = Object(g.Q)(v, {
							subredditId: e
						}).name,
						j = Object(b.p)(t);
					let w = null,
						k = null;
					try {
						(w = await Object(s.f)(v, h.a.Widgets)) && (k = Object(s.m)(w)(o, f, _))
					} catch (E) {
						const e = Object(p.a)("webSocket");
						return void o(Object(i.f)(r, e))
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
						if ("calendar" === t.kind && o(Object(c.f)({
								kind: O.b.SuccessMod,
								text: n.fbt._("New calendar added! It may take a few minutes to see your events appear", null, {
									hk: "4iETrT"
								})
							})), w) {
							try {
								await k
							} catch (E) {}
							s = await o(U(e, a)) || s
						}
						o(I({
							subredditId: e,
							widget: s,
							widgetId: a
						})), o(Object(i.e)(r))
					} else w && w.websocket.close(), o(Object(i.f)(r, S.error))
				}, j = Object(o.a)(v.i), w = (e, t, r) => async (o, f, _) => {
					const {
						apiContext: v
					} = _;
					o(Object(i.h)(r));
					const I = t.id,
						y = f(),
						w = Object(g.Q)(y, {
							subredditId: e
						}).name,
						k = Object(b.p)(t);
					let S = null,
						E = null;
					try {
						(S = await Object(s.f)(y, h.a.Widgets)) && (E = Object(s.m)(S)(o, f, _))
					} catch (T) {
						const e = Object(p.a)("webSocket");
						return void o(Object(i.f)(r, e))
					}
					const x = await (async (e, t, r) => Object(l.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget/${r.id}`,
						method: a.ib.PUT,
						type: "json",
						data: r
					}))(v(), w, k);
					if (x.ok) {
						let s = function(e, t, r) {
							switch (e.kind) {
								case b.i.Calendar:
								case b.i.IdCard:
								case b.i.SubredditRules:
									return {
										...e, ...t
									};
								case b.i.CommunityList: {
									const n = {};
									for (const t of e.data) n[t.name] = t;
									return {
										...t,
										data: t.data.map(e => {
											if (!("subscribers" in n[e])) {
												const t = {
														subredditName: e
													},
													n = Object(g.w)(r, t),
													o = Object(g.t)(r, t);
												return {
													name: n.name,
													subscribers: n ? n.subscribers : void 0,
													iconUrl: n ? n.communityIcon : void 0,
													isNSFW: n ? n.isNSFW : void 0,
													isSubscribed: o ? o.userIsSubscriber : void 0
												}
											}
											return n[e]
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
									return Object(m.a)(e)
							}
						}(t, x.body, y);
						if (E) {
							try {
								await E
							} catch (T) {}
							s = await o(U(e, I)) || s
						}
						o(j({
							subredditId: e,
							widgetId: I,
							widget: s
						})), "calendar" === t.kind && o(Object(c.f)({
							kind: O.b.SuccessMod,
							text: n.fbt._("Calendar is updated! It may take a few minutes to see your events change", null, {
								hk: "10XWV"
							})
						})), o(Object(i.e)(r))
					} else S && S.websocket.close(), o(Object(i.f)(r, x.error))
				}, k = Object(o.a)(v.h), S = (e, t, r) => async (n, o, {
					apiContext: s
				}) => {
					n(Object(i.h)(r));
					const c = t.id,
						f = Object(g.Q)(o(), {
							subredditId: e
						}).name,
						p = await (async (e, t, r) => Object(l.a)(Object(d.a)(e, [u.a]), {
							endpoint: `${e.apiUrl}/r/${t}/api/widget/${r.id}`,
							method: a.ib.DELETE,
							type: "json"
						}))(s(), f, t);
					p.ok ? (n(Object(i.e)(r)), n(k({
						subredditId: e,
						widgetId: c
					}))) : n(Object(i.f)(r, p.error))
				}, E = Object(o.a)(v.f), x = (e, t) => async (r, n, {
					apiContext: o
				}) => {
					const i = Object(g.Q)(n(), {
						subredditId: e
					}).name;
					(await (async (e, t, r) => Object(l.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget_order/sidebar`,
						method: a.ib.PATCH,
						type: "json",
						data: r
					}))(o(), i, t)).ok && r(E({
						subredditId: e,
						widgetIds: t
					}))
				}, T = ({
					imageData: e
				}) => async (t, r, n) => {
					const o = r(),
						i = o.structuredStyles.isEditing,
						c = Object(g.Q)(o, {
							subredditId: i
						}).name;
					t(Object(s.k)(e));
					const f = await (async (e, t, r, n) => Object(l.a)(Object(d.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget_image_upload_s3`,
						method: a.ib.POST,
						data: {
							filepath: r,
							mimetype: n
						}
					}))(n.apiContext(), c, e.file.name, await Object(_.g)(e.file));
					let p = !1;
					try {
						const n = await Object(s.g)(r(), f, e, h.a.Widgets);
						n && (t(Object(s.j)(n)), p = !0)
					} catch (m) {
						if (m instanceof Error) throw m;
						t(Object(s.i)(m))
					}
					return p
				}, C = Object(o.a)(v.d), P = Object(o.a)(v.e), D = (e, t) => async (r, n, {
					apiContext: o
				}) => {
					r(Object(i.h)(t));
					const s = Object(g.Q)(n(), {
							subredditId: e
						}).name,
						c = await f(o(), s);
					if (c.ok) {
						const n = c.body;
						r(P({
							subredditId: e,
							widgets: n
						})), r(Object(i.e)(t))
					} else r(Object(i.f)(t, c.error))
				}, N = Object(o.a)(v.c), L = Object(o.a)(v.b), R = Object(o.a)(v.a), A = (e, t) => async (r, n, {
					apiContext: o
				}) => {
					r(N({
						subredditId: e
					}));
					const i = Object(g.Q)(n(), {
							subredditId: e
						}).name,
						s = await f(o(), i, t);
					if (s.ok) {
						const t = s.body;
						r(L({
							subredditId: e,
							widgets: t
						}))
					} else r(R({
						subredditId: e,
						error: s.error
					}))
				}, U = (e, t) => async (r, n, {
					apiContext: o
				}) => {
					const i = Object(g.Q)(n(), {
							subredditId: e
						}).name,
						s = await f(o(), i, !0);
					if (s.ok) return s.body.items[t]
				}
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/react/index.js");
			const n = e => new Promise((t, r) => {
				const n = new Image;
				n.onload = () => t(n), n.onerror = r, n.src = e
			})
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lottie-web/build/player/lottie.js"),
				o = r.n(n),
				i = r("./node_modules/react/index.js"),
				s = r.n(i),
				c = r("./src/reddit/components/LottieAnimation/util.ts");
			const a = s.a.memo(e => {
				const t = s.a.createRef(),
					{
						assetData: r,
						assetUrl: n,
						className: a,
						hidden: l,
						loop: d,
						useCanvasRenderer: u,
						onClick: f,
						prefersReducedAnimation: p
					} = e,
					[_, m] = Object(i.useState)(r);
				Object(i.useEffect)(() => {
					n ? Object(c.a)(n).then(m) : r && m(r)
				}, [n, r]);
				const [b, g] = Object(i.useState)(null);
				Object(i.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || b || !_) return;
					const r = o.a.loadAnimation({
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
				return o
			}));
			r("./src/reddit/components/ImageWithFallback/index.tsx");
			const n = {};

			function o(e) {
				let t = n[e];
				return t || (t = n[e] = fetch(e, {
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
				return n
			}));
			var n, o, i = r("./node_modules/react/index.js"),
				s = r.n(i),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(n || (n = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(o || (o = {}));
			var l = r("./src/lib/constants/index.ts"),
				d = r("./src/reddit/helpers/postCollection.ts");
			const u = [l.Lb.COMMENTS, l.Lb.COLLECTION_COMMENTS],
				f = (e, t) => {
					if (!e) return [];
					const r = u.includes(e),
						o = e === l.Lb.COLLECTION_COMMENTS || t && Object(d.a)(t),
						i = l.U.has(e),
						s = l.Bb.has(e),
						c = e === l.Lb.SUBREDDIT,
						a = e === l.Lb.TOPIC;
					let f, p, _;
					return i && !c || s ? f = n.HeaderSelector : o ? f = n.Collection : r ? f = n.PostComments : a && (f = n.TopicHeader), (i || s || o || r) && (p = n.Widget), (i || r) && (_ = n.PostItem), [f, p, _]
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
				O = Object(c.b)(() => Object(a.a)((e, {
					pageLayer: t
				}) => t && Object(_.m)(e, {
					page: t
				}), (e, {
					pageLayer: t
				}) => t && t.meta && t.meta.name, (e, {
					type: t
				}) => t, (e, t, r) => ({
					level: f(t, e).indexOf(r) + 1 || void 0
				})));
			class v extends s.a.Component {
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
			t.b = h(O(v))
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
				return j
			}));
			var n = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react/index.js"),
				s = r.n(i),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/components/UserIcon/index.tsx"),
				u = r("./src/reddit/constants/colors.ts"),
				f = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				_ = r("./src/reddit/icons/fonts/index.tsx"),
				m = r("./src/reddit/models/Subreddit/index.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/components/SubredditIcon/index.m.less"),
				h = r.n(g);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = l.a.wrapped(d.a, "UserIcon", h.a),
				I = l.a.img("Image", h.a),
				y = ({
					iconColor: e,
					...t
				}) => s.a.createElement(I, O({
					style: {
						backgroundColor: e || ""
					}
				}, t)),
				j = l.a.div("BackupImage", h.a),
				w = Object(f.u)();
			t.b = w(e => {
				const t = Object(c.e)(b.X);
				let r, i, l;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: n
					} = Object(p.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(m.h)(e.subredditOrProfile) ? l = s.a.createElement(v, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (r = t, i = n)
				} else r = e.shouldHideNsfwIcon ? `${n.a.assetPath}/img/avatar_over18.png` : e.iconUrl, i = e.primaryColor || u.b.alienblue;
				return r ? l = s.a.createElement(y, {
					alt: o.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: i,
					role: "presentation",
					src: r
				}) : l || (l = s.a.createElement(_.a, {
					name: "community",
					isFilled: !t,
					className: Object(a.a)(e.className, h.a.defaultCommunityIcon, {
						[h.a.mNightmode]: t
					}),
					style: t ? {
						backgroundColor: e.redditStyle ? u.b.alienblue : i
					} : {
						color: e.redditStyle ? u.b.alienblue : i
					}
				})), e.linkTo ? s.a.createElement("a", {
					href: e.linkTo
				}, l) : s.a.createElement(s.a.Fragment, null, l)
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
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				c = r("./src/telemetry/index.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = o.a.createContext(() => {});

			function d({
				children: e
			}) {
				const t = Object(i.f)(),
					r = Object(n.useCallback)(e => {
						{
							const r = t.getState(),
								n = e(r);
							Object(c.a)({
								...s.defaults(r),
								...n
							})
						}
					}, [t]);
				return o.a.createElement(l.Provider, {
					value: r
				}, e ? o.a.Children.only(e) : null)
			}

			function u() {
				return Object(n.useContext)(l)
			}

			function f(e) {
				function t(t) {
					const r = u();
					return o.a.createElement(e, a({}, t, {
						sendEvent: r
					}))
				}
				const r = e.name || e.displayName;
				return t.displayName = `Tracked(${r})`, t.WrappedComponent = e, t
			}
		},
		"./src/reddit/components/UserIcon/PresenceDot.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = r("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				a = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				l = r.n(a);
			t.default = e => {
				const {
					showPresence: t,
					onceInViewport: r
				} = e, a = Object(n.useRef)(null), d = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && r && r()
					})
				}, [r]);
				return Object(s.a)(a, d), o.a.createElement(c.a, {
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
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
					alt: n.fbt._("User avatar", null, {
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
				isProfileIcon: "_1lxVpLf3223Gve3gRhbG-R",
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
			var n = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react/index.js"),
				s = r.n(i),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				f = r.n(u);
			const p = `${n.a.assetPath}/img/avatar_over18_square.png`,
				_ = e => !e || e.includes("avatar_default_");
			t.b = e => {
				const {
					className: t,
					iconUrl: r,
					isCurrentUser: n,
					isNightMode: i,
					isNSFW: u,
					nsfwIconUrl: m,
					shouldHideNSFW: b
				} = e;
				if (Object(c.e)(e => {
						_(r) && Object(d.i)(e)
					}), n && _(r) || !n && !r) return s.a.createElement(l.a, {
					className: Object(a.a)(f.a.DefaultUserIcon, t, {
						[f.a.mNightmode]: i
					})
				});
				const g = !n && u && b ? m || p : r;
				return s.a.createElement("img", {
					alt: o.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(a.a)(f.a.UserIcon, t),
					src: g
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				s = r("./src/config.ts"),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				l = r("./src/realtime/GQLSubscription/async.tsx"),
				d = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				u = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				f = r("./src/reddit/models/User/index.ts"),
				p = r("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				_ = r("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = r("./src/reddit/components/UserIcon/UserIcon.tsx"),
				b = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/components/LottieAnimation/index.tsx"),
				h = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				O = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				v = r.n(O);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = () => {},
				j = Object(a.c)({
					currentUser: b.k,
					isNightMode: b.X,
					shouldHideNSFW: b.C,
					user: b.nb,
					isProfileAvatarChangeFixEnabled: h.a
				}),
				w = Object(c.b)(j);
			t.a = w(e => {
				const {
					authorId: t,
					collapsed: r,
					currentUser: c,
					iconUrl: a,
					isCommentAuthorBlocked: b,
					isHighlighted: h,
					isNft: O,
					isNSFW: j,
					isOnlineStatusLoadTest: w,
					isProfileIcon: k,
					omitResponsivePresenceWrapper: S,
					onPresenceIndicatorInViewport: E,
					shouldShowPresenceIndicator: x,
					user: T,
					userName: C,
					isProfileAvatarChangeFixEnabled: P,
					...D
				} = e, N = !!c && Object(f.e)(c) === C, L = N ? c : T, R = L && L.accountIcon || a, A = T ? T.isNSFW : j, U = Object(d.a)(R) && !b, B = U ? i.a.createElement(_.a, {
					headshot: R,
					className: e.className
				}) : i.a.createElement(m.b, I({}, D, {
					iconUrl: b && r ? "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png" : R,
					isCurrentUser: N,
					isNSFW: A
				})), [F, H] = Object(o.useState)(!1), M = Object(o.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "ONLINE_STATUS_INDICATOR",
							userID: t
						}
					}
				}), [t]), G = Object(o.useCallback)(e => {
					const {
						isOnline: t
					} = e.subscribe.data;
					H(t)
				}, []), W = Object(o.useRef)(null), [q, z] = Object(o.useState)(!1), K = Object(o.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: r
						} = e, n = 1 !== r;
						t ? z(!0) : n && z(!1)
					})
				}, []), Y = Object(o.useRef)({
					rootMargin: "750px 0px 1000px 0px"
				});
				return Object(u.a)(W, K, Y.current), S ? B : i.a.createElement("div", {
					className: Object(n.a)(v.a.userIconWrapper, {
						[v.a.nftUserIcon]: O,
						[v.a.hasHeadShotWrapper]: U,
						[v.a.isProfileIcon]: k && P
					}),
					ref: W
				}, O && i.a.createElement(g.a, {
					className: v.a.nftAnimation,
					assetUrl: `${s.a.assetPath}/img/snoovatars/nft_comment_animation.json`,
					loop: !0
				}), B, x && F && i.a.createElement(p.default, {
					showPresence: !0,
					isHighlighted: h,
					onceInViewport: E
				}), (x || w) && q && i.a.createElement(l.a, {
					variables: M,
					onData: x ? G : y,
					queryKey: "isUserOnline"
				}))
			})
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
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
			const n = "DraftEditor-contentwrapper",
				o = "public-DraftStyleDefault-block",
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
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "b", (function() {
				return s
			}));
			const n = "bladeContainer",
				o = "header",
				i = "overlayScrollContainer",
				s = "collectionPostListScrollContainer"
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, r) {
			"use strict";
			var n, o;
			r.d(t, "d", (function() {
					return n
				})), r.d(t, "c", (function() {
					return o
				})), r.d(t, "b", (function() {
					return i
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(n || (n = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(o || (o = {}));
			const i = "SHORTCUT_FOCUSABLE_DIV",
				s = [9, 13, 32]
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
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
			const n = 4,
				o = 60,
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
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const s = o.a.createContext(!1);

			function c(e) {
				function t(t) {
					return o.a.createElement(s.Consumer, null, r => o.a.createElement(e, i({}, t, {
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
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				s = r("./src/lib/domUtils/index.ts"),
				c = r("./src/reddit/constants/zIndex.ts"),
				a = r("./src/reddit/controls/Dropdown/index.m.less"),
				l = r.n(a);
			class d extends o.a.Component {
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
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? c.d + 1 : c.c)), o.a.createElement("div", {
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
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/helpers/path/index.ts"),
				a = r("./src/reddit/controls/InternalLink/index.m.less"),
				l = r.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function u({
				children: e,
				className: t,
				disabled: r,
				replace: n,
				to: a,
				...u
			}) {
				return r ? o.a.createElement("span", {
					className: Object(s.a)(l.a.disabledLink, t)
				}, e) : ("string" == typeof a && (a = Object(c.b)(a)), o.a.createElement(i.a, d({
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
			var n = r("./node_modules/lodash/omit.js"),
				o = r.n(n),
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
				O = r("./src/reddit/helpers/trackers/ads.ts"),
				v = r("./src/reddit/hooks/useOutboundClickTracking.ts"),
				I = r("./src/reddit/selectors/posts.ts"),
				y = r("./src/reddit/selectors/telemetry.ts"),
				j = r("./src/reddit/selectors/user.ts");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = Object(d.a)(j.a, j.k, (e, {
					isSponsored: t,
					postId: r
				}) => t && r ? Object(I.b)(e, r) : null, I.H, y.actionInfo, (e, t, r, n, o) => ({
					allowClickTracking: e,
					basePixelMetadata: r,
					userId: t ? Object(_.a)(t.id) : null,
					post: n,
					pageType: o.pageType
				})),
				S = Object(l.b)(k, e => ({
					fireAdPixelsOfType: (t, r) => e(Object(m.z)(t, r)),
					recordClick: (t, r, n) => {
						const o = t.events.filter(({
							type: e,
							url: t
						}) => e === b.a.Click && Object(h.b)(t));
						Object(h.c)(o), e(Object(m.p)(String(r), {
							postId: t.id,
							vendorMetadata: n
						}))
					}
				})),
				E = (e, t, r, n) => {
					const o = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					n && t.outboundUrl && o && (e.href = f(t.outboundUrl, r), e.href = function(e) {
						return Object(u.a)(e, {
							web_redirect: "true"
						})
					}(e.href))
				},
				x = (e, t, r) => {
					let n, o = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(r)) {
						o = Object(g.a)(e, t, b.a.Click);
						const {
							url: i,
							query: c
						} = s.a.parseUrl(r);
						n = s.a.stringifyUrl({
							url: i,
							query: {
								...c,
								...o
							}
						})
					} else n = r;
					return {
						url: n,
						metadata: o
					}
				},
				T = (e, t, r) => {
					const n = x(t, r, e.href);
					return e.href = n.url, n.metadata
				},
				C = ({
					isSponsored: e,
					source: t
				}) => !!(e && (null == t ? void 0 : t.outboundUrl)),
				P = S(e => {
					const t = Object(c.useRef)(null),
						r = Object(v.a)(),
						{
							allowClickTracking: n,
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
							sourceElement: I,
							userId: y
						} = e;
					let j = o()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "post", "recordClick", "commentId", "source", "sourceElement", "userId", "pageType"]);
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
						onClick: () => r(d, I, s, m)
					})) : a.a.createElement("a", w({}, j, {
						onMouseDown: r => {
							if (!C(e)) return !(1 !== r.button && 2 !== r.button && !r.ctrlKey) || void E(r.currentTarget, h, y, n);
							t.current = T(r.currentTarget, m, i)
						},
						onClick: () => {
							_ && (C(e) && (g(_, b.a.Click, t.current), Object(O.a)(_, f)), l(_, b.a.Click), r(d, I, s, m))
						},
						onMouseLeave: e => {
							u || ((e, t) => {
								e.href = t
							})(e.currentTarget, k)
						},
						onTouchStart: e => E(e.currentTarget, h, y, n),
						"data-testid": "outbound-link"
					}))
				});
			t.b = P
		},
		"./src/reddit/helpers/getTimeSortForListing/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/listingSort/index.ts");
			t.a = (e, t) => {
				if (e) return Object(o.a)(e) ? t || n.fc : void 0
			}
		},
		"./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts": function(e, t, r) {
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
			var n = r("./src/config.ts");
			t.a = (e, t) => {
				const r = t.platform.currentPage && t.platform.currentPage.url;
				let o = `${n.a.accountManagerOrigin}/login/`;
				const i = window.location.origin;
				r && (o += `?dest=${encodeURIComponent(`${i}${r}`)}`), window.location.href = o
			}
		},
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/polished/dist/polished.es.js"),
				o = r("./src/reddit/models/NewStructuredStyles/index.ts");
			const i = e => Object(n.b)(e) < .6;

			function s(e, t = o.a.bodyText, r = o.b.bodyText) {
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
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/helpers/localStorage/index.ts"),
				i = r("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, r) => o => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...i.defaults(o),
					subreddit: i.subreddit(o),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${r}` : `DESKTOP ${r}`,
						count: 1,
						type: n.f.SWITCH_HOUSE_AD
					}
				}),
				c = (e, t) => {
					t && (Object(o.yb)(e.postId), Object(o.Hb)(t)), e.impressionIdStr ? Object(o.zb)(e.impressionIdStr) : e.impressionId && Object(o.zb)(e.impressionId)
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
			var n = r("./src/reddit/constants/blade.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t) => r => ({
					...o.defaults(r),
					source: n.d.Appearance,
					action: "click",
					noun: e,
					actionInfo: o.actionInfo(r, {
						paneName: t
					}),
					subreddit: o.subreddit(r)
				}),
				s = e => i("save_style", e),
				c = e => i("cancel_style", e),
				a = e => t => ({
					source: n.d.Structure,
					action: "click",
					noun: e,
					screen: o.screen(t),
					subreddit: o.subreddit(t)
				}),
				l = e => t => ({
					source: n.d.Appearance,
					action: "click",
					noun: e,
					screen: o.screen(t),
					subreddit: o.subreddit(t)
				}),
				d = (e, t) => r => ({
					source: "colorpicker",
					action: "click",
					noun: e,
					actionInfo: o.actionInfo(r, {
						paneName: n.g[t]
					}),
					screen: o.screen(r),
					subreddit: o.subreddit(r)
				}),
				u = e => t => ({
					source: n.h[e],
					action: "click",
					noun: "colorpicker",
					actionInfo: o.actionInfo(t, {
						paneName: n.g[e]
					}),
					screen: o.screen(t),
					subreddit: o.subreddit(t)
				}),
				f = e => ({
					screen: o.screen(e),
					subreddit: o.subreddit(e)
				}),
				p = () => e => ({
					source: n.d.Appearance,
					action: "view",
					noun: "blade",
					...f(e)
				}),
				_ = e => t => ({
					source: n.a[e],
					action: "click",
					noun: n.b[e],
					...f(t)
				}),
				m = () => e => ({
					source: n.d.Appearance,
					action: "click",
					noun: "back",
					...f(e)
				}),
				b = e => t => ({
					source: n.d.PostFlairManagement,
					action: "click",
					noun: e,
					...f(t)
				}),
				g = (e, t) => ({
					...o.defaults(e),
					...b(t)(e)
				}),
				h = e => t => ({
					source: n.d.MenuLinks,
					action: "click",
					noun: e ? "wiki_link_on" : "wiki_link_off",
					screen: o.screen(t),
					subreddit: o.subreddit(t),
					userSubreddit: o.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "C", (function() {
				return I
			})), r.d(t, "B", (function() {
				return y
			})), r.d(t, "w", (function() {
				return j
			})), r.d(t, "t", (function() {
				return w
			})), r.d(t, "u", (function() {
				return k
			})), r.d(t, "E", (function() {
				return S
			})), r.d(t, "v", (function() {
				return E
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "y", (function() {
				return T
			})), r.d(t, "x", (function() {
				return C
			})), r.d(t, "p", (function() {
				return P
			})), r.d(t, "o", (function() {
				return D
			})), r.d(t, "D", (function() {
				return N
			})), r.d(t, "l", (function() {
				return L
			})), r.d(t, "k", (function() {
				return R
			})), r.d(t, "m", (function() {
				return A
			})), r.d(t, "e", (function() {
				return B
			})), r.d(t, "n", (function() {
				return H
			})), r.d(t, "i", (function() {
				return G
			})), r.d(t, "f", (function() {
				return W
			})), r.d(t, "g", (function() {
				return q
			})), r.d(t, "c", (function() {
				return z
			})), r.d(t, "A", (function() {
				return K
			})), r.d(t, "h", (function() {
				return Y
			})), r.d(t, "b", (function() {
				return V
			})), r.d(t, "r", (function() {
				return $
			})), r.d(t, "q", (function() {
				return X
			})), r.d(t, "z", (function() {
				return J
			})), r.d(t, "s", (function() {
				return Z
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/helpers/media/index.ts"),
				s = r("./src/reddit/models/PostCreationForm/index.ts"),
				c = r("./src/reddit/models/PostDraft/index.ts"),
				a = r("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				l = r("./src/reddit/selectors/postDraft.ts"),
				d = r("./src/reddit/selectors/subreddit.ts"),
				u = r("./src/reddit/selectors/telemetry.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				p = r("./src/telemetry/index.ts"),
				_ = r("./src/telemetry/models/PostComposer.ts"),
				m = r("./src/telemetry/models/PostDraft.ts");
			const b = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				g = e => ({
					source: "post_composer",
					action: n.c.CLICK,
					...u.defaults(e),
					screen: u.screen(e),
					correlationId: Object(o.c)(o.a.PostComposer)
				}),
				h = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === s.i.MARKDOWN ? "markdown" : "rte"
				},
				O = e => {
					Object(p.a)({
						noun: "cancel",
						...g(e)
					})
				},
				v = e => {
					Object(p.a)({
						noun: "discard",
						...g(e)
					})
				},
				I = e => {
					Object(p.a)({
						noun: "subreddit_choice",
						subreddit: u.subreddit(e),
						...g(e),
						actionInfo: u.chatPostActionInfo(e)
					})
				},
				y = e => {
					Object(p.a)({
						noun: "subreddit_selector",
						...g(e)
					})
				},
				j = (e, t) => {
					Object(p.a)({
						noun: "post_type_selector",
						postComposer: {
							type: b[t]
						},
						...g(e)
					})
				},
				w = () => e => ({
					noun: "add_option",
					...g(e)
				}),
				k = () => e => ({
					noun: "voting_length",
					...g(e)
				}),
				S = (e, t, r) => {
					"image_upload" === t || "video_upload" === t ? Object(p.a)({
						noun: t,
						...g(e)
					}) : Object(p.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: r ? "on" : "off"
						},
						...g(e)
					})
				},
				E = (e, t, r, n) => {
					Object(p.a)({
						noun: "post",
						subreddit: u.subreddit(e),
						postComposer: {
							type: t,
							...h(e, t)
						},
						post: r ? u.post(e, r) : null,
						...g(e),
						correlationId: n
					})
				},
				x = (e, t) => {
					const r = t === s.i.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(p.a)({
						noun: r,
						...g(e)
					})
				},
				T = (e, t) => {
					Object(p.a)({
						noun: "save",
						subreddit: u.subreddit(e),
						postComposer: {
							type: t,
							...h(e, t)
						},
						...g(e)
					})
				},
				C = (e, t) => {
					const r = e.uploads[t];
					r.error && Object(p.a)({
						...g(e),
						noun: "media",
						action: n.c.REJECT,
						actionInfo: {
							...u.actionInfo(e),
							reason: JSON.stringify(r.error)
						}
					})
				},
				P = (e, t) => {
					t.forEach(t => {
						const r = Object(i.f)(t.type);
						r && Object(p.a)({
							...g(e),
							action: n.c.DRAG,
							noun: r
						})
					})
				},
				D = (e, t, r) => {
					Object(p.a)({
						...g(e),
						noun: "input",
						postComposer: {
							inputType: r
						},
						action: t,
						actionInfo: u.chatPostActionInfo(e)
					})
				},
				N = (e, t, r) => {
					Object(p.a)({
						...g(e),
						noun: r,
						action: Object(_.getToggleAction)(t),
						actionInfo: u.chatPostActionInfo(e)
					})
				},
				L = e => U("input", e),
				R = () => U("add"),
				A = () => U("remove"),
				U = (e, t) => r => ({
					...g(r),
					noun: e,
					postComposer: {
						inputType: t,
						type: b.imageOnly
					},
					action: n.c.CLICK
				}),
				B = e => {
					Object(p.a)({
						...g(e),
						noun: "hide_oc_description",
						action: n.c.CLICK
					})
				},
				F = (e, t) => {
					if (t) {
						const r = u.subredditById(e, t);
						if (r) return {
							subreddit: r
						};
						const n = u.profileById(e, t);
						if (n) return {
							profile: n
						}
					}
				},
				H = (e, t) => {
					const {
						draftId: r,
						destSubreddit: n
					} = t, o = Object(f.k)(e), i = Object(l.d)(e, {
						draftId: r
					}), s = {
						authorId: o ? o.id : void 0,
						createdTimestamp: i ? i.created : void 0,
						id: r || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case c.b.Link:
							s.type = m.DraftType.Link, s.urlLength = t.body.length;
							break;
						case c.b.Markdown:
							s.type = m.DraftType.Self, s.bodyTextLength = t.body.length;
							break;
						case c.b.RichText:
							s.type = m.DraftType.RichText, t.documentStats && (s.bodyTextLength = t.documentStats.textLength, s.numberRteImages = t.documentStats.rteImagesCount, s.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case c.b.Image:
							s.type = m.DraftType.Image;
							break;
						case c.b.Video:
							s.type = m.DraftType.Video
					}
					return {
						postDraft: s,
						...F(e, n.id)
					}
				},
				M = (e, t) => {
					const r = Object(f.k)(e),
						n = {
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
							n.type = m.DraftType.Link, n.urlLength = (t.body || "").length;
							break;
						case c.b.Markdown:
							n.type = m.DraftType.Self, n.bodyTextLength = (t.body || "").length;
							break;
						case c.b.RichText:
							n.type = m.DraftType.RichText
					}
					return {
						postDraft: n,
						...F(e, t.subredditId)
					}
				},
				G = (e, t) => {
					Object(p.a)({
						noun: "draft_load",
						...g(e),
						...H(e, t)
					})
				},
				W = (e, t) => {
					Object(p.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...g(e),
						...H(e, t)
					})
				},
				q = (e, t) => {
					Object(p.a)({
						noun: "draft_delete",
						...g(e),
						...M(e, t)
					})
				},
				z = e => {
					Object(p.a)({
						...g(e),
						noun: "social_connect_link",
						action: n.c.CLICK
					})
				},
				K = (e, t) => {
					Object(p.a)({
						...g(e),
						noun: "twitter_share_checkbox",
						action: Object(_.getToggleAction)(t)
					})
				},
				Y = (e, t, r) => {
					Object(p.a)({
						...g(e),
						...H(e, t),
						noun: "draft_share",
						action: r ? n.c.ENABLE : n.c.DISABLE
					})
				},
				V = e => {
					Object(p.a)({
						...g(e),
						noun: "create_community",
						actionInfo: {
							...u.actionInfo(e),
							pageType: "post_select_community"
						}
					})
				},
				Q = "community_recommendation",
				$ = () => e => ({
					...g(e),
					action: n.c.VIEW,
					noun: Q,
					listing: {
						links: Object(a.b)(e).map(t => Object(d.B)(e, t.name))
					}
				}),
				X = (e, t) => r => ({
					...g(r),
					action: n.c.CLICK,
					noun: Q,
					actionInfo: {
						...u.actionInfo(r),
						position: t
					},
					subreddit: {
						name: e,
						id: Object(d.B)(r, e)
					}
				}),
				J = e => {
					Object(p.a)({
						...g(e),
						action: n.c.SKIP,
						noun: Q
					})
				},
				Z = (e, t) => r => ({
					...g(r),
					action: n.c.VIEW,
					noun: `${Q}_hover`,
					actionInfo: {
						...u.actionInfo(r),
						position: t
					},
					subreddit: {
						name: e,
						id: Object(d.B)(r, e)
					}
				})
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "J", (function() {
				return s
			})), r.d(t, "z", (function() {
				return c
			})), r.d(t, "B", (function() {
				return a
			})), r.d(t, "K", (function() {
				return d
			})), r.d(t, "j", (function() {
				return u
			})), r.d(t, "v", (function() {
				return f
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "u", (function() {
				return _
			})), r.d(t, "t", (function() {
				return m
			})), r.d(t, "p", (function() {
				return b
			})), r.d(t, "m", (function() {
				return g
			})), r.d(t, "o", (function() {
				return h
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "s", (function() {
				return v
			})), r.d(t, "r", (function() {
				return I
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "C", (function() {
				return k
			})), r.d(t, "H", (function() {
				return S
			})), r.d(t, "D", (function() {
				return E
			})), r.d(t, "G", (function() {
				return x
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "i", (function() {
				return P
			})), r.d(t, "y", (function() {
				return D
			})), r.d(t, "w", (function() {
				return N
			})), r.d(t, "x", (function() {
				return L
			})), r.d(t, "f", (function() {
				return R
			})), r.d(t, "E", (function() {
				return A
			})), r.d(t, "k", (function() {
				return U
			})), r.d(t, "a", (function() {
				return B
			})), r.d(t, "A", (function() {
				return F
			})), r.d(t, "d", (function() {
				return H
			})), r.d(t, "l", (function() {
				return M
			})), r.d(t, "F", (function() {
				return G
			})), r.d(t, "I", (function() {
				return W
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, r) => ({
					...o.defaults(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1),
					profile: o.profile(e),
					subreddit: o.subreddit(e),
					powerups: {
						...o.subredditPowerups(e),
						freeCount: t,
						paidCount: r
					}
				}),
				s = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...i(t),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powerups_become_hero",
					...i(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				a = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powerups_see_all_heroes",
					...i(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				l = e => (t, r) => n => ({
					source: e,
					action: "click",
					noun: "powerup_supporter",
					...i(n),
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
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				p = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				_ = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell_unlock_avatar",
					...i(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				m = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell_unlock_avatar",
					...i(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				b = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell_avatar",
					...i(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				g = () => e => ({
					source: "powerups_post_upsell_avatar",
					action: "click",
					noun: "post_upsell_avatar_cta",
					...i(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				h = () => e => ({
					source: "powerups_post_upsell_avatar_modal",
					action: "view",
					noun: "powerups_modal",
					...i(e)
				}),
				O = () => e => ({
					source: "powerups_post_upsell_avatar_modal",
					action: "click",
					noun: "post_upsell_avatar_modal_cta",
					...i(e)
				}),
				v = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell_premium",
					...i(e)
				}),
				I = () => e => ({
					source: "powerups_post_upsell_premium",
					action: "click",
					noun: "use_premium_powerup",
					...i(e)
				}),
				y = () => e => ({
					source: "powerups_community_feed",
					action: "view",
					noun: "powerups_mod_enable_banner",
					...i(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1)
				}),
				j = () => e => ({
					source: "powerups_community_feed",
					action: "click",
					noun: "powerups_mod_enable_banner",
					...i(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1)
				}),
				w = e => t => ({
					source: "powerups",
					action: "click",
					noun: "join_supporters",
					...i(t),
					actionInfo: o.actionInfo(t, {
						reason: e
					})
				}),
				k = () => e => ({
					source: "powerups_supporters_modal",
					action: "click",
					noun: "powerups_cta",
					...i(e)
				}),
				S = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_supporter_achievement",
					...i(e)
				}),
				E = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_achievements",
					...i(e)
				}),
				x = () => e => ({
					source: "powerups_flair_picker",
					action: "click",
					noun: "powerups_cta",
					...i(e)
				}),
				T = e => t => ({
					source: "powerups_modal",
					action: "view",
					noun: "marketing_step",
					...i(t),
					actionInfo: o.actionInfo(t, {
						reason: e
					})
				}),
				C = e => t => ({
					source: "powerups",
					action: "click",
					noun: "benefit",
					...i(t),
					powerups: {
						...o.subredditPowerups(t),
						benefit: e
					}
				}),
				P = (e, t) => r => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...i(r, e, t)
				}),
				D = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...i(e),
					actionInfo: o.actionInfo(e, {
						pageType: "powerups_premium_upsell"
					})
				}),
				N = () => e => ({
					source: "powerups_premium_upsell",
					action: "click",
					noun: "powerups_price",
					...i(e)
				}),
				L = e => t => ({
					source: "powerups",
					action: "click",
					noun: "premium",
					...i(t),
					actionInfo: o.actionInfo(t, {
						pageType: "powerups_premium_upsell"
					}),
					goldPurchase: {
						subscriptionType: e
					}
				}),
				R = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...i(r, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				A = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...i(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				U = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...i(e)
				}),
				B = (e, t) => r => ({
					source: t,
					action: "click",
					noun: "add_custom_emojis",
					...i(r),
					powerups: {
						...o.subredditPowerups(r),
						emojiCount: e
					}
				}),
				F = (e, t) => r => ({
					source: t,
					action: "save",
					noun: "custom_emojis",
					...i(r),
					powerups: {
						...o.subredditPowerups(r),
						emojiCount: e
					}
				}),
				H = (e = 1, t) => r => ({
					source: t,
					action: "delete",
					noun: "custom_emojis",
					...i(r),
					powerups: {
						...o.subredditPowerups(r),
						emojiCount: e
					}
				}),
				M = (e, t) => r => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? o.subredditById(r, t) : void 0,
					...i(r),
					correlationId: e
				}),
				G = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_gifs",
					...i(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				W = (e, t, r) => n => ({
					source: "powerups_settings",
					action: "click",
					noun: e,
					setting: {
						value: String(t),
						oldValue: String(r)
					},
					subreddit: o.subreddit(n),
					...o.defaults(n)
				})
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return k
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "q", (function() {
				return x
			})), r.d(t, "r", (function() {
				return T
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "s", (function() {
				return P
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "l", (function() {
				return N
			})), r.d(t, "p", (function() {
				return L
			})), r.d(t, "i", (function() {
				return R
			})), r.d(t, "j", (function() {
				return A
			})), r.d(t, "g", (function() {
				return U
			})), r.d(t, "b", (function() {
				return H
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "n", (function() {
				return G
			})), r.d(t, "m", (function() {
				return W
			})), r.d(t, "t", (function() {
				return K
			})), r.d(t, "w", (function() {
				return Y
			})), r.d(t, "e", (function() {
				return V
			})), r.d(t, "d", (function() {
				return $
			})), r.d(t, "u", (function() {
				return X
			})), r.d(t, "v", (function() {
				return J
			})), r.d(t, "h", (function() {
				return Z
			}));
			var n = r("./node_modules/lodash/pick.js"),
				o = r.n(n),
				i = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makePostDraftPageKey/index.ts"),
				c = r("./src/reddit/constants/parameters.ts"),
				a = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				l = r("./src/reddit/helpers/routeKey/index.ts"),
				d = r("./src/reddit/helpers/trackers/postComposer.ts"),
				u = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				f = r("./src/reddit/models/Comment/index.ts"),
				p = r("./src/reddit/models/Post/index.ts"),
				_ = r("./src/reddit/routes/subreddit/index.ts"),
				m = r("./src/reddit/selectors/profile.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/lib/makePostCreationPageKey/index.ts"),
				h = r("./src/lib/makeSearchKey/index.ts"),
				O = r("./src/reddit/helpers/correlationIdTracker.ts"),
				v = r("./src/reddit/helpers/trackers/searchResults.ts"),
				I = r("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				y = r("./src/reddit/selectors/postDraft.ts"),
				j = r("./src/reddit/selectors/telemetry.ts"),
				w = r("./src/telemetry/index.ts");
			const k = (e, t, r, n, d, m) => {
					const {
						route: b
					} = e, {
						name: O
					} = b.meta;
					if (!O) return;
					const v = t.platform.currentPage;
					switch (O) {
						case i.Lb.COMMENTS: {
							const {
								partialCommentId: o,
								partialPostId: i
							} = e.match.params, s = Object(p.s)(i), c = Object(l.a)(e, t, t.posts.models[s]);
							if (!c) return;
							const d = o && Object(f.h)(o),
								{
									sortToUse: u
								} = Object(a.a)(t, s);
							Object(w.a)(D(c, s, d, r, n, u)(t));
							break
						}
						case i.Lb.INDEX:
						case i.Lb.LISTING:
						case i.Lb.MULTIREDDIT:
						case i.Lb.SUBREDDIT: {
							const o = Object(l.c)(e, t);
							if (!o.listingKey) return;
							const {
								params: s,
								queryParams: c,
								path: a
							} = e.match, {
								sort: d = (o.sort ? o.sort : i.V.HOT)
							} = s, u = c.t, f = a === _.a;
							Object(w.a)(E({
								key: o.listingKey,
								sort: d,
								timerType: r,
								timerMillis: n,
								timeSort: u,
								isPredictionsPage: f
							})(t));
							break
						}
						case i.Lb.TOPIC: {
							const o = Object(l.c)(e, t);
							if (!o.listingKey) return;
							const {
								params: s
							} = e.match, c = o.sort ? o.sort : i.W, {
								sort: a = c
							} = s;
							Object(w.a)(E({
								key: o.listingKey,
								sort: a,
								timerType: r,
								timerMillis: n
							})(t));
							break
						}
						case i.Lb.PROFILE_OVERVIEW: {
							const o = Object(l.d)(e, t);
							if (!o) return;
							const {
								params: s,
								queryParams: c
							} = e.match, {
								sort: a = i.Db
							} = s, d = c.t;
							Object(w.a)(x(o, a, r, n, d)(t));
							break
						}
						case i.Lb.PROFILE_POSTS: {
							const o = Object(l.d)(e, t);
							if (!o) return;
							const {
								queryParams: s
							} = e.match, {
								sort: c = i.Db,
								t: a = i.Eb
							} = s;
							Object(w.a)(T(o, c, r, n, a)(t));
							break
						}
						case i.Lb.PROFILE_COMMENTS: {
							const o = Object(l.d)(e, t);
							if (!o) return;
							const {
								queryParams: s
							} = e.match, {
								sort: c = i.Db,
								t: a = i.Eb
							} = s;
							Object(w.a)(C(o, c, r, n, a)(t));
							break
						}
						case i.Lb.PROFILE_PRIVATE: {
							const o = Object(l.d)(e, t);
							if (!o) return;
							Object(w.a)(P(o)(n, r)(t));
							break
						}
						case i.Lb.FOLLOWERS:
							B(t);
							break;
						case i.Lb.PROFILE_MODERATION:
							m && L(t, !0);
							break;
						case i.Lb.SETTINGS: {
							const o = e;
							Object(w.a)(z(r, n)(t)), o.match.params.page === i.Zb.Profile && Object(u.l)(t);
							break
						}
						case i.Lb.POST_CREATION:
							if (m && d) {
								const e = Object(g.a)(d);
								Object(w.a)(N(e, r, n)(t))
							}
							break;
						case i.Lb.POST_DRAFT: {
							const {
								draftId: o
							} = e.match.params, i = Object(s.a)(e.match.params);
							if (!i) return;
							F(t, i, o, r, n);
							break
						}
						case i.Lb.SUBREDDIT_WIKI:
							Object(w.a)(Q(r, n)(t));
							break;
						case i.Lb.COINS:
							Object(w.a)(H(r, n)(t)), Object(w.a)(M()(t));
							break;
						case i.Lb.PREMIUM:
							Object(w.a)(G(r, n)(t)), Object(w.a)(W()(t));
							break;
						case i.Lb.APPEAL:
							Object(w.a)(q(r, n)(t));
							break;
						case i.Lb.INBOX_PAGES:
							m && U(t);
							break;
						case i.Lb.MODERATION_PAGES:
							m && R(t, !0, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case i.Lb.COLLECTION_COMMENTS:
							m && J(t, !0);
							break;
						case i.Lb.MODQUEUE_PAGES:
							m && A(t, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case i.Lb.SUBREDDIT_LEADERBOARD:
							m && Object(w.a)(V()(t));
							break;
						case i.Lb.SEARCH_RESULTS:
							if (m) {
								const i = Object(l.e)(e, t);
								if (!i) return;
								const s = Object(I.d)(t);
								Object(w.a)(X(i, Object(h.e)(o()(v && v.queryParams || {}, c.t), s), r, n, v)(t))
							}
							break;
						case i.Lb.PUBLIC_ACCESS_NETWORK:
							m && Object(w.a)(K()(t));
							break;
						case i.Lb.GEOTAGGING:
							m && Object(w.a)($()(t));
							break;
						case i.Lb.SUBREDDIT_CREATION:
							m && Object(w.a)(Y()(t));
							break;
						case i.Lb.MOD_LISTING:
							m && Z(t, !0)
					}
				},
				S = e => ({
					...j.defaults(e),
					userPreferences: j.userPreferences(e)
				}),
				E = ({
					key: e,
					sort: t,
					timerType: r,
					timerMillis: n,
					timeSort: o,
					flairTitle: i,
					isPredictionsPage: s
				}) => c => {
					const {
						api: a
					} = c.listings.postOrder, l = !a.error[e] && !a.pending[e], d = s ? {
						paneName: "predictions",
						reason: "predictions_tournament"
					} : {};
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...S(c),
						actionInfo: j.actionInfo(c, {
							success: l,
							...d
						}),
						customFeed: j.customFeed(c),
						listing: j.listing(c, e, {
							sort: t,
							sortTime: o
						}),
						subreddit: j.subreddit(c),
						timer: j.timer(r, n),
						userSubreddit: j.userSubreddit(c),
						adblock: j.adblock(c),
						postFlair: {
							title: i
						},
						predictions: s ? Object(j.predictionsOnPredictionsTab)(c) : void 0
					}
				},
				x = (e, t, r, n, o) => i => {
					const s = j.listing(i, e);
					s && (s.sort = t, o && (s.sortTime = o));
					const {
						api: c
					} = i.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: s,
						source: "global",
						action: "view",
						noun: "screen",
						...S(i),
						actionInfo: j.actionInfo(i, {
							success: a
						}),
						profile: j.profile(i),
						snoovatar: j.snoovatar(i),
						subreddit: j.subreddit(i),
						timer: j.timer(r, n),
						userSubreddit: j.userSubreddit(i),
						adblock: j.adblock(i)
					}
				},
				T = (e, t, r, n, o) => i => {
					const s = j.listing(i, e);
					s && (s.sort = t, o && (s.sortTime = o));
					const {
						api: c
					} = i.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: s,
						source: "global",
						action: "view",
						noun: "screen",
						...S(i),
						actionInfo: j.actionInfo(i, {
							success: a
						}),
						profile: j.profile(i),
						subreddit: j.subreddit(i),
						timer: j.timer(r, n),
						userSubreddit: j.userSubreddit(i),
						adblock: j.adblock(i)
					}
				},
				C = (e, t, r, n, o) => i => {
					const s = j.profileComments(i, e);
					s && (s.sort = t, o && (s.sortTime = o));
					const {
						api: c
					} = i.profileCommentsPage, a = !c.error[e] && !c.pending[e];
					return {
						listing: s,
						source: "global",
						action: "view",
						noun: "screen",
						...S(i),
						actionInfo: j.actionInfo(i, {
							success: a
						}),
						profile: j.profile(i),
						subreddit: j.subreddit(i),
						timer: j.timer(r, n),
						userSubreddit: j.userSubreddit(i),
						adblock: j.adblock(i)
					}
				},
				P = e => (t, r) => n => {
					const o = !n.profilePrivatePage.api.error[e] && !n.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...S(n),
						actionInfo: j.actionInfo(n, {
							success: o
						}),
						profile: j.profile(n),
						subreddit: j.subreddit(n),
						timer: j.timer(r, t),
						userSubreddit: j.userSubreddit(n),
						adblock: j.adblock(n)
					}
				},
				D = (e, t, r, n, o, i) => s => {
					const {
						api: c
					} = s.pages.comments, a = !c.error[e] && !c.pending[e], l = {
						source: "global",
						action: "view",
						noun: "screen",
						...S(s),
						actionInfo: j.actionInfo(s, {
							success: a
						}),
						post: j.post(s, t),
						profile: j.profile(s),
						subreddit: j.subreddit(s),
						timer: j.timer(n, o),
						userSubreddit: j.userSubreddit(s),
						adblock: j.adblock(s),
						postEvent: j.postEventI13nSelector(s, {
							postId: t
						}),
						postCollection: j.postCollectionI13nSelector(s, {
							postId: t
						}),
						listing: j.listing(s, void 0, {
							sort: i
						})
					};
					return r && (l.comment = j.comment(s, r)), l
				},
				N = (e, t, r) => n => {
					const o = n.creations.api.page.fetched[e],
						i = n.platform.currentPage ? n.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...S(n),
						actionInfo: j.actionInfo(n, {
							success: o
						}),
						post: i ? j.post(n, i) : void 0,
						subreddit: j.subreddit(n),
						timer: j.timer(t, r),
						userSubreddit: j.userSubreddit(n),
						adblock: j.adblock(n)
					}
				},
				L = (e, t) => {
					Object(w.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S(e),
						actionInfo: j.actionInfo(e, {
							success: t
						})
					})
				},
				R = (e, t, r, n) => {
					Object(w.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S(e),
						actionInfo: j.actionInfo(e, {
							success: t
						}),
						profile: j.profileById(e, Object(m.m)(e, n)),
						subreddit: j.subredditById(e, Object(b.B)(e, r)),
						userSubreddit: j.userSubreddit(e),
						adblock: j.adblock(e)
					})
				},
				A = (e, t, r) => {
					Object(w.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S(e),
						profile: j.profileById(e, Object(m.m)(e, r)),
						subreddit: j.subredditById(e, Object(b.B)(e, t)),
						userSubreddit: j.userSubreddit(e),
						adblock: j.adblock(e)
					})
				},
				U = e => {
					Object(w.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S(e),
						actionInfo: j.actionInfo(e)
					})
				},
				B = e => {
					Object(w.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S(e),
						actionInfo: j.actionInfo(e)
					})
				},
				F = (e, t, r, n, o) => {
					const i = e.creations.api.page.pending[t],
						s = !e.creations.api.page.error[t] && !i && !!r,
						c = Object(y.h)(e, r);
					Object(w.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S(e),
						actionInfo: j.actionInfo(e, {
							success: s
						}),
						subreddit: j.subreddit(e),
						timer: j.timer(n, o),
						userSubreddit: j.userSubreddit(e),
						adblock: j.adblock(e),
						...c ? Object(d.n)(e, c) : {}
					})
				},
				H = (e, t) => r => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(O.c)(O.a.GoldPayment),
					...S(r),
					timer: j.timer(e, t),
					adblock: j.adblock(r)
				}),
				M = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...S(e)
				}),
				G = (e, t) => r => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(O.c)(O.a.GoldPayment),
					...S(r),
					timer: j.timer(e, t),
					adblock: j.adblock(r)
				}),
				W = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...S(e)
				}),
				q = (e, t) => r => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...S(r),
					timer: j.timer(e, t)
				}),
				z = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...S(r),
					timer: j.timer(e, t)
				}),
				K = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: j.subreddit(e),
					...S(e)
				}),
				Y = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...S(e)
				}),
				V = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...S(e)
				}),
				Q = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...S(r),
					customFeed: j.customFeed(r),
					subreddit: j.subreddit(r),
					timer: j.timer(e, t),
					userSubreddit: j.userSubreddit(r),
					adblock: j.adblock(r)
				}),
				$ = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...S(e)
				}),
				X = (e, t, r, n, o, s) => c => {
					let a = !0;
					if (t.type.indexOf(i.Yb.Posts) > -1) {
						const {
							api: t
						} = c.listings.listingOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(i.Yb.Subreddits) > -1 || t.type.indexOf(i.Yb.Users) > -1) {
						const {
							api: t
						} = c.listings.postOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					const l = j.paneName(c, o),
						d = j.structureType(o),
						u = c.platform.currentPage && c.platform.currentPage.urlParams && c.platform.currentPage.urlParams.subredditName ? j.subredditByName(c, c.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						...v.c(c, t),
						source: "global",
						action: "view",
						noun: "screen",
						...j.defaults(c),
						actionInfo: j.actionInfo(c, {
							success: a,
							paneName: l
						}),
						timer: j.timer(r, n),
						search: {
							...j.search(c, t, !0, o || void 0),
							...!!s && {
								originElement: s
							},
							queryId: Object(O.c)(O.a.SearchResults),
							structureType: d,
							subredditId: t.restrict_sr && u && u.id ? u.id : void 0,
							subredditName: t.restrict_sr && u && u.name ? u.name : void 0
						},
						...!!s && {
							correlationId: Object(O.c)(O.a.SearchResults)
						},
						userPreferences: {
							...j.userPreferences(c),
							hideNsfw: !c.user.prefs.over18
						}
					}
				},
				J = (e, t) => {
					Object(w.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S(e),
						actionInfo: j.actionInfo(e, {
							success: t
						})
					})
				},
				Z = (e, t) => {
					Object(w.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...S(e),
						actionInfo: j.actionInfo(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "t", (function() {
				return f
			})), r.d(t, "s", (function() {
				return p
			})), r.d(t, "u", (function() {
				return _
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "w", (function() {
				return b
			})), r.d(t, "v", (function() {
				return g
			})), r.d(t, "x", (function() {
				return h
			})), r.d(t, "z", (function() {
				return O
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "A", (function() {
				return w
			})), r.d(t, "y", (function() {
				return k
			})), r.d(t, "k", (function() {
				return S
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "m", (function() {
				return T
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "r", (function() {
				return D
			})), r.d(t, "q", (function() {
				return N
			})), r.d(t, "o", (function() {
				return L
			})), r.d(t, "p", (function() {
				return R
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "d", (function() {
				return U
			})), r.d(t, "j", (function() {
				return B
			})), r.d(t, "l", (function() {
				return F
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/constants/posts.ts"),
				i = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				c = r("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				a = r("./src/reddit/selectors/posts.ts"),
				l = r("./src/reddit/selectors/telemetry.ts");
			const d = {
					SEARCH: "search",
					SEARCH_RESULTS_BEST: "search_results_best"
				},
				u = (e, t) => {
					const r = l.subreddit(e);
					return {
						screen: l.screen(e),
						subreddit: r && t && t.restrict_sr ? r : null
					}
				},
				f = (e, t) => r => {
					const n = t;
					return n.structureType = "related", {
						action: e,
						correlationId: Object(s.c)(s.a.SearchResults),
						noun: "related_search",
						source: d.SEARCH,
						search: l.search(r, n),
						...u(r)
					}
				},
				p = (e, t, r, n) => o => ({
					...u(o, r),
					source: d.SEARCH,
					action: "click",
					noun: t,
					actionInfo: l.actionInfo(o, n ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: n ? l.discoveryUnit(n) : null,
					search: l.search(o, r),
					post: l.post(o, e),
					media: l.media(o, e)
				}),
				_ = (e, t, r, n, o) => i => ({
					...x(i, e, t, o, n, r),
					noun: "ad"
				}),
				m = (e, t, r) => o => {
					let i = !0;
					if (t.type.indexOf(n.Yb.Posts) > -1) {
						const {
							api: t
						} = o.listings.listingOrder;
						i = i && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(n.Yb.Subreddits) > -1 || t.type.indexOf(n.Yb.Users) > -1) {
						const {
							api: t
						} = o.listings.postOrder;
						i = i && !t.error[e] && !t.pending[e]
					}
					return {
						...u(o, t),
						source: d.SEARCH,
						action: "view",
						noun: "search_results_post",
						actionInfo: l.actionInfo(o, {
							success: i,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: l.discoveryUnit(r),
						search: l.search(o, t)
					}
				},
				b = (e, t) => r => ({
					action: "view",
					actionInfo: l.actionInfo(r),
					metaSearch: l.metaSearch(t),
					noun: e,
					screen: l.screen(r),
					search: l.smartSearch(r, t),
					source: d.SEARCH
				}),
				g = (e, t) => r => ({
					action: "click",
					actionInfo: l.actionInfo(r),
					noun: e,
					metaSearch: l.metaSearch(t),
					screen: l.screen(r),
					search: l.smartSearch(r, t),
					source: d.SEARCH
				}),
				h = (e, t, r) => n => ({
					source: d.SEARCH,
					action: "click",
					noun: l.SearchDropdownNouns.Recent,
					actionInfo: l.actionInfo(n, {
						paneName: "subreddit_dropdown",
						position: r + 1
					}),
					search: {
						query: e,
						originPageType: n.platform.currentPage ? l.getPageTypeFromCurrentPage(n.platform.currentPage) : void 0,
						queryId: Object(s.c)(s.a.SearchResults)
					},
					...v(n, t)
				}),
				O = (e, t, r, n) => o => {
					const i = n.filter(e => e.id);
					return {
						source: d.SEARCH,
						action: "click",
						noun: l.SearchDropdownNouns.Typeahead,
						actionInfo: l.actionInfo(o, {
							position: r + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: o.platform.currentPage ? l.getPageTypeFromCurrentPage(o.platform.currentPage) : void 0,
							queryId: Object(s.c)(s.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: i.map(e => e.id),
							numberSubreddits: i.length
						},
						...v(o, t)
					}
				},
				v = (e, t) => {
					const r = t.isSubreddit && t.id ? l.subredditForSearch(e, t.id) : void 0,
						n = t.isProfile && t.id ? l.profileForSearch(e, t.id) : void 0,
						o = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? r || o : void 0,
						profile: t.isProfile ? n || o : void 0
					}
				},
				I = (e, t, r) => n => ({
					action: t,
					actionInfo: l.actionInfo(n),
					noun: e,
					screen: l.screen(n),
					search: l.search(n, r),
					source: d.SEARCH_RESULTS_BEST
				});
			var y;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities", e.Communities = "tab_communities", e.Authors = "tab_authors"
			}(y || (y = {}));
			const j = (e, t) => r => ({
					...u(r, t),
					source: d.SEARCH,
					action: "click",
					noun: e,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(r),
					search: l.search(r, t)
				}),
				w = (e, t) => r => ({
					...u(r, t),
					source: d.SEARCH,
					action: "click",
					noun: e,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(r),
					search: l.search(r, t)
				}),
				k = (e, t) => r => ({
					action: "click",
					correlationId: Object(s.c)(s.a.SearchResults),
					noun: e ? n.Xb.ToSubreddit : n.Xb.ToGlobal,
					search: l.search(r, t),
					source: d.SEARCH
				}),
				S = (e, t, r, n) => o => ({
					...u(o, r),
					source: d.SEARCH,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(o, {
						relativePosition: l.getRelativePostOrder(o, t, e)
					}),
					search: {
						...l.search(o, r),
						...!!n && {
							originElement: n
						}
					},
					post: l.post(o, t)
				}),
				E = (e, t, r, n, o) => i => x(i, e, t, r, n, o),
				x = (e, t, r, n, o, c) => {
					const a = l.paneName(e, n),
						u = C(e, t, o, c),
						f = l.amountOfElementsBeforePost(e, r, o, c, a),
						p = null !== u ? f + u : null,
						_ = l.structureType(n),
						m = {
							...l.search(e, r, !0, n || void 0),
							structureType: _,
							queryId: Object(s.c)(s.a.SearchResults)
						};
					return {
						source: d.SEARCH,
						action: i.c.CLICK,
						noun: "post",
						actionInfo: n ? {
							pageType: l.getPageTypeFromCurrentPage(n),
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
				T = (e, t, r, n, o, i) => s => P(s, e, t, r, n, o, i),
				C = (e, t, r, n) => {
					var o;
					return (null === (o = null == n ? void 0 : n.layout) || void 0 === o ? void 0 : o.viewTypeWeb) === c.b.Hero ? 0 : (null == n ? void 0 : n.postOrder) ? n.postOrder.indexOf(t) >= 0 ? n.postOrder.indexOf(t) : null : r ? l.getRelativePostOrder(e, t, r) : null
				},
				P = (e, t, r, n, c, u, f) => {
					if (!n) {
						n = Object(a.H)(e, {
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
						_ = ((e, t, r, n) => n && n.subredditOrder ? n.subredditOrder.indexOf(t) : r ? l.getRelativeSubredditOrProfileOrder(e, t, r) : null)(e, n.id, c, f);
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
						source: d.SEARCH,
						action: i.c.CLICK,
						noun: n.type,
						search: g,
						subreddit: n.type === o.a.SUBREDDIT ? l.subredditForSearch(e, n.id) : void 0,
						profile: n.type === o.a.PROFILE ? l.profileForSearch(e, n.id) : void 0,
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
				D = (e, t) => r => ({
					...u(r, e),
					source: d.SEARCH,
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
				N = (e, t, r, n, o) => s => ({
					...x(s, t, r, n, e, o),
					action: i.c.VIEW
				}),
				L = (e, t, r, n) => o => ({
					...u(o, r),
					source: d.SEARCH,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(o, {
						relativePosition: l.getRelativePostOrder(o, t, e),
						position: l.getAbsoluteOrder(o, t, e)
					}),
					search: {
						...l.search(o, r),
						...!!n && {
							originElement: n
						}
					},
					post: l.post(o, t)
				}),
				R = (e, t, r) => n => ({
					...u(n),
					source: d.SEARCH,
					action: "click",
					noun: `search_result_${e}`,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(n),
					search: {
						...l.search(n, t),
						...!!r && {
							originElement: r
						}
					},
					[e]: l[e](n)
				}),
				A = (e, t) => r => ({
					...u(r, t),
					source: d.SEARCH,
					action: e,
					noun: "covid_banner",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(r),
					search: l.search(r, t)
				}),
				U = e => ({
					action: i.c.DISABLE,
					noun: "subreddit_search",
					source: "search",
					subreddit: {
						id: null == e ? void 0 : e.id,
						name: null == e ? void 0 : e.name,
						nsfw: null == e ? void 0 : e.isNSFW,
						quarantined: null == e ? void 0 : e.isQuarantined
					}
				});

			function B(e, t) {
				return r => ({
					...u(r, t),
					source: d.SEARCH,
					action: "view",
					noun: `no_${e}_results`,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: l.actionInfo(r),
					search: l.search(r, t)
				})
			}

			function F(e, t) {
				return r => ({
					...u(r),
					source: "search",
					action: "click",
					noun: e,
					actionInfo: l.actionInfo(r),
					search: l.search(r, t)
				})
			}
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js");
			t.a = function(e, t, r) {
				Object(n.useEffect)(() => {
					const n = e && e.current;
					if (!n || "undefined" == typeof IntersectionObserver) return;
					const o = new IntersectionObserver(t, r);
					return o.observe(n), () => {
						o.unobserve(n)
					}
				}, [e, t, r])
			}
		},
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/components/TrackingHelper/index.tsx");
			const o = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var i = r("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, r, n) => o => {
				const s = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(i.defaults)(o),
					actionInfo: Object(i.actionInfo)(o),
					geo: Object(i.geo)(o),
					screen: Object(i.screen)(o),
					subreddit: Object(i.subreddit)(o),
					outbound: Object(i.outboundLinkData)(o, e, t, n, r)
				};
				return r && (s.comment = Object(i.comment)(o, r)), n && (s.post = Object(i.post)(o, n)), s
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
				const e = Object(n.b)(),
					t = l();
				return (r, n, i, c) => {
					var a, l;
					if (n && function(e) {
							return !e.startsWith("/") && null == e.match(o)
						}(r)) {
						const o = s(r, n, i, c);
						(null === (l = null === (a = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === a ? void 0 : a.serviceWorker) || void 0 === l ? void 0 : l.controller) ? t(o): e(o)
					}
				}
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = n.b
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
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/reddit/icons/fonts/helpers.m.less"),
				s = r.n(i),
				c = r("./src/lib/constants/icons.ts"),
				a = r("./src/lib/lessComponent.tsx");
			const l = (e, t) => `icon icon-${e}${t&&!e.includes("fill")&&c.a[`${e}_fill`]?"_fill":""}`,
				d = a.a.wrapped(e => o.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", s.a)
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/fonts/helpers.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const a = ({
				className: e,
				isFilled: t,
				name: r,
				...n
			}) => o.a.createElement("i", c({
				className: Object(i.a)(e, Object(s.b)(r, t))
			}, n));
			a.displayName = "Icon";
			const l = (e, t) => r => o.a.createElement(a, c({
				name: e
			}, t, r, {
				isFilled: (null == t ? void 0 : t.isFilled) || (null == r ? void 0 : r.isFilled),
				className: Object(i.a)(null == t ? void 0 : t.className, null == r ? void 0 : r.className)
			}));
			t.a = a
		},
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", i({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("polygon", {
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
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				c = r.n(s);
			t.a = Object(n.forwardRef)(({
				className: e,
				isHighlighted: t,
				outlineClassName: r
			}, n) => o.a.createElement("svg", {
				className: Object(i.a)(c.a.defaultInactiveState, e),
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				width: "12",
				height: "12",
				ref: n
			}, o.a.createElement("circle", {
				cx: "6",
				cy: "6",
				r: "4"
			}), o.a.createElement("path", {
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
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 320 320",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"
			}), o.a.createElement("path", {
				d: "m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
			}), o.a.createElement("path", {
				d: "m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"
			}), o.a.createElement("path", {
				d: "m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
			}), o.a.createElement("path", {
				d: "m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
			}), o.a.createElement("path", {
				d: "m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
			}), o.a.createElement("path", {
				d: "m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
			}), o.a.createElement("path", {
				d: "m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"
			}), o.a.createElement("path", {
				d: "m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
			}), o.a.createElement("path", {
				d: "m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
			}), o.a.createElement("path", {
				d: "m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
			}), o.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
			}), o.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z",
				fill: "none"
			}), o.a.createElement("path", {
				d: "m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
			}), o.a.createElement("circle", {
				cx: "238.47",
				cy: "80.13",
				r: "22.93"
			}), o.a.createElement("path", {
				d: "m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
			})))
		},
		"./src/reddit/models/ApiRequestState/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			}));
			var n, o = r("./node_modules/uuid/v4.js"),
				i = r.n(o);
			! function(e) {
				e[e.Pending = 0] = "Pending", e[e.Complete = 1] = "Complete", e[e.Failed = 2] = "Failed"
			}(n || (n = {}));
			const s = () => i()()
		},
		"./src/reddit/selectors/experiments/postCreationSubRec.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "m", (function() {
				return j
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				i = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/models/PostCreationForm/index.ts"),
				a = r("./src/reddit/models/SubredditAutocomplete/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const d = 3,
				u = e => {
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: i.zd
					});
					return t === i.Ad.UIChangesOnly || t === i.Ad.RedditRecommendation || t === i.Ad.OpenAI || t === i.Ad.FilteredOpenAI
				},
				f = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: i.zd
					}) === i.Ad.UIChangesOnly
				},
				p = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: i.zd
					}) === i.Ad.RedditRecommendation
				},
				_ = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: i.zd
					}) === i.Ad.OpenAI
				},
				m = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: i.zd
					}) === i.Ad.FilteredOpenAI
				},
				b = e => e.creations.subredditRec.api.pending,
				g = e => e.creations.subredditRec.api.error,
				h = e => {
					return e.creations.subredditRec.order.length > 0
				},
				O = e => {
					const t = e.creations.subredditRec.order,
						r = [];
					return t.forEach(t => {
						const n = Object(l.t)(e, {
								subredditName: t
							}),
							o = Object(l.w)(e, {
								subredditName: t
							});
						if (o && n) {
							const e = {
								iconUrl: o.icon.url,
								name: o.name,
								primaryColor: o.primaryColor,
								subscribers: n.subscribers,
								type: a.a.OTHER_SUBREDDIT
							};
							r.push(e)
						}
					}), r
				},
				v = e => e.creations.subredditRec.isInputChanged,
				I = e => {
					if (!(e.creations.formData.submissionType === n.Ub.POST)) return "";
					const t = e.creations.formState.editorMode === c.i.RICH_TEXT || null === e.creations.formState.editorMode,
						r = e.creations.formState.editorMode === c.i.MARKDOWN;
					if (t) {
						const t = e.creations.formData.body.rte;
						return o.a.getRawText(t, " ") || ""
					}
					return r && e.creations.formData.body.markdown || ""
				},
				y = e => {
					return e.creations.formData.submissionType === n.Ub.LINK_ONLY && e.creations.formData.body.link || ""
				},
				j = e => !f(e) && u(e) && (!g(e) || g(e) && v(e)) && (e => {
					const t = e.creations.formData.title,
						r = y(e),
						n = I(e);
					return !!(t || r || n)
				})(e) && (e.creations.formData.submissionType === n.Ub.POST || e.creations.formData.submissionType === n.Ub.LINK_ONLY || e.creations.formData.submissionType === n.Ub.CROSSPOST)
		},
		"./src/reddit/selectors/experiments/profileAvatarChangeFix.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const i = Object(o.a)(n.r)
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
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(c.K, (e, {
					pageLayer: t
				}) => Object(i.z)(t), (e, {
					pageLayer: t
				}) => Object(i.M)(t), (e, t, r) => !e && !t && r),
				l = Object(n.a)((e, t) => Object(s.c)(e, {
					experimentName: o.Qb,
					experimentEligibilitySelector: e => a(e, t)
				}), e => e),
				d = e => e === o.ze.NoCommunityWidgets,
				u = e => e === o.ze.NoRulesModerators,
				f = e => e === o.ze.RelatedPostsDu
		},
		"./src/reddit/selectors/tooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			const n = e => e.tooltipId,
				o = e => t => t.tooltipId === e
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.f6a1c63f3dc1df6a8502.js.map