// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973.3b44946b430dec18f579.js
// Retrieved at 5/10/2023, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"], {
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
				h = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				p = n.n(h);
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
					className: Object(c.a)(l.a, p.a.embedBox, e.className),
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
				h = n("./src/reddit/components/Media/BlurredContent.tsx"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/adEvents.ts"),
				x = n("./src/reddit/constants/elementClassNames.ts"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				E = n("./src/reddit/hooks/useClickSourceData.ts"),
				_ = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/selectors/posts.ts"),
				j = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/constants/tracking.ts"),
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
				R = e => {
					const t = {};
					return (!e.showFull && Object(v.M)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${v.j}px`, e.shouldBlur && (t.maxWidth = Object(v.M)(e.height, e.width) ? `${v.A}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(d.a)(w.a.container, e.className, {
							[w.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				N = Object(a.b)(() => Object(c.a)(O.E, C.lb, (e, t) => {
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
			t.a = N(e => {
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
				}, P(e)) : e.isListing && e.postPermalink ? i.a.createElement(o.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, P(e)) : P(e)
			});
			const B = (e, t) => i.a.createElement(L, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[k.a]: !e
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
				P = e => {
					let {
						onClick: t,
						...n
					} = e;
					const r = Object(v.M)(n.height, n.width),
						a = M(n.height) && r;
					return i.a.createElement(R, T({}, n, {
						className: `${r?`${k.a} `:""}${n.className||""}`
					}), n.isListing || n.isSponsored ? i.a.createElement("div", {
						className: n.contentImageClassName
					}, B(r, n)) : i.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: a ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: w.a.imageLink
					}, B(r, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && i.a.createElement(h.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > v.j && Object(v.M)(n.height, n.width) && i.a.createElement("div", {
						className: w.a.seeMore
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
				return k
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
				h = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
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
					...h
				} = e;
				const p = Object(i.useRef)(),
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
					if (O(!c && (t || s)), b.current && r) return p.current = function(e, t) {
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
						p.current && p.current()
					}
				}, []), Object(i.useEffect)(() => {
					v !== c && O(!c && (t || s))
				}, [v, c, t, s]), a.a.createElement("video", _({}, h, {
					ref: e => b.current = e,
					muted: !0,
					onClick: m
				}), a.a.createElement("source", {
					src: Object(g.a)(u || "")
				}))
			}
			var O = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				j = n.n(O);
			const C = Object(c.c)({
				autoplayPref: p.d,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function k(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: i,
					started: c
				} = Object(o.e)(t => C(t, e)), {
					postId: p,
					shouldLoad: b,
					source: x,
					height: f,
					noMaxHeight: g,
					isNotCardView: E,
					showFull: _,
					shouldPause: O,
					width: k,
					isListing: y,
					className: S,
					showCentered: w,
					originalSource: T,
					isPromoted: M,
					renderSmallMedia: I,
					onClick: L
				} = e, R = t && !(M && Object(d.hasAcceptableAds)()), N = Object(o.d)();

				function B(e) {
					N(e ? Object(u.s)(p) : Object(u.R)(p))
				}

				function P() {
					return N(Object(u.L)({
						postId: p
					}))
				}
				const H = r()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && N(Object(u.D)(p))
				}, 200);

				function D(e) {
					e.persist(), H(e)
				}

				function F(e) {
					var t;
					(i || A(e), c) || (t = e.timeStamp, N(Object(u.M)(p, t)))
				}

				function U(e) {
					N(Object(u.r)(p, e.timeStamp))
				}

				function A(e) {
					! function(e) {
						N(Object(u.Q)({
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

				function J(e) {
					s || F(e), i || A(e), N(Object(u.P)(p))
				}

				function W() {
					const e = {};
					return w && (e.margin = "0 auto"), y || g || (e.maxHeight = `${h.d}px`), a.a.createElement(v, {
						autoplay: R,
						className: Object(l.a)(m.a, j.a.styledVideo, {
							[j.a.renderSmallMedia]: I
						}),
						height: I ? void 0 : f,
						isListing: y,
						isNotCardView: E,
						key: p,
						loop: !0,
						onBufferingChange: B,
						onClick: L,
						onLoadStart: U,
						onLoadedData: F,
						onLoadedMetadata: A,
						onPause: P,
						onPlaying: J,
						onTimeUpdate: D,
						shouldLoad: b,
						shouldPause: O,
						showCentered: w,
						showFull: _,
						source: x,
						style: I ? void 0 : e,
						width: I ? void 0 : k
					})
				}
				return y ? W() : a.a.createElement("div", {
					className: Object(l.a)(j.a.container, S, {
						[j.a.centered]: w
					})
				}, a.a.createElement("a", {
					href: T,
					target: "_blank",
					rel: "noopener noreferrer",
					style: {
						height: f,
						width: k
					}
				}, W()))
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
				avatarContainer: "I5Xb2tM-BRe5nhJwCv1vE",
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
						targetPosition: p,
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
				return _
			})), n.d(t, "u", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "n", (function() {
				return k
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
				return R
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
				h = c.a.pre("Pre", o.a),
				p = c.a.blockquote("Blockquote", o.a),
				b = c.a.p("P", o.a),
				x = c.a.li("Li", o.a),
				f = c.a.ul("Ul", o.a),
				g = c.a.ol("Ol", o.a),
				E = c.a.strong("B", o.a),
				_ = c.a.em("I", o.a),
				v = c.a.span("U", o.a),
				O = e => r.a.createElement("del", e),
				j = c.a.sub("Sub", o.a),
				C = c.a.sup("Sup", o.a),
				k = c.a.table("Table", o.a),
				y = c.a.tr("Tr", o.a),
				S = c.a.td("Tdl", o.a),
				w = c.a.td("Tdc", o.a),
				T = c.a.td("Tdr", o.a),
				M = c.a.th("Thl", o.a),
				I = c.a.th("Thc", o.a),
				L = (c.a.th("Thr", o.a), c.a.wrapped(e => r.a.createElement(i.b, e), "A", o.a)),
				R = c.a.wrapped(d.a, "A", o.a)
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
				return v
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/findLastIndex.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
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
					return o.a.createElement(g, s)
				}),
				_ = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.v || !!e.c && !e.c.every(e => e.e === h.B && !e.t),
				v = e => i()(e, _),
				O = e => null == e ? void 0 : e.findIndex(_),
				j = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: i,
						isNsfwBlockingModalEligible: a,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: x,
						renderMediaAsLinks: _,
						rtJsonElementProps: j,
						useExplicitTextColor: C,
						shouldBlur: k,
						onClickRevealSpoilerText: y,
						mediaProps: S,
						expressionAssetData: w
					} = e, T = s.document, M = [], I = e.mediaMetadata || null, L = O(T), R = v(T);
					if (k && !r && !a) return o.a.createElement(g, {
						className: Object(c.a)(m.j, n)
					}, o.a.createElement("div", {
						className: f.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: f.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!i, !!d))));
					if (-1 !== L)
						for (let o = L; o <= R; o++) {
							const e = T[o];
							switch (e.e) {
								case h.k:
									M.push(b.c(e, j, o));
									break;
								case h.l:
									M.push(b.d(o));
									break;
								case h.b:
									M.push(b.a(e, I, j, o));
									break;
								case h.c:
									M.push(b.b(e, o));
									break;
								case h.p:
									M.push(b.f(e, I, j, o, y));
									break;
								case h.A:
									M.push(b.h(e, I, j, o, y));
									break;
								case h.v:
									M.push(b.g({
										p: e,
										mediaMetadata: I,
										rtJsonElementProps: j,
										key: o,
										onClickRevealSpoilerText: y,
										mediaProps: S,
										expressionAssetData: w
									}));
									break;
								case h.h:
									M.push(Object(p.a)(e, o));
									break;
								case h.m:
								case h.a:
								case h.E:
									M.push(...Object(p.b)({
										node: e,
										key: o,
										rtJsonElementProps: j,
										mediaMetadata: I,
										renderMediaAsLinks: _,
										postId: x,
										altText: t,
										mediaProps: S
									}))
							}
						}
					return C ? o.a.createElement(g, {
						className: Object(c.a)(m.j, n)
					}, M) : o.a.createElement(E, {
						className: Object(c.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, M)
				};
			class C extends o.a.Component {
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
						return j(t)
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/config.ts"),
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
				_ = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = n("./src/reddit/hooks/useMounted.ts");
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
				j = n("./src/reddit/components/RichTextJson/Giphy.m.less"),
				C = n.n(j);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var y = e => {
					let {
						id: t,
						mp4Url: n,
						className: s,
						externalLink: a,
						onClick: o
					} = e;
					const c = a || Object(p.g)(t),
						d = Object(r.useRef)(null),
						[l, u] = Object(r.useState)(!1),
						[m, h] = Object(r.useState)(null),
						b = Object(v.b)(),
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
					Object(_.a)(d, x);
					const f = (null == m ? void 0 : m.display_name) || (null == m ? void 0 : m.username);
					return i.a.createElement("div", {
						className: s
					}, i.a.createElement(g.a, {
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
					}, i.a.createElement(O, {
						className: C.a.giphyLogo
					}), i.a.createElement("span", {
						className: C.a.attributionText
					}, (null == m ? void 0 : m.profile_url) && f && i.a.createElement(i.a.Fragment, null, k._("by {=[name]}", [k._param("=[name]", i.a.createElement(g.a, {
						href: m.profile_url,
						target: "_blank"
					}, k._("{name}", [k._param("name", f)], {
						hk: "1jl6v3"
					})))], {
						hk: "3hNtmj"
					})), k._("via GIPHY", null, {
						hk: "4BJhbY"
					}))))
				},
				S = n("./src/reddit/components/RichTextJson/media.m.less"),
				w = n.n(S),
				T = n("./src/lib/lessComponent.tsx"),
				M = n("./src/reddit/helpers/media/index.ts");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const L = /\/(\w+)\/asset\/(\w+)\//,
				R = T.a.wrapped(g.a, "A", w.a),
				N = T.a.wrapped(l.a, "ImageBox", w.a),
				B = T.a.wrapped(e => i.a.createElement("p", e), "Caption", w.a),
				P = T.a.div("Placeholder", w.a),
				H = T.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: o,
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
					}), i.a.createElement(P, I({
						className: Object(a.a)(t, {
							[w.a.renderSmallMedia]: o,
							[w.a.reload]: !!c
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, d), !!c && u && i.a.createElement(h.t, {
						priority: h.c.Plain,
						className: w.a.ModalTopicsErrorButton,
						Icon: Object(b.b)("refresh"),
						text: s.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: c
					}))
				}, "Placeholder", w.a),
				D = (e, t) => {
					let {
						c: n,
						x: s,
						y: r
					} = e;
					return i.a.createElement("div", {
						className: w.a.MediaWrapper
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
						const t = L.exec(e);
						return t ? `${o.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? i.a.createElement(R, {
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
						renderMediaAsLinks: o,
						postId: d,
						altText: l,
						mediaProps: h
					} = e;
					const b = f.F(r, t.id);
					if (o) return [F(t, n, b)];
					const g = [];
					return !b || b.e === f.s && null === b.s.x && null === b.s.y ? g.push(((e, t, n, s) => i.a.createElement(H, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: s
					}))(t.e, n, null == h ? void 0 : h.renderSmallMedia, null == h ? void 0 : h.onReload)) : b.e === f.s ? g.push(((e, t, n, s, r) => {
						let {
							id: o,
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
							className: Object(a.a)(w.a.MediaWrapper, {
								[w.a.mHasCaption]: n,
								[w.a.hasSmallMedia]: m
							})
						}, i.a.createElement(u.a, {
							height: p.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: p.x
						}, i.a.createElement(N, {
							altText: s,
							originalSource: c.u,
							postId: o,
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
							id: o,
							ext: c,
							s: d
						} = e;
						return Object(p.h)(o) ? i.a.createElement(y, {
							key: t,
							id: o,
							mp4Url: d.mp4,
							className: w.a.CommentGiphyWrapper,
							externalLink: c,
							onClick: null == r ? void 0 : r.onClick
						}) : i.a.createElement("div", {
							className: Object(a.a)(w.a.MediaWrapper, {
								[w.a.mHasCaption]: n,
								[w.a.hasSmallMedia]: null == r ? void 0 : r.renderSmallMedia
							})
						}, i.a.createElement(u.a, {
							height: d.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d.x
						}, i.a.createElement(m.a, {
							height: "100%",
							noMaxHeight: !0,
							isListing: !1,
							isNotCardView: !0,
							originalSource: d.mp4,
							width: "100%",
							postId: o,
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
							dashUrl: o,
							x: d,
							y: l,
							isGif: m
						} = e;
						return i.a.createElement("div", {
							className: Object(a.a)(w.a.MediaWrapper, {
								[w.a.mHasCaption]: n
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
							mpegDashSource: o,
							postId: s,
							isGif: m
						})))
					})(b, n, !!t.c, d)), t.c && g.push(((e, t) => i.a.createElement(B, {
						key: t
					}, e))(t.c, `caption${n}`)), g
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return X
			})), n.d(t, "d", (function() {
				return K
			})), n.d(t, "a", (function() {
				return Z
			})), n.d(t, "b", (function() {
				return z
			})), n.d(t, "f", (function() {
				return q
			})), n.d(t, "h", (function() {
				return Q
			})), n.d(t, "g", (function() {
				return ee
			})), n.d(t, "i", (function() {
				return te
			})), n.d(t, "e", (function() {
				return ne
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
			var O, j, C, k, y = Object(l.c)(v),
				S = n("./src/reddit/components/RichTextJson/media.tsx"),
				w = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				T = n("./src/reddit/components/SubredditMention/index.tsx"),
				M = n("./src/reddit/constants/richTextJson.ts"),
				I = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				L = n("./src/reddit/helpers/isComment.ts"),
				R = n("./src/reddit/helpers/isPost.ts"),
				N = n("./src/reddit/helpers/richTextJson/index.ts"),
				B = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				P = n("./node_modules/fbt/lib/FbtPublic.js"),
				H = n("./node_modules/react-redux/es/index.js");
			! function(e) {
				e.Front = "FRONT", e.Back = "BACK"
			}(O || (O = {})),
			function(e) {
				e.Size1x1 = "SIZE_1_X_1", e.Size1x2 = "SIZE_1_X_2", e.Size1x3 = "SIZE_1_X_3"
			}(j || (j = {})),
			function(e) {
				e.Center = "CENTER", e.Left = "LEFT", e.Right = "RIGHT"
			}(C || (C = {})),
			function(e) {
				e.Cropped = "CROPPED", e.FullBody = "FULL_BODY", e.ZoomIn = "ZOOM_IN", e.ZoomOut = "ZOOM_OUT"
			}(k || (k = {}));
			const D = {
					[k.Cropped]: {
						height: 1.2,
						width: .76
					},
					[k.FullBody]: {
						height: .96,
						width: .608,
						top: .02
					},
					[k.ZoomOut]: {
						height: .72,
						width: .456,
						top: .22
					},
					[k.ZoomIn]: {
						height: 1.578,
						width: 1,
						top: -.154
					}
				},
				F = {
					[C.Center]: "center",
					[C.Left]: "left",
					[C.Right]: "right"
				},
				U = /_(\dx)\.png$/gi,
				A = e => {
					let {
						s: t
					} = e;
					const n = new RegExp(U).exec(t.u),
						s = (null == n ? void 0 : n[1]) || "1x";
					return `${t.u} ${s}`
				};
			var J = n("./src/lib/isDefined.ts"),
				W = n("./src/reddit/selectors/experiments/econ/index.ts"),
				G = n("./src/reddit/components/RichTextJson/CollectibleExpression/index.m.less"),
				V = n.n(G);
			var Y = e => {
				let {
					data: t
				} = e;
				var n;
				if (!Object(H.e)(W.d)) return null;
				if (!t || !t.avatar || !t.expression) return null;
				const s = (e => {
						let {
							perspective: t,
							position: n
						} = e;
						const s = t || k.Cropped,
							r = n || C.Center,
							{
								height: i,
								width: a,
								top: o = 0
							} = D[s] || D[k.Cropped];
						return {
							height: i,
							width: a,
							top: o,
							alignment: F[r] || F[C.Center]
						}
					})({
						perspective: t.perspective,
						position: t.position
					}),
					r = (e => {
						switch (e) {
							case j.Size1x2:
								return {
									width: 2, height: 1
								};
							case j.Size1x3:
								return {
									width: 3, height: 1
								};
							case j.Size1x1:
							default:
								return {
									width: 1, height: 1
								}
						}
					})(t.size),
					i = (e => {
						const t = e.filter(e => e.l === O.Front),
							n = e.filter(e => e.l === O.Back);
						return {
							[O.Front]: {
								srcSet: t.length > 0 ? t.map(A).join(", ") : null,
								fallback: t.length > 0 ? t[0].s.u : null
							},
							[O.Back]: {
								srcSet: n.length > 0 ? n.map(A).join(", ") : null,
								fallback: n.length > 0 ? n[0].s.u : null
							}
						}
					})(t.expression),
					a = (null === (n = t.expression.find(e => Object(J.a)(e.n))) || void 0 === n ? void 0 : n.n) || "";
				return o.a.createElement("div", null, o.a.createElement("div", {
					className: V.a.container,
					style: {
						"--avatar-position-alignment": s.alignment,
						"--avatar-position-top": s.top,
						"--avatar-position-width": s.width,
						"--avatar-position-height": s.height,
						"--expression-width": r.width,
						"--expression-height": r.height
					},
					role: "img",
					"aria-label": P.fbt._("{expression name} expression", [P.fbt._param("expression name", a)], {
						hk: "154xRP"
					})
				}, i[O.Back].srcSet && i[O.Back].fallback && o.a.createElement("picture", null, o.a.createElement("source", {
					srcSet: i[O.Back].srcSet
				}), o.a.createElement("img", {
					src: i[O.Back].fallback,
					className: V.a.expressionLayer
				})), o.a.createElement("div", {
					className: V.a.avatarContainer
				}, o.a.createElement("img", {
					src: t.avatar.s.u,
					className: V.a.avatar
				})), i[O.Front].srcSet && i[O.Front].fallback && o.a.createElement("picture", null, o.a.createElement("source", {
					srcSet: i[O.Front].srcSet
				}), o.a.createElement("img", {
					src: i[O.Front].fallback,
					className: V.a.expressionLayer
				}))), o.a.createElement("span", {
					className: V.a.attribution
				}, P.fbt._("{attributionLink} by Reddit", [P.fbt._param("attributionLink", o.a.createElement("a", {
					href: "https://reddithelp.com/hc/articles/14430023441172",
					target: "_blank",
					rel: "noopener noreferrer",
					className: V.a.attributionLink
				}, P.fbt._("Collectible Expressions", null, {
					hk: "3faisR"
				})))], {
					hk: "3bhRPZ"
				})))
			};
			const X = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						i = [],
						a = s.length;
					for (let o = 0; o < a; o++) {
						const e = s[o];
						i.push(e.e === m.x ? e.t : ne(e, t, o))
					}
					const d = c.x[r - 1];
					return o.a.createElement(d, {
						key: n
					}, i)
				},
				K = e => o.a.createElement(c.e, {
					key: e
				}),
				Z = (e, t, n, s, r) => {
					const i = e.c;
					if (!i) return;
					const a = i.length,
						d = [];
					for (let o = 0; o < a; o++) d.push($(i[o], t, n, o, r));
					return o.a.createElement(c.c, {
						key: s
					}, d)
				},
				z = (e, t) => {
					const n = e.c;
					return o.a.createElement(c.k, {
						key: t
					}, o.a.createElement(c.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				q = (e, t, n, s, r) => {
					const i = e.c,
						a = [],
						d = i.length;
					for (let u = 0; u < d; u++) {
						const e = i[u].c;
						e && e.length && a.push(o.a.createElement(c.g, {
							key: u
						}, e.map((e, s) => $(e, t, n, s, r))))
					}
					const l = e.o ? c.i : c.v;
					return o.a.createElement(l, {
						key: s
					}, a)
				},
				$ = (e, t, n, s, r) => {
					switch (e.e) {
						case m.b:
							return Z(e, t, n, s, r);
						case m.c:
							return z(e, s);
						case m.k:
							return X(e, n, s);
						case m.l:
							return K(s);
						case m.p:
							return q(e, t, n, s, r);
						case m.v:
							return ee({
								p: e,
								mediaMetadata: t,
								rtJsonElementProps: n,
								key: s,
								onClickRevealSpoilerText: r
							});
						case m.A:
							return Q(e, t, n, s, r)
					}
				},
				Q = (e, t, n, s, r) => {
					const i = e.c,
						a = e.h,
						d = i.length,
						l = a.length,
						u = [],
						m = [],
						h = [];
					for (let c = 0; c < l; c++) {
						const e = a[c],
							{
								H: s,
								D: i
							} = ae(e.a),
							{
								c: d = []
							} = e;
						u.push(o.a.createElement(s, {
							key: c
						}, te(d, t, n, r))), h[c] = i
					}
					for (let p = 0; p < d; p++) {
						const e = i[p],
							s = e.length,
							a = [];
						for (let i = 0; i < s; i++) {
							const s = h[i],
								{
									c = []
								} = e[i];
							a.push(o.a.createElement(s, {
								key: i
							}, te(c, t, n, r)))
						}
						m.push(o.a.createElement(c.t, {
							key: p
						}, a))
					}
					return o.a.createElement(c.n, {
						key: s
					}, o.a.createElement("thead", null, o.a.createElement(c.t, null, u)), o.a.createElement("tbody", null, m))
				},
				ee = e => {
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
					return l.e !== m.m && l.e !== m.a || !Object(N.h)(l.id) ? l.e === m.m && l.id.startsWith(M.a) ? o.a.createElement(Y, {
						data: null == d ? void 0 : d[l.id]
					}) : o.a.createElement(c.j, {
						key: r
					}, te(t.c, n, s, i)) : Object(S.b)({
						node: l,
						key: r,
						rtJsonElementProps: s,
						mediaMetadata: n,
						mediaProps: a
					})
				},
				te = (e, t, n, s) => {
					const r = [],
						i = e.length;
					for (let a = 0; a < i; a++) {
						const i = e[a];
						if (i.e === m.B) r.push(se(i, a));
						else if (i.e === m.y) r.push(o.a.createElement(w.a, {
							key: a,
							onClickReveal: s
						}, te(i.c, t, n, s)));
						else if (i.e === m.n) r.push(o.a.createElement("br", {
							key: a
						}));
						else if (i.e === m.m || i.e === m.a) {
							if (i.id.startsWith("emote|")) {
								const e = m.F(t, i.id);
								e && r.push(o.a.createElement(y, {
									key: a,
									node: i,
									media: e
								}))
							}
						} else r.push(ne(i, n, a))
					}
					return r
				},
				ne = (e, t, n) => {
					switch (e.e) {
						case m.o:
							const s = se({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(I.b)(e.u)) return o.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let r, i;
							const a = Object(B.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(R.b)(d) && (r = d.postId), d && Object(L.b)(d) && (i = d.id, r = d.postId), o.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: a,
								postId: r,
								commentId: i
							}, s);
						case m.z:
							return o.a.createElement(T.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.C:
						case m.D:
							return o.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.w:
							return o.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				se = (e, t) => {
					const {
						f: n,
						t: r
					} = e, i = [];
					if (!n) return ie(0, r, t);
					const a = Object(s.a)(r);
					let o = 0,
						c = 0;
					const d = n.length;
					for (; o < d; o++) {
						const [e, t, s] = n[o], d = t + s, l = a[t], u = a[d] - l;
						l > c && i.push(ie(0, r.substr(c, l - c), `between${o}`)), i.push(ie(e, r.substr(l, u), o)), c = l + u
					}
					return c < r.length && i.push(ie(0, r.substr(c), `remaining${o}`)), i
				},
				re = {
					[m.j.monospace]: c.h,
					[m.j.bold]: c.b,
					[m.j.italic]: c.f,
					[m.j.underline]: c.u,
					[m.j.strikethrough]: c.d,
					[m.j.subscript]: c.l,
					[m.j.superscript]: c.m
				},
				ie = (e, t, n) => {
					let s = t;
					return s = i()(re, (t, s, r) => e & parseInt(r, 10) ? o.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				ae = e => {
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
					return r.a.createElement(o.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const E = Object(p.c)(g),
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
						case b.Rf.SmIcon:
							return r.a.createElement(h, {
								subredditName: s,
								rtJsonElementProps: a
							});
						case b.Rf.SmIconHc:
							return r.a.createElement(h, {
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
				_ = e => t => ({
					...h(t),
					subreddit: u.mb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				v = e => t => ({
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
						experimentName: s.Lf
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === s.Rf.SmIcon || t === s.Rf.SmIconHc
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973.3b44946b430dec18f579.js.map