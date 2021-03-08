// https://www.redditstatic.com/desktop2x/RpanListingUnit.ce33d89e8336f2d3e658.js
// Retrieved at 3/8/2021, 3:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RpanListingUnit"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var r = s("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return r(e) + t
			}
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/cache/localStorage/index.ts"),
				c = s("./src/lib/combineRefs/index.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(d.a)(() => s.e("MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts");
			const h = Object(n.a)(e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.hc
				});
				return Object(m.ud)(t) ? void 0 : t
			}, e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.ic
				});
				return Object(m.ud)(t) ? void 0 : t
			}, (e, t) => e === m.jc.Enabled && t === m.jc.Enabled);
			var p = s("./src/config.ts");
			var b = s("./src/reddit/selectors/user.ts");
			const v = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						r = new Uint32Array(e);
					return crypto.getRandomValues(r), Array.from(r).map(e => t.charAt(e % s)).join("")
				},
				f = (e = new Date) => new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3"),
				E = (e, t = 0) => Math.trunc(e).toString(16).padStart(t, "0");
			var x;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(x || (x = {}));
			const g = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					r = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(r)).map(E).join("")
			})(x.SHA1, e);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				S = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: p.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: `Reddit/Version Build ${p.a.buildNumber} ${p.a.appName}`,
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: s,
					debug: d,
					disableCookies: m,
					envKey: u,
					localStorageSaltKey: p,
					localStorageViewerUserIdKey: E,
					playerName: x,
					playerVersion: I,
					respectDoNotTrack: y,
					saltLength: _,
					saltTimeToLive: N,
					viewerUserIdLength: O
				} = {
					...S,
					...t
				};
				class k extends r.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(r.createRef)(), this.handleDashCreate = e => this.setDashInstance(e), this.handleDashDestroy = () => this.setDashInstance(null), this.handleHlsCreate = e => this.setHlsInstance(e), this.handleHlsDestroy = () => this.setHlsInstance(null), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
					componentWillUnmount() {
						this.handleDashDestroy(), this.handleHlsDestroy()
					}
					combineExternalVideoRef(e) {
						return e ? Object(c.a)(this.videoRef, e) : this.videoRef
					}
					render() {
						const {
							forwardedRef: t,
							...s
						} = this.props, r = s;
						return a.a.createElement(e, C({}, r, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: t,
							videoRef: this.combinedVideoRefs
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const {
								video: e
							} = this, t = await l();
							e && t.removeDashJS(e), this.video && this.dashInstance && t.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const {
								video: e
							} = this, t = await l();
							e && t.removeHLSJS(e), this.video && this.hlsInstance && t.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await l();
							if (this.isMonitoring) {
								if (this.video) {
									const t = this.getVideoData();
									e.emit(this.video, "videochange", t)
								}
							} else {
								const t = await this.getMuxData();
								this.video && (e.monitor(this.video, t), this.isMonitoring = !0)
							}
						} catch (e) {
							console.error(e)
						}
					}
					async encryptViewerUserId() {
						const e = this.props.redditUserId || k.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = `${f()}${e}${t}`;
						return (await g(s)).substr(0, k.VIEWER_USER_ID_LENGTH)
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
						return {
							debug: k.DEBUG,
							disableCookies: k.DISABLE_COOKIES,
							respectDoNotTrack: k.RESPECT_DO_NOT_TRACK,
							...s,
							data: {
								env_key: k.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: k.PLAYER_NAME,
								player_version: k.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = k.LOCAL_STORAGE_SALT_KEY;
						let t = Object(o.a)(e);
						return t || (t = v(k.SALT_LENGTH), Object(o.b)(e, t, k.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return {
							...this.getDashInstanceData(),
							...this.getHlsInstanceData()
						}
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: r
						} = this.props;
						return {
							video_duration: s ? k.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? k.STREAM_TYPE_LIVE : k.STREAM_TYPE_ON_DEMAND,
							video_title: r
						}
					}
				}
				k.displayName = w(e), k.ANONYMOUS_USER_ID = s, k.DEBUG = d, k.DISABLE_COOKIES = m, k.DURATION_LIVE = 1 / 0, k.ENV_KEY = u, k.LOCAL_STORAGE_SALT_KEY = p, k.LOCAL_STORAGE_VIEWER_USER_ID_KEY = E, k.PLAYER_NAME = x, k.PLAYER_VERSION = I, k.RESPECT_DO_NOT_TRACK = y, k.SALT_LENGTH = _, k.SALT_TIME_TO_LIVE = N, k.STREAM_TYPE_LIVE = "live", k.STREAM_TYPE_ON_DEMAND = "on-demand", k.VIEWER_USER_ID_LENGTH = O;
				const R = Object(r.forwardRef)((e, t) => a.a.createElement(k, C({}, e, {
						forwardedRef: t
					}))),
					T = Object(n.c)({
						redditUserId: b.g,
						isMuxEnabled: h
					});
				return Object(i.b)(T, null, null, {
					forwardRef: !0
				})(R)
			}
		},
		"./src/lib/VideoSession/VideoSessionManager.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = new WeakMap,
				a = new WeakMap,
				i = new WeakMap;
			class n {
				get laps() {
					return r.get(this).slice(1)
				}
				get paused() {
					return !a.has(this)
				}
				get time() {
					const e = Date.now(),
						t = i.get(this);
					return this.paused ? t : t + (e - a.get(this))
				}
				constructor() {
					this.reset()
				}
				start() {
					this.paused && a.set(this, Date.now())
				}
				pause() {
					this.paused || (i.set(this, this.time), a.delete(this))
				}
				reset() {
					r.set(this, [
						[0, 0]
					]), i.set(this, 0), a.delete(this)
				}
				lap() {
					const {
						time: e
					} = this, t = r.get(this), s = [e - t[t.length - 1][1], e];
					return r.set(this, [...t, s]), s
				}
			}
			var o = s("./src/lib/VideoSession/util.ts"),
				c = s("./node_modules/uuid/v4.js"),
				d = s.n(c);
			const l = 1e4;

			function m(e, t) {
				return {
					startedAt: e,
					expectedAt: e + t,
					completedAt: Date.now()
				}
			}

			function u(e, t = 0, s, ...r) {
				return function(e, t = 0, ...s) {
					const r = Date.now();
					return setTimeout((...s) => {
						const a = m(r, t);
						return e(a, ...s)
					}, t, ...s)
				}(h(e, s), t, ...r)
			}

			function h(e, t = l) {
				return function(s, ...r) {
					const a = function(e, t) {
						const {
							completedAt: s,
							expectedAt: r
						} = e, a = s > r + t;
						return {
							...e,
							expired: a
						}
					}(s, t);
					return e(a, ...r)
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
						onHeartbeat: r
					} = e;
					this.delayIterator = null, this.id = d()(), this.meta = t, this.onError = s, this.onHeartbeat = r, this.sessionTimer = new n, this.startedAt = 0, this.watchTimer = new n
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
					const e = [Object(o.a)(5), Object(o.a)(15), Object(o.a)(30), Object(o.a)(45), Object(o.a)(60)],
						t = Object(o.a)(60);
					this.delayIterator = function*(e, t) {
						const s = function(e, t = 0) {
							let s = t;
							return e.map(e => {
								const t = e - s;
								return s = e, t
							})
						}(e);
						for (const r of s) yield r;
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
					} = this.watchTimer, s = t[t.length - 1], r = s ? s[0] : 0, a = {
						...this.stats,
						heartbeatDurationMs: r
					};
					null === (e = this.onHeartbeat) || void 0 === e || e.call(this, {
						meta: this.meta,
						stats: a
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
			const b = new WeakMap;
			class v {
				constructor(e, t) {
					if (this.handlePause = () => {
							const e = b.get(this);
							e && !e.isPaused && e.pauseWatchTimer()
						}, this.handlePlay = () => {
							const e = b.get(this);
							e && !e.isPaused && e.startWatchTimer()
						}, this.handleError = e => {
							const t = b.get(this);
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
							const r = b.get(this);
							if (!r || r.id !== t.id) return;
							const a = {
								...t,
								...this.videoStats
							};
							null === (s = this.onHeartbeat) || void 0 === s || s.call(this, {
								meta: e,
								stats: a
							})
						}, "function" != typeof t.onHeartbeat) throw new Error("Invalid video session onHeartbeat callback.");
					this.idleTimer = new n, this.onHeartbeat = t.onHeartbeat, this.attachVideo(e)
				}
				get idle() {
					return this.idleTimer.time >= v.IDLE_THRESHOLD
				}
				get sessionStats() {
					const e = b.get(this);
					return e && e.stats
				}
				get videoStats() {
					if (!this.video) return;
					const {
						currentTime: e,
						duration: t,
						muted: s,
						volume: r
					} = this.video;
					return isNaN(t) ? void 0 : {
						playheadOffsetMs: Object(o.a)(t - e),
						timestampMs: Object(o.a)(e),
						volume: s ? 0 : Math.round(100 * r)
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
					let t = b.get(this);
					t && !this.idle || (this.destroySession(), t = this.createSession(e), b.set(this, t)), this.idleTimer.reset(), t.startHeartbeats(this.video.paused)
				}
				pauseSession() {
					if (!this.video) return;
					const e = b.get(this);
					e && (e.pauseHeartbeats(), this.idleTimer.start())
				}
				endSession() {
					this.pauseSession(), this.destroySession()
				}
				destroySession() {
					const e = b.get(this);
					e && (e.destroy(), b.delete(this))
				}
				destroy() {
					this.endSession(), this.detachVideo(), delete this.onHeartbeat
				}
			}
			v.IDLE_THRESHOLD = Object(o.a)(300);
			t.a = v
		},
		"./src/lib/VideoSession/util.ts": function(e, t, s) {
			"use strict";

			function r(e) {
				return Math.round(1e3 * e)
			}
			s.d(t, "a", (function() {
				return r
			}))
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, s) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t, ...s) {
				let r, a = !1;
				const i = async () => {
					s && s.length ? await e.call(window, ...s) : await e.call(window), a || (r = window.setTimeout(i, t))
				};
				return r = window.setTimeout(i, t), () => {
					a = !0, window.clearTimeout(r)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/setInterval/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const d = new class {
				constructor() {
					this.isInitialized = !1, this.streamOptions = {}, this.currentStreamsRateSec = i.c, this.currentConfigRateSec = i.d, this.heartbeatDelaySec = i.f, this.heartbeatRateSec = i.g, this.statsRefreshRateSec = i.j, this.recommendedViewerSubredditsRefreshRateSec = i.h, this.MIN_RATE_MS = 1e3, this.subscribeConfig = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startConfigWork(e, t, s)), () => this.unsubscribeConfig()), this.subscribeStreams = (e, t = {}) => async (s, r) => (this.streamOptions = t, this.initializeConfig(e, s, r).then(() => this.startStreamsWork(e, this.streamOptions, s, r)), () => this.unsubscribeStreams()), this.subscribeRecommendedViewerSubreddits = () => async (e, t) => (this.startRecommendedViewerSubredditsWork(e, t), () => this.unsubscribeRecommendedViewerSubreddits()), this.subscribeStats = e => async (t, s) => (this.currentStatsId = e, this.startStatsWork(t, s), () => this.unsubscribeStats()), this.subscribeHeartbeat = e => async (t, s) => (this.currentHeartbeatId = e, this.startHeartbeatWork(t, s), () => this.unsubscribeHeartbeat())
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
					const r = Object(c.l)(s());
					r.lastUpdated && (this.currentStreamsRateSec = r.viewer_streams_refresh, this.currentConfigRateSec = r.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(e, t, s) {
					window.clearTimeout(this.configTimeout), await t(Object(a.c)(e));
					const r = Object(c.l)(s()),
						i = r.rpan_config_refresh_rate;
					this.currentConfigRateSec !== i && (this.currentConfigRateSec = i);
					const n = r.viewer_streams_refresh;
					this.currentStreamsRateSec !== n && (this.currentStreamsRateSec = n, this.startStreamsWork(e, this.streamOptions, t, s));
					const o = r.viewer_heartbeat_interval;
					o && this.heartbeatRateSec !== o && this.startHeartbeatWork(t, s);
					const d = r.viewer_heartbeat_interval;
					d && this.statsRefreshRateSec !== d && this.startStatsWork(t, s), this.configTimeout = window.setTimeout(() => this.startConfigWork(e, t, s), this.getConfigTimeout())
				}
				async startStreamsWork(e, t, s, r) {
					window.clearTimeout(this.streamsTimeout), Object(o.d)(r()) ? await s(Object(n.f)(e, t)) : await s(Object(n.e)(e, t)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(e, t, s, r), this.getStreamsTimeout(r()))
				}
				async startRecommendedViewerSubredditsWork(e, t) {
					await this.initializeConfig(i.R, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(a.b)());
					const s = Object(c.l)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(r.a)(() => e(Object(a.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(i.R, e, t), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(c.l)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStatsId && e(Object(n.d)(this.currentStatsId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(i.R, e, t), !this.currentHeartbeatId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(c.l)(t());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const n = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const o = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						d = () => {
							this.currentHeartbeatId && e(Object(a.d)(this.currentHeartbeatId))
						};
					this.clearSendHeartbeatInterval = Object(r.a)(() => {
						d(), this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.clearSendHeartbeatInterval = Object(r.a)(d, o)
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
			t.a = d
		},
		"./src/reddit/actions/publicAccessNetwork/votes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				n = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				l = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/actions/login.ts");
			Object(r.a)(a.D);
			const u = (e, t) => async (s, r, {
				apiContext: a
			}) => {
				const u = r();
				if (Object(l.J)(u))
					if (Object(c.f)(u)) await Object(n.g)(a(), e, t);
					else {
						await Object(i.d)(e);
						const s = Object(d.l)(r(), e);
						null !== s.post.voteState && Object(o.e)(s.post.voteState) === t || await Object(n.g)(a(), e, t)
					}
				else s(Object(m.h)())
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				a = s("./node_modules/lodash/memoize.js"),
				i = s.n(a),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				u = s.n(m);
			const h = d.a.div("Userpic", u.a);
			t.a = i()(e => {
				const {
					userId: t
				} = e, {
					processingAvatarImageUrl: s
				} = r.a, a = (e => e.replace(c.zb.Account + "_", ""))(t), {
					avatar: i,
					color: n
				} = (e => {
					const t = l.length,
						s = parseInt(e, 36),
						r = s % 20 + 1,
						a = Math.floor(s / 20) % t;
					return {
						avatar: ("0" + r).slice(-2),
						color: l[a]
					}
				})(a), d = `${s}/avatar_default_${i}_${n}.png`;
				return o.a.createElement(h, {
					style: {
						backgroundImage: `url(${d})`,
						backgroundColor: `#${n}`
					}
				})
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/hls.js/dist/hls.js"),
				n = s.n(i),
				o = s("./src/lib/combineRefs/index.tsx"),
				c = s("./src/lib/env/index.ts");
			const d = 3,
				l = 5e3,
				m = 1e3;
			class u extends r.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoRef = a.a.createRef(), this.onPlayError = e => t => {
						if ("AbortError" === t.name) return;
						const {
							onAutoPlayPrevented: s,
							playMutedOnPrevented: r
						} = this.props;
						if ("NotAllowedError" === t.name) return s && s(), void(r && this.setState({
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
					return a.a.createElement("video", {
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
						onLevelLoaded: a,
						onLoadingData: i,
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
						i && i()
					}), c.on(n.a.Events.MANIFEST_PARSED, (r, a) => {
						e && !s && this.video && (this.video.currentTime = t, this.video.play().catch(this.onPlayError(c))), this.setState({
							...this.state,
							isInitialized: !0
						})
					}), c.on(n.a.Events.LEVEL_LOADED, (e, t) => {
						a && a(t.details)
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
					return Date.now() - this.mediaRecoveryLastAttemptUtc > m && (this.mediaRecoveryAttemptsCount = 0), 0 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), void e.recoverMediaError()) : 1 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), e.swapAudioCodec(), void e.recoverMediaError()) : void this.onIrrecoverableError(e)
				}
				handleFatalNetworkError(e, t) {
					t.details !== n.a.ErrorDetails.FRAG_LOAD_ERROR && t.details !== n.a.ErrorDetails.FRAG_LOAD_TIMEOUT ? this.onIrrecoverableError(e) : this.handleBadFragment(e, t.frag)
				}
				handleBadFragment(e, t) {
					this.resetBadFragmentsCountIfCooldownPassed(), this.fragmentRecoveryAttemptsCount > d || !t ? this.onIrrecoverableError(e) : (this.fragmentRecoveryAttemptsCount++, this.fragmentRecoveryLastAttemptUtc = Date.now(), e.startLoad())
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
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "i", (function() {
				return k
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./node_modules/lodash/isNil.js"),
				c = s.n(o),
				d = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts");
			const m = Object(n.c)({
				consumers: e => e.jsApi
			});
			class u extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: s,
								...r
							}
						} = this;
						l.a.publish(d.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					c()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					c()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? a.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && a.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var h = Object(i.b)(m, {})(u),
				p = s("./src/reddit/selectors/comments.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				v = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const s = Object(b.a)(e, t),
					r = Object(v.I)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var E = Object(i.b)(() => Object(n.a)(f, p.j, (e, t) => ({
				...e,
				depth: t
			})))(e => a.a.createElement(h, {
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
			const x = (e, t) => {
				const s = Object(b.a)(e, t),
					r = Object(v.I)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var g = Object(i.b)(() => Object(n.a)(x, e => e))(e => a.a.createElement(h, {
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
			var C = Object(i.b)(() => Object(n.c)({
					subreddit: v.S
				}))(e => a.a.createElement(h, {
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
				w = s("./src/reddit/contexts/Post/index.tsx");

			function S() {
				const e = Object(r.useContext)(w.c);
				if (!e) throw new Error("No Post context!");
				return e
			}
			var I = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = S(), i = Object(r.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					created: t.created,
					numComments: t.numComments,
					distinguishType: t.distinguishType,
					domain: t.source && t.source.displayText,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					sourceUrl: t.source && t.source.url,
					subreddit: s ? {
						id: s.id,
						name: s.name,
						type: s.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, s]);
				return a.a.createElement(h, {
					className: e.className,
					type: "post",
					data: i
				})
			};
			var y = e => {
				const {
					post: t,
					subredditOrProfile: s,
					isModerator: i
				} = S(), n = Object(r.useMemo)(() => ({
					author: t.author,
					isModerator: i,
					post: {
						id: t.id
					},
					subreddit: s ? {
						id: s.id,
						name: s.name,
						type: s.type
					} : {}
				}), [t, s, i]);
				return a.a.createElement(h, {
					className: e.className,
					type: "postAuthor",
					data: n
				})
			};
			var _ = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = S(), i = Object(r.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					distinguishType: t.distinguishType,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					numComments: t.numComments,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					subreddit: s ? {
						id: s.id,
						name: s.name,
						type: s.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, s]);
				return a.a.createElement(h, {
					className: e.className,
					type: "postModTools",
					data: i
				})
			};
			var N = Object(i.b)(() => Object(n.c)({
				subreddit: v.S
			}))(e => a.a.createElement(h, {
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
			var O = Object(i.b)(() => Object(n.c)({
				subredditOrProfile: (e, t) => Object(v.L)(e, {
					identifier: t
				})
			}))(e => a.a.createElement(h, {
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
			var k = Object(i.b)(() => Object(n.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(v.S)(e, {
					subredditId: t
				}) : null
			}))(e => a.a.createElement(h, {
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
				return se
			})), s.d(t, "LivestreamTitle", (function() {
				return re
			})), s.d(t, "RpanDescription", (function() {
				return ae
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/telemetry/index.ts"),
				c = s("./src/higherOrderComponents/withMux/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/localStorageAvailable/index.ts"),
				u = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				h = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				p = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				v = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				f = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				E = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				x = s("./src/reddit/constants/chat.ts"),
				g = s("./src/reddit/constants/postLayout.ts"),
				C = s("./src/reddit/helpers/localStorage/index.ts"),
				w = s("./src/reddit/helpers/overlay/index.ts"),
				S = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				I = s("./src/reddit/helpers/trackers/rpan.ts"),
				y = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				_ = s("./src/reddit/models/Vote/index.ts"),
				N = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				O = s("./src/reddit/selectors/platform.ts"),
				k = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				j = s("./src/reddit/components/Flatlist/index.tsx"),
				L = s("./src/reddit/components/Flatlist/constants.ts"),
				A = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				D = s("./src/reddit/components/HlsVideo/index.tsx"),
				M = s("./src/reddit/components/OverflowMenu/index.tsx"),
				V = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				P = s("./src/reddit/components/PostLeftRail/index.tsx"),
				H = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/controls/Dropdown/Row.tsx"),
				U = s("./src/reddit/controls/InternalLink/index.tsx"),
				W = s("./src/reddit/controls/Score/index.tsx"),
				K = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				z = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Z = s.n(Y),
				J = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				G = s.n(J);
			const {
				fbt: $
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = 20, Q = l.cc, X = l.cc, ee = Object(c.a)(D.a, {
				playerName: "RPAN DU Video Player"
			}), te = Object(i.b)(() => Object(n.c)({
				autoplay: R.b,
				isLoggedIn: R.J,
				isOverlayOpen: O.h,
				location: (e, {
					listingName: t
				}) => {
					const s = Object(k.m)(e, {
						listingName: t
					});
					let r;
					if (s) {
						r = `${Object(S.d)(s)}${Object(f.c)(t)}`
					} else {
						const e = t.replace(/^r\//, "");
						r = e === b.R ? Object(S.e)() : Object(S.f)(e)
					}
					return r
				},
				stream: (e, {
					listingName: t
				}) => Object(k.m)(e, {
					listingName: t
				}),
				streamById: e => t => Object(k.l)(e, t),
				rpanDuThresholdVariant: N.i,
				inRpanDUPreloadExperiment: N.b,
				inRpanDuTargetingExperiment: N.c
			}), (e, t) => ({
				onHideRpanUnit: (s, r) => e(Object(p.D)(t.listingName, s, {
					showToast: r.showToast
				})),
				openOverlay: t => e(Object(w.a)(t)),
				subscribeConfig: () => e(v.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(v.a.subscribeStats(t)),
				subscribeStreams: () => e(v.a.subscribeStreams(t.listingName, {
					pageSize: 1
				}))
			})), se = () => a.a.createElement("h3", {
				className: G.a.title
			}, $._("Top broadcast", null, {
				hk: "HADCh"
			})), re = () => a.a.createElement("h3", {
				className: G.a.title
			}, $._("Top livestream", null, {
				hk: "4od1tZ"
			})), ae = () => a.a.createElement("p", {
				className: G.a.description
			}, $._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class ie extends r.Component {
				constructor(e) {
					super(e), this.observableElement = a.a.createRef(), this.videoRef = a.a.createRef(), this.videoSessionManager = null, this.timerId = "rpan-du-active-watch-timer-id", this.handleSuccessfulPlayback = () => {
						Object(C.M)()
					}, this.handleUnsuccessfulPlayback = () => {
						const e = Number(Object(C.C)());
						if (e) {
							if (Date.now() - e >= Q) {
								Object(C.M)();
								const e = 30 * l.x,
									t = Date.now() - e + X;
								this.props.onHideRpanUnit(t, {
									showToast: !1
								})
							}
						} else Object(C.sb)(Date.now())
					}, this.onResourceRemoved = () => {
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
							sendEvent: r
						} = this.props;
						s(Date.now(), {
							showToast: !0
						}), r(Object(I.i)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: s
						} = this.props;
						t(s ? Object(I.j)(s, 1) : Object(I.j)()), this.props.inRpanDuTargetingExperiment && this.handleSuccessfulPlayback(), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(I.j)()), this.openOverlay()
					}, this.handleVisibilityChange = ({
						documentInFocus: e
					}) => {
						this.setState({
							isInFocus: e
						})
					}, this.handleHeartbeat = ({
						meta: e,
						stats: t
					}) => {
						const {
							stream: s,
							streamById: r
						} = this.props, a = s && s.post.id === e.id ? s : r(e.id);
						if (!a) return;
						const i = !t.sessionDurationMs ? I.D : I.z,
							n = {
								chatState: x.a.None,
								playerType: I.a.DU
							},
							o = i(a, {
								...t,
								...n
							});
						this.props.sendEvent(o)
					}, this.state = {
						isInFocus: !0,
						isIntersecting: !1,
						isReady: !1,
						isInLoadingIntersection: !1
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
					return t === y.a.IS_LIVE || t === y.a.DISCONNECTED
				}
				get isPaused() {
					return !this.props.autoplay || !this.isVisible
				}
				get isVisible() {
					return this.state.isInFocus && this.state.isIntersecting && !this.props.isOverlayOpen
				}
				get isLoadable() {
					return this.state.isInFocus && this.state.isInLoadingIntersection && !this.props.isOverlayOpen
				}
				get video() {
					return this.videoRef.current
				}
				startTimeTracker() {
					o.c.start(this.timerId)
				}
				endTimeTracker() {
					if (this.timerId && o.c.has(this.timerId)) {
						Math.round(o.c.end(this.timerId)) / 1e3 >= q ? this.handleSuccessfulPlayback() : this.handleUnsuccessfulPlayback()
					}
				}
				componentDidMount() {
					this.subscribeIntersectionObserver(), this.subscribeVisibilityChange()
				}
				componentDidUpdate(e, t) {
					const {
						video: s
					} = this, {
						autoplay: r,
						stream: a,
						inRpanDUPreloadExperiment: i
					} = this.props, {
						isOverlayOpen: n,
						stream: o
					} = e, {
						isReady: c
					} = this.state, {
						isInFocus: d,
						isIntersecting: l,
						isReady: u,
						isInLoadingIntersection: h
					} = t, {
						isVisible: p,
						isLoadable: b
					} = this, v = d && l && !n, f = !v && p, E = v && !p, x = d && h && !n, g = i ? x && !b : E;
					(i ? !x && b : f) ? (this.subscribeConfig(), this.subscribeStreams()) : g && (this.unsubscribeConfig(), this.unsubscribeStreams());
					const C = a && a.post.id,
						w = C !== (o && o.post.id),
						S = !!C;
					w && this.setState({
						isReady: !1
					});
					const I = w && !S || S && E;
					if (w && S && p || S && f ? this.subscribeStats() : I && this.unsubscribeStats(), r && s) {
						const e = this.getOrCreateVideoSessionManager(s),
							t = !u && c,
							r = S && (t && p || f && c),
							a = S && E;
						w && e.endSession(), r ? (e.startSession({
							id: C
						}), this.props.inRpanDuTargetingExperiment && Object(m.a)() && this.startTimeTracker()) : a && (e.pauseSession(), this.props.inRpanDuTargetingExperiment && Object(m.a)() && this.endTimeTracker())
					}
				}
				componentWillUnmount() {
					this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeStats(), this.unsubscribeIntersectionObserver(), this.unsubscribeVisibilityChange(), this.destroyVideoSessionManager()
				}
				render() {
					const {
						layout: e
					} = this.props, t = e === g.g.Classic ? this.renderClassicContent() : e === g.g.Compact ? this.renderCompactContent() : this.renderLargeContent();
					return a.a.createElement("div", {
						className: Object(d.a)(G.a.container, {
							[Z.a.largeAndMediumPostStyles]: e === g.g.Large || e === g.g.Medium,
							[Z.a.classicPostStyles]: e === g.g.Classic,
							[Z.a.compactPostStyles]: e === g.g.Compact,
							[G.a.large]: e === g.g.Large || e === g.g.Medium,
							[G.a.classic]: e === g.g.Classic,
							[G.a.compact]: e === g.g.Compact
						}, this.props.className)
					}, e !== g.g.Large && a.a.createElement(P.b, {
						className: G.a.leftRail,
						withoutComputedStyles: e === g.g.Compact
					}, a.a.createElement(ne, {
						isVertical: !0
					}), e === g.g.Compact && a.a.createElement(ne, {
						isVertical: !1
					})), a.a.createElement(V.a, {
						className: G.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return a.a.createElement("div", {
						className: G.a.titleAndDescriptionContainer
					}, a.a.createElement(U.a, {
						to: this.props.location
					}, a.a.createElement(re, null), e && a.a.createElement(ae, null)))
				}
				renderLargeContent() {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: G.a.header
					}, this.renderTitleAndDescription(), a.a.createElement("div", {
						className: G.a.flatListContainer
					}, a.a.createElement(de, {
						onClick: this.onHideUnitClicked
					}))), a.a.createElement("div", {
						className: G.a.body,
						ref: this.observableElement
					}, a.a.createElement(U.a, {
						to: this.props.location,
						onClick: this.onStreamClicked,
						className: G.a.previewLink,
						tabIndex: 0
					}, a.a.createElement("div", {
						className: G.a.previewContainer
					}, this.renderThumbnail()), this.renderInfo())))
				}
				renderClassicContent() {
					return a.a.createElement("div", {
						className: G.a.body,
						ref: this.observableElement
					}, a.a.createElement(U.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, a.a.createElement("div", {
						className: G.a.thumbnailContainer
					}, this.renderThumbnail())), a.a.createElement("div", {
						className: G.a.main
					}, this.renderLiveStatus(), this.renderTitleAndDescription(!0), a.a.createElement("div", {
						className: G.a.flatListContainer
					}, a.a.createElement(oe, {
						onClick: this.onHeaderClicked
					}), a.a.createElement(j.a, {
						className: G.a.flatlistSeparator
					}), a.a.createElement("div", null, a.a.createElement(ce, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return a.a.createElement("div", {
						className: G.a.body,
						ref: this.observableElement
					}, a.a.createElement("div", {
						className: G.a.main
					}, a.a.createElement(oe, {
						onClick: this.onHeaderClicked
					}), this.renderLiveStatus(), this.renderTitleAndDescription(!0), a.a.createElement("div", {
						className: G.a.flatListContainer
					}, a.a.createElement(de, {
						onClick: this.onHideUnitClicked
					}))))
				}
				renderInfo() {
					if (this.props.stream && this.state.isReady) return a.a.createElement("div", {
						className: G.a.infoContainer
					}, this.renderExpandIcon(), this.renderLiveStatus(), this.renderWatcherCount())
				}
				renderExpandIcon() {
					return a.a.createElement("div", {
						className: G.a.bigExpando
					}, a.a.createElement(K.a, {
						className: G.a.bigExpandoIcon
					}))
				}
				renderLiveStatus() {
					return this.isLive ? a.a.createElement("span", {
						className: G.a.liveStatus
					}, a.a.createElement(E.g, null)) : null
				}
				renderWatcherCount() {
					var e;
					if (!this.isLive) return null;
					const t = Math.max(1, (null === (e = this.props.stream) || void 0 === e ? void 0 : e.continuous_watchers) || 0);
					return a.a.createElement("span", {
						className: G.a.watchingCount
					}, $._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [$._plural(t, "number")], {
						hk: "33zJ5F"
					}))
				}
				renderThumbnail() {
					return a.a.createElement("div", {
						className: Object(d.a)(G.a.thumbnail, {
							[G.a.loading]: !this.state.isReady
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
						r = t.post.id,
						i = t.post.title;
					return a.a.createElement(ee, {
						url: t.stream.hls_url,
						autoplay: e,
						controls: !1,
						muted: !0,
						muxVideoDuration: s,
						muxVideoId: r,
						muxVideoIsLive: this.isLive,
						muxVideoTitle: i,
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
					} = this.observableElement, {
						rpanDuThresholdVariant: t,
						inRpanDUPreloadExperiment: s
					} = this.props;
					e && (this.intersectionObserver = new IntersectionObserver(e => {
						e.forEach(e => {
							this.setState({
								isIntersecting: e.isIntersecting
							})
						})
					}, {
						threshold: t ? Object(N.h)(t) : .01
					}), this.intersectionObserver.observe(e), this.loadingIntersectionObserver = new IntersectionObserver(e => {
						e.forEach(e => {
							this.setState({
								isInLoadingIntersection: e.isIntersecting
							})
						})
					}, {
						threshold: t ? Object(N.h)(t) : .01,
						rootMargin: s ? "400%" : "0px"
					}), this.loadingIntersectionObserver.observe(e))
				}
				unsubscribeIntersectionObserver() {
					var e, t;
					null === (e = this.intersectionObserver) || void 0 === e || e.disconnect(), null === (t = this.loadingIntersectionObserver) || void 0 === t || t.disconnect()
				}
				subscribeVisibilityChange() {
					this.visibilityChangeId = u.a.subscribe(this.handleVisibilityChange)
				}
				unsubscribeVisibilityChange() {
					this.visibilityChangeId && u.a.unsubscribe(this.visibilityChangeId)
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
					return this.videoSessionManager || (this.videoSessionManager = new h.a(e, {
						onHeartbeat: this.handleHeartbeat
					})), this.videoSessionManager
				}
				destroyVideoSessionManager() {
					var e;
					null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
			}
			const ne = e => a.a.createElement(T.a, {
					className: Object(d.a)({
						[G.a.verticalVotes]: e.isVertical,
						[G.a.horizontalVotes]: !e.isVertical
					})
				}, a.a.createElement(W.a, {
					className: G.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: _.a.notVoted
				})),
				oe = ({
					onClick: e
				}) => a.a.createElement("button", {
					className: G.a.expandoButton,
					onClick: e
				}, a.a.createElement(K.a, {
					className: G.a.expandoIcon
				})),
				ce = ({
					onClick: e,
					isLoggedIn: t
				}) => a.a.createElement(A.a, {
					displayText: $._("Show me less of this", null, {
						hk: "4t8AKC"
					}),
					flatlistItem: L.a.Hide,
					isLoggedIn: !!t,
					isUserOp: !1,
					onClick: e,
					noBreakpoints: !0
				}, a.a.createElement(H.b, null)),
				de = ({
					onClick: e
				}) => a.a.createElement(M.b, {
					className: G.a.overflowMenu,
					dropdownClassName: G.a.overflowDropdown,
					dropdownId: "rpan-du-overflow"
				}, a.a.createElement(B.b, {
					className: G.a.overflowItem,
					displayText: $._("Show me less of this", null, {
						hk: "2c4uFK"
					}),
					iconWrapperClassName: G.a.overflowItemIconWrapper,
					textClassName: G.a.overflowItemText,
					onClick: e
				}, a.a.createElement(z.a, {
					className: G.a.hideIcon
				})));
			t.default = te(Object(F.c)(ie))
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return I
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "g", (function() {
				return k
			})), s.d(t, "h", (function() {
				return R
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "a", (function() {
				return j
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/components/OverflowMenu/index.tsx"),
				d = s("./src/reddit/controls/Dropdown/Row.tsx"),
				l = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				m = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				u = s("./src/reddit/icons/fonts/Share/index.tsx"),
				h = s("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				p = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				b = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				v = s("./src/reddit/icons/svgs/Report/index.tsx"),
				f = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				E = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				x = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				g = s("./src/reddit/icons/svgs/VideoShare/index.tsx"),
				C = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				w = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				S = s.n(w);
			const I = ({
					onClick: e
				}) => i.a.createElement("button", {
					className: S.a.shareButton,
					onClick: e,
					"aria-label": r.fbt._("share video", null, {
						hk: "2e71ai"
					}),
					value: "share"
				}, i.a.createElement(u.a, {
					className: S.a.menuIcon
				})),
				y = ({
					isMuted: e,
					onToggle: t
				}) => i.a.createElement("button", {
					className: S.a.muteButton,
					onClick: t,
					"aria-label": r.fbt._("mute video", null, {
						hk: "Enspe"
					}),
					value: "mute"
				}, e ? i.a.createElement(E.a, {
					className: S.a.volumeIcon
				}) : i.a.createElement(C.a, {
					className: S.a.volumeIcon
				})),
				_ = n.a.wrapped(m.a, "menuIcon", S.a),
				N = "rpan-overlay-menu",
				O = ({
					onClick: e,
					onHideClick: t,
					onReportClick: s
				}) => i.a.createElement(c.b, {
					className: S.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: N,
					icon: i.a.createElement(_, null),
					onClick: e
				}, i.a.createElement(d.b, {
					className: S.a.overflowItem,
					displayText: r.fbt._("View rules", null, {
						hk: "4lTvzy"
					}),
					iconWrapperClassName: S.a.overflowItemIconWrapper,
					key: `${N}-rules`,
					onClick: () => Object(o.d)(l.S, o.c.BLANK)
				}, i.a.createElement(f.a, {
					className: S.a.overflowItemIcon
				})), i.a.createElement(d.b, {
					className: S.a.overflowItem,
					displayText: r.fbt._("Visit RPAN community", null, {
						hk: "3KZliI"
					}),
					iconWrapperClassName: S.a.overflowItemIconWrapper,
					key: `${N}-community`,
					onClick: () => Object(o.d)(l.Q, o.c.BLANK)
				}, i.a.createElement(b.c, {
					className: S.a.overflowItemIcon
				})), i.a.createElement(d.b, {
					className: S.a.overflowItem,
					displayText: r.fbt._("Report", null, {
						hk: "4oVcnd"
					}),
					iconWrapperClassName: S.a.overflowItemIconWrapper,
					key: `${N}-report`,
					onClick: s
				}, i.a.createElement(v.a, {
					className: S.a.overflowItemIcon
				})), i.a.createElement(d.b, {
					className: S.a.overflowItem,
					displayText: r.fbt._("Hide", null, {
						hk: "1qXTIB"
					}),
					iconWrapperClassName: S.a.overflowItemIconWrapper,
					key: `${N}-hide`,
					onClick: t
				}, i.a.createElement(p.a, {
					className: S.a.overflowItemIcon
				}))),
				k = ({
					onClick: e
				}) => i.a.createElement("button", {
					className: S.a.promptButton,
					onClick: e
				}, i.a.createElement(x.a, null), i.a.createElement("span", null, r.fbt._("Replay Video", null, {
					hk: "1iD2Wj"
				}))),
				R = ({
					onClick: e
				}) => i.a.createElement("button", {
					className: S.a.promptButton,
					onClick: e
				}, i.a.createElement(g.a, null), i.a.createElement("span", null, r.fbt._("Share Video", null, {
					hk: "FYgQy"
				}))),
				T = ({
					onClick: e
				}) => i.a.createElement("button", {
					className: S.a.promptButton,
					onClick: e
				}, i.a.createElement(h.a, {
					className: S.a.crosspostIcon
				}), i.a.createElement("span", null, r.fbt._("Crosspost", null, {
					hk: "gORNr"
				}))),
				j = ({
					onClick: e
				}) => i.a.createElement("button", {
					className: `${S.a.promptButton} ${S.a.awardButton}`,
					onClick: e
				}, i.a.createElement("span", null, r.fbt._("Award Now", null, {
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
				return K
			})), s.d(t, "h", (function() {
				return z
			})), s.d(t, "g", (function() {
				return Y
			})), s.d(t, "p", (function() {
				return Z
			})), s.d(t, "f", (function() {
				return J
			})), s.d(t, "l", (function() {
				return G
			})), s.d(t, "n", (function() {
				return $
			})), s.d(t, "r", (function() {
				return q
			})), s.d(t, "j", (function() {
				return ee
			})), s.d(t, "k", (function() {
				return te
			})), s.d(t, "i", (function() {
				return ie
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
				return be
			})), s.d(t, "s", (function() {
				return ve
			})), s.d(t, "m", (function() {
				return fe
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/opener/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				m = s("./src/reddit/actions/publicAccessNetwork/votes.ts"),
				u = s("./src/reddit/actions/subscription/index.ts"),
				h = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				p = s("./src/reddit/components/OverflowMenu/index.tsx"),
				b = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				v = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				E = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				x = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				g = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				C = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				w = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				S = s("./src/reddit/icons/fonts/Share/index.tsx"),
				I = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				y = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				_ = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				N = s("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				O = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				k = s("./src/reddit/icons/svgs/Link/index.tsx"),
				R = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				T = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				j = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				L = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				A = s("./src/reddit/icons/svgs/Report/index.tsx"),
				D = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				M = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				V = s("./src/reddit/models/Vote/index.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				B = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				U = s.n(B);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = ({
				children: e
			}) => a.a.createElement("div", {
				className: U.a.broadcastStatus
			}, e), z = ({
				onClick: e
			}) => a.a.createElement("button", {
				onClick: e
			}, a.a.createElement(Y, null)), Y = () => W._("{=Live}", [W._param("=Live", a.a.createElement("span", {
				className: U.a.live
			}, W._("Live", null, {
				hk: "8x90I"
			})))], {
				hk: "3ZBbO0"
			}), Z = () => W._("Recorded live", null, {
				hk: "2seH5c"
			}), J = ({
				onSubscribe: e,
				isSubscribed: t
			}) => {
				const [s, i] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => {
					const e = setTimeout(() => {
						i(!1)
					}, 3e3);
					return () => clearTimeout(e)
				}, [s]), t ? s ? a.a.createElement(y.a, {
					className: U.a.checkmarkIcon
				}) : null : a.a.createElement("button", {
					onClick: () => {
						i(!0), e()
					},
					className: U.a.joinButton
				}, a.a.createElement(T.a, {
					className: U.a.plusIcon
				}), a.a.createElement("span", {
					className: U.a.joinText
				}, W._("Join", null, {
					hk: "3n0zBz"
				})))
			}, G = ({
				onSelect: e,
				related: t,
				subreddit: s,
				subreddits: r
			}) => {
				let i = "";
				i = "home" === t ? "All" : "r/popular" === t ? "r/popular" : s || "All";
				const n = r.filter(e => e.prefixedName !== i),
					o = 30 + 35 * n.length;
				return a.a.createElement(p.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: a.a.createElement("span", {
						className: U.a.subreddit
					}, s || "RPAN"),
					style: {
						maxHeight: `${o}px`,
						overflowY: "auto",
						bottom: "0px"
					},
					isFixed: !0
				}, a.a.createElement("div", {
					className: U.a.dropdownLabel
				}, W._("Pick a Community", null, {
					hk: "4AfDwd"
				})), n.map(t => a.a.createElement(f.b, {
					className: U.a.dropdownRow,
					displayText: t.prefixedName,
					key: `rpan-recommended-viewer-subreddits-dropdown-${t.prefixedName}`,
					onClick: () => e(t)
				})))
			}, $ = ({
				text: e
			}) => a.a.createElement("h1", {
				className: U.a.title
			}, e), q = ({
				broadcast: e,
				live: t
			}) => a.a.createElement("div", {
				className: U.a.watchersCount
			}, t ? a.a.createElement(Q, {
				count: Math.max(1, e.continuous_watchers)
			}) : a.a.createElement(X, {
				count: Math.max(1, e.unique_watchers)
			})), Q = ({
				count: e
			}) => W._({
				"*": "{number of watchers} watchers",
				_1: "1 watcher"
			}, [W._plural(e, "number of watchers", Object(d.b)(e, {
				displayFull: !0
			}))], {
				hk: "3F0Nj0"
			}), X = ({
				count: e
			}) => W._({
				"*": "{number of views} views",
				_1: "1 view"
			}, [W._plural(e, "number of views", Object(d.b)(e, {
				displayFull: !0
			}))], {
				hk: "tSTjT"
			}), ee = "rpan-overlay-share-menu", te = ({
				onClickCrosspost: e,
				onClickVideoShare: t,
				onClickShare: s
			}) => a.a.createElement(p.b, {
				className: U.a.menuButton,
				defaultButtonOutline: !0,
				dropdownId: ee,
				onClick: s,
				icon: a.a.createElement(S.a, null)
			}, a.a.createElement(f.b, {
				className: U.a.menuOverflowItem,
				displayText: W._("Copy Link", null, {
					hk: "2oo038"
				}),
				iconWrapperClassName: U.a.overflowItemShareIconWrapper,
				key: `${ae}-share`,
				onClick: t
			}, a.a.createElement(k.a, {
				className: U.a.overflowItemIcon
			})), a.a.createElement(f.b, {
				className: U.a.menuOverflowItem,
				displayText: W._("Crosspost", null, {
					hk: "QSd6Z"
				}),
				iconWrapperClassName: U.a.overflowItemShareIconWrapper,
				key: `${ae}-crosspost`,
				onClick: e
			}, a.a.createElement(N.a, {
				className: U.a.overflowItemIcon
			}))), se = o.a.wrapped(w.a, "menuIcon", U.a), re = e => {
				let t = 186;
				if (e) {
					t += 74 + 39
				}
				return t
			}, ae = "rpan-overlay-menu", ie = ({
				onClick: e,
				onHideClick: t,
				onReportClick: s,
				onToggleLockClick: r,
				isCommentsLocked: i,
				hasModeratorPermissions: n,
				onEndBroadcastClick: o,
				onRpanStudioClick: d,
				subreddit: m
			}) => a.a.createElement(p.b, {
				className: U.a.menuButton,
				defaultButtonOutline: !0,
				dropdownId: ae,
				icon: a.a.createElement(se, null),
				onClick: e,
				style: {
					maxHeight: `${re(n)}px`,
					overflowY: "auto",
					bottom: "0px"
				}
			}, a.a.createElement(f.b, {
				className: U.a.overflowItem,
				displayText: W._("View rules", null, {
					hk: "haY6r"
				}),
				iconWrapperClassName: U.a.overflowItemIconWrapper,
				key: `${ae}-rules`,
				onClick: () => Object(c.d)(l.S, c.c.BLANK)
			}, a.a.createElement(D.a, {
				className: U.a.overflowItemIcon
			})), a.a.createElement(f.b, {
				className: U.a.overflowItem,
				displayText: W._("Stream from desktop", null, {
					hk: "4dOdik"
				}),
				iconWrapperClassName: U.a.overflowItemIconWrapper,
				key: `${ae}-rpanstudio`,
				onClick: d
			}, a.a.createElement(j.b, {
				className: U.a.overflowItemIcon
			})), a.a.createElement(f.b, {
				className: U.a.overflowItem,
				displayText: W._("Visit community", null, {
					hk: "2KViLk"
				}),
				iconWrapperClassName: U.a.overflowItemIconWrapper,
				key: `${ae}-community`,
				onClick: () => {
					Object(c.d)(Object(x.a)(m), c.c.BLANK)
				}
			}, (e => {
				const t = e && Object(E.a)({
					subreddit: e
				});
				return t ? a.a.createElement("img", {
					className: U.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					},
					src: t
				}) : a.a.createElement(_.a, {
					className: U.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					}
				})
			})(m)), a.a.createElement(f.b, {
				className: U.a.overflowItem,
				displayText: W._("Report", null, {
					hk: "4oVcnd"
				}),
				iconWrapperClassName: U.a.overflowItemIconWrapper,
				key: `${ae}-report`,
				onClick: s
			}, a.a.createElement(A.a, {
				className: U.a.overflowItemIcon
			})), a.a.createElement(f.b, {
				className: U.a.overflowItem,
				displayText: W._("Hide", null, {
					hk: "15vs9C"
				}),
				iconWrapperClassName: U.a.overflowItemIconWrapper,
				key: `${ae}-hide`,
				onClick: t
			}, a.a.createElement(O.a, {
				className: U.a.overflowItemIcon
			})), n && a.a.createElement(a.a.Fragment, null, a.a.createElement(f.b, {
				className: U.a.headerItem,
				displayText: W._("Mod Actions", null, {
					hk: "19zCiw"
				}),
				key: `${ae}-modaction`,
				onClick: () => {}
			}), a.a.createElement(f.b, {
				className: U.a.overflowItem,
				displayText: i ? W._("Unlock comments", null, {
					hk: "Btg6R"
				}) : W._("Lock comments", null, {
					hk: "3Ew6q9"
				}),
				iconWrapperClassName: U.a.overflowItemIconWrapper,
				key: `${ae}-lock`,
				onClick: r
			}, i ? a.a.createElement(M.a, {
				className: U.a.overflowItemIcon
			}) : a.a.createElement(R.a, {
				className: U.a.overflowItemIcon
			})), a.a.createElement(f.b, {
				className: U.a.endBroadcastItem,
				displayText: W._("Remove broadcast", null, {
					hk: "3GaDuI"
				}),
				iconWrapperClassName: U.a.overflowItemIconWrapper,
				key: `${ae}-end`,
				onClick: o
			}, a.a.createElement(L.a, {
				className: U.a.endBroadcastIcon
			})))), ne = Object(i.b)(null, e => ({
				vote: (t, s) => e(Object(m.a)(t, s))
			}))(class extends r.Component {
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
					} = this.props.broadcast.post, s = t !== e.broadcast.post.id, r = this.state.voteStates.has(t);
					s && !r && this.setVoteStateFromBroadcastProp()
				}
				render() {
					const e = this.voteState === V.a.upvoted,
						t = this.voteState === V.a.downvoted;
					return a.a.createElement("div", {
						className: U.a.votePanel
					}, a.a.createElement(oe, {
						onClick: this.handleUpVote,
						voted: e
					}), null !== this.score ? a.a.createElement(de, {
						score: this.score
					}) : null, a.a.createElement(ce, {
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
						const r = new Map(s);
						r.set(e, t), this.setState({
							voteStates: r
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
						onDownvote: r
					} = this.props, {
						id: a
					} = t.post;
					this.setVoteState(a, e), this.props.vote(a, e), e === V.a.upvoted ? s() : e === V.a.downvoted && r()
				}
			}), oe = ({
				onClick: e,
				voted: t
			}) => a.a.createElement("button", {
				className: Object(n.a)(U.a.voteButton, U.a.upVoteButton, {
					[U.a.voted]: t
				}),
				onClick: e,
				value: "upvote",
				"aria-label": W._("Upvote", null, {
					hk: "Ufd6r"
				})
			}, a.a.createElement(I.b, {
				className: U.a.voteIcon
			})), ce = ({
				onClick: e,
				voted: t
			}) => a.a.createElement("button", {
				className: Object(n.a)(U.a.voteButton, U.a.downVoteButton, {
					[U.a.voted]: t
				}),
				onClick: e,
				value: "downvote",
				"aria-label": W._("Downvote", null, {
					hk: "ZDRA3"
				})
			}, a.a.createElement(C.b, {
				className: U.a.voteIcon
			})), de = ({
				score: e
			}) => a.a.createElement("div", {
				className: U.a.score
			}, Object(d.b)(e)), le = ({
				children: e
			}) => a.a.createElement("div", {
				className: U.a.prompt
			}, e), me = () => a.a.createElement(le, null, W._("Connection issues", null, {
				hk: "hIrnJ"
			})), ue = () => a.a.createElement(le, null, W._("Tuning...", null, {
				hk: "3dG7Ks"
			})), he = () => a.a.createElement(le, null, W._("Broadcast paused", null, {
				hk: "jxvku"
			})), pe = ({
				onClickCrosspost: e,
				onClickReplay: t,
				onClickShare: s
			}) => a.a.createElement(le, null, a.a.createElement("div", {
				className: U.a.promptButtonSet
			}, a.a.createElement(F.g, {
				onClick: t
			}), a.a.createElement(F.h, {
				onClick: s
			}), a.a.createElement(F.f, {
				onClick: e
			}))), be = ({
				onClickAward: e
			}) => a.a.createElement(le, null, a.a.createElement("div", {
				className: U.a.awardPromptWrapper
			}, a.a.createElement("div", {
				className: U.a.awardPromptLabel
			}, W._("Award this broadcast to give it more airtime", null, {
				hk: "20jmEz"
			})), a.a.createElement(F.a, {
				onClick: e
			}))), ve = e => {
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
					name: r
				} = e, i = Ee(r), n = xe(r, !i), o = i ? W._("Unfollow u/{name}", [W._param("name", r)], {
					hk: "2n0wqa"
				}) : W._("Follow u/{name}", [W._param("name", r)], {
					hk: "20X8Bw"
				});
				return a.a.createElement("button", {
					className: U.a.subscribeToProfileButton,
					onClick: () => {
						s(!i), n()
					},
					title: o
				}, a.a.createElement(ge, {
					profile: e
				}), a.a.createElement(Ce, {
					isSubscribed: i
				}))
			}, Ee = e => Object(i.e)(t => Object(P.fb)(t, {
				identifier: {
					name: e,
					type: v.a.PROFILE
				}
			})), xe = (e, t) => {
				const s = Object(i.d)();
				return Object(r.useCallback)(() => {
					s(Object(u.d)([{
						name: e,
						type: v.a.PROFILE
					}], t))
				}, [s, e, t])
			}, ge = ({
				profile: e
			}) => {
				const {
					id: t,
					name: s
				} = e, r = Object(i.e)(e => Object(H.lb)(e, {
					userName: s
				})), o = Ie(r), c = o && Object(g.a)(r.accountIcon);
				return a.a.createElement("div", {
					className: Object(n.a)(U.a.subscribeToProfileAvatar, {
						[U.a.snoovatarHeadshot]: c
					})
				}, r ? o ? c ? a.a.createElement(b.a, {
					headshot: r.accountIcon
				}) : a.a.createElement("img", {
					src: r.accountIcon
				}) : a.a.createElement(h.a, {
					userId: t
				}) : null)
			}, Ce = ({
				isSubscribed: e
			}) => a.a.createElement("div", {
				className: Object(n.a)(U.a.subscribeToProfileStatus, {
					[U.a.isSubscribed]: e
				})
			}, e ? a.a.createElement(we, null) : a.a.createElement(Se, null)), we = () => a.a.createElement("svg", {
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M17.7072 5.69337L16.3083 4.29337C16.1203 4.10537 15.8662 4.00037 15.6012 4.00037C15.3352 4.00037 15.0812 4.10537 14.8942 4.29337L7.90025 11.2864L5.10725 8.49337C4.71725 8.10237 4.08425 8.10237 3.69325 8.49337L2.29325 9.89337C1.90225 10.2844 1.90225 10.9174 2.29325 11.3074L7.19325 16.2074C7.38925 16.4024 7.64425 16.5004 7.90025 16.5004C8.15625 16.5004 8.41225 16.4024 8.60725 16.2074L17.7072 7.10737C18.0982 6.71637 18.0982 6.08437 17.7072 5.69337"
			})), Se = () => a.a.createElement("svg", {
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M12.8,6.4 L9.6,6.4 L9.6,3.2 C9.6,2.7576 9.2424,2.4 8.8,2.4 L7.2,2.4 C6.7576,2.4 6.4,2.7576 6.4,3.2 L6.4,6.4 L3.2,6.4 C2.7584,6.4 2.4,6.7576 2.4,7.2 L2.4,8.8 C2.4,9.2424 2.7584,9.6 3.2,9.6 L6.4,9.6 L6.4,12.8 C6.4,13.2424 6.7576,13.6 7.2,13.6 L8.8,13.6 C9.2424,13.6 9.6,13.2424 9.6,12.8 L9.6,9.6 L12.8,9.6 C13.2424,9.6 13.6,9.2424 13.6,8.8 L13.6,7.2 C13.6,6.7576 13.2424,6.4 12.8,6.4"
			})), Ie = e => {
				const t = Object(i.e)(H.i),
					s = Object(i.e)(H.B),
					r = Object(i.e)(H.bb);
				return !!e && (!!e.accountIcon && (!!t && (t.id === e.id || (!e.isNSFW || !!r && !s))))
			}
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
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				o = s.n(n);
			const c = e => a.a.createElement("span", {
				className: Object(i.a)(o.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => a.a.createElement(c, {
				className: Object(i.a)(o.a.metaSeparator, e),
				isSmall: t
			})
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(r.a)(e).banner.iconImage ? String(Object(r.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
		},
		"./src/reddit/icons/fonts/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => a.a.createElement("i", {
				className: Object(i.a)(Object(n.b)("admin", e.isFilled), c.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				n = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				o = s.n(n),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = c.a.wrapped(e => {
				const t = Object(d.b)();
				return a.a.createElement("i", {
					className: `${Object(i.b)(t?"expand":"expandoArrowExpand",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "ExpandIcon", o.a);
			t.a = l
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"
			})))
		},
		"./src/reddit/icons/svgs/Rules/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 30 30",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M20.7094669,9.4275 L9.29053307,9.4275 C8.86319398,9.4275 8.51636806,9.0915 8.51636806,8.6775 C8.51636806,8.2635 8.86319398,7.9275 9.29053307,7.9275 L20.7094669,7.9275 C21.136806,7.9275 21.4836319,8.2635 21.4836319,8.6775 C21.4836319,9.0915 21.136806,9.4275 20.7094669,9.4275 M20.7094669,14.142 L9.29053307,14.142 C8.86319398,14.142 8.51636806,13.806 8.51636806,13.392 C8.51636806,12.978 8.86319398,12.642 9.29053307,12.642 L20.7094669,12.642 C21.136806,12.642 21.4836319,12.978 21.4836319,13.392 C21.4836319,13.806 21.136806,14.142 20.7094669,14.142 M20.7094669,18.858 L9.29053307,18.858 C8.86319398,18.858 8.51636806,18.522 8.51636806,18.108 C8.51636806,17.6925 8.86319398,17.358 9.29053307,17.358 L20.7094669,17.358 C21.136806,17.358 21.4836319,17.6925 21.4836319,18.108 C21.4836319,18.522 21.136806,18.858 20.7094669,18.858 M20.7094669,23.5725 L9.29053307,23.5725 C8.86319398,23.5725 8.51636806,23.2365 8.51636806,22.8225 C8.51636806,22.407 8.86319398,22.0725 9.29053307,22.0725 L20.7094669,22.0725 C21.136806,22.0725 21.4836319,22.407 21.4836319,22.8225 C21.4836319,23.2365 21.136806,23.5725 20.7094669,23.5725 M23.95167,4.5 L20.4570891,4.5 C19.9198186,3.6075 18.9335324,3 17.7893165,3 L12.2106835,3 C11.0664676,3 10.0801814,3.6075 9.54291086,4.5 L6.04833002,4.5 C5.19365185,4.5 4.5,5.172 4.5,6 L4.5,25.5 C4.5,26.328 5.19365185,27 6.04833002,27 L23.95167,27 C24.8063482,27 25.5,26.328 25.5,25.5 L25.5,6 C25.5,5.172 24.8063482,4.5 23.95167,4.5"
			})))
		},
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), a.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoReplay/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3N5UJK0Os17icJ33e54tfY"
			}
		},
		"./src/reddit/icons/svgs/VideoReplay/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				o = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: Object(i.a)(o.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				transform: "translate(1 1)"
			}, a.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), a.a.createElement("path", {
				fill: "#fff",
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2"
			})))
		},
		"./src/reddit/icons/svgs/VideoShare/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "fpaVW-I8iox1soX0hTuwb"
			}
		},
		"./src/reddit/icons/svgs/VideoShare/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				o = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: Object(i.a)(o.a.icon, e.className),
				viewBox: "0 0 64 64",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("circle", {
				cx: "32",
				cy: "32",
				r: "30.72",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "2.4576"
			}), a.a.createElement("path", {
				fill: "#fff",
				d: "M42.59 27.9447L35.18 21.5931C34.8212 21.2847 34.3292 21.2175 33.8984 21.4143C33.4676 21.6123 33.2 22.0299 33.2 22.5039V24.7995C29.5004 24.7995 26.5472 26.0031 24.4232 28.3755C21.6128 31.5159 20.4992 36.5271 21.2036 42.8667C21.2372 43.1715 21.4952 43.3995 21.7988 43.3995C21.8108 43.3995 21.8216 43.3995 21.8336 43.3983C22.1504 43.3815 22.4 43.1187 22.4 42.7995C22.4 39.3039 23.5508 36.4155 25.7276 34.4451C27.7148 32.6475 30.4868 31.7307 33.14 31.9971C33.1604 31.9983 33.1796 31.9911 33.2 31.9911V34.2951C33.2 34.7691 33.4676 35.1879 33.8984 35.3859C34.0616 35.4603 34.2332 35.4975 34.4036 35.4975C34.682 35.4975 34.9568 35.3979 35.18 35.2071L42.59 28.8555C42.7232 28.7415 42.8 28.5747 42.8 28.3995C42.8 28.2243 42.7232 28.0587 42.59 27.9447Z"
			})))
		},
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), a.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), a.a.createElement("path", {
				d: "M12,10.86a1,1,0,0,0,1,1.73,3,3,0,0,0,0-5.17,1,1,0,0,0-1,1.73,1,1,0,0,1,0,1.72Z",
				fill: "#FFFFFF"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RpanListingUnit.ce33d89e8336f2d3e658.js.map