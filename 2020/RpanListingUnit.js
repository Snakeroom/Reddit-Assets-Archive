// https://www.redditstatic.com/desktop2x/RpanListingUnit.49a4566273ca4e6a7d36.js
// Retrieved at 9/8/2020, 6:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RpanListingUnit"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var i = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return i(e) + t
			}
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/cache/localStorage/index.ts"),
				d = s("./src/lib/combineRefs/index.tsx"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(c.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				h = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts");
			const m = Object(n.a)(e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: h.yb
				});
				return Object(h.zc)(t) ? void 0 : t
			}, e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: h.zb
				});
				return Object(h.zc)(t) ? void 0 : t
			}, (e, t) => e === h.Ab.Enabled && t === h.Ab.Enabled);
			var b = s("./src/config.ts");
			var p = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const v = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						i = new Uint32Array(e);
					return crypto.getRandomValues(i), Array.from(i).map(e => t.charAt(e % s)).join("")
				},
				f = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				g = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var S;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(S || (S = {}));
			const E = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					i = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(i)).map(g).join("")
			})(S.SHA1, e);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (s[i[r]] = e[i[r]])
				}
				return s
			};
			const R = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				x = Object({
					SENTRY_RELEASE_VERSION: "8b0b3c3-production"
				}),
				I = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: b.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: "Reddit/Version Build ".concat(x.SENTRY_RELEASE_VERSION, " ").concat(b.a.appName),
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: s,
					debug: c,
					disableCookies: h,
					envKey: u,
					localStorageSaltKey: b,
					localStorageViewerUserIdKey: g,
					playerName: S,
					playerVersion: x,
					respectDoNotTrack: _,
					saltLength: w,
					saltTimeToLive: C,
					viewerUserIdLength: T
				} = Object.assign(Object.assign({}, I), t);
				class j extends i.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(i.createRef)(), this.handleDashCreate = e => {
							this.setDashInstance(e)
						}, this.handleDashDestroy = () => {
							this.setDashInstance(null)
						}, this.handleHlsCreate = e => {
							this.setHlsInstance(e)
						}, this.handleHlsDestroy = () => {
							this.setHlsInstance(null)
						}, this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
						this.props.muxVideoId !== e.muxVideoId && this.doMuxThings(), this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef))
					}
					combineExternalVideoRef(e) {
						return e ? Object(d.a)(this.videoRef, e) : this.videoRef
					}
					render() {
						const t = this.props,
							{
								forwardedRef: s
							} = t,
							i = O(t, ["forwardedRef"]);
						return r.a.createElement(e, y({}, i, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: s,
							videoRef: this.combinedVideoRefs
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const e = await l();
							e.removeDashJS(this.video), this.dashInstance && e.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const e = await l();
							e.removeHLSJS(this.video), this.hlsInstance && e.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
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
						const e = this.props.redditUserId || j.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = f(),
							i = "".concat(s).concat(e).concat(t);
						return (await E(i)).substr(0, j.VIEWER_USER_ID_LENGTH)
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
						return Object.assign(Object.assign({
							debug: j.DEBUG,
							disableCookies: j.DISABLE_COOKIES,
							respectDoNotTrack: j.RESPECT_DO_NOT_TRACK
						}, s), {
							data: Object.assign(Object.assign({
								env_key: j.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: j.PLAYER_NAME,
								player_version: j.PLAYER_VERSION
							}, t), {
								viewer_user_id: e
							})
						})
					}
					getOrCreateSalt() {
						const e = j.LOCAL_STORAGE_SALT_KEY;
						let t = Object(o.a)(e);
						return t || (t = v(j.SALT_LENGTH), Object(o.b)(e, t, j.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return Object.assign(Object.assign({}, this.getDashInstanceData()), this.getHlsInstanceData())
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: i
						} = this.props;
						return {
							video_duration: s ? j.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? j.STREAM_TYPE_LIVE : j.STREAM_TYPE_ON_DEMAND,
							video_title: i
						}
					}
				}
				j.displayName = R(e), j.ANONYMOUS_USER_ID = s, j.DEBUG = c, j.DISABLE_COOKIES = h, j.DURATION_LIVE = 1 / 0, j.ENV_KEY = u, j.LOCAL_STORAGE_SALT_KEY = b, j.LOCAL_STORAGE_VIEWER_USER_ID_KEY = g, j.PLAYER_NAME = S, j.PLAYER_VERSION = x, j.RESPECT_DO_NOT_TRACK = _, j.SALT_LENGTH = w, j.SALT_TIME_TO_LIVE = C, j.STREAM_TYPE_LIVE = "live", j.STREAM_TYPE_ON_DEMAND = "on-demand", j.VIEWER_USER_ID_LENGTH = T;
				const A = Object(i.forwardRef)((e, t) => r.a.createElement(j, y({}, e, {
						forwardedRef: t
					}))),
					N = Object(n.c)({
						redditUserId: p.g,
						isMuxEnabled: m
					});
				return Object(a.b)(N, null, null, {
					forwardRef: !0
				})(A)
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, s) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t) {
				for (var s = arguments.length, i = new Array(s > 2 ? s - 2 : 0), r = 2; r < s; r++) i[r - 2] = arguments[r];
				let a, n = !1;
				const o = async () => {
					i && i.length ? await e.call(window, ...i) : await e.call(window), n || (a = window.setTimeout(o, t))
				};
				return a = window.setTimeout(o, t), () => {
					n = !0, window.clearTimeout(a)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/setInterval/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const d = new class {
				constructor() {
					this.isInitialized = !1, this.currentStreamsRateSec = a.c, this.currentConfigRateSec = a.d, this.heartbeatDelaySec = a.f, this.heartbeatRateSec = a.g, this.statsRefreshRateSec = a.j, this.recommendedViewerSubredditsRefreshRateSec = a.h, this.MIN_RATE_MS = 1e3, this.subscribeConfig = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startConfigWork(e, t, s)), () => this.unsubscribeConfig()), this.subscribeStreams = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startStreamsWork(e, t, s)), () => this.unsubscribeStreams()), this.subscribeRecommendedViewerSubreddits = () => async (e, t) => (this.startRecommendedViewerSubredditsWork(e, t), () => this.unsubscribeRecommendedViewerSubreddits()), this.subscribeStats = e => async (t, s) => (this.currentStatsId = e, this.startStatsWork(t, s), () => this.unsubscribeStats()), this.subscribeHeartbeat = e => async (t, s) => (this.currentHeartbeatId = e, this.startHeartbeatWork(t, s), () => this.unsubscribeHeartbeat())
				}
				unsubscribeConfig() {
					window.clearTimeout(this.configTimeout)
				}
				unsubscribeStreams() {
					window.clearTimeout(this.streamsTimeout)
				}
				unsubscribeRecommendedViewerSubreddits() {
					this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval()
				}
				unsubscribeStats() {
					this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.currentStatsId = void 0
				}
				unsubscribeHeartbeat() {
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.currentHeartbeatId = void 0
				}
				async initializeConfig(e, t, s) {
					if (this.isInitialized) return;
					await t(Object(r.c)(e));
					const i = Object(o.l)(s());
					i.lastUpdated && (this.currentStreamsRateSec = i.viewer_streams_refresh, this.currentConfigRateSec = i.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(e, t, s) {
					window.clearTimeout(this.configTimeout), await t(Object(r.c)(e));
					const i = Object(o.l)(s()),
						a = i.rpan_config_refresh_rate;
					this.currentConfigRateSec !== a && (this.currentConfigRateSec = a);
					const n = i.viewer_streams_refresh;
					this.currentStreamsRateSec !== n && (this.currentStreamsRateSec = n, this.startStreamsWork(e, t, s));
					const d = i.viewer_heartbeat_interval;
					d && this.heartbeatRateSec !== d && this.startHeartbeatWork(t, s);
					const c = i.viewer_heartbeat_interval;
					c && this.statsRefreshRateSec !== c && this.startStatsWork(t, s), this.configTimeout = window.setTimeout(() => this.startConfigWork(e, t, s), this.getConfigTimeout())
				}
				async startStreamsWork(e, t, s) {
					window.clearTimeout(this.streamsTimeout), await t(Object(n.e)(e)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(e, t, s), this.getStreamsTimeout(s()))
				}
				async startRecommendedViewerSubredditsWork(e, t) {
					await this.initializeConfig(a.R, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(r.b)());
					const s = Object(o.l)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(i.a)(() => e(Object(r.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(a.R, e, t), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(o.l)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(i.a)(() => {
						this.currentStatsId && e(Object(n.d)(this.currentStatsId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(a.R, e, t), !this.currentHeartbeatId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(o.l)(t());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const n = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const d = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						c = () => {
							this.currentHeartbeatId && e(Object(r.d)(this.currentHeartbeatId))
						};
					this.clearSendHeartbeatInterval = Object(i.a)(() => {
						c(), this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.clearSendHeartbeatInterval = Object(i.a)(c, d)
					}, n)
				}
				getStreamsTimeout(e) {
					return Math.max(1e3 * (this.currentStreamsRateSec + this.getRandomFetchStreamsJitterSec(e)), this.MIN_RATE_MS)
				}
				getConfigTimeout() {
					return Math.max(1e3 * this.currentConfigRateSec, this.MIN_RATE_MS)
				}
				getRandomFetchStreamsJitterSec(e) {
					const t = Object(o.l)(e).viewer_streams_refresh_slop,
						s = Math.cos(Math.PI * Math.round(Math.random()));
					return Math.random() * t * s
				}
			};
			t.a = d
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/hls.js/dist/hls.js"),
				n = s.n(a),
				o = s("./src/lib/combineRefs/index.tsx"),
				d = s("./src/lib/env/index.ts");
			const c = 3,
				l = 5e3,
				h = 1e3;
			class u extends i.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoRef = r.a.createRef(), this.onPlayError = e => t => {
						if ("AbortError" === t.name) return;
						const {
							onAutoPlayPrevented: s,
							playMutedOnPrevented: i
						} = this.props;
						if ("NotAllowedError" === t.name) return s && s(), void(i && this.setState(Object.assign(Object.assign({}, this.state), {
							isMuteForced: !0
						})));
						Object(d.a)() && console.error(t), e && this.onIrrecoverableError(e)
					}, this.state = {
						isInitialized: !1,
						isMuteForced: !1
					}, this.hls = void 0, this.onVideoLoadedData = this.onVideoLoadedData.bind(this), this.onVideoPause = this.onVideoPause.bind(this), this.onVideoPlay = this.onVideoPlay.bind(this), this.onTimeUpdated = this.onTimeUpdated.bind(this), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
				}
				get video() {
					return this.videoRef.current
				}
				componentDidUpdate(e, t) {
					if (this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef)), e.url !== this.props.url) return void this.initialize();
					const {
						isPaused: s
					} = this.props;
					this.video && this.state.isInitialized && s !== this.video.paused && (s ? this.video.pause() : this.video.play().catch(this.onPlayError(this.hls))), !t.isMuteForced && this.state.isMuteForced && this.state.isInitialized && this.video && this.video.play().catch(this.onPlayError(this.hls))
				}
				componentDidMount() {
					this.initialize()
				}
				componentWillUnmount() {
					this.video && !this.video.paused && this.onVideoPause(), this.destroyHls()
				}
				render() {
					const {
						controls: e,
						muted: t,
						onEnded: s
					} = this.props;
					return r.a.createElement("video", {
						controls: e,
						tabIndex: e ? 0 : -1,
						muted: t || this.state.isMuteForced,
						onEnded: s,
						onLoadedData: this.onVideoLoadedData,
						onPlay: this.onVideoPlay,
						onPause: this.onVideoPause,
						onTimeUpdate: this.onTimeUpdated,
						ref: this.combinedVideoRefs
					})
				}
				combineExternalVideoRef(e) {
					return e ? Object(o.a)(this.videoRef, e) : this.videoRef
				}
				destroyHls() {
					this.hls && (this.hls.destroy(), this.props.onHlsDestroy && this.props.onHlsDestroy(this.hls))
				}
				initialize() {
					const {
						autoplay: e,
						startTime: t,
						isPaused: s,
						onHlsCreate: i,
						onLevelLoaded: r,
						onLoadingData: a,
						url: o
					} = this.props;
					if (!o || !this.video) return;
					this.destroyHls();
					const d = new n.a({
						enableWorker: !1,
						fragLoadingMaxRetry: 2,
						levelLoadingMaxRetry: 4,
						manifestLoadingMaxRetry: 1,
						startFragPrefetch: !0,
						liveSyncDurationCount: 2,
						maxMaxBufferLength: 10
					});
					this.hls = d, i && i(d), this.subscribeErrorHandlers(d), d.on(n.a.Events.MANIFEST_LOADING, () => {
						a && a()
					}), d.on(n.a.Events.MANIFEST_PARSED, (i, r) => {
						e && !s && this.video && (this.video.currentTime = t, this.video.play().catch(this.onPlayError(d))), this.setState(Object.assign(Object.assign({}, this.state), {
							isInitialized: !0
						}))
					}), d.on(n.a.Events.LEVEL_LOADED, (e, t) => {
						r && r(t.details)
					}), d.loadSource(o), d.attachMedia(this.video)
				}
				subscribeErrorHandlers(e) {
					e.on(n.a.Events.ERROR, (t, s) => {
						if (s.type === n.a.ErrorTypes.NETWORK_ERROR && s.response && 410 === s.response.code) this.onResourceRemoved(e);
						else if (s.fatal) switch (s.type) {
							case n.a.ErrorTypes.MEDIA_ERROR:
								return void this.handleFatalMediaError(e);
							case n.a.ErrorTypes.NETWORK_ERROR:
								return void this.handleFatalNetworkError(e, s);
							default:
								return void this.onIrrecoverableError(e)
						}
					})
				}
				onResourceRemoved(e) {
					e.stopLoad(), this.props.onResourceRemoved && this.props.onResourceRemoved()
				}
				onIrrecoverableError(e) {
					e === this.hls ? this.destroyHls() : e.destroy(), this.props.onError && this.props.onError()
				}
				handleFatalMediaError(e) {
					return Date.now() - this.mediaRecoveryLastAttemptUtc > h && (this.mediaRecoveryAttemptsCount = 0), 0 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), void e.recoverMediaError()) : 1 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), e.swapAudioCodec(), void e.recoverMediaError()) : void this.onIrrecoverableError(e)
				}
				handleFatalNetworkError(e, t) {
					t.details !== n.a.ErrorDetails.FRAG_LOAD_ERROR && t.details !== n.a.ErrorDetails.FRAG_LOAD_TIMEOUT ? this.onIrrecoverableError(e) : this.handleBadFragment(e, t.frag)
				}
				handleBadFragment(e, t) {
					this.resetBadFragmentsCountIfCooldownPassed(), this.fragmentRecoveryAttemptsCount > c || !t ? this.onIrrecoverableError(e) : (this.fragmentRecoveryAttemptsCount++, this.fragmentRecoveryLastAttemptUtc = Date.now(), e.startLoad())
				}
				resetBadFragmentsCountIfCooldownPassed() {
					this.fragmentRecoveryLastAttemptUtc + l < Date.now() && (this.fragmentRecoveryAttemptsCount = 0)
				}
				onTimeUpdated() {
					this.video && this.props.onTimeUpdate && this.props.onTimeUpdate(this.video.currentTime)
				}
				onVideoLoadedData() {
					const {
						onLoadedData: e
					} = this.props, t = !this.video || this.video.paused;
					this.hls && t && this.hls.stopLoad(), e && e()
				}
				onVideoPause() {
					const {
						onPause: e
					} = this.props;
					this.hls && this.hls.stopLoad(), e && e()
				}
				onVideoPlay() {
					const {
						onPlay: e
					} = this.props;
					this.hls && this.hls.startLoad(), e && e(), this.state.isMuteForced && this.setState(Object.assign(Object.assign({}, this.state), {
						isMuteForced: !1
					}))
				}
				setCurrentTime(e) {
					this.video && (this.video.currentTime = e)
				}
				setVolume(e) {
					this.video && this.video.volume !== e && (this.video.volume = e)
				}
			}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return R
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "f", (function() {
				return I
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "i", (function() {
				return C
			}));
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				d = s.n(o),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				h = function(e, t) {
					var s = {};
					for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (s[i[r]] = e[i[r]])
					}
					return s
				};
			const u = Object(n.c)({
				consumers: e => e.jsApi
			});
			class m extends i.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: i
							} = t,
							r = h(t, ["className", "consumers"]);
						l.a.publish(c.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					d()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					d()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var b = Object(a.b)(u, {})(m),
				p = s("./src/reddit/selectors/comments.ts"),
				v = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const s = Object(p.n)(e, t),
					i = Object(v.J)(e, t);
				return {
					comment: s,
					isModerator: !(!i || !i.name) && !!e.moderatingSubreddits[i.name],
					subredditOrProfile: i
				}
			};
			var g = Object(a.b)(() => Object(n.a)(f, p.j, (e, t) => Object.assign(Object.assign({}, e), {
				depth: t
			})))(e => r.a.createElement(b, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const S = (e, t) => {
				const s = Object(p.n)(e, t),
					i = Object(v.J)(e, t);
				return {
					comment: s,
					isModerator: !(!i || !i.name) && !!e.moderatingSubreddits[i.name],
					subredditOrProfile: i
				}
			};
			var E = Object(a.b)(() => Object(n.a)(S, e => e))(e => r.a.createElement(b, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var y = Object(a.b)(() => Object(n.c)({
					subreddit: v.S
				}))(e => r.a.createElement(b, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				O = s("./src/reddit/selectors/posts.ts");
			var R = Object(a.b)(() => Object(n.c)({
				post: O.N,
				subredditOrProfile: O.ab,
				isModerator: (e, t) => {
					const s = Object(O.ab)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "post",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					created: e.post.created,
					numComments: e.post.numComments,
					distinguishType: e.post.distinguishType,
					domain: e.post.source && e.post.source.displayText,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					sourceUrl: e.post.source && e.post.source.url,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var x = Object(a.b)(() => Object(n.c)({
				subredditOrProfile: (e, t) => Object(O.ab)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(O.ab)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "postAuthor",
				data: {
					author: e.post.author,
					isModerator: e.isModerator,
					post: {
						id: e.post.id
					},
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {}
				}
			}));
			var I = Object(a.b)(() => Object(n.c)({
				post: O.N,
				subredditOrProfile: O.ab,
				isModerator: (e, t) => {
					const s = Object(O.ab)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "postModTools",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					distinguishType: e.post.distinguishType,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					numComments: e.post.numComments,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var _ = Object(a.b)(() => Object(n.c)({
				subreddit: v.S
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var w = Object(a.b)(() => Object(n.c)({
				subredditOrProfile: (e, t) => Object(v.M)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var C = Object(a.b)(() => Object(n.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(v.S)(e, {
						subredditId: s
					}) : null
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "RpanTitle", (function() {
				return de
			})), s.d(t, "RpanDescription", (function() {
				return ce
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/higherOrderComponents/withMux/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/intersectionObserver/index.ts"),
				l = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				h = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/uuid/v4.js")),
				u = s.n(h);
			const m = new WeakMap,
				b = new WeakMap,
				p = new WeakMap;
			class v {
				get laps() {
					return m.get(this).slice(1)
				}
				get paused() {
					return !b.has(this)
				}
				get time() {
					const e = Date.now(),
						t = p.get(this);
					return this.paused ? t : t + (e - b.get(this))
				}
				constructor() {
					this.reset()
				}
				start() {
					this.paused && b.set(this, Date.now())
				}
				pause() {
					this.paused || (p.set(this, this.time), b.delete(this))
				}
				reset() {
					m.set(this, [
						[0, 0]
					]), p.set(this, 0), b.delete(this)
				}
				lap() {
					const {
						time: e
					} = this, t = m.get(this), s = [e - t[t.length - 1][1], e];
					return m.set(this, [...t, s]), s
				}
			}

			function f(e) {
				return Math.round(1e3 * e)
			}
			const g = 1e4;

			function S(e, t) {
				return {
					startedAt: e,
					expectedAt: e + t,
					completedAt: Date.now()
				}
			}

			function E(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				const s = y(e, arguments.length > 2 ? arguments[2] : void 0);
				for (var i = arguments.length, r = new Array(i > 3 ? i - 3 : 0), a = 3; a < i; a++) r[a - 3] = arguments[a];
				return function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					const s = Date.now();
					for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) r[a - 2] = arguments[a];
					return setTimeout((function() {
						const i = S(s, t);
						for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
						return e(i, ...a)
					}), t, ...r)
				}(s, t, ...r)
			}

			function y(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
				return function(s) {
					const i = function(e, t) {
						const {
							completedAt: s,
							expectedAt: i
						} = e, r = s > i + t;
						return Object.assign(Object.assign({}, e), {
							expired: r
						})
					}(s, t);
					for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) a[n - 1] = arguments[n];
					return e(i, ...a)
				}
			}
			var O = class {
				constructor(e) {
					this.handleTimeout = e => {
						let {
							expired: t
						} = e;
						t ? this.emitError({
							id: this.id,
							message: "Expired timer."
						}) : (this.watchTimer.lap(), this.emitHeartbeat(), this.next())
					};
					const {
						id: t,
						onError: s,
						onHeartbeat: i
					} = e;
					this.delayIterator = null, this.id = t, this.onError = s, this.onHeartbeat = i, this.sessionTimer = new v, this.startedAt = 0, this.watchTimer = new v
				}
				get isPaused() {
					return !!this.timeout
				}
				get stats() {
					const {
						laps: e
					} = this.watchTimer, t = e[e.length - 1];
					return {
						heartbeatDurationMs: t ? t[0] : 0,
						id: this.id,
						sessionDurationMs: this.sessionTimer.time,
						startTimeMs: this.startedAt,
						watchDurationMs: this.watchTimer.time
					}
				}
				initDelayIterator() {
					const e = [f(5), f(15), f(30), f(45), f(60)],
						t = f(60);
					this.delayIterator = function*(e, t) {
						const s = function(e) {
							let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return e.map(e => {
								const s = e - t;
								return t = e, s
							})
						}(e);
						for (const i of s) yield i;
						for (;
							"number" == typeof t;) yield t
					}(e, t)
				}
				startHeartbeats(e) {
					this.startedAt || (this.startedAt = Date.now(), this.emitHeartbeat(), this.sessionTimer.start()), this.initDelayIterator(), this.next(), e || this.startWatchTimer()
				}
				next() {
					if (this.clearTimeout(), !this.delayIterator) throw new Error("Invalid delay iterator.");
					const {
						value: e,
						done: t
					} = this.delayIterator.next();
					t || "number" != typeof e || (this.timeout = E(this.handleTimeout, e))
				}
				pauseHeartbeats() {
					this.pauseWatchTimer(), this.watchTimer.lap(), this.emitHeartbeat(), this.clearTimeout()
				}
				emitError(e) {
					this.onError(e)
				}
				emitHeartbeat() {
					this.onHeartbeat(this.stats)
				}
				startWatchTimer() {
					this.watchTimer.start()
				}
				pauseWatchTimer() {
					this.watchTimer.pause()
				}
				destroy() {
					this.clearTimeout(), delete this.onError, delete this.onHeartbeat
				}
				clearTimeout() {
					this.timeout && (clearTimeout(this.timeout), delete this.timeout)
				}
			};
			const R = new WeakMap;
			class x {
				constructor(e, t) {
					if (this.handlePause = () => {
							const e = R.get(this);
							e && !e.isPaused && e.pauseWatchTimer()
						}, this.handlePlay = () => {
							const e = R.get(this);
							e && !e.isPaused && e.startWatchTimer()
						}, this.handleError = e => {
							const t = R.get(this);
							t && t.id === e.id && (this.destroySession(), this.startSession())
						}, this.handleHeartbeat = e => {
							if (!this.video) return;
							const t = R.get(this);
							if (!t || t.id !== e.id) return;
							const s = Object.assign(Object.assign({}, e), this.videoStats);
							this.onHeartbeat(s)
						}, "function" != typeof t.onHeartbeat) throw new Error("Invalid video session onHeartbeat callback.");
					this.idleTimer = new v, this.onHeartbeat = t.onHeartbeat, this.attachVideo(e)
				}
				get idle() {
					return this.idleTimer.time >= x.IDLE_THRESHOLD
				}
				get videoStats() {
					if (!this.video) return {};
					const {
						currentTime: e,
						duration: t,
						muted: s,
						volume: i
					} = this.video;
					return isNaN(t) ? {} : {
						playheadOffsetMs: f(t - e),
						timestampMs: f(e),
						volume: s ? 0 : i
					}
				}
				attachVideo(e) {
					if (!e) throw new Error("Invalid video element.");
					e !== this.video && (this.detachVideo(), e.addEventListener("play", this.handlePlay), e.addEventListener("pause", this.handlePause), this.video = e)
				}
				detachVideo() {
					const {
						video: e
					} = this;
					e && (e.removeEventListener("play", this.handlePlay), e.removeEventListener("pause", this.handlePause), delete this.video)
				}
				createSession() {
					const e = {
						id: u()(),
						onError: this.handleError,
						onHeartbeat: this.handleHeartbeat
					};
					return new O(e)
				}
				startSession() {
					if (!this.video) return;
					let e = R.get(this);
					e && !this.idle || (this.destroySession(), e = this.createSession(), R.set(this, e)), this.idleTimer.reset(), e.startHeartbeats(this.video.paused)
				}
				pauseSession() {
					if (!this.video) return;
					const e = R.get(this);
					e && (e.pauseHeartbeats(), this.idleTimer.start())
				}
				endSession() {
					this.pauseSession(), this.destroySession()
				}
				destroySession() {
					const e = R.get(this);
					e && (e.destroy(), R.delete(this))
				}
				destroy() {
					this.destroySession(), this.detachVideo(), delete this.onHeartbeat
				}
			}
			x.IDLE_THRESHOLD = f(300);
			var I = x,
				_ = s("./src/reddit/actions/preferences.ts"),
				w = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				C = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				T = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				j = s("./src/reddit/constants/chat.ts"),
				A = s("./src/reddit/constants/postLayout.ts"),
				N = s("./src/reddit/helpers/overlay/index.ts"),
				M = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				D = s("./src/reddit/helpers/trackers/rpan.ts"),
				L = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				P = s("./src/reddit/models/Vote/index.ts"),
				V = s("./src/reddit/selectors/platform.ts"),
				H = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				F = s("./src/reddit/components/Flatlist/index.tsx"),
				W = s("./src/reddit/components/Flatlist/constants.ts"),
				B = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				z = s("./src/reddit/components/HlsVideo/index.tsx"),
				K = s("./src/reddit/components/OverflowMenu/index.tsx"),
				G = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Y = s("./src/reddit/components/PostLeftRail/index.tsx"),
				J = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				$ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				q = s("./src/reddit/controls/InternalLink/index.tsx"),
				X = s("./src/reddit/controls/Score/index.tsx"),
				Z = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				ee = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				se = s.n(te),
				ie = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				re = s.n(ie);
			const {
				fbt: ae
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ne = Object(o.a)(z.a, {
				playerName: "RPAN DU Video Player"
			}), oe = Object(a.b)(() => Object(n.c)({
				autoplay: k.b,
				isLoggedIn: k.H,
				isOverlayOpen: V.i,
				location: (e, t) => {
					let {
						listingName: s
					} = t;
					const i = Object(H.m)(e, {
						listingName: s
					});
					let r;
					if (i) {
						const e = Object(M.c)(i),
							t = Object(T.c)(s);
						r = "".concat(e).concat(t)
					} else {
						const e = s.replace(/^r\//, "");
						r = e === w.R ? Object(M.d)() : Object(M.f)(e)
					}
					return r
				},
				stream: (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(H.m)(e, {
						listingName: s
					})
				},
				totalLiveWatchers: H.n
			}), (e, t) => ({
				onHideRpanUnit: () => e(Object(_.D)(t.listingName)),
				openOverlay: t => e(Object(N.a)(t)),
				subscribeConfig: () => e(C.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(C.a.subscribeStats(t)),
				subscribeStreams: () => e(C.a.subscribeStreams(t.listingName))
			})), de = () => r.a.createElement("h3", {
				className: re.a.title
			}, ae._("Top broadcast right now", null, {
				hk: "2hS1kb"
			})), ce = () => r.a.createElement("p", {
				className: re.a.description
			}, ae._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class le extends i.Component {
				constructor(e) {
					super(e), this.observableElement = r.a.createRef(), this.videoRef = r.a.createRef(), this.videoSessionManager = null, this.onResourceRemoved = () => {
						this.subscribeStats()
					}, this.onError = () => {
						this.subscribeStats()
					}, this.onEnded = () => {
						this.subscribeStats()
					}, this.onLoadedData = () => {
						this.setState({
							isReady: !0
						})
					}, this.onHideUnitClicked = (e, t) => {
						e.stopPropagation();
						const {
							onHideRpanUnit: s,
							sendEvent: i
						} = this.props;
						s(), i(Object(D.f)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: s
						} = this.props;
						t(s ? Object(D.g)(s, 1) : Object(D.g)()), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(D.g)()), this.openOverlay()
					}, this.handleIntersectionEvent = e => {
						let {
							isIntersecting: t
						} = e;
						this.setState({
							isIntersecting: t
						})
					}, this.handleVisibilityChange = e => {
						let {
							documentInFocus: t
						} = e;
						this.setState({
							isInFocus: t
						})
					}, this.handleHeartbeat = e => {
						const {
							stream: t
						} = this.props;
						if (!t) return;
						const s = !e.sessionDurationMs ? D.u : D.r,
							i = {
								chatState: j.f.None,
								playerType: D.a.DU
							},
							r = s(t, Object.assign(Object.assign({}, e), i));
						this.props.sendEvent(r)
					}, this.state = {
						isInFocus: !0,
						isIntersecting: !1,
						isReady: !1
					}
				}
				get isLive() {
					const {
						stream: e
					} = this.props;
					if (!e) return !1;
					const {
						state: t
					} = e.stream;
					return t === L.a.IS_LIVE || t === L.a.DISCONNECTED
				}
				get isPaused() {
					return !this.props.autoplay || !this.isVisible
				}
				get isVisible() {
					return this.state.isInFocus && this.state.isIntersecting && !this.props.isOverlayOpen
				}
				get video() {
					return this.videoRef.current
				}
				componentDidMount() {
					this.subscribeIntersectionObserver(), this.subscribeVisibilityChange()
				}
				componentDidUpdate(e, t) {
					const {
						video: s
					} = this, {
						autoplay: i,
						stream: r
					} = this.props, {
						isOverlayOpen: a,
						stream: n
					} = e, {
						isReady: o
					} = this.state, {
						isInFocus: d,
						isIntersecting: c,
						isReady: l
					} = t, {
						isVisible: h
					} = this, u = d && c && !a, m = !u && h, b = u && !h;
					m ? (this.subscribeConfig(), this.subscribeStreams()) : b && (this.unsubscribeConfig(), this.unsubscribeStreams());
					const p = r && r.post.id,
						v = p !== (n && n.post.id),
						f = !!p;
					v && this.setState({
						isReady: !1
					});
					const g = v && !f || f && b;
					if (v && f && h || f && m ? this.subscribeStats() : g && this.unsubscribeStats(), i && s) {
						const e = this.getOrCreateVideoSessionManager(s),
							t = !l && o,
							i = f && (t && h || m && o),
							r = f && b;
						v && e.endSession(), i ? e.startSession() : r && e.pauseSession()
					}
				}
				componentWillUnmount() {
					this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeStats(), this.unsubscribeIntersectionObserver(), this.unsubscribeVisibilityChange(), this.destroyVideoSessionManager()
				}
				render() {
					const {
						layout: e
					} = this.props, t = e === A.g.Classic ? this.renderClassicContent() : e === A.g.Compact ? this.renderCompactContent() : this.renderLargeContent();
					return r.a.createElement("div", {
						className: Object(d.a)(re.a.container, {
							[se.a.largeAndMediumPostStyles]: e === A.g.Large || e === A.g.Medium,
							[se.a.classicPostStyles]: e === A.g.Classic,
							[se.a.compactPostStyles]: e === A.g.Compact,
							[re.a.large]: e === A.g.Large || e === A.g.Medium,
							[re.a.classic]: e === A.g.Classic,
							[re.a.compact]: e === A.g.Compact
						}, this.props.className),
						ref: this.observableElement
					}, e !== A.g.Large && r.a.createElement(Y.b, {
						className: re.a.leftRail,
						withoutComputedStyles: e === A.g.Compact
					}, r.a.createElement(he, {
						isVertical: !0
					}), e === A.g.Compact && r.a.createElement(he, {
						isVertical: !1
					})), r.a.createElement(G.a, {
						className: re.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return r.a.createElement("div", {
						className: re.a.titleAndDescriptionContainer
					}, r.a.createElement(q.a, {
						to: this.props.location
					}, r.a.createElement(de, null), e && r.a.createElement(ce, null)))
				}
				renderLargeContent() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: re.a.header
					}, this.renderTitleAndDescription(), r.a.createElement("div", {
						className: re.a.flatListContainer
					}, r.a.createElement(be, {
						onClick: this.onHideUnitClicked
					}))), r.a.createElement("div", {
						className: re.a.body
					}, r.a.createElement(q.a, {
						to: this.props.location,
						onClick: this.onStreamClicked,
						className: re.a.previewLink,
						tabIndex: 0
					}, r.a.createElement("div", {
						className: re.a.previewContainer
					}, this.renderThumbnail()), this.renderInfo())))
				}
				renderClassicContent() {
					return r.a.createElement("div", {
						className: re.a.body
					}, r.a.createElement(q.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, r.a.createElement("div", {
						className: re.a.thumbnailContainer
					}, this.renderThumbnail())), r.a.createElement("div", {
						className: re.a.main
					}, this.renderTitleAndDescription(!0), r.a.createElement("div", {
						className: re.a.flatListContainer
					}, r.a.createElement(ue, {
						onClick: this.onHeaderClicked
					}), r.a.createElement(F.a, {
						className: re.a.flatlistSeparator
					}), r.a.createElement("div", null, r.a.createElement(me, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return r.a.createElement("div", {
						className: re.a.body
					}, r.a.createElement("div", {
						className: re.a.main
					}, r.a.createElement(ue, {
						onClick: this.onHeaderClicked
					}), this.renderTitleAndDescription(!0), r.a.createElement("div", {
						className: re.a.flatListContainer
					}, r.a.createElement(be, {
						onClick: this.onHideUnitClicked
					}))))
				}
				renderInfo() {
					if (this.props.stream && this.state.isReady) return r.a.createElement("div", {
						className: re.a.infoContainer
					}, this.renderExpandIcon(), this.renderLiveStatus(), this.renderWatcherCount())
				}
				renderExpandIcon() {
					return r.a.createElement("div", {
						className: re.a.bigExpando
					}, r.a.createElement(Z.a, {
						className: re.a.bigExpandoIcon
					}))
				}
				renderLiveStatus() {
					return this.isLive ? r.a.createElement("span", {
						className: re.a.liveStatus
					}, ae._("Live", null, {
						hk: "TwJSs"
					})) : null
				}
				renderWatcherCount() {
					if (!this.isLive) return null;
					const e = Math.max(1, this.props.totalLiveWatchers);
					return r.a.createElement("span", {
						className: re.a.watchingCount
					}, ae._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [ae._plural(e, "number")], {
						hk: "33zJ5F"
					}))
				}
				renderThumbnail() {
					return r.a.createElement("div", {
						className: Object(d.a)(re.a.thumbnail, {
							[re.a.noise]: !this.state.isReady
						})
					}, this.renderVideo())
				}
				renderVideo() {
					const {
						autoplay: e,
						stream: t
					} = this.props;
					if (!t) return;
					const s = 1e3 * t.broadcast_time,
						i = t.post.id,
						a = t.post.title;
					return r.a.createElement(ne, {
						url: t.stream.hls_url,
						autoplay: e,
						controls: !1,
						muted: !0,
						muxVideoDuration: s,
						muxVideoId: i,
						muxVideoIsLive: this.isLive,
						muxVideoTitle: a,
						startTime: t.broadcast_time,
						isPaused: this.isPaused,
						onEnded: this.onEnded,
						onError: this.onError,
						onLoadedData: this.onLoadedData,
						onResourceRemoved: this.onResourceRemoved,
						videoRef: this.videoRef
					})
				}
				openOverlay() {
					const {
						location: e,
						openOverlay: t
					} = this.props;
					t(e)
				}
				subscribeIntersectionObserver() {
					const {
						current: e
					} = this.observableElement;
					e && c.a(e, this.handleIntersectionEvent)
				}
				unsubscribeIntersectionObserver() {
					const {
						current: e
					} = this.observableElement;
					e && c.b(e)
				}
				subscribeVisibilityChange() {
					this.visibilityChangeId = l.a.subscribe(this.handleVisibilityChange)
				}
				unsubscribeVisibilityChange() {
					this.visibilityChangeId && l.a.unsubscribe(this.visibilityChangeId)
				}
				subscribeConfig() {
					const {
						subscribeConfig: e
					} = this.props;
					this.unsubscribeConfig(), e().then(e => this._unsubscribeConfig = e)
				}
				unsubscribeConfig() {
					this._unsubscribeConfig && (this._unsubscribeConfig(), delete this._unsubscribeConfig)
				}
				subscribeStreams() {
					const {
						subscribeStreams: e
					} = this.props;
					this.unsubscribeStreams(), e().then(e => this._unsubscribeStreams = e)
				}
				unsubscribeStreams() {
					this._unsubscribeStreams && (this._unsubscribeStreams(), delete this._unsubscribeStreams)
				}
				subscribeStats() {
					const {
						stream: e,
						subscribeStats: t
					} = this.props, s = e && e.post.id;
					this.unsubscribeStats(), s && t(s).then(e => this._unsubscribeStats = e)
				}
				unsubscribeStats() {
					this._unsubscribeStats && (this._unsubscribeStats(), delete this._unsubscribeStats)
				}
				getOrCreateVideoSessionManager(e) {
					return this.videoSessionManager || (this.videoSessionManager = new I(e, {
						onHeartbeat: this.handleHeartbeat
					})), this.videoSessionManager
				}
				destroyVideoSessionManager() {
					var e;
					null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
			}
			const he = e => r.a.createElement(U.a, {
					className: Object(d.a)({
						[re.a.verticalVotes]: e.isVertical,
						[re.a.horizontalVotes]: !e.isVertical
					})
				}, r.a.createElement(X.a, {
					className: re.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: P.a.notVoted
				})),
				ue = e => {
					let {
						onClick: t
					} = e;
					return r.a.createElement("button", {
						className: re.a.expandoButton,
						onClick: t
					}, r.a.createElement(Z.a, {
						className: re.a.expandoIcon
					}))
				},
				me = e => {
					let {
						onClick: t,
						isLoggedIn: s
					} = e;
					return r.a.createElement(B.a, {
						displayText: ae._("Show me less of this", null, {
							hk: "4t8AKC"
						}),
						flatlistItem: W.a.Hide,
						isLoggedIn: !!s,
						isUserOp: !1,
						onClick: t,
						noBreakpoints: !0
					}, r.a.createElement(J.b, null))
				},
				be = e => {
					let {
						onClick: t
					} = e;
					return r.a.createElement(K.b, {
						className: re.a.overflowMenu,
						dropdownClassName: re.a.overflowDropdown,
						dropdownId: "rpan-du-overflow"
					}, r.a.createElement($.b, {
						className: re.a.overflowItem,
						displayText: ae._("Show me less of this", null, {
							hk: "2c4uFK"
						}),
						iconWrapperClassName: re.a.overflowItemIconWrapper,
						textClassName: re.a.overflowItemText,
						onClick: t
					}, r.a.createElement(ee.a, {
						className: re.a.hideIcon
					})))
				};
			t.default = oe(Object(Q.c)(le))
		},
		"./src/reddit/controls/MetaSeparator/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledMetaSeparator: "_3LS4zudUBagjFS7HjWJYxo",
				metaSeparator: "_37gsGHa8DMRAxBmQS-Ppg8"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				o = s.n(n);
			const d = e => r.a.createElement("span", {
				className: Object(a.a)(o.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = e => {
				let {
					className: t,
					isSmall: s
				} = e;
				return r.a.createElement(d, {
					className: Object(a.a)(o.a.metaSeparator, t),
					isSmall: s
				})
			}
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
		},
		"./src/reddit/icons/fonts/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(o);
			t.a = e => r.a.createElement("i", {
				className: Object(a.a)(Object(n.b)("admin"), d.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				n = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				o = s.n(n);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", o.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, s) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				n = s("./src/reddit/icons/fonts/Gift/index.m.less"),
				o = s.n(n);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("gift"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc)), "GiftIcon", o.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RpanListingUnit.49a4566273ca4e6a7d36.js.map