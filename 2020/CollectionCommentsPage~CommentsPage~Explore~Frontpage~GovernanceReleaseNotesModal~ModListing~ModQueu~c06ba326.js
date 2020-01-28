// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326.1c62caf85a9439f631ee.js
// Retrieved at 1/28/2020, 2:40:15 PM by Reddit Dataminer v1.0.0
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
				S = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				O = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				I = s("./src/reddit/constants/componentSizes.ts"),
				M = s("./src/reddit/models/Media/index.ts"),
				N = s("./node_modules/react-redux/es/index.js"),
				L = s("./src/reddit/actions/post.ts"),
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
			var F = Object(N.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(L.r)(t))
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
						isMediumHeight: n,
						isRichTextTruncated: a,
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
					h || (u.maxHeight = "".concat(l ? M.l : n ? M.k : M.j, "px")), o && (u.maxWidth = "".concat(I.e, "px"));
					const g = a && h;
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
				_ = s("./src/reddit/i18n/components.tsx"),
				H = s("./src/reddit/i18n/utils.ts"),
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
				Q = 300;
			class q extends r.a.Component {
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
					} = this.state, d = s.height || (t.isDeleted ? z : Q);
					return r.a.createElement(S.a, U({}, s, {
						alwaysWrapMedia: !0,
						height: d,
						showFull: !s.isListing,
						width: G
					}), e && r.a.createElement(r.a.Fragment, null, (!s.height || !a) && (t.isDeleted ? r.a.createElement("p", {
						className: A.a.tweetDeleted
					}, Object(H.c)("This Tweet has been deleted.")) : r.a.createElement("div", {
						className: Object(O.a)(Object(j.a)({
							isLoading: !0
						}), A.a.tweetPlaceholder)
					})), r.a.createElement(C.a, {
						childRef: this.embedBoxChildRef,
						className: Object(O.a)(A.a.tweetEmbedBox, {
							[A.a.isInvisible]: !s.height || !a
						}),
						height: d,
						isListing: s.isListing,
						isResponsive: !0,
						maxHeight: s.isListing ? M.i : null,
						onLoad: i,
						showCentered: s.showCentered,
						showFull: !0,
						source: o,
						title: n,
						width: G
					}), s.isListing && d > M.i && r.a.createElement("div", {
						className: A.a.seeMore
					}, r.a.createElement(_.c, null, "see full tweet"))))
				}
			}
			var J = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				Y = s("./src/reddit/components/PlayButton/index.tsx"),
				X = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
							color: Object(K.a)(Object(X.a)(Object.assign({
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
						if (o.width >= M.e / 2 && he(e, t, o.height, o.width)) return o
					}
				},
				ue = e => {
					for (let t = 0; t < e.length; t++) {
						const s = e[t];
						if (s.height >= M.e || s.width >= M.f) return s
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
				Ee = I.s + I.r,
				Ce = e => e.isVisible ? e.children : r.a.createElement("div", {
					className: be.a.displayNone
				}, e.children),
				ye = new Set([M.n.EMBED, M.n.GIFVIDEO, M.n.VIDEO]),
				Se = e => !!e.media && ye.has(e.media.type),
				Oe = new Set([M.n.EMBED, M.n.GIFVIDEO, M.n.IMAGE, M.n.VIDEO]),
				Ie = e => {
					let {
						post: t
					} = e;
					return !!t.media && Oe.has(t.media.type)
				},
				Me = Object(oe.t)(),
				Ne = Object(h.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class Le extends r.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && M.d.has(e.type)) {
							if (this.iframe) {
								const t = e.type === M.n.EMBED ? e.provider : null;
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
						return !!e && M.d.has(e.type)
					}, this.shouldFocusContentDebouncer = n()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && M.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === M.n.EMBED ? t.provider : null;
								i && !M.q.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? M.g.Pause : M.g.Play;
							e.contentWindow.postMessage({
								context: ve,
								method: s
							}, E), e.contentWindow.postMessage({
								context: ve,
								method: M.g.Mute
							}, E)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === M.t.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: M.x.Pause
						}), E) : e.contentWindow.postMessage({
							context: ve,
							method: M.g.Pause
						}, E))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === M.n.EMBED ? e.provider : null;
						if (this.iframe && s && !M.q.has(s)) {
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
						viewportHeight: M.e,
						viewportWidth: M.f
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
					let e, t = Math.max(M.i, this.state.viewportHeight),
						s = Math.min(xe, 16 * t / 9);
					s === xe && (t = 9 * xe / 16), e = this.state.viewportWidth >= ie.c ? this.state.viewportWidth < I.m ? this.state.viewportWidth - Ee - 2 * we : this.state.viewportWidth - Ee - I.f - 2 * we : this.state.viewportWidth - 2 * we;
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
					let s = M.i,
						i = M.m;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = M.r, i = M.s), {
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
					if (Object(M.C)(i.media)) return {
						source: i.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * we,
						height: this.state.viewportHeight - 2 * we
					};
					const o = i.media && i.media.obfuscated || "";
					let n = i.media && !Object(M.F)(i.media) ? i.media.content : "",
						[a, r] = !i.media || Object(M.D)(i.media) || Object(M.E)(i.media) ? [0, 0] : [i.media.height, i.media.width];
					if (s && i.media && (i.media.type === M.n.IMAGE || i.media.type === M.n.GIFVIDEO)) {
						const e = pe(s, i.media.resolutions);
						e && (n = e.url, r = e.width, a = e.height)
					} else if (i && i.media && (!e.isListing || e.isExpando) && (i.media.type === M.n.IMAGE || i.media.type === M.n.GIFVIDEO)) {
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
					if (i.media && i.media.type === M.n.VIDEO) {
						const t = a / r;
						e.isExpando ? (a = d, r = l) : t > M.c ? (a = d, r = Math.min(Math.max(d / t, M.p), l)) : (a = Math.min(Math.max(l * t, M.o), d), r = l)
					}
					i.media && i.media.type === M.n.EMBED && e.isExpando && i.media.provider !== M.t.Twitter && (a = d, r = l);
					let c = !1;
					if (e.isMiniCard) {
						const e = a / r;
						c = Math.abs(e - M.c) > .01
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
						viewportWidth: O
					} = this.state;
					if (!m.media) return null;
					const I = f || x,
						N = E,
						{
							source: L,
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
						B = Object.assign({}, F, {
							className: e,
							forceAspectRatio: i,
							viewportWidth: O
						}),
						D = this.shouldBlur(),
						V = !(!m.isSponsored || !m.source);
					if (j && D) return r.a.createElement(S.a, fe({}, B, {
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
						isVideoThumbnail: !!m.media && m.media.type === M.n.VIDEO,
						onClick: this.onImageBoxClick,
						postId: m.id,
						shouldBlur: D,
						source: j,
						outboundUrl: V && m.source.outboundUrl || void 0,
						originalSource: L
					}))));
					if (!m.media) return null;
					switch (m.media.type) {
						case M.n.RTJSON:
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
								rtJsonElementProps: Ne(this.props),
								renderMediaAsLinks: a
							})) : null;
						case M.n.TEXT:
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
						case M.n.EMBED:
							return this.props.isMiniCard && m.preview && m.preview.url ? r.a.createElement(S.a, fe({}, B, {
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
								shouldBlur: D,
								source: m.preview.url,
								originalSource: m.preview.url
							})), r.a.createElement(Y.a, null)))) : M.h.has(m.media.provider) ? m.media.provider === M.t.Twitter ? r.a.createElement(q, {
								canLoadContent: b,
								embedBoxChildRef: this.storeChildRef,
								media: m.media,
								mediaContainerProps: B,
								onIframeLoaded: this.onIframeLoaded,
								source: L,
								title: m.title
							}) : r.a.createElement(S.a, fe({}, B, {
								alwaysWrapMedia: !0,
								height: n ? T : M.i,
								width: n ? P : M.i * (16 / 9)
							}), b && r.a.createElement(C.a, {
								childRef: this.storeChildRef,
								height: n ? T : M.i,
								width: n ? P : void 0,
								isListing: a,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: u,
								showFull: g,
								source: L,
								title: m.title
							})) : r.a.createElement(S.a, fe({}, B, {
								alwaysWrapMedia: !0
							}), b && r.a.createElement(C.a, fe({}, F, {
								isResponsive: n || m.media.provider === M.t.IFrameEmbed,
								title: m.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: L,
								fullWidth: m.media.provider === M.t.IFrameEmbed
							})));
						case M.n.GIFVIDEO: {
							let e = T,
								t = P;
							return e > M.i && (t = P / T * (e = M.i)), r.a.createElement(S.a, fe({}, B, {
								blurSrc: W ? m.media.gifBackgroundImage : void 0
							}), r.a.createElement(Ce, {
								isVisible: b
							}, r.a.createElement(J.a, fe({}, F, {
								isNotCardView: d,
								height: n ? void 0 : e,
								width: n ? void 0 : t,
								postId: m.id,
								shouldLoad: !0,
								shouldPause: I,
								source: L,
								originalSource: m.media.content
							}))))
						}
						case M.n.VIDEO: {
							const e = m.media.posterUrl || m.preview && m.preview.url;
							return this.props.isMiniCard && e ? r.a.createElement(S.a, fe({}, B, {
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
								shouldBlur: D,
								source: e,
								originalSource: e
							})), r.a.createElement(Y.a, null)))) : r.a.createElement(S.a, fe({}, B, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), b && r.a.createElement(v.b, {
								autoPlay: "boolean" == typeof x ? !x : void 0,
								isExpando: n,
								shouldLoad: !0,
								shouldPause: I,
								shouldStop: N,
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
						case M.n.LIVEVIDEO:
							return r.a.createElement(S.a, fe({}, B, {
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
								maxHeight: n ? F.height : void 0,
								maxWidth: n ? F.width : void 0,
								postId: m.id,
								shouldBlur: D,
								source: L,
								outboundUrl: m.source.url,
								originalSource: L
							}))));
						case M.n.IMAGE:
							const f = this.state.viewportHeight - 2 * we,
								E = this.state.viewportWidth - 2 * we;
							let O = L;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (m.thumbnail && Object(c.a)(m.thumbnail.url) ? O = m.thumbnail.url : m.preview && Object(c.a)(m.preview.url) && (O = m.preview.url)), r.a.createElement(S.a, fe({}, B, {
								blurSrc: W ? O : void 0,
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
			t.a = Me(Object(d.a)(Le))
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
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			}));
			var i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				n = s.n(o);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(i.a)(n.a.loadingBackground, {
						[n.a["m-loading"]]: t
					})
				},
				r = e => Object(i.a)(n.a.loadingBar, a(e))
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~c06ba326.1c62caf85a9439f631ee.js.map