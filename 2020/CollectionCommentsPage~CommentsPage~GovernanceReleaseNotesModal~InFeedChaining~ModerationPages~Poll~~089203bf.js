// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf.4b09f494caf461d940f4.js
// Retrieved at 6/30/2020, 7:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"], {
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/cache/localStorage/index.ts"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				c = () => Object(d.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				l = s("./src/reddit/constants/experiments.ts"),
				h = s("./src/reddit/helpers/chooseVariant/index.ts");
			const m = Object(o.a)(e => {
				const t = Object(h.c)(e, {
					experimentEligibilitySelector: h.a,
					experimentName: l.Gb
				});
				return Object(l.Fc)(t) ? void 0 : t
			}, e => {
				const t = Object(h.c)(e, {
					experimentEligibilitySelector: h.a,
					experimentName: l.Hb
				});
				return Object(l.Fc)(t) ? void 0 : t
			}, (e, t) => e === l.Ib.Enabled && t === l.Ib.Enabled);
			var u = s("./src/config.ts");
			var p = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const g = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						i = new Uint32Array(e);
					return crypto.getRandomValues(i), Array.from(i).map(e => t.charAt(e % s)).join("")
				},
				x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				b = function(e) {
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
				return Array.from(new Uint8Array(i)).map(b).join("")
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
					var a = 0;
					for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (s[i[a]] = e[i[a]])
				}
				return s
			};
			const w = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				I = Object({
					SENTRY_RELEASE_VERSION: "4c4961a-production"
				}),
				O = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: u.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: "Reddit/Version Build ".concat(I.SENTRY_RELEASE_VERSION, " ").concat(u.a.appName),
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
					localStorageSaltKey: u,
					localStorageViewerUserIdKey: b,
					playerName: f,
					playerVersion: I,
					respectDoNotTrack: S,
					saltLength: C,
					saltTimeToLive: M,
					viewerUserIdLength: j
				} = Object.assign({}, O, t);
				class L extends i.Component {
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
						return a.a.createElement(e, v({}, i, {
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
						const e = this.props.redditUserId || L.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = x(),
							i = "".concat(s).concat(e).concat(t);
						return (await E(i)).substr(0, L.VIEWER_USER_ID_LENGTH)
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
							debug: L.DEBUG,
							disableCookies: L.DISABLE_COOKIES,
							respectDoNotTrack: L.RESPECT_DO_NOT_TRACK
						}, s, {
							data: Object.assign({
								env_key: L.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: L.PLAYER_NAME,
								player_version: L.PLAYER_VERSION
							}, t, {
								viewer_user_id: e
							})
						})
					}
					getOrCreateSalt() {
						const e = L.LOCAL_STORAGE_SALT_KEY;
						let t = Object(r.a)(e);
						return t || (t = g(L.SALT_LENGTH), Object(r.b)(e, t, L.SALT_TIME_TO_LIVE)), t
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
							video_duration: s ? L.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? L.STREAM_TYPE_LIVE : L.STREAM_TYPE_ON_DEMAND,
							video_title: i
						}
					}
				}
				L.displayName = w(e), L.ANONYMOUS_USER_ID = s, L.DEBUG = d, L.DISABLE_COOKIES = l, L.DURATION_LIVE = 1 / 0, L.ENV_KEY = h, L.LOCAL_STORAGE_SALT_KEY = u, L.LOCAL_STORAGE_VIEWER_USER_ID_KEY = b, L.PLAYER_NAME = f, L.PLAYER_VERSION = I, L.RESPECT_DO_NOT_TRACK = S, L.SALT_LENGTH = C, L.SALT_TIME_TO_LIVE = M, L.STREAM_TYPE_LIVE = "live", L.STREAM_TYPE_ON_DEMAND = "on-demand", L.VIEWER_USER_ID_LENGTH = j;
				const N = Object(i.forwardRef)((e, t) => a.a.createElement(L, v({}, e, {
						forwardedRef: t
					}))),
					T = Object(o.c)({
						redditUserId: p.g,
						isMuxEnabled: m
					});
				return Object(n.b)(T, null, null, {
					forwardRef: !0
				})(N)
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
		"./src/reddit/components/Media/GalleryBox/index.m.less": function(e, t, s) {
			e.exports = {
				outerContainer: "kcerW9lbT-se3SXd-wp2i",
				nextButton: "_38uXo2TofvhEuLKeH-rRcV",
				icon: "_32kofHIEwuARK_15MrzAuT",
				iconImage: "_3PkAZ5W4aDQ7cujQ426UiB",
				prevIcon: "CxV9u12DiN4nfOLEzaWGg",
				nextIcon: "Qfn6RihWXp6riuP88alpI",
				navigationUnderlay: "_1fSFPkxZ9pToLETLQT2dmc",
				hasMoreSlides: "_3-JCOd-nY76g29C7ZVX_kl",
				slideshowContainer: "KVyBaj7FjzElWsqJDmw7v",
				slideImage: "_1dwExqTGJH2jnA-MYGkEL-",
				slide: "_28TEYBuEdOuE3kN6UyoKMa",
				imageWrapper: "GplfMqsBIqUJJC57K0ryh",
				slideWrapper: "_1apobczT0TzIKMWpza0OhL",
				figure: "_3o5Vzct5tn9PE7e-emdDmf",
				imageMetaData: "_26daP6nhhW7BT-CMzL0ijs",
				imageUrl: "_1JvpVe-IA894KlEuAn5i9c",
				imageCaption: "_15nNdGlBIgryHV04IfAfpA",
				slideIndicator: "_61i6grM3um1yuw4GrN97P"
			}
		},
		"./src/reddit/components/Media/GalleryBox/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./src/lib/classNames/index.ts");
			var o = (e, t, s) => {
					const a = Object(i.useCallback)(t => {
						t.isComposing || e !== t.keyCode || s()
					}, [e, s]);
					Object(i.useEffect)(() => {
						if (t) return t.addEventListener("keydown", a), () => {
							t && t.removeEventListener("keydown", a)
						}
					}, [t, a])
				},
				r = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				d = s("./src/reddit/constants/keycodes.ts"),
				c = s("./src/reddit/components/Media/GalleryBox/index.m.less"),
				l = s.n(c);
			const h = e => {
					const {
						slideIndex: t,
						currentIndex: s,
						imageSrc: i
					} = e, n = s === t ? {
						left: "0px"
					} : {
						left: s > t ? "-100%" : "100%"
					};
					return a.a.createElement("li", {
						style: n,
						className: l.a.slide
					}, a.a.createElement("figure", {
						className: l.a.figure
					}, a.a.createElement("img", {
						src: i,
						className: l.a.slideImage
					})))
				},
				m = e => a.a.createElement("a", {
					className: Object(n.a)(e.className, l.a.navigationUnderlay, {
						[l.a.hasMoreSlides]: e.hasMoreSlides
					}),
					onClick: e.onClick,
					onMouseDown: t => {
						e.setFocusTo.current && e.setFocusTo.current.focus(), t.preventDefault()
					},
					title: e.title
				}, e.hasMoreSlides && a.a.createElement("i", {
					className: Object(n.a)(e.iconClassName, l.a.icon)
				}, a.a.createElement(r.a, {
					className: l.a.iconImage
				}))),
				u = e => a.a.createElement("div", {
					className: l.a.slideIndicator
				}, e.currentSlide, "/", e.totalSlides);
			t.a = e => {
				const {
					captionHeight: t,
					galleryItems: s,
					imageHeight: r,
					mediaMetadata: c = {}
				} = e, p = {};
				p.height = r;
				const g = {};
				g.height = t;
				const [x, b] = Object(i.useState)(0), f = x > 0, E = x < s.length - 1, v = Object(i.useCallback)(() => {
					E && b(x + 1)
				}, [E, x, b]), y = Object(i.useCallback)(() => {
					f && b(x - 1)
				}, [f, x, b]), w = Object(i.useRef)(null), I = Object(i.useRef)(null);
				return o(d.a.ArrowLeft, w.current, y), o(d.a.ArrowRight, w.current, v), a.a.createElement("div", {
					className: Object(n.a)(l.a.outerContainer),
					ref: w,
					tabIndex: 0
				}, a.a.createElement("div", {
					className: l.a.slideshowContainer,
					tabIndex: -1,
					ref: I,
					style: p
				}, a.a.createElement("div", {
					className: l.a.imagesWrapper
				}, a.a.createElement("ul", {
					className: l.a.slideWrapper
				}, s.map((e, t) => {
					const s = e.mediaId,
						i = c && c[s];
					return i && i.s ? a.a.createElement(h, {
						slideIndex: t,
						currentIndex: x,
						imageSrc: i.s.u,
						key: s
					}) : null
				})), a.a.createElement(m, {
					onClick: y,
					setFocusTo: I,
					hasMoreSlides: f,
					title: "Previous",
					iconClassName: l.a.prevIcon,
					className: l.a.prevButton
				}), a.a.createElement(m, {
					onClick: v,
					setFocusTo: I,
					hasMoreSlides: E,
					title: "Next",
					iconClassName: l.a.nextIcon,
					className: l.a.nextButton
				})), s.length > 1 ? a.a.createElement(u, {
					currentSlide: x + 1,
					totalSlides: s.length
				}) : ""), a.a.createElement("div", {
					className: l.a.imageMetaData,
					style: g
				}, a.a.createElement("span", {
					className: l.a.imageCaption
				}, "my Caption"), a.a.createElement("span", {
					className: l.a.imageUrl
				}, "my Image URL")))
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
				a = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/constants/componentSizes.ts"),
				r = s("./src/reddit/models/Media/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				h = s("./src/reddit/components/Media/RichTextContainer/index.m.less"),
				m = s.n(h);
			class u extends a.a.Component {
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
					return a.a.createElement("div", {
						className: m.a.placeholder
					}, [1, 2, 3].map(t => a.a.createElement("div", {
						key: t,
						className: m.a.placeholderParagraph
					}, a.a.createElement("div", {
						className: e
					}), a.a.createElement("div", {
						className: e
					}), a.a.createElement("div", {
						className: e
					}))))
				}
			}
			var p = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(c.B)(t))
			}))(u);

			function g() {
				return (g = Object.assign || function(e) {
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
					var a = 0;
					for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (s[i[a]] = e[i[a]])
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
					isTitleOnly: u,
					postId: b,
					showFull: f
				} = e, E = x(e, ["canLoadContent", "children", "className", "isCommentsPage", "isMediumHeight", "isRichTextTruncated", "isExpando", "isTitleOnly", "postId", "showFull"]);
				const v = {
						[m.a.richTextContainerFull]: f,
						[m.a.richTextContainerTitleOnly]: u && !f,
						[m.a.richTextContainer]: !f && !u
					},
					y = {};
				f || (y.maxHeight = "".concat(u ? r.m : c ? r.l : r.k, "px")), d && (y.maxWidth = "".concat(o.d, "px"));
				const w = l && f;
				return a.a.createElement("div", g({
					className: Object(n.a)(v, i),
					style: y
				}, E), s, w && a.a.createElement(p, {
					canLoadContent: !!t,
					isExpando: h,
					postId: b
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
				a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/intersectionObserver/index.ts"),
				d = s("./src/reddit/components/Media/constants.ts"),
				c = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				h = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				u = s("./src/reddit/components/Media/TwitterEmbed/index.m.less"),
				p = s.n(u);

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
				b = 100,
				f = 300;
			class E extends n.a.Component {
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
						onIframeLoaded: a,
						source: r,
						title: d
					} = this.props, {
						isFullyLoaded: u
					} = this.state, E = s.height || (t.isDeleted ? b : f);
					return n.a.createElement(l.a, g({}, s, {
						alwaysWrapMedia: !0,
						height: E,
						showFull: !s.isListing,
						width: x
					}), e && n.a.createElement(n.a.Fragment, null, (!s.height || !u) && (t.isDeleted ? n.a.createElement("p", {
						className: p.a.tweetDeleted
					}, i.fbt._("This Tweet has been deleted.", null, {
						hk: "1LhcOw"
					})) : n.a.createElement("div", {
						className: Object(o.a)(Object(h.a)({
							isLoading: !0
						}), p.a.tweetPlaceholder)
					})), n.a.createElement(c.a, {
						childRef: this.embedBoxChildRef,
						className: Object(o.a)(p.a.tweetEmbedBox, {
							[p.a.isInvisible]: !s.height || !u
						}),
						height: E,
						isListing: s.isListing,
						isResponsive: !0,
						maxHeight: s.isListing ? m.j : null,
						onLoad: a,
						showCentered: s.showCentered,
						showFull: !0,
						source: r,
						title: d,
						width: x
					}), s.isListing && E > m.j && n.a.createElement("div", {
						className: p.a.seeMore
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
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			}));
			var i = s("./src/reddit/models/Media/index.ts");
			const a = (e, t, s, i) => {
					const a = e / t,
						n = s / i;
					return Math.abs(a - n) < .03
				},
				n = (e, t) => {
					for (let s = 0; s < t.length; s++) {
						const i = t[s];
						if (i.width >= e) return i
					}
				},
				o = (e, t, s) => {
					for (let n = 0; n < s.length; n++) {
						const o = s[n];
						if (o.width >= i.e / 2 && a(e, t, o.height, o.width)) return o
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
				a = s.n(i),
				n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/lodash/debounce.js"),
				r = s.n(o),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				m = s("./src/higherOrderComponents/withMux/index.tsx"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/env/index.ts"),
				g = s("./src/lib/isUrl/index.ts"),
				x = s("./src/lib/objectSelector/index.ts"),
				b = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				f = s("./src/lib/sentry/index.ts"),
				E = s("./src/reddit/components/AdViewability/index.tsx"),
				v = s("./src/reddit/components/Governance/Proposal/async.ts"),
				y = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				w = s("./src/reddit/components/Media/constants.ts"),
				I = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				O = s("./src/reddit/components/Media/GalleryBox/index.tsx"),
				S = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				C = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				M = s("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				j = s("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				L = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				N = s("./src/reddit/components/PlayButton/index.tsx"),
				T = s("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				_ = s("./src/reddit/components/RichTextJson/index.tsx"),
				D = s("./src/reddit/constants/componentSizes.ts"),
				P = s("./src/reddit/constants/screenWidths.ts"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				V = s("./src/reddit/featureFlags/index.ts"),
				A = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				W = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				H = s("./src/reddit/helpers/mediaGallery/index.tsx"),
				B = s("./src/reddit/helpers/name/index.ts"),
				F = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				k = s("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				U = s("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				G = s("./src/reddit/models/Media/index.ts"),
				Y = s("./src/reddit/selectors/experiments/postSeo.ts"),
				K = s("./src/reddit/selectors/postCreations.ts"),
				J = s("./src/reddit/selectors/posts.ts"),
				z = s("./src/reddit/components/Media/getResolution.ts"),
				q = s("./src/reddit/components/Media/index.m.less"),
				Q = s.n(q);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = Object(n.a)({
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
				$ = Object(m.a)(y.b, {
					playerName: "Reddit Player"
				}),
				ee = 1200,
				te = 75,
				se = "player.js",
				ie = D.r + D.q,
				ae = e => e.isVisible ? e.children : c.a.createElement("div", {
					className: Q.a.displayNone
				}, e.children),
				ne = new Set([G.o.EMBED, G.o.GIFVIDEO, G.o.LIVEVIDEO, G.o.VIDEO]),
				oe = e => !!e.media && ne.has(e.media.type),
				re = new Set([G.o.EMBED, G.o.GIFVIDEO, G.o.IMAGE, G.o.LIVEVIDEO, G.o.VIDEO]),
				de = e => {
					let {
						post: t
					} = e;
					return !!t.media && re.has(t.media.type)
				},
				ce = Object(R.t)(),
				le = Object(h.c)({
					isImageGalleriesEnabled: V.d.ImageGalleryConsumption,
					isPostImageAltTextVariant: Y.b,
					subredditOrProfileDisplayText: (e, t) => {
						let {
							post: s
						} = t;
						const i = Object(J.bb)(e, s);
						return i && i.displayText || s && s.author && Object(B.c)(s.author)
					},
					subredditOrProfile: (e, t) => {
						let {
							post: s
						} = t;
						return Object(J.bb)(e, {
							postId: s.id
						})
					},
					isEditing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(K.C)(e, {
							postId: s.id
						})
					}
				}),
				he = Object(l.b)(le),
				me = Object(x.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class ue extends c.a.Component {
				constructor(e) {
					super(e), this.pauseContent = () => {
						this.shouldFocusContentDebouncer(!1)
					}, this.stopContent = () => {
						const {
							media: e
						} = this.props.post;
						if (e && G.d.has(e.type)) {
							if (this.iframe) {
								const t = e.type === G.o.EMBED ? e.provider : null;
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
						return !!e && G.d.has(e.type)
					}, this.shouldFocusContentDebouncer = r()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: s
						} = this.props;
						if (t && G.d.has(t.type)) {
							if (this.iframe) {
								const i = t.type === G.o.EMBED ? t.provider : null;
								i && !G.s.has(i) ? !s && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, i)
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
							const s = t ? G.g.Pause : G.g.Play;
							e.contentWindow.postMessage({
								context: se,
								method: s
							}, w.a), e.contentWindow.postMessage({
								context: se,
								method: G.g.Mute
							}, w.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === G.v.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: G.z.Pause
						}), w.a) : e.contentWindow.postMessage({
							context: se,
							method: G.g.Pause
						}, w.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, s = e && e.type === G.o.EMBED ? e.provider : null;
						if (this.iframe && s && !G.s.has(s)) {
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
						viewportHeight: G.e,
						viewportWidth: G.f
					}
				}
				UNSAFE_componentWillMount() {
					"undefined" != typeof window && (this.updateDimensions(), window.addEventListener("resize", this.updateDimensions))
				}
				componentDidMount() {
					oe(this.props.post) && (this.visibilityChangeSubscriptionId = b.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && de(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && b.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && de(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(G.j, this.state.viewportHeight),
						s = Math.min(ee, 16 * t / 9);
					s === ee && (t = 9 * ee / 16), e = this.state.viewportWidth >= P.c ? this.state.viewportWidth < D.l ? this.state.viewportWidth - ie - 2 * te : this.state.viewportWidth - ie - D.e - 2 * te : this.state.viewportWidth - 2 * te;
					const i = this.state.viewportHeight - 2 * te;
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
					let s = G.j,
						i = G.n;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (s = G.t, i = G.u), {
						maxVideoHeight: s,
						maxVideoWidth: i
					})
				}
				getMediaInfo(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state;
					const {
						availableWidth: s,
						isListing: i,
						post: a
					} = e;
					if (Object(G.E)(a.media)) return {
						source: a.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * te,
						height: this.state.viewportHeight - 2 * te
					};
					const n = a.media && a.media.obfuscated || "";
					let o = !a.media || Object(G.H)(a.media) || Object(G.C)(a.media) ? "" : a.media.content,
						[r, d] = !a.media || Object(G.F)(a.media) || Object(G.G)(a.media) || Object(G.C)(a.media) ? [0, 0] : [a.media.height, a.media.width];
					if (s && a.media && Object(G.C)(a.media)) {
						r = Object(H.a)(a.media.mediaMetadata || {}, i ? G.j : G.e, G.p) + G.i, d = s
					}
					if (s && a.media && (a.media.type === G.o.IMAGE || a.media.type === G.o.GIFVIDEO)) {
						const e = z.b(s, a.media.resolutions);
						e && (o = e.url, d = e.width, r = e.height)
					} else if (a && a.media && (!e.isListing || e.isExpando) && (a.media.type === G.o.IMAGE || a.media.type === G.o.GIFVIDEO)) {
						let e;
						(e = Object(S.b)(a.media.height, a.media.width) && Object(S.c)(a.media.height) ? z.c(a.media.height, a.media.width, a.media.resolutions) : z.a(a.media.resolutions)) && (o = e.url, d = e.width, r = e.height)
					}
					if (e.isExpando)
						if (d > t.viewportWidth) {
							r *= t.viewportWidth / d, d = t.viewportWidth
						} else if (r > t.viewportHeight) {
						const e = t.viewportHeight / r;
						r = t.viewportHeight, d *= e
					}
					const {
						maxVideoHeight: c,
						maxVideoWidth: l
					} = this.getVideoMaxDimensions(e, t);
					if (a.media && a.media.type === G.o.VIDEO) {
						const t = r / d;
						e.isExpando ? (r = c, d = l) : t > G.c ? (r = c, d = Math.min(Math.max(c / t, G.r), l)) : (r = Math.min(Math.max(l * t, G.q), c), d = l)
					}
					a.media && a.media.type === G.o.EMBED && e.isExpando && a.media.provider !== G.v.Twitter && (r = c, d = l);
					let h = !1;
					if (e.isMiniCard) {
						const e = r / d;
						h = Math.abs(e - G.c) > .01
					}
					return {
						source: o,
						obfuscated: n,
						width: d,
						height: r,
						needsBackgroundBlur: h
					}
				}
				shouldBlur() {
					const {
						isExpando: e,
						isOverlay: t,
						theme: s
					} = this.props, i = this.isNSFW(), a = this.isSpoiler();
					return !(e || this.state.isRevealed || t) && (i && !s.subredditContext.shouldShowNSFWContent || a)
				}
				render() {
					const {
						className: e,
						crosspost: t,
						flairStyleTemplate: s,
						forceAspectRatio: i,
						isCommentsPage: a,
						isExpando: n,
						isListing: o,
						isMediumHeight: r,
						isNotCardView: d,
						isImageGalleriesEnabled: l,
						isPostImageAltTextVariant: h,
						isTitleOnly: m,
						post: u,
						showCentered: x,
						showFull: b = !1,
						subredditOrProfileDisplayText: y
					} = this.props, {
						canLoadContent: w,
						forcePause: D,
						shouldPause: P,
						shouldStop: R,
						viewportWidth: V
					} = this.state;
					if (!u.media) return null;
					const B = D || P,
						Y = R,
						{
							source: K,
							obfuscated: J,
							height: z,
							width: q,
							needsBackgroundBlur: ee
						} = this.getMediaInfo(this.props, this.state),
						se = {
							showCentered: x,
							isListing: o,
							showFull: b,
							height: z,
							width: q
						},
						ie = Object.assign({}, se, {
							className: e,
							forceAspectRatio: i,
							viewportWidth: V
						}),
						ne = this.shouldBlur(),
						oe = !(!u.isSponsored || !u.source);
					if (J && ne) return c.a.createElement(C.a, X({}, ie, {
						blurSrc: J
					}), c.a.createElement(ae, {
						isVisible: w
					}, c.a.createElement(S.a, X({}, se, {
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: o,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!u.media && u.media.type === G.o.VIDEO,
						onClick: this.onImageBoxClick,
						postId: u.id,
						shouldBlur: ne,
						source: J,
						outboundUrl: oe && u.source.outboundUrl || void 0,
						originalSource: K
					}))));
					if (!u.media) return null;
					switch (u.media.type) {
						case G.o.RTJSON:
							const i = Object(W.a)(u, null);
							if (null === i) return;
							return b || Object(A.a)(u) ? c.a.createElement(c.a.Fragment, null, c.a.createElement(M.a, {
								canLoadContent: w,
								className: e,
								"data-click-id": "text",
								isCommentsPage: a,
								isExpando: n,
								isMediumHeight: r,
								isRichTextTruncated: u.media.isRichtextPreview,
								isTitleOnly: m,
								postId: u.id,
								showFull: b
							}, c.a.createElement(_.a, {
								flairStyleTemplate: s,
								content: u.isMeta ? Object(U.a)(i, u.id) : i,
								mediaMetadata: u.media.mediaMetadata,
								postId: u.id,
								rtJsonElementProps: me(this.props),
								renderMediaAsLinks: o
							})), c.a.createElement(v.a, {
								postId: u.id,
								isCommentsPage: !!a
							})) : null;
						case G.o.TEXT:
							if (Object(F.a)(u)) {
								const t = "Text post should not include body content";
								return f.c.withScope(e => {
									e.setExtra("info", {
										post: u,
										isListing: o,
										isCommentsPage: a
									}), f.c.captureMessage(t)
								}), Object(p.a)() && console.log("".concat(u.id, ": ").concat(t)), c.a.createElement(M.a, {
									postId: u.id,
									className: e,
									"data-click-id": "text",
									isCommentsPage: a,
									showFull: b
								}, c.a.createElement(T.a, {
									flairStyleTemplate: s,
									html: u.isMeta ? Object(k.a)(u.media.content, u.id, Q.a.hiddenLink) : u.media.content
								}))
							}
							return null;
						case G.o.EMBED:
							return this.props.isMiniCard && u.preview && u.preview.url ? c.a.createElement(C.a, X({}, ie, {
								alwaysWrapMedia: !0
							}), c.a.createElement(ae, {
								isVisible: w
							}, c.a.createElement(c.a.Fragment, null, c.a.createElement(S.a, X({}, se, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: o,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: u.id,
								shouldBlur: ne,
								source: u.preview.url,
								originalSource: u.preview.url
							})), c.a.createElement(N.a, null)))) : G.h.has(u.media.provider) ? u.media.provider === G.v.Twitter ? c.a.createElement(j.a, {
								canLoadContent: w,
								embedBoxChildRef: this.storeChildRef,
								media: u.media,
								mediaContainerProps: ie,
								onIframeLoaded: this.onIframeLoaded,
								source: K,
								title: u.title
							}) : c.a.createElement(C.a, X({}, ie, {
								alwaysWrapMedia: !0,
								height: n ? z : G.j,
								width: n ? q : G.j * (16 / 9)
							}), w && c.a.createElement(I.a, {
								childRef: this.storeChildRef,
								height: n ? z : G.j,
								width: n ? q : void 0,
								isListing: o,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: x,
								showFull: b,
								source: K,
								title: u.title
							})) : c.a.createElement(C.a, X({}, ie, {
								alwaysWrapMedia: !0
							}), w && c.a.createElement(I.a, X({}, se, {
								isResponsive: n || u.media.provider === G.v.IFrameEmbed,
								title: u.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: K,
								fullWidth: u.media.provider === G.v.IFrameEmbed
							})));
						case G.o.GIFVIDEO: {
							let e = z,
								t = q;
							return e > G.j && (t = q / z * (e = G.j)), c.a.createElement(C.a, X({}, ie, {
								blurSrc: ee ? u.media.gifBackgroundImage : void 0
							}), c.a.createElement(ae, {
								isVisible: w
							}, c.a.createElement(L.a, X({}, se, {
								isNotCardView: d,
								height: n ? void 0 : e,
								width: n ? void 0 : t,
								postId: u.id,
								shouldLoad: !0,
								shouldPause: B,
								source: K,
								originalSource: u.media.content
							}))))
						}
						case G.o.VIDEO: {
							const e = u.media.posterUrl || u.preview && u.preview.url;
							if (this.props.isMiniCard && e) return c.a.createElement(C.a, X({}, ie, {
								alwaysWrapMedia: !0
							}), c.a.createElement(ae, {
								isVisible: w
							}, c.a.createElement(c.a.Fragment, null, c.a.createElement(S.a, X({}, se, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: o,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: u.id,
								shouldBlur: ne,
								source: e,
								originalSource: e
							})), c.a.createElement(N.a, null))));
							const s = c.a.createElement(C.a, X({}, ie, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), w && c.a.createElement($, {
								autoPlay: "boolean" == typeof P ? !P : void 0,
								isExpando: n,
								shouldLoad: !0,
								shouldPause: B,
								shouldStop: Y,
								hlsSource: u.media.hlsUrl,
								mpegDashSource: u.media.dashUrl,
								isGif: u.media.isGif,
								scrubberThumbSource: u.media.scrubberThumbSource,
								postId: u.id,
								callToActionSource: u.source || void 0,
								callToActionText: u.callToAction,
								isListing: o,
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
						case G.o.LIVEVIDEO:
							return c.a.createElement(ae, {
								isVisible: w
							}, c.a.createElement(Z, {
								canLoad: w,
								postId: u.id,
								postTitle: u.title,
								shouldPause: B || Y,
								url: u.media.hlsUrl
							}));
						case G.o.IMAGE:
							const D = this.state.viewportHeight - 2 * te,
								R = this.state.viewportWidth - 2 * te;
							let V, J = K;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (u.thumbnail && Object(g.a)(u.thumbnail.url) ? J = u.thumbnail.url : u.preview && Object(g.a)(u.preview.url) && (J = u.preview.url)), h && (V = y ? "".concat(y, " - ").concat(u.title) : u.title), c.a.createElement(C.a, X({}, ie, {
								blurSrc: ee ? J : void 0,
								isExpando: !!n
							}), c.a.createElement(ae, {
								isVisible: w
							}, c.a.createElement(S.a, X({}, se, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: n,
								isListing: o,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: n ? D : void 0,
								maxWidth: n ? R : void 0,
								postId: u.id,
								shouldBlur: ne,
								source: J,
								outboundUrl: oe && u.source.outboundUrl || void 0,
								originalSource: u.media.content,
								altText: V
							}))));
						case G.o.GALLERY:
							if (!l) return null;
							const re = Object(H.a)(u.media.mediaMetadata || {}, o ? G.j : G.e, G.p);
							return c.a.createElement(C.a, X({}, ie, {
								blurSrc: ee ? K : void 0,
								isExpando: !!n,
								maxGalleryHeight: re + G.i
							}), c.a.createElement(ae, {
								isVisible: w
							}, c.a.createElement(O.a, {
								galleryItems: u.media.gallery ? u.media.gallery.items : [],
								mediaMetadata: u.media.mediaMetadata || {},
								imageHeight: "".concat(re, "px"),
								captionHeight: "".concat(G.i, "px"),
								className: this.props.imageBoxClassName
							})));
						default:
							return null
					}
				}
			}
			t.a = ce(he(Object(u.a)(ue)))
		},
		"./src/reddit/components/RawHTMLDisplay/Media.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
					var a = 0;
					for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (s[i[a]] = e[i[a]])
				}
				return s
			};
			t.a = Object(n.a)(e => {
				var {
					flairStyleTemplate: t
				} = e, s = l(e, ["flairStyleTemplate"]);
				return a.a.createElement(d.a, c({
					style: {
						color: Object(r.a)(Object(o.a)(Object.assign({
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
		"./src/reddit/helpers/mediaGallery/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");

			function i(e, t, s) {
				const i = a(e);
				return i > t ? t : !i || i < s ? s : i
			}
			const a = e => {
					const t = Object.entries(e).map(e => {
						let [t, s] = e;
						return s.s
					});
					return t.reduce((e, t) => n(e, t), t && t[0] || []).y
				},
				n = (e, t) => {
					const s = e.x / e.y + .05,
						i = e.x / e.y - .05;
					return t.x / t.y > s ? t : t.x / t.y > i ? e.y > t.y ? e : t : e
				}
		},
		"./src/reddit/helpers/postHasSelfText/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/models/Media/index.ts"),
				a = s("./src/reddit/models/RichTextJson/index.ts");
			t.a = e => {
				const t = e && e.media;
				return !!t && (t.type === i.o.TEXT && !!t.content || t.type === i.o.RTJSON && !Object(a.F)(t.richtextContent))
			}
		},
		"./src/reddit/helpers/stripMetaLinks/fromRTJ.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var i = s("./src/lib/redditId/index.ts");

			function a(e, t) {
				const s = function e(t, s) {
					let i = !1;
					let a = [];
					try {
						for (const n of t)
							if ("link" === n.e && n.u && n.u.includes("https://www.reddit.com/poll/".concat(s))) i = !0;
							else if (n.c && "string" != typeof n.c) {
							const t = e(n.c, s);
							t.found ? (i = !0, ("par" !== n.e || t.updated.length) && a.push(Object.assign({}, n, {
								c: t.updated
							}))) : a.push(n)
						} else a.push(n)
					} catch (n) {
						i = !1, a = []
					}
					return {
						found: i,
						updated: i ? a : t
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
				return a
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var i = s("./src/lib/redditId/index.ts");

			function a(e, t, s) {
				return e.replace('href="https://www.reddit.com/poll/'.concat(Object(i.c)(t)), 'class="'.concat(s, '" href="https://www.reddit.com/poll/').concat(Object(i.c)(t)))
			}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf.4b09f494caf461d940f4.js.map