// https://www.redditstatic.com/desktop2x/LiveVideoPlayer.f49da8eb397ed0b82dfd.js
// Retrieved at 4/1/2020, 8:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer"], {
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t) {
				for (var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), a = 2; a < s; a++) r[a - 2] = arguments[a];
				let i, n = !1;
				const o = async () => {
					r && r.length ? await e.call(window, ...r) : await e.call(window), n || (i = window.setTimeout(o, t))
				};
				return i = window.setTimeout(o, t), () => {
					n = !0, window.clearTimeout(i)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/setInterval/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = new class {
				constructor() {
					this.isInitialized = !1, this.currentStreamsRateSec = i.c, this.currentConfigRateSec = i.d, this.heartbeatDelaySec = i.f, this.heartbeatRateSec = i.g, this.statsRefreshRateSec = i.j, this.recommendedViewerSubredditsRefreshRateSec = i.h, this.MIN_RATE_MS = 1e3, this.subscribeConfig = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startConfigWork(e, t, s)), () => this.unsubscribeConfig()), this.subscribeStreams = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startStreamsWork(e, t, s)), () => this.unsubscribeStreams()), this.subscribeRecommendedViewerSubreddits = () => async (e, t) => (this.startRecommendedViewerSubredditsWork(e, t), () => this.unsubscribeRecommendedViewerSubreddits()), this.subscribeStats = e => async (t, s) => (this.currentStatsId = e, this.startStatsWork(t, s), () => this.unsubscribeStats()), this.subscribeHeartbeat = e => async (t, s) => (this.currentHeartbeatId = e, this.startHeartbeatWork(t, s), () => this.unsubscribeHeartbeat())
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
					await t(Object(a.c)(e));
					const r = Object(o.m)(s());
					r.lastUpdated && (this.currentStreamsRateSec = r.viewer_streams_refresh, this.currentConfigRateSec = r.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(e, t, s) {
					window.clearTimeout(this.configTimeout), await t(Object(a.c)(e));
					const r = Object(o.m)(s()),
						i = r.rpan_config_refresh_rate;
					this.currentConfigRateSec !== i && (this.currentConfigRateSec = i);
					const n = r.viewer_streams_refresh;
					this.currentStreamsRateSec !== n && (this.currentStreamsRateSec = n, this.startStreamsWork(e, t, s));
					const c = r.viewer_heartbeat_interval;
					c && this.heartbeatRateSec !== c && this.startHeartbeatWork(t, s);
					const d = r.viewer_heartbeat_interval;
					d && this.statsRefreshRateSec !== d && this.startStatsWork(t, s), this.configTimeout = window.setTimeout(() => this.startConfigWork(e, t, s), this.getConfigTimeout())
				}
				async startStreamsWork(e, t, s) {
					window.clearTimeout(this.streamsTimeout), await t(Object(n.e)(e)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(e, t, s), this.getStreamsTimeout(s()))
				}
				async startRecommendedViewerSubredditsWork(e, t) {
					await this.initializeConfig(i.P, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(a.b)());
					const s = Object(o.m)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(r.a)(() => e(Object(a.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(i.P, e, t), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(o.m)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStatsId && e(Object(n.d)(this.currentStatsId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(i.P, e, t), !this.currentHeartbeatId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(o.m)(t());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const n = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const c = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						d = () => {
							this.currentHeartbeatId && e(Object(a.d)(this.currentHeartbeatId))
						};
					this.clearSendHeartbeatInterval = Object(r.a)(() => {
						d(), this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.clearSendHeartbeatInterval = Object(r.a)(d, c)
					}, n)
				}
				getStreamsTimeout(e) {
					return Math.max(1e3 * (this.currentStreamsRateSec + this.getRandomFetchStreamsJitterSec(e)), this.MIN_RATE_MS)
				}
				getConfigTimeout() {
					return Math.max(1e3 * this.currentConfigRateSec, this.MIN_RATE_MS)
				}
				getRandomFetchStreamsJitterSec(e) {
					const t = Object(o.m)(e).viewer_streams_refresh_slop,
						s = Math.cos(Math.PI * Math.round(Math.random()));
					return Math.random() * t * s
				}
			};
			t.a = c
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return h
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/query-string/index.js"),
				a = s.n(r),
				i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				u = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = new Set(["home", "r/popular"]),
				h = e => {
					const t = location && location.search || "",
						s = a.a.parse(t);
					l.has(e) && (s.related = e);
					const r = a.a.stringify(s);
					return r ? "?".concat(r) : ""
				},
				m = Object(i.a)(n.L),
				b = Object(i.a)(n.x),
				p = Object(i.a)(n.M),
				v = Object(i.a)(n.y),
				S = Object(i.a)(n.K),
				y = Object(i.a)(n.J),
				R = Object(i.a)(n.s),
				g = Object(i.a)(n.t),
				w = e => t => t.post.subreddit.name !== e ? t : Object.assign({}, t, {
					post: Object.assign({}, t.post, {
						subreddit: Object.assign({}, t.post.subreddit, {
							name: "pan"
						})
					})
				}),
				E = e => async (t, s, r) => {
					let {
						gqlContext: a
					} = r;
					const i = Object(c.g)(e),
						n = s();
					if (Object(u.e)(n, i)) return;
					t(m(i));
					const d = await Object(o.d)(a(), i),
						l = Date.now();
					if (d.ok && d.body && d.body.data) {
						let e = d.body.data;
						const r = Object(u.b)(s());
						r && "pan" !== r && (e = w(r)(e)), t(b({
							model: e,
							utcTimeStamp: l
						}))
					} else t(P({
						streamId: i,
						error: d.error,
						utcTimeStamp: l
					}))
				}, f = e => async (t, s) => Object(d.b)(s()) ? t(I(e)) : t(_()), _ = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const a = t();
					if (Object(u.g)(a)) return;
					e(p());
					const i = await Object(o.f)(r()),
						n = Date.now();
					if (i.ok && i.body && i.body.data) {
						const t = i.body.data;
						e(v({
							models: t,
							utcTimeStamp: n
						}))
					} else e(O({
						error: i.error,
						utcTimeStamp: n
					}))
				}, I = e => async (t, s, r) => {
					let {
						gqlContext: a
					} = r;
					const i = s();
					if (Object(u.g)(i)) return;
					t(p());
					const n = await Object(o.e)(a(), e),
						c = Date.now();
					if (n.ok && n.body && n.body.data) {
						let r = n.body.data;
						const a = Object(u.b)(s());
						a && "pan" !== a && (r = r.map(w(a))), t(v({
							listingName: e,
							models: r,
							utcTimeStamp: c
						}))
					} else t(O({
						error: n.error,
						utcTimeStamp: c
					}))
				}, P = e => async t => {
					t(S(e))
				}, O = e => async t => {
					t(y(e))
				}
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/hls.js/dist/hls.js"),
				n = s.n(i),
				o = s("./src/lib/env/index.ts");
			const c = 3,
				d = 5e3,
				u = 1e3;
			class l extends r.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoElement = a.a.createRef(), this.onPlayError = e => t => {
						if ("AbortError" === t.name) return;
						const {
							onAutoPlayPrevented: s,
							playMutedOnPrevented: r
						} = this.props;
						if ("NotAllowedError" === t.name) return s && s(), void(r && this.setState(Object.assign({}, this.state, {
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
						isPaused: s
					} = this.props, r = this.videoElement.current;
					r && this.state.isInitialized && s !== r.paused && (s ? r.pause() : r.play().catch(this.onPlayError(this.hls))), !t.isMuteForced && this.state.isMuteForced && this.state.isInitialized && this.videoElement.current && this.videoElement.current.play().catch(this.onPlayError(this.hls))
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
						onEnded: s,
						onLoadedData: r
					} = this.props;
					return a.a.createElement("video", {
						controls: e,
						tabIndex: e ? 0 : -1,
						muted: t || this.state.isMuteForced,
						onEnded: s,
						onLoadedData: r,
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
						isPaused: s,
						onLevelLoaded: r,
						onLoadingData: a,
						url: i
					} = this.props;
					if (!i || !this.videoElement.current) return;
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
						a && a()
					}), o.on(n.a.Events.MANIFEST_PARSED, (r, a) => {
						e && !s && this.videoElement.current && (this.videoElement.current.currentTime = t, this.videoElement.current.play().catch(this.onPlayError(o))), this.setState(Object.assign({}, this.state, {
							isInitialized: !0
						}))
					}), o.on(n.a.Events.LEVEL_LOADED, (e, t) => {
						r && r(t.details)
					}), o.loadSource(i), o.attachMedia(this.videoElement.current), this.hls = o
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
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less": function(e, t, s) {
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
				PausedToggleButton: "_299A9DTaMrNQ3IvPUKBcop",
				pausedToggleButton: "_299A9DTaMrNQ3IvPUKBcop",
				MuteIcon: "_2RWb9Dwp3_ObxLMkcTgnA1",
				muteIcon: "_2RWb9Dwp3_ObxLMkcTgnA1",
				PauseIcon: "_3gI8IhVSrZYz6kWbFj98Kb",
				pauseIcon: "_3gI8IhVSrZYz6kWbFj98Kb",
				PlayIcon: "_37ZYqYmu-gzVHwqQdlwD_Y",
				playIcon: "_37ZYqYmu-gzVHwqQdlwD_Y",
				VolumeIcon: "KTC7B9EyTnKwrWTSHOSna",
				volumeIcon: "KTC7B9EyTnKwrWTSHOSna"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				c = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				d = s("./src/reddit/components/HlsVideo/index.tsx"),
				u = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				l = s("./src/reddit/constants/keycodes.ts"),
				h = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				m = s("./src/reddit/icons/svgs/VideoPause/index.tsx"),
				b = s("./src/reddit/icons/svgs/VideoPlay/index.tsx"),
				p = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				v = s("./src/reddit/selectors/platform.ts"),
				S = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var y = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less"),
				R = s.n(y);
			s.d(t, "LiveVideoPlayer", (function() {
				return f
			})), s.d(t, "Overlay", (function() {
				return _
			})), s.d(t, "LiveIndicator", (function() {
				return I
			})), s.d(t, "Duration", (function() {
				return P
			})), s.d(t, "MutedToggleButton", (function() {
				return O
			})), s.d(t, "PausedToggleButton", (function() {
				return T
			}));
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = Object(n.c)({
				isOverlayOpen: v.h,
				unavailableVideoUrl: S.p
			}), E = Object(i.b)(w, (e, t) => ({
				onHeartbeatSubscribe: t => e(c.a.subscribeHeartbeat(t))
			}));
			class f extends r.Component {
				constructor(e) {
					super(e), this.onError = () => {
						this.setState({
							hasError: !0
						})
					}, this.onKeyPress = e => {
						e.key === l.b.Enter && (e.preventDefault(), e.stopPropagation(), this.onTogglePaused())
					}, this.onLevelLoaded = e => {
						const {
							live: t,
							totalduration: s
						} = e;
						t !== this.state.live && this.setState({
							live: t
						}), s !== this.state.duration && this.setState({
							duration: s
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
						this.setState(() => ({
							userPaused: !this.isPaused,
							userShowedIntent: !0
						}))
					}, this.state = {
						duration: 0,
						hasError: !1,
						live: !1,
						muted: !0,
						userPaused: !1,
						userShowedIntent: !1,
						wasRemoved: !1
					}
				}
				get hasPlayableMedia() {
					return !(this.state.wasRemoved || this.state.hasError)
				}
				get isPaused() {
					return !!this.props.isOverlayOpen || (this.state.userShowedIntent ? this.state.userPaused : this.props.shouldPause)
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
				get shouldRenderVideoUI() {
					const {
						duration: e,
						live: t
					} = this.state;
					return !!e && !t
				}
				get url() {
					return this.hasPlayableMedia ? this.props.url : this.props.unavailableVideoUrl || ""
				}
				componentDidUpdate(e) {
					this.props.shouldPause && !e.shouldPause && this.setState({
						userShowedIntent: !1
					})
				}
				componentWillUnmount() {
					this.unsubscribeHeartbeat()
				}
				render() {
					return a.a.createElement("div", {
						className: R.a.LiveVideoPlayer
					}, this.shouldRenderPoster ? this.renderPoster() : null, this.shouldRenderVideo ? this.renderVideo() : null, this.shouldRenderOverlay ? this.renderOverlay() : null)
				}
				renderOverlay() {
					const {
						duration: e,
						live: t
					} = this.state;
					return a.a.createElement(_, null, t ? a.a.createElement(I, null) : e ? a.a.createElement(P, {
						seconds: e
					}) : null, this.shouldRenderVideoUI ? this.renderVideoUI() : null)
				}
				renderPoster() {
					return a.a.createElement(u.a, {
						src: this.props.posterUrl,
						errorSrc: o.S
					})
				}
				renderVideo() {
					return a.a.createElement(d.a, {
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
				renderVideoUI() {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(T, {
						paused: this.isPaused,
						onClick: this.onTogglePaused
					}), a.a.createElement(O, {
						muted: this.state.muted,
						onClick: this.onToggleMuted
					}))
				}
				subscribeHeartbeat() {
					this.props.onHeartbeatSubscribe(this.props.postId).then(e => this._unsubscribeHeartbeat = e)
				}
				unsubscribeHeartbeat() {
					this._unsubscribeHeartbeat && (this._unsubscribeHeartbeat(), delete this._unsubscribeHeartbeat)
				}
			}
			t.default = E(f);
			const _ = e => {
					let {
						children: t
					} = e;
					return a.a.createElement("div", {
						className: R.a.Overlay
					}, t)
				},
				I = () => a.a.createElement("span", {
					className: R.a.LiveIndicator
				}, g._("Live", null, {
					hk: "TwJSs"
				})),
				P = e => {
					let {
						seconds: t
					} = e;
					return a.a.createElement("span", {
						className: R.a.Duration
					}, (e => {
						const t = Math.trunc(e / 3600),
							s = Math.trunc(e % 3600 / 60),
							r = Math.trunc(e % 60);
						return [t > 0 ? t.toString() : "", t > 0 ? ":" : "", t > 0 && s < 10 ? "0" : "", s, ":", r < 10 ? "0" : "", r].join("")
					})(t))
				},
				O = e => {
					let {
						muted: t,
						onClick: s
					} = e;
					let r, i;
					return t ? (r = g._("unmute", null, {
						hk: "45ctbh"
					}), i = a.a.createElement(h.a, {
						className: R.a.MuteIcon
					})) : (r = g._("mute", null, {
						hk: "3xjwI7"
					}), i = a.a.createElement(p.a, {
						className: R.a.VolumeIcon
					})), a.a.createElement("button", {
						"aria-label": r,
						className: R.a.MutedToggleButton,
						onClick: e => {
							e.preventDefault(), e.stopPropagation(), s()
						},
						onKeyPress: e => {
							e.stopPropagation()
						}
					}, i)
				},
				T = e => {
					let {
						paused: t,
						onClick: s
					} = e;
					let r, i;
					return t ? (r = g._("play", null, {
						hk: "2xeIj3"
					}), i = a.a.createElement(b.a, {
						className: R.a.PlayIcon
					})) : (r = g._("pause", null, {
						hk: "3jTrMB"
					}), i = a.a.createElement(m.a, {
						className: R.a.PauseIcon
					})), a.a.createElement("button", {
						"aria-label": r,
						className: R.a.PausedToggleButton,
						onClick: e => {
							e.preventDefault(), e.stopPropagation(), s()
						}
					}, i)
				}
		}
	}
]);
//# sourceMappingURL=LiveVideoPlayer.f49da8eb397ed0b82dfd.js.map