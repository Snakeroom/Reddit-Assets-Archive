// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~StandalonePostPage.5d8c800b5f5330bc6ff5.js
// Retrieved at 1/18/2022, 2:40:05 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/components/ItemCarousel/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var o, n = s("./src/reddit/helpers/richTextJson/index.ts"),
				a = s("./src/reddit/models/Media/index.ts");
			! function(e) {
				e.POST = "post", e.SUBREDDIT = "subreddit", e.CROSSPOST = "crosspost"
			}(o || (o = {}));
			const r = /(?:reddit\.com\/r\/)(?<subreddit>[\w]+)(?:\/comments\/)?(?<postId>[\w]+)?/,
				i = e => {
					var t, s, i;
					if ((null == e ? void 0 : e.media) && Object(a.K)(e.media) && (null === (s = null === (t = e.media.richtextContent) || void 0 === t ? void 0 : t.document) || void 0 === s ? void 0 : s.length) > 0) {
						const t = Object(n.e)(e.media.richtextContent.document, !0);
						return 0 === t.length ? [] : null === (i = t.reduce) || void 0 === i ? void 0 : i.call(t, (e, t) => {
							var s;
							const {
								subreddit: n,
								postId: a
							} = (null === (s = t.match(r)) || void 0 === s ? void 0 : s.groups) || {};
							return a && n ? [...e, {
								id: `t3_${a}`,
								url: t,
								type: o.POST
							}] : n ? [...e, {
								id: n,
								url: t,
								type: o.SUBREDDIT
							}] : e
						}, [])
					}
					return []
				}
		},
		"./src/reddit/components/ItemCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				redditLinkCard: "_3cx1eazwYdVDDYc1dPyiR5",
				title: "_39Ml3ujYhKuR2k_LFpXVKI",
				shimmer: "_1ow4mWwRckO61gSLo-7v0b",
				crosspostTitle: "_22-ViNeyjOeL6ua8KDyKye",
				crosspostLinkCard: "_2iAbfa2D0rYH0bhwTONlI_",
				subredditLink: "_218c5HLOpg15zujvZOJ-jL",
				crosspostIcon: "_8rGN4GQ7vHLKekUlLRoHr",
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
				hasTitle: "_2g5PF1KCS_D1_wrxAataDQ",
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
				flair: "BkSa7JPwUk1I4IglSRWbb",
				gradientAnimation: "_2KJPHlL6kS7WEhZRcgx8PN"
			}
		},
		"./src/reddit/components/ItemCarousel/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/constants/icons.ts"),
				a = s("./node_modules/lodash/throttle.js"),
				r = s.n(a),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/subreddit/subredditCarousel.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/prettyPrintNumber/index.ts"),
				x = s("./src/lib/timeAgo/index.ts"),
				E = s("./src/reddit/controls/ContentType/index.tsx"),
				v = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = s("./src/reddit/components/Flair/index.tsx"),
				f = s("./src/reddit/selectors/telemetry.ts");
			var y = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/telemetry/index.ts"),
				C = s("./src/reddit/components/ItemCarousel/index.m.less"),
				w = s.n(C);
			const P = ({
				postCard: e,
				post: t,
				className: s
			}) => {
				const {
					url: n,
					commentCount: a,
					createdAt: r,
					score: l,
					title: m,
					thumbnail: u,
					isNsfw: C,
					subreddit: P
				} = e, _ = Object(c.e)(e => e);
				Object(i.useEffect)(() => {
					t && P && Object(O.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "post_post",
						post: e,
						subreddit: t,
						...f.o(s)
					}))(t, P)(_))
				}, []);
				return d.a.createElement(v.a, {
					to: (null == n ? void 0 : n.replace(/^.*\/\/[^\/]+/, "")) || "",
					className: Object(o.a)(w.a.redditLinkCard, s),
					onClick: () => {
						Object(O.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "post_post",
							post: e,
							subreddit: t,
							...f.o(s)
						}))(t, P)(_))
					}
				}, d.a.createElement("div", {
					className: Object(o.a)(w.a.imageContainer)
				}, (null == u ? void 0 : u.url) ? d.a.createElement("img", {
					src: u.url,
					className: Object(o.a)(C && w.a.blur)
				}) : d.a.createElement(E.a, {
					type: "text",
					className: w.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: w.a.postDescription
				}, d.a.createElement("div", null, d.a.createElement("div", {
					className: w.a.title
				}, m), C && d.a.createElement(g.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: w.a.flair
				})), d.a.createElement("div", {
					className: w.a.postStats
				}, l && d.a.createElement(d.a.Fragment, null, d.a.createElement("span", null, Object(h.b)(l), " ", p.fbt._("points", null, {
					hk: "3jOMNh"
				})), d.a.createElement("span", {
					className: w.a.separator
				}, "•")), a && d.a.createElement("span", null, Object(h.b)(a), " ", p.fbt._("comments", null, {
					hk: "2x1D6M"
				})), d.a.createElement("span", {
					className: w.a.separator
				}, "•"), r && d.a.createElement("span", null, Object(x.a)(new Date(r).getTime() / b.Rb, !0)))))
			};
			var _ = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				j = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				T = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				I = s("./src/reddit/icons/svgs/Crosspost/index.tsx");
			const S = ({
				crosspostCard: e,
				post: t,
				className: s
			}) => {
				const {
					permalink: n,
					commentCount: a,
					title: r,
					thumbnail: l,
					isNsfw: m,
					subreddit: u
				} = e, b = Object(c.e)(e => e);
				Object(i.useEffect)(() => {
					t && u && Object(O.a)(Object(T.c)(t, u)(b))
				}, [t, u, b]);
				return d.a.createElement(v.a, {
					to: n,
					className: Object(o.a)(w.a.redditLinkCard, w.a.crosspostLinkCard, s),
					onClick: () => {
						Object(O.a)(Object(T.a)(t, u)(b))
					}
				}, d.a.createElement("div", {
					className: Object(o.a)(w.a.imageContainer)
				}, (null == l ? void 0 : l.url) ? d.a.createElement("img", {
					src: l.url,
					className: Object(o.a)(m && w.a.blur)
				}) : d.a.createElement(E.a, {
					type: "text",
					className: w.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: w.a.postDescription
				}, d.a.createElement("div", {
					className: w.a.postStats
				}, d.a.createElement(I.a, {
					className: w.a.crosspostIcon
				}), d.a.createElement(j.a, {
					to: null == u ? void 0 : u.path,
					onClick: e => {
						e.stopPropagation()
					},
					className: w.a.subredditLink
				}, `r/${null==u?void 0:u.name}`), d.a.createElement("span", {
					className: w.a.separator
				}, "•"), d.a.createElement("span", null, p.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [p.fbt._plural(a || 0, "number")], {
					hk: "3QAYMS"
				}))), d.a.createElement("div", {
					className: Object(o.a)(w.a.title, w.a.crosspostTitle)
				}, m && d.a.createElement(g.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: w.a.flair
				}), r)))
			};
			var B = d.a.memo(({
					className: e
				}) => d.a.createElement("div", {
					className: Object(o.a)(w.a.redditLinkCard, e)
				}, d.a.createElement("div", {
					className: Object(o.a)(w.a.shimmer, w.a.imageContainer)
				}), d.a.createElement("div", {
					className: w.a.postDescription
				}, d.a.createElement("div", {
					className: Object(o.a)(w.a.shimmer, w.a.title)
				}), d.a.createElement("div", {
					className: Object(o.a)(w.a.shimmer, w.a.postStats)
				})))),
				R = s("./src/reddit/actions/subreddit.ts"),
				F = s("./src/reddit/components/SubscribeButton/index.tsx"),
				M = s("./src/reddit/controls/Button/index.tsx"),
				A = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = ({
				id: e,
				index: t,
				name: s,
				subscribersCount: n,
				description: a,
				primaryColor: r,
				icon: l,
				isSubscribed: m,
				banner: p,
				path: b,
				size: x,
				isDiscovery: E,
				post: v,
				className: C,
				isNsfw: P
			}) => {
				const _ = Object(c.d)();
				Object(i.useEffect)(() => {
					_(Object(R.u)(s))
				}, [_, s]);
				const N = Object(c.e)(t => Object(u.R)(t, {
						subredditId: e
					})),
					k = Object(c.e)(e => e);
				Object(i.useEffect)(() => {
					v && N && E && Object(O.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "community_post",
						post: e,
						subreddit: t,
						...f.o(s)
					}))(v, N)(k))
				}, []);
				const T = Object(i.useCallback)(s => {
					if (E) return (({
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
						subreddit: Object(u.R)(a, {
							subredditId: t
						})
					}))({
						action: "click",
						post: v,
						noun: s ? "unsubscribe" : "subscribe",
						subredditId: e,
						index: t,
						source: "post_discovery"
					})
				}, [e, t, m]);
				return d.a.createElement("div", {
					className: Object(o.a)(w.a.subredditItem, null === w.a || void 0 === w.a ? void 0 : w.a[x], C)
				}, d.a.createElement("div", {
					className: w.a.contentWrapper
				}, d.a.createElement("div", {
					className: w.a.bannerWrapper,
					style: {
						backgroundColor: r || void 0
					}
				}, d.a.createElement("img", {
					className: w.a.banner,
					src: p || void 0
				})), d.a.createElement("div", {
					className: w.a.carouselContent
				}, d.a.createElement(j.a, {
					to: b,
					className: w.a.lockup,
					onClick: () => {
						E && Object(O.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "community_post",
							post: e,
							subreddit: t,
							...f.o(s)
						}))(v, N)(k))
					}
				}, d.a.createElement("div", {
					style: "small" === x ? {
						backgroundColor: "grey",
						backgroundImage: `url(${p||""})`
					} : {},
					className: w.a.backgroundImage
				}, l ? d.a.createElement("img", {
					src: l,
					className: w.a.subredditIcon
				}) : d.a.createElement(A.a, {
					className: w.a.subredditIcon
				})), d.a.createElement("div", {
					className: w.a.lockupText
				}, d.a.createElement("span", {
					className: w.a.subredditName
				}, "r/", s), " ", P && d.a.createElement(g.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: w.a.flair
				}), d.a.createElement("span", {
					className: w.a.subscribersCount
				}, L._({
					"*": "{number} members",
					_1: "1 member"
				}, [L._plural(n, "number", Object(h.b)(n))], {
					hk: "4yqFU9"
				})))), d.a.createElement("p", {
					className: w.a.description
				}, a)), d.a.createElement(F.a, {
					className: w.a.subscribeButton,
					identifier: {
						name: s,
						type: "subreddit"
					},
					getEventFactory: T,
					priority: M.c.Tertiary,
					small: !0
				})))
			};

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), U = e => {
				var t, s;
				const o = null === (s = null === (t = e.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
				return o ? Math.floor(e.clientWidth / o) : 0
			}, K = Object(k.c)(({
				title: e,
				className: t,
				itemIds: s,
				size: a = "large",
				hasSubredditNames: p = !1,
				hasPostIds: b = !1,
				isDiscovery: h,
				post: x
			}) => {
				const E = Object(c.d)(),
					[v, g] = Object(i.useState)(null),
					[f, y] = Object(i.useState)(null),
					[O, C] = Object(i.useState)({
						left: !1,
						right: !0
					}),
					[k, j] = Object(i.useState)(0),
					[T] = Object(i.useState)(void 0),
					{
						subredditIds: I,
						crosspostIds: R,
						postIds: F,
						postUrls: M
					} = Object(i.useMemo)(() => s.reduce((e, {
						type: t,
						id: s,
						url: o
					}) => {
						switch (t) {
							case N.a.SUBREDDIT:
								e.subredditIds.push(s.toLowerCase());
								break;
							case N.a.POST:
								o && (e.postUrls[s] = o), e.postIds.push(s);
								break;
							case N.a.CROSSPOST:
								e.crosspostIds.push(s)
						}
						return e
					}, {
						subredditIds: [],
						postIds: [],
						crosspostIds: [],
						postUrls: {}
					}), [s]),
					A = Object(c.e)(e => Object(u.x)(e, I)),
					L = Object(c.e)(e => Object(_.M)(e, F)),
					V = Object(c.e)(e => Object(_.M)(e, R)),
					K = A.reduce((e, t) => (e[p ? t.name.toLocaleLowerCase() : t.id] = t, e), {}),
					H = L.reduce((e, t) => (e[t.id] = t, e), {}),
					q = V.reduce((e, t) => (e[t.id] = t, e), {});
				Object(i.useEffect)(() => {
					((null == I ? void 0 : I.length) || F.length || R.length) && E(Object(l.e)(I, p, I, b, [...R, ...F]))
				}, [I, R, F, E, b, p]);
				const z = s.filter((e, t, s) => t === s.findIndex(t => t.id === e.id)).reduce((e, {
						type: t,
						id: s
					}) => {
						switch (t) {
							case N.a.SUBREDDIT:
								const o = null == K ? void 0 : K[s.toLowerCase()];
								if (!o || !h && o.isNsfw || !h && o.isSubscribed) break;
								e.push({
									type: t,
									props: o
								});
								break;
							case N.a.POST:
								const n = null == H ? void 0 : H[s];
								if (!n) break;
								e.push({
									type: t,
									props: n
								});
								break;
							case N.a.CROSSPOST:
								const a = null == q ? void 0 : q[s];
								if (!a) break;
								e.push({
									type: t,
									props: a
								})
						}
						return e
					}, []),
					Y = e => () => {
						var t, s;
						if (!f) return;
						const o = null === (s = null === (t = null == f ? void 0 : f.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
						if (!o) return;
						const n = (Math.sign(e) ? f.scrollLeft % o : o % f.scrollLeft) || 0,
							a = o * e - n;
						f.scrollBy({
							left: a,
							behavior: "smooth"
						})
					},
					Z = Object(i.useCallback)(() => {
						if (!f) return;
						const {
							width: e
						} = null == f ? void 0 : f.getBoundingClientRect(), t = (null == f ? void 0 : f.scrollLeft) > 0, s = (null == f ? void 0 : f.scrollLeft) < f.scrollWidth - e;
						0 === (null == f ? void 0 : f.scrollLeft) && f.scrollWidth - e == 0 || C({
							left: t,
							right: s
						})
					}, [f]);
				Object(i.useEffect)(() => {
					if (!v || !f) return;
					const e = r()(() => {
						const e = U(f);
						j(e)
					}, 30);
					window.addEventListener("resize", e);
					const t = U(f);
					return j(t), Z(), () => {
						window.removeEventListener("resize", e)
					}
				}, [v, f, Z, k, z.length]);
				const J = () => 1 === z.length ? w.a.flexWidth : 2 === z.length ? w.a.flexWidthTwoItems : w.a.constantWidth;
				return d.a.createElement("div", {
					ref: g,
					className: Object(o.a)(w.a.carouselContainer, t, null === w.a || void 0 === w.a ? void 0 : w.a[a])
				}, d.a.createElement("div", {
					className: w.a.carouselHeader,
					style: {
						width: T
					}
				}, d.a.createElement("h3", {
					className: w.a.carouselTitle
				}, e)), d.a.createElement("div", {
					ref: y,
					onScroll: Z,
					className: Object(o.a)(w.a.itemsContainer, null === w.a || void 0 === w.a ? void 0 : w.a[a]),
					style: {
						width: T
					}
				}, !z.length && Array(3).fill(!0).map((e, t) => d.a.createElement(B, {
					key: t,
					className: J()
				})), null == z ? void 0 : z.map(({
					type: e,
					props: t
				}, s) => {
					var o, n, r;
					switch (e) {
						case N.a.SUBREDDIT:
							const e = t;
							return d.a.createElement(W, D({
								className: J(),
								index: s + 1,
								size: a,
								banner: null === w.a || void 0 === w.a ? void 0 : w.a.bannerBackgroundImage,
								icon: (null === (o = null == e ? void 0 : e.styles) || void 0 === o ? void 0 : o.icon) || (null === (r = null === (n = e.styles) || void 0 === n ? void 0 : n.legacyIcon) || void 0 === r ? void 0 : r.url),
								key: `${null==e?void 0:e.name}:${s}`,
								isDiscovery: !0,
								post: x
							}, e));
						case N.a.POST:
							const i = t;
							return d.a.createElement(P, {
								postCard: {
									...i,
									url: M[i.id]
								},
								className: J(),
								post: x
							});
						case N.a.CROSSPOST:
							const c = t;
							return d.a.createElement(S, {
								crosspostCard: {
									...c
								},
								className: J(),
								post: x
							});
						default:
							return null
					}
				})), z.length > 2 && d.a.createElement("div", {
					className: Object(o.a)(w.a.carouselControls, {
						[w.a.hasTitle]: !!e
					})
				}, d.a.createElement("div", {
					className: Object(o.a)(w.a.buttonWrapper, w.a.left, {
						[w.a.hidden]: !O.left
					})
				}, d.a.createElement("button", {
					className: w.a.scrollButton,
					onClick: Y(-k)
				}, d.a.createElement(m.a, {
					name: n.a.left_fill,
					className: w.a.scrollIcon
				}))), d.a.createElement("div", {
					className: Object(o.a)(w.a.buttonWrapper, w.a.right, {
						[w.a.hidden]: !O.right
					})
				}, d.a.createElement("button", {
					className: w.a.scrollButton,
					onClick: Y(k)
				}, d.a.createElement(m.a, {
					name: n.a.right_fill,
					className: w.a.scrollIcon
				})))))
			});
			t.a = K
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
				return Tt
			})), s.d(t, "b", (function() {
				return It
			})), s.d(t, "a", (function() {
				return St
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
				O = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/helpers/trackers/lightbox.ts"),
				w = s("./src/reddit/helpers/trackers/post.ts"),
				P = s("./src/reddit/components/ItemCarousel/index.tsx"),
				_ = s("./src/reddit/actions/tooltip.ts"),
				N = s("./node_modules/lodash/find.js"),
				k = s.n(N),
				j = s("./node_modules/react-motion/lib/react-motion.js");
			const T = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				I = {},
				S = (e = [], t) => {
					const s = k()(e, {
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
							opacity: Object(j.spring)(1, T)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : o < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(j.spring)(0, T)
						}
					}]
				};
			class B extends r.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), I), this.state = {
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
					return r.a.createElement(j.TransitionMotion, {
						styles: e => S(e, t),
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
			var R = s("./src/reddit/models/Media/index.ts"),
				F = s("./src/reddit/models/Post/index.ts"),
				M = s("./src/reddit/models/Vote/index.ts"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				L = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				W = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/postCreations.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				K = s("./src/reddit/selectors/showPromotedCTA.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				q = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				z = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				Y = s("./src/reddit/components/AwardBadges/index.tsx"),
				Z = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				J = s("./src/reddit/components/Econ/Audio/async.ts"),
				G = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				Q = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				X = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				$ = s("./src/reddit/components/ExpandoButton/index.tsx"),
				ee = s("./src/reddit/components/FlairWrapper/index.tsx"),
				te = s("./src/reddit/components/Flatlist/index.tsx"),
				se = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				oe = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				ne = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				ae = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				re = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				ie = s("./src/reddit/components/ModModeReports/index.tsx"),
				de = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ce = s("./src/reddit/components/NotificationButton/index.tsx"),
				le = s("./src/reddit/components/PostContainer/index.tsx"),
				me = s("./src/higherOrderComponents/makeAsync.tsx"),
				ue = s("./src/lib/loadWithRetries/index.ts"),
				pe = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const be = Object(me.a)({
				ErrorComponent: () => r.a.createElement(pe.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(ue.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => r.a.createElement(pe.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var he = e => r.a.createElement(be, e),
				xe = s("./src/reddit/components/PostList/index.tsx"),
				Ee = s("./src/reddit/components/PostMedia/index.tsx"),
				ve = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ge = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				fe = s("./src/reddit/components/PostTitle/index.tsx"),
				ye = s("./src/reddit/components/PostTopLine/index.tsx"),
				Oe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Ce = s("./src/reddit/components/ReadingIndicator/async.tsx"),
				we = s("./src/reddit/components/SourceLink/index.tsx"),
				Pe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_e = s("./src/reddit/constants/componentSizes.ts"),
				Ne = s("./src/reddit/constants/componentTestIds.ts"),
				ke = s("./src/reddit/constants/postLayout.ts"),
				je = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Te = s("./src/reddit/helpers/postEvent.ts"),
				Ie = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Se = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Be = s("./src/reddit/selectors/postFlair.ts"),
				Re = s("./src/reddit/models/Audio/index.ts"),
				Fe = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				Me = s("./src/reddit/selectors/experiments/econ/index.ts"),
				Ae = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Le = s("./src/reddit/constants/experiments.ts"),
				We = s("./src/reddit/helpers/chooseVariant/index.ts"),
				De = s("./src/reddit/selectors/experiments/presence.ts");
			const Ve = e => {
					return Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: Le.ff
					}) === Le.Vc
				},
				Ue = e => {
					if (Object(De.a)(e)) return !1;
					return Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: Le.ef
					}) === Le.Vc
				},
				Ke = (e, {
					postId: t
				}) => {
					const s = Object(U.H)(e, {
						postId: t
					});
					return !(Object(De.a)(e) || !s || s.isSponsored) && Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: Le.df
					}) === Le.Vc
				};
			var He = s("./node_modules/fbt/lib/FbtPublic.js"),
				qe = s("./src/reddit/constants/colors.ts"),
				ze = s("./src/reddit/icons/fonts/index.tsx"),
				Ye = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Ze = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Je = s.n(Ze);
			const Ge = r.a.createElement(ze.a, {
				className: Je.a.BlockIcon,
				name: "block"
			});
			var Qe = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return r.a.createElement(Ye.a, {
						className: Je.a.bannerBase,
						color: qe.a.dayModeActionIcon,
						icon: Ge,
						title: He.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && r.a.createElement("button", {
							className: Je.a.expandButton,
							onClick: t
						}, He.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: Je.a.blockedAuthorTextWrapper
					})
				},
				Xe = s("./src/config.ts"),
				$e = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				et = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				tt = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				st = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				ot = s.n(st);
			const {
				fbt: nt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), at = () => nt._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [nt._param("=User Agreement", r.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, nt._("User Agreement", null, {
				hk: "3MHgRl"
			}))), nt._param("=Content Policy", r.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, nt._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), rt = () => nt._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [nt._param("=User Agreement", r.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, nt._("User Agreement", null, {
				hk: "yMHtU"
			}))), nt._param("=Content Policy", r.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, nt._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var it = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: o,
					subredditName: n
				} = e, a = t ? ((e, t, s) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return nt._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case F.g.Author:
							return nt._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case F.g.AuthorDeleted:
							return nt._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case F.g.AutomodFiltered:
							return nt._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case F.g.CommunityOps:
							return nt._("This post was removed by Reddit admin, u/{username}.", [nt._param("username", t)], {
								hk: "34nHWu"
							});
						case F.g.ContentTakedown:
							return nt._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case F.g.CopyrightTakedown:
							return nt._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case F.g.Moderator:
							return nt._("This post was removed by r/{subredditName} moderator, u/{username}.", [nt._param("subredditName", s), nt._param("username", t)], {
								hk: "270bcn"
							});
						case F.g.Reddit:
							return nt._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return nt._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(o, s, n) : ((e, t) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return nt._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case F.g.Author:
							return nt._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case F.g.AuthorDeleted:
							return nt._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case F.g.AutomodFiltered:
							return nt._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case F.g.CommunityOps:
							return nt._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case F.g.ContentTakedown:
							return nt._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case F.g.CopyrightTakedown:
							return nt._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case F.g.Moderator:
							return nt._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [nt._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case F.g.Reddit:
							return nt._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return nt._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(o, n), i = t ? (e => {
					switch (e) {
						case F.g.AntiEvilOps:
							return r.a.createElement(at, null);
						case F.g.AuthorDeleted:
						case F.g.Author:
							return nt._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case F.g.AutomodFiltered:
							return nt._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case F.g.CommunityOps:
							return nt._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [nt._param("=just ask", r.a.createElement("a", {
								className: ot.a.link,
								href: `${Xe.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, nt._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case F.g.ContentTakedown:
							return r.a.createElement(rt, null);
						case F.g.CopyrightTakedown:
							return nt._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case F.g.Moderator:
							return nt._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case F.g.Reddit:
							return nt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return nt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(o) : ((e, t) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return r.a.createElement(at, null);
						case F.g.AuthorDeleted:
						case F.g.Author:
							return nt._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case F.g.AutomodFiltered:
							return nt._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [nt._param("=[subreddit name]", r.a.createElement("a", {
								className: ot.a.link,
								href: `${Xe.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, nt._("{subreddit name}", [nt._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case F.g.CommunityOps:
							return nt._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case F.g.ContentTakedown:
							return r.a.createElement(rt, null);
						case F.g.CopyrightTakedown:
							return nt._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case F.g.Moderator:
							return nt._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case F.g.Reddit:
						default:
							return nt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(o, n), d = t ? qe.a.warning : qe.a.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case F.g.AntiEvilOps:
						case F.g.AutomodFiltered:
						case F.g.CommunityOps:
						case F.g.ContentTakedown:
						case F.g.CopyrightTakedown:
						case F.g.Reddit:
							t = $e.a;
							break;
						case F.g.AuthorDeleted:
						case F.g.Author:
							t = tt.b;
							break;
						case F.g.Moderator:
							t = et.a;
							break;
						default:
							t = $e.a
					}
					return r.a.createElement(t, {
						className: ot.a.icon
					})
				})(o);
				return r.a.createElement(Ye.a, {
					className: ot.a.BannerBase,
					color: d,
					icon: c,
					subtitle: i,
					title: a
				})
			};

			function dt(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: o
				} = e;
				return r.a.createElement(r.a.Fragment, null, o && s.removedByCategory && r.a.createElement(it, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: o.name
				}))
			}
			var ct = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				lt = s("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				mt = s("./src/reddit/actions/modal.ts"),
				ut = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				pt = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				bt = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				ht = s("./src/reddit/components/PostUnavailableBanner/index.m.less"),
				xt = s.n(ht);
			const Et = r.a.createElement(ze.a, {
				className: xt.a.RemoveIcon,
				name: "delete_fill"
			});
			var vt = () => r.a.createElement(Ye.a, {
					className: xt.a.bannerBase,
					color: qe.a.dayModeActionIcon,
					icon: Et,
					title: He.fbt._("Sorry, this post is no longer available.", null, {
						hk: "sb8eO"
					})
				}),
				gt = s("./src/reddit/components/PostContent/index.m.less"),
				ft = s.n(gt);
			const {
				fbt: yt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ot = p.a.wrapped(fe.c, "PostTitle", ft.a), Ct = p.a.wrapped($.a, "ExpandoButton", ft.a), wt = p.a.wrapped(B, "ClassicExpandoMotion", ft.a), Pt = p.a.wrapped(te.c, "FullWidthFlatlist", ft.a), _t = r.a.createElement("p", {
				className: ft.a.VideoProcessingStatus
			}, yt._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), Nt = Object(je.u)({
				isCommentsPage: je.x,
				pageLayer: e => e
			}), kt = Object(i.b)(() => Object(l.c)({
				activeModalId: A.a,
				flairStyleTemplate: je.V,
				currentUser: H.k,
				crosspost: U.d,
				hideNSFWPref: H.C,
				imageGalleryCurrentItem: U.i,
				isAdminOrMod: (e, t) => {
					const s = Object(U.V)(e, {
						postId: t.postId
					});
					return !!s && Object(W.c)(e, {
						subredditId: s.id
					})
				},
				isCurrentUserProfilePost: U.l,
				isExpanded: U.m,
				isFollowed: U.t,
				isFollowedExpired: U.o,
				showPromotedCTA: K.a,
				post: U.H,
				moderatorPermissions: D.l,
				modModeEnabled: je.T,
				shouldTryToShowCrosspostModal: pt.e,
				showAwardsPlaque: L.a,
				showEditFlair: Be.a,
				subredditOrProfile: U.V,
				isEditing: V.M,
				userIsOp: H.pb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Ae.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Ae.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: Ke,
				isReadingIndicatorsReadTestEnabled: Ue,
				isReadingIndicatorsWriteTestEnabled: Ve,
				isRecordingEnabled: Me.z,
				isTrueblockPCBlockeeEnabled: Se.b
			}), (e, {
				pageLayer: t,
				postId: s
			}) => ({
				onIgnoreReports: () => e(Object(x.fb)(s)),
				onOpenReportsDropdown: t => e(Object(_.h)({
					tooltipId: t
				})),
				onVoteClick: t => {
					const o = t === M.a.upvoted ? Object(x.jb)(s) : Object(x.w)(s);
					e(o)
				},
				fireAdPixelsOfType: (t, s) => e(Object(x.z)(t, s)),
				openPost: t => e(Object(x.L)(t)),
				onFollowPost: t => e(Object(x.ib)(s, t)),
				onFollowPostExpired: () => e(Object(x.X)({
					id: s,
					expiresAt: 0
				}))
			})), jt = e => e.media && e.media.type === R.o.EMBED && e.media.provider === R.v.Imgur && e.media.height > 700, Tt = new b.a, It = "VISIBLE", St = "NOT_VISIBLE", Bt = e => Tt.publish(e ? It : St), Rt = {
				threshold: [.85, .001],
				rootMargin: `${1-_e.f}px 0px 0px 0px`
			}, Ft = e => {
				for (const t of e) {
					const {
						intersectionRatio: e
					} = t;
					e >= .85 && Bt(!1), e <= .001 && Bt(!0)
				}
			}, Mt = p.a.wrapped(d.a, "ThumbLink", ft.a), At = ({
				post: e,
				templatePlaceholderImage: t,
				shouldShowFollowButton: s,
				isFollowed: o,
				onFollowPostClick: n
			}) => {
				const a = e.source ? r.a.createElement(Z.a, {
					post: e,
					forceShowNSFW: !0,
					templatePlaceholderImage: t
				}) : r.a.createElement(Mt, {
					to: Object(O.b)(e.permalink)
				}, r.a.createElement(Z.a, {
					post: e,
					forceShowNSFW: !0
				}));
				return r.a.createElement("div", {
					className: ft.a.classicThumbnail
				}, s && r.a.createElement(ce.a, {
					className: ft.a.classicNotificationButton,
					isFilled: !!o,
					onClick: n,
					hasTooltip: !0,
					tooltipText: yt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), a)
			}, Lt = ({
				post: e,
				isExpanded: t,
				scrollerItemRef: s
			}) => r.a.createElement(wt, {
				content: r.a.createElement(r.a.Fragment, null, r.a.createElement(Ee.a, {
					className: ft.a.ClassicPostMedia,
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
			t.c = Nt(kt(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: o,
					fireAdPixelsOfType: d,
					flairStyleTemplate: l,
					forceOpenInNewTab: p,
					hideNSFWPref: b,
					imageGalleryCurrentItem: x,
					isAdminOrMod: O,
					isCommentCountAnimation: _,
					isCommentsPage: N,
					isCountAnimShadowTestEnabled: k,
					isCrosspostRecommendationsExperimentEnabled: j,
					isCurrentUserProfilePost: T,
					isEditing: I,
					isExpanded: S,
					isFollowed: B,
					isFollowedExpired: M,
					isOverlay: A,
					isReadingIndicatorsExperimentEnabled: L,
					isReadingIndicatorsReadTestEnabled: W,
					isReadingIndicatorsWriteTestEnabled: D,
					isRecordingEnabled: V,
					isVoteCountAnimation: U,
					moderatorPermissions: K,
					modModeEnabled: H,
					onFollowPost: Z,
					onFollowPostExpired: $,
					onIgnoreReports: ce,
					onOpenReportsDropdown: me,
					openPost: ue,
					onVoteClick: pe,
					post: be,
					scrollerItemRef: _e,
					sendEvent: je,
					shouldTryToShowCrosspostModal: Be,
					showAwardsPlaque: Ae,
					showEditFlair: Le,
					showPromotedCTA: We,
					subredditOrProfile: De,
					userIsOp: Ve,
					isTrueblockPCBlockeeEnabled: Ue,
					pageLayer: Ke
				} = e, He = Object(Pe.b)(), qe = Object(a.useRef)(null), [ze, Ye] = Object(a.useState)(be.authorIsBlocked), Ze = Object(R.J)(be), Je = Object(i.e)(e => Object(Se.a)(e)), Ge = Object(i.e)(e => Object(Me.a)(e)), Xe = Object(c.a)(be), $e = L || W || D;
				Object(a.useEffect)(() => {
					M && $()
				}, []);
				const et = Object(i.d)(),
					tt = Object(a.useRef)(null);
				Object(a.useEffect)(() => {
					if (j && Be) return et(Object(lt.a)(be)), tt.current = setTimeout(() => {
						et(Object(mt.h)(ut.a)), et(Object(lt.b)())
					}, ut.b), () => {
						et(Object(lt.b)()), et(Object(mt.g)(ut.a)), tt.current && clearTimeout(tt.current)
					}
				}, []), Object(Ie.a)(qe, Ft, Rt);
				const st = be.isSponsored ? Object(xe.b)(be.id, {
						fireAdPixelsOfType: d,
						openPost: ue
					}) : n.a,
					ot = Object(y.a)(K),
					nt = Object(g.a)(K),
					at = Object(f.a)(K),
					rt = ot || nt,
					it = ((e, t, s) => {
						const [o, n] = e ? [Object(v.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return o || t || n
					})(o, rt, be),
					pt = !!be.media && (be.media.type === R.o.RTJSON || be.media.type === R.o.TEXT),
					ht = Ve && pt,
					xt = Object(re.d)(be),
					Et = Object(de.c)(be);
				let gt;
				const yt = !(H && ot),
					wt = Object(ve.b)({
						hide: !L && yt,
						editPost: !L && yt,
						save: yt,
						report: !L && yt
					}),
					Nt = be.removedByCategory === F.g.AuthorDeleted,
					kt = o && (o.displayText === be.author || o.username === be.author),
					Tt = !!be.unrepliableReason,
					It = !(Tt && Ue) && !Nt && !jt(be) && (kt || O || !(be.removedByCategory && be.media && (Object(R.M)(be.media) || Object(R.K)(be.media) || Object(R.E)(be.media)))),
					St = Object(m.t)(be, x),
					{
						source: Bt
					} = St,
					Mt = be.removedByCategory === F.g.Reddit && Object(h.e)(be.created) > 24,
					Wt = be.removedByCategory && be.removedByCategory !== F.g.Reddit || Mt,
					Dt = !Wt && !be.isArchived,
					Vt = Object(a.useCallback)(() => {
						Z(B ? F.f.UNFOLLOWED : F.f.FOLLOWED), He(B ? Object(w.m)(be.id) : Object(w.c)(be.id))
					}, [Z, He, B, be.id]),
					Ut = r.a.createElement(Ot, {
						post: be,
						innerRef: qe,
						size: fe.b.ExtraLarge,
						isOverlay: A,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Kt = r.a.createElement(ct.a, {
						post: be,
						showViewCount: it
					}),
					Ht = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: o
						} = e, n = Object(i.e)(e => Object(Re.b)(o) && Object(Me.a)(e));
						return s ? ke.g.Classic : Object(Fe.c)(o) ? ke.g.Large : n ? ke.g.Large : t ? ke.g.Large : o.media && !jt(o) ? ke.g.Large : ke.g.Medium
					})(e),
					qt = Object(i.e)(bt.b),
					zt = Object(se.b)(be),
					Yt = () => {
						const t = !(Tt && Je && ze),
							o = Object(R.I)(be);
						return Tt && o ? r.a.createElement(vt, null) : Je && ze ? r.a.createElement(Qe, {
							onBannerClick: () => Ye(!1),
							isExpandable: Ze
						}) : be.source && Ht === ke.g.Medium ? r.a.createElement(we.a, {
							post: be,
							isCommentsPage: N,
							pageLayer: Ke
						}) : It && !I && Ht === ke.g.Large ? r.a.createElement(Ee.a, {
							className: Object(u.a)(ft.a.LargePostMedia, {
								[ft.a.isCommentsPage]: N
							}),
							isCommentsPage: !0,
							isListing: !1,
							isNotCardView: A,
							isOverlay: A,
							post: be,
							shouldLoad: !0,
							showFull: !0,
							shouldPause: !A,
							showCentered: !0,
							showPromotedCTA: We,
							scrollerItemRef: _e
						}) : t && Ht === ke.g.Classic ? r.a.createElement(r.a.Fragment, null, r.a.createElement(Ct, {
							crosspost: s || void 0,
							isExpanded: !!S,
							post: be,
							useMediaIcons: !1
						}), Lt(e)) : null
					};
				if (Ht === ke.g.Classic) {
					const e = Object(E.a)(be);
					gt = r.a.createElement("div", {
						"data-test-id": Ne.e
					}, r.a.createElement(ge.a, {
						model: be,
						handleVote: pe,
						isCountAnimShadowTestEnabled: k,
						isOverlay: A,
						isVoteCountAnimation: U,
						postId: be.id
					}), r.a.createElement("div", {
						className: ft.a.mainBody
					}, r.a.createElement("div", {
						className: ft.a.content
					}, r.a.createElement(ye.a, {
						hideAwards: Ae,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: N,
						isCurrentUserProfilePost: T,
						isOverlay: !!A,
						isTopicPage: !1,
						post: be,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!A && !be.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: De,
						shouldShowFollowButton: Dt && !e,
						isFollowed: B,
						onFollowPostClick: Vt
					}), Ut, r.a.createElement(ee.a, {
						className: N ? ft.a.leftPadding : void 0,
						post: be,
						sendEvent: je
					}), H && ot && Et && r.a.createElement(ie.a, {
						onIgnoreReports: ce,
						reportable: be
					}), r.a.createElement(oe.d, null), r.a.createElement("div", {
						className: ft.a.FlatlistContainer
					}, Yt(), Ae && r.a.createElement(Y.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: be,
						tooltipType: A ? Oe.c.Lightbox : void 0
					}), r.a.createElement(Pt, {
						currentUser: o,
						hasModFlairPerms: nt,
						hasModFullPerms: at,
						hasModPostPerms: ot,
						isOverlay: A,
						onIgnoreReports: ce,
						onOpenReportsDropdown: me,
						modModeEnabled: H,
						post: be,
						showUpvotePercent: !0,
						showViewCount: it,
						useFlatlistBreakpoints: wt,
						isCommentCountAnimation: _,
						isCountAnimShadowTestEnabled: k
					}))), e && r.a.createElement(At, {
						post: be,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Dt,
						isFollowed: B,
						onFollowPostClick: Vt
					})))
				} else if (Ht === ke.g.Medium) {
					const e = Object(E.a)(be);
					gt = r.a.createElement("div", {
						"data-test-id": Ne.e
					}, r.a.createElement(ge.a, {
						model: be,
						handleVote: pe,
						isCountAnimShadowTestEnabled: k,
						isOverlay: A,
						isReadingIndicatorsExperimentEnabled: L,
						isVoteCountAnimation: U,
						postId: be.id
					}), r.a.createElement("div", {
						className: ft.a.mainBody
					}, r.a.createElement("div", {
						className: ft.a.content
					}, r.a.createElement(ye.a, {
						hideAwards: Ae,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: N,
						isCurrentUserProfilePost: T,
						isOverlay: !!A,
						isTopicPage: !1,
						post: be,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!A && !be.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: De,
						shouldShowFollowButton: Dt && !e,
						isFollowed: B,
						onFollowPostClick: Vt
					}), Ut, Yt(), Object(R.O)(be) && _t, r.a.createElement(ee.a, {
						className: N ? ft.a.leftPadding : void 0,
						post: be,
						sendEvent: je
					}), De && Wt && r.a.createElement(dt, {
						isAdminOrMod: O,
						post: be,
						subredditOrProfile: De
					}), H && ot && Et && r.a.createElement(ie.a, {
						onIgnoreReports: ce,
						reportable: be
					})), e && !Xe && r.a.createElement(ne.a, {
						post: be,
						forceShowNSFW: !0,
						hasModPostPerms: rt,
						isCommentsPage: N,
						isOverlay: !0,
						modModeEnabled: H,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: De,
						shouldShowFollowButton: Dt,
						isFollowed: B,
						onFollowPostClick: Vt
					})), r.a.createElement(oe.d, null), Ae && r.a.createElement(Y.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: be,
						tooltipType: A ? Oe.c.Lightbox : void 0
					}), !!qt && r.a.createElement(P.a, {
						itemIds: zt,
						hasSubredditNames: !0,
						hasPostIds: !0,
						isDiscovery: !0,
						post: be,
						size: "small"
					}), r.a.createElement("div", {
						className: ft.a.controlsContainer
					}, r.a.createElement(te.c, {
						currentUser: o,
						hasModFlairPerms: nt,
						hasModFullPerms: at,
						hasModPostPerms: ot,
						isOverlay: A,
						modModeEnabled: H,
						onIgnoreReports: ce,
						onOpenReportsDropdown: me,
						post: be,
						showEditPost: ht,
						showEditFlair: Le,
						tooltipType: A ? Oe.c.Lightbox : void 0,
						useFlatlistBreakpoints: wt,
						isCommentCountAnimation: _,
						isCountAnimShadowTestEnabled: k,
						shouldHideItems: L
					}), $e && r.a.createElement(Ce.a, {
						isReadingIndicatorsExperiment: L,
						isReadLoadTest: W,
						isWriteLoadTest: D,
						postId: be.id
					}), !L && Kt))
				} else Ht === ke.g.Large && (gt = r.a.createElement("div", {
					"data-test-id": Ne.e
				}, r.a.createElement(ge.a, {
					model: be,
					handleVote: pe,
					isCountAnimShadowTestEnabled: k,
					isOverlay: A,
					isReadingIndicatorsExperimentEnabled: L,
					isVoteCountAnimation: U,
					postId: be.id
				}), Object(Fe.c)(be) && r.a.createElement(r.a.Fragment, null, r.a.createElement(Q.a, {
					post: be
				}), r.a.createElement(G.a, {
					post: be
				})), !Object(Fe.c)(be) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ye.a, {
					forceOpenInNewTab: p,
					hideAwards: Ae,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: N,
					isCurrentUserProfilePost: T,
					isOverlay: !!A,
					isTopicPage: !1,
					post: be,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!A && !be.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: De,
					shouldShowFollowButton: Dt,
					isFollowed: B,
					onFollowPostClick: Vt
				}), Ut, ((e, t, s, o) => e.source && !t && (s || o))(be, s, A, N) && r.a.createElement(we.a, {
					post: be,
					isCommentsPage: N,
					pageLayer: Ke
				})), r.a.createElement(ee.a, {
					className: N ? ft.a.leftPadding : void 0,
					post: be,
					sendEvent: je
				}), De && Wt && r.a.createElement(dt, {
					isAdminOrMod: O,
					post: be,
					subredditOrProfile: De
				}), I && r.a.createElement(he, {
					post: be
				}), Yt(), We && Bt && Bt.url && r.a.createElement(q.a, {
					className: ft.a.adLinkWrapper
				}, r.a.createElement(z.a, {
					post: be,
					adLinkContent: St
				})), H && ot && xt && r.a.createElement("div", {
					className: ft.a.modModeBannerWrapper
				}, r.a.createElement(ae.a, {
					thing: be
				})), H && ot && Et && r.a.createElement("div", {
					className: ft.a.modModeBannerWrapper
				}, r.a.createElement(ie.a, {
					onIgnoreReports: ce,
					reportable: be
				})), Ge && Object(Re.b)(be) && r.a.createElement(J.a, {
					post: be,
					isRecordingEnabled: V
				}), r.a.createElement(oe.d, null), Ae && r.a.createElement(Y.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: be,
					tooltipType: A ? Oe.c.Lightbox : void 0
				}), !!qt && r.a.createElement(P.a, {
					itemIds: zt,
					hasSubredditNames: !0,
					hasPostIds: !0,
					isDiscovery: !0,
					post: be,
					size: "small"
				}), r.a.createElement("div", {
					className: ft.a.controlsContainer
				}, r.a.createElement(te.c, {
					currentUser: o,
					forceOpenInNewTab: p,
					hasModFlairPerms: nt,
					hasModFullPerms: at,
					hasModPostPerms: ot,
					isOverlay: A,
					modModeEnabled: H,
					onIgnoreReports: ce,
					onOpenReportsDropdown: me,
					post: be,
					showEditPost: ht,
					showEditFlair: Le,
					tooltipType: A ? Oe.c.Lightbox : void 0,
					useFlatlistBreakpoints: wt,
					isCommentCountAnimation: _,
					isCountAnimShadowTestEnabled: k,
					shouldHideItems: L
				}), $e && r.a.createElement(Ce.a, {
					isReadingIndicatorsExperiment: L,
					isReadLoadTest: W,
					isWriteLoadTest: D,
					postId: be.id
				}), !L && Kt)));
				const Zt = Object(a.useCallback)((e, t) => Object(w.h)(e, t), []);
				return r.a.createElement(le.a, {
					className: Object(u.a)(t, ft.a.postContainer, {
						[ft.a.hasEventMeta]: Object(Te.a)(be)
					}),
					isOverlay: A,
					post: be,
					eventFactory: A ? C.b : Zt,
					onClick: st
				}, r.a.createElement(X.a, {
					post: be
				}), gt)
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
				O = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/PostTopLine/index.m.less"),
				P = s.n(w);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: n,
				hideNSFWPref: w,
				hostPostData: _,
				iconClassName: N,
				inSubredditOrProfile: k,
				isCommentsPage: j,
				isCompactPinnedPost: T,
				isCurrentUserProfilePost: I,
				isOverlay: S,
				isTopicPage: B,
				listingKey: R,
				post: F,
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
					q = D && Object(O.h)(D),
					z = Object(r.e)(e => {
						if (!q) return !0;
						const t = Object(C.sb)(e, F.author || "");
						return !t || t.enableFollowers
					});
				return a.a.createElement("div", {
					className: Object(i.a)(P.a.container, e)
				}, L && D && a.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, a.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: D.url
				}, W && a.a.createElement(p.b, {
					className: Object(i.a)(P.a.subredditIcon, N),
					shouldHideNsfwIcon: w,
					subredditOrProfile: D
				}))), a.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, L && a.a.createElement(c.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), a.a.createElement(u.d, {
					className: P.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: S ? u.c.Lightbox : void 0,
					post: F,
					showSub: L,
					subredditOrProfile: D
				}), a.a.createElement(m.a, {
					className: P.a.postBadges,
					displayText: D ? D.displayText : null,
					inSubredditOrProfile: k,
					isCompactPinnedPost: T,
					post: F,
					tooltipType: S ? u.c.Lightbox : void 0
				}), !H && a.a.createElement(d.a, {
					isPostDetail: j,
					thing: F,
					tooltipType: S ? u.c.Lightbox : void 0
				})), D && z && L && M && !I && a.a.createElement(h.a, {
					className: P.a.SubscribeButton,
					getEventFactory: e => Object(g.h)(F.id, e ? "unsubscribe" : "subscribe", "post", R, _),
					identifier: {
						name: D.name,
						type: q ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: F.id,
					size: E.d.XS
				}), A && a.a.createElement(v.b, {
					isSponsored: F.isSponsored,
					postId: F.id,
					href: Object(y.D)(F),
					source: F.source
				}, a.a.createElement(f.a, {
					className: P.a.outboundLinkIcon
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
		"./src/reddit/helpers/trackers/features/expandedCrossposts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			var o = s("./src/reddit/selectors/telemetry.ts");
			const n = (e, t) => s => ({
					source: "post_discovery",
					action: "view",
					noun: "crosspost",
					post: e,
					subreddit: t,
					...o.o(s)
				}),
				a = (e, t) => s => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost",
					post: e,
					subreddit: t,
					...o.o(s)
				}),
				r = () => e => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost_see_all",
					...o.o(e)
				})
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
					experimentName: o.tc
				});
				return !(!t || Object(o.lf)(t))
			}
		},
		"./src/reddit/selectors/experiments/subredditDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const r = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.Ke
					}) === o.Vc
				},
				i = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: a.e,
						experimentName: o.Je
					}) === o.Vc
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~StandalonePostPage.5d8c800b5f5330bc6ff5.js.map