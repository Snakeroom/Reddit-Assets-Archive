// https://www.redditstatic.com/desktop2x/RpanListingUnit.395540d7ae4b4336435c.js
// Retrieved at 12/1/2021, 5:50:04 PM by Reddit Dataminer v1.0.0
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
				o = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/isArray.js"),
				i = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, s) {
				var c = a(e) ? r : n;
				return s && i(e, t, s) && (t = void 0), c(e, o(t, 3))
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/cache/localStorage/index.ts"),
				c = s("./src/lib/combineRefs/index.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(d.a)(() => s.e("MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(a.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Ld
				});
				return Object(u.uf)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Md
				});
				return Object(u.uf)(t) ? void 0 : t
			}, (e, t) => e === u.Pd.Enabled && t === u.Pd.Enabled);
			var h = s("./src/config.ts");
			var b = s("./src/reddit/selectors/user.ts");
			const f = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						r = new Uint32Array(e);
					return crypto.getRandomValues(r), Array.from(r).map(e => t.charAt(e % s)).join("")
				},
				v = (e = new Date) => new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3"),
				g = (e, t = 0) => Math.trunc(e).toString(16).padStart(t, "0");
			var _;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(_ || (_ = {}));
			const C = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					r = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(r)).map(g).join("")
			})(_.SHA1, e);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				x = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: h.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: `Reddit/Version Build ${h.a.buildNumber} ${h.a.appName}`,
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
					localStorageSaltKey: g,
					localStorageViewerUserIdKey: _,
					playerName: O,
					playerVersion: y,
					respectDoNotTrack: I,
					saltLength: S,
					saltTimeToLive: k,
					viewerUserIdLength: T
				} = {
					...x,
					...t
				};
				class j extends r.Component {
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
						return n.a.createElement(e, E({}, r, {
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
						const e = this.props.redditUserId || j.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = `${v()}${e}${t}`;
						return (await C(s)).substr(0, j.VIEWER_USER_ID_LENGTH)
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
							debug: j.DEBUG,
							disableCookies: j.DISABLE_COOKIES,
							respectDoNotTrack: j.RESPECT_DO_NOT_TRACK,
							...s,
							data: {
								env_key: j.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: j.PLAYER_NAME,
								player_version: j.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = j.LOCAL_STORAGE_SALT_KEY;
						let t = Object(i.a)(e);
						return t || (t = f(j.SALT_LENGTH), Object(i.b)(e, t, j.SALT_TIME_TO_LIVE)), t
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
							video_duration: s ? j.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? j.STREAM_TYPE_LIVE : j.STREAM_TYPE_ON_DEMAND,
							video_title: r,
							view_session_id: this.props.sessionId,
							player_software_version: this.getDashInstanceData() ? h.a.dashVersion : this.getHlsInstanceData() ? h.a.hlsVersion : null
						}
					}
				}
				j.displayName = w(e), j.ANONYMOUS_USER_ID = s, j.DEBUG = d, j.DISABLE_COOKIES = u, j.DURATION_LIVE = 1 / 0, j.ENV_KEY = m, j.LOCAL_STORAGE_SALT_KEY = g, j.LOCAL_STORAGE_VIEWER_USER_ID_KEY = _, j.PLAYER_NAME = O, j.PLAYER_VERSION = y, j.RESPECT_DO_NOT_TRACK = I, j.SALT_LENGTH = S, j.SALT_TIME_TO_LIVE = k, j.STREAM_TYPE_LIVE = "live", j.STREAM_TYPE_ON_DEMAND = "on-demand", j.VIEWER_USER_ID_LENGTH = T;
				const N = Object(r.forwardRef)((e, t) => n.a.createElement(j, E({}, e, {
						forwardedRef: t
					}))),
					A = Object(a.c)({
						redditUserId: b.i,
						isMuxEnabled: p
					});
				return Object(o.b)(A, null, null, {
					forwardRef: !0
				})(N)
			}
		},
		"./src/lib/VideoSession/VideoSessionManager.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = new WeakMap,
				n = new WeakMap,
				o = new WeakMap;
			class a {
				get laps() {
					return r.get(this).slice(1)
				}
				get paused() {
					return !n.has(this)
				}
				get time() {
					const e = Date.now(),
						t = o.get(this);
					return this.paused ? t : t + (e - n.get(this))
				}
				constructor() {
					this.reset()
				}
				start() {
					this.paused && n.set(this, Date.now())
				}
				pause() {
					this.paused || (o.set(this, this.time), n.delete(this))
				}
				reset() {
					r.set(this, [
						[0, 0]
					]), o.set(this, 0), n.delete(this)
				}
				lap() {
					const {
						time: e
					} = this, t = r.get(this), s = [e - t[t.length - 1][1], e];
					return r.set(this, [...t, s]), s
				}
			}
			var i = s("./src/lib/VideoSession/util.ts"),
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
				}(p(e, s), t, ...r)
			}

			function p(e, t = l) {
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
			var h = class {
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
			class f {
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
					return this.idleTimer.time >= f.IDLE_THRESHOLD
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
						playheadOffsetMs: Object(i.a)(t - e),
						timestampMs: Object(i.a)(e),
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
					return new h(t)
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
			f.IDLE_THRESHOLD = Object(i.a)(300);
			t.a = f
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
		"./src/lib/memoizeByReference/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/lodash/every.js"),
				n = s.n(r);

			function o(e) {
				let t = null,
					s = null;
				return (...r) => (null !== t && r.length === t.length && n()(r, (e, s) => e === t[s]) || (t = r, s = e(...r)), s)
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t, ...s) {
				let r, n = !1;
				const o = async () => {
					s && s.length ? await e.call(window, ...s) : await e.call(window), n || (r = window.setTimeout(o, t))
				};
				return r = window.setTimeout(o, t), () => {
					n = !0, window.clearTimeout(r)
				}
			}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return n
			}));
			const r = "CREATOR_STATS_PENDING",
				n = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				n = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				i = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "i", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return h
			}));
			var r = s("./src/lib/loadableAction/index.ts");
			const n = e => () => s.e("CommunityAwards").then(s.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(r.a)(n("awardSheetInfoRequested")),
				a = Object(r.a)(n("manageableAwardsRequested")),
				i = Object(r.a)(n("createCommunityAward")),
				c = Object(r.a)(n("createGlobalAward")),
				d = Object(r.a)(n("createModAward")),
				l = Object(r.a)(n("createAwardFailed")),
				u = Object(r.a)(n("createAwardSuccessful")),
				m = Object(r.a)(n("removeCommunityAward")),
				p = Object(r.a)(n("disableAwardinCommunity")),
				h = Object(r.a)(n("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return O
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/postParentMessage/index.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				a = s("./src/reddit/constants/modals.ts"),
				i = s("./src/reddit/selectors/gild.ts"),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				d = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/selectors/communityAwards.ts"),
				m = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/telemetry/index.ts"),
				b = s("./src/reddit/actions/gold/constants.ts");
			const f = Object(r.a)(b.L),
				v = Object(r.a)(b.f),
				g = () => async (e, t) => {
					const r = t();
					e(v()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: n
					} = await s.e("givePremiumTrackers").then(s.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(h.a)(n()(r))
				}, _ = Object(r.a)(b.K), C = ({
					awardId: e,
					correlationId: t,
					thingId: s
				}) => async (r, n) => {
					const i = n(),
						c = e ? Object(u.a)(i, e) : void 0;
					r(_({
						award: c && c.isEnabled ? c : void 0,
						thingId: s,
						correlationId: t
					})), r(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const h = Object(p.G)(i, {
						thingId: s
					});
					let b = null;
					if (h) b = h.id;
					else if (Object(o.a)(s)) {
						const e = Object(m.H)(i, {
							postId: s
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, s)
				}, E = Object(r.a)(b.e), w = Object(r.a)(b.J), x = () => async (e, t) => {
					const r = t(),
						o = Object(i.d)(r);
					if (Object(i.g)(r)) {
						const e = "close.gild";
						Object(n.a)({
							type: e
						})
					}
					e(E()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(h.a)(d(o)(r)), Object(c.b)(c.a.GildingFlow)
				}, O = () => async () => {
					Object(n.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return i
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
				return p
			})), s.d(t, "l", (function() {
				return h
			})), s.d(t, "m", (function() {
				return b
			})), s.d(t, "k", (function() {
				return f
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "p", (function() {
				return C
			})), s.d(t, "q", (function() {
				return E
			})), s.d(t, "o", (function() {
				return w
			}));
			const r = "CREATE_COLLECTION_PENDING",
				n = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				a = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				i = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				h = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				v = "REORDER_COLLECTION_PENDING",
				g = "REORDER_COLLECTION_SUCCESS",
				_ = "REORDER_COLLECTION_FAILED",
				C = "UPDATE_COLLECTION_LAYOUT_PENDING",
				E = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				w = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/setInterval/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				i = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const d = new class {
				constructor() {
					this.isInitialized = !1, this.streamOptions = {}, this.currentStreamsRateSec = o.c, this.currentConfigRateSec = o.d, this.heartbeatDelaySec = o.f, this.heartbeatRateSec = o.g, this.statsRefreshRateSec = o.j, this.recommendedViewerSubredditsRefreshRateSec = o.h, this.MIN_RATE_MS = 1e3, this.subscribeConfig = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startConfigWork(e, t, s)), () => this.unsubscribeConfig()), this.subscribeStreams = (e, t = {}) => async (s, r) => (this.streamOptions = t, this.initializeConfig(e, s, r).then(() => this.startStreamsWork(e, this.streamOptions, s, r)), () => this.unsubscribeStreams()), this.subscribeRecommendedViewerSubreddits = () => async (e, t) => (this.startRecommendedViewerSubredditsWork(e, t), () => this.unsubscribeRecommendedViewerSubreddits()), this.subscribeStats = e => async (t, s) => (this.currentStatsId = e, this.startStatsWork(t, s), () => this.unsubscribeStats()), this.subscribeHeartbeat = e => async (t, s) => (this.currentHeartbeatId = e, this.startHeartbeatWork(t, s), () => this.unsubscribeHeartbeat())
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
						o = r.rpan_config_refresh_rate;
					this.currentConfigRateSec !== o && (this.currentConfigRateSec = o);
					const a = r.viewer_streams_refresh;
					this.currentStreamsRateSec !== a && (this.currentStreamsRateSec = a, this.startStreamsWork(e, this.streamOptions, t, s));
					const i = r.viewer_heartbeat_interval;
					i && this.heartbeatRateSec !== i && this.startHeartbeatWork(t, s);
					const d = r.viewer_heartbeat_interval;
					d && this.statsRefreshRateSec !== d && this.startStatsWork(t, s), this.configTimeout = window.setTimeout(() => this.startConfigWork(e, t, s), this.getConfigTimeout())
				}
				async startStreamsWork(e, t, s, r) {
					window.clearTimeout(this.streamsTimeout), Object(i.d)(r()) ? await s(Object(a.f)(e, t)) : await s(Object(a.e)(e, t)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(e, t, s, r), this.getStreamsTimeout(r()))
				}
				async startRecommendedViewerSubredditsWork(e, t) {
					await this.initializeConfig(o.R, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(n.b)());
					const s = Object(c.l)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(r.a)(() => e(Object(n.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(o.R, e, t), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(c.l)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStatsId && e(Object(a.d)(this.currentStatsId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(o.R, e, t), !this.currentHeartbeatId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(c.l)(t());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const a = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const i = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						d = () => {
							this.currentHeartbeatId && e(Object(n.d)(this.currentHeartbeatId))
						};
					this.clearSendHeartbeatInterval = Object(r.a)(() => {
						d(), this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.clearSendHeartbeatInterval = Object(r.a)(d, i)
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
				o = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				a = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
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
						await Object(o.d)(e);
						const s = Object(d.l)(r(), e);
						null !== s.post.voteState && Object(i.e)(s.post.voteState) === t || await Object(a.g)(n(), e, t)
					}
				else s(Object(u.i)())
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/lodash/memoize.js"),
				o = s.n(n),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				u = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = s("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				p = s("./src/reddit/selectors/experiments/econ/index.ts"),
				h = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				b = s.n(h);
			const f = l.a.div("Userpic", b.a);
			t.a = o()(({
				defaultImage: e,
				userId: t
			}) => {
				const s = Object(c.e)(p.C),
					{
						processingAvatarImageUrl: n
					} = r.a;
				if (s) return e ? i.a.createElement("img", {
					className: b.a.NewUserpic,
					src: e,
					alt: "user icon"
				}) : i.a.createElement(m.a, {
					className: b.a.NewUserpic,
					userId: t
				});
				const o = (e => e.replace(d.Ib.Account + "_", ""))(t),
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
					})(o),
					h = `${n}/avatar_default_${a}_${l}.png`;
				return i.a.createElement(f, {
					"data-testid": "old-default-icon",
					style: {
						backgroundImage: `url(${h})`,
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
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, s) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/hooks/usePrevious.ts"),
				a = s("./src/realtime/GQLSubscription/async.tsx"),
				i = s("./src/reddit/hooks/useIntersectionObserver.ts");
			const c = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var d = s("./src/reddit/components/CountAnimation/index.m.less"),
				l = s.n(d);
			var u;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(u || (u = {}));
			const m = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: s,
					incrementDelta: d,
					initialDelay: u,
					initialDisplayCount: p,
					isLoadTestOnly: h,
					onDataCB: b,
					postId: f,
					queryKey: v,
					queryVariables: g,
					shouldDisjointAnimation: _,
					subsequentRecurringDelay: C
				} = e, [E, w] = Object(r.useState)(!1), [x, O] = Object(r.useState)(!0), [y, I] = Object(r.useState)([]), [S, k] = Object(r.useState)(c(p).reverse()), T = Object(r.useRef)(!1), j = Object(r.useRef)(null), N = Object(r.useRef)(e => {}), A = Object(r.useRef)();
				N.current = Object(r.useCallback)(e => {
					let s = e || d();
					const r = [...S].reverse().join("");
					let n = parseInt(r) + s;
					n > t && (s = t - parseInt(r), n = t);
					const o = c(n).reverse();
					w(!1), I(S), k(o), O(!1), A.current = setTimeout(() => {
						w(!0)
					}, 0)
				}, [t, d, S]);
				const R = Object(r.useRef)(() => {}),
					P = Object(r.useRef)(),
					L = Object(r.useRef)();
				R.current = Object(r.useCallback)(() => {
					L.current = setTimeout(() => {
						N.current();
						const e = [...y].reverse().join("");
						parseInt(e) < t && R.current()
					}, C())
				}, [t, C, y]);
				const D = Object(r.useRef)(0),
					M = Object(r.useRef)(!1),
					V = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: s
							} = e, r = 1 !== s;
							t ? (M.current = !0, T.current || (T.current = !0, P.current = setTimeout(() => {
								N.current(), R.current()
							}, u())), D.current > 0 && (N.current(D.current), D.current = 0)) : r && (M.current = !1)
						})
					}, []);
				Object(i.a)(j, V);
				const [F, U] = Object(r.useState)(!1), H = Object(r.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: s
						} = e, r = 1 !== s;
						t ? U(!0) : r && U(!1)
					})
				}, []), B = Object(r.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(i.a)(j, H, B.current);
				const W = Object(o.a)(t);
				Object(r.useEffect)(() => {
					if (void 0 !== W && W !== t) {
						const e = t - W;
						M.current ? N.current(e) : D.current += e
					}
					return () => {
						clearTimeout(P.current), clearTimeout(L.current), clearTimeout(A.current)
					}
				}, [t]);
				const Y = Object(r.useCallback)(() => O(!0), [O]),
					G = 0 === y.length,
					K = x || G,
					z = Object(r.useRef)(((e, t) => `${t}_${e}_count_anim`)(f, s));
				return n.a.createElement(n.a.Fragment, null, !h && n.a.createElement("div", {
					className: l.a.countAnimation
				}, S.map((e, t) => {
					const s = ((e, t) => {
						let s = Math.abs(e);
						const r = Math.abs(t),
							n = [s];
						if (s === r) return n;
						let o = !0;
						for (; o;) ++s > 9 && (s = 0), n.push(s), s === r && (o = !1);
						return n
					})(y[t] || 0, e);
					return n.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: Y,
						style: E && y.length > 0 && !x ? {
							transform: `translateY(-${_&&s.length>1?100:100*(s.length-1)}%)`,
							transitionDuration: `${(_?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, K ? n.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : s.map((e, t) => {
						const r = 0 === t || t === s.length - 1;
						if (!_ || _ && r) return n.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), n.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...S].reverse().join(""))), n.a.createElement("span", {
					ref: j
				}), F && n.a.createElement(a.a, {
					variables: g,
					onData: h ? m : b,
					queryKey: v,
					uniqueKey: z.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			}));
			var r = s("./src/redditGQL/types.ts");
			const n = 16327836e5;
			var o;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available"
			}(o || (o = {}));
			const a = e => e > n,
				i = (e, t) => {
					if (!a(e.created)) return o.NotAvailable;
					if (!t) return o.NotAvailableYet;
					const {
						viewCountTotals: s,
						shareCountTotals: n
					} = t;
					return (null == s ? void 0 : s.status) === r.c.Unavailable && (null == n ? void 0 : n.status) === r.c.Unavailable ? o.NotAvailableYet : !(null == s ? void 0 : s.totalCount) || s.totalCount < 10 ? o.NotAvailableYet : o.Available
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
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				c = s.n(i);
			t.a = ({
				className: e,
				style: t = {},
				userId: s
			}) => {
				const {
					processingAvatarImageUrl: n
				} = r.a, i = `url(${n}/defaults/v2/avatar_default_${(e=>{let t=0;for(const s of e)t+=s.charCodeAt();return t%8})(s)}.png)`;
				return o.a.createElement("div", {
					className: Object(a.a)(c.a.avatar, e),
					style: {
						...t,
						backgroundImage: i
					}
				})
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, s) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/noop.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = s.n(d);
			t.a = e => a.a.createElement(i.i, {
				className: l.a.modalHeader
			}, a.a.createElement(i.q, null, e.title), a.a.createElement(c.a, {
				onClick: e.onClosePressed || n.a
			}, a.a.createElement(i.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				o = s.n(n);
			const a = r.a.div("Wrapper", o.a);
			t.a = a
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, s) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Flair/index.tsx"),
				c = s("./src/reddit/components/FlairPreview/index.m.less"),
				d = s.n(c);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				m = a.a.wrapped(i.b, "FlairComponent", d.a);
			t.a = e => e.flair ? o.a.createElement(u, null, o.a.createElement(l, null, r.fbt._("{placeholder}", [r.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), o.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : o.a.createElement(u, null, r.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, s) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var r = s("./node_modules/lodash/once.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				u = s("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = s.n(u);
			const p = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				h = n()((e = p) => Object(i.a)({
					getComponent: () => Object(l.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("FlairEdit")]).then(s.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				l = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/helpers/trackers/userFlair.ts"),
				p = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/selectors/moderatorPermissions.ts"),
				b = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				f = s("./src/reddit/components/Flair/index.tsx"),
				v = s("./src/reddit/controls/RadioInput/index.tsx"),
				g = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				C = s("./src/reddit/icons/svgs/Search/index.tsx"),
				E = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				w = s.n(E);
			class x extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: s
					} = this.props, {
						searchQuery: n
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(n)), i = !!s && a.some(e => e.id === s);
					return o.a.createElement("div", {
						className: w.a.container
					}, o.a.createElement("div", {
						className: w.a.searchBoxWrapper
					}, o.a.createElement("input", {
						className: w.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: r.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: n
					}), o.a.createElement(C.a, {
						className: w.a.searchIcon
					})), o.a.createElement(v.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: s
					}, a.map((e, t) => {
						const r = Object(u.c)(e),
							n = s === e.id || !i && 0 === t;
						return o.a.createElement(g.a, {
							className: w.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: n ? 0 : -1,
							value: e.id
						}, o.a.createElement(f.b, {
							className: w.a.flairComponent,
							flair: r,
							forceSmallEmojis: !0
						}), e.textEditable && o.a.createElement(_.a, {
							className: w.a.pencil
						}))
					})))
				}
			}
			var O = s("./src/reddit/components/FlairSearch/index.m.less"),
				y = s.n(O);
			const I = Object(d.a)(e => e && Object(u.c)(e)),
				S = Object(i.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: h.g
				}),
				k = Object(a.b)(S);
			t.a = k(e => {
				const {
					flairTemplateType: t,
					flair: s,
					className: n,
					onChange: a,
					subredditId: i,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: h,
					isModerator: f
				} = e, v = Object(p.a)(), g = d && s && s.templateId && d[s.templateId] || void 0, _ = Object(b.a)(), C = s || I(g);
				return o.a.createElement("div", {
					className: Object(c.a)(n, y.a.container)
				}, d && l && o.a.createElement(x, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								s = Object(u.c)(t);
							v(Object(m.b)({
								userFlair: t
							})), a(s)
						}
					},
					selectedTemplateId: g ? g.id : "",
					templateIds: l,
					templates: d
				}), C && g && (f || g.textEditable) && o.a.createElement("div", {
					className: y.a.flairEditSection
				}, o.a.createElement("div", {
					className: y.a.editLabel
				}, r.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), h && o.a.createElement("div", {
					className: y.a.restrictionHintText
				}, Object(u.k)(g)), o.a.createElement(_, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: C,
					flairTemplate: g,
					flairTemplateType: t,
					isFlairModOnly: g.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let s = e;
						t && (s = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), a(s)
					},
					subredditId: i
				})))
			})
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/hls.js/dist/hls.js"),
				a = s.n(o),
				i = s("./src/lib/combineRefs/index.tsx"),
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
						onHlsCreate: r,
						onLevelLoaded: n,
						onLoadingData: o,
						url: i
					} = this.props;
					if (!i || !this.video) return;
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
						o && o()
					}), c.on(a.a.Events.MANIFEST_PARSED, (r, n) => {
						e && !s && this.video && (this.video.currentTime = t, this.video.play().catch(this.onPlayError(c))), this.setState({
							...this.state,
							isInitialized: !0
						})
					}), c.on(a.a.Events.LEVEL_LOADED, (e, t) => {
						n && n(t.details)
					}), c.loadSource(i), c.attachMedia(this.video)
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
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				i = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = n.a.memo((function({
				visible: e,
				...t
			}) {
				const [s, a] = Object(r.useState)(e);
				return Object(r.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, a(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), a(!1)
					}
				}, [e]), e ? n.a.createElement("div", c({
					className: Object(o.a)(i.a.tooltip, t.className, {
						[i.a.visible]: s
					})
				}, t.popperProps), t.children, s && n.a.createElement("div", c({
					className: i.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "i", (function() {
				return k
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./node_modules/lodash/isNil.js"),
				c = s.n(i),
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
			var p = Object(o.b)(u, {})(m),
				h = s("./src/reddit/selectors/comments.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/subreddit.ts");
			const v = (e, t) => {
				const s = Object(b.b)(e, t),
					r = Object(f.F)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var g = Object(o.b)(() => Object(a.a)(v, h.j, (e, t) => ({
				...e,
				depth: t
			})))(e => n.a.createElement(p, {
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
					r = Object(f.F)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var C = Object(o.b)(() => Object(a.a)(_, e => e))(e => n.a.createElement(p, {
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
			var E = Object(o.b)(() => Object(a.c)({
					subreddit: f.Q
				}))(e => n.a.createElement(p, {
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
				w = s("./src/reddit/hooks/usePostContext.ts");
			var x = e => {
				const t = Object(w.a)(),
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
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "post",
					data: s
				}) : null
			};
			var O = e => {
				const t = Object(w.a)(),
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
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: s
				}) : null
			};
			var y = e => {
				const t = Object(w.a)(),
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
				return t ? n.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: s
				}) : null
			};
			var I = Object(o.b)(() => Object(a.c)({
				subreddit: f.Q
			}))(e => n.a.createElement(p, {
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
			var S = Object(o.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.I)(e, {
					identifier: t
				})
			}))(e => n.a.createElement(p, {
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
			var k = Object(o.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.Q)(e, {
					subredditId: t
				}) : null
			}))(e => n.a.createElement(p, {
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
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/components/CreatorStats/helpers.ts"),
				l = s("./src/reddit/selectors/creatorStats.ts"),
				u = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				m = s("./src/reddit/components/PostContent/viewCount.m.less"),
				p = s.n(m);
			t.a = ({
				className: e,
				post: t,
				showViewCount: s
			}) => {
				const {
					upvotePercentString: n,
					viewCountString: m
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						s = Object(c.b)(e.viewCount);
					return {
						upvotePercentString: r.fbt._("{percent upvoted}% Upvoted", [r.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: r.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [r.fbt._plural(e.viewCount, "number of views", s)], {
							hk: "rP01m"
						})
					}
				})(t), h = s && !!t.viewCount, b = Object(a.e)(e => Object(u.a)(e, t.id)), f = Object(a.e)(e => Object(l.a)(e, t.id)), v = Object(a.e)(e => Object(l.b)(e, t.id)), g = Object(d.c)(t, v), _ = b && f && g === d.b.Available;
				return o.a.createElement("div", {
					className: Object(i.a)(p.a.viewCounts, e)
				}, h && o.a.createElement("span", null, m), h && !!t.upvoteRatio && o.a.createElement("span", {
					className: p.a.dotSpacer
				}), !!t.upvoteRatio && !_ && o.a.createElement("span", null, n))
			}
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, s) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			var r = s("./node_modules/lodash/isEqual.js"),
				n = s.n(r),
				o = s("./src/reddit/constants/flair.ts"),
				a = s("./src/reddit/helpers/flair.ts"),
				i = s("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === i.f.Text || e.type === i.f.Image || e.type === i.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, s) => {
				if (s && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const r = e && t.templateId ? e[t.templateId] : void 0;
				if (!r) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const i = Object(a.g)(t).length;
				return 0 === i ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : i > o.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(r) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : n()(s, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/telemetry/index.ts"),
				c = s("./src/higherOrderComponents/withMux/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/localStorageAvailable/index.ts"),
				m = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				p = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				h = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				f = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				v = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				g = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				_ = s("./src/reddit/constants/chat.ts"),
				C = s("./src/reddit/constants/postLayout.ts"),
				E = s("./src/reddit/helpers/localStorage/index.ts"),
				w = s("./src/reddit/helpers/overlay/index.ts"),
				x = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = s("./src/reddit/helpers/trackers/rpan.ts"),
				y = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				I = s("./src/reddit/models/Vote/index.ts"),
				S = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				k = s("./src/reddit/selectors/platform.ts"),
				T = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				A = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/Flatlist/constants.ts"),
				P = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				L = s("./src/reddit/components/HlsVideo/index.tsx"),
				D = s("./src/reddit/components/OverflowMenu/index.tsx"),
				M = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				V = s("./src/reddit/components/PostLeftRail/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				U = s("./src/reddit/controls/Dropdown/Row.tsx"),
				H = s("./src/reddit/controls/InternalLink/index.tsx"),
				B = s("./src/reddit/controls/Score/index.tsx"),
				W = s("./src/reddit/icons/fonts/index.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				G = s.n(Y),
				K = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				z = s.n(K);
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = 20, J = l.nc, Q = l.nc, X = Object(c.a)(L.a, {
				playerName: "RPAN DU Video Player"
			}), $ = Object(o.b)(() => Object(a.c)({
				autoplay: j.b,
				isLoggedIn: j.K,
				isOverlayOpen: k.i,
				location: (e, {
					listingName: t
				}) => {
					const s = Object(T.m)(e, {
						listingName: t
					});
					let r;
					if (s) {
						r = `${Object(x.d)(s)}${Object(v.c)(t)}`
					} else {
						const e = t.replace(/^r\//, "");
						r = e === b.R ? Object(x.e)() : Object(x.f)(e)
					}
					return r
				},
				stream: (e, {
					listingName: t
				}) => Object(T.m)(e, {
					listingName: t
				}),
				streamById: e => t => Object(T.l)(e, t),
				rpanDuThresholdVariant: S.i,
				inRpanDUPreloadExperiment: S.b,
				inRpanDuTargetingExperiment: S.c
			}), (e, t) => ({
				onHideRpanUnit: (s, r) => e(Object(h.D)(t.listingName, s, {
					showToast: r.showToast
				})),
				openOverlay: t => e(Object(w.a)(t)),
				subscribeConfig: () => e(f.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(f.a.subscribeStats(t)),
				subscribeStreams: () => e(f.a.subscribeStreams(t.listingName, {
					pageSize: 1
				}))
			})), ee = () => n.a.createElement("h3", {
				className: z.a.title
			}, Z._("Top livestream", null, {
				hk: "4od1tZ"
			})), te = () => n.a.createElement("p", {
				className: z.a.description
			}, Z._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class se extends r.Component {
				constructor(e) {
					super(e), this.observableElement = n.a.createRef(), this.videoRef = n.a.createRef(), this.videoSessionManager = null, this.timerId = "rpan-du-active-watch-timer-id", this.handleSuccessfulPlayback = () => {
						Object(E.W)()
					}, this.handleUnsuccessfulPlayback = () => {
						const e = Number(Object(E.L)());
						if (e) {
							if (Date.now() - e >= J) {
								Object(E.W)();
								const e = 30 * l.B,
									t = Date.now() - e + Q;
								this.props.onHideRpanUnit(t, {
									showToast: !1
								})
							}
						} else Object(E.Mb)(Date.now())
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
						}), r(Object(O.i)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: s
						} = this.props;
						t(s ? Object(O.j)(s, 1) : Object(O.j)()), this.props.inRpanDuTargetingExperiment && this.handleSuccessfulPlayback(), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(O.j)()), this.openOverlay()
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
						const o = !t.sessionDurationMs ? O.E : O.A,
							a = {
								chatState: _.a.None,
								playerType: O.a.DU
							},
							i = o(n, {
								...t,
								...a
							});
						this.props.sendEvent(i)
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
					i.c.start(this.timerId)
				}
				endTimeTracker() {
					if (this.timerId && i.c.has(this.timerId)) {
						Math.round(i.c.end(this.timerId)) / 1e3 >= q ? this.handleSuccessfulPlayback() : this.handleUnsuccessfulPlayback()
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
						stream: o,
						inRpanDUPreloadExperiment: a
					} = this.props, {
						isOverlayOpen: i,
						stream: c
					} = e, {
						isReady: d
					} = this.state, {
						isInFocus: l,
						isIntersecting: m,
						isReady: p,
						isInLoadingIntersection: h
					} = t, {
						isVisible: b,
						isLoadable: f
					} = this, v = l && m && !i, g = !v && b, _ = v && !b, C = l && h && !i, E = a ? C && !f : _;
					(a ? !C && f : g) ? (this.subscribeConfig(), this.subscribeStreams()) : E && (this.unsubscribeConfig(), this.unsubscribeStreams());
					const w = o && o.post.id,
						x = w !== (c && c.post.id),
						O = !!w;
					x && this.setState({
						isReady: !1
					});
					const y = x && !O || O && _;
					if (x && O && b || O && g ? this.subscribeStats() : y && this.unsubscribeStats(), n && r) {
						const e = this.getOrCreateVideoSessionManager(r),
							t = !p && d,
							n = O && (t && b || g && d),
							o = O && _;
						x && e.endSession(), n ? (e.startSession({
							id: w
						}), this.setState({
							sessionId: (null === (s = null == e ? void 0 : e.sessionStats) || void 0 === s ? void 0 : s.id) || ""
						}), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.startTimeTracker()) : o && (e.pauseSession(), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.endTimeTracker())
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
						className: Object(d.a)(z.a.container, {
							[G.a.largeAndMediumPostStyles]: e === C.g.Large || e === C.g.Medium,
							[G.a.classicPostStyles]: e === C.g.Classic,
							[G.a.compactPostStyles]: e === C.g.Compact,
							[z.a.large]: e === C.g.Large || e === C.g.Medium,
							[z.a.classic]: e === C.g.Classic,
							[z.a.compact]: e === C.g.Compact
						}, this.props.className)
					}, e !== C.g.Large && n.a.createElement(V.b, {
						className: z.a.leftRail,
						withoutComputedStyles: e === C.g.Compact
					}, n.a.createElement(re, {
						isVertical: !0
					}), e === C.g.Compact && n.a.createElement(re, {
						isVertical: !1
					})), n.a.createElement(M.a, {
						className: z.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return n.a.createElement("div", {
						className: z.a.titleAndDescriptionContainer
					}, n.a.createElement(H.a, {
						to: this.props.location
					}, n.a.createElement(ee, null), e && n.a.createElement(te, null)))
				}
				renderLargeContent() {
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: z.a.header
					}, this.renderTitleAndDescription(), n.a.createElement("div", {
						className: z.a.flatListContainer
					}, n.a.createElement(ae, {
						onClick: this.onHideUnitClicked
					}))), n.a.createElement("div", {
						className: z.a.body,
						ref: this.observableElement
					}, n.a.createElement(H.a, {
						to: this.props.location,
						onClick: this.onStreamClicked,
						className: z.a.previewLink,
						tabIndex: 0
					}, n.a.createElement("div", {
						className: z.a.previewContainer
					}, this.renderThumbnail()), this.renderInfo())))
				}
				renderClassicContent() {
					return n.a.createElement("div", {
						className: z.a.body,
						ref: this.observableElement
					}, n.a.createElement(H.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, n.a.createElement("div", {
						className: z.a.thumbnailContainer
					}, this.renderThumbnail())), n.a.createElement("div", {
						className: z.a.main
					}, this.renderLiveStatus(), this.renderTitleAndDescription(!0), n.a.createElement("div", {
						className: z.a.flatListContainer
					}, n.a.createElement(ne, {
						onClick: this.onHeaderClicked
					}), n.a.createElement(A.a, {
						className: z.a.flatlistSeparator
					}), n.a.createElement("div", null, n.a.createElement(oe, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return n.a.createElement("div", {
						className: z.a.body,
						ref: this.observableElement
					}, n.a.createElement("div", {
						className: z.a.main
					}, n.a.createElement(ne, {
						onClick: this.onHeaderClicked
					}), this.renderLiveStatus(), this.renderTitleAndDescription(!0), n.a.createElement("div", {
						className: z.a.flatListContainer
					}, n.a.createElement(ae, {
						onClick: this.onHideUnitClicked
					}))))
				}
				renderInfo() {
					if (this.props.stream && this.state.isReady) return n.a.createElement("div", {
						className: z.a.infoContainer
					}, this.renderExpandIcon(), this.renderLiveStatus(), this.renderWatcherCount())
				}
				renderExpandIcon() {
					return n.a.createElement("div", {
						className: z.a.bigExpando
					}, n.a.createElement(W.a, {
						name: "expand",
						className: z.a.bigExpandoIcon
					}))
				}
				renderLiveStatus() {
					return this.isLive ? n.a.createElement("span", {
						className: Object(d.a)(z.a.liveStatus, {
							[z.a.compact]: this.props.layout === C.g.Compact
						})
					}, n.a.createElement(g.g, null)) : null
				}
				renderWatcherCount() {
					var e;
					if (!this.isLive) return null;
					const t = Math.max(1, (null === (e = this.props.stream) || void 0 === e ? void 0 : e.continuous_watchers) || 0);
					return n.a.createElement("span", {
						className: z.a.watchingCount
					}, Z._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [Z._plural(t, "number")], {
						hk: "33zJ5F"
					}))
				}
				renderThumbnail() {
					return n.a.createElement("div", {
						className: Object(d.a)(z.a.thumbnail, {
							[z.a.loading]: !this.state.isReady
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
						o = t.post.title;
					return n.a.createElement(X, {
						url: t.stream.hls_url,
						autoplay: e,
						controls: !1,
						muted: !0,
						muxVideoDuration: s,
						muxVideoId: r,
						muxVideoIsLive: this.isLive,
						muxVideoTitle: o,
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
						threshold: t ? Object(S.h)(t) : .01
					}), this.intersectionObserver.observe(e), this.loadingIntersectionObserver = new IntersectionObserver(e => {
						e.forEach(e => {
							this.setState({
								isInLoadingIntersection: e.isIntersecting
							})
						})
					}, {
						threshold: t ? Object(S.h)(t) : .01,
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
					return this.videoSessionManager || (this.videoSessionManager = new p.a(e, {
						onHeartbeat: this.handleHeartbeat
					})), this.videoSessionManager
				}
				destroyVideoSessionManager() {
					var e;
					null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
			}
			const re = e => n.a.createElement(N.a, {
					className: Object(d.a)({
						[z.a.verticalVotes]: e.isVertical,
						[z.a.horizontalVotes]: !e.isVertical
					})
				}, n.a.createElement(B.a, {
					className: z.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: I.a.notVoted
				})),
				ne = ({
					onClick: e
				}) => n.a.createElement("button", {
					className: z.a.expandoButton,
					onClick: e
				}, n.a.createElement(W.a, {
					name: "expand",
					className: z.a.expandoIcon
				})),
				oe = ({
					onClick: e,
					isLoggedIn: t
				}) => n.a.createElement(P.a, {
					displayText: Z._("Show me less of this", null, {
						hk: "4t8AKC"
					}),
					flatlistItem: R.a.Hide,
					isLoggedIn: !!t,
					isUserOp: !1,
					onClick: e,
					noBreakpoints: !0
				}, n.a.createElement(W.a, {
					name: "hide"
				})),
				ae = ({
					onClick: e
				}) => n.a.createElement(D.b, {
					className: z.a.overflowMenu,
					dropdownClassName: z.a.overflowDropdown,
					dropdownId: "rpan-du-overflow"
				}, n.a.createElement(U.b, {
					className: z.a.overflowItem,
					displayText: Z._("Show me less of this", null, {
						hk: "2c4uFK"
					}),
					iconWrapperClassName: z.a.overflowItemIconWrapper,
					textClassName: z.a.overflowItemText,
					onClick: e
				}, n.a.createElement(W.a, {
					name: "hide"
				})));
			t.default = $(Object(F.c)(se))
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return O
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "b", (function() {
				return k
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "f", (function() {
				return N
			})), s.d(t, "a", (function() {
				return A
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/components/OverflowMenu/index.tsx"),
				d = s("./src/reddit/controls/Dropdown/Row.tsx"),
				l = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				u = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				m = s("./src/reddit/icons/fonts/Share/index.tsx"),
				p = s("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				h = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				b = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				f = s("./src/reddit/icons/svgs/Report/index.tsx"),
				v = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				g = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				_ = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				C = s("./src/reddit/icons/svgs/VideoShare/index.tsx"),
				E = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				w = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				x = s.n(w);
			const O = ({
					onClick: e
				}) => o.a.createElement("button", {
					className: x.a.shareButton,
					onClick: e,
					"aria-label": r.fbt._("share video", null, {
						hk: "2e71ai"
					}),
					value: "share"
				}, o.a.createElement(m.a, {
					className: x.a.menuIcon
				})),
				y = ({
					isMuted: e,
					onToggle: t
				}) => o.a.createElement("button", {
					className: x.a.muteButton,
					onClick: t,
					"aria-label": r.fbt._("mute video", null, {
						hk: "Enspe"
					}),
					value: "mute"
				}, e ? o.a.createElement(g.a, {
					className: x.a.volumeIcon
				}) : o.a.createElement(E.a, {
					className: x.a.volumeIcon
				})),
				I = a.a.wrapped(u.a, "menuIcon", x.a),
				S = "rpan-overlay-menu",
				k = ({
					onClick: e,
					onHideClick: t,
					onReportClick: s
				}) => o.a.createElement(c.b, {
					className: x.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: S,
					icon: o.a.createElement(I, null),
					onClick: e
				}, o.a.createElement(d.b, {
					className: x.a.overflowItem,
					displayText: r.fbt._("View rules", null, {
						hk: "4lTvzy"
					}),
					iconWrapperClassName: x.a.overflowItemIconWrapper,
					key: `${S}-rules`,
					onClick: () => Object(i.e)(l.S, i.d.BLANK)
				}, o.a.createElement(v.a, {
					className: x.a.overflowItemIcon
				})), o.a.createElement(d.b, {
					className: x.a.overflowItem,
					displayText: r.fbt._("Visit RPAN community", null, {
						hk: "3KZliI"
					}),
					iconWrapperClassName: x.a.overflowItemIconWrapper,
					key: `${S}-community`,
					onClick: () => Object(i.e)(l.Q, i.d.BLANK)
				}, o.a.createElement(b.c, {
					className: x.a.overflowItemIcon
				})), o.a.createElement(d.b, {
					className: x.a.overflowItem,
					displayText: r.fbt._("Report", null, {
						hk: "4oVcnd"
					}),
					iconWrapperClassName: x.a.overflowItemIconWrapper,
					key: `${S}-report`,
					onClick: s
				}, o.a.createElement(f.a, {
					className: x.a.overflowItemIcon
				})), o.a.createElement(d.b, {
					className: x.a.overflowItem,
					displayText: r.fbt._("Hide", null, {
						hk: "1qXTIB"
					}),
					iconWrapperClassName: x.a.overflowItemIconWrapper,
					key: `${S}-hide`,
					onClick: t
				}, o.a.createElement(h.a, {
					className: x.a.overflowItemIcon
				}))),
				T = ({
					onClick: e
				}) => o.a.createElement("button", {
					className: x.a.promptButton,
					onClick: e
				}, o.a.createElement(_.a, null), o.a.createElement("span", null, r.fbt._("Replay Video", null, {
					hk: "1iD2Wj"
				}))),
				j = ({
					onClick: e
				}) => o.a.createElement("button", {
					className: x.a.promptButton,
					onClick: e
				}, o.a.createElement(C.a, null), o.a.createElement("span", null, r.fbt._("Share Video", null, {
					hk: "FYgQy"
				}))),
				N = ({
					onClick: e
				}) => o.a.createElement("button", {
					className: x.a.promptButton,
					onClick: e
				}, o.a.createElement(p.a, {
					className: x.a.crosspostIcon
				}), o.a.createElement("span", null, r.fbt._("Crosspost", null, {
					hk: "gORNr"
				}))),
				A = ({
					onClick: e
				}) => o.a.createElement("button", {
					className: `${x.a.promptButton} ${x.a.awardButton}`,
					onClick: e
				}, o.a.createElement("span", null, r.fbt._("Award Now", null, {
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
				return G
			})), s.d(t, "g", (function() {
				return K
			})), s.d(t, "p", (function() {
				return z
			})), s.d(t, "f", (function() {
				return Z
			})), s.d(t, "l", (function() {
				return q
			})), s.d(t, "n", (function() {
				return J
			})), s.d(t, "r", (function() {
				return Q
			})), s.d(t, "j", (function() {
				return ee
			})), s.d(t, "k", (function() {
				return te
			})), s.d(t, "i", (function() {
				return oe
			})), s.d(t, "q", (function() {
				return ae
			})), s.d(t, "d", (function() {
				return ue
			})), s.d(t, "o", (function() {
				return me
			})), s.d(t, "b", (function() {
				return pe
			})), s.d(t, "a", (function() {
				return he
			})), s.d(t, "e", (function() {
				return be
			})), s.d(t, "s", (function() {
				return fe
			})), s.d(t, "m", (function() {
				return ve
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/opener/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				u = s("./src/reddit/actions/publicAccessNetwork/votes.ts"),
				m = s("./src/reddit/actions/subscription/index.ts"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				h = s("./src/reddit/components/OverflowMenu/index.tsx"),
				b = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				_ = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				C = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				E = s("./src/reddit/icons/fonts/index.tsx"),
				w = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				x = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				O = s("./src/reddit/icons/fonts/Share/index.tsx"),
				y = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				I = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				S = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				k = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				T = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				j = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				N = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				A = s("./src/reddit/icons/svgs/Report/index.tsx"),
				R = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				P = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				L = s("./src/reddit/icons/svgs/Video/index.tsx"),
				D = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/selectors/experiments/shareToChatButton.ts"),
				V = s("./src/reddit/selectors/subreddit.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				H = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				B = s.n(H);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Y = ({
				children: e
			}) => n.a.createElement("div", {
				className: B.a.broadcastStatus
			}, e), G = ({
				onClick: e
			}) => n.a.createElement("button", {
				onClick: e
			}, n.a.createElement(K, null)), K = () => W._("{=Live}", [W._param("=Live", n.a.createElement("span", {
				className: B.a.live
			}, W._("Live", null, {
				hk: "8x90I"
			})))], {
				hk: "3ZBbO0"
			}), z = () => W._("Recorded live", null, {
				hk: "2seH5c"
			}), Z = ({
				onSubscribe: e,
				isSubscribed: t
			}) => {
				const [s, o] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => {
					const e = setTimeout(() => {
						o(!1)
					}, 3e3);
					return () => clearTimeout(e)
				}, [s]), t ? s ? n.a.createElement(I.a, {
					className: B.a.checkmarkIcon
				}) : null : n.a.createElement("button", {
					onClick: () => {
						o(!0), e()
					},
					className: B.a.joinButton
				}, n.a.createElement(j.a, {
					className: B.a.plusIcon
				}), n.a.createElement("span", {
					className: B.a.joinText
				}, W._("Join", null, {
					hk: "3n0zBz"
				})))
			}, q = ({
				onSelect: e,
				related: t,
				subreddit: s,
				subreddits: r
			}) => {
				let o = "";
				o = "home" === t ? "All" : "r/popular" === t ? "r/popular" : s || "All";
				const a = r.filter(e => e.prefixedName !== o),
					i = 30 + 35 * a.length;
				return n.a.createElement(h.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: n.a.createElement("span", {
						className: B.a.subreddit
					}, s || "RPAN"),
					style: {
						maxHeight: `${i}px`,
						overflowY: "auto",
						bottom: "0px"
					},
					isFixed: !0
				}, n.a.createElement("div", {
					className: B.a.dropdownLabel
				}, W._("Pick a Community", null, {
					hk: "4AfDwd"
				})), a.map(t => n.a.createElement(v.b, {
					className: B.a.dropdownRow,
					displayText: t.prefixedName,
					key: `rpan-recommended-viewer-subreddits-dropdown-${t.prefixedName}`,
					onClick: () => e(t)
				})))
			}, J = ({
				text: e
			}) => n.a.createElement("h1", {
				className: B.a.title
			}, e), Q = ({
				broadcast: e,
				live: t
			}) => n.a.createElement("div", {
				className: B.a.watchersCount
			}, t ? n.a.createElement(X, {
				count: Math.max(1, e.continuous_watchers)
			}) : n.a.createElement($, {
				count: Math.max(1, e.unique_watchers)
			})), X = ({
				count: e
			}) => W._({
				"*": "{number of watchers} watchers",
				_1: "1 watcher"
			}, [W._plural(e, "number of watchers", Object(d.b)(e, {
				displayFull: !0
			}))], {
				hk: "3F0Nj0"
			}), $ = ({
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
				const a = Object(o.e)(M.a);
				return n.a.createElement(h.b, {
					className: B.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: ee,
					onClick: s,
					icon: n.a.createElement(O.a, null)
				}, n.a.createElement(v.b, {
					className: B.a.menuOverflowItem,
					displayText: W._("Copy Link", null, {
						hk: "2oo038"
					}),
					iconWrapperClassName: B.a.overflowItemShareIconWrapper,
					key: `${ne}-share`,
					onClick: t
				}, n.a.createElement(E.a, {
					name: "link_post",
					className: B.a.linkIcon
				})), n.a.createElement(v.b, {
					className: B.a.menuOverflowItem,
					displayText: W._("Crosspost", null, {
						hk: "QSd6Z"
					}),
					iconWrapperClassName: B.a.overflowItemShareIconWrapper,
					key: `${ne}-crosspost`,
					onClick: e
				}, n.a.createElement(E.a, {
					name: "crosspost",
					className: B.a.overflowItemIcon
				})), a && n.a.createElement(v.b, {
					className: B.a.menuOverflowItem,
					displayText: W._("Share to Chat", null, {
						hk: "2uVgxZ"
					}),
					iconWrapperClassName: B.a.overflowItemShareIconWrapper,
					key: `${ne}-sharetochat`,
					onClick: r
				}, n.a.createElement(E.a, {
					name: "chat",
					className: B.a.overflowItemIcon
				})))
			}, se = i.a.wrapped(x.a, "menuIcon", B.a), re = e => {
				let t = 186;
				if (e) {
					t += 74 + 40
				}
				return t
			}, ne = "rpan-overlay-menu", oe = ({
				onClick: e,
				onHideClick: t,
				onReportClick: s,
				onToggleLockClick: r,
				isCommentsLocked: o,
				hasModeratorPermissions: a,
				onEndBroadcastClick: i,
				onRpanStudioClick: d,
				subreddit: u
			}) => n.a.createElement(h.b, {
				className: B.a.menuButton,
				defaultButtonOutline: !0,
				dropdownId: ne,
				icon: n.a.createElement(se, null),
				onClick: e,
				style: {
					maxHeight: `${re(a)}px`,
					overflowY: "auto",
					bottom: "0px"
				}
			}, n.a.createElement(v.b, {
				className: B.a.overflowItem,
				displayText: W._("View rules", null, {
					hk: "haY6r"
				}),
				iconWrapperClassName: B.a.overflowItemIconWrapper,
				key: `${ne}-rules`,
				onClick: () => Object(c.e)(l.S, c.d.BLANK)
			}, n.a.createElement(R.a, {
				className: B.a.overflowItemIcon
			})), n.a.createElement(v.b, {
				className: B.a.overflowItem,
				displayText: W._("Stream from desktop", null, {
					hk: "4dOdik"
				}),
				iconWrapperClassName: B.a.overflowItemIconWrapper,
				key: `${ne}-rpanstudio`,
				onClick: d
			}, n.a.createElement(L.a, {
				className: B.a.overflowItemIcon
			})), n.a.createElement(v.b, {
				className: B.a.overflowItem,
				displayText: W._("Visit community", null, {
					hk: "2KViLk"
				}),
				iconWrapperClassName: B.a.overflowItemIconWrapper,
				key: `${ne}-community`,
				onClick: () => {
					Object(c.e)(Object(_.a)(u), c.d.BLANK)
				}
			}, (e => {
				const t = e && Object(g.a)({
					subreddit: e
				});
				return t ? n.a.createElement("img", {
					className: B.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					},
					src: t
				}) : n.a.createElement(S.a, {
					className: B.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					}
				})
			})(u)), n.a.createElement(v.b, {
				className: B.a.overflowItem,
				displayText: W._("Report", null, {
					hk: "4oVcnd"
				}),
				iconWrapperClassName: B.a.overflowItemIconWrapper,
				key: `${ne}-report`,
				onClick: s
			}, n.a.createElement(A.a, {
				className: B.a.overflowItemIcon
			})), n.a.createElement(v.b, {
				className: B.a.overflowItem,
				displayText: W._("Hide", null, {
					hk: "15vs9C"
				}),
				iconWrapperClassName: B.a.overflowItemIconWrapper,
				key: `${ne}-hide`,
				onClick: t
			}, n.a.createElement(k.a, {
				className: B.a.overflowItemIcon
			})), a && n.a.createElement(n.a.Fragment, null, n.a.createElement(v.b, {
				className: B.a.headerItem,
				displayText: W._("Mod Actions", null, {
					hk: "19zCiw"
				}),
				key: `${ne}-modaction`,
				onClick: () => {}
			}), n.a.createElement(v.b, {
				className: B.a.overflowItem,
				displayText: o ? W._("Unlock comments", null, {
					hk: "Btg6R"
				}) : W._("Lock comments", null, {
					hk: "3Ew6q9"
				}),
				iconWrapperClassName: B.a.overflowItemIconWrapper,
				key: `${ne}-lock`,
				onClick: r
			}, o ? n.a.createElement(P.a, {
				className: B.a.overflowItemIcon
			}) : n.a.createElement(T.a, {
				className: B.a.overflowItemIcon
			})), n.a.createElement(v.b, {
				className: B.a.endBroadcastItem,
				displayText: W._("Remove broadcast", null, {
					hk: "3GaDuI"
				}),
				iconWrapperClassName: B.a.overflowItemIconWrapper,
				key: `${ne}-end`,
				onClick: i
			}, n.a.createElement(N.a, {
				className: B.a.endBroadcastIcon
			})))), ae = Object(o.b)(null, e => ({
				vote: (t, s) => e(Object(u.a)(t, s))
			}))(class extends r.Component {
				constructor(e) {
					super(e), this.handleUpVote = () => {
						const e = this.toggleVoteState(D.a.upvoted);
						this.vote(e)
					}, this.handleDownVote = () => {
						const e = this.toggleVoteState(D.a.downvoted);
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
					return null == e ? null : t && void 0 !== this.voteState ? e - Object(D.e)(t) + this.voteState : e
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
					const e = this.voteState === D.a.upvoted,
						t = this.voteState === D.a.downvoted;
					return n.a.createElement("div", {
						className: B.a.votePanel
					}, n.a.createElement(ie, {
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
					this.setVoteState(e, Object(D.e)(t))
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
					return e === this.voteState ? D.a.notVoted : e
				}
				vote(e) {
					const {
						broadcast: t,
						onUpvote: s,
						onDownvote: r
					} = this.props, {
						id: n
					} = t.post;
					this.setVoteState(n, e), this.props.vote(n, e), e === D.a.upvoted ? s() : e === D.a.downvoted && r()
				}
			}), ie = ({
				onClick: e,
				voted: t
			}) => n.a.createElement("button", {
				className: Object(a.a)(B.a.voteButton, B.a.upVoteButton, {
					[B.a.voted]: t
				}),
				onClick: e,
				value: "upvote",
				"aria-label": W._("Upvote", null, {
					hk: "Ufd6r"
				})
			}, n.a.createElement(y.a, {
				className: B.a.voteIcon
			})), ce = ({
				onClick: e,
				voted: t
			}) => n.a.createElement("button", {
				className: Object(a.a)(B.a.voteButton, B.a.downVoteButton, {
					[B.a.voted]: t
				}),
				onClick: e,
				value: "downvote",
				"aria-label": W._("Downvote", null, {
					hk: "ZDRA3"
				})
			}, n.a.createElement(w.a, {
				className: B.a.voteIcon
			})), de = ({
				score: e
			}) => n.a.createElement("div", {
				className: B.a.score
			}, Object(d.b)(e)), le = ({
				children: e
			}) => n.a.createElement("div", {
				className: B.a.prompt
			}, e), ue = () => n.a.createElement(le, null, W._("Connection issues", null, {
				hk: "hIrnJ"
			})), me = () => n.a.createElement(le, null, W._("Tuning...", null, {
				hk: "3dG7Ks"
			})), pe = () => n.a.createElement(le, null, W._("Broadcast paused", null, {
				hk: "jxvku"
			})), he = ({
				onClickCrosspost: e,
				onClickReplay: t,
				onClickShare: s
			}) => n.a.createElement(le, null, n.a.createElement("div", {
				className: B.a.promptButtonSet
			}, n.a.createElement(U.g, {
				onClick: t
			}), n.a.createElement(U.h, {
				onClick: s
			}), n.a.createElement(U.f, {
				onClick: e
			}))), be = ({
				onClickAward: e
			}) => n.a.createElement(le, null, n.a.createElement("div", {
				className: B.a.awardPromptWrapper
			}, n.a.createElement("div", {
				className: B.a.awardPromptLabel
			}, W._("Award this broadcast to give it more airtime", null, {
				hk: "20jmEz"
			})), n.a.createElement(U.a, {
				onClick: e
			}))), fe = e => {
				if (!e) return !1;
				const {
					id: t,
					name: s
				} = e;
				return !(!t || !s || "string" != typeof t || "string" != typeof s)
			}, ve = ({
				profile: e,
				currentStream: t,
				onSubscriptionChange: s
			}) => {
				const {
					name: r
				} = e, o = ge(r), a = _e(r), i = Ce(r, !a), c = a ? W._("Unfollow u/{name}", [W._param("name", r)], {
					hk: "2n0wqa"
				}) : W._("Follow u/{name}", [W._param("name", r)], {
					hk: "20X8Bw"
				}), d = n.a.createElement("button", {
					className: B.a.subscribeToProfileButton,
					onClick: () => {
						s(!a), i()
					},
					title: c
				}, n.a.createElement(Ee, {
					profile: e
				}), n.a.createElement(we, {
					isSubscribed: a
				}));
				return o && o.enableFollowers ? d : null
			}, ge = e => Object(o.e)(t => Object(F.nb)(t, {
				userName: e
			})), _e = e => Object(o.e)(t => Object(V.cb)(t, {
				identifier: {
					name: e,
					type: f.a.PROFILE
				}
			})), Ce = (e, t) => {
				const s = Object(o.d)();
				return Object(r.useCallback)(() => {
					s(Object(m.d)([{
						name: e,
						type: f.a.PROFILE
					}], t))
				}, [s, e, t])
			}, Ee = ({
				profile: e
			}) => {
				const {
					id: t,
					name: s
				} = e, r = ge(s), o = ye(r), i = o && Object(C.a)(r.accountIcon);
				return n.a.createElement("div", {
					className: Object(a.a)(B.a.subscribeToProfileAvatar, {
						[B.a.snoovatarHeadshot]: i
					})
				}, r ? o ? i ? n.a.createElement(b.a, {
					headshot: r.accountIcon
				}) : n.a.createElement("img", {
					src: r.accountIcon
				}) : n.a.createElement(p.a, {
					userId: t
				}) : null)
			}, we = ({
				isSubscribed: e
			}) => n.a.createElement("div", {
				className: Object(a.a)(B.a.subscribeToProfileStatus, {
					[B.a.isSubscribed]: e
				})
			}, e ? n.a.createElement(xe, null) : n.a.createElement(Oe, null)), xe = () => n.a.createElement("svg", {
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M17.7072 5.69337L16.3083 4.29337C16.1203 4.10537 15.8662 4.00037 15.6012 4.00037C15.3352 4.00037 15.0812 4.10537 14.8942 4.29337L7.90025 11.2864L5.10725 8.49337C4.71725 8.10237 4.08425 8.10237 3.69325 8.49337L2.29325 9.89337C1.90225 10.2844 1.90225 10.9174 2.29325 11.3074L7.19325 16.2074C7.38925 16.4024 7.64425 16.5004 7.90025 16.5004C8.15625 16.5004 8.41225 16.4024 8.60725 16.2074L17.7072 7.10737C18.0982 6.71637 18.0982 6.08437 17.7072 5.69337"
			})), Oe = () => n.a.createElement("svg", {
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M12.8,6.4 L9.6,6.4 L9.6,3.2 C9.6,2.7576 9.2424,2.4 8.8,2.4 L7.2,2.4 C6.7576,2.4 6.4,2.7576 6.4,3.2 L6.4,6.4 L3.2,6.4 C2.7584,6.4 2.4,6.7576 2.4,7.2 L2.4,8.8 C2.4,9.2424 2.7584,9.6 3.2,9.6 L6.4,9.6 L6.4,12.8 C6.4,13.2424 6.7576,13.6 7.2,13.6 L8.8,13.6 C9.2424,13.6 9.6,13.2424 9.6,12.8 L9.6,9.6 L12.8,9.6 C13.2424,9.6 13.6,9.2424 13.6,8.8 L13.6,7.2 C13.6,6.7576 13.2424,6.4 12.8,6.4"
			})), ye = e => {
				const t = Object(o.e)(F.k),
					s = Object(o.e)(F.C),
					r = Object(o.e)(F.eb);
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				i = s.n(a);
			const c = e => n.a.createElement("span", {
				className: Object(o.a)(i.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => n.a.createElement(c, {
				className: Object(o.a)(i.a.metaSeparator, e),
				isSmall: t
			})
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, s) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/keycodes.ts"),
				i = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = s.n(l);
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== a.b.Enter && e.key !== a.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : n.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(o.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? n.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : n.a.createElement(i.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/constants/keycodes.ts");
			class a extends n.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: s
						} = this.props;
						t || this.state.value !== e && (s(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return n.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: s
						} = this.props, {
							value: r
						} = this.state;
						if (t) return;
						const n = e.key === o.b.ArrowUp,
							a = e.key === o.b.ArrowDown;
						if (n || a) {
							const t = this.getValues();
							if (!t.length) return;
							const o = r ? t.indexOf(r) : 0,
								a = t[((n ? o - 1 : o + 1) + t.length) % t.length];
							s(a), this.setState({
								value: a
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return n.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, n.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), n.a.Children.map(e.children, (s, r) => {
						const o = 0 === r,
							a = s.props.value === t,
							i = null !== t ? a ? 0 : -1 : o ? 0 : -1;
						return n.a.cloneElement(s, {
							disabled: e.disabled,
							onClick: e => this.handleClick(s.props.value),
							selected: a,
							tabIndex: i
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu",
				viewCount: "_3bAGP2FKe97ijgBAGQOYsk"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CountAnimation/index.tsx"),
				m = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				h = s("./src/reddit/constants/colors.ts"),
				b = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				f = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				v = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = s("./src/reddit/models/Vote/index.ts"),
				C = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				E = s("./src/reddit/selectors/meta.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				x = s("./node_modules/reselect/es/index.js"),
				O = s("./src/reddit/controls/Score/index.m.less"),
				y = s.n(O);
			const I = {
					placement: "right"
				},
				S = e => e.voteState === _.a.downvoted ? Object(g.a)(e).voteText.downvote : e.voteState === _.a.upvoted ? Object(g.a)(e).voteText.upvote : Object(f.a)(Object(b.a)(e)),
				k = Object(x.c)({
					locale: e => Object(E.i)(e),
					post: (e, {
						isReadingIndicatorsExperimentEnabled: t,
						postId: s
					}) => {
						if (t && s) return Object(w.H)(e, {
							postId: s
						})
					}
				}),
				T = () => 0,
				j = Object(d.b)(k),
				N = Object(o.a)(e => {
					const t = {
							color: e.light ? h.b.lightboxHeaderText : S(e)
						},
						{
							score: s,
							postId: o = "",
							locale: b,
							isVoteCountAnimation: f,
							isCountAnimShadowTestEnabled: g,
							isReadingIndicatorsExperimentEnabled: _,
							post: E
						} = e,
						w = Object(d.d)(),
						x = null == b ? void 0 : b.startsWith("en"),
						O = e.isScoreHidden ? x ? r.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: y.a.dot
						}, "•") : Object(a.b)(s),
						k = Object(i.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && w(Object(l.I)({
								postId: o,
								delta: t
							}))
						}, [w, o]),
						j = Object(i.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: o
								}
							}
						}),
						N = !e.isScoreHidden && f && s < C.a,
						A = Object(v.a)(I);
					return c.a.createElement("div", {
						className: Object(n.a)(y.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t,
						onMouseEnter: _ ? A.show : void 0,
						onMouseLeave: _ ? A.hide : void 0,
						ref: _ ? A.target.ref : void 0
					}, (N || g) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: s,
						countToUpperBound: s,
						initialDelay: T,
						subsequentRecurringDelay: T,
						incrementDelta: T,
						shouldDisjointAnimation: !0,
						postId: o,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: j.current,
						onDataCB: k,
						isLoadTestOnly: g && !N
					})), !N && O, _ && E && c.a.createElement(m.a, A, c.a.createElement(p.a, {
						className: y.a.viewCount,
						post: E,
						showViewCount: !1
					})))
				});
			t.a = j(N)
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
				o = e => {
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
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "i", (function() {
				return v
			}));
			var r = s("./src/reddit/models/Gold/Award.ts"),
				n = s("./src/reddit/selectors/telemetry.ts"),
				o = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/helpers/trackers/gild.ts");
			const i = e => ({
					...n.defaults(e),
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === r.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(a.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...i(e),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...i(t),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, s) => r => ({
					...i(r),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: s
				}),
				m = (e, t, s, r) => n => ({
					...i(n),
					source: "create_award",
					action: "upload",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "image",
					actionInfo: r ? {
						reason: r
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: s,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, s) => r => ({
					...i(r),
					source: "create_award",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: s ? c(s) : null
				}),
				h = (e, t, s) => r => ({
					...i(r),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: s ? c(s) : null
				}),
				b = (e, t, s) => r => ({
					...i(r),
					source: "awards",
					action: "click",
					noun: s,
					goldPurchase: c(e),
					profile: n.profileById(r, t),
					subreddit: n.subredditById(r, t)
				}),
				f = (e, t) => b(e, t, "disable_in_community"),
				v = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), s.d(t, "clickGildEvent", (function() {
				return m
			})), s.d(t, "clickRpanGiveAward", (function() {
				return p
			})), s.d(t, "clickAddAward", (function() {
				return h
			})), s.d(t, "clickHideAward", (function() {
				return b
			})), s.d(t, "clickConfirmHideAward", (function() {
				return f
			})), s.d(t, "clickCancelHideAward", (function() {
				return v
			})), s.d(t, "clickAwardReportFlow", (function() {
				return _
			})), s.d(t, "clickCancelAwardReportFlow", (function() {
				return C
			})), s.d(t, "clickFlagAwardUsage", (function() {
				return E
			})), s.d(t, "clickCancelFlagAwardUsage", (function() {
				return w
			})), s.d(t, "clickConfirmFlagAwardUsage", (function() {
				return x
			})), s.d(t, "clickReportAward", (function() {
				return O
			})), s.d(t, "clickCancelReportAward", (function() {
				return y
			})), s.d(t, "clickConfirmReportAward", (function() {
				return I
			})), s.d(t, "viewGildModalEvent", (function() {
				return S
			})), s.d(t, "clickSelectAwardEvent", (function() {
				return k
			})), s.d(t, "triggerAnonymousEvent", (function() {
				return T
			})), s.d(t, "clickMessageInputEvent", (function() {
				return j
			})), s.d(t, "typeMessageInputEvent", (function() {
				return N
			})), s.d(t, "clickLearnMoreLinkEvent", (function() {
				return A
			})), s.d(t, "clickQuestionMarkEvent", (function() {
				return R
			})), s.d(t, "clickConfirmAwardEvent", (function() {
				return P
			})), s.d(t, "clickGetPremiumEvent", (function() {
				return L
			})), s.d(t, "clickAddCoinsButtonEvent", (function() {
				return D
			})), s.d(t, "clickNextButtonEvent", (function() {
				return M
			})), s.d(t, "clickCloseGildModalEvent", (function() {
				return V
			})), s.d(t, "viewKarmaSuccessEvent", (function() {
				return F
			})), s.d(t, "clickFilterEvent", (function() {
				return U
			})), s.d(t, "clickNextFiltersEvent", (function() {
				return H
			})), s.d(t, "clickPreviousFiltersEvent", (function() {
				return B
			}));
			var r = s("./src/reddit/models/Gold/Award.ts"),
				n = s("./src/reddit/selectors/telemetry.ts"),
				o = s("./src/telemetry/models/GoldPurchase.ts"),
				a = s("./src/reddit/helpers/correlationIdTracker.ts"),
				i = s("./src/reddit/helpers/isComment.ts"),
				c = s("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === r.f.Global && e.awardSubType === r.d.Appreciation ? o.GoldPurchaseType.GidAppreciation : e.awardType === r.f.Global && e.awardSubType === r.d.Premium ? o.GoldPurchaseType.GidPremium : e.awardSubType === r.d.Group ? o.GoldPurchaseType.GidGroup : e.awardType === r.f.Community ? o.GoldPurchaseType.GidCommunity : e.awardType === r.f.Moderator ? o.GoldPurchaseType.GidMod : e.awardType === r.f.Global && e.awardSubType === r.d.Global ? o.GoldPurchaseType.GidGlobal : o.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...n.defaults(e),
					comment: t ? n.comment(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(a.d)(a.a.GildingFlow, !1),
					post: t ? n.post(e, t) : void 0,
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: n.feed(t)
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				h = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: n.feed(t)
				}),
				b = (e, t) => s => ({
					...u(s, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				f = (e, t) => s => ({
					...u(s, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				v = (e, t) => s => ({
					...u(s, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				g = e => (t, s) => r => ({
					...u(r, s),
					source: Object(i.a)(s) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				_ = g("award_hovercard_report"),
				C = g("cancel_award_hovercard_report"),
				E = g("flag_award"),
				w = g("cancel_flag_award"),
				x = g("confirm_flag_award"),
				O = g("report_community_award"),
				y = g("cancel_report_community_award"),
				I = g("confirm_report_community_award"),
				S = (e, t, s) => r => ({
					...u(r, s),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				k = (e, t, s) => r => ({
					...u(r, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, s)
				}),
				T = (e, t) => s => ({
					...u(s, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				j = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				R = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				P = (e, t) => s => ({
					...u(s, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				L = (e, t) => s => ({
					...u(s, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				D = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				M = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				V = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				F = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: s,
					numberCoins: r,
					thingId: n
				}) => o => ({
					...u(o, n),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(i.a)(n) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: s,
						numberCoins: r,
						...l(e)
					}
				}),
				U = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				H = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				B = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return b
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "i", (function() {
				return x
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/models/Gold/ProductOffer.ts"),
				o = s("./src/reddit/selectors/gold/giveAwards.ts"),
				a = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				i = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = s("./src/reddit/selectors/telemetry.ts"),
				d = s("./src/telemetry/models/GoldPurchase.ts"),
				l = s("./src/telemetry/models/Payment.ts"),
				u = s("./src/reddit/helpers/trackers/gild.ts"),
				m = s("./src/reddit/helpers/correlationIdTracker.ts"),
				p = s("./src/reddit/helpers/isComment.ts"),
				h = s("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: s,
						packageId: l
					} = t, b = !!s, f = o.b(e), v = f ? Object(u.getAwardTypeFromAward)(f) : null, g = b ? v : i.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, _ = s ? Object(p.a)(s) ? "comment" : "post" : void 0, C = l || i.t(e), E = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === C)[0], w = t.offerContext || (f && 0 === f.coinPrice ? n.a.StorefrontFreeAward : Object(n.d)(E, b)), x = E ? Math.round(1e4 * (E.baselinePennies - E.pennies) / E.baselinePennies) / 100 : 0, O = E ? Math.round(1e4 * (E.coins - E.baselineCoins) / E.coins) / 100 : 0, y = E ? E.baselinePennies !== E.pennies ? `${x}_percent_price` : E.baselineCoins !== E.coins ? `${O}_percent_bonus` : void 0 : void 0, I = g === d.GoldPurchaseType.Premium ? r.yb : E ? E.pennies : void 0;
					return {
						...c.defaults(e),
						comment: s ? c.comment(e, s) : null,
						correlationId: i.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: s ? c.post(e, s) : null,
						screen: c.screen(e),
						subreddit: s ? c.subreddit(e) : null,
						goldPurchase: {
							...f ? Object(h.a)(f) : null,
							type: g,
							gildedContent: b,
							contentType: _,
							numberCoins: E ? E.coins : void 0,
							offerContext: w,
							offerType: y
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: I
						},
						purchase: {
							priceMicros: I
						}
					}
				},
				f = (e, t, s) => r => ({
					...b(r, {
						packageId: t,
						thingId: e,
						offerContext: s
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				v = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				_ = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				C = (e, t) => s => ({
					...b(s, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				E = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				w = (e, t, s) => r => {
					const n = b(r, {
						packageId: t,
						thingId: e,
						offerContext: s
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...n.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...n.goldPurchase,
							source: e ? d.GiveGold : i.o(r) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				x = e => t => {
					var s;
					const r = b(t, {
						thingId: e
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...r.payment,
							method: (null === (s = t.platform.currentPage) || void 0 === s ? void 0 : s.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var r = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/telemetry/index.ts"),
				o = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: i.profile(e),
					screen: i.screen(e),
					subreddit: i.subreddit(e)
				}),
				d = (e, t, s) => r => ({
					source: Object(a.i)(r) || s ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(r),
					post: i.post(r, e)
				}),
				l = (e, t, s, r) => n => {
					const a = s ? i.comment(n, s) : null,
						{
							sortToUse: c
						} = Object(o.a)(n, e);
					return {
						...d(e, t, r)(n),
						comment: a,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => s => {
					const r = i.currentPost(s);
					return r ? d(r.id, e, t)(s) : {
						source: Object(a.i)(s) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(s)
					}
				},
				m = (e, t) => s => Object(n.a)({
					...d(e, t)(s),
					...i.defaults(s)
				}),
				p = e => t => ({
					source: "id_card",
					action: r.c.CLICK,
					noun: e,
					...c(t),
					post: i.currentPost(t),
					userSubreddit: i.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "j", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "k", (function() {
				return h
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "l", (function() {
				return v
			}));
			var r = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(n.screen)(e),
					profile: Object(n.profile)(e),
					subreddit: Object(n.subreddit)(e),
					userSubreddit: Object(n.userSubreddit)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				i = (e, t) => s => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					...o(s)
				}),
				c = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t),
					...o(s)
				}),
				d = (e, t) => s => ({
					source: "comment",
					action: r.c.UNDO,
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t),
					...o(s)
				}),
				l = (e, t) => s => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t),
					...o(s)
				}),
				u = (e, t) => s => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t),
					...o(s)
				}),
				m = (e, t) => s => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t),
					...o(s)
				}),
				p = (e, t) => s => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(n.comment)(s, t),
					post: Object(n.post)(s, t),
					...o(s)
				}),
				h = (e, t) => s => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					...o(s)
				}),
				b = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					subreddit: Object(n.subredditByPostOrCommentId)(s, t)
				}),
				f = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(n.comment)(s, t),
					post: Object(n.post)(s, t),
					subreddit: Object(n.subredditByPostOrCommentId)(s, t)
				}),
				v = (e, t, s, r) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(n.post)(o, s),
					subreddit: Object(n.subredditByPostOrCommentId)(o, s),
					actionInfo: {
						reason: r
					},
					...e && {
						comment: Object(n.comment)(o, s)
					}
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return i
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
				return p
			})), s.d(t, "o", (function() {
				return h
			})), s.d(t, "r", (function() {
				return b
			})), s.d(t, "k", (function() {
				return f
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "l", (function() {
				return x
			})), s.d(t, "t", (function() {
				return O
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "x", (function() {
				return S
			})), s.d(t, "u", (function() {
				return k
			})), s.d(t, "a", (function() {
				return T
			})), s.d(t, "s", (function() {
				return j
			})), s.d(t, "v", (function() {
				return N
			})), s.d(t, "w", (function() {
				return A
			}));
			var r = s("./src/reddit/models/ScheduledPost/index.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
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
				i = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...o(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...o(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...o(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...o(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...o(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...o(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...o(t),
					scheduledPost: a(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...o(t),
					scheduledPost: a(e)
				}),
				f = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...o(e)
				}),
				v = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...o(e)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...o(e)
				}),
				C = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...o(t),
					actionInfo: n.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				E = {
					[r.d.Hourly]: "hourly_frequency",
					[r.d.Daily]: "daily_frequency",
					[r.d.Weekly]: "weekly_frequency",
					[r.d.Monthly]: "monthly_frequency",
					[r.b]: "custom_frequency"
				},
				w = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : E[e],
					...o(t)
				}),
				x = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				O = (e, t, s) => a => ({
					source: "post",
					action: "click",
					noun: Object(r.l)(e),
					...o(a),
					actionInfo: n.actionInfo(a, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				y = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...o(e)
				}),
				I = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...o(e)
				}),
				S = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				k = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(e),
					scheduledPost: a(t)
				}),
				T = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				j = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: a(t)
				}),
				N = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				A = () => (e, t) => {
					const s = o(e);
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
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			}));
			var r = s("./src/reddit/helpers/flair.ts"),
				n = s("./src/reddit/selectors/gold/powerups/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...o.defaults(e)
				}),
				i = e => t => {
					const s = o.subreddit(t),
						a = Object(n.w)(t, {
							subredditId: null == s ? void 0 : s.id
						}),
						{
							userFlair: i,
							achievementFlair: c,
							supporterFlair: d
						} = e,
						l = c || d;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...o.defaults(t),
						subreddit: s,
						userFlair: {
							id: null == i ? void 0 : i.id,
							title: i ? Object(r.g)(i) : void 0,
							isActive: !!i || void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name,
							isLocked: null == l ? void 0 : l.isLocked,
							supporterFlairId: null == d ? void 0 : d.type,
							supporterFlairTitle: null == d ? void 0 : d.name,
							isSupporter: a
						}
					}
				},
				c = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...o.defaults(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: o.subreddit(t),
					...o.defaults(t)
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");

			function o(e, t = n.a) {
				return Object(r.e)(s => Object(n.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/icepick/icepick.js"),
				n = s("./node_modules/react/index.js"),
				o = s("./src/lib/hooks/useTooltip.ts");
			const a = Object(r.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function i(e) {
				const t = Object(n.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, a))
				}, [e]);
				return Object(o.b)(t)
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(o.b)("menu",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, n.a.createElement("defs", null, n.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), n.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#svg-add-collection",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), n.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
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
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, n.a.createElement("g", {
				stroke: "none"
			}, n.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			const o = e => n.a.createElement("svg", {
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
				i = e => n.a.createElement("svg", {
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
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", c({}, e, {
				className: Object(o.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
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
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				i = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
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
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, s) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/Inline/index.m.less"),
				o = s.n(n);
			t.a = r.a.div("inlineRow", o.a)
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			}));
			var r, n = s("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(r || (r = {}));
			const o = {
				[r.Powerups]: () => n.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[r.Premium]: () => n.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var a, i;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(a || (a = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(i || (i = {}));
			const c = (e, t) => {
				const s = e && e.dealInfo && e.dealInfo.type,
					r = "low_coin_upsell" === s,
					n = "new_purchaser" === s,
					o = "repeat_purchaser" === s;
				return t ? i.GildFlow : r ? i.LowCoinBalance : n ? i.NewUserTargetedOffer : o ? i.RepeatUserTargetedOffer : void 0
			}
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
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "q", (function() {
				return v
			})), s.d(t, "k", (function() {
				return g
			})), s.d(t, "j", (function() {
				return _
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return E
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "m", (function() {
				return x
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "p", (function() {
				return I
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/lib/assertNever.ts"),
				n = s("./src/reddit/models/GqlTopLevelField.ts"),
				o = s("./src/reddit/models/User/index.ts");
			const a = "scheduledposts";
			var i, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(i || (i = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === o.c.AvailableRedditor,
				m = e => e.__typename === n.a.Subreddit;
			var p, h, b, f;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(h || (h = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(f || (f = {}));
			const v = e => h[f[e]],
				g = e => f[h[e]],
				_ = e => b[h[e]],
				C = e => h[b[e]],
				E = e => f[b[e]];
			var w;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(w || (w = {}));
			const x = e => {
					switch (e) {
						case w.Hourly:
						case w.Daily:
						case w.Weekly:
						case w.Monthly:
							return !0
					}
					return !1
				},
				O = "custom",
				y = e => {
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
				I = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/creatorStats/constants.ts");
			const o = {};
			var a = (e = o, t) => {
				switch (t.type) {
					case n.a:
						const {
							postStats: s
						} = t.payload;
						return {
							...e, ...s
						};
					default:
						return e
				}
			};
			const i = {};
			var c = (e = i, t) => {
				switch (t.type) {
					case n.a:
						const {
							subredditKarma: s
						} = t.payload;
						return {
							...e, ...s
						};
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				postStats: a,
				subredditKarma: c
			})
		},
		"./src/reddit/selectors/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var r = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./src/reddit/reducers/features/creatorStats/index.ts"),
				o = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/user.ts");
			Object(r.a)({
				features: {
					creatorStats: n.a
				}
			});
			const c = (e, t) => {
					var s, r;
					return null === (r = null === (s = e.features) || void 0 === s ? void 0 : s.creatorStats) || void 0 === r ? void 0 : r.postStats[t]
				},
				d = (e, t) => {
					var s, r, n;
					const o = null === (n = null === (r = null === (s = e.features) || void 0 === s ? void 0 : s.creatorStats) || void 0 === r ? void 0 : r.subredditKarma[t]) || void 0 === n ? void 0 : n.karma;
					if (o) return o.fromComments + o.fromPosts
				},
				l = (e, t) => {
					const s = Object(a.H)(e, {
						postId: t
					});
					return !(!s || s.isSponsored) && (Object(i.qb)(e, {
						postId: t
					}) || !!Object(o.l)(e, {
						postId: t
					}))
				}
		},
		"./src/reddit/selectors/experiments/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = (e, t) => {
				return Object(n.c)(e, {
					experimentEligibilitySelector: e => ((e, t) => Object(a.qb)(e, {
						postId: t
					}) || !!Object(o.l)(e, {
						postId: t
					}) || Object(a.H)(e))(e, t),
					experimentName: r.M
				}) === r.Zc
			}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "g", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			const r = e => e.gild.gildModalThingId,
				n = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				i = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return n
			}));
			const r = e => e.gild.selectedAward,
				n = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, s) {
			"use strict";
			s.d(t, "q", (function() {
				return a
			})), s.d(t, "s", (function() {
				return i
			})), s.d(t, "r", (function() {
				return c
			})), s.d(t, "u", (function() {
				return d
			})), s.d(t, "t", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "p", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "o", (function() {
				return b
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "l", (function() {
				return g
			})), s.d(t, "w", (function() {
				return _
			})), s.d(t, "x", (function() {
				return C
			})), s.d(t, "v", (function() {
				return E
			})), s.d(t, "y", (function() {
				return w
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "k", (function() {
				return I
			})), s.d(t, "j", (function() {
				return S
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "d", (function() {
				return j
			}));
			var r = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(n.a)({
				features: {
					goldPurchase: o.a
				}
			});
			const a = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(r.l)(e),
						s = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && s && t.find(e => e.mobileId === s) || null
				},
				h = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				f = e => e.features.goldPurchase.payment.paymentMethod,
				v = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				_ = e => e.features.goldPurchase.payment.savedCardsPending,
				C = e => e.features.goldPurchase.payment.savedCards,
				E = e => e.features.goldPurchase.payment.rememberCard,
				w = e => e.features.goldPurchase.payment.useSavedCard,
				x = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				O = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				y = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				I = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				S = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				k = e => e.features.goldPurchase.payment.stripeToken.pending,
				T = e => e.features.goldPurchase.payment.paypal.passthrough,
				j = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RpanListingUnit.395540d7ae4b4336435c.js.map