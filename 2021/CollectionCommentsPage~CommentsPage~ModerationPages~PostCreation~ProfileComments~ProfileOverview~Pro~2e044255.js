// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255.cbafd51fbb8c33d259fd.js
// Retrieved at 6/28/2021, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"], {
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, s) {
			"use strict";
			t.a = e => {
				return new Date(1e3 * e).toUTCString().replace("GMT", "UTC")
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => {
					let t = 0,
						s = 0;
					const n = [0];
					for (const r of e) t++, s += r.length, n[t] = s;
					return n
				},
				r = e => {
					let t = 0,
						s = 0;
					const n = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) n[s] = t, s++;
						t++
					}
					return n[s] = t, n
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/matchRoute/index.ts"),
				r = s("./src/lib/opener/index.ts"),
				o = s("./node_modules/react-router-redux/es/index.js");
			const i = (e, t = !0) => async (s, i, {
				routes: a
			}) => {
				const c = i();
				Object(n.a)(e, a, c) ? s(Object(o.b)(e)) : t ? Object(r.d)(e, "_blank") : window.location.assign(e)
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				E = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/CrosspostBox/index.m.less"),
				_ = s.n(y),
				v = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = v.a.div("Container", _.a),
				S = v.a.div("PostMetaWrapper", _.a),
				C = v.a.wrapped(p.c, "PostTitle", _.a),
				k = v.a.div("FlatList", _.a),
				T = v.a.div("FlatItem", _.a),
				I = v.a.span("FlatListDotSpacer", _.a),
				L = v.a.wrapped(j, "LinkContainer", _.a),
				P = v.a.div("Content", _.a),
				w = v.a.div("ThumbnailContainer", _.a),
				M = Object(c.c)({
					isCurrentUserProfilePost: E.k,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Jb.TOPIC),
					shouldOpenPostInNewTab: g.cb
				}),
				N = Object(i.b)(M);
			t.a = Object(f.b)(N(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: r,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const c = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${r.isListing}`
					},
					d = t;
				return i && !i.media ? o.a.createElement(L, {
					className: d
				}, o.a.createElement(P, null, o.a.createElement(S, null, o.a.createElement(m.a, c)), R(i), i.source && o.a.createElement(b.a, {
					post: i
				}), D(e)), H(e)) : o.a.createElement(j, {
					className: d
				}, o.a.createElement(S, null, o.a.createElement(m.a, c)), R(i), B(e), D(e))
			}));
			const R = e => o.a.createElement(C, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				B = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return o.a.createElement("div", null, o.a.createElement(u.a, O({}, n, {
						className: _.a.mediaContainer
					})))
				},
				D = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return o.a.createElement(k, null, o.a.createElement(T, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), o.a.createElement(I, null), o.a.createElement(T, null, F(e)))
				},
				F = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: r
					} = t;
					return o.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(r, "comment count", Object(l.b)(r))], {
						hk: "xPYWL"
					}))
				},
				H = e => o.a.createElement(w, null, o.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				i = Object(r.a)("spBurnLinks", Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = s.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: m.W
				}));
			t.a = x(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(a.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: s,
					style: n,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				unblurButtonContainer: "c1UAj_LbgdGBuJFlKbnrQ",
				unblurButton: "_2Ws3wFSVPzJhnW46FsoxLv"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return T
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/opener/index.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/PlayButton/index.tsx"),
				b = s("./src/reddit/constants/elementClassNames.ts"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/ads.ts"),
				f = s("./src/reddit/hooks/useClickSourceData.ts"),
				E = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/constants/tracking.ts"),
				j = s("./src/reddit/components/Media/blurredContent.ts"),
				S = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				C = s.n(S);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => e > 2 * E.e,
				I = e => {
					const t = Object(d.a)(C.a.image, b.g, e.className, {
							[C.a.mShowCentered]: e.showCentered,
							[C.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${E.j}px`), e.isListing || e.isTall && T(e.height) || (s.maxHeight = `${E.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				L = e => {
					const t = {};
					return (!e.showFull && Object(E.I)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${E.j}px`, e.shouldBlur && (t.maxWidth = Object(E.I)(e.height, e.width) ? `${E.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(C.a.container, e.className),
						style: t
					}, e.children)
				},
				P = Object(i.b)(() => Object(c.a)(y.E, v.cb, (e, {
					isSponsored: t,
					postId: s
				}) => t && s ? Object(y.b)(e, s) : null, g.a, _.actionInfo, y.F, (e, t, s, n, r, o) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					sendGoodVisitEvent: n,
					pageType: r.pageType,
					post: o
				})));
			t.a = P(e => {
				const t = e.sendGoodVisitEvent ? Object(f.a)() : void 0;
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(h.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(x.a)(e.post, e.pageType)
					}
				}, M(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink)
				}, M(e)) : M(e)
			});
			const w = (e, t) => o.a.createElement(I, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[O.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				M = ({
					onClick: e,
					...t
				}) => {
					const s = Object(E.I)(t.height, t.width),
						r = T(t.height) && s;
					return o.a.createElement(L, k({}, t, {
						className: `${s?`${O.a} `:""}${t.className||""}`
					}), t.isListing ? o.a.createElement("div", {
						className: t.contentImageClassName
					}, w(s, t)) : o.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.b
					}, w(s, t)), t.isListing && !t.showFull && t.height > E.j && Object(E.I)(t.height, t.width) && o.a.createElement("div", {
						className: C.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && o.a.createElement(p.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && o.a.createElement("div", {
						className: C.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: C.a.unblurButton
					}, Object(j.a)(!!t.isNSFW, !!t.isSpoiler))))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, s) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/forceHttps/index.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = s.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const s = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					n = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					c = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, n, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/video.ts"),
				u = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/selectors/video.ts");
			const h = 100,
				x = h / 2 / 1e3;
			var f = s("./src/lib/forceHttps/index.ts");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends i.a.Component {
				constructor(e) {
					super(e), this.toggle = e => {
						if (e) {
							const e = this.play();
							e && e.catch && e.catch(() => {})
						} else this.pause()
					}, this.ref = null
				}
				play() {
					if (this.ref && this.ref.play) return this.ref.play()
				}
				pause() {
					if (this.ref && this.ref.pause) return this.ref.pause()
				}
				componentDidMount() {
					this.initEventHandlers(), this.toggle(!this.props.shouldPause && (this.props.autoplay || this.props.isNotCardView))
				}
				componentWillUnmount() {
					this.destroyEventHandlers()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.shouldPause !== e.shouldPause && this.toggle(!e.shouldPause && (e.autoplay || e.isNotCardView))
				}
				destroyEventHandlers() {
					this.ref && this.cancelBufferingDetector && this.cancelBufferingDetector()
				}
				initEventHandlers() {
					this.ref && this.props.onBufferingChange && (this.cancelBufferingDetector = function(e, t) {
						let s = !1,
							n = !1;
						const r = () => s = !0,
							o = () => n = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, n) return n = !1, void(a = c);
							if (e.paused || e.seeking || !s) return void(a = c);
							const r = i;
							4 === e.readyState ? i = !1 : !i && c >= a && c < a + x ? i = !0 : i && c >= a && c > a + x && (i = !1), a = c, r !== i && t(i)
						}, h);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(this.ref, this.props.onBufferingChange))
				}
				render() {
					const {
						autoplay: e,
						isListing: t,
						isNotCardView: s,
						onBufferingChange: n,
						shouldLoad: r,
						shouldPause: o,
						showCentered: a,
						showFull: c,
						source: d,
						...l
					} = this.props;
					return i.a.createElement("video", E({}, l, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), i.a.createElement("source", {
						src: Object(f.a)(this.props.source || "")
					}))
				}
			}
			var y = g,
				_ = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				v = s.n(_);
			const O = Object(c.c)({
					autoplayPref: p.b,
					consumed: b.a,
					loadTimes: b.f,
					metadata: b.h,
					started: b.k
				}),
				j = Object(a.b)(O, (e, {
					postId: t
				}) => ({
					onBufferingChanged: s => {
						e(s ? l.r(t) : l.E(t))
					},
					onLoadStarted: s => e(l.q(t, s)),
					onMetadataReceived: s => e(l.D({
						metadata: s,
						postId: t
					})),
					onPaused: () => e(l.z({
						postId: t
					})),
					onPlayable: s => e(l.A(t, s)),
					onPlaying: () => e(l.C(t)),
					onWatched: () => e(l.s(t)),
					onViewableImpression: () => e(l.x(t)),
					onFullyViewableImpression: () => e(l.u(t)),
					onPlayedWithSound: () => e(l.B(!1, t)),
					onWatchedPercent: s => e(l.N(s, t))
				}));
			class S extends i.a.Component {
				constructor() {
					super(...arguments), this.percentTriggered = 0, this._checkForConsumption = r()(e => {
						if (this.props.consumed) return;
						const {
							target: t
						} = e;
						t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && this.props.onWatched()
					}, 200), this.onTimeUpdate = e => {
						e.persist(), this._checkForConsumption(e)
					}, this.onVideoPlayable = e => {
						this.props.metadata || this.sendTransformedMetadata(e), this.props.started || this.props.onPlayable(e.timeStamp)
					}, this.loadStarted = e => {
						this.props.onLoadStarted(e.timeStamp)
					}, this.sendTransformedMetadata = e => {
						this.props.onMetadataReceived({
							id: this.props.postId,
							length: 1e3 * e.target.duration,
							originalHeight: e.target.videoHeight,
							originalWidth: e.target.videoWidth
						})
					}, this.onPaused = e => {
						this.props.onPaused()
					}, this.onPlaying = e => {
						this.props.loadTimes || this.onVideoPlayable(e), this.props.metadata || this.sendTransformedMetadata(e), this.props.onPlaying()
					}, this.renderVideoPlayer = () => {
						const {
							showCentered: e,
							isListing: t
						} = this.props, s = {};
						return e && (s.margin = "0 auto"), t || (s.maxHeight = `${m.e}px`), i.a.createElement(y, {
							autoplay: this.props.autoplayPref,
							className: Object(d.a)(u.a, v.a.styledVideo),
							height: this.props.height,
							isListing: this.props.isListing,
							isNotCardView: this.props.isNotCardView,
							key: this.props.postId,
							loop: !0,
							onBufferingChange: this.props.onBufferingChanged,
							onLoadStart: this.loadStarted,
							onLoadedData: this.onVideoPlayable,
							onLoadedMetadata: this.sendTransformedMetadata,
							onPause: this.props.onPaused,
							onPlaying: this.onPlaying,
							onTimeUpdate: this.onTimeUpdate,
							shouldLoad: this.props.shouldLoad,
							shouldPause: this.props.shouldPause,
							showCentered: this.props.showCentered,
							showFull: this.props.showFull,
							source: this.props.source,
							style: s,
							width: this.props.width
						})
					}
				}
				render() {
					return this.props.isListing ? this.renderVideoPlayer() : i.a.createElement("div", {
						className: Object(d.a)(v.a.container, this.props.className, {
							[v.a.centered]: this.props.showCentered
						})
					}, i.a.createElement("a", {
						href: this.props.originalSource,
						target: "_blank"
					}, this.renderVideoPlayer()))
				}
			}
			t.a = j(S)
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? n.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? n.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = s("./src/reddit/constants/experiments.ts"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/isRemoved.ts"),
				f = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				E = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				v = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				O = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				j = s("./src/reddit/icons/fonts/Report/index.tsx"),
				S = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				C = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				k = s("./src/reddit/models/AutomatedReporting/index.ts"),
				T = s("./src/reddit/models/Post/index.ts"),
				I = s("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				L = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/components/PostBadges/index.m.less"),
				w = s.n(P);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => o.a.createElement("span", M({
					className: w.a.removalReason
				}, e), e.children),
				R = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				B = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				D = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				F = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				H = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				A = (e, t, s) => {
					const n = `PostBadges--${e}--${t}`;
					return s ? `${n}--${s}` : n
				},
				U = Object(h.t)({
					isProfilePostListing: h.I,
					isSubreddit: h.K,
					pageLayer: e => e
				}),
				W = Object(a.c)({
					isPinned: (e, {
						post: t
					}) => Object(L.p)(e, {
						postId: t.id
					}),
					modModeEnabled: h.Q
				}),
				J = Object(i.b)(W, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = U(J(({
				className: e,
				displayText: t,
				isSubreddit: s,
				inSubredditOrProfile: a,
				isCompactPinnedPost: l,
				isPinned: h,
				isProfilePostListing: L,
				modModeEnabled: P,
				onHideTooltip: U,
				onOpenRemovalReasonModal: W,
				onShowTooltip: J,
				post: V,
				tooltipType: G
			}) => {
				const X = {
						caretOnTop: !1
					},
					K = Object(i.e)(I.a),
					q = V.isSponsored && (K === p.p.NoLockIcon || K === p.p.PromotedGrey),
					Y = V.isRemoved && !V.modRemovalReason && !V.modNote && V.belongsTo.type === b.a.SUBREDDIT,
					z = A("Approve", V.id, G),
					Z = A("Archived", V.id, G),
					Q = A("Automod", V.id, G),
					$ = A("Lock", V.id, G),
					ee = A("Mod", V.id, G),
					te = A("Remove", V.id, G),
					se = A("Report", V.id, G),
					ne = A("Spam", V.id, G),
					re = A("Sticky", V.id, G),
					oe = A("Pinned", V.id, G),
					ie = V.bannedBy && Object(k.b)(V.bannedBy);
				return o.a.createElement("div", {
					className: e
				}, a && t && V.distinguishType === d.E.MODERATOR && o.a.createElement(r.Fragment, null, o.a.createElement(g.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.modIcon)
				}), o.a.createElement(u.c, M({
					tooltipId: ee,
					text: D(t)
				}, X))), V.isArchived && o.a.createElement(r.Fragment, null, o.a.createElement(_.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.archivedIcon),
					desc: R(),
					id: Z,
					onMouseEnter: J(Z),
					onMouseLeave: U
				}), o.a.createElement(u.c, M({
					tooltipId: Z,
					text: R()
				}, X))), V.isLocked && !q && o.a.createElement(r.Fragment, null, o.a.createElement(v.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.lockIcon),
					desc: B(),
					id: $,
					onMouseEnter: J($),
					onMouseLeave: U
				}), o.a.createElement(u.c, M({
					tooltipId: $,
					text: B()
				}, X))), s && Object(T.q)(V) && !l && o.a.createElement(r.Fragment, null, o.a.createElement(C.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.stickyIcon),
					desc: F(),
					id: re,
					onMouseEnter: J(re),
					onMouseLeave: U
				}), o.a.createElement(u.c, M({
					tooltipId: re,
					text: F()
				}, X))), L && h && o.a.createElement(r.Fragment, null, o.a.createElement(C.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.stickyIcon),
					desc: H(),
					id: oe,
					onMouseEnter: J(oe),
					onMouseLeave: U
				}), o.a.createElement(u.c, M({
					tooltipId: oe,
					text: H()
				}, X))), (V.isApproved || V.approvedBy) && o.a.createElement(r.Fragment, null, o.a.createElement(y.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.approveIcon),
					desc: Object(f.a)(V),
					id: z,
					onMouseEnter: J(z),
					onMouseLeave: U
				}), o.a.createElement(u.c, M({
					tooltipId: z,
					text: Object(f.a)(V)
				}, X))), Object(x.a)(V) && !ie && o.a.createElement(r.Fragment, null, o.a.createElement(O.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.removeIcon),
					desc: Object(f.c)(V),
					id: te,
					onMouseEnter: J(te),
					onMouseLeave: U
				}), Y && o.a.createElement(m.a, {
					className: w.a.addRemovalReason,
					onClick: W,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (V.modRemovalReason || V.modNote) && o.a.createElement(N, {
					onMouseEnter: J(te),
					onMouseLeave: U
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), o.a.createElement(u.c, M({
					tooltipId: te,
					text: Object(f.c)(V)
				}, X))), V.bannedBy && V.isSpam && o.a.createElement(r.Fragment, null, o.a.createElement(S.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.spamIcon),
					desc: Object(f.e)(V),
					id: ne,
					onMouseEnter: J(ne),
					onMouseLeave: U
				}), o.a.createElement(u.c, M({
					tooltipId: ne,
					text: Object(f.e)(V)
				}, X))), ("AutoModerator" === V.approvedBy || "AutoModerator" === V.bannedBy) && o.a.createElement(r.Fragment, null, o.a.createElement(g.a, {
					name: "bot",
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.automoderator, !!V.bannedBy && w.a.isRemoved)
				}), o.a.createElement(u.c, M({
					tooltipId: Q,
					text: f.b
				}, X))), ie && o.a.createElement("div", {
					className: w.a.removalReason
				}, n.fbt._("• Removed by the Automated {filterName}", [n.fbt._param("filterName", ie)], {
					hk: "3C408F"
				})), Object(E.a)(V) && !P && o.a.createElement(r.Fragment, null, o.a.createElement(j.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.reportIcon),
					desc: Object(f.d)(V.numReports),
					id: se,
					onMouseEnter: J(se),
					onMouseLeave: U
				}), o.a.createElement(u.c, M({
					tooltipId: se,
					text: Object(f.d)(V.numReports)
				}, X))))
			}))
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/hooks/useClickSourceData.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/components/PostMeta/index.m.less"),
				y = s.n(g);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: g,
					isOverlay: _,
					isTopicPage: v,
					post: O,
					shouldShowSubscribeButton: j,
					subredditOrProfile: S,
					tooltipType: C
				} = e, k = !!v, T = Object(f.a)();
				return r.a.createElement("div", {
					className: y.a.metaContainer
				}, !n && !O.isSponsored && S && r.a.createElement(i.a, {
					postId: O.id,
					subredditName: S.name
				}, r.a.createElement(u.a, {
					className: y.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: S.url,
						state: T
					}
				}, S.displayText)), S && S.isQuarantined && r.a.createElement(l.a, null), !n && !O.isSponsored && S && j && !g && r.a.createElement(m.a, {
					className: y.a.SubscribeButton,
					getEventFactory: e => Object(x.h)(O.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: S.name,
						type: Object(E.h)(S) ? p.a.PROFILE : p.a.SUBREDDIT
					},
					postId: O.id,
					size: b.c.XXS,
					small: !0
				}), !n && !O.isSponsored && r.a.createElement(h.b, null), !n && !O.isSponsored && r.a.createElement(a.h, {
					type: O.belongsTo.type,
					id: O.belongsTo.id
				}), r.a.createElement(d.d, {
					className: y.a.postTopMeta,
					flairStyleTemplate: t,
					post: O,
					tooltipType: C
				}), r.a.createElement(c.a, {
					displayText: S ? S.displayText : null,
					inSubredditOrProfile: !!n,
					post: O,
					tooltipType: C
				}), !k && r.a.createElement(o.a, {
					hideCta: s,
					thing: O,
					tooltipType: _ ? d.c.Lightbox : void 0
				}))
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const b = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				h = c.a.wrapped(e => {
					const t = Object(l.a)();
					return o.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: s => {
							((e, t, s, n, r) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const s = e.target.getAttribute("href");
									r && n(s, r), t(s)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
							})(s, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(n.g)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(n.g)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(a.a)(h))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, s) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, s) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				x = m.a.span("InnerSpan", u.a),
				f = m.a.span("TooltipTarget", u.a),
				E = m.a.span("SpoilerWrapper", u.a),
				g = m.a.wrapped(({
					className: e,
					isOpen: t,
					...s
				}) => o.a.createElement(E, p({}, s, {
					className: Object(i.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				y = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class _ extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return o.a.createElement(g, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(x, null, o.a.createElement(f, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(y, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = _
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, s) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "x", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "v", (function() {
				return f
			})), s.d(t, "i", (function() {
				return E
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "u", (function() {
				return _
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "m", (function() {
				return j
			})), s.d(t, "n", (function() {
				return S
			})), s.d(t, "t", (function() {
				return C
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "o", (function() {
				return T
			})), s.d(t, "q", (function() {
				return I
			})), s.d(t, "s", (function() {
				return L
			})), s.d(t, "r", (function() {
				return P
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "w", (function() {
				return M
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/reddit/components/RichTextJson/elements.m.less"),
				a = s.n(i),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				u = c.a.hr("Hr", a.a),
				m = c.a.code("M", a.a),
				p = c.a.pre("Pre", a.a),
				b = c.a.blockquote("Blockquote", a.a),
				h = c.a.p("P", a.a),
				x = c.a.li("Li", a.a),
				f = c.a.ul("Ul", a.a),
				E = c.a.ol("Ol", a.a),
				g = c.a.strong("B", a.a),
				y = c.a.em("I", a.a),
				_ = c.a.span("U", a.a),
				v = e => r.a.createElement("del", e),
				O = c.a.sub("Sub", a.a),
				j = c.a.sup("Sup", a.a),
				S = c.a.table("Table", a.a),
				C = c.a.tr("Tr", a.a),
				k = c.a.td("Tdl", a.a),
				T = c.a.td("Tdc", a.a),
				I = c.a.td("Tdr", a.a),
				L = c.a.th("Thl", a.a),
				P = c.a.th("Thc", a.a),
				w = (c.a.th("Thr", a.a), c.a.wrapped(e => r.a.createElement(o.b, e), "A", a.a)),
				M = c.a.wrapped(d.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/lodash/findLastIndex.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/sentry/index.ts"),
				l = s("./src/reddit/components/Media/blurredContent.ts"),
				u = s("./src/reddit/constants/elementClassNames.ts"),
				m = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/components/RichTextJson/media.tsx"),
				x = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = s("./src/reddit/components/RichTextJson/index.m.less"),
				E = s.n(f);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = s("./src/lib/lessComponent.tsx").a.div("Container", E.a),
				_ = Object(c.a)(({
					flairStyleTemplate: e,
					theme: t,
					...s
				}) => i.a.createElement(y, g({}, s, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...s
						}))
					}
				}))),
				v = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				O = e => r()(e, v),
				j = e => e.findIndex(v),
				S = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: r,
						isNSFW: o,
						isSpoiler: c,
						onClickRevealBlurred: d,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: f,
						useExplicitTextColor: g,
						shouldBlur: v
					} = e, S = n.document, C = [], k = e.mediaMetadata || null, T = j(S), I = O(S);
					if (v && !r) return i.a.createElement(y, {
						className: Object(a.a)(u.j, s)
					}, i.a.createElement("div", {
						className: E.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: E.a.unblurButton,
						onClick: d
					}, Object(l.a)(!!o, !!c))));
					if (-1 !== T)
						for (let i = T; i <= I; i++) {
							const e = S[i];
							switch (e.e) {
								case b.k:
									C.push(x.c(e, f, i));
									break;
								case b.l:
									C.push(x.d(i));
									break;
								case b.b:
									C.push(x.a(e, k, f, i));
									break;
								case b.c:
									C.push(x.b(e, i));
									break;
								case b.p:
									C.push(x.f(e, k, f, i));
									break;
								case b.z:
									C.push(x.h(e, k, f, i));
									break;
								case b.u:
									C.push(x.g(e, k, f, i));
									break;
								case b.h:
									C.push(Object(h.a)(e, i));
									break;
								case b.m:
								case b.a:
								case b.D:
									C.push(...Object(h.b)(e, i, k, p, m, t))
							}
						}
					return g ? i.a.createElement(y, {
						className: Object(a.a)(u.j, s)
					}, C) : i.a.createElement(_, {
						className: Object(a.a)(u.j, s),
						flairStyleTemplate: e.flairStyleTemplate
					}, C)
				};
			class C extends i.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					d.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), d.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return S(t)
					} catch (s) {
						return this.hasError = !0, this.logError(s), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, s) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "b", (function() {
				return T
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				c = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = s("./src/reddit/helpers/richTextJson/index.ts"),
				b = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/components/RichTextJson/elements.tsx"),
				x = s("./src/reddit/components/RichTextJson/media.m.less"),
				f = s.n(x),
				E = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = /\/(\w+)\/asset\/(\w+)\//,
				_ = E.a.wrapped(h.a, "A", f.a),
				v = E.a.wrapped(l.a, "ImageBox", f.a),
				O = E.a.wrapped(e => o.a.createElement("p", e), "Caption", f.a),
				j = E.a.div("Placeholder", f.a),
				S = E.a.wrapped(({
					className: e,
					e: t,
					...s
				}) => {
					const r = t === b.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(j, g({
						className: e,
						style: {
							"--placeholder-content-text": `'${r}'`
						}
					}, s))
				}, "Placeholder", f.a),
				C = ({
					c: e,
					x: t,
					y: s
				}, n) => o.a.createElement("div", {
					className: f.a.MediaWrapper
				}, o.a.createElement(u.a, {
					height: s,
					isListing: !1,
					key: n,
					showCentered: !0,
					showFull: !0,
					width: t
				}, o.a.createElement(d.a, {
					isListing: !1,
					source: e,
					height: s,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				k = (e, t, s) => {
					const n = e.c;
					let r = "";
					return s && (s.e === b.s ? r = s.s.u : s.e === b.r ? r = s.s.gif : s.e === b.t && (r = (e => {
						const t = y.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), r ? o.a.createElement(_, {
						href: r,
						key: t,
						title: n
					}, n || r) : null
				},
				T = (e, t, s, n, r, a) => {
					const d = b.E(s, e.id);
					if (n) return [k(e, t, d)];
					const l = [];
					return d ? d.e === b.s ? l.push((({
						id: e,
						s: t
					}, s, n, r) => o.a.createElement("div", {
						className: Object(i.a)(f.a.MediaWrapper, {
							[f.a.mHasCaption]: n
						})
					}, o.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: s,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, o.a.createElement(v, {
						altText: r,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(d, t, !!e.c, a)) : d.e === b.r ? l.push((({
						id: e,
						ext: t,
						s
					}, n, r) => {
						if (Object(p.f)(e)) {
							const a = t || Object(p.e)(e);
							return o.a.createElement("div", {
								className: Object(i.a)(f.a.MediaWrapper, {
									[f.a.mHasCaption]: r
								})
							}, o.a.createElement(_, {
								href: a,
								key: n,
								target: "_blank"
							}, s.mp4 ? o.a.createElement("video", {
								className: f.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: s.mp4
							})) : {
								originalSource: a
							}))
						}
						return o.a.createElement("div", {
							className: Object(i.a)(f.a.MediaWrapper, {
								[f.a.mHasCaption]: r
							})
						}, o.a.createElement(u.a, {
							height: s.y,
							isListing: !1,
							key: n,
							showCentered: !0,
							showFull: !0,
							width: s.x
						}, o.a.createElement(m.a, {
							height: s.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: s.mp4,
							width: s.x,
							postId: e,
							source: s.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: s,
						y: n,
						isGif: r
					}, a, d, l) => o.a.createElement("div", {
						className: Object(i.a)(f.a.MediaWrapper, {
							[f.a.mHasCaption]: d
						})
					}, o.a.createElement(u.a, {
						height: n,
						isListing: !1,
						isVideo: !0,
						key: a,
						showCentered: !0,
						showFull: !0,
						width: s
					}, o.a.createElement(c.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: r,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: r
					}))))(d, t, !!e.c, r)) : l.push(((e, t) => o.a.createElement(S, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(O, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return I
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "f", (function() {
				return M
			})), s.d(t, "h", (function() {
				return R
			})), s.d(t, "g", (function() {
				return B
			})), s.d(t, "i", (function() {
				return D
			})), s.d(t, "e", (function() {
				return F
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				r = s("./node_modules/lodash/reduce.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./node_modules/uuid/v4.js"),
				l = s.n(d),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/models/Product/index.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/higherOrderComponents/makeAsync.tsx");
			var x = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				E = s.n(f);
			const g = 1e3,
				y = 1e3;
			var _;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(_ || (_ = {}));
			class v extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = _.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = _.Inside, setTimeout(() => {
							this.mouseLocation === _.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, g)
					}, this.onMouseOut = () => {
						this.mouseLocation = _.Outside, setTimeout(() => {
							this.mouseLocation !== _.Inside && this.setState({
								tooltipOpen: !1
							})
						}, y)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = b.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.subreddit(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, n, r;
					t.e === p.s ? (s = t.s.x, n = t.s.y, r = t.s.u) : t.e === p.r && (s = t.s.x, n = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return r ? a.a.createElement("div", {
						className: E.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: r,
						width: s,
						height: n,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(x, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var O = Object(u.c)(v),
				j = s("./src/reddit/components/RichTextJson/media.tsx"),
				S = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				C = s("./src/reddit/components/SubredditMention/index.tsx"),
				k = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				T = s("./src/reddit/helpers/richTextJson/index.ts");
			const I = (e, t, s) => {
					const n = e.c || [],
						r = e.l,
						o = [],
						i = n.length;
					for (let a = 0; a < i; a++) {
						const e = n[a];
						o.push(e.e === p.w ? e.t : F(e, t, a))
					}
					const d = c.x[r - 1];
					return a.a.createElement(d, {
						key: s
					}, o)
				},
				L = e => a.a.createElement(c.e, {
					key: e
				}),
				P = (e, t, s, n) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						i = [];
					for (let a = 0; a < o; a++) i.push(N(r[a], t, s, a));
					return a.a.createElement(c.c, {
						key: n
					}, i)
				},
				w = (e, t) => {
					const s = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				M = (e, t, {
					renderingObjectInfo: s
				}, n) => {
					const r = e.c,
						o = [],
						i = r.length;
					for (let l = 0; l < i; l++) {
						const e = r[l].c;
						e && e.length && o.push(a.a.createElement(c.g, {
							key: l
						}, e.map((e, n) => N(e, t, {
							renderingObjectInfo: s
						}, n))))
					}
					const d = e.o ? c.i : c.v;
					return a.a.createElement(d, {
						key: n
					}, o)
				},
				N = (e, t, s, n) => {
					switch (e.e) {
						case p.b:
							return P(e, t, s, n);
						case p.c:
							return w(e, n);
						case p.k:
							return I(e, s, n);
						case p.l:
							return L(n);
						case p.p:
							return M(e, t, s, n);
						case p.u:
							return B(e, t, s, n);
						case p.z:
							return R(e, t, s, n)
					}
				},
				R = (e, t, s, n) => {
					const r = e.c,
						o = e.h,
						i = r.length,
						d = o.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = o[c],
							{
								H: n,
								D: r
							} = W(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(n, {
							key: c
						}, D(i, t, s))), m[c] = r
					}
					for (let p = 0; p < i; p++) {
						const e = r[p],
							n = e.length,
							o = [];
						for (let r = 0; r < n; r++) {
							const n = m[r],
								{
									c: i = []
								} = e[r];
							o.push(a.a.createElement(n, {
								key: r
							}, D(i, t, s)))
						}
						u.push(a.a.createElement(c.t, {
							key: p
						}, o))
					}
					return a.a.createElement(c.n, {
						key: n
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, l)), a.a.createElement("tbody", null, u))
				},
				B = (e, t, s, n) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(n);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(T.f)(r.id) ? a.a.createElement(c.j, {
						key: n
					}, D(e.c, t, s)) : Object(j.b)(r, n, t)
				},
				D = (e, t, s) => {
					const n = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === p.A) n.push(H(r, o));
						else if (r.e === p.x) n.push(a.a.createElement(S.a, {
							key: o
						}, D(r.c, t, s)));
						else if (r.e === p.n) n.push(a.a.createElement("br", {
							key: o
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && n.push(a.a.createElement(O, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else n.push(F(r, s, o))
					}
					return n
				},
				F = (e, t, s) => {
					switch (e.e) {
						case p.o:
							const n = H({
								t: e.t,
								f: e.f
							}, 0);
							return Object(k.b)(e.u) ? a.a.createElement(c.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n) : a.a.createElement(c.a, {
								href: e.u,
								key: s,
								title: e.a
							}, n);
						case p.y:
							return a.a.createElement(C.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(c.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: s,
						t: r
					} = e, o = [];
					if (!s) return U(0, r, t);
					const i = Object(n.a)(r);
					let a = 0,
						c = 0;
					const d = s.length;
					for (; a < d; a++) {
						const [e, t, n] = s[a], d = t + n, l = i[t], u = i[d] - l;
						l > c && o.push(U(0, r.substr(c, l - c), `between${a}`)), o.push(U(e, r.substr(l, u), a)), c = l + u
					}
					return c < r.length && o.push(U(0, r.substr(c), `remaining${a}`)), o
				},
				A = {
					[p.j.monospace]: c.h,
					[p.j.bold]: c.b,
					[p.j.italic]: c.f,
					[p.j.underline]: c.u,
					[p.j.strikethrough]: c.d,
					[p.j.subscript]: c.l,
					[p.j.superscript]: c.m
				},
				U = (e, t, s) => {
					let n = t;
					return n = o()(A, (t, n, r) => e & parseInt(r, 10) ? a.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				W = e => {
					switch (e) {
						case p.f:
							return {
								H: c.r, D: c.q
							};
						case p.d:
							return {
								H: c.r, D: c.o
							};
						case p.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
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
				return h
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/getShortenedLink.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(d),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/telemetry/models/Outbound.ts");
			const p = u.a.wrapped(c.a, "OutboundLinkIcon", l.a),
				b = u.a.div("SourceLinkWrapper", l.a);

			function h(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, c = n ? m.SourceElement.PostLink : m.SourceElement.ListingPostLink, {
					source: d,
					isSponsored: u
				} = s;
				return d ? r.a.createElement(b, {
					className: Object(o.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, r.a.createElement(a.a, {
					href: d.url,
					isSponsored: u,
					postId: s.id,
					source: d,
					sourceElement: c
				}, Object(i.a)(s), r.a.createElement(p, {
					isFilled: !0
				}))) : null
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, s) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = s.n(c);
			const l = o.a.wrapped(i.b, "SubredditIcon", d.a),
				u = o.a.wrapped(e => r.a.createElement(a.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = s.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => r.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, r.a.createElement(l.a, {
						href: `/r/${e}/`
					}, r.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, r.a.createElement(l.b, null)), `r/${e}`))
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = s("./src/reddit/selectors/subredditMention.ts");
			class E extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(x.a)({
							...e,
							subredditName: s
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const g = Object(b.c)(E),
				y = Object(i.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				_ = Object(o.b)(y),
				v = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: s,
					userVariant: n,
					rtJsonElementProps: o
				}) => {
					if (!t || !e) return r.a.createElement(g, {
						subredditName: s,
						rtJsonElementProps: o
					});
					switch (n) {
						case h.yd.SmIcon:
							return r.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: o
							});
						case h.yd.SmIconHc:
							return r.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return r.a.createElement(g, {
								subredditName: s,
								rtJsonElementProps: o
							})
					}
				};
			t.b = _(v)
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				l = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", u.a);
			class b extends r.a.Component {
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
							onUnsubscribe: n,
							postId: o,
							sendEvent: i,
							small: l = !1,
							size: u,
							userIsSubscriber: p,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: h,
							onSubscriptionsRequested: x,
							...f
						} = this.props, E = this.state.isHovered, g = Object(d.a)({
							type: t.type,
							key: E ? "unsubscribe" : "subscribed"
						});
						return r.a.createElement(a.q, m({
							className: e,
							priority: f.shouldReverseColor ? a.b.Primary : a.b.Secondary,
							Icon: l || !l && !E ? Object(c.b)("checkmark") : void 0,
							text: !l && g,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: u || (l ? a.c.XS : a.c.S)
						}, f))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: o,
							sendEvent: i,
							small: l = !1,
							size: u,
							userIsSubscriber: p,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: h,
							onSubscriptionsRequested: x,
							...f
						} = this.props, E = Object(d.a)({
							type: t.type,
							key: "subscribe"
						});
						return r.a.createElement(a.q, m({
							className: e,
							priority: f.shouldReverseColor ? a.b.Secondary : a.b.Primary,
							Icon: Object(c.b)("add"),
							size: u || (l ? a.c.XS : a.c.S),
							text: !l && E,
							onClick: this.onClick
						}, f, {
							id: `subscribe-button-${o}`,
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
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : r.a.createElement(p, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(o.c)(b))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				o = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => o[r({
					type: e
				})][t]()
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(r.c)({
				userIsSubscriber: i.fb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(o.d([t], !0)),
				onSubscriptionsRequested: () => e(o.e()),
				onUnsubscribe: () => e(o.d([t], !1))
			}))
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/humanizeUTCDate/index.tsx");
			const o = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(r.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = n.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				c = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/helpers/parseUrl.ts"),
				o = s("./src/reddit/selectors/media.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, s) => ({
					gallery: i.gallery(e, t, s),
					post: i.post(e, t),
					...i.defaults(e)
				}),
				c = (e, t) => s => ({
					...a(s, e, t),
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.media(s, e)
				}),
				d = (e, t) => s => {
					const c = Object(r.a)(t),
						d = Object(o.b)(s, e) + 1;
					return {
						...a(s, e, d),
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.media(s, e),
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						}
					}
				},
				l = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, s) => r => ({
					...a(r, e, s),
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "e", (function() {
				return j
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				a = s("./src/reddit/helpers/isComment.ts"),
				c = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const p = e => ({
					...u.defaults(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				b = e => ({
					...u.defaults(e),
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: d.f.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				h = (e, {
					renderingObjectInfo: t,
					pageLayer: s
				}) => {
					if (t && (Object(a.b)(t) || Object(c.b)(t))) return Object(a.b)(t) ? m.SourceElement.Comment : Object(i.w)(s) ? m.SourceElement.PostDetail : Object(i.E)(s) ? m.SourceElement.ListingPostDetail : void 0
				},
				x = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(c.b)(s) && !Object(a.b)(s)) return {
						outbound: void 0
					};
					const r = Object(c.b)(s) ? "postId" : "commentId",
						o = {
							url: `/r/${n}/`,
							sourceElement: h(0, t),
							subredditName: n,
							[r]: s.id
						},
						i = Object(l.z)(e, {
							subredditName: n
						});
					return i ? {
						outbound: {
							...o,
							url: i.url,
							subredditId: i.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				f = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(c.b)(s) && !Object(a.b)(s)) return {};
					const n = Object(c.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.post(e, s.id),
						subreddit: u.subredditById(e, n),
						...x(e, t)
					}
				},
				E = e => t => ({
					...p(t),
					...f(t, e)
				}),
				g = e => t => ({
					...b(t),
					source: "global",
					action: o.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				y = (e, t) => s => ({
					...b(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				_ = (e, t) => s => ({
					...b(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				v = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				O = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				j = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("pin", e.isFilled), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: n.qd
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === n.yd.SmIcon || t === n.yd.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const s = Object(i.X)(e, {
						subredditName: t
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255.cbafd51fbb8c33d259fd.js.map