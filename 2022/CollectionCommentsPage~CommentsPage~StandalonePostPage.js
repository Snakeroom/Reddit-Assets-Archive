// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~StandalonePostPage.0ce026856a64e75206f5.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~StandalonePostPage"], {
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("EconHelperActions~index~reddit-components-Econ-Prediction"), s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Audio/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Audio/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("EconHelperActions~index~reddit-components-Econ-Prediction"), s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y7BouacdnDeKNuREDVkim",
				title: "KaBtU0qanIOVW0UniJKIe",
				label: "VmuxKqetMFPty4Vt4EAOj",
				participants: "_331K_coiMcnNskYgCaneWt",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = ({
				participantsCount: e
			}) => m._({
				"*": "· {total participated users} players",
				_1: "· {total participated users} player"
			}, [m._param("total participated users", Object(l.b)(e)), m._plural(e)], {
				hk: "1yrPLH"
			});
			var p = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === d.a.Live,
					n = t.status === d.a.Closed,
					l = Object(r.e)(t => Object(c.V)(t, {
						postId: e.id
					}));
				return a.a.createElement("div", {
					className: b.a.container
				}, a.a.createElement("div", {
					className: b.a.label
				}, a.a.createElement("span", null, null == l ? void 0 : l.displayText), s && a.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), n && a.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== t.totalParticipantsCount && a.a.createElement(u, {
					participantsCount: t.totalParticipantsCount
				}), a.a.createElement(i.a, {
					className: b.a.awards,
					thing: e
				})), a.a.createElement("h3", {
					className: b.a.title
				}, t.name))
			}
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, s) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/FocusableContent/index.m.less"),
				d = s.n(i);
			t.a = r.a.wrapped(e => n.a.createElement("div", {
				className: Object(a.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = s.n(r),
				d = s("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", i.a),
				l = d.a.div("TextWrapper", i.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: o,
					subtitle: r,
					title: d,
					textWrapperClassName: m
				} = e;
				return n.a.createElement("div", {
					className: Object(a.a)(t, i.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, n.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), o ? n.a.createElement(c, null, o) : n.a.createElement(c, null), n.a.createElement(l, {
					className: m
				}, n.a.createElement("div", {
					className: i.a.title
				}, d), r && n.a.createElement("div", {
					className: i.a.subtitle
				}, r)))
			}
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/ItemCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				redditLinkCard: "_3cx1eazwYdVDDYc1dPyiR5",
				title: "_39Ml3ujYhKuR2k_LFpXVKI",
				imageContainer: "_18r8N8O6-u5F1b97604EtU",
				thumbnailPlaceholder: "_1s2zQgETSy4lq4_Lx3sOZr",
				postDescription: "_12PklAY2VQxTTv7zYRGtFp",
				postStats: "_32BkJbsXEUbnRV8IdWALfx",
				separator: "_1sTUU46KrE7KfTGqDC-a29",
				carouselContainer: "_1rK-TdqBly0Ah1V-s2iNL4",
				constantWidth: "_13jkDfTREXT08dxlYnS8eF",
				flexWidth: "_3u_85Dp7oQMFiSQ4sLv1st",
				flexWidthTwoItems: "_3lv5cSLrhQNAMfRDhbY5yF",
				carouselTitle: "_2rN6AyQVzdFs8i43El1QF4",
				scrollIcon: "thm33nRT_QsxwagdC3y0O",
				carouselHeader: "_4keJkmF2kMGrQiCFuVyZP",
				carouselControls: "_2nzp90JhlrKYHbygwSg66",
				buttonWrapper: "_1FeNy7DyUXo50Xg6y7vYGE",
				scrollButton: "r6d8ZhiJGupMHDZ_VT92q",
				left: "_39XyIEf8_iPNJBEO56MJf-",
				right: "_2fa9qw7f4611Kfap-xuQAs",
				hidden: "_3y0dWvmqYpVeqdC-tWTBUc",
				itemsContainer: "WrOtvEVbiINAEhr1-6kip",
				large: "B_GPQ8fojjJzonrunPyKW",
				small: "q4_nxOUe2RNORWKR6Fyqc",
				subredditItem: "_3eJ3Vuzskg5QPjF0vWpWmv",
				subredditIcon: "_1atFEw7H5vpTJAn0fGBc_P",
				carouselContent: "_2rvSe7lZ7Qt5qCgXf_J0qB",
				bannerWrapper: "_1JhjjQQiHUTuMYhG1tGhPm",
				banner: "_3KgCrfIwPj-Tdwy64OBwWr",
				description: "_3V3hHaMDC4uZNCfwyBbz4g",
				lockup: "_24tuGHItai5L2nwJXdscK1",
				lockupText: "_1yYrDsHa8VjZpORJ4q0yYS",
				subredditName: "_1SXVDK7RjZdh5oUY2F-oQy",
				subscribersCount: "_1h7eV26RDHcql9mvKfi45C",
				contentWrapper: "rgoe5x8WumPeeNjIHn671",
				backgroundImage: "_23MqHKNvwrRo1D5A8ce1zw",
				subscribeButton: "_2sGQoRqSFOXnUrrQsZO3jK",
				blur: "_3kz2nO3JA6igVlQhzIq08X",
				flair: "BkSa7JPwUk1I4IglSRWbb"
			}
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/NotificationButton/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				c = s("./src/reddit/components/Thumbnail/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/hooks/useIsClient.ts"),
				p = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/reddit/components/MediumPost/index.m.less"),
				h = s.n(b);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: s,
				redditStyle: o,
				shouldShowSubscribeButton: b,
				subredditOrProfile: x,
				templatePlaceholderImage: E,
				shouldShowFollowButton: v,
				isFollowed: g,
				isCommentsPage: f,
				onFollowPostClick: y
			}) => {
				return Object(u.a)() ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(r.a)(h.a.thumbnailContainer, {
						[h.a.mShowingButtonOrOverflow]: v || b
					})
				}, n.a.createElement("div", {
					className: h.a.thumbnailContainerRow
				}, v && n.a.createElement(i.a, {
					isFilled: !!g,
					onClick: y,
					hasTooltip: !0,
					tooltipText: a.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), b && x && n.a.createElement(d.a, {
					className: h.a.subscribeButton,
					getEventFactory: e => Object(m.h)(t.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: x.name,
						type: Object(p.h)(x) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: t.id,
					small: !0
				})), n.a.createElement(c.a, {
					crosspost: e,
					isCommentsPage: f,
					post: t,
					redditStyle: o,
					forceShowNSFW: s,
					templatePlaceholderImage: E
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR",
				modModeBannerWrapper: "_1wpVciZItCVMc_3pYSceM5"
			}
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, s) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				i = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(i.a)(),
					{
						isFilled: s,
						onClick: o,
						hasTooltip: c,
						tooltipText: m,
						className: u
					} = e;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					className: Object(a.a)(l.a.notificationButton, u),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, n.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && n.a.createElement(r.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, m))
			}
		},
		"./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				bannerBase: "_1H6_lZclv3OiOYYLJ3oAEN",
				BlockIcon: "_3XxN6-i7j-QnWYRDuXOG5a",
				blockIcon: "_3XxN6-i7j-QnWYRDuXOG5a",
				blockedAuthorTextWrapper: "m2v6rWFRpijpyTUSArDdl",
				expandButton: "_1elWTUH22waxJo7g8N3y3J"
			}
		},
		"./src/reddit/components/PostContent/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_3UMN4RCVY5288m_fOZlkcg",
				controlsContainer: "_1hwEKkB_38tIoal6fcdrt9",
				postNumbers: "_1svxG6WJ6vr-T9iN3rf5M6",
				flatlistContainer: "UPYG6UwB7XqTeGj4a4vBr",
				mainBody: "_3MC4c3Q_Y41YKtl1TcvyMt",
				leftPadding: "_1mK-LVHGTTlcFpMsjItjYJ",
				postContainer: "_2rszc84L136gWQrkwH6IaM",
				hasEventMeta: "qpc-hx5EvongRjYhe0TOO",
				PostTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				postTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				ExpandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				expandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				ClassicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				classicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				ClassicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				classicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				FullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				fullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				LargePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				largePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				isCommentsPage: "D3IL3FD0RFy_mkKLPwL4",
				adLinkWrapper: "_3SVc61tFn_bE8SioJlUB-J",
				classicThumbnail: "_1FHUoxLVcplbcdYoOYbzlq",
				classicNotificationButton: "_3PPSzlne0JO99X7TQkgRgN",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				VideoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0",
				videoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0",
				modModeBannerWrapper: "_2TM2Nmy6QisWK1nerxy26v"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return os
			})), s.d(t, "b", (function() {
				return ns
			})), s.d(t, "a", (function() {
				return as
			}));
			var o = s("./node_modules/lodash/noop.js"),
				n = s.n(o),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/lib/pubsub/index.ts"),
				h = s("./src/lib/timeAgo/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				E = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				v = s("./src/reddit/models/User/index.ts"),
				g = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				f = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				y = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				w = s("./src/reddit/helpers/path/index.ts"),
				P = s("./src/reddit/helpers/trackers/lightbox.ts"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/lib/constants/icons.ts"),
				_ = s("./node_modules/lodash/throttle.js"),
				k = s.n(_),
				N = s("./src/reddit/actions/subreddit/subredditCarousel.ts"),
				T = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				S = s("./src/lib/constants/index.ts"),
				B = s("./src/lib/prettyPrintNumber/index.ts"),
				F = s("./src/reddit/controls/ContentType/index.tsx"),
				R = s("./src/reddit/components/Flair/index.tsx"),
				M = s("./src/reddit/selectors/telemetry.ts");
			var A = s("./src/reddit/models/Flair/index.ts"),
				L = s("./src/telemetry/index.ts"),
				W = s("./src/reddit/components/ItemCarousel/index.m.less"),
				D = s.n(W);
			const V = ({
				postCard: e,
				post: t,
				className: s
			}) => {
				const {
					url: o,
					commentCount: n,
					createdAt: c,
					score: l,
					title: m,
					thumbnail: p,
					isNsfw: b,
					subreddit: x
				} = e, E = Object(i.e)(e => e);
				Object(a.useEffect)(() => {
					t && x && Object(L.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "post_post",
						post: e,
						subreddit: t,
						...M.o(s)
					}))(t, x)(E))
				}, []);
				return r.a.createElement(d.a, {
					to: (null == o ? void 0 : o.replace(/^.*\/\/[^\/]+/, "")) || "",
					className: Object(u.a)(D.a.redditLinkCard, s),
					onClick: () => {
						Object(L.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "post_post",
							post: e,
							subreddit: t,
							...M.o(s)
						}))(t, x)(E))
					}
				}, r.a.createElement("div", {
					className: Object(u.a)(D.a.imageContainer)
				}, (null == p ? void 0 : p.url) ? r.a.createElement("img", {
					src: p.url,
					className: Object(u.a)(b && D.a.blur)
				}) : r.a.createElement(F.a, {
					type: "text",
					className: D.a.thumbnailPlaceholder
				})), r.a.createElement("div", {
					className: D.a.postDescription
				}, r.a.createElement("div", null, r.a.createElement("div", {
					className: D.a.title
				}, m), b && r.a.createElement(R.b, {
					isFlairFilter: !0,
					flair: {
						type: A.f.Nsfw,
						text: "nsfw"
					},
					className: D.a.flair
				})), r.a.createElement("div", {
					className: D.a.postStats
				}, l && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, Object(B.b)(l), " ", I.fbt._("points", null, {
					hk: "3jOMNh"
				})), r.a.createElement("span", {
					className: D.a.separator
				}, "•")), n && r.a.createElement("span", null, Object(B.b)(n), " ", I.fbt._("comments", null, {
					hk: "2x1D6M"
				})), r.a.createElement("span", {
					className: D.a.separator
				}, "•"), c && r.a.createElement("span", null, Object(h.a)(new Date(c).getTime() / S.Rb, !0)))))
			};
			var U, K = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/helpers/richTextJson/index.ts"),
				q = s("./src/reddit/models/Media/index.ts");
			! function(e) {
				e.POST = "post", e.SUBREDDIT = "subreddit"
			}(U || (U = {}));
			const z = /(?:reddit\.com\/r\/)(?<subreddit>[\w]+)(?:\/comments\/)?(?<postId>[\w]+)?/;
			var Y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Z = s("./src/reddit/actions/subreddit.ts"),
				J = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				G = s("./src/reddit/components/SubscribeButton/index.tsx"),
				X = s("./src/reddit/controls/Button/index.tsx"),
				Q = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const {
				fbt: $
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ee = ({
				id: e,
				index: t,
				name: s,
				subscribersCount: o,
				description: n,
				primaryColor: d,
				icon: c,
				isSubscribed: l,
				banner: m,
				path: p,
				size: b,
				isDiscovery: h,
				post: x,
				className: E,
				isNsfw: v
			}) => {
				const g = Object(i.d)();
				Object(a.useEffect)(() => {
					g(Object(Z.u)(s))
				}, [g, s]);
				const f = Object(i.e)(t => Object(j.R)(t, {
						subredditId: e
					})),
					y = Object(i.e)(e => e);
				Object(a.useEffect)(() => {
					x && f && h && Object(L.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "community_post",
						post: e,
						subreddit: t,
						...M.o(s)
					}))(x, f)(y))
				}, []);
				const w = Object(a.useCallback)(s => {
					if (h) return (({
						noun: e,
						subredditId: t,
						index: s,
						source: o,
						...n
					}) => a => ({
						...n,
						source: o,
						noun: e,
						actionInfo: {
							reason: `${s}`
						},
						subreddit: Object(j.R)(a, {
							subredditId: t
						})
					}))({
						action: "click",
						post: x,
						noun: s ? "unsubscribe" : "subscribe",
						subredditId: e,
						index: t,
						source: "post_discovery"
					})
				}, [e, t, l]);
				return r.a.createElement("div", {
					className: Object(u.a)(D.a.subredditItem, null === D.a || void 0 === D.a ? void 0 : D.a[b], E)
				}, r.a.createElement("div", {
					className: D.a.contentWrapper
				}, r.a.createElement("div", {
					className: D.a.bannerWrapper,
					style: {
						backgroundColor: d || void 0
					}
				}, r.a.createElement("img", {
					className: D.a.banner,
					src: m || void 0
				})), r.a.createElement("div", {
					className: D.a.carouselContent
				}, r.a.createElement(J.a, {
					to: p,
					className: D.a.lockup,
					onClick: () => {
						h && Object(L.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "community_post",
							post: e,
							subreddit: t,
							...M.o(s)
						}))(x, f)(y))
					}
				}, r.a.createElement("div", {
					style: "small" === b ? {
						backgroundColor: "grey",
						backgroundImage: `url(${m||""})`
					} : {},
					className: D.a.backgroundImage
				}, c ? r.a.createElement("img", {
					src: c,
					className: D.a.subredditIcon
				}) : r.a.createElement(Q.a, {
					className: D.a.subredditIcon
				})), r.a.createElement("div", {
					className: D.a.lockupText
				}, r.a.createElement("span", {
					className: D.a.subredditName
				}, "r/", s), " ", v && r.a.createElement(R.b, {
					isFlairFilter: !0,
					flair: {
						type: A.f.Nsfw,
						text: "nsfw"
					},
					className: D.a.flair
				}), r.a.createElement("span", {
					className: D.a.subscribersCount
				}, $._({
					"*": "{number} members",
					_1: "1 member"
				}, [$._plural(o, "number", Object(B.b)(o))], {
					hk: "4yqFU9"
				})))), r.a.createElement("p", {
					className: D.a.description
				}, n)), r.a.createElement(G.a, {
					className: D.a.subscribeButton,
					identifier: {
						name: s,
						type: "subreddit"
					},
					getEventFactory: w,
					priority: X.c.Tertiary,
					small: !0
				})))
			};

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: se
			} = s("./node_modules/fbt/lib/FbtPublic.js"), oe = e => {
				var t, s;
				const o = null === (s = null === (t = e.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
				return o ? Math.floor(e.clientWidth / o) : 0
			};
			var ne = Object(Y.c)(({
					title: e,
					className: t,
					itemIds: s,
					size: o = "large",
					minItemsCount: n = 0,
					hasSubredditNames: d = !1,
					hasPostIds: c = !1,
					isDiscovery: l,
					post: m
				}) => {
					const p = Object(i.d)(),
						[b, h] = Object(a.useState)(null),
						[x, E] = Object(a.useState)(null),
						[v, g] = Object(a.useState)({
							left: !1,
							right: !0
						}),
						[f, y] = Object(a.useState)(0),
						[w] = Object(a.useState)(void 0),
						{
							subredditIds: P,
							postIds: O,
							postUrls: _
						} = Object(a.useMemo)(() => s.reduce((e, {
							type: t,
							id: s,
							url: o
						}) => {
							switch (t) {
								case U.SUBREDDIT:
									e.subredditIds.push(s.toLowerCase());
									break;
								case U.POST:
									o && (e.postUrls[s] = o), e.postIds.push(s)
							}
							return e
						}, {
							subredditIds: [],
							postIds: [],
							postUrls: {}
						}), [s]),
						I = Object(i.e)(e => Object(j.x)(e, P)),
						S = Object(i.e)(e => Object(K.M)(e, O)),
						B = I.reduce((e, t) => (e[d ? t.name.toLocaleLowerCase() : t.id] = t, e), {}),
						F = S.reduce((e, t) => (e[t.id] = t, e), {});
					Object(a.useEffect)(() => {
						((null == P ? void 0 : P.length) || O.length) && p(Object(N.e)(P, d, P, c, O))
					}, [P, O, p, c, d]);
					const R = s.filter((e, t, s) => t === s.findIndex(t => t.id === e.id)).reduce((e, {
							type: t,
							id: s
						}) => {
							switch (t) {
								case U.SUBREDDIT:
									const o = null == B ? void 0 : B[s.toLowerCase()];
									if (!o || !l && o.isNsfw || !l && o.isSubscribed) break;
									e.push({
										type: t,
										props: o
									});
									break;
								case U.POST:
									const n = null == F ? void 0 : F[s];
									if (!n) break;
									e.push({
										type: t,
										props: n
									})
							}
							return e
						}, []),
						M = e => () => {
							var t, s;
							if (!x) return;
							const o = null === (s = null === (t = null == x ? void 0 : x.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
							if (!o) return;
							const n = (Math.sign(e) ? x.scrollLeft % o : o % x.scrollLeft) || 0,
								a = o * e - n;
							x.scrollBy({
								left: a,
								behavior: "smooth"
							})
						},
						A = Object(a.useCallback)(() => {
							if (!x) return;
							const {
								width: e
							} = null == x ? void 0 : x.getBoundingClientRect(), t = (null == x ? void 0 : x.scrollLeft) > 0, s = (null == x ? void 0 : x.scrollLeft) < x.scrollWidth - e;
							0 === (null == x ? void 0 : x.scrollLeft) && x.scrollWidth - e == 0 || g({
								left: t,
								right: s
							})
						}, [x]);
					if (Object(a.useEffect)(() => {
							if (!b || !x) return;
							const e = k()(() => {
								const e = oe(x);
								y(e)
							}, 30);
							window.addEventListener("resize", e);
							const t = oe(x);
							return y(t), A(), () => {
								window.removeEventListener("resize", e)
							}
						}, [b, x, A, f, R.length]), R.length < n) return null;
					const L = () => 1 === R.length ? D.a.flexWidth : 2 === R.length ? D.a.flexWidthTwoItems : D.a.constantWidth;
					return r.a.createElement("div", {
						ref: h,
						className: Object(u.a)(D.a.carouselContainer, t, null === D.a || void 0 === D.a ? void 0 : D.a[o])
					}, r.a.createElement("div", {
						className: D.a.carouselHeader,
						style: {
							width: w
						}
					}, r.a.createElement("h3", {
						className: D.a.carouselTitle
					}, e)), r.a.createElement("div", {
						ref: E,
						onScroll: A,
						className: Object(u.a)(D.a.itemsContainer, null === D.a || void 0 === D.a ? void 0 : D.a[o]),
						style: {
							width: w
						}
					}, null == R ? void 0 : R.map(({
						type: e,
						props: t
					}, s) => {
						var n, a, i;
						switch (e) {
							case U.SUBREDDIT:
								const e = t;
								return r.a.createElement(ee, te({
									className: L(),
									index: s + 1,
									size: o,
									banner: null === D.a || void 0 === D.a ? void 0 : D.a.bannerBackgroundImage,
									icon: (null === (n = null == e ? void 0 : e.styles) || void 0 === n ? void 0 : n.icon) || (null === (i = null === (a = e.styles) || void 0 === a ? void 0 : a.legacyIcon) || void 0 === i ? void 0 : i.url),
									key: `${null==e?void 0:e.name}:${s}`,
									isDiscovery: !0,
									post: m
								}, e));
							case U.POST:
								const d = t;
								return r.a.createElement(V, {
									postCard: {
										...d,
										url: _[d.id]
									},
									className: L(),
									post: m
								});
							default:
								return null
						}
					})), R.length > 2 && r.a.createElement("div", {
						className: D.a.carouselControls
					}, r.a.createElement("div", {
						className: Object(u.a)(D.a.buttonWrapper, D.a.left, {
							[D.a.hidden]: !v.left
						})
					}, r.a.createElement("button", {
						className: D.a.scrollButton,
						onClick: M(-f)
					}, r.a.createElement(T.a, {
						name: C.a.left_fill,
						className: D.a.scrollIcon
					}))), r.a.createElement("div", {
						className: Object(u.a)(D.a.buttonWrapper, D.a.right, {
							[D.a.hidden]: !v.right
						})
					}, r.a.createElement("button", {
						className: D.a.scrollButton,
						onClick: M(f)
					}, r.a.createElement(T.a, {
						name: C.a.right_fill,
						className: D.a.scrollIcon
					})))))
				}),
				ae = s("./src/reddit/actions/tooltip.ts"),
				re = s("./node_modules/lodash/find.js"),
				ie = s.n(re),
				de = s("./node_modules/react-motion/lib/react-motion.js");
			const ce = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				le = {},
				me = (e = [], t) => {
					const s = ie()(e, {
							key: "expando_content"
						}),
						o = s && s.style ? s.style.opacity : 0;
					return t ? o >= 1 ? [{
						key: "expando_content",
						style: {
							opacity: 1
						}
					}] : o > 0 ? [{
						key: "expando_content",
						style: {
							opacity: Object(de.spring)(1, ce)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : o < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(de.spring)(0, ce)
						}
					}]
				};
			class ue extends r.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), le), this.state = {
						expanded: e.shouldExpand,
						renderTransitionMotion: e.shouldExpand
					}
				}
				componentWillReceiveProps(e) {
					e.shouldExpand && !this.state.renderTransitionMotion ? this.setState(() => ({
						renderTransitionMotion: !0
					}), () => {
						setTimeout(() => {
							this.setState({
								expanded: !0
							})
						})
					}) : e.shouldExpand !== this.state.expanded && this.setState({
						expanded: e.shouldExpand
					})
				}
				render() {
					const {
						renderTransitionMotion: e,
						expanded: t
					} = this.state;
					if (!e) return !1;
					const {
						className: s,
						content: o
					} = this.props;
					return r.a.createElement(de.TransitionMotion, {
						styles: e => me(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => r.a.createElement("div", {
						className: s
					}, e.map(e => r.a.createElement("div", {
						key: e.key,
						style: e.style
					}, o))))
				}
			}
			var pe = s("./src/reddit/models/Post/index.ts"),
				be = s("./src/reddit/models/Vote/index.ts"),
				he = s("./src/reddit/selectors/activeModalId.ts"),
				xe = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				Ee = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				ve = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ge = s("./src/reddit/selectors/postCreations.ts"),
				fe = s("./src/reddit/selectors/showPromotedCTA.ts"),
				ye = s("./src/reddit/selectors/user.ts"),
				we = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Pe = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				Oe = s("./src/reddit/components/AwardBadges/index.tsx"),
				Ce = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				_e = s("./src/reddit/components/Econ/Audio/async.ts"),
				ke = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				Ne = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				Te = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				je = s("./src/reddit/components/ExpandoButton/index.tsx"),
				Ie = s("./src/reddit/components/FlairWrapper/index.tsx"),
				Se = s("./src/reddit/components/Flatlist/index.tsx"),
				Be = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Fe = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Re = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Me = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Ae = s("./src/reddit/components/ModModeReports/index.tsx"),
				Le = s("./src/reddit/components/ModModeReports/helpers.ts"),
				We = s("./src/reddit/components/NotificationButton/index.tsx"),
				De = s("./src/reddit/components/PostContainer/index.tsx"),
				Ve = s("./src/higherOrderComponents/makeAsync.tsx"),
				Ue = s("./src/lib/loadWithRetries/index.ts"),
				Ke = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const He = Object(Ve.a)({
				ErrorComponent: () => r.a.createElement(Ke.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(Ue.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => r.a.createElement(Ke.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var qe = e => r.a.createElement(He, e),
				ze = s("./src/reddit/components/PostList/index.tsx"),
				Ye = s("./src/reddit/components/PostMedia/index.tsx"),
				Ze = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Je = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				Ge = s("./src/reddit/components/PostTitle/index.tsx"),
				Xe = s("./src/reddit/components/PostTopLine/index.tsx"),
				Qe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				$e = s("./src/reddit/components/ReadingIndicator/async.tsx"),
				et = s("./src/reddit/components/SourceLink/index.tsx"),
				tt = s("./src/reddit/constants/componentSizes.ts"),
				st = s("./src/reddit/constants/componentTestIds.ts"),
				ot = s("./src/reddit/constants/postLayout.ts"),
				nt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				at = s("./src/reddit/helpers/postEvent.ts"),
				rt = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				it = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				dt = s("./src/reddit/selectors/postFlair.ts"),
				ct = s("./src/reddit/models/Audio/index.ts"),
				lt = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				mt = s("./src/reddit/selectors/experiments/econ/index.ts"),
				ut = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				pt = s("./src/reddit/constants/experiments.ts"),
				bt = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ht = s("./src/reddit/selectors/experiments/presence.ts");
			const xt = e => {
					return Object(bt.c)(e, {
						experimentEligibilitySelector: bt.a,
						experimentName: pt.cf
					}) === pt.Vc
				},
				Et = e => {
					if (Object(ht.a)(e)) return !1;
					return Object(bt.c)(e, {
						experimentEligibilitySelector: bt.a,
						experimentName: pt.bf
					}) === pt.Vc
				},
				vt = (e, {
					postId: t
				}) => {
					const s = Object(K.H)(e, {
						postId: t
					});
					return !(Object(ht.a)(e) || !s || s.isSponsored) && Object(bt.c)(e, {
						experimentEligibilitySelector: bt.a,
						experimentName: pt.af
					}) === pt.Vc
				};
			var gt = s("./src/reddit/constants/colors.ts"),
				ft = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				yt = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				wt = s.n(yt);
			const Pt = r.a.createElement(T.a, {
				className: wt.a.BlockIcon,
				name: "block"
			});
			var Ot = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return r.a.createElement(ft.a, {
						className: wt.a.bannerBase,
						color: gt.a.dayModeActionIcon,
						icon: Pt,
						title: I.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && r.a.createElement("button", {
							className: wt.a.expandButton,
							onClick: t
						}, I.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: wt.a.blockedAuthorTextWrapper
					})
				},
				Ct = s("./src/config.ts"),
				_t = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				kt = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				Nt = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Tt = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				jt = s.n(Tt);
			const {
				fbt: It
			} = s("./node_modules/fbt/lib/FbtPublic.js"), St = () => It._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [It._param("=User Agreement", r.a.createElement("a", {
				className: jt.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, It._("User Agreement", null, {
				hk: "3MHgRl"
			}))), It._param("=Content Policy", r.a.createElement("a", {
				className: jt.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, It._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), Bt = () => It._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [It._param("=User Agreement", r.a.createElement("a", {
				className: jt.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, It._("User Agreement", null, {
				hk: "yMHtU"
			}))), It._param("=Content Policy", r.a.createElement("a", {
				className: jt.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, It._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var Ft = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: o,
					subredditName: n
				} = e, a = t ? ((e, t, s) => {
					switch (e) {
						case pe.g.AntiEvilOps:
							return It._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case pe.g.Author:
							return It._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case pe.g.AuthorDeleted:
							return It._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case pe.g.AutomodFiltered:
							return It._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case pe.g.CommunityOps:
							return It._("This post was removed by Reddit admin, u/{username}.", [It._param("username", t)], {
								hk: "34nHWu"
							});
						case pe.g.ContentTakedown:
							return It._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case pe.g.CopyrightTakedown:
							return It._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case pe.g.Moderator:
							return It._("This post was removed by r/{subredditName} moderator, u/{username}.", [It._param("subredditName", s), It._param("username", t)], {
								hk: "270bcn"
							});
						case pe.g.Reddit:
							return It._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return It._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(o, s, n) : ((e, t) => {
					switch (e) {
						case pe.g.AntiEvilOps:
							return It._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case pe.g.Author:
							return It._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case pe.g.AuthorDeleted:
							return It._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case pe.g.AutomodFiltered:
							return It._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case pe.g.CommunityOps:
							return It._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case pe.g.ContentTakedown:
							return It._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case pe.g.CopyrightTakedown:
							return It._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case pe.g.Moderator:
							return It._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [It._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case pe.g.Reddit:
							return It._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return It._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(o, n), i = t ? (e => {
					switch (e) {
						case pe.g.AntiEvilOps:
							return r.a.createElement(St, null);
						case pe.g.AuthorDeleted:
						case pe.g.Author:
							return It._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case pe.g.AutomodFiltered:
							return It._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case pe.g.CommunityOps:
							return It._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [It._param("=just ask", r.a.createElement("a", {
								className: jt.a.link,
								href: `${Ct.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, It._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case pe.g.ContentTakedown:
							return r.a.createElement(Bt, null);
						case pe.g.CopyrightTakedown:
							return It._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case pe.g.Moderator:
							return It._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case pe.g.Reddit:
							return It._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return It._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(o) : ((e, t) => {
					switch (e) {
						case pe.g.AntiEvilOps:
							return r.a.createElement(St, null);
						case pe.g.AuthorDeleted:
						case pe.g.Author:
							return It._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case pe.g.AutomodFiltered:
							return It._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [It._param("=[subreddit name]", r.a.createElement("a", {
								className: jt.a.link,
								href: `${Ct.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, It._("{subreddit name}", [It._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case pe.g.CommunityOps:
							return It._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case pe.g.ContentTakedown:
							return r.a.createElement(Bt, null);
						case pe.g.CopyrightTakedown:
							return It._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case pe.g.Moderator:
							return It._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case pe.g.Reddit:
						default:
							return It._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(o, n), d = t ? gt.a.warning : gt.a.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case pe.g.AntiEvilOps:
						case pe.g.AutomodFiltered:
						case pe.g.CommunityOps:
						case pe.g.ContentTakedown:
						case pe.g.CopyrightTakedown:
						case pe.g.Reddit:
							t = _t.a;
							break;
						case pe.g.AuthorDeleted:
						case pe.g.Author:
							t = Nt.b;
							break;
						case pe.g.Moderator:
							t = kt.a;
							break;
						default:
							t = _t.a
					}
					return r.a.createElement(t, {
						className: jt.a.icon
					})
				})(o);
				return r.a.createElement(ft.a, {
					className: jt.a.BannerBase,
					color: d,
					icon: c,
					subtitle: i,
					title: a
				})
			};

			function Rt(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: o
				} = e;
				return r.a.createElement(r.a.Fragment, null, o && s.removedByCategory && r.a.createElement(Ft, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: o.name
				}))
			}
			var Mt = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				At = s("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				Lt = s("./src/reddit/actions/modal.ts"),
				Wt = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				Dt = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts");
			const Vt = e => {
				return Object(bt.c)(e, {
					experimentEligibilitySelector: bt.a,
					experimentName: pt.He
				}) === pt.Vc
			};
			var Ut = s("./src/reddit/components/PostUnavailableBanner/index.m.less"),
				Kt = s.n(Ut);
			const Ht = r.a.createElement(T.a, {
				className: Kt.a.RemoveIcon,
				name: "delete_fill"
			});
			var qt = () => r.a.createElement(ft.a, {
					className: Kt.a.bannerBase,
					color: gt.a.dayModeActionIcon,
					icon: Ht,
					title: I.fbt._("Sorry, this post is no longer available.", null, {
						hk: "sb8eO"
					})
				}),
				zt = s("./src/reddit/components/PostContent/index.m.less"),
				Yt = s.n(zt);
			const {
				fbt: Zt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Jt = p.a.wrapped(Ge.c, "PostTitle", Yt.a), Gt = p.a.wrapped(je.a, "ExpandoButton", Yt.a), Xt = p.a.wrapped(ue, "ClassicExpandoMotion", Yt.a), Qt = p.a.wrapped(Se.c, "FullWidthFlatlist", Yt.a), $t = r.a.createElement("p", {
				className: Yt.a.VideoProcessingStatus
			}, Zt._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), es = Object(nt.u)({
				isCommentsPage: nt.x,
				pageLayer: e => e
			}), ts = Object(i.b)(() => Object(l.c)({
				activeModalId: he.a,
				flairStyleTemplate: nt.V,
				currentUser: ye.k,
				crosspost: K.d,
				hideNSFWPref: ye.C,
				imageGalleryCurrentItem: K.i,
				isAdminOrMod: (e, t) => {
					const s = Object(K.V)(e, {
						postId: t.postId
					});
					return !!s && Object(Ee.c)(e, {
						subredditId: s.id
					})
				},
				isCurrentUserProfilePost: K.l,
				isExpanded: K.m,
				isFollowed: K.t,
				isFollowedExpired: K.o,
				showPromotedCTA: fe.a,
				post: K.H,
				moderatorPermissions: ve.l,
				modModeEnabled: nt.T,
				shouldTryToShowCrosspostModal: Dt.e,
				showAwardsPlaque: xe.a,
				showEditFlair: dt.a,
				subredditOrProfile: K.V,
				isEditing: ge.M,
				userIsOp: ye.pb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(ut.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(ut.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: vt,
				isReadingIndicatorsReadTestEnabled: Et,
				isReadingIndicatorsWriteTestEnabled: xt,
				isRecordingEnabled: mt.B,
				isTrueblockPCBlockeeEnabled: it.b
			}), (e, {
				pageLayer: t,
				postId: s
			}) => ({
				onIgnoreReports: () => e(Object(x.fb)(s)),
				onOpenReportsDropdown: t => e(Object(ae.h)({
					tooltipId: t
				})),
				onVoteClick: t => {
					const o = t === be.a.upvoted ? Object(x.jb)(s) : Object(x.w)(s);
					e(o)
				},
				fireAdPixelsOfType: (t, s) => e(Object(x.z)(t, s)),
				openPost: t => e(Object(x.L)(t)),
				onFollowPost: t => e(Object(x.ib)(s, t)),
				onFollowPostExpired: () => e(Object(x.X)({
					id: s,
					expiresAt: 0
				}))
			})), ss = e => e.media && e.media.type === q.o.EMBED && e.media.provider === q.v.Imgur && e.media.height > 700, os = new b.a, ns = "VISIBLE", as = "NOT_VISIBLE", rs = e => os.publish(e ? ns : as), is = {
				threshold: [.85, .001],
				rootMargin: `${1-tt.f}px 0px 0px 0px`
			}, ds = e => {
				for (const t of e) {
					const {
						intersectionRatio: e
					} = t;
					e >= .85 && rs(!1), e <= .001 && rs(!0)
				}
			}, cs = p.a.wrapped(d.a, "ThumbLink", Yt.a), ls = ({
				post: e,
				templatePlaceholderImage: t,
				shouldShowFollowButton: s,
				isFollowed: o,
				onFollowPostClick: n
			}) => {
				const a = e.source ? r.a.createElement(Ce.a, {
					post: e,
					forceShowNSFW: !0,
					templatePlaceholderImage: t
				}) : r.a.createElement(cs, {
					to: Object(w.b)(e.permalink)
				}, r.a.createElement(Ce.a, {
					post: e,
					forceShowNSFW: !0
				}));
				return r.a.createElement("div", {
					className: Yt.a.classicThumbnail
				}, s && r.a.createElement(We.a, {
					className: Yt.a.classicNotificationButton,
					isFilled: !!o,
					onClick: n,
					hasTooltip: !0,
					tooltipText: Zt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), a)
			}, ms = ({
				post: e,
				isExpanded: t,
				scrollerItemRef: s
			}) => r.a.createElement(Xt, {
				content: r.a.createElement(r.a.Fragment, null, r.a.createElement(Ye.a, {
					className: Yt.a.ClassicPostMedia,
					isListing: !1,
					isNotCardView: !0,
					post: e,
					shouldLoad: !0,
					showFull: !0,
					showCentered: !0,
					scrollerItemRef: s
				})),
				shouldExpand: !!t
			});
			t.c = es(ts(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: o,
					fireAdPixelsOfType: d,
					flairStyleTemplate: l,
					forceOpenInNewTab: p,
					hideNSFWPref: b,
					imageGalleryCurrentItem: x,
					isAdminOrMod: w,
					isCommentCountAnimation: C,
					isCommentsPage: _,
					isCountAnimShadowTestEnabled: k,
					isCrosspostRecommendationsExperimentEnabled: N,
					isCurrentUserProfilePost: T,
					isEditing: j,
					isExpanded: I,
					isFollowed: S,
					isFollowedExpired: B,
					isOverlay: F,
					isReadingIndicatorsExperimentEnabled: R,
					isReadingIndicatorsReadTestEnabled: M,
					isReadingIndicatorsWriteTestEnabled: A,
					isRecordingEnabled: L,
					isVoteCountAnimation: W,
					moderatorPermissions: D,
					modModeEnabled: V,
					onFollowPost: K,
					onFollowPostExpired: Z,
					onIgnoreReports: J,
					onOpenReportsDropdown: G,
					openPost: X,
					onVoteClick: Q,
					post: $,
					scrollerItemRef: ee,
					sendEvent: te,
					shouldTryToShowCrosspostModal: se,
					showAwardsPlaque: oe,
					showEditFlair: ae,
					showPromotedCTA: re,
					subredditOrProfile: ie,
					userIsOp: de,
					isTrueblockPCBlockeeEnabled: ce
				} = e, le = Object(Y.b)(), me = Object(a.useRef)(null), [ue, be] = Object(a.useState)($.authorIsBlocked), he = Object(q.J)($), xe = Object(i.e)(e => Object(it.a)(e)), Ee = Object(i.e)(e => Object(mt.c)(e)), ve = Object(c.a)($), ge = R || M || A;
				Object(a.useEffect)(() => {
					B && Z()
				}, []);
				const fe = Object(i.d)(),
					ye = Object(a.useRef)(null);
				Object(a.useEffect)(() => {
					if (N && se) return fe(Object(At.a)($)), ye.current = setTimeout(() => {
						fe(Object(Lt.h)(Wt.a)), fe(Object(At.b)())
					}, Wt.b), () => {
						fe(Object(At.b)()), fe(Object(Lt.g)(Wt.a)), ye.current && clearTimeout(ye.current)
					}
				}, []), Object(rt.a)(me, ds, is);
				const Ce = $.isSponsored ? Object(ze.b)($.id, {
						fireAdPixelsOfType: d,
						openPost: X
					}) : n.a,
					je = Object(y.a)(D),
					We = Object(g.a)(D),
					Ve = Object(f.a)(D),
					Ue = je || We,
					Ke = ((e, t, s) => {
						const [o, n] = e ? [Object(v.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return o || t || n
					})(o, Ue, $),
					He = !!$.media && ($.media.type === q.o.RTJSON || $.media.type === q.o.TEXT),
					tt = de && He,
					nt = Object(Me.d)($),
					dt = Object(Le.c)($);
				let ut;
				const pt = !(V && je),
					bt = Object(Ze.b)({
						hide: !R && pt,
						editPost: !R && pt,
						save: pt,
						report: !R && pt
					}),
					ht = $.removedByCategory === pe.g.AuthorDeleted,
					xt = o && (o.displayText === $.author || o.username === $.author),
					Et = !!$.unrepliableReason,
					vt = !(Et && ce) && !ht && !ss($) && (xt || w || !($.removedByCategory && $.media && (Object(q.M)($.media) || Object(q.K)($.media) || Object(q.E)($.media)))),
					gt = Object(m.t)($, x),
					{
						source: ft
					} = gt,
					yt = $.removedByCategory === pe.g.Reddit && Object(h.e)($.created) > 24,
					wt = $.removedByCategory && $.removedByCategory !== pe.g.Reddit || yt,
					Pt = !wt && !$.isArchived,
					Ct = Object(a.useCallback)(() => {
						K(S ? pe.f.UNFOLLOWED : pe.f.FOLLOWED), le(S ? Object(O.m)($.id) : Object(O.c)($.id))
					}, [K, le, S, $.id]),
					_t = r.a.createElement(Jt, {
						post: $,
						innerRef: me,
						size: Ge.b.ExtraLarge,
						isOverlay: F,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					kt = r.a.createElement(Mt.a, {
						post: $,
						showViewCount: Ke
					}),
					Nt = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: o
						} = e, n = Object(i.e)(e => Object(ct.b)(o) && Object(mt.c)(e));
						return s ? ot.g.Classic : Object(lt.c)(o) ? ot.g.Large : n ? ot.g.Large : t ? ot.g.Large : o.media && !ss(o) ? ot.g.Large : ot.g.Medium
					})(e),
					Tt = Object(i.e)(Vt),
					jt = (e => {
						var t, s, o;
						if ((null == e ? void 0 : e.media) && Object(q.K)(e.media) && (null === (s = null === (t = e.media.richtextContent) || void 0 === t ? void 0 : t.document) || void 0 === s ? void 0 : s.length) > 0) {
							const t = Object(H.e)(e.media.richtextContent.document, !0);
							return 0 === t.length ? [] : null === (o = t.reduce) || void 0 === o ? void 0 : o.call(t, (e, t) => {
								var s;
								const {
									subreddit: o,
									postId: n
								} = (null === (s = t.match(z)) || void 0 === s ? void 0 : s.groups) || {};
								return n && o ? [...e, {
									id: `t3_${n}`,
									url: t,
									type: U.POST
								}] : o ? [...e, {
									id: o,
									url: t,
									type: U.SUBREDDIT
								}] : e
							}, [])
						}
						return []
					})($),
					It = () => {
						const t = !(Et && xe && ue),
							o = Object(q.I)($);
						return Et && o ? r.a.createElement(qt, null) : xe && ue ? r.a.createElement(Ot, {
							onBannerClick: () => be(!1),
							isExpandable: he
						}) : $.source && Nt === ot.g.Medium ? r.a.createElement(et.a, {
							post: $,
							isCommentsPage: _
						}) : vt && !j && Nt === ot.g.Large ? r.a.createElement(Ye.a, {
							className: Object(u.a)(Yt.a.LargePostMedia, {
								[Yt.a.isCommentsPage]: _
							}),
							isCommentsPage: !0,
							isListing: !1,
							isNotCardView: F,
							isOverlay: F,
							post: $,
							shouldLoad: !0,
							showFull: !0,
							shouldPause: !F,
							showCentered: !0,
							showPromotedCTA: re,
							scrollerItemRef: ee
						}) : t && Nt === ot.g.Classic ? r.a.createElement(r.a.Fragment, null, r.a.createElement(Gt, {
							crosspost: s || void 0,
							isExpanded: !!I,
							post: $,
							useMediaIcons: !1
						}), ms(e)) : null
					};
				if (Nt === ot.g.Classic) {
					const e = Object(E.a)($);
					ut = r.a.createElement("div", {
						"data-test-id": st.e
					}, r.a.createElement(Je.a, {
						model: $,
						handleVote: Q,
						isCountAnimShadowTestEnabled: k,
						isOverlay: F,
						isVoteCountAnimation: W,
						postId: $.id
					}), r.a.createElement("div", {
						className: Yt.a.mainBody
					}, r.a.createElement("div", {
						className: Yt.a.content
					}, r.a.createElement(Xe.a, {
						hideAwards: oe,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: _,
						isCurrentUserProfilePost: T,
						isOverlay: !!F,
						isTopicPage: !1,
						post: $,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!F && !$.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: ie,
						shouldShowFollowButton: Pt && !e,
						isFollowed: S,
						onFollowPostClick: Ct
					}), _t, r.a.createElement(Ie.a, {
						className: _ ? Yt.a.leftPadding : void 0,
						post: $,
						sendEvent: te
					}), V && je && dt && r.a.createElement(Ae.a, {
						onIgnoreReports: J,
						reportable: $
					}), r.a.createElement(Be.d, null), r.a.createElement("div", {
						className: Yt.a.FlatlistContainer
					}, It(), oe && r.a.createElement(Oe.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: $,
						tooltipType: F ? Qe.c.Lightbox : void 0
					}), r.a.createElement(Qt, {
						currentUser: o,
						hasModFlairPerms: We,
						hasModFullPerms: Ve,
						hasModPostPerms: je,
						isOverlay: F,
						onIgnoreReports: J,
						onOpenReportsDropdown: G,
						modModeEnabled: V,
						post: $,
						showUpvotePercent: !0,
						showViewCount: Ke,
						useFlatlistBreakpoints: bt,
						isCommentCountAnimation: C,
						isCountAnimShadowTestEnabled: k
					}))), e && r.a.createElement(ls, {
						post: $,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Pt,
						isFollowed: S,
						onFollowPostClick: Ct
					})))
				} else if (Nt === ot.g.Medium) {
					const e = Object(E.a)($);
					ut = r.a.createElement("div", {
						"data-test-id": st.e
					}, r.a.createElement(Je.a, {
						model: $,
						handleVote: Q,
						isCountAnimShadowTestEnabled: k,
						isOverlay: F,
						isReadingIndicatorsExperimentEnabled: R,
						isVoteCountAnimation: W,
						postId: $.id
					}), r.a.createElement("div", {
						className: Yt.a.mainBody
					}, r.a.createElement("div", {
						className: Yt.a.content
					}, r.a.createElement(Xe.a, {
						hideAwards: oe,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: _,
						isCurrentUserProfilePost: T,
						isOverlay: !!F,
						isTopicPage: !1,
						post: $,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!F && !$.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: ie,
						shouldShowFollowButton: Pt && !e,
						isFollowed: S,
						onFollowPostClick: Ct
					}), _t, It(), Object(q.O)($) && $t, r.a.createElement(Ie.a, {
						className: _ ? Yt.a.leftPadding : void 0,
						post: $,
						sendEvent: te
					}), ie && wt && r.a.createElement(Rt, {
						isAdminOrMod: w,
						post: $,
						subredditOrProfile: ie
					}), V && je && dt && r.a.createElement(Ae.a, {
						onIgnoreReports: J,
						reportable: $
					})), e && !ve && r.a.createElement(Fe.a, {
						post: $,
						forceShowNSFW: !0,
						hasModPostPerms: Ue,
						isCommentsPage: _,
						isOverlay: !0,
						modModeEnabled: V,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: ie,
						shouldShowFollowButton: Pt,
						isFollowed: S,
						onFollowPostClick: Ct
					})), r.a.createElement(Be.d, null), oe && r.a.createElement(Oe.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: $,
						tooltipType: F ? Qe.c.Lightbox : void 0
					}), !!Tt && r.a.createElement(ne, {
						itemIds: jt,
						hasSubredditNames: !0,
						hasPostIds: !0,
						isDiscovery: !0,
						post: $,
						size: "small"
					}), r.a.createElement("div", {
						className: Yt.a.controlsContainer
					}, r.a.createElement(Se.c, {
						currentUser: o,
						hasModFlairPerms: We,
						hasModFullPerms: Ve,
						hasModPostPerms: je,
						isOverlay: F,
						modModeEnabled: V,
						onIgnoreReports: J,
						onOpenReportsDropdown: G,
						post: $,
						showEditPost: tt,
						showEditFlair: ae,
						tooltipType: F ? Qe.c.Lightbox : void 0,
						useFlatlistBreakpoints: bt,
						isCommentCountAnimation: C,
						isCountAnimShadowTestEnabled: k,
						shouldHideItems: R
					}), ge && r.a.createElement($e.a, {
						isReadingIndicatorsExperiment: R,
						isReadLoadTest: M,
						isWriteLoadTest: A,
						postId: $.id
					}), !R && kt))
				} else Nt === ot.g.Large && (ut = r.a.createElement("div", {
					"data-test-id": st.e
				}, r.a.createElement(Je.a, {
					model: $,
					handleVote: Q,
					isCountAnimShadowTestEnabled: k,
					isOverlay: F,
					isReadingIndicatorsExperimentEnabled: R,
					isVoteCountAnimation: W,
					postId: $.id
				}), Object(lt.c)($) && r.a.createElement(r.a.Fragment, null, r.a.createElement(Ne.a, {
					post: $
				}), r.a.createElement(ke.a, {
					post: $
				})), !Object(lt.c)($) && r.a.createElement(r.a.Fragment, null, r.a.createElement(Xe.a, {
					forceOpenInNewTab: p,
					hideAwards: oe,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: _,
					isCurrentUserProfilePost: T,
					isOverlay: !!F,
					isTopicPage: !1,
					post: $,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!F && !$.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: ie,
					shouldShowFollowButton: Pt,
					isFollowed: S,
					onFollowPostClick: Ct
				}), _t, ((e, t, s, o) => e.source && !t && (s || o))($, s, F, _) && r.a.createElement(et.a, {
					post: $,
					isCommentsPage: _
				})), r.a.createElement(Ie.a, {
					className: _ ? Yt.a.leftPadding : void 0,
					post: $,
					sendEvent: te
				}), ie && wt && r.a.createElement(Rt, {
					isAdminOrMod: w,
					post: $,
					subredditOrProfile: ie
				}), j && r.a.createElement(qe, {
					post: $
				}), It(), re && ft && ft.url && r.a.createElement(we.a, {
					className: Yt.a.adLinkWrapper
				}, r.a.createElement(Pe.a, {
					post: $,
					adLinkContent: gt
				})), V && je && nt && r.a.createElement("div", {
					className: Yt.a.modModeBannerWrapper
				}, r.a.createElement(Re.a, {
					thing: $
				})), V && je && dt && r.a.createElement("div", {
					className: Yt.a.modModeBannerWrapper
				}, r.a.createElement(Ae.a, {
					onIgnoreReports: J,
					reportable: $
				})), Ee && Object(ct.b)($) && r.a.createElement(_e.a, {
					post: $,
					isRecordingEnabled: L
				}), r.a.createElement(Be.d, null), oe && r.a.createElement(Oe.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: $,
					tooltipType: F ? Qe.c.Lightbox : void 0
				}), !!Tt && r.a.createElement(ne, {
					itemIds: jt,
					hasSubredditNames: !0,
					hasPostIds: !0,
					isDiscovery: !0,
					post: $,
					size: "small"
				}), r.a.createElement("div", {
					className: Yt.a.controlsContainer
				}, r.a.createElement(Se.c, {
					currentUser: o,
					forceOpenInNewTab: p,
					hasModFlairPerms: We,
					hasModFullPerms: Ve,
					hasModPostPerms: je,
					isOverlay: F,
					modModeEnabled: V,
					onIgnoreReports: J,
					onOpenReportsDropdown: G,
					post: $,
					showEditPost: tt,
					showEditFlair: ae,
					tooltipType: F ? Qe.c.Lightbox : void 0,
					useFlatlistBreakpoints: bt,
					isCommentCountAnimation: C,
					isCountAnimShadowTestEnabled: k,
					shouldHideItems: R
				}), ge && r.a.createElement($e.a, {
					isReadingIndicatorsExperiment: R,
					isReadLoadTest: M,
					isWriteLoadTest: A,
					postId: $.id
				}), !R && kt)));
				const St = Object(a.useCallback)((e, t) => Object(O.h)(e, t), []);
				return r.a.createElement(De.a, {
					className: Object(u.a)(t, Yt.a.postContainer, {
						[Yt.a.hasEventMeta]: Object(at.a)($)
					}),
					isOverlay: F,
					post: $,
					eventFactory: F ? P.b : St,
					onClick: Ce
				}, r.a.createElement(Te.a, {
					post: $
				}), ut)
			}))
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				E = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/models/Subreddit/index.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(O);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: n,
				hideNSFWPref: O,
				hostPostData: _,
				iconClassName: k,
				inSubredditOrProfile: N,
				isCommentsPage: T,
				isCompactPinnedPost: j,
				isCurrentUserProfilePost: I,
				isOverlay: S,
				isTopicPage: B,
				listingKey: F,
				post: R,
				shouldShowSubscribeButton: M,
				showCornerOutboundLink: A,
				showSubreddit: L,
				showSubredditIcon: W,
				subredditOrProfile: D,
				isFollowed: V,
				shouldShowFollowButton: U,
				onFollowPostClick: K
			}) => {
				const H = n || B,
					q = D && Object(w.h)(D),
					z = Object(r.e)(e => {
						if (!q) return !0;
						const t = Object(P.sb)(e, R.author || "");
						return !t || t.enableFollowers
					});
				return a.a.createElement("div", {
					className: Object(i.a)(C.a.container, e)
				}, L && D && a.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, a.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: D.url
				}, W && a.a.createElement(p.b, {
					className: Object(i.a)(C.a.subredditIcon, k),
					shouldHideNsfwIcon: O,
					subredditOrProfile: D
				}))), a.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, L && a.a.createElement(c.h, {
					type: R.belongsTo.type,
					id: R.belongsTo.id
				}), a.a.createElement(u.d, {
					className: C.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: S ? u.c.Lightbox : void 0,
					post: R,
					showSub: L,
					subredditOrProfile: D
				}), a.a.createElement(m.a, {
					className: C.a.postBadges,
					displayText: D ? D.displayText : null,
					inSubredditOrProfile: N,
					isCompactPinnedPost: j,
					post: R,
					tooltipType: S ? u.c.Lightbox : void 0
				}), !H && a.a.createElement(d.a, {
					isPostDetail: T,
					thing: R,
					tooltipType: S ? u.c.Lightbox : void 0
				})), D && z && L && M && !I && a.a.createElement(h.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(g.h)(R.id, e ? "unsubscribe" : "subscribe", "post", F, _),
					identifier: {
						name: D.name,
						type: q ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: R.id,
					size: E.d.XS
				}), A && a.a.createElement(v.b, {
					isSponsored: R.isSponsored,
					postId: R.id,
					href: Object(y.D)(R),
					source: R.source
				}, a.a.createElement(f.a, {
					className: C.a.outboundLinkIcon
				})), U && z && a.a.createElement(l.a, {
					isFilled: !!V,
					onClick: K,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/PostUnavailableBanner/index.m.less": function(e, t, s) {
			e.exports = {
				bannerBase: "_3pCwayT6l9aM5Uh9YuCXeP",
				RemoveIcon: "YKKq2c1RnR-x1pamdskkg",
				removeIcon: "YKKq2c1RnR-x1pamdskkg"
			}
		},
		"./src/reddit/components/ReadingIndicator/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n);
			const r = Object(o.a)({
					resolved: {},
					chunkName: () => "ReadingIndicator",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReadingIndicator").then(s.bind(null, "./src/reddit/components/ReadingIndicator/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReadingIndicator/index.tsx"
					}
				}),
				i = e => a.a.createElement(r, e)
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				mCollapsed: "_225DoZxfrLcZu0fM8-Svk8",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/FocusableContent/index.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(d);
			t.a = ({
				className: e,
				isCommentBoxDesignEnabled: t,
				isLoading: s,
				toolbarPosition: o
			}) => n.a.createElement("div", {
				className: e
			}, n.a.createElement(r.a, {
				isFocused: !1
			}, !t && "top" === o && n.a.createElement("div", {
				className: Object(a.a)(c.a.toolbar, c.a.topToolbar, Object(i.a)({
					isLoading: s
				}))
			}), n.a.createElement("div", {
				className: Object(a.a)(c.a.content, {
					[c.a.mCollapsed]: t
				})
			}, n.a.createElement("div", {
				className: Object(a.a)(c.a.prompt, Object(i.a)({
					isLoading: !0
				}))
			})), !t && "bottom" === o && n.a.createElement("div", {
				className: Object(a.a)(c.a.toolbar, c.a.bottomToolbar, Object(i.a)({
					isLoading: s
				}))
			})))
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/react/index.js");

			function n() {
				const [e, t] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, n.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(r);
			const d = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.qc
				});
				return !(!t || Object(o.if)(t))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~StandalonePostPage.0ce026856a64e75206f5.js.map