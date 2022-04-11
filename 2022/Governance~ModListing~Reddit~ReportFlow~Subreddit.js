// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~ReportFlow~Subreddit.b91081f04a9ebfc1d4d3.js
// Retrieved at 4/11/2022, 11:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~ModListing~Reddit~ReportFlow~Subreddit"], {
		"./src/lib/assertNever.ts": function(e, t, r) {
			"use strict";

			function n(e) {
				throw new Error(`Unexpected object: ${e}`)
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/autosubscribeLinks/index.m.less": function(e, t, r) {
			e.exports = {
				Link: "EoTYIhhD7fy22Kz6jQEgf",
				link: "EoTYIhhD7fy22Kz6jQEgf"
			}
		},
		"./src/lib/autosubscribeLinks/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return I
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/sentry/index.ts"),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				d = r("./src/reddit/actions/subscription/index.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/components/TextWithLinks/index.tsx"),
				u = r("./src/reddit/constants/parameters.ts"),
				l = r("./src/reddit/constants/posts.ts"),
				b = r("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				p = r("./src/reddit/helpers/graphql/normalizeSubscribedSubredditsFromGql/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/subscriptions.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				j = r("./src/lib/autosubscribeLinks/index.m.less"),
				g = r.n(j);
			const I = (e, t) => async (r, i, o) => {
				let {
					apiContext: d,
					gqlContext: a
				} = o;
				const u = i();
				if (!Object(O.Q)(u)) return;
				let l = T(e, t);
				if (!(l = v(l)).length) return;
				let p = await h(a);
				if (p = p.map(e => e.toLowerCase()), !(l = l.filter(e => !p.includes(e.toLowerCase()))).length) return;
				const m = await Object(b.c)(d(), {
					subredditNames: l,
					subscribe: !0
				});
				if (m && m.ok) r(y(l));
				else {
					const e = n.fbt._("Something went wrong", null, {
						hk: "3i6szH"
					});
					r(Object(c.f)({
						id: "AUTO_SUB_TOAST_SHOWING_ID",
						text: e,
						kind: f.b.Error
					})), s.c.captureMessage("User couldn`t auto subscribe")
				}
			}, h = async e => {
				const t = [],
					r = await Object(b.a)(e());
				if (r.ok && r.body) {
					const e = r.body.data,
						n = Object(p.a)(e);
					Object.keys(n.subreddits).map((function(e) {
						return t.push(n.subreddits[e].name), t
					}))
				}
				return t
			}, y = e => async t => {
				t(E(e, !0));
				const r = e.map(e => `r/${e}`),
					s = n.fbt._("You joined {communityName}", [n.fbt._param("communityName", r[0])], {
						hk: "1ESByf"
					}),
					i = n.fbt._("You joined {comma-separated community names} and {last community name}", [n.fbt._param("comma-separated community names", r.slice(0, -1).join(", ")), n.fbt._param("last community name", r.slice(-1)[0])], {
						hk: "2fz7tE"
					}),
					d = n.fbt._("Leave", null, {
						hk: "299znK"
					}),
					u = n.fbt._("Leave All", null, {
						hk: "1myUnv"
					}),
					l = o.a.createElement(a.a, {
						linkClassName: g.a.Link,
						text: e.length > 1 ? i.toString() : s.toString(),
						parseMdLinks: !0,
						parseRegularLinks: !0
					});
				t(Object(c.f)({
					id: "AUTO_SUB_TOAST_SHOWING_ID",
					buttonAction: S(e),
					buttonText: e.length > 1 ? u : d,
					text: l
				}))
			}, S = e => async (t, r, i) => {
				let {
					apiContext: d
				} = i;
				if ((await Object(b.c)(d(), {
						subredditNames: e,
						subscribe: !1
					})).ok) {
					t(E(e, !1));
					const r = e.map(e => `r/${e}`),
						s = n.fbt._("You left {communityName}", [n.fbt._param("communityName", r[0])], {
							hk: "4lGXKi"
						}),
						i = n.fbt._("You left {comma-separated community names} and {last community name}", [n.fbt._param("comma-separated community names", r.slice(0, -1).join(", ")), n.fbt._param("last community name", r.slice(-1)[0])], {
							hk: "1iAogJ"
						}),
						d = o.a.createElement(a.a, {
							linkClassName: g.a.Link,
							text: e.length > 1 ? i.toString() : s.toString(),
							parseMdLinks: !0,
							parseRegularLinks: !0
						});
					t(Object(c.f)({
						id: "AUTO_UNSUB_TOAST_SHOWING_ID",
						text: d
					}))
				} else {
					const e = n.fbt._("Something went wrong", null, {
						hk: "3i6szH"
					});
					t(Object(c.f)({
						id: "AUTO_UNSUB_TOAST_SHOWING_ID",
						text: e,
						kind: f.b.Error
					})), s.c.captureMessage("User couldn`t auto unsubscribe")
				}
			}, E = (e, t) => async (r, n) => {
				const s = n(),
					i = [],
					o = [];
				e.forEach(e => {
					i.push({
						id: Object(m.D)(s, e),
						type: l.a.SUBREDDIT
					}), o.push({
						name: e,
						type: l.a.SUBREDDIT
					})
				}), r(Object(d.e)({
					identifiers: i,
					nameIdentifiers: o,
					profileModels: s.profiles.models,
					subredditModels: s.subreddits.models,
					subscriptionsCount: Object(_.b)(s),
					userIsSubscriber: t
				}))
			}, T = (e, t) => {
				const r = [];
				if (e.hasOwnProperty(u.b) && "true" === e.autosub && t) r.push(t);
				else if (e.hasOwnProperty(u.B) && e.sub.length) {
					const t = e.sub.split(",").map(encodeURIComponent);
					r.push(...t)
				}
				return r
			}, v = e => {
				const t = new Set(e.map(e => e.toLowerCase()).filter(e => e.length)).values();
				return Array.from(t)
			}
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
				block_fill: "block_fill",
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
				campaign: "campaign",
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
				peace: "peace",
				peace_fill: "peace_fill",
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
				topic_reading_fill: "topic_reading_fill",
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
				unban: "unban",
				unban_fill: "unban_fill",
				undo: "undo",
				undo_fill: "undo_fill",
				unheart: "unheart",
				unlock: "unlock",
				unlock_fill: "unlock_fill",
				unmod: "unmod",
				unmod_fill: "unmod_fill",
				unpin: "unpin",
				unpin_fill: "unpin_fill",
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
				user_note: "user_note",
				user_note_fill: "user_note_fill",
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
				wiki_ban: "wiki_ban",
				wiki_ban_fill: "wiki_ban_fill",
				wiki_unban: "wiki_unban",
				wiki_unban_fill: "wiki_unban_fill",
				world: "world",
				world_fill: "world_fill"
			}
		},
		"./src/lib/formatApiError/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts");

			function i(e, t) {
				return e ? e.fields && e.fields.length ? e.fields.map(e => e.msg).join(", ") : e.type && o[e.type] ? o[e.type]() : 401 === t ? n.fbt._("There was an authentication error", null, {
					hk: "2KZTRv"
				}) : n.fbt._("Something went wrong", null, {
					hk: "3i6szH"
				}) : ""
			}
			const o = {
				[s.k]: () => n.fbt._("you're not allowed to do that", null, {
					hk: "1jGKQw"
				}),
				[s.L]: () => n.fbt._("GIF size must be less than {max file size}MB", [n.fbt._param("max file size", Math.floor(s.Z / s.hb).toString())], {
					hk: "1zzsdM"
				}),
				[s.R]: () => n.fbt._("Image size must be less than {max file size}MB", [n.fbt._param("max file size", Math.floor(s.bb / s.hb).toString())], {
					hk: "3H6bF8"
				}),
				[s.T]: () => n.fbt._("Sorry, we accept only images (.png, .jpeg, .gif) and videos (.mp4, .mov)", null, {
					hk: "1hw868"
				}),
				[s.oc]: () => n.fbt._("Video size must be less than {max file size}GB", [n.fbt._param("max file size", (s.fb / s.hb / 1024).toFixed(1))], {
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
		"./src/lib/pageTitle/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				i = r("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				o = r("./src/reddit/selectors/countrySites.ts"),
				d = r("./src/reddit/selectors/meta.ts");
			const c = (e, t, r) => {
				const {
					languageCode: c
				} = Object(o.b)(e), a = r || (Object(d.i)(e) || s.DEFAULT_LOCALE), u = Object(n.isPseudoLocale)(a) ? s.DEFAULT_LOCALE : a;
				if (c) {
					const e = Object(i.d)(c, u.substring(0, 2));
					return t + (e ? ` - ${e}` : "")
				}
				return t
			}
		},
		"./src/lib/stringInterpolate/index.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				return e && t ? e.replace(/%\{(\w+)\}/g, (e, r) => {
					const n = t[r];
					return null == n ? r : String(n)
				}) : e
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/actions/apiRequestState.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "g", (function() {
				return b
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/models/ApiRequestState/index.ts");
			const i = "API_REQUEST_STATE__STARTED",
				o = "API_REQUEST_STATE__COMPLETED",
				d = "API_REQUEST_STATE__FAILED",
				c = "API_REQUEST_STATE__RELEASED";

			function a(e) {
				return {
					type: i,
					payload: {
						apiRequestStatus: s.a.Pending,
						apiRequestId: e
					}
				}
			}

			function u(e) {
				return {
					type: o,
					payload: {
						apiRequestStatus: s.a.Complete,
						apiRequestId: e
					}
				}
			}

			function l(e, t) {
				return {
					type: d,
					payload: {
						apiRequestStatus: s.a.Failed,
						apiRequestId: e,
						apiError: t
					}
				}
			}
			const b = Object(n.a)(c)
		},
		"./src/reddit/actions/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				i = Object(n.a)(s)
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return D
			})), r.d(t, "m", (function() {
				return N
			})), r.d(t, "e", (function() {
				return L
			})), r.d(t, "h", (function() {
				return P
			})), r.d(t, "l", (function() {
				return M
			})), r.d(t, "q", (function() {
				return B
			})), r.d(t, "j", (function() {
				return q
			})), r.d(t, "g", (function() {
				return Q
			})), r.d(t, "f", (function() {
				return K
			})), r.d(t, "o", (function() {
				return H
			})), r.d(t, "p", (function() {
				return $
			})), r.d(t, "d", (function() {
				return J
			})), r.d(t, "a", (function() {
				return Y
			})), r.d(t, "b", (function() {
				return X
			})), r.d(t, "n", (function() {
				return Z
			})), r.d(t, "c", (function() {
				return ee
			})), r.d(t, "k", (function() {
				return te
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/telemetry/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/economics/helpers/async.ts"),
				c = r("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				a = r("./src/reddit/actions/login.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				b = r("./src/reddit/actions/shortcuts/utils.ts"),
				p = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				f = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/actions/vote.ts"),
				_ = r("./src/reddit/endpoints/comment/index.tsx"),
				O = r("./src/reddit/helpers/commentList/index.ts"),
				j = r("./src/reddit/helpers/trackers/comment.ts"),
				g = r("./src/reddit/models/Comment/index.ts"),
				I = r("./src/reddit/models/Post/index.ts"),
				h = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/models/Vote/index.ts"),
				S = r("./src/reddit/selectors/comments.ts"),
				E = r("./src/reddit/selectors/commentSelector.ts"),
				T = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				v = r("./src/reddit/selectors/moderatingComments.ts"),
				x = r("./src/reddit/selectors/moderatorPermissions.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				k = r("./src/reddit/actions/comment/constants.ts");
			const C = {},
				D = Object(o.a)(k.o),
				N = e => async (t, r, n) => {
					let {
						apiContext: i
					} = n;
					if (!Object(w.Q)(r())) return t(Object(a.j)()), void t(Object(u.k)({
						actionSource: u.a.Save,
						redirectUrl: Object(S.m)(r(), {
							commentId: e
						})
					}));
					const o = r().features.comments.models[e];
					if (!o) return;
					const d = o.isSaved ? _.m : _.i;
					if (t(D({
							[e]: {
								isSaved: !o.isSaved
							}
						})), (await d(i(), e)).ok) {
						const r = o.isSaved ? s.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : s.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							n = s.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(f.f)({
							text: r,
							kind: h.b.Undo,
							buttonText: n,
							buttonAction: N(e)
						}))
					} else t(D({
						[e]: {
							isSaved: o.isSaved
						}
					}))
				}, R = e => `viewing-comment-${e}`, A = n.a.telemetry.commentConsumedThreshold, L = e => async (t, r) => {
					const s = r();
					if (!Object(E.b)(s, {
							commentId: e
						}) || Math.random() > n.a.telemetry.commentSampleRate) return;
					j.c({
						state: s,
						commentId: e
					}), i.c.start(R(e));
					const o = setTimeout(() => j.a({
						state: s,
						commentId: e
					}), A);
					C[e] = o
				}, P = (e, t) => async (r, n) => {
					const s = n(),
						o = R(e);
					if (Object(E.b)(s, {
							commentId: e
						}) && i.c.has(o)) {
						const r = i.c.end(o);
						!t && r < A && (clearTimeout(C[e]), delete C[e])
					}
				}, U = Object(o.a)(k.x), G = Object(o.a)(k.w), F = Object(o.a)(k.v), M = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const o = n(),
						a = o.moreComments.models[t],
						u = o.platform.currentPage,
						b = u && u.routeMatch,
						f = b && b.match,
						{
							partialPostId: m
						} = f ? f.params : null;
					if (!m) return;
					const j = Object(I.t)(m);
					r(U({
						moreCommentsId: a.id
					}));
					const g = await Object(_.f)(i(), j, {
						token: a.token
					}, Object(T.a)(o));
					if (g.ok) {
						const t = g.body,
							s = Object(O.a)(t, j, o);
						r(G({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: s,
							...t
						}));
						const i = o.posts.models[j];
						let u;
						i && "subreddit" === i.belongsTo.type && t.comments && (u = i.belongsTo.id, await r(Object(d.a)({
							commentIds: Object.keys(g.body.comments),
							postIds: [i.id],
							skip: ["communityDetails", "subscription"],
							subredditId: u
						})), Object(x.i)(o, u) && r(Object(p.c)(j, !0, a.token)));
						const b = g.body.comments;
						await r(Object(c.b)(u, b)), Object(x.h)(n(), {
							subredditId: i.belongsTo.id
						}) && r(Object(l.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else r(F({
						moreCommentsItem: a,
						...g.error
					}))
				}, B = Object(m.a)(O.b, y.a.upvoted), q = Object(m.a)(O.b, y.a.downvoted), Q = Object(o.a)(k.j), K = Object(o.a)(k.i), z = Object(o.a)(k.e), W = Object(o.a)(k.f), H = (Object(o.a)(k.c), Object(o.a)(k.d), e => {
					let {
						commentId: t,
						commentsPageKey: r,
						scrollToAndRemeasure: n
					} = e;
					return async (e, s) => {
						const i = s(),
							o = Object(g.i)(t),
							d = Object(S.n)(i, {
								commentLink: o,
								commentsPageKey: r
							}),
							c = Object(v.b)(i, {
								commentId: t,
								commentsPageKey: r
							}),
							a = d.depth;
						e(z({
							commentId: t,
							commentsPageKey: r,
							isCollapsed: c
						})), c || 0 !== a || n(t, !0), Object(b.d)()
					}
				}), $ = e => {
					let {
						commentId: t,
						commentsPageKey: r
					} = e;
					return async e => {
						e(W({
							commentId: t,
							commentsPageKey: r
						}))
					}
				}, J = e => {
					let {
						commentLink: t,
						commentsPageKey: r,
						lineDepth: n,
						scrollToAndRemeasure: s
					} = e;
					return async (e, i) => {
						const o = i(),
							d = Object(O.e)(r, t, n, o),
							c = Object(v.b)(o, {
								commentId: t.id,
								commentsPageKey: r
							});
						e(z({
							commentId: d,
							commentsPageKey: r,
							isCollapsed: c
						})), 0 === n && s(d, !0), Object(b.d)()
					}
				}, V = Object(o.a)(k.r), Y = e => t => t(V({
					draftKey: e
				})), X = Object(o.a)(k.a), Z = Object(o.a)(k.F), ee = Object(o.a)(k.b), te = Object(o.a)(k.u)
		},
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return o
			}));
			const n = "CONTENT_CONTROLS_FAILED",
				s = "CONTENT_CONTROLS_LOADED",
				i = "CONTENT_CONTROLS_PENDING",
				o = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/camelCase.js"),
				i = r.n(s),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/reddit/models/HatefulContentFilters/index.ts"),
				b = r("./src/redditGQL/operations/FetchContentControls.json");
			const p = e => {
				switch (e) {
					case "LENIENT":
						return l.a.Lenient;
					case "MODERATE":
						return l.a.Moderate;
					case "STRICT":
						return l.a.Strict;
					default:
						return l.a.Off
				}
			};
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var f = r("./node_modules/lodash/isEmpty.js"),
				m = r.n(f),
				_ = r("./src/redditGQL/operations/UpdateHatefulContentFilters.json"),
				O = r("./src/redditGQL/operations/UpdatePostRequirements.json"),
				j = r("./src/reddit/endpoints/subreddit/about.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/contentControls.ts"),
				h = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				y = r("./src/reddit/selectors/subreddit.ts"),
				S = r("./src/reddit/actions/contentControls/constants.ts");
			const E = Object(d.a)(S.b),
				T = Object(d.a)(S.c),
				v = Object(d.a)(S.a),
				x = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = {
						subredditName: e.toLowerCase()
					};
					if (Object(I.a)(r(), i)) return;
					t(T(i));
					let d = Object(y.D)(r(), e);
					if (!d) {
						const r = await Object(j.a)(s(), e, !1);
						if (r.ok) {
							d = r.body.data.subreddit.id
						}
						if (!d) {
							const e = r.error || {
								type: o.I.NOT_FOUND_ERROR
							};
							return void t(v({
								...i,
								error: e
							}))
						}
					}
					const a = Object(h.c)(r(), {
						subredditId: d
					});
					let l = null;
					const f = await ((e, t) => Object(u.a)(e, {
						...b,
						variables: t
					}).then(e => {
						var t, r;
						if (e.ok) {
							const n = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit;
							return {
								...e,
								body: {
									data: {
										subreddit: {
											hatefulContentFilters: {
												hatefulContentThresholdAbuse: p(null == n ? void 0 : n.hatefulContentThresholdAbuse),
												hatefulContentThresholdIdentity: p(null == n ? void 0 : n.hatefulContentThresholdIdentity),
												wordlist: [],
												wordlistEnabled: !1
											},
											postRequirements: null == n ? void 0 : n.postRequirements
										}
									}
								}
							}
						}
						return e
					}))(s(), {
						subredditId: d,
						includeHatefulFilters: a
					});
					if (f.ok) {
						const e = f.body;
						l = e.data.subreddit && e.data.subreddit
					}
					if (l) t(E({
						...i,
						...l
					}));
					else {
						const r = f.error || {
							type: o.I.UNKNOWN_ERROR
						};
						t(v({
							...i,
							error: r
						})), c.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: f.body,
								responseOk: f.ok
							}), c.c.captureMessage("Missing post requirements data!")
						})
					}
				}, w = Object(d.a)(S.d), k = (e, t) => async (r, s, i) => {
					let {
						gqlContext: o
					} = i;
					const d = e.toLowerCase(),
						c = Object(y.D)(s(), e);
					if (!c) return {
						success: !1
					};
					const l = await ((e, t, r) => {
						const n = [Promise.resolve(null), Promise.resolve(null)];
						if (r.postRequirements && !m()(r.postRequirements)) {
							const s = {
								subredditId: t,
								...r.postRequirements
							};
							n[0] = Object(u.a)(e, {
								...O,
								variables: {
									input: s
								}
							})
						}
						if (r.hatefulContentFilters && !m()(r.hatefulContentFilters)) {
							const s = {
								subredditId: t
							};
							r.hatefulContentFilters.hatefulContentThresholdAbuse && (s.hatefulContentThresholdAbuse = r.hatefulContentFilters.hatefulContentThresholdAbuse), r.hatefulContentFilters.hatefulContentThresholdIdentity && (s.hatefulContentThresholdIdentity = r.hatefulContentFilters.hatefulContentThresholdIdentity), n[1] = Object(u.a)(e, {
								..._,
								variables: {
									input: s
								}
							})
						}
						return Promise.all(n).then(e => {
							let [t, r] = e, n = !0, s = [];
							if (t) {
								const e = t.body,
									r = e.data.updatePostRequirements.fieldErrors;
								n = n && e.data.updatePostRequirements.ok, r && (s = s.concat(r))
							}
							if (r) {
								const e = r.body,
									t = e.data.updateSubredditSettings.fieldErrors;
								n = n && e.data.updateSubredditSettings.ok, t && (s = s.concat(t))
							}
							return {
								ok: n,
								fieldErrors: s.length ? s : null
							}
						})
					})(o(), c, t);
					if (l.ok) return r(w({
						subredditName: d,
						partialUpdates: t
					})), r(Object(a.f)({
						kind: g.b.SuccessCommunity,
						text: n.fbt._("Subreddit content controls updated successfully", null, {
							hk: "1n6QIQ"
						})
					})), {
						success: !0
					}; {
						const s = C(l.fieldErrors);
						return r(Object(a.f)({
							kind: g.b.Error,
							text: n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: k(e, t)
						})), {
							success: !1,
							errors: s || void 0
						}
					}
				}, C = e => e && e.map(e => ({
					...e,
					field: i()(e.field)
				}))
		},
		"./src/reddit/actions/discoveryUnit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			}));
			r("./src/lib/constants/index.ts");
			var n = r("./src/lib/makeActionCreator/index.ts");
			r("./src/lib/makeListingKey/index.ts"), r("./src/lib/addQueryParams/index.ts"), r("./src/lib/makeApiRequest/index.ts"), r("./src/lib/omitHeaders/index.ts"), r("./src/lib/stringInterpolate/index.ts"), r("./src/reddit/constants/headers.ts"), r("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var s = r("./src/reddit/selectors/discoveryUnit.ts");
			r("./src/reddit/selectors/listings.ts");
			const i = "DISCOVERY_UNIT__LIST_PENDING",
				o = "DISCOVERY_UNIT__LIST_LOADED",
				d = "DISCOVERY_UNIT__LIST_FAILED",
				c = Object(n.a)(i),
				a = Object(n.a)(o),
				u = Object(n.a)(d),
				l = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const i = t(),
						o = Object(s.d)(i),
						d = Object(s.c)(i);
					if (o || d) return;
					e(c());
					const l = await (e => Promise.resolve({
						ok: !0,
						error: null,
						status: 200,
						headers: {},
						details: "",
						body: {
							global: {
								discovery_config_v1: {
									discovery_units: [{
										id: "xd_66",
										enabled: !0,
										layout: "large",
										parameters: {
											sort: "hot"
										},
										surface: "explore",
										unit_name: "posts_in_category_rails_hero",
										unit_type: "listing",
										url: "/api/posts_in_category.json"
									}, {
										id: "xd_67",
										enabled: !0,
										layout: "large",
										surface: "explore",
										unit_name: "posts_in_subreddit_hero",
										unit_type: "listing",
										url: "/r/%{subredditName}/hot.json"
									}, {
										id: "xd_68",
										enabled: !0,
										layout: "large",
										parameters: {
											sort: "hot"
										},
										surface: "explore",
										unit_name: "posts_in_category_rails_small",
										unit_type: "listing",
										url: "/api/posts_in_category.json"
									}, {
										id: "xd_69",
										enabled: !0,
										layout: "large",
										surface: "explore",
										unit_name: "posts_in_subreddit_small",
										unit_type: "listing",
										url: "/r/%{subredditName}/hot.json"
									}, {
										id: "xd_70",
										enabled: !0,
										layout: "large",
										surface: "search",
										unit_name: "search_posts",
										unit_type: "community_category",
										url: "/api/posts_in_category.json"
									}, {
										id: "xd_71",
										enabled: !0,
										layout: "large",
										surface: "search",
										unit_name: "search_subreddits",
										unit_type: "community_category",
										url: "/api/subreddits_in_category.json"
									}, {
										id: "xd_72",
										enabled: !0,
										layout: "large",
										surface: "subreddit_listing",
										unit_name: "community_banner_posts",
										unit_type: "subreddit_listing",
										url: "/r/%{subredditName}/top.json"
									}, {
										id: "xd_83",
										enabled: !0,
										layout: "large",
										surface: "subreddit_listing",
										unit_name: "best_of_community",
										unit_type: "subreddit_listing",
										url: "/r/%{subredditName}/top.json"
									}, {
										id: "xd_91",
										enabled: !0,
										layout: "large",
										surface: "comments",
										title: "Posts in subreddit %{subredditName}",
										unit_name: "posts_in_subreddit_vertical",
										unit_type: "listing"
									}, {
										id: "xd_92",
										enabled: !0,
										layout: "large",
										surface: "comments",
										title: "Posts in recommended home",
										unit_name: "posts_in_rec_home",
										unit_type: "listing"
									}, {
										id: "xd_96",
										enabled: !0,
										layout: "small",
										surface: "subreddit_listing",
										unit_name: "top_week_posts",
										unit_type: "subreddit_listing",
										url: "/r/%{subredditName}/top.json"
									}, {
										id: "xd_97",
										enabled: !0,
										layout: "large",
										surface: "subreddit_listing",
										unit_name: "top_week_posts_large",
										unit_type: "subreddit_listing",
										url: "/r/%{subredditName}/top.json"
									}]
								}
							}
						}
					}))(n());
					if (l.ok) {
						const {
							discoveryUnits: t
						} = (e => {
							return {
								discoveryUnits: e.global.discovery_config_v1.discovery_units.reduce((e, t) => {
									const r = {
										enabled: t.enabled,
										experiment: t.experiment,
										id: t.id,
										index: t.index,
										layout: t.layout,
										options: t.options,
										parameters: t.parameters,
										subtitle: t.subtitle,
										subtitleIcon: t.subtitle_icon,
										surface: t.surface,
										title: t.title,
										unitName: t.unit_name,
										unitType: t.unit_type,
										url: t.url
									};
									return e[r.id] = r, e
								}, {})
							}
						})(l.body);
						e(a({
							discoveryUnits: t
						}))
					} else e(u({
						error: l.error
					}))
				}, b = "DISCOVERY_UNIT__UNIT_DATA_PENDING", p = "DISCOVERY_UNIT__UNIT_DATA_LOADED", f = "DISCOVERY_UNIT__UNIT_DATA_FAILED";
			Object(n.a)(b), Object(n.a)(p), Object(n.a)(f)
		},
		"./src/reddit/actions/economics/helpers/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => async t => {
				const n = await (() => r.e("EconHelperActions").then(r.bind(null, "./src/reddit/actions/economics/helpers/index.ts")).then(e => e.fetchAll))();
				await t(n(e))
			}
		},
		"./src/reddit/actions/economics/powerups/flairs/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/lib/loadableAction/index.ts");
			const s = Object(n.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditUserCommentsPowerupsInfoFromCommentCollection)),
				i = Object(n.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo))
		},
		"./src/reddit/actions/economics/powerups/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || ""
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return z
			})), r.d(t, "k", (function() {
				return W
			})), r.d(t, "o", (function() {
				return H
			})), r.d(t, "r", (function() {
				return $
			})), r.d(t, "q", (function() {
				return J
			})), r.d(t, "l", (function() {
				return ee
			})), r.d(t, "m", (function() {
				return te
			})), r.d(t, "n", (function() {
				return re
			})), r.d(t, "b", (function() {
				return ne
			})), r.d(t, "u", (function() {
				return se
			})), r.d(t, "v", (function() {
				return ie
			})), r.d(t, "g", (function() {
				return oe
			})), r.d(t, "a", (function() {
				return de
			})), r.d(t, "w", (function() {
				return ae
			})), r.d(t, "p", (function() {
				return ue
			})), r.d(t, "i", (function() {
				return le
			})), r.d(t, "j", (function() {
				return be
			})), r.d(t, "s", (function() {
				return pe
			})), r.d(t, "t", (function() {
				return fe
			})), r.d(t, "f", (function() {
				return me
			})), r.d(t, "c", (function() {
				return _e
			})), r.d(t, "d", (function() {
				return Oe
			})), r.d(t, "h", (function() {
				return je
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/uuid/index.js"),
				i = r.n(s),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/reducers/features/predictions/index.ts"),
				c = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/makeRequest/index.ts")),
				a = r("./src/lib/uploadToS3/index.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/redditGQL/operations/CreateMediaUploadLease.json"),
				b = r("./src/redditGQL/operations/SubmitMediaUpload.json");
			var p = r("./src/reddit/helpers/media/index.ts"),
				f = r("./src/redditGQL/types.ts");
			const m = new Map([
					["image/png", f.i.Png],
					["image/gif", f.i.Gif],
					["image/jpeg", f.i.Jpeg]
				]),
				_ = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					const o = await Object(p.h)(t) || t.type,
						d = m.get(o);
					if (!d) throw new Error("Unacceptable file type");
					const {
						mediaId: f,
						uploadLease: _
					} = await (async (e, t) => {
						const r = await Object(u.a)(e, {
							...l,
							variables: {
								input: t
							}
						});
						if (!Object(c.c)(r) || r.error) throw new Error("Failed to create upload lease");
						return r.body.data.createMediaUploadLease
					})(i(), {
						mimetype: d
					}), O = function(e) {
						let {
							uploadLeaseUrl: t,
							uploadLeaseHeaders: r
						} = e;
						return {
							action: t,
							fields: (null == r ? void 0 : r.map(e => {
								let {
									header: t,
									value: r
								} = e;
								return {
									name: t,
									value: r
								}
							})) || []
						}
					}(_), j = await Object(a.a)(t, O);
					if (!Object(c.c)(j)) throw new Error("Failed to upload file to S3");
					return await (async (e, t) => {
						const r = await Object(u.a)(e, {
							...b,
							variables: {
								input: t
							}
						});
						if (!Object(c.c)(r) || r.error) throw new Error("Failed to submit media")
					})(i(), {
						mediaId: f,
						redditId: e
					}), {
						mediaId: f,
						mimeType: d
					}
				};
			var O = r("./src/reddit/actions/toaster.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/lib/delay/index.ts"),
				I = r("./src/lib/makeActionCreator/index.ts"),
				h = r("./src/reddit/endpoints/economics/predictions.ts");

			function y(e) {
				let {
					topPredictorsRank: t,
					currentRank: r
				} = e;
				return {
					currentRank: r ? S(r) : null,
					topPredictorsRank: t.map(S)
				}
			}

			function S(e) {
				let {
					score: t,
					rank: r,
					redditor: n,
					redditorInfo: s
				} = e;
				var i, o;
				return {
					score: t,
					rank: r,
					redditor: n ? {
						...n,
						icon: null !== (i = n.icon) && void 0 !== i ? i : null,
						profile: null !== (o = n.profile) && void 0 !== o ? o : null
					} : null,
					redditorInfo: s
				}
			}
			var E = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				T = r("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				v = r("./src/reddit/actions/login.ts"),
				x = r("./src/reddit/actions/modal.ts"),
				w = r("./src/reddit/constants/modals.ts"),
				k = r("./src/reddit/selectors/features/predictions/leaderboards/index.ts"),
				C = r("./src/reddit/selectors/subreddit.ts"),
				D = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/selectors/features/predictions/creation/index.ts"),
				R = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				A = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(o.a)({
				features: {
					predictions: d.a
				}
			});
			const L = Object(I.a)(A.d),
				P = Object(I.a)(A.c),
				U = Object(I.a)(A.e),
				G = Object(I.a)(A.f),
				F = Object(I.a)(A.i),
				M = Object(I.a)(A.h),
				B = Object(I.a)(A.j),
				q = Object(I.a)(A.q),
				Q = Object(I.a)(A.t),
				K = Object(I.a)(A.p),
				z = Object(I.a)(A.b),
				W = (e, t, r) => async (n, s, i) => {
					let {
						gqlContext: o
					} = i;
					const d = Object(D.Q)(s());
					if (!Object(k.c)(s(), {
							subredditId: e
						})) {
						n(L({
							subredditId: e
						}));
						try {
							const {
								predictionTournaments: s,
								predictionWinners: i
							} = await Object(h.i)(o(), {
								subredditId: e,
								period: r,
								top: t,
								includeCurrentRank: d
							}), c = y(i);
							n(U({
								subredditId: e,
								leaderboard: c
							})), s && (n(re(e, s)), null == s || s.forEach(e => {
								let {
									tournamentId: t,
									winners: r
								} = e;
								n(G({
									tournamentId: t,
									leaderboard: y(r)
								}))
							}))
						} catch {
							n(P({
								subredditId: e
							}))
						}
					}
				}, H = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					const o = Object(D.Q)(n());
					if (!Object(k.g)(n(), {
							tournamentId: t
						})) {
						r(F({
							tournamentId: t
						}));
						try {
							const {
								predictionWinners: n
							} = await Object(h.j)(i(), {
								subredditId: e,
								tournamentId: t,
								includeCurrentRank: o
							}), s = y(n);
							r(B({
								tournamentId: t,
								leaderboard: s
							}))
						} catch {
							r(M({
								tournamentId: t
							}))
						}
					}
				}, $ = e => {
					let {
						coinPackageId: t,
						optionId: r,
						postId: n,
						price: s
					} = e;
					return async (e, i, o) => {
						let {
							gqlContext: d
						} = o;
						const c = await Object(h.p)(d(), {
							coinPackageId: t,
							optionId: r,
							postId: n,
							price: s
						});
						return e(q({
							pollId: n,
							prediction: c,
							price: s
						})), c
					}
				}, J = e => {
					let {
						optionId: t,
						postId: r
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: i
						} = s;
						const o = await Object(h.n)(i(), {
								optionId: t,
								postId: r
							}),
							{
								resolvePrediction: d
							} = o.body.data;
						if (!(null == d ? void 0 : d.poll)) throw new Error("Failed to resolve prediction");
						return e(K({
							pollId: r,
							prediction: d.poll
						})), d.poll
					}
				}, V = Object(I.a)(A.k), Y = Object(I.a)(A.m), X = Object(I.a)(A.l), Z = Object(I.a)(A.o), ee = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r(),
						o = Object(C.D)(i, e);
					if (Object(R.k)(i, {
							subredditId: o
						})) return Object(R.g)(i, {
						subredditId: o
					});
					t(V({
						subredditId: o
					}));
					const d = await Object(h.k)(s(), {
							subredditName: e,
							isLatestOnly: !0,
							isIncludingPredictions: !0,
							isIncludingParticipants: !0,
							isIncludingCancelledPredictions: !0
						}),
						c = {};
					d.forEach(e => {
						var r;
						if ((null === (r = e.predictionPosts) || void 0 === r ? void 0 : r.length) && e.predictionPosts.forEach(e => {
								e && (c[e.id] = Object(E.f)(e))
							}), e.winners) {
							const r = y(e.winners);
							t(G({
								tournamentId: e.tournamentId,
								leaderboard: r
							}))
						}
					});
					const a = d.map(e => Object(T.a)(e));
					return t(X({
						subredditId: o,
						tournaments: a
					})), t(Y({
						subredditId: o,
						tournaments: a
					})), t(Z({
						posts: c,
						meta: i.meta
					})), a
				}, te = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r(),
						o = Object(C.D)(i, e),
						d = await Object(h.l)(s(), {
							subredditName: e,
							isLatestOnly: !0
						});
					t(re(o, d))
				}, re = (e, t) => r => {
					const n = t.map(e => Object(T.a)(e));
					r(Y({
						subredditId: e,
						tournaments: n
					}))
				}, ne = Object(I.a)(A.a), se = Object(I.a)(A.r), ie = Object(I.a)(A.s), oe = (e, t, r, n) => async (s, i, o) => {
					let {
						gqlContext: d
					} = o;
					const c = i(),
						a = Object(N.b)(c);
					let u = null;
					if (!a) throw new Error("Failed to create tournament, no prediction drafts attached");
					if (n instanceof File) {
						const {
							mediaId: t,
							mimeType: r
						} = await s(_(`icon_pred_${e}`, n));
						await Object(g.a)(3e3), u = {
							mediaId: t,
							width: 1,
							height: 1,
							mimeType: r.toLowerCase()
						}
					} else n && (u = {
						url: n,
						width: 1,
						height: 1,
						mimeType: ""
					});
					const l = await Object(h.e)(d(), {
							tournamentId: null,
							name: t,
							themeId: r,
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: a,
							currency: f.w.Tokens,
							tokenIcon: u
						}),
						b = Object(T.a)(l);
					s(ce(b))
				}, de = (e, t) => async (r, n, s) => {
					let {
						gqlContext: o
					} = s;
					const d = Object(N.b)(n());
					if (!d) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(h.a)(o(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${i.a.v4()}`,
							subredditId: t,
							predictionDrafts: d
						}),
						a = Object(T.a)(c);
					r(ce(a))
				}, ce = Object(I.a)(A.g), ae = (e, t, r) => async (t, n, s) => {
					let {
						gqlContext: i
					} = s;
					const o = await Object(h.o)(i(), {
							tournamentId: e,
							name: r
						}),
						d = Object(T.a)(o);
					t(ce(d))
				}, ue = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = await Object(h.f)(s(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: o
						} = i.body.data;
					if (!o.tournament) throw new Error("Failed to update prediction name");
					return t(ce(o.tournament)), o.tournament
				}, le = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = await Object(h.g)(s(), {
						postId: e
					});
					if (!i.ok || i.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: o
					} = i.body.data;
					if (!o.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return o.predictionChipPackages
				}, be = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = await Object(h.h)(s(), {
						tournamentId: e
					});
					if (!i.ok || i.error) throw new Error("Failed to fetch token balance");
					const {
						identity: o
					} = i.body.data;
					if (!o.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return o.predictionTokens
				}, pe = e => {
					let {
						coinPackageId: t,
						selectedOptionId: r,
						price: n,
						pollId: s,
						tournamentId: i,
						tournamentPostId: o
					} = e;
					return async e => {
						const d = await e($({
							coinPackageId: t,
							optionId: r,
							postId: s,
							price: n
						}));
						return e(Q({
							predictionId: s,
							selectedOptionId: r,
							tournamentId: i,
							tournamentPostId: o
						})), d
					}
				}, fe = e => async (t, r) => {
					const n = r();
					Object(D.Q)(n) ? await t(Object(x.h)(w.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(v.i)())
				}, me = () => Object(x.g)(w.a.ECON_PREDICTIONS_PREMIUM_UPSELL), _e = e => async (t, r, s) => {
					let {
						gqlContext: i
					} = s;
					try {
						const r = await Object(h.b)(i(), {
							postId: e
						});
						t(z({
							postId: e,
							prediction: r
						}));
						const s = Object(O.e)(n.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), j.b.SuccessMod);
						t(Object(O.f)(s))
					} catch {
						const e = Object(O.e)(n.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), j.b.Error);
						t(Object(O.f)(e))
					}
				};

			function Oe(e, t) {
				return async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					const o = await Object(h.c)(i(), {
						postId: e,
						...t
					});
					return r(z({
						postId: e,
						prediction: o
					})), o
				}
			}
			const je = e => async (t, r, n) => {
				let {
					gqlContext: s
				} = n;
				return Object(h.m)(s(), {
					subredditId: e
				})
			}
		},
		"./src/reddit/actions/externalAccount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return I
			})), r.d(t, "k", (function() {
				return h
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "g", (function() {
				return T
			})), r.d(t, "o", (function() {
				return N
			})), r.d(t, "p", (function() {
				return R
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "n", (function() {
				return M
			})), r.d(t, "e", (function() {
				return B
			})), r.d(t, "f", (function() {
				return q
			})), r.d(t, "d", (function() {
				return Q
			})), r.d(t, "m", (function() {
				return H
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/addQueryParams/index.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/constants/parameters.ts"),
				c = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				b = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const p = e => {
				return e.reduce((e, t) => (e[t.provider] = t, e), {})
			};
			var f = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/models/User/index.ts"),
				_ = r("./src/reddit/selectors/externalAccount.ts"),
				O = r("./src/reddit/selectors/platform.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/selectors/user.ts");
			const I = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				h = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				y = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				S = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				E = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				T = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				v = Object(s.a)(I),
				x = Object(s.a)(h),
				w = Object(s.a)(y),
				k = Object(s.a)(S),
				C = Object(s.a)(E),
				D = Object(s.a)(T),
				N = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const i = r(),
						o = Object(g.k)(i),
						d = e || o && Object(m.e)(o);
					if (!d) return;
					if (Object(_.d)(i, {
							username: d
						})) return;
					t(v(d));
					const f = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/user/${t}.json`),
						traceRequestName: "get_external_accounts",
						method: c.jb.GET
					}))(s(), d);
					if (f.ok) {
						const e = p(f.body);
						t(x({
							username: d,
							accountsData: e
						}))
					} else t(w(f.error))
				}, R = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t(),
						i = Object(O.d)(s);
					if (!i) return;
					const o = s.externalAccount.api.subreddit.fetched[i],
						d = s.externalAccount.api.subreddit.pending[i];
					if (o || d) return;
					const f = Object(j.u)(s, {
						subredditName: i
					});
					if (!(f && f.hasExternalAccount)) return;
					e(k(i));
					const m = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/subreddit/${t}.json`),
						method: c.jb.GET
					}))(n(), i);
					if (m.ok) {
						const t = p(m.body);
						e(C({
							subredditName: i,
							accountsData: t
						}))
					} else e(D(m.error))
				}, A = "EXTERNAL_ACCOUNT_DISCONNECT_PENDING", L = "EXTERNAL_ACCOUNT_DISCONNECT_SUCCESS", P = "EXTERNAL_ACCOUNT_DISCONNECT_FAILED", U = Object(s.a)(A), G = Object(s.a)(L), F = Object(s.a)(P), M = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					t(U({
						provider: e
					}));
					const i = Object(g.k)(r()),
						o = Object(m.e)(i),
						d = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/disconnect.json`),
							method: c.jb.POST
						}))(s(), e);
					d.ok ? t(G({
						provider: e,
						username: o
					})) : t(F({
						provider: e,
						error: d.error
					}))
				}, B = "OAUTH_FLOW_URL_PENDING", q = "OAUTH_FLOW_URL_SUCCESS", Q = "OAUTH_FLOW_URL_FAILED", K = Object(s.a)(B), z = Object(s.a)(q), W = Object(s.a)(Q), H = e => async (t, r, s) => {
					let {
						apiContext: p
					} = s;
					t(K({
						provider: e
					}));
					const m = Object(i.a)(window.location.href, {
							[d.e]: e
						}),
						_ = await ((e, t, r) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/connect.json`),
							method: c.jb.POST,
							data: {
								redirect_url: r
							}
						}))(p(), e, m);
					if (_.ok) {
						const {
							redirect_url: r
						} = _.body;
						t(z({
							provider: e
						})), window.location.href = r
					} else t(W({
						provider: e,
						error: _.error
					})), t(Object(o.f)({
						kind: f.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "196FiB"
						})
					}))
				}
		},
		"./src/reddit/actions/gold/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "o", (function() {
				return g
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "m", (function() {
				return k
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "k", (function() {
				return Q
			})), r.d(t, "a", (function() {
				return K
			})), r.d(t, "c", (function() {
				return z
			})), r.d(t, "j", (function() {
				return W
			})), r.d(t, "i", (function() {
				return H
			})), r.d(t, "g", (function() {
				return $
			})), r.d(t, "h", (function() {
				return J
			})), r.d(t, "f", (function() {
				return V
			})), r.d(t, "n", (function() {
				return X
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				o = r("./src/telemetry/index.ts"),
				d = r("./src/reddit/actions/login.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/endpoints/gold/powerups/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/helpers/trackers/powerups.ts"),
				O = r("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				j = r("./src/reddit/actions/gold/constants.ts");
			const g = e => async (t, r, s) => {
				let {
					gqlContext: o
				} = s;
				if (!!r().user.powerups.fetched && !e) return;
				t(I());
				const d = n.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const e = await Object(l.j)(o());
					if (e.ok) {
						const r = e.body;
						if (r.errors && r.errors.length) return void(await t(S(d)));
						if (!r.data.identity) return void(await t(y(d)));
						await t(h({
							powerups: r.data.identity.powerups
						}))
					}
				} catch (c) {
					i.c.captureException(c), await t(S(d))
				}
			}, I = Object(s.a)(j.Bb), h = Object(s.a)(j.Ab), y = Object(s.a)(j.zb), S = e => async (t, r) => {
				await t(y(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, E = (e, t) => async (e, r, s) => {
				let {
					gqlContext: o
				} = s;
				var d;
				if (!!r().users.powerups.fetched) return;
				e(T());
				const c = n.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const r = await Object(l.g)(o(), t);
					if (r.ok) {
						const n = r.body;
						if (n.errors && n.errors.length) return void(await e(w(c)));
						if (!n.data.redditorInfoById) return void(await e(x(c)));
						const s = (null === (d = n.data.redditorInfoById.powerups) || void 0 === d ? void 0 : d.supportedSubreddits) || [];
						await e(v({
							supportedSubreddits: s,
							userId: t
						}))
					}
				} catch (a) {
					i.c.captureException(a), await e(w(c))
				}
			}, T = Object(s.a)(j.hb), v = Object(s.a)(j.gb), x = Object(s.a)(j.fb), w = e => async (t, r) => {
				await t(x(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, k = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return async (r, s, o) => {
					let {
						gqlContext: d
					} = o;
					var c;
					const a = s();
					if (Object(p.k)(a, {
							subredditId: e
						}) && Object(f.a)(a, {
							subredditId: e
						}) && (!t.fullData || Object(p.m)(a, {
							subredditId: e
						})) && !t.forceLoad) return;
					r(A());
					const u = t.fullData ? l.i : l.h;
					try {
						const n = await u(d(), e, !!t.includeIdentity);
						if (n.ok) {
							const s = n.body;
							if (null === (c = s.errors) || void 0 === c ? void 0 : c.length) return void(await r(G(s.errors[0].message)));
							if (t.fullData) {
								const {
									data: t
								} = s, n = C(t.subredditInfoById, t.identity);
								D(r, e, n)
							} else {
								const {
									powerups: t = null,
									powerupsSettings: n = null
								} = s.data.subredditInfoById || {};
								await r(L({
									powerups: t,
									subredditId: e,
									benefitStatuses: null == n ? void 0 : n.benefitStatuses
								}))
							}
						}
					} catch (b) {
						i.c.captureException(b), await r(G(n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						})))
					}
				}
			}, C = (e, t) => {
				var r, n, s;
				const {
					powerups: i = null,
					powerupsSettings: o = null,
					supporters: d = null,
					productOffers: c = null,
					subredditAchievementFlairs: a
				} = e || {}, u = null == t ? void 0 : t.powerups;
				return {
					powerups: i,
					benefitStatuses: null == o ? void 0 : o.benefitStatuses,
					productOffers: null !== (r = null == c ? void 0 : c.offers) && void 0 !== r ? r : [],
					recentSupporters: null !== (n = null == d ? void 0 : d.recentSupporters) && void 0 !== n ? n : [],
					topSupporters: null !== (s = null == d ? void 0 : d.topSupporters) && void 0 !== s ? s : [],
					userPowerups: u,
					subredditAchievementFlairs: null != a ? a : []
				}
			}, D = (e, t, r) => e(P({
				subredditId: t,
				...r
			})), N = Object(s.a)(j.I), R = e => async (t, r, n) => {
				let {
					gqlContext: s
				} = n;
				const i = r(),
					o = e.filter(e => void 0 === Object(p.k)(i, {
						subredditId: e
					}));
				if (!!o.length) try {
					const e = await Object(l.e)(s(), o);
					t(N({
						subredditsPowerupsInfo: e
					}))
				} catch (d) {
					await t(G(d.message))
				}
			}, A = Object(s.a)(j.rb), L = Object(s.a)(j.qb), P = Object(s.a)(j.pb), U = Object(s.a)(j.ob), G = e => async (t, r) => {
				await t(U(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, F = Object(s.a)(j.T), M = Object(s.a)(j.U), B = Object(s.a)(j.V), q = e => async (t, r) => {
				await t(F(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, Q = (e, t, r, s) => async (o, d, p) => {
				let {
					gqlContext: f
				} = p;
				o(M({
					subredditId: e,
					powerupsCount: t,
					isAnonymous: r,
					allocatedAt: s
				}));
				try {
					const i = {
							subredditId: e,
							powerupsCount: t,
							isAnonymous: r
						},
						p = await Object(l.f)(f(), {
							input: i
						});
					let _ = !1,
						j = null;
					if (p.ok) {
						const e = p.body;
						_ = e.data.reallocatePowerups.ok, j = e.data.reallocatePowerups.errors
					}
					const I = Object(m.k)(d());
					if (_ && I) await o((e => async (t, r) => {
						t(B(e)), await t(k(e.subredditId, {
							forceLoad: !0,
							fullData: !1
						})), t(g(!0)), t(Object(O.a)(e.subredditId, !0)), e.powerupsCount && (t(Object(c.g)(u.a.ECON_POWERUPS_PURCHASE)), e.powerupsCount > 0 ? t(Object(c.h)(u.a.ECON_POWERUPS_SUCCESS)) : t(Object(a.f)({
							kind: b.b.SuccessCommunityGreen,
							duration: a.a,
							text: n.fbt._("Your Powerup subscription has been canceled.", null, {
								hk: "z7ZJZ"
							})
						})))
					})({
						subredditId: e,
						powerupsCount: t,
						isAnonymous: r,
						user: I,
						allocatedAt: s
					}));
					else {
						const e = j && j[0] && j[0].message || n.fbt._("An unknown error occurred", null, {
							hk: "2oAbwZ"
						});
						await o(q(e))
					}
				} catch (_) {
					i.c.captureException(_);
					const e = _,
						t = e && e.message || n.fbt._("An unknown error occurred", null, {
							hk: "2oAbwZ"
						});
					await o(q(t))
				}
			}, K = e => async (t, r, n) => {
				let {
					gqlContext: s
				} = n;
				await Object(l.c)(s(), e)
			}, z = Object(s.a)(j.E), W = Object(s.a)(j.R), H = e => Object(c.h)(u.a.ECON_SUPPORTERS_LIST, {
				subredditId: e
			}), $ = (e, t) => async (r, n) => {
				const s = n();
				return Object(m.k)(s) ? (Object(o.a)(Object(_.h)(e)(s)), r(Object(c.h)(u.a.ECON_POWERUPS_MARKETING, {
					subredditId: t
				}))) : r(Object(d.i)())
			}, J = e => async t => t(Object(c.h)(u.a.ECON_POWERUPS_PREMIUM_UPSELL, {
				subredditId: e
			})), V = () => async (e, t) => {
				const r = t();
				return Object(m.k)(r) ? e(Object(c.h)(u.a.ACHIEVEMENT_FLAIR)) : e(Object(d.i)())
			}, Y = Object(s.a)(j.N), X = (e, t) => async (r, n, s) => {
				let {
					gqlContext: i
				} = s;
				const o = await Object(l.k)(i(), e, (e => Object.keys(e).map(t => ({
					benefit: t,
					isEnabled: e[t]
				})))(t));
				if (o.ok) {
					const t = o.body.data.updatePowerupsSettings.powerupsSettings.benefitStatuses;
					return r(Y({
						subredditId: e,
						benefitStatuses: t
					})), !0
				}
				return !1
			}
		},
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return n
			})), r.d(t, "g", (function() {
				return s
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "l", (function() {
				return o
			})), r.d(t, "k", (function() {
				return d
			})), r.d(t, "j", (function() {
				return c
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			}));
			const n = "SUBREDDIT__FLAIRED_USERS_PENDING",
				s = "SUBREDDIT__FLAIRED_USERS_LOADED",
				i = "SUBREDDIT__FLAIRED_USERS_FAILED",
				o = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				d = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				c = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				a = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				b = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				p = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				f = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
		},
		"./src/reddit/actions/grantUserFlair/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return y
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "d", (function() {
				return A
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditFlairedRedditorByName.json"),
				d = r("./src/redditGQL/operations/SubredditFlairedRedditors.json");
			var c = r("./src/reddit/endpoints/flair/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts");
			var b = e => {
				const {
					subreddit: t,
					redditorInfoByName: r
				} = e.data, {
					id: n,
					flairedRedditorByName: s
				} = t, i = {};
				let o = null;
				if (!r) return {
					subredditId: n,
					searchResult: o,
					flairedUsers: i
				};
				const {
					name: d
				} = r;
				if (o = d, s) {
					const {
						flair: e,
						redditor: t
					} = s, {
						name: r
					} = t;
					e && (i[r] = Object(l.a)(e)[0])
				}
				return {
					subredditId: n,
					searchResult: o,
					flairedUsers: i
				}
			};
			var p = e => {
					const {
						subreddit: t
					} = e.data, {
						id: r,
						flairedRedditors: n
					} = t, {
						pageInfo: s,
						edges: i
					} = n, o = [], d = {};
					return i.forEach(e => {
						const {
							node: t
						} = e, {
							flair: r,
							redditor: {
								name: n
							}
						} = t;
						if (o.push(n), r) {
							const e = Object(l.a)(r)[0];
							d[n] = e
						}
					}), {
						subredditId: r,
						flairedUsers: d,
						userOrder: o,
						pageInfo: s
					}
				},
				f = r("./src/reddit/models/SubredditModeration/index.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/models/User/index.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/actions/grantUserFlair/constants.ts");
			const g = Object(s.a)(j.i),
				I = Object(s.a)(j.g),
				h = Object(s.a)(j.f),
				y = (e, t) => async (r, s, o) => {
					let {
						gqlContext: c
					} = o;
					const u = t && t.after || "",
						l = t && t.before || "",
						b = Object(O.D)(s(), e),
						_ = Object(f.e)(b, u, l);
					if (!!s().pages.modHub.flairedUsers.userOrder[_]) return;
					r(g());
					const j = await ((e, t, r) => Object(i.a)(e, {
						...d,
						variables: {
							subredditName: t,
							...r
						}
					}))(c(), e, t);
					if (j.ok) {
						const e = {
							...p(j.body),
							key: _
						};
						r(I(e))
					} else {
						const e = j.error;
						r(h(e)), r(Object(a.f)({
							kind: m.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							})
						}))
					}
				}, S = Object(s.a)(j.l), E = Object(s.a)(j.k), T = Object(s.a)(j.j), v = (e, t) => async (r, s, d) => {
					let {
						gqlContext: c
					} = d;
					const u = Object(O.S)(s(), {
						subredditId: e
					}).name;
					r(S());
					const l = await ((e, t, r) => Object(i.a)(e, {
						...o,
						variables: {
							subredditName: t,
							name: r
						}
					}))(c(), u, t);
					if (l.ok) {
						const e = b(l.body);
						r(E(e))
					} else r(T(l.error)), r(Object(a.f)({
						kind: m.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						})
					}))
				}, x = Object(s.a)(j.e), w = Object(s.a)(j.c), k = Object(s.a)(j.d), C = (e, t) => async (r, s, i) => {
					let {
						apiContext: o
					} = i;
					const d = s(),
						u = Object(O.S)(d, {
							subredditId: t
						}).name;
					r(x());
					const l = await Object(c.a)(o(), e, u);
					if (l.ok) {
						r(w({
							userName: e,
							subredditId: t
						}));
						const s = Object(a.e)(n.fbt._("User flair cleared", null, {
							hk: "4yyH00"
						}), m.b.SuccessMod);
						r(Object(a.f)(s))
					} else {
						r(k());
						const s = Object(a.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "uG2KO"
						}), m.b.Error, n.fbt._("Retry", null, {
							hk: "3oiY99"
						}), C(e, t));
						r(Object(a.f)(s))
					}
					return l.ok || l.error
				}, D = Object(s.a)(j.h), N = Object(s.a)(j.b), R = Object(s.a)(j.a), A = (e, t, r) => async (s, i, o) => {
					let {
						apiContext: d
					} = o;
					const l = i(),
						b = l.pages.modHub.flairedUsers.search.result === e && !l.pages.modHub.flairedUsers.models[e],
						p = {
							userName: e,
							subredditId: t,
							applied: r
						},
						f = r && r.templateId,
						j = Object(O.S)(l, {
							subredditId: t
						}),
						g = r && Object(u.g)(r),
						I = r ? r.cssClass : void 0,
						h = await Object(c.g)(d(), e, j.name, f, g, I);
					if (h.ok) {
						if (b) {
							let e;
							Object.keys(l.pages.modHub.flairedUsers.userOrder).forEach(t => {
								!1 === l.pages.modHub.flairedUsers.pageInfo[t].hasNextPage && l.pages.modHub.flairedUsers.userOrder[t].length < 50 && (e = t)
							});
							const t = {
								...p,
								key: e
							};
							s(R(t))
						}
						e === (l.user.account && Object(_.e)(l.user.account)) ? s(D(p)) : b || s(N(p))
					} else {
						const e = Object(a.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4hXQvr"
						}), m.b.Error);
						s(Object(a.f)(e))
					}
					return h.ok || h.error
				}
		},
		"./src/reddit/actions/meta.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "k", (function() {
				return j
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "j", (function() {
				return y
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				u = r("./src/reddit/selectors/user.ts");
			const l = "META__GEO_CHANGED",
				b = Object(i.a)(l),
				p = "META__META_RECEIVED",
				f = (Object(i.a)(p), "META__SET_LOCALE"),
				m = Object(i.a)(f),
				_ = e => async (t, r, i) => {
					let {
						apiContext: l
					} = i;
					if (!e) return;
					const b = r(),
						p = l();
					let f;
					if (t(m(e)), Object(n.isPseudoLocale)(e) ? (Object(u.N)(b) || Object(a.b)(b)) && (f = e) : f = Object(n.isoLocaleToR2Language)(e), !f) return;
					const _ = new URL(window.location.href);
					Object(u.Q)(b) ? Object(n.isPseudoLocale)(f) ? _.searchParams.set("locale", f) : (await Object(o.a)(Object(d.a)(p, [c.a]), {
						data: {
							lang: f
						},
						endpoint: `${p.apiUrl}/api/v1/me/prefs`,
						method: s.jb.PATCH,
						type: "json"
					}), _.searchParams.delete("locale")) : _.searchParams.delete("locale"), window.location.href = _.toString()
				}, O = "META__SET_POPULAR_GEO_FILTER", j = Object(i.a)(O), g = "META__PWA_ENTERED", I = "META__PWA_LEFT", h = Object(i.a)(g), y = Object(i.a)(I)
		},
		"./src/reddit/actions/modQueueTriggers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/actions/comment/index.ts"),
				s = r("./src/reddit/actions/post.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/ModQueueTriggers.json");
			const d = e => {
				let {
					commentIds: t = [],
					postIds: r = []
				} = e;
				return async (e, d, c) => {
					let {
						gqlContext: a
					} = c;
					var u, l;
					if (!t.length && !r.length) return;
					const b = await ((e, t) => Object(i.a)(e, {
						...o,
						variables: t
					}))(a(), {
						commentIds: t,
						postIds: r
					});
					if (b.ok) {
						const t = b.body;
						if (t.data.commentsByIds) {
							const r = Object.fromEntries(null === (u = t.data.commentsByIds) || void 0 === u ? void 0 : u.filter(e => {
								var t;
								return null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
							}).map(e => {
								var t;
								return [null == e ? void 0 : e.id, {
									modQueueTriggers: null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
								}]
							}));
							e(Object(n.i)(r))
						}
						if (t.data.postsInfoByIds) {
							const r = Object.fromEntries(null === (l = t.data.postsInfoByIds) || void 0 === l ? void 0 : l.filter(e => {
								var t;
								return null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
							}).map(e => {
								var t;
								return [null == e ? void 0 : e.id, {
									modQueueTriggers: null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
								}]
							}));
							e(Object(s.S)(r))
						}
					}
				}
			}
		},
		"./src/reddit/actions/onboarding/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			}));
			const n = "RESET_GENDER_UPDATE_STATE",
				s = "SUBREDDIT_INTEREST_TOPICS"
		},
		"./src/reddit/actions/onboarding/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "openReonboardingModalIfNeeded", (function() {
				return l
			})), r.d(t, "resetGenderUpdateState", (function() {
				return b
			})), r.d(t, "subredditInterestTopicsLoaded", (function() {
				return p
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/login.ts"),
				i = r("./src/reddit/actions/onboarding/constants.ts"),
				o = r("./src/reddit/helpers/counters/onboarding.ts"),
				d = r("./src/reddit/helpers/onboarding/reonboarding.ts"),
				c = r("./src/reddit/models/Onboarding/index.ts"),
				a = r("./src/reddit/selectors/experiments/onboarding.ts"),
				u = r("./src/reddit/selectors/onboarding.ts");
			const l = () => async (e, t) => {
				const r = t(),
					n = r.platform.currentPage;
				if (Object(u.e)(r, {
						pageLayer: n
					})) {
					e(Object(s.c)({
						type: c.c.REONBOARDING,
						selectedInterests: {}
					})), Object(d.d)();
					const t = Object(a.b)(r);
					Object(o.b)(c.e.FirstPopover, t)
				}
			}, b = Object(n.a)(i.a), p = Object(n.a)(i.b);
			t.default = () => async (e, t) => {
				const r = t();
				Object(u.d)(r) && e(Object(s.c)())
			}
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return A
			})), r.d(t, "PAGE_LOADED", (function() {
				return L
			})), r.d(t, "PAGE_FAILED", (function() {
				return P
			})), r.d(t, "pagePending", (function() {
				return U
			})), r.d(t, "pageLoaded", (function() {
				return G
			})), r.d(t, "pageFailed", (function() {
				return F
			})), r.d(t, "postCreationPageDataRequested", (function() {
				return B
			})), r.d(t, "postCreationPageRequested", (function() {
				return q
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react-router-redux/es/index.js"),
				s = r("./src/lib/filterQueryParams/index.ts"),
				i = r("./src/lib/isFakeSubreddit/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makePostCreationPageKey/index.ts"),
				c = r("./src/lib/pageTitle/index.ts"),
				a = r("./src/reddit/actions/contentControls/index.ts"),
				u = r("./src/reddit/actions/economics/helpers/async.ts"),
				l = r("./src/reddit/actions/externalAccount.ts"),
				b = r("./src/reddit/actions/gold/powerups.ts"),
				p = r("./src/reddit/actions/platform.ts"),
				f = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/postCreation/general.ts"),
				_ = r("./src/reddit/actions/profile/index.ts"),
				O = r("./src/reddit/actions/subreddit.ts"),
				j = r("./src/reddit/actions/subredditDuplicates.ts"),
				g = r("./src/config.ts"),
				I = r("./src/lib/constants/index.ts"),
				h = r("./src/lib/makeApiRequest/index.ts"),
				y = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				E = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = r("./src/reddit/models/User/index.ts"),
				v = r("./src/reddit/selectors/contentControls.ts"),
				x = r("./src/reddit/selectors/postCollection.ts"),
				w = r("./src/reddit/selectors/postCreations.ts"),
				k = r("./src/reddit/selectors/posts.ts"),
				C = r("./src/reddit/selectors/profile.ts"),
				D = r("./src/reddit/selectors/subreddit.ts"),
				N = r("./src/reddit/selectors/user.ts");
			const R = e => {
					const t = e.platform.currentPage;
					let r = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: n
						} = t.urlParams, s = Object(D.x)(e, {
							subredditName: n
						});
						s && (r = s.name)
					}
					return Object(c.n)(r)
				},
				A = "POST_CREATION__PAGE_PENDING",
				L = "POST_CREATION__PAGE_LOADED",
				P = "POST_CREATION__PAGE_FAILED",
				U = Object(o.a)(A),
				G = Object(o.a)(L),
				F = Object(o.a)(P),
				M = () => async (e, t) => {
					const r = t(),
						n = Object(w.a)(r);
					n !== Object(w.mb)(r) && e(Object(m.g)({
						submissionType: n
					}))
				}, B = e => async (t, r, n) => {
					const {
						collectionId: s,
						profileName: o,
						subredditName: c
					} = e, u = Object(d.a)(e), p = r(), f = p.creations.api.page.pending[u], m = p.creations.api.page.fetched[u], j = p.creations.api.page.error[u];
					if (f) return;
					if (m && !j) return void t(M());
					const S = [];
					t(U({
						key: u
					}));
					let x = c;
					!c && o && (x = `u_${o}`), S.push(((e, t) => Object(h.a)(e, {
						method: I.jb.GET,
						endpoint: Object(y.a)(`${g.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(n.apiContext(), {
						subredditName: x,
						collectionId: s
					})), o && (S.push(t(_.d(o))), S.push(t(_.b(o))));
					const [w] = await Object(E.a)("postCreation", () => Promise.all(S));
					if (w.ok) {
						const e = w.body,
							{
								posts: n = {},
								subredditAboutInfo: s
							} = e;
						if (t(G({
								key: u,
								meta: p.meta,
								...e,
								posts: n
							})), !Object(N.Q)(r())) return;
						if (s) {
							const e = Object.keys(s)[0];
							await t(Object(b.m)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(M());
						const o = [];
						o.push(t(l.o()));
						const d = Object(N.k)(r());
						if (d && d.hasUserProfile && o.push(t(_.d(Object(T.e)(d)))), c && !Object(i.a)(c)) {
							o.push(t(O.o(c))), !!Object(v.b)(r(), {
								subredditName: c
							}) || o.push(t(Object(a.a)(c)))
						}
						await Promise.all(o)
					} else t(F({
						error: w.error,
						key: u
					}))
				}, q = e => async (t, r) => {
					const {
						subredditName: i,
						profileName: o
					} = e.params, d = e.queryParams, c = d.collection;
					if (await t(B({
							collectionId: c,
							profileName: o,
							subredditName: i
						})), !Object(N.Q)(r())) return void Object(S.a)(t, r());
					let a;
					if (i ? (a = Object(D.x)(r(), {
							subredditName: i
						}), await t(Object(u.a)({
							subredditName: i
						}))) : o && (a = Object(C.j)(r(), {
							profileName: o
						})), d.source_id) await t(((e, t) => async (r, n) => {
						const {
							subredditName: s,
							profileName: i
						} = e, o = [];
						let d;
						s ? d = Object(D.D)(n(), s) : i && (d = Object(N.mb)(n(), {
							userName: i
						})), d && o.push(r(Object(j.b)(d, t))), o.push(r(Object(f.R)(t))), await Promise.all(o);
						const c = Object(k.f)(n(), {
							postId: t
						});
						r(Object(m.m)({
							postId: t,
							postTitle: c ? c.title : ""
						}))
					})(e.params, d.source_id));
					else if (c) {
						const i = Object(x.q)(r(), {
							collectionId: c
						});
						a && i && i.subredditId === a.id || t(Object(n.c)(Object(s.a)(e.url, ["collection"])))
					}
					t(p.m({
						title: R(r())
					}))
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return p
			})), r.d(t, "PAGE_LOADED", (function() {
				return f
			})), r.d(t, "PAGE_FAILED", (function() {
				return m
			})), r.d(t, "pagePending", (function() {
				return _
			})), r.d(t, "pageLoaded", (function() {
				return O
			})), r.d(t, "pageFailed", (function() {
				return j
			})), r.d(t, "postDraftPageDataRequested", (function() {
				return g
			})), r.d(t, "postDraftRequested", (function() {
				return I
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/makePostDraftPageKey/index.ts"),
				i = r("./src/reddit/actions/profile/index.ts"),
				o = r("./src/config.ts"),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = r("./src/reddit/endpoints/post/draft/helpers.ts"),
				b = r("./src/reddit/helpers/timeApiRoute/index.ts");
			const p = "POST_DRAFT__PAGE_PENDING",
				f = "POST_DRAFT__PAGE_LOADED",
				m = "POST_DRAFT__PAGE_FAILED",
				_ = Object(n.a)(p),
				O = Object(n.a)(f),
				j = Object(n.a)(m),
				g = e => async (t, r, n) => {
					const {
						draftId: p,
						profileName: f
					} = e, m = Object(s.a)(e), _ = r(), g = _.creations.api.page.pending[m], I = _.creations.api.page.fetched[m], h = _.creations.api.page.error[m];
					if (g || I && !h || !p) return;
					t(i.d(f));
					const y = await Object(b.a)("postDraft", () => ((e, t, r) => Object(c.a)(e, {
						endpoint: Object(a.a)(Object(u.a)(`${o.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${t}`)),
						method: d.jb.GET
					}))(n.apiContext(), p, f));
					if (y.ok) {
						const e = y.body;
						e.drafts[p].kind = Object(l.b)(e.drafts[p].kind), t(O({
							...e,
							key: m
						}))
					} else t(j({
						error: y.error,
						key: m
					}))
				}, I = e => async (t, r, n) => {
					await t(g(e.params))
				}
		},
		"./src/reddit/actions/pages/subreddit.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "isGQLSubredditPageExtra", (function() {
				return Ze
			})), r.d(t, "handleSubredditPageApiError", (function() {
				return et
			})), r.d(t, "SUBREDDIT_PENDING", (function() {
				return tt
			})), r.d(t, "SUBREDDIT_LOADED", (function() {
				return rt
			})), r.d(t, "SUBREDDIT_FAILED", (function() {
				return nt
			})), r.d(t, "subredditPending", (function() {
				return st
			})), r.d(t, "subredditLoaded", (function() {
				return it
			})), r.d(t, "subredditFailed", (function() {
				return ot
			})), r.d(t, "subredditDataRequested", (function() {
				return dt
			})), r.d(t, "subredditDataFirstChunkRequested", (function() {
				return ct
			})), r.d(t, "makeSubredditPageKey", (function() {
				return ut
			})), r.d(t, "subredditRequested", (function() {
				return lt
			})), r.d(t, "SUBREDDIT_INVALIDATE_LISTING", (function() {
				return bt
			})), r.d(t, "subredditInvalidateListing", (function() {
				return pt
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/autosubscribeLinks/index.tsx"),
				i = r("./src/lib/makeRequest/index.ts"),
				o = r("./node_modules/lodash/find.js"),
				d = r.n(o),
				c = r("./node_modules/lodash/pick.js"),
				a = r.n(c),
				u = r("./node_modules/react-router-redux/es/index.js"),
				l = r("./src/lib/constants/index.ts"),
				b = r("./src/lib/countrySites/index.ts"),
				p = r("./src/lib/isAdHocMultireddit/index.ts"),
				f = r("./src/lib/isFakeSubreddit/index.ts"),
				m = r("./src/lib/makeActionCreator/index.ts"),
				_ = r("./src/lib/makeListingKey/index.ts"),
				O = r("./src/lib/makeSearchKey/index.ts"),
				j = r("./src/lib/pageTitle/index.ts"),
				g = r("./src/lib/pageTitle/helpers.ts"),
				I = r("./src/lib/performanceTimings/index.tsx"),
				h = r("./src/lib/safeGet/index.ts"),
				y = r("./src/reddit/actions/ads/index.ts"),
				S = r("./src/reddit/actions/communityFlairs/index.ts"),
				E = r("./src/reddit/actions/contentGate.ts"),
				T = r("./src/reddit/actions/discoveryUnit.ts"),
				v = r("./src/reddit/actions/economics/helpers/async.ts"),
				x = r("./src/reddit/actions/economics/predictions/index.ts"),
				w = r("./src/reddit/actions/externalAccount.ts"),
				k = r("./src/reddit/actions/gold/powerups.ts"),
				C = r("./src/reddit/actions/grantUserFlair/index.ts"),
				D = r("./src/reddit/actions/meta.ts"),
				N = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				R = r("./src/reddit/actions/onboarding/index.ts"),
				A = r("./src/reddit/actions/pages/search/index.ts"),
				L = r("./src/reddit/actions/platform.ts"),
				P = r("./src/reddit/actions/publicAccessNetwork/api.ts"),
				U = r("./src/reddit/actions/seo/linksModule.ts"),
				G = r("./src/reddit/actions/seo/topicLinks.ts"),
				F = r("./src/lib/makeGqlRequest/index.ts"),
				M = (r("./src/redditGQL/operations/SubredditInfo.json"), r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts")),
				B = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				q = (r("./src/reddit/selectors/seo/linksModule.ts"), r("./src/reddit/selectors/seo/topicLinks.ts"), r("./src/reddit/selectors/subreddit.ts")),
				Q = r("./src/reddit/selectors/widgets.ts");
			const K = (e, t) => async (r, n) => {
				const s = n(),
					i = Object(q.S)(s, {
						subredditId: e
					}),
					o = Object(Q.j)(s, {
						subredditId: e
					});
				i.isNSFW || (null == o ? void 0 : o.length) > 0 && o.some(e => "community-list" === e) || r(Object(U.e)({
					id: e,
					data: t
				}))
			}, z = (e, t) => async r => {
				t && r(Object(G.b)({
					id: e,
					data: t
				}))
			};
			var W = r("./src/reddit/actions/structuredStyles/index.ts"),
				H = r("./src/reddit/actions/subreddit.ts"),
				$ = r("./src/reddit/actions/toaster.ts"),
				J = r("./src/reddit/helpers/localStorage/index.ts"),
				V = r("./src/reddit/models/Subreddit/index.ts"),
				Y = r("./src/reddit/models/Toast/index.ts"),
				X = r("./src/reddit/routes/postCreation/constants.ts"),
				Z = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				ee = r("./src/reddit/selectors/platform.ts"),
				te = r("./src/reddit/selectors/user.ts");
			const re = () => async (e, t, r) => {
				const n = t(),
					s = Object(ee.e)(n);
				if (!s || s.type !== V.f.Public) return;
				const i = s.name,
					o = Object(ee.m)(n),
					d = Object(q.u)(n, {
						subredditName: i
					});
				if (!d) return;
				const {
					activity7Day: c
				} = d, a = !!c && c >= 51 && c <= 100, l = !i || Object(f.a)(i), b = o && o.urlParams.subredditName === i, p = Object(te.Q)(n), m = Object(Z.c)(n, {
					subredditId: Object(q.D)(n, i)
				});
				if (l || b || Object(J.E)() || !a || !p || m) return;
				const _ = Object(Q.d)(t(), {
					subredditName: i
				});
				if (!_ || !_.currentlyViewingCount) return;
				const O = (24 * _.currentlyViewingCount * 7).toString(),
					j = O[0].padEnd(O.length, "0");
				e(Object($.f)({
					buttonAction: async () => e(Object(u.b)(`/r/${i}${X.b}`)),
					buttonText: "Create Post",
					duration: -1,
					id: "createPostCta",
					kind: Y.b.Modal,
					name: "createPostCta",
					secondButtonAction: async () => Object(J.Gb)(),
					secondButtonText: "Dismiss",
					text: `There have been over ${j} visits to r/${i} in the past week. Create a new post and start the next conversation.`
				}))
			};
			var ne = r("./src/reddit/actions/subreddit/questions.ts"),
				se = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				ie = r("./src/reddit/actions/subredditSettings.ts"),
				oe = r("./src/reddit/actions/tags/index.ts"),
				de = r("./src/reddit/actions/userFlair/userFlair.ts"),
				ce = r("./src/reddit/constants/history.ts"),
				ae = r("./src/reddit/constants/page.ts"),
				ue = r("./src/reddit/constants/parameters.ts"),
				le = r("./src/reddit/constants/postLayout.ts"),
				be = r("./src/reddit/contexts/PageLayer/index.tsx"),
				pe = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				fe = r("./src/reddit/endpoints/governance/posts.ts"),
				me = r("./src/reddit/endpoints/page/subredditPage.ts"),
				_e = r("./src/lib/base64/index.ts"),
				Oe = r("./src/reddit/constants/experiments.ts"),
				je = r("./src/reddit/constants/graphql.ts"),
				ge = r("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				Ie = r("./src/reddit/selectors/experiments/onboarding.ts"),
				he = r("./src/redditGQL/operations/SubredditPageExtra.json");
			var ye = r("./src/reddit/endpoints/profile/info.ts"),
				Se = r("./src/reddit/helpers/canonicalUrls.ts"),
				Ee = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				Te = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				ve = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts");

			function xe(e) {
				let {
					econLeaderboards: t,
					identity: r,
					trendingSubreddits: n
				} = e;
				const s = t.topAwardedPosts.map(e => e.post).filter(e => !e.removedBy && !e.isNsfw);
				return Object(ve.b)(s, n, r)
			}
			var we = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				ke = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				Ce = r("./src/reddit/helpers/post/index.ts"),
				De = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				Ne = r("./src/reddit/helpers/trackers/feed.ts"),
				Re = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Ae = r("./src/reddit/models/RichTextJson/index.ts"),
				Le = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Pe = r("./src/reddit/selectors/communityFlairs.ts"),
				Ue = r("./src/reddit/selectors/experiments/countrySites.ts"),
				Ge = r("./src/reddit/selectors/experiments/econ/powerupsAward.ts"),
				Fe = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				Me = r("./src/reddit/selectors/experiments/topPosts.ts"),
				Be = r("./src/reddit/selectors/gold/powerups/index.ts"),
				qe = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				Qe = r("./src/reddit/selectors/moderatorPermissions.ts"),
				Ke = r("./src/reddit/selectors/multireddit.ts"),
				ze = r("./src/reddit/selectors/posts.ts"),
				We = r("./src/lib/initializeClient/installReducer.ts"),
				He = r("./src/reddit/reducers/features/modUserNotes/index.ts"),
				$e = r("./node_modules/uuid/v4.js"),
				Je = r.n($e),
				Ve = r("./src/reddit/helpers/locales.ts"),
				Ye = r("./src/reddit/selectors/experiments/autosubscribeLinks.ts"),
				Xe = r("./src/reddit/selectors/meta.ts");

			function Ze(e) {
				return Boolean(e && e.subredditInfoByName)
			}
			Object(We.a)({
				features: {
					modUserNotes: He.a
				}
			});
			const et = (e, t) => async r => {
				if (!e.ok && e.body && (e => !!e.reason)(e.body)) {
					const {
						body: {
							data: n,
							reason: s
						}
					} = e, i = n ? n.account : void 0, o = n && n.features || void 0, d = t ? t.toLowerCase() : "";
					if (404 === e.status)
						if (s === V.e.NotFoundSubreddit) r(E.r({
							account: i,
							features: o,
							subredditName: d
						}));
						else if (s === V.e.BannedSubreddit) {
						const e = n ? n.banMessage || n.ban_message : void 0;
						r(E.p({
							banMessage: e,
							account: i,
							features: o,
							subredditName: d
						}))
					}
					if (451 === e.status && r(E.q({
							account: i,
							features: o,
							subredditName: d
						})), 403 === e.status)
						if (s === V.e.GoldSubreddit) r(E.u({
							account: i,
							features: o,
							subredditName: d
						}));
						else if (s === V.e.PrivateSubreddit) r(E.v({
						account: i,
						features: o,
						subredditDescription: n.description || "",
						subredditName: d,
						isContributorRequestsDisabled: !!n.isContributorRequestsDisabled,
						isContributorRequestTimestamp: n.isContributorRequestTimestamp ? parseInt(n.isContributorRequestTimestamp, 10) : void 0,
						subredditId: n.id
					}));
					else if (s === V.e.QuarantinedSubreddit) {
						const e = !n || void 0 === n.quarantineRequiresEmailOptin || n.quarantineRequiresEmailOptin;
						r(E.x({
							account: i,
							features: o,
							subredditName: d,
							quarantineRequiresEmail: e,
							quarantineMessage: n.quarantineMessage,
							quarantineMessageHtml: n.quarantineMessageHtml || "",
							quarantineMessageRTJson: n.quarantineMessageRTJson || Ae.i
						}))
					} else if (s === V.e.GatedSubreddit) {
						const {
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: s
						} = n;
						r(E.t({
							account: i,
							features: o,
							subredditName: d,
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: s
						}))
					}
				}
			}, tt = "PAGE__SUBREDDIT_PENDING", rt = "PAGE__SUBREDDIT_LOADED", nt = "PAGE__SUBREDDIT_FAILED", st = Object(m.a)(tt), it = Object(m.a)(rt), ot = Object(m.a)(nt), dt = (e, t, r, s) => async (o, c, a) => {
				var u, b, p, m, _, O, j, g, E, T, A, P, U, G, Q, W, J, V, X, Z;
				const re = c(),
					ae = Object(te.P)(re) || Object(te.Q)(re);
				if (Object(h.a)(re.listings.postOrder.api.pending, e)) return;
				const ue = null === (b = null === (u = Object(ee.b)(re)) || void 0 === u ? void 0 : u.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
					{
						currentPage: Se
					} = re.platform,
					{
						countryCode: Ee,
						languageCode: Te
					} = (null == Se ? void 0 : Se.urlParams) || {},
					ve = Object(f.a)(t, {
						countryCode: Ee,
						languageCode: Te
					}),
					Re = Object(f.c)(t, {
						countryCode: Ee,
						languageCode: Te
					}),
					Ae = (Object(f.b)(t, {
						countryCode: Ee,
						languageCode: Te
					}) || Re) && re.posts.recent.length ? {
						...r,
						recentPostIds: re.posts.recent
					} : r;
				Ae.layout = le.e[Object(be.R)(re, {})], Re && (Ae.forceGeopopular = !0), o(st({
					key: e
				}));
				const Pe = !ve && Object(ee.l)(re) && Object(Fe.b)(re);
				let Me;
				if (r.sort === l.W.AWARDED && Re) Me = Object(pe.a)(a.gqlContext(), {
					top: 0,
					includeListingMetadata: !0
				}).then(e => {
					const t = e.body;
					return {
						...e,
						body: xe(t.data)
					}
				});
				else {
					const e = Pe ? () => Object(me.b)(a.gqlContext(), Object(me.c)(re, t, Ae, !0), ae) : () => Object(me.a)(a.apiContext(), t, Ae);
					Me = Object(I.i)(e, {
						name: Pe ? "fetchSubredditPageFromGql" : "fetchSubredditPage",
						page: ue,
						isLoggedIn: ae
					})
				}
				const Qe = Object(q.R)(c(), {
						subredditId: Object(q.D)(c(), t)
					}).length > 0,
					Ke = Object(I.i)(() => (async function(e, t) {
						return Object(F.a)(e, {
							...he,
							variables: t
						})
					})(a.gqlContext(), ((e, t) => {
						let {
							after: r,
							isMobile: n,
							subredditName: s,
							isFake: i,
							isLoggedIn: o,
							layout: d,
							limit: c,
							hasRules: a,
							sort: u,
							t: l
						} = t;
						var b, p;
						const f = Object(Ie.b)(e),
							m = !!f && !Object(Oe.Bf)(f) && (i || f === Oe.hb.Community),
							_ = {
								subredditName: s,
								isFake: i,
								sort: u,
								adContext: {
									layout: d ? d.toUpperCase() : je.a.Card,
									reddaid: e.user.reddaid
								},
								includeIdentity: o,
								includeInterestTopics: m,
								includePowerups: !i,
								includeQuestions: o && !i,
								includeRules: !i && !a,
								includeRedditorKarma: o && !(null === (p = null === (b = e.user.account) || void 0 === b ? void 0 : b.karma) || void 0 === p ? void 0 : p.total),
								includeSubredditLinks: !o,
								includeTopicLinks: !o
							};
						return u && (_.sort = u.toUpperCase()), l && (_.range = l.toUpperCase()), n ? _.pageSize = Object(ge.a)(d) : c && (_.pageSize = c), r && (_.after = Object(_e.a)(r)), _
					})(re, {
						after: r.after,
						isLoggedIn: ae,
						subredditName: t,
						hasRules: Qe,
						isFake: ve,
						isMobile: r.isMobile,
						layout: r.layout,
						limit: r.limit,
						sort: r.sort,
						t: r.t
					})), {
						name: "fetchSubredditPageExtra",
						page: ue,
						isLoggedIn: ae
					}),
					ze = Je()();
				let We, He;
				Pe ? We = await Me : [We, He] = await Promise.all([Me, Ke]);
				const $e = He && Object(i.c)(He) ? He.body.data : null,
					Ye = We.body,
					tt = (null == Ye ? void 0 : Ye.subreddits) ? ((e, t) => {
						var r;
						return null === (r = d()(e, e => (null == e ? void 0 : e.name.toLowerCase()) === t.toLowerCase())) || void 0 === r ? void 0 : r.id
					})(Ye.subreddits, t) : null;
				Ye && !Pe && await Object(Ce.a)(a.gqlContext, Ye.posts).then(e => Ye.posts = e), o(L.n(We.status));
				const rt = `error-${e}`,
					nt = ve || tt;
				if (We.ok && nt) {
					if (!ve && tt) {
						let e;
						e = Pe ? Ye.powerups : Object(k.e)(null == $e ? void 0 : $e.subredditInfoByName, null == $e ? void 0 : $e.identity);
						const t = (null === (m = null === (p = null == Ye ? void 0 : Ye.subredditAboutInfo) || void 0 === p ? void 0 : p[tt]) || void 0 === m ? void 0 : m.detectedLanguage) || (null === (_ = null == $e ? void 0 : $e.subredditInfoByName) || void 0 === _ ? void 0 : _.detectedLanguage);
						Object(Xe.d)(re) && t && Object(Ue.f)(re) && await Object(Ve.a)(t, o), Ye.subredditAboutInfo[tt].detectedLanguage = t, Object(k.b)(o, tt, e), Pe ? o(Object(x.n)(tt, Ye.predictionTournaments || [])) : (null == $e ? void 0 : $e.subredditInfoByName) && o(Object(x.n)(tt, $e.subredditInfoByName.predictionTournaments || [])), Object(Be.h)(c(), {
							subredditId: tt
						}) && Object(Ge.a)(c())
					}
					let n;
					Ye.geoFilter && o(Object(D.k)(Ye.geoFilter));
					const i = Ye.postIds.filter(e => !!Ye.posts[e].isMeta);
					if (i.length && tt) {
						const e = Object(I.i)(() => Object(fe.a)(a.apiContext(), tt, i), {
								name: "getGovernanceData",
								page: ue,
								isLoggedIn: ae
							}),
							t = await e;
						t.ok && (n = t.body)
					}
					if ($e) {
						const e = null === (j = null === (O = $e.identity) || void 0 === O ? void 0 : O.redditor) || void 0 === j ? void 0 : j.karma,
							t = {
								karma: {
									...(null === (g = re.user.account) || void 0 === g ? void 0 : g.karma) || ye.a,
									...e
								}
							};
						Ye.account && Object.assign(Ye.account, t)
					}
					if (tt) {
						let e;
						Pe ? e = null === (E = Ye.subredditAboutInfo[tt]) || void 0 === E ? void 0 : E.notificationLevel : Ze($e) && (e = null === (T = $e.subredditInfoByName) || void 0 === T ? void 0 : T.notificationLevel), Ye.subredditAboutInfo[tt].notificationLevel = e
					}
					const d = null === (A = Ye.subredditPermissions) || void 0 === A ? void 0 : A.posts;
					!Pe && d && o(Object(N.a)({
						postIds: Ye.postIds
					}));
					let u = null === (P = null == We ? void 0 : We.body) || void 0 === P ? void 0 : P.interestTopicRecommendations;
					if (!u && (null == $e ? void 0 : $e.interestTopics)) {
						const e = Object(we.a)($e.interestTopics);
						e.topics.length && (u = {
							interests: e,
							index: 5
						})
					}
					u && o(Object(R.subredditInterestTopicsLoaded)({
						interestTopicRecommendations: u
					})), o(it({
						key: e,
						meta: re.meta,
						governance: n,
						correlationId: ze,
						...Ye,
						postIds: Ye.postIds
					}));
					const l = null === (G = null === (U = Object(ee.b)(re)) || void 0 === U ? void 0 : U.locationState) || void 0 === G ? void 0 : G[ce.b.FeedLoadReason];
					if (Object(Ne.b)(r.isRefresh ? ce.a.UserRefresh : null != l ? l : ce.a.InitialLoad)(c()), !ve) {
						const e = Object(q.D)(c(), t);
						Pe && Ye.subredditRules ? o(H.t({
							rules: {
								rules: Ye.subredditRules
							},
							subredditId: e
						})) : (null === (Q = null == $e ? void 0 : $e.subreddit) || void 0 === Q ? void 0 : Q.rules) && o(H.t({
							rules: Object(ke.a)($e.subreddit.rules),
							subredditId: e
						}));
						const r = Object(S.c)(Ye.posts, e),
							n = Object(S.b)(Ye.structuredStyles),
							s = (n ? Object(S.d)(n) : []).concat(r);
						o(Object(S.a)(s, e))
					}
					if (s && o($.g(rt)), o(Object(y.b)(Le.a.SUBREDDIT)), o(Object(w.p)()), tt) {
						let e, r, n;
						if (Pe ? (e = Ye.questions, r = Ye.subredditLinks, n = Ye.subredditTopicLinks) : (e = null == $e ? void 0 : $e.subredditInfoByName, r = Object(M.a)({
								data: {
									subredditInfoById: null == $e ? void 0 : $e.subredditInfoByName
								}
							}), n = Object(B.a)({
								data: {
									subredditInfoById: null == $e ? void 0 : $e.subredditInfoByName
								}
							})), Object(ne.a)(o, tt, e), o(K(tt, r)), o(z(tt, n)), !Pe && (null === (J = null === (W = null == $e ? void 0 : $e.subredditInfoByName) || void 0 === W ? void 0 : W.elements) || void 0 === J ? void 0 : J.edges)) {
							const e = (null === (X = null === (V = null == $e ? void 0 : $e.subredditInfoByName) || void 0 === V ? void 0 : V.elements) || void 0 === X ? void 0 : X.edges).map(e => {
								var t, r;
								return null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote
							});
							o(Object(se.e)({
								subredditId: tt,
								nodes: e
							}))
						} else if (Pe && (null == Ye ? void 0 : Ye.postIds)) {
							const e = Ye.postIds.map(e => null == Ye ? void 0 : Ye.posts[e].lastAuthorModNote);
							e && o(Object(se.e)({
								subredditId: tt,
								nodes: e
							}))
						}
						if (Pe && Ye.appliedFlair) {
							const e = Ye.appliedFlair;
							if ((null === (Z = re.user.account) || void 0 === Z ? void 0 : Z.displayName) && e.flair && (o(Object(C.b)({
									subredditId: tt,
									applied: e.flair,
									userName: re.user.account.displayName
								})), o(Object(de.userFlairSaveTemplateSuccess)({
									subredditId: tt,
									template: e.flair
								}))), e.displaySettings) {
								const t = e.displaySettings;
								o(Object(de.userFlairAllowAssignOwnSettingSuccess)({
									subredditId: tt,
									canAssignOwn: t.isSelfAssignable
								})), o(Object(de.userFlairMutated)({
									subredditId: tt,
									displaySettings: t
								}))
							}
						}
						const s = [Object(I.i)(() => o(Object(v.a)({
							subredditId: tt,
							postIds: Ye.postIds,
							skip: ["subscription"]
						})), {
							name: "fetchAllEconomicsData",
							page: ue,
							isLoggedIn: ae
						})];
						if (Object(qe.a)(c(), {
								subredditId: tt
							})) {
							const e = Object(I.i)(() => o(Object(ie.h)(t, tt)), {
									name: "subredditSettingsRequested",
									isLoggedIn: ae,
									page: ue
								}),
								r = Object(I.i)(() => o(Object(oe.g)(tt, De.a.idCard)), {
									name: "subredditTagsRequested",
									isLoggedIn: ae,
									page: ue
								});
							s.push(e, r)
						}
						await Promise.all(s)
					}
				} else {
					const i = We.ok ? void 0 : We.error;
					if (Object(Ne.a)(i ? `${We.status||"000"}: ${i.type}` : "000: UNKNOWN_ERROR")(c()), 403 === We.status || 404 === We.status || 451 === We.status) return void o(et(We, t));
					o(ot({
						error: !We.ok && We.error || {
							type: l.I.NOT_FOUND_ERROR
						},
						key: e,
						...Ye
					})), s && o($.f({
						id: rt,
						kind: Y.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: dt(e, t, r, s)
					}))
				}
			}, ct = (e, t, r) => async (n, s) => {
				const i = s(),
					o = Object(_.a)(e, t.sort, t);
				Object(ze.z)(i, {
					listingKey: o
				}).length > 0 || await n(dt(o, e, t, r))
			}, at = (e, t, r, n) => {
				const s = Object(Ue.b)(e);
				if (Object(f.a)(t, {
						countryCode: r,
						languageCode: n
					})) {
					if (Object(p.a)(t)) {
						return Object(Ke.a)(e, {
							listingName: t
						}).displayText
					}
					if (s) return Object(g.a)(e, Object(j.f)(t.toLowerCase()));
					switch (t.toLowerCase()) {
						case ae.d.Popular:
							return "r/popular";
						case ae.d.All:
							return "r/all"
					}
				}
				const i = Object(q.V)(e, {
					subredditName: t
				});
				if (s) {
					const r = Object(q.u)(e, {
							subredditName: t
						}),
						n = r && r.detectedLanguage;
					return Object(g.a)(e, i, n)
				}
				return i
			}, ut = (e, t, r, n) => n ? Object(O.b)(e.subredditName, void 0, n) : Object(_.a)(e.subredditName, t, r), lt = (e, t) => async (r, n) => {
				var i, o, d;
				const {
					countryCode: c,
					languageCode: p
				} = e.params, m = Object(b.c)(e.params), {
					styling: j
				} = e.queryParams, g = n(), E = Object(Ee.a)(e.params, g);
				if ("Popular" === m) return void r(Object(u.c)(e.url.replace("r/Popular", "r/popular")));
				if ("All" === m) return void r(Object(u.c)(e.url.replace("r/All", "r/all")));
				Object(Ye.a)(g) && r(Object(s.a)(e.queryParams, m));
				const v = Object(O.d)(e.queryParams, Object(te.kb)(g)),
					x = ut({
						subredditName: m,
						countryCode: c,
						languageCode: p
					}, E, e.queryParams, v),
					k = E,
					C = Object(h.a)(g.listings.postOrder.api.error, x),
					D = Object(h.a)(g.listings.postOrder.api.pending, x);
				let N = !!Object(h.a)(g.listings.postOrder.ids, x);
				const R = Object(h.a)(g.listings.postOrder.listingSort, x);
				R && R.hasChanged && (N = !1);
				let U = Object(q.D)(g, m);
				const G = (e, t) => "true" === j && ((e, t) => Object(Qe.b)(Re.c.config)(e, {
						subredditId: t
					}) || Object(Qe.b)(Re.c.flair)(e, {
						subredditId: t
					}))(e, t),
					F = ue.E in e.queryParams && e.queryParams[ue.E].toUpperCase() || "",
					M = F in l.hc && l.hc[F];
				if (D || N && !C && !t) {
					if (G(g, U) && r(W.i(U)), N) {
						const t = at(n(), m, c, p);
						r(L.m({
							title: t
						})), (null === (i = g.listings.postOrder.correlationIds) || void 0 === i ? void 0 : i[x]) && r(L.o({
							correlationId: g.listings.postOrder.correlationIds[x]
						})), Object(Se.e)(n(), r, e), window.addEventListener("load", () => {
							r(Object(w.p)())
						}), g.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
							r(Object(y.b)(Le.a.SUBREDDIT))
						}), r(re())
					}
					return
				}
				r(T.g());
				const B = null === (d = null === (o = Object(ee.b)(g)) || void 0 === o ? void 0 : o.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
					Q = Object(te.Q)(n()),
					K = Object(I.i)(() => r(Object(P.c)(`r/${m}`)), {
						name: "rpanConfigRequested",
						isLoggedIn: Q,
						page: B
					});
				if (v) {
					const e = Object(I.i)(() => r(Object(A.d)(x, v, m)), {
						name: "searchDataRequested",
						isLoggedIn: Q,
						page: B
					});
					await e
				} else {
					const t = {
						...a()(e.queryParams, [...ue.n, ...ue.m, ue.j]),
						sort: k,
						t: Object(Te.a)(k, M)
					};
					await r(dt(x, m, t, !0))
				}
				const z = g.platform.currentPage,
					H = Object(Me.d)(g, {
						pageLayer: z
					});
				if (Object(Me.a)(H) || Object(Me.b)(H) || Object(Me.c)(H)) {
					const e = Object(_.a)(m, l.W.TOP, {
							t: l.hc.WEEK
						}),
						t = {
							sort: l.W.TOP,
							t: l.hc.WEEK
						};
					await r(dt(e, m, t, !1))
				}
				if (U = U || Object(q.D)(n(), m), !Object(Pe.a)(g, U) && !Object(f.a)(m, {
						countryCode: c,
						languageCode: p
					})) {
					const e = Object(I.i)(() => r(Object(S.e)(m)), {
						name: "getTopCommunityFlair",
						page: B,
						isLoggedIn: Q
					});
					await e
				}
				G(n(), U) && r(W.i(U)), Object(Se.e)(n(), r, e);
				const $ = at(n(), m);
				r(L.m({
					title: $
				})), r(re()), await K
			}, bt = "PAGE__SUBREDDIT_INVALIDATE_LISTING", pt = Object(m.a)(bt)
		},
		"./src/reddit/actions/postCreation/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "K", (function() {
				return n
			})), r.d(t, "L", (function() {
				return s
			})), r.d(t, "l", (function() {
				return i
			})), r.d(t, "m", (function() {
				return o
			})), r.d(t, "x", (function() {
				return d
			})), r.d(t, "H", (function() {
				return c
			})), r.d(t, "I", (function() {
				return a
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "G", (function() {
				return l
			})), r.d(t, "p", (function() {
				return b
			})), r.d(t, "Q", (function() {
				return p
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "D", (function() {
				return m
			})), r.d(t, "s", (function() {
				return _
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "q", (function() {
				return v
			})), r.d(t, "S", (function() {
				return x
			})), r.d(t, "R", (function() {
				return w
			})), r.d(t, "T", (function() {
				return k
			})), r.d(t, "U", (function() {
				return C
			})), r.d(t, "V", (function() {
				return D
			})), r.d(t, "W", (function() {
				return N
			})), r.d(t, "X", (function() {
				return R
			})), r.d(t, "Y", (function() {
				return A
			})), r.d(t, "Z", (function() {
				return L
			})), r.d(t, "r", (function() {
				return P
			})), r.d(t, "E", (function() {
				return U
			})), r.d(t, "u", (function() {
				return G
			})), r.d(t, "v", (function() {
				return F
			})), r.d(t, "t", (function() {
				return M
			})), r.d(t, "w", (function() {
				return B
			})), r.d(t, "P", (function() {
				return q
			})), r.d(t, "o", (function() {
				return Q
			})), r.d(t, "y", (function() {
				return K
			})), r.d(t, "cb", (function() {
				return z
			})), r.d(t, "J", (function() {
				return W
			})), r.d(t, "a", (function() {
				return H
			})), r.d(t, "F", (function() {
				return $
			})), r.d(t, "N", (function() {
				return J
			})), r.d(t, "O", (function() {
				return V
			})), r.d(t, "M", (function() {
				return Y
			})), r.d(t, "ab", (function() {
				return X
			})), r.d(t, "C", (function() {
				return Z
			})), r.d(t, "B", (function() {
				return ee
			})), r.d(t, "z", (function() {
				return te
			})), r.d(t, "A", (function() {
				return re
			})), r.d(t, "bb", (function() {
				return ne
			}));
			const n = "SUBMIT_VALIDATION_FIELD_HAS_ERROR",
				s = "SUBMIT_VALIDATION_FIELD_IS_VALID",
				i = "POST_CREATION_EDIT_COMPLETE",
				o = "POST_CREATION_EDIT_FAILED",
				d = "POST_CREATION_PENDING_EDIT",
				c = "POST_CREATION_START_EDITING_POST",
				a = "POST_CREATION_STOP_EDITING_POST",
				u = "EDITOR_CONTENT_KEY__NEW_DRAFT",
				l = "STARTED_CONVERTING_EDITOR_CONTENT",
				b = "FINISHED_CONVERTING_EDITOR_CONTENT",
				p = "POST_CREATION__TOGGLE_EDITOR_MODE",
				f = "POST_CREATION__ERRORS_NO_LONGER_VALID",
				m = "POST_TITLE_FETCHED",
				_ = "INITIALIZE_EDITOR_MODE",
				O = "POST_CREATION__CHANGE_FLAIR",
				j = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				g = "POST_CREATION__CHANGE_LINK_BODY",
				I = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				h = "POST_CREATION__CHANGE_MEDIA_BODY",
				y = "POST_CREATION__CHANGE_RECAPTCHA",
				S = "POST_CREATION__CHANGE_RTE_STATE",
				E = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				T = "POST_CREATION__CHANGE_TITLE",
				v = "POST_CREATION__GOV_TYPE_CHANGED",
				x = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				w = "POST_CREATION__TOGGLE_IS_CHANGED",
				k = "POST_CREATION__TOGGLE_IS_GOV",
				C = "POST_CREATION__TOGGLE_IS_NSFW",
				D = "POST_CREATION__TOGGLE_IS_OC",
				N = "POST_CREATION__TOGGLE_IS_POLL",
				R = "POST_CREATION__TOGGLE_IS_SPOILER",
				A = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				L = "POST_CREATION__TOGGLE_SEND_REPLIES",
				P = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				U = "POST_CREATION__RESET_FORM",
				G = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				F = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				M = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				B = "POST_CREATION__PENDING",
				q = "POST_CREATION__SUCCEEDED",
				Q = "POST_CREATION__FAILED",
				K = "POST_CREATION__POLL_FAILED",
				z = "POST_CREATION__VALIDATION_FAILED",
				W = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				H = "POST_CREATION__CAPTCHA_REQUIRED",
				$ = "POST_CREATION__SET_SUBMIT_MODE",
				J = "POST_CREATION__SUBREDDIT_CHANGE_PENDING",
				V = "POST_CREATION__SUBREDDIT_WILL_CHANGE",
				Y = "POST_CREATION__SUBREDDIT_CHANGE_CANCELED",
				X = "POST_CREATION__UPDATE_SCHEDULED_POST_ADVANCED_SETTINGS",
				Z = "POST_CREATION__SUBREDDIT_RECOMMENDATION_PENDING",
				ee = "POST_CREATION__SUBREDDIT_RECOMMENDATION_LOADED",
				te = "POST_CREATION__SUBREDDIT_RECOMMENDATION_FAILED",
				re = "POST_CREATION__SUB_REC_IS_INPUT_CHANGED",
				ne = "POST_CREATION__UPDATE_TOURNAMENT"
		},
		"./src/reddit/actions/postCreation/general.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return x
			})), r.d(t, "o", (function() {
				return k
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "c", (function() {
				return R
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "f", (function() {
				return L
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "g", (function() {
				return U
			})), r.d(t, "h", (function() {
				return G
			})), r.d(t, "l", (function() {
				return F
			})), r.d(t, "u", (function() {
				return M
			})), r.d(t, "t", (function() {
				return B
			})), r.d(t, "v", (function() {
				return q
			})), r.d(t, "w", (function() {
				return Q
			})), r.d(t, "x", (function() {
				return K
			})), r.d(t, "y", (function() {
				return z
			})), r.d(t, "A", (function() {
				return W
			})), r.d(t, "B", (function() {
				return H
			})), r.d(t, "D", (function() {
				return $
			})), r.d(t, "C", (function() {
				return J
			})), r.d(t, "m", (function() {
				return V
			})), r.d(t, "r", (function() {
				return X
			})), r.d(t, "s", (function() {
				return Z
			})), r.d(t, "q", (function() {
				return ee
			})), r.d(t, "z", (function() {
				return te
			})), r.d(t, "p", (function() {
				return re
			})), r.d(t, "n", (function() {
				return ne
			})), r.d(t, "k", (function() {
				return ae
			})), r.d(t, "j", (function() {
				return be
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/debounce.js"),
				s = r.n(n),
				i = r("./node_modules/react-router-redux/es/index.js"),
				o = r("./src/lib/isUrl/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/endpoints/post/index.tsx"),
				l = r("./src/redditGQL/operations/WhereToPostSubRec.json"),
				b = r("./src/lib/makeGqlRequest/index.ts"),
				p = r("./src/redditGQL/operations/OpenAISubRecWithDetail.json");
			var f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = r("./src/reddit/helpers/trackers/postComposer.ts"),
				j = r("./src/reddit/models/PostCreationForm/index.ts"),
				g = r("./src/reddit/models/Subreddit/index.ts"),
				I = r("./src/reddit/routes/postCreation/constants.ts"),
				h = r("./src/reddit/selectors/activeModalId.ts"),
				y = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				S = r("./src/reddit/selectors/postCollection.ts"),
				E = r("./src/reddit/selectors/postCreations.ts"),
				T = r("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				v = r("./src/reddit/actions/postCreation/constants.ts");
			const x = Object(d.a)(v.n),
				w = Object(d.a)(v.D),
				k = (Object(d.a)(v.s), e => {
					switch (e) {
						case "markdown":
							return "self";
						case "richtext":
						case "richText":
							return "self";
						case "media":
							return "media";
						default:
							return "link"
					}
				}),
				C = Object(d.a)(v.b),
				D = Object(d.a)(v.c),
				N = Object(d.a)(v.d),
				R = Object(d.a)(v.e),
				A = Object(d.a)(v.f),
				L = Object(d.a)(v.g),
				P = Object(d.a)(v.h),
				U = Object(d.a)(v.i),
				G = Object(d.a)(v.j),
				F = Object(d.a)(v.q),
				M = Object(d.a)(v.S),
				B = Object(d.a)(v.R),
				q = (Object(d.a)(v.T), Object(d.a)(v.U)),
				Q = Object(d.a)(v.V),
				K = Object(d.a)(v.W),
				z = Object(d.a)(v.X),
				W = Object(d.a)(v.Y),
				H = Object(d.a)(v.Z),
				$ = Object(d.a)(v.bb),
				J = Object(d.a)(v.ab),
				V = Object(d.a)(v.r),
				Y = s()((e, t) => {
					Object(o.a)(t) && e((e => async (t, r, n) => {
						let {
							apiContext: s
						} = n;
						const i = await Object(u.e)(s(), e);
						i.ok && i.body && i.body.json && i.body.json.data && t(w(i.body.json.data))
					})(t))
				}, 500),
				X = e => async t => {
					t(N(e)), Y(t, e)
				}, Z = Object(d.a)(v.E), ee = (e, t) => async (r, n) => {
					r(Z()), r(e ? Object(i.b)(I.b) : Object(i.b)(Object(E.cb)(n(), {
						pageLayer: t
					})))
				}, te = e => async t => {
					t(c.i(e))
				}, re = e => async (t, r) => {
					const n = r(),
						s = Object(a.G)(e),
						i = Object(E.H)(n);
					if (s && i) {
						Object(h.a)(n) !== j.d && t(te(j.d))
					} else t(ee(!1, e))
				}, ne = e => async (t, r) => {
					const n = r();
					Object(S.m)(n, {
						subredditId: e
					}) ? t(c.i(j.a)) : t(c.i(j.c))
				}, se = Object(d.a)(v.B), ie = Object(d.a)(v.C), oe = Object(d.a)(v.z), de = Object(d.a)(v.A), ce = e => async (t, r) => {
					Object(T.e)(r()) !== e && t(de({
						isChanged: e
					}))
				}, ae = () => async (e, t) => {
					const r = t();
					if (Object(T.g)(r))
						if (Object(T.h)(r)) {
							const t = r.creations.formData.title,
								n = Object(T.l)(r),
								s = Object(T.k)(r),
								i = Object(T.b)(r);
							e(be(t, n, s, void 0, i))
						} else Object(T.j)(r) && !Object(T.d)(r) && e(pe())
				}, ue = ["torrents", "IsolatedVocals"], le = ["askreddit", "teenagers"], be = (e, t, r, n, s) => async (i, o, d) => {
					let {
						apiContext: c,
						gqlContext: a
					} = d;
					const u = o();
					if (Object(T.i)(u)) return;
					i(ie());
					const l = Object(f.c)(f.a.PostComposer),
						j = await ((e, t, r, n, s, i) => Object(b.a)(e, {
							...p,
							variables: {
								title: t,
								body: r,
								link: n,
								correlationId: s,
								confidenceWeight: i
							}
						}))(a(), e, t, r, l, s),
						I = {};
					let h = {};
					const S = {},
						E = {},
						v = [];
					if (!j.body || !j.ok) return i(ce(!1)), void i(oe()); {
						const {
							data: e
						} = j.body, {
							subredditSuggestions: t
						} = e.openaiSubredditSuggestionsDetailed;
						let r = t.map(e => {
							const {
								subredditInfo: t,
								cVal: r,
								sVal: n
							} = e, s = t.name;
							return s && (E[s] = {
								confidence: r,
								succRate: n
							}), t
						}).filter(e => !ue.includes(e.name));
						const s = (r = n ? r.filter(e => !n(e)) : r).slice(0, T.a),
							d = s.map(e => {
								const t = e.name;
								return v.push(t), t
							});
						if (Object(y.b)(u) && (e => {
								const t = e.map(e => e.toLowerCase());
								let r = !1;
								return le.forEach(e => {
									t.includes(e) && (r = !0)
								}), r
							})(d)) return i(ce(!1)), i(se({
							subreddits: {},
							subredditsAboutInfo: {},
							unavailableSubreddits: {},
							recSubsDict: {},
							recSubsOrder: []
						})), Object(O.G)(o()), void i(oe());
						s.forEach(e => {
							if (Object(g.j)(e)) {
								const t = Object(_.f)(e);
								S[t.id] = t
							} else if (e && Object.keys(e).length > 0) {
								const t = Object(_.a)(e),
									r = Object(m.a)(e);
								I[t.id] = t, h = {
									...h,
									...r
								}
							}
						})
					}
					i(ce(!1)), i(se({
						subreddits: I,
						subredditsAboutInfo: h,
						unavailableSubreddits: S,
						recSubsDict: E,
						recSubsOrder: v
					})), 0 === Object(T.c)(o()).length && i(oe())
				}, pe = () => async (e, t, r) => {
					let {
						apiContext: n,
						gqlContext: s
					} = r;
					const i = t();
					if (Object(T.i)(i)) return;
					e(ie());
					const o = {};
					let d = {};
					const c = {},
						a = {},
						u = [],
						p = await (e => Object(b.a)(e, {
							...l,
							variables: {
								recentSubreddits: []
							}
						}))(s());
					if (!p.ok || !p.body) return e(oe()), void e(ce(!1)); {
						const {
							data: e
						} = p.body;
						(e.whereToPostSuggestions.edges || []).forEach((e, t) => {
							if (t >= T.a) return;
							const r = e.node.subredditInfo;
							if (Object(g.j)(r)) {
								const e = Object(_.f)(r);
								c[e.id] = e
							} else if (r && Object.keys(r).length > 0) {
								const e = Object(_.a)(r),
									t = Object(m.a)(r);
								a[r.name] = {}, u.push(r.name), o[e.id] = e, d = {
									...d,
									...t
								}
							}
						})
					}
					e(ce(!1)), e(se({
						subreddits: o,
						subredditsAboutInfo: d,
						unavailableSubreddits: c,
						recSubsDict: a,
						recSubsOrder: u
					})), 0 === Object(T.c)(t()).length && e(oe())
				}
		},
		"./src/reddit/actions/postFlairStyleTemplates/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return i
			}));
			const n = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_PENDING",
				s = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_LOADED",
				i = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_FAILED"
		},
		"./src/reddit/actions/publicAccessNetwork/api.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "b", (function() {
				return h
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/post.ts"),
				i = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = r("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				d = r("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				c = r("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = Object(n.a)(i.w),
				u = Object(n.a)(i.x),
				l = Object(n.a)(i.G),
				b = (Object(n.a)(i.H), Object(n.a)(i.I)),
				p = Object(n.a)(i.T),
				f = e => async (t, r) => {
					if (Object(d.a)(r())) return t(m(e))
				}, m = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = Object(c.k)(r()),
						d = Object(c.m)(r(), {
							subreddit: e
						}),
						p = d && d.lastUpdated || 0,
						f = 1e3 * i.global.rpan_config_refresh_rate;
					if (i.isPending || i.isPermanentlyCanceled || Date.now() < p + f) return;
					t(l());
					const m = await Object(o.c)(s(), e);
					if (!m.ok) return void t(b());
					const _ = m.body;
					t(a({
						..._.global,
						lastUpdated: Date.now()
					})), t(u({
						name: e,
						config: {
							..._.listing_info,
							lastUpdated: Date.now()
						}
					}))
				}, _ = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					t(p()), await Object(o.h)(s(), e)
				}, O = e => async (t, r, n) => {
					let {
						apiContext: i
					} = n;
					r().posts.models[e] || await t(Object(s.M)(e))
				}, j = Object(n.a)(i.v), g = Object(n.a)(i.J), I = Object(n.a)(i.K), h = () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					const s = t();
					if (Object(c.h)(s)) return;
					e(g());
					const i = await Object(o.d)(n());
					i.ok && i.body && i.body.data ? e(j({
						subreddits: i.body.data
					})) : e(I({
						error: i.error
					}))
				}
		},
		"./src/reddit/actions/recentSubreddits/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			}));
			const n = "SET_RECENT_SUBREDDITS",
				s = "SUBREDDIT_VISITED",
				i = "SUBREDDIT_SAVED",
				o = "COPY_SAVED_SUBREDDITS",
				d = "COPY_SAVED_ID_SUBREDDITS",
				c = 10
		},
		"./src/reddit/actions/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return b
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/loadWithRetries/index.ts");
			const i = "FRONTPAGE_LINKS__REQUEST_LOADED",
				o = "SUBREDDIT_LINKS_LOADED",
				d = 10,
				c = Object(n.a)("FRONTPAGE_LINKS__REQUEST_PENDING"),
				a = Object(n.a)("FRONTPAGE_LINKS__REQUEST_FAILED"),
				u = Object(n.a)(i),
				l = Object(n.a)(o),
				b = () => async e => {
					e(c());
					const t = await (async () => (await Object(s.a)(() => r.e("FrontpageLinks").then(r.t.bind(null, "./src/reddit/endpoints/goodContent/frontpageLinks.json", 3)))).default)();
					e(t ? u(t) : a())
				}
		},
		"./src/reddit/actions/seo/topicLinks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "SUBREDDIT_TOPIC_LINKS_LOADED",
				i = Object(n.a)(s)
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/shortcuts.ts"),
				s = r("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = r("./src/reddit/helpers/routeKey/index.ts");
			const o = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const r = t.routeMatch,
						n = Object(s.a)(e);
					return Object(i.b)(r, e, n)
				},
				d = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				c = e => {
					const t = document.getElementById(e),
						r = window.scrollX,
						n = window.scrollY;
					t && (t.focus(), window.scrollTo(r, n))
				},
				a = () => {
					c(n.b)
				}
		},
		"./src/reddit/actions/structuredStyles/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return n
			})), r.d(t, "k", (function() {
				return s
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "m", (function() {
				return _
			}));
			const n = "STRUCTURED_STYLES__STYLES_RESET_PENDING",
				s = "STRUCTURED_STYLES__STYLES_RESET_LOADED",
				i = "STRUCTURED_STYLES__STYLES_RESET_FAILED",
				o = "SUBREDDIT__STYLES_PENDING",
				d = "SUBREDDIT__STYLES_LOADED",
				c = "SUBREDDIT__STYLES_FAILED",
				a = "STRUCTURED_STYLES__DRAFT_REPLACED",
				u = "STRUCTURED_STYLES__DRAFT_UPDATED",
				l = "STRUCTURED_STYLES__EDITING_STOPPED",
				b = "STRUCTURED_STYLES__EDITING_STARTED",
				p = "STRUCTURED_STYLES__IMAGE_UPLOAD_ADDED",
				f = "STRUCTURED_STYLES__DIRTIED_BLADE_EDITOR",
				m = "STRUCTURED_STYLES__UNDIRTIED_BLADE_EDITOR",
				_ = "STRUCTURED_STYLES__STYLES_UPDATED_LOADED"
		},
		"./src/reddit/actions/structuredStyles/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return G
			})), r.d(t, "k", (function() {
				return B
			})), r.d(t, "j", (function() {
				return z
			})), r.d(t, "e", (function() {
				return H
			})), r.d(t, "d", (function() {
				return J
			})), r.d(t, "g", (function() {
				return Y
			})), r.d(t, "c", (function() {
				return Z
			})), r.d(t, "f", (function() {
				return te
			})), r.d(t, "b", (function() {
				return re
			})), r.d(t, "m", (function() {
				return ne
			})), r.d(t, "a", (function() {
				return se
			})), r.d(t, "h", (function() {
				return ie
			})), r.d(t, "i", (function() {
				return oe
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				i = r("./node_modules/lodash/pick.js"),
				o = r.n(i),
				d = r("./node_modules/react-router-redux/es/index.js"),
				c = r("./src/lib/filterQueryParams/index.ts"),
				a = r("./src/lib/formatApiError/index.ts"),
				u = r("./src/lib/makeActionCreator/index.ts"),
				l = r("./src/reddit/actions/apiRequestState.ts"),
				b = r("./src/reddit/actions/imageUploads.ts"),
				p = r("./src/reddit/actions/modal.ts"),
				f = r("./src/reddit/endpoints/moderator/structuredStyles.ts"),
				m = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				_ = r("./src/reddit/selectors/postFlair.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const g = Object(u.a)(j.c),
				I = Object(u.a)(j.b),
				h = Object(u.a)(j.a);
			var y = r("./src/reddit/actions/toaster.ts"),
				S = r("./src/reddit/actions/widgets/index.ts"),
				E = r("./src/reddit/constants/modals.ts"),
				T = r("./src/reddit/helpers/getGenericUploadError.ts"),
				v = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				x = r("./src/reddit/helpers/media/index.ts"),
				w = r("./src/reddit/models/Image/index.tsx"),
				k = r("./src/reddit/models/StructuredStyles/index.ts"),
				C = r("./src/reddit/models/Toast/index.ts"),
				D = r("./src/reddit/selectors/activeModalId.ts"),
				N = r("./src/reddit/selectors/platform.ts"),
				R = r("./src/reddit/selectors/structuredStyles.ts"),
				A = r("./src/reddit/selectors/user.ts"),
				L = r("./src/reddit/helpers/trackers/blade.ts"),
				P = r("./src/telemetry/index.ts"),
				U = r("./src/reddit/actions/structuredStyles/constants.ts");
			const G = Object(u.a)(U.m),
				F = {
					bannerBackgroundImage: ["bannerBackgroundImagePosition"],
					bannerPositionedImage: ["bannerPositionedImagePosition", "secondaryBannerPositionedImage"]
				},
				M = e => {
					const t = {
						...e
					};
					return Object.keys(e).forEach(r => {
						F[r] && !e[r] && F[r].forEach(e => t[e] = null)
					}), t
				},
				B = (e, t, r, n) => async (s, i, o) => {
					const {
						apiContext: d
					} = o, c = i(), u = M(t), p = c.structuredStyles.models[e];
					let m;
					for (const e in u)
						if (u[e] !== p[e]) {
							m = !0;
							break
						} if (!m) return;
					s(Object(l.h)(n));
					const _ = Object(L.i)(r)(c);
					let j = null,
						g = null;
					try {
						(j = await Object(b.f)(i(), w.a.StructuredStyles)) && (g = Object(b.m)(j)(s, i, o))
					} catch (E) {
						const e = Object(T.a)("webSocket");
						return void s(Object(l.f)(n, e))
					}
					const I = Object(O.S)(c, {
							subredditId: e
						}).name,
						h = await f.e(d(), I, u),
						S = {};
					if (h.ok) {
						if (g) try {
							await g
						} catch (E) {}
						const r = Object(R.f)(i(), {
							apiRequestId: n
						});
						for (const e in r)
							if (e in t) {
								const t = Object(R.g)(i(), {
									name: e
								});
								t && Object(w.j)(t) && (S[e] = r[e])
							} Object.keys(S).length && s($(S)), s(Object(l.e)(n)), s(G({
							subredditId: e,
							styles: {
								...u,
								...S
							}
						}))
					} else j && j.websocket.close(), s(Object(l.f)(n, h.error)), h.body && s(y.f({
						kind: C.b.Error,
						text: Object(a.a)(h.error, h.status)
					}));
					Object(P.a)({
						..._,
						actionInfo: {
							..._.actionInfo,
							success: h.ok
						}
					})
				}, q = Object(u.a)(U.l), Q = Object(u.a)(U.k), K = Object(u.a)(U.j), z = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					t(q({
						subredditId: e
					}));
					const i = Object(O.S)(r(), {
							subredditId: e
						}).name,
						o = await f.f(s(), i);
					if (o.ok) {
						const n = r().structuredStyles.models[e],
							s = n ? n.mobileKeyColor : null;
						t(Q({
							subredditId: e,
							styles: {
								mobileKeyColor: s
							}
						}))
					} else t(K({
						subredditId: e,
						...o.error
					}))
				}, W = Object(u.a)(U.d), H = e => async (t, r, n) => {
					const s = r(),
						i = s.structuredStyles.models[e] || {},
						o = Object(A.db)(s);
					t(W({
						isNightmodeOn: o,
						styles: i,
						subredditId: e
					})), ue(e, !1)(t, r, n), (e => async (t, r, n) => {
						let {
							gqlContext: s
						} = n;
						const i = r(),
							o = Object(O.S)(i, {
								subredditId: e
							});
						if (!o) return;
						const d = Object(_.d)(i, {
								subredditId: e
							}),
							c = d && d.templateIds;
						if (!c || !c.length) return;
						t(g({
							subredditId: e
						}));
						const a = await Object(f.a)(s(), o.name, c);
						if (a.ok) {
							const r = {};
							if (a.body) {
								const {
									data: e
								} = a.body;
								if (e && e.subreddit)
									for (const t of e.subreddit.postFlairStyleTemplates) r[t.id] = Object(m.a)(t)
							}
							t(I({
								subredditId: e,
								templates: r
							}))
						} else t(h({
							subredditId: e,
							error: a.error
						}))
					})(e)(t, r, n), Object(S.g)(e, !1)(t, r, n)
				}, $ = Object(u.a)(U.c), J = e => async (t, r, n) => {
					const s = M(e),
						i = r();
					for (const e in s)
						if (Object(k.l)(e))
							if (s[e]) {
								if ("string" != typeof s[e]) {
									const i = s[e],
										o = await Object(w.e)(i);
									Y(e, o)(t, r, n), s[e] = ""
								}
							} else {
								const r = Object(R.g)(i, {
									name: e
								});
								r && t(Object(b.h)(r))
							} t($(s))
				}, V = Object(u.a)(U.f), Y = (e, t, r) => async (n, s, i) => {
					const o = s(),
						d = r || o.structuredStyles.isEditing,
						c = Object(O.S)(o, {
							subredditId: d
						}).name;
					n(V({
						imageKey: e,
						uploadId: t.id
					})), n(Object(b.k)(t));
					const a = await f.d(i.apiContext(), c, t.file.name, e, await Object(x.h)(t.file));
					try {
						const r = await Object(b.g)(s(), a, t, w.a.StructuredStyles);
						if (r) {
							const t = r.url;
							n(Object(b.j)(r)), n($({
								[e]: t
							}))
						}
					} catch (u) {
						if (u instanceof Error) throw u;
						n(Object(b.i)(u))
					}
				}, X = Object(u.a)(U.b), Z = (e, t, r) => async (n, i, d) => {
					const c = i(),
						a = c.structuredStyles.models[e] || {},
						u = c.structuredStyles.draft,
						l = Object(L.h)(t)(c);
					if (r) {
						const t = o()(a, r),
							i = {
								...s()(u, r),
								...t
							};
						n(X({
							subredditId: e,
							styles: i
						}))
					} else {
						n(X({
							subredditId: e,
							styles: a
						}))
					}
					Object(P.a)(l)
				}, ee = Object(u.a)(U.e), te = () => async (e, t, r) => {
					const n = t(),
						s = Object(A.eb)(n),
						i = !!Object(N.a)(n);
					if (e(ee({
							nightmodeTempUpdated: s
						})), i) return;
					const {
						url: o
					} = n.platform.currentPage;
					o && e(Object(d.c)(Object(c.a)(o, ["styling", "route"])))
				}, re = Object(u.a)(U.a), ne = Object(u.a)(U.n), se = () => async e => e(te()), ie = e => async (t, r) => {
					const n = r(),
						s = Object(R.i)(n);
					!Object(D.b)(E.a.BLADE_UNSAVED_CHANGES)(n) && s && (Object(R.a)(n, {
						subredditId: e
					}) ? t(Object(p.i)(E.a.BLADE_UNSAVED_CHANGES)) : t(se()))
				}, oe = e => async (t, r) => {
					const n = r();
					Object(R.i)(n) || t(Object(A.db)(n) ? Object(p.i)(E.a.BLADE_NIGHTMODE) : H(e))
				}, de = Object(u.a)(U.i), ce = Object(u.a)(U.h), ae = Object(u.a)(U.g), ue = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i,
						apiContext: o
					} = s;
					r(de({
						subredditId: e
					}));
					const d = Object(O.S)(n(), {
						subredditId: e
					});
					if (!d) return;
					if (!t) {
						const n = await f.c(o(), d.name, t);
						if (n.ok) {
							const t = n.body,
								s = t.data ? t.data.style : {};
							r(ce({
								subredditId: e,
								styles: s
							}))
						} else r(ae({
							subredditId: e,
							...n.error
						}));
						return
					}
					const c = await f.b(i(), d.name);
					if (c.ok) {
						let t = {};
						if (c.body) {
							const {
								data: e
							} = c.body;
							e && e.subreddit && e.subreddit.styles && (t = Object(v.a)(e.subreddit.styles))
						}
						r(ce({
							subredditId: e,
							styles: t
						}))
					} else r(ae({
						subredditId: e,
						...c.error
					}))
				}
		},
		"./src/reddit/actions/subreddit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "m", (function() {
				return W
			})), r.d(t, "l", (function() {
				return H
			})), r.d(t, "k", (function() {
				return $
			})), r.d(t, "j", (function() {
				return J
			})), r.d(t, "i", (function() {
				return V
			})), r.d(t, "h", (function() {
				return Y
			})), r.d(t, "d", (function() {
				return X
			})), r.d(t, "p", (function() {
				return re
			})), r.d(t, "t", (function() {
				return ne
			})), r.d(t, "o", (function() {
				return oe
			})), r.d(t, "r", (function() {
				return ae
			})), r.d(t, "g", (function() {
				return ue
			})), r.d(t, "f", (function() {
				return le
			})), r.d(t, "e", (function() {
				return be
			})), r.d(t, "q", (function() {
				return _e
			})), r.d(t, "b", (function() {
				return Oe
			})), r.d(t, "c", (function() {
				return je
			})), r.d(t, "a", (function() {
				return ge
			})), r.d(t, "u", (function() {
				return Se
			})), r.d(t, "n", (function() {
				return Ee
			})), r.d(t, "s", (function() {
				return Te
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				i = r.n(s),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/listingSort/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/makeListingKey/index.ts"),
				u = r("./src/reddit/actions/economics/helpers/async.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				b = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				p = r("./src/reddit/actions/pages/subreddit.ts"),
				f = r("./src/reddit/actions/preferences.ts"),
				m = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				_ = r("./src/reddit/actions/subredditRules/constants.ts"),
				O = r("./src/reddit/actions/toaster.ts"),
				j = r("./src/reddit/constants/history.ts"),
				g = r("./src/reddit/constants/modals.ts"),
				I = r("./src/reddit/constants/page.ts"),
				h = r("./src/reddit/constants/parameters.ts"),
				y = r("./src/reddit/constants/postLayout.ts"),
				S = r("./src/reddit/contexts/PageLayer/index.tsx"),
				E = r("./src/reddit/endpoints/governance/posts.ts"),
				T = r("./src/reddit/endpoints/messages/index.ts"),
				v = r("./src/reddit/endpoints/modQueue/index.ts"),
				x = r("./src/reddit/endpoints/page/subredditPage.ts"),
				w = r("./src/reddit/endpoints/subreddit/about.ts"),
				k = r("./src/reddit/endpoints/subreddit/rules.ts"),
				C = r("./src/reddit/endpoints/user/preferences.ts"),
				D = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				N = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				R = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				A = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				L = r("./src/reddit/helpers/trackers/feed.ts"),
				P = r("./src/reddit/models/Subreddit/index.ts"),
				U = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				G = r("./src/reddit/models/Toast/index.ts"),
				F = r("./src/reddit/models/User/index.ts"),
				M = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				B = r("./src/reddit/selectors/moderatorPermissions.ts"),
				q = r("./src/reddit/selectors/profile.ts"),
				Q = r("./src/reddit/selectors/subreddit.ts"),
				K = r("./src/reddit/selectors/user.ts");
			const z = {},
				W = "SUBREDDIT__MODEL_SUCCEEDED",
				H = "SUBREDDIT__MODEL_PENDING",
				$ = "SUBREDDIT__MODEL_FAILED",
				J = "SUBREDDIT__MORE_POSTS_PENDING",
				V = "SUBREDDIT__MORE_POSTS_LOADED",
				Y = "SUBREDDIT__MORE_POSTS_FAILED",
				X = "SUBREDDIT__META_FILTER_TOGGLED",
				Z = Object(c.a)(J),
				ee = Object(c.a)(V),
				te = Object(c.a)(Y),
				re = Object(c.a)(X),
				ne = Object(c.a)(_.b),
				se = Object(c.a)(_.c),
				ie = Object(c.a)(_.a),
				oe = (e, t) => async (r, n) => {
					await (t === P.f.User ? r(de(e)) : r(ce(e)))
				}, de = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const i = Object(q.m)(r(), e),
						o = await Object(k.c)(s(), e);
					if (o.ok) {
						const e = o.body;
						t(ne({
							rules: e,
							subredditId: i
						}))
					}
				}, ce = e => async (t, r, s) => {
					let {
						gqlContext: i
					} = s;
					const o = Object(Q.D)(r(), e);
					t(se());
					const d = await Object(k.b)(i(), e);
					if (d.ok) {
						const e = d.body;
						t(ne({
							rules: e,
							subredditId: o
						}))
					} else {
						t(ie());
						const r = `error-block-${e}`;
						t(O.f({
							id: r,
							kind: G.b.Error,
							text: n.fbt._("An error has occurred. Please try again later", null, {
								hk: "Elbdz"
							})
						}))
					}
				}, ae = e => async (t, r, n) => {
					let {
						apiContext: s,
						gqlContext: c
					} = n;
					const {
						subredditName: l
					} = e;
					let p = e.t;
					const f = r(),
						_ = Object(N.a)(e, f),
						O = f.platform.currentPage ? f.platform.currentPage.queryParams : {},
						g = Object(a.a)(l, _, {
							t: p,
							...O
						}),
						T = f.listings.postOrder.loadMore[g],
						v = f.listings.postOrder.listingSort[g];
					let w = _;
					if (v && !w) {
						const e = Object(d.d)(v.sort);
						w = e.sort, p = e.timeSort
					}
					const k = f.listings.postOrder.api.pending[g],
						{
							fetchedTokens: C
						} = f.listings.postOrder,
						R = !(!C[g] || !C[g][T.token]);
					if (k || R) return;
					if (w === o.W.AWARDED && l === I.g) return;
					t(Z({
						key: g,
						fetchedToken: T.token
					}));
					const A = {
							after: T.token,
							dist: T.dist,
							forceGeopopular: l === I.d.Popular,
							layout: y.e[Object(S.R)(f, {})],
							sort: w,
							t: p,
							...i()(O, [...h.n, h.j])
						},
						P = Object(M.a)(f),
						U = P ? () => Object(x.b)(c(), Object(x.c)(f, l, {
							...A,
							limit: y.a
						}), Object(K.Z)(f)) : () => Object(x.a)(s(), l, A),
						G = await U(),
						F = {
							...G.body,
							...Object(D.a)(f, g, G.body)
						};
					if (G.ok) {
						let e;
						const n = F.postIds.filter(e => !!F.posts[e].isMeta),
							i = Object(Q.D)(r(), l);
						if (n.length) {
							const t = await Object(E.a)(s(), i, n);
							t.ok && (e = t.body)
						}
						const o = Object(B.h)(f, {
							subredditId: Object(Q.D)(f, l)
						});
						if (!P && o && t(Object(b.a)({
								postIds: F.postIds
							})), t(ee({
								fetchedToken: T.token,
								key: g,
								meta: f.meta,
								governance: e,
								...F
							})), Object(B.i)(f, i)) {
							let e;
							P || (e = await Object(x.b)(c(), Object(x.c)(f, l, {
								...A,
								limit: y.a
							}), Object(K.Z)(f)));
							const r = P ? F : e.body;
							if (P ? r : e.ok) {
								const e = r.postIds.map(e => r.posts[e].lastAuthorModNote);
								t(Object(m.e)({
									subredditId: i,
									nodes: e
								}))
							}
						}
						await t(Object(u.a)({
							subredditId: i,
							postIds: F.postIds,
							skip: ["communityDetails", "subscription"]
						})), Object(L.b)(j.a.NextPageLoad)(r())
					} else {
						t(te({
							error: G.error,
							fetchedToken: T.token,
							key: g,
							...F
						}));
						const e = G.error;
						Object(L.a)(e ? `${G.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(r())
					}
				}, ue = "SUBSCRIPTION__MODERATED_SUBREDDITS_PENDING", le = "SUBSCRIPTION__MODERATED_SUBREDDITS_LOADED", be = "SUBSCRIPTION__MODERATED_SUBREDDITS_FAILED", pe = Object(c.a)(ue), fe = Object(c.a)(le), me = Object(c.a)(be), _e = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t();
					if (!s.user.account || s.subreddits.moderated.api.fetched) return;
					e(pe());
					const i = await Object(v.c)(n(), o.rb.Modqueue, {
						moderated: !0,
						moderated_limit: 50
					});
					i.ok ? e(fe(i.body)) : e(me({
						error: i.error
					}))
				}, Oe = "SUBREDDIT__ABOUT_PENDING", je = "SUBREDDIT__ABOUT_SUCCEEDED", ge = "SUBREDDIT__ABOUT_FAILED", Ie = Object(c.a)(Oe), he = Object(c.a)(je), ye = Object(c.a)(ge), Se = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r();
					if (Object(Q.u)(i, {
							subredditName: e
						}) || i.subreddits.api.about.error[e.toLowerCase()] || i.subreddits.api.about.pending[e.toLowerCase()]) return;
					t(Ie({
						subredditName: e
					}));
					const o = !Object(Q.D)(i, e),
						d = await Object(w.a)(s(), e, o);
					if (d.ok) {
						const r = d.body.data.subreddit,
							n = Object(R.a)(r),
							s = o ? Object(A.a)(r) : void 0;
						t(he({
							subredditName: e,
							subreddits: s ? {
								[s.id]: s
							} : void 0,
							data: n
						}))
					} else t(ye({
						subredditName: e,
						error: d.error
					}))
				}, Ee = (e, t, r) => async (n, s, i) => {
					let {
						apiContext: o
					} = i;
					var d;
					const c = e.substring(2),
						a = r === U.e.View ? null === (d = Object(K.f)(s(), c)) || void 0 === d ? void 0 : d.subredditId : Object(Q.D)(s(), c),
						u = Object(K.k)(s());
					if (u && a) {
						const e = ((e, t, r, n) => {
							return {
								to: `/r/${e}`,
								subject: `[join] I would like to join ${e}`,
								text: r + "\n\n   *To approve this user*, visit [the approved users page for r/" + e + "](https://www.reddit.com/r/" + e + "/about/contributors?user=" + t + ') and click "ADD USER".\n    Approving this user gives them permission to ' + n + ". You can change these community restrictions from the [community settings](/r/" + e + "/about/edit) page.\n\n   To get more information about this user, visit the profile page of [u/" + t + "](/u/" + t + ") or reply to this message to start a conversation."
							}
						})(c, Object(F.e)(u), t, r);
						if ((await Object(T.b)(o(), e)).ok) {
							const e = new Date,
								t = {
									isContributorRequestTimestamp: e.setDate(e.getDate())
								};
							n(Object(f.F)({
								subredditId: a,
								prefs: t
							})), Object(C.j)(a, t, o()), r !== U.e.View && n(Object(l.i)(g.a.CONTRIBUTOR_REQUEST_PENDING))
						}
					}
				}, Te = e => async (t, r) => {
					const n = r(),
						{
							subredditName: s
						} = e,
						i = e.t,
						o = Object(N.a)(e, n),
						d = n.platform.currentPage ? n.platform.currentPage.queryParams : z,
						c = Object(a.a)(s, o, {
							t: i,
							...d
						}),
						u = {
							t: i,
							sort: o,
							isRefresh: !0,
							...d
						};
					await t(Object(p.subredditDataRequested)(c, s, u, !0))
				}
		},
		"./src/reddit/actions/subreddit/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "j", (function() {
				return o
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "r", (function() {
				return c
			})), r.d(t, "q", (function() {
				return a
			})), r.d(t, "m", (function() {
				return u
			})), r.d(t, "l", (function() {
				return l
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "p", (function() {
				return p
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "w", (function() {
				return g
			})), r.d(t, "v", (function() {
				return I
			})), r.d(t, "x", (function() {
				return h
			})), r.d(t, "y", (function() {
				return y
			})), r.d(t, "z", (function() {
				return S
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "t", (function() {
				return v
			})), r.d(t, "u", (function() {
				return x
			})), r.d(t, "s", (function() {
				return w
			}));
			const n = "SUBREDDIT__ADD_TOP_SUBREDDIT_MODELS",
				s = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS",
				i = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS_PAGE_INFO",
				o = "SUBREDDIT__POSTS_LOADED",
				d = "SUBREDDIT__POSTS_SET_FAILED",
				c = "SUBREDDIT__SUBREDDITS_POSTS_LOADED",
				a = "SUBREDDIT__SUBREDDITS_POSTS_SET_FAILED",
				u = "SUBREDDIT__RANKINGS_PENDING",
				l = "SUBREDDIT__RANKINGS_LOADED",
				b = "SUBREDDIT__RANKINGS_FAILED",
				p = "SUBREDDIT__SIMILAR_SUBREDDITS_PENDING",
				f = "SUBREDDIT__SIMILAR_SUBREDDITS_LOADED",
				m = "SUBREDDIT__SIMILAR_SUBREDDITS_FAILED",
				_ = "SUBREDDIT__ONBOARDING_SUBREDDITS_PENDING",
				O = "SUBREDDIT__ONBOARDING_SUBREDDITS_LOADED",
				j = "SUBREDDIT__ONBOARDING_SUBREDDITS_FAILED",
				g = "SUBREDDIT__EDIT_REQUESTED",
				I = "SUBREDDIT__EDIT_FAILED",
				h = "SUBREDDIT__EDIT_SUCCESS",
				y = "SUBREDDIT_QUESTIONS_LOADED",
				S = "SUBREDDIT_SURVEY_ANSWERED",
				E = "SUBREDDIT_SURVEY_DISMISSED",
				T = "SUBREDDIT_SURVEY_DISMISS",
				v = "SUBREDDIT_ABOUT_INFO_UPDATE__PENDING",
				x = "SUBREDDIT_ABOUT_INFO_UPDATE__SUCCESS",
				w = "SUBREDDIT_ABOUT_INFO_UPDATE__FAILED"
		},
		"./src/reddit/actions/subreddit/questions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/GetSubredditQuestions.json"),
				i = r("./src/reddit/actions/subreddit/constants.ts");
			const o = e => async (t, r, i) => {
				let {
					gqlContext: o
				} = i;
				var c;
				const a = (await ((e, t) => Object(n.a)(e, {
					...s,
					variables: t
				}))(o(), {
					id: e
				})).body;
				d(t, e, null === (c = a.data) || void 0 === c ? void 0 : c.subredditInfoById)
			};

			function d(e, t, r) {
				const n = null == r ? void 0 : r.answerableQuestions,
					s = null == r ? void 0 : r.contentRatingSurvey,
					o = null == r ? void 0 : r.communityProgressModule;
				(n || s || o) && e({
					type: i.y,
					payload: {
						id: t,
						questions: n,
						survey: s,
						progressModule: o
					}
				})
			}
		},
		"./src/reddit/actions/subredditDuplicates.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/config.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/reddit/models/Post/index.ts");
			var c = r("./src/reddit/models/Duplicates/index.ts"),
				a = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/selectors/profile.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const b = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				p = (Object(n.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(n.a)(b)),
				f = (e, t) => async (r, n, b) => {
					let {
						apiContext: f
					} = b;
					const m = Object(l.S)(n(), {
						subredditId: e
					}) || Object(u.p)(n(), {
						profileId: e
					});
					if (!m) return;
					const _ = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(a.h)(m) ? s.jc + m.name : m.name
						},
						O = await ((e, t, r) => Object(o.a)(e, {
							data: r,
							endpoint: `${i.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(d.u)(t)}`,
							method: s.jb.GET
						}))(f(), t, _);
					if (O.ok) {
						const n = O.body;
						r(p({
							distinguishKey: Object(c.a)(t, _),
							postIds: n.postIds,
							posts: n.posts,
							profiles: n.profiles,
							subreddits: n.subreddits,
							subredditId: e
						}))
					}
				}
		},
		"./src/reddit/actions/subredditModeration/modUserNotes.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return k
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "c", (function() {
				return R
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "d", (function() {
				return U
			})), r.d(t, "b", (function() {
				return G
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/actions/subredditModeration/constants.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/CommentsPageLastAuthorModNotes.json"),
				u = r("./src/redditGQL/operations/CreateModUserNote.json"),
				l = r("./src/redditGQL/operations/DeleteModUserNote.json"),
				b = r("./src/redditGQL/operations/GetModUserNotes.json"),
				p = r("./src/redditGQL/operations/GetTotalModNoteCount.json");
			var f = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				m = r("./src/reddit/models/SubredditModeration/index.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/selectors/moderatorPermissions.ts"),
				j = r("./src/reddit/selectors/modUserNotes.ts"),
				g = r("./src/reddit/helpers/trackers/modNote.ts"),
				I = r("./src/telemetry/index.ts"),
				h = r("./src/redditGQL/types.ts"),
				y = r("./src/lib/initializeClient/installReducer.ts"),
				S = r("./src/reddit/reducers/features/modUserNotes/index.ts");
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			Object(y.a)({
				features: {
					modUserNotes: S.a
				}
			});
			const T = Object(s.a)(o.Q),
				v = Object(s.a)(o.P),
				x = Object(s.a)(o.O),
				w = Object(s.a)(o.N),
				k = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					var o;
					const a = r(),
						{
							subredditId: u,
							userId: l,
							before: p,
							filter: f
						} = e,
						O = Object(m.d)(u, l, f, p),
						j = a.features.modUserNotes.fetchedTokens[O];
					if (!a.features.modUserNotes.api.pending[O] && !j) {
						t(T({
							subredditId: u,
							userId: l,
							filter: f,
							fetchedToken: p
						}));
						try {
							const e = await ((e, t) => Object(c.a)(e, {
								...b,
								variables: {
									...t,
									last: 25
								}
							}))(s(), {
								subredditId: u,
								userId: l,
								filter: f,
								before: p
							});
							if (e.ok) {
								const {
									data: {
										subredditInfoById: r
									}
								} = e.body;
								if ("Subreddit" === (null == r ? void 0 : r.__typename) && (null === (o = null == r ? void 0 : r.modNotes) || void 0 === o ? void 0 : o.edges)) {
									const {
										edges: e,
										pageInfo: n
									} = r.modNotes, s = [];
									e.forEach(e => {
										e && e.node && s.push(e.node)
									}), t(v({
										notes: s,
										subredditId: u,
										userId: l,
										filter: f,
										fetchedToken: p,
										loadMoreToken: n.hasNextPage ? n.endCursor : null
									}))
								}
								const {
									errors: n
								} = e.body;
								n && n.length && i.c.captureException(n)
							} else t(x({
								subredditId: u,
								userId: l,
								filter: f,
								fetchedToken: p
							})), t(Object(d.f)({
								kind: _.b.Error,
								text: E._("Oops, something went wrong. Try again.", null, {
									hk: "2VQ3RW"
								}),
								duration: 3e3
							}))
						} catch (g) {
							i.c.captureException(g), t(Object(d.f)({
								kind: _.b.Error,
								text: E._("Oops, something went wrong. Try again.", null, {
									hk: "2VQ3RW"
								}),
								duration: 3e3
							}))
						}
					}
				}, C = Object(s.a)(o.D), D = Object(s.a)(o.C), N = e => {
					let {
						subredditId: t,
						nodes: r
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: i
						} = s;
						const o = [],
							d = [];
						r.map(e => {
							const t = null == e ? void 0 : e.user.id;
							t && !d.includes(t) && e && (o.push(e), d.push(t))
						}), e(D({
							subredditId: t,
							lastAuthorModNotes: o
						}))
					}
				}, R = (e, t, r) => async (s, i, o) => {
					let {
						gqlContext: d
					} = o;
					var u, l, b, p, m, _, O;
					const {
						hasSortParam: j,
						sortToUse: g
					} = Object(f.a)(i(), e), I = n.Jb[g], y = {
						postId: e,
						requestPostModerationInfo: !t,
						...j && I && {
							sortType: h.d[I]
						},
						...r && {
							after: r
						}
					}, S = await ((e, t) => Object(c.a)(e, {
						...a,
						variables: {
							...t
						}
					}))(d(), y);
					if (S.ok) {
						const e = null === (u = S.body) || void 0 === u ? void 0 : u.data,
							t = null === (b = null === (l = null == e ? void 0 : e.postInfoById) || void 0 === l ? void 0 : l.subreddit) || void 0 === b ? void 0 : b.id,
							r = null === (m = null === (p = null == e ? void 0 : e.postInfoById) || void 0 === p ? void 0 : p.moderationInfo) || void 0 === m ? void 0 : m.lastAuthorModNote,
							n = null === (O = null === (_ = null == e ? void 0 : e.postInfoById) || void 0 === _ ? void 0 : _.commentForest) || void 0 === O ? void 0 : O.trees;
						r && s(C({
							subredditId: t,
							lastAuthorModNote: r
						})), n && s((e => {
							let {
								subredditId: t,
								commentTrees: r
							} = e;
							return async (e, n, s) => {
								let {
									gqlContext: i
								} = s;
								const o = [],
									d = [];
								r.map(e => {
									var t, r;
									if (!(null == e ? void 0 : e.node)) return;
									const n = null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote,
										s = null == n ? void 0 : n.user.id;
									s && !d.includes(s) && n && (o.push(n), d.push(s))
								}), e(D({
									subredditId: t,
									lastAuthorModNotes: o
								}))
							}
						})({
							subredditId: t,
							commentTrees: n
						}))
					}
				}, A = Object(s.a)(o.M), L = (e, t, r, n, s, i) => async (o, a, l) => {
					let {
						gqlContext: b
					} = l;
					var p, f;
					const m = {
							subredditId: e,
							userId: t,
							label: s,
							note: r,
							redditId: i
						},
						O = await ((e, t) => Object(c.a)(e, {
							...u,
							variables: {
								input: t
							}
						}))(b(), m);
					if (O.ok) {
						const r = null === (f = null === (p = O.body) || void 0 === p ? void 0 : p.data) || void 0 === f ? void 0 : f.createModUserNote.createdNote;
						if (!r) return void o(Object(d.f)({
							kind: _.b.Error,
							text: E._("Something went wrong", null, {
								hk: "zYMeg"
							}),
							duration: 3e3
						}));
						o(A({
							subredditId: e,
							newModNote: r,
							filter: n
						})), Object(I.a)(Object(g.v)({
							userId: t,
							subredditId: e,
							filteredType: n,
							modNote: r
						})(a())), o(Object(d.f)({
							kind: _.b.SuccessMod,
							text: E._("Successfully created mod note", null, {
								hk: "10Vu91"
							}),
							duration: 3e3
						}))
					} else {
						const {
							errors: e
						} = O.body, t = e[0] ? e[0].message : E._("Something went wrong", null, {
							hk: "2uu095"
						});
						o(Object(d.f)({
							kind: _.b.Error,
							text: t,
							duration: 3e3
						}))
					}
				}, P = Object(s.a)(o.hb), U = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					var o, d, a, u;
					const l = n();
					if (!Object(O.i)(l, e)) return;
					const b = {
						subredditId: e,
						userId: t,
						filter: h.k.All
					};
					if (Object(j.f)(l, t, e)) return;
					const f = await ((e, t) => Object(c.a)(e, {
						...p,
						variables: {
							...t
						}
					}))(i(), b);
					if (f.ok) {
						const n = null === (o = f.body) || void 0 === o ? void 0 : o.data;
						if ("Subreddit" === (null === (d = null == n ? void 0 : n.subredditInfoById) || void 0 === d ? void 0 : d.__typename)) {
							const s = null === (u = null === (a = null == n ? void 0 : n.subredditInfoById) || void 0 === a ? void 0 : a.modNotes) || void 0 === u ? void 0 : u.totalCount;
							s && r(P({
								subredditId: e,
								userId: t,
								totalCount: s
							}))
						}
					}
				}, G = (e, t, r, n) => async (s, i, o) => {
					let {
						gqlContext: a
					} = o;
					const u = {
						subredditId: e,
						userId: t,
						noteId: r,
						noteType: n
					};
					(await ((e, t) => Object(c.a)(e, {
						...l,
						variables: {
							input: t
						}
					}))(a(), u)).ok ? (s(w({
						subredditId: e,
						userId: t,
						noteId: r
					})), s(Object(d.f)({
						kind: _.b.SuccessMod,
						text: E._("Mod Note sucessfully deleted!", null, {
							hk: "17NyFK"
						})
					}))) : s(Object(d.f)({
						kind: _.b.Error,
						text: E._("Could not delete note. Try again later.", null, {
							hk: "1XczhA"
						})
					}))
				}
		},
		"./src/reddit/actions/subredditRules/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			}));
			const n = "SUBREDDIT__RULES_LOADED",
				s = "SUBREDDIT__RULES_PENDING",
				i = "SUBREDDIT__RULES_FAILED",
				o = "SUBREDDIT__RULE_ADDED",
				d = "SUBREDDIT__RULE_EDITED",
				c = "SUBREDDIT__RULE_REMOVED",
				a = "SUBREDDIT__RULES_REORDERED"
		},
		"./src/reddit/actions/subredditSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return E
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "g", (function() {
				return D
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "f", (function() {
				return R
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "j", (function() {
				return G
			})), r.d(t, "i", (function() {
				return F
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/invert.js"),
				i = r.n(s),
				o = r("./node_modules/lodash/pick.js"),
				d = r.n(o),
				c = r("./node_modules/lodash/xor.js"),
				a = r.n(c),
				u = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/makeActionCreator/index.ts"),
				b = r("./src/reddit/endpoints/subreddit/settings.ts"),
				p = r("./src/telemetry/index.ts"),
				f = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/models/User/index.ts"),
				I = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/reddit/selectors/subredditSettings.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				S = r("./src/reddit/selectors/widgets.ts");
			const E = "SUBREDDIT_SETTINGS_LOADED",
				T = Object(l.a)(E),
				v = "SUBREDDIT_NOTIFICATION_SETTINGS_LOADED",
				x = Object(l.a)(v),
				w = "SUBREDDIT_NOTIFICATION_SETTINGS_UPDATED",
				k = Object(l.a)(w),
				C = (e, t) => async (r, n, s) => {
					let {
						apiContext: i,
						gqlContext: o
					} = s;
					if (!t || !Object(I.U)(n(), t)) {
						const t = await Object(b.c)(i(), e);
						t && t.ok && r(T(t.body))
					}
					if (t && !Object(h.b)(n(), {
							subredditId: t
						})) {
						const e = await Object(m.a)(o(), t);
						if (e && e.ok) {
							const t = e.body,
								n = Object(_.e)(t.data);
							r(x(n))
						}
					}
				}, D = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = Object(y.k)(t());
					s && await e(C(u.jc + Object(g.e)(s)))
				}, N = "SUBREDDIT_SETTINGS_UPDATE_REQUESTED", R = "SUBREDDIT_SETTINGS_UPDATE_SUCCESS", A = "SUBREDDIT_SETTINGS_UPDATE_FAILURE", L = Object(l.a)(N), P = Object(l.a)(R), U = Object(l.a)(A), G = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (o, c, u) => {
						let {
							apiContext: l,
							gqlContext: _
						} = u;
						o(L());
						const g = c(),
							y = d()(Object(I.U)(g, e), ...Object.keys(t)),
							E = d()(Object(h.b)(g, {
								subredditId: e
							}), ...Object.keys(r)),
							T = await Object(b.g)(l(), e, t),
							v = Object.keys(r).length > 0;
						let x = !0;
						if (v) {
							x = (await Object(m.b)(_(), e, r)).ok
						}
						if (!T.ok || v && !x) o(U()), o(Object(f.f)({
							kind: j.b.Error,
							text: n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: G(e, t, E, void 0)
						})), s && Object(p.a)(Object(O.c)(g, "BE returned an error:"));
						else {
							const d = Object(b.d)(T.body, i()(b.a));
							o(P({
								settings: {
									...d,
									subredditId: e
								},
								idCardWidgetId: Object(S.c)(g, {
									subredditId: e
								})
							})), v && o(k({
								notificationSettings: r,
								subredditId: e
							}));
							const c = {};
							s && 0 === a()(Object.keys(t), Object.keys(y)).length && (c.buttonText = n.fbt._("Undo", null, {
								hk: "1Gskii"
							}), c.buttonAction = G(e, y, E, s)), o(Object(f.f)({
								kind: j.b.SuccessCommunity,
								text: n.fbt._("Subreddit settings updated successfully", null, {
									hk: "2fmdlZ"
								}),
								...c
							}))
						}
					}
				}, F = (e, t) => async (r, s, i) => {
					let {
						apiContext: o
					} = i;
					(await Object(b.e)(o(), e, t)).ok ? r(Object(f.f)({
						kind: j.b.SuccessCommunity,
						text: n.fbt._("Test message was sent to your inbox", null, {
							hk: "1ZtKzO"
						})
					})) : r(Object(f.f)({
						kind: j.b.Error,
						text: n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
							hk: "3wBPeO"
						})
					}))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			}));
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				i = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				o = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				d = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				a = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return v
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "b", (function() {
				return L
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				d = r("./src/reddit/actions/login.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/actions/subscription/constants.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/constants/posts.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				p = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts");
			var m = r("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeSubscribedSubredditsFromGql/index.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/selectors/profile.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/selectors/subscriptions.ts"),
				h = r("./src/reddit/selectors/user.ts");
			const y = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				S = Object(i.a)(a.c),
				E = Object(i.a)(a.b),
				T = Object(i.a)(a.a),
				v = Object(i.a)(a.h),
				x = (Object(i.a)(a.i), Object(i.a)(a.g), () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(E());
					const i = await Object(m.a)(n());
					if (i.ok) {
						const t = i.body.data,
							r = Object(_.a)(t);
						e(S(r))
					} else e(T({
						error: i.error
					}))
				}),
				w = (e, t) => t.type === l.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				k = (e, t, r) => async (i, a, b) => {
					let {
						apiContext: p
					} = b, f = e.map(e => e.type === l.a.SUBREDDIT ? {
						id: Object(g.D)(a(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(j.m)(a(), e.name),
						name: `${s.jc}${e.name}`,
						type: e.type
					});
					if (!Object(h.Q)(a())) return i(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void i(Object(d.j)());
					const _ = Object(h.k)(a());
					if (_) {
						const t = f.length,
							r = e.length;
						if (f = f.filter(e => !w(_, e)), (e = e.filter(e => !w(_, e))).length !== r || f.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							i(Object(u.f)(Object(u.e)(e, O.b.Error)))
						}
						if (!e.length && !f.length) return
					}
					i(v({
						identifiers: f,
						nameIdentifiers: e,
						profileModels: a().profiles.models,
						subredditModels: a().subreddits.models,
						subscriptionsCount: Object(I.b)(a()),
						userIsSubscriber: t,
						widgetId: r
					}));
					const y = await Object(m.c)(p(), {
						subredditNames: f.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (y.ok) {
						const r = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : n.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [n.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							s = n.fbt._("Sucсessfully followed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "1S5AXJ"
							}),
							d = n.fbt._("Sucсessfully unfollowed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "2XWHyB"
							}),
							c = n.fbt._("Sucсessfully joined {communityname}", [n.fbt._param("communityname", r)], {
								hk: "3Al8aF"
							}),
							a = n.fbt._("Sucсessfully left {communityname}", [n.fbt._param("communityname", r)], {
								hk: "2w5JFZ"
							});
						i(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : d : t ? c : a
						}))
					} else {
						i(v({
							identifiers: f,
							nameIdentifiers: e,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(I.b)(a()),
							userIsSubscriber: !t,
							widgetId: r
						}));
						const s = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						i(Object(u.f)(Object(u.e)(s, O.b.Error)))
					}
					return y.ok
				}, C = Object(i.a)(a.f), D = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const i = r(),
						o = Object(g.K)(i, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const d = e.type === l.a.SUBREDDIT ? o.name : `u_${o.name}`,
						c = i.subscriptions.favoriteSubredditOrder || [],
						a = i.subscriptions.favoriteProfileOrder || [],
						b = c.indexOf(e.id),
						p = a.indexOf(e.id),
						f = -1 === b && -1 === p,
						_ = i.subreddits.models,
						j = i.profiles.models;
					t(C({
						makeFavorite: f,
						identifier: e,
						subredditModels: _,
						profileModels: j
					}));
					const I = {
							type: e.type,
							name: o.name
						},
						h = () => Object(g.eb)(r(), {
							identifier: I
						});
					(h() || (await t(k([I], !0)), h())) && ((await Object(m.b)(s(), d, f)).ok || (t(C({
						makeFavorite: !f,
						identifier: e,
						subredditModels: _,
						profileModels: j
					})), t(Object(u.f)({
						text: y(),
						kind: O.b.Error
					}))))
				}, N = Object(i.a)(a.d), R = e => async (t, r, n) => {
					let {
						apiContext: i
					} = n;
					const o = r().multireddits.models,
						d = () => {
							t(Object(u.f)({
								text: y(),
								kind: O.b.Error
							}))
						},
						c = o[e];
					if (!c) return void d();
					const a = !c.isFavorited;
					t(N({
						makeFavorite: a,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(i(), e, a)).ok || (t(N({
						makeFavorite: !a,
						multiredditPath: e,
						multiredditsModelsState: o
					})), d())
				}, A = Object(i.a)(a.e), L = e => async (t, r, i) => {
					let {
						apiContext: o
					} = i;
					const d = r(),
						c = d.multireddits.models;
					if (!Object(h.Q)(d)) return;
					const a = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(u.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "2I4uia"
								}) : n.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: O.b.Error
							}))
						},
						l = c[e];
					if (!l) return void a();
					const m = !l.isFollowed;
					t(A({
						follow: m,
						multiredditPath: e,
						multiredditsModelsState: c
					})), (await ((e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: r ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, m)).ok || (t(A({
						follow: !m,
						multiredditPath: e,
						multiredditsModelsState: c
					})), a(m))
				}
		},
		"./src/reddit/actions/tags/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "t", (function() {
				return n
			})), r.d(t, "j", (function() {
				return s
			})), r.d(t, "r", (function() {
				return i
			})), r.d(t, "q", (function() {
				return o
			})), r.d(t, "s", (function() {
				return d
			})), r.d(t, "l", (function() {
				return c
			})), r.d(t, "m", (function() {
				return a
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "o", (function() {
				return l
			})), r.d(t, "p", (function() {
				return b
			})), r.d(t, "n", (function() {
				return p
			})), r.d(t, "v", (function() {
				return f
			})), r.d(t, "w", (function() {
				return m
			})), r.d(t, "u", (function() {
				return _
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "A", (function() {
				return I
			})), r.d(t, "z", (function() {
				return h
			})), r.d(t, "D", (function() {
				return y
			})), r.d(t, "y", (function() {
				return S
			})), r.d(t, "C", (function() {
				return E
			})), r.d(t, "x", (function() {
				return T
			})), r.d(t, "B", (function() {
				return v
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "i", (function() {
				return N
			}));
			const n = "TAGS__REQUESTED",
				s = "TAGS__AVAILABLE_LOADED",
				i = "TAGS__LOADED",
				o = "TAGS__FAILURE",
				d = "TAGS__RELEVANCE_LOADED",
				c = "TAGS__CREATE_REQUESTED",
				a = "TAGS__CREATE_SUCCESS",
				u = "TAGS__CREATE_FAILURE",
				l = "TAGS__DELETE_REQUESTED",
				b = "TAGS__DELETE_SUCCESS",
				p = "TAGS__DELETE_FAILURE",
				f = "TAGS__UPDATE_STATE_REQUESTED",
				m = "TAGS__UPDATE_STATE_SUCCESS",
				_ = "TAGS__UPDATE_STATE_FAILURE",
				O = "PRIMARY_TAG__UPDATE_STATE_REQUESTED",
				j = "PRIMARY_TAG__UPDATE_STATE_SUCCESS",
				g = "PRIMARY_TAG__UPDATE_STATE_FAILURE",
				I = "TAGS__OPTIONS_CANCELLED",
				h = "TAGS__OPTION_SELECTED",
				y = "TAGS__SUGGESTED_OPTION_SELECTED",
				S = "TAGS__OPTION_DESELECTED",
				E = "TAGS__SUGGESTED_OPTION_DESELECTED",
				T = "TAGS__INPUT_CHANGED",
				v = "TAGS__SUGGESTED_INPUT_CHANGED",
				x = "GLOBAL__TAGS__LOADED",
				w = "CREATION__TAGS_INPUT_CHANGED",
				k = "CREATION__TAGS_OPTION_SELECTED",
				C = "CREATION__TAGS_OPTION_DESELECTED",
				D = "CREATION__PRIMARY_TAG_SELECTED",
				N = "SETTINGS_PAGE_PRIMARY_TAG_UPDATE"
		},
		"./src/reddit/actions/tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return P
			})), r.d(t, "m", (function() {
				return U
			})), r.d(t, "i", (function() {
				return G
			})), r.d(t, "l", (function() {
				return F
			})), r.d(t, "h", (function() {
				return M
			})), r.d(t, "k", (function() {
				return B
			})), r.d(t, "a", (function() {
				return z
			})), r.d(t, "f", (function() {
				return W
			})), r.d(t, "g", (function() {
				return $
			})), r.d(t, "e", (function() {
				return X
			})), r.d(t, "d", (function() {
				return Z
			})), r.d(t, "b", (function() {
				return ee
			})), r.d(t, "n", (function() {
				return te
			})), r.d(t, "c", (function() {
				return re
			})), r.d(t, "o", (function() {
				return ne
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/tags/constants.ts"),
				o = r("./src/reddit/actions/toaster.ts");
			const d = e => {
				const {
					subredditInfoById: t
				} = e, r = {
					global: {},
					[t.id]: {}
				};
				t.availableTags && t.availableTags.edges.reduce((e, t) => {
					let {
						node: r
					} = t;
					return e[r.subreddit && r.subreddit.id || "global"][r.id] = r, e
				}, r);
				const n = {
					[t.id]: {}
				};
				t.secondaryTags && t.secondaryTags.edges.reduce((e, r) => {
					let {
						node: n
					} = r;
					return e[t.id][n.tag.id] = n, e
				}, n);
				const s = {
					[t.id]: {}
				};
				return t.suggestedTags && t.suggestedTags.edges.reduce((e, r) => {
					let {
						node: n
					} = r;
					return e[t.id][n.tag.id] = n, e
				}, s), {
					primaryTag: t.primaryTag,
					globalSubredditTags: r.global,
					subredditScopedTags: {
						[t.id]: r[t.id]
					},
					subredditId: t.id,
					itemTags: n,
					suggestedItemTags: s,
					geoPlace: t.geoPlace
				}
			};
			var c = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/CreateSubredditTags.json");
			const u = 1050;
			r("./src/redditGQL/operations/FetchGlobalTags.json");
			var l = r("./src/redditGQL/operations/FetchSubredditTags.json");
			const b = (e, t) => {
				let {
					subredditId: r,
					pageSize: n = u,
					after: s,
					includeAvailableTags: i
				} = t;
				return Object(c.a)(e, {
					...l,
					variables: {
						subredditId: r,
						pageSize: n,
						after: s,
						includeAvailableTags: i
					}
				})
			};
			var p = r("./src/redditGQL/operations/MaybeDeleteTagsAndUpdateItemTags.json");
			const f = (e, t) => Object(c.a)(e, {
				...p,
				variables: {
					...t,
					deleteTags: 0 !== t.deleteTagsInput.length,
					pageSize: u
				}
			});
			var m = r("./src/redditGQL/operations/UpdateSubredditTagStatesRelevance.json");
			const _ = (e, t) => Object(c.a)(e, {
				...m,
				variables: t
			});
			var O = r("./src/redditGQL/operations/UpdateSubredditPrimaryTag.json");
			const j = e => {
					const {
						secondaryTags: t,
						id: r,
						primaryTag: n
					} = e.updateSubredditTagStates.subreddit, s = t && t.edges || [];
					return {
						subredditId: r,
						primaryTagId: n && n.tag.id || null,
						secondaryTags: s.reduce((e, t) => {
							let {
								node: r
							} = t;
							return e[r.tag.id] = r, e
						}, {})
					}
				},
				g = (e, t) => Object(c.a)(e, {
					...O,
					variables: t
				});
			var I = r("./src/reddit/helpers/tags/index.ts"),
				h = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				y = r("./src/reddit/models/Tags/index.ts"),
				S = r("./src/reddit/models/Toast/index.ts"),
				E = r("./src/reddit/reducers/tags/selected/index.ts"),
				T = r("./src/reddit/selectors/tags.ts");
			Object(s.a)(i.e);
			const v = Object(s.a)(i.t),
				x = Object(s.a)(i.r),
				w = Object(s.a)(i.s),
				k = Object(s.a)(i.q),
				C = Object(s.a)(i.l),
				D = Object(s.a)(i.m),
				N = Object(s.a)(i.k),
				R = Object(s.a)(i.v),
				A = Object(s.a)(i.w),
				L = Object(s.a)(i.u),
				P = Object(s.a)(i.z),
				U = Object(s.a)(i.D),
				G = Object(s.a)(i.y),
				F = Object(s.a)(i.C),
				M = Object(s.a)(i.x),
				B = Object(s.a)(i.B),
				q = (Object(s.a)(i.d), Object(s.a)(i.c), Object(s.a)(i.b), Object(s.a)(i.g)),
				Q = Object(s.a)(i.h),
				K = Object(s.a)(i.f),
				z = Object(s.a)(i.a),
				W = Object(s.a)(i.i),
				H = Object(s.a)(i.A),
				$ = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, i, c) => {
						let {
							gqlContext: a
						} = c;
						const u = i();
						s(v());
						const l = await b(a(), {
								subredditId: e
							}),
							p = l.body;
						if (l.ok && p.data.subredditInfoById.secondaryTags && p.data.subredditInfoById.availableTags && p.data.subredditInfoById.suggestedTags) s(x(d(p.data))), r && h.h(i(), e, {
							context: t
						});
						else {
							s(k());
							const i = r ? "topics_save" : "topics_load";
							h.g(u, e, i, {
								context: t
							}), s(Object(o.f)(Object(o.e)(n.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
								hk: "2DUkWX"
							}), S.b.Error, n.fbt._("Retry", null, {
								hk: "1c2xrJ"
							}), $(e, t, r))))
						}
					}
				},
				J = e => async (t, r, s) => {
					let {
						gqlContext: i
					} = s;
					t(v());
					const c = await b(i(), {
						subredditId: e
					});
					if (c.ok) {
						const e = c.body;
						t(w(d(e.data)))
					} else t(k()), t(Object(o.f)(Object(o.e)(n.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
						hk: "2DUkWX"
					}), S.b.Error, n.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), w(e))))
				}, V = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					if (!t.length) return null;
					r(C());
					const o = t.map(t => ({
							subredditId: e,
							...t
						})),
						d = await ((e, t) => Object(c.a)(e, {
							...a,
							variables: t
						}))(i(), {
							input: o
						}),
						u = d.body && d.body.data || null;
					return d.ok && u && u.createSubredditTags && u.createSubredditTags.ok ? (r(D()), u.createSubredditTags.createdTags || []) : (r(N()), null)
				}, Y = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					return async (n, s, i) => {
						let {
							gqlContext: o
						} = i;
						if (!t.length && !r.length) return;
						n(R());
						const c = s(),
							a = Object(T.d)(c, {
								subredditId: e
							}),
							u = Object(T.o)(c, {
								itemId: e
							}),
							l = Object(T.z)(c, {
								itemId: e
							}),
							b = new Set;
						for (const e of t)
							if (e.state === y.d.NONE && a[e.tagId] && !l[e.tagId]) {
								!!r.find(t => t.state === y.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
							} for (const e of r)
							if (e.state === y.d.NONE && a[e.tagId] && !u[e.tagId]) {
								!!t.find(t => t.state === y.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
							} const p = await f(o(), {
								deleteTagsInput: [...b].map(t => ({
									tagId: t,
									subredditId: e
								})),
								updateTagStatesInput: {
									subredditId: e,
									suggestedTagStates: r,
									tagStates: t
								}
							}),
							m = p.body && p.body.data || null;
						p.ok && m && m.updateSubredditTagStates && m.updateSubredditTagStates.ok && m.updateSubredditTagStates.subreddit ? n(A(d({
							subredditInfoById: m.updateSubredditTagStates.subreddit
						}))) : n(L())
					}
				}, X = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, i, d) => {
						const c = i(),
							a = Object(T.q)(c, {
								subredditId: e
							}),
							u = Object(T.C)(c, {
								subredditId: e
							});
						let l = a.filter(e => !!e.id && !!e.action).map(e => ({
							tagId: e.id,
							state: e.action === E.a.ADD ? y.d.TAGGED : y.d.NONE
						}));
						if (u.length > 0) {
							const t = await V(e, u)(s, i, d);
							l = l.concat((t || []).map(e => ({
								tagId: e.id,
								state: y.d.TAGGED
							})))
						}
						await Y(e, l)(s, i, d), Object(T.A)(i()) ? s(Object(o.f)(Object(o.e)(n.fbt._("Yikes! It looks like we didn't save all of your topics. Please try again", null, {
							hk: "2Jbh5V"
						}), S.b.Error, n.fbt._("Retry", null, {
							hk: "1c2xrJ"
						}), X(e, t, r)))) : r && s(Object(o.f)(Object(o.e)(n.fbt._("Community topics saved!", null, {
							hk: "3wtajT"
						}), S.b.SuccessCommunity)))
					}
				}, Z = (e, t, r) => async (r, s, i) => {
					const d = {
						state: y.d.TAGGED
					};
					if (Object(I.b)(t)) {
						const n = await V(e, [{
							text: t.displayText,
							type: y.c.CLASSIFICATION
						}])(r, s, i);
						n && 1 === n.length && (d.tagId = n[0].id)
					} else {
						if (!t.id) return void r(Object(o.f)(Object(o.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
							hk: "CxjiK"
						}), S.b.Error)));
						d.tagId = t.id
					}(e => !!e.tagId && !!e.state)(d) ? await Y(e, [], [d])(r, s, i): r(Object(o.f)(Object(o.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
						hk: "CxjiK"
					}), S.b.Error)))
				}, ee = (e, t, r) => async (n, s, i) => {
					t.id ? await Y(e, [], [{
						state: y.d.NONE,
						tagId: t.id
					}])(n, s, i) : n($(e, r, !1))
				}, te = function(e, t, r, s) {
					let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
					return async (d, c, a) => {
						let {
							gqlContext: u
						} = a;
						if (!(await _(u(), {
								input: {
									tagStatesRelevance: t,
									suggestedTagStatesRelevance: r
								}
							})).ok) return d(Object(o.f)(Object(o.e)(n.fbt._("Whoops! Unable to update topics relevance status", null, {
							hk: "17akdT"
						}), S.b.Error, n.fbt._("Retry", null, {
							hk: "1wqK2v"
						}), te(e, t, r, s, i)))), void d(J(e));
						if (i)
							for (const e of r) h.f(c(), e, {
								context: s
							});
						d(Object(o.f)(Object(o.e)(n.fbt._("Successfully updated topics relevance!", null, {
							hk: "3KIYlz"
						}), S.b.SuccessCommunity, n.fbt._("Undo", null, {
							hk: "34apPL"
						}), te(e, t.map(e => ({
							...e,
							isRelevant: !e.isRelevant
						})), r.map(e => ({
							...e,
							isRelevant: !e.isRelevant
						})), s, i)))), d(J(e))
					}
				}, re = e => async (t, r) => {
					t(H({
						itemTagsState: {
							[e]: Object(T.o)(r(), {
								itemId: e
							})
						}
					}))
				}, ne = function(e, t) {
					let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (s, i, d) => {
						let {
							gqlContext: c
						} = d;
						const a = Object(T.x)(i(), {
							subredditId: e
						});
						if ((null == a ? void 0 : a.id) === t.tagId && t.state === y.d.TAGGED) return;
						s(q());
						const u = await g(c(), {
								input: {
									subredditId: e,
									primaryTagState: t
								}
							}),
							l = u.body && u.body.data || null;
						u.ok && l && l.updateSubredditTagStates && l.updateSubredditTagStates.ok ? (s(Q(j(l))), r && s(Object(o.f)(Object(o.e)(n.fbt._("Successfully updated primary topic!", null, {
							hk: "1NL90v"
						}), S.b.SuccessCommunity)))) : (s(K()), s(Object(o.f)(Object(o.e)(n.fbt._("Whoops! Unable to update primary topic", null, {
							hk: "3ilZqp"
						}), S.b.Error, n.fbt._("Retry", null, {
							hk: "1dRYXW"
						}), ne(e, t)))))
					}
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "j", (function() {
				return o
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "p", (function() {
				return l
			})), r.d(t, "q", (function() {
				return b
			})), r.d(t, "o", (function() {
				return p
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "e", (function() {
				return _
			})), r.d(t, "m", (function() {
				return O
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "k", (function() {
				return I
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				d = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				_ = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				j = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				I = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/actions/userFlair/userFlair.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "userFlairEnabledSettingPending", (function() {
				return g
			})), r.d(t, "userFlairEnabledSettingSuccess", (function() {
				return I
			})), r.d(t, "userFlairEnabledSettingFailed", (function() {
				return h
			})), r.d(t, "userFlairAllowAssingOwnSettingPending", (function() {
				return y
			})), r.d(t, "userFlairAllowAssignOwnSettingSuccess", (function() {
				return S
			})), r.d(t, "userFlairAllowAssingOwnSettingFailed", (function() {
				return E
			})), r.d(t, "userFlairSaveTemplatePending", (function() {
				return T
			})), r.d(t, "userFlairSaveTemplateSuccess", (function() {
				return v
			})), r.d(t, "userFlairSaveTemplateFailed", (function() {
				return x
			})), r.d(t, "userFlairDeleteTemplatePending", (function() {
				return w
			})), r.d(t, "userFlairDeleteTemplateSuccess", (function() {
				return k
			})), r.d(t, "userFlairDeleteTemplateFailed", (function() {
				return C
			})), r.d(t, "userFlairReorderTemplatesPending", (function() {
				return D
			})), r.d(t, "userFlairReorderTemplatesSuccess", (function() {
				return N
			})), r.d(t, "userFlairReorderTemplatesFailed", (function() {
				return R
			})), r.d(t, "userFlairFetchSuccess", (function() {
				return A
			})), r.d(t, "userFlairMutated", (function() {
				return L
			})), r.d(t, "authorFlairMutated", (function() {
				return P
			})), r.d(t, "userFlairChanged", (function() {
				return U
			})), r.d(t, "toggleUserFlairInSubreddit", (function() {
				return G
			})), r.d(t, "toggleAssignOwnFlairPermission", (function() {
				return F
			})), r.d(t, "saveUserFlairTemplate", (function() {
				return M
			})), r.d(t, "deleteUserFlairTemplate", (function() {
				return B
			})), r.d(t, "reorderUserFlairTemplates", (function() {
				return q
			})), r.d(t, "userFlairLoadedAndModalOpened", (function() {
				return Q
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./node_modules/lodash/isEmpty.js"),
				o = r.n(i),
				d = r("./src/reddit/actions/authorFlair.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/endpoints/flair/index.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				l = r("./src/reddit/models/Flair/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/models/User/index.ts"),
				f = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/selectors/userFlair.ts"),
				_ = r("./src/lib/initializeClient/installReducer.ts"),
				O = r("./src/reddit/reducers/features/userFlair/index.ts"),
				j = r("./src/reddit/actions/userFlair/constants.ts");
			Object(_.a)({
				features: {
					userFlair: O.a
				}
			});
			const g = Object(s.a)(j.i),
				I = Object(s.a)(j.j),
				h = Object(s.a)(j.h),
				y = Object(s.a)(j.c),
				S = Object(s.a)(j.d),
				E = Object(s.a)(j.b),
				T = Object(s.a)(j.p),
				v = Object(s.a)(j.q),
				x = Object(s.a)(j.o),
				w = Object(s.a)(j.f),
				k = Object(s.a)(j.g),
				C = Object(s.a)(j.e),
				D = Object(s.a)(j.m),
				N = Object(s.a)(j.n),
				R = Object(s.a)(j.l),
				A = Object(s.a)(j.k),
				L = Object(s.a)(j.r),
				P = Object(s.a)(j.a),
				U = (e, t, r, n, s) => async (i, o, d) => {
					let {
						apiContext: c
					} = d;
					const l = o(),
						b = l.user.account,
						_ = b ? Object(p.e)(b) : void 0,
						O = {
							...Object(m.d)(l, {
								subredditId: s
							}).displaySettings,
							isUserEnabled: r
						},
						j = {
							userName: n,
							subredditId: s,
							applied: e,
							displaySettings: O
						};
					i(n === _ ? L(j) : P(j));
					const g = Object(f.S)(l, {
							subredditId: s
						}),
						I = t && e ? Object(u.g)(e) : void 0;
					Object(a.g)(c(), n, g.name, t, I), n === _ && Object(a.i)(c(), r, g.name)
				}, G = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const o = n(),
						d = Object(f.S)(o, {
							subredditId: e
						}).name;
					r(g());
					const c = await Object(a.l)(i(), d, t);
					if (c.ok) {
						r(I({
							subredditId: e,
							isEnabled: t
						}))
					} else r(h());
					return c.ok
				}, F = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const o = n(),
						d = Object(f.S)(o, {
							subredditId: e
						}).name;
					r(y());
					const c = await Object(a.j)(i(), t, l.d.UserFlair, d);
					if (c.ok) {
						r(S({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(E());
					return c.ok
				}, M = (e, t) => async (r, s, i) => {
					let {
						apiContext: o
					} = i;
					const d = s(),
						u = Object(f.S)(d, {
							subredditId: t
						}).name;
					r(T());
					const p = await Object(a.f)(o(), e, u, l.d.UserFlair),
						m = p.ok && !(p.body && !1 === p.body.success);
					if (m) {
						const e = {
							subredditId: t,
							template: p.body
						};
						r(v(e));
						const s = Object(c.e)(n.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), b.b.SuccessMod);
						r(Object(c.f)(s))
					} else {
						r(x());
						const s = Object(c.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), M(e, t));
						r(Object(c.f)(s))
					}
					return m
				}, B = (e, t) => async (r, s, i) => {
					let {
						apiContext: o
					} = i;
					const d = s(),
						u = Object(f.S)(d, {
							subredditId: t
						}).name;
					if (r(w()), (await Object(a.b)(o(), e, u)).ok) {
						r(k({
							subredditId: t,
							templateId: e
						}));
						const s = Object(c.e)(n.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), b.b.SuccessMod);
						r(Object(c.f)(s))
					} else {
						r(C());
						const s = Object(c.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), B(e, t));
						r(Object(c.f)(s))
					}
				}, q = (e, t) => async (r, s, i) => {
					let {
						apiContext: o
					} = i;
					const d = s(),
						u = Object(f.S)(d, {
							subredditId: t
						}).name,
						p = Object(m.d)(d, {
							subredditId: t
						}).templateIds;
					if (r(D({
							subredditId: t,
							templateIds: e
						})), (await Object(a.e)(o(), u, l.d.UserFlair, e)).ok) {
						r(N());
						const e = Object(c.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), b.b.SuccessMod);
						r(Object(c.f)(e))
					} else {
						r(R({
							subredditId: t,
							templateIds: p
						}));
						const s = Object(c.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), q(e, t));
						r(Object(c.f)(s))
					}
				}, Q = (e, t) => async (r, s, i) => {
					let {
						apiContext: u
					} = i;
					var l;
					const p = s(),
						m = null === (l = p.features) || void 0 === l ? void 0 : l.userFlair;
					if (m && m[e] && m[e].displaySettings.isEnabled && o()(m[e].templateIds)) {
						const s = Object(f.S)(p, {
								subredditId: e
							}).name,
							i = await Object(a.d)(u(), s);
						if (i.ok) r(A(i.body)), r(Object(d.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(c.e)(n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), b.b.Error);
							r(Object(c.f)(e))
						}
					} else r(Object(d.b)({
						username: t,
						subredditId: e
					}))
				}
		},
		"./src/reddit/actions/widgets/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return n
			})), r.d(t, "i", (function() {
				return s
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			}));
			const n = "WIDGETS__WIDGET_CREATED",
				s = "WIDGETS__WIDGET_UPDATED",
				i = "WIDGET_DELETED",
				o = "WIDGETS_SORTED",
				d = "WIDGETS__STARTED_EDITING_WIDGET",
				c = "WIDGETS__LOADED",
				a = "SUBREDDIT__WIDGETS_PENDING",
				u = "SUBREDDIT__WIDGETS_LOADED",
				l = "SUBREDDIT__WIDGETS_FAILED"
		},
		"./src/reddit/actions/widgets/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return v
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "h", (function() {
				return N
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "f", (function() {
				return P
			})), r.d(t, "g", (function() {
				return M
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/apiRequestState.ts"),
				o = r("./src/reddit/actions/imageUploads.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts");
			const b = async (e, t, r) => Object(a.a)(Object(u.a)(e, [l.a]), {
				endpoint: `${e.apiUrl}/r/${t}/api/widgets`,
				method: c.jb.GET,
				type: "json",
				data: {
					progressive_images: r
				}
			});
			var p = r("./src/reddit/helpers/getGenericUploadError.ts"),
				f = r("./src/reddit/helpers/media/index.ts"),
				m = r("./src/lib/assertNever.ts"),
				_ = r("./src/reddit/models/Widgets/index.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/helpers/widgets/index.tsx"),
				g = r("./src/reddit/models/Image/index.tsx"),
				I = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/constants/experiments.ts"),
				y = r("./src/reddit/helpers/chooseVariant/index.ts");
			const S = e => {
				const t = Object(y.c)(e, {
					experimentEligibilitySelector: y.a,
					experimentName: h.Rd
				});
				return !(!t || Object(h.Bf)(t))
			};
			var E = r("./src/reddit/actions/widgets/constants.ts");
			const T = Object(s.a)(E.g),
				v = (e, t, r) => async (s, b, f) => {
					const {
						apiContext: m
					} = f;
					s(Object(i.h)(r));
					const _ = b(),
						h = Object(O.S)(_, {
							subredditId: e
						}).name,
						y = S(_),
						E = Object(j.e)(t);
					let v = null,
						x = null;
					try {
						(v = await Object(o.f)(_, g.a.Widgets)) && (x = Object(o.m)(v)(s, b, f))
					} catch (k) {
						const e = Object(p.a)("webSocket");
						return void s(Object(i.f)(r, e))
					}
					if (y && x) try {
						await x
					} catch (k) {}
					const w = await (async (e, t, r) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget`,
						method: c.jb.POST,
						type: "json",
						data: r
					}))(m(), h, E);
					if (w.ok) {
						let o = w.body;
						const c = o.id;
						if ("calendar" === t.kind && s(Object(d.f)({
								kind: I.b.SuccessMod,
								text: n.fbt._("New calendar added! It may take a few minutes to see your events appear", null, {
									hk: "4iETrT"
								})
							})), v) {
							if (!y) try {
								await x
							} catch (k) {}
							o = await s(B(e, c)) || o
						}
						s(T({
							subredditId: e,
							widget: o,
							widgetId: c
						})), s(Object(i.e)(r))
					} else v && v.websocket.close(), s(Object(i.f)(r, w.error))
				}, x = Object(s.a)(E.i), w = (e, t, r) => async (s, b, f) => {
					const {
						apiContext: h
					} = f;
					s(Object(i.h)(r));
					const y = t.id,
						E = b(),
						T = Object(O.S)(E, {
							subredditId: e
						}).name,
						v = S(E),
						w = Object(j.e)(t);
					let k = null,
						C = null;
					try {
						(k = await Object(o.f)(E, g.a.Widgets)) && (C = Object(o.m)(k)(s, b, f))
					} catch (N) {
						const e = Object(p.a)("webSocket");
						return void s(Object(i.f)(r, e))
					}
					if (v && C) try {
						await C
					} catch (N) {}
					const D = await (async (e, t, r) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget/${r.id}`,
						method: c.jb.PUT,
						type: "json",
						data: r
					}))(h(), T, w);
					if (D.ok) {
						let o = function(e, t, r) {
							switch (e.kind) {
								case _.i.Calendar:
								case _.i.IdCard:
								case _.i.SubredditRules:
									return {
										...e, ...t
									};
								case _.i.CommunityList: {
									const n = {};
									for (const t of e.data) n[t.name] = t;
									return {
										...t,
										data: t.data.map(e => {
											if (!("subscribers" in n[e])) {
												const t = {
														subredditName: e
													},
													n = Object(O.x)(r, t),
													s = Object(O.u)(r, t);
												return {
													name: n.name,
													subscribers: n ? n.subscribers : void 0,
													iconUrl: n ? n.communityIcon : void 0,
													isNSFW: n ? n.isNSFW : void 0,
													isSubscribed: s ? s.userIsSubscriber : void 0
												}
											}
											return n[e]
										})
									}
								}
								case _.i.Button:
								case _.i.Custom:
								case _.i.Image:
								case _.j.Menu:
								case _.i.Moderators:
								case _.i.Textarea:
								case _.i.PostFlair:
									return t;
								default:
									return Object(m.a)(e)
							}
						}(t, D.body, E);
						if (C) {
							if (!v) try {
								await C
							} catch (N) {}
							o = await s(B(e, y)) || o
						}
						s(x({
							subredditId: e,
							widgetId: y,
							widget: o
						})), "calendar" === t.kind && s(Object(d.f)({
							kind: I.b.SuccessMod,
							text: n.fbt._("Calendar is updated! It may take a few minutes to see your events change", null, {
								hk: "10XWV"
							})
						})), s(Object(i.e)(r))
					} else k && k.websocket.close(), s(Object(i.f)(r, D.error))
				}, k = Object(s.a)(E.h), C = (e, t, r) => async (n, s, o) => {
					let {
						apiContext: d
					} = o;
					n(Object(i.h)(r));
					const b = t.id,
						p = Object(O.S)(s(), {
							subredditId: e
						}).name,
						f = await (async (e, t, r) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}/r/${t}/api/widget/${r.id}`,
							method: c.jb.DELETE,
							type: "json"
						}))(d(), p, t);
					f.ok ? (n(Object(i.e)(r)), n(k({
						subredditId: e,
						widgetId: b
					}))) : n(Object(i.f)(r, f.error))
				}, D = Object(s.a)(E.f), N = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const o = Object(O.S)(n(), {
						subredditId: e
					}).name;
					(await (async (e, t, r) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/widget_order/sidebar`,
						method: c.jb.PATCH,
						type: "json",
						data: r
					}))(i(), o, t)).ok && r(D({
						subredditId: e,
						widgetIds: t
					}))
				}, R = e => {
					let {
						imageData: t
					} = e;
					return async (e, r, n) => {
						const s = r(),
							i = s.structuredStyles.isEditing,
							d = Object(O.S)(s, {
								subredditId: i
							}).name;
						e(Object(o.k)(t));
						const b = await (async (e, t, r, n) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: `${e.apiUrl}/r/${t}/api/widget_image_upload_s3`,
							method: c.jb.POST,
							data: {
								filepath: r,
								mimetype: n
							}
						}))(n.apiContext(), d, t.file.name, await Object(f.h)(t.file));
						let p = !1;
						try {
							const n = await Object(o.g)(r(), b, t, g.a.Widgets);
							n && (e(Object(o.j)(n)), p = !0)
						} catch (m) {
							if (m instanceof Error) throw m;
							e(Object(o.i)(m))
						}
						return p
					}
				}, A = Object(s.a)(E.d), L = Object(s.a)(E.e), P = (e, t) => async (r, n, s) => {
					let {
						apiContext: o
					} = s;
					r(Object(i.h)(t));
					const d = Object(O.S)(n(), {
							subredditId: e
						}).name,
						c = await b(o(), d);
					if (c.ok) {
						const n = c.body;
						r(L({
							subredditId: e,
							widgets: n
						})), r(Object(i.e)(t))
					} else r(Object(i.f)(t, c.error))
				}, U = Object(s.a)(E.c), G = Object(s.a)(E.b), F = Object(s.a)(E.a), M = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					r(U({
						subredditId: e
					}));
					const o = Object(O.S)(n(), {
							subredditId: e
						}).name,
						d = await b(i(), o, t);
					if (d.ok) {
						const t = d.body;
						r(G({
							subredditId: e,
							widgets: t
						}))
					} else r(F({
						subredditId: e,
						error: d.error
					}))
				}, B = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const o = Object(O.S)(n(), {
							subredditId: e
						}).name,
						d = await b(i(), o, !0);
					if (d.ok) return d.body.items[t]
				}
		},
		"./src/reddit/components/CrosspostRecommendationsModal/constants.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			}));
			const n = "crosspost_recommendations_modal_id",
				s = 3e3
		},
		"./src/reddit/components/TextWithLinks/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lodash/flatMap.js"),
				s = r.n(n),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				d = r("./src/lib/linkMatchers/index.ts"),
				c = r("./src/lib/linkMatchers/customLinks.ts"),
				a = r("./src/reddit/controls/OutboundLink/index.tsx");
			const u = /\[(.+?)\]\((.+?)\)/g,
				l = e => {
					const t = e.split(u);
					if (1 === t.length) return [e];
					const r = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, s, i] = t.slice(n, n + 3);
						r.push(e), r.push([i, s])
					}
					return r
				},
				b = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = s()(t, l)), e.parseRegularLinks && (t = s()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = d.f.add(c.g.subreddit.prefix, c.g.subreddit.config).match(e);
						if (!t) return [e];
						const r = [];
						let n = null;
						for (const s of t) r.push(e.slice(n ? n.lastIndex : 0, s.index)), n = s, r.push([s.url, s.text]);
						return n && r.push(e.slice(n.lastIndex)), r
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, r) => {
						if (Array.isArray(t)) {
							const [n, s] = t;
							return o.a.createElement(a.b, {
								className: e.linkClassName,
								href: n,
								key: r
							}, s)
						}
						return o.a.createElement("span", {
							key: r
						}, t)
					}), " ")
				});
			t.a = b
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const a = s.a.createContext(() => {});

			function u(e) {
				let {
					children: t
				} = e;
				const r = Object(i.f)(),
					c = Object(n.useCallback)(e => {
						{
							const t = r.getState(),
								n = e(t);
							Object(d.a)({
								...o.n(t),
								...n
							})
						}
					}, [r]);
				return s.a.createElement(a.Provider, {
					value: c
				}, t ? s.a.Children.only(t) : null)
			}

			function l() {
				return Object(n.useContext)(a)
			}

			function b(e) {
				function t(t) {
					const r = l();
					return s.a.createElement(e, c({}, t, {
						sendEvent: r
					}))
				}
				const r = e.name || e.displayName;
				return t.displayName = `Tracked(${r})`, t.WrappedComponent = e, t
			}
		},
		"./src/reddit/constants/elementIds.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			const n = "bladeContainer",
				s = "header",
				i = "overlayScrollContainer",
				o = "collectionPostListScrollContainer"
		},
		"./src/reddit/constants/graphql.ts": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Card = "CARD", e.Classic = "CLASSIC", e.Compact = "COMPACT"
				}(n || (n = {}))
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, r) {
			"use strict";
			var n, s;
			r.d(t, "d", (function() {
					return n
				})), r.d(t, "c", (function() {
					return s
				})), r.d(t, "b", (function() {
					return i
				})), r.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(n || (n = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(s || (s = {}));
			const i = "SHORTCUT_FOCUSABLE_DIV",
				o = [9, 13, 32]
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			}));
			const n = 4,
				s = 60,
				i = 70,
				o = 90,
				d = 99,
				c = 100,
				a = 100
		},
		"./src/reddit/controls/Button/index.m.less": function(e, t, r) {
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
		"./src/reddit/controls/Button/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "m", (function() {
				return g
			})), r.d(t, "n", (function() {
				return I
			})), r.d(t, "l", (function() {
				return h
			})), r.d(t, "p", (function() {
				return y
			})), r.d(t, "q", (function() {
				return S
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "s", (function() {
				return T
			})), r.d(t, "r", (function() {
				return v
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "i", (function() {
				return D
			})), r.d(t, "j", (function() {
				return N
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/InternalLink/index.tsx"),
				d = r("./src/reddit/controls/Button/index.m.less"),
				c = r.n(d);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = {
				role: "button",
				tabIndex: 0
			};
			var l, b, p, f;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.XSP = "xsmallBigPaddingButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(l || (l = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain", e.PlainLink = "plainLink"
			}(b || (b = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(p || (p = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(f || (f = {}));
			const m = e => {
					const {
						"data-redditstyle": t,
						Icon: r,
						iconClassName: n,
						iconPosition: o = p.C,
						isFullWidth: d = !1,
						isSquare: m = !1,
						children: g,
						className: I,
						kind: h = f.Button,
						priority: y = b.Primary,
						redditStyle: S,
						size: E = l.S,
						text: T,
						textClassName: v,
						...x
					} = e, w = (e => {
						let {
							baseClassName: t,
							redditStyle: r,
							dataRedditStyle: n,
							Icon: s,
							isFullWidth: o,
							isSquare: d,
							priority: a,
							size: u,
							text: l
						} = e;
						return Object(i.a)(t, c.a.Button, a && c.a[a], u && c.a[u], {
							[c.a.isFullWidth]: o,
							[c.a.isIconOnly]: !!s && !l,
							[c.a.isSquare]: d,
							[c.a.redditStyle]: !(!r && !n)
						})
					})({
						baseClassName: I,
						children: g,
						dataRedditStyle: t,
						Icon: r,
						isFullWidth: d,
						isSquare: m,
						priority: y,
						redditStyle: S,
						size: E,
						text: T
					}), k = (e => {
						let {
							children: t,
							text: r,
							Icon: n,
							iconClassName: o,
							iconPosition: d,
							priority: a,
							textClassName: u
						} = e;
						return !n && r ? s.a.createElement("span", {
							className: u
						}, r) : s.a.createElement(s.a.Fragment, null, n && (d === p.C || d === p.L) && s.a.createElement(n, {
							className: Object(i.a)(c.a.Icon, o, {
								[c.a.isLeft]: d === p.L
							}),
							isFilled: a === b.Primary
						}), r && s.a.createElement("span", {
							className: Object(i.a)(c.a.Text, u)
						}, r), t && t, n && d === p.R && s.a.createElement(n, {
							className: Object(i.a)(c.a.Icon, o, c.a.isRight),
							isFilled: a === b.Primary
						}))
					})({
						children: g,
						text: T,
						Icon: r,
						iconClassName: n,
						iconPosition: o,
						priority: y,
						textClassName: v
					});
					return h === f.InternalLink && (e => "to" in e)(x) ? s.a.createElement(_, a({}, u, x, {
						className: w
					}), k) : h === f.ExternalLink && (e => "href" in e)(x) ? s.a.createElement(O, a({}, u, x, {
						className: w
					}), k) : s.a.createElement(j, a({}, u, x, {
						className: w
					}), k)
				},
				_ = e => s.a.createElement(o.a, e),
				O = e => s.a.createElement("a", e),
				j = e => s.a.createElement("button", e),
				g = e => s.a.createElement(m, a({
					kind: f.ExternalLink,
					priority: b.Primary
				}, e)),
				I = e => s.a.createElement(m, a({
					kind: f.InternalLink,
					priority: b.Primary
				}, e)),
				h = e => s.a.createElement(m, a({
					kind: f.Button,
					priority: b.Primary
				}, e)),
				y = e => s.a.createElement(m, a({
					kind: f.ExternalLink,
					priority: b.Secondary
				}, e)),
				S = e => s.a.createElement(m, a({
					kind: f.InternalLink,
					priority: b.Secondary
				}, e)),
				E = e => s.a.createElement(m, a({
					kind: f.Button,
					priority: b.Secondary
				}, e)),
				T = e => s.a.createElement(m, a({
					kind: f.InternalLink,
					priority: b.Plain
				}, e)),
				v = e => s.a.createElement(m, a({
					kind: f.Button,
					priority: b.Plain
				}, e)),
				x = e => {
					let {
						className: t,
						...r
					} = e;
					return s.a.createElement(m, a({
						kind: f.Button,
						priority: b.Primary,
						className: Object(i.a)(t, c.a.DangerButtonColors)
					}, r))
				},
				w = e => {
					let {
						className: t,
						...r
					} = e;
					return s.a.createElement(m, a({
						kind: f.Button,
						className: Object(i.a)(t, c.a.GoldButtonColors)
					}, r))
				},
				k = e => {
					let {
						className: t,
						...r
					} = e;
					return s.a.createElement(m, a({
						kind: f.Button,
						className: Object(i.a)(t, c.a.PremiumButtonColors)
					}, r))
				},
				C = e => {
					let {
						className: t,
						...r
					} = e;
					return s.a.createElement(m, a({
						kind: f.Button,
						className: Object(i.a)(t, c.a.ChatButton)
					}, r))
				},
				D = e => {
					let {
						className: t,
						...r
					} = e;
					return s.a.createElement(m, a({
						kind: f.Button,
						className: Object(i.a)(t, c.a.InlineTextButton)
					}, r))
				},
				N = e => {
					let {
						className: t,
						...r
					} = e;
					return s.a.createElement(m, a({
						kind: f.Button,
						className: Object(i.a)(t, c.a.PlainLinkButton),
						priority: b.PlainLink
					}, r))
				};
			t.t = m
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
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/domUtils/index.ts"),
				d = r("./src/reddit/constants/zIndex.ts"),
				c = r("./src/reddit/controls/Dropdown/index.m.less"),
				a = r.n(c);
			class u extends s.a.Component {
				componentDidMount() {
					this.props.onDropdownMounted && this.props.onDropdownMounted(), this.props.noFocus || this.ref && this.ref.focus({
						preventScroll: this.props.isOverlay
					})
				}
				componentWillUnmount() {
					Object(o.a)(this.props.tooltipId)
				}
				render() {
					const e = this.props,
						t = {};
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? d.d + 1 : d.c)), s.a.createElement("div", {
						className: Object(i.a)(a.a.dropdown, e.className),
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
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/helpers/path/index.ts"),
				c = r("./src/reddit/controls/InternalLink/index.m.less"),
				a = r.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e) {
				let {
					children: t,
					className: r,
					disabled: n,
					replace: c,
					to: l,
					...b
				} = e;
				return n ? s.a.createElement("span", {
					className: Object(o.a)(a.a.disabledLink, r)
				}, t) : ("string" == typeof l && (l = Object(d.b)(l)), s.a.createElement(i.a, u({
					className: r,
					to: l
				}, b), t))
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return w
			})), r.d(t, "c", (function() {
				return k
			}));
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				i = r("./node_modules/query-string/index.js"),
				o = r.n(i),
				d = r("./node_modules/react/index.js"),
				c = r.n(d),
				a = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/addQueryParams/index.ts");
			var b = (e, t) => t ? Object(l.a)(e, {
				user_id: t
			}) : e;
			var p = r("./src/lib/opener/index.ts"),
				f = r("./src/lib/redditId/index.ts"),
				m = r("./src/reddit/actions/post.ts"),
				_ = r("./src/reddit/constants/adEvents.ts"),
				O = r("./src/reddit/helpers/getVendorMetadata.ts"),
				j = r("./src/reddit/helpers/pixels.ts"),
				g = r("./src/reddit/helpers/trackers/ads.ts"),
				I = r("./src/reddit/hooks/useOutboundClickTracking.ts"),
				h = r("./src/reddit/selectors/posts.ts"),
				y = r("./src/reddit/selectors/telemetry.ts"),
				S = r("./src/reddit/selectors/user.ts");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = Object(u.a)(S.a, S.k, (e, t) => {
					let {
						isSponsored: r,
						postId: n
					} = t;
					return r && n ? Object(h.b)(e, n) : null
				}, h.G, y.d, (e, t, r, n, s) => ({
					allowClickTracking: e,
					basePixelMetadata: r,
					userId: t ? Object(f.a)(t.id) : null,
					post: n,
					pageType: s.pageType
				})),
				v = Object(a.b)(T, e => ({
					fireAdPixelsOfType: (t, r) => e(Object(m.z)(t, r)),
					recordClick: (t, r, n) => {
						const s = t.events.filter(e => {
							let {
								type: t,
								url: r
							} = e;
							return t === _.a.Click && Object(j.b)(r)
						});
						Object(j.c)(s), e(Object(m.p)(String(r), {
							postId: t.id,
							vendorMetadata: n
						}))
					}
				})),
				x = (e, t, r, n) => {
					const s = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					n && t.outboundUrl && s && (e.href = b(t.outboundUrl, r), e.href = function(e) {
						return Object(l.a)(e, {
							web_redirect: "true"
						})
					}(e.href))
				},
				w = (e, t, r) => {
					let n, s = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(r)) {
						s = Object(O.a)(e, t, _.a.Click);
						const {
							url: i,
							query: d
						} = o.a.parseUrl(r);
						n = o.a.stringifyUrl({
							url: i,
							query: {
								...d,
								...s
							}
						})
					} else n = r;
					return {
						url: n,
						metadata: s
					}
				},
				k = (e, t, r) => {
					const n = w(t, r, e.href);
					return e.href = n.url, n.metadata
				},
				C = e => {
					let {
						isSponsored: t,
						source: r
					} = e;
					return !!(t && (null == r ? void 0 : r.outboundUrl))
				},
				D = v(e => {
					const t = Object(d.useRef)(null),
						r = Object(I.a)(),
						{
							allowClickTracking: n,
							basePixelMetadata: i,
							commentId: o,
							fireAdPixelsOfType: a,
							href: u,
							isSponsored: l,
							pageType: b,
							post: f,
							postId: m,
							recordClick: O,
							source: j,
							sourceElement: h,
							userId: y
						} = e;
					let S = s()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "post", "recordClick", "commentId", "source", "sourceElement", "userId", "pageType"]);
					const T = j && j.outboundUrl && l ? j.outboundUrl : u;
					return S = {
						...S,
						href: T,
						rel: l ? p.b : p.a,
						target: p.d.BLANK
					}, !j || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: r
						} = e;
						return !(!t || !r) && (t > r + 3e5 || t < r - 36e5)
					})(j) ? c.a.createElement("a", E({}, S, {
						onClick: () => r(u, h, o, m)
					})) : c.a.createElement("a", E({}, S, {
						onMouseDown: r => {
							if (!C(e)) return !(1 !== r.button && 2 !== r.button && !r.ctrlKey) || void x(r.currentTarget, j, y, n);
							t.current = k(r.currentTarget, m, i)
						},
						onClick: () => {
							f && (C(e) && (O(f, _.a.Click, t.current), Object(g.a)(f, b)), a(f, _.a.Click), r(u, h, o, m))
						},
						onMouseLeave: e => {
							l || ((e, t) => {
								e.href = t
							})(e.currentTarget, T)
						},
						onTouchStart: e => x(e.currentTarget, j, y, n),
						"data-testid": "outbound-link"
					}))
				});
			t.b = D
		},
		"./src/reddit/customMiddleware/recentSubreddits.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/chat/customMiddleware/noop.ts"),
				s = r("./src/lib/cache/index.ts"),
				i = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/localStorageAvailable/index.ts"),
				d = r("./src/reddit/actions/recentSubreddits/constants.ts");
			const c = Object(s.c)(i.r.RECENT_SUBREDDITS, "recent_subreddits"),
				a = () => Object(o.a)() && Object(s.b)(c) || [];
			t.a = e => "undefined" == typeof window ? n.a : e => t => {
				const r = e(t);
				switch (t.type) {
					case d.e: {
						const e = a() || [],
							r = {
								...t.payload,
								lastVisited: Date.now()
							},
							{
								id: n
							} = r;
						if (n) {
							const t = e.findIndex(e => e.id === n); - 1 !== t && e.splice(t, 1), e.unshift(r), e.splice(d.c), Object(s.d)(c, e, i.pb)
						}
						break
					}
				}
				return r
			}
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return _
			})), r.d(t, "m", (function() {
				return O
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "a", (function() {
				return I
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "k", (function() {
				return S
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "c", (function() {
				return k
			}));
			var n = r("./src/config.ts"),
				s = r("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
				i = r("./src/redditGQL/operations/UpdateCommentStickyState.json"),
				o = r("./src/redditGQL/types.ts"),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				b = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = r("./src/reddit/models/Comment/addProfileImgParam.ts"),
				f = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				m = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const _ = (e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(b.a)(`${e.apiUrl}/api/save`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(b.a)(`${e.apiUrl}/api/unsave`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(b.a)(`${e.apiUrl}/api/lock`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(b.a)(`${e.apiUrl}/api/unlock`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				I = (e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(b.a)(`${e.apiUrl}/api/approve`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t, r) => Object(c.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(b.a)(`${e.apiUrl}/api/remove`),
					method: d.jb.POST,
					data: {
						id: t,
						spam: r
					}
				}),
				y = (e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				S = (e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				E = (e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				T = (e, t, r, s) => {
					let i = Object(b.a)(Object(m.a)(Object(f.a)(`${n.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return s && (i = Object(p.a)(i)), Object(c.a)(e, {
						data: r,
						endpoint: i,
						method: d.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				v = (e, t, r, n) => Object(c.a)(Object(u.a)(e, [l.a]), {
					endpoint: Object(b.a)(`${e.apiUrl}/api/distinguish/${r}`),
					method: d.jb.POST,
					data: {
						id: t,
						sticky: n
					}
				}),
				x = {
					[d.G.NONE]: o.g.None,
					[d.G.MODERATOR]: o.g.ModDistinguished,
					[d.G.ADMIN]: o.g.AdminDistinguished,
					[d.G.ALUMNI_ADMIN]: o.g.AlumniDistinguished
				};

			function w(e, t, r) {
				const n = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === d.G.NONE ? o.c.None : o.c.Distinguished,
							distinguishType: x[t]
						}
					}
				}(t, r);
				return Object(a.a)(e, {
					...s,
					variables: n
				})
			}

			function k(e, t, r) {
				return Object(a.a)(e, {
					...i,
					variables: {
						input: {
							commentId: t,
							sticky: r
						}
					}
				})
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "p", (function() {
				return h
			})), r.d(t, "n", (function() {
				return y
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "f", (function() {
				return D
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "h", (function() {
				return R
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "m", (function() {
				return U
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/lib/makeRequest/index.ts"),
				i = r("./src/redditGQL/operations/AddPredictionDrafts.json"),
				o = r("./src/redditGQL/operations/CancelPrediction.json"),
				d = r("./src/redditGQL/operations/ChangePrediction.json"),
				c = r("./src/redditGQL/operations/ChangePredictionVote.json"),
				a = r("./src/redditGQL/operations/CreatePredictionTournament.json"),
				u = r("./src/redditGQL/operations/EndPredictionTournament.json"),
				l = r("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				b = r("./src/redditGQL/operations/GetPredictionCreationAllowance.json"),
				p = r("./src/redditGQL/operations/GetPredictionToken.json"),
				f = r("./src/redditGQL/operations/GetTournaments.json"),
				m = r("./src/redditGQL/operations/GetTournamentsBaseInfo.json"),
				_ = r("./src/redditGQL/operations/ResolvePrediction.json"),
				O = r("./src/redditGQL/operations/SubredditTopPredictors.json"),
				j = r("./src/redditGQL/operations/SubredditTournamentLeaderboard.json"),
				g = r("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				I = r("./src/redditGQL/operations/VotePrediction.json");
			const h = async (e, t) => {
				let {
					postId: r,
					optionId: i,
					coinPackageId: o,
					price: d
				} = t;
				var c;
				const a = await Object(n.a)(e, {
					...I,
					variables: {
						input: {
							postId: r,
							optionId: i,
							coinPackageId: o,
							price: d
						}
					}
				});
				if (!Object(s.c)(a) || a.error || !(null === (c = a.body.data.votePrediction) || void 0 === c ? void 0 : c.ok)) throw new Error("Failed to make prediction");
				return a.body.data.votePrediction.poll
			}, y = (e, t) => {
				let {
					postId: r,
					optionId: s
				} = t;
				return Object(n.a)(e, {
					..._,
					variables: {
						input: {
							postId: r,
							optionId: s
						}
					}
				})
			};
			var S;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(S || (S = {}));
			const E = async (e, t) => {
				let {
					subredditId: r,
					period: i = S.AllTime,
					top: o = 100,
					includeCurrentRank: d
				} = t;
				const c = await Object(n.a)(e, {
					...O,
					variables: {
						subredditId: r,
						period: i,
						top: o,
						includeCurrentRank: d
					}
				});
				if (!Object(s.c)(c) || c.error) throw new Error("Failed to fetch subreddit top predictors");
				if (!c.body.data.subredditInfoById) throw new Error("Subreddit has no prediction winners");
				return c.body.data.subredditInfoById
			}, T = async (e, t) => {
				let {
					subredditId: r,
					tournamentId: i,
					includeCurrentRank: o
				} = t;
				const d = await Object(n.a)(e, {
					...j,
					variables: {
						subredditId: r,
						tournamentId: i,
						includeCurrentRank: o
					}
				});
				if (!Object(s.c)(d) || d.error) throw new Error("Failed to fetch subreddit tournament");
				if (!d.body.data.subredditInfoById) throw new Error("Subreddit has no prediction winners");
				return d.body.data.subredditInfoById
			}, v = async (e, t) => {
				const r = await Object(n.a)(e, {
					...a,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || r.error || !r.body.data.createPredictionTournament.tournament) throw new Error("Failed to create tournament");
				return r.body.data.createPredictionTournament.tournament
			}, x = async (e, t) => {
				const r = await Object(n.a)(e, {
					...f,
					variables: t
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
				return r.body.data.subredditInfoByName.predictionTournaments || []
			}, w = async (e, t) => {
				const r = await Object(n.a)(e, {
					...m,
					variables: t
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
				return r.body.data.subredditInfoByName.predictionTournaments || []
			}, k = async (e, t) => {
				const r = await Object(n.a)(e, {
					...i,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to create prediction");
				const {
					errors: o,
					tournament: d
				} = r.body.data.addPredictionDrafts;
				if (null == o ? void 0 : o.length) throw new Error(o[0].message);
				if (!d) throw new Error("Failed to create prediction");
				return d
			}, C = async (e, t) => {
				const r = await Object(n.a)(e, {
					...g,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to update prediction tournament");
				const {
					tournament: i
				} = r.body.data.updatePredictionTournament;
				if (!i) throw new Error("Failed to update prediction tournament");
				return i
			}, D = (e, t) => Object(n.a)(e, {
				...u,
				variables: {
					input: t
				}
			}), N = (e, t) => Object(n.a)(e, {
				...l,
				variables: t
			}), R = (e, t) => Object(n.a)(e, {
				...p,
				variables: t
			}), A = async (e, t) => {
				const r = await Object(n.a)(e, {
					...d,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || !r.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
				return r.body.data.changePrediction.poll
			}, L = async (e, t) => {
				let {
					postId: r
				} = t;
				var i, d;
				const c = await Object(n.a)(e, {
					...o,
					variables: {
						input: {
							postId: r
						}
					}
				});
				if (!Object(s.c)(c) || !(null === (i = c.body.data.cancelPrediction) || void 0 === i ? void 0 : i.ok) || !(null === (d = c.body.data.cancelPrediction) || void 0 === d ? void 0 : d.poll)) throw new Error("Unable to cancel prediction");
				return c.body.data.cancelPrediction.poll
			}, P = async (e, t) => {
				var r, i;
				const o = await Object(n.a)(e, {
					...c,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(o) || !(null === (r = o.body.data.changePredictionVote) || void 0 === r ? void 0 : r.ok) || !(null === (i = o.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
				return o.body.data.changePredictionVote.poll
			}, U = async (e, t) => {
				const r = await Object(n.a)(e, {
					...b,
					variables: t
				});
				return !!Object(s.c)(r) && r.body.data.identity.isPredictionCreationAllowed
			}
		},
		"./src/reddit/endpoints/gold/powerups/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return _
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "k", (function() {
				return v
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/CreateCustomEmoji.json"),
				i = r("./src/redditGQL/operations/DeleteCustomEmoji.json"),
				o = r("./src/redditGQL/operations/EnablePowerups.json"),
				d = r("./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json"),
				c = r("./src/redditGQL/operations/ReallocatePowerups.json"),
				a = r("./src/redditGQL/operations/RedditorPowerups.json"),
				u = r("./src/redditGQL/operations/SubredditPowerups.json"),
				l = r("./src/redditGQL/operations/SubredditPowerupsFull.json"),
				b = r("./src/redditGQL/operations/SubredditsPowerups.json"),
				p = r("./src/redditGQL/operations/UpdatePowerupsSettings.json"),
				f = r("./src/redditGQL/operations/UserPowerups.json"),
				m = r("./src/reddit/actions/economics/powerups/helpers.ts");
			const _ = async (e, t) => {
				const r = await Object(n.a)(e, {
					...o,
					variables: {
						subredditId: t
					}
				});
				if (!r.ok || !r.body.data.enablePowerups.ok) {
					const {
						errors: e
					} = r.body, t = Object(m.a)(e);
					throw new Error(t || "Error enabling powerups for given subreddit")
				}
			}, O = e => Object(n.a)(e, f, {
				traceRequestName: "user_powerups"
			}), j = (e, t) => Object(n.a)(e, {
				variables: {
					id: t
				},
				...a
			}, {
				traceRequestName: "redditor_powerups"
			}), g = (e, t, r) => Object(n.a)(e, {
				...u,
				variables: {
					subredditId: t,
					includeIdentity: r
				}
			}, {
				traceRequestName: "subreddit_powerups"
			}), I = (e, t, r) => Object(n.a)(e, {
				...l,
				variables: {
					subredditId: t,
					includeIdentity: r
				}
			}, {
				traceRequestName: "subreddit_powerups_full"
			}), h = async (e, t) => {
				const r = await Object(n.a)(e, {
					...b,
					variables: {
						subredditsIds: t
					}
				});
				if (!r.ok) {
					const {
						errors: e
					} = r.body, t = Object(m.a)(e);
					throw new Error(t || "Unable to fetch subreddit powerups")
				}
				return r.body.data.subredditsInfoByIds
			}, y = (e, t) => Object(n.a)(e, {
				...c,
				variables: t
			}), S = (e, t) => Object(n.a)(e, {
				...d,
				variables: t
			}), E = (e, t) => Object(n.a)(e, {
				...s,
				variables: t
			}), T = (e, t) => Object(n.a)(e, {
				...i,
				variables: t
			}), v = async (e, t, r) => {
				const s = {
					input: {
						subredditId: t,
						powerupsSettings: {
							benefitSettings: r
						}
					}
				};
				return Object(n.a)(e, {
					...p,
					variables: s
				})
			}
		},
		"./src/reddit/endpoints/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/TopAwardedPosts.json"),
				i = r("./src/redditGQL/operations/TopAwardersLeaderboard.json");
			const o = (e, t) => Object(n.a)(e, {
					...s,
					variables: {
						...t,
						includeListingMetadata: !!t.includeListingMetadata
					}
				}),
				d = (e, t) => Object(n.a)(e, {
					...i,
					variables: t
				})
		},
		"./src/reddit/endpoints/governance/posts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/config.ts"),
				s = (r("./src/reddit/models/Poll/index.ts"), r("./src/reddit/endpoints/governance/requester.ts"));

			function i(e, t, r) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/polls/${t}?postIds=${r.join(",")}`
				})
			}
		},
		"./src/reddit/endpoints/governance/requester.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/makeApiRequest/index.ts");

			function s(e, t) {
				return Object(n.a)(e, {
					type: "json",
					...t
				}).then(e => {
					if (e.ok) return {
						body: e.body,
						ok: !0,
						status: e.status
					};
					return {
						error: e.error && e.error.fields && e.error.fields[0] ? e.error.fields[0].msg : {
							...e.body,
							code: e.status
						},
						ok: !1,
						status: e.status
					}
				})
			}
		},
		"./src/reddit/endpoints/messages/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./src/redditGQL/operations/ReportMessage.json"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t) => Object(i.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/compose`),
					method: s.jb.POST,
					data: t
				}),
				l = (e, t) => Object(o.a)(e, {
					...n,
					variables: t
				})
		},
		"./src/reddit/endpoints/modQueue/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return b
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return f
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = r("./src/redditGQL/operations/ModQueueItems.json");
			const b = (e, t, r) => Object(i.a)(e, {
					endpoint: Object(u.a)(Object(a.a)(`${n.a.gatewayUrl}/desktopapi/v1/${t}`)),
					method: s.jb.GET,
					data: {
						moderated_limit: 25,
						...r
					}
				}),
				p = (e, t, r) => Object(i.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/${t}`,
					method: s.jb.POST,
					type: "json",
					data: r
				}),
				f = (e, t) => Object(o.a)(e, {
					...l,
					variables: t
				})
		},
		"./src/reddit/endpoints/page/subredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
			})), r.d(t, "b", (function() {
				return y
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/isAdHocMultireddit/index.ts"),
				o = r("./src/lib/isFakeSubreddit/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/lib/performanceTimings/index.tsx"),
				u = r("./src/reddit/constants/graphql.ts"),
				l = r("./src/reddit/constants/page.ts"),
				b = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = r("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts"),
				m = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				_ = r("./src/reddit/models/Subreddit/index.ts"),
				O = r("./src/reddit/selectors/platform.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				I = r("./src/redditGQL/operations/SubredditPage.json");
			const h = (e, t, r, n) => {
					var s, d, c, a;
					const {
						after: b,
						geo_filter: f,
						isMobile: m,
						layout: _,
						limit: I,
						recentPostIds: h,
						sort: y,
						t: S
					} = r, E = Object(g.Z)(e), T = Object(O.q)(e), v = Object(i.a)(t), x = Object(o.a)(t), w = Object(j.R)(e, {
						subredditId: Object(j.D)(e, t)
					}).length > 0, k = (null === (s = e.user.account) || void 0 === s ? void 0 : s.username) || (null === (d = e.user.account) || void 0 === d ? void 0 : d.displayText), C = Object(g.o)(e), D = Object(g.nb)(e), N = {
						name: t,
						includeIdentity: E && !e.user.account,
						adContext: {
							layout: _ ? _.toUpperCase() : u.a.Card,
							reddaid: e.user.reddaid
						},
						isFake: x,
						includeAppliedFlair: !x && E && !!k && n,
						includePowerups: n && !x,
						includeQuestions: n && E && !x,
						includeRecents: x && h && h.length > 0 || !1,
						includeRedditorKarma: n && E && !(null === (a = null === (c = e.user.account) || void 0 === c ? void 0 : c.karma) || void 0 === a ? void 0 : a.total),
						includeRules: n && !x && !w,
						includeSubredditLinks: n && !x && !E,
						includeTopicLinks: n && !x && !E,
						includeTrending: x,
						isAdHocMulti: v,
						isAll: t === l.d.All,
						isLoggedOutGatedOptedin: C,
						isLoggedOutQuarantineOptedin: D,
						isPopular: t === l.d.Popular,
						recentPostIds: h || [],
						subredditNames: v ? t.split("+") : [],
						username: E && k && n ? k : ""
					};
					return y && (N.sort = y.toUpperCase()), S && (N.range = S.toUpperCase()), m ? N.pageSize = Object(p.a)(_) : I && (N.pageSize = I), T && T.ad && (N.forceAds = {
						ad: T.ad
					}), (T && T.geo_filter || f) && (N.region = T && T.geo_filter || f), b && (N.after = btoa(b)), N
				},
				y = async (e, t, r) => {
					const n = Date.now(),
						i = await ((e, t) => Object(c.a)(e, {
							...I,
							variables: t
						}))(e, t),
						o = Date.now();
					if (!i.ok || !i.body) return i;
					const d = i.body,
						u = Date.now(),
						l = Object(f.a)(d.data),
						b = Date.now(),
						p = [{
							duration: o - n,
							logKeyType: a.a.gqlFetchTiming
						}, {
							duration: b - u,
							logKeyType: a.a.gqlNormalizationTiming
						}];
					return Object(a.h)({
						name: s.s.SUBREDDIT,
						isLoggedIn: r,
						metrics: p
					}), {
						...i,
						ok: !!d.data.subredditInfoByName && !Object(_.j)(d.data.subredditInfoByName),
						status: S(d.data),
						body: l
					}
				}, S = e => {
					if (!e.subredditInfoByName) return 404;
					if (Object(_.j)(e.subredditInfoByName)) {
						if (e.subredditInfoByName.forbiddenReason === _.c.Banned) return 404;
						if (e.subredditInfoByName.forbiddenReason === _.c.GoldOnly || e.subredditInfoByName.forbiddenReason === _.c.Private || e.subredditInfoByName.forbiddenReason === _.c.Quarantined || e.subredditInfoByName.forbiddenReason === _.c.Gated) return 403
					}
					return 200
				}, E = e => {
					let {
						recentPostIds: t,
						...r
					} = e;
					return t && t.length ? {
						...r,
						recentPostIds: t.join(",")
					} : r
				};
			t.a = (e, t, r) => Object(d.a)(e, {
				endpoint: Object(b.a)(Object(m.a)(`${n.a.gatewayUrl}/desktopapi/v1/subreddits/${t}`)),
				method: s.jb.GET,
				data: r && E(r) || {},
				traceRequestName: "get_subreddit_page"
			})
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return b
			}));
			var n = r("./src/reddit/helpers/flair.ts"),
				s = r("./src/reddit/models/PostDraft/index.ts");
			const i = e => ({
					id: e.json.data.id,
					draftsCount: e.json.data.drafts_count
				}),
				o = e => e.destSubreddit.id ? {
					subreddit: e.destSubreddit.id,
					target: e.destSubreddit.isProfile ? "profile" : "subreddit"
				} : {},
				d = e => {
					switch (e.kind) {
						case s.b.Link:
							return "link";
						case s.b.Markdown:
							return "markdown";
						case s.b.RichText:
							return "richtext";
						default:
							return "self"
					}
				},
				c = e => {
					switch (e) {
						case "link":
							return s.b.Link;
						case "markdown":
							return s.b.Markdown;
						case "richtext":
							return s.b.RichText;
						default:
							return "self"
					}
				},
				a = e => e.title.substring(0, 300),
				u = e => {
					switch (e.kind) {
						case s.b.Link:
						case s.b.Markdown:
							return e.body;
						case s.b.RichText:
							return JSON.stringify({
								document: e.body
							})
					}
				},
				l = e => e ? {
					flair_id: e.templateId || null,
					flair_text: Object(n.g)(e) || null,
					flair_text_color: e.textColor || null,
					flair_background_color: e.backgroundColor || null
				} : {
					flair_id: null,
					flair_text: null,
					flair_text_color: null,
					flair_background_color: null
				},
				b = e => ({
					id: e.draftId || void 0,
					...o(e),
					kind: d(e),
					title: a(e),
					body: u(e),
					spoiler: e.isSpoiler,
					nsfw: e.isNSFW,
					original_content: e.isOC,
					...l(e.flair),
					send_replies: e.sendReplies,
					is_public_link: e.isPublicLink
				})
		},
		"./src/reddit/endpoints/publicAccessNetwork/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return I
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "g", (function() {
				return T
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "a", (function() {
				return R
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/omit.js"),
				i = r.n(s),
				o = r("./src/config.ts"),
				d = r("./src/lib/addQueryParams/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/constants/headers.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/lib/makeRequest/index.ts"),
				b = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				p = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = r("./src/reddit/featureFlags/useProductionStreamingApi.ts"),
				m = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				_ = r("./src/reddit/models/PostCreationForm/index.ts"),
				O = r("./src/reddit/models/Vote/index.ts"),
				j = r("./src/redditGQL/operations/LiveVideoPosts.json");

			function g() {
				return Object(f.b)() ? "https://strapi.reddit.com" : o.a.streamingApiUrl
			}
			const I = async (e, t) => {
				let r;
				return r = t === b.R ? "/config" : `/${t}/config`, Object(l.b)({
					endpoint: `${g()}${r}`,
					method: c.jb.GET,
					headers: i()(e.headers(), [a.c, a.b]),
					timeoutMs: void 0
				}).then(C)
			}, h = (e, t) => {
				let {
					subredditId: r,
					options: n
				} = t;
				return Object(u.a)(e, {
					...j,
					variables: {
						feedContext: {
							subredditId: r
						},
						first: null == n ? void 0 : n.pageSize,
						after: null == n ? void 0 : n.cursor
					}
				})
			}, y = async (e, t) => Object(l.b)({
				endpoint: `${g()}/videos/${t}`,
				method: c.jb.GET,
				headers: i()(e.headers(), [a.c, a.b])
			}).then(C), S = async (e, t, r) => {
				let n;
				n = t === b.R ? "/broadcasts" : `/${t}/broadcasts`;
				const s = Object(d.a)(n, {
					cursor: null == r ? void 0 : r.cursor,
					page_size: null == r ? void 0 : r.pageSize
				});
				return Object(l.b)({
					endpoint: `${g()}${s}`,
					method: c.jb.GET,
					headers: i()(e.headers(), [a.c, a.b])
				}).then(C)
			}, E = async e => Object(l.b)({
				endpoint: `${g()}/recommended_viewer_subreddits`,
				method: c.jb.GET,
				headers: i()(e.headers(), [a.c, a.b])
			}).then(C), T = async (e, t, r) => Object(l.b)({
				endpoint: `${g()}/videos/${t}/vote/${D(r)}`,
				method: c.jb.POST,
				headers: i()(e.headers, [a.c, a.b])
			}).then(C), v = async (e, t) => Object(l.b)({
				endpoint: `${g()}/videos/${t}/heartbeat`,
				method: c.jb.POST,
				headers: i()(e.headers(), [a.c, a.b])
			}).then(C), x = async (e, t, r, n) => {
				const s = r.rteState;
				if (!s) return Promise.reject(new Error("Editor state is undefined"));
				const i = p.a.getRawText(s);
				return i ? w(e, t, i).then(e => e.ok && e.body && e.body.data ? {
					...e,
					body: {
						parentId: t,
						comment: {
							...Object(m.a)(e.body.data.r2_comment, n),
							media: k(s)
						},
						automuteLevel: e.body.data.auto_mute_status.level
					},
					error: void 0
				} : e) : Promise.reject(new Error("Cannot send empty message"))
			}, w = async (e, t, r) => Object(l.b)({
				endpoint: `${g()}/broadcasts/${t}/comment_v2`,
				method: c.jb.POST,
				headers: i()(e.headers, [a.c, a.b]),
				data: {
					text: r
				},
				type: "json"
			}).then(C), k = e => ({
				type: "rtjson",
				richtextContent: {
					document: p.a.toRichTextJSON(e).document
				},
				rteMode: _.i.RICH_TEXT
			}), C = e => {
				if (e.ok) return {
					...e,
					error: void 0
				}; {
					const t = {
						type: 404 === e.status ? c.I.NOT_FOUND_ERROR : c.I.SERVER_ERROR
					};
					return 429 === e.status && (t.fields = [{
						field: "",
						msg: n.fbt._("Try again later", null, {
							hk: "3BBLIU"
						})
					}]), {
						...e,
						error: t
					}
				}
			}, D = e => e === O.a.upvoted ? "up" : e === O.a.downvoted ? "down" : "unset", N = async (e, t, r) => Object(l.b)({
				endpoint: `${g()}/broadcasts/${t}`,
				method: c.jb.PUT,
				headers: i()(e.headers, [a.c, a.b]),
				data: {
					data: {
						chat_disabled: r
					}
				},
				type: "json"
			}).then(C), R = async (e, t) => Object(l.b)({
				endpoint: `${g()}/broadcasts/${t}/auto_mute_status`,
				method: c.jb.GET,
				headers: i()(e.headers, [a.c, a.b])
			}).then(C)
		},
		"./src/reddit/endpoints/subreddit/about.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/SubredditAbout.json");
			t.a = (e, t, r) => Object(n.a)(e, {
				...s,
				variables: {
					subredditName: t,
					includeSubreddit: r
				}
			})
		},
		"./src/reddit/endpoints/subreddit/notificationSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/redditGQL/operations/FetchSubredditsNotificationSettings.json"),
				s = r("./src/redditGQL/operations/UpdateSubredditNotificationSettings.json"),
				i = r("./src/lib/makeGqlRequest/index.ts");
			const o = (e, t) => Object(i.a)(e, {
					...n,
					variables: {
						subredditIds: [t]
					}
				}),
				d = (e, t, r) => Object(i.a)(e, {
					...s,
					variables: {
						input: {
							...r,
							subredditId: t
						}
					}
				})
		},
		"./src/reddit/endpoints/subreddit/rules.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return _
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "e", (function() {
				return S
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/camelCase.js"),
				s = r.n(n),
				i = r("./node_modules/lodash/mapKeys.js"),
				o = r.n(i),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/redditGQL/operations/SubredditRules.json"),
				b = r("./src/reddit/constants/headers.ts"),
				p = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				f = r("./src/reddit/models/Rule/index.ts");
			const m = e => {
					let {
						rules: t
					} = e;
					return {
						rules: t.map(e => ({
							...o()(e, (e, t) => s()(t)),
							kind: "link" === e.kind ? "post" : e.kind
						}))
					}
				},
				_ = (e, t) => Object(a.a)(e, {
					...l,
					variables: {
						subredditName: t
					}
				}).then(e => {
					var t, r, n;
					return e.ok && e.body && (e => Object.keys(e).length > 0)(e.body) && (null === (n = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit) || void 0 === n ? void 0 : n.rules) ? e.body = Object(p.a)(e.body.data.subreddit.rules) : e.body = {
						rules: []
					}, e
				}),
				O = (e, t) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/user/${t}/about/rules.json`,
					method: d.jb.GET
				}).then(e => (e.ok && e.body.rules && (e.body = m(e.body)), e)),
				j = e => e.ok ? (e.body = Object(f.h)(JSON.parse(e.body.json.data.rules)), e) : e.body,
				g = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/add_subreddit_rule`,
					method: d.jb.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === f.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), I = async (e, t, r, n) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/update_subreddit_rule`,
					method: d.jb.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === f.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						old_short_name: n,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), h = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/remove_subreddit_rule`,
					method: d.jb.POST,
					data: {
						r: t,
						short_name: r,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), y = e => e.map(e => encodeURIComponent(e)).join(), S = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/reorder_subreddit_rules`,
					method: d.jb.POST,
					data: {
						r: t,
						new_rule_order: y(r),
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e))
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./src/redditGQL/operations/SubscribedSubreddits.json"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(o.a)(e, n);
			const u = (e, t) => {
					let {
						subredditIds: r,
						subredditNames: n,
						subscribe: o
					} = t;
					return Object(i.a)(Object(d.a)(e, [c.a]), {
						method: s.jb.POST,
						endpoint: Object(a.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: o ? "sub" : "unsub",
							sr: r && r.join(",") || void 0,
							sr_name: n && n.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				l = (e, t, r) => Object(i.a)(Object(d.a)(e, [c.a]), {
					method: s.jb.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: r ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/constants/comments.ts"),
				s = r("./src/reddit/selectors/comments.ts"),
				i = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts");
			const d = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case n.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case n.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case n.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				a = (e, t) => e.type === n.a.MoreComments ? t[e.id].numComments : 1,
				u = (e, t, r, n) => {
					let i = Object(s.n)(n, {
							commentLink: t,
							commentsPageKey: e
						}),
						o = t;
					for (; i && i.depth > r && i.prev && (o = i.prev, (i = Object(s.n)(n, {
							commentLink: o,
							commentsPageKey: e
						})) && !(i.depth <= r)););
					return o.id
				},
				l = (e, t, r) => {
					const {
						commentLists: n,
						comments: s
					} = e, {
						head: d
					} = n[t];
					if (d) return Object.keys(s).filter(e => {
						const t = s[e];
						return !(!t.isStickied || !((e, t) => {
							const r = Object(o.c)(e, {
								experimentEligibilitySelector: o.a,
								experimentName: i.H,
								expEventOverride: t
							});
							return !!(Object(i.Bf)(r) ? void 0 : r)
						})(r)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/counters/onboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/sample/index.ts"),
				i = r("./src/telemetry/helpers/sendCounter.ts");
			const o = (e, t) => {
					Object(i.b)(n.n.Redesign, {
						type: i.a.GenderCollection,
						data: {
							gender: e,
							submitSuccess: t
						}
					})
				},
				d = (e, t) => {
					Object(s.a)(10) && Object(i.b)(n.n.Redesign, {
						type: i.a.ReonboardingFlow,
						data: {
							type: e,
							variant: t
						}
					})
				}
		},
		"./src/reddit/helpers/filterListingResponse/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lodash/findLastIndex.js"),
				s = r.n(n),
				i = r("./src/reddit/models/WhitelistStatus/index.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/index.ts");
			const c = (e, t) => {
				let {
					subreddits: r,
					profiles: n
				} = t;
				const s = r[e.belongsTo.id] || n[e.belongsTo.id];
				return !e.isNSFW && s && i.a.has(s.wls || i.b.NO_ADS)
			};
			t.a = (e, t, r) => {
				let {
					postIds: n,
					posts: i,
					subreddits: a,
					profiles: u,
					...l
				} = r;
				const b = e.listings.postOrder.ids[t],
					p = (n || []).filter(e => !b || !b.includes(e)),
					f = b.map(t => e.posts.models[t]),
					m = f.length - (s()(f, e => e.isSponsored) + 1),
					_ = p.map(e => i[e]);
				let O;
				const j = [],
					g = {
						subreddits: a,
						profiles: u
					};
				for (let s = 0; s < _.length; s++) {
					const r = _[s];
					let n = !1;
					if (r.isSponsored) {
						const e = s > 0 && _[s - 1],
							t = s < _.length - 1 && _[s + 1];
						e && c(e, g) && t && c(t, g) && (n = !0)
					}
					r.isSponsored && n && (null == O && m + s >= 3 || s - O >= 3) ? (O = s, j.push(r.id)) : r.isSponsored ? r.isSponsored && Object(d.a)({
						source: "feed",
						action: "remove",
						noun: "ad",
						...o.n(e),
						listing: o.y(e, t)
					}) : j.push(r.id)
				}
				return {
					...l,
					subreddits: a,
					profiles: u,
					posts: i,
					postIds: j
				}
			}
		},
		"./src/reddit/helpers/getPostLimitForMobile/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/constants/postLayout.ts");

			function s(e) {
				return e ? n.c[e] : n.f
			}
		},
		"./src/reddit/helpers/getTimeSortForListing/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/listingSort/index.ts");
			t.a = (e, t) => {
				if (e) return Object(s.a)(e) ? t || n.ic : void 0
			}
		},
		"./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts": function(e, t, r) {
			"use strict";
			const n = e => ({
				id: e.id,
				topic: e.title,
				children: e.isRoot ? [] : null
			});
			t.a = e => (e => {
				let {
					edges: t,
					schemeName: r
				} = e;
				return {
					topics: t.reduce((e, t) => {
						let {
							node: r
						} = t;
						const s = r.topic.parents.map(e => e.nodeId),
							i = s.length <= 0,
							o = r.id,
							d = {
								id: o,
								isRoot: i,
								parents: s,
								title: r.topic.title
							};
						return i ? (e.topics.push(n(d)), e.dict[o] = e.topics.length - 1) : s.forEach(t => {
							var r;
							const s = e.dict[t];
							if ("number" == typeof s) {
								null === (r = e.topics[s].children) || void 0 === r || r.push(n(d))
							}
						}), e
					}, {
						topics: [],
						dict: {}
					}).topics,
					schemeName: r
				}
			})(e)
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
		"./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts": function(e, t, r) {
			"use strict";
			const n = e => ({
				communityIcon: e.styles && e.styles.icon || void 0,
				iconUrl: e.styles && e.styles.legacyIcon && e.styles.legacyIcon.url || void 0,
				id: e.id,
				isNSFW: e.isNSFW || !1,
				isSubscribed: e.isSubscribed,
				name: e.name,
				primaryColor: e.styles && e.styles.primaryColor || void 0,
				subscribers: e.subscribers,
				type: "subreddit"
			});
			t.a = e => {
				var t;
				return {
					subreddits: (null === (t = e.data.subredditInfoById) || void 0 === t ? void 0 : t.linkedSubreddits) ? e.data.subredditInfoById.linkedSubreddits.map(n) : []
				}
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return w
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/lib/assertNever.ts"),
				s = r("./src/lib/env/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/actions/gold/powerups.ts"),
				d = r("./src/reddit/models/Post/index.ts"),
				c = r("./src/reddit/models/RichTextJson/index.ts"),
				a = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				b = r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts"),
				I = r("./src/reddit/helpers/graphql/normalizeSubredditModPermissions/index.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				y = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				S = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				E = r("./src/reddit/helpers/graphql/normalizeSubredditWidgetsFromGql/index.ts"),
				T = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				v = r("./src/reddit/models/Onboarding/index.ts"),
				x = r("./src/reddit/helpers/graphql/helpers.ts");
			const w = (e, t, r) => {
				const o = {
						account: null,
						appliedFlair: {},
						authorFlair: {},
						interestTopicRecommendations: void 0,
						postIds: [],
						postInstances: {},
						posts: {},
						postFlair: {},
						powerups: {},
						predictionTournaments: null,
						preferences: null,
						profiles: {},
						questions: {},
						recentPostIds: [],
						structuredStyles: {},
						subredditAboutInfo: {},
						subredditLinks: {},
						subredditPermissions: void 0,
						subredditRules: [],
						subreddits: {},
						subredditTopicLinks: void 0,
						token: "",
						trendingSubredditIds: []
					},
					c = e => {
						if (Object(d.j)(e) || Object(d.i)(e)) return null;
						if (o.posts[e.id]) return e.id;
						const t = Object(f.f)(e);
						o.posts[t.id] = t;
						const {
							crosspostRoot: r
						} = e;
						r && r.type === d.a.Post && r.postInfo && c(r.postInfo);
						let a = t.id;
						if (e.authorFlair && (o.authorFlair[t.belongsTo.id] || (o.authorFlair[t.belongsTo.id] = {}), o.authorFlair[t.belongsTo.id][t.author] = Object(u.a)(e.authorFlair)[0]), Object(d.l)(e)) o.profiles[e.profile.id] || (o.profiles[e.profile.id] = Object(_.a)(e.profile));
						else if (Object(d.n)(e)) o.subreddits[e.subreddit.id] || (o.subreddits[e.subreddit.id] = Object(j.a)(e.subreddit)), o.postFlair[e.subreddit.id] || (o.postFlair[e.subreddit.id] = Object(b.a)(e.subreddit));
						else if (Object(d.h)(e)) {
							const r = Object(f.b)(e);
							if (!r) return null;
							a = r, o.posts[r] = {
								...t,
								id: r,
								permalink: `${t.permalink}?instanceId=${encodeURIComponent(r)}`
							}, o.posts[t.id] || (o.posts[t.id] = {
								...t,
								events: []
							}), o.postInstances[e.id] || (o.postInstances[e.id] = []), o.postInstances[e.id].push(r)
						} else try {
							Object(n.a)(e)
						} catch (l) {
							const t = `Received unhandled element type when processing subreddit posts: "${e.__typename}"`;
							Object(s.b)() || console.warn(t), i.c.captureMessage(t)
						}
						return a && o.postIds.push(a), a
					};
				if (e.forEach(e => c(e)), t) {
					o.trendingSubredditIds = t.map(e => e.id);
					for (const e of t) o.subreddits[e.id] = Object(j.a)(e)
				}
				const a = o.postIds.length - 1;
				return o.token = a >= 0 ? o.postIds[a] : "", r && (o.account = Object(T.a)(r), o.preferences = r.preferences && Object(m.a)(r.preferences, r.interactions) || null), o
			};
			t.a = e => {
				let {
					adhocMultiredditByNames: t,
					all: r,
					identity: n,
					popular: b,
					recentPosts: f,
					subredditInfoByName: m,
					trendingSubreddits: _
				} = e;
				var j, C;
				if (!m) return {
					reason: a.e.NotFoundSubreddit,
					data: {
						account: n && Object(T.a)(n) || null
					}
				};
				if (Object(a.j)(m)) {
					const {
						banMessage: e,
						publicDescriptionText: t,
						quarantineMessage: r,
						isEmailRequiredForQuarantineOptin: s,
						interstitialWarningMessage: i
					} = m;
					return {
						reason: k(m.forbiddenReason),
						data: {
							account: n && Object(T.a)(n) || null,
							banMessage: e || void 0,
							description: t,
							quarantineRequiresEmailOptin: s,
							...r ? {
								quarantineMessage: r.markdown,
								quarantineMessageRTJson: Object(x.f)(r.richtext, c.i)
							} : {},
							interstitialWarningMessage: null == i ? void 0 : i.markdown,
							interstitialWarningMessageRTJson: Object(x.f)(null == i ? void 0 : i.richtext, c.i)
						}
					}
				}
				const D = {};
				let N;
				const R = m || b || r || t,
					[A, L] = R.elements.edges.reduce((e, t, r) => {
						var n, s, i, o;
						const [c, a] = e, u = t.node;
						if (Object(d.k)(u)) c.push(u), (null === (s = null === (n = u.flair) || void 0 === n ? void 0 : n.template) || void 0 === s ? void 0 : s.id) && (null === (o = null === (i = u.flair) || void 0 === i ? void 0 : i.template) || void 0 === o ? void 0 : o.postStyle) && (D[u.flair.template.id] = Object(p.a)(u.flair.template.postStyle));
						else if (Object(v.f)(u)) {
							const e = Object(l.a)(u.interestTopicRecommendations.recommendationTopics);
							e.topics.length && (N = {
								interests: e,
								index: r
							})
						} else a.push(u);
						return [c, a]
					}, [
						[],
						[]
					]);
				if (L.length) {
					const e = `Received unhandled ${L.length} elements when processing subreddit data: "${L[0].__typename}"`;
					Object(s.b)() || console.warn(e), i.c.captureMessage(e)
				}
				f && A.push(...f);
				const P = R.elements.dist,
					U = w(A, _, n);
				if (m.styles && (U.structuredStyles = {
						data: {
							style: Object(y.a)(m.styles)
						}
					}), U.structuredStyles = {
						data: {
							...m.styles ? {
								style: Object(y.a)(m.styles)
							} : {},
							content: {
								widgets: Object(E.a)(m)
							},
							flairTemplate: D
						}
					}, U.subredditAboutInfo = Object(O.a)(m), m.modPermissions && (U.subredditPermissions = Object.keys(m.modPermissions).length > 0 ? Object(I.a)(m.modPermissions) : void 0), m.rules && (U.subredditRules = Object(h.a)(m.rules).rules), ((null == m ? void 0 : m.answerableQuestions) || m.contentRatingSurvey || m.communityProgressModule) && (U.questions = {
						answerableQuestions: null == m ? void 0 : m.answerableQuestions,
						contentRatingSurvey: null == m ? void 0 : m.contentRatingSurvey,
						communityProgressModule: null == m ? void 0 : m.communityProgressModule
					}), !Object(a.j)(m)) {
					const e = {
						powerups: m.powerups,
						powerupsSettings: m.powerupsSettings,
						supporters: m.supporters,
						productOffers: m.productOffers,
						subredditAchievementFlairs: m.subredditAchievementFlairs
					};
					U.powerups = Object(o.e)(e, n)
				}
				return U.subredditLinks = Object(g.a)({
					data: {
						subredditInfoById: m
					}
				}), U.subredditTopicLinks = Object(S.a)({
					data: {
						subredditInfoById: m
					}
				}), U.appliedFlair = {
					flair: (null === (j = m.flairedRedditorByName) || void 0 === j ? void 0 : j.flair) ? Object(u.a)(null === (C = m.flairedRedditorByName) || void 0 === C ? void 0 : C.flair)[0] : void 0,
					displaySettings: m.authorFlairSettings
				}, N && (U.interestTopicRecommendations = N), U.predictionTournaments = m.predictionTournaments || [], {
					...U,
					...null !== P && {
						dist: P
					}
				}
			};
			const k = e => {
				switch (e) {
					case a.c.Banned:
						return a.e.BannedSubreddit;
					case a.c.GoldOnly:
						return a.e.GoldSubreddit;
					case a.c.Private:
						return a.e.PrivateSubreddit;
					case a.c.Quarantined:
						return a.e.QuarantinedSubreddit;
					case a.c.Gated:
						return a.e.GatedSubreddit;
					case a.c.Unknown:
						return a.e.ForbiddenSubreddit
				}
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				var t, r;
				return (null === (r = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.subredditInfoById) || void 0 === r ? void 0 : r.topicLinks) || void 0
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubscribedSubredditsFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				s = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				i = r("./src/reddit/models/GqlTopLevelField.ts"),
				o = r("./src/reddit/models/User/index.ts");

			function d(e) {
				const t = [],
					r = [],
					d = {},
					c = {},
					{
						followedRedditorsInfo: a
					} = e.identity;
				for (const s of a.edges) {
					if (s.node.__typename !== o.c.AvailableRedditor || !s.node.profile) continue;
					const e = Object(n.a)(s.node.profile);
					d[e.id] = e;
					const {
						isFavorite: r
					} = s.node.profile;
					r && t.push(e.id)
				}
				const {
					subscribedSubreddits: u
				} = e.identity;
				for (const n of u.edges) {
					if (n.node.__typename !== i.a.Subreddit) continue;
					const e = Object(s.a)(n.node);
					c[e.id] = e;
					const {
						isFavorite: t
					} = n.node;
					t && r.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: r,
					profiles: d,
					subreddits: c
				}
			}
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, r) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
		},
		"./src/reddit/helpers/locales.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "a", (function() {
				return p
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/fbt.js"),
				i = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				o = r("./src/reddit/selectors/user.ts"),
				d = r("./node_modules/reselect/es/index.js");
			const c = e => Object.entries(e).map(e => {
					let [t, r] = e;
					return {
						value: t,
						displayName: r.displayName
					}
				}),
				a = Object.freeze({
					[n.GERMAN_LOCALE]: Object.freeze({
						bcp47: n.GERMAN_LOCALE,
						displayName: "Deutsch",
						englishName: "German",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.GERMAN_LOCALE),
						rtl: !1
					}),
					[n.DEFAULT_LOCALE]: Object.freeze({
						bcp47: n.DEFAULT_LOCALE,
						displayName: "English (US)",
						englishName: "English (US)",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.DEFAULT_LOCALE),
						rtl: !1
					}),
					[n.SPANISH_LOCALE]: Object.freeze({
						bcp47: n.SPANISH_LOCALE,
						displayName: "Español (ES)",
						englishName: "Spanish (ES)",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.SPANISH_LOCALE),
						rtl: !1
					}),
					[n.SPANISH_MEXICAN_LOCALE]: Object.freeze({
						bcp47: n.SPANISH_MEXICAN_LOCALE,
						displayName: "Español (MX)",
						englishName: "Spanish (MX)",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.SPANISH_MEXICAN_LOCALE),
						rtl: !1
					}),
					"fr-FR": Object.freeze({
						bcp47: "fr-FR",
						displayName: "Français",
						englishName: "French",
						fbtLocale: Object(s.isoLocaleToFbtLocale)("fr-FR"),
						rtl: !1
					}),
					[n.ITALIAN_LOCALE]: Object.freeze({
						bcp47: n.ITALIAN_LOCALE,
						displayName: "Italiano",
						englishName: "Italian",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.ITALIAN_LOCALE),
						rtl: !1
					}),
					[n.PORTUGUESE_BRAZILIAN_LOCALE]: Object.freeze({
						bcp47: n.PORTUGUESE_BRAZILIAN_LOCALE,
						displayName: "Português (BR)",
						englishName: "Portuguese (BR)",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.PORTUGUESE_BRAZILIAN_LOCALE),
						rtl: !1
					}),
					[n.PORTUGUESE_LOCALE]: Object.freeze({
						bcp47: n.PORTUGUESE_LOCALE,
						displayName: "Português (PT)",
						englishName: "Portuguese (PT)",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.PORTUGUESE_LOCALE),
						rtl: !1
					})
				}),
				u = {},
				l = Object.freeze({
					[n.PSEUDO_LOCALE]: Object.freeze({
						bcp47: n.PSEUDO_LOCALE,
						displayName: "Pseudo",
						englishName: "Pseudo",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.PSEUDO_LOCALE),
						rtl: !1
					}),
					[n.PSEUDO_AUTO]: Object.freeze({
						bcp47: n.PSEUDO_AUTO,
						displayName: "Pseudo Auto",
						englishName: "Pseudo Auto",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.PSEUDO_AUTO),
						rtl: !1
					})
				}),
				b = Object(d.a)(o.N, i.b, (e, t) => e || t ? {
					...a,
					...u,
					...l
				} : a);
			const p = async (e, t) => {
				0
			}
		},
		"./src/reddit/helpers/onboarding/reonboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "a", (function() {
				return b
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/customMiddleware/recentSubreddits.ts"),
				i = r("./src/reddit/helpers/featureThrottling/store/index.ts"),
				o = r("./src/reddit/helpers/onboarding/postsConsumedWeekly.ts"),
				d = r("./src/reddit/models/Onboarding/index.ts");
			const c = () => {
					const e = Date.now() - n.qc,
						t = Object(s.b)().filter(t => t.lastVisited >= e),
						r = Object(o.a)();
					return t.length < 3 || r < 50
				},
				a = () => !(() => !i.a.isReady || i.a.isFeatureThrottled(d.d.FeatureGate) || i.a.isFeatureThrottled(d.d.Dismissed))() && c(),
				u = () => !(() => !i.a.isReady || i.a.throttlingData[d.d.FeatureGate] || i.a.isFeatureThrottled(d.d.Triggered) || i.a.isFeatureThrottled(d.d.Dismissed))() && c(),
				l = () => {
					i.a.isFeatureThrottled(d.d.Triggered) || (i.a.throttleFeature(d.d.FeatureGate), i.a.throttleFeature(d.d.Triggered))
				},
				b = () => {
					i.a.throttleFeature(d.d.Dismissed)
				}
		},
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/history/esm/history.js"), r("./src/reddit/actions/platform.ts");
			var n = r("./src/config.ts");
			t.a = (e, t) => {
				const r = t.platform.currentPage && t.platform.currentPage.url;
				let s = `${n.a.accountManagerOrigin}/login/`;
				const i = window.location.origin;
				r && (s += `?dest=${encodeURIComponent(`${i}${r}`)}`), window.location.href = s
			}
		},
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/helpers/isComment.ts"),
				i = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				o = r("./src/reddit/models/Vote/index.ts"),
				d = e => !0 === e ? o.a.upvoted : !1 === e ? o.a.downvoted : o.a.notVoted,
				c = r("./src/reddit/models/Comment/index.ts");
			t.a = (e, t) => {
				const r = {
					approvedAtUTC: e.approved_at_utc,
					approvedBy: e.approved_by,
					author: e.author,
					authorId: e.author_fullname,
					bannedAtUTC: e.banned_at_utc,
					bannedBy: e.banned_by,
					body: e.body_html,
					bodyMD: e.body,
					collapsed: e.collapsed,
					collapsedReason: e.collapsed_reason,
					collapsedReasonCode: e.collapsed_reason_code,
					collapsedBecauseCrowdControl: e.collapsed_because_crowd_control,
					commentType: e.comment_type,
					created: e.created_utc,
					deletedBy: u(e),
					distinguishType: e.distinguished || "",
					editedAt: null,
					id: e.name,
					ignoreReports: e.ignore_reports,
					isAdmin: "admin" === e.distinguished,
					isAuthorPremium: !!e.author_premium,
					isApproved: e.approved,
					isDeleted: e.author === n.E,
					isGildable: e.can_gild,
					isLocked: e.locked,
					isMod: "moderator" === e.distinguished,
					isOp: e.is_submitter,
					isRemoved: e.removed,
					isScoreHidden: e.score_hidden,
					isSpam: e.spam,
					isStickied: e.stickied,
					isSaved: e.isSaved,
					isSystem: !1,
					subredditId: e.subreddit_id,
					markdown: e.body,
					media: {
						mediaMetadata: e.media_metadata,
						type: "rtjson",
						richtextContent: a(e.rtjson),
						rteMode: e.rte_mode
					},
					modReports: e.mod_reports,
					modReportsDismissed: e.mod_reports_dismissed,
					numReports: e.num_reports,
					parentId: Object(s.a)(e.parent_id) ? e.parent_id : null,
					permalink: e.permalink,
					postAuthor: e.link_author || null,
					postId: e.link_id,
					postTitle: e.link_title || null,
					sendReplies: e.send_replies,
					score: e.score,
					treatmentTags: e.treatment_tags,
					userReports: e.user_reports,
					userReportsDismissed: e.user_reports_dismissed,
					voteState: d(e.likes)
				};
				return e.all_awardings && (r.allAwardings = Object(i.a)(e.all_awardings)), e.awarders && (r.awarders = e.awarders), e.associated_award && (r.associatedAwardId = e.associated_award.id, r.associatedAward = Object(i.b)(e.associated_award)), r
			};
			const a = e => "string" == typeof e ? JSON.parse(e) : e,
				u = e => e.author !== n.E ? null : e.body === n.F ? c.c.User : e.body === n.Lb ? c.c.Moderator : null
		},
		"./src/reddit/helpers/r2/normalizePostFromR2/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				i = r("./src/reddit/models/Media/index.ts"),
				o = r("./src/reddit/models/PostCreationForm/index.ts"),
				d = r("./src/reddit/models/Vote/index.ts");
			const c = e => {
					const t = [];
					return e.link_flair_richtext && e.link_flair_richtext.length && t.push({
						richtext: e.link_flair_richtext,
						type: s.f.Richtext,
						textColor: e.link_flair_text_color || "dark",
						backgroundColor: e.link_flair_background_color || "",
						templateId: e.link_flair_template_id
					}), e.link_flair_text && t.push({
						text: e.link_flair_text,
						type: s.f.Text,
						textColor: e.link_flair_text_color || "dark",
						backgroundColor: e.link_flair_background_color || "",
						templateId: e.link_flair_template_id
					}), e.spoiler && t.push({
						text: "spoiler",
						type: s.f.Spoiler
					}), e.over_18 && t.push({
						text: "nsfw",
						type: s.f.Nsfw
					}), t
				},
				a = e => e ? e.map(e => ({
					categoryId: e.category_id,
					categoryName: e.category_name
				})) : [],
				u = e => {
					const t = e.preview && e.preview.enabled;
					let r = !1,
						n = null,
						s = {},
						d = {};
					const c = e.over_18 || e.spoiler;
					if (e.preview && (r = !!(d = e.preview.images[0].variants).mp4, s = e.preview.images[0].source, c && (n = d.obfuscated.source.url)), e.is_self) return {
						content: e.selftext_html,
						type: i.o.TEXT,
						markdownContent: e.selftext,
						obfuscated: n,
						rteMode: e.rte_mode || o.i.RICH_TEXT,
						...e.rtjson && {
							richtextContent: e.rtjson,
							type: i.o.RTJSON,
							mediaMetadata: e.media_metadata
						}
					};
					if (e.secure_media && e.secure_media.oembed || e.is_survey_ad) return {
						content: e.secure_media_embed.media_domain_url,
						type: i.o.EMBED,
						width: e.secure_media.oembed.width || 0,
						height: e.secure_media.oembed.height || 0,
						obfuscated: n,
						provider: e.secure_media.oembed.provider_name || ""
					};
					if (e.media && e.media.reddit_video) {
						const t = e.media.reddit_video;
						return {
							hlsUrl: t.hls_url,
							dashUrl: t.dash_url,
							isGif: t.is_gif,
							scrubberThumbSource: t.scrubber_media_url,
							obfuscated: n,
							posterUrl: t.url,
							width: t.width,
							height: t.height,
							type: i.o.VIDEO
						}
					}
					if (e.media && e.media.rpan_video) {
						const t = e.media.rpan_video;
						return {
							hlsUrl: t.hls_url,
							scrubberThumbSource: t.scrubber_media_url,
							type: i.o.LIVEVIDEO
						}
					}
					if (t && r) return {
						content: d.mp4.source.url,
						type: i.o.GIFVIDEO,
						width: d.mp4.source.width,
						height: d.mp4.source.height,
						gifBackgroundImage: s.url,
						gifBackgroundResolutions: e.preview.images[0].resolutions,
						obfuscated: n,
						resolutions: d.mp4.resolutions
					};
					if (t) {
						const t = d.gif ? d.gif.resolutions : e.preview.images[0].resolutions;
						return {
							content: s.url,
							type: i.o.IMAGE,
							width: s.width,
							height: s.height,
							obfuscated: n,
							resolutions: t
						}
					}
					return null
				},
				l = e => {
					const t = {};
					if (e.promoted && e.outbound_link || !e.is_self && !e.is_reddit_media_domain) {
						if (t.displayText = e.domain, t.url = e.url, e.outbound_link) {
							const r = e.outbound_link;
							t.outboundUrl = r.url, t.outboundUrlExpiration = r.expiration, t.outboundUrlCreated = r.created
						}
						return t
					}
					return null
				};
			t.a = e => {
				return {
					allAwardings: e.all_awardings ? Object(n.a)(e.all_awardings) : [],
					awarders: e.awarders,
					author: e.author,
					authorId: e.author_fullname,
					authorIsBlocked: e.author_is_blocked,
					audioRoom: e.audioRoom,
					approvedAtUTC: e.approved_at_utc,
					approvedBy: e.approved_by,
					bannedAtUTC: e.banned_at_utc,
					bannedBy: e.banned_by,
					belongsTo: {
						type: "user" === e.subreddit_type ? "profile" : "subreddit",
						id: e.subreddit_id || ""
					},
					callToAction: e.call_to_action || null,
					contestMode: e.contest_mode,
					created: 1e3 * e.created,
					crosspostParentId: e.cross_post_parent_id || null,
					crosspostRootId: e.cross_post_root_id || null,
					discussionType: e.discussion_type || null,
					distinguishType: e.distinguish_type || null,
					domain: e.domain,
					domainOverride: e.domain_override || null,
					events: e.events || [],
					flair: c(e),
					hidden: e.hidden,
					id: e.name,
					ignoreReports: e.ignore_reports,
					impressionId: e.impression_id ? String(e.impression_id) : null,
					impressionIdStr: e.impression_id_str,
					isApproved: e.approved,
					isArchived: e.archived,
					isAuthorPremium: e.author_premium,
					isBlank: e.is_blank,
					isCreatedFromAdsUi: e.is_created_from_ads_ui,
					isCrosspostable: e.is_crosspostable,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: e.is_followed || !1,
					isGildable: e.can_gild,
					isLocked: e.locked,
					isReactAllowed: !1,
					reactedFrom: null,
					attributionInfo: null,
					isMediaOnly: e.media_only,
					isMeta: e.is_meta,
					isNSFW: e.over_18,
					isOriginalContent: e.is_original_content,
					isPinned: e.pinned,
					isRemoved: e.removed,
					isSpam: e.spam,
					isSpoiler: e.spoiler,
					isSponsored: e.promoted,
					isSurveyAd: !!e.is_survey_ad,
					isStickied: e.stickied,
					liveCommentsWebsocket: e.liveCommentsWebsocket || e.websocket_url,
					media: u(e),
					modNote: e.mod_note || null,
					modReports: e.mod_reports,
					numComments: e.num_comments,
					numCrossposts: e.num_crossposts || 0,
					numDuplicates: e.num_duplicates,
					numReports: e.num_reports || 0,
					permalink: `https://www.reddit.com${e.permalink}`,
					postCategories: a(e.post_categories),
					preview: e.preview && e.preview.images && e.preview.images[0] && e.preview.images[0].source ? {
						url: e.preview.images[0].source.url,
						width: e.preview.images[0].source.width,
						height: e.preview.images[0].source.height
					} : void 0,
					previewComments: [],
					previousVisits: e.previous_visits,
					postId: e.name,
					modRemovalReason: e.mod_reason_title,
					modReasonBy: e.mod_reason_by,
					removedBy: e.removed_by,
					removedByCategory: e.removed_by_category,
					saved: e.saved,
					score: e.score,
					topAwardedType: e.top_awarded_type && e.top_awarded_type.toUpperCase(),
					treatmentTags: e.treatment_tags,
					isScoreHidden: !!e.hide_score,
					sendReplies: e.send_replies,
					source: l(e),
					suggestedSort: e.suggested_sort,
					thumbnail: {
						url: e.thumbnail,
						width: e.thumbnail_width,
						height: e.thumbnail_height
					},
					title: e.title,
					userReports: e.user_reports,
					upvoteRatio: e.upvote_ratio,
					viewCount: e.view_count || 0,
					voteState: Object(d.d)(e.likes)
				}
			}
		},
		"./src/reddit/helpers/tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./node_modules/lodash/values.js"),
				s = r.n(n);
			const i = e => s()(e).sort((t, r) => {
					const n = e[t.tag.id].tag.text.toLowerCase(),
						s = e[r.tag.id].tag.text.toLowerCase();
					return n < s ? -1 : n > s ? 1 : 0
				}),
				o = e => !e.id && !!e.action
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/elementIds.ts");
			let s;
			const i = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(n.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				o = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, s || (s = c(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${s}px`;
					const t = document.getElementById(n.c);
					t && (t.style.marginRight = `${s}px`)
				},
				d = e => {
					e ? i() : o()
				},
				c = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				a = e => {
					if (!e || !document.body) return 0;
					const t = c(document.body),
						r = e.offsetWidth - e.scrollWidth;
					return t || r
				}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/helpers/localStorage/index.ts"),
				i = r("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, r) => s => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...i.n(s),
					subreddit: i.gb(s),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${r}` : `DESKTOP ${r}`,
						count: 1,
						type: n.f.SWITCH_HOUSE_AD
					}
				}),
				d = (e, t) => {
					t && (Object(s.Bb)(e.postId), Object(s.Jb)(t)), e.impressionIdStr ? Object(s.Cb)(e.impressionIdStr) : e.impressionId && Object(s.Cb)(e.impressionId)
				}
		},
		"./src/reddit/helpers/trackers/blade.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return o
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "k", (function() {
				return j
			}));
			var n = r("./src/reddit/constants/blade.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t) => r => ({
					...s.n(r),
					source: n.c.Appearance,
					action: "click",
					noun: e,
					actionInfo: s.d(r, {
						paneName: t
					}),
					subreddit: s.gb(r)
				}),
				o = e => i("save_style", e),
				d = e => i("cancel_style", e),
				c = e => t => ({
					source: n.c.Structure,
					action: "click",
					noun: e,
					screen: s.Y(t),
					subreddit: s.gb(t)
				}),
				a = e => t => ({
					source: n.c.Appearance,
					action: "click",
					noun: e,
					screen: s.Y(t),
					subreddit: s.gb(t)
				}),
				u = (e, t) => r => ({
					source: "colorpicker",
					action: "click",
					noun: e,
					actionInfo: s.d(r, {
						paneName: n.f[t]
					}),
					screen: s.Y(r),
					subreddit: s.gb(r)
				}),
				l = e => t => ({
					source: n.g[e],
					action: "click",
					noun: "colorpicker",
					actionInfo: s.d(t, {
						paneName: n.f[e]
					}),
					screen: s.Y(t),
					subreddit: s.gb(t)
				}),
				b = e => ({
					screen: s.Y(e),
					subreddit: s.gb(e)
				}),
				p = () => e => ({
					source: n.c.Appearance,
					action: "view",
					noun: "blade",
					...b(e)
				}),
				f = e => t => ({
					source: n.a[e],
					action: "click",
					noun: n.b[e],
					...b(t)
				}),
				m = () => e => ({
					source: n.c.Appearance,
					action: "click",
					noun: "back",
					...b(e)
				}),
				_ = e => t => ({
					source: n.c.PostFlairManagement,
					action: "click",
					noun: e,
					...b(t)
				}),
				O = (e, t) => ({
					...s.n(e),
					..._(t)(e)
				}),
				j = e => t => ({
					source: n.c.MenuLinks,
					action: "click",
					noun: e ? "wiki_link_on" : "wiki_link_off",
					screen: s.Y(t),
					subreddit: s.gb(t),
					userSubreddit: s.qb(t)
				})
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/telemetry/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = e => {
					let {
						state: t,
						commentId: r
					} = e;
					return Object(n.a)({
						source: "comment",
						action: "view",
						noun: "comment",
						...s.n(t),
						profile: s.Q(t),
						post: s.H(t, r),
						media: s.A(t, r),
						subreddit: s.gb(t),
						comment: s.h(t, r)
					})
				},
				o = e => {
					let {
						state: t,
						commentId: r
					} = e;
					return Object(n.a)({
						source: "comment",
						action: "consume",
						noun: "comment",
						...s.n(t),
						profile: s.Q(t),
						post: s.H(t, r),
						media: s.A(t, r),
						subreddit: s.gb(t),
						comment: s.h(t, r)
					})
				},
				d = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: s.ob(t),
					subreddit: s.gb(t),
					post: s.H(t, e),
					actionInfo: s.d(t),
					app: s.f(t),
					referrer: s.V(t),
					session: s.cb(t)
				})
		},
		"./src/reddit/helpers/trackers/communityTopics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "g", (function() {
				return j
			}));
			var n, s = r("./src/reddit/selectors/tags.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/index.ts");
			! function(e) {
				e.communitySettings = "community_settings", e.idCard = "id_card"
			}(n || (n = {}));
			const d = (e, t, r) => {
					const n = Object(s.x)(e, {
						subredditId: t
					});
					return !!n && n.id === r
				},
				c = (e, t) => Object(s.u)(e, {
					itemId: t
				}).reduce((e, t) => {
					let {
						topicTagIds: r,
						topicTagContents: n,
						topicTagTypes: s
					} = e;
					return r.push(t.tag.id), n.push(t.tag.text), s.push(t.tag.type), {
						topicTagIds: r,
						topicTagContents: n,
						topicTagTypes: s
					}
				}, {
					topicTagIds: [],
					topicTagContents: [],
					topicTagTypes: []
				}),
				a = (e, t, r) => {
					if (!r.id) return {
						content: r.displayText
					};
					const n = Object(s.b)(e)[r.id] || Object(s.d)(e, {
						subredditId: t
					})[r.id];
					return n ? {
						id: n.id,
						content: n.text,
						type: n.type,
						isPrimary: d(e, t, n.id)
					} : null
				},
				u = (e, t, r) => {
					if (!r) return null;
					const n = Object(s.b)(e)[r] || Object(s.d)(e, {
						subredditId: t
					})[r];
					return n ? {
						id: n.id,
						content: n.text,
						type: n.type,
						isPrimary: d(e, t, n.id)
					} : null
				},
				l = (e, t, r) => ({
					...i.n(e),
					subreddit: {
						...i.gb(e) || {},
						id: t,
						...c(e, t)
					},
					source: r.context,
					action: "click"
				}),
				b = (e, t, r) => {
					Object(o.a)(((e, t, r) => ({
						...l(e, t.subredditId, r),
						noun: t.isRelevant ? "restore_related_topic" : "remove_related_topic",
						topicTag: u(e, t.subredditId, t.tagId)
					}))(e, t, r))
				},
				p = (e, t, r, n) => {
					Object(o.a)({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "add_related_topic"
					})
				},
				f = (e, t, r, n) => {
					return !Object(s.i)(e, {
						subredditId: t
					}) && r.id ? Object(o.a)(((e, t, r, n) => ({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "topic_auto_suggest"
					}))(e, t, r, n)) : r.id ? Object(o.a)(((e, t, r, n) => ({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "topic_auto_complete"
					}))(e, t, r, n)) : Object(o.a)(((e, t, r, n) => ({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "topic_add_new"
					}))(e, t, r, n))
				},
				m = (e, t, r, n) => Object(o.a)({
					...l(e, t, n),
					topicTag: a(e, t, r),
					noun: "topic_remove"
				}),
				_ = (e, t, r) => Object(o.a)({
					...l(e, t, r),
					noun: "topic_tag_field"
				}),
				O = (e, t, r) => Object(o.a)({
					...l(e, t, r),
					noun: r.context === n.communitySettings ? "save" : "save_community_topics"
				}),
				j = (e, t, r, n) => {
					const s = l(e, t, n);
					Object(o.a)({
						...s,
						action: "view",
						noun: "error",
						actionInfo: {
							...s.actionInfo,
							reason: r
						}
					})
				}
		},
		"./src/reddit/helpers/trackers/feed.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/telemetry/index.ts");
			const i = e => t => Object(s.a)({
					...n.n(t),
					actionInfo: n.d(t, {
						reason: e
					}),
					source: "feed",
					action: "load",
					noun: "serving",
					feed: n.q(t)
				}),
				o = e => t => Object(s.a)({
					...n.n(t),
					actionInfo: n.d(t, {
						reason: e
					}),
					source: "feed",
					action: "fail",
					noun: "serving",
					feed: n.q(t)
				})
		},
		"./src/reddit/helpers/trackers/inlineSubredditEditing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			}));
			var n, s = r("./src/reddit/constants/tracking.ts"),
				i = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.SubredditInlineTooltip = "subreddit_inline_tooltip", e.EditSubredditIcon = "edit_subreddit_icon", e.EditSubredditDescription = "edit_subreddit_description", e.SaveDescription = "save_description", e.Error = "error"
			}(n || (n = {}));
			const o = e => ({
					subreddit: i.gb(e),
					userSubreddit: i.qb(e)
				}),
				d = e => ({
					source: "subreddit_tooltip",
					noun: n.SubredditInlineTooltip,
					action: s.c.VIEW,
					...o(e)
				}),
				c = e => ({
					source: "id_card",
					noun: n.EditSubredditIcon,
					action: s.c.CLICK,
					...o(e)
				}),
				a = e => ({
					source: "id_card",
					noun: n.EditSubredditDescription,
					action: s.c.CLICK,
					...o(e)
				}),
				u = (e, t) => r => ({
					source: "id_card",
					noun: n.SaveDescription,
					action: s.c.CLICK,
					setting: {
						value: String(e),
						oldValue: String(t)
					},
					...o(r)
				}),
				l = (e, t) => ({
					source: "id_card",
					noun: n.Error,
					action: s.c.VIEW,
					...o(e),
					...i.n(e),
					actionInfo: i.d(e, {
						reason: t
					})
				})
		},
		"./src/reddit/helpers/trackers/modNote.ts": function(e, t, r) {
			"use strict";
			r.d(t, "w", (function() {
				return d
			})), r.d(t, "r", (function() {
				return c
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "o", (function() {
				return m
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "q", (function() {
				return O
			})), r.d(t, "x", (function() {
				return j
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "k", (function() {
				return I
			})), r.d(t, "l", (function() {
				return h
			})), r.d(t, "y", (function() {
				return y
			})), r.d(t, "s", (function() {
				return S
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "m", (function() {
				return T
			})), r.d(t, "u", (function() {
				return v
			})), r.d(t, "t", (function() {
				return x
			})), r.d(t, "v", (function() {
				return w
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "c", (function() {
				return D
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t) => {
					var r, n, s, i, o, d, c, a, u, l, b;
					const {
						modNote: p,
						subredditId: f,
						userId: m,
						postId: _,
						commentId: O,
						subredditSearch: j,
						filteredType: g,
						filteredSubredditId: I
					} = t, h = O || (null === (n = null === (r = p) || void 0 === r ? void 0 : r.commentInfo) || void 0 === n ? void 0 : n.id), y = _ || (null === (i = null === (s = p) || void 0 === s ? void 0 : s.postInfo) || void 0 === i ? void 0 : i.id);
					return {
						modnote: {
							type: null == p ? void 0 : p.itemType,
							content: null === (o = p) || void 0 === o ? void 0 : o.note,
							label: null === (c = null === (d = p) || void 0 === d ? void 0 : d.label) || void 0 === c ? void 0 : c.toLowerCase(),
							operatorId: null === (a = null == p ? void 0 : p.operator) || void 0 === a ? void 0 : a.id,
							subredditSearch: j,
							filteredType: null == g ? void 0 : g.toLowerCase(),
							filteredSubredditId: null == I ? void 0 : I.toLowerCase()
						},
						modAction: {
							targetUserId: m || (null === (u = null == p ? void 0 : p.user) || void 0 === u ? void 0 : u.id),
							action: null === (b = null === (l = p) || void 0 === l ? void 0 : l.actionType) || void 0 === b ? void 0 : b.toLowerCase()
						},
						...h ? {
							comment: {
								id: h,
								postId: y || "none"
							}
						} : null,
						...y ? {
							post: {
								id: y
							}
						} : null,
						subreddit: {
							id: f
						}
					}
				},
				o = "moderator",
				d = e => t => ({
					source: o,
					action: "view",
					noun: "modnote_quickaccess",
					correlationId: Object(n.e)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				c = e => t => {
					const r = {
						source: o,
						action: "close",
						noun: "modnote_quickaccess",
						correlationId: Object(n.c)(n.a.ModNotes),
						...s.n(t),
						...i(0, e)
					};
					return Object(n.b)(n.a.ModNotes), r
				},
				a = e => t => ({
					source: o,
					action: "click",
					noun: "relatedcontent_modnote_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				u = e => t => ({
					source: o,
					action: "click",
					noun: "relatedcontent_modnote_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				l = e => t => ({
					source: o,
					action: "click",
					noun: "relatedcontent_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				b = e => t => ({
					source: o,
					action: "click",
					noun: "expand_modlog_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				p = e => t => ({
					source: o,
					action: "click",
					noun: "expand_modlog_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				f = e => t => ({
					source: o,
					action: "click",
					noun: "expand_modnote_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				m = e => t => ({
					source: o,
					action: "click",
					noun: "username_modnote_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				_ = e => t => ({
					source: o,
					action: "click",
					noun: "mod_username_modnote_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				O = e => t => ({
					source: o,
					action: "click",
					noun: "username_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				j = e => t => ({
					source: o,
					action: "view",
					noun: "user_profile_hovercard",
					correlationId: Object(n.e)(n.a.ModNotes, !1),
					...s.n(t),
					...i(0, e)
				}),
				g = e => t => ({
					source: o,
					action: "click",
					noun: "add_note_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				I = e => t => ({
					source: o,
					action: "click",
					noun: "user_mod_log_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				h = e => t => ({
					source: o,
					action: "click",
					noun: "send_modmail_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				y = e => t => ({
					source: o,
					action: "view",
					noun: "modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				S = e => t => ({
					source: o,
					action: "close",
					noun: "modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				E = e => t => ({
					source: o,
					action: "click",
					noun: "type_filter_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				T = e => t => ({
					source: o,
					action: "click",
					noun: "subreddit_filter_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				v = e => t => ({
					source: o,
					action: "select",
					noun: "type_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				x = e => t => ({
					source: o,
					action: "select",
					noun: "subreddit_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				w = e => t => ({
					source: o,
					action: "submit",
					noun: "submit_note_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				k = e => t => ({
					source: o,
					action: "click",
					noun: "delete_modnote_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				C = e => t => ({
					source: o,
					action: "click",
					noun: "cancel_deletemodnote",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				D = e => t => ({
					source: o,
					action: "click",
					noun: "delete_deletemodnote",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				})
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "K", (function() {
				return h
			})), r.d(t, "I", (function() {
				return y
			})), r.d(t, "C", (function() {
				return S
			})), r.d(t, "z", (function() {
				return E
			})), r.d(t, "A", (function() {
				return T
			})), r.d(t, "M", (function() {
				return v
			})), r.d(t, "B", (function() {
				return x
			})), r.d(t, "m", (function() {
				return w
			})), r.d(t, "E", (function() {
				return k
			})), r.d(t, "D", (function() {
				return C
			})), r.d(t, "t", (function() {
				return D
			})), r.d(t, "s", (function() {
				return N
			})), r.d(t, "L", (function() {
				return R
			})), r.d(t, "p", (function() {
				return A
			})), r.d(t, "o", (function() {
				return L
			})), r.d(t, "q", (function() {
				return P
			})), r.d(t, "f", (function() {
				return G
			})), r.d(t, "r", (function() {
				return M
			})), r.d(t, "j", (function() {
				return q
			})), r.d(t, "g", (function() {
				return Q
			})), r.d(t, "h", (function() {
				return K
			})), r.d(t, "d", (function() {
				return z
			})), r.d(t, "H", (function() {
				return W
			})), r.d(t, "i", (function() {
				return H
			})), r.d(t, "c", (function() {
				return $
			})), r.d(t, "v", (function() {
				return V
			})), r.d(t, "u", (function() {
				return Y
			})), r.d(t, "G", (function() {
				return X
			})), r.d(t, "w", (function() {
				return Z
			})), r.d(t, "k", (function() {
				return ee
			})), r.d(t, "F", (function() {
				return te
			})), r.d(t, "y", (function() {
				return re
			})), r.d(t, "b", (function() {
				return ne
			})), r.d(t, "n", (function() {
				return se
			})), r.d(t, "x", (function() {
				return ie
			})), r.d(t, "l", (function() {
				return oe
			})), r.d(t, "J", (function() {
				return de
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/helpers/media/index.ts"),
				o = r("./src/reddit/models/PostCreationForm/index.ts"),
				d = r("./src/reddit/models/PostDraft/index.ts"),
				c = r("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				a = r("./src/reddit/selectors/postDraft.ts"),
				u = r("./src/reddit/selectors/subreddit.ts"),
				l = r("./src/reddit/selectors/telemetry.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				p = r("./src/telemetry/index.ts"),
				f = r("./src/telemetry/models/PostComposer.ts"),
				m = r("./src/telemetry/models/PostDraft.ts");
			const _ = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					prediction: "prediction",
					crosspost: "crosspost",
					talk: "talk"
				},
				O = e => ({
					source: "post_composer",
					action: n.c.CLICK,
					...l.n(e),
					screen: l.Y(e),
					correlationId: Object(s.c)(s.a.PostComposer)
				}),
				j = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === o.i.MARKDOWN ? "markdown" : "rte"
				},
				g = e => {
					Object(p.a)({
						noun: "cancel",
						...O(e)
					})
				},
				I = e => {
					Object(p.a)({
						noun: "discard",
						...O(e)
					})
				},
				h = e => t => ({
					...O(t),
					noun: "subreddit_choice",
					subreddit: e ? l.hb(t, e) : void 0,
					actionInfo: l.g(t)
				}),
				y = () => e => ({
					...O(e),
					noun: "subreddit_selector"
				}),
				S = (e, t) => {
					Object(p.a)({
						noun: "post_type_selector",
						postComposer: {
							type: _[t]
						},
						...O(e)
					})
				},
				E = () => e => ({
					noun: "add_option",
					...O(e)
				}),
				T = () => e => ({
					noun: "voting_length",
					...O(e)
				}),
				v = (e, t, r) => {
					"image_upload" === t || "video_upload" === t ? Object(p.a)({
						noun: t,
						...O(e)
					}) : Object(p.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: r ? "on" : "off"
						},
						...O(e)
					})
				},
				x = (e, t, r, n) => {
					Object(p.a)({
						noun: "post",
						subreddit: l.gb(e),
						postComposer: {
							type: t,
							...j(e, t)
						},
						post: r ? l.H(e, r) : null,
						...O(e),
						correlationId: n
					})
				},
				w = (e, t) => {
					const r = t === o.i.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(p.a)({
						noun: r,
						...O(e)
					})
				},
				k = (e, t) => {
					Object(p.a)({
						noun: "save",
						subreddit: l.gb(e),
						postComposer: {
							type: t,
							...j(e, t)
						},
						...O(e)
					})
				},
				C = (e, t) => {
					const r = e.uploads[t];
					r.error && Object(p.a)({
						...O(e),
						noun: "media",
						action: n.c.REJECT,
						actionInfo: {
							...l.d(e),
							reason: JSON.stringify(r.error)
						}
					})
				},
				D = (e, t) => {
					t.forEach(t => {
						const r = Object(i.g)(t.type);
						r && Object(p.a)({
							...O(e),
							action: n.c.DRAG,
							noun: r
						})
					})
				},
				N = (e, t, r) => {
					Object(p.a)({
						...O(e),
						noun: "input",
						postComposer: {
							inputType: r
						},
						action: t,
						actionInfo: l.g(e)
					})
				},
				R = (e, t, r) => {
					Object(p.a)({
						...O(e),
						noun: r,
						action: Object(f.getToggleAction)(t),
						actionInfo: l.g(e)
					})
				},
				A = e => U("input", e),
				L = () => U("add"),
				P = () => U("remove_image"),
				U = (e, t) => r => ({
					...O(r),
					noun: e,
					postComposer: {
						inputType: t,
						type: _.imageOnly
					},
					action: n.c.CLICK
				}),
				G = e => {
					Object(p.a)({
						...O(e),
						noun: "hide_oc_description",
						action: n.c.CLICK
					})
				},
				F = (e, t) => {
					if (t) {
						const r = l.hb(e, t);
						if (r) return {
							subreddit: r
						};
						const n = l.R(e, t);
						if (n) return {
							profile: n
						}
					}
				},
				M = (e, t) => {
					const {
						draftId: r,
						destSubreddit: n
					} = t, s = Object(b.k)(e), i = Object(a.d)(e, {
						draftId: r
					}), o = {
						authorId: s ? s.id : void 0,
						createdTimestamp: i ? i.created : void 0,
						id: r || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case d.b.Link:
							o.type = m.DraftType.Link, o.urlLength = t.body.length;
							break;
						case d.b.Markdown:
							o.type = m.DraftType.Self, o.bodyTextLength = t.body.length;
							break;
						case d.b.RichText:
							o.type = m.DraftType.RichText, t.documentStats && (o.bodyTextLength = t.documentStats.textLength, o.numberRteImages = t.documentStats.rteImagesCount, o.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case d.b.Image:
							o.type = m.DraftType.Image;
							break;
						case d.b.Video:
							o.type = m.DraftType.Video
					}
					return {
						postDraft: o,
						...F(e, n.id)
					}
				},
				B = (e, t) => {
					const r = Object(b.k)(e),
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
						case d.b.Link:
							n.type = m.DraftType.Link, n.urlLength = (t.body || "").length;
							break;
						case d.b.Markdown:
							n.type = m.DraftType.Self, n.bodyTextLength = (t.body || "").length;
							break;
						case d.b.RichText:
							n.type = m.DraftType.RichText
					}
					return {
						postDraft: n,
						...F(e, t.subredditId)
					}
				},
				q = (e, t) => {
					Object(p.a)({
						noun: "draft_load",
						...O(e),
						...M(e, t)
					})
				},
				Q = (e, t) => {
					Object(p.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...O(e),
						...M(e, t)
					})
				},
				K = (e, t) => {
					Object(p.a)({
						noun: "draft_delete",
						...O(e),
						...B(e, t)
					})
				},
				z = e => {
					Object(p.a)({
						...O(e),
						noun: "social_connect_link",
						action: n.c.CLICK
					})
				},
				W = (e, t) => {
					Object(p.a)({
						...O(e),
						noun: "twitter_share_checkbox",
						action: Object(f.getToggleAction)(t)
					})
				},
				H = (e, t, r) => {
					Object(p.a)({
						...O(e),
						...M(e, t),
						noun: "draft_share",
						action: r ? n.c.ENABLE : n.c.DISABLE
					})
				},
				$ = e => {
					Object(p.a)({
						...O(e),
						noun: "create_community",
						actionInfo: {
							...l.d(e),
							pageType: "post_select_community"
						}
					})
				},
				J = "community_recommendation",
				V = () => e => ({
					...O(e),
					action: n.c.VIEW,
					noun: J,
					listing: {
						links: Object(c.c)(e).map(t => Object(u.D)(e, t.name))
					}
				}),
				Y = (e, t) => r => ({
					...O(r),
					action: n.c.CLICK,
					noun: J,
					actionInfo: {
						...l.d(r),
						position: t
					},
					subreddit: {
						name: e,
						id: Object(u.D)(r, e)
					}
				}),
				X = e => {
					Object(p.a)({
						...O(e),
						action: n.c.SKIP,
						noun: J
					})
				},
				Z = (e, t) => r => ({
					...O(r),
					action: n.c.VIEW,
					noun: `${J}_hover`,
					actionInfo: {
						...l.d(r),
						position: t
					},
					subreddit: {
						name: e,
						id: Object(u.D)(r, e)
					}
				}),
				ee = e => t => ({
					...O(t),
					action: n.c.CLICK,
					noun: "draft_preview",
					actionInfo: {
						...l.d(t),
						count: e
					}
				}),
				te = e => t => ({
					...O(t),
					action: "add",
					noun: "flair",
					subreddit: l.hb(t, e)
				}),
				re = () => e => ({
					...O(e),
					action: n.c.CLICK,
					noun: "flair_dropdown"
				}),
				ne = () => e => ({
					...O(e),
					action: "clear",
					noun: "flair"
				}),
				se = () => e => ({
					...O(e),
					action: "search",
					noun: "flair"
				}),
				ie = e => {
					let {
						actionInfoType: t,
						subredditId: r = "",
						noun: i = "create_post"
					} = e;
					return e => ({
						...O(e),
						action: n.c.CLICK,
						noun: i,
						actionInfo: {
							...l.d(e),
							type: t
						},
						correlationId: Object(s.e)(s.a.PostComposer, !1),
						subreddit: r ? l.hb(e, r) : void 0
					})
				},
				oe = () => e => ({
					...O(e),
					action: n.c.CLICK,
					noun: "edit_post"
				}),
				de = e => t => ({
					...O(t),
					action: "type",
					noun: "subreddit_search",
					actionInfo: {
						...l.d(t),
						type: e
					}
				})
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "J", (function() {
				return o
			})), r.d(t, "z", (function() {
				return d
			})), r.d(t, "B", (function() {
				return c
			})), r.d(t, "K", (function() {
				return u
			})), r.d(t, "j", (function() {
				return l
			})), r.d(t, "v", (function() {
				return b
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "u", (function() {
				return f
			})), r.d(t, "t", (function() {
				return m
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "m", (function() {
				return O
			})), r.d(t, "o", (function() {
				return j
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "s", (function() {
				return I
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "C", (function() {
				return T
			})), r.d(t, "H", (function() {
				return v
			})), r.d(t, "D", (function() {
				return x
			})), r.d(t, "G", (function() {
				return w
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "i", (function() {
				return D
			})), r.d(t, "y", (function() {
				return N
			})), r.d(t, "w", (function() {
				return R
			})), r.d(t, "x", (function() {
				return A
			})), r.d(t, "f", (function() {
				return L
			})), r.d(t, "E", (function() {
				return P
			})), r.d(t, "k", (function() {
				return U
			})), r.d(t, "a", (function() {
				return G
			})), r.d(t, "A", (function() {
				return F
			})), r.d(t, "d", (function() {
				return M
			})), r.d(t, "l", (function() {
				return B
			})), r.d(t, "F", (function() {
				return q
			})), r.d(t, "I", (function() {
				return Q
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, r) => ({
					...s.n(e),
					correlationId: Object(n.e)(n.a.PowerupsFlow, !1),
					profile: s.Q(e),
					subreddit: s.gb(e),
					powerups: {
						...s.lb(e),
						freeCount: t,
						paidCount: r
					}
				}),
				o = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...i(t),
					correlationId: Object(n.e)(n.a.PowerupsFlow, !0)
				}),
				d = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powerups_become_hero",
					...i(e),
					correlationId: Object(n.e)(n.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powerups_see_all_heroes",
					...i(e),
					correlationId: Object(n.e)(n.a.PowerupsFlow, !0)
				}),
				a = e => (t, r) => n => ({
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
				u = a("postlist_supporters_cta"),
				l = a("comm_heroes_modal"),
				b = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(n.e)(n.a.PowerupsFlow, !0)
				}),
				p = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(n.e)(n.a.PowerupsFlow, !0)
				}),
				f = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell_unlock_avatar",
					...i(e),
					correlationId: Object(n.e)(n.a.PowerupsFlow, !0)
				}),
				m = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell_unlock_avatar",
					...i(e),
					correlationId: Object(n.e)(n.a.PowerupsFlow, !0)
				}),
				_ = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell_avatar",
					...i(e),
					correlationId: Object(n.e)(n.a.PowerupsFlow, !0)
				}),
				O = () => e => ({
					source: "powerups_post_upsell_avatar",
					action: "click",
					noun: "post_upsell_avatar_cta",
					...i(e),
					correlationId: Object(n.e)(n.a.PowerupsFlow, !0)
				}),
				j = () => e => ({
					source: "powerups_post_upsell_avatar_modal",
					action: "view",
					noun: "powerups_modal",
					...i(e)
				}),
				g = () => e => ({
					source: "powerups_post_upsell_avatar_modal",
					action: "click",
					noun: "post_upsell_avatar_modal_cta",
					...i(e)
				}),
				I = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell_premium",
					...i(e)
				}),
				h = () => e => ({
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
					correlationId: Object(n.e)(n.a.PowerupsFlow, !1)
				}),
				S = () => e => ({
					source: "powerups_community_feed",
					action: "click",
					noun: "powerups_mod_enable_banner",
					...i(e),
					correlationId: Object(n.e)(n.a.PowerupsFlow, !1)
				}),
				E = e => t => ({
					source: "powerups",
					action: "click",
					noun: "join_supporters",
					...i(t),
					actionInfo: s.d(t, {
						reason: e
					})
				}),
				T = () => e => ({
					source: "powerups_supporters_modal",
					action: "click",
					noun: "powerups_cta",
					...i(e)
				}),
				v = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_supporter_achievement",
					...i(e)
				}),
				x = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_achievements",
					...i(e)
				}),
				w = () => e => ({
					source: "powerups_flair_picker",
					action: "click",
					noun: "powerups_cta",
					...i(e)
				}),
				k = e => t => ({
					source: "powerups_modal",
					action: "view",
					noun: "marketing_step",
					...i(t),
					actionInfo: s.d(t, {
						reason: e
					})
				}),
				C = e => t => ({
					source: "powerups",
					action: "click",
					noun: "benefit",
					...i(t),
					powerups: {
						...s.lb(t),
						benefit: e
					}
				}),
				D = (e, t) => r => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...i(r, e, t)
				}),
				N = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...i(e),
					actionInfo: s.d(e, {
						pageType: "powerups_premium_upsell"
					})
				}),
				R = () => e => ({
					source: "powerups_premium_upsell",
					action: "click",
					noun: "powerups_price",
					...i(e)
				}),
				A = e => t => ({
					source: "powerups",
					action: "click",
					noun: "premium",
					...i(t),
					actionInfo: s.d(t, {
						pageType: "powerups_premium_upsell"
					}),
					goldPurchase: {
						subscriptionType: e
					}
				}),
				L = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...i(r, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				P = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...i(e),
					correlationId: Object(n.e)(n.a.PowerupsFlow, !0)
				}),
				U = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...i(e)
				}),
				G = (e, t) => r => ({
					source: t,
					action: "click",
					noun: "add_custom_emojis",
					...i(r),
					powerups: {
						...s.lb(r),
						emojiCount: e
					}
				}),
				F = (e, t) => r => ({
					source: t,
					action: "save",
					noun: "custom_emojis",
					...i(r),
					powerups: {
						...s.lb(r),
						emojiCount: e
					}
				}),
				M = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return r => ({
						source: t,
						action: "delete",
						noun: "custom_emojis",
						...i(r),
						powerups: {
							...s.lb(r),
							emojiCount: e
						}
					})
				},
				B = (e, t) => r => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? s.hb(r, t) : void 0,
					...i(r),
					correlationId: e
				}),
				q = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_gifs",
					...i(e),
					correlationId: Object(n.e)(n.a.PowerupsFlow, !0)
				}),
				Q = (e, t, r) => n => ({
					source: "powerups_settings",
					action: "click",
					noun: e,
					setting: {
						value: String(t),
						oldValue: String(r)
					},
					subreddit: s.gb(n),
					...s.n(n)
				})
		},
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			}));
			var n = r("./src/reddit/components/TrackingHelper/index.tsx");
			const s = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var i = r("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, r, n) => s => {
				const o = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(i.n)(s),
					actionInfo: Object(i.d)(s),
					geo: Object(i.s)(s),
					screen: Object(i.Y)(s),
					subreddit: Object(i.gb)(s),
					outbound: Object(i.E)(s, e, t, n, r)
				};
				return r && (o.comment = Object(i.h)(s, r)), n && (o.post = Object(i.H)(s, n)), o
			};
			var d = r("./src/lib/serviceWorker/index.ts"),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				u = r("./src/telemetry/helpers/getSignatureHeader.ts"),
				l = r("./src/telemetry/models/Event.ts");
			const b = () => {
				const e = Object(c.f)();
				return t => {
					const r = t(e.getState()),
						n = l.g(r),
						s = Object(a.a)(n),
						i = Object(u.b)(s);
					Object(d.b)("sendV2EventsData", {
						data: s,
						headers: i
					})
				}
			};

			function p() {
				const e = Object(n.b)(),
					t = b();
				return (r, n, i, d) => {
					var c, a;
					if (n && function(e) {
							return !e.startsWith("/") && null == e.match(s)
						}(r)) {
						const s = o(r, n, i, d);
						(null === (a = null === (c = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === c ? void 0 : c.serviceWorker) || void 0 === a ? void 0 : a.controller) ? t(s): e(s)
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
				return a
			})), r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/icons/fonts/helpers.m.less"),
				o = r.n(i),
				d = r("./src/lib/constants/icons.ts"),
				c = r("./src/lib/lessComponent.tsx");
			const a = (e, t) => `icon icon-${e}${t&&!e.includes("fill")&&d.a[`${e}_fill`]?"_fill":""}`,
				u = c.a.wrapped(e => s.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", o.a)
		},
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"
			}))
		},
		"./src/reddit/models/ApiRequestState/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			var n, s = r("./node_modules/uuid/v4.js"),
				i = r.n(s);
			! function(e) {
				e[e.Pending = 0] = "Pending", e[e.Complete = 1] = "Complete", e[e.Failed = 2] = "Failed"
			}(n || (n = {}));
			const o = () => i()()
		},
		"./src/reddit/models/Duplicates/index.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				return `${e}-sort[${t.sort}]-crossposts_only[${t.crossposts_only}]`
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/models/ExternalAccount/index.ts": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Twitter = "twitter"
				}(n || (n = {}))
		},
		"./src/reddit/models/HatefulContentFilters/index.ts": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Off = "OFF", e.Lenient = "LENIENT", e.Moderate = "MODERATE", e.Strict = "STRICT"
				}(n || (n = {}))
		},
		"./src/reddit/models/Option/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			const n = e => !e.id,
				s = e => !!e.id,
				i = (e, t) => n(e) && n(t) ? e.displayText.toLowerCase().trim() === t.displayText.toLowerCase().trim() : !(!s(e) || !s(t)) && e.id === t.id
		},
		"./src/reddit/models/Tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			}));
			const n = 25,
				s = 64;
			var i;
			! function(e) {
				e.EVENT = "EVENT", e.COLLECTION = "COLLECTION", e.CLASSIFICATION = "CLASSIFICATION", e.POST_CLASSIFICATION = "POST_CLASSIFICATION", e.SUBREDDIT_CLASSIFICATION = "SUBREDDIT_CLASSIFICATION", e.COMMENT_CLASSIFICATION = "COMMENT_CLASSIFICATION"
			}(i || (i = {}));
			const o = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return {
						id: e.id,
						displayText: e.text,
						selected: t
					}
				},
				d = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return o(e.tag, t)
				};
			var c;
			! function(e) {
				e.TAGGED = "TAGGED", e.NONE = "NONE"
			}(c || (c = {}))
		},
		"./src/reddit/reducers/features/modUserNotes/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/subredditModeration/constants.ts");
			var i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.Q:
						case s.P:
							return null;
						case s.O:
							return t.payload;
						default:
							return e
					}
				},
				o = r("./src/reddit/models/SubredditModeration/index.ts");
			const d = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.Q: {
							const {
								subredditId: r,
								userId: n,
								filter: s
							} = t.payload, i = Object(o.d)(r, n, s);
							return {
								...e,
								[i]: !0
							}
						}
						case s.P:
						case s.O: {
							const {
								subredditId: r,
								userId: n,
								filter: s
							} = t.payload, i = Object(o.d)(r, n, s);
							return {
								...e,
								[i]: !1
							}
						}
						default:
							return e
					}
				},
				a = Object(n.c)({
					error: i,
					pending: c
				});
			const u = {};
			var l = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.P: {
							const {
								subredditId: r,
								userId: n,
								filter: s,
								fetchedToken: i
							} = t.payload, d = Object(o.d)(r, n, s, i);
							return {
								...e,
								[d]: !0
							}
						}
						default:
							return e
					}
				},
				b = r("./src/redditGQL/types.ts");
			const p = {};
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var r;
				switch (t.type) {
					case s.M: {
						const {
							subredditId: r,
							newModNote: n
						} = t.payload, s = Object(o.d)(r, n.user.id, b.k.All);
						return {
							...e,
							[s]: n.id
						}
					}
					case s.D: {
						const {
							subredditId: n,
							lastAuthorModNote: s
						} = t.payload, i = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id, d = Object(o.d)(n, i, b.k.All);
						return {
							...e,
							[d]: s.id
						}
					}
					case s.C: {
						const {
							subredditId: r,
							lastAuthorModNotes: n
						} = t.payload, s = {};
						return n.forEach(e => {
							var t;
							const n = null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.id,
								i = Object(o.d)(r, n, b.k.All);
							s[i] = e.id
						}), {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.P: {
							const {
								subredditId: e,
								userId: r,
								filter: n,
								loadMoreToken: s
							} = t.payload;
							return {
								[Object(o.d)(e, r, n)]: s
							}
						}
						default:
							return e
					}
				},
				O = r("./node_modules/icepick/icepick.js");
			const j = {};
			var g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.M: {
							const {
								newModNote: r
							} = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case s.D: {
							const {
								lastAuthorModNote: r
							} = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case s.C: {
							const {
								lastAuthorModNotes: r
							} = t.payload;
							return Object(O.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
						}
						case s.P: {
							const {
								notes: r
							} = t.payload;
							return Object(O.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
						}
						case s.N: {
							const {
								noteId: r
							} = t.payload, n = {
								...e
							};
							return delete n[r], n
						}
						default:
							return e
					}
				},
				I = r("./node_modules/lodash/uniq.js"),
				h = r.n(I);
			const y = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var r;
				switch (t.type) {
					case s.M: {
						const {
							subredditId: n,
							newModNote: s,
							filter: i
						} = t.payload;
						if (i !== b.k.All && i !== b.k.Note) return e;
						const d = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id,
							c = Object(o.d)(n, d, i),
							a = i === b.k.All ? b.k.Note : b.k.All,
							u = Object(o.d)(n, d, a);
						return {
							...e,
							[c]: e[c] ? [s.id, ...e[c]] : [s.id],
							[u]: e[u] ? [s.id, ...e[u]] : [s.id]
						}
					}
					case s.P: {
						const {
							notes: r,
							subredditId: n,
							userId: s,
							filter: i
						} = t.payload, d = Object(o.d)(n, s, i), c = r.map(e => e.id);
						return e[d] ? {
							...e,
							[d]: h()([...e[d], ...c])
						} : {
							...e,
							[d]: c
						}
					}
					case s.N: {
						const {
							subredditId: r,
							userId: n,
							noteId: s
						} = t.payload, i = Object(o.d)(r, n, b.k.All), d = Object(o.d)(r, n, b.k.Note), c = e[i] ? e[i].filter(e => e !== s) : [], a = e[d] ? e[d].filter(e => e !== s) : [];
						return {
							...e,
							...e[i] ? {
								[i]: c
							} : null,
							...e[d] ? {
								[d]: a
							} : null
						}
					}
					default:
						return e
				}
			};
			const E = {};
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.M: {
						const {
							subredditId: r,
							newModNote: n,
							filter: s
						} = t.payload, i = Object(o.d)(r, n.user.id, s);
						return {
							...e,
							[i]: e[i] + 1
						}
					}
					case s.hb: {
						const {
							subredditId: r,
							userId: n,
							totalCount: s
						} = t.payload, i = Object(o.d)(r, n, b.k.All);
						return {
							...e,
							[i]: s
						}
					}
					case s.N: {
						const {
							subredditId: r,
							userId: n
						} = t.payload, s = Object(o.d)(r, n, b.k.All);
						return {
							...e,
							...void 0 !== e[s] ? {
								[s]: e[s] - 1
							} : null
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				api: a,
				fetchedTokens: l,
				lastAuthorModNotes: f,
				loadMore: _,
				models: g,
				order: S,
				totalCount: T
			})
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				i = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				o = r("./src/reddit/actions/modQueue/constants.ts"),
				d = r("./src/reddit/actions/pages/constants.ts"),
				c = r("./src/reddit/actions/pages/postCreation.ts"),
				a = r("./src/reddit/actions/pages/postDraft.ts"),
				u = r("./src/reddit/actions/pages/subreddit.ts"),
				l = r("./src/reddit/actions/userFlair/constants.ts");
			const b = {};
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var r, n, p, f, m;
				switch (t.type) {
					case u.SUBREDDIT_LOADED:
					case c.PAGE_LOADED:
					case a.PAGE_LOADED:
					case d.b:
					case d.f:
					case l.k:
						return {
							...e, ...t.payload.userFlair
						};
					case o.i:
					case o.f:
					case o.m:
					case o.p:
					case o.v: {
						const {
							response: r
						} = t.payload, {
							userFlair: n
						} = r, s = {
							...e
						};
						return Object.keys(n).forEach(e => {
							s[e] || (s[e] = n[e])
						}), s
					}
					case l.r: {
						const {
							subredditId: r,
							applied: n,
							displaySettings: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...n && {
									applied: n
								},
								displaySettings: s
							}
						}
					}
					case i.h: {
						const {
							subredditId: r,
							applied: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: n
							}
						}
					}
					case l.j: {
						const {
							subredditId: r,
							isEnabled: n
						} = t.payload, s = {
							...e[r].displaySettings,
							isEnabled: n
						};
						return {
							...e,
							[r]: {
								...e[r],
								displaySettings: s
							}
						}
					}
					case l.d: {
						const {
							subredditId: n,
							canAssignOwn: s
						} = t.payload, i = {
							...null === (r = e[n]) || void 0 === r ? void 0 : r.permissions,
							canAssignOwn: s
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: i
							}
						}
					}
					case l.q: {
						const r = t.payload,
							s = e[r.subredditId],
							i = null === (n = e[r.subredditId]) || void 0 === n ? void 0 : n.templates,
							o = null === (p = e[r.subredditId]) || void 0 === p ? void 0 : p.templateIds,
							d = (null === (f = r.template) || void 0 === f ? void 0 : f.id) || (null === (m = r.template) || void 0 === m ? void 0 : m.templateId);
						if (!d) return;
						const c = {
								...i,
								[d]: r.template
							},
							a = [...o];
						return a.includes(d) || a.push(d), {
							...e,
							[r.subredditId]: {
								...s,
								templates: c,
								templateIds: a
							}
						}
					}
					case l.g: {
						const r = t.payload,
							n = e[r.subredditId],
							i = e[r.subredditId].templates,
							o = e[r.subredditId].templateIds,
							d = s()(i, r.templateId),
							c = o.filter(e => e !== r.templateId);
						return {
							...e,
							[r.subredditId]: {
								...n,
								templates: {
									...d
								},
								templateIds: c
							}
						}
					}
					case l.m:
					case l.l: {
						const r = t.payload,
							n = e[r.subredditId];
						return {
							...e,
							[r.subredditId]: {
								...n,
								templateIds: r.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/ads/constants.ts");
			const i = [];
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.o:
							return t.payload;
						case s.p:
						default:
							return e
					}
				},
				d = r("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.d:
					case d.b:
					case d.h:
					case d.f: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case d.a:
					case d.e: {
						const {
							key: r,
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n || {}
						}
					}
					default:
						return e
				}
			};
			const u = {};
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.c:
					case d.g: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
					case d.i: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !1
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var p = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.d:
						case d.h:
						case d.i: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case d.b:
						case d.a:
						case d.f:
						case d.e: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				f = Object(n.c)({
					error: a,
					fullyLoaded: l,
					pending: p
				}),
				m = r("./src/reddit/actions/comment/constants.ts");
			const _ = [];
			var O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case m.F:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case m.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case m.u:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				j = r("./node_modules/lodash/uniqBy.js"),
				g = r.n(j),
				I = r("./node_modules/lodash/values.js"),
				h = r.n(I),
				y = r("./src/reddit/actions/comment/websocket/constants.ts");
			const S = {};

			function E(e, t) {
				return h()(e).map(e => {
					const r = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
					return {
						id: e.id,
						created: r,
						stickied: e.isStickied,
						authorId: e.authorId
					}
				})
			}

			function T(e) {
				return g()(e, "id").sort((e, t) => e.created - t.created)
			}
			var v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.f:
						case m.w:
						case d.b: {
							const {
								comments: r,
								key: n
							} = t.payload, s = e[n] ? e[n] : [], i = E(r, s.find(e => e.stickied)), o = T([...s, ...i]);
							return {
								...e,
								[n]: [...o]
							}
						}
						case y.b:
						case y.c:
						case y.d:
						case m.K:
						case m.J: {
							const {
								comment: {
									id: r,
									created: n,
									isStickied: s,
									authorId: i
								},
								commentsPageKey: o
							} = t.payload;
							return {
								...e,
								[o]: [...T([...e[o] ? e[o] : [], {
									id: r,
									created: n,
									stickied: s,
									authorId: i
								}])]
							}
						}
						default:
							return e
					}
				},
				x = r("./node_modules/lodash/mapValues.js"),
				w = r.n(x),
				k = r("./src/reddit/helpers/commentList/index.ts"),
				C = r("./src/reddit/models/Comment/index.ts");
			const D = {};

			function N(e) {
				const t = e;
				return w()(t, e => {
					let {
						depth: t,
						next: r,
						prev: n
					} = e;
					return {
						depth: t,
						next: r,
						prev: n
					}
				})
			}
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case m.w: {
						const {
							comments: r,
							commentLists: n,
							continueThreads: s,
							key: i,
							moreCommentsItem: o,
							moreComments: d
						} = t.payload, c = n[o.postId], a = e[i], u = {}, l = a[o.id];
						if (l && l.prev) {
							const {
								id: e
							} = l.prev;
							u[e] = {
								...a[e],
								next: c.head || l.next
							}
						}
						if (l && l.next) {
							const {
								id: e
							} = l.next;
							u[e] = {
								...a[e],
								prev: c.tail || l.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(k.c)({
									commentLink: c.head,
									commentsDict: r,
									moreCommentsDict: d,
									continueThreadDict: s
								}),
								t = Object(k.c)({
									commentLink: c.tail,
									commentsDict: r,
									moreCommentsDict: d,
									continueThreadDict: s
								});
							l && (e.prev = l.prev, t.next = l.next)
						}
						return {
							...e,
							[i]: {
								...e[i],
								...N(r),
								...N(s),
								...N(d),
								...u
							}
						}
					}
					case d.b:
					case d.f: {
						const {
							comments: r,
							continueThreads: n,
							key: s,
							moreComments: i
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...N(r),
								...N(n),
								...N(i)
							}
						}
					}
					case y.b:
					case m.K: {
						const {
							comment: r,
							commentsPageKey: n,
							headCommentId: s
						} = t.payload, i = e[n], o = {};
						let d = null;
						return s && (o[s] = {
							...i[s],
							prev: Object(C.i)(r.id)
						}, d = Object(C.i)(s)), {
							...e,
							[n]: {
								...e[n],
								...o,
								[r.id]: {
									depth: 0,
									next: d,
									prev: null
								}
							}
						}
					}
					case m.J: {
						const {
							comment: r,
							commentsPageKey: n,
							parentCommentId: s,
							depth: i
						} = t.payload, o = e[n], d = {};
						let c = null;
						if (!o[s]) return e;
						const a = o[s].next;
						return a && (d[a.id] = {
							...o[a.id],
							prev: Object(C.i)(r.id)
						}, c = a), d[s] = {
							...o[s],
							next: Object(C.i)(r.id)
						}, {
							...e,
							[n]: {
								...e[n],
								...d,
								[r.id]: {
									depth: i,
									next: c,
									prev: Object(C.i)(s)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const A = {};
			var L = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case y.b:
					case y.c:
					case m.K: {
						const {
							comment: r,
							commentsPageKey: n
						} = t.payload;
						return {
							...e,
							[n]: r.id
						}
					}
					case d.b:
					case d.f: {
						const {
							commentLists: r,
							key: n,
							postId: s
						} = t.payload;
						return {
							...e,
							[n]: r[s] && r[s].head ? r[s].head.id : null
						}
					}
					case d.i: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					default:
						return e
				}
			};
			const P = {};
			var U = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.d:
					case d.b:
					case d.c:
					case d.h: {
						const {
							key: r,
							postId: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case m.K: {
						const {
							parentId: r,
							commentsPageKey: n
						} = t.payload;
						return e[n] ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				api: f,
				followed: O,
				keyToChatCommentLinks: v,
				keyToCommentThreadLinkSets: R,
				keyToHeadCommentId: L,
				keyToPostId: U,
				ads: o
			})
		},
		"./src/reddit/reducers/tags/selected/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s = r("./node_modules/lodash/uniqWith.js"),
				i = r.n(s),
				o = r("./node_modules/lodash/values.js"),
				d = r.n(o),
				c = r("./src/reddit/actions/tags/constants.ts"),
				a = r("./src/reddit/models/Option/index.ts"),
				u = r("./src/reddit/models/Tags/index.ts");
			! function(e) {
				e.ADD = "ADD", e.REMOVE = "REMOVE"
			}(n || (n = {}));
			const l = {
				selectedPrimaryTagId: {},
				selectedOptions: {},
				selectedSuggestedOptions: {},
				deselectedOptions: {},
				deselectedSuggestedOptions: {},
				inputByItemId: {},
				suggestedInputByItemId: {}
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.w:
					case c.r: {
						const {
							subredditId: r,
							itemTags: n,
							suggestedItemTags: s,
							primaryTag: o
						} = t.payload, c = i()([...(e.selectedOptions[r] || []).map(e => {
							if (!e.id) {
								const t = d()(n[r] || {}).find(t => e.displayText.toLowerCase().trim() === t.tag.text.toLowerCase().trim());
								if (t) return {
									...Object(u.e)(t, !0),
									action: null
								}
							}
							return e
						}), ...d()(n[r] || {}).map(e => ({
							...Object(u.e)(e, !0),
							action: null
						}))], a.a);
						let l = e.selectedPrimaryTagId;
						return o && (l = {
							...l,
							[r]: o.tag.id
						}), {
							...e,
							selectedOptions: {
								...e.selectedOptions,
								[r]: c.map(e => ({
									...e,
									action: e.id ? null : e.action
								}))
							},
							selectedSuggestedOptions: {
								...e.selectedSuggestedOptions,
								[r]: d()(s[r] || {}).map(e => ({
									...Object(u.e)(e, !0),
									action: null
								}))
							},
							deselectedOptions: {
								...e.deselectedOptions,
								[r]: []
							},
							selectedPrimaryTagId: l
						}
					}
					case c.D:
					case c.z: {
						const {
							subredditId: r,
							option: s
						} = t.payload, o = t.type === c.z ? "selectedOptions" : "selectedSuggestedOptions", d = t.type === c.z ? "deselectedOptions" : "deselectedSuggestedOptions", u = (e[d][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, s));
						let b = n.ADD;
						return l > -1 && (b = null, u.splice(l, 1)), {
							...e,
							[o]: {
								...e[o],
								[r]: i()([...e[o][r] || [], {
									...s,
									action: b
								}], a.a)
							},
							[d]: {
								...e[d],
								[r]: u
							}
						}
					}
					case c.C:
					case c.y: {
						const {
							subredditId: r,
							option: s
						} = t.payload, i = t.type === c.y ? "selectedOptions" : "selectedSuggestedOptions", o = t.type === c.y ? "deselectedOptions" : "deselectedSuggestedOptions", d = (e[o][r] || []).slice(), u = (e[i][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, s));
						return l > -1 && (null === u[l].action && d.push({
							...u[l],
							action: n.REMOVE
						}), u.splice(l, 1)), {
							...e,
							[i]: {
								...e[i],
								[r]: u
							},
							[o]: {
								...e[o],
								[r]: d
							}
						}
					}
					case c.A: {
						const {
							itemTagsState: r
						} = t.payload, n = Object.keys(r);
						if (!n.length) return e;
						const s = {
								selectedOptions: {},
								deselectedOptions: {},
								inputByItemId: {}
							},
							i = n.reduce((e, t) => (e.selectedOptions[t] = d()(r[t]).map(e => ({
								...Object(u.e)(e, !0),
								action: null
							})), e.deselectedOptions[t] = [], e.inputByItemId[t] = "", e), s);
						return {
							...e,
							inputByItemId: {
								...e.inputByItemId,
								...i.inputByItemId
							},
							selectedOptions: {
								...e.selectedOptions,
								...i.selectedOptions
							},
							deselectedOptions: {
								...e.deselectedOptions,
								...i.deselectedOptions
							}
						}
					}
					case c.B:
					case c.x: {
						const {
							subredditId: r,
							input: n
						} = t.payload, s = t.type === c.x ? "inputByItemId" : "suggestedInputByItemId";
						return {
							...e,
							[s]: {
								...e[s],
								[r]: n
							}
						}
					}
					case c.i:
					case c.h: {
						const {
							subredditId: r,
							primaryTagId: n
						} = t.payload;
						if (!n || !r) return e;
						const s = {
								...e,
								selectedPrimaryTagId: {
									...e.selectedPrimaryTagId,
									[r]: n
								}
							},
							i = e.selectedOptions[r];
						if (i) {
							const t = i.findIndex(e => e.id === n),
								o = [...i];
							return t >= 0 && o.splice(t, 1), {
								...s,
								selectedOptions: {
									...e.selectedOptions,
									[r]: o
								}
							}
						}
						return s
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/PublicAccessNetwork/api.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "m", (function() {
				return f
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "o", (function() {
				return _
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "j", (function() {
				return S
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/objectSelector/index.ts"),
				i = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = r("./src/reddit/helpers/publicAccessNetwork/index.ts");
			const d = e => e.publicAccessNetwork.api.config,
				c = (e, t) => !!t && !!e.publicAccessNetwork.api.error[Object(o.g)(t)],
				a = e => c(e, i.b),
				u = (e, t) => !!t && !!e.publicAccessNetwork.api.pending[Object(o.g)(t)] && e.publicAccessNetwork.api.pending[Object(o.g)(t)].isPending,
				l = e => u(e, i.b),
				b = e => e.publicAccessNetwork.api.pending[i.b] && e.publicAccessNetwork.api.pending[i.b].fetchedUtcTimeStamp,
				p = Object(n.a)(d, e => e.global),
				f = Object(n.a)((e, t) => {
					let {
						subreddit: r
					} = t;
					return r
				}, d, (e, t) => {
					const r = e.toLowerCase();
					return t.subreddits[r]
				}),
				m = Object(n.a)(d, e => e.global.rpan_intro_video_url),
				_ = Object(n.a)(d, e => e.global.url_to_show_for_unavailable_video),
				O = Object(n.a)(d, e => !1),
				j = Object(n.a)(d, e => e.isError),
				g = Object(n.a)(d, e => e.global.max_chat_comment_length),
				I = e => e.publicAccessNetwork.api.recommendedViewerSubreddits,
				h = (Object(n.a)(I, e => e.isError), Object(n.a)(I, e => e.isPending)),
				y = Object(s.a)(Object(n.a)(I, e => e.subreddits)),
				S = Object(n.a)(y, e => [{
					name: "All",
					prefixedName: "All",
					path: Object(o.e)()
				}, ...e.map(e => ({
					name: e,
					prefixedName: `r/${e}`,
					path: Object(o.f)(e)
				}))])
		},
		"./src/reddit/selectors/comments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "u", (function() {
				return O
			})), r.d(t, "w", (function() {
				return j
			})), r.d(t, "x", (function() {
				return g
			})), r.d(t, "k", (function() {
				return h
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "H", (function() {
				return S
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "o", (function() {
				return T
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "h", (function() {
				return w
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "q", (function() {
				return D
			})), r.d(t, "m", (function() {
				return N
			})), r.d(t, "t", (function() {
				return R
			})), r.d(t, "z", (function() {
				return A
			})), r.d(t, "J", (function() {
				return L
			})), r.d(t, "s", (function() {
				return P
			})), r.d(t, "D", (function() {
				return U
			})), r.d(t, "E", (function() {
				return G
			})), r.d(t, "F", (function() {
				return F
			})), r.d(t, "r", (function() {
				return M
			})), r.d(t, "e", (function() {
				return B
			})), r.d(t, "v", (function() {
				return q
			})), r.d(t, "K", (function() {
				return Q
			})), r.d(t, "f", (function() {
				return K
			})), r.d(t, "i", (function() {
				return z
			})), r.d(t, "G", (function() {
				return W
			})), r.d(t, "C", (function() {
				return H
			})), r.d(t, "I", (function() {
				return $
			})), r.d(t, "p", (function() {
				return J
			})), r.d(t, "L", (function() {
				return V
			})), r.d(t, "y", (function() {
				return Y
			})), r.d(t, "A", (function() {
				return X
			})), r.d(t, "B", (function() {
				return Z
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/values.js"),
				s = r.n(n),
				i = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/objectSelector/index.ts"),
				d = r("./src/reddit/constants/comments.ts"),
				c = r("./src/reddit/models/Comment/index.ts"),
				a = r("./src/reddit/models/Post/index.ts"),
				u = r("./src/reddit/selectors/subreddit.ts"),
				l = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/lib/initializeClient/installReducer.ts"),
				p = r("./src/reddit/reducers/features/comments/index.ts"),
				f = r("./src/reddit/reducers/pages/comments/index.ts");
			Object(b.a)({
				features: {
					comments: p.a
				},
				pages: {
					comments: f.a
				}
			});
			const m = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.api.error[r]
				},
				_ = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.api.pending[r]
				},
				O = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.api.fullyLoaded[r]
				},
				j = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				g = (e, t) => {
					const r = j(e, t);
					if (r) return Object(l.b)(e, {
						commentId: r
					})
				},
				I = [],
				h = Object(o.a)((e, t) => {
					const r = g(e, t),
						n = r && r.id;
					if (!n) return I;
					const {
						commentsPageKey: s
					} = t, i = e.pages.comments.keyToCommentThreadLinkSets[s], o = [];
					let c = {
						id: n,
						type: d.a.Comment
					};
					do {
						o.push(c), c = i[c.id].next
					} while (c);
					return o
				}),
				y = (e, t) => j(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				S = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					const n = e.pages.comments.keyToPostId[r];
					return n ? e.posts.models[n] : null
				},
				E = (e, t) => {
					let {
						commentId: r,
						commentLink: n,
						commentsPageKey: s
					} = t;
					const i = e.pages.comments.keyToCommentThreadLinkSets[s];
					return i ? n ? i[n.id] : r ? i[r] : null : null
				},
				T = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.keyToCommentThreadLinkSets[r]
				},
				v = (e, t) => {
					const r = t.commentsPageKey ? E(e, t) : null;
					return r ? r.depth : null
				},
				x = (e, t) => {
					let {
						commentLink: r
					} = t;
					const {
						id: n,
						type: s
					} = r;
					switch (s) {
						case d.a.Comment:
							return e.features.comments.models[n];
						case d.a.MoreComments:
							return e.moreComments.models[n];
						case d.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				w = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, r = Object(a.t)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === r && e.features.comments.models[t].author !== i.E).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				k = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.features.comments.collapsed[r]
				},
				C = e => e.moreComments.models,
				D = e => e.features.comments.models,
				N = (e, t) => {
					let {
						commentId: r
					} = t;
					const n = Object(l.b)(e, {
						commentId: r
					});
					return n ? Object(l.a)(e, n) : ""
				},
				R = (e, t) => {
					let {
						commentId: r
					} = t;
					return !!(r && e.features.comments.focused && e.features.comments.focused[r])
				},
				A = (e, t) => {
					let {
						commentId: r,
						commentsPageKey: n
					} = t;
					return !!(r && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][r])
				},
				L = (e, t) => {
					let {
						commentId: r,
						commentsPageKey: n
					} = t;
					return !!(r && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][r])
				},
				P = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					const n = r && e.features.comments.replyFormOpen[r] || {},
						s = Object.keys(n).find(e => n[e]),
						i = Object(l.b)(e, {
							commentId: s
						}),
						o = i && v(e, {
							commentId: i.id,
							commentLink: void 0,
							commentsPageKey: r
						});
					if (i && "number" == typeof o) return {
						...i,
						depth: o
					}
				},
				U = (e, t) => {
					let {
						moreCommentsId: r
					} = t;
					return e.moreComments.models[r]
				},
				G = (e, t) => {
					let {
						moreCommentsId: r
					} = t;
					return !!e.moreComments.api.pending[r]
				},
				F = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					const n = e.pages.comments.keyToPostId[r];
					if (n) {
						const t = s()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				M = (e, t) => {
					let {
						id: r
					} = t;
					return e.continueThreads.models[r]
				},
				B = (e, t) => {
					let {
						commentId: r
					} = t;
					const n = r ? e.features.comments.models[r] : void 0;
					if (!n) return null;
					const s = e.authorFlair.models[n.subredditId];
					return s ? s[n.author] : null
				},
				q = (e, t) => {
					let {
						draftKey: r
					} = t;
					return !!e.features.comments.submit.error[r]
				},
				Q = (e, t) => {
					let {
						draftKey: r
					} = t;
					const n = e.features.comments.submit.error[r];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				K = (e, t) => {
					let {
						draftKey: r
					} = t;
					const n = e.features.comments.drafts[r];
					return !!n && n.autofocusDisabled
				},
				z = (e, t) => {
					let {
						draftKey: r
					} = t;
					return e.features.comments.drafts[r]
				},
				W = (e, t) => {
					let {
						commentId: r
					} = t;
					const n = r ? e.features.comments.submit.error[r] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				H = (e, t) => {
					let {
						commentId: r
					} = t;
					return !!r && e.features.comments.submit.pending[r]
				},
				$ = (e, t) => {
					let {
						commentId: r
					} = t;
					return !!r && e.features.comments.models[r].sendReplies
				},
				J = e => e.features.comments.visitHighlightFilter,
				V = (e, t) => {
					const r = Object(l.b)(e, t);
					if (r) return Object(u.X)(e, r)
				},
				Y = (e, t) => {
					let {
						commentId: r
					} = t;
					var n, s;
					return !!((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === r)
				},
				X = (e, t) => {
					let {
						commentId: r
					} = t;
					var n, s;
					const i = ((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === r);
					return !!(i && i.expiresAt < Date.now())
				},
				Z = (e, t) => {
					let {
						commentId: r
					} = t, n = Object(l.b)(e, {
						commentId: r
					});
					for (; n && n.parentId;) {
						if (Object(c.g)(n)) return !0;
						if ((n = Object(l.b)(e, {
								commentId: n.parentId
							})) && Object(c.g)(n)) return !0
					}
					return !1
				}
		},
		"./src/reddit/selectors/discoveryUnit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return u
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/constants/index.ts"), r("./src/lib/makeListingKey/index.ts"), r("./src/lib/objectSelector/index.ts");
			var n = r("./src/reddit/helpers/name/index.ts"),
				s = r("./src/reddit/models/DiscoveryUnit/index.ts");
			r("./src/reddit/selectors/category.ts"), r("./src/reddit/selectors/listings.ts"), r("./src/reddit/selectors/posts.ts"), r("./src/reddit/selectors/subreddit.ts");
			const i = e => e.discoveryUnits.api.list.loaded,
				o = e => e.discoveryUnits.api.list.pending,
				d = (e, t) => {
					let {
						unitName: r
					} = t;
					const s = e.discoveryUnits.nameToId[Object(n.g)(r)];
					return e.discoveryUnits.models[s]
				},
				c = e => d(e, {
					unitName: s.b
				}),
				a = new Set(["sequence"]),
				u = e => {
					const t = e.platform.currentPage;
					if (t) {
						const {
							meta: e,
							urlParams: r
						} = t, n = e && e.name || "", s = r && r.subredditName || "", i = "subreddit" === n, o = a.has(s.toLowerCase());
						return i && o
					}
					return !1
				}
		},
		"./src/reddit/selectors/emailVerification.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/selectors/user.ts");
			const i = (e, t) => {
				let {
					pageLayer: r
				} = t;
				return Object(n.N)(r) && !!Object(s.n)(e) && !Object(s.D)(e) && Object(s.Q)(e) && !Object(s.O)(e)
			}
		},
		"./src/reddit/selectors/experiments/autosubscribeLinks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./node_modules/reselect/es/index.js");
			const o = Object(i.a)(e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: n.nb
			}), e => e === n.id)
		},
		"./src/reddit/selectors/experiments/crosspostRecommendations.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "e", (function() {
				return _
			}));
			var n = r("./src/lib/isUrl/index.ts"),
				s = r("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				i = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				d = r("./src/reddit/helpers/isCrosspost.ts"),
				c = r("./src/reddit/models/Media/index.ts"),
				a = r("./src/reddit/selectors/activeModal.ts"),
				u = r("./src/reddit/selectors/experiments/index.ts"),
				l = r("./src/reddit/selectors/posts.ts");
			const b = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: u.e,
						experimentName: i.ne
					}) === i.id
				},
				p = e => !e.media || e.media.type !== c.o.RTJSON && e.media.type !== c.o.TEXT ? "" : e.media.markdownContent,
				f = e => !e.media && e.source && Object(n.a)(e.source.url) ? e.source.displayText : "",
				m = (e, t) => {
					const r = Object(l.G)(e, {
						postId: t
					});
					return r && !r.isSponsored && r.isCrosspostable && !Object(d.a)(r) && Object(a.c)(s.a)(e)
				},
				_ = e => {
					var t;
					return !!(null === (t = e.features) || void 0 === t ? void 0 : t.shouldTryToShowCrosspostModal)
				}
		},
		"./src/reddit/selectors/experiments/econ/powerupsAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = e => Object(i.c)(e, {
					experimentName: s.Mc,
					experimentEligibilitySelector: o.Q
				}),
				c = Object(n.a)(d, e => e === s.od.Community || e === s.od.Supporter)
		},
		"./src/reddit/selectors/experiments/gqlSubredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.yb
				}) === n.ic.Enabled,
				o = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.xb
				}) === n.hc.Enabled
		},
		"./src/reddit/selectors/experiments/onboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/experiments/index.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const c = Object(n.a)(o.e, d.K, (e, t) => e && !t),
				a = e => Object(i.c)(e, {
					experimentEligibilitySelector: c,
					experimentName: s.Vb
				}),
				u = Object(n.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: s.Ub
				}), e => e)
		},
		"./src/reddit/selectors/experiments/postCreationSubRec.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "l", (function() {
				return y
			})), r.d(t, "k", (function() {
				return S
			})), r.d(t, "m", (function() {
				return E
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				i = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				d = r("./src/reddit/models/PostCreationForm/index.ts"),
				c = r("./src/reddit/models/SubredditAutocomplete/index.ts"),
				a = r("./src/reddit/selectors/subreddit.ts");
			const u = 3,
				l = e => b(e) ? 1 : (p(e), .5),
				b = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: i.me
					}) === i.oe.ContentMatch
				},
				p = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: i.me
					}) === i.oe.ConfidenceAndSuccess
				},
				f = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: i.me
					});
					return t === i.oe.ContentMatch || t === i.oe.ConfidenceAndSuccess || t === i.S.Control1 || t === i.S.Control2
				},
				m = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: i.me
					});
					return t === i.S.Control1 || t === i.S.Control2
				},
				_ = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: i.me
					});
					return t === i.oe.ContentMatch || t === i.oe.ConfidenceAndSuccess
				},
				O = e => e.creations.subredditRec.api.pending,
				j = e => e.creations.subredditRec.api.error,
				g = e => {
					return e.creations.subredditRec.order.length > 0
				},
				I = e => {
					const t = e.creations.subredditRec.order,
						r = [];
					return t.forEach(t => {
						const n = Object(a.u)(e, {
								subredditName: t
							}),
							s = Object(a.x)(e, {
								subredditName: t
							});
						if (s && n) {
							const e = {
								iconUrl: s.icon.url,
								name: s.name,
								primaryColor: s.primaryColor,
								subscribers: n.subscribers,
								type: c.a.OTHER_SUBREDDIT
							};
							r.push(e)
						}
					}), r
				},
				h = e => e.creations.subredditRec.isInputChanged,
				y = e => {
					if (!(e.creations.formData.submissionType === n.Wb.POST)) return "";
					const t = e.creations.formState.editorMode === d.i.RICH_TEXT || null === e.creations.formState.editorMode,
						r = e.creations.formState.editorMode === d.i.MARKDOWN;
					if (t) {
						const t = e.creations.formData.body.rte;
						return s.a.getRawText(t, " ") || ""
					}
					return r && e.creations.formData.body.markdown || ""
				},
				S = e => {
					return e.creations.formData.submissionType === n.Wb.LINK_ONLY && e.creations.formData.body.link || ""
				},
				E = e => f(e) && (!j(e) || j(e) && h(e)) && (e => {
					const t = e.creations.formData.title,
						r = S(e),
						n = y(e);
					return !!(t || r || n)
				})(e) && (e.creations.formData.submissionType === n.Wb.POST || e.creations.formData.submissionType === n.Wb.LINK_ONLY || e.creations.formData.submissionType === n.Wb.CROSSPOST)
		},
		"./src/reddit/selectors/experiments/publicAccessNetwork.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => n.Ge.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Ne
				}),
				o = e => n.Ge.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.ze
				}),
				d = (e, t, r) => {
					const i = r(e, t);
					return !(!i || !i.meter) && (i.meter.enabled && n.qf.Enabled === Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.pf
					}))
				},
				c = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Me
				}),
				a = e => {
					switch (e) {
						case n.Re.Five:
							return .05;
						case n.Re.Ten:
							return .1;
						case n.Re.Fifty:
							return .5;
						default:
							return .01
					}
				},
				u = e => n.Ge.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Oe
				}),
				l = e => n.Ge.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Ke
				}),
				b = e => n.Ge.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Le
				})
		},
		"./src/reddit/selectors/experiments/topPosts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const c = Object(n.a)(d.Q, (e, t) => {
					let {
						pageLayer: r
					} = t;
					return Object(i.A)(r)
				}, (e, t) => {
					let {
						pageLayer: r
					} = t;
					return Object(i.N)(r)
				}, (e, t, r) => !e && !t && r),
				a = Object(n.a)((e, t) => Object(o.c)(e, {
					experimentName: s.tc,
					experimentEligibilitySelector: e => c(e, t)
				}), e => e),
				u = e => e === s.mf.NoCommunityWidgets,
				l = e => e === s.mf.NoRulesModerators,
				b = e => e === s.mf.RelatedPostsDu
		},
		"./src/reddit/selectors/externalAccount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return u
			}));
			var n = r("./src/reddit/models/ExternalAccount/index.ts"),
				s = r("./src/reddit/models/User/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const o = (e, t) => {
					let {
						username: r
					} = t;
					return !!e.externalAccount.api.user.pending[r]
				},
				d = (e, t) => {
					let {
						username: r
					} = t;
					return e.externalAccount.user[r]
				},
				c = e => {
					const t = Object(i.k)(e);
					if (!t) return;
					const r = Object(s.e)(t),
						n = d(e, {
							username: r
						});
					return n ? n.twitter : void 0
				},
				a = e => !!e.externalAccount.api.connect.pending[n.a.Twitter],
				u = (e, t) => {
					let {
						profileName: r
					} = t;
					if (!r) return null;
					const o = d(e, {
						username: r
					});
					if (!o) return null;
					const c = o[n.a.Twitter];
					if (!c) return null;
					const a = Object(i.k)(e);
					if (!(a && Object(s.e)(a).toLowerCase() === r.toLowerCase())) return c;
					const u = Object(i.Ab)(e, {
						userName: r
					});
					return u ? u.prefShowTwitter ? c : null : c
				}
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/predictions/index.ts"),
				i = r("./src/reddit/selectors/postCreations.ts");
			Object(n.a)({
				features: {
					predictions: s.a
				}
			});
			const o = e => {
					const t = (e => {
						var t, r;
						return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const r = Object(i.eb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							n = t.formData.polls,
							s = n.options.map(e => ({
								text: e.text
							})),
							o = {};
						return r.document ? o.richText = JSON.stringify({
							document: r.document
						}) : r.markdown && (o.markdown = r.markdown), {
							title: r.title,
							isLiveChat: r.isChatPost,
							isNsfw: r.isNSFW,
							isSpoiler: r.isSpoiler,
							votingEndsAt: n.endDate.toISOString(),
							body: o,
							options: s
						}
					}) : []
				},
				d = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation.length)
				}
		},
		"./src/reddit/selectors/features/predictions/leaderboards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "e", (function() {
				return b
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/predictions/index.ts");
			Object(n.a)({
				features: {
					predictions: s.a
				}
			});
			const i = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || void 0 === s ? void 0 : s.isFetching) || !1
				},
				o = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || void 0 === s ? void 0 : s.isFetched) || !1
				},
				d = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || void 0 === s ? void 0 : s.error) || !1
				},
				c = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || void 0 === s ? void 0 : s.data) || null
				},
				a = (e, t) => {
					var r, n;
					return (null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.tournamentsLeaderboards[t.tournamentId]) || null
				},
				u = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.queriedLeaderboards[t.tournamentId]) || void 0 === s ? void 0 : s.isFetching) || !1
				},
				l = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.queriedLeaderboards[t.tournamentId]) || void 0 === s ? void 0 : s.isFetched) || !1
				},
				b = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.queriedLeaderboards[t.tournamentId]) || void 0 === s ? void 0 : s.error) || !1
				}
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./src/reddit/models/Gold/Powerups/index.ts"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/actions/gold/constants.ts");
			const o = {};
			var d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var r, n;
					switch (t.type) {
						case i.pb:
						case i.qb: {
							const {
								benefitStatuses: n,
								subredditId: s
							} = t.payload;
							if (!n) return e;
							const i = null !== (r = e[s]) && void 0 !== r ? r : {},
								o = {};
							return n.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								o[t] = r
							}), {
								...e,
								[s]: {
									...i,
									...o
								}
							}
						}
						case i.N: {
							const {
								benefitStatuses: r,
								subredditId: s
							} = t.payload, i = null !== (n = e[s]) && void 0 !== n ? n : {}, o = {};
							return r.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								o[t] = r
							}), {
								...e,
								[s]: {
									...i,
									...o
								}
							}
						}
						default:
							return e
					}
				},
				c = r("./node_modules/reselect/es/index.js");
			Object(s.a)({
				features: {
					powerupsBenefitSettings: d
				}
			});
			const a = (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? e.features.powerupsBenefitSettings[r] : null
				},
				u = (e => Object(c.a)(a, t => !!(null == t ? void 0 : t[e])))(n.a.CommentsWithGifs)
		},
		"./src/reddit/selectors/inlineSubredditEditing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/reddit/featureFlags/index.ts"),
				s = r("./src/reddit/selectors/moderatorPermissions.ts");
			const i = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!n.d.subredditInlineEditing(e)) return !1;
					const i = r ? Object(s.n)(e, {
						subredditId: r
					}) : null;
					return !!i && (e => !!e && e.config)(i)
				},
				o = e => e.subreddits.api.inlineEditing.pending
		},
		"./src/reddit/selectors/modUserNotes.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "f", (function() {
				return p
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/models/SubredditModeration/index.ts"),
				i = r("./src/redditGQL/types.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/reducers/features/modUserNotes/index.ts");
			Object(o.a)({
				features: {
					modUserNotes: d.a
				}
			});
			const c = Object(n.a)((e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: i
					} = t;
					const o = Object(s.d)(r, n, i),
						d = e.features.modUserNotes.order[o];
					return d ? d.map(t => e.features.modUserNotes.models[t]) : []
				}),
				a = (e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: i
					} = t;
					const o = Object(s.d)(r, n, i);
					return e.features.modUserNotes.api.pending[o]
				},
				u = e => e.features.modUserNotes.api.error,
				l = (e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: i
					} = t;
					const o = Object(s.d)(r, n, i);
					return e.features.modUserNotes.loadMore[o]
				},
				b = (e, t, r) => {
					if (!t || !r) return;
					const n = e.features.modUserNotes.lastAuthorModNotes[Object(s.d)(r, t, i.k.All)];
					return n ? e.features.modUserNotes.models[n] : void 0
				},
				p = (e, t, r) => {
					if (!t || !r) return;
					return e.features.modUserNotes.totalCount[Object(s.d)(r, t, i.k.All)]
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = (e, t) => {
					let {
						commentId: r,
						commentsPageKey: n
					} = t;
					if (!r) return !1;
					if (e.features.comments.collapsed[n] && r in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][r];
					const s = e.features.comments.models[r];
					return !!s && ("computedCollapsed" in s ? !!s.computedCollapsed : s.collapsedBecauseCrowdControl ? !e.modModeEnabled : s.collapsed)
				},
				s = (e, t) => {
					let {
						commentId: r
					} = t;
					if (!r) return !1;
					const n = e.features.comments.models[r];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		},
		"./src/reddit/selectors/onboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "e", (function() {
				return O
			}));
			var n = r("./src/lib/safeJSONParse/index.ts"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/constants/parameters.ts"),
				d = r("./src/reddit/helpers/onboarding/reonboarding.ts"),
				c = r("./src/reddit/selectors/activeModal.ts"),
				a = r("./src/reddit/selectors/emailVerification.ts"),
				u = r("./src/reddit/selectors/experiments/onboarding.ts"),
				l = r("./src/reddit/selectors/platform.ts"),
				b = r("./src/reddit/selectors/user.ts");
			const p = e => {
					const t = Object(l.q)(e);
					return Boolean((null == t ? void 0 : t[o.x]) && Object(n.a)(t[o.x]))
				},
				f = Object(s.a)(b.Q, b.P, p, (e, t, r) => (e || t) && r),
				m = e => {
					const {
						genderUpdateState: t
					} = e.onboarding;
					if (t.success || t.failure) return t
				},
				_ = Object(s.a)(u.b, e => e.onboarding.interestTopicRecommendationsState, (e, t) => e && !Object(i.Bf)(e) ? t : null),
				O = Object(s.a)(u.b, c.b, a.a, (e, t, r) => e === i.hb.PopoverFeed15 && Object(d.c)() && !t && !r)
		},
		"./src/reddit/selectors/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/selectors/user.ts");
			const i = e => !Object(s.Q)(e) && e.seo.linksModule.frontpage || null,
				o = e => {
					const t = e.split("/");
					if ("r" === t[1]) return t[2]
				},
				d = Object(n.a)(i, e => e ? e.map(e => ({
					...e,
					links: e.links.map(e => ({
						...e,
						title: o(e.url)
					})).filter(e => e.title)
				})) : null),
				c = Object(n.a)(d, e => e ? e.map(e => ({
					...e,
					links: e.links.filter(e => e.visible)
				})) : null),
				a = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = ((e, t) => {
						let {
							subredditId: r
						} = t;
						return e.seo.linksModule.subreddits && e.seo.linksModule.subreddits[r]
					})(e, {
						subredditId: r
					});
					return n && n.subreddits
				}
		},
		"./src/reddit/selectors/seo/topicLinks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					subredditId: r
				} = t;
				return e.seo.topicLinks.subreddits && e.seo.topicLinks.subreddits[r]
			}
		},
		"./src/reddit/selectors/tags.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return l
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "A", (function() {
				return m
			})), r.d(t, "B", (function() {
				return _
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "j", (function() {
				return j
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "t", (function() {
				return y
			})), r.d(t, "p", (function() {
				return v
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "o", (function() {
				return D
			})), r.d(t, "k", (function() {
				return N
			})), r.d(t, "z", (function() {
				return R
			})), r.d(t, "y", (function() {
				return A
			})), r.d(t, "u", (function() {
				return L
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "q", (function() {
				return U
			})), r.d(t, "C", (function() {
				return G
			})), r.d(t, "w", (function() {
				return F
			})), r.d(t, "s", (function() {
				return B
			})), r.d(t, "x", (function() {
				return q
			})), r.d(t, "h", (function() {
				return Q
			})), r.d(t, "v", (function() {
				return K
			})), r.d(t, "D", (function() {
				return z
			})), r.d(t, "m", (function() {
				return W
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/some.js"),
				s = r.n(n),
				i = r("./node_modules/lodash/values.js"),
				o = r.n(i),
				d = r("./src/lib/objectSelector/index.ts"),
				c = r("./src/reddit/helpers/tags/index.ts"),
				a = r("./src/reddit/models/Tags/index.ts");
			const u = e => e.tags.creation.selectedOptions || [],
				l = e => {
					const t = [];
					for (let r = 0; r < u(e).length; r++) u(e)[r].id && t.push(u(e)[r].id);
					return t || []
				},
				b = e => (u(e) || []).filter(e => !!e.displayText).map(e => e.displayText),
				p = e => {
					const t = [];
					for (let r = 0; r < u(e).length; r++) u(e)[r].id || t.push(u(e)[r].displayText);
					return t || []
				},
				f = e => Object.keys(e.tags.models.globalSubredditTags).length > 0,
				m = e => e.tags.api.create.error || e.tags.api.deleteTag.error || e.tags.api.fetch.error || e.tags.api.update.error,
				_ = e => e.tags.api.create.pending || e.tags.api.deleteTag.pending || e.tags.api.fetch.pending || e.tags.api.update.pending,
				O = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.inputByItemId[r] || ""
				},
				j = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.suggestedInputByItemId[r] || ""
				},
				g = [],
				I = (e, t) => {
					let {
						subredditId: r
					} = t;
					return s()(h(e, {
						subredditId: r
					}), e => !!e.action) || s()(S(e, {
						subredditId: r
					}), e => !!e.action)
				},
				h = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.selectedOptions[r] || g
				},
				y = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.selectedSuggestedOptions[r] || g
				},
				S = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.deselectedOptions[r] || g
				},
				E = {},
				T = {},
				v = e => e.tags.availableGlobalTagOrder.recommendedGlobal.map(t => e.tags.models.globalSubredditTags[t]),
				x = e => e.tags.models.globalSubredditTags,
				w = e => e.tags.availableGlobalTagOrder.global.map(t => e.tags.models.globalSubredditTags[t]),
				k = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.models.subredditScopedTags[r] || T
				},
				C = (e, t) => {
					const r = o()(t);
					for (let n = 0; n < r.length; n++)
						if (r[n].text.toLowerCase().trim() === e.toLowerCase().trim()) return r[n];
					return null
				},
				D = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.itemTags[r] || E
				},
				N = (e, t) => {
					let {
						itemId: r
					} = t;
					return !!e.tags.models.itemTags[r]
				},
				R = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.suggestedItemTags[r] || E
				},
				A = (e, t) => {
					let {
						itemId: r
					} = t;
					return o()(R(e, {
						itemId: r
					})).filter(e => e.isRelevant).map(e => Object(a.e)(e, !0))
				},
				L = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.sortedItemTags[r] || []
				},
				P = Object(d.a)((e, t) => {
					let {
						thingId: r,
						suggested: n = !1
					} = t;
					const s = F(e, {
						subredditId: r
					});
					return o()(((e, t) => {
						let {
							thingId: r,
							suggested: n = !1
						} = t;
						const s = (n ? j(e, {
								subredditId: r
							}) : O(e, {
								subredditId: r
							})) ? w(e) : v(e),
							i = n ? y(e, {
								subredditId: r
							}) : h(e, {
								subredditId: r
							}),
							o = s.reduce((e, t) => (e[t.id] = Object(a.f)(t), e), {});
						return i.reduce((e, t) => (t.id && e[t.id] && (e[t.id].selected = !0), e), o)
					})(e, {
						thingId: r,
						suggested: n
					})).filter(e => !e.selected && e.id !== s)
				}),
				U = (e, t) => {
					let {
						subredditId: r
					} = t;
					return h(e, {
						subredditId: r
					}).concat(S(e, {
						subredditId: r
					}))
				},
				G = (e, t) => {
					let {
						subredditId: r
					} = t;
					return h(e, {
						subredditId: r
					}).filter(c.b).map(e => ({
						text: e.displayText,
						type: a.c.CLASSIFICATION
					}))
				},
				F = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.models.subredditPrimaryTagId[r] || null
				},
				M = (e, t) => t && e.tags.models.globalSubredditTags[t] || null,
				B = (e, t) => {
					const r = e.tags.selected.selectedPrimaryTagId[t.subredditId] || null;
					return M(e, r)
				},
				q = (e, t) => {
					const r = F(e, t);
					return M(e, r)
				},
				Q = e => e.tags.creation.selectedPrimaryTagId || null,
				K = e => {
					const t = Q(e);
					return M(e, t)
				},
				z = e => e.tags.api.updatePrimaryTag.pending,
				W = (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object.keys(D(e, {
						itemId: r
					})).length > 0
				}
		},
		"./src/reddit/selectors/tooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			}));
			const n = e => e.tooltip.tooltipId,
				s = e => t => t.tooltip.tooltipId === e,
				i = e => e.tooltip.params
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return f
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				i = r("./src/reddit/selectors/gold/powerups/index.ts"),
				o = r("./src/reddit/selectors/moderatorPermissions.ts"),
				d = r("./src/lib/initializeClient/installReducer.ts"),
				c = r("./src/reddit/reducers/features/userFlair/index.ts");
			Object(d.a)({
				features: {
					userFlair: c.a
				}
			});
			const a = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.features.userFlair[r]
				},
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					var n, s;
					return null === (n = e.features.userFlair[r]) || void 0 === n || !n.displaySettings || !!(null === (s = e.features.userFlair[r].displaySettings) || void 0 === s ? void 0 : s.isEnabled)
				},
				l = (e, t) => {
					let {
						subredditId: r
					} = t;
					var n, i;
					return (null === (n = e.features.userFlair[r]) || void 0 === n ? void 0 : n.displaySettings) ? null === (i = e.features.userFlair[r].displaySettings) || void 0 === i ? void 0 : i.position : s.b.Right
				},
				b = Object(n.a)((e, t) => {
					let {
						subredditId: r
					} = t;
					const n = a(e, {
						subredditId: r
					});
					if (n && n.displaySettings && n.permissions) return {
						type: s.d.UserFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				p = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = u(e, {
							subredditId: r
						}),
						s = b(e, {
							subredditId: r
						}),
						i = a(e, {
							subredditId: r
						});
					if (!n || !s || !i) return !1;
					if (i.applied) return !0;
					const d = Object(o.g)(e, {
							subredditId: r
						}),
						{
							canUserChange: c
						} = s.permissions;
					return !!(i.templateIds || []).find(e => {
						return !i.templates[e].modOnly || d
					}) && c
				},
				f = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return !1;
					const n = p(e, {
							subredditId: r
						}),
						s = Object(i.h)(e, {
							subredditId: r
						});
					return n || s
				}
		},
		"./src/reddit/selectors/widgets.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "k", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "b", (function() {
				return I
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/constants/posts.ts"),
				i = r("./src/reddit/helpers/name/index.ts"),
				o = r("./src/reddit/helpers/widgets/index.tsx"),
				d = r("./src/reddit/selectors/profile.ts"),
				c = r("./src/reddit/selectors/subreddit.ts");
			const a = [],
				u = e => e.widgets.models,
				l = Object(n.a)((e, t) => Object(o.l)(t) ? e.widgets.models[t.widgetId] : Object(o.f)(t.widgetKind)),
				b = (e, t) => e.widgets.idCardIds[t.subredditId],
				p = (e, t) => {
					let r = t.subredditId;
					if (!r && t.subredditName && (r = Object(c.D)(e, t.subredditName)), r) {
						const t = b(e, {
							subredditId: r
						});
						if (t) return e.widgets.models[t]
					}
					return null
				},
				f = (e, t) => e.widgets.sidebar[t.subredditId] || [],
				m = (e, t) => e.widgets.menuIds[t.subredditId],
				_ = (e, t) => {
					const r = m(e, t);
					return r ? e.widgets.models[r] : null
				},
				O = (e, t) => {
					const r = e.widgets.sidebar[t.subredditId];
					return Array.isArray(r) ? r.reduce((t, r) => {
						const n = e.widgets.models[r];
						return n && t.push(n.kind), t
					}, []) : a
				},
				j = (e, t) => {
					const r = f(e, t);
					for (const n of r) {
						const t = e.widgets.models[n];
						if ("subreddit-rules" === t.kind) return t
					}
					return null
				},
				g = (e, t) => {
					const r = f(e, t).map(t => e.widgets.models[t]).filter(e => "post-flair" === e.kind);
					return r.length ? r : null
				},
				I = Object(n.a)((e, t) => {
					if (t.type === s.a.PROFILE) {
						const r = Object(d.j)(e, {
							profileName: t.name
						});
						return r ? {
							profile: {
								id: r.id,
								name: Object(i.g)(r.name)
							}
						} : {}
					}
					const r = Object(c.x)(e, {
							subredditName: t.name
						}),
						n = Object(c.u)(e, {
							subredditName: t.name
						});
					return {
						subreddit: {
							categoryName: n ? n.contentCategory : null,
							id: r.id,
							name: Object(i.g)(r.name)
						}
					}
				})
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"e77b2360963c"}')
		},
		"./src/redditGQL/operations/CancelPrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"fac88c91fec8"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"614dbb8a54d2"}')
		},
		"./src/redditGQL/operations/ChangePredictionVote.json": function(e) {
			e.exports = JSON.parse('{"id":"90c7b71fa93f"}')
		},
		"./src/redditGQL/operations/CommentsPageLastAuthorModNotes.json": function(e) {
			e.exports = JSON.parse('{"id":"1b7d106afc6c"}')
		},
		"./src/redditGQL/operations/CreateCustomEmoji.json": function(e) {
			e.exports = JSON.parse('{"id":"e443629d50b0"}')
		},
		"./src/redditGQL/operations/CreateModUserNote.json": function(e) {
			e.exports = JSON.parse('{"id":"10ad38be41ae"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"ec74ef5afe19"}')
		},
		"./src/redditGQL/operations/CreateSubredditTags.json": function(e) {
			e.exports = JSON.parse('{"id":"80c9a3cd96b8"}')
		},
		"./src/redditGQL/operations/DeleteCustomEmoji.json": function(e) {
			e.exports = JSON.parse('{"id":"c13d195ee7ca"}')
		},
		"./src/redditGQL/operations/DeleteModUserNote.json": function(e) {
			e.exports = JSON.parse('{"id":"c44e6467c4d7"}')
		},
		"./src/redditGQL/operations/EnablePowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"059b6d024156"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"a141637b546a"}')
		},
		"./src/redditGQL/operations/FetchContentControls.json": function(e) {
			e.exports = JSON.parse('{"id":"c822b1f9fc9b"}')
		},
		"./src/redditGQL/operations/FetchGlobalTags.json": function(e) {
			e.exports = JSON.parse('{"id":"f4a581740c21"}')
		},
		"./src/redditGQL/operations/FetchSubredditTags.json": function(e) {
			e.exports = JSON.parse('{"id":"bac623887684"}')
		},
		"./src/redditGQL/operations/FetchSubredditsNotificationSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"5d042135b4c5"}')
		},
		"./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json": function(e) {
			e.exports = JSON.parse('{"id":"cbcafcbff9c6"}')
		},
		"./src/redditGQL/operations/GetModUserNotes.json": function(e) {
			e.exports = JSON.parse('{"id":"0eb0efc0bf02"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionCreationAllowance.json": function(e) {
			e.exports = JSON.parse('{"id":"d9fb5ec5128f"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetSubredditQuestions.json": function(e) {
			e.exports = JSON.parse('{"id":"15c4ad40a0bc"}')
		},
		"./src/redditGQL/operations/GetTotalModNoteCount.json": function(e) {
			e.exports = JSON.parse('{"id":"512416f312ac"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"17f4fcd0e341"}')
		},
		"./src/redditGQL/operations/GetTournamentsBaseInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"cebfc8734cec"}')
		},
		"./src/redditGQL/operations/LiveVideoPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"b3343d9362cd"}')
		},
		"./src/redditGQL/operations/MaybeDeleteTagsAndUpdateItemTags.json": function(e) {
			e.exports = JSON.parse('{"id":"023547ccdaf6"}')
		},
		"./src/redditGQL/operations/ModQueueItems.json": function(e) {
			e.exports = JSON.parse('{"id":"cea01edf3e6c"}')
		},
		"./src/redditGQL/operations/ModQueueTriggers.json": function(e) {
			e.exports = JSON.parse('{"id":"de8696c3b5fd"}')
		},
		"./src/redditGQL/operations/OpenAISubRecWithDetail.json": function(e) {
			e.exports = JSON.parse('{"id":"dbe9bd4b6dd3"}')
		},
		"./src/redditGQL/operations/ReallocatePowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"d02bf38ca840"}')
		},
		"./src/redditGQL/operations/RedditorPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"e2bcd0fbaace"}')
		},
		"./src/redditGQL/operations/ReportMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"ae01229e1caa"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditAbout.json": function(e) {
			e.exports = JSON.parse('{"id":"8c1affff4f18"}')
		},
		"./src/redditGQL/operations/SubredditFlairedRedditorByName.json": function(e) {
			e.exports = JSON.parse('{"id":"11aba1560164"}')
		},
		"./src/redditGQL/operations/SubredditFlairedRedditors.json": function(e) {
			e.exports = JSON.parse('{"id":"d343c3cad2d0"}')
		},
		"./src/redditGQL/operations/SubredditInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"29aee4089528"}')
		},
		"./src/redditGQL/operations/SubredditPage.json": function(e) {
			e.exports = JSON.parse('{"id":"6618111329c1"}')
		},
		"./src/redditGQL/operations/SubredditPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"82cb30f7f636"}')
		},
		"./src/redditGQL/operations/SubredditPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"8d2145ac1ec5"}')
		},
		"./src/redditGQL/operations/SubredditPowerupsFull.json": function(e) {
			e.exports = JSON.parse('{"id":"5ef02d19b2e0"}')
		},
		"./src/redditGQL/operations/SubredditRules.json": function(e) {
			e.exports = JSON.parse('{"id":"c398abb500f1"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"a9f7697930b7"}')
		},
		"./src/redditGQL/operations/SubredditTournamentLeaderboard.json": function(e) {
			e.exports = JSON.parse('{"id":"e14e6d1892e6"}')
		},
		"./src/redditGQL/operations/SubredditsPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"1cd60899cb27"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		},
		"./src/redditGQL/operations/TopAwardedPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"227597709dbb"}')
		},
		"./src/redditGQL/operations/TopAwardersLeaderboard.json": function(e) {
			e.exports = JSON.parse('{"id":"750ff4a757de"}')
		},
		"./src/redditGQL/operations/UpdateCommentDistinguishState.json": function(e) {
			e.exports = JSON.parse('{"id":"e1f407c8ceba"}')
		},
		"./src/redditGQL/operations/UpdateCommentStickyState.json": function(e) {
			e.exports = JSON.parse('{"id":"236938d65d55"}')
		},
		"./src/redditGQL/operations/UpdateHatefulContentFilters.json": function(e) {
			e.exports = JSON.parse('{"id":"0f2f2af43b20"}')
		},
		"./src/redditGQL/operations/UpdatePostRequirements.json": function(e) {
			e.exports = JSON.parse('{"id":"8732ab4560ce"}')
		},
		"./src/redditGQL/operations/UpdatePowerupsSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"699ae1616006"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"871996bf9044"}')
		},
		"./src/redditGQL/operations/UpdateSubredditNotificationSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"0af4f630a2e1"}')
		},
		"./src/redditGQL/operations/UpdateSubredditPrimaryTag.json": function(e) {
			e.exports = JSON.parse('{"id":"a2d0aa1efdbc"}')
		},
		"./src/redditGQL/operations/UpdateSubredditTagStatesRelevance.json": function(e) {
			e.exports = JSON.parse('{"id":"ee43ccb6e5eb"}')
		},
		"./src/redditGQL/operations/UserPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"5460e33eb672"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"484780ada6a2"}')
		},
		"./src/redditGQL/operations/WhereToPostSubRec.json": function(e) {
			e.exports = JSON.parse('{"id":"41255f023802"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~ReportFlow~Subreddit.b91081f04a9ebfc1d4d3.js.map