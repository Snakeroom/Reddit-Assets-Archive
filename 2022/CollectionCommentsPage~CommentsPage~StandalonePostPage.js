// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~StandalonePostPage.3a889d3d03ae593637f0.js
// Retrieved at 1/19/2022, 7:10:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~StandalonePostPage"], {
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/components/CallToActionButton/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: d,
					callToAction: l,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let u = d.displayText;
				return d.displayText.length >= 40 && (u = d.displayText.slice(0, 40 - "...".length) + "..."), a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: c.a.leftSideContent
				}, m && !n && a.a.createElement("span", {
					className: c.a.caption,
					title: m
				}, m), a.a.createElement(i.a, {
					href: d.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d,
					className: c.a.displayUrl
				}, u)), l && a.a.createElement(r.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d
				}, l))
			}
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return C
			})), s.d(t, "a", (function() {
				return _
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				E = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				y = s.n(g),
				O = s("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const C = 8,
				_ = 1,
				w = O.a.div("Container", y.a),
				k = O.a.div("PostMetaWrapper", y.a),
				N = O.a.wrapped(p.c, "PostTitle", y.a),
				T = O.a.div("FlatList", y.a),
				j = O.a.div("FlatItem", y.a),
				S = O.a.span("FlatListDotSpacer", y.a),
				I = O.a.wrapped(w, "LinkContainer", y.a),
				R = O.a.div("Content", y.a),
				B = O.a.div("ThumbnailContainer", y.a),
				F = Object(d.c)({
					isCurrentUserProfilePost: f.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Mb.TOPIC),
					shouldOpenPostInNewTab: v.cb
				}),
				L = Object(r.b)(F);
			t.c = Object(E.b)(L(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
					post: r,
					subredditOrProfile: i
				} = e;
				if (!r) return null;
				const d = {
						post: r,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${n.isListing}`
					},
					c = t;
				return r && !r.media ? a.a.createElement(I, {
					className: c
				}, a.a.createElement(R, null, a.a.createElement(k, null, a.a.createElement(u.a, d)), M(r), r.source && a.a.createElement(b.a, {
					post: r
				}), W(e)), V(e)) : a.a.createElement(w, {
					className: c
				}, a.a.createElement(k, null, a.a.createElement(u.a, d)), M(r), A(e), W(e))
			}));
			const M = e => a.a.createElement(N, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				A = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = {
						...t,
						post: s,
						crosspost: t.post
					};
					return a.a.createElement("div", null, a.a.createElement(m.a, P({}, o, {
						className: y.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				W = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return a.a.createElement(T, null, a.a.createElement(j, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), a.a.createElement(S, null), a.a.createElement(j, null, D(e)))
				},
				D = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return a.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(n, "comment count", Object(l.b)(n))], {
						hk: "xPYWL"
					}))
				},
				V = e => a.a.createElement(B, null, a.a.createElement(h.a, {
					post: e.post
				}))
		},
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
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				E = s("./src/telemetry/models/Outbound.ts"),
				f = s("./src/reddit/components/ExpandoButton/index.m.less"),
				v = s.n(f);
			const g = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.ab)(Object(u.b)(t.permalink), t.id))
				})),
				y = (e, t = !1, s) => {
					const o = Object(d.a)(v.a.icon, v.a.hideOnHover);
					if (t) return a.a.createElement(b.a, {
						name: "crosspost",
						className: o
					});
					if (s.pollData) return a.a.createElement(b.a, {
						name: "poll_post",
						className: o
					});
					if (s.audioRoom) return a.a.createElement(b.a, {
						name: "audio",
						className: o
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return a.a.createElement(b.a, {
								name: "gif_post",
								className: o
							});
						case h.o.IMAGE:
							return a.a.createElement(b.a, {
								name: "image_post",
								className: o
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return a.a.createElement(b.a, {
								name: "text_post",
								className: o
							});
						case h.o.VIDEO:
							return a.a.createElement(b.a, {
								name: "video_post",
								className: o
							});
						case h.o.GALLERY:
							return a.a.createElement(b.a, {
								name: "media_gallery",
								className: o
							});
						case h.o.EMBED:
						default:
							return a.a.createElement(b.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = g(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: l,
					isExpanded: u,
					post: h,
					toggle: f,
					useMediaIcons: g
				} = e, O = s || h, P = Object(r.e)(x.b), C = t => {
					P && (t.preventDefault(), e.showModalOnPostLinkClick(O))
				}, _ = n && !!s;
				return O.media && !(("rtjson" === O.media.type || "text" === O.media.type || "liveaudio" === O.media.type) && !Object(p.a)(O)) || !!h.pollData ? a.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, v.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					onClick: f
				}, u ? a.a.createElement(b.a, {
					name: "collapse",
					className: v.a.icon
				}) : g ? a.a.createElement(a.a.Fragment, null, y(O.media && O.media.type, _, h), a.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(v.a.icon, v.a.showOnHover)
				})) : a.a.createElement(b.a, {
					name: "expand",
					className: v.a.icon
				})) : O.source && O.source.url ? a.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, v.a.outer),
					"data-click-id": "expando_open",
					href: O.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? E.SourceElement.PostImage : E.SourceElement.ListingPostImage,
					target: "_blank"
				}, a.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(v.a.icon, v.a.outboundLinkIcon)
				})) : a.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, v.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(O.permalink),
					rel: "nofollow",
					onClick: C
				}, a.a.createElement(b.a, {
					name: "text_post",
					className: v.a.icon
				}))
			})
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
				f = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./src/reddit/components/Flair/index.tsx"),
				g = s("./src/reddit/selectors/telemetry.ts");
			var y = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/telemetry/index.ts"),
				P = s("./src/reddit/components/ItemCarousel/index.m.less"),
				C = s.n(P);
			const _ = ({
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
					isNsfw: P,
					subreddit: _
				} = e, w = Object(c.e)(e => e);
				Object(i.useEffect)(() => {
					t && _ && Object(O.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "post_post",
						post: e,
						subreddit: t,
						...g.o(s)
					}))(t, _)(w))
				}, []);
				return d.a.createElement(f.a, {
					to: (null == n ? void 0 : n.replace(/^.*\/\/[^\/]+/, "")) || "",
					className: Object(o.a)(C.a.redditLinkCard, s),
					onClick: () => {
						Object(O.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "post_post",
							post: e,
							subreddit: t,
							...g.o(s)
						}))(t, _)(w))
					}
				}, d.a.createElement("div", {
					className: Object(o.a)(C.a.imageContainer)
				}, (null == u ? void 0 : u.url) ? d.a.createElement("img", {
					src: u.url,
					className: Object(o.a)(P && C.a.blur)
				}) : d.a.createElement(E.a, {
					type: "text",
					className: C.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: C.a.postDescription
				}, d.a.createElement("div", null, d.a.createElement("div", {
					className: C.a.title
				}, m), P && d.a.createElement(v.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: C.a.flair
				})), d.a.createElement("div", {
					className: C.a.postStats
				}, l && d.a.createElement(d.a.Fragment, null, d.a.createElement("span", null, Object(h.b)(l), " ", p.fbt._("points", null, {
					hk: "3jOMNh"
				})), d.a.createElement("span", {
					className: C.a.separator
				}, "•")), a && d.a.createElement("span", null, Object(h.b)(a), " ", p.fbt._("comments", null, {
					hk: "2x1D6M"
				})), d.a.createElement("span", {
					className: C.a.separator
				}, "•"), r && d.a.createElement("span", null, Object(x.a)(new Date(r).getTime() / b.Rb, !0)))))
			};
			var w = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				N = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				j = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				S = s("./src/reddit/icons/svgs/Crosspost/index.tsx");
			const I = ({
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
					t && u && Object(O.a)(Object(j.c)(t, u)(b))
				}, [t, u, b]);
				return d.a.createElement(f.a, {
					to: n,
					className: Object(o.a)(C.a.redditLinkCard, C.a.crosspostLinkCard, s),
					onClick: () => {
						Object(O.a)(Object(j.a)(t, u)(b))
					}
				}, d.a.createElement("div", {
					className: Object(o.a)(C.a.imageContainer)
				}, (null == l ? void 0 : l.url) ? d.a.createElement("img", {
					src: l.url,
					className: Object(o.a)(m && C.a.blur)
				}) : d.a.createElement(E.a, {
					type: "text",
					className: C.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: C.a.postDescription
				}, d.a.createElement("div", {
					className: C.a.postStats
				}, d.a.createElement(S.a, {
					className: C.a.crosspostIcon
				}), d.a.createElement(T.a, {
					to: null == u ? void 0 : u.path,
					onClick: e => {
						e.stopPropagation()
					},
					className: C.a.subredditLink
				}, `r/${null==u?void 0:u.name}`), d.a.createElement("span", {
					className: C.a.separator
				}, "•"), d.a.createElement("span", null, p.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [p.fbt._plural(a || 0, "number")], {
					hk: "3QAYMS"
				}))), d.a.createElement("div", {
					className: Object(o.a)(C.a.title, C.a.crosspostTitle)
				}, m && d.a.createElement(v.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: C.a.flair
				}), r)))
			};
			var R = d.a.memo(({
					className: e
				}) => d.a.createElement("div", {
					className: Object(o.a)(C.a.redditLinkCard, e)
				}, d.a.createElement("div", {
					className: Object(o.a)(C.a.shimmer, C.a.imageContainer)
				}), d.a.createElement("div", {
					className: C.a.postDescription
				}, d.a.createElement("div", {
					className: Object(o.a)(C.a.shimmer, C.a.title)
				}), d.a.createElement("div", {
					className: Object(o.a)(C.a.shimmer, C.a.postStats)
				})))),
				B = s("./src/reddit/actions/subreddit.ts"),
				F = s("./src/reddit/components/SubscribeButton/index.tsx"),
				L = s("./src/reddit/controls/Button/index.tsx"),
				M = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const {
				fbt: A
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
				post: f,
				className: P,
				isNsfw: _
			}) => {
				const w = Object(c.d)();
				Object(i.useEffect)(() => {
					w(Object(B.u)(s))
				}, [w, s]);
				const k = Object(c.e)(t => Object(u.R)(t, {
						subredditId: e
					})),
					N = Object(c.e)(e => e);
				Object(i.useEffect)(() => {
					f && k && E && Object(O.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "community_post",
						post: e,
						subreddit: t,
						...g.o(s)
					}))(f, k)(N))
				}, []);
				const j = Object(i.useCallback)(s => {
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
						post: f,
						noun: s ? "unsubscribe" : "subscribe",
						subredditId: e,
						index: t,
						source: "post_discovery"
					})
				}, [e, t, m]);
				return d.a.createElement("div", {
					className: Object(o.a)(C.a.subredditItem, null === C.a || void 0 === C.a ? void 0 : C.a[x], P)
				}, d.a.createElement("div", {
					className: C.a.contentWrapper
				}, d.a.createElement("div", {
					className: C.a.bannerWrapper,
					style: {
						backgroundColor: r || void 0
					}
				}, d.a.createElement("img", {
					className: C.a.banner,
					src: p || void 0
				})), d.a.createElement("div", {
					className: C.a.carouselContent
				}, d.a.createElement(T.a, {
					to: b,
					className: C.a.lockup,
					onClick: () => {
						E && Object(O.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "community_post",
							post: e,
							subreddit: t,
							...g.o(s)
						}))(f, k)(N))
					}
				}, d.a.createElement("div", {
					style: "small" === x ? {
						backgroundColor: "grey",
						backgroundImage: `url(${p||""})`
					} : {},
					className: C.a.backgroundImage
				}, l ? d.a.createElement("img", {
					src: l,
					className: C.a.subredditIcon
				}) : d.a.createElement(M.a, {
					className: C.a.subredditIcon
				})), d.a.createElement("div", {
					className: C.a.lockupText
				}, d.a.createElement("span", {
					className: C.a.subredditName
				}, "r/", s), " ", _ && d.a.createElement(v.b, {
					isFlairFilter: !0,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					},
					className: C.a.flair
				}), d.a.createElement("span", {
					className: C.a.subscribersCount
				}, A._({
					"*": "{number} members",
					_1: "1 member"
				}, [A._plural(n, "number", Object(h.b)(n))], {
					hk: "4yqFU9"
				})))), d.a.createElement("p", {
					className: C.a.description
				}, a)), d.a.createElement(F.a, {
					className: C.a.subscribeButton,
					identifier: {
						name: s,
						type: "subreddit"
					},
					getEventFactory: j,
					priority: L.c.Tertiary,
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
			}, K = Object(N.c)(({
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
					[f, v] = Object(i.useState)(null),
					[g, y] = Object(i.useState)(null),
					[O, P] = Object(i.useState)({
						left: !1,
						right: !0
					}),
					[N, T] = Object(i.useState)(0),
					[j] = Object(i.useState)(void 0),
					{
						subredditIds: S,
						crosspostIds: B,
						postIds: F,
						postUrls: L
					} = Object(i.useMemo)(() => s.reduce((e, {
						type: t,
						id: s,
						url: o
					}) => {
						switch (t) {
							case k.a.SUBREDDIT:
								e.subredditIds.push(s.toLowerCase());
								break;
							case k.a.POST:
								o && (e.postUrls[s] = o), e.postIds.push(s);
								break;
							case k.a.CROSSPOST:
								e.crosspostIds.push(s)
						}
						return e
					}, {
						subredditIds: [],
						postIds: [],
						crosspostIds: [],
						postUrls: {}
					}), [s]),
					M = Object(c.e)(e => Object(u.x)(e, S)),
					A = Object(c.e)(e => Object(w.M)(e, F)),
					V = Object(c.e)(e => Object(w.M)(e, B)),
					K = M.reduce((e, t) => (e[p ? t.name.toLocaleLowerCase() : t.id] = t, e), {}),
					H = A.reduce((e, t) => (e[t.id] = t, e), {}),
					J = V.reduce((e, t) => (e[t.id] = t, e), {});
				Object(i.useEffect)(() => {
					((null == S ? void 0 : S.length) || F.length || B.length) && E(Object(l.e)(S, p, S, b, [...B, ...F]))
				}, [S, B, F, E, b, p]);
				const q = s.filter((e, t, s) => t === s.findIndex(t => t.id === e.id)).reduce((e, {
						type: t,
						id: s
					}) => {
						switch (t) {
							case k.a.SUBREDDIT:
								const o = null == K ? void 0 : K[s.toLowerCase()];
								if (!o || !h && o.isNsfw || !h && o.isSubscribed) break;
								e.push({
									type: t,
									props: o
								});
								break;
							case k.a.POST:
								const n = null == H ? void 0 : H[s];
								if (!n) break;
								e.push({
									type: t,
									props: n
								});
								break;
							case k.a.CROSSPOST:
								const a = null == J ? void 0 : J[s];
								if (!a) break;
								e.push({
									type: t,
									props: a
								})
						}
						return e
					}, []),
					G = e => () => {
						var t, s;
						if (!g) return;
						const o = null === (s = null === (t = null == g ? void 0 : g.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
						if (!o) return;
						const n = (Math.sign(e) ? g.scrollLeft % o : o % g.scrollLeft) || 0,
							a = o * e - n;
						g.scrollBy({
							left: a,
							behavior: "smooth"
						})
					},
					Y = Object(i.useCallback)(() => {
						if (!g) return;
						const {
							width: e
						} = null == g ? void 0 : g.getBoundingClientRect(), t = (null == g ? void 0 : g.scrollLeft) > 0, s = (null == g ? void 0 : g.scrollLeft) < g.scrollWidth - e;
						0 === (null == g ? void 0 : g.scrollLeft) && g.scrollWidth - e == 0 || P({
							left: t,
							right: s
						})
					}, [g]);
				Object(i.useEffect)(() => {
					if (!f || !g) return;
					const e = r()(() => {
						const e = U(g);
						T(e)
					}, 30);
					window.addEventListener("resize", e);
					const t = U(g);
					return T(t), Y(), () => {
						window.removeEventListener("resize", e)
					}
				}, [f, g, Y, N, q.length]);
				const z = () => 1 === q.length ? C.a.flexWidth : 2 === q.length ? C.a.flexWidthTwoItems : C.a.constantWidth;
				return d.a.createElement("div", {
					ref: v,
					className: Object(o.a)(C.a.carouselContainer, t, null === C.a || void 0 === C.a ? void 0 : C.a[a])
				}, d.a.createElement("div", {
					className: C.a.carouselHeader,
					style: {
						width: j
					}
				}, d.a.createElement("h3", {
					className: C.a.carouselTitle
				}, e)), d.a.createElement("div", {
					ref: y,
					onScroll: Y,
					className: Object(o.a)(C.a.itemsContainer, null === C.a || void 0 === C.a ? void 0 : C.a[a]),
					style: {
						width: j
					}
				}, !q.length && Array(3).fill(!0).map((e, t) => d.a.createElement(R, {
					key: t,
					className: z()
				})), null == q ? void 0 : q.map(({
					type: e,
					props: t
				}, s) => {
					var o, n, r;
					switch (e) {
						case k.a.SUBREDDIT:
							const e = t;
							return d.a.createElement(W, D({
								className: z(),
								index: s + 1,
								size: a,
								banner: null === C.a || void 0 === C.a ? void 0 : C.a.bannerBackgroundImage,
								icon: (null === (o = null == e ? void 0 : e.styles) || void 0 === o ? void 0 : o.icon) || (null === (r = null === (n = e.styles) || void 0 === n ? void 0 : n.legacyIcon) || void 0 === r ? void 0 : r.url),
								key: `${null==e?void 0:e.name}:${s}`,
								isDiscovery: !0,
								post: x
							}, e));
						case k.a.POST:
							const i = t;
							return d.a.createElement(_, {
								postCard: {
									...i,
									url: L[i.id]
								},
								className: z(),
								post: x
							});
						case k.a.CROSSPOST:
							const c = t;
							return d.a.createElement(I, {
								crosspostCard: {
									...c
								},
								className: z(),
								post: x
							});
						default:
							return null
					}
				})), q.length > 2 && d.a.createElement("div", {
					className: Object(o.a)(C.a.carouselControls, {
						[C.a.hasTitle]: !!e
					})
				}, d.a.createElement("div", {
					className: Object(o.a)(C.a.buttonWrapper, C.a.left, {
						[C.a.hidden]: !O.left
					})
				}, d.a.createElement("button", {
					className: C.a.scrollButton,
					onClick: G(-N)
				}, d.a.createElement(m.a, {
					name: n.a.left_fill,
					className: C.a.scrollIcon
				}))), d.a.createElement("div", {
					className: Object(o.a)(C.a.buttonWrapper, C.a.right, {
						[C.a.hidden]: !O.right
					})
				}, d.a.createElement("button", {
					className: C.a.scrollButton,
					onClick: G(N)
				}, d.a.createElement(m.a, {
					name: n.a.right_fill,
					className: C.a.scrollIcon
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
				shouldShowFollowButton: f,
				isFollowed: v,
				isCommentsPage: g,
				onFollowPostClick: y
			}) => {
				return Object(u.a)() ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(r.a)(h.a.thumbnailContainer, {
						[h.a.mShowingButtonOrOverflow]: f || b
					})
				}, n.a.createElement("div", {
					className: h.a.thumbnailContainerRow
				}, f && n.a.createElement(i.a, {
					isFilled: !!v,
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
					isCommentsPage: g,
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
				return jt
			})), s.d(t, "b", (function() {
				return St
			})), s.d(t, "a", (function() {
				return It
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
				f = s("./src/reddit/models/User/index.ts"),
				v = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				g = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				y = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/path/index.ts"),
				P = s("./src/reddit/helpers/trackers/lightbox.ts"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				_ = s("./src/reddit/components/ItemCarousel/index.tsx"),
				w = s("./src/reddit/actions/tooltip.ts"),
				k = s("./node_modules/lodash/find.js"),
				N = s.n(k),
				T = s("./node_modules/react-motion/lib/react-motion.js");
			const j = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				S = {},
				I = (e = [], t) => {
					const s = N()(e, {
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
							opacity: Object(T.spring)(1, j)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : o < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(T.spring)(0, j)
						}
					}]
				};
			class R extends r.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), S), this.state = {
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
					return r.a.createElement(T.TransitionMotion, {
						styles: e => I(e, t),
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
			var B = s("./src/reddit/models/Media/index.ts"),
				F = s("./src/reddit/models/Post/index.ts"),
				L = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/selectors/activeModalId.ts"),
				A = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				W = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/postCreations.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				K = s("./src/reddit/selectors/showPromotedCTA.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				J = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				q = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				G = s("./src/reddit/components/AwardBadges/index.tsx"),
				Y = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				z = s("./src/reddit/components/Econ/Audio/async.ts"),
				Z = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
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
				fe = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ve = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ge = s("./src/reddit/components/PostTitle/index.tsx"),
				ye = s("./src/reddit/components/PostTopLine/index.tsx"),
				Oe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Pe = s("./src/reddit/components/ReadingIndicator/async.tsx"),
				Ce = s("./src/reddit/components/SourceLink/index.tsx"),
				_e = s("./src/reddit/components/TrackingHelper/index.tsx"),
				we = s("./src/reddit/constants/componentSizes.ts"),
				ke = s("./src/reddit/constants/componentTestIds.ts"),
				Ne = s("./src/reddit/constants/postLayout.ts"),
				Te = s("./src/reddit/contexts/PageLayer/index.tsx"),
				je = s("./src/reddit/helpers/postEvent.ts"),
				Se = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Ie = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Re = s("./src/reddit/selectors/postFlair.ts"),
				Be = s("./src/reddit/models/Audio/index.ts"),
				Fe = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				Le = s("./src/reddit/selectors/experiments/econ/index.ts"),
				Me = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Ae = s("./src/reddit/constants/experiments.ts"),
				We = s("./src/reddit/helpers/chooseVariant/index.ts"),
				De = s("./src/reddit/selectors/experiments/presence.ts");
			const Ve = e => {
					return Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: Ae.gf
					}) === Ae.Wc
				},
				Ue = e => {
					if (Object(De.a)(e)) return !1;
					return Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: Ae.ff
					}) === Ae.Wc
				},
				Ke = (e, {
					postId: t
				}) => {
					const s = Object(U.H)(e, {
						postId: t
					});
					return !(Object(De.a)(e) || !s || s.isSponsored) && Object(We.c)(e, {
						experimentEligibilitySelector: We.a,
						experimentName: Ae.ef
					}) === Ae.Wc
				};
			var He = s("./node_modules/fbt/lib/FbtPublic.js"),
				Je = s("./src/reddit/constants/colors.ts"),
				qe = s("./src/reddit/icons/fonts/index.tsx"),
				Ge = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Ye = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				ze = s.n(Ye);
			const Ze = r.a.createElement(qe.a, {
				className: ze.a.BlockIcon,
				name: "block"
			});
			var Qe = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return r.a.createElement(Ge.a, {
						className: ze.a.bannerBase,
						color: Je.a.dayModeActionIcon,
						icon: Ze,
						title: He.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && r.a.createElement("button", {
							className: ze.a.expandButton,
							onClick: t
						}, He.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: ze.a.blockedAuthorTextWrapper
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
				})(o, n), d = t ? Je.a.warning : Je.a.dayModeActionIcon, c = (e => {
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
				return r.a.createElement(Ge.a, {
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
			const Et = r.a.createElement(qe.a, {
				className: xt.a.RemoveIcon,
				name: "delete_fill"
			});
			var ft = () => r.a.createElement(Ge.a, {
					className: xt.a.bannerBase,
					color: Je.a.dayModeActionIcon,
					icon: Et,
					title: He.fbt._("Sorry, this post is no longer available.", null, {
						hk: "sb8eO"
					})
				}),
				vt = s("./src/reddit/components/PostContent/index.m.less"),
				gt = s.n(vt);
			const {
				fbt: yt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ot = p.a.wrapped(ge.c, "PostTitle", gt.a), Pt = p.a.wrapped($.a, "ExpandoButton", gt.a), Ct = p.a.wrapped(R, "ClassicExpandoMotion", gt.a), _t = p.a.wrapped(te.c, "FullWidthFlatlist", gt.a), wt = r.a.createElement("p", {
				className: gt.a.VideoProcessingStatus
			}, yt._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), kt = Object(Te.u)({
				isCommentsPage: Te.x,
				pageLayer: e => e
			}), Nt = Object(i.b)(() => Object(l.c)({
				activeModalId: M.a,
				flairStyleTemplate: Te.V,
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
				modModeEnabled: Te.T,
				shouldTryToShowCrosspostModal: pt.e,
				showAwardsPlaque: A.a,
				showEditFlair: Re.a,
				subredditOrProfile: U.V,
				isEditing: V.M,
				userIsOp: H.pb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Me.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Me.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: Ke,
				isReadingIndicatorsReadTestEnabled: Ue,
				isReadingIndicatorsWriteTestEnabled: Ve,
				isRecordingEnabled: Le.z,
				isTrueblockPCBlockeeEnabled: Ie.b
			}), (e, {
				pageLayer: t,
				postId: s
			}) => ({
				onIgnoreReports: () => e(Object(x.fb)(s)),
				onOpenReportsDropdown: t => e(Object(w.h)({
					tooltipId: t
				})),
				onVoteClick: t => {
					const o = t === L.a.upvoted ? Object(x.jb)(s) : Object(x.w)(s);
					e(o)
				},
				fireAdPixelsOfType: (t, s) => e(Object(x.z)(t, s)),
				openPost: t => e(Object(x.L)(t)),
				onFollowPost: t => e(Object(x.ib)(s, t)),
				onFollowPostExpired: () => e(Object(x.X)({
					id: s,
					expiresAt: 0
				}))
			})), Tt = e => e.media && e.media.type === B.o.EMBED && e.media.provider === B.v.Imgur && e.media.height > 700, jt = new b.a, St = "VISIBLE", It = "NOT_VISIBLE", Rt = e => jt.publish(e ? St : It), Bt = {
				threshold: [.85, .001],
				rootMargin: `${1-we.f}px 0px 0px 0px`
			}, Ft = e => {
				for (const t of e) {
					const {
						intersectionRatio: e
					} = t;
					e >= .85 && Rt(!1), e <= .001 && Rt(!0)
				}
			}, Lt = p.a.wrapped(d.a, "ThumbLink", gt.a), Mt = ({
				post: e,
				templatePlaceholderImage: t,
				shouldShowFollowButton: s,
				isFollowed: o,
				onFollowPostClick: n
			}) => {
				const a = e.source ? r.a.createElement(Y.a, {
					post: e,
					forceShowNSFW: !0,
					templatePlaceholderImage: t
				}) : r.a.createElement(Lt, {
					to: Object(O.b)(e.permalink)
				}, r.a.createElement(Y.a, {
					post: e,
					forceShowNSFW: !0
				}));
				return r.a.createElement("div", {
					className: gt.a.classicThumbnail
				}, s && r.a.createElement(ce.a, {
					className: gt.a.classicNotificationButton,
					isFilled: !!o,
					onClick: n,
					hasTooltip: !0,
					tooltipText: yt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), a)
			}, At = ({
				post: e,
				isExpanded: t,
				scrollerItemRef: s
			}) => r.a.createElement(Ct, {
				content: r.a.createElement(r.a.Fragment, null, r.a.createElement(Ee.a, {
					className: gt.a.ClassicPostMedia,
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
			t.c = kt(Nt(e => {
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
					isCommentCountAnimation: w,
					isCommentsPage: k,
					isCountAnimShadowTestEnabled: N,
					isCrosspostRecommendationsExperimentEnabled: T,
					isCurrentUserProfilePost: j,
					isEditing: S,
					isExpanded: I,
					isFollowed: R,
					isFollowedExpired: L,
					isOverlay: M,
					isReadingIndicatorsExperimentEnabled: A,
					isReadingIndicatorsReadTestEnabled: W,
					isReadingIndicatorsWriteTestEnabled: D,
					isRecordingEnabled: V,
					isVoteCountAnimation: U,
					moderatorPermissions: K,
					modModeEnabled: H,
					onFollowPost: Y,
					onFollowPostExpired: $,
					onIgnoreReports: ce,
					onOpenReportsDropdown: me,
					openPost: ue,
					onVoteClick: pe,
					post: be,
					scrollerItemRef: we,
					sendEvent: Te,
					shouldTryToShowCrosspostModal: Re,
					showAwardsPlaque: Me,
					showEditFlair: Ae,
					showPromotedCTA: We,
					subredditOrProfile: De,
					userIsOp: Ve,
					isTrueblockPCBlockeeEnabled: Ue,
					pageLayer: Ke
				} = e, He = Object(_e.b)(), Je = Object(a.useRef)(null), [qe, Ge] = Object(a.useState)(be.authorIsBlocked), Ye = Object(B.J)(be), ze = Object(i.e)(e => Object(Ie.a)(e)), Ze = Object(i.e)(e => Object(Le.a)(e)), Xe = Object(c.a)(be), $e = A || W || D;
				Object(a.useEffect)(() => {
					L && $()
				}, []);
				const et = Object(i.d)(),
					tt = Object(a.useRef)(null);
				Object(a.useEffect)(() => {
					if (T && Re) return et(Object(lt.a)(be)), tt.current = setTimeout(() => {
						et(Object(mt.h)(ut.a)), et(Object(lt.b)())
					}, ut.b), () => {
						et(Object(lt.b)()), et(Object(mt.g)(ut.a)), tt.current && clearTimeout(tt.current)
					}
				}, []), Object(Se.a)(Je, Ft, Bt);
				const st = be.isSponsored ? Object(xe.b)(be.id, {
						fireAdPixelsOfType: d,
						openPost: ue
					}) : n.a,
					ot = Object(y.a)(K),
					nt = Object(v.a)(K),
					at = Object(g.a)(K),
					rt = ot || nt,
					it = ((e, t, s) => {
						const [o, n] = e ? [Object(f.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return o || t || n
					})(o, rt, be),
					pt = !!be.media && (be.media.type === B.o.RTJSON || be.media.type === B.o.TEXT),
					ht = Ve && pt,
					xt = Object(re.d)(be),
					Et = Object(de.c)(be);
				let vt;
				const yt = !(H && ot),
					Ct = Object(fe.b)({
						hide: !A && yt,
						editPost: !A && yt,
						save: yt,
						report: !A && yt
					}),
					kt = be.removedByCategory === F.g.AuthorDeleted,
					Nt = o && (o.displayText === be.author || o.username === be.author),
					jt = !!be.unrepliableReason,
					St = !(jt && Ue) && !kt && !Tt(be) && (Nt || O || !(be.removedByCategory && be.media && (Object(B.M)(be.media) || Object(B.K)(be.media) || Object(B.E)(be.media)))),
					It = Object(m.t)(be, x),
					{
						source: Rt
					} = It,
					Lt = be.removedByCategory === F.g.Reddit && Object(h.e)(be.created) > 24,
					Wt = be.removedByCategory && be.removedByCategory !== F.g.Reddit || Lt,
					Dt = !Wt && !be.isArchived,
					Vt = Object(a.useCallback)(() => {
						Y(R ? F.f.UNFOLLOWED : F.f.FOLLOWED), He(R ? Object(C.m)(be.id) : Object(C.c)(be.id))
					}, [Y, He, R, be.id]),
					Ut = r.a.createElement(Ot, {
						post: be,
						innerRef: Je,
						size: ge.b.ExtraLarge,
						isOverlay: M,
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
						} = e, n = Object(i.e)(e => Object(Be.b)(o) && Object(Le.a)(e));
						return s ? Ne.g.Classic : Object(Fe.c)(o) ? Ne.g.Large : n ? Ne.g.Large : t ? Ne.g.Large : o.media && !Tt(o) ? Ne.g.Large : Ne.g.Medium
					})(e),
					Jt = Object(i.e)(bt.b),
					qt = Object(se.b)(be),
					Gt = () => {
						const t = !(jt && ze && qe),
							o = Object(B.I)(be);
						return jt && o ? r.a.createElement(ft, null) : ze && qe ? r.a.createElement(Qe, {
							onBannerClick: () => Ge(!1),
							isExpandable: Ye
						}) : be.source && Ht === Ne.g.Medium ? r.a.createElement(Ce.a, {
							post: be,
							isCommentsPage: k,
							pageLayer: Ke
						}) : St && !S && Ht === Ne.g.Large ? r.a.createElement(Ee.a, {
							className: Object(u.a)(gt.a.LargePostMedia, {
								[gt.a.isCommentsPage]: k
							}),
							isCommentsPage: !0,
							isListing: !1,
							isNotCardView: M,
							isOverlay: M,
							post: be,
							shouldLoad: !0,
							showFull: !0,
							shouldPause: !M,
							showCentered: !0,
							showPromotedCTA: We,
							scrollerItemRef: we
						}) : t && Ht === Ne.g.Classic ? r.a.createElement(r.a.Fragment, null, r.a.createElement(Pt, {
							crosspost: s || void 0,
							isExpanded: !!I,
							post: be,
							useMediaIcons: !1
						}), At(e)) : null
					};
				if (Ht === Ne.g.Classic) {
					const e = Object(E.a)(be);
					vt = r.a.createElement("div", {
						"data-test-id": ke.e
					}, r.a.createElement(ve.a, {
						model: be,
						handleVote: pe,
						isCountAnimShadowTestEnabled: N,
						isOverlay: M,
						isVoteCountAnimation: U,
						postId: be.id
					}), r.a.createElement("div", {
						className: gt.a.mainBody
					}, r.a.createElement("div", {
						className: gt.a.content
					}, r.a.createElement(ye.a, {
						hideAwards: Me,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: k,
						isCurrentUserProfilePost: j,
						isOverlay: !!M,
						isTopicPage: !1,
						post: be,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!M && !be.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: De,
						shouldShowFollowButton: Dt && !e,
						isFollowed: R,
						onFollowPostClick: Vt
					}), Ut, r.a.createElement(ee.a, {
						className: k ? gt.a.leftPadding : void 0,
						post: be,
						sendEvent: Te
					}), H && ot && Et && r.a.createElement(ie.a, {
						onIgnoreReports: ce,
						reportable: be
					}), r.a.createElement(oe.d, null), r.a.createElement("div", {
						className: gt.a.FlatlistContainer
					}, Gt(), Me && r.a.createElement(G.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: be,
						tooltipType: M ? Oe.c.Lightbox : void 0
					}), r.a.createElement(_t, {
						currentUser: o,
						hasModFlairPerms: nt,
						hasModFullPerms: at,
						hasModPostPerms: ot,
						isOverlay: M,
						onIgnoreReports: ce,
						onOpenReportsDropdown: me,
						modModeEnabled: H,
						post: be,
						showUpvotePercent: !0,
						showViewCount: it,
						useFlatlistBreakpoints: Ct,
						isCommentCountAnimation: w,
						isCountAnimShadowTestEnabled: N
					}))), e && r.a.createElement(Mt, {
						post: be,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Dt,
						isFollowed: R,
						onFollowPostClick: Vt
					})))
				} else if (Ht === Ne.g.Medium) {
					const e = Object(E.a)(be);
					vt = r.a.createElement("div", {
						"data-test-id": ke.e
					}, r.a.createElement(ve.a, {
						model: be,
						handleVote: pe,
						isCountAnimShadowTestEnabled: N,
						isOverlay: M,
						isReadingIndicatorsExperimentEnabled: A,
						isVoteCountAnimation: U,
						postId: be.id
					}), r.a.createElement("div", {
						className: gt.a.mainBody
					}, r.a.createElement("div", {
						className: gt.a.content
					}, r.a.createElement(ye.a, {
						hideAwards: Me,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: k,
						isCurrentUserProfilePost: j,
						isOverlay: !!M,
						isTopicPage: !1,
						post: be,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!M && !be.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: De,
						shouldShowFollowButton: Dt && !e,
						isFollowed: R,
						onFollowPostClick: Vt
					}), Ut, Gt(), Object(B.O)(be) && wt, r.a.createElement(ee.a, {
						className: k ? gt.a.leftPadding : void 0,
						post: be,
						sendEvent: Te
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
						isCommentsPage: k,
						isOverlay: !0,
						modModeEnabled: H,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: De,
						shouldShowFollowButton: Dt,
						isFollowed: R,
						onFollowPostClick: Vt
					})), r.a.createElement(oe.d, null), Me && r.a.createElement(G.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: be,
						tooltipType: M ? Oe.c.Lightbox : void 0
					}), !!Jt && r.a.createElement(_.a, {
						itemIds: qt,
						hasSubredditNames: !0,
						hasPostIds: !0,
						isDiscovery: !0,
						post: be,
						size: "small"
					}), r.a.createElement("div", {
						className: gt.a.controlsContainer
					}, r.a.createElement(te.c, {
						currentUser: o,
						hasModFlairPerms: nt,
						hasModFullPerms: at,
						hasModPostPerms: ot,
						isOverlay: M,
						modModeEnabled: H,
						onIgnoreReports: ce,
						onOpenReportsDropdown: me,
						post: be,
						showEditPost: ht,
						showEditFlair: Ae,
						tooltipType: M ? Oe.c.Lightbox : void 0,
						useFlatlistBreakpoints: Ct,
						isCommentCountAnimation: w,
						isCountAnimShadowTestEnabled: N,
						shouldHideItems: A
					}), $e && r.a.createElement(Pe.a, {
						isReadingIndicatorsExperiment: A,
						isReadLoadTest: W,
						isWriteLoadTest: D,
						postId: be.id
					}), !A && Kt))
				} else Ht === Ne.g.Large && (vt = r.a.createElement("div", {
					"data-test-id": ke.e
				}, r.a.createElement(ve.a, {
					model: be,
					handleVote: pe,
					isCountAnimShadowTestEnabled: N,
					isOverlay: M,
					isReadingIndicatorsExperimentEnabled: A,
					isVoteCountAnimation: U,
					postId: be.id
				}), Object(Fe.c)(be) && r.a.createElement(r.a.Fragment, null, r.a.createElement(Q.a, {
					post: be
				}), r.a.createElement(Z.a, {
					post: be
				})), !Object(Fe.c)(be) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ye.a, {
					forceOpenInNewTab: p,
					hideAwards: Me,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: k,
					isCurrentUserProfilePost: j,
					isOverlay: !!M,
					isTopicPage: !1,
					post: be,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!M && !be.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: De,
					shouldShowFollowButton: Dt,
					isFollowed: R,
					onFollowPostClick: Vt
				}), Ut, ((e, t, s, o) => e.source && !t && (s || o))(be, s, M, k) && r.a.createElement(Ce.a, {
					post: be,
					isCommentsPage: k,
					pageLayer: Ke
				})), r.a.createElement(ee.a, {
					className: k ? gt.a.leftPadding : void 0,
					post: be,
					sendEvent: Te
				}), De && Wt && r.a.createElement(dt, {
					isAdminOrMod: O,
					post: be,
					subredditOrProfile: De
				}), S && r.a.createElement(he, {
					post: be
				}), Gt(), We && Rt && Rt.url && r.a.createElement(J.a, {
					className: gt.a.adLinkWrapper
				}, r.a.createElement(q.a, {
					post: be,
					adLinkContent: It
				})), H && ot && xt && r.a.createElement("div", {
					className: gt.a.modModeBannerWrapper
				}, r.a.createElement(ae.a, {
					thing: be
				})), H && ot && Et && r.a.createElement("div", {
					className: gt.a.modModeBannerWrapper
				}, r.a.createElement(ie.a, {
					onIgnoreReports: ce,
					reportable: be
				})), Ze && Object(Be.b)(be) && r.a.createElement(z.a, {
					post: be,
					isRecordingEnabled: V
				}), r.a.createElement(oe.d, null), Me && r.a.createElement(G.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: be,
					tooltipType: M ? Oe.c.Lightbox : void 0
				}), !!Jt && r.a.createElement(_.a, {
					itemIds: qt,
					hasSubredditNames: !0,
					hasPostIds: !0,
					isDiscovery: !0,
					post: be,
					size: "small"
				}), r.a.createElement("div", {
					className: gt.a.controlsContainer
				}, r.a.createElement(te.c, {
					currentUser: o,
					forceOpenInNewTab: p,
					hasModFlairPerms: nt,
					hasModFullPerms: at,
					hasModPostPerms: ot,
					isOverlay: M,
					modModeEnabled: H,
					onIgnoreReports: ce,
					onOpenReportsDropdown: me,
					post: be,
					showEditPost: ht,
					showEditFlair: Ae,
					tooltipType: M ? Oe.c.Lightbox : void 0,
					useFlatlistBreakpoints: Ct,
					isCommentCountAnimation: w,
					isCountAnimShadowTestEnabled: N,
					shouldHideItems: A
				}), $e && r.a.createElement(Pe.a, {
					isReadingIndicatorsExperiment: A,
					isReadLoadTest: W,
					isWriteLoadTest: D,
					postId: be.id
				}), !A && Kt)));
				const Yt = Object(a.useCallback)((e, t) => Object(C.h)(e, t), []);
				return r.a.createElement(le.a, {
					className: Object(u.a)(t, gt.a.postContainer, {
						[gt.a.hasEventMeta]: Object(je.a)(be)
					}),
					isOverlay: M,
					post: be,
					eventFactory: M ? P.b : Yt,
					onClick: st
				}, r.a.createElement(X.a, {
					post: be
				}), vt)
			}))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/reddit/components/CrosspostBox/index.tsx"),
				r = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(a.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * a.b - 2 * a.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : n.a.createElement(r.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				r = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/hooks/useClickSourceData.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostMeta/index.m.less"),
				g = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: v,
					isOverlay: y,
					isTopicPage: O,
					post: P,
					shouldShowSubscribeButton: C,
					subredditOrProfile: _,
					tooltipType: w
				} = e, k = !!O, N = Object(E.a)();
				return n.a.createElement("div", {
					className: g.a.metaContainer
				}, !o && !P.isSponsored && _ && n.a.createElement(r.a, {
					postId: P.id,
					subredditName: _.name
				}, n.a.createElement(m.a, {
					className: g.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: _.url,
						state: N
					}
				}, _.displayText)), _ && _.isQuarantined && n.a.createElement(l.a, null), !o && !P.isSponsored && _ && C && !v && n.a.createElement(u.a, {
					className: g.a.SubscribeButton,
					getEventFactory: e => Object(x.h)(P.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: _.name,
						type: Object(f.h)(_) ? p.a.PROFILE : p.a.SUBREDDIT
					},
					postId: P.id,
					size: b.d.XXS,
					small: !0
				}), !o && !P.isSponsored && n.a.createElement(h.b, null), !o && !P.isSponsored && n.a.createElement(i.h, {
					type: P.belongsTo.type,
					id: P.belongsTo.id
				}), n.a.createElement(c.d, {
					className: g.a.postTopMeta,
					flairStyleTemplate: t,
					post: P,
					tooltipType: w
				}), n.a.createElement(d.a, {
					displayText: _ ? _.displayText : null,
					inSubredditOrProfile: !!o,
					post: P,
					tooltipType: w
				}), !k && n.a.createElement(a.a, {
					hideCta: s,
					thing: P,
					tooltipType: y ? c.c.Lightbox : void 0
				}))
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					isOverlay: E,
					isVoteCountAnimation: f,
					postId: v,
					isReadingIndicatorsExperimentEnabled: g
				} = e, y = `upvote-button-${t.id}${E?"-overlay":""}`;
				return n.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: x
				}, o && n.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), n.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: y,
					isVoteCountAnimation: f,
					isCountAnimShadowTestEnabled: p,
					postId: v,
					scoreClassName: Object(a.a)(u.a.score, {
						[u.a.allowPointerEvents]: g
					}),
					isReadingIndicatorsExperimentEnabled: g
				}))
			}
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
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/PostTopLine/index.m.less"),
				_ = s.n(C);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: n,
				hideNSFWPref: C,
				hostPostData: w,
				iconClassName: k,
				inSubredditOrProfile: N,
				isCommentsPage: T,
				isCompactPinnedPost: j,
				isCurrentUserProfilePost: S,
				isOverlay: I,
				isTopicPage: R,
				listingKey: B,
				post: F,
				shouldShowSubscribeButton: L,
				showCornerOutboundLink: M,
				showSubreddit: A,
				showSubredditIcon: W,
				subredditOrProfile: D,
				isFollowed: V,
				shouldShowFollowButton: U,
				onFollowPostClick: K
			}) => {
				const H = n || R,
					J = D && Object(O.h)(D),
					q = Object(r.e)(e => {
						if (!J) return !0;
						const t = Object(P.sb)(e, F.author || "");
						return !t || t.enableFollowers
					});
				return a.a.createElement("div", {
					className: Object(i.a)(_.a.container, e)
				}, A && D && a.a.createElement("div", {
					className: _.a.subredditIconWrapper
				}, a.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: D.url
				}, W && a.a.createElement(p.b, {
					className: Object(i.a)(_.a.subredditIcon, k),
					shouldHideNsfwIcon: C,
					subredditOrProfile: D
				}))), a.a.createElement("div", {
					className: _.a.everythingElseWrapper
				}, A && a.a.createElement(c.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), a.a.createElement(u.d, {
					className: _.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: I ? u.c.Lightbox : void 0,
					post: F,
					showSub: A,
					subredditOrProfile: D
				}), a.a.createElement(m.a, {
					className: _.a.postBadges,
					displayText: D ? D.displayText : null,
					inSubredditOrProfile: N,
					isCompactPinnedPost: j,
					post: F,
					tooltipType: I ? u.c.Lightbox : void 0
				}), !H && a.a.createElement(d.a, {
					isPostDetail: T,
					thing: F,
					tooltipType: I ? u.c.Lightbox : void 0
				})), D && q && A && L && !S && a.a.createElement(h.a, {
					className: _.a.SubscribeButton,
					getEventFactory: e => Object(v.h)(F.id, e ? "unsubscribe" : "subscribe", "post", B, w),
					identifier: {
						name: D.name,
						type: J ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: F.id,
					size: E.d.XS
				}), M && a.a.createElement(f.b, {
					isSponsored: F.isSponsored,
					postId: F.id,
					href: Object(y.D)(F),
					source: F.source
				}, a.a.createElement(g.a, {
					className: _.a.outboundLinkIcon
				})), U && q && a.a.createElement(l.a, {
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
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(r.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(a.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
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
					experimentName: o.uc
				});
				return !(!t || Object(o.mf)(t))
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
						experimentName: o.Le
					}) === o.Wc
				},
				i = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: a.e,
						experimentName: o.Ke
					}) === o.Wc
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~StandalonePostPage.3a889d3d03ae593637f0.js.map