// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973.8831aa20fdb373da079b.js
// Retrieved at 8/10/2023, 6:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"], {
		"./src/lib/collectible-expressions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return h
			}));
			var s = n("./src/lib/collectible-expressions/types.ts");
			const r = {
					[s.b.Cropped]: {
						height: 1.2,
						width: .76
					},
					[s.b.FullBody]: {
						height: .96,
						width: .608,
						top: .02
					},
					[s.b.ZoomOut]: {
						height: .72,
						width: .456,
						top: .22
					},
					[s.b.ZoomIn]: {
						height: 1.578,
						width: 1,
						top: -.154
					}
				},
				i = {
					[s.b.Cropped]: .08,
					[s.b.FullBody]: .131,
					[s.b.ZoomOut]: .181
				},
				a = {
					[s.c.Center]: "center",
					[s.c.Left]: "left",
					[s.c.Right]: "right"
				},
				o = e => {
					let {
						perspective: t,
						position: n,
						size: o
					} = e, c = 0;
					const d = t || s.b.Cropped,
						l = n || s.c.Center,
						{
							height: u,
							width: m,
							top: p = 0
						} = r[d] || r[s.b.Cropped],
						h = a[l] || a[s.c.Center];
					return o === s.d.Size1x2 && (c = i[d] || 0), {
						height: u,
						width: m,
						top: p,
						alignment: h,
						spacing: c
					}
				},
				c = /_(\dx)\.png$/gi,
				d = e => {
					let {
						s: t
					} = e;
					const n = new RegExp(c).exec(t.u),
						s = (null == n ? void 0 : n[1]) || "1x";
					return `${t.u} ${s}`
				},
				l = e => {
					const t = e.filter(e => e.l === s.a.Front),
						n = e.filter(e => e.l === s.a.Back);
					return {
						[s.a.Front]: {
							srcSet: t.length > 0 ? t.map(d).join(", ") : null,
							fallback: t.length > 0 ? t[0].s.u : null
						},
						[s.a.Back]: {
							srcSet: n.length > 0 ? n.map(d).join(", ") : null,
							fallback: n.length > 0 ? n[0].s.u : null
						}
					}
				},
				u = e => {
					switch (e) {
						case s.d.Size1x2:
							return {
								width: 2, height: 1
							};
						case s.d.Size1x3:
							return {
								width: 3, height: 1
							};
						case s.d.Size1x1:
						default:
							return {
								width: 1, height: 1
							}
					}
				};
			var m = n("./src/reddit/constants/richTextJson.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts");
			const h = e => {
				const {
					document: t
				} = e;
				return !!t.find(e => {
					if (e.e === p.w) return e.c.find(e => {
						if (e.e === p.n) {
							const {
								id: t
							} = e;
							return t.startsWith(m.a)
						}
					})
				})
			}
		},
		"./src/lib/collectible-expressions/types.ts": function(e, t, n) {
			"use strict";
			var s, r, i, a;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "d", (function() {
					return r
				})), n.d(t, "c", (function() {
					return i
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.Front = "FRONT", e.Back = "BACK"
				}(s || (s = {})),
				function(e) {
					e.Size1x1 = "SIZE_1_X_1", e.Size1x2 = "SIZE_1_X_2", e.Size1x3 = "SIZE_1_X_3"
				}(r || (r = {})),
				function(e) {
					e.Center = "CENTER", e.Left = "LEFT", e.Right = "RIGHT"
				}(i || (i = {})),
				function(e) {
					e.Cropped = "CROPPED", e.FullBody = "FULL_BODY", e.ZoomIn = "ZOOM_IN", e.ZoomOut = "ZOOM_OUT"
				}(a || (a = {}))
		},
		"./src/lib/isDefined.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return !!e
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				a = Object(r.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/Media/index.m.less"),
				o = n.n(a);
			const c = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? s.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? s.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = e => {
					let {
						isNSFW: t,
						isSpoiler: n
					} = e;
					return i.a.createElement("div", {
						className: o.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: o.a.unblurButton
					}, c(t, n)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				h = n.n(p);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(i.b)(() => Object(a.c)({
					isNightmodeOn: m.fb
				}));
			t.a = x(e => {
				const {
					isResponsive: t,
					source: n
				} = e, s = {
					responsive: "true",
					is_nightmode: e.isNightmodeOn
				}, i = new URL(n), a = t && !i.searchParams.has("s") ? Object(o.a)(Object(d.a)(n), s) : Object(d.a)(n), m = {
					overflow: "hidden"
				};
				return m.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (m.margin = "0 auto"), e.isListing || (m.maxHeight = `${u.d}px`), void 0 !== e.maxHeight && (m.maxHeight = e.maxHeight || void 0), e.isTweet || (m.height = "100%"), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, h.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: a,
					style: m,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				alignLeft: "WjuR4W-BBrvdtABBeKUMx",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				renderSmallMedia: "vgwLfcw0MneE2ejmdh_l9",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return M
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				h = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/adEvents.ts"),
				x = n("./src/reddit/constants/elementClassNames.ts"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				E = n("./src/reddit/hooks/useClickSourceData.ts"),
				_ = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/selectors/posts.ts"),
				j = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/constants/tracking.ts"),
				y = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				S = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				w = n.n(S);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => e > 2 * v.d,
				I = e => i.a.createElement("img", {
					alt: e.altText || s.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(d.a)(e.className, {
						[w.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				L = e => {
					const t = Object(d.a)(w.a.image, x.g, e.className, {
							[w.a.mShowCentered]: e.showCentered,
							[w.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${v.j}px`), e.isListing || e.isTall && M(e.height) || (n.maxHeight = `${e.maxHeight||v.d}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
					const a = Object(r.useRef)(null),
						[o, c] = Object(r.useState)(!1),
						l = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!o && t && c(!0)
							})
						}, [o]),
						u = Object(r.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(_.a)(a, l, u.current);
					const {
						width: m,
						height: p
					} = e;
					let h = 240;
					if (m / p > 1)
						if (m < 240) h = p;
						else {
							(h = p * (240 / m)) < 20 && (h = 20)
						}
					else h = Math.min(h, p);
					const b = Object(r.useRef)({
						height: h
					});
					return e.renderSmallMedia ? i.a.createElement("div", {
						ref: a,
						style: b.current
					}, o && i.a.createElement(I, T({}, e, {
						className: t
					}))) : i.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				N = e => {
					const t = {};
					return (!e.showFull && Object(v.N)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${v.j}px`, e.shouldBlur && (t.maxWidth = Object(v.N)(e.height, e.width) ? `${v.A}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(d.a)(w.a.container, e.className, {
							[w.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				R = Object(a.b)(() => Object(c.a)(O.E, k.lb, (e, t) => {
					let {
						isSponsored: n,
						postId: s
					} = t;
					return n && s ? Object(O.b)(e, s) : null
				}, j.d, O.F, (e, t, n, s, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: s.pageType,
					post: r
				})));
			t.a = R(e => {
				const t = Object(E.a)();
				return e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": y.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, b.a.Click), Object(g.a)(e.post, e.pageType))
					}
				}, B(e)) : e.isListing && e.postPermalink ? i.a.createElement(o.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, B(e)) : B(e)
			});
			const P = (e, t) => i.a.createElement(L, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[C.a]: !e
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
					width: t.width,
					renderSmallMedia: t.renderSmallMedia
				}),
				B = e => {
					let {
						onClick: t,
						...n
					} = e;
					const r = Object(v.N)(n.height, n.width),
						a = M(n.height) && r;
					return i.a.createElement(N, T({}, n, {
						className: `${r?`${C.a} `:""}${n.className||""}`
					}), n.isListing || n.isSponsored ? i.a.createElement("div", {
						className: n.contentImageClassName
					}, P(r, n)) : i.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: a ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: w.a.imageLink
					}, P(r, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && i.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > v.j && Object(v.N)(n.height, n.width) && i.a.createElement("div", {
						className: w.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && i.a.createElement(h.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/forceHttps/index.ts"),
				o = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < o.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
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
					s = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					c = Object(o.C)(e.height, e.width, e.forceAspectRatio),
					l = e.provider === o.v.Spotify ? c + 3 : c;
				return r.a.createElement("div", {
					className: Object(i.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${l}%`
					}
				}), r.a.createElement("div", {
					className: Object(i.a)(d.a.wrapper, {
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
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				renderSmallMedia: "_2WxICCKdnGu7x2n4CBv6zE",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				p = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const x = 100,
				f = x / 2 / 1e3;
			var g = n("./src/lib/forceHttps/index.ts"),
				E = n("./src/lib/hooks/usePrevious.ts");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function v(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: s,
					onBufferingChange: r,
					shouldLoad: o,
					shouldPause: c,
					showCentered: d,
					showFull: l,
					source: u,
					onClick: m,
					...p
				} = e;
				const h = Object(i.useRef)(),
					b = Object(i.useRef)(),
					v = Object(E.a)(c);

				function O(e) {
					if (e) {
						const e = null === (t = null == b ? void 0 : b.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == b ? void 0 : b.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(i.useEffect)(() => {
					if (O(!c && (t || s)), b.current && r) return h.current = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							i = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", i), e.addEventListener("playing", i);
						let a = !1,
							o = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, s) return s = !1, void(o = c);
							if (e.paused || e.seeking || !n) return void(o = c);
							const r = a;
							4 === e.readyState ? a = !1 : !a && c >= o && c < o + f ? a = !0 : a && c >= o && c > o + f && (a = !1), o = c, r !== a && t(a)
						}, x);
						return () => {
							clearInterval(d), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", r)
						}
					}(b.current, r), () => {
						h.current && h.current()
					}
				}, []), Object(i.useEffect)(() => {
					v !== c && O(!c && (t || s))
				}, [v, c, t, s]), a.a.createElement("video", _({}, p, {
					ref: e => b.current = e,
					muted: !0,
					onClick: m
				}), a.a.createElement("source", {
					src: Object(g.a)(u || "")
				}))
			}
			var O = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				j = n.n(O);
			const k = Object(c.c)({
				autoplayPref: h.d,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function C(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: i,
					started: c
				} = Object(o.e)(t => k(t, e)), {
					postId: h,
					shouldLoad: b,
					source: x,
					height: f,
					noMaxHeight: g,
					isNotCardView: E,
					showFull: _,
					shouldPause: O,
					width: C,
					isGif: y,
					isListing: S,
					className: w,
					showCentered: T,
					originalSource: M,
					isPromoted: I,
					renderSmallMedia: L,
					onClick: N
				} = e, R = !(!t && !y || I && Object(d.hasAcceptableAds)()), P = Object(o.d)();

				function B(e) {
					P(e ? Object(u.s)(h) : Object(u.R)(h))
				}

				function F() {
					return P(Object(u.L)({
						postId: h
					}))
				}
				const D = r()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && P(Object(u.D)(h))
				}, 200);

				function H(e) {
					e.persist(), D(e)
				}

				function U(e) {
					var t;
					(i || J(e), c) || (t = e.timeStamp, P(Object(u.M)(h, t)))
				}

				function A(e) {
					P(Object(u.r)(h, e.timeStamp))
				}

				function J(e) {
					! function(e) {
						P(Object(u.Q)({
							metadata: e,
							postId: h
						}))
					}({
						id: h,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function W(e) {
					s || U(e), i || J(e), P(Object(u.P)(h))
				}

				function G() {
					const e = {};
					return T && (e.margin = "0 auto"), S || g || (e.maxHeight = `${p.d}px`), a.a.createElement(v, {
						autoplay: R,
						className: Object(l.a)(m.a, j.a.styledVideo, {
							[j.a.renderSmallMedia]: L
						}),
						height: L ? void 0 : f,
						isListing: S,
						isNotCardView: E,
						key: h,
						loop: !0,
						onBufferingChange: B,
						onClick: N,
						onLoadStart: A,
						onLoadedData: U,
						onLoadedMetadata: J,
						onPause: F,
						onPlaying: W,
						onTimeUpdate: H,
						shouldLoad: b,
						shouldPause: O,
						showCentered: T,
						showFull: _,
						source: x,
						style: L ? void 0 : e,
						width: L ? void 0 : C
					})
				}
				return S ? G() : a.a.createElement("div", {
					className: Object(l.a)(j.a.container, w, {
						[j.a.centered]: T
					})
				}, a.a.createElement("a", {
					href: M,
					target: "_blank",
					rel: "noopener noreferrer",
					style: {
						height: f,
						width: C
					}
				}, G()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, n) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/RichTextJson/CollectibleExpression/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1JFRpTrF6njlI0ABgMOrZ4",
				avatarWrapper: "_1ntMZ-DbKLnNosLN3nGvFi",
				avatarInnerWrapper: "_3RrrWB6_uE0Xt6ueQQQQaX",
				avatar: "_3rXmBWRJREVVaF_z2zkgJp",
				expressionLayer: "XI9fYJ1uvJoTy0Aq0S9LE",
				attribution: "G-Xm8rxA8XuTfXF3bPlcA",
				attributionLink: "_1KPfdJXffAMwJPUJ6ybNBb"
			}
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/Giphy.m.less": function(e, t, n) {
			e.exports = {
				anchor: "voEElhHVrm-yKZcIbBmik",
				giphy: "_1gg1MfJZaNkaPmqHpGQHni",
				attributionRow: "U76N5pdhVpwLUkKv0jpDZ",
				giphyLogo: "lhXj5Lw1-62CSn58uodEt",
				attributionText: "WZIEUuvYX30GAtLJofhDk"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ["left", "top"],
				b = ["left", "bottom"],
				x = m.a.span("InnerSpan", u.a),
				f = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				E = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return i.a.createElement(g, p({}, s, {
						className: Object(a.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				_ = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [o.a.Click, o.a.Keydown]);
			class v extends i.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state, {
							onClickReveal: n
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == n || n(e))
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
					return i.a.createElement(E, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(x, null, i.a.createElement(f, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(_, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: h,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = v
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "v", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "u", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "q", (function() {
				return T
			})), n.d(t, "s", (function() {
				return M
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "w", (function() {
				return N
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/reddit/components/RichTextJson/elements.m.less"),
				o = n.n(a),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", o.a), c.a.div("H2", o.a), c.a.div("H3", o.a), c.a.div("H4", o.a), c.a.div("H5", o.a), c.a.div("H6", o.a)],
				u = c.a.hr("Hr", o.a),
				m = c.a.code("M", o.a),
				p = c.a.pre("Pre", o.a),
				h = c.a.blockquote("Blockquote", o.a),
				b = c.a.p("P", o.a),
				x = c.a.li("Li", o.a),
				f = c.a.ul("Ul", o.a),
				g = c.a.ol("Ol", o.a),
				E = c.a.strong("B", o.a),
				_ = c.a.em("I", o.a),
				v = c.a.span("U", o.a),
				O = e => r.a.createElement("del", e),
				j = c.a.sub("Sub", o.a),
				k = c.a.sup("Sup", o.a),
				C = c.a.table("Table", o.a),
				y = c.a.tr("Tr", o.a),
				S = c.a.td("Tdl", o.a),
				w = c.a.td("Tdc", o.a),
				T = c.a.td("Tdr", o.a),
				M = c.a.th("Thl", o.a),
				I = c.a.th("Thc", o.a),
				L = (c.a.th("Thr", o.a), c.a.wrapped(e => r.a.createElement(i.b, e), "A", o.a)),
				N = c.a.wrapped(d.a, "A", o.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ",
				Component: "_1GPL7pYOAn5YHfoARxZ8-F",
				component: "_1GPL7pYOAn5YHfoARxZ8-F"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return k
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/findLastIndex.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/lib/sentry/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				h = n("./src/reddit/constants/elementClassNames.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				x = n("./src/reddit/components/RichTextJson/media.tsx"),
				f = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.m.less"),
				E = n.n(g),
				_ = n("./src/reddit/selectors/experiments/d2xShredditPlayer.ts");
			const v = n("./src/lib/lessComponent.tsx").a.div("Container", E.a),
				O = Object(u.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...s
					} = e;
					return o.a.createElement(v, s)
				}),
				j = e => e.e === b.l ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.w || !!e.c && !e.c.every(e => e.e === b.C && !e.t),
				k = e => i()(e, j),
				C = e => null == e ? void 0 : e.findIndex(j),
				y = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: i,
						isNsfwBlockingModalEligible: a,
						isSpoiler: c,
						onClickRevealBlurred: d,
						postId: u,
						renderMediaAsLinks: m,
						rtJsonElementProps: g,
						useExplicitTextColor: _,
						shouldBlur: j,
						onClickRevealSpoilerText: y,
						mediaProps: S,
						expressionAssetData: w,
						isShredditPlayerRemainingFeedsEnabled: T
					} = e, M = s.document, I = [], L = e.mediaMetadata || null, N = C(M), R = k(M);
					if (j && !r && !a) return o.a.createElement(v, {
						className: Object(l.a)(h.j, n)
					}, o.a.createElement("div", {
						className: E.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: E.a.unblurButton,
						onClick: d
					}, Object(p.b)(!!i, !!c))));
					if (-1 !== N)
						for (let o = N; o <= R; o++) {
							const e = M[o];
							switch (e.e) {
								case b.l:
									I.push(f.c(e, g, o));
									break;
								case b.m:
									I.push(f.d(o));
									break;
								case b.b:
									I.push(f.a(e, L, g, o));
									break;
								case b.c:
									I.push(f.b(e, o));
									break;
								case b.q:
									I.push(f.f(e, L, g, o, y));
									break;
								case b.B:
									I.push(f.h(e, L, g, o, y));
									break;
								case b.w:
									I.push(f.g({
										p: e,
										mediaMetadata: L,
										rtJsonElementProps: g,
										key: o,
										onClickRevealSpoilerText: y,
										mediaProps: S,
										expressionAssetData: w
									}));
									break;
								case b.i:
									I.push(Object(x.a)(e, o));
									break;
								case b.n:
								case b.a:
								case b.F:
									I.push(...Object(x.b)({
										node: e,
										key: o,
										rtJsonElementProps: g,
										mediaMetadata: L,
										renderMediaAsLinks: m,
										postId: u,
										altText: t,
										mediaProps: S,
										isShredditPlayerRemainingFeedsEnabled: T
									}))
							}
						}
					return _ ? o.a.createElement(v, {
						className: Object(l.a)(h.j, n)
					}, I) : o.a.createElement(O, {
						className: Object(l.a)(h.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, I)
				},
				S = Object(d.c)({
					isShredditPlayerRemainingFeedsEnabled: _.c
				}),
				w = Object(c.b)(S);
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => s.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					m.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), m.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return y(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
			t.b = w(T)
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				hasSmallMedia: "_1yyTGHoIL7vZ6fNJ2-s3dL",
				CommentGiphyWrapper: "_2R6TbsJdSgxwd1OzbbrIjl",
				commentGiphyWrapper: "_2R6TbsJdSgxwd1OzbbrIjl",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				renderSmallMedia: "_18dflNtNlz_sHfoBK19VZn",
				reload: "_2O6ZaJBTx6OGys4GI6Egy-"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return H
			})), n.d(t, "b", (function() {
				return A
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/ShredditPlayerWrapper/index.tsx"),
				p = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/richTextJson/index.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/models/RichTextJson/index.ts"),
				E = n("./src/reddit/components/RichTextJson/elements.tsx"),
				_ = n("./src/reddit/endpoints/giphy/index.ts"),
				v = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = n("./src/reddit/hooks/useMounted.ts");
			var j = e => i.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, i.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), i.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), i.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), i.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), i.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), i.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), i.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				k = n("./src/reddit/components/RichTextJson/Giphy.m.less"),
				C = n.n(k);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var S = e => {
					let {
						id: t,
						mp4Url: n,
						className: s,
						externalLink: a,
						onClick: o
					} = e;
					const c = a || Object(b.g)(t),
						d = Object(r.useRef)(null),
						[l, u] = Object(r.useState)(!1),
						[m, p] = Object(r.useState)(null),
						h = Object(O.b)(),
						x = Object(r.useCallback)((async function(e) {
							e.forEach(e => {
								const {
									isIntersecting: n
								} = e;
								!l && n && (u(!0), async function(e, t) {
									const n = Object(b.f)(e);
									t((await Object(_.a)(n)).data.user)
								}(t, e => {
									h.current && p(e)
								}))
							})
						}), [u, t, l, h]);
					Object(v.a)(d, x);
					const f = (null == m ? void 0 : m.display_name) || (null == m ? void 0 : m.username);
					return i.a.createElement("div", {
						className: s
					}, i.a.createElement(E.a, {
						href: c,
						target: "_blank",
						className: C.a.anchor
					}, n ? i.a.createElement("video", {
						className: C.a.giphy,
						loop: !0,
						autoPlay: !0,
						muted: !0,
						onClick: o,
						ref: d
					}, i.a.createElement("source", {
						src: n
					})) : c), i.a.createElement("div", {
						className: C.a.attributionRow
					}, i.a.createElement(j, {
						className: C.a.giphyLogo
					}), i.a.createElement("span", {
						className: C.a.attributionText
					}, (null == m ? void 0 : m.profile_url) && f && i.a.createElement(i.a.Fragment, null, y._("by {=[name]}", [y._param("=[name]", i.a.createElement(E.a, {
						href: m.profile_url,
						target: "_blank"
					}, y._("{name}", [y._param("name", f)], {
						hk: "1jl6v3"
					})))], {
						hk: "3hNtmj"
					})), y._("via GIPHY", null, {
						hk: "4BJhbY"
					}))))
				},
				w = n("./src/reddit/components/RichTextJson/media.m.less"),
				T = n.n(w),
				M = n("./src/lib/lessComponent.tsx"),
				I = n("./src/reddit/helpers/media/index.ts");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const N = /\/(\w+)\/asset\/(\w+)\//,
				R = M.a.wrapped(E.a, "A", T.a),
				P = M.a.wrapped(l.a, "ImageBox", T.a),
				B = M.a.wrapped(e => i.a.createElement("p", e), "Caption", T.a),
				F = M.a.div("Placeholder", T.a),
				D = M.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: o,
						onReload: c,
						...d
					} = e;
					const l = n === g.F ? s.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : s.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(r.useState)(!1);
					return Object(r.useEffect)(() => {
						c && setTimeout(() => {
							m(!0)
						}, 1500)
					}), i.a.createElement(F, L({
						className: Object(a.a)(t, {
							[T.a.renderSmallMedia]: o,
							[T.a.reload]: !!c
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, d), !!c && u && i.a.createElement(h.t, {
						priority: h.c.Plain,
						className: T.a.ModalTopicsErrorButton,
						Icon: Object(x.b)("refresh"),
						text: s.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: c
					}))
				}, "Placeholder", T.a),
				H = (e, t) => {
					let {
						c: n,
						x: s,
						y: r
					} = e;
					return i.a.createElement("div", {
						className: T.a.MediaWrapper
					}, i.a.createElement(u.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: s
					}, i.a.createElement(d.a, {
						isListing: !1,
						source: n,
						height: r,
						width: s,
						showCentered: !0,
						showFull: !0
					})))
				},
				U = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === g.t ? r = n.s.u : n.e === g.s ? r = n.s.gif : n.e === g.u && (r = (e => {
						const t = N.exec(e);
						return t ? `${o.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? i.a.createElement(R, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				A = e => {
					let {
						node: t,
						key: n,
						rtJsonElementProps: s,
						mediaMetadata: r,
						renderMediaAsLinks: o,
						postId: d,
						altText: l,
						mediaProps: h,
						isShredditPlayerRemainingFeedsEnabled: x
					} = e;
					const E = g.G(r, t.id);
					if (o) return [U(t, n, E)];
					const _ = [];
					return !E || E.e === g.t && null === E.s.x && null === E.s.y ? _.push(((e, t, n, s) => i.a.createElement(D, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: s
					}))(t.e, n, null == h ? void 0 : h.renderSmallMedia, null == h ? void 0 : h.onReload)) : E.e === g.t ? _.push(((e, t, n, s, r) => {
						let {
							id: o,
							s: c,
							p: d
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m,
							onClick: p
						} = r || {};
						let h = c;
						return m && (h = Object(I.i)(240, 20, c, d)), i.a.createElement("div", {
							className: Object(a.a)(T.a.MediaWrapper, {
								[T.a.mHasCaption]: n,
								[T.a.hasSmallMedia]: m
							})
						}, i.a.createElement(u.a, {
							height: h.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: h.x
						}, i.a.createElement(P, {
							altText: s,
							originalSource: c.u,
							postId: o,
							source: h.u,
							maxHeight: f.w,
							height: h.y,
							width: h.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: m,
							onClick: p
						})))
					})(E, n, !!t.c, l, h)) : E.e === g.s ? _.push(((e, t, n, s, r, o) => {
						let {
							id: c,
							ext: d,
							s: l
						} = e;
						return Object(b.h)(c) ? i.a.createElement(S, {
							key: t,
							id: c,
							mp4Url: l.mp4,
							className: T.a.CommentGiphyWrapper,
							externalLink: d,
							onClick: null == r ? void 0 : r.onClick
						}) : i.a.createElement("div", {
							className: Object(a.a)(T.a.MediaWrapper, {
								[T.a.mHasCaption]: n,
								[T.a.hasSmallMedia]: null == r ? void 0 : r.renderSmallMedia
							})
						}, i.a.createElement(u.a, {
							alwaysWrapMedia: o,
							height: l.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: l.x
						}, o ? i.a.createElement(m.a, {
							isGif: !0,
							isListing: !1,
							originalSource: l.mp4,
							postId: c,
							shouldUseInitializationOptimization: !0,
							source: l.mp4
						}) : i.a.createElement(p.a, {
							height: "100%",
							noMaxHeight: !0,
							isGif: !0,
							isListing: !1,
							isNotCardView: !0,
							originalSource: l.mp4,
							width: "100%",
							postId: c,
							source: l.mp4,
							shouldPause: !1,
							showCentered: !(null == r ? void 0 : r.renderSmallMedia),
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: null == r ? void 0 : r.renderSmallMedia,
							onClick: null == r ? void 0 : r.onClick
						})))
					})(E, n, !!t.c, 0, h, x)) : E.e === g.u && _.push(((e, t, n, s, r) => {
						let {
							hlsUrl: o,
							dashUrl: d,
							x: l,
							y: p,
							isGif: h
						} = e;
						return i.a.createElement("div", {
							className: Object(a.a)(T.a.MediaWrapper, {
								[T.a.mHasCaption]: n
							})
						}, i.a.createElement(u.a, {
							alwaysWrapMedia: r,
							height: p,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: l
						}, r ? i.a.createElement(m.a, {
							isGif: h,
							isListing: !1,
							postId: s,
							shouldCreateFakeThumbnail: !0,
							shouldUseInitializationOptimization: !0,
							source: o
						}) : i.a.createElement(c.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: h,
							hlsSource: o,
							mpegDashSource: d,
							postId: s,
							isGif: h
						})))
					})(E, n, !!t.c, d, x)), t.c && _.push(((e, t) => i.a.createElement(B, {
						key: t
					}, e))(t.c, `caption${n}`)), _
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return A
			})), n.d(t, "d", (function() {
				return J
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "b", (function() {
				return G
			})), n.d(t, "f", (function() {
				return V
			})), n.d(t, "h", (function() {
				return Y
			})), n.d(t, "g", (function() {
				return Z
			})), n.d(t, "i", (function() {
				return z
			})), n.d(t, "e", (function() {
				return K
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/models/Product/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var b = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				f = n.n(x);
			const g = 1e3,
				E = 1e3;
			var _;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(_ || (_ = {}));
			class v extends o.a.Component {
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
						}, E)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = p.q(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.nb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, r;
					t.e === m.t ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === m.s && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const i = this.state.tooltipOpen ? Object(d.a)() : void 0;
					return r ? o.a.createElement("div", {
						className: f.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, o.a.createElement("img", {
						id: i,
						src: r,
						width: n,
						height: s,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && o.a.createElement(b, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${i}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var O = Object(l.c)(v),
				j = n("./src/reddit/components/RichTextJson/media.tsx"),
				k = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				C = n("./src/reddit/components/SubredditMention/index.tsx"),
				y = n("./src/reddit/constants/richTextJson.ts"),
				S = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				w = n("./src/reddit/helpers/isComment.ts"),
				T = n("./src/reddit/helpers/isPost.ts"),
				M = n("./src/reddit/helpers/richTextJson/index.ts"),
				I = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				L = n("./node_modules/fbt/lib/FbtPublic.js"),
				N = n("./node_modules/react-redux/es/index.js"),
				R = n("./src/lib/collectible-expressions/index.ts"),
				P = n("./src/lib/collectible-expressions/types.ts"),
				B = n("./src/lib/isDefined.ts"),
				F = n("./src/reddit/selectors/experiments/econ/index.ts"),
				D = n("./src/reddit/components/RichTextJson/CollectibleExpression/index.m.less"),
				H = n.n(D);
			var U = e => {
				let {
					data: t
				} = e;
				var n;
				if (!Object(N.e)(F.f)) return null;
				if (!t || !t.avatar || !t.expression) return null;
				const s = Object(R.b)({
						perspective: t.perspective,
						position: t.position,
						size: t.size
					}),
					r = Object(R.c)(t.size),
					i = Object(R.d)(t.expression),
					a = (null === (n = t.expression.find(e => Object(B.a)(e.n))) || void 0 === n ? void 0 : n.n) || "";
				return o.a.createElement("div", null, o.a.createElement("div", {
					className: H.a.container,
					style: {
						"--avatar-position-alignment": s.alignment,
						"--avatar-position-top": s.top,
						"--avatar-position-width": s.width,
						"--avatar-position-height": s.height,
						"--avatar-position-spacing": s.spacing,
						"--expression-width": r.width,
						"--expression-height": r.height
					},
					role: "img",
					"aria-label": L.fbt._("{expression name} expression", [L.fbt._param("expression name", a)], {
						hk: "154xRP"
					})
				}, i[P.a.Back].srcSet && i[P.a.Back].fallback && o.a.createElement("picture", null, o.a.createElement("source", {
					srcSet: i[P.a.Back].srcSet
				}), o.a.createElement("img", {
					src: i[P.a.Back].fallback,
					className: H.a.expressionLayer
				})), o.a.createElement("div", {
					className: H.a.avatarWrapper
				}, o.a.createElement("div", {
					className: H.a.avatarInnerWrapper
				}, o.a.createElement("img", {
					src: t.avatar.s.u,
					className: H.a.avatar
				}))), i[P.a.Front].srcSet && i[P.a.Front].fallback && o.a.createElement("picture", null, o.a.createElement("source", {
					srcSet: i[P.a.Front].srcSet
				}), o.a.createElement("img", {
					src: i[P.a.Front].fallback,
					className: H.a.expressionLayer
				}))), o.a.createElement("span", {
					className: H.a.attribution
				}, L.fbt._("via {attributionLink}", [L.fbt._param("attributionLink", o.a.createElement("a", {
					href: "https://reddithelp.com/hc/articles/14430023441172",
					target: "_blank",
					rel: "noopener noreferrer",
					className: H.a.attributionLink
				}, L.fbt._("Collectible Expressions", null, {
					hk: "3faisR"
				})))], {
					hk: "1Vp7E2"
				})))
			};
			const A = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						i = [],
						a = s.length;
					for (let o = 0; o < a; o++) {
						const e = s[o];
						i.push(e.e === m.y ? e.t : K(e, t, o))
					}
					const d = c.x[r - 1];
					return o.a.createElement(d, {
						key: n
					}, i)
				},
				J = e => o.a.createElement(c.e, {
					key: e
				}),
				W = (e, t, n, s, r) => {
					const i = e.c;
					if (!i) return;
					const a = i.length,
						d = [];
					for (let o = 0; o < a; o++) d.push(X(i[o], t, n, o, r));
					return o.a.createElement(c.c, {
						key: s
					}, d)
				},
				G = (e, t) => {
					const n = e.c;
					return o.a.createElement(c.k, {
						key: t
					}, o.a.createElement(c.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				V = (e, t, n, s, r) => {
					const i = e.c,
						a = [],
						d = i.length;
					for (let u = 0; u < d; u++) {
						const e = i[u].c;
						e && e.length && a.push(o.a.createElement(c.g, {
							key: u
						}, e.map((e, s) => X(e, t, n, s, r))))
					}
					const l = e.o ? c.i : c.v;
					return o.a.createElement(l, {
						key: s
					}, a)
				},
				X = (e, t, n, s, r) => {
					switch (e.e) {
						case m.b:
							return W(e, t, n, s, r);
						case m.c:
							return G(e, s);
						case m.l:
							return A(e, n, s);
						case m.m:
							return J(s);
						case m.q:
							return V(e, t, n, s, r);
						case m.w:
							return Z({
								p: e,
								mediaMetadata: t,
								rtJsonElementProps: n,
								key: s,
								onClickRevealSpoilerText: r
							});
						case m.B:
							return Y(e, t, n, s, r)
					}
				},
				Y = (e, t, n, s, r) => {
					const i = e.c,
						a = e.h,
						d = i.length,
						l = a.length,
						u = [],
						m = [],
						p = [];
					for (let c = 0; c < l; c++) {
						const e = a[c],
							{
								H: s,
								D: i
							} = ee(e.a),
							{
								c: d = []
							} = e;
						u.push(o.a.createElement(s, {
							key: c
						}, z({
							nodes: d,
							mediaMetadata: t,
							rtJsonElementProps: n,
							onClickRevealSpoilerText: r
						}))), p[c] = i
					}
					for (let h = 0; h < d; h++) {
						const e = i[h],
							s = e.length,
							a = [];
						for (let i = 0; i < s; i++) {
							const s = p[i],
								{
									c = []
								} = e[i];
							a.push(o.a.createElement(s, {
								key: i
							}, z({
								nodes: c,
								mediaMetadata: t,
								rtJsonElementProps: n,
								onClickRevealSpoilerText: r
							})))
						}
						m.push(o.a.createElement(c.t, {
							key: h
						}, a))
					}
					return o.a.createElement(c.n, {
						key: s
					}, o.a.createElement("thead", null, o.a.createElement(c.t, null, u)), o.a.createElement("tbody", null, m))
				},
				Z = e => {
					let {
						p: t,
						mediaMetadata: n,
						rtJsonElementProps: s,
						key: r,
						onClickRevealSpoilerText: i,
						mediaProps: a,
						expressionAssetData: d
					} = e;
					if (!t.c || !t.c.length) return (e => o.a.createElement(c.j, {
						key: e
					}, o.a.createElement("br", null)))(r);
					const l = t.c[0];
					return l.e !== m.n && l.e !== m.a || !Object(M.h)(l.id) ? o.a.createElement(c.j, {
						key: r
					}, z({
						nodes: t.c,
						mediaMetadata: n,
						rtJsonElementProps: s,
						onClickRevealSpoilerText: i,
						expressionAssetData: d
					})) : Object(j.b)({
						node: l,
						key: r,
						rtJsonElementProps: s,
						mediaMetadata: n,
						mediaProps: a
					})
				},
				z = e => {
					let {
						nodes: t,
						mediaMetadata: n,
						rtJsonElementProps: s,
						onClickRevealSpoilerText: r,
						expressionAssetData: i
					} = e;
					const a = [],
						c = t.length;
					for (let d = 0; d < c; d++) {
						const e = t[d];
						if (e.e === m.C) a.push(q(e, d));
						else if (e.e === m.z) a.push(o.a.createElement(k.a, {
							key: d,
							onClickReveal: r
						}, z({
							nodes: e.c,
							mediaMetadata: n,
							rtJsonElementProps: s,
							onClickRevealSpoilerText: r,
							expressionAssetData: i
						})));
						else if (e.e === m.o) a.push(o.a.createElement("br", {
							key: d
						}));
						else if (e.e === m.n || e.e === m.a) {
							if (e.id.startsWith("emote|")) {
								const t = m.G(n, e.id);
								t && a.push(o.a.createElement(O, {
									key: d,
									node: e,
									media: t
								}))
							}
							e.e === m.n && e.id.startsWith(y.a) && a.push(o.a.createElement(U, {
								data: null == i ? void 0 : i[e.id]
							}))
						} else a.push(K(e, s, d))
					}
					return a
				},
				K = (e, t, n) => {
					switch (e.e) {
						case m.p:
							const s = q({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(S.b)(e.u)) return o.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let r, i;
							const a = Object(I.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(T.b)(d) && (r = d.postId), d && Object(w.b)(d) && (i = d.id, r = d.postId), o.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: a,
								postId: r,
								commentId: i
							}, s);
						case m.A:
							return o.a.createElement(C.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.D:
						case m.E:
							return o.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.x:
							return o.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				q = (e, t) => {
					const {
						f: n,
						t: r
					} = e, i = [];
					if (!n) return $(0, r, t);
					const a = Object(s.a)(r);
					let o = 0,
						c = 0;
					const d = n.length;
					for (; o < d; o++) {
						const [e, t, s] = n[o], d = t + s, l = a[t], u = a[d] - l;
						l > c && i.push($(0, r.substr(c, l - c), `between${o}`)), i.push($(e, r.substr(l, u), o)), c = l + u
					}
					return c < r.length && i.push($(0, r.substr(c), `remaining${o}`)), i
				},
				Q = {
					[m.k.monospace]: c.h,
					[m.k.bold]: c.b,
					[m.k.italic]: c.f,
					[m.k.underline]: c.u,
					[m.k.strikethrough]: c.d,
					[m.k.subscript]: c.l,
					[m.k.superscript]: c.m
				},
				$ = (e, t, n) => {
					let s = t;
					return s = i()(Q, (t, s, r) => e & parseInt(r, 10) ? o.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				ee = e => {
					switch (e) {
						case m.f:
							return {
								H: c.r, D: c.q
							};
						case m.d:
							return {
								H: c.r, D: c.o
							};
						case m.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);
			const l = i.a.wrapped(a.b, "SubredditIcon", d.a),
				u = i.a.wrapped(e => r.a.createElement(o.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return r.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, r.a.createElement(l.a, {
							href: `/r/${t}/`
						}, r.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, r.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				x = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = n("./src/reddit/selectors/subredditMention.ts");
			class g extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(x.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(o.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const E = Object(h.c)(g),
				_ = Object(a.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				v = Object(i.b)(_),
				O = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: s,
						userVariant: i,
						rtJsonElementProps: a
					} = e;
					if (!n || !t) return r.a.createElement(E, {
						subredditName: s,
						rtJsonElementProps: a
					});
					switch (i) {
						case b.Xf.SmIcon:
							return r.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: a
							});
						case b.Xf.SmIconHc:
							return r.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: a
							});
						default:
							return r.a.createElement(E, {
								subredditName: s,
								rtJsonElementProps: a
							})
					}
				};
			t.b = v(O)
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/telemetry/models/Outbound.ts");
			const o = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(r.b)(t) || Object(i.b)(t))) return Object(r.b)(t) ? a.SourceElement.Comment : Object(s.y)(n) ? a.SourceElement.PostDetail : Object(s.J)(n) ? a.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return O
			}));
			var s, r, i = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/helpers/isComment.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.q(e),
					source: r.LINK,
					action: i.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...u.q(e),
					source: r,
					screen: u.eb(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				h = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(o.b)(n) && !Object(a.b)(n)) return {
						outbound: void 0
					};
					const r = Object(o.b)(n) ? "postId" : "commentId",
						i = {
							url: `/r/${s}/`,
							sourceElement: Object(c.a)(t),
							subredditName: s,
							[r]: n.id
						},
						d = Object(l.C)(e, {
							subredditName: s
						});
					return d ? {
						outbound: {
							...i,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...i
						}
					}
				},
				b = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(o.b)(n) && !Object(a.b)(n)) return {};
					const s = Object(o.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.M(e, n.id),
						subreddit: u.ob(e, s),
						...h(e, t)
					}
				},
				x = e => t => ({
					...m(t),
					...b(t, e)
				}),
				f = e => t => ({
					...p(t),
					source: "global",
					action: i.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.pb(t, e),
					screen: u.eb(t)
				}),
				g = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: s.ITEM_POST,
					post: u.M(n, t),
					subreddit: u.pb(n, e),
					screen: u.eb(n)
				}),
				E = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: u.M(n, t),
					subreddit: u.pb(n, e),
					screen: u.eb(n)
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.ob(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				v = e => t => ({
					...p(t),
					subreddit: u.ob(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				O = e => t => ({
					...p(t),
					subreddit: u.ob(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/hooks/useMounted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => t(!0), []), e
			}

			function i() {
				const e = Object(s.useRef)(!0);
				return Object(s.useEffect)(() => () => {
					e.current = !1
				}, []), e
			}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			const o = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: o,
						experimentName: s.Qf
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === s.Xf.SmIcon || t === s.Xf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				u = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					const s = Object(a.bb)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973.8831aa20fdb373da079b.js.map