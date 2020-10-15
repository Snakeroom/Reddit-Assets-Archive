// https://www.redditstatic.com/desktop2x/ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478.2adc9720f19771a6aa97.js
// Retrieved at 10/15/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"], {
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
				p = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				m = s.n(h);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: p.T
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(a.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? "".concat(e.width, "px") : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = "".concat(u.e, "px")), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, m.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
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
				return w
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/PlayButton/index.tsx"),
				h = s("./src/reddit/constants/elementClassNames.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/constants/tracking.ts"),
				O = s("./src/reddit/components/Media/blurredContent.ts"),
				y = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				E = s.n(y);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const w = e => e > 2 * b.e,
				C = e => {
					const t = Object(d.a)(E.a.image, h.g, e.className, {
							[E.a.mShowCentered]: e.showCentered,
							[E.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = "".concat(b.j, "px")), e.isListing || e.isTall && w(e.height) || (s.maxHeight = "".concat(b.e, "px")), e.isExpando && e.maxHeight && (s.maxHeight = "".concat(e.maxHeight, "px")), e.isExpando && e.maxWidth && (s.maxWidth = "".concat(e.maxWidth, "px")), o.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				v = e => {
					const t = {};
					return (!e.showFull && Object(b.J)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = "".concat(b.j, "px"), e.shouldBlur && (t.maxWidth = Object(b.J)(e.height, e.width) ? "".concat(b.A, "px") : "".concat(e.width, "px"))), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = "".concat(e.maxHeight, "px")), o.a.createElement("div", {
						className: Object(d.a)(E.a.container, e.className),
						style: t
					}, e.children)
				},
				I = Object(c.a)(f.M, x.X, (e, t) => {
					let {
						isSponsored: s,
						postId: n
					} = t;
					return s && n ? Object(f.b)(e, n) : null
				}, (e, t, s) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s
				})),
				T = Object(i.b)(I);
			t.a = T(e => e.outboundUrl ? o.a.createElement("a", {
				href: e.outboundUrl,
				target: "_blank",
				onMouseDown: t => {
					e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(m.c)(t.currentTarget, e.postId, e.basePixelMetadata)
				}
			}, P(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
				target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
				to: Object(u.a)(e.postPermalink)
			}, P(e)) : P(e));
			const S = (e, t) => o.a.createElement(C, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[g.a]: !e
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
				P = e => {
					var {
						onClick: t
					} = e, s = _(e, ["onClick"]);
					const r = Object(b.J)(s.height, s.width),
						i = w(s.height) && r;
					return o.a.createElement(v, j({}, s, {
						className: "".concat(r ? "".concat(g.a, " ") : "").concat(s.className || "")
					}), s.isListing ? o.a.createElement("div", {
						className: s.contentImageClassName
					}, S(r, s)) : o.a.createElement("a", {
						href: s.originalSource,
						onClick: t,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank"
					}, S(r, s)), s.isListing && !s.showFull && s.height > b.j && Object(b.J)(s.height, s.width) && o.a.createElement("div", {
						className: E.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), s.isVideoThumbnail && o.a.createElement(p.a, {
						onClick: t
					}), s.shouldBlur && !s.isVideoThumbnail && !s.isListing && o.a.createElement("div", {
						className: E.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: E.a.unblurButton
					}, Object(O.a)(!!s.isNSFW, !!s.isSpoiler))))
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
				const s = Object.assign(Object.assign(Object.assign({}, t ? {
						maxHeight: "".concat(t, "px")
					} : {}), e.showFull && !e.showCentered ? {
						maxWidth: "".concat(e.width, "px")
					} : {}), e.blurSrc ? {
						overflow: "hidden"
					} : {}),
					n = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					c = Object(a.C)(e.height, e.width, e.forceAspectRatio);
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
						paddingBottom: "".concat(c, "%")
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
				p = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/selectors/video.ts");
			s("./node_modules/core-js/modules/es6.symbol.js");
			const b = 100,
				f = b / 2 / 1e3;
			var x = s("./src/lib/forceHttps/index.ts");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			class y extends i.a.Component {
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
				componentWillReceiveProps(e) {
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
							4 === e.readyState ? i = !1 : !i && c >= a && c < a + f ? i = !0 : i && c >= a && c > a + f && (i = !1), a = c, r !== i && t(i)
						}, b);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(this.ref, this.props.onBufferingChange))
				}
				render() {
					const e = this.props,
						{
							autoplay: t,
							isListing: s,
							isNotCardView: n,
							onBufferingChange: r,
							shouldLoad: o,
							shouldPause: a,
							showCentered: c,
							showFull: d,
							source: l
						} = e,
						u = O(e, ["autoplay", "isListing", "isNotCardView", "onBufferingChange", "shouldLoad", "shouldPause", "showCentered", "showFull", "source"]);
					return i.a.createElement("video", g({}, u, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), i.a.createElement("source", {
						src: Object(x.a)(this.props.source)
					}))
				}
			}
			var E = y,
				j = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				_ = s.n(j);
			const w = Object(c.c)({
					autoplayPref: h.b,
					consumed: m.b,
					loadTimes: m.g,
					metadata: m.i,
					started: m.l
				}),
				C = Object(a.b)(w, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						onBufferingChanged: t => {
							e(t ? l.r(s) : l.F(s))
						},
						onLoadStarted: t => e(l.q(s, t)),
						onMetadataReceived: t => e(l.E({
							metadata: t,
							postId: s
						})),
						onPaused: () => e(l.A({
							postId: s
						})),
						onPlayable: t => e(l.B(s, t)),
						onPlaying: () => e(l.D(s)),
						onWatched: () => e(l.s(s)),
						onViewableImpression: () => e(l.y(s)),
						onFullyViewableImpression: () => e(l.v(s)),
						onPlayedWithSound: () => e(l.C(!1, s)),
						onWatchedPercent: t => e(l.M(t, s))
					}
				});
			class v extends i.a.Component {
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
						return e && (s.margin = "0 auto"), t || (s.maxHeight = "".concat(p.e, "px")), i.a.createElement(E, {
							autoplay: this.props.autoplayPref,
							className: Object(d.a)(u.a, _.a.styledVideo),
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
						className: Object(d.a)(_.a.container, this.props.className, {
							[_.a.centered]: this.props.showCentered
						})
					}, i.a.createElement("a", {
						href: this.props.originalSource,
						target: "_blank"
					}, this.renderVideoPlayer()))
				}
			}
			t.a = C(v)
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(l),
				p = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const b = ["left", "top"],
				f = ["left", "bottom"],
				x = p.a.span("InnerSpan", u.a),
				g = p.a.span("TooltipTarget", u.a),
				O = p.a.span("SpoilerWrapper", u.a),
				y = p.a.wrapped(e => {
					var {
						className: t,
						isOpen: s
					} = e, n = m(e, ["className", "isOpen"]);
					return o.a.createElement(O, h({}, n, {
						className: Object(i.a)(t, {
							[u.a.isOpen]: s
						})
					}))
				}, "SpoilerWrapper", u.a),
				E = Object(d.a)(p.a.wrapped(c.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class j extends o.a.Component {
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
					return o.a.createElement(y, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(x, null, o.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(E, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: f
					}), this.props.children))
				}
			}
			t.a = j
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
			s.d(t, "w", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "k", (function() {
				return h
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "v", (function() {
				return x
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "u", (function() {
				return E
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "l", (function() {
				return _
			})), s.d(t, "m", (function() {
				return w
			})), s.d(t, "n", (function() {
				return C
			})), s.d(t, "t", (function() {
				return v
			})), s.d(t, "p", (function() {
				return I
			})), s.d(t, "o", (function() {
				return T
			})), s.d(t, "q", (function() {
				return S
			})), s.d(t, "s", (function() {
				return P
			})), s.d(t, "r", (function() {
				return L
			})), s.d(t, "a", (function() {
				return k
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/reddit/components/RichTextJson/elements.m.less"),
				a = s.n(i),
				c = s("./src/lib/lessComponent.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				u = c.a.hr("Hr", a.a),
				p = c.a.code("M", a.a),
				h = c.a.pre("Pre", a.a),
				m = c.a.blockquote("Blockquote", a.a),
				b = c.a.p("P", a.a),
				f = c.a.li("Li", a.a),
				x = c.a.ul("Ul", a.a),
				g = c.a.ol("Ol", a.a),
				O = c.a.strong("B", a.a),
				y = c.a.em("I", a.a),
				E = c.a.span("U", a.a),
				j = e => r.a.createElement("del", e),
				_ = c.a.sub("Sub", a.a),
				w = c.a.sup("Sup", a.a),
				C = c.a.table("Table", a.a),
				v = c.a.tr("Tr", a.a),
				I = c.a.td("Tdl", a.a),
				T = c.a.td("Tdc", a.a),
				S = c.a.td("Tdr", a.a),
				P = c.a.th("Thl", a.a),
				L = c.a.th("Thc", a.a),
				k = (c.a.th("Thr", a.a), c.a.wrapped(e => r.a.createElement(o.b, d({}, e, {
					isSponsored: !1,
					source: null
				})), "A", a.a))
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return w
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "a", (function() {
				return I
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/findLastIndex.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/sentry/index.ts"),
				l = s("./src/reddit/constants/elementClassNames.ts"),
				u = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = s("./src/reddit/models/RichTextJson/index.ts"),
				m = s("./src/reddit/components/RichTextJson/media.tsx"),
				b = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = s("./src/reddit/components/RichTextJson/index.m.less"),
				x = s.n(f),
				g = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const E = g.a.div("Container", x.a),
				j = Object(c.a)(e => {
					var {
						flairStyleTemplate: t,
						theme: s
					} = e, n = y(e, ["flairStyleTemplate", "theme"]);
					return i.a.createElement(E, O({}, n, {
						style: {
							color: Object(p.a)(Object(u.a)(Object.assign({
								flairStyleTemplate: t,
								theme: s
							}, n)))
						}
					}))
				}),
				_ = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.u || !!e.c && !e.c.every(e => e.e === h.A && !e.t),
				w = e => r()(e, _),
				C = e => e.findIndex(_),
				v = e => {
					const {
						altText: t,
						className: s,
						content: n,
						postId: r,
						renderMediaAsLinks: o,
						rtJsonElementProps: c,
						useExplicitTextColor: d
					} = e, u = n.document, p = [], f = e.mediaMetadata || null, x = C(u), g = w(u);
					if (-1 !== x)
						for (let i = x; i <= g; i++) {
							const e = u[i];
							switch (e.e) {
								case h.k:
									p.push(b.c(e, c, i));
									break;
								case h.l:
									p.push(b.d(i));
									break;
								case h.b:
									p.push(b.a(e, f, c, i));
									break;
								case h.c:
									p.push(b.b(e, i));
									break;
								case h.p:
									p.push(b.f(e, f, c, i));
									break;
								case h.z:
									p.push(b.h(e, f, c, i));
									break;
								case h.u:
									p.push(b.g(e, f, c, i));
									break;
								case h.h:
									p.push(Object(m.a)(e, i));
									break;
								case h.m:
								case h.a:
								case h.D:
									p.push(...Object(m.b)(e, i, f, o, r, t))
							}
						}
					return d ? i.a.createElement(E, {
						className: Object(a.a)(l.j, s)
					}, p) : i.a.createElement(j, {
						className: Object(a.a)(l.j, s),
						flairStyleTemplate: e.flairStyleTemplate
					}, p)
				};
			class I extends i.a.Component {
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
					const e = this.props,
						{
							renderFallback: t = this.renderDefaultFallback
						} = e,
						s = y(e, ["renderFallback"]);
					if (this.hasError || this.state.hasError) return t();
					try {
						return v(s)
					} catch (n) {
						return this.hasError = !0, this.logError(n), t()
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
				return I
			})), s.d(t, "b", (function() {
				return S
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				c = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				p = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				h = s("./src/reddit/helpers/richTextJson/index.ts"),
				m = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/components/RichTextJson/elements.tsx"),
				f = s("./src/reddit/components/RichTextJson/media.m.less"),
				x = s.n(f),
				g = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const E = /\/(\w+)\/asset\/(\w+)\//,
				j = g.a.wrapped(b.a, "A", x.a),
				_ = g.a.wrapped(l.a, "ImageBox", x.a),
				w = g.a.wrapped(e => o.a.createElement("p", e), "Caption", x.a),
				C = g.a.div("Placeholder", x.a),
				v = g.a.wrapped(e => {
					var {
						className: t,
						e: s
					} = e, r = y(e, ["className", "e"]);
					const i = s === m.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(C, O({
						className: t,
						style: {
							"--placeholder-content-text": "'".concat(i, "'")
						}
					}, r))
				}, "Placeholder", x.a),
				I = (e, t) => {
					let {
						c: s,
						x: n,
						y: r
					} = e;
					return o.a.createElement("div", {
						className: x.a.MediaWrapper
					}, o.a.createElement(u.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: n
					}, o.a.createElement(d.a, {
						isListing: !1,
						source: s,
						height: r,
						width: n,
						showCentered: !0,
						showFull: !0
					})))
				},
				T = (e, t, s) => {
					const n = e.c;
					let r = "";
					return s && (s.e === m.s ? r = s.s.u : s.e === m.r ? r = s.s.gif : s.e === m.t && (r = (e => {
						const t = E.exec(e);
						return t ? "".concat(a.a.redditUrl, "/link/").concat(t[1], "/video/").concat(t[2], "/player") : ""
					})(s.dashUrl))), r ? o.a.createElement(j, {
						href: r,
						key: t,
						title: n
					}, n || r) : null
				},
				S = (e, t, s, n, r, a) => {
					const d = m.E(s, e.id);
					if (n) return [T(e, t, d)];
					const l = [];
					return d ? d.e === m.s ? l.push(((e, t, s, n) => {
						let {
							id: r,
							s: a
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: s
							})
						}, o.a.createElement(u.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, o.a.createElement(_, {
							altText: n,
							originalSource: a.u,
							postId: r,
							source: a.u,
							height: a.y,
							width: a.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						})))
					})(d, t, !!e.c, a)) : d.e === m.r ? l.push(((e, t, s) => {
						let {
							id: n,
							ext: r,
							s: a
						} = e;
						if (Object(h.e)(n)) {
							const e = r || Object(h.d)(n);
							return o.a.createElement("div", {
								className: Object(i.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: s
								})
							}, o.a.createElement(j, {
								href: e,
								key: t,
								target: "_blank"
							}, a.mp4 ? o.a.createElement("video", {
								className: x.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: a.mp4
							})) : {
								originalSource: e
							}))
						}
						return o.a.createElement("div", {
							className: Object(i.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: s
							})
						}, o.a.createElement(u.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, o.a.createElement(p.a, {
							height: a.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: a.mp4,
							width: a.x,
							postId: n,
							source: a.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === m.t && l.push(((e, t, s, n) => {
						let {
							hlsUrl: r,
							dashUrl: a,
							x: d,
							y: l,
							isGif: p
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: s
							})
						}, o.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d
						}, o.a.createElement(c.b, {
							shouldLoad: !0,
							shouldPause: !0,
							autoPlay: p,
							hlsSource: r,
							mpegDashSource: a,
							postId: n,
							isGif: p
						})))
					})(d, t, !!e.c, r)) : l.push(((e, t) => o.a.createElement(v, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(w, {
						key: t
					}, e))(e.c, "caption".concat(t))), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return W
			})), s.d(t, "d", (function() {
				return J
			})), s.d(t, "a", (function() {
				return V
			})), s.d(t, "b", (function() {
				return A
			})), s.d(t, "f", (function() {
				return G
			})), s.d(t, "h", (function() {
				return X
			})), s.d(t, "g", (function() {
				return K
			})), s.d(t, "i", (function() {
				return q
			})), s.d(t, "e", (function() {
				return Z
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
				p = s("./src/reddit/models/Product/index.ts"),
				h = s("./src/reddit/models/RichTextJson/index.ts"),
				m = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = s.n(x);
			const O = 1e3,
				y = 1e3;
			var E;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(E || (E = {}));
			class j extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = E.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = E.Inside, setTimeout(() => {
							this.mouseLocation === E.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, O)
					}, this.onMouseOut = () => {
						this.mouseLocation = E.Outside, setTimeout(() => {
							this.mouseLocation !== E.Inside && this.setState({
								tooltipOpen: !1
							})
						}, y)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = m.defaults(t);
							return Object.assign(Object.assign({
								source: "meta",
								action: e,
								noun: "emote"
							}, s), {
								actionInfo: Object.assign(Object.assign({}, s.actionInfo), {
									reason: this.props.node.id
								}),
								subreddit: m.subreddit(t)
							})
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, n, r;
					t.e === h.s ? (s = t.s.x, n = t.s.y, r = t.s.u) : t.e === h.r && (s = t.s.x, n = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return r ? a.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: r,
						width: s,
						height: n,
						title: ":".concat(Object(p.b)(e.id), ":")
					}), this.state.tooltipOpen && a.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var _ = Object(u.c)(j),
				w = s("./src/reddit/components/RichTextJson/media.tsx"),
				C = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				v = s("./node_modules/react-redux/es/index.js"),
				I = s("./node_modules/reselect/es/index.js"),
				T = s("./src/lib/loadWithRetries/index.ts"),
				S = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				P = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				L = s.n(P);
			var k = Object(b.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(T.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return a.a.createElement("span", {
							className: L.a.subredditMentionContainer
						}, a.a.createElement(S.a, {
							href: "/r/".concat(t, "/")
						}, a.a.createElement("span", {
							className: L.a.subredditIconContainer
						}, a.a.createElement(S.b, null)), "r/".concat(t)))
					}
				}),
				N = s("./src/reddit/constants/experiments.ts"),
				M = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				B = s("./src/reddit/selectors/subredditMention.ts");
			class D extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(M.a)(Object.assign(Object.assign({}, e), {
							subredditName: s
						})))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return a.a.createElement(c.a, {
						onClick: this.handleOnClick,
						href: "/r/".concat(e, "/")
					}, "r/".concat(e))
				}
			}
			const H = Object(u.c)(D),
				R = Object(I.c)({
					isFeatureFlagEnabled: B.b,
					isUserInTreatment: B.e,
					userVariant: B.a
				});
			var U = Object(v.b)(R)(e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: s,
						subredditName: n,
						userVariant: r,
						rtJsonElementProps: o
					} = e;
					if (!s || !t) return a.a.createElement(H, {
						subredditName: n,
						rtJsonElementProps: o
					});
					switch (r) {
						case N.tc.SmIcon:
							return a.a.createElement(k, {
								subredditName: n,
								rtJsonElementProps: o
							});
						case N.tc.SmIconHc:
							return a.a.createElement(k, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return a.a.createElement(H, {
								subredditName: n,
								rtJsonElementProps: o
							})
					}
				}),
				F = s("./src/reddit/helpers/richTextJson/index.ts");
			const W = (e, t, s) => {
					const n = e.c || [],
						r = e.l,
						o = [],
						i = n.length;
					for (let a = 0; a < i; a++) {
						const e = n[a];
						o.push(e.e === h.w ? e.t : Z(e, t, a))
					}
					const d = c.w[r - 1];
					return a.a.createElement(d, {
						key: s
					}, o)
				},
				J = e => a.a.createElement(c.e, {
					key: e
				}),
				V = (e, t, s, n) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						i = [];
					for (let a = 0; a < o; a++) i.push(Y(r[a], t, s, a));
					return a.a.createElement(c.c, {
						key: n
					}, i)
				},
				A = (e, t) => {
					const s = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				G = (e, t, s, n) => {
					let {
						renderingObjectInfo: r
					} = s;
					const o = e.c,
						i = [],
						d = o.length;
					for (let u = 0; u < d; u++) {
						const e = o[u].c;
						e && e.length && i.push(a.a.createElement(c.g, {
							key: u
						}, e.map((e, s) => Y(e, t, {
							renderingObjectInfo: r
						}, s))))
					}
					const l = e.o ? c.i : c.v;
					return a.a.createElement(l, {
						key: n
					}, i)
				},
				Y = (e, t, s, n) => {
					switch (e.e) {
						case h.b:
							return V(e, t, s, n);
						case h.c:
							return A(e, n);
						case h.k:
							return W(e, s, n);
						case h.l:
							return J(n);
						case h.p:
							return G(e, t, s, n);
						case h.u:
							return K(e, t, s, n);
						case h.z:
							return X(e, t, s, n)
					}
				},
				X = (e, t, s, n) => {
					const r = e.c,
						o = e.h,
						i = r.length,
						d = o.length,
						l = [],
						u = [],
						p = [];
					for (let c = 0; c < d; c++) {
						const e = o[c],
							{
								H: n,
								D: r
							} = ee(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(n, {
							key: c
						}, q(i, t, s))), p[c] = r
					}
					for (let h = 0; h < i; h++) {
						const e = r[h],
							n = e.length,
							o = [];
						for (let r = 0; r < n; r++) {
							const n = p[r],
								{
									c: i = []
								} = e[r];
							o.push(a.a.createElement(n, {
								key: r
							}, q(i, t, s)))
						}
						u.push(a.a.createElement(c.t, {
							key: h
						}, o))
					}
					return a.a.createElement(c.n, {
						key: n
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, l)), a.a.createElement("tbody", null, u))
				},
				K = (e, t, s, n) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(n);
					const r = e.c[0];
					return r.e !== h.m && r.e !== h.a || !Object(F.e)(r.id) ? a.a.createElement(c.j, {
						key: n
					}, q(e.c, t, s)) : Object(w.b)(r, n, t)
				},
				q = (e, t, s) => {
					const n = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === h.A) n.push(Q(r, o));
						else if (r.e === h.x) n.push(a.a.createElement(C.a, {
							key: o
						}, q(r.c, t, s)));
						else if (r.e === h.n) n.push(a.a.createElement("br", {
							key: o
						}));
						else if (r.e === h.m || r.e === h.a) {
							if (r.id.startsWith("emote|")) {
								const e = h.E(t, r.id);
								e && n.push(a.a.createElement(_, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else n.push(Z(r, s, o))
					}
					return n
				},
				Z = (e, t, s) => {
					switch (e.e) {
						case h.o:
							return a.a.createElement(c.a, {
								href: e.u,
								key: s,
								title: e.a
							}, Q({
								t: e.t,
								f: e.f
							}, 0));
						case h.y:
							return a.a.createElement(U, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case h.B:
						case h.C:
							return a.a.createElement(c.a, {
								href: "/u/".concat(e.t, "/"),
								key: s
							}, "".concat(e.l ? "/" : "", "u/").concat(e.t));
						case h.g:
						case h.v:
							return a.a.createElement(c.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				Q = (e, t) => {
					const {
						f: s,
						t: r
					} = e, o = [];
					if (!s) return $(0, r, t);
					const i = Object(n.a)(r);
					let a = 0,
						c = 0;
					const d = s.length;
					for (; a < d; a++) {
						const [e, t, n] = s[a], d = t + n, l = i[t], u = i[d] - l;
						l > c && o.push($(0, r.substr(c, l - c), "between".concat(a))), o.push($(e, r.substr(l, u), a)), c = l + u
					}
					return c < r.length && o.push($(0, r.substr(c), "remaining".concat(a))), o
				},
				z = {
					[h.j.monospace]: c.h,
					[h.j.bold]: c.b,
					[h.j.italic]: c.f,
					[h.j.underline]: c.u,
					[h.j.strikethrough]: c.d,
					[h.j.subscript]: c.l,
					[h.j.superscript]: c.m
				},
				$ = (e, t, s) => {
					let n = t;
					return n = o()(z, (t, n, r) => e & parseInt(r, 10) ? a.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				ee = e => {
					switch (e) {
						case h.f:
							return {
								H: c.r, D: c.q
							};
						case h.d:
							return {
								H: c.r, D: c.o
							};
						case h.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
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
				return u
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = o.a.wrapped(i.b, "SubredditIcon", d.a),
				p = o.a.wrapped(e => r.a.createElement(a.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "S", d.a)
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
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return E
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
				p = s("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const h = e => Object.assign(Object.assign({}, u.defaults(e)), {
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: d.f.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				m = (e, t) => {
					let {
						renderingObjectInfo: s,
						pageLayer: n
					} = t;
					if (s && (Object(a.b)(s) || Object(c.b)(s))) return Object(a.b)(s) ? p.SourceElement.Comment : Object(i.w)(n) ? p.SourceElement.PostDetail : Object(i.E)(n) ? p.SourceElement.ListingPostDetail : void 0
				},
				b = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(c.b)(s) && !Object(a.b)(s)) return {};
					const n = Object(c.b)(s) ? s.belongsTo.id : s.subredditId;
					return Object.assign({
						post: u.post(e, s.id),
						subreddit: u.subredditById(e, n)
					}, ((e, t) => {
						const {
							renderingObjectInfo: s,
							subredditName: n
						} = t;
						if (!s || !Object(c.b)(s) && !Object(a.b)(s)) return {
							outbound: void 0
						};
						const r = Object(c.b)(s) ? "postId" : "commentId",
							o = {
								url: "/r/".concat(n, "/"),
								sourceElement: m(0, t),
								subredditName: n,
								[r]: s.id
							},
							i = Object(l.B)(e, {
								subredditName: n
							});
						return i ? {
							outbound: Object.assign(Object.assign({}, o), {
								url: i.url,
								subredditId: i.id
							})
						} : {
							outbound: Object.assign({}, o)
						}
					})(e, t))
				},
				f = e => t => Object.assign(Object.assign({}, (e => Object.assign(Object.assign({}, u.defaults(e)), {
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}))(t)), b(t, e)),
				x = e => t => Object.assign(Object.assign({}, h(t)), {
					source: "global",
					action: o.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				g = (e, t) => s => Object.assign(Object.assign({}, h(s)), {
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				O = (e, t) => s => Object.assign(Object.assign({}, h(s)), {
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				y = e => t => Object.assign(Object.assign({}, h(t)), {
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				E = e => t => Object.assign(Object.assign({}, h(t)), {
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				j = e => t => Object.assign(Object.assign({}, h(t)), {
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
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
				return p
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: n.oc
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === n.tc.SmIcon || t === n.tc.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.pending[s]
				},
				u = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.error[s]
				},
				p = (e, t) => {
					let {
						subredditName: s
					} = t;
					const n = Object(i.W)(e, {
						subredditName: s
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478.2adc9720f19771a6aa97.js.map