// https://www.redditstatic.com/desktop2x/LiveVideoPlayer.4f5d4565769af9a7091e.js
// Retrieved at 3/3/2020, 6:36:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer"], {
		"./src/lib/setInterval/index.ts": function(e, t, r) {
			"use strict";
			t.a = function(e, t) {
				for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) s[i - 2] = arguments[i];
				let a, n = !1;
				const o = async () => {
					s && s.length ? await e.call(window, ...s) : await e.call(window), n || (a = window.setTimeout(o, t))
				};
				return a = window.setTimeout(o, t), () => {
					n = !0, window.clearTimeout(a)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/setInterval/index.ts"),
				i = r("./src/reddit/actions/publicAccessNetwork/api.ts"),
				a = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = r("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				o = r("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = new class {
				constructor() {
					this.isInitialized = !1, this.currentStreamsRateSec = a.c, this.currentConfigRateSec = a.d, this.heartbeatRateSec = a.f, this.statsRefreshRateSec = a.i, this.recommendedViewerSubredditsRefreshRateSec = a.g, this.MIN_RATE_MS = 1e3, this.subscribeConfig = e => async (t, r) => (this.initializeConfig(e, t, r).then(() => this.startConfigWork(e, t, r)), () => this.unsubscribeConfig()), this.subscribeStreams = e => async (t, r) => (this.initializeConfig(e, t, r).then(() => this.startStreamsWork(e, t, r)), () => this.unsubscribeStreams()), this.subscribeRecommendedViewerSubreddits = () => async (e, t) => (this.startRecommendedViewerSubredditsWork(e, t), () => this.unsubscribeRecommendedViewerSubreddits()), this.subscribeStats = e => async (t, r) => (this.currentStreamPostId = e, this.startStatsWork(t, r), () => this.unsubscribeStats()), this.subscribeHeartbeat = e => async (t, r) => (this.currentStreamId = e, this.startHeartbeatWork(t, r), () => this.unsubscribeHeartbeat())
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
					this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.currentStreamPostId = void 0
				}
				unsubscribeHeartbeat() {
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.currentStreamId = void 0
				}
				async initializeConfig(e, t, r) {
					if (this.isInitialized) return;
					await t(Object(i.c)(e));
					const s = Object(o.m)(r());
					s.lastUpdated && (this.currentStreamsRateSec = s.viewer_streams_refresh, this.currentConfigRateSec = s.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(e, t, r) {
					window.clearTimeout(this.configTimeout), await t(Object(i.c)(e));
					const s = Object(o.m)(r()),
						a = s.rpan_config_refresh_rate;
					this.currentConfigRateSec !== a && (this.currentConfigRateSec = a);
					const n = s.viewer_streams_refresh;
					this.currentStreamsRateSec !== n && (this.currentStreamsRateSec = n, this.startStreamsWork(e, t, r));
					const c = s.viewer_heartbeat_interval;
					c && this.heartbeatRateSec !== c && this.startHeartbeatWork(t, r);
					const d = s.viewer_heartbeat_interval;
					d && this.statsRefreshRateSec !== d && this.startStatsWork(t, r), this.configTimeout = window.setTimeout(() => this.startConfigWork(e, t, r), this.getConfigTimeout())
				}
				async startStreamsWork(e, t, r) {
					window.clearTimeout(this.streamsTimeout), await t(Object(n.j)(e)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(e, t, r), this.getStreamsTimeout(r()))
				}
				async startRecommendedViewerSubredditsWork(e, t) {
					await this.initializeConfig(a.O, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(i.b)());
					const r = Object(o.m)(t()).recommended_viewer_subreddits_refresh_rate;
					r && (this.recommendedViewerSubredditsRefreshRateSec = r), this.clearFetchRecommendedViewerSubredditsInterval = Object(s.a)(() => e(Object(i.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(a.O, e, t), this.currentStreamPostId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(o.m)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(s.a)(() => {
						this.currentStreamPostId && e(Object(n.i)(this.currentStreamPostId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					await this.initializeConfig(a.O, e, t), this.currentStreamId && (this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.heartbeatRateSec = Object(o.m)(t()).viewer_heartbeat_interval || this.heartbeatRateSec, this.clearSendHeartbeatInterval = Object(s.a)(() => {
						this.currentStreamId && e(Object(i.d)(this.currentStreamId))
					}, Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS)))
				}
				getStreamsTimeout(e) {
					return Math.max(1e3 * (this.currentStreamsRateSec + this.getRandomFetchStreamsJitterSec(e)), this.MIN_RATE_MS)
				}
				getConfigTimeout() {
					return Math.max(1e3 * this.currentConfigRateSec, this.MIN_RATE_MS)
				}
				getRandomFetchStreamsJitterSec(e) {
					const t = Object(o.m)(e).viewer_streams_refresh_slop,
						r = Math.cos(Math.PI * Math.round(Math.random()));
					return Math.random() * t * r
				}
			};
			t.a = c
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/hls.js/dist/hls.js"),
				n = r.n(a),
				o = r("./src/lib/env/index.ts");
			const c = 3,
				d = 5e3,
				u = 1e3;
			class h extends s.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoElement = i.a.createRef(), this.onPlayError = e => t => {
						if ("AbortError" === t.name) return;
						const {
							onAutoPlayPrevented: r,
							playMutedOnPrevented: s
						} = this.props;
						if ("NotAllowedError" === t.name) return r && r(), void(s && this.setState(Object.assign({}, this.state, {
							isMuteForced: !0
						})));
						Object(o.a)() && console.error(t), e && this.onIrrecoverableError(e)
					}, this.state = {
						isInitialized: !1,
						isMuteForced: !1
					}, this.hls = void 0, this.onVideoPause = this.onVideoPause.bind(this), this.onVideoPlay = this.onVideoPlay.bind(this), this.onTimeUpdated = this.onTimeUpdated.bind(this)
				}
				componentDidUpdate(e, t) {
					if (e.url !== this.props.url) return void this.initialize();
					const {
						isPaused: r
					} = this.props, s = this.videoElement.current;
					s && this.state.isInitialized && r !== s.paused && (r ? s.pause() : s.play().catch(this.onPlayError(this.hls))), !t.isMuteForced && this.state.isMuteForced && this.state.isInitialized && this.videoElement.current && this.videoElement.current.play().catch(this.onPlayError(this.hls))
				}
				componentDidMount() {
					this.initialize()
				}
				componentWillUnmount() {
					const e = this.videoElement.current;
					e && !e.paused && this.onVideoPause(), this.hls && this.hls.destroy()
				}
				render() {
					const {
						controls: e,
						muted: t,
						onEnded: r,
						onLoadedData: s
					} = this.props;
					return i.a.createElement("video", {
						controls: e,
						muted: t || this.state.isMuteForced,
						onEnded: r,
						onLoadedData: s,
						onPlay: this.onVideoPlay,
						onPause: this.onVideoPause,
						onTimeUpdate: this.onTimeUpdated,
						ref: this.videoElement
					})
				}
				initialize() {
					const {
						autoplay: e,
						startTime: t,
						isPaused: r,
						onLevelLoaded: s,
						onLoadingData: i,
						url: a
					} = this.props;
					if (!a || !this.videoElement.current) return;
					this.hls && this.hls.destroy();
					const o = new n.a({
						enableWorker: !1,
						fragLoadingMaxRetry: 2,
						levelLoadingMaxRetry: 4,
						manifestLoadingMaxRetry: 1,
						startFragPrefetch: !0,
						liveSyncDurationCount: 2,
						maxMaxBufferLength: 10
					});
					this.subscribeErrorHandlers(o), o.on(n.a.Events.MANIFEST_LOADING, () => {
						i && i()
					}), o.on(n.a.Events.MANIFEST_PARSED, (s, i) => {
						e && !r && this.videoElement.current && (this.videoElement.current.currentTime = t, this.videoElement.current.play().catch(this.onPlayError(o))), this.setState(Object.assign({}, this.state, {
							isInitialized: !0
						}))
					}), o.on(n.a.Events.LEVEL_LOADED, (e, t) => {
						s && s(t.details)
					}), o.loadSource(a), o.attachMedia(this.videoElement.current), this.hls = o
				}
				subscribeErrorHandlers(e) {
					e.on(n.a.Events.ERROR, (t, r) => {
						if (r.type === n.a.ErrorTypes.NETWORK_ERROR && r.response && 410 === r.response.code) this.onResourceRemoved(e);
						else if (r.fatal) switch (r.type) {
							case n.a.ErrorTypes.MEDIA_ERROR:
								return void this.handleFatalMediaError(e);
							case n.a.ErrorTypes.NETWORK_ERROR:
								return void this.handleFatalNetworkError(e, r);
							default:
								return void this.onIrrecoverableError(e)
						}
					})
				}
				onResourceRemoved(e) {
					e.stopLoad(), this.props.onResourceRemoved && this.props.onResourceRemoved()
				}
				onIrrecoverableError(e) {
					e.destroy(), this.props.onError && this.props.onError()
				}
				handleFatalMediaError(e) {
					return Date.now() - this.mediaRecoveryLastAttemptUtc > u && (this.mediaRecoveryAttemptsCount = 0), 0 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), void e.recoverMediaError()) : 1 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), e.swapAudioCodec(), void e.recoverMediaError()) : void this.onIrrecoverableError(e)
				}
				handleFatalNetworkError(e, t) {
					t.details !== n.a.ErrorDetails.FRAG_LOAD_ERROR && t.details !== n.a.ErrorDetails.FRAG_LOAD_TIMEOUT ? this.onIrrecoverableError(e) : this.handleBadFragment(e, t.frag)
				}
				handleBadFragment(e, t) {
					this.resetBadFragmentsCountIfCooldownPassed(), this.fragmentRecoveryAttemptsCount > c || !t ? this.onIrrecoverableError(e) : (this.fragmentRecoveryAttemptsCount++, this.fragmentRecoveryLastAttemptUtc = Date.now(), e.startLoad())
				}
				resetBadFragmentsCountIfCooldownPassed() {
					this.fragmentRecoveryLastAttemptUtc + d < Date.now() && (this.fragmentRecoveryAttemptsCount = 0)
				}
				onTimeUpdated() {
					this.videoElement.current && this.props.onTimeUpdate && this.props.onTimeUpdate(this.videoElement.current.currentTime)
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
					const t = this.videoElement.current;
					t && (t.currentTime = e)
				}
				setVolume(e) {
					const t = this.videoElement.current;
					t && t.volume !== e && (t.volume = e)
				}
			}
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less": function(e, t, r) {
			e.exports = {
				LiveVideoPlayer: "_1CslYvEjQCqKJNXXyr7VBi",
				liveVideoPlayer: "_1CslYvEjQCqKJNXXyr7VBi",
				Overlay: "QeWQ4jUouItrgSmIpGLMR",
				overlay: "QeWQ4jUouItrgSmIpGLMR",
				LiveIndicator: "KJyaW7XHtFbqn-RpZvMrj",
				liveIndicator: "KJyaW7XHtFbqn-RpZvMrj",
				Duration: "_2qV1So7QiOzMP7ullTclrY",
				duration: "_2qV1So7QiOzMP7ullTclrY",
				MutedToggleButton: "_2W8k4lIjP-vO2DZBQlcXbr",
				mutedToggleButton: "_2W8k4lIjP-vO2DZBQlcXbr",
				MuteIcon: "_2RWb9Dwp3_ObxLMkcTgnA1",
				muteIcon: "_2RWb9Dwp3_ObxLMkcTgnA1",
				VolumeIcon: "KTC7B9EyTnKwrWTSHOSna",
				volumeIcon: "KTC7B9EyTnKwrWTSHOSna"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				c = r("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				d = r("./src/reddit/components/HlsVideo/index.tsx"),
				u = r("./src/reddit/components/ImageWithFallback/index.tsx"),
				h = r("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				l = r("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				m = r("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			r("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var b = r("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less"),
				v = r.n(b);
			r.d(t, "LiveVideoPlayer", (function() {
				return E
			})), r.d(t, "Overlay", (function() {
				return g
			})), r.d(t, "LiveIndicator", (function() {
				return w
			})), r.d(t, "Duration", (function() {
				return f
			})), r.d(t, "MutedToggleButton", (function() {
				return y
			}));
			const {
				fbt: p
			} = r("./node_modules/fbt/lib/FbtPublic.js"), R = Object(n.c)({
				unavailableVideoUrl: m.p
			}), S = Object(a.b)(R, (e, t) => ({
				onHeartbeatSubscribe: t => e(c.a.subscribeHeartbeat(t))
			}));
			class E extends s.Component {
				constructor(e) {
					super(e), this.onClick = e => {
						this.shouldRenderVideo && (e.preventDefault(), e.stopPropagation(), this.onTogglePaused())
					}, this.onError = () => {
						this.setState({
							hasError: !0
						})
					}, this.onLevelLoaded = e => {
						const {
							live: t,
							totalduration: r
						} = e;
						t !== this.state.live && this.setState({
							live: t
						}), r !== this.state.duration && this.setState({
							duration: r
						})
					}, this.onPause = () => {
						this.unsubscribeHeartbeat()
					}, this.onPlay = () => {
						this.hasPlayableMedia && this.subscribeHeartbeat()
					}, this.onResourceRemoved = () => {
						this.setState({
							wasRemoved: !0
						})
					}, this.onToggleMuted = () => {
						this.setState(e => {
							let {
								muted: t
							} = e;
							return {
								muted: !t
							}
						})
					}, this.onTogglePaused = () => {
						this.setState(e => {
							let {
								userPaused: t
							} = e;
							return {
								userPaused: !t
							}
						})
					}, this.state = {
						duration: 0,
						hasError: !1,
						live: !1,
						muted: !0,
						userPaused: !1,
						wasRemoved: !1
					}
				}
				get hasPlayableMedia() {
					return !(this.state.wasRemoved || this.state.hasError)
				}
				get isPaused() {
					return this.props.shouldPause || this.state.userPaused
				}
				get shouldRenderOverlay() {
					return this.shouldRenderVideo && this.hasPlayableMedia
				}
				get shouldRenderPoster() {
					return this.props.isExpando
				}
				get shouldRenderVideo() {
					return !this.shouldRenderPoster && this.props.canLoad
				}
				get streamId() {
					const e = /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/.exec(this.props.url);
					return e && e[0]
				}
				get url() {
					return this.hasPlayableMedia ? this.props.url : this.props.unavailableVideoUrl || ""
				}
				componentWillUnmount() {
					this.unsubscribeHeartbeat()
				}
				render() {
					return i.a.createElement("div", {
						className: v.a.LiveVideoPlayer,
						onClick: this.onClick
					}, this.shouldRenderPoster ? this.renderPoster() : null, this.shouldRenderVideo ? this.renderVideo() : null, this.shouldRenderOverlay ? this.renderOverlay() : null)
				}
				renderOverlay() {
					const {
						duration: e,
						live: t,
						muted: r
					} = this.state;
					return i.a.createElement(g, null, t ? i.a.createElement(w, null) : e ? i.a.createElement(f, {
						seconds: e
					}) : null, i.a.createElement(y, {
						muted: r,
						onClick: this.onToggleMuted
					}))
				}
				renderPoster() {
					return i.a.createElement(u.a, {
						src: this.props.posterUrl,
						errorSrc: o.R
					})
				}
				renderVideo() {
					return i.a.createElement(d.a, {
						autoplay: this.isPaused,
						controls: !1,
						isPaused: this.isPaused,
						muted: this.state.muted,
						playMutedOnPrevented: !0,
						startTime: 0,
						url: this.url,
						onError: this.onError,
						onLevelLoaded: this.onLevelLoaded,
						onPause: this.onPause,
						onPlay: this.onPlay,
						onResourceRemoved: this.onResourceRemoved
					})
				}
				subscribeHeartbeat() {
					this.streamId && this.props.onHeartbeatSubscribe(this.streamId).then(e => this._unsubscribeHeartbeat = e)
				}
				unsubscribeHeartbeat() {
					this._unsubscribeHeartbeat && (this._unsubscribeHeartbeat(), delete this._unsubscribeHeartbeat)
				}
			}
			t.default = S(E);
			const g = e => {
					let {
						children: t
					} = e;
					return i.a.createElement("div", {
						className: v.a.Overlay
					}, t)
				},
				w = () => i.a.createElement("span", {
					className: v.a.LiveIndicator
				}, p._("Live", null, {
					hk: "TwJSs"
				})),
				f = e => {
					let {
						seconds: t
					} = e;
					return i.a.createElement("span", {
						className: v.a.Duration
					}, (e => {
						const t = Math.trunc(e / 3600),
							r = Math.trunc(e % 3600 / 60),
							s = Math.trunc(e % 60);
						return [t > 0 ? t.toString() : "", t > 0 ? ":" : "", t > 0 && r < 10 ? "0" : "", r, ":", s < 10 ? "0" : "", s].join("")
					})(t))
				},
				y = e => {
					let {
						muted: t,
						onClick: r
					} = e;
					let s, a;
					return t ? (s = p._("unmute", null, {
						hk: "45ctbh"
					}), a = i.a.createElement(h.a, {
						className: v.a.MuteIcon
					})) : (s = p._("mute", null, {
						hk: "3xjwI7"
					}), a = i.a.createElement(l.a, {
						className: v.a.VolumeIcon
					})), i.a.createElement("button", {
						"aria-label": s,
						className: v.a.MutedToggleButton,
						onClick: e => {
							e.preventDefault(), e.stopPropagation(), r()
						}
					}, a)
				}
		}
	}
]);
//# sourceMappingURL=LiveVideoPlayer.4f5d4565769af9a7091e.js.map