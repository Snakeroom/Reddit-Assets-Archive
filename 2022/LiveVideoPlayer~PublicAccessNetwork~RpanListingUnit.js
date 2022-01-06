// https://www.redditstatic.com/desktop2x/LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit.c9f3ef2564ccfe2807fd.js
// Retrieved at 1/6/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"], {
		"./src/lib/VideoSession/VideoSessionManager.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const a = new WeakMap,
				r = new WeakMap,
				o = new WeakMap;
			class n {
				get laps() {
					return a.get(this).slice(1)
				}
				get paused() {
					return !r.has(this)
				}
				get time() {
					const e = Date.now(),
						t = o.get(this);
					return this.paused ? t : t + (e - r.get(this))
				}
				constructor() {
					this.reset()
				}
				start() {
					this.paused && r.set(this, Date.now())
				}
				pause() {
					this.paused || (o.set(this, this.time), r.delete(this))
				}
				reset() {
					a.set(this, [
						[0, 0]
					]), o.set(this, 0), r.delete(this)
				}
				lap() {
					const {
						time: e
					} = this, t = a.get(this), s = [e - t[t.length - 1][1], e];
					return a.set(this, [...t, s]), s
				}
			}
			var i = s("./src/lib/VideoSession/util.ts"),
				c = s("./node_modules/uuid/v4.js"),
				l = s.n(c);
			const d = 1e4;

			function m(e, t) {
				return {
					startedAt: e,
					expectedAt: e + t,
					completedAt: Date.now()
				}
			}

			function u(e, t = 0, s, ...a) {
				return function(e, t = 0, ...s) {
					const a = Date.now();
					return setTimeout((...s) => {
						const r = m(a, t);
						return e(r, ...s)
					}, t, ...s)
				}(h(e, s), t, ...a)
			}

			function h(e, t = d) {
				return function(s, ...a) {
					const r = function(e, t) {
						const {
							completedAt: s,
							expectedAt: a
						} = e, r = s > a + t;
						return {
							...e,
							expired: r
						}
					}(s, t);
					return e(r, ...a)
				}
			}
			var p = class {
				constructor(e) {
					this.handleTimeout = ({
						expired: e
					}) => {
						e ? this.emitError({
							id: this.id,
							message: "Expired timer."
						}) : (this.watchTimer.lap(), this.emitHeartbeat(), this.next())
					};
					const {
						meta: t,
						onError: s,
						onHeartbeat: a
					} = e;
					this.delayIterator = null, this.id = l()(), this.meta = t, this.onError = s, this.onHeartbeat = a, this.sessionTimer = new n, this.startedAt = 0, this.watchTimer = new n
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
					const e = [Object(i.a)(5), Object(i.a)(15), Object(i.a)(30), Object(i.a)(45), Object(i.a)(60)],
						t = Object(i.a)(60);
					this.delayIterator = function*(e, t) {
						const s = function(e, t = 0) {
							let s = t;
							return e.map(e => {
								const t = e - s;
								return s = e, t
							})
						}(e);
						for (const a of s) yield a;
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
					t || "number" != typeof e || (this.timeout = u(this.handleTimeout, e))
				}
				pauseHeartbeats() {
					this.pauseWatchTimer(), this.watchTimer.lap(), this.emitHeartbeat(), this.clearTimeout()
				}
				emitError(e) {
					var t;
					null === (t = this.onError) || void 0 === t || t.call(this, e)
				}
				emitHeartbeat() {
					var e;
					const {
						laps: t
					} = this.watchTimer, s = t[t.length - 1], a = s ? s[0] : 0, r = {
						...this.stats,
						heartbeatDurationMs: a
					};
					null === (e = this.onHeartbeat) || void 0 === e || e.call(this, {
						meta: this.meta,
						stats: r
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
			class b {
				constructor(e, t) {
					if (this.handlePause = () => {
							const e = v.get(this);
							e && !e.isPaused && e.pauseWatchTimer()
						}, this.handlePlay = () => {
							const e = v.get(this);
							e && !e.isPaused && e.startWatchTimer()
						}, this.handleError = e => {
							const t = v.get(this);
							if (!t || t.id !== e.id) return;
							const {
								meta: s
							} = t;
							this.destroySession(), this.startSession(s)
						}, this.handleHeartbeat = ({
							meta: e,
							stats: t
						}) => {
							var s;
							if (!this.video) return;
							const a = v.get(this);
							if (!a || a.id !== t.id) return;
							const r = {
								...t,
								...this.videoStats
							};
							null === (s = this.onHeartbeat) || void 0 === s || s.call(this, {
								meta: e,
								stats: r
							})
						}, "function" != typeof t.onHeartbeat) throw new Error("Invalid video session onHeartbeat callback.");
					this.idleTimer = new n, this.onHeartbeat = t.onHeartbeat, this.attachVideo(e)
				}
				get idle() {
					return this.idleTimer.time >= b.IDLE_THRESHOLD
				}
				get sessionStats() {
					const e = v.get(this);
					return e && e.stats
				}
				get videoStats() {
					if (!this.video) return;
					const {
						currentTime: e,
						duration: t,
						muted: s,
						volume: a
					} = this.video;
					return isNaN(t) ? void 0 : {
						playheadOffsetMs: Object(i.a)(t - e),
						timestampMs: Object(i.a)(e),
						volume: s ? 0 : Math.round(100 * a)
					}
				}
				get stats() {
					return {
						...this.sessionStats,
						...this.videoStats
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
				createSession(e) {
					const t = {
						meta: e,
						onError: this.handleError,
						onHeartbeat: this.handleHeartbeat
					};
					return new p(t)
				}
				startSession(e) {
					if (!this.video) return;
					let t = v.get(this);
					t && !this.idle || (this.destroySession(), t = this.createSession(e), v.set(this, t)), this.idleTimer.reset(), t.startHeartbeats(this.video.paused)
				}
				pauseSession() {
					if (!this.video) return;
					const e = v.get(this);
					e && (e.pauseHeartbeats(), this.idleTimer.start())
				}
				endSession() {
					this.pauseSession(), this.destroySession()
				}
				destroySession() {
					const e = v.get(this);
					e && (e.destroy(), v.delete(this))
				}
				destroy() {
					this.endSession(), this.detachVideo(), delete this.onHeartbeat
				}
			}
			b.IDLE_THRESHOLD = Object(i.a)(300);
			t.a = b
		},
		"./src/lib/VideoSession/util.ts": function(e, t, s) {
			"use strict";

			function a(e) {
				return Math.round(1e3 * e)
			}
			s.d(t, "a", (function() {
				return a
			}))
		},
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t, ...s) {
				let a, r = !1;
				const o = async () => {
					s && s.length ? await e.call(window, ...s) : await e.call(window), r || (a = window.setTimeout(o, t))
				};
				return a = window.setTimeout(o, t), () => {
					r = !0, window.clearTimeout(a)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var a = s("./src/lib/setInterval/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				i = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = new class {
				constructor() {
					this.isInitialized = !1, this.streamOptions = {}, this.currentStreamsRateSec = o.c, this.currentConfigRateSec = o.d, this.heartbeatDelaySec = o.f, this.heartbeatRateSec = o.g, this.statsRefreshRateSec = o.j, this.recommendedViewerSubredditsRefreshRateSec = o.h, this.MIN_RATE_MS = 1e3, this.subscribeConfig = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startConfigWork(e, t, s)), () => this.unsubscribeConfig()), this.subscribeStreams = (e, t = {}) => async (s, a) => (this.streamOptions = t, this.initializeConfig(e, s, a).then(() => this.startStreamsWork(e, this.streamOptions, s, a)), () => this.unsubscribeStreams()), this.subscribeRecommendedViewerSubreddits = () => async (e, t) => (this.startRecommendedViewerSubredditsWork(e, t), () => this.unsubscribeRecommendedViewerSubreddits()), this.subscribeStats = e => async (t, s) => (this.currentStatsId = e, this.startStatsWork(t, s), () => this.unsubscribeStats()), this.subscribeHeartbeat = e => async (t, s) => (this.currentHeartbeatId = e, this.startHeartbeatWork(t, s), () => this.unsubscribeHeartbeat())
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
					const a = Object(c.l)(s());
					a.lastUpdated && (this.currentStreamsRateSec = a.viewer_streams_refresh, this.currentConfigRateSec = a.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(e, t, s) {
					window.clearTimeout(this.configTimeout), await t(Object(r.c)(e));
					const a = Object(c.l)(s()),
						o = a.rpan_config_refresh_rate;
					this.currentConfigRateSec !== o && (this.currentConfigRateSec = o);
					const n = a.viewer_streams_refresh;
					this.currentStreamsRateSec !== n && (this.currentStreamsRateSec = n, this.startStreamsWork(e, this.streamOptions, t, s));
					const i = a.viewer_heartbeat_interval;
					i && this.heartbeatRateSec !== i && this.startHeartbeatWork(t, s);
					const l = a.viewer_heartbeat_interval;
					l && this.statsRefreshRateSec !== l && this.startStatsWork(t, s), this.configTimeout = window.setTimeout(() => this.startConfigWork(e, t, s), this.getConfigTimeout())
				}
				async startStreamsWork(e, t, s, a) {
					window.clearTimeout(this.streamsTimeout), Object(i.d)(a()) ? await s(Object(n.f)(e, t)) : await s(Object(n.e)(e, t)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(e, t, s, a), this.getStreamsTimeout(a()))
				}
				async startRecommendedViewerSubredditsWork(e, t) {
					await this.initializeConfig(o.R, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(r.b)());
					const s = Object(c.l)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(a.a)(() => e(Object(r.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(o.R, e, t), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(c.l)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(a.a)(() => {
						this.currentStatsId && e(Object(n.d)(this.currentStatsId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(o.R, e, t), !this.currentHeartbeatId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(c.l)(t());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const n = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const i = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						l = () => {
							this.currentHeartbeatId && e(Object(r.d)(this.currentHeartbeatId))
						};
					this.clearSendHeartbeatInterval = Object(a.a)(() => {
						l(), this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.clearSendHeartbeatInterval = Object(a.a)(l, i)
					}, n)
				}
				getStreamsTimeout(e) {
					return Math.max(1e3 * (this.currentStreamsRateSec + this.getRandomFetchStreamsJitterSec(e)), this.MIN_RATE_MS)
				}
				getConfigTimeout() {
					return Math.max(1e3 * this.currentConfigRateSec, this.MIN_RATE_MS)
				}
				getRandomFetchStreamsJitterSec(e) {
					const t = Object(c.l)(e).viewer_streams_refresh_slop,
						s = Math.cos(Math.PI * Math.round(Math.random()));
					return Math.random() * t * s
				}
			};
			t.a = l
		},
		"./src/reddit/actions/publicAccessNetwork/votes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				n = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/actions/login.ts");
			Object(a.a)(r.D);
			const u = (e, t) => async (s, a, {
				apiContext: r
			}) => {
				const u = a();
				if (Object(d.J)(u))
					if (Object(c.f)(u)) await Object(n.g)(r(), e, t);
					else {
						await Object(o.d)(e);
						const s = Object(l.l)(a(), e);
						null !== s.post.voteState && Object(i.e)(s.post.voteState) === t || await Object(n.g)(r(), e, t)
					}
				else s(Object(m.i)())
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/config.ts"),
				r = s("./node_modules/lodash/memoize.js"),
				o = s.n(r),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				m = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				u = s("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				h = s("./src/reddit/selectors/experiments/econ/index.ts"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				v = s.n(p);
			const b = d.a.div("Userpic", v.a);
			t.a = o()(({
				defaultImage: e,
				userId: t
			}) => {
				const s = Object(c.e)(h.z),
					{
						processingAvatarImageUrl: r
					} = a.a;
				if (s) return e ? i.a.createElement("img", {
					className: v.a.NewUserpic,
					src: e,
					alt: "user icon"
				}) : i.a.createElement(u.a, {
					className: v.a.NewUserpic,
					userId: t
				});
				const o = (e => e.replace(l.Ib.Account + "_", ""))(t),
					{
						avatar: n,
						color: d
					} = (e => {
						const t = m.length,
							s = parseInt(e, 36),
							a = s % 20 + 1,
							r = Math.floor(s / 20) % t;
						return {
							avatar: ("0" + a).slice(-2),
							color: m[r]
						}
					})(o),
					p = `${r}/avatar_default_${n}_${d}.png`;
				return i.a.createElement(b, {
					"data-testid": "old-default-icon",
					style: {
						backgroundImage: `url(${p})`,
						backgroundColor: `#${d}`
					}
				})
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				roundedIcon: "qzfpAikXRAwHLMGlL6_5m",
				NewUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				newUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.m.less": function(e, t, s) {
			e.exports = {
				defaultAvatar: "_8gjnVWVhueS_hMv9By4wh"
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				c = s.n(i);
			t.a = ({
				className: e,
				style: t = {},
				userId: s
			}) => {
				const {
					processingAvatarImageUrl: r
				} = a.a, i = `url(${r}/defaults/v2/avatar_default_${(e=>{let t=0;for(const s of e)t+=s.charCodeAt();return t%8})(s)}.png)`;
				return o.a.createElement("div", {
					className: Object(n.a)(c.a.avatar, e),
					style: {
						...t,
						backgroundImage: i
					}
				})
			}
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/hls.js/dist/hls.js"),
				n = s.n(o),
				i = s("./src/lib/combineRefs/index.tsx"),
				c = s("./src/lib/env/index.ts");
			const l = 3,
				d = 5e3,
				m = 1e3;
			class u extends a.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoRef = r.a.createRef(), this.onPlayError = e => t => {
						if ("AbortError" === t.name) return;
						const {
							onAutoPlayPrevented: s,
							playMutedOnPrevented: a
						} = this.props;
						if ("NotAllowedError" === t.name) return s && s(), void(a && this.setState({
							...this.state,
							isMuteForced: !0
						}));
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
					return e ? Object(i.a)(this.videoRef, e) : this.videoRef
				}
				destroyHls() {
					this.hls && (this.hls.destroy(), this.props.onHlsDestroy && this.props.onHlsDestroy(this.hls))
				}
				initialize() {
					const {
						autoplay: e,
						startTime: t,
						isPaused: s,
						onHlsCreate: a,
						onLevelLoaded: r,
						onLoadingData: o,
						url: i
					} = this.props;
					if (!i || !this.video) return;
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
					this.hls = c, a && a(c), this.subscribeErrorHandlers(c), c.on(n.a.Events.MANIFEST_LOADING, () => {
						o && o()
					}), c.on(n.a.Events.MANIFEST_PARSED, (a, r) => {
						e && !s && this.video && (this.video.currentTime = t, this.video.play().catch(this.onPlayError(c))), this.setState({
							...this.state,
							isInitialized: !0
						})
					}), c.on(n.a.Events.LEVEL_LOADED, (e, t) => {
						r && r(t.details)
					}), c.loadSource(i), c.attachMedia(this.video)
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
					return Date.now() - this.mediaRecoveryLastAttemptUtc > m && (this.mediaRecoveryAttemptsCount = 0), 0 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), void e.recoverMediaError()) : 1 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), e.swapAudioCodec(), void e.recoverMediaError()) : void this.onIrrecoverableError(e)
				}
				handleFatalNetworkError(e, t) {
					t.details !== n.a.ErrorDetails.FRAG_LOAD_ERROR && t.details !== n.a.ErrorDetails.FRAG_LOAD_TIMEOUT ? this.onIrrecoverableError(e) : this.handleBadFragment(e, t.frag)
				}
				handleBadFragment(e, t) {
					this.resetBadFragmentsCountIfCooldownPassed(), this.fragmentRecoveryAttemptsCount > l || !t ? this.onIrrecoverableError(e) : (this.fragmentRecoveryAttemptsCount++, this.fragmentRecoveryLastAttemptUtc = Date.now(), e.startLoad())
				}
				resetBadFragmentsCountIfCooldownPassed() {
					this.fragmentRecoveryLastAttemptUtc + d < Date.now() && (this.fragmentRecoveryAttemptsCount = 0)
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
					this.hls && this.hls.startLoad(), e && e(), this.state.isMuteForced && this.setState({
						...this.state,
						isMuteForced: !1
					})
				}
				setCurrentTime(e) {
					this.video && (this.video.currentTime = e)
				}
				setVolume(e) {
					this.video && this.video.volume !== e && (this.video.volume = e)
				}
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return g
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "b", (function() {
				return N
			})), s.d(t, "g", (function() {
				return R
			})), s.d(t, "h", (function() {
				return L
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "a", (function() {
				return A
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/components/OverflowMenu/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/Row.tsx"),
				d = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				m = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				u = s("./src/reddit/icons/fonts/Share/index.tsx"),
				h = s("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				p = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				v = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				b = s("./src/reddit/icons/svgs/Report/index.tsx"),
				f = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				w = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				C = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				E = s("./src/reddit/icons/svgs/VideoShare/index.tsx"),
				x = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				_ = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				I = s.n(_);
			const g = ({
					onClick: e
				}) => o.a.createElement("button", {
					className: I.a.shareButton,
					onClick: e,
					"aria-label": a.fbt._("share video", null, {
						hk: "2e71ai"
					}),
					value: "share"
				}, o.a.createElement(u.a, {
					className: I.a.menuIcon
				})),
				k = ({
					isMuted: e,
					onToggle: t
				}) => o.a.createElement("button", {
					className: I.a.muteButton,
					onClick: t,
					"aria-label": a.fbt._("mute video", null, {
						hk: "Enspe"
					}),
					value: "mute"
				}, e ? o.a.createElement(w.a, {
					className: I.a.volumeIcon
				}) : o.a.createElement(x.a, {
					className: I.a.volumeIcon
				})),
				S = n.a.wrapped(m.a, "menuIcon", I.a),
				y = "rpan-overlay-menu",
				N = ({
					onClick: e,
					onHideClick: t,
					onReportClick: s
				}) => o.a.createElement(c.b, {
					className: I.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: y,
					icon: o.a.createElement(S, null),
					onClick: e
				}, o.a.createElement(l.b, {
					className: I.a.overflowItem,
					displayText: a.fbt._("View rules", null, {
						hk: "4lTvzy"
					}),
					iconWrapperClassName: I.a.overflowItemIconWrapper,
					key: `${y}-rules`,
					onClick: () => Object(i.e)(d.S, i.d.BLANK)
				}, o.a.createElement(f.a, {
					className: I.a.overflowItemIcon
				})), o.a.createElement(l.b, {
					className: I.a.overflowItem,
					displayText: a.fbt._("Visit RPAN community", null, {
						hk: "3KZliI"
					}),
					iconWrapperClassName: I.a.overflowItemIconWrapper,
					key: `${y}-community`,
					onClick: () => Object(i.e)(d.Q, i.d.BLANK)
				}, o.a.createElement(v.c, {
					className: I.a.overflowItemIcon
				})), o.a.createElement(l.b, {
					className: I.a.overflowItem,
					displayText: a.fbt._("Report", null, {
						hk: "4oVcnd"
					}),
					iconWrapperClassName: I.a.overflowItemIconWrapper,
					key: `${y}-report`,
					onClick: s
				}, o.a.createElement(b.a, {
					className: I.a.overflowItemIcon
				})), o.a.createElement(l.b, {
					className: I.a.overflowItem,
					displayText: a.fbt._("Hide", null, {
						hk: "1qXTIB"
					}),
					iconWrapperClassName: I.a.overflowItemIconWrapper,
					key: `${y}-hide`,
					onClick: t
				}, o.a.createElement(p.a, {
					className: I.a.overflowItemIcon
				}))),
				R = ({
					onClick: e
				}) => o.a.createElement("button", {
					className: I.a.promptButton,
					onClick: e
				}, o.a.createElement(C.a, null), o.a.createElement("span", null, a.fbt._("Replay Video", null, {
					hk: "1iD2Wj"
				}))),
				L = ({
					onClick: e
				}) => o.a.createElement("button", {
					className: I.a.promptButton,
					onClick: e
				}, o.a.createElement(E.a, null), o.a.createElement("span", null, a.fbt._("Share Video", null, {
					hk: "FYgQy"
				}))),
				T = ({
					onClick: e
				}) => o.a.createElement("button", {
					className: I.a.promptButton,
					onClick: e
				}, o.a.createElement(h.a, {
					className: I.a.crosspostIcon
				}), o.a.createElement("span", null, a.fbt._("Crosspost", null, {
					hk: "gORNr"
				}))),
				A = ({
					onClick: e
				}) => o.a.createElement("button", {
					className: `${I.a.promptButton} ${I.a.awardButton}`,
					onClick: e
				}, o.a.createElement("span", null, a.fbt._("Award Now", null, {
					hk: "STk0L"
				})))
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_3w_dLAoZ36_fPFvFr73Twc",
				visible: "_3xefvVa9iQxtBKfDrIQHK5",
				overlayCenter: "_38XOKvg5Aum-pHj1zsk3Gh",
				muteButton: "_1loeDj0ZNN1lkR8TbCnX5L",
				overlayTitle: "_1NnuLtMElnw61J8beBBk1b",
				overlayTop: "t59TT9rQbiEQkmrsaaYfs",
				menuContainer: "_27178MBeTCoso3gtVeQoIp",
				titleContainer: "S05_Ivx6gzKZmSRXiZa2g",
				menuButton: "s36uqi4axSXHQMgaoux_n",
				shareButton: "_5sKR5rHQgiTK5_-gvLzJ9",
				reportIcon: "_3xY0AQnECn_6gvYN_s0gcK",
				menuIcon: "_1xrQmhCkwYzatHLEBV1tG-",
				videoTitle: "_17PXlsAvhmFm8yKmnpboBI",
				RecordedLabel: "_1YoUYS0LQtaRkt6Je2wbSW",
				recordedLabel: "_1YoUYS0LQtaRkt6Je2wbSW",
				volumeIcon: "_39-jgt3SIm_nk5n7j3QEfp",
				overlayBottom: "_1ZAJ7W6IsblPMAseqf_W_1",
				scrubberBar: "_3i-PRgw3NW9Db-1qAmdcMh",
				intro: "_1CsY8N-fPRu-iQN8ocPZCD",
				prompt: "_1KVVoPIOqNFBVgfKKhI6IJ",
				overflowItemIconWrapper: "_1B5cn8nAxfnEGrx_5yO_Pn",
				overflowItemShareIconWrapper: "_1yj1zqZ3kkITELqdJJu_rL",
				overflowItemIcon: "_2rs0m2DYBYodAJnsjGNR1r",
				promptButtonSet: "_1Iw3svNrJVGVZG8lv_0RkZ",
				promptButton: "_2k4XxsTat5YM_3MLe7Qvlr",
				awardButton: "xXntZktZERg_h5_1RbTAJ",
				awardOverlaySpectacle: "_2KvsuLKnVtlqMTrKCouaF8",
				crosspostIcon: "_3K89LyvZmnoHxqieScyV0A"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_1EF49Psgos8vYl_v7Tflby",
				prompt: "_3q-CHmWq_WQdcLlNanmTlw",
				overlayTopLeft: "_3_ut3gTYu6aZliMETvG4qO",
				overlayTopRight: "_2adYh4QIiecMkKiax2nLBy",
				overlayTop: "-sfg01vEb_tZ17EEtV_1n",
				overlayBottom: "_2Pa8FxBcwFuR-eB88yFeb5",
				meta: "_37KNxMPFQ_aTyagqFCGM8f",
				visible: "MyDXLhLhWFWpDWQxwob4n",
				broadcastStatus: "RkAyxHZcfmYratKiIe6F1",
				subredditInfo: "hWK-1DjIzUQro_Jl7EuW7",
				endBroadcastItem: "_1ZSrZdjsokjz4UfFGhHFJK",
				endBroadcastIcon: "Nqg4E3olZnnFBq1hDMd1l",
				live: "_2MrLGchkK1FzIihZNcSErL",
				subreddit: "_2HJ6_jH0Qxso0BklDa4MY8",
				dropdownLabel: "_2EdFq4jwAX3s-k2ywmNUdA",
				dropdownRow: "_2TUKPRdgdRLBjd4A65bAv8",
				title: "_2BOjTR_ZfK356j4GUU_uP0",
				watchersCount: "_3qmsTjPgq3yEn2MRAvyKWV",
				controls: "_3Ve6YrAPjNqahWzatg2r-G",
				actionButton: "_3ljeo8vtq9QnPE3mBHJzLA",
				checkmarkIcon: "_1AD2nB9gj2sFeuP9eqLTJm",
				joinButton: "M1wl6M6YPUIzVkVKZ7RMx",
				plusIcon: "vnhfQ_Oj9V7tGTplUaavs",
				joinText: "lNpXHxQlf6Kotiochq5Bn",
				actionIcon: "_1m2Qj2Gr-_ZW8QCWjX1c_-",
				shareButton: "_3aLywHN9oVLU-kDGYrO_9Y",
				shareIcon: "_1FiOf9-VyeRBZ03fpzjZzd",
				menuButton: "_2Da-2PvZbZEChxL9motRgr",
				menuIcon: "_1cP74uG4uBeJE6MSnql_Vl",
				votePanel: "_3ARoHXimg9SEIdTS36iYA7",
				voteButton: "_3zRF3x1PVktfO77yiL70dM",
				voteIcon: "zV_29gkXZ2wlev53b5UKw",
				upVoteButton: "_3JZvxzBdRrDL22bOmPikWG",
				voted: "_2mS9j06DUO6bQJiPNNWTYq",
				downVoteButton: "LCSHLUW784jIQ0h3m1oAH",
				score: "_31PjwlFA4843J48jMG4YzK",
				hidden: "_3SFmtJd2uzRfmIgPvi-Yid",
				promptButtonSet: "_2-JNYG0bcwDm13ZkpVuW99",
				awardPromptWrapper: "_1J2SNfou9P_BKlDY42rZgE",
				awardPromptLabel: "_3EmfXMw_zUNf46UsW8EyGZ",
				overflowItem: "_3fblWdGk58C7B4Z-xzpJvc",
				overflowItemIcon: "_3ewXmdMvnO7M4rmOI_4slp",
				overflowItemIconWrapper: "_2SxcFwxbNeVOto1h-N6Xk8",
				shareMenuOverflowItem: "_2dljfU_juYhFbwLAeZ0ygH",
				headerItem: "_1pvWMzMb_uz-A-2Si3SoIl",
				subscribeToProfileButton: "DkFs_kVT8lE3xhsCfwKM_",
				subscribeToProfileAvatar: "_zREeeCx3pI1sg-PeDRDV",
				snoovatarHeadshot: "_1D275qlcFd5Qai7NjYppWD",
				subscribeToProfileStatus: "ya7YWsKVy6B_6Yq6fJcgc",
				isSubscribed: "FJ0cySrU3DrwLTyKRy-Rk"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return z
			})), s.d(t, "h", (function() {
				return Z
			})), s.d(t, "g", (function() {
				return K
			})), s.d(t, "p", (function() {
				return Y
			})), s.d(t, "f", (function() {
				return q
			})), s.d(t, "l", (function() {
				return J
			})), s.d(t, "n", (function() {
				return Q
			})), s.d(t, "r", (function() {
				return $
			})), s.d(t, "j", (function() {
				return ee
			})), s.d(t, "k", (function() {
				return te
			})), s.d(t, "i", (function() {
				return oe
			})), s.d(t, "q", (function() {
				return ne
			})), s.d(t, "d", (function() {
				return me
			})), s.d(t, "o", (function() {
				return ue
			})), s.d(t, "b", (function() {
				return he
			})), s.d(t, "a", (function() {
				return pe
			})), s.d(t, "e", (function() {
				return ve
			})), s.d(t, "s", (function() {
				return be
			})), s.d(t, "m", (function() {
				return fe
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/opener/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				m = s("./src/reddit/actions/publicAccessNetwork/votes.ts"),
				u = s("./src/reddit/actions/subscription/index.ts"),
				h = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				p = s("./src/reddit/components/OverflowMenu/index.tsx"),
				v = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				w = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				C = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				E = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				I = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				g = s("./src/reddit/icons/fonts/Share/index.tsx"),
				k = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				S = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				y = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				N = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				R = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				L = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				T = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				A = s("./src/reddit/icons/svgs/Report/index.tsx"),
				O = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				j = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				M = s("./src/reddit/icons/svgs/Video/index.tsx"),
				V = s("./src/reddit/models/Vote/index.ts"),
				B = s("./src/reddit/selectors/experiments/shareToChatButton.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				F = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				W = s.n(F);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = ({
				children: e
			}) => r.a.createElement("div", {
				className: W.a.broadcastStatus
			}, e), Z = ({
				onClick: e
			}) => r.a.createElement("button", {
				onClick: e
			}, r.a.createElement(K, null)), K = () => U._("{=Live}", [U._param("=Live", r.a.createElement("span", {
				className: W.a.live
			}, U._("Live", null, {
				hk: "8x90I"
			})))], {
				hk: "3ZBbO0"
			}), Y = () => U._("Recorded live", null, {
				hk: "2seH5c"
			}), q = ({
				onSubscribe: e,
				isSubscribed: t
			}) => {
				const [s, o] = Object(a.useState)(!1);
				return Object(a.useEffect)(() => {
					const e = setTimeout(() => {
						o(!1)
					}, 3e3);
					return () => clearTimeout(e)
				}, [s]), t ? s ? r.a.createElement(S.a, {
					className: W.a.checkmarkIcon
				}) : null : r.a.createElement("button", {
					onClick: () => {
						o(!0), e()
					},
					className: W.a.joinButton
				}, r.a.createElement(L.a, {
					className: W.a.plusIcon
				}), r.a.createElement("span", {
					className: W.a.joinText
				}, U._("Join", null, {
					hk: "3n0zBz"
				})))
			}, J = ({
				onSelect: e,
				related: t,
				subreddit: s,
				subreddits: a
			}) => {
				let o = "";
				o = "home" === t ? "All" : "r/popular" === t ? "r/popular" : s || "All";
				const n = a.filter(e => e.prefixedName !== o),
					i = 30 + 35 * n.length;
				return r.a.createElement(p.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: r.a.createElement("span", {
						className: W.a.subreddit
					}, s || "RPAN"),
					style: {
						maxHeight: `${i}px`,
						overflowY: "auto",
						bottom: "0px"
					},
					isFixed: !0
				}, r.a.createElement("div", {
					className: W.a.dropdownLabel
				}, U._("Pick a Community", null, {
					hk: "4AfDwd"
				})), n.map(t => r.a.createElement(f.b, {
					className: W.a.dropdownRow,
					displayText: t.prefixedName,
					key: `rpan-recommended-viewer-subreddits-dropdown-${t.prefixedName}`,
					onClick: () => e(t)
				})))
			}, Q = ({
				text: e
			}) => r.a.createElement("h1", {
				className: W.a.title
			}, e), $ = ({
				broadcast: e,
				live: t
			}) => r.a.createElement("div", {
				className: W.a.watchersCount
			}, t ? r.a.createElement(G, {
				count: Math.max(1, e.continuous_watchers)
			}) : r.a.createElement(X, {
				count: Math.max(1, e.unique_watchers)
			})), G = ({
				count: e
			}) => U._({
				"*": "{number of watchers} watchers",
				_1: "1 watcher"
			}, [U._plural(e, "number of watchers", Object(l.b)(e, {
				displayFull: !0
			}))], {
				hk: "3F0Nj0"
			}), X = ({
				count: e
			}) => U._({
				"*": "{number of views} views",
				_1: "1 view"
			}, [U._plural(e, "number of views", Object(l.b)(e, {
				displayFull: !0
			}))], {
				hk: "tSTjT"
			}), ee = "rpan-overlay-share-menu", te = ({
				onClickCrosspost: e,
				onClickVideoShare: t,
				onClickShare: s,
				onClickShareToChat: a
			}) => {
				const n = Object(o.e)(B.a);
				return r.a.createElement(p.b, {
					className: W.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: ee,
					onClick: s,
					icon: r.a.createElement(g.a, null)
				}, r.a.createElement(f.b, {
					className: W.a.menuOverflowItem,
					displayText: U._("Copy Link", null, {
						hk: "2oo038"
					}),
					iconWrapperClassName: W.a.overflowItemShareIconWrapper,
					key: `${re}-share`,
					onClick: t
				}, r.a.createElement(x.a, {
					name: "link_post",
					className: W.a.linkIcon
				})), r.a.createElement(f.b, {
					className: W.a.menuOverflowItem,
					displayText: U._("Crosspost", null, {
						hk: "QSd6Z"
					}),
					iconWrapperClassName: W.a.overflowItemShareIconWrapper,
					key: `${re}-crosspost`,
					onClick: e
				}, r.a.createElement(x.a, {
					name: "crosspost",
					className: W.a.overflowItemIcon
				})), n && r.a.createElement(f.b, {
					className: W.a.menuOverflowItem,
					displayText: U._("Share to Chat", null, {
						hk: "2uVgxZ"
					}),
					iconWrapperClassName: W.a.overflowItemShareIconWrapper,
					key: `${re}-sharetochat`,
					onClick: a
				}, r.a.createElement(x.a, {
					name: "chat",
					className: W.a.overflowItemIcon
				})))
			}, se = i.a.wrapped(I.a, "menuIcon", W.a), ae = e => {
				let t = 186;
				if (e) {
					t += 74 + 40
				}
				return t
			}, re = "rpan-overlay-menu", oe = ({
				onClick: e,
				onHideClick: t,
				onReportClick: s,
				onToggleLockClick: a,
				isCommentsLocked: o,
				hasModeratorPermissions: n,
				onEndBroadcastClick: i,
				onRpanStudioClick: l,
				subreddit: m
			}) => r.a.createElement(p.b, {
				className: W.a.menuButton,
				defaultButtonOutline: !0,
				dropdownId: re,
				icon: r.a.createElement(se, null),
				onClick: e,
				style: {
					maxHeight: `${ae(n)}px`,
					overflowY: "auto",
					bottom: "0px"
				}
			}, r.a.createElement(f.b, {
				className: W.a.overflowItem,
				displayText: U._("View rules", null, {
					hk: "haY6r"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${re}-rules`,
				onClick: () => Object(c.e)(d.S, c.d.BLANK)
			}, r.a.createElement(O.a, {
				className: W.a.overflowItemIcon
			})), r.a.createElement(f.b, {
				className: W.a.overflowItem,
				displayText: U._("Stream from desktop", null, {
					hk: "4dOdik"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${re}-rpanstudio`,
				onClick: l
			}, r.a.createElement(M.a, {
				className: W.a.overflowItemIcon
			})), r.a.createElement(f.b, {
				className: W.a.overflowItem,
				displayText: U._("Visit community", null, {
					hk: "2KViLk"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${re}-community`,
				onClick: () => {
					Object(c.e)(Object(C.a)(m), c.d.BLANK)
				}
			}, (e => {
				const t = e && Object(w.a)({
					subreddit: e
				});
				return t ? r.a.createElement("img", {
					className: W.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					},
					src: t
				}) : r.a.createElement(y.a, {
					className: W.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					}
				})
			})(m)), r.a.createElement(f.b, {
				className: W.a.overflowItem,
				displayText: U._("Report", null, {
					hk: "4oVcnd"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${re}-report`,
				onClick: s
			}, r.a.createElement(A.a, {
				className: W.a.overflowItemIcon
			})), r.a.createElement(f.b, {
				className: W.a.overflowItem,
				displayText: U._("Hide", null, {
					hk: "15vs9C"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${re}-hide`,
				onClick: t
			}, r.a.createElement(N.a, {
				className: W.a.overflowItemIcon
			})), n && r.a.createElement(r.a.Fragment, null, r.a.createElement(f.b, {
				className: W.a.headerItem,
				displayText: U._("Mod Actions", null, {
					hk: "19zCiw"
				}),
				key: `${re}-modaction`,
				onClick: () => {}
			}), r.a.createElement(f.b, {
				className: W.a.overflowItem,
				displayText: o ? U._("Unlock comments", null, {
					hk: "Btg6R"
				}) : U._("Lock comments", null, {
					hk: "3Ew6q9"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${re}-lock`,
				onClick: a
			}, o ? r.a.createElement(j.a, {
				className: W.a.overflowItemIcon
			}) : r.a.createElement(R.a, {
				className: W.a.overflowItemIcon
			})), r.a.createElement(f.b, {
				className: W.a.endBroadcastItem,
				displayText: U._("Remove broadcast", null, {
					hk: "3GaDuI"
				}),
				iconWrapperClassName: W.a.overflowItemIconWrapper,
				key: `${re}-end`,
				onClick: i
			}, r.a.createElement(T.a, {
				className: W.a.endBroadcastIcon
			})))), ne = Object(o.b)(null, e => ({
				vote: (t, s) => e(Object(m.a)(t, s))
			}))(class extends a.Component {
				constructor(e) {
					super(e), this.handleUpVote = () => {
						const e = this.toggleVoteState(V.a.upvoted);
						this.vote(e)
					}, this.handleDownVote = () => {
						const e = this.toggleVoteState(V.a.downvoted);
						this.vote(e)
					}, this.state = {
						voteStates: new Map
					}
				}
				get voteState() {
					return this.state.voteStates.get(this.props.broadcast.post.id)
				}
				get score() {
					const {
						score: e,
						voteState: t
					} = this.props.broadcast.post;
					return null == e ? null : t && void 0 !== this.voteState ? e - Object(V.e)(t) + this.voteState : e
				}
				componentDidMount() {
					this.setVoteStateFromBroadcastProp()
				}
				componentDidUpdate(e) {
					const {
						id: t
					} = this.props.broadcast.post, s = t !== e.broadcast.post.id, a = this.state.voteStates.has(t);
					s && !a && this.setVoteStateFromBroadcastProp()
				}
				render() {
					const e = this.voteState === V.a.upvoted,
						t = this.voteState === V.a.downvoted;
					return r.a.createElement("div", {
						className: W.a.votePanel
					}, r.a.createElement(ie, {
						onClick: this.handleUpVote,
						voted: e
					}), null !== this.score ? r.a.createElement(le, {
						score: this.score
					}) : null, r.a.createElement(ce, {
						onClick: this.handleDownVote,
						voted: t
					}))
				}
				setVoteStateFromBroadcastProp() {
					const {
						id: e,
						voteState: t
					} = this.props.broadcast.post;
					this.setVoteState(e, Object(V.e)(t))
				}
				setVoteState(e, t) {
					const {
						voteStates: s
					} = this.state;
					if (!s.has(e) || s.get(e) !== t) {
						const a = new Map(s);
						a.set(e, t), this.setState({
							voteStates: a
						})
					}
				}
				toggleVoteState(e) {
					return e === this.voteState ? V.a.notVoted : e
				}
				vote(e) {
					const {
						broadcast: t,
						onUpvote: s,
						onDownvote: a
					} = this.props, {
						id: r
					} = t.post;
					this.setVoteState(r, e), this.props.vote(r, e), e === V.a.upvoted ? s() : e === V.a.downvoted && a()
				}
			}), ie = ({
				onClick: e,
				voted: t
			}) => r.a.createElement("button", {
				className: Object(n.a)(W.a.voteButton, W.a.upVoteButton, {
					[W.a.voted]: t
				}),
				onClick: e,
				value: "upvote",
				"aria-label": U._("Upvote", null, {
					hk: "Ufd6r"
				})
			}, r.a.createElement(k.a, {
				className: W.a.voteIcon
			})), ce = ({
				onClick: e,
				voted: t
			}) => r.a.createElement("button", {
				className: Object(n.a)(W.a.voteButton, W.a.downVoteButton, {
					[W.a.voted]: t
				}),
				onClick: e,
				value: "downvote",
				"aria-label": U._("Downvote", null, {
					hk: "ZDRA3"
				})
			}, r.a.createElement(_.a, {
				className: W.a.voteIcon
			})), le = ({
				score: e
			}) => r.a.createElement("div", {
				className: W.a.score
			}, Object(l.b)(e)), de = ({
				children: e
			}) => r.a.createElement("div", {
				className: W.a.prompt
			}, e), me = () => r.a.createElement(de, null, U._("Connection issues", null, {
				hk: "hIrnJ"
			})), ue = () => r.a.createElement(de, null, U._("Tuning...", null, {
				hk: "3dG7Ks"
			})), he = () => r.a.createElement(de, null, U._("Broadcast paused", null, {
				hk: "jxvku"
			})), pe = ({
				onClickCrosspost: e,
				onClickReplay: t,
				onClickShare: s
			}) => r.a.createElement(de, null, r.a.createElement("div", {
				className: W.a.promptButtonSet
			}, r.a.createElement(H.g, {
				onClick: t
			}), r.a.createElement(H.h, {
				onClick: s
			}), r.a.createElement(H.f, {
				onClick: e
			}))), ve = ({
				onClickAward: e
			}) => r.a.createElement(de, null, r.a.createElement("div", {
				className: W.a.awardPromptWrapper
			}, r.a.createElement("div", {
				className: W.a.awardPromptLabel
			}, U._("Award this broadcast to give it more airtime", null, {
				hk: "20jmEz"
			})), r.a.createElement(H.a, {
				onClick: e
			}))), be = e => {
				if (!e) return !1;
				const {
					id: t,
					name: s
				} = e;
				return !(!t || !s || "string" != typeof t || "string" != typeof s)
			}, fe = ({
				profile: e,
				currentStream: t,
				onSubscriptionChange: s
			}) => {
				const {
					name: a
				} = e, o = we(a), n = Ce(a), i = Ee(a, !n), c = n ? U._("Unfollow u/{name}", [U._param("name", a)], {
					hk: "2n0wqa"
				}) : U._("Follow u/{name}", [U._param("name", a)], {
					hk: "20X8Bw"
				}), l = r.a.createElement("button", {
					className: W.a.subscribeToProfileButton,
					onClick: () => {
						s(!n), i()
					},
					title: c
				}, r.a.createElement(xe, {
					profile: e
				}), r.a.createElement(_e, {
					isSubscribed: n
				}));
				return o && o.enableFollowers ? l : null
			}, we = e => Object(o.e)(t => Object(P.mb)(t, {
				userName: e
			})), Ce = e => Object(o.e)(t => Object(D.db)(t, {
				identifier: {
					name: e,
					type: b.a.PROFILE
				}
			})), Ee = (e, t) => {
				const s = Object(o.d)();
				return Object(a.useCallback)(() => {
					s(Object(u.d)([{
						name: e,
						type: b.a.PROFILE
					}], t))
				}, [s, e, t])
			}, xe = ({
				profile: e
			}) => {
				const {
					id: t,
					name: s
				} = e, a = we(s), o = ke(a), i = o && Object(E.a)(a.accountIcon);
				return r.a.createElement("div", {
					className: Object(n.a)(W.a.subscribeToProfileAvatar, {
						[W.a.snoovatarHeadshot]: i
					})
				}, a ? o ? i ? r.a.createElement(v.a, {
					headshot: a.accountIcon
				}) : r.a.createElement("img", {
					src: a.accountIcon
				}) : r.a.createElement(h.a, {
					userId: t
				}) : null)
			}, _e = ({
				isSubscribed: e
			}) => r.a.createElement("div", {
				className: Object(n.a)(W.a.subscribeToProfileStatus, {
					[W.a.isSubscribed]: e
				})
			}, e ? r.a.createElement(Ie, null) : r.a.createElement(ge, null)), Ie = () => r.a.createElement("svg", {
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M17.7072 5.69337L16.3083 4.29337C16.1203 4.10537 15.8662 4.00037 15.6012 4.00037C15.3352 4.00037 15.0812 4.10537 14.8942 4.29337L7.90025 11.2864L5.10725 8.49337C4.71725 8.10237 4.08425 8.10237 3.69325 8.49337L2.29325 9.89337C1.90225 10.2844 1.90225 10.9174 2.29325 11.3074L7.19325 16.2074C7.38925 16.4024 7.64425 16.5004 7.90025 16.5004C8.15625 16.5004 8.41225 16.4024 8.60725 16.2074L17.7072 7.10737C18.0982 6.71637 18.0982 6.08437 17.7072 5.69337"
			})), ge = () => r.a.createElement("svg", {
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M12.8,6.4 L9.6,6.4 L9.6,3.2 C9.6,2.7576 9.2424,2.4 8.8,2.4 L7.2,2.4 C6.7576,2.4 6.4,2.7576 6.4,3.2 L6.4,6.4 L3.2,6.4 C2.7584,6.4 2.4,6.7576 2.4,7.2 L2.4,8.8 C2.4,9.2424 2.7584,9.6 3.2,9.6 L6.4,9.6 L6.4,12.8 C6.4,13.2424 6.7576,13.6 7.2,13.6 L8.8,13.6 C9.2424,13.6 9.6,13.2424 9.6,12.8 L9.6,9.6 L12.8,9.6 C13.2424,9.6 13.6,9.2424 13.6,8.8 L13.6,7.2 C13.6,6.7576 13.2424,6.4 12.8,6.4"
			})), ke = e => {
				const t = Object(o.e)(P.k),
					s = Object(o.e)(P.C),
					a = Object(o.e)(P.db);
				return !!e && (!!e.accountIcon && (!!t && (t.id === e.id || (!e.isNSFW || !!a && !s))))
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var a = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(a.a)(e).banner.iconImage ? String(Object(a.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("menu",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			const o = e => r.a.createElement("svg", {
					className: e.className,
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M5.00001 13.41C4.91441 13.4079 4.82982 13.391 4.75001 13.36C4.36493 13.225 3.99331 13.0542 3.64001 12.85L1.53001 13.37C1.4053 13.4019 1.27448 13.4012 1.15014 13.3679C1.02579 13.3347 0.912098 13.27 0.820006 13.18C0.729222 13.0864 0.664059 12.971 0.630783 12.8449C0.597508 12.7188 0.59724 12.5862 0.630006 12.46L1.15001 10.36C0.684603 9.54657 0.393688 8.64513 0.295784 7.71309C0.197881 6.78105 0.295135 5.83883 0.581353 4.94644C0.867572 4.05404 1.33648 3.23103 1.95823 2.5298C2.57997 1.82857 3.34092 1.2645 4.19263 0.873491C5.04433 0.482487 5.96813 0.273123 6.90519 0.258731C7.84225 0.244338 8.77204 0.425233 9.63535 0.789896C10.4987 1.15456 11.2766 1.695 11.9196 2.3768C12.5626 3.05861 13.0565 3.86683 13.37 4.75001C13.4032 4.83336 13.4213 4.92181 13.4236 5.01127C13.0459 4.9912 12.6656 4.99785 12.2855 5.03189C10.5542 5.18694 8.92053 5.90165 7.6316 7.06789C6.34267 8.23414 5.46866 9.78846 5.1418 11.4957C5.02032 12.1302 4.97688 12.773 5.00962 13.4104L5.00001 13.41ZM13 19.75C11.8204 19.7506 10.6615 19.4401 9.64004 18.85L7.53004 19.37C7.40533 19.4019 7.27451 19.4012 7.15017 19.3679C7.02582 19.3347 6.91213 19.2699 6.82004 19.18C6.72925 19.0864 6.66409 18.971 6.63081 18.8449C6.59754 18.7188 6.59727 18.5862 6.63004 18.46L7.15004 16.36C6.41066 15.0718 6.11686 13.5756 6.31416 12.1034C6.51145 10.6312 7.18884 9.26522 8.24132 8.21711C9.29381 7.169 10.6626 6.49731 12.1356 6.30615C13.6086 6.11498 15.1035 6.41502 16.3887 7.15975C17.6739 7.90448 18.6775 9.05233 19.244 10.4254C19.8106 11.7984 19.9084 13.32 19.5224 14.7543C19.1363 16.1886 18.288 17.4556 17.1088 18.3588C15.9296 19.2619 14.4854 19.751 13 19.75Z",
					fill: "inherit"
				})),
				n = e => r.a.createElement("svg", {
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "inherit",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.426 16.3838C11.243 16.3088 11.0765 16.1978 10.9385 16.0598L6.43867 11.56C5.85369 10.9751 5.85369 10.0256 6.43867 9.43912C7.02515 8.85414 7.97461 8.85414 8.56108 9.43912L10.5005 11.3785V1.49994C10.5005 0.671973 11.171 0 12.0004 0C12.8284 0 13.5004 0.671973 13.5004 1.49994V11.3785L15.4383 9.43912C16.0248 8.85414 16.9742 8.85414 17.5607 9.43912C18.1457 10.0256 18.1457 10.9751 17.5607 11.56L13.0609 16.0598C12.9229 16.1978 12.7564 16.3088 12.5734 16.3838C12.3889 16.4603 12.1954 16.4993 12.0004 16.4993C11.804 16.4993 11.6105 16.4603 11.426 16.3838ZM20.9991 15.0003C20.9991 14.1724 21.6711 13.5004 22.4991 13.5004C23.3271 13.5004 23.999 14.1724 23.999 15.0003V19.5002C23.999 21.9811 21.9801 24 19.4992 24H4.49982C2.01892 24 0 21.9811 0 19.5002V15.0003C0 14.1724 0.671973 13.5004 1.49994 13.5004C2.32791 13.5004 2.99988 14.1724 2.99988 15.0003V19.5002C2.99988 20.3266 3.67335 21.0001 4.49982 21.0001H19.4992C20.3257 21.0001 20.9991 20.3266 20.9991 19.5002V15.0003Z",
					fill: "inherit"
				})),
				i = e => r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, r.a.createElement("path", {
					d: "M5,3.723h9v-2H5a3,3,0,0,0-3,3H4A1,1,0,0,1,5,3.723Z"
				}), r.a.createElement("path", {
					d: "M19.294,7.429A1.116,1.116,0,0,0,18.5,7.1h-.009l-2.345.018a1.117,1.117,0,0,0-.613.185h0L13.626,8.562V7.223A1.127,1.127,0,0,0,12.5,6.1H1.5A1.127,1.127,0,0,0,.376,7.223v3.494a8.5,8.5,0,0,1,7.652,7.631H12.5a1.127,1.127,0,0,0,1.125-1.125V15.884l1.91,1.26a1.145,1.145,0,0,0,.609.184l2.347.016H18.5a1.125,1.125,0,0,0,1.125-1.125V8.226A1.116,1.116,0,0,0,19.294,7.429Z"
				}), r.a.createElement("path", {
					d: "M.374,14.764v1.29a3.221,3.221,0,0,1,2.311,2.294H3.971A4.481,4.481,0,0,0,.374,14.764Z"
				}), r.a.createElement("path", {
					d: "M.374,12.1v1.275a5.857,5.857,0,0,1,5.007,4.973H6.644A7.12,7.12,0,0,0,.374,12.1Z"
				})))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"
			})))
		},
		"./src/reddit/icons/svgs/Rules/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 30 30",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M20.7094669,9.4275 L9.29053307,9.4275 C8.86319398,9.4275 8.51636806,9.0915 8.51636806,8.6775 C8.51636806,8.2635 8.86319398,7.9275 9.29053307,7.9275 L20.7094669,7.9275 C21.136806,7.9275 21.4836319,8.2635 21.4836319,8.6775 C21.4836319,9.0915 21.136806,9.4275 20.7094669,9.4275 M20.7094669,14.142 L9.29053307,14.142 C8.86319398,14.142 8.51636806,13.806 8.51636806,13.392 C8.51636806,12.978 8.86319398,12.642 9.29053307,12.642 L20.7094669,12.642 C21.136806,12.642 21.4836319,12.978 21.4836319,13.392 C21.4836319,13.806 21.136806,14.142 20.7094669,14.142 M20.7094669,18.858 L9.29053307,18.858 C8.86319398,18.858 8.51636806,18.522 8.51636806,18.108 C8.51636806,17.6925 8.86319398,17.358 9.29053307,17.358 L20.7094669,17.358 C21.136806,17.358 21.4836319,17.6925 21.4836319,18.108 C21.4836319,18.522 21.136806,18.858 20.7094669,18.858 M20.7094669,23.5725 L9.29053307,23.5725 C8.86319398,23.5725 8.51636806,23.2365 8.51636806,22.8225 C8.51636806,22.407 8.86319398,22.0725 9.29053307,22.0725 L20.7094669,22.0725 C21.136806,22.0725 21.4836319,22.407 21.4836319,22.8225 C21.4836319,23.2365 21.136806,23.5725 20.7094669,23.5725 M23.95167,4.5 L20.4570891,4.5 C19.9198186,3.6075 18.9335324,3 17.7893165,3 L12.2106835,3 C11.0664676,3 10.0801814,3.6075 9.54291086,4.5 L6.04833002,4.5 C5.19365185,4.5 4.5,5.172 4.5,6 L4.5,25.5 C4.5,26.328 5.19365185,27 6.04833002,27 L23.95167,27 C24.8063482,27 25.5,26.328 25.5,25.5 L25.5,6 C25.5,5.172 24.8063482,4.5 23.95167,4.5"
			})))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				transform: "translate(3, 4)"
			}, r.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/icons/svgs/VideoShare/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "fpaVW-I8iox1soX0hTuwb"
			}
		},
		"./src/reddit/icons/svgs/VideoShare/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				i = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 64 64",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("circle", {
				cx: "32",
				cy: "32",
				r: "30.72",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "2.4576"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M42.59 27.9447L35.18 21.5931C34.8212 21.2847 34.3292 21.2175 33.8984 21.4143C33.4676 21.6123 33.2 22.0299 33.2 22.5039V24.7995C29.5004 24.7995 26.5472 26.0031 24.4232 28.3755C21.6128 31.5159 20.4992 36.5271 21.2036 42.8667C21.2372 43.1715 21.4952 43.3995 21.7988 43.3995C21.8108 43.3995 21.8216 43.3995 21.8336 43.3983C22.1504 43.3815 22.4 43.1187 22.4 42.7995C22.4 39.3039 23.5508 36.4155 25.7276 34.4451C27.7148 32.6475 30.4868 31.7307 33.14 31.9971C33.1604 31.9983 33.1796 31.9911 33.2 31.9911V34.2951C33.2 34.7691 33.4676 35.1879 33.8984 35.3859C34.0616 35.4603 34.2332 35.4975 34.4036 35.4975C34.682 35.4975 34.9568 35.3979 35.18 35.2071L42.59 28.8555C42.7232 28.7415 42.8 28.5747 42.8 28.3995C42.8 28.2243 42.7232 28.0587 42.59 27.9447Z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit.c9f3ef2564ccfe2807fd.js.map