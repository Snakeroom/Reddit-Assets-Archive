// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5.c1745ce8bbd30c510448.js
// Retrieved at 2/7/2023, 5:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"], {
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
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
				o = Object(r.a)("spBurnLinks", Object(s.a)({
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
				o = n("./src/reddit/components/Media/index.m.less"),
				a = n.n(o);
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
						className: a.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: a.a.unblurButton
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
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				p = n.n(h);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(i.b)(() => Object(o.c)({
					isNightmodeOn: m.fb
				}));
			t.a = x(e => {
				const {
					isResponsive: t,
					source: n
				} = e, s = {
					responsive: "true",
					is_nightmode: e.isNightmodeOn
				}, i = new URL(n), o = t && !i.searchParams.has("s") ? Object(a.a)(Object(d.a)(n), s) : Object(d.a)(n), m = {
					overflow: "hidden"
				};
				return m.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (m.margin = "0 auto"), e.isListing || (m.maxHeight = `${u.d}px`), void 0 !== e.maxHeight && (m.maxHeight = e.maxHeight || void 0), e.isTweet || (m.height = "100%"), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, p.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: o,
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
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = n("./src/reddit/components/Media/BlurredContent.tsx"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/adEvents.ts"),
				x = n("./src/reddit/constants/elementClassNames.ts"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				E = n("./src/reddit/hooks/useClickSourceData.ts"),
				j = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				_ = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/selectors/telemetry.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/constants/tracking.ts"),
				k = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				w = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				S = n.n(w);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => e > 2 * _.d,
				L = e => i.a.createElement("img", {
					alt: e.altText || s.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(d.a)(e.className, {
						[S.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				I = e => {
					const t = Object(d.a)(S.a.image, x.g, e.className, {
							[S.a.mShowCentered]: e.showCentered,
							[S.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${_.j}px`), e.isListing || e.isTall && M(e.height) || (n.maxHeight = `${e.maxHeight||_.d}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
					const o = Object(r.useRef)(null),
						[a, c] = Object(r.useState)(!1),
						l = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!a && t && c(!0)
							})
						}, [a]),
						u = Object(r.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(j.a)(o, l, u.current);
					const {
						width: m,
						height: h
					} = e;
					let p = 240;
					if (m / h > 1)
						if (m < 240) p = h;
						else {
							(p = h * (240 / m)) < 20 && (p = 20)
						}
					else p = Math.min(p, h);
					const b = Object(r.useRef)({
						height: p
					});
					return e.renderSmallMedia ? i.a.createElement("div", {
						ref: o,
						style: b.current
					}, a && i.a.createElement(L, T({}, e, {
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
					return (!e.showFull && Object(_.M)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${_.j}px`, e.shouldBlur && (t.maxWidth = Object(_.M)(e.height, e.width) ? `${_.A}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(d.a)(S.a.container, e.className, {
							[S.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				R = Object(o.b)(() => Object(c.a)(O.F, y.lb, (e, t) => {
					let {
						isSponsored: n,
						postId: s
					} = t;
					return n && s ? Object(O.b)(e, s) : null
				}, v.d, O.G, (e, t, n, s, r) => ({
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
					"data-adclicklocation": k.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, b.a.Click), Object(g.a)(e.post, e.pageType))
					}
				}, B(e)) : e.isListing && e.postPermalink ? i.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, B(e)) : B(e)
			});
			const P = (e, t) => i.a.createElement(I, {
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
					const r = Object(_.M)(n.height, n.width),
						o = M(n.height) && r;
					return i.a.createElement(N, T({}, n, {
						className: `${r?`${C.a} `:""}${n.className||""}`
					}), n.isListing ? i.a.createElement("div", {
						className: n.contentImageClassName
					}, P(r, n)) : i.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: S.a.imageLink
					}, P(r, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && i.a.createElement(h.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > _.j && Object(_.M)(n.height, n.width) && i.a.createElement("div", {
						className: S.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && i.a.createElement(p.a, {
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
				o = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
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
						src: Object(o.a)(e.blurSrc)
					}) : null,
					c = Object(a.C)(e.height, e.width, e.forceAspectRatio),
					l = e.provider === a.v.Spotify ? c + 3 : c;
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
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				h = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const x = 100,
				f = x / 2 / 1e3;
			var g = n("./src/lib/forceHttps/index.ts"),
				E = n("./src/lib/hooks/usePrevious.ts");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function _(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: s,
					onBufferingChange: r,
					shouldLoad: a,
					shouldPause: c,
					showCentered: d,
					showFull: l,
					source: u,
					onClick: m,
					...h
				} = e;
				const p = Object(i.useRef)(),
					b = Object(i.useRef)(),
					_ = Object(E.a)(c);

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
					if (O(!c && (t || s)), b.current && r) return p.current = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							i = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", i), e.addEventListener("playing", i);
						let o = !1,
							a = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, s) return s = !1, void(a = c);
							if (e.paused || e.seeking || !n) return void(a = c);
							const r = o;
							4 === e.readyState ? o = !1 : !o && c >= a && c < a + f ? o = !0 : o && c >= a && c > a + f && (o = !1), a = c, r !== o && t(o)
						}, x);
						return () => {
							clearInterval(d), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", r)
						}
					}(b.current, r), () => {
						p.current && p.current()
					}
				}, []), Object(i.useEffect)(() => {
					_ !== c && O(!c && (t || s))
				}, [_, c, t, s]), o.a.createElement("video", j({}, h, {
					ref: e => b.current = e,
					muted: !0,
					onClick: m
				}), o.a.createElement("source", {
					src: Object(g.a)(u || "")
				}))
			}
			var O = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				v = n.n(O);
			const y = Object(c.c)({
				autoplayPref: p.d,
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
				} = Object(a.e)(t => y(t, e)), {
					postId: p,
					shouldLoad: b,
					source: x,
					height: f,
					isNotCardView: g,
					showFull: E,
					shouldPause: j,
					width: O,
					isListing: C,
					className: k,
					showCentered: w,
					originalSource: S,
					isPromoted: T,
					renderSmallMedia: M,
					onClick: L
				} = e, I = t && !(T && Object(d.hasAcceptableAds)()), N = Object(a.d)();

				function R(e) {
					N(e ? Object(u.s)(p) : Object(u.Q)(p))
				}

				function P() {
					return N(Object(u.L)({
						postId: p
					}))
				}
				const B = r()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && N(Object(u.D)(p))
				}, 200);

				function H(e) {
					e.persist(), B(e)
				}

				function D(e) {
					var t;
					(i || U(e), c) || (t = e.timeStamp, N(Object(u.M)(p, t)))
				}

				function F(e) {
					N(Object(u.r)(p, e.timeStamp))
				}

				function U(e) {
					! function(e) {
						N(Object(u.P)({
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

				function A(e) {
					s || D(e), i || U(e), N(Object(u.O)(p))
				}

				function J() {
					const e = {};
					return w && (e.margin = "0 auto"), C || (e.maxHeight = `${h.d}px`), o.a.createElement(_, {
						autoplay: I,
						className: Object(l.a)(m.a, v.a.styledVideo, {
							[v.a.renderSmallMedia]: M
						}),
						height: M ? void 0 : f,
						isListing: C,
						isNotCardView: g,
						key: p,
						loop: !0,
						onBufferingChange: R,
						onClick: L,
						onLoadStart: F,
						onLoadedData: D,
						onLoadedMetadata: U,
						onPause: P,
						onPlaying: A,
						onTimeUpdate: H,
						shouldLoad: b,
						shouldPause: j,
						showCentered: w,
						showFull: E,
						source: x,
						style: M ? void 0 : e,
						width: M ? void 0 : O
					})
				}
				return C ? J() : o.a.createElement("div", {
					className: Object(l.a)(v.a.container, k, {
						[v.a.centered]: w
					})
				}, o.a.createElement("a", {
					href: S,
					target: "_blank",
					rel: "noopener noreferrer"
				}, J()))
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
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				h = n.n(m);
			const p = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				b = c.a.wrapped(e => {
					const t = Object(l.a)();
					return i.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, s, r) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									r && s(n, r), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(s.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(s.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", h.a);
			t.a = p(Object(a.a)(b))
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ["left", "top"],
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
					return i.a.createElement(g, h({}, s, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				j = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class _ extends i.a.Component {
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
					}), i.a.createElement(j, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: p,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = _
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
				return h
			})), n.d(t, "c", (function() {
				return p
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
				return j
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "p", (function() {
				return w
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "q", (function() {
				return T
			})), n.d(t, "s", (function() {
				return M
			})), n.d(t, "r", (function() {
				return L
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "w", (function() {
				return N
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				o = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(o),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				u = c.a.hr("Hr", a.a),
				m = c.a.code("M", a.a),
				h = c.a.pre("Pre", a.a),
				p = c.a.blockquote("Blockquote", a.a),
				b = c.a.p("P", a.a),
				x = c.a.li("Li", a.a),
				f = c.a.ul("Ul", a.a),
				g = c.a.ol("Ol", a.a),
				E = c.a.strong("B", a.a),
				j = c.a.em("I", a.a),
				_ = c.a.span("U", a.a),
				O = e => r.a.createElement("del", e),
				v = c.a.sub("Sub", a.a),
				y = c.a.sup("Sup", a.a),
				C = c.a.table("Table", a.a),
				k = c.a.tr("Tr", a.a),
				w = c.a.td("Tdl", a.a),
				S = c.a.td("Tdc", a.a),
				T = c.a.td("Tdr", a.a),
				M = c.a.th("Thl", a.a),
				L = c.a.th("Thc", a.a),
				I = (c.a.th("Thr", a.a), c.a.wrapped(e => r.a.createElement(i.b, e), "A", a.a)),
				N = c.a.wrapped(d.a, "A", a.a)
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
				return _
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/findLastIndex.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/components/RichTextJson/media.tsx"),
				b = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.m.less"),
				f = n.n(x);
			const g = n("./src/lib/lessComponent.tsx").a.div("Container", f.a),
				E = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...s
					} = e;
					return a.a.createElement(g, s)
				}),
				j = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.v || !!e.c && !e.c.every(e => e.e === h.B && !e.t),
				_ = e => i()(e, j),
				O = e => null == e ? void 0 : e.findIndex(j),
				v = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: i,
						isNsfwBlockingModalEligible: o,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: x,
						renderMediaAsLinks: j,
						rtJsonElementProps: v,
						useExplicitTextColor: y,
						shouldBlur: C,
						onClickRevealSpoilerText: k,
						mediaProps: w
					} = e, S = s.document, T = [], M = e.mediaMetadata || null, L = O(S), I = _(S);
					if (C && !r && !o) return a.a.createElement(g, {
						className: Object(c.a)(m.j, n)
					}, a.a.createElement("div", {
						className: f.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: f.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!i, !!d))));
					if (-1 !== L)
						for (let a = L; a <= I; a++) {
							const e = S[a];
							switch (e.e) {
								case h.k:
									T.push(b.c(e, v, a));
									break;
								case h.l:
									T.push(b.d(a));
									break;
								case h.b:
									T.push(b.a(e, M, v, a));
									break;
								case h.c:
									T.push(b.b(e, a));
									break;
								case h.p:
									T.push(b.f(e, M, v, a, k));
									break;
								case h.A:
									T.push(b.h(e, M, v, a, k));
									break;
								case h.v:
									T.push(b.g(e, M, v, a, k, w));
									break;
								case h.h:
									T.push(Object(p.a)(e, a));
									break;
								case h.m:
								case h.a:
								case h.E:
									T.push(...Object(p.b)({
										node: e,
										key: a,
										rtJsonElementProps: v,
										mediaMetadata: M,
										renderMediaAsLinks: j,
										postId: x,
										altText: t,
										mediaProps: w
									}))
							}
						}
					return y ? a.a.createElement(g, {
						className: Object(c.a)(m.j, n)
					}, T) : a.a.createElement(E, {
						className: Object(c.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, T)
				};
			class y extends a.a.Component {
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
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return v(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
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
				return D
			})), n.d(t, "b", (function() {
				return U
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/models/Media/index.ts"),
				f = n("./src/reddit/models/RichTextJson/index.ts"),
				g = n("./src/reddit/components/RichTextJson/elements.tsx"),
				E = n("./src/reddit/endpoints/giphy/index.ts"),
				j = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				_ = n("./src/reddit/hooks/useMounted.ts");
			var O = e => i.a.createElement("svg", {
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
				v = n("./src/reddit/components/RichTextJson/Giphy.m.less"),
				y = n.n(v);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var k = e => {
					let {
						id: t,
						mp4Url: n,
						className: s,
						externalLink: o,
						onClick: a
					} = e;
					const c = o || Object(p.g)(t),
						d = Object(r.useRef)(null),
						[l, u] = Object(r.useState)(!1),
						[m, h] = Object(r.useState)(null),
						b = Object(_.b)(),
						x = Object(r.useCallback)((async function(e) {
							e.forEach(e => {
								const {
									isIntersecting: n
								} = e;
								!l && n && (u(!0), async function(e, t) {
									const n = Object(p.f)(e);
									t((await Object(E.a)(n)).data.user)
								}(t, e => {
									b.current && h(e)
								}))
							})
						}), [u, t, l, b]);
					Object(j.a)(d, x);
					const f = (null == m ? void 0 : m.display_name) || (null == m ? void 0 : m.username);
					return i.a.createElement("div", {
						className: s
					}, i.a.createElement(g.a, {
						href: c,
						target: "_blank",
						className: y.a.anchor
					}, n ? i.a.createElement("video", {
						className: y.a.giphy,
						loop: !0,
						autoPlay: !0,
						muted: !0,
						onClick: a,
						ref: d
					}, i.a.createElement("source", {
						src: n
					})) : c), i.a.createElement("div", {
						className: y.a.attributionRow
					}, i.a.createElement(O, {
						className: y.a.giphyLogo
					}), i.a.createElement("span", {
						className: y.a.attributionText
					}, (null == m ? void 0 : m.profile_url) && f && i.a.createElement(i.a.Fragment, null, C._("by {=[name]}", [C._param("=[name]", i.a.createElement(g.a, {
						href: m.profile_url,
						target: "_blank"
					}, C._("{name}", [C._param("name", f)], {
						hk: "1jl6v3"
					})))], {
						hk: "3hNtmj"
					})), C._("via GIPHY", null, {
						hk: "4BJhbY"
					}))))
				},
				w = n("./src/reddit/components/RichTextJson/media.m.less"),
				S = n.n(w),
				T = n("./src/lib/lessComponent.tsx"),
				M = n("./src/reddit/helpers/media/index.ts");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = /\/(\w+)\/asset\/(\w+)\//,
				N = T.a.wrapped(g.a, "A", S.a),
				R = T.a.wrapped(l.a, "ImageBox", S.a),
				P = T.a.wrapped(e => i.a.createElement("p", e), "Caption", S.a),
				B = T.a.div("Placeholder", S.a),
				H = T.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: a,
						onReload: c,
						...d
					} = e;
					const l = n === f.E ? s.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : s.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(r.useState)(!1);
					return Object(r.useEffect)(() => {
						c && setTimeout(() => {
							m(!0)
						}, 1500)
					}), i.a.createElement(B, L({
						className: Object(o.a)(t, {
							[S.a.renderSmallMedia]: a,
							[S.a.reload]: !!c
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, d), !!c && u && i.a.createElement(h.t, {
						priority: h.c.Plain,
						className: S.a.ModalTopicsErrorButton,
						Icon: Object(b.b)("refresh"),
						text: s.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: c
					}))
				}, "Placeholder", S.a),
				D = (e, t) => {
					let {
						c: n,
						x: s,
						y: r
					} = e;
					return i.a.createElement("div", {
						className: S.a.MediaWrapper
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
				F = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === f.s ? r = n.s.u : n.e === f.r ? r = n.s.gif : n.e === f.t && (r = (e => {
						const t = I.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? i.a.createElement(N, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				U = e => {
					let {
						node: t,
						key: n,
						rtJsonElementProps: s,
						mediaMetadata: r,
						renderMediaAsLinks: a,
						postId: d,
						altText: l,
						mediaProps: h
					} = e;
					const b = f.F(r, t.id);
					if (a) return [F(t, n, b)];
					const g = [];
					return !b || b.e === f.s && null === b.s.x && null === b.s.y ? g.push(((e, t, n, s) => i.a.createElement(H, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: s
					}))(t.e, n, null == h ? void 0 : h.renderSmallMedia, null == h ? void 0 : h.onReload)) : b.e === f.s ? g.push(((e, t, n, s, r) => {
						let {
							id: a,
							s: c,
							p: d
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m,
							onClick: h
						} = r || {};
						let p = c;
						return m && (p = Object(M.i)(240, 20, c, d)), i.a.createElement("div", {
							className: Object(o.a)(S.a.MediaWrapper, {
								[S.a.mHasCaption]: n,
								[S.a.hasSmallMedia]: m
							})
						}, i.a.createElement(u.a, {
							height: p.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: p.x
						}, i.a.createElement(R, {
							altText: s,
							originalSource: c.u,
							postId: a,
							source: p.u,
							maxHeight: x.w,
							height: p.y,
							width: p.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: m,
							onClick: h
						})))
					})(b, n, !!t.c, l, h)) : b.e === f.r ? g.push(((e, t, n, s, r) => {
						let {
							id: a,
							ext: c,
							s: d
						} = e;
						return Object(p.h)(a) ? i.a.createElement(k, {
							key: t,
							id: a,
							mp4Url: d.mp4,
							className: S.a.CommentGiphyWrapper,
							externalLink: c,
							onClick: null == r ? void 0 : r.onClick
						}) : i.a.createElement("div", {
							className: Object(o.a)(S.a.MediaWrapper, {
								[S.a.mHasCaption]: n,
								[S.a.hasSmallMedia]: null == r ? void 0 : r.renderSmallMedia
							})
						}, i.a.createElement(u.a, {
							height: d.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d.x
						}, i.a.createElement(m.a, {
							height: d.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: d.mp4,
							width: d.x,
							postId: a,
							source: d.mp4,
							shouldPause: !1,
							showCentered: !(null == r ? void 0 : r.renderSmallMedia),
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: null == r ? void 0 : r.renderSmallMedia,
							onClick: null == r ? void 0 : r.onClick
						})))
					})(b, n, !!t.c, 0, h)) : b.e === f.t && g.push(((e, t, n, s) => {
						let {
							hlsUrl: r,
							dashUrl: a,
							x: d,
							y: l,
							isGif: m
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(S.a.MediaWrapper, {
								[S.a.mHasCaption]: n
							})
						}, i.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d
						}, i.a.createElement(c.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: r,
							mpegDashSource: a,
							postId: s,
							isGif: m
						})))
					})(b, n, !!t.c, d)), t.c && g.push(((e, t) => i.a.createElement(P, {
						key: t
					}, e))(t.c, `caption${n}`)), g
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return L
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "h", (function() {
				return H
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "e", (function() {
				return U
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/models/Product/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/higherOrderComponents/makeAsync.tsx");
			var b = Object(p.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				f = n.n(x);
			const g = 1e3,
				E = 1e3;
			var j;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(j || (j = {}));
			class _ extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = j.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = j.Inside, setTimeout(() => {
							this.mouseLocation === j.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, g)
					}, this.onMouseOut = () => {
						this.mouseLocation = j.Outside, setTimeout(() => {
							this.mouseLocation !== j.Inside && this.setState({
								tooltipOpen: !1
							})
						}, E)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = h.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: h.lb(t)
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
					t.e === m.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === m.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const i = this.state.tooltipOpen ? Object(d.a)() : void 0;
					return r ? a.a.createElement("div", {
						className: f.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: i,
						src: r,
						width: n,
						height: s,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(b, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${i}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var O = Object(l.c)(_),
				v = n("./src/reddit/components/RichTextJson/media.tsx"),
				y = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				C = n("./src/reddit/components/SubredditMention/index.tsx"),
				k = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				w = n("./src/reddit/helpers/isComment.ts"),
				S = n("./src/reddit/helpers/isPost.ts"),
				T = n("./src/reddit/helpers/richTextJson/index.ts"),
				M = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const L = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						i = [],
						o = s.length;
					for (let a = 0; a < o; a++) {
						const e = s[a];
						i.push(e.e === m.x ? e.t : U(e, t, a))
					}
					const d = c.x[r - 1];
					return a.a.createElement(d, {
						key: n
					}, i)
				},
				I = e => a.a.createElement(c.e, {
					key: e
				}),
				N = (e, t, n, s, r) => {
					const i = e.c;
					if (!i) return;
					const o = i.length,
						d = [];
					for (let a = 0; a < o; a++) d.push(B(i[a], t, n, a, r));
					return a.a.createElement(c.c, {
						key: s
					}, d)
				},
				R = (e, t) => {
					const n = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				P = (e, t, n, s, r) => {
					const i = e.c,
						o = [],
						d = i.length;
					for (let u = 0; u < d; u++) {
						const e = i[u].c;
						e && e.length && o.push(a.a.createElement(c.g, {
							key: u
						}, e.map((e, s) => B(e, t, n, s, r))))
					}
					const l = e.o ? c.i : c.v;
					return a.a.createElement(l, {
						key: s
					}, o)
				},
				B = (e, t, n, s, r) => {
					switch (e.e) {
						case m.b:
							return N(e, t, n, s, r);
						case m.c:
							return R(e, s);
						case m.k:
							return L(e, n, s);
						case m.l:
							return I(s);
						case m.p:
							return P(e, t, n, s, r);
						case m.v:
							return D(e, t, n, s, r);
						case m.A:
							return H(e, t, n, s, r)
					}
				},
				H = (e, t, n, s, r) => {
					const i = e.c,
						o = e.h,
						d = i.length,
						l = o.length,
						u = [],
						m = [],
						h = [];
					for (let c = 0; c < l; c++) {
						const e = o[c],
							{
								H: s,
								D: i
							} = V(e.a),
							{
								c: d = []
							} = e;
						u.push(a.a.createElement(s, {
							key: c
						}, F(d, t, n, r))), h[c] = i
					}
					for (let p = 0; p < d; p++) {
						const e = i[p],
							s = e.length,
							o = [];
						for (let i = 0; i < s; i++) {
							const s = h[i],
								{
									c = []
								} = e[i];
							o.push(a.a.createElement(s, {
								key: i
							}, F(c, t, n, r)))
						}
						m.push(a.a.createElement(c.t, {
							key: p
						}, o))
					}
					return a.a.createElement(c.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, u)), a.a.createElement("tbody", null, m))
				},
				D = (e, t, n, s, r, i) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const o = e.c[0];
					return o.e !== m.m && o.e !== m.a || !Object(T.h)(o.id) ? a.a.createElement(c.j, {
						key: s
					}, F(e.c, t, n, r)) : Object(v.b)({
						node: o,
						key: s,
						rtJsonElementProps: n,
						mediaMetadata: t,
						mediaProps: i
					})
				},
				F = (e, t, n, s) => {
					const r = [],
						i = e.length;
					for (let o = 0; o < i; o++) {
						const i = e[o];
						if (i.e === m.B) r.push(A(i, o));
						else if (i.e === m.y) r.push(a.a.createElement(y.a, {
							key: o,
							onClickReveal: s
						}, F(i.c, t, n, s)));
						else if (i.e === m.n) r.push(a.a.createElement("br", {
							key: o
						}));
						else if (i.e === m.m || i.e === m.a) {
							if (i.id.startsWith("emote|")) {
								const e = m.F(t, i.id);
								e && r.push(a.a.createElement(O, {
									key: o,
									node: i,
									media: e
								}))
							}
						} else r.push(U(i, n, o))
					}
					return r
				},
				U = (e, t, n) => {
					switch (e.e) {
						case m.o:
							const s = A({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(k.b)(e.u)) return a.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let r, i;
							const o = Object(M.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(S.b)(d) && (r = d.postId), d && Object(w.b)(d) && (i = d.id, r = d.postId), a.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: o,
								postId: r,
								commentId: i
							}, s);
						case m.z:
							return a.a.createElement(C.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.C:
						case m.D:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.w:
							return a.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				A = (e, t) => {
					const {
						f: n,
						t: r
					} = e, i = [];
					if (!n) return W(0, r, t);
					const o = Object(s.a)(r);
					let a = 0,
						c = 0;
					const d = n.length;
					for (; a < d; a++) {
						const [e, t, s] = n[a], d = t + s, l = o[t], u = o[d] - l;
						l > c && i.push(W(0, r.substr(c, l - c), `between${a}`)), i.push(W(e, r.substr(l, u), a)), c = l + u
					}
					return c < r.length && i.push(W(0, r.substr(c), `remaining${a}`)), i
				},
				J = {
					[m.j.monospace]: c.h,
					[m.j.bold]: c.b,
					[m.j.italic]: c.f,
					[m.j.underline]: c.u,
					[m.j.strikethrough]: c.d,
					[m.j.subscript]: c.l,
					[m.j.superscript]: c.m
				},
				W = (e, t, n) => {
					let s = t;
					return s = i()(J, (t, s, r) => e & parseInt(r, 10) ? a.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				V = e => {
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
				o = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);
			const l = i.a.wrapped(o.b, "SubredditIcon", d.a),
				u = i.a.wrapped(e => r.a.createElement(a.b, e), "S", d.a)
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
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var h = Object(c.a)({
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
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
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
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const E = Object(p.c)(g),
				j = Object(o.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				_ = Object(i.b)(j),
				O = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: s,
						userVariant: i,
						rtJsonElementProps: o
					} = e;
					if (!n || !t) return r.a.createElement(E, {
						subredditName: s,
						rtJsonElementProps: o
					});
					switch (i) {
						case b.Jf.SmIcon:
							return r.a.createElement(h, {
								subredditName: s,
								rtJsonElementProps: o
							});
						case b.Jf.SmIconHc:
							return r.a.createElement(h, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return r.a.createElement(E, {
								subredditName: s,
								rtJsonElementProps: o
							})
					}
				};
			t.b = _(O)
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				o = n("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(r.b)(t) || Object(i.b)(t))) return Object(r.b)(t) ? o.SourceElement.Comment : Object(s.y)(n) ? o.SourceElement.PostDetail : Object(s.J)(n) ? o.SourceElement.ListingPostDetail : void 0
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
				return j
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return O
			}));
			var s, r, i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
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
					...u.o(e),
					source: r.LINK,
					action: i.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				h = e => ({
					...u.o(e),
					source: r,
					screen: u.cb(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				p = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(a.b)(n) && !Object(o.b)(n)) return {
						outbound: void 0
					};
					const r = Object(a.b)(n) ? "postId" : "commentId",
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
					if (!n || !Object(a.b)(n) && !Object(o.b)(n)) return {};
					const s = Object(a.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.K(e, n.id),
						subreddit: u.mb(e, s),
						...p(e, t)
					}
				},
				x = e => t => ({
					...m(t),
					...b(t, e)
				}),
				f = e => t => ({
					...h(t),
					source: "global",
					action: i.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.nb(t, e),
					screen: u.cb(t)
				}),
				g = (e, t) => n => ({
					...h(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: s.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.nb(n, e),
					screen: u.cb(n)
				}),
				E = (e, t) => n => ({
					...h(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.nb(n, e),
					screen: u.cb(n)
				}),
				j = e => t => ({
					...h(t),
					subreddit: u.mb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				_ = e => t => ({
					...h(t),
					subreddit: u.mb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				O = e => t => ({
					...h(t),
					subreddit: u.mb(t, e) || null,
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
				return a
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
				o = n("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.Df
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === s.Jf.SmIcon || t === s.Jf.SmIconHc
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
					const s = Object(o.bb)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5.c1745ce8bbd30c510448.js.map