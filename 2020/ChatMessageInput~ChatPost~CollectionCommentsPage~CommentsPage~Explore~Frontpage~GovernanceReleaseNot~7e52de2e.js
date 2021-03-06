// https://www.redditstatic.com/desktop2x/ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNot~7e52de2e.bbe202cf1f220554788c.js
// Retrieved at 1/21/2020, 5:40:10 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNot~7e52de2e"], {
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				m = n.n(p);
			const b = Object(o.b)(() => Object(i.c)({
				isNightmodeOn: h.U
			}));
			t.a = b(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? "".concat(e.width, "px") : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = "".concat(u.e, "px")), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, m.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "c", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = n("./src/reddit/components/PlayButton/index.tsx"),
				p = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/constants/tracking.ts"),
				x = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				E = n.n(x);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const j = (e, t) => {
					return e / t > 16 / 9
				},
				_ = e => e > 2 * m.e,
				w = e => {
					const t = Object(d.a)(E.a.image, p.h, e.className, {
							[E.a.mShowCentered]: e.showCentered,
							[E.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = "".concat(m.i, "px")), e.isListing || e.isTall && _(e.height) || (n.maxHeight = "".concat(m.e, "px")), e.isExpando && e.maxHeight && (n.maxHeight = "".concat(e.maxHeight, "px")), e.isExpando && e.maxWidth && (n.maxWidth = "".concat(e.maxWidth, "px")), o.a.createElement("img", {
						alt: s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				C = e => {
					const t = {};
					return (!e.showFull && j(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = "".concat(m.i, "px"), e.shouldBlur && (t.maxWidth = j(e.height, e.width) ? "".concat(m.w, "px") : "".concat(e.width, "px"))), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = "".concat(e.maxHeight, "px")), o.a.createElement("div", {
						className: Object(d.a)(E.a.container, e.className),
						style: t
					}, e.children)
				},
				v = Object(c.c)({
					postPermalink: b.H,
					shouldOpenPostInNewTab: f.W
				}),
				I = Object(i.b)(v);
			t.a = I(e => e.outboundUrl ? o.a.createElement("a", {
				href: e.outboundUrl,
				target: "_blank"
			}, T(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
				target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
				to: Object(u.a)(e.postPermalink)
			}, T(e)) : T(e));
			const S = (e, t) => o.a.createElement(w, {
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
				T = e => {
					var {
						onClick: t
					} = e, n = y(e, ["onClick"]);
					const r = j(n.height, n.width),
						i = _(n.height) && r;
					let a;
					return n.isNSFW && n.isSpoiler ? a = s.fbt._("Click to see nsfw spoiler", null, {
						hk: "4EdPWu"
					}) : n.isNSFW ? a = s.fbt._("Click to see nsfw", null, {
						hk: "4CErse"
					}) : n.isSpoiler && (a = s.fbt._("Click to see spoiler", null, {
						hk: "1x3iUE"
					})), o.a.createElement(C, O({}, n, {
						className: "".concat(r ? "".concat(g.a, " ") : "").concat(n.className || "")
					}), n.isListing ? o.a.createElement("div", {
						className: n.contentImageClassName
					}, S(r, n)) : o.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank"
					}, S(r, n)), n.isListing && !n.showFull && n.height > m.i && j(n.height, n.width) && o.a.createElement("div", {
						className: E.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && o.a.createElement(h.a, {
						onClick: t
					}), n.shouldBlur && !n.isVideoThumbnail && !n.isListing && o.a.createElement("div", {
						className: E.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: E.a.unblurButton
					}, a)))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.i) && (t = e.height);
				const n = Object.assign({}, t ? {
						maxHeight: "".concat(t, "px")
					} : {}, e.showFull && !e.showCentered ? {
						maxWidth: "".concat(e.width, "px")
					} : {}, e.blurSrc ? {
						overflow: "hidden"
					} : {}),
					s = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					c = ((e, t, n) => n ? 100 * n : e && t ? e / t * 100 : 100 * a.c)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo
					}),
					"data-click-id": "media",
					style: n
				}, s, r.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: "".concat(c, "%")
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc
					})
				}, e.children))
			};
			t.a = e => {
				if (!e.isListing && !e.alwaysWrapMedia || e.isExpando) {
					return r.a.Children.only(e.children) || r.a.createElement("div", null)
				}
				return r.a.createElement(l, e)
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				h = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				m = n("./src/reddit/selectors/video.ts");
			n("./node_modules/core-js/modules/es6.symbol.js");
			const b = 100,
				f = b / 2 / 1e3;
			var g = n("./src/lib/forceHttps/index.ts");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			class O extends i.a.Component {
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
						let n = !1,
							s = !1;
						const r = () => n = !0,
							o = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, s) return s = !1, void(a = c);
							if (e.paused || e.seeking || !n) return void(a = c);
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
							isListing: n,
							isNotCardView: s,
							onBufferingChange: r,
							shouldLoad: o,
							shouldPause: a,
							showCentered: c,
							showFull: d,
							source: l
						} = e,
						u = E(e, ["autoplay", "isListing", "isNotCardView", "onBufferingChange", "shouldLoad", "shouldPause", "showCentered", "showFull", "source"]);
					return i.a.createElement("video", x({}, u, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), i.a.createElement("source", {
						src: Object(g.a)(this.props.source)
					}))
				}
			}
			var y = O,
				j = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				_ = n.n(j);
			const w = Object(c.c)({
					autoplayPref: p.b,
					consumed: m.b,
					loadTimes: m.f,
					metadata: m.g,
					started: m.i
				}),
				C = Object(a.b)(w, (e, t) => {
					let {
						postId: n
					} = t;
					return {
						onBufferingChanged: t => {
							e(t ? l.w(n) : l.I(n))
						},
						onLoadStarted: t => e(l.v(n, t)),
						onMetadataReceived: t => e(l.H({
							metadata: t,
							postId: n
						})),
						onPaused: () => e(l.D({
							postId: n
						})),
						onPlayable: t => e(l.E(n, t)),
						onPlaying: () => e(l.G(n)),
						onWatched: () => e(l.x(n)),
						onViewableImpression: () => e(l.B(n)),
						onFullyViewableImpression: () => e(l.A(n)),
						onPlayedWithSound: () => e(l.F(n)),
						onWatchedPercent: t => e(l.O(t, n))
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
						} = this.props, n = {};
						return e && (n.margin = "0 auto"), t || (n.maxHeight = "".concat(h.e, "px")), i.a.createElement(y, {
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
							style: n,
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
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/i18n/utils.ts"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				h = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const b = ["left", "top"],
				f = ["left", "bottom"],
				g = h.a.span("InnerSpan", u.a),
				x = h.a.span("TooltipTarget", u.a),
				E = h.a.span("SpoilerWrapper", u.a),
				O = h.a.wrapped(e => {
					var {
						className: t,
						isOpen: n
					} = e, s = m(e, ["className", "isOpen"]);
					return r.a.createElement(E, p({}, s, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				y = Object(c.a)(h.a.wrapped(a.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
			class j extends r.a.Component {
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
					return r.a.createElement(O, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, r.a.createElement(g, null, r.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), r.a.createElement(y, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: Object(d.c)("Reveal spoiler"),
						targetPosition: b,
						tooltipPosition: f
					}), this.props.children))
				}
			}
			t.a = j
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
			n.d(t, "w", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "q", (function() {
				return T
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "a", (function() {
				return L
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				u = c.a.hr("Hr", a.a),
				h = c.a.code("M", a.a),
				p = c.a.pre("Pre", a.a),
				m = c.a.blockquote("Blockquote", a.a),
				b = c.a.p("P", a.a),
				f = c.a.li("Li", a.a),
				g = c.a.ul("Ul", a.a),
				x = c.a.ol("Ol", a.a),
				E = c.a.strong("B", a.a),
				O = c.a.em("I", a.a),
				y = c.a.span("U", a.a),
				j = e => r.a.createElement("del", e),
				_ = c.a.sub("Sub", a.a),
				w = c.a.sup("Sup", a.a),
				C = c.a.table("Table", a.a),
				v = c.a.tr("Tr", a.a),
				I = c.a.td("Tdl", a.a),
				S = c.a.td("Tdc", a.a),
				T = c.a.td("Tdr", a.a),
				P = c.a.th("Thl", a.a),
				k = c.a.th("Thc", a.a),
				L = (c.a.th("Thr", a.a), c.a.wrapped(e => r.a.createElement(o.a, d({}, e, {
					isSponsored: !1,
					source: null
				})), "A", a.a))
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return w
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return I
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/lodash/findLastIndex.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				m = n("./src/reddit/components/RichTextJson/media.tsx"),
				b = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = n("./src/reddit/components/RichTextJson/index.m.less"),
				g = n.n(f),
				x = n("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const y = x.a.div("Container", g.a),
				j = Object(c.a)(e => {
					var {
						flairStyleTemplate: t
					} = e, n = O(e, ["flairStyleTemplate"]);
					return i.a.createElement(y, E({}, n, {
						style: {
							color: Object(h.a)(Object(u.a)(Object.assign({
								flairStyleTemplate: t
							}, n)))
						}
					}))
				}),
				_ = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.u || !!e.c && !e.c.every(e => e.e === p.A && !e.t),
				w = e => r()(e, _),
				C = e => e.findIndex(_),
				v = e => {
					const {
						className: t,
						content: n,
						language: s,
						postId: r,
						renderMediaAsLinks: o,
						rtJsonElementProps: c,
						useExplicitTextColor: d
					} = e, u = n.document, h = [], f = e.mediaMetadata || null, g = C(u), x = w(u);
					if (-1 !== g)
						for (let i = g; i <= x; i++) {
							const e = u[i];
							switch (e.e) {
								case p.k:
									h.push(b.c(e, c, i));
									break;
								case p.l:
									h.push(b.d(i));
									break;
								case p.b:
									h.push(b.a(e, f, c, i));
									break;
								case p.c:
									h.push(b.b(e, i));
									break;
								case p.p:
									h.push(b.f(e, f, c, i));
									break;
								case p.z:
									h.push(b.h(e, f, c, i));
									break;
								case p.u:
									h.push(b.g(e, f, c, i));
									break;
								case p.h:
									h.push(Object(m.a)(e, i));
									break;
								case p.m:
								case p.a:
								case p.D:
									h.push(...Object(m.b)(e, i, f, o, s, r))
							}
						}
					return d ? i.a.createElement(y, {
						className: Object(a.a)(l.k, t)
					}, h) : i.a.createElement(j, {
						className: Object(a.a)(l.k, t),
						flairStyleTemplate: e.flairStyleTemplate
					}, h)
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
						n = O(e, ["renderFallback"]);
					if (this.hasError || this.state.hasError) return t();
					try {
						return v(n)
					} catch (s) {
						return this.hasError = !0, this.logError(s), t()
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
				MediaContainer: "_1uZBAwg0skEanBXfZsIWJh",
				mediaContainer: "_1uZBAwg0skEanBXfZsIWJh",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			})), n.d(t, "b", (function() {
				return T
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/config.ts"),
				i = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				a = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				c = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				d = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				l = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				u = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/i18n/utils.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				m = n("./src/reddit/components/RichTextJson/elements.tsx"),
				b = n("./src/reddit/components/RichTextJson/media.m.less"),
				f = n.n(b),
				g = n("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const O = /\/(\w+)\/asset\/(\w+)\//,
				y = g.a.wrapped(m.a, "A", f.a),
				j = g.a.wrapped(c.a, "ImageBox", f.a),
				_ = g.a.wrapped(e => {
					var {
						className: t,
						width: n
					} = e, s = E(e, ["className", "width"]);
					return r.a.createElement(d.a, x({
						className: t,
						width: n
					}, s))
				}, "MediaContainer", f.a),
				w = g.a.wrapped(e => r.a.createElement("p", e), "Caption", f.a),
				C = g.a.div("Placeholder", f.a),
				v = g.a.wrapped(e => {
					var {
						className: t,
						e: n
					} = e, s = E(e, ["className", "e"]);
					const o = n === p.D ? Object(h.c)("Processing video...") : Object(h.c)("Processing image...");
					return r.a.createElement(C, x({
						className: t,
						style: {
							"--placeholder-content-text": "'".concat(o, "'")
						}
					}, s))
				}, "Placeholder", f.a),
				I = (e, t) => {
					let {
						c: n,
						x: s,
						y: o
					} = e;
					return r.a.createElement(_, {
						height: o,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: s
					}, r.a.createElement(a.a, {
						isListing: !1,
						source: n,
						height: o,
						width: s,
						showCentered: !0,
						showFull: !0
					}))
				},
				S = (e, t, n) => {
					const s = e.c;
					let i = "";
					return n && (n.e === p.s ? i = n.s.u : n.e === p.r ? i = n.s.gif : n.e === p.t && (i = (e => {
						const t = O.exec(e);
						return t ? "".concat(o.a.redditUrl, "/link/").concat(t[1], "/video/").concat(t[2], "/player") : ""
					})(n.dashUrl))), i ? r.a.createElement(y, {
						href: i,
						key: t,
						title: s
					}, s || i) : null
				},
				T = (e, t, n, s, o, a) => {
					const c = p.E(n, e.id);
					if (s) return [S(e, t, c)];
					const d = [];
					return c ? c.e === p.s ? d.push(((e, t) => {
						let {
							id: n,
							s
						} = e;
						return r.a.createElement(_, {
							height: s.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: s.x
						}, r.a.createElement(j, {
							originalSource: s.u,
							postId: n,
							source: s.u,
							height: s.y,
							width: s.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						}))
					})(c, t)) : c.e === p.r ? d.push(((e, t) => {
						let {
							id: n,
							ext: s,
							s: o
						} = e;
						if (Object(u.d)(n)) {
							const e = s || Object(u.c)(n);
							return r.a.createElement(y, {
								href: e,
								key: t,
								target: "_blank"
							}, o.mp4 ? r.a.createElement("video", {
								className: f.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, r.a.createElement("source", {
								src: o.mp4
							})) : {
								originalSource: e
							})
						}
						return r.a.createElement(_, {
							height: o.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: o.x
						}, r.a.createElement(l.a, {
							height: o.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: o.mp4,
							width: o.x,
							postId: n,
							source: o.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						}))
					})(c, t)) : c.e === p.t && d.push(((e, t, n) => {
						let {
							hlsUrl: s,
							dashUrl: o,
							x: a,
							y: c,
							isGif: d
						} = e;
						return r.a.createElement(_, {
							height: c,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a
						}, r.a.createElement(i.b, {
							shouldLoad: !0,
							shouldPause: !0,
							autoPlay: d,
							hlsSource: s,
							mpegDashSource: o,
							postId: n,
							isGif: d
						}))
					})(c, t, a)) : d.push(function(e, t) {
						let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en";
						return r.a.createElement(v, {
							e,
							key: t,
							language: n
						})
					}(e.e, t, o)), e.c && d.push(((e, t) => r.a.createElement(w, {
						key: t
					}, e))(e.c, "caption".concat(t))), d
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/v4.js"),
				l = n.n(d),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				m = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = n.n(g);
			const E = 1e3,
				O = 1e3;
			var y;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(y || (y = {}));
			class j extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = y.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = y.Inside, setTimeout(() => {
							this.mouseLocation === y.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, E)
					}, this.onMouseOut = () => {
						this.mouseLocation = y.Outside, setTimeout(() => {
							this.mouseLocation !== y.Inside && this.setState({
								tooltipOpen: !1
							})
						}, O)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = m.defaults(t);
							return Object.assign({
								source: "meta",
								action: e,
								noun: "emote"
							}, n, {
								actionInfo: Object.assign({}, n.actionInfo, {
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
					let n, s, r;
					t.e === p.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === p.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return r ? a.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: r,
						width: n,
						height: s,
						title: ":".concat(Object(h.b)(e.id), ":")
					}), this.state.tooltipOpen && a.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var _ = Object(u.b)(j),
				w = n("./src/reddit/components/RichTextJson/media.tsx"),
				C = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				v = n("./node_modules/react-redux/es/index.js"),
				I = n("./node_modules/reselect/es/index.js"),
				S = n("./src/lib/loadWithRetries/index.ts"),
				T = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				P = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				k = n.n(P);
			var L = Object(b.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(S.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: e => {
						let {
							subredditName: t
						} = e;
						return a.a.createElement("span", {
							className: k.a.subredditMentionContainer
						}, a.a.createElement(T.a, {
							href: "/r/".concat(t, "/")
						}, a.a.createElement("span", {
							className: k.a.subredditIconContainer
						}, a.a.createElement(T.b, null)), "r/".concat(t)))
					}
				}),
				N = n("./src/reddit/constants/experiments.ts"),
				B = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				M = n("./src/reddit/selectors/subredditMention.ts");
			class D extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(B.a)(Object.assign({}, e, {
							subredditName: n
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
			const R = Object(u.b)(D),
				H = Object(I.c)({
					isFeatureFlagEnabled: M.b,
					isUserInTreatment: M.e,
					userVariant: M.a
				});
			var U = Object(v.b)(H)(e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: s,
						userVariant: r,
						rtJsonElementProps: o
					} = e;
					if (!n || !t) return a.a.createElement(R, {
						subredditName: s,
						rtJsonElementProps: o
					});
					switch (r) {
						case N.Db.SmIcon:
							return a.a.createElement(L, {
								subredditName: s,
								rtJsonElementProps: o
							});
						case N.Db.SmIconHc:
							return a.a.createElement(L, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return a.a.createElement(R, {
								subredditName: s,
								rtJsonElementProps: o
							})
					}
				}),
				F = n("./src/reddit/helpers/richTextJson/index.ts");
			n.d(t, "c", (function() {
				return J
			})), n.d(t, "d", (function() {
				return W
			})), n.d(t, "a", (function() {
				return V
			})), n.d(t, "b", (function() {
				return A
			})), n.d(t, "f", (function() {
				return Y
			})), n.d(t, "h", (function() {
				return G
			})), n.d(t, "g", (function() {
				return K
			})), n.d(t, "i", (function() {
				return q
			})), n.d(t, "e", (function() {
				return Z
			}));
			const J = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						o = [],
						i = s.length;
					for (let a = 0; a < i; a++) {
						const e = s[a];
						o.push(e.e === p.w ? e.t : Z(e, t, a))
					}
					const d = c.w[r - 1];
					return a.a.createElement(d, {
						key: n
					}, o)
				},
				W = e => a.a.createElement(c.e, {
					key: e
				}),
				V = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						i = [];
					for (let a = 0; a < o; a++) i.push(X(r[a], t, n, a));
					return a.a.createElement(c.c, {
						key: s
					}, i)
				},
				A = (e, t) => {
					const n = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				Y = (e, t, n, s) => {
					let {
						renderingObjectInfo: r
					} = n;
					const o = e.c,
						i = [],
						d = o.length;
					for (let u = 0; u < d; u++) {
						const e = o[u].c;
						e && e.length && i.push(a.a.createElement(c.g, {
							key: u
						}, e.map((e, n) => X(e, t, {
							renderingObjectInfo: r
						}, n))))
					}
					const l = e.o ? c.i : c.v;
					return a.a.createElement(l, {
						key: s
					}, i)
				},
				X = (e, t, n, s) => {
					switch (e.e) {
						case p.b:
							return V(e, t, n, s);
						case p.c:
							return A(e, s);
						case p.k:
							return J(e, n, s);
						case p.l:
							return W(s);
						case p.p:
							return Y(e, t, n, s);
						case p.u:
							return K(e, t, n, s);
						case p.z:
							return G(e, t, n, s)
					}
				},
				G = (e, t, n, s) => {
					const r = e.c,
						o = e.h,
						i = r.length,
						d = o.length,
						l = [],
						u = [],
						h = [];
					for (let c = 0; c < d; c++) {
						const e = o[c],
							{
								H: s,
								D: r
							} = ee(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(s, {
							key: c
						}, q(i, t, n))), h[c] = r
					}
					for (let p = 0; p < i; p++) {
						const e = r[p],
							s = e.length,
							o = [];
						for (let r = 0; r < s; r++) {
							const s = h[r],
								{
									c: i = []
								} = e[r];
							o.push(a.a.createElement(s, {
								key: r
							}, q(i, t, n)))
						}
						u.push(a.a.createElement(c.t, {
							key: p
						}, o))
					}
					return a.a.createElement(c.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, l)), a.a.createElement("tbody", null, u))
				},
				K = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(F.d)(r.id) ? a.a.createElement(c.j, {
						key: s
					}, q(e.c, t, n)) : Object(w.b)(r, s, t)
				},
				q = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === p.A) s.push(z(r, o));
						else if (r.e === p.x) s.push(a.a.createElement(C.a, {
							key: o
						}, q(r.c, t, n)));
						else if (r.e === p.n) s.push(a.a.createElement("br", {
							key: o
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && s.push(a.a.createElement(_, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else s.push(Z(r, n, o))
					}
					return s
				},
				Z = (e, t, n) => {
					switch (e.e) {
						case p.o:
							return a.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a
							}, z({
								t: e.t,
								f: e.f
							}, 0));
						case p.y:
							return a.a.createElement(U, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(c.a, {
								href: "/u/".concat(e.t, "/"),
								key: n
							}, "".concat(e.l ? "/" : "", "u/").concat(e.t));
						case p.g:
						case p.v:
							return a.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				z = (e, t) => {
					const {
						f: n,
						t: r
					} = e, o = [];
					if (!n) return $(0, r, t);
					const i = Object(s.a)(r);
					let a = 0,
						c = 0;
					const d = n.length;
					for (; a < d; a++) {
						const [e, t, s] = n[a], d = t + s, l = i[t], u = i[d] - l;
						l > c && o.push($(0, r.substr(c, l - c), "between".concat(a))), o.push($(e, r.substr(l, u), a)), c = l + u
					}
					return c < r.length && o.push($(0, r.substr(c), "remaining".concat(a))), o
				},
				Q = {
					[p.j.monospace]: c.h,
					[p.j.bold]: c.b,
					[p.j.italic]: c.f,
					[p.j.underline]: c.u,
					[p.j.strikethrough]: c.d,
					[p.j.subscript]: c.l,
					[p.j.superscript]: c.m
				},
				$ = (e, t, n) => {
					let s = t;
					return s = o()(Q, (t, s, r) => e & parseInt(r, 10) ? a.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				ee = e => {
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
				return u
			})), n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = o.a.wrapped(i.b, "SubredditIcon", d.a),
				h = o.a.wrapped(e => r.a.createElement(a.a, l({}, e, {
					isSponsored: !1,
					source: null
				})), "S", d.a)
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
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(r);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				a = e => Object(s.a)(o.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return j
			}));
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/isComment.ts"),
				c = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const p = e => Object.assign({}, u.defaults(e), {
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: d.f.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				m = (e, t) => {
					let {
						renderingObjectInfo: n,
						pageLayer: s
					} = t;
					if (n && (Object(a.b)(n) || Object(c.b)(n))) return Object(a.b)(n) ? h.SourceElement.Comment : Object(i.w)(s) ? h.SourceElement.PostDetail : Object(i.F)(s) ? h.SourceElement.ListingPostDetail : void 0
				},
				b = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(c.b)(n) && !Object(a.b)(n)) return {};
					const s = Object(c.b)(n) ? n.belongsTo.id : n.subredditId;
					return Object.assign({
						post: u.post(e, n.id),
						subreddit: u.subredditById(e, s)
					}, ((e, t) => {
						const {
							renderingObjectInfo: n,
							subredditName: s
						} = t;
						if (!n || !Object(c.b)(n) && !Object(a.b)(n)) return {
							outbound: void 0
						};
						const r = Object(c.b)(n) ? "postId" : "commentId",
							o = {
								url: "/r/".concat(s, "/"),
								sourceElement: m(0, t),
								subredditName: s,
								[r]: n.id
							},
							i = Object(l.B)(e, {
								subredditName: s
							});
						return i ? {
							outbound: Object.assign({}, o, {
								url: i.url,
								subredditId: i.id
							})
						} : {
							outbound: Object.assign({}, o)
						}
					})(e, t))
				},
				f = e => t => Object.assign({}, (e => Object.assign({}, u.defaults(e), {
					source: r.LINK,
					action: o.c.CLICK,
					noun: s.INTERNAL_LINK
				}))(t), b(t, e)),
				g = e => t => Object.assign({}, p(t), {
					source: "global",
					action: o.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				x = (e, t) => n => Object.assign({}, p(n), {
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				E = (e, t) => n => Object.assign({}, p(n), {
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				O = e => t => Object.assign({}, p(t), {
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				y = e => t => Object.assign({}, p(t), {
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				j = e => t => Object.assign({}, p(t), {
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
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
				return h
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.yb
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === s.Db.SmIcon || t === s.Db.SmIconHc
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
				h = (e, t) => {
					let {
						subredditName: n
					} = t;
					const s = Object(i.W)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNot~7e52de2e.bbe202cf1f220554788c.js.map