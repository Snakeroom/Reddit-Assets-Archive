// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~ModerationP~dae39178.a3c7cc61ae48e384b9ff.js
// Retrieved at 2/6/2020, 1:30:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~ModerationP~dae39178"], {
		"./src/reddit/components/Media/RichTextContainer/index.m.less": function(e, t, s) {
			e.exports = {
				richTextContainer: "Chtkt3BCZQruf0LtmFg2c",
				richTextContainerTitleOnly: "_2XNPI46MXRfDdsSoDqaksI",
				richTextContainerFull: "_3xX726aBn29LDbsDtzr_6E",
				placeholder: "_1aLU7RPNLdvfcbaNdcN11x",
				placeholderParagraph: "Owi9iYzjyVpDq_0YbCdJY"
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
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4"
			}
		},
		"./src/reddit/components/Media/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i, o = s("./node_modules/lodash/debounce.js"),
				a = s.n(o),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/env/index.ts"),
				c = s("./src/lib/isUrl/index.ts"),
				h = s("./src/lib/objectSelector/index.ts"),
				p = s("./node_modules/brcast/dist/brcast.es.js"),
				m = s("./node_modules/lodash/findKey.js"),
				u = s.n(m);
			! function(e) {
				e.Hidden = "hidden", e.Visible = "visible"
			}(i || (i = {}));
			const g = {
				hidden: "visibilitychange",
				webkitHidden: "webkitvisibilitychange",
				mozHidden: "mozvisibilitychange",
				msHidden: "msvisibilitychange"
			};
			let b = !1;
			const f = Object(p.a)({
				documentInFocus: !0
			});
			! function() {
				if (!b) {
					const e = u()(g, (e, t) => void 0 !== document[t]);
					e && document.addEventListener(g[e], () => {
						f.setState({
							documentInFocus: document.visibilityState !== i.Hidden
						})
					}), b = !0
				}
			}();
			var x = {
					subscribe: e => {
						return f.subscribe(e)
					},
					unsubscribe: e => {
						f.unsubscribe(e)
					}
				},
				w = s("./src/lib/sentry/index.ts"),
				v = s("./src/reddit/components/HTML5StreamPlayer/index.tsx");
			const C = "https://www.redditmedia.com";
			var E = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				y = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				S = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				O = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				I = s("./src/reddit/constants/componentSizes.ts"),
				N = s("./src/reddit/models/Media/index.ts"),
				L = s("./node_modules/react-redux/es/index.js"),
				M = s("./src/reddit/actions/post.ts"),
				j = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				T = s("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				P = s.n(T);
			class W extends r.a.Component {
				componentDidMount() {
					this.loadRichTextContentIfNeeded()
				}
				loadRichTextContentIfNeeded() {
					this.props.canLoadContent && this.props.isExpando && this.props.onLoadRichTextContentIfNeeded(this.props.postId)
				}
				render() {
					const e = Object(j.a)({
						isLoading: !0
					});
					return r.a.createElement("div", {
						className: P.a.placeholder
					}, [1, 2, 3].map(t => r.a.createElement("div", {
						key: t,
						className: P.a.placeholderParagraph
					}, r.a.createElement("div", {
						className: e
					}), r.a.createElement("div", {
						className: e
					}), r.a.createElement("div", {
						className: e
					}))))
				}
			}
			var F = Object(L.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(M.u)(t))
			}))(W);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var D = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (i = Object.getOwnPropertySymbols(e); o < i.length; o++) t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (s[i[o]] = e[i[o]])
				}
				return s
			};
			var R = e => {
					var {
						canLoadContent: t,
						children: s,
						className: i,
						isCommentsPage: o,
						isMediumHeight: a,
						isRichTextTruncated: n,
						isExpando: d,
						isTitleOnly: l,
						postId: c,
						showFull: h
					} = e, p = D(e, ["canLoadContent", "children", "className", "isCommentsPage", "isMediumHeight", "isRichTextTruncated", "isExpando", "isTitleOnly", "postId", "showFull"]);
					const m = {
							[P.a.richTextContainerFull]: h,
							[P.a.richTextContainerTitleOnly]: l && !h,
							[P.a.richTextContainer]: !h && !l
						},
						u = {};
					h || (u.maxHeight = "".concat(l ? N.l : a ? N.k : N.j, "px")), o && (u.maxWidth = "".concat(I.d, "px"));
					const g = n && h;
					return r.a.createElement("div", B({
						className: Object(O.a)(m, i),
						style: u
					}, p), s, g && r.a.createElement(F, {
						canLoadContent: !!t,
						isExpando: d,
						postId: c
					}))
				},
				V = s("./src/lib/intersectionObserver/index.ts"),
				H = s("./src/reddit/i18n/components.tsx"),
				_ = s("./src/reddit/i18n/utils.ts"),
				k = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				A = s.n(k);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const G = 350,
				z = 100,
				J = 300;
			class Q extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isFullyLoaded: !1
					}, this.iframe = null, this.onWindowMessage = e => {
						!this.state.isFullyLoaded && this.iframe && this.iframe.contentWindow === e.source && "tweet-measured" === e.data.action && this.setState({
							isFullyLoaded: !0
						})
					}, this.embedBoxChildRef = e => {
						this.iframe = e, e && V.a(e, (t, s) => {
							e && e.contentWindow && !this.props.media.height && s && e.contentWindow.postMessage("twitter-measure-requested", C)
						}), this.props.embedBoxChildRef(e)
					}
				}
				componentDidMount() {
					window.addEventListener("message", this.onWindowMessage)
				}
				componentWillUnmount() {
					this.iframe && V.b(this.iframe), window.removeEventListener("message", this.onWindowMessage)
				}
				render() {
					const {
						canLoadContent: e,
						media: t,
						mediaContainerProps: s,
						onIframeLoaded: i,
						source: o,
						title: a
					} = this.props, {
						isFullyLoaded: n
					} = this.state, d = s.height || (t.isDeleted ? z : J);
					return r.a.createElement(S.a, U({}, s, {
						alwaysWrapMedia: !0,
						height: d,
						showFull: !s.isListing,
						width: G
					}), e && r.a.createElement(r.a.Fragment, null, (!s.height || !n) && (t.isDeleted ? r.a.createElement("p", {
						className: A.a.tweetDeleted
					}, Object(_.c)("This Tweet has been deleted.")) : r.a.createElement("div", {
						className: Object(O.a)(Object(j.a)({
							isLoading: !0
						}), A.a.tweetPlaceholder)
					})), r.a.createElement(E.a, {
						childRef: this.embedBoxChildRef,
						className: Object(O.a)(A.a.tweetEmbedBox, {
							[A.a.isInvisible]: !s.height || !n
						}),
						height: d,
						isListing: s.isListing,
						isResponsive: !0,
						maxHeight: s.isListing ? N.i : null,
						onLoad: i,
						showCentered: s.showCentered,
						showFull: !0,
						source: o,
						title: a,
						width: G
					}), s.isListing && d > N.i && r.a.createElement("div", {
						className: A.a.seeMore
					}, r.a.createElement(H.c, null, "see full tweet"))))
				}
			}
			var q = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				X = s("./src/reddit/components/PlayButton/index.tsx"),
				Y = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				K = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				Z = s("./src/reddit/components/RawHTMLDisplay/index.tsx");

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var ee = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (i = Object.getOwnPropertySymbols(e); o < i.length; o++) t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (s[i[o]] = e[i[o]])
				}
				return s
			};
			var te = Object(d.a)(e => {
					var {
						flairStyleTemplate: t
					} = e, s = ee(e, ["flairStyleTemplate"]);
					return r.a.createElement(Z.a, $({
						style: {
							color: Object(K.a)(Object(Y.a)(Object.assign({
								flairStyleTemplate: t
							}, s)))
						}
					}, s))
				}),
				se = s("./src/reddit/components/RichTextJson/index.tsx"),
				ie = s("./src/reddit/constants/screenWidths.ts"),
				oe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ae = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				ne = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				re = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				de = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/lib/redditId/index.ts"));

			function le(e, t, s) {
				return e.replace('href="https://www.reddit.com/poll/'.concat(Object(de.c)(t)), 'class="'.concat(s, '" href="https://www.reddit.com/poll/').concat(Object(de.c)(t)))
			}

			function ce(e, t) {
				const s = function e(t, s) {
					let i = !1;
					let o = [];
					try {
						for (const a of t)
							if ("link" === a.e && a.u && a.u.includes("https://www.reddit.com/poll/".concat(s))) i = !0;
							else if (a.c && "string" != typeof a.c) {
							const t = e(a.c, s);
							t.found ? (i = !0, ("par" !== a.e || t.updated.length) && o.push(Object.assign({}, a, {
								c: t.updated
							}))) : o.push(a)
						} else o.push(a)
					} catch (a) {
						i = !1, o = []
					}
					return {
						found: i,
						updated: i ? o : t
					}
				}(e.document, Object(de.c)(t));
				return s.found ? {
					document: s.updated
				} : e
			}
			const he = (e, t, s, i) => {
					const o = e / t,
						a = s / i;
					return Math.abs(o - a) < .03
				},
				pe = (e, t) => {
					for (let s = 0; s < t.length; s++) {
						const i = t[s];
						if (i.width >= e) return i
					}
				},
				me = (e, t, s) => {
					for (let i = 0; i < s.length; i++) {
						const o = s[i];
						if (o.width >= N.e / 2 && he(e, t, o.height, o.width)) return o
					}
				},
				ue = e => {
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						if (s.height >= N.e || s.width >= N.f) return s
					}
				};
			var ge = s("./src/reddit/components/Media/index.m.less"),
				be = s.n(ge);

			function fe() {
				return (fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = 1200,
				we = 75,
				ve = "player.js",
				Ce = I.r + I.q,
				Ee = e => e.isVisible ? e.children : r.a.createElement("div", {
					className: be.a.displayNone
				}, e.children),
				ye = new Set([N.n.EMBED, N.n.GIFVIDEO, N.n.VIDEO]),
				Se = e => !!e.media && ye.has(e.media.type),
				Oe = new Set([N.n.EMBED, N.n.GIFVIDEO, N.n.IMAGE, N.n.VIDEO]),
				Ie = e => {
					let {
						post: t
					} = e;
					return !!t.media && Oe.has(t.media.type)
				},
				Ne = Object(oe.t)(),
				Le = Object(h.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class Me extends r.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && N.d.has(e.type)) {
							if (this.iframe) {
								const t = e.type === N.n.EMBED ? e.provider : null;
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
						return !!e && N.d.has(e.type)
					}, this.shouldFocusContentDebouncer = a()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && N.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === N.n.EMBED ? t.provider : null;
								i && !N.q.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? N.g.Pause : N.g.Play;
							e.contentWindow.postMessage({
								context: ve,
								method: s
							}, C), e.contentWindow.postMessage({
								context: ve,
								method: N.g.Mute
							}, C)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === N.t.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: N.x.Pause
						}), C) : e.contentWindow.postMessage({
							context: ve,
							method: N.g.Pause
						}, C))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === N.n.EMBED ? e.provider : null;
						if (this.iframe && s && !N.q.has(s)) {
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
						viewportHeight: N.e,
						viewportWidth: N.f
					}
				}
				componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					Se(this.props.post) && (this.visibilityChangeSubscriptionId = x.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && Ie(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && x.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && Ie(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(N.i, this.state.viewportHeight),
						s = Math.min(xe, 16 * t / 9);
					s === xe && (t = 9 * xe / 16), e = this.state.viewportWidth >= ie.c ? this.state.viewportWidth < I.l ? this.state.viewportWidth - Ce - 2 * we : this.state.viewportWidth - Ce - I.e - 2 * we : this.state.viewportWidth - 2 * we;
					const i = this.state.viewportHeight - 2 * we;
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
					let s = N.i,
						i = N.m;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = N.r, i = N.s), {
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
					if (Object(N.C)(i.media)) return {
						source: i.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * we,
						height: this.state.viewportHeight - 2 * we
					};
					const o = i.media && i.media.obfuscated || "";
					let a = i.media && !Object(N.F)(i.media) ? i.media.content : "",
						[n, r] = !i.media || Object(N.D)(i.media) || Object(N.E)(i.media) ? [0, 0] : [i.media.height, i.media.width];
					if (s && i.media && (i.media.type === N.n.IMAGE || i.media.type === N.n.GIFVIDEO)) {
						const e = pe(s, i.media.resolutions);
						e && (a = e.url, r = e.width, n = e.height)
					} else if (i && i.media && (!e.isListing || e.isExpando) && (i.media.type === N.n.IMAGE || i.media.type === N.n.GIFVIDEO)) {
						let e;
						(e = Object(y.b)(i.media.height, i.media.width) && Object(y.c)(i.media.height) ? me(i.media.height, i.media.width, i.media.resolutions) : ue(i.media.resolutions)) && (a = e.url, r = e.width, n = e.height)
					}
					if (e.isExpando)
						if (r > t.viewportWidth) {
							n *= t.viewportWidth / r, r = t.viewportWidth
						} else if (n > t.viewportHeight) {
						const e = t.viewportHeight / n;
						n = t.viewportHeight, r *= e
					}
					const {
						maxVideoHeight: d,
						maxVideoWidth: l
					} = this.getVideoMaxDimensions(e, t);
					if (i.media && i.media.type === N.n.VIDEO) {
						const t = n / r;
						e.isExpando ? (n = d, r = l) : t > N.c ? (n = d, r = Math.min(Math.max(d / t, N.p), l)) : (n = Math.min(Math.max(l * t, N.o), d), r = l)
					}
					i.media && i.media.type === N.n.EMBED && e.isExpando && i.media.provider !== N.t.Twitter && (n = d, r = l);
					let c = !1;
					if (e.isMiniCard) {
						const e = n / r;
						c = Math.abs(e - N.c) > .01
					}
					return {
						source: a,
						obfuscated: o,
						width: r,
						height: n,
						needsBackgroundBlur: c
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
						isExpando: a,
						isListing: n,
						isNotCardView: d,
						isMediumHeight: h,
						isTitleOnly: p,
						post: m,
						showCentered: u,
						showFull: g = !1
					} = this.props, {
						canLoadContent: b,
						forcePause: f,
						shouldPause: x,
						shouldStop: C,
						viewportWidth: O
					} = this.state;
					if (!m.media) return null;
					const I = f || x,
						L = C,
						{
							source: M,
							obfuscated: j,
							height: T,
							width: P,
							needsBackgroundBlur: W
						} = this.getMediaInfo(this.props, this.state),
						F = {
							showCentered: u,
							isListing: n,
							showFull: g,
							height: T,
							width: P
						},
						B = Object.assign({}, F, {
							className: e,
							forceAspectRatio: i,
							viewportWidth: O
						}),
						D = this.shouldBlur(),
						V = !(!m.isSponsored || !m.source);
					if (j && D) return r.a.createElement(S.a, fe({}, B, {
						blurSrc: j
					}), r.a.createElement(Ee, {
						isVisible: b
					}, r.a.createElement(y.a, fe({}, F, {
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: n,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!m.media && m.media.type === N.n.VIDEO,
						onClick: this.onImageBoxClick,
						postId: m.id,
						shouldBlur: D,
						source: j,
						outboundUrl: V && m.source.outboundUrl || void 0,
						originalSource: M
					}))));
					if (!m.media) return null;
					switch (m.media.type) {
						case N.n.RTJSON:
							const i = Object(ne.a)(m, null);
							if (null === i) return;
							return g || Object(ae.a)(m) ? r.a.createElement(R, {
								canLoadContent: b,
								className: e,
								"data-click-id": "text",
								isCommentsPage: o,
								isExpando: a,
								isMediumHeight: h,
								isRichTextTruncated: m.media.isRichtextPreview,
								isTitleOnly: p,
								postId: m.id,
								showFull: g
							}, r.a.createElement(se.a, {
								flairStyleTemplate: s,
								content: m.isMeta ? ce(i, m.id) : i,
								mediaMetadata: m.media.mediaMetadata,
								postId: m.id,
								rtJsonElementProps: Le(this.props),
								renderMediaAsLinks: n
							})) : null;
						case N.n.TEXT:
							if (Object(re.a)(m)) {
								const t = "Text post should not include body content";
								return w.c.withScope(e => {
									e.setExtra("info", {
										post: m,
										isListing: n,
										isCommentsPage: o
									}), w.c.captureMessage(t)
								}), Object(l.a)() && console.log("".concat(m.id, ": ").concat(t)), r.a.createElement(R, {
									postId: m.id,
									className: e,
									"data-click-id": "text",
									isCommentsPage: o,
									showFull: g
								}, r.a.createElement(te, {
									flairStyleTemplate: s,
									html: m.isMeta ? le(m.media.content, m.id, be.a.hiddenLink) : m.media.content
								}))
							}
							return null;
						case N.n.EMBED:
							return this.props.isMiniCard && m.preview && m.preview.url ? r.a.createElement(S.a, fe({}, B, {
								alwaysWrapMedia: !0
							}), r.a.createElement(Ee, {
								isVisible: b
							}, r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, fe({}, F, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: a,
								isListing: n,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: D,
								source: m.preview.url,
								originalSource: m.preview.url
							})), r.a.createElement(X.a, null)))) : N.h.has(m.media.provider) ? m.media.provider === N.t.Twitter ? r.a.createElement(Q, {
								canLoadContent: b,
								embedBoxChildRef: this.storeChildRef,
								media: m.media,
								mediaContainerProps: B,
								onIframeLoaded: this.onIframeLoaded,
								source: M,
								title: m.title
							}) : r.a.createElement(S.a, fe({}, B, {
								alwaysWrapMedia: !0,
								height: a ? T : N.i,
								width: a ? P : N.i * (16 / 9)
							}), b && r.a.createElement(E.a, {
								childRef: this.storeChildRef,
								height: a ? T : N.i,
								width: a ? P : void 0,
								isListing: n,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: u,
								showFull: g,
								source: M,
								title: m.title
							})) : r.a.createElement(S.a, fe({}, B, {
								alwaysWrapMedia: !0
							}), b && r.a.createElement(E.a, fe({}, F, {
								isResponsive: a || m.media.provider === N.t.IFrameEmbed,
								title: m.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: M,
								fullWidth: m.media.provider === N.t.IFrameEmbed
							})));
						case N.n.GIFVIDEO: {
							let e = T,
								t = P;
							return e > N.i && (t = P / T * (e = N.i)), r.a.createElement(S.a, fe({}, B, {
								blurSrc: W ? m.media.gifBackgroundImage : void 0
							}), r.a.createElement(Ee, {
								isVisible: b
							}, r.a.createElement(q.a, fe({}, F, {
								isNotCardView: d,
								height: a ? void 0 : e,
								width: a ? void 0 : t,
								postId: m.id,
								shouldLoad: !0,
								shouldPause: I,
								source: M,
								originalSource: m.media.content
							}))))
						}
						case N.n.VIDEO: {
							const e = m.media.posterUrl || m.preview && m.preview.url;
							return this.props.isMiniCard && e ? r.a.createElement(S.a, fe({}, B, {
								alwaysWrapMedia: !0
							}), r.a.createElement(Ee, {
								isVisible: b
							}, r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, fe({}, F, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: a,
								isListing: n,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: D,
								source: e,
								originalSource: e
							})), r.a.createElement(X.a, null)))) : r.a.createElement(S.a, fe({}, B, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), b && r.a.createElement(v.b, {
								autoPlay: "boolean" == typeof x ? !x : void 0,
								isExpando: a,
								shouldLoad: !0,
								shouldPause: I,
								shouldStop: L,
								hlsSource: m.media.hlsUrl,
								mpegDashSource: m.media.dashUrl,
								isGif: m.media.isGif,
								scrubberThumbSource: m.media.scrubberThumbSource,
								postId: m.id,
								callToActionSource: m.source || void 0,
								callToActionText: m.callToAction,
								isListing: n,
								posterUrl: m.media.posterUrl
							}))
						}
						case N.n.LIVEVIDEO:
							return r.a.createElement(S.a, fe({}, B, {
								isExpando: !!a
							}), r.a.createElement(Ee, {
								isVisible: b
							}, r.a.createElement(y.a, fe({}, F, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: a,
								isListing: n,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: a ? F.height : void 0,
								maxWidth: a ? F.width : void 0,
								postId: m.id,
								shouldBlur: D,
								source: M,
								outboundUrl: m.source.url,
								originalSource: M
							}))));
						case N.n.IMAGE:
							const f = this.state.viewportHeight - 2 * we,
								C = this.state.viewportWidth - 2 * we;
							let O = M;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (m.thumbnail && Object(c.a)(m.thumbnail.url) ? O = m.thumbnail.url : m.preview && Object(c.a)(m.preview.url) && (O = m.preview.url)), r.a.createElement(S.a, fe({}, B, {
								blurSrc: W ? O : void 0,
								isExpando: !!a
							}), r.a.createElement(Ee, {
								isVisible: b
							}, r.a.createElement(y.a, fe({}, F, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: a,
								isListing: n,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: a ? f : void 0,
								maxWidth: a ? C : void 0,
								postId: m.id,
								shouldBlur: D,
								source: O,
								outboundUrl: V && m.source.outboundUrl || void 0,
								originalSource: m.media.content
							}))));
						default:
							return null
					}
				}
			}
			t.a = Ne(Object(d.a)(Me))
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
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~ModerationP~dae39178.a3c7cc61ae48e384b9ff.js.map