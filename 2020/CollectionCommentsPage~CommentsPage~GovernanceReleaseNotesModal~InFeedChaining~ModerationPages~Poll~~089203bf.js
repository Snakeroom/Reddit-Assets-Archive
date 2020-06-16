// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf.1afa14ce6733ab3a5c3d.js
// Retrieved at 6/16/2020, 1:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"], {
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
					experimentName: l.Cb
				});
				return Object(l.vc)(t) ? void 0 : t
			}, e => {
				const t = Object(h.c)(e, {
					experimentEligibilitySelector: h.a,
					experimentName: l.Db
				});
				return Object(l.vc)(t) ? void 0 : t
			}, (e, t) => e === l.Eb.Enabled && t === l.Eb.Enabled);
			var p = s("./src/config.ts");
			var m = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const b = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						i = new Uint32Array(e);
					return crypto.getRandomValues(i), Array.from(i).map(e => t.charAt(e % s)).join("")
				},
				x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				g = function(e) {
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
				return Array.from(new Uint8Array(i)).map(g).join("")
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
					SENTRY_RELEASE_VERSION: "948778c-production"
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
					localStorageViewerUserIdKey: g,
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
							s = x(),
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
				T.displayName = w(e), T.ANONYMOUS_USER_ID = s, T.DEBUG = d, T.DISABLE_COOKIES = l, T.DURATION_LIVE = 1 / 0, T.ENV_KEY = h, T.LOCAL_STORAGE_SALT_KEY = p, T.LOCAL_STORAGE_VIEWER_USER_ID_KEY = g, T.PLAYER_NAME = f, T.PLAYER_VERSION = O, T.RESPECT_DO_NOT_TRACK = I, T.SALT_LENGTH = C, T.SALT_TIME_TO_LIVE = L, T.STREAM_TYPE_LIVE = "live", T.STREAM_TYPE_ON_DEMAND = "on-demand", T.VIEWER_USER_ID_LENGTH = M;
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
			var x = function(e, t) {
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
					postId: g,
					showFull: f
				} = e, E = x(e, ["canLoadContent", "children", "className", "isCommentsPage", "isMediumHeight", "isRichTextTruncated", "isExpando", "isTitleOnly", "postId", "showFull"]);
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
				return E
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/intersectionObserver/index.ts"),
				d = s("./src/reddit/components/Media/constants.ts"),
				c = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				h = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				p = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				m = s.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const x = 350,
				g = 100,
				f = 300;
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isFullyLoaded: !1
					}, this.iframe = null, this.onWindowMessage = e => {
						!this.state.isFullyLoaded && this.iframe && this.iframe.contentWindow === e.source && "tweet-measured" === e.data.action && this.setState({
							isFullyLoaded: !0
						})
					}, this.embedBoxChildRef = e => {
						this.iframe = e, e && r.a(e, (t, s) => {
							e && e.contentWindow && !this.props.media.height && s && e.contentWindow.postMessage("twitter-measure-requested", d.a)
						}), this.props.embedBoxChildRef(e)
					}
				}
				componentDidMount() {
					window.addEventListener("message", this.onWindowMessage)
				}
				componentWillUnmount() {
					this.iframe && r.b(this.iframe), window.removeEventListener("message", this.onWindowMessage)
				}
				render() {
					const {
						canLoadContent: e,
						media: t,
						mediaContainerProps: s,
						onIframeLoaded: n,
						source: r,
						title: d
					} = this.props, {
						isFullyLoaded: p
					} = this.state, E = s.height || (t.isDeleted ? g : f);
					return o.a.createElement(l.a, b({}, s, {
						alwaysWrapMedia: !0,
						height: E,
						showFull: !s.isListing,
						width: x
					}), e && o.a.createElement(o.a.Fragment, null, (!s.height || !p) && (t.isDeleted ? o.a.createElement("p", {
						className: m.a.tweetDeleted
					}, i.fbt._("This Tweet has been deleted.", null, {
						hk: "1LhcOw"
					})) : o.a.createElement("div", {
						className: Object(a.a)(Object(h.a)({
							isLoading: !0
						}), m.a.tweetPlaceholder)
					})), o.a.createElement(c.a, {
						childRef: this.embedBoxChildRef,
						className: Object(a.a)(m.a.tweetEmbedBox, {
							[m.a.isInvisible]: !s.height || !p
						}),
						height: E,
						isListing: s.isListing,
						isResponsive: !0,
						maxHeight: s.isListing ? u.i : null,
						onLoad: n,
						showCentered: s.showCentered,
						showFull: !0,
						source: r,
						title: d,
						width: x
					}), s.isListing && E > u.i && o.a.createElement("div", {
						className: m.a.seeMore
					}, i.fbt._("See full tweet", null, {
						hk: "1bxtrd"
					}))))
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
				x = s("./src/lib/objectSelector/index.ts"),
				g = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				f = s("./src/lib/sentry/index.ts"),
				E = s("./src/reddit/components/AdViewability/index.tsx"),
				v = s("./src/reddit/components/Governance/Proposal/async.ts"),
				y = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				w = s("./src/reddit/components/Media/constants.ts"),
				O = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				S = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				I = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				C = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				L = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				M = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				T = s("./src/reddit/components/PlayButton/index.tsx"),
				j = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				N = s("./src/reddit/components/RichTextJson/index.tsx"),
				_ = s("./src/reddit/constants/componentSizes.ts"),
				D = s("./src/reddit/constants/screenWidths.ts"),
				P = s("./src/reddit/contexts/PageLayer/index.tsx"),
				R = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				V = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				A = s("./src/reddit/helpers/name/index.ts"),
				H = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				W = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				F = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				B = s("./src/reddit/models/Media/index.ts"),
				U = s("./src/reddit/selectors/experiments/postSeo.ts"),
				k = s("./src/reddit/selectors/postCreations.ts"),
				G = s("./src/reddit/selectors/posts.ts"),
				Y = s("./src/reddit/components/Media/getResolution.ts"),
				K = s("./src/reddit/components/Media/index.m.less"),
				J = s.n(K);

			function q() {
				return (q = Object.assign || function(e) {
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
				Q = Object(u.a)(y.b, {
					playerName: "Reddit Player"
				}),
				X = 1200,
				Z = 75,
				$ = "player.js",
				ee = _.r + _.q,
				te = e => e.isVisible ? e.children : c.a.createElement("div", {
					className: J.a.displayNone
				}, e.children),
				se = new Set([B.n.EMBED, B.n.GIFVIDEO, B.n.LIVEVIDEO, B.n.VIDEO]),
				ie = e => !!e.media && se.has(e.media.type),
				ne = new Set([B.n.EMBED, B.n.GIFVIDEO, B.n.IMAGE, B.n.LIVEVIDEO, B.n.VIDEO]),
				oe = e => {
					let {
						post: t
					} = e;
					return !!t.media && ne.has(t.media.type)
				},
				ae = Object(P.t)(),
				re = Object(h.c)({
					isPostImageAltTextVariant: U.b,
					subredditOrProfileDisplayText: (e, t) => {
						let {
							post: s
						} = t;
						const i = Object(G.bb)(e, s);
						return i && i.displayText || s && s.author && Object(A.c)(s.author)
					},
					subredditOrProfile: (e, t) => {
						let {
							post: s
						} = t;
						return Object(G.bb)(e, {
							postId: s.id
						})
					},
					isEditing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(k.C)(e, {
							postId: s.id
						})
					}
				}),
				de = Object(l.b)(re),
				ce = Object(x.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class le extends c.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && B.d.has(e.type)) {
							if (this.iframe) {
								const t = e.type === B.n.EMBED ? e.provider : null;
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
						return !!e && B.d.has(e.type)
					}, this.shouldFocusContentDebouncer = r()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && B.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === B.n.EMBED ? t.provider : null;
								i && !B.q.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? B.g.Pause : B.g.Play;
							e.contentWindow.postMessage({
								context: $,
								method: s
							}, w.a), e.contentWindow.postMessage({
								context: $,
								method: B.g.Mute
							}, w.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === B.t.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: B.x.Pause
						}), w.a) : e.contentWindow.postMessage({
							context: $,
							method: B.g.Pause
						}, w.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === B.n.EMBED ? e.provider : null;
						if (this.iframe && s && !B.q.has(s)) {
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
						viewportHeight: B.e,
						viewportWidth: B.f
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					ie(this.props.post) && (this.visibilityChangeSubscriptionId = g.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && oe(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && g.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && oe(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(B.i, this.state.viewportHeight),
						s = Math.min(X, 16 * t / 9);
					s === X && (t = 9 * X / 16), e = this.state.viewportWidth >= D.c ? this.state.viewportWidth < _.l ? this.state.viewportWidth - ee - 2 * Z : this.state.viewportWidth - ee - _.e - 2 * Z : this.state.viewportWidth - 2 * Z;
					const i = this.state.viewportHeight - 2 * Z;
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
					let s = B.i,
						i = B.m;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = B.r, i = B.s), {
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
					if (Object(B.B)(i.media)) return {
						source: i.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * Z,
						height: this.state.viewportHeight - 2 * Z
					};
					const n = i.media && i.media.obfuscated || "";
					let o = i.media && !Object(B.E)(i.media) ? i.media.content : "",
						[a, r] = !i.media || Object(B.C)(i.media) || Object(B.D)(i.media) ? [0, 0] : [i.media.height, i.media.width];
					if (s && i.media && (i.media.type === B.n.IMAGE || i.media.type === B.n.GIFVIDEO)) {
						const e = Y.b(s, i.media.resolutions);
						e && (o = e.url, r = e.width, a = e.height)
					} else if (i && i.media && (!e.isListing || e.isExpando) && (i.media.type === B.n.IMAGE || i.media.type === B.n.GIFVIDEO)) {
						let e;
						(e = Object(S.b)(i.media.height, i.media.width) && Object(S.c)(i.media.height) ? Y.c(i.media.height, i.media.width, i.media.resolutions) : Y.a(i.media.resolutions)) && (o = e.url, r = e.width, a = e.height)
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
					if (i.media && i.media.type === B.n.VIDEO) {
						const t = a / r;
						e.isExpando ? (a = d, r = c) : t > B.c ? (a = d, r = Math.min(Math.max(d / t, B.p), c)) : (a = Math.min(Math.max(c * t, B.o), d), r = c)
					}
					i.media && i.media.type === B.n.EMBED && e.isExpando && i.media.provider !== B.t.Twitter && (a = d, r = c);
					let l = !1;
					if (e.isMiniCard) {
						const e = a / r;
						l = Math.abs(e - B.c) > .01
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
						showFull: x = !1,
						subredditOrProfileDisplayText: g
					} = this.props, {
						canLoadContent: y,
						forcePause: w,
						shouldPause: _,
						shouldStop: D,
						viewportWidth: P
					} = this.state;
					if (!u.media) return null;
					const A = w || _,
						U = D,
						{
							source: k,
							obfuscated: G,
							height: Y,
							width: K,
							needsBackgroundBlur: X
						} = this.getMediaInfo(this.props, this.state),
						$ = {
							showCentered: p,
							isListing: a,
							showFull: x,
							height: Y,
							width: K
						},
						ee = Object.assign({}, $, {
							className: e,
							forceAspectRatio: i,
							viewportWidth: P
						}),
						se = this.shouldBlur(),
						ie = !(!u.isSponsored || !u.source);
					if (G && se) return c.a.createElement(I.a, q({}, ee, {
						blurSrc: G
					}), c.a.createElement(te, {
						isVisible: y
					}, c.a.createElement(S.a, q({}, $, {
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: a,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!u.media && u.media.type === B.n.VIDEO,
						onClick: this.onImageBoxClick,
						postId: u.id,
						shouldBlur: se,
						source: G,
						outboundUrl: ie && u.source.outboundUrl || void 0,
						originalSource: k
					}))));
					if (!u.media) return null;
					switch (u.media.type) {
						case B.n.RTJSON:
							const i = Object(V.a)(u, null);
							if (null === i) return;
							return x || Object(R.a)(u) ? c.a.createElement(c.a.Fragment, null, c.a.createElement(C.a, {
								canLoadContent: y,
								className: e,
								"data-click-id": "text",
								isCommentsPage: n,
								isExpando: o,
								isMediumHeight: r,
								isRichTextTruncated: u.media.isRichtextPreview,
								isTitleOnly: h,
								postId: u.id,
								showFull: x
							}, c.a.createElement(N.a, {
								flairStyleTemplate: s,
								content: u.isMeta ? Object(F.a)(i, u.id) : i,
								mediaMetadata: u.media.mediaMetadata,
								postId: u.id,
								rtJsonElementProps: ce(this.props),
								renderMediaAsLinks: a
							})), c.a.createElement(v.a, {
								postId: u.id,
								isCommentsPage: !!n
							})) : null;
						case B.n.TEXT:
							if (Object(H.a)(u)) {
								const t = "Text post should not include body content";
								return f.c.withScope(e => {
									e.setExtra("info", {
										post: u,
										isListing: a,
										isCommentsPage: n
									}), f.c.captureMessage(t)
								}), Object(m.a)() && console.log("".concat(u.id, ": ").concat(t)), c.a.createElement(C.a, {
									postId: u.id,
									className: e,
									"data-click-id": "text",
									isCommentsPage: n,
									showFull: x
								}, c.a.createElement(j.a, {
									flairStyleTemplate: s,
									html: u.isMeta ? Object(W.a)(u.media.content, u.id, J.a.hiddenLink) : u.media.content
								}))
							}
							return null;
						case B.n.EMBED:
							return this.props.isMiniCard && u.preview && u.preview.url ? c.a.createElement(I.a, q({}, ee, {
								alwaysWrapMedia: !0
							}), c.a.createElement(te, {
								isVisible: y
							}, c.a.createElement(c.a.Fragment, null, c.a.createElement(S.a, q({}, $, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: u.id,
								shouldBlur: se,
								source: u.preview.url,
								originalSource: u.preview.url
							})), c.a.createElement(T.a, null)))) : B.h.has(u.media.provider) ? u.media.provider === B.t.Twitter ? c.a.createElement(L.a, {
								canLoadContent: y,
								embedBoxChildRef: this.storeChildRef,
								media: u.media,
								mediaContainerProps: ee,
								onIframeLoaded: this.onIframeLoaded,
								source: k,
								title: u.title
							}) : c.a.createElement(I.a, q({}, ee, {
								alwaysWrapMedia: !0,
								height: o ? Y : B.i,
								width: o ? K : B.i * (16 / 9)
							}), y && c.a.createElement(O.a, {
								childRef: this.storeChildRef,
								height: o ? Y : B.i,
								width: o ? K : void 0,
								isListing: a,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: p,
								showFull: x,
								source: k,
								title: u.title
							})) : c.a.createElement(I.a, q({}, ee, {
								alwaysWrapMedia: !0
							}), y && c.a.createElement(O.a, q({}, $, {
								isResponsive: o || u.media.provider === B.t.IFrameEmbed,
								title: u.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: k,
								fullWidth: u.media.provider === B.t.IFrameEmbed
							})));
						case B.n.GIFVIDEO: {
							let e = Y,
								t = K;
							return e > B.i && (t = K / Y * (e = B.i)), c.a.createElement(I.a, q({}, ee, {
								blurSrc: X ? u.media.gifBackgroundImage : void 0
							}), c.a.createElement(te, {
								isVisible: y
							}, c.a.createElement(M.a, q({}, $, {
								isNotCardView: d,
								height: o ? void 0 : e,
								width: o ? void 0 : t,
								postId: u.id,
								shouldLoad: !0,
								shouldPause: A,
								source: k,
								originalSource: u.media.content
							}))))
						}
						case B.n.VIDEO: {
							const e = u.media.posterUrl || u.preview && u.preview.url;
							if (this.props.isMiniCard && e) return c.a.createElement(I.a, q({}, ee, {
								alwaysWrapMedia: !0
							}), c.a.createElement(te, {
								isVisible: y
							}, c.a.createElement(c.a.Fragment, null, c.a.createElement(S.a, q({}, $, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: u.id,
								shouldBlur: se,
								source: e,
								originalSource: e
							})), c.a.createElement(T.a, null))));
							const s = c.a.createElement(I.a, q({}, ee, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), y && c.a.createElement(Q, {
								autoPlay: "boolean" == typeof _ ? !_ : void 0,
								isExpando: o,
								shouldLoad: !0,
								shouldPause: A,
								shouldStop: U,
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
							}));
							return u.isSponsored ? c.a.createElement(E.a, {
								post: u,
								trackVideo: !0
							}, s) : s
						}
						case B.n.LIVEVIDEO:
							return c.a.createElement(te, {
								isVisible: y
							}, c.a.createElement(z, {
								canLoad: y,
								postId: u.id,
								postTitle: u.title,
								shouldPause: A,
								url: u.media.hlsUrl
							}));
						case B.n.IMAGE:
							const w = this.state.viewportHeight - 2 * Z,
								D = this.state.viewportWidth - 2 * Z;
							let P, G = k;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (u.thumbnail && Object(b.a)(u.thumbnail.url) ? G = u.thumbnail.url : u.preview && Object(b.a)(u.preview.url) && (G = u.preview.url)), l && (P = g ? "".concat(g, " - ").concat(u.title) : u.title), c.a.createElement(I.a, q({}, ee, {
								blurSrc: X ? G : void 0,
								isExpando: !!o
							}), c.a.createElement(te, {
								isVisible: y
							}, c.a.createElement(S.a, q({}, $, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: o ? w : void 0,
								maxWidth: o ? D : void 0,
								postId: u.id,
								shouldBlur: se,
								source: G,
								outboundUrl: ie && u.source.outboundUrl || void 0,
								originalSource: u.media.content,
								altText: P
							}))));
						default:
							return null
					}
				}
			}
			t.a = ae(de(Object(p.a)(le)))
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
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf.1afa14ce6733ab3a5c3d.js.map