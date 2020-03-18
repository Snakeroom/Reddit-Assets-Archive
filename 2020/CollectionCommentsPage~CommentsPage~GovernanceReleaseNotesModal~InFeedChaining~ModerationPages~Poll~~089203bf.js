// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf.4fde5907f0e9e859b754.js
// Retrieved at 3/18/2020, 2:40:05 PM by Reddit Dataminer v1.0.0
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
			const c = Object(n.a)({
				documentInFocus: !0
			});
			! function() {
				if (!d) {
					const e = a()(r, (e, t) => void 0 !== document[t]);
					e && document.addEventListener(r[e], () => {
						c.setState({
							documentInFocus: document.visibilityState !== s.Hidden
						})
					}), d = !0
				}
			}(), t.a = {
				subscribe: e => {
					return c.subscribe(e)
				},
				unsubscribe: e => {
					c.unsubscribe(e)
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
				c = i("./src/reddit/connectors/PostViewable/index.ts"),
				l = i("./src/reddit/constants/viewabilityEvents.ts"),
				h = i("./src/reddit/selectors/video.ts");
			const m = .5,
				p = 2e3,
				u = Object(r.c)({
					buffering: (e, t) => {
						let {
							post: i
						} = t;
						return Object(h.a)(e, {
							postId: i.id
						})
					},
					playing: (e, t) => {
						let {
							post: i
						} = t;
						return Object(h.e)(e, {
							postId: i.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: i
						} = t;
						return Object(h.c)(e, {
							postId: i.id
						})
					}
				}),
				b = Object(c.a)(u);
			class g extends o.Component {
				constructor(e) {
					super(e), this.mrcVideoViewable = {
						timer: null,
						event: l.a.MRCVideoViewableImpression,
						threshold: m,
						viewabilityMinimum: p,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: p,
						timeViewingInterrupted: 0
					}, this.handleViewabilityChange = e => {
						this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						n()(this.state.event, e) || this.setState({
							event: e
						}), !this.props.buffering && this.props.playing && this.checkViewability(e, this.mrcVideoViewable)
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					}
				}
				componentDidUpdate() {
					this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? this.props.buffering || !this.props.playing ? this.pauseViewableStats(this.mrcVideoViewable) : this.checkViewabilityByType(this.state.event) : this.resetTimers()
				}
				resetTimers() {
					this.resetTimer(this.mrcVideoViewable), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e.timer), e.timer = null, e.timeViewingInitialized = 0, e.remainingTime = e.viewabilityMinimum
				}
				pauseViewableStats(e) {
					let t;
					if (!e.timer || e.fired) return;
					e.timeViewingInterrupted = Date.now();
					const i = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = e.viewabilityMinimum - i, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e.timer)
				}
				isAdequatelyInView(e, t) {
					return !!e && e.isIntersecting && e.intersectionRatio >= t
				}
				checkViewability(e, t) {
					if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
						const e = this.getLengthForTimer(t);
						return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
					}
					this.clearTimer(t.timer)
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
						threshold: m,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = b(g)
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
				c = i("./src/reddit/actions/post.ts"),
				l = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				h = i("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				m = i.n(h);
			class p extends n.a.Component {
				componentDidMount() {
					this.loadRichTextContentIfNeeded()
				}
				loadRichTextContentIfNeeded() {
					this.props.canLoadContent && this.props.isExpando && this.props.onLoadRichTextContentIfNeeded(this.props.postId)
				}
				render() {
					const e = Object(l.a)({
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
			var u = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(c.A)(t))
			}))(p);

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
					isMediumHeight: c,
					isRichTextTruncated: l,
					isExpando: h,
					isTitleOnly: p,
					postId: f,
					showFull: w
				} = e, x = g(e, ["canLoadContent", "children", "className", "isCommentsPage", "isMediumHeight", "isRichTextTruncated", "isExpando", "isTitleOnly", "postId", "showFull"]);
				const v = {
						[m.a.richTextContainerFull]: w,
						[m.a.richTextContainerTitleOnly]: p && !w,
						[m.a.richTextContainer]: !w && !p
					},
					y = {};
				w || (y.maxHeight = "".concat(p ? r.l : c ? r.k : r.j, "px")), d && (y.maxWidth = "".concat(a.d, "px"));
				const E = l && w;
				return n.a.createElement("div", b({
					className: Object(o.a)(v, s),
					style: y
				}, x), i, E && n.a.createElement(u, {
					canLoadContent: !!t,
					isExpando: h,
					postId: f
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
				return v
			}));
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				o = i("./src/lib/classNames/index.ts"),
				a = i("./src/lib/intersectionObserver/index.ts"),
				r = i("./src/reddit/components/Media/constants.ts"),
				d = i("./src/reddit/components/Media/EmbedBox/index.tsx"),
				c = i("./src/reddit/components/Media/MediaContainer/index.tsx"),
				l = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				h = i("./src/reddit/i18n/components.tsx"),
				m = i("./src/reddit/i18n/utils.ts"),
				p = i("./src/reddit/models/Media/index.ts"),
				u = i("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				b = i.n(u);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = 350,
				w = 100,
				x = 300;
			class v extends n.a.Component {
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
						isFullyLoaded: u
					} = this.state, v = i.height || (t.isDeleted ? w : x);
					return n.a.createElement(c.a, g({}, i, {
						alwaysWrapMedia: !0,
						height: v,
						showFull: !i.isListing,
						width: f
					}), e && n.a.createElement(n.a.Fragment, null, (!i.height || !u) && (t.isDeleted ? n.a.createElement("p", {
						className: b.a.tweetDeleted
					}, Object(m.c)("This Tweet has been deleted.")) : n.a.createElement("div", {
						className: Object(o.a)(Object(l.a)({
							isLoading: !0
						}), b.a.tweetPlaceholder)
					})), n.a.createElement(d.a, {
						childRef: this.embedBoxChildRef,
						className: Object(o.a)(b.a.tweetEmbedBox, {
							[b.a.isInvisible]: !i.height || !u
						}),
						height: v,
						isListing: i.isListing,
						isResponsive: !0,
						maxHeight: i.isListing ? p.i : null,
						onLoad: s,
						showCentered: i.showCentered,
						showFull: !0,
						source: a,
						title: r,
						width: f
					}), i.isListing && v > p.i && n.a.createElement("div", {
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
				c = i.n(d),
				l = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				h = i("./src/lib/env/index.ts"),
				m = i("./src/lib/isUrl/index.ts"),
				p = i("./src/lib/objectSelector/index.ts"),
				u = i("./src/lib/onFocusAndVisibilityChange/index.ts"),
				b = i("./src/lib/sentry/index.ts"),
				g = i("./src/reddit/components/AdViewabilityMRC/index.tsx"),
				f = i("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				w = i("./src/reddit/components/Media/constants.ts"),
				x = i("./src/reddit/components/Media/EmbedBox/index.tsx"),
				v = i("./src/reddit/components/Media/ImageBox/index.tsx"),
				y = i("./src/reddit/components/Media/MediaContainer/index.tsx"),
				E = i("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				C = i("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				S = i("./src/reddit/components/Media/VideoBox/index.tsx"),
				M = i("./src/reddit/components/PlayButton/index.tsx"),
				I = i("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				O = i("./src/reddit/components/RichTextJson/index.tsx"),
				T = i("./src/reddit/constants/componentSizes.ts"),
				L = i("./src/reddit/constants/screenWidths.ts"),
				V = i("./src/reddit/contexts/PageLayer/index.tsx"),
				j = i("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				N = i("./src/reddit/helpers/getRichTextContent/index.ts"),
				P = i("./src/reddit/helpers/postHasSelfText/index.ts"),
				F = i("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				R = i("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				D = i("./src/reddit/models/Media/index.ts"),
				W = i("./src/reddit/components/Media/getResolution.ts"),
				B = i("./src/reddit/components/Media/index.m.less"),
				A = i.n(B);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(o.a)({
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
				k = 1200,
				U = 75,
				z = "player.js",
				G = T.r + T.q,
				q = e => e.isVisible ? e.children : c.a.createElement("div", {
					className: A.a.displayNone
				}, e.children),
				J = new Set([D.n.EMBED, D.n.GIFVIDEO, D.n.LIVEVIDEO, D.n.VIDEO]),
				Q = e => !!e.media && J.has(e.media.type),
				X = new Set([D.n.EMBED, D.n.GIFVIDEO, D.n.IMAGE, D.n.LIVEVIDEO, D.n.VIDEO]),
				Y = e => {
					let {
						post: t
					} = e;
					return !!t.media && X.has(t.media.type)
				},
				K = Object(V.t)(),
				Z = Object(p.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class $ extends c.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && D.d.has(e.type)) {
							if (this.iframe) {
								const t = e.type === D.n.EMBED ? e.provider : null;
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
						return !!e && D.d.has(e.type)
					}, this.shouldFocusContentDebouncer = r()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: i
						} = this.props;
						if (t && D.d.has(t.type)) {
							if (this.iframe) {
								const s = t.type === D.n.EMBED ? t.provider : null;
								s && !D.q.has(s) ? !i && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, s)
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
							const i = t ? D.g.Pause : D.g.Play;
							e.contentWindow.postMessage({
								context: z,
								method: i
							}, w.a), e.contentWindow.postMessage({
								context: z,
								method: D.g.Mute
							}, w.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === D.t.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: D.x.Pause
						}), w.a) : e.contentWindow.postMessage({
							context: z,
							method: D.g.Pause
						}, w.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, i = e && e.type === D.n.EMBED ? e.provider : null;
						if (this.iframe && i && !D.q.has(i)) {
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
						viewportHeight: D.e,
						viewportWidth: D.f
					}
				}
				componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					Q(this.props.post) && (this.visibilityChangeSubscriptionId = u.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && Y(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && u.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && Y(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(D.i, this.state.viewportHeight),
						i = Math.min(k, 16 * t / 9);
					i === k && (t = 9 * k / 16), e = this.state.viewportWidth >= L.c ? this.state.viewportWidth < T.l ? this.state.viewportWidth - G - 2 * U : this.state.viewportWidth - G - T.e - 2 * U : this.state.viewportWidth - 2 * U;
					const s = this.state.viewportHeight - 2 * U;
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
					let i = D.i,
						s = D.m;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (i = D.r, s = D.s), {
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
					if (Object(D.C)(s.media)) return {
						source: s.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * U,
						height: this.state.viewportHeight - 2 * U
					};
					const n = s.media && s.media.obfuscated || "";
					let o = s.media && !Object(D.F)(s.media) ? s.media.content : "",
						[a, r] = !s.media || Object(D.D)(s.media) || Object(D.E)(s.media) ? [0, 0] : [s.media.height, s.media.width];
					if (i && s.media && (s.media.type === D.n.IMAGE || s.media.type === D.n.GIFVIDEO)) {
						const e = W.b(i, s.media.resolutions);
						e && (o = e.url, r = e.width, a = e.height)
					} else if (s && s.media && (!e.isListing || e.isExpando) && (s.media.type === D.n.IMAGE || s.media.type === D.n.GIFVIDEO)) {
						let e;
						(e = Object(v.b)(s.media.height, s.media.width) && Object(v.c)(s.media.height) ? W.c(s.media.height, s.media.width, s.media.resolutions) : W.a(s.media.resolutions)) && (o = e.url, r = e.width, a = e.height)
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
						maxVideoWidth: c
					} = this.getVideoMaxDimensions(e, t);
					if (s.media && s.media.type === D.n.VIDEO) {
						const t = a / r;
						e.isExpando ? (a = d, r = c) : t > D.c ? (a = d, r = Math.min(Math.max(d / t, D.p), c)) : (a = Math.min(Math.max(c * t, D.o), d), r = c)
					}
					s.media && s.media.type === D.n.EMBED && e.isExpando && s.media.provider !== D.t.Twitter && (a = d, r = c);
					let l = !1;
					if (e.isMiniCard) {
						const e = a / r;
						l = Math.abs(e - D.c) > .01
					}
					return {
						source: o,
						obfuscated: n,
						width: r,
						height: a,
						needsBackgroundBlur: l
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
						isTitleOnly: l,
						post: p,
						showCentered: u,
						showFull: w = !1
					} = this.props, {
						canLoadContent: T,
						forcePause: L,
						shouldPause: V,
						shouldStop: W,
						viewportWidth: B
					} = this.state;
					if (!p.media) return null;
					const k = L || V,
						z = W,
						{
							source: G,
							obfuscated: J,
							height: Q,
							width: X,
							needsBackgroundBlur: Y
						} = this.getMediaInfo(this.props, this.state),
						K = {
							showCentered: u,
							isListing: a,
							showFull: w,
							height: Q,
							width: X
						},
						$ = Object.assign({}, K, {
							className: e,
							forceAspectRatio: s,
							viewportWidth: B
						}),
						ee = this.shouldBlur(),
						te = !(!p.isSponsored || !p.source);
					if (J && ee) return c.a.createElement(y.a, _({}, $, {
						blurSrc: J
					}), c.a.createElement(q, {
						isVisible: T
					}, c.a.createElement(v.a, _({}, K, {
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: a,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!p.media && p.media.type === D.n.VIDEO,
						onClick: this.onImageBoxClick,
						postId: p.id,
						shouldBlur: ee,
						source: J,
						outboundUrl: te && p.source.outboundUrl || void 0,
						originalSource: G
					}))));
					if (!p.media) return null;
					switch (p.media.type) {
						case D.n.RTJSON:
							const s = Object(N.a)(p, null);
							if (null === s) return;
							return w || Object(j.a)(p) ? c.a.createElement(E.a, {
								canLoadContent: T,
								className: e,
								"data-click-id": "text",
								isCommentsPage: n,
								isExpando: o,
								isMediumHeight: d,
								isRichTextTruncated: p.media.isRichtextPreview,
								isTitleOnly: l,
								postId: p.id,
								showFull: w
							}, c.a.createElement(O.a, {
								flairStyleTemplate: i,
								content: p.isMeta ? Object(R.a)(s, p.id) : s,
								mediaMetadata: p.media.mediaMetadata,
								postId: p.id,
								rtJsonElementProps: Z(this.props),
								renderMediaAsLinks: a
							})) : null;
						case D.n.TEXT:
							if (Object(P.a)(p)) {
								const t = "Text post should not include body content";
								return b.c.withScope(e => {
									e.setExtra("info", {
										post: p,
										isListing: a,
										isCommentsPage: n
									}), b.c.captureMessage(t)
								}), Object(h.a)() && console.log("".concat(p.id, ": ").concat(t)), c.a.createElement(E.a, {
									postId: p.id,
									className: e,
									"data-click-id": "text",
									isCommentsPage: n,
									showFull: w
								}, c.a.createElement(I.a, {
									flairStyleTemplate: i,
									html: p.isMeta ? Object(F.a)(p.media.content, p.id, A.a.hiddenLink) : p.media.content
								}))
							}
							return null;
						case D.n.EMBED:
							return this.props.isMiniCard && p.preview && p.preview.url ? c.a.createElement(y.a, _({}, $, {
								alwaysWrapMedia: !0
							}), c.a.createElement(q, {
								isVisible: T
							}, c.a.createElement(c.a.Fragment, null, c.a.createElement(v.a, _({}, K, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: p.id,
								shouldBlur: ee,
								source: p.preview.url,
								originalSource: p.preview.url
							})), c.a.createElement(M.a, null)))) : D.h.has(p.media.provider) ? p.media.provider === D.t.Twitter ? c.a.createElement(C.a, {
								canLoadContent: T,
								embedBoxChildRef: this.storeChildRef,
								media: p.media,
								mediaContainerProps: $,
								onIframeLoaded: this.onIframeLoaded,
								source: G,
								title: p.title
							}) : c.a.createElement(y.a, _({}, $, {
								alwaysWrapMedia: !0,
								height: o ? Q : D.i,
								width: o ? X : D.i * (16 / 9)
							}), T && c.a.createElement(x.a, {
								childRef: this.storeChildRef,
								height: o ? Q : D.i,
								width: o ? X : void 0,
								isListing: a,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: u,
								showFull: w,
								source: G,
								title: p.title
							})) : c.a.createElement(y.a, _({}, $, {
								alwaysWrapMedia: !0
							}), T && c.a.createElement(x.a, _({}, K, {
								isResponsive: o || p.media.provider === D.t.IFrameEmbed,
								title: p.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: G,
								fullWidth: p.media.provider === D.t.IFrameEmbed
							})));
						case D.n.GIFVIDEO: {
							let e = Q,
								t = X;
							return e > D.i && (t = X / Q * (e = D.i)), c.a.createElement(y.a, _({}, $, {
								blurSrc: Y ? p.media.gifBackgroundImage : void 0
							}), c.a.createElement(q, {
								isVisible: T
							}, c.a.createElement(S.a, _({}, K, {
								isNotCardView: r,
								height: o ? void 0 : e,
								width: o ? void 0 : t,
								postId: p.id,
								shouldLoad: !0,
								shouldPause: k,
								source: G,
								originalSource: p.media.content
							}))))
						}
						case D.n.VIDEO: {
							const e = p.media.posterUrl || p.preview && p.preview.url;
							if (this.props.isMiniCard && e) return c.a.createElement(y.a, _({}, $, {
								alwaysWrapMedia: !0
							}), c.a.createElement(q, {
								isVisible: T
							}, c.a.createElement(c.a.Fragment, null, c.a.createElement(v.a, _({}, K, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: p.id,
								shouldBlur: ee,
								source: e,
								originalSource: e
							})), c.a.createElement(M.a, null))));
							const i = c.a.createElement(y.a, _({}, $, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), T && c.a.createElement(f.b, {
								autoPlay: "boolean" == typeof V ? !V : void 0,
								isExpando: o,
								shouldLoad: !0,
								shouldPause: k,
								shouldStop: z,
								hlsSource: p.media.hlsUrl,
								mpegDashSource: p.media.dashUrl,
								isGif: p.media.isGif,
								scrubberThumbSource: p.media.scrubberThumbSource,
								postId: p.id,
								callToActionSource: p.source || void 0,
								callToActionText: p.callToAction,
								isListing: a,
								posterUrl: p.media.posterUrl
							}));
							return p.isSponsored ? c.a.createElement(g.a, {
								post: p
							}, i) : i
						}
						case D.n.LIVEVIDEO:
							return c.a.createElement(y.a, _({}, $, {
								isExpando: !!o
							}), c.a.createElement(q, {
								isVisible: T
							}, c.a.createElement(H, {
								canLoad: T,
								isExpando: !!o,
								posterUrl: p.media.scrubberThumbSource,
								shouldPause: k,
								url: p.media.hlsUrl
							})));
						case D.n.IMAGE:
							const L = this.state.viewportHeight - 2 * U,
								W = this.state.viewportWidth - 2 * U;
							let B = G;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (p.thumbnail && Object(m.a)(p.thumbnail.url) ? B = p.thumbnail.url : p.preview && Object(m.a)(p.preview.url) && (B = p.preview.url)), c.a.createElement(y.a, _({}, $, {
								blurSrc: Y ? B : void 0,
								isExpando: !!o
							}), c.a.createElement(q, {
								isVisible: T
							}, c.a.createElement(v.a, _({}, K, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: o ? L : void 0,
								maxWidth: o ? W : void 0,
								postId: p.id,
								shouldBlur: ee,
								source: B,
								outboundUrl: te && p.source.outboundUrl || void 0,
								originalSource: p.media.content
							}))));
						default:
							return null
					}
				}
			}
			t.a = K(Object(l.a)($))
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

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
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
				} = e, i = l(e, ["flairStyleTemplate"]);
				return n.a.createElement(d.a, c({
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
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf.4fde5907f0e9e859b754.js.map