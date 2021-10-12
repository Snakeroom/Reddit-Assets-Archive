// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255.b8125b8c2172cb76d2b8.js
// Retrieved at 10/12/2021, 9:30:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"], {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				v = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/CrosspostBox/index.m.less"),
				g = s.n(_),
				O = s("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = O.a.div("Container", g.a),
				I = O.a.div("PostMetaWrapper", g.a),
				S = O.a.wrapped(p.c, "PostTitle", g.a),
				C = O.a.div("FlatList", g.a),
				k = O.a.div("FlatItem", g.a),
				T = O.a.span("FlatListDotSpacer", g.a),
				L = O.a.wrapped(y, "LinkContainer", g.a),
				P = O.a.div("Content", g.a),
				w = O.a.div("ThumbnailContainer", g.a),
				N = Object(c.c)({
					isCurrentUserProfilePost: E.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Kb.TOPIC),
					shouldOpenPostInNewTab: v.db
				}),
				M = Object(a.b)(N);
			t.a = Object(f.b)(M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: r,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${r.isListing}`
					},
					d = t;
				return a && !a.media ? o.a.createElement(L, {
					className: d
				}, o.a.createElement(P, null, o.a.createElement(I, null, o.a.createElement(m.a, c)), R(a), a.source && o.a.createElement(b.a, {
					post: a
				}), D(e)), H(e)) : o.a.createElement(y, {
					className: d
				}, o.a.createElement(I, null, o.a.createElement(m.a, c)), R(a), B(e), D(e))
			}));
			const R = e => o.a.createElement(S, {
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
					return o.a.createElement("div", null, o.a.createElement(u.a, j({}, n, {
						className: g.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				D = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return o.a.createElement(C, null, o.a.createElement(k, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), o.a.createElement(T, null), o.a.createElement(k, null, F(e)))
				},
				F = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: r
					} = t;
					return o.a.createElement(i.a, {
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
				return a
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
				a = Object(r.a)("spBurnLinks", Object(n.a)({
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = s.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(o.b)(() => Object(a.c)({
					isNightmodeOn: m.X
				}));
			t.a = x(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(i.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
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
				return k
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				v = s("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/constants/tracking.ts"),
				y = s("./src/reddit/components/Media/blurredContent.ts"),
				I = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				S = s.n(I);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => e > 2 * E.e,
				T = e => {
					const t = Object(d.a)(S.a.image, b.g, e.className, {
							[S.a.mShowCentered]: e.showCentered,
							[S.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${E.j}px`), e.isListing || e.isTall && k(e.height) || (s.maxHeight = `${E.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
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
					return (!e.showFull && Object(E.J)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${E.j}px`, e.shouldBlur && (t.maxWidth = Object(E.J)(e.height, e.width) ? `${E.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(S.a.container, e.className),
						style: t
					}, e.children)
				},
				P = Object(a.b)(() => Object(c.a)(_.G, O.db, (e, {
					isSponsored: t,
					postId: s
				}) => t && s ? Object(_.b)(e, s) : null, v.a, g.actionInfo, _.H, (e, t, s, n, r, o) => ({
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
				}, N(e)) : e.isListing && e.postPermalink ? o.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink)
				}, N(e)) : N(e)
			});
			const w = (e, t) => o.a.createElement(T, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[j.a]: !e
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
				N = ({
					onClick: e,
					...t
				}) => {
					const s = Object(E.J)(t.height, t.width),
						r = k(t.height) && s;
					return o.a.createElement(L, C({}, t, {
						className: `${s?`${j.a} `:""}${t.className||""}`
					}), t.isListing ? o.a.createElement("div", {
						className: t.contentImageClassName
					}, w(s, t)) : o.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c
					}, w(s, t)), t.isListing && !t.showFull && t.height > E.j && Object(E.J)(t.height, t.width) && o.a.createElement("div", {
						className: S.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && o.a.createElement(p.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && o.a.createElement("div", {
						className: S.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: S.a.unblurButton
					}, Object(y.a)(!!t.isNSFW, !!t.isSpoiler))))
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
				a = s("./src/lib/forceHttps/index.ts"),
				i = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = s.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < i.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
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
						src: Object(a.a)(e.blurSrc)
					}) : null,
					c = Object(i.B)(e.height, e.width, e.forceAspectRatio);
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
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/video.ts"),
				u = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/selectors/video.ts");
			const h = 100,
				x = h / 2 / 1e3;
			var f = s("./src/lib/forceHttps/index.ts"),
				E = s("./src/reddit/hooks/usePrevious.ts");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function _({
				autoplay: e,
				isListing: t,
				isNotCardView: s,
				onBufferingChange: n,
				shouldLoad: r,
				shouldPause: i,
				showCentered: c,
				showFull: d,
				source: l,
				...u
			}) {
				const m = Object(o.useRef)(),
					p = Object(o.useRef)(),
					b = Object(E.a)(i);

				function _(e) {
					if (e) {
						const e = null === (t = null == p ? void 0 : p.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == p ? void 0 : p.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(o.useEffect)(() => {
					if (_(!i && (e || s)), p.current && n) return m.current = function(e, t) {
						let s = !1,
							n = !1;
						const r = () => s = !0,
							o = () => n = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let a = !1,
							i = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, n) return n = !1, void(i = c);
							if (e.paused || e.seeking || !s) return void(i = c);
							const r = a;
							4 === e.readyState ? a = !1 : !a && c >= i && c < i + x ? a = !0 : a && c >= i && c > i + x && (a = !1), i = c, r !== a && t(a)
						}, h);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(p.current, n), () => {
						m.current && m.current()
					}
				}, []), Object(o.useEffect)(() => {
					b !== i && _(!i && (e || s))
				}, [b, i, e, s]), a.a.createElement("video", v({}, u, {
					ref: e => p.current = e,
					muted: !0
				}), a.a.createElement("source", {
					src: Object(f.a)(l || "")
				}))
			}
			var g = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				O = s.n(g);
			const j = Object(c.c)({
				autoplayPref: p.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function y(e) {
				const {
					autoplayPref: t,
					consumed: s,
					loadTimes: n,
					metadata: o,
					started: c
				} = Object(i.e)(t => j(t, e)), {
					postId: p,
					shouldLoad: b,
					source: h,
					height: x,
					isNotCardView: f,
					showFull: E,
					shouldPause: v,
					width: g,
					isListing: y,
					className: I,
					showCentered: S,
					originalSource: C
				} = e, k = Object(i.d)();

				function T(e) {
					k(e ? Object(l.r)(p) : Object(l.E)(p))
				}

				function L() {
					return k(Object(l.z)({
						postId: p
					}))
				}
				const P = r()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && k(Object(l.s)(p))
				}, 200);

				function w(e) {
					e.persist(), P(e)
				}

				function N(e) {
					var t;
					(o || R(e), c) || (t = e.timeStamp, k(Object(l.A)(p, t)))
				}

				function M(e) {
					k(Object(l.q)(p, e.timeStamp))
				}

				function R(e) {
					! function(e) {
						k(Object(l.D)({
							metadata: e,
							postId: p
						}))
					}({
						id: p,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function B(e) {
					n || N(e), o || R(e), k(Object(l.C)(p))
				}

				function D() {
					const e = {};
					return S && (e.margin = "0 auto"), y || (e.maxHeight = `${m.e}px`), a.a.createElement(_, {
						autoplay: t,
						className: Object(d.a)(u.a, O.a.styledVideo),
						height: x,
						isListing: y,
						isNotCardView: f,
						key: p,
						loop: !0,
						onBufferingChange: T,
						onLoadStart: M,
						onLoadedData: N,
						onLoadedMetadata: R,
						onPause: L,
						onPlaying: B,
						onTimeUpdate: w,
						shouldLoad: b,
						shouldPause: v,
						showCentered: S,
						showFull: E,
						source: h,
						style: e,
						width: g
					})
				}
				return y ? D() : a.a.createElement("div", {
					className: Object(d.a)(O.a.container, I, {
						[O.a.centered]: S
					})
				}, a.a.createElement("a", {
					href: C,
					target: "_blank",
					rel: "noopener noreferrer"
				}, D()))
			}
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
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
				v = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				g = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				O = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				j = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				y = s("./src/reddit/icons/fonts/Report/index.tsx"),
				I = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				S = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				C = s("./src/reddit/models/AutomatedReporting/index.ts"),
				k = s("./src/reddit/models/Post/index.ts"),
				T = s("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				L = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/components/PostBadges/index.m.less"),
				w = s.n(P);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => o.a.createElement("span", N({
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
				U = Object(h.u)({
					isProfilePostListing: h.K,
					isSubreddit: h.M,
					pageLayer: e => e
				}),
				J = Object(i.c)({
					isPinned: (e, {
						post: t
					}) => Object(L.q)(e, {
						postId: t.id
					}),
					modModeEnabled: h.S
				}),
				W = Object(a.b)(J, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = U(W(({
				className: e,
				displayText: t,
				isSubreddit: s,
				inSubredditOrProfile: i,
				isCompactPinnedPost: l,
				isPinned: h,
				isProfilePostListing: L,
				modModeEnabled: P,
				onHideTooltip: U,
				onOpenRemovalReasonModal: J,
				onShowTooltip: W,
				post: G,
				tooltipType: V
			}) => {
				const X = {
						caretOnTop: !1
					},
					K = Object(a.e)(T.a),
					q = G.isSponsored && (K === p.s.NoLockIcon || K === p.s.PromotedGrey),
					Y = G.isRemoved && !G.modRemovalReason && !G.modNote && G.belongsTo.type === b.a.SUBREDDIT,
					z = A("Approve", G.id, V),
					Z = A("Archived", G.id, V),
					$ = A("Automod", G.id, V),
					Q = A("Lock", G.id, V),
					ee = A("Mod", G.id, V),
					te = A("Remove", G.id, V),
					se = A("Report", G.id, V),
					ne = A("Spam", G.id, V),
					re = A("Sticky", G.id, V),
					oe = A("Pinned", G.id, V),
					ae = G.bannedBy && Object(C.b)(G.bannedBy);
				return o.a.createElement("div", {
					className: e
				}, i && t && G.distinguishType === d.F.MODERATOR && o.a.createElement(r.Fragment, null, o.a.createElement(v.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.modIcon)
				}), o.a.createElement(u.c, N({
					tooltipId: ee,
					text: D(t)
				}, X))), G.isArchived && o.a.createElement(r.Fragment, null, o.a.createElement(g.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.archivedIcon),
					desc: R(),
					id: Z,
					onMouseEnter: W(Z),
					onMouseLeave: U
				}), o.a.createElement(u.c, N({
					tooltipId: Z,
					text: R()
				}, X))), G.isLocked && !q && o.a.createElement(r.Fragment, null, o.a.createElement(O.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.lockIcon),
					desc: B(),
					id: Q,
					onMouseEnter: W(Q),
					onMouseLeave: U
				}), o.a.createElement(u.c, N({
					tooltipId: Q,
					text: B()
				}, X))), s && Object(k.q)(G) && !l && o.a.createElement(r.Fragment, null, o.a.createElement(S.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.stickyIcon),
					desc: F(),
					id: re,
					onMouseEnter: W(re),
					onMouseLeave: U
				}), o.a.createElement(u.c, N({
					tooltipId: re,
					text: F()
				}, X))), L && h && o.a.createElement(r.Fragment, null, o.a.createElement(S.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.stickyIcon),
					desc: H(),
					id: oe,
					onMouseEnter: W(oe),
					onMouseLeave: U
				}), o.a.createElement(u.c, N({
					tooltipId: oe,
					text: H()
				}, X))), (G.isApproved || G.approvedBy) && o.a.createElement(r.Fragment, null, o.a.createElement(_.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.approveIcon),
					desc: Object(f.a)(G),
					id: z,
					onMouseEnter: W(z),
					onMouseLeave: U
				}), o.a.createElement(u.c, N({
					tooltipId: z,
					text: Object(f.a)(G)
				}, X))), Object(x.a)(G) && !ae && o.a.createElement(r.Fragment, null, o.a.createElement(j.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.removeIcon),
					desc: Object(f.c)(G),
					id: te,
					onMouseEnter: W(te),
					onMouseLeave: U
				}), Y && o.a.createElement(m.a, {
					className: w.a.addRemovalReason,
					onClick: J,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (G.modRemovalReason || G.modNote) && o.a.createElement(M, {
					onMouseEnter: W(te),
					onMouseLeave: U
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), o.a.createElement(u.c, N({
					tooltipId: te,
					text: Object(f.c)(G)
				}, X))), G.bannedBy && G.isSpam && o.a.createElement(r.Fragment, null, o.a.createElement(I.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.spamIcon),
					desc: Object(f.e)(G),
					id: ne,
					onMouseEnter: W(ne),
					onMouseLeave: U
				}), o.a.createElement(u.c, N({
					tooltipId: ne,
					text: Object(f.e)(G)
				}, X))), ("AutoModerator" === G.approvedBy || "AutoModerator" === G.bannedBy) && o.a.createElement(r.Fragment, null, o.a.createElement(v.a, {
					name: "bot",
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.automoderator, !!G.bannedBy && w.a.isRemoved)
				}), o.a.createElement(u.c, N({
					tooltipId: $,
					text: f.b
				}, X))), ae && o.a.createElement("div", {
					className: w.a.removalReason
				}, n.fbt._("• Removed by the Automated {filterName}", [n.fbt._param("filterName", ae)], {
					hk: "3C408F"
				})), Object(E.a)(G) && !P && o.a.createElement(r.Fragment, null, o.a.createElement(y.a, {
					isFilled: !0,
					className: Object(c.a)(w.a.icon, w.a.reportIcon),
					desc: Object(f.d)(G.numReports),
					id: se,
					onMouseEnter: W(se),
					onMouseLeave: U
				}), o.a.createElement(u.c, N({
					tooltipId: se,
					text: Object(f.d)(G.numReports)
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
				a = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = s("./src/reddit/components/JSAPIContainers/index.tsx"),
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
				v = s("./src/reddit/components/PostMeta/index.m.less"),
				_ = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: v,
					isOverlay: g,
					isTopicPage: O,
					post: j,
					shouldShowSubscribeButton: y,
					subredditOrProfile: I,
					tooltipType: S
				} = e, C = !!O, k = Object(f.a)();
				return r.a.createElement("div", {
					className: _.a.metaContainer
				}, !n && !j.isSponsored && I && r.a.createElement(a.a, {
					postId: j.id,
					subredditName: I.name
				}, r.a.createElement(u.a, {
					className: _.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: I.url,
						state: k
					}
				}, I.displayText)), I && I.isQuarantined && r.a.createElement(l.a, null), !n && !j.isSponsored && I && y && !v && r.a.createElement(m.a, {
					className: _.a.SubscribeButton,
					getEventFactory: e => Object(x.h)(j.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: I.name,
						type: Object(E.h)(I) ? p.a.PROFILE : p.a.SUBREDDIT
					},
					postId: j.id,
					size: b.c.XXS,
					small: !0
				}), !n && !j.isSponsored && r.a.createElement(h.b, null), !n && !j.isSponsored && r.a.createElement(i.h, {
					type: j.belongsTo.type,
					id: j.belongsTo.id
				}), r.a.createElement(d.d, {
					className: _.a.postTopMeta,
					flairStyleTemplate: t,
					post: j,
					tooltipType: S
				}), r.a.createElement(c.a, {
					displayText: I ? I.displayText : null,
					inSubredditOrProfile: !!n,
					post: j,
					tooltipType: S
				}), !C && r.a.createElement(o.a, {
					hideCta: s,
					thing: j,
					tooltipType: g ? d.c.Lightbox : void 0
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				x = s.n(h);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: s,
				post: i,
				share: h
			}) => {
				const E = Object(l.b)(),
					v = Object(a.d)(),
					_ = i && i.id,
					g = i && i.voteState;
				let O = null;
				_ || (O = e ? "user_hovercard" : "profile_overview");
				const j = Object(r.useCallback)(() => E(Object(m.e)(e ? "user_hovercard" : "profile_overview", t)), [e, E, t]);
				return o.a.createElement(u.s, {
					onClick: () => {
						s ? (E(m.f), _ && g === b.a.notVoted && v(Object(c.db)(_))) : j();
						const e = s ? "postify" : "copy";
						v(Object(d.b)({
							clickSource: O,
							share: h,
							source: e
						}))
					},
					className: Object(n.a)(x.a.snoovatarButton, x.a.snoovatarExtraPadding, x.a.compactButtonLayout, {
						[x.a.avatarPostifyButton]: s
					}),
					isFullWidth: !0
				}, o.a.createElement(p.a, {
					className: Object(n.a)({
						[x.a.shirtIcon]: !s,
						[x.a.avatarPostButtonShirtIcon]: s
					})
				}), f._("Try this Look", null, {
					hk: "dOuPb"
				}), o.a.createElement("div", {
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const b = Object(a.b)(null, e => ({
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
							"--RawHTMLDisplay-tr-even": Object(n.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(n.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(i.a)(h))
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
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
				v = m.a.wrapped(({
					className: e,
					isOpen: t,
					...s
				}) => o.a.createElement(E, p({}, s, {
					className: Object(a.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				_ = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
			class g extends o.a.Component {
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
					return o.a.createElement(v, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(x, null, o.a.createElement(f, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(_, {
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
			t.a = g
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
				return v
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "u", (function() {
				return g
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "l", (function() {
				return j
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "n", (function() {
				return I
			})), s.d(t, "t", (function() {
				return S
			})), s.d(t, "p", (function() {
				return C
			})), s.d(t, "o", (function() {
				return k
			})), s.d(t, "q", (function() {
				return T
			})), s.d(t, "s", (function() {
				return L
			})), s.d(t, "r", (function() {
				return P
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "w", (function() {
				return N
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/RichTextJson/elements.m.less"),
				i = s.n(a),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", i.a), c.a.div("H2", i.a), c.a.div("H3", i.a), c.a.div("H4", i.a), c.a.div("H5", i.a), c.a.div("H6", i.a)],
				u = c.a.hr("Hr", i.a),
				m = c.a.code("M", i.a),
				p = c.a.pre("Pre", i.a),
				b = c.a.blockquote("Blockquote", i.a),
				h = c.a.p("P", i.a),
				x = c.a.li("Li", i.a),
				f = c.a.ul("Ul", i.a),
				E = c.a.ol("Ol", i.a),
				v = c.a.strong("B", i.a),
				_ = c.a.em("I", i.a),
				g = c.a.span("U", i.a),
				O = e => r.a.createElement("del", e),
				j = c.a.sub("Sub", i.a),
				y = c.a.sup("Sup", i.a),
				I = c.a.table("Table", i.a),
				S = c.a.tr("Tr", i.a),
				C = c.a.td("Tdl", i.a),
				k = c.a.td("Tdc", i.a),
				T = c.a.td("Tdr", i.a),
				L = c.a.th("Thl", i.a),
				P = c.a.th("Thc", i.a),
				w = (c.a.th("Thr", i.a), c.a.wrapped(e => r.a.createElement(o.b, e), "A", i.a)),
				N = c.a.wrapped(d.a, "A", i.a)
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
				return j
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return S
			}));
			var n = s("./node_modules/lodash/findLastIndex.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
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

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = s("./src/lib/lessComponent.tsx").a.div("Container", E.a),
				g = Object(c.a)(({
					flairStyleTemplate: e,
					theme: t,
					...s
				}) => a.a.createElement(_, v({}, s, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...s
						}))
					}
				}))),
				O = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				j = e => r()(e, O),
				y = e => e.findIndex(O),
				I = e => {
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
						useExplicitTextColor: v,
						shouldBlur: O
					} = e, I = n.document, S = [], C = e.mediaMetadata || null, k = y(I), T = j(I);
					if (O && !r) return a.a.createElement(_, {
						className: Object(i.a)(u.j, s)
					}, a.a.createElement("div", {
						className: E.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: E.a.unblurButton,
						onClick: d
					}, Object(l.a)(!!o, !!c))));
					if (-1 !== k)
						for (let a = k; a <= T; a++) {
							const e = I[a];
							switch (e.e) {
								case b.k:
									S.push(x.c(e, f, a));
									break;
								case b.l:
									S.push(x.d(a));
									break;
								case b.b:
									S.push(x.a(e, C, f, a));
									break;
								case b.c:
									S.push(x.b(e, a));
									break;
								case b.p:
									S.push(x.f(e, C, f, a));
									break;
								case b.z:
									S.push(x.h(e, C, f, a));
									break;
								case b.u:
									S.push(x.g(e, C, f, a));
									break;
								case b.h:
									S.push(Object(h.a)(e, a));
									break;
								case b.m:
								case b.a:
								case b.D:
									S.push(...Object(h.b)(e, a, C, p, m, t))
							}
						}
					return v ? a.a.createElement(_, {
						className: Object(i.a)(u.j, s)
					}, S) : a.a.createElement(g, {
						className: Object(i.a)(u.j, s),
						flairStyleTemplate: e.flairStyleTemplate
					}, S)
				};
			class S extends a.a.Component {
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
						return I(t)
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
				return S
			})), s.d(t, "b", (function() {
				return k
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/config.ts"),
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

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = /\/(\w+)\/asset\/(\w+)\//,
				g = E.a.wrapped(h.a, "A", f.a),
				O = E.a.wrapped(l.a, "ImageBox", f.a),
				j = E.a.wrapped(e => o.a.createElement("p", e), "Caption", f.a),
				y = E.a.div("Placeholder", f.a),
				I = E.a.wrapped(({
					className: e,
					e: t,
					...s
				}) => {
					const r = t === b.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(y, v({
						className: e,
						style: {
							"--placeholder-content-text": `'${r}'`
						}
					}, s))
				}, "Placeholder", f.a),
				S = ({
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
				C = (e, t, s) => {
					const n = e.c;
					let r = "";
					return s && (s.e === b.s ? r = s.s.u : s.e === b.r ? r = s.s.gif : s.e === b.t && (r = (e => {
						const t = _.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), r ? o.a.createElement(g, {
						href: r,
						key: t,
						title: n
					}, n || r) : null
				},
				k = (e, t, s, n, r, i) => {
					const d = b.E(s, e.id);
					if (n) return [C(e, t, d)];
					const l = [];
					return d ? d.e === b.s ? l.push((({
						id: e,
						s: t
					}, s, n, r) => o.a.createElement("div", {
						className: Object(a.a)(f.a.MediaWrapper, {
							[f.a.mHasCaption]: n
						})
					}, o.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: s,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, o.a.createElement(O, {
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
					}))))(d, t, !!e.c, i)) : d.e === b.r ? l.push((({
						id: e,
						ext: t,
						s
					}, n, r) => {
						if (Object(p.f)(e)) {
							const i = t || Object(p.e)(e);
							return o.a.createElement("div", {
								className: Object(a.a)(f.a.MediaWrapper, {
									[f.a.mHasCaption]: r
								})
							}, o.a.createElement(g, {
								href: i,
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
								originalSource: i
							}))
						}
						return o.a.createElement("div", {
							className: Object(a.a)(f.a.MediaWrapper, {
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
					}, i, d, l) => o.a.createElement("div", {
						className: Object(a.a)(f.a.MediaWrapper, {
							[f.a.mHasCaption]: d
						})
					}, o.a.createElement(u.a, {
						height: n,
						isListing: !1,
						isVideo: !0,
						key: i,
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
					}))))(d, t, !!e.c, r)) : l.push(((e, t) => o.a.createElement(I, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(j, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return w
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "b", (function() {
				return R
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "h", (function() {
				return F
			})), s.d(t, "g", (function() {
				return H
			})), s.d(t, "i", (function() {
				return A
			})), s.d(t, "e", (function() {
				return U
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				r = s("./node_modules/lodash/reduce.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
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
			const v = 1e3,
				_ = 1e3;
			var g;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(g || (g = {}));
			class O extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = g.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = g.Inside, setTimeout(() => {
							this.mouseLocation === g.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, v)
					}, this.onMouseOut = () => {
						this.mouseLocation = g.Outside, setTimeout(() => {
							this.mouseLocation !== g.Inside && this.setState({
								tooltipOpen: !1
							})
						}, _)
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
					return r ? i.a.createElement("div", {
						className: E.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: o,
						src: r,
						width: s,
						height: n,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && i.a.createElement(x, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var j = Object(u.c)(O),
				y = s("./src/reddit/components/RichTextJson/media.tsx"),
				I = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				S = s("./src/reddit/components/SubredditMention/index.tsx"),
				C = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				k = s("./src/reddit/helpers/isComment.ts"),
				T = s("./src/reddit/helpers/isPost.ts"),
				L = s("./src/reddit/helpers/richTextJson/index.ts"),
				P = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const w = (e, t, s) => {
					const n = e.c || [],
						r = e.l,
						o = [],
						a = n.length;
					for (let i = 0; i < a; i++) {
						const e = n[i];
						o.push(e.e === p.w ? e.t : U(e, t, i))
					}
					const d = c.x[r - 1];
					return i.a.createElement(d, {
						key: s
					}, o)
				},
				N = e => i.a.createElement(c.e, {
					key: e
				}),
				M = (e, t, s, n) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						a = [];
					for (let i = 0; i < o; i++) a.push(D(r[i], t, s, i));
					return i.a.createElement(c.c, {
						key: n
					}, a)
				},
				R = (e, t) => {
					const s = e.c;
					return i.a.createElement(c.k, {
						key: t
					}, i.a.createElement(c.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				B = (e, t, s, n) => {
					const r = e.c,
						o = [],
						a = r.length;
					for (let l = 0; l < a; l++) {
						const e = r[l].c;
						e && e.length && o.push(i.a.createElement(c.g, {
							key: l
						}, e.map((e, n) => D(e, t, s, n))))
					}
					const d = e.o ? c.i : c.v;
					return i.a.createElement(d, {
						key: n
					}, o)
				},
				D = (e, t, s, n) => {
					switch (e.e) {
						case p.b:
							return M(e, t, s, n);
						case p.c:
							return R(e, n);
						case p.k:
							return w(e, s, n);
						case p.l:
							return N(n);
						case p.p:
							return B(e, t, s, n);
						case p.u:
							return H(e, t, s, n);
						case p.z:
							return F(e, t, s, n)
					}
				},
				F = (e, t, s, n) => {
					const r = e.c,
						o = e.h,
						a = r.length,
						d = o.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = o[c],
							{
								H: n,
								D: r
							} = V(e.a),
							{
								c: a = []
							} = e;
						l.push(i.a.createElement(n, {
							key: c
						}, A(a, t, s))), m[c] = r
					}
					for (let p = 0; p < a; p++) {
						const e = r[p],
							n = e.length,
							o = [];
						for (let r = 0; r < n; r++) {
							const n = m[r],
								{
									c: a = []
								} = e[r];
							o.push(i.a.createElement(n, {
								key: r
							}, A(a, t, s)))
						}
						u.push(i.a.createElement(c.t, {
							key: p
						}, o))
					}
					return i.a.createElement(c.n, {
						key: n
					}, i.a.createElement("thead", null, i.a.createElement(c.t, null, l)), i.a.createElement("tbody", null, u))
				},
				H = (e, t, s, n) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(c.j, {
						key: e
					}, i.a.createElement("br", null)))(n);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(L.f)(r.id) ? i.a.createElement(c.j, {
						key: n
					}, A(e.c, t, s)) : Object(y.b)(r, n, t)
				},
				A = (e, t, s) => {
					const n = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === p.A) n.push(J(r, o));
						else if (r.e === p.x) n.push(i.a.createElement(I.a, {
							key: o
						}, A(r.c, t, s)));
						else if (r.e === p.n) n.push(i.a.createElement("br", {
							key: o
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && n.push(i.a.createElement(j, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else n.push(U(r, s, o))
					}
					return n
				},
				U = (e, t, s) => {
					switch (e.e) {
						case p.o:
							const n = J({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(C.b)(e.u)) return i.a.createElement(c.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let r, o;
							const a = Object(P.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(T.b)(d) && (r = d.postId), d && Object(k.b)(d) && (o = d.id, r = d.postId), i.a.createElement(c.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: a,
								postId: r,
								commentId: o
							}, n);
						case p.y:
							return i.a.createElement(S.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return i.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return i.a.createElement(c.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				J = (e, t) => {
					const {
						f: s,
						t: r
					} = e, o = [];
					if (!s) return G(0, r, t);
					const a = Object(n.a)(r);
					let i = 0,
						c = 0;
					const d = s.length;
					for (; i < d; i++) {
						const [e, t, n] = s[i], d = t + n, l = a[t], u = a[d] - l;
						l > c && o.push(G(0, r.substr(c, l - c), `between${i}`)), o.push(G(e, r.substr(l, u), i)), c = l + u
					}
					return c < r.length && o.push(G(0, r.substr(c), `remaining${i}`)), o
				},
				W = {
					[p.j.monospace]: c.h,
					[p.j.bold]: c.b,
					[p.j.italic]: c.f,
					[p.j.underline]: c.u,
					[p.j.strikethrough]: c.d,
					[p.j.subscript]: c.l,
					[p.j.superscript]: c.m
				},
				G = (e, t, s) => {
					let n = t;
					return n = o()(W, (t, n, r) => e & parseInt(r, 10) ? i.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				V = e => {
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
				return I
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/getShortenedLink.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js");
			const c = 16765092,
				d = "https://i.redd.it/snoovatar",
				l = "snoovatars",
				u = "avatars";
			var m = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				p = s("./src/reddit/components/AvatarPost/index.m.less"),
				b = s.n(p);
			var h = ({
					sourceUrl: e,
					username: t,
					post: s
				}) => {
					const [n, o] = new URL(e).pathname.split("/").slice(2), a = function(e) {
						return `${d}/${+e>=c?u:l}/shared/${e}.png`
					}(o);
					return r.a.createElement("div", {
						className: b.a.avatarPostContainer
					}, r.a.createElement("img", {
						className: b.a.avatarPostImage,
						src: a,
						alt: i.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), r.a.createElement(m.a, {
						isHovercard: !1,
						username: t,
						isAvatarPost: !0,
						post: s,
						share: {
							username: n,
							avatarId: o
						}
					}))
				},
				x = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/components/SourceLink/index.m.less"),
				_ = s.n(v),
				g = s("./src/lib/lessComponent.tsx"),
				O = s("./src/telemetry/models/Outbound.ts");
			const j = g.a.wrapped(E.a, "OutboundLinkIcon", _.a),
				y = g.a.div("SourceLinkWrapper", _.a);

			function I(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, i = n ? O.SourceElement.PostLink : O.SourceElement.ListingPostLink, {
					source: c,
					isSponsored: d
				} = s, l = Object(f.a)(s);
				return c ? l ? r.a.createElement(h, {
					sourceUrl: c.url,
					username: s.author,
					post: s
				}) : r.a.createElement(y, {
					className: Object(o.a)({
						[_.a["m-comment"]]: n
					}, t)
				}, r.a.createElement(x.a, {
					href: c.url,
					isSponsored: d,
					postId: s.id,
					source: c,
					sourceElement: i
				}, Object(a.a)(s), r.a.createElement(j, {
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
				a = s("./src/reddit/components/SubredditIcon/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = s.n(c);
			const l = o.a.wrapped(a.b, "SubredditIcon", d.a),
				u = o.a.wrapped(e => r.a.createElement(i.b, e), "S", d.a)
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
				return O
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/RichTextJson/elements.tsx"),
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
					return r.a.createElement(i.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const v = Object(b.c)(E),
				_ = Object(a.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				g = Object(o.b)(_),
				O = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: s,
					userVariant: n,
					rtJsonElementProps: o
				}) => {
					if (!t || !e) return r.a.createElement(v, {
						subredditName: s,
						rtJsonElementProps: o
					});
					switch (n) {
						case h.se.SmIcon:
							return r.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: o
							});
						case h.se.SmIconHc:
							return r.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return r.a.createElement(v, {
								subredditName: s,
								rtJsonElementProps: o
							})
					}
				};
			t.b = g(O)
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
				a = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
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
							isInJoinOptimizationsExperiment: s,
							onSubscribe: n,
							onUnsubscribe: o,
							postId: a,
							sendEvent: l,
							small: u = !1,
							size: p,
							userIsSubscriber: b,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: x,
							onSubscriptionsRequested: f,
							...E
						} = this.props, v = this.state.isHovered, _ = Object(d.a)({
							type: t.type,
							key: v ? "unsubscribe" : "subscribed"
						}), g = s || !u && v ? void 0 : Object(c.b)("checkmark"), O = s ? i.c.XSP : p || (u ? i.c.XS : i.c.S);
						return r.a.createElement(i.s, m({
							className: e,
							priority: E.shouldReverseColor ? i.b.Primary : i.b.Secondary,
							Icon: g,
							text: s ? _ : !u && _,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: O
						}, E))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							isInJoinOptimizationsExperiment: s,
							onSubscribe: n,
							onUnsubscribe: o,
							postId: a,
							sendEvent: l,
							small: u = !1,
							size: p,
							userIsSubscriber: b,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: x,
							onSubscriptionsRequested: f,
							...E
						} = this.props, v = Object(d.a)({
							type: t.type,
							key: "subscribe"
						}), _ = s ? i.c.XSP : p || (u ? i.c.XS : i.c.S);
						return r.a.createElement(i.s, m({
							className: e,
							priority: E.shouldReverseColor ? i.b.Secondary : i.b.Primary,
							Icon: s ? void 0 : Object(c.b)("add"),
							size: _,
							text: s ? v : !u && v,
							onClick: this.onClick
						}, E, {
							id: `subscribe-button-${a}`,
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
			t.a = Object(a.a)(Object(o.c)(b))
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
				return a
			})), s.d(t, "c", (function() {
				return i
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
				a = n.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				i = e => {
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
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/helpers/isComment.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				a = s("./src/telemetry/models/Outbound.ts");
			const i = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(r.b)(e) || Object(o.b)(e))) return Object(r.b)(e) ? a.SourceElement.Comment : Object(n.x)(t) ? a.SourceElement.PostDetail : Object(n.G)(t) ? a.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return O
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/helpers/isComment.ts"),
				i = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.defaults(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...u.defaults(e),
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(i.b)(s) && !Object(a.b)(s)) return {
						outbound: void 0
					};
					const r = Object(i.b)(s) ? "postId" : "commentId",
						o = {
							url: `/r/${n}/`,
							sourceElement: Object(c.a)(t),
							subredditName: n,
							[r]: s.id
						},
						d = Object(l.w)(e, {
							subredditName: n
						});
					return d ? {
						outbound: {
							...o,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(i.b)(s) && !Object(a.b)(s)) return {};
					const n = Object(i.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.post(e, s.id),
						subreddit: u.subredditById(e, n),
						...b(e, t)
					}
				},
				x = e => t => ({
					...m(t),
					...h(t, e)
				}),
				f = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				E = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				v = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				g = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				O = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react-redux/es/index.js");
			const r = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				o = ["t5_q0gj4", "t5_2rjli"],
				a = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var i = s("./src/reddit/selectors/experiments/econ/index.ts");
			const c = e => Object(n.e)(t => {
				return !!(({
					adminId: e,
					subredditId: t,
					avatarShareUrl: s
				}) => {
					const n = a.test(s.trim()),
						i = r.includes(e),
						c = o.includes(t);
					return n && i && c
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(i.e)(t)
			})
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("pin", e.isFilled), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = function({
				className: e
			}) {
				return r.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					fill: "inherit"
				}, r.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/selectors/poll/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/models/Comment/index.ts"),
				o = s("./src/reddit/models/Prediction/index.ts"),
				a = s("./src/reddit/selectors/commentSelector.ts");
			const i = (e, {
					postId: t
				}) => e.posts.metaMap[t],
				c = (e, {
					postId: t
				}) => {
					const s = i(e, {
						postId: t
					});
					if (s) return e.polls.models[s]
				},
				d = (e, {
					postId: t
				}) => {
					const s = c(e, {
						postId: t
					});
					return s && Object(o.c)(s) ? s : null
				},
				l = (e, {
					commentId: t
				}) => {
					const s = Object(a.b)(e, {
						commentId: t
					});
					return s && s.commentType === r.b.Prediction && d(e, s) || null
				},
				u = Object(n.a)(e => e.polls.models, (e, t) => t, (e, t) => Object.values(e).filter(e => Object(o.c)(e) && e.tournamentId === t)),
				m = (e, {
					postId: t
				}) => {
					const s = i(e, {
						postId: t
					});
					if (s) return e.polls.rewards[s]
				},
				p = (e, {
					postId: t
				}) => {
					const s = i(e, {
						postId: t
					});
					if (s) return e.polls.results.byVotingPower[s]
				},
				b = (e, {
					postId: t
				}) => {
					const s = i(e, {
						postId: t
					});
					if (s) return e.polls.results.byVoters[s]
				}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
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
				a = s("./src/reddit/selectors/subreddit.ts");
			const i = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: n.me
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === n.se.SmIcon || t === n.se.SmIconHc
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
					const s = Object(a.U)(e, {
						subredditName: t
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255.b8125b8c2172cb76d2b8.js.map