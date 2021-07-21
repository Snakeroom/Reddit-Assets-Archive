// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.ff710d3362f438df7add.js
// Retrieved at 7/21/2021, 4:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~ModListing~Reddit~Subreddit"], {
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var i = r("./node_modules/react/index.js"),
				o = r.n(i),
				n = r("./src/lib/CSSVariableProvider/index.tsx");

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const t = t => o.a.createElement(n.b.Consumer, null, r => o.a.createElement(e, s({
					theme: r
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
		},
		"./src/lib/constants/icons.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			const i = {
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
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, r) {
			"use strict";

			function i(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			r.d(t, "a", (function() {
				return i
			}))
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "c", (function() {
				return c
			}));
			var i = r("./src/lib/makeActionCreator/index.ts");
			const o = "EMBEDS__UNLOADABLE",
				n = "EMBEDS__LOADABLE",
				s = Object(i.a)(o),
				c = Object(i.a)(n)
		},
		"./src/reddit/actions/postList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return a
			}));
			var i = r("./src/lib/makeActionCreator/index.ts"),
				o = (r("./src/reddit/actions/embedAndImage.ts"), r("./src/reddit/actions/video.ts"), r("./src/reddit/helpers/trackers/postList.ts"));
			r("./src/reddit/constants/postLayout.ts"), r("./src/reddit/models/Media/index.ts"), r("./src/reddit/selectors/platform.ts"), r("./src/reddit/selectors/posts.ts");
			r("./src/reddit/selectors/video.ts");
			const n = "POSTLIST__MARKED_END",
				s = "POSTLIST__UNMARKED_END",
				c = Object(i.a)(n),
				l = Object(i.a)(s),
				a = (e, t) => async (r, i) => {
					const n = i();
					e in n.listings.postOrder.fetchedTokens ? e in n.listings.postOrder.ids ? r(l({
						listingKey: e
					})) : o.l(n, e) : r(c({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			r("./node_modules/react/index.js");
			const i = e => new Promise((t, r) => {
				const i = new Image;
				i.onload = () => t(i), i.onerror = r, i.src = e
			})
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./node_modules/lottie-web/build/player/lottie.js"),
				o = r.n(i),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				c = r("./src/reddit/components/LottieAnimation/util.ts");
			const l = s.a.memo(e => {
				const t = s.a.createRef(),
					{
						assetData: r,
						assetUrl: i,
						className: l,
						hidden: a,
						loop: d,
						useCanvasRenderer: u,
						onClick: f,
						prefersReducedAnimation: _
					} = e,
					[p, m] = Object(n.useState)(r);
				Object(n.useEffect)(() => {
					i ? Object(c.a)(i).then(m) : r && m(r)
				}, [i, r]);
				const [b, h] = Object(n.useState)(null);
				Object(n.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || b || !p) return;
					const r = o.a.loadAnimation({
						autoplay: !1,
						renderer: u ? "canvas" : "svg",
						loop: d,
						container: e,
						animationData: p
					});
					h(r)
				}, [d, t, b, p]), Object(n.useEffect)(() => {
					if (b)
						if (a) b.stop();
						else if (_) {
						const e = b.getDuration(!0);
						b.goToAndPlay(e, !0)
					} else b.goToAndPlay(0)
				}, [a, _, b]);
				const g = Object(n.useCallback)(() => {
					b && b.goToAndPlay(0)
				}, [b]);
				return s.a.createElement("div", {
					className: l,
					style: {
						display: a ? "none" : "block"
					},
					ref: t,
					onClick: f || g
				})
			});
			t.a = l
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			r("./src/reddit/components/ImageWithFallback/index.tsx");
			const i = {};

			function o(e) {
				let t = i[e];
				return t || (t = i[e] = fetch(e, {
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
				return i
			}));
			var i, o, n = r("./node_modules/react/index.js"),
				s = r.n(n),
				c = r("./node_modules/react-redux/es/index.js"),
				l = r("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(i || (i = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(o || (o = {}));
			var a = r("./src/lib/constants/index.ts"),
				d = r("./src/reddit/helpers/postCollection.ts");
			const u = [a.Jb.COMMENTS, a.Jb.COLLECTION_COMMENTS],
				f = (e, t) => {
					if (!e) return [];
					const r = u.includes(e),
						o = e === a.Jb.COLLECTION_COMMENTS || t && Object(d.a)(t),
						n = a.T.has(e),
						s = a.zb.has(e),
						c = e === a.Jb.SUBREDDIT,
						l = e === a.Jb.TOPIC;
					let f, _, p;
					return n && !c || s ? f = i.HeaderSelector : o ? f = i.Collection : r ? f = i.PostComments : l && (f = i.TopicHeader), (n || s || o || r) && (_ = i.Widget), (n || r) && (p = i.PostItem), [f, _, p]
				};
			var _ = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/selectors/platform.ts"),
				m = r("./src/reddit/components/SEOTitle/index.m.less"),
				b = r.n(m);
			const h = ({
					level: e,
					children: t
				}) => {
					const r = `h${e}`;
					return s.a.createElement(r, {
						className: b.a.Title
					}, t)
				},
				g = Object(_.t)(),
				v = Object(c.b)(() => Object(l.a)((e, {
					pageLayer: t
				}) => t && Object(p.l)(e, {
					page: t
				}), (e, {
					pageLayer: t
				}) => t && t.meta && t.meta.name, (e, {
					type: t
				}) => t, (e, t, r) => ({
					level: f(t, e).indexOf(r) + 1 || void 0
				})));
			class O extends s.a.Component {
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
			t.b = g(v(O))
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
				return I
			}));
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				n = r.n(o),
				s = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/UserIcon/index.tsx"),
				d = r("./src/reddit/constants/colors.ts"),
				u = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				_ = r("./src/reddit/icons/fonts/index.tsx"),
				p = r("./src/reddit/models/Subreddit/index.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				b = r("./src/reddit/components/SubredditIcon/index.m.less"),
				h = r.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				}).apply(this, arguments)
			}
			const v = l.a.wrapped(a.a, "UserIcon", h.a),
				O = l.a.img("Image", h.a),
				y = ({
					iconColor: e,
					...t
				}) => n.a.createElement(O, g({
					style: {
						backgroundColor: e || ""
					}
				}, t)),
				I = l.a.div("BackupImage", h.a),
				w = Object(u.t)();
			t.b = w(e => {
				const t = Object(s.e)(m.V);
				let r, o, l;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: i
					} = Object(f.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(p.h)(e.subredditOrProfile) ? l = n.a.createElement(v, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (r = t, o = i)
				} else r = e.iconUrl, o = e.primaryColor || d.b.alienblue;
				return r ? l = n.a.createElement(y, {
					alt: i.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: o,
					role: "presentation",
					src: r
				}) : l || (l = n.a.createElement(_.a, {
					name: "community",
					isFilled: !t,
					className: Object(c.a)(e.className, h.a.defaultCommunityIcon, {
						[h.a.mNightmode]: t
					}),
					style: t ? {
						backgroundColor: e.redditStyle ? d.b.alienblue : o
					} : {
						color: e.redditStyle ? d.b.alienblue : o
					}
				})), e.linkTo ? n.a.createElement("a", {
					href: e.linkTo
				}, l) : n.a.createElement(n.a.Fragment, null, l)
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
			var i = r("./node_modules/react/index.js"),
				o = r.n(i),
				n = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				c = r("./src/telemetry/index.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				}).apply(this, arguments)
			}
			const a = o.a.createContext(() => {});

			function d({
				children: e
			}) {
				const t = Object(n.f)(),
					r = Object(i.useCallback)(e => {
						{
							const r = t.getState(),
								i = e(r);
							Object(c.a)({
								...s.defaults(r),
								...i
							})
						}
					}, [t]);
				return o.a.createElement(a.Provider, {
					value: r
				}, e ? o.a.Children.only(e) : null)
			}

			function u() {
				return Object(i.useContext)(a)
			}

			function f(e) {
				function t(t) {
					const r = u();
					return o.a.createElement(e, l({}, t, {
						sendEvent: r
					}))
				}
				const r = e.name || e.displayName;
				return t.displayName = `Tracked(${r})`, t.WrappedComponent = e, t
			}
		},
		"./src/reddit/components/UserIcon/PresenceDot.tsx": function(e, t, r) {
			"use strict";
			var i = r("./node_modules/react/index.js"),
				o = r.n(i),
				n = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = r("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				l = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				a = r.n(l);
			t.a = e => {
				const {
					showPresence: t,
					onceInViewport: r
				} = e, l = Object(i.useRef)(null), d = Object(i.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && r && r()
					})
				}, [r]);
				return Object(s.a)(l, d), o.a.createElement(c.a, {
					ref: l,
					className: Object(n.a)(a.a.presenceDot, {
						[a.a.isLit]: t
					}),
					isHighlighted: e.isHighlighted,
					outlineClassName: e.outlineClassName
				})
			}
		},
		"./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx": function(e, t, r) {
			"use strict";
			var i = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				n = r.n(o),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				l = r.n(c);
			t.a = function({
				backgroundClassName: e,
				className: t,
				headshot: r
			}) {
				return n.a.createElement("div", {
					className: Object(s.a)(l.a.snoovatarWrapper, t)
				}, n.a.createElement("div", {
					className: Object(s.a)(l.a.snoovatarBackground, e)
				}), n.a.createElement("div", {
					className: l.a.snoovatarHeadshotContainer
				}, n.a.createElement("img", {
					alt: i.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: l.a.snoovatarHeadshot,
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
				return _
			})), r.d(t, "c", (function() {
				return p
			}));
			var i = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				c = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				f = r.n(u);
			const _ = `${i.a.assetPath}/img/avatar_over18_square.png`,
				p = e => !e || e.includes("avatar_default_");
			t.b = e => {
				const {
					className: t,
					iconUrl: r,
					isCurrentUser: i,
					isNightMode: n,
					isNSFW: u,
					nsfwIconUrl: m,
					shouldHideNSFW: b
				} = e;
				if (Object(c.e)(e => {
						p(r) && Object(d.f)(e)
					}), i && p(r) || !i && !r) return s.a.createElement(a.a, {
					className: Object(l.a)(f.a.DefaultUserIcon, t, {
						[f.a.mNightmode]: n
					})
				});
				const h = !i && u && b ? m || _ : r;
				return s.a.createElement("img", {
					alt: o.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(l.a)(f.a.UserIcon, t),
					src: h
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				n = r.n(o),
				s = r("./src/config.ts"),
				c = r("./node_modules/react-redux/es/index.js"),
				l = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = r("./src/reddit/models/User/index.ts"),
				u = r("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				f = r("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				_ = r("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = r("./src/reddit/selectors/user.ts"),
				m = r("./src/reddit/components/LottieAnimation/index.tsx"),
				b = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				h = r.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(l.c)({
					currentUser: p.j,
					isNightMode: p.V,
					shouldHideNSFW: p.B,
					user: p.mb
				}),
				O = Object(c.b)(v);
			t.a = O(e => {
				const {
					currentUser: t,
					iconUrl: r,
					isHighlighted: o,
					isNSFW: c,
					shouldShowPresenceIndicator: l,
					user: p,
					userName: b,
					onPresenceIndicatorInViewport: v,
					omitResponsivePresenceWrapper: O,
					isNft: y,
					...I
				} = e, w = !!t && Object(d.e)(t) === b, k = w ? t : p, j = k && k.accountIcon || r, x = p ? p.isNSFW : c, S = Object(a.a)(j), E = S ? n.a.createElement(f.a, {
					headshot: j,
					className: e.className
				}) : n.a.createElement(_.b, g({}, I, {
					iconUrl: j,
					isCurrentUser: w,
					isNSFW: x
				}));
				return O ? E : n.a.createElement("div", {
					className: Object(i.a)(h.a.userIconWrapper, {
						[h.a.nftUserIcon]: y,
						[h.a.hasHeadShotWrapper]: S
					})
				}, y && n.a.createElement(m.a, {
					className: h.a.nftAnimation,
					assetUrl: `${s.a.assetPath}/img/snoovatars/nft_comment_animation.json`,
					loop: !0
				}), E, l && n.a.createElement(u.a, {
					showPresence: !0,
					isHighlighted: o,
					onceInViewport: v
				}))
			})
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "k", (function() {
				return c
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "n", (function() {
				return d
			})), r.d(t, "j", (function() {
				return u
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "i", (function() {
				return b
			}));
			const i = "DraftEditor-contentwrapper",
				o = "public-DraftStyleDefault-block",
				n = "data-offset-key",
				s = "hovered",
				c = "scrollerItem",
				l = "threadline",
				a = "header-user-dropdown",
				d = "voteButton",
				u = "RichTextJSON-root",
				f = "ImageBox-image",
				_ = "content-type-link",
				p = "styled-outbound-link",
				m = "ListingLayout-backgroundContainer",
				b = "ListingLayout-outerContainer"
		},
		"./src/reddit/constants/elementIds.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			}));
			const i = "bladeContainer",
				o = "header",
				n = "overlayScrollContainer",
				s = "collectionPostListScrollContainer"
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, r) {
			"use strict";
			var i, o;
			r.d(t, "d", (function() {
					return i
				})), r.d(t, "c", (function() {
					return o
				})), r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(i || (i = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(o || (o = {}));
			const n = "SHORTCUT_FOCUSABLE_DIV",
				s = [9, 13, 32]
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return i
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			}));
			const i = 4,
				o = 51,
				n = 60,
				s = 70,
				c = 90,
				l = 99,
				a = 100,
				d = 100
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			}));
			var i = r("./node_modules/react/index.js"),
				o = r.n(i);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				}).apply(this, arguments)
			}
			const s = o.a.createContext(!1);

			function c(e) {
				function t(t) {
					return o.a.createElement(s.Consumer, null, r => o.a.createElement(e, n({}, t, {
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
			var i = r("./node_modules/react/index.js"),
				o = r.n(i),
				n = r("./src/lib/classNames/index.ts"),
				s = r("./src/lib/domUtils/index.ts"),
				c = r("./src/reddit/constants/zIndex.ts"),
				l = r("./src/reddit/controls/Dropdown/index.m.less"),
				a = r.n(l);
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
						className: Object(n.a)(a.a.dropdown, e.className),
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
			var i = r("./node_modules/react/index.js"),
				o = r.n(i),
				n = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/helpers/path/index.ts"),
				l = r("./src/reddit/controls/InternalLink/index.m.less"),
				a = r.n(l);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				}).apply(this, arguments)
			}

			function u({
				children: e,
				className: t,
				disabled: r,
				replace: i,
				to: l,
				...u
			}) {
				return r ? o.a.createElement("span", {
					className: Object(s.a)(a.a.disabledLink, t)
				}, e) : ("string" == typeof l && (l = Object(c.b)(l)), o.a.createElement(n.a, d({
					className: t,
					to: l
				}, u), e))
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			})), r.d(t, "c", (function() {
				return P
			}));
			var i = r("./node_modules/lodash/omit.js"),
				o = r.n(i),
				n = r("./node_modules/query-string/index.js"),
				s = r.n(n),
				c = r("./node_modules/react/index.js"),
				l = r.n(c),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				u = r("./src/lib/addQueryParams/index.ts");
			var f = (e, t) => t ? Object(u.a)(e, {
				user_id: t
			}) : e;
			var _ = r("./src/lib/opener/index.ts"),
				p = r("./src/lib/redditId/index.ts"),
				m = r("./src/reddit/actions/post.ts"),
				b = r("./src/reddit/constants/adEvents.ts"),
				h = r("./src/reddit/helpers/getVendorMetadata.ts"),
				g = r("./src/reddit/helpers/pixels.ts"),
				v = r("./src/reddit/helpers/trackers/ads.ts"),
				O = r("./src/reddit/hooks/useOutboundClickTracking.ts"),
				y = r("./src/reddit/selectors/posts.ts"),
				I = r("./src/reddit/selectors/telemetry.ts"),
				w = r("./src/reddit/selectors/user.ts");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				}).apply(this, arguments)
			}
			const j = Object(d.a)(w.a, w.j, (e, {
					isSponsored: t,
					postId: r
				}) => t && r ? Object(y.b)(e, r) : null, y.F, I.actionInfo, (e, t, r, i, o) => ({
					allowClickTracking: e,
					basePixelMetadata: r,
					userId: t ? Object(p.a)(t.id) : null,
					post: i,
					pageType: o.pageType
				})),
				x = Object(a.b)(j, e => ({
					fireAdPixelsOfType: (t, r) => e(Object(m.z)(t, r)),
					recordClick: (t, r, i) => {
						const o = t.events.filter(({
							type: e,
							url: t
						}) => e === b.a.Click && Object(g.b)(t));
						Object(g.c)(o), e(Object(m.q)(String(r), {
							postId: t.id,
							vendorMetadata: i
						}))
					}
				})),
				S = (e, t, r, i) => {
					const o = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					i && t.outboundUrl && o && (e.href = f(t.outboundUrl, r), e.href = function(e) {
						return Object(u.a)(e, {
							web_redirect: "true"
						})
					}(e.href))
				},
				E = (e, t, r) => {
					let i, o = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(r)) {
						o = Object(h.a)(e, t, b.a.Click);
						const {
							url: n,
							query: c
						} = s.a.parseUrl(r);
						i = s.a.stringifyUrl({
							url: n,
							query: {
								...c,
								...o
							}
						})
					} else i = r;
					return {
						url: i,
						metadata: o
					}
				},
				P = (e, t, r) => {
					const i = E(t, r, e.href);
					return e.href = i.url, i.metadata
				},
				N = ({
					isSponsored: e,
					source: t
				}) => !!(e && (null == t ? void 0 : t.outboundUrl)),
				C = x(e => {
					const t = Object(c.useRef)(null),
						r = Object(O.a)(),
						{
							allowClickTracking: i,
							basePixelMetadata: n,
							commentId: s,
							fireAdPixelsOfType: a,
							href: d,
							isSponsored: u,
							pageType: f,
							post: p,
							postId: m,
							recordClick: h,
							source: g,
							sourceElement: y,
							userId: I
						} = e;
					let w = o()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "recordClick", "source", "sourceElement", "userId", "pageType"]);
					const j = g && g.outboundUrl && u ? g.outboundUrl : d;
					return w = {
						...w,
						href: j,
						rel: _.a,
						target: _.c.BLANK
					}, !g || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: r
						} = e;
						return !(!t || !r) && (t > r + 3e5 || t < r - 36e5)
					})(g) ? l.a.createElement("a", k({}, w, {
						onClick: () => r(d, y, s, m)
					})) : l.a.createElement("a", k({}, w, {
						onMouseDown: r => {
							if (!N(e)) return !(1 !== r.button && 2 !== r.button && !r.ctrlKey) || void S(r.currentTarget, g, I, i);
							t.current = P(r.currentTarget, m, n)
						},
						onClick: () => {
							p && (N(e) && (h(p, b.a.Click, t.current), Object(v.a)(p, f)), a(p, b.a.Click), r(d, y, s, m))
						},
						onMouseLeave: e => {
							u || ((e, t) => {
								e.href = t
							})(e.currentTarget, j)
						},
						onTouchStart: e => S(e.currentTarget, g, I, i),
						"data-testid": "outbound-link"
					}))
				});
			t.b = C
		},
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/history/esm/history.js"), r("./src/reddit/actions/platform.ts");
			var i = r("./src/config.ts");
			t.a = (e, t) => {
				const r = t.platform.currentPage && t.platform.currentPage.url;
				let o = `${i.a.accountManagerOrigin}/login/`;
				const n = window.location.origin;
				r && (o += `?dest=${encodeURIComponent(`${n}${r}`)}`), window.location.href = o
			}
		},
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			var i = r("./node_modules/polished/dist/polished.es.js"),
				o = r("./src/reddit/models/NewStructuredStyles/index.ts");
			const n = e => Object(i.b)(e) < .6;

			function s(e, t = o.a.bodyText, r = o.b.bodyText) {
				return n(e) ? r : t
			}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return c
			}));
			var i = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/helpers/localStorage/index.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, r) => o => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...n.defaults(o),
					subreddit: n.subreddit(o),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${r}` : `DESKTOP ${r}`,
						count: 1,
						type: i.f.SWITCH_HOUSE_AD
					}
				}),
				c = (e, t) => {
					t && (Object(o.ub)(e.postId), Object(o.Db)(t)), e.impressionIdStr ? Object(o.vb)(e.impressionIdStr) : e.impressionId && Object(o.vb)(e.impressionId)
				}
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "x", (function() {
				return v
			})), r.d(t, "w", (function() {
				return O
			})), r.d(t, "s", (function() {
				return y
			})), r.d(t, "p", (function() {
				return I
			})), r.d(t, "q", (function() {
				return w
			})), r.d(t, "z", (function() {
				return k
			})), r.d(t, "r", (function() {
				return j
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "u", (function() {
				return S
			})), r.d(t, "t", (function() {
				return E
			})), r.d(t, "o", (function() {
				return P
			})), r.d(t, "n", (function() {
				return N
			})), r.d(t, "y", (function() {
				return C
			})), r.d(t, "k", (function() {
				return T
			})), r.d(t, "j", (function() {
				return U
			})), r.d(t, "l", (function() {
				return D
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "m", (function() {
				return M
			})), r.d(t, "h", (function() {
				return B
			})), r.d(t, "e", (function() {
				return q
			})), r.d(t, "f", (function() {
				return W
			})), r.d(t, "b", (function() {
				return F
			})), r.d(t, "v", (function() {
				return K
			})), r.d(t, "g", (function() {
				return J
			}));
			var i = r("./src/reddit/constants/tracking.ts"),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/helpers/media/index.ts"),
				s = r("./src/reddit/models/PostCreationForm/index.ts"),
				c = r("./src/reddit/models/PostDraft/index.ts"),
				l = r("./src/reddit/selectors/postDraft.ts"),
				a = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				u = r("./src/telemetry/index.ts"),
				f = r("./src/telemetry/models/PostComposer.ts"),
				_ = r("./src/telemetry/models/PostDraft.ts");
			const p = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				m = e => ({
					source: "post_composer",
					action: i.c.CLICK,
					...a.defaults(e),
					screen: a.screen(e),
					correlationId: Object(o.c)(o.a.PostComposer)
				}),
				b = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === s.h.MARKDOWN ? "markdown" : "rte"
				},
				h = e => {
					Object(u.a)({
						noun: "cancel",
						...m(e)
					})
				},
				g = e => {
					Object(u.a)({
						noun: "discard",
						...m(e)
					})
				},
				v = e => {
					Object(u.a)({
						noun: "subreddit_choice",
						subreddit: a.subreddit(e),
						...m(e),
						actionInfo: a.chatPostActionInfo(e)
					})
				},
				O = e => {
					Object(u.a)({
						noun: "subreddit_selector",
						...m(e)
					})
				},
				y = (e, t) => {
					Object(u.a)({
						noun: "post_type_selector",
						postComposer: {
							type: p[t]
						},
						...m(e)
					})
				},
				I = () => e => ({
					noun: "add_option",
					...m(e)
				}),
				w = () => e => ({
					noun: "voting_length",
					...m(e)
				}),
				k = (e, t, r) => {
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
				j = (e, t, r) => {
					Object(u.a)({
						noun: "post",
						subreddit: a.subreddit(e),
						postComposer: {
							type: t,
							...b(e, t)
						},
						post: r ? a.post(e, r) : null,
						...m(e)
					})
				},
				x = (e, t) => {
					const r = t === s.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(u.a)({
						noun: r,
						...m(e)
					})
				},
				S = (e, t) => {
					Object(u.a)({
						noun: "save",
						subreddit: a.subreddit(e),
						postComposer: {
							type: t,
							...b(e, t)
						},
						...m(e)
					})
				},
				E = (e, t) => {
					const r = e.uploads[t];
					r.error && Object(u.a)({
						...m(e),
						noun: "media",
						action: i.c.REJECT,
						actionInfo: {
							...a.actionInfo(e),
							reason: JSON.stringify(r.error)
						}
					})
				},
				P = (e, t) => {
					t.forEach(t => {
						const r = Object(n.f)(t.type);
						r && Object(u.a)({
							...m(e),
							action: i.c.DRAG,
							noun: r
						})
					})
				},
				N = (e, t, r) => {
					Object(u.a)({
						...m(e),
						noun: "input",
						postComposer: {
							inputType: r
						},
						action: t,
						actionInfo: a.chatPostActionInfo(e)
					})
				},
				C = (e, t, r) => {
					Object(u.a)({
						...m(e),
						noun: r,
						action: Object(f.getToggleAction)(t),
						actionInfo: a.chatPostActionInfo(e)
					})
				},
				T = e => L("input", e),
				U = () => L("add"),
				D = () => L("remove"),
				L = (e, t) => r => ({
					...m(r),
					noun: e,
					postComposer: {
						inputType: t,
						type: p.imageOnly
					},
					action: i.c.CLICK
				}),
				R = e => {
					Object(u.a)({
						...m(e),
						noun: "hide_oc_description",
						action: i.c.CLICK
					})
				},
				A = (e, t) => {
					if (t) {
						const r = a.subredditById(e, t);
						if (r) return {
							subreddit: r
						};
						const i = a.profileById(e, t);
						if (i) return {
							profile: i
						}
					}
				},
				M = (e, t) => {
					const {
						draftId: r,
						destSubreddit: i
					} = t, o = Object(d.j)(e), n = Object(l.d)(e, {
						draftId: r
					}), s = {
						authorId: o ? o.id : void 0,
						createdTimestamp: n ? n.created : void 0,
						id: r || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case c.b.Link:
							s.type = _.DraftType.Link, s.urlLength = t.body.length;
							break;
						case c.b.Markdown:
							s.type = _.DraftType.Self, s.bodyTextLength = t.body.length;
							break;
						case c.b.RichText:
							s.type = _.DraftType.RichText, t.documentStats && (s.bodyTextLength = t.documentStats.textLength, s.numberRteImages = t.documentStats.rteImagesCount, s.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case c.b.Image:
							s.type = _.DraftType.Image;
							break;
						case c.b.Video:
							s.type = _.DraftType.Video
					}
					return {
						postDraft: s,
						...A(e, i.id)
					}
				},
				H = (e, t) => {
					const r = Object(d.j)(e),
						i = {
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
							i.type = _.DraftType.Link, i.urlLength = (t.body || "").length;
							break;
						case c.b.Markdown:
							i.type = _.DraftType.Self, i.bodyTextLength = (t.body || "").length;
							break;
						case c.b.RichText:
							i.type = _.DraftType.RichText
					}
					return {
						postDraft: i,
						...A(e, t.subredditId)
					}
				},
				B = (e, t) => {
					Object(u.a)({
						noun: "draft_load",
						...m(e),
						...M(e, t)
					})
				},
				q = (e, t) => {
					Object(u.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...m(e),
						...M(e, t)
					})
				},
				W = (e, t) => {
					Object(u.a)({
						noun: "draft_delete",
						...m(e),
						...H(e, t)
					})
				},
				F = e => {
					Object(u.a)({
						...m(e),
						noun: "social_connect_link",
						action: i.c.CLICK
					})
				},
				K = (e, t) => {
					Object(u.a)({
						...m(e),
						noun: "twitter_share_checkbox",
						action: Object(f.getToggleAction)(t)
					})
				},
				J = (e, t, r) => {
					Object(u.a)({
						...m(e),
						...M(e, t),
						noun: "draft_share",
						action: r ? i.c.ENABLE : i.c.DISABLE
					})
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return w
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "q", (function() {
				return x
			})), r.d(t, "r", (function() {
				return S
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "s", (function() {
				return P
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "p", (function() {
				return T
			})), r.d(t, "i", (function() {
				return U
			})), r.d(t, "j", (function() {
				return D
			})), r.d(t, "g", (function() {
				return L
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "n", (function() {
				return H
			})), r.d(t, "m", (function() {
				return B
			})), r.d(t, "t", (function() {
				return F
			})), r.d(t, "w", (function() {
				return K
			})), r.d(t, "e", (function() {
				return J
			})), r.d(t, "d", (function() {
				return z
			})), r.d(t, "u", (function() {
				return G
			})), r.d(t, "v", (function() {
				return X
			})), r.d(t, "h", (function() {
				return Y
			}));
			var i = r("./node_modules/lodash/pick.js"),
				o = r.n(i),
				n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makePostDraftPageKey/index.ts"),
				c = r("./src/reddit/constants/parameters.ts"),
				l = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = r("./src/reddit/helpers/routeKey/index.ts"),
				d = r("./src/reddit/helpers/trackers/postComposer.ts"),
				u = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				f = r("./src/reddit/models/Comment/index.ts"),
				_ = r("./src/reddit/models/Post/index.ts"),
				p = r("./src/reddit/selectors/profile.ts"),
				m = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/lib/makePostCreationPageKey/index.ts"),
				h = r("./src/lib/makeSearchKey/index.ts"),
				g = r("./src/reddit/helpers/correlationIdTracker.ts"),
				v = r("./src/reddit/helpers/trackers/searchResults.ts"),
				O = r("./src/reddit/selectors/postDraft.ts"),
				y = r("./src/reddit/selectors/telemetry.ts"),
				I = r("./src/telemetry/index.ts");
			const w = (e, t, r, i, d, p) => {
					const {
						route: m
					} = e, {
						name: g
					} = m.meta;
					if (!g) return;
					const v = t.platform.currentPage;
					switch (g) {
						case n.Jb.COMMENTS: {
							const {
								partialCommentId: o,
								partialPostId: n
							} = e.match.params, s = Object(_.s)(n), c = Object(a.a)(e, t, t.posts.models[s]);
							if (!c) return;
							const d = o && Object(f.g)(o),
								{
									sortToUse: u
								} = Object(l.a)(t, s);
							Object(I.a)(N(c, s, d, r, i, u)(t));
							break
						}
						case n.Jb.INDEX:
						case n.Jb.LISTING:
						case n.Jb.MULTIREDDIT:
						case n.Jb.SUBREDDIT: {
							const o = Object(a.c)(e, t);
							if (!o.listingKey) return;
							const {
								params: s,
								queryParams: c
							} = e.match, {
								sort: l = (o.sort ? o.sort : n.U.HOT)
							} = s, d = c.t;
							Object(I.a)(j(o.listingKey, l, r, i, d)(t));
							break
						}
						case n.Jb.TOPIC: {
							const o = Object(a.c)(e, t);
							if (!o.listingKey) return;
							const {
								params: s
							} = e.match, c = o.sort ? o.sort : n.V, {
								sort: l = c
							} = s;
							Object(I.a)(j(o.listingKey, l, r, i)(t));
							break
						}
						case n.Jb.PROFILE_OVERVIEW: {
							const o = Object(a.d)(e, t);
							if (!o) return;
							const {
								params: s,
								queryParams: c
							} = e.match, {
								sort: l = n.Bb
							} = s, d = c.t;
							Object(I.a)(x(o, l, r, i, d)(t));
							break
						}
						case n.Jb.PROFILE_POSTS: {
							const o = Object(a.d)(e, t);
							if (!o) return;
							const {
								queryParams: s
							} = e.match, {
								sort: c = n.Bb,
								t: l = n.Cb
							} = s;
							Object(I.a)(S(o, c, r, i, l)(t));
							break
						}
						case n.Jb.PROFILE_COMMENTS: {
							const o = Object(a.d)(e, t);
							if (!o) return;
							const {
								queryParams: s
							} = e.match, {
								sort: c = n.Bb,
								t: l = n.Cb
							} = s;
							Object(I.a)(E(o, c, r, i, l)(t));
							break
						}
						case n.Jb.PROFILE_PRIVATE: {
							const o = Object(a.d)(e, t);
							if (!o) return;
							Object(I.a)(P(o)(i, r)(t));
							break
						}
						case n.Jb.PROFILE_MODERATION:
							p && T(t, !0);
							break;
						case n.Jb.SETTINGS: {
							const o = e;
							Object(I.a)(W(r, i)(t)), o.match.params.page === n.Wb.Profile && Object(u.k)(t);
							break
						}
						case n.Jb.POST_CREATION:
							if (p && d) {
								const e = Object(b.a)(d);
								Object(I.a)(C(e, r, i)(t))
							}
							break;
						case n.Jb.POST_DRAFT: {
							const {
								draftId: o
							} = e.match.params, n = Object(s.a)(e.match.params);
							if (!n) return;
							R(t, n, o, r, i);
							break
						}
						case n.Jb.SUBREDDIT_WIKI:
							Object(I.a)(V(r, i)(t));
							break;
						case n.Jb.COINS:
							Object(I.a)(A(r, i)(t)), Object(I.a)(M()(t));
							break;
						case n.Jb.PREMIUM:
							Object(I.a)(H(r, i)(t)), Object(I.a)(B()(t));
							break;
						case n.Jb.APPEAL:
							Object(I.a)(q(r, i)(t));
							break;
						case n.Jb.INBOX_PAGES:
							p && L(t);
							break;
						case n.Jb.MODERATION_PAGES:
							p && U(t, !0, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case n.Jb.COLLECTION_COMMENTS:
							p && X(t, !0);
							break;
						case n.Jb.MODQUEUE_PAGES:
							p && D(t, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case n.Jb.SUBREDDIT_LEADERBOARD:
							p && Object(I.a)(J()(t));
							break;
						case n.Jb.SEARCH_RESULTS:
							if (p) {
								const n = Object(a.e)(e, t);
								if (!n) return;
								Object(I.a)(G(n, Object(h.c)(o()(v && v.queryParams || {}, c.t)), r, i, v)(t))
							}
							break;
						case n.Jb.PUBLIC_ACCESS_NETWORK:
							p && Object(I.a)(F()(t));
							break;
						case n.Jb.GEOTAGGING:
							p && Object(I.a)(z()(t));
							break;
						case n.Jb.SUBREDDIT_CREATION:
							p && Object(I.a)(K()(t));
							break;
						case n.Jb.MOD_LISTING:
							p && Y(t, !0)
					}
				},
				k = e => ({
					...y.defaults(e),
					userPreferences: y.userPreferences(e)
				}),
				j = (e, t, r, i, o, n) => s => {
					const {
						api: c
					} = s.listings.postOrder, l = !c.error[e] && !c.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...k(s),
						actionInfo: y.actionInfo(s, {
							success: l
						}),
						customFeed: y.customFeed(s),
						listing: y.listing(s, e, {
							sort: t,
							sortTime: o
						}),
						subreddit: y.subreddit(s),
						timer: y.timer(r, i),
						userSubreddit: y.userSubreddit(s),
						adblock: y.adblock(s),
						postFlair: {
							title: n
						}
					}
				},
				x = (e, t, r, i, o) => n => {
					const s = y.listing(n, e);
					s && (s.sort = t, o && (s.sortTime = o));
					const {
						api: c
					} = n.listings.postOrder, l = !c.error[e] && !c.pending[e];
					return {
						listing: s,
						source: "global",
						action: "view",
						noun: "screen",
						...k(n),
						actionInfo: y.actionInfo(n, {
							success: l
						}),
						profile: y.profile(n),
						snoovatar: y.snoovatar(n),
						subreddit: y.subreddit(n),
						timer: y.timer(r, i),
						userSubreddit: y.userSubreddit(n),
						adblock: y.adblock(n)
					}
				},
				S = (e, t, r, i, o) => n => {
					const s = y.listing(n, e);
					s && (s.sort = t, o && (s.sortTime = o));
					const {
						api: c
					} = n.listings.postOrder, l = !c.error[e] && !c.pending[e];
					return {
						listing: s,
						source: "global",
						action: "view",
						noun: "screen",
						...k(n),
						actionInfo: y.actionInfo(n, {
							success: l
						}),
						profile: y.profile(n),
						subreddit: y.subreddit(n),
						timer: y.timer(r, i),
						userSubreddit: y.userSubreddit(n),
						adblock: y.adblock(n)
					}
				},
				E = (e, t, r, i, o) => n => {
					const s = y.profileComments(n, e);
					s && (s.sort = t, o && (s.sortTime = o));
					const {
						api: c
					} = n.profileCommentsPage, l = !c.error[e] && !c.pending[e];
					return {
						listing: s,
						source: "global",
						action: "view",
						noun: "screen",
						...k(n),
						actionInfo: y.actionInfo(n, {
							success: l
						}),
						profile: y.profile(n),
						subreddit: y.subreddit(n),
						timer: y.timer(r, i),
						userSubreddit: y.userSubreddit(n),
						adblock: y.adblock(n)
					}
				},
				P = e => (t, r) => i => {
					const o = !i.profilePrivatePage.api.error[e] && !i.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...k(i),
						actionInfo: y.actionInfo(i, {
							success: o
						}),
						profile: y.profile(i),
						subreddit: y.subreddit(i),
						timer: y.timer(r, t),
						userSubreddit: y.userSubreddit(i),
						adblock: y.adblock(i)
					}
				},
				N = (e, t, r, i, o, n) => s => {
					const {
						api: c
					} = s.pages.comments, l = !c.error[e] && !c.pending[e], a = {
						source: "global",
						action: "view",
						noun: "screen",
						...k(s),
						actionInfo: y.actionInfo(s, {
							success: l
						}),
						post: y.post(s, t),
						profile: y.profile(s),
						subreddit: y.subreddit(s),
						timer: y.timer(i, o),
						userSubreddit: y.userSubreddit(s),
						adblock: y.adblock(s),
						postEvent: y.postEventI13nSelector(s, {
							postId: t
						}),
						postCollection: y.postCollectionI13nSelector(s, {
							postId: t
						}),
						listing: y.listing(s, void 0, {
							sort: n
						})
					};
					return r && (a.comment = y.comment(s, r)), a
				},
				C = (e, t, r) => i => {
					const o = i.creations.api.page.fetched[e],
						n = i.platform.currentPage ? i.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...k(i),
						actionInfo: y.actionInfo(i, {
							success: o
						}),
						post: n ? y.post(i, n) : void 0,
						subreddit: y.subreddit(i),
						timer: y.timer(t, r),
						userSubreddit: y.userSubreddit(i),
						adblock: y.adblock(i)
					}
				},
				T = (e, t) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: y.actionInfo(e, {
							success: t
						})
					})
				},
				U = (e, t, r, i) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: y.actionInfo(e, {
							success: t
						}),
						profile: y.profileById(e, Object(p.m)(e, i)),
						subreddit: y.subredditById(e, Object(m.D)(e, r)),
						userSubreddit: y.userSubreddit(e),
						adblock: y.adblock(e)
					})
				},
				D = (e, t, r) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						profile: y.profileById(e, Object(p.m)(e, r)),
						subreddit: y.subredditById(e, Object(m.D)(e, t)),
						userSubreddit: y.userSubreddit(e),
						adblock: y.adblock(e)
					})
				},
				L = e => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: y.actionInfo(e)
					})
				},
				R = (e, t, r, i, o) => {
					const n = e.creations.api.page.pending[t],
						s = !e.creations.api.page.error[t] && !n && !!r,
						c = Object(O.h)(e, r);
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: y.actionInfo(e, {
							success: s
						}),
						subreddit: y.subreddit(e),
						timer: y.timer(i, o),
						userSubreddit: y.userSubreddit(e),
						adblock: y.adblock(e),
						...c ? Object(d.m)(e, c) : {}
					})
				},
				A = (e, t) => r => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(g.c)(g.a.GoldPayment),
					...k(r),
					timer: y.timer(e, t),
					adblock: y.adblock(r)
				}),
				M = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				H = (e, t) => r => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(g.c)(g.a.GoldPayment),
					...k(r),
					timer: y.timer(e, t),
					adblock: y.adblock(r)
				}),
				B = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				q = (e, t) => r => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...k(r),
					timer: y.timer(e, t)
				}),
				W = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(r),
					timer: y.timer(e, t)
				}),
				F = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: y.subreddit(e),
					...k(e)
				}),
				K = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				J = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...k(e)
				}),
				V = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(r),
					customFeed: y.customFeed(r),
					subreddit: y.subreddit(r),
					timer: y.timer(e, t),
					userSubreddit: y.userSubreddit(r),
					adblock: y.adblock(r)
				}),
				z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...k(e)
				}),
				G = (e, t, r, i, o, s) => c => {
					let l = !0;
					if (t.type.indexOf(n.Vb.Posts) > -1) {
						const {
							api: t
						} = c.listings.listingOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(n.Vb.Subreddits) > -1 || t.type.indexOf(n.Vb.Users) > -1) {
						const {
							api: t
						} = c.listings.postOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					const a = y.paneName(c, o),
						d = y.structureType(o),
						u = c.platform.currentPage && c.platform.currentPage.urlParams && c.platform.currentPage.urlParams.subredditName ? y.subredditByName(c, c.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						...v.c(c, t),
						source: "global",
						action: "view",
						noun: "screen",
						...y.defaults(c),
						actionInfo: y.actionInfo(c, {
							success: l,
							paneName: a
						}),
						timer: y.timer(r, i),
						search: {
							...y.search(c, t, !0, o || void 0),
							...!!s && {
								originElement: s
							},
							queryId: Object(g.c)(g.a.SearchResults),
							structureType: d,
							subredditId: t.restrict_sr && u && u.id ? u.id : void 0,
							subredditName: t.restrict_sr && u && u.name ? u.name : void 0
						},
						...!!s && {
							correlationId: Object(g.c)(g.a.SearchResults)
						},
						userPreferences: {
							...y.userPreferences(c),
							hideNsfw: !c.user.prefs.over18
						}
					}
				},
				X = (e, t) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: y.actionInfo(e, {
							success: t
						})
					})
				},
				Y = (e, t) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...k(e),
						actionInfo: y.actionInfo(e, {
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
				return _
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "s", (function() {
				return m
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "u", (function() {
				return h
			})), r.d(t, "t", (function() {
				return g
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "x", (function() {
				return O
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "i", (function() {
				return k
			})), r.d(t, "y", (function() {
				return j
			})), r.d(t, "w", (function() {
				return x
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "f", (function() {
				return P
			})), r.d(t, "k", (function() {
				return N
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "p", (function() {
				return U
			})), r.d(t, "o", (function() {
				return D
			})), r.d(t, "m", (function() {
				return L
			})), r.d(t, "n", (function() {
				return R
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "d", (function() {
				return M
			}));
			var i = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/constants/posts.ts"),
				n = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				c = r("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				l = r("./src/reddit/selectors/posts.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			const d = "search",
				u = "search_results_best",
				f = (e, t) => {
					const r = a.subreddit(e);
					return {
						screen: a.screen(e),
						subreddit: r && t && t.restrict_sr ? r : null
					}
				},
				_ = (e, t) => r => {
					const i = t;
					return i.structureType = "related", {
						action: e,
						correlationId: Object(s.c)(s.a.SearchResults),
						noun: "related_search",
						source: d,
						search: a.search(r, i),
						...f(r)
					}
				},
				p = (e, t, r, i) => o => ({
					...f(o, r),
					source: d,
					action: "click",
					noun: t,
					actionInfo: a.actionInfo(o, i ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: i ? a.discoveryUnit(i) : null,
					search: a.search(o, r),
					post: a.post(o, e),
					media: a.media(o, e)
				}),
				m = (e, t, r, i, o) => n => ({
					...P(n, e, t, o, i, r),
					noun: "ad"
				}),
				b = (e, t, r) => o => {
					let n = !0;
					if (t.type.indexOf(i.Vb.Posts) > -1) {
						const {
							api: t
						} = o.listings.listingOrder;
						n = n && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(i.Vb.Subreddits) > -1 || t.type.indexOf(i.Vb.Users) > -1) {
						const {
							api: t
						} = o.listings.postOrder;
						n = n && !t.error[e] && !t.pending[e]
					}
					return {
						...f(o, t),
						source: d,
						action: "view",
						noun: "search_results_post",
						actionInfo: a.actionInfo(o, {
							success: n,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: a.discoveryUnit(r),
						search: a.search(o, t)
					}
				},
				h = (e, t) => r => ({
					action: "view",
					actionInfo: a.actionInfo(r),
					metaSearch: a.metaSearch(t),
					noun: e,
					screen: a.screen(r),
					search: a.smartSearch(r, t),
					source: d
				}),
				g = (e, t) => r => ({
					action: "click",
					actionInfo: a.actionInfo(r),
					noun: e,
					metaSearch: a.metaSearch(t),
					screen: a.screen(r),
					search: a.smartSearch(r, t),
					source: d
				}),
				v = (e, t, r) => i => ({
					source: d,
					action: "click",
					noun: a.SearchDropdownNouns.Recent,
					actionInfo: a.actionInfo(i, {
						paneName: "subreddit_dropdown",
						position: r + 1
					}),
					search: {
						query: e,
						originPageType: i.platform.currentPage ? a.getPageTypeFromCurrentPage(i.platform.currentPage) : void 0,
						queryId: Object(s.c)(s.a.SearchResults)
					},
					...y(i, t)
				}),
				O = (e, t, r, i) => o => {
					const n = i.filter(e => e.id);
					return {
						source: d,
						action: "click",
						noun: a.SearchDropdownNouns.Typeahead,
						actionInfo: a.actionInfo(o, {
							position: r + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: o.platform.currentPage ? a.getPageTypeFromCurrentPage(o.platform.currentPage) : void 0,
							queryId: Object(s.c)(s.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: n.map(e => e.id),
							numberSubreddits: n.length
						},
						...y(o, t)
					}
				},
				y = (e, t) => {
					const r = t.isSubreddit && t.id ? a.subredditForSearch(e, t.id) : void 0,
						i = t.isProfile && t.id ? a.profileForSearch(e, t.id) : void 0,
						o = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? r || o : void 0,
						profile: t.isProfile ? i || o : void 0
					}
				},
				I = (e, t, r) => i => ({
					action: t,
					actionInfo: a.actionInfo(i),
					noun: e,
					screen: a.screen(i),
					search: a.search(i, r),
					source: u
				});
			var w;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(w || (w = {}));
			const k = (e, t) => r => ({
					...f(r, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: a.actionInfo(r),
					search: a.search(r, t)
				}),
				j = (e, t) => r => ({
					...f(r, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: a.actionInfo(r),
					search: a.search(r, t)
				}),
				x = (e, t) => r => ({
					action: "click",
					correlationId: Object(s.c)(s.a.SearchResults),
					noun: e ? i.Ub.ToSubreddit : i.Ub.ToGlobal,
					search: a.search(r, t),
					source: d
				}),
				S = (e, t, r, i) => o => ({
					...f(o, r),
					source: d,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: a.actionInfo(o, {
						relativePosition: a.getRelativePostOrder(o, t, e)
					}),
					search: {
						...a.search(o, r),
						...!!i && {
							originElement: i
						}
					},
					post: a.post(o, t)
				}),
				E = (e, t, r, i, o) => n => P(n, e, t, r, i, o),
				P = (e, t, r, i, o, c) => {
					const l = a.paneName(e, i),
						u = C(e, t, o, c),
						f = a.amountOfElementsBeforePost(e, r, o, c, l),
						_ = null !== u ? f + u : null,
						p = a.structureType(i),
						m = {
							...a.search(e, r, !0, i || void 0),
							structureType: p,
							queryId: Object(s.c)(s.a.SearchResults)
						};
					return {
						source: d,
						action: n.c.CLICK,
						noun: "post",
						actionInfo: i ? {
							pageType: a.getPageTypeFromCurrentPage(i),
							paneName: l,
							position: _,
							relativePosition: u
						} : a.actionInfo(e, {
							paneName: l,
							position: _,
							relativePosition: u
						}),
						search: m,
						post: a.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: c ? a.discoveryUnit(c) : null
					}
				},
				N = (e, t, r, i, o, n) => s => T(s, e, t, r, i, o, n),
				C = (e, t, r, i) => {
					var o;
					return (null === (o = null == i ? void 0 : i.layout) || void 0 === o ? void 0 : o.viewTypeWeb) === c.b.Hero ? 0 : (null == i ? void 0 : i.postOrder) ? i.postOrder.indexOf(t) : r ? a.getRelativePostOrder(e, t, r) : null
				},
				T = (e, t, r, i, c, u, f) => {
					if (!i) {
						i = Object(l.F)(e, {
							postId: u
						}).belongsTo
					}
					const _ = a.paneName(e, r);
					let p, m;
					if (u) {
						p = C(e, u, c, f);
						const r = a.amountOfElementsBeforePost(e, t, c, f, _);
						m = null !== p ? r + p : null
					} else {
						p = ((e, t, r, i) => i && i.subredditOrder ? i.subredditOrder.indexOf(t) : r ? a.getRelativeSubredditOrProfileOrder(e, t, r) : null)(e, i.id, c, f);
						const t = a.amountOfElementsBeforeCommunity(e, c, f);
						m = null !== p ? t + p : null
					}
					const b = a.structureType(r),
						h = {
							...a.search(e, t, !0, r || void 0),
							structureType: b,
							queryId: Object(s.c)(s.a.SearchResults)
						};
					return {
						source: d,
						action: n.c.CLICK,
						noun: i.type,
						search: h,
						subreddit: i.type === o.a.SUBREDDIT ? a.subredditForSearch(e, i.id) : void 0,
						profile: i.type === o.a.PROFILE ? a.profileForSearch(e, i.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: f ? a.discoveryUnit(f) : null,
						actionInfo: r ? {
							pageType: a.getPageTypeFromCurrentPage(r),
							paneName: _,
							position: m,
							relativePosition: p
						} : a.actionInfo(e, {
							paneName: _,
							position: m,
							relativePosition: p
						}),
						post: u ? a.post(e, u) : void 0
					}
				},
				U = (e, t) => r => ({
					...f(r, e),
					source: d,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: a.actionInfo(r),
					search: {
						...a.search(r, e),
						...!!t && {
							originElement: t
						}
					},
					subreddit: a.subreddit(r)
				}),
				D = (e, t, r, i, o) => s => ({
					...P(s, t, r, i, e, o),
					action: n.c.VIEW
				}),
				L = (e, t, r, i) => o => ({
					...f(o, r),
					source: d,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: a.actionInfo(o, {
						relativePosition: a.getRelativePostOrder(o, t, e),
						position: a.getAbsoluteOrder(o, t, e)
					}),
					search: {
						...a.search(o, r),
						...!!i && {
							originElement: i
						}
					},
					post: a.post(o, t)
				}),
				R = (e, t, r) => i => ({
					...f(i),
					source: d,
					action: "click",
					noun: `search_result_${e}`,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: a.actionInfo(i),
					search: {
						...a.search(i, t),
						...!!r && {
							originElement: r
						}
					},
					[e]: a[e](i)
				}),
				A = (e, t) => r => ({
					...f(r, t),
					source: d,
					action: e,
					noun: "covid_banner",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: a.actionInfo(r),
					search: a.search(r, t)
				}),
				M = e => ({
					action: n.c.DISABLE,
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
			var i = r("./node_modules/react/index.js");
			t.a = function(e, t, r) {
				Object(i.useEffect)(() => {
					const i = e && e.current;
					if (!i || "undefined" == typeof IntersectionObserver) return;
					const o = new IntersectionObserver(t, r);
					return o.observe(i), () => {
						o.unobserve(i)
					}
				}, [e, t, r])
			}
		},
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var i = r("./src/reddit/components/TrackingHelper/index.tsx");
			const o = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var n = r("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, r, i) => o => {
				const s = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(n.defaults)(o),
					actionInfo: Object(n.actionInfo)(o),
					geo: Object(n.geo)(o),
					screen: Object(n.screen)(o),
					subreddit: Object(n.subreddit)(o),
					outbound: Object(n.outboundLinkData)(o, e, t, i, r)
				};
				return r && (s.comment = Object(n.comment)(o, r)), i && (s.post = Object(n.post)(o, i)), s
			};
			var c = r("./src/lib/serviceWorker/index.ts"),
				l = r("./node_modules/react-redux/es/index.js");
			const a = () => {
				const e = Object(l.f)();
				return t => {
					Object(c.b)("sendV2Event", t(e.getState()))
				}
			};

			function d() {
				const e = Object(i.b)(),
					t = a();
				return (r, i, n, c) => {
					var l, a;
					if (i && function(e) {
							return !e.startsWith("/") && null == e.match(o)
						}(r)) {
						const o = s(r, i, n, c);
						(null === (a = null === (l = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === l ? void 0 : l.serviceWorker) || void 0 === a ? void 0 : a.controller) ? t(o): e(o)
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
				return d
			}));
			var i = r("./node_modules/react/index.js"),
				o = r.n(i),
				n = r("./src/reddit/icons/fonts/helpers.m.less"),
				s = r.n(n),
				c = r("./src/lib/constants/icons.ts"),
				l = r("./src/lib/lessComponent.tsx");
			const a = (e, t) => `icon icon-${e}${t&&!e.includes("fill")&&c.a[`${e}_fill`]?"_fill":""}`,
				d = l.a.wrapped(e => o.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", s.a)
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			var i = r("./node_modules/react/index.js"),
				o = r.n(i),
				n = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/fonts/helpers.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
					className: e,
					isFilled: t,
					name: r,
					...i
				}) => o.a.createElement("i", c({
					className: Object(n.a)(e, Object(s.b)(r, t))
				}, i)),
				a = (e, t) => r => o.a.createElement(l, c({
					name: e
				}, t, r, {
					isFilled: (null == t ? void 0 : t.isFilled) || (null == r ? void 0 : r.isFilled),
					className: Object(n.a)(null == t ? void 0 : t.className, null == r ? void 0 : r.className)
				}));
			t.a = l
		},
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./node_modules/react/index.js"),
				o = r.n(i);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", n({
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
			var i = r("./node_modules/react/index.js"),
				o = r.n(i),
				n = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				c = r.n(s);
			t.a = Object(i.forwardRef)(({
				className: e,
				isHighlighted: t,
				outlineClassName: r
			}, i) => o.a.createElement("svg", {
				className: Object(n.a)(c.a.defaultInactiveState, e),
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				width: "12",
				height: "12",
				ref: i
			}, o.a.createElement("circle", {
				cx: "6",
				cy: "6",
				r: "4"
			}), o.a.createElement("path", {
				className: Object(n.a)(c.a.outline, r, {
					[c.a.highlighted]: t
				}),
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooSilhouette/index.tsx": function(e, t, r) {
			"use strict";
			var i = r("./node_modules/react/index.js"),
				o = r.n(i);
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
		"./src/reddit/selectors/tooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			const i = e => e.tooltipId,
				o = e => t => t.tooltipId === e
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.ff710d3362f438df7add.js.map