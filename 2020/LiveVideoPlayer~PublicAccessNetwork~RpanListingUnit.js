// https://www.redditstatic.com/desktop2x/LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit.fca23df11900777422d8.js
// Retrieved at 10/28/2020, 4:10:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"], {
		"./src/lib/VideoSession/VideoSessionManager.ts": function(t, e, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const i = new WeakMap,
				r = new WeakMap,
				a = new WeakMap;
			class o {
				get laps() {
					return i.get(this).slice(1)
				}
				get paused() {
					return !r.has(this)
				}
				get time() {
					const t = Date.now(),
						e = a.get(this);
					return this.paused ? e : e + (t - r.get(this))
				}
				constructor() {
					this.reset()
				}
				start() {
					this.paused && r.set(this, Date.now())
				}
				pause() {
					this.paused || (a.set(this, this.time), r.delete(this))
				}
				reset() {
					i.set(this, [
						[0, 0]
					]), a.set(this, 0), r.delete(this)
				}
				lap() {
					const {
						time: t
					} = this, e = i.get(this), s = [t - e[e.length - 1][1], t];
					return i.set(this, [...e, s]), s
				}
			}
			var n = s("./src/lib/VideoSession/util.ts"),
				h = s("./node_modules/uuid/v4.js"),
				d = s.n(h);
			const c = 1e4;

			function u(t, e) {
				return {
					startedAt: t,
					expectedAt: t + e,
					completedAt: Date.now()
				}
			}

			function l(t) {
				let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				const s = m(t, arguments.length > 2 ? arguments[2] : void 0);
				for (var i = arguments.length, r = new Array(i > 3 ? i - 3 : 0), a = 3; a < i; a++) r[a - 3] = arguments[a];
				return function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					const s = Date.now();
					for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) r[a - 2] = arguments[a];
					return setTimeout((function() {
						const i = u(s, e);
						for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
						return t(i, ...a)
					}), e, ...r)
				}(s, e, ...r)
			}

			function m(t) {
				let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
				return function(s) {
					const i = function(t, e) {
						const {
							completedAt: s,
							expectedAt: i
						} = t, r = s > i + e;
						return Object.assign(Object.assign({}, t), {
							expired: r
						})
					}(s, e);
					for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) a[o - 1] = arguments[o];
					return t(i, ...a)
				}
			}
			var b = class {
				constructor(t) {
					this.handleTimeout = t => {
						let {
							expired: e
						} = t;
						e ? this.emitError({
							id: this.id,
							message: "Expired timer."
						}) : (this.watchTimer.lap(), this.emitHeartbeat(), this.next())
					};
					const {
						meta: e,
						onError: s,
						onHeartbeat: i
					} = t;
					this.delayIterator = null, this.id = d()(), this.meta = e, this.onError = s, this.onHeartbeat = i, this.sessionTimer = new o, this.startedAt = 0, this.watchTimer = new o
				}
				get isPaused() {
					return !!this.timeout
				}
				get stats() {
					return {
						id: this.id,
						sessionDurationMs: this.sessionTimer.time,
						startTimeMs: this.startedAt,
						watchDurationMs: this.watchTimer.time
					}
				}
				initDelayIterator() {
					const t = [Object(n.a)(5), Object(n.a)(15), Object(n.a)(30), Object(n.a)(45), Object(n.a)(60)],
						e = Object(n.a)(60);
					this.delayIterator = function*(t, e) {
						const s = function(t) {
							let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
							return t.map(t => {
								const s = t - e;
								return e = t, s
							})
						}(t);
						for (const i of s) yield i;
						for (;
							"number" == typeof e;) yield e
					}(t, e)
				}
				startHeartbeats(t) {
					this.startedAt || (this.startedAt = Date.now(), this.emitHeartbeat(), this.sessionTimer.start()), this.initDelayIterator(), this.next(), t || this.startWatchTimer()
				}
				next() {
					if (this.clearTimeout(), !this.delayIterator) throw new Error("Invalid delay iterator.");
					const {
						value: t,
						done: e
					} = this.delayIterator.next();
					e || "number" != typeof t || (this.timeout = l(this.handleTimeout, t))
				}
				pauseHeartbeats() {
					this.pauseWatchTimer(), this.watchTimer.lap(), this.emitHeartbeat(), this.clearTimeout()
				}
				emitError(t) {
					this.onError(t)
				}
				emitHeartbeat() {
					const {
						laps: t
					} = this.watchTimer, e = t[t.length - 1], s = e ? e[0] : 0, i = Object.assign(Object.assign({}, this.stats), {
						heartbeatDurationMs: s
					});
					this.onHeartbeat({
						meta: this.meta,
						stats: i
					})
				}
				startWatchTimer() {
					this.watchTimer.start()
				}
				pauseWatchTimer() {
					this.watchTimer.pause()
				}
				destroy() {
					this.clearTimeout(), delete this.meta, delete this.onError, delete this.onHeartbeat
				}
				clearTimeout() {
					this.timeout && (clearTimeout(this.timeout), delete this.timeout)
				}
			};
			const v = new WeakMap;
			class p {
				constructor(t, e) {
					if (this.handlePause = () => {
							const t = v.get(this);
							t && !t.isPaused && t.pauseWatchTimer()
						}, this.handlePlay = () => {
							const t = v.get(this);
							t && !t.isPaused && t.startWatchTimer()
						}, this.handleError = t => {
							const e = v.get(this);
							if (!e || e.id !== t.id) return;
							const {
								meta: s
							} = e;
							this.destroySession(), this.startSession(s)
						}, this.handleHeartbeat = t => {
							let {
								meta: e,
								stats: s
							} = t;
							if (!this.video) return;
							const i = v.get(this);
							if (!i || i.id !== s.id) return;
							const r = Object.assign(Object.assign({}, s), this.videoStats);
							this.onHeartbeat({
								meta: e,
								stats: r
							})
						}, "function" != typeof e.onHeartbeat) throw new Error("Invalid video session onHeartbeat callback.");
					this.idleTimer = new o, this.onHeartbeat = e.onHeartbeat, this.attachVideo(t)
				}
				get idle() {
					return this.idleTimer.time >= p.IDLE_THRESHOLD
				}
				get sessionStats() {
					const t = v.get(this);
					return t && t.stats
				}
				get videoStats() {
					if (!this.video) return;
					const {
						currentTime: t,
						duration: e,
						muted: s,
						volume: i
					} = this.video;
					return isNaN(e) ? void 0 : {
						playheadOffsetMs: Object(n.a)(e - t),
						timestampMs: Object(n.a)(t),
						volume: s ? 0 : Math.round(100 * i)
					}
				}
				get stats() {
					return Object.assign(Object.assign({}, this.sessionStats), this.videoStats)
				}
				attachVideo(t) {
					if (!t) throw new Error("Invalid video element.");
					t !== this.video && (this.detachVideo(), t.addEventListener("play", this.handlePlay), t.addEventListener("pause", this.handlePause), this.video = t)
				}
				detachVideo() {
					const {
						video: t
					} = this;
					t && (t.removeEventListener("play", this.handlePlay), t.removeEventListener("pause", this.handlePause), delete this.video)
				}
				createSession(t) {
					const e = {
						meta: t,
						onError: this.handleError,
						onHeartbeat: this.handleHeartbeat
					};
					return new b(e)
				}
				startSession(t) {
					if (!this.video) return;
					let e = v.get(this);
					e && !this.idle || (this.destroySession(), e = this.createSession(t), v.set(this, e)), this.idleTimer.reset(), e.startHeartbeats(this.video.paused)
				}
				pauseSession() {
					if (!this.video) return;
					const t = v.get(this);
					t && (t.pauseHeartbeats(), this.idleTimer.start())
				}
				endSession() {
					this.pauseSession(), this.destroySession()
				}
				destroySession() {
					const t = v.get(this);
					t && (t.destroy(), v.delete(this))
				}
				destroy() {
					this.endSession(), this.detachVideo(), delete this.onHeartbeat
				}
			}
			p.IDLE_THRESHOLD = Object(n.a)(300);
			e.a = p
		},
		"./src/lib/VideoSession/util.ts": function(t, e, s) {
			"use strict";

			function i(t) {
				return Math.round(1e3 * t)
			}
			s.d(e, "a", (function() {
				return i
			}))
		},
		"./src/lib/setInterval/index.ts": function(t, e, s) {
			"use strict";
			e.a = function(t, e) {
				for (var s = arguments.length, i = new Array(s > 2 ? s - 2 : 0), r = 2; r < s; r++) i[r - 2] = arguments[r];
				let a, o = !1;
				const n = async () => {
					i && i.length ? await t.call(window, ...i) : await t.call(window), o || (a = window.setTimeout(n, e))
				};
				return a = window.setTimeout(n, e), () => {
					o = !0, window.clearTimeout(a)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(t, e, s) {
			"use strict";
			var i = s("./src/lib/setInterval/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				n = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const h = new class {
				constructor() {
					var t = this;
					this.isInitialized = !1, this.streamOptions = {}, this.currentStreamsRateSec = a.c, this.currentConfigRateSec = a.d, this.heartbeatDelaySec = a.f, this.heartbeatRateSec = a.g, this.statsRefreshRateSec = a.j, this.recommendedViewerSubredditsRefreshRateSec = a.h, this.MIN_RATE_MS = 1e3, this.subscribeConfig = t => async (e, s) => (this.initializeConfig(t, e, s).then(() => this.startConfigWork(t, e, s)), () => this.unsubscribeConfig()), this.subscribeStreams = function(e) {
						let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return async (i, r) => (t.streamOptions = s, t.initializeConfig(e, i, r).then(() => t.startStreamsWork(e, t.streamOptions, i, r)), () => t.unsubscribeStreams())
					}, this.subscribeRecommendedViewerSubreddits = () => async (t, e) => (this.startRecommendedViewerSubredditsWork(t, e), () => this.unsubscribeRecommendedViewerSubreddits()), this.subscribeStats = t => async (e, s) => (this.currentStatsId = t, this.startStatsWork(e, s), () => this.unsubscribeStats()), this.subscribeHeartbeat = t => async (e, s) => (this.currentHeartbeatId = t, this.startHeartbeatWork(e, s), () => this.unsubscribeHeartbeat())
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
				async initializeConfig(t, e, s) {
					if (this.isInitialized) return;
					await e(Object(r.c)(t));
					const i = Object(n.l)(s());
					i.lastUpdated && (this.currentStreamsRateSec = i.viewer_streams_refresh, this.currentConfigRateSec = i.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(t, e, s) {
					window.clearTimeout(this.configTimeout), await e(Object(r.c)(t));
					const i = Object(n.l)(s()),
						a = i.rpan_config_refresh_rate;
					this.currentConfigRateSec !== a && (this.currentConfigRateSec = a);
					const o = i.viewer_streams_refresh;
					this.currentStreamsRateSec !== o && (this.currentStreamsRateSec = o, this.startStreamsWork(t, this.streamOptions, e, s));
					const h = i.viewer_heartbeat_interval;
					h && this.heartbeatRateSec !== h && this.startHeartbeatWork(e, s);
					const d = i.viewer_heartbeat_interval;
					d && this.statsRefreshRateSec !== d && this.startStatsWork(e, s), this.configTimeout = window.setTimeout(() => this.startConfigWork(t, e, s), this.getConfigTimeout())
				}
				async startStreamsWork(t, e, s, i) {
					window.clearTimeout(this.streamsTimeout), await s(Object(o.e)(t, e)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(t, e, s, i), this.getStreamsTimeout(i()))
				}
				async startRecommendedViewerSubredditsWork(t, e) {
					await this.initializeConfig(a.R, t, e), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), t(Object(r.b)());
					const s = Object(n.l)(e()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(i.a)(() => t(Object(r.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(t, e) {
					await this.initializeConfig(a.R, t, e), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(n.l)(e()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(i.a)(() => {
						this.currentStatsId && t(Object(o.d)(this.currentStatsId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(t, e) {
					if (await this.initializeConfig(a.R, t, e), !this.currentHeartbeatId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(n.l)(e());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const o = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const h = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						d = () => {
							this.currentHeartbeatId && t(Object(r.d)(this.currentHeartbeatId))
						};
					this.clearSendHeartbeatInterval = Object(i.a)(() => {
						d(), this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.clearSendHeartbeatInterval = Object(i.a)(d, h)
					}, o)
				}
				getStreamsTimeout(t) {
					return Math.max(1e3 * (this.currentStreamsRateSec + this.getRandomFetchStreamsJitterSec(t)), this.MIN_RATE_MS)
				}
				getConfigTimeout() {
					return Math.max(1e3 * this.currentConfigRateSec, this.MIN_RATE_MS)
				}
				getRandomFetchStreamsJitterSec(t) {
					const e = Object(n.l)(t).viewer_streams_refresh_slop,
						s = Math.cos(Math.PI * Math.round(Math.random()));
					return Math.random() * e * s
				}
			};
			e.a = h
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return l
			}));
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/hls.js/dist/hls.js"),
				o = s.n(a),
				n = s("./src/lib/combineRefs/index.tsx"),
				h = s("./src/lib/env/index.ts");
			const d = 3,
				c = 5e3,
				u = 1e3;
			class l extends i.Component {
				constructor(t) {
					super(t), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoRef = r.a.createRef(), this.onPlayError = t => e => {
						if ("AbortError" === e.name) return;
						const {
							onAutoPlayPrevented: s,
							playMutedOnPrevented: i
						} = this.props;
						if ("NotAllowedError" === e.name) return s && s(), void(i && this.setState(Object.assign(Object.assign({}, this.state), {
							isMuteForced: !0
						})));
						Object(h.a)() && console.error(e), t && this.onIrrecoverableError(t)
					}, this.state = {
						isInitialized: !1,
						isMuteForced: !1
					}, this.hls = void 0, this.onVideoLoadedData = this.onVideoLoadedData.bind(this), this.onVideoPause = this.onVideoPause.bind(this), this.onVideoPlay = this.onVideoPlay.bind(this), this.onTimeUpdated = this.onTimeUpdated.bind(this), this.combinedVideoRefs = this.combineExternalVideoRef(t.videoRef)
				}
				get video() {
					return this.videoRef.current
				}
				componentDidUpdate(t, e) {
					if (this.props.videoRef !== t.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef)), t.url !== this.props.url) return void this.initialize();
					const {
						isPaused: s
					} = this.props;
					this.video && this.state.isInitialized && s !== this.video.paused && (s ? this.video.pause() : this.video.play().catch(this.onPlayError(this.hls))), !e.isMuteForced && this.state.isMuteForced && this.state.isInitialized && this.video && this.video.play().catch(this.onPlayError(this.hls))
				}
				componentDidMount() {
					this.initialize()
				}
				componentWillUnmount() {
					this.video && !this.video.paused && this.onVideoPause(), this.destroyHls()
				}
				render() {
					const {
						controls: t,
						muted: e,
						onEnded: s
					} = this.props;
					return r.a.createElement("video", {
						controls: t,
						tabIndex: t ? 0 : -1,
						muted: e || this.state.isMuteForced,
						onEnded: s,
						onLoadedData: this.onVideoLoadedData,
						onPlay: this.onVideoPlay,
						onPause: this.onVideoPause,
						onTimeUpdate: this.onTimeUpdated,
						ref: this.combinedVideoRefs
					})
				}
				combineExternalVideoRef(t) {
					return t ? Object(n.a)(this.videoRef, t) : this.videoRef
				}
				destroyHls() {
					this.hls && (this.hls.destroy(), this.props.onHlsDestroy && this.props.onHlsDestroy(this.hls))
				}
				initialize() {
					const {
						autoplay: t,
						startTime: e,
						isPaused: s,
						onHlsCreate: i,
						onLevelLoaded: r,
						onLoadingData: a,
						url: n
					} = this.props;
					if (!n || !this.video) return;
					this.destroyHls();
					const h = new o.a({
						enableWorker: !1,
						fragLoadingMaxRetry: 2,
						levelLoadingMaxRetry: 4,
						manifestLoadingMaxRetry: 1,
						startFragPrefetch: !0,
						liveSyncDurationCount: 2,
						maxMaxBufferLength: 10
					});
					this.hls = h, i && i(h), this.subscribeErrorHandlers(h), h.on(o.a.Events.MANIFEST_LOADING, () => {
						a && a()
					}), h.on(o.a.Events.MANIFEST_PARSED, (i, r) => {
						t && !s && this.video && (this.video.currentTime = e, this.video.play().catch(this.onPlayError(h))), this.setState(Object.assign(Object.assign({}, this.state), {
							isInitialized: !0
						}))
					}), h.on(o.a.Events.LEVEL_LOADED, (t, e) => {
						r && r(e.details)
					}), h.loadSource(n), h.attachMedia(this.video)
				}
				subscribeErrorHandlers(t) {
					t.on(o.a.Events.ERROR, (e, s) => {
						if (s.type === o.a.ErrorTypes.NETWORK_ERROR && s.response && 410 === s.response.code) this.onResourceRemoved(t);
						else if (s.fatal) switch (s.type) {
							case o.a.ErrorTypes.MEDIA_ERROR:
								return void this.handleFatalMediaError(t);
							case o.a.ErrorTypes.NETWORK_ERROR:
								return void this.handleFatalNetworkError(t, s);
							default:
								return void this.onIrrecoverableError(t)
						}
					})
				}
				onResourceRemoved(t) {
					t.stopLoad(), this.props.onResourceRemoved && this.props.onResourceRemoved()
				}
				onIrrecoverableError(t) {
					t === this.hls ? this.destroyHls() : t.destroy(), this.props.onError && this.props.onError()
				}
				handleFatalMediaError(t) {
					return Date.now() - this.mediaRecoveryLastAttemptUtc > u && (this.mediaRecoveryAttemptsCount = 0), 0 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), void t.recoverMediaError()) : 1 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), t.swapAudioCodec(), void t.recoverMediaError()) : void this.onIrrecoverableError(t)
				}
				handleFatalNetworkError(t, e) {
					e.details !== o.a.ErrorDetails.FRAG_LOAD_ERROR && e.details !== o.a.ErrorDetails.FRAG_LOAD_TIMEOUT ? this.onIrrecoverableError(t) : this.handleBadFragment(t, e.frag)
				}
				handleBadFragment(t, e) {
					this.resetBadFragmentsCountIfCooldownPassed(), this.fragmentRecoveryAttemptsCount > d || !e ? this.onIrrecoverableError(t) : (this.fragmentRecoveryAttemptsCount++, this.fragmentRecoveryLastAttemptUtc = Date.now(), t.startLoad())
				}
				resetBadFragmentsCountIfCooldownPassed() {
					this.fragmentRecoveryLastAttemptUtc + c < Date.now() && (this.fragmentRecoveryAttemptsCount = 0)
				}
				onTimeUpdated() {
					this.video && this.props.onTimeUpdate && this.props.onTimeUpdate(this.video.currentTime)
				}
				onVideoLoadedData() {
					const {
						onLoadedData: t
					} = this.props, e = !this.video || this.video.paused;
					this.hls && e && this.hls.stopLoad(), t && t()
				}
				onVideoPause() {
					const {
						onPause: t
					} = this.props;
					this.hls && this.hls.stopLoad(), t && t()
				}
				onVideoPlay() {
					const {
						onPlay: t
					} = this.props;
					this.hls && this.hls.startLoad(), t && t(), this.state.isMuteForced && this.setState(Object.assign(Object.assign({}, this.state), {
						isMuteForced: !1
					}))
				}
				setCurrentTime(t) {
					this.video && (this.video.currentTime = t)
				}
				setVolume(t) {
					this.video && this.video.volume !== t && (this.video.volume = t)
				}
			}
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return a
			})), s.d(e, "b", (function() {
				return o
			}));
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);
			const a = Object(i.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {}
				}),
				o = t => {
					let {
						children: e
					} = t;
					const [s, o] = Object(i.useState)(0), [n, h] = Object(i.useState)(!1), d = {
						currentTime: s,
						setCurrentTime: o,
						isLive: n,
						setIsLive: h
					};
					return r.a.createElement(a.Provider, {
						value: d
					}, e)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit.fca23df11900777422d8.js.map