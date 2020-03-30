// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf.9eb9f0ddc069682edffb.js
// Retrieved at 3/30/2020, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"], {
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, i) {
			"use strict";
			var s, n = i("./node_modules/brcast/dist/brcast.es.js"),
				o = i("./node_modules/lodash/findKey.js"),
				a = i.n(o);
			! function(e) {
				e.Hidden = "hidden", e.Visible = "visible"
			}(s || (s = {}));
			const r = {
				hidden: "visibilitychange",
				webkitHidden: "webkitvisibilitychange",
				mozHidden: "mozvisibilitychange",
				msHidden: "msvisibilitychange"
			};
			let d = !1;
			const l = Object(n.a)({
				documentInFocus: !0
			});
			! function() {
				if (!d) {
					const e = a()(r, (e, t) => void 0 !== document[t]);
					e && document.addEventListener(r[e], () => {
						l.setState({
							documentInFocus: document.visibilityState !== s.Hidden
						})
					}), d = !0
				}
			}(), t.a = {
				subscribe: e => {
					return l.subscribe(e)
				},
				unsubscribe: e => {
					l.unsubscribe(e)
				}
			}
		},
		"./src/reddit/components/AdViewabilityMRC/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/lodash/isEqual.js"),
				n = i.n(s),
				o = i("./node_modules/react/index.js"),
				a = i.n(o),
				r = i("./node_modules/reselect/es/index.js"),
				d = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				l = i("./src/reddit/connectors/PostViewable/index.ts"),
				c = i("./src/reddit/constants/viewabilityEvents.ts"),
				h = i("./src/reddit/selectors/media.ts"),
				m = i("./src/reddit/selectors/video.ts");
			const u = .5,
				p = .8,
				b = 1,
				g = 2e3,
				w = 15e3,
				f = [u, p, b],
				v = e => "boolean" == typeof e.cumulative,
				x = Object(r.c)({
					buffering: (e, t) => {
						let {
							post: i
						} = t;
						return Object(m.a)(e, {
							postId: i.id
						})
					},
					playing: (e, t) => {
						let {
							post: i
						} = t;
						return Object(m.e)(e, {
							postId: i.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: i
						} = t;
						return Object(m.c)(e, {
							postId: i.id
						})
					},
					videoDuration: (e, t) => {
						let {
							post: i
						} = t;
						const s = Object(m.g)(e, {
							postId: i.id
						});
						if (s) return s.length
					},
					isAudible: e => !Object(h.a)(e) && !!Object(h.b)(e)
				}),
				y = Object(l.a)(x);
			class E extends o.Component {
				constructor(e) {
					super(e), this.mrcVideoViewable = {
						timer: null,
						event: c.a.MRCVideoViewableImpression,
						threshold: u,
						viewabilityMinimum: g,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: g,
						timeViewingInterrupted: 0
					}, this.videoGroupMViewable = {
						timer: null,
						event: c.a.VideoGroupMViewable,
						threshold: void 0,
						viewabilityMinimum: g,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: g,
						timeViewingInterrupted: 0,
						cumulative: !0,
						cumulativeElapsedTime: 0
					}, this.videoVendorFullyViewable50 = {
						timer: null,
						event: c.a.VideoVendorFullyViewable50,
						threshold: b,
						viewabilityMinimum: void 0,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: void 0,
						timeViewingInterrupted: 0,
						cumulative: !0,
						cumulativeElapsedTime: 0
					}, this.handleViewabilityChange = e => {
						this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						n()(this.state.event, e) || this.setState({
							event: e
						}), !this.props.buffering && this.props.playing && (this.checkViewability(e, this.mrcVideoViewable), this.checkViewability(e, this.videoVendorFullyViewable50), this.props.isAudible && this.checkViewability(e, this.videoGroupMViewable))
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					}
				}
				componentDidUpdate() {
					this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (!this.props.buffering && this.props.playing && this.props.isAudible || this.pauseCumulativeStats(this.videoGroupMViewable), this.props.buffering || !this.props.playing ? (this.pauseViewableStats(this.mrcVideoViewable), this.pauseCumulativeStats(this.videoVendorFullyViewable50)) : this.checkViewabilityByType(this.state.event)) : this.resetTimers()
				}
				resetTimers() {
					this.resetTimer(this.mrcVideoViewable), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e.timer), e.timer = null, e.timeViewingInitialized = 0, void 0 !== e.viewabilityMinimum && (e.remainingTime = e.viewabilityMinimum)
				}
				pauseViewableStats(e) {
					let t;
					if (!e.timer || e.fired || void 0 === e.viewabilityMinimum) return;
					e.timeViewingInterrupted = Date.now();
					const i = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = e.viewabilityMinimum - i, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e.timer)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && void 0 !== e.viewabilityMinimum && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = e.viewabilityMinimum - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e.timer))
				}
				isAdequatelyInView(e, t) {
					return !!e && e.isIntersecting && e.intersectionRatio >= t
				}
				setViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, w) : e.viewabilityMinimum = w, e.remainingTime = e.viewabilityMinimum
				}
				checkViewability(e, t) {
					if (v(t) && void 0 === t.remainingTime && this.setViewabilityMinimum(t), !t.threshold && e && this.props.videoDuration) {
						const {
							height: i,
							width: s
						} = e.boundingClientRect;
						t.threshold = s * i < 3e5 ? b : p, t.viewabilityMinimum = .5 * this.props.videoDuration
					}
					if (t.threshold) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						v(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t.timer)
					}
				}
				clearTimer(e) {
					e && clearTimeout(e)
				}
				getLengthForTimer(e) {
					return void 0 !== e.remainingTime ? e.remainingTime : e.viewabilityMinimum || 0
				}
				fireStat(e) {
					setTimeout(() => this.props.onPostViewable(this.props.post, e.event), 0), e.fired = !0
				}
				initTimer(e, t) {
					this.clearTimer(e.timer), e.timer = window.setTimeout(() => {
						this.fireStat(e)
					}, t)
				}
				render() {
					return a.a.createElement(d.a, {
						threshold: f,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = y(E)
		},
		"./src/reddit/components/Media/RichTextContainer/index.m.less": function(e, t, i) {
			e.exports = {
				richTextContainer: "Chtkt3BCZQruf0LtmFg2c",
				richTextContainerTitleOnly: "_2XNPI46MXRfDdsSoDqaksI",
				richTextContainerFull: "_3xX726aBn29LDbsDtzr_6E",
				placeholder: "_1aLU7RPNLdvfcbaNdcN11x",
				placeholderParagraph: "Owi9iYzjyVpDq_0YbCdJY"
			}
		},
		"./src/reddit/components/Media/RichTextContainer/index.tsx": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.symbol.js");
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				o = i("./src/lib/classNames/index.ts"),
				a = i("./src/reddit/constants/componentSizes.ts"),
				r = i("./src/reddit/models/Media/index.ts"),
				d = i("./node_modules/react-redux/es/index.js"),
				l = i("./src/reddit/actions/post.ts"),
				c = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				h = i("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				m = i.n(h);
			class u extends n.a.Component {
				componentDidMount() {
					this.loadRichTextContentIfNeeded()
				}
				loadRichTextContentIfNeeded() {
					this.props.canLoadContent && this.props.isExpando && this.props.onLoadRichTextContentIfNeeded(this.props.postId)
				}
				render() {
					const e = Object(c.a)({
						isLoading: !0
					});
					return n.a.createElement("div", {
						className: m.a.placeholder
					}, [1, 2, 3].map(t => n.a.createElement("div", {
						key: t,
						className: m.a.placeholderParagraph
					}, n.a.createElement("div", {
						className: e
					}), n.a.createElement("div", {
						className: e
					}), n.a.createElement("div", {
						className: e
					}))))
				}
			}
			var p = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(l.A)(t))
			}))(u);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var i = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]])
				}
				return i
			};
			t.a = e => {
				var {
					canLoadContent: t,
					children: i,
					className: s,
					isCommentsPage: d,
					isMediumHeight: l,
					isRichTextTruncated: c,
					isExpando: h,
					isTitleOnly: u,
					postId: w,
					showFull: f
				} = e, v = g(e, ["canLoadContent", "children", "className", "isCommentsPage", "isMediumHeight", "isRichTextTruncated", "isExpando", "isTitleOnly", "postId", "showFull"]);
				const x = {
						[m.a.richTextContainerFull]: f,
						[m.a.richTextContainerTitleOnly]: u && !f,
						[m.a.richTextContainer]: !f && !u
					},
					y = {};
				f || (y.maxHeight = "".concat(u ? r.l : l ? r.k : r.j, "px")), d && (y.maxWidth = "".concat(a.d, "px"));
				const E = c && f;
				return n.a.createElement("div", b({
					className: Object(o.a)(x, s),
					style: y
				}, v), i, E && n.a.createElement(p, {
					canLoadContent: !!t,
					isExpando: h,
					postId: w
				}))
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.m.less": function(e, t, i) {
			e.exports = {
				tweetPlaceholder: "q0jsD_ZcQRuuUQzXawr8J",
				tweetEmbedBox: "_3pYTJO5FjsoQWRUsIFQASN",
				isInvisible: "_3xICr9rbunMOudN40P1GgI",
				tweetDeleted: "sIgL7k1Lz6YLL146KNk8k",
				seeMore: "_2f5uYHvlfzs2DngQsiCdvB"
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return x
			}));
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				o = i("./src/lib/classNames/index.ts"),
				a = i("./src/lib/intersectionObserver/index.ts"),
				r = i("./src/reddit/components/Media/constants.ts"),
				d = i("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = i("./src/reddit/components/Media/MediaContainer/index.tsx"),
				c = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				h = i("./src/reddit/i18n/components.tsx"),
				m = i("./src/reddit/i18n/utils.ts"),
				u = i("./src/reddit/models/Media/index.ts"),
				p = i("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				b = i.n(p);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = 350,
				f = 100,
				v = 300;
			class x extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isFullyLoaded: !1
					}, this.iframe = null, this.onWindowMessage = e => {
						!this.state.isFullyLoaded && this.iframe && this.iframe.contentWindow === e.source && "tweet-measured" === e.data.action && this.setState({
							isFullyLoaded: !0
						})
					}, this.embedBoxChildRef = e => {
						this.iframe = e, e && a.a(e, (t, i) => {
							e && e.contentWindow && !this.props.media.height && i && e.contentWindow.postMessage("twitter-measure-requested", r.a)
						}), this.props.embedBoxChildRef(e)
					}
				}
				componentDidMount() {
					window.addEventListener("message", this.onWindowMessage)
				}
				componentWillUnmount() {
					this.iframe && a.b(this.iframe), window.removeEventListener("message", this.onWindowMessage)
				}
				render() {
					const {
						canLoadContent: e,
						media: t,
						mediaContainerProps: i,
						onIframeLoaded: s,
						source: a,
						title: r
					} = this.props, {
						isFullyLoaded: p
					} = this.state, x = i.height || (t.isDeleted ? f : v);
					return n.a.createElement(l.a, g({}, i, {
						alwaysWrapMedia: !0,
						height: x,
						showFull: !i.isListing,
						width: w
					}), e && n.a.createElement(n.a.Fragment, null, (!i.height || !p) && (t.isDeleted ? n.a.createElement("p", {
						className: b.a.tweetDeleted
					}, Object(m.c)("This Tweet has been deleted.")) : n.a.createElement("div", {
						className: Object(o.a)(Object(c.a)({
							isLoading: !0
						}), b.a.tweetPlaceholder)
					})), n.a.createElement(d.a, {
						childRef: this.embedBoxChildRef,
						className: Object(o.a)(b.a.tweetEmbedBox, {
							[b.a.isInvisible]: !i.height || !p
						}),
						height: x,
						isListing: i.isListing,
						isResponsive: !0,
						maxHeight: i.isListing ? u.i : null,
						onLoad: s,
						showCentered: i.showCentered,
						showFull: !0,
						source: a,
						title: r,
						width: w
					}), i.isListing && x > u.i && n.a.createElement("div", {
						className: b.a.seeMore
					}, n.a.createElement(h.c, null, "see full tweet"))))
				}
			}
		},
		"./src/reddit/components/Media/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			const s = "https://www.redditmedia.com"
		},
		"./src/reddit/components/Media/getResolution.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return o
			})), i.d(t, "c", (function() {
				return a
			})), i.d(t, "a", (function() {
				return r
			}));
			var s = i("./src/reddit/models/Media/index.ts");
			const n = (e, t, i, s) => {
					const n = e / t,
						o = i / s;
					return Math.abs(n - o) < .03
				},
				o = (e, t) => {
					for (let i = 0; i < t.length; i++) {
						const s = t[i];
						if (s.width >= e) return s
					}
				},
				a = (e, t, i) => {
					for (let o = 0; o < i.length; o++) {
						const a = i[o];
						if (a.width >= s.e / 2 && n(e, t, a.height, a.width)) return a
					}
				},
				r = e => {
					for (let t = 0; t < e.length; t++) {
						const i = e[t];
						if (i.height >= s.e || i.width >= s.f) return i
					}
				}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, i) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4"
			}
		},
		"./src/reddit/components/Media/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/core-js/modules/web.dom.iterable.js"),
				n = i.n(s),
				o = i("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = i("./node_modules/lodash/debounce.js"),
				r = i.n(a),
				d = i("./node_modules/react/index.js"),
				l = i.n(d),
				c = i("./node_modules/react-redux/es/index.js"),
				h = i("./node_modules/reselect/es/index.js"),
				m = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = i("./src/lib/env/index.ts"),
				p = i("./src/lib/isUrl/index.ts"),
				b = i("./src/lib/objectSelector/index.ts"),
				g = i("./src/lib/onFocusAndVisibilityChange/index.ts"),
				w = i("./src/lib/sentry/index.ts"),
				f = i("./src/reddit/components/AdViewabilityMRC/index.tsx"),
				v = i("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				x = i("./src/reddit/components/Media/constants.ts"),
				y = i("./src/reddit/components/Media/EmbedBox/index.tsx"),
				E = i("./src/reddit/components/Media/ImageBox/index.tsx"),
				C = i("./src/reddit/components/Media/MediaContainer/index.tsx"),
				M = i("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				S = i("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				V = i("./src/reddit/components/Media/VideoBox/index.tsx"),
				T = i("./src/reddit/components/PlayButton/index.tsx"),
				I = i("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				O = i("./src/reddit/components/RichTextJson/index.tsx"),
				L = i("./src/reddit/constants/componentSizes.ts"),
				j = i("./src/reddit/constants/screenWidths.ts"),
				P = i("./src/reddit/contexts/PageLayer/index.tsx"),
				N = i("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				D = i("./src/reddit/helpers/getRichTextContent/index.ts"),
				F = i("./src/reddit/helpers/name/index.ts"),
				R = i("./src/reddit/helpers/postHasSelfText/index.ts"),
				W = i("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				B = i("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				A = i("./src/reddit/models/Media/index.ts"),
				_ = i("./src/reddit/selectors/experiments/postSeo.ts"),
				H = i("./src/reddit/selectors/posts.ts"),
				k = i("./src/reddit/components/Media/getResolution.ts"),
				U = i("./src/reddit/components/Media/index.m.less"),
				z = i.n(U);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const q = Object(o.a)({
					resolved: {},
					chunkName: () => "LiveVideoPlayer",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!i.m[t]
					},
					importAsync: () => Promise.all([i.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), i.e("LiveVideoPlayer")]).then(i.bind(null, "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return i(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx"
					}
				}, {
					ssr: !1
				}),
				J = 1200,
				Q = 75,
				Y = "player.js",
				X = L.r + L.q,
				K = e => e.isVisible ? e.children : l.a.createElement("div", {
					className: z.a.displayNone
				}, e.children),
				Z = new Set([A.n.EMBED, A.n.GIFVIDEO, A.n.LIVEVIDEO, A.n.VIDEO]),
				$ = e => !!e.media && Z.has(e.media.type),
				ee = new Set([A.n.EMBED, A.n.GIFVIDEO, A.n.IMAGE, A.n.LIVEVIDEO, A.n.VIDEO]),
				te = e => {
					let {
						post: t
					} = e;
					return !!t.media && ee.has(t.media.type)
				},
				ie = Object(P.t)(),
				se = Object(h.c)({
					isPostImageAltTextVariant: _.b,
					subredditOrProfileDisplayText: (e, t) => {
						let {
							post: i
						} = t;
						const s = Object(H.Y)(e, i);
						return s && s.displayText || i && i.author && Object(F.c)(i.author)
					}
				}),
				ne = Object(c.b)(se),
				oe = Object(b.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class ae extends l.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && A.d.has(e.type)) {
							if (this.iframe) {
								const t = e.type === A.n.EMBED ? e.provider : null;
								this.pauseEmbed(this.iframe, t)
							}
							this.setState(e => e.shouldStop ? null : {
								shouldStop: !0
							})
						}
					}, this.handleVisibilityChange = e => {
						const {
							shouldPause: t
						} = this.state, {
							autoplayPref: i
						} = this.props;
						this.iframe && (t || !i && e.documentInFocus || this.toggleEmbedAutoplay(this.iframe, !e.documentInFocus)), this.setState({
							forcePause: !e.documentInFocus
						})
					}, this.focusContent = () => {
						this.shouldFocusContentDebouncer(!0)
					}, this.loadContent = () => {
						this.setState(e => e.canLoadContent ? null : {
							canLoadContent: !0
						})
					}, this.unmountContent = () => {}, this.contentIsHeavyToMount = () => {
						const {
							media: e
						} = this.props.post;
						return !!e && A.d.has(e.type)
					}, this.shouldFocusContentDebouncer = r()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: i
						} = this.props;
						if (t && A.d.has(t.type)) {
							if (this.iframe) {
								const s = t.type === A.n.EMBED ? t.provider : null;
								s && !A.q.has(s) ? !i && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, s)
							}
							e ? this.setState(e => e.shouldPause || !e.canLoadContent ? {
								canLoadContent: !0,
								shouldPause: !1,
								shouldStop: !1
							} : null) : this.setState(e => e.shouldPause ? null : {
								shouldPause: !0
							})
						}
					}, 250, {
						leading: !0
					}), this.toggleEmbedAutoplay = (e, t) => {
						if (e.contentWindow) {
							const i = t ? A.g.Pause : A.g.Play;
							e.contentWindow.postMessage({
								context: Y,
								method: i
							}, x.a), e.contentWindow.postMessage({
								context: Y,
								method: A.g.Mute
							}, x.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === A.t.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: A.x.Pause
						}), x.a) : e.contentWindow.postMessage({
							context: Y,
							method: A.g.Pause
						}, x.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, i = e && e.type === A.n.EMBED ? e.provider : null;
						if (this.iframe && i && !A.q.has(i)) {
							const {
								shouldPause: e
							} = this.state;
							(t || e) && this.toggleEmbedAutoplay(this.iframe, e)
						}
					}, this.onImageBoxClick = e => {
						this.props.isListing || !this.shouldBlur() || this.state.isRevealed || (this.setState({
							isRevealed: !0
						}), e.preventDefault(), e.stopPropagation())
					}, this.storeChildRef = e => {
						this.iframe = e
					}, this.updateDimensions = () => {
						this.setState({
							viewportHeight: window.innerHeight,
							viewportWidth: window.innerWidth
						})
					}, this.isSpoiler = () => this.props.post.isSpoiler || !(!this.props.crosspost || !this.props.crosspost.isSpoiler), this.isNSFW = () => this.props.post.isNSFW || !(!this.props.crosspost || !this.props.crosspost.isNSFW), this.state = {
						canLoadContent: e.shouldLoad || !1,
						forcePause: !1,
						isRevealed: !1,
						shouldPause: void 0 === e.shouldPause || e.shouldPause,
						shouldStop: void 0 === e.shouldStop || e.shouldStop,
						viewportHeight: A.e,
						viewportWidth: A.f
					}
				}
				componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					$(this.props.post) && (this.visibilityChangeSubscriptionId = g.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && te(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && g.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && te(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(A.i, this.state.viewportHeight),
						i = Math.min(J, 16 * t / 9);
					i === J && (t = 9 * J / 16), e = this.state.viewportWidth >= j.c ? this.state.viewportWidth < L.l ? this.state.viewportWidth - X - 2 * Q : this.state.viewportWidth - X - L.e - 2 * Q : this.state.viewportWidth - 2 * Q;
					const s = this.state.viewportHeight - 2 * Q;
					if (i > e) {
						t *= e / i, i = e
					} else if (t > s) {
						const e = s / t;
						t = s, i *= e
					}
					return {
						maxVideoHeight: t,
						maxVideoWidth: i
					}
				}
				getVideoMaxDimensions(e, t) {
					let i = A.i,
						s = A.m;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (i = A.r, s = A.s), {
						maxVideoHeight: i,
						maxVideoWidth: s
					})
				}
				getMediaInfo(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
					const {
						availableWidth: i,
						post: s
					} = e;
					if (Object(A.C)(s.media)) return {
						source: s.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * Q,
						height: this.state.viewportHeight - 2 * Q
					};
					const n = s.media && s.media.obfuscated || "";
					let o = s.media && !Object(A.F)(s.media) ? s.media.content : "",
						[a, r] = !s.media || Object(A.D)(s.media) || Object(A.E)(s.media) ? [0, 0] : [s.media.height, s.media.width];
					if (i && s.media && (s.media.type === A.n.IMAGE || s.media.type === A.n.GIFVIDEO)) {
						const e = k.b(i, s.media.resolutions);
						e && (o = e.url, r = e.width, a = e.height)
					} else if (s && s.media && (!e.isListing || e.isExpando) && (s.media.type === A.n.IMAGE || s.media.type === A.n.GIFVIDEO)) {
						let e;
						(e = Object(E.b)(s.media.height, s.media.width) && Object(E.c)(s.media.height) ? k.c(s.media.height, s.media.width, s.media.resolutions) : k.a(s.media.resolutions)) && (o = e.url, r = e.width, a = e.height)
					}
					if (e.isExpando)
						if (r > t.viewportWidth) {
							a *= t.viewportWidth / r, r = t.viewportWidth
						} else if (a > t.viewportHeight) {
						const e = t.viewportHeight / a;
						a = t.viewportHeight, r *= e
					}
					const {
						maxVideoHeight: d,
						maxVideoWidth: l
					} = this.getVideoMaxDimensions(e, t);
					if (s.media && s.media.type === A.n.VIDEO) {
						const t = a / r;
						e.isExpando ? (a = d, r = l) : t > A.c ? (a = d, r = Math.min(Math.max(d / t, A.p), l)) : (a = Math.min(Math.max(l * t, A.o), d), r = l)
					}
					s.media && s.media.type === A.n.EMBED && e.isExpando && s.media.provider !== A.t.Twitter && (a = d, r = l);
					let c = !1;
					if (e.isMiniCard) {
						const e = a / r;
						c = Math.abs(e - A.c) > .01
					}
					return {
						source: o,
						obfuscated: n,
						width: r,
						height: a,
						needsBackgroundBlur: c
					}
				}
				shouldBlur() {
					const {
						isExpando: e,
						isOverlay: t,
						theme: i
					} = this.props, s = this.isNSFW(), n = this.isSpoiler();
					return !(e || this.state.isRevealed || t) && (s && !i.subredditContext.shouldShowNSFWContent || n)
				}
				render() {
					const {
						className: e,
						crosspost: t,
						flairStyleTemplate: i,
						forceAspectRatio: s,
						isCommentsPage: n,
						isExpando: o,
						isListing: a,
						isNotCardView: r,
						isMediumHeight: d,
						isTitleOnly: c,
						post: h,
						showCentered: m,
						showFull: b = !1,
						isPostImageAltTextVariant: g,
						subredditOrProfileDisplayText: x
					} = this.props, {
						canLoadContent: L,
						forcePause: j,
						shouldPause: P,
						shouldStop: F,
						viewportWidth: _
					} = this.state;
					if (!h.media) return null;
					const H = j || P,
						k = F,
						{
							source: U,
							obfuscated: J,
							height: Y,
							width: X,
							needsBackgroundBlur: Z
						} = this.getMediaInfo(this.props, this.state),
						$ = {
							showCentered: m,
							isListing: a,
							showFull: b,
							height: Y,
							width: X
						},
						ee = Object.assign({}, $, {
							className: e,
							forceAspectRatio: s,
							viewportWidth: _
						}),
						te = this.shouldBlur(),
						ie = !(!h.isSponsored || !h.source);
					if (J && te) return l.a.createElement(C.a, G({}, ee, {
						blurSrc: J
					}), l.a.createElement(K, {
						isVisible: L
					}, l.a.createElement(E.a, G({}, $, {
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: a,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!h.media && h.media.type === A.n.VIDEO,
						onClick: this.onImageBoxClick,
						postId: h.id,
						shouldBlur: te,
						source: J,
						outboundUrl: ie && h.source.outboundUrl || void 0,
						originalSource: U
					}))));
					if (!h.media) return null;
					switch (h.media.type) {
						case A.n.RTJSON:
							const s = Object(D.a)(h, null);
							if (null === s) return;
							return b || Object(N.a)(h) ? l.a.createElement(M.a, {
								canLoadContent: L,
								className: e,
								"data-click-id": "text",
								isCommentsPage: n,
								isExpando: o,
								isMediumHeight: d,
								isRichTextTruncated: h.media.isRichtextPreview,
								isTitleOnly: c,
								postId: h.id,
								showFull: b
							}, l.a.createElement(O.a, {
								flairStyleTemplate: i,
								content: h.isMeta ? Object(B.a)(s, h.id) : s,
								mediaMetadata: h.media.mediaMetadata,
								postId: h.id,
								rtJsonElementProps: oe(this.props),
								renderMediaAsLinks: a
							})) : null;
						case A.n.TEXT:
							if (Object(R.a)(h)) {
								const t = "Text post should not include body content";
								return w.c.withScope(e => {
									e.setExtra("info", {
										post: h,
										isListing: a,
										isCommentsPage: n
									}), w.c.captureMessage(t)
								}), Object(u.a)() && console.log("".concat(h.id, ": ").concat(t)), l.a.createElement(M.a, {
									postId: h.id,
									className: e,
									"data-click-id": "text",
									isCommentsPage: n,
									showFull: b
								}, l.a.createElement(I.a, {
									flairStyleTemplate: i,
									html: h.isMeta ? Object(W.a)(h.media.content, h.id, z.a.hiddenLink) : h.media.content
								}))
							}
							return null;
						case A.n.EMBED:
							return this.props.isMiniCard && h.preview && h.preview.url ? l.a.createElement(C.a, G({}, ee, {
								alwaysWrapMedia: !0
							}), l.a.createElement(K, {
								isVisible: L
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(E.a, G({}, $, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: h.id,
								shouldBlur: te,
								source: h.preview.url,
								originalSource: h.preview.url
							})), l.a.createElement(T.a, null)))) : A.h.has(h.media.provider) ? h.media.provider === A.t.Twitter ? l.a.createElement(S.a, {
								canLoadContent: L,
								embedBoxChildRef: this.storeChildRef,
								media: h.media,
								mediaContainerProps: ee,
								onIframeLoaded: this.onIframeLoaded,
								source: U,
								title: h.title
							}) : l.a.createElement(C.a, G({}, ee, {
								alwaysWrapMedia: !0,
								height: o ? Y : A.i,
								width: o ? X : A.i * (16 / 9)
							}), L && l.a.createElement(y.a, {
								childRef: this.storeChildRef,
								height: o ? Y : A.i,
								width: o ? X : void 0,
								isListing: a,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: m,
								showFull: b,
								source: U,
								title: h.title
							})) : l.a.createElement(C.a, G({}, ee, {
								alwaysWrapMedia: !0
							}), L && l.a.createElement(y.a, G({}, $, {
								isResponsive: o || h.media.provider === A.t.IFrameEmbed,
								title: h.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: U,
								fullWidth: h.media.provider === A.t.IFrameEmbed
							})));
						case A.n.GIFVIDEO: {
							let e = Y,
								t = X;
							return e > A.i && (t = X / Y * (e = A.i)), l.a.createElement(C.a, G({}, ee, {
								blurSrc: Z ? h.media.gifBackgroundImage : void 0
							}), l.a.createElement(K, {
								isVisible: L
							}, l.a.createElement(V.a, G({}, $, {
								isNotCardView: r,
								height: o ? void 0 : e,
								width: o ? void 0 : t,
								postId: h.id,
								shouldLoad: !0,
								shouldPause: H,
								source: U,
								originalSource: h.media.content
							}))))
						}
						case A.n.VIDEO: {
							const e = h.media.posterUrl || h.preview && h.preview.url;
							if (this.props.isMiniCard && e) return l.a.createElement(C.a, G({}, ee, {
								alwaysWrapMedia: !0
							}), l.a.createElement(K, {
								isVisible: L
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(E.a, G({}, $, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: h.id,
								shouldBlur: te,
								source: e,
								originalSource: e
							})), l.a.createElement(T.a, null))));
							const i = l.a.createElement(C.a, G({}, ee, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), L && l.a.createElement(v.b, {
								autoPlay: "boolean" == typeof P ? !P : void 0,
								isExpando: o,
								shouldLoad: !0,
								shouldPause: H,
								shouldStop: k,
								hlsSource: h.media.hlsUrl,
								mpegDashSource: h.media.dashUrl,
								isGif: h.media.isGif,
								scrubberThumbSource: h.media.scrubberThumbSource,
								postId: h.id,
								callToActionSource: h.source || void 0,
								callToActionText: h.callToAction,
								isListing: a,
								posterUrl: h.media.posterUrl
							}));
							return h.isSponsored ? l.a.createElement(f.a, {
								post: h
							}, i) : i
						}
						case A.n.LIVEVIDEO:
							return l.a.createElement(C.a, G({}, ee, {
								isExpando: !!o
							}), l.a.createElement(K, {
								isVisible: L
							}, l.a.createElement(q, {
								canLoad: L,
								isExpando: !!o,
								posterUrl: h.media.scrubberThumbSource,
								shouldPause: H,
								url: h.media.hlsUrl
							})));
						case A.n.IMAGE:
							const j = this.state.viewportHeight - 2 * Q,
								F = this.state.viewportWidth - 2 * Q;
							let _, J = U;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (h.thumbnail && Object(p.a)(h.thumbnail.url) ? J = h.thumbnail.url : h.preview && Object(p.a)(h.preview.url) && (J = h.preview.url)), g && (_ = x ? "".concat(x, " - ").concat(h.title) : h.title), l.a.createElement(C.a, G({}, ee, {
								blurSrc: Z ? J : void 0,
								isExpando: !!o
							}), l.a.createElement(K, {
								isVisible: L
							}, l.a.createElement(E.a, G({}, $, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: o ? j : void 0,
								maxWidth: o ? F : void 0,
								postId: h.id,
								shouldBlur: te,
								source: J,
								outboundUrl: ie && h.source.outboundUrl || void 0,
								originalSource: h.media.content,
								altText: _
							}))));
						default:
							return null
					}
				}
			}
			t.a = ie(ne(Object(m.a)(ae)))
		},
		"./src/reddit/components/RawHTMLDisplay/Media.tsx": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.symbol.js");
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				o = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = i("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = i("./src/reddit/helpers/styles/smartTextColor.ts"),
				d = i("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			var c = function(e, t) {
				var i = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]])
				}
				return i
			};
			t.a = Object(o.a)(e => {
				var {
					flairStyleTemplate: t
				} = e, i = c(e, ["flairStyleTemplate"]);
				return n.a.createElement(d.a, l({
					style: {
						color: Object(r.a)(Object(a.a)(Object.assign({
							flairStyleTemplate: t
						}, i)))
					}
				}, i))
			})
		},
		"./src/reddit/helpers/canPreviewSelfText/index.ts": function(e, t, i) {
			"use strict";
			var s = i("./src/reddit/helpers/postHasSelfText/index.ts");
			t.a = e => Object(s.a)(e) && !e.isSpoiler && !e.isNSFW
		},
		"./src/reddit/helpers/postHasSelfText/index.ts": function(e, t, i) {
			"use strict";
			var s = i("./src/reddit/models/Media/index.ts"),
				n = i("./src/reddit/models/RichTextJson/index.ts");
			t.a = e => {
				const t = e && e.media;
				return !!t && (t.type === s.n.TEXT && !!t.content || t.type === s.n.RTJSON && !Object(n.F)(t.richtextContent))
			}
		},
		"./src/reddit/helpers/stripMetaLinks/fromRTJ.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			var s = i("./src/lib/redditId/index.ts");

			function n(e, t) {
				const i = function e(t, i) {
					let s = !1;
					let n = [];
					try {
						for (const o of t)
							if ("link" === o.e && o.u && o.u.includes("https://www.reddit.com/poll/".concat(i))) s = !0;
							else if (o.c && "string" != typeof o.c) {
							const t = e(o.c, i);
							t.found ? (s = !0, ("par" !== o.e || t.updated.length) && n.push(Object.assign({}, o, {
								c: t.updated
							}))) : n.push(o)
						} else n.push(o)
					} catch (o) {
						s = !1, n = []
					}
					return {
						found: s,
						updated: s ? n : t
					}
				}(e.document, Object(s.c)(t));
				return i.found ? {
					document: i.updated
				} : e
			}
		},
		"./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			i("./node_modules/core-js/modules/es6.regexp.replace.js");
			var s = i("./src/lib/redditId/index.ts");

			function n(e, t, i) {
				return e.replace('href="https://www.reddit.com/poll/'.concat(Object(s.c)(t)), 'class="'.concat(i, '" href="https://www.reddit.com/poll/').concat(Object(s.c)(t)))
			}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf.9eb9f0ddc069682edffb.js.map