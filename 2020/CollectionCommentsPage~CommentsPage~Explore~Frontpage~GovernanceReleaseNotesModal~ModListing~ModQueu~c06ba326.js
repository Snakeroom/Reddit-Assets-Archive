// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326.8e70670e8f5250ddf823.js
// Retrieved at 1/18/2020, 1:30:22 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326"], {
		"./src/lib/intersectionObserver/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			let i;
			const o = new Map,
				n = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), i = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!n.get(t)) {
						n.set(t, s);
						const i = o.get(t);
						if (i) {
							i(e, s && !!n.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const a = (e, t) => {
					try {
						o.set(e, t), i && i.observe(e)
					} catch (s) {
						0
					}
				},
				r = e => {
					try {
						o.delete(e), i && i.unobserve(e)
					} catch (t) {
						0
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
				n = s.n(o),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
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
			const E = "https://www.redditmedia.com";
			var C = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				y = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				O = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				S = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				M = s("./src/reddit/constants/componentSizes.ts"),
				I = s("./src/reddit/models/Media/index.ts"),
				L = s("./node_modules/react-redux/es/index.js"),
				N = s("./src/reddit/actions/post.ts"),
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
				onLoadRichTextContentIfNeeded: t => e(Object(N.r)(t))
			}))(W);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var B = function(e, t) {
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
						isMediumHeight: n,
						isRichTextTruncated: a,
						isExpando: d,
						isTitleOnly: l,
						postId: c,
						showFull: h
					} = e, p = B(e, ["canLoadContent", "children", "className", "isCommentsPage", "isMediumHeight", "isRichTextTruncated", "isExpando", "isTitleOnly", "postId", "showFull"]);
					const m = {
							[P.a.richTextContainerFull]: h,
							[P.a.richTextContainerTitleOnly]: l && !h,
							[P.a.richTextContainer]: !h && !l
						},
						u = {};
					h || (u.maxHeight = "".concat(l ? I.l : n ? I.k : I.j, "px")), o && (u.maxWidth = "".concat(M.e, "px"));
					const g = a && h;
					return r.a.createElement("div", D({
						className: Object(S.a)(m, i),
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
							e && e.contentWindow && !this.props.media.height && s && e.contentWindow.postMessage("twitter-measure-requested", E)
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
						title: n
					} = this.props, {
						isFullyLoaded: a
					} = this.state, d = s.height || (t.isDeleted ? z : J);
					return r.a.createElement(O.a, U({}, s, {
						alwaysWrapMedia: !0,
						height: d,
						showFull: !s.isListing,
						width: G
					}), e && r.a.createElement(r.a.Fragment, null, (!s.height || !a) && (t.isDeleted ? r.a.createElement("p", {
						className: A.a.tweetDeleted
					}, Object(_.c)("This Tweet has been deleted.")) : r.a.createElement("div", {
						className: Object(S.a)(Object(j.a)({
							isLoading: !0
						}), A.a.tweetPlaceholder)
					})), r.a.createElement(C.a, {
						childRef: this.embedBoxChildRef,
						className: Object(S.a)(A.a.tweetEmbedBox, {
							[A.a.isInvisible]: !s.height || !a
						}),
						height: d,
						isListing: s.isListing,
						isResponsive: !0,
						maxHeight: s.isListing ? I.i : null,
						onLoad: i,
						showCentered: s.showCentered,
						showFull: !0,
						source: o,
						title: n,
						width: G
					}), s.isListing && d > I.i && r.a.createElement("div", {
						className: A.a.seeMore
					}, r.a.createElement(H.c, null, "see full tweet"))))
				}
			}
			var X = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				Y = s("./src/reddit/components/PlayButton/index.tsx"),
				q = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
							color: Object(K.a)(Object(q.a)(Object.assign({
								flairStyleTemplate: t
							}, s)))
						}
					}, s))
				}),
				se = s("./src/reddit/components/RichTextJson/index.tsx"),
				ie = s("./src/reddit/constants/screenWidths.ts"),
				oe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ne = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				ae = s("./src/reddit/helpers/getRichTextContent/index.ts"),
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
				}(e.document, Object(de.c)(t));
				return s.found ? {
					document: s.updated
				} : e
			}
			const he = (e, t, s, i) => {
					const o = e / t,
						n = s / i;
					return Math.abs(o - n) < .03
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
						if (o.width >= I.e / 2 && he(e, t, o.height, o.width)) return o
					}
				},
				ue = e => {
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						if (s.height >= I.e || s.width >= I.f) return s
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
				Ee = M.s + M.r,
				Ce = e => e.isVisible ? e.children : r.a.createElement("div", {
					className: be.a.displayNone
				}, e.children),
				ye = new Set([I.n.EMBED, I.n.GIFVIDEO, I.n.VIDEO]),
				Oe = e => !!e.media && ye.has(e.media.type),
				Se = new Set([I.n.EMBED, I.n.GIFVIDEO, I.n.IMAGE, I.n.VIDEO]),
				Me = e => {
					let {
						post: t
					} = e;
					return !!t.media && Se.has(t.media.type)
				},
				Ie = Object(oe.t)(),
				Le = Object(h.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class Ne extends r.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && I.d.has(e.type)) {
							if (this.iframe) {
								const t = e.type === I.n.EMBED ? e.provider : null;
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
						return !!e && I.d.has(e.type)
					}, this.shouldFocusContentDebouncer = n()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && I.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === I.n.EMBED ? t.provider : null;
								i && !I.q.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? I.g.Pause : I.g.Play;
							e.contentWindow.postMessage({
								context: ve,
								method: s
							}, E), e.contentWindow.postMessage({
								context: ve,
								method: I.g.Mute
							}, E)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === I.t.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: I.x.Pause
						}), E) : e.contentWindow.postMessage({
							context: ve,
							method: I.g.Pause
						}, E))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === I.n.EMBED ? e.provider : null;
						if (this.iframe && s && !I.q.has(s)) {
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
						viewportHeight: I.e,
						viewportWidth: I.f
					}
				}
				componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					Oe(this.props.post) && (this.visibilityChangeSubscriptionId = x.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && Me(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && x.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && Me(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(I.i, this.state.viewportHeight),
						s = Math.min(xe, 16 * t / 9);
					s === xe && (t = 9 * xe / 16), e = this.state.viewportWidth >= ie.c ? this.state.viewportWidth < M.m ? this.state.viewportWidth - Ee - 2 * we : this.state.viewportWidth - Ee - M.f - 2 * we : this.state.viewportWidth - 2 * we;
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
					let s = I.i,
						i = I.m;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = I.r, i = I.s), {
						maxVideoHeight: s,
						maxVideoWidth: i
					})
				}
				getMediaInfo(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
					const {
						availableWidth: s,
						post: i
					} = e, o = i.media && i.media.obfuscated || "";
					let n = i.media && !Object(I.E)(i.media) ? i.media.content : "",
						[a, r] = !i.media || Object(I.C)(i.media) || Object(I.D)(i.media) ? [0, 0] : [i.media.height, i.media.width];
					if (s && i.media && (i.media.type === I.n.IMAGE || i.media.type === I.n.GIFVIDEO)) {
						const e = pe(s, i.media.resolutions);
						e && (n = e.url, r = e.width, a = e.height)
					} else if (i && i.media && (!e.isListing || e.isExpando) && (i.media.type === I.n.IMAGE || i.media.type === I.n.GIFVIDEO)) {
						let e;
						(e = Object(y.b)(i.media.height, i.media.width) && Object(y.c)(i.media.height) ? me(i.media.height, i.media.width, i.media.resolutions) : ue(i.media.resolutions)) && (n = e.url, r = e.width, a = e.height)
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
					if (i.media && i.media.type === I.n.VIDEO) {
						const t = a / r;
						e.isExpando ? (a = d, r = l) : t > I.c ? (a = d, r = Math.min(Math.max(d / t, I.p), l)) : (a = Math.min(Math.max(l * t, I.o), d), r = l)
					}
					i.media && i.media.type === I.n.EMBED && e.isExpando && i.media.provider !== I.t.Twitter && (a = d, r = l);
					let c = !1;
					if (e.isMiniCard) {
						const e = a / r;
						c = Math.abs(e - I.c) > .01
					}
					return {
						source: n,
						obfuscated: o,
						width: r,
						height: a,
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
						isExpando: n,
						isListing: a,
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
						shouldStop: E,
						viewportWidth: S
					} = this.state;
					if (!m.media) return null;
					const M = f || x,
						L = E,
						{
							source: N,
							obfuscated: j,
							height: T,
							width: P,
							needsBackgroundBlur: W
						} = this.getMediaInfo(this.props, this.state),
						F = {
							showCentered: u,
							isListing: a,
							showFull: g,
							height: T,
							width: P
						},
						D = Object.assign({}, F, {
							className: e,
							forceAspectRatio: i,
							viewportWidth: S
						}),
						B = this.shouldBlur(),
						V = !(!m.isSponsored || !m.source);
					if (j && B) return r.a.createElement(O.a, fe({}, D, {
						blurSrc: j
					}), r.a.createElement(Ce, {
						isVisible: b
					}, r.a.createElement(y.a, fe({}, F, {
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: a,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!m.media && m.media.type === I.n.VIDEO,
						onClick: this.onImageBoxClick,
						postId: m.id,
						shouldBlur: B,
						source: j,
						outboundUrl: V && m.source.outboundUrl || void 0,
						originalSource: N
					}))));
					if (!m.media) return null;
					switch (m.media.type) {
						case I.n.RTJSON:
							const i = Object(ae.a)(m, null);
							if (null === i) return;
							return g || Object(ne.a)(m) ? r.a.createElement(R, {
								canLoadContent: b,
								className: e,
								"data-click-id": "text",
								isCommentsPage: o,
								isExpando: n,
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
								renderMediaAsLinks: a
							})) : null;
						case I.n.TEXT:
							if (Object(re.a)(m)) {
								const t = "Text post should not include body content";
								return w.c.withScope(e => {
									e.setExtra("info", {
										post: m,
										isListing: a,
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
						case I.n.EMBED:
							return this.props.isMiniCard && m.preview && m.preview.url ? r.a.createElement(O.a, fe({}, D, {
								alwaysWrapMedia: !0
							}), r.a.createElement(Ce, {
								isVisible: b
							}, r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, fe({}, F, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: B,
								source: m.preview.url,
								originalSource: m.preview.url
							})), r.a.createElement(Y.a, null)))) : I.h.has(m.media.provider) ? m.media.provider === I.t.Twitter ? r.a.createElement(Q, {
								canLoadContent: b,
								embedBoxChildRef: this.storeChildRef,
								media: m.media,
								mediaContainerProps: D,
								onIframeLoaded: this.onIframeLoaded,
								source: N,
								title: m.title
							}) : r.a.createElement(O.a, fe({}, D, {
								alwaysWrapMedia: !0,
								height: n ? T : I.i,
								width: n ? P : I.i * (16 / 9)
							}), b && r.a.createElement(C.a, {
								childRef: this.storeChildRef,
								height: n ? T : I.i,
								width: n ? P : void 0,
								isListing: a,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: u,
								showFull: g,
								source: N,
								title: m.title
							})) : r.a.createElement(O.a, fe({}, D, {
								alwaysWrapMedia: !0
							}), b && r.a.createElement(C.a, fe({}, F, {
								isResponsive: n || m.media.provider === I.t.IFrameEmbed,
								title: m.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: N,
								fullWidth: m.media.provider === I.t.IFrameEmbed
							})));
						case I.n.GIFVIDEO: {
							let e = T,
								t = P;
							return e > I.i && (t = P / T * (e = I.i)), r.a.createElement(O.a, fe({}, D, {
								blurSrc: W ? m.media.gifBackgroundImage : void 0
							}), r.a.createElement(Ce, {
								isVisible: b
							}, r.a.createElement(X.a, fe({}, F, {
								isNotCardView: d,
								height: n ? void 0 : e,
								width: n ? void 0 : t,
								postId: m.id,
								shouldLoad: !0,
								shouldPause: M,
								source: N,
								originalSource: m.media.content
							}))))
						}
						case I.n.VIDEO: {
							const e = m.media.posterUrl || m.preview && m.preview.url;
							return this.props.isMiniCard && e ? r.a.createElement(O.a, fe({}, D, {
								alwaysWrapMedia: !0
							}), r.a.createElement(Ce, {
								isVisible: b
							}, r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, fe({}, F, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: m.id,
								shouldBlur: B,
								source: e,
								originalSource: e
							})), r.a.createElement(Y.a, null)))) : r.a.createElement(O.a, fe({}, D, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), b && r.a.createElement(v.b, {
								autoPlay: "boolean" == typeof x ? !x : void 0,
								isExpando: n,
								shouldLoad: !0,
								shouldPause: M,
								shouldStop: L,
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
						case I.n.IMAGE:
							const f = this.state.viewportHeight - 2 * we,
								E = this.state.viewportWidth - 2 * we;
							let S = N;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (m.thumbnail && Object(c.a)(m.thumbnail.url) ? S = m.thumbnail.url : m.preview && Object(c.a)(m.preview.url) && (S = m.preview.url)), r.a.createElement(O.a, fe({}, D, {
								blurSrc: W ? S : void 0,
								isExpando: !!n
							}), r.a.createElement(Ce, {
								isVisible: b
							}, r.a.createElement(y.a, fe({}, F, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: n ? f : void 0,
								maxWidth: n ? E : void 0,
								postId: m.id,
								shouldBlur: B,
								source: S,
								outboundUrl: V && m.source.outboundUrl || void 0,
								originalSource: m.media.content
							}))));
						default:
							return null
					}
				}
			}
			t.a = Ie(Object(d.a)(Ne))
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
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326.8e70670e8f5250ddf823.js.map