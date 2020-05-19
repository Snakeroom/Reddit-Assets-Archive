// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf.bfffc8f3c98c74cf315c.js
// Retrieved at 5/19/2020, 5:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"], {
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.symbol.js");
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				o = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				r = i("./src/lib/cache/localStorage/index.ts"),
				d = i("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(d.a)(() => i.e("vendors~MuxEmbed").then(i.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				c = i("./src/reddit/constants/experiments.ts"),
				h = i("./src/reddit/helpers/chooseVariant/index.ts");
			const u = Object(a.a)(e => {
				const t = Object(h.c)(e, {
					experimentEligibilitySelector: h.a,
					experimentName: c.zb
				});
				return Object(c.uc)(t) ? void 0 : t
			}, e => {
				const t = Object(h.c)(e, {
					experimentEligibilitySelector: h.a,
					experimentName: c.Ab
				});
				return Object(c.uc)(t) ? void 0 : t
			}, (e, t) => e === c.Bb.Enabled && t === c.Bb.Enabled);
			var m = i("./src/config.ts");
			var p = i("./src/reddit/selectors/user.ts");
			i("./node_modules/core-js/modules/es6.regexp.to-string.js"), i("./node_modules/core-js/modules/es6.regexp.replace.js");
			const b = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						i = t.length,
						s = new Uint32Array(e);
					return crypto.getRandomValues(s), Array.from(s).map(e => t.charAt(e % i)).join("")
				},
				g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				v = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var x;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(x || (x = {}));
			const w = async e => (async (e, t) => {
				const i = (new TextEncoder).encode(t),
					s = await crypto.subtle.digest(e, i);
				return Array.from(new Uint8Array(s)).map(v).join("")
			})(x.SHA1, e);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var i = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]])
				}
				return i
			};
			const E = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				S = Object({
					SENTRY_RELEASE_VERSION: "bc669d1-production"
				}),
				I = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: m.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: "Reddit/Version Build ".concat(S.SENTRY_RELEASE_VERSION, " ").concat(m.a.appName),
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: i,
					debug: d,
					disableCookies: c,
					envKey: h,
					localStorageSaltKey: m,
					localStorageViewerUserIdKey: v,
					playerName: x,
					playerVersion: S,
					respectDoNotTrack: O,
					saltLength: C,
					saltTimeToLive: T,
					viewerUserIdLength: M
				} = Object.assign({}, I, t);
				class V extends s.Component {
					constructor() {
						super(...arguments), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(s.createRef)(), this.handleDashCreate = e => {
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
								forwardedRef: i
							} = t,
							s = y(t, ["forwardedRef"]);
						return n.a.createElement(e, f({}, s, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: i,
							videoRef: this.videoRef
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const e = await l();
							e.removeDashJS(this.video), this.dashInstance && e.addDashJS(this.video, this.getDashInstanceData())
						} catch (i) {
							console.error(i)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const e = await l();
							e.removeHLSJS(this.video), this.hlsInstance && e.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (i) {
							console.error(i)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await l();
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
						const e = this.props.redditUserId || V.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							i = g(),
							s = "".concat(i).concat(e).concat(t);
						return (await w(s)).substr(0, V.VIEWER_USER_ID_LENGTH)
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
							i = this.getThirdPartyLibData();
						return Object.assign({
							debug: V.DEBUG,
							disableCookies: V.DISABLE_COOKIES,
							respectDoNotTrack: V.RESPECT_DO_NOT_TRACK
						}, i, {
							data: Object.assign({
								env_key: V.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: V.PLAYER_NAME,
								player_version: V.PLAYER_VERSION
							}, t, {
								viewer_user_id: e
							})
						})
					}
					getOrCreateSalt() {
						const e = V.LOCAL_STORAGE_SALT_KEY;
						let t = Object(r.a)(e);
						return t || (t = b(V.SALT_LENGTH), Object(r.b)(e, t, V.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return Object.assign({}, this.getDashInstanceData(), this.getHlsInstanceData())
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: i,
							muxVideoTitle: s
						} = this.props;
						return {
							video_duration: i ? V.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: i ? V.STREAM_TYPE_LIVE : V.STREAM_TYPE_ON_DEMAND,
							video_title: s
						}
					}
				}
				V.displayName = E(e), V.ANONYMOUS_USER_ID = i, V.DEBUG = d, V.DISABLE_COOKIES = c, V.DURATION_LIVE = 1 / 0, V.ENV_KEY = h, V.LOCAL_STORAGE_SALT_KEY = m, V.LOCAL_STORAGE_VIEWER_USER_ID_KEY = v, V.PLAYER_NAME = x, V.PLAYER_VERSION = S, V.RESPECT_DO_NOT_TRACK = O, V.SALT_LENGTH = C, V.SALT_TIME_TO_LIVE = T, V.STREAM_TYPE_LIVE = "live", V.STREAM_TYPE_ON_DEMAND = "on-demand", V.VIEWER_USER_ID_LENGTH = M;
				const L = Object(s.forwardRef)((e, t) => n.a.createElement(V, f({}, e, {
						forwardedRef: t
					}))),
					j = Object(a.c)({
						redditUserId: p.g,
						isMuxEnabled: u
					});
				return Object(o.b)(j, null, null, {
					forwardRef: !0
				})(L)
			}
		},
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
				u = i("./src/reddit/selectors/video.ts");
			const m = .5,
				p = .8,
				b = 1,
				g = 2e3,
				v = 15e3,
				x = [m, p, b],
				w = e => "boolean" == typeof e.cumulative,
				f = Object(r.c)({
					buffering: (e, t) => {
						let {
							post: i
						} = t;
						return Object(u.a)(e, {
							postId: i.id
						})
					},
					playing: (e, t) => {
						let {
							post: i
						} = t;
						return Object(u.e)(e, {
							postId: i.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: i
						} = t;
						return Object(u.c)(e, {
							postId: i.id
						})
					},
					videoDuration: (e, t) => {
						let {
							post: i
						} = t;
						const s = Object(u.g)(e, {
							postId: i.id
						});
						if (s) return s.length
					},
					isAudible: e => !Object(h.a)(e) && !!Object(h.b)(e)
				}),
				y = Object(l.a)(f);
			class E extends o.Component {
				constructor(e) {
					super(e), this.mrcVideoViewable = {
						timer: null,
						event: c.a.MRCVideoViewableImpression,
						threshold: m,
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
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, v) : e.viewabilityMinimum = v, e.remainingTime = e.viewabilityMinimum
				}
				checkViewability(e, t) {
					if (w(t) && void 0 === t.remainingTime && this.setViewabilityMinimum(t), !t.threshold && e && this.props.videoDuration) {
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
						w(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t.timer)
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
						threshold: x,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = y(E)
		},
		"./src/reddit/components/Governance/Proposal/async.ts": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Proposal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!i.m[t]
				},
				importAsync: () => i.e("reddit-components-Governance-Proposal").then(i.bind(null, "./src/reddit/components/Governance/Proposal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return i(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Proposal/index.tsx"
				}
			})
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
				u = i.n(h);
			class m extends n.a.Component {
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
			var p = Object(d.b)(null, e => ({
				onLoadRichTextContentIfNeeded: t => e(Object(l.A)(t))
			}))(m);

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
					isTitleOnly: m,
					postId: v,
					showFull: x
				} = e, w = g(e, ["canLoadContent", "children", "className", "isCommentsPage", "isMediumHeight", "isRichTextTruncated", "isExpando", "isTitleOnly", "postId", "showFull"]);
				const f = {
						[u.a.richTextContainerFull]: x,
						[u.a.richTextContainerTitleOnly]: m && !x,
						[u.a.richTextContainer]: !x && !m
					},
					y = {};
				x || (y.maxHeight = "".concat(m ? r.l : l ? r.k : r.j, "px")), d && (y.maxWidth = "".concat(a.d, "px"));
				const E = c && x;
				return n.a.createElement("div", b({
					className: Object(o.a)(f, s),
					style: y
				}, w), i, E && n.a.createElement(p, {
					canLoadContent: !!t,
					isExpando: h,
					postId: v
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
				return f
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
				u = i("./src/reddit/i18n/utils.ts"),
				m = i("./src/reddit/models/Media/index.ts"),
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
			const v = 350,
				x = 100,
				w = 300;
			class f extends n.a.Component {
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
					} = this.state, f = i.height || (t.isDeleted ? x : w);
					return n.a.createElement(l.a, g({}, i, {
						alwaysWrapMedia: !0,
						height: f,
						showFull: !i.isListing,
						width: v
					}), e && n.a.createElement(n.a.Fragment, null, (!i.height || !p) && (t.isDeleted ? n.a.createElement("p", {
						className: b.a.tweetDeleted
					}, Object(u.b)("This Tweet has been deleted.")) : n.a.createElement("div", {
						className: Object(o.a)(Object(c.a)({
							isLoading: !0
						}), b.a.tweetPlaceholder)
					})), n.a.createElement(d.a, {
						childRef: this.embedBoxChildRef,
						className: Object(o.a)(b.a.tweetEmbedBox, {
							[b.a.isInvisible]: !i.height || !p
						}),
						height: f,
						isListing: i.isListing,
						isResponsive: !0,
						maxHeight: i.isListing ? m.i : null,
						onLoad: s,
						showCentered: i.showCentered,
						showFull: !0,
						source: a,
						title: r,
						width: v
					}), i.isListing && f > m.i && n.a.createElement("div", {
						className: b.a.seeMore
					}, n.a.createElement(h.a, null, "see full tweet"))))
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
				u = i("./src/higherOrderComponents/withMux/index.tsx"),
				m = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = i("./src/lib/env/index.ts"),
				b = i("./src/lib/isUrl/index.ts"),
				g = i("./src/lib/objectSelector/index.ts"),
				v = i("./src/lib/onFocusAndVisibilityChange/index.ts"),
				x = i("./src/lib/sentry/index.ts"),
				w = i("./src/reddit/components/AdViewabilityMRC/index.tsx"),
				f = i("./src/reddit/components/Governance/Proposal/async.ts"),
				y = i("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				E = i("./src/reddit/components/Media/constants.ts"),
				S = i("./src/reddit/components/Media/EmbedBox/index.tsx"),
				I = i("./src/reddit/components/Media/ImageBox/index.tsx"),
				O = i("./src/reddit/components/Media/MediaContainer/index.tsx"),
				C = i("./src/reddit/components/Media/RichTextContainer/index.tsx"),
				T = i("./src/reddit/components/Media/TwitterEmbed/index.tsx"),
				M = i("./src/reddit/components/Media/VideoBox/index.tsx"),
				V = i("./src/reddit/components/PlayButton/index.tsx"),
				L = i("./src/reddit/components/RawHTMLDisplay/Media.tsx"),
				j = i("./src/reddit/components/RichTextJson/index.tsx"),
				D = i("./src/reddit/constants/componentSizes.ts"),
				_ = i("./src/reddit/constants/screenWidths.ts"),
				N = i("./src/reddit/contexts/PageLayer/index.tsx"),
				P = i("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				R = i("./src/reddit/helpers/getRichTextContent/index.ts"),
				A = i("./src/reddit/helpers/name/index.ts"),
				F = i("./src/reddit/helpers/postHasSelfText/index.ts"),
				H = i("./src/reddit/helpers/stripMetaLinks/fromRawHtml.ts"),
				W = i("./src/reddit/helpers/stripMetaLinks/fromRTJ.ts"),
				B = i("./src/reddit/models/Media/index.ts"),
				k = i("./src/reddit/selectors/experiments/postSeo.ts"),
				U = i("./src/reddit/selectors/postCreations.ts"),
				G = i("./src/reddit/selectors/posts.ts"),
				Y = i("./src/reddit/components/Media/getResolution.ts"),
				K = i("./src/reddit/components/Media/index.m.less"),
				z = i.n(K);

			function J() {
				return (J = Object.assign || function(e) {
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
					importAsync: () => Promise.all([i.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), i.e("LiveVideoPlayer~PublicAccessNetwork"), i.e("LiveVideoPlayer")]).then(i.bind(null, "./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx")),
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
				Q = Object(u.a)(y.b, {
					playerName: "Reddit Player"
				}),
				X = 1200,
				Z = 75,
				$ = "player.js",
				ee = D.r + D.q,
				te = e => e.isVisible ? e.children : l.a.createElement("div", {
					className: z.a.displayNone
				}, e.children),
				ie = new Set([B.n.EMBED, B.n.GIFVIDEO, B.n.LIVEVIDEO, B.n.VIDEO]),
				se = e => !!e.media && ie.has(e.media.type),
				ne = new Set([B.n.EMBED, B.n.GIFVIDEO, B.n.IMAGE, B.n.LIVEVIDEO, B.n.VIDEO]),
				oe = e => {
					let {
						post: t
					} = e;
					return !!t.media && ne.has(t.media.type)
				},
				ae = Object(N.t)(),
				re = Object(h.c)({
					isPostImageAltTextVariant: k.b,
					subredditOrProfileDisplayText: (e, t) => {
						let {
							post: i
						} = t;
						const s = Object(G.bb)(e, i);
						return s && s.displayText || i && i.author && Object(A.c)(i.author)
					},
					subredditOrProfile: (e, t) => {
						let {
							post: i
						} = t;
						return Object(G.bb)(e, {
							postId: i.id
						})
					},
					isEditing: (e, t) => {
						let {
							post: i
						} = t;
						return Object(U.C)(e, {
							postId: i.id
						})
					}
				}),
				de = Object(c.b)(re),
				le = Object(g.b)(e => ({
					renderingObjectInfo: e.post,
					pageLayer: e.pageLayer
				}));
			class ce extends l.a.Component {
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
						return !!e && B.d.has(e.type)
					}, this.shouldFocusContentDebouncer = r()(e => {
						const {
							media: t
						} = this.props.post, {
							autoplayPref: i
						} = this.props;
						if (t && B.d.has(t.type)) {
							if (this.iframe) {
								const s = t.type === B.n.EMBED ? t.provider : null;
								s && !B.q.has(s) ? !i && e || this.toggleEmbedAutoplay(this.iframe, !e) : e || this.pauseEmbed(this.iframe, s)
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
							const i = t ? B.g.Pause : B.g.Play;
							e.contentWindow.postMessage({
								context: $,
								method: i
							}, E.a), e.contentWindow.postMessage({
								context: $,
								method: B.g.Mute
							}, E.a)
						}
					}, this.pauseEmbed = (e, t) => {
						e.contentWindow && (t === B.t.YouTube ? e.contentWindow.postMessage(JSON.stringify({
							event: "command",
							func: B.x.Pause
						}), E.a) : e.contentWindow.postMessage({
							context: $,
							method: B.g.Pause
						}, E.a))
					}, this.onIframeLoaded = () => {
						const {
							media: e
						} = this.props.post, {
							autoplayPref: t
						} = this.props, i = e && e.type === B.n.EMBED ? e.provider : null;
						if (this.iframe && i && !B.q.has(i)) {
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
					se(this.props.post) && (this.visibilityChangeSubscriptionId = v.a.subscribe(e => {
						this.handleVisibilityChange(e)
					})), this.props.scrollerItemRef && oe(this.props) && this.props.scrollerItemRef(this, this.state.canLoadContent)
				}
				componentWillUnmount() {
					this.visibilityChangeSubscriptionId && v.a.unsubscribe(this.visibilityChangeSubscriptionId), this.props.scrollerItemRef && oe(this.props) && this.props.scrollerItemRef(void 0), window.removeEventListener("resize", this.updateDimensions)
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.state.canLoadContent && e.shouldLoad && this.setState({
						canLoadContent: !0
					}), void 0 !== e.shouldPause && e.shouldPause !== this.props.shouldPause && this.shouldFocusContentDebouncer(!e.shouldPause)
				}
				getVideoExpandoMaxDimensions() {
					let e, t = Math.max(B.i, this.state.viewportHeight),
						i = Math.min(X, 16 * t / 9);
					i === X && (t = 9 * X / 16), e = this.state.viewportWidth >= _.c ? this.state.viewportWidth < D.l ? this.state.viewportWidth - ee - 2 * Z : this.state.viewportWidth - ee - D.e - 2 * Z : this.state.viewportWidth - 2 * Z;
					const s = this.state.viewportHeight - 2 * Z;
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
					let i = B.i,
						s = B.m;
					return e.isExpando ? this.getVideoExpandoMaxDimensions() : (e.isPromotedTrend && (i = B.r, s = B.s), {
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
					if (Object(B.B)(s.media)) return {
						source: s.media.scrubberThumbSource,
						width: this.state.viewportWidth - 2 * Z,
						height: this.state.viewportHeight - 2 * Z
					};
					const n = s.media && s.media.obfuscated || "";
					let o = s.media && !Object(B.E)(s.media) ? s.media.content : "",
						[a, r] = !s.media || Object(B.C)(s.media) || Object(B.D)(s.media) ? [0, 0] : [s.media.height, s.media.width];
					if (i && s.media && (s.media.type === B.n.IMAGE || s.media.type === B.n.GIFVIDEO)) {
						const e = Y.b(i, s.media.resolutions);
						e && (o = e.url, r = e.width, a = e.height)
					} else if (s && s.media && (!e.isListing || e.isExpando) && (s.media.type === B.n.IMAGE || s.media.type === B.n.GIFVIDEO)) {
						let e;
						(e = Object(I.b)(s.media.height, s.media.width) && Object(I.c)(s.media.height) ? Y.c(s.media.height, s.media.width, s.media.resolutions) : Y.a(s.media.resolutions)) && (o = e.url, r = e.width, a = e.height)
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
					if (s.media && s.media.type === B.n.VIDEO) {
						const t = a / r;
						e.isExpando ? (a = d, r = l) : t > B.c ? (a = d, r = Math.min(Math.max(d / t, B.p), l)) : (a = Math.min(Math.max(l * t, B.o), d), r = l)
					}
					s.media && s.media.type === B.n.EMBED && e.isExpando && s.media.provider !== B.t.Twitter && (a = d, r = l);
					let c = !1;
					if (e.isMiniCard) {
						const e = a / r;
						c = Math.abs(e - B.c) > .01
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
						isMediumHeight: r,
						isNotCardView: d,
						isPostImageAltTextVariant: c,
						isTitleOnly: h,
						post: u,
						showCentered: m,
						showFull: g = !1,
						subredditOrProfileDisplayText: v
					} = this.props, {
						canLoadContent: y,
						forcePause: E,
						shouldPause: D,
						shouldStop: _,
						viewportWidth: N
					} = this.state;
					if (!u.media) return null;
					const A = E || D,
						k = _,
						{
							source: U,
							obfuscated: G,
							height: Y,
							width: K,
							needsBackgroundBlur: X
						} = this.getMediaInfo(this.props, this.state),
						$ = {
							showCentered: m,
							isListing: a,
							showFull: g,
							height: Y,
							width: K
						},
						ee = Object.assign({}, $, {
							className: e,
							forceAspectRatio: s,
							viewportWidth: N
						}),
						ie = this.shouldBlur(),
						se = !(!u.isSponsored || !u.source);
					if (G && ie) return l.a.createElement(O.a, J({}, ee, {
						blurSrc: G
					}), l.a.createElement(te, {
						isVisible: y
					}, l.a.createElement(I.a, J({}, $, {
						className: this.props.imageBoxClassName,
						contentImageClassName: this.props.imageBoxContentImageClassName,
						imageClassName: this.props.imageBoxClassName,
						isListing: a,
						isNSFW: this.isNSFW(),
						isSpoiler: this.isSpoiler(),
						isVideoThumbnail: !!u.media && u.media.type === B.n.VIDEO,
						onClick: this.onImageBoxClick,
						postId: u.id,
						shouldBlur: ie,
						source: G,
						outboundUrl: se && u.source.outboundUrl || void 0,
						originalSource: U
					}))));
					if (!u.media) return null;
					switch (u.media.type) {
						case B.n.RTJSON:
							const s = Object(R.a)(u, null);
							if (null === s) return;
							return g || Object(P.a)(u) ? l.a.createElement(l.a.Fragment, null, l.a.createElement(C.a, {
								canLoadContent: y,
								className: e,
								"data-click-id": "text",
								isCommentsPage: n,
								isExpando: o,
								isMediumHeight: r,
								isRichTextTruncated: u.media.isRichtextPreview,
								isTitleOnly: h,
								postId: u.id,
								showFull: g
							}, l.a.createElement(j.a, {
								flairStyleTemplate: i,
								content: u.isMeta ? Object(W.a)(s, u.id) : s,
								mediaMetadata: u.media.mediaMetadata,
								postId: u.id,
								rtJsonElementProps: le(this.props),
								renderMediaAsLinks: a
							})), l.a.createElement(f.a, {
								postId: u.id,
								isCommentsPage: !!n
							})) : null;
						case B.n.TEXT:
							if (Object(F.a)(u)) {
								const t = "Text post should not include body content";
								return x.c.withScope(e => {
									e.setExtra("info", {
										post: u,
										isListing: a,
										isCommentsPage: n
									}), x.c.captureMessage(t)
								}), Object(p.a)() && console.log("".concat(u.id, ": ").concat(t)), l.a.createElement(C.a, {
									postId: u.id,
									className: e,
									"data-click-id": "text",
									isCommentsPage: n,
									showFull: g
								}, l.a.createElement(L.a, {
									flairStyleTemplate: i,
									html: u.isMeta ? Object(H.a)(u.media.content, u.id, z.a.hiddenLink) : u.media.content
								}))
							}
							return null;
						case B.n.EMBED:
							return this.props.isMiniCard && u.preview && u.preview.url ? l.a.createElement(O.a, J({}, ee, {
								alwaysWrapMedia: !0
							}), l.a.createElement(te, {
								isVisible: y
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(I.a, J({}, $, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: u.id,
								shouldBlur: ie,
								source: u.preview.url,
								originalSource: u.preview.url
							})), l.a.createElement(V.a, null)))) : B.h.has(u.media.provider) ? u.media.provider === B.t.Twitter ? l.a.createElement(T.a, {
								canLoadContent: y,
								embedBoxChildRef: this.storeChildRef,
								media: u.media,
								mediaContainerProps: ee,
								onIframeLoaded: this.onIframeLoaded,
								source: U,
								title: u.title
							}) : l.a.createElement(O.a, J({}, ee, {
								alwaysWrapMedia: !0,
								height: o ? Y : B.i,
								width: o ? K : B.i * (16 / 9)
							}), y && l.a.createElement(S.a, {
								childRef: this.storeChildRef,
								height: o ? Y : B.i,
								width: o ? K : void 0,
								isListing: a,
								isResponsive: !0,
								onLoad: this.onIframeLoaded,
								showCentered: m,
								showFull: g,
								source: U,
								title: u.title
							})) : l.a.createElement(O.a, J({}, ee, {
								alwaysWrapMedia: !0
							}), y && l.a.createElement(S.a, J({}, $, {
								isResponsive: o || u.media.provider === B.t.IFrameEmbed,
								title: u.title,
								childRef: this.storeChildRef,
								onLoad: this.onIframeLoaded,
								source: U,
								fullWidth: u.media.provider === B.t.IFrameEmbed
							})));
						case B.n.GIFVIDEO: {
							let e = Y,
								t = K;
							return e > B.i && (t = K / Y * (e = B.i)), l.a.createElement(O.a, J({}, ee, {
								blurSrc: X ? u.media.gifBackgroundImage : void 0
							}), l.a.createElement(te, {
								isVisible: y
							}, l.a.createElement(M.a, J({}, $, {
								isNotCardView: d,
								height: o ? void 0 : e,
								width: o ? void 0 : t,
								postId: u.id,
								shouldLoad: !0,
								shouldPause: A,
								source: U,
								originalSource: u.media.content
							}))))
						}
						case B.n.VIDEO: {
							const e = u.media.posterUrl || u.preview && u.preview.url;
							if (this.props.isMiniCard && e) return l.a.createElement(O.a, J({}, ee, {
								alwaysWrapMedia: !0
							}), l.a.createElement(te, {
								isVisible: y
							}, l.a.createElement(l.a.Fragment, null, l.a.createElement(I.a, J({}, $, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								postId: u.id,
								shouldBlur: ie,
								source: e,
								originalSource: e
							})), l.a.createElement(V.a, null))));
							const i = l.a.createElement(O.a, J({}, ee, {
								alwaysWrapMedia: !0,
								isVideo: !0
							}), y && l.a.createElement(Q, {
								autoPlay: "boolean" == typeof D ? !D : void 0,
								isExpando: o,
								shouldLoad: !0,
								shouldPause: A,
								shouldStop: k,
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
							return u.isSponsored ? l.a.createElement(w.a, {
								post: u
							}, i) : i
						}
						case B.n.LIVEVIDEO:
							return l.a.createElement(te, {
								isVisible: y
							}, l.a.createElement(q, {
								canLoad: y,
								postId: u.id,
								postTitle: u.title,
								shouldPause: A,
								url: u.media.hlsUrl
							}));
						case B.n.IMAGE:
							const E = this.state.viewportHeight - 2 * Z,
								_ = this.state.viewportWidth - 2 * Z;
							let N, G = U;
							return this.props.isMiniCard && !this.props.isMiniCardHQPreviews && (u.thumbnail && Object(b.a)(u.thumbnail.url) ? G = u.thumbnail.url : u.preview && Object(b.a)(u.preview.url) && (G = u.preview.url)), c && (N = v ? "".concat(v, " - ").concat(u.title) : u.title), l.a.createElement(O.a, J({}, ee, {
								blurSrc: X ? G : void 0,
								isExpando: !!o
							}), l.a.createElement(te, {
								isVisible: y
							}, l.a.createElement(I.a, J({}, $, {
								className: this.props.imageBoxClassName,
								contentImageClassName: this.props.imageBoxContentImageClassName,
								imageClassName: this.props.imageBoxClassName,
								isExpando: o,
								isListing: a,
								isNSFW: this.isNSFW(),
								isCrosspost: !!t,
								isSpoiler: this.isSpoiler(),
								maxHeight: o ? E : void 0,
								maxWidth: o ? _ : void 0,
								postId: u.id,
								shouldBlur: ie,
								source: G,
								outboundUrl: se && u.source.outboundUrl || void 0,
								originalSource: u.media.content,
								altText: N
							}))));
						default:
							return null
					}
				}
			}
			t.a = ae(de(Object(m.a)(ce)))
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
			t.a = e => (Object(s.a)(e) || !!e.pollData) && !e.isSpoiler && !e.isNSFW
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
		},
		"./src/reddit/i18n/components.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			}));
			var s = i("./node_modules/react/index.js"),
				n = i.n(s);

			function o(e) {
				return n.a.createElement(n.a.Fragment, null, e.children)
			}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf.bfffc8f3c98c74cf315c.js.map