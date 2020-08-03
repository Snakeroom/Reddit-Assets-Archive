// https://www.redditstatic.com/desktop2x/LiveVideoPlayer~PublicAccessNetwork.270bf9cbe7f969ce97af.js
// Retrieved at 8/3/2020, 10:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer~PublicAccessNetwork"], {
		"./src/lib/focusVisible/index.js": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				var t = !0,
					s = !1,
					r = null,
					i = {
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

				function n(e) {
					e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
				}

				function o(e) {
					t = !1
				}

				function c() {
					document.addEventListener("mousemove", d), document.addEventListener("mousedown", d), document.addEventListener("mouseup", d), document.addEventListener("pointermove", d), document.addEventListener("pointerdown", d), document.addEventListener("pointerup", d), document.addEventListener("touchmove", d), document.addEventListener("touchstart", d), document.addEventListener("touchend", d)
				}

				function d(e) {
					e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", d), document.removeEventListener("mouseup", d), document.removeEventListener("pointermove", d), document.removeEventListener("pointerdown", d), document.removeEventListener("pointerup", d), document.removeEventListener("touchmove", d), document.removeEventListener("touchstart", d), document.removeEventListener("touchend", d))
				}
				document.addEventListener("keydown", (function(s) {
					s.metaKey || s.altKey || s.ctrlKey || (a(e.activeElement) && n(e.activeElement), t = !0)
				}), !0), document.addEventListener("mousedown", o, !0), document.addEventListener("pointerdown", o, !0), document.addEventListener("touchstart", o, !0), document.addEventListener("visibilitychange", (function(e) {
					"hidden" === document.visibilityState && (s && (t = !0), c())
				}), !0), c(), e.addEventListener("focus", (function(e) {
					var s, r, o;
					a(e.target) && (t || (s = e.target, r = s.type, "INPUT" === (o = s.tagName) && i[r] && !s.readOnly || "TEXTAREA" === o && !s.readOnly || s.isContentEditable)) && n(e.target)
				}), !0), e.addEventListener("blur", (function(e) {
					var t;
					a(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (s = !0, window.clearTimeout(r), r = window.setTimeout((function() {
						s = !1
					}), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
				}), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && document.documentElement.classList.add("js-focus-visible")
			}
		},
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
					await t(Object(i.c)(e));
					const r = Object(o.l)(s());
					r.lastUpdated && (this.currentStreamsRateSec = r.viewer_streams_refresh, this.currentConfigRateSec = r.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(e, t, s) {
					window.clearTimeout(this.configTimeout), await t(Object(i.c)(e));
					const r = Object(o.l)(s()),
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
					await this.initializeConfig(a.P, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(i.b)());
					const s = Object(o.l)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(r.a)(() => e(Object(i.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(a.P, e, t), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(o.l)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStatsId && e(Object(n.d)(this.currentStatsId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(a.P, e, t), !this.currentHeartbeatId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(o.l)(t());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const n = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const c = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						d = () => {
							this.currentHeartbeatId && e(Object(i.d)(this.currentHeartbeatId))
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
					const t = Object(o.l)(e).viewer_streams_refresh_slop,
						s = Math.cos(Math.PI * Math.round(Math.random()));
					return Math.random() * t * s
				}
			};
			t.a = c
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/hls.js/dist/hls.js"),
				n = s.n(a),
				o = s("./src/lib/combineRefs/index.tsx"),
				c = s("./src/lib/env/index.ts");
			const d = 3,
				u = 5e3,
				l = 1e3;
			class h extends r.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoRef = i.a.createRef(), this.onPlayError = e => t => {
						if ("AbortError" === t.name) return;
						const {
							onAutoPlayPrevented: s,
							playMutedOnPrevented: r
						} = this.props;
						if ("NotAllowedError" === t.name) return s && s(), void(r && this.setState(Object.assign(Object.assign({}, this.state), {
							isMuteForced: !0
						})));
						Object(c.a)() && console.error(t), e && this.onIrrecoverableError(e)
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
					return i.a.createElement("video", {
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
						onHlsCreate: r,
						onLevelLoaded: i,
						onLoadingData: a,
						url: o
					} = this.props;
					if (!o || !this.video) return;
					this.destroyHls();
					const c = new n.a({
						enableWorker: !1,
						fragLoadingMaxRetry: 2,
						levelLoadingMaxRetry: 4,
						manifestLoadingMaxRetry: 1,
						startFragPrefetch: !0,
						liveSyncDurationCount: 2,
						maxMaxBufferLength: 10
					});
					this.hls = c, r && r(c), this.subscribeErrorHandlers(c), c.on(n.a.Events.MANIFEST_LOADING, () => {
						a && a()
					}), c.on(n.a.Events.MANIFEST_PARSED, (r, i) => {
						e && !s && this.video && (this.video.currentTime = t, this.video.play().catch(this.onPlayError(c))), this.setState(Object.assign(Object.assign({}, this.state), {
							isInitialized: !0
						}))
					}), c.on(n.a.Events.LEVEL_LOADED, (e, t) => {
						i && i(t.details)
					}), c.loadSource(o), c.attachMedia(this.video)
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
					return Date.now() - this.mediaRecoveryLastAttemptUtc > l && (this.mediaRecoveryAttemptsCount = 0), 0 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), void e.recoverMediaError()) : 1 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), e.swapAudioCodec(), void e.recoverMediaError()) : void this.onIrrecoverableError(e)
				}
				handleFatalNetworkError(e, t) {
					t.details !== n.a.ErrorDetails.FRAG_LOAD_ERROR && t.details !== n.a.ErrorDetails.FRAG_LOAD_TIMEOUT ? this.onIrrecoverableError(e) : this.handleBadFragment(e, t.frag)
				}
				handleBadFragment(e, t) {
					this.resetBadFragmentsCountIfCooldownPassed(), this.fragmentRecoveryAttemptsCount > d || !t ? this.onIrrecoverableError(e) : (this.fragmentRecoveryAttemptsCount++, this.fragmentRecoveryLastAttemptUtc = Date.now(), e.startLoad())
				}
				resetBadFragmentsCountIfCooldownPassed() {
					this.fragmentRecoveryLastAttemptUtc + u < Date.now() && (this.fragmentRecoveryAttemptsCount = 0)
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
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "x", (function() {
				return l
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "t", (function() {
				return b
			})), s.d(t, "r", (function() {
				return p
			})), s.d(t, "u", (function() {
				return v
			})), s.d(t, "s", (function() {
				return f
			})), s.d(t, "k", (function() {
				return O
			})), s.d(t, "l", (function() {
				return g
			})), s.d(t, "i", (function() {
				return E
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "q", (function() {
				return j
			})), s.d(t, "m", (function() {
				return _
			})), s.d(t, "p", (function() {
				return R
			})), s.d(t, "w", (function() {
				return S
			})), s.d(t, "n", (function() {
				return I
			})), s.d(t, "b", (function() {
				return L
			})), s.d(t, "c", (function() {
				return A
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "o", (function() {
				return N
			})), s.d(t, "v", (function() {
				return D
			})), s.d(t, "e", (function() {
				return T
			}));
			var r, i = s("./src/reddit/constants/chat.ts"),
				a = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				n = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(r || (r = {}));
			const c = (e, t) => {
					if (t) {
						const s = o.media(e, t.post.id),
							r = o.post(e, t.post.id),
							i = o.subreddit(e);
						if (t.post.authorInfo && r && (r.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const r = Object(n.h)(e, {
								streamIdFromPath: t.post.id
							});
							r === n.a.LIVE ? s.type = "stream_live" : r === n.a.VOD ? s.type = "stream_vod" : r === n.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: r,
							media: s,
							subreddit: i
						}
					}
					return {
						subreddit: o.subreddit(e)
					}
				},
				d = (e, t, s) => {
					if (!t || !s) return;
					const r = Object(n.h)(e, {
							streamIdFromPath: t.post.id
						}),
						a = t.chat_disabled || s.chatState === i.f.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: r === n.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: a ? i.f.None : i.f.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				u = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, c(e)),
				h = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, c(e)),
				m = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "rpan",
					actionInfo: {
						position: t || 0
					}
				}, c(s, e)),
				b = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: d(s, e, t)
				}, u(s)), e && Object.assign({}, c(s, e))),
				p = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: d(s, e, t)
				}, u(s)), c(s, e)),
				v = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: d(s, e, t)
				}, u(s)), c(s, e)),
				f = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: d(s, e, t)
				}, u(s)), c(s, e)),
				O = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share_video",
					playback: d(s, e, t)
				}, u(s)), c(s, e)),
				g = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: d(s, e, t)
				}, u(s)), c(s, e)),
				E = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: d(s, e, t)
				}, u(s)), c(s, e)),
				y = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: d(s, e, t)
				}, u(s)), c(s, e)),
				w = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: d(s, e, t)
				}, c(s, e)),
				j = e => t => {
					const s = Object(n.k)(t, e);
					return Object.assign({
						source: "stream_chat",
						action: "click",
						noun: "send_chat"
					}, c(t, s))
				},
				_ = (e, t, s) => r => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: d(r, t, s)
				}, c(r, t)),
				R = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: d(s, e, t)
				}, u(s)),
				S = e => t => Object.assign({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.profile(t),
					screen: o.screen(t)
				}, c(t, e)),
				I = e => e => {
					const t = c(e);
					return !Object(a.f)(e) && t.subreddit && (t.subreddit.id = void 0), Object.assign({
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.profile(e),
						screen: o.screen(e)
					}, t)
				},
				L = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: d(s, e, t)
				}, c(s, e)),
				A = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: d(s, e, t)
				}, c(s, e)),
				k = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: d(s, e, t)
				}, c(s, e)),
				N = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: d(s, e, t)
				}, c(s, e)),
				D = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: d(s, e, t)
				}, c(s, e)),
				T = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: d(s, e, t)
				}, c(s, e))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return j
			})), s.d(t, "l", (function() {
				return S
			})), s.d(t, "m", (function() {
				return I
			})), s.d(t, "g", (function() {
				return k
			})), s.d(t, "c", (function() {
				return M
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "j", (function() {
				return V
			})), s.d(t, "i", (function() {
				return C
			})), s.d(t, "e", (function() {
				return F
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "h", (function() {
				return W
			})), s.d(t, "b", (function() {
				return z
			})), s.d(t, "d", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				u = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./node_modules/lodash/memoize.js");
			const h = e => e.publicAccessNetwork.listings,
				m = s.n(l)()(e => Object(i.a)(Object(r.a)(h, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var b = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.reports.reported,
				v = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				O = e => e.publicAccessNetwork.history.visitOrder,
				g = e => e.publicAccessNetwork.hlsStreams,
				E = Object(r.a)(g, e => e.ended),
				y = Object(r.a)(g, e => e.removed),
				w = Object(r.a)(e => e.publicAccessNetwork.models, E, y, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							i = U(r, o.a.ENDED) ? o.a.ENDED : r,
							a = s.stream.vod_accessible;
						return i === r && !0 === a ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, s), {
								stream: Object.assign(Object.assign({}, s.stream), {
									state: i,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							i = U(r, o.a.ENDED) ? o.a.ENDED : r,
							a = s.stream.vod_accessible;
						return i === r && !1 === a ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, s), {
								stream: Object.assign(Object.assign({}, s.stream), {
									state: i,
									vod_accessible: !1
								})
							})
						})
					}, r)
				}),
				j = (e, t) => {
					return w(e)[Object(n.g)(t)]
				},
				_ = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => m(t.listingName)(e, t), w, p, c.h, d.c, (e, t, s, r, i, c) => {
					if (c) {
						const a = [];
						if (e) {
							const t = Object(n.g)(e);
							s[t] && a.push(t)
						}
						const c = a.concat(t),
							d = [...new Set(c)],
							u = new Set([...r, ...i]);
						return d.filter(e => {
							const t = s[e];
							return !u.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
						})
					}
					const d = new Set([...r, ...i]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== a.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== o.a.KILLED && e.stream.state !== o.a.PURGED).map(e => e.post.id)
				}),
				R = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, w, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: r
					} = t;
					return _(e, {
						listingName: s,
						streamIdFromPath: r
					})
				}, (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				S = Object(r.a)(w, R, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				I = Object(r.a)(w, R, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === o.a.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				L = Object(r.a)(O, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: i
					} = t;
					return R(e, {
						listingName: s || i,
						streamIdFromPath: r
					})
				}, (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				A = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, w, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: i
					} = t;
					return R(e, {
						listingName: s || i,
						streamIdFromPath: r
					})
				}, v, (e, t, s, r) => {
					if (!s.length) return;
					const i = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = i.find(e => e.stream.state === o.a.IS_LIVE);
					if (a) return a.post.id;
					const n = i.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return n ? n.post.id : void 0
				}),
				k = Object(i.a)(Object(r.a)(A, w, (e, t) => e ? t[e] : void 0)),
				N = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(n.g)(s) : void 0
				}, A, p, c.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: i
					} = t;
					return R(e, {
						listingName: s || i,
						streamIdFromPath: r
					})
				}, (e, t, s, r, i) => !e || s.includes(e) || r.includes(e) ? t || i[0] : e),
				D = Object(r.a)(f, O, L, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				T = Object(r.a)(f, O, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				M = Object(i.a)(Object(r.a)(N, w, (e, t) => e ? t[e] : void 0)),
				P = Object(i.a)(Object(r.a)(D, w, (e, t) => e ? t[e] : void 0)),
				V = Object(i.a)(Object(r.a)(T, w, (e, t) => e ? t[e] : void 0)),
				C = (Object(i.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, w, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign(Object.assign({}, t[s]), {
					preloadedPreviewUrl: e[s]
				})))), Object(r.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				F = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? j(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function U(e, t) {
				const s = {
					[o.a.NOT_STARTED]: 0,
					[o.a.PUBLISHED]: 1,
					[o.a.IS_LIVE]: 2,
					[o.a.DISCONNECTED]: 2,
					[o.a.ENDED]: 3,
					[o.a.KILLED]: 4,
					[o.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const H = Object(r.a)(N, v, (e, t) => e && t.timestamps[e] || 0);
			var x;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(x || (x = {}));
			const W = Object(r.a)(N, w, b.b, (e, t, s) => {
					if (s) return x.INTRO;
					const r = e && t[e];
					if (!r) return x.UNAVAILABLE;
					const i = r.stream.state;
					return i === o.a.IS_LIVE || i === o.a.DISCONNECTED ? x.LIVE : i === o.a.ENDED && r.stream.vod_accessible ? x.VOD : x.UNAVAILABLE
				}),
				z = Object(r.a)(M, W, b.b, u.b, u.o, (e, t, s, r, i) => s ? r : e ? t === x.LIVE || t === x.VOD ? e.stream.hls_url : i : void 0),
				B = Object(r.a)(M, W, H, (e, t, s) => e ? t === x.LIVE ? e.broadcast_time : t === x.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const n = e => e.publicAccessNetwork.theaterSettings,
				o = Object(r.a)(n, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(n, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + i.a > Date.now()
		}
	}
]);
//# sourceMappingURL=LiveVideoPlayer~PublicAccessNetwork.270bf9cbe7f969ce97af.js.map