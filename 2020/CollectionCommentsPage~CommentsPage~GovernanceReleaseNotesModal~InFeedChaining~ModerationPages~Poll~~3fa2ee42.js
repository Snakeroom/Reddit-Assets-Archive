// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42.3e3d5ca8c28198df18b8.js
// Retrieved at 5/26/2020, 6:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"], {
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/cache/localStorage/index.ts"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				c = () => Object(d.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				l = s("./src/reddit/constants/experiments.ts"),
				h = s("./src/reddit/helpers/chooseVariant/index.ts");
			const u = Object(a.a)(e => {
				const t = Object(h.c)(e, {
					experimentEligibilitySelector: h.a,
					experimentName: l.yb
				});
				return Object(l.tc)(t) ? void 0 : t
			}, e => {
				const t = Object(h.c)(e, {
					experimentEligibilitySelector: h.a,
					experimentName: l.zb
				});
				return Object(l.tc)(t) ? void 0 : t
			}, (e, t) => e === l.Ab.Enabled && t === l.Ab.Enabled);
			var p = s("./src/config.ts");
			var m = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const b = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						i = new Uint32Array(e);
					return crypto.getRandomValues(i), Array.from(i).map(e => t.charAt(e % s)).join("")
				},
				g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				x = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var f;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(f || (f = {}));
			const E = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					i = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(i)).map(x).join("")
			})(f.SHA1, e);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (s[i[n]] = e[i[n]])
				}
				return s
			};
			const w = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				O = Object({
					SENTRY_RELEASE_VERSION: "190a418-production"
				}),
				S = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: p.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: "Reddit/Version Build ".concat(O.SENTRY_RELEASE_VERSION, " ").concat(p.a.appName),
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: s,
					debug: d,
					disableCookies: l,
					envKey: h,
					localStorageSaltKey: p,
					localStorageViewerUserIdKey: x,
					playerName: f,
					playerVersion: O,
					respectDoNotTrack: I,
					saltLength: C,
					saltTimeToLive: L,
					viewerUserIdLength: M
				} = Object.assign({}, S, t);
				class T extends i.Component {
					constructor() {
						super(...arguments), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(i.createRef)(), this.handleDashCreate = e => {
							this.setDashInstance(e)
						}, this.handleDashDestroy = () => {
							this.setDashInstance(null)
						}, this.handleHlsCreate = e => {
							this.setHlsInstance(e)
						}, this.handleHlsDestroy = () => {
							this.setHlsInstance(null)
						}
					}
					get experimentName() {
						return ""
					}
					get video() {
						return this.videoRef.current
					}
					componentDidMount() {
						this.doMuxThings()
					}
					componentDidUpdate(e) {
						this.props.muxVideoId !== e.muxVideoId && this.doMuxThings()
					}
					render() {
						const t = this.props,
							{
								forwardedRef: s
							} = t,
							i = y(t, ["forwardedRef"]);
						return n.a.createElement(e, v({}, i, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: s,
							videoRef: this.videoRef
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const e = await c();
							e.removeDashJS(this.video), this.dashInstance && e.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const e = await c();
							e.removeHLSJS(this.video), this.hlsInstance && e.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await c();
							if (this.isMonitoring) {
								const t = this.getVideoData();
								e.emit(this.video, "videochange", t)
							} else {
								const t = await this.getMuxData();
								e.monitor(this.video, t), this.isMonitoring = !0
							}
						} catch (e) {
							console.error(e)
						}
					}
					async encryptViewerUserId() {
						const e = this.props.redditUserId || T.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = g(),
							i = "".concat(s).concat(e).concat(t);
						return (await E(i)).substr(0, T.VIEWER_USER_ID_LENGTH)
					}
					getDashInstanceData() {
						const {
							dashInstance: e
						} = this;
						return e ? {
							dashjs: e
						} : null
					}
					getHlsInstanceData() {
						const {
							hlsInstance: e
						} = this;
						return e ? {
							hlsjs: e,
							Hls: e.constructor
						} : null
					}
					async getMuxData() {
						const e = await this.encryptViewerUserId(),
							t = this.getVideoData(),
							s = this.getThirdPartyLibData();
						return Object.assign({
							debug: T.DEBUG,
							disableCookies: T.DISABLE_COOKIES,
							respectDoNotTrack: T.RESPECT_DO_NOT_TRACK
						}, s, {
							data: Object.assign({
								env_key: T.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: T.PLAYER_NAME,
								player_version: T.PLAYER_VERSION
							}, t, {
								viewer_user_id: e
							})
						})
					}
					getOrCreateSalt() {
						const e = T.LOCAL_STORAGE_SALT_KEY;
						let t = Object(r.a)(e);
						return t || (t = b(T.SALT_LENGTH), Object(r.b)(e, t, T.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return Object.assign({}, this.getDashInstanceData(), this.getHlsInstanceData())
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: i
						} = this.props;
						return {
							video_duration: s ? T.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? T.STREAM_TYPE_LIVE : T.STREAM_TYPE_ON_DEMAND,
							video_title: i
						}
					}
				}
				T.displayName = w(e), T.ANONYMOUS_USER_ID = s, T.DEBUG = d, T.DISABLE_COOKIES = l, T.DURATION_LIVE = 1 / 0, T.ENV_KEY = h, T.LOCAL_STORAGE_SALT_KEY = p, T.LOCAL_STORAGE_VIEWER_USER_ID_KEY = x, T.PLAYER_NAME = f, T.PLAYER_VERSION = O, T.RESPECT_DO_NOT_TRACK = I, T.SALT_LENGTH = C, T.SALT_TIME_TO_LIVE = L, T.STREAM_TYPE_LIVE = "live", T.STREAM_TYPE_ON_DEMAND = "on-demand", T.VIEWER_USER_ID_LENGTH = M;
				const j = Object(i.forwardRef)((e, t) => n.a.createElement(T, v({}, e, {
						forwardedRef: t
					}))),
					N = Object(a.c)({
						redditUserId: m.g,
						isMuxEnabled: u
					});
				return Object(o.b)(N, null, null, {
					forwardRef: !0
				})(j)
			}
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			var i, n = s("./node_modules/brcast/dist/brcast.es.js"),
				o = s("./node_modules/lodash/findKey.js"),
				a = s.n(o);
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
			const c = Object(n.a)({
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
		"./src/reddit/components/Governance/Proposal/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Proposal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Proposal").then(s.bind(null, "./src/reddit/components/Governance/Proposal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Proposal/index.tsx"
				}
			})
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
				n = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/componentSizes.ts"),
				r = s("./src/reddit/models/Media/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				h = s("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				u = s.n(h);
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
						className: u.a.placeholder
					}, [1, 2, 3].map(t => n.a.createElement("div", {
						key: t,
						className: u.a.placeholderParagraph
					}, n.a.createElement("div", {
						className: e
					}), n.a.createElement("div", {
						className: e
					}), n.a.createElement("div", {
						className: e
					}))))
				}
			}
			var m = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(c.A)(t))
			}))(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (s[i[n]] = e[i[n]])
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
					isTitleOnly: p,
					postId: x,
					showFull: f
				} = e, E = g(e, ["canLoadContent", "children", "className", "isCommentsPage", "isMediumHeight", "isRichTextTruncated", "isExpando", "isTitleOnly", "postId", "showFull"]);
				const v = {
						[u.a.richTextContainerFull]: f,
						[u.a.richTextContainerTitleOnly]: p && !f,
						[u.a.richTextContainer]: !f && !p
					},
					y = {};
				f || (y.maxHeight = "".concat(p ? r.l : c ? r.k : r.j, "px")), d && (y.maxWidth = "".concat(a.d, "px"));
				const w = l && f;
				return n.a.createElement("div", b({
					className: Object(o.a)(v, i),
					style: y
				}, E), s, w && n.a.createElement(m, {
					canLoadContent: !!t,
					isExpando: h,
					postId: x
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
				n = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/intersectionObserver/index.ts"),
				r = s("./src/reddit/components/Media/constants.ts"),
				d = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				c = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				l = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				h = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/i18n/utils.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				b = s.n(m);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const x = 350,
				f = 100,
				E = 300;
			class v extends n.a.Component {
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
						isFullyLoaded: m
					} = this.state, v = s.height || (t.isDeleted ? f : E);
					return n.a.createElement(c.a, g({}, s, {
						alwaysWrapMedia: !0,
						height: v,
						showFull: !s.isListing,
						width: x
					}), e && n.a.createElement(n.a.Fragment, null, (!s.height || !m) && (t.isDeleted ? n.a.createElement("p", {
						className: b.a.tweetDeleted
					}, Object(u.b)("This Tweet has been deleted.")) : n.a.createElement("div", {
						className: Object(o.a)(Object(l.a)({
							isLoading: !0
						}), b.a.tweetPlaceholder)
					})), n.a.createElement(d.a, {
						childRef: this.embedBoxChildRef,
						className: Object(o.a)(b.a.tweetEmbedBox, {
							[b.a.isInvisible]: !s.height || !m
						}),
						height: v,
						isListing: s.isListing,
						isResponsive: !0,
						maxHeight: s.isListing ? p.i : null,
						onLoad: i,
						showCentered: s.showCentered,
						showFull: !0,
						source: a,
						title: r,
						width: x
					}), s.isListing && v > p.i && n.a.createElement("div", {
						className: b.a.seeMore
					}, n.a.createElement(h.a, null, "see full tweet"))))
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
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return r
			}));
			var i = s("./src/reddit/models/Media/index.ts");
			const n = (e, t, s, i) => {
					const n = e / t,
						o = s / i;
					return Math.abs(n - o) < .03
				},
				o = (e, t) => {
					for (let s = 0; s < t.length; s++) {
						const i = t[s];
						if (i.width >= e) return i
					}
				},
				a = (e, t, s) => {
					for (let o = 0; o < s.length; o++) {
						const a = s[o];
						if (a.width >= i.e / 2 && n(e, t, a.height, a.width)) return a
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
				n = s.n(i),
				o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/lodash/debounce.js"),
				r = s.n(a),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				u = s("./src/higherOrderComponents/withMux/index.tsx"),
				p = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/env/index.ts"),
				b = s("./src/lib/isUrl/index.ts"),
				g = s("./src/lib/objectSelector/index.ts"),
				x = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				f = s("./src/lib/sentry/index.ts"),
				E = s("./src/reddit/components/Governance/Proposal/async.ts"),
				v = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				y = s("./src/reddit/components/Media/constants.ts"),
				w = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				O = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				S = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				I = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				C = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				L = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				M = s("./src/reddit/components/PlayButton/index.tsx"),
				T = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				j = s("./src/reddit/components/RichTextJson/index.tsx"),
				N = s("./src/reddit/constants/componentSizes.ts"),
				_ = s("./src/reddit/constants/screenWidths.ts"),
				D = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				R = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				V = s("./src/reddit/helpers/name/index.ts"),
				A = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				H = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				W = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				F = s("./src/reddit/models/Media/index.ts"),
				B = s("./src/reddit/selectors/experiments/postSeo.ts"),
				U = s("./src/reddit/selectors/postCreations.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				G = s("./src/reddit/components/Media/getResolution.ts"),
				Y = s("./src/reddit/components/Media/index.m.less"),
				K = s.n(Y);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const z = Object(o.a)({
					resolved: {},
					chunkName: () => "LiveVideoPlayer",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("LiveVideoPlayer~PublicAccessNetwork"), s.e("LiveVideoPlayer")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx")),
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
				q = Object(u.a)(v.b, {
					playerName: "Reddit Player"
				}),
				Q = 1200,
				X = 75,
				Z = "player.js",
				$ = N.r + N.q,
				ee = e => e.isVisible ? e.children : c.a.createElement("div", {
					className: K.a.displayNone
				}, e.children),
				te = new Set([F.n.EMBED, F.n.GIFVIDEO, F.n.LIVEVIDEO, F.n.VIDEO]),
				se = e => !!e.media && te.has(e.media.type),
				ie = new Set([F.n.EMBED, F.n.GIFVIDEO, F.n.IMAGE, F.n.LIVEVIDEO, F.n.VIDEO]),
				ne = e => {
					let {
						post: t
					} = e;
					return !!t.media && ie.has(t.media.type)
				},
				oe = Object(D.t)(),
				ae = Object(h.c)({
					isPostImageAltTextVariant: B.b,
					subredditOrProfileDisplayText: (e, t) => {
						let {
							post: s
						} = t;
						const i = Object(k.bb)(e, s);
						return i && i.displayText || s && s.author && Object(V.c)(s.author)
					},
					subredditOrProfile: (e, t) => {
						let {
							post: s
						} = t;
						return Object(k.bb)(e, {
							postId: s.id
						})
					},
					isEditing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(U.C)(e, {
							postId: s.id
						})
					}
				}),
				re = Object(l.b)(ae),
				de = Object(g.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class ce extends c.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && F.d.has(e.type)) {
							if (this.iframe) {
								const t = e.type === F.n.EMBED ? e.provider : null;
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
						return !!e && F.d.has(e.type)
					}, this.shouldFocusContentDebouncer = r()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && F.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === F.n.EMBED ? t.provider : null;
								i && !F.q.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? F.g.Pause : F.g.Play;
							e.contentWindow.postMessage({
								context: Z,
								method: s
							}, y.a), e.contentWindow.postMessage({
								context: Z,
								method: F.g.Mute
							}, y.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === F.t.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: F.x.Pause
						}), y.a) : e.contentWindow.postMessage({
							context: Z,
							method: F.g.Pause
						}, y.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === F.n.EMBED ? e.provider : null;
						if (this.iframe && s && !F.q.has(s)) {
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
						viewportHeight: F.e,
						viewportWidth: F.f
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					se(this.props.post) && (this.visibilityChangeSubscriptionId = x.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && ne(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && x.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && ne(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(F.i, this.state.viewportHeight),
						s = Math.min(Q, 16 * t / 9);
					s === Q && (t = 9 * Q / 16), e = this.state.viewportWidth >= _.c ? this.state.viewportWidth < N.l ? this.state.viewportWidth - $ - 2 * X : this.state.viewportWidth - $ - N.e - 2 * X : this.state.viewportWidth - 2 * X;
					const i = this.state.viewportHeight - 2 * X;
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
					let s = F.i,
						i = F.m;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = F.r, i = F.s), {
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
					if (Object(F.B)(i.media)) return {
						source: i.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * X,
						height: this.state.viewportHeight - 2 * X
					};
					const n = i.media && i.media.obfuscated || "";
					let o = i.media && !Object(F.E)(i.media) ? i.media.content : "",
						[a, r] = !i.media || Object(F.C)(i.media) || Object(F.D)(i.media) ? [0, 0] : [i.media.height, i.media.width];
					if (s && i.media && (i.media.type === F.n.IMAGE || i.media.type === F.n.GIFVIDEO)) {
						const e = G.b(s, i.media.resolutions);
						e && (o = e.url, r = e.width, a = e.height)
					} else if (i && i.media && (!e.isListing || e.isExpando) && (i.media.type === F.n.IMAGE || i.media.type === F.n.GIFVIDEO)) {
						let e;
						(e = Object(O.b)(i.media.height, i.media.width) && Object(O.c)(i.media.height) ? G.c(i.media.height, i.media.width, i.media.resolutions) : G.a(i.media.resolutions)) && (o = e.url, r = e.width, a = e.height)
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
					if (i.media && i.media.type === F.n.VIDEO) {
						const t = a / r;
						e.isExpando ? (a = d, r = c) : t > F.c ? (a = d, r = Math.min(Math.max(d / t, F.p), c)) : (a = Math.min(Math.max(c * t, F.o), d), r = c)
					}
					i.media && i.media.type === F.n.EMBED && e.isExpando && i.media.provider !== F.t.Twitter && (a = d, r = c);
					let l = !1;
					if (e.isMiniCard) {
						const e = a / r;
						l = Math.abs(e - F.c) > .01
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
						theme: s
					} = this.props, i = this.isNSFW(), n = this.isSpoiler();
					return !(e || this.state.isRevealed || t) && (i && !s.subredditContext.shouldShowNSFWContent || n)
				}
				render() {
					const {
						className: e,
						crosspost: t,
						flairStyleTemplate: s,
						forceAspectRatio: i,
						isCommentsPage: n,
						isExpando: o,
						isListing: a,
						isMediumHeight: r,
						isNotCardView: d,
						isPostImageAltTextVariant: l,
						isTitleOnly: h,
						post: u,
						showCentered: p,
						showFull: g = !1,
						subredditOrProfileDisplayText: x
					} = this.props, {
						canLoadContent: v,
						forcePause: y,
						shouldPause: N,
						shouldStop: _,
						viewportWidth: D
					} = this.state;
					if (!u.media) return null;
					const V = y || N,
						B = _,
						{
							source: U,
							obfuscated: k,
							height: G,
							width: Y,
							needsBackgroundBlur: Q
						} = this.getMediaInfo(this.props, this.state),
						Z = {
							showCentered: p,
							isListing: a,
							showFull: g,
							height: G,
							width: Y
						},
						$ = Object.assign({}, Z, {
							className: e,
							forceAspectRatio: i,
							viewportWidth: D
						}),
						te = this.shouldBlur(),
						se = !(!u.isSponsored || !u.source);
					if (k && te) return c.a.createElement(S.a, J({}, $, {
						blurSrc: k
					}), c.a.createElement(ee, {
						isVisible: v
					}, c.a.createElement(O.a, J({}, Z, {
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: a,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!u.media && u.media.type === F.n.VIDEO,
						onClick: this.onImageBoxClick,
						postId: u.id,
						shouldBlur: te,
						source: k,
						outboundUrl: se && u.source.outboundUrl || void 0,
						originalSource: U
					}))));
					if (!u.media) return null;
					switch (u.media.type) {
						case F.n.RTJSON:
							const i = Object(R.a)(u, null);
							if (null === i) return;
							return g || Object(P.a)(u) ? c.a.createElement(c.a.Fragment, null, c.a.createElement(I.a, {
								canLoadContent: v,
								className: e,
								"data-click-id": "text",
								isCommentsPage: n,
								isExpando: o,
								isMediumHeight: r,
								isRichTextTruncated: u.media.isRichtextPreview,
								isTitleOnly: h,
								postId: u.id,
								showFull: g
							}, c.a.createElement(j.a, {
								flairStyleTemplate: s,
								content: u.isMeta ? Object(W.a)(i, u.id) : i,
								mediaMetadata: u.media.mediaMetadata,
								postId: u.id,
								rtJsonElementProps: de(this.props),
								renderMediaAsLinks: a
							})), c.a.createElement(E.a, {
								postId: u.id,
								isCommentsPage: !!n
							})) : null;
						case F.n.TEXT:
							if (Object(A.a)(u)) {
								const t = "Text post should not include body content";
								return f.c.withScope(e => {
									e.setExtra("info", {
										post: u,
										isListing: a,
										isCommentsPage: n
									}), f.c.captureMessage(t)
								}), Object(m.a)() && console.log("".concat(u.id, ": ").concat(t)), c.a.createElement(I.a, {
									postId: u.id,
									className: e,
									"data-click-id": "text",
									isCommentsPage: n,
									showFull: g
								}, c.a.createElement(T.a, {
									flairStyleTemplate: s,
									html: u.isMeta ? Object(H.a)(u.media.content, u.id, K.a.hiddenLink) : u.media.content
								}))
							}
							return null;
						case F.n.EMBED:
							return this.props.isMiniCard && u.preview && u.preview.url ? c.a.createElement(S.a, J({}, $, {
								alwaysWrapMedia: !0
							}), c.a.createElement(ee, {
								isVisible: v
							}, c.a.createElement(c.a.Fragment, null, c.a.createElement(O.a, J({}, Z, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: u.id,
								shouldBlur: te,
								source: u.preview.url,
								originalSource: u.preview.url
							})), c.a.createElement(M.a, null)))) : F.h.has(u.media.provider) ? u.media.provider === F.t.Twitter ? c.a.createElement(C.a, {
								canLoadContent: v,
								embedBoxChildRef: this.storeChildRef,
								media: u.media,
								mediaContainerProps: $,
								onIframeLoaded: this.onIframeLoaded,
								source: U,
								title: u.title
							}) : c.a.createElement(S.a, J({}, $, {
								alwaysWrapMedia: !0,
								height: o ? G : F.i,
								width: o ? Y : F.i * (16 / 9)
							}), v && c.a.createElement(w.a, {
								childRef: this.storeChildRef,
								height: o ? G : F.i,
								width: o ? Y : void 0,
								isListing: a,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: p,
								showFull: g,
								source: U,
								title: u.title
							})) : c.a.createElement(S.a, J({}, $, {
								alwaysWrapMedia: !0
							}), v && c.a.createElement(w.a, J({}, Z, {
								isResponsive: o || u.media.provider === F.t.IFrameEmbed,
								title: u.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: U,
								fullWidth: u.media.provider === F.t.IFrameEmbed
							})));
						case F.n.GIFVIDEO: {
							let e = G,
								t = Y;
							return e > F.i && (t = Y / G * (e = F.i)), c.a.createElement(S.a, J({}, $, {
								blurSrc: Q ? u.media.gifBackgroundImage : void 0
							}), c.a.createElement(ee, {
								isVisible: v
							}, c.a.createElement(L.a, J({}, Z, {
								isNotCardView: d,
								height: o ? void 0 : e,
								width: o ? void 0 : t,
								postId: u.id,
								shouldLoad: !0,
								shouldPause: V,
								source: U,
								originalSource: u.media.content
							}))))
						}
						case F.n.VIDEO: {
							const e = u.media.posterUrl || u.preview && u.preview.url;
							return this.props.isMiniCard && e ? c.a.createElement(S.a, J({}, $, {
								alwaysWrapMedia: !0
							}), c.a.createElement(ee, {
								isVisible: v
							}, c.a.createElement(c.a.Fragment, null, c.a.createElement(O.a, J({}, Z, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: u.id,
								shouldBlur: te,
								source: e,
								originalSource: e
							})), c.a.createElement(M.a, null)))) : c.a.createElement(S.a, J({}, $, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), v && c.a.createElement(q, {
								autoPlay: "boolean" == typeof N ? !N : void 0,
								isExpando: o,
								shouldLoad: !0,
								shouldPause: V,
								shouldStop: B,
								hlsSource: u.media.hlsUrl,
								mpegDashSource: u.media.dashUrl,
								isGif: u.media.isGif,
								scrubberThumbSource: u.media.scrubberThumbSource,
								postId: u.id,
								callToActionSource: u.source || void 0,
								callToActionText: u.callToAction,
								isListing: a,
								posterUrl: u.media.posterUrl,
								muxVideoDuration: void 0,
								muxVideoId: u.id,
								muxVideoIsLive: !1,
								muxVideoTitle: u.title
							}))
						}
						case F.n.LIVEVIDEO:
							return c.a.createElement(ee, {
								isVisible: v
							}, c.a.createElement(z, {
								canLoad: v,
								postId: u.id,
								postTitle: u.title,
								shouldPause: V,
								url: u.media.hlsUrl
							}));
						case F.n.IMAGE:
							const y = this.state.viewportHeight - 2 * X,
								_ = this.state.viewportWidth - 2 * X;
							let D, k = U;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (u.thumbnail && Object(b.a)(u.thumbnail.url) ? k = u.thumbnail.url : u.preview && Object(b.a)(u.preview.url) && (k = u.preview.url)), l && (D = x ? "".concat(x, " - ").concat(u.title) : u.title), c.a.createElement(S.a, J({}, $, {
								blurSrc: Q ? k : void 0,
								isExpando: !!o
							}), c.a.createElement(ee, {
								isVisible: v
							}, c.a.createElement(O.a, J({}, Z, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: o ? y : void 0,
								maxWidth: o ? _ : void 0,
								postId: u.id,
								shouldBlur: te,
								source: k,
								outboundUrl: se && u.source.outboundUrl || void 0,
								originalSource: u.media.content,
								altText: D
							}))));
						default:
							return null
					}
				}
			}
			t.a = oe(re(Object(p.a)(ce)))
		},
		"./src/reddit/components/RawHTMLDisplay/Media.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
					var n = 0;
					for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (s[i[n]] = e[i[n]])
				}
				return s
			};
			t.a = Object(o.a)(e => {
				var {
					flairStyleTemplate: t
				} = e, s = l(e, ["flairStyleTemplate"]);
				return n.a.createElement(d.a, c({
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
			t.a = e => (Object(i.a)(e) || !!e.pollData) && !e.isSpoiler && !e.isNSFW
		},
		"./src/reddit/helpers/postHasSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/models/Media/index.ts"),
				n = s("./src/reddit/models/RichTextJson/index.ts");
			t.a = e => {
				const t = e && e.media;
				return !!t && (t.type === i.n.TEXT && !!t.content || t.type === i.n.RTJSON && !Object(n.F)(t.richtextContent))
			}
		},
		"./src/reddit/helpers/stripMetaLinks/fromRTJ.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var i = s("./src/lib/redditId/index.ts");

			function n(e, t) {
				const s = function e(t, s) {
					let i = !1;
					let n = [];
					try {
						for (const o of t)
							if ("link" === o.e && o.u && o.u.includes("https://www.reddit.com/poll/".concat(s))) i = !0;
							else if (o.c && "string" != typeof o.c) {
							const t = e(o.c, s);
							t.found ? (i = !0, ("par" !== o.e || t.updated.length) && n.push(Object.assign({}, o, {
								c: t.updated
							}))) : n.push(o)
						} else n.push(o)
					} catch (o) {
						i = !1, n = []
					}
					return {
						found: i,
						updated: i ? n : t
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
				return n
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var i = s("./src/lib/redditId/index.ts");

			function n(e, t, s) {
				return e.replace('href="https://www.reddit.com/poll/'.concat(Object(i.c)(t)), 'class="'.concat(s, '" href="https://www.reddit.com/poll/').concat(Object(i.c)(t)))
			}
		},
		"./src/reddit/i18n/components.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);

			function o(e) {
				return n.a.createElement(n.a.Fragment, null, e.children)
			}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42.3e3d5ca8c28198df18b8.js.map