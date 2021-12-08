// https://www.redditstatic.com/desktop2x/RpanListingUnit.353ba5f3238b1a4a92ee.js
// Retrieved at 12/7/2021, 9:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RpanListingUnit"], {
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var s = -1, r = null == e ? 0 : e.length; ++s < r;)
					if (!t(e[s], s, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var s = !0;
				return r(e, (function(e, r, n) {
					return s = !!t(e, r, n)
				})), s
			}
		},
		"./node_modules/lodash/every.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_arrayEvery.js"),
				n = s("./node_modules/lodash/_baseEvery.js"),
				i = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/isArray.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, s) {
				var c = a(e) ? r : n;
				return s && o(e, t, s) && (t = void 0), c(e, i(t, 3))
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var r = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return r(e) + t
			}
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/cache/localStorage/index.ts"),
				c = s("./src/lib/combineRefs/index.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(d.a)(() => s.e("MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const h = Object(a.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Wd
				});
				return Object(u.Df)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Xd
				});
				return Object(u.Df)(t) ? void 0 : t
			}, (e, t) => e === u.ae.Enabled && t === u.ae.Enabled);
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
			var _;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(_ || (_ = {}));
			const C = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					r = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(r)).map(E).join("")
			})(_.SHA1, e);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const I = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				g = {
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
					disableCookies: u,
					envKey: m,
					localStorageSaltKey: E,
					localStorageViewerUserIdKey: _,
					playerName: w,
					playerVersion: x,
					respectDoNotTrack: y,
					saltLength: O,
					saltTimeToLive: N,
					viewerUserIdLength: T
				} = {
					...g,
					...t
				};
				class R extends r.Component {
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
						this.props.sessionId !== e.sessionId && this.doMuxThings(), this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef))
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
						return n.a.createElement(e, S({}, r, {
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
						const e = this.props.redditUserId || R.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = `${f()}${e}${t}`;
						return (await C(s)).substr(0, R.VIEWER_USER_ID_LENGTH)
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
							debug: R.DEBUG,
							disableCookies: R.DISABLE_COOKIES,
							respectDoNotTrack: R.RESPECT_DO_NOT_TRACK,
							...s,
							data: {
								env_key: R.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: R.PLAYER_NAME,
								player_version: R.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = R.LOCAL_STORAGE_SALT_KEY;
						let t = Object(o.a)(e);
						return t || (t = v(R.SALT_LENGTH), Object(o.b)(e, t, R.SALT_TIME_TO_LIVE)), t
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
							video_duration: s ? R.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? R.STREAM_TYPE_LIVE : R.STREAM_TYPE_ON_DEMAND,
							video_title: r,
							view_session_id: this.props.sessionId,
							player_software_version: this.getDashInstanceData() ? p.a.dashVersion : this.getHlsInstanceData() ? p.a.hlsVersion : null
						}
					}
				}
				R.displayName = I(e), R.ANONYMOUS_USER_ID = s, R.DEBUG = d, R.DISABLE_COOKIES = u, R.DURATION_LIVE = 1 / 0, R.ENV_KEY = m, R.LOCAL_STORAGE_SALT_KEY = E, R.LOCAL_STORAGE_VIEWER_USER_ID_KEY = _, R.PLAYER_NAME = w, R.PLAYER_VERSION = x, R.RESPECT_DO_NOT_TRACK = y, R.SALT_LENGTH = O, R.SALT_TIME_TO_LIVE = N, R.STREAM_TYPE_LIVE = "live", R.STREAM_TYPE_ON_DEMAND = "on-demand", R.VIEWER_USER_ID_LENGTH = T;
				const L = Object(r.forwardRef)((e, t) => n.a.createElement(R, S({}, e, {
						forwardedRef: t
					}))),
					A = Object(a.c)({
						redditUserId: b.i,
						isMuxEnabled: h
					});
				return Object(i.b)(A, null, null, {
					forwardRef: !0
				})(L)
			}
		},
		"./src/lib/VideoSession/VideoSessionManager.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = new WeakMap,
				n = new WeakMap,
				i = new WeakMap;
			class a {
				get laps() {
					return r.get(this).slice(1)
				}
				get paused() {
					return !n.has(this)
				}
				get time() {
					const e = Date.now(),
						t = i.get(this);
					return this.paused ? t : t + (e - n.get(this))
				}
				constructor() {
					this.reset()
				}
				start() {
					this.paused && n.set(this, Date.now())
				}
				pause() {
					this.paused || (i.set(this, this.time), n.delete(this))
				}
				reset() {
					r.set(this, [
						[0, 0]
					]), i.set(this, 0), n.delete(this)
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

			function u(e, t) {
				return {
					startedAt: e,
					expectedAt: e + t,
					completedAt: Date.now()
				}
			}

			function m(e, t = 0, s, ...r) {
				return function(e, t = 0, ...s) {
					const r = Date.now();
					return setTimeout((...s) => {
						const n = u(r, t);
						return e(n, ...s)
					}, t, ...s)
				}(h(e, s), t, ...r)
			}

			function h(e, t = l) {
				return function(s, ...r) {
					const n = function(e, t) {
						const {
							completedAt: s,
							expectedAt: r
						} = e, n = s > r + t;
						return {
							...e,
							expired: n
						}
					}(s, t);
					return e(n, ...r)
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
					this.delayIterator = null, this.id = d()(), this.meta = t, this.onError = s, this.onHeartbeat = r, this.sessionTimer = new a, this.startedAt = 0, this.watchTimer = new a
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
					t || "number" != typeof e || (this.timeout = m(this.handleTimeout, e))
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
					} = this.watchTimer, s = t[t.length - 1], r = s ? s[0] : 0, n = {
						...this.stats,
						heartbeatDurationMs: r
					};
					null === (e = this.onHeartbeat) || void 0 === e || e.call(this, {
						meta: this.meta,
						stats: n
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
							const n = {
								...t,
								...this.videoStats
							};
							null === (s = this.onHeartbeat) || void 0 === s || s.call(this, {
								meta: e,
								stats: n
							})
						}, "function" != typeof t.onHeartbeat) throw new Error("Invalid video session onHeartbeat callback.");
					this.idleTimer = new a, this.onHeartbeat = t.onHeartbeat, this.attachVideo(e)
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
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t, ...s) {
				let r, n = !1;
				const i = async () => {
					s && s.length ? await e.call(window, ...s) : await e.call(window), n || (r = window.setTimeout(i, t))
				};
				return r = window.setTimeout(i, t), () => {
					n = !0, window.clearTimeout(r)
				}
			}
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "a", (function() {
				return c
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				n = "MOD_PAGE_EVENT_POSTS_FAILED",
				i = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				o = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return o
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "t", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "r", (function() {
				return u
			})), s.d(t, "s", (function() {
				return m
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "l", (function() {
				return p
			})), s.d(t, "m", (function() {
				return b
			})), s.d(t, "k", (function() {
				return v
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "p", (function() {
				return C
			})), s.d(t, "q", (function() {
				return S
			})), s.d(t, "o", (function() {
				return I
			}));
			const r = "CREATE_COLLECTION_PENDING",
				n = "CREATE_COLLECTION_SUCCESS",
				i = "CREATE_COLLECTION_FAILED",
				a = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				o = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				h = "UPDATE_COLLECTION_FAILED",
				p = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				v = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				f = "REORDER_COLLECTION_PENDING",
				E = "REORDER_COLLECTION_SUCCESS",
				_ = "REORDER_COLLECTION_FAILED",
				C = "UPDATE_COLLECTION_LAYOUT_PENDING",
				S = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				I = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/setInterval/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
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
					await t(Object(n.c)(e));
					const r = Object(c.l)(s());
					r.lastUpdated && (this.currentStreamsRateSec = r.viewer_streams_refresh, this.currentConfigRateSec = r.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(e, t, s) {
					window.clearTimeout(this.configTimeout), await t(Object(n.c)(e));
					const r = Object(c.l)(s()),
						i = r.rpan_config_refresh_rate;
					this.currentConfigRateSec !== i && (this.currentConfigRateSec = i);
					const a = r.viewer_streams_refresh;
					this.currentStreamsRateSec !== a && (this.currentStreamsRateSec = a, this.startStreamsWork(e, this.streamOptions, t, s));
					const o = r.viewer_heartbeat_interval;
					o && this.heartbeatRateSec !== o && this.startHeartbeatWork(t, s);
					const d = r.viewer_heartbeat_interval;
					d && this.statsRefreshRateSec !== d && this.startStatsWork(t, s), this.configTimeout = window.setTimeout(() => this.startConfigWork(e, t, s), this.getConfigTimeout())
				}
				async startStreamsWork(e, t, s, r) {
					window.clearTimeout(this.streamsTimeout), Object(o.d)(r()) ? await s(Object(a.f)(e, t)) : await s(Object(a.e)(e, t)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(e, t, s, r), this.getStreamsTimeout(r()))
				}
				async startRecommendedViewerSubredditsWork(e, t) {
					await this.initializeConfig(i.R, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(n.b)());
					const s = Object(c.l)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(r.a)(() => e(Object(n.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(i.R, e, t), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(c.l)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStatsId && e(Object(a.d)(this.currentStatsId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(i.R, e, t), !this.currentHeartbeatId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(c.l)(t());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const a = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const o = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						d = () => {
							this.currentHeartbeatId && e(Object(n.d)(this.currentHeartbeatId))
						};
					this.clearSendHeartbeatInterval = Object(r.a)(() => {
						d(), this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.clearSendHeartbeatInterval = Object(r.a)(d, o)
					}, a)
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
				return m
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				a = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				l = s("./src/reddit/selectors/user.ts"),
				u = s("./src/reddit/actions/login.ts");
			Object(r.a)(n.D);
			const m = (e, t) => async (s, r, {
				apiContext: n
			}) => {
				const m = r();
				if (Object(l.K)(m))
					if (Object(c.f)(m)) await Object(a.g)(n(), e, t);
					else {
						await Object(i.d)(e);
						const s = Object(d.l)(r(), e);
						null !== s.post.voteState && Object(o.e)(s.post.voteState) === t || await Object(a.g)(n(), e, t)
					}
				else s(Object(u.i)())
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/lodash/memoize.js"),
				i = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				u = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = s("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				h = s("./src/reddit/selectors/experiments/econ/index.ts"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				b = s.n(p);
			const v = l.a.div("Userpic", b.a);
			t.a = i()(({
				defaultImage: e,
				userId: t
			}) => {
				const s = Object(c.e)(h.E),
					{
						processingAvatarImageUrl: n
					} = r.a;
				if (s) return e ? o.a.createElement("img", {
					className: b.a.NewUserpic,
					src: e,
					alt: "user icon"
				}) : o.a.createElement(m.a, {
					className: b.a.NewUserpic,
					userId: t
				});
				const i = (e => e.replace(d.Ib.Account + "_", ""))(t),
					{
						avatar: a,
						color: l
					} = (e => {
						const t = u.length,
							s = parseInt(e, 36),
							r = s % 20 + 1,
							n = Math.floor(s / 20) % t;
						return {
							avatar: ("0" + r).slice(-2),
							color: u[n]
						}
					})(i),
					p = `${n}/avatar_default_${a}_${l}.png`;
				return o.a.createElement(v, {
					"data-testid": "old-default-icon",
					style: {
						backgroundImage: `url(${p})`,
						backgroundColor: `#${l}`
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
			var r = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				c = s.n(o);
			t.a = ({
				className: e,
				style: t = {},
				userId: s
			}) => {
				const {
					processingAvatarImageUrl: n
				} = r.a, o = `url(${n}/defaults/v2/avatar_default_${(e=>{let t=0;for(const s of e)t+=s.charCodeAt();return t%8})(s)}.png)`;
				return i.a.createElement("div", {
					className: Object(a.a)(c.a.avatar, e),
					style: {
						...t,
						backgroundImage: o
					}
				})
			}
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/hls.js/dist/hls.js"),
				a = s.n(i),
				o = s("./src/lib/combineRefs/index.tsx"),
				c = s("./src/lib/env/index.ts");
			const d = 3,
				l = 5e3,
				u = 1e3;
			class m extends r.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoRef = n.a.createRef(), this.onPlayError = e => t => {
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
					return n.a.createElement("video", {
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
						onLevelLoaded: n,
						onLoadingData: i,
						url: o
					} = this.props;
					if (!o || !this.video) return;
					this.destroyHls();
					const c = new a.a({
						enableWorker: !1,
						fragLoadingMaxRetry: 2,
						levelLoadingMaxRetry: 4,
						manifestLoadingMaxRetry: 1,
						startFragPrefetch: !0,
						liveSyncDurationCount: 2,
						maxMaxBufferLength: 10
					});
					this.hls = c, r && r(c), this.subscribeErrorHandlers(c), c.on(a.a.Events.MANIFEST_LOADING, () => {
						i && i()
					}), c.on(a.a.Events.MANIFEST_PARSED, (r, n) => {
						e && !s && this.video && (this.video.currentTime = t, this.video.play().catch(this.onPlayError(c))), this.setState({
							...this.state,
							isInitialized: !0
						})
					}), c.on(a.a.Events.LEVEL_LOADED, (e, t) => {
						n && n(t.details)
					}), c.loadSource(o), c.attachMedia(this.video)
				}
				subscribeErrorHandlers(e) {
					e.on(a.a.Events.ERROR, (t, s) => {
						if (s.type === a.a.ErrorTypes.NETWORK_ERROR && s.response && 410 === s.response.code) this.onResourceRemoved(e);
						else if (s.fatal) switch (s.type) {
							case a.a.ErrorTypes.MEDIA_ERROR:
								return void this.handleFatalMediaError(e);
							case a.a.ErrorTypes.NETWORK_ERROR:
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
					t.details !== a.a.ErrorDetails.FRAG_LOAD_ERROR && t.details !== a.a.ErrorDetails.FRAG_LOAD_TIMEOUT ? this.onIrrecoverableError(e) : this.handleBadFragment(e, t.frag)
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
				return C
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "i", (function() {
				return N
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./node_modules/lodash/isNil.js"),
				c = s.n(o),
				d = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends r.Component {
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
					return e.consumers.length ? n.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && n.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var h = Object(i.b)(u, {})(m),
				p = s("./src/reddit/selectors/comments.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				v = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const s = Object(b.b)(e, t),
					r = Object(v.G)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var E = Object(i.b)(() => Object(a.a)(f, p.j, (e, t) => ({
				...e,
				depth: t
			})))(e => n.a.createElement(h, {
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
			const _ = (e, t) => {
				const s = Object(b.b)(e, t),
					r = Object(v.G)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var C = Object(i.b)(() => Object(a.a)(_, e => e))(e => n.a.createElement(h, {
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
			var S = Object(i.b)(() => Object(a.c)({
					subreddit: v.R
				}))(e => n.a.createElement(h, {
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
				I = s("./src/reddit/hooks/usePostContext.ts");
			var g = e => {
				const t = Object(I.a)(),
					s = Object(r.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? n.a.createElement(h, {
					className: e.className,
					type: "post",
					data: s
				}) : null
			};
			var w = e => {
				const t = Object(I.a)(),
					s = Object(r.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? n.a.createElement(h, {
					className: e.className,
					type: "postAuthor",
					data: s
				}) : null
			};
			var x = e => {
				const t = Object(I.a)(),
					s = Object(r.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? n.a.createElement(h, {
					className: e.className,
					type: "postModTools",
					data: s
				}) : null
			};
			var y = Object(i.b)(() => Object(a.c)({
				subreddit: v.R
			}))(e => n.a.createElement(h, {
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
			var O = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(v.J)(e, {
					identifier: t
				})
			}))(e => n.a.createElement(h, {
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
			var N = Object(i.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(v.R)(e, {
					subredditId: t
				}) : null
			}))(e => n.a.createElement(h, {
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
			s.r(t), s.d(t, "LivestreamTitle", (function() {
				return ee
			})), s.d(t, "RpanDescription", (function() {
				return te
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/telemetry/index.ts"),
				c = s("./src/higherOrderComponents/withMux/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/localStorageAvailable/index.ts"),
				m = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				h = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				p = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				v = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				f = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				E = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				_ = s("./src/reddit/constants/chat.ts"),
				C = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/helpers/localStorage/index.ts"),
				I = s("./src/reddit/helpers/overlay/index.ts"),
				g = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				w = s("./src/reddit/helpers/trackers/rpan.ts"),
				x = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				y = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				N = s("./src/reddit/selectors/platform.ts"),
				T = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				A = s("./src/reddit/components/Flatlist/index.tsx"),
				k = s("./src/reddit/components/Flatlist/constants.ts"),
				D = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				j = s("./src/reddit/components/HlsVideo/index.tsx"),
				M = s("./src/reddit/components/OverflowMenu/index.tsx"),
				P = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				V = s("./src/reddit/components/PostLeftRail/index.tsx"),
				U = s("./src/reddit/components/TrackingHelper/index.tsx"),
				H = s("./src/reddit/controls/Dropdown/Row.tsx"),
				B = s("./src/reddit/controls/InternalLink/index.tsx"),
				F = s("./src/reddit/controls/Score/index.tsx"),
				W = s("./src/reddit/icons/fonts/index.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				K = s.n(Y),
				z = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				Z = s.n(z);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = 20, J = l.nc, $ = l.nc, Q = Object(c.a)(j.a, {
				playerName: "RPAN DU Video Player"
			}), X = Object(i.b)(() => Object(a.c)({
				autoplay: R.b,
				isLoggedIn: R.K,
				isOverlayOpen: N.i,
				location: (e, {
					listingName: t
				}) => {
					const s = Object(T.m)(e, {
						listingName: t
					});
					let r;
					if (s) {
						r = `${Object(g.d)(s)}${Object(f.c)(t)}`
					} else {
						const e = t.replace(/^r\//, "");
						r = e === b.R ? Object(g.e)() : Object(g.f)(e)
					}
					return r
				},
				stream: (e, {
					listingName: t
				}) => Object(T.m)(e, {
					listingName: t
				}),
				streamById: e => t => Object(T.l)(e, t),
				rpanDuThresholdVariant: O.i,
				inRpanDUPreloadExperiment: O.b,
				inRpanDuTargetingExperiment: O.c
			}), (e, t) => ({
				onHideRpanUnit: (s, r) => e(Object(p.D)(t.listingName, s, {
					showToast: r.showToast
				})),
				openOverlay: t => e(Object(I.a)(t)),
				subscribeConfig: () => e(v.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(v.a.subscribeStats(t)),
				subscribeStreams: () => e(v.a.subscribeStreams(t.listingName, {
					pageSize: 1
				}))
			})), ee = () => n.a.createElement("h3", {
				className: Z.a.title
			}, G._("Top livestream", null, {
				hk: "4od1tZ"
			})), te = () => n.a.createElement("p", {
				className: Z.a.description
			}, G._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class se extends r.Component {
				constructor(e) {
					super(e), this.observableElement = n.a.createRef(), this.videoRef = n.a.createRef(), this.videoSessionManager = null, this.timerId = "rpan-du-active-watch-timer-id", this.handleSuccessfulPlayback = () => {
						Object(S.W)()
					}, this.handleUnsuccessfulPlayback = () => {
						const e = Number(Object(S.L)());
						if (e) {
							if (Date.now() - e >= J) {
								Object(S.W)();
								const e = 30 * l.B,
									t = Date.now() - e + $;
								this.props.onHideRpanUnit(t, {
									showToast: !1
								})
							}
						} else Object(S.Mb)(Date.now())
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
						}), r(Object(w.i)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: s
						} = this.props;
						t(s ? Object(w.j)(s, 1) : Object(w.j)()), this.props.inRpanDuTargetingExperiment && this.handleSuccessfulPlayback(), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(w.j)()), this.openOverlay()
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
						} = this.props, n = s && s.post.id === e.id ? s : r(e.id);
						if (!n) return;
						const i = !t.sessionDurationMs ? w.E : w.A,
							a = {
								chatState: _.a.None,
								playerType: w.a.DU
							},
							o = i(n, {
								...t,
								...a
							});
						this.props.sendEvent(o)
					}, this.state = {
						isInFocus: !0,
						isIntersecting: !1,
						isReady: !1,
						isInLoadingIntersection: !1,
						sessionId: ""
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
					return t === x.a.IS_LIVE || t === x.a.DISCONNECTED
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
					var s;
					const {
						video: r
					} = this, {
						autoplay: n,
						stream: i,
						inRpanDUPreloadExperiment: a
					} = this.props, {
						isOverlayOpen: o,
						stream: c
					} = e, {
						isReady: d
					} = this.state, {
						isInFocus: l,
						isIntersecting: m,
						isReady: h,
						isInLoadingIntersection: p
					} = t, {
						isVisible: b,
						isLoadable: v
					} = this, f = l && m && !o, E = !f && b, _ = f && !b, C = l && p && !o, S = a ? C && !v : _;
					(a ? !C && v : E) ? (this.subscribeConfig(), this.subscribeStreams()) : S && (this.unsubscribeConfig(), this.unsubscribeStreams());
					const I = i && i.post.id,
						g = I !== (c && c.post.id),
						w = !!I;
					g && this.setState({
						isReady: !1
					});
					const x = g && !w || w && _;
					if (g && w && b || w && E ? this.subscribeStats() : x && this.unsubscribeStats(), n && r) {
						const e = this.getOrCreateVideoSessionManager(r),
							t = !h && d,
							n = w && (t && b || E && d),
							i = w && _;
						g && e.endSession(), n ? (e.startSession({
							id: I
						}), this.setState({
							sessionId: (null === (s = null == e ? void 0 : e.sessionStats) || void 0 === s ? void 0 : s.id) || ""
						}), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.startTimeTracker()) : i && (e.pauseSession(), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.endTimeTracker())
					}
				}
				componentWillUnmount() {
					this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeStats(), this.unsubscribeIntersectionObserver(), this.unsubscribeVisibilityChange(), this.destroyVideoSessionManager()
				}
				render() {
					const {
						layout: e
					} = this.props, t = e === C.g.Classic ? this.renderClassicContent() : e === C.g.Compact ? this.renderCompactContent() : this.renderLargeContent();
					return n.a.createElement("div", {
						className: Object(d.a)(Z.a.container, {
							[K.a.largeAndMediumPostStyles]: e === C.g.Large || e === C.g.Medium,
							[K.a.classicPostStyles]: e === C.g.Classic,
							[K.a.compactPostStyles]: e === C.g.Compact,
							[Z.a.large]: e === C.g.Large || e === C.g.Medium,
							[Z.a.classic]: e === C.g.Classic,
							[Z.a.compact]: e === C.g.Compact
						}, this.props.className)
					}, e !== C.g.Large && n.a.createElement(V.b, {
						className: Z.a.leftRail,
						withoutComputedStyles: e === C.g.Compact
					}, n.a.createElement(re, {
						isVertical: !0
					}), e === C.g.Compact && n.a.createElement(re, {
						isVertical: !1
					})), n.a.createElement(P.a, {
						className: Z.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return n.a.createElement("div", {
						className: Z.a.titleAndDescriptionContainer
					}, n.a.createElement(B.a, {
						to: this.props.location
					}, n.a.createElement(ee, null), e && n.a.createElement(te, null)))
				}
				renderLargeContent() {
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Z.a.header
					}, this.renderTitleAndDescription(), n.a.createElement("div", {
						className: Z.a.flatListContainer
					}, n.a.createElement(ae, {
						onClick: this.onHideUnitClicked
					}))), n.a.createElement("div", {
						className: Z.a.body,
						ref: this.observableElement
					}, n.a.createElement(B.a, {
						to: this.props.location,
						onClick: this.onStreamClicked,
						className: Z.a.previewLink,
						tabIndex: 0
					}, n.a.createElement("div", {
						className: Z.a.previewContainer
					}, this.renderThumbnail()), this.renderInfo())))
				}
				renderClassicContent() {
					return n.a.createElement("div", {
						className: Z.a.body,
						ref: this.observableElement
					}, n.a.createElement(B.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, n.a.createElement("div", {
						className: Z.a.thumbnailContainer
					}, this.renderThumbnail())), n.a.createElement("div", {
						className: Z.a.main
					}, this.renderLiveStatus(), this.renderTitleAndDescription(!0), n.a.createElement("div", {
						className: Z.a.flatListContainer
					}, n.a.createElement(ne, {
						onClick: this.onHeaderClicked
					}), n.a.createElement(A.a, {
						className: Z.a.flatlistSeparator
					}), n.a.createElement("div", null, n.a.createElement(ie, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return n.a.createElement("div", {
						className: Z.a.body,
						ref: this.observableElement
					}, n.a.createElement("div", {
						className: Z.a.main
					}, n.a.createElement(ne, {
						onClick: this.onHeaderClicked
					}), this.renderLiveStatus(), this.renderTitleAndDescription(!0), n.a.createElement("div", {
						className: Z.a.flatListContainer
					}, n.a.createElement(ae, {
						onClick: this.onHideUnitClicked
					}))))
				}
				renderInfo() {
					if (this.props.stream && this.state.isReady) return n.a.createElement("div", {
						className: Z.a.infoContainer
					}, this.renderExpandIcon(), this.renderLiveStatus(), this.renderWatcherCount())
				}
				renderExpandIcon() {
					return n.a.createElement("div", {
						className: Z.a.bigExpando
					}, n.a.createElement(W.a, {
						name: "expand",
						className: Z.a.bigExpandoIcon
					}))
				}
				renderLiveStatus() {
					return this.isLive ? n.a.createElement("span", {
						className: Object(d.a)(Z.a.liveStatus, {
							[Z.a.compact]: this.props.layout === C.g.Compact
						})
					}, n.a.createElement(E.g, null)) : null
				}
				renderWatcherCount() {
					var e;
					if (!this.isLive) return null;
					const t = Math.max(1, (null === (e = this.props.stream) || void 0 === e ? void 0 : e.continuous_watchers) || 0);
					return n.a.createElement("span", {
						className: Z.a.watchingCount
					}, G._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [G._plural(t, "number")], {
						hk: "33zJ5F"
					}))
				}
				renderThumbnail() {
					return n.a.createElement("div", {
						className: Object(d.a)(Z.a.thumbnail, {
							[Z.a.loading]: !this.state.isReady
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
					return n.a.createElement(Q, {
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
						videoRef: this.videoRef,
						sessionId: this.state.sessionId
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
						threshold: t ? Object(O.h)(t) : .01
					}), this.intersectionObserver.observe(e), this.loadingIntersectionObserver = new IntersectionObserver(e => {
						e.forEach(e => {
							this.setState({
								isInLoadingIntersection: e.isIntersecting
							})
						})
					}, {
						threshold: t ? Object(O.h)(t) : .01,
						rootMargin: s ? "400%" : "0px"
					}), this.loadingIntersectionObserver.observe(e))
				}
				unsubscribeIntersectionObserver() {
					var e, t;
					null === (e = this.intersectionObserver) || void 0 === e || e.disconnect(), null === (t = this.loadingIntersectionObserver) || void 0 === t || t.disconnect()
				}
				subscribeVisibilityChange() {
					this.visibilityChangeId = m.a.subscribe(this.handleVisibilityChange)
				}
				unsubscribeVisibilityChange() {
					this.visibilityChangeId && m.a.unsubscribe(this.visibilityChangeId)
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
			const re = e => n.a.createElement(L.a, {
					className: Object(d.a)({
						[Z.a.verticalVotes]: e.isVertical,
						[Z.a.horizontalVotes]: !e.isVertical
					})
				}, n.a.createElement(F.a, {
					className: Z.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: y.a.notVoted
				})),
				ne = ({
					onClick: e
				}) => n.a.createElement("button", {
					className: Z.a.expandoButton,
					onClick: e
				}, n.a.createElement(W.a, {
					name: "expand",
					className: Z.a.expandoIcon
				})),
				ie = ({
					onClick: e,
					isLoggedIn: t
				}) => n.a.createElement(D.a, {
					displayText: G._("Show me less of this", null, {
						hk: "4t8AKC"
					}),
					flatlistItem: k.a.Hide,
					isLoggedIn: !!t,
					isUserOp: !1,
					onClick: e,
					noBreakpoints: !0
				}, n.a.createElement(W.a, {
					name: "hide"
				})),
				ae = ({
					onClick: e
				}) => n.a.createElement(M.b, {
					className: Z.a.overflowMenu,
					dropdownClassName: Z.a.overflowDropdown,
					dropdownId: "rpan-du-overflow"
				}, n.a.createElement(H.b, {
					className: Z.a.overflowItem,
					displayText: G._("Show me less of this", null, {
						hk: "2c4uFK"
					}),
					iconWrapperClassName: Z.a.overflowItemIconWrapper,
					textClassName: Z.a.overflowItemText,
					onClick: e
				}, n.a.createElement(W.a, {
					name: "hide"
				})));
			t.default = X(Object(U.c)(se))
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return w
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "b", (function() {
				return N
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "h", (function() {
				return R
			})), s.d(t, "f", (function() {
				return L
			})), s.d(t, "a", (function() {
				return A
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/components/OverflowMenu/index.tsx"),
				d = s("./src/reddit/controls/Dropdown/Row.tsx"),
				l = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				u = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				m = s("./src/reddit/icons/fonts/Share/index.tsx"),
				h = s("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				p = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				b = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				v = s("./src/reddit/icons/svgs/Report/index.tsx"),
				f = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				E = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				_ = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				C = s("./src/reddit/icons/svgs/VideoShare/index.tsx"),
				S = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				I = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				g = s.n(I);
			const w = ({
					onClick: e
				}) => i.a.createElement("button", {
					className: g.a.shareButton,
					onClick: e,
					"aria-label": r.fbt._("share video", null, {
						hk: "2e71ai"
					}),
					value: "share"
				}, i.a.createElement(m.a, {
					className: g.a.menuIcon
				})),
				x = ({
					isMuted: e,
					onToggle: t
				}) => i.a.createElement("button", {
					className: g.a.muteButton,
					onClick: t,
					"aria-label": r.fbt._("mute video", null, {
						hk: "Enspe"
					}),
					value: "mute"
				}, e ? i.a.createElement(E.a, {
					className: g.a.volumeIcon
				}) : i.a.createElement(S.a, {
					className: g.a.volumeIcon
				})),
				y = a.a.wrapped(u.a, "menuIcon", g.a),
				O = "rpan-overlay-menu",
				N = ({
					onClick: e,
					onHideClick: t,
					onReportClick: s
				}) => i.a.createElement(c.b, {
					className: g.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: O,
					icon: i.a.createElement(y, null),
					onClick: e
				}, i.a.createElement(d.b, {
					className: g.a.overflowItem,
					displayText: r.fbt._("View rules", null, {
						hk: "4lTvzy"
					}),
					iconWrapperClassName: g.a.overflowItemIconWrapper,
					key: `${O}-rules`,
					onClick: () => Object(o.e)(l.S, o.d.BLANK)
				}, i.a.createElement(f.a, {
					className: g.a.overflowItemIcon
				})), i.a.createElement(d.b, {
					className: g.a.overflowItem,
					displayText: r.fbt._("Visit RPAN community", null, {
						hk: "3KZliI"
					}),
					iconWrapperClassName: g.a.overflowItemIconWrapper,
					key: `${O}-community`,
					onClick: () => Object(o.e)(l.Q, o.d.BLANK)
				}, i.a.createElement(b.c, {
					className: g.a.overflowItemIcon
				})), i.a.createElement(d.b, {
					className: g.a.overflowItem,
					displayText: r.fbt._("Report", null, {
						hk: "4oVcnd"
					}),
					iconWrapperClassName: g.a.overflowItemIconWrapper,
					key: `${O}-report`,
					onClick: s
				}, i.a.createElement(v.a, {
					className: g.a.overflowItemIcon
				})), i.a.createElement(d.b, {
					className: g.a.overflowItem,
					displayText: r.fbt._("Hide", null, {
						hk: "1qXTIB"
					}),
					iconWrapperClassName: g.a.overflowItemIconWrapper,
					key: `${O}-hide`,
					onClick: t
				}, i.a.createElement(p.a, {
					className: g.a.overflowItemIcon
				}))),
				T = ({
					onClick: e
				}) => i.a.createElement("button", {
					className: g.a.promptButton,
					onClick: e
				}, i.a.createElement(_.a, null), i.a.createElement("span", null, r.fbt._("Replay Video", null, {
					hk: "1iD2Wj"
				}))),
				R = ({
					onClick: e
				}) => i.a.createElement("button", {
					className: g.a.promptButton,
					onClick: e
				}, i.a.createElement(C.a, null), i.a.createElement("span", null, r.fbt._("Share Video", null, {
					hk: "FYgQy"
				}))),
				L = ({
					onClick: e
				}) => i.a.createElement("button", {
					className: g.a.promptButton,
					onClick: e
				}, i.a.createElement(h.a, {
					className: g.a.crosspostIcon
				}), i.a.createElement("span", null, r.fbt._("Crosspost", null, {
					hk: "gORNr"
				}))),
				A = ({
					onClick: e
				}) => i.a.createElement("button", {
					className: `${g.a.promptButton} ${g.a.awardButton}`,
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
				return Y
			})), s.d(t, "h", (function() {
				return K
			})), s.d(t, "g", (function() {
				return z
			})), s.d(t, "p", (function() {
				return Z
			})), s.d(t, "f", (function() {
				return G
			})), s.d(t, "l", (function() {
				return q
			})), s.d(t, "n", (function() {
				return J
			})), s.d(t, "r", (function() {
				return $
			})), s.d(t, "j", (function() {
				return ee
			})), s.d(t, "k", (function() {
				return te
			})), s.d(t, "i", (function() {
				return ie
			})), s.d(t, "q", (function() {
				return ae
			})), s.d(t, "d", (function() {
				return ue
			})), s.d(t, "o", (function() {
				return me
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
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/opener/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				u = s("./src/reddit/actions/publicAccessNetwork/votes.ts"),
				m = s("./src/reddit/actions/subscription/index.ts"),
				h = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				p = s("./src/reddit/components/OverflowMenu/index.tsx"),
				b = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				v = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				E = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				_ = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				C = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				S = s("./src/reddit/icons/fonts/index.tsx"),
				I = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				g = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				w = s("./src/reddit/icons/fonts/Share/index.tsx"),
				x = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				y = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				O = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				N = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				T = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				R = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				L = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				A = s("./src/reddit/icons/svgs/Report/index.tsx"),
				k = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				D = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				j = s("./src/reddit/icons/svgs/Video/index.tsx"),
				M = s("./src/reddit/models/Vote/index.ts"),
				P = s("./src/reddit/selectors/experiments/shareToChatButton.ts"),
				V = s("./src/reddit/selectors/subreddit.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				B = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				F = s.n(B);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Y = ({
				children: e
			}) => n.a.createElement("div", {
				className: F.a.broadcastStatus
			}, e), K = ({
				onClick: e
			}) => n.a.createElement("button", {
				onClick: e
			}, n.a.createElement(z, null)), z = () => W._("{=Live}", [W._param("=Live", n.a.createElement("span", {
				className: F.a.live
			}, W._("Live", null, {
				hk: "8x90I"
			})))], {
				hk: "3ZBbO0"
			}), Z = () => W._("Recorded live", null, {
				hk: "2seH5c"
			}), G = ({
				onSubscribe: e,
				isSubscribed: t
			}) => {
				const [s, i] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => {
					const e = setTimeout(() => {
						i(!1)
					}, 3e3);
					return () => clearTimeout(e)
				}, [s]), t ? s ? n.a.createElement(y.a, {
					className: F.a.checkmarkIcon
				}) : null : n.a.createElement("button", {
					onClick: () => {
						i(!0), e()
					},
					className: F.a.joinButton
				}, n.a.createElement(R.a, {
					className: F.a.plusIcon
				}), n.a.createElement("span", {
					className: F.a.joinText
				}, W._("Join", null, {
					hk: "3n0zBz"
				})))
			}, q = ({
				onSelect: e,
				related: t,
				subreddit: s,
				subreddits: r
			}) => {
				let i = "";
				i = "home" === t ? "All" : "r/popular" === t ? "r/popular" : s || "All";
				const a = r.filter(e => e.prefixedName !== i),
					o = 30 + 35 * a.length;
				return n.a.createElement(p.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: n.a.createElement("span", {
						className: F.a.subreddit
					}, s || "RPAN"),
					style: {
						maxHeight: `${o}px`,
						overflowY: "auto",
						bottom: "0px"
					},
					isFixed: !0
				}, n.a.createElement("div", {
					className: F.a.dropdownLabel
				}, W._("Pick a Community", null, {
					hk: "4AfDwd"
				})), a.map(t => n.a.createElement(f.b, {
					className: F.a.dropdownRow,
					displayText: t.prefixedName,
					key: `rpan-recommended-viewer-subreddits-dropdown-${t.prefixedName}`,
					onClick: () => e(t)
				})))
			}, J = ({
				text: e
			}) => n.a.createElement("h1", {
				className: F.a.title
			}, e), $ = ({
				broadcast: e,
				live: t
			}) => n.a.createElement("div", {
				className: F.a.watchersCount
			}, t ? n.a.createElement(Q, {
				count: Math.max(1, e.continuous_watchers)
			}) : n.a.createElement(X, {
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
				onClickShare: s,
				onClickShareToChat: r
			}) => {
				const a = Object(i.e)(P.a);
				return n.a.createElement(p.b, {
					className: F.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: ee,
					onClick: s,
					icon: n.a.createElement(w.a, null)
				}, n.a.createElement(f.b, {
					className: F.a.menuOverflowItem,
					displayText: W._("Copy Link", null, {
						hk: "2oo038"
					}),
					iconWrapperClassName: F.a.overflowItemShareIconWrapper,
					key: `${ne}-share`,
					onClick: t
				}, n.a.createElement(S.a, {
					name: "link_post",
					className: F.a.linkIcon
				})), n.a.createElement(f.b, {
					className: F.a.menuOverflowItem,
					displayText: W._("Crosspost", null, {
						hk: "QSd6Z"
					}),
					iconWrapperClassName: F.a.overflowItemShareIconWrapper,
					key: `${ne}-crosspost`,
					onClick: e
				}, n.a.createElement(S.a, {
					name: "crosspost",
					className: F.a.overflowItemIcon
				})), a && n.a.createElement(f.b, {
					className: F.a.menuOverflowItem,
					displayText: W._("Share to Chat", null, {
						hk: "2uVgxZ"
					}),
					iconWrapperClassName: F.a.overflowItemShareIconWrapper,
					key: `${ne}-sharetochat`,
					onClick: r
				}, n.a.createElement(S.a, {
					name: "chat",
					className: F.a.overflowItemIcon
				})))
			}, se = o.a.wrapped(g.a, "menuIcon", F.a), re = e => {
				let t = 186;
				if (e) {
					t += 74 + 40
				}
				return t
			}, ne = "rpan-overlay-menu", ie = ({
				onClick: e,
				onHideClick: t,
				onReportClick: s,
				onToggleLockClick: r,
				isCommentsLocked: i,
				hasModeratorPermissions: a,
				onEndBroadcastClick: o,
				onRpanStudioClick: d,
				subreddit: u
			}) => n.a.createElement(p.b, {
				className: F.a.menuButton,
				defaultButtonOutline: !0,
				dropdownId: ne,
				icon: n.a.createElement(se, null),
				onClick: e,
				style: {
					maxHeight: `${re(a)}px`,
					overflowY: "auto",
					bottom: "0px"
				}
			}, n.a.createElement(f.b, {
				className: F.a.overflowItem,
				displayText: W._("View rules", null, {
					hk: "haY6r"
				}),
				iconWrapperClassName: F.a.overflowItemIconWrapper,
				key: `${ne}-rules`,
				onClick: () => Object(c.e)(l.S, c.d.BLANK)
			}, n.a.createElement(k.a, {
				className: F.a.overflowItemIcon
			})), n.a.createElement(f.b, {
				className: F.a.overflowItem,
				displayText: W._("Stream from desktop", null, {
					hk: "4dOdik"
				}),
				iconWrapperClassName: F.a.overflowItemIconWrapper,
				key: `${ne}-rpanstudio`,
				onClick: d
			}, n.a.createElement(j.a, {
				className: F.a.overflowItemIcon
			})), n.a.createElement(f.b, {
				className: F.a.overflowItem,
				displayText: W._("Visit community", null, {
					hk: "2KViLk"
				}),
				iconWrapperClassName: F.a.overflowItemIconWrapper,
				key: `${ne}-community`,
				onClick: () => {
					Object(c.e)(Object(_.a)(u), c.d.BLANK)
				}
			}, (e => {
				const t = e && Object(E.a)({
					subreddit: e
				});
				return t ? n.a.createElement("img", {
					className: F.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					},
					src: t
				}) : n.a.createElement(O.a, {
					className: F.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					}
				})
			})(u)), n.a.createElement(f.b, {
				className: F.a.overflowItem,
				displayText: W._("Report", null, {
					hk: "4oVcnd"
				}),
				iconWrapperClassName: F.a.overflowItemIconWrapper,
				key: `${ne}-report`,
				onClick: s
			}, n.a.createElement(A.a, {
				className: F.a.overflowItemIcon
			})), n.a.createElement(f.b, {
				className: F.a.overflowItem,
				displayText: W._("Hide", null, {
					hk: "15vs9C"
				}),
				iconWrapperClassName: F.a.overflowItemIconWrapper,
				key: `${ne}-hide`,
				onClick: t
			}, n.a.createElement(N.a, {
				className: F.a.overflowItemIcon
			})), a && n.a.createElement(n.a.Fragment, null, n.a.createElement(f.b, {
				className: F.a.headerItem,
				displayText: W._("Mod Actions", null, {
					hk: "19zCiw"
				}),
				key: `${ne}-modaction`,
				onClick: () => {}
			}), n.a.createElement(f.b, {
				className: F.a.overflowItem,
				displayText: i ? W._("Unlock comments", null, {
					hk: "Btg6R"
				}) : W._("Lock comments", null, {
					hk: "3Ew6q9"
				}),
				iconWrapperClassName: F.a.overflowItemIconWrapper,
				key: `${ne}-lock`,
				onClick: r
			}, i ? n.a.createElement(D.a, {
				className: F.a.overflowItemIcon
			}) : n.a.createElement(T.a, {
				className: F.a.overflowItemIcon
			})), n.a.createElement(f.b, {
				className: F.a.endBroadcastItem,
				displayText: W._("Remove broadcast", null, {
					hk: "3GaDuI"
				}),
				iconWrapperClassName: F.a.overflowItemIconWrapper,
				key: `${ne}-end`,
				onClick: o
			}, n.a.createElement(L.a, {
				className: F.a.endBroadcastIcon
			})))), ae = Object(i.b)(null, e => ({
				vote: (t, s) => e(Object(u.a)(t, s))
			}))(class extends r.Component {
				constructor(e) {
					super(e), this.handleUpVote = () => {
						const e = this.toggleVoteState(M.a.upvoted);
						this.vote(e)
					}, this.handleDownVote = () => {
						const e = this.toggleVoteState(M.a.downvoted);
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
					return null == e ? null : t && void 0 !== this.voteState ? e - Object(M.e)(t) + this.voteState : e
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
					const e = this.voteState === M.a.upvoted,
						t = this.voteState === M.a.downvoted;
					return n.a.createElement("div", {
						className: F.a.votePanel
					}, n.a.createElement(oe, {
						onClick: this.handleUpVote,
						voted: e
					}), null !== this.score ? n.a.createElement(de, {
						score: this.score
					}) : null, n.a.createElement(ce, {
						onClick: this.handleDownVote,
						voted: t
					}))
				}
				setVoteStateFromBroadcastProp() {
					const {
						id: e,
						voteState: t
					} = this.props.broadcast.post;
					this.setVoteState(e, Object(M.e)(t))
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
					return e === this.voteState ? M.a.notVoted : e
				}
				vote(e) {
					const {
						broadcast: t,
						onUpvote: s,
						onDownvote: r
					} = this.props, {
						id: n
					} = t.post;
					this.setVoteState(n, e), this.props.vote(n, e), e === M.a.upvoted ? s() : e === M.a.downvoted && r()
				}
			}), oe = ({
				onClick: e,
				voted: t
			}) => n.a.createElement("button", {
				className: Object(a.a)(F.a.voteButton, F.a.upVoteButton, {
					[F.a.voted]: t
				}),
				onClick: e,
				value: "upvote",
				"aria-label": W._("Upvote", null, {
					hk: "Ufd6r"
				})
			}, n.a.createElement(x.a, {
				className: F.a.voteIcon
			})), ce = ({
				onClick: e,
				voted: t
			}) => n.a.createElement("button", {
				className: Object(a.a)(F.a.voteButton, F.a.downVoteButton, {
					[F.a.voted]: t
				}),
				onClick: e,
				value: "downvote",
				"aria-label": W._("Downvote", null, {
					hk: "ZDRA3"
				})
			}, n.a.createElement(I.a, {
				className: F.a.voteIcon
			})), de = ({
				score: e
			}) => n.a.createElement("div", {
				className: F.a.score
			}, Object(d.b)(e)), le = ({
				children: e
			}) => n.a.createElement("div", {
				className: F.a.prompt
			}, e), ue = () => n.a.createElement(le, null, W._("Connection issues", null, {
				hk: "hIrnJ"
			})), me = () => n.a.createElement(le, null, W._("Tuning...", null, {
				hk: "3dG7Ks"
			})), he = () => n.a.createElement(le, null, W._("Broadcast paused", null, {
				hk: "jxvku"
			})), pe = ({
				onClickCrosspost: e,
				onClickReplay: t,
				onClickShare: s
			}) => n.a.createElement(le, null, n.a.createElement("div", {
				className: F.a.promptButtonSet
			}, n.a.createElement(H.g, {
				onClick: t
			}), n.a.createElement(H.h, {
				onClick: s
			}), n.a.createElement(H.f, {
				onClick: e
			}))), be = ({
				onClickAward: e
			}) => n.a.createElement(le, null, n.a.createElement("div", {
				className: F.a.awardPromptWrapper
			}, n.a.createElement("div", {
				className: F.a.awardPromptLabel
			}, W._("Award this broadcast to give it more airtime", null, {
				hk: "20jmEz"
			})), n.a.createElement(H.a, {
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
				} = e, i = Ee(r), a = _e(r), o = Ce(r, !a), c = a ? W._("Unfollow u/{name}", [W._param("name", r)], {
					hk: "2n0wqa"
				}) : W._("Follow u/{name}", [W._param("name", r)], {
					hk: "20X8Bw"
				}), d = n.a.createElement("button", {
					className: F.a.subscribeToProfileButton,
					onClick: () => {
						s(!a), o()
					},
					title: c
				}, n.a.createElement(Se, {
					profile: e
				}), n.a.createElement(Ie, {
					isSubscribed: a
				}));
				return i && i.enableFollowers ? d : null
			}, Ee = e => Object(i.e)(t => Object(U.nb)(t, {
				userName: e
			})), _e = e => Object(i.e)(t => Object(V.db)(t, {
				identifier: {
					name: e,
					type: v.a.PROFILE
				}
			})), Ce = (e, t) => {
				const s = Object(i.d)();
				return Object(r.useCallback)(() => {
					s(Object(m.d)([{
						name: e,
						type: v.a.PROFILE
					}], t))
				}, [s, e, t])
			}, Se = ({
				profile: e
			}) => {
				const {
					id: t,
					name: s
				} = e, r = Ee(s), i = xe(r), o = i && Object(C.a)(r.accountIcon);
				return n.a.createElement("div", {
					className: Object(a.a)(F.a.subscribeToProfileAvatar, {
						[F.a.snoovatarHeadshot]: o
					})
				}, r ? i ? o ? n.a.createElement(b.a, {
					headshot: r.accountIcon
				}) : n.a.createElement("img", {
					src: r.accountIcon
				}) : n.a.createElement(h.a, {
					userId: t
				}) : null)
			}, Ie = ({
				isSubscribed: e
			}) => n.a.createElement("div", {
				className: Object(a.a)(F.a.subscribeToProfileStatus, {
					[F.a.isSubscribed]: e
				})
			}, e ? n.a.createElement(ge, null) : n.a.createElement(we, null)), ge = () => n.a.createElement("svg", {
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M17.7072 5.69337L16.3083 4.29337C16.1203 4.10537 15.8662 4.00037 15.6012 4.00037C15.3352 4.00037 15.0812 4.10537 14.8942 4.29337L7.90025 11.2864L5.10725 8.49337C4.71725 8.10237 4.08425 8.10237 3.69325 8.49337L2.29325 9.89337C1.90225 10.2844 1.90225 10.9174 2.29325 11.3074L7.19325 16.2074C7.38925 16.4024 7.64425 16.5004 7.90025 16.5004C8.15625 16.5004 8.41225 16.4024 8.60725 16.2074L17.7072 7.10737C18.0982 6.71637 18.0982 6.08437 17.7072 5.69337"
			})), we = () => n.a.createElement("svg", {
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M12.8,6.4 L9.6,6.4 L9.6,3.2 C9.6,2.7576 9.2424,2.4 8.8,2.4 L7.2,2.4 C6.7576,2.4 6.4,2.7576 6.4,3.2 L6.4,6.4 L3.2,6.4 C2.7584,6.4 2.4,6.7576 2.4,7.2 L2.4,8.8 C2.4,9.2424 2.7584,9.6 3.2,9.6 L6.4,9.6 L6.4,12.8 C6.4,13.2424 6.7576,13.6 7.2,13.6 L8.8,13.6 C9.2424,13.6 9.6,13.2424 9.6,12.8 L9.6,9.6 L12.8,9.6 C13.2424,9.6 13.6,9.2424 13.6,8.8 L13.6,7.2 C13.6,6.7576 13.2424,6.4 12.8,6.4"
			})), xe = e => {
				const t = Object(i.e)(U.k),
					s = Object(i.e)(U.C),
					r = Object(i.e)(U.eb);
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
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				o = s.n(a);
			const c = e => n.a.createElement("span", {
				className: Object(i.a)(o.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => n.a.createElement(c, {
				className: Object(i.a)(o.a.metaSeparator, e),
				isSmall: t
			})
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(r.a)(e).banner.iconImage ? String(Object(r.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: s
					} of e) t.push(Object(r.f)(s));
				return t
			}
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			var r = s("./src/lib/constants/index.ts");
			const n = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.I.NO_STRIPE_SUBSCRIPTION:
							case r.I.USER_DOESNT_EXIST:
							case r.I.USER_REQUIRED_ERROR:
							case r.I.VALIDATION_ERROR:
								return e;
							case r.I.NO_USER:
							case r.I.NO_TEXT:
							case r.I.NO_URL:
								return r.I.VALIDATION_ERROR;
							case r.I.CREDIT_CARD_FAILURE:
							case r.I.CREDIT_CARD_FAILURE_GENERIC:
								return r.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.I.VALIDATION_ERROR
				},
				i = e => {
					const t = e.body;
					return {
						type: n(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				a = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: i(e)
					} : e
				};
			t.a = i
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return o
			})), s.d(t, "y", (function() {
				return c
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "p", (function() {
				return l
			})), s.d(t, "q", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "o", (function() {
				return p
			})), s.d(t, "r", (function() {
				return b
			})), s.d(t, "k", (function() {
				return v
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "l", (function() {
				return g
			})), s.d(t, "t", (function() {
				return w
			})), s.d(t, "j", (function() {
				return x
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "x", (function() {
				return O
			})), s.d(t, "u", (function() {
				return N
			})), s.d(t, "a", (function() {
				return T
			})), s.d(t, "s", (function() {
				return R
			})), s.d(t, "v", (function() {
				return L
			})), s.d(t, "w", (function() {
				return A
			}));
			var r = s("./src/reddit/models/ScheduledPost/index.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					...n.defaults(e),
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				a = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(r.p)(e)
				}),
				o = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...i(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...i(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...i(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...i(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...i(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...i(e)
				}),
				h = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...i(e)
				}),
				p = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...i(t),
					scheduledPost: a(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...i(t),
					scheduledPost: a(e)
				}),
				v = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...i(e)
				}),
				f = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...i(e)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...i(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...i(e)
				}),
				C = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...i(t),
					actionInfo: n.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				S = {
					[r.d.Hourly]: "hourly_frequency",
					[r.d.Daily]: "daily_frequency",
					[r.d.Weekly]: "weekly_frequency",
					[r.d.Monthly]: "monthly_frequency",
					[r.b]: "custom_frequency"
				},
				I = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : S[e],
					...i(t)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...i(e)
				}),
				w = (e, t, s) => a => ({
					source: "post",
					action: "click",
					noun: Object(r.l)(e),
					...i(a),
					actionInfo: n.actionInfo(a, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				x = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...i(e)
				}),
				y = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...i(e)
				}),
				O = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...i(e)
				}),
				N = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...i(e),
					scheduledPost: a(t)
				}),
				T = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...i(e)
				}),
				R = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...i(e),
					scheduledPost: a(t)
				}),
				L = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...i(e)
				}),
				A = () => (e, t) => {
					const s = i(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...s,
						actionInfo: {
							...s.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: a(t)
					}
				}
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");

			function i(e, t = n.a) {
				return Object(r.e)(s => Object(n.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(i.b)("menu",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			const i = e => n.a.createElement("svg", {
					className: e.className,
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M5.00001 13.41C4.91441 13.4079 4.82982 13.391 4.75001 13.36C4.36493 13.225 3.99331 13.0542 3.64001 12.85L1.53001 13.37C1.4053 13.4019 1.27448 13.4012 1.15014 13.3679C1.02579 13.3347 0.912098 13.27 0.820006 13.18C0.729222 13.0864 0.664059 12.971 0.630783 12.8449C0.597508 12.7188 0.59724 12.5862 0.630006 12.46L1.15001 10.36C0.684603 9.54657 0.393688 8.64513 0.295784 7.71309C0.197881 6.78105 0.295135 5.83883 0.581353 4.94644C0.867572 4.05404 1.33648 3.23103 1.95823 2.5298C2.57997 1.82857 3.34092 1.2645 4.19263 0.873491C5.04433 0.482487 5.96813 0.273123 6.90519 0.258731C7.84225 0.244338 8.77204 0.425233 9.63535 0.789896C10.4987 1.15456 11.2766 1.695 11.9196 2.3768C12.5626 3.05861 13.0565 3.86683 13.37 4.75001C13.4032 4.83336 13.4213 4.92181 13.4236 5.01127C13.0459 4.9912 12.6656 4.99785 12.2855 5.03189C10.5542 5.18694 8.92053 5.90165 7.6316 7.06789C6.34267 8.23414 5.46866 9.78846 5.1418 11.4957C5.02032 12.1302 4.97688 12.773 5.00962 13.4104L5.00001 13.41ZM13 19.75C11.8204 19.7506 10.6615 19.4401 9.64004 18.85L7.53004 19.37C7.40533 19.4019 7.27451 19.4012 7.15017 19.3679C7.02582 19.3347 6.91213 19.2699 6.82004 19.18C6.72925 19.0864 6.66409 18.971 6.63081 18.8449C6.59754 18.7188 6.59727 18.5862 6.63004 18.46L7.15004 16.36C6.41066 15.0718 6.11686 13.5756 6.31416 12.1034C6.51145 10.6312 7.18884 9.26522 8.24132 8.21711C9.29381 7.169 10.6626 6.49731 12.1356 6.30615C13.6086 6.11498 15.1035 6.41502 16.3887 7.15975C17.6739 7.90448 18.6775 9.05233 19.244 10.4254C19.8106 11.7984 19.9084 13.32 19.5224 14.7543C19.1363 16.1886 18.288 17.4556 17.1088 18.3588C15.9296 19.2619 14.4854 19.751 13 19.75Z",
					fill: "inherit"
				})),
				a = e => n.a.createElement("svg", {
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "inherit",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, n.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.426 16.3838C11.243 16.3088 11.0765 16.1978 10.9385 16.0598L6.43867 11.56C5.85369 10.9751 5.85369 10.0256 6.43867 9.43912C7.02515 8.85414 7.97461 8.85414 8.56108 9.43912L10.5005 11.3785V1.49994C10.5005 0.671973 11.171 0 12.0004 0C12.8284 0 13.5004 0.671973 13.5004 1.49994V11.3785L15.4383 9.43912C16.0248 8.85414 16.9742 8.85414 17.5607 9.43912C18.1457 10.0256 18.1457 10.9751 17.5607 11.56L13.0609 16.0598C12.9229 16.1978 12.7564 16.3088 12.5734 16.3838C12.3889 16.4603 12.1954 16.4993 12.0004 16.4993C11.804 16.4993 11.6105 16.4603 11.426 16.3838ZM20.9991 15.0003C20.9991 14.1724 21.6711 13.5004 22.4991 13.5004C23.3271 13.5004 23.999 14.1724 23.999 15.0003V19.5002C23.999 21.9811 21.9801 24 19.4992 24H4.49982C2.01892 24 0 21.9811 0 19.5002V15.0003C0 14.1724 0.671973 13.5004 1.49994 13.5004C2.32791 13.5004 2.99988 14.1724 2.99988 15.0003V19.5002C2.99988 20.3266 3.67335 21.0001 4.49982 21.0001H19.4992C20.3257 21.0001 20.9991 20.3266 20.9991 19.5002V15.0003Z",
					fill: "inherit"
				})),
				o = e => n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, n.a.createElement("path", {
					d: "M5,3.723h9v-2H5a3,3,0,0,0-3,3H4A1,1,0,0,1,5,3.723Z"
				}), n.a.createElement("path", {
					d: "M19.294,7.429A1.116,1.116,0,0,0,18.5,7.1h-.009l-2.345.018a1.117,1.117,0,0,0-.613.185h0L13.626,8.562V7.223A1.127,1.127,0,0,0,12.5,6.1H1.5A1.127,1.127,0,0,0,.376,7.223v3.494a8.5,8.5,0,0,1,7.652,7.631H12.5a1.127,1.127,0,0,0,1.125-1.125V15.884l1.91,1.26a1.145,1.145,0,0,0,.609.184l2.347.016H18.5a1.125,1.125,0,0,0,1.125-1.125V8.226A1.116,1.116,0,0,0,19.294,7.429Z"
				}), n.a.createElement("path", {
					d: "M.374,14.764v1.29a3.221,3.221,0,0,1,2.311,2.294H3.971A4.481,4.481,0,0,0,.374,14.764Z"
				}), n.a.createElement("path", {
					d: "M.374,12.1v1.275a5.857,5.857,0,0,1,5.007,4.973H6.644A7.12,7.12,0,0,0,.374,12.1Z"
				})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"
			})))
		},
		"./src/reddit/icons/svgs/Rules/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 30 30",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M20.7094669,9.4275 L9.29053307,9.4275 C8.86319398,9.4275 8.51636806,9.0915 8.51636806,8.6775 C8.51636806,8.2635 8.86319398,7.9275 9.29053307,7.9275 L20.7094669,7.9275 C21.136806,7.9275 21.4836319,8.2635 21.4836319,8.6775 C21.4836319,9.0915 21.136806,9.4275 20.7094669,9.4275 M20.7094669,14.142 L9.29053307,14.142 C8.86319398,14.142 8.51636806,13.806 8.51636806,13.392 C8.51636806,12.978 8.86319398,12.642 9.29053307,12.642 L20.7094669,12.642 C21.136806,12.642 21.4836319,12.978 21.4836319,13.392 C21.4836319,13.806 21.136806,14.142 20.7094669,14.142 M20.7094669,18.858 L9.29053307,18.858 C8.86319398,18.858 8.51636806,18.522 8.51636806,18.108 C8.51636806,17.6925 8.86319398,17.358 9.29053307,17.358 L20.7094669,17.358 C21.136806,17.358 21.4836319,17.6925 21.4836319,18.108 C21.4836319,18.522 21.136806,18.858 20.7094669,18.858 M20.7094669,23.5725 L9.29053307,23.5725 C8.86319398,23.5725 8.51636806,23.2365 8.51636806,22.8225 C8.51636806,22.407 8.86319398,22.0725 9.29053307,22.0725 L20.7094669,22.0725 C21.136806,22.0725 21.4836319,22.407 21.4836319,22.8225 C21.4836319,23.2365 21.136806,23.5725 20.7094669,23.5725 M23.95167,4.5 L20.4570891,4.5 C19.9198186,3.6075 18.9335324,3 17.7893165,3 L12.2106835,3 C11.0664676,3 10.0801814,3.6075 9.54291086,4.5 L6.04833002,4.5 C5.19365185,4.5 4.5,5.172 4.5,6 L4.5,25.5 C4.5,26.328 5.19365185,27 6.04833002,27 L23.95167,27 C24.8063482,27 25.5,26.328 25.5,25.5 L25.5,6 C25.5,5.172 24.8063482,4.5 23.95167,4.5"
			})))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", {
				transform: "translate(3, 4)"
			}, n.a.createElement("path", {
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				o = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(i.a)(o.a.icon, e.className),
				viewBox: "0 0 64 64",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("circle", {
				cx: "32",
				cy: "32",
				r: "30.72",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "2.4576"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M42.59 27.9447L35.18 21.5931C34.8212 21.2847 34.3292 21.2175 33.8984 21.4143C33.4676 21.6123 33.2 22.0299 33.2 22.5039V24.7995C29.5004 24.7995 26.5472 26.0031 24.4232 28.3755C21.6128 31.5159 20.4992 36.5271 21.2036 42.8667C21.2372 43.1715 21.4952 43.3995 21.7988 43.3995C21.8108 43.3995 21.8216 43.3995 21.8336 43.3983C22.1504 43.3815 22.4 43.1187 22.4 42.7995C22.4 39.3039 23.5508 36.4155 25.7276 34.4451C27.7148 32.6475 30.4868 31.7307 33.14 31.9971C33.1604 31.9983 33.1796 31.9911 33.2 31.9911V34.2951C33.2 34.7691 33.4676 35.1879 33.8984 35.3859C34.0616 35.4603 34.2332 35.4975 34.4036 35.4975C34.682 35.4975 34.9568 35.3979 35.18 35.2071L42.59 28.8555C42.7232 28.7415 42.8 28.5747 42.8 28.3995C42.8 28.2243 42.7232 28.0587 42.59 27.9447Z"
			})))
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "r", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "n", (function() {
				return u
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "q", (function() {
				return f
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "j", (function() {
				return _
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return S
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "m", (function() {
				return g
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "l", (function() {
				return x
			})), s.d(t, "p", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/lib/assertNever.ts"),
				n = s("./src/reddit/models/GqlTopLevelField.ts"),
				i = s("./src/reddit/models/User/index.ts");
			const a = "scheduledposts";
			var o, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(o || (o = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === i.c.AvailableRedditor,
				m = e => e.__typename === n.a.Subreddit;
			var h, p, b, v;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(h || (h = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(p || (p = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(v || (v = {}));
			const f = e => p[v[e]],
				E = e => v[p[e]],
				_ = e => b[p[e]],
				C = e => p[b[e]],
				S = e => v[b[e]];
			var I;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(I || (I = {}));
			const g = e => {
					switch (e) {
						case I.Hourly:
						case I.Daily:
						case I.Weekly:
						case I.Monthly:
							return !0
					}
					return !1
				},
				w = "custom",
				x = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(r.a)(e)
					}
				},
				y = e => "frequency" in e && !!e.frequency
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RpanListingUnit.353ba5f3238b1a4a92ee.js.map