// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42.e8ad23a59ae32ce41349.js
// Retrieved at 3/3/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"], {
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			var i, o = s("./node_modules/brcast/dist/brcast.es.js"),
				n = s("./node_modules/lodash/findKey.js"),
				a = s.n(n);
			! function(e) {
				e.Hidden = "hidden", e.Visible = "visible"
			}(i || (i = {}));
			const r = {
				hidden: "visibilitychange",
				webkitHidden: "webkitvisibilitychange",
				mozHidden: "mozvisibilitychange",
				msHidden: "msvisibilitychange"
			};
			let d = !1;
			const c = Object(o.a)({
				documentInFocus: !0
			});
			! function() {
				if (!d) {
					const e = a()(r, (e, t) => void 0 !== document[t]);
					e && document.addEventListener(r[e], () => {
						c.setState({
							documentInFocus: document.visibilityState !== i.Hidden
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
		"./src/reddit/components/Media/RichTextContainer/index.m.less": function(e, t, s) {
			e.exports = {
				richTextContainer: "Chtkt3BCZQruf0LtmFg2c",
				richTextContainerTitleOnly: "_2XNPI46MXRfDdsSoDqaksI",
				richTextContainerFull: "_3xX726aBn29LDbsDtzr_6E",
				placeholder: "_1aLU7RPNLdvfcbaNdcN11x",
				placeholderParagraph: "Owi9iYzjyVpDq_0YbCdJY"
			}
		},
		"./src/reddit/components/Media/RichTextContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/componentSizes.ts"),
				r = s("./src/reddit/models/Media/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				h = s("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				p = s.n(h);
			class m extends o.a.Component {
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
					return o.a.createElement("div", {
						className: p.a.placeholder
					}, [1, 2, 3].map(t => o.a.createElement("div", {
						key: t,
						className: p.a.placeholderParagraph
					}, o.a.createElement("div", {
						className: e
					}), o.a.createElement("div", {
						className: e
					}), o.a.createElement("div", {
						className: e
					}))))
				}
			}
			var u = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(c.x)(t))
			}))(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (i = Object.getOwnPropertySymbols(e); o < i.length; o++) t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (s[i[o]] = e[i[o]])
				}
				return s
			};
			t.a = e => {
				var {
					canLoadContent: t,
					children: s,
					className: i,
					isCommentsPage: d,
					isMediumHeight: c,
					isRichTextTruncated: l,
					isExpando: h,
					isTitleOnly: m,
					postId: g,
					showFull: f
				} = e, w = x(e, ["canLoadContent", "children", "className", "isCommentsPage", "isMediumHeight", "isRichTextTruncated", "isExpando", "isTitleOnly", "postId", "showFull"]);
				const v = {
						[p.a.richTextContainerFull]: f,
						[p.a.richTextContainerTitleOnly]: m && !f,
						[p.a.richTextContainer]: !f && !m
					},
					E = {};
				f || (E.maxHeight = "".concat(m ? r.l : c ? r.k : r.j, "px")), d && (E.maxWidth = "".concat(a.d, "px"));
				const y = l && f;
				return o.a.createElement("div", b({
					className: Object(n.a)(v, i),
					style: E
				}, w), s, y && o.a.createElement(u, {
					canLoadContent: !!t,
					isExpando: h,
					postId: g
				}))
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.m.less": function(e, t, s) {
			e.exports = {
				tweetPlaceholder: "q0jsD_ZcQRuuUQzXawr8J",
				tweetEmbedBox: "_3pYTJO5FjsoQWRUsIFQASN",
				isInvisible: "_3xICr9rbunMOudN40P1GgI",
				tweetDeleted: "sIgL7k1Lz6YLL146KNk8k",
				seeMore: "_2f5uYHvlfzs2DngQsiCdvB"
			}
		},
		"./src/reddit/components/Media/TwitterEmbed/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/intersectionObserver/index.ts"),
				r = s("./src/reddit/components/Media/constants.ts"),
				d = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				c = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				l = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				h = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				u = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				b = s.n(u);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const g = 350,
				f = 100,
				w = 300;
			class v extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isFullyLoaded: !1
					}, this.iframe = null, this.onWindowMessage = e => {
						!this.state.isFullyLoaded && this.iframe && this.iframe.contentWindow === e.source && "tweet-measured" === e.data.action && this.setState({
							isFullyLoaded: !0
						})
					}, this.embedBoxChildRef = e => {
						this.iframe = e, e && a.a(e, (t, s) => {
							e && e.contentWindow && !this.props.media.height && s && e.contentWindow.postMessage("twitter-measure-requested", r.a)
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
						mediaContainerProps: s,
						onIframeLoaded: i,
						source: a,
						title: r
					} = this.props, {
						isFullyLoaded: u
					} = this.state, v = s.height || (t.isDeleted ? f : w);
					return o.a.createElement(c.a, x({}, s, {
						alwaysWrapMedia: !0,
						height: v,
						showFull: !s.isListing,
						width: g
					}), e && o.a.createElement(o.a.Fragment, null, (!s.height || !u) && (t.isDeleted ? o.a.createElement("p", {
						className: b.a.tweetDeleted
					}, Object(p.c)("This Tweet has been deleted.")) : o.a.createElement("div", {
						className: Object(n.a)(Object(l.a)({
							isLoading: !0
						}), b.a.tweetPlaceholder)
					})), o.a.createElement(d.a, {
						childRef: this.embedBoxChildRef,
						className: Object(n.a)(b.a.tweetEmbedBox, {
							[b.a.isInvisible]: !s.height || !u
						}),
						height: v,
						isListing: s.isListing,
						isResponsive: !0,
						maxHeight: s.isListing ? m.i : null,
						onLoad: i,
						showCentered: s.showCentered,
						showFull: !0,
						source: a,
						title: r,
						width: g
					}), s.isListing && v > m.i && o.a.createElement("div", {
						className: b.a.seeMore
					}, o.a.createElement(h.c, null, "see full tweet"))))
				}
			}
		},
		"./src/reddit/components/Media/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			const i = "https://www.redditmedia.com"
		},
		"./src/reddit/components/Media/getResolution.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			var i = s("./src/reddit/models/Media/index.ts");
			const o = (e, t, s, i) => {
					const o = e / t,
						n = s / i;
					return Math.abs(o - n) < .03
				},
				n = (e, t) => {
					for (let s = 0; s < t.length; s++) {
						const i = t[s];
						if (i.width >= e) return i
					}
				},
				a = (e, t, s) => {
					for (let n = 0; n < s.length; n++) {
						const a = s[n];
						if (a.width >= i.e / 2 && o(e, t, a.height, a.width)) return a
					}
				},
				r = e => {
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						if (s.height >= i.e || s.width >= i.f) return s
					}
				}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4"
			}
		},
		"./src/reddit/components/Media/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = s.n(i),
				n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/lodash/debounce.js"),
				r = s.n(a),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				h = s("./src/lib/env/index.ts"),
				p = s("./src/lib/isUrl/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				b = s("./src/lib/sentry/index.ts"),
				x = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				g = s("./src/reddit/components/Media/constants.ts"),
				f = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				w = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				v = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				E = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				y = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				C = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				M = s("./src/reddit/components/PlayButton/index.tsx"),
				O = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				S = s("./src/reddit/components/RichTextJson/index.tsx"),
				L = s("./src/reddit/constants/componentSizes.ts"),
				I = s("./src/reddit/constants/screenWidths.ts"),
				N = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				j = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				T = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				F = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				W = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				R = s("./src/reddit/models/Media/index.ts"),
				D = s("./src/reddit/components/Media/getResolution.ts"),
				V = s("./src/reddit/components/Media/index.m.less"),
				B = s.n(V);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(n.a)({
					resolved: {},
					chunkName: () => "LiveVideoPlayer",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("LiveVideoPlayer")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx"
					}
				}, {
					ssr: !1
				}),
				k = 1200,
				A = 75,
				U = "player.js",
				G = L.r + L.q,
				z = e => e.isVisible ? e.children : c.a.createElement("div", {
					className: B.a.displayNone
				}, e.children),
				J = new Set([R.n.EMBED, R.n.GIFVIDEO, R.n.LIVEVIDEO, R.n.VIDEO]),
				q = e => !!e.media && J.has(e.media.type),
				Q = new Set([R.n.EMBED, R.n.GIFVIDEO, R.n.IMAGE, R.n.LIVEVIDEO, R.n.VIDEO]),
				X = e => {
					let {
						post: t
					} = e;
					return !!t.media && Q.has(t.media.type)
				},
				Y = Object(N.t)(),
				K = Object(m.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class Z extends c.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && R.d.has(e.type)) {
							if (this.iframe) {
								const t = e.type === R.n.EMBED ? e.provider : null;
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
							autoplayPref: s
						} = this.props;
						this.iframe && (t || !s && e.documentInFocus || this.toggleEmbedAutoplay(this.iframe, !e.documentInFocus)), this.setState({
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
						return !!e && R.d.has(e.type)
					}, this.shouldFocusContentDebouncer = r()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && R.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === R.n.EMBED ? t.provider : null;
								i && !R.q.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? R.g.Pause : R.g.Play;
							e.contentWindow.postMessage({
								context: U,
								method: s
							}, g.a), e.contentWindow.postMessage({
								context: U,
								method: R.g.Mute
							}, g.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === R.t.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: R.x.Pause
						}), g.a) : e.contentWindow.postMessage({
							context: U,
							method: R.g.Pause
						}, g.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === R.n.EMBED ? e.provider : null;
						if (this.iframe && s && !R.q.has(s)) {
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
						viewportHeight: R.e,
						viewportWidth: R.f
					}
				}
				componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					q(this.props.post) && (this.visibilityChangeSubscriptionId = u.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && X(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && u.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && X(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(R.i, this.state.viewportHeight),
						s = Math.min(k, 16 * t / 9);
					s === k && (t = 9 * k / 16), e = this.state.viewportWidth >= I.c ? this.state.viewportWidth < L.l ? this.state.viewportWidth - G - 2 * A : this.state.viewportWidth - G - L.e - 2 * A : this.state.viewportWidth - 2 * A;
					const i = this.state.viewportHeight - 2 * A;
					if (s > e) {
						t *= e / s, s = e
					} else if (t > i) {
						const e = i / t;
						t = i, s *= e
					}
					return {
						maxVideoHeight: t,
						maxVideoWidth: s
					}
				}
				getVideoMaxDimensions(e, t) {
					let s = R.i,
						i = R.m;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = R.r, i = R.s), {
						maxVideoHeight: s,
						maxVideoWidth: i
					})
				}
				getMediaInfo(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
					const {
						availableWidth: s,
						post: i
					} = e;
					if (Object(R.C)(i.media)) return {
						source: i.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * A,
						height: this.state.viewportHeight - 2 * A
					};
					const o = i.media && i.media.obfuscated || "";
					let n = i.media && !Object(R.F)(i.media) ? i.media.content : "",
						[a, r] = !i.media || Object(R.D)(i.media) || Object(R.E)(i.media) ? [0, 0] : [i.media.height, i.media.width];
					if (s && i.media && (i.media.type === R.n.IMAGE || i.media.type === R.n.GIFVIDEO)) {
						const e = D.b(s, i.media.resolutions);
						e && (n = e.url, r = e.width, a = e.height)
					} else if (i && i.media && (!e.isListing || e.isExpando) && (i.media.type === R.n.IMAGE || i.media.type === R.n.GIFVIDEO)) {
						let e;
						(e = Object(w.b)(i.media.height, i.media.width) && Object(w.c)(i.media.height) ? D.c(i.media.height, i.media.width, i.media.resolutions) : D.a(i.media.resolutions)) && (n = e.url, r = e.width, a = e.height)
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
					if (i.media && i.media.type === R.n.VIDEO) {
						const t = a / r;
						e.isExpando ? (a = d, r = c) : t > R.c ? (a = d, r = Math.min(Math.max(d / t, R.p), c)) : (a = Math.min(Math.max(c * t, R.o), d), r = c)
					}
					i.media && i.media.type === R.n.EMBED && e.isExpando && i.media.provider !== R.t.Twitter && (a = d, r = c);
					let l = !1;
					if (e.isMiniCard) {
						const e = a / r;
						l = Math.abs(e - R.c) > .01
					}
					return {
						source: n,
						obfuscated: o,
						width: r,
						height: a,
						needsBackgroundBlur: l
					}
				}
				shouldBlur() {
					const {
						isExpando: e,
						isOverlay: t,
						theme: s
					} = this.props, i = this.isNSFW(), o = this.isSpoiler();
					return !(e || this.state.isRevealed || t) && (i && !s.subredditContext.shouldShowNSFWContent || o)
				}
				render() {
					const {
						className: e,
						crosspost: t,
						flairStyleTemplate: s,
						forceAspectRatio: i,
						isCommentsPage: o,
						isExpando: n,
						isListing: a,
						isNotCardView: r,
						isMediumHeight: d,
						isTitleOnly: l,
						post: m,
						showCentered: u,
						showFull: g = !1
					} = this.props, {
						canLoadContent: L,
						forcePause: I,
						shouldPause: N,
						shouldStop: D,
						viewportWidth: V
					} = this.state;
					if (!m.media) return null;
					const k = I || N,
						U = D,
						{
							source: G,
							obfuscated: J,
							height: q,
							width: Q,
							needsBackgroundBlur: X
						} = this.getMediaInfo(this.props, this.state),
						Y = {
							showCentered: u,
							isListing: a,
							showFull: g,
							height: q,
							width: Q
						},
						Z = Object.assign({}, Y, {
							className: e,
							forceAspectRatio: i,
							viewportWidth: V
						}),
						$ = this.shouldBlur(),
						ee = !(!m.isSponsored || !m.source);
					if (J && $) return c.a.createElement(v.a, H({}, Z, {
						blurSrc: J
					}), c.a.createElement(z, {
						isVisible: L
					}, c.a.createElement(w.a, H({}, Y, {
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: a,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!m.media && m.media.type === R.n.VIDEO,
						onClick: this.onImageBoxClick,
						postId: m.id,
						shouldBlur: $,
						source: J,
						outboundUrl: ee && m.source.outboundUrl || void 0,
						originalSource: G
					}))));
					if (!m.media) return null;
					switch (m.media.type) {
						case R.n.RTJSON:
							const i = Object(j.a)(m, null);
							if (null === i) return;
							return g || Object(P.a)(m) ? c.a.createElement(E.a, {
								canLoadContent: L,
								className: e,
								"data-click-id": "text",
								isCommentsPage: o,
								isExpando: n,
								isMediumHeight: d,
								isRichTextTruncated: m.media.isRichtextPreview,
								isTitleOnly: l,
								postId: m.id,
								showFull: g
							}, c.a.createElement(S.a, {
								flairStyleTemplate: s,
								content: m.isMeta ? Object(W.a)(i, m.id) : i,
								mediaMetadata: m.media.mediaMetadata,
								postId: m.id,
								rtJsonElementProps: K(this.props),
								renderMediaAsLinks: a
							})) : null;
						case R.n.TEXT:
							if (Object(T.a)(m)) {
								const t = "Text post should not include body content";
								return b.c.withScope(e => {
									e.setExtra("info", {
										post: m,
										isListing: a,
										isCommentsPage: o
									}), b.c.captureMessage(t)
								}), Object(h.a)() && console.log("".concat(m.id, ": ").concat(t)), c.a.createElement(E.a, {
									postId: m.id,
									className: e,
									"data-click-id": "text",
									isCommentsPage: o,
									showFull: g
								}, c.a.createElement(O.a, {
									flairStyleTemplate: s,
									html: m.isMeta ? Object(F.a)(m.media.content, m.id, B.a.hiddenLink) : m.media.content
								}))
							}
							return null;
						case R.n.EMBED:
							return this.props.isMiniCard && m.preview && m.preview.url ? c.a.createElement(v.a, H({}, Z, {
								alwaysWrapMedia: !0
							}), c.a.createElement(z, {
								isVisible: L
							}, c.a.createElement(c.a.Fragment, null, c.a.createElement(w.a, H({}, Y, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: $,
								source: m.preview.url,
								originalSource: m.preview.url
							})), c.a.createElement(M.a, null)))) : R.h.has(m.media.provider) ? m.media.provider === R.t.Twitter ? c.a.createElement(y.a, {
								canLoadContent: L,
								embedBoxChildRef: this.storeChildRef,
								media: m.media,
								mediaContainerProps: Z,
								onIframeLoaded: this.onIframeLoaded,
								source: G,
								title: m.title
							}) : c.a.createElement(v.a, H({}, Z, {
								alwaysWrapMedia: !0,
								height: n ? q : R.i,
								width: n ? Q : R.i * (16 / 9)
							}), L && c.a.createElement(f.a, {
								childRef: this.storeChildRef,
								height: n ? q : R.i,
								width: n ? Q : void 0,
								isListing: a,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: u,
								showFull: g,
								source: G,
								title: m.title
							})) : c.a.createElement(v.a, H({}, Z, {
								alwaysWrapMedia: !0
							}), L && c.a.createElement(f.a, H({}, Y, {
								isResponsive: n || m.media.provider === R.t.IFrameEmbed,
								title: m.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: G,
								fullWidth: m.media.provider === R.t.IFrameEmbed
							})));
						case R.n.GIFVIDEO: {
							let e = q,
								t = Q;
							return e > R.i && (t = Q / q * (e = R.i)), c.a.createElement(v.a, H({}, Z, {
								blurSrc: X ? m.media.gifBackgroundImage : void 0
							}), c.a.createElement(z, {
								isVisible: L
							}, c.a.createElement(C.a, H({}, Y, {
								isNotCardView: r,
								height: n ? void 0 : e,
								width: n ? void 0 : t,
								postId: m.id,
								shouldLoad: !0,
								shouldPause: k,
								source: G,
								originalSource: m.media.content
							}))))
						}
						case R.n.VIDEO: {
							const e = m.media.posterUrl || m.preview && m.preview.url;
							return this.props.isMiniCard && e ? c.a.createElement(v.a, H({}, Z, {
								alwaysWrapMedia: !0
							}), c.a.createElement(z, {
								isVisible: L
							}, c.a.createElement(c.a.Fragment, null, c.a.createElement(w.a, H({}, Y, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: $,
								source: e,
								originalSource: e
							})), c.a.createElement(M.a, null)))) : c.a.createElement(v.a, H({}, Z, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), L && c.a.createElement(x.b, {
								autoPlay: "boolean" == typeof N ? !N : void 0,
								isExpando: n,
								shouldLoad: !0,
								shouldPause: k,
								shouldStop: U,
								hlsSource: m.media.hlsUrl,
								mpegDashSource: m.media.dashUrl,
								isGif: m.media.isGif,
								scrubberThumbSource: m.media.scrubberThumbSource,
								postId: m.id,
								callToActionSource: m.source || void 0,
								callToActionText: m.callToAction,
								isListing: a,
								posterUrl: m.media.posterUrl
							}))
						}
						case R.n.LIVEVIDEO:
							return c.a.createElement(v.a, H({}, Z, {
								isExpando: !!n
							}), c.a.createElement(z, {
								isVisible: L
							}, c.a.createElement(_, {
								canLoad: L,
								isExpando: !!n,
								posterUrl: m.media.scrubberThumbSource,
								shouldPause: k,
								url: m.media.hlsUrl
							})));
						case R.n.IMAGE:
							const I = this.state.viewportHeight - 2 * A,
								D = this.state.viewportWidth - 2 * A;
							let V = G;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (m.thumbnail && Object(p.a)(m.thumbnail.url) ? V = m.thumbnail.url : m.preview && Object(p.a)(m.preview.url) && (V = m.preview.url)), c.a.createElement(v.a, H({}, Z, {
								blurSrc: X ? V : void 0,
								isExpando: !!n
							}), c.a.createElement(z, {
								isVisible: L
							}, c.a.createElement(w.a, H({}, Y, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: n ? I : void 0,
								maxWidth: n ? D : void 0,
								postId: m.id,
								shouldBlur: $,
								source: V,
								outboundUrl: ee && m.source.outboundUrl || void 0,
								originalSource: m.media.content
							}))));
						default:
							return null
					}
				}
			}
			t.a = Y(Object(l.a)(Z))
		},
		"./src/reddit/components/RawHTMLDisplay/Media.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				o = s.n(i),
				n = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (i = Object.getOwnPropertySymbols(e); o < i.length; o++) t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (s[i[o]] = e[i[o]])
				}
				return s
			};
			t.a = Object(n.a)(e => {
				var {
					flairStyleTemplate: t
				} = e, s = l(e, ["flairStyleTemplate"]);
				return o.a.createElement(d.a, c({
					style: {
						color: Object(r.a)(Object(a.a)(Object.assign({
							flairStyleTemplate: t
						}, s)))
					}
				}, s))
			})
		},
		"./src/reddit/helpers/canPreviewSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/helpers/postHasSelfText/index.ts");
			t.a = e => Object(i.a)(e) && !e.isSpoiler && !e.isNSFW
		},
		"./src/reddit/helpers/postHasSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/models/Media/index.ts"),
				o = s("./src/reddit/models/RichTextJson/index.ts");
			t.a = e => {
				const t = e && e.media;
				return !!t && (t.type === i.n.TEXT && !!t.content || t.type === i.n.RTJSON && !Object(o.F)(t.richtextContent))
			}
		},
		"./src/reddit/helpers/stripMetaLinks/fromRTJ.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var i = s("./src/lib/redditId/index.ts");

			function o(e, t) {
				const s = function e(t, s) {
					let i = !1;
					let o = [];
					try {
						for (const n of t)
							if ("link" === n.e && n.u && n.u.includes("https://www.reddit.com/poll/".concat(s))) i = !0;
							else if (n.c && "string" != typeof n.c) {
							const t = e(n.c, s);
							t.found ? (i = !0, ("par" !== n.e || t.updated.length) && o.push(Object.assign({}, n, {
								c: t.updated
							}))) : o.push(n)
						} else o.push(n)
					} catch (n) {
						i = !1, o = []
					}
					return {
						found: i,
						updated: i ? o : t
					}
				}(e.document, Object(i.c)(t));
				return s.found ? {
					document: s.updated
				} : e
			}
		},
		"./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var i = s("./src/lib/redditId/index.ts");

			function o(e, t, s) {
				return e.replace('href="https://www.reddit.com/poll/'.concat(Object(i.c)(t)), 'class="'.concat(s, '" href="https://www.reddit.com/poll/').concat(Object(i.c)(t)))
			}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42.e8ad23a59ae32ce41349.js.map