// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~StandalonePostPage.cb4e5596af2100ad1bc2.js
// Retrieved at 3/7/2022, 3:00:06 PM by Reddit Dataminer v1.0.0
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
				r = s.n(n),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: c,
					callToAction: l,
					caption: m
				} = t;
				if (!c || !c.url) return null;
				let u = c.displayText;
				return c.displayText.length >= 40 && (u = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, m && !n && r.a.createElement("span", {
					className: d.a.caption,
					title: m
				}, m), r.a.createElement(i.a, {
					href: c.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c,
					className: d.a.displayUrl
				}, u)), l && r.a.createElement(a.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, s) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
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
				return _
			})), s.d(t, "a", (function() {
				return C
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/contexts/Post/index.tsx"),
				E = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				O = s.n(g),
				y = s("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = 8,
				C = 1,
				k = y.a.div("Container", O.a),
				j = y.a.div("PostMetaWrapper", O.a),
				I = y.a.wrapped(p.c, "PostTitle", O.a),
				w = y.a.div("FlatList", O.a),
				S = y.a.div("FlatItem", O.a),
				N = y.a.span("FlatListDotSpacer", O.a),
				T = y.a.wrapped(k, "LinkContainer", O.a),
				L = y.a.div("Content", O.a),
				R = y.a.div("ThumbnailContainer", O.a),
				B = Object(c.c)({
					isCurrentUserProfilePost: E.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Nb.TOPIC),
					shouldOpenPostInNewTab: f.hb
				}),
				F = Object(a.b)(B);
			t.c = Object(v.b)(F(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${n.isListing}`
					},
					d = t;
				return a && !a.media ? r.a.createElement(T, {
					className: d
				}, r.a.createElement(L, null, r.a.createElement(j, null, r.a.createElement(u.a, c)), M(a), a.source && r.a.createElement(b.a, {
					post: a
				}), W(e)), U(e)) : r.a.createElement(k, {
					className: d
				}, r.a.createElement(j, null, r.a.createElement(u.a, c)), M(a), A(e), W(e))
			}));
			const M = e => r.a.createElement(I, {
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
					return r.a.createElement("div", null, r.a.createElement(m.a, P({}, o, {
						className: O.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				W = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(w, null, r.a.createElement(S, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(N, null), r.a.createElement(S, null, D(e)))
				},
				D = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(n, "comment count", Object(l.b)(n))], {
						hk: "xPYWL"
					}))
				},
				U = e => r.a.createElement(R, null, r.a.createElement(h.a, {
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
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
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
					s = t.status === c.a.Live,
					n = t.status === c.a.Closed,
					l = Object(a.e)(t => Object(d.U)(t, {
						postId: e.id
					}));
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == l ? void 0 : l.displayText), s && r.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), n && r.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== t.totalParticipantsCount && r.a.createElement(u, {
					participantsCount: t.totalParticipantsCount
				}), r.a.createElement(i.a, {
					className: b.a.awards,
					thing: e
				})), r.a.createElement("h3", {
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
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/telemetry/models/Outbound.ts"),
				E = s("./src/reddit/components/ExpandoButton/index.m.less"),
				f = s.n(E);
			const g = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.ab)(Object(u.b)(t.permalink), t.id))
				})),
				O = (e, t = !1, s) => {
					const o = Object(c.a)(f.a.icon, f.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: o
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: o
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: o
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: o
							});
						case h.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: o
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: o
							});
						case h.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: o
							});
						case h.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: o
							});
						case h.o.EMBED:
						default:
							return r.a.createElement(b.a, {
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
					toggle: E,
					useMediaIcons: g
				} = e, y = s || h, P = Object(a.e)(x.b), _ = t => {
					P && (t.preventDefault(), e.showModalOnPostLinkClick(y))
				}, C = n && !!s;
				return y.media && !(("rtjson" === y.media.type || "text" === y.media.type || "liveaudio" === y.media.type) && !Object(p.a)(y)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, f.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					onClick: E
				}, u ? r.a.createElement(b.a, {
					name: "collapse",
					className: f.a.icon
				}) : g ? r.a.createElement(r.a.Fragment, null, O(y.media && y.media.type, C, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(c.a)(f.a.icon, f.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: f.a.icon
				})) : y.source && y.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, f.a.outer),
					"data-click-id": "expando_open",
					href: y.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(c.a)(f.a.icon, f.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, f.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(y.permalink),
					rel: "nofollow",
					onClick: _
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: f.a.icon
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
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = s.n(a),
				c = s("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", i.a),
				l = c.a.div("TextWrapper", i.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: o,
					subtitle: a,
					title: c,
					textWrapperClassName: m
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(t, i.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, n.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), o ? n.a.createElement(d, null, o) : n.a.createElement(d, null), n.a.createElement(l, {
					className: m
				}, n.a.createElement("div", {
					className: i.a.title
				}, c), a && n.a.createElement("div", {
					className: i.a.subtitle
				}, a)))
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
				r = s("./src/reddit/models/Media/index.ts");
			! function(e) {
				e.POST = "post", e.SUBREDDIT = "subreddit", e.CROSSPOST = "crosspost"
			}(o || (o = {}));
			const a = /(?:reddit\.com\/r\/)(?<subreddit>[\w]+)(?:\/comments\/)?(?<postId>[\w]+)?/,
				i = e => {
					var t, s, i;
					if ((null == e ? void 0 : e.media) && Object(r.K)(e.media) && (null === (s = null === (t = e.media.richtextContent) || void 0 === t ? void 0 : t.document) || void 0 === s ? void 0 : s.length) > 0) {
						const t = Object(n.e)(e.media.richtextContent.document, !0);
						return 0 === t.length ? [] : null === (i = t.reduce) || void 0 === i ? void 0 : i.call(t, (e, t) => {
							var s;
							const {
								subreddit: n,
								postId: r
							} = (null === (s = t.match(a)) || void 0 === s ? void 0 : s.groups) || {};
							return r && n ? [...e, {
								id: `t3_${r}`,
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
				r = s("./node_modules/lodash/throttle.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/subreddit/subredditCarousel.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/prettyPrintNumber/index.ts"),
				x = s("./src/lib/timeAgo/index.ts"),
				v = s("./src/reddit/controls/ContentType/index.tsx"),
				E = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = s("./src/reddit/components/Flair/index.tsx"),
				g = s("./src/reddit/selectors/telemetry.ts");
			var O = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/telemetry/index.ts"),
				P = s("./src/reddit/components/ItemCarousel/index.m.less"),
				_ = s.n(P);
			const C = ({
				postCard: e,
				post: t,
				className: s
			}) => {
				const {
					url: n,
					commentCount: r,
					createdAt: a,
					score: l,
					title: m,
					thumbnail: u,
					isNsfw: P,
					subreddit: C
				} = e, k = Object(d.e)(e => e);
				Object(i.useEffect)(() => {
					t && C && Object(y.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "post_post",
						post: e,
						subreddit: t,
						...g.o(s)
					}))(t, C)(k))
				}, []);
				return c.a.createElement(E.a, {
					to: (null == n ? void 0 : n.replace(/^.*\/\/[^\/]+/, "")) || "",
					className: Object(o.a)(_.a.redditLinkCard, s),
					onClick: () => {
						Object(y.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "post_post",
							post: e,
							subreddit: t,
							...g.o(s)
						}))(t, C)(k))
					}
				}, c.a.createElement("div", {
					className: Object(o.a)(_.a.imageContainer)
				}, (null == u ? void 0 : u.url) ? c.a.createElement("img", {
					src: u.url,
					className: Object(o.a)(P && _.a.blur)
				}) : c.a.createElement(v.a, {
					type: "text",
					className: _.a.thumbnailPlaceholder
				})), c.a.createElement("div", {
					className: _.a.postDescription
				}, c.a.createElement("div", null, c.a.createElement("div", {
					className: _.a.title
				}, m), P && c.a.createElement(f.b, {
					isFlairFilter: !0,
					flair: {
						type: O.f.Nsfw,
						text: "nsfw"
					},
					className: _.a.flair
				})), c.a.createElement("div", {
					className: _.a.postStats
				}, l && c.a.createElement(c.a.Fragment, null, c.a.createElement("span", null, Object(h.b)(l), " ", p.fbt._("points", null, {
					hk: "3jOMNh"
				})), c.a.createElement("span", {
					className: _.a.separator
				}, "•")), r && c.a.createElement("span", null, Object(h.b)(r), " ", p.fbt._("comments", null, {
					hk: "2x1D6M"
				})), c.a.createElement("span", {
					className: _.a.separator
				}, "•"), a && c.a.createElement("span", null, Object(x.a)(new Date(a).getTime() / b.Sb, !0)))))
			};
			var k = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				S = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				N = s("./src/reddit/icons/svgs/Crosspost/index.tsx");
			const T = ({
				crosspostCard: e,
				post: t,
				className: s
			}) => {
				const {
					permalink: n,
					commentCount: r,
					title: a,
					thumbnail: l,
					isNsfw: m,
					subreddit: u
				} = e, b = Object(d.e)(e => e);
				Object(i.useEffect)(() => {
					t && u && Object(y.a)(Object(S.c)(t, u)(b))
				}, [t, u, b]);
				return c.a.createElement(E.a, {
					to: n,
					className: Object(o.a)(_.a.redditLinkCard, _.a.crosspostLinkCard, s),
					onClick: () => {
						Object(y.a)(Object(S.a)(t, u)(b))
					}
				}, c.a.createElement("div", {
					className: Object(o.a)(_.a.imageContainer)
				}, (null == l ? void 0 : l.url) ? c.a.createElement("img", {
					src: l.url,
					className: Object(o.a)(m && _.a.blur)
				}) : c.a.createElement(v.a, {
					type: "text",
					className: _.a.thumbnailPlaceholder
				})), c.a.createElement("div", {
					className: _.a.postDescription
				}, c.a.createElement("div", {
					className: _.a.postStats
				}, c.a.createElement(N.a, {
					className: _.a.crosspostIcon
				}), c.a.createElement(w.a, {
					to: null == u ? void 0 : u.path,
					onClick: e => {
						e.stopPropagation()
					},
					className: _.a.subredditLink
				}, `r/${null==u?void 0:u.name}`), c.a.createElement("span", {
					className: _.a.separator
				}, "•"), c.a.createElement("span", null, p.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [p.fbt._plural(r || 0, "number")], {
					hk: "3QAYMS"
				}))), c.a.createElement("div", {
					className: Object(o.a)(_.a.title, _.a.crosspostTitle)
				}, m && c.a.createElement(f.b, {
					isFlairFilter: !0,
					flair: {
						type: O.f.Nsfw,
						text: "nsfw"
					},
					className: _.a.flair
				}), a)))
			};
			var L = c.a.memo(({
					className: e
				}) => c.a.createElement("div", {
					className: Object(o.a)(_.a.redditLinkCard, e)
				}, c.a.createElement("div", {
					className: Object(o.a)(_.a.shimmer, _.a.imageContainer)
				}), c.a.createElement("div", {
					className: _.a.postDescription
				}, c.a.createElement("div", {
					className: Object(o.a)(_.a.shimmer, _.a.title)
				}), c.a.createElement("div", {
					className: Object(o.a)(_.a.shimmer, _.a.postStats)
				})))),
				R = s("./src/reddit/actions/subreddit.ts"),
				B = s("./src/reddit/components/SubscribeButton/index.tsx"),
				F = s("./src/reddit/controls/Button/index.tsx"),
				M = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = ({
				id: e,
				index: t,
				name: s,
				subscribersCount: n,
				description: r,
				primaryColor: a,
				icon: l,
				isSubscribed: m,
				banner: p,
				path: b,
				size: x,
				isDiscovery: v,
				post: E,
				className: P,
				isNsfw: C
			}) => {
				const k = Object(d.d)();
				Object(i.useEffect)(() => {
					k(Object(R.u)(s))
				}, [k, s]);
				const j = Object(d.e)(t => Object(u.S)(t, {
						subredditId: e
					})),
					I = Object(d.e)(e => e);
				Object(i.useEffect)(() => {
					E && j && v && Object(y.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "community_post",
						post: e,
						subreddit: t,
						...g.o(s)
					}))(E, j)(I))
				}, []);
				const S = Object(i.useCallback)(s => {
					if (v) return (({
						noun: e,
						subredditId: t,
						index: s,
						source: o,
						...n
					}) => r => ({
						...n,
						source: o,
						noun: e,
						actionInfo: {
							reason: `${s}`
						},
						subreddit: Object(u.S)(r, {
							subredditId: t
						})
					}))({
						action: "click",
						post: E,
						noun: s ? "unsubscribe" : "subscribe",
						subredditId: e,
						index: t,
						source: "post_discovery"
					})
				}, [e, t, m]);
				return c.a.createElement("div", {
					className: Object(o.a)(_.a.subredditItem, null === _.a || void 0 === _.a ? void 0 : _.a[x], P)
				}, c.a.createElement("div", {
					className: _.a.contentWrapper
				}, c.a.createElement("div", {
					className: _.a.bannerWrapper,
					style: {
						backgroundColor: a || void 0
					}
				}, c.a.createElement("img", {
					className: _.a.banner,
					src: p || void 0
				})), c.a.createElement("div", {
					className: _.a.carouselContent
				}, c.a.createElement(w.a, {
					to: b,
					className: _.a.lockup,
					onClick: () => {
						v && Object(y.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "community_post",
							post: e,
							subreddit: t,
							...g.o(s)
						}))(E, j)(I))
					}
				}, c.a.createElement("div", {
					style: "small" === x ? {
						backgroundColor: "grey",
						backgroundImage: `url(${p||""})`
					} : {},
					className: _.a.backgroundImage
				}, l ? c.a.createElement("img", {
					src: l,
					className: _.a.subredditIcon
				}) : c.a.createElement(M.a, {
					className: _.a.subredditIcon
				})), c.a.createElement("div", {
					className: _.a.lockupText
				}, c.a.createElement("span", {
					className: _.a.subredditName
				}, "r/", s), " ", C && c.a.createElement(f.b, {
					isFlairFilter: !0,
					flair: {
						type: O.f.Nsfw,
						text: "nsfw"
					},
					className: _.a.flair
				}), c.a.createElement("span", {
					className: _.a.subscribersCount
				}, A._({
					"*": "{number} members",
					_1: "1 member"
				}, [A._plural(n, "number", Object(h.b)(n))], {
					hk: "4yqFU9"
				})))), c.a.createElement("p", {
					className: _.a.description
				}, r)), c.a.createElement(B.a, {
					className: _.a.subscribeButton,
					identifier: {
						name: s,
						type: "subreddit"
					},
					getEventFactory: S,
					priority: F.c.Tertiary,
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
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = e => {
				var t, s;
				const o = null === (s = null === (t = e.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
				return o ? Math.floor(e.clientWidth / o) : 0
			}, H = Object(I.c)(({
				title: e,
				className: t,
				itemIds: s,
				size: r = "large",
				hasSubredditNames: p = !1,
				hasPostIds: b = !1,
				isDiscovery: h,
				post: x
			}) => {
				const v = Object(d.d)(),
					[E, f] = Object(i.useState)(null),
					[g, O] = Object(i.useState)(null),
					[y, P] = Object(i.useState)({
						left: !1,
						right: !0
					}),
					[I, w] = Object(i.useState)(0),
					[S] = Object(i.useState)(void 0),
					{
						subredditIds: N,
						crosspostIds: R,
						postIds: B,
						postUrls: F
					} = Object(i.useMemo)(() => s.reduce((e, {
						type: t,
						id: s,
						url: o
					}) => {
						switch (t) {
							case j.a.SUBREDDIT:
								e.subredditIds.push(s.toLowerCase());
								break;
							case j.a.POST:
								o && (e.postUrls[s] = o), e.postIds.push(s);
								break;
							case j.a.CROSSPOST:
								e.crosspostIds.push(s)
						}
						return e
					}, {
						subredditIds: [],
						postIds: [],
						crosspostIds: [],
						postUrls: {}
					}), [s]),
					M = Object(d.e)(e => Object(u.y)(e, N)),
					A = Object(d.e)(e => Object(k.L)(e, B)),
					U = Object(d.e)(e => Object(k.L)(e, R)),
					H = M.reduce((e, t) => (e[p ? t.name.toLocaleLowerCase() : t.id] = t, e), {}),
					K = A.reduce((e, t) => (e[t.id] = t, e), {}),
					q = U.reduce((e, t) => (e[t.id] = t, e), {});
				Object(i.useEffect)(() => {
					((null == N ? void 0 : N.length) || B.length || R.length) && v(Object(l.e)(N, p, N, b, [...R, ...B]))
				}, [N, R, B, v, b, p]);
				const J = s.filter((e, t, s) => t === s.findIndex(t => t.id === e.id)).reduce((e, {
						type: t,
						id: s
					}) => {
						switch (t) {
							case j.a.SUBREDDIT:
								const o = null == H ? void 0 : H[s.toLowerCase()];
								if (!o || !h && o.isNsfw || !h && o.isSubscribed) break;
								e.push({
									type: t,
									props: o
								});
								break;
							case j.a.POST:
								const n = null == K ? void 0 : K[s];
								if (!n) break;
								e.push({
									type: t,
									props: n
								});
								break;
							case j.a.CROSSPOST:
								const r = null == q ? void 0 : q[s];
								if (!r) break;
								e.push({
									type: t,
									props: r
								})
						}
						return e
					}, []),
					z = e => () => {
						var t, s;
						if (!g) return;
						const o = null === (s = null === (t = null == g ? void 0 : g.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
						if (!o) return;
						const n = (Math.sign(e) ? g.scrollLeft % o : o % g.scrollLeft) || 0,
							r = o * e - n;
						g.scrollBy({
							left: r,
							behavior: "smooth"
						})
					},
					G = Object(i.useCallback)(() => {
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
					if (!E || !g) return;
					const e = a()(() => {
						const e = V(g);
						w(e)
					}, 30);
					window.addEventListener("resize", e);
					const t = V(g);
					return w(t), G(), () => {
						window.removeEventListener("resize", e)
					}
				}, [E, g, G, I, J.length]);
				const X = () => 1 === J.length ? _.a.flexWidth : 2 === J.length ? _.a.flexWidthTwoItems : _.a.constantWidth;
				return c.a.createElement("div", {
					ref: f,
					className: Object(o.a)(_.a.carouselContainer, t, null === _.a || void 0 === _.a ? void 0 : _.a[r])
				}, c.a.createElement("div", {
					className: _.a.carouselHeader,
					style: {
						width: S
					}
				}, c.a.createElement("h3", {
					className: _.a.carouselTitle
				}, e)), c.a.createElement("div", {
					ref: O,
					onScroll: G,
					className: Object(o.a)(_.a.itemsContainer, null === _.a || void 0 === _.a ? void 0 : _.a[r]),
					style: {
						width: S
					}
				}, !J.length && Array(3).fill(!0).map((e, t) => c.a.createElement(L, {
					key: t,
					className: X()
				})), null == J ? void 0 : J.map(({
					type: e,
					props: t
				}, s) => {
					var o, n, a;
					switch (e) {
						case j.a.SUBREDDIT:
							const e = t;
							return c.a.createElement(W, D({
								className: X(),
								index: s + 1,
								size: r,
								banner: null === _.a || void 0 === _.a ? void 0 : _.a.bannerBackgroundImage,
								icon: (null === (o = null == e ? void 0 : e.styles) || void 0 === o ? void 0 : o.icon) || (null === (a = null === (n = e.styles) || void 0 === n ? void 0 : n.legacyIcon) || void 0 === a ? void 0 : a.url),
								key: `${null==e?void 0:e.name}:${s}`,
								isDiscovery: !0,
								post: x
							}, e));
						case j.a.POST:
							const i = t;
							return c.a.createElement(C, {
								postCard: {
									...i,
									url: F[i.id]
								},
								className: X(),
								post: x
							});
						case j.a.CROSSPOST:
							const d = t;
							return c.a.createElement(T, {
								crosspostCard: {
									...d
								},
								className: X(),
								post: x
							});
						default:
							return null
					}
				})), J.length > 2 && c.a.createElement("div", {
					className: Object(o.a)(_.a.carouselControls, {
						[_.a.hasTitle]: !!e
					})
				}, c.a.createElement("div", {
					className: Object(o.a)(_.a.buttonWrapper, _.a.left, {
						[_.a.hidden]: !y.left
					})
				}, c.a.createElement("button", {
					className: _.a.scrollButton,
					onClick: z(-I)
				}, c.a.createElement(m.a, {
					name: n.a.left_fill,
					className: _.a.scrollIcon
				}))), c.a.createElement("div", {
					className: Object(o.a)(_.a.buttonWrapper, _.a.right, {
						[_.a.hidden]: !y.right
					})
				}, c.a.createElement("button", {
					className: _.a.scrollButton,
					onClick: z(I)
				}, c.a.createElement(m.a, {
					name: n.a.right_fill,
					className: _.a.scrollIcon
				})))))
			});
			t.a = H
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/NotificationButton/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				d = s("./src/reddit/components/Thumbnail/index.tsx"),
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
				templatePlaceholderImage: v,
				shouldShowFollowButton: E,
				isFollowed: f,
				isCommentsPage: g,
				onFollowPostClick: O
			}) => {
				return Object(u.a)() ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(a.a)(h.a.thumbnailContainer, {
						[h.a.mShowingButtonOrOverflow]: E || b
					})
				}, n.a.createElement("div", {
					className: h.a.thumbnailContainerRow
				}, E && n.a.createElement(i.a, {
					isFilled: !!f,
					onClick: O,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), b && x && n.a.createElement(c.a, {
					className: h.a.subscribeButton,
					getEventFactory: e => Object(m.h)(t.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: x.name,
						type: Object(p.h)(x) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: t.id,
					small: !0
				})), n.a.createElement(d.a, {
					crosspost: e,
					isCommentsPage: g,
					post: t,
					redditStyle: o,
					forceShowNSFW: s,
					templatePlaceholderImage: v
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
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				i = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(i.a)(),
					{
						isFilled: s,
						onClick: o,
						hasTooltip: d,
						tooltipText: m,
						className: u
					} = e;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, u),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, n.a.createElement(c.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), d && n.a.createElement(a.a, {
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
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/ads/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = s("./src/reddit/constants/experiments.ts"),
				h = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/isRemoved.ts"),
				E = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				y = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				P = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				C = s("./src/reddit/icons/fonts/Report/index.tsx"),
				k = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				j = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				I = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/components/PostBadges/index.m.less"),
				T = s.n(N);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const R = e => r.a.createElement("span", L({
					className: T.a.removalReason
				}, e), e.children),
				B = () => o.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				F = () => o.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				M = e => o.fbt._("Moderator of {community name}", [o.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				A = () => o.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				W = () => o.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				D = (e, t, s) => {
					const o = `PostBadges--${e}--${t}`;
					return s ? `${o}--${s}` : o
				},
				U = Object(x.u)({
					isProfilePostListing: x.L,
					isSubreddit: x.N,
					pageLayer: e => e
				}),
				V = Object(i.c)({
					isPinned: (e, {
						post: t
					}) => Object(S.q)(e, {
						postId: t.id
					}),
					modModeEnabled: x.T
				}),
				H = Object(a.b)(V, (e, t) => ({
					onHideTooltip: () => e(Object(m.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(m.f)({
						tooltipId: t
					}))
				}));
			t.a = U(H(({
				className: e,
				displayText: t,
				isSubreddit: s,
				inSubredditOrProfile: i,
				isCompactPinnedPost: m,
				isPinned: x,
				isProfilePostListing: S,
				modModeEnabled: N,
				onHideTooltip: U,
				onOpenRemovalReasonModal: V,
				onShowTooltip: H,
				post: K,
				tooltipType: q,
				pageLayer: J
			}) => {
				const z = {
						caretOnTop: !1
					},
					G = Object(a.e)(w.a),
					X = (K.isSponsored || Object(c.u)(J)) && (G === b.u.NoLockIcon || G === b.u.PromotedGrey),
					Z = K.isRemoved && !K.modRemovalReason && !K.modNote && K.belongsTo.type === h.a.SUBREDDIT,
					Y = D("Approve", K.id, q),
					Q = D("Archived", K.id, q),
					$ = D("Lock", K.id, q),
					ee = D("Mod", K.id, q),
					te = D("Remove", K.id, q),
					se = D("Report", K.id, q),
					oe = D("Spam", K.id, q),
					ne = D("Sticky", K.id, q),
					re = D("Pinned", K.id, q);
				return r.a.createElement("div", {
					className: e
				}, i && t && K.distinguishType === l.G.MODERATOR && r.a.createElement(n.Fragment, null, r.a.createElement(g.a, {
					name: "mod",
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.modIcon)
				}), r.a.createElement(u.c, L({
					tooltipId: ee,
					text: M(t)
				}, z))), K.isArchived && r.a.createElement(n.Fragment, null, r.a.createElement(y.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.archivedIcon),
					desc: B(),
					id: Q,
					onMouseEnter: H(Q),
					onMouseLeave: U
				}), r.a.createElement(u.c, L({
					tooltipId: Q,
					text: B()
				}, z))), K.isLocked && !X && r.a.createElement(n.Fragment, null, r.a.createElement(P.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.lockIcon),
					desc: F(),
					id: $,
					onMouseEnter: H($),
					onMouseLeave: U
				}), r.a.createElement(u.c, L({
					tooltipId: $,
					text: F()
				}, z))), s && Object(I.r)(K) && !m && r.a.createElement(n.Fragment, null, r.a.createElement(j.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.stickyIcon),
					desc: A(),
					id: ne,
					onMouseEnter: H(ne),
					onMouseLeave: U
				}), r.a.createElement(u.c, L({
					tooltipId: ne,
					text: A()
				}, z))), S && x && r.a.createElement(n.Fragment, null, r.a.createElement(j.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.stickyIcon),
					desc: W(),
					id: re,
					onMouseEnter: H(re),
					onMouseLeave: U
				}), r.a.createElement(u.c, L({
					tooltipId: re,
					text: W()
				}, z))), (K.isApproved || K.approvedBy) && r.a.createElement(n.Fragment, null, r.a.createElement(O.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.approveIcon),
					desc: Object(E.a)(K),
					id: Y,
					onMouseEnter: H(Y),
					onMouseLeave: U
				}), r.a.createElement(u.c, L({
					tooltipId: Y,
					text: Object(E.a)(K)
				}, z))), Object(v.a)(K) && r.a.createElement(n.Fragment, null, r.a.createElement(_.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.removeIcon),
					desc: Object(E.b)(K),
					id: te,
					onMouseEnter: H(te),
					onMouseLeave: U
				}), Z && r.a.createElement(p.a, {
					className: T.a.addRemovalReason,
					onClick: V,
					text: o.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (K.modRemovalReason || K.modNote) && r.a.createElement(R, {
					onMouseEnter: H(te),
					onMouseLeave: U
				}, o.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(u.c, L({
					tooltipId: te,
					text: Object(E.b)(K)
				}, z))), K.bannedBy && K.isSpam && r.a.createElement(n.Fragment, null, r.a.createElement(k.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.spamIcon),
					desc: Object(E.d)(K),
					id: oe,
					onMouseEnter: H(oe),
					onMouseLeave: U
				}), r.a.createElement(u.c, L({
					tooltipId: oe,
					text: Object(E.d)(K)
				}, z))), Object(f.a)(K) && !N && r.a.createElement(n.Fragment, null, r.a.createElement(C.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.reportIcon),
					desc: Object(E.c)(K.numReports),
					id: se,
					onMouseEnter: H(se),
					onMouseLeave: U
				}), r.a.createElement(u.c, L({
					tooltipId: se,
					text: Object(E.c)(K.numReports)
				}, z))))
			}))
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
				return St
			})), s.d(t, "b", (function() {
				return Nt
			})), s.d(t, "a", (function() {
				return Tt
			}));
			var o = s("./node_modules/lodash/noop.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/lib/pubsub/index.ts"),
				h = s("./src/lib/timeAgo/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				E = s("./src/reddit/models/User/index.ts"),
				f = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				g = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				O = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				y = s("./src/reddit/helpers/path/index.ts"),
				P = s("./src/reddit/helpers/trackers/lightbox.ts"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/components/ItemCarousel/index.tsx"),
				k = s("./src/reddit/actions/tooltip.ts"),
				j = s("./node_modules/lodash/find.js"),
				I = s.n(j),
				w = s("./node_modules/react-motion/lib/react-motion.js");
			const S = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				N = {},
				T = (e = [], t) => {
					const s = I()(e, {
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
							opacity: Object(w.spring)(1, S)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : o < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(w.spring)(0, S)
						}
					}]
				};
			class L extends a.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), N), this.state = {
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
					return a.a.createElement(w.TransitionMotion, {
						styles: e => T(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => a.a.createElement("div", {
						className: s
					}, e.map(e => a.a.createElement("div", {
						key: e.key,
						style: e.style
					}, o))))
				}
			}
			var R = s("./src/reddit/models/Media/index.ts"),
				B = s("./src/reddit/models/Post/index.ts"),
				F = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/selectors/activeModalId.ts"),
				A = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				W = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				U = s("./src/reddit/selectors/postCreations.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/selectors/showPromotedCTA.ts"),
				K = s("./src/reddit/selectors/user.ts"),
				q = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				J = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				z = s("./src/reddit/components/AwardBadges/index.tsx"),
				G = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				X = s("./src/reddit/components/Econ/Audio/async.ts"),
				Z = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				Y = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				Q = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				$ = s("./src/reddit/components/ExpandoButton/index.tsx"),
				ee = s("./src/reddit/components/FlairWrapper/index.tsx"),
				te = s("./src/reddit/components/Flatlist/index.tsx"),
				se = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				oe = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				ne = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				re = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				ae = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				ie = s("./src/reddit/components/ModModeReports/index.tsx"),
				ce = s("./src/reddit/components/ModModeReports/helpers.ts"),
				de = s("./src/reddit/components/NotificationButton/index.tsx"),
				le = s("./src/reddit/components/PostContainer/index.tsx"),
				me = s("./src/higherOrderComponents/makeAsync.tsx"),
				ue = s("./src/lib/loadWithRetries/index.ts"),
				pe = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const be = Object(me.a)({
				ErrorComponent: () => a.a.createElement(pe.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(ue.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => a.a.createElement(pe.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var he = e => a.a.createElement(be, e),
				xe = s("./src/reddit/components/PostList/index.tsx"),
				ve = s("./src/reddit/components/PostMedia/index.tsx"),
				Ee = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				fe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ge = s("./src/reddit/components/PostTitle/index.tsx"),
				Oe = s("./src/reddit/components/PostTopLine/index.tsx"),
				ye = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Pe = s("./src/reddit/components/SourceLink/index.tsx"),
				_e = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ce = s("./src/reddit/components/UsersCountIndicator/async.tsx"),
				ke = s("./src/reddit/constants/componentSizes.ts"),
				je = s("./src/reddit/constants/componentTestIds.ts"),
				Ie = s("./src/reddit/constants/postLayout.ts"),
				we = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Se = s("./src/reddit/helpers/postEvent.ts"),
				Ne = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Te = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Le = s("./src/reddit/selectors/postFlair.ts"),
				Re = s("./src/reddit/models/Audio/index.ts"),
				Be = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				Fe = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Me = s("./src/reddit/constants/experiments.ts"),
				Ae = s("./src/reddit/helpers/chooseVariant/index.ts"),
				We = s("./src/reddit/selectors/experiments/presence.ts");
			const De = e => {
					return Object(Ae.c)(e, {
						experimentEligibilitySelector: Ae.a,
						experimentName: Me.pf
					}) === Me.bd
				},
				Ue = e => {
					if (Object(We.a)(e)) return !1;
					return Object(Ae.c)(e, {
						experimentEligibilitySelector: Ae.a,
						experimentName: Me.of
					}) === Me.bd
				},
				Ve = (e, {
					postId: t
				}) => {
					const s = Object(V.G)(e, {
						postId: t
					});
					return !(Object(We.a)(e) || !s || s.isSponsored) && Object(Ae.c)(e, {
						experimentEligibilitySelector: Ae.a,
						experimentName: Me.nf
					}) === Me.bd
				};
			var He = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				Ke = s("./node_modules/fbt/lib/FbtPublic.js"),
				qe = s("./src/reddit/constants/colors.ts"),
				Je = s("./src/reddit/icons/fonts/index.tsx"),
				ze = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Ge = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Xe = s.n(Ge);
			const Ze = a.a.createElement(Je.a, {
				className: Xe.a.BlockIcon,
				name: "block"
			});
			var Ye = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return a.a.createElement(ze.a, {
						className: Xe.a.bannerBase,
						color: qe.a.dayModeActionIcon,
						icon: Ze,
						title: Ke.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && a.a.createElement("button", {
							className: Xe.a.expandButton,
							onClick: t
						}, Ke.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: Xe.a.blockedAuthorTextWrapper
					})
				},
				Qe = s("./src/config.ts"),
				$e = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				et = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				tt = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				st = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				ot = s.n(st);
			const {
				fbt: nt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), rt = () => nt._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [nt._param("=User Agreement", a.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, nt._("User Agreement", null, {
				hk: "3MHgRl"
			}))), nt._param("=Content Policy", a.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, nt._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), at = () => nt._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [nt._param("=User Agreement", a.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, nt._("User Agreement", null, {
				hk: "yMHtU"
			}))), nt._param("=Content Policy", a.a.createElement("a", {
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
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case B.g.AntiEvilOps:
							return nt._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case B.g.Author:
							return nt._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case B.g.AuthorDeleted:
							return nt._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case B.g.AutomodFiltered:
							return nt._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case B.g.CommunityOps:
							return nt._("This post was removed by Reddit admin, u/{username}.", [nt._param("username", t)], {
								hk: "34nHWu"
							});
						case B.g.ContentTakedown:
							return nt._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case B.g.CopyrightTakedown:
							return nt._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case B.g.Moderator:
							return nt._("This post was removed by r/{subredditName} moderator, u/{username}.", [nt._param("subredditName", s), nt._param("username", t)], {
								hk: "270bcn"
							});
						case B.g.Reddit:
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
						case B.g.AntiEvilOps:
							return nt._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case B.g.Author:
							return nt._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case B.g.AuthorDeleted:
							return nt._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case B.g.AutomodFiltered:
							return nt._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case B.g.CommunityOps:
							return nt._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case B.g.ContentTakedown:
							return nt._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case B.g.CopyrightTakedown:
							return nt._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case B.g.Moderator:
							return nt._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [nt._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case B.g.Reddit:
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
						case B.g.AntiEvilOps:
							return a.a.createElement(rt, null);
						case B.g.AuthorDeleted:
						case B.g.Author:
							return nt._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case B.g.AutomodFiltered:
							return nt._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case B.g.CommunityOps:
							return nt._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [nt._param("=just ask", a.a.createElement("a", {
								className: ot.a.link,
								href: `${Qe.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, nt._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case B.g.ContentTakedown:
							return a.a.createElement(at, null);
						case B.g.CopyrightTakedown:
							return nt._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case B.g.Moderator:
							return nt._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case B.g.Reddit:
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
						case B.g.AntiEvilOps:
							return a.a.createElement(rt, null);
						case B.g.AuthorDeleted:
						case B.g.Author:
							return nt._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case B.g.AutomodFiltered:
							return nt._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [nt._param("=[subreddit name]", a.a.createElement("a", {
								className: ot.a.link,
								href: `${Qe.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, nt._("{subreddit name}", [nt._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case B.g.CommunityOps:
							return nt._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case B.g.ContentTakedown:
							return a.a.createElement(at, null);
						case B.g.CopyrightTakedown:
							return nt._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case B.g.Moderator:
							return nt._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case B.g.Reddit:
						default:
							return nt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(o, n), c = t ? qe.a.warning : qe.a.dayModeActionIcon, d = (e => {
					let t;
					switch (e) {
						case B.g.AntiEvilOps:
						case B.g.AutomodFiltered:
						case B.g.CommunityOps:
						case B.g.ContentTakedown:
						case B.g.CopyrightTakedown:
						case B.g.Reddit:
							t = $e.a;
							break;
						case B.g.AuthorDeleted:
						case B.g.Author:
							t = tt.b;
							break;
						case B.g.Moderator:
							t = et.a;
							break;
						default:
							t = $e.a
					}
					return a.a.createElement(t, {
						className: ot.a.icon
					})
				})(o);
				return a.a.createElement(ze.a, {
					className: ot.a.BannerBase,
					color: c,
					icon: d,
					subtitle: i,
					title: r
				})
			};

			function ct(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: o
				} = e;
				return a.a.createElement(a.a.Fragment, null, o && s.removedByCategory && a.a.createElement(it, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: o.name
				}))
			}
			var dt = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				lt = s("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				mt = s("./src/reddit/actions/modal.ts"),
				ut = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				pt = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				bt = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				ht = s("./src/reddit/components/PostUnavailableBanner/index.m.less"),
				xt = s.n(ht);
			const vt = a.a.createElement(Je.a, {
				className: xt.a.RemoveIcon,
				name: "delete_fill"
			});
			var Et = () => a.a.createElement(ze.a, {
					className: xt.a.bannerBase,
					color: qe.a.dayModeActionIcon,
					icon: vt,
					title: Ke.fbt._("Sorry, this post is no longer available.", null, {
						hk: "sb8eO"
					})
				}),
				ft = s("./src/reddit/components/PostContent/index.m.less"),
				gt = s.n(ft);
			const {
				fbt: Ot
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yt = p.a.wrapped(ge.c, "PostTitle", gt.a), Pt = p.a.wrapped($.a, "ExpandoButton", gt.a), _t = p.a.wrapped(L, "ClassicExpandoMotion", gt.a), Ct = p.a.wrapped(te.c, "FullWidthFlatlist", gt.a), kt = a.a.createElement("p", {
				className: gt.a.VideoProcessingStatus
			}, Ot._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), jt = Object(we.u)({
				isCommentsPage: we.x,
				pageLayer: e => e
			}), It = Object(i.b)(() => Object(l.c)({
				activeModalId: M.a,
				flairStyleTemplate: we.V,
				currentUser: K.k,
				crosspost: V.d,
				hideNSFWPref: K.E,
				imageGalleryCurrentItem: V.i,
				isAdminOrMod: (e, t) => {
					const s = Object(V.U)(e, {
						postId: t.postId
					});
					return !!s && Object(W.c)(e, {
						subredditId: s.id
					})
				},
				isCurrentUserProfilePost: V.l,
				isExpanded: V.m,
				isFollowed: V.t,
				isFollowedExpired: V.o,
				showPromotedCTA: H.a,
				post: V.G,
				moderatorPermissions: D.l,
				modModeEnabled: we.T,
				shouldTryToShowCrosspostModal: pt.e,
				showAwardsPlaque: A.a,
				showEditFlair: Le.a,
				subredditOrProfile: V.U,
				isEditing: U.M,
				userIsOp: K.zb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Fe.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Fe.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: Ve,
				isReadingIndicatorsReadTestEnabled: Ue,
				isReadingIndicatorsWriteTestEnabled: De,
				isTrueblockPCBlockeeEnabled: Te.b,
				isTypingIndicatorsExperimentEnabled: He.b,
				isTypingIndicatorsReadTestEnabled: He.c
			}), (e, {
				pageLayer: t,
				postId: s
			}) => ({
				onIgnoreReports: () => e(Object(x.fb)(s)),
				onOpenReportsDropdown: t => e(Object(k.h)({
					tooltipId: t
				})),
				onVoteClick: t => {
					const o = t === F.a.upvoted ? Object(x.jb)(s) : Object(x.w)(s);
					e(o)
				},
				fireAdPixelsOfType: (t, s) => e(Object(x.z)(t, s)),
				openPost: t => e(Object(x.L)(t)),
				onFollowPost: t => e(Object(x.ib)(s, t)),
				onFollowPostExpired: () => e(Object(x.X)({
					id: s,
					expiresAt: 0
				}))
			})), wt = e => e.media && e.media.type === R.o.EMBED && e.media.provider === R.v.Imgur && e.media.height > 700, St = new b.a, Nt = "VISIBLE", Tt = "NOT_VISIBLE", Lt = e => St.publish(e ? Nt : Tt), Rt = {
				threshold: [.85, .001],
				rootMargin: `${1-ke.f}px 0px 0px 0px`
			}, Bt = e => {
				for (const t of e) {
					const {
						intersectionRatio: e
					} = t;
					e >= .85 && Lt(!1), e <= .001 && Lt(!0)
				}
			}, Ft = p.a.wrapped(c.a, "ThumbLink", gt.a), Mt = ({
				post: e,
				templatePlaceholderImage: t,
				shouldShowFollowButton: s,
				isFollowed: o,
				onFollowPostClick: n
			}) => {
				const r = e.source ? a.a.createElement(G.a, {
					post: e,
					forceShowNSFW: !0,
					templatePlaceholderImage: t
				}) : a.a.createElement(Ft, {
					to: Object(y.b)(e.permalink)
				}, a.a.createElement(G.a, {
					post: e,
					forceShowNSFW: !0
				}));
				return a.a.createElement("div", {
					className: gt.a.classicThumbnail
				}, s && a.a.createElement(de.a, {
					className: gt.a.classicNotificationButton,
					isFilled: !!o,
					onClick: n,
					hasTooltip: !0,
					tooltipText: Ot._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), r)
			}, At = ({
				post: e,
				isExpanded: t,
				scrollerItemRef: s
			}) => a.a.createElement(_t, {
				content: a.a.createElement(a.a.Fragment, null, a.a.createElement(ve.a, {
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
			t.c = jt(It(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: o,
					fireAdPixelsOfType: c,
					flairStyleTemplate: l,
					forceOpenInNewTab: p,
					hideNSFWPref: b,
					imageGalleryCurrentItem: x,
					isAdminOrMod: y,
					isCommentCountAnimation: k,
					isCommentsPage: j,
					isCountAnimShadowTestEnabled: I,
					isCrosspostRecommendationsExperimentEnabled: w,
					isCurrentUserProfilePost: S,
					isEditing: N,
					isExpanded: T,
					isFollowed: L,
					isFollowedExpired: F,
					isInModNotesExperiment: M,
					isOverlay: A,
					isReadingIndicatorsExperimentEnabled: W,
					isReadingIndicatorsReadTestEnabled: D,
					isReadingIndicatorsWriteTestEnabled: U,
					isTypingIndicatorsExperimentEnabled: V,
					isTypingIndicatorsReadTestEnabled: H,
					isVoteCountAnimation: K,
					moderatorPermissions: G,
					modModeEnabled: $,
					onFollowPost: de,
					onFollowPostExpired: me,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					openPost: be,
					onVoteClick: ke,
					post: we,
					scrollerItemRef: Le,
					sendEvent: Fe,
					shouldTryToShowCrosspostModal: Me,
					showAwardsPlaque: Ae,
					showEditFlair: We,
					showPromotedCTA: De,
					subredditOrProfile: Ue,
					userIsOp: Ve,
					isTrueblockPCBlockeeEnabled: He,
					pageLayer: Ke
				} = e, qe = Object(_e.b)(), Je = Object(r.useRef)(null), [ze, Ge] = Object(r.useState)(we.authorIsBlocked), Xe = Object(R.J)(we), Ze = Object(i.e)(e => Object(Te.a)(e)), Qe = Object(d.a)(we), $e = W || V, et = $e || D || U || H;
				Object(r.useEffect)(() => {
					F && me()
				}, []);
				const tt = Object(i.d)(),
					st = Object(r.useRef)(null);
				Object(r.useEffect)(() => {
					if (w && Me) return tt(Object(lt.a)(we)), st.current = setTimeout(() => {
						tt(Object(mt.h)(ut.a)), tt(Object(lt.b)())
					}, ut.b), () => {
						tt(Object(lt.b)()), tt(Object(mt.g)(ut.a)), st.current && clearTimeout(st.current)
					}
				}, [tt, w, we, Me]), Object(Ne.a)(Je, Bt, Rt);
				const ot = we.isSponsored ? Object(xe.b)(we.id, {
						fireAdPixelsOfType: c,
						openPost: be
					}) : n.a,
					nt = Object(O.a)(G),
					rt = Object(f.a)(G),
					at = Object(g.a)(G),
					it = nt || rt,
					pt = ((e, t, s) => {
						const [o, n] = e ? [Object(E.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return o || t || n
					})(o, it, we),
					ht = !!we.media && (we.media.type === R.o.RTJSON || we.media.type === R.o.TEXT),
					xt = Ve && ht,
					vt = Object(ae.d)(we),
					ft = Object(ce.c)(we);
				let Ot;
				const _t = !($ && nt),
					jt = Object(Ee.b)({
						hide: !$e && _t,
						editPost: !$e && _t,
						save: _t,
						report: !$e && _t
					}),
					It = we.removedByCategory === B.g.AuthorDeleted,
					St = o && (o.displayText === we.author || o.username === we.author),
					Nt = !!we.unrepliableReason,
					Tt = !(Nt && He) && !It && !wt(we) && (St || y || !(we.removedByCategory && we.media && (Object(R.M)(we.media) || Object(R.K)(we.media) || Object(R.E)(we.media)))),
					Lt = Object(m.t)(we, x),
					{
						source: Ft
					} = Lt,
					Wt = we.removedByCategory === B.g.Reddit && Object(h.e)(we.created) > 24,
					Dt = we.removedByCategory && we.removedByCategory !== B.g.Reddit || Wt,
					Ut = !Dt && !we.isArchived,
					Vt = Object(r.useCallback)(() => {
						de(L ? B.f.UNFOLLOWED : B.f.FOLLOWED), qe(L ? Object(_.m)(we.id) : Object(_.c)(we.id))
					}, [de, qe, L, we.id]),
					Ht = a.a.createElement(yt, {
						post: we,
						innerRef: Je,
						size: ge.b.ExtraLarge,
						isOverlay: A,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Kt = a.a.createElement(dt.a, {
						post: we,
						showViewCount: pt
					}),
					qt = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: o
						} = e;
						return s ? Ie.g.Classic : Object(Be.c)(o) ? Ie.g.Large : Object(Re.b)(o) ? Ie.g.Large : t ? Ie.g.Large : o.media && !wt(o) ? Ie.g.Large : Ie.g.Medium
					})(e),
					Jt = Object(i.e)(bt.b),
					zt = Object(se.b)(we),
					Gt = () => {
						const t = !(Nt && Ze && ze),
							o = Object(R.I)(we);
						return Nt && o ? a.a.createElement(Et, null) : Ze && ze ? a.a.createElement(Ye, {
							onBannerClick: () => Ge(!1),
							isExpandable: Xe
						}) : we.source && qt === Ie.g.Medium ? a.a.createElement(Pe.a, {
							post: we,
							isCommentsPage: j,
							pageLayer: Ke
						}) : Tt && !N && qt === Ie.g.Large ? a.a.createElement(ve.a, {
							className: Object(u.a)(gt.a.LargePostMedia, {
								[gt.a.isCommentsPage]: j
							}),
							isCommentsPage: !0,
							isListing: !1,
							isNotCardView: A,
							isOverlay: A,
							post: we,
							shouldLoad: !0,
							showFull: !0,
							shouldPause: !A,
							showCentered: !0,
							showPromotedCTA: De,
							scrollerItemRef: Le
						}) : t && qt === Ie.g.Classic ? a.a.createElement(a.a.Fragment, null, a.a.createElement(Pt, {
							crosspost: s || void 0,
							isExpanded: !!T,
							post: we,
							useMediaIcons: !1
						}), At(e)) : null
					};
				if (qt === Ie.g.Classic) {
					const e = Object(v.a)(we);
					Ot = a.a.createElement("div", {
						"data-test-id": je.e
					}, a.a.createElement(fe.a, {
						model: we,
						handleVote: ke,
						isCountAnimShadowTestEnabled: I,
						isOverlay: A,
						isVoteCountAnimation: K,
						postId: we.id
					}), a.a.createElement("div", {
						className: gt.a.mainBody
					}, a.a.createElement("div", {
						className: gt.a.content
					}, a.a.createElement(Oe.a, {
						hideAwards: Ae,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: j,
						isCurrentUserProfilePost: S,
						isInModNotesExperiment: !!M,
						isOverlay: !!A,
						isTopicPage: !1,
						post: we,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!A && !we.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ue,
						shouldShowFollowButton: Ut && !e,
						isFollowed: L,
						onFollowPostClick: Vt
					}), Ht, a.a.createElement(ee.a, {
						className: j ? gt.a.leftPadding : void 0,
						post: we,
						sendEvent: Fe
					}), $ && nt && ft && a.a.createElement(ie.a, {
						onIgnoreReports: ue,
						reportable: we
					}), a.a.createElement(oe.d, null), a.a.createElement("div", {
						className: gt.a.FlatlistContainer
					}, Gt(), Ae && a.a.createElement(z.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: we,
						tooltipType: A ? ye.c.Lightbox : void 0
					}), a.a.createElement(Ct, {
						currentUser: o,
						hasModFlairPerms: rt,
						hasModFullPerms: at,
						hasModPostPerms: nt,
						isOverlay: A,
						onIgnoreReports: ue,
						onOpenReportsDropdown: pe,
						modModeEnabled: $,
						post: we,
						showUpvotePercent: !0,
						showViewCount: pt,
						useFlatlistBreakpoints: jt,
						isCommentCountAnimation: k,
						isCountAnimShadowTestEnabled: I
					}))), e && a.a.createElement(Mt, {
						post: we,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Ut,
						isFollowed: L,
						onFollowPostClick: Vt
					})))
				} else if (qt === Ie.g.Medium) {
					const e = Object(v.a)(we);
					Ot = a.a.createElement("div", {
						"data-test-id": je.e
					}, a.a.createElement(fe.a, {
						model: we,
						handleVote: ke,
						isCountAnimShadowTestEnabled: I,
						isOverlay: A,
						shouldShowUpvoteRatioOnHover: $e,
						isVoteCountAnimation: K,
						postId: we.id
					}), a.a.createElement("div", {
						className: gt.a.mainBody
					}, a.a.createElement("div", {
						className: gt.a.content
					}, a.a.createElement(Oe.a, {
						hideAwards: Ae,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: j,
						isCurrentUserProfilePost: S,
						isInModNotesExperiment: !!M,
						isOverlay: !!A,
						isTopicPage: !1,
						post: we,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!A && !we.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ue,
						shouldShowFollowButton: Ut && !e,
						isFollowed: L,
						onFollowPostClick: Vt
					}), Ht, Gt(), Object(R.O)(we) && kt, a.a.createElement(ee.a, {
						className: j ? gt.a.leftPadding : void 0,
						post: we,
						sendEvent: Fe
					}), Ue && Dt && a.a.createElement(ct, {
						isAdminOrMod: y,
						post: we,
						subredditOrProfile: Ue
					}), $ && nt && ft && a.a.createElement(ie.a, {
						onIgnoreReports: ue,
						reportable: we
					})), e && !Qe && a.a.createElement(ne.a, {
						post: we,
						forceShowNSFW: !0,
						hasModPostPerms: it,
						isCommentsPage: j,
						isOverlay: !0,
						modModeEnabled: $,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: Ue,
						shouldShowFollowButton: Ut,
						isFollowed: L,
						onFollowPostClick: Vt
					})), a.a.createElement(oe.d, null), Ae && a.a.createElement(z.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: we,
						tooltipType: A ? ye.c.Lightbox : void 0
					}), !!Jt && a.a.createElement(C.a, {
						itemIds: zt,
						hasSubredditNames: !0,
						hasPostIds: !0,
						isDiscovery: !0,
						post: we,
						size: "small"
					}), a.a.createElement("div", {
						className: gt.a.controlsContainer
					}, a.a.createElement(te.c, {
						currentUser: o,
						hasModFlairPerms: rt,
						hasModFullPerms: at,
						hasModPostPerms: nt,
						isOverlay: A,
						modModeEnabled: $,
						onIgnoreReports: ue,
						onOpenReportsDropdown: pe,
						post: we,
						showEditPost: xt,
						showEditFlair: We,
						tooltipType: A ? ye.c.Lightbox : void 0,
						useFlatlistBreakpoints: jt,
						isCommentCountAnimation: k,
						isCountAnimShadowTestEnabled: I,
						shouldHideItems: $e
					}), et && a.a.createElement(Ce.a, {
						isReadingIndicatorsExperiment: W,
						isReadingIndicatorsReadLoadTest: D,
						isReadingIndicatorsWriteLoadTest: U,
						isTypingIndicatorsExperiment: V,
						isTypingIndicatorsReadLoadTest: H,
						postId: we.id
					}), !$e && Kt))
				} else qt === Ie.g.Large && (Ot = a.a.createElement("div", {
					"data-test-id": je.e
				}, a.a.createElement(fe.a, {
					model: we,
					handleVote: ke,
					isCountAnimShadowTestEnabled: I,
					isOverlay: A,
					shouldShowUpvoteRatioOnHover: $e,
					isVoteCountAnimation: K,
					postId: we.id
				}), Object(Be.c)(we) && a.a.createElement(a.a.Fragment, null, a.a.createElement(Y.a, {
					post: we
				}), a.a.createElement(Z.a, {
					post: we
				})), !Object(Be.c)(we) && a.a.createElement(a.a.Fragment, null, a.a.createElement(Oe.a, {
					forceOpenInNewTab: p,
					hideAwards: Ae,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: j,
					isCurrentUserProfilePost: S,
					isInModNotesExperiment: !!M,
					isOverlay: !!A,
					isTopicPage: !1,
					post: we,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!A && !we.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: Ue,
					shouldShowFollowButton: Ut,
					isFollowed: L,
					onFollowPostClick: Vt
				}), Ht, ((e, t, s, o) => e.source && !t && (s || o))(we, s, A, j) && a.a.createElement(Pe.a, {
					post: we,
					isCommentsPage: j,
					pageLayer: Ke
				})), a.a.createElement(ee.a, {
					className: j ? gt.a.leftPadding : void 0,
					post: we,
					sendEvent: Fe
				}), Ue && Dt && a.a.createElement(ct, {
					isAdminOrMod: y,
					post: we,
					subredditOrProfile: Ue
				}), N && a.a.createElement(he, {
					post: we
				}), Gt(), De && Ft && Ft.url && a.a.createElement(q.a, {
					className: gt.a.adLinkWrapper
				}, a.a.createElement(J.a, {
					post: we,
					adLinkContent: Lt
				})), $ && nt && vt && a.a.createElement("div", {
					className: gt.a.modModeBannerWrapper
				}, a.a.createElement(re.a, {
					thing: we
				})), $ && nt && ft && a.a.createElement("div", {
					className: gt.a.modModeBannerWrapper
				}, a.a.createElement(ie.a, {
					onIgnoreReports: ue,
					reportable: we
				})), Object(Re.b)(we) && a.a.createElement(X.a, {
					post: we
				}), a.a.createElement(oe.d, null), Ae && a.a.createElement(z.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: we,
					tooltipType: A ? ye.c.Lightbox : void 0
				}), !!Jt && a.a.createElement(C.a, {
					itemIds: zt,
					hasSubredditNames: !0,
					hasPostIds: !0,
					isDiscovery: !0,
					post: we,
					size: "small"
				}), a.a.createElement("div", {
					className: gt.a.controlsContainer
				}, a.a.createElement(te.c, {
					currentUser: o,
					forceOpenInNewTab: p,
					hasModFlairPerms: rt,
					hasModFullPerms: at,
					hasModPostPerms: nt,
					isOverlay: A,
					modModeEnabled: $,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					post: we,
					showEditPost: xt,
					showEditFlair: We,
					tooltipType: A ? ye.c.Lightbox : void 0,
					useFlatlistBreakpoints: jt,
					isCommentCountAnimation: k,
					isCountAnimShadowTestEnabled: I,
					shouldHideItems: $e
				}), et && a.a.createElement(Ce.a, {
					isReadingIndicatorsExperiment: W,
					isReadingIndicatorsReadLoadTest: D,
					isReadingIndicatorsWriteLoadTest: U,
					isTypingIndicatorsExperiment: V,
					isTypingIndicatorsReadLoadTest: H,
					postId: we.id
				}), !$e && Kt)));
				const Xt = Object(r.useCallback)((e, t) => Object(_.h)(e, t), []);
				return a.a.createElement(le.a, {
					className: Object(u.a)(t, gt.a.postContainer, {
						[gt.a.hasEventMeta]: Object(Se.a)(we)
					}),
					isOverlay: A,
					post: we,
					eventFactory: A ? P.b : Xt,
					onClick: ot
				}, a.a.createElement(Q.a, {
					post: we
				}), Ot)
			}))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : n.a.createElement(a.a, {
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
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/hooks/useClickSourceData.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/components/PostMeta/index.m.less"),
				g = s.n(f);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: f,
					isOverlay: O,
					isTopicPage: y,
					post: P,
					shouldShowSubscribeButton: _,
					subredditOrProfile: C,
					tooltipType: k
				} = e, j = !!y, I = Object(v.a)();
				return n.a.createElement("div", {
					className: g.a.metaContainer
				}, !o && !P.isSponsored && C && n.a.createElement(a.a, {
					postId: P.id,
					subredditName: C.name
				}, n.a.createElement(m.a, {
					className: g.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: C.url,
						state: I
					}
				}, C.displayText)), C && C.isQuarantined && n.a.createElement(l.a, null), !o && !P.isSponsored && C && _ && !f && n.a.createElement(u.a, {
					className: g.a.SubscribeButton,
					getEventFactory: e => Object(x.h)(P.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: C.name,
						type: Object(E.h)(C) ? p.a.PROFILE : p.a.SUBREDDIT
					},
					postId: P.id,
					size: b.d.XXS,
					small: !0
				}), !o && !P.isSponsored && n.a.createElement(h.b, null), !o && !P.isSponsored && n.a.createElement(i.h, {
					type: P.belongsTo.type,
					id: P.belongsTo.id
				}), n.a.createElement(d.d, {
					className: g.a.postTopMeta,
					flairStyleTemplate: t,
					post: P,
					tooltipType: k
				}), n.a.createElement(c.a, {
					displayText: C ? C.displayText : null,
					inSubredditOrProfile: !!o,
					post: P,
					tooltipType: k
				}), !j && n.a.createElement(r.a, {
					hideCta: s,
					thing: P,
					tooltipType: O ? d.c.Lightbox : void 0
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
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
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
					isOverlay: v,
					isVoteCountAnimation: E,
					postId: f,
					shouldShowUpvoteRatioOnHover: g
				} = e, O = `upvote-button-${t.id}${v?"-overlay":""}`;
				return n.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: x
				}, o && n.a.createElement(c.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), n.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: O,
					isVoteCountAnimation: E,
					isCountAnimShadowTestEnabled: p,
					postId: f,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: g
					}),
					shouldShowUpvoteRatioOnHover: g
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
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(_);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: n,
				hideNSFWPref: _,
				hostPostData: k,
				iconClassName: j,
				inSubredditOrProfile: I,
				isCommentsPage: w,
				isCompactPinnedPost: S,
				isCurrentUserProfilePost: N,
				isInModNotesExperiment: T,
				isOverlay: L,
				isTopicPage: R,
				listingKey: B,
				post: F,
				shouldShowSubscribeButton: M,
				showCornerOutboundLink: A,
				showSubreddit: W,
				showSubredditIcon: D,
				subredditOrProfile: U,
				isFollowed: V,
				shouldShowFollowButton: H,
				onFollowPostClick: K
			}) => {
				const q = n || R,
					J = U && Object(y.h)(U),
					z = Object(a.e)(e => {
						if (!J) return !0;
						const t = Object(P.Cb)(e, F.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(i.a)(C.a.container, e)
				}, W && U && r.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: U.url
				}, D && r.a.createElement(p.b, {
					className: Object(i.a)(C.a.subredditIcon, j),
					shouldHideNsfwIcon: _,
					subredditOrProfile: U
				}))), r.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, W && r.a.createElement(d.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), r.a.createElement(u.d, {
					className: C.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					isInModNotesExperiment: T,
					tooltipType: L ? u.c.Lightbox : void 0,
					post: F,
					showSub: W,
					subredditOrProfile: U
				}), r.a.createElement(m.a, {
					className: C.a.postBadges,
					displayText: U ? U.displayText : null,
					inSubredditOrProfile: I,
					isCompactPinnedPost: S,
					post: F,
					tooltipType: L ? u.c.Lightbox : void 0
				}), !q && r.a.createElement(c.a, {
					isPostDetail: w,
					thing: F,
					tooltipType: L ? u.c.Lightbox : void 0
				})), U && z && W && M && !N && r.a.createElement(h.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(f.h)(F.id, e ? "unsubscribe" : "subscribe", "post", B, k),
					identifier: {
						name: U.name,
						type: J ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: F.id,
					size: v.d.XS
				}), A && r.a.createElement(E.b, {
					isSponsored: F.isSponsored,
					postId: F.id,
					href: Object(O.D)(F),
					source: F.source
				}, r.a.createElement(g.a, {
					className: C.a.outboundLinkIcon
				})), H && z && r.a.createElement(l.a, {
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
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				x = s.n(h);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: s,
				post: i,
				share: h
			}) => {
				const E = Object(l.b)(),
					f = Object(a.d)(),
					g = i && i.id,
					O = i && i.voteState;
				let y = null;
				g || (y = e ? "user_hovercard" : "profile_overview");
				const P = Object(n.useCallback)(() => E(Object(u.g)(e ? "user_hovercard" : "profile_overview", t)), [e, E, t]);
				return r.a.createElement(m.t, {
					onClick: () => {
						s ? (E(u.h), g && O === b.a.notVoted && f(Object(c.jb)(g))) : P();
						const e = s ? "postify" : "copy";
						f(Object(d.b)({
							clickSource: y,
							share: h,
							source: e
						}))
					},
					className: Object(o.a)(x.a.snoovatarButton, x.a.snoovatarExtraPadding, x.a.compactButtonLayout, {
						[x.a.avatarPostifyButton]: s
					}),
					isFullWidth: !0
				}, r.a.createElement(p.a, {
					className: Object(o.a)({
						[x.a.shirtIcon]: !s,
						[x.a.avatarPostButtonShirtIcon]: s
					})
				}), v._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: x.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, s) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/getShortenedLink.ts"),
				c = s("./node_modules/fbt/lib/FbtPublic.js");
			const d = 16765092,
				l = "https://i.redd.it/snoovatar",
				m = "snoovatars",
				u = "avatars";
			var p = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				b = s("./src/reddit/components/AvatarPost/index.m.less"),
				h = s.n(b);
			var x = ({
					sourceUrl: e,
					username: t,
					post: s
				}) => {
					const [o, r] = new URL(e).pathname.split("/").slice(2), a = function(e) {
						return `${l}/${+e>=d?u:m}/shared/${e}.png`
					}(r);
					return n.a.createElement("div", {
						className: h.a.avatarPostContainer
					}, n.a.createElement("img", {
						className: h.a.avatarPostImage,
						src: a,
						alt: c.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), n.a.createElement(p.a, {
						isHovercard: !1,
						username: t,
						isAvatarPost: !0,
						post: s,
						share: {
							username: o,
							avatarId: r
						}
					}))
				},
				v = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				E = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				f = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/components/SourceLink/index.m.less"),
				O = s.n(g),
				y = s("./src/lib/lessComponent.tsx"),
				P = s("./src/telemetry/models/Outbound.ts");
			const _ = y.a.wrapped(f.a, "OutboundLinkIcon", O.a),
				C = y.a.div("SourceLinkWrapper", O.a);

			function k(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: o,
					pageLayer: c
				} = e, d = o ? P.SourceElement.PostLink : P.SourceElement.ListingPostLink, {
					source: l
				} = s, m = s.isSponsored || Object(r.u)(c), u = Object(E.a)(s);
				return l ? u ? n.a.createElement(x, {
					sourceUrl: l.url,
					username: s.author,
					post: s
				}) : n.a.createElement(C, {
					className: Object(a.a)({
						[O.a["m-comment"]]: o
					}, t)
				}, n.a.createElement(v.a, {
					href: l.url,
					isSponsored: m,
					postId: s.id,
					source: l,
					sourceElement: d
				}, Object(i.a)({
					...s,
					isSponsored: m
				}), n.a.createElement(_, {
					isFilled: !0
				}))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = s.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class p extends n.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: o,
							postId: r,
							sendEvent: a,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...h
						} = this.props, x = this.state.isHovered, v = Object(c.a)({
							type: t.type,
							key: x ? "unsubscribe" : "subscribed"
						});
						return n.a.createElement(i.t, m({
							className: e,
							priority: h.shouldReverseColor ? i.c.Primary : i.c.Secondary,
							text: v,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: i.d.XSP
						}, h))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: o,
							postId: r,
							sendEvent: a,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: u,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...h
						} = this.props, x = Object(c.a)({
							type: t.type,
							key: "subscribe"
						});
						return n.a.createElement(i.t, m({
							className: e,
							priority: h.shouldReverseColor ? i.c.Secondary : i.c.Primary,
							size: i.d.XSP,
							text: x,
							onClick: this.onClick
						}, h, {
							id: `subscribe-button-${r}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : n.a.createElement(u, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(a.a)(Object(r.c)(p))
		},
		"./src/reddit/components/UsersCountIndicator/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "UsersCountIndicator",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("UsersCountIndicator").then(s.bind(null, "./src/reddit/components/UsersCountIndicator/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/UsersCountIndicator/index.tsx"
				}
			})
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
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
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
				return r
			})), s.d(t, "b", (function() {
				return a
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
				r = (e, t) => s => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost",
					post: e,
					subreddit: t,
					...o.o(s)
				}),
				a = () => e => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost_see_all",
					...o.o(e)
				})
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react-redux/es/index.js");
			const n = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				r = ["t5_q0gj4", "t5_2rjli"],
				a = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var i = s("./src/reddit/selectors/experiments/econ/index.ts");
			const c = e => Object(o.e)(t => {
				return !!(({
					adminId: e,
					subredditId: t,
					avatarShareUrl: s
				}) => {
					const o = a.test(s.trim()),
						i = n.includes(e),
						c = r.includes(t);
					return o && i && c
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(i.c)(t)
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
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("pin", e.isFilled), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
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
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = function({
				className: e
			}) {
				return n.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					fill: "inherit"
				}, n.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(a);
			const c = e => n.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.wc
				});
				return !(!t || Object(o.vf)(t))
			}
		},
		"./src/reddit/selectors/experiments/subredditDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts");
			const a = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.Te
					}) === o.bd
				},
				i = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.Se
					}) === o.bd
				}
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				a = s("./src/reddit/selectors/experiments/presence.ts");
			const i = e => {
					if (Object(a.a)(e)) return !1;
					return Object(n.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.rf
					}) === o.bd
				},
				c = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.sf
					}) === o.bd
				},
				d = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.qf
					});
					return t === o.jf.TypingIndicators || t === o.jf.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: o.qf
					});
					return (null == t ? void 0 : t.variant) === o.jf.IndicatorsPlusCTA
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~StandalonePostPage.cb4e5596af2100ad1bc2.js.map