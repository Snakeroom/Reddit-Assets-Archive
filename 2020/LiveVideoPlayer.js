// https://www.redditstatic.com/desktop2x/LiveVideoPlayer.f317b83acb4cd678467f.js
// Retrieved at 3/10/2020, 5:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer"], {
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t) {
				for (var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), i = 2; i < s; i++) r[i - 2] = arguments[i];
				let a, n = !1;
				const o = async () => {
					r && r.length ? await e.call(window, ...r) : await e.call(window), n || (a = window.setTimeout(o, t))
				};
				return a = window.setTimeout(o, t), () => {
					n = !0, window.clearTimeout(a)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/setInterval/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = new class {
				constructor() {
					this.isInitialized = !1, this.currentStreamsRateSec = a.c, this.currentConfigRateSec = a.d, this.heartbeatRateSec = a.f, this.statsRefreshRateSec = a.i, this.recommendedViewerSubredditsRefreshRateSec = a.g, this.MIN_RATE_MS = 1e3, this.subscribeConfig = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startConfigWork(e, t, s)), () => this.unsubscribeConfig()), this.subscribeStreams = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startStreamsWork(e, t, s)), () => this.unsubscribeStreams()), this.subscribeRecommendedViewerSubreddits = () => async (e, t) => (this.startRecommendedViewerSubredditsWork(e, t), () => this.unsubscribeRecommendedViewerSubreddits()), this.subscribeStats = e => async (t, s) => (this.currentStreamPostId = e, this.startStatsWork(t, s), () => this.unsubscribeStats()), this.subscribeHeartbeat = e => async (t, s) => (this.currentStreamId = e, this.startHeartbeatWork(t, s), () => this.unsubscribeHeartbeat())
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
				async initializeConfig(e, t, s) {
					if (this.isInitialized) return;
					await t(Object(i.c)(e));
					const r = Object(o.m)(s());
					r.lastUpdated && (this.currentStreamsRateSec = r.viewer_streams_refresh, this.currentConfigRateSec = r.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(e, t, s) {
					window.clearTimeout(this.configTimeout), await t(Object(i.c)(e));
					const r = Object(o.m)(s()),
						a = r.rpan_config_refresh_rate;
					this.currentConfigRateSec !== a && (this.currentConfigRateSec = a);
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
					await this.initializeConfig(a.O, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(i.b)());
					const s = Object(o.m)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(r.a)(() => e(Object(i.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(a.O, e, t), this.currentStreamPostId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(o.m)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStreamPostId && e(Object(n.d)(this.currentStreamPostId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					await this.initializeConfig(a.O, e, t), this.currentStreamId && (this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.heartbeatRateSec = Object(o.m)(t()).viewer_heartbeat_interval || this.heartbeatRateSec, this.clearSendHeartbeatInterval = Object(r.a)(() => {
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
						s = Math.cos(Math.PI * Math.round(Math.random()));
					return Math.random() * t * s
				}
			};
			t.a = c
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/es6.regexp.search.js");
			var r = s("./node_modules/query-string/index.js"),
				i = s.n(r),
				a = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				u = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = e => {
					const t = location && location.search || "",
						s = i.a.parse(t);
					"home" === e && (s.related = e);
					const r = i.a.stringify(s);
					return r ? "?".concat(r) : ""
				},
				h = Object(a.a)(n.K),
				m = Object(a.a)(n.w),
				b = Object(a.a)(n.L),
				p = Object(a.a)(n.x),
				v = Object(a.a)(n.J),
				R = Object(a.a)(n.I),
				S = Object(a.a)(n.r),
				g = Object(a.a)(n.s),
				y = e => t => t.post.subreddit.name !== e ? t : Object.assign({}, t, {
					post: Object.assign({}, t.post, {
						subreddit: Object.assign({}, t.post.subreddit, {
							name: "pan"
						})
					})
				}),
				w = e => async (t, s, r) => {
					let {
						gqlContext: i
					} = r;
					const a = Object(c.f)(e),
						n = s();
					if (Object(u.e)(n, a)) return;
					t(h(a));
					const d = await Object(o.d)(i(), a),
						l = Date.now();
					if (d.ok && d.body && d.body.data) {
						let e = d.body.data;
						const r = Object(u.b)(s());
						r && "pan" !== r && (e = y(r)(e)), t(m({
							model: e,
							utcTimeStamp: l
						}))
					} else t(I({
						streamId: a,
						error: d.error,
						utcTimeStamp: l
					}))
				}, f = e => async (t, s) => Object(d.b)(s()) ? t(_(e)) : t(E()), E = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const i = t();
					if (Object(u.g)(i)) return;
					e(b());
					const a = await Object(o.f)(r()),
						n = Date.now();
					if (a.ok && a.body && a.body.data) {
						const t = a.body.data;
						e(p({
							models: t,
							utcTimeStamp: n
						}))
					} else e(P({
						error: a.error,
						utcTimeStamp: n
					}))
				}, _ = e => async (t, s, r) => {
					let {
						gqlContext: i
					} = r;
					const a = s();
					if (Object(u.g)(a)) return;
					t(b());
					const n = await Object(o.e)(i(), e),
						c = Date.now();
					if (n.ok && n.body && n.body.data) {
						let r = n.body.data;
						const i = Object(u.b)(s());
						i && "pan" !== i && (r = r.map(y(i))), t(p({
							listingName: e,
							models: r,
							utcTimeStamp: c
						}))
					} else t(P({
						error: n.error,
						utcTimeStamp: c
					}))
				}, I = e => async t => {
					t(v(e))
				}, P = e => async t => {
					t(R(e))
				}
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/hls.js/dist/hls.js"),
				n = s.n(a),
				o = s("./src/lib/env/index.ts");
			const c = 3,
				d = 5e3,
				u = 1e3;
			class l extends r.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoElement = i.a.createRef(), this.onPlayError = e => t => {
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
					return i.a.createElement("video", {
						controls: e,
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
					}), o.on(n.a.Events.MANIFEST_PARSED, (r, i) => {
						e && !s && this.videoElement.current && (this.videoElement.current.currentTime = t, this.videoElement.current.play().catch(this.onPlayError(o))), this.setState(Object.assign({}, this.state, {
							isInitialized: !0
						}))
					}), o.on(n.a.Events.LEVEL_LOADED, (e, t) => {
						r && r(t.details)
					}), o.loadSource(a), o.attachMedia(this.videoElement.current), this.hls = o
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
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				c = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				d = s("./src/reddit/components/HlsVideo/index.tsx"),
				u = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				l = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				h = s("./src/reddit/icons/svgs/VideoPause/index.tsx"),
				m = s("./src/reddit/icons/svgs/VideoPlay/index.tsx"),
				b = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				p = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var v = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less"),
				R = s.n(v);
			s.d(t, "LiveVideoPlayer", (function() {
				return w
			})), s.d(t, "Overlay", (function() {
				return f
			})), s.d(t, "LiveIndicator", (function() {
				return E
			})), s.d(t, "Duration", (function() {
				return _
			})), s.d(t, "MutedToggleButton", (function() {
				return I
			})), s.d(t, "PausedToggleButton", (function() {
				return P
			}));
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(n.c)({
				unavailableVideoUrl: p.p
			}), y = Object(a.b)(g, (e, t) => ({
				onHeartbeatSubscribe: t => e(c.a.subscribeHeartbeat(t))
			}));
			class w extends r.Component {
				constructor(e) {
					super(e), this.onError = () => {
						this.setState({
							hasError: !0
						})
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
				get shouldRenderVideoUI() {
					const {
						duration: e,
						live: t
					} = this.state;
					return !!e && !t
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
						className: R.a.LiveVideoPlayer
					}, this.shouldRenderPoster ? this.renderPoster() : null, this.shouldRenderVideo ? this.renderVideo() : null, this.shouldRenderOverlay ? this.renderOverlay() : null)
				}
				renderOverlay() {
					const {
						duration: e,
						live: t
					} = this.state;
					return i.a.createElement(f, null, t ? i.a.createElement(E, null) : e ? i.a.createElement(_, {
						seconds: e
					}) : null, this.shouldRenderVideoUI ? this.renderVideoUI() : null)
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
				renderVideoUI() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(P, {
						paused: this.isPaused,
						onClick: this.onTogglePaused
					}), i.a.createElement(I, {
						muted: this.state.muted,
						onClick: this.onToggleMuted
					}))
				}
				subscribeHeartbeat() {
					this.streamId && this.props.onHeartbeatSubscribe(this.streamId).then(e => this._unsubscribeHeartbeat = e)
				}
				unsubscribeHeartbeat() {
					this._unsubscribeHeartbeat && (this._unsubscribeHeartbeat(), delete this._unsubscribeHeartbeat)
				}
			}
			t.default = y(w);
			const f = e => {
					let {
						children: t
					} = e;
					return i.a.createElement("div", {
						className: R.a.Overlay
					}, t)
				},
				E = () => i.a.createElement("span", {
					className: R.a.LiveIndicator
				}, S._("Live", null, {
					hk: "TwJSs"
				})),
				_ = e => {
					let {
						seconds: t
					} = e;
					return i.a.createElement("span", {
						className: R.a.Duration
					}, (e => {
						const t = Math.trunc(e / 3600),
							s = Math.trunc(e % 3600 / 60),
							r = Math.trunc(e % 60);
						return [t > 0 ? t.toString() : "", t > 0 ? ":" : "", t > 0 && s < 10 ? "0" : "", s, ":", r < 10 ? "0" : "", r].join("")
					})(t))
				},
				I = e => {
					let {
						muted: t,
						onClick: s
					} = e;
					let r, a;
					return t ? (r = S._("unmute", null, {
						hk: "45ctbh"
					}), a = i.a.createElement(l.a, {
						className: R.a.MuteIcon
					})) : (r = S._("mute", null, {
						hk: "3xjwI7"
					}), a = i.a.createElement(b.a, {
						className: R.a.VolumeIcon
					})), i.a.createElement("button", {
						"aria-label": r,
						className: R.a.MutedToggleButton,
						onClick: e => {
							e.preventDefault(), e.stopPropagation(), s()
						}
					}, a)
				},
				P = e => {
					let {
						paused: t,
						onClick: s
					} = e;
					let r, a;
					return t ? (r = S._("play", null, {
						hk: "2xeIj3"
					}), a = i.a.createElement(m.a, {
						className: R.a.PlayIcon
					})) : (r = S._("pause", null, {
						hk: "3jTrMB"
					}), a = i.a.createElement(h.a, {
						className: R.a.PauseIcon
					})), i.a.createElement("button", {
						"aria-label": r,
						className: R.a.PausedToggleButton,
						onClick: e => {
							e.preventDefault(), e.stopPropagation(), s()
						}
					}, a)
				}
		}
	}
]);
//# sourceMappingURL=LiveVideoPlayer.f317b83acb4cd678467f.js.map