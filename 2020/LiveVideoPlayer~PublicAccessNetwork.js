// https://www.redditstatic.com/desktop2x/LiveVideoPlayer~PublicAccessNetwork.df083c58d2169d81188d.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer~PublicAccessNetwork"], {
		"./src/lib/focusVisible/index.js": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				var t = !0,
					s = !1,
					i = null,
					r = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function a(e) {
					return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
				}

				function o(e) {
					e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
				}

				function n(e) {
					t = !1
				}

				function d() {
					document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c)
				}

				function c(e) {
					e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c))
				}
				document.addEventListener("keydown", (function(s) {
					s.metaKey || s.altKey || s.ctrlKey || (a(e.activeElement) && o(e.activeElement), t = !0)
				}), !0), document.addEventListener("mousedown", n, !0), document.addEventListener("pointerdown", n, !0), document.addEventListener("touchstart", n, !0), document.addEventListener("visibilitychange", (function(e) {
					"hidden" === document.visibilityState && (s && (t = !0), d())
				}), !0), d(), e.addEventListener("focus", (function(e) {
					var s, i, n;
					a(e.target) && (t || (s = e.target, i = s.type, "INPUT" === (n = s.tagName) && r[i] && !s.readOnly || "TEXTAREA" === n && !s.readOnly || s.isContentEditable)) && o(e.target)
				}), !0), e.addEventListener("blur", (function(e) {
					var t;
					a(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (s = !0, window.clearTimeout(i), i = window.setTimeout((function() {
						s = !1
					}), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
				}), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && document.documentElement.classList.add("js-focus-visible")
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t) {
				for (var s = arguments.length, i = new Array(s > 2 ? s - 2 : 0), r = 2; r < s; r++) i[r - 2] = arguments[r];
				let a, o = !1;
				const n = async () => {
					i && i.length ? await e.call(window, ...i) : await e.call(window), o || (a = window.setTimeout(n, t))
				};
				return a = window.setTimeout(n, t), () => {
					o = !0, window.clearTimeout(a)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/setInterval/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				n = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
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
					const i = Object(n.l)(s());
					i.lastUpdated && (this.currentStreamsRateSec = i.viewer_streams_refresh, this.currentConfigRateSec = i.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(e, t, s) {
					window.clearTimeout(this.configTimeout), await t(Object(r.c)(e));
					const i = Object(n.l)(s()),
						a = i.rpan_config_refresh_rate;
					this.currentConfigRateSec !== a && (this.currentConfigRateSec = a);
					const o = i.viewer_streams_refresh;
					this.currentStreamsRateSec !== o && (this.currentStreamsRateSec = o, this.startStreamsWork(e, t, s));
					const d = i.viewer_heartbeat_interval;
					d && this.heartbeatRateSec !== d && this.startHeartbeatWork(t, s);
					const c = i.viewer_heartbeat_interval;
					c && this.statsRefreshRateSec !== c && this.startStatsWork(t, s), this.configTimeout = window.setTimeout(() => this.startConfigWork(e, t, s), this.getConfigTimeout())
				}
				async startStreamsWork(e, t, s) {
					window.clearTimeout(this.streamsTimeout), await t(Object(o.e)(e)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(e, t, s), this.getStreamsTimeout(s()))
				}
				async startRecommendedViewerSubredditsWork(e, t) {
					await this.initializeConfig(a.P, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(r.b)());
					const s = Object(n.l)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(i.a)(() => e(Object(r.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(a.P, e, t), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(n.l)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(i.a)(() => {
						this.currentStatsId && e(Object(o.d)(this.currentStatsId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(a.P, e, t), !this.currentHeartbeatId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(n.l)(t());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const o = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const d = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						c = () => {
							this.currentHeartbeatId && e(Object(r.d)(this.currentHeartbeatId))
						};
					this.clearSendHeartbeatInterval = Object(i.a)(() => {
						c(), this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.clearSendHeartbeatInterval = Object(i.a)(c, d)
					}, o)
				}
				getStreamsTimeout(e) {
					return Math.max(1e3 * (this.currentStreamsRateSec + this.getRandomFetchStreamsJitterSec(e)), this.MIN_RATE_MS)
				}
				getConfigTimeout() {
					return Math.max(1e3 * this.currentConfigRateSec, this.MIN_RATE_MS)
				}
				getRandomFetchStreamsJitterSec(e) {
					const t = Object(n.l)(e).viewer_streams_refresh_slop,
						s = Math.cos(Math.PI * Math.round(Math.random()));
					return Math.random() * t * s
				}
			};
			t.a = d
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/hls.js/dist/hls.js"),
				o = s.n(a),
				n = s("./src/lib/combineRefs/index.tsx"),
				d = s("./src/lib/env/index.ts");
			const c = 3,
				h = 5e3,
				u = 1e3;
			class m extends i.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoRef = r.a.createRef(), this.onPlayError = e => t => {
						if ("AbortError" === t.name) return;
						const {
							onAutoPlayPrevented: s,
							playMutedOnPrevented: i
						} = this.props;
						if ("NotAllowedError" === t.name) return s && s(), void(i && this.setState(Object.assign({}, this.state, {
							isMuteForced: !0
						})));
						Object(d.a)() && console.error(t), e && this.onIrrecoverableError(e)
					}, this.state = {
						isInitialized: !1,
						isMuteForced: !1
					}, this.hls = void 0, this.onVideoPause = this.onVideoPause.bind(this), this.onVideoPlay = this.onVideoPlay.bind(this), this.onTimeUpdated = this.onTimeUpdated.bind(this), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
						onEnded: s,
						onLoadedData: i
					} = this.props;
					return r.a.createElement("video", {
						controls: e,
						tabIndex: e ? 0 : -1,
						muted: t || this.state.isMuteForced,
						onEnded: s,
						onLoadedData: i,
						onPlay: this.onVideoPlay,
						onPause: this.onVideoPause,
						onTimeUpdate: this.onTimeUpdated,
						ref: this.combinedVideoRefs
					})
				}
				combineExternalVideoRef(e) {
					return e ? Object(n.a)(this.videoRef, e) : this.videoRef
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
						url: n
					} = this.props;
					if (!n || !this.video) return;
					this.destroyHls();
					const d = new o.a({
						enableWorker: !1,
						fragLoadingMaxRetry: 2,
						levelLoadingMaxRetry: 4,
						manifestLoadingMaxRetry: 1,
						startFragPrefetch: !0,
						liveSyncDurationCount: 2,
						maxMaxBufferLength: 10
					});
					this.hls = d, i && i(d), this.subscribeErrorHandlers(d), d.on(o.a.Events.MANIFEST_LOADING, () => {
						a && a()
					}), d.on(o.a.Events.MANIFEST_PARSED, (i, r) => {
						e && !s && this.video && (this.video.currentTime = t, this.video.play().catch(this.onPlayError(d))), this.setState(Object.assign({}, this.state, {
							isInitialized: !0
						}))
					}), d.on(o.a.Events.LEVEL_LOADED, (e, t) => {
						r && r(t.details)
					}), d.loadSource(n), d.attachMedia(this.video)
				}
				subscribeErrorHandlers(e) {
					e.on(o.a.Events.ERROR, (t, s) => {
						if (s.type === o.a.ErrorTypes.NETWORK_ERROR && s.response && 410 === s.response.code) this.onResourceRemoved(e);
						else if (s.fatal) switch (s.type) {
							case o.a.ErrorTypes.MEDIA_ERROR:
								return void this.handleFatalMediaError(e);
							case o.a.ErrorTypes.NETWORK_ERROR:
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
					return Date.now() - this.mediaRecoveryLastAttemptUtc > u && (this.mediaRecoveryAttemptsCount = 0), 0 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), void e.recoverMediaError()) : 1 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), e.swapAudioCodec(), void e.recoverMediaError()) : void this.onIrrecoverableError(e)
				}
				handleFatalNetworkError(e, t) {
					t.details !== o.a.ErrorDetails.FRAG_LOAD_ERROR && t.details !== o.a.ErrorDetails.FRAG_LOAD_TIMEOUT ? this.onIrrecoverableError(e) : this.handleBadFragment(e, t.frag)
				}
				handleBadFragment(e, t) {
					this.resetBadFragmentsCountIfCooldownPassed(), this.fragmentRecoveryAttemptsCount > c || !t ? this.onIrrecoverableError(e) : (this.fragmentRecoveryAttemptsCount++, this.fragmentRecoveryLastAttemptUtc = Date.now(), e.startLoad())
				}
				resetBadFragmentsCountIfCooldownPassed() {
					this.fragmentRecoveryLastAttemptUtc + h < Date.now() && (this.fragmentRecoveryAttemptsCount = 0)
				}
				onTimeUpdated() {
					this.video && this.props.onTimeUpdate && this.props.onTimeUpdate(this.video.currentTime)
				}
				onVideoPause() {
					const {
						onPause: e
					} = this.props;
					e && e()
				}
				onVideoPlay() {
					const {
						onPlay: e
					} = this.props;
					e && e(), this.state.isMuteForced && this.setState(Object.assign({}, this.state, {
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
		}
	}
]);
//# sourceMappingURL=LiveVideoPlayer~PublicAccessNetwork.df083c58d2169d81188d.js.map