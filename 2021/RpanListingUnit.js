// https://www.redditstatic.com/desktop2x/RpanListingUnit.5f4eca3834b41afb8819.js
// Retrieved at 4/19/2021, 3:10:07 PM by Reddit Dataminer v1.0.0
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
				a = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/isArray.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? r : n;
				return s && o(e, t, s) && (t = void 0), c(e, a(t, 3))
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/cache/localStorage/index.ts"),
				c = s("./src/lib/combineRefs/index.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(d.a)(() => s.e("MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const h = Object(i.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.gc
				});
				return Object(u.sd)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.hc
				});
				return Object(u.sd)(t) ? void 0 : t
			}, (e, t) => e === u.jc.Enabled && t === u.jc.Enabled);
			var p = s("./src/config.ts");
			var b = s("./src/reddit/selectors/user.ts");
			const f = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						r = new Uint32Array(e);
					return crypto.getRandomValues(r), Array.from(r).map(e => t.charAt(e % s)).join("")
				},
				v = (e = new Date) => new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3"),
				g = (e, t = 0) => Math.trunc(e).toString(16).padStart(t, "0");
			var C;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(C || (C = {}));
			const E = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					r = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(r)).map(g).join("")
			})(C.SHA1, e);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				x = {
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
					localStorageSaltKey: p,
					localStorageViewerUserIdKey: g,
					playerName: C,
					playerVersion: y,
					respectDoNotTrack: O,
					saltLength: I,
					saltTimeToLive: S,
					viewerUserIdLength: T
				} = {
					...x,
					...t
				};
				class N extends r.Component {
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
						return n.a.createElement(e, w({}, r, {
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
						const e = this.props.redditUserId || N.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = `${v()}${e}${t}`;
						return (await E(s)).substr(0, N.VIEWER_USER_ID_LENGTH)
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
							debug: N.DEBUG,
							disableCookies: N.DISABLE_COOKIES,
							respectDoNotTrack: N.RESPECT_DO_NOT_TRACK,
							...s,
							data: {
								env_key: N.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: N.PLAYER_NAME,
								player_version: N.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = N.LOCAL_STORAGE_SALT_KEY;
						let t = Object(o.a)(e);
						return t || (t = f(N.SALT_LENGTH), Object(o.b)(e, t, N.SALT_TIME_TO_LIVE)), t
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
							video_duration: s ? N.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? N.STREAM_TYPE_LIVE : N.STREAM_TYPE_ON_DEMAND,
							video_title: r
						}
					}
				}
				N.displayName = _(e), N.ANONYMOUS_USER_ID = s, N.DEBUG = d, N.DISABLE_COOKIES = u, N.DURATION_LIVE = 1 / 0, N.ENV_KEY = m, N.LOCAL_STORAGE_SALT_KEY = p, N.LOCAL_STORAGE_VIEWER_USER_ID_KEY = g, N.PLAYER_NAME = C, N.PLAYER_VERSION = y, N.RESPECT_DO_NOT_TRACK = O, N.SALT_LENGTH = I, N.SALT_TIME_TO_LIVE = S, N.STREAM_TYPE_LIVE = "live", N.STREAM_TYPE_ON_DEMAND = "on-demand", N.VIEWER_USER_ID_LENGTH = T;
				const k = Object(r.forwardRef)((e, t) => n.a.createElement(N, w({}, e, {
						forwardedRef: t
					}))),
					A = Object(i.c)({
						redditUserId: b.g,
						isMuxEnabled: h
					});
				return Object(a.b)(A, null, null, {
					forwardRef: !0
				})(k)
			}
		},
		"./src/lib/VideoSession/VideoSessionManager.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = new WeakMap,
				n = new WeakMap,
				a = new WeakMap;
			class i {
				get laps() {
					return r.get(this).slice(1)
				}
				get paused() {
					return !n.has(this)
				}
				get time() {
					const e = Date.now(),
						t = a.get(this);
					return this.paused ? t : t + (e - n.get(this))
				}
				constructor() {
					this.reset()
				}
				start() {
					this.paused && n.set(this, Date.now())
				}
				pause() {
					this.paused || (a.set(this, this.time), n.delete(this))
				}
				reset() {
					r.set(this, [
						[0, 0]
					]), a.set(this, 0), n.delete(this)
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
					this.delayIterator = null, this.id = d()(), this.meta = t, this.onError = s, this.onHeartbeat = r, this.sessionTimer = new i, this.startedAt = 0, this.watchTimer = new i
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
					this.idleTimer = new i, this.onHeartbeat = t.onHeartbeat, this.attachVideo(e)
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
			f.IDLE_THRESHOLD = Object(o.a)(300);
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
				return a
			}));
			var r = s("./node_modules/lodash/every.js"),
				n = s.n(r);

			function a(e) {
				let t = null,
					s = null;
				return (...r) => (null !== t && r.length === t.length && n()(r, (e, s) => e === t[s]) || (t = r, s = e(...r)), s)
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t, ...s) {
				let r, n = !1;
				const a = async () => {
					s && s.length ? await e.call(window, ...s) : await e.call(window), n || (r = window.setTimeout(a, t))
				};
				return r = window.setTimeout(a, t), () => {
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
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "a", (function() {
				return c
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				n = "MOD_PAGE_EVENT_POSTS_FAILED",
				a = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				o = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "i", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
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
				return h
			})), s.d(t, "h", (function() {
				return p
			}));
			var r = s("./src/lib/loadableAction/index.ts");
			const n = e => () => s.e("CommunityAwards").then(s.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				a = Object(r.a)(n("awardSheetInfoRequested")),
				i = Object(r.a)(n("manageableAwardsRequested")),
				o = Object(r.a)(n("createCommunityAward")),
				c = Object(r.a)(n("createGlobalAward")),
				d = Object(r.a)(n("createModAward")),
				l = Object(r.a)(n("createAwardFailed")),
				u = Object(r.a)(n("createAwardSuccessful")),
				m = Object(r.a)(n("removeCommunityAward")),
				h = Object(r.a)(n("disableAwardinCommunity")),
				p = Object(r.a)(n("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return y
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/postParentMessage/index.ts"),
				a = s("./src/reddit/helpers/isPost.ts"),
				i = s("./src/reddit/constants/modals.ts"),
				o = s("./src/reddit/selectors/gild.ts"),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				d = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/selectors/communityAwards.ts"),
				m = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./src/telemetry/index.ts"),
				b = s("./src/reddit/actions/gold/constants.ts");
			const f = Object(r.a)(b.L),
				v = Object(r.a)(b.g),
				g = () => async (e, t) => {
					const r = t();
					e(v()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: n
					} = await s.e("givePremiumTrackers").then(s.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(p.a)(n()(r))
				}, C = Object(r.a)(b.K), E = ({
					awardId: e,
					correlationId: t,
					thingId: s
				}) => async (r, n) => {
					const o = n(),
						c = e ? Object(u.a)(o, e) : void 0;
					r(C({
						award: c && c.isEnabled ? c : void 0,
						thingId: s,
						correlationId: t
					})), r(Object(l.h)(i.a.GOLD_GILD_MODAL));
					const p = Object(h.J)(o, {
						thingId: s
					});
					let b = null;
					if (p) b = p.id;
					else if (Object(a.a)(s)) {
						const e = Object(m.D)(o, {
							postId: s
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, s)
				}, w = Object(r.a)(b.f), _ = Object(r.a)(b.J), x = () => async (e, t) => {
					const r = t(),
						a = Object(o.d)(r);
					if (Object(o.g)(r)) {
						const e = "close.gild";
						Object(n.a)({
							type: e
						})
					}
					e(w()), e(Object(l.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(p.a)(d(a)(r)), Object(c.b)(c.a.GildingFlow)
				}, y = () => async () => {
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
				return a
			})), s.d(t, "f", (function() {
				return i
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
				return f
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "p", (function() {
				return E
			})), s.d(t, "q", (function() {
				return w
			})), s.d(t, "o", (function() {
				return _
			}));
			const r = "CREATE_COLLECTION_PENDING",
				n = "CREATE_COLLECTION_SUCCESS",
				a = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				o = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				h = "UPDATE_COLLECTION_FAILED",
				p = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				v = "REORDER_COLLECTION_PENDING",
				g = "REORDER_COLLECTION_SUCCESS",
				C = "REORDER_COLLECTION_FAILED",
				E = "UPDATE_COLLECTION_LAYOUT_PENDING",
				w = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				_ = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/setInterval/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const d = new class {
				constructor() {
					this.isInitialized = !1, this.streamOptions = {}, this.currentStreamsRateSec = a.c, this.currentConfigRateSec = a.d, this.heartbeatDelaySec = a.f, this.heartbeatRateSec = a.g, this.statsRefreshRateSec = a.j, this.recommendedViewerSubredditsRefreshRateSec = a.h, this.MIN_RATE_MS = 1e3, this.subscribeConfig = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startConfigWork(e, t, s)), () => this.unsubscribeConfig()), this.subscribeStreams = (e, t = {}) => async (s, r) => (this.streamOptions = t, this.initializeConfig(e, s, r).then(() => this.startStreamsWork(e, this.streamOptions, s, r)), () => this.unsubscribeStreams()), this.subscribeRecommendedViewerSubreddits = () => async (e, t) => (this.startRecommendedViewerSubredditsWork(e, t), () => this.unsubscribeRecommendedViewerSubreddits()), this.subscribeStats = e => async (t, s) => (this.currentStatsId = e, this.startStatsWork(t, s), () => this.unsubscribeStats()), this.subscribeHeartbeat = e => async (t, s) => (this.currentHeartbeatId = e, this.startHeartbeatWork(t, s), () => this.unsubscribeHeartbeat())
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
						a = r.rpan_config_refresh_rate;
					this.currentConfigRateSec !== a && (this.currentConfigRateSec = a);
					const i = r.viewer_streams_refresh;
					this.currentStreamsRateSec !== i && (this.currentStreamsRateSec = i, this.startStreamsWork(e, this.streamOptions, t, s));
					const o = r.viewer_heartbeat_interval;
					o && this.heartbeatRateSec !== o && this.startHeartbeatWork(t, s);
					const d = r.viewer_heartbeat_interval;
					d && this.statsRefreshRateSec !== d && this.startStatsWork(t, s), this.configTimeout = window.setTimeout(() => this.startConfigWork(e, t, s), this.getConfigTimeout())
				}
				async startStreamsWork(e, t, s, r) {
					window.clearTimeout(this.streamsTimeout), Object(o.d)(r()) ? await s(Object(i.f)(e, t)) : await s(Object(i.e)(e, t)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(e, t, s, r), this.getStreamsTimeout(r()))
				}
				async startRecommendedViewerSubredditsWork(e, t) {
					await this.initializeConfig(a.R, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(n.b)());
					const s = Object(c.l)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(r.a)(() => e(Object(n.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(a.R, e, t), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(c.l)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStatsId && e(Object(i.d)(this.currentStatsId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(a.R, e, t), !this.currentHeartbeatId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(c.l)(t());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const i = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const o = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						d = () => {
							this.currentHeartbeatId && e(Object(n.d)(this.currentHeartbeatId))
						};
					this.clearSendHeartbeatInterval = Object(r.a)(() => {
						d(), this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.clearSendHeartbeatInterval = Object(r.a)(d, o)
					}, i)
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
				a = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				i = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
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
				if (Object(l.J)(m))
					if (Object(c.f)(m)) await Object(i.g)(n(), e, t);
					else {
						await Object(a.d)(e);
						const s = Object(d.l)(r(), e);
						null !== s.post.voteState && Object(o.e)(s.post.voteState) === t || await Object(i.g)(n(), e, t)
					}
				else s(Object(u.h)())
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/lodash/memoize.js"),
				a = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				u = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				m = s.n(u);
			const h = d.a.div("Userpic", m.a);
			t.a = a()(e => {
				const {
					userId: t
				} = e, {
					processingAvatarImageUrl: s
				} = r.a, n = (e => e.replace(c.Ab.Account + "_", ""))(t), {
					avatar: a,
					color: i
				} = (e => {
					const t = l.length,
						s = parseInt(e, 36),
						r = s % 20 + 1,
						n = Math.floor(s / 20) % t;
					return {
						avatar: ("0" + r).slice(-2),
						color: l[n]
					}
				})(n), d = `${s}/avatar_default_${a}_${i}.png`;
				return o.a.createElement(h, {
					style: {
						backgroundImage: `url(${d})`,
						backgroundColor: `#${i}`
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				i = s("./src/reddit/hooks/usePrevious.ts"),
				o = s("./src/reddit/components/CountAnimation/config.ts"),
				c = s("./src/reddit/components/CountAnimation/helpers.ts"),
				d = s("./src/reddit/components/CountAnimation/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const {
					initialDisplayCount: t,
					countToUpperBound: s,
					incrementDelta: d,
					initialDelay: u,
					subsequentRecurringDelay: m,
					shouldDisjointAnimation: h,
					id: p
				} = e, [b, f] = Object(r.useState)(!1), [v, g] = Object(r.useState)(!0), [C, E] = Object(r.useState)([]), [w, _] = Object(r.useState)(Object(c.d)(t).reverse()), x = Object(r.useRef)(!1), y = Object(r.useRef)(null), O = Object(r.useRef)(e => {}), I = Object(r.useRef)();
				O.current = Object(r.useCallback)(e => {
					let t = e || d();
					const r = [...w].reverse().join("");
					let n = parseInt(r) + t;
					n > s && (t = s - parseInt(r), n = s);
					const a = Object(c.d)(n).reverse();
					f(!1), E(w), _(a), g(!1), I.current = setTimeout(() => {
						f(!0)
					}, 0)
				}, [s, d, w]);
				const S = Object(r.useRef)(() => {}),
					T = Object(r.useRef)(),
					N = Object(r.useRef)();
				S.current = Object(r.useCallback)(() => {
					N.current = setTimeout(() => {
						O.current();
						const e = [...C].reverse().join("");
						parseInt(e) < s && S.current()
					}, m())
				}, [s, m, C]);
				const k = Object(r.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && (x.current || (x.current = !0, T.current = setTimeout(() => {
							O.current(), S.current()
						}, u())))
					})
				}, []);
				Object(a.a)(y, k);
				const A = Object(i.a)(s);
				Object(r.useEffect)(() => (void 0 !== A && A !== s && O.current(s - A), () => {
					clearTimeout(T.current), clearTimeout(N.current), clearTimeout(I.current)
				}), [s]);
				const j = Object(r.useCallback)(() => g(!0), [g]),
					R = 0 === C.length,
					L = v || R;
				return n.a.createElement("div", {
					className: l.a.countAnimation,
					ref: y
				}, w.map((e, t) => {
					const s = C[t] || 0,
						r = Object(c.f)(s, e);
					return n.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: j,
						style: b && C.length > 0 && !v ? {
							transform: `translateY(-${h&&r.length>1?100:100*(r.length-1)}%)`,
							transitionDuration: `${(h?o.b.disjointAnimationDuration:o.b.animationIncrementDuration)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, L ? n.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : r.map((e, t) => {
						const s = 0 === t || t === r.length - 1;
						if (!h || h && s) return n.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), n.a.createElement("span", {
					id: p,
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...w].reverse().join("")))
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
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				o = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = s.n(d);
			t.a = e => i.a.createElement(o.h, {
				className: l.a.modalHeader
			}, i.a.createElement(o.p, null, e.title), i.a.createElement(c.a, {
				onClick: e.onClosePressed || n.a
			}, i.a.createElement(o.b, null)))
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
				a = s.n(n);
			const i = r.a.div("Wrapper", a.a);
			t.a = i
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
				a = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/Flair/index.tsx"),
				c = s("./src/reddit/components/FlairPreview/index.m.less"),
				d = s.n(c);
			const l = i.a.span("Placeholder", d.a),
				u = i.a.div("SelectedFlair", d.a),
				m = i.a.wrapped(o.b, "FlairComponent", d.a);
			t.a = e => e.flair ? a.a.createElement(u, null, a.a.createElement(l, null, r.fbt._("{placeholder}", [r.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), a.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : a.a.createElement(u, null, r.fbt._("No flair selected", null, {
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
				return p
			}));
			var r = s("./node_modules/lodash/once.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				u = s("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = s.n(u);
			const h = d.a.wrapped(e => i.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				p = n()((e = h) => Object(o.a)({
					getComponent: () => Object(l.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("FlairEdit")]).then(s.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
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
				a = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				l = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				p = s("./src/reddit/components/Flair/index.tsx"),
				b = s("./src/reddit/controls/RadioInput/index.tsx"),
				f = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				v = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				g = s("./src/reddit/icons/svgs/Search/index.tsx"),
				C = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				E = s.n(C);
			class w extends a.a.Component {
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
					} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(n)), o = !!s && i.some(e => e.id === s);
					return a.a.createElement("div", {
						className: E.a.container
					}, a.a.createElement("div", {
						className: E.a.searchBoxWrapper
					}, a.a.createElement("input", {
						className: E.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: r.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: n
					}), a.a.createElement(g.a, {
						className: E.a.searchIcon
					})), a.a.createElement(b.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: s
					}, i.map((e, t) => {
						const r = Object(u.c)(e),
							n = s === e.id || !o && 0 === t;
						return a.a.createElement(f.a, {
							className: E.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: n ? 0 : -1,
							value: e.id
						}, a.a.createElement(p.b, {
							className: E.a.flairComponent,
							flair: r,
							forceSmallEmojis: !0
						}), e.textEditable && a.a.createElement(v.a, {
							className: E.a.pencil
						}))
					})))
				}
			}
			var _ = s("./src/reddit/components/FlairSearch/index.m.less"),
				x = s.n(_);
			const y = "FlairSearch-EmojiPicker-DropdownId",
				O = Object(d.a)(e => e && Object(u.c)(e)),
				I = Object(o.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: m.f
				}),
				S = Object(i.b)(I);
			class T extends a.a.Component {
				constructor() {
					super(...arguments), this.onFlairEdit = e => {
						const {
							templates: t
						} = this.props, s = t && e.templateId ? t[e.templateId] : void 0;
						let r = e;
						s && (r = Object(u.d)({
							flair: e,
							template: s,
							ignoreTextAllowance: !0
						})), this.props.onChange(r)
					}, this.onTemplateSelected = e => {
						const {
							templates: t
						} = this.props;
						if (t) {
							const s = t[e],
								r = Object(u.c)(s);
							this.props.onChange(r)
						}
					}
				}
				render() {
					const {
						props: e
					} = this, {
						isModerator: t,
						templates: s,
						templateIds: n,
						subredditId: i
					} = e, o = s && e.flair && e.flair.templateId && s[e.flair.templateId] || void 0, d = Object(h.a)(), l = e.flair || O(o);
					return a.a.createElement("div", {
						className: Object(c.a)(e.className, x.a.container)
					}, s && n && a.a.createElement(w, {
						flairTemplateType: e.flairTemplateType,
						onChange: this.onTemplateSelected,
						selectedTemplateId: o ? o.id : "",
						templateIds: n,
						templates: s
					}), l && o && (t || o.textEditable) ? a.a.createElement("div", {
						className: x.a.flairEditSection
					}, a.a.createElement("div", {
						className: x.a.editLabel
					}, r.fbt._("Edit flair", null, {
						hk: "1APWWu"
					})), e.areFlairRestrictionsEnabled && a.a.createElement("div", {
						className: x.a.restrictionHintText
					}, Object(u.k)(o)), a.a.createElement(d, {
						autofocus: !0,
						emojiPickerId: y,
						flair: l,
						flairTemplate: o,
						flairTemplateType: e.flairTemplateType,
						isFlairModOnly: o.modOnly,
						onChange: this.onFlairEdit,
						subredditId: i
					})) : null)
				}
			}
			t.a = S(T)
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/hls.js/dist/hls.js"),
				i = s.n(a),
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
						onLoadingData: a,
						url: o
					} = this.props;
					if (!o || !this.video) return;
					this.destroyHls();
					const c = new i.a({
						enableWorker: !1,
						fragLoadingMaxRetry: 2,
						levelLoadingMaxRetry: 4,
						manifestLoadingMaxRetry: 1,
						startFragPrefetch: !0,
						liveSyncDurationCount: 2,
						maxMaxBufferLength: 10
					});
					this.hls = c, r && r(c), this.subscribeErrorHandlers(c), c.on(i.a.Events.MANIFEST_LOADING, () => {
						a && a()
					}), c.on(i.a.Events.MANIFEST_PARSED, (r, n) => {
						e && !s && this.video && (this.video.currentTime = t, this.video.play().catch(this.onPlayError(c))), this.setState({
							...this.state,
							isInitialized: !0
						})
					}), c.on(i.a.Events.LEVEL_LOADED, (e, t) => {
						n && n(t.details)
					}), c.loadSource(o), c.attachMedia(this.video)
				}
				subscribeErrorHandlers(e) {
					e.on(i.a.Events.ERROR, (t, s) => {
						if (s.type === i.a.ErrorTypes.NETWORK_ERROR && s.response && 410 === s.response.code) this.onResourceRemoved(e);
						else if (s.fatal) switch (s.type) {
							case i.a.ErrorTypes.MEDIA_ERROR:
								return void this.handleFatalMediaError(e);
							case i.a.ErrorTypes.NETWORK_ERROR:
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
					t.details !== i.a.ErrorDetails.FRAG_LOAD_ERROR && t.details !== i.a.ErrorDetails.FRAG_LOAD_TIMEOUT ? this.onIrrecoverableError(e) : this.handleBadFragment(e, t.frag)
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
				return g
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "i", (function() {
				return T
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./node_modules/lodash/isNil.js"),
				c = s.n(o),
				d = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts");
			const u = Object(i.c)({
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
			var h = Object(a.b)(u, {})(m),
				p = s("./src/reddit/selectors/comments.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/subreddit.ts");
			const v = (e, t) => {
				const s = Object(b.a)(e, t),
					r = Object(f.I)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var g = Object(a.b)(() => Object(i.a)(v, p.j, (e, t) => ({
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
			const C = (e, t) => {
				const s = Object(b.a)(e, t),
					r = Object(f.I)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var E = Object(a.b)(() => Object(i.a)(C, e => e))(e => n.a.createElement(h, {
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
			var w = Object(a.b)(() => Object(i.c)({
					subreddit: f.T
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
				_ = s("./src/reddit/hooks/usePostContext.ts");
			var x = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = Object(_.a)(), a = Object(r.useMemo)(() => ({
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
				return n.a.createElement(h, {
					className: e.className,
					type: "post",
					data: a
				})
			};
			var y = e => {
				const {
					post: t,
					subredditOrProfile: s,
					isModerator: a
				} = Object(_.a)(), i = Object(r.useMemo)(() => ({
					author: t.author,
					isModerator: a,
					post: {
						id: t.id
					},
					subreddit: s ? {
						id: s.id,
						name: s.name,
						type: s.type
					} : {}
				}), [t, s, a]);
				return n.a.createElement(h, {
					className: e.className,
					type: "postAuthor",
					data: i
				})
			};
			var O = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = Object(_.a)(), a = Object(r.useMemo)(() => ({
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
				return n.a.createElement(h, {
					className: e.className,
					type: "postModTools",
					data: a
				})
			};
			var I = Object(a.b)(() => Object(i.c)({
				subreddit: f.T
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
			var S = Object(a.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(f.L)(e, {
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
			var T = Object(a.b)(() => Object(i.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.T)(e, {
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
				a = s("./src/reddit/constants/flair.ts"),
				i = s("./src/reddit/helpers/flair.ts"),
				o = s("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === o.f.Text || e.type === o.f.Image || e.type === o.f.Richtext);
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
				const o = Object(i.g)(t).length;
				return 0 === o ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : o > a.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(i.n)(t) && !Object(i.r)(r) ? {
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
			s.r(t), s.d(t, "RpanTitle", (function() {
				return se
			})), s.d(t, "LivestreamTitle", (function() {
				return re
			})), s.d(t, "RpanDescription", (function() {
				return ne
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/telemetry/index.ts"),
				c = s("./src/higherOrderComponents/withMux/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/localStorageAvailable/index.ts"),
				m = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				h = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				p = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				f = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				v = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				g = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				C = s("./src/reddit/constants/chat.ts"),
				E = s("./src/reddit/constants/postLayout.ts"),
				w = s("./src/reddit/helpers/localStorage/index.ts"),
				_ = s("./src/reddit/helpers/overlay/index.ts"),
				x = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				y = s("./src/reddit/helpers/trackers/rpan.ts"),
				O = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				I = s("./src/reddit/models/Vote/index.ts"),
				S = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				T = s("./src/reddit/selectors/platform.ts"),
				N = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				A = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				j = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/Flatlist/constants.ts"),
				L = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				D = s("./src/reddit/components/HlsVideo/index.tsx"),
				P = s("./src/reddit/components/OverflowMenu/index.tsx"),
				M = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				F = s("./src/reddit/components/PostLeftRail/index.tsx"),
				V = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				U = s("./src/reddit/components/TrackingHelper/index.tsx"),
				H = s("./src/reddit/controls/Dropdown/Row.tsx"),
				B = s("./src/reddit/controls/InternalLink/index.tsx"),
				W = s("./src/reddit/controls/Score/index.tsx"),
				G = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				Y = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				z = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				K = s.n(z),
				Z = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				q = s.n(Z);
			const {
				fbt: J
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Q = 20, X = l.dc, $ = l.dc, ee = Object(c.a)(D.a, {
				playerName: "RPAN DU Video Player"
			}), te = Object(a.b)(() => Object(i.c)({
				autoplay: k.b,
				isLoggedIn: k.J,
				isOverlayOpen: T.h,
				location: (e, {
					listingName: t
				}) => {
					const s = Object(N.m)(e, {
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
				}) => Object(N.m)(e, {
					listingName: t
				}),
				streamById: e => t => Object(N.l)(e, t),
				rpanDuThresholdVariant: S.i,
				inRpanDUPreloadExperiment: S.b,
				inRpanDuTargetingExperiment: S.c
			}), (e, t) => ({
				onHideRpanUnit: (s, r) => e(Object(p.D)(t.listingName, s, {
					showToast: r.showToast
				})),
				openOverlay: t => e(Object(_.a)(t)),
				subscribeConfig: () => e(f.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(f.a.subscribeStats(t)),
				subscribeStreams: () => e(f.a.subscribeStreams(t.listingName, {
					pageSize: 1
				}))
			})), se = () => n.a.createElement("h3", {
				className: q.a.title
			}, J._("Top broadcast", null, {
				hk: "HADCh"
			})), re = () => n.a.createElement("h3", {
				className: q.a.title
			}, J._("Top livestream", null, {
				hk: "4od1tZ"
			})), ne = () => n.a.createElement("p", {
				className: q.a.description
			}, J._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class ae extends r.Component {
				constructor(e) {
					super(e), this.observableElement = n.a.createRef(), this.videoRef = n.a.createRef(), this.videoSessionManager = null, this.timerId = "rpan-du-active-watch-timer-id", this.handleSuccessfulPlayback = () => {
						Object(w.N)()
					}, this.handleUnsuccessfulPlayback = () => {
						const e = Number(Object(w.D)());
						if (e) {
							if (Date.now() - e >= X) {
								Object(w.N)();
								const e = 30 * l.x,
									t = Date.now() - e + $;
								this.props.onHideRpanUnit(t, {
									showToast: !1
								})
							}
						} else Object(w.ub)(Date.now())
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
						}), r(Object(y.i)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: s
						} = this.props;
						t(s ? Object(y.j)(s, 1) : Object(y.j)()), this.props.inRpanDuTargetingExperiment && this.handleSuccessfulPlayback(), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(y.j)()), this.openOverlay()
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
						const a = !t.sessionDurationMs ? y.D : y.z,
							i = {
								chatState: C.a.None,
								playerType: y.a.DU
							},
							o = a(n, {
								...t,
								...i
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
					return t === O.a.IS_LIVE || t === O.a.DISCONNECTED
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
						Math.round(o.c.end(this.timerId)) / 1e3 >= Q ? this.handleSuccessfulPlayback() : this.handleUnsuccessfulPlayback()
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
						stream: n,
						inRpanDUPreloadExperiment: a
					} = this.props, {
						isOverlayOpen: i,
						stream: o
					} = e, {
						isReady: c
					} = this.state, {
						isInFocus: d,
						isIntersecting: l,
						isReady: m,
						isInLoadingIntersection: h
					} = t, {
						isVisible: p,
						isLoadable: b
					} = this, f = d && l && !i, v = !f && p, g = f && !p, C = d && h && !i, E = a ? C && !b : g;
					(a ? !C && b : v) ? (this.subscribeConfig(), this.subscribeStreams()) : E && (this.unsubscribeConfig(), this.unsubscribeStreams());
					const w = n && n.post.id,
						_ = w !== (o && o.post.id),
						x = !!w;
					_ && this.setState({
						isReady: !1
					});
					const y = _ && !x || x && g;
					if (_ && x && p || x && v ? this.subscribeStats() : y && this.unsubscribeStats(), r && s) {
						const e = this.getOrCreateVideoSessionManager(s),
							t = !m && c,
							r = x && (t && p || v && c),
							n = x && g;
						_ && e.endSession(), r ? (e.startSession({
							id: w
						}), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.startTimeTracker()) : n && (e.pauseSession(), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.endTimeTracker())
					}
				}
				componentWillUnmount() {
					this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeStats(), this.unsubscribeIntersectionObserver(), this.unsubscribeVisibilityChange(), this.destroyVideoSessionManager()
				}
				render() {
					const {
						layout: e
					} = this.props, t = e === E.g.Classic ? this.renderClassicContent() : e === E.g.Compact ? this.renderCompactContent() : this.renderLargeContent();
					return n.a.createElement("div", {
						className: Object(d.a)(q.a.container, {
							[K.a.largeAndMediumPostStyles]: e === E.g.Large || e === E.g.Medium,
							[K.a.classicPostStyles]: e === E.g.Classic,
							[K.a.compactPostStyles]: e === E.g.Compact,
							[q.a.large]: e === E.g.Large || e === E.g.Medium,
							[q.a.classic]: e === E.g.Classic,
							[q.a.compact]: e === E.g.Compact
						}, this.props.className)
					}, e !== E.g.Large && n.a.createElement(F.b, {
						className: q.a.leftRail,
						withoutComputedStyles: e === E.g.Compact
					}, n.a.createElement(ie, {
						isVertical: !0
					}), e === E.g.Compact && n.a.createElement(ie, {
						isVertical: !1
					})), n.a.createElement(M.a, {
						className: q.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return n.a.createElement("div", {
						className: q.a.titleAndDescriptionContainer
					}, n.a.createElement(B.a, {
						to: this.props.location
					}, n.a.createElement(re, null), e && n.a.createElement(ne, null)))
				}
				renderLargeContent() {
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: q.a.header
					}, this.renderTitleAndDescription(), n.a.createElement("div", {
						className: q.a.flatListContainer
					}, n.a.createElement(de, {
						onClick: this.onHideUnitClicked
					}))), n.a.createElement("div", {
						className: q.a.body,
						ref: this.observableElement
					}, n.a.createElement(B.a, {
						to: this.props.location,
						onClick: this.onStreamClicked,
						className: q.a.previewLink,
						tabIndex: 0
					}, n.a.createElement("div", {
						className: q.a.previewContainer
					}, this.renderThumbnail()), this.renderInfo())))
				}
				renderClassicContent() {
					return n.a.createElement("div", {
						className: q.a.body,
						ref: this.observableElement
					}, n.a.createElement(B.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, n.a.createElement("div", {
						className: q.a.thumbnailContainer
					}, this.renderThumbnail())), n.a.createElement("div", {
						className: q.a.main
					}, this.renderLiveStatus(), this.renderTitleAndDescription(!0), n.a.createElement("div", {
						className: q.a.flatListContainer
					}, n.a.createElement(oe, {
						onClick: this.onHeaderClicked
					}), n.a.createElement(j.a, {
						className: q.a.flatlistSeparator
					}), n.a.createElement("div", null, n.a.createElement(ce, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return n.a.createElement("div", {
						className: q.a.body,
						ref: this.observableElement
					}, n.a.createElement("div", {
						className: q.a.main
					}, n.a.createElement(oe, {
						onClick: this.onHeaderClicked
					}), this.renderLiveStatus(), this.renderTitleAndDescription(!0), n.a.createElement("div", {
						className: q.a.flatListContainer
					}, n.a.createElement(de, {
						onClick: this.onHideUnitClicked
					}))))
				}
				renderInfo() {
					if (this.props.stream && this.state.isReady) return n.a.createElement("div", {
						className: q.a.infoContainer
					}, this.renderExpandIcon(), this.renderLiveStatus(), this.renderWatcherCount())
				}
				renderExpandIcon() {
					return n.a.createElement("div", {
						className: q.a.bigExpando
					}, n.a.createElement(G.a, {
						className: q.a.bigExpandoIcon
					}))
				}
				renderLiveStatus() {
					return this.isLive ? n.a.createElement("span", {
						className: q.a.liveStatus
					}, n.a.createElement(g.g, null)) : null
				}
				renderWatcherCount() {
					var e;
					if (!this.isLive) return null;
					const t = Math.max(1, (null === (e = this.props.stream) || void 0 === e ? void 0 : e.continuous_watchers) || 0);
					return n.a.createElement("span", {
						className: q.a.watchingCount
					}, J._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [J._plural(t, "number")], {
						hk: "33zJ5F"
					}))
				}
				renderThumbnail() {
					return n.a.createElement("div", {
						className: Object(d.a)(q.a.thumbnail, {
							[q.a.loading]: !this.state.isReady
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
						a = t.post.title;
					return n.a.createElement(ee, {
						url: t.stream.hls_url,
						autoplay: e,
						controls: !1,
						muted: !0,
						muxVideoDuration: s,
						muxVideoId: r,
						muxVideoIsLive: this.isLive,
						muxVideoTitle: a,
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
					return this.videoSessionManager || (this.videoSessionManager = new h.a(e, {
						onHeartbeat: this.handleHeartbeat
					})), this.videoSessionManager
				}
				destroyVideoSessionManager() {
					var e;
					null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
			}
			const ie = e => n.a.createElement(A.a, {
					className: Object(d.a)({
						[q.a.verticalVotes]: e.isVertical,
						[q.a.horizontalVotes]: !e.isVertical
					})
				}, n.a.createElement(W.a, {
					className: q.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: I.a.notVoted
				})),
				oe = ({
					onClick: e
				}) => n.a.createElement("button", {
					className: q.a.expandoButton,
					onClick: e
				}, n.a.createElement(G.a, {
					className: q.a.expandoIcon
				})),
				ce = ({
					onClick: e,
					isLoggedIn: t
				}) => n.a.createElement(L.a, {
					displayText: J._("Show me less of this", null, {
						hk: "4t8AKC"
					}),
					flatlistItem: R.a.Hide,
					isLoggedIn: !!t,
					isUserOp: !1,
					onClick: e,
					noBreakpoints: !0
				}, n.a.createElement(V.b, null)),
				de = ({
					onClick: e
				}) => n.a.createElement(P.b, {
					className: q.a.overflowMenu,
					dropdownClassName: q.a.overflowDropdown,
					dropdownId: "rpan-du-overflow"
				}, n.a.createElement(H.b, {
					className: q.a.overflowItem,
					displayText: J._("Show me less of this", null, {
						hk: "2c4uFK"
					}),
					iconWrapperClassName: q.a.overflowItemIconWrapper,
					textClassName: q.a.overflowItemText,
					onClick: e
				}, n.a.createElement(Y.a, {
					className: q.a.hideIcon
				})));
			t.default = te(Object(U.c)(ae))
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return y
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "f", (function() {
				return A
			})), s.d(t, "a", (function() {
				return j
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/components/OverflowMenu/index.tsx"),
				d = s("./src/reddit/controls/Dropdown/Row.tsx"),
				l = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				u = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				m = s("./src/reddit/icons/fonts/Share/index.tsx"),
				h = s("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				p = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				b = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				f = s("./src/reddit/icons/svgs/Report/index.tsx"),
				v = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				g = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				C = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				E = s("./src/reddit/icons/svgs/VideoShare/index.tsx"),
				w = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				_ = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				x = s.n(_);
			const y = ({
					onClick: e
				}) => a.a.createElement("button", {
					className: x.a.shareButton,
					onClick: e,
					"aria-label": r.fbt._("share video", null, {
						hk: "2e71ai"
					}),
					value: "share"
				}, a.a.createElement(m.a, {
					className: x.a.menuIcon
				})),
				O = ({
					isMuted: e,
					onToggle: t
				}) => a.a.createElement("button", {
					className: x.a.muteButton,
					onClick: t,
					"aria-label": r.fbt._("mute video", null, {
						hk: "Enspe"
					}),
					value: "mute"
				}, e ? a.a.createElement(g.a, {
					className: x.a.volumeIcon
				}) : a.a.createElement(w.a, {
					className: x.a.volumeIcon
				})),
				I = i.a.wrapped(u.a, "menuIcon", x.a),
				S = "rpan-overlay-menu",
				T = ({
					onClick: e,
					onHideClick: t,
					onReportClick: s
				}) => a.a.createElement(c.b, {
					className: x.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: S,
					icon: a.a.createElement(I, null),
					onClick: e
				}, a.a.createElement(d.b, {
					className: x.a.overflowItem,
					displayText: r.fbt._("View rules", null, {
						hk: "4lTvzy"
					}),
					iconWrapperClassName: x.a.overflowItemIconWrapper,
					key: `${S}-rules`,
					onClick: () => Object(o.d)(l.S, o.c.BLANK)
				}, a.a.createElement(v.a, {
					className: x.a.overflowItemIcon
				})), a.a.createElement(d.b, {
					className: x.a.overflowItem,
					displayText: r.fbt._("Visit RPAN community", null, {
						hk: "3KZliI"
					}),
					iconWrapperClassName: x.a.overflowItemIconWrapper,
					key: `${S}-community`,
					onClick: () => Object(o.d)(l.Q, o.c.BLANK)
				}, a.a.createElement(b.c, {
					className: x.a.overflowItemIcon
				})), a.a.createElement(d.b, {
					className: x.a.overflowItem,
					displayText: r.fbt._("Report", null, {
						hk: "4oVcnd"
					}),
					iconWrapperClassName: x.a.overflowItemIconWrapper,
					key: `${S}-report`,
					onClick: s
				}, a.a.createElement(f.a, {
					className: x.a.overflowItemIcon
				})), a.a.createElement(d.b, {
					className: x.a.overflowItem,
					displayText: r.fbt._("Hide", null, {
						hk: "1qXTIB"
					}),
					iconWrapperClassName: x.a.overflowItemIconWrapper,
					key: `${S}-hide`,
					onClick: t
				}, a.a.createElement(p.a, {
					className: x.a.overflowItemIcon
				}))),
				N = ({
					onClick: e
				}) => a.a.createElement("button", {
					className: x.a.promptButton,
					onClick: e
				}, a.a.createElement(C.a, null), a.a.createElement("span", null, r.fbt._("Replay Video", null, {
					hk: "1iD2Wj"
				}))),
				k = ({
					onClick: e
				}) => a.a.createElement("button", {
					className: x.a.promptButton,
					onClick: e
				}, a.a.createElement(E.a, null), a.a.createElement("span", null, r.fbt._("Share Video", null, {
					hk: "FYgQy"
				}))),
				A = ({
					onClick: e
				}) => a.a.createElement("button", {
					className: x.a.promptButton,
					onClick: e
				}, a.a.createElement(h.a, {
					className: x.a.crosspostIcon
				}), a.a.createElement("span", null, r.fbt._("Crosspost", null, {
					hk: "gORNr"
				}))),
				j = ({
					onClick: e
				}) => a.a.createElement("button", {
					className: `${x.a.promptButton} ${x.a.awardButton}`,
					onClick: e
				}, a.a.createElement("span", null, r.fbt._("Award Now", null, {
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
				return G
			})), s.d(t, "h", (function() {
				return Y
			})), s.d(t, "g", (function() {
				return z
			})), s.d(t, "p", (function() {
				return K
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
				return ae
			})), s.d(t, "q", (function() {
				return ie
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
				return fe
			})), s.d(t, "m", (function() {
				return ve
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/opener/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				u = s("./src/reddit/actions/publicAccessNetwork/votes.ts"),
				m = s("./src/reddit/actions/subscription/index.ts"),
				h = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				p = s("./src/reddit/components/OverflowMenu/index.tsx"),
				b = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				C = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				E = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				w = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				x = s("./src/reddit/icons/fonts/Share/index.tsx"),
				y = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				O = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				I = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				S = s("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				T = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				N = s("./src/reddit/icons/svgs/Link/index.tsx"),
				k = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				A = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				j = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				R = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				L = s("./src/reddit/icons/svgs/Report/index.tsx"),
				D = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				P = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				M = s("./src/reddit/models/Vote/index.ts"),
				F = s("./src/reddit/selectors/subreddit.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				H = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				B = s.n(H);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), G = ({
				children: e
			}) => n.a.createElement("div", {
				className: B.a.broadcastStatus
			}, e), Y = ({
				onClick: e
			}) => n.a.createElement("button", {
				onClick: e
			}, n.a.createElement(z, null)), z = () => W._("{=Live}", [W._param("=Live", n.a.createElement("span", {
				className: B.a.live
			}, W._("Live", null, {
				hk: "8x90I"
			})))], {
				hk: "3ZBbO0"
			}), K = () => W._("Recorded live", null, {
				hk: "2seH5c"
			}), Z = ({
				onSubscribe: e,
				isSubscribed: t
			}) => {
				const [s, a] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => {
					const e = setTimeout(() => {
						a(!1)
					}, 3e3);
					return () => clearTimeout(e)
				}, [s]), t ? s ? n.a.createElement(O.a, {
					className: B.a.checkmarkIcon
				}) : null : n.a.createElement("button", {
					onClick: () => {
						a(!0), e()
					},
					className: B.a.joinButton
				}, n.a.createElement(A.a, {
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
				let a = "";
				a = "home" === t ? "All" : "r/popular" === t ? "r/popular" : s || "All";
				const i = r.filter(e => e.prefixedName !== a),
					o = 30 + 35 * i.length;
				return n.a.createElement(p.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: n.a.createElement("span", {
						className: B.a.subreddit
					}, s || "RPAN"),
					style: {
						maxHeight: `${o}px`,
						overflowY: "auto",
						bottom: "0px"
					},
					isFixed: !0
				}, n.a.createElement("div", {
					className: B.a.dropdownLabel
				}, W._("Pick a Community", null, {
					hk: "4AfDwd"
				})), i.map(t => n.a.createElement(v.b, {
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
				onClickShare: s
			}) => n.a.createElement(p.b, {
				className: B.a.menuButton,
				defaultButtonOutline: !0,
				dropdownId: ee,
				onClick: s,
				icon: n.a.createElement(x.a, null)
			}, n.a.createElement(v.b, {
				className: B.a.menuOverflowItem,
				displayText: W._("Copy Link", null, {
					hk: "2oo038"
				}),
				iconWrapperClassName: B.a.overflowItemShareIconWrapper,
				key: `${ne}-share`,
				onClick: t
			}, n.a.createElement(N.a, {
				className: B.a.overflowItemIcon
			})), n.a.createElement(v.b, {
				className: B.a.menuOverflowItem,
				displayText: W._("Crosspost", null, {
					hk: "QSd6Z"
				}),
				iconWrapperClassName: B.a.overflowItemShareIconWrapper,
				key: `${ne}-crosspost`,
				onClick: e
			}, n.a.createElement(S.a, {
				className: B.a.overflowItemIcon
			}))), se = o.a.wrapped(_.a, "menuIcon", B.a), re = e => {
				let t = 186;
				if (e) {
					t += 111 + 40
				}
				return t
			}, ne = "rpan-overlay-menu", ae = ({
				onClick: e,
				onHideClick: t,
				onReportClick: s,
				onToggleLockClick: r,
				isCommentsLocked: a,
				hasModeratorPermissions: i,
				onEndBroadcastClick: o,
				onRpanStudioClick: d,
				subreddit: u
			}) => n.a.createElement(p.b, {
				className: B.a.menuButton,
				defaultButtonOutline: !0,
				dropdownId: ne,
				icon: n.a.createElement(se, null),
				onClick: e,
				style: {
					maxHeight: `${re(i)}px`,
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
				onClick: () => Object(c.d)(l.S, c.c.BLANK)
			}, n.a.createElement(D.a, {
				className: B.a.overflowItemIcon
			})), n.a.createElement(v.b, {
				className: B.a.overflowItem,
				displayText: W._("Stream from desktop", null, {
					hk: "4dOdik"
				}),
				iconWrapperClassName: B.a.overflowItemIconWrapper,
				key: `${ne}-rpanstudio`,
				onClick: d
			}, n.a.createElement(j.b, {
				className: B.a.overflowItemIcon
			})), n.a.createElement(v.b, {
				className: B.a.overflowItem,
				displayText: W._("Visit community", null, {
					hk: "2KViLk"
				}),
				iconWrapperClassName: B.a.overflowItemIconWrapper,
				key: `${ne}-community`,
				onClick: () => {
					Object(c.d)(Object(C.a)(u), c.c.BLANK)
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
				}) : n.a.createElement(I.a, {
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
			}, n.a.createElement(L.a, {
				className: B.a.overflowItemIcon
			})), n.a.createElement(v.b, {
				className: B.a.overflowItem,
				displayText: W._("Hide", null, {
					hk: "15vs9C"
				}),
				iconWrapperClassName: B.a.overflowItemIconWrapper,
				key: `${ne}-hide`,
				onClick: t
			}, n.a.createElement(T.a, {
				className: B.a.overflowItemIcon
			})), i && n.a.createElement(n.a.Fragment, null, n.a.createElement(v.b, {
				className: B.a.headerItem,
				displayText: W._("Mod Actions", null, {
					hk: "19zCiw"
				}),
				key: `${ne}-modaction`,
				onClick: () => {}
			}), n.a.createElement(v.b, {
				className: B.a.overflowItem,
				displayText: a ? W._("Unlock comments", null, {
					hk: "Btg6R"
				}) : W._("Lock comments", null, {
					hk: "3Ew6q9"
				}),
				iconWrapperClassName: B.a.overflowItemIconWrapper,
				key: `${ne}-lock`,
				onClick: r
			}, a ? n.a.createElement(P.a, {
				className: B.a.overflowItemIcon
			}) : n.a.createElement(k.a, {
				className: B.a.overflowItemIcon
			})), n.a.createElement(v.b, {
				className: B.a.endBroadcastItem,
				displayText: W._("Remove broadcast", null, {
					hk: "3GaDuI"
				}),
				iconWrapperClassName: B.a.overflowItemIconWrapper,
				key: `${ne}-end`,
				onClick: o
			}, n.a.createElement(R.a, {
				className: B.a.endBroadcastIcon
			})))), ie = Object(a.b)(null, e => ({
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
						className: B.a.votePanel
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
				className: Object(i.a)(B.a.voteButton, B.a.upVoteButton, {
					[B.a.voted]: t
				}),
				onClick: e,
				value: "upvote",
				"aria-label": W._("Upvote", null, {
					hk: "Ufd6r"
				})
			}, n.a.createElement(y.b, {
				className: B.a.voteIcon
			})), ce = ({
				onClick: e,
				voted: t
			}) => n.a.createElement("button", {
				className: Object(i.a)(B.a.voteButton, B.a.downVoteButton, {
					[B.a.voted]: t
				}),
				onClick: e,
				value: "downvote",
				"aria-label": W._("Downvote", null, {
					hk: "ZDRA3"
				})
			}, n.a.createElement(w.b, {
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
			})), he = () => n.a.createElement(le, null, W._("Broadcast paused", null, {
				hk: "jxvku"
			})), pe = ({
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
				} = e, a = ge(r), i = Ce(r, !a), o = a ? W._("Unfollow u/{name}", [W._param("name", r)], {
					hk: "2n0wqa"
				}) : W._("Follow u/{name}", [W._param("name", r)], {
					hk: "20X8Bw"
				});
				return n.a.createElement("button", {
					className: B.a.subscribeToProfileButton,
					onClick: () => {
						s(!a), i()
					},
					title: o
				}, n.a.createElement(Ee, {
					profile: e
				}), n.a.createElement(we, {
					isSubscribed: a
				}))
			}, ge = e => Object(a.e)(t => Object(F.gb)(t, {
				identifier: {
					name: e,
					type: f.a.PROFILE
				}
			})), Ce = (e, t) => {
				const s = Object(a.d)();
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
				} = e, r = Object(a.e)(e => Object(V.mb)(e, {
					userName: s
				})), o = ye(r), c = o && Object(E.a)(r.accountIcon);
				return n.a.createElement("div", {
					className: Object(i.a)(B.a.subscribeToProfileAvatar, {
						[B.a.snoovatarHeadshot]: c
					})
				}, r ? o ? c ? n.a.createElement(b.a, {
					headshot: r.accountIcon
				}) : n.a.createElement("img", {
					src: r.accountIcon
				}) : n.a.createElement(h.a, {
					userId: t
				}) : null)
			}, we = ({
				isSubscribed: e
			}) => n.a.createElement("div", {
				className: Object(i.a)(B.a.subscribeToProfileStatus, {
					[B.a.isSubscribed]: e
				})
			}, e ? n.a.createElement(_e, null) : n.a.createElement(xe, null)), _e = () => n.a.createElement("svg", {
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M17.7072 5.69337L16.3083 4.29337C16.1203 4.10537 15.8662 4.00037 15.6012 4.00037C15.3352 4.00037 15.0812 4.10537 14.8942 4.29337L7.90025 11.2864L5.10725 8.49337C4.71725 8.10237 4.08425 8.10237 3.69325 8.49337L2.29325 9.89337C1.90225 10.2844 1.90225 10.9174 2.29325 11.3074L7.19325 16.2074C7.38925 16.4024 7.64425 16.5004 7.90025 16.5004C8.15625 16.5004 8.41225 16.4024 8.60725 16.2074L17.7072 7.10737C18.0982 6.71637 18.0982 6.08437 17.7072 5.69337"
			})), xe = () => n.a.createElement("svg", {
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M12.8,6.4 L9.6,6.4 L9.6,3.2 C9.6,2.7576 9.2424,2.4 8.8,2.4 L7.2,2.4 C6.7576,2.4 6.4,2.7576 6.4,3.2 L6.4,6.4 L3.2,6.4 C2.7584,6.4 2.4,6.7576 2.4,7.2 L2.4,8.8 C2.4,9.2424 2.7584,9.6 3.2,9.6 L6.4,9.6 L6.4,12.8 C6.4,13.2424 6.7576,13.6 7.2,13.6 L8.8,13.6 C9.2424,13.6 9.6,13.2424 9.6,12.8 L9.6,9.6 L12.8,9.6 C13.2424,9.6 13.6,9.2424 13.6,8.8 L13.6,7.2 C13.6,6.7576 13.2424,6.4 12.8,6.4"
			})), ye = e => {
				const t = Object(a.e)(V.i),
					s = Object(a.e)(V.B),
					r = Object(a.e)(V.cb);
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				o = s.n(i);
			const c = e => n.a.createElement("span", {
				className: Object(a.a)(o.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => n.a.createElement(c, {
				className: Object(a.a)(o.a.metaSeparator, e),
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/keycodes.ts"),
				o = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
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
						t.disabled || e.key !== i.b.Enter && e.key !== i.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
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
						className: Object(a.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? n.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : n.a.createElement(o.a, {
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
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/constants/keycodes.ts");
			class i extends n.a.Component {
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
						const n = e.key === a.b.ArrowUp,
							i = e.key === a.b.ArrowDown;
						if (n || i) {
							const t = this.getValues();
							if (!t.length) return;
							const a = r ? t.indexOf(r) : 0,
								i = t[((n ? a - 1 : a + 1) + t.length) % t.length];
							s(i), this.setState({
								value: i
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
						const a = 0 === r,
							i = s.props.value === t,
							o = null !== t ? i ? 0 : -1 : a ? 0 : -1;
						return n.a.cloneElement(s, {
							disabled: e.disabled,
							onClick: e => this.handleClick(s.props.value),
							selected: i,
							tabIndex: o
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/random.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/components/CountAnimation/index.tsx"),
				u = s("./src/reddit/components/CountAnimation/config.ts"),
				m = s("./src/reddit/components/CountAnimation/helpers.ts"),
				h = s("./src/reddit/constants/colors.ts"),
				p = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				f = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/controls/Score/index.m.less"),
				C = s.n(g);
			const E = e => e.voteState === v.a.downvoted ? Object(f.a)(e).voteText.downvote : e.voteState === v.a.upvoted ? Object(f.a)(e).voteText.upvote : Object(b.a)(Object(p.a)(e)),
				{
					upvoteCount: {
						inititalDelayRange: {
							lower: w,
							upper: _
						},
						subsequentRecurringDelayRange: {
							lower: x,
							upper: y
						},
						incrementRangeRelativeToTotalDiscount: {
							lower: O,
							upper: I
						}
					}
				} = u.b,
				S = () => n()(w, _),
				T = () => n()(x, y),
				N = Object(c.a)(e => {
					const t = {
							color: e.light ? h.b.lightboxHeaderText : E(e)
						},
						{
							totalDiscount: s,
							score: r,
							shouldDisjointAnimation: c,
							shouldShowPageTransPersistence: u,
							postId: p = ""
						} = e,
						b = e.isScoreHidden ? "Vote" : Object(d.b)(r),
						f = Object(a.useCallback)(() => n()(Math.ceil((s || 0) * O), Math.ceil((s || 0) * I)), [s]),
						v = Object(a.useRef)(Object(m.k)(p, m.a.Vote)),
						g = Object(a.useRef)(u && void 0 !== s && Object(m.e)(v.current));
					return i.a.createElement("div", {
						className: Object(o.a)(C.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, e.isScoreHidden || void 0 === s ? b : i.a.createElement(l.a, {
						initialDisplayCount: g.current || r - s,
						countToUpperBound: r,
						initialDelay: S,
						subsequentRecurringDelay: T,
						incrementDelta: f,
						shouldDisjointAnimation: c,
						id: v.current
					}))
				});
			t.a = N
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
					} of e) t.push(Object(r.e)(s));
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
				return i
			}));
			var r = s("./src/lib/constants/index.ts");
			const n = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.E.NO_STRIPE_SUBSCRIPTION:
							case r.E.USER_DOESNT_EXIST:
							case r.E.USER_REQUIRED_ERROR:
							case r.E.VALIDATION_ERROR:
								return e;
							case r.E.NO_USER:
							case r.E.NO_TEXT:
							case r.E.NO_URL:
								return r.E.VALIDATION_ERROR;
							case r.E.CREDIT_CARD_FAILURE:
							case r.E.CREDIT_CARD_FAILURE_GENERIC:
								return r.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.E.VALIDATION_ERROR
				},
				a = e => {
					const t = e.body;
					return {
						type: n(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: a(e)
					} : e
				};
			t.a = a
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
				return h
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "i", (function() {
				return v
			}));
			var r = s("./src/reddit/models/Gold/Award.ts"),
				n = s("./src/reddit/selectors/telemetry.ts"),
				a = s("./src/reddit/helpers/correlationIdTracker.ts"),
				i = s("./src/reddit/helpers/trackers/gild.ts");
			const o = e => ({
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
					type: Object(i.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...o(e),
					source: "awards",
					action: "click",
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...o(t),
					source: "awards",
					action: "click",
					correlationId: Object(a.c)(a.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, s) => r => ({
					...o(r),
					source: "create_award",
					action: e,
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: t,
					goldPurchase: s
				}),
				m = (e, t, s, r) => n => ({
					...o(n),
					source: "create_award",
					action: "upload",
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
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
				h = (e, t, s) => r => ({
					...o(r),
					source: "create_award",
					action: "click",
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
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
				p = (e, t, s) => r => ({
					...o(r),
					source: "create_award",
					action: e,
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: t,
					goldPurchase: s ? c(s) : null
				}),
				b = (e, t, s) => r => ({
					...o(r),
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
				return h
			})), s.d(t, "clickAddAward", (function() {
				return p
			})), s.d(t, "clickHideAward", (function() {
				return b
			})), s.d(t, "clickConfirmHideAward", (function() {
				return f
			})), s.d(t, "clickCancelHideAward", (function() {
				return v
			})), s.d(t, "clickAwardReportFlow", (function() {
				return C
			})), s.d(t, "clickCancelAwardReportFlow", (function() {
				return E
			})), s.d(t, "clickFlagAwardUsage", (function() {
				return w
			})), s.d(t, "clickCancelFlagAwardUsage", (function() {
				return _
			})), s.d(t, "clickConfirmFlagAwardUsage", (function() {
				return x
			})), s.d(t, "clickReportAward", (function() {
				return y
			})), s.d(t, "clickCancelReportAward", (function() {
				return O
			})), s.d(t, "clickConfirmReportAward", (function() {
				return I
			})), s.d(t, "viewGildModalEvent", (function() {
				return S
			})), s.d(t, "clickSelectAwardEvent", (function() {
				return T
			})), s.d(t, "triggerAnonymousEvent", (function() {
				return N
			})), s.d(t, "clickMessageInputEvent", (function() {
				return k
			})), s.d(t, "typeMessageInputEvent", (function() {
				return A
			})), s.d(t, "clickLearnMoreLinkEvent", (function() {
				return j
			})), s.d(t, "clickQuestionMarkEvent", (function() {
				return R
			})), s.d(t, "clickConfirmAwardEvent", (function() {
				return L
			})), s.d(t, "clickGetPremiumEvent", (function() {
				return D
			})), s.d(t, "clickAddCoinsButtonEvent", (function() {
				return P
			})), s.d(t, "clickNextButtonEvent", (function() {
				return M
			})), s.d(t, "clickCloseGildModalEvent", (function() {
				return F
			})), s.d(t, "viewKarmaSuccessEvent", (function() {
				return V
			})), s.d(t, "clickFilterEvent", (function() {
				return U
			})), s.d(t, "clickNextFiltersEvent", (function() {
				return H
			})), s.d(t, "clickPreviousFiltersEvent", (function() {
				return B
			}));
			var r = s("./src/reddit/models/Gold/Award.ts"),
				n = s("./src/reddit/selectors/telemetry.ts"),
				a = s("./src/telemetry/models/GoldPurchase.ts"),
				i = s("./src/reddit/helpers/correlationIdTracker.ts"),
				o = s("./src/reddit/helpers/isComment.ts"),
				c = s("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === r.f.Global && e.awardSubType === r.d.Appreciation ? a.GoldPurchaseType.GidAppreciation : e.awardType === r.f.Global && e.awardSubType === r.d.Premium ? a.GoldPurchaseType.GidPremium : e.awardSubType === r.d.Group ? a.GoldPurchaseType.GidGroup : e.awardType === r.f.Community ? a.GoldPurchaseType.GidCommunity : e.awardType === r.f.Moderator ? a.GoldPurchaseType.GidMod : e.awardType === r.f.Global && e.awardSubType === r.d.Global ? a.GoldPurchaseType.GidGlobal : a.GoldPurchaseType.GidUnknown,
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
					correlationId: Object(c.b)(e) || Object(i.d)(i.a.GildingFlow, !1),
					post: t ? n.post(e, t) : void 0,
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(o.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				h = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				p = e => t => ({
					...u(t, e),
					source: Object(o.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				b = (e, t) => s => ({
					...u(s, t),
					source: Object(o.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				f = (e, t) => s => ({
					...u(s, t),
					source: Object(o.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				v = (e, t) => s => ({
					...u(s, t),
					source: Object(o.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				g = e => (t, s) => r => ({
					...u(r, s),
					source: Object(o.a)(s) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				C = g("award_hovercard_report"),
				E = g("cancel_award_hovercard_report"),
				w = g("flag_award"),
				_ = g("cancel_flag_award"),
				x = g("confirm_flag_award"),
				y = g("report_community_award"),
				O = g("cancel_report_community_award"),
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
				T = (e, t, s) => r => ({
					...u(r, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, s)
				}),
				N = (e, t) => s => ({
					...u(s, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				k = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				j = e => t => ({
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
				L = (e, t) => s => ({
					...u(s, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(o.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				D = (e, t) => s => ({
					...u(s, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(o.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				P = e => t => ({
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
				F = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				V = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: s,
					numberCoins: r,
					thingId: n
				}) => a => ({
					...u(a, n),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(o.a)(n) ? "comment" : "post",
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
			s.d(t, "h", (function() {
				return b
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "j", (function() {
				return y
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/models/Gold/ProductOffer.ts"),
				a = s("./src/reddit/selectors/gold/giveAwards.ts"),
				i = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = s("./src/reddit/selectors/telemetry.ts"),
				d = s("./src/telemetry/models/GoldPurchase.ts"),
				l = s("./src/telemetry/models/Payment.ts"),
				u = s("./src/reddit/helpers/trackers/gild.ts"),
				m = s("./src/reddit/helpers/correlationIdTracker.ts"),
				h = s("./src/reddit/helpers/isComment.ts"),
				p = s("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: s,
						packageId: l
					} = t, b = !!s, f = a.b(e), v = f ? Object(u.getAwardTypeFromAward)(f) : null, g = b ? v : o.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, C = s ? Object(h.a)(s) ? "comment" : "post" : void 0, E = l || o.s(e), w = [...Object(i.d)(e), ...Object(i.f)(e)].filter(e => e.mobileId === E)[0], _ = t.offerContext || (f && 0 === f.coinPrice ? n.a.StorefrontFreeAward : Object(n.c)(w, b)), x = w ? Math.round(1e4 * (w.baselinePennies - w.pennies) / w.baselinePennies) / 100 : 0, y = w ? Math.round(1e4 * (w.coins - w.baselineCoins) / w.coins) / 100 : 0, O = w ? w.baselinePennies !== w.pennies ? `${x}_percent_price` : w.baselineCoins !== w.coins ? `${y}_percent_bonus` : void 0 : void 0, I = g === d.GoldPurchaseType.Premium ? r.qb : w ? w.pennies : void 0;
					return {
						...c.defaults(e),
						comment: s ? c.comment(e, s) : null,
						correlationId: o.q(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: s ? c.post(e, s) : null,
						screen: c.screen(e),
						subreddit: s ? c.subreddit(e) : null,
						goldPurchase: {
							...f ? Object(p.a)(f) : null,
							type: g,
							gildedContent: b,
							contentType: C,
							numberCoins: w ? w.coins : void 0,
							offerContext: _,
							offerType: O
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
					noun: "continue_paypal"
				}),
				C = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				E = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				w = (e, t) => s => ({
					...b(s, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				_ = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				x = (e, t, s) => r => {
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
							source: e ? d.GiveGold : o.o(r) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				y = e => t => {
					const s = b(t, {
						thingId: e
					});
					return {
						...s,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...s.payment,
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
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
				return h
			}));
			var r = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/telemetry/index.ts"),
				a = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = s("./src/reddit/selectors/platform.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: o.profile(e),
					screen: o.screen(e),
					subreddit: o.subreddit(e)
				}),
				d = (e, t, s) => r => ({
					source: Object(i.h)(r) || s ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(r),
					post: o.post(r, e)
				}),
				l = (e, t, s, r) => n => {
					const i = s ? o.comment(n, s) : null,
						{
							sortToUse: c
						} = Object(a.a)(n, e);
					return {
						...d(e, t, r)(n),
						comment: i,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => s => {
					const r = o.currentPost(s);
					return r ? d(r.id, e, t)(s) : {
						source: Object(i.h)(s) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(s)
					}
				},
				m = (e, t) => s => Object(n.a)({
					...d(e, t)(s),
					...o.defaults(s)
				}),
				h = e => t => ({
					source: "id_card",
					action: r.c.CLICK,
					noun: e,
					...c(t),
					post: o.currentPost(t),
					userSubreddit: o.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return a
			})), s.d(t, "i", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "f", (function() {
				return p
			}));
			var r = s("./src/reddit/selectors/telemetry.ts");
			const n = e => ({
					screen: Object(r.screen)(e),
					profile: Object(r.profile)(e),
					subreddit: Object(r.subreddit)(e),
					userSubreddit: Object(r.userSubreddit)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...n(t)
				}),
				i = (e, t) => s => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					...n(s)
				}),
				o = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...n(s)
				}),
				c = (e, t) => s => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...n(s)
				}),
				d = (e, t) => s => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...n(s)
				}),
				l = (e, t) => s => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...n(s)
				}),
				u = (e, t) => s => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(r.comment)(s, t),
					post: Object(r.post)(s, t),
					...n(s)
				}),
				m = (e, t) => s => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					...n(s)
				}),
				h = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					subreddit: Object(r.subredditByPostOrCommentId)(s, t)
				}),
				p = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(r.comment)(s, t),
					post: Object(r.post)(s, t),
					subreddit: Object(r.subredditByPostOrCommentId)(s, t)
				})
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js");

			function n(e) {
				const t = Object(r.useRef)();
				return Object(r.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/icons/fonts/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => n.a.createElement("i", {
				className: Object(a.a)(Object(i.b)("admin", e.isFilled), c.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
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
				n = s.n(r),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				o = s.n(i),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = c.a.wrapped(e => {
				const t = Object(d.a)();
				return n.a.createElement("i", {
					className: `${Object(a.b)(t?"expand":"expandoArrowExpand",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "ExpandIcon", o.a);
			t.a = l
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				o = s.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => n.a.createElement("svg", c({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(a.a)(o.a.checkbox, e)
			}, t), n.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), n.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
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
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
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
		"./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			const a = e => n.a.createElement("svg", {
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
				i = e => n.a.createElement("svg", {
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
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				o = s.n(i);

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
				className: Object(a.a)(o.a.icon, e.className),
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

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({}, e, {
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
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
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
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				o = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(o.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
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
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				o = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(o.a.icon, e.className),
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
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
				d: "M12,10.86a1,1,0,0,0,1,1.73,3,3,0,0,0,0-5.17,1,1,0,0,0-1,1.73,1,1,0,0,1,0,1.72Z",
				fill: "#FFFFFF"
			}))
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
				a = s.n(n);
			t.a = r.a.div("inlineRow", a.a)
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, s) {
			"use strict";
			var r, n;
			s.d(t, "b", (function() {
					return r
				})), s.d(t, "a", (function() {
					return n
				})), s.d(t, "c", (function() {
					return a
				})),
				function(e) {
					e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups"
				}(r || (r = {})),
				function(e) {
					e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
				}(n || (n = {}));
			const a = (e, t) => {
				const s = e && e.dealInfo && e.dealInfo.type,
					r = "low_coin_upsell" === s,
					a = "new_purchaser" === s,
					i = "repeat_purchaser" === s;
				return t ? n.GildFlow : r ? n.LowCoinBalance : a ? n.NewUserTargetedOffer : i ? n.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "r", (function() {
				return i
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
				return v
			})), s.d(t, "k", (function() {
				return g
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "i", (function() {
				return w
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "m", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "p", (function() {
				return I
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/lib/assertNever.ts"),
				n = s("./src/reddit/models/GqlTopLevelField.ts"),
				a = s("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
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
				u = e => e.__typename === a.c.AvailableRedditor,
				m = e => e.__typename === n.a.Subreddit;
			var h, p, b, f;
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
			}(f || (f = {}));
			const v = e => p[f[e]],
				g = e => f[p[e]],
				C = e => b[p[e]],
				E = e => p[b[e]],
				w = e => f[b[e]];
			var _;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(_ || (_ = {}));
			const x = e => {
					switch (e) {
						case _.Hourly:
						case _.Daily:
						case _.Weekly:
						case _.Monthly:
							return !0
					}
					return !1
				},
				y = "custom",
				O = e => {
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
		"./src/reddit/selectors/gild.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			const r = e => e.gild.gildModalThingId,
				n = e => e.gild.correlationId || void 0,
				a = e => e.gild.isAnonymous,
				i = e => e.gild.isIframed,
				o = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			}));
			var r = s("./src/reddit/models/Gold/Award.ts"),
				n = s("./src/reddit/selectors/commentSelector.ts"),
				a = s("./src/reddit/selectors/gold/giveAwards.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/selectors/userPrefs.ts");
			const d = [32, 48, 64, 128],
				l = (e, t, s) => {
					const r = t ? e[`staticIcon${s}`] : e[`icon${s}`];
					return (null == r ? void 0 : r.url) ? r.url : t ? e.staticIcon.url : e.icon.url
				},
				u = ({
					award: e,
					size: t,
					prefersReducedMotion: s,
					postOrComment: n
				}) => e.awardSubType === r.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: s,
					postOrComment: r
				}) => {
					let n = e;
					if ((null == r ? void 0 : r.awardCountsById) && r.awardCountsById[e.id] && e.tiers) {
						const t = r.awardCountsById[e.id];
						n = e.tiers.reduce((e, s) => t >= s.awardingsRequired ? s : e)
					}
					return l(n, s, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: s,
					postOrComment: n
				}) : l(e, s, t),
				m = (e, {
					awards: t,
					minSize: s,
					postOrCommentId: r
				}) => {
					const a = Object(c.c)(e),
						o = d.find(e => e >= s),
						l = r ? Object(i.D)(e, {
							postId: r
						}) || Object(n.a)(e, {
							commentId: r
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = u({
						award: t,
						size: o,
						prefersReducedMotion: a,
						postOrComment: l
					})), e), {})
				},
				h = (e, {
					award: t,
					minSize: s,
					postOrCommentId: r
				}) => t ? m(e, {
					awards: [t],
					minSize: s,
					postOrCommentId: r
				})[t.id] : void 0,
				p = (e, {
					minSize: t,
					userName: s
				}) => {
					const r = Object(o.mb)(e, {
						userName: s
					});
					if (r && r.awardedLastMonth && r.awardedLastMonth.topAward) return h(e, {
						award: r.awardedLastMonth.topAward,
						minSize: t
					})
				},
				b = e => {
					const t = Object(a.b)(e),
						s = Object(a.a)(e);
					return h(e, {
						award: t,
						postOrCommentId: s || void 0,
						minSize: 512
					})
				}
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
			s.d(t, "p", (function() {
				return i
			})), s.d(t, "r", (function() {
				return o
			})), s.d(t, "q", (function() {
				return c
			})), s.d(t, "t", (function() {
				return d
			})), s.d(t, "s", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "o", (function() {
				return p
			})), s.d(t, "y", (function() {
				return b
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "v", (function() {
				return g
			})), s.d(t, "w", (function() {
				return C
			})), s.d(t, "u", (function() {
				return E
			})), s.d(t, "x", (function() {
				return w
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "k", (function() {
				return O
			})), s.d(t, "l", (function() {
				return I
			})), s.d(t, "j", (function() {
				return S
			})), s.d(t, "m", (function() {
				return T
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return k
			}));
			var r = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				n = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(n.a)({
				features: {
					goldPurchase: a.a
				}
			});
			const i = e => e.features.goldPurchase.purchaseModal.activePage,
				o = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => {
					const t = Object(r.i)(e),
						s = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && s && t.find(e => e.mobileId === s) || null
				},
				h = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				p = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				b = e => e.features.goldPurchase.updateCardModal.pending,
				f = e => e.features.goldPurchase.payment.paymentMethod,
				v = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.savedCardsPending,
				C = e => e.features.goldPurchase.payment.savedCards,
				E = e => e.features.goldPurchase.payment.rememberCard,
				w = e => e.features.goldPurchase.payment.useSavedCard,
				_ = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				x = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				y = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				O = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				I = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				S = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				T = e => e.features.goldPurchase.payment.stripeToken.pending,
				N = e => e.features.goldPurchase.payment.paypal.passthrough,
				k = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RpanListingUnit.5f4eca3834b41afb8819.js.map